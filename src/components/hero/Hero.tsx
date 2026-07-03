import HeroContent from './HeroContent';
import HeroIllustration from './HeroIllustration';

const Hero = () => {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-gradient-to-b from-white via-zinc-50/40 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
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

        {/* Glow orbs */}
        <div className="absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-[450px] w-[450px] rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="absolute right-1/3 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-primary/[0.02] blur-2xl" />
      </div>

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <HeroContent />
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
};

export default Hero;
