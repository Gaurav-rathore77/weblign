import type { Metadata } from 'next';
import Hero from '@/components/hero/Hero';
import TrustedSection from '@/components/trusted/TrustedSection';
import AboutSection from '@/components/about/AboutSection';
import ServicesSection from '@/components/services/ServicesSection';
import WhyChooseSection from '@/components/why-choose/WhyChooseSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import PricingSection from '@/components/pricing/PricingSection';
import ProcessSection from '@/components/process/ProcessSection';
import ContactSection from '@/components/contact/ContactSection';
import { siteUrl, siteName } from '@/constants';

export const metadata: Metadata = {
  title: {
    default: `${siteName} - Crafting Digital Experiences`,
    template: `%s | ${siteName}`,
  },
  description:
    'We build beautiful, functional, and user-centered digital products that help businesses grow and succeed in the digital landscape.',
  keywords: [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'AI Automation',
    'E-commerce Solutions',
    'Custom Software Development',
    'Digital Agency India',
    'Next.js Development',
    'React Development',
  ],
  authors: [{ name: 'Weblign' }],
  creator: 'Weblign',
  publisher: 'Weblign',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'Weblign - Crafting Digital Experiences',
    description:
      'We build beautiful, functional, and user-centered digital products that help businesses grow and succeed in the digital landscape.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Weblign - Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weblign - Crafting Digital Experiences',
    description:
      'We build beautiful, functional, and user-centered digital products that help businesses grow.',
    creator: '@weblign',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

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
