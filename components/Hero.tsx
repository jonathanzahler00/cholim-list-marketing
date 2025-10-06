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
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            Built for gabbaim who are tired of chasing updates. This list runs itself - for you, not by you.
          </p>
          
          {/* Category Declaration */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg px-6 py-4 shadow-sm">
              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                The first automated cholim list platform for shuls.
                <br />
                <span className="text-gray-600">Because every community deserves an organized system - not a spreadsheet.</span>
              </p>
            </div>
          </div>
          
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


