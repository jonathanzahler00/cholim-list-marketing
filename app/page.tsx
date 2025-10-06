import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { SocialProof } from '@/components/SocialProof';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <CTA />
    </main>
  );
}
