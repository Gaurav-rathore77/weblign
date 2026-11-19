import clsx from 'clsx';

export interface TechMarqueeItem {
  label: string;
}

interface TechMarqueeProps {
  items?: Array<string | TechMarqueeItem>;
  label?: string;
  className?: string;
  speedSeconds?: number;
  pauseOnHover?: boolean;
}

const defaultTechStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'Laravel',
  'Tailwind CSS',
  'REST API',
  'SEO',
  'Vercel',
];

const TechMarquee = ({
  items = defaultTechStack,
  label = 'We build with modern technology',
  className,
  speedSeconds = 30,
  pauseOnHover = true,
}: TechMarqueeProps) => {
  const normalized = items.map((item) => (typeof item === 'string' ? item : item.label));
  const loop = [...normalized, ...normalized];

  return (
    <div
      className={clsx(
        'relative border-y border-[var(--color-border)] bg-[var(--color-surface)]/60 py-5 ',
        className,
      )}
    >
      {label && (
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          {label}
        </p>
      )}
      <div className="marquee" aria-hidden="true">
        <div
          className={clsx('marquee-track items-center gap-3 pr-3', pauseOnHover && 'group-hover:[animation-play-state:paused]')}
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-background)]/80 px-4 py-1.5 text-sm font-medium text-[var(--color-text-secondary)] shadow-sm backdrop-blur-sm "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
