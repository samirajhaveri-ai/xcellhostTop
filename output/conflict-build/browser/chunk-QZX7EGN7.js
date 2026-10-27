import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  CASE_STUDIES,
  CaseStudiesApiService
} from "./chunk-6DVXASVN.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import {
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/case-study-detail.page.ts
var _c0 = () => [];
var _c1 = (a0) => ["/case-studies", a0];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.id;
function CaseStudyDetailPage_Conditional_1_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 17);
  }
  if (rf & 2) {
    const study_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("src", study_r2.coverImageUrl, \u0275\u0275sanitizeUrl)("alt", study_r2.coverImageAlt || study_r2.headline);
  }
}
function CaseStudyDetailPage_Conditional_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 51);
    \u0275\u0275element(8, "path", 52)(9, "circle", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const study_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("csd-visual article-cover " + study_r2.visualClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r2.industry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r2.visualTitle);
  }
}
function CaseStudyDetailPage_Conditional_1_For_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r4.label);
  }
}
function CaseStudyDetailPage_Conditional_1_For_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r5);
  }
}
function CaseStudyDetailPage_Conditional_1_For_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r6);
  }
}
function CaseStudyDetailPage_Conditional_1_For_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const paragraph_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(paragraph_r7);
  }
}
function CaseStudyDetailPage_Conditional_1_For_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r8);
  }
}
function CaseStudyDetailPage_Conditional_1_For_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(result_r9);
  }
}
function CaseStudyDetailPage_Conditional_1_For_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50)(1, "div", 6)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c1, item_r10.id));
    \u0275\u0275advance();
    \u0275\u0275classMap("csd-related-cover " + item_r10.visualClass);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.industry);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.headline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r10.profile, " \xB7 Read the story \u2192");
  }
}
function CaseStudyDetailPage_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span");
    \u0275\u0275text(4, "XcellHost Case Studies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 5);
    \u0275\u0275text(8, "Browse Case Studies ");
    \u0275\u0275elementStart(9, "span", 6);
    \u0275\u0275text(10, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "div", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "article")(13, "header", 8)(14, "div", 3)(15, "div", 9)(16, "div", 10)(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "span", 11);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "span", 11);
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Customer story");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "h1");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 12);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 13)(30, "div", 14);
    \u0275\u0275element(31, "img", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div")(33, "b");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 16);
    \u0275\u0275conditionalCreate(38, CaseStudyDetailPage_Conditional_1_Conditional_38_Template, 1, 2, "img", 17)(39, CaseStudyDetailPage_Conditional_1_Conditional_39_Template, 10, 5, "div", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 19)(41, "div", 20)(42, "aside", 21)(43, "div", 22)(44, "span", 23);
    \u0275\u0275text(45, "Quick overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h3");
    \u0275\u0275text(47, "Case study details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ul", 24)(49, "li")(50, "span");
    \u0275\u0275text(51, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "b");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "li")(55, "span");
    \u0275\u0275text(56, "Industry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "b");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "li")(60, "span");
    \u0275\u0275text(61, "Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "b");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(64, "div", 22)(65, "span", 23);
    \u0275\u0275text(66, "On this page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "h3");
    \u0275\u0275text(68, "Table of contents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "nav", 25)(70, "a", 26);
    \u0275\u0275text(71, "The background");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "a", 27);
    \u0275\u0275text(73, "The challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "a", 28);
    \u0275\u0275text(75, "The solution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "a", 29);
    \u0275\u0275text(77, "The result");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 30)(79, "span", 23);
    \u0275\u0275text(80, "Need help?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "h3");
    \u0275\u0275text(82, "Talk with our team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p");
    \u0275\u0275text(84, "Facing a similar privacy, security or cloud challenge? We can help define the next step.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 31)(86, "button", 32);
    \u0275\u0275listener("click", function CaseStudyDetailPage_Conditional_1_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCallback());
    });
    \u0275\u0275text(87, "Talk to us");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(88, "div", 33)(89, "article", 34)(90, "section", 35);
    \u0275\u0275repeaterCreate(91, CaseStudyDetailPage_Conditional_1_For_92_Template, 5, 2, "div", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "section", 36)(94, "span", 37);
    \u0275\u0275text(95, "01 \xB7 Context");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "h2");
    \u0275\u0275text(97, "The background");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "h3");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(100, CaseStudyDetailPage_Conditional_1_For_101_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "section", 38)(103, "span", 37);
    \u0275\u0275text(104, "02 \xB7 Problem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "h2");
    \u0275\u0275text(106, "The challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "h3");
    \u0275\u0275text(108);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(109, CaseStudyDetailPage_Conditional_1_For_110_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "blockquote", 39)(112, "p");
    \u0275\u0275text(113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "cite");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span");
    \u0275\u0275text(117, "Illustrative quotation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "section", 40)(119, "span", 37);
    \u0275\u0275text(120, "03 \xB7 Approach");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "h2");
    \u0275\u0275text(122, "The solution");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "h3");
    \u0275\u0275text(124);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(125, CaseStudyDetailPage_Conditional_1_For_126_Template, 2, 1, "p", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(127, "div", 41);
    \u0275\u0275repeaterCreate(128, CaseStudyDetailPage_Conditional_1_For_129_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(130, "section", 42)(131, "span", 37);
    \u0275\u0275text(132, "04 \xB7 Outcome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "h2");
    \u0275\u0275text(134, "The result");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "h3");
    \u0275\u0275text(136);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "ul");
    \u0275\u0275repeaterCreate(138, CaseStudyDetailPage_Conditional_1_For_139_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "div", 43)(141, "div", 44)(142, "h3");
    \u0275\u0275text(143, "Want results like these for your business?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "p");
    \u0275\u0275text(145, "Talk with our specialists about your requirements and the next practical step.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(146, "div", 45)(147, "button", 32);
    \u0275\u0275listener("click", function CaseStudyDetailPage_Conditional_1_Template_button_click_147_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCallback());
    });
    \u0275\u0275text(148, "Request a callback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "a", 46);
    \u0275\u0275text(150, "Contact us");
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(151, "section", 47)(152, "div", 3)(153, "div", 48)(154, "h2");
    \u0275\u0275text(155, "Related Case Studies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "a", 5);
    \u0275\u0275text(157, "Explore all case studies");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "div", 49);
    \u0275\u0275repeaterCreate(159, CaseStudyDetailPage_Conditional_1_For_160_Template, 10, 9, "a", 50, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const study_r2 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(study_r2.industry);
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ctx_r2.progress(), "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(study_r2.industry);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(study_r2.profile);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(study_r2.headline);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r2.visualTitle);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(study_r2.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r2.relationship);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(study_r2.coverImageUrl ? 38 : 39);
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(study_r2.customer);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(study_r2.industry);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(study_r2.profile);
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(26, _c0));
    \u0275\u0275advance(15);
    \u0275\u0275repeater(study_r2.stats);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(study_r2.backgroundTitle);
    \u0275\u0275advance();
    \u0275\u0275repeater(study_r2.background);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(study_r2.challengeTitle);
    \u0275\u0275advance();
    \u0275\u0275repeater(study_r2.challenge);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u201C", study_r2.quote, "\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r2.quoteBy);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(study_r2.solutionTitle);
    \u0275\u0275advance();
    \u0275\u0275repeater(study_r2.solution);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(study_r2.services);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(study_r2.resultTitle);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(study_r2.results);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r2.relatedStudies());
  }
}
function CaseStudyDetailPage_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 1)(1, "span");
    \u0275\u0275text(2, "404");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Customer story not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "The story may have moved or the address may be incorrect.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 54);
    \u0275\u0275text(8, "Return to customer stories");
    \u0275\u0275elementEnd()();
  }
}
var CASE_STUDY_DETAILS = [
  {
    id: "tally-cloud",
    customer: "Northstar Components",
    industry: "Manufacturing",
    profile: "3 branches",
    headline: "Northstar Components removes two days of month-end reconciliation with one live Tally workspace",
    relationship: "Northstar Components and XcellHost",
    visualTitle: "One finance workspace. Every branch connected.",
    visualClass: "detail-visual-manufacturing",
    services: ["Tally on Cloud", "Cloud Backup", "Managed Support"],
    stats: [
      { value: "3", label: "branches working on one dataset" },
      { value: "0", label: "days spent consolidating files" },
      { value: "24x7", label: "managed platform monitoring" }
    ],
    backgroundTitle: "A growing manufacturer held back by disconnected finance data",
    background: [
      "Northstar Components is a fictional, mid-sized manufacturer operating three branches across western India. Each location managed sales, purchasing and inventory in a separate Tally company file.",
      "The process worked while the business was small, but reporting became slower as transaction volumes and branch coordination increased."
    ],
    challengeTitle: "Creating a reliable month-end view without exchanging backup files",
    challenge: [
      "Finance teams emailed Tally backups at the end of every month. The head office then compared entries, checked versions and resolved duplicated or missing transactions before management reports could begin.",
      "The business needed concurrent, secure access without exposing the accounting environment directly to the public internet or depending on one office computer."
    ],
    solutionTitle: "A centrally managed Tally environment with protected access and backups",
    solution: [
      "XcellHost created a right-sized Tally on Cloud workspace, migrated the active company data and configured role-based access for authorised users at all three branches.",
      "Scheduled cloud backups, access monitoring and a documented recovery process added continuity without changing the familiar Tally workflow used by the finance team."
    ],
    resultTitle: "One current dataset and a faster close",
    results: [
      "All branches now work against the same current accounting dataset.",
      "Manual file consolidation was removed from the month-end process.",
      "Authorised staff can continue working securely from another location when an office connection or device is unavailable."
    ],
    quote: "The team kept the Tally workflow they already knew, but the version-checking and backup exchange disappeared.",
    quoteBy: "Sample Finance Manager, Northstar Components"
  },
  {
    id: "ca-continuity",
    customer: "LedgerPoint Advisors",
    industry: "Professional services",
    profile: "CA firm \xB7 Pune",
    headline: "LedgerPoint Advisors resumes client work in ten minutes after an office PC failure",
    relationship: "LedgerPoint Advisors and XcellHost",
    visualTitle: "The workspace continued when the device stopped.",
    visualClass: "detail-visual-continuity",
    services: ["Cloud Desktop", "Acronis Backup", "Managed Support"],
    stats: [
      { value: "10 min", label: "to resume client work" },
      { value: "0", label: "client files lost" },
      { value: "1", label: "managed recovery path" }
    ],
    backgroundTitle: "A busy accounting practice dependent on office hardware",
    background: [
      "LedgerPoint Advisors is a fictional chartered-accountancy practice serving growing businesses in Pune. Its core applications and current client files were installed on a primary office computer.",
      "Remote access was limited and recovery depended on the condition of that device and the latest locally available backup."
    ],
    challengeTitle: "Keeping deadline-driven work available during a device failure",
    challenge: [
      "Tax, audit and compliance work follows fixed deadlines. A failed workstation could interrupt several team members while software, configurations and client data were restored.",
      "The firm needed a consistent desktop experience that was independent of one physical computer and protected by a repeatable backup process."
    ],
    solutionTitle: "A managed cloud desktop separated work from the endpoint",
    solution: [
      "XcellHost moved the working environment to a managed Cloud Desktop and configured access for approved staff. Applications and data remained inside the controlled workspace rather than on individual laptops.",
      "Acronis Backup protected the environment with scheduled recovery points, while operating checks and support procedures gave the team a clear response path."
    ],
    resultTitle: "A hardware incident became a short interruption",
    results: [
      "A user resumed work from another laptop in approximately ten minutes.",
      "The practice no longer depends on a single office PC for its active workspace.",
      "Backups and recovery steps are managed and tested instead of relying on ad-hoc copies."
    ],
    quote: "We changed devices, signed in and continued. There was no rebuild project in the middle of a client deadline.",
    quoteBy: "Sample Practice Partner, LedgerPoint Advisors"
  },
  {
    id: "dpdpa-readiness",
    customer: "Aegis Finance",
    industry: "BFSI",
    profile: "Enterprise",
    headline: "Aegis Finance builds an operating DPDPA readiness programme in eight weeks",
    relationship: "Aegis Finance and XcellHost SecureSetu",
    visualTitle: "Privacy evidence moved from documents into workflows.",
    visualClass: "detail-visual-privacy",
    services: ["SecureSetu", "vDPO", "Privacy Assessment"],
    stats: [
      { value: "8 weeks", label: "to core workflow readiness" },
      { value: "1", label: "governed evidence register" },
      { value: "100%", label: "critical owners assigned" }
    ],
    backgroundTitle: "A financial-services organisation preparing for stronger privacy obligations",
    background: [
      "Aegis Finance is a fictional financial-services enterprise working with customer, employee and partner information across multiple business systems and vendors.",
      "Privacy activity existed across legal, security and operations teams, but evidence and ownership were distributed across documents, inboxes and separate trackers."
    ],
    challengeTitle: "Turning policy commitments into repeatable operating evidence",
    challenge: [
      "The organisation needed to locate personal-data processing, formalise consent and data-principal request handling, review vendor obligations and answer enterprise due-diligence questions consistently.",
      "Leadership also needed one view of gaps, owners and remediation progress without creating another disconnected spreadsheet programme."
    ],
    solutionTitle: "SecureSetu workflows supported by named privacy ownership",
    solution: [
      "XcellHost configured SecureSetu for data discovery, consent records, request handling and evidence management. A phased assessment prioritised the highest-risk processing activities and third parties.",
      "A named virtual DPO coordinated owners, reviewed remediation evidence and established a practical operating cadence for privacy governance."
    ],
    resultTitle: "Audit questions could be answered with current evidence",
    results: [
      "Core privacy workflows were operating within the sample eight-week programme.",
      "Critical remediation actions had named business and technology owners.",
      "Client and internal due-diligence responses became faster and more consistent."
    ],
    quote: "The biggest improvement was ownership: every important privacy action had a workflow, evidence and a responsible team.",
    quoteBy: "Sample Privacy Lead, Aegis Finance"
  }
];
var CaseStudyDetailPage = class _CaseStudyDetailPage {
  route = inject(ActivatedRoute);
  doc = inject(DOCUMENT);
  overlay = inject(OverlayService);
  seo = inject(SeoService);
  caseStudiesApi = inject(CaseStudiesApiService);
  paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap
  });
  availableStudies = toSignal(this.caseStudiesApi.studies$, { initialValue: CASE_STUDIES });
  progress = signal(0, ...ngDevMode ? [{ debugName: "progress" }] : []);
  study = computed(() => {
    const id = this.paramMap().get("id");
    const cmsStudy = this.availableStudies().find((item) => item.id === id);
    if (cmsStudy?.documentId)
      return this.toDetail(cmsStudy);
    const detailed = CASE_STUDY_DETAILS.find((item) => item.id === id);
    if (detailed)
      return detailed;
    return cmsStudy ? this.toDetail(cmsStudy) : void 0;
  }, ...ngDevMode ? [{ debugName: "study" }] : []);
  relatedStudies = computed(() => {
    const activeId = this.study()?.id;
    return this.availableStudies().filter((item) => item.id !== activeId).slice(0, 3).map((item) => item.documentId ? this.toDetail(item) : CASE_STUDY_DETAILS.find((detail) => detail.id === item.id) ?? this.toDetail(item));
  }, ...ngDevMode ? [{ debugName: "relatedStudies" }] : []);
  constructor() {
    effect(() => {
      const activeStudy = this.study();
      if (!activeStudy) {
        this.seo.set("Case Study Not Found - XcellHost", "The requested customer story could not be found.", "/case-studies/");
        return;
      }
      this.seo.set(`${activeStudy.customer} Customer Story - XcellHost`, activeStudy.headline, `/case-studies/${activeStudy.id}/`);
    });
  }
  openCallback() {
    this.overlay.open("callback");
  }
  onScroll() {
    const element = this.doc.documentElement;
    const height = element.scrollHeight - element.clientHeight;
    this.progress.set(height > 0 ? Math.min(100, Math.max(0, element.scrollTop / height * 100)) : 0);
  }
  toDetail(study) {
    const customer = study.customer || study.profile || "XcellHost customer";
    const summary = study.summary || study.metricLabel;
    return {
      id: study.id,
      customer,
      industry: study.industry,
      profile: study.profile,
      headline: study.headline || `${customer}: ${study.metricLabel}`,
      relationship: `${customer} and XcellHost`,
      visualTitle: study.metricLabel,
      visualClass: study.mainCategory.includes("Data Protection") ? "detail-visual-privacy" : "detail-visual-continuity",
      coverImageUrl: study.coverImageUrl,
      coverImageAlt: study.coverImageAlt,
      services: study.services,
      stats: [{ value: study.metric, label: study.metricLabel }],
      backgroundTitle: "The customer context",
      background: [summary],
      challengeTitle: "The operational challenge",
      challenge: [study.challenge || summary],
      solutionTitle: "The XcellHost approach",
      solution: [study.solution || "XcellHost designed and delivered a solution around the customer's requirements."],
      resultTitle: study.metricLabel,
      results: study.impact.length ? study.impact : [summary],
      quote: study.quote || summary,
      quoteBy: study.quoteBy || `${customer} customer story`
    };
  }
  static \u0275fac = function CaseStudyDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudyDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudyDetailPage, selectors: [["xh-case-study-detail-page"]], hostAttrs: [2, "display", "contents"], hostBindings: function CaseStudyDetailPage_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function CaseStudyDetailPage_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 3, vars: 1, consts: [[1, "csd-page", "bpage", "as-page", "xh-blog-article"], [1, "csd-not-found", "wrap"], [1, "bp-bar"], [1, "wrap"], [1, "bp-bar-brand"], ["routerLink", "/case-studies", 1, "bp-bar-link"], ["aria-hidden", "true"], [1, "bp-prog"], [1, "bp-hero", "article-hero"], [1, "article-hero-copy"], [1, "bp-kick"], [1, "dot"], [1, "lede"], [1, "article-author-row"], [1, "article-author-badge", "is-brand-avatar"], ["src", "/assets/images/xcellhost-logo.png", "alt", "XcellHost", "width", "40", "height", "40"], [1, "article-hero-media"], [1, "bp-cover", "article-cover", 3, "src", "alt"], [3, "class"], [1, "article-main"], [1, "wrap", "article-grid"], [1, "article-sidebar"], [1, "article-side-card"], [1, "article-side-kicker"], [1, "article-facts"], ["aria-label", "Table of contents", 1, "article-toc"], ["fragment", "background", 3, "routerLink"], ["fragment", "challenge", 3, "routerLink"], ["fragment", "solution", 3, "routerLink"], ["fragment", "result", 3, "routerLink"], [1, "article-side-card", "article-side-cta"], [1, "row"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "article-content"], [1, "bp-body", "article-body"], ["aria-label", "Outcome summary", 1, "csd-outcomes"], ["id", "background", 1, "csd-copy-section"], [1, "csd-section-kicker"], ["id", "challenge", 1, "csd-copy-section"], [1, "csd-quote"], ["id", "solution", 1, "csd-copy-section"], ["aria-label", "Solutions used", 1, "csd-service-flow"], ["id", "result", 1, "csd-copy-section"], [1, "pp-cta", "article-product-cta"], [1, "article-product-cta-copy"], [1, "article-product-cta-actions"], ["routerLink", "/contact", 1, "btn", "btn-ghost"], [1, "bp-more", "article-more"], [1, "article-related-head"], [1, "article-related-grid"], [1, "article-related-card", 3, "routerLink"], ["viewBox", "0 0 520 190", "aria-hidden", "true"], ["d", "M34 157h452M78 157V91h86v66m31 0V48h193v109m-166-76h41m35 0h41m-117 35h41m35 0h41"], ["cx", "408", "cy", "51", "r", "20"], ["routerLink", "/case-studies"]], template: function CaseStudyDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0);
      \u0275\u0275conditionalCreate(1, CaseStudyDetailPage_Conditional_1_Template, 161, 27)(2, CaseStudyDetailPage_Conditional_2_Template, 9, 0, "section", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_0_0 = ctx.study()) ? 1 : 2, tmp_0_0);
    }
  }, dependencies: [RouterLink], styles: ['\n\n.xh-blog-article[_ngcontent-%COMP%]   .article-tools[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 7px 12px;\n  border: 1px solid #1559c9;\n  border-radius: 8px;\n  background: #1559c9;\n  color: #fff;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #1049a8;\n  border-color: #1049a8;\n  color: #fff;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-tools[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.7;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 28px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #dbe6f6;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-label[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #526783;\n  font-size: 14px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   .article-summary-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 36px;\n  padding-right: 90px;\n  margin: 0 0 12px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]:has(.article-summary) {\n  padding-top: 18px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 44px;\n  padding: 8px 14px;\n  border: 1px solid #e6ebf2;\n  border-radius: 8px;\n  background: #fff;\n  color: #183153;\n  box-shadow: 0 2px 4px rgba(15, 35, 65, .12);\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-button[_ngcontent-%COMP%]:hover {\n  background: #f2f7ff;\n  border-color: #adc9f2;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(a, button, textarea):focus-visible {\n  outline: 2px solid #1765d1;\n  outline-offset: 3px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .summary-chatgpt[_ngcontent-%COMP%] {\n  color: #10a37f;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .summary-gemini[_ngcontent-%COMP%] {\n  color: #687bdb;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .summary-claude[_ngcontent-%COMP%] {\n  color: #d97757;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .summary-google[_ngcontent-%COMP%] {\n  color: #4285f4;\n  font-weight: 700;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .summary-grok[_ngcontent-%COMP%] {\n  color: #111;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .summary-perplexity[_ngcontent-%COMP%] {\n  color: #20808d;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-prompt[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 12px;\n  color: #526783;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-prompt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 12px 0 6px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-prompt[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #cbdcf5;\n  border-radius: 8px;\n  resize: vertical;\n  font: inherit;\n  color: #183153;\n  background: #f8fbff;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-status[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  font-size: 12px;\n  color: #526783;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-summary-status[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%] {\n  padding: 34px 0 32px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.12fr) minmax(300px, .88fr);\n  gap: 28px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 24ch;\n  margin: 12px 0 10px;\n  font-size: clamp(28px, 3.35vw, 43px);\n  line-height: 1.12;\n  letter-spacing: -.035em;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%]   .lede[_ngcontent-%COMP%] {\n  max-width: 66ch;\n  margin: 0;\n  font-size: 15.5px;\n  line-height: 1.62;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .bp-kick[_ngcontent-%COMP%] {\n  gap: 8px;\n  font-size: 10px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-author-row[_ngcontent-%COMP%] {\n  gap: 10px;\n  margin-top: 17px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-author-badge[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  border: 2px solid rgba(255, 255, 255, .8);\n  background: #fff;\n  font-size: 16px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-author-badge[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-author-badge.is-brand-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.xh-blog-article[_ngcontent-%COMP%]   .article-author-badge[_ngcontent-%COMP%]   img.is-brand-avatar[_ngcontent-%COMP%] {\n  padding: 6px;\n  object-fit: contain;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-author-row[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-author-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 270px;\n  min-height: 0;\n  border-radius: 20px;\n  object-fit: cover;\n  box-shadow: 0 20px 46px rgba(2, 12, 29, .28);\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 260px minmax(0, 1fr);\n  gap: 28px;\n  padding-top: 32px;\n  padding-bottom: 58px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n  padding: 14px 18px;\n  border: 1px solid #cbdcf5;\n  border-radius: 14px;\n  background: #f2f7ff;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-copy[_ngcontent-%COMP%], \n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #102b55;\n  font-size: 14px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-copy[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5e7190;\n  font-size: 12px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dceaff;\n  color: #155dc5;\n  font-size: 22px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 9px 16px;\n  border: 1px solid #155dc5;\n  border-radius: 999px;\n  background: #155dc5;\n  color: #fff;\n  font: 700 12px var(--body);\n  cursor: pointer;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-actions[_ngcontent-%COMP%]   .article-listen-stop[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #155dc5;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-listen-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #93bdf5;\n  outline-offset: 2px;\n}\n@media (max-width: 520px) {\n  .xh-blog-article[_ngcontent-%COMP%]   .article-listen[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-listen-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-side-card[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  padding: 18px;\n  border-radius: 16px;\n  box-shadow: 0 12px 30px rgba(5, 38, 84, .05);\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-side-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  font-size: 18px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-facts[_ngcontent-%COMP%] {\n  gap: 11px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-facts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 11px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-toc[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 9px 10px;\n  border-radius: 9px;\n  font-size: 12px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%] {\n  padding: clamp(24px, 4vw, 42px);\n  border: 1px solid #dce6f2;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 18px 48px rgba(5, 38, 84, .065);\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-child {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e4ebf4;\n  color: #172b44;\n  font-size: 17px;\n  font-weight: 500;\n  line-height: 1.78;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 76ch;\n  margin-bottom: 20px;\n  color: #34465c;\n  font-size: 15.5px;\n  line-height: 1.82;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 36px 0 15px;\n  padding: 16px 0 0 17px;\n  border-top: 1px solid #e0e8f2;\n  color: #071f46;\n  font-size: clamp(24px, 2.4vw, 31px);\n  line-height: 1.2;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 17px;\n  left: 0;\n  width: 4px;\n  height: 1em;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      180deg,\n      #1261ff,\n      #37a9ff);\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  gap: 9px;\n  margin-bottom: 24px;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 12px 15px 12px 43px;\n  border-radius: 12px;\n  background: #f8fbff;\n  font-size: 14.5px;\n  line-height: 1.65;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  top: 15px;\n  left: 14px;\n  width: 17px;\n  height: 17px;\n  box-shadow: 0 4px 10px rgba(21, 101, 216, .2);\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-inline-media[_ngcontent-%COMP%] {\n  margin: 26px 0;\n  padding: 8px;\n  border: 1px solid #dce6f2;\n  border-radius: 16px;\n  background: #f8fbff;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-inline-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 11px;\n  box-shadow: none;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   .article-product-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-product-cta[_ngcontent-%COMP%] {\n  margin-top: 34px;\n  border-radius: 18px;\n}\n.article-share[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 24px;\n  padding: 22px 24px;\n  border: 1px solid #d6e4f4;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #f7fbff,\n      #edf5ff);\n  box-shadow: 0 12px 30px rgba(4, 30, 66, .07);\n}\n.article-share-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #1565d8;\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.article-share-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--navy);\n  font: 750 clamp(20px, 2vw, 26px)/1.2 var(--disp);\n}\n.article-share-actions[_ngcontent-%COMP%], \n.article-socials[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.article-share-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 42px;\n  padding: 10px 16px;\n  border: 1px solid #1261ff;\n  border-radius: 999px;\n  background: #1261ff;\n  color: #fff;\n  font: 700 12px/1 var(--body);\n  cursor: pointer;\n  transition:\n    background .2s,\n    border-color .2s,\n    transform .2s;\n}\n.article-share-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.article-socials[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.8;\n}\n.article-share-button[_ngcontent-%COMP%]:hover {\n  border-color: #084bd4;\n  background: #084bd4;\n  transform: translateY(-2px);\n}\n.article-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  border: 1px solid #cbdcf0;\n  border-radius: 50%;\n  background: #fff;\n  color: #47647f;\n  transition:\n    color .2s,\n    border-color .2s,\n    background .2s,\n    transform .2s;\n}\n.article-socials[_ngcontent-%COMP%]   .share-facebook[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: currentColor;\n  stroke: none;\n}\n.article-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: currentColor;\n  transform: translateY(-2px);\n}\n.article-socials[_ngcontent-%COMP%]   .share-linkedin[_ngcontent-%COMP%]:hover {\n  color: #0a66c2;\n  background: #eef7ff;\n}\n.article-socials[_ngcontent-%COMP%]   .share-facebook[_ngcontent-%COMP%]:hover {\n  color: #1877f2;\n  background: #eef5ff;\n}\n.article-socials[_ngcontent-%COMP%]   .share-x[_ngcontent-%COMP%]:hover {\n  color: #111;\n  background: #f3f3f3;\n}\n.article-socials[_ngcontent-%COMP%]   .share-whatsapp[_ngcontent-%COMP%]:hover {\n  color: #128c4a;\n  background: #edfff5;\n}\n.article-socials[_ngcontent-%COMP%]   .share-email[_ngcontent-%COMP%]:hover {\n  color: #d74a37;\n  background: #fff2ef;\n}\n.article-share-button[_ngcontent-%COMP%]:focus-visible, \n.article-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #1261ff;\n  outline-offset: 3px;\n}\n@media (max-width: 1100px) {\n  .xh-blog-article[_ngcontent-%COMP%]   .article-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-sidebar[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 14px;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-side-card[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n@media (max-width: 900px) {\n  .xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-cover[_ngcontent-%COMP%] {\n    height: 250px;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-sidebar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-side-cta[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n}\n@media (max-width: 760px) {\n  .xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%] {\n    padding: 27px 0 28px;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    gap: 22px;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-size: clamp(26px, 8vw, 34px);\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-hero[_ngcontent-%COMP%]   .lede[_ngcontent-%COMP%] {\n    font-size: 14.5px;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-cover[_ngcontent-%COMP%] {\n    height: 210px;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-grid[_ngcontent-%COMP%] {\n    padding: 22px 16px 42px;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-sidebar[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-side-cta[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%] {\n    padding: 22px 18px;\n    border-radius: 16px;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:first-child, \n   .xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n    line-height: 1.76;\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    font-size: clamp(22px, 6.5vw, 28px);\n  }\n  .xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .article-share[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 20px;\n  }\n  .article-share-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 480px) {\n  .article-socials[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .article-socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n}\n.article-related-carousel[_ngcontent-%COMP%] {\n  position: relative;\n}\n.article-related-head[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.article-related-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-related-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 14px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n  padding: 5px 0 16px;\n}\n.article-related-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-related-grid[_ngcontent-%COMP%]    > .article-related-card[_ngcontent-%COMP%] {\n  flex: 0 0 calc((100% - 28px) / 3);\n  scroll-snap-align: start;\n}\n.article-related-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  border: 1px solid #bdd4f7;\n  border-radius: 50%;\n  color: #1565d8;\n  background: #fff;\n  box-shadow: 0 4px 14px rgba(4, 30, 66, .12);\n  font: 28px/1 sans-serif;\n  cursor: pointer;\n  transition: background .2s, color .2s;\n}\n.article-related-arrow.previous[_ngcontent-%COMP%] {\n  left: -18px;\n}\n.article-related-arrow.next[_ngcontent-%COMP%] {\n  right: -18px;\n}\n.article-related-arrow[_ngcontent-%COMP%]:hover {\n  background: #1565d8;\n  color: #fff;\n}\n.article-related-arrow[_ngcontent-%COMP%]:focus-visible, \n.article-related-grid[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #1565d8;\n  outline-offset: 3px;\n}\n@media (max-width: 900px) {\n  .xh-blog-article[_ngcontent-%COMP%]   .article-related-grid[_ngcontent-%COMP%]    > .article-related-card[_ngcontent-%COMP%] {\n    flex-basis: calc((100% - 14px) / 2);\n  }\n}\n@media (max-width: 560px) {\n  .xh-blog-article[_ngcontent-%COMP%]   .article-related-grid[_ngcontent-%COMP%]    > .article-related-card[_ngcontent-%COMP%] {\n    flex-basis: 86%;\n  }\n  .article-related-arrow.previous[_ngcontent-%COMP%] {\n    left: -10px;\n  }\n  .article-related-arrow.next[_ngcontent-%COMP%] {\n    right: -10px;\n  }\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-related-card[_ngcontent-%COMP%] {\n  padding: 0 0 20px;\n  overflow: hidden;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-related-card[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.article-related-cover) {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.article-related-card[_ngcontent-%COMP%]   .article-related-cover[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  margin-bottom: 16px;\n  border-radius: 0;\n  background: #f2f7ff;\n}\n.article-related-card[_ngcontent-%COMP%]   .article-related-cover.is-fallback[_ngcontent-%COMP%] {\n  padding: 24px;\n  object-fit: contain;\n}\n.article-related-card[_ngcontent-%COMP%]   .article-related-description[_ngcontent-%COMP%], \n.article-sibling[_ngcontent-%COMP%]   .article-sibling-description[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  margin: 0 0 18px;\n  color: #607594;\n  font-size: 13px;\n  line-height: 1.65;\n}\n.article-sibling[_ngcontent-%COMP%]   .article-sibling-description[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-sibling[_ngcontent-%COMP%] {\n  padding: 0 0 20px;\n  overflow: hidden;\n  justify-content: flex-start;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-sibling[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(.article-sibling-cover) {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.article-sibling[_ngcontent-%COMP%]   .article-sibling-cover[_ngcontent-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  margin: 0 0 8px;\n  background: #f2f7ff;\n}\n.article-sibling[_ngcontent-%COMP%]   .article-sibling-cover.is-fallback[_ngcontent-%COMP%] {\n  padding: 24px;\n  object-fit: contain;\n}\n/*# sourceMappingURL=blog.page.css.map */', '\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.csd-page[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.csd-visual[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  min-height: 270px;\n  height: 270px;\n  overflow: hidden;\n  padding: 30px;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n}\n.csd-visual[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  background:\n    linear-gradient(\n      115deg,\n      rgba(2, 23, 57, .92),\n      rgba(3, 47, 105, .5) 64%,\n      rgba(0, 80, 215, .16));\n  content: "";\n}\n.detail-visual-manufacturing[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0755b8,\n      #18a3d2);\n}\n.detail-visual-continuity[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #056a88,\n      #13a9a4);\n}\n.detail-visual-privacy[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #252f77,\n      #7453a5);\n}\n.csd-visual[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.csd-visual[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 650px;\n  margin: 14px 0 10px;\n  font: 750 clamp(30px, 4vw, 48px)/1 var(--disp);\n  letter-spacing: -.04em;\n}\n.csd-visual[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 430px;\n  margin: 0;\n  color: #dbeaff;\n  font: 500 17px/1.4 var(--disp);\n}\n.csd-visual[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -60px;\n  bottom: -18px;\n  width: 82%;\n  fill: none;\n  stroke: rgba(255, 255, 255, .18);\n  stroke-linecap: round;\n  stroke-width: 2;\n}\n.csd-outcomes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 32px;\n}\n.csd-outcomes[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 18px;\n  border: 1px solid #d8e6f5;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fbff,\n      #f1f7ff);\n}\n.csd-outcomes[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #155dc5;\n  font: 750 clamp(23px, 3vw, 34px)/1 var(--disp);\n  letter-spacing: -.03em;\n}\n.csd-outcomes[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  color: #526783;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.csd-copy-section[_ngcontent-%COMP%] {\n  scroll-margin-top: 110px;\n}\n.csd-section-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 8px;\n  color: #1565d8;\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   .csd-copy-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.csd-copy-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: -4px 0 17px;\n  color: #173052;\n  font: 700 clamp(18px, 2vw, 23px)/1.35 var(--disp);\n}\n.csd-quote[_ngcontent-%COMP%] {\n  margin: 32px 0 42px;\n  padding: 28px 30px;\n  border-left: 4px solid #1565d8;\n  border-radius: 0 16px 16px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #eef6ff,\n      #f8fbff);\n}\n.xh-blog-article[_ngcontent-%COMP%]   .article-body[_ngcontent-%COMP%]   .csd-quote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #071f46;\n  font: 650 20px/1.55 var(--disp);\n}\n.csd-quote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  display: block;\n  color: #173052;\n  font: 700 12px/1.5 var(--body);\n  font-style: normal;\n}\n.csd-quote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: #71839a;\n  font: 600 9px/1.4 var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.csd-service-flow[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin: 26px 0 32px;\n  padding: 18px;\n  flex-wrap: wrap;\n  border: 1px solid #dbe7f5;\n  border-radius: 14px;\n  background: #f8fbff;\n}\n.csd-service-flow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 11px;\n  border: 1px solid #bdd4ef;\n  border-radius: 999px;\n  background: #fff;\n  color: #1559b7;\n  font: 700 11px/1.2 var(--body);\n}\n.csd-related-cover[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 116px;\n  margin: -20px -20px 16px;\n  padding: 20px;\n  align-items: flex-end;\n  color: #fff;\n}\n.csd-related-cover[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font: 750 21px/1.2 var(--disp);\n}\n.csd-not-found[_ngcontent-%COMP%] {\n  padding-top: 70px;\n  padding-bottom: 80px;\n  text-align: center;\n}\n.csd-not-found[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1565d8;\n  font: 700 12px var(--mono);\n}\n.csd-not-found[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  font: 750 clamp(34px, 5vw, 58px)/1.1 var(--disp);\n}\n.csd-not-found[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  color: #526783;\n}\n.csd-not-found[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1565d8;\n  font-weight: 700;\n}\n@media (max-width: 900px) {\n  .csd-outcomes[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .csd-visual[_ngcontent-%COMP%] {\n    min-height: 220px;\n    height: 220px;\n    padding: 24px;\n  }\n  .csd-visual[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .csd-quote[_ngcontent-%COMP%] {\n    padding: 23px 20px;\n  }\n}\n/*# sourceMappingURL=case-study-detail.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudyDetailPage, [{
    type: Component,
    args: [{ selector: "xh-case-study-detail-page", standalone: true, imports: [RouterLink], host: { style: "display:contents", "(window:scroll)": "onScroll()" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="csd-page bpage as-page xh-blog-article">\r
  @if (study(); as study) {\r
    <div class="bp-bar">\r
      <div class="wrap">\r
        <div class="bp-bar-brand">\r
          <span>XcellHost Case Studies</span>\r
          <small>{{ study.industry }}</small>\r
        </div>\r
        <a class="bp-bar-link" routerLink="/case-studies">Browse Case Studies <span aria-hidden="true">&rarr;</span></a>\r
        <div class="bp-prog" [style.width.%]="progress()"></div>\r
      </div>\r
    </div>\r
\r
    <article>\r
      <header class="bp-hero article-hero">\r
        <div class="wrap">\r
          <div class="article-hero-copy">\r
            <div class="bp-kick">\r
              <span>{{ study.industry }}</span><span class="dot"></span>\r
              <span>{{ study.profile }}</span><span class="dot"></span>\r
              <span>Customer story</span>\r
            </div>\r
            <h1>{{ study.headline }}</h1>\r
            <p class="lede">{{ study.visualTitle }}</p>\r
            <div class="article-author-row">\r
              <div class="article-author-badge is-brand-avatar">\r
                <img src="/assets/images/xcellhost-logo.png" alt="XcellHost" width="40" height="40" />\r
              </div>\r
              <div><b>{{ study.customer }}</b><span>{{ study.relationship }}</span></div>\r
            </div>\r
          </div>\r
\r
          <div class="article-hero-media">\r
            @if (study.coverImageUrl) {\r
              <img class="bp-cover article-cover" [src]="study.coverImageUrl" [alt]="study.coverImageAlt || study.headline" />\r
            } @else {\r
              <div [class]="'csd-visual article-cover ' + study.visualClass">\r
                <span>{{ study.industry }}</span>\r
                <strong>{{ study.customer }}</strong>\r
                <p>{{ study.visualTitle }}</p>\r
                <svg viewBox="0 0 520 190" aria-hidden="true">\r
                  <path d="M34 157h452M78 157V91h86v66m31 0V48h193v109m-166-76h41m35 0h41m-117 35h41m35 0h41" />\r
                  <circle cx="408" cy="51" r="20" />\r
                </svg>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      </header>\r
\r
      <div class="article-main">\r
        <div class="wrap article-grid">\r
          <aside class="article-sidebar">\r
            <div class="article-side-card">\r
              <span class="article-side-kicker">Quick overview</span>\r
              <h3>Case study details</h3>\r
              <ul class="article-facts">\r
                <li><span>Customer</span><b>{{ study.customer }}</b></li>\r
                <li><span>Industry</span><b>{{ study.industry }}</b></li>\r
                <li><span>Profile</span><b>{{ study.profile }}</b></li>\r
              </ul>\r
            </div>\r
\r
            <div class="article-side-card">\r
              <span class="article-side-kicker">On this page</span>\r
              <h3>Table of contents</h3>\r
              <nav class="article-toc" aria-label="Table of contents">\r
                <a [routerLink]="[]" fragment="background">The background</a>\r
                <a [routerLink]="[]" fragment="challenge">The challenge</a>\r
                <a [routerLink]="[]" fragment="solution">The solution</a>\r
                <a [routerLink]="[]" fragment="result">The result</a>\r
              </nav>\r
            </div>\r
\r
            <div class="article-side-card article-side-cta">\r
              <span class="article-side-kicker">Need help?</span>\r
              <h3>Talk with our team</h3>\r
              <p>Facing a similar privacy, security or cloud challenge? We can help define the next step.</p>\r
              <div class="row"><button class="btn btn-primary" type="button" (click)="openCallback()">Talk to us</button></div>\r
            </div>\r
          </aside>\r
\r
          <div class="article-content">\r
            <article class="bp-body article-body">\r
              <section class="csd-outcomes" aria-label="Outcome summary">\r
                @for (stat of study.stats; track stat.label) {\r
                  <div><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>\r
                }\r
              </section>\r
\r
              <section id="background" class="csd-copy-section">\r
                <span class="csd-section-kicker">01 &middot; Context</span>\r
                <h2>The background</h2>\r
                <h3>{{ study.backgroundTitle }}</h3>\r
                @for (paragraph of study.background; track paragraph) { <p>{{ paragraph }}</p> }\r
              </section>\r
\r
              <section id="challenge" class="csd-copy-section">\r
                <span class="csd-section-kicker">02 &middot; Problem</span>\r
                <h2>The challenge</h2>\r
                <h3>{{ study.challengeTitle }}</h3>\r
                @for (paragraph of study.challenge; track paragraph) { <p>{{ paragraph }}</p> }\r
              </section>\r
\r
              <blockquote class="csd-quote">\r
                <p>&ldquo;{{ study.quote }}&rdquo;</p>\r
                <cite>{{ study.quoteBy }}</cite>\r
                <span>Illustrative quotation</span>\r
              </blockquote>\r
\r
              <section id="solution" class="csd-copy-section">\r
                <span class="csd-section-kicker">03 &middot; Approach</span>\r
                <h2>The solution</h2>\r
                <h3>{{ study.solutionTitle }}</h3>\r
                @for (paragraph of study.solution; track paragraph) { <p>{{ paragraph }}</p> }\r
                <div class="csd-service-flow" aria-label="Solutions used">\r
                  @for (service of study.services; track service) { <span>{{ service }}</span> }\r
                </div>\r
              </section>\r
\r
              <section id="result" class="csd-copy-section">\r
                <span class="csd-section-kicker">04 &middot; Outcome</span>\r
                <h2>The result</h2>\r
                <h3>{{ study.resultTitle }}</h3>\r
                <ul>\r
                  @for (result of study.results; track result) { <li>{{ result }}</li> }\r
                </ul>\r
              </section>\r
\r
              <div class="pp-cta article-product-cta">\r
                <div class="article-product-cta-copy">\r
                  <h3>Want results like these for your business?</h3>\r
                  <p>Talk with our specialists about your requirements and the next practical step.</p>\r
                </div>\r
                <div class="article-product-cta-actions">\r
                  <button class="btn btn-primary" type="button" (click)="openCallback()">Request a callback</button>\r
                  <a class="btn btn-ghost" routerLink="/contact">Contact us</a>\r
                </div>\r
              </div>\r
            </article>\r
          </div>\r
        </div>\r
      </div>\r
    </article>\r
\r
    <section class="bp-more article-more">\r
      <div class="wrap">\r
        <div class="article-related-head">\r
          <h2>Related Case Studies</h2>\r
          <a class="bp-bar-link" routerLink="/case-studies">Explore all case studies</a>\r
        </div>\r
        <div class="article-related-grid">\r
          @for (item of relatedStudies(); track item.id) {\r
            <a class="article-related-card" [routerLink]="['/case-studies', item.id]">\r
              <div [class]="'csd-related-cover ' + item.visualClass" aria-hidden="true"><strong>{{ item.customer }}</strong></div>\r
              <span>{{ item.industry }}</span>\r
              <h3>{{ item.headline }}</h3>\r
              <small>{{ item.profile }} &middot; Read the story &rarr;</small>\r
            </a>\r
          }\r
        </div>\r
      </div>\r
    </section>\r
  } @else {\r
    <section class="csd-not-found wrap">\r
      <span>404</span>\r
      <h1>Customer story not found</h1>\r
      <p>The story may have moved or the address may be incorrect.</p>\r
      <a routerLink="/case-studies">Return to customer stories</a>\r
    </section>\r
  }\r
</main>\r
`, styles: ['/* src/app/pages/blog.page.css */\n.xh-blog-article .article-tools {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.xh-blog-article .article-tools button {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 36px;\n  padding: 7px 12px;\n  border: 1px solid #1559c9;\n  border-radius: 8px;\n  background: #1559c9;\n  color: #fff;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.xh-blog-article .article-tools button:hover {\n  background: #1049a8;\n  border-color: #1049a8;\n  color: #fff;\n}\n.xh-blog-article .article-tools svg {\n  width: 16px;\n  height: 16px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.7;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.xh-blog-article .article-summary {\n  position: relative;\n  margin-bottom: 28px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #dbe6f6;\n}\n.xh-blog-article .article-summary-label {\n  margin: 0 0 12px;\n  color: #526783;\n  font-size: 14px;\n}\n.xh-blog-article .article-body .article-summary-label {\n  display: flex;\n  align-items: center;\n  min-height: 36px;\n  padding-right: 90px;\n  margin: 0 0 12px;\n}\n.xh-blog-article .article-body:has(.article-summary) {\n  padding-top: 18px;\n}\n.xh-blog-article .article-summary-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.xh-blog-article .article-summary-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  min-height: 44px;\n  padding: 8px 14px;\n  border: 1px solid #e6ebf2;\n  border-radius: 8px;\n  background: #fff;\n  color: #183153;\n  box-shadow: 0 2px 4px rgba(15, 35, 65, .12);\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: none;\n}\n.xh-blog-article .article-summary-button:hover {\n  background: #f2f7ff;\n  border-color: #adc9f2;\n}\n.xh-blog-article .article-summary :is(a, button, textarea):focus-visible {\n  outline: 2px solid #1765d1;\n  outline-offset: 3px;\n}\n.xh-blog-article .article-summary-icon {\n  font-size: 22px;\n  line-height: 1;\n}\n.xh-blog-article .summary-chatgpt {\n  color: #10a37f;\n}\n.xh-blog-article .summary-gemini {\n  color: #687bdb;\n}\n.xh-blog-article .summary-claude {\n  color: #d97757;\n}\n.xh-blog-article .summary-google {\n  color: #4285f4;\n  font-weight: 700;\n}\n.xh-blog-article .summary-grok {\n  color: #111;\n}\n.xh-blog-article .summary-perplexity {\n  color: #20808d;\n}\n.xh-blog-article .article-summary-prompt {\n  margin-top: 14px;\n  font-size: 12px;\n  color: #526783;\n}\n.xh-blog-article .article-summary-prompt label {\n  display: block;\n  margin: 12px 0 6px;\n}\n.xh-blog-article .article-summary-prompt textarea {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  padding: 10px;\n  border: 1px solid #cbdcf5;\n  border-radius: 8px;\n  resize: vertical;\n  font: inherit;\n  color: #183153;\n  background: #f8fbff;\n}\n.xh-blog-article .article-summary-status {\n  display: block;\n  margin-top: 8px;\n  font-size: 12px;\n  color: #526783;\n}\n.xh-blog-article .article-summary-status:empty {\n  display: none;\n}\n.xh-blog-article .article-hero {\n  padding: 34px 0 32px;\n}\n.xh-blog-article .article-hero .wrap {\n  grid-template-columns: minmax(0, 1.12fr) minmax(300px, .88fr);\n  gap: 28px;\n}\n.xh-blog-article .article-hero h1 {\n  max-width: 24ch;\n  margin: 12px 0 10px;\n  font-size: clamp(28px, 3.35vw, 43px);\n  line-height: 1.12;\n  letter-spacing: -.035em;\n}\n.xh-blog-article .article-hero .lede {\n  max-width: 66ch;\n  margin: 0;\n  font-size: 15.5px;\n  line-height: 1.62;\n}\n.xh-blog-article .bp-kick {\n  gap: 8px;\n  font-size: 10px;\n}\n.xh-blog-article .article-author-row {\n  gap: 10px;\n  margin-top: 17px;\n}\n.xh-blog-article .article-author-badge {\n  overflow: hidden;\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  border: 2px solid rgba(255, 255, 255, .8);\n  background: #fff;\n  font-size: 16px;\n}\n.xh-blog-article .article-author-badge img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.xh-blog-article .article-author-badge.is-brand-avatar img,\n.xh-blog-article .article-author-badge img.is-brand-avatar {\n  padding: 6px;\n  object-fit: contain;\n}\n.xh-blog-article .article-author-row b {\n  font-size: 13px;\n}\n.xh-blog-article .article-author-row span {\n  font-size: 11.5px;\n}\n.xh-blog-article .article-cover {\n  width: 100%;\n  height: 270px;\n  min-height: 0;\n  border-radius: 20px;\n  object-fit: cover;\n  box-shadow: 0 20px 46px rgba(2, 12, 29, .28);\n}\n.xh-blog-article .article-grid {\n  grid-template-columns: 260px minmax(0, 1fr);\n  gap: 28px;\n  padding-top: 32px;\n  padding-bottom: 58px;\n}\n.xh-blog-article .article-listen {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 14px;\n  padding: 14px 18px;\n  border: 1px solid #cbdcf5;\n  border-radius: 14px;\n  background: #f2f7ff;\n}\n.xh-blog-article .article-listen-copy,\n.xh-blog-article .article-listen-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.xh-blog-article .article-listen-copy div {\n  display: grid;\n  gap: 3px;\n}\n.xh-blog-article .article-listen-copy strong {\n  color: #102b55;\n  font-size: 14px;\n}\n.xh-blog-article .article-listen-copy div span {\n  color: #5e7190;\n  font-size: 12px;\n}\n.xh-blog-article .article-listen-icon {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dceaff;\n  color: #155dc5;\n  font-size: 22px;\n}\n.xh-blog-article .article-listen-actions button {\n  padding: 9px 16px;\n  border: 1px solid #155dc5;\n  border-radius: 999px;\n  background: #155dc5;\n  color: #fff;\n  font: 700 12px var(--body);\n  cursor: pointer;\n}\n.xh-blog-article .article-listen-actions .article-listen-stop {\n  background: #fff;\n  color: #155dc5;\n}\n.xh-blog-article .article-listen-actions button:focus-visible {\n  outline: 3px solid #93bdf5;\n  outline-offset: 2px;\n}\n@media (max-width: 520px) {\n  .xh-blog-article .article-listen {\n    flex-wrap: wrap;\n  }\n  .xh-blog-article .article-listen-actions {\n    width: 100%;\n  }\n}\n.xh-blog-article .article-side-card {\n  margin-bottom: 14px;\n  padding: 18px;\n  border-radius: 16px;\n  box-shadow: 0 12px 30px rgba(5, 38, 84, .05);\n}\n.xh-blog-article .article-side-card h3 {\n  margin-bottom: 12px;\n  font-size: 18px;\n}\n.xh-blog-article .article-facts {\n  gap: 11px;\n}\n.xh-blog-article .article-facts li {\n  padding-bottom: 11px;\n}\n.xh-blog-article .article-toc a {\n  padding: 9px 10px;\n  border-radius: 9px;\n  font-size: 12px;\n}\n.xh-blog-article .article-body {\n  padding: clamp(24px, 4vw, 42px);\n  border: 1px solid #dce6f2;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 18px 48px rgba(5, 38, 84, .065);\n}\n.xh-blog-article .article-body > p:first-child {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e4ebf4;\n  color: #172b44;\n  font-size: 17px;\n  font-weight: 500;\n  line-height: 1.78;\n}\n.xh-blog-article .article-body p {\n  max-width: 76ch;\n  margin-bottom: 20px;\n  color: #34465c;\n  font-size: 15.5px;\n  line-height: 1.82;\n}\n.xh-blog-article .article-body h2 {\n  margin: 36px 0 15px;\n  padding: 16px 0 0 17px;\n  border-top: 1px solid #e0e8f2;\n  color: #071f46;\n  font-size: clamp(24px, 2.4vw, 31px);\n  line-height: 1.2;\n}\n.xh-blog-article .article-body h2::before {\n  content: "";\n  position: absolute;\n  top: 17px;\n  left: 0;\n  width: 4px;\n  height: 1em;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      180deg,\n      #1261ff,\n      #37a9ff);\n}\n.xh-blog-article .article-body ul {\n  gap: 9px;\n  margin-bottom: 24px;\n}\n.xh-blog-article .article-body ul li {\n  padding: 12px 15px 12px 43px;\n  border-radius: 12px;\n  background: #f8fbff;\n  font-size: 14.5px;\n  line-height: 1.65;\n}\n.xh-blog-article .article-body ul li::before {\n  top: 15px;\n  left: 14px;\n  width: 17px;\n  height: 17px;\n  box-shadow: 0 4px 10px rgba(21, 101, 216, .2);\n}\n.xh-blog-article .article-inline-media {\n  margin: 26px 0;\n  padding: 8px;\n  border: 1px solid #dce6f2;\n  border-radius: 16px;\n  background: #f8fbff;\n}\n.xh-blog-article .article-inline-media img {\n  border-radius: 11px;\n  box-shadow: none;\n}\n.xh-blog-article .article-body .article-product-cta p {\n  color: #fff;\n}\n.xh-blog-article .article-product-cta {\n  margin-top: 34px;\n  border-radius: 18px;\n}\n.article-share {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 24px;\n  padding: 22px 24px;\n  border: 1px solid #d6e4f4;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #f7fbff,\n      #edf5ff);\n  box-shadow: 0 12px 30px rgba(4, 30, 66, .07);\n}\n.article-share-copy span {\n  display: block;\n  margin-bottom: 5px;\n  color: #1565d8;\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.article-share-copy h2 {\n  margin: 0;\n  color: var(--navy);\n  font: 750 clamp(20px, 2vw, 26px)/1.2 var(--disp);\n}\n.article-share-actions,\n.article-socials {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.article-share-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 42px;\n  padding: 10px 16px;\n  border: 1px solid #1261ff;\n  border-radius: 999px;\n  background: #1261ff;\n  color: #fff;\n  font: 700 12px/1 var(--body);\n  cursor: pointer;\n  transition:\n    background .2s,\n    border-color .2s,\n    transform .2s;\n}\n.article-share-button svg,\n.article-socials svg {\n  width: 18px;\n  height: 18px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.8;\n}\n.article-share-button:hover {\n  border-color: #084bd4;\n  background: #084bd4;\n  transform: translateY(-2px);\n}\n.article-socials a {\n  display: grid;\n  place-items: center;\n  width: 42px;\n  height: 42px;\n  border: 1px solid #cbdcf0;\n  border-radius: 50%;\n  background: #fff;\n  color: #47647f;\n  transition:\n    color .2s,\n    border-color .2s,\n    background .2s,\n    transform .2s;\n}\n.article-socials .share-facebook svg {\n  fill: currentColor;\n  stroke: none;\n}\n.article-socials a:hover {\n  border-color: currentColor;\n  transform: translateY(-2px);\n}\n.article-socials .share-linkedin:hover {\n  color: #0a66c2;\n  background: #eef7ff;\n}\n.article-socials .share-facebook:hover {\n  color: #1877f2;\n  background: #eef5ff;\n}\n.article-socials .share-x:hover {\n  color: #111;\n  background: #f3f3f3;\n}\n.article-socials .share-whatsapp:hover {\n  color: #128c4a;\n  background: #edfff5;\n}\n.article-socials .share-email:hover {\n  color: #d74a37;\n  background: #fff2ef;\n}\n.article-share-button:focus-visible,\n.article-socials a:focus-visible {\n  outline: 3px solid #1261ff;\n  outline-offset: 3px;\n}\n@media (max-width: 1100px) {\n  .xh-blog-article .article-grid {\n    grid-template-columns: 1fr;\n  }\n  .xh-blog-article .article-sidebar {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 14px;\n  }\n  .xh-blog-article .article-side-card {\n    margin: 0;\n  }\n}\n@media (max-width: 900px) {\n  .xh-blog-article .article-hero .wrap {\n    grid-template-columns: 1fr;\n  }\n  .xh-blog-article .article-cover {\n    height: 250px;\n  }\n  .xh-blog-article .article-sidebar {\n    grid-template-columns: 1fr 1fr;\n  }\n  .xh-blog-article .article-side-cta {\n    grid-column: 1 / -1;\n  }\n}\n@media (max-width: 760px) {\n  .xh-blog-article .article-hero {\n    padding: 27px 0 28px;\n  }\n  .xh-blog-article .article-hero .wrap {\n    gap: 22px;\n  }\n  .xh-blog-article .article-hero h1 {\n    margin-top: 10px;\n    font-size: clamp(26px, 8vw, 34px);\n  }\n  .xh-blog-article .article-hero .lede {\n    font-size: 14.5px;\n  }\n  .xh-blog-article .article-cover {\n    height: 210px;\n  }\n  .xh-blog-article .article-grid {\n    padding: 22px 16px 42px;\n  }\n  .xh-blog-article .article-sidebar {\n    grid-template-columns: 1fr;\n  }\n  .xh-blog-article .article-side-cta {\n    grid-column: auto;\n  }\n  .xh-blog-article .article-body {\n    padding: 22px 18px;\n    border-radius: 16px;\n  }\n  .xh-blog-article .article-body > p:first-child,\n  .xh-blog-article .article-body p {\n    font-size: 15px;\n    line-height: 1.76;\n  }\n  .xh-blog-article .article-body h2 {\n    margin-top: 30px;\n    font-size: clamp(22px, 6.5vw, 28px);\n  }\n  .xh-blog-article .article-body ul li {\n    font-size: 14px;\n  }\n  .article-share {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 20px;\n  }\n  .article-share-actions {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 480px) {\n  .article-socials {\n    flex-wrap: wrap;\n  }\n  .article-socials a {\n    width: 38px;\n    height: 38px;\n  }\n}\n.article-related-carousel {\n  position: relative;\n}\n.article-related-head {\n  flex-wrap: wrap;\n}\n.article-related-head h2 {\n  margin-right: auto;\n}\n.xh-blog-article .article-related-grid {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 14px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  scrollbar-width: none;\n  padding: 5px 0 16px;\n}\n.article-related-grid::-webkit-scrollbar {\n  display: none;\n}\n.xh-blog-article .article-related-grid > .article-related-card {\n  flex: 0 0 calc((100% - 28px) / 3);\n  scroll-snap-align: start;\n}\n.article-related-arrow {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  border: 1px solid #bdd4f7;\n  border-radius: 50%;\n  color: #1565d8;\n  background: #fff;\n  box-shadow: 0 4px 14px rgba(4, 30, 66, .12);\n  font: 28px/1 sans-serif;\n  cursor: pointer;\n  transition: background .2s, color .2s;\n}\n.article-related-arrow.previous {\n  left: -18px;\n}\n.article-related-arrow.next {\n  right: -18px;\n}\n.article-related-arrow:hover {\n  background: #1565d8;\n  color: #fff;\n}\n.article-related-arrow:focus-visible,\n.article-related-grid:focus-visible {\n  outline: 2px solid #1565d8;\n  outline-offset: 3px;\n}\n@media (max-width: 900px) {\n  .xh-blog-article .article-related-grid > .article-related-card {\n    flex-basis: calc((100% - 14px) / 2);\n  }\n}\n@media (max-width: 560px) {\n  .xh-blog-article .article-related-grid > .article-related-card {\n    flex-basis: 86%;\n  }\n  .article-related-arrow.previous {\n    left: -10px;\n  }\n  .article-related-arrow.next {\n    right: -10px;\n  }\n}\n.xh-blog-article .article-related-card {\n  padding: 0 0 20px;\n  overflow: hidden;\n}\n.xh-blog-article .article-related-card > :not(.article-related-cover) {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.article-related-card .article-related-cover {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  margin-bottom: 16px;\n  border-radius: 0;\n  background: #f2f7ff;\n}\n.article-related-card .article-related-cover.is-fallback {\n  padding: 24px;\n  object-fit: contain;\n}\n.article-related-card .article-related-description,\n.article-sibling .article-sibling-description {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  margin: 0 0 18px;\n  color: #607594;\n  font-size: 13px;\n  line-height: 1.65;\n}\n.article-sibling .article-sibling-description {\n  margin: 0;\n}\n.xh-blog-article .article-sibling {\n  padding: 0 0 20px;\n  overflow: hidden;\n  justify-content: flex-start;\n}\n.xh-blog-article .article-sibling > :not(.article-sibling-cover) {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.article-sibling .article-sibling-cover {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n  margin: 0 0 8px;\n  background: #f2f7ff;\n}\n.article-sibling .article-sibling-cover.is-fallback {\n  padding: 24px;\n  object-fit: contain;\n}\n/*# sourceMappingURL=blog.page.css.map */\n', '/* src/app/pages/case-study-detail.page.css */\n:host {\n  display: contents;\n}\n.csd-page {\n  background: #fff;\n}\n.csd-visual {\n  position: relative;\n  isolation: isolate;\n  display: flex;\n  min-height: 270px;\n  height: 270px;\n  overflow: hidden;\n  padding: 30px;\n  flex-direction: column;\n  justify-content: center;\n  color: #fff;\n}\n.csd-visual::before {\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  background:\n    linear-gradient(\n      115deg,\n      rgba(2, 23, 57, .92),\n      rgba(3, 47, 105, .5) 64%,\n      rgba(0, 80, 215, .16));\n  content: "";\n}\n.detail-visual-manufacturing {\n  background:\n    linear-gradient(\n      135deg,\n      #0755b8,\n      #18a3d2);\n}\n.detail-visual-continuity {\n  background:\n    linear-gradient(\n      135deg,\n      #056a88,\n      #13a9a4);\n}\n.detail-visual-privacy {\n  background:\n    linear-gradient(\n      135deg,\n      #252f77,\n      #7453a5);\n}\n.csd-visual > span {\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.csd-visual > strong {\n  display: block;\n  max-width: 650px;\n  margin: 14px 0 10px;\n  font: 750 clamp(30px, 4vw, 48px)/1 var(--disp);\n  letter-spacing: -.04em;\n}\n.csd-visual > p {\n  max-width: 430px;\n  margin: 0;\n  color: #dbeaff;\n  font: 500 17px/1.4 var(--disp);\n}\n.csd-visual svg {\n  position: absolute;\n  right: -60px;\n  bottom: -18px;\n  width: 82%;\n  fill: none;\n  stroke: rgba(255, 255, 255, .18);\n  stroke-linecap: round;\n  stroke-width: 2;\n}\n.csd-outcomes {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 32px;\n}\n.csd-outcomes > div {\n  min-width: 0;\n  padding: 18px;\n  border: 1px solid #d8e6f5;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fbff,\n      #f1f7ff);\n}\n.csd-outcomes strong {\n  display: block;\n  color: #155dc5;\n  font: 750 clamp(23px, 3vw, 34px)/1 var(--disp);\n  letter-spacing: -.03em;\n}\n.csd-outcomes span {\n  display: block;\n  margin-top: 8px;\n  color: #526783;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.csd-copy-section {\n  scroll-margin-top: 110px;\n}\n.csd-section-kicker {\n  display: inline-flex;\n  margin-top: 8px;\n  color: #1565d8;\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.xh-blog-article .article-body .csd-copy-section h2 {\n  margin-top: 12px;\n}\n.csd-copy-section h3 {\n  margin: -4px 0 17px;\n  color: #173052;\n  font: 700 clamp(18px, 2vw, 23px)/1.35 var(--disp);\n}\n.csd-quote {\n  margin: 32px 0 42px;\n  padding: 28px 30px;\n  border-left: 4px solid #1565d8;\n  border-radius: 0 16px 16px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #eef6ff,\n      #f8fbff);\n}\n.xh-blog-article .article-body .csd-quote p {\n  margin: 0 0 16px;\n  color: #071f46;\n  font: 650 20px/1.55 var(--disp);\n}\n.csd-quote cite {\n  display: block;\n  color: #173052;\n  font: 700 12px/1.5 var(--body);\n  font-style: normal;\n}\n.csd-quote span {\n  display: block;\n  margin-top: 3px;\n  color: #71839a;\n  font: 600 9px/1.4 var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.csd-service-flow {\n  display: flex;\n  gap: 8px;\n  margin: 26px 0 32px;\n  padding: 18px;\n  flex-wrap: wrap;\n  border: 1px solid #dbe7f5;\n  border-radius: 14px;\n  background: #f8fbff;\n}\n.csd-service-flow span {\n  padding: 8px 11px;\n  border: 1px solid #bdd4ef;\n  border-radius: 999px;\n  background: #fff;\n  color: #1559b7;\n  font: 700 11px/1.2 var(--body);\n}\n.csd-related-cover {\n  display: flex;\n  min-height: 116px;\n  margin: -20px -20px 16px;\n  padding: 20px;\n  align-items: flex-end;\n  color: #fff;\n}\n.csd-related-cover strong {\n  font: 750 21px/1.2 var(--disp);\n}\n.csd-not-found {\n  padding-top: 70px;\n  padding-bottom: 80px;\n  text-align: center;\n}\n.csd-not-found > span {\n  color: #1565d8;\n  font: 700 12px var(--mono);\n}\n.csd-not-found h1 {\n  margin: 12px 0;\n  font: 750 clamp(34px, 5vw, 58px)/1.1 var(--disp);\n}\n.csd-not-found p {\n  margin: 0 0 24px;\n  color: #526783;\n}\n.csd-not-found a {\n  color: #1565d8;\n  font-weight: 700;\n}\n@media (max-width: 900px) {\n  .csd-outcomes {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .csd-visual {\n    min-height: 220px;\n    height: 220px;\n    padding: 24px;\n  }\n  .csd-visual > strong {\n    font-size: 34px;\n  }\n  .csd-quote {\n    padding: 23px 20px;\n  }\n}\n/*# sourceMappingURL=case-study-detail.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudyDetailPage, { className: "CaseStudyDetailPage", filePath: "src/app/pages/case-study-detail.page.ts", lineNumber: 170 });
})();
export {
  CaseStudyDetailPage
};
//# sourceMappingURL=chunk-QZX7EGN7.js.map
