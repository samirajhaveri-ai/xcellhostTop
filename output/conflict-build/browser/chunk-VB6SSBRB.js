import {
  SmbSectionNavComponent
} from "./chunk-JECKRT3F.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  DocRequestService
} from "./chunk-FGJ7AN27.js";
import "./chunk-LN7P5EZP.js";
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtrustConstantResourceUrl
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/dpdpa-for-smb.page.ts
var DpdpaForSmbPage = class _DpdpaForSmbPage {
  seo = inject(SeoService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  docs = inject(DocRequestService);
  host = inject(ElementRef);
  cleanups = [];
  revealObserver;
  sectionNavLinks = [
    { label: "Overview", target: "dpdpaOverview" },
    { label: "Pricing", target: "pricing" },
    { label: "Features", target: "modules" },
    { label: "How it works", target: "dpdpaWatch" },
    { label: "Customer Testimonials", target: "dpdpaTestimonials" },
    { label: "FAQs", target: "dpdpaFaq" },
    { label: "Contact", target: "contact" }
  ];
  constructor() {
    this.seo.set("DPDP Act 2023 Compliance for SMBs India | XcellHost", "AI-powered DPDP Act compliance for Indian startups and MSMEs, combining advisory, platform and implementation across nine compliance modules.", "/dpdpa-for-smb/");
  }
  ngAfterViewInit() {
    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          this.revealObserver?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    this.host.nativeElement.querySelectorAll(".rv, .head, .tier").forEach((element) => this.revealObserver?.observe(element));
    this.host.nativeElement.querySelectorAll(".faq2-q").forEach((button) => {
      const onClick = () => button.parentElement?.classList.toggle("open");
      button.addEventListener("click", onClick);
      this.cleanups.push(() => button.removeEventListener("click", onClick));
    });
    this.host.nativeElement.querySelectorAll(".sc-tab").forEach((tab) => {
      const onClick = () => {
        this.host.nativeElement.querySelectorAll(".sc-tab").forEach((item) => item.classList.remove("on"));
        tab.classList.add("on");
      };
      tab.addEventListener("click", onClick);
      this.cleanups.push(() => tab.removeEventListener("click", onClick));
    });
    this.host.nativeElement.querySelectorAll(".count").forEach((counter) => {
      const value = Number(counter.dataset["to"]);
      const formatted = counter.dataset["comma"] === "1" ? value.toLocaleString("en-IN") : `${value}`;
      counter.textContent = `${formatted}${counter.dataset["suffix"] ?? ""}`;
    });
  }
  requestDoc(kind, event) {
    event.preventDefault();
    this.docs.ask(kind, "DPDPA for SMB");
    this.overlay.open("doc");
  }
  openContact(event) {
    event.preventDefault();
    const action = event.currentTarget.textContent?.trim() || "Assessment";
    this.topics.ask(`DPDPA for SMB \u2014 ${action}`);
    this.overlay.open("callback");
  }
  ngOnDestroy() {
    this.revealObserver?.disconnect();
    this.cleanups.forEach((cleanup) => cleanup());
  }
  static \u0275fac = function DpdpaForSmbPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DpdpaForSmbPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DpdpaForSmbPage, selectors: [["xh-dpdpa-for-smb-page"]], decls: 1429, vars: 1, consts: [["aria-label", "DPDPA for SMB hero", 1, "supplied-smb-hero-shell"], ["src", \u0275\u0275trustConstantResourceUrl`/assets/heroes/dpdpa-for-smb-hero.html`, "title", "DPDPA for SMB interactive overview", "sandbox", "allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox", "referrerpolicy", "strict-origin-when-cross-origin", "scrolling", "no", 1, "supplied-smb-hero-frame"], ["label", "DPDPA for SMB page sections", 3, "links"], [1, "hero", "legacy-smb-hero"], [1, "grid-bg"], [1, "aurora", "a1"], [1, "aurora", "a2"], [1, "aurora", "a3"], ["id", "net"], [1, "wrap"], [1, "crumb", "rv"], ["href", "https://xcellhost.cloud/"], [1, "sep"], ["href", "#"], [1, "cur"], [1, "hero-inner"], [1, "hero-copy"], [1, "eyebrow", "rv"], [1, "dot"], ["data-d", "1", 1, "rv"], [1, "grad"], [1, "serif"], ["data-d", "2", 1, "lead", "rv"], ["data-d", "2", 1, "journey", "rv"], [1, "gauge"], ["viewBox", "0 0 160 92", "aria-hidden", "true"], ["d", "M14 84a66 66 0 0 1 132 0", "fill", "none", "stroke", "#EDF1F8", "stroke-width", "15", "stroke-linecap", "round"], ["d", "M14 84a66 66 0 0 1 132 0", "fill", "none", "stroke", "url(#gg)", "stroke-width", "15", "stroke-linecap", "round", "stroke-dasharray", "207", "stroke-dashoffset", "182", 1, "gpath"], ["id", "gg", "x1", "0", "y1", "0", "x2", "1", "y2", "0"], ["offset", "0", "stop-color", "#E5484D"], ["offset", ".5", "stop-color", "#F5A524"], ["offset", "1", "stop-color", "#2ECC71"], [1, "gv"], ["data-to", "12", "data-suffix", "%", 1, "count"], [1, "journey-arrow"], [1, "gauge", "after"], ["d", "M14 84a66 66 0 0 1 132 0", "fill", "none", "stroke", "#2ECC71", "stroke-width", "15", "stroke-linecap", "round"], ["data-to", "100", "data-suffix", "%", 1, "count"], [1, "journey-txt"], ["data-d", "3", 1, "pills", "rv"], [1, "pill", "hi"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 2l3 6 6 .5-4.5 4 1.5 6L12 15l-6 3.5 1.5-6L3 8.5 9 8z"], [1, "pill"], ["d", "M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"], ["d", "M9 12l2 2 4-4", "stroke-linecap", "round"], ["d", "M3 12h4l3 8 4-16 3 8h4"], ["data-d", "4", 1, "hero-cta", "rv"], ["href", "#contact", 1, "btn", "btn-primary", "mag", 3, "click"], [1, "ar"], ["href", "#modules", 1, "btn", "btn-ghost", "mag"], ["data-d", "5", 1, "chips", "rv"], [1, "chip"], [1, "ci"], ["d", "M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5z"], ["d", "M4 14a8 8 0 0016 0"], ["x", "3", "y", "4", "width", "18", "height", "16", "rx", "2"], ["d", "M3 10h18M8 4v16"], ["d", "M12 3v18M5 8l7-5 7 5"], ["data-d", "2", 1, "dpdpa-hero-animation", "rv"], ["src", \u0275\u0275trustConstantResourceUrl`/assets/animations/dpdpa-animation.html`, "title", "DPDPA compliance checklist animation", "sandbox", "allow-scripts"], [1, "pp-trust"], ["id", "dpdpaOverview", 1, "pad"], [1, "head", "rv"], [1, "kicker"], [1, "hl"], [1, "u"], [1, "risk"], [1, "risk-list"], ["data-d", "1", 1, "risk-item", "rv"], ["data-d", "2", 1, "risk-item", "rv"], ["data-d", "3", 1, "risk-item", "rv"], [1, "risk-stats"], ["data-d", "1", 1, "rstat", "red", "rv"], ["data-d", "2", 1, "rstat", "rv"], ["data-d", "3", 1, "rstat", "rv"], ["data-to", "72", "data-suffix", " hrs", 1, "count"], ["data-d", "4", 1, "rstat", "rv"], ["data-to", "30", "data-suffix", " min", 1, "count"], ["id", "modules", 1, "pad", "pad-ice"], [1, "mods"], ["data-d", "1", 1, "mod", "rv"], [1, "mod-h"], [1, "mod-ic", "i-blue"], [1, "sec"], [1, "mod-foot"], ["data-d", "2", 1, "mod", "rv"], [1, "mod-ic", "i-purple"], ["d", "M12 11a3 3 0 013 3v6M9 20v-6a3 3 0 016 0"], ["d", "M5 12a7 7 0 0114 0v3M2 12a10 10 0 0120 0"], ["data-d", "3", 1, "mod", "rv"], [1, "mod-ic", "i-red"], ["d", "M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"], ["cx", "12", "cy", "12", "r", "3"], ["data-d", "4", 1, "mod", "rv"], [1, "mod-ic", "i-green"], ["d", "M7 11l-3 3a3 3 0 004 4l3-3"], ["d", "M17 13l3-3a3 3 0 00-4-4l-3 3"], ["d", "M9 15l6-6", "stroke-linecap", "round"], ["data-d", "5", 1, "mod", "rv"], [1, "mod-ic", "i-amber"], ["d", "M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V7z"], ["d", "M14 2v5h5M9 13h6M9 17h4", "stroke-linecap", "round"], [1, "mod-ic", "i-teal"], ["x", "4", "y", "10", "width", "16", "height", "11", "rx", "2"], ["d", "M8 10V7a4 4 0 018 0v3", "stroke-linecap", "round"], ["cx", "9", "cy", "8", "r", "3.5"], ["d", "M2 20a7 7 0 0114 0"], ["d", "M17 8h5M17 12h5M17 16h3", "stroke-linecap", "round"], ["x", "3", "y", "4", "width", "18", "height", "6", "rx", "2"], ["x", "3", "y", "14", "width", "18", "height", "6", "rx", "2"], ["d", "M7 7h.01M7 17h.01", "stroke-linecap", "round"], ["d", "M12 2l10 18H2z"], ["d", "M12 9v5M12 17h.01", "stroke-linecap", "round"], [1, "pad", "pad-navy"], [1, "smap"], ["data-d", "1", 1, "smap-row", "rv"], [1, "s"], ["data-d", "2", 1, "smap-row", "rv"], ["data-d", "3", 1, "smap-row", "rv"], ["data-d", "4", 1, "smap-row", "rv"], ["data-d", "5", 1, "smap-row", "rv"], [1, "smap-note"], [2, "background", "#7FB2FF"], [2, "background", "#FF8C1A"], [1, "pad"], [1, "ai"], ["data-d", "1", 1, "aic", "rv"], [1, "tag"], ["data-d", "2", 1, "aic", "rv"], ["data-d", "3", 1, "aic", "rv"], ["data-d", "4", 1, "aic", "rv"], ["id", "dpdpaWatch", 1, "pad", "pad-ice"], [1, "flow"], ["data-d", "1", 1, "fstep", "rv"], [1, "n"], ["data-d", "2", 1, "fstep", "rv"], ["data-d", "3", 1, "fstep", "rv"], ["data-d", "4", 1, "fstep", "rv"], ["data-d", "5", 1, "fstep", "rv"], [1, "head", "rv", "steps-heading", 2, "margin-top", "70px"], [1, "steps3"], ["data-d", "1", 1, "s3", "rv"], [1, "num"], ["data-d", "2", 1, "s3", "rv"], ["data-d", "3", 1, "s3", "rv"], [1, "head", "rv", "comparison-heading"], [1, "cmp", "rv"], [1, "cmp-row", "cmp-head"], [1, "old"], [1, "new"], [1, "cmp-row"], [1, "lbl"], [1, "pad", "pad-ice"], [1, "head", "rv", "frameworks-heading"], [1, "fw"], ["data-d", "1", 1, "fwc", "rv"], [1, "top"], [1, "geo"], ["href", "#contact", 1, "btn", "btn-t", "btn-sm", "mag", 3, "click"], ["data-d", "2", 1, "fwc", "rv"], ["data-d", "3", 1, "fwc", "rv"], ["data-d", "4", 1, "fwc", "soon", "rv"], ["href", "#contact", 1, "btn", "btn-ghost", "btn-sm", "mag", 3, "click"], [1, "head", "rv", "integrations-heading"], [1, "marq-wrap", "on-white"], [1, "track"], [1, "ilogo"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#ff9900,#232f3e)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#0078d4,#50e6ff)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#4285f4,#34a853)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#336791,#1d3f5c)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#13aa52,#0b6b34)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#00758f,#f29111)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#29b5e8,#0f6d8c)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#005571,#00bfb3)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#d82c20,#a41e15)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#f80000,#a30000)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#00297a,#001a4d)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#eb5424,#b03d18)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#632ca6,#3d1a66)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#000000,#65a637)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#f46800,#b04c00)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#4a154b,#36c5f0)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#24292e,#000)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#0052cc,#2684ff)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#00a1e0,#0070a8)"], [1, "dotmark", 2, "background", "linear-gradient(135deg,#326ce5,#1a4fb0)"], ["aria-hidden", "true", 1, "ilogo"], [1, "secg"], ["data-d", "1", 1, "secc", "rv"], ["data-d", "2", 1, "secc", "rv"], ["data-d", "3", 1, "secc", "rv"], ["data-d", "4", 1, "secc", "rv"], ["data-d", "5", 1, "secc", "rv"], [1, "langs", "rv"], ["id", "pricing", 1, "pad"], [1, "head", "rv", "pricing-heading"], [1, "price"], ["data-d", "1", 1, "tier", "rv"], [1, "sub"], [1, "amt"], ["data-to", "10000", "data-comma", "1", 1, "num", "count"], [1, "per"], [1, "lim"], [1, "inc"], [1, "ck"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "3"], ["d", "M5 12l5 5L20 6", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "no"], ["d", "M6 6l12 12M18 6L6 18", "stroke-linecap", "round"], [1, "addon"], ["href", "/dpdpa-for-smb/launch-checkout", 1, "btn", "btn-t", "mag"], ["data-d", "2", 1, "tier", "pop", "rv"], ["data-to", "30000", "data-comma", "1", 1, "num", "count"], ["href", "/dpdpa-for-smb/growth-checkout", 1, "btn", "btn-orange", "mag"], ["data-d", "3", 1, "tier", "rv"], [1, "amt", "custom"], ["href", "/dpdpa-for-smb/enterprise-enquiry", 1, "btn", "btn-t", "mag"], [1, "price-note"], ["id", "dpdpaTestimonials", 1, "pad", "pad-ice"], [1, "head", "rv", "testimonials-heading"], [1, "tcards"], ["data-d", "1", 1, "tcard", "rv", "tilt"], [1, "qb"], [1, "tav"], [1, "tname"], [1, "trole"], ["data-d", "2", 1, "tcard", "rv", "tilt"], ["data-d", "3", 1, "tcard", "rv", "tilt"], ["data-d", "4", 1, "tcard", "rv", "tilt"], ["id", "dpdpaFaq", 1, "pad"], [1, "faqgrid"], ["data-d", "1", 1, "faq2", "open", "rv"], ["type", "button", 1, "faq2-q"], [1, "faq2-ic"], [1, "faq2-a"], ["data-d", "2", 1, "faq2", "rv"], ["data-d", "3", 1, "faq2", "rv"], ["data-d", "4", 1, "faq2", "rv"], ["data-d", "5", 1, "faq2", "rv"], ["data-d", "1", 1, "faq2", "rv"], ["id", "contact", 1, "pad", 2, "padding-top", "0"], [1, "pp-cta", "dpdpa-buddha-strip", "rv"], [1, "pp-cta-copy"], [1, "dpdpa-buddha-actions"], ["href", "#contact", 1, "btn", "btn-orange", 3, "click"], ["href", "#contact", 1, "btn", "btn-outline", 3, "click"], ["href", "#", 1, "btn", "btn-outline", 3, "click"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-outline"], ["href", "mailto:sales@xcellhost.cloud", 1, "btn", "btn-outline"], ["href", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", 1, "pp-cta-buddha"], [1, "pp-proof", "rv"]], template: function DpdpaForSmbPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "iframe", 1);
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "xh-smb-section-nav", 2);
      \u0275\u0275elementStart(3, "section", 3);
      \u0275\u0275element(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "canvas", 8);
      \u0275\u0275elementStart(9, "div", 9)(10, "div", 10)(11, "a", 11);
      \u0275\u0275text(12, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 12);
      \u0275\u0275text(14, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 13);
      \u0275\u0275text(16, "Digital Trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 12);
      \u0275\u0275text(18, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 14);
      \u0275\u0275text(20, "DPDP Compliance for SMBs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 15)(22, "div", 16)(23, "span", 17);
      \u0275\u0275element(24, "span", 18);
      \u0275\u0275text(25, "DPDP Act 2023 \xB7 Built for Indian SMBs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "h1", 19);
      \u0275\u0275text(27, "Automate DPDP");
      \u0275\u0275element(28, "br");
      \u0275\u0275elementStart(29, "span", 20);
      \u0275\u0275text(30, "Compliance.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 21);
      \u0275\u0275text(32, "End to end.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "p", 22);
      \u0275\u0275text(34, "End-to-End DPDP Advisory + Platform + Implementation. AI-powered compliance for Indian startups and MSMEs \u2014 delivered and supported by XcellHost since 1999.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 23)(36, "div", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(37, "svg", 25);
      \u0275\u0275element(38, "path", 26)(39, "path", 27);
      \u0275\u0275elementStart(40, "defs")(41, "linearGradient", 28);
      \u0275\u0275element(42, "stop", 29)(43, "stop", 30)(44, "stop", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(45, "div", 32)(46, "b", 33);
      \u0275\u0275text(47, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "Before");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "span", 34);
      \u0275\u0275text(51, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(53, "svg", 25);
      \u0275\u0275element(54, "path", 26)(55, "path", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(56, "div", 32)(57, "b", 37);
      \u0275\u0275text(58, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "With XcellHost");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "div", 38)(62, "b");
      \u0275\u0275text(63, "Your DPDP Compliance Journey");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Gap assessment to audit-ready evidence in 4\u20136 months");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 39)(67, "span", 40);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(68, "svg", 41);
      \u0275\u0275element(69, "path", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275text(70, "Free readiness assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(71, "span", 43);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(72, "svg", 41);
      \u0275\u0275element(73, "path", 44)(74, "path", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275text(75, "ISO 27001 certified");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(76, "span", 43);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(77, "svg", 41);
      \u0275\u0275element(78, "path", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275text(79, "Data resident in India");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(80, "div", 47)(81, "a", 48);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_81_listener($event) {
        return ctx.openContact($event);
      });
      \u0275\u0275text(82, "Start Free Assessment ");
      \u0275\u0275elementStart(83, "span", 49);
      \u0275\u0275text(84, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "a", 50);
      \u0275\u0275text(86, "Explore the 9 Modules");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 51)(88, "div", 52)(89, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(90, "svg", 41);
      \u0275\u0275element(91, "path", 54)(92, "path", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(93, "AI-Powered Assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(94, "div", 52)(95, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(96, "svg", 41);
      \u0275\u0275element(97, "rect", 56)(98, "path", 57);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(99, "Single Compliance Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(100, "div", 52)(101, "span", 53);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(102, "svg", 41);
      \u0275\u0275element(103, "path", 58);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(104, "Audit-Ready Evidence");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(105, "div", 59);
      \u0275\u0275element(106, "iframe", 60);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(107, "div", 61)(108, "div", 9)(109, "span")(110, "b");
      \u0275\u0275text(111, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275text(112, " & ");
      \u0275\u0275elementStart(113, "b");
      \u0275\u0275text(114, "20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(115, " certified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "span")(117, "b");
      \u0275\u0275text(118, "Tier-4");
      \u0275\u0275elementEnd();
      \u0275\u0275text(119, " Indian datacenters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "span")(121, "b");
      \u0275\u0275text(122, "10,000+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(123, " customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "span")(125, "b");
      \u0275\u0275text(126, "Since 1999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "span")(128, "b");
      \u0275\u0275text(129, "99.95% uptime SLA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "span")(131, "b");
      \u0275\u0275text(132, "24\xD77");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " NOC + SOC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(134, "section", 62)(135, "div", 9)(136, "div", 63)(137, "span", 64);
      \u0275\u0275text(138, "Why act now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "h2");
      \u0275\u0275text(140, "The cost of not being ");
      \u0275\u0275elementStart(141, "span", 65);
      \u0275\u0275text(142, "DPDP compliant");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(143, "div", 66);
      \u0275\u0275elementStart(144, "p");
      \u0275\u0275text(145, "The Digital Personal Data Protection Act 2023 is not optional. Non-compliance exposes your business to penalties, reputational damage and lost revenue.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "div", 67)(147, "div", 68)(148, "div", 69)(149, "div")(150, "h4");
      \u0275\u0275text(151, "Penalties up to \u20B9250 crore");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p");
      \u0275\u0275text(153, "DPDP Act penalties reach \u20B9250 crore per contravention. A single breach, a missing consent record or an unnotified incident can trigger enforcement action from the Data Protection Board of India.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "div", 70)(155, "div")(156, "h4");
      \u0275\u0275text(157, "Reputational & revenue risk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "p");
      \u0275\u0275text(159, "Customers leave after a breach, and Indian enterprises increasingly require documented DPDP compliance from vendors before signing. No evidence pack, no contract.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(160, "div", 71)(161, "div")(162, "h4");
      \u0275\u0275text(163, "Early compliance is a competitive edge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "p");
      \u0275\u0275text(165, "Businesses that comply early win government tenders, enterprise deals and customer trust faster. Our readiness assessment takes 30 minutes and gives you a costed roadmap.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(166, "div", 72)(167, "div", 73)(168, "b");
      \u0275\u0275text(169, "\u20B9250 Cr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "span");
      \u0275\u0275text(171, "Max penalty per violation");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 74)(173, "b");
      \u0275\u0275text(174, "\u20B917.9 Cr");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "span");
      \u0275\u0275text(176, "Avg. data breach cost in India");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 75)(178, "b", 76);
      \u0275\u0275text(179, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "span");
      \u0275\u0275text(181, "Breach notification deadline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "div", 77)(183, "b", 78);
      \u0275\u0275text(184, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "span");
      \u0275\u0275text(186, "To know your readiness score");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(187, "section", 79)(188, "div", 9)(189, "div", 63)(190, "span", 64);
      \u0275\u0275text(191, "The platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "h2");
      \u0275\u0275text(193, "Nine modules. ");
      \u0275\u0275elementStart(194, "span", 65);
      \u0275\u0275text(195, "One compliance dashboard.");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(196, "div", 66);
      \u0275\u0275elementStart(197, "p");
      \u0275\u0275text(198, "Every requirement of the DPDP Act mapped to a working module \u2014 assessment, discovery, consent, policy, security, vendors and breach response.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "div", 80)(200, "article", 81)(201, "div", 82)(202, "span", 83);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(203, "svg", 41);
      \u0275\u0275element(204, "path", 44)(205, "path", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(206, "div")(207, "h3");
      \u0275\u0275text(208, "DPDP Assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "span", 84);
      \u0275\u0275text(210, "Sec 4\u20137");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(211, "p");
      \u0275\u0275text(212, "Compliance health checks with remediation guidance \u2014 a section-by-section gap assessment across all 44 sections of the DPDP Act 2023.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "ul")(214, "li");
      \u0275\u0275text(215, "Maturity scoring on a 0\u20134 scale with per-control rationale and evidence pointers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "li");
      \u0275\u0275text(217, "Risk heatmap ranking gaps by likelihood and penalty exposure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "li");
      \u0275\u0275text(219, "Context-aware questionnaires tailored to your industry, size and tech stack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "li");
      \u0275\u0275text(221, "Prioritised 90-day remediation roadmap, consultant signed-off");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "div", 85)(223, "span");
      \u0275\u0275text(224, "44 sections");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "span");
      \u0275\u0275text(226, "RAG scoring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "span");
      \u0275\u0275text(228, "30-min run");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(229, "article", 86)(230, "div", 82)(231, "span", 87);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(232, "svg", 41);
      \u0275\u0275element(233, "path", 88)(234, "path", 89);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(235, "div")(236, "h3");
      \u0275\u0275text(237, "PII Scanner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "span", 84);
      \u0275\u0275text(239, "Sec 8(1), 8(5)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(240, "p");
      \u0275\u0275text(241, "Detect and anonymise personally identifiable data wherever it lives, then build a defensible Record of Processing Activities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "ul")(243, "li");
      \u0275\u0275text(244, "50+ Indian recognisers \u2014 Aadhaar, PAN, UPI, GSTIN, voter ID, driving licence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "li");
      \u0275\u0275text(246, "Scans PostgreSQL, MySQL, MongoDB, Snowflake, Oracle, file shares and SaaS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "li");
      \u0275\u0275text(248, "Auto-generated RoPA mapped to DPDP Section 5/6 lawful bases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "li");
      \u0275\u0275text(250, "Per-user drill-down to surface over-privileged accounts on sensitive stores");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(251, "div", 85)(252, "span");
      \u0275\u0275text(253, "50+ patterns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "span");
      \u0275\u0275text(255, "Auto RoPA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "span");
      \u0275\u0275text(257, "Agentless");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(258, "article", 90)(259, "div", 82)(260, "span", 91);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(261, "svg", 41);
      \u0275\u0275element(262, "path", 92)(263, "circle", 93);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(264, "div")(265, "h3");
      \u0275\u0275text(266, "Universal VA Scanner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(267, "span", 84);
      \u0275\u0275text(268, "Sec 8(7)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(269, "p");
      \u0275\u0275text(270, "Network, web app, code and secrets scanning in one engine \u2014 the security safeguards the DPDP Act expects you to demonstrate.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(271, "ul")(272, "li");
      \u0275\u0275text(273, "Unified coverage across web, network, cloud, container and DAST surfaces");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(274, "li");
      \u0275\u0275text(275, "Secrets detection in source control before credentials reach production");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "li");
      \u0275\u0275text(277, "Hygiene grade with scan-over-scan improvement trend");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(278, "li");
      \u0275\u0275text(279, "Findings mapped to ISO 27001 Annex A and SOC 2 Trust Services Criteria");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "div", 85)(281, "span");
      \u0275\u0275text(282, "Web + network");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(283, "span");
      \u0275\u0275text(284, "Secrets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(285, "span");
      \u0275\u0275text(286, "Hygiene grade");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(287, "article", 94)(288, "div", 82)(289, "span", 95);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(290, "svg", 41);
      \u0275\u0275element(291, "path", 96)(292, "path", 97)(293, "path", 98);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(294, "div")(295, "h3");
      \u0275\u0275text(296, "Consent Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "span", 84);
      \u0275\u0275text(298, "Sec 6");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(299, "p");
      \u0275\u0275text(300, "DPDP-compliant consent collection with immutable audit trails \u2014 the module most SMBs would otherwise build in-house and get wrong.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "ul")(302, "li");
      \u0275\u0275text(303, "Per-purpose granular consent capture with version-controlled notices");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "li");
      \u0275\u0275text(305, "Notices translated across 22+ Indian languages plus Hinglish");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "li");
      \u0275\u0275text(307, "Hash-chained consent event log built for regulator review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(308, "li");
      \u0275\u0275text(309, "One-click withdrawal, nominee management and grievance routing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(310, "div", 85)(311, "span");
      \u0275\u0275text(312, "22+ languages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "span");
      \u0275\u0275text(314, "Hash-chained");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "span");
      \u0275\u0275text(316, "DPR-linked");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "article", 99)(318, "div", 82)(319, "span", 100);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(320, "svg", 41);
      \u0275\u0275element(321, "path", 101)(322, "path", 102);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(323, "div")(324, "h3");
      \u0275\u0275text(325, "Policy Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "span", 84);
      \u0275\u0275text(327, "Sec 5");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(328, "p");
      \u0275\u0275text(329, "AI-powered policy generation and validation \u2014 privacy notices, retention schedules and internal policies that actually match your operations.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "ul")(331, "li");
      \u0275\u0275text(332, "Generate privacy notices, retention and data-handling policies from your RoPA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "li");
      \u0275\u0275text(334, "Policy Analyzer scans existing documents against DPDP requirements and flags gaps");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "li");
      \u0275\u0275text(336, "Version control with approval workflow and publication history");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "li");
      \u0275\u0275text(338, "Evidence pointers linking each clause to the control it satisfies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(339, "div", 85)(340, "span");
      \u0275\u0275text(341, "AI drafting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(342, "span");
      \u0275\u0275text(343, "Gap analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "span");
      \u0275\u0275text(345, "Versioned");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(346, "article", 81)(347, "div", 82)(348, "span", 103);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(349, "svg", 41);
      \u0275\u0275element(350, "rect", 104)(351, "path", 105);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(352, "div")(353, "h3");
      \u0275\u0275text(354, "ISO 27001 Assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "span", 84);
      \u0275\u0275text(356, "Global");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(357, "p");
      \u0275\u0275text(358, "Gap analysis across 14 scope heads and 58 controls, with the same scoring model and roadmap output as the DPDP assessment.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(359, "ul")(360, "li");
      \u0275\u0275text(361, "Control-by-control maturity scoring with evidence requirements listed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(362, "li");
      \u0275\u0275text(363, "Shared-control mapping so DPDP work counts toward ISO readiness");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(364, "li");
      \u0275\u0275text(365, "Statement of Applicability draft generated from your assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "li");
      \u0275\u0275text(367, "Prioritised remediation plan sized for an SMB security team");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(368, "div", 85)(369, "span");
      \u0275\u0275text(370, "14 scope heads");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "span");
      \u0275\u0275text(372, "58 controls");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "span");
      \u0275\u0275text(374, "SoA draft");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(375, "article", 86)(376, "div", 82)(377, "span", 83);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(378, "svg", 41);
      \u0275\u0275element(379, "circle", 106)(380, "path", 107)(381, "path", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(382, "div")(383, "h3");
      \u0275\u0275text(384, "Vendor Risk Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "span", 84);
      \u0275\u0275text(386, "Sec 8(2), 16");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(387, "p");
      \u0275\u0275text(388, "Third-party risk assessments and contract management \u2014 because under the DPDP Act your processors' failures are still your liability.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "ul")(390, "li");
      \u0275\u0275text(391, "Six-dimension scoring: profile, financial health, compliance, references, security, BCP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "li");
      \u0275\u0275text(393, "Risk-adaptive Data Processing Agreements with configurable clause sets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(394, "li");
      \u0275\u0275text(395, "Sub-processor inventory with cross-border transfer assessment under Section 16");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "li");
      \u0275\u0275text(397, "Continuous monitoring of vendor breach disclosures and certification lapses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(398, "div", 85)(399, "span");
      \u0275\u0275text(400, "6 dimensions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(401, "span");
      \u0275\u0275text(402, "DPA templates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "span");
      \u0275\u0275text(404, "Sub-processors");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(405, "article", 90)(406, "div", 82)(407, "span", 87);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(408, "svg", 41);
      \u0275\u0275element(409, "rect", 109)(410, "rect", 110)(411, "path", 111);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(412, "div")(413, "h3");
      \u0275\u0275text(414, "SOC 2 Assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(415, "span", 84);
      \u0275\u0275text(416, "Global");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(417, "p");
      \u0275\u0275text(418, "Readiness assessment across 11 trust service categories, for SMBs whose US and enterprise buyers ask for a SOC 2 report.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "ul")(420, "li");
      \u0275\u0275text(421, "Readiness scoring across Security, Availability, Confidentiality, Processing Integrity and Privacy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "li");
      \u0275\u0275text(423, "Control mapping shared with DPDP and ISO 27001 to avoid duplicate work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "li");
      \u0275\u0275text(425, "Evidence checklist prepared for your Type I or Type II audit window");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(426, "li");
      \u0275\u0275text(427, "Auditor-ready export pack with gaps and owners assigned");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(428, "div", 85)(429, "span");
      \u0275\u0275text(430, "11 categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "span");
      \u0275\u0275text(432, "Type I / II prep");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "span");
      \u0275\u0275text(434, "Shared controls");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(435, "article", 94)(436, "div", 82)(437, "span", 91);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(438, "svg", 41);
      \u0275\u0275element(439, "path", 112)(440, "path", 113);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(441, "div")(442, "h3");
      \u0275\u0275text(443, "Breach Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(444, "span", 84);
      \u0275\u0275text(445, "Sec 8(6), 8(9)");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(446, "p");
      \u0275\u0275text(447, "DPDP Act breach notification templates and a 72-hour playbook, so the worst day of your year is not also an improvised one.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "ul")(449, "li");
      \u0275\u0275text(450, "72-hour playbook: board notification, Data Protection Board filing, principal communication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(451, "li");
      \u0275\u0275text(452, "Pre-approved notification templates aligned to the DPDP breach rules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(453, "li");
      \u0275\u0275text(454, "Incident timeline with evidence capture and named-owner escalation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(455, "li");
      \u0275\u0275text(456, "Quarterly tabletop exercises and DPO drill reports on retainer engagements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(457, "div", 85)(458, "span");
      \u0275\u0275text(459, "72-hr playbook");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(460, "span");
      \u0275\u0275text(461, "DPB filing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(462, "span");
      \u0275\u0275text(463, "Tabletops");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(464, "section", 114)(465, "div", 9)(466, "div", 63)(467, "span", 64);
      \u0275\u0275text(468, "End-to-end DPDP coverage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "h2");
      \u0275\u0275text(470, "DPDP Act 2023 \u2014 section-wise compliance map");
      \u0275\u0275elementEnd();
      \u0275\u0275element(471, "div", 66);
      \u0275\u0275elementStart(472, "p");
      \u0275\u0275text(473, "Every requirement of the Digital Personal Data Protection Act mapped to an XcellHost module or an advisory engagement.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(474, "div", 115)(475, "div", 116)(476, "span", 117);
      \u0275\u0275text(477, "Start");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(478, "div")(479, "b");
      \u0275\u0275text(480, "GAP Assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(481, "span");
      \u0275\u0275text(482, "DPDP gap assessment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(483, "div", 118)(484, "span", 117);
      \u0275\u0275text(485, "Sec 4\u20137");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "div")(487, "b");
      \u0275\u0275text(488, "Consent Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "span");
      \u0275\u0275text(490, "Consent + data principal requests");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(491, "div", 119)(492, "span", 117);
      \u0275\u0275text(493, "Sec 5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(494, "div")(495, "b");
      \u0275\u0275text(496, "Privacy Notice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(497, "span");
      \u0275\u0275text(498, "Policy generator & management");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(499, "div", 120)(500, "span", 117);
      \u0275\u0275text(501, "Sec 8(1), 8(5)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(502, "div")(503, "b");
      \u0275\u0275text(504, "Purpose Limitation & Minimisation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "span");
      \u0275\u0275text(506, "PII Scanner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(507, "div", 121)(508, "span", 117);
      \u0275\u0275text(509, "Sec 11\u201313");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(510, "div")(511, "b");
      \u0275\u0275text(512, "Data Principal Rights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(513, "span");
      \u0275\u0275text(514, "DPR automation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(515, "div", 116)(516, "span", 117);
      \u0275\u0275text(517, "Sec 13");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(518, "div")(519, "b");
      \u0275\u0275text(520, "Grievance Redressal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(521, "span");
      \u0275\u0275text(522, "Integrated with consent module");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(523, "div", 118)(524, "span", 117);
      \u0275\u0275text(525, "Sec 8(7)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "div")(527, "b");
      \u0275\u0275text(528, "Security Safeguards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "span");
      \u0275\u0275text(530, "Universal VA Scanner");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(531, "div", 119)(532, "span", 117);
      \u0275\u0275text(533, "Sec 8(9)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "div")(535, "b");
      \u0275\u0275text(536, "Breach Notification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "span");
      \u0275\u0275text(538, "Breach notification templates");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(539, "div", 120)(540, "span", 117);
      \u0275\u0275text(541, "Sec 8(8)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "div")(543, "b");
      \u0275\u0275text(544, "Third Party Risk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(545, "span");
      \u0275\u0275text(546, "TPRM module");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(547, "div", 121)(548, "span", 117);
      \u0275\u0275text(549, "Sec 10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "div")(551, "b");
      \u0275\u0275text(552, "DPO, DPIA & Audit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "span");
      \u0275\u0275text(554, "XcellHost advisory-led");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(555, "div", 116)(556, "span", 117);
      \u0275\u0275text(557, "Sec 16");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(558, "div")(559, "b");
      \u0275\u0275text(560, "Cross-Border Transfer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(561, "span");
      \u0275\u0275text(562, "Vendor risk + data residency review");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(563, "div", 118)(564, "span", 117);
      \u0275\u0275text(565, "Ongoing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(566, "div")(567, "b");
      \u0275\u0275text(568, "Continuous Compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "span");
      \u0275\u0275text(570, "Drift detection + quarterly DPO review");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(571, "div", 122)(572, "span");
      \u0275\u0275element(573, "i", 123);
      \u0275\u0275text(574, "Platform-automated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "span");
      \u0275\u0275element(576, "i", 124);
      \u0275\u0275text(577, "Advisory-led");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(578, "section", 125)(579, "div", 9)(580, "div", 63)(581, "span", 64);
      \u0275\u0275text(582, "AI-native architecture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(583, "h2");
      \u0275\u0275text(584, "Built on ");
      \u0275\u0275elementStart(585, "span", 65);
      \u0275\u0275text(586, "seven AI engines");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(587, "div", 66);
      \u0275\u0275elementStart(588, "p");
      \u0275\u0275text(589, "Every module is powered by purpose-built AI. Not bolted on, not an afterthought.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(590, "div", 126)(591, "div", 127)(592, "span", 128);
      \u0275\u0275text(593, "Latest LLM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "b");
      \u0275\u0275text(595, "Compliance Copilot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(596, "span");
      \u0275\u0275text(597, "Expert GRC assistant grounded in DPDP, ISO 27001, SOC 2 and GDPR frameworks.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(598, "div", 129)(599, "span", 128);
      \u0275\u0275text(600, "Document AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(601, "b");
      \u0275\u0275text(602, "Policy Analyzer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "span");
      \u0275\u0275text(604, "Scans policy documents against DPDP requirements, identifies gaps and generates roadmaps.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(605, "div", 130)(606, "span", 128);
      \u0275\u0275text(607, "Research AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "b");
      \u0275\u0275text(609, "Vendor Intelligence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(610, "span");
      \u0275\u0275text(611, "Reputation research and risk insight for third-party vendors and sub-processors.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "div", 131)(613, "span", 128);
      \u0275\u0275text(614, "Legal AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(615, "b");
      \u0275\u0275text(616, "Contract Generator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(617, "span");
      \u0275\u0275text(618, "Risk-adaptive DPAs with configurable clauses calibrated to each vendor's risk profile.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(619, "div", 127)(620, "span", 128);
      \u0275\u0275text(621, "Adaptive AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(622, "b");
      \u0275\u0275text(623, "Assessment Engine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "span");
      \u0275\u0275text(625, "Customises compliance questionnaires to your technology landscape and risk profile.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(626, "div", 129)(627, "span", 128);
      \u0275\u0275text(628, "Vision AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(629, "b");
      \u0275\u0275text(630, "Artifact Analyzer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "span");
      \u0275\u0275text(632, "Validates uploaded evidence \u2014 policies, certificates, audit reports \u2014 against requirements.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(633, "div", 130)(634, "span", 128);
      \u0275\u0275text(635, "Analysis AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "b");
      \u0275\u0275text(637, "Due Diligence Engine");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "span");
      \u0275\u0275text(639, "Multi-engine due diligence covering market, founder and compliance risk.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(640, "div", 131)(641, "span", 128);
      \u0275\u0275text(642, "Human");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(643, "b");
      \u0275\u0275text(644, "Certified Consultants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(645, "span");
      \u0275\u0275text(646, "XcellHost advisors review every AI output before it reaches your board pack.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(647, "section", 132)(648, "div", 9)(649, "div", 63)(650, "span", 64);
      \u0275\u0275text(651, "How it works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "h2");
      \u0275\u0275text(653, "Agentless deployment, ");
      \u0275\u0275elementStart(654, "span", 65);
      \u0275\u0275text(655, "live in minutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(656, "div", 66);
      \u0275\u0275elementStart(657, "p");
      \u0275\u0275text(658, "Connect your data sources and the platform starts scanning, classifying and scoring immediately \u2014 no agents to roll out.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(659, "div", 133)(660, "div", 134)(661, "div", 135);
      \u0275\u0275text(662, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(663, "b");
      \u0275\u0275text(664, "Connect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(665, "span");
      \u0275\u0275text(666, "Agentless deployment across your databases, cloud and SaaS");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(667, "div", 136)(668, "div", 135);
      \u0275\u0275text(669, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(670, "b");
      \u0275\u0275text(671, "Discover");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(672, "span");
      \u0275\u0275text(673, "AI-powered data discovery and PII classification");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(674, "div", 137)(675, "div", 135);
      \u0275\u0275text(676, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(677, "b");
      \u0275\u0275text(678, "Govern");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(679, "span");
      \u0275\u0275text(680, "Control access, purposes and permissions at scale");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(681, "div", 138)(682, "div", 135);
      \u0275\u0275text(683, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(684, "b");
      \u0275\u0275text(685, "Protect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(686, "span");
      \u0275\u0275text(687, "Apply security controls and close findings automatically");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(688, "div", 139)(689, "div", 135);
      \u0275\u0275text(690, "05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(691, "b");
      \u0275\u0275text(692, "Monitor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(693, "span");
      \u0275\u0275text(694, "Continuous risk monitoring, drift detection and alerts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(695, "div", 140)(696, "span", 64);
      \u0275\u0275text(697, "See it in action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(698, "h2");
      \u0275\u0275text(699, "From assessment to compliance in ");
      \u0275\u0275elementStart(700, "span", 65);
      \u0275\u0275text(701, "three steps");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(702, "div", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(703, "div", 141)(704, "div", 142)(705, "span", 143);
      \u0275\u0275text(706, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(707, "b");
      \u0275\u0275text(708, "Assess");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(709, "p");
      \u0275\u0275text(710, "Take the AI-powered DPDP or ISO 27001 assessment. Answer context-aware questions tailored to your industry and size \u2014 roughly 30 minutes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(711, "div", 144)(712, "span", 143);
      \u0275\u0275text(713, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(714, "b");
      \u0275\u0275text(715, "Score");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(716, "p");
      \u0275\u0275text(717, "Get an instant readiness score with gap analysis, category breakdowns and RAG status indicators across every section of the Act.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(718, "div", 145)(719, "span", 143);
      \u0275\u0275text(720, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "b");
      \u0275\u0275text(722, "Remediate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(723, "p");
      \u0275\u0275text(724, "Follow a prioritised roadmap with actionable steps, owners, tool recommendations and downloadable evidence-backed reports.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(725, "section", 125)(726, "div", 9)(727, "div", 146)(728, "span", 64);
      \u0275\u0275text(729, "Why switch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(730, "h2");
      \u0275\u0275text(731, "Traditional consultants ");
      \u0275\u0275elementStart(732, "span", 65);
      \u0275\u0275text(733, "vs the XcellHost platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(734, "div", 66);
      \u0275\u0275elementStart(735, "p");
      \u0275\u0275text(736, "Advisory still matters \u2014 but the evidence, scanning and monitoring underneath it should be automated.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(737, "div", 147)(738, "div", 148);
      \u0275\u0275element(739, "div");
      \u0275\u0275elementStart(740, "div", 149);
      \u0275\u0275text(741, "Traditional consultants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(742, "div", 150);
      \u0275\u0275text(743, "XcellHost DPDP platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(744, "div", 151)(745, "div", 152);
      \u0275\u0275text(746, "Cost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(747, "div", 149);
      \u0275\u0275text(748, "\u20B95\u201320 lakh per engagement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(749, "div", 150);
      \u0275\u0275text(750, "From \u20B910,000 / month");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(751, "div", 151)(752, "div", 152);
      \u0275\u0275text(753, "Time to first result");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(754, "div", 149);
      \u0275\u0275text(755, "4\u20136 weeks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(756, "div", 150);
      \u0275\u0275text(757, "Under 30 minutes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(758, "div", 151)(759, "div", 152);
      \u0275\u0275text(760, "Approach");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(761, "div", 149);
      \u0275\u0275text(762, "Manual, spreadsheet-based");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "div", 150);
      \u0275\u0275text(764, "AI-driven automation + certified consultants");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(765, "div", 151)(766, "div", 152);
      \u0275\u0275text(767, "Output");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(768, "div", 149);
      \u0275\u0275text(769, "Static PDF report");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(770, "div", 150);
      \u0275\u0275text(771, "Live dashboard + continuous monitoring");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(772, "div", 151)(773, "div", 152);
      \u0275\u0275text(774, "Language support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(775, "div", 149);
      \u0275\u0275text(776, "English only");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(777, "div", 150);
      \u0275\u0275text(778, "22+ Indian languages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(779, "div", 151)(780, "div", 152);
      \u0275\u0275text(781, "Reassessment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(782, "div", 149);
      \u0275\u0275text(783, "Billed per engagement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(784, "div", 150);
      \u0275\u0275text(785, "Unlimited assessments included");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(786, "div", 151)(787, "div", 152);
      \u0275\u0275text(788, "Evidence collection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(789, "div", 149);
      \u0275\u0275text(790, "Manual screenshots");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(791, "div", 150);
      \u0275\u0275text(792, "Automated from connected systems");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(793, "section", 153)(794, "div", 9)(795, "div", 154)(796, "span", 64);
      \u0275\u0275text(797, "Compliance frameworks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(798, "h2");
      \u0275\u0275text(799, "DPDP and ISO 27001 live \u2014 ");
      \u0275\u0275elementStart(800, "span", 65);
      \u0275\u0275text(801, "more coming");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(802, "div", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "div", 155)(804, "div", 156)(805, "div", 157)(806, "h3");
      \u0275\u0275text(807, "DPDP Act");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(808, "span", 158);
      \u0275\u0275text(809, "India");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(810, "p");
      \u0275\u0275text(811, "Comprehensive DPDP Act assessment with gap analysis, remediation roadmap and compliance scoring across all 44 sections.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(812, "a", 159);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_812_listener($event) {
        return ctx.openContact($event);
      });
      \u0275\u0275text(813, "Start Assessment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(814, "div", 160)(815, "div", 157)(816, "h3");
      \u0275\u0275text(817, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(818, "span", 158);
      \u0275\u0275text(819, "Global");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(820, "p");
      \u0275\u0275text(821, "Gap analysis across 14 scope heads and 58 controls, with a Statement of Applicability draft and prioritised remediation.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(822, "a", 159);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_822_listener($event) {
        return ctx.openContact($event);
      });
      \u0275\u0275text(823, "Start Assessment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(824, "div", 161)(825, "div", 157)(826, "h3");
      \u0275\u0275text(827, "SOC 2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(828, "span", 158);
      \u0275\u0275text(829, "USA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(830, "p");
      \u0275\u0275text(831, "Readiness assessment across 11 trust service categories with an auditor-ready evidence pack for Type I or Type II.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(832, "a", 159);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_832_listener($event) {
        return ctx.openContact($event);
      });
      \u0275\u0275text(833, "Start Assessment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(834, "div", 162)(835, "div", 157)(836, "h3");
      \u0275\u0275text(837, "GDPR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "span", 158);
      \u0275\u0275text(839, "Coming soon");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(840, "p");
      \u0275\u0275text(841, "GDPR module is under development for Indian businesses serving EU data subjects. Register to be notified at launch.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(842, "a", 163);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_842_listener($event) {
        return ctx.openContact($event);
      });
      \u0275\u0275text(843, "Notify Me");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(844, "section", 125)(845, "div", 9)(846, "div", 164)(847, "span", 64);
      \u0275\u0275text(848, "Integrations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(849, "h2");
      \u0275\u0275text(850, "Out-of-the-box connectors for ");
      \u0275\u0275elementStart(851, "span", 65);
      \u0275\u0275text(852, "31 systems");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(853, "div", 66);
      \u0275\u0275elementStart(854, "p");
      \u0275\u0275text(855, "Connect databases, cloud platforms and SaaS tools for automated PII discovery and compliance checks \u2014 no custom wiring required.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(856, "div", 165)(857, "div", 166)(858, "div", 167);
      \u0275\u0275element(859, "span", 168);
      \u0275\u0275text(860, "AWS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(861, "div", 167);
      \u0275\u0275element(862, "span", 169);
      \u0275\u0275text(863, "Azure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(864, "div", 167);
      \u0275\u0275element(865, "span", 170);
      \u0275\u0275text(866, "GCP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(867, "div", 167);
      \u0275\u0275element(868, "span", 171);
      \u0275\u0275text(869, "PostgreSQL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(870, "div", 167);
      \u0275\u0275element(871, "span", 172);
      \u0275\u0275text(872, "MongoDB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(873, "div", 167);
      \u0275\u0275element(874, "span", 173);
      \u0275\u0275text(875, "MySQL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "div", 167);
      \u0275\u0275element(877, "span", 174);
      \u0275\u0275text(878, "Snowflake");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(879, "div", 167);
      \u0275\u0275element(880, "span", 175);
      \u0275\u0275text(881, "Elasticsearch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(882, "div", 167);
      \u0275\u0275element(883, "span", 176);
      \u0275\u0275text(884, "Redis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(885, "div", 167);
      \u0275\u0275element(886, "span", 177);
      \u0275\u0275text(887, "Oracle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(888, "div", 167);
      \u0275\u0275element(889, "span", 178);
      \u0275\u0275text(890, "Okta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(891, "div", 167);
      \u0275\u0275element(892, "span", 179);
      \u0275\u0275text(893, "Auth0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "div", 167);
      \u0275\u0275element(895, "span", 180);
      \u0275\u0275text(896, "Datadog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(897, "div", 167);
      \u0275\u0275element(898, "span", 181);
      \u0275\u0275text(899, "Splunk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(900, "div", 167);
      \u0275\u0275element(901, "span", 182);
      \u0275\u0275text(902, "Grafana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(903, "div", 167);
      \u0275\u0275element(904, "span", 183);
      \u0275\u0275text(905, "Slack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(906, "div", 167);
      \u0275\u0275element(907, "span", 184);
      \u0275\u0275text(908, "GitHub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(909, "div", 167);
      \u0275\u0275element(910, "span", 185);
      \u0275\u0275text(911, "Jira");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(912, "div", 167);
      \u0275\u0275element(913, "span", 186);
      \u0275\u0275text(914, "Salesforce");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(915, "div", 167);
      \u0275\u0275element(916, "span", 187);
      \u0275\u0275text(917, "Kubernetes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(918, "div", 188);
      \u0275\u0275element(919, "span", 168);
      \u0275\u0275text(920, "AWS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(921, "div", 188);
      \u0275\u0275element(922, "span", 169);
      \u0275\u0275text(923, "Azure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(924, "div", 188);
      \u0275\u0275element(925, "span", 170);
      \u0275\u0275text(926, "GCP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(927, "div", 188);
      \u0275\u0275element(928, "span", 171);
      \u0275\u0275text(929, "PostgreSQL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(930, "div", 188);
      \u0275\u0275element(931, "span", 172);
      \u0275\u0275text(932, "MongoDB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(933, "div", 188);
      \u0275\u0275element(934, "span", 173);
      \u0275\u0275text(935, "MySQL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(936, "div", 188);
      \u0275\u0275element(937, "span", 174);
      \u0275\u0275text(938, "Snowflake");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(939, "div", 188);
      \u0275\u0275element(940, "span", 175);
      \u0275\u0275text(941, "Elasticsearch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(942, "div", 188);
      \u0275\u0275element(943, "span", 176);
      \u0275\u0275text(944, "Redis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(945, "div", 188);
      \u0275\u0275element(946, "span", 177);
      \u0275\u0275text(947, "Oracle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(948, "div", 188);
      \u0275\u0275element(949, "span", 178);
      \u0275\u0275text(950, "Okta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(951, "div", 188);
      \u0275\u0275element(952, "span", 179);
      \u0275\u0275text(953, "Auth0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(954, "div", 188);
      \u0275\u0275element(955, "span", 180);
      \u0275\u0275text(956, "Datadog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(957, "div", 188);
      \u0275\u0275element(958, "span", 181);
      \u0275\u0275text(959, "Splunk");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(960, "div", 188);
      \u0275\u0275element(961, "span", 182);
      \u0275\u0275text(962, "Grafana");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(963, "div", 188);
      \u0275\u0275element(964, "span", 183);
      \u0275\u0275text(965, "Slack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(966, "div", 188);
      \u0275\u0275element(967, "span", 184);
      \u0275\u0275text(968, "GitHub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(969, "div", 188);
      \u0275\u0275element(970, "span", 185);
      \u0275\u0275text(971, "Jira");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(972, "div", 188);
      \u0275\u0275element(973, "span", 186);
      \u0275\u0275text(974, "Salesforce");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(975, "div", 188);
      \u0275\u0275element(976, "span", 187);
      \u0275\u0275text(977, "Kubernetes");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(978, "section", 114)(979, "div", 9)(980, "div", 63)(981, "span", 64);
      \u0275\u0275text(982, "Enterprise-grade security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(983, "h2");
      \u0275\u0275text(984, "We practise what we preach");
      \u0275\u0275elementEnd();
      \u0275\u0275element(985, "div", 66);
      \u0275\u0275elementStart(986, "p");
      \u0275\u0275text(987, "A compliance platform has to demonstrate its own compliance maturity. Here is how your data is protected.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(988, "div", 189)(989, "div", 190)(990, "b");
      \u0275\u0275text(991, "Indian Tier-4 DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(992, "span");
      \u0275\u0275text(993, "Data residency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(994, "div", 191)(995, "b");
      \u0275\u0275text(996, "AES-256");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(997, "span");
      \u0275\u0275text(998, "Data at rest");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(999, "div", 192)(1e3, "b");
      \u0275\u0275text(1001, "TLS 1.2+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1002, "span");
      \u0275\u0275text(1003, "Data in transit");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1004, "div", 193)(1005, "b");
      \u0275\u0275text(1006, "RBAC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1007, "span");
      \u0275\u0275text(1008, "Role-based access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1009, "div", 194)(1010, "b");
      \u0275\u0275text(1011, "MFA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1012, "span");
      \u0275\u0275text(1013, "Multi-factor auth");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1014, "div", 190)(1015, "b");
      \u0275\u0275text(1016, "24\xD77 SOC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1017, "span");
      \u0275\u0275text(1018, "Monitored round the clock");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1019, "section", 153)(1020, "div", 9)(1021, "div", 63)(1022, "span", 64);
      \u0275\u0275text(1023, "Built for India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1024, "h2");
      \u0275\u0275text(1025, "Compliance in ");
      \u0275\u0275elementStart(1026, "span", 65);
      \u0275\u0275text(1027, "22+ languages");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1028, "div", 66);
      \u0275\u0275elementStart(1029, "p");
      \u0275\u0275text(1030, "Assessments, consent flows and AI guidance in every Eighth Schedule language, plus Hinglish.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1031, "div", 195)(1032, "span");
      \u0275\u0275text(1033, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1034, "span");
      \u0275\u0275text(1035, "Hindi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1036, "span");
      \u0275\u0275text(1037, "Hinglish");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1038, "span");
      \u0275\u0275text(1039, "Bengali");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1040, "span");
      \u0275\u0275text(1041, "Tamil");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1042, "span");
      \u0275\u0275text(1043, "Telugu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1044, "span");
      \u0275\u0275text(1045, "Kannada");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1046, "span");
      \u0275\u0275text(1047, "Malayalam");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1048, "span");
      \u0275\u0275text(1049, "Marathi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1050, "span");
      \u0275\u0275text(1051, "Gujarati");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1052, "span");
      \u0275\u0275text(1053, "Punjabi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1054, "span");
      \u0275\u0275text(1055, "Odia");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1056, "span");
      \u0275\u0275text(1057, "Assamese");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1058, "span");
      \u0275\u0275text(1059, "Urdu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1060, "span");
      \u0275\u0275text(1061, "Sindhi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1062, "span");
      \u0275\u0275text(1063, "Nepali");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1064, "span");
      \u0275\u0275text(1065, "Konkani");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1066, "span");
      \u0275\u0275text(1067, "Manipuri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1068, "span");
      \u0275\u0275text(1069, "Kashmiri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1070, "span");
      \u0275\u0275text(1071, "Santali");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1072, "span");
      \u0275\u0275text(1073, "Bodo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1074, "span");
      \u0275\u0275text(1075, "Dogri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1076, "span");
      \u0275\u0275text(1077, "Maithili");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1078, "span");
      \u0275\u0275text(1079, "Sanskrit");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(1080, "section", 196)(1081, "div", 9)(1082, "div", 197)(1083, "span", 64);
      \u0275\u0275text(1084, "Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1085, "h2");
      \u0275\u0275text(1086, "DPDP compliance from ");
      \u0275\u0275elementStart(1087, "span", 65);
      \u0275\u0275text(1088, "\u20B910,000 / month");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1089, "div", 66);
      \u0275\u0275elementStart(1090, "p");
      \u0275\u0275text(1091, "Full-stack DPDP for Indian SMBs. Prices shown monthly, billed quarterly as a 3-month licence. All prices exclude 18% GST.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1092, "div", 198)(1093, "div", 199)(1094, "h3");
      \u0275\u0275text(1095, "Launch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1096, "div", 200);
      \u0275\u0275text(1097, "For early-stage teams getting DPDP-ready");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1098, "div", 201)(1099, "span", 14);
      \u0275\u0275text(1100, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1101, "span", 202);
      \u0275\u0275text(1102, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1103, "div", 203);
      \u0275\u0275text(1104, "/ month \xB7 3-month licence, billed quarterly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1105, "div", 204)(1106, "span");
      \u0275\u0275text(1107, "\u2264 25 users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1108, "span");
      \u0275\u0275text(1109, "1 website");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1110, "span", 205);
      \u0275\u0275text(1111, "Included");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1112, "ul")(1113, "li")(1114, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1115, "svg", 207);
      \u0275\u0275element(1116, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1117, "Gap Assessment (self-serve)");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1118, "li")(1119, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1120, "svg", 207);
      \u0275\u0275element(1121, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1122, "Data Flow Diagram");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1123, "li")(1124, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1125, "svg", 207);
      \u0275\u0275element(1126, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1127, "Consent Management");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1128, "li")(1129, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1130, "svg", 207);
      \u0275\u0275element(1131, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1132, "Policy Management");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1133, "li")(1134, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1135, "svg", 207);
      \u0275\u0275element(1136, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1137, "Vendor Risk Management");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1138, "li", 209)(1139, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1140, "svg", 207);
      \u0275\u0275element(1141, "path", 210);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1142, "Data Discovery & Mapping");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1143, "div", 211)(1144, "b");
      \u0275\u0275text(1145, "Optional onboarding \u2014 \u20B925,000 one-time.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1146, " Platform training plus 5 hours of handholding.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1147, "a", 212);
      \u0275\u0275text(1148, "Get Launch");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1149, "div", 213)(1150, "span", 128);
      \u0275\u0275text(1151, "MOST POPULAR");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1152, "h3");
      \u0275\u0275text(1153, "Growth");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1154, "div", 200);
      \u0275\u0275text(1155, "For scaling teams with multiple applications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1156, "div", 201)(1157, "span", 14);
      \u0275\u0275text(1158, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1159, "span", 214);
      \u0275\u0275text(1160, "0");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1161, "div", 203);
      \u0275\u0275text(1162, "/ month \xB7 3-month licence, billed quarterly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1163, "div", 204)(1164, "span");
      \u0275\u0275text(1165, "\u2264 100 users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1166, "span");
      \u0275\u0275text(1167, "3 applications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1168, "span", 205);
      \u0275\u0275text(1169, "Included");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1170, "ul")(1171, "li")(1172, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1173, "svg", 207);
      \u0275\u0275element(1174, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1175, "Everything in Launch");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1176, "li")(1177, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1178, "svg", 207);
      \u0275\u0275element(1179, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1180, "Universal VA Scanner");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1181, "li")(1182, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1183, "svg", 207);
      \u0275\u0275element(1184, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1185, "ISO 27001 & SOC 2 assessments");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1186, "li")(1187, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1188, "svg", 207);
      \u0275\u0275element(1189, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1190, "Breach notification playbook");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1191, "li")(1192, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1193, "svg", 207);
      \u0275\u0275element(1194, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1195, "Multi-framework dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1196, "li", 209)(1197, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1198, "svg", 207);
      \u0275\u0275element(1199, "path", 210);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1200, "Data Discovery & Mapping");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1201, "div", 211)(1202, "b");
      \u0275\u0275text(1203, "Optional onboarding \u2014 \u20B935,000 one-time.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1204, " Platform training plus 5 hours of handholding.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1205, "a", 215);
      \u0275\u0275text(1206, "Get Growth ");
      \u0275\u0275elementStart(1207, "span", 49);
      \u0275\u0275text(1208, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1209, "div", 216)(1210, "h3");
      \u0275\u0275text(1211, "Enterprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1212, "div", 200);
      \u0275\u0275text(1213, "For organisations with 100+ users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1214, "div", 217)(1215, "span", 143);
      \u0275\u0275text(1216, "Custom");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1217, "div", 203);
      \u0275\u0275text(1218, "/ tailored to scope and scale");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1219, "div", 204)(1220, "span");
      \u0275\u0275text(1221, "100+ users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1222, "span");
      \u0275\u0275text(1223, "Unlimited apps");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1224, "span", 205);
      \u0275\u0275text(1225, "Included");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1226, "ul")(1227, "li")(1228, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1229, "svg", 207);
      \u0275\u0275element(1230, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1231, "All nine platform modules");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1232, "li")(1233, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1234, "svg", 207);
      \u0275\u0275element(1235, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1236, "Data Discovery & Mapping");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1237, "li")(1238, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1239, "svg", 207);
      \u0275\u0275element(1240, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1241, "Department-wide gap assessment");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1242, "li")(1243, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1244, "svg", 207);
      \u0275\u0275element(1245, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1246, "Virtual DPO advisory & board reporting");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1247, "li")(1248, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1249, "svg", 207);
      \u0275\u0275element(1250, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1251, "On-premise deployment option");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1252, "li")(1253, "span", 206);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1254, "svg", 207);
      \u0275\u0275element(1255, "path", 208);
      \u0275\u0275elementEnd()();
      \u0275\u0275text(1256, "Custom integrations & SLA");
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(1257, "div", 211)(1258, "b");
      \u0275\u0275text(1259, "Fixed-fee advisory from \u20B949,999.");
      \u0275\u0275elementEnd();
      \u0275\u0275text(1260, " Gap assessment plus remediation roadmap in 2\u20134 weeks.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1261, "a", 218);
      \u0275\u0275text(1262, "Request Enterprise Quote");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1263, "p", 219);
      \u0275\u0275text(1264, "All prices exclude 18% GST \xB7 GST invoice on every purchase \xB7 Pay via UPI, Cards or NetBanking");
      \u0275\u0275element(1265, "br");
      \u0275\u0275text(1266, " Implementation engagements run 4\u20136 months \xB7 Retainer covers virtual DPO advisory and quarterly board reporting");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1267, "section", 220)(1268, "div", 9)(1269, "div", 221)(1270, "span", 64);
      \u0275\u0275text(1271, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1272, "h2");
      \u0275\u0275text(1273, "What founders and compliance leads say");
      \u0275\u0275elementEnd();
      \u0275\u0275element(1274, "div", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1275, "div", 222)(1276, "div", 223)(1277, "div", 224);
      \u0275\u0275text(1278, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1279, "div", 225);
      \u0275\u0275text(1280, "IT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1281, "p");
      \u0275\u0275text(1282, "The AI-powered assessment identified gaps we had not even considered, and the consent module saved us from building it in-house. Weeks, not months.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1283, "div", 226);
      \u0275\u0275text(1284, "IT Operations Lead");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1285, "div", 227);
      \u0275\u0275text(1286, "Fintech \xB7 Growth plan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1287, "div", 228)(1288, "div", 224);
      \u0275\u0275text(1289, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1290, "div", 225);
      \u0275\u0275text(1291, "HT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1292, "p");
      \u0275\u0275text(1293, "As a healthtech handling sensitive patient data, DPDP was critical. From PII discovery to policy generation, the process was straightforward.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1294, "div", 226);
      \u0275\u0275text(1295, "Founder & CEO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1296, "div", 227);
      \u0275\u0275text(1297, "Healthtech \xB7 Enterprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1298, "div", 229)(1299, "div", 224);
      \u0275\u0275text(1300, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1301, "div", 225);
      \u0275\u0275text(1302, "SA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1303, "p");
      \u0275\u0275text(1304, "We needed ISO 27001 readiness for US enterprise clients. The gap assessment gave us a clear roadmap with prioritised remediation steps.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1305, "div", 226);
      \u0275\u0275text(1306, "CEO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1307, "div", 227);
      \u0275\u0275text(1308, "SaaS \xB7 Growth plan");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1309, "div", 230)(1310, "div", 224);
      \u0275\u0275text(1311, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1312, "div", 225);
      \u0275\u0275text(1313, "ED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1314, "p");
      \u0275\u0275text(1315, "Managing DPDP, ISO 27001 and SOC 2 at once seemed impossible. The multi-framework dashboard gives us one view of posture across all three.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1316, "div", 226);
      \u0275\u0275text(1317, "Head of Compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1318, "div", 227);
      \u0275\u0275text(1319, "Edtech \xB7 Enterprise");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(1320, "section", 231)(1321, "div", 9)(1322, "div", 63)(1323, "span", 64);
      \u0275\u0275text(1324, "FAQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1325, "h2");
      \u0275\u0275text(1326, "Frequently asked ");
      \u0275\u0275elementStart(1327, "span", 65);
      \u0275\u0275text(1328, "questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(1329, "div", 66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1330, "div", 232)(1331, "div", 233)(1332, "button", 234);
      \u0275\u0275text(1333, "What is the DPDP Act 2023 and does it apply to my SMB?");
      \u0275\u0275elementStart(1334, "span", 235);
      \u0275\u0275text(1335, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1336, "div", 236)(1337, "p");
      \u0275\u0275text(1338, "The Digital Personal Data Protection Act 2023 governs how any organisation processing digital personal data of individuals in India must collect, use, store and delete it. It applies regardless of company size \u2014 there is no small-business exemption. If you hold customer names, emails, phone numbers or payment details, you are a Data Fiduciary under the Act.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1339, "div", 237)(1340, "button", 234);
      \u0275\u0275text(1341, "When does enforcement actually begin?");
      \u0275\u0275elementStart(1342, "span", 235);
      \u0275\u0275text(1343, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1344, "div", 236)(1345, "p");
      \u0275\u0275text(1346, "The Act received assent in August 2023 and is being brought into force in phases through subordinate rules. Organisations are being given a transition window before penalty provisions bite. Because remediation typically takes 4\u20136 months, most boards are treating readiness as a now problem rather than a later one. We will confirm the current enforcement position for your sector during the assessment.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1347, "div", 238)(1348, "button", 234);
      \u0275\u0275text(1349, "What are the penalties for non-compliance?");
      \u0275\u0275elementStart(1350, "span", 235);
      \u0275\u0275text(1351, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1352, "div", 236)(1353, "p");
      \u0275\u0275text(1354, "The DPDP Act provides for financial penalties of up to \u20B9250 crore per contravention, with the Data Protection Board of India determining the amount based on the nature, gravity and duration of the breach. Failure to implement reasonable security safeguards and failure to notify a breach are both separately penalisable.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1355, "div", 239)(1356, "button", 234);
      \u0275\u0275text(1357, "How long does it take to become DPDP compliant?");
      \u0275\u0275elementStart(1358, "span", 235);
      \u0275\u0275text(1359, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1360, "div", 236)(1361, "p");
      \u0275\u0275text(1362, "The readiness assessment itself takes about 30 minutes and gives you a score plus a gap list the same day. A typical SMB implementation \u2014 consent, RoPA, policies, DPR handling, breach playbook and vendor governance \u2014 runs 4\u20136 months depending on how many systems hold personal data.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1363, "div", 240)(1364, "button", 234);
      \u0275\u0275text(1365, "Do I need a Data Protection Officer?");
      \u0275\u0275elementStart(1366, "span", 235);
      \u0275\u0275text(1367, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1368, "div", 236)(1369, "p");
      \u0275\u0275text(1370, "A DPO is mandatory for Significant Data Fiduciaries as notified by the government. Other organisations still need a contactable person responsible for grievance redressal under Section 13. XcellHost offers a virtual DPO advisory retainer that covers the role, quarterly reviews and board reporting without a full-time hire.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1371, "div", 241)(1372, "button", 234);
      \u0275\u0275text(1373, "Where is our data stored?");
      \u0275\u0275elementStart(1374, "span", 235);
      \u0275\u0275text(1375, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1376, "div", 236)(1377, "p");
      \u0275\u0275text(1378, "In Indian Tier-4 datacenters, encrypted with AES-256 at rest and TLS 1.2+ in transit, with role-based access control and MFA on every account. Data residency in India keeps you aligned with DPDP and RBI expectations. On-premise deployment is available on Enterprise engagements.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1379, "div", 237)(1380, "button", 234);
      \u0275\u0275text(1381, "Can this replace our compliance consultant?");
      \u0275\u0275elementStart(1382, "span", 235);
      \u0275\u0275text(1383, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1384, "div", 236)(1385, "p");
      \u0275\u0275text(1386, "It replaces the manual, repetitive part \u2014 evidence collection, scanning, scoring, document drafting and monitoring. It does not replace judgement. XcellHost engagements pair the platform with certified consultants who review AI output, own the roadmap and sign off the board pack.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(1387, "div", 238)(1388, "button", 234);
      \u0275\u0275text(1389, "Do we get a GST invoice?");
      \u0275\u0275elementStart(1390, "span", 235);
      \u0275\u0275text(1391, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1392, "div", 236)(1393, "p");
      \u0275\u0275text(1394, "Yes. Every purchase is billed in INR with a GST-compliant invoice so your business can claim input tax credit. Payment is by UPI, cards or NetBanking, and licences are issued quarterly.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(1395, "section", 242)(1396, "div", 9)(1397, "div", 243)(1398, "div", 244)(1399, "h3");
      \u0275\u0275text(1400, "Ready to start with DPDPA for SMB?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1401, "p");
      \u0275\u0275text(1402, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1403, "div", 245)(1404, "a", 246);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_1404_listener($event) {
        return ctx.openContact($event);
      });
      \u0275\u0275text(1405, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1406, "a", 247);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_1406_listener($event) {
        return ctx.openContact($event);
      });
      \u0275\u0275text(1407, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1408, "a", 248);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_1408_listener($event) {
        return ctx.requestDoc("infosheet", $event);
      });
      \u0275\u0275text(1409, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1410, "a", 248);
      \u0275\u0275listener("click", function DpdpaForSmbPage_Template_a_click_1410_listener($event) {
        return ctx.requestDoc("presentation", $event);
      });
      \u0275\u0275text(1411, "\u{1F4D6} Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1412, "a", 249);
      \u0275\u0275text(1413, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1414, "a", 250);
      \u0275\u0275text(1415, "Email Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1416, "a", 251);
      \u0275\u0275element(1417, "img", 252);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(1418, "div", 253)(1419, "span");
      \u0275\u0275text(1420, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1421, "span");
      \u0275\u0275text(1422, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1423, "span");
      \u0275\u0275text(1424, "\u{1F3D7} Tier-4 Indian DCs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1425, "span");
      \u0275\u0275text(1426, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1427, "span");
      \u0275\u0275text(1428, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("links", ctx.sectionNavLinks);
    }
  }, dependencies: [SmbSectionNavComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --navy2:#0A2A57;\n  --blue-d:#0C3E8F;\n  --orange-d:#F57C00;\n  --green:#2ECC71;\n  --green-d:#128A42;\n  --red:#E5484D;\n  --amber:#F5A524;\n  --purple:#7C3AED;\n  --shadow-s:0 6px 18px rgba(4,30,66,.06);\n  --shadow-m:0 18px 50px rgba(4,30,66,.10);\n  --shadow-lg:0 34px 80px -20px rgba(4,30,66,.34);\n  --maxw:1240px;\n  --ease:cubic-bezier(.22,.7,.2,1);\n}\n[_ngcontent-%COMP%]:root {\n  --navy:#041E42;\n  --navy2:#0A2A57;\n  --blue:#1565D8;\n  --blue-d:#0C3E8F;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --orange-d:#F57C00;\n  --ice:#F2F6FC;\n  --white:#fff;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --green:#2ECC71;\n  --green-d:#128A42;\n  --red:#E5484D;\n  --amber:#F5A524;\n  --purple:#7C3AED;\n  --shadow-s:0 6px 18px rgba(4,30,66,.06);\n  --shadow-m:0 18px 50px rgba(4,30,66,.10);\n  --shadow-lg:0 34px 80px -20px rgba(4,30,66,.34);\n  --maxw:1240px;\n  --ease:cubic-bezier(.22,.7,.2,1);\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  font-family:\n    var(--body),\n    system-ui,\n    sans-serif;\n  color: var(--ink);\n  background: #fff;\n  line-height: 1.6;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \nh4[_ngcontent-%COMP%], \nh5[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  color: var(--navy);\n  line-height: 1.12;\n  letter-spacing: -.02em;\n  font-weight: 700;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%], \nsvg[_ngcontent-%COMP%] {\n  display: block;\n}\n.wrap[_ngcontent-%COMP%] {\n  max-width: var(--maxw);\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.serif[_ngcontent-%COMP%] {\n  font-family: "Instrument Serif", serif;\n  font-style: italic;\n  letter-spacing: 0;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n}\n.hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%] {\n  display: block;\n}\n.hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .crumb[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n#progress[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 3px;\n  width: 0;\n  z-index: 130;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  box-shadow: 0 0 12px rgba(21, 101, 216, .6);\n}\n#spotlight[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity .4s;\n  background:\n    radial-gradient(\n      340px circle at var(--mx,-999px) var(--my,-999px),\n      rgba(21, 101, 216, .09),\n      transparent 65%);\n}\n.rv[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity .7s var(--ease), transform .7s var(--ease);\n}\n.rv.in[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: none;\n}\n.rv[data-d="1"][_ngcontent-%COMP%] {\n  transition-delay: .08s;\n}\n.rv[data-d="2"][_ngcontent-%COMP%] {\n  transition-delay: .16s;\n}\n.rv[data-d="3"][_ngcontent-%COMP%] {\n  transition-delay: .24s;\n}\n.rv[data-d="4"][_ngcontent-%COMP%] {\n  transition-delay: .32s;\n}\n.rv[data-d="5"][_ngcontent-%COMP%] {\n  transition-delay: .4s;\n}\n.tilt[_ngcontent-%COMP%] {\n  transition: transform .25s var(--ease);\n}\n.grid-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .55;\n  background-image:\n    linear-gradient(var(--line) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--line) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      760px 560px at 82% 8%,\n      #000,\n      transparent 72%);\n  -webkit-mask-image:\n    radial-gradient(\n      760px 560px at 82% 8%,\n      #000,\n      transparent 72%);\n  animation: _ngcontent-%COMP%_gridmove 32s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_gridmove {\n  to {\n    background-position: 48px 48px;\n  }\n}\n.aurora[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  z-index: 0;\n  pointer-events: none;\n  opacity: .55;\n}\n.aurora.a1[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  background:\n    radial-gradient(\n      circle,\n      #bcd6ff,\n      transparent 65%);\n  top: -90px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_aflow1 12s ease-in-out infinite;\n}\n.aurora.a2[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      #ffd9a8,\n      transparent 65%);\n  bottom: -40px;\n  right: 22%;\n  animation: _ngcontent-%COMP%_aflow2 14s ease-in-out infinite;\n}\n.aurora.a3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      #cfe0ff,\n      transparent 65%);\n  top: 34%;\n  left: -70px;\n  animation: _ngcontent-%COMP%_aflow3 16s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_aflow1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-30px, 24px) scale(1.12);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(26px, -20px) scale(1.15);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow3 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(20px, 18px) scale(1.1);\n  }\n}\n#net[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .7;\n}\n@keyframes _ngcontent-%COMP%_scfloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-11px);\n  }\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: .25;\n  }\n}\n@keyframes _ngcontent-%COMP%_sweep {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@keyframes _ngcontent-%COMP%_cbpulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(21, 101, 216, .5);\n  }\n  70% {\n    box-shadow: 0 0 0 9px rgba(21, 101, 216, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(21, 101, 216, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_tickpop {\n  0% {\n    transform: scale(0) rotate(-40deg);\n  }\n  60% {\n    transform: scale(1.2) rotate(6deg);\n  }\n  100% {\n    transform: scale(1) rotate(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_hlsweep {\n  to {\n    transform: scaleX(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_marq {\n  to {\n    transform: translateX(-50%);\n  }\n}\n@keyframes _ngcontent-%COMP%_dash {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  font-weight: 500;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: var(--blue);\n  background: var(--blue-soft);\n  border: 1px solid #d3e2fb;\n  padding: 7px 14px;\n  border-radius: 99px;\n}\n.eyebrow[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--blue);\n  animation: _ngcontent-%COMP%_cbpulse 2s infinite;\n}\n.btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  overflow: hidden;\n  font-family: var(--body);\n  font-weight: 600;\n  font-size: 14.5px;\n  padding: 12px 22px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  will-change: transform;\n  transition:\n    transform .18s var(--ease),\n    box-shadow .28s,\n    background .25s,\n    color .25s,\n    border-color .25s;\n}\n.btn[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -120%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      100deg,\n      transparent,\n      rgba(255, 255, 255, .45),\n      transparent);\n  transform: skewX(-18deg);\n  transition: left .55s var(--ease);\n}\n.btn[_ngcontent-%COMP%]:hover:before {\n  left: 130%;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(21, 101, 216, .75);\n}\n.dpdpa-buddha-strip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 24px;\n  padding: 32px 150px 32px 36px;\n  background:\n    linear-gradient(\n      105deg,\n      #1565d8,\n      #0c3e8f);\n  border-radius: 16px;\n  box-shadow: none;\n}\n.dpdpa-buddha-strip[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  line-height: 1.3;\n}\n.dpdpa-buddha-strip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cfe0fa;\n  font-size: 14.5px;\n  margin-top: 4px;\n}\n.dpdpa-buddha-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  width: 100%;\n}\n.dpdpa-buddha-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  line-height: 1.4;\n  border-width: 1.5px;\n  box-shadow: none;\n}\n.dpdpa-buddha-actions[_ngcontent-%COMP%]   .btn-orange[_ngcontent-%COMP%] {\n  background: #ff8c1a;\n}\n.dpdpa-buddha-actions[_ngcontent-%COMP%]   .btn-orange[_ngcontent-%COMP%]:hover {\n  background: #e97a08;\n  box-shadow: none;\n}\n.dpdpa-buddha-actions[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n.dpdpa-buddha-actions[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n  border-color: #fff;\n}\n@media (max-width: 760px) {\n  .dpdpa-buddha-strip[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n  }\n  .dpdpa-buddha-strip[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .dpdpa-buddha-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px -14px rgba(21, 101, 216, .85);\n}\n.btn-orange[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(255, 140, 26, .7);\n}\n.btn-orange[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px -14px rgba(255, 140, 26, .85);\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--navy);\n  border-color: var(--line);\n  box-shadow: var(--shadow-s);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .42);\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .12);\n  transform: translateY(-2px);\n}\n.btn-t[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--blue);\n  border: 1.5px solid #cfe0fb;\n}\n.btn-t[_ngcontent-%COMP%]:hover {\n  background: var(--blue);\n  color: #fff;\n  border-color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn-wa[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.btn-wa[_ngcontent-%COMP%]:hover {\n  background: #1eb955;\n  border-color: #1eb955;\n  color: #fff;\n}\n.btn[_ngcontent-%COMP%]   .ar[_ngcontent-%COMP%] {\n  transition: transform .25s;\n}\n.btn[_ngcontent-%COMP%]:hover   .ar[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 13px;\n  border-radius: 10px;\n}\n.utility[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b9c9e2;\n  transition: color .2s;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.uwa[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.uwa[_ngcontent-%COMP%]:hover {\n  color: #8ff0b0 !important;\n}\n.promo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n  position: relative;\n  z-index: 51;\n}\n.promo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ffd9ac;\n}\n.promo[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\nheader.xh-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, .86);\n  backdrop-filter: saturate(180%) blur(14px);\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\n  border-bottom: 1px solid #E7EBF3;\n  transition: box-shadow .35s, background .35s;\n}\nheader.xh-header.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 30px -18px rgba(4, 30, 66, .34);\n  background: rgba(255, 255, 255, .95);\n}\n.xh-nav-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 80px;\n  transition: height .35s var(--ease);\n}\nheader.xh-header.scrolled[_ngcontent-%COMP%]   .xh-nav-wrap[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 74px;\n  width: auto;\n  transition: height .35s var(--ease);\n}\nheader.xh-header.scrolled[_ngcontent-%COMP%]   .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 58px;\n}\n.xh-main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  list-style: none;\n  margin-left: 6px;\n}\n.xh-menu-link[_ngcontent-%COMP%] {\n  font: 600 13px/13px var(--body);\n  color: #263552;\n  background: none;\n  border: 0;\n  padding: 26px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  position: relative;\n  transition: color .2s;\n}\n.xh-menu-link[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  bottom: 20px;\n  height: 2px;\n  width: 0;\n  background: var(--blue);\n  transition: width .3s var(--ease);\n}\n.xh-menu-link[_ngcontent-%COMP%]:hover, \n.xh-menu-link.is-active[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.xh-menu-link[_ngcontent-%COMP%]:hover:after {\n  width: calc(100% - 20px);\n}\n.xh-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.xh-icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  display: grid;\n  place-items: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: .2s var(--ease);\n}\n.xh-icon-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: #fff;\n  border: 1.5px solid var(--line);\n  border-radius: 12px;\n  width: 44px;\n  height: 44px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #3B63E8;\n  color: #fff;\n  padding: 48px 0 28px;\n  font-size: 14px;\n}\n.nf-top[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.nf-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.nf-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  background: #fff;\n  padding: 5px 8px;\n  border-radius: 8px;\n}\n.nf-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #DCE6FF;\n  line-height: 1.5;\n}\n.nf-tag[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #BBD0FF;\n  font-style: normal;\n  font-size: 11px;\n}\n.nf-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #E4ECFF;\n  margin: 0 0 20px;\n  max-width: 94ch;\n  text-align: justify;\n  text-align-last: left;\n}\n.nf-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.nfs[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  transition: .25s var(--ease);\n}\n.nfs[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.nfs[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n}\n.nf-rows[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 22px;\n  margin-bottom: 6px;\n}\n.nf-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: baseline;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.nf-rlbl[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 15px;\n  color: #fff;\n  min-width: 130px;\n  flex: none;\n  margin: 0;\n}\n.nf-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  flex: 1;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #E4ECFF;\n  font-size: 14px;\n  transition: color .2s, padding .2s;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: "\\203a";\n  color: #BBD0FF;\n  margin-right: 6px;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  padding-left: 3px;\n}\n.nf-cert-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin: 16px 0;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(255, 255, 255, .1);\n  padding-top: 16px;\n}\n.nf-isos[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-iso[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #2E4FC4;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 62px;\n  color: #fff;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n}\n.nf-iso[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 9px;\n  letter-spacing: .05em;\n  color: #BBD0FF;\n}\n.nf-pays[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-pay[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1C2A3A;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 6px;\n}\n.nf-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 12.5px;\n  color: #C3D3FF;\n}\n.wa-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 22px;\n  bottom: 22px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #25D366;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 12px 30px rgba(37, 211, 102, .4);\n  z-index: 120;\n  transition: transform .25s var(--ease);\n}\n.wa-fab[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08);\n}\n.wa-fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 22px;\n  bottom: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 10px 26px rgba(4, 30, 66, .14);\n  z-index: 120;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .25s, transform .25s var(--ease);\n}\n.back-to-top.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 60px 0 78px;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      1100px 640px at 82% 4%,\n      #eaf2ff 0%,\n      transparent 58%),\n    linear-gradient(\n      180deg,\n      #fbfcff,\n      #ffffff);\n}\n.crumb[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n}\n.crumb[_ngcontent-%COMP%]   .sep[_ngcontent-%COMP%] {\n  color: #b9c6dd;\n}\n.crumb[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  display: grid;\n  grid-template-columns: 1fr 1.08fr;\n  gap: 44px;\n  align-items: center;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(34px, 4.8vw, 56px);\n  font-weight: 800;\n  margin: 20px 0 16px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--blue),\n      #4f93ff);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .serif[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-weight: 400;\n  font-size: 1.04em;\n}\n.hero[_ngcontent-%COMP%]   p.lead[_ngcontent-%COMP%] {\n  font-size: 17.5px;\n  color: var(--slate);\n  max-width: 520px;\n  margin-bottom: 22px;\n}\n.pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--navy);\n  background: #fff;\n  border: 1px solid var(--line);\n  padding: 7px 13px;\n  border-radius: 99px;\n  box-shadow: var(--shadow-s);\n}\n.pill[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  color: var(--blue);\n}\n.pill.hi[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff4e6,\n      #fff);\n  border-color: #ffd9a8;\n  color: var(--orange-d);\n}\n.pill.hi[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n.hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 22px;\n  flex-wrap: nowrap;\n  width: max-content;\n  overflow: visible;\n}\n.chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-shrink: 0;\n  white-space: nowrap;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--navy);\n}\n.chip[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  background: var(--blue-soft);\n  color: var(--blue);\n  flex-shrink: 0;\n}\n.chip[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n.journey[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n.gauge[_ngcontent-%COMP%] {\n  position: relative;\n  width: 150px;\n  flex: none;\n}\n.gauge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.gauge[_ngcontent-%COMP%]   .gv[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: 6px;\n  transform: translateX(-50%);\n  text-align: center;\n}\n.gauge[_ngcontent-%COMP%]   .gv[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--red);\n  line-height: 1;\n}\n.gauge[_ngcontent-%COMP%]   .gv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.gauge.after[_ngcontent-%COMP%]   .gv[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--green-d);\n}\n.journey-txt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15px;\n  color: var(--navy);\n}\n.journey-txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.journey-arrow[_ngcontent-%COMP%] {\n  font: 700 20px var(--mono);\n  color: var(--blue);\n}\n.showcase[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sc-win[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.sc-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--line);\n  background: var(--ice);\n}\n.sc-bar[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.sc-bar[_ngcontent-%COMP%]   .dots[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  display: block;\n}\n.sc-bar[_ngcontent-%COMP%]   .crumbs[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  color: var(--slate);\n}\n.sc-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--line);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.sc-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.sc-tab[_ngcontent-%COMP%] {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .03em;\n  color: var(--slate);\n  background: none;\n  border: 0;\n  padding: 6px 10px;\n  border-radius: 7px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: .2s;\n}\n.sc-tab[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n  background: var(--blue-soft);\n}\n.sc-tab.on[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #fff;\n}\n.sc-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.sc-h[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.sc-h[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 13.5px;\n  color: var(--navy);\n}\n.sc-h[_ngcontent-%COMP%]   .live[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  color: var(--blue);\n  background: var(--blue-soft);\n  padding: 4px 10px;\n  border-radius: 99px;\n}\n.sc-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.sc-stat[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  padding: 10px 8px;\n  text-align: center;\n  background: #fff;\n}\n.sc-stat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 17px var(--disp);\n  color: var(--navy);\n  line-height: 1.1;\n}\n.sc-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font: 500 9px var(--mono);\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-top: 3px;\n}\n.sc-stat.c[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.sc-stat.h[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #E9730C;\n}\n.sc-stat.m[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--amber);\n}\n.sc-stat.l[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--green-d);\n}\n.sc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: .85fr 1.15fr;\n  gap: 12px;\n}\n.sc-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 14px;\n  background: #fff;\n}\n.sc-card[_ngcontent-%COMP%]   .t[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 8px;\n}\n.sc-hyg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sc-hyg[_ngcontent-%COMP%]   .hv[_ngcontent-%COMP%] {\n  margin-top: -16px;\n  text-align: center;\n}\n.sc-hyg[_ngcontent-%COMP%]   .hv[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 800 20px var(--disp);\n  color: var(--green-d);\n  display: block;\n  line-height: 1;\n}\n.sc-hyg[_ngcontent-%COMP%]   .hv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 9px var(--mono);\n  color: var(--slate);\n}\n.sc-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  height: 106px;\n  padding-top: 6px;\n  overflow: hidden;\n}\n.sc-bcol[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 2px;\n}\n.sc-bcol[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 2px;\n  width: 100%;\n  transition: height 1.2s var(--ease);\n}\n.sc-bcol[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font: 500 8.5px var(--mono);\n  color: var(--slate);\n  text-align: center;\n  font-style: normal;\n  margin-top: 4px;\n}\n.sc-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.sc-legend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 8.5px var(--mono);\n  color: var(--slate);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-legend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n  display: block;\n}\n.sc-find[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  margin-top: 12px;\n}\n.sc-find[_ngcontent-%COMP%]   .t[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 8px;\n}\n.sc-find[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 6px 0;\n  border-bottom: 1px dashed var(--line);\n  font-size: 11.5px;\n}\n.sc-find[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.sc-find[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-weight: 600;\n}\n.sc-find[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-family: var(--mono);\n  font-size: 10px;\n}\n.sc-float[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -10px;\n  top: -18px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 12px 16px;\n  box-shadow: var(--shadow-m);\n  z-index: 5;\n  animation: _ngcontent-%COMP%_scfloat 7s ease-in-out infinite;\n  text-align: center;\n}\n.sc-float[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 22px var(--disp);\n  color: var(--navy);\n  line-height: 1;\n}\n.sc-float[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 9.5px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.sc-float[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%] {\n  color: var(--green-d);\n  font-size: 11px;\n  font-weight: 600;\n}\nsection[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pad[_ngcontent-%COMP%] {\n  padding: 42px 0 42px 0;\n}\n.pad-ice[_ngcontent-%COMP%] {\n  background: var(--ice);\n}\n.pad-navy[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      160deg,\n      var(--navy),\n      #0C2C5C 70%);\n  color: #fff;\n}\n.head[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 720px;\n  margin: 0 auto 48px;\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3.4vw, 38px);\n  margin-bottom: 14px;\n}\n#modules[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  max-width: none;\n}\n#modules[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(12px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n#modules[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.head.integrations-heading[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.head.integrations-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(12px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.integrations-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.head.testimonials-heading[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.head.testimonials-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(12px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.steps-heading[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.head.steps-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(10px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.comparison-heading[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.head.comparison-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(10px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.comparison-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.head.frameworks-heading[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.head.frameworks-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(10px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.pricing-heading[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.head.pricing-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(10px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.pricing-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .hl[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--blue);\n}\n.head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .hl[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  height: 8px;\n  background: rgba(255, 140, 26, .28);\n  z-index: -1;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n.head.in[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .hl[_ngcontent-%COMP%]:after {\n  animation: _ngcontent-%COMP%_hlsweep .8s .3s var(--ease) forwards;\n}\n.head[_ngcontent-%COMP%]   .u[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 4px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  margin: 0 auto 18px;\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 16px;\n}\n.head.left[_ngcontent-%COMP%] {\n  text-align: left;\n  margin: 0 0 40px;\n}\n.head.left[_ngcontent-%COMP%]   .u[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n}\n.pad-navy[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.pad-navy[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c7d5ec;\n}\n.kicker[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 10px;\n  display: block;\n}\n.pad-navy[_ngcontent-%COMP%]   .kicker[_ngcontent-%COMP%] {\n  color: #7FB2FF;\n}\n.pp-trust[_ngcontent-%COMP%] {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.risk[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  gap: 44px;\n  align-items: center;\n}\n.risk-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.risk-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  border-left: 3px solid var(--line);\n  padding-left: 18px;\n  transition: border-color .3s var(--ease);\n}\n.risk-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--orange);\n}\n.risk-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.risk-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.risk-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.rstat[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 18px;\n  background: var(--ice);\n  text-align: center;\n  transition: transform .28s var(--ease), box-shadow .28s;\n}\n.rstat[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-m);\n}\n.rstat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--navy);\n  letter-spacing: -.02em;\n  line-height: 1.1;\n}\n.rstat.red[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--red);\n}\n.rstat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: var(--slate);\n  line-height: 1.45;\n}\n.mods[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.mod[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px 22px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n  position: relative;\n  overflow: hidden;\n}\n.mod[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform .4s var(--ease);\n}\n.mod[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.mod[_ngcontent-%COMP%]:hover:before {\n  transform: scaleX(1);\n}\n.mod-h[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  margin-bottom: 12px;\n}\n.mod-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: grid;\n  place-items: center;\n  transition: .3s var(--ease);\n}\n.mod-ic[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n}\n.mod[_ngcontent-%COMP%]:hover   .mod-ic[_ngcontent-%COMP%] {\n  transform: rotate(-6deg) scale(1.06);\n}\n.mod-h[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin-bottom: 3px;\n}\n.mod-h[_ngcontent-%COMP%]   .sec[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--blue);\n  background: var(--blue-soft);\n  border-radius: 99px;\n  padding: 3px 9px;\n  display: inline-block;\n}\n.mod[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.6;\n  margin-bottom: 14px;\n}\n.mod[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 0 16px;\n  flex: 1;\n}\n.mod[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.55;\n  padding: 5px 0 5px 20px;\n  position: relative;\n}\n.mod[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 11px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 2px solid var(--blue);\n  background: #fff;\n}\n.mod-foot[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n  padding-top: 12px;\n  border-top: 1px dashed var(--line);\n}\n.mod-foot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 10px var(--mono);\n  letter-spacing: .04em;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 4px 10px;\n}\n.i-blue[_ngcontent-%COMP%] {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.i-purple[_ngcontent-%COMP%] {\n  background: #F1EBFE;\n  color: var(--purple);\n}\n.i-green[_ngcontent-%COMP%] {\n  background: #E4F7EC;\n  color: var(--green-d);\n}\n.i-amber[_ngcontent-%COMP%] {\n  background: #FFF3E0;\n  color: var(--orange-d);\n}\n.i-red[_ngcontent-%COMP%] {\n  background: #FDECEC;\n  color: var(--red);\n}\n.i-teal[_ngcontent-%COMP%] {\n  background: #E2F6F5;\n  color: #0F766E;\n}\n.smap[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.smap-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border: 1px solid rgba(194, 216, 247, .22);\n  border-radius: 14px;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, .05);\n  transition: .28s var(--ease);\n}\n.smap-row[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n  transform: translateY(-3px);\n}\n.smap-row[_ngcontent-%COMP%]   .s[_ngcontent-%COMP%] {\n  flex: none;\n  font: 700 11px var(--mono);\n  letter-spacing: .04em;\n  color: #0A2A57;\n  background: #7FB2FF;\n  border-radius: 8px;\n  padding: 6px 9px;\n  min-width: 66px;\n  text-align: center;\n}\n.smap-row[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 2px;\n}\n.smap-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #a9c2e8;\n}\n.smap-note[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n  font: 500 12px var(--mono);\n  color: #9FBEEC;\n}\n.smap-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  display: inline-block;\n  margin-right: 6px;\n}\n.ai[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.aic[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 20px;\n  background: #fff;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n}\n.aic[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.aic[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--purple);\n  background: #F1EBFE;\n  border-radius: 99px;\n  padding: 4px 10px;\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.aic[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15.5px;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.aic[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.flow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 0;\n  position: relative;\n}\n.flow[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  left: 8%;\n  right: 8%;\n  top: 34px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  opacity: .25;\n}\n.fstep[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 12px;\n  position: relative;\n}\n.fstep[_ngcontent-%COMP%]   .n[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  margin: 0 auto 16px;\n  border-radius: 20px;\n  display: grid;\n  place-items: center;\n  background: #fff;\n  border: 1.5px solid var(--line);\n  color: var(--blue);\n  font: 800 20px var(--disp);\n  position: relative;\n  z-index: 2;\n  transition: .32s var(--ease);\n}\n.fstep[_ngcontent-%COMP%]:hover   .n[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  transform: translateY(-5px);\n  box-shadow: 0 14px 26px -12px rgba(21, 101, 216, .7);\n}\n.fstep[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15.5px;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.fstep[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.steps3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.s3[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 24px;\n  background: #fff;\n  position: relative;\n  overflow: hidden;\n  transition: transform .28s var(--ease), box-shadow .28s;\n}\n.s3[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n}\n.s3[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font: 800 46px var(--disp);\n  color: var(--blue-soft);\n  line-height: 1;\n  position: absolute;\n  right: 18px;\n  top: 12px;\n}\n.s3[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 18px;\n  color: var(--navy);\n  margin-bottom: 8px;\n  position: relative;\n}\n.s3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n  position: relative;\n}\n.cmp[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: var(--shadow-s);\n}\n.cmp-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 1px solid var(--line);\n}\n.cmp-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.cmp-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  font-size: 13.5px;\n}\n.cmp-row[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 600;\n  color: var(--navy);\n  background: var(--ice);\n}\n.cmp-row[_ngcontent-%COMP%]   .old[_ngcontent-%COMP%] {\n  color: var(--slate);\n}\n.cmp-row[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-weight: 600;\n  background: rgba(21, 101, 216, .04);\n  border-left: 2px solid var(--blue);\n}\n.cmp-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--slate);\n  padding: 13px 20px;\n}\n.cmp-head[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.fw[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.fwc[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 18px;\n  padding: 24px 22px;\n  background: #fff;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n}\n.fwc[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.fwc[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.fwc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.fwc[_ngcontent-%COMP%]   .geo[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .1em;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 4px 10px;\n}\n.fwc.soon[_ngcontent-%COMP%] {\n  opacity: .72;\n}\n.fwc.soon[_ngcontent-%COMP%]   .geo[_ngcontent-%COMP%] {\n  color: var(--orange-d);\n  background: #FFF3E0;\n  border-color: #ffd9a8;\n}\n.fwc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n.langs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  justify-content: center;\n}\n.langs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 12.5px var(--body);\n  color: var(--navy);\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  transition: .2s var(--ease);\n}\n.langs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.secg[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 12px;\n}\n.secc[_ngcontent-%COMP%] {\n  border: 1px solid rgba(194, 216, 247, .22);\n  border-radius: 14px;\n  padding: 20px 14px;\n  text-align: center;\n  background: rgba(255, 255, 255, .05);\n  transition: .28s var(--ease);\n}\n.secc[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n  transform: translateY(-4px);\n}\n.secc[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.secc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 500 11px var(--mono);\n  color: #9FBEEC;\n}\n.marq-wrap[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  margin-top: 8px;\n}\n.marq-wrap[_ngcontent-%COMP%]:before, \n.marq-wrap[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 110px;\n  z-index: 2;\n  pointer-events: none;\n}\n.marq-wrap[_ngcontent-%COMP%]:before {\n  left: 0;\n  background:\n    linear-gradient(\n      90deg,\n      var(--ice),\n      transparent);\n}\n.marq-wrap[_ngcontent-%COMP%]:after {\n  right: 0;\n  background:\n    linear-gradient(\n      270deg,\n      var(--ice),\n      transparent);\n}\n.marq-wrap.on-white[_ngcontent-%COMP%]:before {\n  background:\n    linear-gradient(\n      90deg,\n      #fff,\n      transparent);\n}\n.marq-wrap.on-white[_ngcontent-%COMP%]:after {\n  background:\n    linear-gradient(\n      270deg,\n      #fff,\n      transparent);\n}\n.track[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  width: max-content;\n  animation: _ngcontent-%COMP%_marq 40s linear infinite;\n}\n.track.rev[_ngcontent-%COMP%] {\n  animation-direction: reverse;\n  animation-duration: 46s;\n}\n.marq-wrap[_ngcontent-%COMP%]:hover   .track[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n.ilogo[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-width: 150px;\n  height: 62px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 13.5px;\n  color: var(--navy);\n  box-shadow: var(--shadow-s);\n  transition: .25s var(--ease);\n  padding: 0 16px;\n}\n.ilogo[_ngcontent-%COMP%]:hover {\n  border-color: #c9dcfb;\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-m);\n  color: var(--blue);\n}\n.ilogo[_ngcontent-%COMP%]   .dotmark[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.price[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  align-items: start;\n  white-space: normal;\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  margin-bottom: 0;\n  min-width: 0;\n}\n.tier[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.tier[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 30px 26px;\n  box-shadow: var(--shadow-s);\n  position: relative;\n  transition: .3s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.tier[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n  border-color: #c9dcfb;\n}\n.tier.pop[_ngcontent-%COMP%] {\n  border: 2px solid var(--blue);\n  box-shadow: var(--shadow-m);\n  transform: translateY(-10px);\n}\n.tier.pop[_ngcontent-%COMP%]:hover {\n  transform: translateY(-16px);\n}\n.tier[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -13px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  font-family: var(--mono);\n  font-size: 10.5px;\n  font-weight: 600;\n  letter-spacing: .08em;\n  padding: 6px 16px;\n  border-radius: 99px;\n  box-shadow: 0 10px 22px -8px rgba(255, 140, 26, .8);\n}\n.tier[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 19px;\n  margin-bottom: 5px;\n}\n.tier[_ngcontent-%COMP%]   .sub[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 18px;\n}\n.tier[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 4px;\n  margin-bottom: 3px;\n}\n.tier[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   .cur[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 22px;\n  color: var(--navy);\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.tier[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 42px;\n  font-weight: 800;\n  color: var(--navy);\n  line-height: 1;\n}\n.tier[_ngcontent-%COMP%]   .amt.custom[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.tier[_ngcontent-%COMP%]   .per[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-bottom: 14px;\n}\n.tier[_ngcontent-%COMP%]   .lim[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n.tier[_ngcontent-%COMP%]   .lim[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 10.5px var(--mono);\n  color: var(--navy);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 4px 10px;\n}\n.tier[_ngcontent-%COMP%]   .inc[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 10px;\n  display: block;\n}\n.tier[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  margin-bottom: 18px;\n  flex: 1;\n}\n.tier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 13.2px;\n  color: var(--ink);\n}\n.tier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #e4f7ec;\n  color: var(--green-d);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  margin-top: 2px;\n  transform: scale(0);\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_tickpop .4s var(--ease) forwards;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .06s;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .12s;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .18s;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .24s;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .3s;\n}\n.tier.in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7)   .ck[_ngcontent-%COMP%] {\n  animation-delay: .36s;\n}\n.tier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.tier[_ngcontent-%COMP%]   li.no[_ngcontent-%COMP%] {\n  color: #9AA8BE;\n}\n.tier[_ngcontent-%COMP%]   li.no[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n  background: #F1F4F9;\n  color: #B7C3D6;\n}\n.tier[_ngcontent-%COMP%]   .addon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px dashed var(--line);\n  border-radius: 10px;\n  padding: 10px 12px;\n  margin-bottom: 16px;\n}\n.tier[_ngcontent-%COMP%]   .addon[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-family: var(--disp);\n  font-size: 12.5px;\n}\n.tier[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.price-note[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: #8FA2BD;\n  margin-top: 22px;\n  line-height: 1.8;\n}\n.tcards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.tcard[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px 20px;\n  background: #fff;\n  box-shadow: var(--shadow-s);\n  transition: transform .3s var(--ease), box-shadow .3s;\n}\n.tcard[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n}\n.tcard[_ngcontent-%COMP%]   .qb[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 0 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 24px;\n  font-family: Georgia, serif;\n}\n.tcard[_ngcontent-%COMP%]   .tav[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  margin-bottom: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--purple));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font: 700 18px var(--disp);\n}\n.tcard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.65;\n  margin-bottom: 14px;\n}\n.tcard[_ngcontent-%COMP%]   .tname[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 700;\n  color: var(--navy);\n  font-size: 14.5px;\n}\n.tcard[_ngcontent-%COMP%]   .trole[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate);\n}\n.faqgrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.faq2[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  align-self: start;\n  transition: border-color .25s, box-shadow .25s;\n}\n.faq2.open[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.faq2-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: transform .3s, background .25s;\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-ic[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  background: var(--blue);\n  color: #fff;\n}\n.faq2-a[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s cubic-bezier(.4, 0, .2, 1);\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-a[_ngcontent-%COMP%] {\n  max-height: 460px;\n}\n.faq2-a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.68;\n}\n.contact[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 22px;\n}\n.ccard[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 28px;\n  background: var(--ice);\n}\n.ccard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 6px;\n}\n.ccard[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 18px;\n}\n.clist[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.clist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 13px 16px;\n  transition: .2s var(--ease);\n}\n.clist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .1);\n  transform: translateY(-2px);\n}\n.clist[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%] {\n  flex: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 15px;\n}\n.clist[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--navy);\n}\n.clist[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.cform[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.cform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font: 600 11.5px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 5px;\n}\n.cform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.cform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.cform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font: 400 14px var(--body);\n  color: var(--ink);\n  background: #fff;\n  transition: .15s;\n}\n.cform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.cform[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.cform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.cform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 84px;\n  resize: vertical;\n}\n.cform[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.consent[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  align-items: flex-start;\n  font-size: 12px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.consent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: auto;\n  margin-top: 3px;\n  flex: none;\n}\n.dpdp-note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: var(--slate);\n  background: #fff;\n  border: 1px dashed var(--line);\n  border-radius: 10px;\n  padding: 11px 13px;\n  line-height: 1.6;\n}\n.dpdp-note[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n}\n.formnote[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate);\n  text-align: center;\n}\n.ctaband[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy) 0%,\n      #123776 60%,\n      var(--blue) 100%);\n  border-radius: 22px;\n  padding: 34px 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.ctaband[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .5;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  animation: _ngcontent-%COMP%_gridmove 30s linear infinite;\n}\n.ctaband[_ngcontent-%COMP%]   .glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 140, 26, .4),\n      transparent 65%);\n  filter: blur(30px);\n  right: -40px;\n  top: -60px;\n  animation: _ngcontent-%COMP%_aflow2 12s ease-in-out infinite;\n}\n.ctaband[_ngcontent-%COMP%]   .ct-l[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  z-index: 2;\n}\n.ctaband[_ngcontent-%COMP%]   .cbico[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, .12);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.ctaband[_ngcontent-%COMP%]   .cbico[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  color: #fff;\n}\n.ctaband[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 23px;\n  margin-bottom: 4px;\n}\n.ctaband[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, .75);\n  font-size: 14px;\n  max-width: 460px;\n}\n.ctaband[_ngcontent-%COMP%]   .ct-r[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n  flex-wrap: wrap;\n}\n.pp-proof[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 26px;\n}\n.pp-proof[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 12px var(--body);\n  color: var(--slate);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  background: #fff;\n}\n@media (max-width: 1100px) {\n  .xh-main-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mods[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .ai[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .fw[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .tcards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .secg[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .smap[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1024px) {\n  .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 54px;\n  }\n  .risk[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .flow[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 28px 0;\n  }\n  .flow[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n  .sc-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 860px) {\n  .price[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 440px;\n    margin: 0 auto;\n  }\n  .tier.pop[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .ctaband[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .faqgrid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .contact[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .steps3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sc-float[_ngcontent-%COMP%] {\n    position: static;\n    margin-bottom: 12px;\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .pad[_ngcontent-%COMP%] {\n    padding: 30px 0 30px 0;\n  }\n  .mods[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ai[_ngcontent-%COMP%], \n   .fw[_ngcontent-%COMP%], \n   .tcards[_ngcontent-%COMP%], \n   .smap[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .flow[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .secg[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .risk-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .cmp-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cmp-row[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--line);\n  }\n  .cmp-row[_ngcontent-%COMP%]   .new[_ngcontent-%COMP%] {\n    border-left: 0;\n    border-top: 2px solid var(--blue);\n  }\n  .cmp-head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 40px 0 60px;\n  }\n  .hero-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .cform[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .nf-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .xh-nav-wrap[_ngcontent-%COMP%] {\n    height: 64px;\n    padding: 0 14px;\n    gap: 10px;\n  }\n  .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 52px;\n  }\n  header.xh-header.scrolled[_ngcontent-%COMP%]   .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 46px;\n  }\n  .xh-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-icon-btn[_ngcontent-%COMP%], \n   .burger[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n  }\n  .promo[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n  .sc-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation: none !important;\n    transition: none !important;\n  }\n  .rv[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: none;\n  }\n  .tier[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .ck[_ngcontent-%COMP%] {\n    transform: none;\n  }\n}\n.hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1.08fr);\n}\n.dpdpa-hero-animation[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 20px;\n  background: #0B132B;\n  box-shadow: var(--shadow-lg);\n}\n.dpdpa-hero-animation[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 580px;\n  border: 0;\n}\n@media (max-width: 1100px) {\n  .hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .dpdpa-hero-animation[_ngcontent-%COMP%] {\n    max-width: 680px;\n    margin: 0 auto;\n  }\n}\n.hero[_ngcontent-%COMP%] {\n  padding: 36px 0 44px;\n}\n.hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .crumb[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(30px, 3.2vw, 42px);\n  line-height: 1.12;\n  margin: 14px 0 12px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .serif[_ngcontent-%COMP%] {\n  font-size: .9em;\n  white-space: nowrap;\n}\n.hero[_ngcontent-%COMP%]   p.lead[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n.hero[_ngcontent-%COMP%]   .journey[_ngcontent-%COMP%] {\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.hero[_ngcontent-%COMP%]   .gauge[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.hero[_ngcontent-%COMP%]   .journey-txt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.hero[_ngcontent-%COMP%]   .journey-txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.hero[_ngcontent-%COMP%]   .pills[_ngcontent-%COMP%] {\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.hero[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 6px 10px;\n}\n.hero[_ngcontent-%COMP%]   .hero-cta[_ngcontent-%COMP%] {\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.hero[_ngcontent-%COMP%]   .chips[_ngcontent-%COMP%] {\n  width: auto;\n  flex-wrap: wrap;\n  gap: 10px 14px;\n}\n.hero[_ngcontent-%COMP%]   .chip[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n@media (max-width: 600px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 28px 0 36px;\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero[_ngcontent-%COMP%]   p.lead[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .hero[_ngcontent-%COMP%]   .hero-inner[_ngcontent-%COMP%] {\n    gap: 30px;\n  }\n}\n/*# sourceMappingURL=dpdpa-for-smb.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DpdpaForSmbPage, [{
    type: Component,
    args: [{ selector: "xh-dpdpa-for-smb-page", standalone: true, imports: [SmbSectionNavComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- ============ HERO ============ -->\r
<section class="supplied-smb-hero-shell" aria-label="DPDPA for SMB hero">\r
  <iframe\r
    class="supplied-smb-hero-frame"\r
    src="/assets/heroes/dpdpa-for-smb-hero.html"\r
    title="DPDPA for SMB interactive overview"\r
    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"\r
    referrerpolicy="strict-origin-when-cross-origin"\r
    scrolling="no"\r
  ></iframe>\r
</section>\r
<xh-smb-section-nav\r
  label="DPDPA for SMB page sections"\r
  [links]="sectionNavLinks"\r
/>\r
<section class="hero legacy-smb-hero">\r
  <div class="grid-bg"></div>\r
  <div class="aurora a1"></div><div class="aurora a2"></div><div class="aurora a3"></div>\r
  <canvas id="net"></canvas>\r
  <div class="wrap">\r
    <div class="crumb rv">\r
      <a href="https://xcellhost.cloud/">Home</a><span class="sep">&rsaquo;</span>\r
      <a href="#">Digital Trust</a><span class="sep">&rsaquo;</span><span class="cur">DPDP Compliance for SMBs</span>\r
    </div>\r
    <div class="hero-inner">\r
      <div class="hero-copy">\r
        <span class="eyebrow rv"><span class="dot"></span>DPDP Act 2023 &middot; Built for Indian SMBs</span>\r
        <h1 class="rv" data-d="1">Automate DPDP<br><span class="grad">Compliance.</span> <span class="serif">End to end.</span></h1>\r
        <p class="lead rv" data-d="2">End-to-End DPDP Advisory + Platform + Implementation. AI-powered compliance for Indian startups and MSMEs &mdash; delivered and supported by XcellHost since 1999.</p>\r
\r
        <div class="journey rv" data-d="2">\r
          <div class="gauge">\r
            <svg viewBox="0 0 160 92" aria-hidden="true">\r
              <path d="M14 84a66 66 0 0 1 132 0" fill="none" stroke="#EDF1F8" stroke-width="15" stroke-linecap="round"/>\r
              <path d="M14 84a66 66 0 0 1 132 0" fill="none" stroke="url(#gg)" stroke-width="15" stroke-linecap="round"\r
                    stroke-dasharray="207" stroke-dashoffset="182" class="gpath"/>\r
              <defs><linearGradient id="gg" x1="0" y1="0" x2="1" y2="0">\r
                <stop offset="0" stop-color="#E5484D"/><stop offset=".5" stop-color="#F5A524"/><stop offset="1" stop-color="#2ECC71"/>\r
              </linearGradient></defs>\r
            </svg>\r
            <div class="gv"><b class="count" data-to="12" data-suffix="%">0</b><span>Before</span></div>\r
          </div>\r
          <span class="journey-arrow">&rarr;</span>\r
          <div class="gauge after">\r
            <svg viewBox="0 0 160 92" aria-hidden="true">\r
              <path d="M14 84a66 66 0 0 1 132 0" fill="none" stroke="#EDF1F8" stroke-width="15" stroke-linecap="round"/>\r
              <path d="M14 84a66 66 0 0 1 132 0" fill="none" stroke="#2ECC71" stroke-width="15" stroke-linecap="round"/>\r
            </svg>\r
            <div class="gv"><b class="count" data-to="100" data-suffix="%">0</b><span>With XcellHost</span></div>\r
          </div>\r
          <div class="journey-txt">\r
            <b>Your DPDP Compliance Journey</b>\r
            <span>Gap assessment to audit-ready evidence in 4&ndash;6 months</span>\r
          </div>\r
        </div>\r
\r
        <div class="pills rv" data-d="3">\r
          <span class="pill hi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3 6 6 .5-4.5 4 1.5 6L12 15l-6 3.5 1.5-6L3 8.5 9 8z"/></svg>Free readiness assessment</span>\r
          <span class="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg>ISO 27001 certified</span>\r
          <span class="pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg>Data resident in India</span>\r
        </div>\r
\r
        <div class="hero-cta rv" data-d="4">\r
          <a href="#contact" (click)="openContact($event)" class="btn btn-primary mag">Start Free Assessment <span class="ar">&rarr;</span></a>\r
          <a href="#modules" class="btn btn-ghost mag">Explore the 9 Modules</a>\r
        </div>\r
\r
        <div class="chips rv" data-d="5">\r
          <div class="chip"><span class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 015 5v3a5 5 0 01-10 0V7a5 5 0 015-5z"/><path d="M4 14a8 8 0 0016 0"/></svg></span>AI-Powered Assessment</div>\r
          <div class="chip"><span class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M8 4v16"/></svg></span>Single Compliance Dashboard</div>\r
          <div class="chip"><span class="ci"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M5 8l7-5 7 5"/></svg></span>Audit-Ready Evidence</div>\r
        </div>\r
      </div>\r
\r
      <!-- Supplied DPDPA compliance animation, isolated from page styles. -->\r
      <div class="dpdpa-hero-animation rv" data-d="2">\r
        <iframe src="/assets/animations/dpdpa-animation.html"\r
          title="DPDPA compliance checklist animation"\r
          sandbox="allow-scripts"></iframe>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ TRUST STRIP ============ -->\r
<div class="pp-trust">\r
  <div class="wrap">\r
    <span><b>ISO 27001</b> &amp; <b>20000-1</b> certified</span>\r
    <span><b>Tier-4</b> Indian datacenters</span>\r
    <span><b>10,000+</b> customers</span>\r
    <span><b>Since 1999</b></span>\r
    <span><b>99.95% uptime SLA</b></span>\r
    <span><b>24&times;7</b> NOC + SOC</span>\r
  </div>\r
</div>\r
\r
<!-- ============ WHY ACT NOW ============ -->\r
<section class="pad" id="dpdpaOverview">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Why act now</span><h2>The cost of not being <span class="hl">DPDP compliant</span></h2><div class="u"></div>\r
      <p>The Digital Personal Data Protection Act 2023 is not optional. Non-compliance exposes your business to penalties, reputational damage and lost revenue.</p></div>\r
    <div class="risk">\r
      <div class="risk-list">\r
        <div class="risk-item rv" data-d="1"><div><h4>Penalties up to &#8377;250 crore</h4><p>DPDP Act penalties reach &#8377;250 crore per contravention. A single breach, a missing consent record or an unnotified incident can trigger enforcement action from the Data Protection Board of India.</p></div></div>\r
        <div class="risk-item rv" data-d="2"><div><h4>Reputational &amp; revenue risk</h4><p>Customers leave after a breach, and Indian enterprises increasingly require documented DPDP compliance from vendors before signing. No evidence pack, no contract.</p></div></div>\r
        <div class="risk-item rv" data-d="3"><div><h4>Early compliance is a competitive edge</h4><p>Businesses that comply early win government tenders, enterprise deals and customer trust faster. Our readiness assessment takes 30 minutes and gives you a costed roadmap.</p></div></div>\r
      </div>\r
      <div class="risk-stats">\r
        <div class="rstat red rv" data-d="1"><b>&#8377;250 Cr</b><span>Max penalty per violation</span></div>\r
        <div class="rstat rv" data-d="2"><b>&#8377;17.9 Cr</b><span>Avg. data breach cost in India</span></div>\r
        <div class="rstat rv" data-d="3"><b class="count" data-to="72" data-suffix=" hrs">0</b><span>Breach notification deadline</span></div>\r
        <div class="rstat rv" data-d="4"><b class="count" data-to="30" data-suffix=" min">0</b><span>To know your readiness score</span></div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ THE 9 MODULES ============ -->\r
<section class="pad pad-ice" id="modules">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">The platform</span><h2>Nine modules. <span class="hl">One compliance dashboard.</span></h2><div class="u"></div>\r
      <p>Every requirement of the DPDP Act mapped to a working module &mdash; assessment, discovery, consent, policy, security, vendors and breach response.</p></div>\r
\r
    <div class="mods">\r
\r
      <!-- 1 -->\r
      <article class="mod rv" data-d="1">\r
        <div class="mod-h">\r
          <span class="mod-ic i-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4" stroke-linecap="round"/></svg></span>\r
          <div><h3>DPDP Assessment</h3><span class="sec">Sec 4&ndash;7</span></div>\r
        </div>\r
        <p>Compliance health checks with remediation guidance &mdash; a section-by-section gap assessment across all 44 sections of the DPDP Act 2023.</p>\r
        <ul>\r
          <li>Maturity scoring on a 0&ndash;4 scale with per-control rationale and evidence pointers</li>\r
          <li>Risk heatmap ranking gaps by likelihood and penalty exposure</li>\r
          <li>Context-aware questionnaires tailored to your industry, size and tech stack</li>\r
          <li>Prioritised 90-day remediation roadmap, consultant signed-off</li>\r
        </ul>\r
        <div class="mod-foot"><span>44 sections</span><span>RAG scoring</span><span>30-min run</span></div>\r
      </article>\r
\r
      <!-- 2 -->\r
      <article class="mod rv" data-d="2">\r
        <div class="mod-h">\r
          <span class="mod-ic i-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 11a3 3 0 013 3v6M9 20v-6a3 3 0 016 0"/><path d="M5 12a7 7 0 0114 0v3M2 12a10 10 0 0120 0"/></svg></span>\r
          <div><h3>PII Scanner</h3><span class="sec">Sec 8(1), 8(5)</span></div>\r
        </div>\r
        <p>Detect and anonymise personally identifiable data wherever it lives, then build a defensible Record of Processing Activities.</p>\r
        <ul>\r
          <li>50+ Indian recognisers &mdash; Aadhaar, PAN, UPI, GSTIN, voter ID, driving licence</li>\r
          <li>Scans PostgreSQL, MySQL, MongoDB, Snowflake, Oracle, file shares and SaaS</li>\r
          <li>Auto-generated RoPA mapped to DPDP Section 5/6 lawful bases</li>\r
          <li>Per-user drill-down to surface over-privileged accounts on sensitive stores</li>\r
        </ul>\r
        <div class="mod-foot"><span>50+ patterns</span><span>Auto RoPA</span><span>Agentless</span></div>\r
      </article>\r
\r
      <!-- 3 -->\r
      <article class="mod rv" data-d="3">\r
        <div class="mod-h">\r
          <span class="mod-ic i-red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"/><circle cx="12" cy="12" r="3"/></svg></span>\r
          <div><h3>Universal VA Scanner</h3><span class="sec">Sec 8(7)</span></div>\r
        </div>\r
        <p>Network, web app, code and secrets scanning in one engine &mdash; the security safeguards the DPDP Act expects you to demonstrate.</p>\r
        <ul>\r
          <li>Unified coverage across web, network, cloud, container and DAST surfaces</li>\r
          <li>Secrets detection in source control before credentials reach production</li>\r
          <li>Hygiene grade with scan-over-scan improvement trend</li>\r
          <li>Findings mapped to ISO 27001 Annex A and SOC 2 Trust Services Criteria</li>\r
        </ul>\r
        <div class="mod-foot"><span>Web + network</span><span>Secrets</span><span>Hygiene grade</span></div>\r
      </article>\r
\r
      <!-- 4 -->\r
      <article class="mod rv" data-d="4">\r
        <div class="mod-h">\r
          <span class="mod-ic i-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 11l-3 3a3 3 0 004 4l3-3"/><path d="M17 13l3-3a3 3 0 00-4-4l-3 3"/><path d="M9 15l6-6" stroke-linecap="round"/></svg></span>\r
          <div><h3>Consent Management</h3><span class="sec">Sec 6</span></div>\r
        </div>\r
        <p>DPDP-compliant consent collection with immutable audit trails &mdash; the module most SMBs would otherwise build in-house and get wrong.</p>\r
        <ul>\r
          <li>Per-purpose granular consent capture with version-controlled notices</li>\r
          <li>Notices translated across 22+ Indian languages plus Hinglish</li>\r
          <li>Hash-chained consent event log built for regulator review</li>\r
          <li>One-click withdrawal, nominee management and grievance routing</li>\r
        </ul>\r
        <div class="mod-foot"><span>22+ languages</span><span>Hash-chained</span><span>DPR-linked</span></div>\r
      </article>\r
\r
      <!-- 5 -->\r
      <article class="mod rv" data-d="5">\r
        <div class="mod-h">\r
          <span class="mod-ic i-amber"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V7z"/><path d="M14 2v5h5M9 13h6M9 17h4" stroke-linecap="round"/></svg></span>\r
          <div><h3>Policy Management</h3><span class="sec">Sec 5</span></div>\r
        </div>\r
        <p>AI-powered policy generation and validation &mdash; privacy notices, retention schedules and internal policies that actually match your operations.</p>\r
        <ul>\r
          <li>Generate privacy notices, retention and data-handling policies from your RoPA</li>\r
          <li>Policy Analyzer scans existing documents against DPDP requirements and flags gaps</li>\r
          <li>Version control with approval workflow and publication history</li>\r
          <li>Evidence pointers linking each clause to the control it satisfies</li>\r
        </ul>\r
        <div class="mod-foot"><span>AI drafting</span><span>Gap analysis</span><span>Versioned</span></div>\r
      </article>\r
\r
      <!-- 6 -->\r
      <article class="mod rv" data-d="1">\r
        <div class="mod-h">\r
          <span class="mod-ic i-teal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round"/></svg></span>\r
          <div><h3>ISO 27001 Assessment</h3><span class="sec">Global</span></div>\r
        </div>\r
        <p>Gap analysis across 14 scope heads and 58 controls, with the same scoring model and roadmap output as the DPDP assessment.</p>\r
        <ul>\r
          <li>Control-by-control maturity scoring with evidence requirements listed</li>\r
          <li>Shared-control mapping so DPDP work counts toward ISO readiness</li>\r
          <li>Statement of Applicability draft generated from your assessment</li>\r
          <li>Prioritised remediation plan sized for an SMB security team</li>\r
        </ul>\r
        <div class="mod-foot"><span>14 scope heads</span><span>58 controls</span><span>SoA draft</span></div>\r
      </article>\r
\r
      <!-- 7 -->\r
      <article class="mod rv" data-d="2">\r
        <div class="mod-h">\r
          <span class="mod-ic i-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0"/><path d="M17 8h5M17 12h5M17 16h3" stroke-linecap="round"/></svg></span>\r
          <div><h3>Vendor Risk Management</h3><span class="sec">Sec 8(2), 16</span></div>\r
        </div>\r
        <p>Third-party risk assessments and contract management &mdash; because under the DPDP Act your processors' failures are still your liability.</p>\r
        <ul>\r
          <li>Six-dimension scoring: profile, financial health, compliance, references, security, BCP</li>\r
          <li>Risk-adaptive Data Processing Agreements with configurable clause sets</li>\r
          <li>Sub-processor inventory with cross-border transfer assessment under Section 16</li>\r
          <li>Continuous monitoring of vendor breach disclosures and certification lapses</li>\r
        </ul>\r
        <div class="mod-foot"><span>6 dimensions</span><span>DPA templates</span><span>Sub-processors</span></div>\r
      </article>\r
\r
      <!-- 8 -->\r
      <article class="mod rv" data-d="3">\r
        <div class="mod-h">\r
          <span class="mod-ic i-purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01" stroke-linecap="round"/></svg></span>\r
          <div><h3>SOC 2 Assessment</h3><span class="sec">Global</span></div>\r
        </div>\r
        <p>Readiness assessment across 11 trust service categories, for SMBs whose US and enterprise buyers ask for a SOC 2 report.</p>\r
        <ul>\r
          <li>Readiness scoring across Security, Availability, Confidentiality, Processing Integrity and Privacy</li>\r
          <li>Control mapping shared with DPDP and ISO 27001 to avoid duplicate work</li>\r
          <li>Evidence checklist prepared for your Type I or Type II audit window</li>\r
          <li>Auditor-ready export pack with gaps and owners assigned</li>\r
        </ul>\r
        <div class="mod-foot"><span>11 categories</span><span>Type I / II prep</span><span>Shared controls</span></div>\r
      </article>\r
\r
      <!-- 9 -->\r
      <article class="mod rv" data-d="4">\r
        <div class="mod-h">\r
          <span class="mod-ic i-red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l10 18H2z"/><path d="M12 9v5M12 17h.01" stroke-linecap="round"/></svg></span>\r
          <div><h3>Breach Notifications</h3><span class="sec">Sec 8(6), 8(9)</span></div>\r
        </div>\r
        <p>DPDP Act breach notification templates and a 72-hour playbook, so the worst day of your year is not also an improvised one.</p>\r
        <ul>\r
          <li>72-hour playbook: board notification, Data Protection Board filing, principal communication</li>\r
          <li>Pre-approved notification templates aligned to the DPDP breach rules</li>\r
          <li>Incident timeline with evidence capture and named-owner escalation</li>\r
          <li>Quarterly tabletop exercises and DPO drill reports on retainer engagements</li>\r
        </ul>\r
        <div class="mod-foot"><span>72-hr playbook</span><span>DPB filing</span><span>Tabletops</span></div>\r
      </article>\r
\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ SECTION MAP ============ -->\r
<section class="pad pad-navy">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">End-to-end DPDP coverage</span><h2>DPDP Act 2023 &mdash; section-wise compliance map</h2><div class="u"></div>\r
      <p>Every requirement of the Digital Personal Data Protection Act mapped to an XcellHost module or an advisory engagement.</p></div>\r
    <div class="smap">\r
      <div class="smap-row rv" data-d="1"><span class="s">Start</span><div><b>GAP Assessment</b><span>DPDP gap assessment</span></div></div>\r
      <div class="smap-row rv" data-d="2"><span class="s">Sec 4&ndash;7</span><div><b>Consent Management</b><span>Consent + data principal requests</span></div></div>\r
      <div class="smap-row rv" data-d="3"><span class="s">Sec 5</span><div><b>Privacy Notice</b><span>Policy generator &amp; management</span></div></div>\r
      <div class="smap-row rv" data-d="4"><span class="s">Sec 8(1), 8(5)</span><div><b>Purpose Limitation &amp; Minimisation</b><span>PII Scanner</span></div></div>\r
      <div class="smap-row rv" data-d="5"><span class="s">Sec 11&ndash;13</span><div><b>Data Principal Rights</b><span>DPR automation</span></div></div>\r
      <div class="smap-row rv" data-d="1"><span class="s">Sec 13</span><div><b>Grievance Redressal</b><span>Integrated with consent module</span></div></div>\r
      <div class="smap-row rv" data-d="2"><span class="s">Sec 8(7)</span><div><b>Security Safeguards</b><span>Universal VA Scanner</span></div></div>\r
      <div class="smap-row rv" data-d="3"><span class="s">Sec 8(9)</span><div><b>Breach Notification</b><span>Breach notification templates</span></div></div>\r
      <div class="smap-row rv" data-d="4"><span class="s">Sec 8(8)</span><div><b>Third Party Risk</b><span>TPRM module</span></div></div>\r
      <div class="smap-row rv" data-d="5"><span class="s">Sec 10</span><div><b>DPO, DPIA &amp; Audit</b><span>XcellHost advisory-led</span></div></div>\r
      <div class="smap-row rv" data-d="1"><span class="s">Sec 16</span><div><b>Cross-Border Transfer</b><span>Vendor risk + data residency review</span></div></div>\r
      <div class="smap-row rv" data-d="2"><span class="s">Ongoing</span><div><b>Continuous Compliance</b><span>Drift detection + quarterly DPO review</span></div></div>\r
    </div>\r
    <div class="smap-note">\r
      <span><i style="background:#7FB2FF"></i>Platform-automated</span>\r
      <span><i style="background:#FF8C1A"></i>Advisory-led</span>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ AI ENGINES ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">AI-native architecture</span><h2>Built on <span class="hl">seven AI engines</span></h2><div class="u"></div>\r
      <p>Every module is powered by purpose-built AI. Not bolted on, not an afterthought.</p></div>\r
    <div class="ai">\r
      <div class="aic rv" data-d="1"><span class="tag">Latest LLM</span><b>Compliance Copilot</b><span>Expert GRC assistant grounded in DPDP, ISO 27001, SOC 2 and GDPR frameworks.</span></div>\r
      <div class="aic rv" data-d="2"><span class="tag">Document AI</span><b>Policy Analyzer</b><span>Scans policy documents against DPDP requirements, identifies gaps and generates roadmaps.</span></div>\r
      <div class="aic rv" data-d="3"><span class="tag">Research AI</span><b>Vendor Intelligence</b><span>Reputation research and risk insight for third-party vendors and sub-processors.</span></div>\r
      <div class="aic rv" data-d="4"><span class="tag">Legal AI</span><b>Contract Generator</b><span>Risk-adaptive DPAs with configurable clauses calibrated to each vendor's risk profile.</span></div>\r
      <div class="aic rv" data-d="1"><span class="tag">Adaptive AI</span><b>Assessment Engine</b><span>Customises compliance questionnaires to your technology landscape and risk profile.</span></div>\r
      <div class="aic rv" data-d="2"><span class="tag">Vision AI</span><b>Artifact Analyzer</b><span>Validates uploaded evidence &mdash; policies, certificates, audit reports &mdash; against requirements.</span></div>\r
      <div class="aic rv" data-d="3"><span class="tag">Analysis AI</span><b>Due Diligence Engine</b><span>Multi-engine due diligence covering market, founder and compliance risk.</span></div>\r
      <div class="aic rv" data-d="4"><span class="tag">Human</span><b>Certified Consultants</b><span>XcellHost advisors review every AI output before it reaches your board pack.</span></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ HOW IT WORKS ============ -->\r
<section class="pad pad-ice" id="dpdpaWatch">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">How it works</span><h2>Agentless deployment, <span class="hl">live in minutes</span></h2><div class="u"></div>\r
      <p>Connect your data sources and the platform starts scanning, classifying and scoring immediately &mdash; no agents to roll out.</p></div>\r
    <div class="flow">\r
      <div class="fstep rv" data-d="1"><div class="n">01</div><b>Connect</b><span>Agentless deployment across your databases, cloud and SaaS</span></div>\r
      <div class="fstep rv" data-d="2"><div class="n">02</div><b>Discover</b><span>AI-powered data discovery and PII classification</span></div>\r
      <div class="fstep rv" data-d="3"><div class="n">03</div><b>Govern</b><span>Control access, purposes and permissions at scale</span></div>\r
      <div class="fstep rv" data-d="4"><div class="n">04</div><b>Protect</b><span>Apply security controls and close findings automatically</span></div>\r
      <div class="fstep rv" data-d="5"><div class="n">05</div><b>Monitor</b><span>Continuous risk monitoring, drift detection and alerts</span></div>\r
    </div>\r
\r
    <div class="head rv steps-heading" style="margin-top:70px"><span class="kicker">See it in action</span><h2>From assessment to compliance in <span class="hl">three steps</span></h2><div class="u"></div></div>\r
    <div class="steps3">\r
      <div class="s3 rv" data-d="1"><span class="num">01</span><b>Assess</b><p>Take the AI-powered DPDP or ISO 27001 assessment. Answer context-aware questions tailored to your industry and size &mdash; roughly 30 minutes.</p></div>\r
      <div class="s3 rv" data-d="2"><span class="num">02</span><b>Score</b><p>Get an instant readiness score with gap analysis, category breakdowns and RAG status indicators across every section of the Act.</p></div>\r
      <div class="s3 rv" data-d="3"><span class="num">03</span><b>Remediate</b><p>Follow a prioritised roadmap with actionable steps, owners, tool recommendations and downloadable evidence-backed reports.</p></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ COMPARISON ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="head rv comparison-heading"><span class="kicker">Why switch</span><h2>Traditional consultants <span class="hl">vs the XcellHost platform</span></h2><div class="u"></div>\r
      <p>Advisory still matters &mdash; but the evidence, scanning and monitoring underneath it should be automated.</p></div>\r
    <div class="cmp rv">\r
      <div class="cmp-row cmp-head"><div></div><div class="old">Traditional consultants</div><div class="new">XcellHost DPDP platform</div></div>\r
      <div class="cmp-row"><div class="lbl">Cost</div><div class="old">&#8377;5&ndash;20 lakh per engagement</div><div class="new">From &#8377;10,000 / month</div></div>\r
      <div class="cmp-row"><div class="lbl">Time to first result</div><div class="old">4&ndash;6 weeks</div><div class="new">Under 30 minutes</div></div>\r
      <div class="cmp-row"><div class="lbl">Approach</div><div class="old">Manual, spreadsheet-based</div><div class="new">AI-driven automation + certified consultants</div></div>\r
      <div class="cmp-row"><div class="lbl">Output</div><div class="old">Static PDF report</div><div class="new">Live dashboard + continuous monitoring</div></div>\r
      <div class="cmp-row"><div class="lbl">Language support</div><div class="old">English only</div><div class="new">22+ Indian languages</div></div>\r
      <div class="cmp-row"><div class="lbl">Reassessment</div><div class="old">Billed per engagement</div><div class="new">Unlimited assessments included</div></div>\r
      <div class="cmp-row"><div class="lbl">Evidence collection</div><div class="old">Manual screenshots</div><div class="new">Automated from connected systems</div></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ FRAMEWORKS ============ -->\r
<section class="pad pad-ice">\r
  <div class="wrap">\r
    <div class="head rv frameworks-heading"><span class="kicker">Compliance frameworks</span><h2>DPDP and ISO 27001 live &mdash; <span class="hl">more coming</span></h2><div class="u"></div></div>\r
    <div class="fw">\r
      <div class="fwc rv" data-d="1"><div class="top"><h3>DPDP Act</h3><span class="geo">India</span></div>\r
        <p>Comprehensive DPDP Act assessment with gap analysis, remediation roadmap and compliance scoring across all 44 sections.</p>\r
        <a class="btn btn-t btn-sm mag" href="#contact" (click)="openContact($event)">Start Assessment</a></div>\r
      <div class="fwc rv" data-d="2"><div class="top"><h3>ISO 27001</h3><span class="geo">Global</span></div>\r
        <p>Gap analysis across 14 scope heads and 58 controls, with a Statement of Applicability draft and prioritised remediation.</p>\r
        <a class="btn btn-t btn-sm mag" href="#contact" (click)="openContact($event)">Start Assessment</a></div>\r
      <div class="fwc rv" data-d="3"><div class="top"><h3>SOC 2</h3><span class="geo">USA</span></div>\r
        <p>Readiness assessment across 11 trust service categories with an auditor-ready evidence pack for Type I or Type II.</p>\r
        <a class="btn btn-t btn-sm mag" href="#contact" (click)="openContact($event)">Start Assessment</a></div>\r
      <div class="fwc soon rv" data-d="4"><div class="top"><h3>GDPR</h3><span class="geo">Coming soon</span></div>\r
        <p>GDPR module is under development for Indian businesses serving EU data subjects. Register to be notified at launch.</p>\r
        <a class="btn btn-ghost btn-sm mag" href="#contact" (click)="openContact($event)">Notify Me</a></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ INTEGRATIONS ============ -->\r
<section class="pad">\r
  <div class="wrap">\r
    <div class="head rv integrations-heading"><span class="kicker">Integrations</span><h2>Out-of-the-box connectors for <span class="hl">31 systems</span></h2><div class="u"></div>\r
      <p>Connect databases, cloud platforms and SaaS tools for automated PII discovery and compliance checks &mdash; no custom wiring required.</p></div>\r
  </div>\r
  <div class="marq-wrap on-white">\r
    <div class="track">\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#ff9900,#232f3e)"></span>AWS</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#0078d4,#50e6ff)"></span>Azure</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#4285f4,#34a853)"></span>GCP</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#336791,#1d3f5c)"></span>PostgreSQL</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#13aa52,#0b6b34)"></span>MongoDB</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#00758f,#f29111)"></span>MySQL</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#29b5e8,#0f6d8c)"></span>Snowflake</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#005571,#00bfb3)"></span>Elasticsearch</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#d82c20,#a41e15)"></span>Redis</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#f80000,#a30000)"></span>Oracle</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#00297a,#001a4d)"></span>Okta</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#eb5424,#b03d18)"></span>Auth0</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#632ca6,#3d1a66)"></span>Datadog</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#000000,#65a637)"></span>Splunk</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#f46800,#b04c00)"></span>Grafana</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#4a154b,#36c5f0)"></span>Slack</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#24292e,#000)"></span>GitHub</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#0052cc,#2684ff)"></span>Jira</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#00a1e0,#0070a8)"></span>Salesforce</div>\r
      <div class="ilogo"><span class="dotmark" style="background:linear-gradient(135deg,#326ce5,#1a4fb0)"></span>Kubernetes</div>\r
      <!-- duplicate half for seamless loop -->\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#ff9900,#232f3e)"></span>AWS</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#0078d4,#50e6ff)"></span>Azure</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#4285f4,#34a853)"></span>GCP</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#336791,#1d3f5c)"></span>PostgreSQL</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#13aa52,#0b6b34)"></span>MongoDB</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#00758f,#f29111)"></span>MySQL</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#29b5e8,#0f6d8c)"></span>Snowflake</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#005571,#00bfb3)"></span>Elasticsearch</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#d82c20,#a41e15)"></span>Redis</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#f80000,#a30000)"></span>Oracle</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#00297a,#001a4d)"></span>Okta</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#eb5424,#b03d18)"></span>Auth0</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#632ca6,#3d1a66)"></span>Datadog</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#000000,#65a637)"></span>Splunk</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#f46800,#b04c00)"></span>Grafana</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#4a154b,#36c5f0)"></span>Slack</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#24292e,#000)"></span>GitHub</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#0052cc,#2684ff)"></span>Jira</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#00a1e0,#0070a8)"></span>Salesforce</div>\r
      <div class="ilogo" aria-hidden="true"><span class="dotmark" style="background:linear-gradient(135deg,#326ce5,#1a4fb0)"></span>Kubernetes</div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ SECURITY POSTURE ============ -->\r
<section class="pad pad-navy">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Enterprise-grade security</span><h2>We practise what we preach</h2><div class="u"></div>\r
      <p>A compliance platform has to demonstrate its own compliance maturity. Here is how your data is protected.</p></div>\r
    <div class="secg">\r
      <div class="secc rv" data-d="1"><b>Indian Tier-4 DC</b><span>Data residency</span></div>\r
      <div class="secc rv" data-d="2"><b>AES-256</b><span>Data at rest</span></div>\r
      <div class="secc rv" data-d="3"><b>TLS 1.2+</b><span>Data in transit</span></div>\r
      <div class="secc rv" data-d="4"><b>RBAC</b><span>Role-based access</span></div>\r
      <div class="secc rv" data-d="5"><b>MFA</b><span>Multi-factor auth</span></div>\r
      <div class="secc rv" data-d="1"><b>24&times;7 SOC</b><span>Monitored round the clock</span></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ LANGUAGES ============ -->\r
<section class="pad pad-ice">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">Built for India</span><h2>Compliance in <span class="hl">22+ languages</span></h2><div class="u"></div>\r
      <p>Assessments, consent flows and AI guidance in every Eighth Schedule language, plus Hinglish.</p></div>\r
    <div class="langs rv">\r
      <span>English</span><span>Hindi</span><span>Hinglish</span><span>Bengali</span><span>Tamil</span><span>Telugu</span>\r
      <span>Kannada</span><span>Malayalam</span><span>Marathi</span><span>Gujarati</span><span>Punjabi</span><span>Odia</span>\r
      <span>Assamese</span><span>Urdu</span><span>Sindhi</span><span>Nepali</span><span>Konkani</span><span>Manipuri</span>\r
      <span>Kashmiri</span><span>Santali</span><span>Bodo</span><span>Dogri</span><span>Maithili</span><span>Sanskrit</span>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ PRICING ============ -->\r
<section class="pad" id="pricing">\r
  <div class="wrap">\r
    <div class="head rv pricing-heading"><span class="kicker">Pricing</span><h2>DPDP compliance from <span class="hl">&#8377;10,000 / month</span></h2><div class="u"></div>\r
      <p>Full-stack DPDP for Indian SMBs. Prices shown monthly, billed quarterly as a 3-month licence. All prices exclude 18% GST.</p></div>\r
    <div class="price">\r
\r
      <div class="tier rv" data-d="1">\r
        <h3>Launch</h3>\r
        <div class="sub">For early-stage teams getting DPDP-ready</div>\r
        <div class="amt"><span class="cur">&#8377;</span><span class="num count" data-to="10000" data-comma="1">0</span></div>\r
        <div class="per">/ month &middot; 3-month licence, billed quarterly</div>\r
        <div class="lim"><span>&le; 25 users</span><span>1 website</span></div>\r
        <span class="inc">Included</span>\r
        <ul>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Gap Assessment (self-serve)</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Data Flow Diagram</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Consent Management</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Policy Management</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Vendor Risk Management</li>\r
          <li class="no"><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg></span>Data Discovery &amp; Mapping</li>\r
        </ul>\r
        <div class="addon"><b>Optional onboarding &mdash; &#8377;25,000 one-time.</b> Platform training plus 5 hours of handholding.</div>\r
        <a href="/dpdpa-for-smb/launch-checkout" class="btn btn-t mag">Get Launch</a>\r
      </div>\r
\r
      <div class="tier pop rv" data-d="2">\r
        <span class="tag">MOST POPULAR</span>\r
        <h3>Growth</h3>\r
        <div class="sub">For scaling teams with multiple applications</div>\r
        <div class="amt"><span class="cur">&#8377;</span><span class="num count" data-to="30000" data-comma="1">0</span></div>\r
        <div class="per">/ month &middot; 3-month licence, billed quarterly</div>\r
        <div class="lim"><span>&le; 100 users</span><span>3 applications</span></div>\r
        <span class="inc">Included</span>\r
        <ul>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Everything in Launch</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Universal VA Scanner</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>ISO 27001 &amp; SOC 2 assessments</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Breach notification playbook</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Multi-framework dashboard</li>\r
          <li class="no"><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M18 6L6 18" stroke-linecap="round"/></svg></span>Data Discovery &amp; Mapping</li>\r
        </ul>\r
        <div class="addon"><b>Optional onboarding &mdash; &#8377;35,000 one-time.</b> Platform training plus 5 hours of handholding.</div>\r
        <a href="/dpdpa-for-smb/growth-checkout" class="btn btn-orange mag">Get Growth <span class="ar">&rarr;</span></a>\r
      </div>\r
\r
      <div class="tier rv" data-d="3">\r
        <h3>Enterprise</h3>\r
        <div class="sub">For organisations with 100+ users</div>\r
        <div class="amt custom"><span class="num">Custom</span></div>\r
        <div class="per">/ tailored to scope and scale</div>\r
        <div class="lim"><span>100+ users</span><span>Unlimited apps</span></div>\r
        <span class="inc">Included</span>\r
        <ul>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>All nine platform modules</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Data Discovery &amp; Mapping</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Department-wide gap assessment</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Virtual DPO advisory &amp; board reporting</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>On-premise deployment option</li>\r
          <li><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Custom integrations &amp; SLA</li>\r
        </ul>\r
        <div class="addon"><b>Fixed-fee advisory from &#8377;49,999.</b> Gap assessment plus remediation roadmap in 2&ndash;4 weeks.</div>\r
        <a href="/dpdpa-for-smb/enterprise-enquiry" class="btn btn-t mag">Request Enterprise Quote</a>\r
      </div>\r
\r
    </div>\r
    <p class="price-note">All prices exclude 18% GST &middot; GST invoice on every purchase &middot; Pay via UPI, Cards or NetBanking<br>\r
      Implementation engagements run 4&ndash;6 months &middot; Retainer covers virtual DPO advisory and quarterly board reporting</p>\r
  </div>\r
</section>\r
\r
<!-- ============ TESTIMONIALS ============ -->\r
<section class="pad pad-ice" id="dpdpaTestimonials">\r
  <div class="wrap">\r
    <div class="head rv testimonials-heading"><span class="kicker">Testimonials</span><h2>What founders and compliance leads say</h2><div class="u"></div></div>\r
    <div class="tcards">\r
      <div class="tcard rv tilt" data-d="1"><div class="qb">&rdquo;</div><div class="tav">IT</div>\r
        <p>The AI-powered assessment identified gaps we had not even considered, and the consent module saved us from building it in-house. Weeks, not months.</p>\r
        <div class="tname">IT Operations Lead</div><div class="trole">Fintech &middot; Growth plan</div></div>\r
      <div class="tcard rv tilt" data-d="2"><div class="qb">&rdquo;</div><div class="tav">HT</div>\r
        <p>As a healthtech handling sensitive patient data, DPDP was critical. From PII discovery to policy generation, the process was straightforward.</p>\r
        <div class="tname">Founder &amp; CEO</div><div class="trole">Healthtech &middot; Enterprise</div></div>\r
      <div class="tcard rv tilt" data-d="3"><div class="qb">&rdquo;</div><div class="tav">SA</div>\r
        <p>We needed ISO 27001 readiness for US enterprise clients. The gap assessment gave us a clear roadmap with prioritised remediation steps.</p>\r
        <div class="tname">CEO</div><div class="trole">SaaS &middot; Growth plan</div></div>\r
      <div class="tcard rv tilt" data-d="4"><div class="qb">&rdquo;</div><div class="tav">ED</div>\r
        <p>Managing DPDP, ISO 27001 and SOC 2 at once seemed impossible. The multi-framework dashboard gives us one view of posture across all three.</p>\r
        <div class="tname">Head of Compliance</div><div class="trole">Edtech &middot; Enterprise</div></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ FAQ ============ -->\r
<section class="pad" id="dpdpaFaq">\r
  <div class="wrap">\r
    <div class="head rv"><span class="kicker">FAQ</span><h2>Frequently asked <span class="hl">questions</span></h2><div class="u"></div></div>\r
    <div class="faqgrid">\r
      <div class="faq2 open rv" data-d="1"><button class="faq2-q" type="button">What is the DPDP Act 2023 and does it apply to my SMB?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>The Digital Personal Data Protection Act 2023 governs how any organisation processing digital personal data of individuals in India must collect, use, store and delete it. It applies regardless of company size &mdash; there is no small-business exemption. If you hold customer names, emails, phone numbers or payment details, you are a Data Fiduciary under the Act.</p></div></div>\r
      <div class="faq2 rv" data-d="2"><button class="faq2-q" type="button">When does enforcement actually begin?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>The Act received assent in August 2023 and is being brought into force in phases through subordinate rules. Organisations are being given a transition window before penalty provisions bite. Because remediation typically takes 4&ndash;6 months, most boards are treating readiness as a now problem rather than a later one. We will confirm the current enforcement position for your sector during the assessment.</p></div></div>\r
      <div class="faq2 rv" data-d="3"><button class="faq2-q" type="button">What are the penalties for non-compliance?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>The DPDP Act provides for financial penalties of up to &#8377;250 crore per contravention, with the Data Protection Board of India determining the amount based on the nature, gravity and duration of the breach. Failure to implement reasonable security safeguards and failure to notify a breach are both separately penalisable.</p></div></div>\r
      <div class="faq2 rv" data-d="4"><button class="faq2-q" type="button">How long does it take to become DPDP compliant?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>The readiness assessment itself takes about 30 minutes and gives you a score plus a gap list the same day. A typical SMB implementation &mdash; consent, RoPA, policies, DPR handling, breach playbook and vendor governance &mdash; runs 4&ndash;6 months depending on how many systems hold personal data.</p></div></div>\r
      <div class="faq2 rv" data-d="5"><button class="faq2-q" type="button">Do I need a Data Protection Officer?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>A DPO is mandatory for Significant Data Fiduciaries as notified by the government. Other organisations still need a contactable person responsible for grievance redressal under Section 13. XcellHost offers a virtual DPO advisory retainer that covers the role, quarterly reviews and board reporting without a full-time hire.</p></div></div>\r
      <div class="faq2 rv" data-d="1"><button class="faq2-q" type="button">Where is our data stored?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>In Indian Tier-4 datacenters, encrypted with AES-256 at rest and TLS 1.2+ in transit, with role-based access control and MFA on every account. Data residency in India keeps you aligned with DPDP and RBI expectations. On-premise deployment is available on Enterprise engagements.</p></div></div>\r
      <div class="faq2 rv" data-d="2"><button class="faq2-q" type="button">Can this replace our compliance consultant?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>It replaces the manual, repetitive part &mdash; evidence collection, scanning, scoring, document drafting and monitoring. It does not replace judgement. XcellHost engagements pair the platform with certified consultants who review AI output, own the roadmap and sign off the board pack.</p></div></div>\r
      <div class="faq2 rv" data-d="3"><button class="faq2-q" type="button">Do we get a GST invoice?<span class="faq2-ic">+</span></button><div class="faq2-a"><p>Yes. Every purchase is billed in INR with a GST-compliant invoice so your business can claim input tax credit. Payment is by UPI, cards or NetBanking, and licences are issued quarterly.</p></div></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- ============ CTA BAND ============ -->\r
<section class="pad" style="padding-top:0" id="contact">\r
  <div class="wrap">\r
    <div class="pp-cta dpdpa-buddha-strip rv">\r
      <div class="pp-cta-copy">\r
        <h3>Ready to start with DPDPA for SMB?</h3>\r
        <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
      </div>\r
      <div class="dpdpa-buddha-actions">\r
        <a href="#contact" (click)="openContact($event)" class="btn btn-orange">Request a callback</a>\r
        <a href="#contact" (click)="openContact($event)" class="btn btn-outline">&#9889; Buy Now</a>\r
        <a href="#" (click)="requestDoc('infosheet', $event)" class="btn btn-outline">&#11015; Infosheet</a>\r
        <a href="#" (click)="requestDoc('presentation', $event)" class="btn btn-outline">&#128214; Presentation</a>\r
        <a href="https://wa.me/918657032540" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Talk on WhatsApp</a>\r
        <a href="mailto:sales@xcellhost.cloud" class="btn btn-outline">Email Us</a>\r
      </div>\r
      <a class="pp-cta-buddha-link" href="/company/support-overview" aria-label="Visit XcellHost customer support">\r
        <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" />\r
      </a>\r
    </div>\r
    <div class="pp-proof rv">\r
      <span>&#127941; ISO 27001</span><span>&#127941; ISO 20000-1</span><span>&#127959; Tier-4 Indian DCs</span>\r
      <span>&#128368; Since 1999</span><span>&#128274; Secure Payments &mdash; UPI &middot; Cards &middot; NetBanking</span>\r
    </div>\r
  </div>\r
</section>\r
\r
`, styles: ['/* src/app/pages/dpdpa-for-smb.page.css */\n:host {\n  display: block;\n  --navy2:#0A2A57;\n  --blue-d:#0C3E8F;\n  --orange-d:#F57C00;\n  --green:#2ECC71;\n  --green-d:#128A42;\n  --red:#E5484D;\n  --amber:#F5A524;\n  --purple:#7C3AED;\n  --shadow-s:0 6px 18px rgba(4,30,66,.06);\n  --shadow-m:0 18px 50px rgba(4,30,66,.10);\n  --shadow-lg:0 34px 80px -20px rgba(4,30,66,.34);\n  --maxw:1240px;\n  --ease:cubic-bezier(.22,.7,.2,1);\n}\n:root {\n  --navy:#041E42;\n  --navy2:#0A2A57;\n  --blue:#1565D8;\n  --blue-d:#0C3E8F;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --orange-d:#F57C00;\n  --ice:#F2F6FC;\n  --white:#fff;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --green:#2ECC71;\n  --green-d:#128A42;\n  --red:#E5484D;\n  --amber:#F5A524;\n  --purple:#7C3AED;\n  --shadow-s:0 6px 18px rgba(4,30,66,.06);\n  --shadow-m:0 18px 50px rgba(4,30,66,.10);\n  --shadow-lg:0 34px 80px -20px rgba(4,30,66,.34);\n  --maxw:1240px;\n  --ease:cubic-bezier(.22,.7,.2,1);\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  font-family:\n    var(--body),\n    system-ui,\n    sans-serif;\n  color: var(--ink);\n  background: #fff;\n  line-height: 1.6;\n  overflow-x: hidden;\n  -webkit-font-smoothing: antialiased;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n  font-family: var(--disp);\n  color: var(--navy);\n  line-height: 1.12;\n  letter-spacing: -.02em;\n  font-weight: 700;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nimg,\nsvg {\n  display: block;\n}\n.wrap {\n  max-width: var(--maxw);\n  margin: 0 auto;\n  padding: 0 24px;\n}\n.serif {\n  font-family: "Instrument Serif", serif;\n  font-style: italic;\n  letter-spacing: 0;\n}\n.mono {\n  font-family: var(--mono);\n}\n.hero > .wrap {\n  display: block;\n}\n.hero > .wrap > .crumb {\n  margin-bottom: 30px;\n}\n#progress {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 3px;\n  width: 0;\n  z-index: 130;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  box-shadow: 0 0 12px rgba(21, 101, 216, .6);\n}\n#spotlight {\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity .4s;\n  background:\n    radial-gradient(\n      340px circle at var(--mx,-999px) var(--my,-999px),\n      rgba(21, 101, 216, .09),\n      transparent 65%);\n}\n.rv {\n  opacity: 0;\n  transform: translateY(24px);\n  transition: opacity .7s var(--ease), transform .7s var(--ease);\n}\n.rv.in {\n  opacity: 1;\n  transform: none;\n}\n.rv[data-d="1"] {\n  transition-delay: .08s;\n}\n.rv[data-d="2"] {\n  transition-delay: .16s;\n}\n.rv[data-d="3"] {\n  transition-delay: .24s;\n}\n.rv[data-d="4"] {\n  transition-delay: .32s;\n}\n.rv[data-d="5"] {\n  transition-delay: .4s;\n}\n.tilt {\n  transition: transform .25s var(--ease);\n}\n.grid-bg {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .55;\n  background-image:\n    linear-gradient(var(--line) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      var(--line) 1px,\n      transparent 1px);\n  background-size: 48px 48px;\n  mask-image:\n    radial-gradient(\n      760px 560px at 82% 8%,\n      #000,\n      transparent 72%);\n  -webkit-mask-image:\n    radial-gradient(\n      760px 560px at 82% 8%,\n      #000,\n      transparent 72%);\n  animation: gridmove 32s linear infinite;\n}\n@keyframes gridmove {\n  to {\n    background-position: 48px 48px;\n  }\n}\n.aurora {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(60px);\n  z-index: 0;\n  pointer-events: none;\n  opacity: .55;\n}\n.aurora.a1 {\n  width: 420px;\n  height: 420px;\n  background:\n    radial-gradient(\n      circle,\n      #bcd6ff,\n      transparent 65%);\n  top: -90px;\n  right: 2%;\n  animation: aflow1 12s ease-in-out infinite;\n}\n.aurora.a2 {\n  width: 340px;\n  height: 340px;\n  background:\n    radial-gradient(\n      circle,\n      #ffd9a8,\n      transparent 65%);\n  bottom: -40px;\n  right: 22%;\n  animation: aflow2 14s ease-in-out infinite;\n}\n.aurora.a3 {\n  width: 300px;\n  height: 300px;\n  background:\n    radial-gradient(\n      circle,\n      #cfe0ff,\n      transparent 65%);\n  top: 34%;\n  left: -70px;\n  animation: aflow3 16s ease-in-out infinite;\n}\n@keyframes aflow1 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(-30px, 24px) scale(1.12);\n  }\n}\n@keyframes aflow2 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(26px, -20px) scale(1.15);\n  }\n}\n@keyframes aflow3 {\n  0%, 100% {\n    transform: translate(0, 0) scale(1);\n  }\n  50% {\n    transform: translate(20px, 18px) scale(1.1);\n  }\n}\n#net {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .7;\n}\n@keyframes scfloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-11px);\n  }\n}\n@keyframes blink {\n  50% {\n    opacity: .25;\n  }\n}\n@keyframes sweep {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@keyframes cbpulse {\n  0% {\n    box-shadow: 0 0 0 0 rgba(21, 101, 216, .5);\n  }\n  70% {\n    box-shadow: 0 0 0 9px rgba(21, 101, 216, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(21, 101, 216, 0);\n  }\n}\n@keyframes tickpop {\n  0% {\n    transform: scale(0) rotate(-40deg);\n  }\n  60% {\n    transform: scale(1.2) rotate(6deg);\n  }\n  100% {\n    transform: scale(1) rotate(0);\n  }\n}\n@keyframes hlsweep {\n  to {\n    transform: scaleX(1);\n  }\n}\n@keyframes marq {\n  to {\n    transform: translateX(-50%);\n  }\n}\n@keyframes dash {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n.eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  font-weight: 500;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: var(--blue);\n  background: var(--blue-soft);\n  border: 1px solid #d3e2fb;\n  padding: 7px 14px;\n  border-radius: 99px;\n}\n.eyebrow .dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--blue);\n  animation: cbpulse 2s infinite;\n}\n.btn {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  overflow: hidden;\n  font-family: var(--body);\n  font-weight: 600;\n  font-size: 14.5px;\n  padding: 12px 22px;\n  border-radius: 12px;\n  cursor: pointer;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  will-change: transform;\n  transition:\n    transform .18s var(--ease),\n    box-shadow .28s,\n    background .25s,\n    color .25s,\n    border-color .25s;\n}\n.btn:before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -120%;\n  width: 60%;\n  height: 100%;\n  background:\n    linear-gradient(\n      100deg,\n      transparent,\n      rgba(255, 255, 255, .45),\n      transparent);\n  transform: skewX(-18deg);\n  transition: left .55s var(--ease);\n}\n.btn:hover:before {\n  left: 130%;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(21, 101, 216, .75);\n}\n.dpdpa-buddha-strip {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 24px;\n  padding: 32px 150px 32px 36px;\n  background:\n    linear-gradient(\n      105deg,\n      #1565d8,\n      #0c3e8f);\n  border-radius: 16px;\n  box-shadow: none;\n}\n.dpdpa-buddha-strip h3 {\n  color: #fff;\n  font-size: 22px;\n  line-height: 1.3;\n}\n.dpdpa-buddha-strip p {\n  color: #cfe0fa;\n  font-size: 14.5px;\n  margin-top: 4px;\n}\n.dpdpa-buddha-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  width: 100%;\n}\n.dpdpa-buddha-actions .btn {\n  font-size: 14px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  line-height: 1.4;\n  border-width: 1.5px;\n  box-shadow: none;\n}\n.dpdpa-buddha-actions .btn-orange {\n  background: #ff8c1a;\n}\n.dpdpa-buddha-actions .btn-orange:hover {\n  background: #e97a08;\n  box-shadow: none;\n}\n.dpdpa-buddha-actions .btn-outline {\n  background: transparent;\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n.dpdpa-buddha-actions .btn-outline:hover {\n  background: rgba(255, 255, 255, .1);\n  border-color: #fff;\n}\n@media (max-width: 760px) {\n  .dpdpa-buddha-strip {\n    padding: 28px 22px;\n  }\n  .dpdpa-buddha-strip h3 {\n    font-size: 19px;\n  }\n  .dpdpa-buddha-actions .btn {\n    white-space: normal;\n  }\n}\n.btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px -14px rgba(21, 101, 216, .85);\n}\n.btn-orange {\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  box-shadow: 0 14px 28px -12px rgba(255, 140, 26, .7);\n}\n.btn-orange:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px -14px rgba(255, 140, 26, .85);\n}\n.btn-ghost {\n  background: #fff;\n  color: var(--navy);\n  border-color: var(--line);\n  box-shadow: var(--shadow-s);\n}\n.btn-ghost:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn-outline {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .42);\n}\n.btn-outline:hover {\n  background: rgba(255, 255, 255, .12);\n  transform: translateY(-2px);\n}\n.btn-t {\n  background: #fff;\n  color: var(--blue);\n  border: 1.5px solid #cfe0fb;\n}\n.btn-t:hover {\n  background: var(--blue);\n  color: #fff;\n  border-color: var(--blue);\n  transform: translateY(-2px);\n}\n.btn-wa {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.btn-wa:hover {\n  background: #1eb955;\n  border-color: #1eb955;\n  color: #fff;\n}\n.btn .ar {\n  transition: transform .25s;\n}\n.btn:hover .ar {\n  transform: translateX(3px);\n}\n.btn-sm {\n  padding: 8px 16px;\n  font-size: 13px;\n  border-radius: 10px;\n}\n.utility {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility .wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility .wrap::-webkit-scrollbar {\n  display: none;\n}\n.utility a {\n  color: #b9c9e2;\n  transition: color .2s;\n}\n.utility a:hover {\n  color: #fff;\n}\n.utility .links {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility .links > a {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility .phone {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.uwa {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n}\n.uwa:hover {\n  color: #8ff0b0 !important;\n}\n.promo {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n  position: relative;\n  z-index: 51;\n}\n.promo b {\n  color: #ffd9ac;\n}\n.promo .code {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo a {\n  text-decoration: underline;\n}\nheader.xh-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: rgba(255, 255, 255, .86);\n  backdrop-filter: saturate(180%) blur(14px);\n  -webkit-backdrop-filter: saturate(180%) blur(14px);\n  border-bottom: 1px solid #E7EBF3;\n  transition: box-shadow .35s, background .35s;\n}\nheader.xh-header.scrolled {\n  box-shadow: 0 8px 30px -18px rgba(4, 30, 66, .34);\n  background: rgba(255, 255, 255, .95);\n}\n.xh-nav-wrap {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 80px;\n  transition: height .35s var(--ease);\n}\nheader.xh-header.scrolled .xh-nav-wrap {\n  height: 64px;\n}\n.xh-brand img {\n  height: 74px;\n  width: auto;\n  transition: height .35s var(--ease);\n}\nheader.xh-header.scrolled .xh-brand img {\n  height: 58px;\n}\n.xh-main-nav ul {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  list-style: none;\n  margin-left: 6px;\n}\n.xh-menu-link {\n  font: 600 13px/13px var(--body);\n  color: #263552;\n  background: none;\n  border: 0;\n  padding: 26px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  position: relative;\n  transition: color .2s;\n}\n.xh-menu-link:after {\n  content: "";\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  bottom: 20px;\n  height: 2px;\n  width: 0;\n  background: var(--blue);\n  transition: width .3s var(--ease);\n}\n.xh-menu-link:hover,\n.xh-menu-link.is-active {\n  color: var(--blue);\n}\n.xh-menu-link:hover:after {\n  width: calc(100% - 20px);\n}\n.xh-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.xh-icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  display: grid;\n  place-items: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: .2s var(--ease);\n}\n.xh-icon-btn:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.burger {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  background: #fff;\n  border: 1.5px solid var(--line);\n  border-radius: 12px;\n  width: 44px;\n  height: 44px;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.burger span {\n  width: 20px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n}\nfooter {\n  background: #3B63E8;\n  color: #fff;\n  padding: 48px 0 28px;\n  font-size: 14px;\n}\n.nf-top {\n  margin-bottom: 28px;\n}\n.nf-logo {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.nf-logo img {\n  height: 46px;\n  width: auto;\n  background: #fff;\n  padding: 5px 8px;\n  border-radius: 8px;\n}\n.nf-tag {\n  font-size: 12px;\n  color: #DCE6FF;\n  line-height: 1.5;\n}\n.nf-tag em {\n  color: #BBD0FF;\n  font-style: normal;\n  font-size: 11px;\n}\n.nf-desc {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #E4ECFF;\n  margin: 0 0 20px;\n  max-width: 94ch;\n  text-align: justify;\n  text-align-last: left;\n}\n.nf-social {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.nfs {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  color: #fff;\n  transition: .25s var(--ease);\n}\n.nfs:hover {\n  transform: translateY(-3px);\n}\n.nfs svg {\n  width: 15px;\n  height: 15px;\n}\n.nf-rows {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 22px;\n  margin-bottom: 6px;\n}\n.nf-row {\n  display: flex;\n  gap: 20px;\n  align-items: baseline;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.nf-rlbl {\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 15px;\n  color: #fff;\n  min-width: 130px;\n  flex: none;\n  margin: 0;\n}\n.nf-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  flex: 1;\n}\n.nf-links a {\n  color: #E4ECFF;\n  font-size: 14px;\n  transition: color .2s, padding .2s;\n}\n.nf-links a:before {\n  content: "\\203a";\n  color: #BBD0FF;\n  margin-right: 6px;\n}\n.nf-links a:hover {\n  color: #fff;\n  padding-left: 3px;\n}\n.nf-cert-row {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin: 16px 0;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(255, 255, 255, .1);\n  padding-top: 16px;\n}\n.nf-isos {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-iso {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #2E4FC4;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 62px;\n  color: #fff;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n}\n.nf-iso b {\n  font-size: 9px;\n  letter-spacing: .05em;\n  color: #BBD0FF;\n}\n.nf-pays {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-pay {\n  background: #fff;\n  color: #1C2A3A;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 6px;\n}\n.nf-bottom {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 12.5px;\n  color: #C3D3FF;\n}\n.wa-fab {\n  position: fixed;\n  left: 22px;\n  bottom: 22px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #25D366;\n  color: #fff;\n  display: grid;\n  place-items: center;\n  box-shadow: 0 12px 30px rgba(37, 211, 102, .4);\n  z-index: 120;\n  transition: transform .25s var(--ease);\n}\n.wa-fab:hover {\n  transform: scale(1.08);\n}\n.wa-fab svg {\n  width: 28px;\n  height: 28px;\n}\n.back-to-top {\n  position: fixed;\n  right: 22px;\n  bottom: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 10px 26px rgba(4, 30, 66, .14);\n  z-index: 120;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .25s, transform .25s var(--ease);\n}\n.back-to-top.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n.back-to-top:hover {\n  transform: translateY(-3px);\n}\n.hero {\n  position: relative;\n  padding: 60px 0 78px;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      1100px 640px at 82% 4%,\n      #eaf2ff 0%,\n      transparent 58%),\n    linear-gradient(\n      180deg,\n      #fbfcff,\n      #ffffff);\n}\n.crumb {\n  position: relative;\n  z-index: 3;\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n.crumb a:hover {\n  color: var(--blue);\n}\n.crumb .sep {\n  color: #b9c6dd;\n}\n.crumb .cur {\n  color: var(--blue);\n}\n.hero-inner {\n  position: relative;\n  z-index: 3;\n  display: grid;\n  grid-template-columns: 1fr 1.08fr;\n  gap: 44px;\n  align-items: center;\n}\n.hero h1 {\n  font-size: clamp(34px, 4.8vw, 56px);\n  font-weight: 800;\n  margin: 20px 0 16px;\n}\n.hero h1 .grad {\n  background:\n    linear-gradient(\n      120deg,\n      var(--blue),\n      #4f93ff);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.hero h1 .serif {\n  color: var(--navy);\n  font-weight: 400;\n  font-size: 1.04em;\n}\n.hero p.lead {\n  font-size: 17.5px;\n  color: var(--slate);\n  max-width: 520px;\n  margin-bottom: 22px;\n}\n.pills {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n.pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-family: var(--mono);\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--navy);\n  background: #fff;\n  border: 1px solid var(--line);\n  padding: 7px 13px;\n  border-radius: 99px;\n  box-shadow: var(--shadow-s);\n}\n.pill svg {\n  width: 14px;\n  height: 14px;\n  color: var(--blue);\n}\n.pill.hi {\n  background:\n    linear-gradient(\n      135deg,\n      #fff4e6,\n      #fff);\n  border-color: #ffd9a8;\n  color: var(--orange-d);\n}\n.pill.hi svg {\n  color: var(--orange);\n}\n.hero-cta {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n.hero-copy {\n  min-width: 0;\n}\n.chips {\n  display: flex;\n  gap: 22px;\n  flex-wrap: nowrap;\n  width: max-content;\n  overflow: visible;\n}\n.chip {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-shrink: 0;\n  white-space: nowrap;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--navy);\n}\n.chip .ci {\n  width: 30px;\n  height: 30px;\n  border-radius: 9px;\n  display: grid;\n  place-items: center;\n  background: var(--blue-soft);\n  color: var(--blue);\n  flex-shrink: 0;\n}\n.chip .ci svg {\n  width: 16px;\n  height: 16px;\n}\n.journey {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n  flex-wrap: wrap;\n  margin-bottom: 6px;\n}\n.gauge {\n  position: relative;\n  width: 150px;\n  flex: none;\n}\n.gauge svg {\n  width: 100%;\n  height: auto;\n}\n.gauge .gv {\n  position: absolute;\n  left: 50%;\n  bottom: 6px;\n  transform: translateX(-50%);\n  text-align: center;\n}\n.gauge .gv b {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--red);\n  line-height: 1;\n}\n.gauge .gv span {\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.gauge.after .gv b {\n  color: var(--green-d);\n}\n.journey-txt b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15px;\n  color: var(--navy);\n}\n.journey-txt span {\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.journey-arrow {\n  font: 700 20px var(--mono);\n  color: var(--blue);\n}\n.showcase {\n  position: relative;\n}\n.sc-win {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.sc-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--line);\n  background: var(--ice);\n}\n.sc-bar .dots {\n  display: flex;\n  gap: 5px;\n}\n.sc-bar .dots i {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  display: block;\n}\n.sc-bar .crumbs {\n  font: 600 11px var(--mono);\n  color: var(--slate);\n}\n.sc-tabs {\n  display: flex;\n  gap: 2px;\n  padding: 8px 12px;\n  border-bottom: 1px solid var(--line);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n.sc-tabs::-webkit-scrollbar {\n  display: none;\n}\n.sc-tab {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .03em;\n  color: var(--slate);\n  background: none;\n  border: 0;\n  padding: 6px 10px;\n  border-radius: 7px;\n  white-space: nowrap;\n  cursor: pointer;\n  transition: .2s;\n}\n.sc-tab:hover {\n  color: var(--blue);\n  background: var(--blue-soft);\n}\n.sc-tab.on {\n  background: var(--navy);\n  color: #fff;\n}\n.sc-body {\n  padding: 16px;\n}\n.sc-h {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n.sc-h b {\n  font-family: var(--disp);\n  font-size: 13.5px;\n  color: var(--navy);\n}\n.sc-h .live {\n  font: 600 10px var(--mono);\n  color: var(--blue);\n  background: var(--blue-soft);\n  padding: 4px 10px;\n  border-radius: 99px;\n}\n.sc-stats {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.sc-stat {\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  padding: 10px 8px;\n  text-align: center;\n  background: #fff;\n}\n.sc-stat b {\n  display: block;\n  font: 800 17px var(--disp);\n  color: var(--navy);\n  line-height: 1.1;\n}\n.sc-stat span {\n  display: block;\n  font: 500 9px var(--mono);\n  letter-spacing: .05em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-top: 3px;\n}\n.sc-stat.c b {\n  color: var(--red);\n}\n.sc-stat.h b {\n  color: #E9730C;\n}\n.sc-stat.m b {\n  color: var(--amber);\n}\n.sc-stat.l b {\n  color: var(--green-d);\n}\n.sc-grid {\n  display: grid;\n  grid-template-columns: .85fr 1.15fr;\n  gap: 12px;\n}\n.sc-card {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 14px;\n  background: #fff;\n}\n.sc-card .t {\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 8px;\n}\n.sc-hyg {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.sc-hyg .hv {\n  margin-top: -16px;\n  text-align: center;\n}\n.sc-hyg .hv b {\n  font: 800 20px var(--disp);\n  color: var(--green-d);\n  display: block;\n  line-height: 1;\n}\n.sc-hyg .hv span {\n  font: 500 9px var(--mono);\n  color: var(--slate);\n}\n.sc-bars {\n  display: flex;\n  align-items: flex-end;\n  gap: 14px;\n  height: 106px;\n  padding-top: 6px;\n  overflow: hidden;\n}\n.sc-bcol {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  gap: 2px;\n}\n.sc-bcol i {\n  display: block;\n  border-radius: 2px;\n  width: 100%;\n  transition: height 1.2s var(--ease);\n}\n.sc-bcol em {\n  font: 500 8.5px var(--mono);\n  color: var(--slate);\n  text-align: center;\n  font-style: normal;\n  margin-top: 4px;\n}\n.sc-legend {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 8px;\n}\n.sc-legend span {\n  font: 500 8.5px var(--mono);\n  color: var(--slate);\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n.sc-legend i {\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n  display: block;\n}\n.sc-find {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 12px 14px;\n  background: #fff;\n  margin-top: 12px;\n}\n.sc-find .t {\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 8px;\n}\n.sc-find div {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 6px 0;\n  border-bottom: 1px dashed var(--line);\n  font-size: 11.5px;\n}\n.sc-find div:last-child {\n  border-bottom: 0;\n}\n.sc-find b {\n  color: var(--navy);\n  font-weight: 600;\n}\n.sc-find span {\n  color: var(--slate);\n  font-family: var(--mono);\n  font-size: 10px;\n}\n.sc-float {\n  position: absolute;\n  right: -10px;\n  top: -18px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 12px 16px;\n  box-shadow: var(--shadow-m);\n  z-index: 5;\n  animation: scfloat 7s ease-in-out infinite;\n  text-align: center;\n}\n.sc-float b {\n  display: block;\n  font: 800 22px var(--disp);\n  color: var(--navy);\n  line-height: 1;\n}\n.sc-float span {\n  font: 500 9.5px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.sc-float .up {\n  color: var(--green-d);\n  font-size: 11px;\n  font-weight: 600;\n}\nsection {\n  position: relative;\n}\n.pad {\n  padding: 42px 0 42px 0;\n}\n.pad-ice {\n  background: var(--ice);\n}\n.pad-navy {\n  background:\n    linear-gradient(\n      160deg,\n      var(--navy),\n      #0C2C5C 70%);\n  color: #fff;\n}\n.head {\n  text-align: center;\n  max-width: 720px;\n  margin: 0 auto 48px;\n}\n.head h2 {\n  font-size: clamp(26px, 3.4vw, 38px);\n  margin-bottom: 14px;\n}\n#modules .head {\n  max-width: none;\n}\n#modules .head h2 {\n  font-size: clamp(12px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n#modules .head p {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.head.integrations-heading {\n  max-width: none;\n}\n.head.integrations-heading h2 {\n  font-size: clamp(12px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.integrations-heading p {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.head.testimonials-heading {\n  max-width: none;\n}\n.head.testimonials-heading h2 {\n  font-size: clamp(12px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.steps-heading {\n  max-width: none;\n}\n.head.steps-heading h2 {\n  font-size: clamp(10px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.comparison-heading {\n  max-width: none;\n}\n.head.comparison-heading h2 {\n  font-size: clamp(10px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.comparison-heading p {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.head.frameworks-heading {\n  max-width: none;\n}\n.head.frameworks-heading h2 {\n  font-size: clamp(10px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.pricing-heading {\n  max-width: none;\n}\n.head.pricing-heading h2 {\n  font-size: clamp(10px, 3.4vw, 38px);\n  white-space: nowrap;\n}\n.head.pricing-heading p {\n  max-width: 720px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.head h2 .hl {\n  position: relative;\n  color: var(--blue);\n}\n.head h2 .hl:after {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 2px;\n  height: 8px;\n  background: rgba(255, 140, 26, .28);\n  z-index: -1;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n.head.in h2 .hl:after {\n  animation: hlsweep .8s .3s var(--ease) forwards;\n}\n.head .u {\n  width: 54px;\n  height: 4px;\n  border-radius: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  margin: 0 auto 18px;\n}\n.head p {\n  color: var(--slate);\n  font-size: 16px;\n}\n.head.left {\n  text-align: left;\n  margin: 0 0 40px;\n}\n.head.left .u {\n  margin: 0 0 18px;\n}\n.pad-navy .head h2 {\n  color: #fff;\n}\n.pad-navy .head p {\n  color: #c7d5ec;\n}\n.kicker {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 10px;\n  display: block;\n}\n.pad-navy .kicker {\n  color: #7FB2FF;\n}\n.pp-trust {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust .wrap {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust b {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.risk {\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  gap: 44px;\n  align-items: center;\n}\n.risk-list {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.risk-item {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  border-left: 3px solid var(--line);\n  padding-left: 18px;\n  transition: border-color .3s var(--ease);\n}\n.risk-item:hover {\n  border-color: var(--orange);\n}\n.risk-item h4 {\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.risk-item p {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.risk-stats {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.rstat {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 18px;\n  background: var(--ice);\n  text-align: center;\n  transition: transform .28s var(--ease), box-shadow .28s;\n}\n.rstat:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-m);\n}\n.rstat b {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--navy);\n  letter-spacing: -.02em;\n  line-height: 1.1;\n}\n.rstat.red b {\n  color: var(--red);\n}\n.rstat span {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: var(--slate);\n  line-height: 1.45;\n}\n.mods {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.mod {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px 22px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n  position: relative;\n  overflow: hidden;\n}\n.mod:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform .4s var(--ease);\n}\n.mod:hover {\n  transform: translateY(-6px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.mod:hover:before {\n  transform: scaleX(1);\n}\n.mod-h {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  margin-bottom: 12px;\n}\n.mod-ic {\n  flex: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 13px;\n  display: grid;\n  place-items: center;\n  transition: .3s var(--ease);\n}\n.mod-ic svg {\n  width: 22px;\n  height: 22px;\n}\n.mod:hover .mod-ic {\n  transform: rotate(-6deg) scale(1.06);\n}\n.mod-h h3 {\n  font-size: 17px;\n  margin-bottom: 3px;\n}\n.mod-h .sec {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: var(--blue);\n  background: var(--blue-soft);\n  border-radius: 99px;\n  padding: 3px 9px;\n  display: inline-block;\n}\n.mod > p {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.6;\n  margin-bottom: 14px;\n}\n.mod ul {\n  list-style: none;\n  margin: 0 0 16px;\n  flex: 1;\n}\n.mod ul li {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.55;\n  padding: 5px 0 5px 20px;\n  position: relative;\n}\n.mod ul li:before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 11px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 2px solid var(--blue);\n  background: #fff;\n}\n.mod-foot {\n  display: flex;\n  gap: 7px;\n  flex-wrap: wrap;\n  padding-top: 12px;\n  border-top: 1px dashed var(--line);\n}\n.mod-foot span {\n  font: 600 10px var(--mono);\n  letter-spacing: .04em;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 4px 10px;\n}\n.i-blue {\n  background: var(--blue-soft);\n  color: var(--blue);\n}\n.i-purple {\n  background: #F1EBFE;\n  color: var(--purple);\n}\n.i-green {\n  background: #E4F7EC;\n  color: var(--green-d);\n}\n.i-amber {\n  background: #FFF3E0;\n  color: var(--orange-d);\n}\n.i-red {\n  background: #FDECEC;\n  color: var(--red);\n}\n.i-teal {\n  background: #E2F6F5;\n  color: #0F766E;\n}\n.smap {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.smap-row {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  border: 1px solid rgba(194, 216, 247, .22);\n  border-radius: 14px;\n  padding: 14px 16px;\n  background: rgba(255, 255, 255, .05);\n  transition: .28s var(--ease);\n}\n.smap-row:hover {\n  background: rgba(255, 255, 255, .1);\n  transform: translateY(-3px);\n}\n.smap-row .s {\n  flex: none;\n  font: 700 11px var(--mono);\n  letter-spacing: .04em;\n  color: #0A2A57;\n  background: #7FB2FF;\n  border-radius: 8px;\n  padding: 6px 9px;\n  min-width: 66px;\n  text-align: center;\n}\n.smap-row b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 2px;\n}\n.smap-row span {\n  font-size: 12px;\n  color: #a9c2e8;\n}\n.smap-note {\n  margin-top: 22px;\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: center;\n  font: 500 12px var(--mono);\n  color: #9FBEEC;\n}\n.smap-note i {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  display: inline-block;\n  margin-right: 6px;\n}\n.ai {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.aic {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 22px 20px;\n  background: #fff;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n}\n.aic:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.aic .tag {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--purple);\n  background: #F1EBFE;\n  border-radius: 99px;\n  padding: 4px 10px;\n  display: inline-block;\n  margin-bottom: 10px;\n}\n.aic b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15.5px;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.aic span {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.flow {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 0;\n  position: relative;\n}\n.flow:before {\n  content: "";\n  position: absolute;\n  left: 8%;\n  right: 8%;\n  top: 34px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  opacity: .25;\n}\n.fstep {\n  text-align: center;\n  padding: 0 12px;\n  position: relative;\n}\n.fstep .n {\n  width: 68px;\n  height: 68px;\n  margin: 0 auto 16px;\n  border-radius: 20px;\n  display: grid;\n  place-items: center;\n  background: #fff;\n  border: 1.5px solid var(--line);\n  color: var(--blue);\n  font: 800 20px var(--disp);\n  position: relative;\n  z-index: 2;\n  transition: .32s var(--ease);\n}\n.fstep:hover .n {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  transform: translateY(-5px);\n  box-shadow: 0 14px 26px -12px rgba(21, 101, 216, .7);\n}\n.fstep b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15.5px;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.fstep span {\n  font-size: 12.7px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.steps3 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n.s3 {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 24px;\n  background: #fff;\n  position: relative;\n  overflow: hidden;\n  transition: transform .28s var(--ease), box-shadow .28s;\n}\n.s3:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n}\n.s3 .num {\n  font: 800 46px var(--disp);\n  color: var(--blue-soft);\n  line-height: 1;\n  position: absolute;\n  right: 18px;\n  top: 12px;\n}\n.s3 b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 18px;\n  color: var(--navy);\n  margin-bottom: 8px;\n  position: relative;\n}\n.s3 p {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n  position: relative;\n}\n.cmp {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: var(--shadow-s);\n}\n.cmp-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  border-bottom: 1px solid var(--line);\n}\n.cmp-row:last-child {\n  border-bottom: 0;\n}\n.cmp-row > div {\n  padding: 16px 20px;\n  font-size: 13.5px;\n}\n.cmp-row .lbl {\n  font-family: var(--disp);\n  font-weight: 600;\n  color: var(--navy);\n  background: var(--ice);\n}\n.cmp-row .old {\n  color: var(--slate);\n}\n.cmp-row .new {\n  color: var(--navy);\n  font-weight: 600;\n  background: rgba(21, 101, 216, .04);\n  border-left: 2px solid var(--blue);\n}\n.cmp-head > div {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n  color: var(--slate);\n  padding: 13px 20px;\n}\n.cmp-head .new {\n  color: var(--blue);\n}\n.fw {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.fwc {\n  border: 1.5px solid var(--line);\n  border-radius: 18px;\n  padding: 24px 22px;\n  background: #fff;\n  transition:\n    transform .28s var(--ease),\n    box-shadow .28s,\n    border-color .25s;\n}\n.fwc:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n  border-color: #c9dcfb;\n}\n.fwc .top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 12px;\n}\n.fwc h3 {\n  font-size: 19px;\n}\n.fwc .geo {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .1em;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 4px 10px;\n}\n.fwc.soon {\n  opacity: .72;\n}\n.fwc.soon .geo {\n  color: var(--orange-d);\n  background: #FFF3E0;\n  border-color: #ffd9a8;\n}\n.fwc p {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n.langs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  justify-content: center;\n}\n.langs span {\n  font: 500 12.5px var(--body);\n  color: var(--navy);\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  transition: .2s var(--ease);\n}\n.langs span:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n  transform: translateY(-2px);\n}\n.secg {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 12px;\n}\n.secc {\n  border: 1px solid rgba(194, 216, 247, .22);\n  border-radius: 14px;\n  padding: 20px 14px;\n  text-align: center;\n  background: rgba(255, 255, 255, .05);\n  transition: .28s var(--ease);\n}\n.secc:hover {\n  background: rgba(255, 255, 255, .1);\n  transform: translateY(-4px);\n}\n.secc b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.secc span {\n  font: 500 11px var(--mono);\n  color: #9FBEEC;\n}\n.marq-wrap {\n  overflow: hidden;\n  position: relative;\n  margin-top: 8px;\n}\n.marq-wrap:before,\n.marq-wrap:after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 110px;\n  z-index: 2;\n  pointer-events: none;\n}\n.marq-wrap:before {\n  left: 0;\n  background:\n    linear-gradient(\n      90deg,\n      var(--ice),\n      transparent);\n}\n.marq-wrap:after {\n  right: 0;\n  background:\n    linear-gradient(\n      270deg,\n      var(--ice),\n      transparent);\n}\n.marq-wrap.on-white:before {\n  background:\n    linear-gradient(\n      90deg,\n      #fff,\n      transparent);\n}\n.marq-wrap.on-white:after {\n  background:\n    linear-gradient(\n      270deg,\n      #fff,\n      transparent);\n}\n.track {\n  display: flex;\n  gap: 12px;\n  width: max-content;\n  animation: marq 40s linear infinite;\n}\n.track.rev {\n  animation-direction: reverse;\n  animation-duration: 46s;\n}\n.marq-wrap:hover .track {\n  animation-play-state: paused;\n}\n.ilogo {\n  flex: 0 0 auto;\n  min-width: 150px;\n  height: 62px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 13.5px;\n  color: var(--navy);\n  box-shadow: var(--shadow-s);\n  transition: .25s var(--ease);\n  padding: 0 16px;\n}\n.ilogo:hover {\n  border-color: #c9dcfb;\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-m);\n  color: var(--blue);\n}\n.ilogo .dotmark {\n  width: 20px;\n  height: 20px;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.price {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  align-items: start;\n  white-space: normal;\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  margin-bottom: 0;\n  min-width: 0;\n}\n.tier {\n  min-width: 0;\n}\n.tier {\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 20px;\n  padding: 30px 26px;\n  box-shadow: var(--shadow-s);\n  position: relative;\n  transition: .3s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.tier:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n  border-color: #c9dcfb;\n}\n.tier.pop {\n  border: 2px solid var(--blue);\n  box-shadow: var(--shadow-m);\n  transform: translateY(-10px);\n}\n.tier.pop:hover {\n  transform: translateY(-16px);\n}\n.tier .tag {\n  position: absolute;\n  top: -13px;\n  left: 50%;\n  transform: translateX(-50%);\n  background:\n    linear-gradient(\n      135deg,\n      var(--orange),\n      var(--orange-d));\n  color: #fff;\n  font-family: var(--mono);\n  font-size: 10.5px;\n  font-weight: 600;\n  letter-spacing: .08em;\n  padding: 6px 16px;\n  border-radius: 99px;\n  box-shadow: 0 10px 22px -8px rgba(255, 140, 26, .8);\n}\n.tier h3 {\n  font-size: 19px;\n  margin-bottom: 5px;\n}\n.tier .sub {\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 18px;\n}\n.tier .amt {\n  display: flex;\n  align-items: flex-end;\n  gap: 4px;\n  margin-bottom: 3px;\n}\n.tier .amt .cur {\n  font-family: var(--disp);\n  font-size: 22px;\n  color: var(--navy);\n  font-weight: 600;\n  margin-bottom: 7px;\n}\n.tier .amt .num {\n  font-family: var(--disp);\n  font-size: 42px;\n  font-weight: 800;\n  color: var(--navy);\n  line-height: 1;\n}\n.tier .amt.custom .num {\n  font-size: 30px;\n}\n.tier .per {\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-bottom: 14px;\n}\n.tier .lim {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n.tier .lim span {\n  font: 600 10.5px var(--mono);\n  color: var(--navy);\n  background: var(--ice);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 4px 10px;\n}\n.tier .inc {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 10px;\n  display: block;\n}\n.tier ul {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  margin-bottom: 18px;\n  flex: 1;\n}\n.tier li {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 13.2px;\n  color: var(--ink);\n}\n.tier li .ck {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: #e4f7ec;\n  color: var(--green-d);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  margin-top: 2px;\n  transform: scale(0);\n}\n.tier.in li .ck {\n  animation: tickpop .4s var(--ease) forwards;\n}\n.tier.in li:nth-child(2) .ck {\n  animation-delay: .06s;\n}\n.tier.in li:nth-child(3) .ck {\n  animation-delay: .12s;\n}\n.tier.in li:nth-child(4) .ck {\n  animation-delay: .18s;\n}\n.tier.in li:nth-child(5) .ck {\n  animation-delay: .24s;\n}\n.tier.in li:nth-child(6) .ck {\n  animation-delay: .3s;\n}\n.tier.in li:nth-child(7) .ck {\n  animation-delay: .36s;\n}\n.tier li .ck svg {\n  width: 10px;\n  height: 10px;\n}\n.tier li.no {\n  color: #9AA8BE;\n}\n.tier li.no .ck {\n  background: #F1F4F9;\n  color: #B7C3D6;\n}\n.tier .addon {\n  font-size: 12px;\n  color: var(--slate);\n  background: var(--ice);\n  border: 1px dashed var(--line);\n  border-radius: 10px;\n  padding: 10px 12px;\n  margin-bottom: 16px;\n}\n.tier .addon b {\n  color: var(--navy);\n  font-family: var(--disp);\n  font-size: 12.5px;\n}\n.tier .btn {\n  width: 100%;\n}\n.price-note {\n  text-align: center;\n  font-family: var(--mono);\n  font-size: 11.5px;\n  color: #8FA2BD;\n  margin-top: 22px;\n  line-height: 1.8;\n}\n.tcards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n}\n.tcard {\n  position: relative;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 24px 20px;\n  background: #fff;\n  box-shadow: var(--shadow-s);\n  transition: transform .3s var(--ease), box-shadow .3s;\n}\n.tcard:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-m);\n}\n.tcard .qb {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 0 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--blue-d));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font-size: 24px;\n  font-family: Georgia, serif;\n}\n.tcard .tav {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  margin-bottom: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      var(--purple));\n  color: #fff;\n  display: grid;\n  place-items: center;\n  font: 700 18px var(--disp);\n}\n.tcard p {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.65;\n  margin-bottom: 14px;\n}\n.tcard .tname {\n  font-family: var(--disp);\n  font-weight: 700;\n  color: var(--navy);\n  font-size: 14.5px;\n}\n.tcard .trole {\n  font-size: 12px;\n  color: var(--slate);\n}\n.faqgrid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n.faq2 {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  align-self: start;\n  transition: border-color .25s, box-shadow .25s;\n}\n.faq2.open {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: 0;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.faq2-ic {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: transform .3s, background .25s;\n}\n.faq2.open .faq2-ic {\n  transform: rotate(135deg);\n  background: var(--blue);\n  color: #fff;\n}\n.faq2-a {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s cubic-bezier(.4, 0, .2, 1);\n}\n.faq2.open .faq2-a {\n  max-height: 460px;\n}\n.faq2-a p {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.68;\n}\n.contact {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 22px;\n}\n.ccard {\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 28px;\n  background: var(--ice);\n}\n.ccard h3 {\n  font-size: 20px;\n  margin-bottom: 6px;\n}\n.ccard > p {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 18px;\n}\n.clist {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.clist a {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 13px 16px;\n  transition: .2s var(--ease);\n}\n.clist a:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .1);\n  transform: translateY(-2px);\n}\n.clist .ci {\n  flex: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 15px;\n}\n.clist b {\n  display: block;\n  font-size: 14px;\n  color: var(--navy);\n}\n.clist span {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.cform {\n  display: grid;\n  gap: 12px;\n}\n.cform label {\n  display: block;\n  font: 600 11.5px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 5px;\n}\n.cform input,\n.cform select,\n.cform textarea {\n  width: 100%;\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font: 400 14px var(--body);\n  color: var(--ink);\n  background: #fff;\n  transition: .15s;\n}\n.cform input:focus,\n.cform select:focus,\n.cform textarea:focus {\n  outline: none;\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.cform textarea {\n  min-height: 84px;\n  resize: vertical;\n}\n.cform .row2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.consent {\n  display: flex;\n  gap: 9px;\n  align-items: flex-start;\n  font-size: 12px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.consent input {\n  width: auto;\n  margin-top: 3px;\n  flex: none;\n}\n.dpdp-note {\n  font-size: 11.5px;\n  color: var(--slate);\n  background: #fff;\n  border: 1px dashed var(--line);\n  border-radius: 10px;\n  padding: 11px 13px;\n  line-height: 1.6;\n}\n.dpdp-note b {\n  color: var(--navy);\n}\n.formnote {\n  font-size: 12px;\n  color: var(--slate);\n  text-align: center;\n}\n.ctaband {\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy) 0%,\n      #123776 60%,\n      var(--blue) 100%);\n  border-radius: 22px;\n  padding: 34px 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  position: relative;\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.ctaband:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .5;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .05) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .05) 1px,\n      transparent 1px);\n  background-size: 34px 34px;\n  animation: gridmove 30s linear infinite;\n}\n.ctaband .glow {\n  position: absolute;\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 140, 26, .4),\n      transparent 65%);\n  filter: blur(30px);\n  right: -40px;\n  top: -60px;\n  animation: aflow2 12s ease-in-out infinite;\n}\n.ctaband .ct-l {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n  z-index: 2;\n}\n.ctaband .cbico {\n  width: 60px;\n  height: 60px;\n  border-radius: 16px;\n  background: rgba(255, 255, 255, .12);\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n}\n.ctaband .cbico svg {\n  width: 30px;\n  height: 30px;\n  color: #fff;\n}\n.ctaband h3 {\n  color: #fff;\n  font-size: 23px;\n  margin-bottom: 4px;\n}\n.ctaband p {\n  color: rgba(255, 255, 255, .75);\n  font-size: 14px;\n  max-width: 460px;\n}\n.ctaband .ct-r {\n  display: flex;\n  gap: 12px;\n  position: relative;\n  z-index: 2;\n  flex-wrap: wrap;\n}\n.pp-proof {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 26px;\n}\n.pp-proof span {\n  font: 600 12px var(--body);\n  color: var(--slate);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  background: #fff;\n}\n@media (max-width: 1100px) {\n  .xh-main-nav {\n    display: none;\n  }\n  .burger {\n    display: flex;\n  }\n  .mods {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .ai {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .fw {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .tcards {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .secg {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .smap {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1024px) {\n  .hero-inner {\n    grid-template-columns: 1fr;\n    gap: 54px;\n  }\n  .risk {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .flow {\n    grid-template-columns: repeat(3, 1fr);\n    gap: 28px 0;\n  }\n  .flow:before {\n    display: none;\n  }\n  .sc-stats {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 860px) {\n  .price {\n    grid-template-columns: 1fr;\n    max-width: 440px;\n    margin: 0 auto;\n  }\n  .tier.pop {\n    transform: none;\n  }\n  .ctaband {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .faqgrid {\n    grid-template-columns: 1fr;\n  }\n  .contact {\n    grid-template-columns: 1fr;\n  }\n  .steps3 {\n    grid-template-columns: 1fr;\n  }\n  .sc-grid {\n    grid-template-columns: 1fr;\n  }\n  .sc-float {\n    position: static;\n    margin-bottom: 12px;\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .pad {\n    padding: 30px 0 30px 0;\n  }\n  .mods {\n    grid-template-columns: 1fr;\n  }\n  .ai,\n  .fw,\n  .tcards,\n  .smap {\n    grid-template-columns: 1fr;\n  }\n  .flow {\n    grid-template-columns: 1fr 1fr;\n  }\n  .secg {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .risk-stats {\n    grid-template-columns: 1fr 1fr;\n  }\n  .cmp-row {\n    grid-template-columns: 1fr;\n  }\n  .cmp-row .lbl {\n    border-bottom: 1px solid var(--line);\n  }\n  .cmp-row .new {\n    border-left: 0;\n    border-top: 2px solid var(--blue);\n  }\n  .cmp-head {\n    display: none;\n  }\n  .hero {\n    padding: 40px 0 60px;\n  }\n  .hero-cta .btn {\n    width: 100%;\n  }\n  .cform .row2 {\n    grid-template-columns: 1fr;\n  }\n  .nf-bottom {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .xh-nav-wrap {\n    height: 64px;\n    padding: 0 14px;\n    gap: 10px;\n  }\n  .xh-brand img {\n    height: 52px;\n  }\n  header.xh-header.scrolled .xh-brand img {\n    height: 46px;\n  }\n  .xh-actions .btn {\n    display: none;\n  }\n  .xh-icon-btn,\n  .burger {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n  }\n  .promo {\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n  .sc-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n    transition: none !important;\n  }\n  .rv {\n    opacity: 1;\n    transform: none;\n  }\n  .tier li .ck {\n    transform: none;\n  }\n}\n.hero .hero-inner {\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1.08fr);\n}\n.dpdpa-hero-animation {\n  min-width: 0;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 20px;\n  background: #0B132B;\n  box-shadow: var(--shadow-lg);\n}\n.dpdpa-hero-animation iframe {\n  display: block;\n  width: 100%;\n  height: 580px;\n  border: 0;\n}\n@media (max-width: 1100px) {\n  .hero .hero-inner {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .dpdpa-hero-animation {\n    max-width: 680px;\n    margin: 0 auto;\n  }\n}\n.hero {\n  padding: 36px 0 44px;\n}\n.hero > .wrap > .crumb {\n  margin-bottom: 22px;\n}\n.hero h1 {\n  font-size: clamp(30px, 3.2vw, 42px);\n  line-height: 1.12;\n  margin: 14px 0 12px;\n}\n.hero h1 .serif {\n  font-size: .9em;\n  white-space: nowrap;\n}\n.hero p.lead {\n  font-size: 15px;\n  line-height: 1.6;\n  margin-bottom: 16px;\n}\n.hero .journey {\n  gap: 14px;\n  margin-bottom: 14px;\n}\n.hero .gauge {\n  width: 120px;\n}\n.hero .journey-txt b {\n  font-size: 14px;\n}\n.hero .journey-txt span {\n  font-size: 12px;\n}\n.hero .pills {\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.hero .pill {\n  font-size: 11px;\n  padding: 6px 10px;\n}\n.hero .hero-cta {\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.hero .chips {\n  width: auto;\n  flex-wrap: wrap;\n  gap: 10px 14px;\n}\n.hero .chip {\n  font-size: 12px;\n}\n@media (max-width: 600px) {\n  .hero {\n    padding: 28px 0 36px;\n  }\n  .hero h1 {\n    font-size: 32px;\n  }\n  .hero p.lead {\n    font-size: 14px;\n  }\n  .hero .hero-inner {\n    gap: 30px;\n  }\n}\n/*# sourceMappingURL=dpdpa-for-smb.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DpdpaForSmbPage, { className: "DpdpaForSmbPage", filePath: "src/app/pages/dpdpa-for-smb.page.ts", lineNumber: 24 });
})();
export {
  DpdpaForSmbPage
};
//# sourceMappingURL=chunk-VB6SSBRB.js.map
