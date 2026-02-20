'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B0F14]">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <span className="text-8xl md:text-9xl font-bold text-[#3B82F6]">404</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Search className="w-4 h-4" />
              Contact Support
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-gray-500">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/architecture" className="text-sm text-gray-400 hover:text-white transition-colors">
              Architecture
            </Link>
            <Link href="/industries" className="text-sm text-gray-400 hover:text-white transition-colors">
              Industries
            </Link>
            <Link href="/ai-readiness" className="text-sm text-gray-400 hover:text-white transition-colors">
              AI Readiness
            </Link>
            <Link href="/strategic-pilot" className="text-sm text-gray-400 hover:text-white transition-colors">
              Strategic Pilot
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
