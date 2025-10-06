import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { CTA } from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <CTA />
    </main>
  );
}
