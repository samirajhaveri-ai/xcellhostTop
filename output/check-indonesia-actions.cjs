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
const pause=ms=>new Promise(r=>setTimeout(r,ms));await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/indonesia-go-to-market-strategy'});await pause(4500);
console.log(await evaluate(`(()=>{const f=document.querySelector('iframe[src*=indonesia]'),d=f.contentDocument,w=f.contentWindow;const base=d.querySelector('#model').innerText;d.querySelector('#vgScn button[data-v="1.4"]').click();const changed=d.querySelector('#model').innerText!==base;d.querySelector('#vgReset').click();const reset=d.querySelector('#model').innerText===base;const tab=d.querySelectorAll('#verticals button')[1];tab.click();let print=false,csv;w.print=()=>print=true;w.XH.download=(...args)=>csv=args;d.querySelector('[data-print]').click();d.querySelector('#vgCsv').click();return {modelChanges:changed,reset,sectorActive:tab.classList.contains('on'),print,csv:csv?.map(a=>String(a).slice(0,100)),securityBeforeFaq:!!(d.querySelector('#security-compliance').compareDocumentPosition(d.querySelector('#faq'))&4)};})()`));
await evaluate(`document.querySelector('iframe[src*=indonesia]').contentWindow.XH.open('xhCallback',{topic:'Indonesia strategy consultation'})`);await pause(400);console.log(await evaluate(`({callback:document.body.innerText.includes('Indonesia strategy consultation')})`));
await evaluate(`window.ng.getComponent(document.querySelector('app-root')).overlay.closeAll();window.scrollTo({top:0,behavior:'instant'});`);await pause(400);await evaluate(`[...document.querySelectorAll('.xh-menu-link')].find(n=>n.textContent.trim().startsWith('Solutions')).click()`);await pause(300);await evaluate(`[...document.querySelectorAll('.xh-menu-item.open .xh-tab')].find(n=>n.textContent.trim()==='By Country').click()`);await pause(200);console.log(await evaluate(`[...document.querySelectorAll('.xh-menu-item.open a')].filter(n=>n.getAttribute('href')==='/indonesia-go-to-market-strategy').map(n=>({text:n.innerText,href:n.getAttribute('href')}))`));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});