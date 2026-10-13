import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { indexPath, readApiKey } from './config.js';
import { readKnowledge } from './knowledge.js';
import { DIMENSIONS, EMBEDDING_MODEL, OpenAiProvider } from './provider.js';
import type { KnowledgeIndex, VectorChunk } from './types.js';

async function rebuild(): Promise<void> {
  const source = await readKnowledge();
  if (process.argv.includes('--dry-run')) {
    console.info(`Knowledge validated: ${source.files.length} files, ${source.chunks.length} heading-based chunks. No provider calls made.`); return;
  }
  const key = readApiKey();
  if (!key) throw new Error('Add OPENAI_API_KEY to server/.env, then run npm run ai:index.');
  const provider = new OpenAiProvider(key);
  let previous: KnowledgeIndex | undefined;
  try { previous = JSON.parse(await readFile(indexPath, 'utf8')) as KnowledgeIndex; } catch { /* First build. */ }
  const reusable = new Map((previous?.model === EMBEDDING_MODEL && previous.dimensions === DIMENSIONS ? previous.chunks : [])
    .filter(chunk => chunk.vector?.length === DIMENSIONS && chunk.vector.every(Number.isFinite)).map(chunk => [chunk.id, chunk.vector]));
  const pending = source.chunks.filter(chunk => !reusable.has(chunk.id));
  for (let i = 0; i < pending.length; i += 32) {
    const batch = pending.slice(i, i + 32);
    const vectors = await provider.embed(batch.map(chunk => chunk.text));
    batch.forEach((chunk, j) => reusable.set(chunk.id, vectors[j]!));
    console.info(`Embedded ${Math.min(i + 32, pending.length)} of ${pending.length} changed chunks.`);
  }
  const chunks: VectorChunk[] = source.chunks.map(chunk => ({ ...chunk, vector: reusable.get(chunk.id)! }));
  const index: KnowledgeIndex = { version: 1, model: EMBEDDING_MODEL, dimensions: DIMENSIONS, builtAt: new Date().toISOString(), files: source.files, chunks };
  await mkdir(dirname(indexPath), { recursive: true });
  const temporary = indexPath + `.${process.pid}.tmp`;
  await writeFile(temporary, JSON.stringify(index), { mode: 0o600 });
  await rename(temporary, indexPath);
  console.info(`Knowledge index saved: ${chunks.length} chunks. Unchanged vectors reused.`);
}
rebuild().catch(() => {
  // Never print raw provider errors, environment values or credentials.
  console.error('Index build failed. Check server/.env, knowledge files and OpenAI access, then retry. The previous index remains intact.');
  process.exitCode = 1;
});
