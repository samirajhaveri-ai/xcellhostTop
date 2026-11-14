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
for(const width of [1440,390,320]){
await send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:width<700});
await send('Page.navigate',{url:'http://localhost:4200/'});await new Promise(r=>setTimeout(r,6000));
await evaluate(`ng.getComponent(document.querySelector('xh-search-dialog')).searchLaunch.open('ask-ai')`);
await new Promise(r=>setTimeout(r,6000));
console.log(width,await evaluate(`(()=>{const q=s=>document.querySelector(s),b=q('.srch-chat-brand').getBoundingClientRect(),x=q('.srch-x').getBoundingClientRect(),t=q('.srch-chat-title strong');return {title:t.textContent,font:getComputedStyle(t).fontFamily,logo:q('.srch-chat-mark image').getAttribute('href'),fits:q('.srch-box').scrollWidth<=q('.srch-box').clientWidth,headerOverlap:b.right>x.left,iframeLoaded:!!q('#customgpt_chat iframe')};})()`));
fs.writeFileSync('output/genie-'+width+'.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
await evaluate(`document.querySelector('.srch-chat-box .srch-ai-toggle').click()`);await new Promise(r=>setTimeout(r,300));
console.log('back to search',await evaluate(`!!document.querySelector('.srch-field') && document.querySelector('.srch-customgpt').hidden`));
await evaluate(`document.querySelector('.srch-x').click()`);await new Promise(r=>setTimeout(r,300));console.log('closed',await evaluate(`!document.querySelector('#srch').classList.contains('open')`));
}
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
