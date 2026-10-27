import {
  TestimonialsComponent,
  TrustBarComponent
} from "./chunk-UJO3GVNO.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  LeadService
} from "./chunk-MAWJHU3X.js";
import {
  HERO_WORDS,
  SITE
} from "./chunk-LN7P5EZP.js";
import {
  InsightsSectionComponent,
  RevealDirective
} from "./chunk-3UBXKXB6.js";
import "./chunk-6DVXASVN.js";
import "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import "./chunk-M5OSJJBF.js";
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
  DestroyRef,
  ViewChild,
  ViewChildren,
  computed,
  inject,
  setClassMetadata,
  signal,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuerySignal
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/sections/experience-hub.component.ts
var _c0 = () => ({ category: "experiences" });
var _forTrack0 = ($index, $item) => $item.title;
function ExperienceHubComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 21)(1, "div", 6)(2, "span", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 23);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "span", 18);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 19);
    \u0275\u0275text(14, "Explore");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275classMap("hub-card hub-small " + card_r1.theme);
    \u0275\u0275property("routerLink", card_r1.route)("queryParams", card_r1.params);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.art);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.description);
  }
}
var ExperienceHubComponent = class _ExperienceHubComponent {
  cards = [
    { title: "AI Marketplace", label: "INTELLIGENCE FOR YOUR BUSINESS", description: "Explore AI solutions for smarter everyday work.", icon: "auto_awesome", art: "neurology", theme: "hub-ai", category: "ai" },
    { title: "Managed Services", label: "EXPERTS BY YOUR SIDE", description: "Keep your cloud running with expert support.", icon: "support_agent", art: "headset_mic", theme: "hub-managed", category: "managed" },
    { title: "Software Marketplace", label: "EQUIP YOUR TEAM", description: "Find the software your business needs.", icon: "apps", art: "verified_user", theme: "hub-licenses", category: "licenses" },
    { title: "Professional Services", label: "PLAN. IMPLEMENT. GROW.", description: "Get expert guidance for your next project.", icon: "person", art: "extension", theme: "hub-professional", category: "professional" },
    { title: "Accelerators", label: "MOVE YOUR IDEAS FORWARD", description: "Find a faster path from planning to delivery.", icon: "rocket_launch", art: "rocket_launch", theme: "hub-accelerators", category: "accelerators" },
    { title: "Explore Marketplace", label: "DISCOVER YOUR NEXT SOLUTION", description: "Browse our curated products and offers.", icon: "shopping_bag", art: "shopping_bag", theme: "hub-souq", category: "all" },
    { title: "Vendor Alliances", label: "STRONGER TOGETHER", description: "Connect with our partner ecosystem.", icon: "groups", art: "handshake", theme: "hub-alliances", category: "alliances" }
  ].map((card) => __spreadProps(__spreadValues({}, card), {
    route: card.category === "alliances" ? "/company/vendor-partners" : card.category === "accelerators" ? "/about-us" : card.category === "professional" ? "/contact" : card.category === "all" ? "/marketplace" : "/explore-marketplace",
    params: card.category === "professional" ? { service: card.title } : card.category === "all" || card.category === "alliances" || card.category === "accelerators" ? {} : { category: card.category }
  }));
  static \u0275fac = function ExperienceHubComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExperienceHubComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExperienceHubComponent, selectors: [["xh-experience-hub"]], decls: 41, vars: 2, consts: [["aria-labelledby", "experience-hub-title", 1, "experience-hub"], [1, "wrap"], [1, "hub-heading"], ["id", "experience-hub-title"], [1, "hub-grid"], ["routerLink", "/explore-marketplace", 1, "hub-card", "hub-feature", 3, "queryParams"], [1, "hub-card-top"], [1, "hub-label"], ["aria-hidden", "true", 1, "cloud-scene"], [1, "scene-orbit", "orbit-one"], [1, "scene-orbit", "orbit-two"], [1, "scene-chip", "chip-one", "material-symbols-outlined"], [1, "scene-chip", "chip-two", "material-symbols-outlined"], [1, "scene-chip", "chip-three", "material-symbols-outlined"], [1, "scene-core"], [1, "material-symbols-outlined"], [1, "scene-base"], [1, "hub-feature-copy"], [1, "hub-mini"], [1, "hub-link"], [1, "hub-card", "hub-small", 3, "class", "routerLink", "queryParams"], [1, "hub-card", "hub-small", 3, "routerLink", "queryParams"], ["aria-hidden", "true", 1, "hub-icon", "material-symbols-outlined"], ["aria-hidden", "true", 1, "hub-art", "material-symbols-outlined"], [1, "hub-card-copy"]], template: function ExperienceHubComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
      \u0275\u0275text(5, "XcellHost Cloud Marketplace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7, "Build. Buy. Deploy. Explore cloud experiences, services and software with XcellHost.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "a", 5)(10, "div", 6)(11, "span", 7);
      \u0275\u0275text(12, "COMPLETE CLOUD EXPERIENCES");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275element(14, "div", 9)(15, "div", 10);
      \u0275\u0275elementStart(16, "span", 11);
      \u0275\u0275text(17, "database");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19, "shield");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 13);
      \u0275\u0275text(21, "hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "span", 15);
      \u0275\u0275text(24, "cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "b");
      \u0275\u0275text(26, "XCELLHOST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "small");
      \u0275\u0275text(28, "CONNECTED BY DESIGN");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(29, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 17)(31, "span", 18);
      \u0275\u0275text(32, "FROM IDEA TO EVERYDAY OPERATIONS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h3");
      \u0275\u0275text(34, "Experiences");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p");
      \u0275\u0275text(36, "Bring your applications, data and teams together with managed cloud experiences for your business.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span", 19);
      \u0275\u0275text(38, "Explore");
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(39, ExperienceHubComponent_For_40_Template, 15, 9, "a", 20, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(1, _c0));
      \u0275\u0275advance(30);
      \u0275\u0275repeater(ctx.cards);
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.experience-hub[_ngcontent-%COMP%] {\n  padding: 80px 0 64px;\n  background: #f7f9fd;\n  color: #102342;\n}\n.hub-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 28px;\n  margin-bottom: 30px;\n}\n.hub-kicker[_ngcontent-%COMP%], \n.hub-mini[_ngcontent-%COMP%], \n.hub-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 750;\n  letter-spacing: .13em;\n}\n.hub-kicker[_ngcontent-%COMP%] {\n  color: #1565d8;\n}\n.hub-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 3.3vw, 44px);\n  line-height: 1.16;\n  letter-spacing: -.04em;\n  margin: 12px 0;\n}\n.hub-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #63738b;\n  max-width: 660px;\n  margin: 0;\n  line-height: 1.7;\n}\n.hub-all[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 13px;\n  font-weight: 700;\n  color: #1565d8;\n  padding-bottom: 5px;\n}\n.hub-all[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.hub-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n.hub-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #dde5f1;\n  border-radius: 22px;\n  text-decoration: none;\n  color: inherit;\n  isolation: isolate;\n  transition: transform .22s, box-shadow .22s;\n}\n.hub-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 32px #12336114;\n}\n.hub-card[_ngcontent-%COMP%]:focus-visible, \n.hub-all[_ngcontent-%COMP%]:focus-visible, \n.hub-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #1565d8;\n  outline-offset: 4px;\n}\n.hub-feature[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  grid-row: span 2;\n  background:\n    linear-gradient(\n      145deg,\n      #e8f2ff,\n      #f0f5ff 45%,\n      #dce8fc);\n  min-height: 456px;\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hub-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  z-index: 2;\n}\n.hub-label[_ngcontent-%COMP%] {\n  color: #356394;\n}\n.hub-arrow[_ngcontent-%COMP%] {\n  width: 29px;\n  height: 29px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: #ffffff80;\n  font-size: 19px;\n}\n.hub-feature[_ngcontent-%COMP%]   .hub-arrow[_ngcontent-%COMP%] {\n  background: #1565d8;\n  color: white;\n}\n.hub-feature-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 370px;\n  margin-top: 230px;\n}\n.hub-mini[_ngcontent-%COMP%] {\n  color: #546a87;\n  font-size: 9px;\n}\n.hub-feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 31px;\n  letter-spacing: -.035em;\n  line-height: 1.16;\n  margin: 10px 0;\n}\n.hub-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #526982;\n  max-width: 340px;\n  margin: 0 0 18px;\n}\n.hub-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 750;\n  color: #1565d8;\n}\n.hub-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.hub-small[_ngcontent-%COMP%] {\n  min-height: 218px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hub-ai[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  background:\n    linear-gradient(\n      115deg,\n      #efeaff,\n      #e7e3fb);\n}\n.hub-security[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e9f6ef,\n      #dceee8);\n}\n.hub-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff5e7,\n      #f6ead7);\n}\n.hub-domain[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  background:\n    linear-gradient(\n      115deg,\n      #e4f5f8,\n      #deedf7);\n  min-height: 190px;\n}\n.hub-offers[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  background:\n    linear-gradient(\n      115deg,\n      #fff0eb,\n      #f8e3e5);\n  min-height: 190px;\n}\n.hub-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: #ffffffd9;\n  color: #3569bd;\n  font-size: 21px;\n  box-shadow: 0 5px 12px #173c6610;\n}\n.hub-card-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 75%;\n  margin-top: 26px;\n}\n.hub-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 21px;\n  letter-spacing: -.025em;\n  line-height: 1.15;\n  margin: 7px 0;\n}\n.hub-card-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.6;\n  color: #5c6d82;\n  margin: 0;\n  max-width: 245px;\n}\n.hub-art[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  top: 54px;\n  font-size: 100px;\n  color: #5085b7;\n  opacity: .2;\n  transform: rotate(-12deg);\n  z-index: 0;\n}\n.hub-ai[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n  font-size: 155px;\n  right: 50px;\n  top: 33px;\n  color: #7853d6;\n  opacity: .28;\n}\n.hub-domain[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%], \n.hub-offers[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n  font-size: 130px;\n  right: 38px;\n  top: 30px;\n}\n.hub-offers[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n  color: #dc7b68;\n}\n.hub-foot[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 18px;\n  margin-top: 24px;\n  font-size: 12px;\n  color: #687990;\n}\n.hub-foot[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22a47a;\n  margin-right: 8px;\n}\n.hub-foot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1565d8;\n  font-weight: 700;\n}\n.cloud-scene[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  height: 250px;\n  top: 60px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.scene-core[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 80px;\n  top: 40px;\n  width: 148px;\n  height: 142px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      140deg,\n      #fff,\n      #c8ddff);\n  border: 2px solid #fff;\n  border-radius: 30px;\n  box-shadow: 12px 16px 0 #b5cdf0, 20px 28px 28px #3665aa24;\n  transform: rotate(-7deg);\n  z-index: 2;\n}\n.scene-core[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 68px;\n  color: #1565d8;\n}\n.scene-core[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 13px;\n  letter-spacing: .08em;\n  color: #134b98;\n}\n.scene-core[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 6px;\n  letter-spacing: .14em;\n  margin-top: 6px;\n  color: #5278ad;\n}\n.scene-base[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 230px;\n  height: 62px;\n  border-radius: 50%;\n  background: linear-gradient(#e9f1ff, #b9d0f2);\n  bottom: 12px;\n  left: 42px;\n  box-shadow: 0 9px 0 #cadcf5;\n}\n.scene-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px dashed #a9c4e8;\n  border-radius: 50%;\n  width: 285px;\n  height: 165px;\n  top: 43px;\n  left: 8px;\n  transform: rotate(-25deg);\n}\n.orbit-two[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n}\n.scene-chip[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  width: 48px;\n  height: 48px;\n  background: #ffffffd9;\n  border: 1px solid #fff;\n  border-radius: 15px;\n  box-shadow: 0 8px 15px #22519a18;\n  color: #3978d2;\n  z-index: 3;\n  font-size: 27px;\n}\n.chip-one[_ngcontent-%COMP%] {\n  left: 8px;\n  top: 49px;\n  transform: rotate(-12deg);\n}\n.chip-two[_ngcontent-%COMP%] {\n  right: 0;\n  top: 12px;\n  color: #26968a;\n  transform: rotate(12deg);\n}\n.chip-three[_ngcontent-%COMP%] {\n  right: 4px;\n  bottom: 38px;\n  color: #8860d3;\n  transform: rotate(8deg);\n}\n@media (min-width: 1200px) {\n  .hub-feature[_ngcontent-%COMP%] {\n    min-height: 470px;\n  }\n}\n@media (max-width: 760px) {\n  .experience-hub[_ngcontent-%COMP%] {\n    padding: 48px 0;\n  }\n  .hub-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 18px;\n  }\n  .hub-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .hub-feature[_ngcontent-%COMP%] {\n    grid-row: auto;\n    min-height: 450px;\n  }\n  .hub-ai[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n  .hub-domain[_ngcontent-%COMP%], \n   .hub-offers[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .hub-small[_ngcontent-%COMP%] {\n    padding: 18px;\n    min-height: 220px;\n  }\n  .hub-card-copy[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .hub-art[_ngcontent-%COMP%], \n   .hub-domain[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%], \n   .hub-offers[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n    font-size: 90px;\n    right: 8px;\n    top: 36px;\n    opacity: .14;\n  }\n  .hub-foot[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hub-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 380px) {\n  .hub-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hub-card[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n  .hub-small[_ngcontent-%COMP%] {\n    min-height: 200px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hub-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .hub-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n.hub-feature[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #edf5ff,\n      #dce9fc);\n  min-height: 460px;\n}\n.hub-ai[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      #092b58,\n      #164e95);\n  color: #fff;\n}\n.hub-ai[_ngcontent-%COMP%]   .hub-mini[_ngcontent-%COMP%], \n.hub-ai[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c6dbf7;\n}\n.hub-ai[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.hub-ai[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n  color: #8ab4ff;\n  opacity: .35;\n}\n.hub-ai[_ngcontent-%COMP%]   .hub-arrow[_ngcontent-%COMP%] {\n  background: #ffffff20;\n  color: #fff;\n}\n.hub-managed[_ngcontent-%COMP%], \n.hub-professional[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eef5ff,\n      #dce9fa);\n}\n.hub-licenses[_ngcontent-%COMP%], \n.hub-souq[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff5e9,\n      #ffe5c6);\n}\n.hub-accelerators[_ngcontent-%COMP%], \n.hub-alliances[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f1fc,\n      #d6e6f9);\n}\n.hub-licenses[_ngcontent-%COMP%]   .hub-icon[_ngcontent-%COMP%], \n.hub-souq[_ngcontent-%COMP%]   .hub-icon[_ngcontent-%COMP%] {\n  color: #d56a08;\n}\n.hub-licenses[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%], \n.hub-souq[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n  color: #ed8b25;\n}\n.hub-small[_ngcontent-%COMP%]:not(.hub-ai) {\n  grid-column: span 1;\n  min-height: 218px;\n}\n.hub-small[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.hub-small[_ngcontent-%COMP%]:not(.hub-ai)   .hub-art[_ngcontent-%COMP%] {\n  font-size: 90px;\n  top: 42px;\n  right: 10px;\n  opacity: .16;\n}\n.hub-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.chip-two[_ngcontent-%COMP%], \n.chip-three[_ngcontent-%COMP%] {\n  color: #1565d8;\n}\n@media (max-width: 760px) {\n  .hub-feature[_ngcontent-%COMP%] {\n    min-height: 450px;\n  }\n  .hub-small[_ngcontent-%COMP%]:not(.hub-ai) {\n    min-height: 220px;\n  }\n  .hub-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 380px) {\n  .hub-ai[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f2f7ff 0%,\n      #e3edfc 100%);\n  border-color: #cdddf3;\n  color: #041e42;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #edf5ff,\n      #dce9fc);\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #041e42;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   .hub-mini[_ngcontent-%COMP%] {\n  color: #356394;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #526982;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-icon[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1565d8;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n  color: #1565d8;\n  opacity: .16;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-arrow[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1565d8;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%]   .hub-arrow[_ngcontent-%COMP%] {\n  background: #1565d8;\n  color: #fff;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]:hover {\n  border-color: #8ab4ee;\n  box-shadow: 0 12px 28px rgba(21, 101, 216, .12);\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--card-start),\n      var(--card-end));\n  border-color: var(--card-border);\n  color: #172b38;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%] {\n  --card-start:#fff0df;\n  --card-end:#f4cba8;\n  --card-border:#e8b98e;\n  --card-accent:#934611;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-ai[_ngcontent-%COMP%] {\n  --card-start:#ffe7ef;\n  --card-end:#f5bfd1;\n  --card-border:#e8a6be;\n  --card-accent:#982d58;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-managed[_ngcontent-%COMP%] {\n  --card-start:#fff3c9;\n  --card-end:#edda94;\n  --card-border:#d7c074;\n  --card-accent:#735614;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-licenses[_ngcontent-%COMP%] {\n  --card-start:#ddf5f3;\n  --card-end:#a9dcd6;\n  --card-border:#8fc9c2;\n  --card-accent:#19685f;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-professional[_ngcontent-%COMP%] {\n  --card-start:#f1e6f7;\n  --card-end:#d9bce8;\n  --card-border:#c7a4db;\n  --card-accent:#704191;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-accelerators[_ngcontent-%COMP%] {\n  --card-start:#eef4d5;\n  --card-end:#c9dea0;\n  --card-border:#b2cb83;\n  --card-accent:#4d6926;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-souq[_ngcontent-%COMP%] {\n  --card-start:#f8e7dc;\n  --card-end:#dcb9a5;\n  --card-border:#cba18a;\n  --card-accent:#794b35;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-alliances[_ngcontent-%COMP%] {\n  --card-start:#e4eef4;\n  --card-end:#b6cbd9;\n  --card-border:#9bb6c8;\n  --card-accent:#395f77;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #172b38;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   .hub-mini[_ngcontent-%COMP%], \n.experience-hub[_ngcontent-%COMP%]   .hub-label[_ngcontent-%COMP%] {\n  color: var(--card-accent);\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #374b56;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-icon[_ngcontent-%COMP%] {\n  background: #fffffff0;\n  color: var(--card-accent);\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n  color: var(--card-accent);\n  opacity: .22;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-arrow[_ngcontent-%COMP%] {\n  background: #ffffffc9;\n  color: var(--card-accent);\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-link[_ngcontent-%COMP%] {\n  color: var(--card-accent);\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--card-accent);\n  box-shadow: 0 12px 28px rgba(35, 48, 54, .16);\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%]:not(.hub-ai) {\n  min-height: 190px;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n@media (max-width: 760px) {\n  .experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%]:not(.hub-ai) {\n    min-height: 190px;\n  }\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  grid-row: span 2;\n  min-height: 370px;\n  padding: 20px;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-ai[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  min-height: 175px;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%]:not(.hub-ai) {\n  min-height: 175px;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%]   .cloud-scene[_ngcontent-%COMP%] {\n  top: 42px;\n  transform: translateX(-50%) scale(.72);\n  transform-origin: top center;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature-copy[_ngcontent-%COMP%] {\n  margin-top: 166px;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 27px;\n  margin: 8px 0;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n@media (max-width: 760px) {\n  .experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%] {\n    grid-row: auto;\n    min-height: 370px;\n    padding: 18px;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%]:not(.hub-ai) {\n    min-height: 175px;\n  }\n}\n@media (max-width: 380px) {\n  .experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-ai[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   .hub-mini[_ngcontent-%COMP%], \n.experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   .hub-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%]   .hub-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n}\n@media (hover: hover) and (pointer: fine) {\n  .experience-hub[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-feature-copy[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 20px;\n    right: 20px;\n    bottom: 20px;\n    margin: 0;\n    max-width: none;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-feature-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%]   .hub-link[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-feature-copy[_ngcontent-%COMP%]   .hub-link[_ngcontent-%COMP%] {\n    max-height: 0;\n    opacity: 0;\n    overflow: hidden;\n    margin: 0;\n    visibility: hidden;\n    transition:\n      opacity .2s,\n      max-height .2s,\n      margin .2s;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]:focus-visible   p[_ngcontent-%COMP%] {\n    max-height: 120px;\n    opacity: 1;\n    visibility: visible;\n    margin-top: 8px;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]:hover   .hub-link[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]:focus-visible   .hub-link[_ngcontent-%COMP%] {\n    max-height: 30px;\n    opacity: 1;\n    visibility: visible;\n    margin-top: 10px;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]:hover   .hub-art[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]:focus-visible   .hub-art[_ngcontent-%COMP%] {\n    opacity: .08;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%]:hover   .cloud-scene[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%]:focus-visible   .cloud-scene[_ngcontent-%COMP%] {\n    opacity: .35;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-card[_ngcontent-%COMP%]   .hub-link[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%] {\n  min-height: 300px;\n  height: 300px;\n  align-self: start;\n  padding: 18px;\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%]   .cloud-scene[_ngcontent-%COMP%] {\n  top: 24px;\n  transform: translateX(-50%) scale(.58);\n}\n.experience-hub[_ngcontent-%COMP%]   .hub-feature-copy[_ngcontent-%COMP%] {\n  margin-top: 128px;\n}\n@media (hover: hover) and (pointer: fine) {\n  .experience-hub[_ngcontent-%COMP%]   .hub-feature-copy[_ngcontent-%COMP%] {\n    margin-top: 0;\n    bottom: 18px;\n  }\n}\n@media (hover: none) {\n  .experience-hub[_ngcontent-%COMP%]   .hub-feature[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 300px;\n  }\n}\n@media (min-width: 761px) and (hover: hover) and (pointer: fine) {\n  .experience-hub[_ngcontent-%COMP%]   .hub-grid[_ngcontent-%COMP%] {\n    grid-template-rows: 142px 142px auto;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-small.hub-ai[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-small.hub-managed[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-small.hub-licenses[_ngcontent-%COMP%] {\n    min-height: 0;\n    height: 142px;\n    box-sizing: border-box;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-ai[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-managed[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-licenses[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%] {\n    left: 16px;\n    right: 16px;\n    bottom: 14px;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-ai[_ngcontent-%COMP%]:hover   .hub-icon[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-managed[_ngcontent-%COMP%]:hover   .hub-icon[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-licenses[_ngcontent-%COMP%]:hover   .hub-icon[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-ai[_ngcontent-%COMP%]:focus-visible   .hub-icon[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-managed[_ngcontent-%COMP%]:focus-visible   .hub-icon[_ngcontent-%COMP%], \n   .experience-hub[_ngcontent-%COMP%]   .hub-licenses[_ngcontent-%COMP%]:focus-visible   .hub-icon[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-small[_ngcontent-%COMP%]   .hub-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .experience-hub[_ngcontent-%COMP%]   .hub-ai[_ngcontent-%COMP%]   .hub-art[_ngcontent-%COMP%] {\n    font-size: 100px;\n    top: 18px;\n  }\n}\n/*# sourceMappingURL=experience-hub.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExperienceHubComponent, [{
    type: Component,
    args: [{ selector: "xh-experience-hub", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="experience-hub" aria-labelledby="experience-hub-title">
      <div class="wrap">
        <div class="hub-heading">
          <div>
            <h2 id="experience-hub-title">XcellHost Cloud Marketplace</h2>
            <p>Build. Buy. Deploy. Explore cloud experiences, services and software with XcellHost.</p>
          </div>
        </div>
        <div class="hub-grid">
          <a class="hub-card hub-feature" routerLink="/explore-marketplace" [queryParams]="{ category: 'experiences' }">
            <div class="hub-card-top"><span class="hub-label">COMPLETE CLOUD EXPERIENCES</span></div>
            <div class="cloud-scene" aria-hidden="true">
              <div class="scene-orbit orbit-one"></div><div class="scene-orbit orbit-two"></div>
              <span class="scene-chip chip-one material-symbols-outlined">database</span>
              <span class="scene-chip chip-two material-symbols-outlined">shield</span>
              <span class="scene-chip chip-three material-symbols-outlined">hub</span>
              <div class="scene-core"><span class="material-symbols-outlined">cloud</span><b>XCELLHOST</b><small>CONNECTED BY DESIGN</small></div>
              <div class="scene-base"></div>
            </div>
            <div class="hub-feature-copy"><span class="hub-mini">FROM IDEA TO EVERYDAY OPERATIONS</span><h3>Experiences</h3><p>Bring your applications, data and teams together with managed cloud experiences for your business.</p><span class="hub-link">Explore</span></div>
          </a>
          @for (card of cards; track card.title) {
            <a class="hub-card hub-small" [class]="'hub-card hub-small ' + card.theme" [routerLink]="card.route" [queryParams]="card.params">
              <div class="hub-card-top"><span class="hub-icon material-symbols-outlined" aria-hidden="true">{{ card.icon }}</span></div>
              <span class="hub-art material-symbols-outlined" aria-hidden="true">{{ card.art }}</span>
              <div class="hub-card-copy"><span class="hub-mini">{{ card.label }}</span><h3>{{ card.title }}</h3><p>{{ card.description }}</p><span class="hub-link">Explore</span></div>
            </a>
          }
        </div>
      </div>
    </section>
  `, styles: ["/* src/app/sections/experience-hub.component.css */\n:host {\n  display: block;\n}\n.experience-hub {\n  padding: 80px 0 64px;\n  background: #f7f9fd;\n  color: #102342;\n}\n.hub-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 28px;\n  margin-bottom: 30px;\n}\n.hub-kicker,\n.hub-mini,\n.hub-label {\n  font-size: 10px;\n  font-weight: 750;\n  letter-spacing: .13em;\n}\n.hub-kicker {\n  color: #1565d8;\n}\n.hub-heading h2 {\n  font-size: clamp(28px, 3.3vw, 44px);\n  line-height: 1.16;\n  letter-spacing: -.04em;\n  margin: 12px 0;\n}\n.hub-heading p {\n  font-size: 15px;\n  color: #63738b;\n  max-width: 660px;\n  margin: 0;\n  line-height: 1.7;\n}\n.hub-all {\n  white-space: nowrap;\n  font-size: 13px;\n  font-weight: 700;\n  color: #1565d8;\n  padding-bottom: 5px;\n}\n.hub-all span {\n  margin-left: 12px;\n}\n.hub-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n.hub-card {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #dde5f1;\n  border-radius: 22px;\n  text-decoration: none;\n  color: inherit;\n  isolation: isolate;\n  transition: transform .22s, box-shadow .22s;\n}\n.hub-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 32px #12336114;\n}\n.hub-card:focus-visible,\n.hub-all:focus-visible,\n.hub-foot a:focus-visible {\n  outline: 3px solid #1565d8;\n  outline-offset: 4px;\n}\n.hub-feature {\n  grid-column: span 2;\n  grid-row: span 2;\n  background:\n    linear-gradient(\n      145deg,\n      #e8f2ff,\n      #f0f5ff 45%,\n      #dce8fc);\n  min-height: 456px;\n  padding: 26px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hub-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  z-index: 2;\n}\n.hub-label {\n  color: #356394;\n}\n.hub-arrow {\n  width: 29px;\n  height: 29px;\n  display: grid;\n  place-items: center;\n  border-radius: 50%;\n  background: #ffffff80;\n  font-size: 19px;\n}\n.hub-feature .hub-arrow {\n  background: #1565d8;\n  color: white;\n}\n.hub-feature-copy {\n  position: relative;\n  z-index: 2;\n  max-width: 370px;\n  margin-top: 230px;\n}\n.hub-mini {\n  color: #546a87;\n  font-size: 9px;\n}\n.hub-feature h3 {\n  font-size: 31px;\n  letter-spacing: -.035em;\n  line-height: 1.16;\n  margin: 10px 0;\n}\n.hub-feature p {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #526982;\n  max-width: 340px;\n  margin: 0 0 18px;\n}\n.hub-link {\n  font-size: 12px;\n  font-weight: 750;\n  color: #1565d8;\n}\n.hub-link span {\n  margin-left: 12px;\n}\n.hub-small {\n  min-height: 218px;\n  padding: 22px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.hub-ai {\n  grid-column: span 2;\n  background:\n    linear-gradient(\n      115deg,\n      #efeaff,\n      #e7e3fb);\n}\n.hub-security {\n  background:\n    linear-gradient(\n      135deg,\n      #e9f6ef,\n      #dceee8);\n}\n.hub-work {\n  background:\n    linear-gradient(\n      135deg,\n      #fff5e7,\n      #f6ead7);\n}\n.hub-domain {\n  grid-column: span 2;\n  background:\n    linear-gradient(\n      115deg,\n      #e4f5f8,\n      #deedf7);\n  min-height: 190px;\n}\n.hub-offers {\n  grid-column: span 2;\n  background:\n    linear-gradient(\n      115deg,\n      #fff0eb,\n      #f8e3e5);\n  min-height: 190px;\n}\n.hub-icon {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 12px;\n  background: #ffffffd9;\n  color: #3569bd;\n  font-size: 21px;\n  box-shadow: 0 5px 12px #173c6610;\n}\n.hub-card-copy {\n  position: relative;\n  z-index: 2;\n  max-width: 75%;\n  margin-top: 26px;\n}\n.hub-card-copy h3 {\n  font-size: 21px;\n  letter-spacing: -.025em;\n  line-height: 1.15;\n  margin: 7px 0;\n}\n.hub-card-copy p {\n  font-size: 12px;\n  line-height: 1.6;\n  color: #5c6d82;\n  margin: 0;\n  max-width: 245px;\n}\n.hub-art {\n  position: absolute;\n  right: 12px;\n  top: 54px;\n  font-size: 100px;\n  color: #5085b7;\n  opacity: .2;\n  transform: rotate(-12deg);\n  z-index: 0;\n}\n.hub-ai .hub-art {\n  font-size: 155px;\n  right: 50px;\n  top: 33px;\n  color: #7853d6;\n  opacity: .28;\n}\n.hub-domain .hub-art,\n.hub-offers .hub-art {\n  font-size: 130px;\n  right: 38px;\n  top: 30px;\n}\n.hub-offers .hub-art {\n  color: #dc7b68;\n}\n.hub-foot {\n  display: flex;\n  justify-content: space-between;\n  gap: 18px;\n  margin-top: 24px;\n  font-size: 12px;\n  color: #687990;\n}\n.hub-foot i {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #22a47a;\n  margin-right: 8px;\n}\n.hub-foot a {\n  color: #1565d8;\n  font-weight: 700;\n}\n.cloud-scene {\n  position: absolute;\n  width: 300px;\n  height: 250px;\n  top: 60px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.scene-core {\n  position: absolute;\n  left: 80px;\n  top: 40px;\n  width: 148px;\n  height: 142px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      140deg,\n      #fff,\n      #c8ddff);\n  border: 2px solid #fff;\n  border-radius: 30px;\n  box-shadow: 12px 16px 0 #b5cdf0, 20px 28px 28px #3665aa24;\n  transform: rotate(-7deg);\n  z-index: 2;\n}\n.scene-core .material-symbols-outlined {\n  font-size: 68px;\n  color: #1565d8;\n}\n.scene-core b {\n  font-size: 13px;\n  letter-spacing: .08em;\n  color: #134b98;\n}\n.scene-core small {\n  font-size: 6px;\n  letter-spacing: .14em;\n  margin-top: 6px;\n  color: #5278ad;\n}\n.scene-base {\n  position: absolute;\n  width: 230px;\n  height: 62px;\n  border-radius: 50%;\n  background: linear-gradient(#e9f1ff, #b9d0f2);\n  bottom: 12px;\n  left: 42px;\n  box-shadow: 0 9px 0 #cadcf5;\n}\n.scene-orbit {\n  position: absolute;\n  border: 1px dashed #a9c4e8;\n  border-radius: 50%;\n  width: 285px;\n  height: 165px;\n  top: 43px;\n  left: 8px;\n  transform: rotate(-25deg);\n}\n.orbit-two {\n  transform: rotate(30deg);\n}\n.scene-chip {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  width: 48px;\n  height: 48px;\n  background: #ffffffd9;\n  border: 1px solid #fff;\n  border-radius: 15px;\n  box-shadow: 0 8px 15px #22519a18;\n  color: #3978d2;\n  z-index: 3;\n  font-size: 27px;\n}\n.chip-one {\n  left: 8px;\n  top: 49px;\n  transform: rotate(-12deg);\n}\n.chip-two {\n  right: 0;\n  top: 12px;\n  color: #26968a;\n  transform: rotate(12deg);\n}\n.chip-three {\n  right: 4px;\n  bottom: 38px;\n  color: #8860d3;\n  transform: rotate(8deg);\n}\n@media (min-width: 1200px) {\n  .hub-feature {\n    min-height: 470px;\n  }\n}\n@media (max-width: 760px) {\n  .experience-hub {\n    padding: 48px 0;\n  }\n  .hub-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 18px;\n  }\n  .hub-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .hub-feature {\n    grid-row: auto;\n    min-height: 450px;\n  }\n  .hub-ai {\n    grid-column: span 2;\n  }\n  .hub-domain,\n  .hub-offers {\n    grid-column: span 1;\n  }\n  .hub-small {\n    padding: 18px;\n    min-height: 220px;\n  }\n  .hub-card-copy {\n    max-width: 100%;\n  }\n  .hub-art,\n  .hub-domain .hub-art,\n  .hub-offers .hub-art {\n    font-size: 90px;\n    right: 8px;\n    top: 36px;\n    opacity: .14;\n  }\n  .hub-foot {\n    flex-direction: column;\n  }\n  .hub-card-copy h3 {\n    font-size: 20px;\n  }\n}\n@media (max-width: 380px) {\n  .hub-grid {\n    grid-template-columns: 1fr;\n  }\n  .hub-card {\n    grid-column: span 1;\n  }\n  .hub-small {\n    min-height: 200px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hub-card {\n    transition: none;\n  }\n  .hub-card:hover {\n    transform: none;\n  }\n}\n.hub-feature {\n  background:\n    linear-gradient(\n      145deg,\n      #edf5ff,\n      #dce9fc);\n  min-height: 460px;\n}\n.hub-ai {\n  background:\n    linear-gradient(\n      120deg,\n      #092b58,\n      #164e95);\n  color: #fff;\n}\n.hub-ai .hub-mini,\n.hub-ai .hub-card-copy p {\n  color: #c6dbf7;\n}\n.hub-ai .hub-card-copy h3 {\n  color: #fff;\n}\n.hub-ai .hub-art {\n  color: #8ab4ff;\n  opacity: .35;\n}\n.hub-ai .hub-arrow {\n  background: #ffffff20;\n  color: #fff;\n}\n.hub-managed,\n.hub-professional {\n  background:\n    linear-gradient(\n      135deg,\n      #eef5ff,\n      #dce9fa);\n}\n.hub-licenses,\n.hub-souq {\n  background:\n    linear-gradient(\n      135deg,\n      #fff5e9,\n      #ffe5c6);\n}\n.hub-accelerators,\n.hub-alliances {\n  background:\n    linear-gradient(\n      135deg,\n      #e8f1fc,\n      #d6e6f9);\n}\n.hub-licenses .hub-icon,\n.hub-souq .hub-icon {\n  color: #d56a08;\n}\n.hub-licenses .hub-art,\n.hub-souq .hub-art {\n  color: #ed8b25;\n}\n.hub-small:not(.hub-ai) {\n  grid-column: span 1;\n  min-height: 218px;\n}\n.hub-small .hub-card-copy {\n  max-width: 100%;\n}\n.hub-small:not(.hub-ai) .hub-art {\n  font-size: 90px;\n  top: 42px;\n  right: 10px;\n  opacity: .16;\n}\n.hub-card-copy h3 {\n  font-size: 21px;\n}\n.chip-two,\n.chip-three {\n  color: #1565d8;\n}\n@media (max-width: 760px) {\n  .hub-feature {\n    min-height: 450px;\n  }\n  .hub-small:not(.hub-ai) {\n    min-height: 220px;\n  }\n  .hub-card-copy h3 {\n    font-size: 20px;\n  }\n}\n@media (max-width: 380px) {\n  .hub-ai {\n    grid-column: span 1;\n  }\n}\n.experience-hub .hub-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f2f7ff 0%,\n      #e3edfc 100%);\n  border-color: #cdddf3;\n  color: #041e42;\n}\n.experience-hub .hub-feature {\n  background:\n    linear-gradient(\n      145deg,\n      #edf5ff,\n      #dce9fc);\n}\n.experience-hub .hub-card h3 {\n  color: #041e42;\n}\n.experience-hub .hub-card .hub-mini {\n  color: #356394;\n}\n.experience-hub .hub-card p {\n  color: #526982;\n}\n.experience-hub .hub-icon {\n  background: #fff;\n  color: #1565d8;\n}\n.experience-hub .hub-card .hub-art {\n  color: #1565d8;\n  opacity: .16;\n}\n.experience-hub .hub-arrow {\n  background: #fff;\n  color: #1565d8;\n}\n.experience-hub .hub-feature .hub-arrow {\n  background: #1565d8;\n  color: #fff;\n}\n.experience-hub .hub-card:hover {\n  border-color: #8ab4ee;\n  box-shadow: 0 12px 28px rgba(21, 101, 216, .12);\n}\n.experience-hub .hub-card {\n  background:\n    linear-gradient(\n      135deg,\n      var(--card-start),\n      var(--card-end));\n  border-color: var(--card-border);\n  color: #172b38;\n}\n.experience-hub .hub-feature {\n  --card-start:#fff0df;\n  --card-end:#f4cba8;\n  --card-border:#e8b98e;\n  --card-accent:#934611;\n}\n.experience-hub .hub-ai {\n  --card-start:#ffe7ef;\n  --card-end:#f5bfd1;\n  --card-border:#e8a6be;\n  --card-accent:#982d58;\n}\n.experience-hub .hub-managed {\n  --card-start:#fff3c9;\n  --card-end:#edda94;\n  --card-border:#d7c074;\n  --card-accent:#735614;\n}\n.experience-hub .hub-licenses {\n  --card-start:#ddf5f3;\n  --card-end:#a9dcd6;\n  --card-border:#8fc9c2;\n  --card-accent:#19685f;\n}\n.experience-hub .hub-professional {\n  --card-start:#f1e6f7;\n  --card-end:#d9bce8;\n  --card-border:#c7a4db;\n  --card-accent:#704191;\n}\n.experience-hub .hub-accelerators {\n  --card-start:#eef4d5;\n  --card-end:#c9dea0;\n  --card-border:#b2cb83;\n  --card-accent:#4d6926;\n}\n.experience-hub .hub-souq {\n  --card-start:#f8e7dc;\n  --card-end:#dcb9a5;\n  --card-border:#cba18a;\n  --card-accent:#794b35;\n}\n.experience-hub .hub-alliances {\n  --card-start:#e4eef4;\n  --card-end:#b6cbd9;\n  --card-border:#9bb6c8;\n  --card-accent:#395f77;\n}\n.experience-hub .hub-card h3 {\n  color: #172b38;\n}\n.experience-hub .hub-card .hub-mini,\n.experience-hub .hub-label {\n  color: var(--card-accent);\n}\n.experience-hub .hub-card p {\n  color: #374b56;\n}\n.experience-hub .hub-icon {\n  background: #fffffff0;\n  color: var(--card-accent);\n}\n.experience-hub .hub-card .hub-art {\n  color: var(--card-accent);\n  opacity: .22;\n}\n.experience-hub .hub-arrow {\n  background: #ffffffc9;\n  color: var(--card-accent);\n}\n.experience-hub .hub-link {\n  color: var(--card-accent);\n}\n.experience-hub .hub-card:hover {\n  border-color: var(--card-accent);\n  box-shadow: 0 12px 28px rgba(35, 48, 54, .16);\n}\n.experience-hub .hub-small {\n  padding: 16px;\n}\n.experience-hub .hub-small:not(.hub-ai) {\n  min-height: 190px;\n}\n.experience-hub .hub-small .hub-card-copy {\n  margin-top: 18px;\n}\n@media (max-width: 760px) {\n  .experience-hub .hub-small {\n    padding: 14px;\n  }\n  .experience-hub .hub-small:not(.hub-ai) {\n    min-height: 190px;\n  }\n}\n.experience-hub .hub-feature {\n  grid-column: span 2;\n  grid-row: span 2;\n  min-height: 370px;\n  padding: 20px;\n}\n.experience-hub .hub-ai {\n  grid-column: span 2;\n  min-height: 175px;\n}\n.experience-hub .hub-small:not(.hub-ai) {\n  min-height: 175px;\n}\n.experience-hub .hub-feature .cloud-scene {\n  top: 42px;\n  transform: translateX(-50%) scale(.72);\n  transform-origin: top center;\n}\n.experience-hub .hub-feature-copy {\n  margin-top: 166px;\n}\n.experience-hub .hub-feature h3 {\n  font-size: 27px;\n  margin: 8px 0;\n}\n.experience-hub .hub-feature p {\n  margin-bottom: 12px;\n}\n@media (max-width: 760px) {\n  .experience-hub .hub-feature {\n    grid-row: auto;\n    min-height: 370px;\n    padding: 18px;\n  }\n  .experience-hub .hub-small:not(.hub-ai) {\n    min-height: 175px;\n  }\n}\n@media (max-width: 380px) {\n  .experience-hub .hub-feature,\n  .experience-hub .hub-ai {\n    grid-column: span 1;\n  }\n}\n.experience-hub .hub-card .hub-mini,\n.experience-hub .hub-card .hub-label {\n  display: none;\n}\n.experience-hub .hub-small .hub-card-copy {\n  max-width: 100%;\n}\n.experience-hub .hub-card-copy .hub-link {\n  display: inline-block;\n  margin-top: 10px;\n}\n@media (hover: hover) and (pointer: fine) {\n  .experience-hub .hub-card-copy,\n  .experience-hub .hub-feature-copy {\n    position: absolute;\n    left: 20px;\n    right: 20px;\n    bottom: 20px;\n    margin: 0;\n    max-width: none;\n  }\n  .experience-hub .hub-card-copy p,\n  .experience-hub .hub-feature-copy p,\n  .experience-hub .hub-card-copy .hub-link,\n  .experience-hub .hub-feature-copy .hub-link {\n    max-height: 0;\n    opacity: 0;\n    overflow: hidden;\n    margin: 0;\n    visibility: hidden;\n    transition:\n      opacity .2s,\n      max-height .2s,\n      margin .2s;\n  }\n  .experience-hub .hub-card:hover p,\n  .experience-hub .hub-card:focus-visible p {\n    max-height: 120px;\n    opacity: 1;\n    visibility: visible;\n    margin-top: 8px;\n  }\n  .experience-hub .hub-card:hover .hub-link,\n  .experience-hub .hub-card:focus-visible .hub-link {\n    max-height: 30px;\n    opacity: 1;\n    visibility: visible;\n    margin-top: 10px;\n  }\n  .experience-hub .hub-card:hover .hub-art,\n  .experience-hub .hub-card:focus-visible .hub-art {\n    opacity: .08;\n  }\n  .experience-hub .hub-feature:hover .cloud-scene,\n  .experience-hub .hub-feature:focus-visible .cloud-scene {\n    opacity: .35;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .experience-hub .hub-card p,\n  .experience-hub .hub-card .hub-link {\n    transition: none;\n  }\n}\n.experience-hub .hub-feature {\n  min-height: 300px;\n  height: 300px;\n  align-self: start;\n  padding: 18px;\n}\n.experience-hub .hub-feature .cloud-scene {\n  top: 24px;\n  transform: translateX(-50%) scale(.58);\n}\n.experience-hub .hub-feature-copy {\n  margin-top: 128px;\n}\n@media (hover: hover) and (pointer: fine) {\n  .experience-hub .hub-feature-copy {\n    margin-top: 0;\n    bottom: 18px;\n  }\n}\n@media (hover: none) {\n  .experience-hub .hub-feature {\n    height: auto;\n    min-height: 300px;\n  }\n}\n@media (min-width: 761px) and (hover: hover) and (pointer: fine) {\n  .experience-hub .hub-grid {\n    grid-template-rows: 142px 142px auto;\n  }\n  .experience-hub .hub-small.hub-ai,\n  .experience-hub .hub-small.hub-managed,\n  .experience-hub .hub-small.hub-licenses {\n    min-height: 0;\n    height: 142px;\n    box-sizing: border-box;\n  }\n  .experience-hub .hub-ai .hub-card-copy,\n  .experience-hub .hub-managed .hub-card-copy,\n  .experience-hub .hub-licenses .hub-card-copy {\n    left: 16px;\n    right: 16px;\n    bottom: 14px;\n  }\n  .experience-hub .hub-ai:hover .hub-icon,\n  .experience-hub .hub-managed:hover .hub-icon,\n  .experience-hub .hub-licenses:hover .hub-icon,\n  .experience-hub .hub-ai:focus-visible .hub-icon,\n  .experience-hub .hub-managed:focus-visible .hub-icon,\n  .experience-hub .hub-licenses:focus-visible .hub-icon {\n    opacity: 0;\n  }\n  .experience-hub .hub-small .hub-card-copy h3 {\n    font-size: 19px;\n  }\n  .experience-hub .hub-ai .hub-art {\n    font-size: 100px;\n    top: 18px;\n  }\n}\n/*# sourceMappingURL=experience-hub.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExperienceHubComponent, { className: "ExperienceHubComponent", filePath: "src/app/sections/experience-hub.component.ts", lineNumber: 44 });
})();

// src/app/sections/platform-strip.component.ts
var _forTrack02 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.file;
function PlatformStripComponent_For_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 6);
    \u0275\u0275domElement(1, "img", 7);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const logo_r1 = ctx.$implicit;
    \u0275\u0275classProp("ocl-logo", logo_r1.name === "OCL");
    \u0275\u0275domProperty("title", logo_r1.name);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", "/assets/images/platforms/" + logo_r1.file, \u0275\u0275sanitizeUrl)("alt", logo_r1.name);
  }
}
function PlatformStripComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "ul", 4);
    \u0275\u0275repeaterCreate(1, PlatformStripComponent_For_10_For_2_Template, 2, 5, "li", 5, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", group_r2.label);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r2.logos);
  }
}
var PlatformStripComponent = class _PlatformStripComponent {
  groups = [
    { label: "Cloud platforms", logos: [{ name: "AWS", file: "aws.svg" }, { name: "Microsoft Azure", file: "azure.svg" }, { name: "Google Cloud", file: "gcp.png" }, { name: "OCL", file: "ocl-logo.jpg" }] },
    { label: "Infrastructure tools", logos: [{ name: "Terraform", file: "terraform.png" }, { name: "Kubernetes", file: "kubernetes.png" }, { name: "Docker", file: "docker.png" }] },
    { label: "Development and operations", logos: [{ name: "GitHub", file: "github.png" }, { name: "GitLab", file: "gitlab.jpg" }, { name: "Datadog", file: "datadog.png" }, { name: "SeqOps", file: "seqops.png" }] },
    { label: "AI platforms", logos: [{ name: "OpenAI", file: "openai.png" }, { name: "Anthropic", file: "anthropic.svg" }, { name: "Gemini", file: "gemini.png" }] }
  ];
  static \u0275fac = function PlatformStripComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformStripComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformStripComponent, selectors: [["xh-platform-strip"]], decls: 11, vars: 0, consts: [["aria-labelledby", "platform-strip-title", 1, "platform-strip"], [1, "platform-strip-inner"], ["id", "platform-strip-title"], [1, "platform-groups"], [1, "platform-group"], [3, "title", "ocl-logo"], [3, "title"], ["width", "32", "height", "32", "loading", "lazy", "decoding", "async", 3, "src", "alt"]], template: function PlatformStripComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2)(3, "span");
      \u0275\u0275text(4, "We are ");
      \u0275\u0275domElementStart(5, "strong");
      \u0275\u0275text(6, "Cloud &");
      \u0275\u0275domElementEnd()();
      \u0275\u0275text(7, "Platform agnostic");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "div", 3);
      \u0275\u0275repeaterCreate(9, PlatformStripComponent_For_10_Template, 3, 1, "ul", 4, _forTrack02);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.groups);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.platform-strip[_ngcontent-%COMP%] {\n  padding: 30px 24px;\n  background: #eef0f3;\n}\n.platform-strip-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  max-width: 1320px;\n  margin: 0 auto;\n  padding: 26px 32px;\n  border: 1px solid #d8dde5;\n  border-radius: 6px;\n  background: #f4f5f7;\n}\nh2[_ngcontent-%COMP%] {\n  flex: 0 0 245px;\n  margin: 0;\n  padding: 5px 28px 5px 0;\n  border-right: 1px solid #cfd5df;\n  color: #2563d8;\n  font: 700 16px/1.5 var(--body,sans-serif);\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n}\nh2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #596579;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 2px;\n}\nh2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0057d9;\n  font-size: 16px;\n  font-weight: 800;\n}\n.platform-groups[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 1;\n  min-width: 0;\n}\n.platform-group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0 20px;\n  border-right: 1px solid #cfd5df;\n}\n.platform-group[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n.platform-group[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n  border: 0;\n}\n.platform-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: 0 0 46px;\n  width: 46px;\n  height: 46px;\n  padding: 7px;\n  border-radius: 12px;\n  background: #fff;\n}\n.platform-group[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n}\n.platform-group[_ngcontent-%COMP%]   li.ocl-logo[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.platform-group[_ngcontent-%COMP%]   .ocl-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 36px;\n  object-fit: contain;\n}\n@media (max-width: 1300px) {\n  .platform-strip-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 22px;\n    padding: 24px;\n  }\n  .platform-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    flex: auto;\n    border: 0;\n    padding: 0;\n    text-align: center;\n  }\n  .platform-groups[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 900px) {\n  .platform-groups[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 22px 0;\n  }\n  .platform-group[_ngcontent-%COMP%] {\n    padding: 0 16px !important;\n  }\n  .platform-group[_ngcontent-%COMP%]:nth-child(2) {\n    border: 0;\n  }\n}\n@media (max-width: 480px) {\n  .platform-strip[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .platform-strip-inner[_ngcontent-%COMP%] {\n    padding: 22px 14px;\n  }\n  .platform-groups[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 16px;\n  }\n  .platform-group[_ngcontent-%COMP%] {\n    border: 0;\n    padding: 0 0 16px !important;\n    border-bottom: 1px solid #cfd5df !important;\n  }\n  .platform-group[_ngcontent-%COMP%]:last-child {\n    padding-bottom: 0 !important;\n    border: 0 !important;\n  }\n  .platform-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n    flex-basis: 44px;\n  }\n}\n/*# sourceMappingURL=platform-strip.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformStripComponent, [{
    type: Component,
    args: [{ selector: "xh-platform-strip", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="platform-strip" aria-labelledby="platform-strip-title">
      <div class="platform-strip-inner">
        <h2 id="platform-strip-title"><span>We are <strong>Cloud &amp;</strong></span>Platform agnostic</h2>
        <div class="platform-groups">
          @for (group of groups; track group.label) {
            <ul class="platform-group" [attr.aria-label]="group.label">
              @for (logo of group.logos; track logo.file) {
                <li [title]="logo.name" [class.ocl-logo]="logo.name === 'OCL'"><img [src]="'/assets/images/platforms/' + logo.file" [alt]="logo.name" width="32" height="32" loading="lazy" decoding="async" /></li>
              }
            </ul>
          }
        </div>
      </div>
    </section>
  `, styles: ["/* src/app/sections/platform-strip.component.css */\n:host {\n  display: block;\n}\n.platform-strip {\n  padding: 30px 24px;\n  background: #eef0f3;\n}\n.platform-strip-inner {\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  max-width: 1320px;\n  margin: 0 auto;\n  padding: 26px 32px;\n  border: 1px solid #d8dde5;\n  border-radius: 6px;\n  background: #f4f5f7;\n}\nh2 {\n  flex: 0 0 245px;\n  margin: 0;\n  padding: 5px 28px 5px 0;\n  border-right: 1px solid #cfd5df;\n  color: #2563d8;\n  font: 700 16px/1.5 var(--body,sans-serif);\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n}\nh2 span {\n  display: block;\n  color: #596579;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 2px;\n}\nh2 span strong {\n  color: #0057d9;\n  font-size: 16px;\n  font-weight: 800;\n}\n.platform-groups {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 1;\n  min-width: 0;\n}\n.platform-group {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  list-style: none;\n  margin: 0;\n  padding: 0 20px;\n  border-right: 1px solid #cfd5df;\n}\n.platform-group:first-child {\n  padding-left: 0;\n}\n.platform-group:last-child {\n  padding-right: 0;\n  border: 0;\n}\n.platform-group li {\n  display: grid;\n  place-items: center;\n  flex: 0 0 46px;\n  width: 46px;\n  height: 46px;\n  padding: 7px;\n  border-radius: 12px;\n  background: #fff;\n}\n.platform-group img {\n  display: block;\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n}\n.platform-group li.ocl-logo {\n  padding: 2px;\n}\n.platform-group .ocl-logo img {\n  width: 42px;\n  height: 36px;\n  object-fit: contain;\n}\n@media (max-width: 1300px) {\n  .platform-strip-inner {\n    flex-direction: column;\n    gap: 22px;\n    padding: 24px;\n  }\n  .platform-strip h2 {\n    flex: auto;\n    border: 0;\n    padding: 0;\n    text-align: center;\n  }\n  .platform-groups {\n    width: 100%;\n    justify-content: center;\n  }\n}\n@media (max-width: 900px) {\n  .platform-groups {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 22px 0;\n  }\n  .platform-group {\n    padding: 0 16px !important;\n  }\n  .platform-group:nth-child(2) {\n    border: 0;\n  }\n}\n@media (max-width: 480px) {\n  .platform-strip {\n    padding: 24px 16px;\n  }\n  .platform-strip-inner {\n    padding: 22px 14px;\n  }\n  .platform-groups {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 16px;\n  }\n  .platform-group {\n    border: 0;\n    padding: 0 0 16px !important;\n    border-bottom: 1px solid #cfd5df !important;\n  }\n  .platform-group:last-child {\n    padding-bottom: 0 !important;\n    border: 0 !important;\n  }\n  .platform-group li {\n    width: 44px;\n    height: 44px;\n    flex-basis: 44px;\n  }\n}\n/*# sourceMappingURL=platform-strip.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformStripComponent, { className: "PlatformStripComponent", filePath: "src/app/sections/platform-strip.component.ts", lineNumber: 25 });
})();

// src/app/shared/count-up.ts
var DEFAULT_DURATION_MS = 1100;
function formatCount(value, dec) {
  return dec ? value.toFixed(dec) : Math.round(value).toLocaleString("en-IN");
}
function finalCount(figure) {
  return figure.final ?? formatCount(figure.value, figure.dec) + figure.suffix;
}
function parseCount(text, extra) {
  const m = /^([\d.,]+)(.*)$/.exec(text);
  if (!m)
    return null;
  const value = Number.parseFloat(m[1].replace(/,/g, ""));
  if (!Number.isFinite(value))
    return null;
  return __spreadValues({ value, dec: value % 1 !== 0 ? 1 : 0, suffix: m[2], final: text }, extra);
}
function runCountUp(figures, emit) {
  if (!figures.length)
    return () => {
    };
  let raf = 0;
  const t0 = performance.now();
  const step = (t) => {
    let running = false;
    const out = figures.map((f) => {
      const span = f.duration ?? DEFAULT_DURATION_MS;
      const p = Math.min(Math.max((t - t0 - (f.delay ?? 0)) / span, 0), 1);
      if (p >= 1)
        return finalCount(f);
      running = true;
      return formatCount(f.value * (1 - Math.pow(1 - p, 3)), f.dec) + f.suffix;
    });
    emit(out);
    raf = running ? requestAnimationFrame(step) : 0;
  };
  raf = requestAnimationFrame(step);
  return () => {
    if (raf)
      cancelAnimationFrame(raf);
    raf = 0;
  };
}

// src/app/sections/hero.component.ts
var _c02 = ["netbg"];
var _forTrack03 = ($index, $item) => $item.primaryHref;
function HeroComponent_For_28_For_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 28);
    \u0275\u0275domListener("click", function HeroComponent_For_28_For_25_Template_button_click_0_listener() {
      const \u0275$index_92_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectVisualSlide(\u0275$index_92_r4));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const navSlide_r5 = ctx.$implicit;
    const \u0275$index_92_r4 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-active", \u0275$index_92_r4 === ctx_r1.activeVisualSlide());
    \u0275\u0275attribute("aria-selected", \u0275$index_92_r4 === ctx_r1.activeVisualSlide())("aria-label", "Show " + navSlide_r5.tab);
  }
}
function HeroComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "article", 15)(1, "div", 16)(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275domElementStart(6, "em", 18);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "p", 19);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "div", 20);
    \u0275\u0275text(12, "Right now on XcellHost\xA0\u2192\xA0");
    \u0275\u0275domElementStart(13, "span", 21);
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(15, "div", 22)(16, "a", 23);
    \u0275\u0275text(17);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(18, "a", 24);
    \u0275\u0275domListener("click", function HeroComponent_For_28_Template_a_click_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTrial($event));
    });
    \u0275\u0275text(19, "Start Free Trial");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(20, "div", 25);
    \u0275\u0275domElement(21, "i");
    \u0275\u0275text(22, " all systems operational \xB7 backups every 8 hrs \xB7 SOC live \xB7 incidents: 0");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(23, "div", 26);
    \u0275\u0275repeaterCreate(24, HeroComponent_For_28_For_25_Template, 1, 4, "button", 27, _forTrack03);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const slide_r6 = ctx.$implicit;
    const \u0275$index_53_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", \u0275$index_53_r7 === ctx_r1.activeVisualSlide())("is-cybird", slide_r6.primaryHref === "/smb-cyber-security-appliance");
    \u0275\u0275attribute("aria-hidden", \u0275$index_53_r7 !== ctx_r1.activeVisualSlide());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r6.eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", slide_r6.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r6.accent);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slide_r6.titleEnd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slide_r6.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(slide_r6.spotlight);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("href", slide_r6.primaryHref, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slide_r6.primaryCta);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.carouselSlides);
  }
}
var HERO_STATS = [
  { value: 1e4, dec: 0, suffix: "+", label: "businesses served" },
  { value: 99.95, dec: 2, suffix: "%", label: "uptime SLA" },
  { value: 200, dec: 0, suffix: "+", label: "services" },
  { value: 27, dec: 0, suffix: "", label: "years \xB7 since 1999" }
];
var ROTATE_MS = 2400;
var LEAVE_MS = 520;
var HERO_SLIDE_MS = 5200;
var HERO_CAROUSEL_SLIDES = [
  {
    tab: "Overview",
    eyebrow: "Engineering India\u2019s Digital Future \xB7 Since 1999",
    title: "The infrastructure your",
    accent: "next decade",
    titleEnd: "runs on.",
    description: "From Tally on Cloud to enterprise SOC \u2014 XcellHost has run managed cloud and security for 10,000+ Indian businesses since 1999. ISO 27001 certified. DPDPA ready.",
    spotlight: "free migration \xB7 15-day guarantee",
    primaryCta: "Explore services",
    primaryHref: "#flagship",
    image: "",
    alt: "XcellHost cloud and security infrastructure"
  },
  {
    tab: "Performance Cloud",
    eyebrow: "Built for business-critical workloads",
    title: "Performance",
    accent: "Cloud",
    titleEnd: "without compromise.",
    description: "Run your most demanding applications on dedicated, NVMe-powered cloud infrastructure with dependable performance and expert support.",
    spotlight: "NVMe-powered compute \xB7 99.95% SLA",
    primaryCta: "Explore Performance Cloud",
    primaryHref: "/performance-cloud",
    image: "",
    alt: "Performance Cloud infrastructure"
  },
  {
    tab: "Bare Metal Servers",
    eyebrow: "Dedicated hardware for demanding workloads",
    title: "Bare Metal",
    accent: "Servers",
    titleEnd: "with complete control.",
    description: "Run your business applications on dedicated physical servers with full root access, flexible configurations and expert infrastructure support.",
    spotlight: "Dedicated resources \xB7 full root access \xB7 expert support",
    primaryCta: "Explore Bare Metal Servers",
    primaryHref: "/bare-metal-servers",
    image: "",
    alt: "Bare Metal Servers infrastructure"
  },
  {
    tab: "GPU Servers",
    eyebrow: "Accelerate AI, machine learning and rendering",
    title: "GPU",
    accent: "Servers",
    titleEnd: "for your next breakthrough.",
    description: "Power AI training, machine learning and rendering workloads with GPU servers built for intensive compute and supported by our infrastructure experts.",
    spotlight: "AI training \xB7 machine learning \xB7 rendering workloads",
    primaryCta: "Explore GPU Servers",
    primaryHref: "/gpu-servers",
    image: "",
    alt: "GPU Servers for AI and rendering"
  },
  {
    tab: "Acronis EDR",
    eyebrow: "Stop threats before they spread",
    title: "Acronis",
    accent: "EDR",
    titleEnd: "that protects every endpoint.",
    description: "Detect, investigate and respond to endpoint threats with AI-driven protection and security expertise that keeps your business moving.",
    spotlight: "AI-powered endpoint protection \xB7 24\xD77 support",
    primaryCta: "Explore Acronis EDR",
    primaryHref: "/advanced-endpoint-security-edr",
    image: "",
    alt: "Acronis EDR endpoint security"
  },
  {
    tab: "Cloud Backup",
    eyebrow: "Protect your data. Keep business moving.",
    title: "Cloud",
    accent: "Backup",
    titleEnd: "for peace of mind.",
    description: "Protect servers, endpoints and Microsoft 365 with encrypted cloud backups, flexible recovery and expert support when you need it.",
    spotlight: "Automated backups \xB7 granular recovery \xB7 expert support",
    primaryCta: "Explore Cloud Backup",
    primaryHref: "/cloud-backup",
    image: "assets/images/hero-bare-metal-ryzen.png",
    alt: "Cloud Backup data protection"
  },
  {
    tab: "SMB Cybird Security Appliance",
    eyebrow: "Cybersecurity built for growing businesses",
    title: "SMB",
    accent: "Cybird",
    titleEnd: "Security Appliance for a safer workplace.",
    description: "Secure your business network with the SMB Cybird Security Appliance, bringing network protection and expert guidance together for your growing team.",
    spotlight: "SMB network security \xB7 centralised protection \xB7 expert support",
    primaryCta: "Explore SMB Cybird Security Appliance",
    primaryHref: "/smb-cyber-security-appliance",
    image: "assets/images/hero-bare-metal-ryzen.png",
    alt: "SMB Cybird cybersecurity appliance"
  }
];
var ORB_1_FACTOR = 0.12;
var ORB_2_FACTOR = -0.08;
var CUBE_1_FACTOR = -0.14;
var CUBE_2_FACTOR = 0.1;
var HeroComponent = class _HeroComponent {
  overlay = inject(OverlayService);
  canvas = viewChild.required("netbg");
  words = HERO_WORDS;
  stats = HERO_STATS;
  carouselSlides = HERO_CAROUSEL_SLIDES;
  activeVisualSlide = signal(0, ...ngDevMode ? [{ debugName: "activeVisualSlide" }] : []);
  /** index of the word currently shown */
  current = signal(0, ...ngDevMode ? [{ debugName: "current" }] : []);
  /** index of the word sliding out, or -1 */
  leaving = signal(-1, ...ngDevMode ? [{ debugName: "leaving" }] : []);
  /** The original read the ramp timings off each `.sl b` in document order. */
  figures = HERO_STATS.map((s, i) => ({
    value: s.value,
    dec: s.dec,
    suffix: s.suffix,
    delay: 350 + i * 120,
    duration: 1500 + i * 180
  }));
  /** formatted text of each count-up figure */
  counters = signal(HERO_STATS.map(() => "0"), ...ngDevMode ? [{ debugName: "counters" }] : []);
  /** page scroll offset, the only input to the orb / cube parallax */
  scrollOffset = signal(0, ...ngDevMode ? [{ debugName: "scrollOffset" }] : []);
  /** `translate` values for the two `.orb`s and the two `.cube-wrap`s */
  orb1Shift = computed(() => this.parallax(ORB_1_FACTOR), ...ngDevMode ? [{ debugName: "orb1Shift" }] : []);
  orb2Shift = computed(() => this.parallax(ORB_2_FACTOR), ...ngDevMode ? [{ debugName: "orb2Shift" }] : []);
  cube1Shift = computed(() => this.parallax(CUBE_1_FACTOR), ...ngDevMode ? [{ debugName: "cube1Shift" }] : []);
  cube2Shift = computed(() => this.parallax(CUBE_2_FACTOR), ...ngDevMode ? [{ debugName: "cube2Shift" }] : []);
  reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  rotateTimer;
  visualSlideTimer;
  leaveTimer;
  cancelCount;
  netRaf = 0;
  parallaxRaf = 0;
  parallaxTicking = false;
  observer;
  onResize = () => this.sizeCanvas();
  onScroll = () => this.queueParallax();
  ngAfterViewInit() {
    if (this.reduced) {
      this.counters.set(this.figures.map(finalCount));
      return;
    }
    this.cancelCount = runCountUp(this.figures, (v) => this.counters.set(v));
    this.rotateWords();
    this.startVisualCarousel();
    this.startParticles();
    this.startParallax();
  }
  ngOnDestroy() {
    clearInterval(this.rotateTimer);
    clearInterval(this.visualSlideTimer);
    clearTimeout(this.leaveTimer);
    this.cancelCount?.();
    cancelAnimationFrame(this.netRaf);
    cancelAnimationFrame(this.parallaxRaf);
    this.observer?.disconnect();
    removeEventListener("resize", this.onResize);
    removeEventListener("scroll", this.onScroll);
  }
  /* ------------------------------------------------------------ parallax */
  /** `null` under reduced motion so no inline `translate` is written at all. */
  parallax(factor) {
    return this.reduced ? null : `0 ${(this.scrollOffset() * factor).toFixed(1)}px`;
  }
  /** Port of `script_07`: one rAF-throttled scroll listener drives all four. */
  startParallax() {
    addEventListener("scroll", this.onScroll, { passive: true });
  }
  queueParallax() {
    if (this.parallaxTicking)
      return;
    this.parallaxTicking = true;
    this.parallaxRaf = requestAnimationFrame(() => {
      this.scrollOffset.set(window.scrollY);
      this.parallaxTicking = false;
    });
  }
  /* ------------------------------------------------------------ rotator */
  rotateWords() {
    this.rotateTimer = setInterval(() => {
      const prev = this.current();
      this.leaving.set(prev);
      this.current.set((prev + 1) % this.words.length);
      clearTimeout(this.leaveTimer);
      this.leaveTimer = setTimeout(() => this.leaving.set(-1), LEAVE_MS);
    }, ROTATE_MS);
  }
  selectVisualSlide(index) {
    this.activeVisualSlide.set(index);
    this.startVisualCarousel();
  }
  nextVisualSlide() {
    this.selectVisualSlide((this.activeVisualSlide() + 1) % this.carouselSlides.length);
  }
  openTrial(event) {
    event.preventDefault();
    this.overlay.open("trial");
  }
  startVisualCarousel() {
    clearInterval(this.visualSlideTimer);
    this.visualSlideTimer = setInterval(() => this.nextVisualSlide(), HERO_SLIDE_MS);
  }
  /* ------------------------------------------------------------ particles */
  sizeCanvas() {
    const cv = this.canvas().nativeElement;
    const hero = cv.parentElement;
    if (!hero)
      return;
    cv.width = hero.offsetWidth;
    cv.height = hero.offsetHeight;
  }
  /** Port of the original `#netbg` network background. */
  startParticles() {
    const cv = this.canvas().nativeElement;
    const ctx = cv.getContext("2d");
    const hero = cv.parentElement;
    if (!ctx || !hero)
      return;
    const count = innerWidth < 700 ? 20 : 52;
    const points = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: 35e-5 + Math.random() * 75e-5,
      vy: (Math.random() - 0.5) * 28e-5,
      r: 1 + Math.random() * 1.3
    }));
    this.sizeCanvas();
    addEventListener("resize", this.onResize);
    let run = true;
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver((e) => run = e[0].isIntersecting);
      this.observer.observe(hero);
    }
    const frame = () => {
      if (run) {
        const w = cv.width;
        const h = cv.height;
        ctx.clearRect(0, 0, w, h);
        for (const p of points) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x > 1.05)
            p.x = -0.05;
          if (p.y < -0.05)
            p.y = 1.05;
          if (p.y > 1.05)
            p.y = -0.05;
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const a = points[i];
            const b = points[j];
            const dx = (a.x - b.x) * w;
            const dy = (a.y - b.y) * h;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 150) {
              ctx.strokeStyle = "rgba(127,178,255," + (0.16 * (1 - d / 150)).toFixed(3) + ")";
              ctx.beginPath();
              ctx.moveTo(a.x * w, a.y * h);
              ctx.lineTo(b.x * w, b.y * h);
              ctx.stroke();
            }
          }
        }
        for (const p of points) {
          ctx.strokeStyle = "rgba(158,195,255,.45)";
          ctx.lineWidth = p.r;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo((p.x - p.vx * 26) * w, (p.y - p.vy * 26) * h);
          ctx.lineTo(p.x * w, p.y * h);
          ctx.stroke();
          ctx.fillStyle = "rgba(205,225,255,.95)";
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, p.r * 0.9, 0, 7);
          ctx.fill();
        }
      }
      this.netRaf = requestAnimationFrame(frame);
    };
    this.netRaf = requestAnimationFrame(frame);
  }
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["xh-hero"]], viewQuery: function HeroComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.canvas, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostAttrs: [2, "display", "contents"], decls: 29, vars: 8, consts: [["netbg", ""], [1, "hero"], ["aria-hidden", "true", 1, "orb", "orb-1"], ["aria-hidden", "true", 1, "orb", "orb-2"], ["aria-hidden", "true", 1, "aur", "a1"], ["aria-hidden", "true", 1, "aur", "a2"], ["aria-hidden", "true", 1, "aur", "a3"], ["aria-hidden", "true", 1, "beams"], ["id", "netbg", "aria-hidden", "true"], ["aria-hidden", "true", 1, "grid-floor"], ["aria-hidden", "true", 1, "cube-wrap"], [1, "cube"], ["aria-hidden", "true", 1, "cube-wrap", "c2"], [1, "wrap", "home-hero-carousel"], [1, "home-hero-slide", 3, "is-active", "is-cybird"], [1, "home-hero-slide"], [1, "home-hero-copy"], [1, "eyebrow"], [1, "shine"], [1, "lead"], [1, "rot-line"], [1, "rot", "home-hero-spotlight"], [1, "hero-ctas"], [1, "btn", "btn-primary", 3, "href"], ["href", "#", 1, "btn", "btn-ghost", 3, "click"], [1, "hero-live"], ["role", "tablist", "aria-label", "Homepage hero slides", 1, "home-hero-dots"], ["type", "button", "role", "tab", 3, "is-active"], ["type", "button", "role", "tab", 3, "click"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 1);
      \u0275\u0275domElement(1, "span", 2)(2, "span", 3)(3, "span", 4)(4, "span", 5)(5, "span", 6)(6, "span", 7)(7, "canvas", 8, 0)(9, "span", 9);
      \u0275\u0275domElementStart(10, "span", 10)(11, "span", 11);
      \u0275\u0275domElement(12, "i")(13, "i")(14, "i")(15, "i")(16, "i")(17, "i");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(18, "span", 12)(19, "span", 11);
      \u0275\u0275domElement(20, "i")(21, "i")(22, "i")(23, "i")(24, "i")(25, "i");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(26, "div", 13);
      \u0275\u0275repeaterCreate(27, HeroComponent_For_28_Template, 26, 13, "article", 14, _forTrack03);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("translate", ctx.orb1Shift());
      \u0275\u0275advance();
      \u0275\u0275styleProp("translate", ctx.orb2Shift());
      \u0275\u0275advance(8);
      \u0275\u0275styleProp("translate", ctx.cube1Shift());
      \u0275\u0275advance(8);
      \u0275\u0275styleProp("translate", ctx.cube2Shift());
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.carouselSlides);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "xh-hero", standalone: true, host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="hero">\r
  <span class="orb orb-1" [style.translate]="orb1Shift()" aria-hidden="true"></span>\r
  <span class="orb orb-2" [style.translate]="orb2Shift()" aria-hidden="true"></span>\r
  <span class="aur a1" aria-hidden="true"></span><span class="aur a2" aria-hidden="true"></span><span class="aur a3" aria-hidden="true"></span>\r
  <span class="beams" aria-hidden="true"></span>\r
  <canvas id="netbg" #netbg aria-hidden="true"></canvas>\r
  <span class="grid-floor" aria-hidden="true"></span>\r
  <span class="cube-wrap" [style.translate]="cube1Shift()" aria-hidden="true"><span class="cube"><i></i><i></i><i></i><i></i><i></i><i></i></span></span>\r
  <span class="cube-wrap c2" [style.translate]="cube2Shift()" aria-hidden="true"><span class="cube"><i></i><i></i><i></i><i></i><i></i><i></i></span></span>\r
  <div class="wrap home-hero-carousel">\r
    @for (slide of carouselSlides; track slide.primaryHref; let i = $index) {\r
      <article class="home-hero-slide" [class.is-active]="i === activeVisualSlide()" [class.is-cybird]="slide.primaryHref === '/smb-cyber-security-appliance'" [attr.aria-hidden]="i !== activeVisualSlide()">\r
        <div class="home-hero-copy">\r
          <div class="eyebrow">{{ slide.eyebrow }}</div>\r
          <h1>{{ slide.title }} <em class="shine">{{ slide.accent }}</em> {{ slide.titleEnd }}</h1>\r
          <p class="lead">{{ slide.description }}</p>\r
          <div class="rot-line">Right now on XcellHost&nbsp;\u2192&nbsp;<span class="rot home-hero-spotlight">{{ slide.spotlight }}</span></div>\r
          <div class="hero-ctas">\r
            <a class="btn btn-primary" [href]="slide.primaryHref">{{ slide.primaryCta }}</a>\r
            <a class="btn btn-ghost" href="#" (click)="openTrial($event)">Start Free Trial</a>\r
          </div>\r
          <div class="hero-live"><i></i> all systems operational \xB7 backups every 8 hrs \xB7 SOC live \xB7 incidents: 0</div>\r
          <div class="home-hero-dots" role="tablist" aria-label="Homepage hero slides">\r
            @for (navSlide of carouselSlides; track navSlide.primaryHref; let navIndex = $index) {\r
              <button\r
                type="button"\r
                role="tab"\r
                [class.is-active]="navIndex === activeVisualSlide()"\r
                [attr.aria-selected]="navIndex === activeVisualSlide()"\r
                [attr.aria-label]="'Show ' + navSlide.tab"\r
                (click)="selectVisualSlide(navIndex)"\r
              ></button>\r
            }\r
          </div>\r
        </div>\r
      </article>\r
    }\r
  </div>\r
