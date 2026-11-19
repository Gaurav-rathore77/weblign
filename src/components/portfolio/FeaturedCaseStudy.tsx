import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongRight, HiOutlineChatBubbleLeftRight, HiOutlineCheck } from 'react-icons/hi2';
import { getFeaturedProject } from '@/lib/site-content';
import { getWhatsAppUrlFor } from '@/lib/whatsapp';

const FeaturedCaseStudy = async () => {
  const p = await getFeaturedProject();
  const shortTitle = p.title.split('—')[0].trim();
  const features = p.features?.length
    ? p.features.slice(0, 4)
    : [
        p.description,
        `Addresses: ${p.problem}`,
        `Solution: ${p.solution}`,
      ];

  return (
    <div className="portfolio-featured-panel relative isolate overflow-hidden rounded-2xl border border-zinc-200/80 shadow-2xl shadow-zinc-900/20 ">
      <div className="absolute inset-0 -z-10">
        {p.image ? (
          <Image
            src={p.image}
            alt={`${shortTitle} project screenshot`}
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: p.gradient }} />
        )}
        <div className="absolute inset-0 opacity-90" style={{ background: p.gradient }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative flex flex-col gap-5 p-5 sm:gap-6 sm:p-8 lg:max-w-3xl lg:p-12">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            Featured case study
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
            {p.category}
          </span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Project overview</p>
          <h3 className="mt-1 text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
            {p.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/85 sm:text-base">{p.overview}</p>
        </div>

        <dl className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-white">Challenge</dt>
            <dd className="mt-2 text-sm leading-relaxed text-white/80">{p.problem}</dd>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-white">Solution</dt>
            <dd className="mt-2 text-sm leading-relaxed text-white/80">{p.solution}</dd>
          </div>
        </dl>

        <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white">Key features</span>
          <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-white/85">
                <HiOutlineCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80">Technology</span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {(p.technologies?.length ? p.technologies : p.tech).map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href={p.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <span>Visit live site</span>
            <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Discuss Your Project
          </Link>
          <a
            href={getWhatsAppUrlFor('consultation', p.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-emerald-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>
        <span className="text-xs text-white/70">Actual project screenshot and existing project information</span>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;