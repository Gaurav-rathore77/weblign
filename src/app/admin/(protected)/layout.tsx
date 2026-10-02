import { requireAdmin } from '@/lib/auth';
import AdminShell from './AdminShell';

export default async function ProtectedAdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await requireAdmin();

  return <AdminShell email={session.email}>{children}</AdminShell>;
}