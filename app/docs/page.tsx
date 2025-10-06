import { Metadata } from 'next';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: "Documentation - Cholim List",
  description: "Learn how to set up and use Cholim List. Setup guides, integration instructions, and API reference.",
};

const docs = [
  {
    category: "Getting Started",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      { title: "Quick Start Guide", description: "Get up and running in 5 minutes" },
      { title: "Creating Your Account", description: "Sign up and configure your organization" },
      { title: "Inviting Team Members", description: "Add admins and set permissions" },
      { title: "Customizing Your Form", description: "Personalize the submission form" },
    ],
  },
  {
    category: "Features & Usage",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    items: [
      { title: "Managing Submissions", description: "View, edit, and organize cholim names" },
      { title: "Long-term Names", description: "Flag names to persist across weeks" },
      { title: "Search & Filtering", description: "Find specific names quickly" },
      { title: "Exporting Data", description: "CSV, JSON, and PDF exports" },
    ],
  },
  {
    category: "Automation",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      { title: "Weekly Rollover", description: "Automated archiving configuration" },
      { title: "Email Notifications", description: "Set up submission alerts" },
      { title: "PrintNode Integration", description: "Automated printing setup (Enterprise)" },
      { title: "Webhooks", description: "Connect to external systems (Enterprise)" },
    ],
  },
  {
    category: "Integration & API",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: [
      { title: "API Overview", description: "RESTful API documentation (Pro)" },
      { title: "Authentication", description: "API keys and security" },
      { title: "Endpoints Reference", description: "Complete API documentation" },
      { title: "Code Examples", description: "Sample integrations in multiple languages" },
    ],
  },
  {
    category: "Administration",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    items: [
      { title: "User Roles & Permissions", description: "Managing team access (Pro)" },
      { title: "Multi-site Setup", description: "Configure multiple locations (Enterprise)" },
      { title: "Audit Logs", description: "Track all system changes (Enterprise)" },
      { title: "Security Settings", description: "Configure security preferences" },
    ],
  },
  {
    category: "Migration & Import",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    items: [
      { title: "Importing from Google Sheets", description: "Step-by-step migration guide" },
      { title: "Importing from Excel", description: "CSV import instructions" },
      { title: "Bulk Import", description: "Upload large datasets" },
      { title: "Data Format Requirements", description: "Prepare your data correctly" },
    ],
  },
];

const faqs = [
  {
    question: "How do I embed the form on my website?",
    answer: "Copy the embed code from your admin dashboard and paste it into your website's HTML."
  },
  {
    question: "Can I customize the form colors?",
    answer: "Yes! Pro and Enterprise plans include full form customization including colors, fonts, and branding."
  },
  {
    question: "What's the API rate limit?",
    answer: "Pro plans include 1,000 requests/hour. Enterprise plans have custom limits based on your needs."
  },
  {
    question: "How do I reset my password?",
    answer: "Use the 'Forgot Password' link on the login page or contact support@cholimlist.com"
  },
];

export default function DocsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Everything you need to know to get started and make the most of Cholim List
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full px-6 py-4 pl-12 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {docs.map((category, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href="#" 
                        className="group block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Help
            </h2>
            <p className="text-xl text-gray-600">
              Common questions answered
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demo" variant="primary">
                Contact Support
              </Button>
              <Button href="https://app.cholimlist.com/demo" variant="outline">
                Try Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Watch step-by-step guides</p>
              <a href="#" className="text-primary-600 font-semibold hover:text-primary-700">
                Watch Now →
              </a>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl">
              <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Knowledge Base</h3>
              <p className="text-gray-600 mb-4">Detailed articles and guides</p>
              <a href="#" className="text-secondary-600 font-semibold hover:text-secondary-700">
                Browse Articles →
              </a>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl">
              <div className="w-16 h-16 bg-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Forum</h3>
              <p className="text-gray-600 mb-4">Connect with other users</p>
              <a href="#" className="text-accent-600 font-semibold hover:text-accent-700">
                Join Community →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


