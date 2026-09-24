import { MongoClient, type Db } from 'mongodb';

const mongoUri = process.env.MONGODB_URI;
const mongoDbName = process.env.MONGODB_DB || 'weblign';

type MongoGlobal = typeof globalThis & {
  __weblignMongoClientPromise?: Promise<MongoClient>;
  __weblignMongoRetryAfter?: number;
};

export const isMongoConfigured = Boolean(mongoUri);

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
      serverSelectionTimeoutMS: 5_000,
      connectTimeoutMS: 5_000,
    });

    mongoGlobal.__weblignMongoClientPromise = client.connect().catch((error) => {
      mongoGlobal.__weblignMongoClientPromise = undefined;
      mongoGlobal.__weblignMongoRetryAfter = Date.now() + 30_000;
      throw error;
    });
  }

  const client = await mongoGlobal.__weblignMongoClientPromise;
  mongoGlobal.__weblignMongoRetryAfter = 0;
  return client.db(mongoDbName);
}
