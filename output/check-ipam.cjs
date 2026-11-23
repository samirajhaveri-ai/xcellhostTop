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
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await send('Page.navigate',{url:'http://localhost:4200/ip-address-mgmt-ipam'});await new Promise(r=>setTimeout(r,5000));
console.log('content',await evaluate(`(()=>{window.bd=document.querySelector('iframe[src*=imported-]')?.contentDocument;if(!bd)return {missing:true};return {title:bd.querySelector('h1')?.textContent,faq:bd.querySelectorAll('#faq .fq').length,columns:bd.querySelectorAll('#faq .hosting-faq-column').length,brokenHashes:[...bd.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h!=='#'&&!bd.getElementById(h.slice(1)))};})()`));
console.log('IPAM tools',await evaluate(`(()=>{const d=bd,w=d.defaultView;const overlap=w.__iaOverlap('A, 10.0.0.0/24\\nB, 10.0.0.128/25');const separate=w.__iaOverlap('A, 10.0.0.0/24\\nB, 10.0.1.0/24');d.querySelector('#ovTx').value='invalid';d.querySelector('#ovGo').click();const invalid=d.querySelector('#ovErr').textContent;d.querySelector('#plEx').click();const plannerRows=d.querySelectorAll('#planner tbody tr').length;const before=d.querySelector('#cfTot').textContent;d.querySelector('#cfIps').value=50000;d.querySelector('#cfIps').dispatchEvent(new w.Event('input',{bubbles:true}));const priceChanged=before!==d.querySelector('#cfTot').textContent;const cart=ng.getComponent(document.querySelector('xh-header')).cart;cart.clear();d.querySelector('[data-add]').click();const count=cart.lines().length;cart.close();cart.clear();const q=d.querySelectorAll('#faq .fq')[1];q.querySelector('button').click();w.XH.open('xhCallback',{topic:'IPAM enquiry'});const root=ng.getComponent(document.querySelector('app-root'));const callback=root.overlay.isOpen('callback');root.overlay.closeAll();return {overlap,separate,invalid,plannerRows,priceChanged,cart:count,faq:q.classList.contains('open'),callback};})()`));
for(const width of [1440,390,320]){await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});await new Promise(r=>setTimeout(r,500));console.log(width,await evaluate(`(()=>{const d=bd,a=d.querySelector('.lh-ask'),k=a?.querySelector('.k'),c=a?.querySelector('.chips'),h=d.querySelector('h1');return {overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,askOverlap:k&&k.getBoundingClientRect().right>c.getBoundingClientRect().left,askClipped:a&&a.scrollWidth>a.clientWidth,poweredOverflow:d.querySelector('.lh-powered').scrollWidth>d.querySelector('.lh-powered').clientWidth,titleOverflow:h.scrollWidth>h.clientWidth,actionsRows:new Set([...d.querySelectorAll('.hero .lh-ctas .btn')].map(n=>Math.round(n.getBoundingClientRect().top))).size};})()`));}
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/ip-address-mgmt-ipam'});await new Promise(r=>setTimeout(r,3500));fs.writeFileSync('output/ipam-desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
console.log('runtimeErrors',errors);if(errors.length)process.exitCode=1;

}finally{if(ws)ws.close();if(chrome)chrome.kill();}
})().catch(e=>{console.error(e);process.exitCode=1});
