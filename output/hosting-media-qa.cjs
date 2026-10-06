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

    await send('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
    await send('Page.navigate',{url:'http://localhost:4200'});
    for(let i=0;i<100;i++){if(await evaluate(`!!document.querySelector('.xh-menu-link')`))break;await new Promise(r=>setTimeout(r,100));}
    const paths=await evaluate(`(async()=>{const menu=[...document.querySelectorAll('.xh-menu-item')].find(e=>e.querySelector('.xh-menu-link').textContent.includes('Web Presence'));menu.querySelector('.xh-menu-link').click();await new Promise(r=>setTimeout(r,30));[...menu.querySelectorAll('.xh-tab')].find(e=>e.textContent.trim()==='Web Hosting').click();await new Promise(r=>setTimeout(r,30));return [...menu.querySelectorAll('.xh-panel.active .xh-link-grid a')].map(e=>({name:e.querySelector('strong').textContent,path:e.getAttribute('href')}));})()`);
    const results=[];
    for(const width of [1440,390]){
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
      for(const page of paths){
        await send('Page.navigate',{url:'http://localhost:4200'+page.path});
        for(let i=0;i<100;i++){if(await evaluate(`!!document.querySelector('main h1,#ppTitle,xh-domain-whois-content')`))break;await new Promise(r=>setTimeout(r,100));}
        await new Promise(r=>setTimeout(r,300));
        const result=await evaluate(`(async()=>{const media=document.querySelector('xh-hosting-hero-media');const audio=media?.querySelector('audio');const bars=[...media?.querySelectorAll('.song-equalizer i')??[]];let playing=true,paused=true,moving=true;if(audio){audio.dispatchEvent(new Event('playing'));await new Promise(r=>setTimeout(r,30));playing=bars.every(e=>getComputedStyle(e).animationName.includes('song-equalizer-beat'));const before=bars.map(e=>getComputedStyle(e).transform);await new Promise(r=>setTimeout(r,180));moving=bars.some((e,i)=>getComputedStyle(e).transform!==before[i]);audio.dispatchEvent(new Event('pause'));await new Promise(r=>setTimeout(r,30));paused=bars.every(e=>getComputedStyle(e).animationName==='none');}return {title:document.querySelector('#ppTitle,main h1')?.textContent.trim()??'',powered:media?.querySelector('.hosting-media-powered')?.textContent.trim(),duration:audio?.duration??null,audio:!!audio,bars:bars.length,playing,paused,moving,mediaLogos:media?.querySelectorAll('img').length??0,otherHeroLogo:document.querySelectorAll('#ppage .pph-powered-mark').length,overflow:document.documentElement.scrollWidth>innerWidth};})()`);
        results.push({width,...page,...result});console.log('Checked',width,page.name);
        if(width===1440&&result.audio){await evaluate(`document.querySelector('#introv')?.click()`);fs.writeFileSync('output/hosting-song-preview.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));}
      }
    }
    const failures=results.filter(r=>!r.audio||!Number.isFinite(r.duration)||r.duration<=0||r.mediaLogos||r.otherHeroLogo||r.powered!=='Powered by|'||!r.playing||!r.paused||!r.moving||(r.audio&&r.bars!==4)||r.overflow);
    console.log(JSON.stringify({checked:results.length,songPages:results.filter(r=>r.audio).map(r=>r.path),otherLogos:results.filter(r=>r.otherHeroLogo).map(r=>r.path),failures},null,2));
    if(failures.length)throw Error('Hosting checks failed');  } finally {ws?.close();chrome?.kill();}
})().catch(error=>{console.error(error);process.exitCode=1;});