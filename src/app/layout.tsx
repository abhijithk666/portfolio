import type { Metadata } from 'next';
import { Inter, Lora, Architects_Daughter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { GridBackground } from '@/components/ui/grid-background';
import { FloatingChat } from '@/components/ui/floating-chat';
import { ThemeProvider } from '@/components/theme-provider';

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

export const metadata: Metadata = {
  title: 'Abhijith K | Frontend Engineer',
  description:
    'Frontend Engineer with 3+ years of experience building secure, high-performance web applications using React, TypeScript, and Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
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
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
