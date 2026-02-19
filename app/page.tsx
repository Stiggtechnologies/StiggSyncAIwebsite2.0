import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import ShiftSection from '@/components/home/ShiftSection';
import AIWorkforceSection from '@/components/home/AIWorkforceSection';
import ImpactSection from '@/components/home/ImpactSection';
import InfrastructureSection from '@/components/home/InfrastructureSection';
import FinalCTASection from '@/components/home/FinalCTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ShiftSection />
      <AIWorkforceSection />
      <ImpactSection />
      <InfrastructureSection />
      <FinalCTASection />
    </>
  );
}
