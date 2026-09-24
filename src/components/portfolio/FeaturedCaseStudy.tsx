import Image from 'next/image';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { getFeaturedProject } from '@/lib/site-content';

const FeaturedCaseStudy = async () => {
  const p = await getFeaturedProject();
  const initials = p.title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-xl shadow-zinc-900/5">
      <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-0 items-stretch">
        {/* Left: Image area */}
        <div className="relative aspect-[3/4] min-h-[280px] overflow-hidden lg:min-h-[500px]">
          {p.image ? (
            <>
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Light gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br" style={{ background: p.gradient }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br" style={{ background: p.gradient }} />
          )}

          {/* Brand placeholder */}
          <div className="absolute inset-0 flex items-end p-8 sm:p-10">
            <div className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/90 px-4 py-2.5 backdrop-blur-md shadow-lg">
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary"
              >
                {initials}
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900">{p.title.split(' — ')[0]}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Featured Case Study</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content - matches image height */}
        <div className="relative flex flex-col h-full">
          <div className="flex flex-col h-full p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col flex-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Featured Project</span>
              <h3 className="mt-2 text-2xl font-bold text-zinc-900 sm:text-3xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{p.description}</p>

              {/* Challenge / Solution / Outcome */}
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-500">Challenge</span>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">{p.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Solution</span>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">{p.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Outcome</span>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">{p.results[0]}</p>
                </div>
              </div>

              {/* Client quote */}
              <div className="mt-5 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4">
                <blockquote className="text-sm leading-relaxed text-zinc-600 italic">
                  &ldquo;{p.testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                    {p.testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-zinc-900">{p.testimonial.name}</span>
                    <span className="text-zinc-400"> — {p.testimonial.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA at bottom */}
            <div className="mt-8 pt-6 border-t border-zinc-100">
              <a
                href={p.demoUrl}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
              >
                Read Full Case Study
                <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCaseStudy;
