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
const results=[];
for(const width of [1440,390]){
await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<700});
for(const slug of ['ai-training-integrated-program','ai-training-live-online','ai-training-educators','ai-training-insurance-professionals','ai-training-medical-doctors']){
await send('Page.navigate',{url:'http://127.0.0.1:4200/'+slug});
for(let attempt=0;attempt<60;attempt++){if(await evaluate('!!document.querySelector("xh-ai-training-page iframe")?.contentDocument?.querySelector("main")'))break;await pause(500);}
await pause(1500);
const result=await evaluate('('+(()=>{const f=document.querySelector('xh-ai-training-page iframe');const d=f?.contentDocument;if(!d?.querySelector('main'))return {missing:true};return {height:f.clientHeight,bodyHeight:d.body.getBoundingClientRect().height,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,testimonials:[...d.querySelectorAll('[data-auto-customer-testimonials]')].map(e=>e.parentElement.outerHTML.slice(0,180)),oversized:[...d.querySelectorAll('article')].filter(e=>e.clientHeight>1000).map(e=>({class:e.className,height:e.clientHeight})),outside:[...d.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>d.documentElement.clientWidth+2||r.left< -2)&&getComputedStyle(e).position!=='absolute'&&getComputedStyle(e).position!=='fixed'}).slice(0,12).map(e=>({tag:e.tagName,class:e.className,text:e.textContent.slice(0,55)})),sections:d.querySelectorAll('main>section').length}}).toString()+')()');
results.push({slug,width,...result});console.log(JSON.stringify(results.at(-1)));
if(slug==='ai-training-integrated-program'){await evaluate('window.scrollTo(0,document.querySelector("iframe").contentDocument.querySelector("#labs").getBoundingClientRect().top+window.scrollY+document.querySelector("iframe").getBoundingClientRect().top-100)');await pause(1000);fs.writeFileSync('output/training-labs-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
}}
fs.writeFileSync('output/training-layout-audit.json',JSON.stringify(results,null,2));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
