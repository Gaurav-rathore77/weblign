import { NextResponse } from 'next/server';
import { getDb, isMongoConfigured } from '@/lib/mongodb';
import { newsletterSubscriptionSchema } from '@/lib/validators';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  if (
    body &&
    typeof body === 'object' &&
    'website' in body &&
    typeof body.website === 'string' &&
    body.website.length > 0
  ) {
    return NextResponse.json({ ok: true });
  }

  const parsed = newsletterSubscriptionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  if (!isMongoConfigured) {
    return NextResponse.json(
      { message: 'Newsletter storage is not configured yet.' },
      { status: 503 },
    );
  }

  try {
    const db = await getDb();
    if (!db) throw new Error('Database unavailable');

    await db.collection('newsletter_subscribers').updateOne(
      { email: parsed.data.email.toLowerCase() },
      {
        $set: {
          email: parsed.data.email.toLowerCase(),
          subscribedAt: new Date(),
          active: true,
        },
        $setOnInsert: { createdAt: new Date() },
      },
      { upsert: true },
    );
  } catch {
    return NextResponse.json(
      { message: 'Newsletter storage is temporarily unavailable.' },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
