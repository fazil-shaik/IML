import { neon, Pool } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

// Neon connection string from environment variable
const connectionString = process.env.NEON_DATABASE_URL!;

// Use the binary protocol pool for better compatibility with complex queries
export const neonClient = new Pool({ connectionString });
export const db = drizzle(neonClient);