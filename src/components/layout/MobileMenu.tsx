'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HiXMark } from 'react-icons/hi2';
import { navigation, socialLinks } from '@/constants';
import Logo from './Logo';

const socialItems = [
  { name: 'Twitter', href: socialLinks.twitter, initial: 'X' },
  { name: 'LinkedIn', href: socialLinks.linkedin, initial: 'in' },
  { name: 'GitHub', href: socialLinks.github, initial: 'GH' },
  { name: 'Instagram', href: socialLinks.instagram, initial: 'IG' },
  { name: 'Dribbble', href: socialLinks.dribbble, initial: 'Dr' },
] as const;

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

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

  if (!isOpen) return null;

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="mobile-menu-panel fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
    >
      <div className="flex h-16 items-center justify-between border-b border-zinc-100 px-4 sm:px-6 dark:border-zinc-800">
        <Logo />
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          aria-label="Close menu"
        >
          <HiXMark className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <nav
        className="flex flex-1 flex-col items-center justify-center gap-1 px-6"
        aria-label="Mobile navigation"
      >
        {navigation.main.map((item, index) => {
          const active = isActive(item.href);

          return (
            <div
              key={item.href}
              className="mobile-menu-item"
              style={{ '--menu-index': index } as React.CSSProperties}
            >
              <Link
                href={item.href}
                prefetch={false}
                className={clsx(
                  'relative block px-8 py-3 text-center text-2xl font-medium transition-colors duration-200',
                  active
                    ? 'text-primary'
                    : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {item.name}
                {active && (
                  <span
                    className="absolute -bottom-0.5 left-8 right-8 h-0.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                )}
              </Link>
            </div>
          );
        })}

        <div
          className="mobile-menu-item mt-8"
          style={
            { '--menu-index': navigation.main.length } as React.CSSProperties
          }
        >
          <Link
            href="/contact"
            prefetch={false}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3 text-lg font-medium text-white shadow-md transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get Free Quote
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center gap-5 border-t border-zinc-100 px-6 py-6 dark:border-zinc-800">
        {socialItems.map(({ name, href, initial }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-xs font-semibold text-zinc-500 transition-colors hover:border-primary/30 hover:text-primary dark:border-zinc-700 dark:text-zinc-300"
            aria-label={name}
          >
            {initial}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
