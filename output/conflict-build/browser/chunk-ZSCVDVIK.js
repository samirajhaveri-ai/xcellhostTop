import {
  ProductFaqComponent
} from "./chunk-APIH6CFY.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  InsightsSectionComponent
} from "./chunk-3UBXKXB6.js";
import "./chunk-6DVXASVN.js";
import "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import "./chunk-M5OSJJBF.js";
import "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/trust-center.page.ts
var _c0 = ["trustFrame"];
var _c1 = () => ["security", "compliance"];
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.title;
var _forTrack2 = ($index, $item) => $item.name;
function TrustCenterPage_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2[1]);
  }
}
function TrustCenterPage_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 24);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reason_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", reason_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reason_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reason_r3.body);
  }
}
function TrustCenterPage_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 13)(1, "div", 25);
    \u0275\u0275text(2, "Watch it in action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 26)(4, "article", 27)(5, "h3")(6, "span");
    \u0275\u0275text(7, "Data protection & compliance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 28);
    \u0275\u0275element(9, "iframe", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "article", 27)(11, "h3")(12, "span");
    \u0275\u0275text(13, "Vulnerability assessment");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275element(15, "iframe", 30);
    \u0275\u0275elementEnd()()()();
  }
}
function TrustCenterPage_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 31);
    \u0275\u0275text(2, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "cite")(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span")(9, "b");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r4 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u201C", review_r4.quote, "\u201D");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r4.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r4.role);
  }
}
var TrustCenterPage = class _TrustCenterPage {
  seo = inject(SeoService);
  sanitizer = inject(DomSanitizer);
  frameObserver;
  insightVideos = [
    { title: "Data protection & compliance", id: "s1Rxs7rWd2I" },
    { title: "Vulnerability assessment", id: "oE8P7XnPGbI" }
  ].map((video) => ({
    title: video.title,
    src: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&playsinline=1`)
  }));
  trustFrame;
  securityRows = [
    ["Information security", "ISO 27001-certified controls, annual reviews and evidence-backed governance."],
    ["Service management", "ISO 20000-1-certified processes for dependable, measurable service delivery."],
    ["Data protection", "DPDPA-aligned handling, documented subprocessors and controlled access."],
    ["Monitoring and response", "24\xD77 NOC and SOC coverage, centralised logging and incident runbooks."],
    ["Vulnerability management", "Continuous detection with risk-based patching and responsible disclosure."],
    ["Availability", "Transparent service reporting backed by a 99.95% uptime SLA."]
  ];
  reasons = [
    { title: "25+ years of experience", body: "Operating cloud and security services since 1999.", icon: "M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "One accountable team", body: "Cloud, security, compliance and support under one operating model.", icon: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m7-10a4 4 0 100-8 4 4 0 000 8zm13 10v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" },
    { title: "India-based operations", body: "Local expertise, INR billing and a Mumbai-based operations team.", icon: "M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0zM12 7v3m0 4h.01" },
    { title: "Independent assurance", body: "Certified management systems supported by reviewable evidence.", icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-10l2 2 4-4" },
    { title: "Clear responsibility", body: "See exactly what XcellHost manages and what remains with you.", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" },
    { title: "Procurement-ready", body: "Policies, controls, subprocessors and status information in one place.", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zm0 0v6h6M8 13h8M8 17h8" }
  ];
  reviews = [
    {
      quote: "The Trust Center gives our reviewers a clear starting point and makes security due diligence much easier to navigate.",
      initials: "IT",
      name: "IT Manager",
      role: "Financial services customer"
    },
    {
      quote: "We can see the control ownership, certifications and operating practices without chasing information across multiple teams.",
      initials: "CO",
      name: "Compliance Officer",
      role: "Regulated business customer"
    },
    {
      quote: "The practical detail around monitoring, response and subprocessors helps us assess risk with confidence.",
      initials: "CT",
      name: "CTO",
      role: "Technology customer"
    }
  ];
  faqs = [
    ["What is the XcellHost Trust Center?", "It is a central view of XcellHost security, compliance, privacy, subprocessors, vulnerability management and service availability information."],
    ["Which certifications does XcellHost hold?", "The Trust Center highlights XcellHost's ISO 27001 information-security and ISO 20000-1 service-management certifications."],
    ["Can our security or procurement team request evidence?", "Yes. Contact the XcellHost team for documents that require controlled access or additional due-diligence support."],
    ["How does XcellHost handle customer data?", "Customer data is handled under documented controls covering access, encryption, monitoring, retention and incident response, with responsibilities explained in the Trust Center."],
    ["Where can I find the subprocessor list?", "Open the Subprocessors section in the Trust Center to review vendors, processing purposes, data categories and regions."],
    ["How do I report a security concern?", "Email security@xcellhost.cloud. Responsible-disclosure reports are acknowledged within two business days."]
  ];
  constructor() {
    this.seo.set("Trust Center \u2014 Security, compliance and operating posture | XcellHost", "Review XcellHost security controls, ISO certifications, subprocessors, vulnerability management and availability.", "/company/trust-center/");
  }
  onFrameLoad() {
    const frame = this.trustFrame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document)
      return;
    const resize = () => {
      const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      frame.style.height = `${height}px`;
    };
    resize();
    this.frameObserver?.disconnect();
    this.frameObserver = new ResizeObserver(resize);
    this.frameObserver.observe(document.documentElement);
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const section = link.hash.slice(1);
        if (!section || !document.getElementById(section))
          return;
        event.preventDefault();
        this.openTrustSection(section);
      });
    });
  }
  openTrustSection(section) {
    const frame = this.trustFrame?.nativeElement;
    const document = frame?.contentDocument;
    const target = document?.getElementById(section);
    if (!frame || !document || !target)
      return;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 88;
    window.scrollTo({ top, behavior: "smooth" });
  }
  ngOnDestroy() {
    this.frameObserver?.disconnect();
  }
  static \u0275fac = function TrustCenterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrustCenterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrustCenterPage, selectors: [["xh-trust-center-page"]], viewQuery: function TrustCenterPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.trustFrame = _t.first);
    }
  }, decls: 32, vars: 5, consts: [["trustFrame", ""], ["id", "ppage", 1, "ppage", "as-page", "trust-page"], ["src", \u0275\u0275trustConstantResourceUrl`/assets/trust-center.html`, "title", "XcellHost Trust Center", "scrolling", "no", 1, "trust-experience", 3, "load"], [1, "pp-body", "trust-default-sections"], [1, "wrap"], [1, "pp-sec"], ["id", "ppSecWrap"], [1, "pp-ov"], [1, "pp-secrows"], [1, "psrow"], [1, "pp-secfoot"], [1, "pp-why"], [1, "pw"], ["aria-labelledby", "trustVideosTitle", 1, "tally-videos"], ["id", "ppRevs", 1, "pp-revs"], [1, "prv"], [1, "pp-sec", "pp-faq-heading"], ["id", "ppFaq", 1, "pp-faq"], [3, "faqs"], ["id", "ppBlog"], ["pageSlug", "trust-center", 3, "pageAliases", "videos"], [1, "psk"], [1, "psv"], ["aria-hidden", "true", 1, "pw-ic"], ["viewBox", "0 0 24 24"], ["id", "trustVideosTitle", 1, "pp-sec"], [1, "tally-video-grid"], [1, "tally-video-card"], [1, "tally-video-frame"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube-nocookie.com/embed/s1Rxs7rWd2I?rel=0&playsinline=1`, "title", "XcellHost data protection and compliance", "loading", "lazy", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube-nocookie.com/embed/oE8P7XnPGbI?rel=0&playsinline=1`, "title", "XcellHost vulnerability assessment and penetration testing", "loading", "lazy", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], ["aria-label", "5 out of 5 stars", 1, "stars"], [1, "rav"]], template: function TrustCenterPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "main", 1)(1, "iframe", 2, 0);
      \u0275\u0275listener("load", function TrustCenterPage_Template_iframe_load_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onFrameLoad());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275text(6, "Security & compliance \u2014 Trust Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "p", 7);
      \u0275\u0275text(9, "A concise view of the safeguards and operating commitments behind XcellHost services.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8);
      \u0275\u0275repeaterCreate(11, TrustCenterPage_For_12_Template, 5, 2, "div", 9, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 10);
      \u0275\u0275text(14, "XcellHost is ISO 27001 and ISO 20000-1 certified \xB7 DPDPA aligned \xB7 24\xD77 NOC and SOC.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 5);
      \u0275\u0275text(16, "Why XcellHost for Trust Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275repeaterCreate(18, TrustCenterPage_For_19_Template, 8, 3, "div", 12, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, TrustCenterPage_Conditional_20_Template, 16, 0, "section", 13);
      \u0275\u0275elementStart(21, "div", 5);
      \u0275\u0275text(22, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275repeaterCreate(24, TrustCenterPage_For_25_Template, 12, 4, "div", 15, _forTrack2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 16);
      \u0275\u0275text(27, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275element(29, "xh-product-faq", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 19);
      \u0275\u0275element(31, "xh-insights-section", 20);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.securityRows);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.reasons);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(false ? 20 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.reviews);
      \u0275\u0275advance(5);
      \u0275\u0275property("faqs", ctx.faqs);
      \u0275\u0275advance(2);
      \u0275\u0275property("pageAliases", \u0275\u0275pureFunction0(4, _c1))("videos", ctx.insightVideos);
    }
  }, dependencies: [InsightsSectionComponent, ProductFaqComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.trust-page[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: #fff;\n}\n.trust-experience[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 900px;\n  border: 0;\n  background: #fff;\n}\n.trust-default-sections[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.trust-default-sections[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-sec[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.trust-default-sections[_ngcontent-%COMP%]   .pp-ov[_ngcontent-%COMP%] {\n  max-width: 900px;\n}\n.trust-default-sections[_ngcontent-%COMP%]   .pp-sec[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 46px;\n}\n.trust-default-sections[_ngcontent-%COMP%]   #ppBlog[_ngcontent-%COMP%] {\n  margin-top: 46px;\n}\n@media (max-width: 760px) {\n  .trust-default-sections[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n  .trust-default-sections[_ngcontent-%COMP%]   .pp-sec[_ngcontent-%COMP%]:not(:first-child), \n   .trust-default-sections[_ngcontent-%COMP%]   #ppBlog[_ngcontent-%COMP%] {\n    margin-top: 34px;\n  }\n}\n/*# sourceMappingURL=trust-center.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrustCenterPage, [{
    type: Component,
    args: [{ selector: "xh-trust-center-page", standalone: true, imports: [InsightsSectionComponent, ProductFaqComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="ppage as-page trust-page" id="ppage">\r
  <iframe\r
    #trustFrame\r
    class="trust-experience"\r
    src="/assets/trust-center.html"\r
    title="XcellHost Trust Center"\r
    scrolling="no"\r
    (load)="onFrameLoad()"\r
  ></iframe>\r
\r
  <section class="pp-body trust-default-sections">\r
    <div class="wrap">\r
      <div class="pp-sec">Security &amp; compliance \u2014 Trust Center</div>\r
      <div id="ppSecWrap">\r
        <p class="pp-ov">A concise view of the safeguards and operating commitments behind XcellHost services.</p>\r
        <div class="pp-secrows">\r
          @for (row of securityRows; track row[0]) {\r
            <div class="psrow"><span class="psk">{{ row[0] }}</span><span class="psv">{{ row[1] }}</span></div>\r
          }\r
        </div>\r
        <p class="pp-secfoot">XcellHost is ISO 27001 and ISO 20000-1 certified \xB7 DPDPA aligned \xB7 24\xD77 NOC and SOC.</p>\r
      </div>\r
\r
      <div class="pp-sec">Why XcellHost for Trust Center</div>\r
      <div class="pp-why">\r
        @for (reason of reasons; track reason.title) {\r
          <div class="pw">\r
            <span class="pw-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path [attr.d]="reason.icon" /></svg></span>\r
            <b>{{ reason.title }}</b><span>{{ reason.body }}</span>\r
          </div>\r
        }\r
      </div>\r
\r
      @if (false) {\r
      <section class="tally-videos" aria-labelledby="trustVideosTitle">\r
        <div class="pp-sec" id="trustVideosTitle">Watch it in action</div>\r
        <div class="tally-video-grid">\r
          <article class="tally-video-card">\r
            <h3><span>Data protection &amp; compliance</span></h3>\r
            <div class="tally-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/s1Rxs7rWd2I?rel=0&amp;playsinline=1" title="XcellHost data protection and compliance" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>\r
          </article>\r
          <article class="tally-video-card">\r
            <h3><span>Vulnerability assessment</span></h3>\r
            <div class="tally-video-frame"><iframe src="https://www.youtube-nocookie.com/embed/oE8P7XnPGbI?rel=0&amp;playsinline=1" title="XcellHost vulnerability assessment and penetration testing" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>\r
          </article>\r
        </div>\r
      </section>\r
      }\r
\r
      <div class="pp-sec">What customers say</div>\r
      <div class="pp-revs" id="ppRevs">\r
        @for (review of reviews; track review.name) {\r
          <div class="prv">\r
            <div class="stars" aria-label="5 out of 5 stars">\u2605\u2605\u2605\u2605\u2605</div>\r
            <p>\u201C{{ review.quote }}\u201D</p>\r
            <cite><span class="rav">{{ review.initials }}</span><span><b>{{ review.name }}</b>{{ review.role }}</span></cite>\r
          </div>\r
        }\r
      </div>\r
\r
      <div class="pp-sec pp-faq-heading">Frequently asked questions</div>\r
      <div class="pp-faq" id="ppFaq"><xh-product-faq [faqs]="faqs" /></div>\r
\r
      <div id="ppBlog"><xh-insights-section pageSlug="trust-center" [pageAliases]="['security', 'compliance']" [videos]="insightVideos" /></div>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ["/* src/app/pages/trust-center.page.css */\n:host {\n  display: block;\n}\n.trust-page {\n  overflow: hidden;\n  background: #fff;\n}\n.trust-experience {\n  display: block;\n  width: 100%;\n  min-height: 900px;\n  border: 0;\n  background: #fff;\n}\n.trust-default-sections {\n  padding-top: 0;\n}\n.trust-default-sections > .wrap > .pp-sec:first-child {\n  margin-top: 0;\n}\n.trust-default-sections .pp-ov {\n  max-width: 900px;\n}\n.trust-default-sections .pp-sec:not(:first-child) {\n  margin-top: 46px;\n}\n.trust-default-sections #ppBlog {\n  margin-top: 46px;\n}\n@media (max-width: 760px) {\n  .trust-default-sections {\n    padding-top: 0;\n  }\n  .trust-default-sections .pp-sec:not(:first-child),\n  .trust-default-sections #ppBlog {\n    margin-top: 34px;\n  }\n}\n/*# sourceMappingURL=trust-center.page.css.map */\n"] }]
  }], () => [], { trustFrame: [{
    type: ViewChild,
    args: ["trustFrame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrustCenterPage, { className: "TrustCenterPage", filePath: "src/app/pages/trust-center.page.ts", lineNumber: 23 });
})();
export {
  TrustCenterPage
};
//# sourceMappingURL=chunk-ZSCVDVIK.js.map
