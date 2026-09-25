import type { Metadata } from 'next';
import AboutHero from '@/components/about-page/AboutHero';
import AboutStory from '@/components/about-page/AboutStory';
import AboutTeam from '@/components/about-page/AboutTeam';
import AboutCTA from '@/components/about-page/AboutCTA';
import AboutPageJsonLd from '@/components/about-page/AboutPageJsonLd';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Weblign — our story, mission, values, and the team behind the digital products that help businesses grow.',
  keywords: [
    'About Weblign',
    'Digital Agency Team',
    'Web Development Company India',
    'Our Story',
    'Company Values',
    'Tech Team',
  ],
  openGraph: {
    title: 'About Weblign - Our Story, Team & Values',
    description:
      'Founded in 2026, Weblign is a full-service digital agency building products that users love and businesses rely on.',
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
