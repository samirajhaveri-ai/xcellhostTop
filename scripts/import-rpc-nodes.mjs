import fs from 'node:fs';
import vm from 'node:vm';
import { parse } from 'parse5';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied dedicated-rpc-node-server.html file.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) { nodes.push(node); node.childNodes?.forEach(visit); }
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const original = node => {
  if (!node?.sourceCodeLocation) throw new Error('Missing requested RPC Nodes source content.');
  return source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
};
const stage = nodes.find(node => attr(node, 'id') === 'rnStage');
const sections = ['overview', 'pricing', 'configure', 'nodes', 'features', 'vs', 'steps', 'sizing', 'cost', 'endpoint', 'usecases', 'locations', 'chains', 'why', 'india', 'request'];
const content = sections.map(id => original(nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id))).join('\n')
  .replaceAll('href="virtual-load-balancer.html"', 'href="/virtual-load-balancer" target="_top"')
  .replaceAll('href="virtual-firewalls.html"', 'href="/virtual-firewalls" target="_top"');
const fonts = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'stylesheet').map(original).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(original).join('\n');
const productRuntime = nodes.filter(node => node.tagName === 'script').map(text).find(script => script.includes("$id('rnCard')") && script.includes('var XH=window.XH'));
if (!productRuntime) throw new Error('Missing supplied RPC Nodes animation and tool runtime.');
const sharedDocument = fs.readFileSync('public/imported-certificate-management.html', 'utf8');
let sharedRuntime = [...sharedDocument.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)][0][1];
sharedRuntime = sharedRuntime.replace("document.dispatchEvent(new CustomEvent('import-callback',{detail:'Podcast enquiry: '+f.getAttribute('data-xhform')}));", "const data=Object.fromEntries(new FormData(f).entries());data.chain_name=f.querySelector('[name=chain]')?.selectedOptions[0]?.textContent||data.chain;document.dispatchEvent(new CustomEvent('import-rpc-request',{detail:data}));");
if (!sharedRuntime.includes('import-rpc-request')) throw new Error('Missing form integration.');
for (const runtime of [sharedRuntime, productRuntime]) new vm.Script(runtime);
const head = `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${fonts}${styles}`;
const scripts = `<script>${sharedRuntime}</script><script>${productRuntime}</script>`;
const common = 'html,body{height:auto;min-height:0}body{margin:0}main{display:flow-root}.rv{opacity:1!important;transform:none!important}';
fs.writeFileSync('public/rpc-nodes-content.html', `${head}<title>Dedicated RPC Nodes: plans, configurator, sizing, cost, endpoint builder and request</title>
<style>${common}.wrap{width:100%;max-width:none;padding:0}.sec{padding:0 0 40px}.rn-ch{translate:none!important}.rn-vs{overflow:clip}.rn-vs.in ul.ok li{transform:none}</style>
</head><body data-preserve-copy><main>${content}</main>${scripts}</body></html>\n`);
fs.writeFileSync('public/rpc-nodes-hero.html', `${head}<title>Dedicated RPC Node animated console: provisioning, RPC traffic, failover and dedicated hardware</title>
<style>${common}html,body{background:transparent}#rnHero{background:transparent;padding:0;min-height:0;overflow:hidden}
#rnHero .rn-stage{width:100%;margin:0;opacity:1;transform:none}#rnHero .lh-tilt{transform:none!important}
@media(min-width:480px){
  #rnHero .rn-stage{flex-direction:column;flex-wrap:nowrap;gap:0;padding:44px 8px 12px}
  #rnHero .rn-stage>.lh-tilt{width:min(364px,68%);order:0}
  #rnHero .rn-from{width:auto;margin-bottom:-14px}
  #rnHero .rn-sat{display:flex;position:absolute;animation:none}
  #rnHero .rn-sat.s1{left:0!important;right:auto!important;top:150px!important}
  #rnHero .rn-sat.s2{right:0!important;left:auto!important;top:112px!important}
  #rnHero .rn-sat.s3{left:0!important;right:auto!important;top:296px!important}
  #rnHero .rn-sat.s4{right:0!important;left:auto!important;top:404px!important}
  #rnHero .rn-lnk,#rnHero .rn-orb{display:block}
  #rnHero .rn-log{width:min(440px,94%);order:0}
}
@media(max-width:479px){#rnHero .rn-stage{padding:12px 8px;gap:14px}#rnHero .rn-stage>.lh-tilt{width:100%}#rnHero .rn-log{width:100%;margin:0}}
</style></head><body data-preserve-copy><main><section class="hero lh rn-hero" id="rnHero" data-s="0">${original(stage)}</section></main>${scripts}</body></html>\n`);
console.log('Imported the supplied RPC Nodes hero and overview through the request form.');
