// Run after adding supplied quotes to customer-testimonials.data.ts.
const fs = require('node:fs');
const path = require('node:path');
const { pageSlug, replaceReferenceSections } = require('./customer-testimonials.cjs');
const root = path.resolve(__dirname, '..');
const pages = new Map();
for (const file of fs.readdirSync(path.join(root, 'public')).filter(file => file.endsWith('.html'))) {
  const target = path.join(root, 'public', file);
  const before = fs.readFileSync(target, 'utf8');
  if (!/request customer references|data-testimonial-page=/i.test(before)) continue;
  const after = replaceReferenceSections(before, file);
  if (after !== before) fs.writeFileSync(target, after);
  if (/request customer references/i.test(after)) throw new Error('Reference block not replaced: ' + file);
  const slug = pageSlug(file);
  pages.set(slug, { slug, title: before.match(/<title>(.*?)<\/title>/s)?.[1].replace(/\s*[|—–]\s*XcellHost.*$/i, '') || slug });
}
for (const [slug, title] of [['zoho-workspace', 'Zoho Workspace'], ['zoom-conferenceing', 'Zoom Workplace'], ['dedicated-ai-servers', 'Dedicated AI Servers'], ['microsoft-365-to-google-workspace-migration', 'Microsoft 365 To Google Workspace Migration'], ['microsoft-365-tenant-to-tenant-migration', 'Microsoft 365 Tenant-To-Tenant Migration'], ['nvidia-b300-nodes', 'NVIDIA B300 Nodes']]) pages.set(slug, { slug, title });
const sorted = [...pages.values()].sort((a, b) => a.slug.localeCompare(b.slug));
fs.mkdirSync(path.join(root, 'output'), { recursive: true });
fs.writeFileSync(path.join(root, 'output/updated-testimonial-pages.json'), JSON.stringify(sorted, null, 2));
const escape = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
fs.writeFileSync(path.join(root, 'output/updated-testimonial-pages.html'), `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Updated testimonial pages</title><style>body{max-width:1000px;margin:40px auto;padding:0 20px;font:16px/1.6 system-ui;color:#041e42}a{color:#1565d8}li{padding:5px 0}code{font-size:13px}</style><h1>Updated Testimonial Pages (${sorted.length})</h1><p>The old customer-reference button sections have been removed. The Tally-style testimonial cards are ready; each section stays hidden until customer quotes are supplied for that product.</p><ol>${sorted.map(p=>`<li><a href="http://localhost:4200/${escape(p.slug)}">${escape(p.title)}</a><br><code>http://localhost:4200/${escape(p.slug)}</code></li>`).join('')}</ol></html>`);
console.log('Updated ' + sorted.length + ' unique page routes. Full localhost list: output/updated-testimonial-pages.html');
