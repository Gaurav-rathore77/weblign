import { NextResponse } from 'next/server';
import { getAssistantReply } from '@/lib/assistant';
import { assistantMessageSchema } from '@/lib/validators';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  const parsed = assistantMessageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'Please enter a valid question.' },
      { status: 400 },
    );
  }

  try {
    const result = await getAssistantReply(
      parsed.data.message,
      parsed.data.history,
    );
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { message: 'The guide is temporarily unavailable. Please try again.' },
      { status: 503 },
    );
  }
}
