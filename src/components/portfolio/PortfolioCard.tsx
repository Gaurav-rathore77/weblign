'use client';

import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineArrowLongRight, HiOutlineEye } from 'react-icons/hi2';
import type { Project } from './portfolioData';

interface PortfolioCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

const PortfolioCard = ({ project, onOpenModal }: PortfolioCardProps) => {
  const { title, description, category, gradient, tech, metrics, demoUrl, image, imageAlt } = project;
  const [imageError, setImageError] = useState(false);

  const initials = title.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="group relative transition-transform duration-300 hover:-translate-y-2">
      <div className="overflow-hidden rounded-2xl border border-white/20 shadow-lg shadow-zinc-900/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-zinc-900/10">
        {/* Thumbnail - Full hero image with gradient overlay */}
        <div className="relative aspect-video overflow-hidden bg-zinc-100">
          {image && !imageError ? (
            <>
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
              {/* Light gradient overlay - shows image but keeps text readable */}
              <div className="absolute inset-0 bg-gradient-to-br" style={{ background: gradient }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br" style={{ background: gradient }} />
          )}

          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
            aria-hidden="true"
          />

          {/* Category badge */}
          <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1 text-[11px] font-medium text-zinc-900 shadow-sm backdrop-blur-md">
            {category}
          </div>

          {/* Metric badge */}
          {metrics && (
            <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-zinc-900 shadow-sm backdrop-blur-md">
              {metrics}
            </div>
          )}

          {/* Project initials - always visible on gradient */}
          <div className="absolute right-4 bottom-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl font-bold tracking-wide text-white shadow-lg backdrop-blur-md border border-white/30">
            {initials}
          </div>

          {/* Hover action buttons */}
          <div className="absolute right-4 top-4 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`View ${title} case study`}
            >
              <HiOutlineEye className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white"
              aria-label={`Visit ${title} live demo`}
            >
              <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 bg-white">
          <h3 className="text-lg font-semibold leading-snug text-zinc-900 transition-colors group-hover:text-primary">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 line-clamp-2">{description}</p>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-lg bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-500 ring-1 ring-zinc-100 transition-all duration-200 group-hover:bg-primary/[0.06] group-hover:text-primary group-hover:ring-primary/15"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-4 border-t border-zinc-100 pt-4">
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 hover:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View Case Study
              <HiOutlineArrowLongRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm text-zinc-400 underline decoration-zinc-200 underline-offset-2 transition-colors hover:text-zinc-700 hover:decoration-zinc-400"
            >
              Live Demo
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
