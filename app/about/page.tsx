import { Metadata } from 'next';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: "About - Cholim List",
  description: "Built by gabbaim, for gabbaim. We know the stress of managing cholim names - we built this system to fix that.",
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
            We know the stress of managing cholim names - the WhatsApps, the calls, the late-night updates. We built this system to fix that, so every tefillah can focus on what matters most.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 mb-6">
              We built Cholim List because we lived this reality.
            </p>
            
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-700">
              The chaos. The late-night updates. The administrative burden that takes time away from what matters.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
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

