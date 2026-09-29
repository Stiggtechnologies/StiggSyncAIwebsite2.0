import type { Metadata } from 'next';
import { InsightJsonLd, insightMetadata } from '@/lib/insight-page';

export const metadata: Metadata = insightMetadata('successor-destroyed-is-not-obliterated');

export default function InsightLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <InsightJsonLd slug="successor-destroyed-is-not-obliterated" />
      {children}
    </>
  );
}
