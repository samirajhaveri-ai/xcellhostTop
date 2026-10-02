// Capture actual supplied-page screens for the hero Screenshot Tour button.
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const os = require('node:os');
const { spawn } = require('node:child_process');
const root = path.resolve('src/assets/menu-service-pages');
const destination = path.join(root, 'tours');
fs.mkdirSync(destination, { recursive: true });
const server = http.createServer((req, res) => {
  const file = path.join(root, path.basename(req.url));
  if (!fs.existsSync(file) || !file.endsWith('.html')) { res.writeHead(404); res.end(); return; }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  fs.createReadStream(file).pipe(res);
});

(async () => {
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
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
    await send('Emulation.setDeviceMetricsOverride', { width: 1366, height: 900, deviceScaleFactor: 1, mobile: false });
    for (const file of fs.readdirSync(root).filter((file) => file.endsWith('.html'))) {
      await send('Page.navigate', { url: `http://127.0.0.1:${server.address().port}/${file}` });
      for (let attempt = 0; attempt < 80; attempt++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        if (await evaluate(`document.readyState === 'complete' && !!document.querySelector('h1')`)) break;
      }
      await evaluate(`document.querySelectorAll('.rv').forEach(e=>e.classList.add('in','is-in'));window.scrollTo(0,0)`);
      for (const [label, scroll] of [['hero', 0], ['details', 850]]) {
        await evaluate(`window.scrollTo(0,${scroll})`);
        await new Promise((resolve) => setTimeout(resolve, 300));
        const screenshot = await send('Page.captureScreenshot', { format: 'webp', quality: 80 });
        fs.writeFileSync(path.join(destination, file.replace('.html', `-${label}.webp`)), Buffer.from(screenshot.data, 'base64'));
      }
      console.log(`Captured ${file}: two tour screens.`);
    }
  } finally { ws?.close(); chrome?.kill(); server.close(); }
})().catch((error) => { console.error(error); process.exitCode = 1; });
