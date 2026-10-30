import fs from 'node:fs';

const input = process.argv[2];
if (!input) throw new Error('Pass the supplied fortinet-services.html path');
const source = fs.readFileSync(input, 'utf8');
let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
const styles = source.match(/<style>([\s\S]*?)<\/style>/)?.[1];
const scripts = [...source.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
const core = scripts.find(item => item[2].includes('XcellHost v2 core runtime'))?.[2];
let page = scripts.at(-1)?.[2];
if (!main || !styles || !core || !page?.includes('XH.fzData')) throw new Error('Unexpected Fortinet services source');
const mapLiteral = fs.readFileSync('src/app/data/site.data.ts', 'utf8').match(/^export const WORLD_MAP_HTML = (.+);$/m)?.[1];
if (!mapLiteral) throw new Error('Missing default hero world map');
const worldMap = JSON.parse(mapLiteral);
const stats = main.match(/<div class="fz-stats"[^>]*>\s*(?:<div>[\s\S]*?<\/div>\s*){4}<\/div>/)?.[0];
if (!stats) throw new Error('Missing catalogue metrics');
const heroPoints = `<div class="fz-hero-points" aria-label="Fortinet services highlights">
  <div><i aria-hidden="true">&#10003;</i><span>FortiGate firewalls &amp; FortiGuard</span></div>
  <div><i aria-hidden="true">&#10022;</i><span>Secure SD-WAN &amp; SASE</span></div>
  <div><i aria-hidden="true">&#9638;</i><span>Wi-Fi, endpoint &amp; SecOps</span></div>
  <div><i aria-hidden="true">&#8377;</i><span>INR billing &amp; managed services</span></div>
</div>`;
main = main.replace('data-product="All Fortinet Services · XcellHost"', 'data-product="All Fortinet Services"')
  .replace(stats, `<div class="lh-type fz-hero-type" data-words='["Fortinet products, one catalogue","Network security, managed together","Licences and support, billed in INR"]'><span class="tw"></span><span class="cur"></span></div>${heroPoints}`)
  .replace(/<form class="fz-hs"[\s\S]*?<\/form>/, '')
  .replace(/<div class="lh-ctas fz-ctas"[^>]*>[\s\S]*?<\/div>\s*<div class="lh-ask fz-ask"[^>]*>[\s\S]*?<\/div>/, '<div class="xh-banner-actions" data-banner-added-actions></div>')
  .replace(/(<section class="hero lh fz-hero"[^>]*>\s*)<div class="hero-bg"[\s\S]*?(?=\n  <div class="wrap">)/, `$1<div class="hero-bg" aria-hidden="true"><div class="fz-world-map">${worldMap}</div><div class="fz-grid"></div></div>`)
  .replace(/(<section class="sec fz-cat" id="catalog">[\s\S]*?<div class="fz-ch rv">[\s\S]*?<\/div>)/, '$1' + stats.replace('class="fz-stats"', 'class="fz-stats fz-catalog-stats"'));
if (!main.includes('data-banner-added-actions') || !main.includes('fz-catalog-stats')) throw new Error('Hero transformation incomplete');
main = main.replace(/(<section class="sec(?: alt)? fz-faq" id="faq">[\s\S]*?)<div class="sh rv">[\s\S]*?<\/div>/,
  '$1<div class="sh rv"><h2>Frequently asked questions</h2></div>');
const closingStart = main.indexOf('<div class="lcta rv" id="contact">');
const proofStart = main.indexOf('<div class="proof rv">', closingStart);
const relatedStart = main.indexOf('<div class="fz-xl">', proofStart);
const legalStart = main.indexOf('<p class="fz-tm">', relatedStart);
if (!(closingStart >= 0 && proofStart > closingStart && relatedStart > proofStart && legalStart > relatedStart)) throw new Error('Missing closing CTA or related services');
// The shared Angular closing card follows the imported related-service cards.
main = main.slice(0, closingStart) + main.slice(relatedStart);
page = page.replace("hq=$('#fzHQ')", "hq=$('#fzHQ')||q")
  .replace("$('#fzHS').addEventListener", "$('#fzHS')?.addEventListener")
  .replaceAll("hq.addEventListener", "if(hq!==q)hq.addEventListener");
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(item => item[0]).filter(link => /fonts\.(?:googleapis|gstatic)\.com/.test(link)).join('');
const bridge = `
(function(){
  const open = XH.open;
  XH.open = function(id, options){
    if(id === 'xhCallback'){
      document.dispatchEvent(new CustomEvent('import-callback',{detail:options?.topic || 'Fortinet Services consultation'}));
      return;
    }
    open(id, options);
  };
  XH.cart = {add:item=>document.dispatchEvent(new CustomEvent('import-cart',{detail:item}))};
  document.addEventListener('submit',event=>{
    const form=event.target;
    if(form.id!=='fzQF')return;
    event.preventDefault();event.stopImmediatePropagation();
    if(!form.reportValidity())return;
    document.dispatchEvent(new CustomEvent('import-training-enquiry',{detail:Object.fromEntries(new FormData(form))}));
  },true);
  document.addEventListener('click',event=>{
    const a=event.target.closest('a[href]');if(!a||a.getAttribute('href').startsWith('#'))return;
    const url=new URL(a.href,location.href);
    if(url.origin===location.origin || /^(?:www\\.)?xcellhost\\.(?:top|cloud)$/.test(url.hostname)){
      let route=url.pathname.replace(/\\.html$/,'');
      const aliases={
        '/fortinet':'/vendor-partners/fortinet',
        '/geotrust':'/vendor-partners/geotrust',
        '/digicert':'/vendor-partners/digicert',
        '/xcellhost-digicert-certificates':'/digicert-ssl-certificates',
        '/xcellhost-thawte-ssl':'/thawte-ssl-certificates',
        '/xcellhost-rapidssl':'/rapidssl-ssl-certificates',
        '/digicert-verified-mark-certificate':'/digicert-vmc',
        '/digicert-common-mark-certificate':'/digicert-cmc'
      };
      route=aliases[route]||(route.startsWith('/xcellhost-')?'/'+route.slice(11):route);
      a.href=route+url.search+url.hash;a.target='_top';
    }
  },true);
})();`;
fs.writeFileSync('public/imported-fortinet-services.html', `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Fortinet Products and Services | XcellHost</title>${fonts}<style>${styles}\nhtml,body{margin:0;overflow-x:hidden}main{display:flow-root}</style><link rel="stylesheet" href="/assets/styles/consulting-faq.css"><link rel="stylesheet" href="/assets/styles/fortinet-services-hero.css"></head><body>${main}<script>${core}</script><script>${bridge}</script><script>${page}</script></body></html>`);
