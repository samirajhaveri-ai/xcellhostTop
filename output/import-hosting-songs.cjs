const fs = require('node:fs');
const pages = [
  ['windows-hosting', 'window-hosting'],
  ['linux-hosting', 'linux-hosting'],
  ['wordpress-hosting', 'wordpress-hosting'],
  ['ai-website-builder', 'website-builder'],
  ['migrate-to-xcellhost', 'migrate-to-xcellhost'],
  ['website-backup', 'website-backup'],
];
(async () => {
  const results = await Promise.all(pages.map(async ([slug, liveSlug]) => {
    const url = `https://www.xcellhost.cloud/${liveSlug}/`;
    const response = await fetch(url);
    if (!response.ok) throw Error(`${url}: ${response.status}`);
    const html = await response.text();
    fs.writeFileSync(`output/live-${slug}.html`, html);
    const tracks = [...new Set([...html.matchAll(/https?:[^\s"'<>]+\.(?:mp3|wav|m4a)(?:\?[^\s"'<>]*)?/gi)].map(m => m[0].replace(/&amp;/g, '&')))];
    const labels = [...html.matchAll(/Listen to our[^<\n]+/gi)].map(m => m[0].trim());
    return { slug, url, tracks, labels: [...new Set(labels)] };
  }));
  console.log(JSON.stringify(results, null, 2));
  fs.writeFileSync('output/hosting-song-sources.json', JSON.stringify(results, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
