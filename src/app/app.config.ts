import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, UrlSerializer, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';
import { SiteUrlSerializer } from './core/site-url-serializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    // The development server prerenders routes before the browser bundle starts.
    // Hydrating that transient dev markup can leave the server route beside the
    // client route after HMR, which presents the whole page twice on localhost.
    // Use a clean client render during development; keep hydration in production.
    ...(!isDevMode() ? [provideClientHydration(withEventReplay())] : []),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' })
    ),
    { provide: UrlSerializer, useClass: SiteUrlSerializer },
  ],
};
