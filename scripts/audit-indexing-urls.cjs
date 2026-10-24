const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ts = require('typescript');

const root = path.resolve(__dirname, '..');
const outputDir = path.join(root, 'output');
const jsonPath = path.join(outputDir, 'indexing-sitemap-audit-2026-10-24.json');
const csvPath = path.join(outputDir, 'indexing-sitemap-audit-2026-10-24.csv');
const markdownPath = path.join(outputDir, 'indexing-sitemap-audit-2026-10-24.md');
const origin = 'https://xcellhost.cloud';

const escapeCsv = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
const stripHtml = html => html
  .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
  .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
  .replace(/<!--([\s\S]*?)-->/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&#(?:x([0-9a-f]+)|(\d+));/gi, (_, hex, decimal) =>
    String.fromCodePoint(parseInt(hex || decimal, hex ? 16 : 10)))
  .replace(/\s+/g, ' ')
  .trim();

const tagText = (html, tag) => stripHtml(html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))?.[1] ?? '');
const canonicalFrom = (html, base) => {
  const tags = html.match(/<link\b[^>]*>/gi) ?? [];
  const tag = tags.find(value => /\brel\s*=\s*["'][^"']*canonical/i.test(value));
  const href = tag?.match(/\bhref\s*=\s*["']([^"']+)/i)?.[1];
  if (!href) return '';
  try { return new URL(href, base).href; } catch { return ''; }
};
const metaRobotsFrom = html => (html.match(/<meta\b[^>]*\bname\s*=\s*["']robots["'][^>]*>/i)?.[0]
  ?.match(/\bcontent\s*=\s*["']([^"']*)/i)?.[1] ?? '').toLowerCase();
const normalizeUrl = value => {
  try {
    const url = new URL(value, origin);
    url.hash = '';
    if (!url.pathname.endsWith('/') && !/\.[a-z0-9]{2,8}$/i.test(url.pathname)) url.pathname += '/';
    return url.href;
  } catch { return ''; }
};
const normalizePath = value => {
  try {
    const url = new URL(value, origin);
    return decodeURIComponent(url.pathname).replace(/\/+$/, '') || '/';
  } catch { return ''; }
};

const sitemapXml = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const sitemap = new Set([...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => normalizeUrl(match[1])));
const sitemapByPath = new Map([...sitemap].map(url => [normalizePath(url).toLowerCase(), url]));
const sitemapBySlug = new Map();
for (const [pathname, url] of sitemapByPath) {
  const slug = pathname.split('/').filter(Boolean).at(-1) ?? '';
  if (!sitemapBySlug.has(slug)) sitemapBySlug.set(slug, []);
  sitemapBySlug.get(slug).push(url);
}

const moduleCache = new Map();
function loadTypeScript(filename) {
  if (moduleCache.has(filename)) return moduleCache.get(filename);
  const module = { exports: {} };
  moduleCache.set(filename, module.exports);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  new Function('require', 'module', 'exports', source)((id) => {
    if (!id.startsWith('.')) throw new Error(`Unexpected runtime import: ${id}`);
    return loadTypeScript(path.resolve(path.dirname(filename), `${id}.ts`));
  }, module, module.exports);
  return module.exports;
}
const { routes } = loadTypeScript(path.join(root, 'src/app/app.routes.ts'));
const redirects = new Map(routes
  .filter(route => route.redirectTo !== undefined && !route.path.includes(':') && !route.path.includes('*'))
  .map(route => [normalizePath(`/${route.path}`).toLowerCase(), normalizeUrl(`/${String(route.redirectTo).replace(/^\/+/, '')}`)]));

const cmsSnapshot = JSON.parse(fs.readFileSync(path.join(root, 'public/sitemap-cms-pages.json'), 'utf8'));
const cmsBlogs = (cmsSnapshot.pages ?? []).filter(page => String(page.path).startsWith('insights/'));
const stopWords = new Set(['a', 'an', 'and', 'for', 'from', 'how', 'in', 'of', 'on', 'the', 'to', 'with', 'your', 'sample', 'test', 'part', 'copy', '2024', '2025', '2026']);
const tokens = value => new Set(String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(/\s+/).filter(word => word.length > 1 && !stopWords.has(word)));
const fuzzyBlogCandidate = pathname => {
  const source = tokens(pathname.split('/').filter(Boolean).at(-1) ?? '');
  if (source.size < 3) return null;
  const ranked = cmsBlogs.map(page => {
    const target = tokens(`${page.path} ${page.title}`);
    const shared = [...source].filter(word => target.has(word)).length;
    return { page, shared, score: shared / Math.min(source.size, target.size) };
  }).filter(item => item.shared >= 3 && item.score >= 0.6)
    .sort((a, b) => b.score - a.score || b.shared - a.shared);
  if (!ranked.length || (ranked[1] && ranked[0].score === ranked[1].score && ranked[0].shared === ranked[1].shared)) return null;
  return { url: normalizeUrl(`/${ranked[0].page.path}`), type: 'probable-blog', score: ranked[0].score };
};
const publishedCandidate = inputUrl => {
  const parsed = new URL(inputUrl, origin);
  if (parsed.search) return null;
  const pathname = normalizePath(inputUrl).toLowerCase();
  const exact = sitemapByPath.get(pathname);
  if (exact) return { url: exact, type: pathname.startsWith('/insights/') ? 'blog' : 'published-page', score: 1 };
  const redirect = redirects.get(pathname);
  if (redirect && sitemap.has(redirect)) return { url: redirect, type: 'route-redirect', score: 1 };
  const slug = pathname.split('/').filter(Boolean).at(-1) ?? '';
  const sameSlug = sitemapBySlug.get(slug) ?? [];
  if (sameSlug.length === 1 && pathname.split('/').filter(Boolean).length > 1) {
    return { url: sameSlug[0], type: 'legacy-taxonomy-alias', score: 1 };
  }
  return pathname.split('/').filter(Boolean).length === 1 ? fuzzyBlogCandidate(pathname) : null;
};

const sourceRoots = ['src', 'public'];
const sourceExtensions = new Set(['.ts', '.html', '.json', '.xml']);
const sourceText = [];
function collectFiles(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!['assets', 'media'].includes(entry.name)) collectFiles(target);
    } else if (sourceExtensions.has(path.extname(entry.name))) {
      if (/^sitemap(?:-cms-pages|-pages)?\.(?:xml|json)$/i.test(entry.name)) continue;
      sourceText.push(fs.readFileSync(target, 'utf8'));
    }
  }
}
for (const directory of sourceRoots) collectFiles(path.join(root, directory));
const repositoryText = sourceText.join('\n');

const excludedPath = pathname => /(?:^|\/)(?:under-construction|no-data|404|login|signup|checkout|api|wp-admin|wp-json|feed|author|tag|category)(?:\/|$)/i.test(pathname);
const excludedQuery = url => [...url.searchParams.keys()].some(key =>
  /^(?:elementskit_template|preview|amp|replytocom|attachment_id|rest_route|s|p|page_id)$/i.test(key));
const looksNotFound = (title, heading, text) => /(?:404|page not found|nothing here|does not exist)/i.test(`${title} ${heading} ${text.slice(0, 500)}`);

async function fetchPage(inputUrl) {
  const started = Date.now();
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(inputUrl, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        accept: 'text/html,application/xhtml+xml',
        'user-agent': 'XcellHost-Sitemap-Audit/1.0',
      },
    });
    const contentType = response.headers.get('content-type') ?? '';
    const html = /text\/html|application\/xhtml\+xml/i.test(contentType) ? await response.text() : '';
    const finalUrl = normalizeUrl(response.url || inputUrl);
    const canonical = normalizeUrl(canonicalFrom(html, finalUrl));
    const title = tagText(html, 'title');
    const heading = tagText(html, 'h1');
    const text = stripHtml(html);
    const xRobots = (response.headers.get('x-robots-tag') ?? '').toLowerCase();
    const metaRobots = metaRobotsFrom(html);
    const noindex = /(?:^|[,\s])noindex(?:[,\s]|$)/i.test(`${xRobots},${metaRobots}`);
    const requested = new URL(inputUrl);
    const published = publishedCandidate(inputUrl);
    const candidate = canonical || finalUrl;
    const candidateUrl = candidate ? new URL(candidate) : null;
    const candidatePath = candidateUrl ? normalizePath(candidateUrl.href) : '';
    const parameterOrTemplate = excludedQuery(requested) || requested.pathname.includes('/?') || /\.(?:xml|json|php)$/i.test(requested.pathname);
    const sameOriginCanonical = Boolean(candidateUrl && candidateUrl.origin === origin);
    const eligible = response.status === 200 && sameOriginCanonical && !noindex && !parameterOrTemplate &&
      !excludedPath(candidatePath) && !looksNotFound(title, heading, text) && text.length >= 250;
    const type = /\/insights\//i.test(candidatePath) ? 'blog'
      : /\/use-cases\//i.test(candidatePath) ? 'use-case'
      : /\/case-studies\//i.test(candidatePath) ? 'case-study'
      : eligible ? 'service-or-content' : 'excluded';
    const referencePath = published?.url ? normalizePath(published.url) : candidatePath;
    const sourceReferences = referencePath === '/' ? 0 : repositoryText.split(referencePath).length - 1;
    const inboundReferences = Math.max(sourceReferences, published?.url.includes('/insights/') ? 1 : 0);
    return {
      requestedUrl: normalizeUrl(inputUrl),
      status: response.status,
      redirected: response.redirected,
      finalUrl,
      canonical,
      canonicalMatchesFinal: Boolean(canonical && canonical === finalUrl),
      noindex,
      robots: [metaRobots, xRobots].filter(Boolean).join(', '),
      title,
      h1: heading,
      textLength: text.length,
      contentHash: text ? crypto.createHash('sha256').update(text).digest('hex').slice(0, 16) : '',
      inboundReferences,
      alreadyInSitemap: sitemap.has(candidate),
      eligible,
      eligibleCanonical: eligible ? candidate : '',
      publishedCanonicalCandidate: published?.url ?? '',
      publishedCandidateType: published?.type ?? '',
      publishedCandidateScore: published?.score ?? 0,
      type,
      issue: response.status !== 200 ? `HTTP ${response.status}`
        : noindex ? 'noindex'
        : parameterOrTemplate ? 'parameter/template URL'
        : !sameOriginCanonical ? 'missing or external canonical'
        : excludedPath(candidatePath) ? 'placeholder/system path'
        : looksNotFound(title, heading, text) ? 'soft 404'
        : text.length < 250 ? 'thin/non-HTML content'
        : '',
      durationMs: Date.now() - started,
    };
  } catch (error) {
    return {
      requestedUrl: normalizeUrl(inputUrl), status: 0, redirected: false, finalUrl: '', canonical: '',
      canonicalMatchesFinal: false, noindex: false, robots: '', title: '', h1: '', textLength: 0,
      contentHash: '', inboundReferences: 0, alreadyInSitemap: false, eligible: false,
      eligibleCanonical: '', publishedCanonicalCandidate: '', publishedCandidateType: '', publishedCandidateScore: 0,
      type: 'excluded', issue: error.name === 'AbortError' ? 'timeout' : error.message,
      durationMs: Date.now() - started,
    };
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const input = await new Promise((resolve, reject) => {
    let value = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', chunk => { value += chunk; });
    process.stdin.on('end', () => resolve(value));
    process.stdin.on('error', reject);
  });
  const urls = [...new Set(input.split(/\r?\n/).map(value => value.trim()).filter(value => /^https?:\/\//i.test(value)))];
  const results = new Array(urls.length);
  let cursor = 0;
  const workers = Array.from({ length: 12 }, async () => {
    while (cursor < urls.length) {
      const index = cursor++;
      results[index] = await fetchPage(urls[index]);
      if ((index + 1) % 50 === 0) process.stderr.write(`Checked ${index + 1}/${urls.length}\n`);
    }
  });
  await Promise.all(workers);

  const duplicateCounts = new Map();
  for (const result of results) if (result.contentHash) duplicateCounts.set(result.contentHash, (duplicateCounts.get(result.contentHash) ?? 0) + 1);
  for (const result of results) result.duplicateCount = result.contentHash ? duplicateCounts.get(result.contentHash) : 0;

  const eligibleCanonicals = [...new Set(results.map(result => result.eligibleCanonical).filter(Boolean))].sort();
  const eligibleMissingSitemap = eligibleCanonicals.filter(url => !sitemap.has(url));
  const summary = {
    checked: results.length,
    http200: results.filter(result => result.status === 200).length,
    httpErrors: results.filter(result => result.status !== 200).length,
    redirects: results.filter(result => result.redirected).length,
    noindex: results.filter(result => result.noindex).length,
    missingCanonical: results.filter(result => result.status === 200 && !result.canonical).length,
    canonicalMismatch: results.filter(result => result.canonical && !result.canonicalMatchesFinal).length,
    duplicatePages: results.filter(result => result.duplicateCount > 1).length,
    weakInternalLinks: results.filter(result => result.publishedCanonicalCandidate && result.inboundReferences === 0).length,
    eligibleCanonicalUrls: eligibleCanonicals.length,
    eligibleMissingSitemap: eligibleMissingSitemap.length,
    legacyUrlsWithPublishedCanonical: results.filter(result => result.publishedCanonicalCandidate).length,
    exactServiceOrRouteMappings: results.filter(result => ['legacy-taxonomy-alias', 'route-redirect', 'published-page'].includes(result.publishedCandidateType)).length,
    probableBlogMappings: results.filter(result => result.publishedCandidateType === 'probable-blog').length,
  };

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), summary, eligibleCanonicals, eligibleMissingSitemap, results }, null, 2) + '\n');
  const columns = ['requestedUrl', 'status', 'redirected', 'finalUrl', 'canonical', 'canonicalMatchesFinal', 'noindex', 'robots', 'type', 'eligible', 'eligibleCanonical', 'publishedCanonicalCandidate', 'publishedCandidateType', 'publishedCandidateScore', 'alreadyInSitemap', 'inboundReferences', 'duplicateCount', 'textLength', 'title', 'h1', 'issue'];
  fs.writeFileSync(csvPath, `${columns.join(',')}\n${results.map(result => columns.map(column => escapeCsv(result[column])).join(',')).join('\n')}\n`);
  const mapped = results.filter(result => result.publishedCanonicalCandidate);
  const markdown = [
    '# XcellHost indexing and sitemap audit',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Findings',
    '',
    `- Audited ${summary.checked} URLs from the workbook's "Non-indexed missing sitemap" sheet.`,
    `- ${summary.http200} return HTTP 200, but ${results.filter(result => result.issue === 'thin/non-HTML content').length} contain only the SPA shell and ${results.filter(result => result.issue === 'placeholder/system path').length} are taxonomy or placeholder paths.`,
    `- ${summary.noindex} returned a noindex directive; ${summary.missingCanonical} lacked a canonical tag; ${summary.canonicalMismatch} canonicalized elsewhere.`,
    `- ${summary.duplicatePages} return duplicate app-shell content, and ${summary.weakInternalLinks} mapped canonical pages have no static internal-link reference in the repository.`,
    `- ${summary.legacyUrlsWithPublishedCanonical} legacy URLs map to a current published canonical page: ${summary.exactServiceOrRouteMappings} exact service/route mappings and ${summary.probableBlogMappings} probable blog-title mappings.`,
    '- Legacy, taxonomy, parameter and soft-404 URLs should not be added to the sitemap. Their current canonical destinations are the sitemap candidates.',
    '',
    '## Legacy URLs with a published canonical candidate',
    '',
    '| Legacy URL | Published canonical | Mapping |',
    '|---|---|---|',
    ...mapped.map(result => `| ${result.requestedUrl} | ${result.publishedCanonicalCandidate} | ${result.publishedCandidateType}${result.publishedCandidateType === 'probable-blog' ? ` (${result.publishedCandidateScore.toFixed(2)})` : ''} |`),
    '',
    'The CSV contains the complete URL-level HTTP, canonical, robots, duplicate-content, internal-link reference and classification results.',
    '',
  ].join('\n');
  fs.writeFileSync(markdownPath, markdown);
  console.log(JSON.stringify({ summary, jsonPath, csvPath, markdownPath }, null, 2));
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
