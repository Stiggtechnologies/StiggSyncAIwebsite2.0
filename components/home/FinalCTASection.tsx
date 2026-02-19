'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowButton from '@/components/ui/GlowButton';

export default function FinalCTASection() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[120px]" />
      </div>

      <AnimatedSection>
        <div className="relative text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            The Future of Industrial Operations is{' '}
            <span className="text-[#3B82F6]">Autonomous</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join the organizations building the next generation of operational excellence.
          </p>
          <GlowButton href="/strategic-pilot" variant="primary">
            Apply for Strategic Pilot
          </GlowButton>
        </div>
      </AnimatedSection>
    </Section>
  );
}
