'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import clsx from 'clsx';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ThemeToggle from '@/components/common/ThemeToggle';

const MobileMenu = dynamic(() => import('./MobileMenu'));

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={clsx(
          'site-header fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'border-b border-zinc-200/60 bg-white/90 shadow-xs dark:border-zinc-800 dark:bg-zinc-950/90'
            : 'bg-transparent',
          className,
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <div className="hidden lg:flex lg:items-center">
            <NavLinks />
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />

            <div className="hidden lg:block">
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-1.5 text-sm font-medium text-white shadow-md transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get Free Quote
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="relative z-50 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 lg:hidden"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              {isMobileOpen ? (
                <HiXMark className="h-5 w-5" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileOpen && (
        <MobileMenu
          isOpen
          onClose={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
