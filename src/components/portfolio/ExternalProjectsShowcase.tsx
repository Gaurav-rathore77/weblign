'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import clsx from 'clsx';
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineMagnifyingGlass,
  HiOutlineSparkles,
} from 'react-icons/hi2';
import {
  EXTERNAL_CATEGORIES,
  EXTERNAL_SOURCE_NAME,
  EXTERNAL_SOURCE_URL,
  type ExternalCategory,
  type ExternalProject,
} from './externalProjects';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const PAGE_SIZE = 9;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
};

function ProjectCard({ project }: { project: ExternalProject }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg"
    >
      <div className={`relative aspect-[16/10] overflow-hidden bg-zinc-100 ${!project.image ? `bg-gradient-to-br ${project.gradient}` : ''}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-5">
            <p className="text-sm font-semibold text-white/90">{project.domain}</p>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full border border-white/25 bg-white/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-700 shadow-sm backdrop-blur-md">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-semibold leading-snug tracking-tight text-zinc-950 transition-colors group-hover:text-primary sm:text-lg">
          {project.title}
        </h3>
        <p className="mt-1 truncate text-xs text-zinc-500" title={project.domain}>
          {project.domain}
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 line-clamp-2">{project.description}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-zinc-100 pt-4">
          <span className="text-[11px] font-medium text-zinc-500">
            Project by <span className="font-semibold text-zinc-700">{EXTERNAL_SOURCE_NAME}</span>
          </span>
          <Link
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`View ${project.title} live website (opens in a new tab)`}
          >
            View Live Website
            <HiOutlineArrowTopRightOnSquare className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ExternalProjectsShowcase({
  projects,
}: {
  projects: ExternalProject[];
}) {
  const reduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ExternalCategory>('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((project) => {
      const categoryMatch =
        activeCategory === 'All' || project.category === activeCategory;
      if (!categoryMatch) return false;
      if (!q) return true;
      return [project.title, project.domain, project.description, project.category].some(
        (value) => value.toLowerCase().includes(q),
      );
    });
  }, [projects, activeCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageProjects = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const chooseCategory = (category: ExternalCategory) => {
    setActiveCategory(category);
    setPage(1);
  };

  const updateQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const goToPage = (next: number) => {
    setPage(Math.min(Math.max(next, 1), totalPages));
  };

  return (
    <section
      id="external-projects"
      className="relative scroll-mt-24 overflow-hidden border-t border-zinc-200 bg-white py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineSparkles className="h-4 w-4" aria-hidden="true" />
            External project showcase
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Explore More Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            A curated selection of live projects from the wider developer community, shared as
            inspiration and reference. These are{' '}
            <span className="font-medium text-zinc-900">not Weblign client work</span> — each one
            is credited to its original creator and links to the live website.
          </p>
          <Link
            href={EXTERNAL_SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            View original project list by {EXTERNAL_SOURCE_NAME}
            <HiOutlineArrowTopRightOnSquare className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter external projects by category">
            {EXTERNAL_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => chooseCategory(category)}
                  aria-pressed={isActive}
                  className={clsx(
                    'rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200',
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <label className="relative block w-full max-w-xs shrink-0">
            <span className="sr-only">Search external projects</span>
            <HiOutlineMagnifyingGlass
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-full border border-zinc-200 bg-white py-2.5 pl-9 pr-4 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/10"
            />
          </label>
        </div>

        <p className="mt-5 text-center text-sm text-zinc-500" aria-live="polite">
          Showing {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–
          {Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length} projects
        </p>

        {filtered.length === 0 ? (
          <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-dashed border-zinc-300 bg-zinc-50/60 p-10 text-center">
            <h3 className="text-lg font-semibold text-zinc-900">No projects found</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Try a different category or search term.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                updateQuery('');
              }}
              className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <motion.div
            key={`${activeCategory}-${query}-${currentPage}`}
            variants={stagger}
            initial={reduceMotion ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.08 }}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {pageProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        {totalPages > 1 ? (
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
            aria-label="External projects pagination"
          >
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous page"
            >
              <HiOutlineChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => {
              const isCurrent = pageNumber === currentPage;
              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => goToPage(pageNumber)}
                  aria-current={isCurrent ? 'page' : undefined}
                  className={clsx(
                    'inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold transition',
                    isCurrent
                      ? 'bg-primary text-white shadow-sm'
                      : 'border border-zinc-200 bg-white text-zinc-700 hover:border-primary/30 hover:text-primary',
                  )}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next page"
            >
              <HiOutlineChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        ) : null}

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-zinc-500">
          Project names, live URLs and category labels are taken from the public live projects list
          on {EXTERNAL_SOURCE_NAME}. Preview images are illustrative. These projects belong to their
          original creator; Weblign claims no ownership or credit for them.
        </p>
      </div>
    </section>
  );
}
