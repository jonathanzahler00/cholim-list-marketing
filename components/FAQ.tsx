'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How does duplicate detection work?',
    answer: 'Our system uses advanced fuzzy matching algorithms to detect similar names across Hebrew and English. It checks for variations in spelling, transliteration differences, and common typos to prevent the same person from being listed multiple times.',
  },
  {
    question: 'Can I customize the submission form?',
    answer: 'Yes! You can customize the form\'s text, add your organization\'s branding, set submission limits, and configure which fields are required. The Pro and Enterprise tiers offer even more customization options.',
  },
  {
    question: 'What happens to names after the weekly rollover?',
    answer: 'Non-long-term names are automatically archived every Sunday at midnight. They\'re not deleted - you can still access them in the archive section of your admin dashboard for historical records or reporting.',
  },
  {
    question: 'Is the platform HIPAA compliant?',
    answer: 'We intentionally designed the system to NOT require HIPAA compliance by collecting only names - no medical conditions, diagnoses, or protected health information. This keeps the platform simple, affordable, and focused on its purpose.',
  },
  {
    question: 'Can multiple people manage the same account?',
    answer: 'Absolutely! You can add multiple admin users with different permission levels. Great for large shuls with multiple gabbaim or organizations with multiple staff members.',
  },
  {
    question: 'Do you support printing to physical lists?',
    answer: 'Yes! The platform includes print-friendly layouts optimized for physical distribution. The Enterprise tier also includes PrintNode integration for automated printing directly to your printer.',
  },
  {
    question: 'What about multi-campus organizations?',
    answer: 'The Enterprise tier includes support for multi-site organizations with centralized management and individual campus-specific lists. Perfect for Jewish schools, Chabad houses, and organizations with multiple locations.',
  },
  {
    question: 'How do I migrate from Google Forms or spreadsheets?',
    answer: 'We provide an easy import tool that accepts CSV files from Google Sheets, Excel, or any other system. We can also help with the migration process during your onboarding - just reach out to our support team.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase mb-2">
            FAQ
          </h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </p>
          <p className="text-xl text-gray-600">
            Everything you need to know about Cholim List
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary-600 transform transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a 
            href="/demo" 
            className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
          >
            Contact us
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}


