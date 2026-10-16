import fs from 'node:fs';
import vm from 'node:vm';
import { parse } from 'parse5';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied docusign.html file.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) { nodes.push(node); node.childNodes?.forEach(visit); }
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const original = node => {
  if (!node?.sourceCodeLocation) throw new Error('Missing requested Docusign source content.');
  return source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
};
const stage = nodes.find(node => attr(node, 'id') === 'dsStage');
const background = nodes.find(node => attr(node, 'class') === 'hero-bg');
const sections = ['overview', 'included', 'features', 'iam', 'vs', 'india', 'security', 'pricing', 'addons', 'configure', 'usecases', 'how', 'integrations', 'tools'];
const content = sections.map(id => original(nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id))).join('\n')
  .replaceAll('href="digicert-document-signing-certificate.html"', 'href="#" data-open="xhCallback" data-topic="DigiCert Document Signing certificate — enquiry"');
const fonts = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'stylesheet').map(original).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(original).join('\n');
const productRuntime = nodes.filter(node => node.tagName === 'script').map(text).find(script => script.includes("$id('dsCard')") && script.includes('var XH=window.XH'));
if (!productRuntime) throw new Error('Missing supplied Docusign animation and tool runtime.');
const sharedDocument = fs.readFileSync('public/imported-certificate-management.html', 'utf8');
const sharedRuntime = [...sharedDocument.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)][0][1];
for (const runtime of [sharedRuntime, productRuntime]) new vm.Script(runtime);
const head = `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${fonts}${styles}`;
const scripts = `<script>${sharedRuntime}</script><script>${productRuntime}</script>`;
const common = 'html,body{height:auto;min-height:0}body{margin:0}main{display:flow-root}.rv{opacity:1!important;transform:none!important}';
fs.writeFileSync('public/docusign-content.html', `${head}<title>Docusign eSignature and IAM: overview, features, pricing, configurator, use cases and tools</title>
<style>${common}.wrap{width:100%;max-width:none;padding:0}.sec{padding:0 0 40px}.ds-ch{translate:none!important}.ds-vs{overflow:clip}.ds-vs.in ul.ok li{transform:none}</style>
</head><body data-preserve-copy><main>${content}</main>${scripts}</body></html>\n`);
fs.writeFileSync('public/docusign-hero.html', `${head}<title>Docusign animated signing, mobile, audit trail, bulk send and IAM console</title>
<style>${common}html,body{background:transparent}#dsHero{background:transparent;padding:0;min-height:0;overflow:hidden}
#dsHero .ds-stage{width:100%;margin:0;opacity:1;transform:none}#dsHero .lh-tilt{transform:none!important}
@media(min-width:480px){
  #dsHero .ds-stage{flex-direction:column;flex-wrap:nowrap;gap:0;padding:44px 8px 12px}
  #dsHero .ds-stage>.lh-tilt{width:min(364px,68%);order:0}
  #dsHero .ds-from{width:auto;margin-bottom:-14px}
  #dsHero .ds-sat{display:flex;position:absolute;animation:none}
  #dsHero .ds-sat.s1{left:0!important;right:auto!important;top:150px!important}
  #dsHero .ds-sat.s2{right:0!important;left:auto!important;top:112px!important}
  #dsHero .ds-sat.s3{left:0!important;right:auto!important;top:296px!important}
  #dsHero .ds-sat.s4{right:0!important;left:auto!important;top:404px!important}
  #dsHero .ds-lnk,#dsHero .ds-orb{display:block}
  #dsHero .ds-log{width:min(440px,94%);order:0}
}
@media(max-width:479px){#dsHero .ds-stage{padding:12px 8px;gap:14px}#dsHero .ds-stage>.lh-tilt{width:100%}#dsHero .ds-log{width:100%;margin:0}}
</style></head><body data-preserve-copy><main><section class="hero lh ds-hero" id="dsHero" data-s="0">${original(background)}${original(stage)}</section></main>${scripts}</body></html>\n`);
console.log('Imported the supplied five-scene Docusign hero and sections through the four planning tools.');
