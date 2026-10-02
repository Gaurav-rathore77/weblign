'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const ADMIN_PREFIX = '/admin';

interface PublicChromeProps {
  /** Rendered above <main>. Supplied by the server layout. */
  nav: ReactNode;
  /** Rendered below <main>. Supplied by the server layout. */
  footer: ReactNode;
  children: ReactNode;
}

/**
 * Public site chrome — navbar, concierge, scroll progress, footer — belongs on
 * marketing pages only. On the admin dashboard it adds noise and burns vertical
 * space, so those routes render bare.
 *
 * The chrome is passed in as ReactNode props rather than imported here so the
 * navbar and footer stay server components and never enter the client bundle.
 * `usePathname` is what forces this thin wrapper to be a client component.
 */
export default function PublicChrome({ nav, footer, children }: PublicChromeProps) {
  const pathname = usePathname();
  const isAdmin =
    pathname === ADMIN_PREFIX || pathname.startsWith(`${ADMIN_PREFIX}/`);

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {nav}
      <main className="flex-1 pt-16">{children}</main>
      {footer}
    </>
  );
}