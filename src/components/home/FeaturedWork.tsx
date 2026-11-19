import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowLongRight, HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';
import Reveal from '@/components/common/Reveal';
import type { Project } from '@/components/portfolio/portfolioData';

const FeaturedWork = ({ projects }: { projects: Project[] }) => {
  const featured = projects;

  return (
    <section id="work" className="scroll-mt-24 bg-white py-20 sm:py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Featured work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl ">
              Real projects, thoughtfully built
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600 ">
              A selection of projects from our portfolio, showcasing websites,
              platforms, and digital experiences delivered for different business needs.
            </p>
          </div>
          <Link
            href="/portfolio"
            prefetch={false}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-primary  "
          >
            View all projects
            <HiOutlineArrowLongRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-primary)]  ">
                <div className={`relative aspect-[16/10] overflow-hidden bg-zinc-100 ${!project.image ? `bg-gradient-to-br ${project.gradient || 'from-primary/20 to-accent/20'}` : ''}`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt || `${project.title} screenshot`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-end p-5 sm:p-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">Live project</p>
                        <p className="mt-1 text-lg font-semibold text-white">{project.title}</p>
                      </div>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/20 via-transparent to-transparent" />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-500 ">
                    <span className="rounded-full bg-white px-2.5 py-1 text-zinc-700 ring-1 ring-zinc-200   ">
                      {project.category}
                    </span>
                    {project.tech.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-full px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-950 ">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-zinc-600 ">
                    {project.description}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500 ">
                    {project.overview}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
                      >
                        Visit project
                        <HiOutlineArrowTopRightOnSquare className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      </a>
                    ) : null}
                    <Link
                      href="/portfolio"
                      prefetch={false}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 hover:text-zinc-950  "
                    >
                      View case details
                      <HiOutlineArrowLongRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
