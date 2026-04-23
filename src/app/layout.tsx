import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.geekventures.com'),
  title: 'GeekVentures | AI & Software Agency',
  description:
    'GeekVentures builds AI-powered business solutions, modern software products, and seamless digital experiences for ambitious companies.',
  openGraph: {
    title: 'GeekVentures | AI & Software Agency',
    description:
      'AI systems, modern software, and premium digital experiences for forward-looking businesses.',
    url: 'https://www.geekventures.com',
    siteName: 'GeekVentures',
    images: ['/banner.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeekVentures | AI & Software Agency',
    description:
      'AI systems, modern software, and premium digital experiences for forward-looking businesses.',
    images: ['/banner.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
