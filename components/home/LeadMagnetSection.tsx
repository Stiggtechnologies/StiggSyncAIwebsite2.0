'use client';

import Section from '@/components/ui/Section';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { FileText, ArrowRight } from 'lucide-react';

export default function LeadMagnetSection() {
  return (
    <Section className="bg-gradient-to-b from-transparent via-[#3B82F6]/5 to-transparent">
      <AnimatedSection>
        <div className="max-w-5xl mx-auto border border-[#3B82F6]/30 bg-[#3B82F6]/[0.05] backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 p-12">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="text-[#3B82F6]" size={32} />
                <span className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider">
                  Executive Brief
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Operator Brief: The Path to Autonomous Maintenance
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                A practical executive brief on deploying AI agents in maintenance & reliability — governance, ROI, and a 90-day rollout plan.
              </p>
              <a
                href="/operator-brief"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-all shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50"
              >
                <span>Download the Operator Brief</span>
                <ArrowRight size={20} />
              </a>
            </div>
            <div className="md:col-span-2 bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 p-12 h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-[#3B82F6]" size={48} />
                </div>
                <p className="text-gray-300 text-sm">Limited availability for 2026 deployment</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
