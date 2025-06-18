import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/ui/theme-provider';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FileShare - Secure File Sharing',
  description: 'Share files effortlessly with secure, fast file transfers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider

          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          {children}

          <Footer />
          <Toaster position="bottom-right" />
          <NextTopLoader />
        </ThemeProvider>
      </body>
    </html>
  );
}