</div>\r
` }]
  }], null, { canvas: [{ type: ViewChild, args: ["netbg", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/sections/hero.component.ts", lineNumber: 190 });
})();

// src/app/sections/marquee.component.ts
var _c03 = (a0) => ["/vendor-partners", a0];
var _forTrack04 = ($index, $item) => $item.name;
function MarqueeComponent_For_5_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 7);
    \u0275\u0275element(2, "rect", 8)(3, "rect", 9)(4, "rect", 10)(5, "rect", 11);
    \u0275\u0275elementEnd()();
  }
}
function MarqueeComponent_For_5_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", b_r1.bg)("color", b_r1.fg);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r1.mark);
  }
}
function MarqueeComponent_For_5_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275conditionalCreate(1, MarqueeComponent_For_5_For_1_Conditional_1_Template, 6, 0, "span", 5)(2, MarqueeComponent_For_5_For_1_Conditional_2_Template, 2, 5, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    \u0275\u0275styleProp("color", b_r1.textColor);
    \u0275\u0275classProp("feat", b_r1.feat);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c03, b_r1.slug));
    \u0275\u0275attribute("aria-label", "Learn more about " + b_r1.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(b_r1.ms ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r1.name);
  }
}
function MarqueeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MarqueeComponent_For_5_For_1_Template, 4, 10, "a", 3, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.brands);
  }
}
var BRANDS = [
  { name: "Acronis", slug: "acronis", mark: "A", bg: "#143BEB", fg: "#fff" },
  { name: "OpenText", slug: "opentext", mark: "OT", bg: "#7E93B4", fg: "#fff", textColor: "#7E93B4" },
  { name: "Microsoft ", slug: "microsoft", ms: true },
  { name: "DPOGenie 365", slug: "dpo-genie", mark: "DP", bg: "#7C3AED", fg: "#fff" },
  { name: "Microsoft Azure", slug: "microsoft-azure", ms: true },
  { name: "Amazon Web Services", slug: "amazon-web-services", mark: "aws", bg: "#232F3E", fg: "#FF9900" },
  { name: "Google Cloud", slug: "google-cloud", mark: "G", bg: "#fff", fg: "#4285F4" },
  { name: "IBM Multicloud", slug: "ibm-multicloud", mark: "IBM", bg: "#0F62FE", fg: "#fff" },
  { name: "Red Hat", slug: "red-hat", mark: "RH", bg: "#EE0000", fg: "#fff" },
  { name: "DigiCert", slug: "digicert", mark: "D", bg: "#0174C3", fg: "#fff" },
  { name: "Sectigo", slug: "sectigo", mark: "S", bg: "#16A34A", fg: "#fff" },
  { name: "TSplus", slug: "tsplus", mark: "TS", bg: "#0D6EFD", fg: "#fff" },
  { name: "Kaspersky", slug: "kaspersky", mark: "K", bg: "#006D5C", fg: "#fff" },
  { name: "SentinelOne", slug: "sentinelone", mark: "S1", bg: "#6B4EFF", fg: "#fff" },
  { name: "Fortinet", slug: "fortinet", mark: "F", bg: "#EE3124", fg: "#fff" },
  { name: "Palo Alto", slug: "palo-alto", mark: "PA", bg: "#F97316", fg: "#fff" },
  { name: "HPE", slug: "hpe", mark: "H", bg: "#01A982", fg: "#fff" },
  { name: "Dell", slug: "dell", mark: "D", bg: "#0672CB", fg: "#fff" },
  { name: "Cybird", slug: "cybird", mark: "C", bg: "#5B3CC4", fg: "#fff" },
  { name: "Veeam", slug: "veeam", mark: "C", bg: "#0a8a59", fg: "#fff" },
  { name: "Druva", slug: "Druva", mark: "D", bg: "#0a5491", fg: "#fff" },
  { name: "Oracle Cloud", slug: "dpo-genie", mark: "DP", bg: "#7C3AED", fg: "#fff" },
  { name: "Akamai", slug: "Akamai", mark: "A", bg: "#2563EB", fg: "#fff" },
  { name: "Cloudfare", slug: "Cloudfare", mark: "CF", bg: "#F97316", fg: "#fff" }
];
var MarqueeComponent = class _MarqueeComponent {
  brands = BRANDS;
  /** the track is duplicated for the infinite scroll */
  passes = [0, 1];
  static \u0275fac = function MarqueeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MarqueeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarqueeComponent, selectors: [["xh-marquee"]], hostAttrs: [2, "display", "contents"], decls: 6, vars: 0, consts: [["aria-label", "Vendor partners", 1, "marquee"], [1, "lab"], [1, "track"], [3, "routerLink", "feat", "color"], [3, "routerLink"], [1, "blg"], [1, "blg", 3, "background", "color"], ["viewBox", "0 0 21 21", "width", "13", "height", "13", "aria-hidden", "true"], ["width", "10", "height", "10", "fill", "#F25022"], ["x", "11", "width", "10", "height", "10", "fill", "#7FBA00"], ["y", "11", "width", "10", "height", "10", "fill", "#00A4EF"], ["x", "11", "y", "11", "width", "10", "height", "10", "fill", "#FFB900"]], template: function MarqueeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275text(2, "Powered by world-class vendor partnerships");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275repeaterCreate(4, MarqueeComponent_For_5_Template, 2, 0, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.passes);
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MarqueeComponent, [{
    type: Component,
    args: [{
      selector: "xh-marquee",
      standalone: true,
      imports: [RouterLink],
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="marquee" aria-label="Vendor partners">
      <div class="lab">Powered by world-class vendor partnerships</div>
      <div class="track">
        @for (pass of passes; track pass) {
          @for (b of brands; track b.name) {
            <a
              [routerLink]="['/vendor-partners', b.slug]"
              [class.feat]="b.feat"
              [style.color]="b.textColor"
              [attr.aria-label]="'Learn more about ' + b.name"
              >@if (b.ms) {<span class="blg"
                ><svg viewBox="0 0 21 21" width="13" height="13" aria-hidden="true">
                  <rect width="10" height="10" fill="#F25022" />
                  <rect x="11" width="10" height="10" fill="#7FBA00" />
                  <rect y="11" width="10" height="10" fill="#00A4EF" />
                  <rect x="11" y="11" width="10" height="10" fill="#FFB900" /></svg
              ></span>} @else {<span class="blg" [style.background]="b.bg" [style.color]="b.fg">{{ b.mark }}</span>}{{ b.name }}</a
            >
          }
        }
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarqueeComponent, { className: "MarqueeComponent", filePath: "src/app/sections/marquee.component.ts", lineNumber: 81 });
})();

// src/app/sections/flagship.component.ts
var _forTrack05 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.title;
function FlagshipComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function FlagshipComponent_For_11_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r2.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab() === tab_r2.id);
    \u0275\u0275property("id", "flag-tab-" + tab_r2.id);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTab() === tab_r2.id)("aria-controls", "flag-panel-" + tab_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.label);
  }
}
function FlagshipComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "span", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 10);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementStart(12, "b");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("href", c_r4.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "Explore " + c_r4.title + " (opens in a new tab)");
    \u0275\u0275advance();
    \u0275\u0275attribute("data-icon", c_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", c_r4.iconPath);
    \u0275\u0275advance();
    \u0275\u0275classProp("hot", c_r4.hot);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.blurb);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.lead);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.amount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.tail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.cta);
  }
}
var FLAGSHIP_TABS = [
  { id: "web-presence", label: "Web Presence" },
  { id: "cloud", label: "Cloud" },
  { id: "productivity", label: "Productivity" },
  { id: "data-protect", label: "Data Protection" },
  { id: "digital-trust", label: "Digital Trust" },
  { id: "security", label: "Security" },
  { id: "ai", label: "AI" },
  { id: "marketplace", label: "Marketplace" }
];
var FLAGSHIP_TAB_SOURCES = {
  "web-presence": "business",
  cloud: "infrastructure",
  productivity: "workplace",
  "data-protect": "protection",
  "digital-trust": "digital-trust",
  security: "security",
  ai: "ai",
  marketplace: "marketplace"
};
var FLAGSHIP_CARD_GROUPS = {
  "Tally on Cloud": ["business"],
  "Backup Cloud": ["business", "protection"],
  "Cloud Drive": ["business"],
  "Advanced EDR": ["business"],
  "Advanced RMM": ["business"],
  "SMB Cyber Security Appliance": ["business"],
  "SMB Cloud Desktop": ["business"],
  "WhatsApp SMB": ["business"],
  "Performance Cloud": ["infrastructure"],
  "Bare Metal Server": ["infrastructure"],
  "Global Server": ["infrastructure"],
  "Cloud Object Storage": ["protection"],
  "Cloud Disaster Recovery": ["protection"],
  "Microsoft 365 Backup": ["protection", "workplace"],
  "Microsoft 365 Archiving": ["protection"],
  "Entra ID Backup": ["protection"],
  "DPDPA Platform": ["digital-trust"],
  "Business Email": ["workplace"],
  "Microsoft 365 SMB": ["workplace"],
  "Advanced Email Security": ["workplace", "security"],
  "Google Workspace": ["workplace"],
  "Microsoft 365 for Enterprise": ["workplace"],
  "Zoho Workplace": ["workplace"],
  "Enterprise DMARC": ["workplace", "digital-trust"],
  "Microsoft 365": []
};
var SMB_CLOUD_ORDER = [
  "Tally on Cloud",
  "Backup Cloud",
  "Cloud Drive",
  "Advanced EDR",
  "Advanced RMM",
  "SMB Cyber Security Appliance",
  "SMB Cloud Desktop",
  "WhatsApp SMB"
];
var CLOUD_INFRA_ORDER = [
  "Bare Metal Server",
  "Performance Cloud",
  "Global Server"
];
var CLOUD_DATA_PROTECT_ORDER = [
  "Backup Cloud",
  "Cloud Object Storage",
  "Cloud Disaster Recovery",
  "Microsoft 365 Backup",
  "Microsoft 365 Archiving",
  "Entra ID Backup"
];
var CLOUD_PRODUCTIVITY_ORDER = [
  "Business Email",
  "Microsoft 365 SMB",
  "Microsoft 365 for Enterprise",
  "Microsoft 365 Backup",
  "Zoho Workplace",
  "Google Workspace",
  "Advanced Email Security",
  "Enterprise DMARC"
];
var FLAGSHIP_ICON_PATHS = {
  chart: "M4 20V10h4v10M10 20V4h4v16M16 20v-7h4v7M2 20h20",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-4",
  backup: "M3 12a9 9 0 1 0 3-6.7M3 4v5h5m4-2v5l3 2",
  desktop: "M3 4h18v12H3V4Zm5 16h8m-4-4v4",
  folder: "M3 6h7l2 2h9v10H3V6Z",
  lock: "M7 10V7a5 5 0 0 1 10 0v3m-11 0h12v10H6V10Zm6 4v2",
  message: "M4 5h16v12H8l-4 3V5Zm4 6h.01M12 11h.01M16 11h.01",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  bolt: "m13 2-9 12h7l-1 8 10-13h-7V2Z",
  server: "M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3-7h.01M7 17h.01M11 7h6M11 17h6",
  chip: "M7 7h10v10H7V7Zm3 3h4v4h-4v-4ZM9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3",
  globe: "M3 12h18M12 3a15 15 0 0 1 0 18m0-18a15 15 0 0 0 0 18M4.9 7h14.2M4.9 17h14.2",
  database: "M4 6c0-2 3.6-3 8-3s8 1 8 3-3.6 3-8 3-8-1-8-3Zm0 0v6c0 2 3.6 3 8 3s8-1 8-3V6m-16 6v6c0 2 3.6 3 8 3s8-1 8-3v-6",
  recovery: "M4 4v6h6M5.5 15a8 8 0 1 0 .5-7",
  mobile: "M7 2h10v20H7V2Zm4 16h2",
  workspace: "M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z",
  verified: "M12 3 20 7v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V7l8-4Zm-4 9 2.5 2.5L16 9",
  settings: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4m0-12.8L17 7M7 17l-1.4 1.4",
  compliance: "M6 3h12v18H6V3Zm3 5h6m-6 4h6m-6 4h3"
};
var FLAGSHIP_CARDS = [
  {
    icon: "chart",
    badge: "Top seller",
    hot: true,
    title: "Tally on Cloud",
    blurb: "Run Tally anywhere with ransomware-proof backups every 3 hours.",
    lead: "from ",
    amount: "\u20B9499",
    tail: "/user/mo",
    cta: "View plans \u2192",
    category: "Cloud"
  },
  {
    icon: "shield",
    badge: "Flagship",
    hot: true,
    title: "Advanced EDR",
    blurb: "AI-powered endpoint detection and response, backed by our 24\xD77 SOC.",
    lead: "from ",
    amount: "\u20B9999",
    tail: "/user/mo",
    cta: "View plans \u2192",
    category: "Security",
    service: "Advanced Endpoint Security (EDR)"
  },
  {
    icon: "backup",
    badge: "Data protection",
    title: "Backup Cloud",
    blurb: "Encrypted, ransomware-proof backup for servers, endpoints and M365.",
    lead: "from ",
    amount: "\u20B96",
    tail: "/GB/mo",
    cta: "View plans \u2192",
    category: "Cloud",
    service: "Cloud Backup (Acronis)"
  },
  {
    icon: "desktop",
    badge: "Workspace",
    title: "SMB Cloud Desktop",
    blurb: "Secure desktop, apps and files from any device, anywhere.",
    lead: "from ",
    amount: "\u20B9999",
    tail: "/user/mo",
    cta: "View plans \u2192",
    category: "Cloud"
  },
  {
    icon: "folder",
    badge: "File share",
    title: "Cloud Drive",
    blurb: "Secure file sync, team folders and controlled sharing on every device.",
    lead: "from ",
    amount: "\u20B92,999",
    tail: "/month",
    cta: "Explore \u2192",
    category: "Cloud"
  },
  {
    icon: "lock",
    badge: "New",
    hot: true,
    title: "SMB Cyber Security Appliance",
    blurb: "Cloud firewall, secure Wi-Fi Routers & threat protection for Small Businesses up to 100 users.",
    lead: "from ",
    amount: "\u20B914,999",
    tail: "/year",
    cta: "View plans \u2192",
    category: "Security"
  },
  {
    icon: "message",
    badge: "Business messaging",
    title: "WhatsApp SMB",
    blurb: "WhatsApp Business API for campaigns, automation and a shared inbox.",
    lead: "from ",
    amount: "\u20B91,249",
    tail: "/month",
    cta: "View plans \u2192",
    category: "Cloud"
  },
  {
    icon: "workspace",
    badge: "Productivity",
    title: "Microsoft 365",
    blurb: "Collaborate, create and innovate with the full M365 suite.",
    lead: "from ",
    amount: "\u20B9135",
    tail: "/user/mo",
    cta: "View plans \u2192",
    category: "Cloud"
  },
  {
    icon: "bolt",
    badge: "Compute",
    title: "Performance Cloud",
    blurb: "Screaming-fast cloud servers optimised for demanding workloads.",
    lead: "from ",
    amount: "\u20B9999",
    tail: "/server/mo",
    cta: "View plans \u2192",
    category: "Cloud"
  },
  {
    icon: "server",
    badge: "Infrastructure",
    title: "Bare Metal Server",
    blurb: "Single-tenant dedicated hardware in Indian Tier-4 datacenters.",
    lead: "from ",
    amount: "\u20B96,999",
    tail: "/server/mo",
    cta: "View plans \u2192",
    category: "Cloud",
    service: "Bare Metal Server"
  },
  {
    icon: "globe",
    badge: "Multi-region",
    title: "Global Server",
    service: "Global Cloud",
    blurb: "Deploy and manage workloads across multiple global cloud regions.",
    lead: "",
    amount: "Regional",
    tail: " pricing",
    cta: "Explore \u2192",
    category: "Cloud"
  },
  {
    icon: "database",
    badge: "Object storage",
    title: "Cloud Object Storage",
    blurb: "S3 storage for media, backups and datasets with Indian data residency.",
    lead: "",
    amount: "Per-GB",
    tail: " slabs",
    cta: "Explore \u2192",
    category: "Cloud"
  },
  {
    icon: "recovery",
    badge: "Business continuity",
    title: "Cloud Disaster Recovery",
    blurb: "Automated replication, tested failover and one-click disaster recovery.",
    lead: "",
    amount: "Per-VM",
    tail: " plans",
    cta: "Explore \u2192",
    category: "Cloud"
  },
  {
    icon: "backup",
    badge: "Best seller",
    hot: true,
    title: "Microsoft 365 Backup",
    link: "/microsoft-365-backup",
    blurb: "Backup Exchange, SharePoint, OneDrive and Teams with granular recovery.",
    lead: "",
    amount: "per-user",
    tail: "/month",
    cta: "Explore \u2192",
    category: "Cloud"
  },
  {
    icon: "backup",
    badge: "Email archiving",
    title: "Microsoft 365 Archiving",
    blurb: "Email archiving for Microsoft 365 with long-term retention and easy retrieval.",
    lead: "",
    amount: "per-user",
    tail: "/month",
    cta: "Explore",
    category: "Cloud",
    service: "E-Mail Backup / Archiving"
  },
  {
    icon: "backup",
    badge: "Identity backup",
    title: "Entra ID Backup",
    blurb: "Back up users, groups, roles and policies with object-level recovery.",
    lead: "",
    amount: "Per-tenant",
    tail: "/month",
    cta: "Explore \u2192",
    category: "Cloud"
  },
  {
    icon: "mail",
    badge: "Business mail",
    title: "Business Email",
    blurb: "Professional business email with spam protection and mobile sync.",
    lead: "",
    amount: "per-mailbox",
    tail: "/month",
    cta: "Explore \u2192",
    category: "Cloud",
    service: "Business E-Mail"
  },
  {
    icon: "shield",
    badge: "Email defence",
    title: "Advanced Email Security",
    link: "/vortex-seg",
    blurb: "AI protection against phishing, impersonation, BEC and zero-day threats.",
    lead: "",
    amount: "per-user",
    tail: "/month",
    cta: "Explore \u2192",
    category: "Security"
  },
  {
    icon: "workspace",
    badge: "Collaboration",
    title: "Google Workspace",
    blurb: "Gmail, Drive, Meet and Docs with migration and local support.",
    lead: "",
    amount: "per-user",
    tail: "/month",
    cta: "Explore \u2192",
    category: "Cloud"
  },
  {
    icon: "workspace",
    badge: "SMB suite",
    title: "Microsoft 365 SMB",
    blurb: "Microsoft 365 apps, business email and collaboration for small and medium businesses.",
    lead: "",
    amount: "per-user",
    tail: "/month",
    cta: "Explore",
    category: "Cloud",
    link: "/microsoft-365-smb"
  },
  {
    icon: "workspace",
    badge: "Enterprise suite",
    title: "Microsoft 365 for Enterprise",
    blurb: "Enterprise Microsoft 365 licensing, migration and local expert support.",
    lead: "",
    amount: "per-user",
    tail: "/month",
    cta: "Explore",
    category: "Cloud",
    service: "Microsoft 365"
  },
  {
    icon: "workspace",
    badge: "Business suite",
    title: "Zoho Workplace",
    blurb: "Business email, collaboration and productivity tools for growing teams.",
    lead: "",
    amount: "Talk to us",
    tail: "",
    cta: "Explore",
    category: "Cloud",
    link: "/contact"
  },
  {
    icon: "verified",
    badge: "Best seller",
    hot: true,
    title: "Enterprise DMARC",
    blurb: "Stop domain spoofing with managed SPF, DKIM and DMARC enforcement.",
    lead: "",
    amount: "per-domain",
    tail: " plans",
    cta: "Explore \u2192",
    category: "Security",
    service: "Secure DMARC"
  },
  {
    icon: "settings",
    badge: "Remote management",
    title: "Advanced RMM",
    blurb: "Manage endpoints with alerts, remote access, patching and automation.",
    lead: "from ",
    amount: "\u20B91,199",
    tail: "/user/year",
    cta: "View plans \u2192",
    category: "Cloud",
    service: "Remote Monitoring & Mgmt (RMM)"
  },
  {
    icon: "compliance",
    badge: "In focus",
    hot: true,
    title: "DPDPA Platform",
    blurb: "Consent, data mapping, DPO services and audit readiness \u2014 platform + experts.",
    lead: "",
    amount: "Free",
    tail: " readiness assessment",
    cta: "Book assessment \u2192",
    category: "Security",
    service: "DPDPA Platform & Consulting"
  }
];
var FlagshipComponent = class _FlagshipComponent {
  catalog = inject(CatalogService);
  tabs = FLAGSHIP_TABS;
  activeTab = signal("web-presence", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  activeSourceGroup = computed(() => FLAGSHIP_TAB_SOURCES[this.activeTab()], ...ngDevMode ? [{ debugName: "activeSourceGroup" }] : []);
  /** every card, with the product route resolved through the catalogue */
  cards = FLAGSHIP_CARDS.map((c) => {
    const name = c.service ?? c.title;
    return __spreadProps(__spreadValues(__spreadValues({}, c), !/\d/.test(c.amount) ? { lead: "from ", amount: "\u20B9999", tail: "/month" } : {}), {
      cta: "Explore \u2192",
      iconPath: FLAGSHIP_ICON_PATHS[c.icon],
      groups: FLAGSHIP_CARD_GROUPS[c.title],
      link: c.link ?? "/" + slugify(this.catalog.findInDirectory(name)?.name ?? name)
    });
  });
  visibleCards = computed(() => {
    const group = this.activeSourceGroup();
    if (!group)
      return [];
    if (group === "marketplace") {
      const marketplace = MEGA_MENU.find((item) => item.label === "Marketplace");
      const seen = /* @__PURE__ */ new Set();
      return (marketplace?.tabs ?? []).flatMap((tab) => tab.groups.flatMap((section) => section.items.flatMap((item) => {
        if (item.title !== "TSplus Remote Access")
          return [];
        const service = this.catalog.findInDirectory(item.title)?.name ?? item.title;
        const link = item.href ?? "/" + slugify(service);
        if (seen.has(link))
          return [];
        seen.add(link);
        const rich = this.catalog.rich(service);
        const icon = tab.label === "Remote Access Tools" ? "desktop" : "shield";
        return [{
          title: item.title,
          blurb: item.desc?.trim() || rich?.ov || `Deploy ${item.title} with guided setup and expert support from XcellHost.`,
          badge: item.pill ?? tab.label,
          hot: item.pill === "Free trial",
          icon,
          iconPath: FLAGSHIP_ICON_PATHS[icon],
          lead: "",
          amount: rich?.price || "Quote on request",
          tail: "",
          cta: "Explore \u2192",
          link
        }];
      }))).slice(0, 8);
    }
    if (group === "digital-trust" || group === "security" || group === "ai") {
      const label = this.tabs.find((tab) => tab.id === this.activeTab())?.label;
      const menu = MEGA_MENU.find((item) => item.label === label);
      const menuTabs = menu?.tabs ?? [];
      const seen = /* @__PURE__ */ new Set();
      const icon = group === "ai" ? "chip" : group === "digital-trust" ? "verified" : "shield";
      return menuTabs.flatMap((tab) => tab.groups.flatMap((section) => section.items.flatMap((item) => {
        if (group === "digital-trust" && tab.label !== "SSL by Brand" && !["Certificate Mgmt Solutions", "Digicert VMC", "Digicert CMC"].includes(item.title.trim()))
          return [];
        if (group === "security" && section.heading !== "EndPoint Security")
          return [];
        if (group === "ai" && section.heading !== "AI Tools")
          return [];
        const link = item.href ?? "/" + slugify(this.catalog.findInDirectory(item.title)?.name ?? item.title);
        if (seen.has(link))
          return [];
        seen.add(link);
        return [{
          title: item.title,
          blurb: item.desc?.trim() || (group === "digital-trust" ? `Build customer confidence with ${item.title}, simple setup and expert support.` : group === "security" ? `Protect your business with ${item.title}, centralised management and expert support.` : `Simplify business workflows with ${item.title}, flexible deployment and expert support.`),
          badge: item.pill ?? tab.label,
          hot: item.pill === "New" || item.pill === "Top seller",
          icon,
          iconPath: FLAGSHIP_ICON_PATHS[icon],
          // Demo price until service-specific pricing is supplied.
          lead: "from ",
          amount: "\u20B9999",
          tail: group === "digital-trust" ? "/year" : "/month",
          cta: "Explore \u2192",
          link
        }];
      })));
    }
    const cards = this.cards.filter((card) => card.groups.includes(group));
    if (group === "business") {
      return cards.sort((a, b) => SMB_CLOUD_ORDER.indexOf(a.title) - SMB_CLOUD_ORDER.indexOf(b.title));
    }
    if (group === "infrastructure") {
      return cards.sort((a, b) => CLOUD_INFRA_ORDER.indexOf(a.title) - CLOUD_INFRA_ORDER.indexOf(b.title));
    }
    if (group === "protection") {
      return cards.sort((a, b) => CLOUD_DATA_PROTECT_ORDER.indexOf(a.title) - CLOUD_DATA_PROTECT_ORDER.indexOf(b.title));
    }
    if (group === "workplace") {
      return cards.sort((a, b) => CLOUD_PRODUCTIVITY_ORDER.indexOf(a.title) - CLOUD_PRODUCTIVITY_ORDER.indexOf(b.title));
    }
    return cards;
  }, ...ngDevMode ? [{ debugName: "visibleCards" }] : []);
  selectTab(tab) {
    this.activeTab.set(tab);
  }
  static \u0275fac = function FlagshipComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlagshipComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlagshipComponent, selectors: [["xh-flagship"]], hostAttrs: [2, "display", "contents"], decls: 15, vars: 10, consts: [["id", "flagship"], [1, "wrap"], ["xhReveal", "", 1, "sec-head"], [1, "eyebrow"], ["role", "tablist", "aria-label", "Flagship service categories", "xhReveal", "", 1, "flag-tabs"], ["type", "button", "role", "tab", 3, "id", "active"], ["role", "tabpanel", 1, "prod-grid", "prod-grid-tabbed", 3, "id"], ["xhReveal", "", "target", "_blank", "rel", "noopener noreferrer", 1, "card", 3, "href"], ["type", "button", "role", "tab", 3, "click", "id"], ["aria-hidden", "true", 1, "cicon"], ["viewBox", "0 0 24 24"], [1, "badge"], [1, "price"], [1, "more"]], template: function FlagshipComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Flagship services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "Deploy the future, today");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Transparent INR pricing. Every plan includes 24\xD77 support and free migration.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275repeaterCreate(10, FlagshipComponent_For_11_Template, 3, 6, "button", 5, _forTrack05);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275repeaterCreate(13, FlagshipComponent_For_14_Template, 17, 13, "a", 7, _forTrack12);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("smb-grid", ctx.activeSourceGroup() === "business")("infra-grid", ctx.activeSourceGroup() === "infrastructure")("protect-grid", ctx.activeSourceGroup() === "protection")("productivity-grid", ctx.activeSourceGroup() === "workplace");
      \u0275\u0275property("id", "flag-panel-" + ctx.activeTab());
      \u0275\u0275attribute("aria-labelledby", "flag-tab-" + ctx.activeTab());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.visibleCards());
    }
  }, dependencies: [RevealDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlagshipComponent, [{
    type: Component,
    args: [{
      selector: "xh-flagship",
      standalone: true,
      imports: [RevealDirective],
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section id="flagship">
      <div class="wrap">
        <div class="sec-head" xhReveal>
          <div class="eyebrow">Flagship services</div>
          <h2>Deploy the future, today</h2>
          <p>Transparent INR pricing. Every plan includes 24\xD77 support and free migration.</p>
        </div>
        <div class="flag-tabs" role="tablist" aria-label="Flagship service categories" xhReveal>
          @for (tab of tabs; track tab.id) {
            <button
              type="button"
              role="tab"
              [id]="'flag-tab-' + tab.id"
              [class.active]="activeTab() === tab.id"
              [attr.aria-selected]="activeTab() === tab.id"
              [attr.aria-controls]="'flag-panel-' + tab.id"
              (click)="selectTab(tab.id)"
            >
              <span>{{ tab.label }}</span>
            </button>
          }
        </div>
        <div
          class="prod-grid prod-grid-tabbed"
          [class.smb-grid]="activeSourceGroup() === 'business'"
          [class.infra-grid]="activeSourceGroup() === 'infrastructure'"
          [class.protect-grid]="activeSourceGroup() === 'protection'"
          [class.productivity-grid]="activeSourceGroup() === 'workplace'"
          role="tabpanel"
          [id]="'flag-panel-' + activeTab()"
          [attr.aria-labelledby]="'flag-tab-' + activeTab()"
        >
          @for (c of visibleCards(); track c.title) {
            <a
              class="card"
              xhReveal
              [href]="c.link"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="'Explore ' + c.title + ' (opens in a new tab)'"
            >
              <span class="cicon" [attr.data-icon]="c.icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path [attr.d]="c.iconPath" />
                </svg>
              </span>
              <span class="badge" [class.hot]="c.hot">{{ c.badge }}</span>
              <h3>{{ c.title }}</h3>
              <p>{{ c.blurb }}</p>
              <div class="price">{{ c.lead }}<b>{{ c.amount }}</b>{{ c.tail }}</div>
              <span class="more">{{ c.cta }}</span>
            </a>
          }
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlagshipComponent, { className: "FlagshipComponent", filePath: "src/app/sections/flagship.component.ts", lineNumber: 360 });
})();

// src/app/sections/directory.component.ts
var _forTrack06 = ($index, $item) => $item.cat;
var _forTrack13 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.id;
function DirectoryComponent_For_10_For_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275styleProp("left", r_r5.x, "px")("top", r_r5.y, "px");
  }
}
function DirectoryComponent_For_10_For_9_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1, "Core service");
    \u0275\u0275elementEnd();
  }
}
function DirectoryComponent_For_10_For_9_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 16)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, DirectoryComponent_For_10_For_9_For_12_Conditional_4_Template, 2, 0, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const \u0275$index_49_r7 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("animation-delay", ctx_r3.dominoDelay(\u0275$index_49_r7));
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", s_r6.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r6.core ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r6.desc);
  }
}
function DirectoryComponent_For_10_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "details", 9)(1, "summary", 10);
    \u0275\u0275listener("click", function DirectoryComponent_For_10_For_9_Template_summary_click_1_listener($event) {
      const g_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const c_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onSummary($event, c_r3.cat, g_r2.name));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, DirectoryComponent_For_10_For_9_For_6_Template, 1, 4, "span", 11, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 12)(8, "h5", 13);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul");
    \u0275\u0275repeaterCreate(11, DirectoryComponent_For_10_For_9_For_12_Template, 7, 6, "li", 14, _forTrack13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r2 = ctx.$implicit;
    const c_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("open", ctx_r3.isOpen(c_r3.cat, g_r2.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", g_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.items.length);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.rippleIn(c_r3.cat, g_r2.name));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("--rx", ctx_r3.burstX(c_r3.cat, g_r2.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r2.items);
  }
}
function DirectoryComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275repeaterCreate(8, DirectoryComponent_For_10_For_9_Template, 13, 6, "details", 9, _forTrack13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275attribute("data-category", c_r3.cat);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", c_r3.cat, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.sub);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(c_r3.groups);
  }
}
var NO_RIPPLE = [];
var MENU_ORDER = new Map(MEGA_MENU.map((menu, index) => [menu.label, index]));
var ADDITIONAL_PRACTICES = {
  Productivity: "Email, collaboration, business applications and managed productivity",
  "Data Protection": "Backup, disaster recovery and cyber resilience",
  AI: "AI platforms, development, consulting, security and governance",
  Marketplace: "Software, remote access tools and cloud security solutions"
};
var RIPPLE_MS = 650;
var DOMINO_BASE_S = 0.12;
var DOMINO_STEP_S = 0.028;
var DOMINO_MAX_S = 0.9;
var DirectoryComponent = class _DirectoryComponent {
  catalog = inject(CatalogService);
  cats = computed(() => this.catalog.grouped().map((c) => ({
    cat: c.cat,
    count: c.count,
    sub: c.sub,
    groups: c.groups.map((g) => ({
      name: g.name,
      items: g.items.map((e) => ({
        name: e.name,
        desc: e.desc,
        link: "/" + slugify(e.name),
        core: this.catalog.isCore(e.name)
      }))
    }))
  })).concat(MEGA_MENU.filter((menu) => menu.label in ADDITIONAL_PRACTICES).map((menu) => {
    const groups = menu.tabs.map((tab) => ({
      name: tab.label,
      items: Array.from(new Map(tab.groups.flatMap((group) => group.items).filter((item) => item.title !== "No Data").map((item) => [item.title, item])).values()).map((item) => ({
        name: item.title,
        desc: item.desc || this.catalog.findInDirectory(item.title)?.desc || `Explore ${item.title} services and solutions.`,
        link: item.href || "/" + slugify(item.title),
        core: this.catalog.isCore(item.title)
      }))
    })).filter((group) => group.items.length > 0);
    const count = new Set(groups.flatMap((group) => group.items.map((item) => item.link))).size;
    return { cat: menu.label, count: `${count} services`, sub: ADDITIONAL_PRACTICES[menu.label], groups };
  })).sort((a, b) => (MENU_ORDER.get(a.cat) ?? MEGA_MENU.length) - (MENU_ORDER.get(b.cat) ?? MEGA_MENU.length)), ...ngDevMode ? [{ debugName: "cats" }] : []);
  /** category name → the one group open inside it */
  openGroups = signal(/* @__PURE__ */ new Map(), ...ngDevMode ? [{ debugName: "openGroups" }] : []);
  ripple = signal(null, ...ngDevMode ? [{ debugName: "ripple" }] : []);
  rippleId = 0;
  rippleTimer;
  reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.rippleTimer));
  }
  isOpen(cat, group) {
    return this.openGroups().get(cat)?.group === group;
  }
  /** The circle-burst origin for an open panel, or `null` for the CSS default. */
  burstX(cat, group) {
    const open = this.openGroups().get(cat);
    return open?.group === group ? open.rx : null;
  }
  /** `animation-delay` for the i-th product in a freshly opened panel. */
  dominoDelay(i) {
    return (DOMINO_BASE_S + Math.min(i * DOMINO_STEP_S, DOMINO_MAX_S)).toFixed(3) + "s";
  }
  /** Zero or one ripple — only the summary that was tapped renders it. */
  rippleIn(cat, group) {
    const r = this.ripple();
    return r && r.cat === cat && r.group === group ? [r] : NO_RIPPLE;
  }
  /**
   * Owns the disclosure: `preventDefault` stops the browser toggling `open`
   * behind our back, then the signal decides which group is open.
   */
  onSummary(ev, cat, group) {
    ev.preventDefault();
    const summary = ev.currentTarget;
    const pointer = ev.detail > 0 && !this.reduced;
    const opening = !this.isOpen(cat, group);
    this.openGroups.update((prev) => {
      const next = new Map(prev);
      if (opening)
        next.set(cat, { group, rx: pointer ? this.burstOrigin(summary, ev) : null });
      else
        next.delete(cat);
      return next;
    });
    if (pointer)
      this.showRipple(summary, ev, cat, group);
  }
  /**
   * Where the tap sits across the panel, as a percentage. An open `details.dg`
   * is `flex-basis:100%`, so the panel spans the whole `.dir-grid` — which we
   * can measure now, before the panel has any layout of its own.
   */
  burstOrigin(summary, ev) {
    const grid = summary.closest(".dir-grid");
    if (!grid)
      return null;
    const r = grid.getBoundingClientRect();
    if (r.width <= 0)
      return null;
    const x = Math.max(4, Math.min(96, (ev.clientX - r.left) / r.width * 100));
    return x.toFixed(1) + "%";
  }
  showRipple(summary, ev, cat, group) {
    const r = summary.getBoundingClientRect();
    clearTimeout(this.rippleTimer);
    this.ripple.set({
      id: ++this.rippleId,
      cat,
      group,
      x: ev.clientX - r.left,
      y: ev.clientY - r.top
    });
    this.rippleTimer = setTimeout(() => this.ripple.set(null), RIPPLE_MS);
  }
  static \u0275fac = function DirectoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DirectoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectoryComponent, selectors: [["xh-directory"]], hostAttrs: [2, "display", "contents"], decls: 11, vars: 1, consts: [["id", "directory", 1, "directory"], [1, "wrap"], ["xhReveal", "", 1, "sec-head"], [1, "eyebrow"], [1, "directory-summary"], ["xhReveal", "", 1, "dir-cat"], [1, "cnt"], [1, "sub"], [1, "dir-grid"], [1, "dg", 3, "open"], [3, "click"], [1, "dg-ripple", 3, "left", "top"], [1, "dgroup"], [1, "dg-hid"], [3, "animationDelay"], [1, "dg-ripple"], [3, "routerLink"], [1, "xh-core"]], template: function DirectoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Complete portfolio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "One command center. 300+ services.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(9, DirectoryComponent_For_10_Template, 10, 4, "div", 5, _forTrack06);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("The full XcellHost catalog \u2014 300+ services across ", ctx.cats().length, " practices, each with what it does, all on one page.");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.cats());
    }
  }, dependencies: [RouterLink, RevealDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DirectoryComponent, [{
    type: Component,
    args: [{ selector: "xh-directory", standalone: true, imports: [RouterLink, RevealDirective], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="directory" id="directory">\r\n  <div class="wrap">\r\n    <div class="sec-head" xhReveal>\r\n      <div class="eyebrow">Complete portfolio</div>\r\n      <h2>One command center. 300+ services.</h2>\r\n      <p class="directory-summary">The full XcellHost catalog \u2014 300+ services across {{ cats().length }} practices, each with what it does, all on one page.</p>\r\n    </div>\r\n    @for (c of cats(); track c.cat) {\r\n      <div class="dir-cat" [attr.data-category]="c.cat" xhReveal>\r\n        <h3>{{ c.cat }} <span class="cnt">{{ c.count }}</span></h3>\r\n        <div class="sub">{{ c.sub }}</div>\r\n        <div class="dir-grid">\r\n          @for (g of c.groups; track g.name) {\r\n            <details class="dg" [open]="isOpen(c.cat, g.name)">\r\n              <summary (click)="onSummary($event, c.cat, g.name)">{{ g.name }} <i>{{ g.items.length }}</i>@for (r of rippleIn(c.cat, g.name); track r.id) {<span class="dg-ripple" [style.left.px]="r.x" [style.top.px]="r.y"></span>}</summary>\r\n              <div class="dgroup" [style.--rx]="burstX(c.cat, g.name)">\r\n                <h5 class="dg-hid">{{ g.name }}</h5>\r\n                <ul>\r\n                  @for (s of g.items; track s.name; let i = $index) {\r\n                    <li [style.animationDelay]="dominoDelay(i)"><a [routerLink]="s.link"><b>{{ s.name }}@if (s.core) {<span class="xh-core">Core service</span>}</b><small>{{ s.desc }}</small></a></li>\r\n                  }\r\n                </ul>\r\n              </div>\r\n            </details>\r\n          }\r\n        </div>\r\n      </div>\r\n    }\r\n  </div>\r\n</section>\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryComponent, { className: "DirectoryComponent", filePath: "src/app/sections/directory.component.ts", lineNumber: 90 });
})();

// src/app/sections/host-credibility.component.ts
var _forTrack07 = ($index, $item) => $item.title;
function HostCredibilityComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 6)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", feature_r1.icon, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r1.title);
  }
}
var CREDIBILITY_FEATURES = [
  {
    // Keep this as a single, compact glyph; `domain_verified` renders as a
    // wide composite mark that collides with the card text at this size.
    icon: "domain",
    title: "Tier-4 datacenters",
    body: "Enterprise facilities engineered for availability, resilience and dependable performance."
  },
  {
    icon: "security",
    title: "DDoS protection",
    body: "Layered traffic protection helps keep critical services available during network attacks."
  },
  {
    icon: "hub",
    title: "Carrier-neutral network",
    body: "Multiple connectivity providers create resilient routes and reduce single-carrier dependency."
  },
  {
    icon: "electric_bolt",
    title: "Redundant power",
    body: "UPS systems and backup generation maintain continuity through utility interruptions."
  },
  {
    icon: "support_agent",
    title: "24\xD77 expert support",
    body: "Cloud, network and security engineers are available around the clock when you need help."
  },
  {
    icon: "shield_lock",
    title: "Multi-layer security",
    body: "Controlled access, continuous monitoring and network safeguards protect your workloads."
  },
  {
    icon: "monitoring",
    title: "Scalable infrastructure",
    body: "Add compute, memory and storage as demand changes without rebuilding your environment."
  },
  {
    icon: "energy_savings_leaf",
    title: "Efficient operations",
    body: "Modern infrastructure is managed for efficient resource use without compromising reliability."
  },
  {
    icon: "language",
    title: "Global connectivity",
    body: "Strategic locations and low-latency networks keep teams and customers reliably connected."
  }
];
var HostCredibilityComponent = class _HostCredibilityComponent {
  features = CREDIBILITY_FEATURES;
  static \u0275fac = function HostCredibilityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HostCredibilityComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HostCredibilityComponent, selectors: [["xh-host-credibility"]], hostAttrs: [2, "display", "contents"], decls: 10, vars: 0, consts: [["aria-labelledby", "credibility-title", 1, "credibility"], [1, "wrap"], ["xhReveal", "", 1, "sec-head"], [1, "eyebrow"], ["id", "credibility-title"], [1, "credibility-grid"], ["xhReveal", "", 1, "credibility-card"], ["aria-hidden", "true", 1, "credibility-icon", "material-symbols-outlined"]], template: function HostCredibilityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3);
      \u0275\u0275text(4, "Infrastructure you can trust");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Host With Credibility");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275repeaterCreate(8, HostCredibilityComponent_For_9_Template, 6, 2, "article", 6, _forTrack07);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.features);
    }
  }, dependencies: [RevealDirective], styles: ['\n\n.credibility[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 76px 0;\n  overflow: hidden;\n  border-bottom: 1px solid var(--line);\n  background:\n    radial-gradient(\n      circle at 92% 10%,\n      rgba(21, 101, 216, 0.08),\n      transparent 28%),\n    #fff;\n}\n.sec-head[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.credibility-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(9, minmax(0, 1fr));\n  gap: 10px;\n  padding: 6px 0 18px;\n}\n.credibility-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 136px;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  padding: 18px 10px;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 10px 28px rgba(4, 30, 66, 0.055);\n  transition:\n    transform 0.22s ease,\n    border-color 0.22s ease,\n    box-shadow 0.22s ease;\n}\n.credibility-card[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 54px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  content: "";\n  transition: width 0.22s ease;\n}\n.credibility-card[_ngcontent-%COMP%]:hover {\n  border-color: #bfd3f3;\n  box-shadow: 0 16px 36px rgba(21, 101, 216, 0.11);\n  transform: translateY(-4px);\n}\n.credibility-card[_ngcontent-%COMP%]:hover::after {\n  width: 100%;\n}\n.credibility-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  flex: 0 0 48px;\n  place-items: center;\n  border-radius: 12px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  font-family: "Material Symbols Outlined";\n  font-size: 26px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n  font-feature-settings: "liga";\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 500,\n    "GRAD" 0,\n    "opsz" 28;\n}\n.credibility-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 1px 0 8px;\n  color: var(--navy);\n  font: 600 14px/1.35 var(--disp);\n  overflow-wrap: anywhere;\n}\n@media (max-width: 980px) {\n  .credibility-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 620px) {\n  .credibility[_ngcontent-%COMP%] {\n    padding: 56px 0;\n  }\n  .credibility-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .credibility-card[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .credibility-card[_ngcontent-%COMP%], \n   .credibility-card[_ngcontent-%COMP%]::after {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=host-credibility.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HostCredibilityComponent, [{
    type: Component,
    args: [{ selector: "xh-host-credibility", standalone: true, imports: [RevealDirective], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="credibility" aria-labelledby="credibility-title">
      <div class="wrap">
        <header class="sec-head" xhReveal>
          <div class="eyebrow">Infrastructure you can trust</div>
          <h2 id="credibility-title">Host With Credibility</h2>
        </header>

        <div class="credibility-grid">
          @for (feature of features; track feature.title) {
            <article class="credibility-card" xhReveal>
              <span class="credibility-icon material-symbols-outlined" aria-hidden="true">
                {{ feature.icon }}
              </span>
              <div>
                <h3>{{ feature.title }}</h3>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `, styles: ['/* angular:styles/component:css;bdce03c6b454cf829a0481e3be93a9c63a8ea8954d1d4a8c568086b4333825d9;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/sections/host-credibility.component.ts */\n.credibility {\n  position: relative;\n  padding: 76px 0;\n  overflow: hidden;\n  border-bottom: 1px solid var(--line);\n  background:\n    radial-gradient(\n      circle at 92% 10%,\n      rgba(21, 101, 216, 0.08),\n      transparent 28%),\n    #fff;\n}\n.sec-head {\n  max-width: none;\n}\n.credibility-grid {\n  display: grid;\n  grid-template-columns: repeat(9, minmax(0, 1fr));\n  gap: 10px;\n  padding: 6px 0 18px;\n}\n.credibility-card {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 136px;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 12px;\n  padding: 18px 10px;\n  overflow: hidden;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 10px 28px rgba(4, 30, 66, 0.055);\n  transition:\n    transform 0.22s ease,\n    border-color 0.22s ease,\n    box-shadow 0.22s ease;\n}\n.credibility-card::after {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 54px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      var(--orange));\n  content: "";\n  transition: width 0.22s ease;\n}\n.credibility-card:hover {\n  border-color: #bfd3f3;\n  box-shadow: 0 16px 36px rgba(21, 101, 216, 0.11);\n  transform: translateY(-4px);\n}\n.credibility-card:hover::after {\n  width: 100%;\n}\n.credibility-icon {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  flex: 0 0 48px;\n  place-items: center;\n  border-radius: 12px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  font-family: "Material Symbols Outlined";\n  font-size: 26px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n  font-feature-settings: "liga";\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 500,\n    "GRAD" 0,\n    "opsz" 28;\n}\n.credibility-card h3 {\n  margin: 1px 0 8px;\n  color: var(--navy);\n  font: 600 14px/1.35 var(--disp);\n  overflow-wrap: anywhere;\n}\n@media (max-width: 980px) {\n  .credibility-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 620px) {\n  .credibility {\n    padding: 56px 0;\n  }\n  .credibility-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .credibility-card {\n    min-height: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .credibility-card,\n  .credibility-card::after {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=host-credibility.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HostCredibilityComponent, { className: "HostCredibilityComponent", filePath: "src/app/sections/host-credibility.component.ts", lineNumber: 209 });
})();

