import HeroSection from '@/components/HeroSection';
import TestimoniSection from '@/components/TestimoniSection';
import WhyJoinSection from '@/components/WhyJoinSection';
import ContactSection from '@/components/ContactSection';

import MenuSection from '@/components/MenuSection';
import ROISection from '@/components/ROISection';
import PricingSection from '@/components/PricingSection';
import ShippingSection from '@/components/ShippingSection';
import ClosingSection from '@/components/ClosingSection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WhyJoinSection />
      <TestimoniSection />
      <ContactSection />
      <MenuSection />
      <ROISection />
      <PricingSection />
      <ShippingSection />
      <ClosingSection />  
    </main>
  );
}