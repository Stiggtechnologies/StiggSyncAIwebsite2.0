import type { Metadata } from 'next';
import { noindexMetadata } from '@/lib/seo';

export const metadata: Metadata = noindexMetadata('Philosophy', '/philosophy');

export default function PhilosophyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
