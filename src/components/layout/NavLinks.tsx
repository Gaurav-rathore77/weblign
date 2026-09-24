'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { navigation } from '@/constants';

const NavLinks = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <ul className="flex items-center gap-1">
      {navigation.main.map((item) => {
        const active = isActive(item.href);

        return (
          <li key={item.href} className="relative">
            <Link
              href={item.href}
              prefetch={false}
              onMouseEnter={() => router.prefetch(item.href)}
              onFocus={() => router.prefetch(item.href)}
              onPointerDown={() => router.prefetch(item.href)}
              className={clsx(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
                active
                  ? 'text-primary'
                  : 'text-zinc-600 hover:text-zinc-900',
              )}
              aria-current={active ? 'page' : undefined}
            >
              {item.name}
              <span
                className={clsx(
                  'absolute -bottom-0.5 left-2 right-2 h-0.5 origin-center rounded-full transition-transform duration-200',
                  active
                    ? 'scale-x-100 bg-primary'
                    : 'scale-x-0 bg-zinc-400 hover:scale-x-100',
                )}
                aria-hidden="true"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
