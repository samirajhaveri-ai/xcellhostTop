"""Extract the requested Cybird sections while preserving their interactive controls."""
from pathlib import Path
import re
import sys

source = Path(sys.argv[1]).read_text(encoding='utf-8')
css = re.search(r'<style>(.*?)</style>', source, re.S).group(1)
# An auto-sized iframe cannot use its own height to size its contents.
css = re.sub(r'(?<![\w.-])(\d+(?:\.\d+)?)vh',
             lambda match: 'calc(var(--cybird-vh, 7px) * ' + match.group(1) + ')', css)
scripts = re.findall(r'<script\b[^>]*>(.*?)</script>', source, re.S)
section_ids = ['features', 'how', 'hardware', 'simulate', 'compare', 'ideal', 'partners', 'pricing']
sections = []
for section_id in section_ids:
    match = re.search(r'<section\b[^>]*\bid="' + section_id + r'"[^>]*>.*?</section>', source, re.S)
    if not match:
        raise ValueError('Missing section: ' + section_id)
    sections.append(match.group())

bridge = r"""
window.XH.open = function(id, options) {
  document.dispatchEvent(new CustomEvent('import-callback', {
    detail: (options && options.topic) || 'Cybird X2 security appliance enquiry'
  }));
};
window.XH.cart = {
  add: function(item) { document.dispatchEvent(new CustomEvent('import-cart', {detail:item})); }
};
document.querySelectorAll('.rv').forEach(function(el) { el.classList.add('in'); });
document.addEventListener('click', function(event) {
  var anchor = event.target.closest('a[href="#contact"]');
  if (anchor) { event.preventDefault(); window.XH.open('callback'); }
});
function syncCybirdViewport() {
  if (!window.frameElement) return;
  document.documentElement.style.setProperty('--cybird-vh', (parent.innerHeight / 100) + 'px');
  window.__cybirdViewport = {height:parent.innerHeight, offset:-window.frameElement.getBoundingClientRect().top};
  var journey = document.getElementById('cbJr');
  var visual = document.getElementById('cbJrV');
  if (journey && visual) {
    var shift = 0;
    if (window.matchMedia('(min-width: 901px)').matches) {
      var top = journey.getBoundingClientRect().top - window.__cybirdViewport.offset;
      shift = Math.max(0, Math.min(96 - top, journey.offsetHeight - visual.offsetHeight));
    }
    visual.style.transform = 'translateY(' + shift + 'px)';
  }
  window.dispatchEvent(new Event('scroll'));
}
parent.addEventListener('scroll', syncCybirdViewport, {passive:true});
parent.addEventListener('resize', syncCybirdViewport, {passive:true});
window.addEventListener('pagehide', function() {
  parent.removeEventListener('scroll', syncCybirdViewport);
  parent.removeEventListener('resize', syncCybirdViewport);
});
syncCybirdViewport();
"""
interactive = scripts[-1].replace(
    'var vh=innerHeight,y=scrollY+vh*.5,cs=',
    'var viewport=window.__cybirdViewport||{height:innerHeight,offset:scrollY},vh=viewport.height,y=viewport.offset+vh*.5,cs=',
)
overrides = '''
html,body{background:transparent}body{overflow:hidden}main{display:block}
main>.sec{padding:36px 0}.wrap{max-width:none;padding:0}
.rv{opacity:1!important;transform:none!important}.sh{transform:none!important}
.jr-v{position:relative;top:auto;will-change:transform}
.jr-st{padding-top:20px;padding-bottom:24px}
.jr-st li{min-height:clamp(240px,calc(var(--cybird-vh, 7px) * 48),420px)}
@media(max-width:640px){main>.sec{padding:28px 0}.sh h2{font-size:28px}}
'''
document = ('<!doctype html><html lang="en-IN" data-theme="light"><head>'
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
    '<title>Cybird X2 features, hardware, threat simulator and pricing</title>'
    '<link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&amp;family=IBM+Plex+Sans:wght@400;500;600;700&amp;family=IBM+Plex+Mono:wght@400;500;600&amp;display=swap" rel="stylesheet">'
    '<style>' + css + overrides + '</style></head><body><main>' + '\n'.join(sections) +
    '</main><script>' + scripts[-2] + '</script><script>' + bridge + '</script><script>' +
    interactive + '</script></body></html>')
Path('public/imported-cybird-sections.html').write_text(document, encoding='utf-8')
print('Imported eight sections, including Key benefits and the pricing configurator.')
