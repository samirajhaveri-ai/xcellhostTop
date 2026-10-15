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
  DOCUMENT,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/data-processing-agreement.page.ts
var _forTrack0 = ($index, $item) => $item.id;
function DataProcessingAgreementPage_For_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r1 = ctx.$implicit;
    \u0275\u0275property("href", "#" + section_r1.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r1.number);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(section_r1.title);
  }
}
var DataProcessingAgreementPage = class _DataProcessingAgreementPage {
  document = inject(DOCUMENT);
  sections = [
    { id: "introduction", number: "01", title: "Introduction" },
    { id: "definitions", number: "02", title: "Definitions" },
    { id: "scope", number: "03", title: "Scope of processing" },
    { id: "customer-obligations", number: "04", title: "Customer obligations" },
    { id: "processor-obligations", number: "05", title: "XcellHost obligations" },
    { id: "security", number: "06", title: "Security measures" },
    { id: "subprocessors", number: "07", title: "Sub-processors" },
    { id: "transfers", number: "08", title: "International transfers" },
    { id: "rights", number: "09", title: "Data Principal rights" },
    { id: "audits", number: "10", title: "Audits and compliance" },
    { id: "liability", number: "11", title: "Return, deletion and liability" },
    { id: "contact", number: "12", title: "Contact" }
  ];
  constructor() {
    inject(SeoService).set("Data Processing Agreement | XcellHost", "The XcellHost Data Processing Agreement explains how personal data is processed and protected when XcellHost provides cloud and managed services.", "/under-construction/data-processing-agreement/");
  }
  printAgreement() {
    this.document.defaultView?.print();
  }
  static \u0275fac = function DataProcessingAgreementPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataProcessingAgreementPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataProcessingAgreementPage, selectors: [["xh-data-processing-agreement-page"]], decls: 432, vars: 0, consts: [[1, "dpa-page"], ["aria-labelledby", "dpa-title", 1, "dpa-hero"], [1, "dpa-shell"], ["aria-label", "Breadcrumb", 1, "dpa-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], [1, "dpa-hero-grid"], [1, "dpa-hero-copy"], [1, "dpa-kicker"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["id", "dpa-title"], [1, "dpa-meta"], [1, "dpa-actions"], ["href", "#introduction", 1, "dpa-button", "dpa-button-primary"], ["type", "button", 1, "dpa-button", "dpa-button-secondary", 3, "click"], ["aria-label", "Agreement roles", 1, "dpa-role-card"], [1, "dpa-role-heading"], [1, "dpa-role"], ["aria-hidden", "true", 1, "dpa-role-line"], [1, "dpa-role-note"], ["aria-label", "Agreement summary", 1, "dpa-summary"], [1, "dpa-shell", "dpa-summary-grid"], [1, "dpa-shell", "dpa-layout"], ["aria-label", "Agreement sections", 1, "dpa-toc"], [1, "dpa-toc-card"], [1, "dpa-toc-label"], [3, "href"], [1, "dpa-help"], ["href", "mailto:dpo@xcellhost.cloud"], [1, "dpa-document"], [1, "dpa-notice"], ["id", "introduction", 1, "dpa-section"], [1, "dpa-section-number"], [1, "dpa-section-kicker"], ["id", "definitions", 1, "dpa-section"], [1, "dpa-definitions"], ["id", "scope", 1, "dpa-section"], [1, "dpa-detail-grid"], ["id", "customer-obligations", 1, "dpa-section"], [1, "dpa-check-list"], ["id", "processor-obligations", 1, "dpa-section"], ["id", "security", 1, "dpa-section", "dpa-security-section"], [1, "dpa-security-grid"], [1, "dpa-small-note"], ["id", "subprocessors", 1, "dpa-section"], ["id", "transfers", 1, "dpa-section"], ["id", "rights", 1, "dpa-section"], ["id", "audits", 1, "dpa-section"], ["id", "liability", 1, "dpa-section"], ["id", "contact", 1, "dpa-section", "dpa-contact-section"], [1, "dpa-contact-card"], ["href", "tel:+912267111555"], [1, "dpa-document-footer"], ["routerLink", "/contact"]], template: function DataProcessingAgreementPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4);
      \u0275\u0275text(5, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Legal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 5);
      \u0275\u0275text(11, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Data Processing Agreement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "span", 8)(17, "span", 9);
      \u0275\u0275text(18, "verified_user");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, "Legal document");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h1", 10);
      \u0275\u0275text(21, "Data Processing");
      \u0275\u0275element(22, "br");
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Agreement");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, "This agreement sets out how XcellHost processes and protects personal data on a customer\u2019s behalf while delivering cloud, hosting, security and managed services.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "span");
      \u0275\u0275text(29, "Version 1.0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31, "Last updated 12 September 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 12)(33, "a", 13);
      \u0275\u0275text(34, "Read agreement");
      \u0275\u0275elementStart(35, "span", 5);
      \u0275\u0275text(36, "\u2193");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "button", 14);
      \u0275\u0275listener("click", function DataProcessingAgreementPage_Template_button_click_37_listener() {
        return ctx.printAgreement();
      });
      \u0275\u0275elementStart(38, "span", 9);
      \u0275\u0275text(39, "print");
      \u0275\u0275elementEnd();
      \u0275\u0275text(40, "Print or save PDF");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "aside", 15)(42, "div", 16)(43, "span", 9);
      \u0275\u0275text(44, "handshake");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div")(46, "small");
      \u0275\u0275text(47, "THE WORKING RELATIONSHIP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "strong");
      \u0275\u0275text(49, "Clear roles. Shared responsibility.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 17)(51, "span");
      \u0275\u0275text(52, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div")(54, "strong");
      \u0275\u0275text(55, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "Controller or Data Fiduciary");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 18);
      \u0275\u0275element(59, "i");
      \u0275\u0275elementStart(60, "em");
      \u0275\u0275text(61, "documented instructions");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 17)(64, "span");
      \u0275\u0275text(65, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div")(67, "strong");
      \u0275\u0275text(68, "XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "p");
      \u0275\u0275text(70, "Processor or Data Processor");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "p", 19);
      \u0275\u0275text(72, "The applicable service order defines the selected services, locations and any service-specific processing details.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(73, "section", 20)(74, "div", 21)(75, "div")(76, "span", 9);
      \u0275\u0275text(77, "gavel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "strong");
      \u0275\u0275text(79, "DPDPA aligned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "small");
      \u0275\u0275text(81, "Indian data protection framework");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div")(83, "span", 9);
      \u0275\u0275text(84, "policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "strong");
      \u0275\u0275text(86, "Instruction based");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "small");
      \u0275\u0275text(88, "Processing for contracted services");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div")(90, "span", 9);
      \u0275\u0275text(91, "encrypted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "strong");
      \u0275\u0275text(93, "Security focused");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "small");
      \u0275\u0275text(95, "Technical and organisational controls");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "div")(97, "span", 9);
      \u0275\u0275text(98, "support_agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "strong");
      \u0275\u0275text(100, "Rights assistance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "small");
      \u0275\u0275text(102, "Support for valid customer requests");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "div", 22)(104, "aside", 23)(105, "div", 24)(106, "span", 25);
      \u0275\u0275text(107, "On this page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "nav");
      \u0275\u0275repeaterCreate(109, DataProcessingAgreementPage_For_110_Template, 4, 3, "a", 26, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 27)(112, "span", 9);
      \u0275\u0275text(113, "contact_support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p");
      \u0275\u0275text(115, "Questions about this agreement?");
      \u0275\u0275elementStart(116, "a", 28);
      \u0275\u0275text(117, "dpo@xcellhost.cloud");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(118, "article", 29)(119, "div", 30)(120, "span", 9);
      \u0275\u0275text(121, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p")(123, "strong");
      \u0275\u0275text(124, "How this agreement applies");
      \u0275\u0275elementEnd();
      \u0275\u0275text(125, "This DPA forms part of the agreement governing the services purchased by the Customer. If a signed agreement or service order contains a more specific data-processing term, that term applies to the extent of the inconsistency.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "section", 31)(127, "span", 32);
      \u0275\u0275text(128, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "div")(130, "span", 33);
      \u0275\u0275text(131, "FOUNDATION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "h2");
      \u0275\u0275text(133, "Introduction");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p");
      \u0275\u0275text(135, "This Data Processing Agreement (\u201CDPA\u201D) supplements the applicable services agreement, order form or statement of work between XcellHost Cloud Services Pvt. Ltd. (\u201CXcellHost\u201D) and the customer identified in that agreement (\u201CCustomer\u201D).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "p");
      \u0275\u0275text(137, "It governs XcellHost\u2019s processing of personal data on behalf of the Customer in connection with the contracted services. The parties intend this DPA to support compliance with the Digital Personal Data Protection Act, 2023 and applicable rules, and with other data-protection requirements expressly agreed for the services.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(138, "section", 34)(139, "span", 32);
      \u0275\u0275text(140, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div")(142, "span", 33);
      \u0275\u0275text(143, "SHARED LANGUAGE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "h2");
      \u0275\u0275text(145, "Definitions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "dl", 35)(147, "div")(148, "dt");
      \u0275\u0275text(149, "Personal Data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "dd");
      \u0275\u0275text(151, "Digital data about an individual who is identifiable by or in relation to that data.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div")(153, "dt");
      \u0275\u0275text(154, "Processing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "dd");
      \u0275\u0275text(156, "Any operation performed on Personal Data, including collection, recording, storage, use, retrieval, disclosure, transfer or deletion.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div")(158, "dt");
      \u0275\u0275text(159, "Customer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "dd");
      \u0275\u0275text(161, "The party that determines why and how Customer Personal Data is processed, acting as Controller or Data Fiduciary as applicable.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div")(163, "dt");
      \u0275\u0275text(164, "XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "dd");
      \u0275\u0275text(166, "The party processing Customer Personal Data on documented instructions, acting as Processor or Data Processor as applicable.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(167, "div")(168, "dt");
      \u0275\u0275text(169, "Sub-processor");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "dd");
      \u0275\u0275text(171, "A third party appointed by XcellHost to process Customer Personal Data for part of the services.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div")(173, "dt");
      \u0275\u0275text(174, "Personal Data Breach");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "dd");
      \u0275\u0275text(176, "A confirmed breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to Customer Personal Data.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(177, "section", 36)(178, "span", 32);
      \u0275\u0275text(179, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "div")(181, "span", 33);
      \u0275\u0275text(182, "PROCESSING DETAILS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(183, "h2");
      \u0275\u0275text(184, "Scope and nature of processing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "p");
      \u0275\u0275text(186, "XcellHost processes Customer Personal Data only as needed to deliver, secure, monitor, maintain and support the contracted services; manage the Customer account; prevent abuse; and meet applicable legal obligations.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "div", 37)(188, "div")(189, "span");
      \u0275\u0275text(190, "Purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "p");
      \u0275\u0275text(192, "Provisioning and operating the selected cloud, hosting, cybersecurity, backup, communications or managed services.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(193, "div")(194, "span");
      \u0275\u0275text(195, "Duration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "p");
      \u0275\u0275text(197, "For the service term and any limited period required for return, deletion, backup expiry or lawful retention.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(198, "div")(199, "span");
      \u0275\u0275text(200, "Data subjects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "p");
      \u0275\u0275text(202, "Customer personnel, authorised users, end customers and other individuals whose data the Customer places in the services.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "div")(204, "span");
      \u0275\u0275text(205, "Data categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "p");
      \u0275\u0275text(207, "Account and contact data, service content, credentials, logs, support records and other data determined by the Customer.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(208, "p");
      \u0275\u0275text(209, "XcellHost does not use Customer Personal Data for independent advertising or sell it. Additional processing details may be set out in the applicable service order.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(210, "section", 38)(211, "span", 32);
      \u0275\u0275text(212, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div")(214, "span", 33);
      \u0275\u0275text(215, "CUSTOMER RESPONSIBILITY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "h2");
      \u0275\u0275text(217, "Customer obligations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "p");
      \u0275\u0275text(219, "The Customer is responsible for the lawfulness, quality and accuracy of Customer Personal Data and for its use of the services. The Customer will:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "ul", 39)(221, "li");
      \u0275\u0275text(222, "provide lawful, complete and documented processing instructions;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "li");
      \u0275\u0275text(224, "give required notices and obtain valid consent or another lawful basis where applicable;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "li");
      \u0275\u0275text(226, "configure its accounts, access permissions, endpoints and applications securely;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(227, "li");
      \u0275\u0275text(228, "avoid uploading data prohibited by the service agreement or not needed for the stated purpose; and");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "li");
      \u0275\u0275text(230, "respond to Data Principal requests and regulatory enquiries for which it is responsible.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(231, "section", 40)(232, "span", 32);
      \u0275\u0275text(233, "05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "div")(235, "span", 33);
      \u0275\u0275text(236, "XCELLHOST RESPONSIBILITY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(237, "h2");
      \u0275\u0275text(238, "XcellHost obligations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(239, "p");
      \u0275\u0275text(240, "XcellHost will:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "ul", 39)(242, "li");
      \u0275\u0275text(243, "process Customer Personal Data only on documented instructions, unless processing is required by applicable law;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "li");
      \u0275\u0275text(245, "ensure personnel authorised to process the data are subject to confidentiality obligations;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(246, "li");
      \u0275\u0275text(247, "maintain appropriate technical and organisational safeguards proportionate to the service and risk;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "li");
      \u0275\u0275text(249, "provide reasonable assistance with security, impact assessments, lawful regulatory consultations and Data Principal requests;");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "li");
      \u0275\u0275text(251, "notify the Customer without undue delay after confirming a Personal Data Breach affecting Customer Personal Data and provide available information needed for the Customer\u2019s response; and");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(252, "li");
      \u0275\u0275text(253, "maintain processing records where required by applicable law.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(254, "section", 41)(255, "span", 32);
      \u0275\u0275text(256, "06");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "div")(258, "span", 33);
      \u0275\u0275text(259, "SAFEGUARDS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "h2");
      \u0275\u0275text(261, "Technical and organisational security measures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "p");
      \u0275\u0275text(263, "Controls are selected according to the contracted service, deployment model and risk. They may include the following:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "div", 42)(265, "article")(266, "span", 9);
      \u0275\u0275text(267, "domain");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "h3");
      \u0275\u0275text(269, "Physical");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "ul")(271, "li");
      \u0275\u0275text(272, "Controlled facility access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "li");
      \u0275\u0275text(274, "Visitor management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "li");
      \u0275\u0275text(276, "Environmental monitoring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "li");
      \u0275\u0275text(278, "Power, cooling and fire controls");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(279, "article")(280, "span", 9);
      \u0275\u0275text(281, "shield_lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(282, "h3");
      \u0275\u0275text(283, "Logical");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "ul")(285, "li");
      \u0275\u0275text(286, "Role-based access controls");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "li");
      \u0275\u0275text(288, "Multi-factor authentication where supported");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "li");
      \u0275\u0275text(290, "Tenant and network segmentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "li");
      \u0275\u0275text(292, "Encryption in transit and at rest where applicable");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(293, "article")(294, "span", 9);
      \u0275\u0275text(295, "monitor_heart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "h3");
      \u0275\u0275text(297, "Operational");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "ul")(299, "li");
      \u0275\u0275text(300, "Monitoring and logging");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "li");
      \u0275\u0275text(302, "Vulnerability and patch management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "li");
      \u0275\u0275text(304, "Incident-response procedures");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(305, "li");
      \u0275\u0275text(306, "Security awareness and access reviews");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(307, "p", 43);
      \u0275\u0275text(308, "Specific controls, certifications, recovery objectives and service levels are governed by the relevant service description, architecture and SLA.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(309, "section", 44)(310, "span", 32);
      \u0275\u0275text(311, "07");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "div")(313, "span", 33);
      \u0275\u0275text(314, "SERVICE DELIVERY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "h2");
      \u0275\u0275text(316, "Sub-processors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(317, "p");
      \u0275\u0275text(318, "The Customer gives XcellHost general authorisation to appoint Sub-processors needed to deliver the services, including infrastructure, software, connectivity, support and specialist service providers.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(319, "ul", 39)(320, "li");
      \u0275\u0275text(321, "XcellHost will require each Sub-processor to protect Customer Personal Data through written obligations appropriate to its processing.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "li");
      \u0275\u0275text(323, "XcellHost remains responsible for its Sub-processors\u2019 performance to the extent required by the applicable agreement and law.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(324, "li");
      \u0275\u0275text(325, "Where contractually required, XcellHost will provide advance notice of a material new Sub-processor and a reasonable opportunity to raise a documented data-protection objection.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(326, "section", 45)(327, "span", 32);
      \u0275\u0275text(328, "08");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(329, "div")(330, "span", 33);
      \u0275\u0275text(331, "DATA LOCATION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "h2");
      \u0275\u0275text(333, "International transfers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "p");
      \u0275\u0275text(335, "Service locations and data-residency commitments are those selected in the service order. XcellHost will not transfer Customer Personal Data contrary to an agreed location restriction or applicable law.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "p");
      \u0275\u0275text(337, "If an authorised transfer requires additional safeguards, XcellHost will use an appropriate lawful transfer mechanism and require the recipient to provide protections consistent with this DPA. Remote support access does not change the primary hosting location unless the parties agree otherwise.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(338, "section", 46)(339, "span", 32);
      \u0275\u0275text(340, "09");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "div")(342, "span", 33);
      \u0275\u0275text(343, "INDIVIDUAL REQUESTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "h2");
      \u0275\u0275text(345, "Data Principal rights");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "p");
      \u0275\u0275text(347, "The Customer is responsible for responding to requests concerning Customer Personal Data. If XcellHost receives a request directly, it will not independently respond on the Customer\u2019s behalf unless legally required. XcellHost will promptly forward the request where the Customer can be identified.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(348, "p");
      \u0275\u0275text(349, "Taking account of the nature of the processing, XcellHost will provide reasonable assistance through available service functionality or support processes for valid requests involving access, correction, completion, updating, erasure, grievance handling or nomination.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(350, "section", 47)(351, "span", 32);
      \u0275\u0275text(352, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(353, "div")(354, "span", 33);
      \u0275\u0275text(355, "ASSURANCE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "h2");
      \u0275\u0275text(357, "Audits and compliance information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "p");
      \u0275\u0275text(359, "On reasonable written request, XcellHost will provide information needed to demonstrate compliance with this DPA. Where available and appropriate, this may include certifications, control summaries, independent assessment reports or responses to security questionnaires.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "p");
      \u0275\u0275text(361, "If that information is insufficient, the Customer may request an audit no more than once in a 12-month period, unless a confirmed breach or regulator requires otherwise. Audits require reasonable advance notice, must protect other customers\u2019 information, avoid service disruption and be conducted during normal business hours at the requesting Customer\u2019s cost.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(362, "section", 48)(363, "span", 32);
      \u0275\u0275text(364, "11");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "div")(366, "span", 33);
      \u0275\u0275text(367, "SERVICE END");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(368, "h2");
      \u0275\u0275text(369, "Return, deletion and liability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "p");
      \u0275\u0275text(371, "At the end of the services, XcellHost will return or delete Customer Personal Data in accordance with the Customer\u2019s documented choice, available service functionality and the applicable agreement. Data may remain temporarily in protected backups until ordinary expiry and may be retained where required by law.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "p");
      \u0275\u0275text(373, "Each party\u2019s liability arising from this DPA is subject to the exclusions and limitations in the agreement governing the services, except where those limitations are prohibited by applicable law. Nothing in this DPA reduces a party\u2019s independent obligations to individuals or regulators.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(374, "section", 49)(375, "span", 32);
      \u0275\u0275text(376, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "div")(378, "span", 33);
      \u0275\u0275text(379, "GET IN TOUCH");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "h2");
      \u0275\u0275text(381, "Data protection contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "p");
      \u0275\u0275text(383, "Send DPA questions, rights-assistance requests and data-protection notices to:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(384, "div", 50)(385, "div")(386, "span", 9);
      \u0275\u0275text(387, "corporate_fare");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "p")(389, "small");
      \u0275\u0275text(390, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "strong");
      \u0275\u0275text(392, "XcellHost Cloud Services Pvt. Ltd.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(393, "a", 28)(394, "span", 9);
      \u0275\u0275text(395, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "p")(397, "small");
      \u0275\u0275text(398, "Data protection email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(399, "strong");
      \u0275\u0275text(400, "dpo@xcellhost.cloud");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(401, "em", 5);
      \u0275\u0275text(402, "\u2197");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(403, "a", 51)(404, "span", 9);
      \u0275\u0275text(405, "call");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(406, "p")(407, "small");
      \u0275\u0275text(408, "Office phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "strong");
      \u0275\u0275text(410, "+91 22 6711 1555");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(411, "em", 5);
      \u0275\u0275text(412, "\u2197");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(413, "div")(414, "span", 9);
      \u0275\u0275text(415, "location_on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "p")(417, "small");
      \u0275\u0275text(418, "Registered office");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(419, "strong");
      \u0275\u0275text(420, "209, Laxmi Plaza, Building No. 9, Laxmi Industrial Estate, Andheri (W), Mumbai 400053, Maharashtra, India");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(421, "footer", 52)(422, "span", 9);
      \u0275\u0275text(423, "description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(424, "p")(425, "strong");
      \u0275\u0275text(426, "Contract note");
      \u0275\u0275elementEnd();
      \u0275\u0275text(427, "This online DPA is a standard form. Enterprise or regulated-service requirements may be documented in a signed addendum or service order.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(428, "a", 53);
      \u0275\u0275text(429, "Contact our team");
      \u0275\u0275elementStart(430, "span", 5);
      \u0275\u0275text(431, "\u2192");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(109);
      \u0275\u0275repeater(ctx.sections);
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.dpa-page[_ngcontent-%COMP%] {\n  --dpa-ink:#071f49;\n  --dpa-blue:#0d63dc;\n  --dpa-line:#d9e5f3;\n  --dpa-muted:#5b6f8d;\n  overflow: clip;\n  background: #f7faff;\n  color: var(--dpa-ink);\n}\n.dpa-shell[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 40px));\n  margin-inline: auto;\n}\n.dpa-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 36px 0 72px;\n  background:\n    radial-gradient(\n      circle at 82% 18%,\n      rgba(75, 164, 255, .28),\n      transparent 28%),\n    radial-gradient(\n      circle at 62% 105%,\n      rgba(255, 133, 31, .14),\n      transparent 32%),\n    linear-gradient(\n      128deg,\n      #061936 0%,\n      #0a3675 55%,\n      #0b60c6 100%);\n  color: #fff;\n}\n.dpa-hero[_ngcontent-%COMP%]:before {\n  position: absolute;\n  inset: 0;\n  content: "";\n  opacity: .12;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .22) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .22) 1px,\n      transparent 1px);\n  background-size: 46px 46px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      #000,\n      transparent 82%);\n  mask-image:\n    linear-gradient(\n      90deg,\n      #000,\n      transparent 82%);\n}\n.dpa-breadcrumb[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 48px;\n  color: #b9d5fa;\n  font-size: 12px;\n}\n.dpa-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n.dpa-breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dpa-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(360px, .7fr);\n  align-items: center;\n  gap: 76px;\n}\n.dpa-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border: 1px solid rgba(255, 255, 255, .22);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .08);\n  font: 750 10px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.dpa-kicker[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.dpa-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 20px 0 18px;\n  color: #fff;\n  font: 850 clamp(48px, 6vw, 76px)/.96 var(--disp);\n  letter-spacing: -.05em;\n}\n.dpa-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #68b8ff;\n}\n.dpa-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 690px;\n  margin: 0;\n  color: #d6e5f9;\n  font-size: 17px;\n  line-height: 1.75;\n}\n.dpa-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px 26px;\n  margin-top: 20px;\n  color: #a9c8ed;\n  font: 650 11px var(--mono);\n  letter-spacing: .04em;\n}\n.dpa-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dpa-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: -15px;\n  content: "/";\n  color: #5794d4;\n}\n.dpa-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 30px;\n}\n.dpa-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  border: 1px solid transparent;\n  border-radius: 9px;\n  font: 750 13px var(--disp);\n  text-decoration: none;\n  cursor: pointer;\n}\n.dpa-button-primary[_ngcontent-%COMP%] {\n  background: #ff7a10;\n  color: #fff;\n  box-shadow: 0 12px 28px rgba(255, 122, 16, .2);\n}\n.dpa-button-secondary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .3);\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n}\n.dpa-button[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.dpa-role-card[_ngcontent-%COMP%] {\n  padding: 26px;\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 20px;\n  background: rgba(4, 23, 52, .44);\n  box-shadow: 0 28px 70px rgba(0, 15, 40, .25);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n}\n.dpa-role-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, .12);\n}\n.dpa-role-heading[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  width: 43px;\n  height: 43px;\n  place-items: center;\n  border-radius: 11px;\n  background: #fff;\n  color: #1164d5;\n}\n.dpa-role-heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n  color: #82b8f5;\n  font: 700 9px var(--mono);\n  letter-spacing: .15em;\n}\n.dpa-role-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font: 750 15px var(--disp);\n}\n.dpa-role[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 4px;\n}\n.dpa-role[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 50%;\n  color: #7fc3ff;\n  font: 750 10px var(--mono);\n}\n.dpa-role[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font: 750 15px var(--disp);\n}\n.dpa-role[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: #b9cdea;\n  font-size: 12px;\n}\n.dpa-role-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #75acf0;\n  font: 650 9px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.dpa-role-line[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 1px;\n  flex: 1;\n  background: rgba(255, 255, 255, .14);\n}\n.dpa-role-line[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.dpa-role-note[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  padding: 13px 14px;\n  border-radius: 9px;\n  background: rgba(71, 157, 255, .1);\n  color: #bcd1ed;\n  font-size: 11px;\n  line-height: 1.55;\n}\n.dpa-summary[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  border-bottom: 1px solid var(--dpa-line);\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(20, 55, 98, .05);\n}\n.dpa-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n.dpa-summary-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 38px 1fr;\n  column-gap: 11px;\n  padding: 24px 20px;\n  border-right: 1px solid #e6edf6;\n}\n.dpa-summary-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #e6edf6;\n}\n.dpa-summary[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  color: #1972df;\n  font-size: 28px;\n}\n.dpa-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font: 750 13px var(--disp);\n}\n.dpa-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #74849b;\n  font-size: 10px;\n}\n.dpa-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 255px minmax(0, 1fr);\n  align-items: start;\n  gap: 54px;\n  padding-top: 60px;\n  padding-bottom: 90px;\n}\n.dpa-toc[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 96px;\n}\n.dpa-toc-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid var(--dpa-line);\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 15px 40px rgba(16, 55, 103, .07);\n}\n.dpa-toc-label[_ngcontent-%COMP%] {\n  display: block;\n  padding: 18px 18px 11px;\n  color: #788aa2;\n  font: 750 9px var(--mono);\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.dpa-toc[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  padding: 0 8px 10px;\n}\n.dpa-toc[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  border-radius: 8px;\n  color: #314967;\n  font: 650 11px var(--disp);\n  text-decoration: none;\n  transition: .18s ease;\n}\n.dpa-toc[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #edf5ff;\n  color: #075bc7;\n  transform: translateX(2px);\n}\n.dpa-toc[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8ca0b9;\n  font: 650 9px var(--mono);\n}\n.dpa-help[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 16px;\n  border-top: 1px solid var(--dpa-line);\n  background: #f3f8ff;\n}\n.dpa-help[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #1470dc;\n  font-size: 20px;\n}\n.dpa-help[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #60728a;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.dpa-help[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: #075ec9;\n  font-weight: 750;\n  text-decoration: none;\n}\n.dpa-document[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.dpa-notice[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 15px;\n  padding: 20px 22px;\n  border: 1px solid #bcd8fa;\n  border-radius: 13px;\n  background: #eaf4ff;\n}\n.dpa-notice[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #1169d7;\n}\n.dpa-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #385474;\n  font-size: 12px;\n  line-height: 1.65;\n}\n.dpa-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n  color: #0a376f;\n  font: 750 13px var(--disp);\n}\n.dpa-section[_ngcontent-%COMP%] {\n  scroll-margin-top: 100px;\n  display: grid;\n  grid-template-columns: 45px minmax(0, 1fr);\n  gap: 22px;\n  padding: 39px 2px 40px;\n  border-bottom: 1px solid var(--dpa-line);\n}\n.dpa-section-number[_ngcontent-%COMP%] {\n  padding-top: 7px;\n  color: #8aa0ba;\n  font: 700 11px var(--mono);\n}\n.dpa-section-kicker[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #0d68d8;\n  font: 750 9px var(--mono);\n  letter-spacing: .16em;\n}\n.dpa-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 17px;\n  color: var(--dpa-ink);\n  font: 800 clamp(25px, 3vw, 33px)/1.15 var(--disp);\n  letter-spacing: -.025em;\n}\n.dpa-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n}\n.dpa-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #465e7c;\n  font-size: 14px;\n  line-height: 1.8;\n}\n.dpa-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.dpa-definitions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin: 0;\n}\n.dpa-definitions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid #dce7f3;\n  border-radius: 10px;\n  background: #fff;\n}\n.dpa-definitions[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #0b3f80;\n  font: 750 12px var(--disp);\n}\n.dpa-definitions[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #60728b;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.dpa-detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin: 20px 0;\n}\n.dpa-detail-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 17px 18px;\n  border-left: 3px solid #1c73de;\n  border-radius: 3px 10px 10px 3px;\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(29, 68, 112, .05);\n}\n.dpa-detail-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #0a4389;\n  font: 750 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.dpa-detail-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.dpa-check-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n  margin: 18px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.dpa-check-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 12px 14px 12px 42px;\n  border: 1px solid #dfe8f3;\n  border-radius: 9px;\n  background: #fff;\n  color: #445d79;\n  font-size: 12px;\n  line-height: 1.55;\n}\n.dpa-check-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 12px;\n  left: 14px;\n  display: grid;\n  width: 18px;\n  height: 18px;\n  place-items: center;\n  border-radius: 50%;\n  content: "\\2713";\n  background: #e3f8ed;\n  color: #138950;\n  font-size: 11px;\n  font-weight: 900;\n}\n.dpa-security-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin: 21px 0;\n}\n.dpa-security-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px solid #dce7f3;\n  border-radius: 12px;\n  background: #fff;\n}\n.dpa-security-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  width: 40px;\n  height: 40px;\n  margin-bottom: 14px;\n  place-items: center;\n  border-radius: 10px;\n  background: #eaf4ff;\n  color: #0d66d5;\n}\n.dpa-security-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #0b376f;\n  font-size: 15px;\n}\n.dpa-security-grid[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 7px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.dpa-security-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 12px;\n  color: #62748c;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.dpa-security-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: .55em;\n  left: 0;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  content: "";\n  background: #ff7a10;\n}\n.dpa-small-note[_ngcontent-%COMP%] {\n  padding: 13px 15px;\n  border-radius: 8px;\n  background: #fff5ec;\n  color: #7a512e !important;\n  font-size: 11px !important;\n}\n.dpa-contact-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1px;\n  overflow: hidden;\n  margin-top: 20px;\n  border: 1px solid #d7e4f2;\n  border-radius: 13px;\n  background: #d7e4f2;\n}\n.dpa-contact-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.dpa-contact-card[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n  padding: 19px;\n  background: #fff;\n  color: inherit;\n  text-decoration: none;\n}\n.dpa-contact-card[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #126bd8;\n  font-size: 21px;\n}\n.dpa-contact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n}\n.dpa-contact-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #7b8da4;\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.dpa-contact-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #15385f;\n  font: 700 11px/1.55 var(--disp);\n  overflow-wrap: anywhere;\n}\n.dpa-contact-card[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #126bd8;\n  font-style: normal;\n}\n.dpa-document-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px 1fr auto;\n  align-items: center;\n  gap: 13px;\n  margin-top: 30px;\n  padding: 22px;\n  border-radius: 13px;\n  background: #082c5b;\n  color: #fff;\n}\n.dpa-document-footer[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #6fb8ff;\n}\n.dpa-document-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #c2d3e9;\n  font-size: 10px;\n  line-height: 1.55;\n}\n.dpa-document-footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  font: 750 12px var(--disp);\n}\n.dpa-document-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  color: #fff;\n  font: 750 11px var(--disp);\n  text-decoration: none;\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .dpa-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 38px;\n  }\n  .dpa-role-card[_ngcontent-%COMP%] {\n    max-width: 560px;\n  }\n  .dpa-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .dpa-summary-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    border-left: 1px solid #e6edf6;\n  }\n  .dpa-summary-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(-n+2) {\n    border-bottom: 1px solid #e6edf6;\n  }\n  .dpa-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n  .dpa-toc[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .dpa-toc[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .dpa-help[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .dpa-shell[_ngcontent-%COMP%] {\n    width: min(100% - 28px, 1180px);\n  }\n  .dpa-hero[_ngcontent-%COMP%] {\n    padding: 25px 0 50px;\n  }\n  .dpa-breadcrumb[_ngcontent-%COMP%] {\n    margin-bottom: 34px;\n  }\n  .dpa-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .dpa-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .dpa-meta[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 6px;\n  }\n  .dpa-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%]:before {\n    display: none;\n  }\n  .dpa-actions[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  .dpa-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .dpa-role-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .dpa-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dpa-summary-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #e6edf6 !important;\n    border-left: 1px solid #e6edf6;\n  }\n  .dpa-layout[_ngcontent-%COMP%] {\n    padding-top: 34px;\n    padding-bottom: 58px;\n  }\n  .dpa-toc[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dpa-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 5px;\n    padding: 31px 1px;\n  }\n  .dpa-section-number[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .dpa-definitions[_ngcontent-%COMP%], \n   .dpa-detail-grid[_ngcontent-%COMP%], \n   .dpa-security-grid[_ngcontent-%COMP%], \n   .dpa-contact-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dpa-document-footer[_ngcontent-%COMP%] {\n    grid-template-columns: 28px 1fr;\n  }\n  .dpa-document-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    grid-column: 2;\n    margin-top: 5px;\n  }\n}\n@media print {\n  .dpa-hero[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    background: #fff !important;\n    color: #000;\n  }\n  .dpa-hero[_ngcontent-%COMP%]:before, \n   .dpa-breadcrumb[_ngcontent-%COMP%], \n   .dpa-role-card[_ngcontent-%COMP%], \n   .dpa-actions[_ngcontent-%COMP%], \n   .dpa-summary[_ngcontent-%COMP%], \n   .dpa-toc[_ngcontent-%COMP%], \n   .dpa-document-footer[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .dpa-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .dpa-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #071f49;\n  }\n  .dpa-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n   .dpa-meta[_ngcontent-%COMP%] {\n    color: #40536b;\n  }\n  .dpa-hero-grid[_ngcontent-%COMP%], \n   .dpa-layout[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .dpa-layout[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .dpa-page[_ngcontent-%COMP%] {\n    background: #fff;\n  }\n  .dpa-section[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    padding: 20px 0;\n  }\n  .dpa-notice[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .dpa-security-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], \n   .dpa-definitions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n   .dpa-detail-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n   .dpa-check-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=data-processing-agreement.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataProcessingAgreementPage, [{
    type: Component,
    args: [{ selector: "xh-data-processing-agreement-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="dpa-page">\r
  <section class="dpa-hero" aria-labelledby="dpa-title">\r
    <div class="dpa-shell">\r
      <nav class="dpa-breadcrumb" aria-label="Breadcrumb">\r
        <a routerLink="/">Home</a><span aria-hidden="true">/</span><span>Legal</span><span aria-hidden="true">/</span><span>Data Processing Agreement</span>\r
      </nav>\r
\r
      <div class="dpa-hero-grid">\r
        <div class="dpa-hero-copy">\r
          <span class="dpa-kicker"><span class="material-symbols-outlined" aria-hidden="true">verified_user</span>Legal document</span>\r
          <h1 id="dpa-title">Data Processing<br><span>Agreement</span></h1>\r
          <p>This agreement sets out how XcellHost processes and protects personal data on a customer&rsquo;s behalf while delivering cloud, hosting, security and managed services.</p>\r
          <div class="dpa-meta"><span>Version 1.0</span><span>Last updated 12 September 2026</span></div>\r
          <div class="dpa-actions">\r
            <a class="dpa-button dpa-button-primary" href="#introduction">Read agreement<span aria-hidden="true">&darr;</span></a>\r
            <button class="dpa-button dpa-button-secondary" type="button" (click)="printAgreement()"><span class="material-symbols-outlined" aria-hidden="true">print</span>Print or save PDF</button>\r
          </div>\r
        </div>\r
\r
        <aside class="dpa-role-card" aria-label="Agreement roles">\r
          <div class="dpa-role-heading"><span class="material-symbols-outlined" aria-hidden="true">handshake</span><div><small>THE WORKING RELATIONSHIP</small><strong>Clear roles. Shared responsibility.</strong></div></div>\r
          <div class="dpa-role"><span>01</span><div><strong>Customer</strong><p>Controller or Data Fiduciary</p></div></div>\r
          <div class="dpa-role-line" aria-hidden="true"><i></i><em>documented instructions</em><i></i></div>\r
          <div class="dpa-role"><span>02</span><div><strong>XcellHost</strong><p>Processor or Data Processor</p></div></div>\r
          <p class="dpa-role-note">The applicable service order defines the selected services, locations and any service-specific processing details.</p>\r
        </aside>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="dpa-summary" aria-label="Agreement summary">\r
    <div class="dpa-shell dpa-summary-grid">\r
      <div><span class="material-symbols-outlined" aria-hidden="true">gavel</span><strong>DPDPA aligned</strong><small>Indian data protection framework</small></div>\r
      <div><span class="material-symbols-outlined" aria-hidden="true">policy</span><strong>Instruction based</strong><small>Processing for contracted services</small></div>\r
      <div><span class="material-symbols-outlined" aria-hidden="true">encrypted</span><strong>Security focused</strong><small>Technical and organisational controls</small></div>\r
      <div><span class="material-symbols-outlined" aria-hidden="true">support_agent</span><strong>Rights assistance</strong><small>Support for valid customer requests</small></div>\r
    </div>\r
  </section>\r
\r
  <div class="dpa-shell dpa-layout">\r
    <aside class="dpa-toc" aria-label="Agreement sections">\r
      <div class="dpa-toc-card">\r
        <span class="dpa-toc-label">On this page</span>\r
        <nav>\r
          @for (section of sections; track section.id) {\r
            <a [href]="'#' + section.id"><span>{{ section.number }}</span>{{ section.title }}</a>\r
          }\r
        </nav>\r
        <div class="dpa-help"><span class="material-symbols-outlined" aria-hidden="true">contact_support</span><p>Questions about this agreement?<a href="mailto:dpo@xcellhost.cloud">dpo&#64;xcellhost.cloud</a></p></div>\r
      </div>\r
    </aside>\r
\r
    <article class="dpa-document">\r
      <div class="dpa-notice"><span class="material-symbols-outlined" aria-hidden="true">info</span><p><strong>How this agreement applies</strong>This DPA forms part of the agreement governing the services purchased by the Customer. If a signed agreement or service order contains a more specific data-processing term, that term applies to the extent of the inconsistency.</p></div>\r
\r
      <section id="introduction" class="dpa-section">\r
        <span class="dpa-section-number">01</span>\r
        <div><span class="dpa-section-kicker">FOUNDATION</span><h2>Introduction</h2>\r
          <p>This Data Processing Agreement (&ldquo;DPA&rdquo;) supplements the applicable services agreement, order form or statement of work between XcellHost Cloud Services Pvt. Ltd. (&ldquo;XcellHost&rdquo;) and the customer identified in that agreement (&ldquo;Customer&rdquo;).</p>\r
          <p>It governs XcellHost&rsquo;s processing of personal data on behalf of the Customer in connection with the contracted services. The parties intend this DPA to support compliance with the Digital Personal Data Protection Act, 2023 and applicable rules, and with other data-protection requirements expressly agreed for the services.</p>\r
        </div>\r
      </section>\r
\r
      <section id="definitions" class="dpa-section">\r
        <span class="dpa-section-number">02</span>\r
        <div><span class="dpa-section-kicker">SHARED LANGUAGE</span><h2>Definitions</h2>\r
          <dl class="dpa-definitions">\r
            <div><dt>Personal Data</dt><dd>Digital data about an individual who is identifiable by or in relation to that data.</dd></div>\r
            <div><dt>Processing</dt><dd>Any operation performed on Personal Data, including collection, recording, storage, use, retrieval, disclosure, transfer or deletion.</dd></div>\r
            <div><dt>Customer</dt><dd>The party that determines why and how Customer Personal Data is processed, acting as Controller or Data Fiduciary as applicable.</dd></div>\r
            <div><dt>XcellHost</dt><dd>The party processing Customer Personal Data on documented instructions, acting as Processor or Data Processor as applicable.</dd></div>\r
            <div><dt>Sub-processor</dt><dd>A third party appointed by XcellHost to process Customer Personal Data for part of the services.</dd></div>\r
            <div><dt>Personal Data Breach</dt><dd>A confirmed breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to Customer Personal Data.</dd></div>\r
          </dl>\r
        </div>\r
      </section>\r
\r
      <section id="scope" class="dpa-section">\r
        <span class="dpa-section-number">03</span>\r
        <div><span class="dpa-section-kicker">PROCESSING DETAILS</span><h2>Scope and nature of processing</h2>\r
          <p>XcellHost processes Customer Personal Data only as needed to deliver, secure, monitor, maintain and support the contracted services; manage the Customer account; prevent abuse; and meet applicable legal obligations.</p>\r
          <div class="dpa-detail-grid">\r
            <div><span>Purpose</span><p>Provisioning and operating the selected cloud, hosting, cybersecurity, backup, communications or managed services.</p></div>\r
            <div><span>Duration</span><p>For the service term and any limited period required for return, deletion, backup expiry or lawful retention.</p></div>\r
            <div><span>Data subjects</span><p>Customer personnel, authorised users, end customers and other individuals whose data the Customer places in the services.</p></div>\r
            <div><span>Data categories</span><p>Account and contact data, service content, credentials, logs, support records and other data determined by the Customer.</p></div>\r
          </div>\r
          <p>XcellHost does not use Customer Personal Data for independent advertising or sell it. Additional processing details may be set out in the applicable service order.</p>\r
        </div>\r
      </section>\r
\r
      <section id="customer-obligations" class="dpa-section">\r
        <span class="dpa-section-number">04</span>\r
        <div><span class="dpa-section-kicker">CUSTOMER RESPONSIBILITY</span><h2>Customer obligations</h2>\r
          <p>The Customer is responsible for the lawfulness, quality and accuracy of Customer Personal Data and for its use of the services. The Customer will:</p>\r
          <ul class="dpa-check-list">\r
            <li>provide lawful, complete and documented processing instructions;</li>\r
            <li>give required notices and obtain valid consent or another lawful basis where applicable;</li>\r
            <li>configure its accounts, access permissions, endpoints and applications securely;</li>\r
            <li>avoid uploading data prohibited by the service agreement or not needed for the stated purpose; and</li>\r
            <li>respond to Data Principal requests and regulatory enquiries for which it is responsible.</li>\r
          </ul>\r
        </div>\r
      </section>\r
\r
      <section id="processor-obligations" class="dpa-section">\r
        <span class="dpa-section-number">05</span>\r
        <div><span class="dpa-section-kicker">XCELLHOST RESPONSIBILITY</span><h2>XcellHost obligations</h2>\r
          <p>XcellHost will:</p>\r
          <ul class="dpa-check-list">\r
            <li>process Customer Personal Data only on documented instructions, unless processing is required by applicable law;</li>\r
            <li>ensure personnel authorised to process the data are subject to confidentiality obligations;</li>\r
            <li>maintain appropriate technical and organisational safeguards proportionate to the service and risk;</li>\r
            <li>provide reasonable assistance with security, impact assessments, lawful regulatory consultations and Data Principal requests;</li>\r
            <li>notify the Customer without undue delay after confirming a Personal Data Breach affecting Customer Personal Data and provide available information needed for the Customer&rsquo;s response; and</li>\r
            <li>maintain processing records where required by applicable law.</li>\r
          </ul>\r
        </div>\r
      </section>\r
\r
      <section id="security" class="dpa-section dpa-security-section">\r
        <span class="dpa-section-number">06</span>\r
        <div><span class="dpa-section-kicker">SAFEGUARDS</span><h2>Technical and organisational security measures</h2>\r
          <p>Controls are selected according to the contracted service, deployment model and risk. They may include the following:</p>\r
          <div class="dpa-security-grid">\r
            <article><span class="material-symbols-outlined" aria-hidden="true">domain</span><h3>Physical</h3><ul><li>Controlled facility access</li><li>Visitor management</li><li>Environmental monitoring</li><li>Power, cooling and fire controls</li></ul></article>\r
            <article><span class="material-symbols-outlined" aria-hidden="true">shield_lock</span><h3>Logical</h3><ul><li>Role-based access controls</li><li>Multi-factor authentication where supported</li><li>Tenant and network segmentation</li><li>Encryption in transit and at rest where applicable</li></ul></article>\r
            <article><span class="material-symbols-outlined" aria-hidden="true">monitor_heart</span><h3>Operational</h3><ul><li>Monitoring and logging</li><li>Vulnerability and patch management</li><li>Incident-response procedures</li><li>Security awareness and access reviews</li></ul></article>\r
          </div>\r
          <p class="dpa-small-note">Specific controls, certifications, recovery objectives and service levels are governed by the relevant service description, architecture and SLA.</p>\r
        </div>\r
      </section>\r
\r
      <section id="subprocessors" class="dpa-section">\r
        <span class="dpa-section-number">07</span>\r
        <div><span class="dpa-section-kicker">SERVICE DELIVERY</span><h2>Sub-processors</h2>\r
          <p>The Customer gives XcellHost general authorisation to appoint Sub-processors needed to deliver the services, including infrastructure, software, connectivity, support and specialist service providers.</p>\r
          <ul class="dpa-check-list">\r
            <li>XcellHost will require each Sub-processor to protect Customer Personal Data through written obligations appropriate to its processing.</li>\r
            <li>XcellHost remains responsible for its Sub-processors&rsquo; performance to the extent required by the applicable agreement and law.</li>\r
            <li>Where contractually required, XcellHost will provide advance notice of a material new Sub-processor and a reasonable opportunity to raise a documented data-protection objection.</li>\r
          </ul>\r
        </div>\r
      </section>\r
\r
      <section id="transfers" class="dpa-section">\r
        <span class="dpa-section-number">08</span>\r
        <div><span class="dpa-section-kicker">DATA LOCATION</span><h2>International transfers</h2>\r
          <p>Service locations and data-residency commitments are those selected in the service order. XcellHost will not transfer Customer Personal Data contrary to an agreed location restriction or applicable law.</p>\r
          <p>If an authorised transfer requires additional safeguards, XcellHost will use an appropriate lawful transfer mechanism and require the recipient to provide protections consistent with this DPA. Remote support access does not change the primary hosting location unless the parties agree otherwise.</p>\r
        </div>\r
      </section>\r
\r
      <section id="rights" class="dpa-section">\r
        <span class="dpa-section-number">09</span>\r
        <div><span class="dpa-section-kicker">INDIVIDUAL REQUESTS</span><h2>Data Principal rights</h2>\r
          <p>The Customer is responsible for responding to requests concerning Customer Personal Data. If XcellHost receives a request directly, it will not independently respond on the Customer&rsquo;s behalf unless legally required. XcellHost will promptly forward the request where the Customer can be identified.</p>\r
          <p>Taking account of the nature of the processing, XcellHost will provide reasonable assistance through available service functionality or support processes for valid requests involving access, correction, completion, updating, erasure, grievance handling or nomination.</p>\r
        </div>\r
      </section>\r
\r
      <section id="audits" class="dpa-section">\r
        <span class="dpa-section-number">10</span>\r
        <div><span class="dpa-section-kicker">ASSURANCE</span><h2>Audits and compliance information</h2>\r
          <p>On reasonable written request, XcellHost will provide information needed to demonstrate compliance with this DPA. Where available and appropriate, this may include certifications, control summaries, independent assessment reports or responses to security questionnaires.</p>\r
          <p>If that information is insufficient, the Customer may request an audit no more than once in a 12-month period, unless a confirmed breach or regulator requires otherwise. Audits require reasonable advance notice, must protect other customers&rsquo; information, avoid service disruption and be conducted during normal business hours at the requesting Customer&rsquo;s cost.</p>\r
        </div>\r
      </section>\r
\r
      <section id="liability" class="dpa-section">\r
        <span class="dpa-section-number">11</span>\r
        <div><span class="dpa-section-kicker">SERVICE END</span><h2>Return, deletion and liability</h2>\r
          <p>At the end of the services, XcellHost will return or delete Customer Personal Data in accordance with the Customer&rsquo;s documented choice, available service functionality and the applicable agreement. Data may remain temporarily in protected backups until ordinary expiry and may be retained where required by law.</p>\r
          <p>Each party&rsquo;s liability arising from this DPA is subject to the exclusions and limitations in the agreement governing the services, except where those limitations are prohibited by applicable law. Nothing in this DPA reduces a party&rsquo;s independent obligations to individuals or regulators.</p>\r
        </div>\r
      </section>\r
\r
      <section id="contact" class="dpa-section dpa-contact-section">\r
        <span class="dpa-section-number">12</span>\r
        <div><span class="dpa-section-kicker">GET IN TOUCH</span><h2>Data protection contact</h2>\r
          <p>Send DPA questions, rights-assistance requests and data-protection notices to:</p>\r
          <div class="dpa-contact-card">\r
            <div><span class="material-symbols-outlined" aria-hidden="true">corporate_fare</span><p><small>Company</small><strong>XcellHost Cloud Services Pvt. Ltd.</strong></p></div>\r
            <a href="mailto:dpo@xcellhost.cloud"><span class="material-symbols-outlined" aria-hidden="true">mail</span><p><small>Data protection email</small><strong>dpo&#64;xcellhost.cloud</strong></p><em aria-hidden="true">&nearr;</em></a>\r
            <a href="tel:+912267111555"><span class="material-symbols-outlined" aria-hidden="true">call</span><p><small>Office phone</small><strong>+91 22 6711 1555</strong></p><em aria-hidden="true">&nearr;</em></a>\r
            <div><span class="material-symbols-outlined" aria-hidden="true">location_on</span><p><small>Registered office</small><strong>209, Laxmi Plaza, Building No. 9, Laxmi Industrial Estate, Andheri (W), Mumbai 400053, Maharashtra, India</strong></p></div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <footer class="dpa-document-footer"><span class="material-symbols-outlined" aria-hidden="true">description</span><p><strong>Contract note</strong>This online DPA is a standard form. Enterprise or regulated-service requirements may be documented in a signed addendum or service order.</p><a routerLink="/contact">Contact our team<span aria-hidden="true">&rarr;</span></a></footer>\r
    </article>\r
  </div>\r
</main>\r
`, styles: ['/* src/app/pages/data-processing-agreement.page.css */\n:host {\n  display: contents;\n}\n.dpa-page {\n  --dpa-ink:#071f49;\n  --dpa-blue:#0d63dc;\n  --dpa-line:#d9e5f3;\n  --dpa-muted:#5b6f8d;\n  overflow: clip;\n  background: #f7faff;\n  color: var(--dpa-ink);\n}\n.dpa-shell {\n  width: min(1180px, calc(100% - 40px));\n  margin-inline: auto;\n}\n.dpa-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 36px 0 72px;\n  background:\n    radial-gradient(\n      circle at 82% 18%,\n      rgba(75, 164, 255, .28),\n      transparent 28%),\n    radial-gradient(\n      circle at 62% 105%,\n      rgba(255, 133, 31, .14),\n      transparent 32%),\n    linear-gradient(\n      128deg,\n      #061936 0%,\n      #0a3675 55%,\n      #0b60c6 100%);\n  color: #fff;\n}\n.dpa-hero:before {\n  position: absolute;\n  inset: 0;\n  content: "";\n  opacity: .12;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .22) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .22) 1px,\n      transparent 1px);\n  background-size: 46px 46px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      #000,\n      transparent 82%);\n  mask-image:\n    linear-gradient(\n      90deg,\n      #000,\n      transparent 82%);\n}\n.dpa-breadcrumb {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 48px;\n  color: #b9d5fa;\n  font-size: 12px;\n}\n.dpa-breadcrumb a {\n  color: #fff;\n  text-decoration: none;\n}\n.dpa-breadcrumb span:last-child {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dpa-hero-grid {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(360px, .7fr);\n  align-items: center;\n  gap: 76px;\n}\n.dpa-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 12px;\n  border: 1px solid rgba(255, 255, 255, .22);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .08);\n  font: 750 10px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.dpa-kicker .material-symbols-outlined {\n  font-size: 16px;\n}\n.dpa-hero h1 {\n  margin: 20px 0 18px;\n  color: #fff;\n  font: 850 clamp(48px, 6vw, 76px)/.96 var(--disp);\n  letter-spacing: -.05em;\n}\n.dpa-hero h1 span {\n  color: #68b8ff;\n}\n.dpa-hero-copy > p {\n  max-width: 690px;\n  margin: 0;\n  color: #d6e5f9;\n  font-size: 17px;\n  line-height: 1.75;\n}\n.dpa-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px 26px;\n  margin-top: 20px;\n  color: #a9c8ed;\n  font: 650 11px var(--mono);\n  letter-spacing: .04em;\n}\n.dpa-meta span + span {\n  position: relative;\n}\n.dpa-meta span + span:before {\n  position: absolute;\n  left: -15px;\n  content: "/";\n  color: #5794d4;\n}\n.dpa-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 30px;\n}\n.dpa-button {\n  display: inline-flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  border: 1px solid transparent;\n  border-radius: 9px;\n  font: 750 13px var(--disp);\n  text-decoration: none;\n  cursor: pointer;\n}\n.dpa-button-primary {\n  background: #ff7a10;\n  color: #fff;\n  box-shadow: 0 12px 28px rgba(255, 122, 16, .2);\n}\n.dpa-button-secondary {\n  border-color: rgba(255, 255, 255, .3);\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n}\n.dpa-button .material-symbols-outlined {\n  font-size: 18px;\n}\n.dpa-role-card {\n  padding: 26px;\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 20px;\n  background: rgba(4, 23, 52, .44);\n  box-shadow: 0 28px 70px rgba(0, 15, 40, .25);\n  -webkit-backdrop-filter: blur(15px);\n  backdrop-filter: blur(15px);\n}\n.dpa-role-heading {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid rgba(255, 255, 255, .12);\n}\n.dpa-role-heading > .material-symbols-outlined {\n  display: grid;\n  width: 43px;\n  height: 43px;\n  place-items: center;\n  border-radius: 11px;\n  background: #fff;\n  color: #1164d5;\n}\n.dpa-role-heading small {\n  display: block;\n  margin-bottom: 3px;\n  color: #82b8f5;\n  font: 700 9px var(--mono);\n  letter-spacing: .15em;\n}\n.dpa-role-heading strong {\n  font: 750 15px var(--disp);\n}\n.dpa-role {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 20px 4px;\n}\n.dpa-role > span {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .2);\n  border-radius: 50%;\n  color: #7fc3ff;\n  font: 750 10px var(--mono);\n}\n.dpa-role strong {\n  display: block;\n  font: 750 15px var(--disp);\n}\n.dpa-role p {\n  margin: 3px 0 0;\n  color: #b9cdea;\n  font-size: 12px;\n}\n.dpa-role-line {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #75acf0;\n  font: 650 9px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.dpa-role-line i {\n  height: 1px;\n  flex: 1;\n  background: rgba(255, 255, 255, .14);\n}\n.dpa-role-line em {\n  font-style: normal;\n}\n.dpa-role-note {\n  margin: 2px 0 0;\n  padding: 13px 14px;\n  border-radius: 9px;\n  background: rgba(71, 157, 255, .1);\n  color: #bcd1ed;\n  font-size: 11px;\n  line-height: 1.55;\n}\n.dpa-summary {\n  position: relative;\n  z-index: 2;\n  border-bottom: 1px solid var(--dpa-line);\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(20, 55, 98, .05);\n}\n.dpa-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n}\n.dpa-summary-grid > div {\n  display: grid;\n  grid-template-columns: 38px 1fr;\n  column-gap: 11px;\n  padding: 24px 20px;\n  border-right: 1px solid #e6edf6;\n}\n.dpa-summary-grid > div:first-child {\n  border-left: 1px solid #e6edf6;\n}\n.dpa-summary .material-symbols-outlined {\n  grid-row: 1/3;\n  color: #1972df;\n  font-size: 28px;\n}\n.dpa-summary strong {\n  font: 750 13px var(--disp);\n}\n.dpa-summary small {\n  margin-top: 4px;\n  color: #74849b;\n  font-size: 10px;\n}\n.dpa-layout {\n  display: grid;\n  grid-template-columns: 255px minmax(0, 1fr);\n  align-items: start;\n  gap: 54px;\n  padding-top: 60px;\n  padding-bottom: 90px;\n}\n.dpa-toc {\n  position: sticky;\n  top: 96px;\n}\n.dpa-toc-card {\n  overflow: hidden;\n  border: 1px solid var(--dpa-line);\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 15px 40px rgba(16, 55, 103, .07);\n}\n.dpa-toc-label {\n  display: block;\n  padding: 18px 18px 11px;\n  color: #788aa2;\n  font: 750 9px var(--mono);\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.dpa-toc nav {\n  padding: 0 8px 10px;\n}\n.dpa-toc nav a {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 10px;\n  border-radius: 8px;\n  color: #314967;\n  font: 650 11px var(--disp);\n  text-decoration: none;\n  transition: .18s ease;\n}\n.dpa-toc nav a:hover {\n  background: #edf5ff;\n  color: #075bc7;\n  transform: translateX(2px);\n}\n.dpa-toc nav span {\n  color: #8ca0b9;\n  font: 650 9px var(--mono);\n}\n.dpa-help {\n  display: flex;\n  gap: 10px;\n  padding: 16px;\n  border-top: 1px solid var(--dpa-line);\n  background: #f3f8ff;\n}\n.dpa-help > .material-symbols-outlined {\n  color: #1470dc;\n  font-size: 20px;\n}\n.dpa-help p {\n  margin: 0;\n  color: #60728a;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.dpa-help a {\n  display: block;\n  color: #075ec9;\n  font-weight: 750;\n  text-decoration: none;\n}\n.dpa-document {\n  min-width: 0;\n}\n.dpa-notice {\n  display: flex;\n  gap: 14px;\n  margin-bottom: 15px;\n  padding: 20px 22px;\n  border: 1px solid #bcd8fa;\n  border-radius: 13px;\n  background: #eaf4ff;\n}\n.dpa-notice > .material-symbols-outlined {\n  color: #1169d7;\n}\n.dpa-notice p {\n  margin: 0;\n  color: #385474;\n  font-size: 12px;\n  line-height: 1.65;\n}\n.dpa-notice strong {\n  display: block;\n  margin-bottom: 3px;\n  color: #0a376f;\n  font: 750 13px var(--disp);\n}\n.dpa-section {\n  scroll-margin-top: 100px;\n  display: grid;\n  grid-template-columns: 45px minmax(0, 1fr);\n  gap: 22px;\n  padding: 39px 2px 40px;\n  border-bottom: 1px solid var(--dpa-line);\n}\n.dpa-section-number {\n  padding-top: 7px;\n  color: #8aa0ba;\n  font: 700 11px var(--mono);\n}\n.dpa-section-kicker {\n  display: block;\n  margin-bottom: 8px;\n  color: #0d68d8;\n  font: 750 9px var(--mono);\n  letter-spacing: .16em;\n}\n.dpa-section h2 {\n  margin: 0 0 17px;\n  color: var(--dpa-ink);\n  font: 800 clamp(25px, 3vw, 33px)/1.15 var(--disp);\n  letter-spacing: -.025em;\n}\n.dpa-section h3 {\n  font-family: var(--disp);\n}\n.dpa-section p {\n  margin: 0 0 14px;\n  color: #465e7c;\n  font-size: 14px;\n  line-height: 1.8;\n}\n.dpa-section p:last-child {\n  margin-bottom: 0;\n}\n.dpa-definitions {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin: 0;\n}\n.dpa-definitions > div {\n  padding: 16px;\n  border: 1px solid #dce7f3;\n  border-radius: 10px;\n  background: #fff;\n}\n.dpa-definitions dt {\n  margin-bottom: 5px;\n  color: #0b3f80;\n  font: 750 12px var(--disp);\n}\n.dpa-definitions dd {\n  margin: 0;\n  color: #60728b;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.dpa-detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin: 20px 0;\n}\n.dpa-detail-grid > div {\n  padding: 17px 18px;\n  border-left: 3px solid #1c73de;\n  border-radius: 3px 10px 10px 3px;\n  background: #fff;\n  box-shadow: 0 6px 18px rgba(29, 68, 112, .05);\n}\n.dpa-detail-grid span {\n  display: block;\n  margin-bottom: 5px;\n  color: #0a4389;\n  font: 750 10px var(--mono);\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.dpa-detail-grid p {\n  margin: 0;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.dpa-check-list {\n  display: grid;\n  gap: 9px;\n  margin: 18px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.dpa-check-list li {\n  position: relative;\n  padding: 12px 14px 12px 42px;\n  border: 1px solid #dfe8f3;\n  border-radius: 9px;\n  background: #fff;\n  color: #445d79;\n  font-size: 12px;\n  line-height: 1.55;\n}\n.dpa-check-list li:before {\n  position: absolute;\n  top: 12px;\n  left: 14px;\n  display: grid;\n  width: 18px;\n  height: 18px;\n  place-items: center;\n  border-radius: 50%;\n  content: "\\2713";\n  background: #e3f8ed;\n  color: #138950;\n  font-size: 11px;\n  font-weight: 900;\n}\n.dpa-security-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin: 21px 0;\n}\n.dpa-security-grid article {\n  padding: 20px;\n  border: 1px solid #dce7f3;\n  border-radius: 12px;\n  background: #fff;\n}\n.dpa-security-grid article > .material-symbols-outlined {\n  display: grid;\n  width: 40px;\n  height: 40px;\n  margin-bottom: 14px;\n  place-items: center;\n  border-radius: 10px;\n  background: #eaf4ff;\n  color: #0d66d5;\n}\n.dpa-security-grid h3 {\n  margin: 0 0 12px;\n  color: #0b376f;\n  font-size: 15px;\n}\n.dpa-security-grid ul {\n  display: grid;\n  gap: 7px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.dpa-security-grid li {\n  position: relative;\n  padding-left: 12px;\n  color: #62748c;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.dpa-security-grid li:before {\n  position: absolute;\n  top: .55em;\n  left: 0;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  content: "";\n  background: #ff7a10;\n}\n.dpa-small-note {\n  padding: 13px 15px;\n  border-radius: 8px;\n  background: #fff5ec;\n  color: #7a512e !important;\n  font-size: 11px !important;\n}\n.dpa-contact-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1px;\n  overflow: hidden;\n  margin-top: 20px;\n  border: 1px solid #d7e4f2;\n  border-radius: 13px;\n  background: #d7e4f2;\n}\n.dpa-contact-card > div,\n.dpa-contact-card > a {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n  padding: 19px;\n  background: #fff;\n  color: inherit;\n  text-decoration: none;\n}\n.dpa-contact-card .material-symbols-outlined {\n  color: #126bd8;\n  font-size: 21px;\n}\n.dpa-contact-card p {\n  min-width: 0;\n  margin: 0;\n}\n.dpa-contact-card small {\n  display: block;\n  margin-bottom: 4px;\n  color: #7b8da4;\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.dpa-contact-card strong {\n  display: block;\n  color: #15385f;\n  font: 700 11px/1.55 var(--disp);\n  overflow-wrap: anywhere;\n}\n.dpa-contact-card em {\n  margin-left: auto;\n  color: #126bd8;\n  font-style: normal;\n}\n.dpa-document-footer {\n  display: grid;\n  grid-template-columns: 32px 1fr auto;\n  align-items: center;\n  gap: 13px;\n  margin-top: 30px;\n  padding: 22px;\n  border-radius: 13px;\n  background: #082c5b;\n  color: #fff;\n}\n.dpa-document-footer > .material-symbols-outlined {\n  color: #6fb8ff;\n}\n.dpa-document-footer p {\n  margin: 0;\n  color: #c2d3e9;\n  font-size: 10px;\n  line-height: 1.55;\n}\n.dpa-document-footer strong {\n  display: block;\n  color: #fff;\n  font: 750 12px var(--disp);\n}\n.dpa-document-footer a {\n  display: flex;\n  gap: 8px;\n  color: #fff;\n  font: 750 11px var(--disp);\n  text-decoration: none;\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .dpa-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 38px;\n  }\n  .dpa-role-card {\n    max-width: 560px;\n  }\n  .dpa-summary-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .dpa-summary-grid > div:nth-child(3) {\n    border-left: 1px solid #e6edf6;\n  }\n  .dpa-summary-grid > div:nth-child(-n+2) {\n    border-bottom: 1px solid #e6edf6;\n  }\n  .dpa-layout {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n  .dpa-toc {\n    position: static;\n  }\n  .dpa-toc nav {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .dpa-help {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .dpa-shell {\n    width: min(100% - 28px, 1180px);\n  }\n  .dpa-hero {\n    padding: 25px 0 50px;\n  }\n  .dpa-breadcrumb {\n    margin-bottom: 34px;\n  }\n  .dpa-hero h1 {\n    font-size: 48px;\n  }\n  .dpa-hero-copy > p {\n    font-size: 14px;\n  }\n  .dpa-meta {\n    display: grid;\n    gap: 6px;\n  }\n  .dpa-meta span + span:before {\n    display: none;\n  }\n  .dpa-actions {\n    display: grid;\n  }\n  .dpa-button {\n    width: 100%;\n  }\n  .dpa-role-card {\n    padding: 20px;\n  }\n  .dpa-summary-grid {\n    grid-template-columns: 1fr;\n  }\n  .dpa-summary-grid > div {\n    border-bottom: 1px solid #e6edf6 !important;\n    border-left: 1px solid #e6edf6;\n  }\n  .dpa-layout {\n    padding-top: 34px;\n    padding-bottom: 58px;\n  }\n  .dpa-toc nav {\n    grid-template-columns: 1fr;\n  }\n  .dpa-section {\n    grid-template-columns: 1fr;\n    gap: 5px;\n    padding: 31px 1px;\n  }\n  .dpa-section-number {\n    padding: 0;\n  }\n  .dpa-definitions,\n  .dpa-detail-grid,\n  .dpa-security-grid,\n  .dpa-contact-card {\n    grid-template-columns: 1fr;\n  }\n  .dpa-document-footer {\n    grid-template-columns: 28px 1fr;\n  }\n  .dpa-document-footer a {\n    grid-column: 2;\n    margin-top: 5px;\n  }\n}\n@media print {\n  .dpa-hero {\n    padding: 20px 0;\n    background: #fff !important;\n    color: #000;\n  }\n  .dpa-hero:before,\n  .dpa-breadcrumb,\n  .dpa-role-card,\n  .dpa-actions,\n  .dpa-summary,\n  .dpa-toc,\n  .dpa-document-footer {\n    display: none !important;\n  }\n  .dpa-hero h1,\n  .dpa-hero h1 span {\n    color: #071f49;\n  }\n  .dpa-hero-copy > p,\n  .dpa-meta {\n    color: #40536b;\n  }\n  .dpa-hero-grid,\n  .dpa-layout {\n    display: block;\n  }\n  .dpa-layout {\n    padding: 0;\n  }\n  .dpa-page {\n    background: #fff;\n  }\n  .dpa-section {\n    break-inside: avoid;\n    padding: 20px 0;\n  }\n  .dpa-notice {\n    margin-top: 15px;\n  }\n  .dpa-security-grid article,\n  .dpa-definitions > div,\n  .dpa-detail-grid > div,\n  .dpa-check-list li {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=data-processing-agreement.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataProcessingAgreementPage, { className: "DataProcessingAgreementPage", filePath: "src/app/pages/data-processing-agreement.page.ts", lineNumber: 21 });
})();
export {
  DataProcessingAgreementPage
};
//# sourceMappingURL=chunk-UD3333VA.js.map
