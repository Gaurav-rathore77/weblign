'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import clsx from 'clsx';
import { HiXMark, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { navigation, socialLinks } from '@/constants';
import Logo from './Logo';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const socialItems = [
  { name: 'Twitter', href: socialLinks.twitter, initial: 'X' },
  { name: 'LinkedIn', href: socialLinks.linkedin, initial: 'in' },
  { name: 'GitHub', href: socialLinks.github, initial: 'GH' },
  { name: 'Instagram', href: socialLinks.instagram, initial: 'IG' },
  { name: 'Facebook', href: socialLinks.facebook, initial: 'f' },
  { name: 'YouTube', href: socialLinks.youtube, initial: 'YT' },
  { name: 'Reddit', href: socialLinks.reddit, initial: 'R' },
  { name: 'WhatsApp', href: socialLinks.whatsapp, initial: 'WA' },
  { name: 'Dribbble', href: socialLinks.dribbble, initial: 'Dr' },
] as const;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      onClose();
      previousPathname.current = pathname;
    }
  }, [pathname, onClose]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="mobile-menu-backdrop"
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="mobile-menu-panel"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-50 flex flex-col bg-white/98 backdrop-blur-md lg:hidden"
            initial={reduceMotion ? false : { opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: '100%' }}
            transition={reduceMotion ? { duration: 0.15 } : { duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-16 items-center justify-between border-b border-zinc-100 px-4 sm:px-6">
              <Logo />
              <button
                type="button"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100"
                aria-label="Close menu"
              >
                <HiXMark className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col items-center justify-center gap-1 overflow-y-auto px-6 py-6"
              aria-label="Mobile navigation"
            >
              {navigation.main.map((item, index) => {
                const active = isActive(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 12 }}
                    transition={{ duration: 0.28, delay: reduceMotion ? 0 : index * 0.04 + 0.04, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={item.href}
                      prefetch={false}
                      className={clsx(
                        'relative block px-8 py-3 text-center text-2xl font-medium transition-colors duration-200',
                        active
                          ? 'text-primary'
                          : 'text-zinc-500 hover:text-zinc-900',
                      )}
                      aria-current={active ? 'page' : undefined}
                    >
                      {item.name}
                      {active && (
                        <motion.span
                          layoutId="mobile-active-nav"
                          className="absolute -bottom-0.5 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                className="mt-8 flex w-full max-w-xs flex-col items-center gap-3"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/contact"
                  prefetch={false}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3 text-base font-semibold text-white shadow-md transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Get Free Consultation
                </Link>
                <a
                  href={getWhatsAppUrlFor('consultation')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-label="mobile_menu_whatsapp"
                  data-track-location="mobile_menu"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-8 py-3 text-base font-semibold text-emerald-700 transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
                >
                  <HiOutlineChatBubbleLeftRight className="h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </nav>

            <div className="flex items-center justify-center gap-4 border-t border-zinc-100 px-6 py-6">
              {socialItems.map(({ name, href, initial }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-xs font-semibold text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                  aria-label={name}
                >
                  {initial}
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
