import HeroSection from '@/components/HeroSection';
import TestimoniSection from '@/components/TestimoniSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WhyJoinSection />
      <TestimoniSection />
      <ContactSection />
    </main>
  );
}