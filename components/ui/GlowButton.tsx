'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function GlowButton({ href, children, variant = 'primary', className = '' }: GlowButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className={`inline-block ${className}`}
      >
        <div className="relative group">
          {isPrimary && (
            <div className="absolute -inset-1 bg-[#3B82F6] rounded-lg blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          )}
          <button
            className={`relative px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              isPrimary
                ? 'bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90 shadow-lg shadow-[#3B82F6]/30'
                : 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/40'
            }`}
          >
            {children}
          </button>
        </div>
      </motion.div>
    </Link>
  );
}
