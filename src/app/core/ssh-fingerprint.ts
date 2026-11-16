import { md5 } from '@noble/hashes/legacy.js';
import { sha256, sha512 } from '@noble/hashes/sha2.js';

export const SSH_PUBLIC_KEY_LIMIT = 64 * 1024;
export const SSH_FINGERPRINT_HASHES = ['SHA256', 'SHA512', 'MD5'] as const;
export type SshFingerprintHash = typeof SSH_FINGERPRINT_HASHES[number];
export interface SshFingerprint { algorithm: SshFingerprintHash; value: string; hex: string; legacy: boolean; }
export interface SshPublicKeyReport {
  type: string; algorithm: 'Ed25519' | 'ECDSA' | 'RSA'; bits: number; curve: string; comment: string;
  options: string; bytes: number; publicKey: string; fingerprints: SshFingerprint[]; warnings: string[];
}
const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8', { fatal: true });
const allowedTypes = ['ssh-rsa', 'ssh-ed25519', 'ecdsa-sha2-nistp256', 'ecdsa-sha2-nistp384', 'ecdsa-sha2-nistp521'];
const hex = (bytes: Uint8Array) => Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
const base64 = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes));

function decodeBase64(value: string): Uint8Array<ArrayBuffer> {
  if (!/^[A-Za-z0-9+/]+={0,2}$/.test(value) || value.length % 4 === 1 || (value.includes('=') && value.length % 4 !== 0)) throw new Error('The public key has invalid Base64 data. Keep the key blob on one line.');
  const padded = value + '='.repeat((4 - value.length % 4) % 4);
  let raw: string;
  try { raw = atob(padded); if (btoa(raw) !== padded) throw new Error(); }
  catch { throw new Error('The public key has non-canonical or invalid Base64 data.'); }
  return Uint8Array.from(raw, c => c.charCodeAt(0));
}

class KeyReader {
  private offset = 0;
  constructor(private readonly bytes: Uint8Array) {}
  field(): Uint8Array<ArrayBuffer> {
    if (this.offset + 4 > this.bytes.length) throw new Error('The SSH public-key blob is truncated.');
    const size = new DataView(this.bytes.buffer, this.bytes.byteOffset + this.offset, 4).getUint32(0); this.offset += 4;
    if (size > this.bytes.length - this.offset) throw new Error('The SSH public-key blob contains a truncated field.');
    const value = new Uint8Array(this.bytes.subarray(this.offset, this.offset + size)); this.offset += size; return value;
  }
  text(): string { try { const value = decoder.decode(this.field()); if (!/^[\x21-\x7e]+$/.test(value)) throw new Error(); return value; } catch { throw new Error('The SSH public-key blob contains an invalid algorithm or curve name.'); } }
  positive(): Uint8Array<ArrayBuffer> {
    const value = this.field();
    if (!value.length || value[0] & 128 || (value[0] === 0 && (value.length === 1 || !(value[1] & 128)))) throw new Error('The SSH public-key blob contains an invalid or non-canonical positive integer.');
    return value[0] === 0 ? value.slice(1) : value;
  }
  end(): void { if (this.offset !== this.bytes.length) throw new Error('The SSH public-key blob has unexpected trailing fields.'); }
}

// One optional authorized_keys options token; quoted values may include spaces.
function firstToken(line: string): { value: string; rest: string } {
  let quoted = false, escaped = false, index = 0;
  for (; index < line.length; index++) {
    const c = line[index];
    if (escaped) { escaped = false; continue; }
    if (c === '\\' && quoted) { escaped = true; continue; }
    if (c === '"') quoted = !quoted;
    if (!quoted && /[ \t]/.test(c)) break;
  }
  if (quoted || escaped) throw new Error('The authorized_keys options have an unterminated quoted value.');
  return { value: line.slice(0, index), rest: line.slice(index).trimStart() };
}
function checkOptions(token: string): void {
  if (token.length > 4096) throw new Error('Use authorized_keys options up to 4,096 characters.');
  const flags = new Set(['restrict','cert-authority','no-agent-forwarding','no-port-forwarding','no-pty','no-user-rc','no-X11-forwarding','agent-forwarding','port-forwarding','pty','user-rc','X11-forwarding','no-touch-required','touch-required','verify-required']);
  const valued = new Set(['command','environment','expiry-time','from','permitlisten','permitopen','principals','tunnel']);
  const entries: string[] = []; let start = 0, quoted = false, escaped = false;
  for (let i = 0; i <= token.length; i++) {
    const c = token[i]; if (escaped) { escaped = false; continue; }
    if (c === '\\' && quoted) { escaped = true; continue; } if (c === '"') quoted = !quoted;
    if (i === token.length || (c === ',' && !quoted)) { entries.push(token.slice(start, i)); start = i + 1; }
  }
  if (quoted || !entries.length || entries.some(entry => {
    const match = /^([A-Za-z][A-Za-z0-9-]*)(?:=("(?:[^"\\]|\\.)*"|[^,"\s]+))?$/.exec(entry);
    return !match || (match[2] === undefined ? !flags.has(match[1]) : !valued.has(match[1]));
  })) throw new Error('Use a .pub line or recognized authorized_keys options before the key type. Option values are not executed or semantically validated.');
}

