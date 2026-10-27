(function () {
  var launcher = document.getElementById('liveChatLauncher');
  var widgetUrl = document.currentScript && document.currentScript.getAttribute('data-salesiq-src');
  if (!launcher || !widgetUrl) return;

  var ready = false;
  var loading = false;
  var requested = false;
  var loadTimer;

  function setExpanded(expanded) {
    launcher.setAttribute('aria-expanded', String(expanded));
    launcher.setAttribute('aria-label', expanded ? 'Close live chat' : 'Open live chat');
  }

  function finishLoading() {
    clearTimeout(loadTimer);
    loading = false;
    launcher.disabled = false;
    launcher.removeAttribute('aria-busy');
  }

  function loadFailed() {
    if (ready) return;
    finishLoading();
    requested = false;
    var script = document.getElementById('zsiqscript');
    if (script) script.remove();
    setExpanded(false);
    launcher.title = 'Chat could not load. Click to try again.';
  }

  window.$zoho = window.$zoho || {};
  var salesiq = window.$zoho.salesiq = window.$zoho.salesiq || {};
  var previousReady = salesiq.ready;
  salesiq.ready = function () {
    if (ready) return;
    ready = true;
    finishLoading();
    launcher.title = '';
    if (typeof previousReady === 'function') previousReady.apply(this, arguments);
    salesiq.floatbutton.visible('hide');
    salesiq.floatwindow.open(function () {
      // Reject proactive or restored-window opens without a launcher click.
      if (!requested) salesiq.floatwindow.visible('hide');
      else setExpanded(true);
    });
    salesiq.floatwindow.close(function () {
      requested = false;
      setExpanded(false);
    });
    salesiq.floatwindow.visible(requested ? 'show' : 'hide');
    setExpanded(requested);
  };

  launcher.addEventListener('click', function () {
    if (loading) return;
    if (ready) {
      requested = !requested;
      salesiq.floatwindow.visible(requested ? 'show' : 'hide');
      setExpanded(requested);
      return;
    }
    requested = true;
    loading = true;
    launcher.disabled = true;
    launcher.setAttribute('aria-busy', 'true');
    launcher.setAttribute('aria-label', 'Loading live chat');
    // SalesIQ is not loaded on page visits, scrolling, timers or refreshes.
    var script = document.createElement('script');
    script.id = 'zsiqscript';
    script.src = widgetUrl;
    script.async = true;
    script.onerror = loadFailed;
    loadTimer = setTimeout(loadFailed, 20000);
    document.body.appendChild(script);
  });
  setExpanded(false);
  launcher.hidden = false;
})();
