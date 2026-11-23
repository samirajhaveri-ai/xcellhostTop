const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
const directory = process.argv[2];
if (!directory) throw Error('Pass the directory containing the supplied training documents.');
for (const [sector, title, short] of [
  ['bankers', 'AI Training for Bankers', 'Bankers'],
  ['government-psu', 'AI Training for Government & PSUs', 'Government & PSUs'],
]) {
  const slug = 'ai-training-' + sector;
  const source = fs.readFileSync(path.join(directory, slug + ' (1).html'), 'utf8');
  const nodes = [];
  function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
  walk(parse(source, { sourceCodeLocationInfo: true }));
  const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
  const has = (n, c) => attr(n, 'class').split(/\s+/).includes(c);
  const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
  const text = n => n.value || (n.childNodes || []).map(text).join('');
  let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', `<main data-training-title="${title.replaceAll('&', '&amp;')}" data-training-short="${short.replaceAll('&', '&amp;')}" data-customer-testimonials="off"`);
  for (const n of nodes.filter(n => has(n, 'crumb') || has(n, 'lnl-wrap') || (n.tagName === 'section' && ['contact', 'related'].includes(attr(n, 'id'))))) main = main.replace(html(n), '');
  main = main.replace(/data-xhform="([^"]+)"/g, 'data-import-enquiry="$1"');
  main = main.replace(/href="(?:https:\/\/(?:www\.)?xcellhost\.(?:top|cloud)\/)?([a-z0-9-]+)\.html(#[^"]*)?"/g, 'href="/$1$2" target="_top"');
  const grid = nodes.find(n => has(n, 'faq'));
  const items = grid.childNodes.filter(n => has(n, 'fq')).map(html);
  if (!items.length) throw Error('Missing supplied FAQ answers: ' + slug);
  const half = Math.ceil(items.length / 2);
  main = main.replace(html(grid), '<div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('\n') + '</div>').join('') + '</div>');
  const cards = (rows) => '<div class="ns-service-grid">' + rows.map(([h, p]) => `<article><h3>${h}</h3><p>${p}</p></article>`).join('') + '</div>';
  const security = cards([
    ['Training Data', 'Use the supplied sample exercises and synthetic records; keep personal and confidential information out of public AI prompts.'],
    ['Approved Tools', 'Follow your organisation’s tool approval, access and information-sharing policies.'],
    ['Human Review', 'Check AI drafts against the source material before using them in an official workflow.'],
    ['Role Boundaries', 'AI assists with drafting and analysis. Authorised staff retain decisions and approvals.'],
    ['Responsible Practice', 'Practise data classification, verification and escalation alongside the course labs.'],
    ['Course Scope', 'Confirm tool access, delivery arrangements and data-handling responsibilities before enrolment.'],
  ]);
  const why = cards([
    ['Role-Based Learning', `Choose exercises suited to ${sector === 'bankers' ? 'branch, credit, risk, compliance and operations teams' : 'government offices, departments and PSU teams'}.`],
    ['Practical Labs', 'Work through the course’s sample files and review the output with a human verification step.'],
    ['Flexible Delivery', 'Compare live online, Mumbai and in-house cohort options from the supplied course plans.'],
    ['Clear Seat Pricing', 'Use the seat and format configurator to review indicative charges and GST.'],
    ['Team Enrolment', 'Discuss cohort size, desk tracks and scheduling requirements with XcellHost.'],
    ['Responsible AI Habits', 'Build safe prompting and source-checking habits into everyday work.'],
  ]);
  const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
  main = main.replace(source.slice(faq.sourceCodeLocation.startOffset, faq.sourceCodeLocation.startTag.endOffset), `<section class="sec alt" id="security-compliance"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2></div>${security}</div></section><section class="sec" id="why-xcellhost"><div class="wrap"><div class="sh"><h2>Why XcellHost For ${title.replaceAll('&', '&amp;')}</h2></div>${why}</div></section>` + source.slice(faq.sourceCodeLocation.startOffset, faq.sourceCodeLocation.startTag.endOffset));
  const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n, 'href'))).map(html).join('\n');
  const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => `calc(var(--page-vh,1vh) * ${n})`);
  const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text);
  const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
  const runtime = scripts.at(-1).replaceAll("$id('configure').scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", "window.hostingJumpTo('configure')");
  for (const code of [core, runtime]) { if (!code) throw Error('Missing course runtime'); new vm.Script(code); }
  const css = ['consulting-faq', 'faq-layout', 'network-service-pages', 'ai-training-sector-pages'].map(n => `<link rel="stylesheet" href="/assets/styles/${n}.css">`).join('');
  fs.writeFileSync(path.join(root, `public/imported-${slug}.html`), `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title.replaceAll('&', '&amp;')} | XcellHost</title>${fonts}${styles}${css}</head><body>${main}<div id="trainingToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script><script>${core}</script><script src="/assets/scripts/ai-training-sector-pages.js"></script><script>${runtime}</script></body></html>`);
  console.log(`Imported ${slug}: ${items.length} original FAQ answers, course tools and enrolment.`);
}
