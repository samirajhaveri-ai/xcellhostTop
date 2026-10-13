"""Import Acronis Direct Cloud Backup main content and hero media, preserving the site's shared shell."""
from pathlib import Path
from html import unescape
import json
import re
import sys

source = Path(sys.argv[1]).read_text(encoding='utf-8')
css = re.search(r'<style>(.*?)</style>', source, re.S).group(1)
# The iframe grows with its content; viewport-based spacing must use the host viewport.
css = re.sub(r'(-?\d+(?:\.\d+)?)vh', lambda m: 'calc(var(--ad-viewport-height, 800px) * '+str(float(m.group(1))/100)+')', css)
interactive = re.findall(r'<script>(.*?)</script>', source, re.S)[-1]
interactive = interactive.replace(
    'var vh=innerHeight,y=scrollY+vh*.5',
    'var vh=window.parent.innerHeight,y=(window.frameElement?-window.frameElement.getBoundingClientRect().top:scrollY)+vh*.5')
shim = r"""
window.XH = {
  $: (s, root) => (root || document).querySelector(s),
  $$: (s, root) => Array.from((root || document).querySelectorAll(s)),
  reduce: matchMedia('(prefers-reduced-motion: reduce)').matches,
  fine: matchMedia('(pointer: fine)').matches,
  inr: (n, decimals=0) => '₹' + Number(n || 0).toLocaleString('en-IN', {minimumFractionDigits:decimals, maximumFractionDigits:decimals}),
  flash: el => {if(el) el.animate([{opacity:.5},{opacity:1}], {duration:300});},
  fillRange: input => {input.style.setProperty('--p', ((Number(input.value)-Number(input.min))/(Number(input.max)-Number(input.min))*100)+'%');},
  toast: message => {document.getElementById('import-status').textContent=message;},
  whenVisible: (el, fn) => {
    if(!el) return;
    new IntersectionObserver(entries => entries.forEach(e => fn(e.isIntersecting)), {rootMargin:'120px'}).observe(el);
  },
  cart: {add: item => document.dispatchEvent(new CustomEvent('import-cart', {detail:item}))}
};
document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
document.querySelectorAll('[data-count]').forEach(el => {
  const decimals = Number(el.dataset.dec || 0);
  el.textContent = (el.dataset.pre || '') + Number(el.dataset.count).toLocaleString('en-IN', {minimumFractionDigits:decimals, maximumFractionDigits:decimals}) + (el.dataset.suf || '');
});
document.querySelectorAll('.seg').forEach(seg => {
  const active = seg.querySelector('button.on') || seg.querySelector('button');
  if(active) seg.dataset.value = active.dataset.v;
});
document.querySelectorAll('input[type="range"]').forEach(input => {
  XH.fillRange(input);input.addEventListener('input', () => XH.fillRange(input));
});
let journeyShift = 0;
function syncHostViewport() {
  document.documentElement.style.setProperty('--ad-viewport-height', window.parent.innerHeight+'px');
  const frame = window.frameElement, journey = document.getElementById('adJr'), stage = document.getElementById('adJrV');
  if(frame && journey && stage) {
    if(stage.offsetParent) {
      const top = stage.getBoundingClientRect().top-journeyShift;
      const limit = Math.max(0, journey.getBoundingClientRect().bottom-top-stage.offsetHeight);
      journeyShift = Math.max(0, Math.min(limit, 96-frame.getBoundingClientRect().top-top));
      stage.style.translate = '0 '+journeyShift+'px';
    } else {journeyShift=0;stage.style.translate='none';}
  }
  if(frame) window.dispatchEvent(new Event('scroll'));
}
if(window.parent !== window) {
  window.parent.addEventListener('scroll', syncHostViewport, {passive:true});
  window.parent.addEventListener('resize', syncHostViewport, {passive:true});
  window.addEventListener('unload', () => {
    window.parent.removeEventListener('scroll', syncHostViewport);
    window.parent.removeEventListener('resize', syncHostViewport);
  });
} else {window.addEventListener('resize', syncHostViewport, {passive:true});}
syncHostViewport();
function selectTab(bar, key) {
  bar.querySelectorAll('[data-tab]').forEach(button => {
    const selected = button.dataset.tab === key;
    button.classList.toggle('on', selected); button.setAttribute('aria-selected', String(selected));
  });
  document.querySelectorAll('[data-group="'+bar.dataset.tabs+'"][data-panel]').forEach(panel => panel.classList.toggle('on', panel.dataset.panel === key));
  bar.dispatchEvent(new CustomEvent('xh:tab', {detail:{key}}));
}
document.addEventListener('click', event => {
  const target = event.target;
  const stepButton = target.closest('.stp button');
  if(stepButton) {
    const input = stepButton.parentNode.querySelector('input');
    input.value = Math.max(Number(input.min||0), Math.min(Number(input.max||9999), Number(input.value||0)+Number(input.step||1)*Number(stepButton.dataset.step)));
    input.dispatchEvent(new Event('input', {bubbles:true}));
  }
  const copyButton = target.closest('[data-copy]');
  if(copyButton && navigator.clipboard) navigator.clipboard.writeText(copyButton.dataset.copy || location.href).then(() => XH.toast('Copied to clipboard'), () => XH.toast('Select the code and copy it manually'));
  const segButton = target.closest('.seg button');
  if(segButton) {
    const seg = segButton.parentNode;
    seg.querySelectorAll('button').forEach(button => {button.classList.toggle('on', button === segButton);button.setAttribute('aria-pressed', String(button === segButton));});
    seg.dataset.value = segButton.dataset.v;seg.dispatchEvent(new CustomEvent('change', {bubbles:true}));
  }
  const tabButton = target.closest('[data-tabs] [data-tab]');
  if(tabButton) selectTab(tabButton.closest('[data-tabs]'), tabButton.dataset.tab);
  const tabLink = target.closest('[data-tabgo]');
  if(tabLink) {
    const bar = document.querySelector('[data-tabs]');
    if(bar) selectTab(bar, tabLink.dataset.tabgo);
  }
  if(target.closest('[data-open],a[href="#contact"]')) {
    event.preventDefault();document.dispatchEvent(new CustomEvent('import-callback', {detail:'Acronis Direct Cloud Backup'}));
  }
});
"""

