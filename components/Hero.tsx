import { Button } from './Button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16 pb-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium mb-8">
            <span className="mr-2">✨</span>
            Modern Mi Sheberach Management
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            From Paper Lists to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Digital Excellence
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
            Streamline your cholim names collection with a dedicated solution built for Jewish communities. 
            Eliminate duplicates, save hours every week, and manage Mi Sheberach lists with dignity and ease.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button href="/demo" variant="primary" size="lg">
              Request Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See Pricing
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 border-2 border-white"
                ></div>
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              Trusted by <span className="font-semibold text-primary-700">50+ communities</span> worldwide
            </p>
          </div>
        </div>
        
        {/* Demo Screenshot Placeholder */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Live Demo Screenshot</p>
                <p className="text-gray-400 text-sm mt-2">Clean, modern interface designed for dignity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


