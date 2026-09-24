import Link from 'next/link';

const HeroButtons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Link
        href="/contact"
        prefetch={false}
        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3 text-sm font-semibold text-white shadow-lg transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Get Started
      </Link>
      <Link
        href="/portfolio"
        prefetch={false}
        className="inline-flex items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 shadow-xs transition-[transform,color,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
      >
        View Portfolio
      </Link>
    </div>
  );
};

export default HeroButtons;
