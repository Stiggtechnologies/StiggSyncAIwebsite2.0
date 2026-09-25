import ManualChapterPage from '@/components/manuals/ManualChapterPage';
import { manualChapterMetadata } from '@/lib/manual-page';

export const metadata = manualChapterMetadata('evidence');

export default function EvidenceChapterPage() {
  return <ManualChapterPage slug="evidence" />;
}
