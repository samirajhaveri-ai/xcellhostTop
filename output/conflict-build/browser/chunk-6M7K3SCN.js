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
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import {
  Router
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/acronis-partner.page.ts
var _c0 = ["frame"];
var _c1 = () => ["acronis", "advanced-endpoint-security-edr", "cloud-backup", "acronis-mdr", "acronis-xdr"];
var AcronisPartnerPage = class _AcronisPartnerPage {
  frame;
  router = inject(Router);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  seo = inject(SeoService);
  observer;
  frameDocument;
  clickListener;
  constructor() {
    this.seo.set("Acronis Cyber Protect Cloud | XcellHost", "Explore Acronis backup, disaster recovery, endpoint security and cloud protection services from XcellHost.", "/vendor-partners/acronis");
  }
  onLoad() {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document)
      return;
    const resize = () => {
      frame.style.height = `${Math.ceil(document.querySelector("main")?.getBoundingClientRect().height ?? document.body.scrollHeight)}px`;
    };
    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== "undefined") {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.querySelector("main") ?? document.documentElement);
      this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);
    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener("click", this.clickListener);
    }
    this.frameDocument = document;
    this.clickListener = (event) => {
      const anchor = event.target.closest("a[href]");
      if (!anchor)
        return;
      const href = anchor.getAttribute("href");
      if (href === "#lead") {
        event.preventDefault();
        this.topics.ask("Acronis Cyber Protect Cloud");
        this.overlay.open("callback");
        return;
      }
      if (href?.startsWith("#") && href.length > 1) {
        const target = document.getElementById(href.slice(1));
        if (!target)
          return;
        event.preventDefault();
        const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 16, behavior: "smooth" });
      } else if (href?.startsWith("/") && anchor.origin === window.location.origin) {
        event.preventDefault();
        void this.router.navigateByUrl(anchor.pathname + anchor.search + anchor.hash);
      }
    };
    document.addEventListener("click", this.clickListener);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener("click", this.clickListener);
    }
  }
  static \u0275fac = function AcronisPartnerPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcronisPartnerPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcronisPartnerPage, selectors: [["xh-acronis-partner-page"]], viewQuery: function AcronisPartnerPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, decls: 92, vars: 2, consts: [["frame", ""], ["src", \u0275\u0275trustConstantResourceUrl`/acronis-partner-content.html`, "title", "Acronis Cyber Protect Cloud", "scrolling", "no", 1, "partner-content-frame", 3, "load"], ["aria-labelledby", "faq", 1, "partner-faq", "wrap"], ["id", "faq", 1, "pp-sec"], [1, "faqs"], ["open", ""], [1, "ans"], ["pageSlug", "vendor-partners/acronis", 3, "pageAliases"]], template: function AcronisPartnerPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "iframe", 1, 0);
      \u0275\u0275listener("load", function AcronisPartnerPage_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoad());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "section", 2)(3, "h2", 3);
      \u0275\u0275text(4, "Acronis Cyber Protect Cloud FAQs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4)(6, "details", 5)(7, "summary");
      \u0275\u0275text(8, "What Is Acronis Cyber Protect Cloud?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10, "Acronis Cyber Protect Cloud is a single platform that combines backup and recovery, disaster recovery, AI-based anti-malware, EDR/XDR, email security and endpoint management in one agent and one console. XcellHost, an authorised Acronis partner, runs it for Indian businesses with local data centres, INR billing and 24\xD77 support \u2014 so you replace several separate tools with one integrated service.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "details")(12, "summary");
      \u0275\u0275text(13, "How Does Acronis Cyber Protect Cloud Ensure Data Security?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6);
      \u0275\u0275text(15, "It combines AI-based threat detection, AES-256 encryption and immutable, secure backup, so data is protected from attack and can always be restored.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "details")(17, "summary");
      \u0275\u0275text(18, "What Features Does Acronis Cyber Protect Cloud Include?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 6);
      \u0275\u0275text(20, "Backup and recovery, AI-powered anti-malware and anti-ransomware, vulnerability assessment, patch management, remote desktop, and optional EDR, XDR, MDR, disaster recovery and email security packs.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "details")(22, "summary");
      \u0275\u0275text(23, "Is Acronis Cyber Protect Cloud Suitable For Small Businesses?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 6);
      \u0275\u0275text(25, "Yes. It scales from small offices with a few PCs to large enterprises, and you pay only for the workloads and packs you use.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "details")(27, "summary");
      \u0275\u0275text(28, "Can It Protect Virtual Environments?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 6);
      \u0275\u0275text(30, "Yes \u2014 VMware vSphere and Microsoft Hyper-V are supported, with agentless VM backup and instant restore.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "details")(32, "summary");
      \u0275\u0275text(33, "Does It Support Cloud Backup?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 6);
      \u0275\u0275text(35, "Yes. Backups can go to XcellHost's Indian cloud, local storage, or both for a 3-2-1 strategy, with easy recovery from anywhere.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "details")(37, "summary");
      \u0275\u0275text(38, "How Does It Handle Ransomware Attacks?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 6);
      \u0275\u0275text(40, "Behavioural detection and AI-based anomaly detection stop ransomware as it starts, and files it touched are rolled back automatically from cache or backup.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "details")(42, "summary");
      \u0275\u0275text(43, "Is It Easy To Deploy And Manage?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 6);
      \u0275\u0275text(45, "Yes. A single agent is deployed to each endpoint and everything is managed from one web console \u2014 XcellHost can deploy and manage it for you.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "details")(47, "summary");
      \u0275\u0275text(48, "What Systems Are Supported?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 6);
      \u0275\u0275text(50, "Windows, Windows Server, Linux, macOS, VMware, Hyper-V, Microsoft 365 and Google Workspace, among others.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "details")(52, "summary");
      \u0275\u0275text(53, "What Recovery Options Are Available?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 6);
      \u0275\u0275text(55, "Bare-metal recovery, full disk-image restore, granular file- and folder-level recovery, and application-item recovery such as individual mailboxes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "details")(57, "summary");
      \u0275\u0275text(58, "How Is It Priced?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 6);
      \u0275\u0275text(60, "Pricing depends on the number and type of workloads, storage used and the advanced packs you choose. XcellHost bills in INR with GST \u2014 ask us for a quote.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "details")(62, "summary");
      \u0275\u0275text(63, "Is Data Encrypted?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 6);
      \u0275\u0275text(65, "Yes \u2014 AES-256 encryption in transit and at rest, with the option to set your own encryption password.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "details")(67, "summary");
      \u0275\u0275text(68, "Does It Provide Real-Time Protection?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 6);
      \u0275\u0275text(70, "Yes. Real-time anti-malware, behavioural analysis and exploit prevention run continuously on every protected endpoint.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "details")(72, "summary");
      \u0275\u0275text(73, "Which Compliance Frameworks Does It Support?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 6);
      \u0275\u0275text(75, "Its encryption, retention, access control and audit reports help organisations meet GDPR, HIPAA and India's DPDP Act requirements.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "details")(77, "summary");
      \u0275\u0275text(78, "What Support Is Available?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 6);
      \u0275\u0275text(80, "XcellHost provides 24\xD77 first-line support by phone, WhatsApp and email, backed by Acronis documentation and escalation.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "details")(82, "summary");
      \u0275\u0275text(83, "How Does It Compare With Using Separate Tools?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 6);
      \u0275\u0275text(85, "A unified approach removes agent conflicts, overlapping licences and gaps between backup and security, reducing both complexity and cost.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "details")(87, "summary");
      \u0275\u0275text(88, "Why Buy Through XcellHost?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 6);
      \u0275\u0275text(90, "XcellHost is an authorised Acronis partner in India, offering local data centres, INR billing, onboarding and managed services on top of the platform.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(91, "xh-insights-section", 7);
    }
    if (rf & 2) {
      \u0275\u0275advance(91);
      \u0275\u0275property("pageAliases", \u0275\u0275pureFunction0(1, _c1));
    }
  }, dependencies: [InsightsSectionComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\n.partner-content-frame[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n.faqs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  align-items: start;\n}\n.faqs[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--card);\n  transition: .15s;\n}\n.faqs[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 6px 18px rgba(21, 101, 216, .08);\n}\n.faqs[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  cursor: pointer;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 18px;\n  font: 600 14.5px var(--pop);\n  color: var(--h2);\n}\n.faqs[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.faqs[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:after {\n  content: "+";\n  flex: none;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 15px;\n  transition: .2s;\n}\n.faqs[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]:after {\n  content: "\\d7";\n  background: var(--blue);\n  color: #fff;\n}\n.faqs[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%] {\n  padding: 0 18px 16px;\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.rel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  margin-top: 22px;\n  font-size: 13px;\n}\n.rel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--slate);\n}\n.rel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 5px 12px;\n  color: var(--blue);\n  background: var(--card);\n}\n.rel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n}\n.partner-faq[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 56px;\n}\n.partner-faq[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  text-align: left;\n  color: #1565D8;\n  font: 700 14px/1.5 var(--mono);\n  letter-spacing: .18em;\n  text-transform: uppercase;\n}\n.partner-faq[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n@media (max-width: 700px) {\n  .faqs[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=acronis-partner.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AcronisPartnerPage, [{
    type: Component,
    args: [{ selector: "xh-acronis-partner-page", standalone: true, imports: [InsightsSectionComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<iframe #frame class="partner-content-frame" src="/acronis-partner-content.html" title="Acronis Cyber Protect Cloud" scrolling="no" (load)="onLoad()"></iframe>

<section class="partner-faq wrap" aria-labelledby="faq"><h2 class="pp-sec" id="faq">Acronis Cyber Protect Cloud FAQs</h2>
 <div class="faqs"><details open><summary>What Is Acronis Cyber Protect Cloud?</summary><div class="ans">Acronis Cyber Protect Cloud is a single platform that combines backup and recovery, disaster recovery, AI-based anti-malware, EDR/XDR, email security and endpoint management in one agent and one console. XcellHost, an authorised Acronis partner, runs it for Indian businesses with local data centres, INR billing and 24\xD77 support \u2014 so you replace several separate tools with one integrated service.</div></details><details><summary>How Does Acronis Cyber Protect Cloud Ensure Data Security?</summary><div class="ans">It combines AI-based threat detection, AES-256 encryption and immutable, secure backup, so data is protected from attack and can always be restored.</div></details><details><summary>What Features Does Acronis Cyber Protect Cloud Include?</summary><div class="ans">Backup and recovery, AI-powered anti-malware and anti-ransomware, vulnerability assessment, patch management, remote desktop, and optional EDR, XDR, MDR, disaster recovery and email security packs.</div></details><details><summary>Is Acronis Cyber Protect Cloud Suitable For Small Businesses?</summary><div class="ans">Yes. It scales from small offices with a few PCs to large enterprises, and you pay only for the workloads and packs you use.</div></details><details><summary>Can It Protect Virtual Environments?</summary><div class="ans">Yes \u2014 VMware vSphere and Microsoft Hyper-V are supported, with agentless VM backup and instant restore.</div></details><details><summary>Does It Support Cloud Backup?</summary><div class="ans">Yes. Backups can go to XcellHost&#39;s Indian cloud, local storage, or both for a 3-2-1 strategy, with easy recovery from anywhere.</div></details><details><summary>How Does It Handle Ransomware Attacks?</summary><div class="ans">Behavioural detection and AI-based anomaly detection stop ransomware as it starts, and files it touched are rolled back automatically from cache or backup.</div></details><details><summary>Is It Easy To Deploy And Manage?</summary><div class="ans">Yes. A single agent is deployed to each endpoint and everything is managed from one web console \u2014 XcellHost can deploy and manage it for you.</div></details><details><summary>What Systems Are Supported?</summary><div class="ans">Windows, Windows Server, Linux, macOS, VMware, Hyper-V, Microsoft 365 and Google Workspace, among others.</div></details><details><summary>What Recovery Options Are Available?</summary><div class="ans">Bare-metal recovery, full disk-image restore, granular file- and folder-level recovery, and application-item recovery such as individual mailboxes.</div></details><details><summary>How Is It Priced?</summary><div class="ans">Pricing depends on the number and type of workloads, storage used and the advanced packs you choose. XcellHost bills in INR with GST \u2014 ask us for a quote.</div></details><details><summary>Is Data Encrypted?</summary><div class="ans">Yes \u2014 AES-256 encryption in transit and at rest, with the option to set your own encryption password.</div></details><details><summary>Does It Provide Real-Time Protection?</summary><div class="ans">Yes. Real-time anti-malware, behavioural analysis and exploit prevention run continuously on every protected endpoint.</div></details><details><summary>Which Compliance Frameworks Does It Support?</summary><div class="ans">Its encryption, retention, access control and audit reports help organisations meet GDPR, HIPAA and India&#39;s DPDP Act requirements.</div></details><details><summary>What Support Is Available?</summary><div class="ans">XcellHost provides 24\xD77 first-line support by phone, WhatsApp and email, backed by Acronis documentation and escalation.</div></details><details><summary>How Does It Compare With Using Separate Tools?</summary><div class="ans">A unified approach removes agent conflicts, overlapping licences and gaps between backup and security, reducing both complexity and cost.</div></details><details><summary>Why Buy Through XcellHost?</summary><div class="ans">XcellHost is an authorised Acronis partner in India, offering local data centres, INR billing, onboarding and managed services on top of the platform.</div></details></div></section>
<xh-insights-section pageSlug="vendor-partners/acronis" [pageAliases]="['acronis', 'advanced-endpoint-security-edr', 'cloud-backup', 'acronis-mdr', 'acronis-xdr']" />
`, styles: ['/* angular:styles/component:css;6023f284aa31ed005757c13074b2b47dd3a908e399c508bc32415250459068a6;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/acronis-partner.page.ts */\n:host {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\n.partner-content-frame {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n.faqs {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  align-items: start;\n}\n.faqs details {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: var(--card);\n  transition: .15s;\n}\n.faqs details[open] {\n  border-color: var(--blue);\n  box-shadow: 0 6px 18px rgba(21, 101, 216, .08);\n}\n.faqs summary {\n  cursor: pointer;\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 16px 18px;\n  font: 600 14.5px var(--pop);\n  color: var(--h2);\n}\n.faqs summary::-webkit-details-marker {\n  display: none;\n}\n.faqs summary:after {\n  content: "+";\n  flex: none;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: grid;\n  place-items: center;\n  font-size: 15px;\n  transition: .2s;\n}\n.faqs details[open] summary:after {\n  content: "\\d7";\n  background: var(--blue);\n  color: #fff;\n}\n.faqs .ans {\n  padding: 0 18px 16px;\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.rel {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n  margin-top: 22px;\n  font-size: 13px;\n}\n.rel span {\n  font-weight: 600;\n  color: var(--slate);\n}\n.rel a {\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 5px 12px;\n  color: var(--blue);\n  background: var(--card);\n}\n.rel a:hover {\n  border-color: var(--blue);\n}\n.partner-faq {\n  padding-top: 24px;\n  padding-bottom: 56px;\n}\n.partner-faq h2 {\n  margin: 0 0 24px;\n  text-align: left;\n  color: #1565D8;\n  font: 700 14px/1.5 var(--mono);\n  letter-spacing: .18em;\n  text-transform: uppercase;\n}\n.partner-faq summary {\n  text-transform: capitalize;\n}\n@media (max-width: 700px) {\n  .faqs {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=acronis-partner.page.css.map */\n'] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["frame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcronisPartnerPage, { className: "AcronisPartnerPage", filePath: "src/app/pages/acronis-partner.page.ts", lineNumber: 35 });
})();
export {
  AcronisPartnerPage
};
//# sourceMappingURL=chunk-6M7K3SCN.js.map
