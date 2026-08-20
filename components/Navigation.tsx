'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Assessment', href: '/reliability-assessment' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Industries', href: '/industries' },
  { label: 'Security', href: '/security' },
  { label: 'Insights', href: '/insights' },
  { label: 'Company', href: '/company' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0B0F14]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-wide text-white">
            Sync<span className="text-cyan-300">AI</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  pathname === item.href ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
                {pathname === item.href && <span className="absolute -bottom-2 left-0 h-px w-full bg-cyan-300" />}
              </Link>
            ))}
            <Link
              href="/strategic-pilot"
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-cyan-300 px-5 py-2 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
            >
              Strategic Pilot
            </Link>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            className="text-white lg:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/5 bg-[#0B0F14] lg:hidden">
          <div className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href ? 'bg-white/[0.05] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/strategic-pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 block rounded-md bg-cyan-300 px-5 py-3 text-center text-sm font-bold text-slate-950"
            >
              Strategic Pilot
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
