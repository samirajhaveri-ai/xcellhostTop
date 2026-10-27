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
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
      return result.result.value;
    };
    await send('Page.enable');





    const assert=require('node:assert/strict');await send('Network.enable');await send('Network.setBlockedURLs',{urls:['*zohocdn*','*salesiq*','*google-analytics*','*googletagmanager*','*clarity.ms*']});
    for(const width of [1366,390]){
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});await send('Page.navigate',{url:'http://localhost:4200/sarv-workspace'});await new Promise(r=>setTimeout(r,3200));
      const result=await evaluate('(()=>{const f=[...document.querySelectorAll("iframe")].find(f=>f.src.includes("sarv"));const d=f?.contentDocument||document;const row=d.querySelector(".xh-banner-actions-line");const buttons=[...row.querySelectorAll(":scope>a,:scope>button,:scope>.xh-banner-actions>button")];return {labels:buttons.map(b=>b.textContent.trim()),tops:buttons.map(b=>Math.round(b.getBoundingClientRect().top)),overlap:buttons.some((b,i)=>i>0&&b.getBoundingClientRect().left<buttons[i-1].getBoundingClientRect().right-1),width:row.clientWidth,scroll:row.scrollWidth,overflow:document.documentElement.scrollWidth>innerWidth||d.documentElement.scrollWidth>d.defaultView.innerWidth};})()');assert.equal(new Set(result.tops).size,1);assert(!result.overlap);assert(!result.overflow);console.log(width,result);
      await evaluate('document.querySelector("xh-intro-splash")?.remove()');const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('output/banner-row-'+width+'.png',Buffer.from(shot.data,'base64'));
    }
  }finally{ws?.close();chrome?.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
