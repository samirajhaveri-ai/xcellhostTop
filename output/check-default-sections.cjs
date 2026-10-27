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
await send('Page.navigate',{url:'http://127.0.0.1:4200/performance-cloud'});await pause(6000);
console.log('Reference:',await evaluate('JSON.stringify({security:document.querySelector("#ppSecWrap")?.innerText,why:document.querySelector("#ppWhy")?.innerText})'));
const slugs=['ai-training-integrated-program','ai-training-live-online','ai-training-educators','ai-training-insurance-professionals','ai-training-medical-doctors','cloud-connectivity','cloud-router','private-connect','ip-transit','virtual-edge','managed-wifi','managed-sd-wan','edge-network','synapsem-ai-training-integrated-program','ai-training-for-medical-doctors','ai-training-for-insurance-professionals','ai-training-for-chartered-accountants'];
const results=[];
for(const width of [1440,390]){
await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<700});
for(const slug of slugs){
 await send('Page.navigate',{url:'http://127.0.0.1:4200/'+slug});
 for(let i=0;i<50;i++){if(await evaluate('!!document.querySelector("xh-service-default-sections #defaultStart")'))break;await pause(300);}
 await pause(2500);
 const result=await evaluate('('+(()=>{const tail=document.querySelector('xh-service-default-sections');if(!tail)return {missing:true};const ids=['defaultSecurity','defaultWhy','defaultReviews','defaultFaq','defaultInsights','defaultStart'];const positions=ids.map(id=>tail.querySelector('#'+id)?.getBoundingClientRect().top);const button=tail.querySelector('.faq2-q'),before=button?.getAttribute('aria-expanded');button?.click();const works=before!==button?.getAttribute('aria-expanded');button?.click();const frame=document.querySelector('iframe');return {count:document.querySelectorAll('xh-service-default-sections').length,sections:ids.every(id=>!!tail.querySelector('#'+id)),order:positions.every((v,i)=>i===0||v>positions[i-1]),afterContent:tail.getBoundingClientRect().top>=frame.getBoundingClientRect().bottom-2,overflow:document.documentElement.scrollWidth>innerWidth,faqs:tail.querySelectorAll('.faq2').length,faqWorks:works,reviews:tail.querySelectorAll('.prv').length,why:tail.querySelectorAll('.pw').length,oldFaq:!!frame.contentDocument?.querySelector('#faq'),name:tail.querySelector('#defaultStartTitle')?.textContent}}).toString()+')()');
 result.faqWorks=await evaluate('new Promise(resolve=>{const b=document.querySelector("xh-service-default-sections .faq2-q"),before=b.getAttribute("aria-expanded");b.click();setTimeout(()=>resolve(b.getAttribute("aria-expanded")!==before),150)})');
 assert(!result.missing,slug);assert.equal(result.count,1);assert(result.sections&&result.order&&result.afterContent,slug+JSON.stringify(result));assert(!result.overflow,slug+' overflow');assert(result.faqWorks,slug+JSON.stringify(result));assert(result.faqs>=8,slug+' FAQs');assert.equal(result.reviews,3);assert(!result.oldFaq,slug+' duplicate FAQ');results.push({slug,width,...result});console.log(slug,width,'PASS');
 if(slug==='cloud-router'){await evaluate('document.querySelector("#defaultSecurity").scrollIntoView()');await pause(900);fs.writeFileSync('output/default-sections-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
}
}
fs.writeFileSync('output/default-sections-audit.json',JSON.stringify(results,null,2));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
