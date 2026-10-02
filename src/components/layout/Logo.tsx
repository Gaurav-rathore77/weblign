import Link from 'next/link';

const Logomark = () => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="logo-mark h-7 w-7"
    aria-hidden="true"
  >
    <rect
      x="2"
      y="2"
      width="12"
      height="12"
      rx="3"
      fill="currentColor"
      className="logo-block-1"
    />
    <rect
      x="14"
      y="14"
      width="12"
      height="12"
      rx="3"
      fill="currentColor"
      opacity="0.5"
      className="logo-block-2"
    />
    <rect
      x="14"
      y="2"
      width="12"
      height="5"
      rx="2"
      fill="currentColor"
      opacity="0.3"
      className="logo-block-3"
    />
    <rect
      x="2"
      y="14"
      width="5"
      height="12"
      rx="2"
      fill="currentColor"
      opacity="0.3"
      className="logo-block-4"
    />
  </svg>
);

const LogoSpark = () => (
  <svg
    viewBox="0 0 12 12"
    fill="currentColor"
    className="h-3 w-3"
    aria-hidden="true"
  >
    <path d="M6 0l1.2 4.2L12 6l-4.8 1.8L6 12 4.8 7.8 0 6l4.8-1.8L6 0z" />
  </svg>
);

interface LogoProps {
  showText?: boolean;
  className?: string;
  /**
   * Where the logo links to. Override inside the admin shell so the mark can
   * live inside its own link without nesting one <a> inside another.
   */
  href?: string;
  ariaLabel?: string;
}

const BRAND_NAME = 'Weblign';

const Logo = ({
  showText = true,
  className = '',
  href = '/',
  ariaLabel = 'Weblign - Go to homepage',
}: LogoProps) => (
  <Link
    href={href}
    prefetch={false}
    className={`logo-link group flex items-center gap-2.5 text-zinc-900 transition-colors hover:text-primary ${className}`}
    aria-label={ariaLabel}
  >
    <span className="logo-glow" aria-hidden="true" />
    <span className="logo-mark-enter">
      <span className="logo-mark-wrap">
        <Logomark />
      </span>
    </span>
    {showText && (
      <span className="logo-text text-lg font-semibold tracking-tight">
        {BRAND_NAME.split('').map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="logo-letter"
            style={{ ['--logo-i' as string]: index }}
            aria-hidden="true"
          >
            {letter}
          </span>
        ))}
        <span className="sr-only">{BRAND_NAME}</span>
      </span>
    )}
    <span className="logo-spark" aria-hidden="true">
      <LogoSpark />
    </span>
  </Link>
);

export default Logo;
