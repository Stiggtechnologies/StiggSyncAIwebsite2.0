import './globals.css';
import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  organizationSchema,
  softwareApplicationSchema,
  websiteSchema,
} from '@/lib/seo';

const display = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-display', display: 'swap' });
const body = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'industrial AI',
    'reliability engineering AI',
    'maintenance AI',
    'asset management',
    'industrial intelligence',
    'CMMS',
    'EAM',
    'reliability engineering',
    'maintenance decision support',
    'mining reliability',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: [
      { url: '/brand/syncai-icon.svg', type: 'image/svg+xml' },
      { url: '/brand/syncai-icon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/brand/syncai-icon-180.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description:
      'Ground reliability and maintenance decisions in approved knowledge, asset context, and operating evidence.',
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630, alt: DEFAULT_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
    title: DEFAULT_TITLE,
    description:
      'Ground reliability and maintenance decisions in approved knowledge, asset context, and operating evidence.',
  },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${body.variable} ${mono.variable} bg-ink font-sans text-bone antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <a href="#main-content" className="sr-only fixed left-4 top-4 z-[100] rounded-sm bg-cyan-300 px-5 py-3 text-ink focus:not-sr-only">Skip to content</a>
        <Analytics />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
