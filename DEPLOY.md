# Deploying to Plesk — step by step

## Case Studies in Strapi

The website reads published customer stories from the Strapi collection endpoint
`/api/case-studies` and refreshes it every 30 seconds. The public routes remain
`/case-studies` and `/case-studies/:slug`.

In `https://admin.xcellhost.cloud/admin`, create a **Collection Type** named
**Case Study** with API ID `case-study` (plural API ID `case-studies`). Add these
fields:

| Field | Strapi type | Required |
| --- | --- | --- |
| `slug` | UID, attached to `headline` | Yes |
| `customer` | Short text | Yes |
| `headline` | Short text | Yes |
| `mainCategory` | Short text | Yes |
| `subCategory` | Short text | Yes |
| `industry` | Short text | Yes |
| `profile` | Short text | Yes |
| `metric` | Short text | Yes |
| `metricLabel` | Short text | Yes |
| `summary` | Long text | Yes |
| `challenge` | Long text | Yes |
| `solution` | Long text | Yes |
| `impact` | Long text or JSON | Yes |
| `services` | Long text or JSON | Yes |
| `quote` | Long text | No |
| `quoteBy` | Short text | No |
| `relatedPages` | Long text or JSON | No |
| `coverImage` | Media, single image | Recommended |

For Long text list fields, enter one item per line (comma-separated values also
work). JSON fields may be arrays of strings. After saving the content type, open
**Settings -> Users & Permissions Plugin -> Roles -> Public -> Case-study** and
enable `find`. Create and publish an entry; drafts are intentionally not shown.

Verify the setup by opening
`https://admin.xcellhost.cloud/api/case-studies?populate=coverImage`. A successful
setup returns JSON with a `data` array instead of HTTP 404. Uploaded cover images
appear on both the Case Studies listing and detail page. Until this collection is
created or whenever Strapi is unavailable, the bundled customer stories remain
visible as a safe fallback.

## Insights document tabs

The Insights page includes Data Sheets, Cheat Sheets, Whitepapers, Guides and
Ebooks. They use the same menu categories, subcategories and products as blogs.
To publish content, create the following optional Strapi collection API IDs:
`data-sheets`, `cheat-sheets`, `whitepapers`, `guides`, `ebooks`.

Use the blog field names: `title`, `slug`, `description`, `content`, `author`,
`date`, `time`, `category`, `mainCategory`, `subCategory`, `product`, `relatedPages`
and a single-image media field `coverImage`. Add a text field `downloadUrl` with
the public PDF/document URL (absolute HTTPS URL or `/uploads/...`). Publish the
entries and enable public `find` access for those collections. Entries without
a usable HTTP(S) document URL are excluded to avoid broken cards.

The website refreshes these collections every 30 seconds. Until collections and
documents are published, their tabs display zero and an empty-state message;
no sample documents are shown as real content.

## YouTube uploads on Insights

The build includes `feeds/youtube.php` and `feeds/youtube-snapshot.json`.
Enable PHP 8+ with the cURL extension for the domain in Plesk. The endpoint
reads the public XcellHost channel Videos tab and caches its latest 30 uploads
for 15 minutes. It needs outbound HTTPS access to www.youtube.com and a writable
PHP temporary directory. No YouTube API key is required.

Verify `/feeds/youtube.php` returns JSON with `status: "ok"` and nonempty `items`.
If PHP or YouTube is unavailable, the browser uses the bundled saved list and
labels it as saved uploads; that list does not update until live access recovers.
YouTube can change its public page structure, so the parser may need maintenance.

For local development, restart `npm start` after this update. The Angular proxy
runs the same PHP endpoint using `php` on PATH (or `PHP_BINARY`). If PHP is
unavailable locally, it serves the saved list. Direct `ng serve` also uses this
proxy. Existing blog API proxy routes remain in place.

Everything you need is in `release/xcellhost-site.zip`. If that file is missing,
run `npm run package` to create it.

---

## 1. Point the domain at Plesk

In Plesk, make sure **xcellhost.cloud** exists under **Websites & Domains**. Note
the document root — it is normally `httpdocs`.

## 2. Upload

1. **Websites & Domains → xcellhost.cloud → File Manager**
2. Open **httpdocs**
3. If there is an existing site there, select everything and delete it (or rename
   the folder to `httpdocs-old` and create a fresh `httpdocs` if you would rather
   keep a copy)
4. **Upload** → choose `xcellhost-site.zip`
5. Right-click the uploaded zip → **Extract Files**
6. Delete the zip

After extracting, `httpdocs` should contain:

```
index.html
main-XXXXXXXX.js
styles-XXXXXXXX.css
chunk-*.js
assets/
  images/
  video/
.htaccess          <- hidden by default
web.config         <- only needed on Windows/IIS
```

