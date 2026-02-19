'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Shield, Eye, Lock, FileCheck, Users, Database } from 'lucide-react';

const securityPrinciples = [
  {
    icon: Users,
    title: 'Human-in-the-Loop Model',
    description: 'AI agents recommend and prioritize. Humans approve and execute. Configurable approval thresholds ensure appropriate oversight for every decision.',
  },
  {
    icon: FileCheck,
    title: 'Audit Logs & Traceability',
    description: 'Every AI recommendation, human decision, and system action is logged with full context. Complete auditability for compliance and continuous improvement.',
  },
  {
    icon: Lock,
    title: 'Role-Based Access Controls',
    description: 'Granular permissions by role, site, and asset group. Integration with enterprise SSO and identity providers. Principle of least privilege enforced.',
  },
  {
    icon: Database,
    title: 'Data Segregation',
    description: 'Multi-tenant architecture with complete data isolation. Optional on-premise or private cloud deployment for maximum control.',
  },
  {
    icon: Eye,
    title: 'Transparent AI Operations',
    description: 'Explainable AI with clear reasoning chains. No black boxes. Every recommendation includes supporting evidence and risk analysis.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Infrastructure',
    description: 'Built on hardened cloud infrastructure with encryption at rest and in transit. Regular security assessments and penetration testing.',
  },
];

export default function SecurityPage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Security & <span className="text-[#3B82F6]">Governance</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade security with human oversight at every level.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {securityPrinciples.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/20 transition-colors">
                    <Icon className="text-[#3B82F6]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{principle.description}</p>
              </AnimatedCard>
            );
          })}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="max-w-4xl mx-auto mb-32">
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Governance Framework</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  StiggSync operates under a configurable governance model that ensures human oversight matches your risk tolerance and operational requirements.
                </p>
                <p>
                  Define approval thresholds by asset criticality, work order value, or risk score. Route decisions to appropriate stakeholders automatically. Override any AI recommendation at any time.
                </p>
                <p>
                  All system actions are traceable to a human decision-maker. AI agents augment your team — they do not replace accountability.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.7}>
          <div className="max-w-4xl mx-auto mb-32">
            <div className="border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Sensitive Industries</h2>
              <p className="text-xl text-gray-300 leading-relaxed text-center mb-8">
                We understand the regulatory and security requirements of highly regulated environments including healthcare, defense, and critical infrastructure.
              </p>
              <p className="text-lg text-gray-400 text-center">
                While we do not currently claim specific certifications, our architecture is designed with compliance-readiness for HIPAA, SOC 2, and industrial security standards.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <div className="max-w-4xl mx-auto">
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Data Privacy</h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Your operational data remains under your control. StiggSync can be deployed in your cloud environment or on-premise to meet data residency and sovereignty requirements.
                </p>
                <p>
                  We do not train AI models on customer data without explicit consent. Your competitive intelligence stays yours.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.9}>
          <div className="mt-20 text-center border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Request Security Overview</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get detailed documentation on our security architecture, compliance posture, and governance capabilities.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30"
            >
              Contact Security Team
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
