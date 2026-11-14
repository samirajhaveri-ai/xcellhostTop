const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
const directory = process.argv[2];
if (!directory) throw Error('Pass the directory containing the two supplied FaceOff HTML files.');
const products = {
  privacy: {
    title: 'FaceOff Privacy in a Box',
    security: [['On-Premise Records', 'Keep the privacy platform and its records within your own infrastructure.'], ['Consent And Rights', 'Coordinate consent, cookies and data principal requests through the supplied privacy modules.'], ['Evidence And Governance', 'Use the assessment, breach and evidence modules to support your privacy programme.']],
    why: [['Scope Your Programme', 'Map the systems, purposes and privacy workflows you want the appliance to support.'], ['Deployment Support', 'Plan appliance installation and connections to your existing systems.'], ['vDPO Support', 'Select privacy support alongside the appliance where your organisation needs it.'], ['Readiness Review', 'Use the readiness check to prioritise modules and follow-up work.'], ['Drills And Assessments', 'Configure privacy assessments and response exercises around your deployment.'], ['One Point Of Contact', 'Discuss appliance sizing, services and ongoing support with XcellHost.']],
  },
  security: {
    title: 'FaceOff Security in a Box',
    security: [['Local Processing', 'Evaluate on-premise processing for sensitive media, identity and investigation workflows.'], ['Layered Fraud Checks', 'Combine the supplied face, voice, behaviour and video capabilities for your use case.'], ['Controlled Connectivity', 'Plan update paths and OSINT collection alongside your network access requirements.']],
    why: [['Map Your Channels', 'Identify the customer, staff and media channels that need authenticity checks.'], ['Deployment Planning', 'Use the deployment-fit tool to discuss a single appliance, high availability or an API pilot.'], ['Integration Support', 'Scope connections to existing identity, security and investigation workflows.'], ['Managed Security Options', 'Configure security operations services around your appliance.'], ['Team Readiness', 'Add awareness workshops and incident tabletop drills where needed.'], ['One Point Of Contact', 'Discuss appliance sizing, services and ongoing support with XcellHost.']],
  },
};
const aliases = { 'xcellhost-vdpo': '/vdpo-as-a-service' };
for (const [kind, product] of Object.entries(products)) {
  const slug = `faceoff-${kind}-in-a-box`;
  const source = fs.readFileSync(path.join(directory, slug + '.html'), 'utf8'), nodes = [];
  function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
  walk(parse(source, { sourceCodeLocationInfo: true }));
  const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
  const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
  let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
  for (const id of ['contact', 'related']) {
    const section = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === id);
    if (section) main = main.replace(html(section), '');
  }
  const crumb = nodes.find(n => attr(n, 'class') === 'crumb');
  if (crumb) main = main.replace(html(crumb), '');
  main = main.replace(/href="#contact"/g, 'href="#" data-open="xhCallback"');
  // The combined appliance page has not been supplied. Route those requests to the enquiry form.
  main = main.replace(/href="faceoff-privacy-security-in-a-box\.html"/g, 'href="#" data-open="xhCallback" data-topic="Compare FaceOff Privacy and Security appliances"');
  main = main.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, (_, name, hash) => `href="${aliases[name] || '/' + name}${hash || ''}" target="_top"`);
  const section = (id, eyebrow, title, cards) => `<section class="sec faceoff-site-section" id="${id}"><div class="wrap"><div class="sh"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2></div><div class="faceoff-site-grid">${cards.map(([heading, copy]) => `<article><h3>${heading}</h3><p>${copy}</p></article>`).join('')}</div></div></section>`;
  main = main.replace('<section class="sec" id="faq">', section('security-compliance', 'SECURITY &amp; COMPLIANCE', `Security &amp; Compliance — ${product.title}`, product.security) + section('why-xcellhost', 'WHY XCELLHOST', `Why XcellHost For ${product.title}`, product.why) + '<section class="sec" id="faq">');
  const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => `calc(var(--page-vh,1vh) * ${n})`);
  const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
  const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  let core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
  core = core.replace(/    var leads=store\('xh-leads'\)[^\n]*\n/, '');
  let runtime = scripts.at(-1).replaceAll('window.scrollTo(', 'window.scrollOuter(');
  runtime = runtime.replace(/function goTo\(id\)\{[^\n]*\}/, 'function goTo(id){window.hostingJumpTo(id);}');
  const bridge = `(function(){
    const open=XH.open;
    XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:${JSON.stringify(product.title + ': ')}+(options?.topic||'Appliance enquiry')}));return;}open(id,options);};
    XH.cart.add=function(item){document.dispatchEvent(new CustomEvent('import-cart',{detail:item}));};
  })();`;
  for (const code of [core, bridge, runtime]) new vm.Script(code);
  fs.writeFileSync(path.join(root, `public/imported-${slug}.html`), `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${product.title} | XcellHost</title>${fonts}${styles}<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faceoff-pages.css"></head><body>${main}<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div><script src="/assets/scripts/hosting-tools-viewport.js"></script><script>${core}</script><script>${bridge}</script><script>${runtime}</script><script src="/assets/scripts/hero-ask-ai.js"></script></body></html>`);
  console.log(`Imported ${product.title}`);
}
