const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied media-kit.html file.');
const source = fs.readFileSync(process.argv[2], 'utf8'), nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
main = main.replace('id="mkHero"', 'id="mkHero" data-banner-actions="off"');
const closing = nodes.find(n => attr(n, 'class').split(' ').includes('mk-cta'));
if (closing) main = main.replace(html(closing), '');
main = main.replace('class="lh-ask"', 'class="lh-ask" data-ai-product="Media Kit"');
main = main.replace('Ask AI to draft with the kit', 'Ask AI About The Media Kit');
const aliases = {
  'careers-overview': '/company/careers-overview', 'xcellhost-podcast': '/under-construction/podcasts-catalog',
  'cloud-hsm': '/cloud-hardware-security-module', 'cloudops': '/cloud-operations',
  'xcellhost-vcaio': '/vcaio-as-a-service', 'xcellhost-email-signature': '/email-signature',
};
main = main.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, (_, slug, hash) => 'href="' + (aliases[slug] || '/' + slug) + (hash || '') + '" target="_top"');
const extras = `<section class="sec alt mk-site-section" id="security-compliance"><div class="wrap"><div class="sh"><span class="eyebrow">SECURITY &amp; COMPLIANCE</span><h2>Responsible Use Of Brand Assets</h2><p>Use the supplied brand guidance and contact the media team when you need confirmation or permission.</p></div><div class="mk-site-grid"><article><h3>Approved Artwork</h3><p>Follow the logo, clear-space and colour guidance when referring to XcellHost.</p></article><article><h3>Accurate Attribution</h3><p>Use the supplied company descriptions and confirm additional claims with the media team.</p></article><article><h3>Permission And Privacy</h3><p>Request approval for co-branded material and permission before publishing customer names or personal details.</p></article></div></div></section>
<section class="sec mk-site-section" id="why-xcellhost"><div class="wrap"><div class="sh"><span class="eyebrow">WHY XCELLHOST</span><h2>A Media Kit Built For Your Workflow</h2></div><div class="mk-site-grid"><article><h3>Ready-To-Use Descriptions</h3><p>Choose a 50, 100 or 200-word company boilerplate for your publication.</p></article><article><h3>Company Facts Together</h3><p>Refer to the supplied fact sheet and ask the team about details not listed.</p></article><article><h3>Consistent Branding</h3><p>Find logo rules, exact colours, typography and product naming guidance.</p></article><article><h3>Downloadable Assets</h3><p>Generate logo files, palette files and company text directly in your browser.</p></article><article><h3>Interactive Checks</h3><p>Check colour contrast and product naming as you prepare your material.</p></article><article><h3>Direct Media Contact</h3><p>Prepare an interview or speaker request with your topic, format and deadline.</p></article></div></div></section>`;
main = main.replace('<section class="sec alt mk-fq" id="faq">', extras + '<section class="sec alt mk-fq" id="faq">');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
let core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
// A mailto draft does not submit an enquiry or need a local lead archive.
core = core.replace(/    var leads=store\('xh-leads'\)[^\n]*\n/, '');
let runtime = scripts.at(-1).replaceAll('window.scrollTo(', 'window.scrollOuter(');
runtime = runtime.replace("setTimeout(function(){a.remove();},300);});", "setTimeout(function(){a.remove();},300);XH.toast('Email draft prepared. Review and send it in your mail app.');return false;});");
const bridge = `(function(){
 const open=XH.open;XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:'Media Kit: '+(options?.topic||'Media enquiry')}));return;}open(id,options);};
 const aliases=${JSON.stringify(aliases)};
 function links(){document.querySelectorAll('a[href]').forEach(a=>{const match=a.getAttribute('href').match(/^([a-z0-9-]+)\\.html(#[^]*)?$/);if(match)a.href=(aliases[match[1]]||'/'+match[1])+(match[2]||'');if(a.getAttribute('href').startsWith('/'))a.target='_top';});}
 window.addEventListener('load',links);document.addEventListener('click',links,true);
})();`;
for (const code of [core, bridge, runtime]) new vm.Script(code);
fs.writeFileSync(path.join(root, 'public/imported-media-kit.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Media Kit | XcellHost</title>' + fonts + styles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/media-kit.css"></head><body>' + main + '<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div><script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script><script src="/assets/scripts/hero-ask-ai.js"></script></body></html>');
console.log('Imported Media Kit content, tools, downloads and FAQ.');
