import { NextResponse } from 'next/server';
import {
  contactBudgetOptions,
  contactServiceOptions,
  getContactOptionLabel,
} from '@/lib/contact-options';
import { sendInquiryEmail } from '@/lib/email';
import { getDb, isMongoConfigured } from '@/lib/mongodb';
import { saveContactSubmission } from '@/lib/site-content';
import { generalContactSchema } from '@/lib/validators';

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

  const parsed = generalContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please check the required fields and try again.' },
      { status: 400 },
    );
  }

  if (!isMongoConfigured) {
    return NextResponse.json(
      { message: 'Contact storage is not configured yet.' },
      { status: 503 },
    );
  }

  const submission = {
    fullName: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    company: parsed.data.company || parsed.data.subject,
    service: getContactOptionLabel(
      parsed.data.service || 'General inquiry',
      contactServiceOptions,
      'General inquiry',
    ),
    budget: getContactOptionLabel(
      parsed.data.budget || 'Not specified',
      contactBudgetOptions,
      'Not specified',
    ),
    details: parsed.data.message,
  };

  try {
    await getDb();
    const saved = await saveContactSubmission(submission);

    if (!saved) throw new Error('Database write failed');
  } catch {
    return NextResponse.json(
      { message: 'Contact storage is temporarily unavailable.' },
      { status: 503 },
    );
  }

  const emailStatus = await sendInquiryEmail(submission);
  return NextResponse.json({ ok: true, emailSent: emailStatus === 'sent' });
}
