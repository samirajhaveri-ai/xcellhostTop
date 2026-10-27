const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');
(async () => {

  let chrome, ws;
  try {
    chrome = spawn(process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', [
      '--headless=new', '--remote-debugging-port=0', '--no-first-run', '--no-default-browser-check',
      '--user-data-dir=' + fs.mkdtempSync(path.join(os.tmpdir(), 'xh-service-tours-')), 'about:blank',
    ], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
    const endpoint = await new Promise((resolve, reject) => {
      let output = '';
      chrome.stderr.on('data', (data) => {
        output += data;
        const match = output.match(/DevTools listening on (ws:\/\/[^\s]+)/);
        if (match) resolve(match[1]);
      });
      chrome.on('error', reject);
      setTimeout(() => reject(new Error('Chrome launch timed out')), 15000).unref();
    });
    const targets = await (await fetch(endpoint.replace(/^ws:/, 'http:').replace(/\/devtools\/browser\/.*/, '/json/list'))).json();
    ws = new WebSocket(targets.find((target) => target.type === 'page').webSocketDebuggerUrl);
    await new Promise((resolve) => ws.addEventListener('open', resolve));
    let id = 0;
    const pending = new Map();
    ws.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (!message.id) return;
      const handler = pending.get(message.id);
      pending.delete(message.id);
      message.error ? handler.reject(message.error) : handler.resolve(message.result);
    });
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const next = ++id;
      pending.set(next, { resolve, reject });
      ws.send(JSON.stringify({ id: next, method, params }));
    });
    const evaluate = async (expression) => {
      const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
      if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
      return result.result.value;
    };
    await send('Page.enable');







const assert = require('node:assert/strict');
const pause=ms=>new Promise(r=>setTimeout(r,ms));
const slugs=['cloud-connectivity','cloud-router','private-connect','ip-transit','virtual-edge','managed-wifi','managed-sd-wan','edge-network'];
const results=[];let errors=[];
await send('Runtime.enable');
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text);});
for(const width of [1440,390]){
 await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<700});
 for(const slug of slugs){
  errors=[];await send('Page.navigate',{url:'http://127.0.0.1:4200/'+slug});
  for(let i=0;i<60;i++){if(await evaluate('!!document.querySelector("xh-cloud-connectivity-page iframe")?.contentDocument?.querySelector("main")'))break;await pause(500);}
  await pause(1600);
  const result=await evaluate('('+(()=>{
   const f=document.querySelector('xh-cloud-connectivity-page iframe'),d=f?.contentDocument;
   if(!d?.querySelector('main'))return {missing:true};
   const faq=d.querySelector('#faq .fq>button');let faqWorks=false;
   if(faq){const before=faq.getAttribute('aria-expanded');faq.click();faqWorks=faq.getAttribute('aria-expanded')!==before;faq.click();}
   return {height:f.clientHeight,bodyHeight:d.body.getBoundingClientRect().height,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,sections:d.querySelectorAll('main>section').length,faqWorks,faqs:d.querySelectorAll('#faq .fq').length,duplicateHeader:!!d.querySelector('header#xhHeader,footer'),reviews:d.querySelectorAll('[data-auto-customer-testimonials]').length,unresolvedLinks:[...d.querySelectorAll('a[href]')].filter(a=>/^[\w-]+\.html/.test(a.getAttribute('href'))).length,title:document.title,heroClipping:[...d.querySelectorAll('.hero .lh-ctas a,.hero .lh-ctas button,.hero .lh-ask a')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>d.documentElement.clientWidth+2||r.left< -2)}).map(e=>e.textContent.trim())};
  }).toString()+')()');
  console.log(JSON.stringify({slug,width,...result,errors}));results.push({slug,width,...result,errors});
  assert(!result.missing,slug);assert(!result.overflow,slug+' overflow');assert(result.sections>=12,slug+' missing sections');assert(result.faqWorks,slug+' FAQ');assert.equal(result.reviews,0);assert.equal(result.unresolvedLinks,0);assert.equal(errors.length,0,errors.join('\n'));assert.equal(result.heroClipping.length,0,slug+' clipped hero');
  if(slug==='cloud-router'){await pause(500);fs.writeFileSync('output/cloud-router-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
 }
}
// Verify real shared enquiry/cart flows using only this isolated browser profile.
await send('Page.navigate',{url:'http://127.0.0.1:4200/cloud-router'});await pause(2500);
const interactions=await evaluate('('+(()=>{const d=document.querySelector('xh-cloud-connectivity-page iframe').contentDocument;d.querySelector('[data-open="xhCallback"]').click();const callback=!!document.querySelector('xh-callback-modal');d.querySelector('#oAdd').click();return {callback,cartItems:JSON.parse(localStorage.getItem('xh_cart_v1')||'[]'),cart:!!document.querySelector('xh-cart')}}).toString()+')()');
assert(interactions.cartItems.length>0,'cart did not receive items');console.log('Interactions:',JSON.stringify(interactions));
fs.writeFileSync('output/cloud-connectivity-audit.json',JSON.stringify({results,interactions},null,2));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
