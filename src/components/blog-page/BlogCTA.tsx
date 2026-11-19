import Link from 'next/link';
import { HiOutlineArrowLongRight, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const BlogCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-white via-zinc-50/70 to-primary/[0.06] p-8 text-center shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] sm:p-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, #2563EB 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          Have a project or idea in mind?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
          If you’re exploring a website, custom system, or digital improvement for your business, we can help you plan the right next step.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contact Weblign
            <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={getWhatsAppUrlFor('consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCTA;
