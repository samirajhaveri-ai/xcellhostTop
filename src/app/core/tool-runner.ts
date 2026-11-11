import { SiteTool } from '../data/tools.data';

export interface ToolResult {
  summary: string;
  text: string;
  notice?: string;
  records?: { name: string; type: string; ttl: number; value: string }[];
}
const encoder = new TextEncoder();
const decoder = new TextDecoder('utf-8', { fatal: true });
const hex = (bytes: Uint8Array) => [...bytes].map(n => n.toString(16).padStart(2, '0')).join('');
const bytes64 = (bytes: Uint8Array) => { let s = ''; for (const b of bytes) s += String.fromCharCode(b); return btoa(s); };
const unbase64 = (s: string) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));
const digest = async (bytes: Uint8Array, algorithm = 'SHA-256') => new Uint8Array(await crypto.subtle.digest(algorithm, Uint8Array.from(bytes).buffer));
const result = (text: string, summary = 'Result ready', notice?: string): ToolResult => ({ text, summary, notice });
function required(value: string, name = 'Input'): string { if (!value.trim()) throw Error(name + ' is required.'); return value.trim(); }
function singleLine(value: string): string { if (/[\r\n\x00]/.test(value)) throw Error('Use a single line for each field.'); return value; }
function host(value: string): string {
  value = required(value, 'Domain');
  const name = new URL(value.includes('://') ? value : 'https://' + value).hostname.replace(/\.$/, '');
  if (name.length > 253 || !name.includes('.') || !name.split('.').every(p => /^(?:[a-z0-9_]|[a-z0-9_][a-z0-9_-]{0,61}[a-z0-9_])$/i.test(p))) throw Error('Enter a valid fully qualified domain name.');
  return name;
}
function ipv4(value: string): number[] {
  if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(value)) throw Error('Enter a valid IPv4 address.');
  const parts = value.split('.').map(Number); if (parts.some(n => n > 255)) throw Error('IPv4 octets must be between 0 and 255.'); return parts;
}
const ipText = (n: number) => [24, 16, 8, 0].map(shift => (n >>> shift) & 255).join('.');
function randomText(length: number, alphabet: string): string {
  let output = ''; const cutoff = 256 - (256 % alphabet.length);
  while (output.length < length) for (const n of crypto.getRandomValues(new Uint8Array(Math.max(32, length)))) {
    if (n < cutoff && output.length < length) output += alphabet[n % alphabet.length];
  }
  return output;
}
function pem(value: string): { label: string; bytes: Uint8Array } {
  const match = value.trim().match(/^-----BEGIN ([A-Z0-9 ]+)-----\s*([A-Za-z0-9+/=\s]+)\s*-----END \1-----$/);
  if (!match) throw Error('Paste one complete PEM block, including its BEGIN and END lines.');
  const bytes = unbase64(match[2].replace(/\s/g, '')); if (!bytes.length) throw Error('The PEM body is empty.'); return { label: match[1], bytes };
}
const wrapPem = (label: string, bytes: Uint8Array) => `-----BEGIN ${label}-----\n${bytes64(bytes).match(/.{1,64}/g)!.join('\n')}\n-----END ${label}-----`;
const xml = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
function csvParse(input: string): string[][] {
  const rows: string[][] = []; let row: string[] = [], value = '', quoted = false, closed = false;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (quoted) { if (c === '"') { if (input[i + 1] === '"') { value += '"'; i++; } else { quoted = false; closed = true; } } else value += c; }
    else if (c === '"' && !value && !closed) quoted = true;
    else if (c === ',') { row.push(value); value = ''; closed = false; }
    else if (c === '\r' || c === '\n') { if (c === '\r' && input[i + 1] === '\n') i++; row.push(value); rows.push(row); row = []; value = ''; closed = false; }
    else { if (closed || c === '"') throw Error('Invalid CSV quoting.'); value += c; }
  }
  if (quoted) throw Error('CSV contains an unclosed quoted field.');
  if (value || row.length || closed) { row.push(value); rows.push(row); }
  return rows;
}
interface DnsResponse { Status: number; AD?: boolean; Answer?: { name: string; type: number; TTL: number; data: string }[]; }
async function dnsQuery(name: string, type: string): Promise<DnsResponse> {
  const url = new URL('https://dns.google/resolve');
  url.search = new URLSearchParams({ name, type, do: 'true', edns_client_subnet: '0.0.0.0/0' }).toString();
  const response = await fetch(url, { signal: AbortSignal.timeout(12000) });
  if (!response.ok) throw Error('The DNS resolver could not complete the request. Please try again.');
  const data: DnsResponse = await response.json();
  if (![0, 3].includes(data.Status)) throw Error(`DNS lookup failed (resolver status ${data.Status}).`);
  return data;
}
async function runDns(tool: SiteTool, v: Record<string, string>): Promise<ToolResult> {
  let name = tool.dns === 'PTR' ? ipv4(required(v['input'])).reverse().join('.') + '.in-addr.arpa' : host(v['input']);
  let types = [tool.dns!];
  if (tool.dns === 'all') types = ['A', 'AAAA', 'MX', 'TXT', 'CNAME', 'NS', 'SOA', 'CAA'];
  if (tool.dns === 'select') types = [v['type'] || 'A'];
  if (['SPF', 'DMARC', 'DKIM', 'BIMI'].includes(tool.dns!)) {
    if (tool.dns === 'DMARC') name = '_dmarc.' + name;
    if (tool.dns === 'DKIM' || tool.dns === 'BIMI') {
      const selector = required(v['selector'], 'Selector'); if (!/^[a-z0-9_-]{1,63}$/i.test(selector)) throw Error('Use letters, numbers, hyphens or underscores in the selector.');
      name = selector + (tool.dns === 'DKIM' ? '._domainkey.' : '._bimi.') + name;
    }
    types = ['TXT'];
  }
  if (tool.dns === 'DNSSEC') types = ['A'];
  if (tool.dns === 'EMAIL') {
    const [mx, txt, dmarc] = await Promise.all([dnsQuery(name, 'MX'), dnsQuery(name, 'TXT'), dnsQuery('_dmarc.' + name, 'TXT')]);
    const text = [
      'MX: ' + (mx.Answer?.filter(a => a.type === 15).map(a => a.data).join(', ') || 'Not found'),
      'SPF: ' + (txt.Answer?.filter(a => /v=spf1/i.test(a.data)).map(a => a.data).join('\n') || 'Not found'),
      'DMARC: ' + (dmarc.Answer?.filter(a => /v=DMARC1/i.test(a.data)).map(a => a.data).join('\n') || 'Not found'),
    ].join('\n\n');
    return result(text, 'Email DNS records checked', 'This checks published DNS records, not deliverability, inbox placement or DKIM signatures.');
  }
  const responses = await Promise.all(types.map(t => dnsQuery(name, t)));
  const typeNames: Record<number, string> = { 1: 'A', 28: 'AAAA', 15: 'MX', 16: 'TXT', 5: 'CNAME', 2: 'NS', 6: 'SOA', 257: 'CAA', 12: 'PTR', 46: 'RRSIG' };
  let answers = responses.flatMap(r => r.Answer || []);
  if (tool.dns === 'SPF') answers = answers.filter(a => a.type === 16 && /v=spf1/i.test(a.data));
  if (['DMARC', 'DKIM', 'BIMI'].includes(tool.dns!)) answers = answers.filter(a => a.type === 16);
  const records = [...new Map(answers.map(a => [JSON.stringify(a), { name: a.name, type: typeNames[a.type] || String(a.type), ttl: a.TTL, value: a.data }])).values()];
  if (tool.dns === 'DNSSEC') {
    if (responses[0].Status === 3) return result('The resolver reported NXDOMAIN (name does not exist).', 'Domain not found');
    return result(responses[0].AD ? 'Google Public DNS authenticated this response with DNSSEC.' : 'The resolver did not authenticate this response. The domain may be unsigned; this is not proof of a validation failure.', responses[0].AD ? 'DNSSEC authenticated' : 'Response not authenticated');
  }
  return { summary: records.length ? `${records.length} DNS answer(s)` : 'No matching DNS records found', records, text: records.map(r => `${r.name}\t${r.type}\t${r.ttl}\t${r.value}`).join('\n') || (responses.some(r => r.Status === 3) ? 'The resolver reported NXDOMAIN (name does not exist).' : 'No matching answer was returned.') };
}

