import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: "About Us - Cholim List",
  description: "Learn about our mission to modernize Mi Sheberach management for Jewish communities worldwide.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Built for Jewish communities,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              with love and care
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Our mission is to help synagogues and Jewish organizations manage cholim names 
            with the dignity, respect, and efficiency they deserve.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Prayer for the sick is a fundamental part of Jewish life. Every week, gabbaim and 
              community leaders dedicate countless hours collecting, organizing, and managing cholim names 
              for Mi Sheberach prayers.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              We saw synagogues struggling with Google Forms, gabbaim manually checking for duplicates 
              in spreadsheets, and names falling through the cracks. We knew there had to be a better way.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              That's why we built Cholim List—a dedicated platform designed specifically for Jewish 
              communities, with all the features needed to manage Mi Sheberach lists professionally, 
              respectfully, and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why we built this
            </h2>
            <p className="text-xl text-gray-600">
              The pain points we heard from communities everywhere
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Manual Duplicate Checking
              </h3>
              <p className="text-gray-600">
                Gabbaim spending hours every week manually scanning lists to find duplicate names 
                and variations in spelling.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Inefficient Systems
              </h3>
              <p className="text-gray-600">
                Google Forms feeding into messy spreadsheets, with no built-in tools for the 
                specific needs of cholim list management.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Names Falling Through Cracks
              </h3>
              <p className="text-gray-600">
                Long-term names accidentally removed during weekly cleanup. Important submissions 
                lost in email chains.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                No Automation
              </h3>
              <p className="text-gray-600">
                Weekly rollovers done manually. Forgetting to archive old names. Starting from 
                scratch every Sunday.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hebrew Challenges
              </h3>
              <p className="text-gray-600">
                Poor Hebrew support in generic tools. Right-to-left text displaying incorrectly. 
                Mother's names formatted wrong.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Security & Privacy Concerns
              </h3>
              <p className="text-gray-600">
                Public Google Sheets with no access control. Names visible to anyone with the link. 
                No audit trail of changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              What guides everything we do
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-6 font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Dignity & Respect</h3>
                <p className="text-lg text-gray-600">
                  Mi Sheberach names represent people in difficult times. Every feature is designed 
                  with respect for the sacred nature of this work.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-secondary-100 text-secondary-600 rounded-full flex items-center justify-center mr-6 font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Purpose-Built</h3>
                <p className="text-lg text-gray-600">
                  We don't try to be everything to everyone. We focus exclusively on cholim name 
                  management and do it exceptionally well.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-accent-100 text-accent-600 rounded-full flex items-center justify-center mr-6 font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Community First</h3>
                <p className="text-lg text-gray-600">
                  We listen to gabbaim, administrators, and community members. Our roadmap is driven 
                  by real needs from real Jewish organizations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-6 font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Simplicity</h3>
                <p className="text-lg text-gray-600">
                  Powerful doesn't mean complicated. We hide complexity behind clean, intuitive 
                  interfaces that anyone can use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Communities</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Names Managed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Hours Saved</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600">Duplicate Prevention</div>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Every week, we help communities focus less on logistics and more on what matters: 
            prayer, healing, and community support.
          </p>
          <Button href="/demo" variant="primary" size="lg">
            Join Our Community
          </Button>
        </div>
      </section>

      <CTA />
    </main>
  );
}


