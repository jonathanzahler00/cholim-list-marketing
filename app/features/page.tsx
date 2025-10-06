import { Metadata } from 'next';
import { Button } from '@/components/Button';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: "Features - Cholim List",
  description: "Explore all the powerful features of Cholim List: duplicate detection, automated rollover, Hebrew support, and more.",
};

const featureDetails = [
  {
    category: "Public Form Features",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: [
      {
        title: "Simple, Clean Submission Form",
        description: "Community members can submit up to 4 cholim names per submission with both Hebrew and English names. The intuitive interface guides users through the process step-by-step."
      },
      {
        title: "Real-time Duplicate Detection",
        description: "As users type, the system instantly checks for potential duplicates using fuzzy matching algorithms. Prevents the same person from being listed multiple times."
      },
      {
        title: "Long-term Name Flagging",
        description: "Users can mark names as long-term, ensuring they persist across weekly rollovers. Perfect for chronic conditions or extended recovery periods."
      },
      {
        title: "Hebrew Mother's Name Support",
        description: "Full support for Hebrew mother's names (ben/bat) with proper right-to-left text handling and beautiful Hebrew typography."
      },
    ],
  },
  {
    category: "Admin Dashboard Capabilities",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      {
        title: "Comprehensive Name Management",
        description: "View all submitted names in a clean, organized table. Sort by date, name, or status. Edit, flag, or remove entries as needed."
      },
      {
        title: "Powerful Search & Filter",
        description: "Instantly search by Hebrew or English name. Filter by week, long-term status, or submission date. Find any name in seconds."
      },
      {
        title: "Export to Multiple Formats",
        description: "Export your list to CSV for spreadsheets, JSON for developers, or print-friendly PDF layouts. One click exports everything."
      },
      {
        title: "Archive Management",
        description: "Access historical data from previous weeks. Restore accidentally archived names. View trends and statistics over time."
      },
    ],
  },
  {
    category: "Automation Features",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: [
      {
        title: "Automated Weekly Rollover",
        description: "Every Sunday at midnight (configurable), the system automatically archives non-long-term names. Start each week fresh with zero manual work."
      },
      {
        title: "Email Notifications (Pro)",
        description: "Receive automated emails when new names are submitted. Get weekly summary reports. Configure notification preferences for multiple admins."
      },
      {
        title: "PrintNode Integration (Enterprise)",
        description: "Automatically print updated lists to your printer. Schedule prints for Shabbos morning. Never forget to print your list again."
      },
      {
        title: "Webhook Support (Enterprise)",
        description: "Integrate with your existing systems using webhooks. Connect to Slack, Discord, or custom applications for real-time updates."
      },
    ],
  },
  {
    category: "Security & Compliance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    features: [
      {
        title: "Enterprise-Grade Security",
        description: "Rate limiting, CSRF protection, XSS prevention, and SQL injection safeguards. Your data is protected with industry-standard security measures."
      },
      {
        title: "Encrypted Data Storage",
        description: "All names and data are encrypted at rest using AES-256 encryption. Secure connections with TLS 1.3 for data in transit."
      },
      {
        title: "Role-Based Access Control (Pro)",
        description: "Create multiple admin accounts with different permission levels. View-only access for gabbaim, full access for administrators."
      },
      {
        title: "Audit Logs (Enterprise)",
        description: "Complete audit trail of all actions. See who added, edited, or deleted names. Export logs for compliance or review."
      },
    ],
  },
  {
    category: "Print & Export Options",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
    features: [
      {
        title: "Print-Friendly Layouts",
        description: "Beautiful, professional layouts optimized for printing. Multiple template options: compact, full page, or two-column."
      },
      {
        title: "Hebrew Typography",
        description: "Proper Hebrew fonts and formatting for print. Right-to-left text handling ensures names are displayed correctly."
      },
      {
        title: "CSV Export",
        description: "Export to CSV for use in Excel, Google Sheets, or any spreadsheet application. Includes all data fields for further analysis."
      },
      {
        title: "JSON API (Pro)",
        description: "Access your data programmatically via REST API. Build custom integrations with your website or other applications."
      },
    ],
  },
  {
    category: "Multi-Site Features (Enterprise)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    features: [
      {
        title: "Centralized Management",
        description: "Manage multiple locations from a single dashboard. View combined reports or individual site data. Perfect for multi-campus organizations."
      },
      {
        title: "Site-Specific Lists",
        description: "Each location maintains its own cholim list while sharing the same infrastructure. Cross-site duplicate detection available."
      },
      {
        title: "White-Label Options",
        description: "Custom domain support (names.yourshul.org). Branded submission forms with your organization's logo and colors."
      },
      {
        title: "Dedicated Support",
        description: "Priority email and phone support. Dedicated account manager. Custom feature development available for enterprise clients."
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything you need for your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
              Mi Sheberach list to manage itself
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Built specifically for Jewish communities with the features that matter most
          </p>
          <Button href="/demo" variant="primary" size="lg">
            Request a Demo
          </Button>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {featureDetails.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-12">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mr-4">
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Perfect for every type of Jewish organization
            </h2>
            <p className="text-xl text-gray-600">
              From small shuls to large multi-campus institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Synagogues",
                description: "Weekly Mi Sheberach for your congregation",
                icon: "🕍"
              },
              {
                title: "Jewish Schools",
                description: "Collect names from students and families",
                icon: "🏫"
              },
              {
                title: "Chabad Houses",
                description: "Community-wide prayer coordination",
                icon: "🕎"
              },
              {
                title: "Organizations",
                description: "Multi-campus centralized management",
                icon: "🏛️"
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}


