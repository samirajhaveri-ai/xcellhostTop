import {
  CASE_STUDIES,
  CaseStudiesApiService
} from "./chunk-6DVXASVN.js";
import {
  BlogApiService
} from "./chunk-KILYRBTU.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  CatalogService,
  slugify
} from "./chunk-QOKK55KD.js";
import {
  PRODUCT_VIDEOS
} from "./chunk-3YIWEYUK.js";
import {
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  Input,
  ViewChild,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeStyle,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";

// src/app/shared/reveal.directive.ts
var OBSERVER_OPTIONS = {
  threshold: 0.12,
  rootMargin: "0px 0px -40px 0px"
};
var STEP_MS = 70;
var MAX_DELAY_MS = 350;
var RevealDirective = class _RevealDirective {
  el = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  observer;
  constructor() {
    this.el.nativeElement.classList.add("reveal");
    afterNextRender(() => this.watch());
  }
  watch() {
    const el = this.el.nativeElement;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
      el.classList.add("in");
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting)
          continue;
        const node = entry.target;
        const siblings = node.parentElement ? Array.from(node.parentElement.children) : [];
        const idx = siblings.indexOf(node);
        node.style.transitionDelay = `${Math.min(idx * STEP_MS, MAX_DELAY_MS)}ms`;
        node.classList.add("in");
        this.observer?.unobserve(node);
      }
    }, OBSERVER_OPTIONS);
    this.observer.observe(el);
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }
  static \u0275fac = function RevealDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RevealDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _RevealDirective, selectors: [["", "xhReveal", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RevealDirective, [{
    type: Directive,
    args: [{
      selector: "[xhReveal]",
      standalone: true
    }]
  }], () => [], null);
})();

