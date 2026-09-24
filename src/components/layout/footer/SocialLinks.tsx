import { socialPlatforms } from './footerData';

const SocialLinks = () => {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-white/30">
        Follow Us
      </p>
      <div className="flex flex-wrap gap-2">
        {socialPlatforms.map((platform) => (
          <a
            key={platform.label}
            href={platform.href}
            aria-label={platform.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-[11px] font-semibold text-zinc-500 shadow-xs transition-[transform,color,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/50 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:outline-white/50"
          >
            {platform.initial}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
