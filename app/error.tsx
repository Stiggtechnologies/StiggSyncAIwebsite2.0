'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B0F14]">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-red-500" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Something Went Wrong
          </h1>

          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors shadow-lg shadow-[#3B82F6]/30"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {error.digest && (
            <p className="mt-8 text-xs text-gray-600">
              Error ID: {error.digest}
            </p>
          )}
        </motion.div>
      </div>
    </main>
  );
}
