import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: 'advanced-endpoint-security-edr', renderMode: RenderMode.Prerender },
  { path: 'scrutiny-edr', renderMode: RenderMode.Prerender },
  { path: 'cloud-drive', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];
