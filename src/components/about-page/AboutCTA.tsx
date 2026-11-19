import Link from 'next/link';
import { HiOutlineArrowLongRight, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const AboutCTA = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 ">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-zinc-50/60 p-8 text-center sm:p-12  ">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
            Ready to discuss your project?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 ">
            Share your goals and requirements, and we’ll help you understand the
            right approach, scope, and next steps—clearly and transparently.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Discuss Your Project
              <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={getWhatsAppUrlFor('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-7 py-3 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
            >
              <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-7 py-3 text-sm font-semibold text-zinc-800 transition-all hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
            >
              View our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
