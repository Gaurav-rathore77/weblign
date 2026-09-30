import HeroContent from './HeroContent';
import HeroIllustration from './HeroIllustration';
import type { SiteSettings } from '@/lib/site-content';

const Hero = ({ settings }: { settings: SiteSettings }) => {
  return (
    <section className="animated-bg relative min-h-dvh overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20">
      {/* ── Background decorations ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #2563EB 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Animated ambient gradients */}
        <div className="animate-glow-pulse absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="animate-glow-pulse absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-accent/[0.04] blur-3xl" style={{ animationDelay: '1.5s' }} />

        {/* Floating particles */}
        <div className="particle left-[15%] top-[20%]" style={{ animationDelay: '0s' }} />
        <div className="particle left-[25%] top-[60%]" style={{ animationDelay: '2s' }} />
        <div className="particle left-[70%] top-[30%]" style={{ animationDelay: '4s' }} />
        <div className="particle left-[80%] top-[70%]" style={{ animationDelay: '1s' }} />
        <div className="particle left-[50%] top-[15%]" style={{ animationDelay: '3s' }} />
        <div className="particle left-[40%] top-[80%]" style={{ animationDelay: '5s' }} />
        <div className="particle left-[90%] top-[50%]" style={{ animationDelay: '2.5s' }} />
        <div className="particle left-[10%] top-[45%]" style={{ animationDelay: '6s' }} />
      </div>

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <HeroContent content={settings.hero} />
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;
