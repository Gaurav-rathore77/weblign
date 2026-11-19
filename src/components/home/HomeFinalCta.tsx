'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { HiOutlineArrowRight, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const HomeFinalCta = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#05070F] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-[15%] -top-[20%] h-[60%] w-[60%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.28), rgba(37,99,235,0) 70%)' }}
          animate={reduceMotion ? undefined : { x: [0, 30, -10, 0], y: [0, 20, 0, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-[10%] top-[10%] h-[55%] w-[55%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.22), rgba(59,130,246,0) 72%)' }}
          animate={reduceMotion ? undefined : { x: [0, -25, 10, 0], y: [0, 15, -10, 0], scale: [1, 0.97, 1.04, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[25%] h-[45%] w-[45%] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.18), rgba(37,99,235,0) 72%)' }}
          animate={reduceMotion ? undefined : { y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(37,99,235,0.16),rgba(13,18,32,0.92)_35%,rgba(7,10,18,0.98)_70%,rgba(59,130,246,0.12))] px-6 py-12 text-center shadow-[0_30px_90px_-40px_rgba(0,0,0,0.85)] sm:px-10 sm:py-16 lg:px-16 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-70"
            style={{
              padding: 1,
              background:
                'linear-gradient(135deg, rgba(59,130,246,0.35), rgba(255,255,255,0.04), rgba(59,130,246,0.28))',
              WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-40 w-[70%] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200"
          >
            Let’s build together
          </motion.p>

          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-5 text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.02]"
          >
            Let&apos;s Build Something That Moves{' '}
            <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 bg-clip-text text-transparent">
              Your Business Forward.
            </span>
          </motion.h2>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="relative mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 sm:text-lg"
          >
            Tell us about your idea, challenge, or growth goal — and we&apos;ll help you shape the right digital solution.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link
              href="/contact"
              prefetch={false}
              data-track-event="service_cta_click"
              data-track-label="home_final_cta"
              data-track-location="home_final_cta"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_18px_40px_-18px_rgba(255,255,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-18px_rgba(255,255,255,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Discuss Your Project
              <HiOutlineArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
            <a
              href={getWhatsAppUrlFor('consultation')}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="whatsapp_click"
              data-track-label="home_final_cta"
              data-track-location="home_final_cta"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              <HiOutlineChatBubbleLeftRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFinalCta;
