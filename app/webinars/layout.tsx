import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { webinarDraftEnabled } from '@/lib/webinar';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = { robots: { index: false, follow: false }, title: 'Webinar draft' };

export default function WebinarDraftLayout({ children }: { children: React.ReactNode }) {
  if (!webinarDraftEnabled(process.env)) notFound();
  return <>{children}</>;
}
