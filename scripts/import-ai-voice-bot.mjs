import fs from 'node:fs';
import path from 'node:path';

const source = fs.readFileSync(process.argv[2] || 'C:/Users/VibhaTiwari/Downloads/ai-voice-bot.html', 'utf8');
const head = source.match(/<head>([\s\S]*?)<\/head>/i)?.[1];
const body = source.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1];
const symbols = body?.match(/<svg\b[\s\S]*?<\/svg>/i)?.[0];
let main = source.match(/<main[^>]*>[\s\S]*?<\/main>/i)?.[0];
let script = [...source.matchAll(/<script>([\s\S]*?)<\/script>/gi)].at(-1)?.[1];
if (!head || !symbols || !main || !script || !main.includes('<section class="sec alt" id="talk">')) {
  throw new Error('The supplied AI Voice Bot document structure has changed.');
}

// The Angular page provides the header, enquiry form and closing sections.
main = main.slice(0, main.indexOf('<section class="sec alt" id="talk">')) + '</main>';
script = script.replace(/\/\* theme \*\/[\s\S]*?(?=\/\* reveal \+ counters \+ faq \*\/)/, '');
main = main.replace('Designed for Indian callers <span class="acc">and Indian rules.</span>', 'Security &amp; Compliance — <span class="acc">AI Voice Bot</span>')
  .replace('AI voice technology. <span class="acc">Set up and run by XcellHost.</span>', 'Why XcellHost For <span class="acc">AI Voice Bot</span>');

const titleCase = (markup) => markup.split(/(<[^>]+>|&[^;\s]+;)/g)
  .map(part => /^(<|&)/.test(part) ? part : part.replace(/\b[a-z]/g, letter => letter.toUpperCase())).join('');
main = main.replace(/(<h[2-6]\b[^>]*>)([\s\S]*?)(<\/h[2-6]>)/gi, (_, start, text, end) => start + titleCase(text) + end);
const enquiryLink = 'href="/contact" data-open="xhCallback" data-topic="AI Voice Bot Demo"';
main = main.replaceAll('href="#talk"', enquiryLink);
script = script.replaceAll('href="#talk"', enquiryLink);
main = main.replace(/href="https:\/\/xcellhost\.cloud\/([^"?#]*)"/g, 'href="/$1" target="_top"');

const output = `<!doctype html>\n<html lang="en-IN"><head>${head}\n<link rel="stylesheet" href="/assets/styles/ai-voice-bot.css">\n</head><body>\n${symbols}\n${main}\n<div id="xhToast" role="status"></div>\n<script>${script}</script>\n</body></html>\n`;
const destination = path.resolve('public/imported-pages/ai-voice-bot.html');
fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.writeFileSync(destination, output);
console.log(`Imported ${destination}`);
