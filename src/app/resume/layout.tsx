import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume of Abhijith Kizhakkethodi — Frontend Engineer with expertise in React, Next.js, TypeScript, and modern web tooling. Available to download as PDF.',
  alternates: {
    canonical: 'https://abhijithk-portfolio.vercel.app/resume',
  },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
