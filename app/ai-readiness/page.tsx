'use client';

import { motion } from 'framer-motion';
import { Brain, ChartBar, FileText, Shield } from 'lucide-react';
import AssessmentForm from '@/components/assessment/AssessmentForm';

export default function AIReadinessPage() {
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
              <Brain className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm text-[#3B82F6] font-medium">Enterprise Assessment</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Readiness Assessment
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Evaluate your organization&apos;s readiness for AI-driven maintenance optimization.
              Get a personalized score, ROI estimate, and strategic recommendations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16"
          >
            <FeatureCard
              icon={<Brain className="w-5 h-5" />}
              title="AI Score"
              description="0-100 readiness rating"
            />
            <FeatureCard
              icon={<ChartBar className="w-5 h-5" />}
              title="ROI Estimate"
              description="Annual savings potential"
            />
            <FeatureCard
              icon={<FileText className="w-5 h-5" />}
              title="PDF Report"
              description="Executive summary"
            />
            <FeatureCard
              icon={<Shield className="w-5 h-5" />}
              title="Private"
              description="Data stays secure"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <AssessmentForm />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1E293B]/30 border border-[#334155] rounded-xl p-4 text-center">
      <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center mx-auto mb-3 text-[#3B82F6]">
        {icon}
      </div>
      <h3 className="font-semibold text-white text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
}
