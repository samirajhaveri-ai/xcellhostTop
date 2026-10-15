import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/xcellhost-demo.data.ts
var XCELLHOST_DEMO_VIDEOS = [
  {
    id: 1,
    title: "Simplifying DPDPA Compliance with XcellHost.",
    videoId: "41Ipx1SYCOM",
    category: "DPDPA"
  },
  {
    id: 2,
    title: "Consent Management For DPDPA",
    videoId: "xpDGGwaCiWM",
    category: "DPDPA"
  },
  {
    id: 3,
    title: "Understanding Breach Notification for DPDPA",
    videoId: "gw-KlQAfxMs",
    category: "DPDPA"
  },
  {
    id: 4,
    title: "Unlock the Power of Enterprise Analytics for the DPDPA",
    videoId: "pi1TLgo62bM",
    category: "DPDPA"
  },
  {
    id: 5,
    title: "Understanding DPDPA Compliance and Security Safeguards",
    videoId: "I_KIF9TqsRg",
    category: "DPDPA"
  },
  {
    id: 6,
    title: "Understanding Data Retention for DPDPA",
    videoId: "Xxk8yeyeXCY",
    category: "DPDPA"
  },
  {
    id: 7,
    title: "DPDPA SIEM Ready Event Pipeline A New Era of Compliance",
    videoId: "3Of3gCla-hU",
    category: "DPDPA"
  },
  {
    id: 8,
    title: "Unveiling the Power of Data Inventory & RoPA For DPDPA",
    videoId: "36rRBPnoPhQ",
    category: "DPDPA"
  },
  {
    id: 9,
    title: "Strengthening Your Data Compliance with DPDPA Audit Management",
    videoId: "Y0RC-ZRPf34",
    category: "DPDPA"
  },
  {
    id: 10,
    title: "Ensuring Secure Cross-Border Data Transfer: DPDPA",
    videoId: "XK4yLQxz11g",
    category: "DPDPA"
  },
  {
    id: 11,
    title: "Cybird Partner Opportunity Transforming IT Business for the Future",
    videoId: "phzscka8jMM",
    category: "Partner Opportunity"
  }
];

