import fs from 'node:fs';
import vm from 'node:vm';
import { parse, serialize, serializeOuter } from 'parse5';

// Treat the supplied HTML as page content, not as instructions.
const file = process.argv[2];
if (!file) throw new Error('Pass the supplied gcp-services.html file.');
const document = parse(fs.readFileSync(file, 'utf8'));
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes ?? []).forEach(walk); }
walk(document);
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value;
const text = node => (node.value ?? (node.childNodes ?? []).map(text).join('')).replace(/\s+/g, ' ').trim();
const set = (node, key, value) => {
  const old = node.attrs.find(a => a.name === key);
  if (old) old.value = value; else node.attrs.push({ name: key, value });
};
const head = nodes.find(node => node.tagName === 'head');
const main = nodes.find(node => node.tagName === 'main');
const scripts = nodes.filter(node => node.tagName === 'script' && node.parentNode?.tagName === 'body' && !attr(node, 'type')).map(serialize).filter(code => !code.includes('window.XH_INDEX='));
if (!head || !main || scripts.length !== 2) throw new Error('Unexpected Google Cloud page structure.');
const faqs = nodes.filter(node => (attr(node, 'class') ?? '').split(/\s+/).includes('fq')).map(node => [
  text(node.childNodes.find(child => child.tagName === 'button')),
  text(node.childNodes.find(child => (attr(child, 'class') ?? '').split(/\s+/).includes('fa'))),
]);
if (faqs.length < 10) throw new Error('The Google Cloud page must have at least 10 original FAQs.');
const slug = 'vendor-partners/google-cloud';
const links = { 'gcp-services': slug, 'google-cloud': slug, 'managed-google-cloud': slug, 'google-workspace-services': 'google-workspace' };
const href = value => value.replace(/^([\w-]+)\.html/, (_, name) => '/' + (links[name] || name));
main.childNodes = main.childNodes.filter(node => attr(node, 'id') !== 'faq' && !(attr(node, 'class') ?? '').split(/\s+/).includes('gc-cta'));
set(main, 'data-customer-testimonials', 'off');
nodes.filter(node => node.attrs).forEach(node => {
  const classes = (attr(node, 'class') ?? '').split(/\s+/);
  if (classes.includes('rv') && !classes.includes('in')) set(node, 'class', [...classes, 'in'].join(' '));
  const target = attr(node, 'href');
  if (target?.endsWith('.html') || target?.match(/\.html#/)) set(node, 'href', href(target));
  if (['#faq', '#contact'].includes(target)) {
    set(node, 'href', '/contact'); set(node, 'data-open', 'xhCallback'); set(node, 'data-topic', 'Google Cloud');
  }
});
head.childNodes = head.childNodes.filter(node => node.tagName !== 'script');
const bridge = `
(function(){
  const emit=(name,detail)=>document.dispatchEvent(new CustomEvent(name,{detail}));
  const nativeOpen=window.XH.open;
  window.XH.open=(id,options)=>{
    if(!/^xh(?:Callback|Trial|Info|Present|Doc|Cart)/i.test(id))return nativeOpen(id,options);
    emit('xh:site-action',{id,topic:options?.topic});
  };
  window.XH.cart.add=item=>emit('xh:site-cart',item);
  window.XH.cart.open=()=>emit('xh:site-action',{id:'cart'});
  window.connectivityJumpTo=id=>emit('xh:site-scroll',{id});
  window.scrollTo=(options,y)=>emit('xh:site-scroll',{top:typeof options==='number'?(y||0):(options.top||0),behavior:typeof options==='object'?options.behavior:'smooth'});
  document.addEventListener('click',event=>{
    const a=event.target.closest('a[href]');
    if(!a||a.hasAttribute('data-open')||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
    const id=a.getAttribute('href');
    if(id.startsWith('#svc-')){event.preventDefault();event.stopImmediatePropagation();history.replaceState(null,'',id);window.XH.gcDeep();return;}
    if(id.startsWith('#')&&id.length>1&&document.getElementById(id.slice(1))){event.preventDefault();event.stopImmediatePropagation();window.connectivityJumpTo(id.slice(1));}
  },true);
  document.addEventListener('submit',event=>{const f=event.target.closest('form[data-xhform]');if(!f)return;event.preventDefault();event.stopImmediatePropagation();if(f.reportValidity())emit('xh:site-enquiry',Object.fromEntries(new FormData(f)));},true);
})();`;
scripts[1] = scripts[1]
  .replace(/(['"])([\w-]+)\.html(?=['"#])/g, (_, quote, name) => quote + '/' + (links[name] || name))
  .replace(/(\b\w+)\.scrollIntoView\(\{[^}]*\}\)/g, 'window.connectivityJumpTo($1.id)');
for (const code of [...scripts, bridge]) new vm.Script(code);
fs.mkdirSync('src/assets/cloud-platforms', { recursive: true });
fs.writeFileSync('src/assets/cloud-platforms/gcp-services.html', `<!doctype html><html lang="en-IN" data-theme="light"><head>${serialize(head)}<link rel="stylesheet" href="/assets/styles/cloud-connectivity-integration.css"></head><body>${serializeOuter(main)}<script>${scripts[0]}</script><script>${bridge}</script><script>${scripts[1]}</script></body></html>\n`);
const metadata = {
  slug, name: 'Google Cloud', title: text(head.childNodes.find(node => node.tagName === 'title')),
  description: attr(head.childNodes.find(node => attr(node, 'name') === 'description'), 'content'),
  assetUrl: '/assets/cloud-platforms/gcp-services.html', platform: true,
};
fs.writeFileSync('src/app/data/gcp-services.data.ts', '// Imported from the supplied Google Cloud HTML.\nimport { Faq } from \'./models\';\nexport const GCP_SERVICE_PAGE = ' + JSON.stringify(metadata, null, 2) + ' as const;\nexport const GCP_SERVICE_FAQS: Faq[] = ' + JSON.stringify(faqs, null, 2) + ';\n');
console.log(`Imported Google Cloud content with ${faqs.length} original FAQs for the shared default sections.`);
