import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/associations.page.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
function AssociationsPage_For_188_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 178);
    \u0275\u0275domListener("click", function AssociationsPage_For_188_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.id));
    })("keydown", function AssociationsPage_For_188_Template_button_keydown_0_listener($event) {
      const \u0275$index_365_r4 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabKeydown($event, \u0275$index_365_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275domProperty("id", "association-tab-" + tab_r2.id);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab() === tab_r2.id)("aria-controls", "association-panel-" + tab_r2.id)("tabindex", ctx_r2.activeTab() === tab_r2.id ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function AssociationsPage_Conditional_189_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 181);
    \u0275\u0275domElement(1, "img", 182);
    \u0275\u0275domElementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const association_r5 = ctx.$implicit;
    \u0275\u0275domProperty("href", association_r5.website, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "Visit " + association_r5.name + " website (opens in a new tab)");
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", association_r5.image, \u0275\u0275sanitizeUrl)("alt", association_r5.name + " logo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(association_r5.name);
  }
}
function AssociationsPage_Conditional_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 173)(1, "div", 179)(2, "span");
    \u0275\u0275text(3, "Technology network");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h3");
    \u0275\u0275text(5, "IT Trade Associations");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7, "IT trade communities supporting collaboration across the technology industry.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 180);
    \u0275\u0275repeaterCreate(9, AssociationsPage_Conditional_189_For_10_Template, 4, 5, "a", 181, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.itTradeAssociations);
  }
}
function AssociationsPage_Conditional_190_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 184);
    \u0275\u0275domElement(1, "img", 182);
    \u0275\u0275domElementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const association_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", association_r6.image, \u0275\u0275sanitizeUrl)("alt", association_r6.name + " logo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(association_r6.name);
  }
}
function AssociationsPage_Conditional_190_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 174)(1, "div", 179)(2, "span");
    \u0275\u0275text(3, "International chambers");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h3");
    \u0275\u0275text(5, "Country Associations");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7, "Chambers strengthening international business relationships and collaboration.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 183);
    \u0275\u0275repeaterCreate(9, AssociationsPage_Conditional_190_For_10_Template, 4, 3, "article", 184, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.countryAssociations);
  }
}
function AssociationsPage_Conditional_191_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 184);
    \u0275\u0275domElement(1, "img", 182);
    \u0275\u0275domElementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const association_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", association_r7.image, \u0275\u0275sanitizeUrl)("alt", association_r7.name + " logo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(association_r7.name);
  }
}
function AssociationsPage_Conditional_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 175)(1, "div", 179)(2, "span");
    \u0275\u0275text(3, "Professional network");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h3");
    \u0275\u0275text(5, "Industry Associations");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7, "Professional bodies connecting XcellHost with wider business and industry communities.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 185);
    \u0275\u0275repeaterCreate(9, AssociationsPage_Conditional_191_For_10_Template, 4, 3, "article", 184, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.industryAssociations);
  }
}
function AssociationsPage_Conditional_192_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 184);
    \u0275\u0275domElement(1, "img", 182);
    \u0275\u0275domElementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const association_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", association_r8.image, \u0275\u0275sanitizeUrl)("alt", association_r8.name + " logo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(association_r8.name);
  }
}
function AssociationsPage_Conditional_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 176)(1, "div", 179)(2, "span");
    \u0275\u0275text(3, "Business community");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h3");
    \u0275\u0275text(5, "Business Network");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7, "Business networks supporting entrepreneurship, leadership and meaningful commercial connections.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 185);
    \u0275\u0275repeaterCreate(9, AssociationsPage_Conditional_192_For_10_Template, 4, 3, "article", 184, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.businessNetworkAssociations);
  }
}
function AssociationsPage_Conditional_193_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 184);
    \u0275\u0275domElement(1, "img", 182);
    \u0275\u0275domElementStart(2, "h4");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const association_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", association_r9.image, \u0275\u0275sanitizeUrl)("alt", association_r9.name + " logo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(association_r9.name);
  }
}
function AssociationsPage_Conditional_193_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 177)(1, "div", 179)(2, "span");
    \u0275\u0275text(3, "Affiliate network");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h3");
    \u0275\u0275text(5, "Affiliate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7, "Organisations connected with XcellHost through our affiliate network.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "div", 186);
    \u0275\u0275repeaterCreate(9, AssociationsPage_Conditional_193_For_10_Template, 4, 3, "article", 184, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.affiliateAssociations);
  }
}
var AssociationsPage = class _AssociationsPage {
  seo = inject(SeoService);
  activeTab = signal("it-trade", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  tabs = [
    { id: "it-trade", label: "IT Trade Associations" },
    { id: "industry", label: "Industry Associations" },
    { id: "country", label: "Country Associations" },
    { id: "business-network", label: "Business Networks" },
    { id: "affiliate", label: "Affiliate Networks" }
  ];
  countryAssociations = [
    { name: "Indo-German Chamber of Commerce", image: "/assets/images/associations/country/indo-german-chamber.png" },
    { name: "Indo-French Chamber of Commerce", image: "/assets/images/associations/country/indo-french-chamber.jpg" },
    { name: "Indo-American Chamber of Commerce", image: "/assets/images/associations/country/indo-american-chamber.png" },
    { name: "Indo-African Chamber of Commerce & Industry", image: "/assets/images/associations/country/indo-african-chamber.jpg" },
    { name: "Asian-African Chamber of Commerce & Industry", image: "/assets/images/associations/industry-asian-african-chamber.png" },
    { name: "WTC", image: "/assets/images/images.jpg" }
  ];
  itTradeAssociations = [
    { name: "ASIRT", image: "/assets/images/associations/trade/asirt.jpg", website: "https://asirt.in/" },
    { name: "TAIT", image: "/assets/images/associations/trade/tait.png", website: "https://tait.in/" },
    { name: "ISODA", image: "/assets/images/associations/trade/isoda.png", website: "https://isoda.in/" },
    { name: "PCAIT", image: "/assets/images/associations/trade/pcait.png", website: "https://www.pcait.in/" },
    { name: "GESIA", image: "/assets/images/associations/trade/gesia.png", website: "https://gesia.org/" },
    { name: "COMPASS", image: "/assets/images/associations/trade/compass.jpg", website: "https://www.compassindia.com/" },
    { name: "CMDA", image: "/assets/images/associations/industry-cmda.png", website: "https://cmdapune.org/" },
    { name: "MSME", image: "/assets/images/logotm.webp", website: "" },
    { name: "CYBER SECURITY ASSOCIATION OF INDIA", image: "/assets/images/unnamed.png", website: "https://www.ncsai.in/" },
    { name: "ASCMO", image: "/assets/images/Ascom.png", website: "" }
  ];
  industryAssociations = [
    {
      name: "Mahratta Chamber of Commerce, Industries and Agriculture (MCCIA)",
      image: "/assets/images/associations/industry-mccia.png"
    },
    {
      name: "SME Chamber of India",
      image: "/assets/images/associations/industry-sme-chamber-india.png"
    },
    {
      name: "Taloja",
      image: "/assets/images/taloja.webp"
    }
  ];
  businessNetworkAssociations = [
    {
      name: "TiE Mumbai",
      image: "/assets/images/associations/business-tie-mumbai.jpg"
    },
    {
      name: "India Business Group",
      image: "/assets/images/associations/business-india-business-group.jpg"
    },
    {
      name: "Tajurba",
      image: "/assets/images/associations/business-tajurba.jpg"
    },
    {
      name: "Business Leadership League (BLL)",
      image: "/assets/images/associations/business-leadership-league.jpg"
    },
    {
      name: "CORPORATE CONNECTIONS",
      image: "/assets/images/corp.jpg"
    }
  ];
  affiliateAssociations = [
    {
      name: "ICAI",
      image: "/assets/images/associations/industry-association-member.avif"
    },
    {
      name: "The Institute of Company Secretaries of India (ICSI)",
      image: "/assets/images/associations/affiliate-icsi.png"
    }
  ];
  constructor() {
    this.seo.set("Associations | XcellHost", "Explore the IT trade, country, industry and affiliate associations connected with XcellHost.", "/associations/");
  }
  selectTab(tab) {
    this.activeTab.set(tab);
  }
  onTabKeydown(event, index) {
    let nextIndex = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      nextIndex = (index + 1) % this.tabs.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      nextIndex = (index + this.tabs.length - 1) % this.tabs.length;
    else if (event.key === "Home")
      nextIndex = 0;
    else if (event.key === "End")
      nextIndex = this.tabs.length - 1;
    else
      return;
    event.preventDefault();
    this.activeTab.set(this.tabs[nextIndex].id);
    const tabList = event.currentTarget.parentElement;
    tabList?.querySelectorAll('[role="tab"]')[nextIndex]?.focus();
  }
  static \u0275fac = function AssociationsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AssociationsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssociationsPage, selectors: [["xh-associations-page"]], hostAttrs: [2, "display", "contents"], decls: 194, vars: 1, consts: [[1, "associations-page"], ["aria-labelledby", "associations-title", 1, "associations-hero"], [1, "associations-wrap", "associations-hero-inner"], [1, "associations-hero-copy"], [1, "associations-eyebrow"], ["id", "associations-title"], ["href", "#association-groups-title", 1, "association-explore"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "association-network-animation"], ["viewBox", "0 0 580 430", "fill", "none"], ["id", "associationGlobe", "cx", ".5", "cy", ".85", "r", ".9"], ["stop-color", "#ffdb91"], ["offset", ".2", "stop-color", "#669bcc"], ["offset", ".7", "stop-color", "#08518d"], ["offset", "1", "stop-color", "#093260"], ["id", "associationSun"], ["stop-color", "#fff6c0", "stop-opacity", ".9"], ["offset", ".35", "stop-color", "#ffbd6755"], ["offset", "1", "stop-color", "#ffbd6700"], ["id", "associationSuit", "x2", "1", "y2", "1"], ["stop-color", "#17385b"], ["offset", "1", "stop-color", "#07162b"], ["id", "associationSkin", "x2", ".8", "y2", "1"], ["stop-color", "#ebbd91"], ["offset", "1", "stop-color", "#a87755"], ["id", "associationReflection", "x2", "0", "y2", "1"], ["stop-color", "#62bcff", "stop-opacity", ".14"], ["offset", "1", "stop-color", "#62bcff", "stop-opacity", "0"], ["id", "associationBusinessPerson"], ["cx", "0", "cy", "0", "r", "9", "fill", "#19324f"], ["d", "M-9 -3Q-8 -14 1 -12Q12 -10 9 0L5 -6Z", "fill", "#07192f"], ["d", "M-14 14L-9 7H9L16 15L13 46L10 87H3L1 49L-3 87H-10L-12 49Z", "fill", "#0b2542", "stroke", "#3a6890", "stroke-width", ".5"], ["d", "M-5 10L0 22L6 10M0 22V35", "stroke", "#5686a9", "stroke-width", "1"], ["id", "associationIcon"], ["stop-color", "#effaff"], ["offset", "1", "stop-color", "#7fbdeb"], ["id", "associationDots", "width", "5", "height", "5", "patternUnits", "userSpaceOnUse"], ["cx", "1", "cy", "1", "r", ".9", "fill", "#bbecff"], ["id", "associationWindows", "width", "10", "height", "12", "patternUnits", "userSpaceOnUse"], ["x", "2", "y", "3", "width", "3", "height", "4", "fill", "#5ab9ef", "opacity", ".65"], ["id", "associationGlobeClip"], ["cx", "290", "cy", "190", "r", "150"], ["cx", "290", "cy", "190", "r", "153", "stroke", "#4dc6ff", "stroke-width", "5", "stroke-opacity", ".2", 1, "association-globe-halo"], ["cx", "290", "cy", "190", "r", "150", "fill", "url(#associationGlobe)", "stroke", "#90e2ff", "stroke-width", "1.5"], ["clip-path", "url(#associationGlobeClip)"], ["stroke", "#9cddff", "stroke-opacity", ".25"], ["cx", "290", "cy", "190", "rx", "75", "ry", "150"], ["cx", "290", "cy", "190", "rx", "120", "ry", "150"], ["cx", "290", "cy", "190", "rx", "150", "ry", "55"], ["cx", "290", "cy", "190", "rx", "140", "ry", "105"], ["fill", "url(#associationDots)"], ["d", "M173 99L192 81L221 83L239 108L226 130L207 128L200 151L184 150L176 124Z"], ["d", "M204 177L229 183L246 213L228 238L224 264L211 282L203 242L190 219Z"], ["d", "M284 100L314 81L358 83L393 106L417 133L390 145L365 137L346 162L321 149L314 122L291 129Z"], ["d", "M310 153L340 163L353 198L339 236L319 251L304 221L294 180Z"], ["d", "M380 239L414 229L433 250L408 267L384 261Z"], ["stroke", "#b8e7ff", "stroke-width", "1.2", "stroke-dasharray", "4 8", 1, "association-globe-routes"], ["d", "M191 122Q276 50 363 128M191 122Q264 133 326 195M326 195Q350 164 404 250M222 214Q261 99 363 128"], ["fill", "#dbf7ff", 1, "association-city-nodes"], ["cx", "191", "cy", "122", "r", "3"], ["cx", "363", "cy", "128", "r", "3"], ["cx", "326", "cy", "195", "r", "3"], ["cx", "222", "cy", "214", "r", "3"], ["stroke", "#e0f8ff", "stroke-width", "2.5", "stroke-dasharray", "3 145", "stroke-linecap", "round", 1, "association-route-packets"], ["d", "M191 122Q276 50 363 128"], ["d", "M222 214Q261 99 363 128"], ["d", "M326 195Q350 164 404 250"], ["stroke", "#bdeeff", "stroke-opacity", ".7", 1, "association-node-rings"], ["cx", "191", "cy", "122", "r", "8"], ["cx", "363", "cy", "128", "r", "8"], ["cx", "326", "cy", "195", "r", "8"], ["cx", "222", "cy", "214", "r", "8"], ["cx", "290", "cy", "187", "rx", "236", "ry", "156", "stroke", "#87d2ff", "stroke-opacity", ".5", "stroke-dasharray", "3 9", 1, "association-outer-orbit"], ["fill", "#123d65", "stroke", "#3375a0", "stroke-width", ".7", 1, "association-skyline"], ["d", "M28 343V286H55V343M66 343V267H92V343M102 343V295H132V343M141 343V257H164V343M423 343V282H447V343M460 343V245H488V343M499 343V281H525V343M536 343V216H560V343"], ["d", "M548 216V188M153 257V239M474 245V229"], ["fill", "url(#associationWindows)"], ["d", "M28 286H55V343H28ZM66 267H92V343H66ZM102 295H132V343H102ZM141 257H164V343H141ZM423 282H447V343H423ZM460 245H488V343H460ZM499 281H525V343H499ZM536 216H560V343H536Z"], ["stroke", "#63a1cd", "stroke-opacity", ".65", "stroke-width", "1"], ["d", "M31 283H51V278H35V283M69 263H89M75 263V251M146 253H159M151 248H155M466 240H483V234H466ZM540 211H555M547 201V188M31 310H52M69 290H89M463 277H485M538 250H558"], ["fill", "#ffc97f", 1, "association-building-lights"], ["x", "42", "y", "300", "width", "3", "height", "4"], ["x", "75", "y", "282", "width", "3", "height", "4"], ["x", "113", "y", "316", "width", "3", "height", "4"], ["x", "152", "y", "286", "width", "3", "height", "4"], ["x", "432", "y", "305", "width", "3", "height", "4"], ["x", "471", "y", "265", "width", "3", "height", "4"], ["x", "510", "y", "318", "width", "3", "height", "4"], ["x", "548", "y", "240", "width", "3", "height", "4"], ["cx", "289", "cy", "276", "rx", "128", "ry", "113", "fill", "url(#associationSun)"], ["d", "M29 347H561", "stroke", "#599bd0", "stroke-opacity", ".4"], ["cx", "289", "cy", "397", "rx", "166", "ry", "13", "fill", "#229cff", "opacity", ".12"], ["d", "M180 389H225L238 415H170ZM351 389H398L408 415H338Z", "fill", "url(#associationReflection)"], ["opacity", ".8", 1, "association-community-figures"], ["href", "#associationBusinessPerson", "transform", "translate(69 288) scale(.73)"], ["href", "#associationBusinessPerson", "transform", "translate(108 284) scale(.8)"], ["d", "M76 303L87 315L102 307M108 303L94 316", "stroke", "#183b60", "stroke-width", "5", "stroke-linecap", "round"], ["href", "#associationBusinessPerson", "transform", "translate(465 284) scale(.8)"], ["href", "#associationBusinessPerson", "transform", "translate(507 290) scale(.72)"], ["d", "M468 302L485 314L503 304", "stroke", "#183b60", "stroke-width", "5", "stroke-linecap", "round"], ["d", "M474 307L490 310L487 319L474 316Z", "fill", "#82b6d9"], [1, "association-handshake"], ["fill", "url(#associationSuit)", "stroke", "#437397", "stroke-width", "1"], ["d", "M182 389L187 292L179 269L190 234L220 218L242 230L244 281L231 322L223 389H209L209 326L200 389Z"], ["d", "M352 389L346 323L334 281L337 230L359 218L389 234L400 269L392 292L397 389H379L371 326L368 389Z"], ["d", "M233 236L249 267L286 276L281 288L238 278L214 247Z"], ["d", "M345 236L329 267L289 276L293 288L340 278L363 247Z"], ["d", "M279 276L287 273L298 279L301 285L291 292L282 288L276 282Z", "fill", "#e6b17e", "stroke", "#eaccaa"], ["d", "M221 219Q225 213 225 205L239 206Q237 217 236 226L231 231ZM358 219Q354 213 354 205L340 206Q342 218 343 226L349 230Z", "fill", "#b78564"], ["d", "M207 189Q205 177 215 171Q227 164 239 171Q246 177 245 186L246 192Q247 195 251 198Q253 200 249 201L245 202L245 206Q248 208 243 209Q244 213 239 215Q234 219 226 215L220 211Q214 208 213 200Q207 198 207 189Z", "fill", "url(#associationSkin)"], ["d", "M207 194Q201 188 203 177Q205 163 220 162Q237 158 245 169Q248 174 247 180Q239 177 232 173Q224 181 216 183L213 192L211 196Z", "fill", "#0a1c33"], ["d", "M209 173Q218 163 233 166", "stroke", "#31465e", "stroke-opacity", ".65", "stroke-width", "1.5", "stroke-linecap", "round"], ["d", "M372 189Q374 177 364 171Q352 164 340 171Q333 177 334 186L333 192Q332 195 328 198Q326 200 330 201L334 202L334 206Q331 208 336 209Q335 213 340 215Q345 219 353 215L359 211Q365 207 366 199Q372 198 372 189Z", "fill", "url(#associationSkin)"], ["d", "M370 194Q378 186 375 175Q373 163 359 161Q343 158 334 169Q331 173 332 179Q340 178 347 173Q354 183 364 185L367 194Z", "fill", "#0a1c33"], ["cx", "379", "cy", "181", "rx", "10", "ry", "11", "fill", "#0a1c33"], ["d", "M374 172Q383 173 385 181", "stroke", "#30435a", "stroke-opacity", ".65", "stroke-width", "1.3", "stroke-linecap", "round"], ["d", "M219 223L232 242L230 265M356 223L343 242L346 265", "stroke", "#82a3bd", "stroke-opacity", ".6"], ["d", "M220 221L232 229L236 220L231 245Z", "fill", "#aacadd"], ["d", "M230 230L234 229L233 249L229 243Z", "fill", "#338cc6"], ["d", "M353 220L341 228L343 240L359 223Z", "fill", "#b4cdda"], ["d", "M217 222L209 237L222 244L218 249L233 264M359 224L369 237L355 244L359 251L345 265", "stroke", "#5883a5", "stroke-opacity", ".7"], ["d", "M236 186Q239 184 242 187M337 187Q340 184 343 186", "stroke", "#49382f", "stroke-width", "1.1", "stroke-linecap", "round"], ["d", "M237 190Q240 189 242 190M337 190Q340 189 342 190", "stroke", "#263441", "stroke-width", "1.1", "stroke-linecap", "round"], ["cx", "241", "cy", "190", "r", ".9", "fill", "#1f2d3b"], ["cx", "338", "cy", "190", "r", ".9", "fill", "#1f2d3b"], ["d", "M243 191L243 197Q244 200 247 199M336 191L336 197Q335 200 332 199", "stroke", "#aa7757", "stroke-width", ".8", "stroke-linecap", "round"], ["d", "M237 207Q240 208 244 206M335 206Q339 208 342 207", "stroke", "#8a5048", "stroke-width", "1", "stroke-linecap", "round"], ["d", "M233 211Q237 213 240 212M339 212Q342 213 346 211", "stroke", "#b98261", "stroke-width", ".7", "stroke-linecap", "round"], ["cx", "214", "cy", "194", "rx", "3.7", "ry", "5.2", "fill", "#ce9b76"], ["cx", "365", "cy", "194", "rx", "3.7", "ry", "5.2", "fill", "#ce9b76"], ["d", "M215 196Q211 194 214 191Q216 190 216 194M364 196Q368 194 365 191Q363 190 363 194", "stroke", "#a97253", "stroke-width", ".8", "stroke-linecap", "round"], ["cx", "366", "cy", "198", "r", "1.5", "fill", "#ffd797"], ["d", "M277 274L273 284M304 278L300 288", "stroke", "#d7e8f4", "stroke-width", "3"], ["d", "M289 279L297 284M286 283L293 289", "stroke", "#bd8a62", "stroke-width", "1"], ["d", "M212 282H222M382 282H391M203 327L198 374M375 327L382 375", "stroke", "#6090ae", "stroke-opacity", ".35"], ["d", "M180 389H200L202 394H178ZM209 389H224L227 394H207ZM351 389H369L369 394H348ZM380 389H398L401 394H380Z", "fill", "#08172a"], [1, "association-icon-bubble", "bubble-community"], ["cx", "130", "cy", "69", "r", "29", "fill", "url(#associationIcon)"], ["fill", "#165a9e"], ["cx", "130", "cy", "61", "r", "6"], ["cx", "115", "cy", "64", "r", "4"], ["cx", "145", "cy", "64", "r", "4"], ["d", "M119 84V76Q130 63 141 76V84ZM107 81V74Q112 68 117 73V81ZM143 81V73Q150 68 155 74V81Z"], [1, "association-icon-bubble", "bubble-world"], ["cx", "448", "cy", "64", "r", "29", "fill", "url(#associationIcon)"], ["stroke", "#165a9e", "stroke-width", "1.8"], ["cx", "448", "cy", "64", "r", "16"], ["cx", "448", "cy", "64", "rx", "7", "ry", "16"], ["d", "M432 64H464M435 56H461M435 72H461"], [1, "association-icon-bubble", "bubble-growth"], ["cx", "506", "cy", "159", "r", "27", "fill", "url(#associationIcon)"], ["d", "M492 173V163H499V173ZM503 173V154H510V173ZM514 173V145H521V173Z", "fill", "#165a9e"], [1, "association-icon-bubble", "bubble-connect"], ["cx", "77", "cy", "169", "r", "27", "fill", "url(#associationIcon)"], ["d", "M61 160L68 156L77 161L85 157L94 162L87 175L80 178L65 170Z", "stroke", "#165a9e", "stroke-width", "2", "stroke-linejoin", "round"], ["d", "M77 161L71 167L75 171L81 167L88 172", "stroke", "#165a9e", "stroke-width", "2"], [1, "association-icon-bubble", "bubble-technology"], ["cx", "501", "cy", "246", "r", "24", "fill", "url(#associationIcon)"], ["d", "M487 235H514V252H487ZM497 253V259M492 259H509M492 240L488 243L492 247M508 240L512 243L508 247", "stroke", "#165a9e", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["fill", "#b6e6ff", 1, "association-ambient-particles"], ["cx", "162", "cy", "39", "r", "1.5"], ["cx", "380", "cy", "27", "r", "2"], ["cx", "49", "cy", "227", "r", "1.5"], ["cx", "528", "cy", "92", "r", "2"], ["d", "M181 68V76M177 72H185M416 164V174M411 169H421", "stroke", "#b6e6ff", "stroke-width", "1.2"], ["x", "290", "y", "426", "text-anchor", "middle", 1, "association-animation-caption"], ["aria-labelledby", "association-groups-title", 1, "associations-content"], [1, "associations-wrap"], [1, "associations-heading"], ["id", "association-groups-title"], [1, "associations-layout"], ["role", "tablist", "aria-label", "Association groups", "aria-orientation", "vertical", 1, "associations-tabs"], ["type", "button", "role", "tab", 3, "id", "is-active"], ["id", "association-panel-it-trade", "role", "tabpanel", "aria-labelledby", "association-tab-it-trade", 1, "associations-panel"], ["id", "association-panel-country", "role", "tabpanel", "aria-labelledby", "association-tab-country", 1, "associations-panel"], ["id", "association-panel-industry", "role", "tabpanel", "aria-labelledby", "association-tab-industry", 1, "associations-panel"], ["id", "association-panel-business-network", "role", "tabpanel", "aria-labelledby", "association-tab-business-network", 1, "associations-panel"], ["id", "association-panel-affiliate", "role", "tabpanel", "aria-labelledby", "association-tab-affiliate", 1, "associations-panel"], ["type", "button", "role", "tab", 3, "click", "keydown", "id"], [1, "associations-panel-heading"], [1, "associations-grid"], ["target", "_blank", "rel", "noopener noreferrer", 1, "association-card", 3, "href"], ["loading", "lazy", 3, "src", "alt"], [1, "associations-grid", "associations-grid-country"], [1, "association-card"], [1, "associations-grid", "associations-grid-industry"], [1, "associations-grid", "associations-grid-affiliate"]], template: function AssociationsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "XcellHost network");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "h1", 5);
      \u0275\u0275text(7, "Associations that connect us ");
      \u0275\u0275domElementStart(8, "em");
      \u0275\u0275text(9, "across markets.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "p");
      \u0275\u0275text(11, " Our chamber and trade-association relationships help us stay connected to business communities, technology leaders and emerging opportunities. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "a", 6);
      \u0275\u0275text(13, "Explore our network ");
      \u0275\u0275domElementStart(14, "span", 7);
      \u0275\u0275text(15, "\u2193");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(17, "svg", 9)(18, "defs")(19, "radialGradient", 10);
      \u0275\u0275domElement(20, "stop", 11)(21, "stop", 12)(22, "stop", 13)(23, "stop", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "radialGradient", 15);
      \u0275\u0275domElement(25, "stop", 16)(26, "stop", 17)(27, "stop", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "linearGradient", 19);
      \u0275\u0275domElement(29, "stop", 20)(30, "stop", 21);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "linearGradient", 22);
      \u0275\u0275domElement(32, "stop", 23)(33, "stop", 24);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "linearGradient", 25);
      \u0275\u0275domElement(35, "stop", 26)(36, "stop", 27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "g", 28);
      \u0275\u0275domElement(38, "circle", 29)(39, "path", 30)(40, "path", 31)(41, "path", 32);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(42, "linearGradient", 33);
      \u0275\u0275domElement(43, "stop", 34)(44, "stop", 35);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(45, "pattern", 36);
      \u0275\u0275domElement(46, "circle", 37);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "pattern", 38);
      \u0275\u0275domElement(48, "rect", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "clipPath", 40);
      \u0275\u0275domElement(50, "circle", 41);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(51, "circle", 42)(52, "circle", 43);
      \u0275\u0275domElementStart(53, "g", 44)(54, "g", 45);
      \u0275\u0275domElement(55, "ellipse", 46)(56, "ellipse", 47)(57, "ellipse", 48)(58, "ellipse", 49);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "g", 50);
      \u0275\u0275domElement(60, "path", 51)(61, "path", 52)(62, "path", 53)(63, "path", 54)(64, "path", 55);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "g", 56);
      \u0275\u0275domElement(66, "path", 57);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "g", 58);
      \u0275\u0275domElement(68, "circle", 59)(69, "circle", 60)(70, "circle", 61)(71, "circle", 62);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "g", 63);
      \u0275\u0275domElement(73, "path", 64)(74, "path", 65)(75, "path", 66);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(76, "g", 67);
      \u0275\u0275domElement(77, "circle", 68)(78, "circle", 69)(79, "circle", 70)(80, "circle", 71);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(81, "ellipse", 72);
      \u0275\u0275domElementStart(82, "g", 73);
      \u0275\u0275domElement(83, "path", 74)(84, "path", 75);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(85, "g", 76);
      \u0275\u0275domElement(86, "path", 77);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(87, "g", 78);
      \u0275\u0275domElement(88, "path", 79);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(89, "g", 80);
      \u0275\u0275domElement(90, "rect", 81)(91, "rect", 82)(92, "rect", 83)(93, "rect", 84)(94, "rect", 85)(95, "rect", 86)(96, "rect", 87)(97, "rect", 88);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(98, "ellipse", 89)(99, "path", 90)(100, "ellipse", 91)(101, "path", 92);
      \u0275\u0275domElementStart(102, "g", 93);
      \u0275\u0275domElement(103, "use", 94)(104, "use", 95)(105, "path", 96)(106, "use", 97)(107, "use", 98)(108, "path", 99)(109, "path", 100);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(110, "g", 101)(111, "g", 102);
      \u0275\u0275domElement(112, "path", 103)(113, "path", 104)(114, "path", 105)(115, "path", 106);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(116, "path", 107)(117, "path", 108)(118, "path", 109)(119, "path", 110)(120, "path", 111)(121, "path", 112)(122, "path", 113)(123, "ellipse", 114)(124, "path", 115)(125, "path", 116)(126, "path", 117)(127, "path", 118)(128, "path", 119)(129, "path", 120)(130, "path", 121)(131, "path", 122)(132, "circle", 123)(133, "circle", 124)(134, "path", 125)(135, "path", 126)(136, "path", 127)(137, "ellipse", 128)(138, "ellipse", 129)(139, "path", 130)(140, "circle", 131)(141, "path", 132)(142, "path", 133)(143, "path", 134)(144, "path", 135);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(145, "g", 136);
      \u0275\u0275domElement(146, "circle", 137);
      \u0275\u0275domElementStart(147, "g", 138);
      \u0275\u0275domElement(148, "circle", 139)(149, "circle", 140)(150, "circle", 141)(151, "path", 142);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(152, "g", 143);
      \u0275\u0275domElement(153, "circle", 144);
      \u0275\u0275domElementStart(154, "g", 145);
      \u0275\u0275domElement(155, "circle", 146)(156, "ellipse", 147)(157, "path", 148);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(158, "g", 149);
      \u0275\u0275domElement(159, "circle", 150)(160, "path", 151);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(161, "g", 152);
      \u0275\u0275domElement(162, "circle", 153)(163, "path", 154)(164, "path", 155);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(165, "g", 156);
      \u0275\u0275domElement(166, "circle", 157)(167, "path", 158);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(168, "g", 159);
      \u0275\u0275domElement(169, "circle", 160)(170, "circle", 161)(171, "circle", 162)(172, "circle", 163)(173, "path", 164);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(174, "text", 165);
      \u0275\u0275text(175, "Connecting people. Creating possibilities.");
      \u0275\u0275domElementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(176, "section", 166)(177, "div", 167)(178, "header", 168)(179, "span");
      \u0275\u0275text(180, "Our associations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(181, "h2", 169);
      \u0275\u0275text(182, "Explore our associations network");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(183, "p");
      \u0275\u0275text(184, "Select a group to view the organisations associated with XcellHost.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(185, "div", 170)(186, "div", 171);
      \u0275\u0275repeaterCreate(187, AssociationsPage_For_188_Template, 2, 7, "button", 172, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(189, AssociationsPage_Conditional_189_Template, 11, 0, "div", 173)(190, AssociationsPage_Conditional_190_Template, 11, 0, "div", 174)(191, AssociationsPage_Conditional_191_Template, 11, 0, "div", 175)(192, AssociationsPage_Conditional_192_Template, 11, 0, "div", 176)(193, AssociationsPage_Conditional_193_Template, 11, 0, "div", 177);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(187);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeTab() === "it-trade" ? 189 : ctx.activeTab() === "country" ? 190 : ctx.activeTab() === "industry" ? 191 : ctx.activeTab() === "business-network" ? 192 : 193);
    }
  }, styles: ['\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.associations-page[_ngcontent-%COMP%] {\n  background: #f7f9fc;\n  color: #071f49;\n}\n.associations-wrap[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.associations-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 84px 0 88px;\n  background:\n    radial-gradient(\n      circle at 84% 14%,\n      rgba(50, 139, 255, .32),\n      transparent 25%),\n    linear-gradient(\n      120deg,\n      #061c42 0%,\n      #0a397b 58%,\n      #1262c5 100%);\n}\n.associations-hero[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -105px;\n  bottom: -180px;\n  width: 460px;\n  height: 460px;\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 50%;\n  box-shadow: 0 0 0 58px rgba(255, 255, 255, .035), 0 0 0 116px rgba(255, 255, 255, .025);\n  content: "";\n}\n.associations-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  align-items: center;\n  gap: 40px;\n}\n.associations-hero-image[_ngcontent-%COMP%] {\n  display: block;\n  width: 125%;\n  max-width: none;\n  margin-left: -8%;\n  height: auto;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 45%,\n      transparent 72%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 45%,\n      transparent 72%);\n}\n.associations-eyebrow[_ngcontent-%COMP%], \n.associations-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.associations-panel-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #1870df;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.associations-eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  color: #82c3ff;\n}\n.associations-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0;\n  color: #fff;\n  font: 800 clamp(40px, 5vw, 64px)/1.06 var(--disp);\n  letter-spacing: -.035em;\n}\n.associations-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #72bdff;\n  font-style: normal;\n}\n.associations-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 24px 0 0;\n  color: #d6e6fb;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.associations-content[_ngcontent-%COMP%] {\n  padding: 68px 0 84px;\n}\n.associations-heading[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 34px;\n  text-align: center;\n}\n.associations-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #071f49;\n  font: 750 clamp(30px, 4vw, 44px)/1.15 var(--disp);\n  letter-spacing: -.025em;\n}\n.associations-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  color: #61718a;\n  font-size: 16px;\n  line-height: 1.65;\n}\n.associations-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr);\n  gap: 34px;\n  align-items: start;\n}\n.associations-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px 18px 8px 0;\n  border-right: 1px solid #d6deeb;\n}\n.associations-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 18px 20px;\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: #939eae;\n  cursor: pointer;\n  text-align: left;\n  font: 650 16px/1.25 var(--body);\n  transition: color .2s ease, background .2s ease;\n}\n.associations-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.associations-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, \n.associations-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: #eef5ff;\n  color: #071f49;\n}\n.associations-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(24, 112, 223, .24);\n  outline-offset: 2px;\n}\n.associations-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 8px;\n  right: -19px;\n  bottom: 8px;\n  width: 3px;\n  border-radius: 2px;\n  background: #1870df;\n  content: "";\n}\n.associations-panel[_ngcontent-%COMP%] {\n  min-height: 490px;\n  padding: 34px;\n  border: 1px solid #d6e1f1;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 16px 40px rgba(4, 30, 66, .08);\n}\n.associations-panel-heading[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n}\n.associations-panel-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #071f49;\n  font: 750 clamp(26px, 3vw, 34px)/1.2 var(--disp);\n}\n.associations-panel-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #61718a;\n  font-size: 15px;\n  line-height: 1.65;\n}\n.associations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.associations-grid-country[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.associations-grid-industry[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.associations-grid-affiliate[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.association-card[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  display: grid;\n  min-width: 0;\n  min-height: 190px;\n  grid-template-rows: 126px auto;\n  align-items: center;\n  margin: 0;\n  overflow: hidden;\n  border: 1px solid #e1e8f2;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(4, 30, 66, .055);\n  transition:\n    transform .2s ease,\n    border-color .2s ease,\n    box-shadow .2s ease;\n}\n.association-card[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #1565d8;\n  outline-offset: 4px;\n}\n.association-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #b8cce8;\n  box-shadow: 0 14px 30px rgba(4, 30, 66, .1);\n}\n.association-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: calc(100% - 32px);\n  height: 100px;\n  margin: 14px auto 8px;\n  object-fit: contain;\n}\n.association-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  align-self: stretch;\n  margin: 0;\n  padding: 14px 16px;\n  border-top: 1px solid #edf1f6;\n  background: #f9fbfe;\n  color: #18345f;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.4;\n  text-align: center;\n}\n@media (max-width: 900px) {\n  .associations-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .associations-hero-image[_ngcontent-%COMP%] {\n    width: 110%;\n    margin-left: -5%;\n  }\n  .associations-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .associations-tabs[_ngcontent-%COMP%] {\n    flex-direction: row;\n    overflow-x: auto;\n    border-right: 0;\n    border-bottom: 1px solid #d6deeb;\n    padding: 0 0 8px;\n  }\n  .associations-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    min-width: 150px;\n    text-align: center;\n  }\n  .associations-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]::after {\n    top: auto;\n    right: 8px;\n    bottom: -9px;\n    left: 8px;\n    width: auto;\n    height: 3px;\n  }\n}\n@media (max-width: 680px) {\n  .associations-wrap[_ngcontent-%COMP%] {\n    width: min(100% - 32px, 1180px);\n  }\n  .associations-hero[_ngcontent-%COMP%] {\n    padding: 64px 0 68px;\n  }\n  .associations-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .associations-content[_ngcontent-%COMP%] {\n    padding: 48px 0 60px;\n  }\n  .associations-panel[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 20px;\n    border-radius: 17px;\n  }\n  .associations-grid[_ngcontent-%COMP%], \n   .associations-grid-country[_ngcontent-%COMP%], \n   .associations-grid-industry[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .associations-grid-affiliate[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .association-card[_ngcontent-%COMP%] {\n    min-height: 176px;\n    grid-template-rows: 116px auto;\n  }\n  .association-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 92px;\n  }\n}\n.associations-hero[_ngcontent-%COMP%] {\n  padding: 50px 0;\n  background:\n    radial-gradient(\n      ellipse at 83% 43%,\n      #155f9b66,\n      transparent 50%),\n    linear-gradient(\n      120deg,\n      #061c3e,\n      #0b325e);\n}\n.associations-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(34px, 3.9vw, 52px);\n  line-height: 1.12;\n}\n.associations-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #bed3e9;\n}\n.association-explore[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 26px;\n  margin-top: 26px;\n  padding: 13px 20px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      110deg,\n      #ff9744,\n      #ff7900);\n  color: #fff;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 12px;\n  box-shadow: 0 8px 24px #ff880020;\n}\n.association-explore[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #8ed4ff;\n  outline-offset: 4px;\n}\n#association-groups-title[_ngcontent-%COMP%] {\n  scroll-margin-top: 100px;\n}\n.association-network-animation[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 620px;\n  margin: auto;\n  filter: drop-shadow(0 18px 24px #00132d44);\n}\n.association-network-animation[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n.association-animation-caption[_ngcontent-%COMP%] {\n  fill: #b7d7ed;\n  font: 10px system-ui, sans-serif;\n  letter-spacing: .4px;\n}\n.association-icon-bubble[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_association-bubble-drift 6s ease-in-out infinite;\n  filter: drop-shadow(0 8px 14px #129df044);\n}\n.bubble-world[_ngcontent-%COMP%] {\n  animation-delay: -2s;\n}\n.bubble-growth[_ngcontent-%COMP%] {\n  animation-delay: -3.5s;\n}\n.bubble-connect[_ngcontent-%COMP%] {\n  animation-delay: -1s;\n}\n.bubble-technology[_ngcontent-%COMP%] {\n  animation-delay: -4s;\n}\n.association-route-packets[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_association-packet-flow 7s linear infinite;\n  filter: drop-shadow(0 0 3px #a0e8ff);\n}\n.association-node-rings[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  transform-box: fill-box;\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_association-node-pulse 4s ease-out infinite;\n}\n.association-node-rings[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:nth-child(even) {\n  animation-delay: -2s;\n}\n.association-building-lights[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_association-light-pulse 5s ease-in-out infinite;\n}\n.association-ambient-particles[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_association-light-pulse 4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_association-packet-flow {\n  to {\n    stroke-dashoffset: -296;\n  }\n}\n@keyframes _ngcontent-%COMP%_association-node-pulse {\n  0% {\n    transform: scale(.6);\n    opacity: 0;\n  }\n  30% {\n    opacity: .8;\n  }\n  100% {\n    transform: scale(1.7);\n    opacity: 0;\n  }\n}\n.association-globe-routes[_ngcontent-%COMP%], \n.association-outer-orbit[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_association-route-flow 16s linear infinite;\n}\n.association-globe-halo[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_association-globe-pulse 5s ease-in-out infinite;\n  transform-origin: 290px 190px;\n}\n.association-city-nodes[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_association-light-pulse 3s ease-in-out infinite;\n}\n.association-handshake[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_association-handshake-drift 7s ease-in-out infinite;\n}\n.associations-tabs[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #dbe6f3;\n  background: #eaf1fa;\n  border-radius: 17px;\n  gap: 7px;\n}\n.associations-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 13px;\n  border: 1px solid transparent;\n  padding: 16px;\n  border-radius: 10px;\n}\n.associations-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #cbdff5;\n  color: #1665c6;\n  box-shadow: 0 5px 15px #0a29570a;\n}\n.associations-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.associations-panel[_ngcontent-%COMP%] {\n  border-color: #dde7f4;\n  box-shadow: 0 14px 36px #0a295708;\n}\n.association-card[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px #0a295708;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f5f9ff);\n}\n@keyframes _ngcontent-%COMP%_association-bubble-drift {\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_association-route-flow {\n  to {\n    stroke-dashoffset: -240;\n  }\n}\n@keyframes _ngcontent-%COMP%_association-globe-pulse {\n  50% {\n    opacity: .5;\n    transform: scale(1.035);\n  }\n}\n@keyframes _ngcontent-%COMP%_association-light-pulse {\n  50% {\n    opacity: .35;\n  }\n}\n@keyframes _ngcontent-%COMP%_association-handshake-drift {\n  50% {\n    transform: translateY(-2px);\n  }\n}\n@media (max-width: 680px) {\n  .associations-hero[_ngcontent-%COMP%] {\n    padding: 32px 0;\n  }\n  .associations-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .association-network-animation[_ngcontent-%COMP%] {\n    max-width: 520px;\n  }\n  .associations-tabs[_ngcontent-%COMP%] {\n    padding: 8px;\n  }\n  .associations-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 140px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .association-network-animation[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n  .association-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=associations.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssociationsPage, [{
    type: Component,
    args: [{ selector: "xh-associations-page", standalone: true, host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="associations-page">\r
  <section class="associations-hero" aria-labelledby="associations-title">\r
    <div class="associations-wrap associations-hero-inner">\r
      <div class="associations-hero-copy">\r
      <span class="associations-eyebrow">XcellHost network</span>\r
      <h1 id="associations-title">Associations that connect us <em>across markets.</em></h1>\r
      <p>\r
        Our chamber and trade-association relationships help us stay connected to business\r
        communities, technology leaders and emerging opportunities.\r
      </p>\r
      <a class="association-explore" href="#association-groups-title">Explore our network <span aria-hidden="true">\u2193</span></a>\r
      </div>\r
      <div class="association-network-animation" aria-hidden="true">\r
        <svg viewBox="0 0 580 430" fill="none">\r
          <defs>\r
            <radialGradient id="associationGlobe" cx=".5" cy=".85" r=".9"><stop stop-color="#ffdb91"/><stop offset=".2" stop-color="#669bcc"/><stop offset=".7" stop-color="#08518d"/><stop offset="1" stop-color="#093260"/></radialGradient>\r
            <radialGradient id="associationSun"><stop stop-color="#fff6c0" stop-opacity=".9"/><stop offset=".35" stop-color="#ffbd6755"/><stop offset="1" stop-color="#ffbd6700"/></radialGradient>\r
            <linearGradient id="associationSuit" x2="1" y2="1"><stop stop-color="#17385b"/><stop offset="1" stop-color="#07162b"/></linearGradient>\r
            <linearGradient id="associationSkin" x2=".8" y2="1"><stop stop-color="#ebbd91"/><stop offset="1" stop-color="#a87755"/></linearGradient>\r
            <linearGradient id="associationReflection" x2="0" y2="1"><stop stop-color="#62bcff" stop-opacity=".14"/><stop offset="1" stop-color="#62bcff" stop-opacity="0"/></linearGradient>\r
            <g id="associationBusinessPerson"><circle cx="0" cy="0" r="9" fill="#19324f"/><path d="M-9 -3Q-8 -14 1 -12Q12 -10 9 0L5 -6Z" fill="#07192f"/><path d="M-14 14L-9 7H9L16 15L13 46L10 87H3L1 49L-3 87H-10L-12 49Z" fill="#0b2542" stroke="#3a6890" stroke-width=".5"/><path d="M-5 10L0 22L6 10M0 22V35" stroke="#5686a9" stroke-width="1"/></g>\r
            <linearGradient id="associationIcon"><stop stop-color="#effaff"/><stop offset="1" stop-color="#7fbdeb"/></linearGradient>\r
            <pattern id="associationDots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".9" fill="#bbecff"/></pattern>\r
            <pattern id="associationWindows" width="10" height="12" patternUnits="userSpaceOnUse"><rect x="2" y="3" width="3" height="4" fill="#5ab9ef" opacity=".65"/></pattern>\r
            <clipPath id="associationGlobeClip"><circle cx="290" cy="190" r="150"/></clipPath>\r
          </defs>\r
          <circle class="association-globe-halo" cx="290" cy="190" r="153" stroke="#4dc6ff" stroke-width="5" stroke-opacity=".2"/>\r
          <circle cx="290" cy="190" r="150" fill="url(#associationGlobe)" stroke="#90e2ff" stroke-width="1.5"/>\r
          <g clip-path="url(#associationGlobeClip)">\r
            <g stroke="#9cddff" stroke-opacity=".25"><ellipse cx="290" cy="190" rx="75" ry="150"/><ellipse cx="290" cy="190" rx="120" ry="150"/><ellipse cx="290" cy="190" rx="150" ry="55"/><ellipse cx="290" cy="190" rx="140" ry="105"/></g>\r
            <g fill="url(#associationDots)"><path d="M173 99L192 81L221 83L239 108L226 130L207 128L200 151L184 150L176 124Z"/><path d="M204 177L229 183L246 213L228 238L224 264L211 282L203 242L190 219Z"/><path d="M284 100L314 81L358 83L393 106L417 133L390 145L365 137L346 162L321 149L314 122L291 129Z"/><path d="M310 153L340 163L353 198L339 236L319 251L304 221L294 180Z"/><path d="M380 239L414 229L433 250L408 267L384 261Z"/></g>\r
            <g class="association-globe-routes" stroke="#b8e7ff" stroke-width="1.2" stroke-dasharray="4 8"><path d="M191 122Q276 50 363 128M191 122Q264 133 326 195M326 195Q350 164 404 250M222 214Q261 99 363 128"/></g>\r
            <g class="association-city-nodes" fill="#dbf7ff"><circle cx="191" cy="122" r="3"/><circle cx="363" cy="128" r="3"/><circle cx="326" cy="195" r="3"/><circle cx="222" cy="214" r="3"/></g>\r
            <g class="association-route-packets" stroke="#e0f8ff" stroke-width="2.5" stroke-dasharray="3 145" stroke-linecap="round"><path d="M191 122Q276 50 363 128"/><path d="M222 214Q261 99 363 128"/><path d="M326 195Q350 164 404 250"/></g>\r
            <g class="association-node-rings" stroke="#bdeeff" stroke-opacity=".7"><circle cx="191" cy="122" r="8"/><circle cx="363" cy="128" r="8"/><circle cx="326" cy="195" r="8"/><circle cx="222" cy="214" r="8"/></g>\r
          </g>\r
          <ellipse class="association-outer-orbit" cx="290" cy="187" rx="236" ry="156" stroke="#87d2ff" stroke-opacity=".5" stroke-dasharray="3 9"/>\r
          <g class="association-skyline" fill="#123d65" stroke="#3375a0" stroke-width=".7"><path d="M28 343V286H55V343M66 343V267H92V343M102 343V295H132V343M141 343V257H164V343M423 343V282H447V343M460 343V245H488V343M499 343V281H525V343M536 343V216H560V343"/><path d="M548 216V188M153 257V239M474 245V229"/></g>\r
          <g fill="url(#associationWindows)"><path d="M28 286H55V343H28ZM66 267H92V343H66ZM102 295H132V343H102ZM141 257H164V343H141ZM423 282H447V343H423ZM460 245H488V343H460ZM499 281H525V343H499ZM536 216H560V343H536Z"/></g>\r
          <g stroke="#63a1cd" stroke-opacity=".65" stroke-width="1"><path d="M31 283H51V278H35V283M69 263H89M75 263V251M146 253H159M151 248H155M466 240H483V234H466ZM540 211H555M547 201V188M31 310H52M69 290H89M463 277H485M538 250H558"/></g>\r
          <g class="association-building-lights" fill="#ffc97f"><rect x="42" y="300" width="3" height="4"/><rect x="75" y="282" width="3" height="4"/><rect x="113" y="316" width="3" height="4"/><rect x="152" y="286" width="3" height="4"/><rect x="432" y="305" width="3" height="4"/><rect x="471" y="265" width="3" height="4"/><rect x="510" y="318" width="3" height="4"/><rect x="548" y="240" width="3" height="4"/></g>\r
          <ellipse cx="289" cy="276" rx="128" ry="113" fill="url(#associationSun)"/>\r
          <path d="M29 347H561" stroke="#599bd0" stroke-opacity=".4"/>\r
          <ellipse cx="289" cy="397" rx="166" ry="13" fill="#229cff" opacity=".12"/>\r
          <path d="M180 389H225L238 415H170ZM351 389H398L408 415H338Z" fill="url(#associationReflection)"/>\r
          <g class="association-community-figures" opacity=".8">\r
            <use href="#associationBusinessPerson" transform="translate(69 288) scale(.73)"/><use href="#associationBusinessPerson" transform="translate(108 284) scale(.8)"/>\r
            <path d="M76 303L87 315L102 307M108 303L94 316" stroke="#183b60" stroke-width="5" stroke-linecap="round"/>\r
            <use href="#associationBusinessPerson" transform="translate(465 284) scale(.8)"/><use href="#associationBusinessPerson" transform="translate(507 290) scale(.72)"/>\r
            <path d="M468 302L485 314L503 304" stroke="#183b60" stroke-width="5" stroke-linecap="round"/>\r
            <path d="M474 307L490 310L487 319L474 316Z" fill="#82b6d9"/>\r
          </g>\r
          <g class="association-handshake">\r
            <g fill="url(#associationSuit)" stroke="#437397" stroke-width="1">\r
              <path d="M182 389L187 292L179 269L190 234L220 218L242 230L244 281L231 322L223 389H209L209 326L200 389Z"/>\r
              <path d="M352 389L346 323L334 281L337 230L359 218L389 234L400 269L392 292L397 389H379L371 326L368 389Z"/>\r
              <path d="M233 236L249 267L286 276L281 288L238 278L214 247Z"/><path d="M345 236L329 267L289 276L293 288L340 278L363 247Z"/>\r
            </g>\r
            <path d="M279 276L287 273L298 279L301 285L291 292L282 288L276 282Z" fill="#e6b17e" stroke="#eaccaa"/>\r
            <path d="M221 219Q225 213 225 205L239 206Q237 217 236 226L231 231ZM358 219Q354 213 354 205L340 206Q342 218 343 226L349 230Z" fill="#b78564"/>\r
            <path d="M207 189Q205 177 215 171Q227 164 239 171Q246 177 245 186L246 192Q247 195 251 198Q253 200 249 201L245 202L245 206Q248 208 243 209Q244 213 239 215Q234 219 226 215L220 211Q214 208 213 200Q207 198 207 189Z" fill="url(#associationSkin)"/>\r
            <path d="M207 194Q201 188 203 177Q205 163 220 162Q237 158 245 169Q248 174 247 180Q239 177 232 173Q224 181 216 183L213 192L211 196Z" fill="#0a1c33"/>\r
            <path d="M209 173Q218 163 233 166" stroke="#31465e" stroke-opacity=".65" stroke-width="1.5" stroke-linecap="round"/>\r
            <path d="M372 189Q374 177 364 171Q352 164 340 171Q333 177 334 186L333 192Q332 195 328 198Q326 200 330 201L334 202L334 206Q331 208 336 209Q335 213 340 215Q345 219 353 215L359 211Q365 207 366 199Q372 198 372 189Z" fill="url(#associationSkin)"/>\r
            <path d="M370 194Q378 186 375 175Q373 163 359 161Q343 158 334 169Q331 173 332 179Q340 178 347 173Q354 183 364 185L367 194Z" fill="#0a1c33"/>\r
            <ellipse cx="379" cy="181" rx="10" ry="11" fill="#0a1c33"/><path d="M374 172Q383 173 385 181" stroke="#30435a" stroke-opacity=".65" stroke-width="1.3" stroke-linecap="round"/>\r
            <path d="M219 223L232 242L230 265M356 223L343 242L346 265" stroke="#82a3bd" stroke-opacity=".6"/>\r
            <path d="M220 221L232 229L236 220L231 245Z" fill="#aacadd"/><path d="M230 230L234 229L233 249L229 243Z" fill="#338cc6"/>\r
            <path d="M353 220L341 228L343 240L359 223Z" fill="#b4cdda"/>\r
            <path d="M217 222L209 237L222 244L218 249L233 264M359 224L369 237L355 244L359 251L345 265" stroke="#5883a5" stroke-opacity=".7"/>\r
            <path d="M236 186Q239 184 242 187M337 187Q340 184 343 186" stroke="#49382f" stroke-width="1.1" stroke-linecap="round"/>\r
            <path d="M237 190Q240 189 242 190M337 190Q340 189 342 190" stroke="#263441" stroke-width="1.1" stroke-linecap="round"/>\r
            <circle cx="241" cy="190" r=".9" fill="#1f2d3b"/><circle cx="338" cy="190" r=".9" fill="#1f2d3b"/>\r
            <path d="M243 191L243 197Q244 200 247 199M336 191L336 197Q335 200 332 199" stroke="#aa7757" stroke-width=".8" stroke-linecap="round"/>\r
            <path d="M237 207Q240 208 244 206M335 206Q339 208 342 207" stroke="#8a5048" stroke-width="1" stroke-linecap="round"/>\r
            <path d="M233 211Q237 213 240 212M339 212Q342 213 346 211" stroke="#b98261" stroke-width=".7" stroke-linecap="round"/>\r
            <ellipse cx="214" cy="194" rx="3.7" ry="5.2" fill="#ce9b76"/><ellipse cx="365" cy="194" rx="3.7" ry="5.2" fill="#ce9b76"/>\r
            <path d="M215 196Q211 194 214 191Q216 190 216 194M364 196Q368 194 365 191Q363 190 363 194" stroke="#a97253" stroke-width=".8" stroke-linecap="round"/>\r
            <circle cx="366" cy="198" r="1.5" fill="#ffd797"/>\r
            <path d="M277 274L273 284M304 278L300 288" stroke="#d7e8f4" stroke-width="3"/><path d="M289 279L297 284M286 283L293 289" stroke="#bd8a62" stroke-width="1"/>\r
            <path d="M212 282H222M382 282H391M203 327L198 374M375 327L382 375" stroke="#6090ae" stroke-opacity=".35"/>\r
            <path d="M180 389H200L202 394H178ZM209 389H224L227 394H207ZM351 389H369L369 394H348ZM380 389H398L401 394H380Z" fill="#08172a"/>\r
          </g>\r
          <g class="association-icon-bubble bubble-community"><circle cx="130" cy="69" r="29" fill="url(#associationIcon)"/><g fill="#165a9e"><circle cx="130" cy="61" r="6"/><circle cx="115" cy="64" r="4"/><circle cx="145" cy="64" r="4"/><path d="M119 84V76Q130 63 141 76V84ZM107 81V74Q112 68 117 73V81ZM143 81V73Q150 68 155 74V81Z"/></g></g>\r
          <g class="association-icon-bubble bubble-world"><circle cx="448" cy="64" r="29" fill="url(#associationIcon)"/><g stroke="#165a9e" stroke-width="1.8"><circle cx="448" cy="64" r="16"/><ellipse cx="448" cy="64" rx="7" ry="16"/><path d="M432 64H464M435 56H461M435 72H461"/></g></g>\r
          <g class="association-icon-bubble bubble-growth"><circle cx="506" cy="159" r="27" fill="url(#associationIcon)"/><path d="M492 173V163H499V173ZM503 173V154H510V173ZM514 173V145H521V173Z" fill="#165a9e"/></g>\r
          <g class="association-icon-bubble bubble-connect"><circle cx="77" cy="169" r="27" fill="url(#associationIcon)"/><path d="M61 160L68 156L77 161L85 157L94 162L87 175L80 178L65 170Z" stroke="#165a9e" stroke-width="2" stroke-linejoin="round"/><path d="M77 161L71 167L75 171L81 167L88 172" stroke="#165a9e" stroke-width="2"/></g>\r
          <g class="association-icon-bubble bubble-technology"><circle cx="501" cy="246" r="24" fill="url(#associationIcon)"/><path d="M487 235H514V252H487ZM497 253V259M492 259H509M492 240L488 243L492 247M508 240L512 243L508 247" stroke="#165a9e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g>\r
          <g class="association-ambient-particles" fill="#b6e6ff"><circle cx="162" cy="39" r="1.5"/><circle cx="380" cy="27" r="2"/><circle cx="49" cy="227" r="1.5"/><circle cx="528" cy="92" r="2"/><path d="M181 68V76M177 72H185M416 164V174M411 169H421" stroke="#b6e6ff" stroke-width="1.2"/></g>\r
          <text x="290" y="426" class="association-animation-caption" text-anchor="middle">Connecting people. Creating possibilities.</text>\r
        </svg>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="associations-content" aria-labelledby="association-groups-title">\r
    <div class="associations-wrap">\r
      <header class="associations-heading">\r
        <span>Our associations</span>\r
        <h2 id="association-groups-title">Explore our associations network</h2>\r
        <p>Select a group to view the organisations associated with XcellHost.</p>\r
      </header>\r
\r
      <div class="associations-layout">\r
        <div class="associations-tabs" role="tablist" aria-label="Association groups" aria-orientation="vertical">\r
          @for (tab of tabs; track tab.id; let index = $index) {\r
            <button\r
              type="button"\r
              role="tab"\r
              [id]="'association-tab-' + tab.id"\r
              [class.is-active]="activeTab() === tab.id"\r
              [attr.aria-selected]="activeTab() === tab.id"\r
              [attr.aria-controls]="'association-panel-' + tab.id"\r
              [attr.tabindex]="activeTab() === tab.id ? 0 : -1"\r
              (click)="selectTab(tab.id)"\r
              (keydown)="onTabKeydown($event, index)"\r
            >\r
              {{ tab.label }}\r
            </button>\r
          }\r
        </div>\r
\r
        @if (activeTab() === 'it-trade') {\r
          <div\r
            class="associations-panel"\r
            id="association-panel-it-trade"\r
            role="tabpanel"\r
            aria-labelledby="association-tab-it-trade"\r
          >\r
            <div class="associations-panel-heading">\r
              <span>Technology network</span>\r
              <h3>IT Trade Associations</h3>\r
              <p>IT trade communities supporting collaboration across the technology industry.</p>\r
            </div>\r
            <div class="associations-grid">\r
              @for (association of itTradeAssociations; track association.name) {\r
                <a class="association-card" [href]="association.website" target="_blank" rel="noopener noreferrer"\r
                  [attr.aria-label]="'Visit ' + association.name + ' website (opens in a new tab)'">\r
                  <img [src]="association.image" [alt]="association.name + ' logo'" loading="lazy" />\r
                  <h4>{{ association.name }}</h4>\r
                </a>\r
              }\r
            </div>\r
          </div>\r
        } @else if (activeTab() === 'country') {\r
          <div\r
            class="associations-panel"\r
            id="association-panel-country"\r
            role="tabpanel"\r
            aria-labelledby="association-tab-country"\r
          >\r
            <div class="associations-panel-heading">\r
              <span>International chambers</span>\r
              <h3>Country Associations</h3>\r
              <p>Chambers strengthening international business relationships and collaboration.</p>\r
            </div>\r
            <div class="associations-grid associations-grid-country">\r
              @for (association of countryAssociations; track association.name) {\r
                <article class="association-card">\r
                  <img [src]="association.image" [alt]="association.name + ' logo'" loading="lazy" />\r
                  <h4>{{ association.name }}</h4>\r
                </article>\r
              }\r
            </div>\r
          </div>\r
        } @else if (activeTab() === 'industry') {\r
          <div\r
            class="associations-panel"\r
            id="association-panel-industry"\r
            role="tabpanel"\r
            aria-labelledby="association-tab-industry"\r
          >\r
            <div class="associations-panel-heading">\r
              <span>Professional network</span>\r
              <h3>Industry Associations</h3>\r
              <p>Professional bodies connecting XcellHost with wider business and industry communities.</p>\r
            </div>\r
            <div class="associations-grid associations-grid-industry">\r
              @for (association of industryAssociations; track association.name) {\r
                <article class="association-card">\r
                  <img [src]="association.image" [alt]="association.name + ' logo'" loading="lazy" />\r
                  <h4>{{ association.name }}</h4>\r
                </article>\r
              }\r
            </div>\r
          </div>\r
        } @else if (activeTab() === 'business-network') {\r
          <div\r
            class="associations-panel"\r
            id="association-panel-business-network"\r
            role="tabpanel"\r
            aria-labelledby="association-tab-business-network"\r
          >\r
            <div class="associations-panel-heading">\r
              <span>Business community</span>\r
              <h3>Business Network</h3>\r
              <p>Business networks supporting entrepreneurship, leadership and meaningful commercial connections.</p>\r
            </div>\r
            <div class="associations-grid associations-grid-industry">\r
              @for (association of businessNetworkAssociations; track association.name) {\r
                <article class="association-card">\r
                  <img [src]="association.image" [alt]="association.name + ' logo'" loading="lazy" />\r
                  <h4>{{ association.name }}</h4>\r
                </article>\r
              }\r
            </div>\r
          </div>\r
        } @else {\r
          <div\r
            class="associations-panel"\r
            id="association-panel-affiliate"\r
            role="tabpanel"\r
            aria-labelledby="association-tab-affiliate"\r
          >\r
            <div class="associations-panel-heading">\r
              <span>Affiliate network</span>\r
              <h3>Affiliate</h3>\r
              <p>Organisations connected with XcellHost through our affiliate network.</p>\r
            </div>\r
            <div class="associations-grid associations-grid-affiliate">\r
              @for (association of affiliateAssociations; track association.name) {\r
                <article class="association-card">\r
                  <img [src]="association.image" [alt]="association.name + ' logo'" loading="lazy" />\r
                  <h4>{{ association.name }}</h4>\r
                </article>\r
              }\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ['/* src/app/pages/associations.page.css */\n:host {\n  display: contents;\n}\n.associations-page {\n  background: #f7f9fc;\n  color: #071f49;\n}\n.associations-wrap {\n  width: min(1180px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.associations-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 84px 0 88px;\n  background:\n    radial-gradient(\n      circle at 84% 14%,\n      rgba(50, 139, 255, .32),\n      transparent 25%),\n    linear-gradient(\n      120deg,\n      #061c42 0%,\n      #0a397b 58%,\n      #1262c5 100%);\n}\n.associations-hero::after {\n  position: absolute;\n  right: -105px;\n  bottom: -180px;\n  width: 460px;\n  height: 460px;\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 50%;\n  box-shadow: 0 0 0 58px rgba(255, 255, 255, .035), 0 0 0 116px rgba(255, 255, 255, .025);\n  content: "";\n}\n.associations-hero-inner {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  align-items: center;\n  gap: 40px;\n}\n.associations-hero-image {\n  display: block;\n  width: 125%;\n  max-width: none;\n  margin-left: -8%;\n  height: auto;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 45%,\n      transparent 72%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 45%,\n      transparent 72%);\n}\n.associations-eyebrow,\n.associations-heading > span,\n.associations-panel-heading > span {\n  display: inline-block;\n  color: #1870df;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.associations-eyebrow {\n  margin-bottom: 18px;\n  color: #82c3ff;\n}\n.associations-hero h1 {\n  max-width: 760px;\n  margin: 0;\n  color: #fff;\n  font: 800 clamp(40px, 5vw, 64px)/1.06 var(--disp);\n  letter-spacing: -.035em;\n}\n.associations-hero h1 em {\n  color: #72bdff;\n  font-style: normal;\n}\n.associations-hero p {\n  max-width: 680px;\n  margin: 24px 0 0;\n  color: #d6e6fb;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.associations-content {\n  padding: 68px 0 84px;\n}\n.associations-heading {\n  max-width: 760px;\n  margin: 0 auto 34px;\n  text-align: center;\n}\n.associations-heading h2 {\n  margin: 10px 0 0;\n  color: #071f49;\n  font: 750 clamp(30px, 4vw, 44px)/1.15 var(--disp);\n  letter-spacing: -.025em;\n}\n.associations-heading p {\n  margin: 14px 0 0;\n  color: #61718a;\n  font-size: 16px;\n  line-height: 1.65;\n}\n.associations-layout {\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr);\n  gap: 34px;\n  align-items: start;\n}\n.associations-tabs {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 8px 18px 8px 0;\n  border-right: 1px solid #d6deeb;\n}\n.associations-tabs button {\n  position: relative;\n  padding: 18px 20px;\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: #939eae;\n  cursor: pointer;\n  text-align: left;\n  font: 650 16px/1.25 var(--body);\n  transition: color .2s ease, background .2s ease;\n}\n.associations-tabs button:hover,\n.associations-tabs button:focus-visible,\n.associations-tabs button.is-active {\n  background: #eef5ff;\n  color: #071f49;\n}\n.associations-tabs button:focus-visible {\n  outline: 3px solid rgba(24, 112, 223, .24);\n  outline-offset: 2px;\n}\n.associations-tabs button.is-active::after {\n  position: absolute;\n  top: 8px;\n  right: -19px;\n  bottom: 8px;\n  width: 3px;\n  border-radius: 2px;\n  background: #1870df;\n  content: "";\n}\n.associations-panel {\n  min-height: 490px;\n  padding: 34px;\n  border: 1px solid #d6e1f1;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 16px 40px rgba(4, 30, 66, .08);\n}\n.associations-panel-heading {\n  margin-bottom: 26px;\n}\n.associations-panel-heading h3 {\n  margin: 8px 0 0;\n  color: #071f49;\n  font: 750 clamp(26px, 3vw, 34px)/1.2 var(--disp);\n}\n.associations-panel-heading p {\n  margin: 10px 0 0;\n  color: #61718a;\n  font-size: 15px;\n  line-height: 1.65;\n}\n.associations-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.associations-grid-country {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.associations-grid-industry {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.associations-grid-affiliate {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.association-card {\n  color: inherit;\n  text-decoration: none;\n  display: grid;\n  min-width: 0;\n  min-height: 190px;\n  grid-template-rows: 126px auto;\n  align-items: center;\n  margin: 0;\n  overflow: hidden;\n  border: 1px solid #e1e8f2;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(4, 30, 66, .055);\n  transition:\n    transform .2s ease,\n    border-color .2s ease,\n    box-shadow .2s ease;\n}\n.association-card:focus-visible {\n  outline: 3px solid #1565d8;\n  outline-offset: 4px;\n}\n.association-card:hover {\n  transform: translateY(-3px);\n  border-color: #b8cce8;\n  box-shadow: 0 14px 30px rgba(4, 30, 66, .1);\n}\n.association-card img {\n  display: block;\n  width: calc(100% - 32px);\n  height: 100px;\n  margin: 14px auto 8px;\n  object-fit: contain;\n}\n.association-card h4 {\n  align-self: stretch;\n  margin: 0;\n  padding: 14px 16px;\n  border-top: 1px solid #edf1f6;\n  background: #f9fbfe;\n  color: #18345f;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.4;\n  text-align: center;\n}\n@media (max-width: 900px) {\n  .associations-hero-inner {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .associations-hero-image {\n    width: 110%;\n    margin-left: -5%;\n  }\n  .associations-layout {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .associations-tabs {\n    flex-direction: row;\n    overflow-x: auto;\n    border-right: 0;\n    border-bottom: 1px solid #d6deeb;\n    padding: 0 0 8px;\n  }\n  .associations-tabs button {\n    flex: 0 0 auto;\n    min-width: 150px;\n    text-align: center;\n  }\n  .associations-tabs button.is-active::after {\n    top: auto;\n    right: 8px;\n    bottom: -9px;\n    left: 8px;\n    width: auto;\n    height: 3px;\n  }\n}\n@media (max-width: 680px) {\n  .associations-wrap {\n    width: min(100% - 32px, 1180px);\n  }\n  .associations-hero {\n    padding: 64px 0 68px;\n  }\n  .associations-hero h1 {\n    font-size: 40px;\n  }\n  .associations-content {\n    padding: 48px 0 60px;\n  }\n  .associations-panel {\n    min-height: 0;\n    padding: 20px;\n    border-radius: 17px;\n  }\n  .associations-grid,\n  .associations-grid-country,\n  .associations-grid-industry {\n    grid-template-columns: 1fr;\n  }\n  .associations-grid-affiliate {\n    grid-template-columns: 1fr;\n  }\n  .association-card {\n    min-height: 176px;\n    grid-template-rows: 116px auto;\n  }\n  .association-card img {\n    height: 92px;\n  }\n}\n.associations-hero {\n  padding: 50px 0;\n  background:\n    radial-gradient(\n      ellipse at 83% 43%,\n      #155f9b66,\n      transparent 50%),\n    linear-gradient(\n      120deg,\n      #061c3e,\n      #0b325e);\n}\n.associations-hero h1 {\n  font-size: clamp(34px, 3.9vw, 52px);\n  line-height: 1.12;\n}\n.associations-hero p {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #bed3e9;\n}\n.association-explore {\n  display: inline-flex;\n  align-items: center;\n  gap: 26px;\n  margin-top: 26px;\n  padding: 13px 20px;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      110deg,\n      #ff9744,\n      #ff7900);\n  color: #fff;\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 12px;\n  box-shadow: 0 8px 24px #ff880020;\n}\n.association-explore:focus-visible {\n  outline: 3px solid #8ed4ff;\n  outline-offset: 4px;\n}\n#association-groups-title {\n  scroll-margin-top: 100px;\n}\n.association-network-animation {\n  position: relative;\n  width: 100%;\n  max-width: 620px;\n  margin: auto;\n  filter: drop-shadow(0 18px 24px #00132d44);\n}\n.association-network-animation svg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n.association-animation-caption {\n  fill: #b7d7ed;\n  font: 10px system-ui, sans-serif;\n  letter-spacing: .4px;\n}\n.association-icon-bubble {\n  animation: association-bubble-drift 6s ease-in-out infinite;\n  filter: drop-shadow(0 8px 14px #129df044);\n}\n.bubble-world {\n  animation-delay: -2s;\n}\n.bubble-growth {\n  animation-delay: -3.5s;\n}\n.bubble-connect {\n  animation-delay: -1s;\n}\n.bubble-technology {\n  animation-delay: -4s;\n}\n.association-route-packets {\n  animation: association-packet-flow 7s linear infinite;\n  filter: drop-shadow(0 0 3px #a0e8ff);\n}\n.association-node-rings circle {\n  transform-box: fill-box;\n  transform-origin: center;\n  animation: association-node-pulse 4s ease-out infinite;\n}\n.association-node-rings circle:nth-child(even) {\n  animation-delay: -2s;\n}\n.association-building-lights {\n  animation: association-light-pulse 5s ease-in-out infinite;\n}\n.association-ambient-particles {\n  animation: association-light-pulse 4s ease-in-out infinite;\n}\n@keyframes association-packet-flow {\n  to {\n    stroke-dashoffset: -296;\n  }\n}\n@keyframes association-node-pulse {\n  0% {\n    transform: scale(.6);\n    opacity: 0;\n  }\n  30% {\n    opacity: .8;\n  }\n  100% {\n    transform: scale(1.7);\n    opacity: 0;\n  }\n}\n.association-globe-routes,\n.association-outer-orbit {\n  animation: association-route-flow 16s linear infinite;\n}\n.association-globe-halo {\n  animation: association-globe-pulse 5s ease-in-out infinite;\n  transform-origin: 290px 190px;\n}\n.association-city-nodes {\n  animation: association-light-pulse 3s ease-in-out infinite;\n}\n.association-handshake {\n  animation: association-handshake-drift 7s ease-in-out infinite;\n}\n.associations-tabs {\n  padding: 10px;\n  border: 1px solid #dbe6f3;\n  background: #eaf1fa;\n  border-radius: 17px;\n  gap: 7px;\n}\n.associations-tabs button {\n  font-size: 13px;\n  border: 1px solid transparent;\n  padding: 16px;\n  border-radius: 10px;\n}\n.associations-tabs button.is-active {\n  background: #fff;\n  border-color: #cbdff5;\n  color: #1665c6;\n  box-shadow: 0 5px 15px #0a29570a;\n}\n.associations-tabs button.is-active::after {\n  display: none;\n}\n.associations-panel {\n  border-color: #dde7f4;\n  box-shadow: 0 14px 36px #0a295708;\n}\n.association-card {\n  box-shadow: 0 8px 24px #0a295708;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f5f9ff);\n}\n@keyframes association-bubble-drift {\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes association-route-flow {\n  to {\n    stroke-dashoffset: -240;\n  }\n}\n@keyframes association-globe-pulse {\n  50% {\n    opacity: .5;\n    transform: scale(1.035);\n  }\n}\n@keyframes association-light-pulse {\n  50% {\n    opacity: .35;\n  }\n}\n@keyframes association-handshake-drift {\n  50% {\n    transform: translateY(-2px);\n  }\n}\n@media (max-width: 680px) {\n  .associations-hero {\n    padding: 32px 0;\n  }\n  .associations-hero h1 {\n    font-size: 36px;\n  }\n  .association-network-animation {\n    max-width: 520px;\n  }\n  .associations-tabs {\n    padding: 8px;\n  }\n  .associations-tabs button {\n    min-width: 140px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .association-network-animation * {\n    animation: none !important;\n  }\n  .association-card {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=associations.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssociationsPage, { className: "AssociationsPage", filePath: "src/app/pages/associations.page.ts", lineNumber: 24 });
})();
export {
  AssociationsPage
};
//# sourceMappingURL=chunk-LNDNP3FZ.js.map
