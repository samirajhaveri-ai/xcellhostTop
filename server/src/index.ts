import { createApp } from './app.js';
import { readApiKey } from './config.js';
import { OpenAiProvider } from './provider.js';

const port = Number(process.env['AI_PORT'] ?? 3001);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid AI_PORT');
const server = createApp({ provider: new OpenAiProvider(readApiKey()) }).listen(port, '127.0.0.1', () => {
  console.info(`XcellGenie API listening on 127.0.0.1:${port}`);
});
server.requestTimeout = 50000;
server.headersTimeout = 10000;
for (const event of ['SIGTERM', 'SIGINT'] as const) process.on(event, () => {
  server.close(() => process.exit(0));
  setTimeout(() => process.exit(0), 10000).unref();
});
