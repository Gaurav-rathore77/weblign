'use client';

import { motion } from 'framer-motion';
import { HiOutlineComputerDesktop, HiOutlineDevicePhoneMobile, HiOutlinePaintBrush, HiOutlineShoppingCart, HiOutlineCloud, HiOutlineCommandLine } from 'react-icons/hi2';

const services = [
  { icon: HiOutlineComputerDesktop, title: 'Web Applications', desc: 'Scalable, high-performance web apps built with modern frameworks like Next.js and React.' },
  { icon: HiOutlineDevicePhoneMobile, title: 'Mobile Solutions', desc: 'Cross-platform mobile apps that deliver native-quality experiences on iOS and Android.' },
  { icon: HiOutlinePaintBrush, title: 'UI/UX Design', desc: 'User-centered design that balances aesthetics with usability to drive engagement.' },
  { icon: HiOutlineShoppingCart, title: 'E-Commerce', desc: 'Custom online stores and marketplaces optimized for conversion and growth.' },
  { icon: HiOutlineCloud, title: 'Cloud & DevOps', desc: 'Cloud-native architecture, CI/CD pipelines, and infrastructure that scales.' },
  { icon: HiOutlineCommandLine, title: 'AI & Automation', desc: 'Intelligent automation and AI-powered features that give your product an edge.' },
];

const ServicesProcess = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary/[0.02] blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
            <HiOutlineCommandLine className="h-4 w-4" aria-hidden="true" />
            What We Deliver
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            End-to-End{' '}
            <span className="text-zinc-500 dark:text-zinc-400">Digital Services</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
            From strategy to launch and beyond, we provide everything you need
            to build a successful digital product.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.08] text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-zinc-950">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;
