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
    default: 'GeekVentures | Creative & Digital Agency',
    template: '%s | GeekVentures'
  },
  description:
    'Video editing, social media marketing, websites, and AI-powered apps. GeekVentures turns good ideas into great digital experiences.',
  applicationName: 'GeekVentures',
  keywords: [
    'video editing agency',
    'social media marketing',
    'web development agency',
    'digital agency',
    'AI applications',
    'custom chatbots',
    'app development'
  ],
  authors: [{ name: 'GeekVentures' }],
  creator: 'GeekVentures',
  publisher: 'GeekVentures',
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/apple-icon.png', sizes: '512x512', type: 'image/png' }],
    shortcut: ['/favicon.png']
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
    title: 'GeekVentures | Creative & Digital Agency',
    description:
      'Video, social, websites, and AI-powered apps. Good ideas. Great impact.',
    url: 'https://www.geekventures.com',
    siteName: 'GeekVentures',
    images: ['/images/banner.png'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GeekVentures | Creative & Digital Agency',
    description:
      'Video, social, websites, and AI-powered apps. Good ideas. Great impact.',
    images: ['/images/banner.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#05070d',
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
