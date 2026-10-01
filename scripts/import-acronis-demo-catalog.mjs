import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const buildEndpoint = (pageNumber) => {
  const endpoint = new URL('https://websiteapi.acronis.com/api/resources/resources/');
  const query = endpoint.searchParams;

  query.set('process-macros', '1');
  query.set('locales[0]', 'en-us');
  query.set('paginate[page-number]', String(pageNumber));
  query.set('paginate[page-size]', '6');
  query.set('sort[translation.published_at]', 'desc');
  query.set('sort[id]', 'desc');
  query.set('matches-all[0][0]', 'type_id');
  query.set('matches-all[0][1]', 'in');
  query.set('matches-all[0][2][0]', '14');
  return endpoint;
};

const requestPage = async (pageNumber) => {
  const response = await fetch(buildEndpoint(pageNumber));
  if (!response.ok) {
    throw new Error(`Acronis catalog page ${pageNumber} failed with ${response.status}`);
  }
  return response.json();
};

const firstPage = await requestPage(1);
const pageCount = Number(firstPage.pagination?.pages_total ?? 1);
const remainingPages = await Promise.all(
  Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => requestPage(index + 2)),
);
const sourceItems = [firstPage, ...remainingPages].flatMap((page) =>
  Array.isArray(page.data) ? page.data : [],
);

const titles = (items) =>
  Array.isArray(items)
    ? items.map((item) => item.title ?? item.name).filter((value) => typeof value === 'string')
    : [];

const getYoutubeId = (url = '') => {
  const embedMatch = url.match(/youtube(?:-nocookie)?\.com\/embed\/([^?&#/]+)/i);
  if (embedMatch) return embedMatch[1];

  const watchMatch = url.match(/[?&]v=([^?&#/]+)/i);
  if (watchMatch) return watchMatch[1];

  const shortMatch = url.match(/youtu\.be\/([^?&#/]+)/i);
  return shortMatch?.[1] ?? '';
};

const videos = sourceItems.map((item) => ({
  id: Number(item.id),
  title: String(item.title ?? 'Acronis product demo'),
  videoId: getYoutubeId(item.url),
  publishedAt: String(item.published_at ?? ''),
  views: Number(item.views_count ?? 0),
  audiences: titles(item.audiences),
  products: titles(item.products),
  purposes: titles(item.purposes),
  capabilities: titles(item.capabilities),
  topics: titles(item.tags),
}));

const missingVideoIds = videos.filter((video) => !video.videoId);
if (missingVideoIds.length) {
  throw new Error(
    `Could not extract YouTube IDs for ${missingVideoIds.length} records: ${missingVideoIds
      .map((video) => video.title)
      .join(', ')}`,
  );
}

const output = `export interface AcronisDemoVideo {
  readonly id: number;
  readonly title: string;
  readonly videoId: string;
  readonly publishedAt: string;
  readonly views: number;
  readonly audiences: readonly string[];
  readonly products: readonly string[];
  readonly purposes: readonly string[];
  readonly capabilities: readonly string[];
  readonly topics: readonly string[];
}

/**
 * Snapshot of the public Acronis Demo Center video catalog.
 * Refresh with: node scripts/import-acronis-demo-catalog.mjs
 */
export const ACRONIS_DEMO_VIDEOS = ${JSON.stringify(videos, null, 2)} as const satisfies readonly AcronisDemoVideo[];
`;

const outputPath = resolve('src/app/data/acronis-demo.data.ts');
await writeFile(outputPath, output, 'utf8');
console.log(`Imported ${videos.length} Acronis demo videos into ${outputPath}`);
