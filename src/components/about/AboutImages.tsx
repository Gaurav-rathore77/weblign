import Image from 'next/image';

const FloatWrapper = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const AboutImages = () => {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(37,99,235,0.05),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(56,189,248,0.05),transparent_28%)]" />
      </div>

      <div className="relative grid grid-cols-2 gap-4">
        {/* Main image */}
        <FloatWrapper className="col-span-2">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg shadow-zinc-900/5">
            <Image
              src="/images/about-team.webp"
              alt="Our team collaborating on a digital project"
              width={800}
              height={534}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
            {/* Glassmorphism overlay badge */}
            <div className="absolute bottom-3 left-3 right-auto inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/60 px-3 py-2 text-xs font-medium text-zinc-700 shadow-xs backdrop-blur-md dark:bg-zinc-100/60 dark:text-zinc-300">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
                  <path d="M8 0a1 1 0 011 1v.89A6 6 0 0114.11 7H15a1 1 0 110 2h-.89A6 6 0 019 14.11V15a1 1 0 11-2 0v-.89A6 6 0 011.89 9H1a1 1 0 110-2h.89A6 6 0 017 1.89V1a1 1 0 011-1z" />
                </svg>
              </span>
              Passion meets precision
            </div>
          </div>
        </FloatWrapper>

        {/* Small image 1 */}
        <FloatWrapper>
          <div className="overflow-hidden rounded-xl shadow-md shadow-zinc-900/5">
            <Image
              src="/images/about-office.webp"
              alt="Modern office workspace"
              width={400}
              height={267}
              sizes="(min-width: 640px) 25vw, 50vw"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </div>
        </FloatWrapper>

        {/* Small image 2 + badges stacked */}
        <div className="flex flex-col gap-4">
          <FloatWrapper>
            <div className="overflow-hidden rounded-xl shadow-md shadow-zinc-900/5">
              <Image
                src="/images/about-brainstorm.webp"
                alt="Team brainstorming session"
                width={400}
                height={267}
                sizes="(min-width: 640px) 25vw, 50vw"
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </FloatWrapper>

          {/* Badges row */}
          <div className="flex gap-3">
            <FloatWrapper>
              <div className="flex items-center gap-1.5 rounded-xl border border-primary/10 bg-primary/[0.04] px-3 py-2 text-xs font-semibold text-primary shadow-xs">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M8 0a1 1 0 011 1v.89A6 6 0 0114.11 7H15a1 1 0 110 2h-.89A6 6 0 019 14.11V15a1 1 0 11-2 0v-.89A6 6 0 011.89 9H1a1 1 0 110-2h.89A6 6 0 017 1.89V1a1 1 0 011-1z" />
                </svg>
                10+ Years
              </div>
            </FloatWrapper>
            <FloatWrapper>
              <div className="flex items-center gap-1.5 rounded-xl border border-emerald-100 bg-emerald-50/60 px-3 py-2 text-xs font-semibold text-emerald-700 shadow-xs dark:border-emerald-900/50 dark:bg-emerald-900/30 dark:text-emerald-400">
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M8 1a4 4 0 014 4c0 1.5-.8 2.8-2 3.5V12h1a2 2 0 012 2H3a2 2 0 012-2h1V8.5A4 4 0 018 1z" />
                </svg>
                50+ Projects
              </div>
            </FloatWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
