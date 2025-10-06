import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center space-x-3 mb-2 justify-center md:justify-start">
              <img src="/logo.svg" alt="Cholim List Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-white">Cholim List</span>
            </div>
            <p className="text-gray-400 text-sm">
              The Cholim List that's run for you — not by you.
            </p>
          </div>
          
          {/* Simple Links */}
          <div className="flex gap-8 text-sm">
            <Link href="/how-it-works" className="hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/demo" className="hover:text-white transition-colors">
              Get Started
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cholim List. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


