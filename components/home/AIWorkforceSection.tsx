'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Cpu, TrendingUp, BarChart } from 'lucide-react';

const workforce = [
  {
    icon: Cpu,
    title: 'Core M&R Agents',
    agents: [
      'Reliability Intelligence Agent',
      'Predictive Failure Agent',
      'Work Order Optimization Agent',
      'Asset Health Scoring Agent',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Operational Excellence Agents',
    agents: [
      'Inventory Optimization Agent',
      'Root Cause Intelligence Agent',
      'Maintenance Strategy Agent',
      'Continuous Improvement Agent',
    ],
  },
  {
    icon: BarChart,
    title: 'Strategic Intelligence Agents',
    agents: [
      'Capital Planning Agent',
      'Risk & Compliance Agent',
      'Executive Reporting Agent',
      'Lifecycle Optimization Agent',
    ],
  },
];

export default function AIWorkforceSection() {
  return (
    <Section>
      <AnimatedSection>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          An AI Workforce Embedded in Your <span className="text-[#3B82F6]">Operations</span>
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {workforce.map((item, index) => {
          const Icon = item.icon;
          return (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors">
                  <Icon className="text-[#3B82F6]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.agents.map((agent, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{agent}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          );
        })}
      </div>

      <AnimatedSection delay={0.4}>
        <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
          SyncAI does not replace your systems. It becomes the intelligence layer above them — continuously analyzing risk, prioritizing action, and escalating with governance.
        </p>
      </AnimatedSection>
    </Section>
  );
}
