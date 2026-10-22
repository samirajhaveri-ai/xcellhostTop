const fs = require('node:fs');
const path = require('node:path');
const input = process.argv[2];
if (!input) throw new Error('Pass the supplied breach-and-attack-simulation.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];

// Keep the supplied illustrations, interactive tools, pricing and service copy.
// The application supplies the surrounding navigation, footer and lead dialog.
main = main.replace(/<section\b[^>]*id="(?:watch|contact|related)"[^>]*>[\s\S]*?<\/section>/g, '');
main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/,
  '<div class="bas-powered"><span>Powered by</span><span aria-hidden="true">|</span><strong>XcellHost Vortex SOC</strong></div>');
// Keep the AI actions with the banner copy instead of below the entire demo.
const ask = main.match(/<div class="lh-ask"[^>]*>[\s\S]*?<\/div>/)?.[0];
if (!ask) throw new Error('Missing Breach & Attack Simulation Ask AI row.');
main = main.replace(ask, '').replace('<div class="bas-powered">', ask + '<div class="bas-powered">');
main = main.replace('Ask AI about Breach &amp; Attack Simulation', 'Ask AI About BAS');
function extractDiv(html, className) {
  const tags = /<div\b[^>]*>|<\/div>/g;
  let start = -1, depth = 0;
  for (const tag of html.matchAll(tags)) {
    if (start < 0) {
      if (!tag[0].match(/class="([^"]+)"/)?.[1].split(/\s+/).includes(className)) continue;
      start = tag.index;
    }
    depth += tag[0].startsWith('</') ? -1 : 1;
    if (!depth) return html.slice(start, tag.index + tag[0].length);
  }
  throw new Error('Missing banner block: ' + className);
}
// Match the Tally banner's reading order: copy and features left, demo right.
const crumb = extractDiv(main, 'crumb');
const points = extractDiv(main, 'lh-points');
main = main.replace(crumb, '').replace(points, '');
main = main.replace('<div class="bs-copy">', '<div class="bs-copy">' + crumb)
  .replace('<div class="lh-ctas bs-ctas"', points + '<div class="lh-ctas bs-ctas"');
const integrations = extractDiv(main, 'bs-base');
main = main.replace(integrations, '').replace('</section>', '</section><div class="bas-integrations"><div class="wrap">' + integrations + '</div></div>');
// Use one full-width heading line above each paired text/illustration section.
for (const id of ['overview']) {
  main = main.replace(new RegExp('<section\\b[^>]*id="' + id + '"[\\s\\S]*?<\\/section>'), section => {
    const heading = section.match(/<span class="eyebrow">[\s\S]*?<\/span>\s*<h2\b[^>]*>[\s\S]*?<\/h2>/)?.[0];
    if (!heading) throw new Error('Missing section heading: ' + id);
    return section.replace(heading, '').replace('<div class="wrap">', '<div class="wrap"><div class="sh">' + heading + '</div>');
  });
}
main = main.replace('class="bs-sub"', 'class="bs-sub product-section-nav"');
main = main.replace('<a href="#faq">', '<a href="#security">Security</a><a href="#why">Why XcellHost</a><a href="#faq">');
main = main.replace(/(<section\b[^>]*id="why"[\s\S]*?)<h2>[\s\S]*?<\/h2>/,
  '$1<h2>Why XcellHost For Breach & Attack Simulation</h2>');
