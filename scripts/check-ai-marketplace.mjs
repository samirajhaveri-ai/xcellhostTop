import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const route = process.argv[2] ?? 'ai-marketplace';
assert.ok(['ai-marketplace', 'cloud-marketplace', 'software-marketplace'].includes(route));
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-marketplace-check-'));
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`,
  '--no-first-run', '--no-default-browser-check', 'about:blank',
], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] });
let ws;
try {
  const endpoint = await new Promise((resolve, reject) => {
    let output = '';
    const timer = setTimeout(() => reject(new Error('Chrome startup timed out')), 15000);
    chrome.on('error', reject);
    chrome.stderr.on('data', chunk => {
      output += chunk;
      const match = output.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) { clearTimeout(timer); resolve(match[1]); }
    });
  });
  const origin = new URL(endpoint).origin.replace('ws:', 'http:');
  const target = await (await fetch(`${origin}/json/new?http://localhost:4200/${route}`, { method: 'PUT' })).json();
  ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(resolve => ws.addEventListener('open', resolve, { once: true }));
  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (message.method === 'Runtime.exceptionThrown') console.log('Browser error:', message.params.exceptionDetails.exception?.description ?? message.params.exceptionDetails.text);
    if (message.id) {
      const task = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) task.reject(new Error(JSON.stringify(message.error)));
      else task.resolve(message.result);
    }
  });
  const call = (method, params = {}) => new Promise((resolve, reject) => {
    const requestId = ++id;
    pending.set(requestId, { resolve, reject });
    ws.send(JSON.stringify({ id: requestId, method, params }));
  });
  await call('Runtime.enable');
  let result;
  for (let attempt = 0; attempt < 30; attempt++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await call('Runtime.evaluate', { returnByValue: true, expression: `(() => {
      const frame = document.querySelector('xh-marketplace-document-page iframe');
      const inner = frame?.contentDocument;
      if (!inner?.querySelector('main')) return null;
      const style = el => inner.defaultView.getComputedStyle(el);
      const main = inner.querySelector('main');
      return {
        headers: document.querySelectorAll('xh-header').length,
        footers: document.querySelectorAll('xh-footer').length,
        dummyHeader: style(inner.querySelector('.hdr')).display,
        dummyFooter: style(inner.querySelector('.lft')).display,
        dummyContact: style(inner.querySelector('.lfab')).display,
        hiddenSections: [...main.querySelectorAll('.rv')].filter(el => style(el).opacity === '0').length,
        sections: main.querySelectorAll('section').length,
        frameHeight: frame.getBoundingClientRect().height,
        contentHeight: main.getBoundingClientRect().bottom,
        heading: main.querySelector('h1')?.textContent.trim()
      };
    })()` });
    result = response.result.value;
    if (result?.dummyHeader === 'none' && result.frameHeight >= result.contentHeight && result.frameHeight > 2000) break;
  }
  console.log(JSON.stringify(result, null, 2));
  if (!result) console.log(await call('Runtime.evaluate', { returnByValue: true, expression: 'JSON.stringify({url:location.href,title:document.title,body:document.body.innerText.slice(0,2000),frames:[...document.querySelectorAll("iframe")].map(f=>({src:f.src,html:f.contentDocument?.body?.innerText.slice(0,300)}))})' }));
  assert.equal(result.headers, 1);
  assert.equal(result.footers, 1);
  assert.equal(result.dummyHeader, 'none');
  assert.equal(result.dummyFooter, 'none');
  assert.equal(result.dummyContact, 'none');
  assert.equal(result.hiddenSections, 0);
  assert.ok(result.sections >= 5);
  assert.ok(result.frameHeight >= result.contentHeight);
  assert.ok(result.frameHeight > 2000);
  if (route !== 'cloud-marketplace') {
  const support = await call('Runtime.evaluate', { returnByValue: true, expression: `(() => {
    const band = document.querySelector('.marketplace-support');
    const image = band?.querySelector('.pp-cta-buddha');
    return {
      heading: band?.querySelector('h3')?.textContent,
      buttons: band?.querySelectorAll('.marketplace-support-actions .btn').length,
      badges: band?.querySelectorAll('.pp-proof span').length,
      imageLoaded: image?.complete && image.naturalWidth > 0,
      placeholder: document.querySelector('iframe').contentWindow.getComputedStyle(document.querySelector('iframe').contentDocument.querySelector('.am-cta, .sm-ctab')).display
    };
  })()` });
  console.log('Support strip:', support.result.value);
  assert.equal(support.result.value.heading, route === 'ai-marketplace' ? 'Ready to start with AI Marketplace?' : 'Ready to start with Software Marketplace?');
  assert.equal(support.result.value.buttons, 6);
  assert.equal(support.result.value.badges, 5);
  assert.equal(support.result.value.imageLoaded, true);
  assert.equal(support.result.value.placeholder, 'none');
  }
  console.log(`${route} browser checks passed.`);
} finally {
  ws?.close();
  chrome.kill();
}
