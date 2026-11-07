(function () {
  const originalOpen = XH.open;
  XH.open = function (id, options) {
    if (id === 'xhCallback') {
      document.dispatchEvent(new CustomEvent('import-callback', {
        detail: options?.topic || 'Edge Cloud Platform enquiry',
      }));
      return;
    }
    originalOpen(id, options);
  };
  XH.cart.add = function (item) {
    document.dispatchEvent(new CustomEvent('import-cart', { detail: item }));
  };
})();
