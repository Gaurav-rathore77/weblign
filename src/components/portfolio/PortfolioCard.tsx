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
  const { title, description, category, gradient, tech, demoUrl, image, imageAlt } = project;
  const [imageError, setImageError] = useState(false);

  const initials = title.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <article className="group relative h-full transition-transform duration-300 hover:-translate-y-2">
      <div className="portfolio-card-frame flex h-full flex-col overflow-hidden rounded-2xl border shadow-lg shadow-zinc-900/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-zinc-900/10">
        {/* Screenshot */}
        <div className="relative aspect-video overflow-hidden bg-zinc-100">
          {image && !imageError ? (
            <>
              <Image
                src={image}
                alt={imageAlt ?? `${title} project screenshot`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-br opacity-60" style={{ background: gradient }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br" style={{ background: gradient }} />
          )}

          <div className="portfolio-overlay-badge absolute left-4 top-4 rounded-full border px-3 py-1 text-[11px] font-medium shadow-sm backdrop-blur-md">
            {category}
          </div>

          <div className="absolute right-4 bottom-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/20 text-2xl font-bold tracking-wide text-white shadow-lg backdrop-blur-md">
            {initials}
          </div>

          <div className="absolute right-4 top-4 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
              className="portfolio-overlay-action flex h-9 w-9 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label={`View ${title} case study`}
            >
              <HiOutlineEye className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-overlay-action flex h-9 w-9 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110"
              aria-label={`Visit ${title} live demo`}
            >
              <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="portfolio-card-content flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="portfolio-card-title text-lg font-semibold leading-snug transition-colors group-hover:text-primary">{title}</h3>
          <p className="portfolio-card-description mt-1.5 text-sm leading-relaxed line-clamp-3">{description}</p>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 ">Technologies used</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="portfolio-tech-tag rounded-lg px-2.5 py-1 text-[11px] font-medium ring-1 transition-all duration-200 group-hover:bg-primary/[0.06] group-hover:text-primary group-hover:ring-primary/15"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="portfolio-card-divider mt-5 flex items-center gap-4 border-t pt-4">
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-300 hover:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View case study
              <HiOutlineArrowLongRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-demo-link ml-auto text-sm underline underline-offset-2 transition-colors hover:text-zinc-700 hover:decoration-zinc-400"
            >
              Live site
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
