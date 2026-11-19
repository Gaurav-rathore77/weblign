import clsx from 'clsx';
import type { ReactNode } from 'react';

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: string;
  variant?: 'default' | 'dark' | 'glass';
}

const BentoCard = ({ children, className, span, variant = 'default' }: BentoCardProps) => {
  const variants = {
    default:
      'border border-[var(--color-border)] bg-[var(--color-surface)]/90 ',
    dark:
      'border border-white/10 bg-[#0B1020] text-white ',
    glass:
      'border border-[var(--color-border-light)] bg-white/60 backdrop-blur-xl ',
  } as const;

  return (
    <div
      className={clsx(
        'group relative overflow-hidden rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-primary)] sm:p-7',
        variants[variant],
        span,
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at 20% 0%, rgba(37,99,235,0.12), transparent 40%), radial-gradient(500px circle at 100% 100%, rgba(59,130,246,0.08), transparent 45%)',
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default BentoCard;
