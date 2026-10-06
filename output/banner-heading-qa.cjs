const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');
(async () => {
  let browser, ws;
  try {
    browser = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--remote-debugging-port=0', '--no-first-run', '--no-default-browser-check', '--user-data-dir=' + fs.mkdtempSync(path.join(os.tmpdir(), 'xh-banner-qa-')), 'about:blank'], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
    const endpoint = await new Promise((resolve, reject) => { let output = ''; browser.stderr.on('data', data => { output += data; const m = output.match(/DevTools listening on (ws:\/\/[^\s]+)/); if (m) resolve(m[1]); }); browser.on('error', reject); setTimeout(() => reject(Error('Launch timeout')), 15000).unref(); });
    const targets = await (await fetch(endpoint.replace(/^ws:/, 'http:').replace(/\/devtools\/browser\/.*/, '/json/list'))).json();
    ws = new WebSocket(targets.find(t => t.type === 'page').webSocketDebuggerUrl);
    await new Promise(resolve => ws.addEventListener('open', resolve));
    let id = 0; const pending = new Map();
    ws.addEventListener('message', event => { const m = JSON.parse(event.data); if (!m.id) return; const p = pending.get(m.id); pending.delete(m.id); m.error ? p.reject(m.error) : p.resolve(m.result); });
    const send = (method, params = {}) => new Promise((resolve, reject) => { const next = ++id; pending.set(next, { resolve, reject }); ws.send(JSON.stringify({ id: next, method, params })); });
    const evaluate = async expression => { const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }); if (r.exceptionDetails) throw Error(JSON.stringify(r.exceptionDetails)); return r.result.value; };
    await send('Page.enable');
    const slugs = ['instagram-automation', 'smart-qr-and-nfc-automation', 'ai-review-magicqr', 'digital-menu-and-catalog-management', 'lead-generation-and-pipeline-crm', 'billing-software', 'hrm-attendance', 'instant-website', 'bio-link-digital-visiting-card', 'whatsapp-broadcasting', 'website-seo', 'transactional-emails'];
    const results = [];
    for (const width of [1440, 665, 390]) {
      await send('Emulation.setDeviceMetricsOverride', { width, height: 900, deviceScaleFactor: 1, mobile: width < 500 });
      for (const slug of slugs) {
        if (process.argv.includes('--crm') && slug !== 'lead-generation-and-pipeline-crm') continue;
        if (process.argv.includes('--menu-magicqr') && !['digital-menu-and-catalog-management', 'ai-review-magicqr'].includes(slug)) continue;
        console.log('Checking', width, slug);
        await send('Page.navigate', { url: 'http://localhost:4200/' + slug });
        for (let i = 0; i < 100; i++) { if (await evaluate(`!!document.querySelector('#ppage .pp-typewriter')`)) break; await new Promise(r => setTimeout(r, 100)); }
        const result = await evaluate(`(async () => {const hero=document.querySelector('#ppage .pp-hero'); const buttons=[...document.querySelectorAll('#ppage .product-hero-ctas .btn')]; const lines=[...hero.querySelectorAll('.pp-tagline,.pp-tagline-support,.pp-typewriter')].map(e=>e.textContent.trim()); const type=hero.querySelector('.pp-typewriter'); const before=type.textContent; await new Promise(r=>setTimeout(r,500));const title=hero.querySelector('#ppTitle');return {slug:location.pathname,lines,typing:before!==type.textContent,headingFits:(getComputedStyle(title).whiteSpace==='nowrap' && title.scrollWidth<=title.clientWidth+1),buttons:buttons.length,oneRow:buttons.every(e=>Math.abs(e.getBoundingClientRect().top-buttons[0].getBoundingClientRect().top)<2),overflow:document.documentElement.scrollWidth>innerWidth};})()`);
        results.push({width,...result});
        if (slug === 'lead-generation-and-pipeline-crm' && width === 665) { await new Promise(r => setTimeout(r, 3500)); fs.writeFileSync('output/lead-crm-banner.png', Buffer.from((await send('Page.captureScreenshot', {format:'png'})).data,'base64')); }
      }
    }
    const failures = results.filter(r => r.lines.length !== 3 || !r.lines[0] || !r.lines[1] || r.lines[0].toLowerCase().includes('maximise online visibility') || r.lines[0] === r.lines[1] || !r.typing || !r.headingFits || !r.oneRow || r.buttons !== 5 || r.overflow);
    console.log(JSON.stringify({checked:results.length,failures,example:results[0]},null,2));
    if (failures.length) process.exitCode = 1;
  } finally { ws?.close(); browser?.kill(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
