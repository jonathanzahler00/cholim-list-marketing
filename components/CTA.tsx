import { Button } from './Button';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to modernize your Mi Sheberach list?
        </h2>
        <p className="text-xl text-primary-100 mb-10 leading-relaxed">
          Join 50+ communities already using Cholim List. Start your 14-day free trial today, 
          or schedule a personalized demo to see how we can help your organization.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/demo" variant="secondary" size="lg">
            Schedule a Demo
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Button>
          <Button 
            href="https://app.cholimlist.com/signup" 
            variant="outline" 
            size="lg"
            className="bg-white text-primary-700 hover:bg-gray-50 border-white"
          >
            Start Free Trial
          </Button>
        </div>
        
        <p className="mt-6 text-primary-200 text-sm">
          No credit card required • Setup in under 5 minutes
        </p>
      </div>
    </section>
  );
}


