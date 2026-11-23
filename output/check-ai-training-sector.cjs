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








await send('Page.enable'); await send('Runtime.enable');
for(const width of [1440,390]) {
await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
for(const slug of ['ai-training-bankers','ai-training-government-psu']){
await send('Page.navigate',{url:'http://localhost:4200/'+slug});await new Promise(r=>setTimeout(r,4500));
console.log(slug,width,await evaluate(`(()=>{const f=document.querySelector('iframe');if(!f)return {error:'No iframe',body:document.body.innerText.slice(0,400)};const d=f.contentDocument; const h=d.querySelector('h1'); const q=d.querySelectorAll('#faq button')[1]; const before=q?.getAttribute('aria-expanded');q?.click();return {title:document.title,frame:f.getBoundingClientRect().toJSON(),width:d.documentElement.clientWidth,scrollWidth:d.documentElement.scrollWidth,hero:h?.getBoundingClientRect().toJSON(),faq:d.querySelectorAll('#faq .fq').length,before,expanded:q?.getAttribute('aria-expanded'),ai:[...d.querySelectorAll('.xh-service-banner-ai-links a')].map(a=>new URL(a.href).hostname),forms:d.querySelectorAll('[data-import-enquiry]').length,buttons:[...d.querySelectorAll('#configure button')].map(b=>({id:b.id,text:b.textContent.trim()}))};})()`));
const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('output/'+slug+'-'+width+'.png',Buffer.from(shot.data,'base64'));
console.log('Interactions',await evaluate(`(()=>{const d=document.querySelector('iframe').contentDocument;let cart,enquiry;d.addEventListener('import-cart',e=>cart=e.detail,{once:true});d.addEventListener('import-callback',e=>enquiry=e.detail,{once:true});d.querySelector('#oAdd').click();d.querySelector('#cfQuote').click();return {cart,enquiry,brokenAnchors:[...d.querySelectorAll('a[href^="#"]')].map(a=>a.getAttribute('href')).filter(h=>h.length>1&&h!=='#contact'&&!d.getElementById(h.slice(1)))};})()`));
if(width===1440){const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('output/'+slug+'-desktop.png',Buffer.from(shot.data,'base64'));}
}
}
}finally{if(ws)ws.close();if(chrome)chrome.kill();}
})().catch(e=>{console.error(e);process.exitCode=1});