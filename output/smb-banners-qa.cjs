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

    const slugs = ['cloud-backup','cloud-drive','advanced-endpoint-security-edr','remote-monitoring-and-mgmt-rmm','smb-cyber-security-appliance','microsoft-365-smb','smb-cloud-desktop','acronis-genai-protection','cloud-disaster-recovery-smb'];
    const results=[];
    for (const width of [1440,706,390]) {
      await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<500});
      for(const slug of slugs){
        await send('Page.navigate',{url:'http://localhost:4200/'+slug});
        for(let attempt=0;attempt<100;attempt++){
          if(await evaluate(`!!document.querySelector('.supplied-smb-hero-frame')?.contentDocument?.querySelector('.smb-hero-logo img')`)) break;
          await new Promise(resolve=>setTimeout(resolve,100));
        }
        await new Promise(resolve=>setTimeout(resolve,300));
        const result=await evaluate(`(()=>{const doc=document.querySelector('.supplied-smb-hero-frame').contentDocument;const logo=doc.querySelector('.smb-hero-logo img');const boxes=[...doc.querySelectorAll('.xh-btn')];const bars=doc.querySelector('.smb-hero-song b span');return {logo:logo.getAttribute('src'),loaded:logo.complete&&logo.naturalWidth>0,afterLogo:doc.querySelector('.smb-hero-logo').nextElementSibling?.textContent??'',barsSize:bars?getComputedStyle(bars).fontSize:null,boxPadding:getComputedStyle(boxes[0]).padding,boxFont:getComputedStyle(boxes[0]).fontSize,buttons:boxes.length,oneRow:boxes.every(e=>e.getBoundingClientRect().top===boxes[0].getBoundingClientRect().top),audio:doc.querySelector('audio')?.getAttribute('src')??null};})()`);
        results.push({slug,width,...result});
        console.log('Checked',width,slug);
      }
    }
    const failures=results.filter(r=>!r.loaded||r.afterLogo.includes('|')||(r.barsSize!==null&&r.barsSize!=='12px')||r.boxPadding!=='8px 9px'||r.boxFont!=='11px'||r.buttons!==5||!r.oneRow);
    console.log(JSON.stringify({checked:results.length,failures,songBanners:results.filter(r=>r.audio).length/3},null,2));
    fs.writeFileSync('output/smb-banners-qa-results.json',JSON.stringify(results,null,2));
    if(failures.length) throw Error('SMB banner verification failed');  } finally {ws?.close();chrome?.kill();}
})().catch(error=>{console.error(error);process.exitCode=1;});