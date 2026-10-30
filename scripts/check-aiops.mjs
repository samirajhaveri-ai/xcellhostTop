import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {spawn} from 'node:child_process';
const integrated=process.argv.includes('--site');
const root=path.resolve(integrated?'.tmp/aiops-check/browser':'public');
const artifacts=path.resolve('.tmp/aiops-browser');fs.mkdirSync(artifacts,{recursive:true});
const capture='<script>window.aoErrors=[];addEventListener("error",e=>aoErrors.push(e.message));</script>';
const test=`<script>
const assert=(ok,label)=>{if(!ok)throw Error(label)};
let tries=0;
const timer=setInterval(()=>{
const frame=${integrated?"document.querySelector('xh-aiops-content iframe[src=\"/aiops-content.html\"]')":'null'};
const doc=${integrated?'frame?.contentDocument':'document'};
const app=doc?.defaultView;
if((!doc?.querySelector('#qzList li')||${integrated?'frame.getBoundingClientRect().height<2000':'false'})&&tries++<120)return;
clearInterval(timer);
try {
assert(doc.querySelectorAll('main > section').length===11,'all supplied body sections');
assert(!doc.querySelector('header.hdr,footer,#faq,#contact,#related,.lnl-wrap'),'default sections not duplicated');
assert((app.aoErrors||[]).length===0,(app.aoErrors||[]).join('; '));
const total=doc.getElementById('cTot').textContent;doc.querySelector('#cPlan [data-v=ess]').click();assert(doc.getElementById('cTot').textContent!==total,'configurator updates total');
const savings=doc.getElementById('eVal').textContent;doc.getElementById('eA').value=20000;doc.getElementById('eA').dispatchEvent(new Event('input',{bubbles:true}));assert(doc.getElementById('eVal').textContent!==savings,'savings estimator recalculates');
assert(doc.querySelectorAll('#qzList li').length===8,'eight-question quiz');doc.querySelectorAll('#qzList li').forEach(li=>li.querySelector('[data-v="2"]').click());assert(doc.querySelectorAll('#qzList button.on').length===8,'maturity answers recorded');
let items=[];doc.addEventListener('import-add',e=>items.push(e.detail));doc.getElementById('oAdd').click();assert(items.length&&items[0].price>0,'configured items forwarded to cart');
let topic='';doc.addEventListener('import-callback',e=>topic=e.detail);doc.getElementById('oQuote').click();assert(topic,'quotation opens native callback');
${integrated?`
assert(location.pathname==='/aiops','existing AIOps URL');
assert(document.querySelector('xh-header')&&document.querySelector('xh-footer'),'default header and footer');
assert(document.querySelector('#ppFaq'),'default FAQ retained');
assert(document.body.textContent.includes('Security & Compliance'),'default security retained');
assert(document.body.textContent.includes('Watch It In Action'),'default demo section retained');
assert(document.querySelector('.pp-cta-buddha'),'default support card retained');
assert(document.querySelector('.newsletter'),'default newsletter retained');
const heroFrame=document.querySelector('xh-aiops-content iframe[src="/aiops-hero.html"]');
assert(heroFrame.getBoundingClientRect().width>=450,'hero animation uses full right column: '+heroFrame.getBoundingClientRect().width);
const heroColumn=heroFrame.closest('.pph-scene'),copy=document.querySelector('.pp-hero > .wrap');
assert(Math.abs((heroColumn.getBoundingClientRect().top+heroColumn.getBoundingClientRect().height/2)-(copy.getBoundingClientRect().top+copy.getBoundingClientRect().height/2))<5,'hero columns share vertical center');
const hero=heroFrame.contentDocument;assert(hero?.querySelectorAll('#aoDots [data-k]').length===5,'five-scene hero demo');hero.querySelector('#aoDots [data-k="2"]').click();assert(hero.querySelector('#aoDots [data-k="2"]').getAttribute('aria-selected')==='true','hero scene controls work');
`:''}
if(${integrated})setTimeout(()=>{document.getElementById('cbX')?.click();document.getElementById('cartX')?.click();window.scrollTo(0,0);},300);
document.documentElement.dataset.aoCheck='PASS';
}catch(e){document.documentElement.dataset.aoCheck='FAIL: '+e.message;}
},100);
</script>`;
const server = http.createServer((req, res) => {
  const requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let file = path.resolve(root, '.' + requested);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(root, fs.existsSync(path.join(root, 'index.html')) ? 'index.html' : 'index.csr.html');
  if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', ({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2'})[path.extname(file)] || 'application/octet-stream');
  let content = fs.readFileSync(file);
  if ((!integrated && requested === '/aiops-content.html') || (integrated && /index(?:\.csr)?\.html$/.test(file))) content = content.toString().replace('<head>', '<head>' + capture).replace('</body>', test + '</body>');
  res.end(content);
});
await new Promise(resolve => server.listen(4344, '127.0.0.1', resolve));
const html = await new Promise(resolve => {
  const startPath = integrated ? (process.argv.includes('--flat') ? 'aiops' : 'aiops') : 'aiops-content.html';
  const child = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless','--no-sandbox','--disable-gpu','--no-first-run','--dump-dom','--virtual-time-budget=16000','--window-size=1440,1000',`--screenshot=${path.join(artifacts, integrated ? 'page.png' : 'content.png')}`, 'http://127.0.0.1:4344/' + startPath], {windowsHide:true});
  let output='';child.stdout.on('data',chunk=>output+=chunk);child.stderr.resume();child.on('exit',()=>resolve(output));setTimeout(()=>child.kill(),60000).unref();
});
server.close();
fs.writeFileSync(path.join(artifacts, integrated ? 'page.html' : 'content.html'), html);
const status = html.match(/data-ao-check="([^"]+)"/)?.[1] || 'FAIL: page did not finish loading';
console.log((integrated ? 'Integrated page' : 'Catalogue interactions') + ': ' + status);
if (status !== 'PASS') process.exitCode=1;
