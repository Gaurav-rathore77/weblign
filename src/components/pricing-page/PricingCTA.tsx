import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';

const PricingCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/[0.04] to-accent/10 p-8 text-center shadow-lg sm:p-12 dark:from-primary/20 dark:via-primary/10 dark:to-accent/20">
      {/* Decorative glows + dot pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-glow-pulse absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="animate-glow-pulse absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Not Sure Which Plan Fits?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
          Book a free 30-minute consultation. We&rsquo;ll discuss your project,
          recommend the right plan, and answer any questions you have.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact?source=pricing"
            className="btn-shine group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="relative z-10">Book a Free Call</span>
            <HiOutlineArrowLongRight className="relative z-10 h-4 w-4" aria-hidden="true" />
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
              aria-hidden="true"
            />
          </Link>
          <a
            href="mailto:info.weblign@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Email Us Instead
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCTA;
