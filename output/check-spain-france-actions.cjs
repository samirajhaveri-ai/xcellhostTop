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
for(const country of ['spain','france']){await send('Page.navigate',{url:'http://localhost:4200/'+country+'-go-to-market-strategy'});await new Promise(r=>setTimeout(r,4000));console.log(country,await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-]').contentDocument,w=d.defaultView;let printed=false;w.print=()=>printed=true;d.querySelector('.lh-ctas button').click();const q=d.querySelector('#faq .fq button');q.click();const closed=q.getAttribute('aria-expanded');q.click();const opened=q.getAttribute('aria-expanded');d.querySelector('.lh-ctas a[href="#model"]').click();return {printed,closed,opened,faqColumns:w.getComputedStyle(d.querySelector('#faq .faq')).gridTemplateColumns}})()`));await new Promise(r=>setTimeout(r,1500));console.log('model scroll',await evaluate(`({scrollY,modelTop:document.querySelector('iframe[src*=imported-]').getBoundingClientRect().top+document.querySelector('iframe[src*=imported-]').contentDocument.querySelector('#model').getBoundingClientRect().top})`));}
await evaluate(`(()=>{const h=ng.getComponent(document.querySelector('xh-header'));h.toggleTop('Solutions');h.setTab('Solutions','By Country')})()`);await new Promise(r=>setTimeout(r,300));console.log('menu',await evaluate(`[...document.querySelectorAll('xh-header a')].filter(a=>['/spain-go-to-market-strategy','/france-go-to-market-strategy'].includes(a.getAttribute('href'))).map(a=>({text:a.textContent.trim(),href:a.getAttribute('href')}))`));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
