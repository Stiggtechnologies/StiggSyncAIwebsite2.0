'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProgressIndicatorProps {
  steps: string[];
  currentStep: number;
}

export default function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.1 : 1,
                    backgroundColor: isCompleted
                      ? '#3B82F6'
                      : isCurrent
                      ? '#1E3A8A'
                      : '#1E293B',
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    isCompleted
                      ? 'border-[#3B82F6]'
                      : isCurrent
                      ? 'border-[#3B82F6] shadow-lg shadow-[#3B82F6]/30'
                      : 'border-[#334155]'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <span
                      className={`text-sm font-semibold ${
                        isCurrent ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {index + 1}
                    </span>
                  )}
                </motion.div>
                <span
                  className={`mt-2 text-xs text-center max-w-[80px] ${
                    isCurrent ? 'text-white font-medium' : 'text-gray-500'
                  }`}
                >
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 mt-[-20px]">
                  <div className="h-full bg-[#1E293B] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isCompleted ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-[#3B82F6]"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
