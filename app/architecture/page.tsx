'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { motion } from 'framer-motion';
import { Network, Database, Shield, FileCheck, Lock, Activity } from 'lucide-react';

const architectureBlocks = [
  {
    icon: Network,
    title: 'AI Agent Orchestration Layer',
    description: 'Multi-agent system coordinating risk assessment, priority management, and autonomous decision-making across operational domains.',
    features: [
      'Real-time agent communication protocol',
      'Context-aware task delegation',
      'Continuous learning from operational outcomes',
      'Human-in-the-loop override mechanisms',
    ],
  },
  {
    icon: Database,
    title: 'Data Integration Layer',
    description: 'Unified data ingestion from CMMS, ERP, IoT sensors, and operational systems without replacement.',
    features: [
      'API-first connectivity to existing systems',
      'Real-time data synchronization',
      'Semantic normalization across data sources',
      'Historical trend analysis and pattern detection',
    ],
  },
  {
    icon: Activity,
    title: 'Human Oversight & Governance',
    description: 'Transparent decision logs, configurable approval workflows, and executive visibility into AI operations.',
    features: [
      'Full audit trail of AI recommendations',
      'Configurable escalation thresholds',
      'Role-based access and approval gates',
      'Explainable AI decision reports',
    ],
  },
  {
    icon: FileCheck,
    title: 'ISO 55000 Alignment',
    description: 'Built-in compliance with international asset management standards and best practices.',
    features: [
      'Asset lifecycle tracking',
      'Risk-based maintenance strategies',
      'Performance metrics aligned to ISO standards',
      'Audit-ready documentation',
    ],
  },
  {
    icon: Shield,
    title: 'Security Model',
    description: 'Enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and zero-trust architecture.',
    features: [
      'Data encryption at rest and in transit',
      'SSO integration with enterprise identity providers',
      'Granular permission management',
      'Regular third-party security audits',
    ],
  },
  {
    icon: Lock,
    title: 'Privacy & Data Sovereignty',
    description: 'Your data stays in your control. Deploy on-premise or in your cloud environment.',
    features: [
      'Flexible deployment options',
      'Regional data residency compliance',
      'No training on customer data without consent',
      'Complete data portability',
    ],
  },
];

export default function ArchitecturePage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Technical <span className="text-[#3B82F6]">Architecture</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade infrastructure designed for mission-critical industrial operations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {architectureBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/20 transition-colors">
                    <Icon className="text-[#3B82F6]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{block.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{block.description}</p>
                <ul className="space-y-3">
                  {block.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              System Block Diagram
            </h2>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-white/5 border border-white/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Executive Layer</h3>
                  <p className="text-gray-400 text-sm">Risk dashboards, capital planning, strategic insights</p>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#3B82F6] to-transparent" />
                </div>

                <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">SyncAI Agent Orchestration</h3>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/5 border border-white/20 rounded p-3">
                      <p className="text-white text-sm font-medium">Risk Agents</p>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded p-3">
                      <p className="text-white text-sm font-medium">Planning Agents</p>
                    </div>
                    <div className="bg-white/5 border border-white/20 rounded p-3">
                      <p className="text-white text-sm font-medium">Execution Agents</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-[#3B82F6] to-transparent" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">CMMS</h4>
                    <p className="text-gray-400 text-xs">Work orders, assets</p>
                  </div>
                  <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">ERP</h4>
                    <p className="text-gray-400 text-xs">Parts, financials</p>
                  </div>
                  <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">IoT/Sensors</h4>
                    <p className="text-gray-400 text-xs">Real-time data</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1.0}>
          <div className="mt-20 text-center border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Deploy?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              See how SyncAI can transform your operations in 90 days.
            </p>
            <a
              href="/strategic-pilot"
              className="inline-block px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30"
            >
              Apply for Strategic Pilot
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
