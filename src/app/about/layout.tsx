import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Abhijith Kizhakkethodi — a Frontend Engineer from Bengaluru specialising in React, Next.js, and TypeScript with 3+ years at Tarento Technologies.',
  alternates: {
    canonical: 'https://abhijithk-portfolio.vercel.app/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
