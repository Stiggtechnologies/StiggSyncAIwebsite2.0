import type { Metadata } from 'next';
import { noindexMetadata } from '@/lib/seo';

export const metadata: Metadata = noindexMetadata('AWS', '/aws');

export default function AwsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
