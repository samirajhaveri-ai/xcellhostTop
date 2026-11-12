/* Standalone navigation. Uses plain DOM APIs; no framework or build step. */
(() => {
  'use strict';
  const data = window.XCELLHOST_NAV;
  if (!data) return;
  const base = (window.XCELLHOST_SITE_URL || data.baseUrl).replace(/\/$/, '');
  const destination = path => base + path;
  const rewriteLinks = root => root.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href.startsWith(data.baseUrl + '/')) a.href = base + href.slice(data.baseUrl.length);
    else if (href.startsWith('/')) a.href = destination(href);
  });
  rewriteLinks(document);
  const menus = [...document.querySelectorAll('.xh-menu-item')];
  const mainNav = document.querySelector('.xh-main-nav');
  const mobileToggle = document.querySelector('.xh-mobile-toggle');
  const isMobile = () => matchMedia('(max-width:1024px)').matches;
  const closeMenus = () => menus.forEach(m => { m.classList.remove('open'); m.querySelector('.xh-menu-link')?.setAttribute('aria-expanded', 'false'); });
  function activate(menu, key) {
    menu.querySelectorAll('.xh-tab').forEach(t => { const active = t.dataset.tab === key; t.classList.toggle('active', active); t.setAttribute('aria-selected', String(active)); });
    menu.querySelectorAll('.xh-panel').forEach(p => p.classList.toggle('active', p.dataset.tab === key));
    const markup = data.featureMarkup[menu.dataset.menu]?.[key];
    const old = menu.querySelector('.xh-feature-stack');
    if (markup) { if (old) old.outerHTML = markup; else menu.querySelector('.xh-mega').insertAdjacentHTML('beforeend', markup); rewriteLinks(menu); }
  }
  menus.forEach(menu => {
    const button = menu.querySelector('.xh-menu-link');
    button.addEventListener('click', () => { const open = !menu.classList.contains('open'); closeMenus(); menu.classList.toggle('open', open); button.setAttribute('aria-expanded', String(open)); });
    menu.addEventListener('pointerenter', event => { if (event.pointerType !== 'mouse' || isMobile()) return; closeMenus(); menu.classList.add('open'); button.setAttribute('aria-expanded', 'true'); });
    menu.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse' && !isMobile()) { menu.classList.remove('open'); button.setAttribute('aria-expanded', 'false'); } });
    menu.querySelectorAll('.xh-tab').forEach(tab => { tab.addEventListener('click', () => activate(menu, tab.dataset.tab)); tab.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') activate(menu, tab.dataset.tab); }); });
    menu.querySelectorAll('.xh-mobile-category-toggle').forEach(toggle => toggle.addEventListener('click', () => { const panel = document.getElementById(toggle.getAttribute('aria-controls')); const open = panel.hidden; panel.hidden = !open; toggle.setAttribute('aria-expanded', String(open)); toggle.querySelector('span').textContent = open ? '−' : '+'; }));
    const active = menu.querySelector('.xh-tab.active') || menu.querySelector('.xh-tab');
    if (active) activate(menu, active.dataset.tab);
  });
  mobileToggle?.addEventListener('click', () => { const open = !mainNav.classList.contains('mobile-open'); mainNav.classList.toggle('mobile-open', open); mobileToggle.classList.toggle('open', open); mobileToggle.setAttribute('aria-expanded', String(open)); });
  const more = document.querySelector('.utility-mobile-toggle');
  more?.addEventListener('click', () => { const extra = document.querySelector('.ub2-extra'); const open = !extra.classList.contains('is-expanded'); extra.classList.toggle('is-expanded', open); more.setAttribute('aria-expanded', String(open)); more.textContent = open ? 'Less −' : 'More links +'; });
  const login = document.querySelector('.xh-login');
  login?.addEventListener('click', () => { const open = login.getAttribute('aria-expanded') !== 'true'; login.setAttribute('aria-expanded', String(open)); login.closest('.xh-login-menu').classList.toggle('open', open); closeMenus(); });
  const theme = document.querySelector('.ub2-theme');
  theme?.addEventListener('click', () => { const dark = document.body.classList.toggle('export-dark'); theme.setAttribute('aria-pressed', String(dark)); theme.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode'); });

  const toolsTrigger = document.querySelector('.tools-trigger');
  const toolsPanel = document.querySelector('.tools-popover');
  const search = toolsPanel?.querySelector('input[type=search]');
  let category = data.tools[0].id;
  const allTools = data.tools.flatMap(c => c.tools);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[c]);
  const link = tool => `<a href="${escape(destination('/tools/' + tool.id))}">${escape(tool.name)}</a>`;
  function renderTools() {
    const query = search.value.trim().toLowerCase();
    const active = data.tools.find(c => c.id === category);
    toolsPanel.querySelector('h2').textContent = query ? 'Search results' : active.name + ' Tools';
    const groups = new Map();
    (query ? allTools.filter(t => t.name.toLowerCase().includes(query)) : active.tools).forEach(t => { if (!groups.has(t.group)) groups.set(t.group, []); groups.get(t.group).push(t); });
    toolsPanel.querySelector('.tools-link-groups').innerHTML = groups.size ? [...groups].map(([group, tools]) => `<section><h3>${escape(group)}</h3>${tools.map(link).join('')}</section>`).join('') : '<p class="tools-empty">No tools match your search.</p>';
    toolsPanel.querySelectorAll('.tools-categories button').forEach((b, i) => { const selected = !query && data.tools[i].id === category; b.classList.toggle('selected', selected); b.setAttribute('aria-pressed', String(selected)); });
    toolsPanel.querySelector('.tools-content header a').href = destination('/tools' + (query ? '' : '?category=' + category));
  }
  if (toolsPanel) {
    toolsPanel.querySelectorAll('.tools-categories button').forEach((button, i) => {
      const select = () => { category = data.tools[i].id; search.value = ''; renderTools(); };
      button.addEventListener('click', select); button.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') select(); });
    });
    const position = () => { const r = toolsTrigger.getBoundingClientRect(); const width = Math.min(960, document.documentElement.clientWidth - 24); toolsPanel.style.width = width + 'px'; toolsPanel.style.left = Math.max(12, Math.min(r.left, document.documentElement.clientWidth - width - 12)) + 'px'; toolsPanel.style.top = Math.min(r.bottom + 8, innerHeight - 130) + 'px'; toolsPanel.style.maxHeight = Math.max(120, innerHeight - Math.min(r.bottom + 8, innerHeight - 130) - 12) + 'px'; };
    const closeTools = () => { if (toolsPanel.matches(':popover-open')) toolsPanel.hidePopover(); toolsTrigger.setAttribute('aria-expanded', 'false'); };
    toolsTrigger.addEventListener('click', () => { position(); toolsPanel.togglePopover(); toolsTrigger.setAttribute('aria-expanded', String(toolsPanel.matches(':popover-open'))); closeMenus(); });
    toolsPanel.addEventListener('toggle', () => toolsTrigger.setAttribute('aria-expanded', String(toolsPanel.matches(':popover-open'))));
    toolsPanel.querySelector('.tools-close').addEventListener('click', closeTools);
    search.addEventListener('input', renderTools); window.addEventListener('resize', closeTools); renderTools();
  }
  document.addEventListener('click', event => {
    if (!event.target.closest('.xh-main-nav,.xh-mobile-toggle')) closeMenus();
    if (!event.target.closest('.xh-login-menu')) { document.querySelector('.xh-login-menu')?.classList.remove('open'); login?.setAttribute('aria-expanded', 'false'); }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    closeMenus(); mainNav.classList.add('suppress-menu');
    document.querySelector('.xh-login-menu')?.classList.remove('open'); login?.setAttribute('aria-expanded', 'false');
    if (isMobile()) { mainNav.classList.remove('mobile-open'); mobileToggle.classList.remove('open'); mobileToggle.setAttribute('aria-expanded', 'false'); }
  });
  mainNav.addEventListener('pointerleave', () => mainNav.classList.remove('suppress-menu'));
  mainNav.addEventListener('focusin', () => mainNav.classList.remove('suppress-menu'));
})();
