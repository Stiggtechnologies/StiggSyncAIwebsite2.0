import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://syncai.ca'),
  title: { default: 'SyncAI — Governed Industrial Intelligence', template: '%s | SyncAI' },
  description: 'Governed industrial intelligence for reliability, maintenance, and asset-intensive operations. Ground decisions in approved knowledge, asset context, and operating evidence.',
  keywords: ['industrial AI','reliability engineering AI','maintenance AI','asset management','industrial intelligence','CMMS','EAM','reliability engineering','maintenance decision support'],
  authors: [{ name: 'SyncAI' }],
  creator: 'SyncAI',
  publisher: 'SyncAI',
  alternates: { canonical: 'https://syncai.ca' },
  openGraph: {
    title: 'SyncAI — Governed Industrial Intelligence',
    description: 'Ground reliability and maintenance decisions in approved knowledge, asset context, and operating evidence.',
    url: 'https://syncai.ca',
    siteName: 'SyncAI',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SyncAI — Governed Industrial Intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyncAI — Governed Industrial Intelligence',
    description: 'Ground reliability and maintenance decisions in approved knowledge, asset context, and operating evidence.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const organizationSchema = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'SyncAI', url: 'https://syncai.ca', email: 'info@syncai.ca',
  description: 'Governed industrial intelligence for reliability, maintenance, and asset-intensive operations.',
  brand: { '@type': 'Brand', name: 'SyncAI' },
};
const websiteSchema = {
  '@context': 'https://schema.org', '@type': 'WebSite', name: 'SyncAI', url: 'https://syncai.ca',
  description: 'Governed industrial intelligence for reliability, maintenance, and asset-intensive operations.',
  publisher: { '@type': 'Organization', name: 'SyncAI' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#081018] text-white antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Analytics />
        <Navigation />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
