const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the directory containing the Druva and Veeam licensing guide HTML files.');
for (const vendor of ['druva', 'veeam']) {
  const slug = vendor + '-licensing-guide', title = (vendor === 'druva' ? 'Druva' : 'Veeam') + ' Licensing Guide';
  const source = fs.readFileSync(path.join(process.argv[2], slug + '.html'), 'utf8'), nodes = [];
  function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
  walk(parse(source, { sourceCodeLocationInfo: true }));
  const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
  const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
  let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
  const aliases = { 'xcellhost-druva': 'explore-druva-platform', 'veeam-services': 'vendor-partners/veeam' };
  main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, s) => 'href="/' + (aliases[s] || s) + '" target="_top"');
  main = main.replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:cloud|top)\/"/g, 'href="/" target="_top"');
  // Match the existing licensing guides without changing the supplied article.
  const heading = main.match(/<div class="crumb"[^>]*>[\s\S]*?<\/div>\s*<h1\b[^>]*>[\s\S]*?<\/h1>/)?.[0];
  if (heading) main = main.replace(heading, '').replace(/(<div class="hero-grid [^"]+">)/, '$1<div class="licensing-guide-heading">' + heading + '</div>');
  // Reserve the shared action row immediately above Ask AI, below the source CTAs.
  main = main.replace('<div class="lh-ask"', '<div class="xh-banner-actions" data-banner-added-actions></div><div class="lh-ask"');
  const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
  const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
  const runtime = scripts.at(-1);
  if (!core || !runtime) throw Error('Missing guide runtime: ' + slug);
  const bridge = `(function(){
    const guideTitle=${JSON.stringify(title)},open=XH.open;
    XH.open=function(id,options){if(id==='xhCallback'){let topic=options?.topic||guideTitle;if(/quote|quotation/i.test(topic)){topic+='\\n'+Array.from(document.querySelectorAll('#cfList li')).map(row=>Array.from(row.children).map(el=>el.textContent).join(': ')).join('\\n');for(const [id,label] of [['cfSub','Subtotal'],['cfGst','GST'],['cfTot','Total']]){const el=document.getElementById(id);if(el)topic+='\\n'+label+': '+el.textContent;}}document.dispatchEvent(new CustomEvent('import-callback',{detail:guideTitle+': '+topic}));return;}open(id,options);};
    XH.cart={add:item=>document.dispatchEvent(new CustomEvent('import-cart',{detail:item}))};
    document.addEventListener('submit',event=>{const form=event.target;if(!form.matches('[data-xhform]'))return;event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;document.dispatchEvent(new CustomEvent('import-training-enquiry',{detail:{...Object.fromEntries(new FormData(form)),course:guideTitle}}));},true);
    const providers={chatgpt:['ChatGPT','https://chatgpt.com/?q=','chatgpt.com'],claude:['Claude','https://claude.ai/new?q=','claude.ai'],perplexity:['Perplexity','https://www.perplexity.ai/search/new?q=','perplexity.ai'],google:['Google AI','https://www.google.com/search?udm=50&q=','gemini.google.com'],copilot:['Copilot','https://copilot.microsoft.com/?q=','copilot.microsoft.com']};
    document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{const p=providers[a.dataset.ai];a.href=p[1]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';a.title='Ask '+p[0];a.setAttribute('aria-label',a.title);const img=document.createElement('img');img.src='https://www.google.com/s2/favicons?domain='+p[2]+'&sz=64';img.alt='';img.width=18;img.height=18;a.replaceChildren(img);}));
    document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a||a.getAttribute('href').startsWith('#'))return;const url=new URL(a.href,location.href);if(url.origin===location.origin||/^(?:www\\.)?xcellhost\\.(?:cloud|top)$/.test(url.hostname)){a.href=url.pathname.replace(/\\.html$/,'')+url.search+url.hash;a.target='_top';}},true);
  })();`;
  for (const code of [core, bridge, runtime]) new vm.Script(code, { filename: slug });
  const toast = '<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div>';
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + fonts + styles + '<link rel="stylesheet" href="/assets/styles/backup-licensing-guides.css"></head><body>' + main + toast + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script></body></html>');
  console.log('Imported complete ' + title);
}
