import ManualChapterPage from '@/components/manuals/ManualChapterPage';
import { manualChapterMetadata } from '@/lib/manual-page';

export const metadata = manualChapterMetadata('question');

export default function QuestionChapterPage() {
  return <ManualChapterPage slug="question" />;
}
