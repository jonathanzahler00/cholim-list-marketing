export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Members Submit",
      description: "People add names directly through your shul's secure form - no more collecting messages.",
    },
    {
      number: "2",
      title: "System Organizes",
      description: "Cholim List tracks updates, reminders, and removes outdated entries automatically.",
    },
    {
      number: "3",
      title: "You Share or Print",
      description: "Each week, get a clean, current list ready for davening - without lifting a finger.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Cholim List - Organized, Updated, and Ready Every Week.
          </h2>
        </div>

        {/* 3-Step Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-12 gap-6 p-8 ${
                index !== steps.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              {/* Step Number */}
              <div className="col-span-12 md:col-span-2 flex items-center justify-center md:justify-start">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Step Title */}
              <div className="col-span-12 md:col-span-3 flex items-center">
                <h3 className="text-2xl font-bold text-gray-900 text-center md:text-left">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <div className="col-span-12 md:col-span-7 flex items-center">
                <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/how-it-works"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            See It In Action
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

