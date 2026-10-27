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

    for (const width of [1440, 706, 390]) {
      await send('Emulation.setDeviceMetricsOverride', {width, height:900, deviceScaleFactor:1, mobile:width<500});
      await send('Page.navigate', {url:'http://localhost:4200/tally-on-cloud'});
      for(let attempt=0;attempt<100;attempt++){
        if(await evaluate(`!!document.querySelector('.supplied-smb-hero-frame')?.contentDocument?.querySelector('.tally-prime img')`)) break;
        await new Promise(resolve=>setTimeout(resolve,100));
      }
      await new Promise(resolve=>setTimeout(resolve,3500));
      const result=await evaluate(`(()=>{const doc=document.querySelector('.supplied-smb-hero-frame').contentDocument;const logo=doc.querySelector('.tally-prime img');const boxes=[...doc.querySelectorAll('.xt-btn')];return {logo:logo.getAttribute('src'),loaded:logo.complete&&logo.naturalWidth>0,logoWidth:logo.getBoundingClientRect().width,afterLogo:doc.querySelector('.tally-prime').nextElementSibling.textContent,barsSize:getComputedStyle(doc.querySelector('.smb-hero-song b span')).fontSize,boxPadding:getComputedStyle(boxes[0]).padding,buttons:boxes.length,oneRow:boxes.every(e=>e.getBoundingClientRect().top===boxes[0].getBoundingClientRect().top),audio:doc.querySelector('audio').getAttribute('src')};})()`);
      console.log(width, result);
      if(!result.loaded || result.afterLogo.includes('|') || result.barsSize!=='12px' || !result.oneRow || result.buttons!==5) throw Error('Tally banner verification failed');
      if(width===706){fs.writeFileSync('output/tally-banner.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
    }
  } finally {ws?.close();chrome?.kill();}
})().catch(error=>{console.error(error);process.exitCode=1;});