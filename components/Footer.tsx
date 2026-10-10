import Link from 'next/link';
import BrandWordmark from '@/components/BrandWordmark';
import { APP_WORKSPACE_URL, EVALUATION_CONTACT_URL } from '@/lib/site-links';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#111214]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <BrandWordmark />
            <p className="mt-3 text-xs text-slate-400">Stigg Security Inc. DBA SyncAI.</p>
            <p className="mt-4 max-w-md text-sm leading-[1.7] text-slate-400">
              Governed industrial intelligence for reliability, maintenance, and asset-intensive operations.
            </p>
            <div className="mt-5 space-y-1 text-sm">
              <a href="mailto:oadavis@syncai.ca" className="block text-slate-500 hover:text-white">oadavis@syncai.ca</a>
              <p className="text-slate-400">200 Parent Way, Fort McMurray, AB T9H5E6</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Start</h3>
            <ul className="mt-4 space-y-3">
              <li><a href={EVALUATION_CONTACT_URL} className="text-sm text-slate-400 hover:text-white">Discuss an evaluation</a></li>
              <li><a href={APP_WORKSPACE_URL} className="text-sm text-slate-400 hover:text-white">Customer workspace</a></li>
              <li><Link href="/reliability-assessment" className="text-sm text-slate-400 hover:text-white">Reliability Assessment</Link></li>
              <li><Link href="/strategic-pilot" className="text-sm text-slate-400 hover:text-white">Strategic Pilot</Link></li>
              <li><Link href="/platform" className="text-sm text-slate-400 hover:text-white">Platform</Link></li>
              <li><Link href="/training" className="text-sm text-slate-400 hover:text-white">Training</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><Link href="/company" className="text-sm text-slate-400 hover:text-white">Company</Link></li>
              <li><Link href="/architecture" className="text-sm text-slate-400 hover:text-white">Architecture</Link></li>
              <li><Link href="/industries" className="text-sm text-slate-400 hover:text-white">Industries</Link></li>
              <li><Link href="/ai-for-mining-reliability" className="text-sm text-slate-400 hover:text-white">Mining reliability</Link></li>
              <li><Link href="/security" className="text-sm text-slate-400 hover:text-white">Security</Link></li>
              <li><Link href="/resources" className="text-sm text-slate-400 hover:text-white">Resource Corner</Link></li>
              <li><Link href="/insights" className="text-sm text-slate-400 hover:text-white">Insights</Link></li>
              <li><Link href="/manuals" className="text-sm text-slate-400 hover:text-white">Field Manual</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
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
