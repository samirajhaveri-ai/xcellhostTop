import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  LeadService
} from "./chunk-MAWJHU3X.js";
import {
  DocRequestService
} from "./chunk-FGJ7AN27.js";
import "./chunk-LN7P5EZP.js";
import "./chunk-WBGN3H4A.js";
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
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/cloud-login.page.ts
var _forTrack0 = ($index, $item) => $item.country;
var _forTrack1 = ($index, $item) => $item.code;
function CloudLoginPage_For_94_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 42)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Open console");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 51);
    \u0275\u0275element(6, "path", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const center_r1 = ctx.$implicit;
    const region_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", center_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "Log in to " + region_r2.country + " " + center_r1.code + " (opens in a new tab)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(center_r1.code);
  }
}
function CloudLoginPage_For_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 34)(1, "div", 47);
    \u0275\u0275element(2, "img", 48);
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 49);
    \u0275\u0275repeaterCreate(9, CloudLoginPage_For_94_For_10_Template, 7, 3, "a", 42, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const region_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "/assets/images/flags/" + region_r2.flag + ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(region_r2.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(region_r2.centers.length === 1 ? "1 data center" : region_r2.centers.length + " data centers");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(region_r2.centers);
  }
}
var CloudLoginPage = class _CloudLoginPage {
  overlay = inject(OverlayService);
  docs = inject(DocRequestService);
  topics = inject(CallbackTopicService);
  leads = inject(LeadService);
  whatsappHref = this.leads.whatsappLink("Hi XcellHost, I need assistance with Acronis Cyber Protect Cloud.");
  emailHref = this.leads.mailtoLink("Acronis Cyber Protect Cloud enquiry", "Hi XcellHost, I would like assistance with Acronis Cyber Protect Cloud.");
  openCallback() {
    this.topics.ask("Acronis Cyber Protect Cloud");
    this.overlay.open("callback");
  }
  requestDoc(kind) {
    this.docs.ask(kind, "Acronis Cyber Protect Cloud");
    this.overlay.open("doc");
  }
  regions = [
    { country: "India", flag: "in", centers: [{ code: "IN01", url: "https://in01-cloud.acronis.com" }] },
    { country: "Singapore", flag: "sg", centers: [{ code: "SG", url: "https://sg-cloud.acronis.com" }] },
    { country: "Australia", flag: "au", centers: [{ code: "AU1", url: "https://au1-cloud.acronis.com" }] },
    { country: "France", flag: "fr", centers: [{ code: "EU", url: "https://eu-cloud.acronis.com" }] },
    { country: "United Kingdom", flag: "gb", centers: [{ code: "EU", url: "https://eu-cloud.acronis.com" }] },
    { country: "Germany", flag: "de", centers: [{ code: "EU2", url: "https://eu2-cloud.acronis.com" }, { code: "EU4", url: "https://eu4-cloud.acronis.com" }] },
    { country: "Switzerland", flag: "ch", centers: [{ code: "EU5", url: "https://eu5-cloud.acronis.com" }] },
    { country: "Japan", flag: "jp", centers: [{ code: "JP", url: "https://jp-cloud.acronis.com" }] },
    { country: "Russia", flag: "ru", centers: [{ code: "RU2", url: "https://ru2-cloud.acronis.com" }] },
    { country: "USA", flag: "us", centers: [{ code: "US2", url: "https://us-cloud.acronis.com" }, { code: "US3", url: "https://us3-cloud.acronis.com" }, { code: "US4", url: "https://us4-cloud.acronis.com" }, { code: "US5", url: "https://us5-cloud.acronis.com" }] }
  ];
  constructor() {
    inject(SeoService).set("Acronis Cloud Login by Region | XcellHost", "Choose your regional Acronis Cyber Protect Cloud console. Find login links by country and data center, with support from XcellHost.", "/cloud-login/");
  }
  static \u0275fac = function CloudLoginPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CloudLoginPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CloudLoginPage, selectors: [["xh-cloud-login-page"]], decls: 133, vars: 2, consts: [[1, "login-hero"], [1, "login-wrap"], ["aria-label", "Breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], [1, "hero-layout"], [1, "hero-copy"], [1, "hero-label"], ["href", "#region-heading", 1, "hero-region-button"], [1, "hero-meta"], ["aria-hidden", "true", 1, "hero-network"], [1, "network-orbit", "orbit-one"], [1, "network-orbit", "orbit-two"], ["viewBox", "0 0 500 400", "fill", "none", 1, "network-lines"], ["d", "M250 190 85 80M250 190 410 90M250 190 80 310M250 190 415 310", "stroke", "#639fff", "stroke-width", "1.5", "stroke-dasharray", "5 7"], [1, "network-hub"], ["viewBox", "0 0 64 64", "fill", "none"], ["d", "M18 44H15a11 11 0 0 1-1-22 18 18 0 0 1 35-2 12 12 0 0 1 0 24h-3", "stroke", "currentColor", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "m32 29 11 5v8c0 8-11 13-11 13s-11-5-11-13v-8z", "fill", "#123b72", "stroke", "currentColor", "stroke-width", "2.5"], ["d", "m27 41 4 4 7-8", "stroke", "#74e3bc", "stroke-width", "2.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "network-region", "region-india"], ["src", "/assets/images/flags/in.svg", "alt", ""], [1, "network-region", "region-europe"], ["src", "/assets/images/flags/de.svg", "alt", ""], [1, "network-region", "region-singapore"], ["src", "/assets/images/flags/sg.svg", "alt", ""], [1, "network-region", "region-usa"], ["src", "/assets/images/flags/us.svg", "alt", ""], [1, "network-caption"], ["aria-labelledby", "region-heading", 1, "region-section", "login-wrap"], [1, "section-heading"], [1, "eyebrow"], ["id", "region-heading"], [1, "region-grid"], [1, "region-card"], ["aria-labelledby", "cloud-cta-title", 1, "cloud-cta"], [1, "cta-copy"], ["id", "cloud-cta-title"], [1, "cta-actions"], ["type", "button", 1, "cta-primary", 3, "click"], ["routerLink", "/pricing"], ["type", "button", 3, "click"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [3, "href"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "cta-support"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost 24-hour delightful support", "width", "104", "height", "104"], ["aria-label", "XcellHost credentials and payment options", 1, "pp-proof"], [1, "country-heading"], ["alt", "", "width", "48", "height", "32", 3, "src"], [1, "login-links"], [1, "dc-code"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "aria-hidden", "true"], ["d", "M14 4h6v6M20 4l-9 9M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function CloudLoginPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Cloud Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "div", 7);
      \u0275\u0275element(12, "span", 4);
      \u0275\u0275text(13, "ACRONIS CYBER PROTECT CLOUD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h1");
      \u0275\u0275text(15, "Your cloud.");
      \u0275\u0275element(16, "br");
      \u0275\u0275text(17, "Your region.");
      \u0275\u0275element(18, "br");
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Your console.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "p");
      \u0275\u0275text(22, "Access your Acronis workspace through the data center associated with your account.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 8);
      \u0275\u0275text(24, "Choose your region ");
      \u0275\u0275elementStart(25, "span", 4);
      \u0275\u0275text(26, "\u2193");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 9)(28, "span")(29, "b");
      \u0275\u0275text(30, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " countries");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "i", 4);
      \u0275\u0275elementStart(33, "span")(34, "b");
      \u0275\u0275text(35, "14");
      \u0275\u0275elementEnd();
      \u0275\u0275text(36, " regional login options");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 10);
      \u0275\u0275element(38, "div", 11)(39, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 13);
      \u0275\u0275element(41, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(42, "div", 15);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(43, "svg", 16);
      \u0275\u0275element(44, "path", 17)(45, "path", 18)(46, "path", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(47, "strong");
      \u0275\u0275text(48, "Acronis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "span");
      \u0275\u0275text(50, "CYBER PROTECT CLOUD");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 20);
      \u0275\u0275element(52, "img", 21);
      \u0275\u0275elementStart(53, "div")(54, "b");
      \u0275\u0275text(55, "India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "small");
      \u0275\u0275text(57, "IN01");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 22);
      \u0275\u0275element(59, "img", 23);
      \u0275\u0275elementStart(60, "div")(61, "b");
      \u0275\u0275text(62, "Germany");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "small");
      \u0275\u0275text(64, "EU2 \xB7 EU4");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "div", 24);
      \u0275\u0275element(66, "img", 25);
      \u0275\u0275elementStart(67, "div")(68, "b");
      \u0275\u0275text(69, "Singapore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "small");
      \u0275\u0275text(71, "SG");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "div", 26);
      \u0275\u0275element(73, "img", 27);
      \u0275\u0275elementStart(74, "div")(75, "b");
      \u0275\u0275text(76, "USA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "small");
      \u0275\u0275text(78, "US2 \xB7 US3 \xB7 US4 \xB7 US5");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "div", 28);
      \u0275\u0275text(80, "GLOBAL ACCESS. YOUR REGIONAL CONSOLE.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(81, "section", 29)(82, "div", 30)(83, "div")(84, "span", 31);
      \u0275\u0275text(85, "REGIONAL ACCESS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "h2", 32);
      \u0275\u0275text(87, "Where is your account hosted?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "p");
      \u0275\u0275text(89, "Choose your assigned data center.");
      \u0275\u0275element(90, "br");
      \u0275\u0275text(91, "All login links open in a new tab.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "div", 33);
      \u0275\u0275repeaterCreate(93, CloudLoginPage_For_94_Template, 11, 3, "article", 34, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "aside", 35)(96, "div", 36)(97, "h2", 37);
      \u0275\u0275text(98, "Ready to start with Acronis Cyber Protect Cloud?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 38)(102, "button", 39);
      \u0275\u0275listener("click", function CloudLoginPage_Template_button_click_102_listener() {
        return ctx.openCallback();
      });
      \u0275\u0275text(103, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "a", 40)(105, "span", 4);
      \u0275\u0275text(106, "\u26A1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(107, " Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "button", 41);
      \u0275\u0275listener("click", function CloudLoginPage_Template_button_click_108_listener() {
        return ctx.requestDoc("infosheet");
      });
      \u0275\u0275elementStart(109, "span", 4);
      \u0275\u0275text(110, "\u2193");
      \u0275\u0275elementEnd();
      \u0275\u0275text(111, " Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "button", 41);
      \u0275\u0275listener("click", function CloudLoginPage_Template_button_click_112_listener() {
        return ctx.requestDoc("presentation");
      });
      \u0275\u0275elementStart(113, "span", 4);
      \u0275\u0275text(114, "\u25A3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(115, " Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "a", 42);
      \u0275\u0275text(117, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "a", 43);
      \u0275\u0275text(119, "Email Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "a", 44);
      \u0275\u0275element(121, "img", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 46)(123, "span");
      \u0275\u0275text(124, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "span");
      \u0275\u0275text(128, "\u{1F91D} Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "span");
      \u0275\u0275text(130, "\u25CF Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(93);
      \u0275\u0275repeater(ctx.regions);
      \u0275\u0275advance(23);
      \u0275\u0275property("href", ctx.whatsappHref, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.emailHref, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  background: #f5f8fd;\n  color: #102d50;\n  font-family: var(--body,"IBM Plex Sans",sans-serif);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.login-wrap[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.login-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 26px 0 56px;\n  background:\n    radial-gradient(\n      ellipse at 80% 45%,\n      #153f77 0,\n      transparent 55%),\n    linear-gradient(\n      120deg,\n      #06192f,\n      #09264d);\n  color: #fff;\n}\n.login-hero[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  opacity: .22;\n  background-image:\n    linear-gradient(#527fb326 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #527fb326 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000);\n}\n.login-hero[_ngcontent-%COMP%]   .login-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.hero-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  align-items: center;\n  gap: 48px;\n}\n.hero-copy[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.hero-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font: 600 10px/1.5 var(--mono,monospace);\n  letter-spacing: .12em;\n  color: #a7ceff;\n}\n.hero-label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #75dabe;\n  box-shadow: 0 0 0 5px #75dabe14;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(38px, 4.2vw, 58px);\n  line-height: 1.06;\n  margin: 22px 0;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #82bfff;\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 460px;\n  font-size: 16px;\n}\n.hero-region-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 26px;\n  background: #ff9217;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 10px;\n  padding: 14px 22px;\n  margin-top: 26px;\n  font-size: 14px;\n  font-weight: 700;\n  box-shadow: 0 8px 28px #0003;\n}\n.hero-region-button[_ngcontent-%COMP%]:hover {\n  background: #ed8008;\n}\n.hero-region-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.hero-copy[_ngcontent-%COMP%]   .hero-meta[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: #a6bddb;\n}\n.hero-meta[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 15px;\n  margin-right: 3px;\n}\n.hero-network[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 500px;\n  aspect-ratio: 5/4;\n  justify-self: center;\n}\n.network-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.network-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #74b3ff24;\n  border-radius: 50%;\n  left: 50%;\n  top: 48%;\n  transform: translate(-50%, -50%);\n}\n.orbit-one[_ngcontent-%COMP%] {\n  width: 65%;\n  aspect-ratio: 1;\n}\n.orbit-two[_ngcontent-%COMP%] {\n  width: 88%;\n  aspect-ratio: 1;\n  border-style: dashed;\n}\n.network-hub[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 48%;\n  transform: translate(-50%, -50%);\n  width: 180px;\n  height: 180px;\n  border: 1px solid #79b6ff66;\n  border-radius: 32px;\n  background:\n    linear-gradient(\n      145deg,\n      #204b80,\n      #0b2a52);\n  box-shadow: 0 24px 60px #0005, 0 0 60px #399bff1a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: #b5d9ff;\n}\n.network-hub[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  margin-bottom: 8px;\n}\n.network-hub[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font: 600 27px var(--disp,sans-serif);\n  color: #fff;\n}\n.network-hub[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font: 500 8px var(--mono,monospace);\n  letter-spacing: .09em;\n  margin-top: 7px;\n}\n.network-region[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 13px 15px;\n  border: 1px solid #779dd647;\n  border-radius: 13px;\n  background: #0b2548;\n  box-shadow: 0 14px 30px #0003;\n}\n.network-region[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 22px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.network-region[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  color: #edf5ff;\n}\n.network-region[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font: 10px var(--mono,monospace);\n  color: #8eb2dc;\n  margin-top: 5px;\n}\n.region-india[_ngcontent-%COMP%] {\n  left: 0;\n  top: 10%;\n}\n.region-europe[_ngcontent-%COMP%] {\n  right: 0;\n  top: 12%;\n}\n.region-singapore[_ngcontent-%COMP%] {\n  left: 0;\n  bottom: 13%;\n}\n.region-usa[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 10%;\n}\n.network-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -5%;\n  width: 100%;\n  text-align: center;\n  font: 9px var(--mono,monospace);\n  letter-spacing: .14em;\n  color: #7297c0;\n}\n#region-heading[_ngcontent-%COMP%] {\n  scroll-margin-top: 140px;\n}\n@media (max-width: 950px) {\n  .hero-layout[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .network-hub[_ngcontent-%COMP%] {\n    width: 145px;\n    height: 155px;\n  }\n  .network-region[_ngcontent-%COMP%] {\n    padding: 10px;\n    gap: 8px;\n  }\n  .network-region[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n}\n@media (max-width: 760px) {\n  .hero-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 34px;\n  }\n  .hero-network[_ngcontent-%COMP%] {\n    max-width: 440px;\n    margin: 0 auto 24px;\n  }\n  .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 44px;\n  }\n  .hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .network-hub[_ngcontent-%COMP%] {\n    width: 155px;\n    height: 165px;\n  }\n  .hero-label[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .network-caption[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #bdcfe8;\n  margin-bottom: 34px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  font: 700 11px/1.5 var(--mono,monospace);\n  letter-spacing: .16em;\n  color: #1565d8;\n}\n.login-hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #8bc5ff;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin: 0;\n}\nh1[_ngcontent-%COMP%] {\n  font: 700 clamp(32px, 4.5vw, 52px)/1.14 var(--disp,sans-serif);\n  letter-spacing: -.035em;\n  margin: 14px 0 20px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #79baff;\n}\n.login-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 590px;\n  color: #c4d5ec;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 26px;\n  color: #d9e9ff;\n  font-size: 12px;\n}\n.hero-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #ff981f;\n}\n.region-section[_ngcontent-%COMP%] {\n  padding-top: 23px;\n  padding-bottom: 30px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  gap: 24px;\n  margin-bottom: 26px;\n}\nh2[_ngcontent-%COMP%] {\n  font: 700 clamp(22px, 2.5vw, 28px)/1.3 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n  margin-top: 8px;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #63758e;\n}\n.region-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  align-items: stretch;\n}\n.region-card[_ngcontent-%COMP%] {\n  padding: 23px;\n  border: 1px solid #dce6f3;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(15, 46, 85, .035);\n}\n.country-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.country-heading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  object-fit: cover;\n  box-shadow: 0 0 0 1px rgba(10, 35, 70, .1);\n}\nh3[_ngcontent-%COMP%] {\n  font: 700 17px/1.4 var(--disp,sans-serif);\n}\n.country-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #71829a;\n}\n.login-links[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n}\n.login-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 48px;\n  padding: 10px 13px;\n  border: 1px solid #d9e7fb;\n  border-radius: 10px;\n  background: #f3f7fe;\n  color: #155dc2;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 600;\n  transition: background .2s, border-color .2s;\n}\n.login-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #e5efff;\n  border-color: #1565d8;\n}\n.login-links[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.dc-code[_ngcontent-%COMP%] {\n  min-width: 42px;\n  font: 700 12px var(--mono,monospace);\n}\na[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #ff941a;\n  outline-offset: 4px;\n}\n.bookmark-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #546980;\n  padding: 22px 4px;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.bookmark-note[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  color: #1565d8;\n}\n.support-panel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 32px;\n  padding: 32px 36px;\n  border-radius: 18px;\n  background: #e9f1fc;\n  border: 1px solid #d4e2f5;\n}\n.support-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 660px;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #536780;\n  margin-top: 12px;\n}\n.support-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 20px;\n  white-space: nowrap;\n  background: #1565d8;\n  color: #fff;\n  padding: 14px 22px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 700;\n}\n.support-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #0c4dad;\n}\n@media (max-width: 950px) {\n  .region-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .support-panel[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (max-width: 600px) {\n  .login-wrap[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .login-hero[_ngcontent-%COMP%] {\n    padding-bottom: 38px;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .region-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .region-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .support-panel[_ngcontent-%COMP%] {\n    padding: 26px 22px;\n  }\n  .hero-meta[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n}\n.cloud-cta[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 44px;\n  min-height: 174px;\n  padding: 32px 150px 32px 36px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      105deg,\n      #1565d8,\n      #0c3e8f);\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.cloud-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font: 700 23px/1.35 var(--disp,sans-serif);\n}\n.cloud-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #e1edff;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.cta-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 44px;\n  padding: 12px 20px;\n  border: 1px solid rgba(255, 255, 255, .4);\n  border-radius: 8px;\n  background: transparent;\n  color: #fff;\n  text-decoration: none;\n  font: 700 13px/1.3 var(--body,sans-serif);\n  cursor: pointer;\n}\n.cta-actions[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%] {\n  background: #ff8c0a;\n  border-color: #ff8c0a;\n}\n.cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.cta-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .12);\n}\n.cta-actions[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%]:hover {\n  background: #ed7d00;\n}\n.cta-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 4px;\n}\n.cta-support[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 26px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 104px;\n  height: 104px;\n}\n.cta-support[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n@media (max-width: 760px) {\n  .cloud-cta[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n  }\n  .cta-support[_ngcontent-%COMP%] {\n    position: static;\n    transform: none;\n    width: 72px;\n    height: 72px;\n    margin-left: auto;\n  }\n  .cloud-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .cta-actions[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .cta-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 11px 14px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    transition: none !important;\n  }\n}\n/*# sourceMappingURL=cloud-login.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudLoginPage, [{
    type: Component,
    args: [{ selector: "xh-cloud-login-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="login-hero">\r
  <div class="login-wrap">\r
    <nav aria-label="Breadcrumb"><a routerLink="/">Home</a><span aria-hidden="true">/</span><span>Cloud Login</span></nav>\r
    <div class="hero-layout">\r
      <div class="hero-copy">\r
        <div class="hero-label"><span aria-hidden="true"></span>ACRONIS CYBER PROTECT CLOUD</div>\r
        <h1>Your cloud.<br>Your region.<br><span>Your console.</span></h1>\r
        <p>Access your Acronis workspace through the data center associated with your account.</p>\r
        <a class="hero-region-button" href="#region-heading">Choose your region <span aria-hidden="true">&#8595;</span></a>\r
        <div class="hero-meta"><span><b>10</b> countries</span><i aria-hidden="true"></i><span><b>14</b> regional login options</span></div>\r
      </div>\r
      <div class="hero-network" aria-hidden="true">\r
        <div class="network-orbit orbit-one"></div><div class="network-orbit orbit-two"></div>\r
        <svg class="network-lines" viewBox="0 0 500 400" fill="none"><path d="M250 190 85 80M250 190 410 90M250 190 80 310M250 190 415 310" stroke="#639fff" stroke-width="1.5" stroke-dasharray="5 7"/></svg>\r
        <div class="network-hub"><svg viewBox="0 0 64 64" fill="none"><path d="M18 44H15a11 11 0 0 1-1-22 18 18 0 0 1 35-2 12 12 0 0 1 0 24h-3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="m32 29 11 5v8c0 8-11 13-11 13s-11-5-11-13v-8z" fill="#123b72" stroke="currentColor" stroke-width="2.5"/><path d="m27 41 4 4 7-8" stroke="#74e3bc" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Acronis</strong><span>CYBER PROTECT CLOUD</span></div>\r
        <div class="network-region region-india"><img src="/assets/images/flags/in.svg" alt=""><div><b>India</b><small>IN01</small></div></div>\r
        <div class="network-region region-europe"><img src="/assets/images/flags/de.svg" alt=""><div><b>Germany</b><small>EU2 &middot; EU4</small></div></div>\r
        <div class="network-region region-singapore"><img src="/assets/images/flags/sg.svg" alt=""><div><b>Singapore</b><small>SG</small></div></div>\r
        <div class="network-region region-usa"><img src="/assets/images/flags/us.svg" alt=""><div><b>USA</b><small>US2 &middot; US3 &middot; US4 &middot; US5</small></div></div>\r
        <div class="network-caption">GLOBAL ACCESS. YOUR REGIONAL CONSOLE.</div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
<section class="region-section login-wrap" aria-labelledby="region-heading">\r
  <div class="section-heading"><div><span class="eyebrow">REGIONAL ACCESS</span><h2 id="region-heading">Where is your account hosted?</h2></div><p>Choose your assigned data center.<br>All login links open in a new tab.</p></div>\r
  <div class="region-grid">\r
    @for (region of regions; track region.country) {\r
      <article class="region-card">\r
        <div class="country-heading"><img [src]="'/assets/images/flags/' + region.flag + '.svg'" alt="" width="48" height="32"><div><h3>{{ region.country }}</h3><span>{{ region.centers.length === 1 ? '1 data center' : region.centers.length + ' data centers' }}</span></div></div>\r
        <div class="login-links">\r
          @for (center of region.centers; track center.code) {\r
            <a [href]="center.url" target="_blank" rel="noopener noreferrer" [attr.aria-label]="'Log in to ' + region.country + ' ' + center.code + ' (opens in a new tab)'">\r
              <span class="dc-code">{{ center.code }}</span><span>Open console</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" stroke-linecap="round" stroke-linejoin="round"/></svg>\r
            </a>\r
          }\r
        </div>\r
      </article>\r
    }\r
  </div>\r
  <!-- <div class="bookmark-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z" stroke-linejoin="round"/></svg><p>Bookmark your regional URL for convenient access to your Acronis Cyber Protect Cloud console.</p></div> -->\r
  <aside class="cloud-cta" aria-labelledby="cloud-cta-title">\r
    <div class="cta-copy">\r
      <h2 id="cloud-cta-title">Ready to start with Acronis Cyber Protect Cloud?</h2>\r
      <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
    </div>\r
    <div class="cta-actions">\r
      <button type="button" class="cta-primary" (click)="openCallback()">Request a callback</button>\r
      <a routerLink="/pricing"><span aria-hidden="true">&#9889;</span> Buy Now</a>\r
      <button type="button" (click)="requestDoc('infosheet')"><span aria-hidden="true">&#8595;</span> Infosheet</button>\r
      <button type="button" (click)="requestDoc('presentation')"><span aria-hidden="true">&#9635;</span> Presentation</button>\r
      <a [href]="whatsappHref" target="_blank" rel="noopener noreferrer">Talk on WhatsApp</a>\r
      <a [href]="emailHref">Email Us</a>\r
</div>\r
    <a class="cta-support" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">\r
      <img src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost 24-hour delightful support" width="104" height="104">\r
    </a>\r
  </aside>\r
  <div class="pp-proof" aria-label="XcellHost credentials and payment options">\r
    <span>&#127941; ISO 27001</span><span>&#127941; ISO 20000-1</span><span>&#129309; Microsoft Gold Partner</span><span>&#9679; Since 1999</span><span>&#128274; Secure Payments &mdash; UPI &middot; Cards &middot; NetBanking</span>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/pages/cloud-login.page.css */\n:host {\n  display: block;\n  background: #f5f8fd;\n  color: #102d50;\n  font-family: var(--body,"IBM Plex Sans",sans-serif);\n}\n* {\n  box-sizing: border-box;\n}\n.login-wrap {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.login-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 26px 0 56px;\n  background:\n    radial-gradient(\n      ellipse at 80% 45%,\n      #153f77 0,\n      transparent 55%),\n    linear-gradient(\n      120deg,\n      #06192f,\n      #09264d);\n  color: #fff;\n}\n.login-hero:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  opacity: .22;\n  background-image:\n    linear-gradient(#527fb326 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #527fb326 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000);\n}\n.login-hero .login-wrap {\n  position: relative;\n}\n.hero-layout {\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  align-items: center;\n  gap: 48px;\n}\n.hero-copy {\n  padding: 8px 0;\n}\n.hero-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  font: 600 10px/1.5 var(--mono,monospace);\n  letter-spacing: .12em;\n  color: #a7ceff;\n}\n.hero-label > span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #75dabe;\n  box-shadow: 0 0 0 5px #75dabe14;\n}\n.hero-copy h1 {\n  font-size: clamp(38px, 4.2vw, 58px);\n  line-height: 1.06;\n  margin: 22px 0;\n}\n.hero-copy h1 span {\n  color: #82bfff;\n}\n.hero-copy p {\n  max-width: 460px;\n  font-size: 16px;\n}\n.hero-region-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 26px;\n  background: #ff9217;\n  color: #fff;\n  text-decoration: none;\n  border-radius: 10px;\n  padding: 14px 22px;\n  margin-top: 26px;\n  font-size: 14px;\n  font-weight: 700;\n  box-shadow: 0 8px 28px #0003;\n}\n.hero-region-button:hover {\n  background: #ed8008;\n}\n.hero-region-button span {\n  font-size: 19px;\n}\n.hero-copy .hero-meta {\n  margin-top: 24px;\n  color: #a6bddb;\n}\n.hero-meta b {\n  color: #fff;\n  font-size: 15px;\n  margin-right: 3px;\n}\n.hero-network {\n  position: relative;\n  width: 100%;\n  max-width: 500px;\n  aspect-ratio: 5/4;\n  justify-self: center;\n}\n.network-lines {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.network-orbit {\n  position: absolute;\n  border: 1px solid #74b3ff24;\n  border-radius: 50%;\n  left: 50%;\n  top: 48%;\n  transform: translate(-50%, -50%);\n}\n.orbit-one {\n  width: 65%;\n  aspect-ratio: 1;\n}\n.orbit-two {\n  width: 88%;\n  aspect-ratio: 1;\n  border-style: dashed;\n}\n.network-hub {\n  position: absolute;\n  left: 50%;\n  top: 48%;\n  transform: translate(-50%, -50%);\n  width: 180px;\n  height: 180px;\n  border: 1px solid #79b6ff66;\n  border-radius: 32px;\n  background:\n    linear-gradient(\n      145deg,\n      #204b80,\n      #0b2a52);\n  box-shadow: 0 24px 60px #0005, 0 0 60px #399bff1a;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: #b5d9ff;\n}\n.network-hub svg {\n  width: 62px;\n  height: 62px;\n  margin-bottom: 8px;\n}\n.network-hub strong {\n  font: 600 27px var(--disp,sans-serif);\n  color: #fff;\n}\n.network-hub > span {\n  font: 500 8px var(--mono,monospace);\n  letter-spacing: .09em;\n  margin-top: 7px;\n}\n.network-region {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 13px 15px;\n  border: 1px solid #779dd647;\n  border-radius: 13px;\n  background: #0b2548;\n  box-shadow: 0 14px 30px #0003;\n}\n.network-region img {\n  width: 32px;\n  height: 22px;\n  object-fit: cover;\n  border-radius: 4px;\n}\n.network-region b {\n  display: block;\n  font-size: 13px;\n  color: #edf5ff;\n}\n.network-region small {\n  display: block;\n  font: 10px var(--mono,monospace);\n  color: #8eb2dc;\n  margin-top: 5px;\n}\n.region-india {\n  left: 0;\n  top: 10%;\n}\n.region-europe {\n  right: 0;\n  top: 12%;\n}\n.region-singapore {\n  left: 0;\n  bottom: 13%;\n}\n.region-usa {\n  right: 0;\n  bottom: 10%;\n}\n.network-caption {\n  position: absolute;\n  bottom: -5%;\n  width: 100%;\n  text-align: center;\n  font: 9px var(--mono,monospace);\n  letter-spacing: .14em;\n  color: #7297c0;\n}\n#region-heading {\n  scroll-margin-top: 140px;\n}\n@media (max-width: 950px) {\n  .hero-layout {\n    gap: 20px;\n  }\n  .network-hub {\n    width: 145px;\n    height: 155px;\n  }\n  .network-region {\n    padding: 10px;\n    gap: 8px;\n  }\n  .network-region small {\n    font-size: 8px;\n  }\n}\n@media (max-width: 760px) {\n  .hero-layout {\n    grid-template-columns: 1fr;\n    gap: 34px;\n  }\n  .hero-network {\n    max-width: 440px;\n    margin: 0 auto 24px;\n  }\n  .hero-copy h1 {\n    font-size: 44px;\n  }\n  .hero-copy p {\n    max-width: 100%;\n  }\n  .network-hub {\n    width: 155px;\n    height: 165px;\n  }\n  .hero-label {\n    font-size: 9px;\n  }\n  .network-caption {\n    font-size: 8px;\n  }\n}\nnav {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #bdcfe8;\n  margin-bottom: 34px;\n}\nnav a {\n  color: inherit;\n  text-decoration: none;\n}\n.eyebrow {\n  font: 700 11px/1.5 var(--mono,monospace);\n  letter-spacing: .16em;\n  color: #1565d8;\n}\n.login-hero .eyebrow {\n  color: #8bc5ff;\n}\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\nh1 {\n  font: 700 clamp(32px, 4.5vw, 52px)/1.14 var(--disp,sans-serif);\n  letter-spacing: -.035em;\n  margin: 14px 0 20px;\n}\nh1 span {\n  color: #79baff;\n}\n.login-hero p {\n  max-width: 590px;\n  color: #c4d5ec;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.hero-meta {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-top: 26px;\n  color: #d9e9ff;\n  font-size: 12px;\n}\n.hero-meta i {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  background: #ff981f;\n}\n.region-section {\n  padding-top: 23px;\n  padding-bottom: 30px;\n}\n.section-heading {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  gap: 24px;\n  margin-bottom: 26px;\n}\nh2 {\n  font: 700 clamp(22px, 2.5vw, 28px)/1.3 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n  margin-top: 8px;\n}\n.section-heading p {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #63758e;\n}\n.region-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  align-items: stretch;\n}\n.region-card {\n  padding: 23px;\n  border: 1px solid #dce6f3;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 5px 20px rgba(15, 46, 85, .035);\n}\n.country-heading {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.country-heading img {\n  border-radius: 5px;\n  object-fit: cover;\n  box-shadow: 0 0 0 1px rgba(10, 35, 70, .1);\n}\nh3 {\n  font: 700 17px/1.4 var(--disp,sans-serif);\n}\n.country-heading span {\n  font-size: 12px;\n  color: #71829a;\n}\n.login-links {\n  display: grid;\n  gap: 9px;\n}\n.login-links a {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 48px;\n  padding: 10px 13px;\n  border: 1px solid #d9e7fb;\n  border-radius: 10px;\n  background: #f3f7fe;\n  color: #155dc2;\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 600;\n  transition: background .2s, border-color .2s;\n}\n.login-links a:hover {\n  background: #e5efff;\n  border-color: #1565d8;\n}\n.login-links svg {\n  width: 17px;\n  height: 17px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n.dc-code {\n  min-width: 42px;\n  font: 700 12px var(--mono,monospace);\n}\na:focus-visible {\n  outline: 3px solid #ff941a;\n  outline-offset: 4px;\n}\n.bookmark-note {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #546980;\n  padding: 22px 4px;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.bookmark-note svg {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  color: #1565d8;\n}\n.support-panel {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 32px;\n  padding: 32px 36px;\n  border-radius: 18px;\n  background: #e9f1fc;\n  border: 1px solid #d4e2f5;\n}\n.support-panel p {\n  max-width: 660px;\n  font-size: 14px;\n  line-height: 1.7;\n  color: #536780;\n  margin-top: 12px;\n}\n.support-panel a {\n  display: inline-flex;\n  align-items: center;\n  gap: 20px;\n  white-space: nowrap;\n  background: #1565d8;\n  color: #fff;\n  padding: 14px 22px;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: 700;\n}\n.support-panel a:hover {\n  background: #0c4dad;\n}\n@media (max-width: 950px) {\n  .region-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .support-panel {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (max-width: 600px) {\n  .login-wrap {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .login-hero {\n    padding-bottom: 38px;\n  }\n  .section-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 14px;\n  }\n  .region-grid {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .region-card {\n    padding: 20px;\n  }\n  .support-panel {\n    padding: 26px 22px;\n  }\n  .hero-meta {\n    gap: 10px;\n  }\n}\n.cloud-cta {\n  position: relative;\n  margin-top: 44px;\n  min-height: 174px;\n  padding: 32px 150px 32px 36px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      105deg,\n      #1565d8,\n      #0c3e8f);\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.cloud-cta h2 {\n  margin: 0;\n  color: #fff;\n  font: 700 23px/1.35 var(--disp,sans-serif);\n}\n.cloud-cta p {\n  margin-top: 8px;\n  color: #e1edff;\n  font-size: 14px;\n  line-height: 1.6;\n}\n.cta-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.cta-actions a,\n.cta-actions button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-height: 44px;\n  padding: 12px 20px;\n  border: 1px solid rgba(255, 255, 255, .4);\n  border-radius: 8px;\n  background: transparent;\n  color: #fff;\n  text-decoration: none;\n  font: 700 13px/1.3 var(--body,sans-serif);\n  cursor: pointer;\n}\n.cta-actions .cta-primary {\n  background: #ff8c0a;\n  border-color: #ff8c0a;\n}\n.cta-actions a:hover,\n.cta-actions button:hover {\n  background: rgba(255, 255, 255, .12);\n}\n.cta-actions .cta-primary:hover {\n  background: #ed7d00;\n}\n.cta-actions button:focus-visible {\n  outline: 3px solid #fff;\n  outline-offset: 4px;\n}\n.cta-support {\n  position: absolute;\n  right: 26px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 104px;\n  height: 104px;\n}\n.cta-support img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n@media (max-width: 760px) {\n  .cloud-cta {\n    padding: 28px 22px;\n  }\n  .cta-support {\n    position: static;\n    transform: none;\n    width: 72px;\n    height: 72px;\n    margin-left: auto;\n  }\n  .cloud-cta h2 {\n    font-size: 21px;\n  }\n  .cta-actions {\n    gap: 10px;\n  }\n  .cta-actions a,\n  .cta-actions button {\n    padding: 11px 14px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  * {\n    transition: none !important;\n  }\n}\n/*# sourceMappingURL=cloud-login.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CloudLoginPage, { className: "CloudLoginPage", filePath: "src/app/pages/cloud-login.page.ts", lineNumber: 17 });
})();
export {
  CloudLoginPage
};
//# sourceMappingURL=chunk-44GTJHPA.js.map
