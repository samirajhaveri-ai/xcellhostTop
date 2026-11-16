import { normalizeDnsDomain } from './dns-lookup';
import { DmarcPolicy, dmarcTreatment, parseDmarcRecord } from './dmarc-lookup';
import { dnsCsv } from './dns-report-export';

export interface DmarcGeneratorInput {
  domain: string; standard: 'current' | 'legacy'; policy: DmarcPolicy; subdomain: DmarcPolicy | 'inherit'; nonexistent: DmarcPolicy | 'inherit';
  adkim: 'r' | 's'; aspf: 'r' | 's'; testing: boolean; aggregate: string[]; failure: string[]; failureOptions: string;
  percentage: string; interval: string; ttl: string;
}
export interface GeneratedDmarcPolicy {
  domain: string; owner: string; generatedAt: string; record: string; zoneFile: string; chunks: string[]; ttl: number; bytes: number;
  tags: { name: string; value: string; meaning: string }[]; requestedPolicy: DmarcPolicy; subdomainPolicy: DmarcPolicy; nonexistentPolicy: DmarcPolicy;
  settings: DmarcGeneratorInput; warnings: string[]; notes: string[];
}
export const DMARC_GENERATOR_DEFAULTS: DmarcGeneratorInput = { domain:'', standard:'current', policy:'none', subdomain:'inherit', nonexistent:'inherit', adkim:'r', aspf:'r', testing:false, aggregate:[], failure:[], failureOptions:'0', percentage:'100', interval:'86400', ttl:'3600' };
const policy = (value: unknown): value is DmarcPolicy => value === 'none' || value === 'quarantine' || value === 'reject';
export function normalizeDmarcOwner(value: string): string {
  const input = value.trim();
  if (!input || /[\s/:;@?#%\\"'<>]/.test(input)) throw new Error('Enter a bare domain such as example.com, without a URL, email address or _dmarc prefix.');
  const domain = normalizeDnsDomain(input);
  if (domain.includes('_') || ('_dmarc.' + domain).length > 253) throw new Error('Use the domain itself without _dmarc, and keep the resulting DNS owner within 253 characters.');
  return domain;
}
/** Simple ASCII dot-atom mailbox input; no headers, display names, URI size suffixes or quoted local parts. */
export function normalizeDmarcMailbox(value: string): string {
  const input = value.trim().replace(/^mailto:/i, '');
  if (input.length > 254 || /[\s\x00-\x1f\x7f-\uffff]/.test(input)) throw new Error('Use an ASCII reporting mailbox such as reports@example.com, without display names or spaces.');
  const parts = input.split('@');
  if (parts.length !== 2 || !parts[0] || parts[0].length > 64 || !/^[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+(?:\.[A-Za-z0-9!#$%&'*+\-/=?^_`{|}~]+)*$/.test(parts[0]) || /[/?#:%\\"'<>;]/.test(parts[1])) throw new Error('Enter a reporting email address without mail headers, a URL, a size suffix or a quoted local part.');
  const domain = normalizeDnsDomain(parts[1]); if (domain.includes('_')) throw new Error('Use a valid reporting email domain.');
  return parts[0] + '@' + domain;
}
export function dmarcMailboxUri(mailbox: string): string {
  const normalized = normalizeDmarcMailbox(mailbox), split = normalized.lastIndexOf('@');
  return 'mailto:' + encodeURIComponent(normalized.slice(0,split)).replace(/'/g,'%27') + '@' + normalized.slice(split+1);
}
export function splitDmarcMailboxes(value: string): string[] {
  if (value.length > 4096) throw new Error('The reporting address list is too long.');
  return value.trim().split(/[\s,]+/).filter(Boolean);
}
function wholeNumber(value: string, maximum: number, label: string): number {
  if (typeof value !== 'string' || !/^\d+$/.test(value.trim()) || Number(value) > maximum) throw new Error(label + ' must be a whole number from 0 to ' + maximum + '.'); return Number(value);
}
export function generateDmarcPolicy(input: DmarcGeneratorInput): GeneratedDmarcPolicy {
  const domain = normalizeDmarcOwner(input.domain), owner = '_dmarc.' + domain;
  if (!['current','legacy'].includes(input.standard) || !policy(input.policy) || input.subdomain !== 'inherit' && !policy(input.subdomain) || input.nonexistent !== 'inherit' && !policy(input.nonexistent) || !['r','s'].includes(input.adkim) || !['r','s'].includes(input.aspf) || typeof input.testing !== 'boolean') throw new Error('Choose supported policy, alignment and testing settings.');
  if (input.standard === 'legacy' && (input.testing || input.nonexistent !== 'inherit')) throw new Error('Legacy mode cannot emit t or np. Disable testing and choose inherited non-existent-subdomain policy.');
  for (const field of ['aggregate','failure'] as const) if (!Array.isArray(input[field]) || input[field].length > 5 || input[field].some(value => typeof value !== 'string')) throw new Error('Use up to five reporting mailboxes in each list.');
  const aggregate = [...new Set(input.aggregate.map(normalizeDmarcMailbox))], failure = [...new Set(input.failure.map(normalizeDmarcMailbox))];
  if (typeof input.failureOptions !== 'string' || !/^[01ds](?::[01ds])*$/.test(input.failureOptions) || new Set(input.failureOptions.split(':')).size !== input.failureOptions.split(':').length || input.failureOptions.includes('0') && input.failureOptions.includes('1')) throw new Error('Failure options must use unique 0, 1, d or s values separated by colons; 0 and 1 cannot be combined.');
  const failureOptions = ['0','1','d','s'].filter(value => input.failureOptions.split(':').includes(value)).join(':');
  const ttl = wholeNumber(input.ttl,2147483647,'TTL');
  const percentage = input.standard === 'legacy' ? wholeNumber(input.percentage,100,'Legacy percentage') : 100;
  const interval = input.standard === 'legacy' ? wholeNumber(input.interval,4294967295,'Legacy reporting interval') : 86400;
  const tags: GeneratedDmarcPolicy['tags'] = [];
  const add = (name: string, value: string, meaning: string) => tags.push({name,value,meaning});
  add('v','DMARC1','DMARC version; this must be the first tag.');
  add('p',input.policy,'Requested handling for mail that fails DMARC using this domain. Receiver handling can differ.');
  if (input.subdomain !== 'inherit') add('sp',input.subdomain,'Existing-subdomain policy when this is the applicable organizational/PSD policy. A more specific policy or discovery boundary can take precedence.');
  if (input.standard === 'current' && input.nonexistent !== 'inherit') add('np',input.nonexistent,'Requested handling for non-existent subdomains when this record is inherited.');
  add('adkim',input.adkim,input.adkim === 'r' ? 'Relaxed DKIM alignment: a shared organizational domain is sufficient.' : 'Strict DKIM alignment: the authenticated signing domain must exactly match the visible From domain.');
  add('aspf',input.aspf,input.aspf === 'r' ? 'Relaxed SPF alignment: a shared organizational domain is sufficient.' : 'Strict SPF alignment: the authenticated SPF identifier must exactly match the visible From domain.');
  if (input.standard === 'current' && input.testing) add('t','y','RFC 9989 testing requests one level less strict handling: reject to quarantine, quarantine to none; none is unchanged.');
  if (input.standard === 'legacy') add('pct',String(percentage),'Legacy RFC 7489 requested percentage. Removed by RFC 9989; current receivers can ignore it.');
  if (aggregate.length) add('rua',aggregate.map(dmarcMailboxUri).join(','),'Aggregate-report destinations. Publication alone does not establish authorization, receipt or reporting support.');
  if (failure.length) { add('ruf',failure.map(dmarcMailboxUri).join(','),'Message-specific failure-report destinations; receiver support and privacy handling vary.'); add('fo',failureOptions,'Failure-report triggers. 0 and 1 are alternatives; d and s request mechanism-specific reports.'); }
  if (input.standard === 'legacy' && aggregate.length) add('ri',String(interval),'Legacy requested aggregate-report interval in seconds. Removed by RFC 9989 and not a delivery guarantee.');
  const record = tags.map(tag => tag.name + '=' + tag.value).join('; '), bytes = new TextEncoder().encode(record).length;
  if (bytes > 4096) throw new Error('The record exceeds this tool\'s 4096-byte limit. Reduce the reporting destination lists.');
  const parsed = parseDmarcRecord(record); if (!parsed.usable) throw new Error('Generated DMARC syntax needs review: ' + parsed.errors.join(' '));
  const subdomain = input.subdomain === 'inherit' ? input.policy : input.subdomain, nonexistent = input.nonexistent === 'inherit' ? subdomain : input.nonexistent;
  const testing = input.standard === 'current' && input.testing;
  const warnings: string[] = [];
  if (input.policy === 'none') warnings.push('p=none requests no special disposition for failing mail; it does not guarantee delivery or ask receivers to block spoofing.');
  if (!aggregate.length) warnings.push('No rua destination is generated, so this policy does not request aggregate reports.');
  if (input.policy !== 'none') warnings.push('Review real SPF/DKIM alignment and legitimate sending streams before requesting stricter handling. Forwarding and mailing lists can affect authentication.');
  if (input.policy === 'reject') warnings.push('Current DMARC guidance cautions against p=reject for general-purpose email domains. Review your domain use, interoperability and message evidence before deploying it.');
  if (testing) warnings.push('Testing is enabled with t=y. Current-standard treatment is reduced one level; receivers using older DMARC rules may ignore this tag and apply the declared policy.');
  if (input.standard === 'legacy') warnings.push('Legacy mode emits pct and, with rua, ri. RFC 9989 removed these tags; they do not limit current-standard policy handling or guarantee report timing.');
  if (input.standard === 'legacy' && percentage < 100) warnings.push('The legacy partial percentage is a request, not an assurance of partial enforcement. Do not rely on it to protect legitimate senders from disruption.');
  if (failure.length) warnings.push('Failure reports can include message-specific information, and many receivers restrict them. Confirm destination ownership and handling requirements; publishing ruf does not guarantee reports.');
  const external = [...aggregate,...failure].some(mailbox => { const host = mailbox.slice(mailbox.lastIndexOf('@')+1); return host !== domain && !host.endsWith('.'+domain); });
  if (external) warnings.push('One or more report destinations are outside the policy domain. External-report authorization may be needed; this generator does not query or verify it.');
  if (input.adkim === 's' || input.aspf === 's') warnings.push('Strict alignment requires an exact domain match for that mechanism. Confirm your actual authenticated identifiers before publishing.');
  if (bytes > 450) warnings.push('This is a long TXT value. Review total DNS response size; splitting into quoted strings does not reduce its length.');
  const chunks = record.match(/.{1,255}/g)!;
  return {domain,owner,generatedAt:new Date().toISOString(),record,zoneFile:owner+'. '+ttl+' IN TXT '+chunks.map(chunk=>'"'+chunk+'"').join(' ')+'\n',chunks,ttl,bytes,tags,requestedPolicy:dmarcTreatment(input.policy,testing),subdomainPolicy:dmarcTreatment(subdomain,testing),nonexistentPolicy:dmarcTreatment(nonexistent,testing),settings:{domain,standard:input.standard,policy:input.policy,subdomain:input.subdomain,nonexistent:input.nonexistent,adkim:input.adkim,aspf:input.aspf,testing,aggregate,failure,failureOptions,percentage:String(percentage),interval:String(interval),ttl:String(ttl)},warnings,notes:[
    'Generated locally. No DNS query, publishing action, report transmission, destination authorization or actual message authentication was performed.',
    'Publish one intended DMARC TXT policy at '+owner+'. Replace or merge an existing policy instead of adding a conflicting second DMARC record.',
    'Domain policy is a request to receivers. A message passes DMARC when SPF or DKIM passes and aligns with the visible From domain; both are not required to pass.',
    'Subdomain previews describe this record\'s branches, not a discovered policy for every child domain. More specific policy records and discovery boundaries can override inheritance.',
    'Mailbox input supports plain ASCII dot-atom email addresses (or a mailto prefix). Display names, mail headers, URI size suffixes and quoted local parts are not supported. Special local-part characters are URI-encoded.',
    'Multiple quoted strings in the zone-file snippet form one TXT record and concatenate without inserted spaces. Most DNS interfaces expect the unquoted logical TXT value.',
  ]};
}
export function dmarcGeneratorShareUrl(base: string, input: DmarcGeneratorInput): string {
  const result = generateDmarcPolicy(input), url = new URL(base); url.search = new URLSearchParams({config:JSON.stringify({version:1,...result.settings})}).toString();url.hash='';
  if(url.href.length>16000)throw new Error('Configuration is too large for a share link. Download JSON instead.');return url.href;
}
export function parseDmarcGeneratorSettings(value: string): DmarcGeneratorInput {
  if(value.length>12000)throw new Error('Shared configuration is too large.');let parsed:unknown;try{parsed=JSON.parse(value);}catch{throw new Error('Shared configuration is not valid JSON.');}
  if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))throw new Error('Shared configuration must be an object.');const data=parsed as Record<string,unknown>;
  if(data['version']!==1||typeof data['domain']!=='string')throw new Error('Unsupported shared configuration.');
  const input = Object.fromEntries(Object.keys(DMARC_GENERATOR_DEFAULTS).map(key=>[key,data[key]])) as unknown as DmarcGeneratorInput;
  return generateDmarcPolicy(input).settings;
}
export function dmarcGeneratorCsv(result: GeneratedDmarcPolicy): string {
  return dnsCsv([['XcellHost DMARC configuration - not published',result.domain,result.generatedAt,result.settings.standard],['DNS owner','Type','TTL','TXT value'],[result.owner,'TXT',String(result.ttl),result.record],[],['Tag','Value','Meaning'],...result.tags.map(tag=>[tag.name,tag.value,tag.meaning]),[],['Review notes'],...result.warnings.map(warning=>[warning]),[],['Publication notes'],...result.notes.map(note=>[note])]);
}
