import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StiggSync AI - The Industrial AI Infrastructure Layer',
  description: 'Autonomous AI agents embedded inside asset-intensive operations — operating, prioritizing, and optimizing in real time.',
  keywords: 'industrial AI, autonomous agents, maintenance optimization, asset management, CMMS, predictive maintenance',
  openGraph: {
    title: 'StiggSync AI - The Industrial AI Infrastructure Layer',
    description: 'Autonomous AI agents embedded inside asset-intensive operations — operating, prioritizing, and optimizing in real time.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StiggSync AI - The Industrial AI Infrastructure Layer',
    description: 'Autonomous AI agents embedded inside asset-intensive operations — operating, prioritizing, and optimizing in real time.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
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
