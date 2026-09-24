import { compare } from 'bcryptjs';
import { jwtVerify, SignJWT } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getDb } from '@/lib/mongodb';

const ADMIN_COOKIE = 'weblign_admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

export interface AdminSession {
  email: string;
  role: 'admin';
}

function getAuthSecret(): Uint8Array | null {
  const secret = process.env.AUTH_SECRET;
  if (!secret) return null;

  return new TextEncoder().encode(secret);
}

export async function createAdminSession(email: string): Promise<void> {
  const secret = getAuthSecret();
  if (!secret) {
    throw new Error('AUTH_SECRET must be configured.');
  }

  const token = await new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(secret);

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  });
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE)?.value;
  const secret = getAuthSecret();
  if (!token || !secret) return null;

  try {
    const { payload } = await jwtVerify(token, secret, {
      algorithms: ['HS256'],
    });

    if (
      typeof payload.email !== 'string' ||
      payload.role !== 'admin'
    ) {
      return null;
    }

    return { email: payload.email, role: 'admin' };
  } catch {
    return null;
  }
}

export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session) redirect('/admin/login');
  return session;
}

async function comparePassword(password: string, hash: string): Promise<boolean> {
  try {
    return await compare(password, hash);
  } catch {
    return false;
  }
}

export async function verifyAdminCredentials(
  email: string,
  password: string,
): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !password) return false;

  try {
    const db = await getDb();
    if (db) {
      const admin = await db
        .collection<{ email: string; passwordHash: string; active?: boolean }>('admins')
        .findOne({ email: normalizedEmail, active: { $ne: false } });

      if (admin?.passwordHash && (await comparePassword(password, admin.passwordHash))) {
        return true;
      }
    }
  } catch {
    // Fall through to environment credentials so a temporary DB outage
    // does not prevent an explicitly configured administrator from logging in.
  }

  const envEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const envHash = process.env.ADMIN_PASSWORD_HASH;

  if (envEmail === normalizedEmail && envHash) {
    return comparePassword(password, envHash);
  }

  // Plain text passwords are intentionally accepted only in local development.
  if (
    process.env.NODE_ENV !== 'production' &&
    envEmail === normalizedEmail &&
    process.env.ADMIN_PASSWORD === password
  ) {
    return true;
  }

  return false;
}
