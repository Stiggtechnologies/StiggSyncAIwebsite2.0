import ManualChapterPage from '@/components/manuals/ManualChapterPage';
import { manualChapterMetadata } from '@/lib/manual-page';

export const metadata = manualChapterMetadata('recommendation');

export default function RecommendationChapterPage() {
  return <ManualChapterPage slug="recommendation" />;
}
