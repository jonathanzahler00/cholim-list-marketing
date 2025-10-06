export function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Trusted by gabbaim who care about doing it right.
        </h2>
        
        {/* Copy */}
        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
          We're rolling out with shuls across the U.S. and Israel who are tired of managing lists manually.
          <br />
          <strong>Be among the first to organize your community's cholim updates the modern way.</strong>
        </p>
        
        {/* CTA */}
        <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
          <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-gray-700 font-medium">Join the early community</span>
        </div>
      </div>
    </section>
  );
}

