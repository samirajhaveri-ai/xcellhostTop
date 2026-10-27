(function () {
  document.addEventListener(
    'click',
    function (event) {
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
