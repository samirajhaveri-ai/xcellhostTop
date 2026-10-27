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


    for(const width of [1440,390]) {
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
      for(const slug of ['odoo-hosting','dpdpa-for-smb']) {
        await send('Page.navigate',{url:'http://localhost:4200/'+slug});
        let result;
        for(let n=0;n<100;n++) {
          result=await evaluate(`(()=>{const d=document.querySelector('.supplied-smb-hero-frame')?.contentDocument??document;const img=d.querySelector('img[src*="'+(slug==='odoo-hosting'?'odoo-logo':'dpogenie365-logo')+'"]');if(!img||!img.complete)return null;const r=img.getBoundingClientRect();return {loaded:img.naturalWidth>0,width:r.width,height:r.height,padding:getComputedStyle(img).padding,brands:d.querySelectorAll('.smb-hero-brand,.odoo-hero-brand').length};})()`.replaceAll('slug===',JSON.stringify(slug)+'==='));
          if(result)break;await new Promise(r=>setTimeout(r,100));
        }
        console.log(width,slug,result);
        if(!result?.loaded||result.width!==112||result.height!==25||result.brands!==1)throw Error('Logo validation failed');
      }
    }
  } finally {ws?.close();chrome?.kill();}
})().catch(error=>{console.error(error);process.exitCode=1;});
