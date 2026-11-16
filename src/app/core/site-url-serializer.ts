import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/** Static hosts append a slash to prerendered directories before Angular starts. */
export class SiteUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    const suffixStart = url.search(/[?#]/);
    const pathname = suffixStart < 0 ? url : url.slice(0, suffixStart);
    const suffix = suffixStart < 0 ? '' : url.slice(suffixStart);
    return super.parse((pathname.replace(/\/+$/, '') || '/') + suffix);
  }
}
