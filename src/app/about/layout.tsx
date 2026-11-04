import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Abhijith Kizhakkethodi — a Full Stack Developer from Bengaluru building AI-powered web apps with React, Next.js, TypeScript, and Node.js, with 4+ years at Tarento Technologies.',
  alternates: {
    canonical: 'https://abhijithk-portfolio.vercel.app/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
