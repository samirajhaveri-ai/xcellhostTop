// Build the standalone export from the current rendered navigation snapshot.
// Usage: node scripts/export-header-footer.cjs path/to/snapshot.json
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const postcss = require('postcss');
const parse5 = require('parse5');
const root = path.resolve(__dirname, '..');
const snapshot = JSON.parse(fs.readFileSync(process.argv[2] || path.join(root, '.tmp/header-footer-export/snapshot.json'), 'utf8'));
const out = path.join(root, 'exports/header-footer');
fs.mkdirSync(out, { recursive: true });
const base = 'https://xcellhost.cloud';
const assets = new Set();
const get = (n, key) => n.attrs?.find(a => a.name === key)?.value || '';
const set = (n, key, value) => { const a = n.attrs.find(a => a.name === key); if (a) a.value = value; else n.attrs.push({ name: key, value }); };
const all = (n, fn) => (n.childNodes || []).flatMap(c => [...(fn(c) ? [c] : []), ...all(c, fn)]);
const has = (n, c) => get(n, 'class').split(/\s+/).includes(c);
const text = n => n.nodeName === '#text' ? n.value : (n.childNodes || []).map(text).join('');
const html = n => parse5.serialize(n);
const normalizeAsset = value => {
  if (!value.startsWith('/assets/')) return value;
  assets.add(value.split(/[?#]/)[0]);
  return '.' + value;
};
function prepare(markup) {
  const fragment = parse5.parseFragment(markup);
  for (const node of all(fragment, n => !!n.tagName)) {
    node.attrs = node.attrs.filter(a => !/^(_ng|ng-|jsaction$|ngh$|routerlink$|queryparams$)/.test(a.name));
    for (const attr of node.attrs) if (['src', 'href', 'poster'].includes(attr.name)) {
      if (attr.value.startsWith('/assets/')) attr.value = normalizeAsset(attr.value);
      else if (attr.name === 'href' && attr.value.startsWith('/')) attr.value = base + attr.value;
    }
    if (node.tagName === 'a' && (!get(node, 'href') || get(node, 'href') === '#')) {
      set(node, 'href', get(node, 'aria-label') === 'Reddit' ? 'https://www.reddit.com/domain/xcellhost.cloud/' : base + '/contact');
      node.attrs = node.attrs.filter(a => a.name !== 'aria-disabled');
    }
    if (node.tagName === 'a' && get(node, 'target') === '_blank') set(node, 'rel', 'noopener noreferrer');
    if (node.tagName === 'button') {
      const label = text(node).trim();
      const route = has(node, 'xh-search') ? '/sitemap' : get(node, 'id') === 'pnOpen' ? '/company/partner-signup' : label === 'Ask AI' ? '/contact' : label === "Let's Talk" ? '/contact' : null;
      if (route) { node.tagName = 'a'; set(node, 'href', base + route); node.attrs = node.attrs.filter(a => a.name !== 'type'); }
    }
    if (has(node, 'nf-video-poster')) { node.tagName = 'a'; set(node, 'href', 'https://www.youtube.com/watch?v=s1Rxs7rWd2I'); set(node, 'target', '_blank'); set(node, 'rel', 'noopener noreferrer'); }
  }
  const remove = all(fragment, n => n.nodeName === '#comment' || get(n, 'id') === 'google_translate_element' || has(n, 'ub2-translate') || n.tagName === 'dialog');
  for (const n of remove) n.parentNode.childNodes = n.parentNode.childNodes.filter(c => c !== n);
  for (const language of all(fragment, n => n.tagName === 'xh-language-picker')) {
    const replacement = parse5.parseFragment('<a class="standalone-language" href="https://xcellhost.cloud/" aria-label="English website">🌐 English</a>').childNodes[0];
    replacement.parentNode = language.parentNode;
    language.parentNode.childNodes.splice(language.parentNode.childNodes.indexOf(language), 1, replacement);
  }
  const footerHeadings = { 'About Us': '/about-us', Catalog: '/explore-marketplace', Ebooks: '/resource-library', Legal: '/company/terms-of-service', 'Quick Links': '/sitemap', 'Certified For': '/company/certifications-awards', 'Payment Options': '/payment-methods' };
  for (const heading of all(fragment, n => has(n, 'nf-rlbl'))) {
    const route = footerHeadings[text(heading).trim()];
    if (!route) continue;
    const anchor = parse5.parseFragment(`<a href="${base + route}">${html(heading)}</a>`).childNodes[0];
    anchor.parentNode = heading; heading.childNodes = [anchor];
  }
  return html(fragment);
}
let header = prepare(snapshot.header);
const headerDoc = parse5.parseFragment(header);
for (const menu of all(headerDoc, n => has(n, 'xh-menu-item'))) {
  const panel = all(menu, n => has(n, 'xh-mega'))[0];
  const top = snapshot.tops.find(t => t.megaId === get(panel, 'id'));
  set(menu, 'data-menu', top.megaId);
  const tabs = all(menu, n => has(n, 'xh-tab'));
  for (const tab of tabs) set(tab, 'data-tab', top.tabs.find(t => t.label.trim() === text(tab).trim()).g);
  all(menu, n => has(n, 'xh-panel')).forEach((panel, i) => set(panel, 'data-tab', top.tabs[i].g));
  const mobile = all(menu, n => has(n, 'xh-mobile-categories'))[0];
  mobile.childNodes = [];
  for (const tab of top.tabs) {
    const matchingPanel = all(menu, n => has(n, 'xh-panel') && get(n, 'data-tab') === tab.g)[0];
    const escaped = tab.label.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
    const label = escaped || top.label;
    const category = parse5.parseFragment(`<div class="xh-mobile-category"><button class="xh-mobile-category-toggle" type="button" aria-expanded="false" aria-controls="${top.megaId}-mobile-panel-${tab.g}">${label} <span aria-hidden="true">+</span></button><section class="xh-mobile-category-panel" id="${top.megaId}-mobile-panel-${tab.g}" hidden>${html(matchingPanel)}</section></div>`).childNodes[0];
    category.parentNode = mobile; mobile.childNodes.push(category);
  }
}
header = html(headerDoc).replace(/<header class="xh-header"/, '<xh-header><header class="xh-header"') + '</xh-header>';
const footer = '<xh-footer>' + prepare(snapshot.footer) + '</xh-footer>';
const featureMarkup = Object.fromEntries(Object.entries(snapshot.featureMarkup).map(([id, tabs]) => [id, Object.fromEntries(Object.entries(tabs).map(([tab, markup]) => [tab, prepare(markup)]))]));

// Retain component scoping in plain CSS, without Angular-generated attributes.
const owners = {};
for (const [marker, owner] of [['.xh-header', 'xh-header'], ['.nf-services-status', 'xh-footer'], ['.tools-trigger', 'xh-tools-menu'], ['.ub2-extra', 'xh-utility-bar'], ['.promo-product', 'xh-promo-bar']]) {
  const css = snapshot.styles.find(s => s.includes(marker) && /\[_ngcontent-/.test(s));
  const id = css?.match(/\[_ngcontent-([^\]]+)\]/)?.[1]; if (id) owners[id] = owner;
}
const common = [], headerCss = [], footerCss = [];
const globalSelector = /(?:\.nf[-s\b]|\.nfs\b|\.utility\b|\.ub2[-\b]|\.uwa\b|\.wrap\b|\.btn\b|\.btn-|\.phone\b|\.promo\b|\.code\b|\.material-symbols|:root|^\s*(?:body|html|footer|\*)\b)/;
const seen = new Set();
for (const raw of snapshot.styles) {
  if (seen.has(raw)) continue; seen.add(raw);
  const tree = postcss.parse(raw);
  for (const rule of [...tree.nodes]) {
    const ids = [...rule.toString().matchAll(/\[_ng(?:content|host)-([^\]]+)\]/g)].map(m => m[1]);
    if (ids.length && !ids.some(id => owners[id])) continue;
    if (ids.length) {
      const owner = owners[ids.find(id => owners[id])];
      rule.walkRules(r => {
        if (r.parent.type === 'atrule' && /keyframes/.test(r.parent.name)) return;
        r.selectors = r.selectors.map(s => {
          const host = /\[_nghost-/.test(s);
          const cleaned = s.replace(/\[_nghost-[^\]]+\]/g, owner).replace(/\[_ngcontent-[^\]]+\]/g, '');
          return host ? cleaned : `${owner} ${cleaned}`;
        });
      });
      if (rule.type === 'rule') {
        rule.selectors = rule.selectors.map(s => /\[_nghost-/.test(s) ? s.replace(/\[_nghost-[^\]]+\]/g, owner).replace(/\[_ngcontent-[^\]]+\]/g, '') : `${owner} ${s.replace(/\[_ngcontent-[^\]]+\]/g, '')}`);
      }
      (owner === 'xh-footer' ? footerCss : headerCss).push(rule.toString());
    } else if (rule.type === 'rule') {
      rule.selectors = rule.selectors.filter(s => globalSelector.test(s));
      if (rule.selectors.length) common.push(rule.toString());
    } else if (rule.type === 'atrule' && rule.name === 'media') {
      rule.walkRules(r => { r.selectors = r.selectors.filter(s => globalSelector.test(s)); if (!r.selectors.length) r.remove(); });
      if (rule.nodes.length) common.push(rule.toString());
    } else if (rule.type === 'atrule' && (rule.name === 'font-face' || (/keyframes/.test(rule.name) && /nf-|mobile-category|footer/.test(rule.params)))) common.push(rule.toString());
  }
}
const cssAssets = css => css.replace(/_ngcontent-ng-c\d+_/g, '').replace(/(?:\.\/)?media\/material-symbols-outlined\.woff2/g, './assets/fonts/material-symbols-outlined.woff2').replace(/url\(["']?(\/assets\/[^)'" ]+)["']?\)/g, (_, url) => `url("${normalizeAsset(url)}")`);
fs.writeFileSync(path.join(out, 'styles.css'), cssAssets(common.join('\n')) + '\n' + fs.readFileSync(path.join(__dirname, 'header-footer-export-overrides.css'), 'utf8'));
fs.writeFileSync(path.join(out, 'header.css'), cssAssets(headerCss.join('\n')));
fs.writeFileSync(path.join(out, 'footer.css'), cssAssets(footerCss.join('\n')));
fs.writeFileSync(path.join(out, 'header.html'), header.replace(/></g, '>\n<') + '\n');
fs.writeFileSync(path.join(out, 'footer.html'), footer.replace(/></g, '>\n<') + '\n');
const toolExports = {};
new Function('exports', ts.transpileModule(fs.readFileSync(path.join(root, 'src/app/data/tools.data.ts'), 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText)(toolExports);
const tools = toolExports.TOOL_CATEGORIES.map(c => ({ id: c.id, name: c.name, icon: c.icon, color: c.color, tools: c.tools.map(t => ({ id: t.id, name: t.name, group: t.group })) }));
const navData = { baseUrl: base, tops: snapshot.tops.map(t => ({ label: t.label, megaId: t.megaId, tabs: t.tabs.map(tab => ({ g: tab.g, label: tab.label })) })), featureMarkup, tools };
fs.writeFileSync(path.join(out, 'navigation-data.js'), 'window.XCELLHOST_NAV = ' + JSON.stringify(navData, null, 2) + ';\n');
fs.copyFileSync(path.join(__dirname, 'header-footer-export-runtime.js'), path.join(out, 'header-footer.js'));
fs.writeFileSync(path.join(out, 'config.js'), '// Change this to http://localhost:4200 to use your local Angular pages.\nwindow.XCELLHOST_SITE_URL = "https://xcellhost.cloud";\n');
const fontLinks = snapshot.fonts.map(url => `<link rel="stylesheet" href="${url.replaceAll('&', '&amp;')}">`).join('\n');
fs.writeFileSync(path.join(out, 'index.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>XcellHost Header and Footer</title>
${fontLinks}
<link rel="stylesheet" href="styles.css"><link rel="stylesheet" href="header.css"><link rel="stylesheet" href="footer.css">
<script src="config.js" defer></script><script src="navigation-data.js" defer></script><script src="header-footer.js" defer></script></head>
<body>${header.replace(/></g, '>\n<')}<main class="export-demo"><p>XCELLHOST</p><h1>Cloud. Security. AI.</h1><p>Explore our services using the navigation above.</p><a href="${base}/explore-marketplace" class="btn btn-primary">Explore services →</a></main>${footer.replace(/></g, '>\n<')}</body></html>\n`);
const missing = [];
for (const asset of assets) {
  const local = ['public', 'src'].map(dir => path.join(root, dir, asset.slice(1))).find(f => fs.existsSync(f));
  if (!local) { missing.push(asset); continue; }
  const dest = path.join(out, asset.slice(1)); fs.mkdirSync(path.dirname(dest), { recursive: true }); fs.copyFileSync(local, dest);
}
const font = path.join(out, 'assets/fonts/material-symbols-outlined.woff2');
fs.mkdirSync(path.dirname(font), { recursive: true }); fs.copyFileSync(path.join(root, 'node_modules/material-symbols/material-symbols-outlined.woff2'), font);
fs.copyFileSync(path.join(root, 'node_modules/material-symbols/LICENSE'), path.join(out, 'assets/fonts/LICENSE-material-symbols.txt'));
if (missing.length) throw new Error('Missing export assets: ' + missing.join(', '));
fs.writeFileSync(path.join(out, 'README.txt'), `XCELLHOST HEADER + FOOTER — STANDALONE HTML / CSS / JAVASCRIPT\n\nOpen index.html in a browser. No Angular, npm installation or build is required.\n\nFILES\nindex.html: Complete ready-to-open example.\nheader.html / footer.html: HTML fragments for use in other pages.\nheader.css / footer.css: Component styles.\nstyles.css: Shared styles, fonts and responsive overrides.\nheader-footer.js: Mega menus, hover categories, mobile accordion, Tools, login and theme controls.\nnavigation-data.js: Menu feature cards and Tools destinations.\nconfig.js: Website destination (production by default).\nassets/: Included local images and icon font.\n\nLINKS\nAll navigation anchors point to the existing XcellHost pages.\nSet XCELLHOST_SITE_URL in config.js to http://localhost:4200 for your local pages.\nMenu labels and category buttons open menus; service cards and footer links navigate.\nSearch opens the website sitemap; Ask AI and Let's Talk open Contact; Join Us as Partner opens Partner Signup.\nThe video opens YouTube. The language link opens the English XcellHost website.\nFonts from Google and external services require an internet connection.\n\nREUSE\nCopy assets/ and the CSS/JS files alongside your page. Paste header.html and footer.html into the page and include the same stylesheet/script tags as index.html.\nKeep the full files together so menu images and icons resolve correctly.\nThis package contains the header/footer, not the linked service pages or Angular overlays.\n`);
fs.writeFileSync(path.join(out, 'export-manifest.json'), JSON.stringify({ generatedAt: new Date().toISOString(), menuCount: snapshot.tops.length, categoryCount: snapshot.tops.reduce((n, t) => n + t.tabs.length, 0), assetCount: assets.size + 1, files: ['index.html', 'header.html', 'footer.html', 'styles.css', 'header.css', 'footer.css', 'header-footer.js', 'navigation-data.js', 'config.js', 'README.txt'], baseUrl: base }, null, 2));
console.log(JSON.stringify({ directory: out, menus: snapshot.tops.length, categories: snapshot.tops.reduce((n, t) => n + t.tabs.length, 0), assets: assets.size + 1 }));
