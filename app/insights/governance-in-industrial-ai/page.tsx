'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';

export default function GovernancePage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#101113]">
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <Link href="/insights" className="inline-flex items-center gap-2 text-[#D6B885] hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-[#D6B885]/10 text-[#D6B885] text-sm font-medium rounded-full mb-4">
              Security & Governance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Governance in Industrial AI: Human Oversight at Scale
            </h1>
            <p className="text-xl text-gray-400">
              How leading enterprises implement AI governance frameworks that balance automation with accountability.
            </p>
          </header>


          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              Putting industrial AI into a reliability workflow raises a more basic question: how do you keep operational accountability when a model can draft a recommendation faster than a human can review it?
            </p>

            <p className="text-xl font-semibold text-white">
              Effective governance is not about slowing AI down. It is about making every decision auditable, reversible, and aligned with organizational risk tolerance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Governance Challenge</h2>

            <p>
              Traditional enterprise governance frameworks assume human actors make discrete decisions within defined approval hierarchies. Industrial AI operates differently:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Decisions occur continuously, not episodically</li>
              <li>Multiple agents may influence a single outcome</li>
              <li>Risk assessment happens in milliseconds, not days</li>
              <li>Actions cascade across interconnected systems</li>
            </ul>

            <div className="bg-[#17181B]/50 border border-[#3A3B3E] rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Five Governance Pillars</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">1. Role-Based Access Control (RBAC)</h4>
                  <p className="text-sm text-gray-400">Define what each agent can recommend, execute, or escalate</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">2. Decision Audit Trails</h4>
                  <p className="text-sm text-gray-400">Log every recommendation with context and confidence scores</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">3. Human-in-Loop Thresholds</h4>
                  <p className="text-sm text-gray-400">Automatic escalation for high-risk or high-cost actions</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">4. Explainability Requirements</h4>
                  <p className="text-sm text-gray-400">Clear reasoning chains for every AI-generated insight</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">5. Continuous Validation</h4>
                  <p className="text-sm text-gray-400">Ongoing accuracy monitoring and model performance tracking</p>
                </div>
              </div>
            </div>

          </div>
          <InsightNextSteps slug="governance-in-industrial-ai" />
        </motion.article>
      </div>
    </main>
  );
}
