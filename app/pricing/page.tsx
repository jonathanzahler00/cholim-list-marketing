import { Metadata } from 'next';
import { PricingCard } from '@/components/PricingCard';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: "Pricing - Cholim List",
  description: "Choose the perfect plan for your community. Start with a 14-day free trial. Professional and Enterprise solutions available.",
};

const pricingTiers = [
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Complete solution for most communities",
    features: [
      "Unlimited names per week",
      "Public submission form (multiple names per submission)",
      "Real-time duplicate detection",
      "Long-term name tracking",
      "Hebrew & English support",
      "Automated monthly rollover (Rosh Chodesh)",
      "Optional monthly archive mode",
      "Admin dashboard with search & filters",
      "Export to CSV & print-friendly formats",
      "Archive management with trash/restore",
      "PrintNode integration (automated printing)",
      "Multiple admin accounts",
      "Email support",
    ],
    highlighted: true,
    cta: "Start 14-Day Free Trial",
    ctaLink: "https://app.cholimlist.com/signup",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations and multi-site needs",
    features: [
      "Everything in Professional, plus:",
      "Multi-site/multi-campus support",
      "White-label (custom domain)",
      "Advanced API access with higher rate limits",
      "Webhook integrations",
      "Audit logs & compliance tracking",
      "Custom feature development",
      "Dedicated account manager",
      "Priority phone & email support",
      "SLA guarantees (99.9% uptime)",
      "Custom contract terms",
    ],
    cta: "Contact Sales",
    ctaLink: "/demo",
  },
];

const comparisonFeatures = [
  {
    category: "Core Features",
    features: [
      { name: "Names per week", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Public submission form (multiple names)", pro: true, enterprise: true },
      { name: "Real-time duplicate detection", pro: true, enterprise: true },
      { name: "Long-term name tracking", pro: true, enterprise: true },
      { name: "Hebrew & English support", pro: true, enterprise: true },
      { name: "Automated monthly rollover (Rosh Chodesh)", pro: true, enterprise: true },
      { name: "Optional monthly archive mode", pro: true, enterprise: true },
    ],
  },
  {
    category: "Admin & Management",
    features: [
      { name: "Admin accounts", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Search & filter functionality", pro: true, enterprise: true },
      { name: "Archive management", pro: true, enterprise: true },
      { name: "Trash & restore", pro: true, enterprise: true },
      { name: "Audit logs & compliance", pro: false, enterprise: true },
    ],
  },
  {
    category: "Export & Printing",
    features: [
      { name: "CSV export", pro: true, enterprise: true },
      { name: "JSON export", pro: true, enterprise: true },
      { name: "Print-friendly layouts", pro: true, enterprise: true },
      { name: "PrintNode automated printing", pro: true, enterprise: true },
    ],
  },
  {
    category: "Automation & Integrations",
    features: [
      { name: "Custom automations", pro: false, enterprise: true },
      { name: "Webhook integrations", pro: false, enterprise: true },
    ],
  },
  {
    category: "Customization",
    features: [
      { name: "Custom form text", pro: true, enterprise: true },
      { name: "Custom domain support", pro: false, enterprise: true },
      { name: "White-label branding", pro: false, enterprise: true },
      { name: "Multi-site/multi-campus", pro: false, enterprise: true },
    ],
  },
  {
    category: "Support & SLA",
    features: [
      { name: "Email support", pro: "Standard", enterprise: "Priority" },
      { name: "Phone support", pro: false, enterprise: true },
      { name: "Dedicated account manager", pro: false, enterprise: true },
      { name: "SLA guarantee", pro: false, enterprise: "99.9% uptime" },
    ],
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that's right for your community. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={index} tier={tier} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Start with a 14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Compare plans
            </h2>
            <p className="text-xl text-gray-600">
              See all features side-by-side
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600 bg-primary-50">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <>
                      <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                        <td colSpan={3} className="px-6 py-3 text-sm font-bold text-gray-900">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr 
                          key={`feature-${categoryIndex}-${featureIndex}`} 
                          className="border-b border-gray-200 hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {feature.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-center bg-primary-50">
                            {typeof feature.pro === 'boolean' ? (
                              feature.pro ? (
                                <svg className="w-5 h-5 text-secondary-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )
                            ) : (
                              <span className="text-gray-700 font-medium">{feature.pro}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-center">
                            {typeof feature.enterprise === 'boolean' ? (
                              feature.enterprise ? (
                                <svg className="w-5 h-5 text-secondary-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )
                            ) : (
                              <span className="text-gray-700">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
      
      {/* CTA */}
      <CTA />
    </main>
  );
}


