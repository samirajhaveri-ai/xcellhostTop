const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw Error('Pass the directory containing github-services.html and gitlab-services.html.');
const root = path.resolve(__dirname, '..');
const aliases = {
  'ai-training-integrated-program': 'synapsem-ai-training-integrated-program',
  'ai-ide-lab-as-a-service': 'ai-ide-lab',
  'edge-cloud': 'edge-cloud-platform',
  'xcellhost-vps-hosting': 'vps-hosting',
};
for (const platform of ['github', 'gitlab']) {
  const slug = platform + '-services';
  const source = fs.readFileSync(path.join(process.argv[2], slug + '.html'), 'utf8');
  const nodes = [];
  function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
  walk(parse(source, { sourceCodeLocationInfo: true }));
  const attr = (node, key) => node.attrs?.find(item => item.name === key)?.value || '';
  const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
  const text = node => node.value || (node.childNodes || []).map(text).join('');
  const main = nodes.find(node => node.tagName === 'main');
  const sections = main?.childNodes.filter(node => node.tagName === 'section');
  if (!sections?.length || attr(sections.at(-1), 'id') !== 'related') throw Error('Missing hero-to-related content: ' + slug);
  const content = slice(main)
    .replace('<main id="main">', '<main id="main" data-preserve-copy data-customer-testimonials="off">')
    .replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:cloud|top)\/([^"\s]*)"/g, (_, route) => `href="/${route}" target="_top"`)
    .replace(/href="([a-z0-9-]+)\.html"/g, (_, route) => `href="/${aliases[route] || route}" target="_top"`);
  const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
  const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
  const runtime = scripts.at(-1).replace(/scrollTo\(\{top:cf\.getBoundingClientRect\(\)\.top\+scrollY-(?:80|130),behavior:R\?'auto':'smooth'\}\)/g, "window.gitServicesJumpTo('configure')");
  if (!core || !runtime.includes('__aoHero') || runtime.includes('scrollY-')) throw Error('Missing or unsupported page runtime: ' + slug);
  for (const script of [core, runtime]) new vm.Script(script);
  const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
  const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n');
  const toast = nodes.find(node => attr(node, 'id') === 'xhToast');
  const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' + slice(nodes.find(node => node.tagName === 'title')) + fonts + styles +
    '<link rel="stylesheet" href="/assets/styles/git-services-imported.css"></head><body>' + content + (toast ? slice(toast) : '') +
    '<script>' + core + '</script><script src="/assets/scripts/git-services-imported.js"></script><script>' + runtime + '</script></body></html>\n';
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), output);
  console.log(`Imported ${slug}: ${sections.length} sections from hero through Related, including animations and interactive tools.`);
}
