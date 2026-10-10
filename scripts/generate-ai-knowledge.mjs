import { readFileSync, writeFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { resolve } from 'node:path';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Usage: node scripts/generate-ai-knowledge.mjs <knowledge.txt>');
const text = readFileSync(sourcePath, 'utf8');
const sections = text.split(/\n={20,}\n(?=SOURCE TITLE:)/).slice(1);
const chunks = [];
for (const section of sections) {
  const title = section.match(/^SOURCE TITLE: (.+)$/m)?.[1]?.trim();
  const sourceUrl = section.match(/^SOURCE URL: (.+)$/m)?.[1]?.trim();
  if (!title || !sourceUrl) continue;
  const url = new URL(sourceUrl);
  if (!['www.xcellhost.top', 'xcellhost.top'].includes(url.hostname) || url.protocol !== 'https:') continue;
  const separator = section.match(/\n-{20,}\n/);
  if (!separator || separator.index === undefined) continue;
  const content = section.slice(separator.index + separator[0].length).trim();
  const characters = Array.from(content); // Never split emoji surrogate pairs.
  for (let offset = 0; offset < characters.length; offset += 2000) {
    chunks.push({ title, url: url.pathname, text: characters.slice(offset, offset + 2400).join('') });
  }
}
if (!chunks.length) throw new Error('No source pages found; existing corpus was not changed.');
const corpus = { snapshot: text.match(/Snapshot date: (.+)/)?.[1] ?? 'Unknown', chunks };
const compressed = gzipSync(JSON.stringify(corpus)).toString('base64');
const php = '<?php\n// Generated from supplied public website reference text. No HTTP output.\nreturn json_decode(gzdecode(base64_decode(\n' + "'" + compressed + "'" + '\n)), true, 512, JSON_THROW_ON_ERROR);\n';
writeFileSync(resolve('public/api/ai-knowledge.php'), php);
console.log('Indexed ' + chunks.length + ' excerpts from ' + new Set(chunks.map(chunk => chunk.url)).size + ' source URLs.');
