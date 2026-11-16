import { hmac } from '@noble/hashes/hmac.js';
import { sha256 } from '@noble/hashes/sha2.js';

export type SshAlgorithm = 'ed25519' | 'ecdsa' | 'rsa';
export interface SshKeySettings { algorithm: SshAlgorithm; bits: number; comment: string; passphrase: string; }
export interface SshGeneratedKeys {
  algorithm: SshAlgorithm; bits: number; comment: string; encrypted: boolean;
  publicKey: string; fingerprint: string; pem: string; openssh: string | null; ppk: string;
}
export const SSH_KEY_TYPES = [
  { id: 'ed25519' as const, title: 'Ed25519', icon: 'bolt', description: 'Compact keys for modern SSH clients.', badge: 'Recommended' },
  { id: 'ecdsa' as const, title: 'ECDSA', icon: 'polyline', description: 'NIST curves with selectable key sizes.', badge: 'NIST curves' },
  { id: 'rsa' as const, title: 'RSA', icon: 'key', description: 'Broad support across existing systems.', badge: 'Compatibility' },
];
const encoder = new TextEncoder();
const bytes = (value: string) => encoder.encode(value);
const concat = (...parts: Uint8Array[]): Uint8Array<ArrayBuffer> => { const out = new Uint8Array(parts.reduce((n, part) => n + part.length, 0)); let offset = 0; for (const part of parts) { out.set(part, offset); offset += part.length; } return out; };
const u32 = (value: number): Uint8Array<ArrayBuffer> => { const out = new Uint8Array(4); new DataView(out.buffer).setUint32(0, value); return out; };
const str = (value: string | Uint8Array) => { const raw = typeof value === 'string' ? bytes(value) : value; return concat(u32(raw.length), raw); };
const base64 = (value: Uint8Array) => btoa(String.fromCharCode(...value));
const decode = (value: string) => Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
const hex = (value: Uint8Array) => Array.from(value, b => b.toString(16).padStart(2, '0')).join('');
const lines = (value: Uint8Array) => base64(value).match(/.{1,64}/g)!;
const pem = (label: string, value: Uint8Array) => '-----BEGIN ' + label + '-----\n' + lines(value).join('\n') + '\n-----END ' + label + '-----\n';
function mpint(value: Uint8Array): Uint8Array<ArrayBuffer> { let first = 0; while (first < value.length && value[first] === 0) first++; const raw = value.subarray(first); return str(raw[0] & 128 ? concat(new Uint8Array([0]), raw) : raw); }
const random = (length: number) => globalThis.crypto.getRandomValues(new Uint8Array(length));

export function validateSshSettings(input: SshKeySettings): SshKeySettings {
  if (!input || !SSH_KEY_TYPES.some(type => type.id === input.algorithm)) throw new Error('Choose Ed25519, ECDSA or RSA.');
  const sizes = input.algorithm === 'ed25519' ? [256] : input.algorithm === 'ecdsa' ? [256, 384, 521] : [2048, 3072, 4096];
  if (!sizes.includes(input.bits)) throw new Error('Choose a supported key size for this algorithm.');
  if (typeof input.comment !== 'string' || bytes(input.comment).length > 256 || /[\x00-\x1f\x7f-\x9f\u2028\u2029\u202a-\u202e\u2066-\u2069]/u.test(input.comment)) throw new Error('Use a single-line comment up to 256 UTF-8 bytes, without control characters.');
  if (typeof input.passphrase !== 'string' || bytes(input.passphrase).length > 1024 || /[\x00\r\n]/.test(input.passphrase)) throw new Error('Use a passphrase up to 1,024 UTF-8 bytes without NUL or line breaks.');
  return { algorithm: input.algorithm, bits: input.bits, comment: input.comment.trim(), passphrase: input.passphrase };
}
export function sshFilename(value: string): string {
  if (typeof value !== 'string' || !/^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,79}$/.test(value) || /[.]$/.test(value) || /^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(?:\.|$)/i.test(value)) throw new Error('Use a filename of 1–80 letters, numbers, dots, hyphens or underscores; start with a letter or number and avoid reserved device names.');
  return value;
}

