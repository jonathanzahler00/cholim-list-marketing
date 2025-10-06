export function Credibility() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We Know the Job - Because We've Done It.
          </h2>
        </div>

        {/* Copy */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We're gabbaim, just like you.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We've felt the frustration of messy lists and last-minute updates.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            That's why we built a system that keeps things organized - automatically.
          </p>
          <p className="text-xl text-gray-900 font-medium leading-relaxed">
            So your focus stays where it belongs: on tefillah, not tracking.
          </p>
        </div>

        {/* Placeholder for future photo */}
        <div className="flex justify-center">
          <div className="bg-gray-100 rounded-xl p-8 max-w-md">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="w-16 h-16 bg-secondary-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm mt-4">
              Built by gabbaim who understand the work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

