import { Metadata } from 'next';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: "About - Cholim List",
  description: "Built by gabbaim, for gabbaim. We know the stress of managing cholim names — we built this system to fix that.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Built by gabbaim, for gabbaim.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We know the stress of managing cholim names — the WhatsApps, the calls, the late-night updates. We built this system to fix that, so every tefillah can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-xl leading-relaxed mb-6">
              Every gabbai knows the Sunday night scramble: chasing down names from WhatsApp, text messages, and phone calls. Trying to remember who's been on the list for months and who just got added. Worrying about duplicates and outdated information.
            </p>
            
            <p className="text-xl leading-relaxed mb-6">
              We built Cholim List because we lived this reality. We saw how much time and energy went into something that should be simple: keeping an organized, up-to-date list of names for Mi Sheberach.
            </p>
            
            <p className="text-xl leading-relaxed mb-6">
              The system automates the chaos. Members submit names securely. The system organizes everything automatically. Gabbaim get a clean, printable list — no chasing required.
            </p>
            
            <p className="text-xl leading-relaxed">
              Simple. Organized. Built for the people who care about doing it right.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What drives us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Simplicity
              </h3>
              <p className="text-gray-600">
                Technology should make life easier, not harder. We keep things simple.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Dignity
              </h3>
              <p className="text-gray-600">
                Every name on the list represents a person. We treat that responsibility with respect.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Community
              </h3>
              <p className="text-gray-600">
                We're building for Jewish communities everywhere, from small shuls to large organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to get organized?
          </h2>
          <Button href="/demo" variant="primary" size="lg">
            Get Your Shul Organized
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </section>
    </main>
  );
}

