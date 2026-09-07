import type { Metadata } from 'next';
import { noindexMetadata } from '@/lib/seo';

export const metadata: Metadata = noindexMetadata('Microsoft', '/microsoft');

export default function MicrosoftLayout({ children }: { children: React.ReactNode }) {
  return children;
}
