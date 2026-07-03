'use client';

import Link from 'next/link';

const Logomark = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="12" height="12" rx="3" fill="currentColor" />
    <rect
      x="14"
      y="14"
      width="12"
      height="12"
      rx="3"
      fill="currentColor"
      opacity="0.5"
    />
    <rect
      x="14"
      y="2"
      width="12"
      height="5"
      rx="2"
      fill="currentColor"
      opacity="0.3"
    />
    <rect
      x="2"
      y="14"
      width="5"
      height="12"
      rx="2"
      fill="currentColor"
      opacity="0.3"
    />
  </svg>
);

interface LogoProps {
  showText?: boolean;
  className?: string;
}

const Logo = ({ showText = true, className = '' }: LogoProps) => (
  <Link
    href="/"
    className={`group flex items-center gap-2.5 text-zinc-900 transition-colors hover:text-primary ${className}`}
    aria-label="Weblign - Go to homepage"
  >
    <span className="transition-transform duration-300 group-hover:scale-105">
      <Logomark />
    </span>
    {showText && (
      <span className="text-lg font-semibold tracking-tight">Weblign</span>
    )}
  </Link>
);

export default Logo;
