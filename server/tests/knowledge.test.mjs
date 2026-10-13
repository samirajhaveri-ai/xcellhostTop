import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { chunkDocument, cosine, KnowledgeStore, readKnowledge, retrieve, safeSourceUrl } from '../dist/knowledge.js';
import { DIMENSIONS } from '../dist/provider.js';

test('heading chunks preserve section URLs across continuations without contaminating products', () => {
  const text = `TALLY ON CLOUD\nSource: https://xcellhost.cloud/tally-on-cloud\n\n${'Managed accounting access. '.repeat(150)}\nCLOUD BACKUP\nSource: https://xcellhost.cloud/cloud-backup\nBackup workloads.`;
  const chunks = chunkDocument(text, 'knowledge.txt');
  assert(chunks.length > 3);
  assert(chunks.every(chunk => chunk.text.length < 2000));
  assert(chunks.filter(chunk => chunk.title === 'TALLY ON CLOUD').every(chunk => chunk.urls[0].endsWith('/tally-on-cloud')));
  assert.equal(chunks.at(-1).urls[0], 'https://xcellhost.cloud/cloud-backup');
});
test('catalogue records are indexed separately, with their own titles and URLs', () => {
  const chunks = chunkDocument('SECTION A — SERVICES\nTally on Cloud — Accounting. Source: https://xcellhost.cloud/tally-on-cloud\nCloud Backup — Backup. Source: https://xcellhost.cloud/cloud-backup', 'Full-Service-Catalogue.txt');
  assert.equal(chunks.length, 2);
  assert.equal(chunks[0].title, 'Tally on Cloud');
  assert.equal(chunks[1].urls.length, 1);
});
test('retrieval uses vector similarity, rejects unrelated context and respects size budgets', () => {
  const chunks = [
    { id: 't', title: 'Tally', text: 'Tally accounting workspace', urls: [], file: 'test', vector: [1, 0] },
    { id: 'b', title: 'Backup', text: 'Backup storage', urls: [], file: 'test', vector: [0, 1] },
  ];
  assert.equal(retrieve(chunks, [1, 0], 'Tally accounting')[0].id, 't');
  assert.equal(retrieve(chunks, [-1, 0], 'unrelated').length, 0);
  assert.equal(retrieve(chunks, [1, 0], 'Tally', 6, 5).length, 0);
  assert.equal(cosine([0, 0], [1, 2]), 0);
});
test('source URLs exclude hostile hosts, credentials and unsafe schemes', () => {
  assert(safeSourceUrl('https://xcellhost.cloud/cloud-backup'));
  for (const url of ['javascript:alert(1)', 'https://xcellhost.cloud.evil.test', 'https://user:pass@xcellhost.cloud/', 'http://xcellhost.cloud/']) assert(!safeSourceUrl(url));
});
test('missing or corrupt persistent indexes fail closed', async () => {
  const root = await mkdtemp(join(tmpdir(), 'genie-index-'));
  const file = join(root, 'index.json');
  try {
    const store = new KnowledgeStore(file);
    await assert.rejects(store.load(), error => error.code === 'knowledge_unavailable');
    await writeFile(file, JSON.stringify({ version: 1, model: 'text-embedding-3-small', dimensions: DIMENSIONS, chunks: [{ text: 'bad', urls: [], vector: [1] }] }));
    await assert.rejects(store.load(), error => error.code === 'knowledge_unavailable');
  } finally { await rm(root, { recursive: true, force: true }); }
});
test('both supplied workspace documents ingest with flagship products and catalogue coverage', async () => {
  const { files, chunks } = await readKnowledge();
  assert.equal(files.length, 2);
  assert(chunks.length > 100);
  assert(chunks.some(chunk => /tally on cloud/i.test(chunk.title)));
  assert(chunks.some(chunk => /microsoft 365/i.test(chunk.title)));
  assert(chunks.some(chunk => /dpdp/i.test(chunk.text)));
});
