import React from 'react';

type CardVariant = 'default' | 'elevated' | 'outline' | 'glass' | 'interactive';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  as?: React.ElementType;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  as: Component = 'div',
  padding = 'md',
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 ease-out';

  const variantStyles = {
    default:
      'border border-[var(--color-border)] bg-[var(--color-surface)]/90 ',
    elevated:
      'border border-[var(--color-border)] bg-[var(--color-surface)]/95 shadow-md hover:-translate-y-0.5 hover:shadow-[var(--shadow-lg)] ',
    outline:
      'border border-[var(--color-border)] bg-transparent hover:border-primary/25 hover:bg-primary/[0.03]',
    glass:
      'border border-white/15 bg-white/60 backdrop-blur-md  ',
    interactive:
      'border border-[var(--color-border)] bg-[var(--color-surface)]/90 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[var(--shadow-glow-primary)] ',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-3 sm:p-4',
    md: 'p-5 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`;

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
};

export default Card;
