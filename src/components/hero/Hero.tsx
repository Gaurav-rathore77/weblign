'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroIllustration from './HeroIllustration';

const BLUE = '#2563EB';
const BLUE_SOFT = 'rgba(37, 99, 235,';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [enableParallax, setEnableParallax] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, reduceMotion ? 1 : 0.72]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.22, 0.08]);

  useEffect(() => {
    if (reduceMotion) return;
    const media = window.matchMedia('(pointer: fine)');
    const update = () => setEnableParallax(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enableParallax || reduceMotion) return;
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setPointer({ x: px, y: py }));
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      setPointer({ x: 0, y: 0 });
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [enableParallax, reduceMotion]);

  const px = enableParallax && !reduceMotion ? pointer.x : 0;
  const py = enableParallax && !reduceMotion ? pointer.y : 0;

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#09090B] text-white"
    >
      {/* Background: charcoal base, blue radial lighting, architectural grid, fine technical lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#09090B]" />

        {/* slow moving blue lighting */}
        <motion.div
          className="absolute -left-[15%] -top-[20%] h-[70%] w-[65%] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${BLUE_SOFT}0.22) 0%, ${BLUE_SOFT}0.08) 35%, rgba(37,99,235,0) 70%)` }}
          animate={reduceMotion ? undefined : { x: [0, 28, -12, 0], y: [0, 18, 8, 0], scale: [1, 1.04, 0.99, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-[10%] top-[10%] h-[55%] w-[55%] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${BLUE_SOFT}0.16) 0%, ${BLUE_SOFT}0.05) 40%, rgba(37,99,235,0) 72%)` }}
          animate={reduceMotion ? undefined : { x: [0, -22, 14, 0], y: [0, 14, -18, 0], scale: [1, 0.98, 1.03, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-25%] left-[25%] h-[50%] w-[50%] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${BLUE_SOFT}0.12) 0%, rgba(37,99,235,0) 70%)` }}
          animate={reduceMotion ? undefined : { y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* architectural grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: reduceMotion ? 0.16 : gridOpacity,
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 85% 70% at 60% 40%, #000 20%, transparent 78%)',
            WebkitMaskImage: 'radial-gradient(ellipse 85% 70% at 60% 40%, #000 20%, transparent 78%)',
          }}
        />

        {/* fine technical lines */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="hero-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(37,99,235,0)" />
              <stop offset="50%" stopColor="rgba(37,99,235,0.7)" />
              <stop offset="100%" stopColor="rgba(37,99,235,0)" />
            </linearGradient>
          </defs>
          <line x1="0" y1="22%" x2="100%" y2="22%" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="0" y1="78%" x2="100%" y2="78%" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="18%" y1="0" x2="18%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="82%" y1="0" x2="82%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <line x1="10%" y1="38%" x2="42%" y2="38%" stroke="url(#hero-line)" strokeWidth="1" />
          <line x1="58%" y1="62%" x2="92%" y2="62%" stroke="url(#hero-line)" strokeWidth="1" />
        </svg>

        {/* subtle vignette / depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_35%_30%,rgba(255,255,255,0.04),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090B]/10 to-[#09090B]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl items-center px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-28 lg:pt-36">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:gap-10 xl:grid-cols-[0.92fr_1.18fr] xl:gap-14">
          <HeroContent />

          <motion.div
            style={reduceMotion ? undefined : { y: visualY, opacity: visualOpacity }}
            className="relative lg:pl-2"
          >
            <HeroIllustration parallaxX={px * 10} parallaxY={py * 8} />
          </motion.div>
        </div>
      </div>

      {/* subtle scroll indicator */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex lg:bottom-8"
        initial={reduceMotion ? false : { opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">Scroll</span>
        <span className="relative h-10 w-[1px] overflow-hidden rounded-full bg-white/10">
          <motion.span
            className="absolute left-0 top-0 h-4 w-full rounded-full"
            style={{ backgroundColor: BLUE }}
            animate={reduceMotion ? undefined : { y: [0, 18, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>

      {/* transition into next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--color-background)] to-transparent "
      />
    </section>
  );
};

export default Hero;
