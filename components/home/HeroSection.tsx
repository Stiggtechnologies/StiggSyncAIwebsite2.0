'use client';

import { motion } from 'framer-motion';
import GlowButton from '@/components/ui/GlowButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
            The Industrial AI
            <br />
            <span className="text-[#3B82F6]">Infrastructure Layer</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed"
        >
          Autonomous AI agents embedded inside asset-intensive operations — operating, prioritizing, and optimizing in real time.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-base text-gray-400 mb-12 max-w-2xl mx-auto border border-white/10 rounded-lg px-6 py-3 bg-white/[0.02]"
        >
          StiggSync is an enterprise AI platform deployed via structured 90-day pilots and scaled as ongoing infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
        >
          <GlowButton href="/strategic-pilot" variant="primary">
            Apply for Strategic Pilot
          </GlowButton>
          <GlowButton href="/architecture" variant="secondary">
            Explore the Architecture
          </GlowButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-sm text-gray-500"
        >
          Limited enterprise pilots available for 2026 deployment.
        </motion.p>
      </div>
    </section>
  );
}
