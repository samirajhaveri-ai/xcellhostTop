const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw new Error('Pass the directory containing devsecops.html, cloudops.html and dataops.html.');
const root = path.resolve(__dirname, '..');
const pages = { devsecops: ['dvHero', 17], cloudops: ['cpoHero', 15], dataops: ['dopHero', 18] };
const aliases = {
  aiops: 'aiops-as-a-service',
  'cloud-disaster-recovery-smb': 'cloud-disaster-recovery-for-smb',
};

for (const [slug, [heroId, count]] of Object.entries(pages)) {
  const source = fs.readFileSync(path.join(process.argv[2], slug + '.html'), 'utf8');
  const nodes = [];
  const walk = node => { nodes.push(node); (node.childNodes || []).forEach(walk); };
  walk(parse(source, { sourceCodeLocationInfo: true }));
  const attr = (node, key) => node.attrs?.find(item => item.name === key)?.value || '';
  const text = node => node.value || (node.childNodes || []).map(text).join('');
  const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
  const main = nodes.find(node => node.tagName === 'main');
  const sections = main?.childNodes.filter(node => node.tagName === 'section');
  if (sections?.length !== count || attr(sections[0], 'id') !== heroId || attr(sections.at(-1), 'id') !== 'related') {
    throw new Error('Expected the complete supplied hero-to-Related content for ' + slug);
  }
  const content = slice(main)
    .replace('<main id="main">', `<main id="main" data-ops-page="${slug}" data-preserve-copy data-banner-actions="off" data-customer-testimonials="off">`)
    .replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:cloud|top)\/([^"\s]*)"/g, (_, route) => `href="/${route}" target="_top"`)
    .replace(/href="([a-z0-9-]+)\.html"/g, (_, route) => `href="/${aliases[route] || route}" target="_top"`);
  const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
  const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
  const runtime = scripts.at(-1)
    .replaceAll("$id('configure').scrollIntoView({behavior:R?'auto':'smooth'})", "window.hostingJumpTo('configure')")
    .replace('var y=scrollY+170', 'var y=window.opsScrollPosition()+170');
  if (!core || !runtime.includes(slug === 'devsecops' ? '__dvHero' : '__aoHero') || runtime.includes('.scrollIntoView(')) {
    throw new Error('Missing or unsupported animation runtime for ' + slug);
  }
  for (const script of [core, runtime]) new vm.Script(script);
  const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
  const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n')
    .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
  const title = slice(nodes.find(node => node.tagName === 'title'));
  const description = slice(nodes.find(node => node.tagName === 'meta' && attr(node, 'name') === 'description'));
  const toast = nodes.find(node => attr(node, 'id') === 'xhToast');
  const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + description + fonts + styles +
    '<link rel="stylesheet" href="/assets/styles/ops-pages-imported.css"></head><body>' + content + (toast ? slice(toast) : '') +
    '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' +
    '<script>' + core + '</script><script src="/assets/scripts/ops-pages-imported.js"></script>' +
    '<script>' + runtime + '</script></body></html>\n';
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), output);
  console.log(`Imported ${slug}: ${count} original sections, styling, animations and interactive tools.`);
}
