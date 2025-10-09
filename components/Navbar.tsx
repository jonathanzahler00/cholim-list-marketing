'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from './Button';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.svg" alt="Cholim List Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">Cholim List</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/how-it-works" className="text-gray-700 hover:text-primary-600 font-bold transition-colors">
              How It Works
            </Link>
            <Link href="/demo" className="text-gray-700 hover:text-primary-600 font-bold transition-colors">
              Get Your Shul Organized
            </Link>
            <Button href="/demo" variant="primary" size="sm">
              Get Your Shul Organized
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/how-it-works" 
              className="block py-2 text-gray-700 hover:text-primary-600 font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="/demo" 
              className="block py-2 text-gray-700 hover:text-primary-600 font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Your Shul Organized
            </Link>
            <Button href="/demo" variant="primary" size="md" className="w-full">
              Get Your Shul Organized
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}


