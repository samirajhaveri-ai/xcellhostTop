import fs from 'node:fs';
import path from 'node:path';

// Import page content as data; keep the site's shared navigation and footer.
const sourceDir = process.argv[2];
if (!sourceDir) throw new Error('Pass the directory containing the supplied HTML files, optionally followed by --industry.');
const industry = process.argv.includes('--industry');
const destination = 'src/assets/menu-service-pages';
fs.mkdirSync(destination, { recursive: true });
const pages = [];
const names = {
  'aeo-geo-automation': 'AEO + GEO Automation',
  'external-network-penetration-testing': 'External Network Penetration Testing',
  'iot-penetration-testing': 'IoT Penetration Testing',
  'managed-microsoft-365': 'Managed Microsoft 365',
  'mobile-app-penetration-testing': 'Mobile App Penetration Testing',
  'mobile-application-security-testing': 'Mobile Application Security Testing',
  'smart-qr-and-nfc-automation': 'Smart QR & NFC Automation',
  'vapt-services': 'VAPT Services',
  'web-app-penetration-testing': 'Web App Penetration Testing',
  'wordpress-automation': 'WordPress Automation',
  'bfsi-cloud': 'BFSI Cloud',
  'ca-cloud': 'CA Cloud',
  'construction-cloud': 'Construction Cloud',
  'food-and-beverage': 'Food & Beverage Cloud',
  'government-cloud': 'Government Cloud',
  'healthcare-cloud': 'Healthcare Cloud',
  'higher-education-cloud': 'Higher Education Cloud',
  'hospitality-cloud': 'Hospitality Cloud',
  'insurance-cloud': 'Insurance Cloud',
  'logistics-cloud': 'Logistics Cloud',
  'manufacturing-cloud': 'Manufacturing Cloud',
  'pharmaceutical-cloud': 'Pharmaceutical Cloud',
  'retail-cloud': 'Retail Cloud',
  'smb-cloud': 'SMB Cloud',
};
const heroButtons = `<div class="xh-hero-actions" aria-label="Service actions">
  <button type="button" class="xh-info" data-xh-action="infosheet">⬇ Infosheet</button>
  <button type="button" data-xh-action="presentation">▣ Presentation</button>
  <button type="button" data-xh-action="tour">Screenshot Tour</button>
  <button type="button" data-xh-action="trial">7 Days Free Trial</button>
  <button type="button" class="xh-talk" data-xh-action="callback">Let's Talk</button>
</div>`;
const heroStyles = `.xh-hero-actions{display:flex;flex-wrap:nowrap;gap:8px;align-items:center;margin-top:24px;max-width:100%;overflow-x:auto;padding:2px 0 8px}
.xh-hero-actions button{flex:0 0 auto;white-space:nowrap;border:1px solid rgba(255,255,255,.35);border-radius:16px;background:rgba(255,255,255,.06);color:#fff;padding:14px 12px;font:700 13px/1.2 var(--font-b,"IBM Plex Sans",sans-serif);cursor:pointer}
.xh-hero-actions .xh-info{background:linear-gradient(135deg,#2979ef,#1551b4);border-color:transparent}
.xh-hero-actions .xh-talk{background:linear-gradient(135deg,#ff9c38,#ff8000);border-color:transparent}
.xh-hero-actions button:hover{filter:brightness(1.12)}.xh-hero-actions button:focus-visible{outline:3px solid #ff8c1a;outline-offset:2px}`;
const decode = (text) => text.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (entity, code) => {
  if (code.startsWith('#')) return String.fromCodePoint(code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : Number(code.slice(1)));
  return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' }[code.toLowerCase()] ?? entity;
});
const filenames = industry ? [
  'bfsi-cloud.html', 'ca-cloud.html', 'construction-cloud.html', 'food-and-beverage.html',
  'government-cloud.html', 'healthcare-cloud.html', 'higher-education-cloud.html',
  'hospitality-cloud.html', 'insurance-cloud.html', 'logistics-cloud.html',
  'manufacturing-cloud.html', 'pharmaceutical-cloud.html', 'retail-cloud.html', 'smb-cloud.html',
] : [
  'aeo-geo-automation.html', 'external-network-penetration-testing.html',
  'iot-penetration-testing.html', 'managed-365 (3).html',
  'mobile-app-penetration-testing.html', 'mobile-application-security-testing.html',
  'smart-qr-and-nfc-automation.html', 'vapt-services.html',
  'web-app-penetration-testing.html', 'wordpress-automation.html',
];
for (const filename of filenames) {
  const slug = filename === 'managed-365 (3).html' ? 'managed-microsoft-365' : filename.replace(/\.html$/, '');
  const source = fs.readFileSync(path.join(sourceDir, filename), 'utf8');
  const head = source.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1];
  const main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0];
  if (!head || !main) throw new Error(`Missing head or main in ${filename}`);
  const title = head.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? slug;
  const description = head.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? '';
  const scripts = [...source.matchAll(/<script\b(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi)]
    .filter((match) => !main.includes(match[0])).map((match) => match[0]).join('\n');
  // Omit the closing quote/WhatsApp banner when present in a supplied page.
  const content = main.replace(/<div class="cta-wrap">[\s\S]*?<\/div><\/div><\/div><\/div>/g, '')
    .replace(/<div class="(?:hctas hero-actions|hero-ctas)">[\s\S]*?<\/div>/, heroButtons);
  if (!content.includes('data-xh-action="tour"')) throw new Error(`Hero actions missing in ${filename}`);
  const document = `<!doctype html>\n<html lang="en-IN">\n<head>${head}\n<style>html,body{height:auto;min-height:0}body{overflow:hidden}${heroStyles}</style></head>\n<body>${content}\n${scripts}\n</body>\n</html>\n`;
  fs.writeFileSync(path.join(destination, `${slug}.html`), document);
  pages.push({ slug, name: names[slug], title: decode(title), description: decode(description),
    ...(industry ? { category: 'Cloud' } : {}) });
}
fs.writeFileSync(`src/app/data/${industry ? 'industry-cloud' : 'menu-service'}-pages.data.ts`,
  '// Metadata from the supplied service HTML files.\n' +
  `export const ${industry ? 'INDUSTRY_CLOUD_PAGES' : 'MENU_SERVICE_PAGES'} = ` + JSON.stringify(pages, null, 2) + ' as const;\n');
console.log(`Imported ${pages.length} service pages.`);
