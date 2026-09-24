import HeroContent from './HeroContent';
import HeroIllustration from './HeroIllustration';

const Hero = () => {
  return (
    <section className="relative min-h-dvh bg-gradient-to-b from-white via-zinc-50/40 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
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

        {/* Lightweight ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.06),transparent_32%),radial-gradient(circle_at_82%_78%,rgba(56,189,248,0.05),transparent_30%)]" />
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
