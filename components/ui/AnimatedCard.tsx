'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedCard({ children, className = '', delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`group relative border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/10 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
