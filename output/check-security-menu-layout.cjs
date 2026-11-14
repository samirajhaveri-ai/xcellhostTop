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
const assert=require('node:assert/strict'),pause=ms=>new Promise(r=>setTimeout(r,ms));await send('Emulation.setDeviceMetricsOverride',{width:1536,height:1000,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/'});await pause(4500);await evaluate(`[...document.querySelectorAll('.xh-menu-link')].find(n=>n.textContent.trim().startsWith('Security')).click()`);await pause(300);
const names=await evaluate(`[...document.querySelectorAll('.xh-menu-item.open .xh-tab')].map(n=>n.textContent.trim())`);const report=[];for(const name of names){await evaluate(`[...document.querySelectorAll('.xh-menu-item.open .xh-tab')].find(n=>n.textContent.trim()===`+JSON.stringify(name)+`).click()`);await pause(250);const cards=await evaluate(`Promise.all([...document.querySelectorAll('.xh-menu-item.open .xh-feature-card')].map(async a=>{const img=a.querySelector('img');if(img&&!img.complete)await new Promise(r=>{img.onload=r;img.onerror=r;});const ir=img.getBoundingClientRect(),mr=img.parentElement.getBoundingClientRect(),cr=a.querySelector('.xh-feature-copy').getBoundingClientRect();return {imageInside:ir.bottom<=mr.bottom+1,textBelow:cr.top>=ir.bottom,ratioCorrect:Math.abs(ir.width/ir.height-img.naturalWidth/img.naturalHeight)<0.01,title:a.querySelector('strong')?.textContent,src:img?.getAttribute('src'),loaded:!!img?.naturalWidth,width:img?.naturalWidth,height:img?.naturalHeight,href:a.getAttribute('href'),fit:img?getComputedStyle(img).objectFit:null};}))`);assert.equal(cards.length,2,name);for(const c of cards){assert.ok(c.loaded,name+' '+c.title);assert.ok(c.imageInside,name+' image bounds');assert.ok(c.textBelow,name+' text overlap');assert.ok(c.ratioCorrect,name+' image aspect ratio');assert.ok(c.src.endsWith('-v2.jpeg'));assert.equal(c.fit,'contain');assert.ok(c.href&&c.href!=='#');}report.push({tab:name,cards});if(['EndPoint Security','Security Hardware'].includes(name))fs.writeFileSync('output/security-menu-'+(name==='EndPoint Security'?'endpoint':'hardware')+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
assert.equal(report.length,14);assert.equal(new Set(report.flatMap(r=>r.cards.map(c=>c.src))).size,26);console.log('All 28 cards: full images, original aspect ratio, text below image, no overlap.');fs.writeFileSync('output/security-menu-image-validation.json',JSON.stringify(report,null,2));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});