function inputLine(input: string | Uint8Array): { type: string; encoded: string; comment: string; options: string } {
  if (input.length > SSH_PUBLIC_KEY_LIMIT) throw new Error('Use one public key up to 64 KiB.');
  let text: string;
  try { text = typeof input === 'string' ? input : decoder.decode(input); }
  catch { throw new Error('Choose a UTF-8 OpenSSH .pub text file. Binary files are not supported.'); }
  if (encoder.encode(text).length > SSH_PUBLIC_KEY_LIMIT) throw new Error('Use one public key up to 64 KiB.');
  if (/-----BEGIN [A-Z ]*PRIVATE KEY-----|(?:^|\n)PuTTY-User-Key-File-/i.test(text)) throw new Error('Private keys are not accepted. Supply only the OpenSSH public (.pub) key.');
  if (/-----BEGIN|---- BEGIN/.test(text)) throw new Error('Use the single-line OpenSSH .pub format. PEM certificates, SPKI and RFC 4716 wrappers are not supported.');
  text = text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f\u2028\u2029\u202a-\u202e\u2066-\u2069]/u.test(text)) throw new Error('Remove control characters from the public-key text.');
  const lines = text.split('\n').map(line => line.trim()).filter(line => line && !line.startsWith('#'));
  if (lines.length !== 1) throw new Error('Provide exactly one unwrapped OpenSSH public-key line.');
  let first = firstToken(lines[0]), options = '';
  if (!allowedTypes.includes(first.value)) {
    if (/^(?:ssh-|ecdsa-|sk-)/.test(first.value)) throw new Error('Supported keys are RSA, Ed25519 and ECDSA P-256/P-384/P-521. SSH certificates and security-key variants are not supported.');
    checkOptions(first.value); options = first.value; first = firstToken(first.rest);
  }
  if (!allowedTypes.includes(first.value)) throw new Error('Use an RSA, Ed25519 or NIST ECDSA .pub key or authorized_keys line.');
  const match = /^(\S+)(?:[ \t]+(.*))?$/.exec(first.rest);
  if (!match) throw new Error('The public key is missing its Base64 blob.');
  const comment = match[2] || ''; if (encoder.encode(comment).length > 4096) throw new Error('Use a public-key comment up to 4,096 UTF-8 bytes.');
  return { type: first.value, encoded: match[1], comment, options };
}

