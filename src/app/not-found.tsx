import Link from 'next/link';
import {
  HiOutlineArrowLongRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineHome,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const quickLinks = [
  { href: '/', label: 'Home', icon: HiOutlineHome },
  { href: '/services', label: 'Services', icon: HiOutlineSquares2X2 },
  { href: '/portfolio', label: 'Portfolio', icon: HiOutlineArrowLongRight },
  { href: '/contact', label: 'Contact', icon: HiOutlineArrowLongRight },
];

export default function NotFound() {
  return (
    <div className="relative isolate overflow-hidden bg-white ">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(37,99,235,0.18),transparent_60%),radial-gradient(ellipse_45%_40%_at_85%_20%,rgba(59,130,246,0.12),transparent_60%),radial-gradient(ellipse_45%_40%_at_15%_80%,rgba(37,99,235,0.10),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.045] "
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(37,99,235,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.35) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, #000 35%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, #000 35%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-8rem)] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary   ">
          Page not found
        </p>

        <div className="relative mt-6">
          <span
            aria-hidden="true"
            className="select-none text-[clamp(5.5rem,18vw,11rem)] font-semibold leading-none tracking-[-0.06em] text-transparent"
            style={{ WebkitTextStroke: '1px rgba(37,99,235,0.22)' }}
          >
            404
          </span>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-2xl "
          />
        </div>

        <h1 className="mt-2 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-4xl lg:text-5xl ">
          This page isn&apos;t in our{' '}
          <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
            digital blueprint
          </span>
          .
        </h1>

        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg ">
          The link may be outdated or the page may have moved. You can head back home, explore our services, or reach out directly — we&apos;re here to help.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-18px_rgba(37,99,235,0.85)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
          >
            <HiOutlineHome className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-zinc-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary      sm:w-auto"
          >
            Discuss Your Project
            <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={getWhatsAppUrlFor('consultation')}
            target="_blank"
            rel="noopener noreferrer"
            data-track-event="whatsapp_click"
            data-track-label="404_page"
            data-track-location="not_found"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/70 px-7 py-3.5 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-100/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500     sm:w-auto"
          >
            <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-12 w-full max-w-3xl rounded-2xl border border-zinc-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm   sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 ">
            Quick links
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-transparent px-3 py-2.5 text-sm font-medium text-zinc-700 transition-all duration-200 hover:border-primary/15 hover:bg-primary/5 hover:text-primary   "
              >
                <Icon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
