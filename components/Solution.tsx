const solutions = [
  {
    pain: "Names come in from everywhere.",
    solution: "One form, one source of truth.",
  },
  {
    pain: "No one knows when to remove names.",
    solution: "Automatic reminders to review each week.",
  },
  {
    pain: "I spend hours retyping.",
    solution: "Auto-updated, printable lists.",
  },
  {
    pain: "Duplicates and confusion.",
    solution: "Real-time duplicate detection.",
  },
  {
    pain: "Long-term names get lost.",
    solution: "Organized long-term tracking.",
  },
];

export function Solution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            From Chaos to Organized
          </h2>
          <p className="text-xl text-gray-600">
            Here's how Cholim List fixes every pain point.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-2 bg-gray-100 border-b border-gray-200">
            <div className="px-6 py-4">
              <h3 className="text-lg font-bold text-gray-900">Current Pain</h3>
            </div>
            <div className="px-6 py-4 bg-primary-50">
              <h3 className="text-lg font-bold text-primary-900">Cholim List Solution</h3>
            </div>
          </div>

          {solutions.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 border-b border-gray-200 last:border-b-0 ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="px-6 py-5">
                <p className="text-base text-gray-700">{item.pain}</p>
              </div>
              <div className="px-6 py-5 bg-primary-50/50">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-secondary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-base text-gray-900 font-medium">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-700 mb-6">
            <strong>Every feature is an antidote to the current chaos.</strong>
            <br />
            Get your shul organized in minutes.
          </p>
          <a
            href="/demo"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Your Shul Organized
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

