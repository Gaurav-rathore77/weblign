import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'group inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 will-change-transform';

  const variantStyles = {
    primary:
      'bg-primary text-white shadow-sm hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_12px_30px_-14px_rgba(37,99,235,0.55)] focus-visible:ring-primary',
    secondary:
      'bg-[var(--color-background-muted)] text-[var(--color-text-primary)] hover:-translate-y-0.5 hover:bg-[var(--color-background-dark)] hover:shadow-md focus-visible:ring-primary  ',
    outline:
      'border border-primary/30 text-primary hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/10 hover:shadow-sm focus-visible:ring-primary',
    ghost:
      'text-primary hover:bg-primary/10 focus-visible:ring-primary',
    gradient:
      'bg-gradient-to-r from-primary to-accent text-white shadow-[0_14px_34px_-16px_rgba(37,99,235,0.7)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(37,99,235,0.8)] focus-visible:ring-primary',
  };

  const sizeStyles = {
    sm: 'gap-1.5 px-3.5 py-1.5 text-sm',
    md: 'gap-2 px-5 py-2.5 text-sm sm:text-base',
    lg: 'gap-2.5 px-6 py-3 text-base sm:text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && (
        <span className="flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
