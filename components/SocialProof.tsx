const testimonials = [
  {
    quote: "Cholim List has saved our gabbaim countless hours every week. The automatic duplicate detection alone is worth it!",
    author: "Rabbi David Cohen",
    role: "Gabbai, Beth Israel Congregation",
    location: "New York, NY",
  },
  {
    quote: "We switched from Google Forms and the difference is night and day. Everything is so much more organized and professional.",
    author: "Sarah Levy",
    role: "Administrator",
    location: "Chabad of Los Angeles",
  },
  {
    quote: "The long-term name tracking feature ensures we never forget anyone who needs our prayers. It's been a game-changer for our community.",
    author: "Michael Goldstein",
    role: "Shul President",
    location: "Congregation Ahavas Torah, Chicago",
  },
];

const stats = [
  { number: '50+', label: 'Communities' },
  { number: '10,000+', label: 'Names Managed' },
  { number: '100%', label: 'Duplicate Prevention' },
  { number: '24/7', label: 'Availability' },
];

export function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase mb-2">
            Testimonials
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Loved by communities worldwide
          </p>
          <p className="text-xl text-gray-600">
            See what people are saying about Cholim List
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="text-primary-400 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="border-t border-gray-200 pt-6">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


