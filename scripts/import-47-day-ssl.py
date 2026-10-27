"""Import 47-Day SSL main content and hero media, preserving the site's shared shell."""
from pathlib import Path
from html import unescape
import json
import re
import sys

source = Path(sys.argv[1]).read_text(encoding='utf-8')
css = re.search(r'<style>(.*?)</style>', source, re.S).group(1)
# The iframe grows with its content; viewport-based spacing must use the host viewport.
css = re.sub(r'(-?\d+(?:\.\d+)?)vh', lambda m: 'calc(var(--ssl47-viewport-height, 800px) * '+str(float(m.group(1))/100)+')', css)
interactive = re.findall(r'<script>(.*?)</script>', source, re.S)[-1]
interactive = interactive.replace(
    'var y=scrollY+innerHeight*.5',
    'var y=(window.frameElement?-window.frameElement.getBoundingClientRect().top:scrollY)+window.parent.innerHeight*.5')
interactive = re.sub(r"var c=\$id\('contact'\);window.scrollTo.*?XH.toast\(.*?\);", "document.dispatchEvent(new CustomEvent('import-callback', {detail:txt2}));", interactive)
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
  onForm: () => {},
  download: (name, content, type) => {const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},
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
  document.documentElement.style.setProperty('--ssl47-viewport-height', window.parent.innerHeight+'px');
  const frame = window.frameElement, journey = document.getElementById('sfJr'), stage = document.getElementById('sfJrV');
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
    event.preventDefault();document.dispatchEvent(new CustomEvent('import-callback', {detail:'47-Day SSL'}));
  }
});
"""

def document(content, overrides=''):
    return ('<!doctype html><html lang="en-IN"><head><meta charset="UTF-8">'
            '<meta name="viewport" content="width=device-width,initial-scale=1">'
            '<title>47-Day SSL | XcellHost</title><style>' + css +
            '\n.rv{opacity:1!important;transform:none!important}main{display:block}' + overrides +
            '</style></head><body><main>' + content +
            '<p id="import-status" role="status" aria-live="polite"></p></main><script>' + shim +
            '</script><script>' + interactive + '</script></body></html>')

# Keep the existing hero and shared closing sections on the host page.
ids = ['overview','timeline','workload','calc','challenges','outages','risk','path','check','agility','pricing']
sections = []
for section_id in ids:
    match = re.search(r'<section\b[^>]*\bid="'+section_id+r'"[^>]*>.*?</section>', source, re.S)
    if not match:
        raise ValueError('Missing 47-Day SSL section: '+section_id)
    sections.append(match.group())
content = '\n'.join(sections)
content = content.replace('href="#contact"', 'href="#serviceClosingTitle"').replace('href="#watch"', 'href="#ppBlog"')
content = re.sub(r'href="(?:xcellhost-)?([a-z0-9-]+)\.html"', r'href="/\1" target="_top"', content)
Path('public/imported-47-day-ssl.html').write_text(document(content, '#import-status:empty{display:none}'), encoding='utf-8')

stage_start = source.index('<div class="stage"', source.index('id="sfHero"'))
stage_end = source.index('\n    </div>\n  </div>', stage_start)
hero = '<div class="hero lh" id="sfHero">'+source[stage_start:stage_end]+'</div>'
hero_css = '''html,body{background:transparent}.hero.lh{padding:52px 16px 16px;background:transparent;min-height:0;overflow:visible}
.hero.lh .stage{width:100%;min-height:0;margin:0;padding-bottom:0}
.hero.lh .stage>.lh-tilt{width:100%;max-width:none;min-width:0;transform:none!important}
.sfv{width:100%;max-width:none}.lh-orbit,.sf-c2{display:none}
.sf-c1{right:0;max-width:100%}.lh-powered.sf-pw{position:relative;left:auto;bottom:auto;margin:14px auto 0;width:max-content}
#import-status:empty{display:none}'''
Path('public/imported-47-day-ssl-hero.html').write_text(document(hero, hero_css), encoding='utf-8')
