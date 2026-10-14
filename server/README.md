# XcellGenie API and local knowledge retrieval

The production website uses **POST /api/ask-ai.php** (localhost uses the virtual PHP proxy **POST /api/ai-assistant**) for both the floating assistant and search-dialog AI mode. The PHP endpoint calls OpenAI directly with the bundled, searchable knowledge snapshot, so uploading the website to PHP-enabled Plesk hosting does not require a Node daemon or vector-index provisioning. See the **AI mode on localhost and Plesk** section in [DEPLOY.md](../DEPLOY.md) for the default setup.

The TypeScript/Express vector-retrieval backend remains available as an optional advanced deployment through POST /api/ai/chat. The following sections describe that optional service; it is not required by the default website endpoint.

## Optional Node service: local setup

Use Node.js 22.12+ (or Node.js 24), and run commands from the repository root. In Windows PowerShell use `npm.cmd` if execution policy blocks `npm`.

```powershell
npm.cmd ci
Copy-Item server/.env.example server/.env
```

Manually open **`server/.env`** and set its `OPENAI_API_KEY` value to your replacement key. This file is the only credential source. Do not place credentials in Angular environments, PHP configuration, shell arguments, repository files or screenshots. The application does not use the key previously pasted into chat. Revoke that exposed key before configuring a replacement. Restart the backend after changing the file.

The supplied public knowledge documents have been copied into:

- `outputs/01-XcellHost-Cloud-AI-Knowledge-2026-10-13.txt`
- `outputs/02-XcellHost-Cloud-Full-Service-Catalogue-2026-10-13.txt`

Validate ingestion without credentials or provider calls:

```powershell
npm.cmd run ai:index:check
```

After configuring the replacement key, build the vector index and start both services:

```powershell
npm.cmd run ai:index
npm.cmd run dev
```

Open `http://localhost:4200` and click the bottom-right **Ask XcellHost AI** launcher. The API listens on `127.0.0.1:3001`. Angular's development proxy routes `/api/ai/**` locally before the existing `/api` Strapi proxy. Stop with Ctrl+C.

To run separately in two terminals:

```powershell
npm.cmd run ai:dev
# Second terminal
npm.cmd run frontend
```

`ai:dev` watches compiled JavaScript. After editing server TypeScript, rerun `npm.cmd run ai:build` (or rebuild/restart `ai:dev`). `npm run dev:node` starts both services; to use Node retrieval, explicitly change the Angular chat endpoint to `/api/ai/chat`. `npm start` uses the default PHP endpoint and opens Angular. Use `npm run frontend` only when the backend is already running separately.

## Knowledge updates and behaviour

Replace the two text files and run `npm.cmd run ai:index` again. Headings define core-document chunks; each catalogue service is a separate record. Long sections are split into bounded chunks and retain their source URLs. Existing vectors for unchanged chunks are reused. The complete index is atomically replaced at **`server/data/knowledge-index.json`**, outside browser assets and ignored by Git. Failed rebuilds leave the previous index intact. The running API reloads a changed index automatically.

Every question is embedded before hybrid cosine/keyword retrieval selects at most six relevant chunks within a 10,000-character context budget. Only those chunks reach the Responses API alongside bounded conversation history and server-controlled instructions. User-supplied system roles are rejected. Retrieved documents are untrusted references, not instructions. Sources are restricted to XcellHost HTTPS domains; invented links are removed. Low-relevance queries receive an honest contact route.

The assistant explains products simply, asks useful discovery questions and refers pricing, contracts, SLAs, incidents, legal/compliance outcomes and final commitments to specialists. It cannot inspect accounts, create tickets or complete bookings. Sources are a dated snapshot; no live website lookup is claimed. The attached Zoho setup guide was not followed as platform instructions.

Without a configured key or completed vector index, the widget still opens and provides a safe error with retry/contact routes. **The first live embedding build and paid-model smoke test must be performed after you configure the replacement key.** Automated tests use mocked transport and never require a real credential.

## Checks

```powershell
npm.cmd run typecheck
npm.cmd run test:ai
npm.cmd run ai:index:check
npm.cmd test -- --watch=false --browsers=ChromeHeadless --include=src/app/core/chat.service.spec.ts --include=src/app/overlays/ai-assistant.component.spec.ts
npm.cmd run build
```

There is no ESLint configuration in this repository. TypeScript strict checks, Angular template compilation, backend tests and browser checks cover this change. API tests cover validation, CORS, limits, unavailable knowledge, provider failure redaction and source handling. Retrieval tests cover heading boundaries, catalogue isolation, vector similarity, budgets and persistent-index validation.

The production dependency audit is clean after compatible Angular 20 and dependency security patches. The full audit still reports six high-severity advisories in the existing Karma/braces development test dependency tree, with no compatible fix offered; no forced Karma downgrade was applied. The existing Company page CSS size warning remains informational. The default PHP endpoint and provider/retrieval helpers are covered by `php scripts/test-ai-backend.php`, `php scripts/test-ai-handler.php`, and `node --test scripts/test-ai-dev-proxy.cjs`.

## Optional Node service: production deployment

1. Build Angular with the existing site deployment process. Separately run `npm.cmd run ai:build`. Upload the backend source/build, root dependency manifests and the two `outputs/` text files to a **private application directory outside `httpdocs`**. Install dependencies there with `npm ci --omit=dev` after compiling, or compile in CI before deployment.
2. Create private `server/.env` on the host, restrict its filesystem permissions, run `ai:index` during provisioning, and persist `server/data/` across releases. Do not put `.env`, knowledge text or the vector database in Angular assets or public downloads. If using a build-only deployment, run `node server/dist/rebuild-index.js` after installing runtime dependencies.
3. Run `node server/dist/index.js` under a process supervisor with restart and graceful shutdown. Serve the website over HTTPS and reverse-proxy **only `/api/ai/`** to `http://127.0.0.1:3001` before other API/static rules. The frontend zip alone does not deploy this service.
4. Set nonsecret process configuration as appropriate: `AI_ALLOWED_ORIGINS` is a comma-separated exact origin list (no wildcard), `AI_PORT` defaults to `3001`. Remove localhost origins in production. If your trusted proxy connects on loopback, set `AI_TRUST_PROXY=loopback`; overwrite `X-Forwarded-For` at the edge, never preserve a client's forged value. Do not expose the Node listener publicly.
5. For the optional Node backend, use the nginx proxy below. Do not rewrite its requests to `ask-ai.php`: that endpoint is the independent default PHP implementation.
6. Rate limits default to 20 questions per IP per 10 minutes, eight concurrent upstream requests and 2,000 requests per process per UTC day. These counters are in-memory: deploy one API process or add a shared gateway limiter/WAF before scaling across processes or hosts. Add an edge request/body limit and spending limits in the OpenAI project. CORS is not authentication; public bots also need abuse monitoring. Do not log request bodies, transcripts, authorization headers or upstream error bodies.
7. `GET /api/ai/health` reports knowledge readiness without revealing credentials. It does not test provider billing, model entitlement or key validity. Monitor HTTP status counts and latency through your gateway, with sensitive fields redacted.

Example nginx location (inside your existing HTTPS virtual host, ahead of broad `/api` routing):

```nginx
location ^~ /api/ai/ {
    proxy_pass http://127.0.0.1:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $remote_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_read_timeout 55s;
    client_max_body_size 40k;
}
```

Chats are kept in browser memory only and cleared on refresh or Clear chat. Relevant customer messages and knowledge excerpts are sent to OpenAI for inference; apply your organisation's privacy notice, retention and vendor review before launch.