const controls = [
  ['Written Authorisation', 'Confirm the controls, systems and environments in scope before validation begins.'],
  ['Rules Of Engagement', 'Agree test windows, escalation contacts and stop conditions for every validation cycle.'],
  ['Safe Test Data', 'Use test accounts and synthetic data; emulate techniques where a live test would create operational risk.'],
  ['Evidence Handling', 'Agree who can access findings, where evidence is held and how long it is retained.'],
  ['MITRE ATT&CK Mapping', 'Map the selected techniques and observed detections to the agreed threat profile.'],
  ['Validated Remediation', 'Compare each run with the baseline, investigate regressions and re-run after detection fixes.'],
];
const security = '<section class="sec" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Breach &amp; Attack Simulation repeatedly validates your security controls under an agreed scope. Written authorisation, safe test payloads and controlled evidence handling keep each cycle focused on detecting regressions and proving remediation.</p></div><div class="hosting-reasons">' + controls.map(([h,p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div><p class="bas-certification">XcellHost is ISO 27001 and ISO 20000-1 certified · 24×7 NOC and SOC. Agree evidence residency and regulatory requirements during scoping.</p></div></section>';
main = main.replace(/(<section\b[^>]*id="why")/, security + '$1');
const feedback = '<section class="sec bs-tint" id="customer-feedback"><div class="wrap"><div class="sh"><h2>What Customers Say</h2><p>Ask for customer references relevant to your SOC, detection stack and exercise requirements.</p></div><button type="button" class="btn btn-orange" data-open="xhCallback" data-topic="Breach & Attack Simulation customer references">Request Customer References</button></div></section>';
main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
  const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0]
    .replace('class="fq open"', 'class="fq"').replace('aria-expanded="true"', 'aria-expanded="false"')
    .replace(/<i><svg[\s\S]*?<\/svg><\/i>/, '<i aria-hidden="true">+</i>'));
  if (items.length !== 12) throw new Error('Expected all 12 supplied FAQs.');
  return feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0,6), items.slice(6)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
});

const providers = { chatgpt: 'https://chatgpt.com/?q=', claude: 'https://claude.ai/new?q=', perplexity: 'https://www.perplexity.ai/search?q=', google: 'https://www.google.com/search?udm=50&q=', copilot: 'https://copilot.microsoft.com/?q=' };
const prompt = 'Explain XcellHost Breach & Attack Simulation: safe repeated control validation, MITRE ATT&CK mapping, detection regressions, baseline assessments and monthly or quarterly programmes.';
main = main.replace(/<a data-ai="([^"]+)" href="#">/g, (_, provider) => '<a data-ai="' + provider + '" href="' + (providers[provider] + encodeURIComponent(prompt)).replaceAll('&', '&amp;') + '" target="_blank" rel="noopener noreferrer">');

function localLinks(html) {
  return html.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
    .replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"')
    .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/')
    .replaceAll('href="/purple-team"', 'href="/purple-team-assessment"')
    .replaceAll('href="/xcellhost-managed-sentinel"', 'href="/managed-microsoft-sentinel"');
}
main = localLinks(main);
let script = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0];
// Match the canvas scene's coordinate system to the CSS aspect-ratio breakpoint.
script = script.replace('MOB=W<520', 'MOB=window.innerWidth<=560');
// The application scrolls the outer page; the imported document has no own scroll offset.
script = script.replace('var y=scrollY+170', 'var y=window.hostingViewportFocus()');
// Use the site's real callback form rather than the document's demo success toast.
script = script.replace(/if\(pq\)pq\.addEventListener\('click',function\(\)\{[^\n]+/,
  "if(pq)pq.addEventListener('click',function(){plan();XH.open('xhCallback',{topic:'Breach & Attack Simulation: '+$('#qS').value});});");
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
const css = ['consulting-faq', 'faq-layout', 'hosting-tools', 'section-navigation-flow', 'breach-and-attack-simulation'].map(n => '<link rel="stylesheet" href="/assets/styles/' + n + '.css">').join('');
fs.writeFileSync(path.join(root, 'public/imported-breach-and-attack-simulation.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Breach & Attack Simulation | XcellHost</title>' + links + styles + css + '</head><body>' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', 'Breach & Attack Simulation enquiry:') + script + '</body></html>');
console.log('Imported Breach & Attack Simulation: source illustrations, quiz, configurator and all 12 FAQ answers preserved.');
