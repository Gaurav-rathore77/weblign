import { NextResponse } from 'next/server';
import {
  contactBudgetOptions,
  contactServiceOptions,
  getContactOptionLabel,
} from '@/lib/contact-options';
import { sendInquiryEmail } from '@/lib/email';
import { getDb, isMongoConfigured } from '@/lib/mongodb';
import { saveContactSubmission } from '@/lib/site-content';
import { contactSubmissionSchema } from '@/lib/validators';

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

  const parsed = contactSubmissionSchema.safeParse(body);
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
    fullName: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone,
    company: parsed.data.company,
    service: getContactOptionLabel(
      parsed.data.service,
      contactServiceOptions,
      parsed.data.service,
    ),
    budget: getContactOptionLabel(
      parsed.data.budget,
      contactBudgetOptions,
      parsed.data.budget,
    ),
    details: parsed.data.details,
  };

  try {
    // Touch the connection before writing so a bad URI returns a useful 503.
    await getDb();
    const saved = await saveContactSubmission(submission);

    if (!saved) {
      return NextResponse.json(
        { message: 'Contact storage is temporarily unavailable.' },
        { status: 503 },
      );
    }
  } catch {
    return NextResponse.json(
      { message: 'Contact storage is temporarily unavailable.' },
      { status: 503 },
    );
  }

  const emailStatus = await sendInquiryEmail(submission);
  return NextResponse.json({ ok: true, emailSent: emailStatus === 'sent' });
}
