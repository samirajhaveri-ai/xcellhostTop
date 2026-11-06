const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const parse5 = require('parse5');

const input = process.argv[2];
if (!input) throw new Error('Pass the supplied cloud-disaster-recovery-smb.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
const document = parse5.parse(source, { sourceCodeLocationInfo: true });
let main, steps, faq;
function visit(node) {
  if (node.tagName === 'main') main = node;
  if (node.tagName === 'section' && node.attrs.some(attr => attr.name === 'id' && attr.value === 'steps')) steps = node;
  if (node.tagName === 'section' && node.attrs.some(attr => attr.name === 'id' && attr.value === 'faq')) faq = node;
  (node.childNodes || []).forEach(visit);
}
visit(document);
if (!main || !steps || !faq) throw new Error('Missing supplied hero, onboarding timeline or FAQ.');
const aliases = {
  'acronis-ransomware-warranty': 'anti-ransomware-warranty',
  'xcellhost-vdpo': 'vdpo-as-a-service',
  'xcellhost-acronis-direct-cloud-backup': 'direct-backup-to-public-cloud-backup',
};
// Replace only the requested opening content, ending at “From first call to first drill.”
const normalizeLinks = html => html
  .replace(/href="https:\/\/xcellhost\.cloud\/"/g, 'href="/" target="_top"')
  .replace(/href="rule-468-daily-backup-books-of-accounts\.html"/g, 'href="https://xcellhost.cloud/rule-468-daily-backup-books-of-accounts.html" target="_top"')
  .replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => `href="/${aliases[slug] || slug}" target="_top"`)
  .replace(/href="#faq"/g, 'href="#ppFaq"');
let content = normalizeLinks(source.slice(main.sourceCodeLocation.startOffset, steps.sourceCodeLocation.endOffset) + '</main>');
// Give the complete title the full hero width while preserving the two-column dashboard below it.
const heading = content.match(/<h1 class="lh-title"[\s\S]*?<\/h1>/)[0];
const breadcrumb = content.match(/<div class="crumb"[\s\S]*?<\/div>/)[0];
content = content.replace(heading, '').replace(breadcrumb, '')
  .replace('<div class="hero-grid dr-hg">', breadcrumb + heading + '<div class="hero-grid dr-hg">');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(match => match[0])
  .filter(link => /fonts\.(googleapis|gstatic)\.com/.test(link)).join('\n');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(match => match[0]).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].slice(-2).map(match => match[1]);
scripts[1] = scripts[1].replace("e.scrollIntoView({behavior:R?'auto':'smooth'})", 'window.drSmbJumpTo(id)');
for (const [index, script] of scripts.entries()) new vm.Script(script, { filename: 'cloud-disaster-recovery-smb-' + index });
const title = source.match(/<title>[\s\S]*?<\/title>/)[0];
const toast = source.match(/<div class="toast" id="xhToast"[\s\S]*?<\/div>/)?.[0] || '';
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/cloud-disaster-recovery-smb-imported.css"></head><body>' + content + toast +
  '<script>' + scripts[0] + '</script>' +
  '<script src="/assets/scripts/cloud-disaster-recovery-smb-imported.js"></script>' +
  '<script>' + scripts[1] + '</script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-cloud-disaster-recovery-smb.html'), output);
const faqOutput = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/cloud-disaster-recovery-smb-imported.css"></head><body><main>' +
  normalizeLinks(source.slice(faq.sourceCodeLocation.startOffset, faq.sourceCodeLocation.endOffset))
    .replace('class="sec dr-fq" id="faq"', 'class="sec dr-answers" id="drAnswers" data-preserve-copy')
    .replace('class="faq rv"', 'class="dr-answer-list rv"') + '</main>' +
  '<script>' + scripts[0] + '</script>' +
  '<script src="/assets/scripts/cloud-disaster-recovery-smb-imported.js"></script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-cloud-disaster-recovery-smb-faq.html'), faqOutput);
