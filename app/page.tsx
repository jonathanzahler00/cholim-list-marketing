import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyItWorks } from '@/components/WhyItWorks';
import { Credibility } from '@/components/Credibility';
import { SocialProof } from '@/components/SocialProof';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <WhyItWorks />
      <Credibility />
      <SocialProof />
      <CTA />
    </main>
  );
}
