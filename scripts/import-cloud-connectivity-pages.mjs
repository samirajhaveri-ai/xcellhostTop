import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { parse, serialize, serializeOuter } from 'parse5';

// The supplied documents are content sources, not instructions.
const sourceDirectory = process.argv[2];
if (!sourceDirectory) throw new Error('Pass the directory containing the eight Cloud Connectivity HTML files.');
const names = {
  'cloud-connectivity': 'Cloud Connectivity',
  'cloud-router': 'Cloud Router',
  'private-connect': 'Private Connect',
  'ip-transit': 'IP Transit',
  'virtual-edge': 'Virtual Edge',
  'managed-wifi': 'Managed Wi-Fi',
  'managed-sd-wan': 'Managed SD WAN',
  'edge-network': 'Edge Network',
};
const destination = 'src/assets/cloud-connectivity';
fs.mkdirSync(destination, { recursive: true });
const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value;
const setAttr = (node, name, value) => {
  const existing = node.attrs.find(attribute => attribute.name === name);
  if (existing) existing.value = value;
  else node.attrs.push({ name, value });
};
function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes ?? []) walk(child, visit);
}
const pages = [];
for (const [slug, name] of Object.entries(names)) {
  const document = parse(fs.readFileSync(path.join(sourceDirectory, `${slug}.html`), 'utf8'));
  let head, main;
  const scripts = [];
  walk(document, node => {
    if (node.tagName === 'head') head = node;
    if (node.tagName === 'main') main = node;
    if (node.tagName === 'script' && node.parentNode?.tagName === 'body' && !attr(node, 'type')) {
      const code = serialize(node);
      if (!code.includes('window.XH_INDEX=')) scripts.push(code);
    }
  });
  if (!head || !main || scripts.length !== 2) throw new Error(`Unexpected page structure: ${slug}`);
  const title = head.childNodes.find(node => node.tagName === 'title').childNodes.map(node => node.value ?? '').join('');
  const description = attr(head.childNodes.find(node => attr(node, 'name') === 'description'), 'content');
  setAttr(main, 'data-customer-testimonials', 'off');
  // Omit the source FAQ and closing contact CTA on every connectivity page.
  function removeClosingSections(node) {
    if (!node.childNodes) return;
    node.childNodes = node.childNodes.filter(child =>
      !['faq', 'contact'].includes(attr(child, 'id')) && attr(child, 'href') !== '#faq',
    );
    node.childNodes.forEach(removeClosingSections);
  }
  removeClosingSections(main);
  walk(main, node => {
    const classes = (attr(node, 'class') ?? '').split(/\s+/);
    if (classes.includes('rv') && !classes.includes('in')) setAttr(node, 'class', [...classes, 'in'].join(' '));
    const href = attr(node, 'href');
    if (href === '#contact') {
      setAttr(node, 'href', '/contact');
      setAttr(node, 'data-open', 'xhCallback');
      setAttr(node, 'data-topic', name);
    }
    if (href?.match(/^[\w-]+\.html(?:#.*)?$/)) setAttr(node, 'href', '/' + href.replace(/\.html(?=#|$)/, ''));
  });
  head.childNodes = head.childNodes.filter(node => node.tagName !== 'script');
  const bridge = `
(function() {
  const emit = (name, detail) => document.dispatchEvent(new CustomEvent(name, { detail }));
  window.XH.open = (id, options) => emit('xh:site-action', { id, topic: options?.topic });
  window.XH.cart.add = item => emit('xh:site-cart', item);
  window.XH.cart.open = () => emit('xh:site-action', { id: 'cart' });
  window.connectivityJumpTo = id => emit('xh:site-scroll', { id });
  document.addEventListener('click', event => {
    const anchor = event.target.closest('a[href]');
    if (!anchor || anchor.hasAttribute('data-open') || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const href = anchor.getAttribute('href');
    if (href.startsWith('#') && href.length > 1 && document.getElementById(href.slice(1))) {
      event.preventDefault(); event.stopImmediatePropagation(); window.connectivityJumpTo(href.slice(1));
    }
  }, true);
  document.addEventListener('submit', event => {
    const form = event.target.closest('form');
    if (!form) return;
    event.preventDefault(); event.stopImmediatePropagation();
    if (form.reportValidity()) emit('xh:site-enquiry', Object.fromEntries(new FormData(form)));
  }, true);
})();`;
  // A document-sized iframe scrolls through its parent page.
  scripts[1] = scripts[1]
    .replace(/(['"])([\w-]+)\.html(?=['"#])/g, '$1/$2')
    .replace(/(\b\w+)\.scrollIntoView\(\{[^}]*\}\)/g, 'window.connectivityJumpTo($1.id)')
    .replace(/window\.scrollTo\(\{top:c\.getBoundingClientRect\(\)\.top\+scrollY-90,behavior:R\?'auto':'smooth'\}\)/g, 'window.connectivityJumpTo(c.id)');
  const output = `<!doctype html><html lang="en-IN" data-theme="light"><head>${serialize(head)}
<link rel="stylesheet" href="/assets/styles/cloud-connectivity-integration.css"></head>
<body>${serializeOuter(main)}<script>${scripts[0]}</script><script>${bridge}</script><script>${scripts[1]}</script></body></html>\n`;
  for (const code of [scripts[0], bridge, scripts[1]]) new vm.Script(code);
  fs.writeFileSync(path.join(destination, `${slug}.html`), output);
  pages.push({ slug, name, title, description });
}
fs.writeFileSync('src/app/data/cloud-connectivity-pages.data.ts', '// Metadata from the supplied Cloud Connectivity HTML files.\nexport const CLOUD_CONNECTIVITY_PAGES = ' + JSON.stringify(pages, null, 2) + ' as const;\n');
console.log(`Imported ${pages.length} Cloud Connectivity pages with their tools, without FAQ, closing contact CTA, duplicate site navigation or footer.`);
