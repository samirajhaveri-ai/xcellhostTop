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







const assert=require('node:assert/strict'),pause=ms=>new Promise(r=>setTimeout(r,ms));
await send('Emulation.setDeviceMetricsOverride',{width:390,height:1000,deviceScaleFactor:1,mobile:true});
await send('Page.navigate',{url:'http://127.0.0.1:4200/google-cloud'});await pause(3500);
const category=await evaluate('(()=>{const d=document.querySelector("iframe").contentDocument,b=d.querySelector(".gc-pill");b.click();return !b.closest("article").querySelector(".gc-panel").hidden})()');assert(category);await pause(150);assert(!await evaluate('!!document.querySelector("#callback.open")'),'category opened enquiry');
const deep=await evaluate('('+(()=>{const d=document.querySelector('iframe').contentDocument,a=[...d.querySelectorAll('a[href]')].find(a=>a.getAttribute('href').startsWith('#svc-'));a.click();const row=d.querySelector(a.getAttribute('href'));return {open:!row.closest('.gc-panel').hidden,hash:d.location.hash}}).toString()+')()');assert(deep.open);
await pause(600);assert(!await evaluate('!!document.querySelector("#callback.open")'),'deep link opened enquiry');await evaluate('document.querySelector("#introv")?.click();(()=>{const f=document.querySelector("iframe"),el=f.contentDocument.querySelector(".xh-service-banner-actions");window.scrollTo({top:scrollY+f.getBoundingClientRect().top+el.getBoundingClientRect().top-120,behavior:"instant"})})()');await pause(500);
fs.writeFileSync('output/gcp-banner-390.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
const color=await evaluate('getComputedStyle(document.querySelector("iframe").contentDocument.querySelector(".xh-service-banner-actions button")).backgroundColor');assert.equal(color,'rgb(21, 49, 78)');
console.log('Category expansion, deep links and banner contrast PASS');
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
