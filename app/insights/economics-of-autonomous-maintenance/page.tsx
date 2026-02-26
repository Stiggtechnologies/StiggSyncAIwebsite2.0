'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Download } from 'lucide-react';

export default function EconomicsPage() {
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
              ROI & Business Case
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Economics of Autonomous Maintenance
            </h1>
            <p className="text-xl text-gray-400">
              A deep dive into the ROI drivers behind AI-powered maintenance.
            </p>
          </header>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-white mb-4">Download Full Analysis</h3>
            <p className="text-gray-400 mb-6">
              Complete ROI framework with cost-benefit models and payback calculations.
            </p>
            <a
              href="/pdfs/economics-of-autonomous-maintenance.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              Industrial maintenance represents one of the largest controllable costs in asset-intensive operations—and one of the least optimized.
            </p>

            <p>
              Autonomous maintenance infrastructure shifts economic value across four primary vectors: downtime reduction, labor optimization, inventory efficiency, and capital deployment.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Cost Structure Problem</h2>

            <p>
              Traditional maintenance budgets are constructed around reactive models where cost management focuses on minimizing spend per work order rather than maximizing asset availability per dollar invested.
            </p>

            <p className="text-xl font-semibold text-white">
              This approach optimizes for accounting efficiency, not operational value.
            </p>

            <div className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">ROI Drivers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">↓</span>
                  <span>Unplanned downtime reduction (15-30%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">↑</span>
                  <span>Labor productivity gain (20-40%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">↓</span>
                  <span>Inventory carrying costs (10-25%)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#3B82F6] font-bold">↑</span>
                  <span>Asset lifespan extension (15-30%)</span>
                </li>
              </ul>
            </div>

            <p className="text-lg italic text-gray-400">
              The full whitepaper includes detailed financial models, sensitivity analysis, and implementation cost breakdowns for organizations at different scales.
            </p>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
