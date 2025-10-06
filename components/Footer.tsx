import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-lg text-gray-300 font-medium mb-2">
            Cholim List - The Cholim List that's run for you, not by you.
          </p>
          <p className="text-sm text-gray-400 mb-4">
            © 2025 Cholim List | info@cholim-list.com
          </p>
        </div>
        
        {/* Footer links */}
        <div className="flex justify-center space-x-8 text-sm">
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/demo" className="text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}


