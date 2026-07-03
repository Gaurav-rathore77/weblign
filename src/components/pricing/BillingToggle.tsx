'use client';

import { motion } from 'framer-motion';
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
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={clsx(
            'absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm',
            yearly ? 'left-6' : 'left-1',
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
        <motion.span
          initial={false}
          animate={{
            opacity: yearly ? 1 : 0,
            scale: yearly ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600"
        >
          Save 20%
        </motion.span>
      </div>
    </div>
  );
};

export default BillingToggle;
