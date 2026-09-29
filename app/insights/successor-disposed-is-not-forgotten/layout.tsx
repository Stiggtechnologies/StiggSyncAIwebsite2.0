import type { Metadata } from 'next';
import { InsightJsonLd, insightMetadata } from '@/lib/insight-page';

export const metadata: Metadata = insightMetadata('successor-disposed-is-not-forgotten');

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InsightJsonLd slug="successor-disposed-is-not-forgotten" />
      {children}
    </>
  );
}
