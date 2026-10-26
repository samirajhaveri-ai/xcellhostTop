(function () {
  window.educatorsJumpTo = function (id) {
    const target = document.getElementById(id);
    if (!target) return;
    const embedded = !!window.frameElement;
    const outer = embedded ? parent : window;
    const frameTop = embedded ? frameElement.getBoundingClientRect().top : 0;
    const header = outer.document.querySelector('.xh-header');
    const offset = (header && header.getBoundingClientRect().height || 80) + 16;
    outer.scrollTo({
      top: outer.scrollY + frameTop + target.getBoundingClientRect().top - offset,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };
  const originalOpen = XH.open;
  XH.open = function (id, options) {
    if (id === 'xhCallback') {
      document.dispatchEvent(new CustomEvent('import-callback', {
        detail: options && options.topic || 'AI Training for Educators',
      }));
      return;
    }
    originalOpen(id, options);
  };
  XH.cart.add = function (item) {
    document.dispatchEvent(new CustomEvent('import-cart', { detail: item }));
  };
  document.addEventListener('submit', function (event) {
    const form = event.target.closest('#edEnF');
    if (!form) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!form.reportValidity() || form.dataset.submitting) return;
    const payload = Object.fromEntries(new FormData(form));
    payload.company = payload.org;
    payload.summary = ['Teaching role: ' + payload.role, 'Format: ' + payload.format,
      'Seats: ' + payload.seats, 'Institution: ' + payload.org, 'Track: ' + payload.track].join('\n');
    const button = form.querySelector('button[type="submit"]');
    let status = form.querySelector('.educators-form-status');
    if (!status) {
      status = document.createElement('p');
      status.className = 'educators-form-status full';
      status.setAttribute('role', 'status');
      form.appendChild(status);
    }
    form.dataset.submitting = 'true';
    button.disabled = true;
    status.textContent = 'Sending your seat request…';
    document.dispatchEvent(new CustomEvent('import-marketplace-enquiry', {
      detail: {
        payload,
        complete: function (result) {
          delete form.dataset.submitting;
          button.disabled = false;
          if (result.ok && !result.skipped) {
            status.textContent = 'Seat request received. Reference: ' + result.ref;
            form.reset();
          } else {
            status.textContent = 'Please email your seat request to our team: ';
            const link = document.createElement('a');
            link.href = result.fallbackUrl;
            link.textContent = 'Send enrolment request by email';
            status.appendChild(link);
          }
        },
      },
    }));
  }, true);
})();
