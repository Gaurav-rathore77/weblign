import { Hero } from '@/components/hero';
import { TrustedSection } from '@/components/trusted';
import { AboutSection } from '@/components/about';
import { ServicesSection } from '@/components/services';
import { WhyChooseSection } from '@/components/why-choose';
import { PortfolioSection } from '@/components/portfolio';
import { PricingSection } from '@/components/pricing';
import { ProcessSection } from '@/components/process';
import { ContactSection } from '@/components/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}
