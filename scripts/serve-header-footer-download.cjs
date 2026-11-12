// Local download link: node scripts/serve-header-footer-download.cjs
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { pipeline } = require('node:stream');
const archive = path.resolve(__dirname, '../exports/xcellhost-header-footer.zip');
const downloadPath = '/downloads/xcellhost-header-footer.zip';
fs.accessSync(archive, fs.constants.R_OK);
const server = http.createServer((request, response) => {
  const pathname = new URL(request.url, 'http://localhost').pathname;
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return;
  }
  if (pathname === '/') { response.writeHead(302, { Location: downloadPath }); response.end(); return; }
  if (pathname !== downloadPath) { response.writeHead(404); response.end('Download not found.'); return; }
  response.writeHead(200, {
    'Content-Type': 'application/zip',
    'Content-Disposition': 'attachment; filename="xcellhost-header-footer.zip"',
    'Content-Length': fs.statSync(archive).size,
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  if (request.method === 'HEAD') { response.end(); return; }
  pipeline(fs.createReadStream(archive), response, () => {});
});
server.listen(4300, '127.0.0.1', () => console.log(`Download ready: http://127.0.0.1:4300${downloadPath}`));
server.on('error', error => { console.error(error.message); process.exitCode = 1; });
