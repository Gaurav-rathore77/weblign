'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import clsx from 'clsx';
import type { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
  category?: string;
  meta?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  href,
  image,
  imageAlt,
  tags = [],
  category,
  meta,
  className,
  onClick,
}: ProjectCardProps) => {
  const reduceMotion = useReducedMotion();
  const content = (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/90 shadow-sm transition-shadow hover:shadow-[var(--shadow-glow-primary)] ',
        className,
      )}
      onClick={onClick}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-background-muted)]">
        {image ? (
          <Image
            src={image}
            alt={imageAlt || `${title} preview`}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-[#0B1020] to-accent/20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/75 via-[#070A12]/10 to-transparent" />
        {category && (
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            {category}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-xl">
            {title}
          </h3>
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors group-hover:border-primary/40 group-hover:text-primary">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{description}</p>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-background-muted)]/60 px-2.5 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {meta && <div className="mt-4 text-sm text-[var(--color-text-muted)]">{meta}</div>}
      </div>
    </motion.article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus:outline-none focus-visible:rounded-2xl">
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" className="block h-full w-full text-left" onClick={onClick}>
        {content}
      </button>
    );
  }

  return content;
};

export default ProjectCard;