def document(content, overrides=''):
    return ('<!doctype html><html lang="en-IN"><head><meta charset="UTF-8">'
            '<meta name="viewport" content="width=device-width,initial-scale=1">'
            '<title>Acronis Direct Cloud Backup | XcellHost</title><style>' + css +
            '\n.rv{opacity:1!important;transform:none!important}main{display:block}' + overrides +
            '</style></head><body><main>' + content +
            '<p id="import-status" role="status" aria-live="polite"></p></main><script>' + shim +
            '</script><script>' + interactive + '</script></body></html>')

# The shared page supplies customer reviews, videos, FAQs and the closing CTA.
ids = ['overview','how','journey','destinations','secure','simulate','rule321','integrated','rpo','estimate','awards','healthcheck','india','pricing']
sections = []
for section_id in ids:
    match = re.search(r'<section\b[^>]*\bid="'+section_id+r'"[^>]*>.*?</section>', source, re.S)
    if not match:
        raise ValueError('Missing Acronis Direct Cloud Backup section: '+section_id)
    sections.append(match.group())
content = '\n'.join(sections)
# Keep internal references to the default closing sections working across frames.
content = content.replace('href="#contact"', 'href="#serviceClosingTitle"')
content = content.replace('href="#watch"', 'href="#ppBlog"')
content = content.replace('href="xcellhost-reseller-program.html"', 'href="/reseller-program" target="_top"')
Path('public/imported-acronis-direct-backup.html').write_text(document(content), encoding='utf-8')

faq_section = re.search(r'<section\b[^>]*\bid="faq"[^>]*>.*?</section>', source, re.S).group()
faq_entries = re.findall(r'<div class="fq(?: open)?"><button[^>]*>(.*?)<i>.*?</button><div class="fa"><p>(.*?)</p>', faq_section, re.S)
if not faq_entries:
    raise ValueError('Missing Direct Cloud Backup FAQs')
def plain_text(html):
    return unescape(re.sub(r'<[^>]+>', '', html)).strip()
faqs = [[plain_text(question), plain_text(answer)] for question, answer in faq_entries[:8]]
Path('src/app/data/acronis-direct-backup-faqs.data.ts').write_text(
    "import { Faq } from './models';\n\nexport const DIRECT_BACKUP_FAQS: Faq[] = " +
    json.dumps(faqs, ensure_ascii=False, indent=2) +
    ';\n',
    encoding='utf-8')

why_section = re.search(r'<section\b[^>]*\bid="why"[^>]*>.*?</section>', source, re.S).group()
why_entries = re.findall(r'<div><i>.*?</i><span><b>(.*?)</b><p>(.*?)</p>', why_section, re.S)
if len(why_entries) != 6:
    raise ValueError('Expected six Acronis Direct Cloud Backup partner benefits')
icons = [
    'M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5 0 6 6',
    'M2 4h20v13H2V4Zm6 17h8m-4-4v4',
    'M21 12a9 9 0 1 1-3-6.7L21 8m0-5v5h-5',
    'M4 15v-3a8 8 0 0 1 16 0v3M2 14h5v7H2v-7Zm15 0h5v7h-5v-7Z',
    'M6 4h12M6 9h12M15 20l-7-7h2a4 4 0 0 0 0-8',
    'M6 3h12v18H6V3Zm3 5h6m-6 4h6m-6 4h4',
]
why = [{'icon': icons[index], 'title': plain_text(title), 'body': plain_text(body)}
       for index, (title, body) in enumerate(why_entries)]
Path('src/app/data/acronis-direct-backup-why.data.ts').write_text(
    'export const DIRECT_BACKUP_WHY = ' + json.dumps(why, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')

stage_start = source.index('<div class="stage"', source.index('id="adHero"'))
stage_end = source.index('\n    </div>\n  </div>\n</section>', stage_start)
hero = '<div class="hero lh" id="adHero">'+source[stage_start:stage_end]+'</div>'
hero_css = '''html,body{background:transparent}.hero.lh{padding:12px 16px;background:transparent;min-height:0;overflow:visible}
.hero.lh .stage{width:100%;min-height:0;margin:0;padding-bottom:0;grid-template-columns:minmax(0,1fr)}
.hero.lh .stage>.lh-tilt{width:100%;max-width:none;min-width:0;transform:none!important}
.adv{width:100%;max-width:none}.lh-chip,.lh-orbit{display:none}
.lh-powered{position:relative;left:auto;bottom:auto;margin:14px auto 0;width:max-content}
#import-status:empty{display:none}'''
Path('public/imported-acronis-direct-backup-hero.html').write_text(document(hero, hero_css), encoding='utf-8')
