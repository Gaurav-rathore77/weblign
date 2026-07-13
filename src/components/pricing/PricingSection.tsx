'use client';

import { motion } from 'framer-motion';
import PricingCard from './PricingCard';
import ComparisonTable from './ComparisonTable';
import GuaranteeBanner from './GuaranteeBanner';
import PricingFAQ from './PricingFAQ';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { plans } from './pricingData';

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -left-32 bottom-1/3 h-72 w-72 rounded-full bg-accent/[0.02] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 sm:gap-20">
          {/* ── Section Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center"
          >
            <motion.div variants={headerItem}>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineCurrencyDollar className="h-4 w-4" aria-hidden="true" />
                Pricing
              </div>
            </motion.div>
            <motion.h2
              variants={headerItem}
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
            >
              Simple,{' '}
              <span className="text-zinc-500">Transparent Pricing</span>
            </motion.h2>
            <motion.p
              variants={headerItem}
              className="text-base leading-relaxed text-zinc-500 sm:text-lg"
            >
              Transparent, scalable pricing designed for startups, growing
              businesses, and enterprise teams. No hidden fees, no surprises.
            </motion.p>

          </motion.div>

          {/* ── Pricing Cards ── */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {plans.map((plan, i) => (
              <PricingCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          {/* ── Comparison Table ── */}
          <ComparisonTable />

          {/* ── Guarantee Banner ── */}
          <GuaranteeBanner />

          {/* ── FAQ ── */}
          {/* <PricingFAQ /> */}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
