import fs from 'node:fs';
import { parse } from 'parse5';

// Treat the supplied document as page content; retain the Angular site shell.
const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied xcellhost-pki-software.html path.');
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
if (!faqSection) throw new Error('Missing supplied PKI Software FAQ.');
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
if (faqs.length !== 8) throw new Error('Expected eight PKI Software questions.');
fs.writeFileSync('src/app/data/pki-software-faq.data.ts',
  '// Eight questions from the supplied PKI Software page, rendered in the shared FAQ section.\n' +
  'export const PKI_SOFTWARE_FAQS: [string, string][] = ' + JSON.stringify(faqs, null, 2) + ';\n');
const sectionIds = ['overview', 'how', 'fit', 'vendors', 'products', 'smb', 'grid', 'chooser', 'others', 'architect', 'guide', 'broker', 'next', 'india', 'pricing', 'family'];
const sections = sectionIds.map(id => {
  const node = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id);
  if (!node) throw new Error(`Missing requested section: ${id}`);
  return original(node);
}).join('\n');
const fonts = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'stylesheet')
  .map(original).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(original).join('\n');
const scripts = nodes.filter(node => node.tagName === 'script').map(node => node.childNodes?.[0]?.value ?? '');
const suppliedRuntime = scripts.findLast(script => script.includes('var XH=window.XH') && script.includes('psv'));
if (!suppliedRuntime) throw new Error('Missing managed PKI interactive runtime.');
// Calculator and builder buttons scroll the outer Angular page to their result.
const productRuntime = suppliedRuntime.replaceAll('window.scrollTo({top:', 'scrollToParent({top:')
  .replace('function noop(){}', `function noop(){}
  function scrollToParent(o){var host=window.frameElement;if(host){o.top+=host.getBoundingClientRect().top+window.parent.scrollY-window.scrollY-64;window.parent.scrollTo(o);}else window.scrollTo(o);}`);
// Reuse the site's existing imported-content runtime and its callback/cart bridge.
const existing = fs.readFileSync('public/imported-certificate-management.html', 'utf8');
const sharedRuntime = [...existing.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)][0][1];
const routeMap = {
  'xcellhost-matter-dac.html': '/matter-dac',
  'xcellhost-server-monitoring.html': '/tsplus-server-monitoring',
  'xcellhost-ssl-installation-service.html': '/ssl-installation-service',
  'sitelock-website-security.html': '/website-security-solutions',
  'xcellhost-acme-certificate.html': '/acme-certificate',
  'xcellhost-cloud-code-signing.html': '/cloud-code-signing',
  'xcellhost-iot-device-certificates.html': '/iot-device-certificates',
  'xcellhost-managed-pki.html': '/managed-pki',
  'email-signing-certificates.html': '/email-signing-certificates',
  'xcellhost-iot-pki.html': '/iot-pki',
  'xcellhost-private-ca.html': '/private-ca',
  'xcellhost-code-signing.html': '/code-signing-certificates',
  'code-signing-certificates.html': '/code-signing-certificates',
  'xcellhost-clm-solutions.html': '/certificate-mgmt-solutions',
  'xcellhost-pki-software.html': '/pki-software',
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
const heroScriptTags = scriptTags;
fs.writeFileSync('public/imported-pki-software.html', `${head}<title>PKI Software features, tools and pricing</title>${fonts}${styles}
<style>html,body{height:auto;min-height:0}body{margin:0}main{display:flow-root}#overview .pp-cols{grid-template-columns:minmax(0,1fr);gap:18px}#overview .pp-ov{max-width:none}.wrap{width:100%;max-width:1200px;padding:0}.sec{padding:42px 0}.rv{opacity:1!important;transform:none!important}#psGuide2{max-width:100%;white-space:normal}a:focus-visible,button:focus-visible{outline:3px solid var(--orange);outline-offset:3px}</style>
</head><body><main id="main">${content}</main>${scriptTags}</body></html>\n`);

const stage = nodes.find(node => attr(node, 'class')?.split(' ').includes('stage') &&
  original(node).includes('id="psv"'));
if (!stage) throw new Error('Missing supplied hero visual.');
fs.writeFileSync('public/imported-pki-software-hero.html', `${head}<title>PKI Software certificate authority animation</title>${fonts}${styles}
<style>html,body{height:auto;min-height:0;background:transparent}body{margin:0}#psHero{background:transparent;padding:0;min-height:0!important;overflow:visible}#psHero .stage{width:100%;max-width:none;min-height:0;padding:0;margin:0;opacity:1;transform:none}#psHero .lh-tilt{transform:none!important}#psHero .pq{width:100%}#psHero .lh-powered{margin-top:12px}</style>
</head><body><main><section class="hero lh" id="psHero">${original(stage)}</section></main>${heroScriptTags}</body></html>\n`);
console.log(`Imported ${sectionIds.length} requested sections and the hero visual.`);
