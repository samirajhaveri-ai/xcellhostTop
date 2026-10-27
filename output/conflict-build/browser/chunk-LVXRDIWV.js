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
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/gcc-cloud.page.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.question;
function GccCloudPage_For_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 23)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1.text);
  }
}
function GccCloudPage_For_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 23)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const use_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(use_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(use_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(use_r2.text);
  }
}
function GccCloudPage_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 25)(1, "summary");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r3.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r3.answer);
  }
}
var GccCloudPage = class _GccCloudPage {
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  features = [
    { icon: "cloud", title: "Flexible infrastructure", text: "Plan compute, storage and networking around your applications and changing team requirements." },
    { icon: "shield", title: "Security at every layer", text: "Bring access controls, endpoint protection and network security into your cloud design." },
    { icon: "groups", title: "Connected teams", text: "Support distributed teams with cloud workspaces and access to shared business applications." },
    { icon: "backup", title: "Backup and recovery", text: "Define backup policies and recovery workflows around the data your business depends on." },
    { icon: "monitoring", title: "Operational visibility", text: "Plan monitoring and reporting to help your team understand usage, performance and capacity." },
    { icon: "support_agent", title: "Managed support", text: "Discuss migration, configuration and ongoing support with the XcellHost team." }
  ];
  uses = [
    { icon: "code", title: "Engineering & development", text: "Bring development environments, testing workloads and shared tools together in the cloud." },
    { icon: "analytics", title: "Data & analytics", text: "Plan infrastructure for reporting, business intelligence and collaborative data projects." },
    { icon: "business_center", title: "Business operations", text: "Connect teams to business applications, shared documents and digital workspaces." }
  ];
  faqs = [
    { question: "What can I host on GCC Cloud?", answer: "Discuss your business applications, development environments, data platforms and team workspaces with our team. We can help scope the infrastructure around your workload requirements." },
    { question: "Can you help with migration?", answer: "Our team can discuss your current environment, dependencies and migration requirements, then help you plan the next steps." },
    { question: "How do I get a price?", answer: "Share your user count, applications, compute, storage and support requirements. We will prepare a quote for your proposed environment." }
  ];
  constructor() {
    inject(SeoService).set("GCC Cloud | XcellHost", "Explore cloud infrastructure, security, team workspaces and managed support for GCC teams.", "/gcc-cloud");
  }
  enquire() {
    this.topics.ask("GCC Cloud");
    this.overlay.open("callback");
  }
  static \u0275fac = function GccCloudPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GccCloudPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GccCloudPage, selectors: [["xh-gcc-cloud-page"]], decls: 103, vars: 0, consts: [[1, "gcc-page"], [1, "gcc-hero"], [1, "wrap", "gcc-hero-grid"], ["aria-label", "Breadcrumb"], ["routerLink", "/"], [1, "gcc-eyebrow"], [1, "gcc-hero-points"], [1, "gcc-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["href", "#gcc-features", 1, "btn", "gcc-outline"], ["role", "img", "aria-label", "Cloud infrastructure connecting applications, data, security and teams", 1, "gcc-visual"], [1, "gcc-orbit"], [1, "gcc-cloud-core"], ["aria-hidden", "true", 1, "material-symbols-outlined"], [1, "gcc-node", "gcc-node-one"], [1, "gcc-node", "gcc-node-two"], [1, "gcc-node", "gcc-node-three"], [1, "gcc-node", "gcc-node-four"], [1, "gcc-section", "wrap"], [1, "gcc-lead"], ["id", "gcc-features", 1, "gcc-features", "gcc-section"], [1, "wrap"], [1, "gcc-card-grid"], [1, "gcc-card"], [1, "gcc-section", "gcc-faq", "wrap"], ["name", "gcc-faq"], [1, "wrap", "gcc-cta-wrap"], [1, "gcc-cta"]], template: function GccCloudPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div")(4, "nav", 3)(5, "a", 4);
      \u0275\u0275text(6, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, " / ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, "Industries");
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, " / ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, "GCC Cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span", 5);
      \u0275\u0275text(14, "CLOUD FOR YOUR TEAMS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h1");
      \u0275\u0275text(16, "GCC Cloud");
      \u0275\u0275element(17, "br");
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Built for your next move.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "Bring your applications, people and data together with cloud infrastructure designed around your business.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 6)(23, "span");
      \u0275\u0275text(24, "Flexible infrastructure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Security & recovery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Managed support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 7)(30, "button", 8);
      \u0275\u0275listener("click", function GccCloudPage_Template_button_click_30_listener() {
        return ctx.enquire();
      });
      \u0275\u0275text(31, "Talk to an expert \u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 9);
      \u0275\u0275text(33, "Explore features");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 10);
      \u0275\u0275element(35, "div", 11);
      \u0275\u0275elementStart(36, "div", 12)(37, "span", 13);
      \u0275\u0275text(38, "cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "strong");
      \u0275\u0275text(40, "GCC CLOUD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "small");
      \u0275\u0275text(42, "Your connected cloud environment");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 14)(44, "span", 13);
      \u0275\u0275text(45, "dns");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "b");
      \u0275\u0275text(47, "Applications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 15)(49, "span", 13);
      \u0275\u0275text(50, "shield");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "b");
      \u0275\u0275text(52, "Security");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 16)(54, "span", 13);
      \u0275\u0275text(55, "database");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "b");
      \u0275\u0275text(57, "Data");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 17)(59, "span", 13);
      \u0275\u0275text(60, "groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "b");
      \u0275\u0275text(62, "Teams");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(63, "section", 18)(64, "span", 5);
      \u0275\u0275text(65, "OVERVIEW");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h2");
      \u0275\u0275text(67, "A cloud foundation for connected operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 19);
      \u0275\u0275text(69, "Your GCC needs an environment that brings people, applications and information together. Explore a cloud approach that combines infrastructure, security, backup and managed support, with the flexibility to plan around your team's needs.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "section", 20)(71, "div", 21)(72, "span", 5);
      \u0275\u0275text(73, "FEATURES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "h2");
      \u0275\u0275text(75, "Build the environment your team needs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 22);
      \u0275\u0275repeaterCreate(77, GccCloudPage_For_78_Template, 7, 3, "article", 23, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "section", 18)(80, "span", 5);
      \u0275\u0275text(81, "USE CASES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h2");
      \u0275\u0275text(83, "One foundation. Many possibilities.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 22);
      \u0275\u0275repeaterCreate(85, GccCloudPage_For_86_Template, 7, 3, "article", 23, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "section", 24)(88, "span", 5);
      \u0275\u0275text(89, "FAQ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "h2");
      \u0275\u0275text(91, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(92, GccCloudPage_For_93_Template, 5, 2, "details", 25, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "section", 26)(95, "div", 27)(96, "div")(97, "h2");
      \u0275\u0275text(98, "Plan your GCC cloud environment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "p");
      \u0275\u0275text(100, "Tell us what your team needs. Let's build a practical starting point.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "button", 8);
      \u0275\u0275listener("click", function GccCloudPage_Template_button_click_101_listener() {
        return ctx.enquire();
      });
      \u0275\u0275text(102, "Let's talk \u2192");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(77);
      \u0275\u0275repeater(ctx.features);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.uses);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.faqs);
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.gcc-page[_ngcontent-%COMP%] {\n  color: #041e42;\n  background: #fff;\n}\n.gcc-page[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  width: 100%;\n  padding-inline: clamp(20px, 4vw, 48px);\n}\n.gcc-hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      ellipse at 80% 30%,\n      #15488080,\n      transparent 60%),\n    linear-gradient(\n      115deg,\n      #0b3469,\n      #041e42);\n  color: #fff;\n  padding: 52px 0 60px;\n  overflow: hidden;\n}\n.gcc-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 48px;\n  align-items: center;\n}\n.gcc-hero[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #a7c4e9;\n  margin-bottom: 32px;\n}\n.gcc-hero[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n.gcc-hero[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #77baff;\n}\n.gcc-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  color: #1764d9;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  margin-bottom: 12px;\n}\n.gcc-hero[_ngcontent-%COMP%]   .gcc-eyebrow[_ngcontent-%COMP%] {\n  color: #79bcff;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(32px, 4vw, 48px);\n  line-height: 1.18;\n  letter-spacing: -1px;\n  margin: 0 0 20px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8fc8ff;\n}\n.gcc-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #bfd3ed;\n  max-width: 580px;\n}\n.gcc-hero-points[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 22px;\n  margin-top: 22px;\n  font-size: 12px;\n  color: #d8e7fb;\n}\n.gcc-hero-points[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  color: #5bdfac;\n  margin-right: 7px;\n}\n.gcc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 28px;\n}\n.gcc-outline[_ngcontent-%COMP%] {\n  border: 1px solid #7897be;\n  color: #fff;\n  background: #ffffff06;\n}\n.gcc-visual[_ngcontent-%COMP%] {\n  position: relative;\n  height: 330px;\n  min-width: 0;\n  display: grid;\n  place-items: center;\n}\n.gcc-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 290px;\n  height: 290px;\n  border: 1px dashed #568aca90;\n  border-radius: 50%;\n}\n.gcc-cloud-core[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  gap: 9px;\n  width: 230px;\n  padding: 30px 14px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #1769dd,\n      #0b326c);\n  border: 1px solid #5a9ee2;\n  box-shadow: 0 24px 60px #0003;\n}\n.gcc-cloud-core[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 64px;\n  color: #c7e7ff;\n}\n.gcc-cloud-core[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: 2px;\n}\n.gcc-cloud-core[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #bfdaff;\n  font-size: 10px;\n}\n.gcc-node[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 14px;\n  color: #10376a;\n  box-shadow: 0 10px 30px #0002;\n  font-size: 11px;\n}\n.gcc-node[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1764d9;\n  font-size: 23px;\n}\n.gcc-node-one[_ngcontent-%COMP%] {\n  left: 0;\n  top: 24px;\n}\n.gcc-node-two[_ngcontent-%COMP%] {\n  right: 0;\n  top: 55px;\n}\n.gcc-node-three[_ngcontent-%COMP%] {\n  left: 10px;\n  bottom: 35px;\n}\n.gcc-node-four[_ngcontent-%COMP%] {\n  right: 5px;\n  bottom: 18px;\n}\n.gcc-section[_ngcontent-%COMP%] {\n  padding-block: 52px;\n  scroll-margin-top: 100px;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 2.5vw, 30px);\n  line-height: 1.3;\n  margin: 0 0 18px;\n  letter-spacing: -.5px;\n}\n.gcc-lead[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.9;\n  color: #566d8c;\n}\n.gcc-features[_ngcontent-%COMP%] {\n  background: #f2f6fc;\n}\n.gcc-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  margin-top: 28px;\n}\n.gcc-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #d7e3f6;\n  border-radius: 16px;\n  padding: 26px;\n  box-shadow: 0 8px 22px #08244b05;\n}\n.gcc-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  background: #eaf2ff;\n  border-radius: 12px;\n  color: #1764d9;\n  margin-bottom: 18px;\n}\n.gcc-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 17px;\n  margin: 0 0 10px;\n}\n.gcc-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.8;\n  color: #60738f;\n  margin: 0;\n}\n.gcc-faq[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.gcc-faq[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  border: 1px solid #d7e3f6;\n  border-radius: 12px;\n  margin-top: 12px;\n  padding: 18px 22px;\n}\n.gcc-faq[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.gcc-faq[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #60738f;\n  font-size: 13px;\n  line-height: 1.8;\n  margin-top: 14px;\n}\n.gcc-cta-wrap[_ngcontent-%COMP%] {\n  padding-bottom: 56px;\n}\n.gcc-cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  padding: 34px;\n  border-radius: 20px;\n  background: #041e42;\n  color: #fff;\n}\n.gcc-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.gcc-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b7cce9;\n  font-size: 14px;\n  margin: 0;\n}\n.gcc-cta[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\na[_ngcontent-%COMP%]:focus-visible, \nbutton[_ngcontent-%COMP%]:focus-visible, \nsummary[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #ff961c;\n  outline-offset: 4px;\n}\n@media (max-width: 850px) {\n  .gcc-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .gcc-visual[_ngcontent-%COMP%] {\n    max-width: 450px;\n    width: 100%;\n    margin: auto;\n  }\n  .gcc-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .gcc-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (max-width: 540px) {\n  .gcc-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .gcc-hero[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .gcc-section[_ngcontent-%COMP%] {\n    padding-block: 36px;\n  }\n  .gcc-visual[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n  .gcc-cloud-core[_ngcontent-%COMP%] {\n    width: 190px;\n  }\n  .gcc-node[_ngcontent-%COMP%] {\n    padding: 10px;\n    gap: 5px;\n    font-size: 10px;\n  }\n  .gcc-orbit[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n  .gcc-cta[_ngcontent-%COMP%] {\n    padding: 26px;\n  }\n}\n/*# sourceMappingURL=gcc-cloud.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GccCloudPage, [{
    type: Component,
    args: [{ selector: "xh-gcc-cloud-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="gcc-page">\r
  <section class="gcc-hero">\r
    <div class="wrap gcc-hero-grid">\r
      <div>\r
        <nav aria-label="Breadcrumb"><a routerLink="/">Home</a><span> / </span>Industries<span> / </span>GCC Cloud</nav>\r
        <span class="gcc-eyebrow">CLOUD FOR YOUR TEAMS</span>\r
        <h1>GCC Cloud<br /><span>Built for your next move.</span></h1>\r
        <p>Bring your applications, people and data together with cloud infrastructure designed around your business.</p>\r
        <div class="gcc-hero-points"><span>Flexible infrastructure</span><span>Security &amp; recovery</span><span>Managed support</span></div>\r
        <div class="gcc-actions"><button type="button" class="btn btn-primary" (click)="enquire()">Talk to an expert &#8594;</button><a class="btn gcc-outline" href="#gcc-features">Explore features</a></div>\r
      </div>\r
      <div class="gcc-visual" role="img" aria-label="Cloud infrastructure connecting applications, data, security and teams">\r
        <div class="gcc-orbit"></div>\r
        <div class="gcc-cloud-core"><span class="material-symbols-outlined" aria-hidden="true">cloud</span><strong>GCC CLOUD</strong><small>Your connected cloud environment</small></div>\r
        <div class="gcc-node gcc-node-one"><span class="material-symbols-outlined" aria-hidden="true">dns</span><b>Applications</b></div>\r
        <div class="gcc-node gcc-node-two"><span class="material-symbols-outlined" aria-hidden="true">shield</span><b>Security</b></div>\r
        <div class="gcc-node gcc-node-three"><span class="material-symbols-outlined" aria-hidden="true">database</span><b>Data</b></div>\r
        <div class="gcc-node gcc-node-four"><span class="material-symbols-outlined" aria-hidden="true">groups</span><b>Teams</b></div>\r
      </div>\r
    </div>\r
  </section>\r
  <section class="gcc-section wrap">\r
    <span class="gcc-eyebrow">OVERVIEW</span><h2>A cloud foundation for connected operations</h2>\r
    <p class="gcc-lead">Your GCC needs an environment that brings people, applications and information together. Explore a cloud approach that combines infrastructure, security, backup and managed support, with the flexibility to plan around your team's needs.</p>\r
  </section>\r
  <section class="gcc-features gcc-section" id="gcc-features">\r
    <div class="wrap"><span class="gcc-eyebrow">FEATURES</span><h2>Build the environment your team needs</h2>\r
      <div class="gcc-card-grid">@for (feature of features; track feature.title) {<article class="gcc-card"><span class="material-symbols-outlined" aria-hidden="true">{{ feature.icon }}</span><h3>{{ feature.title }}</h3><p>{{ feature.text }}</p></article>}</div>\r
    </div>\r
  </section>\r
  <section class="gcc-section wrap">\r
    <span class="gcc-eyebrow">USE CASES</span><h2>One foundation. Many possibilities.</h2>\r
    <div class="gcc-card-grid">@for (use of uses; track use.title) {<article class="gcc-card"><span class="material-symbols-outlined" aria-hidden="true">{{ use.icon }}</span><h3>{{ use.title }}</h3><p>{{ use.text }}</p></article>}</div>\r
  </section>\r
  <section class="gcc-section gcc-faq wrap">\r
    <span class="gcc-eyebrow">FAQ</span><h2>Frequently asked questions</h2>\r
    @for (faq of faqs; track faq.question) {<details name="gcc-faq"><summary>{{ faq.question }}</summary><p>{{ faq.answer }}</p></details>}\r
  </section>\r
  <section class="wrap gcc-cta-wrap"><div class="gcc-cta"><div><h2>Plan your GCC cloud environment</h2><p>Tell us what your team needs. Let's build a practical starting point.</p></div><button type="button" class="btn btn-primary" (click)="enquire()">Let's talk &#8594;</button></div></section>\r
</main>\r
`, styles: ['/* src/app/pages/gcc-cloud.page.css */\n:host {\n  display: block;\n}\n.gcc-page {\n  color: #041e42;\n  background: #fff;\n}\n.gcc-page .wrap {\n  max-width: 1240px;\n  width: 100%;\n  padding-inline: clamp(20px, 4vw, 48px);\n}\n.gcc-hero {\n  background:\n    radial-gradient(\n      ellipse at 80% 30%,\n      #15488080,\n      transparent 60%),\n    linear-gradient(\n      115deg,\n      #0b3469,\n      #041e42);\n  color: #fff;\n  padding: 52px 0 60px;\n  overflow: hidden;\n}\n.gcc-hero-grid {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 48px;\n  align-items: center;\n}\n.gcc-hero nav {\n  font-size: 11px;\n  color: #a7c4e9;\n  margin-bottom: 32px;\n}\n.gcc-hero nav span {\n  padding: 0 8px;\n}\n.gcc-hero nav a {\n  color: #77baff;\n}\n.gcc-eyebrow {\n  display: block;\n  color: #1764d9;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 2px;\n  margin-bottom: 12px;\n}\n.gcc-hero .gcc-eyebrow {\n  color: #79bcff;\n}\nh1 {\n  font-size: clamp(32px, 4vw, 48px);\n  line-height: 1.18;\n  letter-spacing: -1px;\n  margin: 0 0 20px;\n}\nh1 span {\n  color: #8fc8ff;\n}\n.gcc-hero p {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #bfd3ed;\n  max-width: 580px;\n}\n.gcc-hero-points {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 22px;\n  margin-top: 22px;\n  font-size: 12px;\n  color: #d8e7fb;\n}\n.gcc-hero-points span::before {\n  content: "\\2713";\n  color: #5bdfac;\n  margin-right: 7px;\n}\n.gcc-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 28px;\n}\n.gcc-outline {\n  border: 1px solid #7897be;\n  color: #fff;\n  background: #ffffff06;\n}\n.gcc-visual {\n  position: relative;\n  height: 330px;\n  min-width: 0;\n  display: grid;\n  place-items: center;\n}\n.gcc-orbit {\n  position: absolute;\n  width: 290px;\n  height: 290px;\n  border: 1px dashed #568aca90;\n  border-radius: 50%;\n}\n.gcc-cloud-core {\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  gap: 9px;\n  width: 230px;\n  padding: 30px 14px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #1769dd,\n      #0b326c);\n  border: 1px solid #5a9ee2;\n  box-shadow: 0 24px 60px #0003;\n}\n.gcc-cloud-core > span {\n  font-size: 64px;\n  color: #c7e7ff;\n}\n.gcc-cloud-core strong {\n  font-size: 20px;\n  letter-spacing: 2px;\n}\n.gcc-cloud-core small {\n  color: #bfdaff;\n  font-size: 10px;\n}\n.gcc-node {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  background: #fff;\n  border-radius: 12px;\n  padding: 14px;\n  color: #10376a;\n  box-shadow: 0 10px 30px #0002;\n  font-size: 11px;\n}\n.gcc-node > span {\n  color: #1764d9;\n  font-size: 23px;\n}\n.gcc-node-one {\n  left: 0;\n  top: 24px;\n}\n.gcc-node-two {\n  right: 0;\n  top: 55px;\n}\n.gcc-node-three {\n  left: 10px;\n  bottom: 35px;\n}\n.gcc-node-four {\n  right: 5px;\n  bottom: 18px;\n}\n.gcc-section {\n  padding-block: 52px;\n  scroll-margin-top: 100px;\n}\nh2 {\n  font-size: clamp(24px, 2.5vw, 30px);\n  line-height: 1.3;\n  margin: 0 0 18px;\n  letter-spacing: -.5px;\n}\n.gcc-lead {\n  font-size: 15px;\n  line-height: 1.9;\n  color: #566d8c;\n}\n.gcc-features {\n  background: #f2f6fc;\n}\n.gcc-card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  margin-top: 28px;\n}\n.gcc-card {\n  background: #fff;\n  border: 1px solid #d7e3f6;\n  border-radius: 16px;\n  padding: 26px;\n  box-shadow: 0 8px 22px #08244b05;\n}\n.gcc-card > span {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  background: #eaf2ff;\n  border-radius: 12px;\n  color: #1764d9;\n  margin-bottom: 18px;\n}\n.gcc-card h3 {\n  font-size: 17px;\n  margin: 0 0 10px;\n}\n.gcc-card p {\n  font-size: 13px;\n  line-height: 1.8;\n  color: #60738f;\n  margin: 0;\n}\n.gcc-faq {\n  padding-top: 16px;\n}\n.gcc-faq details {\n  border: 1px solid #d7e3f6;\n  border-radius: 12px;\n  margin-top: 12px;\n  padding: 18px 22px;\n}\n.gcc-faq summary {\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n}\n.gcc-faq details p {\n  color: #60738f;\n  font-size: 13px;\n  line-height: 1.8;\n  margin-top: 14px;\n}\n.gcc-cta-wrap {\n  padding-bottom: 56px;\n}\n.gcc-cta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  padding: 34px;\n  border-radius: 20px;\n  background: #041e42;\n  color: #fff;\n}\n.gcc-cta h2 {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n.gcc-cta p {\n  color: #b7cce9;\n  font-size: 14px;\n  margin: 0;\n}\n.gcc-cta button {\n  flex-shrink: 0;\n}\na:focus-visible,\nbutton:focus-visible,\nsummary:focus-visible {\n  outline: 3px solid #ff961c;\n  outline-offset: 4px;\n}\n@media (max-width: 850px) {\n  .gcc-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .gcc-visual {\n    max-width: 450px;\n    width: 100%;\n    margin: auto;\n  }\n  .gcc-card-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .gcc-cta {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (max-width: 540px) {\n  .gcc-card-grid {\n    grid-template-columns: 1fr;\n  }\n  .gcc-hero {\n    padding-top: 30px;\n  }\n  .gcc-section {\n    padding-block: 36px;\n  }\n  .gcc-visual {\n    height: 300px;\n  }\n  .gcc-cloud-core {\n    width: 190px;\n  }\n  .gcc-node {\n    padding: 10px;\n    gap: 5px;\n    font-size: 10px;\n  }\n  .gcc-orbit {\n    width: 250px;\n    height: 250px;\n  }\n  .gcc-cta {\n    padding: 26px;\n  }\n}\n/*# sourceMappingURL=gcc-cloud.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GccCloudPage, { className: "GccCloudPage", filePath: "src/app/pages/gcc-cloud.page.ts", lineNumber: 15 });
})();
export {
  GccCloudPage
};
//# sourceMappingURL=chunk-LVXRDIWV.js.map
