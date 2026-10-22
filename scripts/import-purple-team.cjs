const fs = require('node:fs');
const path = require('node:path');
const input = process.argv[2];
if (!input) throw new Error('Pass the supplied purple-team.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];

// Keep the supplied illustrations, interactive tools, pricing and service copy.
// The application supplies the surrounding navigation, footer and lead dialog.
main = main.replace(/<section\b[^>]*id="(?:watch|contact|related)"[^>]*>[\s\S]*?<\/section>/g, '');
main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/,
  '<div class="purple-powered"><span>Powered by</span><span aria-hidden="true">|</span><strong>Red + Blue Teams</strong></div>');
// Keep the AI actions with the banner copy instead of below the entire demo.
const ask = main.match(/<div class="lh-ask"[^>]*>[\s\S]*?<\/div>/)?.[0];
if (!ask) throw new Error('Missing Purple Team Ask AI row.');
main = main.replace(ask, '').replace('<div class="purple-powered">', ask + '<div class="purple-powered">');
main = main.replace('Ask AI about purple teaming', 'Ask AI About Purple Team');
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
main = main.replace('<div class="pt-copy">', '<div class="pt-copy">' + crumb)
  .replace('<div class="lh-ctas pt-ctas"', points + '<div class="lh-ctas pt-ctas"');
const integrations = extractDiv(main, 'pt-base');
main = main.replace(integrations, '').replace('</section>', '</section><div class="purple-integrations"><div class="wrap">' + integrations + '</div></div>');
// Use one full-width heading line above each paired text/illustration section.
for (const id of ['overview', 'team', 'detection']) {
  main = main.replace(new RegExp('<section\\b[^>]*id="' + id + '"[\\s\\S]*?<\\/section>'), section => {
    const heading = section.match(/<span class="eyebrow">[\s\S]*?<\/span>\s*<h2\b[^>]*>[\s\S]*?<\/h2>/)?.[0];
    if (!heading) throw new Error('Missing section heading: ' + id);
    return section.replace(heading, '').replace('<div class="wrap">', '<div class="wrap"><div class="sh">' + heading + '</div>');
  });
}
main = main.replace('class="pt-sub"', 'class="pt-sub product-section-nav"');
main = main.replace('<a href="#faq">', '<a href="#security">Security</a><a href="#why">Why XcellHost</a><a href="#faq">');
main = main.replace(/(<section\b[^>]*id="why"[\s\S]*?)<h2>[\s\S]*?<\/h2>/,
  '$1<h2>Why XcellHost For Purple Team Assessment</h2>');
const controls = [
  ['Written Authorisation', 'Confirm the systems, accounts and techniques in scope before an exercise begins.'],
  ['Rules Of Engagement', 'Agree exercise windows, escalation contacts and stop conditions with your defenders.'],
  ['Safe Test Data', 'Use test accounts and synthetic data; emulate techniques where a live test would create operational risk.'],
  ['Evidence Handling', 'Agree who can access findings, where evidence is held and how long it is retained.'],
  ['MITRE ATT&CK Mapping', 'Map the selected techniques and observed detections to the agreed threat profile.'],
  ['Validated Remediation', 'Record detected, noisy and missed techniques, tune the detections and re-run to validate the result.'],
];
const security = '<section class="sec" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Purple Team Assessment brings attackers and defenders together under an agreed scope. Written authorisation, controlled simulations and documented evidence keep each exercise focused on improving your detection capability.</p></div><div class="hosting-reasons">' + controls.map(([h,p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div><p class="purple-certification">XcellHost is ISO 27001 and ISO 20000-1 certified · 24×7 NOC and SOC. Agree evidence residency and regulatory requirements during scoping.</p></div></section>';
main = main.replace(/(<section\b[^>]*id="why")/, security + '$1');
const feedback = '<section class="sec pt-tint" id="customer-feedback"><div class="wrap"><div class="sh"><h2>What Customers Say</h2><p>Ask for customer references relevant to your SOC, detection stack and exercise requirements.</p></div><button type="button" class="btn btn-orange" data-open="xhCallback" data-topic="Purple Team Assessment customer references">Request Customer References</button></div></section>';
main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
  const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0]
    .replace('class="fq open"', 'class="fq"').replace('aria-expanded="true"', 'aria-expanded="false"')
    .replace(/<i><svg[\s\S]*?<\/svg><\/i>/, '<i aria-hidden="true">+</i>'));
  if (items.length !== 12) throw new Error('Expected all 12 supplied FAQs.');
  return feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0,6), items.slice(6)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
});

const providers = { chatgpt: 'https://chatgpt.com/?q=', claude: 'https://claude.ai/new?q=', perplexity: 'https://www.perplexity.ai/search?q=', google: 'https://www.google.com/search?udm=50&q=', copilot: 'https://copilot.microsoft.com/?q=' };
const prompt = 'Explain XcellHost Purple Team Assessment: collaborative detection testing, MITRE ATT&CK mapping, safe exercises, same-day detection tuning and available workshop options.';
main = main.replace(/<a data-ai="([^"]+)" href="#">/g, (_, provider) => '<a data-ai="' + provider + '" href="' + (providers[provider] + encodeURIComponent(prompt)).replaceAll('&', '&amp;') + '" target="_blank" rel="noopener noreferrer">');

function localLinks(html) {
  return html.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
    .replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"')
    .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/')
    .replaceAll('xcellhost.top/purple-team)', 'xcellhost.top/purple-team-assessment)');
}
main = localLinks(main);
let script = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0];
// Match the canvas scene's coordinate system to the CSS aspect-ratio breakpoint.
script = script.replace('MOB=W<560', 'MOB=window.innerWidth<=700');
script = script.replace('vh=innerHeight', 'vh=parent.innerHeight').replace('vh*.62-r.top', 'window.hostingViewportFocus()-r.top');
// Use the site's real callback form rather than the document's demo success toast.
script = script.replace(/function openQ\(\)\{[\s\S]*?\}\n  if\(cD\)/,
  "function openQ(){cfg();XH.open('xhCallback',{topic:'Purple Team Assessment: '+$('#qS').value});}\n  if(cD)");
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
const css = ['consulting-faq', 'faq-layout', 'hosting-tools', 'section-navigation-flow', 'purple-team'].map(n => '<link rel="stylesheet" href="/assets/styles/' + n + '.css">').join('');
fs.writeFileSync(path.join(root, 'public/imported-purple-team.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Purple Team Assessment | XcellHost</title>' + links + styles + css + '</head><body>' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', 'Purple Team Assessment enquiry:') + script + '</body></html>');
console.log('Imported Purple Team: source illustrations, quiz, configurator and all 12 FAQ answers preserved.');
