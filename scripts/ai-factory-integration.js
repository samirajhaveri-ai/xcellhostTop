(function () {
  XH.toast = function (message) {
    const status = document.getElementById('import-status');
    status.textContent = message;
    status.style.top = Math.max(16, -(window.frameElement?.getBoundingClientRect().top || 0) + parent.innerHeight - 100) + 'px';
    clearTimeout(status._timer);
    status._timer = setTimeout(() => { status.textContent = ''; }, 3000);
  };
  function play(frame) {
    if (frame.querySelector('iframe')) return;
    const video = document.createElement('iframe');
    video.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(frame.dataset.yt) + '?autoplay=1&rel=0';
    video.allow = 'autoplay; encrypted-media; picture-in-picture';
    video.allowFullscreen = true;
    video.title = 'AI Factory video';
    frame.appendChild(video);
  }
  document.addEventListener('click', function (event) {
    const frame = event.target.closest('[data-yt]:not(.cvid)');
    if (frame) play(frame);
    const callback = event.target.closest('#configure [data-open="xhCallback"]');
    if (callback) {
      event.preventDefault();
      event.stopImmediatePropagation();
      XH.open('xhCallback', { topic: 'AI Factory: ' + document.getElementById('qCfg').value });
    }
  }, true);
  document.addEventListener('keydown', function (event) {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-yt]:not(.cvid)')) {
      event.preventDefault();
      play(event.target);
    }
  });
  document.addEventListener('submit', function (event) {
    const form = event.target;
    if (!form.matches('form[data-xhform="afQuote"]')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!form.reportValidity()) return;
    const submit = form.querySelector('[type="submit"]');
    if (submit.disabled) return;
    let status = document.getElementById('aiFactoryQuoteStatus');
    if (!status) {
      status = document.createElement('p');
      status.id = 'aiFactoryQuoteStatus';
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      form.after(status);
    }
    status.textContent = 'Preparing your quotation request...';
    submit.disabled = true;
    document.dispatchEvent(new CustomEvent('import-enquiry', {
      detail: {
        payload: Object.assign(Object.fromEntries(new FormData(form)), { summary: form.elements.config.value }),
        complete: function (result) {
          submit.disabled = false;
          status.replaceChildren();
          if (result.ok && !result.skipped) {
            document.getElementById('afQs').classList.add('sent');
            status.textContent = 'Quotation request received. Reference: ' + result.ref;
            return;
          }
          status.append(document.createTextNode('Your quotation request is ready. '));
          const link = document.createElement('a');
          link.href = result.fallbackUrl;
          link.textContent = 'Email it to our team';
          status.append(link);
        },
      },
    }));
  }, true);
})();
