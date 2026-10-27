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


    const slugs=['windows-hosting','linux-hosting','migrate-to-xcellhost','website-backup','premium-domains-and-new-tlds','domain-whois-lookup','odoo-hosting','dpdpa-for-smb','instagram-automation','digital-menu-and-catalog-management','wordpress-hosting','register-a-domain-name'];
    for(const width of [1440,390]) {
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
      for(const slug of slugs) {
        await send('Page.navigate',{url:'http://localhost:4200/'+slug});
        let result;
        for(let n=0;n<100;n++) {
          result=await evaluate(`(()=>{const d=document.querySelector('.supplied-smb-hero-frame,xh-domain-whois-content iframe')?.contentDocument??document;const row=d.querySelector('xh-empty-song-bar,.smb-hero-media,.empty-song-media')??[...d.querySelectorAll('xh-hosting-hero-media,xh-domain-hero-media')].find(e=>e.querySelector('audio'));const audio=row?.querySelector('audio');if(!audio)return null;return {empty:!audio.getAttribute('src')&&!audio.querySelector('source'),time:audio.currentTime,powered:row.textContent.includes('Powered by'),imgs:row.querySelectorAll('img').length,label:row.textContent.trim(),overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth};})()`);
          if(result)break;await new Promise(r=>setTimeout(r,100));
        }
        const available=['wordpress-hosting','register-a-domain-name'].includes(slug);
        console.log(width,slug,result);if(!result)console.log(await evaluate(`document.body.innerText.slice(0,2500)`));
        if(!result||result.empty===available||(!available&&(!result.powered||result.imgs||result.time!==0)))throw Error('Song placeholder validation failed');
      }
    }
  } finally {ws?.close();chrome?.kill();}
})().catch(error=>{console.error(error);process.exitCode=1;});
