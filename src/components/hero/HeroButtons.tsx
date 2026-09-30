import Link from 'next/link';

const HeroButtons = ({
  primaryLabel,
  secondaryLabel,
}: {
  primaryLabel: string;
  secondaryLabel: string;
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/contact"
        prefetch={false}
        className="btn-shine group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <span className="relative z-10">{primaryLabel}</span>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </Link>
      <Link
        href="/portfolio"
        prefetch={false}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 shadow-xs transition-[transform,color,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
      >
        <span className="relative z-10">{secondaryLabel}</span>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      </Link>
    </div>
  );
};

export default HeroButtons;
