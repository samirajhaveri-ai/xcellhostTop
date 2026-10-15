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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/platform-status.page.ts
var _forTrack0 = ($index, $item) => $item.name;
function PlatformStatusPage_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div")(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 27);
    \u0275\u0275element(7, "span", 28);
    \u0275\u0275text(8, "Status unavailable");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r1.description);
  }
}
var PlatformStatusPage = class _PlatformStatusPage {
  services = [
    { name: "Cloud Infrastructure", description: "Virtual servers, compute and storage" },
    { name: "Network & Connectivity", description: "Data center connectivity and network services" },
    { name: "Backup & Disaster Recovery", description: "Cloud backups and workload recovery" },
    { name: "Security Services", description: "Managed protection and security services" },
    { name: "Business Applications", description: "Hosted desktops, email and business applications" },
    { name: "Customer Portals", description: "Cloud management, billing and support access" }
  ];
  constructor() {
    inject(SeoService).set("Platform Status | XcellHost", "XcellHost platform status, service availability, maintenance information and support.", "/company/platform-status");
  }
  static \u0275fac = function PlatformStatusPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PlatformStatusPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlatformStatusPage, selectors: [["xh-platform-status-page"]], decls: 73, vars: 0, consts: [[1, "status-hero"], [1, "wrap"], ["aria-label", "Breadcrumb", 1, "status-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], ["routerLink", "/about"], [1, "eyebrow"], [1, "status-body"], [1, "wrap", "status-content"], [1, "status-summary"], ["aria-hidden", "true", 1, "summary-icon"], ["href", "https://supportdesk.xcellhost.cloud/portal/en/home", "target", "_blank", "rel", "noopener noreferrer", 1, "status-button"], ["aria-labelledby", "services-heading", 1, "status-panel"], [1, "panel-heading"], ["id", "services-heading"], [1, "status-label"], [1, "service-list"], [1, "status-grid"], ["aria-labelledby", "maintenance-heading", 1, "status-panel", "update-panel"], [1, "section-label"], ["id", "maintenance-heading"], ["aria-labelledby", "incidents-heading", 1, "status-panel", "update-panel"], ["id", "incidents-heading"], [1, "status-help"], [1, "help-links"], ["href", "https://supportdesk.xcellhost.cloud/portal/en/signin", "target", "_blank", "rel", "noopener noreferrer", 1, "status-button"], ["routerLink", "/escalation-matrix"], [1, "service-state"], ["aria-hidden", "true", 1, "state-dot"]], template: function PlatformStatusPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "a", 5);
      \u0275\u0275text(8, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Platform Status");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 6);
      \u0275\u0275text(14, "XCELLHOST SERVICE AVAILABILITY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "h1");
      \u0275\u0275text(16, "Platform Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "p");
      \u0275\u0275text(18, "A central place for service availability, maintenance information and platform updates.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "section", 7)(20, "div", 8)(21, "div", 9)(22, "span", 10);
      \u0275\u0275text(23, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div")(25, "h2");
      \u0275\u0275text(26, "Live status is currently unavailable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "p");
      \u0275\u0275text(28, "Service status has not been published on this page yet. Please contact our support team to confirm availability or report an issue.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "a", 11);
      \u0275\u0275text(30, "Contact Support ");
      \u0275\u0275elementStart(31, "span", 4);
      \u0275\u0275text(32, "\u2197");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "section", 12)(34, "div", 13)(35, "div")(36, "h2", 14);
      \u0275\u0275text(37, "Service Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p");
      \u0275\u0275text(39, "Availability across the XcellHost platform");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "span", 15);
      \u0275\u0275text(41, "Awaiting updates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "ul", 16);
      \u0275\u0275repeaterCreate(43, PlatformStatusPage_For_44_Template, 9, 2, "li", null, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 17)(46, "section", 18)(47, "span", 19);
      \u0275\u0275text(48, "PLANNED WORK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "h2", 20);
      \u0275\u0275text(50, "Scheduled Maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Maintenance information is not available yet. Contact support for planned work that may affect your services.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "section", 21)(54, "span", 19);
      \u0275\u0275text(55, "SERVICE UPDATES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "h2", 22);
      \u0275\u0275text(57, "Incident History");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p");
      \u0275\u0275text(59, "Incident history has not been published yet. For an existing issue, follow your ticket in the support portal.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "aside", 23)(61, "div")(62, "h2");
      \u0275\u0275text(63, "Experiencing an issue?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p");
      \u0275\u0275text(65, "Share the affected service and details with our support team.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 24)(67, "a", 25);
      \u0275\u0275text(68, "Submit a Ticket ");
      \u0275\u0275elementStart(69, "span", 4);
      \u0275\u0275text(70, "\u2197");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "a", 26);
      \u0275\u0275text(72, "View escalation matrix \u2192");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(43);
      \u0275\u0275repeater(ctx.services);
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: var(--navy,#082449);\n}\n.status-hero[_ngcontent-%COMP%] {\n  padding: 36px 0 68px;\n  background:\n    linear-gradient(\n      120deg,\n      #061e3f,\n      #104b89);\n  color: #fff;\n}\n.status-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-size: 12px;\n  color: #c4d8ee;\n  margin-bottom: 38px;\n}\n.status-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.status-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(34px, 5vw, 54px);\n  line-height: 1.15;\n  margin: 0 0 18px;\n}\n.status-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 640px;\n  color: #d9e5f3;\n  font-size: 17px;\n  line-height: 1.7;\n  margin: 0;\n}\n.status-body[_ngcontent-%COMP%] {\n  background: var(--ice,#f4f7fb);\n  padding: 0 0 64px;\n}\n.status-content[_ngcontent-%COMP%] {\n  position: relative;\n  top: -24px;\n  display: grid;\n  gap: 24px;\n}\n.status-summary[_ngcontent-%COMP%], \n.status-panel[_ngcontent-%COMP%], \n.status-help[_ngcontent-%COMP%] {\n  background: var(--white,#fff);\n  border: 1px solid var(--line,#dce5ef);\n  border-radius: 16px;\n}\n.status-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 26px;\n  border-top: 4px solid #e3a42e;\n  box-shadow: 0 8px 28px #0824490c;\n}\n.summary-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #fff2d5;\n  color: #885900;\n  font-size: 24px;\n  font-weight: 700;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 21px;\n  line-height: 1.3;\n  margin: 0 0 8px;\n}\np[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n  color: var(--slate,#52657b);\n  margin: 0;\n}\n.status-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.status-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  background: var(--blue,#155ac4);\n  color: #fff;\n  padding: 12px 18px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.status-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.12);\n}\na[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #f5a623;\n  outline-offset: 4px;\n}\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 26px 28px;\n  border-bottom: 1px solid var(--line,#dce5ef);\n}\n.status-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate,#52657b);\n  background: var(--ice,#f4f7fb);\n  border-radius: 20px;\n  padding: 7px 12px;\n}\n.service-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.service-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 20px 28px;\n}\n.service-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--line,#dce5ef);\n}\nh3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin: 0 0 4px;\n}\n.service-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.service-state[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--slate,#52657b);\n  white-space: nowrap;\n}\n.state-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n}\n.status-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.update-panel[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: .14em;\n  color: var(--blue,#155ac4);\n  margin-bottom: 14px;\n}\n.status-help[_ngcontent-%COMP%] {\n  padding: 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n.help-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 18px;\n}\n.help-links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:not(.status-button) {\n  font-size: 13px;\n  color: var(--blue,#155ac4);\n  font-weight: 600;\n}\n@media (max-width: 700px) {\n  .status-summary[_ngcontent-%COMP%], \n   .status-help[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .status-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 22px;\n  }\n  .service-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 10px;\n    padding: 20px 22px;\n  }\n  .status-hero[_ngcontent-%COMP%] {\n    padding-top: 24px;\n  }\n  .status-breadcrumb[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n  }\n  .status-summary[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .update-panel[_ngcontent-%COMP%], \n   .status-help[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n}\n/*# sourceMappingURL=platform-status.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformStatusPage, [{
    type: Component,
    args: [{ selector: "xh-platform-status-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="status-hero">\r\n  <div class="wrap">\r\n    <nav class="status-breadcrumb" aria-label="Breadcrumb">\r\n      <a routerLink="/">Home</a><span aria-hidden="true">/</span><a routerLink="/about">About Us</a><span aria-hidden="true">/</span><span>Platform Status</span>\r\n    </nav>\r\n    <div class="eyebrow">XCELLHOST SERVICE AVAILABILITY</div>\r\n    <h1>Platform Status</h1>\r\n    <p>A central place for service availability, maintenance information and platform updates.</p>\r\n  </div>\r\n</section>\r\n\r\n<section class="status-body">\r\n  <div class="wrap status-content">\r\n    <div class="status-summary">\r\n      <span class="summary-icon" aria-hidden="true">i</span>\r\n      <div><h2>Live status is currently unavailable</h2><p>Service status has not been published on this page yet. Please contact our support team to confirm availability or report an issue.</p></div>\r\n      <a class="status-button" href="https://supportdesk.xcellhost.cloud/portal/en/home" target="_blank" rel="noopener noreferrer">Contact Support <span aria-hidden="true">\u2197</span></a>\r\n    </div>\r\n\r\n    <section class="status-panel" aria-labelledby="services-heading">\r\n      <div class="panel-heading"><div><h2 id="services-heading">Service Status</h2><p>Availability across the XcellHost platform</p></div><span class="status-label">Awaiting updates</span></div>\r\n      <ul class="service-list">\r\n        @for (service of services; track service.name) {\r\n          <li><div><h3>{{ service.name }}</h3><p>{{ service.description }}</p></div><span class="service-state"><span class="state-dot" aria-hidden="true"></span>Status unavailable</span></li>\r\n        }\r\n      </ul>\r\n    </section>\r\n\r\n    <div class="status-grid">\r\n      <section class="status-panel update-panel" aria-labelledby="maintenance-heading"><span class="section-label">PLANNED WORK</span><h2 id="maintenance-heading">Scheduled Maintenance</h2><p>Maintenance information is not available yet. Contact support for planned work that may affect your services.</p></section>\r\n      <section class="status-panel update-panel" aria-labelledby="incidents-heading"><span class="section-label">SERVICE UPDATES</span><h2 id="incidents-heading">Incident History</h2><p>Incident history has not been published yet. For an existing issue, follow your ticket in the support portal.</p></section>\r\n    </div>\r\n\r\n    <aside class="status-help"><div><h2>Experiencing an issue?</h2><p>Share the affected service and details with our support team.</p></div><div class="help-links"><a class="status-button" href="https://supportdesk.xcellhost.cloud/portal/en/signin" target="_blank" rel="noopener noreferrer">Submit a Ticket <span aria-hidden="true">\u2197</span></a><a routerLink="/escalation-matrix">View escalation matrix \u2192</a></div></aside>\r\n  </div>\r\n</section>\r\n', styles: ["/* src/app/pages/platform-status.page.css */\n:host {\n  display: block;\n  color: var(--navy,#082449);\n}\n.status-hero {\n  padding: 36px 0 68px;\n  background:\n    linear-gradient(\n      120deg,\n      #061e3f,\n      #104b89);\n  color: #fff;\n}\n.status-breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  font-size: 12px;\n  color: #c4d8ee;\n  margin-bottom: 38px;\n}\n.status-breadcrumb a {\n  color: inherit;\n}\n.status-hero h1 {\n  font-size: clamp(34px, 5vw, 54px);\n  line-height: 1.15;\n  margin: 0 0 18px;\n}\n.status-hero p {\n  max-width: 640px;\n  color: #d9e5f3;\n  font-size: 17px;\n  line-height: 1.7;\n  margin: 0;\n}\n.status-body {\n  background: var(--ice,#f4f7fb);\n  padding: 0 0 64px;\n}\n.status-content {\n  position: relative;\n  top: -24px;\n  display: grid;\n  gap: 24px;\n}\n.status-summary,\n.status-panel,\n.status-help {\n  background: var(--white,#fff);\n  border: 1px solid var(--line,#dce5ef);\n  border-radius: 16px;\n}\n.status-summary {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  padding: 26px;\n  border-top: 4px solid #e3a42e;\n  box-shadow: 0 8px 28px #0824490c;\n}\n.summary-icon {\n  flex-shrink: 0;\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #fff2d5;\n  color: #885900;\n  font-size: 24px;\n  font-weight: 700;\n}\nh2 {\n  font-size: 21px;\n  line-height: 1.3;\n  margin: 0 0 8px;\n}\np {\n  font-size: 14px;\n  line-height: 1.7;\n  color: var(--slate,#52657b);\n  margin: 0;\n}\n.status-summary > div {\n  flex: 1;\n}\n.status-button {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  background: var(--blue,#155ac4);\n  color: #fff;\n  padding: 12px 18px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.status-button:hover {\n  filter: brightness(1.12);\n}\na:focus-visible {\n  outline: 3px solid #f5a623;\n  outline-offset: 4px;\n}\n.panel-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 26px 28px;\n  border-bottom: 1px solid var(--line,#dce5ef);\n}\n.status-label {\n  font-size: 12px;\n  color: var(--slate,#52657b);\n  background: var(--ice,#f4f7fb);\n  border-radius: 20px;\n  padding: 7px 12px;\n}\n.service-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.service-list li {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 20px 28px;\n}\n.service-list li + li {\n  border-top: 1px solid var(--line,#dce5ef);\n}\nh3 {\n  font-size: 15px;\n  margin: 0 0 4px;\n}\n.service-list p {\n  font-size: 13px;\n}\n.service-state {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: var(--slate,#52657b);\n  white-space: nowrap;\n}\n.state-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #94a3b8;\n}\n.status-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 24px;\n}\n.update-panel {\n  padding: 28px;\n}\n.section-label {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: .14em;\n  color: var(--blue,#155ac4);\n  margin-bottom: 14px;\n}\n.status-help {\n  padding: 28px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n}\n.help-links {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 18px;\n}\n.help-links > a:not(.status-button) {\n  font-size: 13px;\n  color: var(--blue,#155ac4);\n  font-weight: 600;\n}\n@media (max-width: 700px) {\n  .status-summary,\n  .status-help {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .status-grid {\n    grid-template-columns: 1fr;\n  }\n  .panel-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 22px;\n  }\n  .service-list li {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 10px;\n    padding: 20px 22px;\n  }\n  .status-hero {\n    padding-top: 24px;\n  }\n  .status-breadcrumb {\n    margin-bottom: 28px;\n  }\n  .status-summary {\n    padding: 22px;\n  }\n  .update-panel,\n  .status-help {\n    padding: 22px;\n  }\n}\n/*# sourceMappingURL=platform-status.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlatformStatusPage, { className: "PlatformStatusPage", filePath: "src/app/pages/platform-status.page.ts", lineNumber: 13 });
})();
export {
  PlatformStatusPage
};
//# sourceMappingURL=chunk-MV5PPV32.js.map
