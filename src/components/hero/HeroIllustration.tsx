import Image from 'next/image';

type FrameProps = {
  src: string;
  alt: string;
  url: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showChrome?: boolean;
  /** Adds the continuous vertical drift. Kept off the primary frame so the
   *  largest element never sits on a permanently promoted layer. */
  drift?: boolean;
  /** Aspect ratio for the screenshot area, as a Tailwind `aspect-*` value.
   *  Keep this equal to the source image ratio so `object-cover` never crops. */
  aspect?: string;
};

/** Thin browser chrome so a screenshot reads as a live site, not a flat image. */
const BrowserFrame = ({
  src,
  alt,
  url,
  sizes,
  priority,
  className = '',
  style,
  showChrome = true,
  drift = false,
  aspect = 'aspect-[16/10]',
}: FrameProps) => (
  <div
    className={`overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-900/20 dark:border-zinc-700/70 dark:bg-zinc-100 ${drift ? 'hero-float' : ''} ${className}`}
    style={style}
  >
    {showChrome && (
      <div className="flex items-center gap-1.5 border-b border-zinc-100 bg-zinc-50/90 px-3.5 py-2.5 dark:border-zinc-700 dark:bg-zinc-800/60">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-1.5 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-[10px] font-medium tracking-tight text-zinc-400 dark:bg-zinc-300/60 dark:text-zinc-500">
          {url}
        </span>
      </div>
    )}
    <div className={`relative w-full ${aspect}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  </div>
);

/**
 * Hero artwork showing real client work.
 *
 * Every image here is an actual site from the Weblign portfolio rather than a
 * drawn mockup, so the hero demonstrates output instead of claiming it.
 */
const HeroIllustration = () => {
  return (
    <div className="relative mx-auto mt-12 hidden w-full max-w-xl lg:block xl:max-w-2xl 2xl:max-w-[42rem]">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -inset-12 -z-10"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(58% 52% at 28% 30%, rgba(37,99,235,0.22), transparent 70%), radial-gradient(52% 48% at 78% 72%, rgba(56,189,248,0.24), transparent 70%), radial-gradient(40% 40% at 60% 15%, rgba(139,92,246,0.14), transparent 70%)',
          filter: 'blur(34px)',
        }}
      />

      {/* ── Primary ──
          No entrance animation here. A delayed animation promotes an element
          containing an image to its own compositor layer, and Chrome leaves that
          layer unpainted, so the frame and the LCP image disappear entirely. */}
      <div className="relative z-10">
        <BrowserFrame
          src="/images/projects/real-estate-theme.webp"
          alt="Real estate website built by Weblign for a client in Noida"
          url="real-eastate-theme-1.vercel.app"
          sizes="(min-width: 1536px) 42rem, (min-width: 1280px) 42rem, (min-width: 1024px) 36rem"
          priority
          showChrome={false}
          aspect="aspect-[5/4]"
          className="rounded-[22px]"
        />
      </div>

      {/* ── Floating: ICFEI enquiry-management dashboard ──
          Offset far enough out that it overlaps only the frame's corner, leaving
          the screenshot's own nav and headline readable. */}
      <div
        className="absolute -right-7 -top-11 z-20 w-44 sm:w-52 lg:w-56"
        style={{ '--float-duration': '5.5s' } as React.CSSProperties}
      >
        <BrowserFrame
          src="/images/projects/icfei-dashboard.webp"
          alt="Enquiry management dashboard built by Weblign for ICFEI, tracking hot, cold, future and dead leads"
          url="india.icfei.com"
          sizes="14rem"
          className="rounded-xl shadow-xl"
          drift
        />
      </div>

      {/* ── Floating: third project ── */}
      <div
        className="absolute -bottom-11 -left-8 z-20 hidden w-40 sm:block sm:w-48 lg:w-52"
        style={{ '--float-duration': '6.5s' } as React.CSSProperties}
      >
        <BrowserFrame
          src="/images/projects/anita-printers.webp"
          alt="Printing business website built by Weblign for a client in Noida Sector 2"
          url="anitaprinters.com"
          sizes="13rem"
          className="rounded-xl shadow-xl"
          drift
        />
      </div>

      {/* ── Stat chip ── */}
      <div className="absolute -bottom-9 right-6 z-30 hidden lg:block">
        <div className="animate-border-glow flex items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/95 px-4 py-3 shadow-2xl shadow-zinc-900/15 backdrop-blur-md dark:border-zinc-700/70 dark:bg-zinc-100/95">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-primary" aria-hidden="true">
              <path d="M3 16V8m4.5 8V4M12 16v-6m4.5 6V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <p className="text-xl font-bold leading-none text-zinc-900 dark:text-white">50+</p>
            <p className="mt-1 text-[11px] text-zinc-500 dark:text-zinc-500">Projects delivered</p>
          </div>
        </div>
      </div>

      {/* ── Availability chip ── */}
      <div className="absolute -left-7 top-8 z-30 hidden xl:block">
        <div className="card-glow flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-white/95 py-2 pl-3 pr-4 shadow-xl shadow-zinc-900/10 backdrop-blur-md dark:border-zinc-700/70 dark:bg-zinc-100/95">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-700">
            Available for new projects
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;