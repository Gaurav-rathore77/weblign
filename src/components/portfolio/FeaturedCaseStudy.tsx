import Image from 'next/image';
import Link from 'next/link';
import {
  HiOutlineArrowLongRight,
  HiOutlineCheck,
} from 'react-icons/hi2';
import { getFeaturedProject } from '@/lib/site-content';

const FeaturedCaseStudy = async () => {
  const p = await getFeaturedProject();
  const shortTitle = p.title.split('—')[0].trim();
  const initials = p.title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const pillars = [
    { label: 'The challenge', body: p.problem, dot: 'bg-red-500' },
    { label: 'The solution', body: p.solution, dot: 'bg-emerald-500' },
  ];

  return (
    <div className="portfolio-featured-panel relative isolate overflow-hidden rounded-2xl border border-zinc-200/80 shadow-2xl shadow-zinc-900/20 dark:border-zinc-800">
      {/* ── Background image layer ── */}
      <div className="absolute inset-0 -z-10">
        {p.image ? (
          <Image
            src={p.image}
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: p.gradient }} />
        )}

        {/* Brand tint over the photo, tied to the project gradient. */}
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: p.gradient }}
        />

        {/* Mobile-first scrim: strong at the bottom where the text sits,
            light at the top so the photo still reads as a photo. */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* ── Content layer ── */}
      <div className="relative flex flex-col gap-5 p-5 sm:gap-6 sm:p-8 lg:max-w-3xl lg:p-12">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Featured Project
          </span>

          {p.metrics && (
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
              {p.metrics}
            </span>
          )}
        </div>

        {/* Identity */}
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-sm font-bold text-white backdrop-blur-md"
          >
            {initials}
          </span>
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wider text-white/70">
              {p.category}
            </p>
            <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
              {shortTitle}
            </h3>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-white/80 sm:text-base">
          {p.description}
        </p>

        {/* Tech chips */}
        {p.tech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Challenge / Solution — stacked, readable on every width. */}
        <dl className="grid gap-3 sm:grid-cols-2">
          {pillars.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"
            >
              <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-white">
                <span className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
                {item.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-white/75">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>

        {/* Outcomes */}
        {p.results.length > 0 && (
          <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
              Outcomes
            </span>
            <ul className="mt-2.5 grid gap-2">
              {p.results.slice(0, 3).map((result) => (
                <li
                  key={result}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85"
                >
                  <HiOutlineCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Quote */}
        <figure className="border-l-2 border-white/40 pl-4">
          <blockquote className="text-sm leading-relaxed text-white/85 italic">
            &ldquo;{p.testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-2 text-xs text-white/65">
            <span className="font-semibold text-white">{p.testimonial.name}</span>
            <span> — {p.testimonial.role}</span>
          </figcaption>
        </figure>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
            href={p.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span className="relative z-10">Visit Live Site</span>
            <HiOutlineArrowLongRight
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
              aria-hidden="true"
            />
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
              aria-hidden="true"
            />
          </Link>

          <span className="text-xs text-white/60">{p.timeline} build</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;