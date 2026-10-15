(function () {
  window.$zoho = window.$zoho || {};
  var salesiq = window.$zoho.salesiq = window.$zoho.salesiq || {};
  var previousReady = salesiq.ready;
  salesiq.ready = function () {
    if (typeof previousReady === 'function') previousReady.apply(this, arguments);
    var launcher = document.getElementById('liveChatLauncher');
    salesiq.floatbutton.visible('hide');
    launcher.addEventListener('click', function () {
      salesiq.floatwindow.visible('show');
    });
    launcher.hidden = false;
  };
})();
