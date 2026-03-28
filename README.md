# Abhijith K - Portfolio

Personal portfolio website built with Next.js, showcasing my work, experience, and skills as a Senior Software Engineer.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **AI Chatbot:** Groq API (llama-3.1-8b-instant)
- **Language:** TypeScript

## Features

- Dark / light theme with smooth transitions
- Interactive hero image with parallax and glitch effect
- Experience timeline with project breakdowns
- Projects showcase
- HTML-rendered resume with PDF download
- About page with tools and background
- Fun page
- AI chatbot assistant (Loki) powered by Groq
- Fully responsive across all screen sizes

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root:

```env
GROQ_API_KEY=your_groq_api_key
```

Get a free API key at [console.groq.com](https://console.groq.com).

## Project Structure

```
src/
├── app/
│   ├── about/        # About page
│   ├── api/chat/     # Groq chatbot API route
│   ├── fun/          # Fun page
│   ├── resume/       # Resume page
│   └── page.tsx      # Home page
├── components/
│   ├── layout/       # Navbar, footer
│   ├── sections/     # Hero, Experience, Projects, Contact, etc.
│   └── ui/           # Reusable UI components
├── lib/
│   └── data.ts       # All portfolio content
└── types/
    └── index.ts      # TypeScript interfaces
```

## Deploy

The website is deployed via [Vercel](https://vercel.com).

## Live Demo

https://abhijithk.vercel.app/