## 3. Confirm `.htaccess` arrived

In File Manager, use the settings menu to **show hidden files**. You should see
`.htaccess` beside `index.html`.

This file is what makes deep links work. Without it:

- `xcellhost.cloud` loads fine
- `xcellhost.cloud/tally-on-cloud/` gives a 404 when opened directly or refreshed

The route fallback now passes through `social-preview.php`. It returns the same
Angular application while adding the product-specific Open Graph image, title
and description that WhatsApp, Facebook, LinkedIn and other link-preview bots
read before JavaScript runs. Keep PHP 8+ enabled for the domain and upload
`social-preview.php` plus `assets/social-previews.json` with every release.

If your server runs **nginx** rather than Apache, `.htaccess` is ignored. Instead
go to **Websites & Domains → xcellhost.cloud → Apache & nginx Settings**, scroll to
**Additional nginx directives**, and paste in the contents of
`release/nginx.conf`. Click OK, then test a deep link again.

## 4. Turn on HTTPS

**Websites & Domains → SSL/TLS Certificates → Install a free certificate from
Let's Encrypt.** Tick the `www` subdomain too.

The `.htaccess` already redirects HTTP to HTTPS. If you upload before the
certificate is issued, the site will redirect to a broken HTTPS URL — in that
case comment out the `RewriteCond %{HTTPS}` block in `.htaccess` until the
certificate is live, then uncomment it.

## 5. Check it works

Visit each of these directly (typing the URL, not clicking through) and refresh
each one:

- `https://xcellhost.cloud/`
- `https://xcellhost.cloud/tally-on-cloud/`
- `https://xcellhost.cloud/insights/tally-vs-local/`
- `https://xcellhost.cloud/securesetu-dpdpa/`
- `https://xcellhost.cloud/category/cloud/`

All five should load the right page. If the first works and the others 404, the
rewrite rule is not being applied — go back to step 3.

---

## Updating the site later

1. Make your edits (content lives in `src/app/data/` — see README.md)
2. `npm run package`
3. Upload and extract the new zip over `httpdocs`

You can safely leave `assets/` in place between deploys if only text changed, but
uploading everything is simpler and takes about a minute.

The filenames of the JavaScript and CSS change on every build, and `.htaccess`
tells browsers never to cache `index.html`. That means visitors pick up the new
version on their next page load — you do not need to ask anyone to clear their
cache.

---

## Troubleshooting

**Every page except the home page 404s**
`.htaccess` is missing, or the server is nginx and needs `nginx.conf` instead.
See step 3.

**The page loads but is unstyled**
The `.css` file did not upload, or the site is in a subfolder and was built for
the root. Rebuild with `npx ng build --base-href /your-subfolder/`.

**Fonts look wrong**
The site loads fonts from Google Fonts. Check the server can reach
`fonts.googleapis.com`, or self-host the fonts and update the `<link>` in
`src/index.html`.

**Changes are not showing**
Confirm you re-ran `npm run package` and uploaded the new zip. Then hard-refresh
once (Ctrl+F5) to be sure.

**Forms do not send anywhere**
That is the default. Add your endpoint URLs to
`src/environments/environment.prod.ts` and rebuild — see README.md.

## Newsletter duplicate subscriptions (Zoho Forms)

The footer newsletter remembers emails only after Zoho redirects to the exact
success callback. Repeat submissions in the same browser show
"This email address is already subscribed." Email comparisons ignore surrounding
spaces and letter casing. Failed or unconfirmed attempts remain retryable.
Browser storage is a convenience check, not a global subscriber database; it does
not contain subscriptions made before this change or from other browsers.

To enforce one submission per email across devices, open **NewsletterSubscriptionForm**
in Zoho Forms, select the **Email** field and enable **No Duplicates**. Customize
its duplicate validation message to "This email address is already subscribed."
See https://help.zoho.com/portal/en/kb/forms/field-types/form-fields/basic-info/articles/email-field.

The current HTML form posts to Zoho in a hidden frame. Browser same-origin rules
prevent the website from reading Zoho validation errors. An email not in this
browser's cache that Zoho rejects will therefore display the existing unconfirmed
submission message after 30 seconds. A same-origin backend integration that
returns a structured duplicate status is required to display the site's custom
message for every existing Zoho subscriber. Do not put Zoho credentials in Angular.

## AI mode in website search

The AI mode button opens XcellHost Assist, with follow-up conversation, suggested
questions, copy/retry controls and related page links. The browser posts to
`/api/ask-ai.php`; PHP calls OpenAI's Responses API on the server. The existing
Algolia search and search filters continue to work in search mode.

### Configure the private key

