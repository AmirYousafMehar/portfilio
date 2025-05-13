import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/theme/ThemeProvider';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Full Stack Developer Portfolio',
  description: 'A showcase of my work, skills, and experience as a full stack developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoMono.variable} font-sans`}>
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}