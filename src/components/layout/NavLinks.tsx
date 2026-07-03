'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, LayoutGroup } from 'framer-motion';
import clsx from 'clsx';
import { navigation } from '@/constants';

const underlineVariants = {
  hover: { scaleX: 1, opacity: 1 },
  idle: { scaleX: 0, opacity: 0 },
};

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <LayoutGroup>
      <ul className="flex items-center gap-1">
        {navigation.main.map((item) => {
          const active = isActive(item.href);
          return (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={clsx(
                  'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200',
                  active
                    ? 'text-primary'
                    : 'text-zinc-600 hover:text-zinc-900',
                )}
                aria-current={active ? 'page' : undefined}
              >
                {item.name}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-0.5 left-2 right-2 h-0.5 rounded-full bg-primary"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                {!active && (
                  <motion.span
                    className="absolute -bottom-0.5 left-2 right-2 h-0.5 origin-center rounded-full bg-zinc-400"
                    variants={underlineVariants}
                    initial="idle"
                    whileHover="hover"
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </LayoutGroup>
  );
};

export default NavLinks;
