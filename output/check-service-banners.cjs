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
const slugs=['ai-training-integrated-program','ai-training-live-online','ai-training-educators','ai-training-insurance-professionals','ai-training-medical-doctors','cloud-connectivity','cloud-router','private-connect','ip-transit','virtual-edge','managed-wifi','managed-sd-wan','edge-network','synapsem-ai-training-integrated-program','ai-training-for-medical-doctors','ai-training-for-insurance-professionals','ai-training-for-chartered-accountants'];
const results=[];
for(const width of [1440,390]){
await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<700});
for(const slug of slugs){
await send('Page.navigate',{url:'http://127.0.0.1:4200/'+slug});
for(let i=0;i<60;i++){if(await evaluate('!!document.querySelector("iframe")?.contentDocument?.querySelector(".xh-service-banner-actions")'))break;await pause(250);}
await pause(600);
const result=await evaluate('('+(()=>{const d=document.querySelector('iframe')?.contentDocument;const row=d?.querySelector('.xh-service-banner-actions');if(!row)return {missing:true};const ai=d.querySelector('.xh-service-banner-ai');const controls=[...row.querySelectorAll('button'),...ai.querySelectorAll('a')];return {rows:d.querySelectorAll('.xh-service-banner-actions').length,buttons:[...row.querySelectorAll('button')].map(e=>e.textContent),providers:[...ai.querySelectorAll('a')].map(e=>e.getAttribute('aria-label')),icons:ai.querySelectorAll('img').length,old:d.querySelectorAll('.lh-ctas,.lh-ask').length,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,clipped:controls.some(e=>{const r=e.getBoundingClientRect();return r.left< -1||r.right>d.documentElement.clientWidth+1}),prompt:[...ai.querySelectorAll('a')].every(a=>a.href.includes(encodeURIComponent(d.querySelector('[data-service-banner]').dataset.serviceBanner))),tail:document.querySelectorAll('xh-service-default-sections').length}}).toString()+')()');
assert(!result.missing,slug);assert.equal(result.rows,1);assert.deepEqual(result.buttons,['Screenshot Tour',"7 Day's Free Trial","Let's Talk"]);assert.deepEqual(result.providers,['ChatGPT','Perplexity','Claude','Google AI','Grok']);assert.equal(result.old,0);assert(!result.overflow&&!result.clipped,slug+JSON.stringify(result));assert.equal(result.tail,1);results.push({slug,width,...result});console.log(slug,width,'PASS');
if(slug==='cloud-router'){
await evaluate('(()=>{const f=document.querySelector("iframe"),r=f.contentDocument.querySelector(".xh-service-banner-actions").getBoundingClientRect();window.scrollTo({top:scrollY+f.getBoundingClientRect().top+r.top-120,behavior:"instant"})})()');await pause(500);fs.writeFileSync('output/service-banner-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
}
}
}
await send('Page.navigate',{url:'http://127.0.0.1:4200/cloud-router'});await pause(2000);
for(const [action,selector,close] of [['trial','.trial.open','#trX'],['callback','#callback.open','#cbX'],['tour','xh-banner-tour','.banner-tour-close']]){
await evaluate('document.querySelector("iframe").contentDocument.querySelector('+JSON.stringify('[data-banner-action="'+action+'"]')+').click()');await pause(300);
console.log('Action',action,await evaluate('document.querySelector("xh-service-default-sections") && window.ng.getComponent(document.querySelector("xh-service-default-sections")).overlay.top()'));
const top=await evaluate('window.ng.getComponent(document.querySelector("xh-service-default-sections")).overlay.top()');assert.equal(top,action==='tour'?'bannerScreenshotTour':action);
await evaluate('window.ng.getComponent(document.querySelector("xh-service-default-sections")).overlay.closeAll()');await pause(100);
}
fs.writeFileSync('output/service-banner-audit.json',JSON.stringify(results,null,2));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
