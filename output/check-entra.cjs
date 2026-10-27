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






const pause=ms=>new Promise(r=>setTimeout(r,ms)),assert=require('node:assert/strict');for(const width of [1440,390]){await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<700});await send('Page.navigate',{url:'http://localhost:4200/microsoft-entra-id'});await pause(4500);const result=await evaluate('(()=>{const t=document.querySelector("#ppTitle"),brand=t.querySelector(".pp-title-brand"),name=t.querySelector(".pp-title-name"),scene=document.querySelector(".pph-scene"),cta=document.querySelector(".hero-ctas");return {width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,titleOverflow:t.scrollWidth>t.clientWidth,titleHeight:t.getBoundingClientRect().height,sameLine:Math.abs(brand.getBoundingClientRect().top-name.getBoundingClientRect().top)<4,font:getComputedStyle(t).fontSize,scenePosition:getComputedStyle(scene).position,aiWhiteSpace:getComputedStyle(document.querySelector(".pp-ask-ai-kicker")).whiteSpace,aiLinks:document.querySelectorAll(".pp-ask-ai-actions a").length,links:document.querySelectorAll(".identity-related a").length,ctaWrap:getComputedStyle(cta).flexWrap}})()');console.log(result);assert.equal(result.overflow,false);assert.equal(result.titleOverflow,false);assert.equal(result.sameLine,true);assert.equal(result.links,8);assert.equal(result.aiWhiteSpace,"nowrap");assert.equal(result.aiLinks,5);fs.writeFileSync('output/entra-final-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});