const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const root = path.join(__dirname, '..');
const dataDir = path.join(root, 'src', 'app', 'data');
const output = path.join(root, 'public', 'assets', 'social-previews.json');
const siteUrl = 'https://xcellhost.top';

function loadTypeScriptModule(filename) {
  const source = fs.readFileSync(path.join(dataDir, filename), 'utf8');
  const javascript = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', javascript)(() => ({}), module, module.exports);
  return module.exports;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[().,/]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function isSocialImage(image) {
  return typeof image === 'string' && /\.(?:png|jpe?g)$/i.test(image);
}

const { DIRECTORY } = loadTypeScriptModule('directory.data.ts');
const { RICH_PRODUCTS } = loadTypeScriptModule('products.data.ts');
const { PRODUCT_HERO_IMAGES, CATEGORY_HERO_IMAGES } = loadTypeScriptModule(
  'product-hero-images.generated.ts',
);

const overrides = {
  'acronis-genai-protection': '/assets/images/acronis-genai-protection.png',
  'advanced-endpoint-security-edr': '/assets/images/hero-acronis-edr-v2.png',
  'cloud-backup': '/assets/images/hero-cloud-backup-acronis.png',
  'cloud-backup-acronis': '/assets/images/hero-cloud-backup-acronis.png',
  'cloud-drive': '/assets/images/cloud-drive-tour-dashboard.jpg',
  'remote-monitoring-and-mgmt-rmm': '/assets/images/hero-rmm.png',
  'tally-on-cloud': '/assets/images/hero-tally-on-cloud.png',
};

const specialCopy = {
  'acronis-genai-protection': {
    title: 'Acronis GenAI Protection — XcellHost',
    description: 'Discover and control GenAI use, reduce data leakage, and enforce safe AI policies across your business.',
  },
  'advanced-endpoint-security-edr': {
    title: 'Advanced Endpoint Security (EDR) — XcellHost',
    description: 'AI-powered endpoint detection, ransomware protection, investigation, containment, and recovery with expert support.',
  },
};

const routes = {};
for (const entry of DIRECTORY) {
  const slug = slugify(entry.name);
  const rich = RICH_PRODUCTS[entry.name];
  const candidates = [
    overrides[slug],
    rich?.heroImage,
    entry.heroImage,
    PRODUCT_HERO_IMAGES[entry.name],
    CATEGORY_HERO_IMAGES[entry.cat],
    '/assets/images/xcellhost-logo.png',
  ];
  const image = candidates.find(isSocialImage) || '/assets/images/xcellhost-logo.png';
  routes[`/${slug}`] = {
    title: `${entry.name} — XcellHost`,
    description: (entry.desc || rich?.highlight || rich?.tagline || `Explore ${entry.name} from XcellHost.`)
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 180),
    image: siteUrl + image,
  };
}

for (const [slug, image] of Object.entries(overrides)) {
  const key = `/${slug}`;
  routes[key] = routes[key] || {
    title: `${slug.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')} — XcellHost`,
    description: 'Managed cloud and cybersecurity services from XcellHost, backed by 24×7 expert support.',
    image: siteUrl + image,
  };
  routes[key].image = siteUrl + image;
  if (specialCopy[slug]) Object.assign(routes[key], specialCopy[slug]);
}

const manifest = {
  default: {
    title: 'Managed Cloud & Cybersecurity Services India | XcellHost',
    description: 'Managed cloud, cybersecurity and digital trust for Indian businesses since 1999.',
    image: `${siteUrl}/assets/images/xcellhost-logo.png`,
  },
  routes,
};

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(manifest, null, 2) + '\n');
console.log(`Generated ${Object.keys(routes).length} social preview records.`);
