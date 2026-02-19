'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Architecture', href: '/architecture' },
  { label: 'Industries', href: '/industries' },
  { label: 'Philosophy', href: '/philosophy' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F14]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold tracking-wide text-white">
            StiggSync<span className="text-[#3B82F6]">AI</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  pathname === item.href ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#3B82F6] transition-all duration-300 ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/strategic-pilot"
              className="px-6 py-2 bg-[#3B82F6] text-white text-sm font-medium rounded hover:bg-[#3B82F6]/90 transition-all hover:shadow-lg hover:shadow-[#3B82F6]/50"
            >
              Apply for Pilot
            </Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F14] border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  pathname === item.href ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/strategic-pilot"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-6 py-2 bg-[#3B82F6] text-white text-sm font-medium rounded text-center"
            >
              Apply for Pilot
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
