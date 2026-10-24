const { execFile } = require('node:child_process');
const path = require('node:path');

function createBlogRssProxy(run = execFile) {
  return async function blogRssProxy(req, res) {
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (!['GET', 'HEAD'].includes(req.method)) {
      res.statusCode = 405;
      res.setHeader('Allow', 'GET, HEAD');
      res.end();
      return '/feeds/blog';
    }
    const result = await new Promise(resolve => {
      run(process.env.PHP_BINARY || 'php', [path.join(__dirname, '../public/feeds/blog.php')],
        { timeout: 20000, maxBuffer: 1024 * 1024 }, (error, stdout) => resolve({ error, stdout }));
    });
    const xml = typeof result.stdout === 'string' ? result.stdout.trim() : '';
    const valid = !result.error && xml.startsWith('<?xml') && xml.includes('<rss version="2.0"');
    res.statusCode = valid ? 200 : 503;
    res.setHeader('Cache-Control', valid ? 'public, max-age=300' : 'no-store');
    if (!valid) res.setHeader('Retry-After', '300');
    res.end(req.method === 'HEAD' ? '' : valid ? xml : '<error>Blog feed temporarily unavailable. Please retry shortly.</error>');
    // Vite sees a completed response and must not serve the PHP source as a file.
    return '/feeds/blog';
  };
}

module.exports = createBlogRssProxy();
module.exports.createBlogRssProxy = createBlogRssProxy;
