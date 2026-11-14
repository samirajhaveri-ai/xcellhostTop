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


await send('Page.enable');await send('Runtime.enable');const errors=[];ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown')errors.push(m.params.exceptionDetails);});
for(const kind of ['privacy','security'])for(const width of [1440,390,320]){
await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<700});await send('Page.navigate',{url:'http://localhost:4200/faceoff-'+kind+'-in-a-box'});await new Promise(r=>setTimeout(r,6500));
console.log(kind,width,await evaluate(`(()=>{const f=document.querySelector('iframe[src*=imported-faceoff]');if(!f)throw Error('Missing page');const d=f.contentDocument,w=f.contentWindow;const h=d.querySelector('h1'),ask=d.querySelector('.lh-ask'),cta=d.querySelector('.lh-ctas');return {heading:h.textContent,headingFits:h.scrollWidth<=h.clientWidth,overflow:d.documentElement.scrollWidth>w.innerWidth,askFits:ask.scrollWidth<=ask.clientWidth,ctaFits:cta.scrollWidth<=cta.clientWidth,faqColumns:w.getComputedStyle(d.querySelector('#faq .faq')).gridTemplateColumns,faqCount:d.querySelectorAll('#faq .fq').length,buttons:[...d.querySelectorAll('.hero button,.hero .btn')].map(n=>n.textContent.trim()),total:d.querySelector('#cfTot')?.textContent,brokenImages:[...d.images].filter(n=>n.complete&&!n.naturalWidth).map(n=>n.src),sections:[...d.querySelectorAll('main>section')].map(x=>x.id)};})()`));
fs.writeFileSync('output/faceoff-'+kind+'-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
if(width===1440){console.log('interactions',await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-faceoff]').contentDocument;d.querySelectorAll('#faq .fq button')[1].click();const expanded=d.querySelectorAll('#faq .fq button')[1].getAttribute('aria-expanded');d.querySelector('#oAdd').click();return {expanded,cartOpen:document.body.textContent.includes('Your cart'),controls:[...d.querySelectorAll('#readiness button,#quiz button,#fit button')].slice(0,2).map(n=>({id:n.id,text:n.textContent.trim()}))};})()`));}
}
await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
for(const kind of ['privacy','security']){
await send('Page.navigate',{url:'http://localhost:4200/faceoff-'+kind+'-in-a-box'});await new Promise(r=>setTimeout(r,5000));
console.log('tools',kind,await evaluate(`(()=>{const f=document.querySelector('iframe[src*=imported-faceoff]'),d=f.contentDocument,w=f.contentWindow;const before=d.querySelector('#cfTot').textContent;const input=d.querySelector('#cfE')||d.querySelector('#cfWN');if(input){input.value=321;input.dispatchEvent(new w.Event('input',{bubbles:true}));}if(d.querySelector('#readiness'))d.querySelector('#readiness button').click();else d.querySelector('#quiz button').click();return {before,choiceSelected:d.querySelector('#readiness button,#quiz button').outerHTML};})()`));
await new Promise(r=>setTimeout(r,250));console.log('calculator',await evaluate(`(()=>{const d=document.querySelector('iframe[src*=imported-faceoff]').contentDocument;d.querySelector('#oAdd').click();return d.querySelector('#cfTot').textContent})()`));await new Promise(r=>setTimeout(r,300));console.log('cart',await evaluate(`document.querySelector('xh-cart-drawer')?.textContent?.slice(0,400)||document.querySelector('[role="dialog"]')?.textContent?.slice(0,400)`));
await evaluate(`ng.getComponent(document.querySelector('app-root')).overlay.closeAll()`);await evaluate(`document.querySelector('iframe[src*=imported-faceoff]').contentWindow.XH.open('xhCallback',{topic:'Demo request'})`);await new Promise(r=>setTimeout(r,300));console.log('enquiry',await evaluate(`document.querySelector('[role="dialog"]')?.textContent?.slice(0,350)`));
}
console.log('errors',errors);
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
