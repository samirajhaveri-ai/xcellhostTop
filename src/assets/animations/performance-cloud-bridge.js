(function () {
  document.addEventListener('click', function (event) {
    var action = event.target.closest('a[href="#lead"]');
    if (!action) return;

    event.preventDefault();
    window.parent.postMessage(
      {
        type: 'performance-cloud-plan',
        plan: action.dataset.plan || 'Performance Cloud consultation',
      },
      window.location.origin,
    );
  });
})();
