'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingDown, Users, Package, FileCheck } from 'lucide-react';

const metrics = [
  {
    icon: TrendingDown,
    value: '10-20%',
    label: 'Reduction in unplanned downtime',
  },
  {
    icon: Users,
    value: '5-12%',
    label: 'Labor efficiency improvement',
  },
  {
    icon: Package,
    value: '3-8%',
    label: 'Spare parts optimization',
  },
  {
    icon: FileCheck,
    value: 'Real-time',
    label: 'Audit readiness',
  },
];

const impacts = [
  'Intelligent work prioritization',
  'Lower reactive overtime',
  'Real-time asset risk visibility',
  'Executive operational intelligence',
];

export default function ImpactSection() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-[#3B82F6]/5 to-transparent">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Typical Impact <span className="text-[#3B82F6]">After Deployment</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Measurable outcomes observed across industrial deployments.
        </p>
      </AnimatedSection>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-[#3B82F6]/30 bg-[#3B82F6]/5 rounded-xl p-6 text-center"
            >
              <Icon className="w-8 h-8 text-[#3B82F6] mx-auto mb-3" />
              <p className="text-3xl font-bold text-white mb-1">{metric.value}</p>
              <p className="text-sm text-gray-400">{metric.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start space-x-4 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-5"
          >
            <CheckCircle2 className="flex-shrink-0 text-[#3B82F6] mt-0.5" size={20} />
            <p className="text-gray-300 leading-relaxed">{impact}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
