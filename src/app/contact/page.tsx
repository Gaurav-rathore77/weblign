import type { Metadata } from 'next';
import { ContactHero, ContactForm, ContactCTA } from '@/components/contact-page';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Weblign. Have a project, partnership, or question? Reach out and we\'ll respond within 24 hours.',
  openGraph: {
    title: 'Contact Weblign — Let\'s Build Something Great',
    description:
      'Have a project in mind? Fill out the form and we\'ll get back to you within 24 hours.',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
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
