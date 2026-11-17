const fs = require('fs');
const path = require('path');

const browser = path.join(__dirname, '..', 'dist', 'xcellhost', 'browser');
const source404 = path.join(browser, '404', 'index.html');
const target404 = path.join(browser, '404.html');

// These files are loaded directly by the SMB tools and Performance Cloud
// pages. If they are missing from the web root, the server fallback returns
// Angular's 404 page inside the iframe, which looks like duplicate headers and
// menus. Keep this list aligned with the assets used by product.page.html.
const requiredRootAssets = [
  'assets/heroes/cloud-drive-hero.html',
  'assets/heroes/tally-on-cloud-hero.html',
  'assets/animations/performance-cloud-hero.html',
  'assets/heroes/hero-action-bridge.js',
  'assets/images/xcellhost-logo.png',
  'assets/images/tally-prime-7-logo.png',
  'assets/images/smb-powered-by/nextcloud.webp',
  'assets/audio/cloud-drive-song.mp3',
  'assets/audio/tally-on-cloud-song.mp3',
];

const missingRootAssets = requiredRootAssets.filter(
  (asset) => !fs.existsSync(path.join(browser, asset)),
);

if (missingRootAssets.length > 0) {
  console.error('Build is missing required root-level assets:');
  for (const asset of missingRootAssets) console.error(`  - /${asset}`);
  process.exit(1);
}

const nestedBrowserAssets = path.join(browser, 'browser', 'assets');
if (fs.existsSync(nestedBrowserAssets)) {
  console.error(
    `Invalid nested asset output detected: ${nestedBrowserAssets}. ` +
      'Deploy the contents of dist/xcellhost/browser directly to the web root.',
  );
  process.exit(1);
}

console.log(`Verified ${requiredRootAssets.length} root-level hero assets.`);

if (!fs.existsSync(source404)) {
  console.error(`Cannot create the static 404 page: ${source404} does not exist.`);
  process.exit(1);
}

fs.copyFileSync(source404, target404);
console.log(`Created ${target404} from the prerendered /404/ route.`);
