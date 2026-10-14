import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseEnv } from 'node:util';

export const serverRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const knowledgeRoot = resolve(serverRoot, '../outputs');
export const indexPath = resolve(serverRoot, 'data/knowledge-index.json');
export const knowledgeFiles = [
  '01-XcellHost-Cloud-AI-Knowledge-2026-10-13.txt',
  '02-XcellHost-Cloud-Full-Service-Catalogue-2026-10-13.txt',
] as const;

// Credentials are read only from this private file, never Angular or process arguments.
export function readApiKey(): string {
  try { return (parseEnv(readFileSync(resolve(serverRoot, '.env'), 'utf8'))['OPENAI_API_KEY'] ?? '').trim(); }
  catch { return ''; }
}

export function allowedOrigins(): string[] {
  return (process.env['AI_ALLOWED_ORIGINS'] ??
    'https://xcellhost.cloud,https://www.xcellhost.cloud,http://localhost:4200,http://127.0.0.1:4200')
    .split(',').map(origin => origin.trim()).filter(Boolean);
}
