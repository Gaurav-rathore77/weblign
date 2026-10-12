import Link from 'next/link';
import FaqAccordion from './FaqAccordion';
import { faqGroups } from './faqData';

const FaqPage = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-b from-white to-zinc-50 pt-20 pb-16 dark:border-zinc-300 dark:from-zinc-50 dark:to-zinc-100 sm:pt-28 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/[0.08] text-xs">
              ?
            </span>
            Frequently asked questions
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-800">
            Answers before you ask
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-600">
            Timelines, costs, what happens after launch, and the stack we build on.
            If something is not covered here, ask us directly — we reply within one
            working day.
          </p>
        </div>
      </section>

      {/* ── Group navigation ── */}
      <div className="sticky top-[72px] z-30 border-b border-zinc-200 bg-white/90 backdrop-blur-md dark:border-zinc-300 dark:bg-zinc-50/90">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="FAQ sections"
            className="flex gap-2 overflow-x-auto py-3 text-sm font-medium"
          >
            {faqGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="shrink-0 rounded-full border border-zinc-200 px-4 py-1.5 text-zinc-600 transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-zinc-300 dark:text-zinc-600 dark:hover:border-primary/40 dark:hover:text-zinc-500"
              >
                {group.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Groups ── */}
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-16">
          {faqGroups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-32">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-800">
                {group.label}
              </h2>
              <p className="mt-2 text-[15px] text-zinc-600 dark:text-zinc-600">
                {group.blurb}
              </p>
              <div className="mt-6">
                <FaqAccordion items={group.items} idPrefix={`faq-${group.id}`} />
              </div>
            </section>
          ))}
        </div>

        {/* ── Still stuck? ── */}
        <div className="mt-16 rounded-3xl border border-zinc-200 bg-gradient-to-br from-primary/[0.04] to-accent/[0.04] p-8 text-center dark:border-zinc-300 sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-800">
            Still have a question?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-600">
            Tell us what you are trying to build. We will reply within one working
            day with a straight answer — and an honest one if we are not the right
            fit.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="btn-shine group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="relative z-10">Ask your question</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-600 dark:hover:border-zinc-600"
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqPage;