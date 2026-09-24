'use client';

import clsx from 'clsx';

interface BillingToggleProps {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
}

const BillingToggle = ({ yearly, onChange }: BillingToggleProps) => {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        className={clsx(
          'text-sm font-medium transition-colors duration-200',
          !yearly ? 'text-zinc-900' : 'text-zinc-400',
        )}
      >
        Monthly
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={yearly}
        aria-label="Toggle yearly billing"
        onClick={() => onChange(!yearly)}
        className={clsx(
          'relative h-7 w-12 rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          yearly ? 'bg-primary' : 'bg-zinc-200',
        )}
      >
        <span
          aria-hidden="true"
          className={clsx(
            'absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300',
            yearly && 'translate-x-5',
          )}
        />
      </button>

      <div className="flex items-center gap-1.5">
        <span
          className={clsx(
            'text-sm font-medium transition-colors duration-200',
            yearly ? 'text-zinc-900' : 'text-zinc-400',
          )}
        >
          Yearly
        </span>
        <span
          aria-live="polite"
          className={clsx(
            'rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 transition-all duration-200',
            yearly ? 'scale-100 opacity-100' : 'scale-80 opacity-0',
          )}
        >
          Save 20%
        </span>
      </div>
    </div>
  );
};

export default BillingToggle;
