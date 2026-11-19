import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const ContactHero = () => {
  return (
    <section className="relative min-h-[60dvh] overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white pb-16 pt-20 sm:pb-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute -left-48 -top-48 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-48 -right-48 h-[450px] w-[450px] rounded-full bg-accent/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
            Contact Us
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Let&rsquo;s Build Something{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Great Together
            </span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg ">
            Have a project in mind? Share your requirements and we’ll get back to
            you to discuss scope, approach, and next steps.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href="mailto:info.weblign@gmail.com" className="rounded-full border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-700 hover:border-primary/30 hover:text-primary   ">
              info.weblign@gmail.com
            </a>
            <a href="tel:+919315051726" className="rounded-full border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-700 hover:border-primary/30 hover:text-primary   ">
              +91 9315051726
            </a>
            <a href={getWhatsAppUrlFor('consultation')} target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 font-medium text-emerald-700 hover:bg-emerald-100   ">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
