const { spawn } = require('node:child_process');
const path = require('node:path');

function parsePhpReply(stdout) {
  try {
    const reply = JSON.parse(stdout.trim());
    if (Number.isInteger(reply.status) && reply.status >= 200 && reply.status <= 599 && reply.body && typeof reply.body === 'object') {
      return { status: reply.status, body: reply.body };
    }
  } catch {}
  return { status: 502, body: { error: 'The local AI endpoint is unavailable.' } };
}

function createAiDevProxy(spawnPhp = spawn) {
  return async function aiDevProxy(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    const buffers = [];
    let length = 0;
    for await (const chunk of req) {
      length += chunk.length;
      if (length > 65536) {
        res.statusCode = 413;
        res.end(JSON.stringify({ error: 'Your conversation is too long. Start a new chat.' }));
        return req.url.split('?')[0];
      }
      buffers.push(chunk);
    }
    const result = await new Promise(resolve => {
      const child = spawnPhp(process.env.PHP_BINARY || 'php', [path.join(__dirname, '../public/api/ask-ai.php')], {
        windowsHide: true,
        env: { ...process.env, XCELLHOST_AI_PROXY: '1', REQUEST_METHOD: req.method || 'GET', CONTENT_TYPE: req.headers['content-type'] || '', HTTP_HOST: req.headers.host || '', HTTP_ORIGIN: req.headers.origin || '', REMOTE_ADDR: req.socket.remoteAddress || 'local' },
      });
      let stdout = '', stderr = '';
      const timer = setTimeout(() => {
        child.kill();
        resolve({ status: 504, body: { error: 'The assistant took too long. Please try again.' } });
      }, 40000);
      child.stdout.on('data', chunk => stdout += chunk);
      child.stderr.on('data', chunk => stderr += chunk);
      child.on('error', () => {
        clearTimeout(timer);
        resolve({ status: 503, body: { error: 'The local AI endpoint needs PHP 8+ on PATH. Restart the development server after setup.' } });
      });
      child.on('close', () => {
        clearTimeout(timer);
        // Only controlled, credential-free diagnostics are allowed in server logs.
        for (const line of stderr.split(/\r?\n/)) {
          const diagnostic = line.match(/XcellHost AI: (\{.*\})$/);
          if (diagnostic) {
            try {
              const { code, httpStatus, curlErrorNumber } = JSON.parse(diagnostic[1]);
              console.warn('XcellHost AI:', JSON.stringify({ code, httpStatus, curlErrorNumber }));
            } catch {}
          }
        }
        resolve(parsePhpReply(stdout));
      });
      child.stdin.on('error', () => {});
      child.stdin.end(Buffer.concat(buffers));
    });
    res.statusCode = result.status;
    res.end(JSON.stringify(result.body));
    return req.url.split('?')[0];
  };
}

module.exports = createAiDevProxy();
module.exports.createAiDevProxy = createAiDevProxy;
module.exports.parsePhpReply = parsePhpReply;
