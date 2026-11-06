const fs = require('node:fs');
const vm = require('node:vm');
const { parse } = require('parse5');
if (!process.argv[2]) throw Error('Pass the supplied Malaysia strategy HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n,k) => n.attrs?.find(a => a.name === k)?.value || '';
const slice = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const text = n => n.value || (n.childNodes || []).map(text).join('');
let main = slice(nodes.find(n => n.tagName === 'main'));
const why = nodes.find(n => n.tagName === 'div' && attr(n,'class').split(/\s+/).includes('vg-diff'));
const faq = nodes.find(n => n.tagName === 'section' && attr(n,'id') === 'faq');
if (!why || !faq) throw Error('Missing Why XcellHost or FAQ section.');
main = main.replace(slice(why), '');
const whyContent = slice(why).replace(/<div class="vg-diffh">[\s\S]*?<\/div>/, '<div class="vg-diffh"><h2 class="eyebrow">Why XcellHost for Malaysia Go-to-Market Strategy</h2></div>');
main = main.replace(slice(faq), '<section class="sec vg-why" id="why-xcellhost"><div class="wrap">' + whyContent + '</div></section>\n' + slice(faq));
for (const n of nodes.filter(n => n.tagName === 'section' && (attr(n,'id') === 'contact' || attr(n,'class').split(/\s+/).includes('lnl-wrap')))) main = main.replace(slice(n), '');
for (const n of nodes.filter(n => n.tagName === 'div' && attr(n,'class').split(/\s+/).some(c => c === 'lh-ctas' || c === 'lh-ask'))) {
  main = main.replace(slice(n), attr(n,'class').split(/\s+/).includes('lh-ctas') ? '<div class="xh-banner-actions" data-banner-added-actions></div>' : '');
}
if (!main.includes('data-banner-added-actions')) throw Error('Missing hero actions.');
const styles = nodes.filter(n => n.tagName === 'style').map(slice).join('\n');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n,'href'))).map(slice).join('\n');
const whyStyles = '<link rel="stylesheet" href="/assets/styles/malaysia-why-xcellhost.css">';
const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n,'type')).map(text);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1).replace("window.scrollTo({top:t.offsetTop-((hdr?hdr.offsetHeight:0)+50),behavior:REDUCE?'auto':'smooth'});", "window.hostingJumpTo('verticals');");
const bridge = `(function(){
XH.open=function(id,options){if(id==='xhCallback')document.dispatchEvent(new CustomEvent('import-callback',{detail:options?.topic||'Malaysia Go-to-Market Strategy consultation'}));};
document.addEventListener('click',function(e){const a=e.target.closest('a[href]');if(!a)return;const u=new URL(a.href,location.href);if(u.origin!==location.origin&&!/^(?:www\\.)?xcellhost\\.(?:cloud|top)$/.test(u.hostname))return;if(a.getAttribute('href').startsWith('#'))return;let p=u.pathname.replace(/\\.html$/,'');const aliases={'/ai-apps-builder':'/ai-app-builder','/aiops':'/aiops-as-a-service','/xcellhost-vcaio':'/vcaio-as-a-service','/acronis':'/vendor-partners/acronis'};p=aliases[p]||p;if(p.startsWith('/xcellhost-'))p='/'+p.slice(11);a.href=p+u.search+u.hash;a.target='_top';},true);
})();`;
const overrides = `<style>html,body{margin:0;height:auto;overflow-x:clip}main{display:flow-root}.rv{opacity:1;transform:none}[hidden]{display:none!important}#vgHero>.wrap{max-width:1240px;width:100%}#vgHero .hero-grid{align-items:center;grid-template-columns:minmax(0,640px) minmax(0,500px);gap:40px}#vgHero .vg-copy{min-width:0;container-type:inline-size}#vgHero .lh-title{font-size:clamp(18px,4cqi,30px)!important}#vgHero .lh-tag{font-size:16px;line-height:1.5}#vgHero .lh-tag2{font-size:14px;line-height:1.6}#vgHero .xh-banner-actions{margin-top:20px}#vgHero .xh-banner-ai{max-width:100%}@media(max-width:900px){#vgHero .hero-grid{grid-template-columns:minmax(0,1fr);gap:28px}}</style>`;
const html = '<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Malaysia Go-to-Market Strategy | XcellHost</title>'+fonts+styles+overrides+'<link rel="stylesheet" href="/assets/styles/consulting-faq.css"></head><body>'+main+'<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>'+core+'</script><script>'+bridge+'</script><script>'+runtime+'</script></body></html>';
for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
fs.writeFileSync('public/imported-malaysia-go-to-market-strategy.html', html.replace('</head>', whyStyles + '</head>'));
console.log('Imported Malaysia strategy, interactive tools, FAQs and sources.');
