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
const errors=[];ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails);});await send('Runtime.enable');
for(const width of [1440,390,320]){
await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<700});
await send('Page.navigate',{url:'http://localhost:4200/nvidia-rtx-pro-4500-blackwell'});await pause(5000);
console.log(width,await evaluate(`(()=>{const f=document.querySelector('iframe[src*=rtx-pro-4500]');if(!f)return {missing:true};const d=f.contentDocument,w=f.contentWindow,h=d.querySelector('h1'),ask=d.querySelector('.lh-ask');return {heading:h.textContent,headingWidth:[h.scrollWidth,h.clientWidth],overflow:[d.documentElement.scrollWidth,w.innerWidth],ask:[ask.scrollWidth,ask.clientWidth],faq:d.querySelectorAll('#faq .fq').length,faqColumns:w.getComputedStyle(d.querySelector('#faq .faq')).gridTemplateColumns,fit:d.querySelector('#ftGB')?.textContent,buttons:[...d.querySelectorAll('#r4Hero button,#r4Hero a')].slice(0,15).map(b=>b.textContent.trim())}})()`));
if(width===1440){fs.writeFileSync('output/rtx4500-desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));console.log(await evaluate(`(()=>{const f=document.querySelector('iframe[src*=rtx-pro-4500]'),d=f.contentDocument,w=f.contentWindow;const b=d.querySelectorAll('#faq .fq button')[1];b.click();d.querySelector('[data-add="2"]').click();const input=d.querySelector('#ftP');input.value='70';input.dispatchEvent(new Event('input',{bubbles:true}));return {faqOpen:b.getAttribute('aria-expanded'),basket:w.__r4Basket(),fit:d.querySelector('#ftGB').textContent}})()`));}
}console.log('errors',JSON.stringify(errors));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});