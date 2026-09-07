import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Architecture',
  description:
    'SyncAI sits across existing systems of record: evidence and context, industrial intelligence, named human authority, then verification. Not a rip-and-replace CMMS.',
  path: '/architecture',
});

export default function ArchitectureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
