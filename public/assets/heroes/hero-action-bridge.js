(function () {
  document.addEventListener('click', function (event) {
    var target = event.target;
    var control = target && target.closest
      ? target.closest('a[id$="Info"], #xtPres, #xtTour, #xtTrial, #xtTalk')
      : null;
    if (!control || window.parent === window) return;

    var tallyActions = {
      xtPres: 'presentation',
      xtTour: 'tour',
      xtTrial: 'trial',
      xtTalk: 'callback'
    };
    event.preventDefault();
    window.parent.postMessage(
      { type: 'xcellhost:hero-action', action: tallyActions[control.id] || 'infosheet' },
      window.location.origin
    );
  });
})();
