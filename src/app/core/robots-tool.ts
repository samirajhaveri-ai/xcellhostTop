export const ROBOTS_LIMIT = 512000;
export interface RobotsRule { kind: 'allow' | 'disallow'; pattern: string; line: number; }
export interface RobotsGroup { agents: string[]; line: number; rules: RobotsRule[]; }
export interface RobotsFinding { line: number; level: 'warning' | 'info'; message: string; }
export interface RobotsDocument { text: string; groups: RobotsGroup[]; sitemaps: { url: string; line: number }[]; findings: RobotsFinding[]; bytes: number; }
export interface RobotsDecision { allowed: boolean; crawler: string; path: string; groups: RobotsGroup[]; rule: RobotsRule | null; reason: string; }
export interface RobotsFetchResult { url: string; finalUrl: string; status: number; contentType: string; text: string; truncated: boolean; checkedAt: string; redirects: { url: string; status: number }[]; sitemaps: { url: string; finalUrl?: string; status?: number; xmlPrefix?: boolean; error?: string }[]; }
export const ROBOTS_CRAWLERS = ['Googlebot', 'Bingbot', 'DuckDuckBot', 'GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'Google-Extended', 'CCBot'];
export const ROBOTS_SAMPLE = '# Example policy — replace these paths before publishing\nUser-agent: *\nDisallow: /admin/\nDisallow: /private/\nAllow: /private/public/\n\nUser-agent: GPTBot\nDisallow: /\n\nSitemap: https://example.com/sitemap.xml\n';
const encoder = new TextEncoder();
export function robotsOrigin(value: string): URL {
  if (typeof value !== 'string' || value.length > 2048 || /[\s\x00-\x1f\\]/.test(value)) throw new Error('Enter a domain or HTTP(S) URL without spaces or backslashes.');
  let url: URL; try { url = new URL(/^[a-z][a-z\d+.-]*:\/\//i.test(value) ? value : 'https://' + value); } catch { throw new Error('Enter a valid domain or HTTP(S) URL.'); }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || (url.port && !['80','443'].includes(url.port))) throw new Error('Use HTTP(S) without credentials, on port 80 or 443.');
  if (!url.hostname.includes('.') || !/^[a-z\d.-]+$/i.test(url.hostname) || /^[\d.]+$/.test(url.hostname) || /\.(?:localhost|local|internal|test|invalid)$/i.test(url.hostname)) throw new Error('Use a public website hostname. Local hosts and IP-literal targets are not supported.');
  url.hash = ''; return url;
}
function canonical(value: string, pattern: boolean): string {
  let result = '';
  for (let i = 0; i < value.length;) {
    if (value[i] === '%') {
      const hex = value.slice(i + 1, i + 3); if (!/^[a-f\d]{2}$/i.test(hex)) throw new Error('Use valid percent-encoded bytes such as %20.');
      const c = String.fromCharCode(parseInt(hex,16)); result += /^[A-Za-z\d._~-]$/.test(c) ? c : '%' + hex.toUpperCase(); i += 3;
    } else {
      const code = value.codePointAt(i)!, c = String.fromCodePoint(code); i += c.length;
      if (code > 127 || code <= 32 || (!pattern && c === '*') || (c === '$' && (!pattern || i < value.length))) result += Array.from(encoder.encode(c), b => '%' + b.toString(16).padStart(2,'0').toUpperCase()).join(''); else result += c;
    }
  }
  return result;
}
export function robotsPath(value: string, origin?: URL): string {
  if (typeof value !== 'string' || value.length > 4096 || /[\x00-\x1f\\]/.test(value)) throw new Error('Use a path or same-origin URL up to 4,096 characters.');
  const cleaned = value.trim() || '/'; let url: URL;
  try { url = new URL(cleaned, origin || 'https://example.com'); } catch { throw new Error('Enter a valid path or URL.'); }
  if (origin && url.origin !== origin.origin) throw new Error('The test URL must use the same scheme, host and port as the robots.txt origin.');
  if (!origin && !cleaned.startsWith('/') && !/^https?:\/\//i.test(cleaned)) throw new Error('Start a test path with /.');
  return canonical(url.pathname + url.search, false);
}
export function parseRobots(text: string): RobotsDocument {
  const bytes = encoder.encode(text).length; if (bytes > ROBOTS_LIMIT) throw new Error('Use robots.txt content up to 500 KiB (512,000 bytes).');
  const groups: RobotsGroup[] = [], findings: RobotsFinding[] = [], sitemaps: RobotsDocument['sitemaps'] = [];
  let group: RobotsGroup | undefined, hasRules = false, ruleCount = 0;
  text = text.replace(/^\uFEFF/,'').replace(/\r\n?/g,'\n');
  if (/<(?:!doctype\s+html|html|body)(?:\s|>)/i.test(text.slice(0,8192))) findings.push({line:1,level:'warning',message:'The response looks like HTML. Only parseable robots directives are considered; check for a login page or catch-all route.'});
  const rows = text.split('\n'); if (rows.length > 12000) throw new Error('Use at most 12,000 lines.');
  rows.forEach((raw,index) => {
    const line = index + 1, value = raw.split('#',1)[0].trim(); if (!value) return;
    const issue = (message: string, level: RobotsFinding['level'] = 'warning') => { if (findings.length < 250) findings.push({line,level,message}); };
    const colon = value.indexOf(':'); if (colon < 1) { issue('Expected a directive and colon. This line is ignored.'); return; }
    const key = value.slice(0,colon).trim().toLowerCase(), body = value.slice(colon+1).trim();
    if (key === 'user-agent') {
      if (!/^(?:\*|[A-Za-z_-]+)$/.test(body) || body.length > 100) { issue('Use a crawler product token or *; this User-agent line is ignored.'); return; }
      if (!group || hasRules) { group = {agents:[],rules:[],line}; groups.push(group); hasRules = false; }
      group.agents.push(body); return;
    }
    if (key === 'allow' || key === 'disallow') {
      if (!group) { issue('This rule is before any User-agent group and is ignored.'); return; }
      hasRules = true;
      if (!body) { issue('Empty ' + key + ' does not restrict access and is ignored for matching.','info'); return; }
      if (!body.startsWith('/') || /[\s\x00-\x1f\x7f]/.test(body) || body.length > 2048) { issue('Use a / path pattern up to 2,048 characters without whitespace. This rule is ignored.'); return; }
      try { canonical(body,true); } catch { issue('Malformed percent encoding; this rule is ignored.'); return; }
      if (++ruleCount > 3000) throw new Error('Use at most 3,000 non-empty crawl rules.');
      group.rules.push({kind:key,pattern:body,line}); return;
    }
    if (key === 'sitemap') {
      try { const url = new URL(body); if (!['http:','https:'].includes(url.protocol) || url.username || url.password || url.hash) throw new Error(); if (!sitemaps.some(s => s.url === url.href)) sitemaps.push({url:url.href,line}); }
      catch { issue('Sitemap needs an absolute HTTP(S) URL without credentials or a fragment.'); } return;
    }
    if (key === 'crawl-delay') { issue('Crawl-delay is outside the core matching model. Google ignores this directive; support varies by crawler.','info'); return; }
    if (key === 'host' || key === 'noindex') { issue(key + ' is not a crawl-access rule in this tester.','info'); return; }
    issue('Unrecognized directive; this line is ignored.');
  });
  if (!groups.length) findings.push({line:0,level:'warning',message:'No valid User-agent group was found. This parsed text defines no crawl restrictions.'});
  return {text,groups,sitemaps,findings,bytes};
}
function matches(pattern: string, target: string): boolean {
  const anchor = pattern.endsWith('$'); if (anchor) pattern = pattern.slice(0,-1);
  const segments = pattern.split('*'); let offset = 0;
  if (!target.startsWith(segments[0])) return false; offset = segments[0].length;
  if (segments.length === 1) return !anchor || offset === target.length;
  for (let i = 1; i < segments.length; i++) {
    const part = segments[i];
    if (i === segments.length - 1 && anchor) return target.endsWith(part) && target.length - part.length >= offset;
    const next = target.indexOf(part,offset); if (next < 0) return false; offset = next + part.length;
  }
  return true;
}
export function testRobots(document: RobotsDocument, crawler: string, path: string): RobotsDecision {
  if (!/^[A-Za-z_-]{1,100}$/.test(crawler) && crawler !== '*') throw new Error('Use a crawler product token containing letters, underscores or hyphens.');
  const lower = crawler.toLowerCase(); let specificity = 0;
  const scores = document.groups.map(group => Math.max(0,...group.agents.map(agent => agent !== '*' && lower === agent.toLowerCase() ? agent.length : 0)));
  specificity = Math.max(0,...scores);
  const groups = document.groups.filter((g,i) => specificity ? scores[i] === specificity : g.agents.includes('*'));
  const target = canonical(path,false);
  if (target.split('?')[0] === '/robots.txt') return {allowed:true,crawler,path:target,groups,rule:null,reason:'/robots.txt is implicitly allowed by the protocol.'};
  let rule: RobotsRule | null = null, best = -1;
  for (const group of groups) for (const candidate of group.rules) {
    const normalized = canonical(candidate.pattern,true); if (!matches(normalized,target)) continue;
    const score = encoder.encode(normalized).length;
    if (score > best || (score === best && candidate.kind === 'allow' && rule?.kind !== 'allow')) { best = score; rule = candidate; }
  }
  return {allowed:!rule || rule.kind === 'allow',crawler,path:target,groups,rule,reason:rule ? 'Longest matching rule' + (rule.kind === 'allow' ? '; Allow wins equal-length ties.' : '.') : groups.length ? 'No matching non-empty rule in the selected group(s).' : 'No matching crawler or wildcard group; this parsed file imposes no restriction.'};
}
export function robotsHttpMeaning(status: number): 'rules' | 'no-file' | 'unavailable' {
  return status >= 200 && status < 300 ? 'rules' : status >= 400 && status < 500 && status !== 429 ? 'no-file' : 'unavailable';
}
export function generateRobots(agent: string, allow: string, disallow: string, sitemap: string): string {
  if (!/^(?:\*|[A-Za-z_-]{1,100})$/.test(agent.trim())) throw new Error('Use a crawler product token or *.');
  const lines = ['User-agent: ' + agent.trim()];
  for (const [kind,value] of [['Allow',allow],['Disallow',disallow]]) {
    if (value.length > 16000) throw new Error('Use a path list up to 16,000 characters.');
    const paths = value.replace(/\r\n?/g,'\n').split('\n').map(v=>v.trim()).filter(Boolean);
    if (paths.length > 100) throw new Error('Use at most 100 paths per rule type.');
    for (const path of paths) { if (!path.startsWith('/') || /[\s#\x00-\x1f]/.test(path) || path.length > 2048) throw new Error('Use one / path pattern per line, without whitespace or # comments.'); canonical(path,true); lines.push(kind + ': ' + path); }
  }
  if (lines.length === 1) lines.push('Disallow:');
  if (sitemap.trim()) { const url = new URL(sitemap.trim()); if (!['http:','https:'].includes(url.protocol) || url.username || url.password || url.hash) throw new Error('Use an absolute HTTP(S) sitemap URL.'); lines.push('','Sitemap: ' + url.href); }
  return lines.join('\n') + '\n';
}
