'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import clsx from 'clsx';
import { HiBars3, HiXMark, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

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
          'site-header fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200',
          isScrolled
            ? 'is-scrolled border-b border-zinc-200/60 shadow-xs'
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
            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={getWhatsAppUrlFor('consultation')}
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="whatsapp_click"
                data-track-label="navbar_whatsapp"
                data-track-location="header"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
              >
                <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white shadow-md transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get Free Consultation
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="relative z-50 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-700 transition-colors hover:bg-zinc-100 lg:hidden"
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

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </>
  );
};

export default Navbar;
