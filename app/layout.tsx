import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://syncai.ca'),
  title: 'SyncAI — Industrial AI Infrastructure',
  description: 'Autonomous AI infrastructure for asset-intensive operations.',
  keywords: 'industrial AI, autonomous agents, maintenance optimization, asset management, CMMS, predictive maintenance, SyncAI',
  authors: [{ name: 'SyncAI' }],
  creator: 'SyncAI',
  publisher: 'SyncAI',
  alternates: {
    canonical: 'https://syncai.ca',
  },
  openGraph: {
    title: 'SyncAI — Industrial AI Infrastructure',
    description: 'Autonomous AI infrastructure for asset-intensive operations.',
    url: 'https://syncai.ca',
    siteName: 'SyncAI',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SyncAI — Industrial AI Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyncAI — Industrial AI Infrastructure',
    description: 'Autonomous AI infrastructure for asset-intensive operations.',
    images: ['/og-image.png'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0B0F14] text-white antialiased`}>
        <AnimatedBackground />
        <Navigation />
        <div className="relative z-10">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
