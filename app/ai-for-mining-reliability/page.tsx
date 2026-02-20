'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Mountain,
  TrendingUp,
  Clock,
  Shield,
  Gauge,
  Wrench,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
} from 'lucide-react';

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Unplanned Equipment Failures',
    description: 'Heavy machinery breakdowns halt production, costing $100K+ per hour in lost output.',
  },
  {
    icon: Clock,
    title: 'Reactive Maintenance Culture',
    description: 'Teams operate in firefighting mode with 60-80% reactive work orders.',
  },
  {
    icon: Wrench,
    title: 'Skilled Labor Shortages',
    description: 'Experienced technicians retiring faster than replacements can be trained.',
  },
  {
    icon: DollarSign,
    title: 'Parts Inventory Waste',
    description: 'Millions tied up in spare parts that expire or become obsolete.',
  },
];

const benefits = [
  'Predict haul truck failures 72+ hours in advance',
  'Reduce unplanned downtime by 20-40%',
  'Optimize crusher and conveyor maintenance cycles',
  'Automate work order prioritization based on production impact',
  'Enable condition-based maintenance for mobile fleet',
  'Generate audit-ready compliance documentation',
];

const stats = [
  { value: '35%', label: 'Average Downtime Reduction' },
  { value: '12%', label: 'Maintenance Labor Optimization' },
  { value: '8%', label: 'Inventory Carrying Cost Reduction' },
  { value: '90', label: 'Days to Measurable ROI' },
];

export default function MiningReliabilityPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6">
              <Mountain className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm text-[#3B82F6] font-medium">Mining & Resources</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered Reliability for{' '}
              <span className="text-[#3B82F6]">Mining Operations</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
              Autonomous AI agents that predict equipment failures, optimize maintenance schedules,
              and maximize asset availability across your entire mining operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ai-readiness">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/30 hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Assess Your AI Readiness
                </motion.button>
              </Link>
              <Link href="/strategic-pilot">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Request Pilot
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-[#1E293B]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mining Maintenance Challenges
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Heavy equipment, harsh environments, and production pressure create unique reliability demands.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {challenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1E293B]/30 border border-[#334155] rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#F59E0B]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                      <p className="text-gray-400 text-sm">{challenge.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#1E293B]/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                How SyncAI Transforms Mining Reliability
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our autonomous AI agents integrate directly with your CMMS and equipment sensors
                to continuously analyze operational data, predict failures before they occur,
                and optimize maintenance execution across your entire fleet.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-6 text-center"
                >
                  <p className="text-4xl font-bold text-[#3B82F6] mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[#1E293B]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mining Equipment We Optimize
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              'Haul Trucks',
              'Excavators',
              'Crushers',
              'Conveyors',
              'Drill Rigs',
              'Loaders',
              'Grinding Mills',
              'Pumps & Compressors',
            ].map((equipment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#1E293B]/30 border border-[#334155] rounded-lg p-4 text-center"
              >
                <span className="text-gray-300 font-medium">{equipment}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-[#1E293B]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-12 text-center"
          >
            <Gauge className="w-12 h-12 text-[#3B82F6] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Mining Reliability?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Take our AI Readiness Assessment to get a personalized score and ROI estimate
              for your operation.
            </p>
            <Link href="/ai-readiness">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/30 hover:bg-[#3B82F6]/90 transition-colors"
              >
                Start Free Assessment
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
