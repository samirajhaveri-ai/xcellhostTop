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
for(const country of ['russia']){
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
await send('Page.navigate',{url:'http://localhost:4200/'+country+'-go-to-market-strategy'});await new Promise(r=>setTimeout(r,5500));
console.log(country,await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-]').contentDocument;return {title:d.querySelector('h1')?.textContent,faq:d.querySelectorAll('#faq .fq').length,columns:d.querySelectorAll('#faq .hosting-faq-column').length,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,sections:[...d.querySelectorAll('section[id]')].map(n=>n.id),inputs:d.querySelectorAll('#model input').length};})()`));
console.log('actions',await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-]').contentDocument,w=d.defaultView;const initial=d.querySelector('#vgTR').textContent;const inp=d.querySelector('#model input.vg-mi');if(inp){inp.value=String(Number(inp.value)*2);inp.dispatchEvent(new w.Event('input',{bubbles:true}));}const q=d.querySelector('#faq .fq');q.querySelector('button,summary,.fq-q')?.click();w.XH.open('xhCallback',{topic:'Strategy consultation'});return {initial,total:d.querySelector('#vgTR').textContent,faq:q.outerHTML.slice(0,300),heroActions:[...d.querySelectorAll('.lh-ctas a,.lh-ctas button')].map(n=>({text:n.textContent,href:n.getAttribute('href')}))};})()`));
await new Promise(r=>setTimeout(r,300));
console.log('callback',await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.isOpen('callback')`));await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.closeAll()`);
fs.writeFileSync('output/'+country+'-strategy-desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));for(const width of [390,320]){await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:false});await new Promise(r=>setTimeout(r,500));console.log(width,await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-]').contentDocument;return {outerOverflow:document.documentElement.scrollWidth>innerWidth,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,title:d.querySelector('h1')?.getBoundingClientRect().toJSON(),actions:[...d.querySelectorAll('.lh-ctas .btn')].map(n=>n.getBoundingClientRect().toJSON())}})()`));}
}
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
