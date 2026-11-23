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
for(const slug of ['sama-compliance','nesa-compliance']){
await send('Page.navigate',{url:'http://localhost:4200/cybersecurity-frameworks'});await new Promise(r=>setTimeout(r,2500));
await evaluate(`(()=>{const f=document.querySelector('iframe'),d=f.contentDocument;d.querySelector('#exF [data-c="compliance"]').click();const a=d.querySelector('a[href="/`+slug+`"]').closest('article');window.scrollTo({top:scrollY+f.getBoundingClientRect().top+a.getBoundingClientRect().top-250,behavior:'instant'});})()`);
await new Promise(r=>setTimeout(r,500));
const pt=await evaluate(`(()=>{const f=document.querySelector('iframe'),r=f.contentDocument.querySelector('a[href="/`+slug+`"]').closest('article').getBoundingClientRect();return {x:f.getBoundingClientRect().left+r.right-30,y:f.getBoundingClientRect().top+r.bottom-25};})()`);
await send('Input.dispatchMouseEvent',{type:'mousePressed',...pt,button:'left',clickCount:1});await send('Input.dispatchMouseEvent',{type:'mouseReleased',...pt,button:'left',clickCount:1});await new Promise(r=>setTimeout(r,2000));
console.log(slug,await evaluate('({path:location.pathname,title:document.title})'));
}
}finally{if(ws)ws.close();if(chrome)chrome.kill();}
})().catch(e=>{console.error(e);process.exitCode=1});