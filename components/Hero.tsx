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
            Finally — an Organized Cholim List
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              for Your Shul.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
            Stop juggling WhatsApps, paper notes, and Google Sheets. Cholim List runs itself — for you, not by you.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button href="/demo" variant="primary" size="lg">
              Get Your Shul Organized
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button href="/how-it-works" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}


