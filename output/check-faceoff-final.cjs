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


await send('Page.enable');await send('Runtime.enable');await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
for(const kind of ['privacy','security']){
await send('Page.navigate',{url:'http://localhost:4200/faceoff-'+kind+'-in-a-box'});await new Promise(r=>setTimeout(r,5000));
console.log(kind,await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-faceoff]').contentDocument,w=d.defaultView;const initial=d.querySelector('#cfTot').textContent;d.querySelector('#cfM').value='6';d.querySelector('#cfM').dispatchEvent(new w.Event('input',{bubbles:true}));w.XH.open('xhCallback',{topic:'Demo request'});return {initial};})()`));await new Promise(r=>setTimeout(r,300));
console.log('enquiry and calculator',await evaluate(`(()=>{const app=ng.getComponent(document.querySelector('app-root')),d=document.querySelector('iframe[src*=imported-faceoff]').contentDocument;return {callbackOpen:app.overlay.isOpen('callback'),total:d.querySelector('#cfTot').textContent,visibleDialogs:[...document.querySelectorAll('[role="dialog"]')].filter(n=>n.getBoundingClientRect().height>0).map(n=>n.textContent.slice(0,120))}})()`));await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.closeAll()`);
}
await evaluate(`(()=>{const h=ng.getComponent(document.querySelector('xh-header'));h.toggleTop('Security');h.setTab('Security','4')})()`);await new Promise(r=>setTimeout(r,400));console.log('menu',await evaluate(`[...document.querySelectorAll('xh-header a[href*="faceoff-"]')].filter(n=>n.getBoundingClientRect().width>0).map(n=>({text:n.textContent.trim(),href:n.getAttribute('href')}))`));
fs.writeFileSync('output/faceoff-menu.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
