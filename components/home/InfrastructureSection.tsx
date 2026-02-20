'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const layers = [
  {
    name: 'Executive Intelligence',
    description: 'Strategic insights, risk reporting, capital planning',
    color: 'from-[#3B82F6]/20 to-[#3B82F6]/10',
  },
  {
    name: 'SyncAI AI Agent Layer',
    description: 'Autonomous prioritization, continuous optimization, intelligent coordination',
    color: 'from-[#3B82F6]/40 to-[#3B82F6]/30',
  },
  {
    name: 'CMMS / ERP / Sensors',
    description: 'Existing systems, data sources, operational tools',
    color: 'from-white/10 to-white/5',
  },
];

export default function InfrastructureSection() {
  return (
    <Section>
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Built as <span className="text-[#3B82F6]">Infrastructure</span>. Not an App.
        </h2>
        <p className="text-xl text-gray-300 text-center mb-8 max-w-3xl mx-auto leading-relaxed">
          SyncAI integrates with existing CMMS, ERP, sensors, work order history, inventory, and financial systems.
        </p>
        <p className="text-xl text-white text-center mb-20 max-w-3xl mx-auto font-semibold">
          It does not rip and replace. It elevates.
        </p>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-4">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            <div
              className={`bg-gradient-to-r ${layer.color} border border-white/20 rounded-lg p-8 backdrop-blur-sm`}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{layer.name}</h3>
              <p className="text-gray-300">{layer.description}</p>
            </div>
            {index < layers.length - 1 && (
              <div className="flex justify-center py-4">
                <div className="w-0.5 h-8 bg-gradient-to-b from-[#3B82F6] to-transparent" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatedSection delay={0.8}>
        <div className="mt-20 text-center">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Security-first. API-native. Enterprise-governed. Human-in-the-loop.
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
