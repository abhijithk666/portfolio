import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';
import { personalInfo, experience, skills, education, projects } from '@/lib/data';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Built from data.ts so the bot stays in sync with the resume.
const SYSTEM_PROMPT = `You are LowKi, ${personalInfo.name}'s personal AI assistant on his portfolio website. Your name is LowKi. Answer questions about him naturally and concisely.

About Abhijith:
- ${personalInfo.title} (${personalInfo.subtitle}), based in ${personalInfo.location}
- Summary: ${personalInfo.summary}

Experience:
${experience
  .map(
    (exp) =>
      `${exp.title}, ${exp.company} (${exp.period})\n` +
      exp.projects
        .map((p) => `  * ${p.name}${p.url ? ` (${p.url})` : ''}: ${p.description}\n${p.achievements.map((a) => `    - ${a}`).join('\n')}`)
        .join('\n'),
  )
  .join('\n')}

His AI/LLM projects are exactly: ${projects.filter((p) => p.tags.includes('AI / LLM')).map((p) => p.title).join(', ')}, plus the LangGraph agentic tools inside Mimir AI. The other projects are not AI products (he only used AI-assisted coding tools on some of them).

Skills:
${skills.map((g) => `- ${g.label}: ${g.items.join(', ')}`).join('\n')}

Education: ${education.degree}, ${education.institution} (${education.period})
Outside work: ${personalInfo.interests}. Fun fact: you, LowKi, are named as a nod to Loki.
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}
Open to new opportunities and collaborations.

Keep responses short and friendly — this is a chat widget, not a document. Write plain text only: no markdown, no asterisks, no headings (the widget can't render them); use simple line breaks for lists.
Only state facts listed above. Never invent or embellish projects, features, or personal details. If asked something you don't know about Abhijith, say you're not sure but suggest emailing him directly.`;

const MAX_MESSAGE_CHARS = 500;
const MAX_HISTORY = 10;
const RATE_LIMIT = 20; // requests per IP per window
const RATE_WINDOW_MS = 10 * 60 * 1000;

// ponytail: in-memory, per serverless instance — a determined abuser can still spread across
// instances. Add a Vercel WAF rate-limit rule on /api/chat (or Upstash) if the Groq bill matters.
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || entry.resetAt < now) {
    if (hits.size > 10_000) hits.clear();
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  return ++entry.count > RATE_LIMIT;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "You're sending messages too fast. Try again in a few minutes." }, { status: 429 });
    }

    const { message, history } = await req.json();

    if (typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }
    if (message.length > MAX_MESSAGE_CHARS) {
      return NextResponse.json({ error: `Please keep messages under ${MAX_MESSAGE_CHARS} characters.` }, { status: 400 });
    }

    const safeHistory = (Array.isArray(history) ? history : [])
      .filter((msg) => typeof msg?.text === 'string')
      .slice(-MAX_HISTORY);

    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...safeHistory.map((msg: { role: string; text: string }) => ({
        role: msg.role === 'model' ? 'assistant' as const : 'user' as const,
        content: msg.text.slice(0, MAX_MESSAGE_CHARS * 2),
      })),
      { role: 'user' as const, content: message },
    ];

    const completion = await groq.chat.completions.create({
      // llama-3.1-8b-instant was retired by Groq (model_not_found). Check
      // https://console.groq.com/docs/deprecations if this starts 500-ing again.
      model: 'openai/gpt-oss-20b',
      reasoning_effort: 'low', // reasoning tokens count toward max_tokens
      messages,
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || 'No response.';
    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
