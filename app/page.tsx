import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { SocialProof } from '@/components/SocialProof';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <SocialProof />
      <CTA />
    </main>
  );
}
