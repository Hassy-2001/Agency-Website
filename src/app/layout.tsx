import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.geekventures.com'),
  title: {
    default: 'GeekVentures | AI & Software Agency',
    template: '%s | GeekVentures'
  },
  description:
    'GeekVentures builds AI-powered business solutions, modern software products, and seamless digital experiences for ambitious companies.',
  applicationName: 'GeekVentures',
  keywords: [
    'AI automation agency',
    'custom software agency',
    'web development agency',
    'digital agency',
    'business automation',
    'SaaS development'
  ],
  authors: [{ name: 'GeekVentures' }],
  creator: 'GeekVentures',
  publisher: 'GeekVentures',
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: 'GeekVentures | AI & Software Agency',
    description:
      'AI systems, modern software, and premium digital experiences for forward-looking businesses.',
    url: 'https://www.geekventures.com',
    siteName: 'GeekVentures',
    images: ['/images/banner.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeekVentures | AI & Software Agency',
    description:
      'AI systems, modern software, and premium digital experiences for forward-looking businesses.',
    images: ['/images/banner.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#030712',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
