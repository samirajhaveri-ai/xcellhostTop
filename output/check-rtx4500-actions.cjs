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
const pause=ms=>new Promise(r=>setTimeout(r,ms));
const errors=[];ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails);});await send('Runtime.enable');
await send('Page.navigate',{url:'http://localhost:4200/nvidia-rtx-pro-4500-blackwell'});await pause(4500);
console.log(await evaluate(`(()=>{const d=document.querySelector('iframe[src*=rtx-pro-4500]').contentDocument;const f=d.querySelector('#r4Form');for(const i of f.querySelectorAll('input[required]'))i.value=i.type==='email'?'local-check@example.com':i.type==='tel'?'9876543210':'Local check';f.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));return {formTag:f.tagName,valid:f.checkValidity(),callbackVisible:document.body.innerText.includes('NVIDIA RTX PRO 4500 quotation')};})()`));
await pause(300);console.log(await evaluate(`({callbackOpen:!!document.querySelector('#cbBack'),details:[...document.querySelectorAll('#callback input')].map(i=>i.value).filter(v=>v.includes('4500'))})`));
await evaluate(`window.ng.getComponent(document.querySelector('app-root')).overlay.closeAll();[...document.querySelectorAll('.xh-menu-link')].find(n=>n.textContent.trim().startsWith('Cloud')).click()`);await pause(200);
await evaluate(`[...document.querySelectorAll('.xh-menu-item.open .xh-tab')].find(n=>n.textContent.trim()==='GPU Servers').click()`);await pause(200);
console.log(await evaluate(`(()=>{const a=[...document.querySelectorAll('.xh-menu-item.open a')];const i=a.findIndex(n=>n.textContent.includes('NVIDIA RTX PRO 4500 Blackwell'));return {href:a[i]?.getAttribute('href'),next:a[i+1]?.textContent.trim()}})()`));
console.log('errors',JSON.stringify(errors));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});