import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';

const integrated = process.argv.includes('--site');
const root = path.resolve(integrated ? '.tmp/fortinet-services-check/browser' : 'public');
const artifacts = path.resolve('.tmp/fortinet-services-browser');
fs.mkdirSync(artifacts, { recursive: true });
const capture = '<script>window.fzErrors=[];addEventListener("error",e=>fzErrors.push(e.message));</script>';
const test = `<script>
const assert=(ok,label)=>{if(!ok)throw Error(label)};
let tries=0;
const timer=setInterval(()=>{
  const frame=${integrated ? "document.querySelector('xh-imported-interactive-content iframe')" : 'null'};
  const doc=${integrated ? 'frame?.contentDocument' : 'document'};
  const app=doc?.defaultView;
  if((!app?.XH?.fzData||${integrated ? 'frame.getBoundingClientRect().height<2000' : 'false'})&&tries++<100)return;
  clearInterval(timer);
  try{
    assert(app?.XH?.fzData?.length===98,'98 source products');
    assert(doc.querySelectorAll('.fz-card').length===11,'11 catalogue categories');
    assert(!doc.querySelector('body > header,body > footer,body > .lnl-wrap'),'no duplicate site chrome');
    ${integrated ? `
    assert(location.pathname==='/vendor-partners/fortinet','canonical vendor partner URL');
    assert(document.querySelector('xh-header a[href="/vendor-partners/fortinet"]'),'Fortinet menu hover URL matches destination');
    assert(document.querySelector('link[rel="canonical"]')?.href.endsWith('/vendor-partners/fortinet'),'canonical SEO URL matches route');
    assert(document.querySelector('xh-header header'),'default header');
    assert(document.querySelector('xh-footer footer'),'default footer');
    assert(document.querySelector('xh-contact-options .newsletter'),'default newsletter');
    assert(!document.querySelector('xh-under-construction-page'),'construction placeholder removed');
    assert(doc.getElementById('fzHero').getBoundingClientRect().width<=frame.clientWidth+1,'hero fits viewport');
    const hero=doc.getElementById('fzHero');
    assert(hero.querySelectorAll('.fz-hero-points > div').length===4,'four compact hero highlights');
    assert(parseFloat(app.getComputedStyle(hero.querySelector('.fz-big')).fontSize)<=18,'compact hero tagline');
    assert(hero.querySelectorAll('[data-banner-action]').length===3,'three default hero buttons');
    assert(hero.querySelectorAll('.xh-banner-ai-links img').length===5,'icon-based Ask AI row');
    assert(!hero.querySelector('.fz-stats,#fzHS'),'catalogue controls moved out of hero');
    assert(doc.querySelector('#catalog .fz-catalog-stats'),'catalogue metrics retained');
    const reviews=doc.querySelector('.xh-testimonials-tally')||document.querySelector('.xh-testimonials-tally');
    assert(reviews?.querySelectorAll('.xh-testimonial-card').length===3,'matching three-card testimonial section');
    assert(!reviews.querySelector('.xh-testimonial-attribution'),'testimonial footer text omitted');
    const faqHeading=doc.querySelector('#faq .sh h2');
    assert(faqHeading.textContent==='Frequently asked questions','standard FAQ heading');
    assert(parseFloat(app.getComputedStyle(faqHeading).fontSize)===13,'small blue FAQ label');
    const closing=document.querySelector('.default-sections-closing-only #defaultStart');
    assert(closing?.querySelector('h3').textContent.includes('Ready to start with Fortinet Services?'),'standard Fortinet closing card');
    assert(closing.querySelectorAll('.default-actions > button,.default-actions > a').length===6,'six standard CTA actions');
    assert(closing.getBoundingClientRect().height>=150,'standard CTA card is visible');
    assert(closing.querySelector('.pp-cta-buddha')?.getAttribute('src').includes('laughing-buddha-white-text-transparent.png'),'actual support image');
    assert(!doc.querySelector('.fz-cta .lcta'),'source closing banner removed');
    assert(doc.querySelectorAll('.fz-cta .fz-xl > a').length===8,'related services retained above standard card');
    ${process.argv.includes('--closing') ? "frame.style.display='none';closing.scrollIntoView({block:'center',behavior:'instant'});" : ''}
    ` : `
    assert(fzErrors.length===0,fzErrors.join('; '));
    app.XH.fzSearch('fortigate');
    assert(app.XH.fzShown>0&&app.XH.fzShown<98,'catalogue search filters products');
    doc.getElementById('fzReset').click();
    assert(app.XH.fzShown===98,'reset restores all products');
    const category=doc.querySelector('.fz-all');category.click();
    assert(category.getAttribute('aria-expanded')==='true','category expands');
    doc.getElementById('fzSX').click();
    const product=doc.querySelector('.fz-sk');product.click();
    assert(product.getAttribute('aria-pressed')==='true','product added to stack');
    let item=null;doc.addEventListener('import-cart',e=>item=e.detail);doc.getElementById('fzSC').click();
    assert(item?.name&&item.qty===1,'stack forwards to native quote cart');
    doc.getElementById('fzSQ').click();
    const form=doc.getElementById('fzQF');assert(!form.hidden,'quotation form opens');
    doc.getElementById('fzFN').value='Browser Check';doc.getElementById('fzFP').value='9999999999';doc.getElementById('fzFE').value='check@example.com';
    let request=null;doc.addEventListener('import-training-enquiry',e=>request=e.detail);
    form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));
    assert(request?.name==='Browser Check'&&request.services,'quotation details forwarded');
    let topic='';doc.addEventListener('import-callback',e=>topic=e.detail);
    app.XH.open('xhCallback',{topic:'Fortinet Services browser check'});
    assert(topic,'consultation opens native callback');
    const faq=doc.querySelectorAll('.fq')[1];const expanded=faq.classList.contains('open');faq.querySelector('button').click();
    assert(faq.classList.contains('open')!==expanded,'FAQ accordion works');
    assert(fzErrors.length===0,fzErrors.join('; '));
    `}
    document.documentElement.dataset.fzCheck='PASS';
  }catch(error){document.documentElement.dataset.fzCheck='FAIL: '+error.message;}
},100);
</script>`;
const server = http.createServer((req, res) => {
  const requested = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let file = path.resolve(root, '.' + requested);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(root, fs.existsSync(path.join(root, 'index.html')) ? 'index.html' : 'index.csr.html');
  if (!fs.existsSync(file)) { res.writeHead(404).end(); return; }
  res.setHeader('Content-Type', ({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.woff2':'font/woff2'})[path.extname(file)] || 'application/octet-stream');
  let content = fs.readFileSync(file);
  if ((!integrated && requested === '/imported-fortinet-services.html') || (integrated && /index(?:\.csr)?\.html$/.test(file))) content = content.toString().replace('<head>', '<head>' + capture).replace('</body>', test + '</body>');
  res.end(content);
});
await new Promise(resolve => server.listen(4339, '127.0.0.1', resolve));
const html = await new Promise(resolve => {
  const startPath = integrated ? (process.argv.includes('--flat') ? 'fortinet-services' : 'vendor-partners/fortinet') : 'imported-fortinet-services.html';
  const child = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless','--no-sandbox','--disable-gpu','--no-first-run','--dump-dom','--virtual-time-budget=16000','--window-size=1440,1000',`--screenshot=${path.join(artifacts, integrated ? 'page.png' : 'content.png')}`, 'http://127.0.0.1:4339/' + startPath], {windowsHide:true});
  let output='';child.stdout.on('data',chunk=>output+=chunk);child.stderr.resume();child.on('exit',()=>resolve(output));setTimeout(()=>child.kill(),60000).unref();
});
server.close();
fs.writeFileSync(path.join(artifacts, integrated ? 'page.html' : 'content.html'), html);
const status = html.match(/data-fz-check="([^"]+)"/)?.[1] || 'FAIL: page did not finish loading';
console.log((integrated ? 'Integrated page' : 'Catalogue interactions') + ': ' + status);
if (status !== 'PASS') process.exitCode=1;
