'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { Factory, Zap, Droplet, Plane, Building2, Ship } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    name: 'Oil & Gas',
    whatBreaks: [
      'Offshore equipment failures causing multi-million dollar losses',
      'Reactive maintenance culture with unpredictable shutdowns',
      'Poor coordination across distributed field operations',
    ],
    whatChanges: [
      'Predictive equipment failure detection for critical assets',
      'Autonomous risk-based prioritization of field work',
      'Real-time operational visibility across distributed sites',
    ],
    economicFrame: 'In high-margin production environments, even marginal downtime reduction can justify autonomous infrastructure deployment within months.',
  },
  {
    icon: Plane,
    name: 'Mining',
    whatBreaks: [
      'Heavy equipment failures halting production',
      'Massive asset portfolios with limited maintenance staff',
      'Safety and environmental compliance pressure',
    ],
    whatChanges: [
      'Equipment health scoring and failure prediction',
      'Intelligent maintenance scheduling to minimize production impact',
      'Automated compliance documentation and reporting',
    ],
    economicFrame: 'With hourly downtime costs exceeding $100K on critical equipment, predictive maintenance pays for itself with a single avoided failure.',
  },
  {
    icon: Building2,
    name: 'Heavy Manufacturing',
    whatBreaks: [
      'Unplanned production line downtime costing millions',
      'Work order backlogs growing faster than execution capacity',
      'Disconnected systems creating information silos',
    ],
    whatChanges: [
      'AI-driven work order prioritization by production impact',
      'Predictive maintenance reducing emergency repairs',
      'Unified operational intelligence across systems',
    ],
    economicFrame: 'Every percentage point of OEE improvement translates directly to throughput and margin. AI-driven prioritization compounds these gains.',
  },
  {
    icon: Zap,
    name: 'Utilities',
    whatBreaks: [
      'Aging grid infrastructure with increasing failure risk',
      'Limited budgets and skilled workforce shortages',
      'Regulatory compliance complexity',
    ],
    whatChanges: [
      'Grid asset risk scoring and intelligent replacement planning',
      'Optimized field team routing and resource allocation',
      'Automated regulatory reporting and audit readiness',
    ],
    economicFrame: 'Regulatory penalties and outage costs far exceed infrastructure investment. Proactive risk management is economically defensible.',
  },
  {
    icon: Droplet,
    name: 'Equipment Rental',
    whatBreaks: [
      'Equipment downtime impacting customer commitments',
      'Poor visibility into asset health across rental fleet',
      'Reactive maintenance increasing operating costs',
    ],
    whatChanges: [
      'Fleet health monitoring and predictive maintenance',
      'Automated maintenance scheduling between rentals',
      'Improved asset utilization and customer satisfaction',
    ],
    economicFrame: 'Higher fleet utilization and reduced emergency repairs directly improve unit economics and customer retention.',
  },
  {
    icon: Ship,
    name: 'Multi-site Operators',
    whatBreaks: [
      'Inconsistent maintenance practices across locations',
      'Limited visibility into enterprise-wide asset health',
      'Difficulty standardizing operations at scale',
    ],
    whatChanges: [
      'Enterprise-wide operational intelligence and benchmarking',
      'Standardized AI-driven maintenance workflows',
      'Centralized governance with site-level autonomy',
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
          <div className="mt-32 text-center border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
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
