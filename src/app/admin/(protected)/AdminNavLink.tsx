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

export interface AdminNavItem {
  href: string;
  label: string;
  /** Icon key — resolved on the client, since component references cannot be
   *  serialised across the server/client boundary. */
  icon: 'overview' | 'settings' | 'projects' | 'posts' | 'inquiries';
  exact?: boolean;
}

const icons: Record<AdminNavItem['icon'], LucideIcon> = {
  overview: BarChart3,
  settings: Settings2,
  projects: FolderKanban,
  posts: FileText,
  inquiries: Inbox,
};

export const adminNavItems: AdminNavItem[] = [
  { href: '/admin', label: 'Overview', icon: 'overview', exact: true },
  { href: '/admin/content', label: 'Site content', icon: 'settings' },
  { href: '/admin/library/projects', label: 'Projects', icon: 'projects' },
  { href: '/admin/library/blog-posts', label: 'Blog posts', icon: 'posts' },
  { href: '/admin/inquiries', label: 'Inquiries', icon: 'inquiries' },
];

/**
 * A client island because active-route highlighting needs `usePathname`.
 * The surrounding sidebar shell stays a server component.
 */
export default function AdminNavLink({ item }: { item: AdminNavItem }) {
  const pathname = usePathname();
  const Icon = icons[item.icon];
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