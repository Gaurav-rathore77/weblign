import type { Metadata } from 'next';
import { ServicesHero, ServicesGrid, ServicesProcess, ServicesCTA } from '@/components/services-page';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore Weblign\'s full range of digital services — web development, mobile apps, UI/UX design, e-commerce, cloud solutions, and AI automation.',
  openGraph: {
    title: 'Digital Services by Weblign',
    description:
      'From strategy and design to development and growth — end-to-end digital solutions that drive real results.',
  },
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
