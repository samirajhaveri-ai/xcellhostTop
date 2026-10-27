import type { CmsInsightResource } from './blog-api.service';
import { slugify } from './catalog.service';

/** Only accept YouTube IDs or URLs from a YouTube host. */
export function youtubeVideoId(source: string): string | null {
  if (/^[\w-]{11}$/.test(source)) return source;
  try {
    const url = new URL(source);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
    const host = url.hostname.replace(/^www\.|^m\./, '');
    const id = host === 'youtu.be'
      ? url.pathname.slice(1)
      : ['youtube.com', 'youtube-nocookie.com'].includes(host)
        ? url.searchParams.get('v') ?? /^\/(?:embed|shorts)\/([^/]+)/.exec(url.pathname)?.[1]
        : null;
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}

/** Compare display text independently of special routing slugs such as ERPNext Hosting. */
function videoText(value: string): string {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** Explicit page assignments win; unassigned channel uploads match the product's name. */
export function productVideosForPage(
  videos: readonly CmsInsightResource[], pageSlug: string, productName: string,
): readonly CmsInsightResource[] {
  const page = slugify(pageSlug);
  const name = videoText(productName);
  const phrases = [productName, ...productName.split(/\s*[+&]\s*/)].map(videoText).filter(Boolean);
  return videos.filter(video => {
    const assigned = (video.relatedPages ?? '').split(',').map(slugify).filter(Boolean);
    if (assigned.length) return assigned.includes(page);
    if (video.product?.trim()) return videoText(video.product) === name;
    const title = `-${videoText(video.title)}-`;
    return phrases.some(phrase => title.includes(`-${phrase}-`));
  });
}
