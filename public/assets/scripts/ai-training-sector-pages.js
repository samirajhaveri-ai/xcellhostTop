(function () {
  'use strict';
  const main = document.querySelector('main[data-training-title]');
  const title = main.dataset.trainingTitle;
  XH.open = function (id, options) {
    document.dispatchEvent(new CustomEvent('import-callback', { detail: title + ': ' + (options?.topic || 'Course enquiry') }));
  };
  XH.cart = { add: item => document.dispatchEvent(new CustomEvent('import-cart', { detail: item })) };
  XH.onForm = function () {};
  XH.toast = function (message) {
    const toast = document.getElementById('trainingToast');
    toast.textContent = message; toast.hidden = false;
    clearTimeout(window.trainingToastTimer);
    window.trainingToastTimer = setTimeout(() => { toast.hidden = true; }, 3500);
  };
  document.querySelectorAll('[data-import-enquiry]').forEach(form => {
    const submit = form.querySelector('[type="submit"]');
    if (submit) submit.textContent = 'Review Enrolment Request →';
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (form.reportValidity()) document.dispatchEvent(new CustomEvent('import-training-enquiry', { detail: Object.fromEntries(new FormData(form)) }));
    });
  });
  const copy = main.querySelector('.bk-copy,.gp-copy');
  copy?.classList.add('network-hero-copy');
  const ask = copy?.querySelector('.lh-ask');
  const powered = main.querySelector('.lh-powered');
  if (ask && powered) ask.after(powered);
  const providers = {chatgpt:'chatgpt.com',claude:'claude.ai',perplexity:'perplexity.ai',google:'gemini.google.com',copilot:'copilot.microsoft.com'};
  if (ask) {
    ask.querySelector('.k').textContent = '✦ Ask AI About ' + main.dataset.trainingShort;
    ask.querySelectorAll('[data-ai]').forEach(a => {
      const name = a.textContent.trim();
      const img = document.createElement('img');
      img.src = 'https://www.google.com/s2/favicons?domain=' + providers[a.dataset.ai] + '&sz=64';
      img.alt = name; img.width = 18; img.height = 18;
      a.replaceChildren(img); a.title = 'Ask ' + name; a.setAttribute('aria-label', 'Ask ' + name);
    });
  }
  document.addEventListener('click', event => {
    const a = event.target.closest('a[href]'); if (!a) return;
    const href = a.getAttribute('href');
    if (href === '#contact') { event.preventDefault(); XH.open('xhCallback'); }
    else if (href.startsWith('#') && document.getElementById(href.slice(1))) { event.preventDefault(); window.hostingJumpTo(href.slice(1)); }
  }, true);
})();
