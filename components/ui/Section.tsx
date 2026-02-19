import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({ children, className = '', fullWidth = false }: SectionProps) {
  return (
    <section className={`relative z-10 py-20 md:py-32 ${className}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        {children}
      </div>
    </section>
  );
}
