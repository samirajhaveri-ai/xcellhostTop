export interface ToolField {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select';
  value?: string;
  placeholder?: string;
  options?: string[];
  min?: number;
  max?: number;
}
export interface SiteTool {
  id: string;
  name: string;
  description: string;
  group: string;
  fields: ToolField[];
  dns?: string;
}
export interface ToolCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  tools: SiteTool[];
}
const text = (key: string, label: string, value = '', placeholder = ''): ToolField => ({ key, label, type: 'text', value, placeholder });
const area = (key: string, label: string, placeholder = ''): ToolField => ({ key, label, type: 'textarea', placeholder });
const number = (key: string, label: string, value: number, min: number, max: number): ToolField => ({ key, label, type: 'number', value: String(value), min, max });
const select = (key: string, label: string, options: string[]): ToolField => ({ key, label, type: 'select', options, value: options[0] });
const domain = () => text('input', 'Domain name', '', 'example.com');
const content = (label = 'Text') => area('input', label);
const tool = (id: string, name: string, description: string, group: string, fields: ToolField[], dns?: string): SiteTool => ({ id, name, description, group, fields, dns });

export const TOOL_CATEGORIES: ToolCategory[] = [
  { id: 'dns', name: 'DNS', icon: 'dns', color: '#60a5fa', tools: [
    tool('dns-lookup', 'DNS Lookup', 'Query public DNS records and inspect their time to live.', 'Record lookup', [domain(), select('type', 'Record type', ['A', 'AAAA', 'MX', 'TXT', 'CNAME', 'NS', 'SOA', 'CAA'])], 'select'),
    tool('all-dns-records', 'All DNS Records', 'Review common DNS types, SPF and DMARC together.', 'Record lookup', [domain()], 'all'),
    ...['MX', 'TXT', 'CNAME', 'SOA', 'NS', 'CAA'].map(type => tool(type.toLowerCase() + '-lookup', type + ' Lookup', 'Inspect the ' + type + ' records published for a domain.', ['MX', 'TXT'].includes(type) ? 'Record lookup' : 'More records', [domain()], type)),
    tool('ptr-lookup', 'PTR Lookup', 'Resolve IPv4 or IPv6 reverse DNS and check forward confirmation.', 'Advanced', [text('input', 'IP address', '', '8.8.8.8 or 2001:4860:4860::8888')], 'PTR'),
    tool('dnssec-check', 'DNSSEC Check', 'Inspect resolver validation, DNSKEY, DS digests and RRSIG timing.', 'Advanced', [domain()], 'DNSSEC'),
    tool('caa-generator', 'CAA Generator', 'Build issuer, wildcard and reporting CAA records with copy and download options.', 'Advanced', [domain(), text('authority', 'Certificate authority domain', 'letsencrypt.org'), select('tag', 'Authorization', ['issue', 'issuewild'])]),
  ] },
  { id: 'security', name: 'SSL & Security', icon: 'lock', color: '#34d399', tools: [
    tool('password-generator', 'Password Generator', 'Generate local random passwords with length, character-type and copy controls.', 'Generators', [number('length', 'Password length', 24, 12, 128)]),
    tool('hash-generator', 'Hash Generator', 'Hash text or files locally with eight algorithms, Hex/Base64 output and copy controls.', 'Integrity', [content(), select('algorithm', 'Algorithm', ['SHA-256', 'SHA-384', 'SHA-512'])]),
    tool('certificate-fingerprint', 'Certificate Fingerprint', 'Inspect PEM/DER certificates, calculate fingerprints and compare expected values locally.', 'Certificates', [content('PEM certificate')]),
    tool('pem-formatter', 'PEM Formatter', 'Format PEM blocks locally, preserve encryption headers and copy or download the result.', 'Certificates', [content('PEM certificate or key')]),
  ] },
  { id: 'email', name: 'Email', icon: 'mail', color: '#fbbf24', tools: [
    tool('spf-lookup', 'SPF Lookup', 'Inspect SPF policies, mechanisms and bounded include/redirect dependencies.', 'Authentication', [domain()], 'SPF'),
    tool('dkim-lookup', 'DKIM Lookup', 'Inspect DKIM selectors, CNAME delegation and RSA/Ed25519 key records.', 'Authentication', [domain(), text('selector', 'DKIM selector', '', 'selector1')], 'DKIM'),
    tool('dmarc-lookup', 'DMARC Lookup', 'Inspect DMARC policy discovery, alignment modes and reporting destinations.', 'Authentication', [domain()], 'DMARC'),
    tool('bimi-lookup', 'BIMI Lookup', 'Inspect BIMI selectors, logo assets, evidence metadata and DMARC context.', 'Authentication', [domain(), text('selector', 'BIMI selector', 'default')], 'BIMI'),
    tool('email-dns-health', 'Email DNS Health', 'Review authentication DNS, MX routing, transport markers and sampled reverse DNS.', 'Diagnostics', [domain()], 'EMAIL'),
    tool('spf-generator', 'SPF Generator', 'Build an SPF TXT policy with provider includes, sender IP ranges and publication downloads.', 'Generators', [text('include', 'Provider include domains, separated by commas', '', '_spf.google.com, spf.protection.outlook.com'), select('policy', 'Policy for other senders', ['~all', '-all'])]),
    tool('dmarc-generator', 'DMARC Generator', 'Build a DMARC policy with alignment, reporting, testing controls and publication downloads.', 'Generators', [select('policy', 'Policy', ['none', 'quarantine', 'reject']), text('email', 'Aggregate report email', '', 'dmarc@example.com'), select('alignment', 'Alignment', ['Relaxed', 'Strict'])]),
  ] },
  { id: 'ssh', name: 'SSH & Keys', icon: 'key', color: '#a78bfa', tools: [
    tool('ssh-key-generator', 'SSH Key Generator', 'Generate Ed25519, ECDSA or RSA keys locally, with passphrase-protected PEM and PPK exports.', 'Keys', [select('bits', 'RSA key size', ['2048', '4096']), text('comment', 'Public key comment', 'user@workstation')]),
    tool('ssh-fingerprint', 'SSH Key Fingerprint', 'Inspect an SSH public key locally, calculate SHA256, SHA512 and MD5 fingerprints, and compare an expected digest.', 'Keys', [content('OpenSSH public key')]),
    tool('ssh-config', 'SSH Config Builder', 'Build multiple SSH host blocks with proxies, keepalives and TCP forwards, then copy or download your config.', 'Configuration', [text('alias', 'Host alias', 'production'), text('host', 'Server hostname', '', 'server.example.com'), text('user', 'SSH user', 'ubuntu'), number('port', 'SSH port', 22, 1, 65535), text('identity', 'Identity file', '~/.ssh/id_rsa')]),
  ] },
  { id: 'web', name: 'Web', icon: 'language', color: '#22d3ee', tools: [
    tool('url-inspector', 'URL Inspector', 'Inspect URL components, encoded paths, repeated query parameters and fragments locally.', 'Inspect', [text('input', 'URL', '', 'https://example.com/path?key=value')]),
    tool('robots-generator', 'Robots.txt Generator', 'Fetch or paste robots.txt, test crawler access and matching lines, review sitemap references, or build a file.', 'Site configuration', [text('agent', 'User agent', '*'), text('disallow', 'Disallowed paths, separated by commas', '/admin/, /private/'), text('sitemap', 'Sitemap URL', '', 'https://example.com/sitemap.xml')]),
    tool('open-graph-generator', 'Open Graph Generator', 'Inspect sharing tags, compare social previews and generate Open Graph and X card metadata.', 'Site configuration', [text('title', 'Page title'), text('description', 'Description'), text('url', 'Page URL', '', 'https://example.com/'), text('image', 'Image URL', '', 'https://example.com/image.jpg')]),
  ] },
  { id: 'network', name: 'Network', icon: 'hub', color: '#fb7185', tools: [
    tool('subnet-calculator', 'Subnet Calculator', 'Calculate IPv4 network and host ranges, subnet and wildcard masks, address categories and binary views.', 'IP addressing', [text('input', 'IPv4 CIDR', '', '192.168.1.10/24')]),
    tool('ipv4-converter', 'IPv4 Converter', 'Convert between dotted IPv4, unsigned decimal, binary and hexadecimal. Inspect octets and export results locally.', 'IP addressing', [text('input', 'IPv4 address', '', '192.168.1.1')]),
    tool('ipv6-expand', 'IPv6 Test & Expander', 'Test a domain’s IPv6 website, DNS and mail observations, or expand and inspect an IPv6 address locally.', 'IP addressing', [text('input', 'IPv6 address', '', '2001:db8::1')]),
  ] },
  { id: 'generators', name: 'Generators', icon: 'auto_fix_high', color: '#f472b6', tools: [
    tool('uuid-generator', 'UUID Generator', 'Generate UUID v1, v4, v6 and v7 in your browser. Create batches up to 100, format, copy and export identifiers.', 'Identifiers', [number('count', 'Number of UUIDs', 5, 1, 100)]),
    tool('api-key-generator', 'API Key Generator', 'Generate Base62, hexadecimal or Base64url-alphabet keys locally. Choose a prefix, length and quantity, then copy or download.', 'Random data', [number('bytes', 'Random bytes', 32, 16, 128)]),
    tool('random-string', 'Random String Generator', 'Generate random strings with presets, character groups, custom characters and look-alike exclusions. Copy or export batches locally.', 'Random data', [number('length', 'Length', 32, 1, 512)]),
    tool('mac-generator', 'MAC Address Generator', 'Generate local unicast or vendor-style MAC samples. Choose separators and case, then copy or download batches up to 200.', 'Random data', [number('count', 'Number of addresses', 5, 1, 200)]),
    tool('cron-generator', 'Crontab Generator', 'Build five-field cron expressions with presets, command output options and time-zone execution previews. Copy or download the entry.', 'Scheduling', [select('schedule', 'Schedule', ['Daily', 'Hourly', 'Every 15 minutes', 'Weekdays']), number('hour', 'Hour (24-hour)', 9, 0, 23), number('minute', 'Minute', 0, 0, 59)]),
  ] },
  { id: 'converters', name: 'Converters', icon: 'swap_horiz', color: '#2dd4bf', tools: [
    tool('base64', 'Base64 Encoder / Decoder', 'Encode UTF-8 text or files as Base64 and Base64url, decode to text or original bytes, then copy or download locally.', 'Text', [content(), select('mode', 'Action', ['Encode', 'Decode'])]),
    tool('url-encode', 'URL Encoder / Decoder', 'Encode or decode components and whole URIs locally. Convert batches with per-line errors, handle form plus signs and export TXT or JSON.', 'Text', [content(), select('mode', 'Action', ['Encode', 'Decode'])]),
    tool('json-to-csv', 'JSON to CSV', 'Convert an array of flat JSON objects into CSV.', 'Data', [content('JSON array')]),
    tool('csv-to-json', 'CSV to JSON', 'Convert CSV with a header row into JSON objects.', 'Data', [content('CSV text')]),
    tool('epoch-converter', 'Epoch Converter', 'Convert Unix seconds and milliseconds to dates and back with time zones, date formats, a live clock and CSV export.', 'Date & time', [text('input', 'Unix timestamp or ISO date', '', '1735689600 or 2025-01-01T00:00:00Z')]),
  ] },
  { id: 'utilities', name: 'Utilities', icon: 'build', color: '#818cf8', tools: [
    tool('json-formatter', 'JSON Formatter & Validator', 'Format, minify and validate JSON locally with live output, indentation controls, UTF-8 file upload, precise errors and complete downloads.', 'Developer', [content('JSON'), select('mode', 'Format', ['Pretty print', 'Minify'])]),
    tool('jwt-decoder', 'JWT Decoder', 'Decode JWT headers and payloads locally. Inspect claims, live expiry checks and signature bytes, then copy or export an unverified report.', 'Developer', [content('JWT token')]),
    tool('text-statistics', 'Text Statistics', 'Count characters, words, lines and UTF-8 bytes.', 'Text', [content()]),
    tool('case-converter', 'Case Converter', 'Convert text to upper, lower, title or sentence case.', 'Text', [content(), select('mode', 'Case', ['UPPERCASE', 'lowercase', 'Title Case', 'Sentence case'])]),
    tool('date-difference', 'Date Difference', 'Calculate elapsed time between two dates in UTC.', 'Date & time', [text('start', 'Start date (YYYY-MM-DD)', '', '2026-01-01'), text('end', 'End date (YYYY-MM-DD)', '', '2026-12-31')]),
  ] },
];
export const SITE_TOOLS = TOOL_CATEGORIES.flatMap(category => category.tools.map(item => ({ ...item, categoryId: category.id, categoryName: category.name })));
