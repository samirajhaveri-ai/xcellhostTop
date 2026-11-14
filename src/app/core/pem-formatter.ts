export const PEM_INPUT_LIMIT = 1024 * 1024;
export const PEM_BLOCK_LIMIT = 20;
export interface PemFormatOptions { width: 0 | 64 | 76; lineEnding: 'LF' | 'CRLF'; finalNewline: boolean; }
export interface PemBlockInfo {
  label: string; base64: string; bytes: number; headers: string[]; paddingRestored: boolean;
  kind: string; privateMaterial: boolean; encryptionHint: string;
}
export interface PemFormatResult { output: string; blocks: PemBlockInfo[]; totalBytes: number; outputLines: number; options: PemFormatOptions; }
const WHITE = /^[\t\n\r\f\v ]*$/;
const EMPTY_PREFIX = /^[\t\n\r\f\v ]*/;
function blockInfo(label: string, base64: string, headers: string[], bytes: number, paddingRestored: boolean): PemBlockInfo {
  const privateMaterial = /(?:PRIVATE|SECRET) KEY$/.test(label);
  const kind = label === 'CERTIFICATE' || label === 'TRUSTED CERTIFICATE' ? 'Certificate label' : /REQUEST$/.test(label) ? 'Certificate request label' : privateMaterial ? 'Private-key label' : /PUBLIC KEY$/.test(label) ? 'Public-key label' : /CRL$/.test(label) ? 'Revocation-list label' : 'PEM block';
  const encryptionHint = label === 'ENCRYPTED PRIVATE KEY' ? 'Encrypted PKCS#8 label' : headers.length ? 'Legacy encryption headers retained' : label === 'OPENSSH PRIVATE KEY' ? 'OpenSSH encryption not inspected' : privateMaterial ? 'Encryption not inspected' : '';
  return { label, base64, bytes, headers, paddingRestored, privateMaterial, kind, encryptionHint };
}
/** Checks the text envelope and Base64 only; does not parse or modify the encoded object. */
export function parsePemBlocks(input: string): PemBlockInfo[] {
  if (typeof input !== 'string' || input.length > PEM_INPUT_LIMIT) throw new Error('Use PEM text up to 1 MiB.');
  if (new TextEncoder().encode(input).length > PEM_INPUT_LIMIT) throw new Error('Use PEM text up to 1 MiB.');
  const source = input.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  if (WHITE.test(source)) throw new Error('Paste a complete PEM block or choose a PEM text file.');
  if (/^\s*PuTTY-User-Key-File-/.test(source)) throw new Error('This is a PuTTY PPK file. Formatting PEM does not convert PPK key containers.');
  const blocks: PemBlockInfo[] = [];
  let cursor = 0;
  while (cursor < source.length) {
    cursor += EMPTY_PREFIX.exec(source.slice(cursor))![0].length;
    if (cursor === source.length) break;
    if (blocks.length === PEM_BLOCK_LIMIT) throw new Error('Use at most 20 PEM blocks in one operation.');
    const begin = /^-----BEGIN ([A-Z0-9 -]{1,64})-----/.exec(source.slice(cursor));
    if (!begin || !/^[A-Z0-9]+(?:[ -][A-Z0-9]+)*$/.test(begin[1])) throw new Error('Expected a BEGIN boundary with an uppercase PEM label. Remove text outside the PEM blocks.');
    const label = begin[1], endMarker = '-----END ' + label + '-----';
    const start = cursor + begin[0].length, end = source.indexOf(endMarker, start);
    if (end === -1) throw new Error('PEM block ' + (blocks.length + 1) + ' is missing its matching END boundary.');
    const body = source.slice(start, end);
    if (/-----BEGIN |-----END /.test(body)) throw new Error('PEM block ' + (blocks.length + 1) + ' contains nested or mismatched boundaries.');
    const lines = body.trim().split('\n'), headers: string[] = [];
    const found = new Map<string, string>();
    while (lines.length) {
      const first = lines[0].trim();
      if (!first) { lines.shift(); if (found.size) break; continue; }
      const match = /^([A-Za-z][A-Za-z0-9-]*):\s*(.*)$/.exec(first);
      if (!match) break;
      const key = match[1].toLowerCase();
      if (!['proc-type', 'dek-info'].includes(key) || found.has(key)) throw new Error('Unsupported or duplicate PEM header. Only paired Proc-Type and DEK-Info encryption headers are supported.');
      found.set(key, match[2].trim()); lines.shift();
    }
    if (found.size) {
      if (!/^(RSA|DSA|EC) PRIVATE KEY$/.test(label) || found.size !== 2 || !/^4\s*,\s*ENCRYPTED$/i.test(found.get('proc-type') || '') || !/^[A-Z0-9-]+,[0-9a-fA-F]+$/.test(found.get('dek-info') || '')) throw new Error('Legacy encrypted PEM needs a traditional private-key label and paired Proc-Type / DEK-Info headers.');
      headers.push('Proc-Type: ' + found.get('proc-type'), 'DEK-Info: ' + found.get('dek-info'));
    }
    const original = lines.join('\n').replace(/[\t\n\r\f\v ]/g, '');
    if (!original) throw new Error('PEM block ' + (blocks.length + 1) + ' has an empty Base64 body.');
    if (!/^[A-Za-z0-9+/]+={0,2}$/.test(original) || original.length % 4 === 1 || (original.includes('=') && original.length % 4 !== 0)) throw new Error('PEM block ' + (blocks.length + 1) + ' has invalid Base64 characters or padding.');
    const base64 = original + '='.repeat((4 - original.length % 4) % 4);
    let decoded: string;
    try { decoded = atob(base64); if (btoa(decoded) !== base64) throw new Error(); }
    catch { throw new Error('PEM block ' + (blocks.length + 1) + ' has invalid or non-canonical Base64 data.'); }
    blocks.push(blockInfo(label, base64, headers, decoded.length, base64 !== original));
    cursor = end + endMarker.length;
  }
  return blocks;
}
export function formatPem(input: string, options: PemFormatOptions): PemFormatResult {
  if (![0, 64, 76].includes(options.width) || !['LF', 'CRLF'].includes(options.lineEnding) || typeof options.finalNewline !== 'boolean') throw new Error('Choose a supported line width and newline format.');
  const blocks = parsePemBlocks(input), eol = options.lineEnding === 'LF' ? '\n' : '\r\n';
  if (options.width !== 64 && blocks.some(block => block.headers.length)) throw new Error('Legacy encrypted PEM requires 64-character wrapping for compatibility. Choose 64 characters.');
  const formatted = blocks.map(block => {
    const lines = ['-----BEGIN ' + block.label + '-----'];
    if (block.headers.length) lines.push(...block.headers, '');
    if (options.width === 0) lines.push(block.base64);
    else for (let offset = 0; offset < block.base64.length; offset += options.width) lines.push(block.base64.slice(offset, offset + options.width));
    lines.push('-----END ' + block.label + '-----');
    return lines.join(eol);
  });
  const output = formatted.join(eol + eol) + (options.finalNewline ? eol : '');
  return { output, blocks, totalBytes: blocks.reduce((sum, block) => sum + block.bytes, 0), outputLines: output.split(eol).length - (options.finalNewline ? 1 : 0), options: { ...options } };
}
