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
    tool('ptr-lookup', 'PTR Lookup', 'Resolve the reverse DNS name of an IPv4 address.', 'Advanced', [text('input', 'IPv4 address', '', '8.8.8.8')], 'PTR'),
    tool('dnssec-check', 'DNSSEC Check', 'Check whether Google Public DNS authenticates the DNS response.', 'Advanced', [domain()], 'DNSSEC'),
    tool('caa-generator', 'CAA Generator', 'Create a certificate authority authorization record.', 'Advanced', [domain(), text('authority', 'Certificate authority domain', 'letsencrypt.org'), select('tag', 'Authorization', ['issue', 'issuewild'])]),
  ] },
  { id: 'security', name: 'SSL & Security', icon: 'lock', color: '#34d399', tools: [
    tool('password-generator', 'Password Generator', 'Generate a password with cryptographically secure randomness.', 'Generators', [number('length', 'Password length', 24, 12, 128)]),
    tool('hash-generator', 'Hash Generator', 'Compute a SHA-256, SHA-384 or SHA-512 digest locally.', 'Integrity', [content(), select('algorithm', 'Algorithm', ['SHA-256', 'SHA-384', 'SHA-512'])]),
    tool('certificate-fingerprint', 'Certificate Fingerprint', 'Calculate the SHA-256 fingerprint of a PEM certificate.', 'Certificates', [content('PEM certificate')]),
    tool('pem-formatter', 'PEM Formatter', 'Validate the Base64 body and format a PEM block.', 'Certificates', [content('PEM certificate or key')]),
  ] },
  { id: 'email', name: 'Email', icon: 'mail', color: '#fbbf24', tools: [
    tool('spf-lookup', 'SPF Lookup', 'Find the SPF policy published in DNS.', 'Authentication', [domain()], 'SPF'),
    tool('dkim-lookup', 'DKIM Lookup', 'Find the public DKIM record for your domain and selector.', 'Authentication', [domain(), text('selector', 'DKIM selector', '', 'selector1')], 'DKIM'),
    tool('dmarc-lookup', 'DMARC Lookup', 'Inspect your domain’s DMARC policy.', 'Authentication', [domain()], 'DMARC'),
    tool('bimi-lookup', 'BIMI Lookup', 'Find a BIMI record at the selected DNS selector.', 'Authentication', [domain(), text('selector', 'BIMI selector', 'default')], 'BIMI'),
    tool('email-dns-health', 'Email DNS Health', 'Check for MX, SPF and DMARC records without sending email.', 'Diagnostics', [domain()], 'EMAIL'),
    tool('spf-generator', 'SPF Generator', 'Create a policy for the mail providers you authorize.', 'Generators', [text('include', 'Provider include domains, separated by commas', '', '_spf.google.com, spf.protection.outlook.com'), select('policy', 'Policy for other senders', ['~all', '-all'])]),
    tool('dmarc-generator', 'DMARC Generator', 'Create a DMARC record with reporting and alignment options.', 'Generators', [select('policy', 'Policy', ['none', 'quarantine', 'reject']), text('email', 'Aggregate report email', '', 'dmarc@example.com'), select('alignment', 'Alignment', ['Relaxed', 'Strict'])]),
  ] },
  { id: 'ssh', name: 'SSH & Keys', icon: 'key', color: '#a78bfa', tools: [
    tool('ssh-key-generator', 'SSH Key Generator', 'Generate an RSA OpenSSH public key and PKCS#8 private key in your browser.', 'Keys', [select('bits', 'RSA key size', ['2048', '4096']), text('comment', 'Public key comment', 'user@workstation')]),
    tool('ssh-fingerprint', 'SSH Key Fingerprint', 'Compute the SHA-256 fingerprint of an OpenSSH public key.', 'Keys', [content('OpenSSH public key')]),
    tool('ssh-config', 'SSH Config Builder', 'Build an SSH host configuration entry.', 'Configuration', [text('alias', 'Host alias', 'production'), text('host', 'Server hostname', '', 'server.example.com'), text('user', 'SSH user', 'ubuntu'), number('port', 'SSH port', 22, 1, 65535), text('identity', 'Identity file', '~/.ssh/id_rsa')]),
  ] },
  { id: 'web', name: 'Web', icon: 'language', color: '#22d3ee', tools: [
    tool('url-inspector', 'URL Inspector', 'Split a URL into its host, path, query and fragment.', 'Inspect', [text('input', 'URL', '', 'https://example.com/path?key=value')]),
    tool('robots-generator', 'Robots.txt Generator', 'Create a robots.txt file with a crawler rule and sitemap.', 'Site configuration', [text('agent', 'User agent', '*'), text('disallow', 'Disallowed paths, separated by commas', '/admin/, /private/'), text('sitemap', 'Sitemap URL', '', 'https://example.com/sitemap.xml')]),
    tool('open-graph-generator', 'Open Graph Generator', 'Generate social sharing meta tags for a webpage.', 'Site configuration', [text('title', 'Page title'), text('description', 'Description'), text('url', 'Page URL', '', 'https://example.com/'), text('image', 'Image URL', '', 'https://example.com/image.jpg')]),
  ] },
  { id: 'network', name: 'Network', icon: 'hub', color: '#fb7185', tools: [
    tool('subnet-calculator', 'Subnet Calculator', 'Calculate an IPv4 network, broadcast, mask and usable address range.', 'IP addressing', [text('input', 'IPv4 CIDR', '', '192.168.1.10/24')]),
    tool('ipv4-converter', 'IPv4 Converter', 'Convert an IPv4 address to binary, hexadecimal and decimal.', 'IP addressing', [text('input', 'IPv4 address', '', '192.168.1.1')]),
    tool('ipv6-expand', 'IPv6 Expander', 'Expand a compressed IPv6 address into eight groups.', 'IP addressing', [text('input', 'IPv6 address', '', '2001:db8::1')]),
  ] },
  { id: 'generators', name: 'Generators', icon: 'auto_fix_high', color: '#f472b6', tools: [
    tool('uuid-generator', 'UUID Generator', 'Generate random version 4 UUIDs.', 'Identifiers', [number('count', 'Number of UUIDs', 5, 1, 100)]),
    tool('api-key-generator', 'API Key Generator', 'Generate a random hexadecimal API key.', 'Random data', [number('bytes', 'Random bytes', 32, 16, 128)]),
    tool('random-string', 'Random String Generator', 'Generate random letters and numbers.', 'Random data', [number('length', 'Length', 32, 1, 512)]),
    tool('mac-generator', 'MAC Address Generator', 'Generate locally administered unicast MAC addresses.', 'Random data', [number('count', 'Number of addresses', 5, 1, 100)]),
    tool('cron-generator', 'Crontab Generator', 'Build a five-field cron expression for a daily or hourly schedule.', 'Scheduling', [select('schedule', 'Schedule', ['Daily', 'Hourly', 'Every 15 minutes', 'Weekdays']), number('hour', 'Hour (24-hour)', 9, 0, 23), number('minute', 'Minute', 0, 0, 59)]),
  ] },
  { id: 'converters', name: 'Converters', icon: 'swap_horiz', color: '#2dd4bf', tools: [
    tool('base64', 'Base64 Encoder / Decoder', 'Encode or decode Unicode text as Base64.', 'Text', [content(), select('mode', 'Action', ['Encode', 'Decode'])]),
    tool('url-encode', 'URL Encoder / Decoder', 'Encode or decode a URL component.', 'Text', [content(), select('mode', 'Action', ['Encode', 'Decode'])]),
    tool('json-to-csv', 'JSON to CSV', 'Convert an array of flat JSON objects into CSV.', 'Data', [content('JSON array')]),
    tool('csv-to-json', 'CSV to JSON', 'Convert CSV with a header row into JSON objects.', 'Data', [content('CSV text')]),
    tool('epoch-converter', 'Epoch Converter', 'Convert Unix seconds or milliseconds into a UTC date and back.', 'Date & time', [text('input', 'Unix timestamp or ISO date', '', '1735689600 or 2025-01-01T00:00:00Z')]),
  ] },
  { id: 'utilities', name: 'Utilities', icon: 'build', color: '#818cf8', tools: [
    tool('json-formatter', 'JSON Formatter & Validator', 'Validate, pretty-print or minify JSON.', 'Developer', [content('JSON'), select('mode', 'Format', ['Pretty print', 'Minify'])]),
    tool('jwt-decoder', 'JWT Decoder', 'Decode JWT header and payload. This does not verify its signature.', 'Developer', [content('JWT token')]),
    tool('text-statistics', 'Text Statistics', 'Count characters, words, lines and UTF-8 bytes.', 'Text', [content()]),
    tool('case-converter', 'Case Converter', 'Convert text to upper, lower, title or sentence case.', 'Text', [content(), select('mode', 'Case', ['UPPERCASE', 'lowercase', 'Title Case', 'Sentence case'])]),
    tool('date-difference', 'Date Difference', 'Calculate elapsed time between two dates in UTC.', 'Date & time', [text('start', 'Start date (YYYY-MM-DD)', '', '2026-01-01'), text('end', 'End date (YYYY-MM-DD)', '', '2026-12-31')]),
  ] },
];
export const SITE_TOOLS = TOOL_CATEGORIES.flatMap(category => category.tools.map(item => ({ ...item, categoryId: category.id, categoryName: category.name })));
