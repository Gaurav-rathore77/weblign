import type { ReactNode } from 'react';
import Link from 'next/link';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi2';

export interface LegalSection {
  id: string;
  heading: string;
  body: ReactNode;
}

export interface LegalPageProps {
  badge: string;
  title: string;
  highlight: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}

/**
 * Shared shell for the legal pages (privacy, terms, cookies).
 * Sticky section rail on desktop, collapsed accordion-style summary on mobile.
 */
const LegalPage = ({
  badge,
  title,
  highlight,
  intro,
  updated,
  sections,
}: LegalPageProps) => {
  return (
    <div className="bg-white dark:bg-[#09090b]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-zinc-100 bg-gradient-to-b from-white via-zinc-50/40 to-white pb-14 pt-20 sm:pb-16 sm:pt-24 dark:border-zinc-800 dark:from-[#09090b] dark:via-zinc-900/40 dark:to-[#09090b]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="animate-glow-pulse absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/[0.05] blur-3xl" />
          <div className="animate-glow-pulse absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/[0.05] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-primary dark:text-zinc-400 dark:hover:text-primary"
          >
            <HiOutlineChevronDoubleLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </Link>

          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary dark:border-primary/25 dark:bg-primary/[0.08]">
              {badge}
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-white">
              {title}{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {highlight}
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg dark:text-zinc-400">
              {intro}
            </p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-100/60 dark:text-zinc-400">
              Last updated
              <time dateTime={updated} className="text-zinc-900 dark:text-white">
                {updated}
              </time>
            </p>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="gap-10 lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            {/* Section rail — desktop only, collapses on mobile */}
            <nav aria-label="On this page" className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  On this page
                </p>
                <ul className="mt-4 space-y-1 border-l border-zinc-200 dark:border-zinc-800">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-zinc-500 transition-colors hover:border-primary hover:text-primary dark:text-zinc-400 dark:hover:text-primary"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="min-w-0">
              {/* Mobile section summary */}
              <details className="mb-8 rounded-xl border border-zinc-200 p-4 lg:hidden dark:border-zinc-800">
                <summary className="cursor-pointer text-sm font-semibold text-zinc-900 dark:text-white">
                  Jump to a section ({sections.length})
                </summary>
                <ul className="mt-3 space-y-1.5">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <div className="flex items-baseline gap-3">
                      <span className="text-xs font-bold tabular-nums text-primary/60">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-white">
                        {section.heading}
                      </h2>
                    </div>
                    <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {section.body}
                    </div>
                  </section>
                ))}
              </div>

              {/* Contact block */}
              <div className="mt-16 rounded-2xl border border-primary/15 bg-primary/[0.03] p-6 sm:p-8 dark:border-primary/25 dark:bg-primary/[0.06]">
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Questions about this page?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  If anything here is unclear or you need a copy of our data,
                  get in touch and we will respond within 2 business days.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Contact Weblign
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;