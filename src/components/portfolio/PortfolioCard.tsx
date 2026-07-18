'use client';

import { motion } from 'framer-motion';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import type { Project } from './portfolioData';

interface PortfolioCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const PortfolioCard = ({ project, index, onOpenModal }: PortfolioCardProps) => {
  const { title, description, category, gradient, tech, metrics, demoUrl } = project;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="overflow-hidden rounded-3xl border border-zinc-200/60 bg-white shadow-lg shadow-zinc-900/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-zinc-900/10">
        {/* Thumbnail */}
        <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-all duration-700 group-hover:scale-110`}
          />

          {/* Logo */}
          {project.image ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/30 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/40">
                <img
                  src={project.image}
                  alt=""
                  className="h-10 w-10"
                />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/30 text-xl font-bold tracking-wide text-white shadow-lg backdrop-blur-md transition-all duration-500 group-hover:scale-110">
                {initials(title)}
              </div>
            </div>
          )}

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />

          {/* Category badge */}
          <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/60 px-3 py-1 text-[11px] font-medium text-zinc-700 shadow-sm backdrop-blur-md">
            {category}
          </div>

          {/* Metric badge */}
          {metrics && (
            <div className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-zinc-700 shadow-sm backdrop-blur-md">
              {metrics}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-semibold leading-snug text-zinc-900">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{description}</p>

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
              <HiOutlineArrowLongRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
    </motion.div>
  );
};

export default PortfolioCard;
