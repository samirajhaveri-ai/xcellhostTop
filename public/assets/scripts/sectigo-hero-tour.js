/* Reuse the certificate walkthrough, including its live scene controls. */
(function () {
  'use strict';
  var button = document.querySelector('[data-sectigo-tour]');
  var scene = document.getElementById('sgv');
  if (!button || !scene) return;
  var home = scene.parentNode;
  var marker = document.createComment('Sectigo walkthrough');
  home.insertBefore(marker, scene);
  var dialog = document.createElement('dialog');
  dialog.className = 'sectigo-hero-tour';
  dialog.setAttribute('aria-labelledby', 'sectigoTourTitle');
  dialog.innerHTML = '<div class="sectigo-tour-heading"><h2 id="sectigoTourTitle">Sectigo SSL Screenshot Tour</h2><button type="button" aria-label="Close tour">&times;</button></div><p>Explore certificate validation, coverage and automatic renewal using the scene tabs below. Illustrative sample data.</p><div class="sectigo-tour-content"></div>';
  document.body.appendChild(dialog);
  function position() {
    var frame = window.frameElement;
    var viewportHeight = frame ? window.parent.innerHeight : window.innerHeight;
    var offset = frame ? -frame.getBoundingClientRect().top : window.scrollY;
    dialog.style.top = Math.max(16, offset + Math.max(24, (viewportHeight - dialog.offsetHeight) / 2)) + 'px';
    dialog.style.maxHeight = Math.max(220, viewportHeight - 48) + 'px';
  }
  button.addEventListener('click', function () {
    dialog.querySelector('.sectigo-tour-content').appendChild(scene);
    dialog.showModal();
    position();
    window.parent.addEventListener('resize', position);
    window.parent.addEventListener('scroll', position, { passive: true });
  });
  dialog.querySelector('button').addEventListener('click', function () { dialog.close(); });
  dialog.addEventListener('click', function (event) {
    var bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', function () {
    marker.after(scene);
    window.parent.removeEventListener('resize', position);
    window.parent.removeEventListener('scroll', position);
    button.focus({ preventScroll: true });
  });
})();
