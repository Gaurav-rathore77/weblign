'use client';

import { motion } from 'framer-motion';
import Marquee from './Marquee';

const companies = [
  'NovaTech',
  'CloudPeak',
  'PixelWorks',
  'Nexora',
  'BrightLabs',
  'AlphaCore',
  'VisionHub',
  'TechNova',
  'StarForge',
  'MindCraft',
];

const LogoItem = ({ name }: { name: string }) => (
  <span className="select-none whitespace-nowrap text-lg font-semibold tracking-tight text-zinc-300 transition-colors duration-300 hover:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-400">
    {name}
  </span>
);

const LogoGrid = () => {
  return (
    <>
      {/* Mobile grid */}
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:hidden">
        {companies.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.04,
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex items-center justify-center rounded-xl border border-zinc-100 bg-white/50 px-4 py-5 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <LogoItem name={name} />
          </motion.div>
        ))}
      </div>

      {/* Desktop marquee */}
      <div className="hidden md:block">
        <Marquee speed={35}>
          {companies.map((name) => (
            <LogoItem key={name} name={name} />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default LogoGrid;
