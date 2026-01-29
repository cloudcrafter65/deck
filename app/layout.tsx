import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://deck.vercel.app'),
  title: {
    default: 'Vijayakumar G.A. | CTO AI Transformation',
    template: '%s | Vijayakumar G.A.',
  },
  description: 'APAC CTO-calibre technology executive with 20+ years in AI Transformation, Generative AI, and Go-To-Market execution. Trusted advisor to senior executives across APAC.',
  keywords: [
    'AI Transformation',
    'CTO',
    'Generative AI',
    'GenAI',
    'RAG',
    'AI Agents',
    'ML Ops',
    'Enterprise AI',
    'Digital Transformation',
    'Technology Executive',
    'APAC',
    'Singapore',
    'GTM Strategy',
    'Executive Advisory',
  ],
  authors: [{ name: 'Vijayakumar G.A.', url: 'https://www.linkedin.com/in/vijayga' }],
  creator: 'Vijayakumar G.A.',
  publisher: 'Vijayakumar G.A.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deck.vercel.app',
    siteName: 'Vijayakumar G.A.',
    title: 'Vijayakumar G.A. | CTO AI Transformation',
    description: 'APAC CTO-calibre technology executive with 20+ years in AI Transformation, Generative AI, and Go-To-Market execution.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vijayakumar G.A. - CTO AI Transformation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vijayakumar G.A. | CTO AI Transformation',
    description: 'APAC CTO-calibre technology executive with 20+ years in AI Transformation, Generative AI, and Go-To-Market execution.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://deck.vercel.app',
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
