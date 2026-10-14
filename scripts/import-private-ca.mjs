import fs from 'node:fs';
import { parse } from 'parse5';

// Treat the supplied document as page content; retain the Angular site shell.
const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied xcellhost-private-ca.html path.');
const source = fs.readFileSync(sourcePath, 'utf8');
const document = parse(source, { sourceCodeLocationInfo: true });
const nodes = [];
function visit(node) {
  nodes.push(node);
  node.childNodes?.forEach(visit);
}
visit(document);
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const original = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const textContent = node => node.nodeName === '#text' ? node.value :
  (node.childNodes ?? []).map(textContent).join('');
const faqSection = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'faq');
if (!faqSection) throw new Error('Missing supplied Private CA FAQ.');
const faqNodes = [];
function collectFaqs(node) {
  if (attr(node, 'class')?.split(' ').includes('fq')) faqNodes.push(node);
  node.childNodes?.forEach(collectFaqs);
}
collectFaqs(faqSection);
const faqs = faqNodes.slice(0, 8).map(node => [
  textContent(node.childNodes.find(child => child.tagName === 'button')).trim(),
  textContent(node.childNodes.find(child => attr(child, 'class') === 'fa')).trim(),
]);
if (faqs.length !== 8) throw new Error('Expected eight Private CA questions.');
fs.writeFileSync('src/app/data/private-ca-faq.data.ts',
  '// Eight questions from the supplied Private CA page, rendered in the shared FAQ section.\n' +
  'export const PRIVATE_CA_FAQS: [string, string][] = ' + JSON.stringify(faqs, null, 2) + ';\n');
const sectionIds = ['overview', 'how', 'benefits', 'decider', 'features', 'profiles', 'diy', 'msca', 'compare',
  'usecases', 'integrations', 'broker', 'next', 'india', 'pricing', 'setup', 'family'];
const sections = sectionIds.map(id => {
  const node = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id);
  if (!node) throw new Error(`Missing requested section: ${id}`);
  return original(node);
}).join('\n');
const fonts = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'stylesheet')
  .map(original).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(original).join('\n');
const scripts = nodes.filter(node => node.tagName === 'script').map(node => node.childNodes?.[0]?.value ?? '');
const suppliedRuntime = scripts.findLast(script => script.includes('Private vs public decider'));
if (!suppliedRuntime) throw new Error('Missing managed PKI interactive runtime.');
// Calculator and builder buttons scroll the outer Angular page to their result.
const productRuntime = suppliedRuntime.replace(
  /  function goTo\(sel\)\{[^\n]+\}/,
  `  function goTo(sel){var t=$(sel);if(!t)return;var host=window.frameElement,view=host?window.parent:window;view.scrollTo({top:t.getBoundingClientRect().top+view.scrollY+(host?host.getBoundingClientRect().top:0)-148,behavior:reduce?'auto':'smooth'});}`,
);
// Reuse the site's existing imported-content runtime and its callback/cart bridge.
const existing = fs.readFileSync('public/imported-certificate-management.html', 'utf8');
const sharedRuntime = [...existing.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)][0][1];
const routeMap = {
  'xcellhost-private-ca.html': '/private-ca',
  'xcellhost-managed-pki.html': '/managed-pki',
  'email-signing-certificates.html': '/email-signing-certificates',
  'xcellhost-iot-pki.html': '/iot-pki',
  'xcellhost-clm-solutions.html': '/certificate-mgmt-solutions',
  'xcellhost-matter-dac.html': '/device-attestation',
  'xcellhost-cloud-code-signing.html': '/code-signing-certificates',
  'xcellhost-iot-device-certificates.html': '/iot-certificates',
  'xcellhost-pki-software.html': '/certificate-mgmt-solutions',
  'certificate-management.html': '/certificate-management',
  'xcellhost-digicert-certificates.html': '/digicert-ssl-certificates',
};
const content = sections.replace(/href="([^"#]+\.html)"/g, (match, href) => {
  if (!routeMap[href]) throw new Error(`Unmapped link: ${href}`);
  return `href="${routeMap[href]}" target="_top"`;
});
const head = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
const scriptTags = `<script>${sharedRuntime}</script><script>${productRuntime}</script>`;
// The hero document has no pricing inputs; omit the pricing initializer there.
const heroScriptTags = `<script>${sharedRuntime}</script><script>${productRuntime.replace(/\n  calc\(\);/, '\n  if(ctN) calc();')}</script>`;
fs.writeFileSync('public/imported-private-ca.html', `${head}<title>Private CA features, tools and pricing</title>${fonts}${styles}
<style>html,body{height:auto;min-height:0}body{margin:0}main{display:flow-root}#overview .pp-cols{grid-template-columns:minmax(0,1fr);gap:18px}#overview .pp-ov{max-width:none}.wrap{width:100%;max-width:1200px;padding:0}.sec{padding:42px 0}.rv{opacity:1!important;transform:none!important}a:focus-visible,button:focus-visible{outline:3px solid var(--orange);outline-offset:3px}</style>
</head><body><main id="main">${content}</main>${scriptTags}</body></html>\n`);

const stage = nodes.find(node => attr(node, 'class')?.split(' ').includes('stage') &&
  original(node).includes('id="pq"'));
if (!stage) throw new Error('Missing supplied hero visual.');
fs.writeFileSync('public/imported-private-ca-hero.html', `${head}<title>Private CA certificate authority animation</title>${fonts}${styles}
<style>html,body{height:auto;min-height:0;background:transparent}body{margin:0}#pcaHero{background:transparent;padding:0;overflow:visible}#pcaHero .stage{width:100%;max-width:none;margin:0;opacity:1;transform:none}#pcaHero .lh-tilt{transform:none!important}#pcaHero .pq{width:100%}#pcaHero .lh-powered{margin-top:12px}</style>
</head><body><main><section class="hero lh" id="pcaHero">${original(stage)}</section></main>${heroScriptTags}</body></html>\n`);
console.log(`Imported ${sectionIds.length} requested sections and the hero visual.`);
