import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-3 justify-center">
              <img src="/logo.svg" alt="Cholim List Logo" className="w-10 h-10" />
              <span className="text-xl font-bold text-white">Cholim List</span>
            </div>
            <p className="text-base text-gray-300 font-medium">
              The Cholim List that's run for you - not by you.
            </p>
          </div>
          
          {/* Simple Links */}
          <div className="flex gap-8 justify-center text-sm mb-8">
            <Link href="/how-it-works" className="hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/demo" className="hover:text-white transition-colors">
              Get Started
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Cholim List. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


