'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <section className="relative pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industrial AI Infrastructure
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              SyncAI is governed intelligence infrastructure deployed above existing operational systems—without disrupting current workflows.
            </p>
          </motion.div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-invert prose-lg max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">The Thesis</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                CMMS systems record maintenance history. The next decade will be defined by intelligence infrastructure that interprets risk, models probability, and governs decision execution across asset-intensive enterprises.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                SyncAI is built as a governed intelligence layer deployed above existing operational systems—without disrupting current workflows.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">The Problem</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Asset-intensive operations face compounding pressures:
              </p>
              <ul className="space-y-3 text-gray-300 text-lg list-disc pl-6">
                <li>Escalating downtime exposure</li>
                <li>Skilled labor compression</li>
                <li>Growing asset complexity</li>
                <li>Inventory capital inefficiency</li>
                <li>Increased compliance and governance demand</li>
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Traditional systems were not designed to convert operational data into risk-ranked decisions at scale.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">The Shift</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Enterprises are moving from record-keeping to intelligence:
              </p>
              <ul className="space-y-3 text-gray-300 text-lg list-disc pl-6">
                <li>From static work orders to probabilistic risk trajectories</li>
                <li>From human-only prioritization to AI-assisted sequencing</li>
                <li>From untraceable recommendations to auditable decision systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">How SyncAI Works</h2>
              
              <h3 className="text-2xl font-semibold text-[#3B82F6] mb-3">Integration (Read-Only)</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Secure, non-disruptive integrations with CMMS/ERP/SCADA/IoT.
              </p>

              <h3 className="text-2xl font-semibold text-[#3B82F6] mb-3">Intelligence (Multi-Agent)</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Specialized agents generate risk scores, detect clustering, correlate sensors, parse unstructured notes, and prioritize action sequences.
              </p>

              <h3 className="text-2xl font-semibold text-[#3B82F6] mb-3">Governance (Controlled)</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                RBAC + audit trails + escalation pathways ensure accountability at enterprise scale.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Why Now</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Downtime economics have shifted from operational inconvenience to balance-sheet risk.
              </p>
              <p className="text-xl font-semibold text-white">
                Industrial AI is not "software adoption." It is capital strategy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Business Model</h2>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li>
                  <strong className="text-white">Professional:</strong> Subscription + usage-based intelligence
                </li>
                <li>
                  <strong className="text-white">Enterprise:</strong> Annual contracts with SSO, audit logging, multi-agent orchestration, governance controls, and deployment support
                </li>
                <li>
                  <strong className="text-white">Expansion:</strong> Multi-site rollouts, additional agent modules, and deeper workflow automation layers
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-8">What We Measure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'Downtime', value: '↓12-20%' },
                  { label: 'Labor Efficiency', value: '↑10-15%' },
                  { label: 'Inventory Capital', value: '↓15%' },
                  { label: 'Lifecycle Extension', value: '↑3-5%' },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="bg-gradient-to-b from-[#1E293B]/50 to-[#0F172A]/50 border border-[#334155] rounded-xl p-6 text-center"
                  >
                    <div className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                      {metric.label}
                    </div>
                    <div className="text-3xl font-bold text-[#3B82F6]">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Market Opportunity</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Asset-intensive industries (oil & gas, mining, manufacturing, utilities, commercial real estate) represent a $500B+ maintenance spend globally. The shift from reactive to predictive maintenance infrastructure is in early innings.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                SyncAI targets the enterprise segment: operations with 500+ assets, $50M+ maintenance budgets, and multi-site complexity.
              </p>
            </section>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-12 text-center mt-12">
              <h3 className="text-3xl font-bold text-white mb-4">Contact</h3>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                For investor discussions, strategic partnerships, and enterprise pilots, request a briefing.
              </p>
              <a
                href="mailto:info@syncai.ca"
                className="inline-block px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold text-lg hover:bg-[#3B82F6]/90 transition-colors"
              >
                Request Briefing →
              </a>
            </div>
          </motion.div>
        </div>
      </article>
    </main>
  );
}
