'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { Factory, TrendingDown, Clock, FileCheck } from 'lucide-react';

const beforeMetrics = [
  { label: 'Critical Assets', value: '3,500' },
  { label: 'Annual Unplanned Downtime', value: '1,200 hrs' },
  { label: 'Annual Maintenance Labor', value: '$18M' },
  { label: 'Reactive Work Orders', value: '65%' },
];

const afterMetrics = [
  { icon: TrendingDown, label: 'Backlog Reduced', value: '17%' },
  { icon: Clock, label: 'Unplanned Downtime Reduced', value: '14%' },
  { icon: FileCheck, label: 'Executive Reporting', value: 'Automated' },
];

export default function DeploymentScenarioSection() {
  return (
    <Section>
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider mb-4">
            Example Deployment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What a <span className="text-[#3B82F6]">90-Day Pilot</span> Looks Like
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A multi-site heavy industrial operator with complex maintenance operations.
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-white/10 bg-white/[0.02] rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Factory className="w-6 h-6 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-400">Before Deployment</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {beforeMetrics.map((metric, index) => (
                <div key={index} className="bg-white/[0.02] rounded-lg p-4">
                  <p className="text-2xl font-bold text-white mb-1">{metric.value}</p>
                  <p className="text-xs text-gray-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-[#3B82F6]/30 bg-[#3B82F6]/5 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center">
                <span className="text-white text-xs font-bold">90</span>
              </div>
              <h3 className="text-lg font-semibold text-[#3B82F6]">After 90 Days</h3>
            </div>
            <div className="space-y-4">
              {afterMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div key={index} className="flex items-center justify-between bg-white/[0.02] rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#3B82F6]" />
                      <span className="text-gray-300">{metric.label}</span>
                    </div>
                    <span className="text-xl font-bold text-white">{metric.value}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          Representative scenario based on typical industrial deployment outcomes. Actual results vary by operational context.
        </motion.p>
      </div>
    </Section>
  );
}
