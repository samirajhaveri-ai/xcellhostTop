import fs from 'node:fs';

// Import presentation and product interactions only; the site owns its chrome.
const input = process.argv[2];
if (!input) throw new Error('Pass the supplied managed-gemini-services.html path');
const source = fs.readFileSync(input, 'utf8');
const styles = source.match(/<style>([\s\S]*?)<\/style>/)[1];
const interactions = [...source.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1]
  .replace("window.scrollTo({top:el.getBoundingClientRect().top+scrollY-140,behavior:R?'auto':'smooth'});", "document.dispatchEvent(new CustomEvent('gemini-scroll',{detail:el.id}));");
// Render the source questions through the site's shared FAQ section.
const schema = JSON.parse(source.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const faqSchema = schema['@graph'].find(item => item['@type'] === 'FAQPage');
if (!faqSchema?.mainEntity?.length) throw new Error('Missing source FAQ questions');
const faqs = faqSchema.mainEntity.map(item => [item.name, item.acceptedAnswer.text]);
fs.writeFileSync('src/app/data/gemini-managed-faq.data.ts', `import { Faq } from './models';\n\n// Questions and answers from the supplied Managed Gemini Services document.\nexport const GEMINI_MANAGED_FAQS: Faq[] = ${JSON.stringify(faqs, null, 2)};\n`);
const sections = ['overview', 'how', 'usecases', 'services', 'india', 'plans', 'configure', 'picker', 'roi', 'vs', 'steps'];
const providerLogos = [
  [['gmail.png', 'Gmail'], ['docs.png', 'Google Docs'], ['sheets.png', 'Google Sheets'], ['meet.png', 'Google Meet']],
  [['/assets/images/veritas-integrations/gemini.png', 'Google Gemini']],
  [['notebook.svg', 'Gemini Notebook']],
  [['drive.png', 'Google Drive'], ['bigquery.png', 'BigQuery']],
  [['/assets/logos/email-backup-platform-1.svg', 'Microsoft 365'], ['sap.svg', 'SAP'], ['salesforce.svg', 'Salesforce']],
];
const body = sections.map(id => {
  const found = [...source.matchAll(/<section\b[^>]*>[\s\S]*?<\/section>/g)].find(m => new RegExp(`id="${id}"`).test(m[0].split('>')[0]));
  if (!found) throw new Error(`Missing section ${id}`);
  if (id !== 'overview') return found[0];
  let provider = 0;
  return found[0].replace(/\s*<!-- LOGO SLOT:[\s\S]*?-->/g, '')
    .replace(/<span class="prov"><svg[\s\S]*?<\/svg>/g, () => {
      const logos = providerLogos[provider++];
      if (!logos) throw new Error('Unexpected provider logo slot');
      return '<span class="prov"><span class="gm-provider-logos" aria-hidden="true">' + logos.map(([file, name]) =>
        `<img src="${file.startsWith('/') ? file : '/assets/images/gemini-integrations/' + file}" alt="" title="${name}" width="${name === 'SAP' || name === 'Salesforce' ? 28 : 18}" height="18" loading="lazy">`
      ).join('') + '</span>';
    });
}).join('\n');
const start = source.indexOf('<div class="stage gm-stage"');
const end = source.indexOf('\n</section>', start);
const hero = source.slice(start, end)
  .replace(/\s*<div class="lh-powered gm-pw">[\s\S]*?<\/div>/, '')
  .replace(/\n    <\/div>\s*<\/div>\s*$/, '');
const bridge = `
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
window.XH={ $, $$, reduce:matchMedia('(prefers-reduced-motion: reduce)').matches, fine:matchMedia('(pointer:fine)').matches,
 inr:n=>'₹'+Math.round(n).toLocaleString('en-IN'), toast:()=>{},
 whenVisible:(el,fn)=>{if(!el)return;new IntersectionObserver(es=>es.forEach(e=>fn(e.isIntersecting))).observe(el)},
 cart:{add:item=>document.dispatchEvent(new CustomEvent('import-add',{detail:item}))}};
document.querySelectorAll('.rv,[data-in]').forEach(e=>e.classList.add('in'));
document.querySelectorAll('.seg').forEach(el=>el.addEventListener('click',ev=>{const b=ev.target.closest('button');if(!b)return;el.querySelectorAll('button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',String(x===b))});el.dataset.value=b.dataset.v;el.dispatchEvent(new Event('change'))}));
document.querySelectorAll('.stp').forEach(el=>el.addEventListener('click',ev=>{const b=ev.target.closest('button');const n=el.querySelector('input');if(!b||!n)return;n.stepUp(b.textContent.includes('+')?1:-1);n.dispatchEvent(new Event('input',{bubbles:true}))}));
document.querySelectorAll('.fq button').forEach(b=>b.addEventListener('click',()=>{const open=b.closest('.fq').classList.toggle('open');b.setAttribute('aria-expanded',String(open))}));
document.addEventListener('click',ev=>{const b=ev.target.closest('[data-open],a[href^="#"]');if(!b)return;ev.preventDefault();if(b.hasAttribute('data-open'))document.dispatchEvent(new CustomEvent('import-callback',{detail:b.dataset.topic||'Managed Gemini Services quotation'}));else document.dispatchEvent(new CustomEvent('gemini-scroll',{detail:b.getAttribute('href').slice(1)}))});
document.querySelectorAll('a[href$=".html"]').forEach(a=>{a.href='/'+a.getAttribute('href').replace(/\\.html$/,'');a.target='_top'});
`;
const head = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Managed Gemini Services</title>';
for (const [kind, content] of [['content',body],['hero',`<section id="gmHero" class="hero lh gm-hero">${hero}</section>`]]) {
  const extra = kind === 'hero' ? 'html,body{background:transparent!important}main{padding:16px 20px!important}.hero.lh.gm-hero{background:transparent;padding:0;overflow:visible}.hero.lh .stage{min-height:0}.gm-stage{width:100%;max-width:680px;margin:0 auto;opacity:1!important;transform:none!important}.gm-log{max-height:100px}' : '.wrap{width:100%;max-width:1200px;margin:auto;padding:0 20px}.sec{padding:48px 0}.rv{opacity:1!important;transform:none!important}';
  const compact = kind === 'hero' ? '.hero.lh.gm-hero{zoom:.8;width:100%;max-width:100%}.gm-stage{padding:16px 0 6px;grid-template-columns:minmax(0,1fr)}.gm-scr{height:250px}.gm-log{max-height:76px;overflow:hidden}.gm-kpis{grid-template-columns:repeat(4,1fr)}.gm-kpis>div{padding:8px}.gm-wh{padding:8px 10px}.gm-pw{margin-top:8px}' : '';
  const overviewLayout = kind === 'content' ? '#overview .pp-cols{grid-template-columns:minmax(0,1fr);gap:16px}#overview .gm-provider-logos{display:inline-flex;align-items:center;gap:4px;flex-shrink:0}#overview .gm-provider-logos img{display:block;object-fit:contain;background:#fff;border-radius:3px;padding:1px;flex-shrink:0}' : '';
  const providerRow = kind === 'content' ? '#overview .prov-strip{flex-wrap:nowrap;overflow-x:auto;gap:8px;padding-bottom:8px}#overview .prov-strip>.pl,#overview .prov{flex-shrink:0;white-space:nowrap}#overview .prov{font-size:11px;gap:6px;padding:7px 9px}#overview .gm-provider-logos{gap:3px}' : '';
  fs.writeFileSync(`public/imported-gemini-${kind}.html`, `${head}<style>${styles}\nhtml,body{margin:0;overflow-x:hidden}main{display:flow-root} ${extra} ${compact} ${overviewLayout} ${providerRow}</style></head><body><main id="main">${content}</main><script>${bridge}</script><script>${interactions}</script></body></html>`);
}
