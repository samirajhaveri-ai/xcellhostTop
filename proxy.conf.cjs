const { execFile } = require('node:child_process');
const path = require('node:path');
const existing = require('./proxy.conf.json');

module.exports = {
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
