const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public', 'sitemap-cms-pages.json');
const endpoint = 'https://xcellhost.cloud/api/cms.php';

async function collection(name, prefix) {
  const pages = [];
  let page = 1;
  let pageCount = 1;
  do {
    const url = new URL(endpoint);
    url.searchParams.set('collection', name);
    url.searchParams.set('sort[0]', 'date:desc');
    url.searchParams.set('sort[1]', 'time:desc');
    url.searchParams.set('pagination[page]', String(page));
    url.searchParams.set('pagination[pageSize]', '100');
    const response = await fetch(url, { headers: { accept: 'application/json' } });
    if (response.status === 404) return [];
    if (!response.ok) throw new Error(`${name}: HTTP ${response.status}`);
    const payload = await response.json();
    for (const item of payload.data ?? []) {
      if (!item.slug?.trim() || !item.title?.trim()) continue;
      pages.push({
        path: `${prefix}/${item.slug.trim().replace(/^\/+|\/+$/g, '')}`,
        title: item.title.trim(),
        lastModified: item.updatedAt || item.publishedAt || '',
      });
    }
    pageCount = payload.meta?.pagination?.pageCount ?? 1;
    page += 1;
  } while (page <= pageCount);
  return pages;
}

async function main() {
  const pages = [
    ...await collection('blogs', 'insights'),
    ...await collection('use-cases', 'use-cases'),
  ].sort((a, b) => a.path.localeCompare(b.path));
  fs.writeFileSync(output, JSON.stringify({
    generatedAt: new Date().toISOString(),
    source: endpoint,
    pages,
  }, null, 2) + '\n');
  console.log(`Saved ${pages.length} published CMS pages to ${output}.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
