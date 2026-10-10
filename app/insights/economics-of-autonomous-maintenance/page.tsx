'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';

export default function EconomicsPage() {
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
              ROI & Business Case
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Economics of Autonomous Maintenance
            </h1>
            <p className="text-xl text-gray-400">
              A deep dive into the ROI drivers behind AI-powered maintenance.
            </p>
          </header>


          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              Industrial maintenance represents one of the largest controllable costs in asset-intensive operations—and one of the least optimized.
            </p>

            <p>
              Maintenance economics still turn on four vectors — downtime, labor, inventory, and capital — but those numbers are only useful when the evidence can support them and a named human still approves the work.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Cost Structure Problem</h2>

            <p>
              Traditional maintenance budgets are constructed around reactive models where cost management focuses on minimizing spend per work order rather than maximizing asset availability per dollar invested.
            </p>

            <p className="text-xl font-semibold text-white">
              This approach optimizes for accounting efficiency, not operational value.
            </p>

            <div className="bg-[#17181B]/50 border border-[#3A3B3E] rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Outcome measures to track against your baseline</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#D6B885] font-bold">↓</span>
                  <span>Unplanned downtime reduction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D6B885] font-bold">↑</span>
                  <span>Labor productivity gain</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D6B885] font-bold">↓</span>
                  <span>Inventory carrying costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D6B885] font-bold">↑</span>
                  <span>Asset lifespan extension</span>
                </li>
              </ul>
            </div>

          </div>
          <InsightNextSteps slug="economics-of-autonomous-maintenance" />
        </motion.article>
      </div>
    </main>
  );
}
