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







const assert=require('node:assert/strict'),pause=ms=>new Promise(r=>setTimeout(r,ms));
await send('Runtime.enable');let errors=[];
ws.addEventListener('message',event=>{const m=JSON.parse(event.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text);});
const results=[];
for(const width of [1440,980,390]){
await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<700});
errors=[];await send('Page.navigate',{url:'http://127.0.0.1:4200/managed-google-cloud-gcp'});
for(let i=0;i<60;i++){if(await evaluate('!!document.querySelector("iframe")?.contentDocument?.querySelector(".gc-rw")'))break;await pause(250);}
await pause(1500);
const layout=await evaluate('('+(()=>{const f=document.querySelector('iframe'),d=f?.contentDocument;return {ready:!!d?.querySelector('.gc-rw'),services:d?.querySelectorAll('.gc-rw').length,categories:d?.querySelectorAll('#gcCards>article').length,overflow:d?.documentElement.scrollWidth>d?.documentElement.clientWidth,parentOverflow:document.documentElement.scrollWidth>innerWidth,faq:document.querySelectorAll('#defaultFaq .faq2').length,nativeFaq:!!d?.querySelector('#faq'),closing:!!d?.querySelector('.gc-cta'),banner:d?.querySelectorAll('.xh-service-banner-actions button').length,providers:d?.querySelectorAll('.xh-service-banner-ai a').length,defaultSections:document.querySelectorAll('xh-service-default-sections').length,whyBackground:getComputedStyle(document.querySelector('.performance-why')).backgroundImage}}).toString()+')()');
assert(layout.ready,JSON.stringify({layout,errors}));assert.equal(layout.services,285);assert(!layout.overflow&&!layout.parentOverflow);assert.equal(layout.faq,12);assert(!layout.nativeFaq&&!layout.closing);assert.equal(layout.banner,3);assert.equal(layout.providers,5);assert.equal(layout.defaultSections,1);assert.equal(errors.length,0,errors.join('\n'));
await evaluate('(()=>{const d=document.querySelector("iframe").contentDocument,q=d.querySelector("#gcQ");q.value="BigQuery";q.dispatchEvent(new Event("input",{bubbles:true}))})()');await pause(200);
const search=await evaluate('(()=>{const d=document.querySelector("iframe").contentDocument;return {shown:d.defaultView.XH.gcShown,total:d.querySelector("#gcStat").textContent}})()');assert(search.shown>0&&search.shown<285);console.log(width,'layout + search PASS',JSON.stringify(layout));results.push({width,layout,search});
await evaluate('document.querySelector("#introv")?.click();document.querySelector("iframe").contentDocument.defaultView.XH.gcSearch("")');
if(width!==980){await evaluate('window.scrollTo({top:0,behavior:"instant"})');await pause(500);fs.writeFileSync('output/gcp-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
}
const stack=await evaluate('(()=>{const d=document.querySelector("iframe").contentDocument;d.querySelector(".gc-sk").click();return d.querySelector("#gcSbN").textContent})()');assert.equal(stack,'1');
await evaluate('document.querySelector("iframe").contentDocument.querySelector(".gc-aq").click()');await pause(150);
const cart=await evaluate('JSON.parse(localStorage.getItem("xh_cart_v1")||"[]")');assert(cart.length>0);assert(cart.every(line=>!line.pricing));console.log('Stack and quote cart PASS');
for(const alias of ['google-cloud','gcp-services','managed-google-cloud']){await send('Page.navigate',{url:'http://127.0.0.1:4200/'+alias});await pause(1200);assert.equal(await evaluate('location.pathname'),'/managed-google-cloud-gcp');console.log(alias,'redirect PASS');}
fs.writeFileSync('output/gcp-audit.json',JSON.stringify({results,cart,errors},null,2));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
