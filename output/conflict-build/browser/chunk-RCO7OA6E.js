import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/under-construction.page.ts
var UPPERCASE_WORDS = /* @__PURE__ */ new Set([
  "ai",
  "api",
  "aws",
  "bimi",
  "caa",
  "cdn",
  "csr",
  "dkim",
  "dmarc",
  "dns",
  "dpdpa",
  "dsc",
  "edr",
  "gcp",
  "gpu",
  "iso",
  "mdr",
  "mta",
  "pki",
  "rpt",
  "sase",
  "seo",
  "siem",
  "smb",
  "soc",
  "spf",
  "ssl",
  "sts",
  "tls",
  "vapt",
  "vdi",
  "vpn",
  "xdr"
]);
function pageNameFromSlug(slug) {
  if (!slug)
    return "This Page";
  return slug.split("-").filter(Boolean).map((word) => UPPERCASE_WORDS.has(word.toLowerCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
var UnderConstructionPage = class _UnderConstructionPage {
  route = inject(ActivatedRoute);
  seo = inject(SeoService);
  routeTitle = this.route.snapshot.data["title"];
  slug = toSignal(this.route.paramMap.pipe(map((params) => params.get("slug") ?? "")), { initialValue: "" });
  pageName = computed(() => this.routeTitle ?? pageNameFromSlug(this.slug()), ...ngDevMode ? [{ debugName: "pageName" }] : []);
  pageInitial = computed(() => this.pageName().charAt(0).toUpperCase(), ...ngDevMode ? [{ debugName: "pageInitial" }] : []);
  constructor() {
    const pageName = this.routeTitle ?? pageNameFromSlug(this.route.snapshot.paramMap.get("slug") ?? "");
    const pagePath = this.route.snapshot.routeConfig?.path?.split("/:")[0] ?? "under-construction";
    this.seo.set(`${pageName} - Under Construction | XcellHost`, `The ${pageName} page is currently being prepared. Please check back soon.`, `/${pagePath}/`);
  }
  static \u0275fac = function UnderConstructionPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UnderConstructionPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UnderConstructionPage, selectors: [["xh-under-construction-page"]], hostAttrs: [2, "display", "contents"], decls: 18, vars: 2, consts: [[1, "construction-page"], ["aria-hidden", "true", 1, "construction-orb", "construction-orb-blue"], ["aria-hidden", "true", 1, "construction-orb", "construction-orb-orange"], ["aria-labelledby", "construction-title", 1, "construction-card"], [1, "construction-kicker"], ["aria-hidden", "true", 1, "construction-icon"], ["id", "construction-title"], ["routerLink", "/", 1, "construction-home"], ["aria-hidden", "true"]], template: function UnderConstructionPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275element(1, "span", 1)(2, "span", 2);
      \u0275\u0275elementStart(3, "section", 3)(4, "span", 4);
      \u0275\u0275text(5, "XcellHost resource");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h2");
      \u0275\u0275text(11, "Under Construction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p");
      \u0275\u0275text(13, "We\u2019re preparing this page now. Please check back soon.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 7)(15, "span", 8);
      \u0275\u0275text(16, "\u2190");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Back to home ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.pageInitial());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.pageName());
    }
  }, dependencies: [RouterLink], styles: ["\n\n.construction-page[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 660px;\n  place-items: center;\n  overflow: hidden;\n  padding: 74px 24px 92px;\n  background:\n    linear-gradient(\n      120deg,\n      #eef5ff 0%,\n      #f8faff 53%,\n      #fff7f0 100%);\n  color: #071f49;\n}\n.construction-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(2px);\n}\n.construction-orb-blue[_ngcontent-%COMP%] {\n  top: -72px;\n  right: 8%;\n  width: 220px;\n  height: 220px;\n  background: rgba(73, 143, 239, .13);\n}\n.construction-orb-orange[_ngcontent-%COMP%] {\n  bottom: -54px;\n  left: 10%;\n  width: 172px;\n  height: 172px;\n  background: rgba(255, 131, 31, .14);\n}\n.construction-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(100%, 620px);\n  padding: 66px 54px;\n  border: 1px solid #d8e3f1;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, .94);\n  box-shadow: 0 26px 65px rgba(12, 43, 83, .14);\n  text-align: center;\n}\n.construction-kicker[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n  color: #1261d8;\n  font: 750 10px var(--mono);\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n.construction-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 23px;\n  place-items: center;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      145deg,\n      #1769e9,\n      #073773);\n  color: #fff;\n  font: 850 27px var(--disp);\n  box-shadow: 0 12px 24px rgba(14, 79, 170, .25);\n}\n.construction-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #061d43;\n  font: 850 clamp(38px, 5vw, 52px)/1.06 var(--disp);\n  letter-spacing: -.035em;\n}\n.construction-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 16px 0 14px;\n  color: #ff7a10;\n  font: 800 clamp(25px, 3vw, 31px)/1.2 var(--disp);\n}\n.construction-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5a6e8b;\n  font-size: 15.5px;\n  line-height: 1.65;\n}\n.construction-home[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 50px;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  margin-top: 30px;\n  padding: 0 22px;\n  border: 1px solid #d3dfef;\n  border-radius: 10px;\n  background: #fff;\n  color: #102b52;\n  font: 750 14px var(--disp);\n  text-decoration: none;\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.construction-home[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #aac7ed;\n  box-shadow: 0 10px 22px rgba(11, 64, 133, .1);\n}\n.construction-home[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 19px;\n  font-weight: 500;\n}\n@media (max-width: 600px) {\n  .construction-page[_ngcontent-%COMP%] {\n    min-height: 590px;\n    padding: 54px 18px 70px;\n  }\n  .construction-card[_ngcontent-%COMP%] {\n    padding: 48px 22px;\n    border-radius: 19px;\n  }\n  .construction-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .construction-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .construction-home[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=under-construction.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnderConstructionPage, [{
    type: Component,
    args: [{ selector: "xh-under-construction-page", standalone: true, imports: [RouterLink], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: '<main class="construction-page">\r\n  <span class="construction-orb construction-orb-blue" aria-hidden="true"></span>\r\n  <span class="construction-orb construction-orb-orange" aria-hidden="true"></span>\r\n\r\n  <section class="construction-card" aria-labelledby="construction-title">\r\n    <span class="construction-kicker">XcellHost resource</span>\r\n    <span class="construction-icon" aria-hidden="true">{{ pageInitial() }}</span>\r\n    <h1 id="construction-title">{{ pageName() }}</h1>\r\n    <h2>Under Construction</h2>\r\n    <p>We&rsquo;re preparing this page now. Please check back soon.</p>\r\n    <a class="construction-home" routerLink="/">\r\n      <span aria-hidden="true">&larr;</span> Back to home\r\n    </a>\r\n  </section>\r\n</main>\r\n', styles: ["/* src/app/pages/under-construction.page.css */\n.construction-page {\n  position: relative;\n  display: grid;\n  min-height: 660px;\n  place-items: center;\n  overflow: hidden;\n  padding: 74px 24px 92px;\n  background:\n    linear-gradient(\n      120deg,\n      #eef5ff 0%,\n      #f8faff 53%,\n      #fff7f0 100%);\n  color: #071f49;\n}\n.construction-orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(2px);\n}\n.construction-orb-blue {\n  top: -72px;\n  right: 8%;\n  width: 220px;\n  height: 220px;\n  background: rgba(73, 143, 239, .13);\n}\n.construction-orb-orange {\n  bottom: -54px;\n  left: 10%;\n  width: 172px;\n  height: 172px;\n  background: rgba(255, 131, 31, .14);\n}\n.construction-card {\n  position: relative;\n  z-index: 1;\n  width: min(100%, 620px);\n  padding: 66px 54px;\n  border: 1px solid #d8e3f1;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, .94);\n  box-shadow: 0 26px 65px rgba(12, 43, 83, .14);\n  text-align: center;\n}\n.construction-kicker {\n  display: block;\n  margin-bottom: 20px;\n  color: #1261d8;\n  font: 750 10px var(--mono);\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n.construction-icon {\n  display: grid;\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 23px;\n  place-items: center;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      145deg,\n      #1769e9,\n      #073773);\n  color: #fff;\n  font: 850 27px var(--disp);\n  box-shadow: 0 12px 24px rgba(14, 79, 170, .25);\n}\n.construction-card h1 {\n  margin: 0;\n  color: #061d43;\n  font: 850 clamp(38px, 5vw, 52px)/1.06 var(--disp);\n  letter-spacing: -.035em;\n}\n.construction-card h2 {\n  margin: 16px 0 14px;\n  color: #ff7a10;\n  font: 800 clamp(25px, 3vw, 31px)/1.2 var(--disp);\n}\n.construction-card p {\n  margin: 0;\n  color: #5a6e8b;\n  font-size: 15.5px;\n  line-height: 1.65;\n}\n.construction-home {\n  display: inline-flex;\n  min-height: 50px;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  margin-top: 30px;\n  padding: 0 22px;\n  border: 1px solid #d3dfef;\n  border-radius: 10px;\n  background: #fff;\n  color: #102b52;\n  font: 750 14px var(--disp);\n  text-decoration: none;\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.construction-home:hover {\n  transform: translateY(-2px);\n  border-color: #aac7ed;\n  box-shadow: 0 10px 22px rgba(11, 64, 133, .1);\n}\n.construction-home span {\n  font-size: 19px;\n  font-weight: 500;\n}\n@media (max-width: 600px) {\n  .construction-page {\n    min-height: 590px;\n    padding: 54px 18px 70px;\n  }\n  .construction-card {\n    padding: 48px 22px;\n    border-radius: 19px;\n  }\n  .construction-card h1 {\n    font-size: 38px;\n  }\n  .construction-card p {\n    font-size: 14px;\n  }\n  .construction-home {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=under-construction.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UnderConstructionPage, { className: "UnderConstructionPage", filePath: "src/app/pages/under-construction.page.ts", lineNumber: 32 });
})();
export {
  UnderConstructionPage
};
//# sourceMappingURL=chunk-RCO7OA6E.js.map
