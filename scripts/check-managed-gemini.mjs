import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { spawn } from 'node:child_process';
import http from 'node:http';

const chrome = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const checks = {
  content: `
    assert(document.querySelectorAll('main > section').length===12,'section selection');
    assert(document.getElementById('cTot').textContent.includes('₹'),'configurator initial total');
    const before=document.getElementById('cTot').textContent;
    document.querySelector('#cPlan button[data-v="adopt"]').click();
    assert(document.getElementById('cTot').textContent!==before,'plan switch');
    const users=document.getElementById('cUsers');const initial=+users.value;
    users.parentNode.querySelector('[data-step="1"]').click();
    assert(+users.value===initial+5,'quantity stepper');
    assert(document.getElementById('pT').textContent!=='—','edition picker initial result');
    const pick=document.getElementById('pT').textContent;
    document.querySelector('#pWho button[data-v="dev"]').click();
    assert(document.getElementById('pT').textContent!==pick,'edition picker change');
    document.getElementById('pGo').click();
    assert(+document.getElementById('cApps').value>0,'picker configures plan');
    const result=window.gmRoi(100,.6,2,60000,0,349);
    assert(Math.abs(result.hrs-519.6)<.01 && result.cost===34900,'ROI calculation');
    const old=document.getElementById('rVal').textContent;
    const range=document.getElementById('rU');range.value='200';range.dispatchEvent(new Event('input'));
    assert(document.getElementById('rVal').textContent!==old,'ROI input update');
    const faq=document.querySelectorAll('.fq')[1];faq.querySelector('button').click();
    assert(faq.classList.contains('open'),'FAQ expansion');
    let items=0;document.addEventListener('import-add',()=>items++);document.getElementById('oAdd').click();assert(items>0,'cart event');
    let quote=false;document.addEventListener('import-callback',()=>quote=true);document.getElementById('cQuote').click();assert(quote,'quote event');
  `,
  hero: `
    assert(document.querySelectorAll('canvas').length>0,'hero canvases');
    assert(typeof window.gmShow==='function','hero animation initialized');
    window.gmShow(2,4500);
    assert(document.getElementById('gmLog').children.length>0,'hero scene renders');
    assert(document.getElementById('gmK0').textContent!=='0','hero metrics update');
  `,
};
fs.mkdirSync('output/gemini-smoke', { recursive: true });
for (const [kind, check] of Object.entries(checks)) {
  const capture = `<script>window.errors=[];window.addEventListener('error',e=>errors.push(e.message));</script>`;
  const test = `<script>function assert(ok,label){if(!ok)throw new Error(label)}try{${check}assert(errors.length===0,errors.join('; '));document.documentElement.setAttribute('data-smoke','PASS')}catch(e){document.documentElement.setAttribute('data-smoke','FAIL: '+e.message)}</script>`;
  const html=fs.readFileSync(`public/imported-gemini-${kind}.html`,'utf8').replace('<head>','<head>'+capture).replace('</body>',test+'</body>');
  const file=path.resolve(`output/gemini-smoke/${kind}.html`);fs.writeFileSync(file,html);
  const result=spawnSync(chrome,['--headless','--no-sandbox','--disable-gpu','--disable-crash-reporter','--no-first-run','--dump-dom','--virtual-time-budget=2500','--window-size=1280,900',pathToFileURL(file).href],{encoding:'utf8',windowsHide:true,maxBuffer:8*1024*1024,timeout:30000});
  const status=result.stdout?.match(/data-smoke="([^"]+)"/)?.[1]||`Browser failed: ${result.error?.message||result.stderr?.slice(-500)}`;
  console.log(`${kind}: ${status}`);
  if(status!=='PASS')process.exitCode=1;
}

