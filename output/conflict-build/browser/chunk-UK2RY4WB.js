import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/compare-providers.page.ts
var _c0 = (a0) => ["/", a0];
var _forTrack0 = ($index, $item) => $item.slug;
var _forTrack1 = ($index, $item) => $item.feature;
function CompareProvidersPage_For_47_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
}
function CompareProvidersPage_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 37)(1, "div", 38);
    \u0275\u0275conditionalCreate(2, CompareProvidersPage_For_47_Conditional_2_Template, 1, 0, "img", 39);
    \u0275\u0275elementStart(3, "span", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 41);
    \u0275\u0275text(6, "CloudBaba ");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "vs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 42);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 43)(14, "div")(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "a", 44);
    \u0275\u0275text(20, "View comparison ");
    \u0275\u0275elementStart(21, "span", 7);
    \u0275\u0275text(22, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const provider_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    \u0275\u0275styleProp("--provider-accent", provider_r1.accent);
    \u0275\u0275property("id", provider_r1.slug);
    \u0275\u0275advance(2);
    \u0275\u0275conditional($index_r2 < 3 ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r1.category);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(provider_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r1.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(provider_r1.stat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r1.statLabel);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, provider_r1.slug));
    \u0275\u0275attribute("aria-label", "Compare CloudBaba with " + provider_r1.name);
  }
}
function CompareProvidersPage_For_72_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "India's Sovereign Cloud");
    \u0275\u0275elementEnd();
  }
}
function CompareProvidersPage_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, CompareProvidersPage_For_72_Conditional_2_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const provider_r3 = ctx.$implicit;
    const \u0275$index_157_r4 = ctx.$index;
    \u0275\u0275classProp("providers-featured", \u0275$index_157_r4 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(provider_r3);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_157_r4 === 0 ? 2 : -1);
  }
}
function CompareProvidersPage_For_75_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "span", 47);
    \u0275\u0275element(2, "span", 48);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const \u0275$index_173_r6 = ctx.$index;
    \u0275\u0275classProp("providers-featured", \u0275$index_173_r6 === 0);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("providers-status providers-status-" + value_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r5.text);
  }
}
function CompareProvidersPage_For_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CompareProvidersPage_For_75_For_4_Template, 5, 5, "td", 46, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.feature);
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r7.cells);
  }
}
var cell = (text, status = "good") => ({ text, status });
var CompareProvidersPage = class _CompareProvidersPage {
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  providers = ["XcellHost", "AWS", "Azure", "GCP", "DigitalOcean", "E2E Networks", "Yotta"];
  providerCards = [
    { name: "Amazon Web Services", slug: "cloudbaba-vs-aws", category: "Hyperscaler", description: "Explore the trade-offs between hyperscale breadth and CloudBaba's predictable, human-first cloud service.", stat: "30+", statLabel: "Cloud regions", accent: "#ff9900", initials: "AWS" },
    { name: "Google Cloud", slug: "cloudbaba-vs-gcp", category: "Hyperscaler", description: "Compare AI and data capabilities, pricing clarity, support access and India-focused cloud operations.", stat: "35+", statLabel: "Cloud regions", accent: "#4285f4", initials: "GCP" },
    { name: "Microsoft Azure", slug: "cloudbaba-vs-azure", category: "Hyperscaler", description: "See how Azure's enterprise ecosystem stacks up against CloudBaba's simpler delivery and local expertise.", stat: "60+", statLabel: "Cloud regions", accent: "#0078d4", initials: "AZ" },
    { name: "Vultr", slug: "cloudbaba-vs-vultr", category: "Developer cloud", description: "Compare global reach and developer-friendly compute with CloudBaba's guided, India-first cloud experience.", stat: "32", statLabel: "Global locations", accent: "#007bfc", initials: "V" },
    { name: "OVHcloud", slug: "cloudbaba-vs-ovhcloud", category: "Global cloud", description: "See how OVHcloud's broad infrastructure portfolio compares with CloudBaba pricing, support and migration.", stat: "30+", statLabel: "Data centres", accent: "#123f6d", initials: "OVH" },
    { name: "DigitalOcean", slug: "cloudbaba-vs-digitalocean", category: "Developer cloud", description: "Compare simple cloud compute with a locally supported platform built for Indian production workloads.", stat: "15", statLabel: "Data centres", accent: "#0080ff", initials: "DO" }
  ];
  comparison = [
    { feature: "Cost Vs Hyperscalers", cells: [cell("~60% lower"), cell("Baseline", "warning"), cell("Baseline", "warning"), cell("Baseline", "warning"), cell("~30\u201375% lower"), cell("~50% lower"), cell("~30% lower")] },
    { feature: "Egress Charges", cells: [cell("Zero"), cell("High", "poor"), cell("High", "poor"), cell("High (except BQ)", "poor"), cell("Included bandwidth"), cell("Low"), cell("Low")] },
    { feature: "GPU Provisioning Speed", cells: [cell("Same-day"), cell("Quota approval", "poor"), cell("Quota approval", "poor"), cell("Quota approval", "poor"), cell("Limited stock", "poor"), cell("Same-day"), cell("Contract; days-weeks", "warning")] },
    { feature: "Support Model", cells: [cell("24/7 human"), cell("Paid tiers", "warning"), cell("Paid tiers", "warning"), cell("Paid tiers", "warning"), cell("Ticket-based", "warning"), cell("Biz hours+", "warning"), cell("Enterprise SLA")] },
    { feature: "Migration Assistance", cells: [cell("Free"), cell("Paid", "warning"), cell("Paid", "warning"), cell("Paid", "warning"), cell("Self-service", "warning"), cell("Limited", "poor"), cell("Limited", "poor")] },
    { feature: "Data Ownership & Jurisdiction", cells: [cell("India-owned, Indian Law"), cell("US Owned, US Cloud Act", "poor"), cell("US Owned, US Cloud Act", "poor"), cell("US Owned, US Cloud Act", "poor"), cell("US Owned, US Cloud Act", "poor"), cell("India Owned, Indian Law"), cell("India Owned, Indian Law")] },
    { feature: "Vendor Lock-in Risk", cells: [cell("Low"), cell("High", "poor"), cell("High", "poor"), cell("High", "poor"), cell("Medium", "warning"), cell("Low"), cell("Medium", "warning")] },
    { feature: "Best For", cells: [cell("India-first AI Workloads, Sovereign Cloud"), cell("Global Scale", "neutral"), cell("Microsoft ecosystem", "neutral"), cell("Data and AI Workloads", "neutral"), cell("Simple Global Cloud", "neutral"), cell("AI Workloads", "neutral"), cell("Enterprise Sovereign Cloud", "neutral")] }
  ];
  constructor() {
    inject(SeoService).set("CloudBaba vs Cloud Providers | XcellHost", "Compare CloudBaba with AWS, Azure, Google Cloud, DigitalOcean, Vultr and OVHcloud across pricing, support and cloud operations.", "/compare-providers/");
  }
  requestHelp() {
    this.topics.ask("Compare providers: " + this.providers.join(", "));
    this.overlay.open("callback");
  }
  static \u0275fac = function CompareProvidersPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareProvidersPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareProvidersPage, selectors: [["xh-compare-providers-page"]], decls: 93, vars: 0, consts: [[1, "providers-hero"], ["aria-hidden", "true", 1, "compare-orb", "compare-orb-one"], ["aria-hidden", "true", 1, "compare-orb", "compare-orb-two"], ["aria-hidden", "true", 1, "compare-grid"], [1, "compare-landing-wrap"], [1, "compare-heading"], [1, "compare-kicker"], ["aria-hidden", "true"], ["id", "compare-title"], ["aria-label", "CloudBaba highlights", 1, "compare-metrics"], ["aria-labelledby", "provider-picker-title", 1, "provider-picker"], [1, "provider-picker-wrap"], [1, "provider-picker-heading"], ["id", "provider-picker-title"], [1, "provider-cards"], [1, "provider-card", 3, "--provider-accent", "id"], ["href", "#providers-table-title", 1, "provider-table-jump"], ["aria-labelledby", "providers-table-title", 1, "providers-content"], [1, "providers-comparison-wrap"], [1, "providers-intro"], ["id", "providers-table-title"], ["tabindex", "0", "role", "region", "aria-label", "Cloud provider comparison; scroll horizontally to view all providers", 1, "providers-table-scroll"], [1, "providers-table"], [1, "providers-sr-only"], [1, "providers-feature-column"], [1, "providers-featured-column"], ["span", "6"], ["scope", "col"], ["scope", "col", 3, "providers-featured"], [1, "pp-cta", "providers-buddha-strip"], [1, "providers-buddha-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "/contact", 1, "btn", "btn-ghost"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost"], ["href", "mailto:sales@xcellhost.com?subject=Provider%20comparison%20enquiry", 1, "btn", "btn-ghost"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", "width", "104", "height", "104", "loading", "lazy", 1, "pp-cta-buddha"], [1, "provider-card", 3, "id"], [1, "provider-card-top"], ["src", "/assets/images/cloud-savings-50.svg", "width", "72", "height", "72", "alt", "Save up to 50% on cloud costs", 1, "provider-savings-badge"], [1, "provider-category"], [1, "provider-versus"], [1, "provider-description"], [1, "provider-card-footer"], [3, "routerLink"], ["scope", "row"], [3, "providers-featured"], [1, "providers-value"], ["aria-hidden", "true", 1, "providers-status"]], template: function CompareProvidersPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "span", 6);
      \u0275\u0275element(7, "i", 7);
      \u0275\u0275text(8, " 6 head-to-head comparisons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "h1", 8);
      \u0275\u0275text(10, "CloudBaba vs ");
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "the competition");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, "See how CloudBaba's predictable pricing, India-first infrastructure and hands-on cloud expertise stack up against leading cloud providers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "div")(17, "strong");
      \u0275\u0275text(18, "~60%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Lower cost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div")(22, "strong");
      \u0275\u0275text(23, "Zero");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "Egress charges");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div")(27, "strong");
      \u0275\u0275text(28, "Same-day");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "GPU provisioning");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div")(32, "strong");
      \u0275\u0275text(33, "24\xD77");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "Human support");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(36, "section", 10)(37, "div", 11)(38, "div", 12)(39, "span");
      \u0275\u0275text(40, "Choose a provider");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h2", 13);
      \u0275\u0275text(42, "Pick your comparison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p");
      \u0275\u0275text(44, "Select a cloud provider to explore the differences, or jump to the complete feature-by-feature table.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 14);
      \u0275\u0275repeaterCreate(46, CompareProvidersPage_For_47_Template, 23, 13, "article", 15, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 16);
      \u0275\u0275text(49, "Compare every provider in one view ");
      \u0275\u0275elementStart(50, "span", 7);
      \u0275\u0275text(51, "\u2193");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "section", 17)(53, "div", 18)(54, "div", 19)(55, "h2", 20);
      \u0275\u0275text(56, "Witness the XcellHost Difference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p");
      \u0275\u0275text(58, "XcellHost brings predictable pricing, India-hosted infrastructure, human support and migration expertise together for teams running production workloads.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 21)(60, "table", 22)(61, "caption", 23);
      \u0275\u0275text(62, "Cloud provider comparison across cost, egress, GPU provisioning, support, migration, data ownership and vendor lock-in.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "colgroup");
      \u0275\u0275element(64, "col", 24)(65, "col", 25)(66, "col", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "thead")(68, "tr")(69, "th", 27);
      \u0275\u0275text(70, "Feature / Capability");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(71, CompareProvidersPage_For_72_Template, 3, 4, "th", 28, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "tbody");
      \u0275\u0275repeaterCreate(74, CompareProvidersPage_For_75_Template, 5, 1, "tr", null, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "div", 29)(77, "div")(78, "h2");
      \u0275\u0275text(79, "Ready to start with XcellHost?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "p");
      \u0275\u0275text(81, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 30)(83, "button", 31);
      \u0275\u0275listener("click", function CompareProvidersPage_Template_button_click_83_listener() {
        return ctx.requestHelp();
      });
      \u0275\u0275text(84, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "a", 32);
      \u0275\u0275text(86, "Contact team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "a", 33);
      \u0275\u0275text(88, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "a", 34);
      \u0275\u0275text(90, "Email Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "a", 35);
      \u0275\u0275element(92, "img", 36);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(46);
      \u0275\u0275repeater(ctx.providerCards);
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.providers);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.comparison);
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  color: #041e42;\n}\n.providers-hero[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  padding: 30px 0 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #03152f 0%,\n      #08285c 60%,\n      #0b3b84 100%);\n  color: #fff;\n}\n.compare-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  opacity: .22;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .08) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .08) 1px,\n      transparent 1px);\n  background-size: 52px 52px;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent 90%);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent 90%);\n}\n.compare-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  border-radius: 50%;\n  filter: blur(10px);\n  opacity: .45;\n}\n.compare-orb-one[_ngcontent-%COMP%] {\n  width: 440px;\n  height: 440px;\n  top: -240px;\n  right: -80px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(50, 132, 255, .62),\n      transparent 68%);\n}\n.compare-orb-two[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 320px;\n  bottom: -220px;\n  left: 10%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 140, 26, .35),\n      transparent 68%);\n}\n.compare-landing-wrap[_ngcontent-%COMP%], \n.provider-picker-wrap[_ngcontent-%COMP%] {\n  width: calc(100% - 48px);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.compare-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 38px;\n  color: #a9c2e6;\n  font-size: 12px;\n}\n.compare-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.compare-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.compare-heading[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n.compare-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 15px;\n  border: 1px solid rgba(255, 255, 255, .17);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .07);\n  color: #c8ddff;\n  font: 700 10px/1.2 var(--mono, monospace);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.compare-kicker[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #58dc92;\n  box-shadow: 0 0 0 5px rgba(88, 220, 146, .12);\n}\n.compare-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 22px 0 16px;\n  color: #fff;\n  font-size: clamp(16px, 4.8vw, 64px);\n  line-height: 1.04;\n  letter-spacing: -.045em;\n  white-space: nowrap;\n}\n.compare-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #82b7ff;\n}\n.compare-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: 0 auto;\n  color: #c5d5ed;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.compare-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  max-width: 920px;\n  margin: 48px auto 0;\n  border: 1px solid rgba(255, 255, 255, .15);\n  border-radius: 18px;\n  background: rgba(3, 20, 48, .44);\n  box-shadow: 0 22px 60px rgba(0, 0, 0, .16);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.compare-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 23px 20px;\n  text-align: center;\n  border-right: 1px solid rgba(255, 255, 255, .13);\n}\n.compare-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.compare-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: clamp(22px, 2.5vw, 31px);\n  line-height: 1.1;\n}\n.compare-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #9fb7da;\n  font: 600 10px/1.4 var(--mono, monospace);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.provider-picker[_ngcontent-%COMP%] {\n  overflow-x: clip;\n  padding: 76px 0 72px;\n  background: #f4f7fc;\n}\n.provider-picker-heading[_ngcontent-%COMP%] {\n  max-width: 730px;\n  margin: 0 auto 38px;\n  text-align: center;\n}\n.provider-picker-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono, monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.provider-picker-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  color: #071d43;\n  font-size: clamp(30px, 4vw, 44px);\n  line-height: 1.12;\n  letter-spacing: -.03em;\n}\n.provider-picker-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #61738f;\n  font-size: 15px;\n  line-height: 1.7;\n}\n.provider-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}\n.provider-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 360px;\n  flex-direction: column;\n  padding: 26px;\n  overflow: hidden;\n  scroll-margin-top: 90px;\n  border: 1px solid #dce5f2;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(4, 30, 66, .055);\n  transition:\n    transform .25s ease,\n    border-color .25s ease,\n    box-shadow .25s ease;\n}\n.provider-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: var(--provider-accent);\n}\n.provider-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: color-mix(in srgb, var(--provider-accent) 35%, #dce5f2);\n  box-shadow: 0 22px 42px rgba(4, 30, 66, .12);\n}\n.provider-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.provider-savings-badge[_ngcontent-%COMP%] {\n  display: block;\n  width: 72px;\n  height: 72px;\n  flex: 0 0 72px;\n  object-fit: contain;\n}\n.provider-logo[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border: 1px solid color-mix(in srgb, var(--provider-accent) 22%, #dce5f2);\n  border-radius: 13px;\n  background: color-mix(in srgb, var(--provider-accent) 8%, #fff);\n  color: var(--provider-accent);\n  font: 800 12px/1 var(--disp, sans-serif);\n}\n.provider-category[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: #eef3fa;\n  color: #5f718c;\n  font: 700 9px/1.2 var(--mono, monospace);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.provider-versus[_ngcontent-%COMP%] {\n  margin: 24px 0 3px;\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono, monospace);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.provider-versus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #9ba9bb;\n}\n.provider-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 13px;\n  color: #071d43;\n  font-size: 24px;\n  line-height: 1.2;\n}\n.provider-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #61738f;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.provider-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n  margin-top: auto;\n  padding-top: 24px;\n  border-top: 1px solid #e5ebf4;\n}\n.provider-card-footer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.provider-card-footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #071d43;\n  font-size: 19px;\n  line-height: 1.2;\n}\n.provider-card-footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8290a5;\n  font-size: 10px;\n}\n.provider-card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0f5dc6;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.provider-card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: transform .2s ease;\n}\n.provider-card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.provider-table-jump[_ngcontent-%COMP%] {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 9px;\n  margin: 32px auto 0;\n  color: #0f5dc6;\n  font-size: 13px;\n  font-weight: 700;\n}\n.providers-content[_ngcontent-%COMP%] {\n  padding: 72px 0 64px;\n  scroll-margin-top: 80px;\n  background: #fff;\n}\n.providers-comparison-wrap[_ngcontent-%COMP%] {\n  width: calc(100% - 90px);\n  max-width: 1440px;\n  margin: 0 auto;\n}\n.providers-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 44px;\n}\n.providers-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 2.5vw, 36px);\n  line-height: 1.25;\n  margin: 0 0 4px;\n  font-weight: 700;\n  color: #101d36;\n}\n.providers-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #041e42;\n  font-size: 16px;\n  line-height: 1.6;\n  margin: 0 auto;\n}\n.providers-table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #dbe3f4;\n  border-radius: 8px;\n  background: #fff;\n}\n.providers-table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0;\n  width: 100%;\n  min-width: 1150px;\n  table-layout: fixed;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  line-height: 1.85;\n  color: #00132d;\n}\n.providers-feature-column[_ngcontent-%COMP%] {\n  width: 14%;\n}\n.providers-featured-column[_ngcontent-%COMP%] {\n  width: 16.7%;\n}\n.providers-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.providers-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 11px;\n  vertical-align: top;\n  border-right: 1px solid #dbe3f4;\n  border-bottom: 1px solid #dbe3f4;\n  text-align: left;\n  overflow-wrap: break-word;\n}\n.providers-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, \n.providers-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.providers-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child    > *[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.providers-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 70px;\n  vertical-align: middle;\n  font-weight: 600;\n}\n.providers-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  font-size: 9px;\n  font-weight: 400;\n  color: #003590;\n}\n.providers-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.providers-table[_ngcontent-%COMP%]   .providers-featured[_ngcontent-%COMP%] {\n  background: #eaf0ff;\n  border-right-color: #8fa7ff;\n  font-weight: 600;\n}\n.providers-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .providers-featured[_ngcontent-%COMP%] {\n  border-top: 2px solid #4b6bff;\n  border-bottom-color: #8fa7ff;\n}\n.providers-value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.providers-status[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex: 0 0 8px;\n  box-shadow: 0 0 0 3px #f1f4f7;\n}\n.providers-status-good[_ngcontent-%COMP%] {\n  background: #19b774;\n}\n.providers-status-warning[_ngcontent-%COMP%] {\n  background: #f5a000;\n}\n.providers-status-poor[_ngcontent-%COMP%] {\n  background: #fa414b;\n}\n.providers-status-neutral[_ngcontent-%COMP%] {\n  background: #94a3b8;\n}\n.providers-buddha-strip[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.providers-buddha-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 22px;\n  margin: 0 0 5px;\n}\n.providers-buddha-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 26px;\n}\n.providers-buddha-actions[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n.providers-sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \na[_ngcontent-%COMP%]:focus-visible, \n.providers-table-scroll[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #75b7ff;\n  outline-offset: 2px;\n}\n@media (max-width: 700px) {\n  .providers-hero[_ngcontent-%COMP%] {\n    padding: 22px 0 48px;\n  }\n  .compare-landing-wrap[_ngcontent-%COMP%], \n   .provider-picker-wrap[_ngcontent-%COMP%] {\n    width: calc(100% - 32px);\n  }\n  .compare-breadcrumb[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n  }\n  .compare-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(14px, 4.5vw, 34px);\n  }\n  .compare-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .compare-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    margin-top: 34px;\n  }\n  .compare-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding: 19px 10px;\n  }\n  .compare-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    border-right: 0;\n  }\n  .compare-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(-n+2) {\n    border-bottom: 1px solid rgba(255, 255, 255, .13);\n  }\n  .provider-picker[_ngcontent-%COMP%] {\n    padding: 52px 0;\n  }\n  .provider-picker-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 27px;\n    overflow-wrap: anywhere;\n  }\n  .provider-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .provider-card[_ngcontent-%COMP%] {\n    min-height: 330px;\n    padding: 23px;\n  }\n  .provider-card-footer[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .providers-content[_ngcontent-%COMP%] {\n    padding: 32px 0 42px;\n  }\n  .providers-comparison-wrap[_ngcontent-%COMP%] {\n    width: calc(100% - 32px);\n  }\n  .providers-intro[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n  }\n  .providers-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-top: 12px;\n  }\n  .providers-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    position: sticky;\n    left: 0;\n    z-index: 1;\n    background: #fff;\n  }\n  .providers-buddha-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 145px;\n  }\n}\n@media (min-width: 701px) and (max-width: 1000px) {\n  .provider-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .provider-card[_ngcontent-%COMP%], \n   .provider-card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=compare-providers.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareProvidersPage, [{
    type: Component,
    args: [{ selector: "xh-compare-providers-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="providers-hero">\r
  <div class="compare-orb compare-orb-one" aria-hidden="true"></div>\r
  <div class="compare-orb compare-orb-two" aria-hidden="true"></div>\r
  <div class="compare-grid" aria-hidden="true"></div>\r
  <div class="compare-landing-wrap">\r
\r
    <div class="compare-heading">\r
      <span class="compare-kicker"><i aria-hidden="true"></i> 6 head-to-head comparisons</span>\r
      <h1 id="compare-title">CloudBaba vs <span>the competition</span></h1>\r
      <p>See how CloudBaba's predictable pricing, India-first infrastructure and hands-on cloud expertise stack up against leading cloud providers.</p>\r
    </div>\r
    <div class="compare-metrics" aria-label="CloudBaba highlights">\r
      <div><strong>~60%</strong><span>Lower cost</span></div>\r
      <div><strong>Zero</strong><span>Egress charges</span></div>\r
      <div><strong>Same-day</strong><span>GPU provisioning</span></div>\r
      <div><strong>24&times;7</strong><span>Human support</span></div>\r
    </div>\r
  </div>\r
</section>\r
\r
<section class="provider-picker" aria-labelledby="provider-picker-title">\r
  <div class="provider-picker-wrap">\r
    <div class="provider-picker-heading">\r
      <span>Choose a provider</span>\r
      <h2 id="provider-picker-title">Pick your comparison</h2>\r
      <p>Select a cloud provider to explore the differences, or jump to the complete feature-by-feature table.</p>\r
    </div>\r
    <div class="provider-cards">\r
      @for (provider of providerCards; track provider.slug) {\r
        <article class="provider-card" [style.--provider-accent]="provider.accent" [id]="provider.slug">\r
          <div class="provider-card-top">\r
            @if ($index < 3) {\r
              <img class="provider-savings-badge" src="/assets/images/cloud-savings-50.svg" width="72" height="72" alt="Save up to 50% on cloud costs">\r
            }\r
            <span class="provider-category">{{ provider.category }}</span>\r
          </div>\r
          <p class="provider-versus">CloudBaba <span>vs</span></p>\r
          <h3>{{ provider.name }}</h3>\r
          <p class="provider-description">{{ provider.description }}</p>\r
          <div class="provider-card-footer">\r
            <div><strong>{{ provider.stat }}</strong><span>{{ provider.statLabel }}</span></div>\r
            <a [routerLink]="['/', provider.slug]" [attr.aria-label]="'Compare CloudBaba with ' + provider.name">View comparison <span aria-hidden="true">&rarr;</span></a>\r
          </div>\r
        </article>\r
      }\r
    </div>\r
    <a class="provider-table-jump" href="#providers-table-title">Compare every provider in one view <span aria-hidden="true">&darr;</span></a>\r
  </div>\r
</section>\r
\r
<section class="providers-content" aria-labelledby="providers-table-title">\r
  <div class="providers-comparison-wrap">\r
    <div class="providers-intro">\r
      <h2 id="providers-table-title">Witness the XcellHost Difference</h2>\r
      <p>XcellHost brings predictable pricing, India-hosted infrastructure, human support and migration expertise together for teams running production workloads.</p>\r
    </div>\r
    <div class="providers-table-scroll" tabindex="0" role="region" aria-label="Cloud provider comparison; scroll horizontally to view all providers">\r
      <table class="providers-table">\r
        <caption class="providers-sr-only">Cloud provider comparison across cost, egress, GPU provisioning, support, migration, data ownership and vendor lock-in.</caption>\r
        <colgroup><col class="providers-feature-column" /><col class="providers-featured-column" /><col span="6" /></colgroup>\r
        <thead>\r
          <tr>\r
            <th scope="col">Feature / Capability</th>\r
            @for (provider of providers; track provider; let first = $first) {\r
              <th scope="col" [class.providers-featured]="first">{{ provider }}@if (first) {<small>India's Sovereign Cloud</small>}</th>\r
            }\r
          </tr>\r
        </thead>\r
        <tbody>\r
          @for (row of comparison; track row.feature) {\r
            <tr>\r
              <th scope="row">{{ row.feature }}</th>\r
              @for (value of row.cells; track $index; let first = $first) { \r
                <td [class.providers-featured]="first"><span class="providers-value"><span class="providers-status" [class]="'providers-status providers-status-' + value.status" aria-hidden="true"></span><span>{{ value.text }}</span></span></td>\r
              }\r
            </tr>\r
          }\r
        </tbody>\r
      </table>\r
    </div>\r
    <div class="pp-cta providers-buddha-strip">\r
      <div>\r
        <h2>Ready to start with XcellHost?</h2>\r
        <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
        <div class="providers-buddha-actions">\r
          <button type="button" class="btn btn-primary" (click)="requestHelp()">Request a callback</button>\r
          <a class="btn btn-ghost" routerLink="/contact">Contact team</a>\r
          <a class="btn btn-ghost" href="https://wa.me/918657032540" target="_blank" rel="noopener">Talk on WhatsApp</a>\r
          <a class="btn btn-ghost" href="mailto:sales@xcellhost.com?subject=Provider%20comparison%20enquiry">Email Us</a>\r
        </div>\r
      </div>\r
      <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">\r
        <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" width="104" height="104" loading="lazy" />\r
      </a>\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/pages/compare-providers.page.css */\n:host {\n  display: block;\n  color: #041e42;\n}\n.providers-hero {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  padding: 30px 0 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #03152f 0%,\n      #08285c 60%,\n      #0b3b84 100%);\n  color: #fff;\n}\n.compare-grid {\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  opacity: .22;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .08) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .08) 1px,\n      transparent 1px);\n  background-size: 52px 52px;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent 90%);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent 90%);\n}\n.compare-orb {\n  position: absolute;\n  z-index: -1;\n  border-radius: 50%;\n  filter: blur(10px);\n  opacity: .45;\n}\n.compare-orb-one {\n  width: 440px;\n  height: 440px;\n  top: -240px;\n  right: -80px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(50, 132, 255, .62),\n      transparent 68%);\n}\n.compare-orb-two {\n  width: 320px;\n  height: 320px;\n  bottom: -220px;\n  left: 10%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 140, 26, .35),\n      transparent 68%);\n}\n.compare-landing-wrap,\n.provider-picker-wrap {\n  width: calc(100% - 48px);\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.compare-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 38px;\n  color: #a9c2e6;\n  font-size: 12px;\n}\n.compare-breadcrumb a {\n  color: inherit;\n}\n.compare-breadcrumb a:hover {\n  color: #fff;\n}\n.compare-heading {\n  max-width: 1200px;\n  margin: 0 auto;\n  text-align: center;\n}\n.compare-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 15px;\n  border: 1px solid rgba(255, 255, 255, .17);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .07);\n  color: #c8ddff;\n  font: 700 10px/1.2 var(--mono, monospace);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.compare-kicker i {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #58dc92;\n  box-shadow: 0 0 0 5px rgba(88, 220, 146, .12);\n}\n.compare-heading h1 {\n  margin: 22px 0 16px;\n  color: #fff;\n  font-size: clamp(16px, 4.8vw, 64px);\n  line-height: 1.04;\n  letter-spacing: -.045em;\n  white-space: nowrap;\n}\n.compare-heading h1 span {\n  color: #82b7ff;\n}\n.compare-heading p {\n  max-width: 750px;\n  margin: 0 auto;\n  color: #c5d5ed;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.compare-metrics {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  max-width: 920px;\n  margin: 48px auto 0;\n  border: 1px solid rgba(255, 255, 255, .15);\n  border-radius: 18px;\n  background: rgba(3, 20, 48, .44);\n  box-shadow: 0 22px 60px rgba(0, 0, 0, .16);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.compare-metrics div {\n  padding: 23px 20px;\n  text-align: center;\n  border-right: 1px solid rgba(255, 255, 255, .13);\n}\n.compare-metrics div:last-child {\n  border-right: 0;\n}\n.compare-metrics strong {\n  display: block;\n  margin-bottom: 4px;\n  color: #fff;\n  font-size: clamp(22px, 2.5vw, 31px);\n  line-height: 1.1;\n}\n.compare-metrics span {\n  color: #9fb7da;\n  font: 600 10px/1.4 var(--mono, monospace);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.provider-picker {\n  overflow-x: clip;\n  padding: 76px 0 72px;\n  background: #f4f7fc;\n}\n.provider-picker-heading {\n  max-width: 730px;\n  margin: 0 auto 38px;\n  text-align: center;\n}\n.provider-picker-heading > span {\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono, monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.provider-picker-heading h2 {\n  margin: 10px 0 12px;\n  color: #071d43;\n  font-size: clamp(30px, 4vw, 44px);\n  line-height: 1.12;\n  letter-spacing: -.03em;\n}\n.provider-picker-heading p {\n  margin: 0;\n  color: #61738f;\n  font-size: 15px;\n  line-height: 1.7;\n}\n.provider-cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}\n.provider-card {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 360px;\n  flex-direction: column;\n  padding: 26px;\n  overflow: hidden;\n  scroll-margin-top: 90px;\n  border: 1px solid #dce5f2;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(4, 30, 66, .055);\n  transition:\n    transform .25s ease,\n    border-color .25s ease,\n    box-shadow .25s ease;\n}\n.provider-card::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: var(--provider-accent);\n}\n.provider-card:hover {\n  transform: translateY(-5px);\n  border-color: color-mix(in srgb, var(--provider-accent) 35%, #dce5f2);\n  box-shadow: 0 22px 42px rgba(4, 30, 66, .12);\n}\n.provider-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.provider-savings-badge {\n  display: block;\n  width: 72px;\n  height: 72px;\n  flex: 0 0 72px;\n  object-fit: contain;\n}\n.provider-logo {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border: 1px solid color-mix(in srgb, var(--provider-accent) 22%, #dce5f2);\n  border-radius: 13px;\n  background: color-mix(in srgb, var(--provider-accent) 8%, #fff);\n  color: var(--provider-accent);\n  font: 800 12px/1 var(--disp, sans-serif);\n}\n.provider-category {\n  margin-left: auto;\n  padding: 6px 10px;\n  border-radius: 999px;\n  background: #eef3fa;\n  color: #5f718c;\n  font: 700 9px/1.2 var(--mono, monospace);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.provider-versus {\n  margin: 24px 0 3px;\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono, monospace);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.provider-versus span {\n  color: #9ba9bb;\n}\n.provider-card h3 {\n  margin: 0 0 13px;\n  color: #071d43;\n  font-size: 24px;\n  line-height: 1.2;\n}\n.provider-description {\n  margin: 0;\n  color: #61738f;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.provider-card-footer {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n  margin-top: auto;\n  padding-top: 24px;\n  border-top: 1px solid #e5ebf4;\n}\n.provider-card-footer > div {\n  display: flex;\n  flex-direction: column;\n}\n.provider-card-footer strong {\n  color: #071d43;\n  font-size: 19px;\n  line-height: 1.2;\n}\n.provider-card-footer div span {\n  color: #8290a5;\n  font-size: 10px;\n}\n.provider-card-footer a {\n  color: #0f5dc6;\n  font-size: 12px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.provider-card-footer a span {\n  display: inline-block;\n  transition: transform .2s ease;\n}\n.provider-card-footer a:hover span {\n  transform: translateX(3px);\n}\n.provider-table-jump {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 9px;\n  margin: 32px auto 0;\n  color: #0f5dc6;\n  font-size: 13px;\n  font-weight: 700;\n}\n.providers-content {\n  padding: 72px 0 64px;\n  scroll-margin-top: 80px;\n  background: #fff;\n}\n.providers-comparison-wrap {\n  width: calc(100% - 90px);\n  max-width: 1440px;\n  margin: 0 auto;\n}\n.providers-intro {\n  text-align: center;\n  margin-bottom: 44px;\n}\n.providers-intro h2 {\n  font-size: clamp(26px, 2.5vw, 36px);\n  line-height: 1.25;\n  margin: 0 0 4px;\n  font-weight: 700;\n  color: #101d36;\n}\n.providers-intro p {\n  color: #041e42;\n  font-size: 16px;\n  line-height: 1.6;\n  margin: 0 auto;\n}\n.providers-table-scroll {\n  overflow-x: auto;\n  border: 1px solid #dbe3f4;\n  border-radius: 8px;\n  background: #fff;\n}\n.providers-table {\n  border-collapse: separate;\n  border-spacing: 0;\n  width: 100%;\n  min-width: 1150px;\n  table-layout: fixed;\n  font-family: Arial, sans-serif;\n  font-size: 11px;\n  line-height: 1.85;\n  color: #00132d;\n}\n.providers-feature-column {\n  width: 14%;\n}\n.providers-featured-column {\n  width: 16.7%;\n}\n.providers-table th,\n.providers-table td {\n  padding: 13px 11px;\n  vertical-align: top;\n  border-right: 1px solid #dbe3f4;\n  border-bottom: 1px solid #dbe3f4;\n  text-align: left;\n  overflow-wrap: break-word;\n}\n.providers-table th:last-child,\n.providers-table td:last-child {\n  border-right: 0;\n}\n.providers-table tbody tr:last-child > * {\n  border-bottom: 0;\n}\n.providers-table thead th {\n  height: 70px;\n  vertical-align: middle;\n  font-weight: 600;\n}\n.providers-table thead small {\n  display: block;\n  margin-top: 3px;\n  font-size: 9px;\n  font-weight: 400;\n  color: #003590;\n}\n.providers-table tbody th {\n  font-weight: 600;\n}\n.providers-table .providers-featured {\n  background: #eaf0ff;\n  border-right-color: #8fa7ff;\n  font-weight: 600;\n}\n.providers-table thead .providers-featured {\n  border-top: 2px solid #4b6bff;\n  border-bottom-color: #8fa7ff;\n}\n.providers-value {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.providers-status {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  flex: 0 0 8px;\n  box-shadow: 0 0 0 3px #f1f4f7;\n}\n.providers-status-good {\n  background: #19b774;\n}\n.providers-status-warning {\n  background: #f5a000;\n}\n.providers-status-poor {\n  background: #fa414b;\n}\n.providers-status-neutral {\n  background: #94a3b8;\n}\n.providers-buddha-strip {\n  margin-top: 32px;\n}\n.providers-buddha-strip h2 {\n  color: #fff;\n  font-size: 22px;\n  margin: 0 0 5px;\n}\n.providers-buddha-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 26px;\n}\n.providers-buddha-actions .btn-ghost {\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n.providers-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip-path: inset(50%);\n  white-space: nowrap;\n}\nbutton:focus-visible,\na:focus-visible,\n.providers-table-scroll:focus-visible {\n  outline: 3px solid #75b7ff;\n  outline-offset: 2px;\n}\n@media (max-width: 700px) {\n  .providers-hero {\n    padding: 22px 0 48px;\n  }\n  .compare-landing-wrap,\n  .provider-picker-wrap {\n    width: calc(100% - 32px);\n  }\n  .compare-breadcrumb {\n    margin-bottom: 28px;\n  }\n  .compare-heading h1 {\n    font-size: clamp(14px, 4.5vw, 34px);\n  }\n  .compare-heading p {\n    font-size: 15px;\n  }\n  .compare-metrics {\n    grid-template-columns: 1fr 1fr;\n    margin-top: 34px;\n  }\n  .compare-metrics div {\n    padding: 19px 10px;\n  }\n  .compare-metrics div:nth-child(2) {\n    border-right: 0;\n  }\n  .compare-metrics div:nth-child(-n+2) {\n    border-bottom: 1px solid rgba(255, 255, 255, .13);\n  }\n  .provider-picker {\n    padding: 52px 0;\n  }\n  .provider-picker-heading h2 {\n    font-size: 27px;\n    overflow-wrap: anywhere;\n  }\n  .provider-cards {\n    grid-template-columns: 1fr;\n  }\n  .provider-card {\n    min-height: 330px;\n    padding: 23px;\n  }\n  .provider-card-footer {\n    flex-wrap: wrap;\n  }\n  .providers-content {\n    padding: 32px 0 42px;\n  }\n  .providers-comparison-wrap {\n    width: calc(100% - 32px);\n  }\n  .providers-intro {\n    margin-bottom: 28px;\n  }\n  .providers-intro p {\n    font-size: 14px;\n    margin-top: 12px;\n  }\n  .providers-table th:first-child {\n    position: sticky;\n    left: 0;\n    z-index: 1;\n    background: #fff;\n  }\n  .providers-buddha-actions .btn {\n    flex: 1 1 145px;\n  }\n}\n@media (min-width: 701px) and (max-width: 1000px) {\n  .provider-cards {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .provider-card,\n  .provider-card-footer a span {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=compare-providers.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareProvidersPage, { className: "CompareProvidersPage", filePath: "src/app/pages/compare-providers.page.ts", lineNumber: 29 });
})();
export {
  CompareProvidersPage
};
//# sourceMappingURL=chunk-UK2RY4WB.js.map
