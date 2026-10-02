import { MongoClient, type Db } from 'mongodb';

const mongoUri = process.env.MONGODB_URI;
const mongoDbName = process.env.MONGODB_DB || 'weblign';

type MongoGlobal = typeof globalThis & {
  __weblignMongoClientPromise?: Promise<MongoClient>;
  __weblignMongoRetryAfter?: number;
};

export const isMongoConfigured = Boolean(mongoUri);

/** How long to keep the "database is unreachable" flag in place. */
const RETRY_BACKOFF_MS = 30_000;

export async function getDb(): Promise<Db | null> {
  if (!mongoUri) return null;

  const mongoGlobal = globalThis as MongoGlobal;
  if (
    mongoGlobal.__weblignMongoRetryAfter &&
    Date.now() < mongoGlobal.__weblignMongoRetryAfter
  ) {
    return null;
  }

  if (!mongoGlobal.__weblignMongoClientPromise) {
    const client = new MongoClient(mongoUri, {
      maxPoolSize: 10,
      // Kept short on purpose. Content reads always have bundled fallbacks, so
      // a slow or misconfigured database must never hold up a page render.
      serverSelectionTimeoutMS: 1_500,
      connectTimeoutMS: 1_500,
    });

    mongoGlobal.__weblignMongoClientPromise = client.connect().catch((error) => {
      mongoGlobal.__weblignMongoClientPromise = undefined;
      mongoGlobal.__weblignMongoRetryAfter = Date.now() + RETRY_BACKOFF_MS;
      throw error;
    });
  }

  const client = await mongoGlobal.__weblignMongoClientPromise;
  mongoGlobal.__weblignMongoRetryAfter = 0;
  return client.db(mongoDbName);
}
