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
import "./chunk-XXOOERF5.js";
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
  RouterLink
} from "./chunk-7OXZXASL.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/cloud-mdm.page.ts
var _c0 = () => ["mdm"];
var CloudMdmPage = class _CloudMdmPage {
  billingCycle = signal("annual", ...ngDevMode ? [{ debugName: "billingCycle" }] : []);
  seo = inject(SeoService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  constructor() {
    this.seo.set("Cloud MDM & Unified Endpoint Management India | XcellHost", "Manage and secure Windows, macOS, iOS, Android and Linux endpoints with zero-touch enrolment, compliance automation and Zero Trust.", "/cloud-mdm/");
  }
  requestCallback() {
    this.topics.ask("Cloud MDM & Unified Endpoint Management");
    this.overlay.open("callback");
  }
  setBillingCycle(cycle) {
    this.billingCycle.set(cycle);
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
  static \u0275fac = function CloudMdmPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CloudMdmPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CloudMdmPage, selectors: [["xh-cloud-mdm-page"]], hostAttrs: [1, "cloud-mdm-page"], decls: 1805, vars: 14, consts: [[1, "mdm-original-hero"], [1, "pad"], [1, "wrap"], [1, "head", "rv"], [1, "kicker"], [1, "hl"], [1, "u"], [1, "pillars"], ["data-d", "1", 1, "pillar", "rv"], [1, "pi", "i-blue"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "2", "y", "4", "width", "14", "height", "10", "rx", "2"], ["x", "16", "y", "9", "width", "6", "height", "11", "rx", "1.5"], ["d", "M6 18h6"], ["data-d", "2", 1, "pillar", "rv"], [1, "pi", "i-red"], ["d", "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"], ["d", "M9 12l2 2 4-4", "stroke-linecap", "round"], ["data-d", "3", 1, "pillar", "rv"], [1, "pi", "i-purple"], ["x", "4", "y", "10", "width", "16", "height", "11", "rx", "2"], ["d", "M8 10V7a4 4 0 018 0v3", "stroke-linecap", "round"], ["cx", "12", "cy", "15.5", "r", "1.5"], ["data-d", "4", 1, "pillar", "rv"], [1, "pi", "i-amber"], ["d", "M22 9L12 4 2 9l10 5 10-5z"], ["d", "M6 11.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-5.5"], ["id", "modules", 1, "pad", "pad-ice"], ["id", "modGrid", 1, "mods"], ["data-cat", "device", "data-d", "1", 1, "mod", "rv"], [1, "mod-h"], [1, "mod-ic", "i-blue"], [1, "cat"], [1, "mod-foot"], ["data-cat", "device", "data-d", "2", 1, "mod", "rv"], [1, "mod-ic", "i-slate"], ["d", "M16 3a4 4 0 01-3 3.9M12 7c-4 0-7 3-7 7 0 4 3 7 5 7 1.2 0 1.6-.7 2-.7s.8.7 2 .7c2 0 5-3 5-7 0-4-3-7-7-7z"], ["data-cat", "device", "data-d", "3", 1, "mod", "rv"], ["d", "M3 5.5l8-1.2v7.2H3zM13 4l8-1.2v8.7h-8zM3 13.5h8v7.2l-8-1.2zM13 13.5h8v8.7L13 21z"], ["data-cat", "device", "data-d", "4", 1, "mod", "rv"], [1, "mod-ic", "i-green"], ["x", "6", "y", "8", "width", "12", "height", "11", "rx", "2"], ["d", "M8 8L6.5 5M16 8l1.5-3M9.5 12h.01M14.5 12h.01"], ["data-cat", "device", "data-d", "5", 1, "mod", "rv"], [1, "mod-ic", "i-amber"], ["d", "M12 3c-2 0-3 2-3 4.5 0 2-2 3.5-2 6 0 3 2 7.5 5 7.5s5-4.5 5-7.5c0-2.5-2-4-2-6C15 5 14 3 12 3z"], ["d", "M10 8h.01M14 8h.01"], [1, "mod-ic", "i-purple"], ["d", "M12 3v18M5 8l7-5 7 5", "stroke-linecap", "round"], ["x", "4", "y", "14", "width", "16", "height", "7", "rx", "2"], ["data-cat", "security", "data-d", "2", 1, "mod", "rv"], [1, "mod-ic", "i-red"], ["d", "M12 8v4M12 15h.01", "stroke-linecap", "round"], ["data-cat", "security", "data-d", "3", 1, "mod", "rv"], ["d", "M9 11l2 2 4-4", "stroke-linecap", "round"], ["x", "3", "y", "4", "width", "18", "height", "16", "rx", "2"], ["data-cat", "security", "data-d", "4", 1, "mod", "rv"], ["cx", "12", "cy", "12", "r", "9"], ["d", "M12 7v5l3 2", "stroke-linecap", "round"], ["d", "M3 12h3M18 12h3"], ["data-cat", "security", "data-d", "5", 1, "mod", "rv"], [1, "mod-ic", "i-teal"], ["cx", "12", "cy", "11", "r", "2.5"], ["d", "M12 13.5V16"], ["data-cat", "security", "data-d", "1", 1, "mod", "rv"], ["d", "M12 14v3", "stroke-linecap", "round"], ["data-cat", "visibility", "data-d", "2", 1, "mod", "rv"], ["d", "M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V7z"], ["d", "M14 2v5h5M9 13h6M9 17h4", "stroke-linecap", "round"], ["data-cat", "visibility", "data-d", "3", 1, "mod", "rv"], ["d", "M4 17l6-6 4 4 6-8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 21h16"], ["data-cat", "visibility", "data-d", "4", 1, "mod", "rv"], ["d", "M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"], ["cx", "12", "cy", "10", "r", "2.5"], [1, "pad", "pad-navy"], ["role", "tablist", 1, "ptabs", "rv"], ["type", "button", "data-p", "android", 1, "ptab", "on"], [1, "pm", 2, "background", "#3DDC84"], ["type", "button", "data-p", "ios", 1, "ptab"], [1, "pm", 2, "background", "#5B5B5B"], ["type", "button", "data-p", "mac", 1, "ptab"], [1, "pm", 2, "background", "#111"], ["type", "button", "data-p", "win", 1, "ptab"], [1, "pm", 2, "background", "#0F6CBD"], ["type", "button", "data-p", "linux", 1, "ptab"], [1, "pm", 2, "background", "#F5A524"], ["data-p", "android", 1, "ppanel", "on"], [1, "pcell"], [1, "v"], ["data-p", "ios", 1, "ppanel"], ["data-p", "mac", 1, "ppanel"], ["data-p", "win", 1, "ppanel"], ["data-p", "linux", 1, "ppanel"], [1, "pnote", "rv"], ["href", "#contact", 1, "btn", "btn-orange", "mag"], [1, "ar"], [1, "spots"], ["data-d", "1", 1, "spot", "rv"], [1, "proof"], ["data-d", "2", 1, "spot", "rv"], ["data-d", "3", 1, "spot", "rv"], ["data-d", "4", 1, "spot", "rv"], ["data-d", "5", 1, "spot", "rv"], [1, "pad", "pad-ice"], [1, "teams"], ["data-d", "1", 1, "team", "rv"], [1, "tg"], ["data-d", "2", 1, "team", "rv"], ["data-d", "3", 1, "team", "rv"], ["data-d", "4", 1, "team", "rv"], [1, "uses"], ["data-d", "1", 1, "uc", "rv"], [1, "ui", "i-amber"], ["data-d", "2", 1, "uc", "rv"], [1, "ui", "i-blue"], ["data-d", "3", 1, "uc", "rv"], [1, "ui", "i-green"], ["data-d", "4", 1, "uc", "rv"], [1, "ui", "i-purple"], ["data-d", "5", 1, "uc", "rv"], [1, "ui", "i-red"], [1, "ui", "i-teal"], [1, "ui", "i-slate"], [1, "mig"], [1, "head", "left", "rv"], [1, "mig-list"], ["data-d", "1", 1, "mig-item", "rv"], [1, "n"], ["data-d", "2", 1, "mig-item", "rv"], ["data-d", "3", 1, "mig-item", "rv"], ["data-d", "4", 1, "mig-item", "rv"], ["data-d", "2", 1, "mig-quote", "rv"], [1, "bar"], [1, "q"], [1, "who"], [1, "why"], ["data-d", "1", 1, "wc", "rv"], [1, "l"], ["d", "M5 12l5 5L20 6", "stroke-linecap", "round"], ["data-d", "2", 1, "wc", "rv"], ["data-d", "3", 1, "wc", "rv"], ["data-d", "4", 1, "wc", "rv"], ["data-d", "5", 1, "wc", "rv"], [1, "results"], ["data-d", "1", 1, "rc", "rv"], ["data-to", "7", "data-suffix", "+", 1, "count"], ["data-d", "2", 1, "rc", "rv"], ["data-to", "80", "data-suffix", "%", 1, "count"], ["data-d", "3", 1, "rc", "rv"], ["data-d", "4", 1, "rc", "rv"], ["data-to", "15", "data-suffix", " min", 1, "count"], [1, "marq-wrap"], [1, "track"], [1, "ilogo"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#00a4ef,#0078d4)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#4285f4,#34a853)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#00297a,#001a4d)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#4a154b,#36c5f0)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#5059C9,#7B83EB)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#0052cc,#2684ff)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#d40511,#f43f5e)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#000000,#65a637)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#6366f1,#312e81)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#635bff,#3d34c4)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#7c3aed,#4c1d95)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#0F766E,#0b544e)"], ["aria-hidden", "true", 1, "ilogo"], ["id", "pricing", 1, "pad", "pad-ice"], [1, "ptoggle", "rv"], [1, "sw"], ["type", "button", 3, "click"], [1, "save"], [1, "price"], ["data-d", "1", 1, "tier", "rv"], [1, "sub"], [1, "amt"], [1, "cur"], [1, "num"], [1, "per"], [1, "inc"], [1, "ck"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["d", "M5 12l5 5L20 6", "stroke-linecap", "round", "stroke-linejoin", "round"], ["href", "#contact", 1, "btn", "btn-t", "mag"], ["data-d", "2", 1, "tier", "pop", "rv"], [1, "tag"], ["data-d", "3", 1, "tier", "rv"], ["data-d", "4", 1, "tier", "rv"], [1, "amt", "custom"], [1, "ctab", "rv"], [1, "grp"], ["colspan", "4"], [1, "yes"], [1, "no"], [1, "price-note"], [1, "tq", "rv", "tilt"], [1, "av"], [1, "faqgrid"], ["data-d", "1", 1, "faq2", "open", "rv"], ["type", "button", 1, "faq2-q", 3, "click"], [1, "faq2-ic"], [1, "faq2-a"], ["data-d", "2", 1, "faq2", "rv"], ["data-d", "3", 1, "faq2", "rv"], ["data-d", "4", 1, "faq2", "rv"], ["data-d", "5", 1, "faq2", "rv"], ["data-d", "1", 1, "faq2", "rv"], ["id", "contact", 1, "pad"], [1, "contact"], ["data-d", "1", 1, "ccard", "rv"], [1, "clist"], ["href", "tel:+912267111555"], [1, "ci"], ["href", "https://wa.me/918657032540"], ["href", "mailto:sales@xcellhost.cloud"], ["href", "#"], [1, "pp-proof", 2, "justify-content", "flex-start", "margin-top", "18px"], ["data-d", "2", 1, "ccard", "rv"], [1, "cform"], [1, "row2"], ["for", "f1"], ["id", "f1", "required", ""], ["for", "f2"], ["id", "f2", "required", ""], ["for", "f3"], ["id", "f3", "type", "email", "required", ""], ["for", "f4"], ["id", "f4", "type", "tel", "required", ""], ["for", "f5"], ["id", "f5", "required", ""], ["value", ""], ["for", "f6"], ["id", "f6", "required", ""], ["for", "f7"], ["id", "f7", "placeholder", "Intune, Workspace ONE, Hexnode, Scalefusion, none\xE2\u20AC\xA6"], ["for", "f8"], ["id", "f8", "placeholder", "Rollout timeline, compliance requirements, sites\xE2\u20AC\xA6"], ["type", "submit", 1, "btn", "btn-primary", "mag"], ["id", "fmsg", 1, "formnote"], [1, "pad", 2, "padding-top", "0"], [1, "ctaband", "rv"], [1, "glow"], [1, "ct-l"], [1, "cbico"], [1, "ct-r"], ["href", "https://wa.me/918657032540", 1, "btn", "btn-outline", "mag"], [1, "pp-proof", "rv"], ["pageSlug", "cloud-mdm", 3, "pageAliases"], [1, "pad", "mdm-buddha-section"], [1, "mdm-buddha"], [1, "mdm-buddha-copy"], [1, "mdm-buddha-actions"], ["type", "button", 1, "btn", "btn-orange", 3, "click"], ["routerLink", "/contact", 1, "btn", "btn-outline"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener", 1, "btn", "btn-outline"], ["href", "mailto:sales@xcellhost.com?subject=Cloud%20MDM%20enquiry", 1, "btn", "btn-outline"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "mdm-buddha-mark"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha"], ["aria-label", "XcellHost credentials", 1, "mdm-buddha-proof"]], template: function CloudMdmPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-product-page", 0);
      \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
      \u0275\u0275text(5, "One platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7, "Device, security, identity and ");
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9, "education \u2014 unified");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(10, "div", 6);
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "XcellHost Cloud MDM brings device management, endpoint security, access control and K-12 tooling into a single console \u2014 zero-touch deployment, real-time visibility and compliance.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 7)(14, "article", 8)(15, "span", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 10);
      \u0275\u0275element(17, "rect", 11)(18, "rect", 12)(19, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(20, "h3");
      \u0275\u0275text(21, "Cross-platform device management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Deploy, monitor and manage iOS, Android, Windows, macOS and Linux with zero-touch provisioning, real-time analytics, remote maintenance, policy enforcement, configuration profiles and a Command Center.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "article", 14)(25, "span", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(26, "svg", 10);
      \u0275\u0275element(27, "path", 16)(28, "path", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "h3");
      \u0275\u0275text(30, "Advanced endpoint security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "Protect every device with patch and vulnerability management, compliance automation and full EDR coverage across macOS and Windows \u2014 block threats, auto-remediate risks and enforce a zero-trust posture.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "article", 18)(34, "span", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 10);
      \u0275\u0275element(36, "rect", 20)(37, "path", 21)(38, "circle", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(39, "h3");
      \u0275\u0275text(40, "Smart identity & access control");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p");
      \u0275\u0275text(42, "SSO, MFA, conditional access and passwordless workflows deliver frictionless logins and hardened identity protection across cloud apps, VPNs and on-premise resources.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "article", 23)(44, "span", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(45, "svg", 10);
      \u0275\u0275element(46, "path", 25)(47, "path", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(48, "h3");
      \u0275\u0275text(49, "Purpose-built education suite");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51, "Manage classes, students, staff, screen-time limits, reports and device usage from one portal \u2014 improving safety, engagement and outcomes for schools and campuses.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(52, "section", 27)(53, "div", 2)(54, "div", 3)(55, "span", 4);
      \u0275\u0275text(56, "Explore the platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "h2");
      \u0275\u0275text(58, "Fourteen modules. ");
      \u0275\u0275elementStart(59, "span", 5);
      \u0275\u0275text(60, "One console.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "div", 6);
      \u0275\u0275elementStart(62, "p");
      \u0275\u0275text(63, "Every module ships in the platform, not as a bolt-on.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 28)(65, "article", 29)(66, "div", 30)(67, "span", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(68, "svg", 10);
      \u0275\u0275element(69, "rect", 11)(70, "rect", 12)(71, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(72, "div")(73, "h3");
      \u0275\u0275text(74, "Unified endpoint management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span", 32);
      \u0275\u0275text(76, "Device");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, "Every device, every OS, one platform \u2014 the backbone the other thirteen modules plug into.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "ul")(80, "li");
      \u0275\u0275text(81, "Manage Windows, macOS, iOS, Android and Linux side by side");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "li");
      \u0275\u0275text(83, "Deploy apps, updates and policies from a single console");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "li");
      \u0275\u0275text(85, "Device inventory with static and dynamic groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "li");
      \u0275\u0275text(87, "Full visibility and control wherever the device sits");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 33)(89, "span");
      \u0275\u0275text(90, "5 platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span");
      \u0275\u0275text(92, "Dynamic groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "span");
      \u0275\u0275text(94, "Single console");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(95, "article", 34)(96, "div", 30)(97, "span", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(98, "svg", 10);
      \u0275\u0275element(99, "path", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(100, "div")(101, "h3");
      \u0275\u0275text(102, "Apple device management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "span", 32);
      \u0275\u0275text(104, "Device");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "p");
      \u0275\u0275text(106, "Zero-touch enrolment through Apple Business Manager and Apple School Manager, with full macOS and iOS control.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "ul")(108, "li");
      \u0275\u0275text(109, "ABM / ASM zero-touch enrolment \u2014 devices work-ready on unbox");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "li");
      \u0275\u0275text(111, "Silent app installs, enforced Wi-Fi and VPN profiles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "li");
      \u0275\u0275text(113, "FileVault, Gatekeeper and macOS EDR enforcement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "li");
      \u0275\u0275text(115, "Jailbreak detection, remote lock, wipe and kiosk mode");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 33)(117, "span");
      \u0275\u0275text(118, "ABM / ASM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "span");
      \u0275\u0275text(120, "FileVault");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "span");
      \u0275\u0275text(122, "Kiosk mode");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "article", 37)(124, "div", 30)(125, "span", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(126, "svg", 10);
      \u0275\u0275element(127, "path", 38);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(128, "div")(129, "h3");
      \u0275\u0275text(130, "Windows device management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "span", 32);
      \u0275\u0275text(132, "Device");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "p");
      \u0275\u0275text(134, "Harden, patch and automate the Windows estate without a domain controller in every branch.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "ul")(136, "li");
      \u0275\u0275text(137, "BitLocker, firewall policy and Windows EDR enforcement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "li");
      \u0275\u0275text(139, "Autopilot-style zero-touch provisioning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "li");
      \u0275\u0275text(141, "Patch compliance and threat dashboards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "li");
      \u0275\u0275text(143, "Vulnerability remediation and remote command execution");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 33)(145, "span");
      \u0275\u0275text(146, "BitLocker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "span");
      \u0275\u0275text(148, "EDR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "span");
      \u0275\u0275text(150, "Remote commands");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(151, "article", 39)(152, "div", 30)(153, "span", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(154, "svg", 10);
      \u0275\u0275element(155, "rect", 41)(156, "path", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(157, "div")(158, "h3");
      \u0275\u0275text(159, "Android device management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span", 32);
      \u0275\u0275text(161, "Device");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(162, "p");
      \u0275\u0275text(163, "Android Enterprise done properly \u2014 work profiles, fully managed devices and dedicated kiosk fleets.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "ul")(165, "li");
      \u0275\u0275text(166, "Isolate corporate data in Work Profiles with auto-encryption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "li");
      \u0275\u0275text(168, "App allow-listing and silent deployment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "li");
      \u0275\u0275text(170, "Real-time compliance alerts with assisted remediation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "li");
      \u0275\u0275text(172, "Instant remote wipe of the work profile or whole device");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(173, "div", 33)(174, "span");
      \u0275\u0275text(175, "Work Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "span");
      \u0275\u0275text(177, "Allow-listing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "span");
      \u0275\u0275text(179, "Remote wipe");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "article", 43)(181, "div", 30)(182, "span", 44);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(183, "svg", 10);
      \u0275\u0275element(184, "path", 45)(185, "path", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(186, "div")(187, "h3");
      \u0275\u0275text(188, "Linux device management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "span", 32);
      \u0275\u0275text(190, "Device");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(191, "p");
      \u0275\u0275text(192, "Linux workstations and servers managed alongside everything else \u2014 no second-class OS.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "ul")(194, "li");
      \u0275\u0275text(195, "Agent-based enrolment for Ubuntu, RHEL and Debian derivatives");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "li");
      \u0275\u0275text(197, "Package patching and configuration drift detection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "li");
      \u0275\u0275text(199, "Disk encryption and SSH hardening policies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "li");
      \u0275\u0275text(201, "Remote script execution through the Command Center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 33)(203, "span");
      \u0275\u0275text(204, "Ubuntu / RHEL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "span");
      \u0275\u0275text(206, "Drift detection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "span");
      \u0275\u0275text(208, "Scripting");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(209, "article", 29)(210, "div", 30)(211, "span", 47);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(212, "svg", 10);
      \u0275\u0275element(213, "path", 48)(214, "rect", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(215, "div")(216, "h3");
      \u0275\u0275text(217, "Zero-touch onboarding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "span", 32);
      \u0275\u0275text(219, "Device");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(220, "p");
      \u0275\u0275text(221, "Pre-configure devices remotely so they are work-ready the moment a user powers them on.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "ul")(223, "li");
      \u0275\u0275text(224, "Set up 100+ devices in minutes, no imaging bench required");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "li");
      \u0275\u0275text(226, "Role-based templates apply apps, Wi-Fi, VPN and policy on first boot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "li");
      \u0275\u0275text(228, "Day-zero readiness for new hires with no IT ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "li");
      \u0275\u0275text(230, "Ship straight to the employee \u2014 office visit optional");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "div", 33)(232, "span");
      \u0275\u0275text(233, "Bulk enrol");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "span");
      \u0275\u0275text(235, "Role templates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(236, "span");
      \u0275\u0275text(237, "Day-zero");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(238, "article", 50)(239, "div", 30)(240, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(241, "svg", 10);
      \u0275\u0275element(242, "path", 16)(243, "path", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(244, "div")(245, "h3");
      \u0275\u0275text(246, "Patch & vulnerability management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "span", 32);
      \u0275\u0275text(248, "Security");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(249, "p");
      \u0275\u0275text(250, "Silent patching that closes vulnerabilities without interrupting the person using the machine.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "ul")(252, "li");
      \u0275\u0275text(253, "OS and third-party application patching across all five platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "li");
      \u0275\u0275text(255, "Vulnerability centre with severity ranking and remediation owner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "li");
      \u0275\u0275text(257, "Maintenance windows and staged rollout rings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(258, "li");
      \u0275\u0275text(259, "Patch compliance reporting for auditors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(260, "div", 33)(261, "span");
      \u0275\u0275text(262, "OS + 3rd party");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "span");
      \u0275\u0275text(264, "Rollout rings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "span");
      \u0275\u0275text(266, "CVE tracking");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "article", 53)(268, "div", 30)(269, "span", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(270, "svg", 10);
      \u0275\u0275element(271, "path", 54)(272, "rect", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(273, "div")(274, "h3");
      \u0275\u0275text(275, "Compliance automation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "span", 32);
      \u0275\u0275text(277, "Security");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "p");
      \u0275\u0275text(279, "Prebuilt policy packs that enforce a standard in one click, then keep proving it stays enforced.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(280, "ul")(281, "li");
      \u0275\u0275text(282, "Templates for ISO 27001, SOC 2, HIPAA, GDPR and CIS benchmarks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "li");
      \u0275\u0275text(284, "Automated remediation when a device drifts out of policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "li");
      \u0275\u0275text(286, "Access audits and violation alerts routed to an owner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "li");
      \u0275\u0275text(288, "Evidence export for audit \u2014 no manual screenshots");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "div", 33)(290, "span");
      \u0275\u0275text(291, "ISO / SOC 2 / CIS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(292, "span");
      \u0275\u0275text(293, "Auto-remediate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "span");
      \u0275\u0275text(295, "Audit export");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(296, "article", 56)(297, "div", 30)(298, "span", 47);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(299, "svg", 10);
      \u0275\u0275element(300, "circle", 57)(301, "path", 58)(302, "path", 59);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(303, "div")(304, "h3");
      \u0275\u0275text(305, "Conditional access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "span", 32);
      \u0275\u0275text(307, "Security");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(308, "p");
      \u0275\u0275text(309, "Access decided at the moment of request, based on who is asking, from where and on what.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(310, "ul")(311, "li");
      \u0275\u0275text(312, "Policies keyed to role, location, device health and risk score");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "li");
      \u0275\u0275text(314, "Block or step-up authentication for non-compliant devices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "li");
      \u0275\u0275text(316, "Context-aware access for SaaS and internal applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "li");
      \u0275\u0275text(318, "Auto-lock devices on outdated OS or abnormal location");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(319, "div", 33)(320, "span");
      \u0275\u0275text(321, "Risk-based");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "span");
      \u0275\u0275text(323, "Step-up auth");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "span");
      \u0275\u0275text(325, "SaaS + internal");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(326, "article", 60)(327, "div", 30)(328, "span", 61);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(329, "svg", 10);
      \u0275\u0275element(330, "path", 16)(331, "circle", 62)(332, "path", 63);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(333, "div")(334, "h3");
      \u0275\u0275text(335, "Device Zero Trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "span", 32);
      \u0275\u0275text(337, "Security");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(338, "p");
      \u0275\u0275text(339, "Never trust, always verify \u2014 every device proves its posture before it reaches anything.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "ul")(341, "li");
      \u0275\u0275text(342, "Device login controls for macOS and Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "li");
      \u0275\u0275text(344, "Certificate-based Wi-Fi and VPN access via Cloud RADIUS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(345, "li");
      \u0275\u0275text(346, "Continuous posture checks, not one-time enrolment trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "li");
      \u0275\u0275text(348, "Data loss prevention on unauthorised apps and services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(349, "div", 33)(350, "span");
      \u0275\u0275text(351, "Cloud RADIUS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "span");
      \u0275\u0275text(353, "Posture checks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "span");
      \u0275\u0275text(355, "DLP");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(356, "article", 64)(357, "div", 30)(358, "span", 31);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(359, "svg", 10);
      \u0275\u0275element(360, "rect", 20)(361, "path", 21)(362, "path", 65);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(363, "div")(364, "h3");
      \u0275\u0275text(365, "MFA configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "span", 32);
      \u0275\u0275text(367, "Security");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(368, "p");
      \u0275\u0275text(369, "Platform-wide multi-factor authentication configured centrally, not app by app.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "ul")(371, "li");
      \u0275\u0275text(372, "Biometrics, OTP, push and certificate-based factors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "li");
      \u0275\u0275text(374, "SSO across cloud apps with one identity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(375, "li");
      \u0275\u0275text(376, "Enforcement rules by role, team or device health");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "li");
      \u0275\u0275text(378, "Passwordless workflows where the platform supports them");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(379, "div", 33)(380, "span");
      \u0275\u0275text(381, "SSO + MFA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "span");
      \u0275\u0275text(383, "Passwordless");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "span");
      \u0275\u0275text(385, "Per-role rules");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(386, "article", 66)(387, "div", 30)(388, "span", 44);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(389, "svg", 10);
      \u0275\u0275element(390, "path", 67)(391, "path", 68);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(392, "div")(393, "h3");
      \u0275\u0275text(394, "Policy management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(395, "span", 32);
      \u0275\u0275text(396, "Visibility");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(397, "p");
      \u0275\u0275text(398, "Write a policy once by role, team or location and let the fleet stay consistent on its own.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "ul")(400, "li");
      \u0275\u0275text(401, "Create policies by role, team, site or device group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "li");
      \u0275\u0275text(403, "Instantly push settings and apps to devices or groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(404, "li");
      \u0275\u0275text(405, "Policies re-apply automatically as roles and teams change");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "li");
      \u0275\u0275text(407, "Configuration profiles with drift detection built in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(408, "div", 33)(409, "span");
      \u0275\u0275text(410, "Role-based");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "span");
      \u0275\u0275text(412, "Auto re-apply");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(413, "span");
      \u0275\u0275text(414, "Profiles");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(415, "article", 69)(416, "div", 30)(417, "span", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(418, "svg", 10);
      \u0275\u0275element(419, "path", 70)(420, "path", 71);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(421, "div")(422, "h3");
      \u0275\u0275text(423, "Command Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "span", 32);
      \u0275\u0275text(425, "Visibility");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(426, "p");
      \u0275\u0275text(427, "Run commands and scripts across the fleet without interrupting a single user.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "ul")(429, "li");
      \u0275\u0275text(430, "Execute commands across the whole fleet or a target group");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "li");
      \u0275\u0275text(432, "Automate routine tasks with one click");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "li");
      \u0275\u0275text(434, "Full visibility into command results and exit codes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "li");
      \u0275\u0275text(436, "Remote troubleshooting without a screen-share session");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(437, "div", 33)(438, "span");
      \u0275\u0275text(439, "Fleet-wide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "span");
      \u0275\u0275text(441, "Scripting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(442, "span");
      \u0275\u0275text(443, "Result log");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(444, "article", 72)(445, "div", 30)(446, "span", 51);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(447, "svg", 10);
      \u0275\u0275element(448, "path", 73)(449, "circle", 74);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(450, "div")(451, "h3");
      \u0275\u0275text(452, "Location services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "span", 32);
      \u0275\u0275text(454, "Visibility");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(455, "p");
      \u0275\u0275text(456, "Know where company assets are, and set boundaries for where they are allowed to work.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "ul")(458, "li");
      \u0275\u0275text(459, "Real-time device location and last-seen history");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "li");
      \u0275\u0275text(461, "Geofences around offices, sites and restricted areas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "li");
      \u0275\u0275text(463, "Location-aware access conditions and offsite blocking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "li");
      \u0275\u0275text(465, "Instant lock or wipe on lost and stolen assets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(466, "div", 33)(467, "span");
      \u0275\u0275text(468, "Geofencing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "span");
      \u0275\u0275text(470, "Asset tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(471, "span");
      \u0275\u0275text(472, "Lost mode");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(473, "section", 75)(474, "div", 2)(475, "div", 3)(476, "span", 4);
      \u0275\u0275text(477, "Every platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "h2");
      \u0275\u0275text(479, "Manage every device, any platform");
      \u0275\u0275elementEnd();
      \u0275\u0275element(480, "div", 6);
      \u0275\u0275elementStart(481, "p");
      \u0275\u0275text(482, "One platform. Zero silos. Enterprise-grade control \u2014 with the same depth on every OS.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(483, "div", 76)(484, "button", 77)(485, "span", 78);
      \u0275\u0275text(486, "A");
      \u0275\u0275elementEnd();
      \u0275\u0275text(487, "Android");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(488, "button", 79)(489, "span", 80);
      \u0275\u0275text(490, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275text(491, "iPhone & iPad");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(492, "button", 81)(493, "span", 82);
      \u0275\u0275text(494, "\uF8FF");
      \u0275\u0275elementEnd();
      \u0275\u0275text(495, "Mac");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(496, "button", 83)(497, "span", 84);
      \u0275\u0275text(498, "W");
      \u0275\u0275elementEnd();
      \u0275\u0275text(499, "Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(500, "button", 85)(501, "span", 86);
      \u0275\u0275text(502, "L");
      \u0275\u0275elementEnd();
      \u0275\u0275text(503, "Linux");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(504, "div", 87)(505, "div", 88)(506, "span", 89);
      \u0275\u0275text(507, "Secure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(508, "b");
      \u0275\u0275text(509, "Work Profile isolation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "span");
      \u0275\u0275text(511, "Separate corporate data with auto-encryption and app allow-listing, leaving personal data untouched on BYOD handsets.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(512, "div", 88)(513, "span", 89);
      \u0275\u0275text(514, "Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "b");
      \u0275\u0275text(516, "Real-time compliance alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "span");
      \u0275\u0275text(518, "Continuous posture checks with assisted remediation, so a drifted device is fixed before it becomes an incident.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "div", 88)(520, "span", 89);
      \u0275\u0275text(521, "Manage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "b");
      \u0275\u0275text(523, "Silent deploys & instant wipe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(524, "span");
      \u0275\u0275text(525, "Push or remove apps without user action, and wipe the work profile or the whole device the moment a handset goes missing.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(526, "div", 90)(527, "div", 88)(528, "span", 89);
      \u0275\u0275text(529, "Enable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(530, "b");
      \u0275\u0275text(531, "Silent installs & enforced networking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "span");
      \u0275\u0275text(533, "Deploy apps without prompts and enforce Wi-Fi and VPN profiles so the device connects the way policy says it should.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(534, "div", 88)(535, "span", 89);
      \u0275\u0275text(536, "Guard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "b");
      \u0275\u0275text(538, "Jailbreak detection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "span");
      \u0275\u0275text(540, "Detect compromised devices in real time and quarantine them from corporate resources automatically.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(541, "div", 88)(542, "span", 89);
      \u0275\u0275text(543, "Control");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(544, "b");
      \u0275\u0275text(545, "Remote lock, wipe & kiosk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "span");
      \u0275\u0275text(547, "Lock a device to a single app for task-focused work, or lock and wipe it entirely from the dashboard.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(548, "div", 91)(549, "div", 88)(550, "span", 89);
      \u0275\u0275text(551, "Deploy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(552, "b");
      \u0275\u0275text(553, "Zero-touch via Apple Business Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(554, "span");
      \u0275\u0275text(555, "Ship a sealed Mac straight to the employee \u2014 it enrols, configures and installs on first boot.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(556, "div", 88)(557, "span", 89);
      \u0275\u0275text(558, "Update");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "b");
      \u0275\u0275text(560, "Automated macOS & app patching");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(561, "span");
      \u0275\u0275text(562, "Staged OS and application updates with compliance dashboards showing exactly what is still outstanding.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(563, "div", 88)(564, "span", 89);
      \u0275\u0275text(565, "Protect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "b");
      \u0275\u0275text(567, "FileVault, Gatekeeper & EDR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(568, "span");
      \u0275\u0275text(569, "Enforce full-disk encryption with escrowed keys, Gatekeeper policy and macOS endpoint detection and response.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(570, "div", 92)(571, "div", 88)(572, "span", 89);
      \u0275\u0275text(573, "Harden");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(574, "b");
      \u0275\u0275text(575, "BitLocker, EDR & firewall policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(576, "span");
      \u0275\u0275text(577, "Full-disk encryption with key escrow, endpoint detection and response, and firewall rules enforced centrally.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(578, "div", 88)(579, "span", 89);
      \u0275\u0275text(580, "Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(581, "b");
      \u0275\u0275text(582, "Patch compliance dashboards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "span");
      \u0275\u0275text(584, "See which machines are behind on which CVE, ranked by severity and exposure, not just a count.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(585, "div", 88)(586, "span", 89);
      \u0275\u0275text(587, "Automate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "b");
      \u0275\u0275text(589, "Remediation & remote command");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "span");
      \u0275\u0275text(591, "Fix vulnerabilities and run scripts across the estate without a technician touching the machine.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(592, "div", 93)(593, "div", 88)(594, "span", 89);
      \u0275\u0275text(595, "Enrol");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "b");
      \u0275\u0275text(597, "Agent-based onboarding");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(598, "span");
      \u0275\u0275text(599, "Ubuntu, RHEL, Debian and their derivatives enrol into the same console as everything else.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(600, "div", 88)(601, "span", 89);
      \u0275\u0275text(602, "Maintain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "b");
      \u0275\u0275text(604, "Package patching & drift");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(605, "span");
      \u0275\u0275text(606, "Keep packages current and detect configuration drift against your defined baseline.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(607, "div", 88)(608, "span", 89);
      \u0275\u0275text(609, "Harden");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(610, "b");
      \u0275\u0275text(611, "Encryption & SSH policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(612, "span");
      \u0275\u0275text(613, "Enforce disk encryption and SSH hardening, with remote script execution for anything bespoke.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(614, "div", 94)(615, "a", 95);
      \u0275\u0275text(616, "Book a Platform Walkthrough ");
      \u0275\u0275elementStart(617, "span", 96);
      \u0275\u0275text(618, "\u2192");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(619, "section", 1)(620, "div", 2)(621, "div", 3)(622, "span", 4);
      \u0275\u0275text(623, "What it changes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "h2");
      \u0275\u0275text(625, "Secure every device. ");
      \u0275\u0275elementStart(626, "span", 5);
      \u0275\u0275text(627, "Automate every action.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(628, "div", 6);
      \u0275\u0275elementStart(629, "p");
      \u0275\u0275text(630, "Security, compliance and automation together \u2014 from zero-touch setup to real-time control and patching, in one place.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(631, "div", 97)(632, "article", 98)(633, "h3");
      \u0275\u0275text(634, "Stop threats before they start");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(635, "p");
      \u0275\u0275text(636, "Do not wait for a breach to act. Controls block risk proactively across every device.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(637, "ul")(638, "li");
      \u0275\u0275text(639, "Instantly remediate outdated or non-compliant devices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "li");
      \u0275\u0275text(641, "Compliance templates for HIPAA, GDPR and SOC 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(642, "li");
      \u0275\u0275text(643, "24/7 threat defence on macOS and Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "li");
      \u0275\u0275text(645, "Auto-lock on outdated OS, risky users or abnormal locations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(646, "div", 99);
      \u0275\u0275text(647, "96% of unauthorised access blocked");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(648, "article", 100)(649, "h3");
      \u0275\u0275text(650, "One dashboard for every device");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(651, "p");
      \u0275\u0275text(652, "Stop managing devices across multiple tools. Android, iOS, Windows, macOS and Linux in one place.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(653, "ul")(654, "li");
      \u0275\u0275text(655, "Zero-touch enrolment \u2014 100+ devices set up in minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(656, "li");
      \u0275\u0275text(657, "Remote fixes and troubleshooting from anywhere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(658, "li");
      \u0275\u0275text(659, "Kiosk mode locks devices to task-specific apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(660, "li");
      \u0275\u0275text(661, "Role-based access by team, location or device health");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(662, "div", 99);
      \u0275\u0275text(663, "Replaces 7+ disconnected tools");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(664, "article", 101)(665, "h3");
      \u0275\u0275text(666, "Zero-touch automation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "p");
      \u0275\u0275text(668, "Pre-configure devices remotely so they arrive work-ready, and fix issues without interrupting anyone.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(669, "ul")(670, "li");
      \u0275\u0275text(671, "Devices configure themselves on first startup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(672, "li");
      \u0275\u0275text(673, "Run scripts or commands with no user disruption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(674, "li");
      \u0275\u0275text(675, "Role-based templates deploy in hours, not weeks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "li");
      \u0275\u0275text(677, "New hires productive on day zero");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(678, "div", 99);
      \u0275\u0275text(679, "65% faster deployments \xB7 80% fewer tickets");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(680, "article", 102)(681, "h3");
      \u0275\u0275text(682, "One-click secure access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(683, "p");
      \u0275\u0275text(684, "Your team needs access securely and instantly. Identity-based access that adapts in real time.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(685, "ul")(686, "li");
      \u0275\u0275text(687, "SSO and MFA using biometrics, OTP or certificates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "li");
      \u0275\u0275text(689, "Smart access rules by role, location or device status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(690, "li");
      \u0275\u0275text(691, "Cloud RADIUS for certificate-based Wi-Fi and VPN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "li");
      \u0275\u0275text(693, "Step-up authentication instead of blanket blocking");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(694, "div", 99);
      \u0275\u0275text(695, "94% fewer access-related incidents");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(696, "article", 103)(697, "h3");
      \u0275\u0275text(698, "Effortless compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(699, "p");
      \u0275\u0275text(700, "Enforce a standard in one click, then keep the evidence current without chasing screenshots.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "ul")(702, "li");
      \u0275\u0275text(703, "Prebuilt HIPAA, GDPR and CIS benchmark policies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "li");
      \u0275\u0275text(705, "Access audits and violation alerts with owners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(706, "li");
      \u0275\u0275text(707, "Remote wipe and lock for lost devices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(708, "li");
      \u0275\u0275text(709, "Audit-ready evidence exported from the console");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(710, "div", 99);
      \u0275\u0275text(711, "Pass audits 3\xD7 faster");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(712, "article", 98)(713, "h3");
      \u0275\u0275text(714, "Protection everywhere");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(715, "p");
      \u0275\u0275text(716, "Every device is protected \u2014 in the office, at home or on the road.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(717, "ul")(718, "li");
      \u0275\u0275text(719, "Silent patch updates that fix vulnerabilities invisibly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(720, "li");
      \u0275\u0275text(721, "Data loss prevention on unauthorised apps and services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(722, "li");
      \u0275\u0275text(723, "Continuous compliance alerting with quick action paths");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(724, "li");
      \u0275\u0275text(725, "Same posture on corporate and BYOD hardware");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(726, "div", 99);
      \u0275\u0275text(727, "Response time down to 8 minutes");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(728, "section", 104)(729, "div", 2)(730, "div", 3)(731, "span", 4);
      \u0275\u0275text(732, "Across the business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(733, "h2");
      \u0275\u0275text(734, "Empower every team");
      \u0275\u0275elementEnd();
      \u0275\u0275element(735, "div", 6);
      \u0275\u0275elementStart(736, "p");
      \u0275\u0275text(737, "Automation, insight and smart actions that save time well beyond the IT department.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(738, "div", 105)(739, "div", 106)(740, "span", 107);
      \u0275\u0275text(741, "HR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "b");
      \u0275\u0275text(743, "HR Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(744, "span");
      \u0275\u0275text(745, "Automate onboarding by giving new hires the right tools on day one. Apps and permissions are pre-mapped to the role, so nobody waits on an IT ticket to start working.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(746, "div", 108)(747, "span", 107);
      \u0275\u0275text(748, "IT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(749, "b");
      \u0275\u0275text(750, "IT Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(751, "span");
      \u0275\u0275text(752, "Stay ahead of issues with real-time hardware and OS alerts, fix problems remotely through scripts, and deploy devices without touching them thanks to zero-touch provisioning.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(753, "div", 109)(754, "span", 107);
      \u0275\u0275text(755, "Ops");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(756, "b");
      \u0275\u0275text(757, "Ops & Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(758, "span");
      \u0275\u0275text(759, "Let automation handle repetitive tickets and integrate with the tools you already run. Backlogs shrink as routine issues resolve themselves.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(760, "div", 110)(761, "span", 107);
      \u0275\u0275text(762, "MSP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "b");
      \u0275\u0275text(764, "Security & MSP Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(765, "span");
      \u0275\u0275text(766, "A unified platform to enforce compliance policy, manage multiple client tenants, and automate patching and endpoint protection across every environment.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(767, "section", 1)(768, "div", 2)(769, "div", 3)(770, "span", 4);
      \u0275\u0275text(771, "Industries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(772, "h2");
      \u0275\u0275text(773, "Use cases that drive ");
      \u0275\u0275elementStart(774, "span", 5);
      \u0275\u0275text(775, "real operational impact");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(776, "div", 6);
      \u0275\u0275elementStart(777, "p");
      \u0275\u0275text(778, "From rugged field devices to locked-down clinical tablets \u2014 proven across logistics, BFSI, education, retail and healthcare.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(779, "div", 111)(780, "div", 112)(781, "span", 113);
      \u0275\u0275text(782, "\u{1F69A}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(783, "b");
      \u0275\u0275text(784, "Logistics");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(785, "ul")(786, "li");
      \u0275\u0275text(787, "Remotely manage rugged field devices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(788, "li");
      \u0275\u0275text(789, "Offline data sync and GPS tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(790, "li");
      \u0275\u0275text(791, "Instantly lock or wipe lost assets");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(792, "div", 114)(793, "span", 115);
      \u0275\u0275text(794, "\u{1F3E6}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "b");
      \u0275\u0275text(796, "BFSI & Fintech");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(797, "ul")(798, "li");
      \u0275\u0275text(799, "Asset control with live device locations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(800, "li");
      \u0275\u0275text(801, "Automated audit reports and access logs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(802, "li");
      \u0275\u0275text(803, "Full corporate data isolation with encryption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(804, "li");
      \u0275\u0275text(805, "Enforce CIS, ISO and PCI-DSS across endpoints");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(806, "div", 116)(807, "span", 117);
      \u0275\u0275text(808, "\u{1F3EB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(809, "b");
      \u0275\u0275text(810, "Education");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(811, "ul")(812, "li");
      \u0275\u0275text(813, "Lock tablets to learning apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(814, "li");
      \u0275\u0275text(815, "Bulk-setup 100+ devices in minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(816, "li");
      \u0275\u0275text(817, "Monitor screen usage and block distractions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(818, "div", 118)(819, "span", 119);
      \u0275\u0275text(820, "\u{1F6CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(821, "b");
      \u0275\u0275text(822, "Retail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(823, "ul")(824, "li");
      \u0275\u0275text(825, "Assign access by shift and role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(826, "li");
      \u0275\u0275text(827, "Secure POS systems with version control");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "li");
      \u0275\u0275text(829, "Block offsite access using geofencing");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(830, "div", 120)(831, "span", 121);
      \u0275\u0275text(832, "\u{1F3E5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(833, "b");
      \u0275\u0275text(834, "Healthcare");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(835, "ul")(836, "li");
      \u0275\u0275text(837, "Lock tablets to EMR / EHR apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "li");
      \u0275\u0275text(839, "Enforce policy across staff and departments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(840, "li");
      \u0275\u0275text(841, "Remote access with full audit control");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(842, "div", 112)(843, "span", 122);
      \u0275\u0275text(844, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(845, "b");
      \u0275\u0275text(846, "MSPs & MSSPs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(847, "ul")(848, "li");
      \u0275\u0275text(849, "Manage client devices across tenants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(850, "li");
      \u0275\u0275text(851, "Enforce consistent policy from one dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(852, "li");
      \u0275\u0275text(853, "Automate compliance and patch workflows");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(854, "div", 114)(855, "span", 123);
      \u0275\u0275text(856, "\u{1F4BB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(857, "b");
      \u0275\u0275text(858, "Technology & SaaS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(859, "ul")(860, "li");
      \u0275\u0275text(861, "Enforce Zero Trust policies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(862, "li");
      \u0275\u0275text(863, "Centralised SaaS access and patch management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(864, "li");
      \u0275\u0275text(865, "Push OS updates and scripts remotely");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(866, "div", 116)(867, "span", 113);
      \u0275\u0275text(868, "\u{1F3ED}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(869, "b");
      \u0275\u0275text(870, "Manufacturing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(871, "ul")(872, "li");
      \u0275\u0275text(873, "Shop-floor kiosk devices locked to one app");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(874, "li");
      \u0275\u0275text(875, "Rugged handheld and scanner management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "li");
      \u0275\u0275text(877, "Site-level geofencing and shift policies");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(878, "section", 104)(879, "div", 2)(880, "div", 124)(881, "div")(882, "div", 125)(883, "span", 4);
      \u0275\u0275text(884, "Switching platforms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(885, "h2");
      \u0275\u0275text(886, "Migration without ");
      \u0275\u0275elementStart(887, "span", 5);
      \u0275\u0275text(888, "the headache");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(889, "div", 6);
      \u0275\u0275elementStart(890, "p");
      \u0275\u0275text(891, "Moving from Intune, Workspace ONE, Hexnode, Scalefusion or a legacy MDM? We handle the cutover.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(892, "div", 126)(893, "div", 127)(894, "span", 128);
      \u0275\u0275text(895, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(896, "div")(897, "h4");
      \u0275\u0275text(898, "SCIM, SAML & API support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(899, "p");
      \u0275\u0275text(900, "Integrate with the identity and workflow tools you already run, without a lengthy re-platforming exercise.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(901, "div", 129)(902, "span", 128);
      \u0275\u0275text(903, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(904, "div")(905, "h4");
      \u0275\u0275text(906, "Fast, seamless migration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(907, "p");
      \u0275\u0275text(908, "Switch from a legacy MDM in hours rather than weeks, with policy and group structures carried across.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(909, "div", 130)(910, "span", 128);
      \u0275\u0275text(911, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(912, "div")(913, "h4");
      \u0275\u0275text(914, "Zero-downtime deployment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(915, "p");
      \u0275\u0275text(916, "Roll out across your fleet with no service interruption \u2014 users keep working through the cutover.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(917, "div", 131)(918, "span", 128);
      \u0275\u0275text(919, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(920, "div")(921, "h4");
      \u0275\u0275text(922, "XcellHost runs the project");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(923, "p");
      \u0275\u0275text(924, "Discovery, pilot group, phased rollout and 30-day hypercare, managed by our team rather than left to yours.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(925, "div", 132);
      \u0275\u0275element(926, "div", 133);
      \u0275\u0275elementStart(927, "div", 134);
      \u0275\u0275text(928, "\u201CWe migrated 500+ devices in a single day with no downtime. The pilot group caught the two policy conflicts before they reached anyone else.\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(929, "div", 135);
      \u0275\u0275text(930, "IT Director \xB7 BFSI enterprise \xB7 500+ endpoints");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(931, "section", 1)(932, "div", 2)(933, "div", 3)(934, "span", 4);
      \u0275\u0275text(935, "Why XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(936, "h2");
      \u0275\u0275text(937, "Why teams choose ");
      \u0275\u0275elementStart(938, "span", 5);
      \u0275\u0275text(939, "XcellHost Cloud MDM");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(940, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(941, "div", 136)(942, "div", 137)(943, "b");
      \u0275\u0275text(944, "Built-in helpdesk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(945, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(946, "svg", 10);
      \u0275\u0275element(947, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(948, "Ticketing and issue resolution inside the console");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(949, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(950, "svg", 10);
      \u0275\u0275element(951, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(952, "Cuts ticket volume by around 40%");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(953, "div", 140)(954, "b");
      \u0275\u0275text(955, "One command center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(956, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(957, "svg", 10);
      \u0275\u0275element(958, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(959, "Multi-platform dashboard, no per-OS console");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(960, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(961, "svg", 10);
      \u0275\u0275element(962, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(963, "Simplifies IT and reduces tool overload");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(964, "div", 141)(965, "b");
      \u0275\u0275text(966, "Smart access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(967, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(968, "svg", 10);
      \u0275\u0275element(969, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(970, "SSO, MFA and a rules engine in one layer");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(971, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(972, "svg", 10);
      \u0275\u0275element(973, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(974, "Eliminates risky and shared logins");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(975, "div", 142)(976, "b");
      \u0275\u0275text(977, "Day-zero readiness");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(978, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(979, "svg", 10);
      \u0275\u0275element(980, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(981, "New hires productive from their first morning");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(982, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(983, "svg", 10);
      \u0275\u0275element(984, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(985, "No imaging bench, no office visit needed");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(986, "div", 143)(987, "b");
      \u0275\u0275text(988, "Fast rollouts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(989, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(990, "svg", 10);
      \u0275\u0275element(991, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(992, "Role-based templates rather than per-device setup");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(993, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(994, "svg", 10);
      \u0275\u0275element(995, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(996, "Deploy in hours, not weeks");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(997, "div", 137)(998, "b");
      \u0275\u0275text(999, "Versatile deployments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1e3, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1001, "svg", 10);
      \u0275\u0275element(1002, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1003, "Kiosk, BYOD, corporate-owned and geofenced");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1004, "div", 138);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1005, "svg", 10);
      \u0275\u0275element(1006, "path", 139);
      \u0275\u0275elementEnd();
      \u0275\u0275text(1007, "Every scenario from a single platform");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1008, "section", 75)(1009, "div", 2)(1010, "div", 3)(1011, "span", 4);
      \u0275\u0275text(1012, "Outcomes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1013, "h2");
      \u0275\u0275text(1014, "Most teams see results in the first week");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1015, "div", 6);
      \u0275\u0275elementStart(1016, "p");
      \u0275\u0275text(1017, "Consolidation, automation and Zero Trust posture \u2014 measured on the fleet, not on a slide.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1018, "div", 144)(1019, "div", 145)(1020, "b", 146);
      \u0275\u0275text(1021, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1022, "span");
      \u0275\u0275text(1023, "Disconnected tools eliminated");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1024, "div", 147)(1025, "b", 148);
      \u0275\u0275text(1026, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1027, "span");
      \u0275\u0275text(1028, "Reduction in repetitive IT tasks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1029, "div", 149)(1030, "b");
      \u0275\u0275text(1031, "Zero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1032, "span");
      \u0275\u0275text(1033, "Trust posture on every endpoint");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1034, "div", 150)(1035, "b", 151);
      \u0275\u0275text(1036, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1037, "span");
      \u0275\u0275text(1038, "From signup to first device enrolled");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1039, "section", 1)(1040, "div", 2)(1041, "div", 3)(1042, "span", 4);
      \u0275\u0275text(1043, "Integrations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1044, "h2");
      \u0275\u0275text(1045, "Connect everything, ");
      \u0275\u0275elementStart(1046, "span", 5);
      \u0275\u0275text(1047, "work smarter");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1048, "div", 6);
      \u0275\u0275elementStart(1049, "p");
      \u0275\u0275text(1050, "Plug into the identity, security and communication tools you already run. Migrate in hours and automate workflows without disrupting operations.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1051, "div", 152)(1052, "div", 153)(1053, "div", 154);
      \u0275\u0275element(1054, "span", 155);
      \u0275\u0275text(1055, "Microsoft Entra ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1056, "div", 154);
      \u0275\u0275element(1057, "span", 156);
      \u0275\u0275text(1058, "Google Workspace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1059, "div", 154);
      \u0275\u0275element(1060, "span", 157);
      \u0275\u0275text(1061, "Okta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1062, "div", 154);
      \u0275\u0275element(1063, "span", 158);
      \u0275\u0275text(1064, "Slack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1065, "div", 154);
      \u0275\u0275element(1066, "span", 159);
      \u0275\u0275text(1067, "Microsoft Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1068, "div", 154);
      \u0275\u0275element(1069, "span", 160);
      \u0275\u0275text(1070, "Jira");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1071, "div", 154);
      \u0275\u0275element(1072, "span", 161);
      \u0275\u0275text(1073, "Acronis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1074, "div", 154);
      \u0275\u0275element(1075, "span", 162);
      \u0275\u0275text(1076, "Splunk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1077, "div", 154);
      \u0275\u0275element(1078, "span", 163);
      \u0275\u0275text(1079, "Intercom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1080, "div", 154);
      \u0275\u0275element(1081, "span", 164);
      \u0275\u0275text(1082, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1083, "div", 154);
      \u0275\u0275element(1084, "span", 165);
      \u0275\u0275text(1085, "SCIM / SAML");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1086, "div", 154);
      \u0275\u0275element(1087, "span", 166);
      \u0275\u0275text(1088, "REST API");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1089, "div", 167);
      \u0275\u0275element(1090, "span", 155);
      \u0275\u0275text(1091, "Microsoft Entra ID");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1092, "div", 167);
      \u0275\u0275element(1093, "span", 156);
      \u0275\u0275text(1094, "Google Workspace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1095, "div", 167);
      \u0275\u0275element(1096, "span", 157);
      \u0275\u0275text(1097, "Okta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1098, "div", 167);
      \u0275\u0275element(1099, "span", 158);
      \u0275\u0275text(1100, "Slack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1101, "div", 167);
      \u0275\u0275element(1102, "span", 159);
      \u0275\u0275text(1103, "Microsoft Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1104, "div", 167);
      \u0275\u0275element(1105, "span", 160);
      \u0275\u0275text(1106, "Jira");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1107, "div", 167);
      \u0275\u0275element(1108, "span", 161);
      \u0275\u0275text(1109, "Acronis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1110, "div", 167);
      \u0275\u0275element(1111, "span", 162);
      \u0275\u0275text(1112, "Splunk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1113, "div", 167);
      \u0275\u0275element(1114, "span", 163);
      \u0275\u0275text(1115, "Intercom");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1116, "div", 167);
      \u0275\u0275element(1117, "span", 164);
      \u0275\u0275text(1118, "Stripe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1119, "div", 167);
      \u0275\u0275element(1120, "span", 165);
      \u0275\u0275text(1121, "SCIM / SAML");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1122, "div", 167);
      \u0275\u0275element(1123, "span", 166);
      \u0275\u0275text(1124, "REST API");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1125, "section", 168)(1126, "div", 2)(1127, "div", 3)(1128, "span", 4);
      \u0275\u0275text(1129, "Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1130, "h2");
      \u0275\u0275text(1131, "Simple, ");
      \u0275\u0275elementStart(1132, "span", 5);
      \u0275\u0275text(1133, "transparent pricing");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1134, "div", 6);
      \u0275\u0275elementStart(1135, "p");
      \u0275\u0275text(1136, "Per device, per month. Start with 20 devices on a fully functional 14-day trial. All prices exclude 18% GST.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1137, "div", 169)(1138, "div", 170)(1139, "button", 171);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1139_listener() {
        return ctx.setBillingCycle("annual");
      });
      \u0275\u0275text(1140, "Annual");
      \u0275\u0275elementStart(1141, "span", 172);
      \u0275\u0275text(1142, "Save 20%");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1143, "button", 171);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1143_listener() {
        return ctx.setBillingCycle("monthly");
      });
      \u0275\u0275text(1144, "Monthly");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1145, "div", 173)(1146, "div", 174)(1147, "h3");
      \u0275\u0275text(1148, "Essentials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1149, "div", 175);
      \u0275\u0275text(1150, "Complete endpoint visibility, device lifecycle management and IT operations tooling across every platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1151, "div", 176)(1152, "span", 177);
      \u0275\u0275text(1153, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1154, "span", 178);
      \u0275\u0275text(1155);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1156, "div", 179);
      \u0275\u0275text(1157);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1158, "span", 180);
      \u0275\u0275text(1159, "What you get");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1160, "ul")(1161, "li")(1162, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1163, "svg", 182);
      \u0275\u0275element(1164, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1165, "Admin dashboard, widgets & role-based access");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1166, "li")(1167, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1168, "svg", 182);
      \u0275\u0275element(1169, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1170, "Device inventory, groups & enrolment (BYOD + COD)");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1171, "li")(1172, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1173, "svg", 182);
      \u0275\u0275element(1174, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1175, "Software deployment & kiosk mode");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1176, "li")(1177, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1178, "svg", 182);
      \u0275\u0275element(1179, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1180, "Zero-touch onboarding & audit logs");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1181, "li")(1182, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1183, "svg", 182);
      \u0275\u0275element(1184, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1185, "Command Center & ticketing");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1186, "a", 184);
      \u0275\u0275text(1187, "Start 14-day trial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1188, "div", 185)(1189, "span", 186);
      \u0275\u0275text(1190, "Most popular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1191, "h3");
      \u0275\u0275text(1192, "Secure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1193, "div", 175);
      \u0275\u0275text(1194, "Compliance visibility, vulnerability management and platform-wide authentication on a fully managed fleet.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1195, "div", 176)(1196, "span", 177);
      \u0275\u0275text(1197, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1198, "span", 178);
      \u0275\u0275text(1199);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1200, "div", 179);
      \u0275\u0275text(1201);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1202, "span", 180);
      \u0275\u0275text(1203, "Everything in Essentials, plus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1204, "ul")(1205, "li")(1206, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1207, "svg", 182);
      \u0275\u0275element(1208, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1209, "Compliance monitoring & automated remediation");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1210, "li")(1211, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1212, "svg", 182);
      \u0275\u0275element(1213, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1214, "Patch & vulnerability centre");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1215, "li")(1216, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1217, "svg", 182);
      \u0275\u0275element(1218, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1219, "MFA configuration (platform-wide)");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1220, "li")(1221, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1222, "svg", 182);
      \u0275\u0275element(1223, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1224, "Security posture dashboards");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1225, "li")(1226, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1227, "svg", 182);
      \u0275\u0275element(1228, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1229, "macOS & Windows EDR modules");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1230, "a", 95);
      \u0275\u0275text(1231, "Start 14-day trial ");
      \u0275\u0275elementStart(1232, "span", 96);
      \u0275\u0275text(1233, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1234, "div", 187)(1235, "h3");
      \u0275\u0275text(1236, "Zero Trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1237, "div", 175);
      \u0275\u0275text(1238, "Full device management, security and Zero Trust for organisations needing conditional and identity-aware access.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1239, "div", 176)(1240, "span", 177);
      \u0275\u0275text(1241, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1242, "span", 178);
      \u0275\u0275text(1243);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1244, "div", 179);
      \u0275\u0275text(1245);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1246, "span", 180);
      \u0275\u0275text(1247, "Everything in Secure, plus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1248, "ul")(1249, "li")(1250, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1251, "svg", 182);
      \u0275\u0275element(1252, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1253, "Conditional & location-aware access policies");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1254, "li")(1255, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1256, "svg", 182);
      \u0275\u0275element(1257, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1258, "Device login controls for macOS & Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1259, "li")(1260, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1261, "svg", 182);
      \u0275\u0275element(1262, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1263, "Context-aware access for SaaS & internal apps");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1264, "li")(1265, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1266, "svg", 182);
      \u0275\u0275element(1267, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1268, "Asset management & lifecycle visibility");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1269, "li")(1270, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1271, "svg", 182);
      \u0275\u0275element(1272, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1273, "Cloud RADIUS for Wi-Fi & VPN");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1274, "a", 184);
      \u0275\u0275text(1275, "Start 14-day trial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1276, "div", 188)(1277, "h3");
      \u0275\u0275text(1278, "MSP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1279, "div", 175);
      \u0275\u0275text(1280, "For managed service providers running multiple client environments from a single platform.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1281, "div", 189)(1282, "span", 178);
      \u0275\u0275text(1283, "Contact sales");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1284, "div", 179);
      \u0275\u0275text(1285, "volume & partner pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1286, "span", 180);
      \u0275\u0275text(1287, "Key features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1288, "ul")(1289, "li")(1290, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1291, "svg", 182);
      \u0275\u0275element(1292, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1293, "Manage all clients from one console");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1294, "li")(1295, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1296, "svg", 182);
      \u0275\u0275element(1297, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1298, "Deploy devices without on-site visits");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1299, "li")(1300, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1301, "svg", 182);
      \u0275\u0275element(1302, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1303, "Replicate policies across client tenants");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1304, "li")(1305, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1306, "svg", 182);
      \u0275\u0275element(1307, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1308, "Per-tenant reporting & white-label options");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1309, "li")(1310, "span", 181);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1311, "svg", 182);
      \u0275\u0275element(1312, "path", 183);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1313, "Partner margins & reseller terms");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1314, "a", 184);
      \u0275\u0275text(1315, "Talk to sales");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1316, "div", 190)(1317, "table")(1318, "thead")(1319, "tr")(1320, "th");
      \u0275\u0275text(1321, "Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1322, "th");
      \u0275\u0275text(1323, "Essentials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1324, "th");
      \u0275\u0275text(1325, "Secure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1326, "th");
      \u0275\u0275text(1327, "Zero Trust");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1328, "tbody")(1329, "tr", 191)(1330, "td", 192);
      \u0275\u0275text(1331, "Core platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1332, "tr")(1333, "td");
      \u0275\u0275text(1334, "Admin dashboard & widgets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1335, "td", 193);
      \u0275\u0275text(1336, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1337, "td", 193);
      \u0275\u0275text(1338, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1339, "td", 193);
      \u0275\u0275text(1340, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1341, "tr")(1342, "td");
      \u0275\u0275text(1343, "Role-based admin access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1344, "td", 193);
      \u0275\u0275text(1345, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1346, "td", 193);
      \u0275\u0275text(1347, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1348, "td", 193);
      \u0275\u0275text(1349, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1350, "tr")(1351, "td");
      \u0275\u0275text(1352, "User directory & groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1353, "td", 193);
      \u0275\u0275text(1354, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1355, "td", 193);
      \u0275\u0275text(1356, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1357, "td", 193);
      \u0275\u0275text(1358, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1359, "tr", 191)(1360, "td", 192);
      \u0275\u0275text(1361, "Endpoint management");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1362, "tr")(1363, "td");
      \u0275\u0275text(1364, "Device inventory, search & groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1365, "td", 193);
      \u0275\u0275text(1366, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1367, "td", 193);
      \u0275\u0275text(1368, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1369, "td", 193);
      \u0275\u0275text(1370, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1371, "tr")(1372, "td");
      \u0275\u0275text(1373, "Enrolment (BYOD + corporate-owned)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1374, "td", 193);
      \u0275\u0275text(1375, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1376, "td", 193);
      \u0275\u0275text(1377, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1378, "td", 193);
      \u0275\u0275text(1379, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1380, "tr")(1381, "td");
      \u0275\u0275text(1382, "Configuration profiles & policy groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1383, "td", 193);
      \u0275\u0275text(1384, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1385, "td", 193);
      \u0275\u0275text(1386, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1387, "td", 193);
      \u0275\u0275text(1388, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1389, "tr")(1390, "td");
      \u0275\u0275text(1391, "Kiosk & single-purpose mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1392, "td", 193);
      \u0275\u0275text(1393, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1394, "td", 193);
      \u0275\u0275text(1395, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1396, "td", 193);
      \u0275\u0275text(1397, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1398, "tr")(1399, "td");
      \u0275\u0275text(1400, "Software deployment & updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1401, "td", 193);
      \u0275\u0275text(1402, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1403, "td", 193);
      \u0275\u0275text(1404, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1405, "td", 193);
      \u0275\u0275text(1406, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1407, "tr")(1408, "td");
      \u0275\u0275text(1409, "Command Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1410, "td", 193);
      \u0275\u0275text(1411, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1412, "td", 193);
      \u0275\u0275text(1413, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1414, "td", 193);
      \u0275\u0275text(1415, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1416, "tr")(1417, "td");
      \u0275\u0275text(1418, "Geolocation services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1419, "td", 193);
      \u0275\u0275text(1420, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1421, "td", 193);
      \u0275\u0275text(1422, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1423, "td", 193);
      \u0275\u0275text(1424, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1425, "tr", 191)(1426, "td", 192);
      \u0275\u0275text(1427, "Security & compliance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1428, "tr")(1429, "td");
      \u0275\u0275text(1430, "Automated remediation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1431, "td", 194);
      \u0275\u0275text(1432, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1433, "td", 193);
      \u0275\u0275text(1434, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1435, "td", 193);
      \u0275\u0275text(1436, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1437, "tr")(1438, "td");
      \u0275\u0275text(1439, "Patch & vulnerability centre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1440, "td", 194);
      \u0275\u0275text(1441, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1442, "td", 193);
      \u0275\u0275text(1443, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1444, "td", 193);
      \u0275\u0275text(1445, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1446, "tr")(1447, "td");
      \u0275\u0275text(1448, "MFA configuration (platform-wide)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1449, "td", 194);
      \u0275\u0275text(1450, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1451, "td", 193);
      \u0275\u0275text(1452, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1453, "td", 193);
      \u0275\u0275text(1454, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1455, "tr")(1456, "td");
      \u0275\u0275text(1457, "Security posture dashboards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1458, "td", 194);
      \u0275\u0275text(1459, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1460, "td", 193);
      \u0275\u0275text(1461, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1462, "td", 193);
      \u0275\u0275text(1463, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1464, "tr", 191)(1465, "td", 192);
      \u0275\u0275text(1466, "Zero Trust & access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1467, "tr")(1468, "td");
      \u0275\u0275text(1469, "Conditional access policies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1470, "td", 194);
      \u0275\u0275text(1471, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1472, "td", 194);
      \u0275\u0275text(1473, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1474, "td", 193);
      \u0275\u0275text(1475, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1476, "tr")(1477, "td");
      \u0275\u0275text(1478, "Context-aware access for SaaS & internal apps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1479, "td", 194);
      \u0275\u0275text(1480, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1481, "td", 194);
      \u0275\u0275text(1482, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1483, "td", 193);
      \u0275\u0275text(1484, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1485, "tr")(1486, "td");
      \u0275\u0275text(1487, "Device login controls (macOS & Windows)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1488, "td", 194);
      \u0275\u0275text(1489, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1490, "td", 194);
      \u0275\u0275text(1491, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1492, "td", 193);
      \u0275\u0275text(1493, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1494, "tr")(1495, "td");
      \u0275\u0275text(1496, "Location-aware access conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1497, "td", 194);
      \u0275\u0275text(1498, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1499, "td", 194);
      \u0275\u0275text(1500, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1501, "td", 193);
      \u0275\u0275text(1502, "\u2713");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1503, "tr")(1504, "td");
      \u0275\u0275text(1505, "Asset management & lifecycle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1506, "td", 194);
      \u0275\u0275text(1507, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1508, "td", 194);
      \u0275\u0275text(1509, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1510, "td", 193);
      \u0275\u0275text(1511, "\u2713");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1512, "p", 195);
      \u0275\u0275text(1513, "All prices exclude 18% GST \xB7 GST invoice on every purchase \xB7 Pay via UPI, Cards or NetBanking");
      \u0275\u0275element(1514, "br");
      \u0275\u0275text(1515, " Every plan includes 24\xD77 support, SSO access, user roles and API access \xB7 Nonprofit, education and partner pricing available on request");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1516, "section", 1)(1517, "div", 2)(1518, "div", 196)(1519, "div", 197);
      \u0275\u0275text(1520, "PM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1521, "p");
      \u0275\u0275text(1522, "\u201CXcellHost helped us modernise device management while meeting strict compliance requirements. Onboarding staff is now seamless, and we can enforce security policies without slowing anyone down.\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1523, "div", 135)(1524, "b");
      \u0275\u0275text(1525, "Project Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1526, " \xB7 Public sector \xB7 800+ endpoints managed");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1527, "section", 104)(1528, "div", 2)(1529, "div", 3)(1530, "span", 4);
      \u0275\u0275text(1531, "FAQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1532, "h2");
      \u0275\u0275text(1533, "Frequently asked ");
      \u0275\u0275elementStart(1534, "span", 5);
      \u0275\u0275text(1535, "questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1536, "div", 6);
      \u0275\u0275elementStart(1537, "p");
      \u0275\u0275text(1538, "Everything about the platform, deployment and billing.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1539, "div", 198)(1540, "div", 199)(1541, "button", 200);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1541_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(1542, "What is the difference between MDM and UEM?");
      \u0275\u0275elementStart(1543, "span", 201);
      \u0275\u0275text(1544, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1545, "div", 202)(1546, "p");
      \u0275\u0275text(1547, "MDM (Mobile Device Management) originally covered phones and tablets. UEM (Unified Endpoint Management) extends the same control plane to laptops, desktops and servers as well. XcellHost Cloud MDM is a UEM platform \u2014 Windows, macOS, iOS, Android and Linux managed with the same depth from one console, rather than a mobile tool with a desktop add-on.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1548, "div", 203)(1549, "button", 200);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1549_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(1550, "Is there a free trial?");
      \u0275\u0275elementStart(1551, "span", 201);
      \u0275\u0275text(1552, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1553, "div", 202)(1554, "p");
      \u0275\u0275text(1555, "Yes \u2014 a fully functional 14-day trial starting at 20 devices, with no feature gating. We also include a free 30-minute onboarding session to get your first policy group and enrolment profile configured properly rather than leaving you to guess.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1556, "div", 204)(1557, "button", 200);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1557_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(1558, "How long does deployment take?");
      \u0275\u0275elementStart(1559, "span", 201);
      \u0275\u0275text(1560, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1561, "div", 202)(1562, "p");
      \u0275\u0275text(1563, "The console is live in about 15 minutes. A typical SMB rollout runs a pilot group in week one and the full fleet in week two. Migrations from an existing MDM are usually completed in hours per site, because policy and group structures are mapped before cutover rather than rebuilt afterwards.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1564, "div", 205)(1565, "button", 200);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1565_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(1566, "Can we manage personal (BYOD) devices?");
      \u0275\u0275elementStart(1567, "span", 201);
      \u0275\u0275text(1568, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1569, "div", 202)(1570, "p");
      \u0275\u0275text(1571, "Yes. On Android we use Work Profiles and on iOS user enrolment, so corporate apps and data are isolated and can be wiped independently \u2014 personal photos, messages and accounts stay untouched and invisible to IT. That separation matters for both employee trust and DPDP Act obligations.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1572, "div", 206)(1573, "button", 200);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1573_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(1574, "Do you support zero-touch enrolment?");
      \u0275\u0275elementStart(1575, "span", 201);
      \u0275\u0275text(1576, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1577, "div", 202)(1578, "p");
      \u0275\u0275text(1579, "Yes, across all major platforms \u2014 Apple Business Manager and Apple School Manager for Apple hardware, Android zero-touch for Android Enterprise, and Autopilot-style provisioning for Windows. Devices ship sealed to the employee and configure themselves on first boot.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1580, "div", 207)(1581, "button", 200);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1581_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(1582, "Where is device data stored?");
      \u0275\u0275elementStart(1583, "span", 201);
      \u0275\u0275text(1584, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1585, "div", 202)(1586, "p");
      \u0275\u0275text(1587, "In Indian Tier-4 datacenters with encryption at rest and in transit, keeping you aligned with DPDP Act and RBI data-residency expectations. Access is role-based with MFA enforced on every admin account, and all administrative actions are written to an immutable audit log.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1588, "div", 203)(1589, "button", 200);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1589_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(1590, "Can I change plan or cancel later?");
      \u0275\u0275elementStart(1591, "span", 201);
      \u0275\u0275text(1592, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1593, "div", 202)(1594, "p");
      \u0275\u0275text(1595, "You can upgrade at any time to unlock compliance automation, Zero Trust or asset management, and the change applies immediately across your fleet. Subscriptions can be cancelled at the end of the billing term.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1596, "div", 204)(1597, "button", 200);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1597_listener($event) {
        return ctx.toggleFaq($event);
      });
      \u0275\u0275text(1598, "Do we get a GST invoice?");
      \u0275\u0275elementStart(1599, "span", 201);
      \u0275\u0275text(1600, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1601, "div", 202)(1602, "p");
      \u0275\u0275text(1603, "Yes. Billing is in INR with a GST-compliant invoice on every purchase so your business can claim input tax credit. Payment is by UPI, cards or NetBanking, and licences are issued per device on the term you select.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1604, "section", 208)(1605, "div", 2)(1606, "div", 3)(1607, "span", 4);
      \u0275\u0275text(1608, "Get started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1609, "h2");
      \u0275\u0275text(1610, "Ready to make device management easy?");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1611, "div", 6);
      \u0275\u0275elementStart(1612, "p");
      \u0275\u0275text(1613, "We will scope your fleet, run a pilot group and handle the rollout \u2014 you keep working through it.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1614, "div", 209)(1615, "div", 210)(1616, "h3");
      \u0275\u0275text(1617, "Talk to the MDM team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1618, "p");
      \u0275\u0275text(1619, "Licensing, migration, policy design and managed operations under one roof \u2014 transparent INR pricing, GST invoice, 24\xD77 support in English and Hindi.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1620, "ul", 211)(1621, "li")(1622, "a", 212)(1623, "span", 213);
      \u0275\u0275text(1624, "\u260E");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1625, "span")(1626, "b");
      \u0275\u0275text(1627, "Call us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1628, "span");
      \u0275\u0275text(1629, "+91 22 6711 1555");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1630, "li")(1631, "a", 214)(1632, "span", 213);
      \u0275\u0275text(1633, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1634, "span")(1635, "b");
      \u0275\u0275text(1636, "WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1637, "span");
      \u0275\u0275text(1638, "+91 86570 32540 \u2014 start a chat");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1639, "li")(1640, "a", 215)(1641, "span", 213);
      \u0275\u0275text(1642, "\u2709");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1643, "span")(1644, "b");
      \u0275\u0275text(1645, "Email us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1646, "span");
      \u0275\u0275text(1647, "sales@xcellhost.cloud");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1648, "li")(1649, "a", 216)(1650, "span", 213);
      \u0275\u0275text(1651, "\u{1F4CB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1652, "span")(1653, "b");
      \u0275\u0275text(1654, "Submit a ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1655, "span");
      \u0275\u0275text(1656, "Trackable request \xB7 24\xD77 response");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1657, "div", 217)(1658, "span");
      \u0275\u0275text(1659, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1660, "span");
      \u0275\u0275text(1661, "ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1662, "span");
      \u0275\u0275text(1663, "Since 1999");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1664, "div", 218)(1665, "h3");
      \u0275\u0275text(1666, "Start your free trial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1667, "p");
      \u0275\u0275text(1668, "Fill the form \u2014 we respond within one business day.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1669, "form", 219)(1670, "div", 220)(1671, "div")(1672, "label", 221);
      \u0275\u0275text(1673, "Full Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1674, "input", 222);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1675, "div")(1676, "label", 223);
      \u0275\u0275text(1677, "Company Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1678, "input", 224);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1679, "div", 220)(1680, "div")(1681, "label", 225);
      \u0275\u0275text(1682, "Work Email *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1683, "input", 226);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1684, "div")(1685, "label", 227);
      \u0275\u0275text(1686, "Mobile Number *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1687, "input", 228);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1688, "div", 220)(1689, "div")(1690, "label", 229);
      \u0275\u0275text(1691, "Device count *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1692, "select", 230)(1693, "option", 231);
      \u0275\u0275text(1694, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1695, "option");
      \u0275\u0275text(1696, "Under 25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1697, "option");
      \u0275\u0275text(1698, "25\u2013100");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1699, "option");
      \u0275\u0275text(1700, "100\u2013500");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1701, "option");
      \u0275\u0275text(1702, "500\u20132,000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1703, "option");
      \u0275\u0275text(1704, "2,000+");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1705, "div")(1706, "label", 232);
      \u0275\u0275text(1707, "Primary platform *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1708, "select", 233)(1709, "option", 231);
      \u0275\u0275text(1710, "Select");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1711, "option");
      \u0275\u0275text(1712, "Windows");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1713, "option");
      \u0275\u0275text(1714, "macOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1715, "option");
      \u0275\u0275text(1716, "iOS / iPadOS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1717, "option");
      \u0275\u0275text(1718, "Android");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1719, "option");
      \u0275\u0275text(1720, "Linux");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1721, "option");
      \u0275\u0275text(1722, "Mixed fleet");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1723, "div")(1724, "label", 234);
      \u0275\u0275text(1725, "Current MDM (if any)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1726, "input", 235);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1727, "div")(1728, "label", 236);
      \u0275\u0275text(1729, "Message");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1730, "textarea", 237);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1731, "button", 238);
      \u0275\u0275text(1732, "Start Free Trial ");
      \u0275\u0275elementStart(1733, "span", 96);
      \u0275\u0275text(1734, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1735, "p", 239);
      \u0275\u0275text(1736, "We respond within one business day \xB7 No spam, ever.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1737, "section", 240)(1738, "div", 2)(1739, "div", 241);
      \u0275\u0275element(1740, "div", 242);
      \u0275\u0275elementStart(1741, "div", 243)(1742, "div", 244);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1743, "svg", 10);
      \u0275\u0275element(1744, "rect", 11)(1745, "rect", 12)(1746, "path", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1747, "div")(1748, "h3");
      \u0275\u0275text(1749, "Go live in 15 minutes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1750, "p");
      \u0275\u0275text(1751, "Start the trial with 20 devices, or let us scope your fleet and run the migration. Free consultation, transparent INR pricing, GST invoice.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1752, "div", 245)(1753, "a", 95);
      \u0275\u0275text(1754, "Start Free Trial ");
      \u0275\u0275elementStart(1755, "span", 96);
      \u0275\u0275text(1756, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1757, "a", 246);
      \u0275\u0275text(1758, "Talk on WhatsApp");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1759, "div", 247)(1760, "span");
      \u0275\u0275text(1761, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1762, "span");
      \u0275\u0275text(1763, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1764, "span");
      \u0275\u0275text(1765, "\u{1F3D7} Tier-4 Indian DCs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1766, "span");
      \u0275\u0275text(1767, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1768, "span");
      \u0275\u0275text(1769, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(1770, "xh-insights-section", 248);
      \u0275\u0275elementStart(1771, "section", 249)(1772, "div", 2)(1773, "div", 250)(1774, "div", 251)(1775, "h2");
      \u0275\u0275text(1776, "Ready to start with Cloud MDM?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1777, "p");
      \u0275\u0275text(1778, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1779, "div", 252)(1780, "button", 253);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1780_listener() {
        return ctx.requestCallback();
      });
      \u0275\u0275text(1781, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1782, "a", 254);
      \u0275\u0275text(1783, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1784, "button", 255);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1784_listener() {
        return ctx.requestCallback();
      });
      \u0275\u0275text(1785, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1786, "button", 255);
      \u0275\u0275listener("click", function CloudMdmPage_Template_button_click_1786_listener() {
        return ctx.requestCallback();
      });
      \u0275\u0275text(1787, "\u{1F4D6} Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1788, "a", 256);
      \u0275\u0275text(1789, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1790, "a", 257);
      \u0275\u0275text(1791, "Email Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1792, "a", 258);
      \u0275\u0275element(1793, "img", 259);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1794, "div", 260)(1795, "span");
      \u0275\u0275text(1796, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1797, "span");
      \u0275\u0275text(1798, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1799, "span");
      \u0275\u0275text(1800, "\u{1F91D} Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1801, "span");
      \u0275\u0275text(1802, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1803, "span");
      \u0275\u0275text(1804, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(1139);
      \u0275\u0275classProp("on", ctx.billingCycle() === "annual");
      \u0275\u0275attribute("aria-pressed", ctx.billingCycle() === "annual");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("on", ctx.billingCycle() === "monthly");
      \u0275\u0275attribute("aria-pressed", ctx.billingCycle() === "monthly");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.billingCycle() === "annual" ? "399" : "499");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("per device / month \xB7 billed ", ctx.billingCycle() === "annual" ? "annually" : "monthly");
      \u0275\u0275advance(42);
      \u0275\u0275textInterpolate(ctx.billingCycle() === "annual" ? "649" : "799");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("per device / month \xB7 billed ", ctx.billingCycle() === "annual" ? "annually" : "monthly");
      \u0275\u0275advance(42);
      \u0275\u0275textInterpolate(ctx.billingCycle() === "annual" ? "899" : "1149");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("per device / month \xB7 billed ", ctx.billingCycle() === "annual" ? "annually" : "monthly");
      \u0275\u0275advance(525);
      \u0275\u0275property("pageAliases", \u0275\u0275pureFunction0(13, _c0));
    }
  }, dependencies: [InsightsSectionComponent, ProductPageComponent, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  --navy:#041E42;\n  --navy2:#0A2A57;\n  --blue:#1565D8;\n  --blue-d:#0C3E8F;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --orange-d:#F57C00;\n  --ice:#F2F6FC;\n  --white:#fff;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --green:#2ECC71;\n  --green-d:#128A42;\n  --red:#E5484D;\n  --amber:#F5A524;\n  --purple:#7C3AED;\n  --teal:#0F766E;\n  --shadow-s:0 6px 18px rgba(4,30,66,.06);\n  --shadow-m:0 18px 50px rgba(4,30,66,.10);\n  --shadow-lg:0 34px 80px -20px rgba(4,30,66,.34);\n  --maxw:1240px;\n  --ease:cubic-bezier(.22,.7,.2,1);\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  font-family:\n    var(--body),\n    system-ui,\n    sans-serif;\n  color: var(--ink);\n  background: #fff;\n  line-height: 1.6;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  color: var(--navy);\n  line-height: 1.12;\n  letter-spacing: -.02em;\n  font-weight: 700;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%], \nsvg[_ngcontent-%COMP%] {\n  display: block;\n}\n.wrap[_ngcontent-%COMP%] {\n  max-width: var(--maxw);\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.serif[_ngcontent-%COMP%] {\n  font-family: "Instrument Serif", serif;\n  font-style: italic;\n  letter-spacing: 0;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n}\n#progress[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 3px;\n  width: 0;\n  z-index: 130;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  box-shadow: 0 0 12px rgba(21, 101, 216, .6);\n}\n#spotlight[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity .4s;\n  background:\n    radial-gradient(\n      340px circle at var(--mx,-999px) var(--my,-999px),\n      rgba(21, 101, 216, .09),\n      transparent 65%);\n}\n.rv[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity .7s var(--ease), transform .7s var(--ease);\n}\n.rv.in[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n}\n.rv[data-d="1"][_ngcontent-%COMP%] {\n  transition-delay: .08s;\n}\n.rv[data-d="2"][_ngcontent-%COMP%] {\n  transition-delay: .16s;\n}\n.rv[data-d="3"][_ngcontent-%COMP%] {\n  transition-delay: .24s;\n}\n.rv[data-d="4"][_ngcontent-%COMP%] {\n  transition-delay: .32s;\n}\n.rv[data-d="5"][_ngcontent-%COMP%] {\n  transition-delay: .4s;\n}\n.tilt[_ngcontent-%COMP%] {\n  transition: transform .25s var(--ease);\n}\n.grid-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .55;\n  background-image:\n    linear-gradient(var(--line) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--line) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      760px 560px at 82% 8%,\n      #000,\n      transparent 72%);\n  -webkit-mask-image:\n    radial-gradient(\n      760px 560px at 82% 8%,\n      #000,\n      transparent 72%);\n  animation: _ngcontent-%COMP%_gridmove 32s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_gridmove {\n  to {\n    background-position: 48px 48px;\n  }\n}\n.aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  z-index: 0;\n  pointer-events: none;\n  opacity: .55;\n}\n.aurora.a1[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  background:\n    radial-gradient(\n      circle,\n      #bcd6ff,\n      transparent 65%);\n  top: -90px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_aflow1 12s ease-in-out infinite;\n}\n.aurora.a2[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      #ffd9a8,\n      transparent 65%);\n  bottom: -40px;\n  right: 22%;\n  animation: _ngcontent-%COMP%_aflow2 14s ease-in-out infinite;\n}\n.aurora.a3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      #cfe0ff,\n      transparent 65%);\n  top: 34%;\n  left: -70px;\n  animation: _ngcontent-%COMP%_aflow3 16s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_aflow1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-30px, 24px) scale(1.12);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(26px, -20px) scale(1.15);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow3 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(20px, 18px) scale(1.1);\n  }\n}\n#net[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .7;\n}\n@keyframes _ngcontent-%COMP%_scfloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-11px);\n  }\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: .25;\n  }\n}\n@keyframes _ngcontent-%COMP%_cbpulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(21, 101, 216, .5);\n  }\n  70% {\n    box-shadow: 0 0 0 9px rgba(21, 101, 216, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(21, 101, 216, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_tickpop {\n  0% {\n    transform: scale(0) rotate(-40deg);\n  }\n  60% {\n    transform: scale(1.2) rotate(6deg);\n  }\n  100% {\n    transform: scale(1) rotate(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_hlsweep {\n  to {\n    transform: scaleX(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_marq {\n  to {\n    transform: translateX(-50%);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadein {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  font-weight: 500;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: var(--blue);\n  background: var(--blue-soft);\n  border: 1px solid #d3e2fb;\n  padding: 7px 14px;\n  border-radius: 99px;\n}\n.eyebrow[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--blue);\n  animation: _ngcontent-%COMP%_cbpulse 2s infinite;\n}\n.btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  overflow: hidden;\n  font-family: var(--body);\n  font-weight: 600;\n  font-size: 14.5px;\n  padding: 12px 22px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  will-change: transform;\n  transition:\n    transform .18s var(--ease),\n    box-shadow .28s,\n    background .25s,\n    color .25s,\n    border-color .25s;\n}\n.btn[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -120%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      100deg,\n      transparent,\n      rgba(255, 255, 255, .45),\n      transparent);\n  transform: skewX(-18deg);\n  transition: left .55s var(--ease);\n}\n.btn[_ngcontent-%COMP%]:hover:before {\n  left: 130%;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(21, 101, 216, .75);\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px -14px rgba(21, 101, 216, .85);\n}\n.btn-orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(255, 140, 26, .7);\n}\n.btn-orange[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px -14px rgba(255, 140, 26, .85);\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--navy);\n  border-color: var(--line);\n  box-shadow: var(--shadow-s);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .42);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .12);\n  transform: translateY(-2px);\n}\n.btn-t[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--blue);\n  border: 1.5px solid #cfe0fb;\n}\n.btn-t[_ngcontent-%COMP%]:hover {\n  background: var(--blue);\n  color: #fff;\n  border-color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  transition: transform .25s;\n}\n.btn[_ngcontent-%COMP%]:hover   .ar[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 13px;\n  border-radius: 10px;\n}\n.utility[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b9c9e2;\n  transition: color .2s;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.uwa[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.uwa[_ngcontent-%COMP%]:hover {\n  color: #8ff0b0 !important;\n}\n.promo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n  position: relative;\n  z-index: 51;\n}\n.promo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ffd9ac;\n}\n.promo[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\nheader.xh-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, .86);\n  backdrop-filter: saturate(180%) blur(14px);\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\n  border-bottom: 1px solid #E7EBF3;\n  transition: box-shadow .35s, background .35s;\n}\nheader.xh-header.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 30px -18px rgba(4, 30, 66, .34);\n  background: rgba(255, 255, 255, .95);\n}\n.xh-nav-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 80px;\n  transition: height .35s var(--ease);\n}\nheader.xh-header.scrolled[_ngcontent-%COMP%]   .xh-nav-wrap[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 74px;\n  width: auto;\n  transition: height .35s var(--ease);\n}\nheader.xh-header.scrolled[_ngcontent-%COMP%]   .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 58px;\n}\n.xh-main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  list-style: none;\n  margin-left: 6px;\n}\n.xh-menu-link[_ngcontent-%COMP%] {\n  font: 600 13px/13px var(--body);\n  color: #263552;\n  background: none;\n  border: 0;\n  padding: 26px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  position: relative;\n  transition: color .2s;\n}\n.xh-menu-link[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  bottom: 20px;\n  height: 2px;\n  width: 0;\n  background: var(--blue);\n  transition: width .3s var(--ease);\n}\n.xh-menu-link[_ngcontent-%COMP%]:hover, \n.xh-menu-link.is-active[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.xh-menu-link[_ngcontent-%COMP%]:hover:after {\n  width: calc(100% - 20px);\n}\n.xh-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.xh-icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  display: grid;\n  place-items: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: .2s var(--ease);\n}\n.xh-icon-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: #fff;\n  border: 1.5px solid var(--line);\n  border-radius: 12px;\n  width: 44px;\n  height: 44px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #3B63E8;\n  color: #fff;\n  padding: 48px 0 28px;\n  font-size: 14px;\n}\n.nf-top[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.nf-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.nf-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  background: #fff;\n  padding: 5px 8px;\n  border-radius: 8px;\n}\n.nf-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #DCE6FF;\n  line-height: 1.5;\n}\n.nf-tag[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #BBD0FF;\n  font-style: normal;\n  font-size: 11px;\n}\n.nf-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #E4ECFF;\n  margin: 0 0 20px;\n  max-width: 94ch;\n  text-align: justify;\n  text-align-last: left;\n}\n.nf-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.nfs[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  transition: .25s var(--ease);\n}\n.nfs[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.nfs[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.nf-rows[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 22px;\n  margin-bottom: 6px;\n}\n.nf-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: baseline;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.nf-rlbl[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 15px;\n  color: #fff;\n  min-width: 130px;\n  flex: none;\n  margin: 0;\n}\n.nf-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  flex: 1;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #E4ECFF;\n  font-size: 14px;\n  transition: color .2s, padding .2s;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: "\\203a";\n  color: #BBD0FF;\n  margin-right: 6px;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  padding-left: 3px;\n}\n.nf-cert-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin: 16px 0;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(255, 255, 255, .1);\n  padding-top: 16px;\n}\n.nf-isos[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-iso[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #2E4FC4;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 62px;\n  color: #fff;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n}\n.nf-iso[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 9px;\n  letter-spacing: .05em;\n  color: #BBD0FF;\n}\n.nf-pays[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-pay[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1C2A3A;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 6px;\n}\n.nf-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 12.5px;\n  color: #C3D3FF;\n}\n.wa-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 22px;\n  bottom: 22px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #25D366;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 12px 30px rgba(37, 211, 102, .4);\n  z-index: 120;\n  transition: transform .25s var(--ease);\n}\n.wa-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n.wa-fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 22px;\n  bottom: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 10px 26px rgba(4, 30, 66, .14);\n  z-index: 120;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .25s, transform .25s var(--ease);\n}\n.back-to-top.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 0 78px;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      1100px 640px at 82% 4%,\n      #eaf2ff 0%,\n      transparent 58%),\n    linear-gradient(\n      180deg,\n      #fbfcff,\n      #ffffff);\n}\n.crumb[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n}\n.crumb[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: #b9c6dd;\n}\n.crumb[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n  gap: 44px;\n  align-items: center;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(34px, 4.8vw, 56px);\n  font-weight: 800;\n  margin: 20px 0 16px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--blue),\n      #4f93ff);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .serif[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-weight: 400;\n  font-size: 1.04em;\n}\n.hero[_ngcontent-%COMP%]   p.lead[_ngcontent-%COMP%] {\n  font-size: 17.5px;\n  color: var(--slate);\n  max-width: 520px;\n  margin-bottom: 22px;\n}\n.pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--navy);\n  background: #fff;\n  border: 1px solid var(--line);\n  padding: 7px 13px;\n  border-radius: 99px;\n  box-shadow: var(--shadow-s);\n}\n.pill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: var(--blue);\n}\n.pill.hi[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff4e6,\n      #fff);\n  border-color: #ffd9a8;\n  color: var(--orange-d);\n}\n.pill.hi[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 22px;\n  flex-wrap: wrap;\n}\n.chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--navy);\n}\n.chip[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  background: var(--blue-soft);\n  color: var(--blue);\n  flex-shrink: 0;\n}\n.chip[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.showcase[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sc-win[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.sc-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--line);\n  background: var(--ice);\n}\n.sc-bar[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.sc-bar[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  display: block;\n}\n.sc-bar[_ngcontent-%COMP%]   .crumbs[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  color: var(--slate);\n}\n.sc-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--line);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.sc-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sc-tab[_ngcontent-%COMP%] {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .03em;\n  color: var(--slate);\n  background: none;\n  border: 0;\n  padding: 6px 10px;\n  border-radius: 7px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: .2s;\n}\n.sc-tab[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n  background: var(--blue-soft);\n}\n.sc-tab.on[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #fff;\n}\n.sc-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.sc-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.sc-h[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 13.5px;\n  color: var(--navy);\n}\n.sc-h[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  color: var(--green-d);\n  background: #E4F7EC;\n  padding: 4px 10px;\n  border-radius: 99px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.sc-h[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--green);\n  animation: _ngcontent-%COMP%_blink 1.4s infinite;\n  display: block;\n}\n.sc-plats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.sc-plat[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 8px;\n  text-align: center;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.sc-plat[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  transform: translateY(-2px);\n}\n.sc-plat[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  margin: 0 auto 6px;\n  display: grid;\n  place-items: center;\n  font: 700 11px var(--disp);\n  color: #fff;\n}\n.sc-plat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 16px var(--disp);\n  color: var(--navy);\n  line-height: 1.1;\n}\n.sc-plat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font: 500 8.5px var(--mono);\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-top: 3px;\n}\n.sc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: .8fr 1.2fr;\n  gap: 12px;\n}\n.sc-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 14px;\n  background: #fff;\n}\n.sc-card[_ngcontent-%COMP%]   .t[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 10px;\n}\n.sc-donut[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sc-donut[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 128px;\n}\n.sc-donut[_ngcontent-%COMP%]   .dv[_ngcontent-%COMP%] {\n  margin-top: -72px;\n  margin-bottom: 34px;\n  text-align: center;\n}\n.sc-donut[_ngcontent-%COMP%]   .dv[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 800 22px var(--disp);\n  color: var(--green-d);\n  display: block;\n  line-height: 1;\n}\n.sc-donut[_ngcontent-%COMP%]   .dv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 9px var(--mono);\n  color: var(--slate);\n}\n.sc-rows[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 0;\n  border-bottom: 1px dashed var(--line);\n  font-size: 11.5px;\n}\n.sc-rows[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.sc-rows[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-weight: 600;\n}\n.sc-rows[_ngcontent-%COMP%]   .st[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  border-radius: 99px;\n  padding: 3px 9px;\n}\n.st.ok[_ngcontent-%COMP%] {\n  background: #E4F7EC;\n  color: var(--green-d);\n}\n.st.warn[_ngcontent-%COMP%] {\n  background: #FFF3E0;\n  color: var(--orange-d);\n}\n.st.bad[_ngcontent-%COMP%] {\n  background: #FDECEC;\n  color: var(--red);\n}\n.sc-foot[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  margin-top: 12px;\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.sc-foot[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n  flex: 1;\n  min-width: 80px;\n}\n.sc-foot[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 16px var(--disp);\n  color: var(--navy);\n  line-height: 1.1;\n}\n.sc-foot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 8.5px var(--mono);\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.sc-float[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -10px;\n  top: -18px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 12px 16px;\n  box-shadow: var(--shadow-m);\n  z-index: 5;\n  animation: _ngcontent-%COMP%_scfloat 7s ease-in-out infinite;\n  text-align: center;\n}\n.sc-float[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 22px var(--disp);\n  color: var(--navy);\n  line-height: 1;\n}\n.sc-float[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 9.5px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.sc-float[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%] {\n  color: var(--green-d);\n  font-size: 11px;\n  font-weight: 600;\n}\nsection[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pad[_ngcontent-%COMP%] {\n  padding: 42px 0 42px 0;\n}\n.pad-ice[_ngcontent-%COMP%] {\n  background: var(--ice);\n}\n.pad-navy[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      var(--navy),\n      #0C2C5C 70%);\n  color: #fff;\n}\n.head[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 1000px;\n  margin: 0 auto 46px;\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3.4vw, 38px);\n  margin-bottom: 14px;\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .hl[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--blue);\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .hl[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  height: 8px;\n  background: rgba(255, 140, 26, .28);\n  z-index: -1;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n.head.in[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .hl[_ngcontent-%COMP%]:after {\n  animation: _ngcontent-%COMP%_hlsweep .8s .3s var(--ease) forwards;\n}\n.head[_ngcontent-%COMP%]   .u[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 4px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  margin: 0 auto 18px;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 730px;\n  margin-right: auto;\n  margin-left: auto;\n  color: var(--slate);\n  font-size: 16px;\n}\n.head.left[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 0 0 40px;\n}\n.head.left[_ngcontent-%COMP%]   .u[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n}\n.head.left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.pad-navy[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.pad-navy[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c7d5ec;\n}\n.kicker[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 10px;\n  display: block;\n}\n.pad-navy[_ngcontent-%COMP%]   .kicker[_ngcontent-%COMP%] {\n  color: #7FB2FF;\n}\n.pp-trust[_ngcontent-%COMP%] {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.pillars[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n.pillar[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 22px;\n  background: #fff;\n  position: relative;\n  overflow: hidden;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n}\n.pillar[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform .4s var(--ease);\n}\n.pillar[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.pillar[_ngcontent-%COMP%]:hover:before {\n  transform: scaleX(1);\n}\n.pillar[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 15px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 16px;\n  transition: .3s var(--ease);\n}\n.pillar[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.pillar[_ngcontent-%COMP%]:hover   .pi[_ngcontent-%COMP%] {\n  transform: rotate(-6deg) scale(1.06);\n}\n.pillar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin-bottom: 8px;\n}\n.pillar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.3px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.mods[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.mod[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px 22px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n  position: relative;\n  overflow: hidden;\n}\n.mod[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform .4s var(--ease);\n}\n.mod[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.mod[_ngcontent-%COMP%]:hover:before {\n  transform: scaleX(1);\n}\n.mod.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.mod.show[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadein .45s var(--ease) both;\n}\n.mod-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  margin-bottom: 12px;\n}\n.mod-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: grid;\n  place-items: center;\n  transition: .3s var(--ease);\n}\n.mod-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.mod[_ngcontent-%COMP%]:hover   .mod-ic[_ngcontent-%COMP%] {\n  transform: rotate(-6deg) scale(1.06);\n}\n.mod-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16.5px;\n  margin-bottom: 3px;\n}\n.mod-h[_ngcontent-%COMP%]   .cat[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--blue);\n  background: var(--blue-soft);\n  border-radius: 99px;\n  padding: 3px 9px;\n  display: inline-block;\n}\n.mod[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 13.3px;\n  color: var(--slate);\n  line-height: 1.6;\n  margin-bottom: 14px;\n}\n.mod[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 16px;\n  flex: 1;\n}\n.mod[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.55;\n  padding: 5px 0 5px 20px;\n  position: relative;\n}\n.mod[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 11px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 2px solid var(--blue);\n  background: #fff;\n}\n.mod-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n  padding-top: 12px;\n  border-top: 1px dashed var(--line);\n}\n.mod-foot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  letter-spacing: .04em;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 4px 10px;\n}\n.i-blue[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.i-purple[_ngcontent-%COMP%] {\n  background: #F1EBFE;\n  color: var(--purple);\n}\n.i-green[_ngcontent-%COMP%] {\n  background: #E4F7EC;\n  color: var(--green-d);\n}\n.i-amber[_ngcontent-%COMP%] {\n  background: #FFF3E0;\n  color: var(--orange-d);\n}\n.i-red[_ngcontent-%COMP%] {\n  background: #FDECEC;\n  color: var(--red);\n}\n.i-teal[_ngcontent-%COMP%] {\n  background: #E2F6F5;\n  color: var(--teal);\n}\n.i-slate[_ngcontent-%COMP%] {\n  background: #EAEEF6;\n  color: #3B4A63;\n}\n.ptabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.ptab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  font: 600 13.5px var(--body);\n  color: var(--slate);\n  background: rgba(255, 255, 255, .06);\n  border: 1px solid rgba(194, 216, 247, .22);\n  padding: 11px 20px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .22s var(--ease);\n}\n.ptab[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n  transform: translateY(-2px);\n}\n.ptab.on[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #fff;\n  color: var(--navy);\n}\n.ptab[_ngcontent-%COMP%]   .pm[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  display: grid;\n  place-items: center;\n  font: 700 9px var(--disp);\n  color: #fff;\n  flex: none;\n}\n.ppanel[_ngcontent-%COMP%] {\n  display: none;\n}\n.ppanel.on[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_fadein .45s var(--ease) both;\n}\n.pcell[_ngcontent-%COMP%] {\n  border: 1px solid rgba(194, 216, 247, .22);\n  border-radius: 16px;\n  padding: 24px 22px;\n  background: rgba(255, 255, 255, .05);\n  transition: .28s var(--ease);\n}\n.pcell[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n  transform: translateY(-4px);\n}\n.pcell[_ngcontent-%COMP%]   .v[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #7FB2FF;\n  margin-bottom: 9px;\n  display: block;\n}\n.pcell[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.pcell[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #a9c2e8;\n  line-height: 1.6;\n}\n.pnote[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.spots[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.spot[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 24px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  transition: transform .28s var(--ease), box-shadow .28s;\n}\n.spot[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n}\n.spot[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin-bottom: 9px;\n}\n.spot[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 13.3px;\n  color: var(--slate);\n  line-height: 1.6;\n  margin-bottom: 14px;\n}\n.spot[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 18px;\n  flex: 1;\n}\n.spot[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.55;\n  padding: 5px 0 5px 22px;\n  position: relative;\n}\n.spot[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: var(--green-d);\n  font-weight: 700;\n  font-size: 11px;\n}\n.spot[_ngcontent-%COMP%]   .proof[_ngcontent-%COMP%] {\n  font: 700 13px var(--disp);\n  color: var(--navy);\n  background:\n    linear-gradient(\n      135deg,\n      #FFF4E6,\n      #fff);\n  border: 1px solid #ffd9a8;\n  border-radius: 12px;\n  padding: 11px 14px;\n  text-align: center;\n}\n.teams[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.team[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 20px;\n  background: #fff;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n}\n.team[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.team[_ngcontent-%COMP%]   .tg[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--purple);\n  background: #F1EBFE;\n  border-radius: 99px;\n  padding: 4px 10px;\n  display: inline-block;\n  margin-bottom: 11px;\n}\n.team[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: var(--navy);\n  margin-bottom: 7px;\n}\n.team[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.uses[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.uc[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 20px;\n  background: var(--ice);\n  transition: .28s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.uc[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n  background: #fff;\n}\n.uc[_ngcontent-%COMP%]   .ui[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 13px;\n  font-size: 19px;\n}\n.uc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15.5px;\n  color: var(--navy);\n  margin-bottom: 9px;\n}\n.uc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  flex: 1;\n}\n.uc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 4px 0 4px 18px;\n  position: relative;\n}\n.uc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--blue);\n}\n.mig[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  gap: 44px;\n  align-items: center;\n}\n.mig-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.mig-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.mig-item[_ngcontent-%COMP%]   .n[_ngcontent-%COMP%] {\n  flex: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font: 800 15px var(--disp);\n  transition: .3s var(--ease);\n}\n.mig-item[_ngcontent-%COMP%]:hover   .n[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  transform: translateY(-3px);\n}\n.mig-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.mig-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.3px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.mig-quote[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 30px;\n  background: #fff;\n  box-shadow: var(--shadow-s);\n}\n.mig-quote[_ngcontent-%COMP%]   .q[_ngcontent-%COMP%] {\n  font: 400 19px/1.5 var(--disp);\n  color: var(--navy);\n  letter-spacing: -.01em;\n  margin-bottom: 16px;\n}\n.mig-quote[_ngcontent-%COMP%]   .who[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  font-family: var(--mono);\n}\n.mig-quote[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  height: 4px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  width: 54px;\n  margin-bottom: 18px;\n}\n.why[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.wc[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 20px;\n  background: #fff;\n  transition: .28s var(--ease);\n}\n.wc[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.wc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: var(--navy);\n  margin-bottom: 10px;\n}\n.wc[_ngcontent-%COMP%]   .l[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--slate);\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 3px 0;\n}\n.wc[_ngcontent-%COMP%]   .l[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  flex: none;\n  margin-top: 3px;\n  color: var(--blue);\n}\n.results[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.rc[_ngcontent-%COMP%] {\n  border: 1px solid rgba(194, 216, 247, .22);\n  border-radius: 16px;\n  padding: 26px 20px;\n  text-align: center;\n  background: rgba(255, 255, 255, .05);\n  transition: .28s var(--ease);\n}\n.rc[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n  transform: translateY(-4px);\n}\n.rc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 34px var(--disp);\n  color: #fff;\n  line-height: 1;\n  letter-spacing: -.03em;\n}\n.rc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 9px;\n  font-size: 12.8px;\n  color: #a9c2e8;\n  line-height: 1.5;\n}\n.marq-wrap[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  margin-top: 8px;\n}\n.marq-wrap[_ngcontent-%COMP%]:before, \n.marq-wrap[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 110px;\n  z-index: 2;\n  pointer-events: none;\n}\n.marq-wrap[_ngcontent-%COMP%]:before {\n  left: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #fff,\n      transparent);\n}\n.marq-wrap[_ngcontent-%COMP%]:after {\n  right: 0;\n  background:\n    linear-gradient(\n      270deg,\n      #fff,\n      transparent);\n}\n.track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  width: max-content;\n  animation: _ngcontent-%COMP%_marq 40s linear infinite;\n}\n.marq-wrap[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n.ilogo[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-width: 152px;\n  height: 62px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 13.5px;\n  color: var(--navy);\n  box-shadow: var(--shadow-s);\n  transition: .25s var(--ease);\n  padding: 0 16px;\n}\n.ilogo[_ngcontent-%COMP%]:hover {\n  border-color: #c9dcfb;\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-m);\n  color: var(--blue);\n}\n.ilogo[_ngcontent-%COMP%]   .dotmark[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.ptoggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 28px;\n}\n.ptoggle[_ngcontent-%COMP%]   .sw[_ngcontent-%COMP%] {\n  display: inline-flex;\n  border: 1.5px solid var(--line);\n  border-radius: 99px;\n  padding: 4px;\n  background: #fff;\n}\n.ptoggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  font: 600 13px var(--body);\n  color: var(--slate);\n  padding: 9px 22px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .22s var(--ease);\n}\n.ptoggle[_ngcontent-%COMP%]   button.on[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #fff;\n}\n.ptoggle[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  letter-spacing: .06em;\n  color: var(--green-d);\n  background: #E4F7EC;\n  border-radius: 99px;\n  padding: 3px 8px;\n  margin-left: 7px;\n}\n.price[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  align-items: stretch;\n  min-width: 0;\n  margin-bottom: 0;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  white-space: normal;\n}\n.tier[_ngcontent-%COMP%] {\n  min-width: 0;\n  height: 100%;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 28px 24px;\n  box-shadow: var(--shadow-s);\n  position: relative;\n  transition: .3s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.tier[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n  border-color: #c9dcfb;\n}\n.tier.pop[_ngcontent-%COMP%] {\n  border: 2px solid var(--blue);\n  box-shadow: var(--shadow-m);\n  transform: translateY(-10px);\n}\n.tier.pop[_ngcontent-%COMP%]:hover {\n  transform: translateY(-16px);\n}\n.tier[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -13px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  font-family: var(--mono);\n  font-size: 10.5px;\n  font-weight: 600;\n  letter-spacing: .08em;\n  padding: 6px 16px;\n  border-radius: 99px;\n  box-shadow: 0 10px 22px -8px rgba(255, 140, 26, .8);\n}\n.tier[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 6px;\n  white-space: nowrap;\n}\n.tier[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 12.3px;\n  color: var(--slate);\n  margin-bottom: 18px;\n  line-height: 1.55;\n  min-height: 56px;\n}\n.tier[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n  min-height: 40px;\n  margin-bottom: 3px;\n}\n.tier[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 20px;\n  color: var(--navy);\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.tier[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 40px;\n  font-weight: 800;\n  color: var(--navy);\n  line-height: 1;\n}\n.tier[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9AA8BE;\n  font-weight: 500;\n  margin-bottom: 7px;\n}\n.tier[_ngcontent-%COMP%]   .amt.custom[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.tier[_ngcontent-%COMP%]   .per[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-bottom: 18px;\n}\n.tier[_ngcontent-%COMP%]   .inc[_ngcontent-%COMP%] {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .04em;\n  color: var(--slate);\n  margin-bottom: 10px;\n  display: block;\n}\n.tier[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  margin-bottom: 18px;\n  flex: 1;\n}\n.tier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 12.8px;\n  color: var(--ink);\n  line-height: 1.5;\n}\n.tier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #e4f7ec;\n  color: var(--green-d);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  margin-top: 2px;\n  transform: scale(0);\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_tickpop .4s var(--ease) forwards;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .06s;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .12s;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .18s;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .24s;\n}\n.tier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.tier[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.price-note[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: #8FA2BD;\n  margin-top: 24px;\n  line-height: 1.8;\n}\n.ctab[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  margin-top: 26px;\n  box-shadow: var(--shadow-s);\n}\n.ctab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 680px;\n}\n.ctab[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--ice);\n  font: 600 11px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n  text-align: left;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--line);\n  white-space: nowrap;\n}\n.ctab[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:not(:first-child) {\n  text-align: center;\n}\n.ctab[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--line);\n  font-size: 13px;\n  color: var(--slate);\n}\n.ctab[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.ctab[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: var(--navy);\n  font-weight: 500;\n}\n.ctab[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(:first-child) {\n  text-align: center;\n}\n.ctab[_ngcontent-%COMP%]   .grp[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--ice);\n  font: 600 10.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--navy);\n}\n.yes[_ngcontent-%COMP%] {\n  color: var(--green-d);\n  font-weight: 700;\n}\n.no[_ngcontent-%COMP%] {\n  color: #C8D3E3;\n}\n.tq[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 38px;\n  background: #fff;\n  box-shadow: var(--shadow-s);\n  max-width: 900px;\n  margin: 0 auto;\n  text-align: center;\n}\n.tq[_ngcontent-%COMP%]   .av[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--purple));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font: 700 20px var(--disp);\n}\n.tq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font: 400 19px/1.6 var(--disp);\n  color: var(--navy);\n  letter-spacing: -.01em;\n  margin-bottom: 18px;\n}\n.tq[_ngcontent-%COMP%]   .who[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n}\n.tq[_ngcontent-%COMP%]   .who[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-family: var(--disp);\n}\n.faqgrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.faq2[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  align-self: start;\n  transition: border-color .25s, box-shadow .25s;\n}\n.faq2.open[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.faq2-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: transform .3s, background .25s;\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-ic[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  background: var(--blue);\n  color: #fff;\n}\n.faq2-a[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s cubic-bezier(.4, 0, .2, 1);\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-a[_ngcontent-%COMP%] {\n  max-height: 460px;\n}\n.faq2-a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.68;\n}\n.contact[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 22px;\n}\n.ccard[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 28px;\n  background: var(--ice);\n}\n.ccard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 6px;\n}\n.ccard[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 18px;\n}\n.clist[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.clist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 13px 16px;\n  transition: .2s var(--ease);\n}\n.clist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .1);\n  transform: translateY(-2px);\n}\n.clist[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%] {\n  flex: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 15px;\n}\n.clist[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--navy);\n}\n.clist[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.cform[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.cform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font: 600 11.5px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 5px;\n}\n.cform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.cform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.cform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font: 400 14px var(--body);\n  color: var(--ink);\n  background: #fff;\n  transition: .15s;\n}\n.cform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.cform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.cform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.cform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 84px;\n  resize: vertical;\n}\n.cform[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.formnote[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate);\n  text-align: center;\n}\n.ctaband[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy) 0%,\n      #123776 60%,\n      var(--blue) 100%);\n  border-radius: 22px;\n  padding: 34px 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.ctaband[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .5;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  animation: _ngcontent-%COMP%_gridmove 30s linear infinite;\n}\n.ctaband[_ngcontent-%COMP%]   .glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 140, 26, .4),\n      transparent 65%);\n  filter: blur(30px);\n  right: -40px;\n  top: -60px;\n  animation: _ngcontent-%COMP%_aflow2 12s ease-in-out infinite;\n}\n.ctaband[_ngcontent-%COMP%]   .ct-l[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  z-index: 2;\n}\n.ctaband[_ngcontent-%COMP%]   .cbico[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, .12);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.ctaband[_ngcontent-%COMP%]   .cbico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  color: #fff;\n}\n.ctaband[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 23px;\n  margin-bottom: 4px;\n}\n.ctaband[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .75);\n  font-size: 14px;\n  max-width: 460px;\n}\n.ctaband[_ngcontent-%COMP%]   .ct-r[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n  flex-wrap: wrap;\n}\n.pp-proof[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 26px;\n}\n.pp-proof[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 12px var(--body);\n  color: var(--slate);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  background: #fff;\n}\n@media (min-width: 861px) {\n  .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n}\n@media (max-width: 1100px) {\n  .xh-main-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mods[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pillars[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .spots[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .teams[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .uses[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .why[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .price[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .results[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1024px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 54px;\n  }\n  .mig[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .sc-plats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .ppanel.on[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 860px) {\n  .price[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 440px;\n    margin: 0 auto;\n  }\n  .tier.pop[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .tier[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .ctaband[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .faqgrid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sc-float[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 12px;\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .pad[_ngcontent-%COMP%] {\n    padding: 30px 0 30px 0;\n  }\n  .mods[_ngcontent-%COMP%], \n   .pillars[_ngcontent-%COMP%], \n   .spots[_ngcontent-%COMP%], \n   .teams[_ngcontent-%COMP%], \n   .uses[_ngcontent-%COMP%], \n   .why[_ngcontent-%COMP%], \n   .results[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sc-plats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 40px 0 60px;\n  }\n  .hero-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cform[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .tq[_ngcontent-%COMP%] {\n    padding: 26px 20px;\n  }\n  .tq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .nf-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .xh-nav-wrap[_ngcontent-%COMP%] {\n    height: 64px;\n    padding: 0 14px;\n    gap: 10px;\n  }\n  .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 52px;\n  }\n  header.xh-header.scrolled[_ngcontent-%COMP%]   .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 46px;\n  }\n  .xh-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-icon-btn[_ngcontent-%COMP%], \n   .burger[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n  }\n  .promo[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n  .mig-quote[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n  .rv[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: none;\n  }\n  .tier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n    transform: none;\n  }\n}\n[_nghost-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n.rv[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n}\n.mdm-original-hero[_ngcontent-%COMP%]     .ppage > :not(.pp-hero):not(.pp-trust) {\n  display: none;\n}\n.mdm-blog-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.mdm-blog-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: var(--shadow-s);\n}\n.mdm-blog-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: var(--blue);\n  background: var(--blue-soft);\n  font: 600 12px var(--mono);\n  padding: 5px 9px;\n  border-radius: 999px;\n  margin-bottom: 14px;\n}\n.mdm-blog-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n.mdm-blog-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 14px;\n  margin-bottom: 18px;\n}\n.mdm-blog-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-weight: 700;\n}\n.mdm-blog-action[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n}\n.mdm-buddha-section[_ngcontent-%COMP%] {\n  padding: 26px 0 41px 0;\n  background: #fff;\n}\n.mdm-buddha[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 112px;\n  align-items: center;\n  gap: 28px;\n  min-height: 194px;\n  padding: 30px 28px 30px 36px;\n  border-radius: 17px;\n  background:\n    linear-gradient(\n      105deg,\n      #2168d8,\n      #0c469f);\n  color: #fff;\n  box-shadow: 0 18px 45px -28px rgba(4, 30, 66, .55);\n}\n.mdm-buddha-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.mdm-buddha[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #fff;\n  font-size: 22px;\n  letter-spacing: -.025em;\n}\n.mdm-buddha[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #dceaff;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.mdm-buddha-mark[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: 104px;\n  height: 104px;\n  border-radius: 50%;\n  transition: transform .2s ease, filter .2s ease;\n}\n.mdm-buddha-mark[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, .22));\n}\n.mdm-buddha-mark[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 4px;\n}\n.mdm-buddha-mark[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.mdm-buddha-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 30px;\n}\n.mdm-buddha-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-height: 45px;\n  padding: 10px 20px;\n  border-radius: 9px;\n  font-size: 13px;\n}\n.mdm-buddha-actions[_ngcontent-%COMP%]   button.btn-outline[_ngcontent-%COMP%] {\n  font: 600 13px var(--body);\n}\n.mdm-buddha-proof[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 21px;\n}\n.mdm-buddha-proof[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: #fff;\n  color: var(--slate);\n  font-size: 11.5px;\n  font-weight: 600;\n  line-height: 1.4;\n}\n@media (max-width: 800px) {\n  .mdm-blog-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .mdm-buddha[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 28px 22px;\n  }\n  .mdm-buddha-mark[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n  }\n  .mdm-buddha-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 145px;\n  }\n  .mdm-buddha-proof[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=cloud-mdm.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudMdmPage, [{
    type: Component,
    args: [{ selector: "xh-cloud-mdm-page", standalone: true, imports: [InsightsSectionComponent, ProductPageComponent, RouterLink], host: { class: "cloud-mdm-page" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Keep the standard XcellHost product hero and trust strip. -->\r
<xh-product-page class="mdm-original-hero" />\r
\r
<!-- ============ FOUR PILLARS ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">One platform</span><h2>Device, security, identity and <span class="hl">education &mdash; unified</span></h2><div class="u"></div>\r
      <p>XcellHost Cloud MDM brings device management, endpoint security, access control and K-12 tooling into a single console &mdash; zero-touch deployment, real-time visibility and compliance.</p></div>\r
    <div class="pillars">\r
      <article class="pillar rv" data-d="1">\r
        <span class="pi i-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="14" height="10" rx="2"/><rect x="16" y="9" width="6" height="11" rx="1.5"/><path d="M6 18h6"/></svg></span>\r
        <h3>Cross-platform device management</h3>\r
        <p>Deploy, monitor and manage iOS, Android, Windows, macOS and Linux with zero-touch provisioning, real-time analytics, remote maintenance, policy enforcement, configuration profiles and a Command Center.</p>\r
      </article>\r
      <article class="pillar rv" data-d="2">\r
        <span class="pi i-red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg></span>\r
        <h3>Advanced endpoint security</h3>\r
        <p>Protect every device with patch and vulnerability management, compliance automation and full EDR coverage across macOS and Windows &mdash; block threats, auto-remediate risks and enforce a zero-trust posture.</p>\r
      </article>\r
      <article class="pillar rv" data-d="3">\r
        <span class="pi i-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round"/><circle cx="12" cy="15.5" r="1.5"/></svg></span>\r
        <h3>Smart identity &amp; access control</h3>\r
        <p>SSO, MFA, conditional access and passwordless workflows deliver frictionless logins and hardened identity protection across cloud apps, VPNs and on-premise resources.</p>\r
      </article>\r
      <article class="pillar rv" data-d="4">\r
        <span class="pi i-amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 9L12 4 2 9l10 5 10-5z"/><path d="M6 11.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-5.5"/></svg></span>\r
        <h3>Purpose-built education suite</h3>\r
        <p>Manage classes, students, staff, screen-time limits, reports and device usage from one portal &mdash; improving safety, engagement and outcomes for schools and campuses.</p>\r
      </article>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ MODULE EXPLORER (dynamic) ============ -->\r
<section class="pad pad-ice" id="modules">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Explore the platform</span><h2>Fourteen modules. <span class="hl">One console.</span></h2><div class="u"></div>\r
      <p>Every module ships in the platform, not as a bolt-on.</p></div>\r
\r
    <div class="mods" id="modGrid">\r
\r
      <article class="mod rv" data-cat="device" data-d="1">\r
        <div class="mod-h"><span class="mod-ic i-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="14" height="10" rx="2"/><rect x="16" y="9" width="6" height="11" rx="1.5"/><path d="M6 18h6"/></svg></span>\r
          <div><h3>Unified endpoint management</h3><span class="cat">Device</span></div></div>\r
        <p>Every device, every OS, one platform &mdash; the backbone the other thirteen modules plug into.</p>\r
        <ul><li>Manage Windows, macOS, iOS, Android and Linux side by side</li><li>Deploy apps, updates and policies from a single console</li><li>Device inventory with static and dynamic groups</li><li>Full visibility and control wherever the device sits</li></ul>\r
        <div class="mod-foot"><span>5 platforms</span><span>Dynamic groups</span><span>Single console</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="device" data-d="2">\r
        <div class="mod-h"><span class="mod-ic i-slate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 3a4 4 0 01-3 3.9M12 7c-4 0-7 3-7 7 0 4 3 7 5 7 1.2 0 1.6-.7 2-.7s.8.7 2 .7c2 0 5-3 5-7 0-4-3-7-7-7z"/></svg></span>\r
          <div><h3>Apple device management</h3><span class="cat">Device</span></div></div>\r
        <p>Zero-touch enrolment through Apple Business Manager and Apple School Manager, with full macOS and iOS control.</p>\r
        <ul><li>ABM / ASM zero-touch enrolment &mdash; devices work-ready on unbox</li><li>Silent app installs, enforced Wi-Fi and VPN profiles</li><li>FileVault, Gatekeeper and macOS EDR enforcement</li><li>Jailbreak detection, remote lock, wipe and kiosk mode</li></ul>\r
        <div class="mod-foot"><span>ABM / ASM</span><span>FileVault</span><span>Kiosk mode</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="device" data-d="3">\r
        <div class="mod-h"><span class="mod-ic i-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5.5l8-1.2v7.2H3zM13 4l8-1.2v8.7h-8zM3 13.5h8v7.2l-8-1.2zM13 13.5h8v8.7L13 21z"/></svg></span>\r
          <div><h3>Windows device management</h3><span class="cat">Device</span></div></div>\r
        <p>Harden, patch and automate the Windows estate without a domain controller in every branch.</p>\r
        <ul><li>BitLocker, firewall policy and Windows EDR enforcement</li><li>Autopilot-style zero-touch provisioning</li><li>Patch compliance and threat dashboards</li><li>Vulnerability remediation and remote command execution</li></ul>\r
        <div class="mod-foot"><span>BitLocker</span><span>EDR</span><span>Remote commands</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="device" data-d="4">\r
        <div class="mod-h"><span class="mod-ic i-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="8" width="12" height="11" rx="2"/><path d="M8 8L6.5 5M16 8l1.5-3M9.5 12h.01M14.5 12h.01"/></svg></span>\r
          <div><h3>Android device management</h3><span class="cat">Device</span></div></div>\r
        <p>Android Enterprise done properly &mdash; work profiles, fully managed devices and dedicated kiosk fleets.</p>\r
        <ul><li>Isolate corporate data in Work Profiles with auto-encryption</li><li>App allow-listing and silent deployment</li><li>Real-time compliance alerts with assisted remediation</li><li>Instant remote wipe of the work profile or whole device</li></ul>\r
        <div class="mod-foot"><span>Work Profile</span><span>Allow-listing</span><span>Remote wipe</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="device" data-d="5">\r
        <div class="mod-h"><span class="mod-ic i-amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3c-2 0-3 2-3 4.5 0 2-2 3.5-2 6 0 3 2 7.5 5 7.5s5-4.5 5-7.5c0-2.5-2-4-2-6C15 5 14 3 12 3z"/><path d="M10 8h.01M14 8h.01"/></svg></span>\r
          <div><h3>Linux device management</h3><span class="cat">Device</span></div></div>\r
        <p>Linux workstations and servers managed alongside everything else &mdash; no second-class OS.</p>\r
        <ul><li>Agent-based enrolment for Ubuntu, RHEL and Debian derivatives</li><li>Package patching and configuration drift detection</li><li>Disk encryption and SSH hardening policies</li><li>Remote script execution through the Command Center</li></ul>\r
        <div class="mod-foot"><span>Ubuntu / RHEL</span><span>Drift detection</span><span>Scripting</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="device" data-d="1">\r
        <div class="mod-h"><span class="mod-ic i-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M5 8l7-5 7 5" stroke-linecap="round"/><rect x="4" y="14" width="16" height="7" rx="2"/></svg></span>\r
          <div><h3>Zero-touch onboarding</h3><span class="cat">Device</span></div></div>\r
        <p>Pre-configure devices remotely so they are work-ready the moment a user powers them on.</p>\r
        <ul><li>Set up 100+ devices in minutes, no imaging bench required</li><li>Role-based templates apply apps, Wi-Fi, VPN and policy on first boot</li><li>Day-zero readiness for new hires with no IT ticket</li><li>Ship straight to the employee &mdash; office visit optional</li></ul>\r
        <div class="mod-foot"><span>Bulk enrol</span><span>Role templates</span><span>Day-zero</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="security" data-d="2">\r
        <div class="mod-h"><span class="mod-ic i-red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M12 8v4M12 15h.01" stroke-linecap="round"/></svg></span>\r
          <div><h3>Patch &amp; vulnerability management</h3><span class="cat">Security</span></div></div>\r
        <p>Silent patching that closes vulnerabilities without interrupting the person using the machine.</p>\r
        <ul><li>OS and third-party application patching across all five platforms</li><li>Vulnerability centre with severity ranking and remediation owner</li><li>Maintenance windows and staged rollout rings</li><li>Patch compliance reporting for auditors</li></ul>\r
        <div class="mod-foot"><span>OS + 3rd party</span><span>Rollout rings</span><span>CVE tracking</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="security" data-d="3">\r
        <div class="mod-h"><span class="mod-ic i-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l2 2 4-4" stroke-linecap="round"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg></span>\r
          <div><h3>Compliance automation</h3><span class="cat">Security</span></div></div>\r
        <p>Prebuilt policy packs that enforce a standard in one click, then keep proving it stays enforced.</p>\r
        <ul><li>Templates for ISO 27001, SOC 2, HIPAA, GDPR and CIS benchmarks</li><li>Automated remediation when a device drifts out of policy</li><li>Access audits and violation alerts routed to an owner</li><li>Evidence export for audit &mdash; no manual screenshots</li></ul>\r
        <div class="mod-foot"><span>ISO / SOC 2 / CIS</span><span>Auto-remediate</span><span>Audit export</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="security" data-d="4">\r
        <div class="mod-h"><span class="mod-ic i-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/><path d="M3 12h3M18 12h3"/></svg></span>\r
          <div><h3>Conditional access</h3><span class="cat">Security</span></div></div>\r
        <p>Access decided at the moment of request, based on who is asking, from where and on what.</p>\r
        <ul><li>Policies keyed to role, location, device health and risk score</li><li>Block or step-up authentication for non-compliant devices</li><li>Context-aware access for SaaS and internal applications</li><li>Auto-lock devices on outdated OS or abnormal location</li></ul>\r
        <div class="mod-foot"><span>Risk-based</span><span>Step-up auth</span><span>SaaS + internal</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="security" data-d="5">\r
        <div class="mod-h"><span class="mod-ic i-teal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><circle cx="12" cy="11" r="2.5"/><path d="M12 13.5V16"/></svg></span>\r
          <div><h3>Device Zero Trust</h3><span class="cat">Security</span></div></div>\r
        <p>Never trust, always verify &mdash; every device proves its posture before it reaches anything.</p>\r
        <ul><li>Device login controls for macOS and Windows</li><li>Certificate-based Wi-Fi and VPN access via Cloud RADIUS</li><li>Continuous posture checks, not one-time enrolment trust</li><li>Data loss prevention on unauthorised apps and services</li></ul>\r
        <div class="mod-foot"><span>Cloud RADIUS</span><span>Posture checks</span><span>DLP</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="security" data-d="1">\r
        <div class="mod-h"><span class="mod-ic i-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round"/><path d="M12 14v3" stroke-linecap="round"/></svg></span>\r
          <div><h3>MFA configuration</h3><span class="cat">Security</span></div></div>\r
        <p>Platform-wide multi-factor authentication configured centrally, not app by app.</p>\r
        <ul><li>Biometrics, OTP, push and certificate-based factors</li><li>SSO across cloud apps with one identity</li><li>Enforcement rules by role, team or device health</li><li>Passwordless workflows where the platform supports them</li></ul>\r
        <div class="mod-foot"><span>SSO + MFA</span><span>Passwordless</span><span>Per-role rules</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="visibility" data-d="2">\r
        <div class="mod-h"><span class="mod-ic i-amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V7z"/><path d="M14 2v5h5M9 13h6M9 17h4" stroke-linecap="round"/></svg></span>\r
          <div><h3>Policy management</h3><span class="cat">Visibility</span></div></div>\r
        <p>Write a policy once by role, team or location and let the fleet stay consistent on its own.</p>\r
        <ul><li>Create policies by role, team, site or device group</li><li>Instantly push settings and apps to devices or groups</li><li>Policies re-apply automatically as roles and teams change</li><li>Configuration profiles with drift detection built in</li></ul>\r
        <div class="mod-foot"><span>Role-based</span><span>Auto re-apply</span><span>Profiles</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="visibility" data-d="3">\r
        <div class="mod-h"><span class="mod-ic i-slate"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 17l6-6 4 4 6-8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 21h16"/></svg></span>\r
          <div><h3>Command Center</h3><span class="cat">Visibility</span></div></div>\r
        <p>Run commands and scripts across the fleet without interrupting a single user.</p>\r
        <ul><li>Execute commands across the whole fleet or a target group</li><li>Automate routine tasks with one click</li><li>Full visibility into command results and exit codes</li><li>Remote troubleshooting without a screen-share session</li></ul>\r
        <div class="mod-foot"><span>Fleet-wide</span><span>Scripting</span><span>Result log</span></div>\r
      </article>\r
\r
      <article class="mod rv" data-cat="visibility" data-d="4">\r
        <div class="mod-h"><span class="mod-ic i-red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg></span>\r
          <div><h3>Location services</h3><span class="cat">Visibility</span></div></div>\r
        <p>Know where company assets are, and set boundaries for where they are allowed to work.</p>\r
        <ul><li>Real-time device location and last-seen history</li><li>Geofences around offices, sites and restricted areas</li><li>Location-aware access conditions and offsite blocking</li><li>Instant lock or wipe on lost and stolen assets</li></ul>\r
        <div class="mod-foot"><span>Geofencing</span><span>Asset tracking</span><span>Lost mode</span></div>\r
      </article>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ PLATFORM TABS ============ -->\r
<section class="pad pad-navy">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Every platform</span><h2>Manage every device, any platform</h2><div class="u"></div>\r
      <p>One platform. Zero silos. Enterprise-grade control &mdash; with the same depth on every OS.</p></div>\r
\r
    <div class="ptabs rv" role="tablist">\r
      <button class="ptab on" type="button" data-p="android"><span class="pm" style="background:#3DDC84">A</span>Android</button>\r
      <button class="ptab" type="button" data-p="ios"><span class="pm" style="background:#5B5B5B">i</span>iPhone &amp; iPad</button>\r
      <button class="ptab" type="button" data-p="mac"><span class="pm" style="background:#111">&#63743;</span>Mac</button>\r
      <button class="ptab" type="button" data-p="win"><span class="pm" style="background:#0F6CBD">W</span>Windows</button>\r
      <button class="ptab" type="button" data-p="linux"><span class="pm" style="background:#F5A524">L</span>Linux</button>\r
    </div>\r
\r
    <div class="ppanel on" data-p="android">\r
      <div class="pcell"><span class="v">Secure</span><b>Work Profile isolation</b><span>Separate corporate data with auto-encryption and app allow-listing, leaving personal data untouched on BYOD handsets.</span></div>\r
      <div class="pcell"><span class="v">Monitor</span><b>Real-time compliance alerts</b><span>Continuous posture checks with assisted remediation, so a drifted device is fixed before it becomes an incident.</span></div>\r
      <div class="pcell"><span class="v">Manage</span><b>Silent deploys &amp; instant wipe</b><span>Push or remove apps without user action, and wipe the work profile or the whole device the moment a handset goes missing.</span></div>\r
    </div>\r
    <div class="ppanel" data-p="ios">\r
      <div class="pcell"><span class="v">Enable</span><b>Silent installs &amp; enforced networking</b><span>Deploy apps without prompts and enforce Wi-Fi and VPN profiles so the device connects the way policy says it should.</span></div>\r
      <div class="pcell"><span class="v">Guard</span><b>Jailbreak detection</b><span>Detect compromised devices in real time and quarantine them from corporate resources automatically.</span></div>\r
      <div class="pcell"><span class="v">Control</span><b>Remote lock, wipe &amp; kiosk</b><span>Lock a device to a single app for task-focused work, or lock and wipe it entirely from the dashboard.</span></div>\r
    </div>\r
    <div class="ppanel" data-p="mac">\r
      <div class="pcell"><span class="v">Deploy</span><b>Zero-touch via Apple Business Manager</b><span>Ship a sealed Mac straight to the employee &mdash; it enrols, configures and installs on first boot.</span></div>\r
      <div class="pcell"><span class="v">Update</span><b>Automated macOS &amp; app patching</b><span>Staged OS and application updates with compliance dashboards showing exactly what is still outstanding.</span></div>\r
      <div class="pcell"><span class="v">Protect</span><b>FileVault, Gatekeeper &amp; EDR</b><span>Enforce full-disk encryption with escrowed keys, Gatekeeper policy and macOS endpoint detection and response.</span></div>\r
    </div>\r
    <div class="ppanel" data-p="win">\r
      <div class="pcell"><span class="v">Harden</span><b>BitLocker, EDR &amp; firewall policy</b><span>Full-disk encryption with key escrow, endpoint detection and response, and firewall rules enforced centrally.</span></div>\r
      <div class="pcell"><span class="v">Monitor</span><b>Patch compliance dashboards</b><span>See which machines are behind on which CVE, ranked by severity and exposure, not just a count.</span></div>\r
      <div class="pcell"><span class="v">Automate</span><b>Remediation &amp; remote command</b><span>Fix vulnerabilities and run scripts across the estate without a technician touching the machine.</span></div>\r
    </div>\r
    <div class="ppanel" data-p="linux">\r
      <div class="pcell"><span class="v">Enrol</span><b>Agent-based onboarding</b><span>Ubuntu, RHEL, Debian and their derivatives enrol into the same console as everything else.</span></div>\r
      <div class="pcell"><span class="v">Maintain</span><b>Package patching &amp; drift</b><span>Keep packages current and detect configuration drift against your defined baseline.</span></div>\r
      <div class="pcell"><span class="v">Harden</span><b>Encryption &amp; SSH policy</b><span>Enforce disk encryption and SSH hardening, with remote script execution for anything bespoke.</span></div>\r
    </div>\r
\r
    <div class="pnote rv"><a href="#contact" class="btn btn-orange mag">Book a Platform Walkthrough <span class="ar">&rarr;</span></a></div>\r
  </div>\r
</section>\r
\r
<!-- ============ CAPABILITY SPOTLIGHTS ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">What it changes</span><h2>Secure every device. <span class="hl">Automate every action.</span></h2><div class="u"></div>\r
      <p>Security, compliance and automation together &mdash; from zero-touch setup to real-time control and patching, in one place.</p></div>\r
    <div class="spots">\r
      <article class="spot rv" data-d="1">\r
        <h3>Stop threats before they start</h3>\r
        <p>Do not wait for a breach to act. Controls block risk proactively across every device.</p>\r
        <ul><li>Instantly remediate outdated or non-compliant devices</li><li>Compliance templates for HIPAA, GDPR and SOC 2</li><li>24/7 threat defence on macOS and Windows</li><li>Auto-lock on outdated OS, risky users or abnormal locations</li></ul>\r
        <div class="proof">96% of unauthorised access blocked</div>\r
      </article>\r
      <article class="spot rv" data-d="2">\r
        <h3>One dashboard for every device</h3>\r
        <p>Stop managing devices across multiple tools. Android, iOS, Windows, macOS and Linux in one place.</p>\r
        <ul><li>Zero-touch enrolment &mdash; 100+ devices set up in minutes</li><li>Remote fixes and troubleshooting from anywhere</li><li>Kiosk mode locks devices to task-specific apps</li><li>Role-based access by team, location or device health</li></ul>\r
        <div class="proof">Replaces 7+ disconnected tools</div>\r
      </article>\r
      <article class="spot rv" data-d="3">\r
        <h3>Zero-touch automation</h3>\r
        <p>Pre-configure devices remotely so they arrive work-ready, and fix issues without interrupting anyone.</p>\r
        <ul><li>Devices configure themselves on first startup</li><li>Run scripts or commands with no user disruption</li><li>Role-based templates deploy in hours, not weeks</li><li>New hires productive on day zero</li></ul>\r
        <div class="proof">65% faster deployments &middot; 80% fewer tickets</div>\r
      </article>\r
      <article class="spot rv" data-d="4">\r
        <h3>One-click secure access</h3>\r
        <p>Your team needs access securely and instantly. Identity-based access that adapts in real time.</p>\r
        <ul><li>SSO and MFA using biometrics, OTP or certificates</li><li>Smart access rules by role, location or device status</li><li>Cloud RADIUS for certificate-based Wi-Fi and VPN</li><li>Step-up authentication instead of blanket blocking</li></ul>\r
        <div class="proof">94% fewer access-related incidents</div>\r
      </article>\r
      <article class="spot rv" data-d="5">\r
        <h3>Effortless compliance</h3>\r
        <p>Enforce a standard in one click, then keep the evidence current without chasing screenshots.</p>\r
        <ul><li>Prebuilt HIPAA, GDPR and CIS benchmark policies</li><li>Access audits and violation alerts with owners</li><li>Remote wipe and lock for lost devices</li><li>Audit-ready evidence exported from the console</li></ul>\r
        <div class="proof">Pass audits 3&times; faster</div>\r
      </article>\r
      <article class="spot rv" data-d="1">\r
        <h3>Protection everywhere</h3>\r
        <p>Every device is protected &mdash; in the office, at home or on the road.</p>\r
        <ul><li>Silent patch updates that fix vulnerabilities invisibly</li><li>Data loss prevention on unauthorised apps and services</li><li>Continuous compliance alerting with quick action paths</li><li>Same posture on corporate and BYOD hardware</li></ul>\r
        <div class="proof">Response time down to 8 minutes</div>\r
      </article>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ TEAMS ============ -->\r
<section class="pad pad-ice">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Across the business</span><h2>Empower every team</h2><div class="u"></div>\r
      <p>Automation, insight and smart actions that save time well beyond the IT department.</p></div>\r
    <div class="teams">\r
      <div class="team rv" data-d="1"><span class="tg">HR</span><b>HR Teams</b><span>Automate onboarding by giving new hires the right tools on day one. Apps and permissions are pre-mapped to the role, so nobody waits on an IT ticket to start working.</span></div>\r
      <div class="team rv" data-d="2"><span class="tg">IT</span><b>IT Teams</b><span>Stay ahead of issues with real-time hardware and OS alerts, fix problems remotely through scripts, and deploy devices without touching them thanks to zero-touch provisioning.</span></div>\r
      <div class="team rv" data-d="3"><span class="tg">Ops</span><b>Ops &amp; Support</b><span>Let automation handle repetitive tickets and integrate with the tools you already run. Backlogs shrink as routine issues resolve themselves.</span></div>\r
      <div class="team rv" data-d="4"><span class="tg">MSP</span><b>Security &amp; MSP Teams</b><span>A unified platform to enforce compliance policy, manage multiple client tenants, and automate patching and endpoint protection across every environment.</span></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ USE CASES ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Industries</span><h2>Use cases that drive <span class="hl">real operational impact</span></h2><div class="u"></div>\r
      <p>From rugged field devices to locked-down clinical tablets &mdash; proven across logistics, BFSI, education, retail and healthcare.</p></div>\r
    <div class="uses">\r
      <div class="uc rv" data-d="1"><span class="ui i-amber">&#128666;</span><b>Logistics</b><ul><li>Remotely manage rugged field devices</li><li>Offline data sync and GPS tracking</li><li>Instantly lock or wipe lost assets</li></ul></div>\r
      <div class="uc rv" data-d="2"><span class="ui i-blue">&#127974;</span><b>BFSI &amp; Fintech</b><ul><li>Asset control with live device locations</li><li>Automated audit reports and access logs</li><li>Full corporate data isolation with encryption</li><li>Enforce CIS, ISO and PCI-DSS across endpoints</li></ul></div>\r
      <div class="uc rv" data-d="3"><span class="ui i-green">&#127979;</span><b>Education</b><ul><li>Lock tablets to learning apps</li><li>Bulk-setup 100+ devices in minutes</li><li>Monitor screen usage and block distractions</li></ul></div>\r
      <div class="uc rv" data-d="4"><span class="ui i-purple">&#128717;</span><b>Retail</b><ul><li>Assign access by shift and role</li><li>Secure POS systems with version control</li><li>Block offsite access using geofencing</li></ul></div>\r
      <div class="uc rv" data-d="5"><span class="ui i-red">&#127973;</span><b>Healthcare</b><ul><li>Lock tablets to EMR / EHR apps</li><li>Enforce policy across staff and departments</li><li>Remote access with full audit control</li></ul></div>\r
      <div class="uc rv" data-d="1"><span class="ui i-teal">&#129309;</span><b>MSPs &amp; MSSPs</b><ul><li>Manage client devices across tenants</li><li>Enforce consistent policy from one dashboard</li><li>Automate compliance and patch workflows</li></ul></div>\r
      <div class="uc rv" data-d="2"><span class="ui i-slate">&#128187;</span><b>Technology &amp; SaaS</b><ul><li>Enforce Zero Trust policies</li><li>Centralised SaaS access and patch management</li><li>Push OS updates and scripts remotely</li></ul></div>\r
      <div class="uc rv" data-d="3"><span class="ui i-amber">&#127981;</span><b>Manufacturing</b><ul><li>Shop-floor kiosk devices locked to one app</li><li>Rugged handheld and scanner management</li><li>Site-level geofencing and shift policies</li></ul></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ MIGRATION ============ -->\r
<section class="pad pad-ice">\r
  <div class="wrap">\r
    <div class="mig">\r
      <div>\r
        <div class="head left rv"><span class="kicker">Switching platforms</span><h2>Migration without <span class="hl">the headache</span></h2><div class="u"></div>\r
          <p>Moving from Intune, Workspace ONE, Hexnode, Scalefusion or a legacy MDM? We handle the cutover.</p></div>\r
        <div class="mig-list">\r
          <div class="mig-item rv" data-d="1"><span class="n">01</span><div><h4>SCIM, SAML &amp; API support</h4><p>Integrate with the identity and workflow tools you already run, without a lengthy re-platforming exercise.</p></div></div>\r
          <div class="mig-item rv" data-d="2"><span class="n">02</span><div><h4>Fast, seamless migration</h4><p>Switch from a legacy MDM in hours rather than weeks, with policy and group structures carried across.</p></div></div>\r
          <div class="mig-item rv" data-d="3"><span class="n">03</span><div><h4>Zero-downtime deployment</h4><p>Roll out across your fleet with no service interruption &mdash; users keep working through the cutover.</p></div></div>\r
          <div class="mig-item rv" data-d="4"><span class="n">04</span><div><h4>XcellHost runs the project</h4><p>Discovery, pilot group, phased rollout and 30-day hypercare, managed by our team rather than left to yours.</p></div></div>\r
        </div>\r
      </div>\r
      <div class="mig-quote rv" data-d="2">\r
        <div class="bar"></div>\r
        <div class="q">&ldquo;We migrated 500+ devices in a single day with no downtime. The pilot group caught the two policy conflicts before they reached anyone else.&rdquo;</div>\r
        <div class="who">IT Director &middot; BFSI enterprise &middot; 500+ endpoints</div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ WHY XCELLHOST ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Why XcellHost</span><h2>Why teams choose <span class="hl">XcellHost Cloud MDM</span></h2><div class="u"></div></div>\r
    <div class="why">\r
      <div class="wc rv" data-d="1"><b>Built-in helpdesk</b>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Ticketing and issue resolution inside the console</div>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Cuts ticket volume by around 40%</div></div>\r
      <div class="wc rv" data-d="2"><b>One command center</b>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Multi-platform dashboard, no per-OS console</div>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Simplifies IT and reduces tool overload</div></div>\r
      <div class="wc rv" data-d="3"><b>Smart access</b>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>SSO, MFA and a rules engine in one layer</div>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Eliminates risky and shared logins</div></div>\r
      <div class="wc rv" data-d="4"><b>Day-zero readiness</b>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>New hires productive from their first morning</div>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>No imaging bench, no office visit needed</div></div>\r
      <div class="wc rv" data-d="5"><b>Fast rollouts</b>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Role-based templates rather than per-device setup</div>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Deploy in hours, not weeks</div></div>\r
      <div class="wc rv" data-d="1"><b>Versatile deployments</b>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Kiosk, BYOD, corporate-owned and geofenced</div>\r
        <div class="l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 6" stroke-linecap="round"/></svg>Every scenario from a single platform</div></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ RESULTS ============ -->\r
<section class="pad pad-navy">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Outcomes</span><h2>Most teams see results in the first week</h2><div class="u"></div>\r
      <p>Consolidation, automation and Zero Trust posture &mdash; measured on the fleet, not on a slide.</p></div>\r
    <div class="results">\r
      <div class="rc rv" data-d="1"><b class="count" data-to="7" data-suffix="+">0</b><span>Disconnected tools eliminated</span></div>\r
      <div class="rc rv" data-d="2"><b class="count" data-to="80" data-suffix="%">0</b><span>Reduction in repetitive IT tasks</span></div>\r
      <div class="rc rv" data-d="3"><b>Zero</b><span>Trust posture on every endpoint</span></div>\r
      <div class="rc rv" data-d="4"><b class="count" data-to="15" data-suffix=" min">0</b><span>From signup to first device enrolled</span></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ INTEGRATIONS ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Integrations</span><h2>Connect everything, <span class="hl">work smarter</span></h2><div class="u"></div>\r
      <p>Plug into the identity, security and communication tools you already run. Migrate in hours and automate workflows without disrupting operations.</p></div>\r
  </div>\r
  <div class="marq-wrap">\r
    <div class="track">\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#00a4ef,#0078d4)"></span>Microsoft Entra ID</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#4285f4,#34a853)"></span>Google Workspace</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#00297a,#001a4d)"></span>Okta</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#4a154b,#36c5f0)"></span>Slack</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#5059C9,#7B83EB)"></span>Microsoft Teams</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#0052cc,#2684ff)"></span>Jira</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#d40511,#f43f5e)"></span>Acronis</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#000000,#65a637)"></span>Splunk</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#6366f1,#312e81)"></span>Intercom</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#635bff,#3d34c4)"></span>Stripe</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#7c3aed,#4c1d95)"></span>SCIM / SAML</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#0F766E,#0b544e)"></span>REST API</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#00a4ef,#0078d4)"></span>Microsoft Entra ID</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#4285f4,#34a853)"></span>Google Workspace</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#00297a,#001a4d)"></span>Okta</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#4a154b,#36c5f0)"></span>Slack</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#5059C9,#7B83EB)"></span>Microsoft Teams</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#0052cc,#2684ff)"></span>Jira</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#d40511,#f43f5e)"></span>Acronis</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#000000,#65a637)"></span>Splunk</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#6366f1,#312e81)"></span>Intercom</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#635bff,#3d34c4)"></span>Stripe</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#7c3aed,#4c1d95)"></span>SCIM / SAML</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#0F766E,#0b544e)"></span>REST API</div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ PRICING ============ -->\r
<section class="pad pad-ice" id="pricing">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Pricing</span><h2>Simple, <span class="hl">transparent pricing</span></h2><div class="u"></div>\r
      <p>Per device, per month. Start with 20 devices on a fully functional 14-day trial. All prices exclude 18% GST.</p></div>\r
\r
    <div class="ptoggle rv">\r
      <div class="sw">\r
        <button type="button" [class.on]="billingCycle() === 'annual'" [attr.aria-pressed]="billingCycle() === 'annual'" (click)="setBillingCycle('annual')">Annual<span class="save">Save 20%</span></button>\r
        <button type="button" [class.on]="billingCycle() === 'monthly'" [attr.aria-pressed]="billingCycle() === 'monthly'" (click)="setBillingCycle('monthly')">Monthly</button>\r
      </div>\r
    </div>\r
\r
    <div class="price">\r
      <div class="tier rv" data-d="1">\r
        <h3>Essentials</h3>\r
        <div class="sub">Complete endpoint visibility, device lifecycle management and IT operations tooling across every platform.</div>\r
        <div class="amt"><span class="cur">&#8377;</span><span class="num">{{ billingCycle() === 'annual' ? '399' : '499' }}</span></div>\r
        <div class="per">per device / month &middot; billed {{ billingCycle() === 'annual' ? 'annually' : 'monthly' }}</div>\r
        <span class="inc">What you get</span>\r
        <ul>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Admin dashboard, widgets &amp; role-based access</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Device inventory, groups &amp; enrolment (BYOD + COD)</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Software deployment &amp; kiosk mode</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Zero-touch onboarding &amp; audit logs</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Command Center &amp; ticketing</li>\r
        </ul>\r
        <a href="#contact" class="btn btn-t mag">Start 14-day trial</a>\r
      </div>\r
\r
      <div class="tier pop rv" data-d="2">\r
        <span class="tag">Most popular</span>\r
        <h3>Secure</h3>\r
        <div class="sub">Compliance visibility, vulnerability management and platform-wide authentication on a fully managed fleet.</div>\r
        <div class="amt"><span class="cur">&#8377;</span><span class="num">{{ billingCycle() === 'annual' ? '649' : '799' }}</span></div>\r
        <div class="per">per device / month &middot; billed {{ billingCycle() === 'annual' ? 'annually' : 'monthly' }}</div>\r
        <span class="inc">Everything in Essentials, plus</span>\r
        <ul>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Compliance monitoring &amp; automated remediation</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Patch &amp; vulnerability centre</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>MFA configuration (platform-wide)</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Security posture dashboards</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>macOS &amp; Windows EDR modules</li>\r
        </ul>\r
        <a href="#contact" class="btn btn-orange mag">Start 14-day trial <span class="ar">&rarr;</span></a>\r
      </div>\r
\r
      <div class="tier rv" data-d="3">\r
        <h3>Zero Trust</h3>\r
        <div class="sub">Full device management, security and Zero Trust for organisations needing conditional and identity-aware access.</div>\r
        <div class="amt"><span class="cur">&#8377;</span><span class="num">{{ billingCycle() === 'annual' ? '899' : '1149' }}</span></div>\r
        <div class="per">per device / month &middot; billed {{ billingCycle() === 'annual' ? 'annually' : 'monthly' }}</div>\r
        <span class="inc">Everything in Secure, plus</span>\r
        <ul>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Conditional &amp; location-aware access policies</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Device login controls for macOS &amp; Windows</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Context-aware access for SaaS &amp; internal apps</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Asset management &amp; lifecycle visibility</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Cloud RADIUS for Wi-Fi &amp; VPN</li>\r
        </ul>\r
        <a href="#contact" class="btn btn-t mag">Start 14-day trial</a>\r
      </div>\r
\r
      <div class="tier rv" data-d="4">\r
        <h3>MSP</h3>\r
        <div class="sub">For managed service providers running multiple client environments from a single platform.</div>\r
        <div class="amt custom"><span class="num">Contact sales</span></div>\r
        <div class="per">volume &amp; partner pricing</div>\r
        <span class="inc">Key features</span>\r
        <ul>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Manage all clients from one console</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Deploy devices without on-site visits</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Replicate policies across client tenants</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Per-tenant reporting &amp; white-label options</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Partner margins &amp; reseller terms</li>\r
        </ul>\r
        <a href="#contact" class="btn btn-t mag">Talk to sales</a>\r
      </div>\r
    </div>\r
\r
    <!-- comparison table -->\r
    <div class="ctab rv">\r
      <table>\r
        <thead><tr><th>Features</th><th>Essentials</th><th>Secure</th><th>Zero Trust</th></tr></thead>\r
        <tbody>\r
          <tr class="grp"><td colspan="4">Core platform</td></tr>\r
          <tr><td>Admin dashboard &amp; widgets</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Role-based admin access</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>User directory &amp; groups</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr class="grp"><td colspan="4">Endpoint management</td></tr>\r
          <tr><td>Device inventory, search &amp; groups</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Enrolment (BYOD + corporate-owned)</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Configuration profiles &amp; policy groups</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Kiosk &amp; single-purpose mode</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Software deployment &amp; updates</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Command Center</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Geolocation services</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr class="grp"><td colspan="4">Security &amp; compliance</td></tr>\r
          <tr><td>Automated remediation</td><td class="no">&mdash;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Patch &amp; vulnerability centre</td><td class="no">&mdash;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>MFA configuration (platform-wide)</td><td class="no">&mdash;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Security posture dashboards</td><td class="no">&mdash;</td><td class="yes">&#10003;</td><td class="yes">&#10003;</td></tr>\r
          <tr class="grp"><td colspan="4">Zero Trust &amp; access</td></tr>\r
          <tr><td>Conditional access policies</td><td class="no">&mdash;</td><td class="no">&mdash;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Context-aware access for SaaS &amp; internal apps</td><td class="no">&mdash;</td><td class="no">&mdash;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Device login controls (macOS &amp; Windows)</td><td class="no">&mdash;</td><td class="no">&mdash;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Location-aware access conditions</td><td class="no">&mdash;</td><td class="no">&mdash;</td><td class="yes">&#10003;</td></tr>\r
          <tr><td>Asset management &amp; lifecycle</td><td class="no">&mdash;</td><td class="no">&mdash;</td><td class="yes">&#10003;</td></tr>\r
        </tbody>\r
      </table>\r
    </div>\r
\r
    <p class="price-note">All prices exclude 18% GST &middot; GST invoice on every purchase &middot; Pay via UPI, Cards or NetBanking<br>\r
      Every plan includes 24&times;7 support, SSO access, user roles and API access &middot; Nonprofit, education and partner pricing available on request</p>\r
  </div>\r
</section>\r
\r
<!-- ============ TESTIMONIAL ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="tq rv tilt">\r
      <div class="av">PM</div>\r
      <p>&ldquo;XcellHost helped us modernise device management while meeting strict compliance requirements. Onboarding staff is now seamless, and we can enforce security policies without slowing anyone down.&rdquo;</p>\r
      <div class="who"><b>Project Manager</b> &middot; Public sector &middot; 800+ endpoints managed</div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ FAQ ============ -->\r
<section class="pad pad-ice">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">FAQ</span><h2>Frequently asked <span class="hl">questions</span></h2><div class="u"></div>\r
      <p>Everything about the platform, deployment and billing.</p></div>\r
    <div class="faqgrid">\r
      <div class="faq2 open rv" data-d="1"><button class="faq2-q" type="button" (click)="toggleFaq($event)">What is the difference between MDM and UEM?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>MDM (Mobile Device Management) originally covered phones and tablets. UEM (Unified Endpoint Management) extends the same control plane to laptops, desktops and servers as well. XcellHost Cloud MDM is a UEM platform &mdash; Windows, macOS, iOS, Android and Linux managed with the same depth from one console, rather than a mobile tool with a desktop add-on.</p></div></div>\r
      <div class="faq2 rv" data-d="2"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Is there a free trial?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>Yes &mdash; a fully functional 14-day trial starting at 20 devices, with no feature gating. We also include a free 30-minute onboarding session to get your first policy group and enrolment profile configured properly rather than leaving you to guess.</p></div></div>\r
      <div class="faq2 rv" data-d="3"><button class="faq2-q" type="button" (click)="toggleFaq($event)">How long does deployment take?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>The console is live in about 15 minutes. A typical SMB rollout runs a pilot group in week one and the full fleet in week two. Migrations from an existing MDM are usually completed in hours per site, because policy and group structures are mapped before cutover rather than rebuilt afterwards.</p></div></div>\r
      <div class="faq2 rv" data-d="4"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Can we manage personal (BYOD) devices?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>Yes. On Android we use Work Profiles and on iOS user enrolment, so corporate apps and data are isolated and can be wiped independently &mdash; personal photos, messages and accounts stay untouched and invisible to IT. That separation matters for both employee trust and DPDP Act obligations.</p></div></div>\r
      <div class="faq2 rv" data-d="5"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Do you support zero-touch enrolment?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>Yes, across all major platforms &mdash; Apple Business Manager and Apple School Manager for Apple hardware, Android zero-touch for Android Enterprise, and Autopilot-style provisioning for Windows. Devices ship sealed to the employee and configure themselves on first boot.</p></div></div>\r
      <div class="faq2 rv" data-d="1"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Where is device data stored?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>In Indian Tier-4 datacenters with encryption at rest and in transit, keeping you aligned with DPDP Act and RBI data-residency expectations. Access is role-based with MFA enforced on every admin account, and all administrative actions are written to an immutable audit log.</p></div></div>\r
      <div class="faq2 rv" data-d="2"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Can I change plan or cancel later?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>You can upgrade at any time to unlock compliance automation, Zero Trust or asset management, and the change applies immediately across your fleet. Subscriptions can be cancelled at the end of the billing term.</p></div></div>\r
      <div class="faq2 rv" data-d="3"><button class="faq2-q" type="button" (click)="toggleFaq($event)">Do we get a GST invoice?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>Yes. Billing is in INR with a GST-compliant invoice on every purchase so your business can claim input tax credit. Payment is by UPI, cards or NetBanking, and licences are issued per device on the term you select.</p></div></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ CONTACT ============ -->\r
<section class="pad" id="contact">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Get started</span><h2>Ready to make device management easy?</h2><div class="u"></div>\r
      <p>We will scope your fleet, run a pilot group and handle the rollout &mdash; you keep working through it.</p></div>\r
    <div class="contact">\r
      <div class="ccard rv" data-d="1">\r
        <h3>Talk to the MDM team</h3>\r
        <p>Licensing, migration, policy design and managed operations under one roof &mdash; transparent INR pricing, GST invoice, 24&times;7 support in English and Hindi.</p>\r
        <ul class="clist">\r
          <li><a href="tel:+912267111555"><span class="ci">&#9742;</span><span><b>Call us</b><span>+91 22 6711 1555</span></span></a></li>\r
          <li><a href="https://wa.me/918657032540"><span class="ci">&#128172;</span><span><b>WhatsApp</b><span>+91 86570 32540 &mdash; start a chat</span></span></a></li>\r
          <li><a href="mailto:sales@xcellhost.cloud"><span class="ci">&#9993;</span><span><b>Email us</b><span>sales@xcellhost.cloud</span></span></a></li>\r
          <li><a href="#"><span class="ci">&#128203;</span><span><b>Submit a ticket</b><span>Trackable request &middot; 24&times;7 response</span></span></a></li>\r
        </ul>\r
        <div class="pp-proof" style="justify-content:flex-start;margin-top:18px">\r
          <span>ISO 27001</span><span>ISO 20000-1</span><span>Since 1999</span>\r
        </div>\r
      </div>\r
\r
      <div class="ccard rv" data-d="2">\r
        <h3>Start your free trial</h3>\r
        <p>Fill the form &mdash; we respond within one business day.</p>\r
        <form class="cform">\r
          <div class="row2">\r
            <div><label for="f1">Full Name *</label><input id="f1" required></div>\r
            <div><label for="f2">Company Name *</label><input id="f2" required></div>\r
          </div>\r
          <div class="row2">\r
            <div><label for="f3">Work Email *</label><input id="f3" type="email" required></div>\r
            <div><label for="f4">Mobile Number *</label><input id="f4" type="tel" required></div>\r
          </div>\r
          <div class="row2">\r
            <div><label for="f5">Device count *</label>\r
              <select id="f5" required>\r
                <option value="">Select</option><option>Under 25</option><option>25&ndash;100</option>\r
                <option>100&ndash;500</option><option>500&ndash;2,000</option><option>2,000+</option>\r
              </select></div>\r
            <div><label for="f6">Primary platform *</label>\r
              <select id="f6" required>\r
                <option value="">Select</option><option>Windows</option><option>macOS</option>\r
                <option>iOS / iPadOS</option><option>Android</option><option>Linux</option><option>Mixed fleet</option>\r
              </select></div>\r
          </div>\r
          <div><label for="f7">Current MDM (if any)</label><input id="f7" placeholder="Intune, Workspace ONE, Hexnode, Scalefusion, none\xE2\u20AC\xA6"></div>\r
          <div><label for="f8">Message</label><textarea id="f8" placeholder="Rollout timeline, compliance requirements, sites\xE2\u20AC\xA6"></textarea></div>\r
          <button class="btn btn-primary mag" type="submit">Start Free Trial <span class="ar">&rarr;</span></button>\r
          <p class="formnote" id="fmsg">We respond within one business day &middot; No spam, ever.</p>\r
        </form>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ CTA BAND ============ -->\r
<section class="pad" style="padding-top:0">\r
  <div class="wrap">\r
    <div class="ctaband rv">\r
      <div class="glow"></div>\r
      <div class="ct-l">\r
        <div class="cbico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="14" height="10" rx="2"/><rect x="16" y="9" width="6" height="11" rx="1.5"/><path d="M6 18h6"/></svg></div>\r
        <div><h3>Go live in 15 minutes</h3><p>Start the trial with 20 devices, or let us scope your fleet and run the migration. Free consultation, transparent INR pricing, GST invoice.</p></div>\r
      </div>\r
      <div class="ct-r">\r
        <a href="#contact" class="btn btn-orange mag">Start Free Trial <span class="ar">&rarr;</span></a>\r
        <a href="https://wa.me/918657032540" class="btn btn-outline mag">Talk on WhatsApp</a>\r
      </div>\r
    </div>\r
    <div class="pp-proof rv">\r
      <span>&#127941; ISO 27001</span><span>&#127941; ISO 20000-1</span><span>&#127959; Tier-4 Indian DCs</span>\r
      <span>&#128368; Since 1999</span><span>&#128274; Secure Payments &mdash; UPI &middot; Cards &middot; NetBanking</span>\r
    </div>\r
  </div>\r
</section>\r
\r
\r
<xh-insights-section pageSlug="cloud-mdm" [pageAliases]="['mdm']" />\r
\r
<!-- ============ LAUGHING BUDDHA CTA ============ -->\r
<section class="pad mdm-buddha-section">\r
  <div class="wrap">\r
    <div class="mdm-buddha">\r
      <div class="mdm-buddha-copy">\r
        <h2>Ready to start with Cloud MDM?</h2>\r
        <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
        <div class="mdm-buddha-actions">\r
          <button class="btn btn-orange" type="button" (click)="requestCallback()">Request a callback</button>\r
          <a class="btn btn-outline" routerLink="/contact">&#9889; Buy Now</a>\r
          <button class="btn btn-outline" type="button" (click)="requestCallback()">&#11015; Infosheet</button>\r
          <button class="btn btn-outline" type="button" (click)="requestCallback()">&#128214; Presentation</button>\r
          <a class="btn btn-outline" href="https://wa.me/918657032540" target="_blank" rel="noopener">Talk on WhatsApp</a>\r
          <a class="btn btn-outline" href="mailto:sales@xcellhost.com?subject=Cloud%20MDM%20enquiry">Email Us</a>\r
</div>\r
      </div>\r
      <a class="mdm-buddha-mark" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">\r
        <img src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha">\r
      </a>\r
    </div>\r
    <div class="mdm-buddha-proof" aria-label="XcellHost credentials">\r
      <span>&#127941; ISO 27001</span>\r
      <span>&#127941; ISO 20000-1</span>\r
      <span>&#129309; Microsoft Gold Partner</span>\r
      <span>&#128368; Since 1999</span>\r
      <span>&#128274; Secure Payments &mdash; UPI &middot; Cards &middot; NetBanking</span>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/pages/cloud-mdm.page.css */\n:host {\n  --navy:#041E42;\n  --navy2:#0A2A57;\n  --blue:#1565D8;\n  --blue-d:#0C3E8F;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --orange-d:#F57C00;\n  --ice:#F2F6FC;\n  --white:#fff;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --green:#2ECC71;\n  --green-d:#128A42;\n  --red:#E5484D;\n  --amber:#F5A524;\n  --purple:#7C3AED;\n  --teal:#0F766E;\n  --shadow-s:0 6px 18px rgba(4,30,66,.06);\n  --shadow-m:0 18px 50px rgba(4,30,66,.10);\n  --shadow-lg:0 34px 80px -20px rgba(4,30,66,.34);\n  --maxw:1240px;\n  --ease:cubic-bezier(.22,.7,.2,1);\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  font-family:\n    var(--body),\n    system-ui,\n    sans-serif;\n  color: var(--ink);\n  background: #fff;\n  line-height: 1.6;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: var(--disp);\n  color: var(--navy);\n  line-height: 1.12;\n  letter-spacing: -.02em;\n  font-weight: 700;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nimg,\nsvg {\n  display: block;\n}\n.wrap {\n  max-width: var(--maxw);\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.serif {\n  font-family: "Instrument Serif", serif;\n  font-style: italic;\n  letter-spacing: 0;\n}\n.mono {\n  font-family: var(--mono);\n}\n#progress {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 3px;\n  width: 0;\n  z-index: 130;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  box-shadow: 0 0 12px rgba(21, 101, 216, .6);\n}\n#spotlight {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity .4s;\n  background:\n    radial-gradient(\n      340px circle at var(--mx,-999px) var(--my,-999px),\n      rgba(21, 101, 216, .09),\n      transparent 65%);\n}\n.rv {\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity .7s var(--ease), transform .7s var(--ease);\n}\n.rv.in {\n  opacity: 1;\n  transform: none;\n}\n.rv[data-d="1"] {\n  transition-delay: .08s;\n}\n.rv[data-d="2"] {\n  transition-delay: .16s;\n}\n.rv[data-d="3"] {\n  transition-delay: .24s;\n}\n.rv[data-d="4"] {\n  transition-delay: .32s;\n}\n.rv[data-d="5"] {\n  transition-delay: .4s;\n}\n.tilt {\n  transition: transform .25s var(--ease);\n}\n.grid-bg {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .55;\n  background-image:\n    linear-gradient(var(--line) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--line) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      760px 560px at 82% 8%,\n      #000,\n      transparent 72%);\n  -webkit-mask-image:\n    radial-gradient(\n      760px 560px at 82% 8%,\n      #000,\n      transparent 72%);\n  animation: gridmove 32s linear infinite;\n}\n@keyframes gridmove {\n  to {\n    background-position: 48px 48px;\n  }\n}\n.aurora {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  z-index: 0;\n  pointer-events: none;\n  opacity: .55;\n}\n.aurora.a1 {\n  width: 420px;\n  height: 420px;\n  background:\n    radial-gradient(\n      circle,\n      #bcd6ff,\n      transparent 65%);\n  top: -90px;\n  right: 2%;\n  animation: aflow1 12s ease-in-out infinite;\n}\n.aurora.a2 {\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      #ffd9a8,\n      transparent 65%);\n  bottom: -40px;\n  right: 22%;\n  animation: aflow2 14s ease-in-out infinite;\n}\n.aurora.a3 {\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      #cfe0ff,\n      transparent 65%);\n  top: 34%;\n  left: -70px;\n  animation: aflow3 16s ease-in-out infinite;\n}\n@keyframes aflow1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-30px, 24px) scale(1.12);\n  }\n}\n@keyframes aflow2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(26px, -20px) scale(1.15);\n  }\n}\n@keyframes aflow3 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(20px, 18px) scale(1.1);\n  }\n}\n#net {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .7;\n}\n@keyframes scfloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-11px);\n  }\n}\n@keyframes blink {\n  50% {\n    opacity: .25;\n  }\n}\n@keyframes cbpulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(21, 101, 216, .5);\n  }\n  70% {\n    box-shadow: 0 0 0 9px rgba(21, 101, 216, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(21, 101, 216, 0);\n  }\n}\n@keyframes tickpop {\n  0% {\n    transform: scale(0) rotate(-40deg);\n  }\n  60% {\n    transform: scale(1.2) rotate(6deg);\n  }\n  100% {\n    transform: scale(1) rotate(0);\n  }\n}\n@keyframes hlsweep {\n  to {\n    transform: scaleX(1);\n  }\n}\n@keyframes marq {\n  to {\n    transform: translateX(-50%);\n  }\n}\n@keyframes fadein {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  font-weight: 500;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: var(--blue);\n  background: var(--blue-soft);\n  border: 1px solid #d3e2fb;\n  padding: 7px 14px;\n  border-radius: 99px;\n}\n.eyebrow .dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--blue);\n  animation: cbpulse 2s infinite;\n}\n.btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  overflow: hidden;\n  font-family: var(--body);\n  font-weight: 600;\n  font-size: 14.5px;\n  padding: 12px 22px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  will-change: transform;\n  transition:\n    transform .18s var(--ease),\n    box-shadow .28s,\n    background .25s,\n    color .25s,\n    border-color .25s;\n}\n.btn:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -120%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      100deg,\n      transparent,\n      rgba(255, 255, 255, .45),\n      transparent);\n  transform: skewX(-18deg);\n  transition: left .55s var(--ease);\n}\n.btn:hover:before {\n  left: 130%;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(21, 101, 216, .75);\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px -14px rgba(21, 101, 216, .85);\n}\n.btn-orange {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(255, 140, 26, .7);\n}\n.btn-orange:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px -14px rgba(255, 140, 26, .85);\n}\n.btn-ghost {\n  background: #fff;\n  color: var(--navy);\n  border-color: var(--line);\n  box-shadow: var(--shadow-s);\n}\n.btn-ghost:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn-outline {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .42);\n}\n.btn-outline:hover {\n  background: rgba(255, 255, 255, .12);\n  transform: translateY(-2px);\n}\n.btn-t {\n  background: #fff;\n  color: var(--blue);\n  border: 1.5px solid #cfe0fb;\n}\n.btn-t:hover {\n  background: var(--blue);\n  color: #fff;\n  border-color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn .ar {\n  transition: transform .25s;\n}\n.btn:hover .ar {\n  transform: translateX(3px);\n}\n.btn-sm {\n  padding: 8px 16px;\n  font-size: 13px;\n  border-radius: 10px;\n}\n.utility {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility .wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility .wrap::-webkit-scrollbar {\n  display: none;\n}\n.utility a {\n  color: #b9c9e2;\n  transition: color .2s;\n}\n.utility a:hover {\n  color: #fff;\n}\n.utility .links {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility .links > a {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility .phone {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.uwa {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.uwa:hover {\n  color: #8ff0b0 !important;\n}\n.promo {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n  position: relative;\n  z-index: 51;\n}\n.promo b {\n  color: #ffd9ac;\n}\n.promo .code {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo a {\n  text-decoration: underline;\n}\nheader.xh-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, .86);\n  backdrop-filter: saturate(180%) blur(14px);\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\n  border-bottom: 1px solid #E7EBF3;\n  transition: box-shadow .35s, background .35s;\n}\nheader.xh-header.scrolled {\n  box-shadow: 0 8px 30px -18px rgba(4, 30, 66, .34);\n  background: rgba(255, 255, 255, .95);\n}\n.xh-nav-wrap {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 80px;\n  transition: height .35s var(--ease);\n}\nheader.xh-header.scrolled .xh-nav-wrap {\n  height: 64px;\n}\n.xh-brand img {\n  height: 74px;\n  width: auto;\n  transition: height .35s var(--ease);\n}\nheader.xh-header.scrolled .xh-brand img {\n  height: 58px;\n}\n.xh-main-nav ul {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  list-style: none;\n  margin-left: 6px;\n}\n.xh-menu-link {\n  font: 600 13px/13px var(--body);\n  color: #263552;\n  background: none;\n  border: 0;\n  padding: 26px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  position: relative;\n  transition: color .2s;\n}\n.xh-menu-link:after {\n  content: "";\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  bottom: 20px;\n  height: 2px;\n  width: 0;\n  background: var(--blue);\n  transition: width .3s var(--ease);\n}\n.xh-menu-link:hover,\n.xh-menu-link.is-active {\n  color: var(--blue);\n}\n.xh-menu-link:hover:after {\n  width: calc(100% - 20px);\n}\n.xh-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.xh-icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  display: grid;\n  place-items: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: .2s var(--ease);\n}\n.xh-icon-btn:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.burger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: #fff;\n  border: 1.5px solid var(--line);\n  border-radius: 12px;\n  width: 44px;\n  height: 44px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.burger span {\n  width: 20px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n}\nfooter {\n  background: #3B63E8;\n  color: #fff;\n  padding: 48px 0 28px;\n  font-size: 14px;\n}\n.nf-top {\n  margin-bottom: 28px;\n}\n.nf-logo {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.nf-logo img {\n  height: 46px;\n  width: auto;\n  background: #fff;\n  padding: 5px 8px;\n  border-radius: 8px;\n}\n.nf-tag {\n  font-size: 12px;\n  color: #DCE6FF;\n  line-height: 1.5;\n}\n.nf-tag em {\n  color: #BBD0FF;\n  font-style: normal;\n  font-size: 11px;\n}\n.nf-desc {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #E4ECFF;\n  margin: 0 0 20px;\n  max-width: 94ch;\n  text-align: justify;\n  text-align-last: left;\n}\n.nf-social {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.nfs {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  transition: .25s var(--ease);\n}\n.nfs:hover {\n  transform: translateY(-3px);\n}\n.nfs svg {\n  width: 15px;\n  height: 15px;\n}\n.nf-rows {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 22px;\n  margin-bottom: 6px;\n}\n.nf-row {\n  display: flex;\n  gap: 20px;\n  align-items: baseline;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.nf-rlbl {\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 15px;\n  color: #fff;\n  min-width: 130px;\n  flex: none;\n  margin: 0;\n}\n.nf-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  flex: 1;\n}\n.nf-links a {\n  color: #E4ECFF;\n  font-size: 14px;\n  transition: color .2s, padding .2s;\n}\n.nf-links a:before {\n  content: "\\203a";\n  color: #BBD0FF;\n  margin-right: 6px;\n}\n.nf-links a:hover {\n  color: #fff;\n  padding-left: 3px;\n}\n.nf-cert-row {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin: 16px 0;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(255, 255, 255, .1);\n  padding-top: 16px;\n}\n.nf-isos {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-iso {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #2E4FC4;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 62px;\n  color: #fff;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n}\n.nf-iso b {\n  font-size: 9px;\n  letter-spacing: .05em;\n  color: #BBD0FF;\n}\n.nf-pays {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-pay {\n  background: #fff;\n  color: #1C2A3A;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 6px;\n}\n.nf-bottom {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 12.5px;\n  color: #C3D3FF;\n}\n.wa-fab {\n  position: fixed;\n  left: 22px;\n  bottom: 22px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #25D366;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 12px 30px rgba(37, 211, 102, .4);\n  z-index: 120;\n  transition: transform .25s var(--ease);\n}\n.wa-fab:hover {\n  transform: scale(1.08);\n}\n.wa-fab svg {\n  width: 28px;\n  height: 28px;\n}\n.back-to-top {\n  position: fixed;\n  right: 22px;\n  bottom: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 10px 26px rgba(4, 30, 66, .14);\n  z-index: 120;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .25s, transform .25s var(--ease);\n}\n.back-to-top.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n.back-to-top:hover {\n  transform: translateY(-3px);\n}\n.hero {\n  position: relative;\n  padding: 60px 0 78px;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      1100px 640px at 82% 4%,\n      #eaf2ff 0%,\n      transparent 58%),\n    linear-gradient(\n      180deg,\n      #fbfcff,\n      #ffffff);\n}\n.crumb {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.crumb a:hover {\n  color: var(--blue);\n}\n.crumb .sep {\n  color: #b9c6dd;\n}\n.crumb .cur {\n  color: var(--blue);\n}\n.hero-inner {\n  position: relative;\n  z-index: 3;\n  display: grid;\n  grid-template-columns: 1fr 1.1fr;\n  gap: 44px;\n  align-items: center;\n}\n.hero h1 {\n  font-size: clamp(34px, 4.8vw, 56px);\n  font-weight: 800;\n  margin: 20px 0 16px;\n}\n.hero h1 .grad {\n  background:\n    linear-gradient(\n      120deg,\n      var(--blue),\n      #4f93ff);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero h1 .serif {\n  color: var(--navy);\n  font-weight: 400;\n  font-size: 1.04em;\n}\n.hero p.lead {\n  font-size: 17.5px;\n  color: var(--slate);\n  max-width: 520px;\n  margin-bottom: 22px;\n}\n.pills {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n.pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--navy);\n  background: #fff;\n  border: 1px solid var(--line);\n  padding: 7px 13px;\n  border-radius: 99px;\n  box-shadow: var(--shadow-s);\n}\n.pill svg {\n  width: 14px;\n  height: 14px;\n  color: var(--blue);\n}\n.pill.hi {\n  background:\n    linear-gradient(\n      135deg,\n      #fff4e6,\n      #fff);\n  border-color: #ffd9a8;\n  color: var(--orange-d);\n}\n.pill.hi svg {\n  color: var(--orange);\n}\n.hero-cta {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n.chips {\n  display: flex;\n  gap: 22px;\n  flex-wrap: wrap;\n}\n.chip {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--navy);\n}\n.chip .ci {\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  background: var(--blue-soft);\n  color: var(--blue);\n  flex-shrink: 0;\n}\n.chip .ci svg {\n  width: 16px;\n  height: 16px;\n}\n.showcase {\n  position: relative;\n}\n.sc-win {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.sc-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--line);\n  background: var(--ice);\n}\n.sc-bar .dots {\n  display: flex;\n  gap: 5px;\n}\n.sc-bar .dots i {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  display: block;\n}\n.sc-bar .crumbs {\n  font: 600 11px var(--mono);\n  color: var(--slate);\n}\n.sc-tabs {\n  display: flex;\n  gap: 2px;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--line);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.sc-tabs::-webkit-scrollbar {\n  display: none;\n}\n.sc-tab {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .03em;\n  color: var(--slate);\n  background: none;\n  border: 0;\n  padding: 6px 10px;\n  border-radius: 7px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: .2s;\n}\n.sc-tab:hover {\n  color: var(--blue);\n  background: var(--blue-soft);\n}\n.sc-tab.on {\n  background: var(--navy);\n  color: #fff;\n}\n.sc-body {\n  padding: 16px;\n}\n.sc-h {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.sc-h b {\n  font-family: var(--disp);\n  font-size: 13.5px;\n  color: var(--navy);\n}\n.sc-h .live {\n  font: 600 10px var(--mono);\n  color: var(--green-d);\n  background: #E4F7EC;\n  padding: 4px 10px;\n  border-radius: 99px;\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n}\n.sc-h .live i {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--green);\n  animation: blink 1.4s infinite;\n  display: block;\n}\n.sc-plats {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.sc-plat {\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 8px;\n  text-align: center;\n  background: #fff;\n  transition: .2s var(--ease);\n}\n.sc-plat:hover {\n  border-color: var(--blue);\n  transform: translateY(-2px);\n}\n.sc-plat .pi {\n  width: 26px;\n  height: 26px;\n  border-radius: 8px;\n  margin: 0 auto 6px;\n  display: grid;\n  place-items: center;\n  font: 700 11px var(--disp);\n  color: #fff;\n}\n.sc-plat b {\n  display: block;\n  font: 800 16px var(--disp);\n  color: var(--navy);\n  line-height: 1.1;\n}\n.sc-plat span {\n  display: block;\n  font: 500 8.5px var(--mono);\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-top: 3px;\n}\n.sc-grid {\n  display: grid;\n  grid-template-columns: .8fr 1.2fr;\n  gap: 12px;\n}\n.sc-card {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 14px;\n  background: #fff;\n}\n.sc-card .t {\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 10px;\n}\n.sc-donut {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sc-donut svg {\n  width: 100%;\n  max-width: 128px;\n}\n.sc-donut .dv {\n  margin-top: -72px;\n  margin-bottom: 34px;\n  text-align: center;\n}\n.sc-donut .dv b {\n  font: 800 22px var(--disp);\n  color: var(--green-d);\n  display: block;\n  line-height: 1;\n}\n.sc-donut .dv span {\n  font: 500 9px var(--mono);\n  color: var(--slate);\n}\n.sc-rows div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 0;\n  border-bottom: 1px dashed var(--line);\n  font-size: 11.5px;\n}\n.sc-rows div:last-child {\n  border-bottom: 0;\n}\n.sc-rows b {\n  color: var(--navy);\n  font-weight: 600;\n}\n.sc-rows .st {\n  font: 600 9.5px var(--mono);\n  border-radius: 99px;\n  padding: 3px 9px;\n}\n.st.ok {\n  background: #E4F7EC;\n  color: var(--green-d);\n}\n.st.warn {\n  background: #FFF3E0;\n  color: var(--orange-d);\n}\n.st.bad {\n  background: #FDECEC;\n  color: var(--red);\n}\n.sc-foot {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  margin-top: 12px;\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.sc-foot div {\n  text-align: center;\n  flex: 1;\n  min-width: 80px;\n}\n.sc-foot b {\n  display: block;\n  font: 800 16px var(--disp);\n  color: var(--navy);\n  line-height: 1.1;\n}\n.sc-foot span {\n  font: 500 8.5px var(--mono);\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.sc-float {\n  position: absolute;\n  right: -10px;\n  top: -18px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 12px 16px;\n  box-shadow: var(--shadow-m);\n  z-index: 5;\n  animation: scfloat 7s ease-in-out infinite;\n  text-align: center;\n}\n.sc-float b {\n  display: block;\n  font: 800 22px var(--disp);\n  color: var(--navy);\n  line-height: 1;\n}\n.sc-float span {\n  font: 500 9.5px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.sc-float .up {\n  color: var(--green-d);\n  font-size: 11px;\n  font-weight: 600;\n}\nsection {\n  position: relative;\n}\n.pad {\n  padding: 42px 0 42px 0;\n}\n.pad-ice {\n  background: var(--ice);\n}\n.pad-navy {\n  background:\n    linear-gradient(\n      160deg,\n      var(--navy),\n      #0C2C5C 70%);\n  color: #fff;\n}\n.head {\n  text-align: center;\n  max-width: 1000px;\n  margin: 0 auto 46px;\n}\n.head h2 {\n  font-size: clamp(26px, 3.4vw, 38px);\n  margin-bottom: 14px;\n}\n.head h2 .hl {\n  position: relative;\n  color: var(--blue);\n}\n.head h2 .hl:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  height: 8px;\n  background: rgba(255, 140, 26, .28);\n  z-index: -1;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n.head.in h2 .hl:after {\n  animation: hlsweep .8s .3s var(--ease) forwards;\n}\n.head .u {\n  width: 54px;\n  height: 4px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  margin: 0 auto 18px;\n}\n.head p {\n  max-width: 730px;\n  margin-right: auto;\n  margin-left: auto;\n  color: var(--slate);\n  font-size: 16px;\n}\n.head.left {\n  text-align: left;\n  margin: 0 0 40px;\n}\n.head.left .u {\n  margin: 0 0 18px;\n}\n.head.left p {\n  margin-left: 0;\n}\n.pad-navy .head h2 {\n  color: #fff;\n}\n.pad-navy .head p {\n  color: #c7d5ec;\n}\n.kicker {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 10px;\n  display: block;\n}\n.pad-navy .kicker {\n  color: #7FB2FF;\n}\n.pp-trust {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust .wrap {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust b {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.pillars {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n.pillar {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 22px;\n  background: #fff;\n  position: relative;\n  overflow: hidden;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n}\n.pillar:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform .4s var(--ease);\n}\n.pillar:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.pillar:hover:before {\n  transform: scaleX(1);\n}\n.pillar .pi {\n  width: 50px;\n  height: 50px;\n  border-radius: 15px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 16px;\n  transition: .3s var(--ease);\n}\n.pillar .pi svg {\n  width: 24px;\n  height: 24px;\n}\n.pillar:hover .pi {\n  transform: rotate(-6deg) scale(1.06);\n}\n.pillar h3 {\n  font-size: 17px;\n  margin-bottom: 8px;\n}\n.pillar p {\n  font-size: 13.3px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.mods {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.mod {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px 22px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n  position: relative;\n  overflow: hidden;\n}\n.mod:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform .4s var(--ease);\n}\n.mod:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.mod:hover:before {\n  transform: scaleX(1);\n}\n.mod.hide {\n  display: none;\n}\n.mod.show {\n  animation: fadein .45s var(--ease) both;\n}\n.mod-h {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  margin-bottom: 12px;\n}\n.mod-ic {\n  flex: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: grid;\n  place-items: center;\n  transition: .3s var(--ease);\n}\n.mod-ic svg {\n  width: 22px;\n  height: 22px;\n}\n.mod:hover .mod-ic {\n  transform: rotate(-6deg) scale(1.06);\n}\n.mod-h h3 {\n  font-size: 16.5px;\n  margin-bottom: 3px;\n}\n.mod-h .cat {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--blue);\n  background: var(--blue-soft);\n  border-radius: 99px;\n  padding: 3px 9px;\n  display: inline-block;\n}\n.mod > p {\n  font-size: 13.3px;\n  color: var(--slate);\n  line-height: 1.6;\n  margin-bottom: 14px;\n}\n.mod ul {\n  list-style: none;\n  margin: 0 0 16px;\n  flex: 1;\n}\n.mod ul li {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.55;\n  padding: 5px 0 5px 20px;\n  position: relative;\n}\n.mod ul li:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 11px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 2px solid var(--blue);\n  background: #fff;\n}\n.mod-foot {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n  padding-top: 12px;\n  border-top: 1px dashed var(--line);\n}\n.mod-foot span {\n  font: 600 10px var(--mono);\n  letter-spacing: .04em;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 4px 10px;\n}\n.i-blue {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.i-purple {\n  background: #F1EBFE;\n  color: var(--purple);\n}\n.i-green {\n  background: #E4F7EC;\n  color: var(--green-d);\n}\n.i-amber {\n  background: #FFF3E0;\n  color: var(--orange-d);\n}\n.i-red {\n  background: #FDECEC;\n  color: var(--red);\n}\n.i-teal {\n  background: #E2F6F5;\n  color: var(--teal);\n}\n.i-slate {\n  background: #EAEEF6;\n  color: #3B4A63;\n}\n.ptabs {\n  display: flex;\n  gap: 8px;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.ptab {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  font: 600 13.5px var(--body);\n  color: var(--slate);\n  background: rgba(255, 255, 255, .06);\n  border: 1px solid rgba(194, 216, 247, .22);\n  padding: 11px 20px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .22s var(--ease);\n}\n.ptab:hover {\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n  transform: translateY(-2px);\n}\n.ptab.on {\n  background: #fff;\n  border-color: #fff;\n  color: var(--navy);\n}\n.ptab .pm {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  display: grid;\n  place-items: center;\n  font: 700 9px var(--disp);\n  color: #fff;\n  flex: none;\n}\n.ppanel {\n  display: none;\n}\n.ppanel.on {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 16px;\n  animation: fadein .45s var(--ease) both;\n}\n.pcell {\n  border: 1px solid rgba(194, 216, 247, .22);\n  border-radius: 16px;\n  padding: 24px 22px;\n  background: rgba(255, 255, 255, .05);\n  transition: .28s var(--ease);\n}\n.pcell:hover {\n  background: rgba(255, 255, 255, .1);\n  transform: translateY(-4px);\n}\n.pcell .v {\n  font: 600 10px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #7FB2FF;\n  margin-bottom: 9px;\n  display: block;\n}\n.pcell b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.pcell span {\n  font-size: 13px;\n  color: #a9c2e8;\n  line-height: 1.6;\n}\n.pnote {\n  text-align: center;\n  margin-top: 24px;\n}\n.spots {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.spot {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 24px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  transition: transform .28s var(--ease), box-shadow .28s;\n}\n.spot:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n}\n.spot h3 {\n  font-size: 17px;\n  margin-bottom: 9px;\n}\n.spot > p {\n  font-size: 13.3px;\n  color: var(--slate);\n  line-height: 1.6;\n  margin-bottom: 14px;\n}\n.spot ul {\n  list-style: none;\n  margin: 0 0 18px;\n  flex: 1;\n}\n.spot ul li {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.55;\n  padding: 5px 0 5px 22px;\n  position: relative;\n}\n.spot ul li:before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: var(--green-d);\n  font-weight: 700;\n  font-size: 11px;\n}\n.spot .proof {\n  font: 700 13px var(--disp);\n  color: var(--navy);\n  background:\n    linear-gradient(\n      135deg,\n      #FFF4E6,\n      #fff);\n  border: 1px solid #ffd9a8;\n  border-radius: 12px;\n  padding: 11px 14px;\n  text-align: center;\n}\n.teams {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.team {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 20px;\n  background: #fff;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n}\n.team:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.team .tg {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--purple);\n  background: #F1EBFE;\n  border-radius: 99px;\n  padding: 4px 10px;\n  display: inline-block;\n  margin-bottom: 11px;\n}\n.team b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: var(--navy);\n  margin-bottom: 7px;\n}\n.team span {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.uses {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.uc {\n  border: 1.5px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 20px;\n  background: var(--ice);\n  transition: .28s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.uc:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n  background: #fff;\n}\n.uc .ui {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 13px;\n  font-size: 19px;\n}\n.uc b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15.5px;\n  color: var(--navy);\n  margin-bottom: 9px;\n}\n.uc ul {\n  list-style: none;\n  margin: 0;\n  flex: 1;\n}\n.uc ul li {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 4px 0 4px 18px;\n  position: relative;\n}\n.uc ul li:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 10px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: var(--blue);\n}\n.mig {\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  gap: 44px;\n  align-items: center;\n}\n.mig-list {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.mig-item {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.mig-item .n {\n  flex: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font: 800 15px var(--disp);\n  transition: .3s var(--ease);\n}\n.mig-item:hover .n {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  transform: translateY(-3px);\n}\n.mig-item h4 {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.mig-item p {\n  font-size: 13.3px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.mig-quote {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 30px;\n  background: #fff;\n  box-shadow: var(--shadow-s);\n}\n.mig-quote .q {\n  font: 400 19px/1.5 var(--disp);\n  color: var(--navy);\n  letter-spacing: -.01em;\n  margin-bottom: 16px;\n}\n.mig-quote .who {\n  font-size: 12.5px;\n  color: var(--slate);\n  font-family: var(--mono);\n}\n.mig-quote .bar {\n  height: 4px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  width: 54px;\n  margin-bottom: 18px;\n}\n.why {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.wc {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 20px;\n  background: #fff;\n  transition: .28s var(--ease);\n}\n.wc:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.wc b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: var(--navy);\n  margin-bottom: 10px;\n}\n.wc .l {\n  font-size: 12.8px;\n  color: var(--slate);\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 3px 0;\n}\n.wc .l svg {\n  width: 14px;\n  height: 14px;\n  flex: none;\n  margin-top: 3px;\n  color: var(--blue);\n}\n.results {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.rc {\n  border: 1px solid rgba(194, 216, 247, .22);\n  border-radius: 16px;\n  padding: 26px 20px;\n  text-align: center;\n  background: rgba(255, 255, 255, .05);\n  transition: .28s var(--ease);\n}\n.rc:hover {\n  background: rgba(255, 255, 255, .1);\n  transform: translateY(-4px);\n}\n.rc b {\n  display: block;\n  font: 800 34px var(--disp);\n  color: #fff;\n  line-height: 1;\n  letter-spacing: -.03em;\n}\n.rc span {\n  display: block;\n  margin-top: 9px;\n  font-size: 12.8px;\n  color: #a9c2e8;\n  line-height: 1.5;\n}\n.marq-wrap {\n  overflow: hidden;\n  position: relative;\n  margin-top: 8px;\n}\n.marq-wrap:before,\n.marq-wrap:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 110px;\n  z-index: 2;\n  pointer-events: none;\n}\n.marq-wrap:before {\n  left: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #fff,\n      transparent);\n}\n.marq-wrap:after {\n  right: 0;\n  background:\n    linear-gradient(\n      270deg,\n      #fff,\n      transparent);\n}\n.track {\n  display: flex;\n  gap: 12px;\n  width: max-content;\n  animation: marq 40s linear infinite;\n}\n.marq-wrap:hover .track {\n  animation-play-state: paused;\n}\n.ilogo {\n  flex: 0 0 auto;\n  min-width: 152px;\n  height: 62px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 13.5px;\n  color: var(--navy);\n  box-shadow: var(--shadow-s);\n  transition: .25s var(--ease);\n  padding: 0 16px;\n}\n.ilogo:hover {\n  border-color: #c9dcfb;\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-m);\n  color: var(--blue);\n}\n.ilogo .dotmark {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.ptoggle {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 28px;\n}\n.ptoggle .sw {\n  display: inline-flex;\n  border: 1.5px solid var(--line);\n  border-radius: 99px;\n  padding: 4px;\n  background: #fff;\n}\n.ptoggle button {\n  border: 0;\n  background: none;\n  font: 600 13px var(--body);\n  color: var(--slate);\n  padding: 9px 22px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .22s var(--ease);\n}\n.ptoggle button.on {\n  background: var(--navy);\n  color: #fff;\n}\n.ptoggle .save {\n  font: 600 10px var(--mono);\n  letter-spacing: .06em;\n  color: var(--green-d);\n  background: #E4F7EC;\n  border-radius: 99px;\n  padding: 3px 8px;\n  margin-left: 7px;\n}\n.price {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  align-items: stretch;\n  min-width: 0;\n  margin-bottom: 0;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  white-space: normal;\n}\n.tier {\n  min-width: 0;\n  height: 100%;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 28px 24px;\n  box-shadow: var(--shadow-s);\n  position: relative;\n  transition: .3s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.tier:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n  border-color: #c9dcfb;\n}\n.tier.pop {\n  border: 2px solid var(--blue);\n  box-shadow: var(--shadow-m);\n  transform: translateY(-10px);\n}\n.tier.pop:hover {\n  transform: translateY(-16px);\n}\n.tier .tag {\n  position: absolute;\n  top: -13px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  font-family: var(--mono);\n  font-size: 10.5px;\n  font-weight: 600;\n  letter-spacing: .08em;\n  padding: 6px 16px;\n  border-radius: 99px;\n  box-shadow: 0 10px 22px -8px rgba(255, 140, 26, .8);\n}\n.tier h3 {\n  font-size: 19px;\n  margin-bottom: 6px;\n  white-space: nowrap;\n}\n.tier .sub {\n  font-size: 12.3px;\n  color: var(--slate);\n  margin-bottom: 18px;\n  line-height: 1.55;\n  min-height: 56px;\n}\n.tier .amt {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n  min-height: 40px;\n  margin-bottom: 3px;\n}\n.tier .amt .cur {\n  font-family: var(--disp);\n  font-size: 20px;\n  color: var(--navy);\n  font-weight: 600;\n  margin-bottom: 6px;\n}\n.tier .amt .num {\n  font-family: var(--disp);\n  font-size: 40px;\n  font-weight: 800;\n  color: var(--navy);\n  line-height: 1;\n}\n.tier .amt del {\n  font-size: 15px;\n  color: #9AA8BE;\n  font-weight: 500;\n  margin-bottom: 7px;\n}\n.tier .amt.custom .num {\n  font-size: 28px;\n}\n.tier .per {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-bottom: 18px;\n}\n.tier .inc {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .04em;\n  color: var(--slate);\n  margin-bottom: 10px;\n  display: block;\n}\n.tier ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  margin-bottom: 18px;\n  flex: 1;\n}\n.tier li {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 12.8px;\n  color: var(--ink);\n  line-height: 1.5;\n}\n.tier li .ck {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #e4f7ec;\n  color: var(--green-d);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  margin-top: 2px;\n  transform: scale(0);\n}\n.tier.in li .ck {\n  animation: tickpop .4s var(--ease) forwards;\n}\n.tier.in li:nth-child(2) .ck {\n  animation-delay: .06s;\n}\n.tier.in li:nth-child(3) .ck {\n  animation-delay: .12s;\n}\n.tier.in li:nth-child(4) .ck {\n  animation-delay: .18s;\n}\n.tier.in li:nth-child(5) .ck {\n  animation-delay: .24s;\n}\n.tier li .ck svg {\n  width: 10px;\n  height: 10px;\n}\n.tier .btn {\n  width: 100%;\n}\n.price-note {\n  text-align: center;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: #8FA2BD;\n  margin-top: 24px;\n  line-height: 1.8;\n}\n.ctab {\n  overflow-x: auto;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  margin-top: 26px;\n  box-shadow: var(--shadow-s);\n}\n.ctab table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 680px;\n}\n.ctab th {\n  background: var(--ice);\n  font: 600 11px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n  text-align: left;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--line);\n  white-space: nowrap;\n}\n.ctab th:not(:first-child) {\n  text-align: center;\n}\n.ctab td {\n  padding: 12px 18px;\n  border-bottom: 1px solid var(--line);\n  font-size: 13px;\n  color: var(--slate);\n}\n.ctab tr:last-child td {\n  border-bottom: 0;\n}\n.ctab td:first-child {\n  color: var(--navy);\n  font-weight: 500;\n}\n.ctab td:not(:first-child) {\n  text-align: center;\n}\n.ctab .grp td {\n  background: var(--ice);\n  font: 600 10.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--navy);\n}\n.yes {\n  color: var(--green-d);\n  font-weight: 700;\n}\n.no {\n  color: #C8D3E3;\n}\n.tq {\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 38px;\n  background: #fff;\n  box-shadow: var(--shadow-s);\n  max-width: 900px;\n  margin: 0 auto;\n  text-align: center;\n}\n.tq .av {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--purple));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font: 700 20px var(--disp);\n}\n.tq p {\n  font: 400 19px/1.6 var(--disp);\n  color: var(--navy);\n  letter-spacing: -.01em;\n  margin-bottom: 18px;\n}\n.tq .who {\n  font-size: 13px;\n  color: var(--slate);\n}\n.tq .who b {\n  color: var(--navy);\n  font-family: var(--disp);\n}\n.faqgrid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.faq2 {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  align-self: start;\n  transition: border-color .25s, box-shadow .25s;\n}\n.faq2.open {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.faq2-ic {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: transform .3s, background .25s;\n}\n.faq2.open .faq2-ic {\n  transform: rotate(135deg);\n  background: var(--blue);\n  color: #fff;\n}\n.faq2-a {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s cubic-bezier(.4, 0, .2, 1);\n}\n.faq2.open .faq2-a {\n  max-height: 460px;\n}\n.faq2-a p {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.68;\n}\n.contact {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 22px;\n}\n.ccard {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 28px;\n  background: var(--ice);\n}\n.ccard h3 {\n  font-size: 20px;\n  margin-bottom: 6px;\n}\n.ccard > p {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 18px;\n}\n.clist {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.clist a {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 13px 16px;\n  transition: .2s var(--ease);\n}\n.clist a:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .1);\n  transform: translateY(-2px);\n}\n.clist .ci {\n  flex: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 15px;\n}\n.clist b {\n  display: block;\n  font-size: 14px;\n  color: var(--navy);\n}\n.clist span {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.cform {\n  display: grid;\n  gap: 12px;\n}\n.cform label {\n  display: block;\n  font: 600 11.5px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 5px;\n}\n.cform input,\n.cform select,\n.cform textarea {\n  width: 100%;\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font: 400 14px var(--body);\n  color: var(--ink);\n  background: #fff;\n  transition: .15s;\n}\n.cform input:focus,\n.cform select:focus,\n.cform textarea:focus {\n  outline: none;\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.cform textarea {\n  min-height: 84px;\n  resize: vertical;\n}\n.cform .row2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.formnote {\n  font-size: 12px;\n  color: var(--slate);\n  text-align: center;\n}\n.ctaband {\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy) 0%,\n      #123776 60%,\n      var(--blue) 100%);\n  border-radius: 22px;\n  padding: 34px 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.ctaband:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .5;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  animation: gridmove 30s linear infinite;\n}\n.ctaband .glow {\n  position: absolute;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 140, 26, .4),\n      transparent 65%);\n  filter: blur(30px);\n  right: -40px;\n  top: -60px;\n  animation: aflow2 12s ease-in-out infinite;\n}\n.ctaband .ct-l {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  z-index: 2;\n}\n.ctaband .cbico {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, .12);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.ctaband .cbico svg {\n  width: 30px;\n  height: 30px;\n  color: #fff;\n}\n.ctaband h3 {\n  color: #fff;\n  font-size: 23px;\n  margin-bottom: 4px;\n}\n.ctaband p {\n  color: rgba(255, 255, 255, .75);\n  font-size: 14px;\n  max-width: 460px;\n}\n.ctaband .ct-r {\n  display: flex;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n  flex-wrap: wrap;\n}\n.pp-proof {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 26px;\n}\n.pp-proof span {\n  font: 600 12px var(--body);\n  color: var(--slate);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  background: #fff;\n}\n@media (min-width: 861px) {\n  .head h2 {\n    white-space: nowrap;\n  }\n}\n@media (max-width: 1100px) {\n  .xh-main-nav {\n    display: none;\n  }\n  .burger {\n    display: flex;\n  }\n  .mods {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pillars {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .spots {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .teams {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .uses {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .why {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .price {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .results {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1024px) {\n  .hero-inner {\n    grid-template-columns: 1fr;\n    gap: 54px;\n  }\n  .mig {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .sc-plats {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .ppanel.on {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 860px) {\n  .price {\n    grid-template-columns: 1fr;\n    max-width: 440px;\n    margin: 0 auto;\n  }\n  .tier.pop {\n    transform: none;\n  }\n  .tier .sub {\n    min-height: 0;\n  }\n  .ctaband {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .faqgrid {\n    grid-template-columns: 1fr;\n  }\n  .contact {\n    grid-template-columns: 1fr;\n  }\n  .sc-grid {\n    grid-template-columns: 1fr;\n  }\n  .sc-float {\n    position: static;\n    margin-bottom: 12px;\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .pad {\n    padding: 30px 0 30px 0;\n  }\n  .mods,\n  .pillars,\n  .spots,\n  .teams,\n  .uses,\n  .why,\n  .results {\n    grid-template-columns: 1fr;\n  }\n  .sc-plats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero {\n    padding: 40px 0 60px;\n  }\n  .hero-cta .btn {\n    width: 100%;\n  }\n  .cform .row2 {\n    grid-template-columns: 1fr;\n  }\n  .tq {\n    padding: 26px 20px;\n  }\n  .tq p {\n    font-size: 16px;\n  }\n  .nf-bottom {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .xh-nav-wrap {\n    height: 64px;\n    padding: 0 14px;\n    gap: 10px;\n  }\n  .xh-brand img {\n    height: 52px;\n  }\n  header.xh-header.scrolled .xh-brand img {\n    height: 46px;\n  }\n  .xh-actions .btn {\n    display: none;\n  }\n  .xh-icon-btn,\n  .burger {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n  }\n  .promo {\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n  .mig-quote {\n    padding: 22px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n    transition: none !important;\n  }\n  .rv {\n    opacity: 1;\n    transform: none;\n  }\n  .tier li .ck {\n    transform: none;\n  }\n}\n:host {\n  display: block;\n  overflow: hidden;\n}\n.rv {\n  opacity: 1;\n  transform: none;\n}\n.mdm-original-hero ::ng-deep .ppage > :not(.pp-hero):not(.pp-trust) {\n  display: none;\n}\n.mdm-blog-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.mdm-blog-grid article {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px;\n  box-shadow: var(--shadow-s);\n}\n.mdm-blog-grid article > span {\n  display: inline-block;\n  color: var(--blue);\n  background: var(--blue-soft);\n  font: 600 12px var(--mono);\n  padding: 5px 9px;\n  border-radius: 999px;\n  margin-bottom: 14px;\n}\n.mdm-blog-grid h3 {\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n.mdm-blog-grid p {\n  color: var(--slate);\n  font-size: 14px;\n  margin-bottom: 18px;\n}\n.mdm-blog-grid a {\n  color: var(--blue);\n  font-weight: 700;\n}\n.mdm-blog-action {\n  text-align: center;\n  margin-top: 24px;\n}\n.mdm-buddha-section {\n  padding: 26px 0 41px 0;\n  background: #fff;\n}\n.mdm-buddha {\n  position: relative;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 112px;\n  align-items: center;\n  gap: 28px;\n  min-height: 194px;\n  padding: 30px 28px 30px 36px;\n  border-radius: 17px;\n  background:\n    linear-gradient(\n      105deg,\n      #2168d8,\n      #0c469f);\n  color: #fff;\n  box-shadow: 0 18px 45px -28px rgba(4, 30, 66, .55);\n}\n.mdm-buddha-copy {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.mdm-buddha h2 {\n  margin: 0 0 5px;\n  color: #fff;\n  font-size: 22px;\n  letter-spacing: -.025em;\n}\n.mdm-buddha p {\n  color: #dceaff;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.mdm-buddha-mark {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: 104px;\n  height: 104px;\n  border-radius: 50%;\n  transition: transform .2s ease, filter .2s ease;\n}\n.mdm-buddha-mark:hover {\n  transform: scale(1.06);\n  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, .22));\n}\n.mdm-buddha-mark:focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 4px;\n}\n.mdm-buddha-mark img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.mdm-buddha-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 30px;\n}\n.mdm-buddha-actions .btn {\n  min-height: 45px;\n  padding: 10px 20px;\n  border-radius: 9px;\n  font-size: 13px;\n}\n.mdm-buddha-actions button.btn-outline {\n  font: 600 13px var(--body);\n}\n.mdm-buddha-proof {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 21px;\n}\n.mdm-buddha-proof span {\n  padding: 7px 16px;\n  border: 1px solid var(--line);\n  border-radius: 999px;\n  background: #fff;\n  color: var(--slate);\n  font-size: 11.5px;\n  font-weight: 600;\n  line-height: 1.4;\n}\n@media (max-width: 800px) {\n  .mdm-blog-grid {\n    grid-template-columns: 1fr;\n  }\n  .mdm-buddha {\n    grid-template-columns: 1fr;\n    padding: 28px 22px;\n  }\n  .mdm-buddha-mark {\n    width: 80px;\n    height: 80px;\n    margin: 0 auto;\n  }\n  .mdm-buddha-actions .btn {\n    flex: 1 1 145px;\n  }\n  .mdm-buddha-proof {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=cloud-mdm.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CloudMdmPage, { className: "CloudMdmPage", filePath: "src/app/pages/cloud-mdm.page.ts", lineNumber: 18 });
})();
export {
  CloudMdmPage
};
//# sourceMappingURL=chunk-QAC3HNPL.js.map
