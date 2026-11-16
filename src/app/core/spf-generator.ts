import { normalizeDnsDomain } from './dns-lookup';
import { parsePtrAddress } from './ptr-lookup';
import { parseSpfPolicy } from './spf-lookup';
import { dnsCsv } from './dns-report-export';

export const SPF_PROVIDERS = [
  { id: 'google', name: 'Google Workspace', include: '_spf.google.com', icon: 'mail', docs: 'https://support.google.com/a/answer/33786' },
  { id: 'microsoft', name: 'Microsoft 365', include: 'spf.protection.outlook.com', icon: 'grid_view', docs: 'https://learn.microsoft.com/en-us/office365/enterprise/external-domain-name-system-records' },
  { id: 'sendgrid', name: 'Twilio SendGrid', include: 'sendgrid.net', icon: 'send', docs: 'https://www.twilio.com/docs/sendgrid/ui/account-and-settings/troubleshooting-sender-authentication' },
  { id: 'mailgun', name: 'Mailgun', include: 'mailgun.org', icon: 'outgoing_mail', docs: 'https://help.mailgun.com/hc/en-us/articles/360011565514-DNS-frequently-asked-questions' },
] as const;
export interface SpfGeneratorInput { domain: string; a: boolean; mx: boolean; providers: string[]; includes: string[]; ipv4: string[]; ipv6: string[]; policy: '~all' | '-all' | '?all'; ttl: string; }
export interface GeneratedSpfPolicy {
  domain: string; generatedAt: string; record: string; zoneFile: string; chunks: string[]; ttl: number;
  terms: { value: string; meaning: string; dns: boolean }[]; directDnsTerms: number; bytes: number;
  settings: SpfGeneratorInput; warnings: string[]; notes: string[];
}
export const SPF_GENERATOR_LIMITS = { includes: 20, networks: 100, recordBytes: 4096, sharedConfig: 12000 } as const;
export function normalizeSpfOwner(value: string): string {
  const input = value.trim();
  if (!input || /[\s/:@?#%\\"'<>]/.test(input)) throw new Error('Enter a bare sending domain, such as example.com or mail.example.com, without a URL or email address.');
  const domain = normalizeDnsDomain(input); if (domain.includes('_')) throw new Error('Use the sending domain itself, without _spf or other DNS prefixes.'); return domain;
}
export function normalizeSpfInclude(value: string): string {
  const input = value.trim();
  if (!input || /[\s/:;@?#%\\"'<>]/.test(input) || input.length > 253) throw new Error('Enter a bare include domain such as _spf.google.com, without include:, a URL, spaces or SPF macros.');
  return normalizeDnsDomain(input);
}
/** Convert CIDR host bits to the corresponding network, preserving the authorized address set. */
export function normalizeSpfNetwork(value: string, family: 4 | 6): string {
  const input = value.trim(), parts = input.split('/');
  if (!input || parts.length > 2 || /[\s\[\]%]/.test(input)) throw new Error('Enter a valid IPv' + family + ' address or CIDR range.');
  const address = parsePtrAddress(parts[0]), maximum = family === 4 ? 32 : 128;
  if (address.family !== family || parts[1] !== undefined && (!/^(?:0|[1-9]\d{0,2})$/.test(parts[1]) || Number(parts[1]) > maximum)) throw new Error('Use IPv' + family + ' with a prefix length from 0 to ' + maximum + '.');
  const prefix = parts[1] === undefined ? maximum : Number(parts[1]);
  const groups = family === 4 ? address.expanded.split('.').map(Number) : address.expanded.split(':').map(part => parseInt(part,16)), bits = family === 4 ? 8 : 16;
  const masked = groups.map((group, index) => { const keep = Math.max(0, Math.min(bits, prefix - index * bits)); return keep === 0 ? 0 : Math.floor(group / 2 ** (bits - keep)) * 2 ** (bits - keep); });
  const network = family === 4 ? masked.join('.') : parsePtrAddress(masked.map(group => group.toString(16)).join(':')).ip;
  return network + (prefix === maximum ? '' : '/' + prefix);
}
export function splitSpfList(value: string): string[] {
  if (value.length > 12000) throw new Error('The address or include list is too long.');
  return value.trim().split(/[\s,]+/).filter(Boolean);
}
export function generateSpfPolicy(input: SpfGeneratorInput): GeneratedSpfPolicy {
  const domain = normalizeSpfOwner(input.domain);
  if (typeof input.a !== 'boolean' || typeof input.mx !== 'boolean' || !['~all','-all','?all'].includes(input.policy)) throw new Error('Choose valid local-server permissions and an all policy.');
  if (typeof input.ttl !== 'string' || !/^\d+$/.test(input.ttl.trim()) || Number(input.ttl) > 2147483647) throw new Error('TTL must be a whole number from 0 to 2147483647 seconds.');
  for (const field of ['providers','includes','ipv4','ipv6'] as const) if (!Array.isArray(input[field]) || input[field].some(value => typeof value !== 'string')) throw new Error('Use string lists for providers, includes and IP networks.');
  if (input.providers.length > SPF_PROVIDERS.length || input.includes.length > SPF_GENERATOR_LIMITS.includes || input.ipv4.length + input.ipv6.length > SPF_GENERATOR_LIMITS.networks) throw new Error('Use up to 20 custom include domains and 100 total IP entries.');
  if (input.providers.some(id => !SPF_PROVIDERS.some(provider => provider.id === id))) throw new Error('Choose a supported provider or add its documented domain as a custom include.');
  const providers = SPF_PROVIDERS.filter(provider => input.providers.includes(provider.id));
  const includes = [...new Set([...providers.map(provider => provider.include), ...input.includes.map(normalizeSpfInclude)])];
  if (includes.includes(domain)) throw new Error('The record cannot include its own owner domain; that creates an SPF dependency cycle.');
  const ipv4 = [...new Set(input.ipv4.map(value => normalizeSpfNetwork(value,4)))], ipv6 = [...new Set(input.ipv6.map(value => normalizeSpfNetwork(value,6)))];
  const terms: GeneratedSpfPolicy['terms'] = [];
  if (input.a) terms.push({ value: 'a', dns: true, meaning: 'Authorize addresses returned for this sending domain when the mechanism is evaluated.' });
  if (input.mx) terms.push({ value: 'mx', dns: true, meaning: 'Authorize addresses of this domain\'s mail exchangers. Receiving mail does not by itself make these your sending IPs.' });
  includes.forEach(include => terms.push({ value: 'include:' + include, dns: true, meaning: 'Match when the included domain\'s SPF policy returns pass. Nested policies add evaluation cost.' }));
  ipv4.forEach(network => terms.push({ value: 'ip4:' + network, dns: false, meaning: 'Authorize this IPv4 address or network without a DNS lookup for this term.' }));
  ipv6.forEach(network => terms.push({ value: 'ip6:' + network, dns: false, meaning: 'Authorize this IPv6 address or network without a DNS lookup for this term.' }));
  terms.push({ value: input.policy, dns: false, meaning: input.policy === '-all' ? 'Return SPF fail when no earlier mechanism matches; receiver handling depends on local policy.' : input.policy === '~all' ? 'Return SPF softfail when no earlier mechanism matches; this does not force rejection.' : 'Return neutral when no earlier mechanism matches; this expresses no authorization assertion for those senders.' });
  const record = 'v=spf1 ' + terms.map(term => term.value).join(' '), bytes = new TextEncoder().encode(record).length;
  if (bytes > SPF_GENERATOR_LIMITS.recordBytes) throw new Error('The generated policy exceeds this tool\'s 4096-byte limit. Reduce the sender list.');
  const parsed = parseSpfPolicy(record); if (parsed.errors.length) throw new Error('The generated SPF syntax needs review: ' + parsed.errors.join(' '));
  const directDnsTerms = terms.filter(term => term.dns).length, warnings: string[] = [];
  if (terms.length === 1) warnings.push(input.policy === '-all' ? 'This policy authorizes no sending IPs. Use it only for a domain that should not send mail.' : 'No sending source is authorized. Add your actual senders, or deliberately use -all for a non-sending domain.');
  if (input.a) warnings.push('The a mechanism can authorize your website or other host addresses. Keep it only if those systems send mail for this domain.');
  if (input.mx) warnings.push('The mx mechanism authorizes inbound mail-server addresses. Confirm that those addresses also send mail on your behalf.');
  if (directDnsTerms > 10) warnings.push('More than 10 direct DNS-querying terms: evaluation paths that reach too many of them can exceed SPF\'s ten-term limit. Review the full dependency tree before publishing.');
  else if (directDnsTerms) warnings.push('Direct DNS-querying terms are not the complete lookup budget. Nested include policies, a/mx processing and receiver evaluation paths still need checking.');
  if (bytes > 450) warnings.push('This is a long TXT value. Review total DNS response size; splitting strings into 255-byte chunks does not reduce policy length or lookup cost.');
  if (ipv4.some(network => network.endsWith('/0')) || ipv6.some(network => network.endsWith('/0'))) warnings.push('A /0 network authorizes the entire address family. Review this broad authorization before publishing.');
  const normalized = [...input.ipv4.map(value => ({ original: value, normalized: normalizeSpfNetwork(value,4) })), ...input.ipv6.map(value => ({ original: value, normalized: normalizeSpfNetwork(value,6) }))].filter(item => item.original.trim().toLowerCase() !== item.normalized);
  if (normalized.length) warnings.push('IP values were canonicalized, including removal of host bits in CIDR networks. Review the generated network ranges.');
  const chunks = record.match(/.{1,255}/g)!; // Generated terms are ASCII, so characters equal wire bytes.
  const ttl = Number(input.ttl), zoneFile = domain + '. ' + ttl + ' IN TXT ' + chunks.map(chunk => '"' + chunk + '"').join(' ') + '\n';
  return { domain, generatedAt: new Date().toISOString(), record, zoneFile, chunks, ttl, terms, directDnsTerms, bytes, settings: { domain, a: input.a, mx: input.mx, providers: providers.map(provider => provider.id), includes: includes.filter(value => !providers.some(provider => provider.include === value)), ipv4, ipv6, policy: input.policy, ttl: String(ttl) }, warnings, notes: [
    'Generated locally only. No DNS lookup, publishing action, sender-IP evaluation or email transmission was performed.',
    'Publish one SPF policy TXT record at the exact envelope-sender domain. Merge authorized senders into an existing policy rather than adding a second v=spf1 record.',
    'The TXT value is one logical record. Multiple quoted strings in the zone-file form are concatenated without inserting spaces.',
    'Provider presets are examples from provider documentation, not account-specific instructions. Some providers use a separate return-path subdomain or manage SPF through CNAME records. Follow your account setup.',
    'SPF authenticates the envelope sender, not the visible From address by itself. Configure DKIM and DMARC separately and verify real outgoing messages.',
  ] };
}
export function spfGeneratorShareUrl(base: string, input: SpfGeneratorInput): string {
  const result = generateSpfPolicy(input), config = JSON.stringify({ version: 1, ...result.settings });
  const url = new URL(base); url.search = new URLSearchParams({ config }).toString(); url.hash = '';
  if (url.href.length > 16000) throw new Error('This configuration is too large for a share link. Download JSON instead.'); return url.href;
}
export function parseSpfGeneratorSettings(value: string): SpfGeneratorInput {
  if (value.length > SPF_GENERATOR_LIMITS.sharedConfig) throw new Error('Shared configuration is too large.');
  let parsed: unknown; try { parsed = JSON.parse(value); } catch { throw new Error('Shared configuration is not valid JSON.'); }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('Shared configuration must be an object.');
  const data = parsed as Record<string, unknown>;
  if (data['version'] !== 1 || typeof data['domain'] !== 'string' || typeof data['ttl'] !== 'string') throw new Error('Unsupported shared configuration.');
  return generateSpfPolicy({ domain: data['domain'], a: data['a'], mx: data['mx'], providers: data['providers'], includes: data['includes'], ipv4: data['ipv4'], ipv6: data['ipv6'], policy: data['policy'], ttl: data['ttl'] } as SpfGeneratorInput).settings;
}
export function spfGeneratorCsv(result: GeneratedSpfPolicy): string {
  return dnsCsv([['XcellHost SPF configuration - not published', result.domain, result.generatedAt], ['DNS owner','Type','TTL','TXT value'], [result.domain,'TXT',String(result.ttl),result.record], [], ['Term','Direct DNS-querying term','Meaning'], ...result.terms.map(term => [term.value,term.dns?'Yes':'No',term.meaning]), [], ['Warnings'], ...result.warnings.map(warning => [warning]), [], ['Publication notes'], ...result.notes.map(note => [note])]);
}
