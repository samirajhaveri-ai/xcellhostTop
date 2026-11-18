import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const out = resolve('output/object-storage-check');
mkdirSync(out, { recursive: true });
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=9341', `--user-data-dir=${out}/chrome-profile`, 'about:blank',
], { stdio: 'ignore', windowsHide: true });
const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
let socket;
try {
  let target;
  for (let i = 0; i < 50; i++) {
    try { target = (await (await fetch('http://127.0.0.1:9341/json/list')).json()).find(t => t.type === 'page'); if (target) break; } catch {}
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

  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', {width:1440,height:1000,deviceScaleFactor:1,mobile:false});
  await send('Page.navigate', {url:'http://localhost:4200/cloud-object-storage'});
  await waitFor('!!document.querySelector("xh-imported-interactive-content iframe")?.contentDocument?.getElementById("cfTot")','imported page');
  await pause(2500);
  const inspect = () => evaluate('(()=>{const d=document.querySelector("xh-imported-interactive-content iframe").contentDocument;return {title:d.querySelector("h1").innerText,faq:d.querySelectorAll("#faq .fq").length,total:d.querySelector("#cfTot").textContent,width:d.documentElement.clientWidth,scroll:d.documentElement.scrollWidth,ai:[...d.querySelectorAll(".lh-ask a")].map(a=>new URL(a.href).hostname),hero:d.querySelector("#cqHero").getBoundingClientRect().height,overflow:[...d.querySelectorAll("main *")].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&r.right>d.documentElement.clientWidth+3}).slice(0,12).map(e=>e.tagName+"."+e.className)}})()');
  console.log('DESKTOP',JSON.stringify(await inspect()));
  console.log('TOOLS',await evaluate('(()=>{const d=document.querySelector("iframe").contentDocument;const t=d.querySelector("#cfTb");t.value=2;t.dispatchEvent(new Event("input",{bubbles:true}));const b=d.querySelector("#faq .fq button");b.click();d.querySelector("#cqRail button:nth-child(3)").click();return {total:d.querySelector("#cfTot").textContent,faq:b.getAttribute("aria-expanded"),scene:d.querySelector("#cqRail [aria-selected=true]").textContent}})()'));
  writeFileSync(out+'/desktop.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
  await evaluate('document.querySelector("iframe").contentDocument.querySelector("[data-topic*=trial]").click()');await pause(400);
  console.log('TRIAL',await evaluate('document.body.innerText.slice(-5000)'));
  await send('Page.navigate', {url:'http://localhost:4200/cloud-object-storage'});await pause(2000);
  await evaluate('document.querySelector("iframe").contentDocument.querySelector("#oAdd").click()');await pause(400);
  console.log('CART',await evaluate('document.body.innerText.slice(-4500)'));
  await send('Page.navigate', {url:'http://localhost:4200/cloud-object-storage'});await pause(1500);
  await send('Emulation.setDeviceMetricsOverride', {width:390,height:844,deviceScaleFactor:1,mobile:true});await pause(1500);
  console.log('MOBILE',JSON.stringify(await inspect()));
  writeFileSync(out+'/mobile.png',Buffer.from((await send('Page.captureScreenshot',{format:'png'})).data,'base64'));
  console.log('ERRORS',JSON.stringify(errors));
} finally { socket?.close(); chrome.kill(); }
