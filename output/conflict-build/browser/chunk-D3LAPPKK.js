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
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/microsoft-365-business-standard-no-teams.page.ts
var _c0 = ["frame"];
var Microsoft365BusinessStandardNoTeamsPage = class _Microsoft365BusinessStandardNoTeamsPage {
  docs = inject(DocRequestService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  frame;
  observer;
  cleanup;
  constructor() {
    inject(SeoService).set("Microsoft 365 Business Standard without Teams | XcellHost", "Microsoft 365 Business Standard without Teams: full Office desktop apps, business email, 1 TB OneDrive and SharePoint. Annual upfront pricing from \u20B96,783 per user, excluding GST.", "/microsoft-365-business-standard-no-teams/");
  }
  onLoad() {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    if (!frame || !doc?.body)
      return;
    const resize = () => {
      frame.style.height = `${Math.ceil(doc.body.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(doc.body);
    void doc.fonts.ready.then(resize);
    resize();
    const click = (event) => {
      const link = event.target?.closest("a[href]");
      if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("#")) {
        const section = doc.getElementById(href.slice(1));
        if (!section) {
          if (href === "#lead") {
            event.preventDefault();
            document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
          }
          return;
        }
        event.preventDefault();
        window.scrollTo({
          top: window.scrollY + frame.getBoundingClientRect().top + section.getBoundingClientRect().top,
          behavior: "smooth"
        });
      } else if (href.startsWith("/")) {
        event.preventDefault();
        window.location.assign(href);
      }
    };
    doc.addEventListener("click", click);
    this.cleanup = () => doc.removeEventListener("click", click);
  }
  openCallback() {
    this.topics.ask("Microsoft 365 Business Standard without Teams");
    this.overlay.open("callback");
  }
  requestDoc(kind) {
    this.docs.ask(kind, "Microsoft 365 Business Standard without Teams");
    this.overlay.open("doc");
  }
  showPricing() {
    const frame = this.frame?.nativeElement;
    const pricing = frame?.contentDocument?.getElementById("bo");
    if (!frame || !pricing)
      return;
    window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + pricing.getBoundingClientRect().top - 120, behavior: "smooth" });
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    this.cleanup?.();
  }
  static \u0275fac = function Microsoft365BusinessStandardNoTeamsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Microsoft365BusinessStandardNoTeamsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Microsoft365BusinessStandardNoTeamsPage, selectors: [["xh-microsoft-365-business-standard-no-teams-page"]], viewQuery: function Microsoft365BusinessStandardNoTeamsPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, decls: 25, vars: 0, consts: [["frame", ""], ["aria-label", "Microsoft 365 Business Standard without Teams"], ["src", \u0275\u0275trustConstantResourceUrl`/microsoft-365-business-standard-no-teams-content.html`, "title", "Microsoft 365 Business Standard without Teams details", 3, "load"], [1, "detail-cta-wrap"], ["id", "lead", 1, "pp-cta"], [1, "pp-ctabtns"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-ghost"], ["href", "mailto:sales@xcellhost.cloud", 1, "btn", "btn-ghost"], ["href", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", 1, "pp-cta-buddha"]], template: function Microsoft365BusinessStandardNoTeamsPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "main", 1)(1, "iframe", 2, 0);
      \u0275\u0275domListener("load", function Microsoft365BusinessStandardNoTeamsPage_Template_iframe_load_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoad());
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "div", 3)(4, "div", 4)(5, "div")(6, "h3");
      \u0275\u0275text(7, "Ready to start with Microsoft 365 Business Standard without Teams?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "p");
      \u0275\u0275text(9, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "div", 5)(11, "button", 6);
      \u0275\u0275domListener("click", function Microsoft365BusinessStandardNoTeamsPage_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCallback());
      });
      \u0275\u0275text(12, "Request a callback");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "button", 7);
      \u0275\u0275domListener("click", function Microsoft365BusinessStandardNoTeamsPage_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.showPricing());
      });
      \u0275\u0275text(14, "\u26A1 Buy Now");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "button", 7);
      \u0275\u0275domListener("click", function Microsoft365BusinessStandardNoTeamsPage_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestDoc("infosheet"));
      });
      \u0275\u0275text(16, "\u2B07 Infosheet");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "button", 7);
      \u0275\u0275domListener("click", function Microsoft365BusinessStandardNoTeamsPage_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestDoc("presentation"));
      });
      \u0275\u0275text(18, "\u{1F4D6} Presentation");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "a", 8);
      \u0275\u0275text(20, "Talk on WhatsApp");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "a", 9);
      \u0275\u0275text(22, "Email Us");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(23, "a", 10);
      \u0275\u0275domElement(24, "img", 11);
      \u0275\u0275domElementEnd()()()();
    }
  }, styles: ["\n\n[_nghost-%COMP%], \nmain[_ngcontent-%COMP%] {\n  display: block;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 1200px;\n  border: 0;\n}\n.detail-cta-wrap[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px 40px;\n}\n.pp-cta[_ngcontent-%COMP%] {\n  display: block;\n  background:\n    linear-gradient(\n      105deg,\n      #1565d8,\n      #0c3e8f);\n}\n.pp-ctabtns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 24px;\n}\n.pp-ctabtns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border-radius: 8px;\n  font: 600 14px/1.6 var(--body);\n  cursor: pointer;\n}\n.pp-ctabtns[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .4);\n}\n.pp-ctabtns[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .12);\n  border-color: #fff;\n  color: #fff;\n}\n@media (max-width: 760px) {\n  .pp-cta[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n  }\n  .pp-cta-buddha-link[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 18px;\n  }\n}\n/*# sourceMappingURL=microsoft-365-business-standard-no-teams.page.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Microsoft365BusinessStandardNoTeamsPage, [{
    type: Component,
    args: [{ selector: "xh-microsoft-365-business-standard-no-teams-page", standalone: true, template: `
    <main aria-label="Microsoft 365 Business Standard without Teams">
      <iframe #frame src="/microsoft-365-business-standard-no-teams-content.html"
        title="Microsoft 365 Business Standard without Teams details"
        (load)="onLoad()"></iframe>
      <div class="detail-cta-wrap">
        <div class="pp-cta" id="lead">
          <div>
            <h3>Ready to start with Microsoft 365 Business Standard without Teams?</h3>
            <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>
          </div>
          <div class="pp-ctabtns">
            <button class="btn btn-primary" type="button" (click)="openCallback()">Request a callback</button>
            <button class="btn btn-ghost" type="button" (click)="showPricing()">&#9889; Buy Now</button>
            <button class="btn btn-ghost" type="button" (click)="requestDoc('infosheet')">&#11015; Infosheet</button>
            <button class="btn btn-ghost" type="button" (click)="requestDoc('presentation')">&#128214; Presentation</button>
            <a class="btn btn-ghost" href="https://wa.me/918657032540" target="_blank" rel="noopener noreferrer">Talk on WhatsApp</a>
            <a class="btn btn-ghost" href="mailto:sales@xcellhost.cloud">Email Us</a>
          </div>
          <a class="pp-cta-buddha-link" href="/company/support-overview" aria-label="Visit XcellHost customer support">
            <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" />
          </a>
        </div>
      </div>
    </main>
  `, styles: ["/* angular:styles/component:css;a738ad59d6fc769d1b13c215500835ef6f90c8f48214025a4608d1abffcd1be8;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/microsoft-365-business-standard-no-teams.page.ts */\n:host,\nmain {\n  display: block;\n}\niframe {\n  display: block;\n  width: 100%;\n  height: 1200px;\n  border: 0;\n}\n.detail-cta-wrap {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px 40px;\n}\n.pp-cta {\n  display: block;\n  background:\n    linear-gradient(\n      105deg,\n      #1565d8,\n      #0c3e8f);\n}\n.pp-ctabtns {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 24px;\n}\n.pp-ctabtns .btn {\n  padding: 10px 20px;\n  border-radius: 8px;\n  font: 600 14px/1.6 var(--body);\n  cursor: pointer;\n}\n.pp-ctabtns .btn-ghost {\n  background: transparent;\n  color: #fff;\n  border-color: rgba(255, 255, 255, .4);\n}\n.pp-ctabtns .btn-ghost:hover {\n  background: rgba(255, 255, 255, .12);\n  border-color: #fff;\n  color: #fff;\n}\n@media (max-width: 760px) {\n  .pp-cta {\n    padding: 28px 22px;\n  }\n  .pp-cta-buddha-link {\n    display: block;\n    margin-top: 18px;\n  }\n}\n/*# sourceMappingURL=microsoft-365-business-standard-no-teams.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["frame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Microsoft365BusinessStandardNoTeamsPage, { className: "Microsoft365BusinessStandardNoTeamsPage", filePath: "src/app/pages/microsoft-365-business-standard-no-teams.page.ts", lineNumber: 48 });
})();
export {
  Microsoft365BusinessStandardNoTeamsPage
};
//# sourceMappingURL=chunk-D3LAPPKK.js.map
