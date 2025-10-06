import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <HowItWorks />
      <FAQ />
      <CTA />
    </main>
  );
}
