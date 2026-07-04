'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 shadow-lg sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative">
        <h3 className="text-base font-semibold text-white">Stay Updated</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/40">
          Subscribe to receive updates about our services and latest technology
          insights.
        </p>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 text-sm text-emerald-400"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Subscribed successfully!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3">
            <div className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Email Address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/25 shadow-xs backdrop-blur-sm transition-all duration-200 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#fff] px-4 py-2.5 text-sm font-semibold text-black shadow-xs transition-all duration-300 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {status === 'loading' ? (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
            <p className="text-xs leading-relaxed text-white/20">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default Newsletter;
