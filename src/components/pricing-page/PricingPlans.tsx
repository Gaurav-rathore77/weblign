'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { pricingTiers } from './pricingData';

const PricingPlans = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3">
        <span className={`text-sm font-medium transition-colors ${annual ? 'text-zinc-400' : 'text-zinc-900 dark:text-zinc-100'}`}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual(!annual)}
          className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${annual ? 'bg-primary' : 'bg-zinc-200 dark:bg-zinc-700'}`}
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-xs transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-1'}`}
          />
        </button>
        <span className={`text-sm font-medium transition-colors ${annual ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-400'}`}>
          Annual
        </span>
        <span className="hidden rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 sm:inline dark:bg-emerald-900/30 dark:text-emerald-400">
          Save up to 20%
        </span>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-8 dark:bg-zinc-900 ${tier.popular ? 'border-primary/30 shadow-primary/5 ring-2 ring-primary/20' : 'border-zinc-100 dark:border-zinc-800'} ${tier.popular ? '' : ''}`}
          >
            {tier.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-[11px] font-semibold text-white shadow-sm">
                Most Popular
              </span>
            )}

            {/* Header */}
            <div className={`rounded-xl bg-gradient-to-br ${tier.gradient} p-4 text-center sm:p-5 ${tier.popular ? 'text-white' : ''}`}>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{tier.name}</h3>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{tier.description}</p>
              <div className="mt-3">
                <span className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  ${annual ? tier.annualPrice : tier.monthlyPrice}
                </span>
                <span className="ml-1 text-sm text-zinc-400">/{annual ? 'yr' : 'mo'}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((f) => (
                <li key={f.text} className="flex items-start gap-2.5 text-sm">
                  <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${f.included ? 'bg-primary/10 text-primary dark:bg-primary/20' : 'bg-zinc-100 text-zinc-300 dark:bg-zinc-800 dark:text-zinc-600'}`}>
                    <HiCheck className="h-3 w-3" />
                  </span>
                  <span className={f.included ? 'text-zinc-700 dark:text-zinc-300' : 'text-zinc-400 dark:text-zinc-500'}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.popular ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md hover:shadow-lg' : 'border border-zinc-200 text-zinc-900 hover:border-zinc-300 hover:shadow-sm dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-600'}`}
            >
              {tier.cta}
              <HiOutlineArrowLongRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