export async function runSiteTool(tool: SiteTool, values: Record<string, string>): Promise<ToolResult> {
  const v = values;
  if (Object.values(v).some(s => s.length > 250000)) throw Error('Limit each input to 250,000 characters.');
  const n = (key: string) => { const field = tool.fields.find(f => f.key === key)!; const value = Number(v[key]); if (!Number.isInteger(value) || value < field.min! || value > field.max!) throw Error(`${field.label} must be between ${field.min} and ${field.max}.`); return value; };
  const input = v['input'] || '';
  if (tool.dns) return runDns(tool, v);
  switch (tool.id) {
    case 'caa-generator': return result(`${host(input)}. IN CAA 0 ${v['tag'] === 'issuewild' ? 'issuewild' : 'issue'} "${host(v['authority'])}"`);
    case 'password-generator': {
      const length = n('length'), lower = 'abcdefghijkmnopqrstuvwxyz', upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ', digits = '23456789', symbols = '!@#$%&*+-=?';
      let value: string; do { value = randomText(length, lower + upper + digits + symbols); } while (![lower, upper, digits, symbols].every(group => [...value].some(c => group.includes(c))));
      return result(value, 'Password generated locally');
    }
    case 'hash-generator': return result(hex(await digest(encoder.encode(input), v['algorithm'])), v['algorithm'] + ' digest');
    case 'certificate-fingerprint': { const p = pem(input); if (p.label !== 'CERTIFICATE') throw Error('Paste a CERTIFICATE PEM block.'); return result(hex(await digest(p.bytes)).match(/../g)!.join(':').toUpperCase(), 'SHA-256 certificate fingerprint', 'A fingerprint identifies the supplied bytes; it does not validate the certificate or trust chain.'); }
    case 'pem-formatter': { const p = pem(input); return result(wrapPem(p.label, p.bytes), `${p.label} · ${p.bytes.length} decoded bytes`, 'Formatting does not validate the key or certificate.'); }
    case 'spf-generator': {
      const domains = v['include'].split(',').map(s => s.trim()).filter(Boolean); if (!domains.length || domains.length > 10) throw Error('Enter between 1 and 10 provider include domains.');
      return result('v=spf1 ' + domains.map(s => 'include:' + host(s)).join(' ') + ' ' + (v['policy'] === '-all' ? '-all' : '~all'), 'SPF TXT record', 'Use one SPF record per domain. Nested includes also count toward SPF’s ten DNS-lookup limit.');
    }
    case 'dmarc-generator': { const email = required(v['email'], 'Report email'); if (!/^[^\s@;,]+@[^\s@;,]+\.[^\s@;,]+$/.test(email)) throw Error('Enter a valid report email.'); const alignment = v['alignment'] === 'Strict' ? 's' : 'r'; return result(`v=DMARC1; p=${['quarantine', 'reject'].includes(v['policy']) ? v['policy'] : 'none'}; rua=mailto:${email}; adkim=${alignment}; aspf=${alignment}`, 'Publish as a TXT record at _dmarc', 'Review reporting and legitimate mail sources before moving to an enforcing policy.'); }
    case 'ssh-key-generator': {
      const key = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: Number(v['bits']) === 4096 ? 4096 : 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
      const jwk = await crypto.subtle.exportKey('jwk', key.publicKey);
      const pack = (bytes: Uint8Array) => { const out = new Uint8Array(bytes.length + 4); new DataView(out.buffer).setUint32(0, bytes.length); out.set(bytes, 4); return out; };
      const mpint = (s: string) => { const bytes = unbase64(s); return pack(bytes[0] & 128 ? new Uint8Array([0, ...bytes]) : bytes); };
      const pub = new Uint8Array([...pack(encoder.encode('ssh-rsa')), ...mpint(jwk.e!), ...mpint(jwk.n!)]);
      const priv = new Uint8Array(await crypto.subtle.exportKey('pkcs8', key.privateKey));
      return result(`ssh-rsa ${bytes64(pub)} ${singleLine(v['comment'])}\n\n${wrapPem('PRIVATE KEY', priv)}`, 'RSA key pair generated locally', 'The private key is unencrypted PKCS#8. Store it securely and restrict file permissions. It is generated in this browser and is not sent to a server.');
    }
    case 'ssh-fingerprint': { const parts = required(input).split(/\s+/); if (!/^(ssh-|ecdsa-)/.test(parts[0]) || !parts[1]) throw Error('Paste an OpenSSH public key.'); return result('SHA256:' + bytes64(await digest(unbase64(parts[1]))).replace(/=+$/, ''), 'OpenSSH SHA-256 fingerprint'); }
    case 'ssh-config': { const alias = singleLine(required(v['alias'])), server = host(v['host']), user = singleLine(required(v['user'])), identity = singleLine(required(v['identity'])); if (!/^[a-z0-9_.-]+$/i.test(alias) || !/^[a-z0-9_.-]+$/i.test(user) || /["\s]/.test(identity)) throw Error('Use a simple alias, username and identity path without spaces.'); return result(`Host ${alias}\n    HostName ${server}\n    User ${user}\n    Port ${n('port')}\n    IdentityFile ${identity}\n    IdentitiesOnly yes`, 'Add this entry to ~/.ssh/config'); }
    case 'url-inspector': { const u = new URL(required(input)); return result(JSON.stringify({ protocol: u.protocol, hostname: u.hostname, port: u.port || '(default)', pathname: u.pathname, query: [...u.searchParams.entries()], fragment: u.hash }, null, 2)); }
    case 'robots-generator': return result(`User-agent: ${singleLine(required(v['agent']))}\n${v['disallow'].split(',').map(p => 'Disallow: ' + singleLine(p.trim())).join('\n')}${v['sitemap'].trim() ? '\n\nSitemap: ' + new URL(v['sitemap'].trim()).href : ''}`, 'robots.txt', 'Robots rules guide crawlers; they do not restrict access to private pages.');
    case 'open-graph-generator': return result([['title', required(v['title'])], ['description', v['description']], ['url', new URL(required(v['url'])).href], ['image', new URL(required(v['image'])).href], ['type', 'website']].map(([k, val]) => `<meta property="og:${k}" content="${xml(val)}">`).join('\n'));
    case 'subnet-calculator': { const parts = required(input).split('/'); if (parts.length !== 2 || !/^\d{1,2}$/.test(parts[1])) throw Error('Use an IPv4 address and prefix, such as 192.168.1.10/24.'); const ip = ipv4(parts[0]).reduce((a, b) => a * 256 + b, 0), prefix = Number(parts[1]); if (prefix > 32) throw Error('IPv4 prefixes must be between 0 and 32.'); const size = 2 ** (32 - prefix), network = Math.floor(ip / size) * size, broadcast = network + size - 1, usable = prefix >= 31 ? size : size - 2; return result(`Network: ${ipText(network)}/${prefix}\nSubnet mask: ${ipText(prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0)}\nBroadcast: ${prefix >= 31 ? 'Not used for /31 and /32' : ipText(broadcast)}\nTotal addresses: ${size}\nUsable addresses: ${usable}\nUsable range: ${ipText(network + (prefix < 31 ? 1 : 0))} – ${ipText(broadcast - (prefix < 31 ? 1 : 0))}`); }
    case 'ipv4-converter': { const parts = ipv4(required(input)); return result(`IPv4: ${parts.join('.')}\nBinary: ${parts.map(n => n.toString(2).padStart(8, '0')).join('.')}\nHex: ${parts.map(n => n.toString(16).padStart(2, '0')).join(':')}\nDecimal: ${parts.reduce((a, b) => a * 256 + b, 0)}`); }
    case 'ipv6-expand': { let value = required(input).replace(/^\[|\]$/g, ''); if (!/^[a-f0-9:]+$/i.test(value) || (value.match(/::/g) || []).length > 1) throw Error('Enter an IPv6 address in hexadecimal notation.'); const sides = value.split('::'), left = sides[0] ? sides[0].split(':') : [], right = sides[1] ? sides[1].split(':') : [], missing = 8 - left.length - right.length; if ((sides.length === 1 && missing !== 0) || (sides.length === 2 && missing < 1) || [...left, ...right].some(s => !/^[a-f0-9]{1,4}$/i.test(s))) throw Error('Invalid IPv6 address.'); return result([...left, ...Array(sides.length === 2 ? missing : 0).fill('0'), ...right].map(s => s.toLowerCase().padStart(4, '0')).join(':')); }
    case 'uuid-generator': return result(Array.from({ length: n('count') }, () => crypto.randomUUID()).join('\n'));
    case 'api-key-generator': return result(hex(crypto.getRandomValues(new Uint8Array(n('bytes')))), 'Random API key generated locally');
    case 'random-string': return result(randomText(n('length'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'));
    case 'mac-generator': return result(Array.from({ length: n('count') }, () => { const bytes = crypto.getRandomValues(new Uint8Array(6)); bytes[0] = (bytes[0] | 2) & 254; return hex(bytes).match(/../g)!.join(':'); }).join('\n'));
    case 'cron-generator': { const h = n('hour'), m = n('minute'); return result(v['schedule'] === 'Hourly' ? `${m} * * * *` : v['schedule'] === 'Every 15 minutes' ? '*/15 * * * *' : `${m} ${h} * * ${v['schedule'] === 'Weekdays' ? '1-5' : '*'}`, 'Five-field cron expression', 'The schedule uses the timezone configured on the machine running cron.'); }
    case 'base64': return result(v['mode'] === 'Decode' ? decoder.decode(unbase64(required(input))) : bytes64(encoder.encode(input)));
    case 'url-encode': return result(v['mode'] === 'Decode' ? decodeURIComponent(input) : encodeURIComponent(input));
    case 'json-to-csv': { const data = JSON.parse(required(input)); if (!Array.isArray(data) || !data.length || data.some(row => !row || Array.isArray(row) || typeof row !== 'object')) throw Error('Enter a non-empty array of flat JSON objects.'); const keys = [...new Set(data.flatMap(row => Object.keys(row)))]; if (data.some(row => Object.values(row).some(v => v !== null && typeof v === 'object'))) throw Error('Nested objects are not supported; flatten them first.'); const cell = (v: unknown) => '"' + String(v ?? '').replace(/"/g, '""') + '"'; return result([keys.map(cell).join(','), ...data.map(row => keys.map(k => cell(row[k])).join(','))].join('\r\n'), 'CSV ready', 'Review untrusted spreadsheet values beginning with =, +, - or @ before opening in a spreadsheet.'); }
    case 'csv-to-json': { const rows = csvParse(required(input)), headers = rows.shift()!; if (!headers.length || headers.some(h => !h.trim()) || new Set(headers).size !== headers.length) throw Error('CSV headers must be non-empty and unique.'); if (rows.some(row => row.length !== headers.length)) throw Error('Each CSV row must have the same number of columns as the header.'); return result(JSON.stringify(rows.map(row => Object.fromEntries(headers.map((h, i) => [h, row[i]]))), null, 2)); }
    case 'epoch-converter': { const value = required(input), numeric = /^-?\d+$/.test(value), time = numeric ? Number(value) * (value.replace('-', '').length <= 10 ? 1000 : 1) : Date.parse(value), date = new Date(time); if (!Number.isFinite(date.getTime())) throw Error('Enter a valid Unix timestamp or ISO date.'); return result(`UTC: ${date.toISOString()}\nUnix seconds: ${Math.floor(time / 1000)}\nUnix milliseconds: ${time}`); }
    case 'json-formatter': return result(JSON.stringify(JSON.parse(required(input)), null, v['mode'] === 'Minify' ? undefined : 2), 'Valid JSON');
    case 'jwt-decoder': { const parts = required(input).split('.'); if (parts.length !== 3) throw Error('A signed JWT must have three dot-separated parts.'); return result(JSON.stringify({ header: JSON.parse(decoder.decode(unbase64(parts[0]))), payload: JSON.parse(decoder.decode(unbase64(parts[1]))), signature: parts[2] }, null, 2), 'JWT decoded', 'The signature has not been verified. Decoded claims are untrusted.'); }
    case 'text-statistics': return result(`Characters: ${[...input].length}\nWords: ${input.trim() ? input.trim().split(/\s+/u).length : 0}\nLines: ${input ? input.split(/\r\n|\r|\n/).length : 0}\nUTF-8 bytes: ${encoder.encode(input).length}`);
    case 'case-converter': return result(v['mode'] === 'UPPERCASE' ? input.toUpperCase() : v['mode'] === 'lowercase' ? input.toLowerCase() : v['mode'] === 'Title Case' ? input.toLowerCase().replace(/(^|\s)\S/g, s => s.toUpperCase()) : input.toLowerCase().replace(/(^|[.!?]\s+)\S/g, s => s.toUpperCase()));
    case 'date-difference': { const parse = (s: string) => { if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) throw Error('Use YYYY-MM-DD for both dates.'); const date = new Date(s + 'T00:00:00Z'); if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== s) throw Error('Enter calendar dates that exist.'); return date.getTime(); }; const days = (parse(v['end']) - parse(v['start'])) / 86400000; return result(`Days: ${days}\nWeeks: ${(days / 7).toFixed(2)}\nHours: ${days * 24}`, 'Elapsed time (end minus start)', 'The start date is excluded from the elapsed-day count.'); }
    default: throw Error('This tool is unavailable.');
  }
}
