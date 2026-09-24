import { NextResponse } from 'next/server';
import { getProjects } from '@/lib/site-content';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const project = (await getProjects()).find((item) => item.id === id);

  if (!project) {
    return NextResponse.json({ message: 'Project not found.' }, { status: 404 });
  }

  return NextResponse.json(project);
}
