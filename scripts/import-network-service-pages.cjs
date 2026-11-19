const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw Error('Pass the directory containing the eight supplied HTML files.');
const pages = [
  ['ssl-tools', 'SSL Tools', 'sl', 'Keep Private Keys Private', 'Generate and inspect certificate material locally. Share error messages with support, never private keys.', 'Certificate Assistance', 'Discuss CSR generation, certificate formats, installation and renewal requirements.'],
  ['endpoint-security', 'Endpoint Security', 'ep', 'Plan Endpoint Controls', 'Review device coverage, access permissions, patching and incident response responsibilities before rollout.', 'Plan Your Rollout', 'Compare endpoint engines and discuss a staged deployment for your device fleet.'],
  ['web-application-firewall', 'Web Application Firewall', 'wf', 'Review Application Protection', 'Agree on protected applications, rule tuning, logging and the process for reviewing blocked requests.', 'Tune Your Protection', 'Discuss application traffic, deployment options and an appropriate WAF plan.'],
  ['directconnect', 'DirectConnect', 'dc', 'Define Private Connectivity', 'Review routing, access controls and redundancy. Private connectivity and encryption are separate design decisions.', 'Design Your Connection', 'Discuss port capacity, handoff details, redundancy and network monitoring.'],
  ['cloudconnect', 'CloudConnect', 'cn', 'Review Tunnel Security', 'Plan tunnel authentication, routing permissions, remote-user access and failover testing.', 'Connect Your Sites', 'Discuss office networks, VPN parameters and a suitable hub-and-spoke design.'],
  ['public-ip', 'Public IP', 'pi', 'Control Public Exposure', 'Assign public addresses only where needed and review firewall rules, reverse DNS and exposed services.', 'Plan Your Addressing', 'Estimate address requirements and discuss allocation, routing and reverse DNS.'],
  ['bandwidth', 'Bandwidth', 'bw', 'Review Network Controls', 'Agree on monitoring, traffic visibility and access controls alongside the bandwidth plan.', 'Size Your Capacity', 'Compare billing models and estimate capacity using the supplied traffic calculators.'],
  ['network-security', 'Network & Security', 'ns', 'Design Protection In Layers', 'Review network segmentation, access policies, application protection and monitoring as one design.', 'Build Your Network Plan', 'Select the network and security services that fit your servers, sites and applications.'],
];
for (const [slug, title, prefix, securityTitle, securityBody, whyTitle, whyBody] of pages) {
  const source = fs.readFileSync(path.join(input, slug === 'public-ip' ? 'public-ip (1).html' : slug + '.html'), 'utf8');
  const nodes = [];
  function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
  walk(parse(source, { sourceCodeLocationInfo: true }));
  const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
  const has = (n, c) => attr(n, 'class').split(/\s+/).includes(c);
  const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
  const text = n => n.value || (n.childNodes || []).map(text).join('');
  let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', `<main data-network-service="${slug}" data-service-title="${title.replace('&', '&amp;')}" data-customer-testimonials="off"`);
  main = main.replace(`id="${prefix}Hero"`, `id="${prefix}Hero" data-banner-actions="off"`);
  // The host supplies navigation, newsletter and the common closing section.
  // Keep enquiry forms and all product tools from the supplied document.
  for (const n of nodes.filter(n => has(n, 'crumb') || has(n, 'lnl-wrap') || has(n, 'lcta') || has(n, 'sl-cta'))) main = main.replace(html(n), '');
  main = main.replace(/data-xhform="([^"]+)"/g, 'data-import-enquiry="$1"');
  const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
  const grid = nodes.find(n => has(n, 'faq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset);
  const items = grid.childNodes.filter(n => has(n, 'fq')).map(html);
  if (!items.length) throw Error('Missing FAQ answers: ' + slug);
  const half = Math.ceil(items.length / 2);
  const faqHtml = html(faq).replace(html(grid), '<div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('\n') + '</div>').join('') + '</div>');
  const additional = `<section class="sec" id="security-compliance"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2></div><div class="ns-service-grid"><article><h3>${securityTitle}</h3><p>${securityBody}</p></article><article><h3>Agree On Responsibilities</h3><p>Confirm the scope, access permissions and operational responsibilities with our team before implementation.</p></article><article><h3>Review Your Requirements</h3><p>Discuss retention, audit evidence and any industry-specific requirements for your deployment.</p></article></div></div></section><section class="sec" id="why-xcellhost"><div class="wrap"><div class="sh"><h2>Why XcellHost For ${title.replace('&', '&amp;')}</h2></div><div class="ns-service-grid"><article><h3>${whyTitle}</h3><p>${whyBody}</p></article><article><h3>Review Your Estimate</h3><p>Use this page to prepare your requirements, then review the scope and quotation with our team.</p></article><article><h3>Talk To Our Team</h3><p>Contact us for help choosing services and planning your next steps.</p></article></div></div></section>`;
  main = main.replace(html(faq), additional + faqHtml);
  const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n, 'href'))).map(html).join('\n');
  const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => `calc(var(--page-vh,1vh) * ${n})`);
  const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text);
  const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
  let runtime = scripts.at(-1).replace(/(\w+)\.scrollIntoView\(\{behavior:RED\?'auto':'smooth'(?:,block:'start')?\}\)/g, 'window.hostingJumpTo($1.id)');
  for (const code of [core, runtime]) { if (!code) throw Error('Missing runtime: ' + slug); new vm.Script(code); }
  const css = ['consulting-faq', 'faq-layout', 'network-service-pages'].map(n => `<link rel="stylesheet" href="/assets/styles/${n}.css">`).join('');
  fs.writeFileSync(path.join(root, `public/imported-${slug}.html`), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | XcellHost</title>${fonts}${styles}${css}</head><body>${main}<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>${core}</script><script src="/assets/scripts/network-service-pages-integration.js"></script><script>${runtime}</script></body></html>`);
  console.log(`${slug}: imported with ${items.length} original FAQ answers.`);
}
