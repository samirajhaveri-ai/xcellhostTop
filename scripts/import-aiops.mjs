import fs from 'node:fs';

const source = fs.readFileSync(process.argv[2], 'utf8');
const main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
const styles = source.match(/<style>([\s\S]*?)<\/style>/)?.[1];
const scripts = [...source.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
const core = scripts.find(m => m[2].includes('XcellHost v2 core runtime'))?.[2];
const page = scripts.at(-1)?.[2];
if (!main || !styles || !core || !page?.includes('aoStage')) throw Error('Unexpected AIOps source');
const start = main.indexOf('<div class="stage ao-stage"');
const tags = /<div\b[^>]*>|<\/div>/g;
tags.lastIndex = start;
let depth = 0, end = start;
for (let m; (m = tags.exec(main));) {
  depth += m[0].startsWith('</') ? -1 : 1;
  if (!depth) { end = tags.lastIndex; break; }
}
if (start < 0 || end <= start) throw Error('Missing AIOps hero demo');
const overview = main.indexOf('<section class="sec ao-ov"');
const faq = main.indexOf('<section class="sec alt ao-fq"');
if (overview < 0 || faq <= overview) throw Error('Missing AIOps content sections');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(s => /fonts\.(googleapis|gstatic)\.com/.test(s)).join('');
const bridge = `(function(){
  const open=XH.open;
  XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:options?.topic||'AIOps consultation'}));return;}open(id,options);};
  XH.cart={add:item=>document.dispatchEvent(new CustomEvent('import-add',{detail:item}))};
  Element.prototype.scrollIntoView=function(){if(this.id)document.dispatchEvent(new CustomEvent('aiops-scroll',{detail:this.id}));};
  document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a)return;const url=new URL(a.href,location.href);if(url.origin===location.origin||/^(?:www\\.)?xcellhost\\.(?:cloud|top)$/.test(url.hostname)){if(url.hash&&url.pathname===location.pathname)return;a.href=url.pathname.replace(/\\.html$/,'')+url.search+url.hash;a.target='_top';}},true);
})();`;
function documentHtml(content, hero) {
  const css = hero ? `html,body{background:transparent!important}#aoHero{padding:8px!important;min-height:0!important;background:transparent!important;overflow:hidden}#aoHero #aoStage{width:680px;max-width:none;margin:0!important;grid-template-columns:minmax(0,1fr) 148px!important;grid-template-rows:auto auto!important;gap:12px;padding:44px 0 10px!important}#aoStage>.lh-tilt{grid-column:1!important;grid-row:1!important}.ao-scr{height:340px!important}.ao-chip{display:flex!important;max-width:250px!important}.ao-chip b{font-size:12px!important}.ao-chip small{display:block!important;font-size:10px}.ao-side{display:flex!important;grid-column:2!important;grid-row:1!important;flex-direction:column!important;gap:10px!important}.ao-sc{padding:11px 12px!important}.ao-sc b{font-size:21px!important}.ao-pw.lh-powered{display:block!important;grid-column:2!important;grid-row:2!important;justify-self:stretch!important;margin:0!important}.ao-log{grid-column:1!important;grid-row:2!important;max-width:none}.lh-orbit{display:none}` : `.sec{padding:48px 0}.wrap{max-width:1200px}#overview .pp-cols{grid-template-columns:1fr;gap:16px}#overview .pp-ov{margin:0}.sh h2{font-size:clamp(24px,3vw,34px)}.rv{opacity:1;transform:none}`;
  return `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AIOps ${hero ? 'animated console' : 'plans and tools'} | XcellHost</title>${fonts}<style>${styles}\nhtml,body{margin:0;overflow-x:hidden}main{display:flow-root}${css}</style></head><body><main id="main">${content}</main><script>${hero ? "function fitAIOps(){document.getElementById('aoStage').style.zoom=Math.min(1,(innerWidth-16)/680);}fitAIOps();addEventListener('resize',fitAIOps);" : ""}</script><script>${core}</script><script>${bridge}</script><script>${page}</script></body></html>`;
}
fs.writeFileSync('public/aiops-content.html', documentHtml(main.slice(overview, faq), false));
fs.writeFileSync('public/aiops-hero.html', documentHtml(`<section class="hero lh ao-hero" id="aoHero">${main.slice(start, end)}</section>`, true));
