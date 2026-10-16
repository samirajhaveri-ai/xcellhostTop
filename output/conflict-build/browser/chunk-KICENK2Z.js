import {
  TSPLUS_REMOTE_ACCESS_EXPERIENCES
} from "./chunk-6MRWBBIM.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/tsplus-demo-center.page.ts
var _forTrack0 = ($index, $item) => $item.video;
function TsplusDemoCenterPage_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 12)(1, "div", 13)(2, "video", 14);
    \u0275\u0275element(3, "source", 15);
    \u0275\u0275text(4, " Your browser does not support this video. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 16)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const experience_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", experience_r1.title);
    \u0275\u0275advance();
    \u0275\u0275property("src", experience_r1.video);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(experience_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(experience_r1.description);
  }
}
var TsplusDemoCenterPage = class _TsplusDemoCenterPage {
  experiences = TSPLUS_REMOTE_ACCESS_EXPERIENCES;
  constructor() {
    inject(SeoService).set("TSplus Demo Center | XcellHost", "Watch TSplus Remote Access connection demos, including RDP desktops, RemoteApp and HTML5 access.", "/tsplus-demo-center/");
  }
  static \u0275fac = function TsplusDemoCenterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TsplusDemoCenterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TsplusDemoCenterPage, selectors: [["xh-tsplus-demo-center-page"]], decls: 32, vars: 0, consts: [[1, "tsplus-demo-page"], [1, "tsplus-demo-wrap"], ["aria-label", "Breadcrumb", 1, "tsplus-demo-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], [1, "tsplus-demo-header"], [1, "tsplus-demo-eyebrow"], ["routerLink", "/tsplus-remote-access"], ["aria-labelledby", "tsplus-demo-connection-title", 1, "tsplus-connection-experiences"], ["id", "tsplus-demo-connection-title", 1, "pp-sec"], [1, "tsplus-connection-kicker"], [1, "tsplus-connection-grid"], [1, "tsplus-connection-card"], [1, "tsplus-connection-video"], ["controls", "", "muted", "", "playsinline", "", "preload", "metadata"], ["type", "video/mp4", 3, "src"], [1, "tsplus-connection-copy"]], template: function TsplusDemoCenterPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Experience Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "TSplus Demo Center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "header", 5)(14, "span", 6);
      \u0275\u0275text(15, "Experience Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h1");
      \u0275\u0275text(17, "TSplus Demo Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "See the ways your team can connect to desktops and applications with TSplus Remote Access.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 7);
      \u0275\u0275text(21, "Explore TSplus Remote Access ");
      \u0275\u0275elementStart(22, "span", 4);
      \u0275\u0275text(23, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "section", 8)(25, "h2", 9);
      \u0275\u0275text(26, "Connection experiences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p", 10);
      \u0275\u0275text(28, "Enable ideal user experiences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 11);
      \u0275\u0275repeaterCreate(30, TsplusDemoCenterPage_For_31_Template, 10, 4, "article", 12, _forTrack0);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275repeater(ctx.experiences);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.tsplus-demo-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  background:\n    linear-gradient(\n      180deg,\n      #f3f7fd 0,\n      #fff 260px);\n  padding: 38px 24px 88px;\n}\n.tsplus-demo-wrap[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.tsplus-demo-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-wrap: wrap;\n  color: #607393;\n  font-size: 12px;\n  margin-bottom: 27px;\n}\n.tsplus-demo-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #145fca;\n  text-decoration: none;\n}\n.tsplus-demo-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.tsplus-demo-header[_ngcontent-%COMP%] {\n  margin-bottom: 42px;\n}\n.tsplus-demo-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono,monospace);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.tsplus-demo-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 13px;\n  color: #062653;\n  font: 800 clamp(34px, 4.4vw, 52px)/1.12 var(--disp,sans-serif);\n  letter-spacing: -.035em;\n}\n.tsplus-demo-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 0 22px;\n  color: #526785;\n  font-size: 16px;\n  line-height: 1.65;\n}\n.tsplus-demo-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 17px;\n  border-radius: 9px;\n  background: #1565d8;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.tsplus-demo-header[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #0d4caa;\n}\n.tsplus-demo-page[_ngcontent-%COMP%]   .tsplus-connection-experiences[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.tsplus-demo-page[_ngcontent-%COMP%]   .tsplus-connection-experiences[_ngcontent-%COMP%]    > .pp-sec[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #0a2d61;\n  font: 700 22px/1.3 var(--disp,sans-serif);\n}\n.tsplus-demo-page[_ngcontent-%COMP%]   .tsplus-connection-kicker[_ngcontent-%COMP%] {\n  color: #ff7a10;\n}\n@media (max-width: 600px) {\n  .tsplus-demo-page[_ngcontent-%COMP%] {\n    padding: 25px 16px 60px;\n  }\n  .tsplus-demo-header[_ngcontent-%COMP%] {\n    margin-bottom: 34px;\n  }\n}\n/*# sourceMappingURL=tsplus-demo-center.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TsplusDemoCenterPage, [{
    type: Component,
    args: [{ selector: "xh-tsplus-demo-center-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<main class="tsplus-demo-page">\r\n  <div class="tsplus-demo-wrap">\r\n    <nav class="tsplus-demo-breadcrumb" aria-label="Breadcrumb">\r\n      <a routerLink="/">Home</a><span aria-hidden="true">\u203A</span><span>Experience Center</span><span aria-hidden="true">\u203A</span><span>TSplus Demo Center</span>\r\n    </nav>\r\n\r\n    <header class="tsplus-demo-header">\r\n      <span class="tsplus-demo-eyebrow">Experience Center</span>\r\n      <h1>TSplus Demo Center</h1>\r\n      <p>See the ways your team can connect to desktops and applications with TSplus Remote Access.</p>\r\n      <a routerLink="/tsplus-remote-access">Explore TSplus Remote Access <span aria-hidden="true">\u2192</span></a>\r\n    </header>\r\n\r\n    <section class="tsplus-connection-experiences" aria-labelledby="tsplus-demo-connection-title">\r\n      <h2 class="pp-sec" id="tsplus-demo-connection-title">Connection experiences</h2>\r\n      <p class="tsplus-connection-kicker">Enable ideal user experiences</p>\r\n      <div class="tsplus-connection-grid">\r\n        @for (experience of experiences; track experience.video) {\r\n          <article class="tsplus-connection-card">\r\n            <div class="tsplus-connection-video">\r\n              <video controls muted playsinline preload="metadata" [attr.aria-label]="experience.title">\r\n                <source [src]="experience.video" type="video/mp4" />\r\n                Your browser does not support this video.\r\n              </video>\r\n            </div>\r\n            <div class="tsplus-connection-copy">\r\n              <h3>{{ experience.title }}</h3>\r\n              <p>{{ experience.description }}</p>\r\n            </div>\r\n          </article>\r\n        }\r\n      </div>\r\n    </section>\r\n  </div>\r\n</main>\r\n', styles: ["/* src/app/pages/tsplus-demo-center.page.css */\n.tsplus-demo-page {\n  min-height: 70vh;\n  background:\n    linear-gradient(\n      180deg,\n      #f3f7fd 0,\n      #fff 260px);\n  padding: 38px 24px 88px;\n}\n.tsplus-demo-wrap {\n  max-width: 1180px;\n  margin: 0 auto;\n}\n.tsplus-demo-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-wrap: wrap;\n  color: #607393;\n  font-size: 12px;\n  margin-bottom: 27px;\n}\n.tsplus-demo-breadcrumb a {\n  color: #145fca;\n  text-decoration: none;\n}\n.tsplus-demo-breadcrumb a:hover {\n  text-decoration: underline;\n}\n.tsplus-demo-header {\n  margin-bottom: 42px;\n}\n.tsplus-demo-eyebrow {\n  display: block;\n  margin-bottom: 12px;\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono,monospace);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.tsplus-demo-header h1 {\n  margin: 0 0 13px;\n  color: #062653;\n  font: 800 clamp(34px, 4.4vw, 52px)/1.12 var(--disp,sans-serif);\n  letter-spacing: -.035em;\n}\n.tsplus-demo-header p {\n  max-width: 700px;\n  margin: 0 0 22px;\n  color: #526785;\n  font-size: 16px;\n  line-height: 1.65;\n}\n.tsplus-demo-header > a {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 17px;\n  border-radius: 9px;\n  background: #1565d8;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.tsplus-demo-header > a:hover {\n  background: #0d4caa;\n}\n.tsplus-demo-page .tsplus-connection-experiences {\n  margin-top: 0;\n}\n.tsplus-demo-page .tsplus-connection-experiences > .pp-sec {\n  margin: 0 0 7px;\n  color: #0a2d61;\n  font: 700 22px/1.3 var(--disp,sans-serif);\n}\n.tsplus-demo-page .tsplus-connection-kicker {\n  color: #ff7a10;\n}\n@media (max-width: 600px) {\n  .tsplus-demo-page {\n    padding: 25px 16px 60px;\n  }\n  .tsplus-demo-header {\n    margin-bottom: 34px;\n  }\n}\n/*# sourceMappingURL=tsplus-demo-center.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TsplusDemoCenterPage, { className: "TsplusDemoCenterPage", filePath: "src/app/pages/tsplus-demo-center.page.ts", lineNumber: 15 });
})();
export {
  TsplusDemoCenterPage
};
//# sourceMappingURL=chunk-KICENK2Z.js.map
