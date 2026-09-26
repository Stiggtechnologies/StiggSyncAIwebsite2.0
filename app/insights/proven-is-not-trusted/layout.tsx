import type { Metadata } from 'next';
import { InsightJsonLd, insightMetadata } from '@/lib/insight-page';

export const metadata: Metadata = insightMetadata('proven-is-not-trusted');

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InsightJsonLd slug="proven-is-not-trusted" />
      {children}
    </>
  );
}
