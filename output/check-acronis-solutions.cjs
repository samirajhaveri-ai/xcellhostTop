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






 const pause=ms=>new Promise(r=>setTimeout(r,ms)),assert=require('node:assert/strict'),errors=[];
 ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push({message:m.params.exceptionDetails.exception?.description,url:m.params.exceptionDetails.url});});
 await send('Runtime.enable');await send('Network.enable');await send('Network.setBlockedURLs',{urls:['*zohocdn*','*salesiq*','*google-analytics*','*googletagmanager*','*clarity.ms*']});
 const run=body=>evaluate('(()=>{const f=document.querySelector("xh-imported-interactive-content iframe"),d=f.contentDocument,w=f.contentWindow;'+body+'})()');
 const slugs=['acronis-cyber-intelligence','acronis-cyber-frame','acronis-workflow-automation'];
 for(const slug of slugs.filter(s=>!process.argv[2]||s===process.argv[2])){
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate',{url:'http://localhost:4200/'+slug});await pause(4500);
  const info=await run('return {title:d.querySelector("h1").innerText,sections:[...d.querySelectorAll("main>section")].map(e=>e.id),faq:d.querySelectorAll(".fq").length,overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,headingOverflow:d.querySelector("h1").scrollWidth>d.querySelector("h1").clientWidth,aiOverflow:d.querySelector(".lh-ask").scrollWidth>d.querySelector(".lh-ask").clientWidth,brokenImages:[...d.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src),tabs:[...d.querySelectorAll("[data-tabs]")].map(e=>e.dataset.tabs),inputs:[...d.querySelectorAll("input[id]")].map(e=>({id:e.id,type:e.type})),buttons:[...d.querySelectorAll("button[id]")].map(e=>e.id)}');
  console.log(slug,JSON.stringify(info));assert.equal(info.overflow,false);assert.equal(info.headingOverflow,false);assert.equal(info.brokenImages.length,0);assert(info.faq>=8);assert(info.sections.indexOf('security')<info.sections.indexOf('faq'));assert.equal(new Set(info.sections).size,info.sections.length);
  const cta=await run('const e=d.querySelector(".lh-ctas");return {width:e.clientWidth,scroll:e.scrollWidth}');console.log('CTA',cta);assert(cta.scroll<=cta.width+1);
  if(slug==='acronis-cyber-intelligence'){
    const before=await run('return d.querySelector("#qTot").textContent');await run('const e=d.querySelector("#qW");e.value=Number(e.value)+15;e.dispatchEvent(new w.Event("input",{bubbles:true}));');assert.notEqual(await run('return d.querySelector("#qTot").textContent'),before);
  }else if(slug==='acronis-cyber-frame'){
    await run('const e=d.querySelector("#zVm");e.value=100;e.dispatchEvent(new w.Event("input",{bubbles:true}));d.querySelector("#zUse").click();');assert.equal(await run('return d.querySelector("#qVm").value'),'100');
  }else{
    const before=await run('return d.querySelector("#sRs").textContent');await run('const e=d.querySelector("#sT");e.value=20;e.dispatchEvent(new w.Event("input",{bubbles:true}));');assert.notEqual(await run('return d.querySelector("#sRs").textContent'),before);
    const form=await run('const formEl=d.querySelector("[data-xhform=wa-quote]");for(const [name,value] of Object.entries({name:"Local QA",company:"Test",email:"qa@example.test",phone:"9999999999"}))formEl.elements.namedItem(name).value=value;let payload;d.addEventListener("import-enquiry",e=>{e.stopImmediatePropagation();payload=e.detail.payload;e.detail.complete({ok:false,skipped:true,ref:"",fallbackUrl:"mailto:test@example.test"});},{capture:true,once:true});formEl.dispatchEvent(new w.Event("submit",{bubbles:true,cancelable:true}));return {payload,status:formEl.querySelector("[role=status]").textContent,link:formEl.querySelector("[role=status] a").href};');assert.equal(form.payload.name,'Local QA');assert(form.payload.summary.includes('Acronis Workflow Automation'));assert.match(form.status,/not been sent/);assert.match(form.link,/^mailto:/);
  }
  await run('const b=d.querySelector("[data-tabs] [data-tab]:last-child");if(b)b.click();');assert(await run('const b=d.querySelector("[data-tabs] [data-tab]:last-child");return !b||[...d.querySelectorAll("[data-panel]")].some(p=>p.dataset.panel===b.dataset.tab&&p.classList.contains("on"));'));
  await run('d.querySelector(".fq>button").click()');assert.equal(await run('return d.querySelector(".fq>button").getAttribute("aria-expanded")'),'true');await run('d.querySelector(".fq>button").click()');
  await run('d.querySelector("[data-open=xhCallback]").click()');await pause(150);assert(await evaluate('!!document.querySelector("#callback")'));await evaluate('ng.getComponent(document.querySelector("app-root")).overlay.closeAll()');
  await evaluate('window.scrollTo({top:0,behavior:"instant"})');await pause(500);
  fs.writeFileSync('output/'+slug+'-desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
  await run('const t=d.querySelector("#customer-feedback");window.scrollTo({top:scrollY+f.getBoundingClientRect().top+t.getBoundingClientRect().top-110,behavior:"instant"});');await pause(800);
  fs.writeFileSync('output/'+slug+'-faq.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
  await evaluate('window.scrollTo({top:0,behavior:"instant"})');await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await pause(900);
  const mobile=await run('return {overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,outerOverflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,titleOverflow:d.querySelector("h1").scrollWidth>d.querySelector("h1").clientWidth}');console.log('mobile',mobile);assert.equal(mobile.overflow,false);assert.equal(mobile.outerOverflow,false);assert.equal(mobile.titleOverflow,false);
  fs.writeFileSync('output/'+slug+'-mobile.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
 }

 await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/'});await pause(6500);
 await evaluate('const h=ng.getComponent(document.querySelector("xh-header"));h.openTop.set("Solutions");h.setTab("Solutions","13");');await pause(400);
 const menu=await evaluate('[...document.querySelectorAll(".xh-menu-item.open .xh-group.active a")].map(a=>({text:a.textContent,href:a.getAttribute("href")}))');console.log('MENU',menu);
 const anchors=await evaluate('[...document.querySelectorAll(".xh-menu-item.open a")].filter(a=>/acronis-cyber-intelligence|acronis-cyber-frame$|acronis-workflow-automation/.test(a.getAttribute("href")||"")).map(a=>a.getAttribute("href"))');for(const slug of slugs)assert(anchors.includes('/'+slug));
 fs.writeFileSync('output/acronis-solutions-menu.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
 await evaluate('[...document.querySelectorAll(".xh-menu-item.open a")].find(a=>a.getAttribute("href")==="/acronis-cyber-intelligence").click()');await pause(2500);assert.match(await evaluate('location.pathname'),/acronis-cyber-intelligence/);assert.match(await run('return d.querySelector("h1").textContent'),/Cyber Intelligence/);
 console.log('ERRORS',errors);

 }finally{ws?.close();chrome?.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
