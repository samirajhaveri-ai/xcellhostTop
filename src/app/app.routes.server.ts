import { PrerenderFallback, RenderMode, ServerRoute } from '@angular/ssr';
import sitemapPages from '../../public/sitemap-pages.json';

const sitemapPaths = Object.keys(sitemapPages).map((path) => path.replace(/^\/+|\/+$/g, ''));

function paramsFor(prefix: string, parameter: string): Record<string, string>[] {
  return sitemapPaths
    .filter((path) => path.startsWith(prefix) && !path.slice(prefix.length).includes('/'))
    .map((path) => ({ [parameter]: path.slice(prefix.length) }));
}

function prerenderParameterizedRoute(
  path: string,
  prefix: string,
  parameter: string,
): ServerRoute {
  return {
    path,
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    getPrerenderParams: async () => paramsFor(prefix, parameter),
  };
}

export const serverRoutes: ServerRoute[] = [
  prerenderParameterizedRoute('compare-products/:comparison', 'compare-products/', 'comparison'),
  prerenderParameterizedRoute('under-construction/:slug', 'under-construction/', 'slug'),
  prerenderParameterizedRoute('case-studies/:id', 'case-studies/', 'id'),
  prerenderParameterizedRoute('insights/:slug', 'insights/', 'slug'),
  prerenderParameterizedRoute('use-cases/:slug', 'use-cases/', 'slug'),
  prerenderParameterizedRoute('company/:slug', 'company/', 'slug'),
  prerenderParameterizedRoute('category/:name', 'category/', 'name'),
  prerenderParameterizedRoute('vendor-partners/:slug', 'vendor-partners/', 'slug'),
  {
    path: ':slug',
    renderMode: RenderMode.Prerender,
    fallback: PrerenderFallback.None,
    getPrerenderParams: async () =>
      sitemapPaths.filter((path) => path && !path.includes('/')).map((slug) => ({ slug })),
  },
  { path: '**', renderMode: RenderMode.Prerender },
];
