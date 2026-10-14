import fs from 'node:fs';
import { parse } from 'parse5';

// Treat the supplied document as page content; retain the Angular site shell.
const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied xcellhost-windows-365.html path.');
const source = fs.readFileSync(sourcePath, 'utf8');
const document = parse(source, { sourceCodeLocationInfo: true });
const nodes = [];
function visit(node) {
  nodes.push(node);
  node.childNodes?.forEach(visit);
}
visit(document);
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const original = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const textContent = node => node.nodeName === '#text' ? node.value :
  (node.childNodes ?? []).map(textContent).join('');
const faqSection = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'faq');
if (!faqSection) throw new Error('Missing supplied Windows 365 FAQ.');
const faqNodes = [];
function collectFaqs(node) {
  if (attr(node, 'class')?.split(' ').includes('fq')) faqNodes.push(node);
  node.childNodes?.forEach(collectFaqs);
}
collectFaqs(faqSection);
const faqs = faqNodes.slice(0, 8).map(node => [
  textContent(node.childNodes.find(child => child.tagName === 'button')).trim(),
  textContent(node.childNodes.find(child => attr(child, 'class') === 'fa')).trim(),
]);
if (faqs.length !== 8) throw new Error('Expected eight Windows 365 questions.');
fs.writeFileSync('src/app/data/windows-365-faq.data.ts',
  '// Eight questions from the supplied Windows 365 page, rendered in the shared FAQ section.\n' +
  'export const WINDOWS_365_FAQS: [string, string][] = ' + JSON.stringify(faqs, null, 2) + ';\n');
const sectionIds = ['pricing', 'finder', 'configure', 'apps', 'drivers', 'journey', 'how', 'managed', 'services', 'persist', 'better', 'fits', 'cta1', 'finance', 'speed', 'tco', 'latency', 'uses', 'offer', 'brochure', 'setups', 'onprem', 'family'];
const sections = sectionIds.map(id => {
  const node = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id);
  if (!node) throw new Error(`Missing requested section: ${id}`);
  return original(node);
}).join('\n');
const fonts = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'stylesheet')
  .map(original).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(original).join('\n');
const scripts = nodes.filter(node => node.tagName === 'script').map(node => node.childNodes?.[0]?.value ?? '');
const suppliedRuntime = scripts.findLast(script => script.includes('var XH=window.XH') && script.includes('w3v'));
if (!suppliedRuntime) throw new Error('Missing managed PKI interactive runtime.');
// Calculator and builder buttons scroll the outer Angular page to their result.
let productRuntime = suppliedRuntime.replaceAll('window.scrollTo({top:', 'scrollToParent({top:')
  .replace('function noop(){}', `function noop(){}
  function scrollToParent(o){var host=window.frameElement;if(host){o.top+=host.getBoundingClientRect().top+window.parent.scrollY-window.scrollY-64;window.parent.scrollTo(o);}else window.scrollTo(o);}`);
