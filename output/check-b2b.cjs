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
await send('Page.navigate',{url:'http://localhost:4200/b2b-data-enrichment'});await new Promise(r=>setTimeout(r,6500));
console.log('page',await evaluate(`(()=>{window.bd=document.querySelector('iframe[src*=imported-]').contentDocument;return {title:bd.querySelector('h1').textContent,faq:bd.querySelectorAll('#faq .fq').length,columns:bd.querySelectorAll('#faq .hosting-faq-column').length,brokenHashes:[...bd.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h!=='#'&&!bd.getElementById(h.slice(1)))};})()`));
console.log('tools',await evaluate(`(()=>{const d=bd,w=d.defaultView,before=d.querySelector('#ceRecV').textContent;d.querySelector('#ceRec').value=2000;d.querySelector('#ceRec').dispatchEvent(new w.Event('input'));const q=d.querySelectorAll('#faq .fq')[1];q.querySelector('button').click();d.querySelector('#deDots [data-k="3"]').click();d.querySelector('#gsQ').value='catch';d.querySelector('#gsQ').dispatchEvent(new w.Event('input'));return {before,after:d.querySelector('#ceRecV').textContent,faqOpen:q.classList.contains('open'),scene:d.querySelector('#deDots [data-k="3"]').getAttribute('aria-selected'),glossary:d.querySelector('#gsN').textContent};})()`));
console.log('cart',await evaluate(`(()=>{bd.querySelector('#oAdd').click();const c=ng.getComponent(document.querySelector('xh-header')).cart;const r={lines:c.lines(),open:c.isOpen()};c.close();return r;})()`));
console.log('form',await evaluate(`(()=>{const d=bd,w=d.defaultView,f=d.querySelector('#deEnqF');let n=0;d.addEventListener('import-training-enquiry',()=>n++);f.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));const invalid=n;for(const[k,v]of Object.entries({name:'Test User',email:'test@example.com',phone:'9999999999',org:'Test Company'}))f.elements.namedItem(k).value=v;f.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));return {invalid,validEvents:n,valid:f.checkValidity(),callback:ng.getComponent(document.querySelector('app-root')).overlay.isOpen('callback')};})()`));
await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.closeAll();window.scrollTo(0,0)`);
for(const width of [1440,390,320]){await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});await new Promise(r=>setTimeout(r,700));console.log(width,await evaluate(`(()=>{const d=bd,a=d.querySelector('.lh-ask'),k=a.querySelector('.k'),c=a.querySelector('.chips'),h=d.querySelector('h1');return {overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,askOverlap:k.getBoundingClientRect().right>c.getBoundingClientRect().left,askClipped:a.scrollWidth>a.clientWidth,titleOverflow:h.scrollWidth>h.clientWidth,actionsRows:new Set([...d.querySelectorAll('.lh-ctas .btn')].map(n=>Math.round(n.getBoundingClientRect().top))).size};})()`));fs.writeFileSync('output/b2b-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
}finally{if(ws)ws.close();if(chrome)chrome.kill();}
})().catch(e=>{console.error(e);process.exitCode=1});
