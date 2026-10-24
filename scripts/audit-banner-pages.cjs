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
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
      return result.result.value;
    };
    await send('Page.enable');



    // Reuse the sitemap's route discovery without writing its generated output.
    const generator=fs.readFileSync(path.join(__dirname,'generate-sitemap.js'),'utf8');
    const all=new Function('require','__dirname',generator.split('const escape =')[0]+';return [...paths].sort();')(require,__dirname);
    fs.mkdirSync('output/banner-audit',{recursive:true});fs.writeFileSync('output/banner-audit/routes.json',JSON.stringify(all));
    const args=process.argv.slice(2),sample=args.includes('--sample'),shard=+(args.find(x=>/^--shard=/.test(x))||'--shard=0').split('=')[1];
    const only=args.find(x=>x.startsWith('--only='))?.slice(7).split(',');
    const routes=only|| (sample?['','tally-on-cloud','sectigo-ssl-certificates','server-management','resilience-operations','microsoft-365-enterprise','about-us','performance-cloud']:all.filter((_,i)=>i%2===shard));
    const suffix=only?'retry':sample?'sample':shard;const resume=args.includes('--resume');const results=resume?JSON.parse(fs.readFileSync('output/banner-audit/results-'+suffix+'.json','utf8')):[];const manifest=resume?JSON.parse(fs.readFileSync('output/banner-audit/manifest-'+suffix+'.json','utf8')):{};fs.mkdirSync('output/banner-audit/tours',{recursive:true});
    await send('Emulation.setDeviceMetricsOverride',{width:1366,height:900,deviceScaleFactor:1,mobile:false});
    await send('Network.enable');await send('Network.setBlockedURLs',{urls:['*zohocdn*','*salesiq*','*google-analytics*','*googletagmanager*','*clarity.ms*']});
    const inspect=`(()=>{const out=[],unmatched=[];function scan(r){r.querySelectorAll('[data-banner-ready]').forEach(h=>{const a=h.querySelector('.xh-banner-ai-nowrap');out.push({title:h.querySelector('h1')?.textContent,original:JSON.parse(h.dataset.bannerOriginalActions||'{}'),added:[...h.querySelectorAll('[data-banner-action]')].map(b=>b.dataset.bannerAction),ai:!!a,wrap:a&&h.ownerDocument.defaultView.getComputedStyle(a).flexWrap,aiWidth:a?.getBoundingClientRect().width});});r.querySelectorAll('h1').forEach(h=>{if(!h.closest('[data-banner-ready]'))unmatched.push({text:h.textContent.slice(0,100),parent:h.parentElement.className,grand:h.parentElement.parentElement?.className});});r.querySelectorAll('*').forEach(e=>{if(e.shadowRoot)scan(e.shadowRoot);if(e.tagName==='IFRAME'){try{if(e.contentDocument&&e.contentDocument.URL!=='about:blank')scan(e.contentDocument);}catch{}}});}scan(document);return {path:location.pathname,heroes:out,unmatched,body:(document.body?.innerText||'').slice(-220),overflow:document.documentElement.scrollWidth>innerWidth};})()`;
    for(let n=results.length;n<routes.length;n++){
      const slug=routes[n];await send('Page.navigate',{url:'http://localhost:4200/'+slug});
      let result;for(let k=0;k<65;k++){await new Promise(r=>setTimeout(r,120));try{result=await evaluate(inspect);}catch{continue;}if(result.heroes.length||result.unmatched.length||/No data|not found/i.test(result.body))break;}
      await new Promise(r=>setTimeout(r,sample?3000:1000));for(let attempt=0;attempt<10;attempt++){try{result=await evaluate(inspect);break;}catch{await new Promise(r=>setTimeout(r,250));}}result.route='/'+slug;results.push(result);
      if(result.heroes.some(h=>h.added.includes('tour'))){
        await evaluate(`(()=>{const s=document.createElement('style');s.textContent='xh-intro-splash,.zsiq_floatmain,.zsiq_theme1,.zsiq_theme2,[class*=cookie-banner],[id*=cookie-banner],#cookieConsent{display:none!important}';document.head.appendChild(s);window.scrollTo({top:0,behavior:'instant'});})();`);
        const key=slug.replace(/[^a-zA-Z0-9-]/g,'--')||'home';const shot=await send('Page.captureScreenshot',{format:'webp',quality:62});fs.writeFileSync('output/banner-audit/tours/'+key+'.webp',Buffer.from(shot.data,'base64'));manifest[result.path.replace(/\/$/,'')||'/']=[{image:'/assets/banner-tours/'+key+'.webp',title:'Page overview - '+(result.heroes[0]?.title||slug)}];
      }
      if(sample||n%20===19)console.log(JSON.stringify({done:n+1,total:routes.length,route:slug,heroes:result.heroes,unmatched:result.unmatched}));
      fs.writeFileSync('output/banner-audit/results-'+suffix+'.json',JSON.stringify(results,null,2));fs.writeFileSync('output/banner-audit/manifest-'+suffix+'.json',JSON.stringify(manifest));
    }
    console.log('COMPLETE',results.length,'routes;',Object.keys(manifest).length,'new screenshot tours');
  }finally{ws?.close();chrome?.kill();}
})().catch(e=>{console.error(e);process.exitCode=1;});
