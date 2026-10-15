import {
  ProductPageComponent
} from "./chunk-QNOIPV4V.js";
import "./chunk-KKNAOUDV.js";
import "./chunk-JECKRT3F.js";
import "./chunk-GQ5QB3XB.js";
import "./chunk-6MRWBBIM.js";
import "./chunk-XD3KN7K4.js";
import "./chunk-CUVUGSTP.js";
import "./chunk-CRL34XPE.js";
import "./chunk-PWY32UK5.js";
import "./chunk-APIH6CFY.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-C365EWJY.js";
import "./chunk-EVL5GQOW.js";
import {
  QuantityInputDirective
} from "./chunk-XXOOERF5.js";
import "./chunk-MAWJHU3X.js";
import "./chunk-3MMBSDR4.js";
import "./chunk-FGJ7AN27.js";
import "./chunk-LN7P5EZP.js";
import "./chunk-KQWZNZVP.js";
import "./chunk-B3FR7JOU.js";
import {
  InsightsSectionComponent
} from "./chunk-3UBXKXB6.js";
import "./chunk-6DVXASVN.js";
import "./chunk-TZE2L2GZ.js";
import "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import "./chunk-M5OSJJBF.js";
import "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import {
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/pages/geotrust-ssl-certificates.page.ts
var _c0 = (a0) => ({ quantity: a0 });
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function GeoTrustSslCertificatesPage_For_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 136);
    \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_For_154_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter.set(option_r2.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r2.filter() === option_r2.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.label);
  }
}
function GeoTrustSslCertificatesPage_For_157_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 139);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r5 === "Multi" ? "Multi-Domain" : tag_r5);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 141);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 142);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("queryParams", ctx_r2.quantity(product_r6) > 1 ? \u0275\u0275pureFunction1(2, _c0, ctx_r2.quantity(product_r6)) : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 143);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 144);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 145);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 146);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 147);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 148);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 149);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 150);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("queryParams", ctx_r2.quantity(product_r6) > 1 ? \u0275\u0275pureFunction1(2, _c0, ctx_r2.quantity(product_r6)) : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.name);
  }
}
function GeoTrustSslCertificatesPage_For_157_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const product_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", product_r6.name, " ");
  }
}
function GeoTrustSslCertificatesPage_For_157_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 14);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r7);
  }
}
function GeoTrustSslCertificatesPage_For_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 37)(1, "div", 137)(2, "span", 138);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, GeoTrustSslCertificatesPage_For_157_For_5_Template, 2, 1, "span", 139, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275element(6, "img", 140);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275conditionalCreate(8, GeoTrustSslCertificatesPage_For_157_Conditional_8_Template, 2, 1, "a", 141)(9, GeoTrustSslCertificatesPage_For_157_Conditional_9_Template, 2, 4, "a", 142)(10, GeoTrustSslCertificatesPage_For_157_Conditional_10_Template, 2, 1, "a", 143)(11, GeoTrustSslCertificatesPage_For_157_Conditional_11_Template, 2, 1, "a", 144)(12, GeoTrustSslCertificatesPage_For_157_Conditional_12_Template, 2, 1, "a", 145)(13, GeoTrustSslCertificatesPage_For_157_Conditional_13_Template, 2, 1, "a", 146)(14, GeoTrustSslCertificatesPage_For_157_Conditional_14_Template, 2, 1, "a", 147)(15, GeoTrustSslCertificatesPage_For_157_Conditional_15_Template, 2, 1, "a", 148)(16, GeoTrustSslCertificatesPage_For_157_Conditional_16_Template, 2, 1, "a", 149)(17, GeoTrustSslCertificatesPage_For_157_Conditional_17_Template, 2, 4, "a", 150)(18, GeoTrustSslCertificatesPage_For_157_Conditional_18_Template, 2, 1, "a", 151)(19, GeoTrustSslCertificatesPage_For_157_Conditional_19_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 152);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 153)(23, "div")(24, "span");
    \u0275\u0275text(25, "Warranty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "b");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "span");
    \u0275\u0275text(30, "Issued");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "b");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "ul", 154);
    \u0275\u0275repeaterCreate(34, GeoTrustSslCertificatesPage_For_157_For_35_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 155)(37, "div")(38, "span", 156);
    \u0275\u0275text(39, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 157);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 158);
    \u0275\u0275text(43, "/year");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "span", 159);
    \u0275\u0275text(45, "Save up to 84%");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 160)(47, "button", 161);
    \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_For_157_Template_button_click_47_listener() {
      const product_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adjustQuantity(product_r6, -1));
    });
    \u0275\u0275text(48, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 162);
    \u0275\u0275listener("quantityChange", function GeoTrustSslCertificatesPage_For_157_Template_input_quantityChange_49_listener($event) {
      const product_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adjustQuantity(product_r6, $event - ctx_r2.quantity(product_r6)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 161);
    \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_For_157_Template_button_click_50_listener() {
      const product_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.adjustQuantity(product_r6, 1));
    });
    \u0275\u0275text(51, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "button", 163);
    \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_For_157_Template_button_click_52_listener() {
      const product_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.configure(product_r6));
    });
    \u0275\u0275text(53, "Buy Now ");
    \u0275\u0275elementStart(54, "span", 164);
    \u0275\u0275text(55, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("dv", product_r6.tier === "DV")("ov", product_r6.tier === "OV")("ev", product_r6.tier === "EV");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r6.tier);
    \u0275\u0275advance();
    \u0275\u0275repeater(product_r6.tags);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(product_r6.id === "tb-ev-flex" ? 8 : product_r6.id === "tb-ov-flex" ? 9 : product_r6.id === "dv-flex" ? 10 : product_r6.id === "quick-san" ? 11 : product_r6.id === "quick-premium" ? 12 : product_r6.id === "quick-wild" ? 13 : product_r6.id === "tb-id" ? 14 : product_r6.id === "tb-md" ? 15 : product_r6.id === "tb-ev-md" ? 16 : product_r6.id === "tb-ev" ? 17 : product_r6.id === "tb-wild" ? 18 : 19);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(product_r6.desc);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(product_r6.warranty);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(product_r6.issue);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(product_r6.features);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.inr(product_r6.prices[2]));
    \u0275\u0275advance(5);
    \u0275\u0275attribute("aria-label", product_r6.name + " quantity");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.quantity(product_r6) === 1);
    \u0275\u0275attribute("aria-label", "Decrease " + product_r6.name + " quantity");
    \u0275\u0275advance(2);
    \u0275\u0275property("quantityValue", ctx_r2.quantity(product_r6))("quantityMax", ctx_r2.quantityMax(product_r6));
    \u0275\u0275attribute("aria-label", "Quantity for " + product_r6.name + " quantity");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.quantity(product_r6) === ctx_r2.quantityMax(product_r6));
    \u0275\u0275attribute("aria-label", "Increase " + product_r6.name + " quantity");
  }
}
function GeoTrustSslCertificatesPage_Conditional_247_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 43)(1, "div", 165);
    \u0275\u0275text(2, "See GeoTrust SSL in action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 166)(4, "article", 167)(5, "h3")(6, "span");
    \u0275\u0275text(7, "How SSL works");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 168);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 169);
    \u0275\u0275element(10, "path", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Video coming soon");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "article", 167)(14, "h3")(15, "span");
    \u0275\u0275text(16, "Installing a certificate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 168);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 169);
    \u0275\u0275element(19, "path", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "Video coming soon");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "article", 167)(23, "h3")(24, "span");
    \u0275\u0275text(25, "DV vs OV vs EV");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 168);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 169);
    \u0275\u0275element(28, "path", 170);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Video coming soon");
    \u0275\u0275elementEnd()()()()();
  }
}
var GeoTrustSslCertificatesPage = class _GeoTrustSslCertificatesPage {
  seo = inject(SeoService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  router = inject(Router);
  filter = signal("all", ...ngDevMode ? [{ debugName: "filter" }] : []);
  quantities = signal({}, ...ngDevMode ? [{ debugName: "quantities" }] : []);
  quantity(product) {
    return this.quantities()[product.id] ?? 1;
  }
  quantityMax(product) {
    return product.id === "tb-ov-flex" ? 99 : 9999;
  }
  adjustQuantity(product, change) {
    this.quantities.update((values) => __spreadProps(__spreadValues({}, values), {
      [product.id]: Math.max(1, Math.min(this.quantityMax(product), (values[product.id] ?? 1) + change))
    }));
  }
  filters = [
    { value: "all", label: "All" },
    { value: "DV", label: "DV" },
    { value: "OV", label: "OV" },
    { value: "EV", label: "EV" },
    { value: "Wildcard", label: "Wildcard" },
    { value: "Multi", label: "Multi-Domain" }
  ];
  products = [
    { id: "tb-ev-flex", name: "GeoTrust TrueBusiness ID EV (FLEX)", tier: "EV", tags: ["Multi"], warranty: "$1.75M", issue: "1\u20135 days", prices: [18999, 17999, 16999], desc: "Green-bar Extended Validation with flexible SAN support.", features: ["Highest assurance EV", "Up to 250 SAN domains", "Free reissues for life"] },
    { id: "tb-ov-flex", name: "GeoTrust TrueBusiness ID OV (FLEX)", tier: "OV", tags: ["Multi"], warranty: "$1.75M", issue: "1\u20133 days", prices: [12999, 12299, 11999], desc: "Business-validated OV certificate with SAN flexibility.", features: ["Organization validated", "Add SAN domains anytime", "256-bit encryption"] },
    { id: "dv-flex", name: "GeoTrust DV SSL (FLEX)", tier: "DV", tags: ["Multi"], warranty: "$500K", issue: "Minutes", prices: [6999, 6499, 5999], desc: "Fast domain-validated SSL, issued in minutes.", features: ["Issued within minutes", "Add SAN domains", "Auto browser padlock"] },
    { id: "quick-san", name: "GeoTrust QuickSSL Premium SAN", tier: "DV", tags: ["Multi"], warranty: "$500K", issue: "Minutes", prices: [12999, 11999, 10999], desc: "Quick multi-domain DV coverage for several sites.", features: ["Secure multiple domains", "Rapid issuance", "256-bit encryption"] },
    { id: "quick-premium", name: "GeoTrust QuickSSL Premium", tier: "DV", tags: [], warranty: "$500K", issue: "Minutes", prices: [6999, 6499, 5999], desc: "The classic fast, single-domain DV certificate.", features: ["Single domain", "Issued in minutes", "Trusted padlock"] },
    { id: "quick-wild", name: "GeoTrust QuickSSL Premium Wildcard", tier: "DV", tags: ["Wildcard"], warranty: "$500K", issue: "Minutes", prices: [28999, 27499, 25999], desc: "Secure unlimited subdomains under one DV wildcard.", features: ["Unlimited subdomains", "One cert, many hosts", "Fast issuance"] },
    { id: "tb-id", name: "GeoTrust True BusinessID", tier: "OV", tags: [], warranty: "$1.25M", issue: "1\u20133 days", prices: [16999, 15999, 14999], desc: "Established OV certificate for business websites.", features: ["Organization validated", "Business shown in cert", "$1.25M warranty"] },
    { id: "tb-md", name: "GeoTrust True BusinessID Multi-Domain", tier: "OV", tags: ["Multi"], warranty: "$1.25M", issue: "1\u20133 days", prices: [19999, 18999, 17999], desc: "OV assurance across multiple domains in one cert.", features: ["Secure many domains", "Business validated", "Central management"] },
    { id: "tb-ev", name: "GeoTrust True BusinessID with EV", tier: "EV", tags: [], warranty: "$1.5M", issue: "1\u20135 days", prices: [22999, 21999, 20999], desc: "Extended Validation for maximum single-site trust.", features: ["Highest buyer trust", "Rigorous EV vetting", "$1.5M warranty"] },
    { id: "tb-ev-md", name: "GeoTrust TrueBusiness ID w/ EV Multi-Domain", tier: "EV", tags: ["Multi"], warranty: "$1.5M", issue: "1\u20135 days", prices: [27999, 26999, 25999], desc: "EV trust across several domains at once.", features: ["EV across domains", "Maximum assurance", "Ideal for e-commerce"] },
    { id: "tb-wild", name: "GeoTrust True BusinessID Wildcard", tier: "OV", tags: ["Wildcard"], warranty: "$1.25M", issue: "1\u20133 days", prices: [49999, 47999, 45999], desc: "OV wildcard securing unlimited subdomains.", features: ["Unlimited subdomains", "Organization validated", "$1.25M warranty"] }
  ];
  visibleProducts = computed(() => {
    const selected = this.filter();
    if (selected === "all")
      return this.products;
    return this.products.filter((product) => product.tier === selected || product.tags.includes(selected));
  }, ...ngDevMode ? [{ debugName: "visibleProducts" }] : []);
  constructor() {
    this.seo.set("GeoTrust SSL Certificates in India \u2014 DV, OV & EV | XcellHost", "Buy GeoTrust DV, OV and EV SSL/TLS certificates in India with free installation, SSL automation and GST invoice by XcellHost.", "/geotrust-ssl-certificates/");
  }
  inr(value) {
    return "\u20B9" + value.toLocaleString("en-IN");
  }
  configure(product) {
    if (product.id === "tb-ev" || product.id === "tb-ov-flex") {
      const quantity = this.quantity(product);
      const slug = product.id === "tb-ov-flex" ? "geotrust-true-businessid-ov" : "geotrust-true-businessid-ev";
      void this.router.navigate(["/" + slug], {
        queryParams: quantity > 1 ? { quantity } : void 0
      });
      return;
    }
    this.topics.ask(`${product.name} - ${this.quantity(product)} certificate(s)`);
    this.overlay.open("callback");
  }
  toggleFaq(event) {
    const button = event.currentTarget;
    const item = button.closest(".faq2");
    if (!item)
      return;
    const answer = item.querySelector(".faq2-a");
    const isOpen = item.classList.toggle("open");
    if (answer)
      answer.style.maxHeight = isOpen ? answer.scrollHeight + "px" : "0";
  }
  static \u0275fac = function GeoTrustSslCertificatesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeoTrustSslCertificatesPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeoTrustSslCertificatesPage, selectors: [["xh-geotrust-ssl-certificates-page"]], hostAttrs: [1, "geotrust-page"], decls: 716, vars: 1, consts: [[1, "geotrust-original-hero"], [1, "pp-body"], [1, "wrap"], ["aria-labelledby", "geotrust-overview-title", 1, "pp-overview"], ["id", "geotrust-overview-title", 1, "pp-sec"], [1, "pp-overview-copy"], [1, "pp-ov"], [1, "pp-sec"], [1, "pp-vgrid"], ["data-d", "1", 1, "vcard", "dv", "rv"], [1, "vb"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "4", "y", "10", "width", "16", "height", "10", "rx", "2"], ["d", "M8 10V7a4 4 0 018 0v3", "stroke-linecap", "round"], [1, "ck"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["d", "M5 12l5 5L20 6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["data-d", "2", 1, "vcard", "ov", "rv"], ["x", "4", "y", "3", "width", "16", "height", "18", "rx", "2"], ["d", "M9 8h6M9 12h6M9 16h4"], ["data-d", "3", 1, "vcard", "ev", "rv"], ["d", "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"], ["d", "M9 12l2 2 4-4", "stroke-linecap", "round"], ["data-d", "1", 1, "vcard", "wildcard", "rv"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["d", "M12 3v18M4 7l16 10M4 17L20 7"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3", "aria-hidden", "true"], ["data-d", "1", 1, "vcard", "multi", "rv"], ["x", "3", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "3", "width", "7", "height", "7", "rx", "1"], ["x", "8", "y", "14", "width", "8", "height", "7", "rx", "1"], ["d", "M6 10v2h12v-2M12 12v2"], ["id", "products", 1, "pp-sec"], [1, "pp-ov", 2, "margin-bottom", "18px"], ["id", "filter", 1, "filter"], ["type", "button", 1, "fchip", 3, "on"], ["id", "pgrid", 1, "pgrid"], [1, "pcard", "rv", "in"], [1, "pv-note"], [1, "pp-tablewrap"], [1, "pp-table"], [1, "yes"], [1, "no"], ["aria-labelledby", "geotrustVideosTitle", 1, "tally-videos", "geotrust-videos"], [1, "pp-addons"], ["data-d", "1", 1, "pp-addon", "rv"], [1, "aic"], ["x", "3", "y", "14", "width", "7", "height", "7", "rx", "1"], ["x", "14", "y", "14", "width", "7", "height", "7", "rx", "1"], ["data-d", "2", 1, "pp-addon", "rv"], ["data-d", "3", 1, "pp-addon", "rv"], ["cx", "11", "cy", "11", "r", "7"], ["d", "M21 21l-4-4", "stroke-linecap", "round"], ["data-d", "4", 1, "pp-addon", "rv"], ["d", "M4 12a8 8 0 018-8 8 8 0 017 4", "stroke-linecap", "round"], ["d", "M20 12a8 8 0 01-8 8 8 8 0 01-7-4", "stroke-linecap", "round"], ["d", "M19 4v4h-4M5 20v-4h4"], [1, "pp-feats"], ["data-d", "1", 1, "pp-feat", "rv"], [1, "fic", 2, "background", "linear-gradient(135deg,#1565D8,#0C3E8F)"], ["data-d", "2", 1, "pp-feat", "rv"], [1, "fic", 2, "background", "linear-gradient(135deg,#FF8C1A,#F57C00)"], ["data-d", "3", 1, "pp-feat", "rv"], [1, "fic", 2, "background", "linear-gradient(135deg,#16a34a,#2ECC71)"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M2 12h20M12 3a15 15 0 010 18 15 15 0 010-18"], ["d", "M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2z"], ["d", "M12 7v5l3 2", "stroke-linecap", "round"], [1, "pp-bens"], ["data-d", "1", 1, "pb", "rv"], [1, "ic"], ["data-d", "2", 1, "pb", "rv"], ["d", "M3 17l6-6 4 4 7-8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M21 7v5h-5"], ["data-d", "3", 1, "pb", "rv"], ["data-d", "4", 1, "pb", "rv"], ["d", "M9 12l2 2 4-4"], ["d", "M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"], [1, "pp-auto", "rv"], [1, "glow"], [1, "al"], [1, "tag"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M19 4v4h-4"], [1, "k"], [1, "ar-visual"], [1, "ar-step", "done"], [1, "n"], [1, "ar-step"], ["href", "#", 1, "btn", "btn-primary", "ar-explore", 3, "click"], [1, "pp-uses"], ["data-d", "1", 1, "pu", "rv"], [1, "pu-ic"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M3 5h18v14H3zM3 8h18M7 15h3"], ["data-d", "2", 1, "pu", "rv"], ["d", "M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M8 11h.01M16 11h.01"], ["data-d", "3", 1, "pu", "rv"], ["d", "M4 21V5h16v16M8 2v6M16 2v6M4 10h16M12 13v5M9.5 15.5h5"], ["data-d", "4", 1, "pu", "rv"], ["d", "M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 8.5 4.75 4.75 0 0 0 7 18z"], ["d", "M3 21h18M5 21V9l7-5 7 5v12M9 13h6M12 10v6"], ["d", "M4 21V5h16v16M8 9h2M14 9h2M8 13h2M14 13h2M9 21v-4h6v4"], ["x", "6", "y", "2", "width", "12", "height", "20", "rx", "2"], ["d", "M10 5h4M11 19h2"], ["d", "M3 8h18v12H3zM3 8l3-4h12l3 4M8 12h8"], [1, "pp-secrows"], [1, "psr"], [1, "si"], [1, "pp-ov", 2, "margin-bottom", "20px"], [1, "pp-why"], ["data-d", "1", 1, "pw", "rv"], [1, "pw-ic"], ["data-d", "2", 1, "pw", "rv"], ["d", "M12 20v-6M6 20v-4M18 20V8", "stroke-linecap", "round"], ["d", "M3 20h18"], ["data-d", "3", 1, "pw", "rv"], ["x", "4", "y", "4", "width", "16", "height", "16", "rx", "2"], ["d", "M8 4v16M4 9h4M4 15h4"], [1, "pp-tcards"], ["data-d", "1", 1, "tcard", "rv", "tilt"], [1, "quote-badge"], [1, "tav"], [1, "tname"], [1, "trole"], [1, "tstars"], ["data-d", "2", 1, "tcard", "rv", "tilt"], ["data-d", "3", 1, "tcard", "rv", "tilt"], ["id", "faq", 1, "pp-faq"], ["data-d", "1", 1, "faq2", "open", "rv"], ["type", "button", 1, "faq2-q", 3, "click"], [1, "faq2-ic"], [1, "faq2-a"], ["data-d", "2", 1, "faq2", "rv"], ["data-d", "1", 1, "faq2", "rv"], ["pageSlug", "geotrust-ssl-certificates"], ["type", "button", 1, "fchip", 3, "click"], [1, "ptop"], [1, "tierbadge"], [1, "tagchip"], ["src", "/assets/images/geotrust.svg", "alt", "GeoTrust", "width", "90", "height", "26", 1, "geotrust-card-logo"], ["routerLink", "/geotrust-true-businessid-ev-flex", 1, "product-detail-link"], ["routerLink", "/geotrust-true-businessid-ov", 1, "product-detail-link", 3, "queryParams"], ["routerLink", "/geotrust-dv-ssl-flex", 1, "product-detail-link"], ["routerLink", "/geotrust-quickssl-premium-san", 1, "product-detail-link"], ["routerLink", "/geotrust-quickssl-premium", 1, "product-detail-link"], ["routerLink", "/geotrust-quickssl-premium-wildcard", 1, "product-detail-link"], ["routerLink", "/geotrust-true-businessid", 1, "product-detail-link"], ["routerLink", "/geotrust-true-businessid-multi-domain", 1, "product-detail-link"], ["routerLink", "/geotrust-true-businessid-ev-multi-domain", 1, "product-detail-link"], ["routerLink", "/geotrust-true-businessid-ev", 1, "product-detail-link", 3, "queryParams"], ["routerLink", "/geotrust-true-businessid-wildcard", 1, "product-detail-link"], [1, "pdesc"], [1, "pmeta"], [1, "pfeat"], [1, "pprice"], [1, "from"], [1, "amt"], [1, "yr"], [1, "save"], ["role", "group", 1, "certificate-quantity"], ["type", "button", 3, "click", "disabled"], ["xhQuantityInput", "", 3, "quantityChange", "quantityValue", "quantityMax"], ["type", "button", 1, "btn", "btn-orange", 3, "click"], [1, "ar"], ["id", "geotrustVideosTitle", 1, "pp-sec"], [1, "tally-video-grid"], [1, "tally-video-card"], [1, "tally-video-frame", "geotrust-video-placeholder"], ["viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true"], ["d", "M6 4l14 8-14 8z"]], template: function GeoTrustSslCertificatesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-product-page", 0);
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "section", 3)(4, "div", 4);
      \u0275\u0275text(5, "Overview \u2014 What is a GeoTrust SSL certificate?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
      \u0275\u0275text(8, "A ");
      \u0275\u0275elementStart(9, "b");
      \u0275\u0275text(10, "GeoTrust SSL/TLS certificate");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " encrypts the connection between your website and your visitors, so passwords, payments and personal data can't be intercepted. GeoTrust \u2014 part of the DigiCert family of certificate authorities \u2014 is trusted by 99.9% of browsers and mobile devices, and shows the padlock (and, for EV, your verified business name) that customers look for before they buy.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 6);
      \u0275\u0275text(13, "XcellHost is an authorised GeoTrust partner in India. We handle CSR generation, validation, issuance, installation and lifecycle renewal for you \u2014 with a GST invoice on every order and 24\xD77 support from our Mumbai NOC.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275text(15, "Choose your SSL validation and coverage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 11);
      \u0275\u0275element(20, "rect", 12)(21, "path", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, "Domain Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(23, "h3");
      \u0275\u0275text(24, "DV SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "Fastest way to encrypt \u2014 validated against domain ownership only, issued in minutes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "ul")(28, "li")(29, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 15);
      \u0275\u0275element(31, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(32, "Ideal for blogs & small sites");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(33, "li")(34, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 15);
      \u0275\u0275element(36, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(37, "Padlock in the address bar");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "li")(39, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 15);
      \u0275\u0275element(41, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(42, "Issued within minutes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "div", 17)(44, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(45, "svg", 11);
      \u0275\u0275element(46, "rect", 18)(47, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, "Organization Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(49, "h3");
      \u0275\u0275text(50, "OV SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Business-verified trust \u2014 GeoTrust confirms your organization before issuing.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "ul")(54, "li")(55, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 15);
      \u0275\u0275element(57, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(58, "Company details in the cert");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(59, "li")(60, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 15);
      \u0275\u0275element(62, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(63, "Great for business sites");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "li")(65, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(66, "svg", 15);
      \u0275\u0275element(67, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(68, "Issued in 1\u20133 days");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "div", 20)(70, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(71, "svg", 11);
      \u0275\u0275element(72, "path", 21)(73, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(74, "Extended Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(75, "h3");
      \u0275\u0275text(76, "EV SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, "The highest assurance \u2014 rigorous vetting for maximum customer confidence at checkout.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "ul")(80, "li")(81, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(82, "svg", 15);
      \u0275\u0275element(83, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(84, "Maximum buyer trust");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(85, "li")(86, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(87, "svg", 15);
      \u0275\u0275element(88, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(89, "Best for e-commerce & banking");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(90, "li")(91, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(92, "svg", 15);
      \u0275\u0275element(93, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(94, "Highest warranty coverage");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(95, "div", 23)(96, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(97, "svg", 24);
      \u0275\u0275element(98, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(99, "Subdomain Coverage");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(100, "h3");
      \u0275\u0275text(101, "Wildcard SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p");
      \u0275\u0275text(103, "Secure subdomains at the same level under one domain with a single certificate.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "ul")(105, "li")(106, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(107, "svg", 26);
      \u0275\u0275element(108, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(109, "Cover *.example.com");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(110, "li")(111, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(112, "svg", 26);
      \u0275\u0275element(113, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(114, "Ideal for growing subdomain setups");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(115, "li")(116, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(117, "svg", 26);
      \u0275\u0275element(118, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(119, "Manage one certificate for your subdomains");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(120, "div", 27)(121, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(122, "svg", 24);
      \u0275\u0275element(123, "rect", 28)(124, "rect", 29)(125, "rect", 30)(126, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, "Multi-Domain Coverage");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(128, "h3");
      \u0275\u0275text(129, "Multi-Domain SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p");
      \u0275\u0275text(131, "Protect multiple domain names with one SAN certificate for simpler certificate management.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "ul")(133, "li")(134, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(135, "svg", 26);
      \u0275\u0275element(136, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(137, "Cover multiple domain names");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(138, "li")(139, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(140, "svg", 26);
      \u0275\u0275element(141, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(142, "Include the SAN names you need");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(143, "li")(144, "span", 14);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(145, "svg", 26);
      \u0275\u0275element(146, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(147, "Manage renewals in one place");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(148, "div", 32);
      \u0275\u0275text(149, "GeoTrust certificate pricing (INR)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 33);
      \u0275\u0275text(151, "Configure a term, add SAN domains and buy in a few clicks. All prices per certificate, excluding GST \u2014 GST invoice included on every order.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 34);
      \u0275\u0275repeaterCreate(153, GeoTrustSslCertificatesPage_For_154_Template, 2, 3, "button", 35, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 36);
      \u0275\u0275repeaterCreate(156, GeoTrustSslCertificatesPage_For_157_Template, 56, 20, "article", 37, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "p", 38);
      \u0275\u0275text(159, "\u{1F4B3} Approximate INR pricing excluding GST. Pay online via UPI \xB7 Cards \xB7 NetBanking. Contact XcellHost for exact pricing, volume discounts and multi-year deals.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 7);
      \u0275\u0275text(161, "Compare DV, OV & EV certificates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 39)(163, "table", 40)(164, "thead")(165, "tr")(166, "th");
      \u0275\u0275text(167, "Feature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "th");
      \u0275\u0275text(169, "DV SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "th");
      \u0275\u0275text(171, "OV SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "th");
      \u0275\u0275text(173, "EV SSL");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(174, "tbody")(175, "tr")(176, "td");
      \u0275\u0275text(177, "Validation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "td");
      \u0275\u0275text(179, "Domain only");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "td");
      \u0275\u0275text(181, "Domain + Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "td");
      \u0275\u0275text(183, "Extended (full vetting)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "tr")(185, "td");
      \u0275\u0275text(186, "Issuance time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "td");
      \u0275\u0275text(188, "Minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "td");
      \u0275\u0275text(190, "1\u20133 days");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "td");
      \u0275\u0275text(192, "1\u20135 days");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "tr")(194, "td");
      \u0275\u0275text(195, "256-bit encryption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "td", 41);
      \u0275\u0275text(197, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "td", 41);
      \u0275\u0275text(199, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "td", 41);
      \u0275\u0275text(201, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "tr")(203, "td");
      \u0275\u0275text(204, "Address-bar padlock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "td", 41);
      \u0275\u0275text(206, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "td", 41);
      \u0275\u0275text(208, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "td", 41);
      \u0275\u0275text(210, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(211, "tr")(212, "td");
      \u0275\u0275text(213, "Business name in certificate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "td", 42);
      \u0275\u0275text(215, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "td", 41);
      \u0275\u0275text(217, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "td", 41);
      \u0275\u0275text(219, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "tr")(221, "td");
      \u0275\u0275text(222, "Highest buyer trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "td", 42);
      \u0275\u0275text(224, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "td", 42);
      \u0275\u0275text(226, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "td", 41);
      \u0275\u0275text(228, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(229, "tr")(230, "td");
      \u0275\u0275text(231, "Warranty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "td");
      \u0275\u0275text(233, "$500K");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "td");
      \u0275\u0275text(235, "up to $1.25M");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "td");
      \u0275\u0275text(237, "up to $1.75M");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(238, "tr")(239, "td");
      \u0275\u0275text(240, "Best for");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "td");
      \u0275\u0275text(242, "Blogs, dev sites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(243, "td");
      \u0275\u0275text(244, "Business sites");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "td");
      \u0275\u0275text(246, "E-commerce, banking");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(247, GeoTrustSslCertificatesPage_Conditional_247_Template, 31, 0, "section", 43);
      \u0275\u0275elementStart(248, "div", 7);
      \u0275\u0275text(249, "Add-ons & managed services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "div", 44)(251, "div", 45)(252, "span", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(253, "svg", 11);
      \u0275\u0275element(254, "rect", 28)(255, "rect", 29)(256, "rect", 47)(257, "rect", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(258, "b");
      \u0275\u0275text(259, "Additional SAN domains");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "p");
      \u0275\u0275text(261, "Secure multiple domains under one certificate \u2014 added right in the configurator.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "div", 49)(263, "span", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(264, "svg", 11);
      \u0275\u0275element(265, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(266, "b");
      \u0275\u0275text(267, "Trust site seal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "p");
      \u0275\u0275text(269, "Display the GeoTrust dynamic seal to boost visitor confidence and conversions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 50)(271, "span", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(272, "svg", 11);
      \u0275\u0275element(273, "circle", 51)(274, "path", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(275, "b");
      \u0275\u0275text(276, "Malware & vuln scan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "p");
      \u0275\u0275text(278, "Daily website scanning to catch malware and vulnerabilities before attackers do.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(279, "div", 53)(280, "span", 46);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(281, "svg", 11);
      \u0275\u0275element(282, "path", 54)(283, "path", 55)(284, "path", 56);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(285, "b");
      \u0275\u0275text(286, "SSL automation (ACME)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "p");
      \u0275\u0275text(288, "Automatic renewal and re-issuance so a certificate never silently expires.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(289, "div", 7);
      \u0275\u0275text(290, "Everything in a GeoTrust certificate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "div", 57)(292, "div", 58)(293, "span", 59);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(294, "svg", 11);
      \u0275\u0275element(295, "rect", 12)(296, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(297, "div")(298, "b");
      \u0275\u0275text(299, "256-bit encryption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "p");
      \u0275\u0275text(301, "Strong SHA-2, up to 256-bit session encryption on RSA 2048-bit and ECC keys.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(302, "div", 60)(303, "span", 61);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(304, "svg", 11);
      \u0275\u0275element(305, "path", 21)(306, "path", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(307, "div")(308, "b");
      \u0275\u0275text(309, "Million-dollar warranty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "p");
      \u0275\u0275text(311, "Up to $1.75M relying-party warranty backs every EV certificate you buy.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(312, "div", 62)(313, "span", 63);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(314, "svg", 11);
      \u0275\u0275element(315, "circle", 64)(316, "path", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(317, "div")(318, "b");
      \u0275\u0275text(319, "99.9% browser trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "p");
      \u0275\u0275text(321, "Ubiquitous root recognised by all major browsers, servers and mobile devices.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(322, "div", 58)(323, "span", 59);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(324, "svg", 11);
      \u0275\u0275element(325, "path", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(326, "div")(327, "b");
      \u0275\u0275text(328, "Unlimited reissues");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "p");
      \u0275\u0275text(330, "Reissue as many times as you need during the term, at no extra cost.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(331, "div", 60)(332, "span", 61);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(333, "svg", 11);
      \u0275\u0275element(334, "rect", 28)(335, "rect", 29)(336, "rect", 47)(337, "rect", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(338, "div")(339, "b");
      \u0275\u0275text(340, "SAN & wildcard options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "p");
      \u0275\u0275text(342, "Cover multiple domains or unlimited subdomains from a single certificate.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(343, "div", 62)(344, "span", 63);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(345, "svg", 11);
      \u0275\u0275element(346, "circle", 64)(347, "path", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(348, "div")(349, "b");
      \u0275\u0275text(350, "Free managed install");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "p");
      \u0275\u0275text(352, "Our engineers generate the CSR and install on your server \u2014 24\xD77.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(353, "div", 7);
      \u0275\u0275text(354, "Benefits for your business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "div", 68)(356, "div", 69)(357, "span", 70);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(358, "svg", 11);
      \u0275\u0275element(359, "path", 21)(360, "path", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(361, "b");
      \u0275\u0275text(362, "Win customer trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "p");
      \u0275\u0275text(364, "The padlock and verified name reassure visitors and lift conversions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "div", 71)(366, "span", 70);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(367, "svg", 11);
      \u0275\u0275element(368, "path", 72)(369, "path", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(370, "b");
      \u0275\u0275text(371, "Better SEO ranking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "p");
      \u0275\u0275text(373, "Google favours HTTPS \u2014 encrypted sites get a search-ranking edge.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(374, "div", 74)(375, "span", 70);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(376, "svg", 11);
      \u0275\u0275element(377, "rect", 12)(378, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(379, "b");
      \u0275\u0275text(380, "Protect user data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "p");
      \u0275\u0275text(382, "Encrypt logins, forms and payments so data can't be intercepted.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(383, "div", 75)(384, "span", 70);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(385, "svg", 11);
      \u0275\u0275element(386, "path", 76)(387, "path", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(388, "b");
      \u0275\u0275text(389, "Stay compliant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(390, "p");
      \u0275\u0275text(391, "Meet PCI-DSS and data-protection requirements for handling sensitive data.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(392, "div", 7);
      \u0275\u0275text(393, "Never miss a renewal again");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "div", 78);
      \u0275\u0275element(395, "div", 79);
      \u0275\u0275elementStart(396, "div", 80)(397, "span", 81);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(398, "svg", 82);
      \u0275\u0275element(399, "path", 54)(400, "path", 83);
      \u0275\u0275elementEnd();
      \u0275\u0275text(401, "SSL Automation");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(402, "h3");
      \u0275\u0275text(403, "Automated Certificate Lifecycle Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "p");
      \u0275\u0275text(405, "As certificate lifetimes shrink, manual renewals become a liability. XcellHost's ACME-based automation issues, installs and renews your GeoTrust certificates \u2014 before they ever expire.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "ul")(407, "li")(408, "span", 84);
      \u0275\u0275text(409, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(410, "Auto-renewal & re-issue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "li")(412, "span", 84);
      \u0275\u0275text(413, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(414, "Expiry monitoring & alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "li")(416, "span", 84);
      \u0275\u0275text(417, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(418, "Multi-server deployment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "li")(420, "span", 84);
      \u0275\u0275text(421, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(422, "Central dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(423, "div", 85)(424, "div", 86)(425, "span", 87);
      \u0275\u0275text(426, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(427, "Certificate issued & installed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "div", 86)(429, "span", 87);
      \u0275\u0275text(430, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(431, "Expiry detected \u2014 30 days out");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(432, "div", 88)(433, "span", 87);
      \u0275\u0275text(434, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(435, "Auto-renewed & redeployed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(436, "a", 89);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_a_click_436_listener($event) {
        return $event.preventDefault();
      });
      \u0275\u0275text(437, "Explore");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(438, "div", 7);
      \u0275\u0275text(439, "Who needs a GeoTrust SSL certificate?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "div", 90)(441, "div", 91)(442, "span", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(443, "svg", 93);
      \u0275\u0275element(444, "path", 94);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(445, "b");
      \u0275\u0275text(446, "E-commerce");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(447, "span");
      \u0275\u0275text(448, "Secure checkout & payment pages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(449, "div", 95)(450, "span", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(451, "svg", 93);
      \u0275\u0275element(452, "path", 96);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(453, "b");
      \u0275\u0275text(454, "Banking & Fintech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "span");
      \u0275\u0275text(456, "EV trust for high-value transactions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(457, "div", 97)(458, "span", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(459, "svg", 93);
      \u0275\u0275element(460, "path", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(461, "b");
      \u0275\u0275text(462, "Healthcare");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "span");
      \u0275\u0275text(464, "Protect patient data & portals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(465, "div", 99)(466, "span", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(467, "svg", 93);
      \u0275\u0275element(468, "path", 100);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(469, "b");
      \u0275\u0275text(470, "SaaS & Web Apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "span");
      \u0275\u0275text(472, "Wildcard cover for every subdomain");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(473, "div", 91)(474, "span", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(475, "svg", 93);
      \u0275\u0275element(476, "path", 101);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(477, "b");
      \u0275\u0275text(478, "Government & Edu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "span");
      \u0275\u0275text(480, "Verified identity for public sites");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(481, "div", 95)(482, "span", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(483, "svg", 93);
      \u0275\u0275element(484, "path", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(485, "b");
      \u0275\u0275text(486, "Corporate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(487, "span");
      \u0275\u0275text(488, "Secure intranets & mail servers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(489, "div", 97)(490, "span", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(491, "svg", 93);
      \u0275\u0275element(492, "rect", 103)(493, "path", 104);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(494, "b");
      \u0275\u0275text(495, "Startups & SMBs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "span");
      \u0275\u0275text(497, "Affordable DV to launch fast");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(498, "div", 99)(499, "span", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(500, "svg", 93);
      \u0275\u0275element(501, "path", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(502, "b");
      \u0275\u0275text(503, "Marketplaces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(504, "span");
      \u0275\u0275text(505, "Multi-domain SAN coverage");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(506, "div", 7);
      \u0275\u0275text(507, "Security & compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "div", 106)(509, "div", 107)(510, "span", 108);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(511, "svg", 11);
      \u0275\u0275element(512, "rect", 12)(513, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(514, "div")(515, "b");
      \u0275\u0275text(516, "256-bit / SHA-2 encryption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "p");
      \u0275\u0275text(518, "Modern SHA-256 signatures with up to 256-bit session keys on RSA 2048+ and ECC.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(519, "div", 107)(520, "span", 108);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(521, "svg", 11);
      \u0275\u0275element(522, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(523, "div")(524, "b");
      \u0275\u0275text(525, "CA/Browser Forum compliant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "p");
      \u0275\u0275text(527, "Issued to the latest CA/B Forum baseline requirements and industry standards.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(528, "div", 107)(529, "span", 108);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(530, "svg", 11);
      \u0275\u0275element(531, "circle", 64)(532, "path", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(533, "div")(534, "b");
      \u0275\u0275text(535, "Ubiquitous root trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(536, "p");
      \u0275\u0275text(537, "Recognised by 99.9% of desktop & mobile browsers, servers and applications.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(538, "div", 107)(539, "span", 108);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(540, "svg", 11);
      \u0275\u0275element(541, "path", 76)(542, "path", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(543, "div")(544, "b");
      \u0275\u0275text(545, "PCI-DSS ready");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "p");
      \u0275\u0275text(547, "Helps meet PCI-DSS and data-protection obligations for handling cardholder data.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(548, "div", 7);
      \u0275\u0275text(549, "Why buy GeoTrust from XcellHost?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "p", 109);
      \u0275\u0275text(551, "Any reseller can sell you a certificate. XcellHost issues it, installs it, and keeps it renewed \u2014 with local support and a GST invoice.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "div", 110)(553, "div", 111)(554, "span", 112);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(555, "svg", 11);
      \u0275\u0275element(556, "path", 76)(557, "path", 77);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(558, "b");
      \u0275\u0275text(559, "Authorised partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(560, "p");
      \u0275\u0275text(561, "Direct GeoTrust / DigiCert partner pricing \u2014 up to 84% below vendor list.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(562, "div", 113)(563, "span", 112);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(564, "svg", 11);
      \u0275\u0275element(565, "path", 114)(566, "path", 115);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(567, "b");
      \u0275\u0275text(568, "Free managed install");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "p");
      \u0275\u0275text(570, "We generate the CSR, complete validation and install on your server for you.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(571, "div", 116)(572, "span", 112);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(573, "svg", 11);
      \u0275\u0275element(574, "path", 54)(575, "path", 83);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(576, "b");
      \u0275\u0275text(577, "SSL automation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(578, "p");
      \u0275\u0275text(579, "ACME-based auto-renewal so certificates never lapse or break your site.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(580, "div", 111)(581, "span", 112);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(582, "svg", 11);
      \u0275\u0275element(583, "circle", 64)(584, "path", 67);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(585, "b");
      \u0275\u0275text(586, "24\xD77 support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(587, "p");
      \u0275\u0275text(588, "Round-the-clock help from our Mumbai NOC + SOC, since 1999.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(589, "div", 113)(590, "span", 112);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(591, "svg", 11);
      \u0275\u0275element(592, "rect", 117)(593, "path", 118);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(594, "b");
      \u0275\u0275text(595, "GST invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "p");
      \u0275\u0275text(597, "Compliant GST invoice on every order \u2014 pay via UPI, cards or NetBanking.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(598, "div", 116)(599, "span", 112);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(600, "svg", 11);
      \u0275\u0275element(601, "path", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(602, "b");
      \u0275\u0275text(603, "Full lifecycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(604, "p");
      \u0275\u0275text(605, "Discovery, issuance, deployment and renewal managed end-to-end.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(606, "div", 7);
      \u0275\u0275text(607, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "div", 119)(609, "div", 120)(610, "div", 121);
      \u0275\u0275text(611, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(612, "div", 122);
      \u0275\u0275text(613, "RS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(614, "div", 123);
      \u0275\u0275text(615, "Retail & Payments Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "div", 124);
      \u0275\u0275text(617, "E-commerce \xB7 EV SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(618, "div", 125);
      \u0275\u0275text(619, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(620, "p");
      \u0275\u0275text(621, "The EV certificate lifted checkout trust noticeably. XcellHost handled the whole business validation and installed it on our load balancer the same week.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(622, "div", 126)(623, "div", 121);
      \u0275\u0275text(624, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "div", 122);
      \u0275\u0275text(626, "IT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "div", 123);
      \u0275\u0275text(628, "IT Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "div", 124);
      \u0275\u0275text(630, "SaaS \xB7 Wildcard SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "div", 125);
      \u0275\u0275text(632, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(633, "p");
      \u0275\u0275text(634, "One wildcard now covers all our subdomains and the automation renews it for us. We haven't had a single expiry incident since we moved to XcellHost.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(635, "div", 127)(636, "div", 121);
      \u0275\u0275text(637, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "div", 122);
      \u0275\u0275text(639, "FC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "div", 123);
      \u0275\u0275text(641, "Finance Controller");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(642, "div", 124);
      \u0275\u0275text(643, "NBFC \xB7 OV SSL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "div", 125);
      \u0275\u0275text(645, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(646, "p");
      \u0275\u0275text(647, "Transparent INR pricing, a proper GST invoice and quick support. Renewals are now completely hands-off for our team.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(648, "div", 7);
      \u0275\u0275text(649, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(650, "div", 128)(651, "div", 129)(652, "button", 130);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_button_click_652_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(653, "What is a GeoTrust SSL certificate?");
      \u0275\u0275elementStart(654, "span", 131);
      \u0275\u0275text(655, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(656, "div", 132)(657, "p");
      \u0275\u0275text(658, "It's a digital certificate from the GeoTrust certificate authority (part of DigiCert) that encrypts traffic between your website and its visitors and verifies your site's identity. It shows the padlock in browsers and \u2014 for EV \u2014 your verified business name.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(659, "div", 133)(660, "button", 130);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_button_click_660_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(661, "Is XcellHost an authorised GeoTrust partner in India?");
      \u0275\u0275elementStart(662, "span", 131);
      \u0275\u0275text(663, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(664, "div", 132)(665, "p");
      \u0275\u0275text(666, "Yes. XcellHost is an authorised GeoTrust / DigiCert partner and has delivered SSL and cloud security to Indian businesses since 1999. Every order includes a GST invoice and 24\xD77 support from our Mumbai NOC.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(667, "div", 134)(668, "button", 130);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_button_click_668_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(669, "What's the difference between DV, OV and EV?");
      \u0275\u0275elementStart(670, "span", 131);
      \u0275\u0275text(671, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(672, "div", 132)(673, "p");
      \u0275\u0275text(674, "DV validates domain ownership only and issues in minutes. OV also verifies your organization and shows business details in the certificate. EV is the highest assurance with rigorous vetting and the largest warranties \u2014 ideal for e-commerce and banking.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(675, "div", 133)(676, "button", 130);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_button_click_676_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(677, "How quickly is a certificate issued?");
      \u0275\u0275elementStart(678, "span", 131);
      \u0275\u0275text(679, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(680, "div", 132)(681, "p");
      \u0275\u0275text(682, "DV certificates are typically issued within minutes of validation. OV takes 1\u20133 business days and EV 1\u20135 business days, depending on how quickly business verification documents are provided.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(683, "div", 134)(684, "button", 130);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_button_click_684_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(685, "Do you install the certificate for me?");
      \u0275\u0275elementStart(686, "span", 131);
      \u0275\u0275text(687, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(688, "div", 132)(689, "p");
      \u0275\u0275text(690, "Yes \u2014 free managed installation is included. Our engineers generate the CSR, complete validation and install the certificate on your web server or load balancer, and can automate future renewals.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(691, "div", 133)(692, "button", 130);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_button_click_692_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(693, "What is a SAN or wildcard certificate?");
      \u0275\u0275elementStart(694, "span", 131);
      \u0275\u0275text(695, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(696, "div", 132)(697, "p");
      \u0275\u0275text(698, "A SAN (multi-domain) certificate secures several different domains under one certificate \u2014 add them in the configurator. A wildcard secures unlimited subdomains of a single domain (e.g. *.yourbusiness.com).");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(699, "div", 134)(700, "button", 130);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_button_click_700_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(701, "Do I get a GST invoice?");
      \u0275\u0275elementStart(702, "span", 131);
      \u0275\u0275text(703, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(704, "div", 132)(705, "p");
      \u0275\u0275text(706, "Yes. Every purchase includes a compliant GST invoice. You can pay online via UPI, credit/debit cards or NetBanking, and we're happy to share exact pricing and multi-year discounts.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(707, "div", 133)(708, "button", 130);
      \u0275\u0275listener("click", function GeoTrustSslCertificatesPage_Template_button_click_708_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(709, "What happens when my certificate expires?");
      \u0275\u0275elementStart(710, "span", 131);
      \u0275\u0275text(711, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(712, "div", 132)(713, "p");
      \u0275\u0275text(714, "With XcellHost SSL automation, we monitor expiry and auto-renew and redeploy before the certificate lapses. Without automation, we send renewal reminders and can handle the renewal and re-installation for you.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(715, "xh-insights-section", 135);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(153);
      \u0275\u0275repeater(ctx.filters);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.visibleProducts());
      \u0275\u0275advance(91);
      \u0275\u0275conditional(false ? 247 : -1);
    }
  }, dependencies: [QuantityInputDirective, InsightsSectionComponent, ProductPageComponent, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  --navy:#041E42;\n  --navy-2:#0A2A57;\n  --blue:#1565D8;\n  --blue-d:#0C3E8F;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --orange-d:#F57C00;\n  --ice:#F2F6FC;\n  --white:#fff;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --ok:#2ECC71;\n  --green:#16a34a;\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n  --shadow-s:0 6px 18px rgba(4,30,66,.06);\n  --shadow:0 18px 50px rgba(4,30,66,.10);\n  --shadow-lg:0 34px 80px -20px rgba(4,30,66,.34);\n  --maxw:1240px;\n  --ease:cubic-bezier(.22,.7,.2,1);\n  display: block;\n  overflow: hidden;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--body);\n  color: var(--ink);\n  background: var(--white);\n  line-height: 1.6;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n}\nbody.lock[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  color: var(--navy);\n  line-height: 1.12;\n  letter-spacing: -.02em;\n  font-weight: 700;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%], \nsvg[_ngcontent-%COMP%] {\n  display: block;\n}\nbutton[_ngcontent-%COMP%] {\n  font-family: inherit;\n}\n.serif[_ngcontent-%COMP%] {\n  font-family: "Instrument Serif", serif;\n  font-style: italic;\n  letter-spacing: 0;\n}\n.wrap[_ngcontent-%COMP%] {\n  max-width: var(--maxw);\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n}\n#spotlight[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity .4s;\n  background:\n    radial-gradient(\n      340px circle at var(--mx,-999px) var(--my,-999px),\n      rgba(21, 101, 216, .09),\n      transparent 65%);\n}\n#progress[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 3px;\n  width: 0;\n  z-index: 130;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  box-shadow: 0 0 12px rgba(21, 101, 216, .6);\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%, 100% {\n    box-shadow: 0 10px 26px -10px rgba(255, 140, 26, .7);\n  }\n  50% {\n    box-shadow: 0 14px 34px -8px rgba(255, 140, 26, .95);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  overflow: hidden;\n  font-weight: 600;\n  font-size: 14.5px;\n  padding: 12px 22px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  will-change: transform;\n  transition:\n    transform .18s var(--ease),\n    box-shadow .28s,\n    background .25s,\n    color .25s,\n    border-color .25s;\n}\n.btn[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -120%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      100deg,\n      transparent,\n      rgba(255, 255, 255, .45),\n      transparent);\n  transform: skewX(-18deg);\n  transition: left .55s var(--ease);\n}\n.btn[_ngcontent-%COMP%]:hover:before {\n  left: 130%;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n  animation: _ngcontent-%COMP%_glow 2.8s ease-in-out infinite;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #e97a08;\n  transform: translateY(-2px);\n}\n.btn-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(21, 101, 216, .75);\n}\n.btn-blue[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.btn-orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(255, 140, 26, .7);\n}\n.btn-orange[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.btn-green[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--ok),\n      var(--green));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(22, 163, 74, .6);\n}\n.btn-green[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.btn-goutline[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--green);\n  border: 1.5px solid var(--green);\n}\n.btn-goutline[_ngcontent-%COMP%]:hover {\n  background: var(--green);\n  color: #fff;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: var(--line);\n  color: var(--navy);\n  box-shadow: var(--shadow-s);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn-wa[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.btn-wa[_ngcontent-%COMP%]:hover {\n  background: #1eb955;\n  border-color: #1eb955;\n  transform: translateY(-2px);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .42);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .12);\n  transform: translateY(-2px);\n}\n.btn[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  transition: transform .25s;\n}\n.btn[_ngcontent-%COMP%]:hover   .ar[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 15px;\n  font-size: 12.5px;\n}\n.utility[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b9c9e2;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa[_ngcontent-%COMP%]:hover {\n  color: #8ff0b0 !important;\n}\n.promo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n}\n.promo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ffd9ac;\n}\n.promo[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  font-weight: 600;\n}\nheader[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, .82);\n  backdrop-filter: saturate(180%) blur(14px);\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\n  border-bottom: 1px solid var(--line);\n  transition: box-shadow .35s;\n}\nheader.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 30px -18px rgba(4, 30, 66, .28);\n}\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  gap: 16px;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  flex-shrink: 0;\n}\n.logo-mark[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      140deg,\n      var(--blue),\n      #3b82f6);\n  box-shadow: 0 8px 18px -6px rgba(21, 101, 216, .7);\n}\n.logo-mark[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 8px;\n  border: 2.4px solid #fff;\n  border-radius: 50%;\n}\n.logo-mark[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 6px;\n  height: 6px;\n  background: #fff;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n}\n.brand-txt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 800;\n  font-size: 19px;\n  color: var(--navy);\n}\n.brand-txt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.brand-txt[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--mono);\n  font-size: 8px;\n  letter-spacing: .22em;\n  color: var(--slate);\n  margin-top: -1px;\n}\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  list-style: none;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14.5px;\n  font-weight: 500;\n  color: var(--ink);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  position: relative;\n  padding: 4px 0;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .car[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-right: 1.6px solid var(--slate);\n  border-bottom: 1.6px solid var(--slate);\n  transform: rotate(45deg) translateY(-2px);\n  transition: .25s;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  height: 2px;\n  width: 0;\n  background: var(--blue);\n  transition: width .3s var(--ease);\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .car[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n}\n.nav-r[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n.cart-btn[_ngcontent-%COMP%] {\n  position: relative;\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  border: 1px solid var(--line);\n  background: #fff;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  box-shadow: var(--shadow-s);\n  transition: .22s var(--ease);\n}\n.cart-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  transform: translateY(-2px);\n}\n.cart-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n  color: var(--navy);\n}\n.cart-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -7px;\n  right: -7px;\n  min-width: 19px;\n  height: 19px;\n  padding: 0 5px;\n  border-radius: 99px;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--mono);\n  font-size: 11px;\n  font-weight: 600;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 4px 10px -2px rgba(255, 140, 26, .8);\n  transform: scale(0);\n  transition: transform .3s var(--ease);\n}\n.cart-count.show[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n.cart-count.bump[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_bump .4s var(--ease);\n}\n@keyframes _ngcontent-%COMP%_bump {\n  40% {\n    transform: scale(1.35);\n  }\n}\n.burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  padding: 6px;\n}\n.burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n  transition: .3s;\n}\n.pp-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #061634 0%,\n      #0c2b63 55%,\n      #12408f 100%);\n  padding: 60px 0 72px;\n}\n.pp-hero[_ngcontent-%COMP%]   .grid-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  opacity: .5;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .06) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      760px 560px at 80% 20%,\n      #000,\n      transparent 72%);\n  -webkit-mask-image:\n    radial-gradient(\n      760px 560px at 80% 20%,\n      #000,\n      transparent 72%);\n  animation: _ngcontent-%COMP%_gridmove 32s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_gridmove {\n  to {\n    background-position: 48px 48px;\n  }\n}\n.aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(70px);\n  z-index: 0;\n  pointer-events: none;\n  opacity: .4;\n}\n.aurora.a1[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  background:\n    radial-gradient(\n      circle,\n      #2f6bff,\n      transparent 65%);\n  top: -100px;\n  right: 6%;\n  animation: _ngcontent-%COMP%_aflow1 12s ease-in-out infinite;\n}\n.aurora.a2[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      #ff8c1a,\n      transparent 65%);\n  bottom: -60px;\n  right: 26%;\n  animation: _ngcontent-%COMP%_aflow2 14s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_aflow1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-30px, 24px) scale(1.12);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(26px, -20px) scale(1.15);\n  }\n}\n#net[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .6;\n}\n.pp-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n.pp-crumb[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 12px;\n  color: #9fb6de;\n  margin-bottom: 22px;\n}\n.pp-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.pp-crumb[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  gap: 44px;\n  align-items: center;\n}\n.pp-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  font-weight: 500;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #bcd4ff;\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .16);\n  padding: 7px 14px;\n  border-radius: 99px;\n}\n.pp-eyebrow[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #5FE08D;\n  animation: _ngcontent-%COMP%_cbpulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_cbpulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(95, 224, 141, .5);\n  }\n  70% {\n    box-shadow: 0 0 0 9px rgba(95, 224, 141, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(95, 224, 141, 0);\n  }\n}\n.pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: clamp(30px, 4vw, 46px);\n  font-weight: 800;\n  margin: 20px 0 8px;\n  line-height: 1.08;\n}\n.pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .brand-line[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--mono);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: .06em;\n  color: #7fb0ff;\n  margin-bottom: 10px;\n  text-transform: none;\n}\n.pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .serif[_ngcontent-%COMP%] {\n  color: #ffd9ac;\n  font-weight: 400;\n}\n.pp-hero[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 16.5px;\n  color: #c9d8f2;\n  max-width: 520px;\n  margin: 14px 0 22px;\n}\n.pp-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.pp-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 12px;\n  color: #dbe7fb;\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .16);\n  padding: 7px 13px;\n  border-radius: 99px;\n}\n.pp-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: #7fb0ff;\n}\n.pp-badge.hi[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 26, .16);\n  border-color: rgba(255, 140, 26, .4);\n  color: #ffd9ac;\n}\n.pp-badge.hi[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #ffb05a;\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.ssl-stage[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 380px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.orbit-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 6% 8%;\n  border: 1.5px dashed rgba(127, 176, 255, .3);\n  border-radius: 50%;\n  z-index: 0;\n  animation: _ngcontent-%COMP%_orbit 40s linear infinite;\n}\n.orbit-ring[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  top: -5px;\n  left: 50%;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--orange);\n  box-shadow: 0 0 12px var(--orange);\n}\n@keyframes _ngcontent-%COMP%_orbit {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.browser[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 430px;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_scfloat 6s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_scfloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-11px);\n  }\n}\n.browser[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.browser[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.browser[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #cdd8ea;\n  display: block;\n}\n.browser[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--navy);\n}\n.browser[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%]   .lock[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n.browser[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%]   .lock[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n.browser[_ngcontent-%COMP%]   .url[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n.browser[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  background:\n    linear-gradient(\n      160deg,\n      #08163a,\n      #123776 60%,\n      #1c56c8);\n  overflow: hidden;\n}\n.browser[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   .scanline[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(90, 150, 255, .28),\n      transparent);\n  animation: _ngcontent-%COMP%_pphscan 4.5s var(--ease) infinite;\n}\n@keyframes _ngcontent-%COMP%_pphscan {\n  0% {\n    top: -100px;\n  }\n  100% {\n    top: 100%;\n  }\n}\n.seal[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 126px;\n  height: 126px;\n}\n.seal[_ngcontent-%COMP%]   .ring[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_orbit 24s linear infinite;\n  transform-origin: 63px 63px;\n}\n.seal[_ngcontent-%COMP%]   .lens-glow[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_lensGlow 2.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_lensGlow {\n  0%, 100% {\n    opacity: .55;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.float-card[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #fff;\n  border-radius: 13px;\n  box-shadow: var(--shadow);\n  padding: 11px 14px;\n  z-index: 4;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.float-card[_ngcontent-%COMP%]   .fi[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.float-card[_ngcontent-%COMP%]   .fi[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n.float-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 13px;\n  color: var(--navy);\n  display: block;\n  line-height: 1.2;\n}\n.float-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 10px;\n  color: var(--slate);\n}\n.fc-secured[_ngcontent-%COMP%] {\n  left: -30px;\n  top: 36%;\n  animation: _ngcontent-%COMP%_scfloat 7s ease-in-out infinite;\n}\n.fc-secured[_ngcontent-%COMP%]   .fi[_ngcontent-%COMP%] {\n  background: #e4f7ec;\n  color: var(--green);\n}\n.fc-warranty[_ngcontent-%COMP%] {\n  right: -26px;\n  bottom: 12%;\n  animation: _ngcontent-%COMP%_scfloat 8s ease-in-out infinite;\n}\n.fc-warranty[_ngcontent-%COMP%]   .fi[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.fc-issued[_ngcontent-%COMP%] {\n  right: -26px;\n  top: 2%;\n  animation: _ngcontent-%COMP%_scfloat 6.5s ease-in-out infinite;\n}\n.fc-issued[_ngcontent-%COMP%]   .fi[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: var(--orange);\n}\n.pp-trust[_ngcontent-%COMP%] {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.pp-body[_ngcontent-%COMP%] {\n  padding: 26px 0 28px 0;\n}\n.pp-sec[_ngcontent-%COMP%] {\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 26px 0 16px 0;\n}\n.pp-sec[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.pp-ov[_ngcontent-%COMP%] {\n  font-size: 16.5px;\n  color: var(--ink);\n  line-height: 1.75;\n  max-width: 75ch;\n}\n.pp-ov[_ngcontent-%COMP%]    + .pp-ov[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.pp-ov[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n}\n.pp-overview[_ngcontent-%COMP%] {\n  padding: 28px 32px 30px;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff 0%,\n      #f7faff 100%);\n  box-shadow: var(--shadow-s);\n}\n.pp-overview[_ngcontent-%COMP%]   .pp-sec[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--line);\n}\n.pp-overview-copy[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.3fr) minmax(0, .9fr);\n  gap: 40px;\n  align-items: start;\n}\n.pp-overview[_ngcontent-%COMP%]   .pp-ov[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 0;\n  font-size: 15.5px;\n  line-height: 1.75;\n}\n.pp-vgrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-top: 8px;\n}\n.vcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px;\n  box-shadow: var(--shadow-s);\n  transition: .3s var(--ease);\n}\n.vcard[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow);\n  border-color: #c9dcfb;\n}\n.vcard[_ngcontent-%COMP%]   .vb[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 6px 12px;\n  border-radius: 99px;\n  margin-bottom: 16px;\n}\n.vcard.dv[_ngcontent-%COMP%]   .vb[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.vcard.ov[_ngcontent-%COMP%]   .vb[_ngcontent-%COMP%] {\n  background: #eaeff9;\n  color: #2b4a8f;\n}\n.vcard.ev[_ngcontent-%COMP%]   .vb[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: var(--orange-d);\n}\n.vcard.wildcard[_ngcontent-%COMP%]   .vb[_ngcontent-%COMP%] {\n  background: #edf8f3;\n  color: #18754c;\n}\n.vcard.multi[_ngcontent-%COMP%]   .vb[_ngcontent-%COMP%] {\n  background: #f3edff;\n  color: #7041ab;\n}\n.vcard[_ngcontent-%COMP%]   .vb[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.vcard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n.vcard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 16px;\n}\n.vcard[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.vcard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  font-size: 13px;\n  color: var(--ink);\n}\n.vcard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%], \n.pfeat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  background: #e4f7ec;\n  color: var(--green);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.vcard[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.pfeat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.geotrust-videos[_ngcontent-%COMP%]   .tally-video-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n}\n.geotrust-videos[_ngcontent-%COMP%]   .geotrust-video-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #081d3e,\n      #154780);\n  color: #fff;\n}\n.geotrust-video-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  opacity: .65;\n}\n.geotrust-video-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dce9ff;\n  font-size: 14px;\n}\n@media (max-width: 900px) {\n  .geotrust-videos[_ngcontent-%COMP%]   .tally-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 580px;\n    margin-inline: auto;\n  }\n}\n.filter[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin: 8px 0 26px;\n}\n.fchip[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--slate);\n  background: #fff;\n  border: 1px solid var(--line);\n  padding: 9px 18px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .22s var(--ease);\n}\n.fchip[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.fchip.on[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 10px 22px -10px rgba(21, 101, 216, .7);\n}\n.pgrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.pcard[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 22px;\n  box-shadow: var(--shadow-s);\n  display: flex;\n  flex-direction: column;\n  transition: .3s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.pcard[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: .35s var(--ease);\n}\n.pcard[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-lg);\n  border-color: #c9dcfb;\n}\n.pcard[_ngcontent-%COMP%]:hover:before {\n  transform: scaleX(1);\n}\n.pcard[_ngcontent-%COMP%]   .ptop[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.tierbadge[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 10.5px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 99px;\n}\n.tierbadge.dv[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.tierbadge.ov[_ngcontent-%COMP%] {\n  background: #eaeff9;\n  color: #2b4a8f;\n}\n.tierbadge.ev[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: var(--orange-d);\n}\n.tagchip[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 10px;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  padding: 4px 9px;\n  border-radius: 99px;\n}\n.pcard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 6px;\n  min-height: 42px;\n}\n.product-detail-link[_ngcontent-%COMP%]:hover, \n.product-detail-link[_ngcontent-%COMP%]:focus-visible {\n  color: var(--blue);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.pcard[_ngcontent-%COMP%]   .pdesc[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 12px;\n  min-height: 34px;\n}\n.pmeta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 12px;\n  font-size: 11.5px;\n}\n.pmeta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--slate);\n  display: block;\n}\n.pmeta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 13px;\n  color: var(--navy);\n}\n.pfeat[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin-bottom: 16px;\n}\n.pfeat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  font-size: 12.5px;\n  color: var(--ink);\n}\n.pprice[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 14px;\n  border-top: 1px solid var(--line);\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.pprice[_ngcontent-%COMP%]   .from[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--slate);\n  display: block;\n}\n.pprice[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 23px;\n  font-weight: 800;\n  color: var(--navy);\n}\n.pprice[_ngcontent-%COMP%]   .yr[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--slate);\n}\n.pprice[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--green);\n  background: #e4f7ec;\n  padding: 4px 9px;\n  border-radius: 99px;\n}\n.pcard[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.certificate-quantity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 0 12px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #f7faff;\n  overflow: hidden;\n}\n.certificate-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 40px;\n  border: 0;\n  background: transparent;\n  color: var(--blue);\n  font-size: 20px;\n  cursor: pointer;\n}\n.certificate-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .4;\n  cursor: not-allowed;\n}\n.certificate-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: -3px;\n}\n.certificate-quantity[_ngcontent-%COMP%]   :is(output[_ngcontent-%COMP%], input[xhQuantityInput][_ngcontent-%COMP%]) {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--navy);\n}\n.pv-note[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 13px;\n  color: var(--slate);\n  font-family: var(--mono);\n}\n.pp-tablewrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  margin-top: 8px;\n}\n.pp-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 640px;\n}\n.pp-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ice);\n  font: 600 11.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--slate);\n  text-align: left;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--line);\n}\n.pp-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n  text-align: center;\n}\n.pp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 18px;\n  border-bottom: 1px solid var(--line);\n  font-size: 13.5px;\n  color: var(--ink);\n}\n.pp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n  text-align: center;\n}\n.pp-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.pp-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  font-weight: 600;\n  color: var(--navy);\n}\n.pp-table[_ngcontent-%COMP%]   .yes[_ngcontent-%COMP%] {\n  color: var(--green);\n  font-weight: 700;\n}\n.pp-table[_ngcontent-%COMP%]   .no[_ngcontent-%COMP%] {\n  color: #c3ccdb;\n}\n.pp-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(4) {\n  color: var(--orange-d);\n}\n.pp-addons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.pp-addon[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.pp-addon[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .08);\n  transform: translateY(-4px);\n}\n.pp-addon[_ngcontent-%COMP%]   .aic[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  margin-bottom: 10px;\n}\n.pp-addon[_ngcontent-%COMP%]   .aic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.pp-addon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14px;\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.pp-addon[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-feats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: 8px;\n}\n.pp-feat[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px 20px;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  transition: .2s var(--ease);\n  background: #fff;\n}\n.pp-feat[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 22px rgba(21, 101, 216, .1);\n  transform: translateY(-4px);\n}\n.pp-feat[_ngcontent-%COMP%]   .fic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n}\n.pp-feat[_ngcontent-%COMP%]   .fic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n}\n.pp-feat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 3px;\n}\n.pp-feat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-bens[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.pb[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.pb[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: var(--shadow-s);\n  transform: translateY(-4px);\n}\n.pb[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.pb[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.pb[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 14px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 4px;\n}\n.pb[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-auto[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      #123776 60%,\n      var(--blue));\n  border-radius: 20px;\n  padding: 34px;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 30px;\n  align-items: center;\n  box-shadow: var(--shadow-lg);\n}\n.pp-auto[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .5;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  animation: _ngcontent-%COMP%_gridmove 30s linear infinite;\n}\n.pp-auto[_ngcontent-%COMP%]   .glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 140, 26, .4),\n      transparent 65%);\n  filter: blur(30px);\n  right: -40px;\n  top: -60px;\n  animation: _ngcontent-%COMP%_aflow2 12s ease-in-out infinite;\n}\n.pp-auto[_ngcontent-%COMP%]   .al[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.pp-auto[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #ffd9ac;\n  background: rgba(255, 140, 26, .16);\n  border: 1px solid rgba(255, 140, 26, .35);\n  padding: 6px 12px;\n  border-radius: 99px;\n  margin-bottom: 14px;\n}\n.pp-auto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.pp-auto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c9d8f2;\n  font-size: 14.5px;\n  margin-bottom: 16px;\n  max-width: 46ch;\n}\n.pp-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 9px;\n}\n.pp-auto[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 13px;\n  color: #e7eefb;\n}\n.pp-auto[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .k[_ngcontent-%COMP%] {\n  color: #5FE08D;\n  flex: none;\n}\n.pp-auto[_ngcontent-%COMP%]   .ar-visual[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pp-auto[_ngcontent-%COMP%]   .ar-explore[_ngcontent-%COMP%] {\n  align-self: center;\n  width: auto;\n  padding: 7px 16px;\n  font-size: 13px;\n  border-radius: 8px;\n}\n.ar-step[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .14);\n  border-radius: 12px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 13px;\n  color: #fff;\n}\n.ar-step[_ngcontent-%COMP%]   .n[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  background: var(--orange);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.ar-step.done[_ngcontent-%COMP%]   .n[_ngcontent-%COMP%] {\n  background: var(--ok);\n}\n.pp-uses[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.pu[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.pu[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: var(--shadow-s);\n  transform: translateY(-4px);\n}\n.pu-ic[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: var(--ice);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.pu-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.pu[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 14px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 3px;\n}\n.pu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.3px;\n  color: var(--slate);\n}\n.pp-secrows[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 34px;\n  margin-top: 8px;\n}\n.psr[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 13px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--line);\n}\n.psr[_ngcontent-%COMP%]   .si[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.psr[_ngcontent-%COMP%]   .si[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 19px;\n}\n.psr[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 3px;\n}\n.psr[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-why[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-top: 8px;\n}\n.pw[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 20px;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.pw[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: var(--shadow-s);\n  transform: translateY(-4px);\n}\n.pw-ic[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.pw-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n}\n.pw[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 4px;\n}\n.pw[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-tcards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-top: 8px;\n}\n.tcard[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 24px;\n  background: #fff;\n  position: relative;\n  box-shadow: var(--shadow-s);\n  transition: .25s var(--ease);\n}\n.tcard[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow);\n}\n.quote-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 20px;\n  font-family: var(--disp);\n  font-size: 48px;\n  line-height: 1;\n  color: var(--blue-soft);\n}\n.tav[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 15px;\n  margin-bottom: 12px;\n}\n.tname[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--navy);\n}\n.trole[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--slate);\n  margin-bottom: 8px;\n}\n.tstars[_ngcontent-%COMP%] {\n  color: var(--orange);\n  font-size: 13px;\n  margin-bottom: 10px;\n  letter-spacing: 2px;\n}\n.tcard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--ink);\n  line-height: 1.6;\n}\n.pp-faq[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-top: 8px;\n}\n.faq2[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  transition: border-color .25s, box-shadow .25s;\n  align-self: start;\n}\n.faq2.open[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n}\n.faq2-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: .28s var(--ease);\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-ic[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n  transform: rotate(45deg);\n}\n.faq2-a[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s var(--ease);\n}\n.faq2-a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.site-foot[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #1C6BE0 0%,\n      #1257C4 45%,\n      #0E4CAB 100%);\n  color: #e8f0fd;\n  position: relative;\n  overflow: hidden;\n  padding-top: 44px;\n}\n.site-foot[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .4;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .05) 1px,\n      transparent 1px);\n  background-size: 44px 44px;\n  pointer-events: none;\n}\n.site-foot[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.site-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .82);\n  transition: .18s;\n}\n.site-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.nl-panel[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      var(--navy-2));\n  border-radius: 18px;\n  padding: 26px 34px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  flex-wrap: wrap;\n  text-align: left;\n  box-shadow: var(--shadow-lg);\n  margin-bottom: 40px;\n}\n.nl-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: clamp(17px, 2vw, 22px);\n  margin: 0;\n  max-width: 46ch;\n  flex: 1 1 340px;\n}\n.nl-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  flex-wrap: wrap;\n  flex: 1 1 380px;\n  max-width: 520px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, .4);\n}\n.nl-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  border: 0;\n  padding: 12px 16px;\n  font-family: var(--body);\n  font-size: 14px;\n  color: var(--ink);\n  background: transparent;\n}\n.nl-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.nl-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.foot-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.55fr;\n  gap: 44px;\n  padding: 6px 0 34px;\n}\n.foot-brand[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.foot-brand[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .brand-txt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.foot-brand[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   .brand-txt[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #bcd0f2;\n}\n.foot-tag[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #fff;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.foot-sub[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: #bcd0f2;\n  margin-bottom: 16px;\n  letter-spacing: .02em;\n}\n.foot-desc[_ngcontent-%COMP%] {\n  font-size: 12.7px;\n  line-height: 1.7;\n  color: #d6e3f8;\n  max-width: 60ch;\n  margin-bottom: 20px;\n}\n.foot-desc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  flex-wrap: wrap;\n}\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  transition: .22s var(--ease);\n}\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.socials[_ngcontent-%COMP%]   .s-li[_ngcontent-%COMP%] {\n  background: #0A66C2;\n}\n.socials[_ngcontent-%COMP%]   .s-yt[_ngcontent-%COMP%] {\n  background: #FF0000;\n}\n.socials[_ngcontent-%COMP%]   .s-th[_ngcontent-%COMP%] {\n  background: #000;\n}\n.socials[_ngcontent-%COMP%]   .s-pi[_ngcontent-%COMP%] {\n  background: #E60023;\n}\n.socials[_ngcontent-%COMP%]   .s-fb[_ngcontent-%COMP%] {\n  background: #1877F2;\n}\n.socials[_ngcontent-%COMP%]   .s-x[_ngcontent-%COMP%] {\n  background: #000;\n}\n.socials[_ngcontent-%COMP%]   .s-rd[_ngcontent-%COMP%] {\n  background: #FF4500;\n}\n.socials[_ngcontent-%COMP%]   .s-pl[_ngcontent-%COMP%] {\n  background: #2ECC71;\n}\n.foot-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.flrow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 132px 1fr;\n  gap: 14px;\n  align-items: start;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, .1);\n}\n.flrow[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.fl-label[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  font-weight: 700;\n  color: #fff;\n}\n.fl-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 20px;\n}\n.fl-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.fl-items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: "\\203a";\n  color: #8fb6f0;\n  font-weight: 700;\n}\n.fl-items[_ngcontent-%COMP%]   .hiring[_ngcontent-%COMP%] {\n  background: #e11d48;\n  color: #fff;\n  font-weight: 600;\n  padding: 3px 12px;\n  border-radius: 6px;\n}\n.fl-items[_ngcontent-%COMP%]   .hiring[_ngcontent-%COMP%]:before {\n  content: none;\n}\n.fl-items[_ngcontent-%COMP%]   .hiring[_ngcontent-%COMP%]:hover {\n  background: #be123c;\n}\n.foot-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 132px 1fr;\n  gap: 14px;\n  align-items: center;\n  padding: 20px 0;\n  border-top: 1px solid rgba(255, 255, 255, .12);\n}\n.fs-label[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  font-weight: 700;\n  color: #fff;\n}\n.cert-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.cert[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 66px;\n  border-radius: 10px;\n  background: rgba(4, 30, 66, .5);\n  border: 1px solid rgba(255, 255, 255, .14);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 1.1;\n}\n.cert[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 8px;\n  letter-spacing: .12em;\n  color: #9fc0f2;\n}\n.cert[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 14px;\n  color: #fff;\n  margin: 1px 0;\n}\n.cert[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 7px;\n  letter-spacing: .14em;\n  color: #8fb6f0;\n  font-style: normal;\n}\n.pay-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pay-pills[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--navy);\n  font-weight: 600;\n  font-size: 11.5px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-family: var(--body);\n}\n.prot-badges[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.prot[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 16px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.prot.sitelock[_ngcontent-%COMP%] {\n  background: #0b1220;\n  color: #fff;\n}\n.prot.sitelock[_ngcontent-%COMP%]   .lk[_ngcontent-%COMP%] {\n  color: #2ECC71;\n}\n.prot.sitelock[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #2ECC71;\n}\n.prot.rev[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--navy);\n}\n.prot.rev[_ngcontent-%COMP%]   .st[_ngcontent-%COMP%] {\n  color: var(--orange);\n  letter-spacing: 1px;\n}\n.partner-band[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  background: rgba(255, 255, 255, .09);\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 16px;\n  padding: 26px 30px;\n  margin: 24px 0;\n}\n.partner-band[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  margin-bottom: 5px;\n}\n.partner-band[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d6e3f8;\n  font-size: 13.5px;\n  max-width: 52ch;\n}\n.foot-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 20px 0 26px;\n  border-top: 1px solid rgba(255, 255, 255, .14);\n}\n.foot-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #cfe0f9;\n}\n.foot-bottom[_ngcontent-%COMP%]   .creds[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: #9fc0f2;\n  letter-spacing: .03em;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  background: rgba(4, 18, 42, .55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .3s, visibility .3s;\n}\n.overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  z-index: 210;\n  width: min(860px, 94vw);\n  max-height: 92vh;\n  transform: translate(-50%, -46%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 50px 120px -30px rgba(4, 18, 42, .6);\n  transition:\n    opacity .32s var(--ease),\n    transform .32s var(--ease),\n    visibility .32s;\n  display: flex;\n  flex-direction: column;\n}\n.modal.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translate(-50%, -50%);\n}\n.modal-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 20px 26px;\n  background:\n    linear-gradient(\n      120deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n}\n.modal-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 20px;\n}\n.modal-close[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  border: 0;\n  background: rgba(255, 255, 255, .18);\n  color: #fff;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: .2s;\n  flex-shrink: 0;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .32);\n  transform: rotate(90deg);\n}\n.modal-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.35fr 1fr;\n  gap: 24px;\n  padding: 24px 26px;\n  overflow-y: auto;\n}\n.terms[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.term[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 13px;\n  align-items: flex-start;\n  padding: 15px 16px;\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  cursor: pointer;\n  transition: .2s var(--ease);\n  background: #fff;\n}\n.term[_ngcontent-%COMP%]:hover {\n  border-color: #c9dcfb;\n  background: #fbfcff;\n}\n.term.sel[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  background: var(--blue-soft);\n}\n.term[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #b9c6dd;\n  flex-shrink: 0;\n  margin-top: 2px;\n  position: relative;\n  transition: .2s;\n}\n.term.sel[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n}\n.term.sel[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: var(--blue);\n}\n.term[_ngcontent-%COMP%]   .tinfo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 15px;\n  color: var(--navy);\n}\n.term[_ngcontent-%COMP%]   .tsub[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-top: 3px;\n  line-height: 1.5;\n}\n.term[_ngcontent-%COMP%]   .tsub[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #9aa8c2;\n}\n.term[_ngcontent-%COMP%]   .tsub[_ngcontent-%COMP%]   .sv[_ngcontent-%COMP%] {\n  color: var(--green);\n  font-weight: 600;\n}\n.term[_ngcontent-%COMP%]   .tsub[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%] {\n  color: var(--orange-d);\n  font-weight: 600;\n}\n.term[_ngcontent-%COMP%]   .best[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  font-family: var(--mono);\n  font-size: 9.5px;\n  font-weight: 600;\n  padding: 5px 12px 5px 14px;\n  border-radius: 99px 0 0 99px;\n}\n.config[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.gt-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n.gt-logo[_ngcontent-%COMP%]   .seal-sm[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  display: grid;\n  place-items: center;\n  color: #fff;\n}\n.gt-logo[_ngcontent-%COMP%]   .seal-sm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n}\n.gt-logo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 20px;\n  color: var(--navy);\n}\n.cfg-row[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.cfg-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--navy);\n  margin-bottom: 8px;\n}\n.cfg-row[_ngcontent-%COMP%]   .q[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 10px;\n  font-weight: 700;\n  cursor: help;\n  font-family: var(--mono);\n}\n.stepper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.stepper[_ngcontent-%COMP%]   .san-price[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 12px;\n  color: var(--slate);\n}\n.stepper[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.stepper[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 34px;\n  border: 0;\n  background: #fff;\n  color: var(--navy);\n  font-size: 17px;\n  cursor: pointer;\n  transition: .15s;\n}\n.stepper[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.stepper[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 34px;\n  border: 0;\n  border-left: 1px solid var(--line);\n  border-right: 1px solid var(--line);\n  text-align: center;\n  font-family: var(--mono);\n  font-size: 14px;\n  color: var(--navy);\n  -moz-appearance: textfield;\n}\n.stepper[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, \n.stepper[_ngcontent-%COMP%]   .ctrl[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.cfg-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-top: 1px solid var(--line);\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.cfg-line[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  color: var(--navy);\n}\n.total-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 14px 0;\n  border-top: 2px solid var(--line);\n}\n.total-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--navy);\n}\n.total-line[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--navy);\n}\n.gsttag[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--slate);\n  text-align: right;\n  margin: -6px 0 6px;\n}\n.config[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n}\n.note[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  background: #fffbe9;\n  border: 1px solid #f6e6a8;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.note[_ngcontent-%COMP%]   .ni[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f0d979;\n  color: #7a5c00;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.note[_ngcontent-%COMP%]   .ni[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: #6b5a1f;\n  line-height: 1.55;\n}\n.note[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-weight: 600;\n}\n.modal-foot[_ngcontent-%COMP%] {\n  padding: 14px 26px;\n  border-top: 1px solid var(--line);\n  text-align: right;\n  background: var(--ice);\n}\n.modal-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--orange-d);\n}\n.modal-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--orange);\n}\n.cart[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 210;\n  width: min(420px, 92vw);\n  background: #fff;\n  box-shadow: -30px 0 80px -30px rgba(4, 18, 42, .5);\n  transform: translateX(100%);\n  transition: transform .34s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.cart.open[_ngcontent-%COMP%] {\n  transform: none;\n}\n.cart-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 22px;\n  border-bottom: 1px solid var(--line);\n}\n.cart-h[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 18px;\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.cart-h[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%] {\n  background: var(--ice);\n  color: var(--navy);\n}\n.cart-h[_ngcontent-%COMP%]   .modal-close[_ngcontent-%COMP%]:hover {\n  background: var(--line);\n}\n.cart-items[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.cart-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--slate);\n  padding: 60px 20px;\n  font-size: 14px;\n}\n.cart-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  color: #c9d4e6;\n  margin: 0 auto 14px;\n}\n.citem[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  position: relative;\n  background: #fff;\n  animation: _ngcontent-%COMP%_cin .3s var(--ease);\n}\n@keyframes _ngcontent-%COMP%_cin {\n  from {\n    opacity: 0;\n    transform: translateX(14px);\n  }\n}\n.citem[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 13.5px;\n  color: var(--navy);\n  padding-right: 24px;\n}\n.citem[_ngcontent-%COMP%]   .cm[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--slate);\n}\n.citem[_ngcontent-%COMP%]   .cp[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-top: 2px;\n}\n.citem[_ngcontent-%COMP%]   .rm[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 22px;\n  height: 22px;\n  border-radius: 7px;\n  border: 0;\n  background: var(--ice);\n  color: var(--slate);\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: .2s;\n}\n.citem[_ngcontent-%COMP%]   .rm[_ngcontent-%COMP%]:hover {\n  background: #ffe4e4;\n  color: #e03131;\n}\n.citem[_ngcontent-%COMP%]   .rm[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n}\n.cart-foot[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--line);\n  padding: 18px 22px;\n}\n.cart-sub[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 14px;\n}\n.cart-sub[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate);\n}\n.cart-sub[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--navy);\n}\n.cart-foot[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 9px;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  left: 50%;\n  transform: translate(-50%, 120%);\n  z-index: 230;\n  background: var(--navy);\n  color: #fff;\n  padding: 13px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: var(--shadow-lg);\n  transition: transform .35s var(--ease);\n}\n.toast.show[_ngcontent-%COMP%] {\n  transform: translate(-50%, 0);\n}\n.toast[_ngcontent-%COMP%]   .tk[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--ok);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.toast[_ngcontent-%COMP%]   .tk[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n}\n.rv[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity .7s var(--ease), transform .7s var(--ease);\n}\n.rv.in[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n}\n.rv[data-d="1"][_ngcontent-%COMP%] {\n  transition-delay: .06s;\n}\n.rv[data-d="2"][_ngcontent-%COMP%] {\n  transition-delay: .12s;\n}\n.rv[data-d="3"][_ngcontent-%COMP%] {\n  transition-delay: .18s;\n}\n.rv[data-d="4"][_ngcontent-%COMP%] {\n  transition-delay: .24s;\n}\n.tilt[_ngcontent-%COMP%] {\n  transition: transform .2s var(--ease);\n}\n@media (max-width: 1024px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 56px;\n  }\n  .ssl-stage[_ngcontent-%COMP%] {\n    max-width: 460px;\n    margin: 0 auto;\n  }\n  .orbit-ring[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pp-vgrid[_ngcontent-%COMP%], \n   .pgrid[_ngcontent-%COMP%], \n   .pp-feats[_ngcontent-%COMP%], \n   .pp-why[_ngcontent-%COMP%], \n   .pp-tcards[_ngcontent-%COMP%], \n   .pp-addons[_ngcontent-%COMP%], \n   .pp-bens[_ngcontent-%COMP%], \n   .pp-uses[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pp-blog[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr !important;\n  }\n  .pp-addons[_ngcontent-%COMP%], \n   .pp-bens[_ngcontent-%COMP%], \n   .pp-uses[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pp-auto[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .foot-top[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n  .pp-overview-copy[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n}\n@media (max-width: 860px) {\n  nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n   .nav[_ngcontent-%COMP%]   .btn.desk[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  nav.open[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    flex-direction: column;\n    align-items: flex-start;\n    background: #fff;\n    padding: 20px 24px;\n    gap: 16px;\n    box-shadow: var(--shadow);\n    border-top: 1px solid var(--line);\n  }\n  .modal-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-faq[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-secrows[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .pp-vgrid[_ngcontent-%COMP%], \n   .pgrid[_ngcontent-%COMP%], \n   .pp-feats[_ngcontent-%COMP%], \n   .pp-why[_ngcontent-%COMP%], \n   .pp-tcards[_ngcontent-%COMP%], \n   .pp-addons[_ngcontent-%COMP%], \n   .pp-bens[_ngcontent-%COMP%], \n   .pp-uses[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-auto[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-blog[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n  .flrow[_ngcontent-%COMP%], \n   .foot-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .nl-panel[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .partner-band[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .pp-overview[_ngcontent-%COMP%] {\n    padding: 22px 20px 24px;\n    border-radius: 16px;\n  }\n  .pp-overview[_ngcontent-%COMP%]   .pp-sec[_ngcontent-%COMP%] {\n    font-size: 13px;\n    letter-spacing: .1em;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n  .rv[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: none;\n  }\n}\n.rv[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n}\n.geotrust-original-hero[_ngcontent-%COMP%]     .ppage > :not(.pp-hero):not(.pp-trust) {\n  display: none;\n}\n.pcard[_ngcontent-%COMP%]   .ptop[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.pcard[_ngcontent-%COMP%]   .geotrust-card-logo[_ngcontent-%COMP%] {\n  display: block;\n  width: 90px;\n  height: 26px;\n  flex: 0 0 90px;\n  margin-left: auto;\n  object-fit: contain;\n  border-radius: 4px;\n  background: #fff;\n  padding: 3px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=geotrust-ssl-certificates.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeoTrustSslCertificatesPage, [{
    type: Component,
    args: [{ selector: "xh-geotrust-ssl-certificates-page", standalone: true, imports: [QuantityInputDirective, InsightsSectionComponent, ProductPageComponent, RouterLink], host: { class: "geotrust-page" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Keep the original XcellHost GeoTrust product hero and trust strip. -->\r
<xh-product-page class="geotrust-original-hero" />\r
\r
<!-- ============ BODY ============ -->\r
<div class="pp-body"><div class="wrap">\r
\r
  <!-- OVERVIEW -->\r
  <section class="pp-overview" aria-labelledby="geotrust-overview-title">\r
    <div class="pp-sec" id="geotrust-overview-title">Overview &mdash; What is a GeoTrust SSL certificate?</div>\r
    <div class="pp-overview-copy">\r
      <p class="pp-ov">A <b>GeoTrust SSL/TLS certificate</b> encrypts the connection between your website and your visitors, so passwords, payments and personal data can't be intercepted. GeoTrust \u2014 part of the DigiCert family of certificate authorities \u2014 is trusted by 99.9% of browsers and mobile devices, and shows the padlock (and, for EV, your verified business name) that customers look for before they buy.</p>\r
      <p class="pp-ov">XcellHost is an authorised GeoTrust partner in India. We handle CSR generation, validation, issuance, installation and lifecycle renewal for you \u2014 with a GST invoice on every order and 24\xD77 support from our Mumbai NOC.</p>\r
    </div>\r
  </section>\r
\r
  <!-- VALIDATION LEVELS -->\r
  <div class="pp-sec">Choose your SSL validation and coverage</div>\r
  <div class="pp-vgrid">\r
    <div class="vcard dv rv" data-d="1"><span class="vb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round"/></svg>Domain Validation</span><h3>DV SSL</h3><p>Fastest way to encrypt \u2014 validated against domain ownership only, issued in minutes.</p><ul><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Ideal for blogs &amp; small sites</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Padlock in the address bar</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Issued within minutes</li></ul></div>\r
    <div class="vcard ov rv" data-d="2"><span class="vb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>Organization Validation</span><h3>OV SSL</h3><p>Business-verified trust \u2014 GeoTrust confirms your organization before issuing.</p><ul><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Company details in the cert</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Great for business sites</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Issued in 1\u20133 days</li></ul></div>\r
    <div class="vcard ev rv" data-d="3"><span class="vb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg>Extended Validation</span><h3>EV SSL</h3><p>The highest assurance \u2014 rigorous vetting for maximum customer confidence at checkout.</p><ul><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Maximum buyer trust</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Best for e-commerce &amp; banking</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Highest warranty coverage</li></ul></div>\r
    <div class="vcard wildcard rv" data-d="1"><span class="vb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 3v18M4 7l16 10M4 17L20 7"/></svg>Subdomain Coverage</span><h3>Wildcard SSL</h3><p>Secure subdomains at the same level under one domain with a single certificate.</p><ul><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Cover *.example.com</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Ideal for growing subdomain setups</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Manage one certificate for your subdomains</li></ul></div>\r
    <div class="vcard multi rv" data-d="1"><span class="vb"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="8" y="14" width="8" height="7" rx="1"/><path d="M6 10v2h12v-2M12 12v2"/></svg>Multi-Domain Coverage</span><h3>Multi-Domain SSL</h3><p>Protect multiple domain names with one SAN certificate for simpler certificate management.</p><ul><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Cover multiple domain names</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Include the SAN names you need</li><li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Manage renewals in one place</li></ul></div>\r
  </div>\r
\r
  <!-- PRICING / CATALOG -->\r
  <div class="pp-sec" id="products">GeoTrust certificate pricing (INR)</div>\r
  <p class="pp-ov" style="margin-bottom:18px">Configure a term, add SAN domains and buy in a few clicks. All prices per certificate, excluding GST \u2014 GST invoice included on every order.</p>\r
  <div class="filter" id="filter">\r
    @for (option of filters; track option.value) {\r
      <button class="fchip" type="button" [class.on]="filter() === option.value" (click)="filter.set(option.value)">{{ option.label }}</button>\r
    }\r
  </div>\r
  <div class="pgrid" id="pgrid">\r
    @for (product of visibleProducts(); track product.id) {\r
      <article class="pcard rv in">\r
        <div class="ptop">\r
          <span class="tierbadge" [class.dv]="product.tier === 'DV'" [class.ov]="product.tier === 'OV'" [class.ev]="product.tier === 'EV'">{{ product.tier }}</span>\r
          @for (tag of product.tags; track tag) { <span class="tagchip">{{ tag === 'Multi' ? 'Multi-Domain' : tag }}</span> }
          <img class="geotrust-card-logo" src="/assets/images/geotrust.svg" alt="GeoTrust" width="90" height="26">\r
        </div>\r
        <h3>\r
          @if (product.id === 'tb-ev-flex') {\r
            <a class="product-detail-link" routerLink="/geotrust-true-businessid-ev-flex">{{ product.name }}</a>\r
          } @else if (product.id === 'tb-ov-flex') {\r
            <a class="product-detail-link" routerLink="/geotrust-true-businessid-ov" [queryParams]="quantity(product) > 1 ? { quantity: quantity(product) } : null">{{ product.name }}</a>\r
          } @else if (product.id === 'dv-flex') {\r
            <a class="product-detail-link" routerLink="/geotrust-dv-ssl-flex">{{ product.name }}</a>\r
          } @else if (product.id === 'quick-san') {\r
            <a class="product-detail-link" routerLink="/geotrust-quickssl-premium-san">{{ product.name }}</a>\r
          } @else if (product.id === 'quick-premium') {\r
            <a class="product-detail-link" routerLink="/geotrust-quickssl-premium">{{ product.name }}</a>\r
          } @else if (product.id === 'quick-wild') {\r
            <a class="product-detail-link" routerLink="/geotrust-quickssl-premium-wildcard">{{ product.name }}</a>\r
          } @else if (product.id === 'tb-id') {\r
            <a class="product-detail-link" routerLink="/geotrust-true-businessid">{{ product.name }}</a>\r
          } @else if (product.id === 'tb-md') {\r
            <a class="product-detail-link" routerLink="/geotrust-true-businessid-multi-domain">{{ product.name }}</a>\r
          } @else if (product.id === 'tb-ev-md') {\r
            <a class="product-detail-link" routerLink="/geotrust-true-businessid-ev-multi-domain">{{ product.name }}</a>\r
          } @else if (product.id === 'tb-ev') {\r
            <a class="product-detail-link" routerLink="/geotrust-true-businessid-ev" [queryParams]="quantity(product) > 1 ? { quantity: quantity(product) } : null">{{ product.name }}</a>\r
          } @else if (product.id === 'tb-wild') {\r
            <a class="product-detail-link" routerLink="/geotrust-true-businessid-wildcard">{{ product.name }}</a>\r
          } @else {\r
            {{ product.name }}\r
          }\r
        </h3><p class="pdesc">{{ product.desc }}</p>\r
        <div class="pmeta"><div><span>Warranty</span><b>{{ product.warranty }}</b></div><div><span>Issued</span><b>{{ product.issue }}</b></div></div>\r
        <ul class="pfeat">@for (feature of product.features; track feature) { <li><span class="ck">\u2713</span>{{ feature }}</li> }</ul>\r
        <div class="pprice"><div><span class="from">From</span><span class="amt">{{ inr(product.prices[2]) }}</span><span class="yr">/year</span></div><span class="save">Save up to 84%</span></div>\r
        <div class="certificate-quantity" role="group" [attr.aria-label]="product.name + ' quantity'">\r
          <button type="button" (click)="adjustQuantity(product, -1)" [disabled]="quantity(product) === 1" [attr.aria-label]="'Decrease ' + product.name + ' quantity'">&minus;</button>\r
          <input xhQuantityInput [attr.aria-label]="'Quantity for ' + product.name + ' quantity'" [quantityValue]="quantity(product)" [quantityMax]="quantityMax(product)" (quantityChange)="adjustQuantity(product, $event - (quantity(product)))" />\r
          <button type="button" (click)="adjustQuantity(product, 1)" [disabled]="quantity(product) === quantityMax(product)" [attr.aria-label]="'Increase ' + product.name + ' quantity'">+</button>\r
        </div>\r
        <button class="btn btn-orange" type="button" (click)="configure(product)">Buy Now <span class="ar">\u2192</span></button>\r
      </article>\r
    }\r
  </div>\r
  <p class="pv-note">&#128179; Approximate INR pricing excluding GST. Pay online via UPI \xB7 Cards \xB7 NetBanking. Contact XcellHost for exact pricing, volume discounts and multi-year deals.</p>\r
\r
  <!-- COMPARISON TABLE -->\r
  <div class="pp-sec">Compare DV, OV &amp; EV certificates</div>\r
  <div class="pp-tablewrap"><table class="pp-table">\r
    <thead><tr><th>Feature</th><th>DV SSL</th><th>OV SSL</th><th>EV SSL</th></tr></thead>\r
    <tbody>\r
      <tr><td>Validation</td><td>Domain only</td><td>Domain + Business</td><td>Extended (full vetting)</td></tr>\r
      <tr><td>Issuance time</td><td>Minutes</td><td>1\u20133 days</td><td>1\u20135 days</td></tr>\r
      <tr><td>256-bit encryption</td><td class="yes">\u2713</td><td class="yes">\u2713</td><td class="yes">\u2713</td></tr>\r
      <tr><td>Address-bar padlock</td><td class="yes">\u2713</td><td class="yes">\u2713</td><td class="yes">\u2713</td></tr>\r
      <tr><td>Business name in certificate</td><td class="no">\u2014</td><td class="yes">\u2713</td><td class="yes">\u2713</td></tr>\r
      <tr><td>Highest buyer trust</td><td class="no">\u2014</td><td class="no">\u2014</td><td class="yes">\u2713</td></tr>\r
      <tr><td>Warranty</td><td>$500K</td><td>up to $1.25M</td><td>up to $1.75M</td></tr>\r
      <tr><td>Best for</td><td>Blogs, dev sites</td><td>Business sites</td><td>E-commerce, banking</td></tr>\r
    </tbody>\r
  </table></div>\r
\r
  <!-- Product videos are shown only in the Insights > Videos tab. -->\r
  @if (false) {\r
  <section class="tally-videos geotrust-videos" aria-labelledby="geotrustVideosTitle">\r
    <div class="pp-sec" id="geotrustVideosTitle">See GeoTrust SSL in action</div>\r
    <div class="tally-video-grid">\r
      <article class="tally-video-card">\r
        <h3><span>How SSL works</span></h3>\r
        <div class="tally-video-frame geotrust-video-placeholder">\r
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg>\r
          <p>Video coming soon</p>\r
        </div>\r
      </article>\r
      <article class="tally-video-card">\r
        <h3><span>Installing a certificate</span></h3>\r
        <div class="tally-video-frame geotrust-video-placeholder">\r
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg>\r
          <p>Video coming soon</p>\r
        </div>\r
      </article>\r
      <article class="tally-video-card">\r
        <h3><span>DV vs OV vs EV</span></h3>\r
        <div class="tally-video-frame geotrust-video-placeholder">\r
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 4l14 8-14 8z"/></svg>\r
          <p>Video coming soon</p>\r
        </div>\r
      </article>\r
    </div>\r
  </section>\r
  }\r
\r
  <!-- ADD-ONS -->\r
  <div class="pp-sec">Add-ons &amp; managed services</div>\r
  <div class="pp-addons">\r
    <div class="pp-addon rv" data-d="1"><span class="aic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span><b>Additional SAN domains</b><p>Secure multiple domains under one certificate \u2014 added right in the configurator.</p></div>\r
    <div class="pp-addon rv" data-d="2"><span class="aic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></span><b>Trust site seal</b><p>Display the GeoTrust dynamic seal to boost visitor confidence and conversions.</p></div>\r
    <div class="pp-addon rv" data-d="3"><span class="aic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4" stroke-linecap="round"/></svg></span><b>Malware &amp; vuln scan</b><p>Daily website scanning to catch malware and vulnerabilities before attackers do.</p></div>\r
    <div class="pp-addon rv" data-d="4"><span class="aic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12a8 8 0 018-8 8 8 0 017 4" stroke-linecap="round"/><path d="M20 12a8 8 0 01-8 8 8 8 0 01-7-4" stroke-linecap="round"/><path d="M19 4v4h-4M5 20v-4h4"/></svg></span><b>SSL automation (ACME)</b><p>Automatic renewal and re-issuance so a certificate never silently expires.</p></div>\r
  </div>\r
\r
  <!-- KEY FEATURES -->\r
  <div class="pp-sec">Everything in a GeoTrust certificate</div>\r
  <div class="pp-feats">\r
    <div class="pp-feat rv" data-d="1"><span class="fic" style="background:linear-gradient(135deg,#1565D8,#0C3E8F)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round"/></svg></span><div><b>256-bit encryption</b><p>Strong SHA-2, up to 256-bit session encryption on RSA 2048-bit and ECC keys.</p></div></div>\r
    <div class="pp-feat rv" data-d="2"><span class="fic" style="background:linear-gradient(135deg,#FF8C1A,#F57C00)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg></span><div><b>Million-dollar warranty</b><p>Up to $1.75M relying-party warranty backs every EV certificate you buy.</p></div></div>\r
    <div class="pp-feat rv" data-d="3"><span class="fic" style="background:linear-gradient(135deg,#16a34a,#2ECC71)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 3a15 15 0 010 18 15 15 0 010-18"/></svg></span><div><b>99.9% browser trust</b><p>Ubiquitous root recognised by all major browsers, servers and mobile devices.</p></div></div>\r
    <div class="pp-feat rv" data-d="1"><span class="fic" style="background:linear-gradient(135deg,#1565D8,#0C3E8F)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2z"/></svg></span><div><b>Unlimited reissues</b><p>Reissue as many times as you need during the term, at no extra cost.</p></div></div>\r
    <div class="pp-feat rv" data-d="2"><span class="fic" style="background:linear-gradient(135deg,#FF8C1A,#F57C00)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg></span><div><b>SAN &amp; wildcard options</b><p>Cover multiple domains or unlimited subdomains from a single certificate.</p></div></div>\r
    <div class="pp-feat rv" data-d="3"><span class="fic" style="background:linear-gradient(135deg,#16a34a,#2ECC71)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg></span><div><b>Free managed install</b><p>Our engineers generate the CSR and install on your server \u2014 24\xD77.</p></div></div>\r
  </div>\r
\r
  <!-- BENEFITS -->\r
  <div class="pp-sec">Benefits for your business</div>\r
  <div class="pp-bens">\r
    <div class="pb rv" data-d="1"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg></span><b>Win customer trust</b><p>The padlock and verified name reassure visitors and lift conversions.</p></div>\r
    <div class="pb rv" data-d="2"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 7-8" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 7v5h-5"/></svg></span><b>Better SEO ranking</b><p>Google favours HTTPS \u2014 encrypted sites get a search-ranking edge.</p></div>\r
    <div class="pb rv" data-d="3"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round"/></svg></span><b>Protect user data</b><p>Encrypt logins, forms and payments so data can't be intercepted.</p></div>\r
    <div class="pb rv" data-d="4"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"/></svg></span><b>Stay compliant</b><p>Meet PCI-DSS and data-protection requirements for handling sensitive data.</p></div>\r
  </div>\r
\r
  <!-- SSL AUTOMATION PANEL -->\r
  <div class="pp-sec">Never miss a renewal again</div>\r
  <div class="pp-auto rv">\r
    <div class="glow"></div>\r
    <div class="al">\r
      <span class="tag"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12a8 8 0 018-8 8 8 0 017 4" stroke-linecap="round"/><path d="M19 4v4h-4"/></svg>SSL Automation</span>\r
      <h3>Automated Certificate Lifecycle Management</h3>\r
      <p>As certificate lifetimes shrink, manual renewals become a liability. XcellHost's ACME-based automation issues, installs and renews your GeoTrust certificates \u2014 before they ever expire.</p>\r
      <ul>\r
        <li><span class="k">\u2713</span>Auto-renewal &amp; re-issue</li>\r
        <li><span class="k">\u2713</span>Expiry monitoring &amp; alerts</li>\r
        <li><span class="k">\u2713</span>Multi-server deployment</li>\r
        <li><span class="k">\u2713</span>Central dashboard</li>\r
      </ul>\r
    </div>\r
    <div class="ar-visual">\r
      <div class="ar-step done"><span class="n">\u2713</span>Certificate issued &amp; installed</div>\r
      <div class="ar-step done"><span class="n">\u2713</span>Expiry detected \u2014 30 days out</div>\r
      <div class="ar-step"><span class="n">3</span>Auto-renewed &amp; redeployed</div>\r
      <a class="btn btn-primary ar-explore" href="#" (click)="$event.preventDefault()">Explore</a>\r
    </div>\r
  </div>\r
\r
  <!-- USE CASES -->\r
  <div class="pp-sec">Who needs a GeoTrust SSL certificate?</div>\r
  <div class="pp-uses">\r
    <div class="pu rv" data-d="1"><span class="pu-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 8h18M7 15h3"/></svg></span><b>E-commerce</b><span>Secure checkout &amp; payment pages</span></div>\r
    <div class="pu rv" data-d="2"><span class="pu-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M8 11h.01M16 11h.01"/></svg></span><b>Banking &amp; Fintech</b><span>EV trust for high-value transactions</span></div>\r
    <div class="pu rv" data-d="3"><span class="pu-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5h16v16M8 2v6M16 2v6M4 10h16M12 13v5M9.5 15.5h5"/></svg></span><b>Healthcare</b><span>Protect patient data &amp; portals</span></div>\r
    <div class="pu rv" data-d="4"><span class="pu-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7.1 8.5 4.75 4.75 0 0 0 7 18z"/></svg></span><b>SaaS &amp; Web Apps</b><span>Wildcard cover for every subdomain</span></div>\r
    <div class="pu rv" data-d="1"><span class="pu-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 13h6M12 10v6"/></svg></span><b>Government &amp; Edu</b><span>Verified identity for public sites</span></div>\r
    <div class="pu rv" data-d="2"><span class="pu-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5h16v16M8 9h2M14 9h2M8 13h2M14 13h2M9 21v-4h6v4"/></svg></span><b>Corporate</b><span>Secure intranets &amp; mail servers</span></div>\r
    <div class="pu rv" data-d="3"><span class="pu-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4M11 19h2"/></svg></span><b>Startups &amp; SMBs</b><span>Affordable DV to launch fast</span></div>\r
    <div class="pu rv" data-d="4"><span class="pu-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8h18v12H3zM3 8l3-4h12l3 4M8 12h8"/></svg></span><b>Marketplaces</b><span>Multi-domain SAN coverage</span></div>\r
  </div>\r
\r
  <!-- SECURITY -->\r
  <div class="pp-sec">Security &amp; compliance</div>\r
  <div class="pp-secrows">\r
    <div class="psr"><span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round"/></svg></span><div><b>256-bit / SHA-2 encryption</b><p>Modern SHA-256 signatures with up to 256-bit session keys on RSA 2048+ and ECC.</p></div></div>\r
    <div class="psr"><span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></span><div><b>CA/Browser Forum compliant</b><p>Issued to the latest CA/B Forum baseline requirements and industry standards.</p></div></div>\r
    <div class="psr"><span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 3a15 15 0 010 18 15 15 0 010-18"/></svg></span><div><b>Ubiquitous root trust</b><p>Recognised by 99.9% of desktop &amp; mobile browsers, servers and applications.</p></div></div>\r
    <div class="psr"><span class="si"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"/></svg></span><div><b>PCI-DSS ready</b><p>Helps meet PCI-DSS and data-protection obligations for handling cardholder data.</p></div></div>\r
  </div>\r
\r
  <!-- WHY XCELLHOST -->\r
  <div class="pp-sec">Why buy GeoTrust from XcellHost?</div>\r
  <p class="pp-ov" style="margin-bottom:20px">Any reseller can sell you a certificate. XcellHost issues it, installs it, and keeps it renewed \u2014 with local support and a GST invoice.</p>\r
  <div class="pp-why">\r
    <div class="pw rv" data-d="1"><span class="pw-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12l2 2 4-4"/><path d="M12 3l7 3v6c0 5-3 8-7 9-4-1-7-4-7-9V6z"/></svg></span><b>Authorised partner</b><p>Direct GeoTrust / DigiCert partner pricing \u2014 up to 84% below vendor list.</p></div>\r
    <div class="pw rv" data-d="2"><span class="pw-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20v-6M6 20v-4M18 20V8" stroke-linecap="round"/><path d="M3 20h18"/></svg></span><b>Free managed install</b><p>We generate the CSR, complete validation and install on your server for you.</p></div>\r
    <div class="pw rv" data-d="3"><span class="pw-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12a8 8 0 018-8 8 8 0 017 4" stroke-linecap="round"/><path d="M19 4v4h-4"/></svg></span><b>SSL automation</b><p>ACME-based auto-renewal so certificates never lapse or break your site.</p></div>\r
    <div class="pw rv" data-d="1"><span class="pw-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg></span><b>24\xD77 support</b><p>Round-the-clock help from our Mumbai NOC + SOC, since 1999.</p></div>\r
    <div class="pw rv" data-d="2"><span class="pw-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 4v16M4 9h4M4 15h4"/></svg></span><b>GST invoice</b><p>Compliant GST invoice on every order \u2014 pay via UPI, cards or NetBanking.</p></div>\r
    <div class="pw rv" data-d="3"><span class="pw-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 8V6a2 2 0 012-2h12a2 2 0 012 2v2M4 8h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2z"/></svg></span><b>Full lifecycle</b><p>Discovery, issuance, deployment and renewal managed end-to-end.</p></div>\r
  </div>\r
\r
  <!-- TESTIMONIALS -->\r
  <div class="pp-sec">What customers say</div>\r
  <div class="pp-tcards">\r
    <div class="tcard rv tilt" data-d="1"><div class="quote-badge">&rdquo;</div><div class="tav">RS</div><div class="tname">Retail &amp; Payments Team</div><div class="trole">E-commerce \xB7 EV SSL</div><div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>The EV certificate lifted checkout trust noticeably. XcellHost handled the whole business validation and installed it on our load balancer the same week.</p></div>\r
    <div class="tcard rv tilt" data-d="2"><div class="quote-badge">&rdquo;</div><div class="tav">IT</div><div class="tname">IT Operations</div><div class="trole">SaaS \xB7 Wildcard SSL</div><div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>One wildcard now covers all our subdomains and the automation renews it for us. We haven't had a single expiry incident since we moved to XcellHost.</p></div>\r
    <div class="tcard rv tilt" data-d="3"><div class="quote-badge">&rdquo;</div><div class="tav">FC</div><div class="tname">Finance Controller</div><div class="trole">NBFC \xB7 OV SSL</div><div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p>Transparent INR pricing, a proper GST invoice and quick support. Renewals are now completely hands-off for our team.</p></div>\r
  </div>\r
\r
  <!-- FAQ -->\r
  <div class="pp-sec">Frequently asked questions</div>\r
  <div class="pp-faq" id="faq">\r
    <div class="faq2 open rv" data-d="1"><button class="faq2-q" type="button" (click)="toggleFaq($event)">What is a GeoTrust SSL certificate?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>It's a digital certificate from the GeoTrust certificate authority (part of DigiCert) that encrypts traffic between your website and its visitors and verifies your site's identity. It shows the padlock in browsers and \u2014 for EV \u2014 your verified business name.</p></div></div>\r
    <div class="faq2 rv" data-d="2"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Is XcellHost an authorised GeoTrust partner in India?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>Yes. XcellHost is an authorised GeoTrust / DigiCert partner and has delivered SSL and cloud security to Indian businesses since 1999. Every order includes a GST invoice and 24\xD77 support from our Mumbai NOC.</p></div></div>\r
    <div class="faq2 rv" data-d="1"><button class="faq2-q" type="button" (click)="toggleFaq($event)">What's the difference between DV, OV and EV?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>DV validates domain ownership only and issues in minutes. OV also verifies your organization and shows business details in the certificate. EV is the highest assurance with rigorous vetting and the largest warranties \u2014 ideal for e-commerce and banking.</p></div></div>\r
    <div class="faq2 rv" data-d="2"><button class="faq2-q" type="button" (click)="toggleFaq($event)">How quickly is a certificate issued?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>DV certificates are typically issued within minutes of validation. OV takes 1\u20133 business days and EV 1\u20135 business days, depending on how quickly business verification documents are provided.</p></div></div>\r
    <div class="faq2 rv" data-d="1"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Do you install the certificate for me?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>Yes \u2014 free managed installation is included. Our engineers generate the CSR, complete validation and install the certificate on your web server or load balancer, and can automate future renewals.</p></div></div>\r
    <div class="faq2 rv" data-d="2"><button class="faq2-q" type="button" (click)="toggleFaq($event)">What is a SAN or wildcard certificate?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>A SAN (multi-domain) certificate secures several different domains under one certificate \u2014 add them in the configurator. A wildcard secures unlimited subdomains of a single domain (e.g. *.yourbusiness.com).</p></div></div>\r
    <div class="faq2 rv" data-d="1"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Do I get a GST invoice?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>Yes. Every purchase includes a compliant GST invoice. You can pay online via UPI, credit/debit cards or NetBanking, and we're happy to share exact pricing and multi-year discounts.</p></div></div>\r
    <div class="faq2 rv" data-d="2"><button class="faq2-q" type="button" (click)="toggleFaq($event)">What happens when my certificate expires?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>With XcellHost SSL automation, we monitor expiry and auto-renew and redeploy before the certificate lapses. Without automation, we send renewal reminders and can handle the renewal and re-installation for you.</p></div></div>\r
  </div>\r
\r
  <xh-insights-section pageSlug="geotrust-ssl-certificates" />\r
\r
</div></div>\r
\r
\r
\r
`, styles: ['/* src/app/pages/geotrust-ssl-certificates.page.css */\n:host {\n  --navy:#041E42;\n  --navy-2:#0A2A57;\n  --blue:#1565D8;\n  --blue-d:#0C3E8F;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --orange-d:#F57C00;\n  --ice:#F2F6FC;\n  --white:#fff;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --ok:#2ECC71;\n  --green:#16a34a;\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n  --shadow-s:0 6px 18px rgba(4,30,66,.06);\n  --shadow:0 18px 50px rgba(4,30,66,.10);\n  --shadow-lg:0 34px 80px -20px rgba(4,30,66,.34);\n  --maxw:1240px;\n  --ease:cubic-bezier(.22,.7,.2,1);\n  display: block;\n  overflow: hidden;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  font-family: var(--body);\n  color: var(--ink);\n  background: var(--white);\n  line-height: 1.6;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n}\nbody.lock {\n  overflow: hidden;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: var(--disp);\n  color: var(--navy);\n  line-height: 1.12;\n  letter-spacing: -.02em;\n  font-weight: 700;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nimg,\nsvg {\n  display: block;\n}\nbutton {\n  font-family: inherit;\n}\n.serif {\n  font-family: "Instrument Serif", serif;\n  font-style: italic;\n  letter-spacing: 0;\n}\n.wrap {\n  max-width: var(--maxw);\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.mono {\n  font-family: var(--mono);\n}\n#spotlight {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity .4s;\n  background:\n    radial-gradient(\n      340px circle at var(--mx,-999px) var(--my,-999px),\n      rgba(21, 101, 216, .09),\n      transparent 65%);\n}\n#progress {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 3px;\n  width: 0;\n  z-index: 130;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  box-shadow: 0 0 12px rgba(21, 101, 216, .6);\n}\n@keyframes glow {\n  0%, 100% {\n    box-shadow: 0 10px 26px -10px rgba(255, 140, 26, .7);\n  }\n  50% {\n    box-shadow: 0 14px 34px -8px rgba(255, 140, 26, .95);\n  }\n}\n.btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  overflow: hidden;\n  font-weight: 600;\n  font-size: 14.5px;\n  padding: 12px 22px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  will-change: transform;\n  transition:\n    transform .18s var(--ease),\n    box-shadow .28s,\n    background .25s,\n    color .25s,\n    border-color .25s;\n}\n.btn:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -120%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      100deg,\n      transparent,\n      rgba(255, 255, 255, .45),\n      transparent);\n  transform: skewX(-18deg);\n  transition: left .55s var(--ease);\n}\n.btn:hover:before {\n  left: 130%;\n}\n.btn-primary {\n  background: var(--orange);\n  color: #fff;\n  animation: glow 2.8s ease-in-out infinite;\n}\n.btn-primary:hover {\n  background: #e97a08;\n  transform: translateY(-2px);\n}\n.btn-blue {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(21, 101, 216, .75);\n}\n.btn-blue:hover {\n  transform: translateY(-2px);\n}\n.btn-orange {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(255, 140, 26, .7);\n}\n.btn-orange:hover {\n  transform: translateY(-2px);\n}\n.btn-green {\n  background:\n    linear-gradient(\n      135deg,\n      var(--ok),\n      var(--green));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(22, 163, 74, .6);\n}\n.btn-green:hover {\n  transform: translateY(-2px);\n}\n.btn-goutline {\n  background: #fff;\n  color: var(--green);\n  border: 1.5px solid var(--green);\n}\n.btn-goutline:hover {\n  background: var(--green);\n  color: #fff;\n}\n.btn-ghost {\n  background: #fff;\n  border-color: var(--line);\n  color: var(--navy);\n  box-shadow: var(--shadow-s);\n}\n.btn-ghost:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn-wa {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.btn-wa:hover {\n  background: #1eb955;\n  border-color: #1eb955;\n  transform: translateY(-2px);\n}\n.btn-outline {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .42);\n}\n.btn-outline:hover {\n  background: rgba(255, 255, 255, .12);\n  transform: translateY(-2px);\n}\n.btn .ar {\n  transition: transform .25s;\n}\n.btn:hover .ar {\n  transform: translateX(3px);\n}\n.btn-sm {\n  padding: 8px 15px;\n  font-size: 12.5px;\n}\n.utility {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility .wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility .wrap::-webkit-scrollbar {\n  display: none;\n}\n.utility a {\n  color: #b9c9e2;\n}\n.utility a:hover {\n  color: #fff;\n}\n.utility .links {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility .links > a {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility .phone {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa:hover {\n  color: #8ff0b0 !important;\n}\n.promo {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n}\n.promo b {\n  color: #ffd9ac;\n}\n.promo .code {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo a {\n  text-decoration: underline;\n  font-weight: 600;\n}\nheader {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, .82);\n  backdrop-filter: saturate(180%) blur(14px);\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\n  border-bottom: 1px solid var(--line);\n  transition: box-shadow .35s;\n}\nheader.scrolled {\n  box-shadow: 0 8px 30px -18px rgba(4, 30, 66, .28);\n}\n.nav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 0;\n  gap: 16px;\n}\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  flex-shrink: 0;\n}\n.logo-mark {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  position: relative;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      140deg,\n      var(--blue),\n      #3b82f6);\n  box-shadow: 0 8px 18px -6px rgba(21, 101, 216, .7);\n}\n.logo-mark:before {\n  content: "";\n  position: absolute;\n  inset: 8px;\n  border: 2.4px solid #fff;\n  border-radius: 50%;\n}\n.logo-mark:after {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 6px;\n  height: 6px;\n  background: #fff;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n}\n.brand-txt b {\n  font-family: var(--disp);\n  font-weight: 800;\n  font-size: 19px;\n  color: var(--navy);\n}\n.brand-txt b span {\n  color: var(--blue);\n}\n.brand-txt small {\n  display: block;\n  font-family: var(--mono);\n  font-size: 8px;\n  letter-spacing: .22em;\n  color: var(--slate);\n  margin-top: -1px;\n}\nnav ul {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  list-style: none;\n}\nnav a {\n  font-size: 14.5px;\n  font-weight: 500;\n  color: var(--ink);\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  position: relative;\n  padding: 4px 0;\n}\nnav a .car {\n  width: 7px;\n  height: 7px;\n  border-right: 1.6px solid var(--slate);\n  border-bottom: 1.6px solid var(--slate);\n  transform: rotate(45deg) translateY(-2px);\n  transition: .25s;\n}\nnav a:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  bottom: -2px;\n  height: 2px;\n  width: 0;\n  background: var(--blue);\n  transition: width .3s var(--ease);\n}\nnav a:hover {\n  color: var(--blue);\n}\nnav a:hover:after {\n  width: 100%;\n}\nnav a:hover .car {\n  border-color: var(--blue);\n}\n.nav-r {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n.cart-btn {\n  position: relative;\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  border: 1px solid var(--line);\n  background: #fff;\n  display: grid;\n  place-items: center;\n  cursor: pointer;\n  box-shadow: var(--shadow-s);\n  transition: .22s var(--ease);\n}\n.cart-btn:hover {\n  border-color: var(--blue);\n  transform: translateY(-2px);\n}\n.cart-btn svg {\n  width: 19px;\n  height: 19px;\n  color: var(--navy);\n}\n.cart-count {\n  position: absolute;\n  top: -7px;\n  right: -7px;\n  min-width: 19px;\n  height: 19px;\n  padding: 0 5px;\n  border-radius: 99px;\n  background: var(--orange);\n  color: #fff;\n  font-family: var(--mono);\n  font-size: 11px;\n  font-weight: 600;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 4px 10px -2px rgba(255, 140, 26, .8);\n  transform: scale(0);\n  transition: transform .3s var(--ease);\n}\n.cart-count.show {\n  transform: scale(1);\n}\n.cart-count.bump {\n  animation: bump .4s var(--ease);\n}\n@keyframes bump {\n  40% {\n    transform: scale(1.35);\n  }\n}\n.burger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  padding: 6px;\n}\n.burger span {\n  width: 24px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n  transition: .3s;\n}\n.pp-hero {\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #061634 0%,\n      #0c2b63 55%,\n      #12408f 100%);\n  padding: 60px 0 72px;\n}\n.pp-hero .grid-bg {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  opacity: .5;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .06) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      760px 560px at 80% 20%,\n      #000,\n      transparent 72%);\n  -webkit-mask-image:\n    radial-gradient(\n      760px 560px at 80% 20%,\n      #000,\n      transparent 72%);\n  animation: gridmove 32s linear infinite;\n}\n@keyframes gridmove {\n  to {\n    background-position: 48px 48px;\n  }\n}\n.aurora {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(70px);\n  z-index: 0;\n  pointer-events: none;\n  opacity: .4;\n}\n.aurora.a1 {\n  width: 420px;\n  height: 420px;\n  background:\n    radial-gradient(\n      circle,\n      #2f6bff,\n      transparent 65%);\n  top: -100px;\n  right: 6%;\n  animation: aflow1 12s ease-in-out infinite;\n}\n.aurora.a2 {\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      #ff8c1a,\n      transparent 65%);\n  bottom: -60px;\n  right: 26%;\n  animation: aflow2 14s ease-in-out infinite;\n}\n@keyframes aflow1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-30px, 24px) scale(1.12);\n  }\n}\n@keyframes aflow2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(26px, -20px) scale(1.15);\n  }\n}\n#net {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .6;\n}\n.pp-hero .wrap {\n  position: relative;\n  z-index: 3;\n}\n.pp-crumb {\n  font-family: var(--mono);\n  font-size: 12px;\n  color: #9fb6de;\n  margin-bottom: 22px;\n}\n.pp-crumb a:hover {\n  color: #fff;\n}\n.pp-crumb .cur {\n  color: #fff;\n}\n.hero-inner {\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  gap: 44px;\n  align-items: center;\n}\n.pp-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  font-weight: 500;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #bcd4ff;\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .16);\n  padding: 7px 14px;\n  border-radius: 99px;\n}\n.pp-eyebrow .dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #5FE08D;\n  animation: cbpulse 2s infinite;\n}\n@keyframes cbpulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(95, 224, 141, .5);\n  }\n  70% {\n    box-shadow: 0 0 0 9px rgba(95, 224, 141, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(95, 224, 141, 0);\n  }\n}\n.pp-hero h1 {\n  color: #fff;\n  font-size: clamp(30px, 4vw, 46px);\n  font-weight: 800;\n  margin: 20px 0 8px;\n  line-height: 1.08;\n}\n.pp-hero h1 .brand-line {\n  display: block;\n  font-family: var(--mono);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: .06em;\n  color: #7fb0ff;\n  margin-bottom: 10px;\n  text-transform: none;\n}\n.pp-hero h1 .serif {\n  color: #ffd9ac;\n  font-weight: 400;\n}\n.pp-hero .sub {\n  font-size: 16.5px;\n  color: #c9d8f2;\n  max-width: 520px;\n  margin: 14px 0 22px;\n}\n.pp-badges {\n  display: flex;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.pp-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 12px;\n  color: #dbe7fb;\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .16);\n  padding: 7px 13px;\n  border-radius: 99px;\n}\n.pp-badge svg {\n  width: 14px;\n  height: 14px;\n  color: #7fb0ff;\n}\n.pp-badge.hi {\n  background: rgba(255, 140, 26, .16);\n  border-color: rgba(255, 140, 26, .4);\n  color: #ffd9ac;\n}\n.pp-badge.hi svg {\n  color: #ffb05a;\n}\n.hero-cta {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.ssl-stage {\n  position: relative;\n  min-height: 380px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.orbit-ring {\n  position: absolute;\n  inset: 6% 8%;\n  border: 1.5px dashed rgba(127, 176, 255, .3);\n  border-radius: 50%;\n  z-index: 0;\n  animation: orbit 40s linear infinite;\n}\n.orbit-ring:after {\n  content: "";\n  position: absolute;\n  top: -5px;\n  left: 50%;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: var(--orange);\n  box-shadow: 0 0 12px var(--orange);\n}\n@keyframes orbit {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.browser {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-width: 430px;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  animation: scfloat 6s ease-in-out infinite;\n}\n@keyframes scfloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-11px);\n  }\n}\n.browser .bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 14px;\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.browser .dots {\n  display: flex;\n  gap: 5px;\n}\n.browser .dots i {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #cdd8ea;\n  display: block;\n}\n.browser .url {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  padding: 6px 10px;\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--navy);\n}\n.browser .url .lock {\n  color: var(--green);\n}\n.browser .url .lock svg {\n  width: 12px;\n  height: 12px;\n}\n.browser .url b {\n  color: var(--green);\n}\n.browser .body {\n  position: relative;\n  height: 220px;\n  background:\n    linear-gradient(\n      160deg,\n      #08163a,\n      #123776 60%,\n      #1c56c8);\n  overflow: hidden;\n}\n.browser .body .scanline {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100px;\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(90, 150, 255, .28),\n      transparent);\n  animation: pphscan 4.5s var(--ease) infinite;\n}\n@keyframes pphscan {\n  0% {\n    top: -100px;\n  }\n  100% {\n    top: 100%;\n  }\n}\n.seal {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 126px;\n  height: 126px;\n}\n.seal .ring {\n  animation: orbit 24s linear infinite;\n  transform-origin: 63px 63px;\n}\n.seal .lens-glow {\n  animation: lensGlow 2.4s ease-in-out infinite;\n}\n@keyframes lensGlow {\n  0%, 100% {\n    opacity: .55;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.float-card {\n  position: absolute;\n  background: #fff;\n  border-radius: 13px;\n  box-shadow: var(--shadow);\n  padding: 11px 14px;\n  z-index: 4;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.float-card .fi {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.float-card .fi svg {\n  width: 17px;\n  height: 17px;\n}\n.float-card b {\n  font-family: var(--disp);\n  font-size: 13px;\n  color: var(--navy);\n  display: block;\n  line-height: 1.2;\n}\n.float-card span {\n  font-family: var(--mono);\n  font-size: 10px;\n  color: var(--slate);\n}\n.fc-secured {\n  left: -30px;\n  top: 36%;\n  animation: scfloat 7s ease-in-out infinite;\n}\n.fc-secured .fi {\n  background: #e4f7ec;\n  color: var(--green);\n}\n.fc-warranty {\n  right: -26px;\n  bottom: 12%;\n  animation: scfloat 8s ease-in-out infinite;\n}\n.fc-warranty .fi {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.fc-issued {\n  right: -26px;\n  top: 2%;\n  animation: scfloat 6.5s ease-in-out infinite;\n}\n.fc-issued .fi {\n  background: #fff3e0;\n  color: var(--orange);\n}\n.pp-trust {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust .wrap {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust b {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.pp-body {\n  padding: 26px 0 28px 0;\n}\n.pp-sec {\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 26px 0 16px 0;\n}\n.pp-sec:first-child {\n  margin-top: 0;\n}\n.pp-ov {\n  font-size: 16.5px;\n  color: var(--ink);\n  line-height: 1.75;\n  max-width: 75ch;\n}\n.pp-ov + .pp-ov {\n  margin-top: 14px;\n}\n.pp-ov b {\n  color: var(--navy);\n}\n.pp-overview {\n  padding: 28px 32px 30px;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff 0%,\n      #f7faff 100%);\n  box-shadow: var(--shadow-s);\n}\n.pp-overview .pp-sec {\n  margin: 0 0 20px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--line);\n}\n.pp-overview-copy {\n  display: grid;\n  grid-template-columns: minmax(0, 1.3fr) minmax(0, .9fr);\n  gap: 40px;\n  align-items: start;\n}\n.pp-overview .pp-ov {\n  max-width: none;\n  margin: 0;\n  font-size: 15.5px;\n  line-height: 1.75;\n}\n.pp-vgrid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  margin-top: 8px;\n}\n.vcard {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px;\n  box-shadow: var(--shadow-s);\n  transition: .3s var(--ease);\n}\n.vcard:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow);\n  border-color: #c9dcfb;\n}\n.vcard .vb {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 12px;\n  font-weight: 600;\n  padding: 6px 12px;\n  border-radius: 99px;\n  margin-bottom: 16px;\n}\n.vcard.dv .vb {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.vcard.ov .vb {\n  background: #eaeff9;\n  color: #2b4a8f;\n}\n.vcard.ev .vb {\n  background: #fff3e0;\n  color: var(--orange-d);\n}\n.vcard.wildcard .vb {\n  background: #edf8f3;\n  color: #18754c;\n}\n.vcard.multi .vb {\n  background: #f3edff;\n  color: #7041ab;\n}\n.vcard .vb svg {\n  width: 14px;\n  height: 14px;\n}\n.vcard h3 {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n.vcard p {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 16px;\n}\n.vcard ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.vcard li {\n  display: flex;\n  gap: 9px;\n  font-size: 13px;\n  color: var(--ink);\n}\n.vcard li .ck,\n.pfeat li .ck {\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  background: #e4f7ec;\n  color: var(--green);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.vcard li .ck svg,\n.pfeat li .ck svg {\n  width: 10px;\n  height: 10px;\n}\n.geotrust-videos .tally-video-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 24px;\n}\n.geotrust-videos .geotrust-video-placeholder {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #081d3e,\n      #154780);\n  color: #fff;\n}\n.geotrust-video-placeholder svg {\n  width: 36px;\n  height: 36px;\n  opacity: .65;\n}\n.geotrust-video-placeholder p {\n  margin: 0;\n  color: #dce9ff;\n  font-size: 14px;\n}\n@media (max-width: 900px) {\n  .geotrust-videos .tally-video-grid {\n    grid-template-columns: 1fr;\n    max-width: 580px;\n    margin-inline: auto;\n  }\n}\n.filter {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin: 8px 0 26px;\n}\n.fchip {\n  font-family: var(--mono);\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--slate);\n  background: #fff;\n  border: 1px solid var(--line);\n  padding: 9px 18px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .22s var(--ease);\n}\n.fchip:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.fchip.on {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  border-color: transparent;\n  box-shadow: 0 10px 22px -10px rgba(21, 101, 216, .7);\n}\n.pgrid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.pcard {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 22px;\n  box-shadow: var(--shadow-s);\n  display: flex;\n  flex-direction: column;\n  transition: .3s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.pcard:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: .35s var(--ease);\n}\n.pcard:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-lg);\n  border-color: #c9dcfb;\n}\n.pcard:hover:before {\n  transform: scaleX(1);\n}\n.pcard .ptop {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.tierbadge {\n  font-family: var(--mono);\n  font-size: 10.5px;\n  font-weight: 600;\n  padding: 4px 10px;\n  border-radius: 99px;\n}\n.tierbadge.dv {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.tierbadge.ov {\n  background: #eaeff9;\n  color: #2b4a8f;\n}\n.tierbadge.ev {\n  background: #fff3e0;\n  color: var(--orange-d);\n}\n.tagchip {\n  font-family: var(--mono);\n  font-size: 10px;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  padding: 4px 9px;\n  border-radius: 99px;\n}\n.pcard h3 {\n  font-size: 16px;\n  margin-bottom: 6px;\n  min-height: 42px;\n}\n.product-detail-link:hover,\n.product-detail-link:focus-visible {\n  color: var(--blue);\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.pcard .pdesc {\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 12px;\n  min-height: 34px;\n}\n.pmeta {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 12px;\n  font-size: 11.5px;\n}\n.pmeta span {\n  color: var(--slate);\n  display: block;\n}\n.pmeta b {\n  font-family: var(--disp);\n  font-size: 13px;\n  color: var(--navy);\n}\n.pfeat {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  margin-bottom: 16px;\n}\n.pfeat li {\n  display: flex;\n  gap: 9px;\n  font-size: 12.5px;\n  color: var(--ink);\n}\n.pprice {\n  margin-top: auto;\n  padding-top: 14px;\n  border-top: 1px solid var(--line);\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.pprice .from {\n  font-size: 11px;\n  color: var(--slate);\n  display: block;\n}\n.pprice .amt {\n  font-family: var(--disp);\n  font-size: 23px;\n  font-weight: 800;\n  color: var(--navy);\n}\n.pprice .yr {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--slate);\n}\n.pprice .save {\n  font-family: var(--mono);\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--green);\n  background: #e4f7ec;\n  padding: 4px 9px;\n  border-radius: 99px;\n}\n.pcard .btn {\n  width: 100%;\n}\n.certificate-quantity {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0 0 12px;\n  border: 1px solid var(--line);\n  border-radius: 9px;\n  background: #f7faff;\n  overflow: hidden;\n}\n.certificate-quantity button {\n  width: 44px;\n  height: 40px;\n  border: 0;\n  background: transparent;\n  color: var(--blue);\n  font-size: 20px;\n  cursor: pointer;\n}\n.certificate-quantity button:disabled {\n  opacity: .4;\n  cursor: not-allowed;\n}\n.certificate-quantity button:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: -3px;\n}\n.certificate-quantity :is(output, input[xhQuantityInput]) {\n  font-size: 14px;\n  font-weight: 700;\n  color: var(--navy);\n}\n.pv-note {\n  margin-top: 16px;\n  font-size: 13px;\n  color: var(--slate);\n  font-family: var(--mono);\n}\n.pp-tablewrap {\n  overflow-x: auto;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  margin-top: 8px;\n}\n.pp-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 640px;\n}\n.pp-table th {\n  background: var(--ice);\n  font: 600 11.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--slate);\n  text-align: left;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--line);\n}\n.pp-table th:not(:first-child) {\n  text-align: center;\n}\n.pp-table td {\n  padding: 13px 18px;\n  border-bottom: 1px solid var(--line);\n  font-size: 13.5px;\n  color: var(--ink);\n}\n.pp-table td:not(:first-child) {\n  text-align: center;\n}\n.pp-table tr:last-child td {\n  border-bottom: none;\n}\n.pp-table td:first-child {\n  font-weight: 600;\n  color: var(--navy);\n}\n.pp-table .yes {\n  color: var(--green);\n  font-weight: 700;\n}\n.pp-table .no {\n  color: #c3ccdb;\n}\n.pp-table thead th:nth-child(4) {\n  color: var(--orange-d);\n}\n.pp-addons {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.pp-addon {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.pp-addon:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .08);\n  transform: translateY(-4px);\n}\n.pp-addon .aic {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  margin-bottom: 10px;\n}\n.pp-addon .aic svg {\n  width: 18px;\n  height: 18px;\n}\n.pp-addon b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14px;\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.pp-addon p {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-feats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: 8px;\n}\n.pp-feat {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px 20px;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  transition: .2s var(--ease);\n  background: #fff;\n}\n.pp-feat:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 22px rgba(21, 101, 216, .1);\n  transform: translateY(-4px);\n}\n.pp-feat .fic {\n  flex: none;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n}\n.pp-feat .fic svg {\n  width: 19px;\n  height: 19px;\n}\n.pp-feat b {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 3px;\n}\n.pp-feat p {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-bens {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.pb {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.pb:hover {\n  border-color: var(--blue);\n  box-shadow: var(--shadow-s);\n  transform: translateY(-4px);\n}\n.pb .ic {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.pb .ic svg {\n  width: 20px;\n  height: 20px;\n}\n.pb b {\n  font-family: var(--disp);\n  font-size: 14px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 4px;\n}\n.pb p {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-auto {\n  margin-top: 16px;\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      #123776 60%,\n      var(--blue));\n  border-radius: 20px;\n  padding: 34px;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 30px;\n  align-items: center;\n  box-shadow: var(--shadow-lg);\n}\n.pp-auto:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .5;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  animation: gridmove 30s linear infinite;\n}\n.pp-auto .glow {\n  position: absolute;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 140, 26, .4),\n      transparent 65%);\n  filter: blur(30px);\n  right: -40px;\n  top: -60px;\n  animation: aflow2 12s ease-in-out infinite;\n}\n.pp-auto .al {\n  position: relative;\n  z-index: 2;\n}\n.pp-auto .tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #ffd9ac;\n  background: rgba(255, 140, 26, .16);\n  border: 1px solid rgba(255, 140, 26, .35);\n  padding: 6px 12px;\n  border-radius: 99px;\n  margin-bottom: 14px;\n}\n.pp-auto h3 {\n  color: #fff;\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.pp-auto p {\n  color: #c9d8f2;\n  font-size: 14.5px;\n  margin-bottom: 16px;\n  max-width: 46ch;\n}\n.pp-auto ul {\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 9px;\n}\n.pp-auto li {\n  display: flex;\n  gap: 8px;\n  font-size: 13px;\n  color: #e7eefb;\n}\n.pp-auto li .k {\n  color: #5FE08D;\n  flex: none;\n}\n.pp-auto .ar-visual {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.pp-auto .ar-explore {\n  align-self: center;\n  width: auto;\n  padding: 7px 16px;\n  font-size: 13px;\n  border-radius: 8px;\n}\n.ar-step {\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .14);\n  border-radius: 12px;\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 13px;\n  color: #fff;\n}\n.ar-step .n {\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  background: var(--orange);\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.ar-step.done .n {\n  background: var(--ok);\n}\n.pp-uses {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 8px;\n}\n.pu {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.pu:hover {\n  border-color: var(--blue);\n  box-shadow: var(--shadow-s);\n  transform: translateY(-4px);\n}\n.pu-ic {\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: var(--ice);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.pu-ic svg {\n  width: 30px;\n  height: 30px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.pu b {\n  font-family: var(--disp);\n  font-size: 14px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 3px;\n}\n.pu span {\n  font-size: 12.3px;\n  color: var(--slate);\n}\n.pp-secrows {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 34px;\n  margin-top: 8px;\n}\n.psr {\n  display: flex;\n  gap: 13px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--line);\n}\n.psr .si {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.psr .si svg {\n  width: 19px;\n  height: 19px;\n}\n.psr b {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 3px;\n}\n.psr p {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-why {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-top: 8px;\n}\n.pw {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 20px;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.pw:hover {\n  border-color: var(--blue);\n  box-shadow: var(--shadow-s);\n  transform: translateY(-4px);\n}\n.pw-ic {\n  width: 42px;\n  height: 42px;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  margin-bottom: 12px;\n}\n.pw-ic svg {\n  width: 21px;\n  height: 21px;\n}\n.pw b {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  display: block;\n  margin-bottom: 4px;\n}\n.pw p {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-tcards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-top: 8px;\n}\n.tcard {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 24px;\n  background: #fff;\n  position: relative;\n  box-shadow: var(--shadow-s);\n  transition: .25s var(--ease);\n}\n.tcard:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow);\n}\n.quote-badge {\n  position: absolute;\n  top: 14px;\n  right: 20px;\n  font-family: var(--disp);\n  font-size: 48px;\n  line-height: 1;\n  color: var(--blue-soft);\n}\n.tav {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 15px;\n  margin-bottom: 12px;\n}\n.tname {\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--navy);\n}\n.trole {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--slate);\n  margin-bottom: 8px;\n}\n.tstars {\n  color: var(--orange);\n  font-size: 13px;\n  margin-bottom: 10px;\n  letter-spacing: 2px;\n}\n.tcard p {\n  font-size: 13px;\n  color: var(--ink);\n  line-height: 1.6;\n}\n.pp-faq {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n  margin-top: 8px;\n}\n.faq2 {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  transition: border-color .25s, box-shadow .25s;\n  align-self: start;\n}\n.faq2.open {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n}\n.faq2-ic {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: .28s var(--ease);\n}\n.faq2.open .faq2-ic {\n  background: var(--blue);\n  color: #fff;\n  transform: rotate(45deg);\n}\n.faq2-a {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s var(--ease);\n}\n.faq2-a p {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.site-foot {\n  background:\n    linear-gradient(\n      180deg,\n      #1C6BE0 0%,\n      #1257C4 45%,\n      #0E4CAB 100%);\n  color: #e8f0fd;\n  position: relative;\n  overflow: hidden;\n  padding-top: 44px;\n}\n.site-foot:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .4;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .05) 1px,\n      transparent 1px);\n  background-size: 44px 44px;\n  pointer-events: none;\n}\n.site-foot .wrap {\n  position: relative;\n  z-index: 2;\n}\n.site-foot a {\n  color: rgba(255, 255, 255, .82);\n  transition: .18s;\n}\n.site-foot a:hover {\n  color: #fff;\n}\n.nl-panel {\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      var(--navy-2));\n  border-radius: 18px;\n  padding: 26px 34px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  flex-wrap: wrap;\n  text-align: left;\n  box-shadow: var(--shadow-lg);\n  margin-bottom: 40px;\n}\n.nl-panel h2 {\n  color: #fff;\n  font-size: clamp(17px, 2vw, 22px);\n  margin: 0;\n  max-width: 46ch;\n  flex: 1 1 340px;\n}\n.nl-form {\n  display: flex;\n  gap: 0;\n  flex-wrap: wrap;\n  flex: 1 1 380px;\n  max-width: 520px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 6px;\n  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, .4);\n}\n.nl-form input {\n  flex: 1;\n  min-width: 200px;\n  border: 0;\n  padding: 12px 16px;\n  font-family: var(--body);\n  font-size: 14px;\n  color: var(--ink);\n  background: transparent;\n}\n.nl-form input:focus {\n  outline: none;\n}\n.nl-form .btn {\n  white-space: nowrap;\n}\n.foot-top {\n  display: grid;\n  grid-template-columns: 1fr 1.55fr;\n  gap: 44px;\n  padding: 6px 0 34px;\n}\n.foot-brand .brand {\n  margin-bottom: 16px;\n}\n.foot-brand .brand .brand-txt b {\n  color: #fff;\n}\n.foot-brand .brand .brand-txt small {\n  color: #bcd0f2;\n}\n.foot-tag {\n  font-size: 14px;\n  color: #fff;\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.foot-sub {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: #bcd0f2;\n  margin-bottom: 16px;\n  letter-spacing: .02em;\n}\n.foot-desc {\n  font-size: 12.7px;\n  line-height: 1.7;\n  color: #d6e3f8;\n  max-width: 60ch;\n  margin-bottom: 20px;\n}\n.foot-desc b {\n  color: #fff;\n}\n.socials {\n  display: flex;\n  gap: 9px;\n  flex-wrap: wrap;\n}\n.socials a {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  transition: .22s var(--ease);\n}\n.socials a:hover {\n  transform: translateY(-3px);\n}\n.socials a svg {\n  width: 16px;\n  height: 16px;\n}\n.socials .s-li {\n  background: #0A66C2;\n}\n.socials .s-yt {\n  background: #FF0000;\n}\n.socials .s-th {\n  background: #000;\n}\n.socials .s-pi {\n  background: #E60023;\n}\n.socials .s-fb {\n  background: #1877F2;\n}\n.socials .s-x {\n  background: #000;\n}\n.socials .s-rd {\n  background: #FF4500;\n}\n.socials .s-pl {\n  background: #2ECC71;\n}\n.foot-links {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.flrow {\n  display: grid;\n  grid-template-columns: 132px 1fr;\n  gap: 14px;\n  align-items: start;\n  padding-bottom: 14px;\n  border-bottom: 1px solid rgba(255, 255, 255, .1);\n}\n.flrow:last-child {\n  border-bottom: none;\n}\n.fl-label {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  font-weight: 700;\n  color: #fff;\n}\n.fl-items {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 20px;\n}\n.fl-items a {\n  font-size: 12.8px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.fl-items a:before {\n  content: "\\203a";\n  color: #8fb6f0;\n  font-weight: 700;\n}\n.fl-items .hiring {\n  background: #e11d48;\n  color: #fff;\n  font-weight: 600;\n  padding: 3px 12px;\n  border-radius: 6px;\n}\n.fl-items .hiring:before {\n  content: none;\n}\n.fl-items .hiring:hover {\n  background: #be123c;\n}\n.foot-strip {\n  display: grid;\n  grid-template-columns: 132px 1fr;\n  gap: 14px;\n  align-items: center;\n  padding: 20px 0;\n  border-top: 1px solid rgba(255, 255, 255, .12);\n}\n.fs-label {\n  font-family: var(--disp);\n  font-size: 14.5px;\n  font-weight: 700;\n  color: #fff;\n}\n.cert-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.cert {\n  width: 76px;\n  height: 66px;\n  border-radius: 10px;\n  background: rgba(4, 30, 66, .5);\n  border: 1px solid rgba(255, 255, 255, .14);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  line-height: 1.1;\n}\n.cert small {\n  font-family: var(--mono);\n  font-size: 8px;\n  letter-spacing: .12em;\n  color: #9fc0f2;\n}\n.cert b {\n  font-family: var(--disp);\n  font-size: 14px;\n  color: #fff;\n  margin: 1px 0;\n}\n.cert em {\n  font-family: var(--mono);\n  font-size: 7px;\n  letter-spacing: .14em;\n  color: #8fb6f0;\n  font-style: normal;\n}\n.pay-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.pay-pills span {\n  background: #fff;\n  color: var(--navy);\n  font-weight: 600;\n  font-size: 11.5px;\n  padding: 8px 14px;\n  border-radius: 8px;\n  font-family: var(--body);\n}\n.prot-badges {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.prot {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 16px;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.prot.sitelock {\n  background: #0b1220;\n  color: #fff;\n}\n.prot.sitelock .lk {\n  color: #2ECC71;\n}\n.prot.sitelock b {\n  color: #2ECC71;\n}\n.prot.rev {\n  background: #fff;\n  color: var(--navy);\n}\n.prot.rev .st {\n  color: var(--orange);\n  letter-spacing: 1px;\n}\n.partner-band {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  background: rgba(255, 255, 255, .09);\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 16px;\n  padding: 26px 30px;\n  margin: 24px 0;\n}\n.partner-band h3 {\n  color: #fff;\n  font-size: 22px;\n  margin-bottom: 5px;\n}\n.partner-band p {\n  color: #d6e3f8;\n  font-size: 13.5px;\n  max-width: 52ch;\n}\n.foot-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 20px 0 26px;\n  border-top: 1px solid rgba(255, 255, 255, .14);\n}\n.foot-bottom p {\n  font-size: 12.5px;\n  color: #cfe0f9;\n}\n.foot-bottom .creds {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: #9fc0f2;\n  letter-spacing: .03em;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 200;\n  background: rgba(4, 18, 42, .55);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .3s, visibility .3s;\n}\n.overlay.open {\n  opacity: 1;\n  visibility: visible;\n}\n.modal {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  z-index: 210;\n  width: min(860px, 94vw);\n  max-height: 92vh;\n  transform: translate(-50%, -46%);\n  opacity: 0;\n  visibility: hidden;\n  background: #fff;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 50px 120px -30px rgba(4, 18, 42, .6);\n  transition:\n    opacity .32s var(--ease),\n    transform .32s var(--ease),\n    visibility .32s;\n  display: flex;\n  flex-direction: column;\n}\n.modal.open {\n  opacity: 1;\n  visibility: visible;\n  transform: translate(-50%, -50%);\n}\n.modal-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 20px 26px;\n  background:\n    linear-gradient(\n      120deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n}\n.modal-head h3 {\n  color: #fff;\n  font-size: 20px;\n}\n.modal-close {\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  border: 0;\n  background: rgba(255, 255, 255, .18);\n  color: #fff;\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: .2s;\n  flex-shrink: 0;\n}\n.modal-close:hover {\n  background: rgba(255, 255, 255, .32);\n  transform: rotate(90deg);\n}\n.modal-close svg {\n  width: 18px;\n  height: 18px;\n}\n.modal-body {\n  display: grid;\n  grid-template-columns: 1.35fr 1fr;\n  gap: 24px;\n  padding: 24px 26px;\n  overflow-y: auto;\n}\n.terms {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.term {\n  position: relative;\n  display: flex;\n  gap: 13px;\n  align-items: flex-start;\n  padding: 15px 16px;\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  cursor: pointer;\n  transition: .2s var(--ease);\n  background: #fff;\n}\n.term:hover {\n  border-color: #c9dcfb;\n  background: #fbfcff;\n}\n.term.sel {\n  border-color: var(--blue);\n  background: var(--blue-soft);\n}\n.term .radio {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid #b9c6dd;\n  flex-shrink: 0;\n  margin-top: 2px;\n  position: relative;\n  transition: .2s;\n}\n.term.sel .radio {\n  border-color: var(--blue);\n}\n.term.sel .radio:after {\n  content: "";\n  position: absolute;\n  inset: 3px;\n  border-radius: 50%;\n  background: var(--blue);\n}\n.term .tinfo b {\n  font-family: var(--disp);\n  font-size: 15px;\n  color: var(--navy);\n}\n.term .tsub {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-top: 3px;\n  line-height: 1.5;\n}\n.term .tsub .list {\n  text-decoration: line-through;\n  color: #9aa8c2;\n}\n.term .tsub .sv {\n  color: var(--green);\n  font-weight: 600;\n}\n.term .tsub .off {\n  color: var(--orange-d);\n  font-weight: 600;\n}\n.term .best {\n  position: absolute;\n  right: 0;\n  top: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  font-family: var(--mono);\n  font-size: 9.5px;\n  font-weight: 600;\n  padding: 5px 12px 5px 14px;\n  border-radius: 99px 0 0 99px;\n}\n.config {\n  display: flex;\n  flex-direction: column;\n}\n.gt-logo {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n.gt-logo .seal-sm {\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  display: grid;\n  place-items: center;\n  color: #fff;\n}\n.gt-logo .seal-sm svg {\n  width: 17px;\n  height: 17px;\n}\n.gt-logo b {\n  font-family: var(--disp);\n  font-size: 20px;\n  color: var(--navy);\n}\n.cfg-row {\n  margin-bottom: 16px;\n}\n.cfg-row label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--navy);\n  margin-bottom: 8px;\n}\n.cfg-row .q {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 10px;\n  font-weight: 700;\n  cursor: help;\n  font-family: var(--mono);\n}\n.stepper {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.stepper .san-price {\n  font-family: var(--mono);\n  font-size: 12px;\n  color: var(--slate);\n}\n.stepper .ctrl {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.stepper .ctrl button {\n  width: 32px;\n  height: 34px;\n  border: 0;\n  background: #fff;\n  color: var(--navy);\n  font-size: 17px;\n  cursor: pointer;\n  transition: .15s;\n}\n.stepper .ctrl button:hover {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.stepper .ctrl input {\n  width: 42px;\n  height: 34px;\n  border: 0;\n  border-left: 1px solid var(--line);\n  border-right: 1px solid var(--line);\n  text-align: center;\n  font-family: var(--mono);\n  font-size: 14px;\n  color: var(--navy);\n  -moz-appearance: textfield;\n}\n.stepper .ctrl input::-webkit-outer-spin-button,\n.stepper .ctrl input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.cfg-line {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 0;\n  border-top: 1px solid var(--line);\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.cfg-line b {\n  font-family: var(--disp);\n  color: var(--navy);\n}\n.total-line {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding: 14px 0;\n  border-top: 2px solid var(--line);\n}\n.total-line span {\n  font-family: var(--disp);\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--navy);\n}\n.total-line b {\n  font-family: var(--disp);\n  font-size: 28px;\n  font-weight: 800;\n  color: var(--navy);\n}\n.gsttag {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--slate);\n  text-align: right;\n  margin: -6px 0 6px;\n}\n.config .btn {\n  width: 100%;\n  margin-top: 8px;\n}\n.note {\n  grid-column: 1/-1;\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  background: #fffbe9;\n  border: 1px solid #f6e6a8;\n  border-radius: 12px;\n  padding: 14px 16px;\n}\n.note .ni {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f0d979;\n  color: #7a5c00;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.note .ni svg {\n  width: 14px;\n  height: 14px;\n}\n.note p {\n  font-size: 12.5px;\n  color: #6b5a1f;\n  line-height: 1.55;\n}\n.note a {\n  color: var(--blue);\n  font-weight: 600;\n}\n.modal-foot {\n  padding: 14px 26px;\n  border-top: 1px solid var(--line);\n  text-align: right;\n  background: var(--ice);\n}\n.modal-foot a {\n  font-family: var(--mono);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--orange-d);\n}\n.modal-foot a:hover {\n  color: var(--orange);\n}\n.cart {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 210;\n  width: min(420px, 92vw);\n  background: #fff;\n  box-shadow: -30px 0 80px -30px rgba(4, 18, 42, .5);\n  transform: translateX(100%);\n  transition: transform .34s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.cart.open {\n  transform: none;\n}\n.cart-h {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 22px;\n  border-bottom: 1px solid var(--line);\n}\n.cart-h b {\n  font-family: var(--disp);\n  font-size: 18px;\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.cart-h .modal-close {\n  background: var(--ice);\n  color: var(--navy);\n}\n.cart-h .modal-close:hover {\n  background: var(--line);\n}\n.cart-items {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px 22px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.cart-empty {\n  text-align: center;\n  color: var(--slate);\n  padding: 60px 20px;\n  font-size: 14px;\n}\n.cart-empty svg {\n  width: 48px;\n  height: 48px;\n  color: #c9d4e6;\n  margin: 0 auto 14px;\n}\n.citem {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  position: relative;\n  background: #fff;\n  animation: cin .3s var(--ease);\n}\n@keyframes cin {\n  from {\n    opacity: 0;\n    transform: translateX(14px);\n  }\n}\n.citem b {\n  font-family: var(--disp);\n  font-size: 13.5px;\n  color: var(--navy);\n  padding-right: 24px;\n}\n.citem .cm {\n  font-family: var(--mono);\n  font-size: 11px;\n  color: var(--slate);\n}\n.citem .cp {\n  font-family: var(--disp);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-top: 2px;\n}\n.citem .rm {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 22px;\n  height: 22px;\n  border-radius: 7px;\n  border: 0;\n  background: var(--ice);\n  color: var(--slate);\n  cursor: pointer;\n  display: grid;\n  place-items: center;\n  transition: .2s;\n}\n.citem .rm:hover {\n  background: #ffe4e4;\n  color: #e03131;\n}\n.citem .rm svg {\n  width: 12px;\n  height: 12px;\n}\n.cart-foot {\n  border-top: 1px solid var(--line);\n  padding: 18px 22px;\n}\n.cart-sub {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 14px;\n}\n.cart-sub span {\n  font-size: 14px;\n  color: var(--slate);\n}\n.cart-sub b {\n  font-family: var(--disp);\n  font-size: 24px;\n  font-weight: 800;\n  color: var(--navy);\n}\n.cart-foot .btn {\n  width: 100%;\n  margin-bottom: 9px;\n}\n.toast {\n  position: fixed;\n  bottom: 24px;\n  left: 50%;\n  transform: translate(-50%, 120%);\n  z-index: 230;\n  background: var(--navy);\n  color: #fff;\n  padding: 13px 20px;\n  border-radius: 12px;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: var(--shadow-lg);\n  transition: transform .35s var(--ease);\n}\n.toast.show {\n  transform: translate(-50%, 0);\n}\n.toast .tk {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--ok);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.toast .tk svg {\n  width: 13px;\n  height: 13px;\n}\n.rv {\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity .7s var(--ease), transform .7s var(--ease);\n}\n.rv.in {\n  opacity: 1;\n  transform: none;\n}\n.rv[data-d="1"] {\n  transition-delay: .06s;\n}\n.rv[data-d="2"] {\n  transition-delay: .12s;\n}\n.rv[data-d="3"] {\n  transition-delay: .18s;\n}\n.rv[data-d="4"] {\n  transition-delay: .24s;\n}\n.tilt {\n  transition: transform .2s var(--ease);\n}\n@media (max-width: 1024px) {\n  .hero-inner {\n    grid-template-columns: 1fr;\n    gap: 56px;\n  }\n  .ssl-stage {\n    max-width: 460px;\n    margin: 0 auto;\n  }\n  .orbit-ring {\n    display: none;\n  }\n  .pp-vgrid,\n  .pgrid,\n  .pp-feats,\n  .pp-why,\n  .pp-tcards,\n  .pp-addons,\n  .pp-bens,\n  .pp-uses {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pp-blog {\n    grid-template-columns: 1fr 1fr !important;\n  }\n  .pp-addons,\n  .pp-bens,\n  .pp-uses {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pp-auto {\n    grid-template-columns: 1fr;\n  }\n  .pp-auto ul {\n    grid-template-columns: 1fr 1fr;\n  }\n  .foot-top {\n    grid-template-columns: 1fr;\n    gap: 30px;\n  }\n  .pp-overview-copy {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n}\n@media (max-width: 860px) {\n  nav ul,\n  .nav .btn.desk {\n    display: none;\n  }\n  .burger {\n    display: flex;\n  }\n  nav.open ul {\n    display: flex;\n    position: absolute;\n    top: 100%;\n    left: 0;\n    right: 0;\n    flex-direction: column;\n    align-items: flex-start;\n    background: #fff;\n    padding: 20px 24px;\n    gap: 16px;\n    box-shadow: var(--shadow);\n    border-top: 1px solid var(--line);\n  }\n  .modal-body {\n    grid-template-columns: 1fr;\n  }\n  .pp-faq {\n    grid-template-columns: 1fr;\n  }\n  .pp-secrows {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .pp-vgrid,\n  .pgrid,\n  .pp-feats,\n  .pp-why,\n  .pp-tcards,\n  .pp-addons,\n  .pp-bens,\n  .pp-uses {\n    grid-template-columns: 1fr;\n  }\n  .pp-auto ul {\n    grid-template-columns: 1fr;\n  }\n  .pp-blog {\n    grid-template-columns: 1fr !important;\n  }\n  .flrow,\n  .foot-strip {\n    grid-template-columns: 1fr;\n    gap: 8px;\n  }\n  .nl-panel {\n    padding: 22px;\n  }\n  .partner-band {\n    flex-direction: column;\n    align-items: flex-start;\n    text-align: left;\n  }\n  .pp-overview {\n    padding: 22px 20px 24px;\n    border-radius: 16px;\n  }\n  .pp-overview .pp-sec {\n    font-size: 13px;\n    letter-spacing: .1em;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n    transition: none !important;\n  }\n  .rv {\n    opacity: 1;\n    transform: none;\n  }\n}\n.rv {\n  opacity: 1;\n  transform: none;\n}\n.geotrust-original-hero ::ng-deep .ppage > :not(.pp-hero):not(.pp-trust) {\n  display: none;\n}\n.pcard .ptop {\n  flex-wrap: wrap;\n}\n.pcard .geotrust-card-logo {\n  display: block;\n  width: 90px;\n  height: 26px;\n  flex: 0 0 90px;\n  margin-left: auto;\n  object-fit: contain;\n  border-radius: 4px;\n  background: #fff;\n  padding: 3px;\n  box-sizing: border-box;\n}\n/*# sourceMappingURL=geotrust-ssl-certificates.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeoTrustSslCertificatesPage, { className: "GeoTrustSslCertificatesPage", filePath: "src/app/pages/geotrust-ssl-certificates.page.ts", lineNumber: 34 });
})();
export {
  GeoTrustSslCertificatesPage
};
//# sourceMappingURL=chunk-KOUKSXWT.js.map
