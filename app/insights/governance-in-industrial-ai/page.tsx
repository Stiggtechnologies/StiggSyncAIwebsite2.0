'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <Link href="/insights" className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
              Security & Governance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Governance in Industrial AI: Human Oversight at Scale
            </h1>
            <p className="text-xl text-gray-400">
              How leading enterprises implement AI governance frameworks that balance automation with accountability.
            </p>
          </header>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-4">Download Full Framework</h3>
            <p className="text-gray-400 mb-6">
              Complete governance implementation guide with role-based access control patterns and audit trail requirements.
            </p>
            <a
              href="/pdfs/governance-in-industrial-ai.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              The deployment of autonomous AI agents in industrial environments raises a fundamental question: How do you maintain operational accountability when decision-making velocity exceeds human review capacity?
            </p>

            <p className="text-xl font-semibold text-white">
              Effective governance is not about slowing AI down. It's about making every decision auditable, reversible, and aligned with organizational risk tolerance.
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

            <div className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-8 my-12">
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

            <p className="text-lg italic text-gray-400">
              The complete whitepaper includes implementation blueprints, compliance mapping for ISO 55000/SOC 2, and organizational change management strategies.
            </p>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
