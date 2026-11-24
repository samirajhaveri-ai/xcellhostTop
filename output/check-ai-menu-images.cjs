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
    await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
    await send('Page.navigate',{url:'http://localhost:4200/'});
    for(let i=0;i<60;i++){if(await evaluate('!!document.querySelector(".xh-menu-link")'))break;await new Promise(r=>setTimeout(r,500));}
    await new Promise(r=>setTimeout(r,5000));
    await evaluate('[...document.querySelectorAll(".xh-menu-link")].find(e=>e.textContent.trim().startsWith("AI")).click()');
    await new Promise(r=>setTimeout(r,700));
    const results=[];
    for(const tab of ['AI Tools','AI Build','AI Training','AI Consulting','AI Security','AI Governance','AI Managed Services']){
      await evaluate('[...document.querySelectorAll(".xh-menu-item.open .xh-tab")].find(e=>e.textContent.trim()==='+JSON.stringify(tab)+').click()');
      await new Promise(r=>setTimeout(r,600));
      const cards=await evaluate(`Promise.all([...document.querySelectorAll('.xh-menu-item.open .xh-feature-card')].map(async card=>{const art=card.querySelector('.xh-feature-media > svg, .xh-feature-media > img'),media=card.querySelector('.xh-feature-media'),copy=card.querySelector('.xh-feature-copy');const src=art.tagName.toLowerCase()==='svg'?art.querySelector('image').getAttribute('href'):art.getAttribute('src');const img=new Image();img.src=src;await img.decode();const a=art.getBoundingClientRect(),b=media.getBoundingClientRect(),c=copy.getBoundingClientRect();return {title:art.getAttribute('aria-label')||art.alt,src,loaded:img.naturalWidth>0,contained:a.bottom<=c.top+1&&Math.abs(a.width-b.width)<2&&Math.abs(a.height-b.height)<2,viewBox:art.getAttribute('viewBox')};}))`);
      if(cards.length!==2||cards.some(c=>!c.loaded||!c.contained))throw Error(tab+': '+JSON.stringify(cards));
      results.push({tab,cards});
      if(tab==='AI Tools'||tab==='AI Training'||tab==='AI Build'){
       const shot=await send('Page.captureScreenshot',{format:'png'});fs.writeFileSync('output/'+tab.replaceAll(' ','-')+'-images.png',Buffer.from(shot.data,'base64'));
      }
    }
    console.log(JSON.stringify(results,null,2));
  }finally{if(ws)ws.close();if(chrome)chrome.kill();}
})().catch(e=>{console.error(e);process.exitCode=1});


