import fs from 'node:fs';
import vm from 'node:vm';
import { parse } from 'parse5';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied gaming-dedicated-server.html file.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) { nodes.push(node); node.childNodes?.forEach(visit); }
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const original = node => {
  if (!node?.sourceCodeLocation) throw new Error('Missing requested Gaming Servers source content.');
  return source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
};
const stage = nodes.find(node => attr(node, 'id') === 'gdStage');
const sections = ['overview', 'servers', 'configure', 'why', 'ping', 'ddos', 'sizing', 'stack', 'usecases', 'vs', 'steps'];
const content = sections.map(id => original(nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id))).join('\n');
const fonts = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'stylesheet').map(original).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(original).join('\n');
const productRuntime = nodes.filter(node => node.tagName === 'script').map(text).find(script => script.includes("$id('gdCard')") && script.includes('var XH=window.XH'));
if (!productRuntime) throw new Error('Missing supplied Gaming Servers animation and tool runtime.');
const sharedDocument = fs.readFileSync('public/imported-certificate-management.html', 'utf8');
const sharedRuntime = [...sharedDocument.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)][0][1];
for (const runtime of [sharedRuntime, productRuntime]) new vm.Script(runtime);
const head = `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${fonts}${styles}`;
const scripts = `<script>${sharedRuntime}</script><script>${productRuntime}</script>`;
const common = 'html,body{height:auto;min-height:0}body{margin:0}main{display:flow-root}.rv{opacity:1!important;transform:none!important}';
fs.writeFileSync('public/gaming-servers-content.html', `${head}<title>Gaming Dedicated Servers: plans, configurator, ping map, DDoS demo and setup</title>
<style>${common}.wrap{width:100%;max-width:none;padding:0}.sec{padding:0 0 40px}.gd-ch{translate:none!important}.gd-vs{overflow:clip}.gd-vs.in ul.ok li{transform:none}</style>
</head><body><main>${content}</main>${scripts}</body></html>\n`);
fs.writeFileSync('public/gaming-servers-hero.html', `${head}<title>Gaming Dedicated Server animated console: server startup, ping, DDoS protection and mods</title>
<style>${common}html,body{background:transparent}#gdHero{background:transparent;padding:0;min-height:0;overflow:hidden}
#gdHero .gd-stage{width:100%;margin:0;opacity:1;transform:none}#gdHero .lh-tilt{transform:none!important}
@media(min-width:480px){
  #gdHero .gd-stage{flex-direction:column;flex-wrap:nowrap;gap:0;padding:44px 8px 12px}
  #gdHero .gd-stage>.lh-tilt{width:min(364px,68%);order:0}
  #gdHero .gd-from{width:auto;margin-bottom:-14px}
  #gdHero .gd-sat{display:flex;position:absolute;animation:none}
  #gdHero .gd-sat.s1{left:0!important;right:auto!important;top:150px!important}
  #gdHero .gd-sat.s2{right:0!important;left:auto!important;top:112px!important}
  #gdHero .gd-sat.s3{left:0!important;right:auto!important;top:296px!important}
  #gdHero .gd-sat.s4{right:0!important;left:auto!important;top:404px!important}
  #gdHero .gd-lnk,#gdHero .gd-orb{display:block}
  #gdHero .gd-log{width:min(440px,94%);order:0}
}
@media(max-width:479px){#gdHero .gd-stage{padding:12px 8px;gap:14px}#gdHero .gd-stage>.lh-tilt{width:100%}#gdHero .gd-log{width:100%;margin:0}}
</style></head><body><main><section class="hero lh gd-hero" id="gdHero" data-s="0">${original(stage)}</section></main>${scripts}</body></html>\n`);
console.log('Imported the supplied four-scene Gaming Servers hero and overview through the five setup steps.');
