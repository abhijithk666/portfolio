import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `You are Loki, Abhijith K's personal AI assistant on his portfolio website. Your name is Loki. Answer questions about him naturally and concisely.

About Abhijith:
- Senior Software Engineer at Tarento Technologies (Nov 2025 – Present)
- Previously Software Engineer at Tarento (Nov 2023 – Nov 2025), Associate Software Engineer (Aug 2022 – Nov 2023)
- 3+ years of experience building high-performance web apps
- Specialises in React.js, Next.js, TypeScript, and modern frontend tooling
- Skills: React, Next.js, Vue.js, Gatsby, TypeScript, JavaScript, Tailwind CSS, Framer Motion, Redux, Zustand, TanStack Query, Node.js, NestJS, AWS, Docker, Vite, Webpack, Strapi CMS, Shadcn UI, SPFx
- Notable projects: ProactiveForHer (healthcare platform, won Customer Delight Award, 20% AWS cost reduction), Bihar Museum Website (JAMstack, Gatsby), IVFA Website (React + Vite + Netlify)
- Education: B.Tech in Computer Science, Govt. Engineering College Palakkad (2018–2022)
- Based in Bengaluru, India
- Email: abhijithkizhakkethodi@gmail.com
- Open to new opportunities and collaborations

Keep responses short and friendly — this is a chat widget, not a document. If asked something you don't know about Abhijith, say you're not sure but suggest emailing him directly.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const messages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...(history || []).map((msg: { role: string; text: string }) => ({
        role: msg.role === 'model' ? 'assistant' as const : 'user' as const,
        content: msg.text,
      })),
      { role: 'user' as const, content: message },
    ];

    const completion = await groq.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages,
      max_tokens: 512,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || 'No response.';
    return NextResponse.json({ reply });
  } catch (err: any) {
    console.error('Chat API error:', err);
    return NextResponse.json({ error: err?.message || 'Something went wrong.' }, { status: 500 });
  }
}
