import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import { saveSiteSettings } from '@/lib/site-content';
import { siteSettingsSchema } from '@/lib/validators';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PUT(request: Request) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  let body: { settings?: unknown };
  try {
    body = (await request.json()) as { settings?: unknown };
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  const parsed = siteSettingsSchema.safeParse(body.settings);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please provide valid website settings.' },
      { status: 400 },
    );
  }

  const serialized = JSON.stringify(parsed.data);
  if (serialized.length > 200_000) {
    return NextResponse.json({ message: 'Settings are too large.' }, { status: 413 });
  }

  const saved = await saveSiteSettings(parsed.data);
  if (!saved) {
    return NextResponse.json({ message: 'MongoDB is not configured.' }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
