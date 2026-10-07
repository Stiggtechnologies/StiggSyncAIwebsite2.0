import TrainingLanding from '@/components/training/TrainingLanding';
import { getOffer } from '@/lib/training-offers';

export default function TrainingOfferPage() {
  return <TrainingLanding offer={getOffer('superintendents-managers')} />;
}