// src/app/pages/xcellhost-demo-center.page.ts
var _forTrack0 = ($index, $item) => $item.id;
function XcellhostDemoCenterPage_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    \u0275\u0275property("value", category_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r1);
  }
}
function XcellhostDemoCenterPage_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function XcellhostDemoCenterPage_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, " Clear all filters ");
    \u0275\u0275elementEnd();
  }
}
function XcellhostDemoCenterPage_Conditional_34_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 21);
  }
  if (rf & 2) {
    const video_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", video_r4.embedUrl, \u0275\u0275sanitizeResourceUrl)("title", video_r4.title);
  }
}
function XcellhostDemoCenterPage_Conditional_34_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function XcellhostDemoCenterPage_Conditional_34_For_2_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const video_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.playVideo(video_r4.videoId));
    });
    \u0275\u0275element(1, "img", 26)(2, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const video_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", "Play " + video_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("src", video_r4.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", video_r4.title);
  }
}
function XcellhostDemoCenterPage_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 19)(1, "div", 20);
    \u0275\u0275conditionalCreate(2, XcellhostDemoCenterPage_Conditional_34_For_2_Conditional_2_Template, 1, 2, "iframe", 21)(3, XcellhostDemoCenterPage_Conditional_34_For_2_Conditional_3_Template, 3, 3, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23)(5, "div", 24)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const video_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.activeVideoId() === video_r4.videoId ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(video_r4.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r4.title);
  }
}
function XcellhostDemoCenterPage_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, XcellhostDemoCenterPage_Conditional_34_For_2_Template, 10, 3, "article", 19, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredVideos());
  }
}
function XcellhostDemoCenterPage_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "h3");
    \u0275\u0275text(2, "No videos match these filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try a broader search or reset the selected filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function XcellhostDemoCenterPage_Conditional_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(6, "Reset filters");
    \u0275\u0275elementEnd()();
  }
}
var XcellhostDemoCenterPage = class _XcellhostDemoCenterPage {
  sanitizer = inject(DomSanitizer);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  selectedCategory = signal("", ...ngDevMode ? [{ debugName: "selectedCategory" }] : []);
  activeVideoId = signal(null, ...ngDevMode ? [{ debugName: "activeVideoId" }] : []);
  videos = XCELLHOST_DEMO_VIDEOS.map((video) => __spreadProps(__spreadValues({}, video), {
    thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&playsinline=1`)
  }));
  categories = [...new Set(XCELLHOST_DEMO_VIDEOS.map((video) => video.category))];
  filteredVideos = computed(() => {
    const search = this.searchTerm().trim().toLocaleLowerCase();
    const category = this.selectedCategory();
    return this.videos.filter((video) => (!search || `${video.title} ${video.category}`.toLocaleLowerCase().includes(search)) && (!category || video.category === category));
  }, ...ngDevMode ? [{ debugName: "filteredVideos" }] : []);
  filtersAreActive = computed(() => Boolean(this.searchTerm()) || Boolean(this.selectedCategory()), ...ngDevMode ? [{ debugName: "filtersAreActive" }] : []);
  constructor() {
    inject(SeoService).set("XcellHost Demo Center | Product Videos", "Watch XcellHost product videos and demos covering DPDPA compliance, data protection and partner opportunities.", "/xcellhost-demo-center/");
  }
  setSearch(value) {
    this.searchTerm.set(value);
    this.activeVideoId.set(null);
  }
  setCategory(value) {
    this.selectedCategory.set(value);
    this.activeVideoId.set(null);
  }
  playVideo(videoId) {
    this.activeVideoId.set(videoId);
  }
  clearFilters() {
    this.searchTerm.set("");
    this.selectedCategory.set("");
    this.activeVideoId.set(null);
  }
  static \u0275fac = function XcellhostDemoCenterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _XcellhostDemoCenterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XcellhostDemoCenterPage, selectors: [["xh-xcellhost-demo-center-page"]], decls: 36, vars: 4, consts: [[1, "acronis-demo-page"], [1, "acronis-demo-wrap"], ["aria-label", "Breadcrumb", 1, "acronis-demo-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], ["aria-labelledby", "xcellhost-results-title", 1, "acronis-catalog"], [1, "acronis-catalog-toolbar"], [1, "acronis-demo-eyebrow"], ["id", "xcellhost-results-title"], [1, "acronis-filters"], [1, "acronis-search"], ["type", "search", "placeholder", "Search by product, feature or topic", 3, "input", "value"], [3, "change", "value"], ["value", ""], [3, "value"], ["type", "button", 1, "acronis-clear-filters"], [1, "acronis-video-grid"], [1, "acronis-empty-state"], ["type", "button", 1, "acronis-clear-filters", 3, "click"], [1, "acronis-video-card"], [1, "acronis-video-media"], ["allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src", "title"], ["type", "button"], [1, "acronis-video-copy"], [1, "acronis-video-tags"], ["type", "button", 3, "click"], ["loading", "lazy", 3, "src", "alt"], ["aria-hidden", "true", 1, "acronis-play"]], template: function XcellhostDemoCenterPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Experience Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "XcellHost Demo Center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "section", 5)(14, "div", 6)(15, "div")(16, "span", 7);
      \u0275\u0275text(17, "Videos and product demos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h1", 8);
      \u0275\u0275text(19, "XcellHost Demo Center");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 10)(22, "span");
      \u0275\u0275text(23, "Search videos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 11);
      \u0275\u0275listener("input", function XcellhostDemoCenterPage_Template_input_input_24_listener($event) {
        return ctx.setSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "label")(26, "span");
      \u0275\u0275text(27, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "select", 12);
      \u0275\u0275listener("change", function XcellhostDemoCenterPage_Template_select_change_28_listener($event) {
        return ctx.setCategory($event.target.value);
      });
      \u0275\u0275elementStart(29, "option", 13);
      \u0275\u0275text(30, "All categories");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(31, XcellhostDemoCenterPage_For_32_Template, 2, 2, "option", 14, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(33, XcellhostDemoCenterPage_Conditional_33_Template, 2, 0, "button", 15);
      \u0275\u0275conditionalCreate(34, XcellhostDemoCenterPage_Conditional_34_Template, 3, 0, "div", 16)(35, XcellhostDemoCenterPage_Conditional_35_Template, 7, 0, "div", 17);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.selectedCategory());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtersAreActive() ? 33 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.filteredVideos().length ? 34 : 35);
    }
  }, dependencies: [RouterLink], styles: ['\n\n.acronis-demo-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  padding: 38px 24px 88px;\n  background:\n    linear-gradient(\n      180deg,\n      #edf5ff 0,\n      #fff 430px);\n  color: #082b5d;\n}\n.acronis-demo-wrap[_ngcontent-%COMP%] {\n  max-width: 1310px;\n  margin: 0 auto;\n}\n.acronis-demo-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 27px;\n  color: #607393;\n  font-size: 12px;\n}\n.acronis-demo-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #145fca;\n  text-decoration: none;\n}\n.acronis-demo-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.acronis-demo-eyebrow[_ngcontent-%COMP%], \n.acronis-demo-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono,monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.acronis-catalog[_ngcontent-%COMP%] {\n  scroll-margin-top: 90px;\n}\n.acronis-catalog-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 22px;\n}\n.acronis-catalog-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #082b5d;\n  font: 750 clamp(27px, 3vw, 36px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n}\n.acronis-sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.acronis-sort[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #607393;\n  font-size: 12px;\n  font-weight: 700;\n}\n.acronis-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.acronis-filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr repeat(5, 1fr);\n  gap: 10px;\n  padding: 16px;\n  border: 1px solid #d7e3f3;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 9px 25px rgba(8, 43, 94, .06);\n}\n.acronis-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.acronis-sort[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.acronis-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 6px;\n  color: #3b5679;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n.acronis-filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.acronis-filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.acronis-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  padding: 0 11px;\n  border: 1px solid #cbd9ec;\n  border-radius: 8px;\n  background: #fff;\n  color: #173b68;\n  font: 600 12px/1 var(--body,sans-serif);\n  outline: none;\n}\n.acronis-filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.acronis-filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.acronis-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #1565d8;\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.acronis-clear-filters[_ngcontent-%COMP%] {\n  margin: 13px 0 2px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #1565d8;\n  font-size: 12px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.acronis-video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 26px 18px;\n  margin-top: 25px;\n}\n.acronis-video-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #d7e3f3;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 8px 23px rgba(8, 43, 94, .07);\n  transition: transform .2s, box-shadow .2s;\n}\n.acronis-video-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 33px rgba(8, 43, 94, .12);\n}\n.acronis-video-media[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  background: #051a3b;\n}\n.acronis-video-media[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], \n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.acronis-video-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  background: #051a3b;\n  cursor: pointer;\n}\n.acronis-video-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(3, 24, 56, .04),\n      rgba(3, 24, 56, .2));\n  transition: background .2s;\n}\n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:after {\n  background: rgba(3, 24, 56, .08);\n}\n.acronis-play[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: #0874e8;\n  box-shadow: 0 8px 24px rgba(0, 62, 143, .35);\n  transform: translate(-50%, -50%);\n  transition: transform .2s;\n}\n.acronis-play[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  top: 21px;\n  left: 28px;\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n  border-left: 19px solid #fff;\n}\n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .acronis-play[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.acronis-video-copy[_ngcontent-%COMP%] {\n  padding: 16px 17px 19px;\n}\n.acronis-video-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  min-height: 21px;\n  margin-bottom: 9px;\n}\n.acronis-video-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: #edf4ff;\n  color: #1760c8;\n  font: 700 9px/1.35 var(--mono,monospace);\n  letter-spacing: .06em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.acronis-video-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #082b5d;\n  font: 750 17px/1.38 var(--disp,sans-serif);\n}\n.acronis-video-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #607393;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.acronis-show-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 34px;\n}\n.acronis-show-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.acronis-empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 19px;\n  border: 0;\n  border-radius: 9px;\n  background: #1565d8;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.acronis-show-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #cfe2ff;\n  font-size: 11px;\n}\n.acronis-empty-state[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 54px 24px;\n  border: 1px dashed #b7cae5;\n  border-radius: 17px;\n  background: #f7faff;\n  text-align: center;\n}\n.acronis-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  font: 750 21px/1.3 var(--disp,sans-serif);\n}\n.acronis-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #607393;\n  font-size: 13px;\n}\n.acronis-demo-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  margin-top: 76px;\n  padding: 34px 38px;\n  border-radius: 21px;\n  background:\n    linear-gradient(\n      135deg,\n      #061f46,\n      #0b3d82);\n  color: #fff;\n}\n.acronis-demo-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #7fb4ff;\n}\n.acronis-demo-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #fff;\n  font: 750 clamp(23px, 3vw, 31px)/1.25 var(--disp,sans-serif);\n}\n.acronis-demo-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0;\n  color: #cfe0f7;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.acronis-demo-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 12px 18px;\n  border-radius: 9px;\n  background: #ff7a10;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  text-decoration: none;\n}\n@media (max-width: 1120px) {\n  .acronis-filters[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .acronis-search[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 900px) {\n  .acronis-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .acronis-demo-page[_ngcontent-%COMP%] {\n    padding: 25px 16px 60px;\n  }\n  .acronis-catalog-toolbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .acronis-sort[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acronis-filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acronis-search[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .acronis-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acronis-demo-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 27px 23px;\n  }\n}\n/*# sourceMappingURL=acronis-demo-center.page.css.map */', "\n\n.acronis-filters[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 2fr) minmax(220px, 1fr);\n}\n.acronis-search[_ngcontent-%COMP%] {\n  grid-column: auto;\n}\n@media (max-width: 640px) {\n  .acronis-filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=xcellhost-demo-center.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XcellhostDemoCenterPage, [{
    type: Component,
    args: [{ selector: "xh-xcellhost-demo-center-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="acronis-demo-page">\r
  <div class="acronis-demo-wrap">\r
    <nav class="acronis-demo-breadcrumb" aria-label="Breadcrumb">\r
      <a routerLink="/">Home</a><span aria-hidden="true">/</span><span>Experience Center</span\r
      ><span aria-hidden="true">/</span><span>XcellHost Demo Center</span>\r
    </nav>\r
\r
    <section class="acronis-catalog" aria-labelledby="xcellhost-results-title">\r
      <div class="acronis-catalog-toolbar">\r
        <div>\r
          <span class="acronis-demo-eyebrow">Videos and product demos</span>\r
          <h1 id="xcellhost-results-title">XcellHost Demo Center</h1>\r
        </div>\r
      </div>\r
\r
      <div class="acronis-filters">\r
        <label class="acronis-search">\r
          <span>Search videos</span>\r
          <input\r
            type="search"\r
            placeholder="Search by product, feature or topic"\r
            [value]="searchTerm()"\r
            (input)="setSearch($any($event.target).value)"\r
          />\r
        </label>\r
\r
        <label>\r
          <span>Category</span>\r
          <select [value]="selectedCategory()" (change)="setCategory($any($event.target).value)">\r
            <option value="">All categories</option>\r
            @for (category of categories; track category) {\r
              <option [value]="category">{{ category }}</option>\r
            }\r
          </select>\r
        </label>\r
      </div>\r
\r
      @if (filtersAreActive()) {\r
        <button class="acronis-clear-filters" type="button" (click)="clearFilters()">\r
          Clear all filters\r
        </button>\r
      }\r
\r
      @if (filteredVideos().length) {\r
        <div class="acronis-video-grid">\r
          @for (video of filteredVideos(); track video.id) {\r
            <article class="acronis-video-card">\r
              <div class="acronis-video-media">\r
                @if (activeVideoId() === video.videoId) {\r
                  <iframe\r
                    [src]="video.embedUrl"\r
                    [title]="video.title"\r
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\r
                    referrerpolicy="strict-origin-when-cross-origin"\r
                    allowfullscreen\r
                  ></iframe>\r
                } @else {\r
                  <button\r
                    type="button"\r
                    (click)="playVideo(video.videoId)"\r
                    [attr.aria-label]="'Play ' + video.title"\r
                  >\r
                    <img [src]="video.thumbnailUrl" [alt]="video.title" loading="lazy" />\r
                    <span class="acronis-play" aria-hidden="true"></span>\r
                  </button>\r
                }\r
              </div>\r
              <div class="acronis-video-copy">\r
                <div class="acronis-video-tags"><span>{{ video.category }}</span></div>\r
                <h3>{{ video.title }}</h3>\r
              </div>\r
            </article>\r
          }\r
        </div>\r
      } @else {\r
        <div class="acronis-empty-state">\r
          <h3>No videos match these filters</h3>\r
          <p>Try a broader search or reset the selected filters.</p>\r
          <button type="button" (click)="clearFilters()">Reset filters</button>\r
        </div>\r
      }\r
    </section>\r
  </div>\r
</main>\r
`, styles: ['/* src/app/pages/acronis-demo-center.page.css */\n.acronis-demo-page {\n  min-height: 70vh;\n  padding: 38px 24px 88px;\n  background:\n    linear-gradient(\n      180deg,\n      #edf5ff 0,\n      #fff 430px);\n  color: #082b5d;\n}\n.acronis-demo-wrap {\n  max-width: 1310px;\n  margin: 0 auto;\n}\n.acronis-demo-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 27px;\n  color: #607393;\n  font-size: 12px;\n}\n.acronis-demo-breadcrumb a {\n  color: #145fca;\n  text-decoration: none;\n}\n.acronis-demo-breadcrumb a:hover {\n  text-decoration: underline;\n}\n.acronis-demo-eyebrow,\n.acronis-demo-cta > div > span {\n  display: block;\n  margin-bottom: 10px;\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono,monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.acronis-catalog {\n  scroll-margin-top: 90px;\n}\n.acronis-catalog-toolbar {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 22px;\n}\n.acronis-catalog-toolbar h1 {\n  margin: 0;\n  color: #082b5d;\n  font: 750 clamp(27px, 3vw, 36px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n}\n.acronis-sort {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.acronis-sort span {\n  color: #607393;\n  font-size: 12px;\n  font-weight: 700;\n}\n.acronis-sort select {\n  width: 120px;\n}\n.acronis-filters {\n  display: grid;\n  grid-template-columns: 2fr repeat(5, 1fr);\n  gap: 10px;\n  padding: 16px;\n  border: 1px solid #d7e3f3;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 9px 25px rgba(8, 43, 94, .06);\n}\n.acronis-filters label,\n.acronis-sort {\n  min-width: 0;\n}\n.acronis-filters label > span {\n  display: block;\n  margin: 0 0 6px;\n  color: #3b5679;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n.acronis-filters input,\n.acronis-filters select,\n.acronis-sort select {\n  width: 100%;\n  height: 42px;\n  padding: 0 11px;\n  border: 1px solid #cbd9ec;\n  border-radius: 8px;\n  background: #fff;\n  color: #173b68;\n  font: 600 12px/1 var(--body,sans-serif);\n  outline: none;\n}\n.acronis-filters input:focus,\n.acronis-filters select:focus,\n.acronis-sort select:focus {\n  border-color: #1565d8;\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.acronis-clear-filters {\n  margin: 13px 0 2px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #1565d8;\n  font-size: 12px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.acronis-video-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 26px 18px;\n  margin-top: 25px;\n}\n.acronis-video-card {\n  overflow: hidden;\n  border: 1px solid #d7e3f3;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 8px 23px rgba(8, 43, 94, .07);\n  transition: transform .2s, box-shadow .2s;\n}\n.acronis-video-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 33px rgba(8, 43, 94, .12);\n}\n.acronis-video-media {\n  aspect-ratio: 16/9;\n  background: #051a3b;\n}\n.acronis-video-media iframe,\n.acronis-video-media button,\n.acronis-video-media img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.acronis-video-media button {\n  position: relative;\n  padding: 0;\n  background: #051a3b;\n  cursor: pointer;\n}\n.acronis-video-media img {\n  object-fit: cover;\n}\n.acronis-video-media button:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(3, 24, 56, .04),\n      rgba(3, 24, 56, .2));\n  transition: background .2s;\n}\n.acronis-video-media button:hover:after {\n  background: rgba(3, 24, 56, .08);\n}\n.acronis-play {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: #0874e8;\n  box-shadow: 0 8px 24px rgba(0, 62, 143, .35);\n  transform: translate(-50%, -50%);\n  transition: transform .2s;\n}\n.acronis-play:after {\n  content: "";\n  position: absolute;\n  top: 21px;\n  left: 28px;\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n  border-left: 19px solid #fff;\n}\n.acronis-video-media button:hover .acronis-play {\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.acronis-video-copy {\n  padding: 16px 17px 19px;\n}\n.acronis-video-tags {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  min-height: 21px;\n  margin-bottom: 9px;\n}\n.acronis-video-tags span {\n  max-width: 100%;\n  overflow: hidden;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: #edf4ff;\n  color: #1760c8;\n  font: 700 9px/1.35 var(--mono,monospace);\n  letter-spacing: .06em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.acronis-video-copy h3 {\n  margin: 0;\n  color: #082b5d;\n  font: 750 17px/1.38 var(--disp,sans-serif);\n}\n.acronis-video-copy p {\n  margin: 9px 0 0;\n  color: #607393;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.acronis-show-more {\n  display: flex;\n  justify-content: center;\n  margin-top: 34px;\n}\n.acronis-show-more button,\n.acronis-empty-state button {\n  padding: 12px 19px;\n  border: 0;\n  border-radius: 9px;\n  background: #1565d8;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.acronis-show-more button span {\n  margin-left: 8px;\n  color: #cfe2ff;\n  font-size: 11px;\n}\n.acronis-empty-state {\n  margin-top: 25px;\n  padding: 54px 24px;\n  border: 1px dashed #b7cae5;\n  border-radius: 17px;\n  background: #f7faff;\n  text-align: center;\n}\n.acronis-empty-state h3 {\n  margin: 0 0 7px;\n  font: 750 21px/1.3 var(--disp,sans-serif);\n}\n.acronis-empty-state p {\n  margin: 0 0 18px;\n  color: #607393;\n  font-size: 13px;\n}\n.acronis-demo-cta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  margin-top: 76px;\n  padding: 34px 38px;\n  border-radius: 21px;\n  background:\n    linear-gradient(\n      135deg,\n      #061f46,\n      #0b3d82);\n  color: #fff;\n}\n.acronis-demo-cta > div > span {\n  color: #7fb4ff;\n}\n.acronis-demo-cta h2 {\n  margin: 0 0 8px;\n  color: #fff;\n  font: 750 clamp(23px, 3vw, 31px)/1.25 var(--disp,sans-serif);\n}\n.acronis-demo-cta p {\n  max-width: 720px;\n  margin: 0;\n  color: #cfe0f7;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.acronis-demo-cta > a {\n  flex: none;\n  padding: 12px 18px;\n  border-radius: 9px;\n  background: #ff7a10;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  text-decoration: none;\n}\n@media (max-width: 1120px) {\n  .acronis-filters {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .acronis-search {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 900px) {\n  .acronis-video-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .acronis-demo-page {\n    padding: 25px 16px 60px;\n  }\n  .acronis-catalog-toolbar {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .acronis-sort {\n    width: 100%;\n  }\n  .acronis-filters {\n    grid-template-columns: 1fr;\n  }\n  .acronis-search {\n    grid-column: auto;\n  }\n  .acronis-video-grid {\n    grid-template-columns: 1fr;\n  }\n  .acronis-demo-cta {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 27px 23px;\n  }\n}\n/*# sourceMappingURL=acronis-demo-center.page.css.map */\n', "/* src/app/pages/xcellhost-demo-center.page.css */\n.acronis-filters {\n  grid-template-columns: minmax(0, 2fr) minmax(220px, 1fr);\n}\n.acronis-search {\n  grid-column: auto;\n}\n@media (max-width: 640px) {\n  .acronis-filters {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=xcellhost-demo-center.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XcellhostDemoCenterPage, { className: "XcellhostDemoCenterPage", filePath: "src/app/pages/xcellhost-demo-center.page.ts", lineNumber: 24 });
})();
export {
  XcellhostDemoCenterPage
};
//# sourceMappingURL=chunk-6HBTC7RY.js.map
