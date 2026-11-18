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
await send('Page.navigate',{url:'http://localhost:4200/website-design-packages'});await new Promise(r=>setTimeout(r,6500));
console.log('desktop',await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-]').contentDocument;window.wd=d;return {title:d.querySelector('h1')?.textContent,faq:d.querySelectorAll('#faq .fq').length,columns:d.querySelectorAll('#faq .hosting-faq-column').length,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,total:d.querySelector('#cfTot')?.textContent,sections:[...d.querySelectorAll('section[id]')].map(n=>n.id)};})()`));
fs.writeFileSync('output/website-design-desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
console.log('tools',await evaluate(`(()=>{const d=wd,w=d.defaultView;const initial=d.querySelector('#cfTot').textContent;const pg=d.querySelector('#cfPg');pg.value=15;pg.dispatchEvent(new w.Event('input',{bubbles:true}));const q=d.querySelectorAll('#faq .fq')[1];q.querySelector('button').click();d.querySelector('#wdTabs [data-k="3"]').click();for(let i=0;i<5;i++)d.querySelector('#qzBody [data-i="0"]')?.click();return{initial,total:d.querySelector('#cfTot').textContent,faqOpen:q.classList.contains('open'),scene:d.querySelector('#wdTabs [data-k="3"]').getAttribute('aria-selected'),quiz:d.querySelector('#qzBody').textContent.slice(0,450),timeline:d.querySelector('#tlUse')?.outerHTML,form:d.querySelector('#wdForm').outerHTML.slice(-700)};})()`));
await new Promise(r=>setTimeout(r,100));console.log('cart',await evaluate(`(()=>{wd.querySelector('[data-add="starter"]').click();return {lines:ng.getComponent(document.querySelector('xh-header')).cart.lines(),open:ng.getComponent(document.querySelector('xh-header')).cart.isOpen()}})()`));
await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.closeAll()`);

console.log('timeline',await evaluate(`(()=>{const d=wd,w=d.defaultView;const before=d.querySelector('#tlTot').textContent;d.querySelector('#tlCt [data-v="write"]').click();return {before,after:d.querySelector('#tlTot').textContent}})()`));
console.log('form',await evaluate(`(()=>{const d=wd,w=d.defaultView,f=d.querySelector('#wdForm');let events=0;d.addEventListener('import-training-enquiry',()=>events++);f.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));const invalidEvents=events;for(const [key,val]of Object.entries({name:'Test User',email:'test@example.com',phone:'9999999999',org:'Test Company',brief:'Website enquiry check'}))f.elements.namedItem(key).value=val;f.elements.namedItem('consent').checked=true;f.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));return{invalidEvents,validEvents:events,valid:f.checkValidity(),fakeSuccess:!!d.querySelector('.wd-done')};})()`));
await new Promise(r=>setTimeout(r,400));console.log('callback',await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.isOpen('callback')`));await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.closeAll();ng.getComponent(document.querySelector('xh-header')).cart.close();window.scrollTo(0,0)`);
console.log('menu',await evaluate(`(()=>{const h=ng.getComponent(document.querySelector('xh-header'));h.toggleTop('Web Presence');h.setTab('Web Presence','5');return true})()`));await new Promise(r=>setTimeout(r,200));console.log('menu link',await evaluate(`[...document.querySelectorAll('xh-header a[href="/website-design-packages"]')].map(a=>a.textContent.trim())`));await evaluate(`ng.getComponent(document.querySelector('xh-header')).toggleTop('Web Presence')`);
for(const width of [390,320]){await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});await new Promise(r=>setTimeout(r,600));console.log(width,JSON.stringify(await evaluate(`(()=>{const d=wd;return {outerOverflow:document.documentElement.scrollWidth>innerWidth,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,actions:[...d.querySelectorAll('.lh-ctas .btn')].map(n=>({text:n.textContent,r:n.getBoundingClientRect().toJSON()})),ask:d.querySelector('.lh-ask').getBoundingClientRect().toJSON(),powered:d.querySelector('.lh-powered').getBoundingClientRect().toJSON()}})()`)));}
fs.writeFileSync('output/website-design-mobile.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});

