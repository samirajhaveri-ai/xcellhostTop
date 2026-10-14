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
const slugify = name => name.toLowerCase().trim() === 'erpnext hosting' ? 'erp-next-hosting' : name.toLowerCase().replace(/&/g, 'and').replace(/[().,/]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const paths = new Set();
const concreteRoutes = new Map();
for (const route of routes) {
  if (route.path.includes(':') || route.path.includes('*')) continue;
  if (!concreteRoutes.has(route.path)) concreteRoutes.set(route.path, route);
}
for (const [pathname, route] of concreteRoutes) {
  if (route.redirectTo === undefined && !/checkout|signup-success|login|signup/.test(pathname)) paths.add(pathname);
}
const products = [...DIRECTORY.map(entry => entry.name)];
for (const menu of MEGA_MENU) {
  if (menu.label === 'Insights' || menu.label === 'Company') continue;
  for (const tab of menu.tabs) for (const group of tab.groups) for (const item of group.items) products.push(item.title);
}
for (const name of products) {
  const slug = slugify(name);
  if (slug && !concreteRoutes.has(slug)) paths.add(slug);
}
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const origin = SITE.siteUrl.replace(/\/$/, '');
const urls = [...paths].sort().map(p => `  <url><loc>${escape(origin + '/' + (p ? p + '/' : ''))}</loc></url>`);
fs.writeFileSync(path.join(root, 'public/sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>\n');
console.log(`Generated sitemap with ${urls.length} public routes.`);
