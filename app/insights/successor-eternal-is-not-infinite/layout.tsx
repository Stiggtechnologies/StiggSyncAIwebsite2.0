import type { Metadata } from 'next';
import { InsightJsonLd, insightMetadata } from '@/lib/insight-page';

export const metadata: Metadata = insightMetadata('successor-eternal-is-not-infinite');

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InsightJsonLd slug="successor-eternal-is-not-infinite" />
      {children}
    </>
  );
}