// Minimal DER writer for PBES2 / PBKDF2-HMAC-SHA256 / AES-256-CBC PKCS#8.
function der(tag: number, value: Uint8Array): Uint8Array<ArrayBuffer> {
  const size: number[] = []; let n = value.length; do { size.unshift(n & 255); n = Math.floor(n / 256); } while (n);
  return concat(new Uint8Array([tag]), new Uint8Array(value.length < 128 ? [value.length] : [128 | size.length, ...size]), value);
}
const sequence = (...items: Uint8Array[]) => der(0x30, concat(...items));
const oid = (value: number[]) => der(6, new Uint8Array(value));
const integer = (value: number) => { const raw: number[] = []; do { raw.unshift(value & 255); value = Math.floor(value / 256); } while (value); if (raw[0] & 128) raw.unshift(0); return der(2, new Uint8Array(raw)); };
async function encryptedPkcs8(raw: Uint8Array<ArrayBuffer>, password: string): Promise<string> {
  const salt = random(16), iv = random(16), secret = bytes(password);
  try {
    const material = await crypto.subtle.importKey('raw', secret, 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: 600000 }, material, { name: 'AES-CBC', length: 256 }, false, ['encrypt']);
    const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-CBC', iv }, key, raw));
    const prf = sequence(oid([0x2a,0x86,0x48,0x86,0xf7,0x0d,2,9]), der(5, new Uint8Array()));
    const kdf = sequence(oid([0x2a,0x86,0x48,0x86,0xf7,0x0d,1,5,12]), sequence(der(4, salt), integer(600000), prf));
    const cipher = sequence(oid([0x60,0x86,0x48,1,0x65,3,4,1,0x2a]), der(4, iv));
    return pem('ENCRYPTED PRIVATE KEY', sequence(sequence(oid([0x2a,0x86,0x48,0x86,0xf7,0x0d,1,5,13]), sequence(kdf, cipher)), der(4, ciphertext)));
  } finally { secret.fill(0); }
}

async function puttyKey(type: string, comment: string, pub: Uint8Array, privateData: Uint8Array, password: string): Promise<string> {
  const encrypted = !!password, encryption = encrypted ? 'aes256-cbc' : 'none';
  let raw = new Uint8Array(privateData), payload = raw, keyMaterial = new Uint8Array(0), headers: string[] = [];
  const secret = bytes(password);
  try {
    if (encrypted) {
      const salt = random(16);
      const { argon2idAsync } = await import('@noble/hashes/argon2.js');
      keyMaterial = new Uint8Array(await argon2idAsync(secret, salt, { m: 32768, t: 3, p: 1, dkLen: 80, asyncTick: 8, maxmem: 40 * 1024 * 1024 }));
      headers = ['Key-Derivation: Argon2id', 'Argon2-Memory: 32768', 'Argon2-Passes: 3', 'Argon2-Parallelism: 1', 'Argon2-Salt: ' + hex(salt)];
      const padded = concat(raw, random((16 - raw.length % 16) % 16)); raw.fill(0); raw = padded;
      const key = await crypto.subtle.importKey('raw', keyMaterial.subarray(0, 32), 'AES-CBC', false, ['encrypt']);
      // Web Crypto appends PKCS#7; PPK uses the already added random padding.
      // CBC ciphertext blocks before that extra final block are identical.
      const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-CBC', iv: keyMaterial.subarray(32, 48) }, key, raw));
      payload = ciphertext.subarray(0, raw.length);
    }
    const macData = concat(str(type), str(encryption), str(comment), str(pub), str(raw));
    const mac = hmac(sha256, encrypted ? keyMaterial.subarray(48, 80) : new Uint8Array(), macData); macData.fill(0);
    const publicLines = lines(pub), privateLines = lines(payload);
    return ['PuTTY-User-Key-File-3: ' + type, 'Encryption: ' + encryption, 'Comment: ' + comment, 'Public-Lines: ' + publicLines.length, ...publicLines, ...headers, 'Private-Lines: ' + privateLines.length, ...privateLines, 'Private-MAC: ' + hex(mac), ''].join('\n');
  } finally { raw.fill(0); keyMaterial.fill(0); secret.fill(0); }
}

