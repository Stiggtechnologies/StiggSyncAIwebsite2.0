'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';

export default function WhyCMMSIsFailingPage() {
  return (
    <main className="min-h-screen bg-[#101113]">
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
              Industry Analysis
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why CMMS Alone Is Failing in 2026
            </h1>
            <p className="text-xl text-gray-400">
              Modern maintenance demands have outpaced what traditional CMMS platforms can deliver.
            </p>
          </header>


          <div className="text-gray-300 space-y-6">
            <p>
              For more than two decades, Computerized Maintenance Management Systems (CMMS) have served as the operational backbone of maintenance departments. They schedule preventive maintenance. They track work orders. They log asset histories.
            </p>
            
            <p className="text-xl font-semibold text-white">
              But they do not interpret operational risk.
            </p>

            <p>
              In 2026, industrial maintenance complexity has outpaced what traditional CMMS platforms were designed to deliver. The shift from record-keeping to predictive intelligence has created a structural gap.
            </p>

            <p>
              Leading enterprises are not replacing CMMS. They are augmenting it with AI infrastructure.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Architectural Limitation of CMMS</h2>

            <p>CMMS systems were built around a transactional database model:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Work order creation</li>
              <li>Asset hierarchy tracking</li>
              <li>Preventive maintenance scheduling</li>
              <li>Inventory counts</li>
            </ul>

            <p>This architecture assumes:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Maintenance is event-driven</li>
              <li>Failures are isolated</li>
              <li>Human judgment drives prioritization</li>
            </ul>

            <p className="font-semibold">Modern industrial systems no longer operate this way.</p>

            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Today’s operations involve:</h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>Interconnected asset networks</li>
              <li>Sensor-generated data streams</li>
              <li>Variable load environments</li>
              <li>Cascading risk propagation</li>
            </ul>

            <p className="text-xl font-semibold text-white">
              CMMS captures history. It does not model future probability.
            </p>

            <div className="bg-[#17181B]/50 border border-[#3A3B3E] rounded-xl p-8 my-12">
              <p className="text-lg italic text-gray-300">
                Review your maintenance decision process alongside downtime evidence, governance requirements, and the systems your team already uses.
              </p>
            </div>
          </div>
          <InsightNextSteps slug="why-cmms-alone-is-failing-2026" />
        </motion.article>
      </div>
    </main>
  );
}
