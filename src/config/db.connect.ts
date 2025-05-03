import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';

dotenv.config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

// Validate environment variables
if (!DB_HOST || !DB_NAME || !DB_USER || !DB_PASSWORD) {
  throw new Error('Missing required database environment variables');
}

// Create a typed Neon database connection
export const sql = neon(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?sslmode=require`);