import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import { basename, join } from 'node:path';
import { indexPath, knowledgeFiles, knowledgeRoot } from './config.js';
import { DIMENSIONS, EMBEDDING_MODEL } from './provider.js';
import { ApiError, type Chunk, type KnowledgeIndex, type VectorChunk } from './types.js';

const safeHosts = new Set(['xcellhost.cloud', 'www.xcellhost.cloud', 'xcellhost.top', 'www.xcellhost.top']);
export function safeSourceUrl(value: string): boolean {
  try { const url = new URL(value); return url.protocol === 'https:' && !url.username && !url.password && !url.port && safeHosts.has(url.hostname); }
  catch { return false; }
}
const urlsIn = (text: string): string[] => [...new Set((text.match(/https:\/\/[^\s<>"\]]+/g) ?? [])
  .map(url => url.replace(/[.,;:)]+$/, '')).filter(safeSourceUrl))];
export const hash = (text: string): string => createHash('sha256').update(text).digest('hex');

export function chunkDocument(text: string, file: string, maxLength = 1800): Chunk[] {
  if (/\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}/.test(text)) throw new Error('Knowledge input contains a credential pattern; remove it before indexing.');
  const chunks: Chunk[] = [];
  let title = basename(file, '.txt');
  let lines: string[] = [];
  const flush = (): void => {
    const content = lines.join('\n').trim(); lines = [];
    if (!content) return;
    const sourceUrls = urlsIn(content);
    // Split at paragraph/line boundaries, retaining the section's source URLs on continuations.
    let buffer = '';
    const emit = (): void => {
      if (!buffer.trim()) return;
      const text = `${title}\n${buffer.trim()}`;
      chunks.push({ id: hash(file + '\n' + text).slice(0, 24), title, file, text, urls: sourceUrls });
      buffer = '';
    };
    for (const paragraph of content.split(/\n\s*\n|\n(?=- )/)) {
      const parts = paragraph.length > maxLength ? paragraph.match(new RegExp(`[\\s\\S]{1,${maxLength}}`, 'g')) ?? [] : [paragraph];
      for (const part of parts) { if (buffer.length + part.length > maxLength) emit(); buffer += (buffer ? '\n\n' : '') + part; }
    }
    emit();
  };
  for (const rawLine of text.replace(/\r/g, '').split('\n')) {
    const line = rawLine.trim();
    // Catalogue entries are complete, independent records; never mix neighbouring services.
    if (file.includes('Catalogue') && /Source: https:\/\//.test(line)) {
      flush();
      const previousTitle = title; title = line.split(/\s[—–]\s/)[0] ?? title;
      lines = [line]; flush(); title = previousTitle; continue;
    }
    const heading = line.length > 3 && line.length < 150 && !line.includes('http') &&
      (/^SECTION [A-Z]\b/.test(line) || /^\d+\.\s+[A-Z][A-Z\s/&()–—-]+$/.test(line) ||
       (/[A-Z]/.test(line) && line === line.toUpperCase() && !line.startsWith('-')));
    if (heading) { flush(); title = line.replace(/^\d+\.\s*/, ''); }
    else lines.push(rawLine);
  }
  flush();
  return chunks;
}

export async function readKnowledge(): Promise<{ chunks: Chunk[]; files: KnowledgeIndex['files'] }> {
  const chunks: Chunk[] = [], files: KnowledgeIndex['files'] = [];
  for (const name of knowledgeFiles) {
    const text = await readFile(join(knowledgeRoot, name), 'utf8');
    files.push({ name, hash: hash(text) }); chunks.push(...chunkDocument(text, name));
  }
  return { chunks, files };
}

export function cosine(a: number[], b: number[]): number {
  if (a.length !== b.length || !a.length) return 0;
  let dot = 0, aa = 0, bb = 0;
  for (let i = 0; i < a.length; i++) { const x = a[i]!, y = b[i]!; dot += x * y; aa += x * x; bb += y * y; }
  return aa && bb ? dot / Math.sqrt(aa * bb) : 0;
}
const terms = (text: string): Set<string> => new Set(text.toLowerCase().replace(/\bm365\b/g, 'microsoft 365').replace(/\bdpdpa?\b/g, 'dpdp compliance')
  .match(/[a-z0-9]{2,}/g)?.filter(word => !['the', 'about', 'tell', 'what', 'which', 'from', 'with', 'for', 'and', 'can', 'how', 'help', 'our', 'your', 'xcellhost'].includes(word)) ?? []);

export function retrieve(chunks: VectorChunk[], vector: number[], query: string, maxChunks = 6, budget = 10000): Chunk[] {
  const queryTerms = terms(query);
  const ranked = chunks.map(chunk => {
    const words = terms(chunk.text), titleWords = terms(chunk.title);
    const overlap = [...queryTerms].filter(word => words.has(word)).length / Math.max(1, queryTerms.size);
    const titleMatch = [...queryTerms].filter(word => titleWords.has(word)).length / Math.max(1, queryTerms.size);
    const semantic = cosine(vector, chunk.vector);
    return { chunk, semantic, overlap, score: semantic * .75 + overlap * .15 + titleMatch * .1 };
  }).filter(hit => hit.semantic >= .3 || hit.overlap >= .5).sort((a, b) => b.score - a.score);
  const selected: Chunk[] = []; let used = 0;
  for (const hit of ranked) {
    if (selected.length >= maxChunks) break;
    if (used + hit.chunk.text.length > budget || selected.some(chunk => chunk.id === hit.chunk.id)) continue;
    used += hit.chunk.text.length;
    const { vector: _vector, ...chunk } = hit.chunk; selected.push(chunk);
  }
  return selected;
}

export class KnowledgeStore {
  private cached?: KnowledgeIndex;
  private modified = 0;
  constructor(private readonly path = indexPath) {}
  async load(): Promise<KnowledgeIndex> {
    try {
      const info = await stat(this.path);
      if (this.cached && info.mtimeMs === this.modified) return this.cached;
      const value = JSON.parse(await readFile(this.path, 'utf8')) as KnowledgeIndex;
      if (value.version !== 1 || value.model !== EMBEDDING_MODEL || value.dimensions !== DIMENSIONS || !Array.isArray(value.chunks) || !value.chunks.length ||
        value.chunks.some(chunk => typeof chunk.text !== 'string' || !Array.isArray(chunk.urls) || !chunk.urls.every(safeSourceUrl) ||
          !Array.isArray(chunk.vector) || chunk.vector.length !== DIMENSIONS || !chunk.vector.every(Number.isFinite))) throw new Error('Invalid index');
      this.cached = value; this.modified = info.mtimeMs; return value;
    } catch { throw new ApiError(503, 'knowledge_unavailable', 'XcellGenie’s knowledge is being prepared. Please contact our team or try again later.'); }
  }
}
