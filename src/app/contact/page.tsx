import type { Metadata } from 'next';
import ContactHero from '@/components/contact-page/ContactHero';
import ContactForm from '@/components/contact-page/ContactForm';
import ContactCTA from '@/components/contact-page/ContactCTA';
import { getSiteSettings } from '@/lib/site-content';
import { siteUrl } from '@/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Weblign. Have a project, partnership, or question? Reach out and we'll respond within 24 hours.",
  keywords: [
    'Contact Weblign',
    'Web Development Inquiry',
    'Project Consultation',
    'Digital Agency Contact',
    'Hire Web Developers',
    'Hire Mobile App Developers',
    'UI/UX Design Services Quote',
    'Custom Software Project',
  ],
  openGraph: {
    title: "Contact Weblign — Let's Build Something Great",
    description:
      'Have a project in mind? Fill out the form and we\'ll get back to you within 24 hours.',
    type: 'website',
    url: `${siteUrl}/contact`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact Weblign' }],
  },
  alternates: { canonical: `${siteUrl}/contact` },
};

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <ContactHero />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm contact={settings.contact} />
        </div>
      </section>
      <section className="bg-zinc-50/50 py-20 sm:py-28 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactCTA />
        </div>
      </section>
    </>
  );
}
