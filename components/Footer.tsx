import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0B0F14]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-xl font-bold tracking-wide text-white mb-4">
              StiggSync<span className="text-[#3B82F6]">AI</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-2">
              Industrial AI Infrastructure
            </p>
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              Autonomous agents embedded inside asset-intensive operations.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/architecture" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/ai-readiness" className="text-gray-400 text-sm hover:text-white transition-colors">
                  AI Readiness
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/company" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/strategic-pilot" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Strategic Pilot
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; 2026 StiggSync AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/security" className="text-gray-500 text-sm hover:text-white transition-colors">
                Security
              </Link>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
