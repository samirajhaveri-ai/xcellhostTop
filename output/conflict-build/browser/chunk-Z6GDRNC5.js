import {
  ProductPageService
} from "./chunk-PWY32UK5.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-3MMBSDR4.js";
import "./chunk-LN7P5EZP.js";
import "./chunk-KQWZNZVP.js";
import {
  takeUntilDestroyed
} from "./chunk-M5OSJJBF.js";
import {
  CatalogService,
  slugify
} from "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import {
  MEGA_MENU
} from "./chunk-TKO65HOC.js";
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/promo-offers.page.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.name;
function PromoOffersPage_For_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function PromoOffersPage_For_139_Template_button_click_0_listener() {
      const \u0275$index_248_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab(\u0275$index_248_r2));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const \u0275$index_248_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === \u0275$index_248_r2);
    \u0275\u0275property("id", "promo-tab-" + \u0275$index_248_r2);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab() === \u0275$index_248_r2)("aria-controls", "promo-panel-" + \u0275$index_248_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((\u0275$index_248_r2 + 1).toString().padStart(2, "0"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", category_r4.products.length, " offers");
  }
}
function PromoOffersPage_Conditional_140_For_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r5.pill);
  }
}
function PromoOffersPage_Conditional_140_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 96)(1, "span", 97);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 98)(4, "span", 99)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, PromoOffersPage_Conditional_140_For_11_Conditional_7_Template, 2, 1, "em");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 100)(11, "strong");
    \u0275\u0275text(12, "PRICING OFFER");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "span", 101);
    \u0275\u0275text(16, "Explore product & offer \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "span", 102);
    \u0275\u0275text(18, "\u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("highlighted-offer", product_r5.link === "/" + ctx_r2.highlightedProduct());
    \u0275\u0275property("routerLink", product_r5.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.icon);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r5.pill ? 7 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r5.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(product_r5.pricingOffer);
  }
}
function PromoOffersPage_Conditional_140_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "header", 92)(2, "div")(3, "span");
    \u0275\u0275text(4, "OFFERS IN THIS CATEGORY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 93);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 94);
    \u0275\u0275repeaterCreate(10, PromoOffersPage_Conditional_140_For_11_Template, 19, 8, "a", 95, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r6 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "promo-panel-" + ctx_r2.activeTab());
    \u0275\u0275attribute("aria-labelledby", "promo-tab-" + ctx_r2.activeTab());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(category_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", category_r6.products.length, " offers");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(category_r6.products);
  }
}
var POPULAR_PRODUCT_NAMES = /* @__PURE__ */ new Set([
  "tally on cloud",
  "cloud backup",
  "cloud drive",
  "advanced endpoint security (edr)",
  "microsoft 365 smb",
  "smb cyber security appliance",
  "windows hosting",
  "linux hosting",
  "wordpress hosting",
  "whatsapp for business",
  "performance cloud",
  "private cloud",
  "managed aws",
  "managed azure",
  "managed google cloud (gcp)",
  "managed kubernetes",
  "cloud sase",
  "microsoft 365",
  "google workspace",
  "business email",
  "microsoft teams",
  "zoho workplace",
  "cloud desktop",
  "azure virtual desktop",
  "microsoft 365 backup",
  "google workspace backup",
  "acronis cyber protect cloud",
  "cloud disaster recovery",
  "website backup",
  "file cloud",
  "backup cloud",
  "digicert ssl certificates",
  "sectigo ssl certificates",
  "code signing certificates",
  "enterprise dmarc",
  "email signature",
  "verified mark certificates (vmc)",
  "autonomous threat management",
  "scrutiny edr",
  "scrutiny dlp",
  "managed detection & response (mdr)",
  "extended detection & response (xdr)",
  "vapt",
  "web application firewall (waf)",
  "waap",
  "ai chat bot",
  "ai receptionist",
  "agentic ai",
  "ai app builder",
  "ai website builder",
  "ai security assessment",
  "ai security platform",
  "acronis genai protection"
]);
var PromoOffersPage = class _PromoOffersPage {
  seo = inject(SeoService);
  catalog = inject(CatalogService);
  productPages = inject(ProductPageService);
  route = inject(ActivatedRoute);
  highlightedProduct = signal("", ...ngDevMode ? [{ debugName: "highlightedProduct" }] : []);
  activeTab = signal(0, ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  categories = MEGA_MENU.filter((menu) => ["Web Presence", "Cloud", "Productivity", "Data Protection", "Digital Trust", "Security", "AI"].includes(menu.label)).map((menu) => {
    const seen = /* @__PURE__ */ new Set();
    const products = [];
    for (const tab of menu.tabs)
      for (const group of tab.groups)
        for (const item of group.items) {
          const name = item.title.trim();
          if (!name || name === "No Data" || seen.has(name.toLowerCase()))
            continue;
          seen.add(name.toLowerCase());
          const entry = this.catalog.findInDirectory(name);
          products.push({ name, description: item.desc ?? entry?.desc ?? `Explore ${name} features, plans and solutions.`, pill: item.pill, link: item.href ?? `/${slugify(entry?.name ?? name)}`, icon: this.productIcon(name), pricingOffer: this.pricingOffer(entry?.name ?? name) });
        }
    const isPopular = (product) => POPULAR_PRODUCT_NAMES.has(product.name.toLowerCase()) || /top seller|best seller|popular|high demand/i.test(product.pill ?? "");
    const popular = products.sort((a, b) => Number(isPopular(b)) - Number(isPopular(a)));
    return { label: menu.label, products: popular };
  }).filter((category) => category.products.length > 0);
  activeCategory = computed(() => this.categories[this.activeTab()] ?? this.categories[0], ...ngDevMode ? [{ debugName: "activeCategory" }] : []);
  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const product = params.get("product") ?? "";
      this.highlightedProduct.set(product);
      const index = this.categories.findIndex((category) => category.products.some((item) => item.link.replace(/^\/+|\/+$/g, "") === product));
      if (index >= 0)
        this.activeTab.set(index);
    });
    this.seo.set("Promos & Offers - XcellHost", "Browse XcellHost cloud, security, productivity and digital trust products and open their dedicated product pages.", "/promotion-and-offers/");
  }
  selectTab(index) {
    this.activeTab.set(index);
  }
  pricingOffer(name) {
    if (["Tally on Cloud", "Cloud Drive", "Cloud Backup", "SMB Cloud Desktop"].includes(name)) {
      return "Save 5% on 3 months, 7.5% on 6 months and 10% on annual billing.";
    }
    if (name === "SMB Cyber Security Appliance") {
      return "Licence savings: 10% for 2 years, 15% for 3 years and 20% for 5 years.";
    }
    const plans = this.productPages.build({ name }).plans.filter((plan2) => !plan2.quoteOnly && /[0-9]/.test(plan2.amount));
    if (!plans.length)
      return "Request product-specific pricing for your requirements.";
    const plan = plans.find((item) => item.hot) ?? plans[0];
    return `${plan.amount}${plan.unit} ? ${plan.term}${plan.tag ? " ? " + plan.tag : ""}`;
  }
  productIcon(name) {
    return name.split(/\s+/).filter((word) => /^[a-z0-9]/i.test(word)).slice(0, 2).map((word) => word[0].toUpperCase()).join("");
  }
  static \u0275fac = function PromoOffersPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromoOffersPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromoOffersPage, selectors: [["xh-promo-offers-page"]], hostAttrs: [2, "display", "contents"], decls: 141, vars: 1, consts: [[1, "promo-page"], ["aria-labelledby", "promo-title", 1, "promo-hero"], [1, "wrap", "promo-hero-grid"], [1, "promo-hero-copy"], ["aria-label", "Breadcrumb", 1, "promo-crumb"], ["routerLink", "/"], ["aria-hidden", "true"], [1, "promo-kicker"], ["id", "promo-title"], [1, "promo-hero-line"], ["aria-label", "Offer benefits", 1, "promo-hero-points"], [1, "promo-hero-actions"], ["routerLink", "/promotion-and-offers", "fragment", "promo-catalogue", 1, "promo-primary-action"], ["routerLink", "/contact", 1, "promo-secondary-action"], [1, "promo-hero-links"], ["routerLink", "/company/certifications-awards"], ["routerLink", "/company/awards"], ["aria-hidden", "true", 1, "promo-hero-visual"], [1, "promo-blast-glow"], ["viewBox", "0 0 560 410", "fill", "none", 1, "promo-blast-effect"], ["id", "promoBlastGradient"], ["stop-color", "#ffb14a"], ["offset", ".45", "stop-color", "#fff0b7"], ["offset", "1", "stop-color", "#63dfff"], ["id", "promoLightSweep"], ["stop-color", "#cff5ff", "stop-opacity", "0"], ["offset", ".5", "stop-color", "#e7fbff", "stop-opacity", ".24"], ["offset", "1", "stop-color", "#cff5ff", "stop-opacity", "0"], ["id", "promoSweepClip"], ["cx", "280", "cy", "205", "rx", "195", "ry", "150"], ["clip-path", "url(#promoSweepClip)"], ["d", "M40 10H120L350 400H270Z", "fill", "url(#promoLightSweep)", 1, "promo-light-sweep"], ["fill", "#86e8ff", 1, "promo-orbit-particles"], ["cx", "280", "cy", "34", "r", "4"], ["cx", "280", "cy", "376", "r", "3"], ["d", "M250 37Q263 34 273 34", "stroke", "#86e8ff", "stroke-width", "2", "stroke-linecap", "round", "stroke-opacity", ".5"], ["fill", "#ffce7b", 1, "promo-orbit-particles", "promo-orbit-particles-gold"], ["cx", "450", "cy", "205", "r", "4"], ["cx", "110", "cy", "205", "r", "2.5"], ["d", "M445 173Q450 187 450 198", "stroke", "#ffce7b", "stroke-width", "2", "stroke-linecap", "round", "stroke-opacity", ".5"], ["fill", "#abebff", 1, "promo-floating-motes"], ["cx", "156", "cy", "141", "r", "1.5"], ["cx", "392", "cy", "92", "r", "2"], ["cx", "466", "cy", "234", "r", "1.5"], ["cx", "151", "cy", "279", "r", "2"], ["cx", "334", "cy", "330", "r", "1.5"], ["stroke", "url(#promoBlastGradient)", "stroke-width", "2.5", "stroke-linecap", "round", 1, "promo-energy-arcs"], ["d", "M140 82Q280 5 420 82M469 118Q526 207 474 292M425 341Q286 405 156 344M98 285Q55 196 113 113"], ["stroke", "#78e4ff", "stroke-width", "2", 1, "promo-blast-wave", "promo-blast-wave-follow"], ["cx", "280", "cy", "205", "r", "92"], ["cx", "280", "cy", "205", "r", "108", "stroke", "#fff0b7", "stroke-width", "1"], ["stroke", "#ffc365", "stroke-width", "2", 1, "promo-blast-wave"], ["cx", "280", "cy", "205", "r", "105"], ["cx", "280", "cy", "205", "r", "124", "stroke", "#75dcff", "stroke-width", "1", "stroke-opacity", ".65"], ["stroke", "#ffd48a", "stroke-width", "4", "stroke-linecap", "round", 1, "promo-blast-rays"], ["d", "M280 60V82M374 89L361 106M436 166L415 172M430 261L410 252M369 329L354 310M280 352V330M191 326L204 309M126 259L148 250M125 157L147 164M191 84L204 105"], ["stroke-width", "3", "stroke-linecap", "round", 1, "promo-blast-sparks"], ["d", "M93 112L101 119M452 112L447 123M469 292L459 287M93 300L101 291M330 44L333 54", "stroke", "#ffb65e"], ["d", "M131 67L138 73M465 206H475M181 355L189 348M390 362L383 354", "stroke", "#67d9ff"], ["fill", "#ffd48a"], ["cx", "228", "cy", "57", "r", "3"], ["cx", "476", "cy", "153", "r", "3"], ["cx", "339", "cy", "362", "r", "3"], [1, "promo-burst-confetti"], ["fill", "#ffbc5e"], ["d", "M111 153L119 147L125 156L117 162ZM404 64L412 68L407 79L399 75ZM431 322L440 317L446 326L437 332Z"], ["cx", "172", "cy", "49", "r", "4"], ["cx", "470", "cy", "251", "r", "4"], ["fill", "#6dddff"], ["d", "M155 303L162 299L168 311L161 315ZM473 84L483 85L482 91L472 90ZM258 366L268 364L270 371L260 373Z"], ["cx", "106", "cy", "232", "r", "3"], ["fill", "#80edc8"], ["d", "M225 58L229 51L237 56L233 63ZM420 274L428 271L432 281L424 284Z"], ["cx", "345", "cy", "352", "r", "3"], ["stroke", "#fff0bd", "stroke-width", "2", "stroke-linecap", "round", 1, "promo-burst-stars"], ["d", "M128 99V113M121 106H135M440 197V213M432 205H448M209 344V356M203 350H215M363 52V64M357 58H369"], [1, "promo-visual-orbit"], ["src", "/assets/images/promo-offers-hero-v2.png", "alt", "", 1, "promo-main-visual"], [1, "promo-moving-logo", "logo-xcellhost"], ["src", "/assets/images/xcellhost-logo.png", "alt", ""], [1, "promo-moving-logo", "logo-acronis"], ["src", "/assets/images/product-brands-acronis.png", "alt", ""], [1, "promo-moving-logo", "logo-value"], ["id", "promo-catalogue", "aria-labelledby", "catalogue-title", 1, "promo-catalogue"], [1, "wrap"], [1, "promo-heading"], ["id", "catalogue-title"], [1, "promo-tabs-layout"], ["role", "tablist", "aria-label", "Product categories", 1, "promo-tabs"], ["type", "button", "role", "tab", 3, "id", "active"], ["role", "tabpanel", 1, "promo-panel", 3, "id"], ["type", "button", "role", "tab", 3, "click", "id"], [1, "promo-panel-head"], [1, "promo-count"], [1, "promo-product-grid"], [1, "promo-product-card", 3, "highlighted-offer", "routerLink"], [1, "promo-product-card", 3, "routerLink"], ["aria-hidden", "true", 1, "promo-product-icon"], [1, "promo-product-copy"], [1, "promo-product-title"], [1, "promo-product-offer"], [1, "promo-offer-cta"], ["aria-hidden", "true", 1, "promo-arrow"]], template: function PromoOffersPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "a", 5);
      \u0275\u0275text(6, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "Promos & Offers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "span", 7);
      \u0275\u0275text(12, "XCELLHOST PRODUCT CATALOGUE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1", 8)(14, "span");
      \u0275\u0275text(15, "Popular");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " products. Better value.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Discover customer-favourite cloud, security, productivity and digital trust services\u2014all backed by XcellHost experts.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "strong", 9);
      \u0275\u0275text(20, "Choose confidently. Deploy with expert support.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10)(22, "span")(23, "i");
      \u0275\u0275text(24, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Curated popular products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span")(27, "i");
      \u0275\u0275text(28, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " Transparent service details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span")(31, "i");
      \u0275\u0275text(32, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(33, " Free consultation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span")(35, "i");
      \u0275\u0275text(36, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37, " 24\xD77 expert support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 11)(39, "a", 12);
      \u0275\u0275text(40, "Browse offers ");
      \u0275\u0275elementStart(41, "span", 6);
      \u0275\u0275text(42, "\u2193");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "a", 13);
      \u0275\u0275text(44, "Let\u2019s talk ");
      \u0275\u0275elementStart(45, "span", 6);
      \u0275\u0275text(46, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 14)(48, "span");
      \u0275\u0275text(49, "Explore company trust:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 15);
      \u0275\u0275text(51, "Certifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "a", 16);
      \u0275\u0275text(53, "Awards");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 17);
      \u0275\u0275element(55, "span", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 19)(57, "defs")(58, "linearGradient", 20);
      \u0275\u0275element(59, "stop", 21)(60, "stop", 22)(61, "stop", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "linearGradient", 24);
      \u0275\u0275element(63, "stop", 25)(64, "stop", 26)(65, "stop", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "clipPath", 28);
      \u0275\u0275element(67, "ellipse", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "g", 30);
      \u0275\u0275element(69, "path", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "g", 32);
      \u0275\u0275element(71, "circle", 33)(72, "circle", 34)(73, "path", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "g", 36);
      \u0275\u0275element(75, "circle", 37)(76, "circle", 38)(77, "path", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "g", 40);
      \u0275\u0275element(79, "circle", 41)(80, "circle", 42)(81, "circle", 43)(82, "circle", 44)(83, "circle", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "g", 46);
      \u0275\u0275element(85, "path", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "g", 48);
      \u0275\u0275element(87, "circle", 49)(88, "circle", 50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "g", 51);
      \u0275\u0275element(90, "circle", 52)(91, "circle", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "g", 54);
      \u0275\u0275element(93, "path", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "g", 56);
      \u0275\u0275element(95, "path", 57)(96, "path", 58);
      \u0275\u0275elementStart(97, "g", 59);
      \u0275\u0275element(98, "circle", 60)(99, "circle", 61)(100, "circle", 62);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "g", 63)(102, "g", 64);
      \u0275\u0275element(103, "path", 65)(104, "circle", 66)(105, "circle", 67);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "g", 68);
      \u0275\u0275element(107, "path", 69)(108, "circle", 70);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "g", 71);
      \u0275\u0275element(110, "path", 72)(111, "circle", 73);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(112, "g", 74);
      \u0275\u0275element(113, "path", 75);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(114, "span", 76)(115, "img", 77);
      \u0275\u0275elementStart(116, "span", 78);
      \u0275\u0275element(117, "img", 79);
      \u0275\u0275elementStart(118, "small");
      \u0275\u0275text(119, "Popular offers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "span", 80);
      \u0275\u0275element(121, "img", 81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span", 82)(123, "b");
      \u0275\u0275text(124, "%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "small");
      \u0275\u0275text(126, "Better value");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(127, "section", 83)(128, "div", 84)(129, "header", 85)(130, "span");
      \u0275\u0275text(131, "POPULAR PRODUCTS & SOLUTIONS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "h2", 86);
      \u0275\u0275text(133, "Product offers by category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p");
      \u0275\u0275text(135, "Explore pricing offers for your chosen product. Open its page for plans, billing options and full pricing details.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 87)(137, "div", 88);
      \u0275\u0275repeaterCreate(138, PromoOffersPage_For_139_Template, 7, 8, "button", 89, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(140, PromoOffersPage_Conditional_140_Template, 12, 4, "div", 90);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(138);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_1_0 = ctx.activeCategory()) ? 140 : -1, tmp_1_0);
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.promo-page[_ngcontent-%COMP%] {\n  background: #f6f9fe;\n  color: #081c3f;\n}\n.wrap[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 40px));\n  margin-inline: auto;\n}\n.promo-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 54px 0 58px;\n  background:\n    radial-gradient(\n      circle at 82% 28%,\n      rgba(35, 117, 234, .34),\n      transparent 25%),\n    linear-gradient(\n      128deg,\n      #031936,\n      #082b5e 70%,\n      #0a3976);\n  color: #fff;\n}\n.promo-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(137, 190, 255, .32) 1.7px,\n      transparent 2px);\n  background-size: 22px 22px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at 59% 52%,\n      #000,\n      transparent 68%);\n  mask-image:\n    radial-gradient(\n      ellipse at 59% 52%,\n      #000,\n      transparent 68%);\n}\n.promo-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.02fr) minmax(390px, .98fr);\n  gap: 30px;\n  align-items: center;\n}\n.promo-hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.promo-crumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0 0 22px;\n  color: #98bce9;\n  font: 700 10px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.promo-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: color .2s;\n}\n.promo-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.promo-kicker[_ngcontent-%COMP%] {\n  color: #63b8ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .17em;\n}\n.promo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 11px 0 14px;\n  font: 850 clamp(40px, 4.2vw, 58px)/1.04 var(--disp);\n  letter-spacing: -.04em;\n}\n.promo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff7a10;\n}\n.promo-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 0;\n  color: #cadcf2;\n  font-size: 16px;\n  line-height: 1.6;\n}\n.promo-hero-line[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 12px;\n  color: #70baff;\n  font: 750 17px var(--disp);\n}\n.promo-hero-points[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px 20px;\n  margin-top: 19px;\n  color: #d9e7f8;\n  font-size: 12px;\n}\n.promo-hero-points[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.promo-hero-points[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  flex: 0 0 20px;\n  place-items: center;\n  border-radius: 50%;\n  background: #1673e5;\n  color: #fff;\n  font-style: normal;\n  font-weight: 900;\n}\n.promo-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 22px;\n}\n.promo-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 47px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 21px;\n  border-radius: 9px;\n  color: #fff;\n  font: 800 14px var(--disp);\n  text-decoration: none;\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.promo-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.promo-primary-action[_ngcontent-%COMP%] {\n  background: #ff7a10;\n  box-shadow: 0 12px 28px rgba(255, 122, 16, .28);\n}\n.promo-secondary-action[_ngcontent-%COMP%] {\n  border: 1px solid rgba(164, 197, 239, .55);\n  background: rgba(255, 255, 255, .06);\n}\n.promo-secondary-action[_ngcontent-%COMP%]:hover {\n  border-color: #a9ceff;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, .16);\n}\n.promo-hero-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 14px;\n  align-items: center;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(147, 197, 253, .18);\n  color: #91acd0;\n  font-size: 11px;\n}\n.promo-hero-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cfe5ff;\n  font-weight: 750;\n  text-decoration: none;\n}\n.promo-hero-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.promo-hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 390px;\n  place-items: center;\n}\n.promo-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: min(100%, 570px);\n  filter: drop-shadow(0 28px 35px rgba(0, 8, 28, .44));\n  animation: _ngcontent-%COMP%_promoFloat 4s ease-in-out infinite;\n}\n.promo-visual-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 78%;\n  aspect-ratio: 1;\n  border: 1px dashed rgba(112, 181, 255, .32);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_promoSpin 24s linear infinite;\n}\n.promo-visual-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  padding: 9px 13px;\n  border: 1px solid rgba(151, 201, 255, .5);\n  border-radius: 12px;\n  background: rgba(4, 31, 70, .9);\n  box-shadow: 0 12px 26px rgba(0, 0, 0, .3);\n  color: #e3efff;\n  font: 750 11px var(--disp);\n}\n.promo-visual-chip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  color: #ff9a27;\n}\n.chip-popular[_ngcontent-%COMP%] {\n  top: 14%;\n  left: 2%;\n}\n.chip-services[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 20%;\n}\n.promo-offer-card[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  right: 5%;\n  bottom: 4%;\n  display: grid;\n  gap: 3px;\n  min-width: 220px;\n  padding: 15px 18px;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 18px 35px rgba(0, 0, 0, .3);\n  color: #09234d;\n}\n.promo-offer-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #1768d8;\n  font: 800 9px var(--mono);\n  letter-spacing: .12em;\n}\n.promo-offer-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font: 800 16px var(--disp);\n}\n.promo-offer-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #61728b;\n  font-size: 10px;\n}\n@keyframes _ngcontent-%COMP%_promoFloat {\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_promoSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.promo-catalogue[_ngcontent-%COMP%] {\n  scroll-margin-top: 120px;\n  padding: 66px 0 86px;\n}\n.promo-heading[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.promo-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.promo-panel-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1766d6;\n  font: 800 10px var(--mono);\n  letter-spacing: .17em;\n}\n.promo-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 8px;\n  color: #071c40;\n  font: 800 clamp(29px, 3.4vw, 40px)/1.12 var(--disp);\n  letter-spacing: -.025em;\n}\n.promo-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 15px;\n}\n.promo-tabs-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 238px minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid #d9e3f1;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 18px 48px rgba(16, 54, 101, .1);\n}\n.promo-tabs[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: #f1f5fb;\n  border-right: 1px solid #d9e3f1;\n}\n.promo-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  grid-template-columns: 30px 1fr;\n  gap: 2px 10px;\n  align-items: center;\n  margin: 0 0 5px;\n  padding: 15px 13px;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  background: transparent;\n  color: #29415f;\n  text-align: left;\n  cursor: pointer;\n  transition: .2s;\n}\n.promo-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  color: #8da0b9;\n  font: 800 10px var(--mono);\n}\n.promo-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 750 13px var(--disp);\n}\n.promo-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8493a8;\n  font-size: 10px;\n}\n.promo-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .72);\n  color: #075bd1;\n}\n.promo-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: #dce6f3;\n  background: #fff;\n  color: #075bd1;\n  box-shadow: 0 7px 18px rgba(25, 73, 132, .09);\n}\n.promo-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 11px;\n  right: -13px;\n  bottom: 11px;\n  width: 3px;\n  border-radius: 3px;\n  background: #1570e8;\n}\n.promo-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 28px 28px 32px;\n}\n.promo-panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e3e9f2;\n}\n.promo-panel-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: #071c40;\n  font: 800 27px var(--disp);\n}\n.promo-count[_ngcontent-%COMP%] {\n  padding: 7px 11px;\n  border-radius: 99px;\n  background: #eaf3ff;\n  color: #1261cf;\n  font: 700 11px var(--mono);\n}\n.promo-product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 20px;\n}\n.promo-product-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 112px;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 17px;\n  border: 1px solid #dce5f1;\n  border-radius: 14px;\n  background: #fff;\n  color: inherit;\n  text-decoration: none;\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.promo-product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #9dc3f5;\n  box-shadow: 0 10px 24px rgba(20, 83, 164, .1);\n}\n.promo-product-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  flex: 0 0 38px;\n  place-items: center;\n  border: 1px solid #cfe0f7;\n  border-radius: 10px;\n  background: #f4f8ff;\n  color: #1168dd;\n  font: 800 11px var(--mono);\n}\n.promo-product-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.promo-product-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.promo-product-title[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #0d2042;\n  font: 750 14px/1.25 var(--disp);\n}\n.promo-product-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 3px 7px;\n  border: 1px solid #f2c25b;\n  border-radius: 99px;\n  background: #fff0ba;\n  color: #815300;\n  font: 700 8px var(--mono);\n  font-style: normal;\n  text-transform: uppercase;\n}\n.promo-product-copy[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n  color: #697a92;\n  font-size: 11px;\n  line-height: 1.45;\n}\n.promo-arrow[_ngcontent-%COMP%] {\n  align-self: center;\n  color: #1670e6;\n  font-size: 18px;\n  transition: transform .2s;\n}\n.promo-product-card[_ngcontent-%COMP%]:hover   .promo-arrow[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n@media (max-width: 850px) {\n  .promo-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .promo-hero-copy[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .promo-crumb[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .promo-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .promo-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .promo-hero-points[_ngcontent-%COMP%] {\n    max-width: 580px;\n    margin-inline: auto;\n  }\n  .promo-hero-actions[_ngcontent-%COMP%], \n   .promo-hero-links[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .promo-hero-visual[_ngcontent-%COMP%] {\n    min-height: 310px;\n  }\n  .promo-tabs-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .promo-tabs[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    border-right: 0;\n    border-bottom: 1px solid #d9e3f1;\n  }\n  .promo-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 180px;\n    margin: 0 5px 0 0;\n  }\n  .promo-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::after {\n    top: auto;\n    right: 14px;\n    bottom: -13px;\n    left: 14px;\n    width: auto;\n    height: 3px;\n  }\n  .promo-product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .wrap[_ngcontent-%COMP%] {\n    width: min(100% - 28px, 1180px);\n  }\n  .promo-hero[_ngcontent-%COMP%] {\n    padding: 42px 0 46px;\n  }\n  .promo-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .promo-hero-points[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: left;\n  }\n  .promo-hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .promo-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .promo-hero-visual[_ngcontent-%COMP%] {\n    min-height: 260px;\n  }\n  .promo-visual-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .promo-offer-card[_ngcontent-%COMP%] {\n    right: 0;\n    bottom: 0;\n    min-width: 190px;\n  }\n  .promo-catalogue[_ngcontent-%COMP%] {\n    padding: 42px 0 58px;\n  }\n  .promo-tabs-layout[_ngcontent-%COMP%] {\n    border-radius: 15px;\n  }\n  .promo-panel[_ngcontent-%COMP%] {\n    padding: 22px 16px 24px;\n  }\n  .promo-panel-head[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .promo-product-card[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .promo-product-title[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.promo-hero-visual[_ngcontent-%COMP%]    > .promo-main-visual[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: min(100%, 570px);\n  border-radius: 28px;\n  mix-blend-mode: screen;\n  filter: drop-shadow(0 28px 35px rgba(0, 8, 28, .44));\n  animation: _ngcontent-%COMP%_promoFloat 4s ease-in-out infinite;\n}\n.promo-moving-logo[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 9px 12px;\n  border: 1px solid rgba(160, 207, 255, .58);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .96);\n  box-shadow: 0 14px 30px rgba(0, 8, 30, .34);\n  animation: _ngcontent-%COMP%_promoLogoDrift 3.5s ease-in-out infinite;\n  color: #0a2b58;\n}\n.promo-moving-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: static;\n  z-index: auto;\n  width: auto;\n  height: auto;\n  padding: 0;\n  filter: none;\n  animation: none;\n}\n.promo-moving-logo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font: 800 9px var(--mono);\n  letter-spacing: .04em;\n  white-space: nowrap;\n}\n.logo-xcellhost[_ngcontent-%COMP%] {\n  top: 9%;\n  left: 0;\n  animation-delay: -.8s;\n}\n.logo-xcellhost[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 104px;\n}\n.logo-acronis[_ngcontent-%COMP%] {\n  top: 18%;\n  right: -1%;\n  animation-delay: -2.1s;\n}\n.logo-acronis[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 116px;\n}\n.logo-value[_ngcontent-%COMP%] {\n  right: 2%;\n  bottom: 10%;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9a24,\n      #f36a00);\n  color: #fff;\n  animation-delay: -1.3s;\n}\n.logo-value[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: grid;\n  width: 27px;\n  height: 27px;\n  place-items: center;\n  border-radius: 50%;\n  background: #fff;\n  color: #ee6f00;\n  font-size: 16px;\n}\n@keyframes _ngcontent-%COMP%_promoLogoDrift {\n  0%, 100% {\n    transform: translateY(0) rotate(-1deg);\n  }\n  50% {\n    transform: translateY(-12px) rotate(1.5deg);\n  }\n}\n@media (max-width: 560px) {\n  .promo-moving-logo[_ngcontent-%COMP%] {\n    padding: 7px 9px;\n  }\n  .logo-xcellhost[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 78px;\n  }\n  .logo-acronis[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 88px;\n  }\n  .logo-value[_ngcontent-%COMP%] {\n    bottom: 2%;\n  }\n}\n.promo-product-offer[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  margin-top: 14px;\n  padding: 16px;\n  border: 2px solid #c5dafa;\n  border-left: 5px solid #1764d9;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      120deg,\n      #edf4ff,\n      #f7faff);\n  box-shadow: 0 5px 14px rgba(23, 100, 217, .08);\n  color: #102e55;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.55;\n}\n.promo-product-offer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  justify-self: start;\n  padding: 5px 9px;\n  border-radius: 5px;\n  background: #155dcc;\n  color: #fff;\n  font: 800 10px var(--mono);\n  letter-spacing: .06em;\n}\n.promo-offer-cta[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 12px;\n  color: #1261cf;\n  font-size: 12px;\n  font-weight: 700;\n}\n.promo-product-card.highlighted-offer[_ngcontent-%COMP%] {\n  border: 2px solid #1764d9;\n  background: #f7faff;\n  box-shadow: 0 0 0 3px #e7f0ff;\n}\n.promo-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #3264a3;\n  font-weight: 700;\n}\n.promo-blast-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  inset: 0;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      ellipse,\n      #ffe5a05c,\n      #ff9e2022 35%,\n      #29baff18 50%,\n      transparent 72%);\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_promoBlastGlow 5s ease-out infinite;\n}\n.promo-blast-effect[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  pointer-events: none;\n}\n.promo-blast-wave[_ngcontent-%COMP%], \n.promo-blast-rays[_ngcontent-%COMP%], \n.promo-blast-sparks[_ngcontent-%COMP%] {\n  transform-origin: 280px 205px;\n  opacity: 0;\n}\n.promo-blast-wave[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_promoBlastWave 5s ease-out infinite;\n  filter: drop-shadow(0 0 5px #ffc36588);\n}\n.promo-blast-wave-follow[_ngcontent-%COMP%] {\n  animation-delay: .45s;\n  filter: drop-shadow(0 0 5px #78e4ff88);\n}\n.promo-blast-rays[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_promoBlastRays 5s ease-out infinite;\n  filter: drop-shadow(0 0 4px #ffd48a77);\n}\n.promo-blast-sparks[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_promoBlastSparks 5s ease-out infinite;\n}\n.promo-energy-arcs[_ngcontent-%COMP%] {\n  opacity: .5;\n  stroke-dasharray: 45 200;\n  animation: _ngcontent-%COMP%_promoEnergyFlow 12s linear infinite;\n  filter: drop-shadow(0 0 4px #63dfff66);\n}\n.promo-burst-confetti[_ngcontent-%COMP%] {\n  transform-origin: 280px 205px;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_promoConfettiScatter 5s ease-out infinite;\n}\n.promo-burst-stars[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_promoBurstTwinkle 3s ease-in-out infinite;\n  filter: drop-shadow(0 0 4px #fff0bd66);\n}\n@keyframes _ngcontent-%COMP%_promoBlastGlow {\n  0%, 48%, 100% {\n    opacity: 0;\n    transform: scale(.6);\n  }\n  12% {\n    opacity: .9;\n  }\n  35% {\n    opacity: 0;\n    transform: scale(1.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_promoBlastWave {\n  0% {\n    opacity: 0;\n    transform: scale(.45);\n  }\n  10% {\n    opacity: .85;\n  }\n  50%, 100% {\n    opacity: 0;\n    transform: scale(1.9);\n  }\n}\n@keyframes _ngcontent-%COMP%_promoBlastRays {\n  0%, 3% {\n    opacity: 0;\n    transform: scale(.7);\n  }\n  13% {\n    opacity: .85;\n  }\n  37%, 100% {\n    opacity: 0;\n    transform: scale(1.12);\n  }\n}\n@keyframes _ngcontent-%COMP%_promoBlastSparks {\n  0%, 7% {\n    opacity: 0;\n    transform: scale(.72);\n  }\n  19%, 32% {\n    opacity: 1;\n  }\n  66%, 100% {\n    opacity: 0;\n    transform: scale(1.18) rotate(6deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_promoEnergyFlow {\n  to {\n    stroke-dashoffset: -490;\n  }\n}\n@keyframes _ngcontent-%COMP%_promoConfettiScatter {\n  0%, 8% {\n    opacity: 0;\n    transform: scale(.65) rotate(-8deg);\n  }\n  23% {\n    opacity: 1;\n    transform: scale(.95);\n  }\n  65% {\n    opacity: 0;\n    transform: translateY(22px) scale(1.15) rotate(14deg);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(22px) scale(1.15) rotate(14deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_promoBurstTwinkle {\n  0%, 100% {\n    opacity: .2;\n  }\n  50% {\n    opacity: .85;\n  }\n}\n.promo-hero-visual[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  inset: -5%;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      ellipse at 35% 30%,\n      #16baff23,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 70% 65%,\n      #ffaf291c,\n      transparent 50%);\n  filter: blur(18px);\n  animation: _ngcontent-%COMP%_promoAmbientLight 9s ease-in-out infinite;\n  pointer-events: none;\n}\n.promo-light-sweep[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_promoLightSweep 8s ease-in-out infinite;\n  mix-blend-mode: screen;\n}\n.promo-orbit-particles[_ngcontent-%COMP%] {\n  transform-origin: 280px 205px;\n  animation: _ngcontent-%COMP%_promoParticleOrbit 15s linear infinite;\n  filter: drop-shadow(0 0 5px #64dfff);\n}\n.promo-orbit-particles-gold[_ngcontent-%COMP%] {\n  animation-duration: 21s;\n  animation-direction: reverse;\n  filter: drop-shadow(0 0 5px #ffbc56);\n}\n.promo-floating-motes[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_promoMotesFloat 7s ease-in-out infinite;\n  filter: drop-shadow(0 0 3px #8be5ff);\n}\n.promo-moving-logo.logo-value[_ngcontent-%COMP%] {\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_promoLogoDrift 3.5s ease-in-out -1.3s infinite, _ngcontent-%COMP%_promoValueGlow 5s ease-in-out infinite;\n}\n.promo-moving-logo.logo-value[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: -60% -45%;\n  background:\n    linear-gradient(\n      110deg,\n      transparent 40%,\n      #fff6 49%,\n      transparent 58%);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_promoBadgeShine 7s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes _ngcontent-%COMP%_promoAmbientLight {\n  50% {\n    transform: scale(1.08) rotate(10deg);\n    opacity: .65;\n  }\n}\n@keyframes _ngcontent-%COMP%_promoLightSweep {\n  0%, 15% {\n    transform: translateX(-220px);\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  55% {\n    transform: translateX(330px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(330px);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_promoParticleOrbit {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_promoMotesFloat {\n  0%, 100% {\n    transform: translateY(4px);\n    opacity: .3;\n  }\n  50% {\n    transform: translateY(-10px);\n    opacity: .8;\n  }\n}\n@keyframes _ngcontent-%COMP%_promoValueGlow {\n  0%, 100% {\n    box-shadow: 0 14px 30px #00081e55;\n  }\n  35% {\n    box-shadow: 0 0 0 5px #ffb74a15, 0 0 28px #ff951e66;\n  }\n}\n@keyframes _ngcontent-%COMP%_promoBadgeShine {\n  0%, 25% {\n    transform: translateX(-100%);\n  }\n  55%, 100% {\n    transform: translateX(100%);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .promo-blast-glow[_ngcontent-%COMP%], \n   .promo-blast-effect[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none;\n    opacity: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .promo-hero-visual[_ngcontent-%COMP%]::before {\n    animation: none;\n  }\n  .promo-moving-logo.logo-value[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .promo-moving-logo.logo-value[_ngcontent-%COMP%]::after {\n    animation: none;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=promo-offers.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromoOffersPage, [{
    type: Component,
    args: [{ selector: "xh-promo-offers-page", standalone: true, imports: [RouterLink], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="promo-page">\r
  <section class="promo-hero" aria-labelledby="promo-title"><div class="wrap promo-hero-grid">\r
    <div class="promo-hero-copy">\r
      <nav class="promo-crumb" aria-label="Breadcrumb"><a routerLink="/">Home</a><span aria-hidden="true">\u203A</span><span>Promos &amp; Offers</span></nav>\r
      <span class="promo-kicker">XCELLHOST PRODUCT CATALOGUE</span>\r
      <h1 id="promo-title"><span>Popular</span> products. Better value.</h1>\r
      <p>Discover customer-favourite cloud, security, productivity and digital trust services\u2014all backed by XcellHost experts.</p>\r
      <strong class="promo-hero-line">Choose confidently. Deploy with expert support.</strong>\r
      <div class="promo-hero-points" aria-label="Offer benefits">\r
        <span><i>\u2713</i> Curated popular products</span><span><i>\u2713</i> Transparent service details</span>\r
        <span><i>\u2713</i> Free consultation</span><span><i>\u2713</i> 24\xD77 expert support</span>\r
      </div>\r
      <div class="promo-hero-actions">\r
        <a class="promo-primary-action" routerLink="/promotion-and-offers" fragment="promo-catalogue">Browse offers <span aria-hidden="true">\u2193</span></a>\r
        <a class="promo-secondary-action" routerLink="/contact">Let&rsquo;s talk <span aria-hidden="true">\u2192</span></a>\r
      </div>\r
      <div class="promo-hero-links"><span>Explore company trust:</span><a routerLink="/company/certifications-awards">Certifications</a><a routerLink="/company/awards">Awards</a></div>\r
    </div>\r
    <div class="promo-hero-visual" aria-hidden="true">\r
      <span class="promo-blast-glow"></span>\r
      <svg class="promo-blast-effect" viewBox="0 0 560 410" fill="none">\r
        <defs>\r
          <linearGradient id="promoBlastGradient"><stop stop-color="#ffb14a"/><stop offset=".45" stop-color="#fff0b7"/><stop offset="1" stop-color="#63dfff"/></linearGradient>\r
          <linearGradient id="promoLightSweep"><stop stop-color="#cff5ff" stop-opacity="0"/><stop offset=".5" stop-color="#e7fbff" stop-opacity=".24"/><stop offset="1" stop-color="#cff5ff" stop-opacity="0"/></linearGradient>\r
          <clipPath id="promoSweepClip"><ellipse cx="280" cy="205" rx="195" ry="150"/></clipPath>\r
        </defs>\r
        <g clip-path="url(#promoSweepClip)"><path class="promo-light-sweep" d="M40 10H120L350 400H270Z" fill="url(#promoLightSweep)"/></g>\r
        <g class="promo-orbit-particles" fill="#86e8ff"><circle cx="280" cy="34" r="4"/><circle cx="280" cy="376" r="3"/><path d="M250 37Q263 34 273 34" stroke="#86e8ff" stroke-width="2" stroke-linecap="round" stroke-opacity=".5"/></g>\r
        <g class="promo-orbit-particles promo-orbit-particles-gold" fill="#ffce7b"><circle cx="450" cy="205" r="4"/><circle cx="110" cy="205" r="2.5"/><path d="M445 173Q450 187 450 198" stroke="#ffce7b" stroke-width="2" stroke-linecap="round" stroke-opacity=".5"/></g>\r
        <g class="promo-floating-motes" fill="#abebff"><circle cx="156" cy="141" r="1.5"/><circle cx="392" cy="92" r="2"/><circle cx="466" cy="234" r="1.5"/><circle cx="151" cy="279" r="2"/><circle cx="334" cy="330" r="1.5"/></g>\r
        <g class="promo-energy-arcs" stroke="url(#promoBlastGradient)" stroke-width="2.5" stroke-linecap="round"><path d="M140 82Q280 5 420 82M469 118Q526 207 474 292M425 341Q286 405 156 344M98 285Q55 196 113 113"/></g>\r
        <g class="promo-blast-wave promo-blast-wave-follow" stroke="#78e4ff" stroke-width="2"><circle cx="280" cy="205" r="92"/><circle cx="280" cy="205" r="108" stroke="#fff0b7" stroke-width="1"/></g>\r
        <g class="promo-blast-wave" stroke="#ffc365" stroke-width="2"><circle cx="280" cy="205" r="105"/><circle cx="280" cy="205" r="124" stroke="#75dcff" stroke-width="1" stroke-opacity=".65"/></g>\r
        <g class="promo-blast-rays" stroke="#ffd48a" stroke-width="4" stroke-linecap="round"><path d="M280 60V82M374 89L361 106M436 166L415 172M430 261L410 252M369 329L354 310M280 352V330M191 326L204 309M126 259L148 250M125 157L147 164M191 84L204 105"/></g>\r
        <g class="promo-blast-sparks" stroke-width="3" stroke-linecap="round"><path d="M93 112L101 119M452 112L447 123M469 292L459 287M93 300L101 291M330 44L333 54" stroke="#ffb65e"/><path d="M131 67L138 73M465 206H475M181 355L189 348M390 362L383 354" stroke="#67d9ff"/><g fill="#ffd48a"><circle cx="228" cy="57" r="3"/><circle cx="476" cy="153" r="3"/><circle cx="339" cy="362" r="3"/></g></g>\r
        <g class="promo-burst-confetti"><g fill="#ffbc5e"><path d="M111 153L119 147L125 156L117 162ZM404 64L412 68L407 79L399 75ZM431 322L440 317L446 326L437 332Z"/><circle cx="172" cy="49" r="4"/><circle cx="470" cy="251" r="4"/></g><g fill="#6dddff"><path d="M155 303L162 299L168 311L161 315ZM473 84L483 85L482 91L472 90ZM258 366L268 364L270 371L260 373Z"/><circle cx="106" cy="232" r="3"/></g><g fill="#80edc8"><path d="M225 58L229 51L237 56L233 63ZM420 274L428 271L432 281L424 284Z"/><circle cx="345" cy="352" r="3"/></g></g>\r
        <g class="promo-burst-stars" stroke="#fff0bd" stroke-width="2" stroke-linecap="round"><path d="M128 99V113M121 106H135M440 197V213M432 205H448M209 344V356M203 350H215M363 52V64M357 58H369"/></g>\r
      </svg>\r
      <span class="promo-visual-orbit"></span><img class="promo-main-visual" src="/assets/images/promo-offers-hero-v2.png" alt="">\r
      <span class="promo-moving-logo logo-xcellhost"><img src="/assets/images/xcellhost-logo.png" alt=""><small>Popular offers</small></span>\r
      <span class="promo-moving-logo logo-acronis"><img src="/assets/images/product-brands-acronis.png" alt=""></span>\r
      <span class="promo-moving-logo logo-value"><b>%</b><small>Better value</small></span>\r
    </div>\r
  </div></section>\r
  <section class="promo-catalogue" id="promo-catalogue" aria-labelledby="catalogue-title"><div class="wrap">\r
    <header class="promo-heading"><span>POPULAR PRODUCTS &amp; SOLUTIONS</span><h2 id="catalogue-title">Product offers by category</h2><p>Explore pricing offers for your chosen product. Open its page for plans, billing options and full pricing details.</p></header>\r
    <div class="promo-tabs-layout">\r
      <div class="promo-tabs" role="tablist" aria-label="Product categories">\r
        @for (category of categories; track category.label; let i = $index) {\r
          <button type="button" role="tab" [id]="'promo-tab-' + i" [attr.aria-selected]="activeTab() === i" [attr.aria-controls]="'promo-panel-' + i" [class.active]="activeTab() === i" (click)="selectTab(i)">\r
            <span>{{ (i + 1).toString().padStart(2, '0') }}</span><b>{{ category.label }}</b><small>{{ category.products.length }} offers</small>\r
          </button>\r
        }\r
      </div>\r
      @if (activeCategory(); as category) {\r
        <div class="promo-panel" role="tabpanel" [id]="'promo-panel-' + activeTab()" [attr.aria-labelledby]="'promo-tab-' + activeTab()">\r
          <header class="promo-panel-head"><div><span>OFFERS IN THIS CATEGORY</span><h3>{{ category.label }}</h3></div><span class="promo-count">{{ category.products.length }} offers</span></header>\r
          <div class="promo-product-grid">\r
            @for (product of category.products; track product.name) {\r
              <a class="promo-product-card" [class.highlighted-offer]="product.link === '/' + highlightedProduct()" [routerLink]="product.link"><span class="promo-product-icon" aria-hidden="true">{{ product.icon }}</span><span class="promo-product-copy"><span class="promo-product-title"><b>{{ product.name }}</b>@if (product.pill) { <em>{{ product.pill }}</em> }</span><small>{{ product.description }}</small><span class="promo-product-offer"><strong>PRICING OFFER</strong><span>{{ product.pricingOffer }}</span></span><span class="promo-offer-cta">Explore product &amp; offer &rarr;</span></span><span class="promo-arrow" aria-hidden="true">\u2192</span></a>\r
            }\r
          </div>\r
        </div>\r
      }\r
    </div>\r
  </div></section>\r
</main>\r
`, styles: ['/* src/app/pages/promo-offers.page.css */\n:host {\n  display: contents;\n}\n.promo-page {\n  background: #f6f9fe;\n  color: #081c3f;\n}\n.wrap {\n  width: min(1180px, calc(100% - 40px));\n  margin-inline: auto;\n}\n.promo-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 54px 0 58px;\n  background:\n    radial-gradient(\n      circle at 82% 28%,\n      rgba(35, 117, 234, .34),\n      transparent 25%),\n    linear-gradient(\n      128deg,\n      #031936,\n      #082b5e 70%,\n      #0a3976);\n  color: #fff;\n}\n.promo-hero::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(137, 190, 255, .32) 1.7px,\n      transparent 2px);\n  background-size: 22px 22px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at 59% 52%,\n      #000,\n      transparent 68%);\n  mask-image:\n    radial-gradient(\n      ellipse at 59% 52%,\n      #000,\n      transparent 68%);\n}\n.promo-hero-grid {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.02fr) minmax(390px, .98fr);\n  gap: 30px;\n  align-items: center;\n}\n.promo-hero-copy {\n  min-width: 0;\n}\n.promo-crumb {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin: 0 0 22px;\n  color: #98bce9;\n  font: 700 10px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.promo-crumb a {\n  color: inherit;\n  text-decoration: none;\n  transition: color .2s;\n}\n.promo-crumb a:hover {\n  color: #fff;\n}\n.promo-kicker {\n  color: #63b8ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .17em;\n}\n.promo-hero h1 {\n  max-width: 700px;\n  margin: 11px 0 14px;\n  font: 850 clamp(40px, 4.2vw, 58px)/1.04 var(--disp);\n  letter-spacing: -.04em;\n}\n.promo-hero h1 span {\n  color: #ff7a10;\n}\n.promo-hero-copy > p {\n  max-width: 650px;\n  margin: 0;\n  color: #cadcf2;\n  font-size: 16px;\n  line-height: 1.6;\n}\n.promo-hero-line {\n  display: block;\n  margin-top: 12px;\n  color: #70baff;\n  font: 750 17px var(--disp);\n}\n.promo-hero-points {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px 20px;\n  margin-top: 19px;\n  color: #d9e7f8;\n  font-size: 12px;\n}\n.promo-hero-points span {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.promo-hero-points i {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  flex: 0 0 20px;\n  place-items: center;\n  border-radius: 50%;\n  background: #1673e5;\n  color: #fff;\n  font-style: normal;\n  font-weight: 900;\n}\n.promo-hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 22px;\n}\n.promo-hero-actions a {\n  display: inline-flex;\n  min-height: 47px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 21px;\n  border-radius: 9px;\n  color: #fff;\n  font: 800 14px var(--disp);\n  text-decoration: none;\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.promo-hero-actions a:hover {\n  transform: translateY(-2px);\n}\n.promo-primary-action {\n  background: #ff7a10;\n  box-shadow: 0 12px 28px rgba(255, 122, 16, .28);\n}\n.promo-secondary-action {\n  border: 1px solid rgba(164, 197, 239, .55);\n  background: rgba(255, 255, 255, .06);\n}\n.promo-secondary-action:hover {\n  border-color: #a9ceff;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, .16);\n}\n.promo-hero-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px 14px;\n  align-items: center;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(147, 197, 253, .18);\n  color: #91acd0;\n  font-size: 11px;\n}\n.promo-hero-links a {\n  color: #cfe5ff;\n  font-weight: 750;\n  text-decoration: none;\n}\n.promo-hero-links a:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.promo-hero-visual {\n  position: relative;\n  display: grid;\n  min-height: 390px;\n  place-items: center;\n}\n.promo-hero-visual img {\n  position: relative;\n  z-index: 2;\n  width: min(100%, 570px);\n  filter: drop-shadow(0 28px 35px rgba(0, 8, 28, .44));\n  animation: promoFloat 4s ease-in-out infinite;\n}\n.promo-visual-orbit {\n  position: absolute;\n  width: 78%;\n  aspect-ratio: 1;\n  border: 1px dashed rgba(112, 181, 255, .32);\n  border-radius: 50%;\n  animation: promoSpin 24s linear infinite;\n}\n.promo-visual-chip {\n  position: absolute;\n  z-index: 4;\n  padding: 9px 13px;\n  border: 1px solid rgba(151, 201, 255, .5);\n  border-radius: 12px;\n  background: rgba(4, 31, 70, .9);\n  box-shadow: 0 12px 26px rgba(0, 0, 0, .3);\n  color: #e3efff;\n  font: 750 11px var(--disp);\n}\n.promo-visual-chip b {\n  margin-right: 6px;\n  color: #ff9a27;\n}\n.chip-popular {\n  top: 14%;\n  left: 2%;\n}\n.chip-services {\n  right: 0;\n  bottom: 20%;\n}\n.promo-offer-card {\n  position: absolute;\n  z-index: 5;\n  right: 5%;\n  bottom: 4%;\n  display: grid;\n  gap: 3px;\n  min-width: 220px;\n  padding: 15px 18px;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 18px 35px rgba(0, 0, 0, .3);\n  color: #09234d;\n}\n.promo-offer-card small {\n  color: #1768d8;\n  font: 800 9px var(--mono);\n  letter-spacing: .12em;\n}\n.promo-offer-card strong {\n  font: 800 16px var(--disp);\n}\n.promo-offer-card span {\n  color: #61728b;\n  font-size: 10px;\n}\n@keyframes promoFloat {\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes promoSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.promo-catalogue {\n  scroll-margin-top: 120px;\n  padding: 66px 0 86px;\n}\n.promo-heading {\n  margin-bottom: 32px;\n}\n.promo-heading > span,\n.promo-panel-head > div > span {\n  color: #1766d6;\n  font: 800 10px var(--mono);\n  letter-spacing: .17em;\n}\n.promo-heading h2 {\n  margin: 10px 0 8px;\n  color: #071c40;\n  font: 800 clamp(29px, 3.4vw, 40px)/1.12 var(--disp);\n  letter-spacing: -.025em;\n}\n.promo-heading p {\n  margin: 0;\n  color: #64748b;\n  font-size: 15px;\n}\n.promo-tabs-layout {\n  display: grid;\n  grid-template-columns: 238px minmax(0, 1fr);\n  overflow: hidden;\n  border: 1px solid #d9e3f1;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 18px 48px rgba(16, 54, 101, .1);\n}\n.promo-tabs {\n  padding: 12px;\n  background: #f1f5fb;\n  border-right: 1px solid #d9e3f1;\n}\n.promo-tabs button {\n  position: relative;\n  display: grid;\n  width: 100%;\n  grid-template-columns: 30px 1fr;\n  gap: 2px 10px;\n  align-items: center;\n  margin: 0 0 5px;\n  padding: 15px 13px;\n  border: 1px solid transparent;\n  border-radius: 12px;\n  background: transparent;\n  color: #29415f;\n  text-align: left;\n  cursor: pointer;\n  transition: .2s;\n}\n.promo-tabs button > span {\n  grid-row: 1/3;\n  color: #8da0b9;\n  font: 800 10px var(--mono);\n}\n.promo-tabs button b {\n  font: 750 13px var(--disp);\n}\n.promo-tabs button small {\n  color: #8493a8;\n  font-size: 10px;\n}\n.promo-tabs button:hover {\n  background: rgba(255, 255, 255, .72);\n  color: #075bd1;\n}\n.promo-tabs button.active {\n  border-color: #dce6f3;\n  background: #fff;\n  color: #075bd1;\n  box-shadow: 0 7px 18px rgba(25, 73, 132, .09);\n}\n.promo-tabs button.active::after {\n  content: "";\n  position: absolute;\n  top: 11px;\n  right: -13px;\n  bottom: 11px;\n  width: 3px;\n  border-radius: 3px;\n  background: #1570e8;\n}\n.promo-panel {\n  min-width: 0;\n  padding: 28px 28px 32px;\n}\n.promo-panel-head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e3e9f2;\n}\n.promo-panel-head h3 {\n  margin: 7px 0 0;\n  color: #071c40;\n  font: 800 27px var(--disp);\n}\n.promo-count {\n  padding: 7px 11px;\n  border-radius: 99px;\n  background: #eaf3ff;\n  color: #1261cf;\n  font: 700 11px var(--mono);\n}\n.promo-product-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 20px;\n}\n.promo-product-card {\n  display: flex;\n  min-width: 0;\n  min-height: 112px;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 17px;\n  border: 1px solid #dce5f1;\n  border-radius: 14px;\n  background: #fff;\n  color: inherit;\n  text-decoration: none;\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.promo-product-card:hover {\n  transform: translateY(-2px);\n  border-color: #9dc3f5;\n  box-shadow: 0 10px 24px rgba(20, 83, 164, .1);\n}\n.promo-product-icon {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  flex: 0 0 38px;\n  place-items: center;\n  border: 1px solid #cfe0f7;\n  border-radius: 10px;\n  background: #f4f8ff;\n  color: #1168dd;\n  font: 800 11px var(--mono);\n}\n.promo-product-copy {\n  min-width: 0;\n  flex: 1;\n}\n.promo-product-title {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.promo-product-title b {\n  color: #0d2042;\n  font: 750 14px/1.25 var(--disp);\n}\n.promo-product-title em {\n  flex: none;\n  padding: 3px 7px;\n  border: 1px solid #f2c25b;\n  border-radius: 99px;\n  background: #fff0ba;\n  color: #815300;\n  font: 700 8px var(--mono);\n  font-style: normal;\n  text-transform: uppercase;\n}\n.promo-product-copy > small {\n  display: block;\n  margin-top: 7px;\n  color: #697a92;\n  font-size: 11px;\n  line-height: 1.45;\n}\n.promo-arrow {\n  align-self: center;\n  color: #1670e6;\n  font-size: 18px;\n  transition: transform .2s;\n}\n.promo-product-card:hover .promo-arrow {\n  transform: translateX(3px);\n}\n@media (max-width: 850px) {\n  .promo-hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .promo-hero-copy {\n    text-align: center;\n  }\n  .promo-crumb {\n    justify-content: flex-start;\n  }\n  .promo-hero h1,\n  .promo-hero-copy > p {\n    margin-inline: auto;\n  }\n  .promo-hero-points {\n    max-width: 580px;\n    margin-inline: auto;\n  }\n  .promo-hero-actions,\n  .promo-hero-links {\n    justify-content: center;\n  }\n  .promo-hero-visual {\n    min-height: 310px;\n  }\n  .promo-tabs-layout {\n    grid-template-columns: 1fr;\n  }\n  .promo-tabs {\n    display: flex;\n    overflow-x: auto;\n    border-right: 0;\n    border-bottom: 1px solid #d9e3f1;\n  }\n  .promo-tabs button {\n    min-width: 180px;\n    margin: 0 5px 0 0;\n  }\n  .promo-tabs button.active::after {\n    top: auto;\n    right: 14px;\n    bottom: -13px;\n    left: 14px;\n    width: auto;\n    height: 3px;\n  }\n  .promo-product-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .wrap {\n    width: min(100% - 28px, 1180px);\n  }\n  .promo-hero {\n    padding: 42px 0 46px;\n  }\n  .promo-hero-copy > p {\n    font-size: 15px;\n  }\n  .promo-hero-points {\n    grid-template-columns: 1fr;\n    text-align: left;\n  }\n  .promo-hero-actions {\n    flex-direction: column;\n  }\n  .promo-hero-actions a {\n    width: 100%;\n  }\n  .promo-hero-visual {\n    min-height: 260px;\n  }\n  .promo-visual-chip {\n    display: none;\n  }\n  .promo-offer-card {\n    right: 0;\n    bottom: 0;\n    min-width: 190px;\n  }\n  .promo-catalogue {\n    padding: 42px 0 58px;\n  }\n  .promo-tabs-layout {\n    border-radius: 15px;\n  }\n  .promo-panel {\n    padding: 22px 16px 24px;\n  }\n  .promo-panel-head {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .promo-product-card {\n    min-height: 0;\n  }\n  .promo-product-title {\n    flex-wrap: wrap;\n  }\n}\n.promo-hero-visual > .promo-main-visual {\n  position: relative;\n  z-index: 2;\n  width: min(100%, 570px);\n  border-radius: 28px;\n  mix-blend-mode: screen;\n  filter: drop-shadow(0 28px 35px rgba(0, 8, 28, .44));\n  animation: promoFloat 4s ease-in-out infinite;\n}\n.promo-moving-logo {\n  position: absolute;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  padding: 9px 12px;\n  border: 1px solid rgba(160, 207, 255, .58);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .96);\n  box-shadow: 0 14px 30px rgba(0, 8, 30, .34);\n  animation: promoLogoDrift 3.5s ease-in-out infinite;\n  color: #0a2b58;\n}\n.promo-moving-logo img {\n  position: static;\n  z-index: auto;\n  width: auto;\n  height: auto;\n  padding: 0;\n  filter: none;\n  animation: none;\n}\n.promo-moving-logo small {\n  font: 800 9px var(--mono);\n  letter-spacing: .04em;\n  white-space: nowrap;\n}\n.logo-xcellhost {\n  top: 9%;\n  left: 0;\n  animation-delay: -.8s;\n}\n.logo-xcellhost img {\n  width: 104px;\n}\n.logo-acronis {\n  top: 18%;\n  right: -1%;\n  animation-delay: -2.1s;\n}\n.logo-acronis img {\n  width: 116px;\n}\n.logo-value {\n  right: 2%;\n  bottom: 10%;\n  background:\n    linear-gradient(\n      135deg,\n      #ff9a24,\n      #f36a00);\n  color: #fff;\n  animation-delay: -1.3s;\n}\n.logo-value b {\n  display: grid;\n  width: 27px;\n  height: 27px;\n  place-items: center;\n  border-radius: 50%;\n  background: #fff;\n  color: #ee6f00;\n  font-size: 16px;\n}\n@keyframes promoLogoDrift {\n  0%, 100% {\n    transform: translateY(0) rotate(-1deg);\n  }\n  50% {\n    transform: translateY(-12px) rotate(1.5deg);\n  }\n}\n@media (max-width: 560px) {\n  .promo-moving-logo {\n    padding: 7px 9px;\n  }\n  .logo-xcellhost img {\n    width: 78px;\n  }\n  .logo-acronis img {\n    width: 88px;\n  }\n  .logo-value {\n    bottom: 2%;\n  }\n}\n.promo-product-offer {\n  display: grid;\n  gap: 10px;\n  margin-top: 14px;\n  padding: 16px;\n  border: 2px solid #c5dafa;\n  border-left: 5px solid #1764d9;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      120deg,\n      #edf4ff,\n      #f7faff);\n  box-shadow: 0 5px 14px rgba(23, 100, 217, .08);\n  color: #102e55;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.55;\n}\n.promo-product-offer strong {\n  justify-self: start;\n  padding: 5px 9px;\n  border-radius: 5px;\n  background: #155dcc;\n  color: #fff;\n  font: 800 10px var(--mono);\n  letter-spacing: .06em;\n}\n.promo-offer-cta {\n  display: block;\n  margin-top: 12px;\n  color: #1261cf;\n  font-size: 12px;\n  font-weight: 700;\n}\n.promo-product-card.highlighted-offer {\n  border: 2px solid #1764d9;\n  background: #f7faff;\n  box-shadow: 0 0 0 3px #e7f0ff;\n}\n.promo-tabs button small {\n  color: #3264a3;\n  font-weight: 700;\n}\n.promo-blast-glow {\n  position: absolute;\n  z-index: 1;\n  inset: 0;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      ellipse,\n      #ffe5a05c,\n      #ff9e2022 35%,\n      #29baff18 50%,\n      transparent 72%);\n  pointer-events: none;\n  animation: promoBlastGlow 5s ease-out infinite;\n}\n.promo-blast-effect {\n  position: absolute;\n  z-index: 3;\n  inset: 0;\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  pointer-events: none;\n}\n.promo-blast-wave,\n.promo-blast-rays,\n.promo-blast-sparks {\n  transform-origin: 280px 205px;\n  opacity: 0;\n}\n.promo-blast-wave {\n  animation: promoBlastWave 5s ease-out infinite;\n  filter: drop-shadow(0 0 5px #ffc36588);\n}\n.promo-blast-wave-follow {\n  animation-delay: .45s;\n  filter: drop-shadow(0 0 5px #78e4ff88);\n}\n.promo-blast-rays {\n  animation: promoBlastRays 5s ease-out infinite;\n  filter: drop-shadow(0 0 4px #ffd48a77);\n}\n.promo-blast-sparks {\n  animation: promoBlastSparks 5s ease-out infinite;\n}\n.promo-energy-arcs {\n  opacity: .5;\n  stroke-dasharray: 45 200;\n  animation: promoEnergyFlow 12s linear infinite;\n  filter: drop-shadow(0 0 4px #63dfff66);\n}\n.promo-burst-confetti {\n  transform-origin: 280px 205px;\n  opacity: 0;\n  animation: promoConfettiScatter 5s ease-out infinite;\n}\n.promo-burst-stars {\n  animation: promoBurstTwinkle 3s ease-in-out infinite;\n  filter: drop-shadow(0 0 4px #fff0bd66);\n}\n@keyframes promoBlastGlow {\n  0%, 48%, 100% {\n    opacity: 0;\n    transform: scale(.6);\n  }\n  12% {\n    opacity: .9;\n  }\n  35% {\n    opacity: 0;\n    transform: scale(1.3);\n  }\n}\n@keyframes promoBlastWave {\n  0% {\n    opacity: 0;\n    transform: scale(.45);\n  }\n  10% {\n    opacity: .85;\n  }\n  50%, 100% {\n    opacity: 0;\n    transform: scale(1.9);\n  }\n}\n@keyframes promoBlastRays {\n  0%, 3% {\n    opacity: 0;\n    transform: scale(.7);\n  }\n  13% {\n    opacity: .85;\n  }\n  37%, 100% {\n    opacity: 0;\n    transform: scale(1.12);\n  }\n}\n@keyframes promoBlastSparks {\n  0%, 7% {\n    opacity: 0;\n    transform: scale(.72);\n  }\n  19%, 32% {\n    opacity: 1;\n  }\n  66%, 100% {\n    opacity: 0;\n    transform: scale(1.18) rotate(6deg);\n  }\n}\n@keyframes promoEnergyFlow {\n  to {\n    stroke-dashoffset: -490;\n  }\n}\n@keyframes promoConfettiScatter {\n  0%, 8% {\n    opacity: 0;\n    transform: scale(.65) rotate(-8deg);\n  }\n  23% {\n    opacity: 1;\n    transform: scale(.95);\n  }\n  65% {\n    opacity: 0;\n    transform: translateY(22px) scale(1.15) rotate(14deg);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(22px) scale(1.15) rotate(14deg);\n  }\n}\n@keyframes promoBurstTwinkle {\n  0%, 100% {\n    opacity: .2;\n  }\n  50% {\n    opacity: .85;\n  }\n}\n.promo-hero-visual::before {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  inset: -5%;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      ellipse at 35% 30%,\n      #16baff23,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 70% 65%,\n      #ffaf291c,\n      transparent 50%);\n  filter: blur(18px);\n  animation: promoAmbientLight 9s ease-in-out infinite;\n  pointer-events: none;\n}\n.promo-light-sweep {\n  animation: promoLightSweep 8s ease-in-out infinite;\n  mix-blend-mode: screen;\n}\n.promo-orbit-particles {\n  transform-origin: 280px 205px;\n  animation: promoParticleOrbit 15s linear infinite;\n  filter: drop-shadow(0 0 5px #64dfff);\n}\n.promo-orbit-particles-gold {\n  animation-duration: 21s;\n  animation-direction: reverse;\n  filter: drop-shadow(0 0 5px #ffbc56);\n}\n.promo-floating-motes {\n  animation: promoMotesFloat 7s ease-in-out infinite;\n  filter: drop-shadow(0 0 3px #8be5ff);\n}\n.promo-moving-logo.logo-value {\n  overflow: hidden;\n  animation: promoLogoDrift 3.5s ease-in-out -1.3s infinite, promoValueGlow 5s ease-in-out infinite;\n}\n.promo-moving-logo.logo-value::after {\n  content: "";\n  position: absolute;\n  inset: -60% -45%;\n  background:\n    linear-gradient(\n      110deg,\n      transparent 40%,\n      #fff6 49%,\n      transparent 58%);\n  transform: translateX(-100%);\n  animation: promoBadgeShine 7s ease-in-out infinite;\n  pointer-events: none;\n}\n@keyframes promoAmbientLight {\n  50% {\n    transform: scale(1.08) rotate(10deg);\n    opacity: .65;\n  }\n}\n@keyframes promoLightSweep {\n  0%, 15% {\n    transform: translateX(-220px);\n    opacity: 0;\n  }\n  25% {\n    opacity: 1;\n  }\n  55% {\n    transform: translateX(330px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(330px);\n    opacity: 0;\n  }\n}\n@keyframes promoParticleOrbit {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes promoMotesFloat {\n  0%, 100% {\n    transform: translateY(4px);\n    opacity: .3;\n  }\n  50% {\n    transform: translateY(-10px);\n    opacity: .8;\n  }\n}\n@keyframes promoValueGlow {\n  0%, 100% {\n    box-shadow: 0 14px 30px #00081e55;\n  }\n  35% {\n    box-shadow: 0 0 0 5px #ffb74a15, 0 0 28px #ff951e66;\n  }\n}\n@keyframes promoBadgeShine {\n  0%, 25% {\n    transform: translateX(-100%);\n  }\n  55%, 100% {\n    transform: translateX(100%);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .promo-blast-glow,\n  .promo-blast-effect * {\n    animation: none;\n    opacity: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .promo-hero-visual::before {\n    animation: none;\n  }\n  .promo-moving-logo.logo-value {\n    animation: none;\n  }\n  .promo-moving-logo.logo-value::after {\n    animation: none;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=promo-offers.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromoOffersPage, { className: "PromoOffersPage", filePath: "src/app/pages/promo-offers.page.ts", lineNumber: 23 });
})();
export {
  PromoOffersPage
};
//# sourceMappingURL=chunk-Z6GDRNC5.js.map
