'use client';

import { motion } from 'framer-motion';
import { categories, type Category } from './portfolioData';
import clsx from 'clsx';

interface PortfolioFiltersProps {
  active: Category;
  onSelect: (cat: Category) => void;
}

const PortfolioFilters = ({ active, onSelect }: PortfolioFiltersProps) => {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2"
      role="tablist"
      aria-label="Filter portfolio by category"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          role="tab"
          aria-selected={active === cat}
          onClick={() => onSelect(cat)}
          className={clsx(
            'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
            active === cat
              ? 'text-white'
              : 'text-zinc-500 hover:text-zinc-800',
          )}
        >
          {active === cat && (
            <motion.span
              layoutId="filter-pill"
              className="absolute inset-0 rounded-full bg-primary"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
};

export default PortfolioFilters;
