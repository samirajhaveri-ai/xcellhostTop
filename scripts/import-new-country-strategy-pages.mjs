import fs from 'node:fs';
import path from 'node:path';

const countries = [
  ['ireland-go-to-market-strategy.html', 'Ireland'],
  ['oman-go-to-market-strategy.html', 'Oman'],
  ['argentina-go-to-market-strategy.html', 'Argentina'],
  ['thailand-go-to-market-strategy.html', 'Thailand'],
  ['uganda-go-to-market-strategy.html', 'Uganda'],
  ['egypt-go-to-market-strategy.html', 'Egypt'],
  ['brazil-go-to-market-strategy.html', 'Brazil'],
  ['ivory-coast-go-to-market-strategy.html', 'Ivory Coast'],
  ['portugal-go-to-market-strategy.html', 'Portugal'],
  ['morocco-go-to-market-strategy.html', 'Morocco'],
];

const sourceDirectory = process.argv[2];
if (!sourceDirectory) {
  throw new Error('Pass the directory containing the supplied country strategy HTML files.');
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

for (const [fileName, country] of countries) {
  const sourcePath = path.resolve(sourceDirectory, fileName);
  const source = fs.readFileSync(sourcePath, 'utf8');
  const documentOpen = source.match(/<!doctype[^>]*>\s*<html[^>]*>/i)?.[0];
  const head = source.match(/<head\b[\s\S]*?<\/head>/i)?.[0];
  const mainMatch = source.match(/<main\b([^>]*)>([\s\S]*?)<\/main>/i);

  if (!documentOpen || !head || !mainMatch) {
    throw new Error(`Could not find the document shell and main content in ${sourcePath}.`);
  }

  // Retain the strategy through its complete FAQ. Angular supplies Insights
  // and the default closing content, so source/country/contact blocks go away.
  const mainBody = mainMatch[2].slice(0, faqEnd(mainMatch[2], sourcePath)).trimEnd();
  const afterMain = source.slice(source.indexOf('</main>', mainMatch.index) + '</main>'.length);
  const scripts = [...afterMain.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)]
    .map(match => match[0])
    .join('\n');

  const imported = `${documentOpen}${head}<body><main${mainMatch[1]}>${mainBody}\n</main>${scripts}</body></html>\n`;
  const destinationPath = path.join(destinationDirectory, fileName);
  fs.writeFileSync(destinationPath, imported, 'utf8');
  console.log(`Imported ${country} strategy -> ${path.relative(process.cwd(), destinationPath)}`);
}
