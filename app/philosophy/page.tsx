'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'AI as Infrastructure, Not Interface',
    content:
      "The future of industrial AI is not chatbots or copilots. It's autonomous systems embedded in operational workflows, making decisions at machine speed with human oversight.",
  },
  {
    title: 'Operations Over Optimization',
    content:
      'Most industrial software helps you track work. We believe AI should operate your organization. Continuous prioritization. Autonomous coordination. Real-time adaptation.',
  },
  {
    title: 'Risk-First Decision Making',
    content:
      'Every maintenance decision carries financial risk. StiggSync quantifies that risk in real time and ensures your teams work on what matters most to operational continuity and asset value.',
  },
  {
    title: 'Human Expertise, Amplified',
    content:
      "AI doesn't replace industrial expertise. It scales it. Technicians focus on execution. Planners focus on strategy. AI handles coordination, prioritization, and continuous optimization.",
  },
  {
    title: 'Built for Mission-Critical Systems',
    content:
      'Industrial operations have zero tolerance for failure. StiggSync is architected for reliability, transparency, and auditability from the ground up. Your operations depend on it.',
  },
];

export default function PhilosophyPage() {
  return (
    <main className="pt-16">
      <Section>
        <AnimatedSection>
          <div className="text-center mb-32">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight max-w-5xl mx-auto">
              The Future of{' '}
              <span className="text-[#3B82F6]">Asset-Intensive</span> Organizations
            </h1>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A new operational paradigm built on autonomous intelligence.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-32 mb-32">
          {principles.map((principle, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  {principle.title}
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">{principle.content}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="border-t border-white/10 pt-32">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center leading-tight">
                Why Now?
              </h2>
              <div className="space-y-8 text-xl text-gray-300 leading-relaxed">
                <p>
                  Industrial operations have reached an inflection point. Asset complexity has outpaced human coordination capacity. Maintenance backlogs grow faster than teams can execute. Risk exposure is rising while budgets remain flat.
                </p>
                <p>
                  The tools we've relied on for decades — CMMS, spreadsheets, tribal knowledge — were designed for a different era. They help us track work. They don't help us operate.
                </p>
                <p>
                  Generative AI has unlocked new possibilities, but chatbots and copilots won't solve industrial operations. We need autonomous systems that can reason about risk, coordinate across domains, and make decisions at machine speed.
                </p>
                <p className="text-white font-semibold text-2xl">
                  StiggSync is that system.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-32 border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] rounded-lg p-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Transition Has Begun
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Forward-thinking organizations are already deploying autonomous AI in their operations.
            </p>
            <a
              href="/strategic-pilot"
              className="inline-block px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30"
            >
              Join the Next Wave
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </main>
  );
}
