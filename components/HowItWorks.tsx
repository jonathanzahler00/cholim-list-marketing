const steps = [
  {
    number: '01',
    title: 'Members submit names securely.',
    description: 'Use a form or link unique to each shul.',
  },
  {
    number: '02',
    title: 'The system organizes and updates automatically.',
    description: 'Show version control or automatic sorting.',
  },
  {
    number: '03',
    title: 'The gabbai receives a clean, printable list - no chasing.',
    description: 'One click to export, print, or share. The list is ready when you are.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Your cholim list - organized, updated, and ready every week.
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Three simple steps.
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 h-full">
                  {/* Number Badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white text-xl font-bold rounded-full mb-4 shadow-lg">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="/how-it-works"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            See It in Action
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


