import React from 'react';

type CardVariant = 'default' | 'elevated' | 'outline' | 'glass';

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
  const baseStyles = 'rounded-lg transition-all duration-200';

  const variantStyles = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    outline: 'bg-white border-2 border-muted',
    glass: 'bg-white/80 backdrop-blur-sm border border-white/20',
  };

  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`;

  return (
    <Component className={combinedClassName}>
      {children}
    </Component>
  );
};

export default Card;