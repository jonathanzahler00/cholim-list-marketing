const steps = [
  {
    number: '01',
    title: 'Share Your Link',
    description: 'Give your community members a simple, clean submission form link. They can submit names anytime, from anywhere.',
  },
  {
    number: '02',
    title: 'Names Are Collected',
    description: 'Submissions come in with instant duplicate detection. Long-term names are automatically flagged and preserved.',
  },
  {
    number: '03',
    title: 'Review & Export',
    description: 'View all submissions in your admin dashboard. Search, filter, and export to CSV or print-friendly formats with one click.',
  },
  {
    number: '04',
    title: 'Automatic Rollover',
    description: 'Every Sunday night, non-long-term names are automatically archived. Start fresh each week with zero manual work.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase mb-2">
            How It Works
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, streamlined, automated
          </p>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            From submission to Shabbos in four easy steps.
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
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
      </div>
    </section>
  );
}


