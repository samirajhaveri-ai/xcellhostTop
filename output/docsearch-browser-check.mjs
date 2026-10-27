import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const out = resolve('output/docsearch-check');
mkdirSync(out, { recursive: true });
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=9337', `--user-data-dir=${out}/chrome-profile`, 'about:blank',
], { stdio: 'ignore', windowsHide: true });
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
let socket;
try {
  let target;
  for (let i = 0; i < 50; i++) {
    try { target = (await (await fetch('http://127.0.0.1:9337/json/list')).json()).find(t => t.type === 'page'); if (target) break; } catch {}
    await pause(200);
  }
  if (!target) throw new Error('Chrome did not start');
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }));
  let nextId = 0;
  const pending = new Map();
  const errors = [];
  const network = [];
  socket.addEventListener('message', ({ data }) => {
    const message = JSON.parse(data);
    if (message.id) {
      const action = pending.get(message.id);
      pending.delete(message.id);
      message.error ? action.reject(message.error) : action.resolve(message.result);
    }
    if (message.method === 'Runtime.exceptionThrown') errors.push(message.params.exceptionDetails.text + ': ' + message.params.exceptionDetails.exception?.description);
    if (message.method === 'Network.responseReceived' && /algolia/.test(message.params.response.url)) {
      network.push({ url: message.params.response.url.replace(/\?.*/, ''), status: message.params.response.status, requestId: message.params.requestId });
    }
  });
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++nextId; pending.set(id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params }));
  });
  const evaluate = async expression => {
    const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.exception?.description);
    return r.result.value;
  };
  const waitFor = async (expression, label) => {
    for (let i = 0; i < 100; i++) { if (await evaluate(expression)) return; await pause(200); }
    console.log('FAILURE', JSON.stringify({errors,network}));
    console.log('MODAL', await evaluate('document.querySelector(".DocSearch-Container")?.outerHTML'));
    console.log('STATE', await evaluate('(()=>{const c=ng.getComponent(document.querySelector("xh-algolia-search"));const p=ng.getComponent(document.querySelector("xh-search-dialog"));return {stack:p.overlay.stack(),local:p.websiteSearch(),active:c.active(),ready:c.ready(),failed:c.failed(),loading:c.loading,generation:c.generation,instanceReady:c.instance?.isReady,instanceOpen:c.instance?.isOpen}})()'));
    throw new Error('Timed out: ' + label);
  };
  await send('Runtime.enable'); await send('Network.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://localhost:4200/' });
  await waitFor('!!document.querySelector(".xh-search")', 'header');
  await evaluate('document.querySelector(".xh-search").click()');
  await waitFor('!!document.querySelector(".DocSearch-Input")', 'Algolia modal');
  await pause(1000);
  await evaluate('document.querySelector(".DocSearch-Input").focus()');
  await send('Input.insertText', { text: 'cloud' });
  await pause(3500);
  const searchText = await evaluate('document.querySelector(".DocSearch-Container")?.innerText');
  console.log('SEARCH', JSON.stringify({searchText, network, errors}));
  for (const response of network.filter(r => r.url.includes('/queries'))) {
    const body = JSON.parse((await send('Network.getResponseBody', { requestId: response.requestId })).body);
    console.log('ALGOLIA_RESULTS', JSON.stringify(body.results?.map(r => ({ nbHits: r.nbHits, firstHit:r.hits?.[0], index: r.index, error: r.error, message: r.message, status: r.status })) ?? body));
  }
  writeFileSync(`${out}/search.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
  await evaluate('document.querySelector(".xh-docsearch-ai").click()');
  await pause(1000);
  await evaluate('document.querySelector(".DocSearch-Input").focus(); document.querySelector(".DocSearch-Input").select()');
  await send('Input.insertText', { text: 'How do I back up Microsoft 365 with XcellHost?' });
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Enter', code: 'Enter', windowsVirtualKeyCode: 13 });
  await pause(6000);
  const aiText = await evaluate('document.querySelector(".DocSearch-Container")?.innerText');
  writeFileSync(`${out}/ask-ai.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
  await evaluate('document.querySelector(".xh-docsearch-website").click()');
  await waitFor('!!document.querySelector(".srch.open") && !document.querySelector(".DocSearch-Container")', 'website fallback');
  await pause(700);
  console.log('FALLBACK', await evaluate('({stack:ng.getComponent(document.querySelector("xh-search-dialog")).overlay.stack(),local:ng.getComponent(document.querySelector("xh-search-dialog")).websiteSearch()})'));
  await evaluate('Array.from(document.querySelectorAll(".srch.open button")).find(b => /Knowledgebase & Ask AI/.test(b.textContent)).click()');
  await pause(700);
  console.log('RETURN', await evaluate('({stack:ng.getComponent(document.querySelector("xh-search-dialog")).overlay.stack(),local:ng.getComponent(document.querySelector("xh-search-dialog")).websiteSearch(),html:document.querySelector(".DocSearch-Container")?.innerText,errors:document.querySelector("vite-error-overlay")?.shadowRoot?.textContent})'));
  await waitFor('!!document.querySelector(".DocSearch-Input") && !document.querySelector(".srch.open")', 'return to Algolia');
  await send('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await send('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 });
  await waitFor('!document.querySelector(".DocSearch-Container") && !document.body.classList.contains("xh-locked")', 'dismissal');
  await pause(500);
  await evaluate('document.querySelector(".xh-search").click()');
  await waitFor('!!document.querySelector(".DocSearch-Input")', 'reopen');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await pause(400);
  const mobileOverflow = await evaluate('document.documentElement.scrollWidth > innerWidth');
  writeFileSync(`${out}/mobile.png`, Buffer.from((await send('Page.captureScreenshot', { format: 'png' })).data, 'base64'));
  const report = { searchText, aiText, network, errors, mobileOverflow, lifecycle: 'fallback, return, Escape, reopen passed' };
  writeFileSync(`${out}/report.json`, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally { socket?.close(); chrome.kill(); }