/** Generates and serializes on this device; never performs network or storage operations. */
export async function generateSshKeys(input: SshKeySettings): Promise<SshGeneratedKeys> {
  const settings = validateSshSettings(input), source = globalThis.crypto;
  if (!source?.subtle || !source.getRandomValues) throw new Error('Web Crypto is unavailable. Open this page over HTTPS or localhost in a current browser.');
  const algorithm = settings.algorithm === 'ed25519' ? { name: 'Ed25519' } : settings.algorithm === 'ecdsa' ? { name: 'ECDSA', namedCurve: 'P-' + settings.bits } : { name: 'RSASSA-PKCS1-v1_5', modulusLength: settings.bits, publicExponent: new Uint8Array([1,0,1]), hash: 'SHA-256' };
  let key: CryptoKeyPair;
  try { key = await source.subtle.generateKey(algorithm, true, ['sign', 'verify']) as CryptoKeyPair; }
  catch { throw new Error('This browser could not generate the selected algorithm. Try a current browser or another key type.'); }
  let pkcs8 = new Uint8Array(0), openPrivate = new Uint8Array(0), puttyPrivate = new Uint8Array(0);
  try {
    const jwk = await source.subtle.exportKey('jwk', key.privateKey);
    const component = (name: keyof JsonWebKey) => decode(jwk[name] as string);
    let type: string, pub: Uint8Array;
    if (settings.algorithm === 'ed25519') {
      type = 'ssh-ed25519'; const point = component('x'), seed = component('d');
      pub = concat(str(type), str(point)); openPrivate = concat(str(type), str(point), str(concat(seed, point)));
      // PuTTY stores the Ed25519 seed as a fixed-width little-endian string.
      puttyPrivate = str(seed); seed.fill(0);
    } else if (settings.algorithm === 'ecdsa') {
      const curve = 'nistp' + settings.bits; type = 'ecdsa-sha2-' + curve;
      const point = concat(new Uint8Array([4]), component('x'), component('y')), d = component('d');
      pub = concat(str(type), str(curve), str(point)); puttyPrivate = mpint(d); openPrivate = concat(pub, puttyPrivate); d.fill(0);
    } else {
      type = 'ssh-rsa'; const n = mpint(component('n')), e = mpint(component('e')), d = mpint(component('d')), p = mpint(component('p')), q = mpint(component('q')), qi = mpint(component('qi'));
      pub = concat(str(type), e, n); openPrivate = concat(str(type), n, e, d, qi, p, q); puttyPrivate = concat(d, p, q, qi);
      for (const value of [d,p,q,qi]) value.fill(0);
    }
    const publicKey = type + ' ' + base64(pub) + (settings.comment ? ' ' + settings.comment : '') + '\n';
    const fingerprint = 'SHA256:' + base64(new Uint8Array(await source.subtle.digest('SHA-256', new Uint8Array(pub)))).replace(/=+$/, '');
    pkcs8 = new Uint8Array(await source.subtle.exportKey('pkcs8', key.privateKey));
    const privatePem = settings.passphrase ? await encryptedPkcs8(pkcs8, settings.passphrase) : pem('PRIVATE KEY', pkcs8);
    let openssh: string | null = null;
    if (!settings.passphrase) {
      const check = random(4), section = concat(check, check, openPrivate, str(settings.comment));
      const padding = new Uint8Array((8 - section.length % 8) % 8); for (let i = 0; i < padding.length; i++) padding[i] = i + 1;
      const raw = concat(bytes('openssh-key-v1\0'), str('none'), str('none'), str(''), u32(1), str(pub), str(concat(section, padding)));
      openssh = pem('OPENSSH PRIVATE KEY', raw); section.fill(0); raw.fill(0);
    }
    const ppk = await puttyKey(type, settings.comment, pub, puttyPrivate, settings.passphrase);
    return { algorithm: settings.algorithm, bits: settings.bits, comment: settings.comment, encrypted: !!settings.passphrase, publicKey, fingerprint, pem: privatePem, openssh, ppk };
  } finally { pkcs8.fill(0); openPrivate.fill(0); puttyPrivate.fill(0); }
}
