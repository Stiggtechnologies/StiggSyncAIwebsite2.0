'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';

interface StepContainerProps {
  title: string;
  description: string;
  children: ReactNode;
  onNext: () => void;
  onBack?: () => void;
  isFirstStep?: boolean;
  isLastStep?: boolean;
  isSubmitting?: boolean;
  canProceed?: boolean;
}

export default function StepContainer({
  title,
  description,
  children,
  onNext,
  onBack,
  isFirstStep = false,
  isLastStep = false,
  isSubmitting = false,
  canProceed = true,
}: StepContainerProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={title}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-2xl mx-auto"
      >
        <div className="bg-gradient-to-b from-[#1E293B]/50 to-[#0F172A]/50 border border-[#334155] rounded-2xl p-8 backdrop-blur-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-gray-400">{description}</p>
          </div>

          <div className="space-y-6">{children}</div>

          <div className="flex justify-between mt-10 pt-6 border-t border-[#334155]">
            {!isFirstStep && onBack ? (
              <button
                onClick={onBack}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-3 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            <motion.button
              whileHover={{ scale: canProceed && !isSubmitting ? 1.02 : 1 }}
              whileTap={{ scale: canProceed && !isSubmitting ? 0.98 : 1 }}
              onClick={onNext}
              disabled={!canProceed || isSubmitting}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
                canProceed && !isSubmitting
                  ? 'bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90 shadow-lg shadow-[#3B82F6]/30'
                  : 'bg-[#334155] text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : isLastStep ? (
                'Get Your Results'
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
