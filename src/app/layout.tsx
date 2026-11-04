import type { Metadata } from 'next';
import { Inter, Lora, Architects_Daughter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { GridBackground } from '@/components/ui/grid-background';
import { FloatingChat } from '@/components/ui/floating-chat';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const architectsDaughter = Architects_Daughter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-handwriting',
  display: 'swap',
});

const SITE_URL = 'https://abhijithk-portfolio.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Abhijith K | Full Stack Developer',
    template: '%s | Abhijith K',
  },
  description:
    'Abhijith Kizhakkethodi is a Full Stack Developer based in Bengaluru with 4+ years of experience building AI-powered web apps using React, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Abhijith K',
    'Abhijith Kizhakkethodi',
    'Full Stack Developer',
    'Frontend Engineer',
    'React Developer',
    'AI Engineer',
    'LLM Integration',
    'Next.js Developer',
    'TypeScript',
    'Bengaluru',
    'India',
    'Software Engineer',
    'Web Developer',
    'Tarento',
  ],
  authors: [{ name: 'Abhijith K', url: SITE_URL }],
  creator: 'Abhijith K',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Abhijith K',
    title: 'Abhijith K | Full Stack Developer',
    description:
      'Abhijith Kizhakkethodi is a Full Stack Developer based in Bengaluru with 4+ years of experience building AI-powered web apps using React, Next.js, TypeScript, and Node.js.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijith K | Full Stack Developer',
    description:
      'Abhijith Kizhakkethodi is a Full Stack Developer based in Bengaluru with 4+ years of experience building AI-powered web apps using React, Next.js, TypeScript, and Node.js.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Abhijith K',
              alternateName: 'Abhijith Kizhakkethodi',
              url: SITE_URL,
              image: `${SITE_URL}/images/me-portfolio.png`,
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Tarento Technologies',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                addressCountry: 'IN',
              },
              email: 'abhijithkizhakkethodi@gmail.com',
              sameAs: [
                'https://linkedin.com/in/abhijith-k-1b11061a0/',
                'https://github.com/abhijithk666/',
              ],
              knowsAbout: [
                'React.js', 'Next.js', 'TypeScript', 'JavaScript',
                'Frontend Development', 'Web Development', 'Node.js',
                'LLM Integration', 'Agentic AI', 'LangGraph',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${lora.variable} ${architectsDaughter.variable} font-sans antialiased bg-background text-foreground min-h-screen relative`}>
        <ThemeProvider>
          <ErrorBoundary>
            <GridBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <FloatingChat />
            </div>
            <Analytics />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
