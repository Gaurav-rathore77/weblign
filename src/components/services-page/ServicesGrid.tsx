'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceDetails, approachSteps } from './servicesData';

const iconComponents: Record<string, React.ElementType> = {
  HiOutlineGlobeAlt, HiOutlineDevicePhoneMobile, HiOutlinePaintBrush,
  HiOutlineShoppingCart, HiOutlineCloud, HiOutlineCpuChip,
};

function SvcIcon({ name, className }: { name: string; className?: string }) {
  const Comp = iconComponents[name];
  return Comp ? <Comp className={className} /> : null;
}

import {
  HiOutlineGlobeAlt,
  HiOutlineDevicePhoneMobile,
  HiOutlinePaintBrush,
  HiOutlineShoppingCart,
  HiOutlineCloud,
  HiOutlineCpuChip,
} from 'react-icons/hi2';
import { CheckCircle2 } from 'lucide-react';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';

const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const headerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const ServicesGrid = () => {
  const [activeTab, setActiveTab] = useState(serviceDetails[0].id);

  const activeService = serviceDetails.find((s) => s.id === activeTab);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -left-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-20 sm:gap-24">
          {/* ── Section Header ── */}
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.div variants={headerItem}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineComputerDesktop className="h-4 w-4" aria-hidden="true" />
                What We Build
              </div>
            </motion.div>
            <motion.h2
              variants={headerItem}
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100"
            >
              Every Service You Need to{' '}
              <span className="text-zinc-500 dark:text-zinc-400">Succeed Online</span>
            </motion.h2>
            <motion.p
              variants={headerItem}
              className="mt-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400"
            >
              Click each service to explore what we deliver, the technologies we
              use, and how we bring your vision to life.
            </motion.p>
          </motion.div>

          {/* ── Tab Buttons ── */}
          <div className="flex flex-wrap justify-center gap-2">
            {serviceDetails.map((s) => (
              <motion.button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === s.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
                }`}
              >
                <span aria-hidden="true"><SvcIcon name={s.icon} className="h-4 w-4" /></span>
                {s.title}
              </motion.button>
            ))}
          </div>

          {/* ── Active Service Detail ── */}
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Left: Description + Features */}
                <div>
                  <span className="mb-3 block text-4xl" aria-hidden="true"><SvcIcon name={activeService.icon} className="h-10 w-10" /></span>
                  <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-100">
                    {activeService.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {activeService.longDescription}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {activeService.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Technologies + Approach */}
                <div className="space-y-6">
                  <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50/80 to-white p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-950">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                      Technologies We Use
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeService.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-xs font-medium text-zinc-700 shadow-xs dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50/80 to-white p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900/50 dark:to-zinc-950">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                      Our Approach
                    </h4>
                    <div className="mt-4 space-y-4">
                      {approachSteps.map((step) => (
                        <div key={step.number} className="flex gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/[0.08] text-xs font-bold text-primary">
                            {step.number}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.title}</p>
                            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
