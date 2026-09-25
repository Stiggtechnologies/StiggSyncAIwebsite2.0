import ManualChapterPage from '@/components/manuals/ManualChapterPage';
import { manualChapterMetadata } from '@/lib/manual-page';

export const metadata = manualChapterMetadata('learning');

export default function LearningChapterPage() {
  return <ManualChapterPage slug="learning" />;
}
