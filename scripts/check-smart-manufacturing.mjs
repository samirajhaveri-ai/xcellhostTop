import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import {spawn} from 'node:child_process';
const integrated=process.argv.includes('--site');
const root=path.resolve(integrated?'.tmp/smart-manufacturing-check/browser':'public');
const artifacts=path.resolve('.tmp/smart-manufacturing-browser');fs.mkdirSync(artifacts,{recursive:true});
const capture='<script>window.smErrors=[];addEventListener("error",e=>smErrors.push(e.message));</script>';
const test=`<script>
const assert=(ok,label)=>{if(!ok)throw Error(label)};
let tries=0;
const timer=setInterval(()=>{
const frame=${integrated?"document.querySelector('xh-imported-interactive-content iframe')":'null'};
const doc=${integrated?'frame?.contentDocument':'document'};
const app=doc?.defaultView;
if((!doc?.getElementById('qS')?.value||${integrated?'frame.getBoundingClientRect().height<2000':'false'})&&tries++<120)return;
clearInterval(timer);
try {
assert(doc.querySelectorAll('main > section').length===12,'all supplied hero and content sections');
assert(!doc.querySelector('header.hdr,footer,#faq,#contact,#related,.lnl-wrap'),'default sections not duplicated');
assert((app.smErrors||[]).length===0,(app.smErrors||[]).join('; '));
const summary=doc.getElementById('qS').value;doc.getElementById('cfP').value=3;doc.getElementById('cfP').dispatchEvent(new Event('input',{bubbles:true}));assert(doc.getElementById('qS').value!==summary,'programme configuration updates quotation');
doc.getElementById('cfRa').checked=true;doc.getElementById('cfRa').dispatchEvent(new Event('change',{bubbles:true}));
let items=[];doc.addEventListener('import-cart',e=>items.push(e.detail));doc.getElementById('oAdd').click();assert(items.length&&items[0].price>0,'fixed-price items forwarded to native cart');
const before=doc.getElementById('oNote').textContent;doc.getElementById('oD').value=120;doc.getElementById('oD').dispatchEvent(new Event('input',{bubbles:true}));assert(doc.getElementById('oNote').textContent!==before,'OEE calculator recalculates');
const form=doc.querySelector('#quote form');for(const [id,value] of Object.entries({qN:'Browser Check',qC:'Test Plant',qE:'check@example.com',qP:'9999999999',qL:'Mumbai'}))doc.getElementById(id).value=value;
let request;doc.addEventListener('import-training-enquiry',e=>request=e.detail);form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));assert(request?.summary&&request?.name==='Browser Check','quote preserves configuration and contact fields');
${integrated?`
assert(location.pathname==='/smart-manufacturing','new page URL');
assert(document.querySelector('xh-header a[href="/smart-manufacturing"]'),'By Industry menu link');
assert(document.querySelector('xh-header')&&document.querySelector('xh-footer'),'default header and footer');
for(const id of ['defaultSecurity','defaultWhy','defaultReviews','defaultFaqTitle','defaultStart'])assert(document.getElementById(id),'default section '+id);
assert(document.querySelector('.pp-cta-buddha'),'real Laughing Buddha support card');
assert(document.querySelector('.newsletter'),'default newsletter');
assert(doc.querySelectorAll('#i5Hero [data-banner-action]').length===3,'standard hero buttons');
assert(doc.querySelectorAll('.xh-banner-ai-links img').length===5,'standard Ask AI icons');
setTimeout(()=>{document.getElementById('cbX')?.click();document.getElementById('cartX')?.click();window.scrollTo(0,0);},300);
`:''}
document.documentElement.dataset.smCheck='PASS';
}catch(e){document.documentElement.dataset.smCheck='FAIL: '+e.message;}
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
  if ((!integrated && requested === '/imported-smart-manufacturing.html') || (integrated && /index(?:\.csr)?\.html$/.test(file))) content = content.toString().replace('<head>', '<head>' + capture).replace('</body>', test + '</body>');
  res.end(content);
});
await new Promise(resolve => server.listen(4345, '127.0.0.1', resolve));
const html = await new Promise(resolve => {
  const startPath = integrated ? (process.argv.includes('--flat') ? 'smart-manufacturing' : 'smart-manufacturing') : 'imported-smart-manufacturing.html';
  const child = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless','--no-sandbox','--disable-gpu','--no-first-run','--dump-dom','--virtual-time-budget=16000','--window-size=1440,1000',`--screenshot=${path.join(artifacts, integrated ? 'page.png' : 'content.png')}`, 'http://127.0.0.1:4345/' + startPath], {windowsHide:true});
  let output='';child.stdout.on('data',chunk=>output+=chunk);child.stderr.resume();child.on('exit',()=>resolve(output));setTimeout(()=>child.kill(),60000).unref();
});
server.close();
fs.writeFileSync(path.join(artifacts, integrated ? 'page.html' : 'content.html'), html);
const status = html.match(/data-sm-check="([^"]+)"/)?.[1] || 'FAIL: page did not finish loading';
console.log((integrated ? 'Integrated page' : 'Catalogue interactions') + ': ' + status);
if (status !== 'PASS') process.exitCode=1;
