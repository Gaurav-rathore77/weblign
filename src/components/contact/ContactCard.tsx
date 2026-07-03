'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ContactInfoItem } from './contactData';

interface ContactCardProps {
  item: ContactInfoItem;
  index: number;
}

const ContactCard = ({ item, index }: ContactCardProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/60 p-5 shadow-lg shadow-zinc-900/5 backdrop-blur-xl transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 sm:p-6"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/[0.03] to-accent/[0.03]" />
      </div>

      <div className="relative flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/[0.08] to-accent/[0.08] text-primary shadow-xs ring-1 ring-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:shadow-md group-hover:ring-0">
          {item.icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            {item.title}
          </p>
          <p className="mt-0.5 text-sm font-medium text-zinc-900">
            {item.value}
          </p>
        </div>
      </div>
    </motion.div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        className={clsx(
          'block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary',
          item.title === 'Email' && '[&_p]:hover:text-primary',
          item.title === 'Phone' && '[&_p]:hover:text-primary',
        )}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ContactCard;
