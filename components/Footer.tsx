import Link from 'next/link';
import BrandWordmark from '@/components/BrandWordmark';
import { APP_SETUP_URL } from '@/lib/site-links';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#081018]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <BrandWordmark />
            <p className="mt-3 text-xs text-slate-600">SyncAI is a product of Stigg.</p>
            <p className="mt-4 max-w-md text-sm leading-[1.7] text-slate-400">
              Governed industrial intelligence for reliability, maintenance, and asset-intensive operations.
            </p>
            <div className="mt-5 space-y-1 text-sm">
              <a href="mailto:info@syncai.ca" className="block text-slate-500 hover:text-white">info@syncai.ca</a>
              <a href="mailto:security@syncai.ca" className="block text-slate-500 hover:text-white">security@syncai.ca</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Start</h3>
            <ul className="mt-4 space-y-3">
              <li><a href={APP_SETUP_URL} className="text-sm text-slate-400 hover:text-white">Reliability Engineer</a></li>
              <li><Link href="/reliability-assessment" className="text-sm text-slate-400 hover:text-white">Reliability Assessment</Link></li>
              <li><Link href="/strategic-pilot" className="text-sm text-slate-400 hover:text-white">Strategic Pilot</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/architecture" className="text-sm text-slate-400 hover:text-white">Architecture</Link></li>
              <li><Link href="/industries" className="text-sm text-slate-400 hover:text-white">Industries</Link></li>
              <li><Link href="/security" className="text-sm text-slate-400 hover:text-white">Security</Link></li>
              <li><Link href="/insights" className="text-sm text-slate-400 hover:text-white">Insights</Link></li>
              <li><Link href="/company" className="text-sm text-slate-400 hover:text-white">Company</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} SyncAI. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/security" className="hover:text-white">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
