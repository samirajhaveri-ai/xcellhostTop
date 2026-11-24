import fs from 'node:fs';
import path from 'node:path';

const mappings = [
  ['barracuda-services.html', 'barracuda-services.html'],
  ['sama-compliance.html', 'sama-compliance.html'],
  ['nesa-compliance.html', 'nesa-compliance.html'],
];

const sourceDirectory = process.argv[2];
if (!sourceDirectory) {
  throw new Error('Pass the directory containing the supplied Barracuda, SAMA and NESA HTML files.');
}

const destinationDirectory = path.resolve('public/imported-pages');
fs.mkdirSync(destinationDirectory, { recursive: true });

function faqEnd(mainBody, sourcePath) {
  const faq = /<section\b[^>]*\bid=["']faq["'][^>]*>/i.exec(mainBody);
  if (!faq) throw new Error(`Could not find the FAQ section in ${sourcePath}.`);

  const tags = /<\/?section\b[^>]*>/gi;
  tags.lastIndex = faq.index;
  let depth = 0;
  for (let tag = tags.exec(mainBody); tag; tag = tags.exec(mainBody)) {
    depth += /^<section\b/i.test(tag[0]) ? 1 : -1;
    if (depth === 0) return tags.lastIndex;
  }
  throw new Error(`Could not find the end of the FAQ section in ${sourcePath}.`);
}

for (const [sourceName, destinationName] of mappings) {
  const sourcePath = path.resolve(sourceDirectory, sourceName);
  const source = fs.readFileSync(sourcePath, 'utf8');
  const documentOpen = source.match(/<!doctype[^>]*>\s*<html[^>]*>/i)?.[0];
  let head = source.match(/<head\b[\s\S]*?<\/head>/i)?.[0];
  const mainMatch = source.match(/<main\b([^>]*)>([\s\S]*?)<\/main>/i);

  if (!documentOpen || !head || !mainMatch) {
    throw new Error(`Could not find the document shell and main content in ${sourcePath}.`);
  }

  if (['sama-compliance.html', 'nesa-compliance.html'].includes(destinationName)) {
    head = head.replace('</head>', '<link rel="stylesheet" href="/assets/styles/international-compliance-headings.css"></head>');
  }

  // Keep the complete FAQ, then let Angular supply Insights and the shared
  // closing sections. This also drops the standalone CTA/contact blocks.
  const mainBody = mainMatch[2].slice(0, faqEnd(mainMatch[2], sourcePath)).trimEnd();

  // Keep page-specific behaviour while excluding the supplied header, footer,
  // newsletter, search, mobile navigation and floating contact controls.
  const afterMain = source.slice(source.indexOf('</main>', mainMatch.index) + '</main>'.length);
  const scripts = [...afterMain.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)]
    .map(match => match[0])
    .join('\n');

  const imported = `${documentOpen}${head}<body><main${mainMatch[1]}>${mainBody}\n</main>${scripts}</body></html>\n`;
  const destinationPath = path.join(destinationDirectory, destinationName);
  fs.writeFileSync(destinationPath, imported, 'utf8');
  console.log(`Imported ${sourceName} -> ${path.relative(process.cwd(), destinationPath)}`);
}
