const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function load(filename) {
  if (cache.has(filename)) return cache.get(filename);
  const module = { exports: {} };
  cache.set(filename, module.exports);
  const source = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  new Function('require', 'module', 'exports', source)((id) => {
    if (!id.startsWith('.')) throw new Error(`Unexpected runtime import: ${id}`);
    return load(path.resolve(path.dirname(filename), id + '.ts'));
  }, module, module.exports);
  return module.exports;
}
const { routes } = load(path.join(root, 'src/app/app.routes.ts'));
const { DIRECTORY } = load(path.join(root, 'src/app/data/directory.data.ts'));
const { MEGA_MENU } = load(path.join(root, 'src/app/data/nav.data.ts'));
const { SITE } = load(path.join(root, 'src/app/data/site.data.ts'));
const slugify = name => {
  const normalized = name.toLowerCase().trim();
  if (normalized === 'erpnext hosting') return 'erp-next-hosting';
  if (normalized === 'xcellsoc') return 'vortex-soc';
  return normalized.replace(/&/g, 'and').replace(/[().,/]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};
const paths = new Set();
const concreteRoutes = new Map();
const titles = new Map();
const plainText = value => value
  .replace(/<[^>]*>/g, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&apos;|&#39;/gi, "'")
  .replace(/&nbsp;/gi, ' ')
  .replace(/&lt;/gi, '<')
  .replace(/&gt;/gi, '>')
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/\s+/g, ' ')
  .trim();
const humanize = pathname => {
  if (!pathname) return 'XcellHost Home';
  return pathname.split('/').filter(Boolean).at(-1).split('-')
    .filter(Boolean).map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
};
const headingForRoute = route => {
  if (typeof route.loadComponent !== 'function') return '';
  const loader = String(route.loadComponent);
  const importPath = loader.match(/(?:require|import)\(['"](.+?)['"]\)/)?.[1];
  if (!importPath) return '';
  const componentPath = path.resolve(path.dirname(path.join(root, 'src/app/app.routes.ts')), importPath + '.ts');
  if (!fs.existsSync(componentPath)) return '';
  const component = fs.readFileSync(componentPath, 'utf8');
  const templateUrl = component.match(/templateUrl\s*:\s*['"](.+?)['"]/)?.[1];
  let template = '';
  if (templateUrl) {
    const templatePath = path.resolve(path.dirname(componentPath), templateUrl);
    if (fs.existsSync(templatePath)) template = fs.readFileSync(templatePath, 'utf8');
  } else {
    template = component.match(/template\s*:\s*`([\s\S]*?)`/)?.[1] ?? '';
  }
  const headings = [...template.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)]
    .map(match => match[1])
    .filter(value => !/{{|\[innerHTML\]/.test(value))
    .map(plainText)
    .filter(Boolean);
  return headings.length === 1 ? headings[0] : '';
};
for (const route of routes) {
  if (route.path.includes(':') || route.path.includes('*')) continue;
  if (!concreteRoutes.has(route.path)) concreteRoutes.set(route.path, route);
}
for (const [pathname, route] of concreteRoutes) {
  if (route.redirectTo === undefined && !/checkout|signup-success|login|signup/.test(pathname)) {
    paths.add(pathname);
    const routeTitle = route.data?.searchTitle ?? route.data?.title ??
      (typeof route.title === 'string' ? route.title.replace(/\s*\|\s*XcellHost.*$/i, '') : '');
    titles.set(pathname, headingForRoute(route) || routeTitle || humanize(pathname));
  }
}
const products = [...DIRECTORY.map(entry => entry.name)];
for (const menu of MEGA_MENU) {
  if (menu.label === 'Insights' || menu.label === 'Company') continue;
  for (const tab of menu.tabs) for (const group of tab.groups) for (const item of group.items) products.push(item.title);
}
for (const name of products) {
  const slug = slugify(name);
  if (slug && !concreteRoutes.has(slug)) {
    paths.add(slug);
    if (!titles.has(slug)) titles.set(slug, name);
  }
}
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const origin = SITE.siteUrl.replace(/\/$/, '');
const urls = [...paths].sort().map(p => `  <url><loc>${escape(origin + '/' + (p ? p + '/' : ''))}</loc></url>`);
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>\n');
const sitemapTitles = Object.fromEntries([...paths].sort().map(pathname => [
  '/' + (pathname ? pathname.replace(/\/$/, '') : ''),
  titles.get(pathname) || humanize(pathname),
]));
fs.writeFileSync(path.join(root, 'public/sitemap-pages.json'), JSON.stringify(sitemapTitles, null, 2) + '\n');
console.log(`Generated sitemap with ${urls.length} public routes.`);
