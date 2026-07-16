'use client';

import { motion } from 'framer-motion';
import {
  HiOutlineArrowLongRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineHashtag,
  HiOutlineBriefcase,
  HiOutlineClipboardDocument,
} from 'react-icons/hi2';

const ContactCTA = () => {
  const channels = [
    { icon: <HiOutlineChatBubbleLeftRight className="h-5 w-5" />, label: 'Live Chat', desc: 'Mon–Fri, 9 AM – 6 PM PST' },
    { icon: <HiOutlineHashtag className="h-5 w-5" />, label: 'X (Twitter)', desc: '@weblign' },
    { icon: <HiOutlineBriefcase className="h-5 w-5" />, label: 'LinkedIn', desc: '/company/weblign' },
    { icon: <HiOutlineClipboardDocument className="h-5 w-5" />, label: 'Contact Form', desc: 'Fastest response' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/[0.04] to-accent/10 p-8 text-center shadow-lg sm:p-12 dark:from-primary/5 dark:to-accent/5"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
      <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-100">
        Prefer Another Channel?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        Reach out however works best for you. We&rsquo;re here to help.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {channels.map((ch) => (
          <a
            key={ch.label}
            href="#"
            className="inline-flex items-center gap-2.5 rounded-xl border border-zinc-100 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-100 dark:text-zinc-300 dark:hover:border-primary/30"
          >
            <span aria-hidden="true">{ch.icon}</span>
            <div className="text-left">
              <div>{ch.label}</div>
              <div className="text-xs font-normal text-zinc-400">{ch.desc}</div>
            </div>
            <HiOutlineArrowLongRight className="ml-2 h-4 w-4 text-zinc-300 dark:text-zinc-600" />
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactCTA;
