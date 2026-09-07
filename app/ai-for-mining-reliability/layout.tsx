import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'AI for Mining Reliability',
  description:
    'Governed industrial intelligence for mining and heavy-equipment reliability. Investigate failures and prioritize work from site evidence. A named human decides. Not plant execute.',
  path: '/ai-for-mining-reliability',
});

export default function MiningReliabilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
