import { NextResponse } from 'next/server';
import { createAdminSession, verifyAdminCredentials } from '@/lib/auth';
import { adminLoginSchema } from '@/lib/validators';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  const parsed = adminLoginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ message: 'Enter a valid email and password.' }, { status: 400 });
  }

  const valid = await verifyAdminCredentials(parsed.data.email, parsed.data.password);
  if (!valid) {
    return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
  }

  try {
    await createAdminSession(parsed.data.email.toLowerCase());
  } catch {
    return NextResponse.json(
      { message: 'Admin authentication is not configured.' },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
