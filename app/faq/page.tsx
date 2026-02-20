'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Is StiggSync a replacement for CMMS?',
    answer:
      'No. StiggSync is an AI infrastructure layer that integrates with and augments your existing CMMS (SAP, Maximo, Fiix, etc.). We enhance your current systems with autonomous prioritization, predictive capabilities, and operational intelligence — without requiring you to replace working infrastructure.',
  },
  {
    question: 'How long does integration take?',
    answer:
      'Our 90-day strategic pilot includes full integration during weeks 1-2. Most CMMS integrations complete within 5-10 business days depending on system complexity and data accessibility. We handle the technical work; your team provides access and domain context.',
  },
  {
    question: 'Does AI make autonomous decisions without approval?',
    answer:
      'No. StiggSync operates under a human-in-the-loop governance model. AI agents recommend and prioritize. Humans approve and execute. You configure approval thresholds by asset criticality, work order value, or risk score. Every action is traceable to a human decision-maker.',
  },
  {
    question: 'How is data protected?',
    answer:
      'We use enterprise-grade security including AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls, and complete data isolation in multi-tenant environments. Optional on-premise or private cloud deployment is available for organizations with strict data residency requirements.',
  },
  {
    question: 'What size organization benefits most?',
    answer:
      'StiggSync delivers the highest ROI for organizations managing 500+ critical assets with annual maintenance budgets exceeding $5M. Smaller operations can benefit, but the economic impact is most significant at scale where efficiency gains compound.',
  },
  {
    question: 'How do you measure ROI?',
    answer:
      'We track measurable operational outcomes: reduction in unplanned downtime, maintenance labor efficiency, spare parts inventory optimization, and time-to-audit. ROI is calculated against your baseline metrics established during discovery, with executive reporting throughout the pilot.',
  },
  {
    question: 'What happens after the 90-day pilot?',
    answer:
      'At pilot conclusion, you receive a comprehensive impact analysis and expansion roadmap. If results meet success criteria, we transition to ongoing infrastructure deployment — scaling AI agents across additional asset classes, sites, or operational domains.',
  },
  {
    question: 'Can StiggSync work with our existing sensors and IoT infrastructure?',
    answer:
      'Yes. Our integration layer connects with common industrial IoT platforms, SCADA systems, and sensor networks. We work with the data you already collect rather than requiring new hardware. During discovery, we assess your data landscape and identify integration paths.',
  },
  {
    question: 'What industries do you support?',
    answer:
      'We focus on asset-intensive industries including oil & gas, mining, heavy manufacturing, utilities, equipment rental, and multi-site operators. If you manage critical physical assets and face maintenance complexity, our platform likely applies to your environment.',
  },
  {
    question: 'Is there a trial or free assessment?',
    answer:
      'Yes. Our AI Readiness Assessment is free and provides a personalized score with ROI estimates based on your operational profile. For qualified organizations, we offer discovery sessions to explore pilot feasibility before any commitment.',
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/5 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm text-[#3B82F6] font-medium">FAQ</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Answers to common questions about StiggSync, our technology, and how we work with enterprise operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#334155] rounded-xl bg-[#1E293B]/30 px-6 data-[state=open]:bg-[#1E293B]/50"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#3B82F6] py-5 text-lg font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-16"
          >
            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Still have questions?</h3>
              <p className="text-gray-400 mb-6">
                Contact us directly or take our AI Readiness Assessment to get personalized insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ai-readiness">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/30 hover:bg-[#3B82F6]/90 transition-colors"
                  >
                    Start Assessment
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
