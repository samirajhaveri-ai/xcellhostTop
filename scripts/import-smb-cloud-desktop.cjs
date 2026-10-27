const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Pass the supplied smb-cloud-desktop.html file.');
const source = fs.readFileSync(input, 'utf8');
const fullMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const steps = fullMain.indexOf('id="steps"');
if (steps < 0) throw new Error('The supplied getting-started section was not found.');
const main = fullMain.slice(0, fullMain.indexOf('</section>', steps) + '</section>'.length)
  .replace('class="sd-sts" id="sdSt"', 'class="sd-sts" id="sdStepsLine"')
  .replace(/href="https?:\/\/(?:www\.)?xcellhost\.(?:top|cloud)\/"/g, 'href="/" target="_top"');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]
  .replace("cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", 'window.hostingJumpTo(cf.id)')
  .replace("var stE=$id('sdSt');", "var stE=$id('sdStepsLine');")
  .replace(/\$id\('cQuote'\)\.addEventListener\('click',function\(\)\{[^\n]*\}\);/, "$id('cQuote').addEventListener('click',function(e){e.preventDefault();e.stopPropagation();if(cfgLast)XH.open('xhCallback',{topic:'SMB Cloud Desktop: '+cfgLast.sum+' · billing '+(cfgLast.term===12?'12 months':'monthly')});});")
  .replace(/\binnerHeight\b/g, 'parent.innerHeight');
const integration = `<script>XH.toast=function(message){var status=document.getElementById('import-status');status.textContent=message;status.style.top=Math.max(16,-(window.frameElement?frameElement.getBoundingClientRect().top:0)+parent.innerHeight-100)+'px';clearTimeout(status._timer);status._timer=setTimeout(function(){status.textContent='';},3000);};</script>`;
const overrides = '<style>#sdHero .hero-grid>*{min-width:0}#sdHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#sdHero .lh-title .nm{display:inline}#import-status:empty{display:none}#import-status{position:absolute;left:18px;max-width:calc(100% - 36px);z-index:500;background:#0b132b;color:white;padding:12px 18px;border-radius:10px}</style>';
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SMB Cloud Desktop | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"></head><body><main id="main">' + main + '</main><p id="import-status" role="status" aria-live="polite"></p><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', 'SMB Cloud Desktop enquiry:') + integration + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new Function(script[1]);
fs.writeFileSync(path.join(root, 'public/imported-smb-cloud-desktop.html'), html);
console.log('Imported SMB Cloud Desktop from hero through the five getting-started steps, including animations, pricing and tools.');
