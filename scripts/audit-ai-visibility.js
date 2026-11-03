const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const browser = path.join(root, 'dist', 'xcellhost', 'browser');
const sitemap = fs.readFileSync(path.join(root, 'public', 'sitemap.xml'), 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/xcellhost\.cloud(\/[^<]*)<\/loc>/g)]
  .map((match) => match[1]);
const servicePaths = new Set([
  'acronis', 'aws-cloud-disaster-recovery', 'aws-migration', 'azure-cloud-disaster-recovery',
  'azure-migration', 'backup-and-disaster-recovery', 'dpdpa-consulting', 'dpdpa-for-smb',
  'gcp-cloud-disaster-recovery', 'gcp-cloud-services', 'gcp-migration', 'gpu-clusters',
  'gpu-servers', 'iso-27001-consulting', 'managed-aws', 'managed-azure',
  'managed-detection-and-response-mdr', 'managed-extended-detection-response-xdr',
  'managed-google-cloud', 'managed-google-cloud-gcp', 'managed-grc', 'managed-gws',
  'managed-kubernetes', 'managed-microsoft-365', 'managed-microsoft-sentinel',
  'managed-multi-cloud', 'managed-oracle-cloud', 'managed-phishing-simulation',
  'managed-xdr', 'tally-on-cloud',
]);
const failures = [];
const counts = { breadcrumbs: 0, services: 0, faqs: 0 };

function routeFile(route) {
  const pathname = route.replace(/^\/+|\/+$/g, '');
  return path.join(browser, pathname, 'index.html');
}

function jsonLd(html, id) {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = html.match(new RegExp(`<script[^>]+id="jsonld-${escaped}"[^>]*>([\\s\\S]*?)<\\/script>`, 'i'));
  if (!match) return null;
  try { return JSON.parse(match[1]); } catch { return null; }
}

function hasRenderedFaq(html) {
  const detailsQuestions = /<details\b[\s\S]*?<summary\b[^>]*>[\s\S]*?\?[\s\S]*?<\/summary>/i.test(html);
  const customQuestions = /class="[^"]*(?:faq2-q|faq-question)[^"]*"[^>]*>[\s\S]*?\?/i.test(html);
  return detailsQuestions || customQuestions;
}

for (const route of routes) {
  const file = routeFile(route);
  if (!fs.existsSync(file)) {
    failures.push(`${route}: missing prerendered HTML`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const pathname = route.replace(/^\/+|\/+$/g, '');
  if (pathname) {
    const breadcrumb = jsonLd(html, 'breadcrumb');
    if (breadcrumb?.['@type'] !== 'BreadcrumbList' || !breadcrumb.itemListElement?.length) {
      failures.push(`${route}: missing BreadcrumbList JSON-LD`);
    } else {
      counts.breadcrumbs += 1;
    }
  }
  if (servicePaths.has(pathname)) {
    const service = jsonLd(html, 'service');
    if (service?.['@type'] !== 'Service' || service.provider?.['@id'] !== 'https://xcellhost.cloud/#organization') {
      failures.push(`${route}: missing or invalid Service JSON-LD`);
    } else {
      counts.services += 1;
      if (pathname === 'tally-on-cloud' && (service.offers?.price !== 499 || service.offers?.priceCurrency !== 'INR')) {
        failures.push(`${route}: Tally offer is missing the INR 499 price`);
      }
    }
  }
  if (hasRenderedFaq(html)) {
    const faq = jsonLd(html, 'faq');
    if (faq?.['@type'] !== 'FAQPage' || !faq.mainEntity?.length) {
      failures.push(`${route}: rendered FAQ has no FAQPage JSON-LD`);
    } else {
      counts.faqs += 1;
    }
  }
}

const publicLlms = fs.readFileSync(path.join(root, 'public', 'llms.txt'));
const builtLlmsPath = path.join(browser, 'llms.txt');
if (!fs.existsSync(builtLlmsPath) || !publicLlms.equals(fs.readFileSync(builtLlmsPath))) {
  failures.push('/llms.txt: build copy is missing or differs from the supplied UTF-8 file');
}
if (!publicLlms.toString('utf8').includes('₹499') || publicLlms.toString('utf8').includes('\uFFFD')) {
  failures.push('/llms.txt: UTF-8 content is invalid');
}

const source404 = path.join(browser, '404', 'index.html');
const root404 = path.join(browser, '404.html');
if (!fs.existsSync(source404) || !fs.existsSync(root404) ||
    !fs.readFileSync(source404).equals(fs.readFileSync(root404))) {
  failures.push('/404.html: missing or not copied from the prerendered /404/ route');
}

const home = fs.readFileSync(path.join(browser, 'index.html'), 'utf8');
const description = home.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || '';
if (!description.includes('—') || /(?:â|Ã|Â|\uFFFD)/.test(description)) {
  failures.push('/: homepage description is not clean UTF-8');
}
if (!/class="[^"]*home-hero-slide[^"]*is-active[^"]*"/.test(home)) {
  failures.push('/: homepage has no active server-rendered hero slide');
}

const indexSource = fs.readFileSync(path.join(root, 'src', 'index.html'), 'utf8');
const appTemplate = fs.readFileSync(path.join(root, 'src', 'app', 'app.html'), 'utf8');
const heroTemplate = fs.readFileSync(path.join(root, 'src', 'app', 'sections', 'hero.component.html'), 'utf8');
const bannerActionsSource = fs.readFileSync(path.join(root, 'src', 'app', 'sections', 'banner-actions.ts'), 'utf8');
const globalStyles = fs.readFileSync(path.join(root, 'src', 'styles.css'), 'utf8');
if (indexSource.includes('zps-page-screen') || /opacity:\s*0[^;]*!important;\s*visibility:\s*hidden/i.test(indexSource)) {
  failures.push('/: a third-party anti-flicker script hides the document');
}
if (appTemplate.includes('<xh-intro-splash')) {
  failures.push('/: the blocking intro splash is mounted in the application shell');
}
if (!heroTemplate.includes('[attr.aria-hidden]="i !== activeVisualSlide()"') ||
    !/\.home-hero-slide\.is-active\s*,\s*\.home-hero-slide\[aria-hidden=["']false["']\]\s*\{[^}]*display\s*:\s*grid/i.test(globalStyles)) {
  failures.push('/: homepage carousel can hide every hero slide after hydration');
}
if (!bannerActionsSource.includes("'h1, .home-hero-slide .home-hero-slide-title'")) {
  failures.push('/: homepage carousel slides do not all receive shared banner actions');
}

console.log(`Checked ${routes.length} sitemap pages: ${counts.breadcrumbs} breadcrumbs, ${counts.services} services, ${counts.faqs} FAQ pages.`);
if (failures.length) {
  console.error(`${failures.length} AI visibility check(s) failed.`);
  failures.slice(0, 100).forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log('llms.txt, static 404, structured data and homepage UTF-8 checks passed.');
