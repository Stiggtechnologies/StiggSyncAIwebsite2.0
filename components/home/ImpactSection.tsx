'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const impacts = [
  'Critical asset risks identified and prioritized autonomously',
  'Work order backlog reorganized by actual business impact',
  'Technician time reallocated to highest-value interventions',
  'Real-time visibility into operational risk exposure',
  'Executive dashboards showing asset health in financial terms',
  'Quantified ROI on every maintenance decision',
];

export default function ImpactSection() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-[#3B82F6]/5 to-transparent">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          What Changes in <span className="text-[#3B82F6]">90 Days</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
          Strategic pilots ship fast. Here's what operational leaders see first.
        </p>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {impacts.map((impact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-start space-x-4 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-6"
          >
            <CheckCircle2 className="flex-shrink-0 text-[#3B82F6] mt-1" size={24} />
            <p className="text-gray-300 text-lg leading-relaxed">{impact}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
