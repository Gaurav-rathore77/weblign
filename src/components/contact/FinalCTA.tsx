import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <div className="card-glow group relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.04] via-white to-accent/[0.04] p-8 shadow-lg shadow-zinc-900/5 sm:p-12 dark:border-primary/15 dark:from-primary/[0.06] dark:via-zinc-100/60 dark:to-accent/[0.06] dark:shadow-black/20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-glow-pulse absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/[0.08] blur-3xl dark:bg-primary/[0.14]" />
        <div className="animate-glow-pulse absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/[0.08] blur-3xl dark:bg-accent/[0.14]" style={{ animationDelay: '1.5s' }} />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-6 text-center sm:gap-8">
        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
          Ready To Transform Your Business?
        </h3>

        <p className="max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-300">
          Let&rsquo;s build fast, scalable and beautiful digital products
          together.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="btn-shine group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true" />
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
          </Link>

          <Link
            href="/contact"
            className="group/btn2 relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-primary/40 dark:hover:bg-white/15 dark:hover:text-white"
          >
            <span className="relative z-10">Schedule a Free Call</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent transition-transform duration-700 group-hover/btn2:translate-x-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
