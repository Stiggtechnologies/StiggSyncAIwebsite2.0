'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Factory, Zap, Droplet, Plane, Building2, Ship } from 'lucide-react';

const industries = [
  {
    icon: Factory,
    name: 'Manufacturing',
    painPoints: [
      'Unplanned downtime costing millions annually',
      'Reactive maintenance culture',
      'Poor visibility into production asset health',
    ],
    useCases: [
      'Predictive failure detection on critical production lines',
      'Autonomous work order prioritization by production impact',
      'Real-time OEE optimization through intelligent maintenance scheduling',
    ],
    outcomes: [
      '40% reduction in unplanned downtime',
      '25% improvement in asset utilization',
      'ROI-positive maintenance decisions',
    ],
  },
  {
    icon: Zap,
    name: 'Energy & Utilities',
    painPoints: [
      'Grid reliability under increasing demand',
      'Aging infrastructure with limited budgets',
      'Complex regulatory compliance requirements',
    ],
    useCases: [
      'Grid asset risk scoring and failure prediction',
      'Optimized maintenance routing for field teams',
      'Automated compliance reporting and documentation',
    ],
    outcomes: [
      'Improved grid reliability metrics',
      'Reduced emergency maintenance incidents',
      'Streamlined regulatory compliance',
    ],
  },
  {
    icon: Droplet,
    name: 'Water & Wastewater',
    painPoints: [
      'Critical infrastructure with deferred maintenance',
      'Limited operational budgets and staffing',
      'Environmental compliance pressure',
    ],
    useCases: [
      'Pump station failure prediction and prioritization',
      'Asset lifecycle optimization across distributed systems',
      'Environmental incident prevention through predictive monitoring',
    ],
    outcomes: [
      'Extended asset lifespans',
      'Reduced regulatory violations',
      'Optimized capital expenditure planning',
    ],
  },
  {
    icon: Plane,
    name: 'Aviation & Aerospace',
    painPoints: [
      'Safety-critical maintenance with zero margin for error',
      'Complex supply chain for specialized parts',
      'Regulatory documentation overhead',
    ],
    useCases: [
      'Predictive maintenance for aircraft systems',
      'Intelligent parts inventory and procurement',
      'Automated maintenance record keeping',
    ],
    outcomes: [
      'Improved fleet availability',
      'Reduced AOG incidents',
      'Streamlined regulatory audits',
    ],
  },
  {
    icon: Building2,
    name: 'Commercial Real Estate',
    painPoints: [
      'Reactive facilities management',
      'Poor tenant experience due to system failures',
      'Rising operational costs',
    ],
    useCases: [
      'HVAC optimization and predictive maintenance',
      'Automated work order generation and routing',
      'Energy consumption optimization',
    ],
    outcomes: [
      'Improved tenant satisfaction scores',
      'Reduced energy costs',
      'Lower emergency maintenance expenses',
    ],
  },
  {
    icon: Ship,
    name: 'Maritime & Shipping',
    painPoints: [
      'Vessel downtime impacting delivery schedules',
      'Remote diagnostics challenges',
      'Complex maintenance coordination across ports',
    ],
    useCases: [
      'Vessel system health monitoring and prediction',
      'Port-based maintenance optimization',
      'Parts procurement and logistics coordination',
    ],
    outcomes: [
      'Reduced vessel downtime',
      'Improved on-time delivery rates',
      'Lower maintenance costs per voyage',
    ],
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

                  <div className="grid md:grid-cols-3 gap-8 p-8">
                    <div>
                      <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider mb-4">
                        Pain Points
                      </h3>
                      <ul className="space-y-3">
                        {industry.painPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider mb-4">
                        AI Use Cases
                      </h3>
                      <ul className="space-y-3">
                        {industry.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider mb-4">
                        Operational Outcomes
                      </h3>
                      <ul className="space-y-3">
                        {industry.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-300 text-sm font-medium">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-32 text-center border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              If you operate critical physical assets, StiggSync can adapt to your operational context.
            </p>
            <a
              href="/strategic-pilot"
              className="inline-block px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30"
            >
              Discuss Your Use Case
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
