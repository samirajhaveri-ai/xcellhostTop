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
for(const [width,height] of [[1440,900],[1366,768],[1280,720]]){await send('Emulation.setDeviceMetricsOverride',{width,height,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/'});await pause(3000);await evaluate(`[...document.querySelectorAll('.xh-menu-link')].find(n=>n.textContent.trim().startsWith('Security')).click()`);await pause(300);console.log(await evaluate(`(()=>{const r=n=>{const b=n.getBoundingClientRect();return {x:b.x,y:b.y,w:b.width,h:b.height,bottom:b.bottom}};return {viewport:[innerWidth,innerHeight],stack:r(document.querySelector('.xh-menu-item.open .xh-feature-stack')),cards:[...document.querySelectorAll('.xh-menu-item.open .xh-feature-card')].map(n=>({card:r(n),image:r(n.querySelector('img')),media:r(n.querySelector('.xh-feature-media')),copy:r(n.querySelector('.xh-feature-copy'))})),footer:[...document.querySelectorAll('.xh-menu-item.open *')].filter(n=>n.className?.includes?.('mega-footer')).map(r)}})()`));if(width===1366)fs.writeFileSync('output/security-review.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});