/**
 * Copies the server configuration files into the built site and zips the whole
 * thing, ready to upload to Plesk.
 *
 * Run it with:  npm run package
 * Output:       release/xcellhost-site.zip
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist', 'xcellhost', 'browser');
const DEPLOY = path.join(ROOT, 'deploy');
const RELEASE = path.join(ROOT, 'release');

if (!fs.existsSync(DIST)) {
  console.error('No build found. Run "npm run build" first.');
  process.exit(1);
}

/* 1. copy the server config next to index.html */
for (const f of ['.htaccess', 'web.config']) {
  const src = path.join(DEPLOY, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DIST, f));
    console.log(`  + ${f}`);
  }
}

/* nginx.conf is pasted into Plesk rather than uploaded, so ship it alongside */
fs.mkdirSync(RELEASE, { recursive: true });
if (fs.existsSync(path.join(DEPLOY, 'nginx.conf'))) {
  fs.copyFileSync(path.join(DEPLOY, 'nginx.conf'), path.join(RELEASE, 'nginx.conf'));
}

/* 2. zip the built site */
const zip = path.join(RELEASE, 'xcellhost-site.zip');
if (fs.existsSync(zip)) fs.unlinkSync(zip);
execSync(`cd "${DIST}" && zip -qr "${zip}" . -x '*.map'`, { stdio: 'inherit' });

const size = (fs.statSync(zip).size / 1024 / 1024).toFixed(1);
console.log(`\nPackaged: release/xcellhost-site.zip  (${size} MB)`);
console.log('Upload it to your Plesk File Manager, into httpdocs, and extract there.');
