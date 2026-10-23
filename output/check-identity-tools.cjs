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







 const pause=ms=>new Promise(r=>setTimeout(r,ms)),assert=require('node:assert/strict'),pages=require('../scripts/identity-security-import-config.cjs'),errors=[];
 ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push({message:m.params.exceptionDetails.exception?.description,url:m.params.exceptionDetails.url});});
 await send('Runtime.enable');await send('Network.enable');await send('Network.setBlockedURLs',{urls:['*zohocdn*','*salesiq*','*google-analytics*','*googletagmanager*','*clarity.ms*']});
 const run=body=>evaluate('(()=>{const f=document.querySelector("xh-imported-interactive-content iframe"),d=f.contentDocument,w=f.contentWindow;'+body+'})()');
 const results=[];
 for(const [slug,config] of Object.entries(pages).filter(([slug])=>!process.argv[2]||slug===process.argv[2])){
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/'+slug});await pause(3500);for(let n=0;n<12;n++){if(await evaluate('!!document.querySelector("xh-imported-interactive-content iframe")?.contentDocument?.querySelector("h1")'))break;await pause(500);}

  const calc=await run('const total=d.querySelector("#configure [id$=Tot]")||d.querySelector("#cTot,#oTot,#kTot");const before=total.textContent;const input=d.querySelector("#configure input[type=number]");input.value=Number(input.value)+5;input.dispatchEvent(new w.Event("input",{bubbles:true}));input.dispatchEvent(new w.Event("change",{bubbles:true}));return {input:input.id,before,after:total.textContent};');assert.notEqual(calc.before,calc.after);
  const cart=await run('let items=[];d.addEventListener("import-cart",e=>{e.stopImmediatePropagation();items.push(e.detail);},{capture:true});d.querySelector("#oAdd").click();return items;');assert(cart.length>0);assert(cart.every(i=>i.name&&Number(i.qty)>0&&Number(i.price)>=0));
  const tabs=await run('return [...d.querySelectorAll("[data-tabs]")].map(bar=>{const b=[...bar.querySelectorAll("[data-tab]")].at(-1);if(!b)return true;b.click();return [...d.querySelectorAll("[data-panel]")].some(p=>p.dataset.panel===b.dataset.tab&&p.classList.contains("on"));});');assert(tabs.every(Boolean));
  const row=await run('const a=d.querySelector(".lh-ask");return {width:a.clientWidth,scroll:a.scrollWidth};');console.log("AI diagnostic",row,await run('return [...d.querySelector(".lh-ask").children].map(e=>({class:e.className,width:e.getBoundingClientRect().width,font:w.getComputedStyle(e).fontSize,text:e.textContent}))'));assert(row.scroll<=row.width+1);
  console.log(slug,JSON.stringify({calc,cartLines:cart.length,tabs:tabs.length,ai:row}));
 }
 console.log('ERRORS',errors);
 }finally{ws?.close();chrome?.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
