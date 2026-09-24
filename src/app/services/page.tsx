import type { Metadata } from 'next';
import ServicesHero from '@/components/services-page/ServicesHero';
import ServicesGrid from '@/components/services-page/ServicesGrid';
import ServicesProcess from '@/components/services-page/ServicesProcess';
import ServicesCTA from '@/components/services-page/ServicesCTA';
import { serviceDetails } from '@/components/services-page/servicesData';
import { getServices } from '@/lib/site-content';
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

export const dynamic = 'force-dynamic';

export default async function ServicesPage() {
  const services = await getServices();
  const mergedServiceDetails = serviceDetails.map((detail) => {
    const editable = services.find((service) => service.id === detail.id);
    return editable
      ? {
          ...detail,
          title: editable.title,
          description: editable.description,
          features: editable.features,
        }
      : detail;
  });

  return (
    <>
      <ServicesHero />
      <ServicesGrid serviceDetails={mergedServiceDetails} />
      <ServicesProcess />
      <ServicesCTA />
    </>
  );
}
