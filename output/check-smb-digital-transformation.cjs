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
const errors=[];ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text)});
for(const slug of ['smb-digital-transformation']){
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await send('Page.navigate',{url:'http://localhost:4200/'+slug});await new Promise(r=>setTimeout(r,3800));
console.log(slug,await evaluate(`(()=>{window.bd=document.querySelector('iframe[src*=imported-]')?.contentDocument;if(!bd)return {missing:true};return {title:bd.querySelector('h1')?.textContent,faq:bd.querySelectorAll('#faq .fq').length,columns:bd.querySelectorAll('#faq .hosting-faq-column').length,brokenHashes:[...bd.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h!=='#'&&!bd.getElementById(h.slice(1))),forms:bd.querySelectorAll('[data-import-enquiry]').length,tools:Object.keys(bd.defaultView).filter(k=>k.startsWith('__'))};})()`));
console.log('cart',await evaluate(`(()=>{const c=ng.getComponent(document.querySelector('xh-header')).cart;c.clear();bd.querySelector('#oAdd').click();const result={count:c.lines().length,open:c.isOpen(),lines:c.lines().map(l=>({name:l.name,price:l.price,qty:l.qty}))};c.close();c.clear();return result;})()`));
console.log('callback',await evaluate(`(()=>{const b=bd.querySelector('[data-open="xhCallback"]');if(!b)return {available:false};b.click();const r=ng.getComponent(document.querySelector('app-root'));const result={available:true,open:r.overlay.isOpen('callback')};r.overlay.closeAll();return result;})()`));
console.log('tools',await evaluate(`(()=>{const w=bd.defaultView,a=w.__sdAssess.set(Array(12).fill(0)),b=w.__sdAssess.set(Array(12).fill(4));const before=w.__sdRoi();bd.querySelector('#rE').value=100;bd.querySelector('#rE').dispatchEvent(new w.Event('input',{bubbles:true}));const after=w.__sdRoi();bd.querySelector('[data-preset="starter"]').click();return {assessment:[a.lv,b.lv],roiChanged:before.hrs!==after.hrs,starter:!!w.__sdCalc.PRE.starter,hero:typeof w.__sdHero.go};})()`));
console.log('faq/form',await evaluate(`(()=>{const d=bd,w=d.defaultView,q=d.querySelectorAll('#faq .fq')[1];q.querySelector('button').click();const f=d.querySelector('[data-import-enquiry]');let n=0;d.addEventListener('import-training-enquiry',()=>n++);f.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));const invalid=n;for(const[k,v]of Object.entries({name:'Test User',email:'test@example.com',phone:'9999999999',company:'Test Company'}))if(f.elements.namedItem(k))f.elements.namedItem(k).value=v;f.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));const root=ng.getComponent(document.querySelector('app-root'));let result={faqOpen:q.classList.contains('open'),invalidEvents:invalid,validEvents:n,valid:f.checkValidity(),callback:root.overlay.isOpen('callback')};root.overlay.closeAll();return result;})()`));
for(const width of [1440,390,320]){await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});await new Promise(r=>setTimeout(r,400));console.log(width,await evaluate(`(()=>{const d=bd,a=d.querySelector('.lh-ask'),k=a?.querySelector('.k'),c=a?.querySelector('.chips'),h=d.querySelector('h1');return {overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,ask:!!a,askOverlap:k&&k.getBoundingClientRect().right>c.getBoundingClientRect().left,askClipped:a&&a.scrollWidth>a.clientWidth,titleOverflow:h.scrollWidth>h.clientWidth,poweredAfterAI:!d.querySelector('.lh-powered')||!a||d.querySelector('.lh-powered').getBoundingClientRect().top>=a.getBoundingClientRect().bottom,actionsRows:new Set([...d.querySelectorAll('.hero .lh-ctas .btn')].map(n=>Math.round(n.getBoundingClientRect().top))).size};})()`));}
}
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await send('Page.navigate',{url:'http://localhost:4200/smb-digital-transformation'});await new Promise(r=>setTimeout(r,3500));
fs.writeFileSync('output/smb-digital-transformation-desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:false});await new Promise(r=>setTimeout(r,700));
fs.writeFileSync('output/smb-digital-transformation-mobile.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
console.log('runtimeErrors',errors);if(errors.length)process.exitCode=1;
}finally{if(ws)ws.close();if(chrome)chrome.kill();}
})().catch(e=>{console.error(e);process.exitCode=1});
