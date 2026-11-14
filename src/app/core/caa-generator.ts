import { normalizeDnsDomain } from './dns-lookup';
import { dnsCsv } from './dns-report-export';

export const CAA_PROVIDERS = [
  { name: "Let's Encrypt", issuer: 'letsencrypt.org', docs: 'https://letsencrypt.org/docs/caa/' },
  { name: 'DigiCert', issuer: 'digicert.com', docs: 'https://docs.digicert.com/en/certcentral/manage-certificates/dns-caa-resource-record-check.html' },
  { name: 'Sectigo', issuer: 'sectigo.com', docs: 'https://support.sectigo.com/Com_KnowledgeDetailPage?Id=kA01N000000zFMO' },
  { name: 'Amazon', issuer: 'amazon.com', docs: 'https://docs.aws.amazon.com/acm/latest/userguide/setup.html' },
  { name: 'Google Trust Services', issuer: 'pki.goog', docs: 'https://docs.cloud.google.com/certificate-manager/docs/public-ca-tutorial' },
  { name: 'GlobalSign', issuer: 'globalsign.com', docs: 'https://www.globalsign.com/en/repository/GlobalSign_CP_v6.4_final.pdf' },
  { name: 'GoDaddy', issuer: 'godaddy.com', docs: 'https://www.godaddy.com/help/using-caa-records-with-your-ssl-certificate-27227' },
  { name: 'SSL.com', issuer: 'ssl.com', docs: 'https://www.ssl.com/how-to/configure-caa-records-to-authorize-ssl-com/' },
] as const;
export interface CaaAuthority { issuer: string; issue: boolean; issuewild: boolean; }
export interface CaaGeneratorInput {
  domain: string; authorities: CaaAuthority[]; ordinary: 'selected' | 'block'; wildcard: 'inherit' | 'selected' | 'block';
  ttl: string; critical: boolean; reports: string[];
}
export interface GeneratedCaaRecord { name: string; type: 'CAA'; ttl: number; flags: 0 | 128; tag: 'issue' | 'issuewild' | 'iodef'; value: string; line: string; }
export interface GeneratedCaaPolicy {
  domain: string; generatedAt: string; records: GeneratedCaaRecord[]; zoneFile: string;
  ordinaryIssuers: string[]; wildcardIssuers: string[]; ordinaryBlocked: boolean; wildcardBlocked: boolean;
  settings: CaaGeneratorInput; notes: string[];
}
export function normalizeCaaIssuer(value: string): string {
  const input = value.trim().replace(/\.$/, '');
  if (!input || input.length > 253 || /[\s\x00-\x20/:;@?#%\\"'<>]/.test(input)) throw new Error('Enter a bare CA identifier such as letsencrypt.org, without a URL, parameters or spaces.');
  let host: string;
  try { host = new URL('https://' + input).hostname.toLowerCase(); } catch { throw new Error('Enter a valid CA identifier, such as letsencrypt.org.'); }
  if (host.length > 253 || !host.includes('.') || /^[\d.]+$/.test(host) || !host.split('.').every(label => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label))) throw new Error('Enter a fully qualified CA domain, such as letsencrypt.org.');
  return host;
}
export function normalizeCaaReport(value: string): string {
  const input = value.trim();
  if (!input || input.length > 2048 || /[\s\x00-\x20\x7f-\uffff\\]/.test(input)) throw new Error('Use a mailto:, https: or http: reporting URI without spaces. Percent-encode non-ASCII characters.');
  let url: URL;
  try { url = new URL(input); } catch { throw new Error('Enter a reporting URI such as mailto:security@example.com or https://example.com/caa-reports.'); }
  if (!['mailto:', 'https:', 'http:'].includes(url.protocol) || url.username || url.password) throw new Error('Reporting destinations must use mailto:, https: or http: without login credentials.');
  if (url.protocol === 'mailto:') {
    let mailbox: string; try { mailbox = decodeURIComponent(url.pathname); } catch { throw new Error('The reporting mailbox contains an invalid percent escape.'); }
    if (!mailbox.split(',').every(address => /^[^\s@<>"\\,]+@[^\s@<>"\\,]+\.[^\s@<>"\\,]+$/.test(address))) throw new Error('Enter a valid reporting email URI, such as mailto:security@example.com.');
    if (/%0[ad]/i.test(url.href)) throw new Error('Reporting URIs cannot contain encoded line breaks.');
  } else if (!url.hostname || /%0[ad]/i.test(url.href)) throw new Error('Enter a valid HTTP or HTTPS reporting destination.');
  return url.href;
}
export function quoteCaaValue(value: string): string { return '"' + value.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'; }
export function generateCaaPolicy(input: CaaGeneratorInput): GeneratedCaaPolicy {
  const domain = normalizeDnsDomain(input.domain);
  if (!['selected', 'block'].includes(input.ordinary) || !['inherit', 'selected', 'block'].includes(input.wildcard) || typeof input.critical !== 'boolean') throw new Error('Choose valid ordinary, wildcard and flag settings.');
  if (!/^\d+$/.test(input.ttl.trim()) || +input.ttl > 2147483647) throw new Error('TTL must be a whole number from 0 to 2147483647 seconds.');
  if (!Array.isArray(input.authorities) || input.authorities.length > 20 || !Array.isArray(input.reports) || input.reports.length > 5) throw new Error('Use up to 20 CA identifiers and 5 reporting destinations.');
  const merged = new Map<string, CaaAuthority>();
  for (const item of input.authorities) {
    if (!item || typeof item.issuer !== 'string' || typeof item.issue !== 'boolean' || typeof item.issuewild !== 'boolean') throw new Error('Each CA needs an identifier and valid issue / issuewild selections.');
    const issuer = normalizeCaaIssuer(item.issuer), prior = merged.get(issuer);
    merged.set(issuer, { issuer, issue: item.issue || !!prior?.issue, issuewild: item.issuewild || !!prior?.issuewild });
  }
  const authorities = [...merged.values()];
  const ordinaryIssuers = input.ordinary === 'block' ? [] : authorities.filter(row => row.issue).map(row => row.issuer);
  if (input.ordinary === 'selected' && !ordinaryIssuers.length) throw new Error('Select at least one issue authority, or explicitly choose to block ordinary issuance.');
  const wildcardIssuers = input.wildcard === 'inherit' ? [...ordinaryIssuers] : input.wildcard === 'block' ? [] : authorities.filter(row => row.issuewild).map(row => row.issuer);
  if (input.wildcard === 'selected' && !wildcardIssuers.length) throw new Error('Select at least one issuewild authority, inherit issue rules, or explicitly block wildcard issuance.');
  const reports = [...new Set(input.reports.filter(report => report.trim()).map(normalizeCaaReport))];
  const ttl = +input.ttl, flags = input.critical ? 128 : 0, records: GeneratedCaaRecord[] = [];
  function add(tag: GeneratedCaaRecord['tag'], value: string): void {
    records.push({ name: domain, type: 'CAA', ttl, flags, tag, value, line: `${domain}. ${ttl} IN CAA ${flags} ${tag} ${quoteCaaValue(value)}` });
  }
  if (input.ordinary === 'block') add('issue', ';'); else ordinaryIssuers.forEach(issuer => add('issue', issuer));
  if (input.wildcard === 'block') add('issuewild', ';'); else if (input.wildcard === 'selected') wildcardIssuers.forEach(issuer => add('issuewild', issuer));
  reports.forEach(report => add('iodef', report));
  const notes = [
    'Generated configuration only. No DNS queries or publishing actions have been performed.',
    'Review the complete relevant CAA RRset, including existing records. Issuer grants are additive: an empty issuer entry does not cancel another valid grant.',
    input.wildcard === 'inherit' ? 'No issuewild records are generated. Wildcards use the applicable issue rules.' : 'The generated issuewild records take precedence over issue for wildcard requests in this RRset.',
    'Reporting depends on the issuing CA; an iodef destination does not guarantee reports. This generator never contacts the destination.',
    'Use a supported DNS owner name. CAA cannot coexist at a CNAME owner. DNS-provider interfaces may use @, a relative label or the full hostname.',
  ];
  return { domain, generatedAt: new Date().toISOString(), records, zoneFile: records.map(record => record.line).join('\n') + '\n', ordinaryIssuers, wildcardIssuers, ordinaryBlocked: input.ordinary === 'block', wildcardBlocked: input.wildcard === 'block' || input.wildcard === 'inherit' && input.ordinary === 'block', settings: { domain, authorities, ordinary: input.ordinary, wildcard: input.wildcard, ttl: String(ttl), critical: input.critical, reports }, notes };
}
export function caaGeneratorCsv(policy: GeneratedCaaPolicy): string {
  return dnsCsv([['Name', 'Type', 'TTL (seconds)', 'Flags', 'Tag', 'Value (unquoted)', 'Zone-file record', 'State', 'Generated at (UTC)'], ...policy.records.map(record => [record.name, record.type, record.ttl, record.flags, record.tag, record.value, record.line, 'Generated; not published or queried', policy.generatedAt])]);
}
export function caaGeneratorShareUrl(base: string, policy: GeneratedCaaPolicy): string {
  if (JSON.stringify(policy.settings).length > 16000) throw new Error('This configuration is too large for a share link. Download the JSON instead.');
  const url = new URL(base); url.hash = ''; url.search = new URLSearchParams({ config: JSON.stringify(policy.settings) }).toString(); return url.href;
}
export function parseCaaGeneratorSettings(value: string): CaaGeneratorInput {
  if (value.length > 16000) throw new Error('The shared configuration is too large.');
  let parsed: unknown; try { parsed = JSON.parse(value); } catch { throw new Error('The shared configuration is not valid JSON.'); }
  if (!parsed || typeof parsed !== 'object') throw new Error('The shared configuration is invalid.');
  const candidate = parsed as Record<string, unknown>;
  if (typeof candidate['domain'] !== 'string' || typeof candidate['ttl'] !== 'string' || typeof candidate['critical'] !== 'boolean' || !Array.isArray(candidate['reports']) || candidate['reports'].some(item => typeof item !== 'string')) throw new Error('The shared configuration contains invalid fields.');
  // Select only supported fields; validate and normalize through the same generator.
  const input: CaaGeneratorInput = { domain: candidate['domain'], ttl: candidate['ttl'], critical: candidate['critical'], ordinary: candidate['ordinary'] as CaaGeneratorInput['ordinary'], wildcard: candidate['wildcard'] as CaaGeneratorInput['wildcard'], authorities: candidate['authorities'] as CaaAuthority[], reports: candidate['reports'] as string[] };
  return generateCaaPolicy(input).settings;
}
