import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import { HiOutlinePhone } from 'react-icons/hi2';
import type { SiteSettings } from '@/lib/site-content';

const ContactSection = ({ contact }: { contact?: SiteSettings['contact'] }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Section Header ── */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
              <HiOutlinePhone className="h-4 w-4" aria-hidden="true" />
              Contact Us
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Let&rsquo;s Build Something{' '}
              <span className="text-zinc-500">Amazing Together</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Have a project in mind? We&rsquo;d love to hear about it. Reach
              out for a free consultation, custom quote, or just to explore what
              we can build together.
            </p>
          </div>

          {/* ── Contact Info + Form ── */}
          <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <ContactInfo contact={contact} />
            </div>

            {/* Right: Contact Form */}
            <div className="relative lg:col-span-3">
              {/* Decorative elements behind the form */}
              <div className="pointer-events-none absolute -inset-4 overflow-hidden" aria-hidden="true">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/[0.03] blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent/[0.03] blur-2xl" />
              </div>

              <ContactForm />
            </div>
          </div>

          {/* ── FAQ ── */}
          <FAQ />

          {/* ── Final CTA ── */}
          <FinalCTA />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
