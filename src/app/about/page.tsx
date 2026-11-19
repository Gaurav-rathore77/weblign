import type { Metadata } from 'next';
import AboutHero from '@/components/about-page/AboutHero';
import AboutStory from '@/components/about-page/AboutStory';
import AboutTeam from '@/components/about-page/AboutTeam';
import AboutCTA from '@/components/about-page/AboutCTA';
import AboutPageJsonLd from '@/components/about-page/AboutPageJsonLd';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'About Weblign',
  description:
    'Learn what Weblign does, the types of businesses we help, our development approach, and how we deliver practical digital solutions with transparency.',
  keywords: [
    'About Weblign',
    'Web Development Company Noida',
    'Custom Software Development',
    'Business Website Development',
    'How We Work',
  ],
  openGraph: {
    title: 'About Weblign — Practical Digital Solutions for Businesses',
    description:
      'What we do, who we help, our development approach, and a transparent process for building websites, apps, and custom software.',
    type: 'website',
    url: `${siteUrl}/about`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'About Weblign' }],
  },
  alternates: { canonical: `${siteUrl}/about` },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutCTA />
      <AboutPageJsonLd />
    </>
  );
}
