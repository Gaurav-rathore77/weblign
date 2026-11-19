import Link from 'next/link';
import { HiOutlineArrowLongRight, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 ">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-zinc-50/60 p-8 text-center sm:p-12  ">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
            Not sure which service fits your needs?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 ">
            Tell us about your goals and challenges. We’ll help you choose the
            right approach—website, e-commerce, CRM/dashboard, mobile app,
            automation, or custom software—and outline clear next steps.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get Free Consultation
              <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={getWhatsAppUrlFor('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
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

export default ServicesCTA;
