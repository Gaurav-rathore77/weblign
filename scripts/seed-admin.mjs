import { hash } from 'bcryptjs';
import { MongoClient } from 'mongodb';
import nextEnv from '@next/env';

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const uri = process.env.MONGODB_URI;
const email = (process.argv[2] || process.env.ADMIN_EMAIL || '').trim().toLowerCase();
const password = process.argv[3] || process.env.ADMIN_PASSWORD;

if (!uri || !email || !password) {
  console.error(
    'Usage: set MONGODB_URI and run npm run admin:seed -- admin@example.com "your-password"',
  );
  process.exit(1);
}

if (password.length < 8) {
  console.error('Password must be at least 8 characters.');
  process.exit(1);
}

const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10_000 });
try {
  await client.connect();
  const db = client.db(process.env.MONGODB_DB || 'weblign');
  const now = new Date();
  await db.collection('admins').updateOne(
    { email },
    {
      $set: {
        email,
        passwordHash: await hash(password, 12),
        active: true,
        updatedAt: now,
      },
      $setOnInsert: { createdAt: now },
    },
    { upsert: true },
  );
  console.log(`Admin account ready for ${email}`);
} finally {
  await client.close();
}
