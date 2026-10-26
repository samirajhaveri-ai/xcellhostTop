const { execFile } = require('node:child_process');
const path = require('node:path');
const existing = require('./proxy.conf.json');

const cmsCollectionPath = /^\/api\/(blogs|case-studies|use-cases|data-sheets|cheat-sheets|whitepapers|guides|ebooks|checklists)(?=\?|$)/;

function rewriteCmsRequest(requestPath) {
  const match = requestPath.match(cmsCollectionPath);
  if (!match) return requestPath;
  const queryIndex = requestPath.indexOf('?');
  const query = queryIndex >= 0 ? requestPath.slice(queryIndex + 1) : '';
  return `/api/cms.php?collection=${encodeURIComponent(match[1])}${query ? `&${query}` : ''}`;
}

module.exports = {
  // Direct development connections to the Strapi host can be blocked or time
  // out. Route every public content collection through the same allow-listed
  // CMS gateway as production while preserving the frontend's /api/* URLs.
  [cmsCollectionPath.source]: {
    target: 'https://xcellhost.cloud',
    secure: true,
    changeOrigin: true,
    rewrite: rewriteCmsRequest,
  },
  // Angular rewrites public PHP assets to /@fs/... before Vite's proxy runs.
  // Use an extensionless feed URL, and also handle the legacy PHP asset URL.
  '^/(?:feeds/blog/?|feeds/blog[.]php|@fs/.*[/]public[/]feeds[/]blog[.]php)(?:[?].*)?$': {
    target: 'http://localhost',
    bypass: require('./scripts/blog-rss-dev-proxy.cjs'),
  },
  '/api/auth.php': {
    target: 'http://localhost',
    bypass: require('./scripts/auth-dev-proxy.cjs'),
  },
  // Keep this regex first: Angular normalizes glob entries by moving them last.
  '^/api/ai/': {
    target: 'http://127.0.0.1:3001',
    secure: false,
    changeOrigin: false,
  },
  '/api/ai-assistant': {
    target: 'http://localhost',
    bypass: require('./scripts/ai-dev-proxy.cjs'),
  },
  '/feeds/youtube.php': {
    target: 'http://localhost',
    bypass: async (_req, res) => {
      const body = await new Promise(resolve => {
        execFile(process.env.PHP_BINARY || 'php', [path.join(__dirname, 'public/feeds/youtube.php')],
          { timeout: 20000, maxBuffer: 1024 * 1024 }, (error, stdout) => {
            if (!error && stdout.trim().startsWith('{')) return resolve(stdout);
            const snapshot = require('./public/feeds/youtube-snapshot.json');
            resolve(JSON.stringify({ ...snapshot, stale: true }));
          });
      });
      res.setHeader('Content-Type', 'application/json');
      res.end(body);
      return '/feeds/youtube.php';
    },
  },
  ...existing,
};
