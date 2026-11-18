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




await send('Page.enable');await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await send('Page.navigate',{url:'http://localhost:4200/naam-ai-caller-id'});await new Promise(r=>setTimeout(r,6500));
console.log('desktop',await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-]').contentDocument;window.nd=d;return {title:d.querySelector('h1')?.textContent,faq:d.querySelectorAll('#faq .fq').length,columns:d.querySelectorAll('#faq .hosting-faq-column').length,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,total:d.querySelector('#cTot')?.textContent,tools:!!d.defaultView.__ciTest,sections:[...d.querySelectorAll('section[id]')].map(n=>n.id)};})()`));
fs.writeFileSync('output/naam-desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
console.log('tools',await evaluate(`(()=>{const d=nd,w=d.defaultView,before=d.querySelector('#cTot').textContent;d.querySelector('#cUsr').value=50;d.querySelector('#cUsr').dispatchEvent(new w.Event('input'));const q=d.querySelectorAll('#faq .fq')[1];q.querySelector('button').click();d.querySelector('#ciDots [data-k="3"]').click();d.querySelector('#ciUct [data-u="fin"]').click();const roiBefore=d.querySelector('#rNet').textContent;d.querySelector('#rS').value=100;d.querySelector('#rS').dispatchEvent(new w.Event('input'));d.querySelector('#kL').value=100;d.querySelector('#kL').dispatchEvent(new w.Event('input'));d.querySelector('#kUse').click();return {before,total:d.querySelector('#cTot').textContent,faqOpen:q.classList.contains('open'),scene:d.querySelector('#ciDots [data-k="3"]').getAttribute('aria-selected'),usecase:d.querySelector('#ciUcp h3').textContent,roiBefore,roiAfter:d.querySelector('#rNet').textContent,plannerUsers:d.querySelector('#cUsr').value};})()`));
console.log('cart',await evaluate(`(()=>{nd.querySelector('#oAdd').click();const c=ng.getComponent(document.querySelector('xh-header')).cart;return {lines:c.lines(),open:c.isOpen()}})()`));
await evaluate(`ng.getComponent(document.querySelector('xh-header')).cart.close()`);
console.log('form',await evaluate(`(()=>{const d=nd,w=d.defaultView,f=d.querySelector('.ci-form');let events=0;d.addEventListener('import-training-enquiry',()=>events++);f.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));const invalidEvents=events;for(const [key,val]of Object.entries({name:'Test User',email:'test@example.com',phone:'9999999999',company:'Test Company',message:'Rollout enquiry check'}))f.elements.namedItem(key).value=val;f.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));return{invalidEvents,validEvents:events,valid:f.checkValidity()};})()`));
await new Promise(r=>setTimeout(r,250));console.log('callback',await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.isOpen('callback')`));await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.closeAll();window.scrollTo(0,0)`);
await evaluate(`(()=>{const h=ng.getComponent(document.querySelector('xh-header'));h.toggleTop('AI');h.setTab('AI','4');})()`);await new Promise(r=>setTimeout(r,200));console.log('menu',await evaluate(`[...document.querySelectorAll('xh-header a[href="/naam-ai-caller-id"]')].map(a=>a.textContent.trim())`));await evaluate(`ng.getComponent(document.querySelector('xh-header')).toggleTop('AI')`);
for(const width of [390,320]){await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});await new Promise(r=>setTimeout(r,700));console.log(width,JSON.stringify(await evaluate(`(()=>{const d=nd;return {outerOverflow:document.documentElement.scrollWidth>innerWidth,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,title:d.querySelector('h1').getBoundingClientRect().toJSON(),actions:[...d.querySelectorAll('.lh-ctas .btn')].map(n=>({text:n.textContent,r:n.getBoundingClientRect().toJSON()})),ask:d.querySelector('.lh-ask').getBoundingClientRect().toJSON(),powered:d.querySelector('.lh-powered').getBoundingClientRect().toJSON(),askLinks:[...d.querySelectorAll('.lh-ask a')].map(n=>n.href)}})()`)));}
fs.writeFileSync('output/naam-mobile.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
