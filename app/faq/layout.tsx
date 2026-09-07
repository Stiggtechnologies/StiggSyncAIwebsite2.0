import type { Metadata } from 'next';
import { noindexMetadata } from '@/lib/seo';

export const metadata: Metadata = noindexMetadata('FAQ', '/faq');

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