if (process.argv.includes('--site')) {
  const root=path.resolve('output/gemini-check/browser');
  const siteCheck=`<script>
    let tries=0;const timer=setInterval(()=>{const frame=document.querySelector('xh-gemini-managed-content#ppOv iframe');if((!frame?.contentDocument?.getElementById('cTot')||frame.getBoundingClientRect().height<3000)&&tries++<80)return;clearInterval(timer);
    try{const assert=(ok,label)=>{if(!ok)throw new Error(label)};
    assert(frame,'imported content in product body');
    assert(document.querySelector('.gemini-managed-hero-art iframe'),'right hero visual');
    const text=document.body.innerText;
    assert(document.getElementById('ppSecHead'),'shared security section');
    assert(document.getElementById('ppWhyHead'),'shared Why XcellHost section');
    assert(document.getElementById('ppBlog'),'shared blog section');
    for(const title of ['Watch it in action','What customers say','Frequently asked questions','Ready to start with'])assert(text.toLowerCase().includes(title.toLowerCase()),title);
    assert(document.querySelectorAll('.gemini-hero-features li').length===4,'four left hero features');
    assert(text.includes('Google Gemini, switched on safely — and actually used.'),'Gemini hero tagline');
    assert(text.includes('with rupee billing and a 24×7 Mumbai team.'),'Gemini hero paragraph');
    assert(document.querySelector('.gemini-hero-typewriter span'),'Gemini hero typing text');
    const title=document.getElementById('ppTitle');
    assert(title.scrollWidth<=title.clientWidth+2,'heading fits the text column');
    assert(title.getBoundingClientRect().height<=parseFloat(getComputedStyle(title).fontSize)*1.4,'heading stays on one line');
    const hero=document.querySelector('.pp-hero'),left=hero.querySelector(':scope > .wrap'),right=hero.querySelector('.gemini-managed-hero-art'),para=left.querySelector('.pp-tagline-support');
    const l=left.getBoundingClientRect(),r=right.getBoundingClientRect(),p=para.getBoundingClientRect(),h=hero.getBoundingClientRect();
    document.documentElement.setAttribute('data-hero-geometry',JSON.stringify({left:l.toJSON(),right:r.toJSON(),hero:h.toJSON(),grid:getComputedStyle(hero).gridTemplateColumns,rightWidth:getComputedStyle(right).width}));
    assert(p.left>=l.left-1&&p.right<=l.right+1,'paragraph stays inside left column');
    assert(getComputedStyle(para).whiteSpace==='normal','paragraph wraps');
    if(innerWidth>900){
      assert(Math.abs((l.top+l.bottom-r.top-r.bottom)/2)<3,'hero columns vertically centered');
      assert(Math.abs((l.left+r.right-h.left-h.right)/2)<3,'hero columns horizontally centered');
    }else{
      assert(r.top>=l.bottom,'demo stacks below copy');
      assert(Math.abs((r.left+r.right-h.left-h.right)/2)<3,'stacked demo centered');
      assert(p.right<=innerWidth&&r.right<=innerWidth,'hero fits mobile viewport');
    }
    assert(document.querySelector('header'),'header');assert(document.querySelector('footer'),'footer');
    assert(frame.getBoundingClientRect().height>3000,'frame expands to content');
    document.documentElement.setAttribute('data-site-smoke','PASS');
    }catch(e){document.documentElement.setAttribute('data-site-smoke','FAIL: '+e.message)}},100);
  </script>`;
  const server=http.createServer((req,res)=>{
    let file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
    if(!file.startsWith(root)){res.writeHead(403).end();return;}
    if(!fs.existsSync(file)||fs.statSync(file).isDirectory())file=path.join(root,fs.existsSync(path.join(root,'index.html'))?'index.html':'index.csr.html');
    const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2'};
    res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');
    let content=fs.readFileSync(file);if(/index(?:\.csr)?\.html$/.test(file))content=content.toString().replace('</body>',siteCheck+'</body>');res.end(content);
  });
  await new Promise(resolve=>server.listen(4329,'127.0.0.1',resolve));
  const result=await new Promise(resolve=>{
    const mobile=process.argv.includes('--mobile');
    const child=spawn(chrome,['--headless','--no-sandbox','--disable-gpu','--no-first-run','--dump-dom','--virtual-time-budget=12000',mobile?'--window-size=500,1000':'--window-size=1440,1000',`--screenshot=${path.resolve(mobile?'output/gemini-smoke/site-mobile.png':'output/gemini-smoke/site.png')}`,'http://127.0.0.1:4329/gemini-managed-services'],{windowsHide:true});
    let stdout='';child.stdout.on('data',c=>stdout+=c);child.stderr.resume();child.on('exit',()=>resolve(stdout));setTimeout(()=>child.kill(),45000).unref();
  });
  server.close();
  fs.writeFileSync('output/gemini-smoke/site.html',result);
  if(result.includes('data-site-smoke="FAIL'))console.log(result.match(/data-hero-geometry="([^"]+)"/)?.[1]);
  const status=result.match(/data-site-smoke="([^"]+)"/)?.[1]||'FAIL: route did not finish loading';console.log('site: '+status);if(status!=='PASS')process.exitCode=1;
}
