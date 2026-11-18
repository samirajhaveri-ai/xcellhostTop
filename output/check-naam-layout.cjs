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





await send('Page.enable');await send('Runtime.enable');
await send('Page.navigate',{url:'http://localhost:4200/naam-ai-caller-id'});await new Promise(r=>setTimeout(r,5500));
for(const width of [1440,390,320]){
 await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});await new Promise(r=>setTimeout(r,600));
 console.log(width,JSON.stringify(await evaluate(`(()=>{const f=document.querySelector('iframe[src*=imported-]'),d=f.contentDocument;const ask=d.querySelector('.lh-ask'),k=ask.querySelector('.k'),chips=ask.querySelector('.chips'),pw=d.querySelector('.lh-powered'),title=d.querySelector('h1'),ctas=[...d.querySelectorAll('.lh-ctas .btn')];const rect=n=>n.getBoundingClientRect();window.scrollTo(0,f.offsetTop+rect(ask).top-300);return {overflow:d.documentElement.scrollWidth>d.documentElement.clientWidth,askOverlap:rect(k).right>rect(chips).left,askContent:ask.scrollWidth,askWidth:ask.clientWidth,poweredHeight:rect(pw).height,poweredOverlap:rect(pw.querySelector('small')).right>rect(pw.querySelector('span')).left,titleOverflows:title.scrollWidth>title.clientWidth,ctasSameRow:ctas.every(n=>rect(n).top===rect(ctas[0]).top),providerLinks:[...ask.querySelectorAll('a')].every(n=>n.target==='_blank'&&n.href.includes('q='))};})()`)));
 if(width===320)fs.writeFileSync('output/naam-mobile-actions.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
}
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
