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
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              The industrial AI infrastructure layer. Autonomous agents embedded inside asset-intensive operations.
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
                <Link href="/philosophy" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Philosophy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/strategic-pilot" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Strategic Pilot
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} StiggSync AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
