import { Metadata } from 'next';
import { PricingCard } from '@/components/PricingCard';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: "Pricing - Cholim List",
  description: "Choose the perfect plan for your community. From free for small shuls to enterprise solutions for large organizations.",
};

const pricingTiers = [
  {
    name: "Basic",
    price: "Free",
    period: "forever",
    description: "Perfect for small communities just getting started",
    features: [
      "Up to 100 names per week",
      "Public submission form",
      "Real-time duplicate detection",
      "Long-term name tracking",
      "Hebrew & English support",
      "Basic export (CSV)",
      "Automated weekly rollover",
      "Email support",
    ],
    cta: "Start Free",
    ctaLink: "https://app.cholimlist.com/signup",
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing communities with advanced needs",
    features: [
      "Unlimited names",
      "Everything in Basic, plus:",
      "Email notifications",
      "Advanced export (CSV, JSON, PDF)",
      "Multiple admin accounts",
      "Role-based access control",
      "Custom form branding",
      "API access",
      "Priority email support",
      "Remove 'Powered by' branding",
    ],
    highlighted: true,
    cta: "Start 14-Day Trial",
    ctaLink: "/demo",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with specific requirements",
    features: [
      "Everything in Pro, plus:",
      "Multi-site support",
      "White-label (custom domain)",
      "PrintNode integration",
      "Webhook integrations",
      "Audit logs",
      "Custom features",
      "Dedicated account manager",
      "Phone support",
      "SLA guarantees",
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
      { name: "Names per week", basic: "100", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Public submission form", basic: true, pro: true, enterprise: true },
      { name: "Duplicate detection", basic: true, pro: true, enterprise: true },
      { name: "Long-term names", basic: true, pro: true, enterprise: true },
      { name: "Hebrew support", basic: true, pro: true, enterprise: true },
      { name: "Weekly rollover", basic: true, pro: true, enterprise: true },
    ],
  },
  {
    category: "Admin & Management",
    features: [
      { name: "Admin accounts", basic: "1", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Role-based access", basic: false, pro: true, enterprise: true },
      { name: "Archive management", basic: true, pro: true, enterprise: true },
      { name: "Audit logs", basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Export & Integration",
    features: [
      { name: "CSV export", basic: true, pro: true, enterprise: true },
      { name: "JSON export", basic: false, pro: true, enterprise: true },
      { name: "PDF export", basic: false, pro: true, enterprise: true },
      { name: "API access", basic: false, pro: true, enterprise: true },
      { name: "Webhooks", basic: false, pro: false, enterprise: true },
      { name: "PrintNode integration", basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Automation & Notifications",
    features: [
      { name: "Email notifications", basic: false, pro: true, enterprise: true },
      { name: "Weekly summaries", basic: false, pro: true, enterprise: true },
      { name: "Custom automations", basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Customization",
    features: [
      { name: "Custom form branding", basic: false, pro: true, enterprise: true },
      { name: "Remove branding", basic: false, pro: true, enterprise: true },
      { name: "Custom domain", basic: false, pro: false, enterprise: true },
      { name: "White-label", basic: false, pro: false, enterprise: true },
      { name: "Multi-site support", basic: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Email support", basic: "Standard", pro: "Priority", enterprise: "Priority" },
      { name: "Phone support", basic: false, pro: false, enterprise: true },
      { name: "Account manager", basic: false, pro: false, enterprise: true },
      { name: "SLA guarantee", basic: false, pro: false, enterprise: "99.9%" },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={index} tier={tier} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              All plans include 14-day free trial • No credit card required for Basic
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
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Basic
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600 bg-primary-50">
                      Pro
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
                        <td colSpan={4} className="px-6 py-3 text-sm font-bold text-gray-900">
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
                          <td className="px-6 py-4 text-sm text-center">
                            {typeof feature.basic === 'boolean' ? (
                              feature.basic ? (
                                <svg className="w-5 h-5 text-secondary-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <span className="text-gray-400">—</span>
                              )
                            ) : (
                              <span className="text-gray-700">{feature.basic}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-center bg-primary-50">
                            {typeof feature.pro === 'boolean' ? (
                              feature.pro ? (
                                <svg className="w-5 h-5 text-secondary-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <span className="text-gray-400">—</span>
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
                                <span className="text-gray-400">—</span>
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


