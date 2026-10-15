import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/vendor-partner.page.ts
function VendorPartnerPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0);
    \u0275\u0275element(1, "span", 1)(2, "span", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "p", 4);
    \u0275\u0275text(5, "Vendor partnership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 6);
    \u0275\u0275text(11, "Under Construction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 7);
    \u0275\u0275text(13, "We\u2019re preparing this partner page. Please check back soon.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 8)(15, "span", 9);
    \u0275\u0275text(16, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Back to home ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const name_r1 = ctx;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(name_r1.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(name_r1);
  }
}
var PARTNERS = {
  acronis: "Acronis",
  opentext: "OpenText",
  "microsoft-365": "Microsoft 365",
  "dpo-genie": "DPO Genie",
  "microsoft-azure": "Microsoft Azure",
  "amazon-web-services": "Amazon Web Services",
  "google-cloud": "Google Cloud",
  "ibm-multicloud": "IBM Multicloud",
  "red-hat": "Red Hat",
  digicert: "DigiCert",
  sectigo: "Sectigo",
  tsplus: "TSplus",
  kaspersky: "Kaspersky",
  sentinelone: "SentinelOne",
  fortinet: "Fortinet",
  "palo-alto": "Palo Alto",
  hpe: "HPE",
  dell: "Dell",
  cybird: "Cybird"
};
var VendorPartnerPage = class _VendorPartnerPage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  seo = inject(SeoService);
  slug = toSignal(this.route.paramMap.pipe(map((params) => params.get("slug") ?? "")), {
    initialValue: ""
  });
  partner = computed(() => PARTNERS[this.slug()] ?? null, ...ngDevMode ? [{ debugName: "partner" }] : []);
  constructor() {
    effect(() => {
      const partner = this.partner();
      if (!partner) {
        void this.router.navigate(["/"]);
        return;
      }
      this.seo.set(`${partner} partnership \u2014 XcellHost`, `${partner} vendor partnership information from XcellHost.`, `/vendor-partners/${this.slug()}/`);
    });
  }
  static \u0275fac = function VendorPartnerPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VendorPartnerPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VendorPartnerPage, selectors: [["xh-vendor-partner-page"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [[1, "partner-page"], ["aria-hidden", "true", 1, "partner-orb", "partner-orb-one"], ["aria-hidden", "true", 1, "partner-orb", "partner-orb-two"], [1, "partner-card"], [1, "partner-kicker"], ["aria-hidden", "true", 1, "partner-mark"], [1, "partner-status"], [1, "partner-copy"], ["routerLink", "/", 1, "partner-back"], ["aria-hidden", "true", 1, "material-symbols-outlined"]], template: function VendorPartnerPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, VendorPartnerPage_Conditional_0_Template, 18, 2, "main", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.partner()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.partner-page[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: clamp(520px, 72vh, 760px);\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  padding: 72px 24px;\n  text-align: center;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(21, 101, 216, .13),\n      transparent 32%),\n    radial-gradient(\n      circle at 80% 78%,\n      rgba(255, 140, 26, .13),\n      transparent 28%),\n    #f7faff;\n}\n.partner-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: min(620px, 100%);\n  padding: clamp(38px, 7vw, 68px);\n  border: 1px solid #dce5f2;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, .92);\n  box-shadow: 0 28px 70px rgba(4, 30, 66, .13);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.partner-kicker[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  color: #1565d8;\n  font: 600 11px/1 var(--mono);\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n.partner-mark[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 22px;\n  border-radius: 17px;\n  color: #fff;\n  background:\n    linear-gradient(\n      145deg,\n      #1565d8,\n      #0a2a57);\n  box-shadow: 0 12px 25px rgba(21, 101, 216, .28);\n  font: 800 25px/1 var(--disp);\n}\nh1[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  color: #041e42;\n}\n.partner-status[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  color: #ff8c1a;\n  font: 700 clamp(20px, 3vw, 28px)/1.2 var(--disp);\n}\n.partner-copy[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #51607a;\n  font-size: 16px;\n}\n.partner-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 19px;\n  border: 1px solid #dce5f2;\n  border-radius: 9px;\n  color: #041e42;\n  font-weight: 600;\n  transition:\n    border-color .2s,\n    color .2s,\n    transform .2s;\n}\n.partner-back[_ngcontent-%COMP%]:hover {\n  color: #1565d8;\n  border-color: #1565d8;\n  transform: translateY(-2px);\n}\n.partner-back[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.partner-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(2px);\n}\n.partner-orb-one[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  top: -70px;\n  right: 8%;\n  background: rgba(127, 178, 255, .2);\n}\n.partner-orb-two[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 170px;\n  bottom: -55px;\n  left: 10%;\n  background: rgba(255, 140, 26, .16);\n}\n/*# sourceMappingURL=vendor-partner.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VendorPartnerPage, [{
    type: Component,
    args: [{ selector: "xh-vendor-partner-page", standalone: true, imports: [RouterLink], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (partner(); as name) {
      <main class="partner-page">
        <span class="partner-orb partner-orb-one" aria-hidden="true"></span>
        <span class="partner-orb partner-orb-two" aria-hidden="true"></span>
        <div class="partner-card">
          <p class="partner-kicker">Vendor partnership</p>
          <div class="partner-mark" aria-hidden="true">{{ name.charAt(0) }}</div>
          <h1>{{ name }}</h1>
          <p class="partner-status">Under Construction</p>
          <p class="partner-copy">We\u2019re preparing this partner page. Please check back soon.</p>
          <a routerLink="/" class="partner-back">
            <span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>
            Back to home
          </a>
        </div>
      </main>
    }
  `, styles: ["/* angular:styles/component:css;e2fc379a1b71156f4e5cef75a158251b898592f2bf8e814c1eaa6a87bb62aee8;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/vendor-partner.page.ts */\n.partner-page {\n  position: relative;\n  min-height: clamp(520px, 72vh, 760px);\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  padding: 72px 24px;\n  text-align: center;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(21, 101, 216, .13),\n      transparent 32%),\n    radial-gradient(\n      circle at 80% 78%,\n      rgba(255, 140, 26, .13),\n      transparent 28%),\n    #f7faff;\n}\n.partner-card {\n  position: relative;\n  z-index: 1;\n  width: min(620px, 100%);\n  padding: clamp(38px, 7vw, 68px);\n  border: 1px solid #dce5f2;\n  border-radius: 24px;\n  background: rgba(255, 255, 255, .92);\n  box-shadow: 0 28px 70px rgba(4, 30, 66, .13);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.partner-kicker {\n  margin-bottom: 22px;\n  color: #1565d8;\n  font: 600 11px/1 var(--mono);\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n.partner-mark {\n  display: grid;\n  place-items: center;\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 22px;\n  border-radius: 17px;\n  color: #fff;\n  background:\n    linear-gradient(\n      145deg,\n      #1565d8,\n      #0a2a57);\n  box-shadow: 0 12px 25px rgba(21, 101, 216, .28);\n  font: 800 25px/1 var(--disp);\n}\nh1 {\n  margin-bottom: 14px;\n  color: #041e42;\n}\n.partner-status {\n  margin-bottom: 14px;\n  color: #ff8c1a;\n  font: 700 clamp(20px, 3vw, 28px)/1.2 var(--disp);\n}\n.partner-copy {\n  margin-bottom: 30px;\n  color: #51607a;\n  font-size: 16px;\n}\n.partner-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 19px;\n  border: 1px solid #dce5f2;\n  border-radius: 9px;\n  color: #041e42;\n  font-weight: 600;\n  transition:\n    border-color .2s,\n    color .2s,\n    transform .2s;\n}\n.partner-back:hover {\n  color: #1565d8;\n  border-color: #1565d8;\n  transform: translateY(-2px);\n}\n.partner-back .material-symbols-outlined {\n  font-size: 19px;\n}\n.partner-orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(2px);\n}\n.partner-orb-one {\n  width: 220px;\n  height: 220px;\n  top: -70px;\n  right: 8%;\n  background: rgba(127, 178, 255, .2);\n}\n.partner-orb-two {\n  width: 170px;\n  height: 170px;\n  bottom: -55px;\n  left: 10%;\n  background: rgba(255, 140, 26, .16);\n}\n/*# sourceMappingURL=vendor-partner.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VendorPartnerPage, { className: "VendorPartnerPage", filePath: "src/app/pages/vendor-partner.page.ts", lineNumber: 124 });
})();
export {
  VendorPartnerPage
};
//# sourceMappingURL=chunk-NRHDYATF.js.map