// src/app/sections/why.component.ts
var _c04 = ["k"];
var _forTrack08 = ($index, $item) => $item.title;
function WhyComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 6)(1, "span", 10);
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
    const benefit_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(benefit_r1.body);
  }
}
var WHY_CARDS = [
  {
    k: "99.9%",
    title: "Uptime guarantee",
    blurb: "Tier-4 datacenters, proactive monitoring, written SLA."
  },
  {
    k: "15 days",
    title: "Money-back guarantee",
    blurb: "Try any service risk-free \u2014 full refund if not satisfied."
  },
  {
    k: "24\xD77\xD7365",
    title: "Human support",
    blurb: "Certified cloud & security engineers, English and Hindi."
  }
];
var WHY_FEATURES = [
  ["\u2725", "Certified Partner Expertise", "Authorised partner for Google, Microsoft, Zoho, Cisco and Sophos \u2014 backed by certified engineers."],
  ["\u2192", "Zero-Downtime Migrations", "Email, files and apps moved to cloud with full data integrity and proper SPF, DKIM and DMARC."],
  ["\u2699", "Managed Services Built In", "User provisioning, security policies, MDM, backup and monitoring \u2014 all included beyond licenses."],
  ["\u2667", "Local Support, India Hours", "Real engineers in India \u2014 call, WhatsApp or email, with same-day response every business day."]
];
var COUNTER_THRESHOLD = 0.5;
var WhyComponent = class _WhyComponent {
  benefits = [
    { icon: "public", title: "Local & Global", body: "Data centers in India, Europe, US, and Asia." },
    { icon: "attach_money", title: "Transparent Pricing", body: "No hidden costs, pay only for what you use." },
    { icon: "headphones", title: "Personal Support", body: "24/7 engineering support with real humans." },
    { icon: "settings", title: "Customizable", body: "Tailored setups, not cookie-cutter infrastructure." },
    { icon: "shield", title: "Secure & Compliant", body: "PCI-DSS & global compliance standards." }
  ];
  cards = WHY_CARDS;
  features = WHY_FEATURES;
  kEls = viewChildren("k", ...ngDevMode ? [{ debugName: "kEls" }] : []);
  /** `null` where the label does not start with a number — nothing to ramp. */
  figures = WHY_CARDS.map((c) => parseCount(c.k));
  /** text of each `.k`; starts at the final label so it is never blank */
  counters = signal(WHY_CARDS.map((c) => c.k), ...ngDevMode ? [{ debugName: "counters" }] : []);
  reduced = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  observer;
  cancels = [];
  ngAfterViewInit() {
    if (this.reduced || typeof IntersectionObserver === "undefined")
      return;
    const refs = this.kEls();
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting)
          continue;
        this.observer?.unobserve(entry.target);
        const i = refs.findIndex((r) => r.nativeElement === entry.target);
        if (i >= 0)
          this.count(i);
      }
    }, { threshold: COUNTER_THRESHOLD });
    for (const ref of refs)
      this.observer.observe(ref.nativeElement);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    for (const cancel of this.cancels)
      cancel();
    this.cancels.length = 0;
  }
  /** Ramp one figure; the others keep whatever they are already showing. */
  count(i) {
    const figure = this.figures[i];
    if (!figure)
      return;
    this.cancels.push(runCountUp([figure], ([text]) => this.counters.update((v) => v.map((old, j) => j === i ? text : old))));
  }
  static \u0275fac = function WhyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhyComponent, selectors: [["xh-why"]], viewQuery: function WhyComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.kEls, _c04, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, hostAttrs: [2, "display", "contents"], decls: 20, vars: 0, consts: [[1, "why"], [1, "wrap"], [1, "why-layout"], ["xhReveal", "", 1, "why-intro"], [1, "why-badge"], [1, "why-benefits"], [1, "why-benefit"], [1, "why-cta"], ["routerLink", "/about-us", "fragment", "why-reasons", 1, "btn", "btn-ghost"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "why-benefit-icon", "material-symbols-outlined"]], template: function WhyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "Why Xcellhost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7, "A cloud partner that owns the outcome.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9, "We choose, deploy and manage the right stack \u2014 end to end.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5);
      \u0275\u0275repeaterCreate(11, WhyComponent_For_12_Template, 7, 3, "article", 6, _forTrack08);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "small");
      \u0275\u0275text(14, "Trusted by businesses, schools and organizations across India.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "a", 8);
      \u0275\u0275text(17, "Learn More ");
      \u0275\u0275elementStart(18, "span", 9);
      \u0275\u0275text(19, "\u2192");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.benefits);
    }
  }, dependencies: [RevealDirective, RouterLink], styles: ["\n\n.why[_ngcontent-%COMP%]   .why-layout[_ngcontent-%COMP%] {\n  display: block;\n}\n.why[_ngcontent-%COMP%]   .why-intro[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 0 auto;\n  text-align: center;\n}\n.why[_ngcontent-%COMP%]   .why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 17px auto 12px;\n  font-size: clamp(26px, 3.1vw, 43px);\n}\n.why[_ngcontent-%COMP%]   .why-intro[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.why[_ngcontent-%COMP%]   .why-cta[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.why[_ngcontent-%COMP%]   .why-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.why[_ngcontent-%COMP%]   .why-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 26px;\n  margin: 40px 0 32px;\n}\n.why[_ngcontent-%COMP%]   .why-benefit[_ngcontent-%COMP%] {\n  min-width: 0;\n  text-align: center;\n}\n.why[_ngcontent-%COMP%]   .why-benefit-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto 18px;\n  border-radius: 50%;\n  background: #eaf2ff;\n  color: #1565d8;\n  font-size: 30px;\n}\n.why[_ngcontent-%COMP%]   .why-benefit[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.3;\n}\n.why[_ngcontent-%COMP%]   .why-benefit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 220px;\n  color: #000;\n  font-size: 14px;\n  line-height: 1.65;\n}\n@media (max-width: 980px) {\n  .why[_ngcontent-%COMP%]   .why-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 30px 22px;\n  }\n}\n@media (max-width: 600px) {\n  .why[_ngcontent-%COMP%]   .why-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 380px) {\n  .why[_ngcontent-%COMP%]   .why-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=why.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhyComponent, [{
    type: Component,
    args: [{ selector: "xh-why", standalone: true, imports: [RevealDirective, RouterLink], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="why">
      <div class="wrap">
        <div class="why-layout">
          <div class="why-intro" xhReveal>
            <div class="why-badge">Why Xcellhost</div>
            <h2>A cloud partner that owns the outcome.</h2>
            <p>We choose, deploy and manage the right stack \u2014 end to end.</p>
            <div class="why-benefits">
              @for (benefit of benefits; track benefit.title) {
                <article class="why-benefit">
                  <span class="why-benefit-icon material-symbols-outlined" aria-hidden="true">{{ benefit.icon }}</span>
                  <h3>{{ benefit.title }}</h3>
                  <p>{{ benefit.body }}</p>
                </article>
              }
            </div>
            <small>Trusted by businesses, schools and organizations across India.</small>
            <div class="why-cta">
              <a class="btn btn-ghost" routerLink="/about-us" fragment="why-reasons">Learn More <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `, styles: ["/* angular:styles/component:css;3ddba7cef8958bcdbe7f51980cfd6b66b9568bab02238ce4d51eee62e75ed835;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/sections/why.component.ts */\n.why .why-layout {\n  display: block;\n}\n.why .why-intro {\n  max-width: none;\n  margin: 0 auto;\n  text-align: center;\n}\n.why .why-intro h2 {\n  max-width: none;\n  margin: 17px auto 12px;\n  font-size: clamp(26px, 3.1vw, 43px);\n}\n.why .why-intro > p {\n  max-width: none;\n}\n.why .why-cta {\n  margin-top: 24px;\n}\n.why .why-cta .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n.why .why-benefits {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 26px;\n  margin: 40px 0 32px;\n}\n.why .why-benefit {\n  min-width: 0;\n  text-align: center;\n}\n.why .why-benefit-icon {\n  display: grid;\n  place-items: center;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto 18px;\n  border-radius: 50%;\n  background: #eaf2ff;\n  color: #1565d8;\n  font-size: 30px;\n}\n.why .why-benefit h3 {\n  margin: 0 0 12px;\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.3;\n}\n.why .why-benefit p {\n  margin: 0 auto;\n  max-width: 220px;\n  color: #000;\n  font-size: 14px;\n  line-height: 1.65;\n}\n@media (max-width: 980px) {\n  .why .why-benefits {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 30px 22px;\n  }\n}\n@media (max-width: 600px) {\n  .why .why-benefits {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 380px) {\n  .why .why-benefits {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=why.component.css.map */\n"] }]
  }], null, { kEls: [{ type: ViewChildren, args: ["k", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhyComponent, { className: "WhyComponent", filePath: "src/app/sections/why.component.ts", lineNumber: 107 });
})();

// src/app/sections/industries.component.ts
var _forTrack09 = ($index, $item) => $item.service;
function IndustriesComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "span", 6);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 7);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 8)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", i_r1.link);
    \u0275\u0275attribute("data-p", i_r1.service);
    \u0275\u0275advance();
    \u0275\u0275attribute("data-icon", i_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("d", i_r1.iconPath);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r1.blurb);
  }
}
var INDUSTRY_CARDS = [
  { icon: "business", label: "CA Cloud", blurb: "Accounting & audit automation for CAs \u2014 free trial", service: "CA Cloud" },
  { icon: "business", label: "SMB Cloud", blurb: "Simplify operations, mitigate risk", service: "SMB Cloud" },
  { icon: "bank", label: "BFSI Cloud", blurb: "Explore BFSI Cloud services, features and solutions.", service: "BFSI Cloud" },
  { icon: "bank", label: "Insurance Cloud", blurb: "Explore Insurance Cloud services, features and solutions.", service: "Insurance Cloud" },
  { icon: "factory", label: "Manufacturing Cloud", blurb: "Explore Manufacturing Cloud services, features and solutions.", service: "Manufacturing Cloud" },
  { icon: "business", label: "Government Cloud", blurb: "Explore Government Cloud services, features and solutions.", service: "Government Cloud" },
  { icon: "education", label: "Higher Education Cloud", blurb: "Explore Higher Education Cloud services, features and solutions.", service: "Higher Education Cloud" },
  { icon: "business", label: "Pharmaceutical Cloud", blurb: "Explore Pharmaceutical Cloud services, features and solutions.", service: "Pharmaceutical Cloud" },
  { icon: "business", label: "Construction Cloud", blurb: "Explore Construction Cloud services, features and solutions.", service: "Construction Cloud" },
  { icon: "business", label: " Hospitality Cloud", blurb: "Technology designed for food and beverage operations", service: "Food & Beverage" },
  { icon: "business", label: "Hospitality Cloud", blurb: "Cloud solutions for hotels, restaurants and hospitality operations", service: "Hospitality Cloud" },
  { icon: "logistics", label: "Logistics Cloud", blurb: "Explore Logistics Cloud services, features and solutions.", service: "Logistics Cloud" },
  { icon: "healthcare", label: "HealthCare Cloud", blurb: "Explore HealthCare Cloud services, features and solutions.", service: "HealthCare Cloud" },
  { icon: "retail", label: "Retail Cloud", blurb: "Explore Retail Cloud services, features and solutions.", service: "Retail Cloud" },
  { icon: "business", label: "GCC Cloud", blurb: "Managed cloud infrastructure, security and support for GCC teams.", service: "GCC Cloud" }
];
var INDUSTRY_ICON_PATHS = {
  bank: "M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3 3 8h18l-9-5Z",
  factory: "M3 21V9l6 4V9l6 4V6h6v15H3Zm3-3h2m3 0h2m3 0h2M18 6V3h3v3",
  accounting: "M4 3h16v18H4V3Zm4 4h8M8 11h2m4 0h2m-8 4h2m4 0h2m-8 4h8",
  education: "m2 9 10-5 10 5-10 5L2 9Zm4 2v5c3 3 9 3 12 0v-5m4-2v6",
  healthcare: "M9 4v6a3 3 0 0 0 6 0V4m-8 0h4m2 0h4m-5 9v2a4 4 0 0 0 8 0v-1m0 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  business: "M4 21V8h10v13M8 12h2m-2 4h2m7 5V4h3v17M3 21h19",
  retail: "M5 8h14l-1 13H6L5 8Zm3 0V6a4 4 0 0 1 8 0v2",
  logistics: "M3 6h11v11H3V6Zm11 4h4l3 4v3h-7v-7ZM7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
};
var IndustriesComponent = class _IndustriesComponent {
  catalog = inject(CatalogService);
  /** every tile, with the catalogue route resolved once */
  cards = INDUSTRY_CARDS.map((i) => __spreadProps(__spreadValues({}, i), {
    iconPath: INDUSTRY_ICON_PATHS[i.icon],
    link: "/" + slugify(this.catalog.findInDirectory(i.service)?.name ?? i.service)
  }));
  static \u0275fac = function IndustriesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndustriesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IndustriesComponent, selectors: [["xh-industries"]], hostAttrs: [2, "display", "contents"], decls: 12, vars: 0, consts: [["id", "industries", 1, "inds"], [1, "wrap"], ["xhReveal", "", 1, "sec-head", "ind-head"], [1, "ind-eyebrow"], [1, "ind-grid"], [1, "ind", 3, "routerLink"], ["aria-hidden", "true", 1, "ind-i"], ["viewBox", "0 0 24 24"], [1, "ind-copy"]], template: function IndustriesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Industries");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "Cloud, Cyber Security & AI Solutions for Every Indian Industry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Reliable, secure, and scalable cloud servers in India designed for BFSI, healthcare, e-commerce, SaaS, and more.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275repeaterCreate(10, IndustriesComponent_For_11_Template, 9, 6, "a", 5, _forTrack09);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.cards);
    }
  }, dependencies: [RouterLink, RevealDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndustriesComponent, [{
    type: Component,
    args: [{
      selector: "xh-industries",
      standalone: true,
      imports: [RouterLink, RevealDirective],
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="inds" id="industries">
      <div class="wrap">
        <div class="sec-head ind-head" xhReveal>
          <div class="ind-eyebrow">Industries</div>
          <h2>Cloud, Cyber Security & AI Solutions for Every Indian Industry</h2>
          <p>Reliable, secure, and scalable cloud servers in India designed for BFSI, healthcare, e-commerce, SaaS, and more.</p>
        </div>
        <div class="ind-grid">
          @for (i of cards; track i.service) {
            <a class="ind" [attr.data-p]="i.service" [routerLink]="i.link">
              <span class="ind-i" [attr.data-icon]="i.icon" aria-hidden="true"
                ><svg viewBox="0 0 24 24"><path [attr.d]="i.iconPath" /></svg></span
              ><span class="ind-copy"><b>{{ i.label }}</b><span>{{ i.blurb }}</span></span>
            </a>
          }
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IndustriesComponent, { className: "IndustriesComponent", filePath: "src/app/sections/industries.component.ts", lineNumber: 86 });
})();

// src/app/sections/outcomes.component.ts
var _forTrack010 = ($index, $item) => $item.number;
var _forTrack14 = ($index, $item) => $item.label;
function OutcomesComponent_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 25);
    \u0275\u0275text(1, "arrow_forward");
    \u0275\u0275domElementEnd();
  }
}
function OutcomesComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(7, OutcomesComponent_For_12_Conditional_7_Template, 2, 0, "span", 25);
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const \u0275$index_20_r2 = ctx.$index;
    const \u0275$count_20_r3 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", step_r1.number, " ", step_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.body);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_20_r2 === \u0275$count_20_r3 - 1) ? 7 : -1);
  }
}
function OutcomesComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const capability_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(capability_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(capability_r4.label);
  }
}
function OutcomesComponent_For_37_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 25);
    \u0275\u0275text(1, "arrow_forward");
    \u0275\u0275domElementEnd();
  }
}
function OutcomesComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 23)(1, "span", 24);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(7, OutcomesComponent_For_37_Conditional_7_Template, 2, 0, "span", 25);
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const \u0275$index_80_r6 = ctx.$index;
    const \u0275$count_80_r7 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", step_r5.number, " ", step_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r5.body);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_80_r6 === \u0275$count_80_r7 - 1) ? 7 : -1);
  }
}
var OUTCOME_STEPS = [
  {
    number: "1.",
    title: "Understand",
    body: "We understand your business goals and requirements.",
    icon: "chat_bubble_outline"
  },
  {
    number: "2.",
    title: "Architect",
    body: "Our team designs the optimal architecture and selects the right components.",
    icon: "account_tree"
  },
  {
    number: "3.",
    title: "Deliver",
    body: "Your outcome is live, with expert teams and industry best practice.",
    icon: "check_circle_outline"
  },
  {
    number: "4.",
    title: "Optimize",
    body: "We continuously monitor, optimize and enhance for ongoing impact.",
    icon: "monitoring"
  }
];
var PLATFORM_CAPABILITIES = [
  { label: "Compute", icon: "dns" },
  { label: "Storage", icon: "database" },
  { label: "Network", icon: "account_tree" },
  { label: "Security", icon: "shield" },
  { label: "Database", icon: "table_chart" },
  { label: "Backup", icon: "backup" },
  { label: "AI/ML", icon: "auto_awesome" },
  { label: "Compliance", icon: "verified_user" },
  { label: "Monitoring", icon: "monitoring" },
  { label: "Managed Cloud", icon: "settings_suggest" },
  { label: "Managed Security", icon: "admin_panel_settings" },
  { label: "AI Agents", icon: "smart_toy" }
];
var OutcomesComponent = class _OutcomesComponent {
  leftSteps = OUTCOME_STEPS.slice(0, 2);
  rightSteps = OUTCOME_STEPS.slice(2);
  capabilities = PLATFORM_CAPABILITIES;
  static \u0275fac = function OutcomesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OutcomesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OutcomesComponent, selectors: [["xh-outcomes"]], decls: 51, vars: 0, consts: [["aria-labelledby", "outcomes-title", 1, "outcomes"], [1, "wrap"], [1, "outcomes-head"], ["id", "outcomes-title"], [1, "outcomes-flow"], [1, "outcome-step", "outcome-step-left"], ["aria-hidden", "true", 1, "outcome-connector"], [1, "platform-core"], [1, "platform-badge"], ["aria-hidden", "true", 1, "material-symbols-outlined"], [1, "platform-badge-copy"], [1, "pp-ai-powered"], ["viewBox", "0 0 24 24", "aria-hidden", "true", "focusable", "false"], ["fill", "currentColor", "d", "m14 2 2.7 6.3L23 11l-6.3 2.7L14 20l-2.7-6.3L5 11l6.3-2.7L14 2ZM5 1l1.2 2.8L9 5 6.2 6.2 5 9 3.8 6.2 1 5l2.8-1.2L5 1ZM4 15l1.2 2.8L8 19l-2.8 1.2L4 23l-1.2-2.8L0 19l2.8-1.2L4 15Z"], [1, "platform-grid"], [1, "platform-capability"], [1, "platform-agents-note"], [1, "outcome-step", "outcome-step-right"], [1, "outcomes-action"], ["href", "/company/trust-center", 1, "btn", "btn-ghost"], ["aria-hidden", "true"], ["href", "/company/our-platform", 1, "btn", "btn-ghost"], ["href", "/company/trust-watch", 1, "btn", "btn-ghost"], [1, "outcome-card"], ["aria-hidden", "true", 1, "outcome-icon", "material-symbols-outlined"], ["aria-hidden", "true", 1, "outcome-arrow"]], template: function OutcomesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span");
      \u0275\u0275text(4, "THE XCELLHOST PLATFORM");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 3);
      \u0275\u0275text(6, "How XcellHost builds outcomes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p");
      \u0275\u0275text(8, "A proven process that turns your goals into measurable results.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "div", 4)(10, "div", 5);
      \u0275\u0275repeaterCreate(11, OutcomesComponent_For_12_Template, 8, 5, null, null, _forTrack010);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "div", 6);
      \u0275\u0275text(14, "arrow_forward");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "article", 7)(16, "span", 8)(17, "span", 9);
      \u0275\u0275text(18, "cloud");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "span", 10)(20, "span");
      \u0275\u0275text(21, "XcellHost Cloud Platform");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "span", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(23, "svg", 12);
      \u0275\u0275domElement(24, "path", 13);
      \u0275\u0275domElementEnd();
      \u0275\u0275text(25, " AI-POWERED");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(26, "h3");
      \u0275\u0275text(27, "THE PLATFORM ASSEMBLES");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "div", 14);
      \u0275\u0275repeaterCreate(29, OutcomesComponent_For_30_Template, 5, 2, "div", 15, _forTrack14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "p", 16);
      \u0275\u0275text(32, "Over 200 AI Agents at Work 24/7");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(33, "div", 6);
      \u0275\u0275text(34, "arrow_forward");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "div", 17);
      \u0275\u0275repeaterCreate(36, OutcomesComponent_For_37_Template, 8, 5, null, null, _forTrack010);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(38, "div", 18)(39, "a", 19);
      \u0275\u0275text(40, "Watch Tower ");
      \u0275\u0275domElementStart(41, "span", 20);
      \u0275\u0275text(42, "\u2192");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(43, "a", 21);
      \u0275\u0275text(44, "Learn More ");
      \u0275\u0275domElementStart(45, "span", 20);
      \u0275\u0275text(46, "\u2192");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(47, "a", 22);
      \u0275\u0275text(48, "Trust Watch ");
      \u0275\u0275domElementStart(49, "span", 20);
      \u0275\u0275text(50, "\u2192");
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.leftSteps);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.capabilities);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.rightSteps);
    }
  }, styles: ["\n\n.outcomes-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 24px;\n  text-align: center;\n}\n.outcomes-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n}\n@media (max-width: 520px) {\n  .outcomes-action[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.platform-agents-note[_ngcontent-%COMP%] {\n  margin: 24px 0 0;\n  color: var(--blue);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=outcomes.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OutcomesComponent, [{
    type: Component,
    args: [{ selector: "xh-outcomes", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="outcomes" aria-labelledby="outcomes-title">
      <div class="wrap">
        <div class="outcomes-head">
          <span>THE XCELLHOST PLATFORM</span>
          <h2 id="outcomes-title">How XcellHost builds outcomes</h2>
          <p>A proven process that turns your goals into measurable results.</p>
        </div>

        <div class="outcomes-flow">
          <div class="outcome-step outcome-step-left">
            @for (step of leftSteps; track step.number) {
              <article class="outcome-card">
                <span class="outcome-icon material-symbols-outlined" aria-hidden="true">{{ step.icon }}</span>
                <h3>{{ step.number }} {{ step.title }}</h3>
                <p>{{ step.body }}</p>
              </article>
              @if (!$last) { <span class="outcome-arrow" aria-hidden="true">arrow_forward</span> }
            }
          </div>

          <div class="outcome-connector" aria-hidden="true">arrow_forward</div>

          <article class="platform-core">
            <span class="platform-badge">
              <span class="material-symbols-outlined" aria-hidden="true">cloud</span>
              <span class="platform-badge-copy">
                <span>XcellHost Cloud Platform</span>
                <span class="pp-ai-powered"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="m14 2 2.7 6.3L23 11l-6.3 2.7L14 20l-2.7-6.3L5 11l6.3-2.7L14 2ZM5 1l1.2 2.8L9 5 6.2 6.2 5 9 3.8 6.2 1 5l2.8-1.2L5 1ZM4 15l1.2 2.8L8 19l-2.8 1.2L4 23l-1.2-2.8L0 19l2.8-1.2L4 15Z"/></svg> AI-POWERED</span>
              </span>
            </span>
            <h3>THE PLATFORM ASSEMBLES</h3>
            <div class="platform-grid">
              @for (capability of capabilities; track capability.label) {
                <div class="platform-capability">
                  <span class="material-symbols-outlined" aria-hidden="true">{{ capability.icon }}</span>
                  <span>{{ capability.label }}</span>
                </div>
              }
            </div>
            <p class="platform-agents-note">Over 200 AI Agents at Work 24/7</p>
          </article>

          <div class="outcome-connector" aria-hidden="true">arrow_forward</div>

          <div class="outcome-step outcome-step-right">
            @for (step of rightSteps; track step.number) {
              <article class="outcome-card">
                <span class="outcome-icon material-symbols-outlined" aria-hidden="true">{{ step.icon }}</span>
                <h3>{{ step.number }} {{ step.title }}</h3>
                <p>{{ step.body }}</p>
              </article>
              @if (!$last) { <span class="outcome-arrow" aria-hidden="true">arrow_forward</span> }
            }
          </div>
        </div>
        <div class="outcomes-action">
          <a class="btn btn-ghost" href="/company/trust-center">Watch Tower <span aria-hidden="true">\u2192</span></a>
          <a class="btn btn-ghost" href="/company/our-platform">Learn More <span aria-hidden="true">\u2192</span></a>
          <a class="btn btn-ghost" href="/company/trust-watch">Trust Watch <span aria-hidden="true">\u2192</span></a>
        </div>
      </div>
    </section>
  `, styles: ["/* angular:styles/component:css;1da3736d65eaa1c8dc3a8e6699cf28f0323beb045199d69c943cb94a74d7d6d0;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/sections/outcomes.component.ts */\n.outcomes-action {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 24px;\n  text-align: center;\n}\n.outcomes-action .btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  background: #fff;\n}\n@media (max-width: 520px) {\n  .outcomes-action .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.platform-agents-note {\n  margin: 24px 0 0;\n  color: var(--blue);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=outcomes.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OutcomesComponent, { className: "OutcomesComponent", filePath: "src/app/sections/outcomes.component.ts", lineNumber: 133 });
})();

// src/app/sections/new-category.component.ts
var _forTrack011 = ($index, $item) => $item.title;
function NewCategoryComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 8)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div")(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "span", 16);
    \u0275\u0275text(9, "You still own");
    \u0275\u0275domElement(10, "br");
    \u0275\u0275text(11, "the outcome");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const card_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r1.eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r1.title);
  }
}
function NewCategoryComponent_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 13)(1, "span", 6);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const provider_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(provider_r2.body);
  }
}
var CATEGORY_CARDS = [
  { icon: "deployed_code", eyebrow: "Hyperscalers", title: "Infrastructure" },
  { icon: "build", eyebrow: "Managed service providers", title: "Effort" },
  { icon: "explore", eyebrow: "Consultancies", title: "Advice" }
];
var PROVIDER_CARDS = [
  { icon: "cloud", title: "AWS", body: "Sells infrastructure." },
  { icon: "account_tree", title: "Azure", body: "Sells ecosystem." },
  { icon: "memory", title: "Google Cloud", body: "Sells AI." },
  { icon: "groups", title: "Traditional MSPs", body: "Sell managed services." }
];
var NewCategoryComponent = class _NewCategoryComponent {
  categoryCards = CATEGORY_CARDS;
  providerCards = PROVIDER_CARDS;
  static \u0275fac = function NewCategoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewCategoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCategoryComponent, selectors: [["xh-new-category"]], decls: 37, vars: 0, consts: [["aria-labelledby", "new-category-title", 1, "new-category"], [1, "wrap"], [1, "new-category-intro"], [1, "new-category-kicker"], ["id", "new-category-title"], [1, "provider-outcome", "new-category-intro-outcome"], ["aria-hidden", "true", 1, "material-symbols-outlined"], [1, "category-cards"], [1, "category-card"], [1, "new-category-proof", "wrap"], [1, "new-category-statement"], [1, "provider-comparison"], [1, "provider-intro"], [1, "provider-card"], ["aria-hidden", "true", 1, "category-card-icon", "material-symbols-outlined"], [1, "category-card-eyebrow"], [1, "category-card-note"]], template: function NewCategoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "A new category");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 4);
      \u0275\u0275text(6, "The market sells you parts. You are accountable for the whole.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p");
      \u0275\u0275text(8, "So we stopped selling a layer. XcellHost is a Cloud Experience Platform: the outcome is the product, and everything beneath it is ours to assemble and operate.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "article", 5)(10, "h3")(11, "span", 6);
      \u0275\u0275text(12, "cloud");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(13, " XcellHost");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "strong");
      \u0275\u0275text(15, "Delivers sovereign, intelligent business experiences.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "p");
      \u0275\u0275text(17, "You bring the objective.");
      \u0275\u0275domElement(18, "br");
      \u0275\u0275text(19, "We deliver everything under it.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(20, "div", 7);
      \u0275\u0275repeaterCreate(21, NewCategoryComponent_For_22_Template, 12, 3, "article", 8, _forTrack011);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(23, "div", 9)(24, "p", 10);
      \u0275\u0275text(25, "We don't resell a hyperscaler layer and add margin. ");
      \u0275\u0275domElementStart(26, "strong");
      \u0275\u0275text(27, "The infrastructure is ours, in our own in-country facilities.");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(28, " That is why we can commit to the outcome instead of the invoice.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(29, "div", 11)(30, "div", 12)(31, "h3");
      \u0275\u0275text(32, "Where everyone sits");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "p");
      \u0275\u0275text(34, "Not better or worse \u2014 a different unit of sale, and a different amount left on your desk.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275repeaterCreate(35, NewCategoryComponent_For_36_Template, 7, 3, "article", 13, _forTrack011);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(21);
      \u0275\u0275repeater(ctx.categoryCards);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.providerCards);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewCategoryComponent, [{
    type: Component,
    args: [{
      selector: "xh-new-category",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="new-category" aria-labelledby="new-category-title">
      <div class="wrap">
        <div class="new-category-intro">
          <span class="new-category-kicker">A new category</span>
          <h2 id="new-category-title">The market sells you parts. You are accountable for the whole.</h2>
          <p>So we stopped selling a layer. XcellHost is a Cloud Experience Platform: the outcome is the product, and everything beneath it is ours to assemble and operate.</p>
          <article class="provider-outcome new-category-intro-outcome">
            <h3><span class="material-symbols-outlined" aria-hidden="true">cloud</span> XcellHost</h3>
            <strong>Delivers sovereign, intelligent business experiences.</strong>
            <p>You bring the objective.<br />We deliver everything under it.</p>
          </article>
        </div>

        <div class="category-cards">
          @for (card of categoryCards; track card.title) {
            <article class="category-card">
              <span class="category-card-icon material-symbols-outlined" aria-hidden="true">{{ card.icon }}</span>
              <div>
                <span class="category-card-eyebrow">{{ card.eyebrow }}</span>
                <h3>{{ card.title }}</h3>
              </div>
              <span class="category-card-note">You still own<br />the outcome</span>
            </article>
          }
        </div>
      </div>

      <div class="new-category-proof wrap">
        <p class="new-category-statement">We don't resell a hyperscaler layer and add margin. <strong>The infrastructure is ours, in our own in-country facilities.</strong> That is why we can commit to the outcome instead of the invoice.</p>
        <div class="provider-comparison">
          <div class="provider-intro">
            <h3>Where everyone sits</h3>
            <p>Not better or worse &mdash; a different unit of sale, and a different amount left on your desk.</p>
          </div>
          @for (provider of providerCards; track provider.title) {
            <article class="provider-card">
              <span class="material-symbols-outlined" aria-hidden="true">{{ provider.icon }}</span>
              <h4>{{ provider.title }}</h4>
              <p>{{ provider.body }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCategoryComponent, { className: "NewCategoryComponent", filePath: "src/app/sections/new-category.component.ts", lineNumber: 79 });
})();

// src/app/sections/trusted-by.component.ts
var _forTrack012 = ($index, $item) => "duplicate-" + $index;
function TrustedByComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275domElement(1, "img", 10);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const client_r1 = ctx.$implicit;
    \u0275\u0275classMap(client_r1.className);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", client_r1.src, \u0275\u0275sanitizeUrl)("alt", client_r1.name);
  }
}
function TrustedByComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 11);
    \u0275\u0275domElement(1, "img", 12);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const client_r2 = ctx.$implicit;
    \u0275\u0275classMap(client_r2.className);
    \u0275\u0275advance();
    \u0275\u0275domProperty("src", client_r2.src, \u0275\u0275sanitizeUrl);
  }
}
var TRUSTED_CLIENTS = [
  { name: "Canara HSBC Life Insurance", className: "trusted-logo-image", src: "/assets/images/trusted-clients/canara-hsbc.png" },
  { name: "Blue Star Infotech", className: "trusted-logo-image", src: "/assets/images/trusted-clients/blue-star-infotech.webp" },
  { name: "IIFL Finance", className: "trusted-logo-image trusted-logo-iifl", src: "/assets/images/trusted-clients/iifl-finance.png" },
  { name: "Danone", className: "trusted-logo-image", src: "/assets/images/trusted-clients/danone-2013.png" },
  { name: "K Raheja Corp", className: "trusted-logo-image trusted-logo-raheja", src: "/assets/images/trusted-clients/k-raheja.png" },
  { name: "PIBM", className: "trusted-logo-image trusted-logo-pibm", src: "/assets/images/trusted-clients/pibm.png" },
  { name: "Sushil Finance", className: "trusted-logo-image", src: "/assets/images/trusted-clients/sushil-finance.png" },
  { name: "Nilkamal", className: "trusted-logo-image", src: "/assets/images/trusted-clients/nilkamal.png" },
  { name: "Abhijeet", className: "trusted-logo-image", src: "/assets/images/trusted-clients/abhijeet.webp" },
  { name: "Invara Essae Digitronics", className: "trusted-logo-image trusted-logo-invara", src: "/assets/images/trusted-clients/invara-essae.png" },
  { name: "HRH", className: "trusted-logo-image", src: "/assets/images/trusted-clients/hrh.png" },
  { name: "SBI Mutual Fund", className: "trusted-logo-image", src: "/assets/images/trusted-clients/sbi-mutual-fund.png" },
  { name: "All India Football Federation", className: "trusted-logo-image", src: "/assets/images/trusted-clients/aiff.webp" }
];
var TrustedByComponent = class _TrustedByComponent {
  clients = TRUSTED_CLIENTS;
  static \u0275fac = function TrustedByComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrustedByComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrustedByComponent, selectors: [["xh-trusted-by"]], decls: 16, vars: 0, consts: [["aria-label", "Trusted by our clients", 1, "trusted-by"], [1, "wrap"], [1, "trusted-by-panel"], [1, "trusted-by-label"], [1, "trusted-by-count"], [1, "trusted-by-viewport"], [1, "trusted-by-track"], [1, "trusted-logo", 3, "class"], ["aria-hidden", "true", 1, "trusted-logo", 3, "class"], [1, "trusted-logo"], ["width", "160", "height", "64", "loading", "lazy", 3, "src", "alt"], ["aria-hidden", "true", 1, "trusted-logo"], ["alt", "", "width", "160", "height", "64", "loading", "lazy", 3, "src"]], template: function TrustedByComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3)(4, "span");
      \u0275\u0275text(5, "Trusted by over");
      \u0275\u0275domElementStart(6, "strong", 4);
      \u0275\u0275text(7, "10K");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(8, "br");
      \u0275\u0275text(9, "businesses worldwide");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 5)(11, "div", 6);
      \u0275\u0275repeaterCreate(12, TrustedByComponent_For_13_Template, 2, 4, "span", 7, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275repeaterCreate(14, TrustedByComponent_For_15_Template, 2, 3, "span", 8, _forTrack012);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.clients);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.clients);
    }
  }, styles: ["\n\n.trusted-logo-image[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 160px;\n  width: 160px;\n  height: 64px;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n.trusted-logo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 160px;\n  min-width: 160px;\n  max-width: 160px;\n  height: 64px;\n  min-height: 64px;\n  max-height: 64px;\n  object-fit: contain;\n  object-position: center;\n}\n.trusted-logo-iifl[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.6);\n}\n.trusted-logo-raheja[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.trusted-logo-pibm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n}\n.trusted-logo-invara[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(.9);\n}\n/*# sourceMappingURL=trusted-by.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrustedByComponent, [{
    type: Component,
    args: [{ selector: "xh-trusted-by", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="trusted-by" aria-label="Trusted by our clients">
      <div class="wrap">
        <div class="trusted-by-panel">
          <span class="trusted-by-label">
            <span>Trusted by over<strong class="trusted-by-count">10K</strong><br />businesses worldwide</span>
          </span>
          <div class="trusted-by-viewport">
            <div class="trusted-by-track">
              @for (client of clients; track $index) {
                <span class="trusted-logo" [class]="client.className">
                  <img [src]="client.src" [alt]="client.name" width="160" height="64" loading="lazy" />
                </span>
              }
              @for (client of clients; track 'duplicate-' + $index) {
                <span class="trusted-logo" [class]="client.className" aria-hidden="true">
                  <img [src]="client.src" alt="" width="160" height="64" loading="lazy" />
                </span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `, styles: ["/* angular:styles/component:css;40f38714409108248c4d0f4a5a97daf8fe35670c48d6f89dd8eb2a5ff4cffaeb;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/sections/trusted-by.component.ts */\n.trusted-logo-image {\n  display: flex;\n  flex: 0 0 160px;\n  width: 160px;\n  height: 64px;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n}\n.trusted-logo-image img {\n  display: block;\n  width: 160px;\n  min-width: 160px;\n  max-width: 160px;\n  height: 64px;\n  min-height: 64px;\n  max-height: 64px;\n  object-fit: contain;\n  object-position: center;\n}\n.trusted-logo-iifl img {\n  transform: scale(1.6);\n}\n.trusted-logo-raheja img,\n.trusted-logo-pibm img {\n  transform: scale(1.3);\n}\n.trusted-logo-invara img {\n  transform: scale(.9);\n}\n/*# sourceMappingURL=trusted-by.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrustedByComponent, { className: "TrustedByComponent", filePath: "src/app/sections/trusted-by.component.ts", lineNumber: 57 });
})();

// src/app/sections/cases.component.ts
var _forTrack013 = ($index, $item) => $item.title;
function CasesComponent_For_11_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1);
  }
}
function CasesComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 11);
    \u0275\u0275repeaterCreate(10, CasesComponent_For_11_For_11_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("fragment", c_r2.id);
    \u0275\u0275attribute("aria-label", "Read case study: " + c_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.num);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.body);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(c_r2.services);
  }
}
var CASE_CARDS = [
  {
    id: "tally-cloud",
    tag: "Manufacturing \xB7 3 branches",
    num: "2 days \u2192 0",
    title: "Month-end reconciliation disappeared",
    body: "Three branches ran separate Tally files, emailing backups every month-end. After moving to Tally on Cloud, all branches work on one live dataset \u2014 the reconciliation step simply stopped existing.",
    services: ["Tally on Cloud", "Cloud Backup"]
  },
  {
    id: "ca-continuity",
    tag: "CA Firm \xB7 Pune",
    num: "10 minutes",
    title: "From office PC crash to back at work",
    body: "A hardware failure that would once have meant days of recovery and possible data loss became a ten-minute inconvenience \u2014 the team logged in from another laptop and carried on.",
    services: ["Cloud Desktop", "Acronis Backup"]
  },
  {
    id: "dpdpa-readiness",
    tag: "BFSI \xB7 Enterprise",
    num: "8 weeks",
    title: "DPDPA audit-ready before the deadline",
    body: "Data discovery, consent management, a rights portal and vendor DPAs \u2014 deployed and operating, with a named vDPO owning the obligation. Enterprise clients\u2019 due-diligence questions now get answered in minutes.",
    services: ["SecureSetu", "vDPO"]
  }
];
var CasesComponent = class _CasesComponent {
  cases = CASE_CARDS;
  static \u0275fac = function CasesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CasesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CasesComponent, selectors: [["xh-cases"]], hostAttrs: [2, "display", "contents"], decls: 17, vars: 0, consts: [["id", "cases", 1, "cases"], [1, "wrap"], ["xhReveal", "", 1, "sec-head"], [1, "eyebrow"], [1, "case-grid"], ["routerLink", "/case-studies", "target", "_blank", "rel", "noopener", 1, "cs", 3, "fragment"], [1, "cases-cta"], ["routerLink", "/case-studies", 1, "btn", "btn-ghost"], ["aria-hidden", "true"], [1, "cs-tag"], [1, "cs-num"], [1, "cs-foot"]], template: function CasesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Proof, not promises");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6, "What changed for them");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Real outcomes from Indian businesses that moved to XcellHost.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4);
      \u0275\u0275repeaterCreate(10, CasesComponent_For_11_Template, 12, 6, "a", 5, _forTrack013);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6)(13, "a", 7);
      \u0275\u0275text(14, " View all case studies ");
      \u0275\u0275elementStart(15, "span", 8);
      \u0275\u0275text(16, "\u2192");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.cases);
    }
  }, dependencies: [RouterLink, RevealDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CasesComponent, [{
    type: Component,
    args: [{
      selector: "xh-cases",
      imports: [RouterLink, RevealDirective],
      standalone: true,
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="cases" id="cases">
      <div class="wrap">
        <div class="sec-head" xhReveal>
          <div class="eyebrow">Proof, not promises</div>
          <h2>What changed for them</h2>
          <p>Real outcomes from Indian businesses that moved to XcellHost.</p>
        </div>
        <div class="case-grid">
          @for (c of cases; track c.title) {
<a
  class="cs"
  routerLink="/case-studies"
  [fragment]="c.id"
  target="_blank"
  rel="noopener"
  [attr.aria-label]="'Read case study: ' + c.title"
>
              <div class="cs-tag">{{ c.tag }}</div>
              <div class="cs-num">{{ c.num }}</div>
              <b>{{ c.title }}</b>
              <p>{{ c.body }}</p>
              <div class="cs-foot">
                @for (s of c.services; track s) {
                  <span>{{ s }}</span>
                }
              </div>
            </a>
          }
        </div>
        <div class="cases-cta">
          <a class="btn btn-ghost" routerLink="/case-studies">
            View all case studies <span aria-hidden="true">\u2192</span>
          </a>
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CasesComponent, { className: "CasesComponent", filePath: "src/app/sections/cases.component.ts", lineNumber: 102 });
})();

// src/app/sections/global-locations-map.component.ts
var _forTrack014 = ($index, $item) => $item.code;
var _forTrack15 = ($index, $item) => $item.name;
function GlobalLocationsMapComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Our globally distributed facilities use advanced technology to provide secure, stable environments with the performance and reliability your business depends on. ");
    \u0275\u0275elementEnd();
  }
}
function GlobalLocationsMapComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " Explore the Acronis Cyber Cloud footprint and the regional infrastructure options available for cyber protection and data residency. ");
    \u0275\u0275elementEnd();
  }
}
function GlobalLocationsMapComponent_Conditional_14_For_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const location_r1 = ctx.$implicit;
    const pass_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-hidden", pass_r2 === 1 ? "true" : null);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.flagUrl(location_r1.code), \u0275\u0275sanitizeUrl)("alt", location_r1.name + " flag");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(location_r1.name);
  }
}
function GlobalLocationsMapComponent_Conditional_14_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, GlobalLocationsMapComponent_Conditional_14_For_6_For_1_Template, 4, 4, "div", 14, _forTrack014);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.locations);
  }
}
function GlobalLocationsMapComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10);
    \u0275\u0275element(2, "iframe", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275repeaterCreate(5, GlobalLocationsMapComponent_Conditional_14_For_6_Template, 2, 0, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.passes);
  }
}
function GlobalLocationsMapComponent_Conditional_15_For_3_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 21);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const location_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.flagUrl(location_r4.code), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(location_r4.name);
  }
}
function GlobalLocationsMapComponent_Conditional_15_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 18)(1, "summary")(2, "span", 19)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "span", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul");
    \u0275\u0275repeaterCreate(9, GlobalLocationsMapComponent_Conditional_15_For_3_For_10_Template, 4, 2, "li", null, _forTrack15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const region_r5 = ctx.$implicit;
    \u0275\u0275classProp("acronis-africa", region_r5.name === "Africa");
    \u0275\u0275attribute("aria-label", region_r5.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(region_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", region_r5.locations.length, " ", region_r5.locations.length === 1 ? "location" : "locations");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(region_r5.locations);
  }
}
function GlobalLocationsMapComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 16);
    \u0275\u0275repeaterCreate(2, GlobalLocationsMapComponent_Conditional_15_For_3_Template, 11, 6, "details", 17, _forTrack15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.acronisRegions);
  }
}
var DATA_CENTER_LOCATIONS = [
  { flag: "\u{1F1EE}\u{1F1F3}", code: "IN", name: "India" },
  { flag: "\u{1F1FA}\u{1F1F8}", code: "US", name: "United States" },
  { flag: "\u{1F1EC}\u{1F1E7}", code: "GB", name: "United Kingdom" },
  { flag: "\u{1F1E8}\u{1F1E6}", code: "CA", name: "Canada" },
  { flag: "\u{1F1E9}\u{1F1EA}", code: "DE", name: "Germany" },
  { flag: "\u{1F1E6}\u{1F1FA}", code: "AU", name: "Australia" },
  { flag: "\u{1F1EB}\u{1F1F7}", code: "FR", name: "France" },
  { flag: "\u{1F1E6}\u{1F1EA}", code: "AE", name: "Dubai (UAE)" },
  { flag: "\u{1F1F8}\u{1F1EC}", code: "SG", name: "Singapore" },
  { flag: "\u{1F1ED}\u{1F1F0}", code: "HK", name: "Hong Kong" },
  { flag: "\u{1F1F3}\u{1F1F1}", code: "NL", name: "Netherlands" }
];
var ACRONIS_REGIONS = [
  { name: "Americas", locations: [{ name: "Ashburn (VA), United States", code: "US" }, { name: "Phoenix (AZ), United States", code: "US" }, { name: "Quer\xE9taro, Mexico", code: "MX" }, { name: "Sao Paulo, Brazil", code: "BR" }, { name: "Toronto, Canada", code: "CA" }, { name: "Vancouver, Canada", code: "CA" }] },
  { name: "Europe", locations: [{ name: "Berlin, Germany", code: "DE" }, { name: "Billund, Denmark", code: "DK" }, { name: "Frankfurt, Germany", code: "DE" }, { name: "Gothenburg, Sweden", code: "SE" }, { name: "Helsinki, Finland", code: "FI" }, { name: "Istanbul, T\xFCrkiye", code: "TR" }, { name: "Liechtenstein", code: "LI" }, { name: "Lisbon, Portugal", code: "PT" }, { name: "London, United Kingdom", code: "GB" }, { name: "Lupfig, Switzerland", code: "CH" }, { name: "Oslo, Norway", code: "NO" }, { name: "Prague, Czech Republic", code: "CZ" }] },
  { name: "Asia Pacific", locations: [{ name: "Auckland, New Zealand", code: "NZ" }, { name: "Jakarta, Indonesia", code: "ID" }, { name: "Kanagawa, Japan", code: "JP" }, { name: "Kuala Lumpur, Malaysia", code: "MY" }, { name: "Mumbai, India", code: "IN" }, { name: "Nagano, Japan", code: "JP" }, { name: "Seoul, Korea", code: "KR" }, { name: "Singapore", code: "SG" }, { name: "Sydney, Australia", code: "AU" }, { name: "Taipei, Taiwan", code: "TW" }] },
  { name: "Middle East", locations: [{ name: "Abu Dhabi, UAE", code: "AE" }] },
  { name: "Africa", locations: [{ name: "Johannesburg, South Africa", code: "ZA" }] }
];
var GlobalLocationsMapComponent = class _GlobalLocationsMapComponent {
  locations = DATA_CENTER_LOCATIONS;
  acronisRegions = ACRONIS_REGIONS;
  passes = [0, 1];
  activeView = signal("xcellhost", ...ngDevMode ? [{ debugName: "activeView" }] : []);
  flagUrl(code) {
    return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
  }
  static \u0275fac = function GlobalLocationsMapComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GlobalLocationsMapComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GlobalLocationsMapComponent, selectors: [["xh-global-locations-map"]], hostAttrs: [2, "display", "contents"], decls: 16, vars: 8, consts: [["aria-labelledby", "data-centers-title", 1, "data-centers"], [1, "wrap"], ["xhReveal", "", 1, "sec-head"], [1, "eyebrow"], ["id", "data-centers-title"], ["role", "tablist", "aria-label", "Choose a data center network", 1, "dc-view-switch"], ["type", "button", "role", "tab", "aria-controls", "xcellhost-dcs", 3, "click"], ["type", "button", "role", "tab", "aria-controls", "acronis-dcs", 3, "click"], ["id", "xcellhost-dcs", "role", "tabpanel", "aria-label", "XcellHost data centers", 1, "dc-tab-panel"], ["id", "acronis-dcs", "role", "tabpanel", "aria-label", "Acronis data centers", 1, "dc-tab-panel"], [1, "map-stage"], ["src", \u0275\u0275trustConstantResourceUrl`/assets/animations/xcellhost-globe.html?mode=globe`, "title", "Interactive globe showing XcellHost data center locations", "scrolling", "no", "loading", "eager", 1, "global-dc-globe"], ["aria-label", "Datacenter regions", "xhReveal", "", 1, "location-marquee"], [1, "location-track"], [1, "location-chip"], ["loading", "lazy", 1, "location-flag", 3, "src", "alt"], [1, "acronis-regions"], [1, "acronis-region", 3, "acronis-africa"], [1, "acronis-region"], [1, "region-heading"], ["aria-hidden", "true", 1, "region-toggle"], ["alt", "", "width", "22", "height", "16", "loading", "lazy", 1, "acronis-country-flag", 3, "src"]], template: function GlobalLocationsMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3);
      \u0275\u0275text(4, "Global infrastructure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Global Data Centers");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, GlobalLocationsMapComponent_Conditional_7_Template, 2, 0, "p")(8, GlobalLocationsMapComponent_Conditional_8_Template, 2, 0, "p");
      \u0275\u0275elementStart(9, "div", 5)(10, "button", 6);
      \u0275\u0275listener("click", function GlobalLocationsMapComponent_Template_button_click_10_listener() {
        return ctx.activeView.set("xcellhost");
      });
      \u0275\u0275text(11, "View XcellHost Global DC\u2019s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 7);
      \u0275\u0275listener("click", function GlobalLocationsMapComponent_Template_button_click_12_listener() {
        return ctx.activeView.set("acronis");
      });
      \u0275\u0275text(13, "View Acronis Global DC\u2019s");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(14, GlobalLocationsMapComponent_Conditional_14_Template, 7, 0, "div", 8)(15, GlobalLocationsMapComponent_Conditional_15_Template, 4, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.activeView() === "xcellhost" ? 7 : 8);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.activeView() === "xcellhost");
      \u0275\u0275attribute("aria-selected", ctx.activeView() === "xcellhost");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.activeView() === "acronis");
      \u0275\u0275attribute("aria-selected", ctx.activeView() === "acronis");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activeView() === "xcellhost" ? 14 : 15);
    }
  }, dependencies: [RevealDirective], styles: ['\n\n.acronis-regions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 36px;\n  text-align: left;\n  align-items: start;\n}\n.acronis-region[_ngcontent-%COMP%] {\n  border: 1px solid #cbdaf0;\n  border-radius: 14px;\n  background: transparent;\n  overflow: hidden;\n  transition: border-color .2s;\n}\n.acronis-region[_ngcontent-%COMP%]:hover {\n  border-color: #79a6e8;\n}\n.acronis-region[open][_ngcontent-%COMP%] {\n  border-color: #1565d8;\n}\n.acronis-region[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  min-height: 116px;\n  padding: 20px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  cursor: pointer;\n  list-style: none;\n  color: var(--navy);\n}\n.acronis-region[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.acronis-region[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: -4px;\n  border-radius: 14px;\n}\n.region-heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.region-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font: 600 14px/1.4 var(--body);\n}\n.region-heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font: 500 11px/1.3 var(--body);\n  color: #647a99;\n  letter-spacing: .03em;\n}\n.region-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: #e1ebfc;\n  color: #1565d8;\n}\n.region-toggle[_ngcontent-%COMP%]::before, \n.region-toggle[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 12px;\n  width: 10px;\n  height: 2px;\n  background: currentColor;\n  border-radius: 2px;\n}\n.region-toggle[_ngcontent-%COMP%]::after {\n  transform: rotate(90deg);\n}\n.acronis-region[open][_ngcontent-%COMP%]   .region-toggle[_ngcontent-%COMP%] {\n  background: #1565d8;\n  color: #fff;\n}\n.acronis-region[open][_ngcontent-%COMP%]   .region-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.acronis-region[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cfdef1;\n}\n.acronis-region[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 10px 16px 16px;\n}\n.acronis-region[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 0;\n  color: var(--slate);\n  font: 400 13px/1.55 var(--body);\n}\n.acronis-country-flag[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 16px;\n  object-fit: contain;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n@media (max-width: 1000px) {\n  .acronis-regions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 540px) {\n  .acronis-regions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .acronis-region[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n    min-height: 80px;\n  }\n}\n.data-centers[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 76px 0;\n  overflow: hidden;\n  border-block: 1px solid var(--line);\n  background:\n    radial-gradient(\n      circle at 92% 8%,\n      rgba(21, 101, 216, 0.11),\n      transparent 28%),\n    var(--ice);\n}\n.data-centers[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto 26px;\n  text-align: center;\n}\n.data-centers[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.data-centers[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]::after {\n  margin-inline: auto;\n}\n.dc-view-switch[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 5px;\n  margin-top: 22px;\n  padding: 5px;\n  border: 1px solid #c9d8ed;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .78);\n  box-shadow: 0 8px 22px rgba(4, 30, 66, .08);\n}\n.dc-view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 9px 19px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--slate);\n  font: 700 13px/1 var(--body);\n  cursor: pointer;\n  transition:\n    background .2s,\n    color .2s,\n    box-shadow .2s,\n    transform .2s;\n}\n.dc-view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n}\n.dc-view-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--blue);\n  color: #fff;\n  box-shadow: 0 7px 16px rgba(21, 101, 216, .25);\n}\n.dc-view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(21, 101, 216, .25);\n  outline-offset: 2px;\n}\n.dc-tab-panel[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_dc-panel-in .35s ease both;\n}\n@keyframes _ngcontent-%COMP%_dc-panel-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n}\n.map-stage[_ngcontent-%COMP%] {\n  display: grid;\n  max-width: 1180px;\n  margin: 0 auto;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: center;\n  isolation: isolate;\n}\n.location-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 6px;\n}\n.location-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font: 800 clamp(52px, 7vw, 78px) / 0.92 var(--disp);\n  letter-spacing: -0.06em;\n}\n.location-count[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 7px 13px;\n  border-radius: 5px;\n  background: var(--orange);\n  color: #fff;\n  font: 600 14px/1 var(--mono);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.map-stage[_ngcontent-%COMP%]   .global-dc-globe[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: min(100%, 720px);\n  height: clamp(430px, 65vw, 720px);\n  margin: 0 auto;\n  border: 0;\n  overflow: hidden;\n  background: transparent;\n}\n.location-marquee[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 12px;\n  overflow: hidden;\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 5%,\n      #000 95%,\n      transparent);\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 5%,\n      #000 95%,\n      transparent);\n}\n.location-track[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  gap: 14px;\n  padding: 10px 7px;\n  animation: _ngcontent-%COMP%_locations-scroll 34s linear infinite;\n}\n.location-marquee[_ngcontent-%COMP%]:hover   .location-track[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n.location-chip[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 176px;\n  min-height: 58px;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 18px;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 7px 20px rgba(4, 30, 66, 0.06);\n}\n.location-flag[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 34px;\n  height: 23px;\n  display: inline-block;\n  overflow: hidden;\n  border-radius: 3px;\n  box-shadow: 0 1px 4px rgba(4, 30, 66, .18);\n  object-fit: cover;\n}\n.location-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--navy);\n  font: 600 13px/1.3 var(--body);\n  text-overflow: ellipsis;\n}\n.acronis-location-track[_ngcontent-%COMP%] {\n  animation-duration: 80s;\n}\n.acronis-source[_ngcontent-%COMP%] {\n  display: block;\n  width: max-content;\n  margin: 10px auto 0;\n  color: var(--blue);\n  font: 700 12px/1.3 var(--body);\n  text-decoration: none;\n}\n.acronis-source[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@keyframes _ngcontent-%COMP%_locations-scroll {\n  to {\n    transform: translateX(calc(-50% - 7px));\n  }\n}\n@media (max-width: 720px) {\n  .data-centers[_ngcontent-%COMP%] {\n    padding: 56px 0;\n  }\n  .map-stage[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .location-count[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 1;\n    width: max-content;\n    margin: 0 auto -18px;\n    align-items: center;\n  }\n  .dc-view-switch[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dc-view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    padding-inline: 10px;\n  }\n}\n@media (max-width: 430px) {\n  .map-stage[_ngcontent-%COMP%] {\n    margin-inline: -10px;\n  }\n  .location-chip[_ngcontent-%COMP%] {\n    min-width: 160px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .location-track[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .dc-tab-panel[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=global-locations-map.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GlobalLocationsMapComponent, [{
    type: Component,
    args: [{ selector: "xh-global-locations-map", standalone: true, imports: [RevealDirective], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="data-centers" aria-labelledby="data-centers-title">
      <div class="wrap">
        <header class="sec-head" xhReveal>
          <div class="eyebrow">Global infrastructure</div>
          <h2 id="data-centers-title">Global Data Centers</h2>
          @if (activeView() === 'xcellhost') {
            <p>
              Our globally distributed facilities use advanced technology to provide secure,
              stable environments with the performance and reliability your business depends on.
            </p>
          } @else {
            <p>
              Explore the Acronis Cyber Cloud footprint and the regional infrastructure options
              available for cyber protection and data residency.
            </p>
          }
          <div class="dc-view-switch" role="tablist" aria-label="Choose a data center network">
            <button
              type="button"
              role="tab"
              [class.active]="activeView() === 'xcellhost'"
              [attr.aria-selected]="activeView() === 'xcellhost'"
              aria-controls="xcellhost-dcs"
              (click)="activeView.set('xcellhost')"
            >View XcellHost Global DC\u2019s</button>
            <button
              type="button"
              role="tab"
              [class.active]="activeView() === 'acronis'"
              [attr.aria-selected]="activeView() === 'acronis'"
              aria-controls="acronis-dcs"
              (click)="activeView.set('acronis')"
            >View Acronis Global DC\u2019s</button>
          </div>
        </header>

        @if (activeView() === 'xcellhost') {
        <div id="xcellhost-dcs" class="dc-tab-panel" role="tabpanel" aria-label="XcellHost data centers">
        <div class="map-stage">
          <iframe
            class="global-dc-globe"
            src="/assets/animations/xcellhost-globe.html?mode=globe"
            title="Interactive globe showing XcellHost data center locations"
            scrolling="no"
            loading="eager"
          ></iframe>
        </div>

        <div class="location-marquee" aria-label="Datacenter regions" xhReveal>
          <div class="location-track">
            @for (pass of passes; track pass) {
              @for (location of locations; track location.code) {
                <div class="location-chip" [attr.aria-hidden]="pass === 1 ? 'true' : null">
                  <img class="location-flag" [src]="flagUrl(location.code)" [alt]="location.name + ' flag'" loading="lazy" />
                  <strong>{{ location.name }}</strong>
                </div>
              }
            }
          </div>
        </div>
        </div>
        } @else {
        <div id="acronis-dcs" class="dc-tab-panel" role="tabpanel" aria-label="Acronis data centers">
          <div class="acronis-regions">
            @for (region of acronisRegions; track region.name) {
              <details class="acronis-region" [class.acronis-africa]="region.name === 'Africa'" [attr.aria-label]="region.name">
                <summary><span class="region-heading"><strong>{{ region.name }}</strong><small>{{ region.locations.length }} {{ region.locations.length === 1 ? 'location' : 'locations' }}</small></span><span class="region-toggle" aria-hidden="true"></span></summary>
                <ul>
                  @for (location of region.locations; track location.name) {
                    <li><img class="acronis-country-flag" [src]="flagUrl(location.code)" alt="" width="22" height="16" loading="lazy" /><span>{{ location.name }}</span></li>
                  }
                </ul>
              </details>
            }
          </div>
        </div>
        }
      </div>
    </section>
  `, styles: ['/* angular:styles/component:css;1fac9aaeaa0d70105412a9ff31da4472cef9e65da2e33e31ac07d1cd0b488026;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/sections/global-locations-map.component.ts */\n.acronis-regions {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 36px;\n  text-align: left;\n  align-items: start;\n}\n.acronis-region {\n  border: 1px solid #cbdaf0;\n  border-radius: 14px;\n  background: transparent;\n  overflow: hidden;\n  transition: border-color .2s;\n}\n.acronis-region:hover {\n  border-color: #79a6e8;\n}\n.acronis-region[open] {\n  border-color: #1565d8;\n}\n.acronis-region summary {\n  min-height: 116px;\n  padding: 20px 16px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  cursor: pointer;\n  list-style: none;\n  color: var(--navy);\n}\n.acronis-region summary::-webkit-details-marker {\n  display: none;\n}\n.acronis-region summary:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: -4px;\n  border-radius: 14px;\n}\n.region-heading {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.region-heading strong {\n  font: 600 14px/1.4 var(--body);\n}\n.region-heading small {\n  font: 500 11px/1.3 var(--body);\n  color: #647a99;\n  letter-spacing: .03em;\n}\n.region-toggle {\n  position: relative;\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background: #e1ebfc;\n  color: #1565d8;\n}\n.region-toggle::before,\n.region-toggle::after {\n  content: "";\n  position: absolute;\n  left: 8px;\n  top: 12px;\n  width: 10px;\n  height: 2px;\n  background: currentColor;\n  border-radius: 2px;\n}\n.region-toggle::after {\n  transform: rotate(90deg);\n}\n.acronis-region[open] .region-toggle {\n  background: #1565d8;\n  color: #fff;\n}\n.acronis-region[open] .region-toggle::after {\n  display: none;\n}\n.acronis-region[open] summary {\n  border-bottom: 1px solid #cfdef1;\n}\n.acronis-region ul {\n  list-style: none;\n  margin: 0;\n  padding: 10px 16px 16px;\n}\n.acronis-region li {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 10px 0;\n  color: var(--slate);\n  font: 400 13px/1.55 var(--body);\n}\n.acronis-country-flag {\n  width: 22px;\n  height: 16px;\n  object-fit: contain;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n@media (max-width: 1000px) {\n  .acronis-regions {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 540px) {\n  .acronis-regions {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .acronis-region summary {\n    min-height: 80px;\n  }\n}\n.data-centers {\n  position: relative;\n  padding: 76px 0;\n  overflow: hidden;\n  border-block: 1px solid var(--line);\n  background:\n    radial-gradient(\n      circle at 92% 8%,\n      rgba(21, 101, 216, 0.11),\n      transparent 28%),\n    var(--ice);\n}\n.data-centers .sec-head {\n  max-width: 820px;\n  margin: 0 auto 26px;\n  text-align: center;\n}\n.data-centers .eyebrow {\n  display: inline-block;\n}\n.data-centers .eyebrow::after {\n  margin-inline: auto;\n}\n.dc-view-switch {\n  display: inline-flex;\n  gap: 5px;\n  margin-top: 22px;\n  padding: 5px;\n  border: 1px solid #c9d8ed;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .78);\n  box-shadow: 0 8px 22px rgba(4, 30, 66, .08);\n}\n.dc-view-switch button {\n  min-height: 42px;\n  padding: 9px 19px;\n  border: 0;\n  border-radius: 999px;\n  background: transparent;\n  color: var(--slate);\n  font: 700 13px/1 var(--body);\n  cursor: pointer;\n  transition:\n    background .2s,\n    color .2s,\n    box-shadow .2s,\n    transform .2s;\n}\n.dc-view-switch button:hover {\n  color: var(--blue);\n}\n.dc-view-switch button.active {\n  background: var(--blue);\n  color: #fff;\n  box-shadow: 0 7px 16px rgba(21, 101, 216, .25);\n}\n.dc-view-switch button:focus-visible {\n  outline: 3px solid rgba(21, 101, 216, .25);\n  outline-offset: 2px;\n}\n.dc-tab-panel {\n  animation: dc-panel-in .35s ease both;\n}\n@keyframes dc-panel-in {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n}\n.map-stage {\n  display: grid;\n  max-width: 1180px;\n  margin: 0 auto;\n  grid-template-columns: minmax(0, 1fr);\n  align-items: center;\n  isolation: isolate;\n}\n.location-count {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 6px;\n}\n.location-count strong {\n  color: var(--navy);\n  font: 800 clamp(52px, 7vw, 78px) / 0.92 var(--disp);\n  letter-spacing: -0.06em;\n}\n.location-count span {\n  padding: 7px 13px;\n  border-radius: 5px;\n  background: var(--orange);\n  color: #fff;\n  font: 600 14px/1 var(--mono);\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.map-stage .global-dc-globe {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: min(100%, 720px);\n  height: clamp(430px, 65vw, 720px);\n  margin: 0 auto;\n  border: 0;\n  overflow: hidden;\n  background: transparent;\n}\n.location-marquee {\n  width: 100%;\n  margin-top: 12px;\n  overflow: hidden;\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 5%,\n      #000 95%,\n      transparent);\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 5%,\n      #000 95%,\n      transparent);\n}\n.location-track {\n  display: flex;\n  width: max-content;\n  gap: 14px;\n  padding: 10px 7px;\n  animation: locations-scroll 34s linear infinite;\n}\n.location-marquee:hover .location-track {\n  animation-play-state: paused;\n}\n.location-chip {\n  display: flex;\n  min-width: 176px;\n  min-height: 58px;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 18px;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 7px 20px rgba(4, 30, 66, 0.06);\n}\n.location-flag {\n  flex: 0 0 auto;\n  width: 34px;\n  height: 23px;\n  display: inline-block;\n  overflow: hidden;\n  border-radius: 3px;\n  box-shadow: 0 1px 4px rgba(4, 30, 66, .18);\n  object-fit: cover;\n}\n.location-chip strong {\n  overflow: hidden;\n  color: var(--navy);\n  font: 600 13px/1.3 var(--body);\n  text-overflow: ellipsis;\n}\n.acronis-location-track {\n  animation-duration: 80s;\n}\n.acronis-source {\n  display: block;\n  width: max-content;\n  margin: 10px auto 0;\n  color: var(--blue);\n  font: 700 12px/1.3 var(--body);\n  text-decoration: none;\n}\n.acronis-source:hover {\n  text-decoration: underline;\n}\n@keyframes locations-scroll {\n  to {\n    transform: translateX(calc(-50% - 7px));\n  }\n}\n@media (max-width: 720px) {\n  .data-centers {\n    padding: 56px 0;\n  }\n  .map-stage {\n    grid-template-columns: 1fr;\n  }\n  .location-count {\n    position: relative;\n    z-index: 1;\n    width: max-content;\n    margin: 0 auto -18px;\n    align-items: center;\n  }\n  .dc-view-switch {\n    width: 100%;\n  }\n  .dc-view-switch button {\n    flex: 1;\n    padding-inline: 10px;\n  }\n}\n@media (max-width: 430px) {\n  .map-stage {\n    margin-inline: -10px;\n  }\n  .location-chip {\n    min-width: 160px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .location-track {\n    animation: none;\n  }\n  .dc-tab-panel {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=global-locations-map.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GlobalLocationsMapComponent, { className: "GlobalLocationsMapComponent", filePath: "src/app/sections/global-locations-map.component.ts", lineNumber: 353 });
})();

// src/app/sections/satisfaction-guarantee.component.ts
var _forTrack015 = ($index, $item) => $item.title;
function SatisfactionGuaranteeComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 4)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const promise_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", promise_r1.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promise_r1.kicker);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promise_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promise_r1.body);
  }
}
function SatisfactionGuaranteeComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 4)(1, "span", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const promise_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", promise_r2.icon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promise_r2.kicker);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promise_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(promise_r2.body);
  }
}
var PROMISES = [
  {
    icon: "currency_rupee",
    kicker: "15 days",
    title: "Money-back Gurantee on Selected Products",
    body: "A straightforward start, backed by clear terms."
  },
  {
    icon: "handshake",
    kicker: "People first",
    title: "Customer commitment",
    body: "Real specialists who stay accountable to your outcome."
  },
  {
    icon: "price_check",
    kicker: "Fair by design",
    title: "Lowest-price commitment",
    body: "Clear, competitive pricing with no hidden surprises."
  },
  {
    icon: "verified_user",
    kicker: "Proven trust",
    title: "Trusted & Secure",
    body: "Cloud services built around security and reliability."
  }
];
var SatisfactionGuaranteeComponent = class _SatisfactionGuaranteeComponent {
  promises = PROMISES;
  static \u0275fac = function SatisfactionGuaranteeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SatisfactionGuaranteeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SatisfactionGuaranteeComponent, selectors: [["xh-satisfaction-guarantee"]], hostAttrs: [2, "display", "contents"], decls: 18, vars: 0, consts: [["aria-labelledby", "satisfaction-title", 1, "satisfaction"], [1, "wrap"], ["xhReveal", "", 1, "satisfaction-panel"], [1, "promise-grid"], [1, "promise-card"], [1, "guarantee-mark"], [1, "guarantee-ring"], [1, "guarantee-kicker"], ["id", "satisfaction-title"], [1, "guarantee-banner"], [1, "guarantee-label"], ["aria-hidden", "true", 1, "promise-icon", "material-symbols-outlined"], [1, "promise-kicker"]], template: function SatisfactionGuaranteeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275repeaterCreate(4, SatisfactionGuaranteeComponent_For_5_Template, 9, 4, "article", 4, _forTrack015);
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "span", 7);
      \u0275\u0275text(9, "Our promise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "strong", 8);
      \u0275\u0275text(11, "100%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span", 9);
      \u0275\u0275text(13, "Satisfaction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 10);
      \u0275\u0275text(15, "Guaranteed");
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(16, SatisfactionGuaranteeComponent_For_17_Template, 9, 4, "article", 4, _forTrack015);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.promises.slice(0, 2));
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.promises.slice(2));
    }
  }, dependencies: [RevealDirective], styles: ['\n\n.satisfaction[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n.satisfaction[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 0;\n  padding: 0;\n}\n.satisfaction-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 34px;\n  border-block: 1px solid var(--line);\n  border-radius: 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(21, 101, 216, 0.08),\n      transparent 38%),\n    #fff;\n  box-shadow: 0 18px 48px rgba(4, 30, 66, 0.07);\n}\n.satisfaction-panel[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      115deg,\n      transparent 0 82px,\n      rgba(21, 101, 216, 0.025) 82px 84px);\n  content: "";\n  pointer-events: none;\n}\n.promise-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 100%;\n  max-width: 1172px;\n  margin: 0 auto;\n  grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(230px, 1.18fr) repeat(2, minmax(0, 1fr));\n  align-items: center;\n  gap: 14px;\n}\n.promise-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 218px;\n  padding: 22px 18px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 10px 28px rgba(4, 30, 66, 0.06);\n  text-align: center;\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    background 0.25s ease;\n}\n.promise-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: rgba(21, 101, 216, 0.45);\n  background: var(--ice);\n}\n.promise-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 54px;\n  height: 54px;\n  margin: 0 auto 14px;\n  place-items: center;\n  border: 1px solid #bfd3f3;\n  border-radius: 15px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  font-family: "Material Symbols Outlined";\n  font-size: 30px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n  font-feature-settings: "liga";\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 500,\n    "GRAD" 0,\n    "opsz" 32;\n}\n.promise-kicker[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 7px;\n  color: #c86600;\n  font: 600 10px/1.2 var(--mono);\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.promise-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: var(--navy);\n  font: 600 15px/1.3 var(--disp);\n}\n.promise-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--slate);\n  font-size: 12.5px;\n  line-height: 1.55;\n}\n.guarantee-mark[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 252px;\n  place-items: center;\n  padding: 8px;\n}\n.guarantee-ring[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 224px;\n  height: 224px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(127, 178, 255, 0.62);\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 50% 32%,\n      rgba(21, 101, 216, 0.72),\n      rgba(4, 30, 66, 0.96) 68%);\n  box-shadow:\n    0 0 0 9px rgba(21, 101, 216, 0.12),\n    0 0 0 10px rgba(127, 178, 255, 0.2),\n    0 24px 50px rgba(0, 0, 0, 0.32);\n}\n.guarantee-kicker[_ngcontent-%COMP%], \n.guarantee-label[_ngcontent-%COMP%] {\n  color: #b9c9e2;\n  font: 600 10px/1 var(--mono);\n  letter-spacing: 0.17em;\n  text-transform: uppercase;\n}\n.guarantee-ring[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin: 7px 0 9px;\n  color: #fff;\n  font: 800 52px/0.95 var(--disp);\n  letter-spacing: -0.06em;\n}\n.guarantee-banner[_ngcontent-%COMP%] {\n  width: calc(100% + 36px);\n  margin-bottom: 12px;\n  padding: 8px 12px;\n  border-radius: 7px;\n  background: var(--orange);\n  color: #fff;\n  font: 700 16px/1 var(--disp);\n  letter-spacing: 0.02em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 8px 22px rgba(255, 140, 26, 0.28);\n}\n@media (max-width: 1100px) {\n  .promise-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .guarantee-mark[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    grid-row: 1;\n  }\n}\n@media (max-width: 640px) {\n  .satisfaction[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .satisfaction[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .satisfaction-panel[_ngcontent-%COMP%] {\n    padding: 28px 18px;\n    border-radius: 0;\n  }\n  .promise-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .guarantee-mark[_ngcontent-%COMP%] {\n    grid-column: auto;\n    min-height: 238px;\n  }\n  .guarantee-ring[_ngcontent-%COMP%] {\n    width: 206px;\n    height: 206px;\n  }\n  .guarantee-ring[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .promise-card[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 20px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .promise-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=satisfaction-guarantee.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SatisfactionGuaranteeComponent, [{
    type: Component,
    args: [{ selector: "xh-satisfaction-guarantee", standalone: true, imports: [RevealDirective], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="satisfaction" aria-labelledby="satisfaction-title">
      <div class="wrap">
        <div class="satisfaction-panel" xhReveal>
          <div class="promise-grid">
            @for (promise of promises.slice(0, 2); track promise.title) {
              <article class="promise-card">
                <span class="promise-icon material-symbols-outlined" aria-hidden="true">
                  {{ promise.icon }}
                </span>
                <span class="promise-kicker">{{ promise.kicker }}</span>
                <h3>{{ promise.title }}</h3>
                <p>{{ promise.body }}</p>
              </article>
            }

            <div class="guarantee-mark">
              <div class="guarantee-ring">
                <span class="guarantee-kicker">Our promise</span>
                <strong id="satisfaction-title">100%</strong>
                <span class="guarantee-banner">Satisfaction</span>
                <span class="guarantee-label">Guaranteed</span>
              </div>
            </div>

            @for (promise of promises.slice(2); track promise.title) {
              <article class="promise-card">
                <span class="promise-icon material-symbols-outlined" aria-hidden="true">
                  {{ promise.icon }}
                </span>
                <span class="promise-kicker">{{ promise.kicker }}</span>
                <h3>{{ promise.title }}</h3>
                <p>{{ promise.body }}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `, styles: ['/* angular:styles/component:css;81daf67de6f187bfa1d86f8be8332cf92e9379ddac7636b2134eb3ccc8a3df4c;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/sections/satisfaction-guarantee.component.ts */\n.satisfaction {\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  background: #fff;\n}\n.satisfaction > .wrap {\n  max-width: none;\n  margin: 0;\n  padding: 0;\n}\n.satisfaction-panel {\n  position: relative;\n  overflow: hidden;\n  padding: 34px;\n  border-block: 1px solid var(--line);\n  border-radius: 0;\n  background:\n    radial-gradient(\n      circle at 50% 0%,\n      rgba(21, 101, 216, 0.08),\n      transparent 38%),\n    #fff;\n  box-shadow: 0 18px 48px rgba(4, 30, 66, 0.07);\n}\n.satisfaction-panel::before {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      115deg,\n      transparent 0 82px,\n      rgba(21, 101, 216, 0.025) 82px 84px);\n  content: "";\n  pointer-events: none;\n}\n.promise-grid {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 100%;\n  max-width: 1172px;\n  margin: 0 auto;\n  grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(230px, 1.18fr) repeat(2, minmax(0, 1fr));\n  align-items: center;\n  gap: 14px;\n}\n.promise-card {\n  min-width: 0;\n  min-height: 218px;\n  padding: 22px 18px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 10px 28px rgba(4, 30, 66, 0.06);\n  text-align: center;\n  transition:\n    transform 0.25s ease,\n    border-color 0.25s ease,\n    background 0.25s ease;\n}\n.promise-card:hover {\n  transform: translateY(-4px);\n  border-color: rgba(21, 101, 216, 0.45);\n  background: var(--ice);\n}\n.promise-icon {\n  display: grid;\n  width: 54px;\n  height: 54px;\n  margin: 0 auto 14px;\n  place-items: center;\n  border: 1px solid #bfd3f3;\n  border-radius: 15px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  font-family: "Material Symbols Outlined";\n  font-size: 30px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  text-transform: none;\n  white-space: nowrap;\n  -webkit-font-feature-settings: "liga";\n  -webkit-font-smoothing: antialiased;\n  font-feature-settings: "liga";\n  font-variation-settings:\n    "FILL" 0,\n    "wght" 500,\n    "GRAD" 0,\n    "opsz" 32;\n}\n.promise-kicker {\n  display: block;\n  margin-bottom: 7px;\n  color: #c86600;\n  font: 600 10px/1.2 var(--mono);\n  letter-spacing: 0.13em;\n  text-transform: uppercase;\n}\n.promise-card h3 {\n  margin-bottom: 8px;\n  color: var(--navy);\n  font: 600 15px/1.3 var(--disp);\n}\n.promise-card p {\n  color: var(--slate);\n  font-size: 12.5px;\n  line-height: 1.55;\n}\n.guarantee-mark {\n  display: grid;\n  min-height: 252px;\n  place-items: center;\n  padding: 8px;\n}\n.guarantee-ring {\n  position: relative;\n  display: flex;\n  width: 224px;\n  height: 224px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(127, 178, 255, 0.62);\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 50% 32%,\n      rgba(21, 101, 216, 0.72),\n      rgba(4, 30, 66, 0.96) 68%);\n  box-shadow:\n    0 0 0 9px rgba(21, 101, 216, 0.12),\n    0 0 0 10px rgba(127, 178, 255, 0.2),\n    0 24px 50px rgba(0, 0, 0, 0.32);\n}\n.guarantee-kicker,\n.guarantee-label {\n  color: #b9c9e2;\n  font: 600 10px/1 var(--mono);\n  letter-spacing: 0.17em;\n  text-transform: uppercase;\n}\n.guarantee-ring strong {\n  margin: 7px 0 9px;\n  color: #fff;\n  font: 800 52px/0.95 var(--disp);\n  letter-spacing: -0.06em;\n}\n.guarantee-banner {\n  width: calc(100% + 36px);\n  margin-bottom: 12px;\n  padding: 8px 12px;\n  border-radius: 7px;\n  background: var(--orange);\n  color: #fff;\n  font: 700 16px/1 var(--disp);\n  letter-spacing: 0.02em;\n  text-align: center;\n  text-transform: uppercase;\n  box-shadow: 0 8px 22px rgba(255, 140, 26, 0.28);\n}\n@media (max-width: 1100px) {\n  .promise-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .guarantee-mark {\n    grid-column: 1 / -1;\n    grid-row: 1;\n  }\n}\n@media (max-width: 640px) {\n  .satisfaction {\n    padding: 0;\n  }\n  .satisfaction > .wrap {\n    padding: 0;\n  }\n  .satisfaction-panel {\n    padding: 28px 18px;\n    border-radius: 0;\n  }\n  .promise-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .guarantee-mark {\n    grid-column: auto;\n    min-height: 238px;\n  }\n  .guarantee-ring {\n    width: 206px;\n    height: 206px;\n  }\n  .guarantee-ring strong {\n    font-size: 48px;\n  }\n  .promise-card {\n    min-height: auto;\n    padding: 20px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .promise-card {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=satisfaction-guarantee.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SatisfactionGuaranteeComponent, { className: "SatisfactionGuaranteeComponent", filePath: "src/app/sections/satisfaction-guarantee.component.ts", lineNumber: 306 });
})();

// src/app/sections/quote.component.ts
var QuoteComponent = class _QuoteComponent {
  static \u0275fac = function QuoteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuoteComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuoteComponent, selectors: [["xh-quote"]], hostAttrs: [2, "display", "contents"], decls: 9, vars: 0, consts: [[1, "quote"], [1, "wrap"], ["xhReveal", ""]], template: function QuoteComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "blockquote", 2)(3, "p");
      \u0275\u0275text(4, " \u201CXcellHost transformed our cloud infrastructure seamlessly. Quick response, good systems, and a process style you can rely on.\u201D ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "cite")(6, "b");
      \u0275\u0275text(7, "Rajesh Patel");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, " \xB7 IT Manager");
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RevealDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuoteComponent, [{
    type: Component,
    args: [{
      selector: "xh-quote",
      imports: [RevealDirective],
      standalone: true,
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="quote">
      <div class="wrap">
        <blockquote xhReveal>
          <p>
            \u201CXcellHost transformed our cloud infrastructure seamlessly. Quick response, good
            systems, and a process style you can rely on.\u201D
          </p>
          <cite><b>Rajesh Patel</b> \xB7 IT Manager</cite>
        </blockquote>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuoteComponent, { className: "QuoteComponent", filePath: "src/app/sections/quote.component.ts", lineNumber: 26 });
})();

// src/app/sections/cta-band.component.ts
var WA_MESSAGE = "Hello XcellHost, I would like to speak to someone about your services.";
var CtaBandComponent = class _CtaBandComponent {
  topics = inject(CallbackTopicService);
  overlay = inject(OverlayService);
  lead = inject(LeadService);
  phone = SITE.whatsappLabel;
  whatsapp = this.lead.whatsappLink(WA_MESSAGE);
  requestCallback(e) {
    e.preventDefault();
    this.topics.ask("General enquiry");
    this.overlay.open("callback");
  }
  static \u0275fac = function CtaBandComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CtaBandComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaBandComponent, selectors: [["xh-cta-band"]], hostAttrs: [2, "display", "contents"], decls: 13, vars: 2, consts: [[1, "wrap"], ["xhReveal", "", 1, "cta-band"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], ["href", "#", "id", "dpCtaCall", 1, "btn", "btn-primary", 3, "click"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255,255,255,.4)", "color", "#fff", 3, "href"]], template: function CtaBandComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section")(1, "div", 0)(2, "div", 1)(3, "div")(4, "h2");
      \u0275\u0275text(5, "Build what\u2019s next, with us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 2)(9, "a", 3);
      \u0275\u0275listener("click", function CtaBandComponent_Template_a_click_9_listener($event) {
        return ctx.requestCallback($event);
      });
      \u0275\u0275text(10, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 4);
      \u0275\u0275text(12, "WhatsApp us");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi \xB7 WhatsApp ", ctx.phone);
      \u0275\u0275advance(4);
      \u0275\u0275property("href", ctx.whatsapp, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [RevealDirective], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CtaBandComponent, [{
    type: Component,
    args: [{
      selector: "xh-cta-band",
      imports: [RevealDirective],
      standalone: true,
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section>
      <div class="wrap">
        <div class="cta-band" xhReveal>
          <div>
            <h2>Build what\u2019s next, with us</h2>
            <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi &middot; WhatsApp {{ phone }}</p>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn btn-primary" href="#" id="dpCtaCall" (click)="requestCallback($event)"
              >Request a callback</a
            >
            <a
              class="btn btn-ghost"
              style="border-color:rgba(255,255,255,.4);color:#fff"
              [href]="whatsapp"
              target="_blank"
              rel="noopener"
              >WhatsApp us</a
            >
          </div>
        </div>
      </div>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaBandComponent, { className: "CtaBandComponent", filePath: "src/app/sections/cta-band.component.ts", lineNumber: 49 });
})();

// src/app/pages/home.page.ts
var TITLE = "Managed Cloud & Cybersecurity Services India | XcellHost";
var DESCRIPTION = "XcellHost \u2014 Mumbai-based managed cloud & cybersecurity provider since 1999. Tally on Cloud, Acronis Backup, DPDPA compliance & 24/7 SOC. ISO 27001 certified.";
var HomePage = class _HomePage {
  constructor() {
    inject(SeoService).set(TITLE, DESCRIPTION, "/");
  }
  static \u0275fac = function HomePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["xh-home-page"]], hostAttrs: [2, "display", "contents"], decls: 17, vars: 1, consts: [[3, "caseStudyLimit"]], template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-hero")(1, "xh-trust-bar")(2, "xh-marquee")(3, "xh-flagship")(4, "xh-host-credibility")(5, "xh-why")(6, "xh-outcomes")(7, "xh-new-category")(8, "xh-platform-strip")(9, "xh-experience-hub")(10, "xh-directory")(11, "xh-trusted-by")(12, "xh-industries")(13, "xh-insights-section", 0)(14, "xh-testimonials")(15, "xh-global-locations-map")(16, "xh-satisfaction-guarantee");
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275property("caseStudyLimit", 3);
    }
  }, dependencies: [
    HeroComponent,
    TrustBarComponent,
    MarqueeComponent,
    FlagshipComponent,
    DirectoryComponent,
    HostCredibilityComponent,
    WhyComponent,
    IndustriesComponent,
    OutcomesComponent,
    NewCategoryComponent,
    ExperienceHubComponent,
    PlatformStripComponent,
    InsightsSectionComponent,
    GlobalLocationsMapComponent,
    SatisfactionGuaranteeComponent,
    TestimonialsComponent,
    TrustedByComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePage, [{
    type: Component,
    args: [{
      selector: "xh-home-page",
      standalone: true,
      imports: [
        HeroComponent,
        TrustBarComponent,
        MarqueeComponent,
        FlagshipComponent,
        DirectoryComponent,
        HostCredibilityComponent,
        WhyComponent,
        IndustriesComponent,
        OutcomesComponent,
        NewCategoryComponent,
        ExperienceHubComponent,
        PlatformStripComponent,
        InsightsSectionComponent,
        GlobalLocationsMapComponent,
        SatisfactionGuaranteeComponent,
        TestimonialsComponent,
        TrustedByComponent
      ],
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <xh-hero />
    <xh-trust-bar />
    <xh-marquee />
    <xh-flagship />
    <xh-host-credibility />
    <xh-why />
    <xh-outcomes />
    <xh-new-category />
    <xh-platform-strip />
    <xh-experience-hub />
    <xh-directory />
    <xh-trusted-by />
    <xh-industries />
    <xh-insights-section [caseStudyLimit]="3" />
    <xh-testimonials />
    <xh-global-locations-map />
    <xh-satisfaction-guarantee />
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/home.page.ts", lineNumber: 79 });
})();
export {
  HomePage
};
//# sourceMappingURL=chunk-OKVYBCGQ.js.map
