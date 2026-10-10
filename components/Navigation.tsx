'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EVALUATION_CONTACT_URL } from '@/lib/site-links';
import { Menu, X } from 'lucide-react';
import BrandWordmark from '@/components/BrandWordmark';

const navItems = [
  { label: 'Platform', href: '/platform' },
  { label: 'Assessment', href: '/reliability-assessment' },
  { label: 'Training', href: '/training' },
  { label: 'Industries', href: '/industries' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/company' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMobileMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <nav aria-label="Main navigation" className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#101113]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <BrandWordmark priority />

          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`relative text-sm font-medium transition-colors ${
                  pathname === item.href ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {pathname === item.href && <span className="absolute -bottom-2 left-0 h-px w-full bg-cyan-300" />}
              </Link>
            ))}
            <Link
              href={EVALUATION_CONTACT_URL}
              className="inline-flex min-h-10 items-center justify-center rounded-sm bg-cyan-300 px-5 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
            >
              Discuss an evaluation
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-white lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/5 bg-ink lg:hidden">
          <div className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href ? 'bg-white/[0.05] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={EVALUATION_CONTACT_URL}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 block rounded-sm bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950"
            >
              Discuss an evaluation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
