import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import dotenv from 'dotenv';
import { isMockMode } from '@/lib/mock';

dotenv.config();

if (!isMockMode && !process.env.POSTGRES_URL) {
  throw new Error('POSTGRES_URL environment variable is not set');
}

export const client = postgres(process.env.POSTGRES_URL || 'postgresql://mock:mock@localhost:5432/mock');
export const db = drizzle(client, { schema });
