import 'reflect-metadata';
import { SubjectAlternativeNameExtension, X509Certificate } from '@peculiar/x509';
import { md5, sha1 } from '@noble/hashes/legacy.js';
import { sha256, sha512 } from '@noble/hashes/sha2.js';

export const CERTIFICATE_INPUT_LIMIT = 256 * 1024;
export const CERTIFICATE_HASHES = ['SHA-256', 'SHA-512', 'SHA-1', 'MD5'] as const;
export type CertificateHash = typeof CERTIFICATE_HASHES[number];
export type CertificateFingerprintFormat = 'colon' | 'hex' | 'base64';
export interface CertificateFingerprint { algorithm: CertificateHash; hex: string; base64: string; legacy: boolean; }
export interface CertificateReport {
  bytes: number; subject: string; issuer: string; serial: string; notBefore: string; notAfter: string;
  keyAlgorithm: string; keyBits: number | null; curve: string; signatureAlgorithm: string;
  names: { type: string; value: string }[]; warnings: string[]; fingerprints: CertificateFingerprint[];
  dateStatus: 'within' | 'expired' | 'not-yet'; checkedAt: string;
}
const parseOptions = { berOptions: { maxDepth: 32, maxNodes: 5000, maxContentLength: CERTIFICATE_INPUT_LIMIT } };

