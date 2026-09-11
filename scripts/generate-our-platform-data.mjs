import { readFileSync, writeFileSync } from 'node:fs';

const sourceFile = String.raw`C:\Users\vaishnavig\Downloads\page-HTML files\New folder\xcellhost-platform 1.html`;
const outputFile = new URL('../src/app/data/our-platform-reference.data.ts', import.meta.url);
const html = readFileSync(sourceFile, 'utf8');

const styles = [...html.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
  .map((match) => match[1])
  .join('\n')
  .replace(/:root/g, ':host');

const contentStart = html.indexOf('<section class="pp-hero"');
const contentEnd = html.indexOf('<!-- CART DRAWER -->', contentStart);
if (contentStart < 0 || contentEnd < 0) {
  throw new Error('Could not locate the supplied Our Platform page content.');
}

const content = html.slice(contentStart, contentEnd);
const banner = `/**\n * Generated from the supplied xcellhost-platform 1.html reference.\n * Re-run scripts/generate-our-platform-data.mjs when that file changes.\n */\n`;

writeFileSync(
  outputFile,
  `${banner}export const OUR_PLATFORM_REFERENCE_STYLES = ${JSON.stringify(styles)};\n\nexport const OUR_PLATFORM_REFERENCE_HTML = ${JSON.stringify(content)};\n`,
  'utf8',
);

console.log('Generated the Our Platform reference content.');
