const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the directory containing the Senegal and Angola HTML files.');

for (const country of ['Senegal', 'Angola']) {
  const slug = country.toLowerCase() + '-go-to-market-strategy';
  const source = fs.readFileSync(path.join(process.argv[2], slug + '.html'), 'utf8');
  const nodes = [];
  function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
  walk(parse(source, { sourceCodeLocationInfo: true }));
  const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
  const has = (n, c) => attr(n, 'class').split(/\s+/).includes(c);
  const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
  const text = n => n.value || (n.childNodes || []).map(text).join('');
  const mainNode = nodes.find(n => n.tagName === 'main');
  const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
  const why = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'why-xcellhost');
  if (!mainNode || !faq || !why) throw Error(`Missing required sections in ${slug}`);
  let main = html(mainNode).replace('<main', '<main data-customer-testimonials="off"');
  main = main.replace('class="hero lh sn-hero"', 'class="hero lh sn-hero" data-banner-actions="off"');
  for (const n of nodes.filter(n => has(n, 'crumb'))) main = main.replace(html(n), '');
  const faqGrid = nodes.find(n => has(n, 'faq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset);
  const items = faqGrid.childNodes.filter(n => has(n, 'q')).map(html);
  if (items.length !== 8) throw Error(`Expected eight original FAQs for ${country}`);
  const faqHtml = html(faq).replace(html(faqGrid), '<div class="faq">' + [items.slice(0, 4), items.slice(4)].map(col => '<div class="hosting-faq-column">' + col.join('\n') + '</div>').join('') + '</div>');
  const security = `<section class="sec alt" id="security-compliance"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Agree delivery responsibilities, data locations and evidence requirements with each customer and local partner before deploying the ${country} strategy.</p></div><div class="country-security-grid"><article><h3>Data Location</h3><p>Record the agreed hosting, backup and support-access locations for each workload.</p></article><article><h3>Access And Evidence</h3><p>Document access controls, monitoring and recovery procedures against the customer's requirements.</p></article><article><h3>Delivery Responsibilities</h3><p>Define partner responsibilities, escalation paths and recovery expectations in the customer agreement.</p></article></div></div></section>`;
  main = main.replace(html(why), security + html(why)).replace(html(faq), faqHtml);
  const sprites = nodes.filter(n => n.tagName === 'svg' && n.sourceCodeLocation?.endOffset < mainNode.sourceCodeLocation.startOffset).map(html).join('');
  const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n, 'href'))).map(html).join('\n');
  const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => `calc(var(--page-vh,1vh) * ${n})`);
  const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text);
  const bridge = `(function(){document.addEventListener('click',function(e){const a=e.target.closest('a[href]');if(!a||a.getAttribute('href').startsWith('#'))return;const u=new URL(a.href,location.href);if(u.origin!==location.origin&&!/^(?:www\\.)?xcellhost\\.(?:cloud|top)$/.test(u.hostname))return;a.href=u.pathname.replace(/\\.html$/,'')+u.search+u.hash;a.target='_top';},true);})();`;
  for (const code of [...scripts, bridge]) new vm.Script(code);
  const css = ['consulting-faq', 'faq-layout', 'senegal-angola-go-to-market'].map(n => `<link rel="stylesheet" href="/assets/styles/${n}.css">`).join('');
  fs.writeFileSync(path.join(root, `public/imported-${slug}.html`), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${country} Go-to-Market Strategy | XcellHost</title>${fonts}${styles}${css}</head><body>${sprites}${main}<script src="/assets/scripts/hosting-tools-viewport.js"></script>${[...scripts, bridge].map(code => '<script>' + code + '</script>').join('')}</body></html>`);
  console.log(`Imported ${country}: eight original FAQs and interactive strategy tools.`);
}
