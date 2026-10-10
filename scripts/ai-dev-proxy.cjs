const { spawn } = require('node:child_process');
const path = require('node:path');

module.exports = async function aiDevProxy(req, res) {
  const buffers = [];
  let length = 0;
  for await (const chunk of req) {
    length += chunk.length;
    if (length > 65536) { res.statusCode = 413; res.end(JSON.stringify({ error: 'Your conversation is too long. Start a new chat.' })); return '/api/ai-assistant'; }
    buffers.push(chunk);
  }
  const body = await new Promise(resolve => {
    const child = spawn(process.env.PHP_BINARY || 'php', [path.join(__dirname, '../public/api/ask-ai.php')], {
      windowsHide: true,
      env: { ...process.env, REQUEST_METHOD: req.method || 'GET', CONTENT_TYPE: req.headers['content-type'] || '', HTTP_HOST: req.headers.host || '', HTTP_ORIGIN: req.headers.origin || '', REMOTE_ADDR: req.socket.remoteAddress || 'local' },
    });
    let stdout = '';
    const timer = setTimeout(() => { child.kill(); resolve(JSON.stringify({ error: 'The assistant took too long. Please try again.' })); }, 40000);
    child.stdout.on('data', chunk => stdout += chunk);
    child.stderr.on('data', () => {});
    child.on('error', () => { clearTimeout(timer); resolve(JSON.stringify({ error: 'The local AI endpoint needs PHP 8+ on PATH. Restart the development server after setup.' })); });
    child.on('close', () => { clearTimeout(timer); resolve(stdout.trim().startsWith('{') ? stdout : JSON.stringify({ error: 'The local AI endpoint is unavailable.' })); });
    child.stdin.on('error', () => {});
    child.stdin.end(Buffer.concat(buffers));
  });
  try { res.statusCode = JSON.parse(body).error ? 503 : 200; } catch { res.statusCode = 503; }
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(body);
  return '/api/ai-assistant';
};
