(function () {
  document.querySelectorAll('.smb-hero-song').forEach(function (song) {
    var audio = song.querySelector('audio');
    var equalizer = song.querySelector('.song-equalizer');
    if (!audio || !equalizer) return;
    audio.addEventListener('playing', function () { equalizer.classList.add('is-playing'); });
    ['pause', 'ended', 'waiting', 'error', 'emptied'].forEach(function (eventName) {
      audio.addEventListener(eventName, function () { equalizer.classList.remove('is-playing'); });
    });
  });

  document.addEventListener('click', function (event) {
    var target = event.target;
    var control = target && target.closest
      ? target.closest('a[id$="Info"], a[id$="Pres"], a[id$="Tour"], a[id$="Trial"], a[id$="Talk"]')
      : null;
    if (!control || window.parent === window) return;

    var action = 'infosheet';
    if (control.id.endsWith('Pres')) action = 'presentation';
    else if (control.id.endsWith('Tour')) action = 'tour';
    else if (control.id.endsWith('Trial')) action = 'trial';
    else if (control.id.endsWith('Talk')) action = 'callback';

    event.preventDefault();
    window.parent.postMessage(
      { type: 'xcellhost:hero-action', action: action },
      window.location.origin
    );
  });
})();
