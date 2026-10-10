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
            <div className="absolute -inset-1 bg-[#D6B885] rounded-lg blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          )}
          <span
            className={`relative px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              isPrimary
                ? 'bg-[#D6B885] text-ink hover:bg-[#D6B885]/90 shadow-lg shadow-[#D6B885]/30'
                : 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/40'
            }`}
          >
            {children}
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
