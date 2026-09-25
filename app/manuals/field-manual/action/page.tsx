import ManualChapterPage from '@/components/manuals/ManualChapterPage';
import { manualChapterMetadata } from '@/lib/manual-page';

export const metadata = manualChapterMetadata('action');

export default function ActionChapterPage() {
  return <ManualChapterPage slug="action" />;
}
