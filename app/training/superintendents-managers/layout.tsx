import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { getOffer } from '@/lib/training-offers';

const offer = getOffer('superintendents-managers');

export const metadata: Metadata = pageMetadata({
  title: offer.metaTitle,
  description: offer.metaDescription,
  path: offer.path,
});

export default function TrainingOfferLayout({ children }: { children: React.ReactNode }) {
  return children;
}
