import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Insights',
  description:
    'Notes on CMMS limits, maintenance economics, and industrial AI governance. Evidence and named human approval come before automation claims.',
  path: '/insights',
});

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
