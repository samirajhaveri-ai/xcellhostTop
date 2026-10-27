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
    await send('Page.enable');







const ts = require('typescript');
const compiled = ts.transpileModule(fs.readFileSync('src/app/sections/faq-customer-testimonials.ts','utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
await send('Page.navigate',{url:'http://127.0.0.1:4200/ai-training-integrated-program'});
const result = await evaluate(`(() => {
  const exports = {};
  const require = () => ({CUSTOMER_TESTIMONIALS:{},ENDPOINT_CUSTOMER_TESTIMONIALS:[{name:'Test Person',role:'Test role',quote:'Test review',rating:5}]});
  ${compiled}
  const check = (html) => {const doc=document.implementation.createHTMLDocument();doc.body.innerHTML=html;exports.ensureFaqCustomerTestimonials(doc);return doc;};
  const lab=check('<main><section id="labs"><article><h3>FAQ assistant</h3><p>Build an assistant.</p></article></section></main>');
  const mixed=check('<main><section id="labs"><article><h3>FAQ assistant</h3></article></section><section id="faq"><h2>Frequently Asked Questions</h2><details><summary>Question</summary>Answer</details></section></main>');
  const actual=check('<main><section id="faq"><h2>FAQs</h2></section></main>');
  const disabled=check('<main data-customer-testimonials="off"><section id="faq"><h2>FAQs</h2></section></main>');
  return {labUnchanged:!lab.querySelector('[data-auto-customer-testimonials]'),correctPlacement:mixed.querySelector('[data-auto-customer-testimonials]')?.nextElementSibling?.id==='faq',realFaqSupported:actual.querySelectorAll('[data-auto-customer-testimonials]').length===1,optOutRespected:!disabled.querySelector('[data-auto-customer-testimonials]')};
})()`);
require('node:assert/strict').ok(Object.values(result).every(Boolean),JSON.stringify(result));
console.log('FAQ regression checks:',result);
}finally{ws?.close();chrome?.kill();}})().catch(e=>{console.error(e);process.exitCode=1;});
