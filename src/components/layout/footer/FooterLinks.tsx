import Link from 'next/link';
import clsx from 'clsx';

interface LinkItem {
  label: string;
  href: string;
  badge?: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
  delay?: number;
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-zinc-800 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={clsx(
                'group relative inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors duration-200 hover:text-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:text-white/40 dark:hover:text-white/80 dark:focus-visible:outline-white/50',
                link.badge && 'pointer-events-none opacity-60',
              )}
              aria-disabled={!!link.badge}
              tabIndex={link.badge ? -1 : undefined}
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-px left-0 h-px w-0 bg-zinc-300 transition-all duration-300 group-hover:w-full dark:bg-white/60" />
              </span>
              {link.badge && (
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-medium text-zinc-400 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/30">
                  {link.badge}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
