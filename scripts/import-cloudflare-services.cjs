const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw new Error('Pass the supplied all-cloudflare-products.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value || '';
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = node => node.value || (node.childNodes || []).map(text).join('');
const main = nodes.find(node => node.tagName === 'main');
if (!main) throw new Error('Missing Cloudflare page content.');
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
const catalogueHeadline = nodes.find(node => node.tagName === 'p' && attr(node, 'class').split(/\s+/).includes('cf-big'));
if (catalogueHeadline) content = content.replace(localLinks(slice(catalogueHeadline)), '');
const heroActions = nodes.find(node => node.tagName === 'div' && attr(node, 'class').split(/\s+/).includes('lh-ctas'));
if (!heroActions) throw new Error('Missing Cloudflare hero action row.');
content = content.replace(localLinks(slice(heroActions)), '<div class="xh-banner-actions" data-banner-added-actions></div>');
// Use the site's Angular closing strip so its support image and actions stay shared.
const contact = nodes.find(node => node.tagName === 'div' && attr(node, 'id') === 'contact');
if (!contact) throw new Error('Missing Cloudflare closing banner.');
content = content.replace(localLinks(slice(contact)), '');
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
let runtime = scripts.at(-1);
if (!core || !runtime.includes('function addQuote')) throw new Error('Missing Cloudflare interactive runtime.');
runtime = localLinks(runtime).replaceAll('window.scrollTo(', 'window.scrollOuter(')
  .replace("el3.scrollIntoView({block:'nearest',behavior:R?'auto':'smooth'});", 'window.hostingJumpTo(el3.id);');
const bridge = `(function(){
  var open=XH.open;
  XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:options&&options.topic||'Cloudflare products consultation'}));return;}open(id,options);};
  XH.cart={add:function(item){document.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
  document.addEventListener('click',function(event){
    var anchor=event.target.closest('a[href]');if(!anchor)return;
    var href=anchor.getAttribute('href');if(!href||href.startsWith('#'))return;
    var url=new URL(href,location.href);
    if(url.origin!==location.origin&&!/^(?:www\\.)?xcellhost\\.(?:cloud|top)$/.test(url.hostname))return;
    anchor.href=url.pathname.replace(/\\.html$/,'')+url.search+url.hash;anchor.target='_top';
  },true);
document.addEventListener('submit',function(event){
  var form=event.target;if(!form.matches('#cfQF'))return;
  event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;
  var submit=form.querySelector('[type="submit"]');if(submit.disabled)return;
  var payload=Object.fromEntries(new FormData(form));payload.summary=form.querySelector('textarea').value;
  var status=document.getElementById('cfQuoteStatus');if(!status){status=document.createElement('p');status.id='cfQuoteStatus';status.setAttribute('role','status');form.after(status);}
  status.textContent='Sending your quotation request...';submit.disabled=true;
  document.dispatchEvent(new CustomEvent('import-enquiry',{detail:{payload:payload,complete:function(result){
    submit.disabled=false;status.replaceChildren();
    if(result.ok&&!result.skipped){status.textContent='Quotation request received. Reference: '+result.ref;return;}
    status.append(document.createTextNode('Your quotation request is ready. '));var link=document.createElement('a');link.href=result.fallbackUrl;link.textContent='Email it to our team';status.append(link);
  }}}));
},true);
})();`;
const overrides = '<style>html,body{margin:0;height:auto;overflow-x:clip}main{display:flow-root}[hidden]{display:none!important}#cfHero .hero-grid>*{min-width:0}#cfHero .lh-title{font-size:var(--hosting-title-size,44px)!important}</style>';
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>All Cloudflare Products India | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/faq-layout.css"><link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/cloudflare-services-integration.css"></head><body>' + content + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script><script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(script[1]);
fs.writeFileSync(path.join(root, 'public/imported-all-cloudflare-products.html'), html);
console.log('Imported Cloudflare content, animations, configurator, sizing tools, FAQs and related services.');
