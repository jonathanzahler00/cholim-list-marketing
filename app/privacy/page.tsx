import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy - Cholim List",
  description: "How we handle cholim names with respect, confidentiality, and care.",
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Privacy
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 space-y-8">
            {/* What we collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What we collect
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Names submitted for tefillah (Hebrew and English). Optional: contact email of the person submitting.
              </p>
            </div>

            {/* What we don't collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What we don't collect
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                <strong>Medical details or diagnoses.</strong> This is explicit - we do not allow diagnosis fields or medical information.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our submission forms are designed to collect only names for prayer, nothing more.
              </p>
            </div>

            {/* Who can access */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Who can access
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Only authorized gabbaim and admins for that specific shul. Each shul's list is completely separate and private.
              </p>
            </div>

            {/* Removal */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Removal
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Any name can be removed upon request. Weekly review prompts help keep the list current and respectful.
              </p>
            </div>

            {/* Retention */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Retention
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Archived entries are purged after 12 months. Active lists are reviewed weekly to ensure accuracy.
              </p>
            </div>

            {/* Security basics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Security basics
              </h2>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Encrypted in transit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Restricted admin access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Audit log of all changes</span>
                </li>
              </ul>
              <p className="text-base text-gray-600 mt-6 italic">
                Note: We are not a covered entity and do not claim HIPAA compliance. Our scope is intentionally narrow - names for prayer only.
              </p>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-700">
                Questions about privacy? Email us at{' '}
                <a href="mailto:info@cholim-list.com" className="text-primary-600 hover:text-primary-700 underline">
                  info@cholim-list.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

