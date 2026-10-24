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




    const assert=require('node:assert/strict'),pause=ms=>new Promise(r=>setTimeout(r,ms));
    await send('Network.enable');await send('Network.setBlockedURLs',{urls:['*zohocdn*','*salesiq*','*google-analytics*','*googletagmanager*','*clarity.ms*']});
    const deep=String.raw`function all(r=document){let a=[...r.querySelectorAll('[data-banner-ready]')];r.querySelectorAll('*').forEach(e=>{if(e.shadowRoot)a.push(...all(e.shadowRoot));if(e.tagName==='IFRAME'){try{if(e.contentDocument)a.push(...all(e.contentDocument));}catch{}}});return a;}`;
    const run=code=>evaluate('(function(){'+deep+code+'})()');const result=[];
    for(const route of ['sectigo-ssl-certificates','resilience-operations','performance-cloud','vendor-partners/tsplus','cybersecurity-frameworks/','']){
      await send('Emulation.setDeviceMetricsOverride',{width:1366,height:900,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/'+route});await pause(2500);
      const product=await run('const h=all().find(h=>h.querySelector("[data-banner-action=tour]"));h.querySelector("[data-banner-action=tour]").click();return h.dataset.bannerProduct;');await pause(500);
      const tour=await evaluate('(()=>{const d=document.querySelector(".banner-tour-dialog");const i=d?.querySelector("img");return {open:!!d,loaded:!!i?.complete&&i.naturalWidth>0,focus:!!d?.contains(document.activeElement)}})()');assert(tour.open&&tour.loaded&&tour.focus,route+' screenshot dialog');
      if(!route){const first=await evaluate('document.querySelector(".banner-tour-dialog img").src');await send('Input.dispatchKeyEvent',{type:'keyDown',key:'ArrowRight',code:'ArrowRight',windowsVirtualKeyCode:39});await pause(100);assert.notEqual(await evaluate('document.querySelector(".banner-tour-dialog img").src'),first,'gallery next');}
      await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});await pause(100);assert.equal(await evaluate('!!document.querySelector(".banner-tour-dialog")'),false,'close tour');
      const trial=await run('const b=all().flatMap(h=>[...h.querySelectorAll("[data-banner-action=trial]")])[0];b?.click();return !!b;');await pause(100);if(trial){assert.equal(await evaluate('document.querySelector("#trProduct")?.value'),product,'trial product');await evaluate('document.querySelector("#trX").click()');}
      const callback=await run('const b=all().flatMap(h=>[...h.querySelectorAll("[data-banner-action=callback]")])[0];b?.click();return !!b;');await pause(100);if(callback){assert(await evaluate('!!document.querySelector("#callback")'),'callback');await evaluate('document.querySelector("#cbX").click()');}
      const ai=await run('return all().flatMap(h=>[...h.querySelectorAll("[data-banner-ai] a")]).map(a=>({q:new URL(a.href).searchParams.get("q"),blank:a.target==="_blank",label:!!a.ariaLabel}));');for(const a of ai)assert(a.q?.includes('XcellHost')&&a.blank&&a.label,'AI destination');
      await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await pause(300);const mobile=await run('return {overflow:document.documentElement.scrollWidth>innerWidth,rows:all().map(h=>{const a=h.querySelector(".xh-banner-ai-nowrap");return a&&h.ownerDocument.defaultView.getComputedStyle(a).flexWrap})};');assert(!mobile.overflow,'mobile page overflow');assert(mobile.rows.every(x=>x==='nowrap'),'AI wraps');result.push({route:route||'/',product,tour:true,trial,callback,aiLinks:ai.length,mobile:true});console.log('PASS',route||'/');
    }
    // A SPA transition must preserve handlers on the next imported document.
    await evaluate('ng.getComponent(document.querySelector("app-root")).router.navigateByUrl("/cloud-operations")');await pause(2200);const product=await run('const h=all().find(h=>h.querySelector("[data-banner-action=trial]"));h.querySelector("[data-banner-action=trial]").click();return h.dataset.bannerProduct;');await pause(100);assert.equal(await evaluate('document.querySelector("#trProduct")?.value'),product,'SPA product prefill');await evaluate('document.querySelector("#trX").click()');
    await send('Page.navigate',{url:'http://localhost:4200/tally-on-cloud'});await pause(2500);for(const [id,overlay] of [['xtTour','productScreenshotTour'],['xtTrial','trial'],['xtTalk','callback']]){await evaluate('document.querySelector("iframe[src*=tally-on-cloud-hero]").contentDocument.getElementById('+JSON.stringify(id)+').click()');await pause(150);const open=await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.stack()');assert(open.length>0,'existing Tally '+id);await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.closeAll()');}console.log('PASS existing Tally actions');
    fs.writeFileSync('output/banner-functional-check.json',JSON.stringify({pages:result,spaNavigation:true},null,2));console.log('All functional checks passed');
  }finally{ws?.close();chrome?.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
