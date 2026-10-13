import express, { type ErrorRequestHandler } from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { allowedOrigins } from './config.js';
import { KnowledgeStore, retrieve } from './knowledge.js';
import { ApiError, type AiProvider, type Message, type Source } from './types.js';

export function validateMessages(body: unknown): Message[] {
  const value = body as { messages?: unknown } | null;
  if (!value || !Array.isArray(value.messages) || !value.messages.length || value.messages.length > 11) throw new ApiError(400, 'invalid_request', 'Please send a question with a shorter conversation.');
  let total = 0;
  const messages = value.messages.map((raw: unknown, i): Message => {
    const message = raw as Partial<Message> | null;
    const expected = i % 2 ? 'assistant' : 'user';
    if (!message || message.role !== expected || typeof message.content !== 'string' || !message.content.trim() || message.content.length > (expected === 'user' ? 2000 : 10000)) {
      throw new ApiError(400, 'invalid_request', 'Please send a valid question of up to 2,000 characters.');
    }
    total += message.content.length;
    return { role: expected, content: message.content.trim() };
  });
  if (messages.at(-1)?.role !== 'user' || total > 30000) throw new ApiError(400, 'invalid_request', 'Your conversation is too long. Please clear the chat and try again.');
  return messages;
}

interface AppOptions {
  provider: AiProvider;
  store?: Pick<KnowledgeStore, 'load'>;
  origins?: string[];
  rateMax?: number;
  maxConcurrent?: number;
  dailyBudget?: number;
}
export function createApp(options: AppOptions) {
  const app = express();
  const store = options.store ?? new KnowledgeStore();
  const origins = new Set(options.origins ?? allowedOrigins());
  let active = 0, requestsToday = 0, day = new Date().toISOString().slice(0, 10);
  app.disable('x-powered-by');
  // Set only when a trusted reverse proxy is actually in front of this process.
  if (process.env['AI_TRUST_PROXY'] === 'loopback') app.set('trust proxy', 'loopback');
  app.use(helmet());
  app.use('/api/ai', (req, res, next) => {
    res.set('Cache-Control', 'no-store');
    const origin = req.get('origin');
    if ((origin && !origins.has(origin)) || req.get('sec-fetch-site') === 'cross-site' && !origin) {
      res.status(403).json({ error: 'Please use XcellGenie on the XcellHost website.', code: 'origin_denied' }); return;
    }
    if (origin) { res.set('Access-Control-Allow-Origin', origin); res.vary('Origin'); }
    if (req.method === 'OPTIONS') {
      res.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
      res.set('Access-Control-Allow-Headers', 'Content-Type'); res.status(204).end(); return;
    }
    next();
  });
  app.get('/api/ai/health', async (_req, res) => {
    try { await store.load(); res.json({ status: 'ready' }); }
    catch { res.status(503).json({ status: 'knowledge_pending' }); }
  });
  app.use('/api/ai/chat', rateLimit({
    windowMs: 10 * 60 * 1000, limit: options.rateMax ?? 20, standardHeaders: 'draft-8', legacyHeaders: false,
    message: { error: 'You’ve reached the chat limit. Please try again in a few minutes or contact our team.', code: 'rate_limited' },
  }));
  app.use(express.json({ limit: '40kb', strict: true }));
  app.post('/api/ai/chat', async (req, res, next) => {
    const controller = new AbortController();
    const disconnected = (): void => { if (!res.writableEnded) controller.abort(); };
    let admitted = false;
    try {
      if (!req.is('application/json')) throw new ApiError(415, 'invalid_content_type', 'Please send a JSON question.');
      const messages = validateMessages(req.body);
      const today = new Date().toISOString().slice(0, 10);
      if (today !== day) { requestsToday = 0; day = today; }
      if (active >= (options.maxConcurrent ?? 8) || requestsToday >= (options.dailyBudget ?? 2000)) {
        res.set('Retry-After', '60'); throw new ApiError(429, 'capacity_limit', 'XcellGenie is busy. Please try again later or contact our team.');
      }
      active++; requestsToday++; admitted = true;
      res.on('close', disconnected);
      const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(45000)]);
      const index = await store.load();
      // Recent customer turns retain product names for questions such as “what about recovery?”.
      const query = messages.filter(message => message.role === 'user').slice(-2).map(message => message.content).join('\n');
      const vector = (await options.provider.embed([query], signal))[0];
      if (!vector) throw new ApiError(503, 'retrieval_failed', 'Knowledge search is temporarily unavailable.');
      const chunks = retrieve(index.chunks, vector, query);
      if (!chunks.length) {
        res.json({ answer: 'I don’t have enough relevant information in the XcellHost knowledge snapshot to answer that reliably. An XcellHost specialist can help confirm the details or arrange a demo.', sources: [{ title: 'Contact XcellHost', url: 'https://xcellhost.cloud/contact' }] }); return;
      }
      let answer = await options.provider.answer(messages, chunks, signal);
      const sources: Source[] = [];
      for (const chunk of chunks) for (const url of chunk.urls) if (!sources.some(source => source.url === url)) sources.push({ title: chunk.title, url });
      const allowedLinks = new Set([...sources.map(source => source.url), 'https://xcellhost.cloud/contact', 'https://xcellhost.cloud/support-overview']);
      answer = answer.replace(/https?:\/\/[^\s<>"\]]+/g, raw => {
        const link = raw.replace(/[.,;:)]+$/, '');
        return allowedLinks.has(link) ? raw : '[Please use the verified source links below]';
      });
      if (/\b(pric\w*|cost|quote|sla|contract|incident|ransomware|dpdp\w*|legal|compliance|commit\w*)\b/i.test(messages.at(-1)!.content) &&
          !/specialist.*confirm|confirm.*specialist/is.test(answer)) answer += '\n\nAn XcellHost specialist must confirm applicable pricing, contractual, security and compliance details before you commit.';
      if (signal.aborted) throw new ApiError(504, 'timeout', 'XcellGenie took longer than expected. Please retry.');
      res.json({ answer, sources: sources.slice(0, 6) });
    } catch (error) { if (!controller.signal.aborted) next(error); }
    finally { if (admitted) active--; res.off('close', disconnected); }
  });
  app.all('/api/ai/chat', (_req, res) => { res.set('Allow', 'POST'); res.status(405).json({ error: 'Please send a question using POST.', code: 'method_not_allowed' }); });
  app.use((_req, res) => { res.status(404).json({ error: 'Endpoint not found.' }); });
  const handleError: ErrorRequestHandler = (error: unknown, _req, res, _next) => {
    if (res.headersSent) return;
    if (error instanceof ApiError) { res.status(error.status).json({ error: error.message, code: error.code }); return; }
    const kind = (error as { type?: string })?.type;
    if (kind === 'entity.too.large') { res.status(413).json({ error: 'Your conversation is too long. Please clear the chat.', code: 'payload_too_large' }); return; }
    if (kind === 'entity.parse.failed') { res.status(400).json({ error: 'Please send a valid JSON question.', code: 'invalid_json' }); return; }
    // No exception, upstream body, request, header or customer message is logged.
    res.status(503).json({ error: 'XcellGenie is temporarily unavailable. Please retry or contact our team.', code: 'unavailable' });
  };
  app.use(handleError);
  return app;
}
