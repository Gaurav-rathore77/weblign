import type { Metadata } from 'next';
import ServicesHero from '@/components/services-page/ServicesHero';
import ServicesGrid from '@/components/services-page/ServicesGrid';
import ServicesProcess from '@/components/services-page/ServicesProcess';
import ServicesCTA from '@/components/services-page/ServicesCTA';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    "Explore Weblign's full range of digital services — web development, mobile apps, UI/UX design, e-commerce, cloud solutions, and AI automation.",
  keywords: [
    'Web Development Services',
    'Mobile App Development',
    'UI/UX Design Services',
    'AI Automation Services',
    'E-commerce Development',
    'Custom Software Development',
    'Digital Agency Services India',
    'Next.js Development Company',
    'React Native Development',
  ],
  openGraph: {
    title: 'Digital Services by Weblign',
    description:
      'From strategy and design to development and growth — end-to-end digital solutions that drive real results.',
    type: 'website',
    url: `${siteUrl}/services`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Weblign Services' }],
  },
  alternates: { canonical: `${siteUrl}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </>
  );
}
