import { Button } from './Button';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaLink: string;
}

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <div 
      className={`relative rounded-2xl p-8 ${
        tier.highlighted 
          ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-105 border-4 border-primary-400' 
          : 'bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300'
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
          {tier.name}
        </h3>
        <p className={tier.highlighted ? 'text-primary-100' : 'text-gray-600'}>
          {tier.description}
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className={`text-5xl font-bold ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
            {tier.price}
          </span>
          <span className={`ml-2 ${tier.highlighted ? 'text-primary-200' : 'text-gray-600'}`}>
            {tier.period}
          </span>
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {tier.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg 
              className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                tier.highlighted ? 'text-secondary-300' : 'text-secondary-500'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className={tier.highlighted ? 'text-primary-100' : 'text-gray-700'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        href={tier.ctaLink}
        variant={tier.highlighted ? 'secondary' : 'primary'}
        size="lg"
        className="w-full"
      >
        {tier.cta}
      </Button>
    </div>
  );
}


