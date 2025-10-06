export function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Stop Chasing Names?
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Let's get your shul organized - in one step.
        </p>
        
        <a
          href="/demo"
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Get My Shul Organized
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        
        <p className="mt-6 text-sm text-gray-600">
          We'll contact you personally to help set up your shul's list. No tech skills needed.
        </p>
      </div>
    </section>
  );
}


