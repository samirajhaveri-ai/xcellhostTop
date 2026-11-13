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

const assert=require('assert/strict'),pause=ms=>new Promise(r=>setTimeout(r,ms));await send('Emulation.setDeviceMetricsOverride',{width:1536,height:1000,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/'});await pause(3500);await evaluate(`[...document.querySelectorAll('.xh-menu-link')].find(n=>n.textContent.trim().startsWith('Security')).click()`);await pause(400);const names=await evaluate(`[...document.querySelectorAll('.xh-menu-item.open .xh-tab')].map(n=>n.textContent.trim())`);const report=[];
for(const name of names){await evaluate(`[...document.querySelectorAll('.xh-menu-item.open .xh-tab')].find(n=>n.textContent.trim()===${JSON.stringify(name)}).click()`);await pause(250);const cards=await evaluate(`Promise.all([...document.querySelectorAll('.xh-menu-item.open .xh-feature-card')].map(async c=>{const svg=c.querySelector('.xh-security-artwork'),media=svg.parentElement,copy=c.querySelector('.xh-feature-copy'),img=new Image();img.src=svg.querySelector('image').getAttribute('href');await img.decode();const r=svg.getBoundingClientRect(),m=media.getBoundingClientRect(),t=copy.getBoundingClientRect();return {title:c.querySelector('strong').textContent,loaded:img.naturalWidth===1536,inside:r.left>=m.left&&r.right<=m.right+0.5&&r.bottom<=m.bottom+0.5,separate:t.top>=m.bottom-0.5,ratio:Math.abs(r.width/r.height-1456/968)<0.01,svgDisplay:getComputedStyle(svg).display};}))`);for(const c of cards){assert.ok(c.loaded&&c.inside&&c.separate&&c.ratio,name+' '+JSON.stringify(c));assert.equal(c.svgDisplay,'block');}report.push({name,cards});if(name==='EndPoint Security'){const bounds=await evaluate(`document.querySelector('.xh-menu-item.open .xh-feature-card').getBoundingClientRect().toJSON()`);fs.writeFileSync('output/security-frame-fixed.png',Buffer.from((await send('Page.captureScreenshot',{format:'png',clip:{x:bounds.x,y:bounds.y,width:bounds.width,height:bounds.height,scale:2}})).data,'base64'));}}
fs.writeFileSync('output/security-frame-check.json',JSON.stringify(report,null,2));console.log(report.length+' tabs verified: image frames contained, artwork loaded, text separate.');
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});