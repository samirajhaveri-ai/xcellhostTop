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

await send('Page.enable');await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});await send('Page.navigate',{url:'http://localhost:4200/media-kit'});await new Promise(r=>setTimeout(r,5000));
console.log(await evaluate(`(async()=>{const f=document.querySelector('iframe[src*=imported-media-kit]'),d=f.contentDocument,w=f.contentWindow;const results={};w.__downloads=[];w.__copied=[];Object.defineProperty(w.navigator,'clipboard',{configurable:true,value:{writeText:async t=>w.__copied.push(t)}});const ac=w.HTMLAnchorElement.prototype.click;w.HTMLAnchorElement.prototype.click=function(){if(this.download){w.__downloads.push(this.download);return;}if(this.href.startsWith('mailto:'))return;return ac.call(this);};
d.querySelector('#bpLen [data-v="50"]').click();results.boilerplate50=!d.querySelector('#bp50').parentElement.hidden && d.querySelector('#bp100').parentElement.hidden;d.querySelector('#bpCopy').click();await new Promise(r=>setTimeout(r,100));results.copy=w.__copied.length===1&&w.__copied[0].length>100;
for(const id of ['dlSvg','dlJson','dlCss','dlTxt','dlP1','dlP2'])d.getElementById(id).click();await new Promise(r=>setTimeout(r,1600));results.downloads=w.__downloads;
const n=d.getElementById('ncIn');n.value='Xcell secure';n.dispatchEvent(new w.Event('input',{bubbles:true}));results.naming=d.getElementById('ncOut').textContent.includes('XcellSecure');
const ratio=d.getElementById('ccRatio').textContent;const opts=d.querySelectorAll('#ccFg button');if(opts.length>1)opts[0].click();results.contrast={before:ratio,after:d.getElementById('ccRatio').textContent,buttons:opts.length};
const form=d.getElementById('spForm');form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));results.validation=form.querySelectorAll('.err').length>0;for(const [id,value] of Object.entries({spName:'QA Test',spOrg:'QA Company',spMail:'qa@example.com',spEvent:'QA Interview'}))d.getElementById(id).value=value;form.dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));results.emailDraft=w.__mkMail?.startsWith('mailto:sales@xcellhost.cloud?');results.formPreserved=!!d.getElementById('spForm');results.noFakeConfirmation=!d.querySelector('#contact .done');results.noLeadStored=!w.localStorage.getItem('xh-leads');return results;})()`));
await send('Emulation.setDeviceMetricsOverride',{width:320,height:1000,deviceScaleFactor:1,mobile:true});await new Promise(r=>setTimeout(r,1500));console.log('mobile',await evaluate(`(()=>{const f=document.querySelector('iframe[src*=imported-media-kit]'),d=f.contentDocument;const c=d.querySelector('.lh-ctas');return {ctaFits:c.scrollWidth<=c.clientWidth,ctaWidth:c.clientWidth,ctaScroll:c.scrollWidth,buttons:[...c.children].map(n=>({width:n.getBoundingClientRect().width,text:n.textContent,font:f.contentWindow.getComputedStyle(n).fontSize,padding:f.contentWindow.getComputedStyle(n).padding,minWidth:f.contentWindow.getComputedStyle(n).minWidth})),overflow:d.documentElement.scrollWidth>f.contentWindow.innerWidth}})()`));
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});