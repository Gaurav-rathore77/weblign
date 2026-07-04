'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';
import FooterLinks from './footer/FooterLinks';
import SocialLinks from './footer/SocialLinks';
import Newsletter from './footer/Newsletter';
import BackToTop from './footer/BackToTop';
import {
  services,
  companyLinks,
  contactDetails,
} from './footer/footerData';

const footerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const footerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <BackToTop />

      <footer className="relative overflow-hidden bg-gradient-to-b from-[#09090b] via-[#18181b] to-black" role="contentinfo">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl" />
          <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.02] blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ── Top section: columns + newsletter ── */}
          <div className="py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Column 1: Company */}
              <motion.div
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <motion.div variants={footerItem}>
                  <Logo showText className="text-white hover:text-white/80" />
                </motion.div>
                <motion.p variants={footerItem} className="mt-4 text-sm leading-relaxed text-white/40">
                  We build beautiful, functional, and user-centered digital
                  products that help businesses grow and succeed in the digital
                  landscape.
                </motion.p>
                <motion.p variants={footerItem} className="mt-3 text-sm leading-relaxed text-white/30">
                  Our mission is to empower businesses with cutting-edge
                  technology, exceptional design, and transparent collaboration.
                </motion.p>
                <motion.div variants={footerItem} className="mt-6">
                  <SocialLinks />
                </motion.div>
              </motion.div>

              {/* Column 2: Services */}
              <div className="lg:col-span-1">
                <FooterLinks title="Services" links={services} delay={0.1} />
              </div>

              {/* Column 3: Company */}
              <div className="lg:col-span-1">
                <FooterLinks title="Company" links={companyLinks} delay={0.2} />
              </div>

              {/* Column 4: Contact */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="lg:col-span-1"
              >
                <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
                <ul className="space-y-3">
                  {contactDetails.map((detail) => (
                    <li key={detail.label}>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="group inline-flex items-center gap-2.5 text-sm text-white/40 transition-colors duration-200 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                        >
                          <span className="text-sm" aria-hidden="true">{detail.icon}</span>
                          <span>{detail.value}</span>
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2.5 text-sm text-white/40">
                          <span className="text-sm" aria-hidden="true">{detail.icon}</span>
                          <span>{detail.value}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* ── Newsletter ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-12 max-w-lg"
            >
              <Newsletter />
            </motion.div>
          </div>

          {/* ── Divider ── */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:gap-0">
            <p className="text-xs text-white/30">
              &copy; {year} Weblign. All rights reserved.
            </p>

            <nav aria-label="Footer legal links" className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                href="/privacy"
                className="text-xs text-white/30 transition-colors duration-200 hover:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-white/30 transition-colors duration-200 hover:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-xs text-white/30 transition-colors duration-200 hover:text-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
              >
                Cookies Policy
              </Link>
              <span className="inline-flex items-center gap-1 text-xs text-white/20">
                Made with <span aria-label="love">❤️</span> using Next.js
              </span>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
