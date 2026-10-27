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
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
      return result.result.value;
    };

await send('Page.enable');const pause=ms=>new Promise(r=>setTimeout(r,ms)),assert=require('node:assert/strict');
const deep=String.raw`function roots(r=document,out=[]){out.push(r);r.querySelectorAll('*').forEach(e=>{if(e.shadowRoot)roots(e.shadowRoot,out);if(e.tagName==='IFRAME'){try{if(e.contentDocument)roots(e.contentDocument,out);}catch{}}});return out;}function hs(){return roots().flatMap(r=>[...r.querySelectorAll('[data-banner-ready]')]);}function get(a){return hs().flatMap(h=>[...h.querySelectorAll('[data-banner-action="'+a+'"],[data-banner-existing-action="'+a+'"]')]).find(e=>e.getBoundingClientRect().width>0);}function pos(e){const r=e.getBoundingClientRect();let x=r.x+r.width/2,y=r.y+r.height/2,w=e.ownerDocument.defaultView;while(w.frameElement){const f=w.frameElement.getBoundingClientRect();x+=f.left;y+=f.top;w=w.parent;}return {x,y};}`;
const run=code=>evaluate('(()=>{'+deep+code+'})()');const results=[];
for(const width of [1366,390])for(const route of ['tally-on-cloud','entra-id-backup','microsoft-defender','nvidia-b300','mobile-app-security','cloud-operations','vendor-partners/tsplus','higher-education-and-university','gpu-servers','partner-program']){
await send('Emulation.setDeviceMetricsOverride',{width,height:950,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/'+route});await pause(1500);for(let wait=0;wait<40;wait++){if(await run('return !!get("trial")&&!!get("tour")&&!!get("callback");'))break;await pause(250);}await evaluate('document.querySelector("#introv")?.click();ng.getComponent(document.querySelector("app-root")).overlay.closeAll()');
for(const a of ['trial','callback','tour']){
await run('const e=get('+JSON.stringify(a)+');if(!e)throw Error("Missing action");e.scrollIntoView({block:"center",inline:"center",behavior:"instant"});');await pause(200);
await run('const e=get('+JSON.stringify(a)+'),p=pos(e);scrollTo({top:scrollY+p.y-350,behavior:"instant"});');await pause(250);
const p=await run('return pos(get('+JSON.stringify(a)+'));');assert(p.x>=0&&p.x<=width&&p.y>=0&&p.y<950,route+' reachable '+a+JSON.stringify(p));
await send('Input.dispatchMouseEvent',{type:'mouseMoved',...p});await send('Input.dispatchMouseEvent',{type:'mousePressed',...p,button:'left',clickCount:1});await send('Input.dispatchMouseEvent',{type:'mouseReleased',...p,button:'left',clickCount:1});await pause(450);
const outcome=await evaluate('({stack:ng.getComponent(document.querySelector("app-root")).overlay.stack(),product:document.querySelector("#trProduct")?.value,heading:document.querySelector("#bannerTourTitle")?.textContent})');assert(outcome.stack.some(s=>a==='tour'?/tour/i.test(s):s===a),route+' '+a+' '+JSON.stringify(outcome));if(a==='trial')assert(outcome.product,route+' prefilled trial');
if(a==='tour'&&await evaluate('!!document.querySelector(".banner-tour-dialog")')){const first=await evaluate('document.querySelector(".banner-tour-dialog img")?.getAttribute("src")');assert(first,route+' tour image');const next=await evaluate('(()=>{const b=document.querySelector(".banner-tour-dialog nav button:last-child");b?.click();return !!b})()');if(next){await pause(200);assert.notEqual(await evaluate('document.querySelector(".banner-tour-dialog img")?.getAttribute("src")'),first,route+' next preview');assert(await evaluate('document.querySelector(".banner-tour-dialog img")?.naturalWidth>0'),route+' loaded preview');}await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await pause(100);assert.equal(await evaluate('!!document.querySelector(".banner-tour-dialog")'),false,route+' close tour');}

await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.closeAll()');results.push({route,width,action:a,passed:true});
}console.log('PASS',width,route);}
// Verify deleted lead sections now open an enquiry, without sending one.
for(const route of ['ai-voice-bot','box-migration']){await send('Page.navigate',{url:'http://localhost:4200/'+route});await pause(2300);await run('ng.getComponent(document.querySelector("app-root")).overlay.closeAll();const e=hs().flatMap(h=>[...h.querySelectorAll("a")]).find(e=>e.getAttribute("href")==="#lead");e.click();');await pause(200);assert((await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.stack()')).includes('callback'));console.log('PASS enquiry bookmark',route);}
fs.writeFileSync('output/hero-action-audit/physical-clicks.json',JSON.stringify(results,null,2));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});