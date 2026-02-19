'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';
import { Factory, Zap, Droplet, Plane, Building2, Ship } from 'lucide-react';

const industries = [
  { icon: Factory, name: 'Oil & Gas' },
  { icon: Plane, name: 'Mining' },
  { icon: Building2, name: 'Heavy Manufacturing' },
  { icon: Zap, name: 'Utilities' },
  { icon: Droplet, name: 'Equipment Rental' },
  { icon: Ship, name: 'Multi-site Operators' },
];

export default function IndustriesSection() {
  return (
    <Section>
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Built for <span className="text-[#3B82F6]">Asset-Intensive</span> Industries
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-6 hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/[0.05] transition-all duration-300 flex flex-col items-center text-center"
            >
              <Icon className="text-[#3B82F6] mb-3" size={32} />
              <span className="text-white text-sm font-medium">{industry.name}</span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
