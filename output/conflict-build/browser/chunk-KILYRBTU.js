import {
  migrateCmsDomains
} from "./chunk-CJMXCYTU.js";
import {
  environment
} from "./chunk-WBGN3H4A.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-7DLAAEIP.js";
import {
  isPlatformBrowser
} from "./chunk-SVYSXSWK.js";
import {
  EMPTY,
  Injectable,
  PLATFORM_ID,
  catchError,
  combineLatest,
  expand,
  inject,
  map,
  of,
  reduce,
  setClassMetadata,
  shareReplay,
  signal,
  switchMap,
  tap,
  timeout,
  timer,
  ɵɵdefineInjectable
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/core/blog-api.service.ts
function findBlogBySlug(posts, slug) {
  const key = slug.trim().toLowerCase().replace(/^\/+|\/+$/g, "");
  const exact = posts.find((post) => post.slug.trim().toLowerCase() === key);
  if (exact)
    return exact;
  const aliases = posts.filter((post) => (post.relatedPages ?? "").split(",").some((page) => page.trim().toLowerCase().replace(/^\/+|\/+$/g, "") === key));
  if (aliases.length === 1)
    return aliases[0];
  if (!aliases.length)
    return null;
  const words = key.split("-").filter(Boolean);
  const ranked = aliases.map((post) => ({
    post,
    score: words.filter((word) => post.slug.toLowerCase().split("-").includes(word)).length,
    publishedAt: Date.parse(post.publishedAt) || 0
  })).sort((a, b) => b.score - a.score || b.publishedAt - a.publishedAt);
  return ranked[0].post;
}
var INSIGHT_DOCUMENT_TYPES = [
  { label: "Data Sheets", singular: "data sheet", kind: "data-sheet", endpoint: "data-sheets" },
  { label: "Cheat Sheets", singular: "cheat sheet", kind: "cheat-sheet", endpoint: "cheat-sheets" },
  { label: "Whitepapers", singular: "whitepaper", kind: "whitepaper", endpoint: "whitepapers" },
  { label: "Guides", singular: "guide", kind: "guide", endpoint: "guides" },
  { label: "Ebooks", singular: "ebook", kind: "ebook", endpoint: "ebooks" },
  { label: "Checklists", singular: "checklist", kind: "checklist", endpoint: "checklists" }
];
var BlogApiService = class _BlogApiService {
  browser = isPlatformBrowser(inject(PLATFORM_ID));
  http = inject(HttpClient);
  baseUrl = environment.strapiUrl.replace(/\/$/, "");
  endpoint = `${this.baseUrl}/api/blogs`;
  videoStatus = signal("loading", ...ngDevMode ? [{ debugName: "videoStatus" }] : []);
  lastVideos = [];
  /** Refreshes in the background so CMS edits appear without rebuilding the UI. */
  posts$ = this.browser ? timer(0, 3e4).pipe(switchMap(() => this.list()), shareReplay({ bufferSize: 1, refCount: true })) : of([]);
  /** Latest channel uploads, with a saved channel snapshot during outages. */
  videos$ = this.browser ? timer(0, 15 * 6e4).pipe(switchMap(() => this.listYouTubeVideos().pipe(catchError(() => this.http.get("/feeds/youtube-snapshot.json").pipe(timeout(1e4), map((response) => this.readYouTubeFeed(__spreadProps(__spreadValues({}, response), { stale: true }))), catchError(() => {
    this.videoStatus.set(this.lastVideos.length ? "cached" : "error");
    return of(this.lastVideos);
  }))), tap((items) => {
    this.lastVideos = items;
  }))), shareReplay({ bufferSize: 1, refCount: true })) : of([]);
  /** Strapi Use Case collection, presented alongside blogs in the Insights hub. */
  useCases$ = this.resourceStream("use-cases", "use-case");
  /** Each document collection uses the same category fields as blogs. */
  documents$ = combineLatest(INSIGHT_DOCUMENT_TYPES.map((type) => this.resourceStream(type.endpoint, type.kind))).pipe(map((collections) => collections.flat().filter((item) => Boolean(item.downloadUrl))), shareReplay({ bufferSize: 1, refCount: true }));
  watchBySlug(slug) {
    return this.posts$.pipe(map((posts) => findBlogBySlug(posts, slug)));
  }
  watchUseCaseBySlug(slug) {
    return this.useCases$.pipe(map((items) => items.find((item) => item.slug === slug) ?? null));
  }
  list() {
    return this.listPage(1).pipe(expand((response) => {
      const pagination = response.meta?.pagination;
      return pagination && pagination.page < pagination.pageCount ? this.listPage(pagination.page + 1) : EMPTY;
    }), reduce((posts, response) => posts.concat(response.data.filter((post) => this.isAvailableArticle(post)).map((post) => this.normalise(post))), []));
  }
  listPage(page) {
    const params = new HttpParams().set("sort[0]", "date:desc").set("sort[1]", "time:desc").set("populate", "coverImage").set("pagination[page]", page).set("pagination[pageSize]", "100");
    return this.http.get(this.endpoint, { params }).pipe(map(migrateCmsDomains));
  }
  resourceStream(endpoint, kind) {
    if (!this.browser)
      return of([]);
    return timer(0, 3e4).pipe(
      // These collections are optional while they are being created in Strapi.
      // Keep the timer alive after a 404 so newly published content appears later.
      switchMap(() => this.listResources(endpoint, kind).pipe(catchError(() => of([])))),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
  listResources(endpoint, kind) {
    return this.listResourcePage(endpoint, 1).pipe(expand((response) => {
      const pagination = response.meta?.pagination;
      return pagination && pagination.page < pagination.pageCount ? this.listResourcePage(endpoint, pagination.page + 1) : EMPTY;
    }), reduce((items, response) => items.concat(response.data.map((item) => this.normaliseResource(item, kind))), []));
  }
  listResourcePage(endpoint, page) {
    const params = new HttpParams().set("sort[0]", "date:desc").set("sort[1]", "time:desc").set("populate", "coverImage").set("pagination[page]", page).set("pagination[pageSize]", "100");
    return this.http.get(`${this.baseUrl}/api/${endpoint}`, { params }).pipe(map(migrateCmsDomains));
  }
  listYouTubeVideos() {
    return this.http.get(environment.youtubeFeedApi).pipe(timeout(2e4), map((response) => this.readYouTubeFeed(response)));
  }
  readYouTubeFeed(response) {
    if (response.status !== "ok" || !response.items?.length)
      throw new Error("YouTube feed unavailable");
    const items = response.items.map((item) => this.normaliseYouTubeVideo(item));
    this.videoStatus.set(response.stale ? "cached" : "ready");
    return items;
  }
  normalise(post) {
    const url = post.coverImage?.url;
    return __spreadProps(__spreadValues({}, post), {
      mainCategory: post.mainCategory?.trim() || this.parentCategory(post.category),
      subCategory: post.subCategory?.trim() || post.category,
      coverImageUrl: url ? url.startsWith("http") ? url : `${this.baseUrl}${url}` : this.fallbackCover(post.category)
    });
  }
  isAvailableArticle(post) {
    const isCaseStudy = /^case\s*stud(?:y|ies)$/i.test(post.category?.trim() ?? "");
    return !isCaseStudy && Boolean(post.slug?.trim() && post.title?.trim() && post.content?.trim());
  }
  normaliseResource(item, kind) {
    const imageUrl = item.coverImage?.url;
    const category = item.category ?? (kind === "video" ? "Videos" : kind === "use-case" ? "Use Cases" : "General");
    return {
      id: item.id ?? 0,
      documentId: item.documentId ?? `${kind}-${item.slug ?? item.title ?? "item"}`,
      kind,
      title: item.title ?? "Untitled",
      slug: item.slug ?? "",
      description: item.description ?? "",
      content: item.content ?? "",
      author: item.author ?? "XcellHost Team",
      date: item.date ?? item.publishedAt?.slice(0, 10) ?? (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      time: item.time ?? "09:00",
      category,
      mainCategory: item.mainCategory?.trim() || this.parentCategory(category),
      subCategory: item.subCategory?.trim() || category,
      product: item.product?.trim() || null,
      videoUrl: item.videoUrl ?? item.youtubeUrl ?? (kind === "video" ? item.link ?? null : null),
      downloadUrl: this.documentUrl(item.downloadUrl ?? item.link),
      relatedPage: item.relatedPage ?? (kind === "use-case" ? item.link ?? null : null),
      relatedPages: item.relatedPages ?? item.relatedPage ?? (kind === "use-case" ? item.link ?? null : null),
      publishedAt: item.publishedAt ?? "",
      updatedAt: item.updatedAt ?? "",
      coverImage: item.coverImage ?? null,
      coverImageUrl: imageUrl ? imageUrl.startsWith("http") ? imageUrl : `${this.baseUrl}${imageUrl}` : this.fallbackCover(item.category ?? kind)
    };
  }
  documentUrl(value) {
    if (!value?.trim())
      return null;
    try {
      const url = new URL(value.trim(), this.baseUrl || window.location.origin);
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
    } catch {
      return null;
    }
  }
  normaliseYouTubeVideo(item) {
    const videoId = item.guid.replace(/^yt:video:/, "") || this.youtubeVideoId(item.link);
    const published = new Date(item.pubDate ? /Z$|[+-]\d{2}:\d{2}$/.test(item.pubDate) ? item.pubDate : item.pubDate.replace(" ", "T") + "Z" : NaN);
    const title = this.decodeEntities(item.title);
    const description = this.decodeEntities(item.description || item.content).replace(/<[^>]+>/g, "").trim();
    const category = this.youtubeCategory(title);
    return {
      id: 0,
      documentId: `youtube-${videoId}`,
      kind: "video",
      title,
      slug: videoId,
      description: description || `Watch ${title} from XcellHost Cloud Services.`,
      content: description,
      author: item.author || "XcellHost Cloud Services",
      date: Number.isNaN(published.valueOf()) ? "" : published.toISOString().slice(0, 10),
      time: Number.isNaN(published.valueOf()) ? "" : published.toISOString().slice(11, 16),
      category,
      mainCategory: this.parentCategory(category),
      subCategory: category,
      product: null,
      videoUrl: item.link || `https://www.youtube.com/watch?v=${videoId}`,
      relatedPage: null,
      relatedPages: null,
      publishedAt: Number.isNaN(published.valueOf()) ? "" : published.toISOString(),
      updatedAt: "",
      coverImage: null,
      coverImageUrl: item.thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    };
  }
  youtubeCategory(value) {
    const text = value.toLowerCase();
    const categories = [
      [/dpdpa|data protection|privacy|consent|ropa|breach notification/, "DPDPA"],
      [/tally/, "Tally on Cloud"],
      [/microsoft 365|m365|office 365|copilot/, "Microsoft 365"],
      [/backup|disaster recovery|ransomware/, "Backup & Recovery"],
      [/email|dmarc|domain|ssl|certificate|digicert/, "Digital Trust"],
      [/cyber|security|soc|siem|edr|malware|firewall/, "Cybersecurity"],
      [/partner|reseller|cybird/, "Partner Program"],
      [/cloud|server|hosting|storage|desktop/, "Cloud"],
      [/\bai\b|artificial intelligence/, "AI"]
    ];
    return categories.find(([pattern]) => pattern.test(text))?.[1] ?? "Technology";
  }
  parentCategory(category) {
    const value = category.toLowerCase();
    if (/dpdpa|privacy|compliance|data protection/.test(value))
      return "Data Protection";
    if (/dmarc|domain|email|ssl|certificate|digital trust/.test(value))
      return "Digital Trust";
    if (/cyber|security|soc|siem|edr|malware|firewall/.test(value))
      return "Security";
    if (/microsoft 365|m365|tally|productivity|workspace/.test(value))
      return "Productivity";
    if (/backup|recovery/.test(value))
      return "Data Protection";
    if (/cloud|server|hosting|storage|desktop/.test(value))
      return "Cloud";
    if (/partner|reseller/.test(value))
      return "Partner Program";
    if (/\bai\b|artificial intelligence|automation/.test(value))
      return "AI";
    return "Technology";
  }
  youtubeVideoId(url) {
    return url.match(/[?&]v=([^&]+)/)?.[1] ?? url.split("/").pop() ?? "";
  }
  decodeEntities(value) {
    const named = { amp: "&", apos: "'", quot: '"', lt: "<", gt: ">" };
    return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
      if (code[0] !== "#")
        return named[code.toLowerCase()] ?? entity;
      const point = code[1].toLowerCase() === "x" ? Number.parseInt(code.slice(2), 16) : Number.parseInt(code.slice(1), 10);
      return Number.isFinite(point) ? String.fromCodePoint(point) : entity;
    });
  }
  /** Keeps older posts attractive until an editor uploads their own cover. */
  fallbackCover(category) {
    const value = category.toLowerCase();
    if (value.includes("cloud drive") || value.includes("file shar")) {
      return "/assets/images/orb-smb-cloud-desktop.png";
    }
    if (value.includes("security") || value.includes("protection") || value.includes("backup")) {
      return "/assets/images/hero-cloud-backup-acronis.png";
    }
    if (value.includes("payroll"))
      return "/assets/images/orb-smb-cloud-desktop.png";
    if (value.includes("gst"))
      return "/assets/images/orb-microsoft-365.png";
    if (value.includes("account"))
      return "/assets/images/orb-cloud-backup.png";
    return "/assets/images/hero-tally-on-cloud.png";
  }
  static \u0275fac = function BlogApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BlogApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BlogApiService, factory: _BlogApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  findBlogBySlug,
  INSIGHT_DOCUMENT_TYPES,
  BlogApiService
};
//# sourceMappingURL=chunk-KILYRBTU.js.map
