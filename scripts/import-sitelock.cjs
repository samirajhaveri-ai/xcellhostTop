const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied web-security-sitelock.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const faqStart = originalMain.search(/<section\b[^>]*id="faq"/);
if (faqStart < 0) throw new Error('The supplied SiteLock page must contain its FAQ boundary.');
// Replace the existing hero-to-use-cases range with the supplied hero-to-Why-XcellHost range.
// The Angular product page continues to provide its existing FAQ, insights and closing sections.
const modal = originalMain.slice(originalMain.indexOf('<div class="sl-mod"'))
  .replace('class="sl-mod"', 'class="sl-mod modal"');
let content = originalMain.slice(0, faqStart) + modal;
content = content.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
  .replaceAll('href="website-security-solutions.html"', 'href="/website-security-solutions" target="_top"')
  .replace('href="#">Security', 'href="/category/security" target="_top">Security')
  .replaceAll('href="#contact"', 'href="#ppCtaT"')
  .replaceAll('href="#faq"', 'href="#ppFaq"');
const logo = '<img src="/assets/images/sitelock-logo.png" alt="SiteLock" width="120" height="29">';
content = content.replace(/<!-- LOGO SLOT:[\s\S]*?--><span class="sl-lt" aria-hidden="true">S<\/span>(?:<b>SiteLock<\/b>|SiteLock)/g, logo);
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'SiteLock enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
let runtime = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/window\.scrollTo\(/g, 'window.scrollOuter(')
  .replace("t.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", "window.hostingJumpTo(t.id)");
// Keep the picker in the host page's normal scrolling flow, with keyboard-accessible controls.
runtime = runtime.replace(/\/\* ===== sticky plan picker ===== \*\/[\s\S]*?(?=\/\* ===== shared rAF ticker ===== \*\/)/, '');
const overrides = `<style>
  .sl-pick{position:relative!important;top:auto!important;transform:none!important;opacity:1!important;pointer-events:auto!important}
  .sl-pw img{display:inline-block;object-fit:contain;vertical-align:middle;background:white;border-radius:5px;padding:3px 8px;width:120px;height:29px}
  .sl-wm img{object-fit:contain;background:white;border-radius:5px;padding:3px 8px}
  #import-status:empty{display:none}
  #import-status{position:absolute;bottom:20px;left:24px;z-index:300;background:#041e42;color:white;border-radius:10px;padding:12px 18px}
</style>`;
const bridge = `<script>
  XH.toast=function(message){var status=document.getElementById('import-status');status.textContent=message;clearTimeout(status._timer);status._timer=setTimeout(function(){status.textContent='';},3000);};
</script>`;
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SiteLock Website Security | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main>' + content + '</main><p id="import-status" role="status" aria-live="polite"></p><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-sitelock.html'), html);
console.log('Imported SiteLock hero through Why XcellHost, including five animated scenes and the plan configurator.');
