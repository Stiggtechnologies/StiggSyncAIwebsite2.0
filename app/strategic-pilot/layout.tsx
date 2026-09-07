import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Strategic Pilot',
  description:
    'A bounded SyncAI deployment around one consequential reliability decision. Evidence boundary, named human approval, and outcome verification come before scale.',
  path: '/strategic-pilot',
});

export default function StrategicPilotLayout({ children }: { children: React.ReactNode }) {
  return children;
}
