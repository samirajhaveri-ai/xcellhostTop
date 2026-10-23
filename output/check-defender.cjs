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





 const pause=ms=>new Promise(r=>setTimeout(r,ms));const errors=[];ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push({message:m.params.exceptionDetails.exception?.description||m.params.exceptionDetails.text,url:m.params.exceptionDetails.url,stack:m.params.exceptionDetails.stackTrace});});await send('Runtime.enable');await send('Network.enable');await send('Network.setBlockedURLs',{urls:['*zohocdn*','*salesiq*','*google-analytics*','*googletagmanager*','*clarity.ms*']});
 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/microsoft-defender'});await pause(5500);

 const assert=require('node:assert/strict');
 const run=body=>evaluate('(()=>{const f=document.querySelector("xh-imported-interactive-content iframe"),d=f.contentDocument,w=f.contentWindow;'+body+'})()');
 const info=await run('return {sections:[...d.querySelectorAll("main>section")].map(s=>s.id),faq:d.querySelectorAll(".fq").length,links:[...d.querySelectorAll("a[target=_top]")].map(a=>a.getAttribute("href")),imageErrors:[...d.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src),ai:[...d.querySelectorAll("[data-ai]")].map(a=>({href:a.href,target:a.target}))}');assert.equal(info.faq,12);assert.equal(new Set(info.sections).size,info.sections.length);assert(info.sections.indexOf('security')<info.sections.indexOf('faq'));assert.equal(info.imageErrors.length,0);assert(info.ai.every(a=>a.href.startsWith('https://')&&a.target==='_blank'));
 const before=await run('return d.querySelector("#cTot").textContent');await run('d.querySelector("#cUsers").value="37";d.querySelector("#cUsers").dispatchEvent(new w.Event("input",{bubbles:true}));');const after=await run('return d.querySelector("#cTot").textContent');assert.notEqual(before,after);
 await run('d.querySelector("#cLic [data-v=bp]").click();');assert.match(await run('return d.querySelector("#cName").textContent'),/Business Premium/);
 await run('d.querySelector("[data-tabs=tl] [data-tab=sc]").click();');assert(await run('return d.querySelector("[data-panel=sc]").classList.contains("on")'));
 await run('d.querySelector(".fq>button").click();');assert.equal(await run('return d.querySelector(".fq>button").getAttribute("aria-expanded")'),'true');await run('d.querySelector(".fq>button").click();');assert.equal(await run('return d.querySelector(".fq>button").getAttribute("aria-expanded")'),'false');
 await run('d.querySelector(".lh-ctas [data-topic]").click();');await pause(200);assert(await evaluate('!!document.querySelector("#trProduct")'));await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.closeAll()');
 await run('d.querySelector("#cQuote").focus();d.querySelector("#cQuote").click();');await pause(200);assert(await evaluate('!!document.querySelector("#callback")'));await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.closeAll()');
 await run('d.querySelector("#oAdd").click();');await pause(200);const cart=await evaluate('document.querySelector("xh-cart-panel")?.textContent||document.body.innerText');assert.match(cart,/Business Premium/);
 await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.closeAll()');
 await send('Page.navigate',{url:'http://localhost:4200/microsoft-defender'});await pause(2200);
 const desktop=await run('const h=d.querySelector("h1"),a=d.querySelector(".lh-ask");return {overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,titleOverflow:h.scrollWidth>h.clientWidth,aiOverflow:a.scrollWidth>a.clientWidth}');assert.equal(desktop.overflow,false);assert.equal(desktop.titleOverflow,false);assert.equal(desktop.aiOverflow,false);console.log('AI ROW',await run('const a=d.querySelector(".lh-ask");return {width:a.clientWidth,scroll:a.scrollWidth,children:[...a.children].map(e=>({class:e.className,width:e.getBoundingClientRect().width,font:w.getComputedStyle(e).fontSize,padding:w.getComputedStyle(e).padding})),chips:[...a.querySelectorAll("a")].map(e=>({width:e.getBoundingClientRect().width,font:w.getComputedStyle(e).fontSize}))}')); 

 await run('const t=d.querySelector("#security");window.scrollTo({top:scrollY+f.getBoundingClientRect().top+t.getBoundingClientRect().top-110,behavior:"instant"});');await pause(1800);const sectionShot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('output/defender-security.png',Buffer.from(sectionShot.data,'base64'));
 await run('const t=d.querySelector("#customer-feedback");window.scrollTo({top:scrollY+f.getBoundingClientRect().top+t.getBoundingClientRect().top-110,behavior:"instant"});');await pause(1800);const faqShot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('output/defender-faq.png',Buffer.from(faqShot.data,'base64'));
 await evaluate('window.scrollTo(0,0)');
 await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await pause(700);
 const mobile=await run('const h=d.querySelector("h1");return {overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,titleOverflow:h.scrollWidth>h.clientWidth,outerOverflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,faqColumns:w.getComputedStyle(d.querySelector("#faq .faq")).gridTemplateColumns}');assert.equal(mobile.overflow,false);assert.equal(mobile.titleOverflow,false);
 const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('output/defender-mobile.png',Buffer.from(shot.data,'base64'));
 console.log(JSON.stringify({info,pricing:{before,after},desktop,mobile,errors},null,2));
 }finally{ws?.close();chrome?.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
