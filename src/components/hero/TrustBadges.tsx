const TrustBadges = () => {
  return (
    <div>
      <p className="mb-5 text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 dark:text-zinc-500">
        Built with modern tech
      </p>
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-zinc-400 dark:text-zinc-500">
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>Tailwind CSS</span>
        <span>Framer Motion</span>
      </div>
    </div>
  );
};

export default TrustBadges;
