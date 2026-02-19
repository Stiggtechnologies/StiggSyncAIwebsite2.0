'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ShiftSection() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-[#3B82F6]/5 to-transparent">
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          From Maintenance Software to <span className="text-[#3B82F6]">Autonomous Industrial Intelligence</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
          The fundamental shift in how operations are managed.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8"
        >
          <div className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Legacy Stack</div>
          <div className="space-y-4">
            {['CMMS', 'Humans', 'Meetings', 'Delays', 'Downtime'].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <ArrowRight size={20} className="text-gray-500" />
                <span className="text-gray-300 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="group border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] backdrop-blur-sm rounded-lg p-8 hover:border-[#3B82F6]/60 hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all duration-300"
        >
          <div className="text-sm font-semibold text-[#3B82F6] mb-4 uppercase tracking-wider">StiggSync Stack</div>
          <div className="space-y-4">
            {[
              'AI Agents',
              'Continuous Risk Analysis',
              'Autonomous Prioritization',
              'Human Oversight',
              'Controlled Operations',
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <ArrowRight size={20} className="text-[#3B82F6]" />
                <span className="text-white text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