Revoke the key shared in chat and create a replacement project key. Do not put
it in Angular, public files, Git, or a deployment zip.

1. Enable PHP 8.1+ with cURL and zlib for the site in Plesk. Allow outbound HTTPS
   to api.openai.com and a writable PHP temporary directory.
2. Copy `deploy/xcellhost-ai-config.example.php` to the directory **above
   httpdocs**, named `xcellhost-ai-config.php`. Set `apiKey` to the replacement
   key. Alternatively, configure `OPENAI_API_KEY` in the PHP process environment.
3. The default model is `gpt-4.1-mini`. Change `model` in the private file or
   set `OPENAI_MODEL` to a Responses-compatible model available to your project.
4. Build and upload the website, including the `api/` directory. Keep the
   private config outside httpdocs; this example configuration is not packaged.
5. Open website search, click **AI mode**, and ask a question. A missing key
   produces an unavailable message, never a simulated AI answer.

For local development, place the private config at the repository root as
`xcellhost-ai-config.php` (gitignored), or set `OPENAI_API_KEY` before starting
`npm start`. PHP must be on PATH, or set `PHP_BINARY` to its executable.
Restart an already running dev server once after this update. The managed
`npm start` launcher also reloads future proxy configuration changes. Local AI
requests use `/api/ai-assistant`, a virtual route handled before Strapi. This
avoids Angular's static assets serving the public PHP file instead of executing
it. Production requests continue to use `/api/ask-ai.php` on the PHP server.
Run `php scripts/check-ai-connection.php` to check the configured provider
connection without printing the API key.

### Knowledge and limits

The supplied 8 October 2026 knowledge snapshot is indexed into 3,132 excerpts
from 775 distinct source URLs in `public/api/ai-knowledge.php`. The PHP data file
returns no HTTP body. The endpoint retrieves relevant excerpts for each question;
this is snapshot knowledge, not live browsing or a complete guarantee of retrieval.
Related source pages are shown with answers. Refresh the knowledge from a new
file with `node scripts/generate-ai-knowledge.mjs "path/to/knowledge.txt"`,
then rebuild and upload. Source text is treated as reference material, never as
agent instructions.

The server accepts at most 12 conversation messages and bounds request size,
response length and provider timeouts. It limits usage to 15 questions per client
IP per hour and 500 site questions per UTC day. It uses the direct server client
IP; configure your trusted reverse proxy before adapting that logic. Configure
project spend limits in OpenAI as well. Conversations stay in browser memory,
are cleared with New chat, and are sent with `store: false`; no conversation
logging is added by this website.

API documentation: https://developers.openai.com/api/docs/guides/text

AI requests retry transient connection and provider failures once, within a bounded
request timeout. Authentication errors and exhausted billing quota are not retried.
Local development retains PHP's response status and prints credential-free
provider diagnostics in the server terminal. Run
`php scripts/test-ai-backend.php` and `node --test scripts/test-ai-dev-proxy.cjs`
for regression checks. Start the site using `npm start` from a normal terminal
with outbound HTTPS access; a development server launched in a restricted sandbox
cannot reach OpenAI. Troubleshooting reference:
https://developers.openai.com/api/docs/guides/error-codes

## Domain migration to xcellhost.cloud (14 October 2026)

Build the release with `npm run package`. Upload `release/xcellhost-site.zip`
to the **xcellhost.cloud** document root and extract it. The release includes
updated CMS endpoints, canonical URLs, JSON-LD, social previews, robots.txt and
a sitemap generated from the public routes and service catalogue. CMS responses
also migrate legacy links and uploaded media URLs before rendering them.
The sitemap includes known public pages; individual live CMS blog/use-case URLs
are not fetched during builds and must be added through a CMS sitemap integration.

Remove `googlebc09ebd4fa488b94.html` from the live document root after deploying:
extracting an archive does not delete files left by an earlier release. The old
Google verification meta tag has also been removed from the source. Use DNS
verification for the new domain in Search Console, or install its new token.

### Hosting issues confirmed against the public CMS

