const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'Laravel',
  'Tailwind CSS',
  'REST API',
  'SEO',
  'Vercel',
];

const TechMarquee = () => {
  const items = [...techStack, ...techStack];

  return (
    <div className="relative border-y border-zinc-100 bg-white py-5">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        We build with modern technology
      </p>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track items-center gap-3 pr-3">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium text-zinc-600"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