console.log('Imported Cloud DR for SMB: supplied hero through the first-drill timeline, plus the separate FAQ.');

const { parse } = require('parse5');

if (!process.argv[2]) throw new Error('Pass the supplied cloud-disaster-recovery-smb.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value || '';
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = node => node.value || (node.childNodes || []).map(text).join('');
const main = nodes.find(node => node.tagName === 'main');
if (!main) throw new Error('Missing Cloud Disaster Recovery for SMBs page content.');
const aliases = { '/private-cloud': '/hybrid-cloud', '/red-hat': '/vendor-partners/red-hat' };
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (!/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) && !/^[a-z0-9-]+\.html(?:#|$)/.test(href)) return attribute;
    let route = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '');
    if (!route.startsWith('/')) route = '/' + route;
    const [pathname, ...fragment] = route.split('#');
    return 'href="' + (aliases[pathname] || pathname) + (fragment.length ? '#' + fragment.join('#') : '') + '" target="_top"';
  });
}
let content = localLinks(slice(main));
const heroActions = nodes.find(node => node.tagName === 'div' && attr(node, 'class').split(/\s+/).includes('lh-ctas'));
if (!heroActions) throw new Error('Missing Cloud Disaster Recovery for SMBs hero action row.');
content = content.replace(localLinks(slice(heroActions)), '<div class="xh-banner-actions" data-banner-added-actions></div>');
// Use the site's Angular closing strip so its support image and actions stay shared.
const contact = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'contact');
if (!contact) throw new Error('Missing Cloud Disaster Recovery for SMBs closing banner.');
content = content.replace(localLinks(slice(contact)), '');
const typewriter = nodes.find(node => attr(node, 'class').split(/\s+/).includes('lh-type') && attr(node, 'data-words'));
if (!typewriter) throw new Error('Missing Cloud Disaster Recovery for SMBs typing phrases.');
const escapeText = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const reserves = JSON.parse(attr(typewriter, 'data-words')).map(word =>
  '<span class="dr-type-reserve" aria-hidden="true">' + escapeText(word) + '</span>').join('');
content = content.replace(slice(typewriter), slice(typewriter).replace('<span class="tw">', reserves + '<span class="tw">'));
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
let core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
let runtime = scripts.at(-1);
if (!core || !runtime.includes('__drCfg')) throw new Error('Missing Cloud Disaster Recovery for SMBs interactive runtime.');
// hosting-tools-viewport.js owns typing; remove the source's competing timer.
const typingStart = core.indexOf('  /* typewriter:');
const typingEnd = core.indexOf('  /* Ask AI chips:', typingStart);
if (typingStart < 0 || typingEnd < 0) throw new Error('Missing source typewriter boundary.');
core = core.slice(0, typingStart) + core.slice(typingEnd);
runtime = runtime.replace("if(e)e.scrollIntoView({behavior:R?'auto':'smooth'});", 'if(e)window.hostingJumpTo(id);');
const bridge = `(function(){
  var open=XH.open;
  XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:options&&options.topic||'Cloud Disaster Recovery for SMBs as a Service consultation'}));return;}open(id,options);};
  XH.cart={add:function(item){document.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
})();`;
const overrides = '<style>html,body{margin:0;height:auto;overflow-x:clip}main{display:flow-root}[hidden]{display:none!important}#drHero .hero-grid>*{min-width:0}#drHero .lh-title{font-size:var(--hosting-title-size,44px)!important}</style>';
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cloud Disaster Recovery for SMBs as a Service India | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/faq-layout.css"><link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/disaster-recovery-smb-hero.css"></head><body>' + content + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script><script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(script[1]);
fs.writeFileSync(path.join(root, 'public/imported-cloud-disaster-recovery-smb.html'), html);
console.log('Imported Cloud Disaster Recovery for SMBs content, animations, configurator, sizing tools, FAQs and related services.');

