'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  BarChart3,
  FileText,
  FolderKanban,
  Inbox,
  Settings2,
  type LucideIcon,
} from 'lucide-react';

/**
 * Icons are looked up from this map on the client rather than passed across the
 * server -> client boundary as components — a React component is a function,
 * and only plain serialisable objects can cross that boundary.
 */
const ICONS: Record<AdminNavIcon, LucideIcon> = {
  overview: BarChart3,
  content: Settings2,
  projects: FolderKanban,
  'blog-posts': FileText,
  inquiries: Inbox,
};

export type AdminNavIcon =
  | 'overview'
  | 'content'
  | 'projects'
  | 'blog-posts'
  | 'inquiries';

export interface AdminNavItem {
  href: string;
  label: string;
  icon: AdminNavIcon;
  exact?: boolean;
}

/**
 * Split into a client island because active-route highlighting needs
 * `usePathname`. The sidebar shell around it stays a server component.
 */
export default function AdminNavLink({ item }: { item: AdminNavItem }) {
  const pathname = usePathname();
  const Icon = ICONS[item.icon];
  const active = item.exact
    ? pathname === item.href
    : (pathname ?? '').startsWith(item.href);

  return (
    <Link
      href={item.href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition',
        active
          ? 'bg-primary text-white shadow-sm shadow-primary/20'
          : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white',
      )}
    >
      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      {item.label}
    </Link>
  );
}