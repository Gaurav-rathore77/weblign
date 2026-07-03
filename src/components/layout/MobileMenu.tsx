'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { HiXMark } from 'react-icons/hi2';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaDribbble,
} from 'react-icons/fa';
import { navigation, socialLinks } from '@/constants';
import Button from '@/components/ui/Button';
import Logo from './Logo';

const socialIcons = [
  { name: 'Twitter', href: socialLinks.twitter, Icon: FaTwitter },
  { name: 'LinkedIn', href: socialLinks.linkedin, Icon: FaLinkedin },
  { name: 'GitHub', href: socialLinks.github, Icon: FaGithub },
  { name: 'Instagram', href: socialLinks.instagram, Icon: FaInstagram },
  { name: 'Dribbble', href: socialLinks.dribbble, Icon: FaDribbble },
] as const;

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.15 } },
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 flex flex-col bg-white lg:hidden"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 35, stiffness: 300 }}
        >
          {/* Header */}
          <div className="flex h-16 items-center justify-between border-b border-zinc-100 px-4 sm:px-6">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100"
              aria-label="Close menu"
            >
              <HiXMark className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav
            className="flex flex-1 flex-col items-center justify-center gap-1 px-6"
            aria-label="Mobile navigation"
          >
            {navigation.main.map((item, i) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <Link
                    href={item.href}
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
                        layoutId="mobile-nav-indicator"
                        className="absolute -bottom-0.5 left-8 right-8 h-0.5 rounded-full bg-primary"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.div
              className="mt-8"
              custom={navigation.main.length}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Link href="/contact">
                <Button
                  variant="gradient"
                  size="lg"
                  className="rounded-full px-8 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Get Free Quote
                </Button>
              </Link>
            </motion.div>
          </nav>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-center gap-5 border-t border-zinc-100 px-6 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {socialIcons.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-primary"
                aria-label={name}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
