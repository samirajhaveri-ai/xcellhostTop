"""Import only the requested Acronis AI sections from the supplied reference."""
from pathlib import Path
import re
import sys

source = Path(sys.argv[1]).read_text(encoding='utf-8')
css = re.search(r'<style>(.*?)</style>', source, re.S).group(1)
scripts = re.findall(r'<script>(.*?)</script>', source, re.S)
interactive = scripts[-1]
shim = r"""
window.XH = {
  $: (s, root=document) => root.querySelector(s),
  $$: (s, root=document) => Array.from(root.querySelectorAll(s)),
  reduce: matchMedia('(prefers-reduced-motion: reduce)').matches,
  fine: matchMedia('(pointer: fine)').matches,
  inr: n => '₹' + Math.round(n).toLocaleString('en-IN'),
  flash: el => {el.animate([{opacity:.5},{opacity:1}],{duration:300});},
  whenVisible: (el, fn) => {
    if (!el) return;
    const observer = new IntersectionObserver(entries => entries.forEach(e => fn(e.isIntersecting)), {rootMargin:'120px'});
    observer.observe(el);
  },
  cart: {add: item => document.dispatchEvent(new CustomEvent('import-cart', {detail:item}))}
};
document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
document.querySelectorAll('.seg').forEach(seg => {
  const active = seg.querySelector('button.on') || seg.querySelector('button');
  if (active) seg.dataset.value = active.getAttribute('data-v');
});
document.addEventListener('click', event => {
  const button = event.target.closest('.seg button');
  if (button) {
    const seg = button.parentNode;
    seg.querySelectorAll('button').forEach(b => {b.classList.toggle('on', b === button); b.setAttribute('aria-pressed', String(b === button));});
    seg.dataset.value = button.getAttribute('data-v');
    seg.dispatchEvent(new CustomEvent('change', {bubbles:true}));
  }
  if (event.target.closest('[data-open], a[href="#contact"]')) {
    event.preventDefault();
    document.dispatchEvent(new CustomEvent('import-callback', {detail:'Acronis AI Platform'}));
  }
});
"""

def document(content, overrides=''):
    return ('<!doctype html><html lang="en-IN"><head><meta charset="UTF-8">'
            '<meta name="viewport" content="width=device-width,initial-scale=1">'
            '<title>Acronis AI Platform | XcellHost</title><style>' + css +
            '\n.rv{opacity:1!important;transform:none!important}main{display:block}'+overrides+
            '</style></head><body><main>'+content+'</main><script>'+shim+
            '</script><script>'+interactive+'</script></body></html>')

ids = ['pillars','platform','capabilities','agent','msp','fabric','whycyber','india','pricing']
sections = []
for section_id in ids:
    match = re.search(r'<section\b[^>]*\bid="'+section_id+r'"[^>]*>.*?</section>', source, re.S)
    if not match:
        raise ValueError('Missing section: '+section_id)
    sections.append(match.group())
Path('public/imported-acronis-ai.html').write_text(document('\n'.join(sections)), encoding='utf-8')
# Cyber Frame is part of the platform's product selector and detail panel.
stage_start = source.index('<div class="stage"', source.index('id="acHero"'))
stage_end = source.index('\n    </div>\n  </div>\n</section>', stage_start)
stage = source[stage_start:stage_end]
hero = '<div class="hero lh" id="acHero">'+stage+'</div>'
hero_css = '''body{background:transparent} .hero.lh{padding:10px 20px;background:transparent;overflow:visible;min-height:0}
.hero.lh .stage{width:100%;min-height:0;margin:0}.lh-powered{position:relative;left:auto;bottom:auto;margin:20px auto 0;width:max-content}
.lh-chip,.lh-orbit{display:none}.lh-tilt{transform:none!important}.acv{width:100%}
.acv-sc{height:180px}.acv-tk{height:130px}.lh-powered{margin-top:8px}'''
Path('public/imported-acronis-ai-hero.html').write_text(document(hero, hero_css), encoding='utf-8')
