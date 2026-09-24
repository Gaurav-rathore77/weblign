import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import {
  deleteContactSubmission,
  updateContactSubmission,
} from '@/lib/site-content';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type RouteContext = { params: Promise<{ id: string }> };

export async function PATCH(
  request: Request,
  context: RouteContext,
) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  const { id } = await context.params;
  const body = (await request.json().catch(() => null)) as { status?: unknown } | null;
  if (body?.status !== 'new' && body?.status !== 'read') {
    return NextResponse.json({ message: 'Invalid status.' }, { status: 400 });
  }

  const updated = await updateContactSubmission(id, body.status);
  if (!updated) {
    return NextResponse.json({ message: 'Inquiry not found.' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _request: Request,
  context: RouteContext,
) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  const { id } = await context.params;
  const deleted = await deleteContactSubmission(id);
  if (!deleted) {
    return NextResponse.json({ message: 'Inquiry not found.' }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
