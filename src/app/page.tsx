import HeroSection from '@/components/HeroSection';
import TestimoniSection from '@/components/TestimoniSection';
import WhyJoinSection from '@/components/WhyJoinSection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WhyJoinSection />
      <TestimoniSection />
    </main>
  );
}