// Use the outer page viewport for the embedded scroll-driven journey.
const journeyStart = productRuntime.indexOf("    var jr=$id('w3Jr');");
const journeyEnd = productRuntime.indexOf('  })();', journeyStart);
if (journeyStart < 0 || journeyEnd < 0) throw new Error('Missing Windows 365 journey runtime.');
const journeyRuntime = productRuntime.slice(journeyStart, journeyEnd)
  .replace(/    function measure\(\)\{[\s\S]*?(?=    function sizeBig)/, `    var journeyWindow=window.frameElement?window.parent:window;
    function measure(){
      var host=window.frameElement,offset=host?host.getBoundingClientRect().top:0,vh=journeyWindow.innerHeight,y=vh*.5;
      if(host&&!window.matchMedia('(max-width:900px)').matches){
        var height=Math.min(520,Math.max(280,vh-180));
        $('.jr-rail',jv).style.height=height+'px';$('.jr-in',jv).style.height=height+'px';
        jv.style.position='relative';jv.style.top='0';
        var bounds=jr.getBoundingClientRect(),travel=Math.max(0,bounds.height-jv.offsetHeight);
        jv.style.transform='translateY('+clamp(148-bounds.top-offset,0,travel)+'px)';
      }else{jv.style.transform='';}
      var cs=lis.map(function(l){var rc=l.getBoundingClientRect();return rc.top+offset+rc.height/2;}),n=NL-1;
      if(y<=cs[0])pT=0;else if(y>=cs[n])pT=n;
      else for(var k=0;k<n;k++){if(y>=cs[k]&&y<cs[k+1]){pT=k+(y-cs[k])/(cs[k+1]-cs[k]);break;}}
    }
`)
  .replace("    measure();pS=pT;", "    journeyWindow.addEventListener('scroll',measure,{passive:true});journeyWindow.addEventListener('resize',function(){measure();sizeBig();});\n    measure();pS=pT;")
  .replace("      addEventListener('scroll',stat", "      journeyWindow.addEventListener('scroll',stat")
  .replace("addEventListener('resize',stat)", "journeyWindow.addEventListener('resize',stat)");
productRuntime = productRuntime.slice(0, journeyStart) + journeyRuntime + productRuntime.slice(journeyEnd);
// Reuse the site's existing imported-content runtime and its callback/cart bridge.
const existing = fs.readFileSync('public/imported-certificate-management.html', 'utf8');
const sharedRuntime = [...existing.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)][0][1];
const routeMap = {
  'general-compute.html': '/general-compute',
  'xcellhost-vps-hosting.html': '/vps-hosting',
  'xcellhost-microsoft-visio.html': '/microsoft-visio',
  'xcellhost-acronis-direct-cloud-backup.html': '/acronis-direct-cloud-backup',
  'xcellhost-matter-dac.html': '/matter-dac',
  'xcellhost-server-monitoring.html': '/tsplus-server-monitoring',
  'xcellhost-ssl-installation-service.html': '/ssl-installation-service',
  'sitelock-website-security.html': '/website-security-solutions',
  'xcellhost-acme-certificate.html': '/acme-certificate',
  'xcellhost-cloud-code-signing.html': '/cloud-code-signing',
  'xcellhost-iot-device-certificates.html': '/iot-device-certificates',
  'xcellhost-managed-pki.html': '/managed-pki',
  'email-signing-certificates.html': '/email-signing-certificates',
  'xcellhost-iot-pki.html': '/iot-pki',
  'xcellhost-private-ca.html': '/private-ca',
  'xcellhost-code-signing.html': '/code-signing-certificates',
  'code-signing-certificates.html': '/code-signing-certificates',
  'xcellhost-clm-solutions.html': '/certificate-mgmt-solutions',
  'xcellhost-windows-365.html': '/windows-365',
  'certificate-management.html': '/certificate-management',
  'xcellhost-digicert-certificates.html': '/digicert-ssl-certificates',
};
const content = sections.replace(/href="([^"#]+\.html)"/g, (match, href) => {
  if (!routeMap[href]) throw new Error(`Unmapped link: ${href}`);
  return `href="${routeMap[href]}" target="_top"`;
});
const head = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">';
const scriptTags = `<script>${sharedRuntime}</script><script>${productRuntime}</script>`;
// The hero document has no pricing inputs; omit the pricing initializer there.
const heroScriptTags = scriptTags;
fs.writeFileSync('public/imported-windows-365.html', `${head}<title>Windows 365 features, tools and pricing</title>${fonts}${styles}
<style>html,body{height:auto;min-height:0}body{margin:0}main{display:flow-root}#overview .pp-cols{grid-template-columns:minmax(0,1fr);gap:18px}#overview .pp-ov{max-width:none}.wrap{width:100%;max-width:1200px;padding:0}.sec{padding:42px 0}.rv{opacity:1!important;transform:none!important}.jr-st{padding:16px 0;gap:16px}.jr-st li{min-height:260px;opacity:.7}.jr-st li.on{opacity:1}@media(max-width:900px){.jr-st{padding:0}.jr-st li{min-height:0;opacity:1}}a:focus-visible,button:focus-visible{outline:3px solid var(--orange);outline-offset:3px}</style>
</head><body><main id="main">${content}</main>${scriptTags}</body></html>\n`);

const stage = nodes.find(node => attr(node, 'class')?.split(' ').includes('stage') &&
  original(node).includes('id="w3v"'));
if (!stage) throw new Error('Missing supplied hero visual.');
fs.writeFileSync('public/imported-windows-365-hero.html', `${head}<title>Windows 365 certificate authority animation</title>${fonts}${styles}
<style>html,body{height:auto;min-height:0;background:transparent}body{margin:0}#w3Hero{background:transparent;padding:0;min-height:0!important;overflow:visible}#w3Hero .stage{width:100%;max-width:none;min-height:0;padding:0;margin:0;opacity:1;transform:none}#w3Hero .lh-tilt{transform:none!important}#w3Hero .pq{width:100%}#w3Hero .lh-powered{margin-top:12px}</style>
</head><body><main><section class="hero lh" id="w3Hero">${original(stage)}</section></main>${heroScriptTags}</body></html>\n`);
console.log(`Imported ${sectionIds.length} requested sections and the hero visual.`);
