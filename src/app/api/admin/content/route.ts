import { NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/auth';
import {
  isContentCollectionName,
  saveCollection,
} from '@/lib/site-content';
import { contentSchemaForCollection } from '@/lib/validators';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PUT(request: Request) {
  if (!(await getAdminSession())) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  let body: { collection?: string; value?: unknown; published?: boolean };
  try {
    body = (await request.json()) as {
      collection?: string;
      value?: unknown;
      published?: boolean;
    };
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  if (
    !body ||
    typeof body !== 'object' ||
    (body.published !== undefined && typeof body.published !== 'boolean')
  ) {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  if (!body.collection || !isContentCollectionName(body.collection)) {
    return NextResponse.json({ message: 'Unknown content collection.' }, { status: 400 });
  }

  const parsed = contentSchemaForCollection(body.collection).safeParse(body.value);
  if (!parsed.success) {
    return NextResponse.json(
      { message: 'The content shape is invalid for this collection.' },
      { status: 400 },
    );
  }

  if (JSON.stringify(parsed.data).length > 500_000) {
    return NextResponse.json({ message: 'Content is too large.' }, { status: 413 });
  }

  const saved = await saveCollection(
    body.collection,
    parsed.data,
    body.published !== false,
  );
  if (!saved) {
    return NextResponse.json({ message: 'MongoDB is not configured.' }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
