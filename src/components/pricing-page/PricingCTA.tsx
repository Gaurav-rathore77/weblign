import Link from 'next/link';
import { HiOutlineArrowLongRight, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const PricingCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 text-center shadow-sm sm:p-12  ">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative">
        <h2 className="text-2xl font-semibold text-zinc-950 sm:text-3xl ">
          Need help choosing the right package?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 ">
          Share your goals, required features, and timeline. We’ll recommend the
          best-fit package or prepare a custom quote with transparent scope and pricing.
        </p>
        <p className="mt-3 text-sm font-medium text-primary">
          Not sure which package fits your business? Let&apos;s discuss your requirements.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact?plan=Pricing%20Consultation"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Discuss Your Project
            <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={getWhatsAppUrlFor('pricing')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
          >
            <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCTA;
