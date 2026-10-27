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







const assert=require('node:assert/strict'),pause=ms=>new Promise(r=>setTimeout(r,ms));
const slugs=['ai-training-integrated-program','ai-training-live-online','ai-training-educators','ai-training-insurance-professionals','ai-training-medical-doctors','cloud-connectivity','cloud-router','private-connect','ip-transit','virtual-edge','managed-wifi','managed-sd-wan','edge-network','synapsem-ai-training-integrated-program','ai-training-for-medical-doctors','ai-training-for-insurance-professionals','ai-training-for-chartered-accountants'];
const snapshot=selector=>'('+((selector)=>{const panel=document.querySelector(selector);if(!panel)return null;const props=['background','color','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','textTransform','padding','borderRadius','borderTop','borderRight','borderBottom','boxShadow','fill','stroke','strokeWidth','width','height'];const pick=(e,geometry=false)=>{const css=getComputedStyle(e);return Object.fromEntries(props.filter(p=>geometry||!['width','height'].includes(p)).map(p=>[p,css[p]]));};return {panel:pick(panel),columns:getComputedStyle(panel).gridTemplateColumns.split(' ').length,cards:[...panel.querySelectorAll('.pw')].map(c=>({card:pick(c),icon:pick(c.querySelector('.pw-ic'),true),svg:pick(c.querySelector('svg'),true),path:c.querySelector('path').getAttribute('d'),title:pick(c.querySelector('b')),body:pick(c.querySelector('span:last-child')),text:c.innerText}))}}).toString()+')('+JSON.stringify(selector)+')';
const results=[];
for(const width of [1440,980,390]){
await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<700});
await send('Page.navigate',{url:'http://127.0.0.1:4200/performance-cloud'});
for(let i=0;i<60;i++){if(await evaluate('!!document.querySelector("#ppWhy")'))break;await pause(250);}
await pause(1000);await evaluate('document.fonts.ready');
const reference=await evaluate(snapshot('#ppWhy'));assert(reference,'reference missing');
for(const slug of width===980?['ai-training-integrated-program','cloud-router']:slugs){
await send('Page.navigate',{url:'http://127.0.0.1:4200/'+slug});
for(let i=0;i<50;i++){if(await evaluate('!!document.querySelector(".performance-why")'))break;await pause(250);}
await pause(350);await evaluate('document.fonts.ready');
const actual=await evaluate(snapshot('.performance-why'));assert.deepEqual(actual,reference,slug+' '+width);console.log(slug,width,'exact styles PASS');results.push({slug,width,matched:true});
if(slug==='cloud-router'&&width!==980){await evaluate('document.querySelector("#introv")?.click();window.scrollTo({top:document.querySelector(".performance-why").getBoundingClientRect().top+scrollY-120,behavior:"instant"})');await pause(250);fs.writeFileSync('output/why-exact-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
}
}
fs.writeFileSync('output/why-style-audit.json',JSON.stringify(results,null,2));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
