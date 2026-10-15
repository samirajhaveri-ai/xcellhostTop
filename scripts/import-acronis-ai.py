"""Import only the requested Acronis AI sections from the supplied reference."""
from pathlib import Path
from html import unescape
import json
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

ids = ['pillars','platform','capabilities','agent','msp','stats','fabric','whycyber','india','pricing']
sections = []
for section_id in ids:
    match = re.search(r'<section\b[^>]*\bid="'+section_id+r'"[^>]*>.*?</section>', source, re.S)
    if not match:
        raise ValueError('Missing section: '+section_id)
    section = match.group()
    if section_id == 'platform':
        # Remove the partner programme from the product selector and its panel.
        section = re.sub(r'<button\b[^>]*class="pn2"[^>]*data-p="4"[^>]*>.*?</button>', '', section, flags=re.S)
        section = re.sub(r'<article\b[^>]*class="pd"[^>]*data-p="4"[^>]*>.*?</article>', '', section, flags=re.S)
        section = section.replace('data-p="5"', 'data-p="4"').replace('Six products.', 'Five products.')
    sections.append(section)
Path('public/imported-acronis-ai.html').write_text(document('\n'.join(sections)), encoding='utf-8')
# Keep the shared FAQ accordion, with the first eight entries from the reference.
faq_section = re.search(r'<section\b[^>]*\bid="faq"[^>]*>.*?</section>', source, re.S).group()
faq_entries = re.findall(r'<div class="fq(?: open)?"><button[^>]*>(.*?)<i>.*?</button><div class="fa"><p>(.*?)</p>', faq_section, re.S)[:8]
if len(faq_entries) != 8:
    raise ValueError('Expected eight Acronis AI FAQs')
def plain_text(html):
    return unescape(re.sub(r'<[^>]+>', '', html)).strip()
faqs = [[plain_text(question), plain_text(answer)] for question, answer in faq_entries]
Path('src/app/data/acronis-ai-faqs.data.ts').write_text(
    "import { Faq } from './models';\n\n"
    'export const ACRONIS_AI_FAQS: Faq[] = ' + json.dumps(faqs, ensure_ascii=False, indent=2) + ';\n',
    encoding='utf-8')
# Cyber Frame is part of the platform's product selector and detail panel.
stage_start = source.index('<div class="stage"', source.index('id="acHero"'))
stage_end = source.index('\n    </div>\n  </div>\n</section>', stage_start)
stage = source[stage_start:stage_end]
stage = re.sub(r'<div class="lh-powered">.*?</div>', '', stage, flags=re.S)
hero = '<div class="hero lh" id="acHero">'+stage+'</div>'
hero_css = '''body{background:transparent} .hero.lh{padding:10px 20px;background:transparent;overflow:visible;min-height:0}
.hero.lh .stage{width:100%;min-height:0;margin:0}.lh-powered{position:relative;left:auto;bottom:auto;margin:20px auto 0;width:max-content}
.lh-chip,.lh-orbit{display:none}.lh-tilt{transform:none!important}#acHero .stage>.lh-tilt{max-width:none}.acv{width:100%;max-width:none}
.acv-sc{height:180px}.acv-tk{height:auto;min-height:166px;padding-bottom:10px}
.acv-tk .tk-s .tx{height:auto;min-height:34px;overflow:visible}
.acv-tk .tk-r .tx{height:auto;min-height:17px;white-space:normal;overflow-wrap:anywhere}
.acv-tk .tk-c{height:auto;min-height:32px;padding:7px 9px}
.acv-tk .tk-c code{white-space:pre-wrap;overflow-wrap:anywhere}
.lh-powered{margin-top:8px}'''
Path('public/imported-acronis-ai-hero.html').write_text(document(hero, hero_css), encoding='utf-8')
