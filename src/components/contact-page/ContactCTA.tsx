import Link from 'next/link';
import {
  HiOutlineArrowLongRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineHashtag,
  HiOutlineBriefcase,
  HiOutlineClipboardDocument,
} from 'react-icons/hi2';
import { socialLinks } from '@/constants';

const channels = [
  {
    icon: HiOutlineChatBubbleLeftRight,
    label: 'Live Chat',
    desc: 'Mon–Fri, 10 AM – 6 PM IST',
    href: '/contact',
  },
  {
    icon: HiOutlineHashtag,
    label: 'X (Twitter)',
    desc: '@Info_weblign',
    href: socialLinks.twitter,
    external: true,
  },
  {
    icon: HiOutlineBriefcase,
    label: 'LinkedIn',
    desc: '/company/weblign',
    href: socialLinks.linkedin,
    external: true,
  },
  {
    icon: HiOutlineClipboardDocument,
    label: 'Contact Form',
    desc: 'Fastest response',
    href: '#inquiry-form',
  },
];

const cardClassName =
  'group inline-flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const ContactCTA = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/[0.04] to-accent/10 p-8 text-center shadow-lg sm:p-12 dark:from-primary/20 dark:via-primary/10 dark:to-accent/20">
      {/* Decorative glows + dot pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-glow-pulse absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="animate-glow-pulse absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"
          style={{ animationDelay: '1.5s' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25px 25px, currentColor 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
          Prefer Another Channel?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
          Reach out however works best for you. We&rsquo;re here to help.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {channels.map((ch) => {
            const Icon = ch.icon;
            const content = (
              <>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.06] text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-primary group-hover:text-white"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="text-left">
                  <div className="font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-primary">
                    {ch.label}
                  </div>
                  <div className="text-xs font-normal text-zinc-500">{ch.desc}</div>
                </div>
                <HiOutlineArrowLongRight
                  className="ml-2 h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </>
            );

            return ch.external ? (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
              >
                {content}
              </a>
            ) : (
              <Link key={ch.label} href={ch.href} className={cardClassName}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
