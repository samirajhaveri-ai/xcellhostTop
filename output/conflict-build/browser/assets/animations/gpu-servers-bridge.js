(function () {
  document.addEventListener(
    'click',
    function (event) {
      var callback = event.target.closest('[data-open-callback]');
      if (callback) {
        event.preventDefault();
        event.stopImmediatePropagation();
        window.parent.postMessage(
          {
            type: 'gpu-servers-callback',
            request: callback.textContent.trim().replace(/\s+/g, ' '),
          },
          window.location.origin,
        );
        return;
      }

      var infosheet = event.target.closest('#ppInfo');
      if (infosheet) {
        event.preventDefault();
        event.stopImmediatePropagation();
        window.parent.postMessage(
          { type: 'xcellhost:hero-action', action: 'infosheet' },
          window.location.origin,
        );
      }
    },
    true,
  );
})();
