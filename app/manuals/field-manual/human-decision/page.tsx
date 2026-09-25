import ManualChapterPage from '@/components/manuals/ManualChapterPage';
import { manualChapterMetadata } from '@/lib/manual-page';

export const metadata = manualChapterMetadata('human-decision');

export default function HumanDecisionChapterPage() {
  return <ManualChapterPage slug="human-decision" />;
}