// src/app/shared/resource-video.component.ts
function ResourceVideoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "iframe", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r0.src(), \u0275\u0275sanitizeResourceUrl)("title", ctx_r0.title());
  }
}
function ResourceVideoComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 2);
    \u0275\u0275domListener("click", function ResourceVideoComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.playing.set(true));
    });
    \u0275\u0275domElement(1, "img", 3);
    \u0275\u0275domElementStart(2, "span", 4);
    \u0275\u0275text(3, "\u25B6");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", "Play " + ctx_r0.title());
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", ctx_r0.poster(), \u0275\u0275sanitizeUrl);
  }
}
var ResourceVideoComponent = class _ResourceVideoComponent {
  src = input.required(...ngDevMode ? [{ debugName: "src" }] : []);
  title = input.required(...ngDevMode ? [{ debugName: "title" }] : []);
  poster = input("", ...ngDevMode ? [{ debugName: "poster" }] : []);
  playing = signal(false, ...ngDevMode ? [{ debugName: "playing" }] : []);
  static \u0275fac = function ResourceVideoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResourceVideoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourceVideoComponent, selectors: [["xh-resource-video"]], inputs: { src: [1, "src"], title: [1, "title"], poster: [1, "poster"] }, decls: 2, vars: 1, consts: [["loading", "lazy", "allow", "autoplay; fullscreen; picture-in-picture", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src", "title"], ["type", "button"], ["type", "button", 3, "click"], ["alt", "", "loading", "lazy", 3, "src"], ["aria-hidden", "true", 1, "play"]], template: function ResourceVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ResourceVideoComponent_Conditional_0_Template, 1, 2, "iframe", 0)(1, ResourceVideoComponent_Conditional_1_Template, 4, 2, "button", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.playing() || !ctx.poster() ? 0 : 1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\nbutton[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: #061c3b;\n  cursor: pointer;\n  overflow: hidden;\n}\nimg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.play[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  place-items: center;\n  width: 66px;\n  height: 48px;\n  padding-left: 3px;\n  border-radius: 12px;\n  color: #fff;\n  background: #dc382d;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .25);\n  font-size: 23px;\n  transition: background .2s;\n}\nbutton[_ngcontent-%COMP%]:hover   .play[_ngcontent-%COMP%] {\n  background: #b82118;\n}\nbutton[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #77b6ff;\n  outline-offset: -3px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .play[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=resource-video.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResourceVideoComponent, [{
    type: Component,
    args: [{ selector: "xh-resource-video", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (playing() || !poster()) {
      <iframe [src]="src()" [title]="title()" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    } @else {
      <button type="button" [attr.aria-label]="'Play ' + title()" (click)="playing.set(true)">
        <img [src]="poster()" alt="" loading="lazy" />
        <span class="play" aria-hidden="true">\u25B6</span>
      </button>
    }
  `, styles: ["/* angular:styles/component:css;f7a0b4be7a3f5c479ca49e35049e4bfd142299cdc84c7d25e1c6c50c7168dd87;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/shared/resource-video.component.ts */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\niframe {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\nbutton {\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: #061c3b;\n  cursor: pointer;\n  overflow: hidden;\n}\nimg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.play {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: grid;\n  place-items: center;\n  width: 66px;\n  height: 48px;\n  padding-left: 3px;\n  border-radius: 12px;\n  color: #fff;\n  background: #dc382d;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .25);\n  font-size: 23px;\n  transition: background .2s;\n}\nbutton:hover .play {\n  background: #b82118;\n}\nbutton:focus-visible {\n  outline: 3px solid #77b6ff;\n  outline-offset: -3px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .play {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=resource-video.component.css.map */\n"] }]
  }], null, { src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: true }] }], title: [{ type: Input, args: [{ isSignal: true, alias: "title", required: true }] }], poster: [{ type: Input, args: [{ isSignal: true, alias: "poster", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourceVideoComponent, { className: "ResourceVideoComponent", filePath: "src/app/shared/resource-video.component.ts", lineNumber: 30 });
})();

// src/app/core/case-study-matching.ts
var aliases = [
  ["cloud-backup", "cloud-backup-acronis", "acronis-backup", "acronis-cloud-backup"],
  ["cloud", "cloud-and-infrastructure"],
  ["security", "cybersecurity"],
  ["data-protection", "data-protection-and-compliance"]
];
function key(value) {
  const normalised = value.trim().toLowerCase().replace(/^\/+|\/+$/g, "").replace(/&/g, "and").replace(/[().,/]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return aliases.find((group) => group.includes(normalised))?.[0] ?? normalised;
}
function caseStudiesForPage(studies, pageNames) {
  const identities = new Set(pageNames.map(key).filter(Boolean));
  if (!identities.size)
    return studies;
  return studies.filter((study) => {
    const assigned = (study.relatedPages ?? []).map(key).filter(Boolean);
    const labels = assigned.length ? assigned : [
      ...study.services,
      study.mainCategory,
      study.subCategory
    ].map(key);
    return labels.some((label) => identities.has(label));
  });
}

// src/app/core/product-video-matching.ts
function youtubeVideoId(source) {
  if (/^[\w-]{11}$/.test(source))
    return source;
  try {
    const url = new URL(source);
    if (url.protocol !== "https:" && url.protocol !== "http:")
      return null;
    const host = url.hostname.replace(/^www\.|^m\./, "");
    const id = host === "youtu.be" ? url.pathname.slice(1) : ["youtube.com", "youtube-nocookie.com"].includes(host) ? url.searchParams.get("v") ?? /^\/(?:embed|shorts)\/([^/]+)/.exec(url.pathname)?.[1] : null;
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}
function videoText(value) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function productVideosForPage(videos, pageSlug, productName) {
  const page = slugify(pageSlug);
  const name = videoText(productName);
  const phrases = [productName, ...productName.split(/\s*[+&]\s*/)].map(videoText).filter(Boolean);
  return videos.filter((video) => {
    const assigned = (video.relatedPages ?? "").split(",").map(slugify).filter(Boolean);
    if (assigned.length)
      return assigned.includes(page);
    if (video.product?.trim())
      return videoText(video.product) === name;
    const title = `-${videoText(video.title)}-`;
    return phrases.some((phrase) => title.includes(`-${phrase}-`));
  });
}

// src/app/sections/insights-section.component.ts
var _c0 = ["blogGrid"];
var _c1 = (a0) => ["/case-studies", a0];
var _c2 = (a0) => ({ resource: "datasheet", service: a0 });
var _c3 = (a0) => ({ resource: "demo", service: a0 });
var _forTrack0 = ($index, $item) => $item.documentId;
var _forTrack1 = ($index, $item) => $item.href;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.src;
function InsightsSectionComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function InsightsSectionComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeView.set("videos"));
    });
    \u0275\u0275text(1, "Videos");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeView() === "videos");
    \u0275\u0275attribute("aria-pressed", ctx_r1.activeView() === "videos");
  }
}
function InsightsSectionComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function InsightsSectionComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeView.set("cases"));
    });
    \u0275\u0275text(1, "Case Studies");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.activeView() === "cases");
    \u0275\u0275attribute("aria-pressed", ctx_r1.activeView() === "cases");
  }
}
function InsightsSectionComponent_Conditional_18_Conditional_0_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", post_r5.coverImageUrl, \u0275\u0275sanitizeUrl)("alt", (post_r5.coverImage == null ? null : post_r5.coverImage.alternativeText) || post_r5.title);
  }
}
function InsightsSectionComponent_Conditional_18_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275conditionalCreate(1, InsightsSectionComponent_Conditional_18_Conditional_0_For_6_Conditional_1_Template, 1, 2, "img", 21);
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r5 = ctx.$implicit;
    const \u0275$index_45_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("feat", \u0275$index_45_r6 === 0);
    \u0275\u0275property("href", "/insights/" + ctx_r1.encodeURIComponent(post_r5.slug) + "/", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275conditional(post_r5.coverImageUrl ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", post_r5.author, " \xB7 ", ctx_r1.formatDate(post_r5.date));
  }
}
function InsightsSectionComponent_Conditional_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 16);
    \u0275\u0275listener("click", function InsightsSectionComponent_Conditional_18_Conditional_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollCarousel(-1));
    });
    \u0275\u0275text(2, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17, 0);
    \u0275\u0275repeaterCreate(5, InsightsSectionComponent_Conditional_18_Conditional_0_For_6_Template, 10, 9, "a", 18, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function InsightsSectionComponent_Conditional_18_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.scrollCarousel(1));
    });
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.posts());
  }
}
function InsightsSectionComponent_Conditional_18_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 24);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 23);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const article_r7 = ctx.$implicit;
    \u0275\u0275property("href", article_r7.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", article_r7.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r7.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", article_r7.author, " \xB7 Read guide \u2197");
  }
}
function InsightsSectionComponent_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275repeaterCreate(1, InsightsSectionComponent_Conditional_18_Conditional_1_For_2_Template, 10, 6, "a", 24, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.articles());
  }
}
function InsightsSectionComponent_Conditional_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.loading() ? "Loading insights\u2026" : "New insights are on the way. Explore all insights for more guides and articles.");
  }
}
function InsightsSectionComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InsightsSectionComponent_Conditional_18_Conditional_0_Template, 9, 0, "div", 10)(1, InsightsSectionComponent_Conditional_18_Conditional_1_Template, 3, 0, "div", 11)(2, InsightsSectionComponent_Conditional_18_Conditional_2_Template, 2, 1, "p", 12);
    \u0275\u0275elementStart(3, "div", 13)(4, "button", 14);
    \u0275\u0275text(5, " Browse Insights ");
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.posts().length ? 0 : ctx_r1.articles().length ? 1 : 2);
  }
}
function InsightsSectionComponent_Conditional_19_For_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r8);
  }
}
function InsightsSectionComponent_Conditional_19_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 27)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275repeaterCreate(10, InsightsSectionComponent_Conditional_19_For_2_For_11_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const study_r9 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, study_r9.id));
    \u0275\u0275attribute("aria-label", "Read case study: " + study_r9.metricLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", study_r9.industry, " \xB7 ", study_r9.profile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r9.metric.replace(" to ", " \u2192 "));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r9.metricLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r9.summary);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(study_r9.services);
  }
}
function InsightsSectionComponent_Conditional_19_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, "No case studies are available for this page yet. Browse all case studies for more customer stories.");
    \u0275\u0275elementEnd();
  }
}
function InsightsSectionComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275repeaterCreate(1, InsightsSectionComponent_Conditional_19_For_2_Template, 12, 9, "a", 27, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, InsightsSectionComponent_Conditional_19_Conditional_3_Template, 2, 0, "p", 12);
    \u0275\u0275elementStart(4, "div", 28)(5, "a", 29);
    \u0275\u0275text(6, "View all Case Studies \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.studies());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.studies().length ? 3 : -1);
  }
}
function InsightsSectionComponent_Conditional_20_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "p");
    \u0275\u0275text(2, "Contact our team for the latest product datasheets and technical specifications.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275text(4, "Request a datasheet");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c2, ctx_r1.pageSlug() || void 0));
  }
}
function InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 36)(1, "div", 37);
    \u0275\u0275element(2, "xh-resource-video", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const video_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", video_r10.src)("title", video_r10.title)("poster", video_r10.poster || "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r10.title);
  }
}
function InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_1_For_1_Template, 5, 4, "article", 36, _forTrack3);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx);
  }
}
function InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 36)(1, "div", 37);
    \u0275\u0275element(2, "iframe", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Tally on Cloud");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "article", 36)(6, "div", 37);
    \u0275\u0275element(7, "iframe", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9, "Cloud Drive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "article", 36)(11, "div", 37);
    \u0275\u0275element(12, "iframe", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14, "Cloud Backup");
    \u0275\u0275elementEnd()();
  }
}
function InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34);
    \u0275\u0275text(1, "Request a demo");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c3, ctx_r1.pageSlug()));
  }
}
function InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_3_Conditional_3_Template, 2, 3, "a", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.videosLoading() ? "Loading related videos\u2026" : "No videos are available for " + (((tmp_3_0 = ctx_r1.videoProduct()) == null ? null : tmp_3_0.name) || "this page") + " yet.");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.videosLoading() ? 3 : -1);
  }
}
function InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "a", 42);
    \u0275\u0275text(2, "View all Videos \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.videoLibraryUrl(), \u0275\u0275sanitizeUrl);
  }
}
function InsightsSectionComponent_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275conditionalCreate(1, InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_1_Template, 2, 0)(2, InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_2_Template, 15, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_3_Template, 4, 2, "div", 12)(4, InsightsSectionComponent_Conditional_20_Conditional_1_Conditional_4_Template, 3, 1, "div", 13);
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.resolvedVideos()) ? 1 : 2, tmp_2_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.resolvedVideos()) == null ? null : tmp_3_0.length) === 0 ? 3 : 4);
  }
}
function InsightsSectionComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InsightsSectionComponent_Conditional_20_Conditional_0_Template, 5, 3, "div", 33)(1, InsightsSectionComponent_Conditional_20_Conditional_1_Template, 5, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.activeView() === "datasheets" ? 0 : 1);
  }
}
var InsightsSectionComponent = class _InsightsSectionComponent {
  blogApi = inject(BlogApiService);
  catalog = inject(CatalogService);
  sanitizer = inject(DomSanitizer);
  caseStudiesApi = inject(CaseStudiesApiService);
  allStudies = toSignal(this.caseStudiesApi.studies$, { initialValue: CASE_STUDIES });
  pageSlug = input("", ...ngDevMode ? [{ debugName: "pageSlug" }] : []);
  showVideos = input(true, ...ngDevMode ? [{ debugName: "showVideos" }] : []);
  videos = input(null, ...ngDevMode ? [{ debugName: "videos" }] : []);
  articles = input([], ...ngDevMode ? [{ debugName: "articles" }] : []);
  videoDescription = input("", ...ngDevMode ? [{ debugName: "videoDescription" }] : []);
  videoLibraryUrl = input("https://www.youtube.com/@XcellHostCloudServices", ...ngDevMode ? [{ debugName: "videoLibraryUrl" }] : []);
  pageAliases = input([], ...ngDevMode ? [{ debugName: "pageAliases" }] : []);
  caseStudyLimit = input(null, ...ngDevMode ? [{ debugName: "caseStudyLimit" }] : []);
  videoProduct = computed(() => {
    const entry = this.catalog.entryBySlug(slugify(this.pageSlug()));
    return entry ?? null;
  }, ...ngDevMode ? [{ debugName: "videoProduct" }] : []);
  channelVideos = signal([], ...ngDevMode ? [{ debugName: "channelVideos" }] : []);
  videosLoading = signal(false, ...ngDevMode ? [{ debugName: "videosLoading" }] : []);
  resolvedVideoDescription = computed(() => this.videoDescription() || (this.videoProduct() ? `Watch walkthroughs and explainers for ${this.videoProduct().name}.` : this.viewCopy.videos.description), ...ngDevMode ? [{ debugName: "resolvedVideoDescription" }] : []);
  resolvedVideos = computed(() => {
    const explicit = this.videos();
    if (explicit !== null)
      return explicit;
    const app = this.videoProduct();
    if (!app)
      return null;
    const sources = this.catalog.rich(app.name)?.v ?? PRODUCT_VIDEOS[app.name] ?? [];
    const candidates = [
      ...sources.map((source, index) => ({
        title: `${app.name} \u2014 ${index === 0 ? "Product Intro" : "Use Cases"}`,
        source,
        poster: ""
      })),
      ...productVideosForPage(this.channelVideos(), this.pageSlug(), app.name).map((video) => ({
        title: video.title,
        source: video.videoUrl || "",
        poster: video.coverImageUrl || ""
      }))
    ];
    const seen = /* @__PURE__ */ new Set();
    return candidates.flatMap((video) => {
      const id = youtubeVideoId(video.source);
      if (!id || seen.has(id))
        return [];
      seen.add(id);
      return [{
        title: video.title,
        src: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`),
        poster: video.poster || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      }];
    });
  }, ...ngDevMode ? [{ debugName: "resolvedVideos" }] : []);
  allPosts = signal([], ...ngDevMode ? [{ debugName: "allPosts" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  encodeURIComponent = encodeURIComponent;
  posts = computed(() => {
    const slugs = [this.pageSlug(), ...this.pageAliases()].map((value) => value.trim().toLowerCase().replace(/^\/+|\/+$/g, "")).filter(Boolean);
    return this.allPosts().filter((post) => {
      if (!slugs.length)
        return true;
      const assigned = (post.relatedPages ?? "").split(",").map((value) => value.trim().toLowerCase().replace(/^\/+|\/+$/g, "")).filter(Boolean);
      const productSlug = slugify(post.product?.trim() || post.category);
      return assigned.length ? assigned.some((slug) => slugs.includes(slug)) : slugs.includes(productSlug);
    }).slice(0, 5);
  }, ...ngDevMode ? [{ debugName: "posts" }] : []);
  activeView = signal("blogs", ...ngDevMode ? [{ debugName: "activeView" }] : []);
  viewCopy = {
    datasheets: {
      heading: "Product details at a glance",
      description: "Explore features, specifications and deployment requirements for XcellHost solutions."
    },
    blogs: {
      heading: "Fresh Perspectives For Smarter IT Decisions",
      description: "Explore practical guides and expert insights on cloud, cybersecurity and Indian compliance to help your business move forward."
    },
    videos: {
      heading: "See our cloud solutions in action",
      description: "Watch product walkthroughs and quick explainers to discover how Tally on Cloud, Cloud Drive and Cloud Backup can simplify your day."
    },
    cases: {
      heading: "Real businesses. Measurable results.",
      description: "Discover how businesses use XcellHost to protect their data, reduce downtime and make everyday operations simpler."
    }
  };
  studies = computed(() => {
    const pages = [this.pageSlug(), ...this.pageAliases()].filter((value) => value.trim());
    const identities = pages.flatMap((page) => {
      const pageKey = slugify(page.trim().replace(/^\/+|\/+$/g, ""));
      const title = this.catalog.entryBySlug(pageKey)?.name ?? page;
      return [page, title, ...this.catalog.rich(title)?.alias ?? []];
    });
    const matchingStudies = caseStudiesForPage(this.allStudies(), identities);
    const limit = this.caseStudyLimit();
    return limit === null ? matchingStudies : matchingStudies.slice(0, Math.max(0, limit));
  }, ...ngDevMode ? [{ debugName: "studies" }] : []);
  blogGrid;
  constructor() {
    effect((onCleanup) => {
      if (!this.videoProduct() || this.videos() !== null || !this.showVideos() || this.activeView() !== "videos")
        return;
      this.videosLoading.set(true);
      const subscription = this.blogApi.videos$.subscribe({
        next: (videos) => {
          this.channelVideos.set(videos);
          this.videosLoading.set(false);
        },
        error: () => {
          this.channelVideos.set([]);
          this.videosLoading.set(false);
        }
      });
      onCleanup(() => {
        subscription.unsubscribe();
        this.videosLoading.set(false);
      });
    });
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => {
        this.allPosts.set(posts);
        this.loading.set(false);
      },
      error: () => {
        this.allPosts.set([]);
        this.loading.set(false);
      }
    });
  }
  formatDate(value) {
    return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(/* @__PURE__ */ new Date(`${value}T00:00:00`));
  }
  scrollCarousel(direction) {
    this.blogGrid?.nativeElement.scrollBy({ left: direction * 331, behavior: "smooth" });
  }
  static \u0275fac = function InsightsSectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InsightsSectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InsightsSectionComponent, selectors: [["xh-insights-section"]], viewQuery: function InsightsSectionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.blogGrid = _t.first);
    }
  }, hostAttrs: [2, "display", "contents"], inputs: { pageSlug: [1, "pageSlug"], showVideos: [1, "showVideos"], videos: [1, "videos"], articles: [1, "articles"], videoDescription: [1, "videoDescription"], videoLibraryUrl: [1, "videoLibraryUrl"], pageAliases: [1, "pageAliases"], caseStudyLimit: [1, "caseStudyLimit"] }, decls: 21, vars: 12, consts: [["blogGrid", ""], ["id", "insights", 1, "blogs"], [1, "wrap"], ["xhReveal", "", 1, "sec-head", "insights-heading"], [1, "eyebrow"], [1, "insights-heading-row"], ["role", "group", "aria-label", "Insight resources", 1, "insights-actions"], ["type", "button", "aria-controls", "insights-content", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", "aria-controls", "insights-content", 1, "btn", "btn-ghost", 3, "active"], ["id", "insights-content"], ["role", "region", "aria-roledescription", "carousel", "aria-label", "Latest insights", 1, "blog-carousel"], [1, "resource-articles"], ["role", "status", 1, "insights-empty"], [1, "blog-cta"], ["id", "allBlogs", "routerLink", "/insights", 1, "btn", "btn-ghost"], ["aria-hidden", "true"], ["type", "button", "aria-label", "Previous insights", 1, "blog-nav", "blog-nav-prev", 3, "click"], [1, "blog-grid"], [1, "bl", 3, "feat", "href"], ["type", "button", "aria-label", "Next insights", 1, "blog-nav", "blog-nav-next", 3, "click"], [1, "bl", 3, "href"], [1, "blog-cover", 3, "src", "alt"], [1, "bl-k"], [1, "bl-m"], ["target", "_blank", "rel", "noopener noreferrer", 1, "bl", 3, "href"], ["alt", "", "loading", "lazy", 1, "blog-cover", 3, "src"], [1, "case-grid"], [1, "cs", 3, "routerLink"], [1, "cases-cta"], ["routerLink", "/case-studies", 1, "btn", "btn-ghost"], [1, "cs-tag"], [1, "cs-num"], [1, "cs-foot"], [1, "insights-empty"], ["routerLink", "/contact", 1, "btn", "btn-ghost", 3, "queryParams"], [1, "insights-video-grid"], [1, "insights-video-card"], [1, "insights-video"], [3, "src", "title", "poster"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube-nocookie.com/embed/eb8jyqFV6fM?rel=0&playsinline=1`, "title", "Tally on Cloud video", "loading", "lazy", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube-nocookie.com/embed/a-Jy7VV13Do?rel=0&playsinline=1`, "title", "Cloud Drive video", "loading", "lazy", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube-nocookie.com/embed/rya4Q4IZniA?rel=0&playsinline=1`, "title", "Cloud Backup video", "loading", "lazy", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], [1, "btn", "btn-ghost", 3, "href"]], template: function InsightsSectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, "Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h2");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function InsightsSectionComponent_Template_button_click_11_listener() {
        return ctx.activeView.set("blogs");
      });
      \u0275\u0275text(12, "Blogs");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, InsightsSectionComponent_Conditional_13_Template, 2, 3, "button", 8);
      \u0275\u0275conditionalCreate(14, InsightsSectionComponent_Conditional_14_Template, 2, 3, "button", 8);
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function InsightsSectionComponent_Template_button_click_15_listener() {
        return ctx.activeView.set("datasheets");
      });
      \u0275\u0275text(16, "Datasheet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 9);
      \u0275\u0275conditionalCreate(18, InsightsSectionComponent_Conditional_18_Template, 8, 1)(19, InsightsSectionComponent_Conditional_19_Template, 7, 1)(20, InsightsSectionComponent_Conditional_20_Template, 2, 1);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275attribute("style", ctx.activeView() === "blogs" ? "text-transform: none !important" : null, \u0275\u0275sanitizeStyle);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.activeView() === "videos" && ctx.videoProduct() ? "See " + ctx.videoProduct().name + " in action" : ctx.viewCopy[ctx.activeView()].heading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.activeView() === "videos" ? ctx.resolvedVideoDescription() : ctx.viewCopy[ctx.activeView()].description);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeView() === "blogs");
      \u0275\u0275attribute("aria-pressed", ctx.activeView() === "blogs");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.showVideos() ? 13 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.pageSlug() !== "nvidia-h100" && ctx.pageSlug() !== "acronis-xdr" ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeView() === "datasheets");
      \u0275\u0275attribute("aria-pressed", ctx.activeView() === "datasheets");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.activeView() === "blogs" ? 18 : ctx.activeView() === "cases" ? 19 : 20);
    }
  }, dependencies: [RouterLink, RevealDirective, ResourceVideoComponent], styles: ["\n\n.resource-articles[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.resource-articles[_ngcontent-%COMP%]   .bl[_ngcontent-%COMP%] {\n  min-width: 0;\n  color: inherit;\n  text-decoration: none;\n}\n@media (max-width: 640px) {\n  .resource-articles[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.insights-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--slate);\n  padding: 24px 16px;\n}\n.blog-grid[_ngcontent-%COMP%]   .bl[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.insights-heading[_ngcontent-%COMP%] {\n  max-width: none;\n  text-align: center;\n}\n.insights-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]::after {\n  margin-left: auto;\n  margin-right: auto;\n}\n.insights-heading-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.insights-heading-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.insights-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0;\n}\n.insights-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  flex-shrink: 0;\n  margin-top: 8px;\n}\n.insights-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #fff;\n  white-space: nowrap;\n}\n.insights-actions[_ngcontent-%COMP%]   .btn.active[_ngcontent-%COMP%] {\n  background: var(--blue);\n  border-color: var(--blue);\n  color: #fff;\n}\n.insights-video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.insights-video-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n}\n.insights-video-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 20px;\n  font-family: var(--disp);\n  font-size: 18px;\n  color: var(--navy);\n}\n.insights-video[_ngcontent-%COMP%] {\n  aspect-ratio: 16 / 9;\n  background: var(--navy);\n}\n.insights-video[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.insights-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: 3px;\n}\n@media (max-width: 1000px) {\n  .insights-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .insights-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 760px) {\n  .insights-heading-row[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=insights-section.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InsightsSectionComponent, [{
    type: Component,
    args: [{ selector: "xh-insights-section", standalone: true, imports: [RouterLink, RevealDirective, ResourceVideoComponent], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="blogs" id="insights">
      <div class="wrap">
        <div class="sec-head insights-heading" xhReveal>
          <div class="eyebrow">Insights</div>
          <div class="insights-heading-row">
            <h2 [attr.style]="activeView() === 'blogs' ? 'text-transform: none !important' : null">{{ activeView() === 'videos' && videoProduct() ? 'See ' + videoProduct()!.name + ' in action' : viewCopy[activeView()].heading }}</h2>
            <p>{{ activeView() === 'videos' ? resolvedVideoDescription() : viewCopy[activeView()].description }}</p>
            <div class="insights-actions" role="group" aria-label="Insight resources">
              <button type="button" class="btn btn-ghost" [class.active]="activeView() === 'blogs'" [attr.aria-pressed]="activeView() === 'blogs'" aria-controls="insights-content" (click)="activeView.set('blogs')">Blogs</button>
              @if (showVideos()) {
                <button type="button" class="btn btn-ghost" [class.active]="activeView() === 'videos'" [attr.aria-pressed]="activeView() === 'videos'" aria-controls="insights-content" (click)="activeView.set('videos')">Videos</button>
              }
              @if (pageSlug() !== 'nvidia-h100' && pageSlug() !== 'acronis-xdr') {
                <button type="button" class="btn btn-ghost" [class.active]="activeView() === 'cases'" [attr.aria-pressed]="activeView() === 'cases'" aria-controls="insights-content" (click)="activeView.set('cases')">Case Studies</button>
              }
              <button type="button" class="btn btn-ghost" [class.active]="activeView() === 'datasheets'" [attr.aria-pressed]="activeView() === 'datasheets'" aria-controls="insights-content" (click)="activeView.set('datasheets')">Datasheet</button>
            </div>
          </div>
        </div>
        <div id="insights-content">
        @if (activeView() === 'blogs') {
        @if (posts().length) {
        <div class="blog-carousel" role="region" aria-roledescription="carousel" aria-label="Latest insights">
          <button class="blog-nav blog-nav-prev" type="button" aria-label="Previous insights" (click)="scrollCarousel(-1)">\u2039</button>
          <div class="blog-grid" #blogGrid>
          @for (post of posts(); track post.documentId; let first = $first) {
            <a class="bl" [class.feat]="first" [href]="'/insights/' + encodeURIComponent(post.slug) + '/'">
              @if (post.coverImageUrl) {
                <img
                  class="blog-cover"
                  [src]="post.coverImageUrl"
                  [alt]="post.coverImage?.alternativeText || post.title"
                />
              }
              <span class="bl-k">{{ post.category }}</span>
              <h3>{{ post.title }}</h3>
              <p>{{ post.description }}</p>
              <span class="bl-m">{{ post.author }} \xB7 {{ formatDate(post.date) }}</span>
            </a>
          }
          </div>
          <button class="blog-nav blog-nav-next" type="button" aria-label="Next insights" (click)="scrollCarousel(1)">\u203A</button>
        </div>
        } @else if (articles().length) {
          <div class="resource-articles">
            @for (article of articles(); track article.href) {
              <a class="bl" [href]="article.href" target="_blank" rel="noopener noreferrer">
                <img class="blog-cover" [src]="article.image" alt="" loading="lazy" />
                <span class="bl-k">{{ article.category }}</span>
                <h3>{{ article.title }}</h3><p>{{ article.description }}</p>
                <span class="bl-m">{{ article.author }} \xB7 Read guide \u2197</span>
              </a>
            }
          </div>
        } @else {
          <p class="insights-empty" role="status">{{ loading() ? 'Loading insights\u2026' : 'New insights are on the way. Explore all insights for more guides and articles.' }}</p>
        }
        <div class="blog-cta">
          <button class="btn btn-ghost" id="allBlogs" routerLink="/insights">
            Browse Insights <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
        } @else if (activeView() === 'cases') {
          <div class="case-grid">
            @for (study of studies(); track study.id) {
              <a class="cs" [routerLink]="['/case-studies', study.id]" [attr.aria-label]="'Read case study: ' + study.metricLabel">
                <div class="cs-tag">{{ study.industry }} \xB7 {{ study.profile }}</div>
                <div class="cs-num">{{ study.metric.replace(' to ', ' \u2192 ') }}</div>
                <b>{{ study.metricLabel }}</b>
                <p>{{ study.summary }}</p>
                <div class="cs-foot">
                  @for (service of study.services; track service) {
                    <span>{{ service }}</span>
                  }
                </div>
              </a>
            }
          </div>
          @if (!studies().length) {
            <p class="insights-empty" role="status">No case studies are available for this page yet. Browse all case studies for more customer stories.</p>
          }
          <div class="cases-cta"><a class="btn btn-ghost" routerLink="/case-studies">View all Case Studies \u2192</a></div>
        } @else {
          @if (activeView() === 'datasheets') {
            <div class="insights-empty">
              <p>Contact our team for the latest product datasheets and technical specifications.</p>
              <a class="btn btn-ghost" routerLink="/contact" [queryParams]="{ resource: 'datasheet', service: pageSlug() || undefined }">Request a datasheet</a>
            </div>
          } @else {
          <div class="insights-video-grid">
            @if (resolvedVideos(); as resources) {
              @for (video of resources; track video.src) {
                <article class="insights-video-card">
                  <div class="insights-video">
                    <xh-resource-video [src]="video.src" [title]="video.title" [poster]="video.poster || ''" />
                  </div>
                  <h3>{{ video.title }}</h3>
                </article>
              }
            } @else {
            <article class="insights-video-card">
              <div class="insights-video">
                <iframe src="https://www.youtube-nocookie.com/embed/eb8jyqFV6fM?rel=0&playsinline=1" title="Tally on Cloud video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <h3>Tally on Cloud</h3>
            </article>
            <article class="insights-video-card">
              <div class="insights-video">
                <iframe src="https://www.youtube-nocookie.com/embed/a-Jy7VV13Do?rel=0&playsinline=1" title="Cloud Drive video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <h3>Cloud Drive</h3>
            </article>
            <article class="insights-video-card">
              <div class="insights-video">
                <iframe src="https://www.youtube-nocookie.com/embed/rya4Q4IZniA?rel=0&playsinline=1" title="Cloud Backup video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <h3>Cloud Backup</h3>
            </article>
            }
          </div>
          @if (resolvedVideos()?.length === 0) {
            <div class="insights-empty" role="status">
              <p>{{ videosLoading() ? 'Loading related videos\u2026' : 'No videos are available for ' + (videoProduct()?.name || 'this page') + ' yet.' }}</p>
              @if (!videosLoading()) {
                <a class="btn btn-ghost" routerLink="/contact" [queryParams]="{ resource: 'demo', service: pageSlug() }">Request a demo</a>
              }
            </div>
          } @else {
            <div class="blog-cta"><a class="btn btn-ghost" [href]="videoLibraryUrl()">View all Videos \u2192</a></div>
          }
        }
          }
        </div>
      </div>
    </section>
  `, styles: ["/* angular:styles/component:css;f1662b3c62a1606f057ea1eb3688982cd20c7b27c2b3e966d1b17722a4468a3f;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/sections/insights-section.component.ts */\n.resource-articles {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.resource-articles .bl {\n  min-width: 0;\n  color: inherit;\n  text-decoration: none;\n}\n@media (max-width: 640px) {\n  .resource-articles {\n    grid-template-columns: 1fr;\n  }\n}\n.insights-empty {\n  text-align: center;\n  color: var(--slate);\n  padding: 24px 16px;\n}\n.blog-grid .bl {\n  color: inherit;\n  text-decoration: none;\n}\n.insights-heading {\n  max-width: none;\n  text-align: center;\n}\n.insights-heading .eyebrow::after {\n  margin-left: auto;\n  margin-right: auto;\n}\n.insights-heading-row {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.insights-heading-row h2 {\n  margin-bottom: 0;\n}\n.insights-heading p {\n  max-width: 760px;\n  margin: 0;\n}\n.insights-actions {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  flex-shrink: 0;\n  margin-top: 8px;\n}\n.insights-actions .btn {\n  background: #fff;\n  white-space: nowrap;\n}\n.insights-actions .btn.active {\n  background: var(--blue);\n  border-color: var(--blue);\n  color: #fff;\n}\n.insights-video-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.insights-video-card {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n}\n.insights-video-card h3 {\n  margin: 0;\n  padding: 20px;\n  font-family: var(--disp);\n  font-size: 18px;\n  color: var(--navy);\n}\n.insights-video {\n  aspect-ratio: 16 / 9;\n  background: var(--navy);\n}\n.insights-video iframe {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.insights-actions .btn:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: 3px;\n}\n@media (max-width: 1000px) {\n  .insights-video-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .insights-video-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 760px) {\n  .insights-heading-row {\n    gap: 16px;\n  }\n}\n/*# sourceMappingURL=insights-section.component.css.map */\n"] }]
  }], () => [], { pageSlug: [{ type: Input, args: [{ isSignal: true, alias: "pageSlug", required: false }] }], showVideos: [{ type: Input, args: [{ isSignal: true, alias: "showVideos", required: false }] }], videos: [{ type: Input, args: [{ isSignal: true, alias: "videos", required: false }] }], articles: [{ type: Input, args: [{ isSignal: true, alias: "articles", required: false }] }], videoDescription: [{ type: Input, args: [{ isSignal: true, alias: "videoDescription", required: false }] }], videoLibraryUrl: [{ type: Input, args: [{ isSignal: true, alias: "videoLibraryUrl", required: false }] }], pageAliases: [{ type: Input, args: [{ isSignal: true, alias: "pageAliases", required: false }] }], caseStudyLimit: [{ type: Input, args: [{ isSignal: true, alias: "caseStudyLimit", required: false }] }], blogGrid: [{
    type: ViewChild,
    args: ["blogGrid"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InsightsSectionComponent, { className: "InsightsSectionComponent", filePath: "src/app/sections/insights-section.component.ts", lineNumber: 206 });
})();

export {
  RevealDirective,
  InsightsSectionComponent
};
//# sourceMappingURL=chunk-3UBXKXB6.js.map