/** Accept exactly one certificate, never a key, CSR, chain or arbitrary decoded bytes. */
export function decodeCertificate(input: string | Uint8Array): Uint8Array {
  if (input.length > CERTIFICATE_INPUT_LIMIT) throw new Error('Use a single certificate up to 256 KiB.');
  let bytes: Uint8Array;
  if (typeof input !== 'string' && input[0] === 0x30) bytes = new Uint8Array(input);
  else {
    let text: string;
    try { text = typeof input === 'string' ? input : new TextDecoder('utf-8', { fatal: true }).decode(input); }
    catch { throw new Error('Choose a PEM certificate or a binary DER certificate file.'); }
    text = text.replace(/^\uFEFF/, '').trim();
    if (!text) throw new Error('Paste a CERTIFICATE PEM block or choose a certificate file.');
    if (/-----BEGIN [A-Z ]*PRIVATE KEY-----/.test(text)) throw new Error('Private keys are not accepted. Use only the public CERTIFICATE block.');
    if (/^(?:ssh-|ecdsa-|sk-)/.test(text)) throw new Error('This is an SSH public key. Use the SSH Key Fingerprint tool linked below.');
    if ((text.match(/-----BEGIN CERTIFICATE-----/g) || []).length > 1) throw new Error('Provide one certificate at a time. Split the certificate chain into individual CERTIFICATE blocks.');
    const match = /^-----BEGIN CERTIFICATE-----\s*([A-Za-z0-9+/=\s]+?)\s*-----END CERTIFICATE-----$/.exec(text);
    if (!match) throw new Error('Use one complete CERTIFICATE PEM block. Keys, certificate requests and PKCS#7/PKCS#12 containers are not supported.');
    const base64 = match[1].replace(/\s/g, '');
    if (!base64 || base64.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(base64)) throw new Error('The certificate contains invalid Base64 data.');
    try { const decoded = atob(base64); if (btoa(decoded) !== base64) throw new Error(); bytes = Uint8Array.from(decoded, character => character.charCodeAt(0)); }
    catch { throw new Error('The certificate contains invalid Base64 data.'); }
  }
  // Verify a definite-length ASN.1 SEQUENCE occupies the entire input before schema parsing.
  if (bytes.length < 4 || bytes[0] !== 0x30) throw new Error('The input is not an X.509 certificate.');
  let length = bytes[1], header = 2;
  if (length & 0x80) {
    const count = length & 0x7f;
    if (count === 0 || count > 3 || 2 + count > bytes.length || bytes[2] === 0) throw new Error('The certificate has an invalid DER length.');
    length = 0; for (let index = 0; index < count; index++) length = length * 256 + bytes[2 + index];
    if (length < 128) throw new Error('The certificate has a non-canonical DER length.');
    header += count;
  }
  if (header + length !== bytes.length) throw new Error('The certificate is truncated or has extra data. Use exactly one complete certificate.');
  return bytes;
}
export function displayCertificateFingerprint(fingerprint: CertificateFingerprint, format: CertificateFingerprintFormat): string {
  switch (format) {
    case 'colon': return fingerprint.hex.match(/../g)!.join(':').toUpperCase();
    case 'hex': return fingerprint.hex.toUpperCase();
    case 'base64': return fingerprint.base64;
  }
}
export function compareCertificateFingerprint(expected: string, fingerprint: CertificateFingerprint): { state: 'empty' | 'invalid' | 'match' | 'mismatch'; message: string } {
  if (!expected.trim()) return { state: 'empty', message: '' };
  const cleaned = expected.trim().replace(/\s/g, '');
  const hex = /^(?:[0-9a-f]{2}:)+[0-9a-f]{2}$/i.test(cleaned) ? cleaned.replace(/:/g, '') : cleaned;
  if (!/^[0-9a-f]+$/i.test(hex) || hex.length !== fingerprint.hex.length) return { state: 'invalid', message: 'Enter a ' + fingerprint.algorithm + ' fingerprint with ' + fingerprint.hex.length + ' hex digits, with or without colons.' };
  return hex.toLowerCase() === fingerprint.hex ? { state: 'match', message: 'The supplied ' + fingerprint.algorithm + ' fingerprint matches.' } : { state: 'mismatch', message: 'The supplied ' + fingerprint.algorithm + ' fingerprint does not match.' };
}
export function inspectCertificate(input: string | Uint8Array, now = new Date()): CertificateReport {
  if (!Number.isFinite(now.getTime())) throw new Error('The device date could not be read.');
  const bytes = decodeCertificate(input);
  let cert: X509Certificate;
  try { cert = new X509Certificate(new Uint8Array(bytes), parseOptions); }
  catch { throw new Error('The certificate structure could not be parsed. Provide a complete X.509 PEM or DER certificate.'); }
  const start = cert.notBefore, end = cert.notAfter;
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime()) || start > end) throw new Error('The certificate has an invalid date range.');
  const warnings: string[] = [];
  let keyAlgorithm = 'Not available', keyBits: number | null = null, curve = '', signatureAlgorithm = 'Not available';
  let names: CertificateReport['names'] = [];
  try {
    const algorithm = cert.publicKey.algorithm as Algorithm & { namedCurve?: string; modulusLength?: number };
    keyAlgorithm = algorithm.name; curve = algorithm.namedCurve || '';
    keyBits = algorithm.modulusLength ?? ({ 'P-256': 256, 'P-384': 384, 'P-521': 521 } as Record<string, number>)[curve] ?? null;
  } catch { warnings.push('Public-key algorithm details could not be decoded. The fingerprint still covers the entire certificate.'); }
  try { const algorithm = cert.signatureAlgorithm; signatureAlgorithm = algorithm.name + (algorithm.hash ? ' / ' + algorithm.hash.name : ''); }
  catch { warnings.push('Signature algorithm details could not be decoded. No signature verification was performed.'); }
  try { names = cert.getExtension(SubjectAlternativeNameExtension)?.names.items.map(name => ({ type: name.type, value: name.value })) ?? []; }
  catch { warnings.push('Certificate extensions could not be fully decoded. Alternative names may be unavailable.'); }
  const functions = { 'MD5': md5, 'SHA-1': sha1, 'SHA-256': sha256, 'SHA-512': sha512 };
  const fingerprints = CERTIFICATE_HASHES.map(algorithm => {
    const digest = functions[algorithm](bytes), hex = Array.from(digest, byte => byte.toString(16).padStart(2, '0')).join('');
    return { algorithm, hex, base64: btoa(String.fromCharCode(...digest)), legacy: algorithm === 'MD5' || algorithm === 'SHA-1' };
  });
  return {
    bytes: bytes.length, subject: cert.subject || '(empty subject)', issuer: cert.issuer || '(empty issuer)', serial: cert.serialNumber.toUpperCase(),
    notBefore: start.toISOString(), notAfter: end.toISOString(), keyAlgorithm, keyBits, curve, signatureAlgorithm, names, warnings, fingerprints,
    dateStatus: now < start ? 'not-yet' : now > end ? 'expired' : 'within', checkedAt: now.toISOString(),
  };
}
