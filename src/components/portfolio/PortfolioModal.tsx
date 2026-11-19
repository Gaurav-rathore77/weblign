'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { HiXMark, HiCheck, HiOutlineArrowLongRight, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';
import type { Project } from './portfolioData';

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

const emptySubscribe = () => () => {};
const useIsMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

function getKeyFeatures(project: Project): string[] {
  if (project.features?.length) return project.features;
  const fallback = [
    `Project focus: ${project.description}`,
    `Challenge addressed: ${project.problem}`,
    `Solution delivered: ${project.solution}`,
  ];
  return fallback;
}

const PortfolioModal = ({ project, onClose }: PortfolioModalProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const mounted = useIsMounted();

  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    const { body, documentElement } = document;
    const scrollBarWidth = window.innerWidth - documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    const prevTop = window.scrollY;
    body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`;
    window.scrollTo(0, prevTop);
    panelRef.current?.scrollTo({ top: 0 });

    return () => {
      document.removeEventListener('keydown', handleKey);
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
      window.scrollTo(0, prevTop);
    };
  }, [project, onClose]);

  if (!project || !mounted) return null;
  const keyFeatures = getKeyFeatures(project);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-0 sm:p-4 lg:p-8"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default bg-black/55 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close case study"
        tabIndex={-1}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`Case study: ${project.title}`}
        className="portfolio-modal-panel relative z-10 max-h-full w-full max-w-4xl overflow-y-auto overscroll-contain rounded-t-2xl bg-white shadow-2xl sm:max-h-[92vh] sm:rounded-2xl "
      >
        <button
          type="button"
          onClick={onClose}
          className="portfolio-modal-close sticky top-3 right-3 z-30 ml-auto mr-3 mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-md transition-colors hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary "
          aria-label="Close case study"
        >
          <HiXMark className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Screenshot */}
        <div className={`relative -mt-12 aspect-[16/9] overflow-hidden bg-gradient-to-br sm:aspect-[16/8] ${project.gradient}`}>
          {project.image && (
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-top"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
              {project.category}
            </span>
            <h2 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
              {project.title}
            </h2>
            <p className="mt-2 max-w-3xl text-sm text-white/85">{project.description}</p>
          </div>
        </div>

        {/* Case study template */}
        <div className="space-y-6 p-5 sm:p-7">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Project overview</p>
            <p className="mt-2 text-sm leading-relaxed text-zinc-700 ">{project.overview}</p>
          </section>

          <div className="grid gap-4 sm:grid-cols-2">
            <section className="rounded-xl border border-blue-200 bg-blue-50/50 p-4  ">
              <h3 className="text-sm font-semibold text-zinc-950 ">Challenge</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 ">{project.problem}</p>
            </section>
            <section className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4  ">
              <h3 className="text-sm font-semibold text-zinc-950 ">Solution</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 ">{project.solution}</p>
            </section>
          </div>

          <section>
            <h3 className="text-sm font-semibold text-zinc-950 ">Key features</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-700 ">
                  <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-zinc-950 ">Technology</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {(project.technologies?.length ? project.technologies : project.tech).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700   "
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-3 border-t border-zinc-200 pt-5 ">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Visit live site
              <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              href={`/contact?plan=${encodeURIComponent(project.title)}`}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary   "
            >
              Discuss Your Project
            </Link>
            <a
              href={getWhatsAppUrlFor('consultation', project.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary    "
            >
              <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary   "
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