'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const problems = [
  'Planning cycles measured in weeks while asset failures happen in minutes',
  'Technicians drowning in alerts with no context on priority or business impact',
  'Work orders sitting unexecuted while critical risk escalates silently',
  'Maintenance teams operating on instinct, not intelligence',
];

export default function ProblemSection() {
  return (
    <Section>
      <AnimatedSection>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center max-w-4xl mx-auto leading-tight">
          Industrial complexity has{' '}
          <span className="text-[#3B82F6]">outgrown</span> human coordination.
        </h2>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-6">
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-4 text-lg text-gray-300"
          >
            <div className="flex-shrink-0 w-2 h-2 mt-2 bg-[#3B82F6] rounded-full" />
            <p>{problem}</p>
          </motion.div>
        ))}
      </div>

      <AnimatedSection delay={0.6}>
        <p className="text-2xl text-white font-semibold text-center mt-16 max-w-3xl mx-auto">
          Traditional maintenance software tracks work.{' '}
          <span className="text-[#3B82F6]">It does not operate your organization.</span>
        </p>
      </AnimatedSection>
    </Section>
  );
}