/** Fingerprint parsed SSH wire bytes, excluding text options, comments and filenames. */
export async function inspectSshPublicKey(input: string | Uint8Array): Promise<SshPublicKeyReport> {
  const line = inputLine(input), raw = decodeBase64(line.encoded), reader = new KeyReader(raw);
  if (reader.text() !== line.type) throw new Error('The text key type does not match the type inside its Base64 blob.');
  let algorithm: SshPublicKeyReport['algorithm'], bits = 0, curve = '';
  const warnings: string[] = [];
  if (line.type === 'ssh-rsa') {
    algorithm = 'RSA'; const exponent = reader.positive(), modulus = reader.positive();
    if (exponent.length > 8 || !(exponent[exponent.length - 1] & 1) || (exponent.length === 1 && exponent[0] < 3)) throw new Error('The RSA public exponent must be an odd integer of at least 3, up to 64 bits.');
    bits = (modulus.length - 1) * 8 + (32 - Math.clz32(modulus[0]));
    if (bits < 512 || bits > 16384 || !(modulus[modulus.length - 1] & 1)) throw new Error('Use an odd RSA modulus between 512 and 16,384 bits.');
    let e = 0n; for (const byte of exponent) e = (e << 8n) | BigInt(byte);
    let n = 0n; for (const byte of modulus) n = (n << 8n) | BigInt(byte);
    if (e >= n) throw new Error('The RSA public exponent must be smaller than its modulus.');
    if (bits < 2048) warnings.push('This RSA modulus is below 2,048 bits. It is fingerprinted for identification; review the destination’s current key policy.');
  } else if (line.type === 'ssh-ed25519') {
    algorithm = 'Ed25519'; bits = 256; curve = 'Ed25519'; const point = reader.field();
    if (point.length !== 32) throw new Error('An Ed25519 SSH public key must contain exactly 32 key bytes.');
    // The compressed y-coordinate must be canonical; this is not a signature or subgroup test.
    let y = BigInt(point[31] & 127); for (let i = 30; i >= 0; i--) y = (y << 8n) | BigInt(point[i]);
    if (y >= (1n << 255n) - 19n || point.every(byte => byte === 0) || y === 1n) throw new Error('The Ed25519 public-key encoding is non-canonical or a trivial point.');
  } else {
    algorithm = 'ECDSA'; const name = reader.text(); bits = Number(line.type.slice('ecdsa-sha2-nistp'.length)); curve = 'P-' + bits;
    if (name !== 'nistp' + bits) throw new Error('The ECDSA curve name does not match the SSH key type.');
    const point = reader.field(), coordinateBytes = Math.ceil(bits / 8);
    if (point.length !== 1 + 2 * coordinateBytes || point[0] !== 4) throw new Error('Use the uncompressed ECDSA public point for the selected NIST curve.');
    if (!globalThis.crypto?.subtle) throw new Error('Web Crypto is required to check the ECDSA point. Use HTTPS or localhost in a current browser.');
    try { await crypto.subtle.importKey('raw', point, { name: 'ECDSA', namedCurve: curve }, false, ['verify']); }
    catch { throw new Error('The ECDSA public point could not be imported on its stated curve.'); }
  }
  reader.end();
  if (line.options) warnings.push('Authorized_keys options were excluded from the fingerprint. Their values and access-control effects were not validated.');
  const hashes = { SHA256: sha256, SHA512: sha512, MD5: md5 };
  const fingerprints = SSH_FINGERPRINT_HASHES.map(hash => {
    const digest = hashes[hash](raw), value = hash === 'MD5' ? 'MD5:' + hex(digest).match(/../g)!.join(':') : hash + ':' + base64(digest).replace(/=+$/, '');
    return { algorithm: hash, value, hex: hex(digest), legacy: hash === 'MD5' };
  });
  return { type: line.type, algorithm, bits, curve, comment: line.comment, options: line.options, bytes: raw.length, publicKey: line.type + ' ' + base64(raw) + (line.comment ? ' ' + line.comment : '') + '\n', fingerprints, warnings };
}

export function compareSshFingerprint(expected: string, row: SshFingerprint): { state: 'empty' | 'invalid' | 'match' | 'mismatch'; message: string } {
  const value = expected.trim(); if (!value) return { state: 'empty', message: '' };
  const invalid = { state: 'invalid' as const, message: 'Enter a complete ' + row.algorithm + ' fingerprint in its SSH display format. The algorithm must match the selected preference.' };
  if (value.length > 256) return invalid;
  const prefix = /^(SHA256|SHA512|MD5):/i.exec(value);
  if (prefix && prefix[1].toUpperCase() !== row.algorithm) return invalid;
  let normalized: string;
  if (row.algorithm === 'MD5') {
    const body = value.replace(/^MD5:/i, ''); if (!/^(?:[0-9a-f]{2}:){15}[0-9a-f]{2}$/i.test(body) && !/^[0-9a-f]{32}$/i.test(body)) return invalid;
    normalized = body.replace(/:/g, '').toLowerCase();
  } else {
    try { const raw = decodeBase64(value.replace(/^(?:SHA256|SHA512):/i, '')); if (raw.length !== (row.algorithm === 'SHA256' ? 32 : 64)) return invalid; normalized = hex(raw); }
    catch { return invalid; }
  }
  return normalized === row.hex ? { state: 'match', message: 'The expected ' + row.algorithm + ' fingerprint matches this public key. Identity still depends on your trusted source.' } : { state: 'mismatch', message: 'The expected ' + row.algorithm + ' fingerprint does not match this public key.' };
}

// RFC 8032 test-vector public key: demonstration only, no private material.
const demo = Uint8Array.from([0,0,0,11,...encoder.encode('ssh-ed25519'),0,0,0,32,...'d75a980182b10ab7d54bfed3c964073a0ee172f3daa62325af021a68f707511a'.match(/../g)!.map(byte => parseInt(byte, 16))]);
export const SSH_PUBLIC_DEMO = 'ssh-ed25519 ' + base64(demo) + ' public-demo@example.invalid\n';
