import type { Metadata } from 'next';
import { AboutHero, AboutStory, AboutTeam, AboutCTA } from '@/components/about-page';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Weblign — our story, mission, values, and the team behind the digital products that help businesses grow.',
  openGraph: {
    title: 'About Weblign - Our Story, Team & Values',
    description:
      'Founded in 2020, Weblign is a full-service digital agency building products that users love and businesses rely on.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutCTA />
    </>
  );
}
