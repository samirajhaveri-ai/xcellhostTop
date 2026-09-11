import { readFileSync, writeFileSync } from 'node:fs';

const sourceFile = String.raw`C:\Users\vaishnavig\Downloads\page-HTML files\New folder\watchtower.html`;
const outputFile = new URL('../src/app/data/watchtower-reference.data.ts', import.meta.url);
const html = readFileSync(sourceFile, 'utf8');

const styles = [...html.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
  .map((match) => match[1])
  .join('\n')
  .replace(/:root/g, ':host');

const contentStart = html.search(/<section\b[^>]*class="[^"]*\bwt-hero\b[^"]*"/i);
const whyOffset = html.slice(contentStart).search(/<section\b[^>]*id="why"/i);
const contentEnd = whyOffset < 0 ? -1 : contentStart + whyOffset;
if (contentStart < 0 || contentEnd < 0) {
  throw new Error('Could not locate the Watchtower hero-to-features content range.');
}

const content = html.slice(contentStart, contentEnd);
const banner = `/**\n * Generated from the supplied watchtower.html reference.\n * Re-run scripts/generate-watchtower-data.mjs when that file changes.\n */\n`;

writeFileSync(
  outputFile,
  `${banner}export const WATCHTOWER_REFERENCE_STYLES = ${JSON.stringify(styles)};\n\nexport const WATCHTOWER_REFERENCE_HTML = ${JSON.stringify(content)};\n`,
  'utf8',
);

console.log('Generated the Watchtower reference content.');
