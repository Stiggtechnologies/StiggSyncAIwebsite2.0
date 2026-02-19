'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Cpu, TrendingUp, BarChart } from 'lucide-react';

const workforce = [
  {
    icon: Cpu,
    title: 'Core M&R Agents',
    description: 'Risk scoring, failure prediction, work order generation, parts optimization, vendor coordination.',
  },
  {
    icon: TrendingUp,
    title: 'Operational Excellence Agents',
    description: 'Safety compliance monitoring, environmental impact tracking, efficiency pattern detection.',
  },
  {
    icon: BarChart,
    title: 'Strategic Intelligence Agents',
    description: 'Capital planning recommendations, workforce allocation, budget impact modeling, scenario analysis.',
  },
];

export default function AIWorkforceSection() {
  return (
    <Section>
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Your <span className="text-[#3B82F6]">AI Workforce</span>
        </h2>
        <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">
          Not chatbots. Not copilots. Autonomous agents operating your maintenance and reliability layer.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8">
        {workforce.map((item, index) => {
          const Icon = item.icon;
          return (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors">
                  <Icon className="text-[#3B82F6]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            </AnimatedCard>
          );
        })}
      </div>
    </Section>
  );
}
