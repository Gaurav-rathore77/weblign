'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="relative isolate overflow-hidden bg-white ">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_-10%,rgba(37,99,235,0.16),transparent_60%),radial-gradient(ellipse_40%_35%_at_80%_80%,rgba(59,130,246,0.10),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-8rem)] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-200/70 bg-red-50 text-red-600 shadow-sm   ">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-8 w-8"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9.5" />
            <path d="M12 7.5v5.2M12 16.2h.01" strokeLinecap="round" />
          </svg>
        </div>

        <p className="mt-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary   ">
          Unexpected error
        </p>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl ">
          Something didn&apos;t load as expected
        </h1>

        <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-600 ">
          Please try again. If the issue continues, return to the homepage or reach out to us and we&apos;ll help you get back on track.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-18px_rgba(37,99,235,0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                clipRule="evenodd"
              />
            </svg>
            Try again
          </button>

          <Link
            href="/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-zinc-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary      sm:w-auto"
          >
            Go home
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-7 py-3.5 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    sm:w-auto"
          >
            Contact us
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs text-zinc-500 ">Error ID: {error.digest}</p>
        )}
      </div>
    </div>
  );
}