The admin hostname currently serves a self-signed Plesk certificate whose subject
is `CN=Plesk`, rather than a trusted certificate for **admin.xcellhost.cloud**.
In Plesk, open that subdomain's SSL/TLS Certificates settings, issue a trusted
certificate (for example Let's Encrypt), and assign it to the hostname. Keep
certificate verification enabled in production. The diagnostic inspection used
an exception only to identify the public API responses below.

The public blogs endpoint returned 74 published entries, but its response did
not include `Access-Control-Allow-Origin` for `https://xcellhost.cloud`. In the
Strapi backend's `config/middlewares.js` or `config/middlewares.ts`, update the
existing `strapi::cors` entry to allow the new public origins, preserving the
rest of the middleware list, then restart Strapi:

```js
{
  name: 'strapi::cors',
  config: {
    origin: ['https://xcellhost.cloud', 'https://www.xcellhost.cloud'],
  },
}
```

`/api/use-cases` and `/api/case-studies` returned HTTP 404. The website already
falls back to customer stories stored in blogs for case studies. For live use
cases, create/restore the **Use Case** collection (API ID `use-case`, plural
`use-cases`), with the article fields listed above for Insights documents and
`relatedPage`/`relatedPages`. Publish the records and enable Public `find` access.
Changing the website domain cannot restore missing CMS collections or records.

### Redirects and Google migration

Apply the included redirect rules on both the legacy public domain and its www
variant. Apache uses `deploy/.htaccess`; nginx uses the included nginx directive;
IIS uses `deploy/web.config`. They redirect permanently to the new public domain
while preserving the request path and query string. Keep the legacy domain's
DNS and trusted HTTPS certificate working so old HTTPS links reach the redirect.
These are website rules; do not install them on the admin CMS hostname.

In Google Search Console, verify the new domain, submit
`https://xcellhost.cloud/sitemap.xml`, and use Change of Address on the legacy
property. Verification-file removal does not remove search results; Google
updates old URLs as it crawls the redirects. Follow Google's migration guide:
https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes

After deployment, check HTTPS validity and CORS on the CMS, open a blog and use
case from Insights, verify an uploaded cover image, refresh those detail URLs,
and confirm a legacy URL redirects once to the matching new-domain path.

## AI mode on localhost and Plesk

Both AI interfaces use `/api/ask-ai.php` on hosting and `/api/ai-assistant`
on localhost. The virtual local route avoids Angular serving PHP source as a
static asset. Both routes run the same PHP endpoint, which searches the bundled
website knowledge and calls OpenAI using `gpt-5.4-mini`. It does not need a Node
backend or a separate vector index. PHP 8.1+ with cURL, mbstring and zlib is required,
plus outbound verified HTTPS access to `https://api.openai.com` and a writable
PHP temporary directory for request limits.

### Localhost

1. Put a valid, funded OpenAI project key in the ignored `server/.env` file:
   `OPENAI_API_KEY=your-key`. Never paste it into chat or Angular source.
2. Ensure PHP is on PATH. This workstation has PHP at `C:\xampp\php\php.exe`.
   If necessary set `$env:PHP_BINARY = 'C:\xampp\php\php.exe'` in PowerShell.
3. Run `npm.cmd start` from the project root. Angular proxies the PHP endpoint
   locally before the general Strapi API proxy. Restart any older `ng serve`
   session so it loads the updated proxy configuration.
4. Open `http://localhost:4200/insights`, enter AI mode and send a question.
   `php scripts/check-ai-connection.php` performs a real, billable model test
   using the same private configuration without printing the key.

### xcellhost.cloud

1. Upload and extract the new `release/xcellhost-site.zip` into `httpdocs`.
   The archive includes the PHP AI endpoint, retrieval helpers and knowledge.
2. Enable PHP 8.1+ and the extensions listed above for this domain in Plesk.
3. Copy `release/xcellhost-ai-config.example.php` to the directory **above
   httpdocs**, rename it to `xcellhost-ai-config.php`, and set its `apiKey` value
   privately. For example the configuration belongs at
   `/var/www/vhosts/xcellhost.cloud/xcellhost-ai-config.php`, while the website
   belongs at `/var/www/vhosts/xcellhost.cloud/httpdocs`. Restrict access to the
   PHP worker/hosting account. Do not put this private file inside httpdocs.
   Alternatively supply `OPENAI_API_KEY` in the PHP worker environment.
4. Open `https://xcellhost.cloud/api/ask-ai.php`. A configured PHP runtime returns
   `{"status":"ready"}`; missing configuration/extensions return HTTP 503 and
   `{"status":"setup_required"}`. This checks setup, not billing or model access.
5. Send a question from the website to verify provider billing, model access,
   HTTPS connectivity and generated answers. No separate Node application is
   needed for this deployment. The admin CMS's SSL/CORS issues do not affect
   this same-origin AI endpoint.

The website remains honest about unavailable AI: it returns a clear setup or
provider error when the key, billing or connection is missing. The application
cannot generate real OpenAI answers using only static files or an empty API key.
Private configuration is loaded per request, so PHP picks up key changes without
rebuilding the website. Source links stay on XcellHost and chat is kept in browser
memory. Provider storage is disabled in API requests.

The optional Node vector-retrieval service remains documented in `server/README.md`.
The default website deployment uses PHP so the upload package is self-contained
apart from the hosting runtime and private key.
