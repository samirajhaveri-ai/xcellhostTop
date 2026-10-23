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
for(const slug of ['sectigo-ssl-certificates','digicert-standard-ssl','cloud-operations','power-apps','openai-managed-services','rapidssl-ssl-certificates','zoom-conferenceing','dedicated-ai-servers','nvidia-b300-nodes','microsoft-365-tenant-to-tenant-migration']){
 await send('Page.navigate',{url:'http://localhost:4200/'+slug});await pause(2500);
 const result=await evaluate('(()=>{const docs=[document,...Array.from(document.querySelectorAll("iframe")).map(f=>{try{return f.contentDocument}catch{return null}}).filter(Boolean)];return {ready:docs.some(d=>!!d.querySelector("h1")),old:docs.some(d=>/Request (?:customer )?references/i.test(d.body.innerText)),slots:docs.flatMap(d=>Array.from(d.querySelectorAll("[data-testimonial-page]")).map(e=>({slug:e.dataset.testimonialPage,hidden:getComputedStyle(e).display==="none"})))}})()');
 assert(result.ready,slug);assert(!result.old,slug);assert(result.slots.every(s=>s.hidden),slug);console.log(slug,JSON.stringify(result));
}
for(const width of [1440,390]){
 await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<700});
 const tree=await send('Page.getFrameTree');await send('Page.setDocumentContent',{frameId:tree.frameTree.frame.id,html:fs.readFileSync('output/testimonial-layout-preview.html','utf8')});await pause(500);
 const result=await evaluate('(()=>{const cards=[...document.querySelectorAll(".xh-testimonial-card")];return {cards:cards.length,overflow:document.documentElement.scrollWidth>innerWidth,columns:getComputedStyle(document.querySelector(".xh-testimonial-grid")).gridTemplateColumns.split(" ").length,heights:cards.map(e=>e.clientHeight)}})()');assert.equal(result.cards,3);assert(!result.overflow);assert.equal(result.columns,width<820?1:3);console.log('Preview',width,result);fs.writeFileSync('output/testimonial-preview-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
}
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
