const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const browser = path.join(root, 'dist', 'xcellhost', 'browser');
const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
const titleOwners = new Map();
const descriptionOwners = new Map();
const failures = [];
const totals = { title: 0, description: 0, canonical: 0, h1: 0, h1Zero: 0, h1Multiple: 0, body: 0, duplicateTitle: 0, duplicateDescription: 0 };
const multipleH1Routes = [];

const decode = value => value
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
const text = value => decode(value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
const attr = (html, tag, name, value, target) => {
  const tags = html.match(new RegExp('<' + tag + '\\b[^>]*>', 'gi')) || [];
  const found = tags.find(candidate => new RegExp('\\b' + name + '=["\\\']' + value + '["\\\']', 'i').test(candidate));
  return found?.match(new RegExp('\\b' + target + '=["\\\']([^"\\\']*)["\\\']', 'i'))?.[1] || '';
};

for (const url of urls) {
  const parsed = new URL(url);
  const route = parsed.pathname.replace(/^\/+|\/+$/g, '');
  const file = path.join(browser, route, 'index.html');
  const label = parsed.pathname;
  if (!fs.existsSync(file)) {
    failures.push({ route: label, issues: ['missing index.html'] });
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const pageTitle = text(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
  const description = decode(attr(html, 'meta', 'name', 'description', 'content'));
  const canonical = decode(attr(html, 'link', 'rel', 'canonical', 'href'));
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(match => text(match[1]));
  const routedContent = html.match(/<router-outlet\b[^>]*><\/router-outlet>\s*<([\w-]+)\b[^>]*>([\s\S]*?)<\/\1>/i)?.[2] || '';
  const semanticFallback = html.match(/<section\b[^>]*data-route-seo-summary[^>]*>([\s\S]*?)<\/section>/i)?.[1] || '';
  const mainText = text((routedContent + ' ' + semanticFallback)
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ''));
  const expectedCanonical = 'https://xcellhost.cloud/' + (route ? route + '/' : '');
  const issues = [];
  if (!pageTitle) { issues.push('missing title'); totals.title++; }
  if (!description) { issues.push('missing description'); totals.description++; }
  if (canonical !== expectedCanonical) { issues.push('canonical: ' + (canonical || 'missing')); totals.canonical++; }
  if (h1s.length !== 1) {
    issues.push('h1 count: ' + h1s.length);
    totals.h1++;
    if (h1s.length === 0) totals.h1Zero++;
    else { totals.h1Multiple++; multipleH1Routes.push(label + ' (' + h1s.length + ')'); }
  }
  if (mainText.length < 80) { issues.push('main body text: ' + mainText.length + ' chars'); totals.body++; }
  if (issues.length) failures.push({ route: label, issues });
  if (pageTitle) {
    const owners = titleOwners.get(pageTitle) || [];
    owners.push(label);
    titleOwners.set(pageTitle, owners);
  }
  if (description) {
    const owners = descriptionOwners.get(description) || [];
    owners.push(label);
    descriptionOwners.set(description, owners);
  }
}

for (const [pageTitle, owners] of titleOwners) {
  if (owners.length < 2) continue;
  totals.duplicateTitle += owners.length;
  for (const route of owners) {
    const existing = failures.find(failure => failure.route === route);
    if (existing) existing.issues.push('duplicate title: ' + pageTitle);
    else failures.push({ route, issues: ['duplicate title: ' + pageTitle] });
  }
}

for (const [description, owners] of descriptionOwners) {
  if (owners.length < 2) continue;
  totals.duplicateDescription += owners.length;
  for (const route of owners) {
    const existing = failures.find(failure => failure.route === route);
    const issue = 'duplicate description: ' + description.slice(0, 80);
    if (existing) existing.issues.push(issue);
    else failures.push({ route, issues: [issue] });
  }
}

console.log('Audited ' + urls.length + ' sitemap pages.');
console.log('Failures by rule: ' + JSON.stringify(totals));
if (multipleH1Routes.length) console.log('Multiple-H1 routes: ' + multipleH1Routes.join(', '));
if (failures.length) {
  console.error(failures.length + ' pages failed static SEO checks.');
  for (const failure of failures.slice(0, 100)) {
    console.error('- ' + failure.route + ': ' + failure.issues.join('; '));
  }
  if (failures.length > 100) console.error('...and ' + (failures.length - 100) + ' more.');
  process.exitCode = 1;
} else {
  console.log('Every page has unique metadata, one H1, a canonical URL and main body text.');
}
