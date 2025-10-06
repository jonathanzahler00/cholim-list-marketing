import { Button } from './Button';

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
            Finally - a Cholim List
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              That's Actually Organized.
            </span>
          </h1>
          
          {/* Subheadline */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 leading-relaxed">
              Stop juggling WhatsApps, emails, and scraps of paper.
            </p>
            <p className="text-xl sm:text-2xl text-gray-900 font-medium leading-relaxed">
              This is the Cholim List that's run for you - not by you.
            </p>
          </div>
          
          {/* Visual Placeholder */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg p-8">
              {/* Left: Messy */}
              <div className="text-center">
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 h-64 flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-red-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p className="text-sm text-gray-700 font-medium mb-2">Before: Chaos</p>
                  <p className="text-xs text-gray-500">WhatsApp threads, scattered emails, lost names</p>
                </div>
              </div>
              
              {/* Right: Clean */}
              <div className="text-center">
                <div className="bg-secondary-50 border-2 border-secondary-200 rounded-xl p-6 h-64 flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-secondary-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <p className="text-sm text-gray-700 font-medium mb-2">After: Organized</p>
                  <p className="text-xs text-gray-500">Clean list, automatic updates, ready to print</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button href="/demo" variant="primary" size="lg">
              Get Your Shul Organized
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button href="#how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
          
          {/* Category Line */}
          <p className="text-sm text-gray-600">
            The first automated cholim list platform for shuls.
          </p>
          
        </div>
      </div>
    </section>
  );
}


