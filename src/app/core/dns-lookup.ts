export const DNS_LOOKUP_TYPES = ['A', 'AAAA', 'MX', 'TXT', 'CNAME', 'NS', 'SOA', 'CAA'] as const;
export type DnsLookupType = typeof DNS_LOOKUP_TYPES[number];
export const DNS_LOOKUP_RESOLVERS = [
  { id: 'google', name: 'Google Public DNS', address: '8.8.8.8', endpoint: 'https://dns.google/resolve' },
  { id: 'cloudflare', name: 'Cloudflare', address: '1.1.1.1', endpoint: 'https://cloudflare-dns.com/dns-query' },
] as const;
export type DnsResolverId = typeof DNS_LOOKUP_RESOLVERS[number]['id'];
export interface DnsLookupRecord { name: string; type: string; ttl: number; value: string; }
interface DnsJson { Status: number; AD?: boolean; Answer?: { name: string; type: number; TTL: number; data: string }[]; }
export interface DnsHostResult {
  name: string;
  status: 'NOERROR' | 'NXDOMAIN' | 'ERROR';
  records: DnsLookupRecord[];
  authenticated: boolean;
  error?: string;
  raw?: DnsJson;
}
export interface DnsLookupReport { domain: string; type: DnsLookupType; resolver: string; checkedAt: string; durationMs: number; hosts: DnsHostResult[]; }
const typeNames: Record<number, string> = { 1: 'A', 28: 'AAAA', 15: 'MX', 16: 'TXT', 5: 'CNAME', 2: 'NS', 6: 'SOA', 257: 'CAA' };

export function normalizeDnsDomain(input: string): string {
  const value = input.trim();
  if (!value) throw new Error('Enter a domain name or website URL to begin.');
  if (value.length > 2048 || /[\s\x00-\x1f\\]/.test(value)) throw new Error('Enter a domain or URL without spaces.');
  let url: URL;
  try { url = new URL(value.includes('://') ? value : 'https://' + value); }
  catch { throw new Error('Enter a valid domain, such as example.com.'); }
  const domain = url.hostname.toLowerCase().replace(/\.$/, '');
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || domain.length > 253 || !domain.includes('.') || /^[\d.]+$/.test(domain) || !domain.split('.').every(label => /^(?:[a-z0-9_]|[a-z0-9_][a-z0-9_-]{0,61}[a-z0-9_])$/.test(label))) {
    throw new Error('Enter a fully qualified domain name, such as example.com.');
  }
  return domain;
}

export async function lookupDns(input: string, type: DnsLookupType, resolverId: DnsResolverId, includeWww: boolean, signal?: AbortSignal): Promise<DnsLookupReport> {
  const domain = normalizeDnsDomain(input);
  if (!DNS_LOOKUP_TYPES.includes(type)) throw new Error('Choose a supported DNS record type.');
  const resolver = DNS_LOOKUP_RESOLVERS.find(r => r.id === resolverId);
  if (!resolver) throw new Error('Choose a supported DNS resolver.');
  const start = performance.now();
  const names = includeWww && !domain.startsWith('www.') ? [domain, 'www.' + domain] : [domain];
  const hosts = await Promise.all(names.map(async (name): Promise<DnsHostResult> => {
    try {
      const url = new URL(resolver.endpoint);
      url.searchParams.set('name', name); url.searchParams.set('type', type);
      if (resolver.id === 'google') url.searchParams.set('edns_client_subnet', '0.0.0.0/0');
      const response = await fetch(url, { headers: { Accept: 'application/dns-json' }, cache: 'no-store', signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(12000)]) : AbortSignal.timeout(12000) });
      if (!response.ok) throw new Error('The resolver returned HTTP ' + response.status + '. Please try again.');
      const raw: DnsJson = await response.json();
      if (raw.Status !== 0 && raw.Status !== 3) {
        const status = ({ 1: 'FORMERR', 2: 'SERVFAIL', 5: 'REFUSED' } as Record<number, string>)[raw.Status] || 'Unknown status';
        throw new Error(`The resolver reported ${status} (${raw.Status}). Try another resolver or check again later.`);
      }
      const records = (raw.Status === 3 ? [] : raw.Answer || []).filter(r => typeNames[r.type] === type || r.type === 5).map(r => ({ name: r.name.replace(/\.$/, ''), type: typeNames[r.type], ttl: r.TTL, value: r.data }));
      return { name, status: raw.Status === 3 ? 'NXDOMAIN' : 'NOERROR', records, authenticated: raw.AD === true, raw };
    } catch (error) {
      if (signal?.aborted) throw error;
      const message = error instanceof Error && error.name === 'TimeoutError' ? 'The resolver took too long to respond. Try again or choose another resolver.' : error instanceof TypeError ? 'Could not reach the DNS resolver. Check your connection and try again.' : error instanceof Error ? error.message : 'The DNS request could not be completed.';
      return { name, status: 'ERROR', records: [], authenticated: false, error: message };
    }
  }));
  return { domain, type, resolver: resolver.name, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start), hosts };
}
