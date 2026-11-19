import Link from 'next/link';
import { HiOutlineRocketLaunch, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white pb-16 pt-20 sm:pb-20 sm:pt-24   ">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute -left-48 -top-48 h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full bg-accent/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineRocketLaunch className="h-4 w-4" aria-hidden="true" />
            Services
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl ">
            Services designed around{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              your business goals
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg ">
            From business websites and e-commerce to CRM dashboards, mobile apps,
            automation, and custom software—each service is tailored to solve
            specific problems and deliver practical outcomes.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get Free Consultation
            </Link>
            <a
              href={getWhatsAppUrlFor('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
            >
              <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
