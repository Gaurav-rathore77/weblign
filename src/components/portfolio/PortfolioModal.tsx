'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiXMark, HiCheck } from 'react-icons/hi2';
import type { Project } from './portfolioData';

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 },
  },
};

const PortfolioModal = ({ project, onClose }: PortfolioModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label={`Case study: ${project.title}`}
            className="relative z-10 mt-8 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:mt-12"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-zinc-600 shadow-xs backdrop-blur-sm transition-colors hover:bg-white hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Close case study"
            >
              <HiXMark className="h-4 w-4" />
            </button>

            {/* Hero image */}
            <div className={`relative flex aspect-[21/9] items-end bg-gradient-to-br ${project.gradient}`}>
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="relative flex items-center gap-3 p-6 sm:p-8">
                {project.image && (
                  <img src={project.image} alt="" className="h-10 w-10 rounded-lg shadow-lg" />
                )}
                <span className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-zinc-700 shadow-xs backdrop-blur-md dark:bg-zinc-800/70 dark:text-zinc-300">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Title + overview */}
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{project.overview}</p>

              {/* Problem & Solution */}
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-red-500">Problem</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{project.problem}</p>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-emerald-600">Solution</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{project.solution}</p>
                </div>
              </div>

              {/* Details grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">Timeline</span>
                  <p className="mt-1 text-sm font-medium text-zinc-900">{project.timeline}</p>
                </div>
                <div className="sm:col-span-3">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-400">Technologies</span>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-primary/[0.04] px-2 py-0.5 text-[11px] font-medium text-primary ring-1 ring-primary/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Results</h3>
                <ul className="mt-2 space-y-2">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-zinc-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50"><HiCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" /></span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial */}
              <div className="mt-6 rounded-xl border border-zinc-100 bg-zinc-50/30 p-5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="mb-2 h-5 w-5 text-primary/20" aria-hidden="true">
                  <path d="M11.3 3.7a1 1 0 011.4 0l6.4 6.4a1 1 0 010 1.4l-6.4 6.4a1 1 0 01-1.4-1.4L16.6 11 11.3 5.7a1 1 0 010-1.4z" />
                </svg>
                <blockquote className="text-sm leading-relaxed text-zinc-600 italic">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                    {project.testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">{project.testimonial.name}</div>
                    <div className="text-xs text-zinc-400">{project.testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.demoUrl}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  View Live Project
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-6 py-2.5 text-sm font-semibold text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;
