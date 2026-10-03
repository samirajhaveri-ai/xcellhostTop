(function () {
  document.addEventListener('click', function (event) {
    var target = event.target;
    var control = target && target.closest ? target.closest('a[id$="Info"]') : null;
    if (!control || window.parent === window) return;

    event.preventDefault();
    window.parent.postMessage(
      { type: 'xcellhost:hero-action', action: 'infosheet' },
      window.location.origin
    );
  });
})();
