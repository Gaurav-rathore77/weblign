'use client';

import { motion } from 'framer-motion';
import ContactCard from './ContactCard';
import { contactInfo, socialLinks } from './contactData';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Contact cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        {contactInfo.map((item, i) => (
          <ContactCard key={item.title} item={item} index={i} />
        ))}
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          Follow Us
        </p>
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-[11px] font-semibold text-zinc-500 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-white hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {link.initial}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
