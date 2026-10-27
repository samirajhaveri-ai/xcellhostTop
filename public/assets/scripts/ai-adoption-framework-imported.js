(function () {
  window.adoptionJumpTo = function (id) {
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
  XH.cart.add = function (item) {
    document.dispatchEvent(new CustomEvent('import-cart', { detail: item }));
  };
})();
