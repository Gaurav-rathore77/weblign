import type { Metadata } from 'next';
import Hero from '@/components/hero/Hero';
import TrustValueStrip from '@/components/home/TrustValueStrip';
import ProblemSolution from '@/components/home/ProblemSolution';
import HomeServices from '@/components/home/HomeServices';
import DigitalExperiences from '@/components/home/DigitalExperiences';
import EngineeringCapabilities from '@/components/home/EngineeringCapabilities';
import TechnologyEcosystem from '@/components/home/TechnologyEcosystem';
import FeaturedWork from '@/components/home/FeaturedWork';
import IndustriesWeHelp from '@/components/home/IndustriesWeHelp';
import WhyWeblign from '@/components/home/WhyWeblign';
import HomeProcess from '@/components/home/HomeProcess';
import PricingPreview from '@/components/home/PricingPreview';
import HomeFaq from '@/components/home/HomeFaq';
import HomeFinalCta from '@/components/home/HomeFinalCta';
import { getProjects } from '@/lib/site-content';
import { siteUrl, siteName } from '@/constants';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    default: `${siteName} - Digital Products for Growing Businesses`,
    template: `%s | ${siteName}`,
  },
  description:
    'Websites, custom dashboards, CRM systems, mobile applications and business automation — built to help your business grow.',
  keywords: [
    'Web Development',
    'Mobile App Development',
    'Custom Dashboards',
    'CRM Systems',
    'Business Automation',
    'E-commerce Development',
    'Custom Software Development',
    'Digital Agency India',
    'Next.js Development',
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
    title: 'Weblign - Digital Products for Growing Businesses',
    description:
      'Websites, custom dashboards, CRM systems, mobile applications and business automation — built to help your business grow.',
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
    title: 'Weblign - Digital Products for Growing Businesses',
    description:
      'Websites, custom dashboards, CRM systems, mobile applications and business automation — built to help your business grow.',
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

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <TrustValueStrip />
      <ProblemSolution />
      <HomeServices />
      <DigitalExperiences />
      <EngineeringCapabilities />
      <TechnologyEcosystem />
      <FeaturedWork projects={projects} />
      <IndustriesWeHelp />
      <WhyWeblign />
      <HomeProcess />
      <PricingPreview />
      <HomeFaq />
      <HomeFinalCta />
    </>
  );
}
