export interface Message { role: 'user' | 'assistant'; content: string; }
export interface Source { title: string; url: string; }
export interface Chunk {
  id: string;
  title: string;
  file: string;
  text: string;
  urls: string[];
}
export interface VectorChunk extends Chunk { vector: number[]; }
export interface KnowledgeIndex {
  version: 1;
  model: 'text-embedding-3-small';
  dimensions: number;
  builtAt: string;
  files: { name: string; hash: string }[];
  chunks: VectorChunk[];
}
export interface AiProvider {
  embed(input: string[], signal?: AbortSignal): Promise<number[][]>;
  answer(messages: Message[], chunks: Chunk[], signal?: AbortSignal): Promise<string>;
}
export class ApiError extends Error {
  constructor(readonly status: number, readonly code: string, message: string) { super(message); }
}
