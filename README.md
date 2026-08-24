# XcellHost — Angular website

The XcellHost site, rebuilt as an Angular 20 application. The design, copy and
behaviour are the same as the single-file HTML draft it was ported from; what has
changed is that the content now lives in plain, clearly-labelled TypeScript files
you can edit without touching any markup.

---

## Quick start

You need **Node.js 20.19 or newer**. Check with `node -v`.

```bash
npm install        # once, after downloading
npm start          # opens http://localhost:4200 with live reload
```

Edit any file and the browser refreshes by itself.

To produce the files you upload to your server:

```bash
npm run package    # builds, then writes release/xcellhost-site.zip
```

---

## Deploying to Plesk (xcellhost.top)

1. Run `npm run package`. You get **`release/xcellhost-site.zip`**.
2. In Plesk open **Files** → go into **httpdocs**.
3. Delete what is already there (or move it aside), then **Upload** the zip.
4. Right-click the zip → **Extract Files**. Delete the zip afterwards.
5. Open the site. Every page, including deep links like
   `xcellhost.top/tally-on-cloud/`, should work.

**The `.htaccess` file matters.** It is inside the zip and must sit next to
`index.html`. Without it the home page works but refreshing any other page shows
a 404 — the server needs to be told to hand every URL to the app. Plesk's File
Manager hides dotfiles by default, so tick **Show hidden files** if you want to
confirm it is there.

Running on Windows/IIS instead? `web.config` (also in the zip) does the same job.
Running nginx? Copy the contents of `release/nginx.conf` into
**Domains → xcellhost.top → Apache & nginx Settings → Additional nginx directives**.

### Serving from a subfolder

If the site will not live at the domain root, build with the path:

```bash
npx ng build --base-href /subfolder/
```

and change `RewriteBase /` to `RewriteBase /subfolder/` in `.htaccess`.

---

## Changing the site content

This is the part worth knowing. Everything is in **`src/app/data/`**, one file per
kind of content. They are ordinary TypeScript — lists and objects — and each one
has comments explaining the shape.

| File | What it controls |
|---|---|
| `site.data.ts` | Phone number, WhatsApp number, email, address. **Change these once and they update everywhere on the site.** Also the rotating hero words and the EDR comparison table. |
| `directory.data.ts` | The 205-service catalogue: name, one-line description, category and group. This drives the directory section, site search, the chatbot and the compare tool at the same time. |
| `services.data.ts` | Per-service detail: price, overview paragraph, features and FAQs. |
| `products.data.ts` | The flagship products (Tally on Cloud, Acronis Backup) that have fully bespoke pages, plus the hand-written "deep" content for the core services. |
| `nav.data.ts` | The header mega-menu: 8 menus, 29 tabs, 208 links. |
| `category.data.ts` | The default content used by any service without its own entry — benefits, use cases, FAQs, testimonials, "Why XcellHost" rows. |
| `blog.data.ts` | Insight articles. The key is the URL slug. |
| `dpdpa.data.ts` | The nine SecureSetu DPDPA modules. |
| `usecases.data.ts` | Source material for the auto-generated use-case and security sections. |
| `chat.data.ts` | The website assistant's canned answers and scope rules. |
| `models.ts` | The type definitions. Read this if you are unsure what shape something should be. |

### Worked examples

**Change the phone number** → `src/app/data/site.data.ts`, edit `phone`. Done;
it updates the top bar, the footer, the chatbot and every call-to-action.

**Change a price** → `src/app/data/services.data.ts`, find the service by its
lowercase name, edit `price`. The 1/2/3-year plan ladder on the product page
recalculates from it automatically (2 years is 10% off, 3 years 20% — those two
numbers are `PLAN_DISCOUNTS` in `src/app/core/product-page.service.ts`).

**Add a service** → add an entry to `DIRECTORY` in `directory.data.ts`. It
appears in the directory and in search, and gets its own page immediately, using
the category defaults. Add a matching entry in `services.data.ts` when you want
bespoke copy for it.

**Add an article** → add a key to `BLOG_POSTS` in `blog.data.ts`. The key becomes
the URL: `/insights/your-key/`. Body blocks are `['p', 'paragraph']`,
`['h', 'heading']`, `['ul', ['item', 'item']]` and `['cta', 'closing line']`.

**Change what the homepage promotes** → `HOME_CARDS` at the top of
`src/app/sections/insights-section.component.ts`.

**Swap a photo or the logo** → replace the file in `src/assets/images/`, keeping
the same filename. No code change needed.

---

## Connecting the forms

Out of the box the enquiry forms validate, show a reference number, and hand off
to WhatsApp or email — the same as the draft did. To have them post somewhere,
put the URL in **`src/environments/environment.prod.ts`**:

```ts
checkoutWebhook: 'https://your-endpoint/quote',
trialWebhook:    'https://your-endpoint/trial',
callbackWebhook: 'https://your-endpoint/callback',
docWebhook:      'https://your-endpoint/download',
partnerWebhook:  'https://your-endpoint/partner',
chatEndpoint:    '',   // a chat API; empty means canned answers only
faqApi:          '',   // optional live answers on product FAQ blocks
```

Any field left empty keeps the fallback behaviour, so you can wire them up one at
a time. Rebuild after changing this file.

---

## How the project is laid out

```
src/
  index.html              page shell, meta tags, fonts, structured data
  styles.css              the complete original stylesheet, unchanged
  assets/                 images and video as real files
  environments/           webhook URLs and build-time settings
  app/
    data/                 <- all site content lives here
    core/                 services: catalogue, cart, overlays, chat, SEO, leads
    layout/               header, footer, utility bar, promo bar, intro splash
    sections/             homepage sections
    overlays/             cart drawer, chatbot, search, modals
    pages/                the routed pages
    app.routes.ts         the URL map
```

`styles.css` is the original stylesheet copied across untouched, and the
components reproduce the original class names and nesting. That is deliberate:
it is why the rendered pages are pixel-identical to the draft. If you rename a
class in a template, the styling for that block will stop applying.

---

## URLs

These match the original site, so nothing already indexed by Google breaks.

| URL | Page |
|---|---|
| `/` | Home |
| `/tally-on-cloud/` | A service page — the slug is the service name |
| `/category/cloud/` | A category landing page |
| `/insights/` | Article index |
| `/insights/tally-vs-local/` | One article |
| `/securesetu-dpdpa/` | The DPDPA platform |
| `/securesetu-dpdpa/consent-management/` | One DPDPA module |
| `/about/`, `/contact/`, `/pricing/` | Company pages |
| `/compare/` | Service comparison |

---

## Notes

- **Fonts** load from Google Fonts via a `<link>`, exactly as the original did.
  Angular's build-time font inlining is switched off in `angular.json` so the
  build works on machines without internet access.
- **The quote cart now survives a page reload** (it is kept in the browser's
  local storage). The draft lost it on refresh.
- **Scroll locking is handled centrally**, so closing a modal that was opened on
  top of another layer no longer unlocks the page underneath.
- **The Insights and Company menus** contain links to pages that do not exist yet
  (Webinars, Glossary, Careers and similar). They render as inert, exactly as in
  the draft. To turn one on, add it to `CONTENT_LINKS` near the top of
  `src/app/layout/header.component.ts`.
- **`npm test`** is wired up but no tests are written yet.
