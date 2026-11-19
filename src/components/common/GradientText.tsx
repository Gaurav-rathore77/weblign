import clsx from 'clsx';
import type { ElementType, ReactNode } from 'react';

interface GradientTextProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'accent' | 'brand' | 'subtle';
}

const variants: Record<NonNullable<GradientTextProps['variant']>, string> = {
  primary: 'from-[var(--color-primary-light)] via-[var(--color-primary)] to-[var(--color-accent)]',
  accent: 'from-[var(--color-accent-light)] to-[var(--color-accent-dark)]',
  brand: 'from-[var(--color-primary)] via-[#3B82F6] to-[var(--color-accent)]',
  subtle: 'from-zinc-900 via-zinc-700 to-zinc-500   ',
};

const GradientText = ({ as: Tag = 'span', children, className, variant = 'brand' }: GradientTextProps) => {
  return (
    <Tag
      className={clsx(
        'bg-gradient-to-r bg-clip-text text-transparent',
        variants[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default GradientText;
