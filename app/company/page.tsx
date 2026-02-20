'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Target, TrendingUp, Users, Handshake } from 'lucide-react';

const milestones = [
  {
    year: '2024',
    title: 'Foundation',
    description: 'Research & development of autonomous agent architecture',
  },
  {
    year: '2025',
    title: 'First Deployments',
    description: 'Strategic pilots with asset-intensive operators',
  },
  {
    year: '2026',
    title: 'Enterprise Expansion',
    description: 'Multi-site deployments and industry vertical scaling',
  },
];

const whyNow = [
  {
    icon: Users,
    title: 'Labor Shortage Crisis',
    description: 'Skilled maintenance technicians retiring faster than replacements can be trained. Operations must scale without proportional headcount.',
  },
  {
    icon: TrendingUp,
    title: 'Exponential Complexity',
    description: 'Asset portfolios growing, regulations tightening, downtime costs escalating. Human coordination cannot keep pace.',
  },
  {
    icon: Target,
    title: 'AI Maturity',
    description: 'Generative AI has reached the capability threshold for autonomous industrial reasoning, risk analysis, and decision-making at scale.',
  },
];

export default function CompanyPage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Industrial AI <span className="text-[#3B82F6]">Infrastructure</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Building the autonomous intelligence layer for asset-intensive operations.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="max-w-4xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Industrial operations have reached an inflection point. Asset complexity has outpaced human coordination capacity. Maintenance backlogs grow faster than teams can execute. Risk exposure is rising while budgets remain flat.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              SyncAI is building the infrastructure layer that enables autonomous industrial operations — AI agents that continuously analyze risk, prioritize work, and coordinate execution with human oversight.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mb-32">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Now</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyNow.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors">
                      <Icon className="text-[#3B82F6]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mb-32">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Milestones</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 flex items-start space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center">
                      <span className="text-[#3B82F6] font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400 text-lg">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mb-32">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Team & Advisors</h2>
            <div className="max-w-4xl mx-auto">
              <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-12 text-center">
                <p className="text-xl text-gray-300 mb-8">
                  Our team brings deep expertise from industrial operations, enterprise AI, and mission-critical systems.
                </p>
                <p className="text-lg text-gray-400">
                  Backed by advisors from asset-intensive industries, reliability engineering, and autonomous systems research.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start space-x-6 mb-8">
                <div className="w-12 h-12 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="text-[#3B82F6]" size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Partner-Friendly</h2>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    We work with operators, OEMs, EPCs, and system integrators. SyncAI is infrastructure — it enhances your existing relationships and systems.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/strategic-pilot"
                      className="inline-block px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30 text-center"
                    >
                      Apply for Strategic Pilot
                    </a>
                    <a
                      href="/contact"
                      className="inline-block px-8 py-4 bg-white/5 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
