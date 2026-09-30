import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { HiStar } from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import { projects } from '@/components/portfolio/portfolioData';

const TestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-zinc-50/30 to-white py-16 sm:py-20">
      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800"
        aria-hidden="true"
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.05),transparent_28%),radial-gradient(circle_at_25%_85%,rgba(56,189,248,0.05),transparent_25%)] dark:opacity-80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* ── Section Header ── */}
          <Reveal className="mx-auto max-w-2xl text-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-1.5 text-sm font-medium text-primary">
                <HiOutlineChatBubbleLeftRight className="h-4 w-4" aria-hidden="true" />
                Client Love
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Trusted by Founders{' '}
              <span className="text-zinc-500">Across India</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Real feedback from real partnerships — here&apos;s what the people
              we&apos;ve built for have to say about working with us.
            </p>
          </Reveal>

          {/* ── Testimonial Cards ── */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 0.08}>
                <figure className="card-glow group flex h-full flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-xs">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <HiStar key={s} className="h-4 w-4 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-5">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-accent/15 text-sm font-bold text-primary"
                      aria-hidden="true"
                    >
                      {project.testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-zinc-900">
                        {project.testimonial.name}
                      </div>
                      <div className="truncate text-xs text-zinc-400">
                        {project.testimonial.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
