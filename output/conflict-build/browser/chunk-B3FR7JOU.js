import {
  CartService
} from "./chunk-TZE2L2GZ.js";
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import {
  Component,
  Input,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";

// src/app/sections/imported-interactive-content.component.ts
var _c0 = ["frame"];
function ImportedInteractiveContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "iframe", 3, 0);
    \u0275\u0275domListener("load", function ImportedInteractiveContentComponent_Conditional_0_Template_iframe_load_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLoad());
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("srcdoc", ctx_r1.cybirdDocument(), \u0275\u0275sanitizeHtml)("title", ctx_r1.contentTitle);
  }
}
function ImportedInteractiveContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "iframe", 4, 0);
    \u0275\u0275domListener("load", function ImportedInteractiveContentComponent_Conditional_1_Template_iframe_load_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLoad());
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("min-height", ctx_r1.source.endsWith("-hero") ? 0 : 600, "px");
    \u0275\u0275domProperty("src", ctx_r1.contentUrl, \u0275\u0275sanitizeResourceUrl)("title", ctx_r1.contentTitle);
  }
}
var ImportedInteractiveContentComponent = class _ImportedInteractiveContentComponent {
  source = "kubernetes";
  consultingSlug = "";
  sslSlug = "";
  vpsSlug = "";
  sectigoSlug = "";
  inferenceSlug = "";
  inferenceSlugs = /* @__PURE__ */ new Set(["serverless-inference", "dedicated-inference", "model-catalog", "model-directory"]);
  sectigoSlugs = /* @__PURE__ */ new Set(["sectigo-ssl", "sectigo-ov-ssl-wildcard", "sectigo-ov-ssl", "sectigo-acme-certificate-as-a-service", "sectigo-ssl-wildcard", "sectigo-ssl-multi-domain-ucc", "sectigo-ov-ssl-multi-domain-wildcard", "sectigo-ov-ssl-multi-domain-ucc", "sectigo-ev-ssl-multi-domain-ucc", "sectigo-ev-ssl"]);
  vpsSlugs = /* @__PURE__ */ new Set(["wordpress-vps", "windows-vps", "vps-usa", "vps-netherlands", "vps-india", "vps-hosting", "openclaw-vps", "n8n-vps", "cpanel-vps"]);
  sanitizer = inject(DomSanitizer);
  cybirdDocument = signal(null, ...ngDevMode ? [{ debugName: "cybirdDocument" }] : []);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  cart = inject(CartService);
  safeUrls = /* @__PURE__ */ new Map();
  consultingUrls = {
    "managed-grc": "/imported-consulting-managed-grc.html",
    "iso-27001-consulting": "/imported-consulting-iso-27001.html",
    "iso-20000-itsm": "/imported-consulting-iso-20000.html",
    "iso-27017-cloud-infosec": "/imported-consulting-iso-27017.html",
    "iso-22301-bmc": "/imported-consulting-iso-22301.html",
    "iso-27018-pii-public-cloud": "/imported-consulting-iso-27018.html",
    "iso-42001ai-risk": "/imported-consulting-iso-42001.html",
    "soc-1-cunsulting": "/imported-consulting-soc-1.html",
    "soc-2-cunsulting": "/imported-consulting-soc-2.html",
    "pci-consulting": "/imported-consulting-pci-dss.html"
  };
  sslSlugs = /* @__PURE__ */ new Set([
    "digicert-ev-multi-domain-ssl",
    "digicert-wildcard-ssl",
    "digicert-secure-site-ev-ssl",
    "digicert-secure-site-multi-domain-ssl",
    "digicert-secure-site-wildcard-ssl",
    "digicert-secure-site-pro-ssl",
    "digicert-secure-site-pro-ev-ssl"
  ]);
  sourceUrls = {
    cybird: "about:blank",
    "managed-pki": "/imported-managed-pki.html",
    "managed-pki-hero": "/imported-managed-pki-hero.html",
    "private-ca": "/imported-private-ca.html",
    "private-ca-hero": "/imported-private-ca-hero.html",
    "iot-pki": "/imported-iot-pki.html",
    "iot-pki-hero": "/imported-iot-pki-hero.html",
    "iot-device-certificates": "/imported-iot-device-certificates.html",
    "iot-device-certificates-hero": "/imported-iot-device-certificates-hero.html",
    "cloud-code-signing": "/imported-cloud-code-signing.html",
    "cloud-code-signing-hero": "/imported-cloud-code-signing-hero.html",
    "clm-solutions": "/imported-clm-solutions.html",
    "clm-solutions-hero": "/imported-clm-solutions-hero.html",
    "matter-dac": "/imported-matter-dac.html",
    "matter-dac-hero": "/imported-matter-dac-hero.html",
    "pki-software": "/imported-pki-software.html",
    "pki-software-hero": "/imported-pki-software-hero.html",
    "windows-365": "/imported-windows-365.html",
    "windows-365-hero": "/imported-windows-365-hero.html",
    "project-server": "/imported-project-server.html",
    "microsoft-viva": "/imported-microsoft-viva.html",
    "microsoft-visio": "/imported-microsoft-visio.html",
    "genian-nac": "/imported-genian-nac.html",
    "wordpress-vps": "/imported-wordpress-vps.html",
    "wordpress-vps-hero": "/imported-wordpress-vps-hero.html",
    "general-compute": "/imported-general-compute.html",
    "general-compute-hero": "/imported-general-compute-hero.html",
    "bio-link": "/imported-bio-link.html",
    "bio-link-hero": "/imported-bio-link-hero.html",
    "47-day-ssl": "/imported-47-day-ssl.html",
    "47-day-ssl-hero": "/imported-47-day-ssl-hero.html",
    "direct-backup": "/imported-acronis-direct-backup.html",
    "direct-backup-hero": "/imported-acronis-direct-backup-hero.html",
    druva: "/imported-druva.html",
    "druva-hero": "/imported-druva-hero.html",
    cpanel: "/imported-cpanel-vps.html",
    "cpanel-hero": "/imported-cpanel-vps-hero.html",
    "acronis-ai": "/imported-acronis-ai.html",
    "acronis-ai-hero": "/imported-acronis-ai-hero.html",
    openclaw: "/imported-openclaw-vps.html",
    "openclaw-hero": "/imported-openclaw-vps-hero.html",
    kubernetes: "/imported-kubernetes.html",
    podcasts: "/imported-podcasts.html",
    deepcall: "/imported-deepcall.html",
    workspace: "/imported-sarv-workspace.html",
    rapidssl: "/imported-rapidssl.html",
    sectigo: "/imported-sectigo-code-signing.html",
    "sectigo-ev": "/imported-sectigo-ev-code-signing.html",
    mark: "/imported-mark-certificates.html",
    "website-security": "/imported-website-security.html",
    "certificate-management": "/imported-certificate-management.html",
    "code-signing-certificates": "/imported-code-signing-certificates.html",
    "email-signing-certificates": "/imported-email-signing-certificates.html",
    "digicert-standard-ssl": "/imported-digicert-standard-ssl.html",
    "digicert-ev-ssl": "/imported-digicert-ev-ssl.html",
    "digicert-multi-domain-ssl": "/imported-digicert-multi-domain-ssl.html"
  };
  sourceTitles = {
    cybird: "Cybird X2 security platform, animated network, plans and threat simulator",
    "managed-pki": "Managed PKI overview, comparisons, use-case builder and pricing",
    "managed-pki-hero": "Managed PKI root ceremony, issuance, revocation and renewal animation",
    "private-ca": "Private CA overview, certificate designer, comparisons, setup and pricing",
    "private-ca-hero": "Private CA root ceremony, certificate issuance and trust animation",
    "iot-pki": "IoT PKI provisioning, threat mapper, fleet sizing and pricing",
    "iot-pki-hero": "IoT PKI factory provisioning and device identity animation",
    "iot-device-certificates": "IoT Device Certificates lifecycle, certificate picker, comparisons and pricing",
    "iot-device-certificates-hero": "IoT Device Certificates fleet identity map animation",
    "cloud-code-signing": "Cloud Code Signing policies, CI integrations, product comparison and pricing",
    "cloud-code-signing-hero": "Cloud Code Signing build pipeline, policy gate and HSM animation",
    "clm-solutions": "CLM Solutions platform comparison, workload calculator, chooser and pricing",
    "clm-solutions-hero": "Certificate lifecycle discovery, inventory and renewal animation",
    "matter-dac": "Matter DAC trust chain, commissioning simulator, manufacturing planner and pricing",
    "matter-dac-hero": "Matter device commissioning and attestation animation",
    "pki-software": "PKI Software platform comparison, chooser, architecture builder and pricing",
    "pki-software-hero": "PKI Software infrastructure deployment and operation animation",
    "windows-365": "Windows 365 Cloud PC plans, finder, configurator, apps and cost calculators",
    "windows-365-hero": "Windows 365 Cloud PC desktop, Entra ID, Intune and device continuity animation",
    "inference-page": "Inference Cloud models, features and deployment options",
    "sectigo-detail": "Sectigo certificate features, validation and pricing",
    "vps-page": "VPS hosting features, plans and server configurator",
    "project-server": "Microsoft Project Server features, migration and pricing",
    "microsoft-viva": "Microsoft Viva modules, employee experience and pricing",
    "microsoft-visio": "Microsoft Visio diagrams, plans and pricing",
    "genian-nac": "Genian NAC network access control, demos and pricing",
    "wordpress-vps": "WordPress VPS plans, server builder and Why XcellHost",
    "wordpress-vps-hero": "WordPress VPS animated hero and speed preview",
    "general-compute": "General Compute plans, add-ons and launch steps",
    "general-compute-hero": "General Compute interactive deploy preview",
    "bio-link": "Bio Link and Digital Visiting Card tools and pricing",
    "bio-link-hero": "XcellCard animated visiting card preview",
    "47-day-ssl": "47-Day SSL readiness, automation and pricing tools",
    "47-day-ssl-hero": "47-Day SSL certificate renewal animation",
    "direct-backup": "Acronis Direct Cloud Backup features and interactive tools",
    "direct-backup-hero": "Acronis direct cloud backup animation",
    druva: "Druva Resilience Cloud features and interactive tools",
    "druva-hero": "Druva resilience timeline animation",
    cpanel: "cPanel VPS plans and server builder",
    "cpanel-hero": "cPanel hosting console",
    "acronis-ai": "Acronis AI platform, interactive demos and pricing",
    "acronis-ai-hero": "Acronis Cyber Console animated overview",
    openclaw: "OpenClaw VPS plans and server builder",
    "openclaw-hero": "OpenClaw agent console",
    kubernetes: "Managed Kubernetes workloads and calculator",
    podcasts: "XcellHost Cloud Podcast",
    deepcall: "Sarv DeepCall features, IVR builder and calculator",
    workspace: "XcellWorkSpace applications and pricing",
    rapidssl: "RapidSSL certificates, selector and calculator",
    sectigo: "Sectigo Code Signing tools and pricing",
    "sectigo-ev": "Sectigo EV Code Signing tools and pricing",
    mark: "Mark Certificates eligibility, preview and pricing",
    "website-security": "Website Security Solutions scorecard and pricing",
    "certificate-management": "Certificate Management dashboard and calculators",
    "code-signing-certificates": "Code Signing Certificates tools and pricing",
    "email-signing-certificates": "Email Signing Certificates tools and pricing",
    consulting: "Security consulting content and tools",
    "digicert-standard-ssl": "DigiCert Standard SSL features and pricing",
    "digicert-ev-ssl": "DigiCert EV SSL features and pricing",
    "digicert-multi-domain-ssl": "DigiCert Multi-Domain SSL features and pricing",
    "ssl-detail": "DigiCert certificate features and pricing"
  };
  frame;
  cleanup = [];
  ngOnChanges() {
    if (this.source === "cybird" && !this.cybirdDocument()) {
      void import("./chunk-HBL5NVZC.js").then(({ CYBIRD_DOCUMENT }) => {
        this.cybirdDocument.set(this.sanitizer.bypassSecurityTrustHtml(CYBIRD_DOCUMENT));
      });
    }
  }
  get contentUrl() {
    let url;
    if (this.source === "inference-page") {
      url = this.inferenceSlugs.has(this.inferenceSlug) ? `/imported-inference-${this.inferenceSlug}.html` : "about:blank";
    } else if (this.source === "sectigo-detail") {
      url = this.sectigoSlugs.has(this.sectigoSlug) ? `/imported-sectigo-detail-${this.sectigoSlug}.html` : "about:blank";
    } else if (this.source === "vps-page") {
      url = this.vpsSlugs.has(this.vpsSlug) ? `/imported-vps-page-${this.vpsSlug}.html` : "about:blank";
    } else if (this.source === "consulting") {
      url = this.consultingUrls[this.consultingSlug] ?? "about:blank";
    } else if (this.source === "ssl-detail") {
      url = this.sslSlugs.has(this.sslSlug) ? `/imported-${this.sslSlug}.html` : "about:blank";
      if (this.sslSlug === "digicert-secure-site-pro-ssl") {
        url += "?v=powered-by-below-ai-2";
      }
    } else {
      url = this.sourceUrls[this.source];
    }
    let safeUrl = this.safeUrls.get(url);
    if (!safeUrl) {
      safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      this.safeUrls.set(url, safeUrl);
    }
    return safeUrl;
  }
  get contentTitle() {
    return this.sourceTitles[this.source];
  }
  onLoad() {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const main = doc?.querySelector("main");
    if (!frame || !doc || !main)
      return;
    const resize = () => {
      if (this.source === "cybird")
        doc.documentElement.style.setProperty("--cybird-vh", `${window.innerHeight / 100}px`);
      const height = `${Math.ceil(main.getBoundingClientRect().height) + 8}px`;
      if (frame.style.height !== height)
        frame.style.height = height;
    };
    let resizeFrame = 0;
    const observer = new ResizeObserver(() => {
      if (this.source !== "cybird") {
        resize();
        return;
      }
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    });
    observer.observe(main);
    doc.fonts.ready.then(resize);
    resize();
    const position = () => {
      const top = Math.max(0, -frame.getBoundingClientRect().top + 90);
      doc.querySelectorAll(".modal").forEach((modal) => {
        modal.style.position = "absolute";
        modal.style.top = `${top}px`;
        modal.style.bottom = "auto";
        modal.style.height = `${Math.max(300, window.innerHeight - 100)}px`;
      });
      const mini = doc.getElementById("mini");
      if (mini) {
        mini.style.position = "absolute";
        mini.style.top = `${Math.max(0, -frame.getBoundingClientRect().top + window.innerHeight - 100)}px`;
        mini.style.bottom = "auto";
      }
    };
    const mutations = new MutationObserver(position);
    doc.querySelectorAll(".modal").forEach((modal) => mutations.observe(modal, { attributes: true, attributeFilter: ["class"] }));
    window.addEventListener("scroll", position, { passive: true });
    position();
    const callback = (event) => {
      this.topics.ask(event.detail || "Podcast enquiry");
      this.overlay.open("callback");
    };
    const add = (event) => {
      const item = event.detail;
      this.cart.add(item.name + " - " + item.sub, "INR " + item.price, item.qty, { unitAmount: item.price, currency: "INR", locale: "en-IN", suffix: "" });
      this.cart.open();
    };
    const click = (event) => {
      const element = event.target;
      const anchor = element.closest('a[href^="#"]');
      const id = element.closest("[data-sel]") ? "calc" : anchor?.getAttribute("href")?.slice(1);
      const target = id ? doc.getElementById(id) ?? document.getElementById(id) : null;
      if (!target)
        return;
      event.preventDefault();
      const frameTop = target.ownerDocument === doc ? frame.getBoundingClientRect().top : 0;
      window.scrollTo({
        top: window.scrollY + frameTop + target.getBoundingClientRect().top - 148,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
    };
    doc.addEventListener("import-callback", callback);
    doc.addEventListener("import-cart", add);
    doc.addEventListener("click", click);
    this.cleanup.push(() => observer.disconnect(), () => cancelAnimationFrame(resizeFrame), () => mutations.disconnect(), () => window.removeEventListener("scroll", position), () => doc.removeEventListener("import-callback", callback), () => doc.removeEventListener("import-cart", add), () => doc.removeEventListener("click", click));
  }
  ngOnDestroy() {
    this.cleanup.forEach((fn) => fn());
    this.cleanup = [];
  }
  static \u0275fac = function ImportedInteractiveContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImportedInteractiveContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImportedInteractiveContentComponent, selectors: [["xh-imported-interactive-content"]], viewQuery: function ImportedInteractiveContentComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, hostVars: 2, hostBindings: function ImportedInteractiveContentComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("openclaw-page-content", ctx.source === "openclaw" || ctx.source === "cpanel");
    }
  }, inputs: { source: "source", consultingSlug: "consultingSlug", sslSlug: "sslSlug", vpsSlug: "vpsSlug", sectigoSlug: "sectigoSlug", inferenceSlug: "inferenceSlug" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [["frame", ""], ["scrolling", "no", 3, "srcdoc", "title"], ["scrolling", "no", 3, "min-height", "src", "title"], ["scrolling", "no", 3, "load", "srcdoc", "title"], ["scrolling", "no", 3, "load", "src", "title"]], template: function ImportedInteractiveContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ImportedInteractiveContentComponent_Conditional_0_Template, 2, 2, "iframe", 1)(1, ImportedInteractiveContentComponent_Conditional_1_Template, 2, 4, "iframe", 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.source === "cybird" ? 0 : 1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 600px;\n  border: 0;\n}\n/*# sourceMappingURL=imported-interactive-content.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportedInteractiveContentComponent, [{
    type: Component,
    args: [{ selector: "xh-imported-interactive-content", standalone: true, host: { "[class.openclaw-page-content]": "source === 'openclaw' || source === 'cpanel'" }, template: `@if (source === 'cybird') {
    <iframe #frame [srcdoc]="cybirdDocument()" [title]="contentTitle"
      scrolling="no" (load)="onLoad()"></iframe>
  } @else {
    <iframe #frame [style.min-height.px]="source.endsWith('-hero') ? 0 : 600"
      [src]="contentUrl" [title]="contentTitle" scrolling="no" (load)="onLoad()"></iframe>
  }`, styles: ["/* angular:styles/component:css;48d93f1e406d97d90a41287854bf08bdb542146e7a25667cb53bccc6b31d4645;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/sections/imported-interactive-content.component.ts */\n:host {\n  display: block;\n}\niframe {\n  display: block;\n  width: 100%;\n  min-height: 600px;\n  border: 0;\n}\n/*# sourceMappingURL=imported-interactive-content.component.css.map */\n"] }]
  }], null, { source: [{
    type: Input
  }], consultingSlug: [{
    type: Input
  }], sslSlug: [{
    type: Input
  }], vpsSlug: [{
    type: Input
  }], sectigoSlug: [{
    type: Input
  }], inferenceSlug: [{
    type: Input
  }], frame: [{
    type: ViewChild,
    args: ["frame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImportedInteractiveContentComponent, { className: "ImportedInteractiveContentComponent", filePath: "src/app/sections/imported-interactive-content.component.ts", lineNumber: 36 });
})();

export {
  ImportedInteractiveContentComponent
};
//# sourceMappingURL=chunk-B3FR7JOU.js.map
