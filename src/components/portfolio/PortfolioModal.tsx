'use client';

import Image from 'next/image';
import { useEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark, HiCheck, HiOutlineArrowLongRight } from 'react-icons/hi2';
import type { Project } from './portfolioData';

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

/* Portals require a real DOM. `useSyncExternalStore` reports "not mounted" on
   the server and "mounted" on the client without a cascading setState render. */
const emptySubscribe = () => () => {};
const useIsMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

const PortfolioModal = ({ project, onClose }: PortfolioModalProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const mounted = useIsMounted();

  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    // Lock the page behind the modal. Remembering scrollY and restoring it on
    // close stops the page from jumping back to the top when the scrollbar
    // is removed.
    const { body, documentElement } = document;
    const scrollBarWidth = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    const prevTop = window.scrollY;
    body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;
    window.scrollTo(0, prevTop);

    // Always open the modal at the top of its own content.
    panelRef.current?.scrollTo({ top: 0 });

    return () => {
      document.removeEventListener('keydown', handleKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
      window.scrollTo(0, prevTop);
    };
  }, [project, onClose]);

  if (!project || !mounted) return null;

  const shortTitle = project.title.split('—')[0].trim();

  /* Rendered into <body> on purpose. Page sections use `content-visibility:
     auto`, which makes them a containing block for fixed descendants — a modal
     rendered in place would anchor to the section, not the viewport, and appear
     offset or scrolled out of view. The portal escapes that entirely. */
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-0 sm:p-4 lg:p-8"
      role="presentation"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default bg-black/55 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close case study"
        tabIndex={-1}
      />

      {/* Panel — its own scroll container so the page behind never moves. */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
        className="portfolio-modal-panel relative z-10 max-h-full w-full max-w-3xl overflow-y-auto overscroll-contain rounded-t-2xl shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
      >
        {/* Sticky close button stays reachable while reading. */}
        <button
          type="button"
          onClick={onClose}
          className="portfolio-modal-close sticky top-3 right-3 z-30 ml-auto flex h-9 w-9 items-center justify-center rounded-full shadow-xs backdrop-blur-md transition-colors hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label="Close case study"
        >
          <HiXMark className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Hero */}
        <div
          className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br sm:aspect-[16/8] ${project.gradient}`}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

          {/* Title sits on the image so the panel starts with context. */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <span className="portfolio-modal-chip inline-block rounded-full px-3 py-1 text-[11px] font-medium shadow-xs backdrop-blur-md">
              {project.category}
            </span>
            <h2 className="mt-3 text-xl font-bold leading-tight text-white drop-shadow sm:text-2xl lg:text-3xl">
              {shortTitle}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-7">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.overview}
          </p>

          {/* Key facts strip */}
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-white/5">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                Timeline
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">
                {project.timeline}
              </dd>
            </div>
            {project.metrics && (
              <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-white/5">
                <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                  Scale
                </dt>
                <dd className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">
                  {project.metrics}
                </dd>
              </div>
            )}
            <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-3 dark:border-zinc-800 dark:bg-white/5">
              <dt className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                Stack
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-900 dark:text-white">
                {project.technologies.length} tools
              </dd>
            </div>
          </dl>

          {/* Problem / Solution */}
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-red-100 bg-red-50/40 p-4 dark:border-red-500/20 dark:bg-red-500/5">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
                The challenge
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.problem}
              </p>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 dark:border-emerald-500/20 dark:bg-emerald-500/5">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                The solution
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <div className="mt-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Technologies
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary/[0.06] px-2 py-0.5 text-[11px] font-medium text-primary ring-1 ring-inset ring-primary/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Results */}
          {project.results.length > 0 && (
            <div className="mt-5">
              <h3 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Outcomes
              </h3>
              <ul className="mt-2 grid gap-2">
                {project.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/15">
                      <HiCheck className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                    </span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Testimonial */}
          <figure className="mt-5 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-white/5">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mb-1.5 h-5 w-5 text-primary/25"
              aria-hidden="true"
            >
              <path d="M11.3 3.7a1 1 0 011.4 0l6.4 6.4a1 1 0 010 1.4l-6.4 6.4a1 1 0 01-1.4-1.4L16.6 11 11.3 5.7a1 1 0 010-1.4z" />
            </svg>
            <blockquote className="text-sm leading-relaxed text-zinc-600 italic dark:text-zinc-300">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                {project.testimonial.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </span>
              <span className="min-w-0 text-sm">
                <span className="block font-semibold text-zinc-900 dark:text-white">
                  {project.testimonial.name}
                </span>
                <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                  {project.testimonial.role}
                </span>
              </span>
            </figcaption>
          </figure>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Visit Live Site
              <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:border-zinc-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default PortfolioModal;