import clsx from 'clsx';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2' | 'h3';
  actions?: ReactNode;
}

const SectionHeading = ({
  title,
  subtitle,
  description,
  eyebrow,
  className,
  align = 'center',
  as: Tag = 'h2',
  actions,
}: SectionHeadingProps) => {
  const body = description ?? subtitle;
  const centered = align === 'center';

  return (
    <div
      className={clsx(
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary  ">
          {eyebrow}
        </span>
      )}
      <div className={clsx('flex w-full flex-col gap-4', centered ? 'items-center' : 'md:flex-row md:items-end md:justify-between')}>
        <div className={clsx('max-w-3xl', centered && 'mx-auto')}>
          <Tag className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            {title}
          </Tag>
          {body && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              {body}
            </p>
          )}
        </div>
        {actions && <div className={clsx('shrink-0', centered && 'mt-1')}>{actions}</div>}
      </div>
    </div>
  );
};

export default SectionHeading;
