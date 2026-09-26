import type { Metadata } from 'next';
import { InsightJsonLd, insightMetadata } from '@/lib/insight-page';

export const metadata: Metadata = insightMetadata('delivered-is-not-operated');

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InsightJsonLd slug="delivered-is-not-operated" />
      {children}
    </>
  );
}
