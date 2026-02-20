'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, TrendingUp, Shield, Cpu } from 'lucide-react';

const articles = [
  {
    slug: 'why-cmms-alone-is-failing',
    title: 'Why CMMS Alone Is Failing in 2026',
    excerpt:
      'Modern maintenance demands have outpaced what traditional CMMS platforms can deliver. Here is why leading organizations are augmenting their systems with AI infrastructure.',
    category: 'Industry Analysis',
    readTime: '8 min read',
    icon: TrendingUp,
    featured: true,
  },
  {
    slug: 'economics-of-autonomous-maintenance',
    title: 'The Economics of Autonomous Maintenance',
    excerpt:
      'A deep dive into the ROI drivers behind AI-powered maintenance, from downtime reduction to labor optimization and inventory efficiency.',
    category: 'ROI & Business Case',
    readTime: '12 min read',
    icon: TrendingUp,
    featured: true,
  },
  {
    slug: 'governance-in-industrial-ai',
    title: 'Governance in Industrial AI: Human Oversight at Scale',
    excerpt:
      'How leading enterprises are implementing AI governance frameworks that balance automation efficiency with human accountability.',
    category: 'Security & Governance',
    readTime: '10 min read',
    icon: Shield,
    featured: true,
  },
];

export default function InsightsPage() {
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
              <BookOpen className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm text-[#3B82F6] font-medium">Insights</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industrial AI Insights
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Deep analysis on autonomous maintenance, AI governance, and the future of
              industrial operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-b from-[#1E293B]/50 to-[#0F172A]/50 border border-[#334155] rounded-2xl p-8 hover:border-[#3B82F6]/50 transition-colors">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#3B82F6]/20 transition-colors">
                        <Icon className="w-7 h-7 text-[#3B82F6]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-medium rounded-full">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                          {article.title}
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-4">{article.excerpt}</p>
                        <div className="flex items-center gap-2 text-[#3B82F6] font-medium">
                          <span>Coming Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
          >
            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 text-center">
              <Cpu className="w-10 h-10 text-[#3B82F6] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Get Personalized Analysis
              </h3>
              <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                Take our AI Readiness Assessment to receive a custom report analyzing your
                organization&apos;s specific opportunities and challenges.
              </p>
              <Link href="/ai-readiness">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#3B82F6] text-white rounded-lg font-semibold shadow-lg shadow-[#3B82F6]/30 hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Start Assessment
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
