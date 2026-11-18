const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the directory containing the France and Spain HTML files.');

for (const country of ['Spain', 'France']) {
  const slug = country.toLowerCase() + '-go-to-market-strategy';
  const source = fs.readFileSync(path.join(process.argv[2], slug + '.html'), 'utf8');
  const nodes = [];
  function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
  walk(parse(source, { sourceCodeLocationInfo: true }));
  const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
  const has = (n, c) => attr(n, 'class').split(/\s+/).includes(c);
  const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
  const text = n => n.value || (n.childNodes || []).map(text).join('');
  const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
  const why = nodes.find(n => has(n, 'vg-diff'));
  if (!faq || !why) throw Error(`Missing FAQ or Why XcellHost in ${slug}`);
  let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
  // Keep the source briefing actions, including its model and print controls.
  main = main.replace('id="vgHero"', 'id="vgHero" data-banner-actions="off"');
  for (const n of nodes.filter(n => has(n, 'crumb') || (n.tagName === 'section' && (attr(n, 'id') === 'contact' || has(n, 'lnl-wrap'))))) main = main.replace(html(n), '');
  main = main.replace(html(why), '');
  const whyHtml = html(why).replace(/<div class="vg-diffh">[\s\S]*?<\/div>/, `<div class="vg-diffh"><h2>Why XcellHost For ${country} Go-To-Market Strategy</h2></div>`);
  const faqGrid = nodes.find(n => has(n, 'faq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset);
  const items = faqGrid.childNodes.filter(n => has(n, 'fq')).map(html);
  if (items.length !== 9) throw Error(`Expected nine original FAQs for ${country}`);
  const faqHtml = html(faq).replace(html(faqGrid), '<div class="faq">' + [items.slice(0, 5), items.slice(5)].map(col => '<div class="hosting-faq-column">' + col.join('\n') + '</div>').join('') + '</div>');
  const security = `<section class="sec alt" id="security-compliance"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Agree delivery responsibilities, data locations and evidence requirements with each customer and local partner before deploying the ${country} strategy.</p></div><div class="country-security-grid"><article><h3>Data Location</h3><p>Record the agreed hosting, backup and support-access locations for each workload.</p></article><article><h3>Access And Evidence</h3><p>Document access controls, monitoring and recovery procedures against the customer's requirements.</p></article><article><h3>Delivery Responsibilities</h3><p>Define partner responsibilities, escalation paths and recovery expectations in the customer agreement.</p></article></div></div></section>`;
  main = main.replace(html(faq), security + `<section class="sec vg-why" id="why-xcellhost"><div class="wrap">${whyHtml}</div></section>` + faqHtml);
  const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n, 'href'))).map(html).join('\n');
  const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => `calc(var(--page-vh,1vh) * ${n})`);
  const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text);
  const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
  const runtime = scripts.at(-1).replace("window.scrollTo({top:t.offsetTop-((hdr?hdr.offsetHeight:0)+50),behavior:REDUCE?'auto':'smooth'});", "window.hostingJumpTo('verticals');");
  const bridge = `(function(){
    XH.open=function(id,options){if(id==='xhCallback')document.dispatchEvent(new CustomEvent('import-callback',{detail:${JSON.stringify(country + ' Go-to-Market Strategy: ')}+(options?.topic||'Strategy consultation')}));};
    document.addEventListener('click',function(e){const a=e.target.closest('a[href]');if(!a)return;const u=new URL(a.href,location.href);if(u.origin!==location.origin&&!/^(?:www\\.)?xcellhost\\.(?:cloud|top)$/.test(u.hostname))return;if(a.getAttribute('href').startsWith('#'))return;let p=u.pathname.replace(/\\.html$/,'');const aliases={'/ai-apps-builder':'/ai-app-builder','/aiops':'/aiops-as-a-service','/xcellhost-vcaio':'/vcaio-as-a-service','/acronis':'/vendor-partners/acronis'};p=aliases[p]||p;if(p.startsWith('/xcellhost-'))p='/'+p.slice(11);a.href=p+u.search+u.hash;a.target='_top';},true);
  })();`;
  for (const code of [core, bridge, runtime]) { if (!code) throw Error('Missing source runtime'); new vm.Script(code); }
  const css = ['consulting-faq', 'faq-layout', 'country-why-xcellhost', 'france-spain-go-to-market'].map(n => `<link rel="stylesheet" href="/assets/styles/${n}.css">`).join('');
  fs.writeFileSync(path.join(root, `public/imported-${slug}.html`), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${country} Go-to-Market Strategy | XcellHost</title>${fonts}${styles}${css}</head><body>${main}<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>${core}</script><script>${bridge}</script><script>${runtime}</script></body></html>`);
  console.log(`Imported ${country}: nine original FAQs and interactive strategy tools.`);
}
