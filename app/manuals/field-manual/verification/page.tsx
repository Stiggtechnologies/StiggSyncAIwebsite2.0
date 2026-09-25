import ManualChapterPage from '@/components/manuals/ManualChapterPage';
import { manualChapterMetadata } from '@/lib/manual-page';

export const metadata = manualChapterMetadata('verification');

export default function VerificationChapterPage() {
  return <ManualChapterPage slug="verification" />;
}
