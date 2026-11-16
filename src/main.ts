import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const PAGE_SENSE_SRC =
  'https://cdn-in.pagesense.io/js/xcellhostcloudservicespvtltd606/03918d2227cd4530af451a5313ea592c.js';

/**
 * PageSense can rewrite experiment markup as soon as its script executes. If it
 * runs before Angular has claimed the prerendered DOM, hydration sees different
 * nodes and may leave the server shell beside a newly rendered client shell.
 * Load one PageSense project, and only after hydration has completed.
 */
function loadPageSenseAfterHydration(): void {
  if (!/^(?:www\.)?xcellhost\.cloud$/i.test(window.location.hostname)) return;
  if (document.querySelector('script[src*="cdn-in.pagesense.io/js/"]')) return;

  const script = document.createElement('script');
  script.src = PAGE_SENSE_SRC;
  script.async = true;
  script.dataset['xcellhostPageSense'] = 'true';
  document.head.appendChild(script);
}

bootstrapApplication(App, appConfig)
  .then((application) => {
    void application.whenStable().then(() => {
      window.setTimeout(loadPageSenseAfterHydration, 0);
    });
  })
  .catch((err) => console.error(err));
