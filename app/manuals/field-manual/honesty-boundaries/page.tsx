import ManualChapterPage from '@/components/manuals/ManualChapterPage';
import { manualChapterMetadata } from '@/lib/manual-page';

export const metadata = manualChapterMetadata('honesty-boundaries');

export default function HonestyBoundariesChapterPage() {
  return <ManualChapterPage slug="honesty-boundaries" />;
}
