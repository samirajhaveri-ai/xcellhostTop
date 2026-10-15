import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";

// src/app/sections/product/product-video.component.ts
function ProductVideoComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 6);
    \u0275\u0275domListener("click", function ProductVideoComponent_For_2_Template_button_click_0_listener() {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.index.set($index_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const l_r4 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.index() === $index_r2);
    \u0275\u0275attribute("data-v", $index_r2)("aria-pressed", ctx_r2.index() === $index_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u25B6 ", l_r4, " ");
  }
}
function ProductVideoComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "iframe", 3);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx, \u0275\u0275sanitizeResourceUrl)("title", ctx_r2.name() + " \u2014 " + ctx_r2.label());
  }
}
function ProductVideoComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "video", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", ctx_r2.source(), \u0275\u0275sanitizeUrl);
  }
}
function ProductVideoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "span", 7);
    \u0275\u0275text(2, "\u25B6");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span");
    \u0275\u0275text(6, "Video slot ready \u2014 embed URL will play here");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r2.name(), " \u2014 ", ctx_r2.label(), " video");
  }
}
function youtubeId(url) {
  if (!url)
    return "";
  if (/^[\w-]{11}$/.test(url))
    return url;
  const m = /(?:youtu\.be\/|v=|embed\/)([\w-]{11})/.exec(url);
  return m ? m[1] : "";
}
var ProductVideoComponent = class _ProductVideoComponent {
  sanitizer = inject(DomSanitizer);
  /** video sources, in tab order */
  videos = input.required(...ngDevMode ? [{ debugName: "videos" }] : []);
  /** tab captions, e.g. `['Product Intro', 'Use Cases']` */
  labels = input.required(...ngDevMode ? [{ debugName: "labels" }] : []);
  /** product name, used in the iframe title and the placeholder */
  name = input.required(...ngDevMode ? [{ debugName: "name" }] : []);
  /** which tab is showing */
  index = signal(0, ...ngDevMode ? [{ debugName: "index" }] : []);
  source = computed(() => this.videos()[this.index()] ?? "", ...ngDevMode ? [{ debugName: "source" }] : []);
  label = computed(() => this.labels()[this.index()] ?? (this.index() === 0 ? "Intro" : "Use Case"), ...ngDevMode ? [{ debugName: "label" }] : []);
  embedUrl = computed(() => {
    const id = youtubeId(this.source());
    return id ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`) : null;
  }, ...ngDevMode ? [{ debugName: "embedUrl" }] : []);
  constructor() {
    effect(() => {
      this.videos();
      this.index.set(0);
    });
  }
  static \u0275fac = function ProductVideoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductVideoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductVideoComponent, selectors: [["xh-product-video"]], hostAttrs: [2, "display", "contents"], inputs: { videos: [1, "videos"], labels: [1, "labels"], name: [1, "name"] }, decls: 7, vars: 1, consts: [[1, "pv-tabs"], ["type", "button", 1, "pv-tab", 3, "active"], ["id", "ppVid", 1, "pv-frame"], ["width", "100%", "height", "100%", "frameborder", "0", "allow", "accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src", "title"], ["controls", "", "preload", "metadata", "playsinline", "", 3, "src"], [1, "pv-ph"], ["type", "button", 1, "pv-tab", 3, "click"], [1, "pv-play"]], template: function ProductVideoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, ProductVideoComponent_For_2_Template, 2, 5, "button", 1, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 2);
      \u0275\u0275conditionalCreate(4, ProductVideoComponent_Conditional_4_Template, 1, 2, "iframe", 3)(5, ProductVideoComponent_Conditional_5_Template, 1, 1, "video", 4)(6, ProductVideoComponent_Conditional_6_Template, 7, 2, "div", 5);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.labels());
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_1_0 = ctx.embedUrl()) ? 4 : ctx.source() ? 5 : 6, tmp_1_0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVideoComponent, [{
    type: Component,
    args: [{
      selector: "xh-product-video",
      standalone: true,
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="pv-tabs">
      @for (l of labels(); track $index) {
        <button
          type="button"
          class="pv-tab"
          [class.active]="index() === $index"
          [attr.data-v]="$index"
          [attr.aria-pressed]="index() === $index"
          (click)="index.set($index)"
        >
          \u25B6 {{ l }}
        </button>
      }
    </div>
    <div class="pv-frame" id="ppVid">
      @if (embedUrl(); as url) {
        <iframe
          width="100%"
          height="100%"
          [src]="url"
          [title]="name() + ' \u2014 ' + label()"
          frameborder="0"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      } @else if (source()) {
        <video [src]="source()" controls preload="metadata" playsinline></video>
      } @else {
        <div class="pv-ph">
          <span class="pv-play">\u25B6</span>
          <b>{{ name() }} \u2014 {{ label() }} video</b>
          <span>Video slot ready \u2014 embed URL will play here</span>
        </div>
      }
    </div>
  `
    }]
  }], () => [], { videos: [{ type: Input, args: [{ isSignal: true, alias: "videos", required: true }] }], labels: [{ type: Input, args: [{ isSignal: true, alias: "labels", required: true }] }], name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductVideoComponent, { className: "ProductVideoComponent", filePath: "src/app/sections/product/product-video.component.ts", lineNumber: 61 });
})();
//# sourceMappingURL=chunk-CUVUGSTP.js.map
