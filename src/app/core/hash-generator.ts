import { md5, sha1 } from '@noble/hashes/legacy.js';
import { sha256, sha384, sha512 } from '@noble/hashes/sha2.js';
import { sha3_256 } from '@noble/hashes/sha3.js';
import { blake2b } from '@noble/hashes/blake2.js';

export const HASH_ALGORITHMS = [
  { id: 'MD5', bits: 128, description: 'Legacy compatibility only', kind: 'legacy' },
  { id: 'SHA-1', bits: 160, description: 'Legacy compatibility only', kind: 'legacy' },
  { id: 'SHA-256', bits: 256, description: 'Widely used for integrity checks', kind: 'modern' },
  { id: 'SHA-384', bits: 384, description: 'A longer SHA-2 digest', kind: 'modern' },
  { id: 'SHA-512', bits: 512, description: '512-bit SHA-2 digest', kind: 'modern' },
  { id: 'SHA3-256', bits: 256, description: 'SHA-3, not Keccak-256', kind: 'modern' },
  { id: 'BLAKE2b-512', bits: 512, description: 'Unkeyed 512-bit BLAKE2b', kind: 'modern' },
  { id: 'CRC32', bits: 32, description: 'Error detection, not security', kind: 'checksum' },
] as const;
export type HashAlgorithm = typeof HASH_ALGORITHMS[number]['id'];
export type HashFormat = 'hex' | 'hex-upper' | 'base64';
export interface HashDigest { algorithm: HashAlgorithm; bytes: Uint8Array; }
export const HASH_TEXT_LIMIT = 5 * 1024 * 1024;
export const HASH_FILE_LIMIT = 100 * 1024 * 1024;
const CHUNK_SIZE = 256 * 1024;
interface IncrementalHash { update(bytes: Uint8Array): unknown; digest(): Uint8Array; destroy(): void; }

// Reflected CRC-32/ISO-HDLC: polynomial 0x04C11DB7, initial/final XOR 0xFFFFFFFF.
const CRC_TABLE = Uint32Array.from({ length: 256 }, (_, byte) => {
  let value = byte;
  for (let bit = 0; bit < 8; bit++) value = (value >>> 1) ^ ((value & 1) ? 0xedb88320 : 0);
  return value >>> 0;
});
function crc32(): IncrementalHash {
  let state = 0xffffffff;
  return {
    update(bytes) { for (const byte of bytes) state = CRC_TABLE[(state ^ byte) & 255] ^ (state >>> 8); },
    digest() { const out = new Uint8Array(4); new DataView(out.buffer).setUint32(0, (state ^ 0xffffffff) >>> 0, false); return out; },
    destroy() { state = 0; },
  };
}
function algorithmList(selected: readonly HashAlgorithm[]): HashAlgorithm[] {
  if (!Array.isArray(selected) || !selected.length) throw new Error('Select at least one hash algorithm.');
  if (selected.some(id => !HASH_ALGORITHMS.some(item => item.id === id))) throw new Error('Choose a supported hash algorithm.');
  return HASH_ALGORITHMS.filter(item => selected.includes(item.id)).map(item => item.id);
}
function createHash(id: HashAlgorithm): IncrementalHash {
  switch (id) {
    case 'MD5': return md5.create();
    case 'SHA-1': return sha1.create();
    case 'SHA-256': return sha256.create();
    case 'SHA-384': return sha384.create();
    case 'SHA-512': return sha512.create();
    case 'SHA3-256': return sha3_256.create();
    case 'BLAKE2b-512': return blake2b.create({ dkLen: 64 });
    case 'CRC32': return crc32();
  }
}
export function encodeHashText(text: string): Uint8Array {
  if (text.length > HASH_TEXT_LIMIT) throw new Error('Text is too large. Use at most 5 MiB of UTF-8 text.');
  const bytes = new TextEncoder().encode(text);
  if (bytes.length > HASH_TEXT_LIMIT) throw new Error('Text is too large. Use at most 5 MiB of UTF-8 text.');
  return bytes;
}
export function formatHash(bytes: Uint8Array, format: HashFormat): string {
  if (format === 'base64') return btoa(String.fromCharCode(...bytes));
  const value = Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
  if (format === 'hex') return value;
  if (format === 'hex-upper') return value.toUpperCase();
  throw new Error('Choose hexadecimal or Base64 output.');
}
/** Digest exactly the provided bytes, including an empty input. */
export function hashBytes(bytes: Uint8Array, selected: readonly HashAlgorithm[]): HashDigest[] {
  const hashes = algorithmList(selected).map(algorithm => ({ algorithm, hash: createHash(algorithm) }));
  try { return hashes.map(({ algorithm, hash }) => { hash.update(bytes); return { algorithm, bytes: hash.digest() }; }); }
  finally { hashes.forEach(({ hash }) => hash.destroy()); }
}
/** Bounded slices keep file reads small and yield between chunks so Cancel remains usable. */
export async function hashBlob(blob: Blob, selected: readonly HashAlgorithm[], options: { signal?: AbortSignal; onProgress?: (percent: number) => void } = {}): Promise<HashDigest[]> {
  if (blob.size > HASH_FILE_LIMIT) throw new Error('This tool supports files up to 100 MiB. Choose a smaller file.');
  const hashes = algorithmList(selected).map(algorithm => ({ algorithm, hash: createHash(algorithm) }));
  const checkAbort = () => { if (options.signal?.aborted) throw new DOMException('Hashing cancelled.', 'AbortError'); };
  try {
    checkAbort();
    for (let offset = 0; offset < blob.size; offset += CHUNK_SIZE) {
      checkAbort();
      const bytes = new Uint8Array(await blob.slice(offset, offset + CHUNK_SIZE).arrayBuffer());
      try { checkAbort(); hashes.forEach(({ hash }) => hash.update(bytes)); }
      finally { bytes.fill(0); }
      options.onProgress?.(Math.min(100, Math.floor((offset + CHUNK_SIZE) / blob.size * 100)));
      await new Promise<void>(resolve => setTimeout(resolve, 0));
    }
    checkAbort();
    const output = hashes.map(({ algorithm, hash }) => ({ algorithm, bytes: hash.digest() }));
    options.onProgress?.(100);
    return output;
  } finally { hashes.forEach(({ hash }) => hash.destroy()); }
}
