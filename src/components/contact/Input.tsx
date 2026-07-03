'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-zinc-700"
        >
          {label}
          {props.required && (
            <span className="ml-0.5 text-red-400" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            'w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-zinc-900 shadow-xs transition-all duration-200 placeholder:text-zinc-400 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10',
            error
              ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
              : 'border-zinc-200 hover:border-zinc-300',
            props.disabled && 'cursor-not-allowed opacity-50',
            className,
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
