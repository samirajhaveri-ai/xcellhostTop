import {
  HeroNetDirective
} from "./chunk-CRL34XPE.js";
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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/media-kit.page.ts
var _forTrack0 = ($index, $item) => $item[0];
function MediaKitPage_For_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "div");
    \u0275\u0275element(2, "img", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 67);
    \u0275\u0275text(6, "Open original \u2197");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.base + asset_r1[1], \u0275\u0275sanitizeUrl)("alt", asset_r1[0] + " trademark");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r1[0]);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.base + asset_r1[1], \u0275\u0275sanitizeUrl);
  }
}
function MediaKitPage_For_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "div");
    \u0275\u0275element(2, "img", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 67);
    \u0275\u0275text(6, "Open original \u2197");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const asset_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.base + asset_r3[1], \u0275\u0275sanitizeUrl)("alt", asset_r3[0] + " service mark");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(asset_r3[0]);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.base + asset_r3[1], \u0275\u0275sanitizeUrl);
  }
}
var MediaKitPage = class _MediaKitPage {
  seo = inject(SeoService);
  base = "https://www.xcellhost.cloud/wp-content/uploads/2024/07/";
  trademarks = [
    ["XcellHost", "Xcellhost-logo.png"],
    ["Distribution Partner", "DISTRIBUTION-PARTNER.png"],
    ["Cloud Advisor", "CLOUD-ADVISOR-.png"],
    ["Gold Cloud Partner", "GOLD-CLOUD-PARTNER.png"],
    ["Platinum Cloud Partner", "PLATINUM-CLOUD-PARTNER.png"]
  ];
  serviceMarks = [
    ["XcellTally", "XcellTally.png"],
    ["XcellBackup", "XcellBackup.png"],
    ["XcellDrive", "xcelldrive.png"],
    ["XcellCloud", "xcellcloud.png"],
    ["XcellGPU", "XCELLGPU.png"],
    ["XcellColo", "XcellColo.png"],
    ["XcellDedicated", "XcellDedicated-2000x400.png"],
    ["XcellObject", "XcellObject.png"],
    ["XcellPrivateCloud", "XcellPrivateCloud.png"],
    ["XcellSecure", "XcellSecure.png"],
    ["XcellManaged", "XcellManaged-2000x436.png"],
    ["XcellWatty", "XcellWatty.png"],
    ["XcellBizMail", "XcellBizMail.png"],
    ["XcellMigrate", "XcellMigrate.png"],
    ["XcellDMARC", "XcellDMARC.png"],
    ["XcellCamCloud", "XcellCamCloud-2000x410.png"],
    ["XcellMon", "XcellMon.png"],
    ["Xcell AI SIEM", "XcellaiSIEM.png"],
    ["Xcell AI MDR", "XcellaiMDR.png"],
    ["Xcell AI XDR", "XcellaiXDR.png"],
    ["XcellConsult", "XcellConsult-2000x484.png"],
    ["XcellDataProtect", "XcellDataProtect-2000x369.png"],
    ["XcellConnect", "XcellCoonect.png"],
    ["XcellOffice", "xcellOffice.png"],
    ["XcellDesign", "XcellDesign.png"]
  ];
  askAiHref(platform) {
    const prompt = encodeURIComponent("Tell me about the XcellHost Media Kit, official brand resources, company profile and press information.");
    switch (platform) {
      case "chatgpt":
        return `https://chatgpt.com/?q=${prompt}`;
      case "perplexity":
        return `https://www.perplexity.ai/search/new?q=${prompt}`;
      case "claude":
        return `https://claude.ai/new?q=${prompt}`;
      case "grok":
        return `https://grok.com/?q=${prompt}`;
      default:
        return "https://gemini.google.com/app";
    }
  }
  constructor() {
    this.seo.set("Media Kit \u2014 XcellHost", "Official XcellHost biographies, leadership information, trademarks, service marks and press contact details.", "/media-kit/");
  }
  static \u0275fac = function MediaKitPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MediaKitPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaKitPage, selectors: [["xh-media-kit-page"]], hostAttrs: [2, "display", "contents"], decls: 184, vars: 5, consts: [[1, "media-page"], [1, "media-hero"], ["xhHeroNet", "", "aria-hidden", "true", 1, "media-hero-net"], ["aria-hidden", "true", 1, "media-orb", "one"], ["aria-hidden", "true", 1, "media-orb", "two"], ["aria-hidden", "true", 1, "media-world"], [1, "wrap", "media-hero-grid"], [1, "media-hero-copy"], [1, "media-crumb"], [1, "media-kicker"], [1, "media-hero-points"], [1, "media-actions", "media-product-actions"], ["href", "#brand-assets", 1, "ghost"], ["href", "mailto:sales@xcellhost.cloud?subject=XcellHost%20media%20enquiry", 1, "media-talk"], ["aria-label", "Ask AI about the XcellHost Media Kit", 1, "media-ask-ai"], [1, "media-ask-label"], [1, "media-ai-tools"], ["aria-label", "Ask ChatGPT", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64", "alt", ""], ["aria-label", "Ask Perplexity", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64", "alt", ""], ["aria-label", "Ask Claude", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=claude.ai&sz=64", "alt", ""], ["aria-label", "Ask Google Gemini", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64", "alt", ""], ["aria-label", "Ask Grok", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=grok.com&sz=64", "alt", ""], ["aria-label", "XcellHost official brand identity", 1, "media-visual-stage"], ["aria-hidden", "true", 1, "media-ring", "ring-one"], ["aria-hidden", "true", 1, "media-ring", "ring-two"], [1, "media-float-chip", "chip-approved"], [1, "media-float-chip", "chip-since"], [1, "media-hero-mark"], ["src", "/assets/images/xcellhost-logo.png", "alt", "XcellHost Cloud Security AI"], ["aria-label", "Media kit sections", 1, "media-jump"], [1, "wrap"], ["href", "#leadership"], ["href", "#company-bio"], ["href", "#brand-assets"], ["href", "#service-marks"], ["id", "leadership", 1, "media-section"], [1, "media-heading"], [1, "leader-grid"], [1, "leader-photo"], ["src", "/assets/images/website-photo-frame-samir-jhaveri-1.png", "alt", "Samir Jhaveri, Managing Director of XcellHost Cloud Services"], [1, "leader-copy"], ["href", "/assets/images/company-recognition/ai-certification.jpeg", "target", "_blank", 1, "text-link"], ["id", "company-bio", 1, "media-section", "alt"], [1, "bio-grid"], ["id", "brand-assets", 1, "media-section"], [1, "asset-grid", "trademark-grid"], ["href", "https://www.xcellhost.cloud/brand-guidelines-and-permissions/", "target", "_blank", "rel", "noopener noreferrer", 1, "guideline-link"], ["id", "service-marks", 1, "media-section", "alt"], [1, "asset-grid", "service-grid"], ["aria-labelledby", "media-blog-title", 1, "media-ending"], ["id", "media-blog-title", 1, "media-blog-label"], ["routerLink", "/insights", 1, "media-blog-button"], [1, "media-final-cta"], [1, "media-final-copy"], [1, "media-final-actions"], ["href", "mailto:sales@xcellhost.cloud?subject=XcellHost%20media%20enquiry", 1, "primary"], ["routerLink", "/contact"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener"], ["href", "mailto:sales@xcellhost.cloud"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost 24\xD77 delightful support", "loading", "lazy", 1, "media-buddha"], ["aria-label", "XcellHost certifications and trust points", 1, "media-trust-chips"], ["loading", "lazy", 3, "src", "alt"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function MediaKitPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1);
      \u0275\u0275element(2, "canvas", 2)(3, "span", 3)(4, "span", 4)(5, "div", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "div", 8);
      \u0275\u0275text(9, "HOME \xA0\u203A\xA0 COMPANY \xA0\u203A\xA0 MEDIA KIT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11, "Official brand resources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h1");
      \u0275\u0275text(13, "Everything you need to tell the ");
      \u0275\u0275elementStart(14, "em");
      \u0275\u0275text(15, "XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " story.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "Approved company biographies, leadership information, trademarks and service marks for press, partners and publications.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 10)(20, "span");
      \u0275\u0275text(21, "\u2713 Approved assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span");
      \u0275\u0275text(23, "\u2713 Press-ready information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 11)(25, "a", 12)(26, "span");
      \u0275\u0275text(27, "\u25C9");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Brand Asset Tour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 13);
      \u0275\u0275text(30, "Let's Talk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 14)(32, "span", 15);
      \u0275\u0275text(33, "\u2726 Ask AI About XcellHost Media Kit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 16)(35, "a", 17);
      \u0275\u0275element(36, "img", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 19);
      \u0275\u0275element(38, "img", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 21);
      \u0275\u0275element(40, "img", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 23);
      \u0275\u0275element(42, "img", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "a", 25);
      \u0275\u0275element(44, "img", 26);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "div", 27);
      \u0275\u0275element(46, "span", 28)(47, "span", 29);
      \u0275\u0275elementStart(48, "div", 30)(49, "b");
      \u0275\u0275text(50, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(51, " Press approved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 31)(53, "b");
      \u0275\u0275text(54, "99");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 32);
      \u0275\u0275element(57, "img", 33);
      \u0275\u0275elementStart(58, "span");
      \u0275\u0275text(59, "Cloud \xB7 Security \xB7 AI");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "nav", 34)(61, "div", 35)(62, "a", 36);
      \u0275\u0275text(63, "Leadership");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "a", 37);
      \u0275\u0275text(65, "Company bios");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 38);
      \u0275\u0275text(67, "Trademarks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "a", 39);
      \u0275\u0275text(69, "Service marks");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "section", 40)(71, "div", 35)(72, "header", 41)(73, "span");
      \u0275\u0275text(74, "Leadership profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "h2");
      \u0275\u0275text(76, "Samir Jhaveri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, "Managing Director at XcellHost Cloud Services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 42)(80, "div", 43);
      \u0275\u0275element(81, "img", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 45)(83, "p");
      \u0275\u0275text(84, "College dropout like Bill Gates. With over two decades of experience in the cloud industry, Samir Jhaveri has been at the forefront of digital transformation since 1999. As Managing Director of XcellHost Cloud Services, he has empowered more than 10,000 SMBs and enterprises with cloud, security, digital marketing and AI solutions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p");
      \u0275\u0275text(86, "He travels globally, participating in and speaking at cloud conferences. He drives XcellHost\u2019s vision, strategy and growth, helping organisations of every size build simple and robust cloud infrastructure.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "blockquote");
      \u0275\u0275text(88, "\u201CSamir Jhaveri, Managing Director of XcellHost Cloud Services Pvt. Ltd., has been awarded an Honorary Doctorate (Honoris Causa) in Artificial Intelligence.\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "a", 46);
      \u0275\u0275text(90, "View doctorate credential \u2192");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(91, "section", 47)(92, "div", 35)(93, "header", 41)(94, "span");
      \u0275\u0275text(95, "Approved boilerplate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "h2");
      \u0275\u0275text(97, "Company Enterprise biographies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p");
      \u0275\u0275text(99, "Ready-to-use descriptions for articles, listings and partner materials.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 48)(101, "article")(102, "span");
      \u0275\u0275text(103, "Full company bio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "h3");
      \u0275\u0275text(105, "Leading Managed Cloud Service Provider since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, "XcellHost Cloud Services is a leading Managed Cloud Service Provider based in Mumbai, India, providing managed cloud services across the globe. We help customers manage public clouds including AWS, Azure, GCP and Oracle, plus private clouds, across the full cloud management lifecycle: assessment, migration, deployment, management, monitoring, security and DevOps.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p");
      \u0275\u0275text(109, "Our SaaS-based Cloud Marketplace helps enterprises consume 100+ cloud services and simplify cloud billing, provisioning and partner management, backed by managed 24\xD77 NOC and SOC services.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "article")(111, "span");
      \u0275\u0275text(112, "SMB bio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "h3");
      \u0275\u0275text(114, "Cloud services built for growing businesses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p");
      \u0275\u0275text(116, "XcellHost Cloud Services is a leading managed cloud service provider since 1999, based in Mumbai, India. Its SMB portfolio includes domains, web hosting, website security, website marketing, business email, Microsoft 365, Tally on Cloud, Backup Cloud, File Cloud, Cloud Desktop and Cloud Conferencing.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(117, "section", 49)(118, "div", 35)(119, "header", 41)(120, "span");
      \u0275\u0275text(121, "Trademark assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "h2");
      \u0275\u0275text(123, "Official XcellHost marks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "p");
      \u0275\u0275text(125, "Use the approved artwork without recolouring, stretching or modifying the marks.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 50);
      \u0275\u0275repeaterCreate(127, MediaKitPage_For_128_Template, 7, 4, "article", null, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "a", 51)(130, "span");
      \u0275\u0275text(131, "Brand use and permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "strong");
      \u0275\u0275text(133, "Read the official guidelines \u2192");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(134, "section", 52)(135, "div", 35)(136, "header", 41)(137, "span");
      \u0275\u0275text(138, "Product identity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "h2");
      \u0275\u0275text(140, "Service marks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "p");
      \u0275\u0275text(142, "The official XcellHost product and service family.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "div", 53);
      \u0275\u0275repeaterCreate(144, MediaKitPage_For_145_Template, 7, 4, "article", null, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "section", 54)(147, "div", 35)(148, "h2", 55);
      \u0275\u0275text(149, "FROM OUR BLOG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "a", 56);
      \u0275\u0275text(151, "View all blogs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "div", 57)(153, "div", 58)(154, "h2");
      \u0275\u0275text(155, "Ready to share the XcellHost story?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p");
      \u0275\u0275text(157, "Approved brand resources \xB7 press support \xB7 24\xD77 assistance in English & Hindi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 59)(159, "a", 60);
      \u0275\u0275text(160, "Media enquiry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "a", 38);
      \u0275\u0275text(162, "Brand assets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "a", 61);
      \u0275\u0275text(164, "Contact team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "a", 62);
      \u0275\u0275text(166, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "a", 63);
      \u0275\u0275text(168, "Email Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(169, "img", 64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 65)(171, "span");
      \u0275\u0275text(172, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "span");
      \u0275\u0275text(174, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "span");
      \u0275\u0275text(176, "\u{1F91D} Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "span");
      \u0275\u0275text(178, "\u265F Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "span")(180, "b");
      \u0275\u0275text(181, "99.95% uptime SLA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "span");
      \u0275\u0275text(183, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275property("href", ctx.askAiHref("chatgpt"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.askAiHref("perplexity"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.askAiHref("claude"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.askAiHref("google"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.askAiHref("grok"), \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(84);
      \u0275\u0275repeater(ctx.trademarks);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.serviceMarks);
    }
  }, dependencies: [RouterLink, HeroNetDirective], styles: ['\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.media-page[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #14233d;\n}\n.media-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 76px 0;\n  background:\n    radial-gradient(\n      700px 400px at 80% 0,\n      #174985,\n      #061b3d 68%);\n  color: #fff;\n}\n.media-hero[_ngcontent-%COMP%]:before {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      115deg,\n      transparent 0 100px,\n      rgba(127, 178, 255, .08) 100px 102px,\n      transparent 102px 220px);\n  content: "";\n}\n.media-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  gap: 70px;\n  align-items: center;\n}\n.media-crumb[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  color: #8ebcf8;\n  font: 700 11px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.media-kicker[_ngcontent-%COMP%], \n.media-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #65b8ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.media-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 740px;\n  margin: 12px 0 18px;\n  font-size: clamp(38px, 5vw, 66px);\n  line-height: 1.05;\n}\n.media-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 650px;\n  color: #c8d8ec;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.media-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 26px;\n}\n.media-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  border-radius: 9px;\n  background: #ff7a10;\n  color: #fff;\n  font-weight: 800;\n  text-decoration: none;\n}\n.media-actions[_ngcontent-%COMP%]   .ghost[_ngcontent-%COMP%] {\n  border: 1px solid #7a9ac3;\n  background: transparent;\n}\n.media-hero-mark[_ngcontent-%COMP%] {\n  padding: 40px;\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 24px;\n  background: rgba(255, 255, 255, .96);\n  text-align: center;\n  box-shadow: 0 28px 60px rgba(0, 0, 0, .25);\n}\n.media-hero-mark[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: min(100%, 360px);\n}\n.media-hero-mark[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 14px;\n  color: #52627a;\n  font: 700 12px var(--mono);\n}\n.media-jump[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  border-bottom: 1px solid #dbe5f2;\n  background: rgba(255, 255, 255, .96);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.media-jump[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  overflow: auto;\n}\n.media-jump[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 18px 0;\n  color: #53627b;\n  font-size: 13px;\n  font-weight: 700;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.media-section[_ngcontent-%COMP%] {\n  padding: 38px 0 38px 0;\n  scroll-margin-top: 80px;\n}\n.media-section.alt[_ngcontent-%COMP%] {\n  background: #f4f7fb;\n}\n.media-heading[_ngcontent-%COMP%] {\n  max-width: 740px;\n  margin-bottom: 34px;\n}\n.media-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1769ff;\n}\n.media-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  color: #071e48;\n  font-size: clamp(30px, 4vw, 44px);\n}\n.media-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #66758c;\n}\n.leader-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 330px 1fr;\n  gap: 50px;\n  align-items: center;\n}\n.leader-photo[_ngcontent-%COMP%] {\n  padding: 14px;\n  border: 1px solid #dbe5f2;\n  border-radius: 24px;\n  background: #f4f7fb;\n}\n.leader-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.leader-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #53627a;\n  line-height: 1.75;\n}\n.leader-copy[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 24px 0;\n  padding: 22px 24px;\n  border-left: 4px solid #ff7a10;\n  border-radius: 0 14px 14px 0;\n  background: #f4f7fb;\n  color: #17345f;\n  font-weight: 700;\n}\n.text-link[_ngcontent-%COMP%], \n.asset-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font-weight: 800;\n  text-decoration: none;\n}\n.bio-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr .7fr;\n  gap: 20px;\n}\n.bio-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 30px;\n  border: 1px solid #dce5f1;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 12px 32px rgba(16, 47, 91, .07);\n}\n.bio-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font: 800 10px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.bio-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #071e48;\n  font-size: 22px;\n}\n.bio-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5c6b82;\n  line-height: 1.7;\n}\n.asset-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.trademark-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(5, 1fr);\n}\n.service-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n}\n.asset-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 10px 28px rgba(16, 47, 91, .06);\n}\n.asset-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  height: 145px;\n  place-items: center;\n  padding: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #f3f7fc,\n      #fff);\n}\n.asset-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.asset-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 17px 18px 5px;\n  color: #071e48;\n  font-size: 15px;\n}\n.asset-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 18px 18px;\n  font-size: 12px;\n}\n.guideline-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-top: 22px;\n  padding: 22px 26px;\n  border-radius: 16px;\n  background: #071e48;\n  color: #fff;\n  text-decoration: none;\n}\n.guideline-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a9c4e8;\n}\n.contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.contact-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 170px;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 24px;\n  border: 1px solid #dce5f1;\n  border-radius: 18px;\n  background: #fff;\n  color: #071e48;\n  text-decoration: none;\n  box-shadow: 0 10px 28px rgba(16, 47, 91, .06);\n}\n.contact-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 12px;\n  background: #e8f1ff;\n  color: #1769ff;\n  font-size: 19px;\n}\n.contact-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  font-size: 17px;\n}\n.contact-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  color: #66758c;\n}\n@media (max-width: 1000px) {\n  .trademark-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .service-grid[_ngcontent-%COMP%], \n   .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 760px) {\n  .media-hero-grid[_ngcontent-%COMP%], \n   .leader-grid[_ngcontent-%COMP%], \n   .bio-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .media-hero[_ngcontent-%COMP%] {\n    padding: 50px 0;\n  }\n  .media-hero-mark[_ngcontent-%COMP%] {\n    padding: 25px;\n  }\n  .trademark-grid[_ngcontent-%COMP%], \n   .service-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .asset-grid[_ngcontent-%COMP%], \n   .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .guideline-link[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=media-kit.page.css.map */', '\n\n.media-hero[_ngcontent-%COMP%] {\n  min-height: 560px;\n  padding: 66px 0;\n  background:\n    radial-gradient(\n      circle at 72% 48%,\n      rgba(24, 99, 200, .36),\n      transparent 30%),\n    radial-gradient(\n      circle at 10% 18%,\n      rgba(22, 110, 224, .28),\n      transparent 24%),\n    linear-gradient(\n      115deg,\n      #041a3d 0%,\n      #082651 58%,\n      #06204a 100%);\n}\n.media-hero[_ngcontent-%COMP%]:before {\n  z-index: 0;\n  background:\n    repeating-linear-gradient(\n      116deg,\n      transparent 0 122px,\n      rgba(117, 170, 244, .11) 123px 125px,\n      transparent 126px 244px);\n  animation: _ngcontent-%COMP%_media-grid-drift 18s linear infinite;\n}\n.media-hero[_ngcontent-%COMP%]:after {\n  position: absolute;\n  inset: auto 0 0;\n  height: 42%;\n  background:\n    repeating-linear-gradient(\n      163deg,\n      transparent 0 48px,\n      rgba(87, 151, 235, .08) 49px 50px);\n  content: "";\n  transform: perspective(520px) rotateX(58deg);\n  transform-origin: bottom;\n}\n.media-hero-net[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.media-world[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: 13%;\n  right: 9%;\n  width: 54%;\n  height: 72%;\n  border: 1px solid rgba(104, 167, 250, .2);\n  border-radius: 50%;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(126, 183, 255, .48) 1.8px,\n      transparent 2px);\n  background-size: 20px 20px;\n  opacity: .5;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 20%,\n      transparent 72%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 20%,\n      transparent 72%);\n  animation: _ngcontent-%COMP%_media-world-pulse 6s ease-in-out infinite;\n}\n.media-hero-grid[_ngcontent-%COMP%] {\n  z-index: 2;\n  grid-template-columns: 1.08fr .92fr;\n  min-height: 430px;\n  gap: 56px;\n}\n.media-hero-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n.media-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 12px 0 17px;\n  font-size: clamp(38px, 3.65vw, 58px);\n  letter-spacing: -.04em;\n}\n.media-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #65b8ff;\n  font-style: normal;\n}\n.media-hero-points[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 22px;\n  margin-top: 19px;\n  color: #75c4ff;\n  font-weight: 800;\n}\n.media-visual-stage[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 390px;\n  place-items: center;\n  isolation: isolate;\n}\n.media-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px dashed rgba(80, 166, 255, .5);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_media-spin 18s linear infinite;\n}\n.media-ring[_ngcontent-%COMP%]:before, \n.media-ring[_ngcontent-%COMP%]:after {\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #54b3ff;\n  box-shadow: 0 0 16px #54b3ff;\n  content: "";\n}\n.media-ring[_ngcontent-%COMP%]:before {\n  top: 8%;\n  left: 23%;\n}\n.media-ring[_ngcontent-%COMP%]:after {\n  right: 5%;\n  bottom: 30%;\n}\n.ring-one[_ngcontent-%COMP%] {\n  width: 390px;\n  height: 390px;\n}\n.ring-two[_ngcontent-%COMP%] {\n  width: 315px;\n  height: 315px;\n  animation-direction: reverse;\n  animation-duration: 13s;\n}\n.media-hero-mark[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: min(92%, 475px);\n  padding: 52px 38px;\n  border-color: rgba(255, 255, 255, .5);\n  border-radius: 26px;\n  box-shadow: 0 32px 65px rgba(0, 0, 0, .32), 0 0 45px rgba(48, 137, 255, .16);\n  animation: _ngcontent-%COMP%_media-float 5.5s ease-in-out infinite;\n}\n.media-float-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  padding: 10px 14px;\n  border: 1px solid rgba(155, 203, 255, .35);\n  border-radius: 12px;\n  background: rgba(5, 30, 70, .88);\n  color: #d9ebff;\n  font: 700 11px var(--mono);\n  box-shadow: 0 15px 32px rgba(0, 0, 0, .25);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.media-float-chip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 24px;\n  height: 24px;\n  margin-right: 7px;\n  place-items: center;\n  border-radius: 8px;\n  background: #1670e8;\n  color: #fff;\n}\n.chip-approved[_ngcontent-%COMP%] {\n  top: 36px;\n  right: 3%;\n  animation: _ngcontent-%COMP%_media-float 4.4s ease-in-out .4s infinite;\n}\n.chip-since[_ngcontent-%COMP%] {\n  bottom: 39px;\n  left: 0;\n  animation: _ngcontent-%COMP%_media-float 5s ease-in-out 1.1s infinite;\n}\n.media-product-actions[_ngcontent-%COMP%] {\n  gap: 10px;\n  margin-top: 24px;\n}\n.media-product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 45px;\n  align-items: center;\n  justify-content: center;\n  padding: 11px 17px;\n  border: 1px solid rgba(160, 197, 242, .65);\n  background: #1267cc;\n  white-space: nowrap;\n}\n.media-product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 7px;\n  font-size: 14px;\n}\n.media-product-actions[_ngcontent-%COMP%]   .ghost[_ngcontent-%COMP%] {\n  background: rgba(6, 31, 70, .55);\n}\n.media-product-actions[_ngcontent-%COMP%]   .media-talk[_ngcontent-%COMP%] {\n  border-color: #ff8515;\n  background: #ff8515;\n}\n.media-ask-ai[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 28px;\n}\n.media-ask-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 30px;\n  align-items: center;\n  padding: 6px 14px;\n  border: 1px solid rgba(125, 181, 246, .38);\n  border-radius: 999px;\n  background: rgba(4, 27, 62, .6);\n  color: #eaf5ff;\n  font: 700 11px var(--mono);\n  white-space: nowrap;\n}\n.media-ai-tools[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.media-ai-tools[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  width: 39px;\n  height: 39px;\n  place-items: center;\n  border: 1px solid rgba(140, 190, 248, .35);\n  border-radius: 12px;\n  background: rgba(4, 25, 58, .78);\n  transition: transform .2s ease, background .2s ease;\n}\n.media-ai-tools[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #124d97;\n  transform: translateY(-3px);\n}\n.media-ai-tools[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n}\n.media-ending[_ngcontent-%COMP%] {\n  padding: 52px 0 40px;\n  background: #fff;\n}\n.media-ending[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%] {\n  width: min(1192px, calc(100% - 40px));\n  max-width: 1192px;\n}\n.media-blog-label[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0863df;\n  font: 800 14px var(--mono);\n  letter-spacing: .18em;\n}\n.media-blog-button[_ngcontent-%COMP%] {\n  display: table;\n  margin: 36px auto 28px;\n  padding: 15px 27px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #1c72e8,\n      #0b4da9);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 800;\n  text-decoration: none;\n  box-shadow: 0 14px 30px rgba(19, 95, 196, .24);\n}\n.media-final-cta[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 200px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  padding: 30px 28px 30px 36px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      110deg,\n      #2475df 0%,\n      #1d63c4 48%,\n      #124995 100%);\n  color: #fff;\n  box-shadow: 0 20px 45px rgba(13, 65, 145, .18);\n}\n.media-final-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 9px;\n  color: #fff;\n  font-size: 28px;\n  line-height: 1.2;\n}\n.media-final-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #e1edff;\n  font-size: 15px;\n}\n.media-final-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 27px;\n}\n.media-final-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 45px;\n  align-items: center;\n  justify-content: center;\n  padding: 11px 20px;\n  border: 1px solid rgba(255, 255, 255, .42);\n  border-radius: 9px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.media-final-actions[_ngcontent-%COMP%]   a.primary[_ngcontent-%COMP%] {\n  border-color: #ff8616;\n  background: #ff8616;\n}\n.media-buddha[_ngcontent-%COMP%] {\n  width: 118px;\n  height: 118px;\n  margin-right: 0;\n  object-fit: contain;\n  filter: drop-shadow(0 12px 18px rgba(0, 0, 0, .22));\n  animation: _ngcontent-%COMP%_media-float 4.8s ease-in-out infinite;\n}\n.media-trust-chips[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 22px;\n}\n.media-trust-chips[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 9px 15px;\n  border: 1px solid #d3dfef;\n  border-radius: 999px;\n  background: #fff;\n  color: #314767;\n  font-size: 11px;\n  font-weight: 700;\n}\n@keyframes _ngcontent-%COMP%_media-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes _ngcontent-%COMP%_media-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_media-world-pulse {\n  0%, 100% {\n    opacity: .32;\n    transform: scale(.98);\n  }\n  50% {\n    opacity: .62;\n    transform: scale(1.03);\n  }\n}\n@keyframes _ngcontent-%COMP%_media-grid-drift {\n  to {\n    background-position: 244px 0;\n  }\n}\n@media (max-width: 900px) {\n  .media-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .media-visual-stage[_ngcontent-%COMP%] {\n    min-height: 340px;\n  }\n  .media-final-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .media-final-actions[_ngcontent-%COMP%] {\n    max-width: 620px;\n  }\n}\n@media (max-width: 720px) {\n  .media-ask-ai[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .media-product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 145px;\n  }\n}\n@media (max-width: 620px) {\n  .media-hero[_ngcontent-%COMP%] {\n    padding: 45px 0;\n  }\n  .media-hero-points[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .media-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .media-visual-stage[_ngcontent-%COMP%] {\n    min-height: 290px;\n  }\n  .media-ring[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    max-height: 90vw;\n  }\n  .media-float-chip[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .media-final-cta[_ngcontent-%COMP%] {\n    padding: 27px 22px;\n  }\n  .media-buddha[_ngcontent-%COMP%] {\n    width: 85px;\n    height: 85px;\n  }\n  .media-final-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 135px;\n    text-align: center;\n  }\n  .media-ai-tools[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .media-hero[_ngcontent-%COMP%]:before, \n   .media-world[_ngcontent-%COMP%], \n   .media-ring[_ngcontent-%COMP%], \n   .media-hero-mark[_ngcontent-%COMP%], \n   .media-float-chip[_ngcontent-%COMP%], \n   .media-buddha[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=media-kit-enhanced.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaKitPage, [{
    type: Component,
    args: [{ selector: "xh-media-kit-page", standalone: true, imports: [RouterLink, HeroNetDirective], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="media-page">\r
  <section class="media-hero">\r
    <canvas class="media-hero-net" xhHeroNet aria-hidden="true"></canvas>\r
    <span class="media-orb one" aria-hidden="true"></span><span class="media-orb two" aria-hidden="true"></span>\r
    <div class="media-world" aria-hidden="true"></div>\r
    <div class="wrap media-hero-grid">\r
      <div class="media-hero-copy">\r
        <div class="media-crumb">HOME &nbsp;\u203A&nbsp; COMPANY &nbsp;\u203A&nbsp; MEDIA KIT</div>\r
        <span class="media-kicker">Official brand resources</span>\r
        <h1>Everything you need to tell the <em>XcellHost</em> story.</h1>\r
        <p>Approved company biographies, leadership information, trademarks and service marks for press, partners and publications.</p>\r
        <div class="media-hero-points"><span>\u2713 Approved assets</span><span>\u2713 Press-ready information</span></div>\r
        <div class="media-actions media-product-actions">\r
          \r
          \r
          <a class="ghost" href="#brand-assets"><span>\u25C9</span> Brand Asset Tour</a>\r
          <a class="media-talk" href="mailto:sales@xcellhost.cloud?subject=XcellHost%20media%20enquiry">Let's Talk</a>\r
        </div>\r
        <div class="media-ask-ai" aria-label="Ask AI about the XcellHost Media Kit">\r
          <span class="media-ask-label">\u2726 Ask AI About XcellHost Media Kit</span>\r
          <div class="media-ai-tools">\r
            <a aria-label="Ask ChatGPT" [href]="askAiHref('chatgpt')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=64" alt=""/></a>\r
            <a aria-label="Ask Perplexity" [href]="askAiHref('perplexity')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=perplexity.ai&amp;sz=64" alt=""/></a>\r
            <a aria-label="Ask Claude" [href]="askAiHref('claude')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=64" alt=""/></a>\r
            <a aria-label="Ask Google Gemini" [href]="askAiHref('google')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=64" alt=""/></a>\r
            <a aria-label="Ask Grok" [href]="askAiHref('grok')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=64" alt=""/></a>\r
          </div>\r
        </div>\r
      </div>\r
      <div class="media-visual-stage" aria-label="XcellHost official brand identity">\r
        <span class="media-ring ring-one" aria-hidden="true"></span><span class="media-ring ring-two" aria-hidden="true"></span>\r
        <div class="media-float-chip chip-approved"><b>\u2713</b> Press approved</div><div class="media-float-chip chip-since"><b>99</b> Since 1999</div>\r
        <div class="media-hero-mark"><img src="/assets/images/xcellhost-logo.png" alt="XcellHost Cloud Security AI"/><span>Cloud \xB7 Security \xB7 AI</span></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <nav class="media-jump" aria-label="Media kit sections"><div class="wrap"><a href="#leadership">Leadership</a><a href="#company-bio">Company bios</a><a href="#brand-assets">Trademarks</a><a href="#service-marks">Service marks</a></div></nav>\r
\r
  <section class="media-section" id="leadership"><div class="wrap"><header class="media-heading"><span>Leadership profile</span><h2>Samir Jhaveri</h2><p>Managing Director at XcellHost Cloud Services</p></header><div class="leader-grid"><div class="leader-photo"><img src="/assets/images/website-photo-frame-samir-jhaveri-1.png" alt="Samir Jhaveri, Managing Director of XcellHost Cloud Services"/></div><div class="leader-copy"><p>College dropout like Bill Gates. With over two decades of experience in the cloud industry, Samir Jhaveri has been at the forefront of digital transformation since 1999. As Managing Director of XcellHost Cloud Services, he has empowered more than 10,000 SMBs and enterprises with cloud, security, digital marketing and AI solutions.</p><p>He travels globally, participating in and speaking at cloud conferences. He drives XcellHost\u2019s vision, strategy and growth, helping organisations of every size build simple and robust cloud infrastructure.</p><blockquote>\u201CSamir Jhaveri, Managing Director of XcellHost Cloud Services Pvt. Ltd., has been awarded an Honorary Doctorate (Honoris Causa) in Artificial Intelligence.\u201D</blockquote><a class="text-link" href="/assets/images/company-recognition/ai-certification.jpeg" target="_blank">View doctorate credential \u2192</a></div></div></div></section>\r
\r
  <section class="media-section alt" id="company-bio"><div class="wrap"><header class="media-heading"><span>Approved boilerplate</span><h2>Company Enterprise biographies</h2><p>Ready-to-use descriptions for articles, listings and partner materials.</p></header><div class="bio-grid"><article><span>Full company bio</span><h3>Leading Managed Cloud Service Provider since 1999</h3><p>XcellHost Cloud Services is a leading Managed Cloud Service Provider based in Mumbai, India, providing managed cloud services across the globe. We help customers manage public clouds including AWS, Azure, GCP and Oracle, plus private clouds, across the full cloud management lifecycle: assessment, migration, deployment, management, monitoring, security and DevOps.</p><p>Our SaaS-based Cloud Marketplace helps enterprises consume 100+ cloud services and simplify cloud billing, provisioning and partner management, backed by managed 24\xD77 NOC and SOC services.</p></article><article><span>SMB bio</span><h3>Cloud services built for growing businesses</h3><p>XcellHost Cloud Services is a leading managed cloud service provider since 1999, based in Mumbai, India. Its SMB portfolio includes domains, web hosting, website security, website marketing, business email, Microsoft 365, Tally on Cloud, Backup Cloud, File Cloud, Cloud Desktop and Cloud Conferencing.</p></article></div></div></section>\r
\r
  <section class="media-section" id="brand-assets"><div class="wrap"><header class="media-heading"><span>Trademark assets</span><h2>Official XcellHost marks</h2><p>Use the approved artwork without recolouring, stretching or modifying the marks.</p></header><div class="asset-grid trademark-grid">@for (asset of trademarks; track asset[0]) {<article><div><img [src]="base + asset[1]" [alt]="asset[0] + ' trademark'" loading="lazy"/></div><h3>{{ asset[0] }}</h3><a [href]="base + asset[1]" target="_blank" rel="noopener noreferrer">Open original \u2197</a></article>}</div><a class="guideline-link" href="https://www.xcellhost.cloud/brand-guidelines-and-permissions/" target="_blank" rel="noopener noreferrer"><span>Brand use and permissions</span><strong>Read the official guidelines \u2192</strong></a></div></section>\r
\r
  <section class="media-section alt" id="service-marks"><div class="wrap"><header class="media-heading"><span>Product identity</span><h2>Service marks</h2><p>The official XcellHost product and service family.</p></header><div class="asset-grid service-grid">@for (asset of serviceMarks; track asset[0]) {<article><div><img [src]="base + asset[1]" [alt]="asset[0] + ' service mark'" loading="lazy"/></div><h3>{{ asset[0] }}</h3><a [href]="base + asset[1]" target="_blank" rel="noopener noreferrer">Open original \u2197</a></article>}</div></div></section>\r
\r
  <section class="media-ending" aria-labelledby="media-blog-title"><div class="wrap">\r
    <h2 class="media-blog-label" id="media-blog-title">FROM OUR BLOG</h2><a class="media-blog-button" routerLink="/insights">View all blogs</a>\r
    <div class="media-final-cta"><div class="media-final-copy"><h2>Ready to share the XcellHost story?</h2><p>Approved brand resources \xB7 press support \xB7 24\xD77 assistance in English &amp; Hindi</p><div class="media-final-actions"><a class="primary" href="mailto:sales@xcellhost.cloud?subject=XcellHost%20media%20enquiry">Media enquiry</a><a href="#brand-assets">Brand assets</a><a routerLink="/contact">Contact team</a><a href="https://wa.me/918657032540" target="_blank" rel="noopener">Talk on WhatsApp</a><a href="mailto:sales@xcellhost.cloud">Email Us</a></div></div><img class="media-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost 24\xD77 delightful support" loading="lazy"/></div>\r
    <div class="media-trust-chips" aria-label="XcellHost certifications and trust points"><span>\u{1F3C5} ISO 27001</span><span>\u{1F3C5} ISO 20000-1</span><span>\u{1F91D} Microsoft Gold Partner</span><span>\u265F Since 1999</span><span><b>99.95% uptime SLA</b></span><span>\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking</span></div>\r
  </div></section>\r
</main>\r
`, styles: ['/* src/app/pages/media-kit.page.css */\n:host {\n  display: contents;\n}\n.media-page {\n  background: #fff;\n  color: #14233d;\n}\n.media-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 76px 0;\n  background:\n    radial-gradient(\n      700px 400px at 80% 0,\n      #174985,\n      #061b3d 68%);\n  color: #fff;\n}\n.media-hero:before {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      115deg,\n      transparent 0 100px,\n      rgba(127, 178, 255, .08) 100px 102px,\n      transparent 102px 220px);\n  content: "";\n}\n.media-hero-grid {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  gap: 70px;\n  align-items: center;\n}\n.media-crumb {\n  margin-bottom: 24px;\n  color: #8ebcf8;\n  font: 700 11px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.media-kicker,\n.media-heading > span {\n  color: #65b8ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.media-hero h1 {\n  max-width: 740px;\n  margin: 12px 0 18px;\n  font-size: clamp(38px, 5vw, 66px);\n  line-height: 1.05;\n}\n.media-hero p {\n  max-width: 650px;\n  color: #c8d8ec;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.media-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 26px;\n}\n.media-actions a {\n  padding: 13px 20px;\n  border-radius: 9px;\n  background: #ff7a10;\n  color: #fff;\n  font-weight: 800;\n  text-decoration: none;\n}\n.media-actions .ghost {\n  border: 1px solid #7a9ac3;\n  background: transparent;\n}\n.media-hero-mark {\n  padding: 40px;\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 24px;\n  background: rgba(255, 255, 255, .96);\n  text-align: center;\n  box-shadow: 0 28px 60px rgba(0, 0, 0, .25);\n}\n.media-hero-mark img {\n  width: min(100%, 360px);\n}\n.media-hero-mark span {\n  display: block;\n  margin-top: 14px;\n  color: #52627a;\n  font: 700 12px var(--mono);\n}\n.media-jump {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  border-bottom: 1px solid #dbe5f2;\n  background: rgba(255, 255, 255, .96);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.media-jump .wrap {\n  display: flex;\n  gap: 28px;\n  overflow: auto;\n}\n.media-jump a {\n  padding: 18px 0;\n  color: #53627b;\n  font-size: 13px;\n  font-weight: 700;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.media-section {\n  padding: 38px 0 38px 0;\n  scroll-margin-top: 80px;\n}\n.media-section.alt {\n  background: #f4f7fb;\n}\n.media-heading {\n  max-width: 740px;\n  margin-bottom: 34px;\n}\n.media-heading > span {\n  color: #1769ff;\n}\n.media-heading h2 {\n  margin: 10px 0;\n  color: #071e48;\n  font-size: clamp(30px, 4vw, 44px);\n}\n.media-heading p {\n  margin: 0;\n  color: #66758c;\n}\n.leader-grid {\n  display: grid;\n  grid-template-columns: 330px 1fr;\n  gap: 50px;\n  align-items: center;\n}\n.leader-photo {\n  padding: 14px;\n  border: 1px solid #dbe5f2;\n  border-radius: 24px;\n  background: #f4f7fb;\n}\n.leader-photo img {\n  display: block;\n  width: 100%;\n}\n.leader-copy p {\n  color: #53627a;\n  line-height: 1.75;\n}\n.leader-copy blockquote {\n  margin: 24px 0;\n  padding: 22px 24px;\n  border-left: 4px solid #ff7a10;\n  border-radius: 0 14px 14px 0;\n  background: #f4f7fb;\n  color: #17345f;\n  font-weight: 700;\n}\n.text-link,\n.asset-grid a {\n  color: #1769ff;\n  font-weight: 800;\n  text-decoration: none;\n}\n.bio-grid {\n  display: grid;\n  grid-template-columns: 1.3fr .7fr;\n  gap: 20px;\n}\n.bio-grid article {\n  padding: 30px;\n  border: 1px solid #dce5f1;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 12px 32px rgba(16, 47, 91, .07);\n}\n.bio-grid span {\n  color: #1769ff;\n  font: 800 10px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.bio-grid h3 {\n  color: #071e48;\n  font-size: 22px;\n}\n.bio-grid p {\n  color: #5c6b82;\n  line-height: 1.7;\n}\n.asset-grid {\n  display: grid;\n  gap: 16px;\n}\n.trademark-grid {\n  grid-template-columns: repeat(5, 1fr);\n}\n.service-grid {\n  grid-template-columns: repeat(4, 1fr);\n}\n.asset-grid article {\n  overflow: hidden;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 10px 28px rgba(16, 47, 91, .06);\n}\n.asset-grid article > div {\n  display: grid;\n  height: 145px;\n  place-items: center;\n  padding: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #f3f7fc,\n      #fff);\n}\n.asset-grid img {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n.asset-grid h3 {\n  margin: 17px 18px 5px;\n  color: #071e48;\n  font-size: 15px;\n}\n.asset-grid a {\n  display: block;\n  margin: 0 18px 18px;\n  font-size: 12px;\n}\n.guideline-link {\n  display: flex;\n  justify-content: space-between;\n  gap: 20px;\n  margin-top: 22px;\n  padding: 22px 26px;\n  border-radius: 16px;\n  background: #071e48;\n  color: #fff;\n  text-decoration: none;\n}\n.guideline-link span {\n  color: #a9c4e8;\n}\n.contact-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.contact-grid a {\n  display: flex;\n  min-height: 170px;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 24px;\n  border: 1px solid #dce5f1;\n  border-radius: 18px;\n  background: #fff;\n  color: #071e48;\n  text-decoration: none;\n  box-shadow: 0 10px 28px rgba(16, 47, 91, .06);\n}\n.contact-grid span {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 12px;\n  background: #e8f1ff;\n  color: #1769ff;\n  font-size: 19px;\n}\n.contact-grid b {\n  margin-top: 22px;\n  font-size: 17px;\n}\n.contact-grid small {\n  margin-top: 5px;\n  color: #66758c;\n}\n@media (max-width: 1000px) {\n  .trademark-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .service-grid,\n  .contact-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 760px) {\n  .media-hero-grid,\n  .leader-grid,\n  .bio-grid {\n    grid-template-columns: 1fr;\n  }\n  .media-hero {\n    padding: 50px 0;\n  }\n  .media-hero-mark {\n    padding: 25px;\n  }\n  .trademark-grid,\n  .service-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .asset-grid,\n  .contact-grid {\n    grid-template-columns: 1fr;\n  }\n  .guideline-link {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=media-kit.page.css.map */\n', '/* src/app/pages/media-kit-enhanced.css */\n.media-hero {\n  min-height: 560px;\n  padding: 66px 0;\n  background:\n    radial-gradient(\n      circle at 72% 48%,\n      rgba(24, 99, 200, .36),\n      transparent 30%),\n    radial-gradient(\n      circle at 10% 18%,\n      rgba(22, 110, 224, .28),\n      transparent 24%),\n    linear-gradient(\n      115deg,\n      #041a3d 0%,\n      #082651 58%,\n      #06204a 100%);\n}\n.media-hero:before {\n  z-index: 0;\n  background:\n    repeating-linear-gradient(\n      116deg,\n      transparent 0 122px,\n      rgba(117, 170, 244, .11) 123px 125px,\n      transparent 126px 244px);\n  animation: media-grid-drift 18s linear infinite;\n}\n.media-hero:after {\n  position: absolute;\n  inset: auto 0 0;\n  height: 42%;\n  background:\n    repeating-linear-gradient(\n      163deg,\n      transparent 0 48px,\n      rgba(87, 151, 235, .08) 49px 50px);\n  content: "";\n  transform: perspective(520px) rotateX(58deg);\n  transform-origin: bottom;\n}\n.media-hero-net {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.media-world {\n  position: absolute;\n  z-index: 0;\n  top: 13%;\n  right: 9%;\n  width: 54%;\n  height: 72%;\n  border: 1px solid rgba(104, 167, 250, .2);\n  border-radius: 50%;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(126, 183, 255, .48) 1.8px,\n      transparent 2px);\n  background-size: 20px 20px;\n  opacity: .5;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 20%,\n      transparent 72%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 20%,\n      transparent 72%);\n  animation: media-world-pulse 6s ease-in-out infinite;\n}\n.media-hero-grid {\n  z-index: 2;\n  grid-template-columns: 1.08fr .92fr;\n  min-height: 430px;\n  gap: 56px;\n}\n.media-hero-copy {\n  position: relative;\n  z-index: 3;\n}\n.media-hero h1 {\n  max-width: 680px;\n  margin: 12px 0 17px;\n  font-size: clamp(38px, 3.65vw, 58px);\n  letter-spacing: -.04em;\n}\n.media-hero h1 em {\n  color: #65b8ff;\n  font-style: normal;\n}\n.media-hero-points {\n  display: flex;\n  gap: 22px;\n  margin-top: 19px;\n  color: #75c4ff;\n  font-weight: 800;\n}\n.media-visual-stage {\n  position: relative;\n  display: grid;\n  min-height: 390px;\n  place-items: center;\n  isolation: isolate;\n}\n.media-ring {\n  position: absolute;\n  border: 1px dashed rgba(80, 166, 255, .5);\n  border-radius: 50%;\n  animation: media-spin 18s linear infinite;\n}\n.media-ring:before,\n.media-ring:after {\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #54b3ff;\n  box-shadow: 0 0 16px #54b3ff;\n  content: "";\n}\n.media-ring:before {\n  top: 8%;\n  left: 23%;\n}\n.media-ring:after {\n  right: 5%;\n  bottom: 30%;\n}\n.ring-one {\n  width: 390px;\n  height: 390px;\n}\n.ring-two {\n  width: 315px;\n  height: 315px;\n  animation-direction: reverse;\n  animation-duration: 13s;\n}\n.media-hero-mark {\n  position: relative;\n  z-index: 2;\n  width: min(92%, 475px);\n  padding: 52px 38px;\n  border-color: rgba(255, 255, 255, .5);\n  border-radius: 26px;\n  box-shadow: 0 32px 65px rgba(0, 0, 0, .32), 0 0 45px rgba(48, 137, 255, .16);\n  animation: media-float 5.5s ease-in-out infinite;\n}\n.media-float-chip {\n  position: absolute;\n  z-index: 4;\n  padding: 10px 14px;\n  border: 1px solid rgba(155, 203, 255, .35);\n  border-radius: 12px;\n  background: rgba(5, 30, 70, .88);\n  color: #d9ebff;\n  font: 700 11px var(--mono);\n  box-shadow: 0 15px 32px rgba(0, 0, 0, .25);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.media-float-chip b {\n  display: inline-grid;\n  width: 24px;\n  height: 24px;\n  margin-right: 7px;\n  place-items: center;\n  border-radius: 8px;\n  background: #1670e8;\n  color: #fff;\n}\n.chip-approved {\n  top: 36px;\n  right: 3%;\n  animation: media-float 4.4s ease-in-out .4s infinite;\n}\n.chip-since {\n  bottom: 39px;\n  left: 0;\n  animation: media-float 5s ease-in-out 1.1s infinite;\n}\n.media-product-actions {\n  gap: 10px;\n  margin-top: 24px;\n}\n.media-product-actions a {\n  display: inline-flex;\n  min-height: 45px;\n  align-items: center;\n  justify-content: center;\n  padding: 11px 17px;\n  border: 1px solid rgba(160, 197, 242, .65);\n  background: #1267cc;\n  white-space: nowrap;\n}\n.media-product-actions a span {\n  margin-right: 7px;\n  font-size: 14px;\n}\n.media-product-actions .ghost {\n  background: rgba(6, 31, 70, .55);\n}\n.media-product-actions .media-talk {\n  border-color: #ff8515;\n  background: #ff8515;\n}\n.media-ask-ai {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 28px;\n}\n.media-ask-label {\n  display: inline-flex;\n  min-height: 30px;\n  align-items: center;\n  padding: 6px 14px;\n  border: 1px solid rgba(125, 181, 246, .38);\n  border-radius: 999px;\n  background: rgba(4, 27, 62, .6);\n  color: #eaf5ff;\n  font: 700 11px var(--mono);\n  white-space: nowrap;\n}\n.media-ai-tools {\n  display: flex;\n  gap: 8px;\n}\n.media-ai-tools a {\n  display: grid;\n  width: 39px;\n  height: 39px;\n  place-items: center;\n  border: 1px solid rgba(140, 190, 248, .35);\n  border-radius: 12px;\n  background: rgba(4, 25, 58, .78);\n  transition: transform .2s ease, background .2s ease;\n}\n.media-ai-tools a:hover {\n  background: #124d97;\n  transform: translateY(-3px);\n}\n.media-ai-tools img {\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n}\n.media-ending {\n  padding: 52px 0 40px;\n  background: #fff;\n}\n.media-ending > .wrap {\n  width: min(1192px, calc(100% - 40px));\n  max-width: 1192px;\n}\n.media-blog-label {\n  margin: 0;\n  color: #0863df;\n  font: 800 14px var(--mono);\n  letter-spacing: .18em;\n}\n.media-blog-button {\n  display: table;\n  margin: 36px auto 28px;\n  padding: 15px 27px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #1c72e8,\n      #0b4da9);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 800;\n  text-decoration: none;\n  box-shadow: 0 14px 30px rgba(19, 95, 196, .24);\n}\n.media-final-cta {\n  display: flex;\n  min-height: 200px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  padding: 30px 28px 30px 36px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      110deg,\n      #2475df 0%,\n      #1d63c4 48%,\n      #124995 100%);\n  color: #fff;\n  box-shadow: 0 20px 45px rgba(13, 65, 145, .18);\n}\n.media-final-copy h2 {\n  margin: 0 0 9px;\n  color: #fff;\n  font-size: 28px;\n  line-height: 1.2;\n}\n.media-final-copy p {\n  margin: 0;\n  color: #e1edff;\n  font-size: 15px;\n}\n.media-final-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 27px;\n}\n.media-final-actions a {\n  display: inline-flex;\n  min-height: 45px;\n  align-items: center;\n  justify-content: center;\n  padding: 11px 20px;\n  border: 1px solid rgba(255, 255, 255, .42);\n  border-radius: 9px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.media-final-actions a.primary {\n  border-color: #ff8616;\n  background: #ff8616;\n}\n.media-buddha {\n  width: 118px;\n  height: 118px;\n  margin-right: 0;\n  object-fit: contain;\n  filter: drop-shadow(0 12px 18px rgba(0, 0, 0, .22));\n  animation: media-float 4.8s ease-in-out infinite;\n}\n.media-trust-chips {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 22px;\n}\n.media-trust-chips span {\n  padding: 9px 15px;\n  border: 1px solid #d3dfef;\n  border-radius: 999px;\n  background: #fff;\n  color: #314767;\n  font-size: 11px;\n  font-weight: 700;\n}\n@keyframes media-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-15px);\n  }\n}\n@keyframes media-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes media-world-pulse {\n  0%, 100% {\n    opacity: .32;\n    transform: scale(.98);\n  }\n  50% {\n    opacity: .62;\n    transform: scale(1.03);\n  }\n}\n@keyframes media-grid-drift {\n  to {\n    background-position: 244px 0;\n  }\n}\n@media (max-width: 900px) {\n  .media-hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .media-visual-stage {\n    min-height: 340px;\n  }\n  .media-final-cta {\n    align-items: flex-start;\n  }\n  .media-final-actions {\n    max-width: 620px;\n  }\n}\n@media (max-width: 720px) {\n  .media-ask-ai {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .media-product-actions a {\n    flex: 1 1 145px;\n  }\n}\n@media (max-width: 620px) {\n  .media-hero {\n    padding: 45px 0;\n  }\n  .media-hero-points {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 8px;\n  }\n  .media-actions {\n    flex-wrap: wrap;\n  }\n  .media-visual-stage {\n    min-height: 290px;\n  }\n  .media-ring {\n    max-width: 90vw;\n    max-height: 90vw;\n  }\n  .media-float-chip {\n    display: none;\n  }\n  .media-final-cta {\n    padding: 27px 22px;\n  }\n  .media-buddha {\n    width: 85px;\n    height: 85px;\n  }\n  .media-final-actions a {\n    flex: 1 1 135px;\n    text-align: center;\n  }\n  .media-ai-tools {\n    flex-wrap: wrap;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .media-hero:before,\n  .media-world,\n  .media-ring,\n  .media-hero-mark,\n  .media-float-chip,\n  .media-buddha {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=media-kit-enhanced.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaKitPage, { className: "MediaKitPage", filePath: "src/app/pages/media-kit.page.ts", lineNumber: 15 });
})();
export {
  MediaKitPage
};
//# sourceMappingURL=chunk-CWJHVTQZ.js.map
