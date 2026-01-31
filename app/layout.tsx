import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { getCurrentSite } from '@/lib/sites';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

// Dynamic metadata based on current site
const site = getCurrentSite();

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: site.metadata.title,
    template: `%s | ${site.name}`,
  },
  description: site.metadata.description,
  keywords: site.metadata.keywords,
  authors: site.metadata.author
    ? [{ name: site.metadata.author, url: 'https://www.linkedin.com/in/vijayga' }]
    : undefined,
  creator: site.metadata.author,
  publisher: site.metadata.author,
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
    url: site.baseUrl,
    siteName: site.name,
    title: site.metadata.title,
    description: site.metadata.description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: site.metadata.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.metadata.title,
    description: site.metadata.description,
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: site.baseUrl,
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
