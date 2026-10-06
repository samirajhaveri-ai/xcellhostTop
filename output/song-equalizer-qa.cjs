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

    const slugs=['tally-on-cloud','cloud-backup','cloud-drive','advanced-endpoint-security-edr','remote-monitoring-and-mgmt-rmm','smb-cyber-security-appliance','microsoft-365-smb','smb-cloud-desktop','acronis-genai-protection'];
    const results=[];
    for(const width of [1440,390]){
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
      for(const slug of slugs){
        await send('Page.navigate',{url:'http://localhost:4200/'+slug});
        for(let attempt=0;attempt<100;attempt++){
          if(await evaluate(`!!document.querySelector('.supplied-smb-hero-frame')?.contentDocument?.querySelector('.song-equalizer')`)) break;
          await new Promise(resolve=>setTimeout(resolve,100));
        }
        const result=await evaluate(`(async()=>{const frame=document.querySelector('.supplied-smb-hero-frame');const doc=frame.contentDocument;const win=frame.contentWindow;const audio=doc.querySelector('.smb-hero-song audio');const icon=doc.querySelector('.song-equalizer');const bars=[...icon.children];const image=new win.Image();image.src='/assets/images/song-equalizer.png';await image.decode();audio.dispatchEvent(new win.Event('playing'));const start=win.getComputedStyle(bars[0]).transform;await new Promise(r=>setTimeout(r,180));const moving=start!==win.getComputedStyle(bars[0]).transform;const running=bars.every(e=>win.getComputedStyle(e).animationName==='song-equalizer-beat');audio.dispatchEvent(new win.Event('pause'));const stopped=bars.every(e=>win.getComputedStyle(e).animationName==='none');audio.dispatchEvent(new win.Event('playing'));audio.dispatchEvent(new win.Event('ended'));return {bars:bars.length,width:icon.getBoundingClientRect().width,height:icon.getBoundingClientRect().height,imageLoaded:image.naturalWidth===1522,moving,running,stopped,ended:!icon.classList.contains('is-playing')};})()`);
        results.push({width,slug,...result});
        console.log('Checked',width,slug);
      }
    }
    await send('Page.navigate',{url:'http://localhost:4200/assets/heroes/cloud-backup-hero.html'});
    await new Promise(r=>setTimeout(r,500));
    await evaluate(`document.querySelector('.smb-hero-song audio').dispatchEvent(new Event('playing'))`);
    await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
    const reduced=await evaluate(`getComputedStyle(document.querySelector('.song-equalizer i')).animationName==='none'`);
    await send('Emulation.setEmulatedMedia',{features:[]});
    await send('Emulation.setDeviceMetricsOverride',{width:706,height:900,deviceScaleFactor:1,mobile:false});
    await new Promise(r=>setTimeout(r,300));
    fs.writeFileSync('output/song-equalizer-preview.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
    const failures=results.filter(r=>r.bars!==4||r.width!==26||r.height!==19||!r.imageLoaded||!r.moving||!r.running||!r.stopped||!r.ended);
    console.log(JSON.stringify({checked:results.length,failures,reducedMotion:reduced},null,2));
    if(failures.length||!reduced) throw Error('Equalizer verification failed');  } finally {ws?.close();chrome?.kill();}
})().catch(error=>{console.error(error);process.exitCode=1;});