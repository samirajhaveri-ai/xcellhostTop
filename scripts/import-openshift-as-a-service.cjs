const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw new Error('Pass the supplied openshift-as-a-service.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value || '';
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = node => node.value || (node.childNodes || []).map(text).join('');
const main = nodes.find(node => node.tagName === 'main');
if (!main) throw new Error('Missing OpenShift page content.');
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
if (!heroActions) throw new Error('Missing OpenShift hero action row.');
content = content.replace(localLinks(slice(heroActions)), '<div class="xh-banner-actions" data-banner-added-actions></div>');
// Use the site's Angular closing strip so its support image and actions stay shared.
const contact = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'contact');
if (!contact) throw new Error('Missing OpenShift closing banner.');
content = content.replace(localLinks(slice(contact)), '');
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
let runtime = scripts.at(-1);
if (!core || !runtime.includes('__osSize')) throw new Error('Missing OpenShift interactive runtime.');
runtime = runtime.replace("if(e)e.scrollIntoView({behavior:R?'auto':'smooth'});", 'if(e)window.hostingJumpTo(id);')
  .replace("location.href='kubernetes-api.html'", "window.top.location.href='/kubernetes-api'")
  .replace("location.href='private-cloud.html'", "window.top.location.href='/hybrid-cloud'");
const bridge = `(function(){
  var open=XH.open;
  XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:options&&options.topic||'OpenShift as a Service consultation'}));return;}open(id,options);};
  XH.cart={add:function(item){document.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
})();`;
const overrides = '<style>html,body{margin:0;height:auto;overflow-x:clip}main{display:flow-root}[hidden]{display:none!important}#osHero .hero-grid>*{min-width:0}#osHero .lh-title{font-size:var(--hosting-title-size,44px)!important}</style>';
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>OpenShift as a Service India | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/faq-layout.css"><link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/openshift-hero.css"></head><body>' + content + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script><script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(script[1]);
fs.writeFileSync(path.join(root, 'public/imported-openshift-as-a-service.html'), html);
console.log('Imported OpenShift content, animations, configurator, sizing tools, FAQs and related services.');
