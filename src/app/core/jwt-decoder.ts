import { JsonAnalysis, JsonToken, analyzeJson, renderJson } from './json-formatter';

export const JWT_INPUT_LIMIT = 128 * 1024;
export interface JwtClaim { name: string; raw: string; type: string; description: string; registered: boolean; }
export interface JwtTimeClaim { name: 'exp' | 'nbf' | 'iat'; seconds: number | null; iso: string; error: string; }
export interface JwtReport {
  token: string; hadBearerPrefix: boolean; segments: [string, string, string];
  headerJson: string; payloadJson: string; headerBytes: number; payloadBytes: number;
  headerMembers: JwtClaim[]; claims: JwtClaim[]; algorithm: string; algorithmDescription: string;
  signature: { encoded: string; hex: string; bytes: number; verified: false };
  times: { exp: JwtTimeClaim | null; nbf: JwtTimeClaim | null; iat: JwtTimeClaim | null };
  notes: string[];
}
export interface JwtTimeCard { name: 'exp' | 'nbf' | 'iat'; title: string; state: 'past' | 'future' | 'missing' | 'invalid'; tone: 'neutral' | 'warning' | 'danger' | 'info'; headline: string; detail: string; iso: string; }
const CLAIMS: Record<string, string> = {
  iss: 'Issuer: the party the token says issued it. No issuer allowlist is checked here.',
  sub: 'Subject: the entity the token describes, often a user or service identifier.',
  aud: 'Audience: intended recipient or recipients. No audience match is checked here.',
  exp: 'Expiration: the token must not be accepted at or after this Unix-seconds timestamp.',
  nbf: 'Not before: the token must not be accepted before this Unix-seconds timestamp.',
  iat: 'Issued at: the claimed creation time in Unix seconds.',
  jti: 'JWT ID: a token identifier. Uniqueness and replay protection are not checked here.',
};
const ALGORITHMS: Record<string, string> = { HS256: 'HMAC with SHA-256', HS384: 'HMAC with SHA-384', HS512: 'HMAC with SHA-512', RS256: 'RSA PKCS#1 with SHA-256', RS384: 'RSA PKCS#1 with SHA-384', RS512: 'RSA PKCS#1 with SHA-512', PS256: 'RSA-PSS with SHA-256', PS384: 'RSA-PSS with SHA-384', PS512: 'RSA-PSS with SHA-512', ES256: 'ECDSA with P-256 and SHA-256', ES384: 'ECDSA with P-384 and SHA-384', ES512: 'ECDSA with P-521 and SHA-512', EdDSA: 'Edwards-curve digital signature', none: 'Unsecured token: no signature' };
const own = (record: Record<string, string>, key: string): string | undefined => Object.prototype.hasOwnProperty.call(record, key) ? record[key] : undefined;
function encodeBytes(bytes: Uint8Array): string {
  const parts: string[] = [];
  for (let i = 0; i < bytes.length; i += 32768) parts.push(String.fromCharCode(...bytes.subarray(i, i + 32768)));
  return btoa(parts.join('')).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function decodeSegment(segment: string, label: string, empty = false): Uint8Array {
  if ((!segment && !empty) || !/^[A-Za-z0-9_-]*$/.test(segment) || segment.length % 4 === 1) throw new Error(label + ' is not valid unpadded Base64url. Use the original compact token without spaces or = padding.');
  const text = atob(segment.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - segment.length % 4) % 4));
  const bytes = Uint8Array.from(text, char => char.charCodeAt(0));
  if (encodeBytes(bytes) !== segment) throw new Error(label + ' has non-canonical Base64url padding bits. Check the token for a copy error.');
  return bytes;
}
function jsonSegment(segment: string, label: string): { bytes: number; analysis: JsonAnalysis; formatted: string } {
  const bytes = decodeSegment(segment, label);
  let text: string;
  try { text = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes); }
  catch { throw new Error(label + ' does not contain valid UTF-8 JSON.'); }
  let analysis: JsonAnalysis;
  try { analysis = analyzeJson(text); }
  catch (error) { throw new Error(label + ' JSON: ' + (error instanceof Error ? error.message : 'Invalid JSON.')); }
  if (analysis.stats.root !== 'object') throw new Error(label + ' must be a JSON object, rather than an array or primitive value.');
  return { bytes: bytes.length, analysis, formatted: renderJson(analysis).output };
}
function members(tokens: JsonToken[]): JwtClaim[] {
  const output: JwtClaim[] = [];
  let cursor = 1;
  while (cursor < tokens.length - 1) {
    const name = JSON.parse(tokens[cursor].raw) as string;
    cursor += 2;
    const start = cursor, root = tokens[cursor].type;
    if (root === '{' || root === '[') {
      let depth = 0;
      do { const type = tokens[cursor].type; if (type === '{' || type === '[') depth++; else if (type === '}' || type === ']') depth--; cursor++; } while (depth > 0);
    } else cursor++;
    const description = own(CLAIMS, name);
    output.push({ name, raw: tokens.slice(start, cursor).map(token => token.raw).join(''), type: root === '{' ? 'object' : root === '[' ? 'array' : root, description: description || 'Custom claim: its meaning and validation rules are defined by the application.', registered: !!description });
    if (tokens[cursor]?.type === ',') cursor++;
  }
  return output;
}
function last(claims: JwtClaim[], name: string): JwtClaim | undefined { for (let i = claims.length - 1; i >= 0; i--) if (claims[i].name === name) return claims[i]; return undefined; }
function dateClaim(claim: JwtClaim | undefined, name: 'exp' | 'nbf' | 'iat'): JwtTimeClaim | null {
  if (!claim) return null;
  const seconds = claim.type === 'number' ? Number(claim.raw) : NaN;
  if (!Number.isFinite(seconds) || Math.abs(seconds * 1000) > 8640000000000000) return { name, seconds: null, iso: '', error: name + ' must be a finite NumericDate in Unix seconds within the supported date range. Numeric strings are not converted.' };
  return { name, seconds, iso: new Date(seconds * 1000).toISOString(), error: '' };
}
export function decodeJwt(input: string): JwtReport {
  if (typeof input !== 'string' || input.length > JWT_INPUT_LIMIT) throw new Error('Paste one JWT up to 128 KiB.');
  let token = input.trim();
  const hadBearerPrefix = /^Bearer[ \t]+/i.test(token);
  if (hadBearerPrefix) token = token.replace(/^Bearer[ \t]+/i, '');
  const parts = token.split('.');
  if (parts.length === 5) throw new Error('This is a five-part encrypted JWE. This decoder supports three-part JWS/JWT tokens and cannot decrypt a JWE.');
  if (parts.length !== 3) throw new Error('A compact JWT needs three dot-separated parts: header.payload.signature.');
  const segments = parts as [string, string, string];
  if (segments[0].length > 16384) throw new Error('The encoded header exceeds the 16 KiB limit.');
  const header = jsonSegment(segments[0], 'Header'), headerMembers = members(header.analysis.tokens);
  const alg = last(headerMembers, 'alg');
  if (!alg || alg.type !== 'string' || !(JSON.parse(alg.raw) as string).length) throw new Error('The header needs a non-empty string alg parameter.');
  const algorithm = JSON.parse(alg.raw) as string;
  const b64 = last(headerMembers, 'b64');
  if (b64?.raw === 'false') throw new Error('Unencoded or detached JWS payloads (b64: false) are not supported by this JWT decoder.');
  if (algorithm === 'none' && segments[2]) throw new Error('An unsecured JWT with alg none must have an empty signature segment.');
  if (algorithm !== 'none' && !segments[2]) throw new Error('This token declares a signing algorithm but its signature segment is empty.');
  const payload = jsonSegment(segments[1], 'Payload'), claims = members(payload.analysis.tokens);
  const signature = decodeSegment(segments[2], 'Signature', algorithm === 'none');
  const notes: string[] = [];
  if (hadBearerPrefix) notes.push('A Bearer prefix and surrounding whitespace were removed before decoding.');
  if (algorithm === 'none') notes.push('This is an unsecured JWT. It carries no signature or message authentication code.');
  if (!own(ALGORITHMS, algorithm)) notes.push('The supplied algorithm is not in this decoder’s common-algorithm reference. It is displayed as provided.');
  if (header.analysis.duplicateCount || payload.analysis.duplicateCount) notes.push('Duplicate property names were retained in the JSON views. For repeated top-level parameters or claims, summaries use the last occurrence.');
  if (last(headerMembers, 'crit')) notes.push('A crit header is present. Critical extensions are displayed but are not processed or verified.');
  if (b64 && b64.raw !== 'true') notes.push('The b64 header has an unexpected value. It is not treated as a request to alter payload decoding.');
  for (const name of ['iss', 'sub', 'jti']) { const claim = last(claims, name); if (claim && claim.type !== 'string') notes.push(name + ' is expected to be a string; its supplied JSON value is retained.'); }
  const aud = last(claims, 'aud');
  if (aud && !(aud.type === 'string' || aud.type === 'array' && (JSON.parse(aud.raw) as unknown[]).every(value => typeof value === 'string'))) notes.push('aud is expected to be a string or an array of strings. No audience matching is performed.');
  const times = { exp: dateClaim(last(claims, 'exp'), 'exp'), nbf: dateClaim(last(claims, 'nbf'), 'nbf'), iat: dateClaim(last(claims, 'iat'), 'iat') };
  if (times.exp?.seconds !== null && times.exp?.seconds !== undefined && times.iat?.seconds !== null && times.iat?.seconds !== undefined && times.exp.seconds < times.iat.seconds) notes.push('The expiration claim is earlier than the issued-at claim.');
  if (times.exp?.seconds !== null && times.exp?.seconds !== undefined && times.nbf?.seconds !== null && times.nbf?.seconds !== undefined && times.exp.seconds <= times.nbf.seconds) notes.push('The expiration claim is at or before the not-before claim.');
  return { token, hadBearerPrefix, segments, headerJson: header.formatted, payloadJson: payload.formatted, headerBytes: header.bytes, payloadBytes: payload.bytes, headerMembers, claims, algorithm, algorithmDescription: own(ALGORITHMS, algorithm) || 'Unrecognized algorithm name', signature: { encoded: segments[2], hex: [...signature].map(byte => byte.toString(16).padStart(2, '0')).join(''), bytes: signature.length, verified: false }, times, notes };
}
export function jwtDuration(seconds: number): string {
  let value = Math.floor(Math.abs(seconds));
  if (value < 1) return 'less than 1 second';
  const parts: string[] = [];
  for (const [unit, size] of [['d', 86400], ['h', 3600], ['m', 60], ['s', 1]] as const) {
    const count = Math.floor(value / size); if (count) { parts.push(count + unit); value %= size; } if (parts.length === 2) break;
  }
  return parts.join(' ');
}
export function jwtTimeCards(report: JwtReport, now: number): JwtTimeCard[] {
  if (!Number.isFinite(now) || Math.abs(now) > 8640000000000000) throw new Error('Use a valid comparison time.');
  return (['exp', 'nbf', 'iat'] as const).map(name => {
    const claim = report.times[name], title = { exp: 'Expiration', nbf: 'Not before', iat: 'Issued at' }[name];
    if (!claim) return { name, title, state: 'missing', tone: 'neutral', headline: 'No ' + name + ' claim', detail: 'Not supplied by this token.', iso: '' };
    if (claim.seconds === null) return { name, title, state: 'invalid', tone: 'warning', headline: 'Invalid NumericDate', detail: claim.error, iso: '' };
    const difference = claim.seconds - now / 1000, future = difference > 0;
    if (name === 'exp') return { name, title, state: future ? 'future' : 'past', tone: future ? 'info' : 'danger', headline: future ? 'Expires in ' + jwtDuration(difference) : 'Expired ' + jwtDuration(difference) + ' ago', detail: 'Compared with your device clock. No clock-skew allowance.', iso: claim.iso };
    if (name === 'nbf') return { name, title, state: future ? 'future' : 'past', tone: future ? 'warning' : 'info', headline: future ? 'Starts in ' + jwtDuration(difference) : 'Start time reached', detail: 'This time check does not establish token validity.', iso: claim.iso };
    return { name, title, state: future ? 'future' : 'past', tone: future ? 'warning' : 'info', headline: future ? 'Issued-at is in the future' : 'Issued ' + jwtDuration(difference) + ' ago', detail: future ? jwtDuration(difference) + ' ahead of your device clock.' : 'Claimed age only; the signature is unverified.', iso: claim.iso };
  });
}
export function jwtSample(now = Date.now()): string {
  const seconds = Math.floor(now / 1000);
  const header = encodeBytes(new TextEncoder().encode('{"alg":"HS256","typ":"JWT"}'));
  const payload = encodeBytes(new TextEncoder().encode(JSON.stringify({ iss: 'https://example.com', sub: 'demo-user', aud: ['sample-app'], name: 'Example User', role: 'viewer', iat: seconds, nbf: seconds - 60, exp: seconds + 3600, jti: 'illustrative-sample' })));
  return header + '.' + payload + '.' + encodeBytes(new Uint8Array(32));
}
export function jwtReportJson(report: JwtReport, now: number): string {
  const signature = JSON.stringify({ encoding: 'base64url', value: report.signature.encoded, hex: report.signature.hex, bytes: report.signature.bytes, verified: false }, null, 2);
  const inspection = JSON.stringify({ checkedAt: new Date(now).toISOString(), algorithm: report.algorithm, signatureVerification: 'not performed', temporalChecks: jwtTimeCards(report, now), notes: report.notes }, null, 2);
  const nested = (text: string): string => text.replace(/\n/g, '\n  ');
  return '{\n  "header": ' + nested(report.headerJson) + ',\n  "payload": ' + nested(report.payloadJson) + ',\n  "signature": ' + nested(signature) + ',\n  "inspection": ' + nested(inspection) + '\n}';
}
