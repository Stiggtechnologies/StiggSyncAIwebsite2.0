import type { Metadata } from 'next';
import { noindexMetadata } from '@/lib/seo';

export const metadata: Metadata = noindexMetadata('Investors', '/investors');

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
