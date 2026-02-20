'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Fuel, Zap, Truck, HardHat, Building2, Network } from 'lucide-react';

const industries = [
  {
    icon: Fuel,
    name: 'Oil & Gas',
    whatBreaks: [
      'Critical rotating equipment failures triggering $250K-$2M/hour production losses',
      'PM programs detached from real-time asset condition',
      'Work order prioritization driven by backlog, not risk exposure',
      'Cross-site coordination lag between field ops and central maintenance',
    ],
    whatChanges: [
      'Continuous risk scoring of critical rotating and static assets',
      'Real-time reprioritization of work based on production impact',
      'Cross-site operational intelligence layer',
      'Predictive escalation before shutdown thresholds are reached',
    ],
    economicFrame: 'In high-margin production environments, even marginal downtime reduction can justify autonomous infrastructure deployment within months.',
  },
  {
    icon: HardHat,
    name: 'Mining',
    whatBreaks: [
      'Haul truck and shovel downtime cascading into lost throughput',
      'Reactive maintenance driven by failure, not degradation signals',
      'Massive asset fleets with fragmented visibility',
      'Compliance documentation prepared manually post-event',
    ],
    whatChanges: [
      'Equipment health scoring aligned to throughput impact',
      'Predictive maintenance windows synchronized with production cycles',
      'Fleet-level risk benchmarking across sites',
      'Continuous audit trail for environmental and safety compliance',
    ],
    economicFrame: 'With hourly downtime costs exceeding $100K on critical equipment, predictive maintenance pays for itself with a single avoided failure.',
  },
  {
    icon: Building2,
    name: 'Heavy Manufacturing',
    whatBreaks: [
      'OEE degradation from unplanned stoppages',
      'Work order backlogs masking production-critical failures',
      'Siloed MES, CMMS, and ERP systems',
      'Maintenance strategy disconnected from production economics',
    ],
    whatChanges: [
      'AI-driven prioritization aligned to OEE impact',
      'Autonomous coordination between maintenance and production',
      'Real-time asset risk quantification',
      'Unified operational intelligence layer',
    ],
    economicFrame: 'Every percentage point of OEE improvement translates directly to throughput and margin. AI-driven prioritization compounds these gains.',
  },
  {
    icon: Zap,
    name: 'Utilities',
    whatBreaks: [
      'Aging transmission and distribution assets increasing failure risk',
      'Deferred capital budgets compounding reliability exposure',
      'Manual compliance documentation for regulatory bodies',
      'Limited predictive modeling across distributed grid infrastructure',
    ],
    whatChanges: [
      'Risk-based asset replacement modeling',
      'Predictive grid reliability scoring (SAIDI/SAIFI impact)',
      'Automated compliance documentation and traceability',
      'Intelligent field dispatch prioritization',
    ],
    economicFrame: 'Regulatory penalties and outage costs far exceed infrastructure investment. Proactive risk management is economically defensible.',
  },
  {
    icon: Truck,
    name: 'Equipment Rental',
    whatBreaks: [
      'Hidden degradation reducing rental readiness',
      'Maintenance cycles not aligned with utilization patterns',
      'Reactive repairs reducing asset availability windows',
      'Poor visibility into fleet-wide asset condition',
    ],
    whatChanges: [
      'Utilization-aware predictive maintenance scheduling',
      'Automated service timing between rental cycles',
      'Fleet-level health visibility dashboard',
      'Increased asset turnover efficiency',
    ],
    economicFrame: 'Higher fleet utilization and reduced emergency repairs directly improve unit economics and customer retention.',
  },
  {
    icon: Network,
    name: 'Multi-site Operators',
    whatBreaks: [
      'Inconsistent maintenance standards across sites',
      'No enterprise-wide asset risk benchmarking',
      'Delayed executive visibility into operational risk',
      'Manual reporting aggregation across locations',
    ],
    whatChanges: [
      'Enterprise-wide risk visibility and benchmarking',
      'Standardized AI-driven prioritization logic',
      'Cross-site performance benchmarking',
      'Executive-level operational dashboards',
    ],
    economicFrame: 'Standardization at scale creates compounding efficiency gains that accelerate with each site brought online.',
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Built for <span className="text-[#3B82F6]">Asset-Intensive</span> Industries
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Every industry has unique operational challenges. Our AI agents adapt to your specific context, constraints, and priorities.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-[#3B82F6]/10 to-transparent p-8 border-b border-white/10">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center">
                        <Icon className="text-[#3B82F6]" size={28} />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{industry.name}</h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div>
                      <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-4">
                        What Breaks Today
                      </h3>
                      <ul className="space-y-3">
                        {industry.whatBreaks.map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider mb-4">
                        What StiggSync Changes
                      </h3>
                      <ul className="space-y-3">
                        {industry.whatChanges.map((change, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm font-medium">{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="px-8 pb-8">
                    <p className="text-sm text-gray-500 italic border-l-2 border-[#3B82F6]/30 pl-4">
                      {industry.economicFrame}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-32 max-w-4xl mx-auto">
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-12 mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Economic Impact Across Industries
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Even modest improvements in unplanned downtime, reactive labor allocation, spare parts carrying cost, and compliance preparation time can justify autonomous maintenance deployment within a single fiscal cycle.
                </p>
                <p className="text-white font-medium">
                  StiggSync is designed for environments where operational risk carries measurable financial consequences.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="text-center border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Talk to Us About Your Environment
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              If you operate critical physical assets, StiggSync can adapt to your operational context.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30"
            >
              Contact Us
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
