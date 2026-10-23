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
  const info=await run('return {title:d.querySelector("h1").innerText,sections:[...d.querySelectorAll("main>section")].map(e=>e.id),faq:d.querySelectorAll(".fq").length,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,headingOverflow:d.querySelector("h1").scrollWidth>d.querySelector("h1").clientWidth,aiOverflow:d.querySelector(".lh-ask").scrollWidth>d.querySelector(".lh-ask").clientWidth,ctaOverflow:d.querySelector(".lh-ctas").scrollWidth>d.querySelector(".lh-ctas").clientWidth,brokenImages:[...d.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src),inputs:[...d.querySelectorAll("#configure input")].map(e=>({id:e.id,type:e.type,value:e.value})),outputs:[...d.querySelectorAll("[id]")].filter(e=>/Tot$/.test(e.id)).map(e=>({id:e.id,text:e.textContent})),links:[...d.querySelectorAll("a[target=_top]")].map(e=>e.getAttribute("href"))}');
  console.log(slug,JSON.stringify(info));assert.equal(info.overflow,false);assert.equal(info.headingOverflow,false);assert.equal(info.brokenImages.length,0);assert(info.faq>=11);assert(info.sections.indexOf('security')<info.sections.indexOf('faq'));assert.equal(new Set(info.sections).size,info.sections.length);
  await run('d.querySelector(".fq>button").click()');assert.equal(await run('return d.querySelector(".fq>button").getAttribute("aria-expanded")'),'true');await run('d.querySelector(".fq>button").click()');
  await run('d.querySelector("[data-open=xhCallback]").focus();d.querySelector("[data-open=xhCallback]").click()');await pause(150);assert(await evaluate('!!document.querySelector("#callback")'));await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.closeAll()');
  const form=await run('const formEl=d.querySelector("[data-xhform]");for(const [name,value] of Object.entries({name:"Local QA",company:"Test",email:"qa@example.test",phone:"9999999999"}))formEl.elements.namedItem(name).value=value;for(const e of formEl.querySelectorAll("select[required]")){if(!e.value)e.value=[...e.options].find(o=>o.value).value;}let payload;d.addEventListener("import-identity-enquiry",e=>{e.stopImmediatePropagation();payload=e.detail.payload;e.detail.complete({ok:false,skipped:true,ref:"",fallbackUrl:"mailto:test@example.test"});},{capture:true,once:true});formEl.dispatchEvent(new w.Event("submit",{bubbles:true,cancelable:true}));return {payload,status:formEl.querySelector("[role=status]")?.textContent};');assert.equal(form.payload?.name,'Local QA');assert.match(form.status,/not been sent/);
  await evaluate('window.scrollTo({top:0,behavior:"instant"})');await pause(500);fs.writeFileSync('output/'+slug+'-desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
  await run('const t=d.querySelector("#security");window.scrollTo({top:scrollY+f.getBoundingClientRect().top+t.getBoundingClientRect().top-110,behavior:"instant"});');await pause(500);fs.writeFileSync('output/'+slug+'-security.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
  await evaluate('window.scrollTo({top:0,behavior:"instant"})');await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await pause(600);
  const mobile=await run('return {overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,outerOverflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,titleOverflow:d.querySelector("h1").scrollWidth>d.querySelector("h1").clientWidth}');console.log('mobile',mobile);assert.equal(mobile.overflow,false);assert.equal(mobile.outerOverflow,false);assert.equal(mobile.titleOverflow,false);
  fs.writeFileSync('output/'+slug+'-mobile.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));results.push({slug,info,mobile});
 }
 fs.writeFileSync('output/identity-security-check.json',JSON.stringify({results,errors},null,2));console.log('ERRORS',errors);
 }finally{ws?.close();chrome?.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
