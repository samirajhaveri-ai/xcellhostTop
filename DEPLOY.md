# Deploying to Plesk — step by step

Everything you need is in `release/xcellhost-site.zip`. If that file is missing,
run `npm run package` to create it.

---

## 1. Point the domain at Plesk

In Plesk, make sure **xcellhost.top** exists under **Websites & Domains**. Note
the document root — it is normally `httpdocs`.

## 2. Upload

1. **Websites & Domains → xcellhost.top → File Manager**
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

- `xcellhost.top` loads fine
- `xcellhost.top/tally-on-cloud/` gives a 404 when opened directly or refreshed

If your server runs **nginx** rather than Apache, `.htaccess` is ignored. Instead
go to **Websites & Domains → xcellhost.top → Apache & nginx Settings**, scroll to
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

- `https://xcellhost.top/`
- `https://xcellhost.top/tally-on-cloud/`
- `https://xcellhost.top/insights/tally-vs-local/`
- `https://xcellhost.top/securesetu-dpdpa/`
- `https://xcellhost.top/category/cloud/`

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
