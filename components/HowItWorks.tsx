const steps = [
  {
    number: '01',
    title: 'Members submit names securely.',
    description: 'A simple form your community can access anytime. No more chasing people down.',
  },
  {
    number: '02',
    title: 'The system updates and organizes automatically.',
    description: 'Duplicates are caught. Long-term names stay put. Everything is organized without you lifting a finger.',
  },
  {
    number: '03',
    title: 'Gabbaim print or share the list weekly - no chasing.',
    description: 'One click to export, print, or share. The list is ready when you are.',
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
            Three steps. No fluff, no theology, just function.
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
      </div>
    </section>
  );
}


