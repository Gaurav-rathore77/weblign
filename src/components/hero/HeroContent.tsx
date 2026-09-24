import HeroButtons from './HeroButtons';
import TrustBadges from './TrustBadges';
import HeroStats from './HeroStats';

const HeroContent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="hero-reveal hero-delay-100">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/[0.08] text-xs">
            <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3" aria-hidden="true">
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM8 3a1 1 0 011 1v.89A6 6 0 0114.11 7H15a1 1 0 110 2h-.89A6 6 0 018 14.11V15a1 1 0 11-2 0v-.89A6 6 0 012.89 9H2a1 1 0 110-2h.89A6 6 0 017 4.89V4a1 1 0 011-1zM4 8a4 4 0 008 0H4z" />
            </svg>
          </span>
          Trusted by Innovative Founders
        </div>
      </div>

      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
        Build{' '}
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Digital Experiences
        </span>
        <br />
        That{' '}
        <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Grow Your Business
        </span>
      </h1>

      <p className="hero-reveal hero-delay-300 max-w-lg text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-xl">
        We craft beautiful, high-performance digital products that drive real
        results. From web applications to complete digital ecosystems, we
        transform your vision into reality.
      </p>

      <div className="hero-reveal hero-delay-400">
        <HeroButtons />
      </div>

      <div className="hero-reveal hero-delay-500">
        <TrustBadges />
      </div>

      <div className="hero-reveal hero-delay-600">
        <HeroStats />
      </div>
    </div>
  );
};

export default HeroContent;
