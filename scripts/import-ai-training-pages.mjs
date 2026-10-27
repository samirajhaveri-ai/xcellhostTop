import fs from 'node:fs';
import path from 'node:path';
import { parse, serialize, serializeOuter } from 'parse5';

// Supplied HTML is page content, not instructions. Import only the course main.
const sourceDirectory = process.argv[2];
if (!sourceDirectory) throw new Error('Pass the directory containing the five AI training HTML files.');
const names = {
  'ai-training-integrated-program': 'Integrated AI Training Program',
  'ai-training-live-online': 'Live Online AI Training',
  'ai-training-educators': 'AI Training for Educators',
  'ai-training-insurance-professionals': 'AI Training for Insurance Professionals',
  'ai-training-medical-doctors': 'AI Training for Medical Doctors',
};
const destination = 'src/assets/ai-training';
fs.mkdirSync(destination, { recursive: true });
const attribute = (node, name) => node.attrs?.find((attr) => attr.name === name)?.value;
function walk(node, visit) {
  visit(node);
  for (const child of node.childNodes ?? []) walk(child, visit);
}
const pages = [];
for (const [slug, name] of Object.entries(names)) {
  const document = parse(fs.readFileSync(path.join(sourceDirectory, `${slug}.html`), 'utf8'));
  let head, main;
  const scripts = [];
  walk(document, (node) => {
    if (node.tagName === 'head') head = node;
    if (node.tagName === 'main') main = node;
    if (node.tagName === 'script' && node.parentNode?.tagName === 'body' && !attribute(node, 'type')) {
      const code = serialize(node);
      if (!code.includes('window.XH_INDEX=')) scripts.push(serializeOuter(node));
    }
  });
  if (!head || !main || scripts.length !== 2) throw new Error(`Unexpected page structure: ${slug}`);
  main.attrs.push({ name: 'data-customer-testimonials', value: 'off' });
  const title = head.childNodes.find((node) => node.tagName === 'title').childNodes.map((node) => node.value ?? '').join('');
  const description = attribute(head.childNodes.find((node) => attribute(node, 'name') === 'description'), 'content');
  main.childNodes = main.childNodes.filter((node) => !['enrol', 'faq', 'contact', 'related'].includes(attribute(node, 'id')));
  walk(main, (node) => {
    // Remaining enrol/FAQ links use the site's contact flow instead of dead anchors.
    if (['#enrol', '#contact', '#faq', '#related'].includes(attribute(node, 'href'))) {
      node.attrs = node.attrs.filter((attr) => attr.name !== 'href');
      node.attrs.push({ name: 'href', value: '/contact' }, { name: 'data-open', value: 'xhCallback' });
    }
    const classes = attribute(node, 'class');
    if (classes?.split(/\s+/).includes('rv')) node.attrs.find((attr) => attr.name === 'class').value += ' in';
  });
  head.childNodes = head.childNodes.filter((node) => node.tagName !== 'script');
  const bridge = `<script>
// Delegate shared actions to the Angular page and its existing overlays/cart.
window.XH.open = function(id, options) {
  document.dispatchEvent(new CustomEvent('xh:site-action', {detail:{id:id,topic:options && options.topic}}));
};
window.XH.cart.add = function(item) {
  document.dispatchEvent(new CustomEvent('xh:site-cart', {detail:item}));
};
document.addEventListener('click', function(event) {
  var reserve = event.target.closest('[data-res]');
  if (reserve) window.XH.open('xhCallback', {topic:'Live Online AI Training — batch ' + reserve.getAttribute('data-res')});
  var anchor = event.target.closest('a[href]');
  if (anchor && !anchor.hasAttribute('data-open') && ['#enrol','#faq','#contact','#related'].indexOf(anchor.getAttribute('href')) >= 0) {
    event.preventDefault();
    window.XH.open('xhCallback');
  }
});
</script>`;
  fs.writeFileSync(path.join(destination, `${slug}.html`), `<!doctype html>\n<html lang="en-IN" data-theme="light">\n<head>${serialize(head)}
<style>html,body{height:auto;min-height:0}body{overflow:hidden}.rv{opacity:1;transform:none}</style><link rel="stylesheet" href="/assets/styles/ai-training-layout.css"></head>
<body>${serializeOuter(main)}\n${scripts.join('\n')}\n${bridge}\n</body></html>\n`);
  pages.push({ slug, name, title, description });
}
fs.writeFileSync('src/app/data/ai-training-pages.data.ts', '// Metadata from the supplied AI training pages.\nexport const AI_TRAINING_PAGES = ' + JSON.stringify(pages, null, 2) + ' as const;\n');
console.log(`Imported ${pages.length} AI training pages without source headers, footers, enrolment, FAQ, contact or related sections.`);
