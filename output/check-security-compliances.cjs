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
await send('Page.navigate',{url:'http://localhost:4200/cybersecurity-frameworks'});await new Promise(r=>setTimeout(r,3500));
console.log(await evaluate(`(()=>{const d=document.querySelector('iframe').contentDocument;const b=d.querySelector('#exF [data-c="compliance"]');b.click();const visible=()=>[...d.querySelectorAll('#ex article')].filter(n=>!n.hidden).map(n=>({title:n.querySelector('h3').textContent,url:n.querySelector('a')?.getAttribute('href')}));const cards=visible();d.querySelector('#exQ').value='nesa';d.querySelector('#exQ').dispatchEvent(new d.defaultView.Event('input'));const search=visible();d.querySelector('#exQ').value='';d.querySelector('#exQ').dispatchEvent(new d.defaultView.Event('input'));d.querySelector('#exF [data-c="all"]').click();return {cards,search,all:visible().length,categories:d.querySelectorAll('#exF button').length,domains:d.querySelectorAll('.dom button').length};})()`));
for(const slug of ['sama-compliance','nesa-compliance']){await send('Page.navigate',{url:'http://localhost:4200/'+slug});await new Promise(r=>setTimeout(r,2500));console.log(slug,await evaluate(`({title:document.title,heading:document.querySelector('iframe')?.contentDocument?.querySelector('h1')?.textContent})`));}
}finally{if(ws)ws.close();if(chrome)chrome.kill();}
})().catch(e=>{console.error(e);process.exitCode=1});