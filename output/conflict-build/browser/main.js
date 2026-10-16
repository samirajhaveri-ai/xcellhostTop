import {
  EMAIL_VALIDATORS,
  PHONE_VALIDATORS,
  ZOHO_ORG_ID,
  firstError
} from "./chunk-TUHBAIE6.js";
import {
  COMPANY_PAGES
} from "./chunk-I226T5VJ.js";
import {
  FRAMEWORK_DETAILS
} from "./chunk-C365EWJY.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-EVL5GQOW.js";
import {
  QuantityInputDirective
} from "./chunk-XXOOERF5.js";
import {
  LeadService
} from "./chunk-MAWJHU3X.js";
import {
  CATEGORY_COLORS
} from "./chunk-3MMBSDR4.js";
import {
  DocRequestService
} from "./chunk-FGJ7AN27.js";
import {
  DOC_META,
  SIMPLE_PAGES,
  SITE
} from "./chunk-LN7P5EZP.js";
import {
  CartService
} from "./chunk-TZE2L2GZ.js";
import {
  BlogApiService
} from "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import {
  environment
} from "./chunk-WBGN3H4A.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  CatalogService,
  slugify
} from "./chunk-QOKK55KD.js";
import {
  DEEP_CONTENT,
  RICH_PRODUCTS
} from "./chunk-3YIWEYUK.js";
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
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig
} from "./chunk-7OXZXASL.js";
import {
  bootstrapApplication,
  provideClientHydration,
  provideHttpClient,
  withEventReplay,
  withFetch
} from "./chunk-7DLAAEIP.js";
import {
  NgTemplateOutlet
} from "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  HostListener,
  Injectable,
  Injector,
  Input,
  Output,
  ViewChild,
  afterNextRender,
  computed,
  effect,
  filter,
  inject,
  input,
  map,
  output,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  startWith,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuerySignal
} from "./chunk-7JITLDDL.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/menu-service-pages.data.ts
var MENU_SERVICE_PAGES = [
  {
    "slug": "aeo-geo-automation",
    "name": "AEO + GEO Automation",
    "title": "AEO + GEO Automation Software India \u2014 AI Search | XcellHost",
    "description": "See whether AI assistants recommend your business, why they don't, and exactly what to fix \u2014 with an AI-readiness score, crawl checks for AI bots and a ready-made task list."
  },
  {
    "slug": "external-network-penetration-testing",
    "name": "External Network Penetration Testing",
    "title": "External Network Penetration Testing Services in India | XcellHost",
    "description": "External network penetration testing by XcellHost \u2014 firewalls, routers, VPNs, web and mail servers and every internet-facing service tested from the outside. Risk-ranked report and free re-test."
  },
  {
    "slug": "iot-penetration-testing",
    "name": "IoT Penetration Testing",
    "title": "IoT Device Penetration Testing Services in India | XcellHost",
    "description": "IoT penetration testing by XcellHost \u2014 firmware, hardware interfaces, wireless protocols, cloud APIs and companion apps tested end to end. Risk-ranked report, remediation guidance and free re-test."
  },
  {
    "slug": "managed-microsoft-365",
    "name": "Managed Microsoft 365",
    "title": "Managed Microsoft 365 India \u2014 Admin, Security, Reports & Licence Optimisation | XcellHost Managed 365",
    "description": "XcellHost Managed 365: we run your Microsoft 365 admin \u2014 users, licences, domains, apps, migration, security and support \u2014 and give you a live command center with AI monthly reports, tenant dashboard, licence scoreboard and renewals tracker. Microsoft partner, INR billing with GST."
  },
  {
    "slug": "mobile-app-penetration-testing",
    "name": "Mobile App Penetration Testing",
    "title": "Mobile App Penetration Testing in India \u2014 Android & iOS | XcellHost",
    "description": "Android and iOS penetration testing by XcellHost \u2014 static and dynamic analysis, API testing, storage and traffic inspection against OWASP MASVS. Risk-ranked report, fix guidance and free re-test."
  },
  {
    "slug": "mobile-application-security-testing",
    "name": "Mobile Application Security Testing",
    "title": "Mobile Application Security Testing Services in India | XcellHost",
    "description": "Mobile application security testing by XcellHost \u2014 penetration testing, source code review, API testing and backend assessment for Android and iOS apps. Detailed vulnerability reports and free re-test."
  },
  {
    "slug": "smart-qr-and-nfc-automation",
    "name": "Smart QR & NFC Automation",
    "title": "Smart QR & NFC Automation Software India \u2014 Digital Card | XcellHost",
    "description": "A smart digital visiting card with QR code, NFC tap and shareable link \u2014 contact, WhatsApp, socials, location and review link in one tap, always up to date."
  },
  {
    "slug": "vapt-services",
    "name": "VAPT Services",
    "title": "VAPT Services in India \u2014 Vulnerability Assessment & Penetration Testing | XcellHost",
    "description": "XcellHost VAPT services: vulnerability assessment and penetration testing for servers, networks, firewalls, endpoints and cloud. Manual exploitation, risk-ranked report, free re-test. ISO 27001 certified, Mumbai."
  },
  {
    "slug": "web-app-penetration-testing",
    "name": "Web App Penetration Testing",
    "title": "Web Application Penetration Testing Services in India | XcellHost",
    "description": "Manual web application penetration testing by XcellHost \u2014 injection, authentication, access control, session and business-logic testing aligned to OWASP. Risk-ranked report, fix support and free re-test."
  },
  {
    "slug": "wordpress-automation",
    "name": "WordPress Automation",
    "title": "WordPress Automation Software India \u2014 Content | XcellHost",
    "description": "Publish and schedule blog posts from the same composer you use for social and Google, turn Google posts into SEO articles automatically, and show live Google reviews on your site."
  }
];

// src/app/data/industry-cloud-pages.data.ts
var INDUSTRY_CLOUD_PAGES = [
  {
    "slug": "bfsi-cloud",
    "name": "BFSI Cloud",
    "title": "BFSI Cloud in India \u2014 Managed Cloud for NBFCs, Banks, Fintechs & Brokers | XcellHost",
    "description": "XcellHost BFSI Cloud: managed private cloud for NBFCs, co-operative and small finance banks, payment aggregators, fintechs, brokers and AMCs. Hosted in India, DR site, 24\xD77 SOC, audit trails \u2014 designed to support RBI, SEBI CSCRF and CERT-In requirements.",
    "category": "Cloud"
  },
  {
    "slug": "ca-cloud",
    "name": "CA Cloud",
    "title": "CA Cloud in India \u2014 Tally on Cloud, GST & Audit Software Hosting for CA Firms | XcellHost",
    "description": "XcellHost CA Cloud: managed cloud for Chartered Accountant firms \u2014 Tally on Cloud, GST and e-invoicing tools, income-tax and TDS software, audit files, Microsoft 365, backups. Hosted in India. 7-day free trial.",
    "category": "Cloud"
  },
  {
    "slug": "construction-cloud",
    "name": "Construction Cloud",
    "title": "Construction Cloud in India \u2014 BIM, GPU Workstations & Project ERP Hosting | XcellHost",
    "description": "XcellHost Construction Cloud for contractors, EPC firms, developers and AEC consultants: GPU cloud workstations for AutoCAD and Revit, BIM file collaboration, Primavera hosting, site-to-HO sync, ERP, VSaaS and backup in Indian data centres.",
    "category": "Cloud"
  },
  {
    "slug": "food-and-beverage",
    "name": "Food & Beverage Cloud",
    "title": "Restaurant Cloud in India \u2014 POS, Kitchen, Multi-Outlet & Aggregator IT | XcellHost",
    "description": "XcellHost Hospitality Cloud for food and beverage: cloud POS and menu management, kitchen display systems, aggregator order handling, central kitchen inventory, Tally, PCI DSS and DPDP-ready guest data, outlet Wi-Fi and CCTV for restaurant chains, QSRs and cloud kitchens.",
    "category": "Cloud"
  },
  {
    "slug": "government-cloud",
    "name": "Government Cloud",
    "title": "Government Cloud in India \u2014 Managed Cloud for Departments, PSUs & Smart Cities | XcellHost",
    "description": "XcellHost Government Cloud: managed hosting for citizen portals, e-office, databases and DR in Indian data centres, aligned to MeitY cloud guidelines and CERT-In directions. Available through GeM. ISO 27001, Mumbai.",
    "category": "Cloud"
  },
  {
    "slug": "healthcare-cloud",
    "name": "Healthcare Cloud",
    "title": "HealthCare Cloud in India \u2014 Managed HIS, EMR & PACS Hosting | XcellHost",
    "description": "XcellHost HealthCare Cloud: managed hosting for HIS/HMIS, EMR, LIS and PACS imaging, with ransomware protection, DR and DPDP Act controls for patient data. Indian data centres, 24\xD77 NOC + SOC, ISO 27001, Mumbai.",
    "category": "Cloud"
  },
  {
    "slug": "higher-education-cloud",
    "name": "Higher Education Cloud",
    "title": "Higher Education Cloud in India \u2014 Managed LMS, ERP & Exam Hosting for Universities | XcellHost",
    "description": "XcellHost Higher Education Cloud: managed hosting for Moodle LMS, student ERP, admission portals and online exams, plus cloud desktops, Microsoft 365 and DPDP-aligned data protection for Indian universities and colleges.",
    "category": "Cloud"
  },
  {
    "slug": "hospitality-cloud",
    "name": "Hospitality Cloud",
    "title": "Hotel Cloud in India \u2014 PMS Hosting, Guest Wi-Fi & Guest Data Security | XcellHost",
    "description": "XcellHost Hospitality Cloud for hotels, resorts, hotel groups and serviced apartments: PMS hosting, channel manager and booking engine, F&B POS, guest Wi-Fi, Form C and guest data security, DPDP Act, PCI DSS, CCTV and backup in Indian data centres.",
    "category": "Cloud"
  },
  {
    "slug": "insurance-cloud",
    "name": "Insurance Cloud",
    "title": "Insurance Cloud in India \u2014 Managed Cloud for Insurers, TPAs, Brokers & InsurTechs | XcellHost",
    "description": "XcellHost Insurance Cloud: managed cloud for life, general and health insurers, TPAs, brokers and InsurTechs \u2014 policy administration, claims, agent and POSP portals, KYC storage, DR and SOC. Hosted in India, designed to support IRDAI and DPDP Act requirements.",
    "category": "Cloud"
  },
  {
    "slug": "logistics-cloud",
    "name": "Logistics Cloud",
    "title": "Logistics Cloud in India \u2014 Managed TMS, WMS & Tracking Hosting | XcellHost",
    "description": "XcellHost Logistics Cloud: managed hosting for TMS, WMS, GPS/telematics data, e-way bill and e-invoicing integration, tracking portals and branch apps. Indian data centres, 24\xD77 NOC + SOC, ISO 27001, Mumbai.",
    "category": "Cloud"
  },
  {
    "slug": "manufacturing-cloud",
    "name": "Manufacturing Cloud",
    "title": "Manufacturing Cloud in India \u2014 Managed ERP, MES & Plant Security for Manufacturers | XcellHost",
    "description": "XcellHost Manufacturing Cloud: managed hosting for ERP, MES and CAD/PLM, plant-to-HO connectivity, OT ransomware protection, CCTV, backup and DR for Indian manufacturers and MSMEs. ISO 27001, Mumbai.",
    "category": "Cloud"
  },
  {
    "slug": "pharmaceutical-cloud",
    "name": "Pharmaceutical Cloud",
    "title": "Pharmaceutical Cloud in India \u2014 Validation-Ready Hosting for QMS, LIMS & ERP | XcellHost",
    "description": "XcellHost Pharmaceutical Cloud: validation-ready managed hosting for QMS, LIMS, ERP, eDMS and batch records, with audit trails, DLP and DR, supporting 21 CFR Part 11, EU Annex 11 and revised Schedule M. ISO 27001, Mumbai.",
    "category": "Cloud"
  },
  {
    "slug": "retail-cloud",
    "name": "Retail Cloud",
    "title": "Retail Cloud in India \u2014 Managed POS, E-commerce & ERP Hosting | XcellHost",
    "description": "XcellHost Retail Cloud: managed hosting for store POS, e-commerce, omnichannel inventory and ERP, with bot protection, PCI DSS and DPDP Act controls, backup and DR. Indian data centres, 24\xD77 NOC + SOC, Mumbai.",
    "category": "Cloud"
  },
  {
    "slug": "gcc-cloud",
    "name": "GCC Cloud",
    "title": "GCC Cloud in India | XcellHost",
    "description": "Explore managed cloud infrastructure, security, backup and support for GCC teams with XcellHost.",
    "category": "Cloud"
  },
  {
    "slug": "smb-cloud",
    "name": "SMB Cloud",
    "title": "SMB Cloud in India \u2014 Managed IT, Microsoft 365, Backup & Security Bundle for Small Businesses | XcellHost",
    "description": "XcellHost SMB Cloud: one managed bundle for Indian small and mid-sized businesses \u2014 Microsoft 365, Tally on Cloud, cloud desktops, FileCloud, Acronis backup, EDR, Cybird firewall, DPDP readiness and RMM. One bill, one support desk.",
    "category": "Cloud"
  }
];

// src/app/app.routes.ts
var routes = [
  __spreadValues({ path: "network-access-control-nac", title: "Genian NAC | XcellHost", loadComponent: () => import("./chunk-PG6IT4ZT.js").then((m2) => m2.GenianNacPage) }, false ? { \u0275entryName: "src/app/pages/genian-nac.page.ts" } : {}),
  __spreadValues({ path: "genian-nac", title: "Genian NAC | XcellHost", loadComponent: () => import("./chunk-PG6IT4ZT.js").then((m2) => m2.GenianNacPage) }, false ? { \u0275entryName: "src/app/pages/genian-nac.page.ts" } : {}),
  __spreadValues({ path: "tally-on-cloud/checkout", data: { checkoutProduct: "tally" }, loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage) }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({ path: "serverless-inference", data: { inferenceSlug: "serverless-inference" }, loadComponent: () => import("./chunk-WLC7NNPT.js").then((m2) => m2.InferenceImportedPage) }, false ? { \u0275entryName: "src/app/pages/inference-imported.page.ts" } : {}),
  __spreadValues({ path: "dedicated-inference", data: { inferenceSlug: "dedicated-inference" }, loadComponent: () => import("./chunk-WLC7NNPT.js").then((m2) => m2.InferenceImportedPage) }, false ? { \u0275entryName: "src/app/pages/inference-imported.page.ts" } : {}),
  __spreadValues({ path: "model-catalog", data: { inferenceSlug: "model-catalog" }, loadComponent: () => import("./chunk-WLC7NNPT.js").then((m2) => m2.InferenceImportedPage) }, false ? { \u0275entryName: "src/app/pages/inference-imported.page.ts" } : {}),
  __spreadValues({ path: "model-directory", data: { inferenceSlug: "model-directory" }, loadComponent: () => import("./chunk-WLC7NNPT.js").then((m2) => m2.InferenceImportedPage) }, false ? { \u0275entryName: "src/app/pages/inference-imported.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ssl", data: { sectigoSlug: "sectigo-ssl" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ov-ssl-wildcard", data: { sectigoSlug: "sectigo-ov-ssl-wildcard" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ov-ssl", data: { sectigoSlug: "sectigo-ov-ssl" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-acme-certificate-as-a-service", data: { sectigoSlug: "sectigo-acme-certificate-as-a-service" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ssl-wildcard", data: { sectigoSlug: "sectigo-ssl-wildcard" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ssl-multi-domain-ucc", data: { sectigoSlug: "sectigo-ssl-multi-domain-ucc" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ov-ssl-multi-domain-wildcard", data: { sectigoSlug: "sectigo-ov-ssl-multi-domain-wildcard" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ov-ssl-multi-domain-ucc", data: { sectigoSlug: "sectigo-ov-ssl-multi-domain-ucc" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ev-ssl-multi-domain-ucc", data: { sectigoSlug: "sectigo-ev-ssl-multi-domain-ucc" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ev-ssl", data: { sectigoSlug: "sectigo-ev-ssl" }, loadComponent: () => import("./chunk-2MSDMU32.js").then((m2) => m2.SectigoDetailPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-detail.page.ts" } : {}),
  { path: "explore-vps", redirectTo: "vps-hosting", pathMatch: "full" },
  __spreadValues({ path: "wordpress-vps", data: { vpsSlug: "wordpress-vps" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "windows-vps", data: { vpsSlug: "windows-vps" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "vps-usa", data: { vpsSlug: "vps-usa" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "vps-netherlands", data: { vpsSlug: "vps-netherlands" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "vps-india", data: { vpsSlug: "vps-india" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "vps-hosting", data: { vpsSlug: "vps-hosting" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "openclaw-vps", data: { vpsSlug: "openclaw-vps" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "n8n-vps", data: { vpsSlug: "n8n-vps" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "cpanel-vps", data: { vpsSlug: "cpanel-vps" }, loadComponent: () => import("./chunk-JDYWR5CA.js").then((m2) => m2.VpsImportedPage) }, false ? { \u0275entryName: "src/app/pages/vps-imported.page.ts" } : {}),
  __spreadValues({ path: "microsoft-visio", title: "Microsoft Visio | XcellHost", loadComponent: () => import("./chunk-F2R24VHU.js").then((m2) => m2.MicrosoftVisioPage) }, false ? { \u0275entryName: "src/app/pages/microsoft-visio.page.ts" } : {}),
  __spreadValues({ path: "microsoft-viva", title: "Microsoft Viva | XcellHost", loadComponent: () => import("./chunk-IUTCURSH.js").then((m2) => m2.MicrosoftVivaPage) }, false ? { \u0275entryName: "src/app/pages/microsoft-viva.page.ts" } : {}),
  __spreadValues({ path: "mcrosoft-project-server", title: "Microsoft Project Server | XcellHost", loadComponent: () => import("./chunk-35E7SEWD.js").then((m2) => m2.ProjectServerPage) }, false ? { \u0275entryName: "src/app/pages/project-server.page.ts" } : {}),
  { path: "microsoft-project-server", redirectTo: "mcrosoft-project-server", pathMatch: "full" },
  __spreadValues({ path: "acronis-ai", title: "Acronis AI Platform | XcellHost", data: { productSlug: "acronis-ai" }, loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage) }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-true-businessid",
    data: { businessIdVariant: "single" },
    loadComponent: () => import("./chunk-NEIDLNAF.js").then((m2) => m2.GeoTrustBusinessIdPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-businessid.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-true-businessid-multi-domain",
    data: { businessIdVariant: "multi" },
    loadComponent: () => import("./chunk-NEIDLNAF.js").then((m2) => m2.GeoTrustBusinessIdPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-businessid.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-true-businessid-ov",
    title: "GeoTrust TrueBusiness ID OV (FLEX) | XcellHost",
    data: { businessIdVariant: "ovFlex" },
    loadComponent: () => import("./chunk-NEIDLNAF.js").then((m2) => m2.GeoTrustBusinessIdPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-businessid.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-true-businessid-ev",
    title: "GeoTrust True BusinessID with EV | XcellHost",
    data: { businessIdVariant: "ev" },
    loadComponent: () => import("./chunk-NEIDLNAF.js").then((m2) => m2.GeoTrustBusinessIdPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-businessid.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-true-businessid-ev-multi-domain",
    data: { businessIdVariant: "evMulti" },
    loadComponent: () => import("./chunk-NEIDLNAF.js").then((m2) => m2.GeoTrustBusinessIdPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-businessid.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-true-businessid-wildcard",
    data: { businessIdVariant: "wildcard" },
    loadComponent: () => import("./chunk-NEIDLNAF.js").then((m2) => m2.GeoTrustBusinessIdPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-businessid.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-quickssl-premium-san",
    data: { quickSslVariant: "san" },
    loadComponent: () => import("./chunk-6SX6T733.js").then((m2) => m2.GeoTrustQuickSslPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-quickssl.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-quickssl-premium",
    data: { quickSslVariant: "single" },
    loadComponent: () => import("./chunk-6SX6T733.js").then((m2) => m2.GeoTrustQuickSslPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-quickssl.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-quickssl-premium-wildcard",
    data: { quickSslVariant: "wildcard" },
    loadComponent: () => import("./chunk-6SX6T733.js").then((m2) => m2.GeoTrustQuickSslPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-quickssl.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-dv-ssl-flex",
    title: "GeoTrust DV SSL (FLEX) | XcellHost",
    loadComponent: () => import("./chunk-LW7ZXRWV.js").then((m2) => m2.GeoTrustDvSslFlexPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-dv-ssl-flex.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-true-businessid-ev-flex",
    title: "GeoTrust TrueBusiness ID EV (FLEX) | XcellHost",
    loadComponent: () => import("./chunk-CWHM54FF.js").then((m2) => m2.GeoTrustTrueBusinessIdEvFlexPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-true-businessid-ev-flex.page.ts" } : {}),
  __spreadValues({ path: "digicert-ev-multi-domain-ssl", title: "DigiCert EV Multi-Domain SSL - XcellHost", data: { sslSlug: "digicert-ev-multi-domain-ssl" }, loadComponent: () => import("./chunk-ZE4GYB6O.js").then((m2) => m2.DigicertSslDetailPage) }, false ? { \u0275entryName: "src/app/pages/digicert-ssl-detail.page.ts" } : {}),
  __spreadValues({ path: "digicert-wildcard-ssl", title: "DigiCert Wildcard SSL - XcellHost", data: { sslSlug: "digicert-wildcard-ssl" }, loadComponent: () => import("./chunk-ZE4GYB6O.js").then((m2) => m2.DigicertSslDetailPage) }, false ? { \u0275entryName: "src/app/pages/digicert-ssl-detail.page.ts" } : {}),
  __spreadValues({ path: "digicert-secure-site-ev-ssl", title: "DigiCert Secure Site EV SSL - XcellHost", data: { sslSlug: "digicert-secure-site-ev-ssl" }, loadComponent: () => import("./chunk-ZE4GYB6O.js").then((m2) => m2.DigicertSslDetailPage) }, false ? { \u0275entryName: "src/app/pages/digicert-ssl-detail.page.ts" } : {}),
  __spreadValues({ path: "digicert-secure-site-multi-domain-ssl", title: "DigiCert Secure Site Multi-Domain - XcellHost", data: { sslSlug: "digicert-secure-site-multi-domain-ssl" }, loadComponent: () => import("./chunk-ZE4GYB6O.js").then((m2) => m2.DigicertSslDetailPage) }, false ? { \u0275entryName: "src/app/pages/digicert-ssl-detail.page.ts" } : {}),
  __spreadValues({ path: "digicert-secure-site-wildcard-ssl", title: "DigiCert Secure Site Wildcard - XcellHost", data: { sslSlug: "digicert-secure-site-wildcard-ssl" }, loadComponent: () => import("./chunk-ZE4GYB6O.js").then((m2) => m2.DigicertSslDetailPage) }, false ? { \u0275entryName: "src/app/pages/digicert-ssl-detail.page.ts" } : {}),
  __spreadValues({ path: "digicert-secure-site-pro-ssl", title: "DigiCert Secure Site Pro SSL - XcellHost", data: { sslSlug: "digicert-secure-site-pro-ssl" }, loadComponent: () => import("./chunk-ZE4GYB6O.js").then((m2) => m2.DigicertSslDetailPage) }, false ? { \u0275entryName: "src/app/pages/digicert-ssl-detail.page.ts" } : {}),
  __spreadValues({ path: "digicert-secure-site-pro-ev-ssl", title: "DigiCert Secure Site Pro EV SSL - XcellHost", data: { sslSlug: "digicert-secure-site-pro-ev-ssl" }, loadComponent: () => import("./chunk-ZE4GYB6O.js").then((m2) => m2.DigicertSslDetailPage) }, false ? { \u0275entryName: "src/app/pages/digicert-ssl-detail.page.ts" } : {}),
  __spreadValues({ path: "digicert-multi-domain-ssl", title: "DigiCert Multi-Domain SSL - XcellHost", loadComponent: () => import("./chunk-JTZFH4SR.js").then((m2) => m2.DigicertMultiDomainSslPage) }, false ? { \u0275entryName: "src/app/pages/digicert-multi-domain-ssl.page.ts" } : {}),
  __spreadValues({ path: "digicert-ev-ssl", title: "DigiCert EV SSL - XcellHost", loadComponent: () => import("./chunk-VBM2SRK6.js").then((m2) => m2.DigicertEvSslPage) }, false ? { \u0275entryName: "src/app/pages/digicert-ev-ssl.page.ts" } : {}),
  __spreadValues({ path: "digicert-standard-ssl", title: "DigiCert Standard SSL - XcellHost", loadComponent: () => import("./chunk-JKSFXOVL.js").then((m2) => m2.DigicertStandardSslPage) }, false ? { \u0275entryName: "src/app/pages/digicert-standard-ssl.page.ts" } : {}),
  __spreadValues({ path: "managed-grc", title: "Managed GRC - XcellHost", data: { consultingSlug: "managed-grc" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "iso-27001-consulting", title: "ISO 27001 Consulting - XcellHost", data: { consultingSlug: "iso-27001-consulting" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "iso-20000-itsm", title: "ISO 20000 (ITSM) - XcellHost", data: { consultingSlug: "iso-20000-itsm" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "iso-27017-cloud-infosec", title: "ISO 27017 Cloud Security - XcellHost", data: { consultingSlug: "iso-27017-cloud-infosec" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "iso-22301-bmc", title: "ISO 22301 Business Continuity - XcellHost", data: { consultingSlug: "iso-22301-bmc" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "iso-27018-pii-public-cloud", title: "ISO 27018 PII Protection - XcellHost", data: { consultingSlug: "iso-27018-pii-public-cloud" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "iso-42001ai-risk", title: "ISO 42001 AI Management - XcellHost", data: { consultingSlug: "iso-42001ai-risk" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "soc-1-cunsulting", title: "SOC 1 Consulting - XcellHost", data: { consultingSlug: "soc-1-cunsulting" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "soc-2-cunsulting", title: "SOC 2 Consulting - XcellHost", data: { consultingSlug: "soc-2-cunsulting" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "pci-consulting", title: "PCI DSS Consulting - XcellHost", data: { consultingSlug: "pci-consulting" }, loadComponent: () => import("./chunk-JXVJM37C.js").then((m2) => m2.SecurityConsultingPage) }, false ? { \u0275entryName: "src/app/pages/security-consulting.page.ts" } : {}),
  __spreadValues({ path: "email-signing-certificates", title: "Email Signing Certificates - XcellHost", loadComponent: () => import("./chunk-2MDVWLMQ.js").then((m2) => m2.EmailSigningCertificatesPage) }, false ? { \u0275entryName: "src/app/pages/email-signing-certificates.page.ts" } : {}),
  __spreadValues({ path: "code-signing-certificates", title: "Code Signing Certificates - XcellHost", loadComponent: () => import("./chunk-RBIICRM6.js").then((m2) => m2.CodeSigningCertificatesPage) }, false ? { \u0275entryName: "src/app/pages/code-signing-certificates.page.ts" } : {}),
  __spreadValues({ path: "certificate-management", title: "Certificate Management - XcellHost", loadComponent: () => import("./chunk-O5M7ZNTY.js").then((m2) => m2.CertificateManagementPage) }, false ? { \u0275entryName: "src/app/pages/certificate-management.page.ts" } : {}),
  __spreadValues({ path: "website-security-solutions", title: "Website Security Solutions - XcellHost", loadComponent: () => import("./chunk-LDKH67Z3.js").then((m2) => m2.WebsiteSecuritySolutionsPage) }, false ? { \u0275entryName: "src/app/pages/website-security-solutions.page.ts" } : {}),
  __spreadValues({ path: "mark-certificates", title: "Mark Certificates - XcellHost", loadComponent: () => import("./chunk-7FGPTVFQ.js").then((m2) => m2.MarkCertificatesPage) }, false ? { \u0275entryName: "src/app/pages/mark-certificates.page.ts" } : {}),
  __spreadValues({ path: "sectigo-ev-code-signing", title: "Sectigo EV Code Signing - XcellHost", loadComponent: () => import("./chunk-53FZZTNH.js").then((m2) => m2.SectigoEvCodeSigningPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-ev-code-signing.page.ts" } : {}),
  __spreadValues({ path: "sectigo-code-signing", title: "Sectigo Code Signing - XcellHost", loadComponent: () => import("./chunk-4E2K2FYK.js").then((m2) => m2.SectigoCodeSigningPage) }, false ? { \u0275entryName: "src/app/pages/sectigo-code-signing.page.ts" } : {}),
  __spreadValues({ path: "rapidssl-ssl-certificates", title: "RapidSSL Certificates - XcellHost", loadComponent: () => import("./chunk-IQZGWHFN.js").then((m2) => m2.RapidsslPage) }, false ? { \u0275entryName: "src/app/pages/rapidssl.page.ts" } : {}),
  { path: "sarv-workspace", redirectTo: "xcellworkspace", pathMatch: "full" },
  __spreadValues({ path: "xcellworkspace", title: "XcellWorkSpace - XcellHost", loadComponent: () => import("./chunk-6AIULYOB.js").then((m2) => m2.SarvWorkspacePage) }, false ? { \u0275entryName: "src/app/pages/sarv-workspace.page.ts" } : {}),
  __spreadValues({ path: "cloud-contact-center", title: "Cloud Contact Center - XcellHost", loadComponent: () => import("./chunk-4JPQI3MT.js").then((m2) => m2.CloudContactCenterPage) }, false ? { \u0275entryName: "src/app/pages/cloud-contact-center.page.ts" } : {}),
  __spreadValues({ path: "managed-kubernetes", title: "Managed Kubernetes - XcellHost", loadComponent: () => import("./chunk-HPYOD2AM.js").then((m2) => m2.ManagedKubernetesPage) }, false ? { \u0275entryName: "src/app/pages/managed-kubernetes.page.ts" } : {}),
  __spreadValues({ path: "under-construction/podcasts", title: "The Cloud Podcast - XcellHost", loadComponent: () => import("./chunk-A4HBTTER.js").then((m2) => m2.PodcastsPage) }, false ? { \u0275entryName: "src/app/pages/podcasts.page.ts" } : {}),
  __spreadValues({
    path: "explore-cloud-servers",
    data: { productSlug: "performance-cloud" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "compare-products",
    title: "Product Comparisons | XcellHost",
    loadComponent: () => import("./chunk-ETJO6Y4T.js").then((m2) => m2.CompareProductsPage)
  }, false ? { \u0275entryName: "src/app/pages/compare-products.page.ts" } : {}),
  __spreadValues({
    path: "compare-products/:comparison",
    loadComponent: () => import("./chunk-453I3E6T.js").then((m2) => m2.ProductComparisonDetailPage)
  }, false ? { \u0275entryName: "src/app/pages/product-comparison-detail.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-tenant-to-tenant-migration",
    loadComponent: () => import("./chunk-UGCKJM34.js").then((m2) => m2.Microsoft365TenantToTenantMigrationPage)
  }, false ? { \u0275entryName: "src/app/pages/microsoft-365-tenant-to-tenant-migration.page.ts" } : {}),
  ...Object.keys(FRAMEWORK_DETAILS).map((slug) => __spreadValues({ path: "cybersecurity-frameworks/" + slug, data: { productSlug: slug }, loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage) }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {})),
  __spreadValues({
    path: "microsoft-365-business-standard-no-teams",
    loadComponent: () => import("./chunk-D3LAPPKK.js").then((m2) => m2.Microsoft365BusinessStandardNoTeamsPage)
  }, false ? { \u0275entryName: "src/app/pages/microsoft-365-business-standard-no-teams.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-business-basic-no-teams",
    loadComponent: () => import("./chunk-X5LTUPLN.js").then((m2) => m2.Microsoft365BusinessBasicNoTeamsPage)
  }, false ? { \u0275entryName: "src/app/pages/microsoft-365-business-basic-no-teams.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-business-premium-no-teams",
    loadComponent: () => import("./chunk-5XYT7LPV.js").then((m2) => m2.Microsoft365BusinessPremiumNoTeamsPage)
  }, false ? { \u0275entryName: "src/app/pages/microsoft-365-business-premium-no-teams.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-business-standard",
    loadComponent: () => import("./chunk-7EOIAYIW.js").then((m2) => m2.Microsoft365BusinessStandardPage)
  }, false ? { \u0275entryName: "src/app/pages/microsoft-365-business-standard.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-business-premium",
    loadComponent: () => import("./chunk-ZCX6ZWC3.js").then((m2) => m2.Microsoft365BusinessPremiumPage)
  }, false ? { \u0275entryName: "src/app/pages/microsoft-365-business-premium.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-business-basic",
    loadComponent: () => import("./chunk-H6SARKDB.js").then((m2) => m2.Microsoft365BusinessBasicPage)
  }, false ? { \u0275entryName: "src/app/pages/microsoft-365-business-basic.page.ts" } : {}),
  __spreadValues({
    path: "edr-checkout",
    data: { checkoutProduct: "edr" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "rmm-checkout",
    data: { checkoutProduct: "rmm" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "acronis-genai-checkout",
    data: { checkoutProduct: "genai" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "cybird-checkout",
    data: { checkoutProduct: "cybird" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "smb-cloud-desktop/checkout",
    data: { checkoutProduct: "smb-desktop" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "cloud-disaster-recovery-smb-checkout",
    data: { checkoutProduct: "cdr-smb" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "dpdpa-for-smb/launch-checkout",
    data: { checkoutProduct: "dpdpa-launch" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "dpdpa-for-smb/growth-checkout",
    data: { checkoutProduct: "dpdpa-growth" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "dpdpa-for-smb/enterprise-enquiry",
    data: { checkoutProduct: "dpdpa-enterprise" },
    loadComponent: () => import("./chunk-CYMBZINR.js").then((m2) => m2.CheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/checkout.page.ts" } : {}),
  __spreadValues({
    path: "managed-redis",
    loadComponent: () => import("./chunk-DJ6FUZ2K.js").then((m2) => m2.ManagedRedisPage)
  }, false ? { \u0275entryName: "src/app/pages/managed-redis.page.ts" } : {}),
  ...[...MENU_SERVICE_PAGES, ...INDUSTRY_CLOUD_PAGES].filter((page) => page.slug !== "smart-qr-and-nfc-automation" && page.slug !== "gcc-cloud").map((page) => __spreadValues({
    path: page.slug,
    data: { servicePage: page },
    loadComponent: () => import("./chunk-Q3X75SN7.js").then((m2) => m2.MenuServicePage)
  }, false ? { \u0275entryName: "src/app/pages/menu-service.page.ts" } : {})),
  __spreadValues({
    path: "gcc-cloud",
    loadComponent: () => import("./chunk-LVXRDIWV.js").then((m2) => m2.GccCloudPage)
  }, false ? { \u0275entryName: "src/app/pages/gcc-cloud.page.ts" } : {}),
  { path: "mobile-application-penetration-testing", redirectTo: "mobile-application-security-testing", pathMatch: "full" },
  { path: "aeo-geo-automation4", redirectTo: "aeo-geo-automation", pathMatch: "full" },
  { path: "managed-365", redirectTo: "managed-microsoft-365", pathMatch: "full" },
  __spreadValues({
    path: "cybersecurity-frameworks",
    loadComponent: () => import("./chunk-VTWBFP3D.js").then((m2) => m2.CybersecurityFrameworksPage)
  }, false ? { \u0275entryName: "src/app/pages/cybersecurity-frameworks.page.ts" } : {}),
  __spreadValues({
    path: "managed-mysql",
    data: { databaseSlug: "managed-mysql", title: "Managed MySQL" },
    loadComponent: () => import("./chunk-VGOF57UF.js").then((m2) => m2.ManagedDatabasePage)
  }, false ? { \u0275entryName: "src/app/pages/managed-database.page.ts" } : {}),
  __spreadValues({
    path: "managed-mariadb",
    data: { databaseSlug: "managed-mariadb", title: "Managed MariaDB" },
    loadComponent: () => import("./chunk-VGOF57UF.js").then((m2) => m2.ManagedDatabasePage)
  }, false ? { \u0275entryName: "src/app/pages/managed-database.page.ts" } : {}),
  __spreadValues({
    path: "managed-postgresql",
    data: { databaseSlug: "managed-postgresql", title: "Managed PostgreSQL" },
    loadComponent: () => import("./chunk-VGOF57UF.js").then((m2) => m2.ManagedDatabasePage)
  }, false ? { \u0275entryName: "src/app/pages/managed-database.page.ts" } : {}),
  __spreadValues({
    path: "managed-oracle",
    data: { databaseSlug: "managed-oracle", title: "Managed Oracle" },
    loadComponent: () => import("./chunk-VGOF57UF.js").then((m2) => m2.ManagedDatabasePage)
  }, false ? { \u0275entryName: "src/app/pages/managed-database.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-enterprise-office365",
    data: { productSlug: "microsoft-365-enterprise-office365" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-enterprise-frontline",
    data: { productSlug: "microsoft-365-enterprise-frontline" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-enterprise-nonprofit",
    data: { productSlug: "microsoft-365-enterprise-nonprofit" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-enterprise-additional",
    data: { productSlug: "microsoft-365-enterprise-additional" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({ path: "explore-marketplace", loadComponent: () => import("./chunk-QVEBN5S6.js").then((m2) => m2.ExploreMarketplacePage) }, false ? { \u0275entryName: "src/app/pages/explore-marketplace.page.ts" } : {}),
  __spreadValues({ path: "customer-testimonials", loadComponent: () => import("./chunk-77ZHEDAM.js").then((m2) => m2.CustomerTestimonialsPage) }, false ? { \u0275entryName: "src/app/pages/customer-testimonials.page.ts" } : {}),
  { path: "under-construction/customer-testimonials", redirectTo: "customer-testimonials", pathMatch: "full" },
  { path: "company/customer-testimonials", redirectTo: "customer-testimonials", pathMatch: "full" },
  { path: "under-construction/careers-overview", redirectTo: "company/careers-overview", pathMatch: "full" },
  { path: "promo-offers", redirectTo: "promotion-and-offers", pathMatch: "full" },
  { path: "under-construction/promotion-and-offers", redirectTo: "promotion-and-offers", pathMatch: "full" },
  { path: "under-construction/trust-watch", redirectTo: "company/trust-watch", pathMatch: "full" },
  { path: "domains", redirectTo: "register-a-domain-name", pathMatch: "full" },
  { path: "iot-infrastructure", redirectTo: "iot-cloud", pathMatch: "full" },
  { path: "why-xcellhost", redirectTo: "about-us", pathMatch: "full" },
  { path: "company/why-xcellhost", redirectTo: "about-us", pathMatch: "full" },
  { path: "company/our-team-our-story", redirectTo: "about-us", pathMatch: "full" },
  __spreadValues({ path: "about-us", data: { pageSlug: "our-team-our-story" }, loadComponent: () => import("./chunk-25GTO5QK.js").then((m2) => m2.CompanyPage) }, false ? { \u0275entryName: "src/app/pages/company.page.ts" } : {}),
  __spreadValues({ path: "", pathMatch: "full", loadComponent: () => import("./chunk-OKVYBCGQ.js").then((m2) => m2.HomePage) }, false ? { \u0275entryName: "src/app/pages/home.page.ts" } : {}),
  __spreadValues({ path: "compare", loadComponent: () => import("./chunk-7WJGCT5I.js").then((m2) => m2.ComparePage) }, false ? { \u0275entryName: "src/app/pages/compare.page.ts" } : {}),
  __spreadValues({ path: "compare-providers", loadComponent: () => import("./chunk-UK2RY4WB.js").then((m2) => m2.CompareProvidersPage) }, false ? { \u0275entryName: "src/app/pages/compare-providers.page.ts" } : {}),
  __spreadValues({
    path: "cloudbaba-vs-vultr",
    data: { comparison: "vultr" },
    loadComponent: () => import("./chunk-BKBGSTMW.js").then((m2) => m2.CompareProviderDetailPage)
  }, false ? { \u0275entryName: "src/app/pages/compare-provider-detail.page.ts" } : {}),
  __spreadValues({
    path: "cloudbaba-vs-ovhcloud",
    data: { comparison: "ovhcloud" },
    loadComponent: () => import("./chunk-BKBGSTMW.js").then((m2) => m2.CompareProviderDetailPage)
  }, false ? { \u0275entryName: "src/app/pages/compare-provider-detail.page.ts" } : {}),
  __spreadValues({
    path: "cloudbaba-vs-digitalocean",
    data: { comparison: "digitalocean" },
    loadComponent: () => import("./chunk-BKBGSTMW.js").then((m2) => m2.CompareProviderDetailPage)
  }, false ? { \u0275entryName: "src/app/pages/compare-provider-detail.page.ts" } : {}),
  __spreadValues({
    path: "cloudbaba-vs-aws",
    data: { comparison: "aws" },
    loadComponent: () => import("./chunk-BKBGSTMW.js").then((m2) => m2.CompareProviderDetailPage)
  }, false ? { \u0275entryName: "src/app/pages/compare-provider-detail.page.ts" } : {}),
  __spreadValues({
    path: "cloudbaba-vs-gcp",
    data: { comparison: "gcp" },
    loadComponent: () => import("./chunk-BKBGSTMW.js").then((m2) => m2.CompareProviderDetailPage)
  }, false ? { \u0275entryName: "src/app/pages/compare-provider-detail.page.ts" } : {}),
  __spreadValues({
    path: "cloudbaba-vs-azure",
    data: { comparison: "azure" },
    loadComponent: () => import("./chunk-BKBGSTMW.js").then((m2) => m2.CompareProviderDetailPage)
  }, false ? { \u0275entryName: "src/app/pages/compare-provider-detail.page.ts" } : {}),
  { path: "whatsapp-for-business", redirectTo: "whatsapp-smb", pathMatch: "full" },
  { path: "bfsi-financial-services", redirectTo: "bfsi-insurance-services", pathMatch: "full" },
  { path: "under-construction/infrastructure", redirectTo: "infrastructure", pathMatch: "full" },
  { path: "under-construction/escalation-matrix", redirectTo: "escalation-matrix", pathMatch: "full" },
  { path: "under-construction/partner-matrix", redirectTo: "partner-matrix", pathMatch: "full" },
  __spreadValues({
    path: "under-construction/partner-overview",
    data: { pageSlug: "partner-overview" },
    loadComponent: () => import("./chunk-25GTO5QK.js").then((m2) => m2.CompanyPage)
  }, false ? { \u0275entryName: "src/app/pages/company.page.ts" } : {}),
  __spreadValues({ path: "escalation-matrix", loadComponent: () => import("./chunk-XYM4S5CG.js").then((m2) => m2.EscalationMatrixPage) }, false ? { \u0275entryName: "src/app/pages/escalation-matrix.page.ts" } : {}),
  __spreadValues({ path: "partner-matrix", loadComponent: () => import("./chunk-UE4NG2SM.js").then((m2) => m2.PartnerMatrixPage) }, false ? { \u0275entryName: "src/app/pages/partner-matrix.page.ts" } : {}),
  { path: "under-construction/cloud-login", redirectTo: "cloud-login", pathMatch: "full" },
  __spreadValues({ path: "cloud-login", loadComponent: () => import("./chunk-44GTJHPA.js").then((m2) => m2.CloudLoginPage) }, false ? { \u0275entryName: "src/app/pages/cloud-login.page.ts" } : {}),
  __spreadValues({ path: "signup", loadComponent: () => import("./chunk-ZD73XJ2X.js").then((m2) => m2.SignupPage) }, false ? { \u0275entryName: "src/app/pages/signup.page.ts" } : {}),
  __spreadValues({
    path: "customer-login",
    data: { type: "customer", heading: "Customer Login", portal: "Customer portal", description: "Sign in to access your cloud dashboard and account services." },
    loadComponent: () => import("./chunk-CCSGHLYC.js").then((m2) => m2.PortalLoginPage)
  }, false ? { \u0275entryName: "src/app/pages/portal-login.page.ts" } : {}),
  __spreadValues({
    path: "partner-login",
    data: { type: "partner", heading: "Partner Login", portal: "Partner portal", description: "Sign in to manage your customers, services and partner resources." },
    loadComponent: () => import("./chunk-CCSGHLYC.js").then((m2) => m2.PortalLoginPage)
  }, false ? { \u0275entryName: "src/app/pages/portal-login.page.ts" } : {}),
  __spreadValues({
    path: "vendor-login",
    data: { type: "vendor", heading: "Vendor Login", portal: "Vendor portal", description: "Sign in to access vendor resources, requests and account tools." },
    loadComponent: () => import("./chunk-CCSGHLYC.js").then((m2) => m2.PortalLoginPage)
  }, false ? { \u0275entryName: "src/app/pages/portal-login.page.ts" } : {}),
  __spreadValues({
    path: "employee-login",
    data: { type: "employee", heading: "Employee Login", portal: "Employee portal", description: "Sign in securely to access employee tools and internal resources." },
    loadComponent: () => import("./chunk-CCSGHLYC.js").then((m2) => m2.PortalLoginPage)
  }, false ? { \u0275entryName: "src/app/pages/portal-login.page.ts" } : {}),
  __spreadValues({
    path: "under-construction/data-processing-agreement",
    loadComponent: () => import("./chunk-UD3333VA.js").then((m2) => m2.DataProcessingAgreementPage)
  }, false ? { \u0275entryName: "src/app/pages/data-processing-agreement.page.ts" } : {}),
  __spreadValues({
    path: "under-construction/cloud-glossary",
    loadComponent: () => import("./chunk-X5WKJPBO.js").then((m2) => m2.CloudGlossaryPage)
  }, false ? { \u0275entryName: "src/app/pages/cloud-glossary.page.ts" } : {}),
  { path: "under-construction/security-glossary", redirectTo: "security-glossary", pathMatch: "full" },
  __spreadValues({ path: "security-glossary", loadComponent: () => import("./chunk-Q6O2L4ER.js").then((m2) => m2.SecurityGlossaryPage) }, false ? { \u0275entryName: "src/app/pages/security-glossary.page.ts" } : {}),
  { path: "under-construction/ai-glossary", redirectTo: "ai-glossary", pathMatch: "full" },
  __spreadValues({ path: "ai-glossary", loadComponent: () => import("./chunk-DKYAMOPL.js").then((m2) => m2.AiGlossaryPage) }, false ? { \u0275entryName: "src/app/pages/ai-glossary.page.ts" } : {}),
  { path: "under-construction/associations", redirectTo: "associations", pathMatch: "full" },
  { path: "associat", redirectTo: "associations", pathMatch: "full" },
  __spreadValues({
    path: "associations",
    loadComponent: () => import("./chunk-LNDNP3FZ.js").then((m2) => m2.AssociationsPage)
  }, false ? { \u0275entryName: "src/app/pages/associations.page.ts" } : {}),
  { path: "under-construction/support-overview", redirectTo: "support-overview", pathMatch: "full" },
  { path: "company/support-overview", redirectTo: "support-overview", pathMatch: "full" },
  __spreadValues({
    path: "support-overview",
    loadComponent: () => import("./chunk-LS7ZMTQ6.js").then((m2) => m2.SupportOverviewPage)
  }, false ? { \u0275entryName: "src/app/pages/support-overview.page.ts" } : {}),
  __spreadValues({ path: "under-construction/ai-use-policy", loadComponent: () => import("./chunk-WDOOMZFY.js").then((m2) => m2.AiUsePolicyPage) }, false ? { \u0275entryName: "src/app/pages/ai-use-policy.page.ts" } : {}),
  { path: "under-construction/tsplus-demo-center", redirectTo: "tsplus-demo-center", pathMatch: "full" },
  __spreadValues({ path: "tsplus-demo-center", loadComponent: () => import("./chunk-KICENK2Z.js").then((m2) => m2.TsplusDemoCenterPage) }, false ? { \u0275entryName: "src/app/pages/tsplus-demo-center.page.ts" } : {}),
  { path: "under-construction/acronis-demo-center", redirectTo: "acronis-demo-center", pathMatch: "full" },
  __spreadValues({ path: "acronis-demo-center", loadComponent: () => import("./chunk-75XHOB3D.js").then((m2) => m2.AcronisDemoCenterPage) }, false ? { \u0275entryName: "src/app/pages/acronis-demo-center.page.ts" } : {}),
  { path: "under-construction/druva-demo-center", redirectTo: "druva-demo-center", pathMatch: "full" },
  __spreadValues({ path: "druva-demo-center", loadComponent: () => import("./chunk-RBBAVPVA.js").then((m2) => m2.DruvaDemoCenterPage) }, false ? { \u0275entryName: "src/app/pages/druva-demo-center.page.ts" } : {}),
  { path: "under-construction/xcellhost-demo-center", redirectTo: "xcellhost-demo-center", pathMatch: "full" },
  __spreadValues({ path: "xcellhost-demo-center", loadComponent: () => import("./chunk-6HBTC7RY.js").then((m2) => m2.XcellhostDemoCenterPage) }, false ? { \u0275entryName: "src/app/pages/xcellhost-demo-center.page.ts" } : {}),
  __spreadValues({ path: "under-construction/events-catalog", loadComponent: () => import("./chunk-7XC3UVZI.js").then((m2) => m2.EventsCatalogPage) }, false ? { \u0275entryName: "src/app/pages/events-catalog.page.ts" } : {}),
  __spreadValues({ path: "under-construction/:slug", loadComponent: () => import("./chunk-RCO7OA6E.js").then((m2) => m2.UnderConstructionPage) }, false ? { \u0275entryName: "src/app/pages/under-construction.page.ts" } : {}),
  __spreadValues({ path: "under-construction", loadComponent: () => import("./chunk-RCO7OA6E.js").then((m2) => m2.UnderConstructionPage) }, false ? { \u0275entryName: "src/app/pages/under-construction.page.ts" } : {}),
  __spreadValues({
    path: "case-studies/:id",
    loadComponent: () => import("./chunk-QZX7EGN7.js").then((m2) => m2.CaseStudyDetailPage)
  }, false ? { \u0275entryName: "src/app/pages/case-study-detail.page.ts" } : {}),
  __spreadValues({ path: "case-studies", loadComponent: () => import("./chunk-JQF4AON6.js").then((m2) => m2.CaseStudiesPage) }, false ? { \u0275entryName: "src/app/pages/case-studies.page.ts" } : {}),
  __spreadValues({ path: "insights", loadComponent: () => import("./chunk-EGEJ54KZ.js").then((m2) => m2.InsightsPage) }, false ? { \u0275entryName: "src/app/pages/insights.page.ts" } : {}),
  __spreadValues({
    path: "insights/:slug",
    data: { contentType: "blog" },
    loadComponent: () => import("./chunk-SYQ46ZQK.js").then((m2) => m2.BlogPage)
  }, false ? { \u0275entryName: "src/app/pages/blog.page.ts" } : {}),
  __spreadValues({
    path: "use-cases/:slug",
    data: { contentType: "use-case" },
    loadComponent: () => import("./chunk-SYQ46ZQK.js").then((m2) => m2.BlogPage)
  }, false ? { \u0275entryName: "src/app/pages/blog.page.ts" } : {}),
  __spreadValues({ path: "about", loadComponent: () => import("./chunk-OQQQVZOS.js").then((m2) => m2.SimplePage), data: { key: "about" } }, false ? { \u0275entryName: "src/app/pages/simple.page.ts" } : {}),
  __spreadValues({ path: "contact", loadComponent: () => import("./chunk-NQILF7S2.js").then((m2) => m2.ContactPage) }, false ? { \u0275entryName: "src/app/pages/contact.page.ts" } : {}),
  __spreadValues({ path: "media-kit", loadComponent: () => import("./chunk-CWJHVTQZ.js").then((m2) => m2.MediaKitPage) }, false ? { \u0275entryName: "src/app/pages/media-kit.page.ts" } : {}),
  __spreadValues({
    path: "microsoft-365-smb",
    loadComponent: () => import("./chunk-4IWICJYS.js").then((m2) => m2.Microsoft365SmbPage)
  }, false ? { \u0275entryName: "src/app/pages/microsoft-365-smb.page.ts" } : {}),
  __spreadValues({
    path: "google-workspace",
    loadComponent: () => import("./chunk-TLCAUKCG.js").then((m2) => m2.GoogleWorkspacePage)
  }, false ? { \u0275entryName: "src/app/pages/google-workspace.page.ts" } : {}),
  __spreadValues({
    path: "dpdpa-for-smb",
    loadComponent: () => import("./chunk-VB6SSBRB.js").then((m2) => m2.DpdpaForSmbPage)
  }, false ? { \u0275entryName: "src/app/pages/dpdpa-for-smb.page.ts" } : {}),
  __spreadValues({
    path: "payment-methods",
    loadComponent: () => import("./chunk-34JKAAGQ.js").then((m2) => m2.PaymentMethodsPage)
  }, false ? { \u0275entryName: "src/app/pages/payment-methods.page.ts" } : {}),
  __spreadValues({
    path: "promotion-and-offers",
    loadComponent: () => import("./chunk-Z6GDRNC5.js").then((m2) => m2.PromoOffersPage)
  }, false ? { \u0275entryName: "src/app/pages/promo-offers.page.ts" } : {}),
  {
    path: "our-team",
    redirectTo: "about-us",
    pathMatch: "full"
  },
  __spreadValues({
    path: "company-profile",
    data: { title: "Company Profile" },
    loadComponent: () => import("./chunk-TEWK32HS.js").then((m2) => m2.CompanyProfilePage)
  }, false ? { \u0275entryName: "src/app/pages/company-profile.page.ts" } : {}),
  __spreadValues({
    path: "career-handbook",
    data: { title: "Career Handbook" },
    loadComponent: () => import("./chunk-RCO7OA6E.js").then((m2) => m2.UnderConstructionPage)
  }, false ? { \u0275entryName: "src/app/pages/under-construction.page.ts" } : {}),
  __spreadValues({
    path: "partner-program",
    data: { productSlug: "reseller-program" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "autonomous-threat-management",
    data: { productSlug: "autonomous-threat-management" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "geotrust-ssl-certificates",
    data: { productSlug: "geotrust" },
    loadComponent: () => import("./chunk-KOUKSXWT.js").then((m2) => m2.GeoTrustSslCertificatesPage)
  }, false ? { \u0275entryName: "src/app/pages/geotrust-ssl-certificates.page.ts" } : {}),
  __spreadValues({
    path: "digicert-ssl-certificates",
    data: { productSlug: "digicert-ssl-certificates" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  {
    path: "digicert",
    redirectTo: "digicert-ssl-certificates",
    pathMatch: "full"
  },
  __spreadValues({
    path: "digicert-vmc",
    data: { productSlug: "verified-mark-certificates-vmc" },
    loadComponent: () => import("./chunk-7RS3BTCF.js").then((m2) => m2.DigicertVmcPage)
  }, false ? { \u0275entryName: "src/app/pages/digicert-vmc.page.ts" } : {}),
  __spreadValues({
    path: "digicert-cmc",
    data: { productSlug: "digicert-cmc" },
    loadComponent: () => import("./chunk-3JQQWPKM.js").then((m2) => m2.DigicertCmcPage)
  }, false ? { \u0275entryName: "src/app/pages/digicert-cmc.page.ts" } : {}),
  __spreadValues({
    path: "acme-enabled-ssl-certificates",
    loadComponent: () => import("./chunk-IS2SM7VL.js").then((m2) => m2.AcmeCertificatePage)
  }, false ? { \u0275entryName: "src/app/pages/acme-certificate.page.ts" } : {}),
  {
    path: "acme-certificate",
    redirectTo: "acme-enabled-ssl-certificates",
    pathMatch: "full"
  },
  {
    path: "acme-certificates",
    redirectTo: "acme-enabled-ssl-certificates",
    pathMatch: "full"
  },
  {
    path: "xcellhost-acme-certificate",
    redirectTo: "acme-enabled-ssl-certificates",
    pathMatch: "full"
  },
  __spreadValues({
    path: "mobile-device-mgmt",
    data: { productSlug: "cloud-mobile-device-mgmt" },
    loadComponent: () => import("./chunk-QAC3HNPL.js").then((m2) => m2.CloudMdmPage)
  }, false ? { \u0275entryName: "src/app/pages/cloud-mdm.page.ts" } : {}),
  __spreadValues({
    path: "cloud-mdm",
    data: { productSlug: "cloud-mobile-device-mgmt" },
    loadComponent: () => import("./chunk-QAC3HNPL.js").then((m2) => m2.CloudMdmPage)
  }, false ? { \u0275entryName: "src/app/pages/cloud-mdm.page.ts" } : {}),
  __spreadValues({
    path: "cloud-mobile-device-mgmt",
    data: { productSlug: "cloud-mobile-device-mgmt" },
    loadComponent: () => import("./chunk-QAC3HNPL.js").then((m2) => m2.CloudMdmPage)
  }, false ? { \u0275entryName: "src/app/pages/cloud-mdm.page.ts" } : {}),
  __spreadValues({ path: "pricing", loadComponent: () => import("./chunk-OQQQVZOS.js").then((m2) => m2.SimplePage), data: { key: "pricing" } }, false ? { \u0275entryName: "src/app/pages/simple.page.ts" } : {}),
  { path: "company/partnership-models", redirectTo: "under-construction/partner-overview", pathMatch: "full" },
  __spreadValues({
    path: "company/our-platform",
    data: { productSlug: "our-platform" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "company/trust-watch",
    data: { productSlug: "watchtower" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  { path: "company/watchtower", redirectTo: "company/trust-watch", pathMatch: "full" },
  __spreadValues({
    path: "company/trust-center",
    loadComponent: () => import("./chunk-ZSCVDVIK.js").then((m2) => m2.TrustCenterPage)
  }, false ? { \u0275entryName: "src/app/pages/trust-center.page.ts" } : {}),
  { path: "platform-status", redirectTo: "company/platform-status", pathMatch: "full" },
  __spreadValues({
    path: "company/platform-status",
    loadComponent: () => import("./chunk-MV5PPV32.js").then((m2) => m2.PlatformStatusPage)
  }, false ? { \u0275entryName: "src/app/pages/platform-status.page.ts" } : {}),
  __spreadValues({ path: "company/:slug", loadComponent: () => import("./chunk-25GTO5QK.js").then((m2) => m2.CompanyPage) }, false ? { \u0275entryName: "src/app/pages/company.page.ts" } : {}),
  { path: "customer-stories", redirectTo: "company/customer-stories", pathMatch: "full" },
  __spreadValues({ path: "category/:name", loadComponent: () => import("./chunk-IYSADJFF.js").then((m2) => m2.CategoryPage) }, false ? { \u0275entryName: "src/app/pages/category.page.ts" } : {}),
  __spreadValues({ path: "vendor-partners/acronis", loadComponent: () => import("./chunk-6M7K3SCN.js").then((m2) => m2.AcronisPartnerPage) }, false ? { \u0275entryName: "src/app/pages/acronis-partner.page.ts" } : {}),
  __spreadValues({
    path: "vendor-partners/:slug",
    loadComponent: () => import("./chunk-NRHDYATF.js").then((m2) => m2.VendorPartnerPage)
  }, false ? { \u0275entryName: "src/app/pages/vendor-partner.page.ts" } : {}),
  __spreadValues({
    path: "acronis-advanced-edr-sla",
    loadComponent: () => import("./chunk-4RSJTFOF.js").then((m2) => m2.AcronisAdvancedEdrSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/acronis-advanced-edr-sla.page.ts" } : {}),
  __spreadValues({
    path: "acronis-advanced-mdr-sla",
    loadComponent: () => import("./chunk-TLEYBPI7.js").then((m2) => m2.AcronisAdvancedMdrSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/acronis-advanced-mdr-sla.page.ts" } : {}),
  __spreadValues({
    path: "acronis-advanced-xdr-sla",
    loadComponent: () => import("./chunk-DXFKGOGH.js").then((m2) => m2.AcronisAdvancedXdrSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/acronis-advanced-xdr-sla.page.ts" } : {}),
  __spreadValues({
    path: "acronis-backup-cloud-sla",
    loadComponent: () => import("./chunk-IVYDMZW7.js").then((m2) => m2.AcronisBackupCloudSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/acronis-backup-cloud-sla.page.ts" } : {}),
  __spreadValues({
    path: "acronis-disaster-recovery-dr-sla",
    loadComponent: () => import("./chunk-37732N32.js").then((m2) => m2.AcronisDisasterRecoveryDrSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/acronis-disaster-recovery-dr-sla.page.ts" } : {}),
  __spreadValues({
    path: "acronis-remote-monitoring-management-rmm-sla",
    loadComponent: () => import("./chunk-7DHIN5TO.js").then((m2) => m2.AcronisRemoteMonitoringManagementRmmSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/acronis-remote-monitoring-management-rmm-sla.page.ts" } : {}),
  __spreadValues({
    path: "email-backup-for-microsoft-365-sla",
    loadComponent: () => import("./chunk-RIFI5EIR.js").then((m2) => m2.EmailBackupForMicrosoft365SlaPage)
  }, false ? { \u0275entryName: "src/app/pages/email-backup-for-microsoft-365-sla.page.ts" } : {}),
  __spreadValues({
    path: "file-cloud-sla",
    loadComponent: () => import("./chunk-LAIF4EEE.js").then((m2) => m2.FileCloudSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/file-cloud-sla.page.ts" } : {}),
  __spreadValues({
    path: "performance-cloud-sla",
    loadComponent: () => import("./chunk-DRISMM6Q.js").then((m2) => m2.PerformanceCloudSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/performance-cloud-sla.page.ts" } : {}),
  __spreadValues({
    path: "tally-on-cloud-sla",
    loadComponent: () => import("./chunk-Y6DCIO7W.js").then((m2) => m2.TallyOnCloudSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/tally-on-cloud-sla.page.ts" } : {}),
  __spreadValues({
    path: "video-surveillance-as-a-service-vsaas-sla",
    loadComponent: () => import("./chunk-67CIWA6E.js").then((m2) => m2.VideoSurveillanceAsAServiceVsaasSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/video-surveillance-as-a-service-vsaas-sla.page.ts" } : {}),
  __spreadValues({
    path: "whatsapp-marketing-service-sla",
    loadComponent: () => import("./chunk-W5VAFTTM.js").then((m2) => m2.WhatsappMarketingServiceSlaPage)
  }, false ? { \u0275entryName: "src/app/pages/whatsapp-marketing-service-sla.page.ts" } : {}),
  { path: "bare-metal-server", redirectTo: "bare-metal-servers", pathMatch: "full" },
  __spreadValues({ path: "nvidia-b300-nodes", loadComponent: () => import("./chunk-HKQD2NVP.js").then((m2) => m2.NvidiaB300Page) }, false ? { \u0275entryName: "src/app/pages/nvidia-b300.page.ts" } : {}),
  __spreadValues({ path: "nvidia-h200", loadComponent: () => import("./chunk-4DJER7XN.js").then((m2) => m2.NvidiaH200Page) }, false ? { \u0275entryName: "src/app/pages/nvidia-h200.page.ts" } : {}),
  __spreadValues({
    path: "cloud-devops-services",
    data: { productSlug: "cloud-devops-services" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "cloud-drive/checkout",
    loadComponent: () => import("./chunk-MT22LYIQ.js").then((m2) => m2.CloudDriveCheckoutPage)
  }, false ? { \u0275entryName: "src/app/pages/cloud-drive-checkout.page.ts" } : {}),
  { path: "acronis-edr", redirectTo: "", pathMatch: "full" },
  __spreadValues({
    path: "email-security-smb",
    data: { productSlug: "vortex-seg", productDisplayName: "Email Security SMB" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "email-security-enterprise",
    data: { productSlug: "vortex-seg", productDisplayName: "Email Security Enterprise" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  // service pages sit at the root, so this must stay last
  { path: "comodo-enterprise-pro-basic-pa", redirectTo: "comodo-personal-authentication", pathMatch: "full" },
  { path: "co-location", redirectTo: "co-location-services", pathMatch: "full" },
  __spreadValues({
    path: "advanced-endpoint-security-edr",
    data: { productSlug: "advanced-endpoint-security-edr" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "scrutiny-edr",
    data: { productSlug: "scrutiny-edr" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  __spreadValues({
    path: "cloud-drive",
    data: { productSlug: "cloud-drive" },
    loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage)
  }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  { path: "microsoft-365", redirectTo: "microsoft-365-smb", pathMatch: "full" },
  { path: "secure-dmarc", redirectTo: "enterprise-dmarc", pathMatch: "full" },
  { path: "clm-solutions", redirectTo: "certificate-mgmt-solutions", pathMatch: "full" },
  __spreadValues({ path: ":slug", loadComponent: () => import("./chunk-7JL45QDJ.js").then((m2) => m2.ProductPage) }, false ? { \u0275entryName: "src/app/pages/product.page.ts" } : {}),
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top", anchorScrolling: "enabled" }), withRouterConfig({ onSameUrlNavigation: "reload" }))
  ]
};

// src/app/core/site-copy.service.ts
var PRESERVE = 'script, style, noscript, template, code, pre, [contenteditable]:not([contenteditable="false"]), [data-preserve-copy]';
var COPY_ATTRIBUTES = ["alt", "title", "placeholder", "aria-label"];
function formatSiteCopy(value) {
  return value.replace(/(^|[\s([{"“‘>])and(?=$|[\s)\]},.!?:;"”’<])/gi, "$1&");
}
var SiteCopyService = class _SiteCopyService {
  document = inject(DOCUMENT);
  destroyRef = inject(DestroyRef);
  documents = /* @__PURE__ */ new Map();
  frames = /* @__PURE__ */ new Map();
  pending = /* @__PURE__ */ new Set();
  scheduled = false;
  destroyed = false;
  constructor() {
    afterNextRender(() => this.watchDocument(this.document));
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
      for (const document2 of this.documents.keys())
        this.unwatchDocument(document2);
      this.frames.clear();
      this.pending.clear();
    });
  }
  watchDocument(document2) {
    const window2 = document2.defaultView;
    if (!window2 || this.documents.has(document2) || !document2.documentElement)
      return;
    const observer = new window2.MutationObserver((records) => {
      for (const record of records) {
        if (record.type === "childList") {
          for (const node of Array.from(record.addedNodes))
            this.pending.add(node);
        } else {
          this.pending.add(record.target);
        }
      }
      this.schedule();
    });
    const onLoad = (event) => {
      const target = event.target;
      if (target?.nodeType === 1 && target.tagName === "IFRAME")
        this.watchFrame(target);
    };
    this.documents.set(document2, { observer, onLoad });
    document2.addEventListener("load", onLoad, true);
    this.formatTree(document2.documentElement);
    observer.observe(document2.documentElement, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: COPY_ATTRIBUTES
    });
  }
  unwatchDocument(document2) {
    const entry = this.documents.get(document2);
    entry?.observer.disconnect();
    if (entry)
      document2.removeEventListener("load", entry.onLoad, true);
    this.documents.delete(document2);
  }
  watchFrame(frame) {
    try {
      const document2 = frame.contentDocument;
      const previous = this.frames.get(frame);
      if (previous && previous !== document2)
        this.unwatchDocument(previous);
      if (!document2) {
        this.frames.delete(frame);
        return;
      }
      this.frames.set(frame, document2);
      this.watchDocument(document2);
    } catch {
    }
  }
  schedule() {
    if (this.scheduled || this.destroyed)
      return;
    this.scheduled = true;
    queueMicrotask(() => {
      this.scheduled = false;
      if (this.destroyed)
        return;
      const nodes = [...this.pending];
      this.pending.clear();
      for (const node of nodes)
        if (node.isConnected)
          this.formatTree(node);
      for (const [frame, document2] of this.frames) {
        if (!frame.isConnected || !this.documents.has(frame.ownerDocument)) {
          this.unwatchDocument(document2);
          this.frames.delete(frame);
        }
      }
    });
  }
  formatTree(root) {
    const parent = root.nodeType === 1 ? root : root.parentElement;
    if (parent?.closest(PRESERVE) || root.nodeType === 3 && parent?.closest("textarea"))
      return;
    this.formatNode(root);
    if (root.nodeType === 3 || root.nodeType === 1 && root.tagName === "TEXTAREA")
      return;
    const walker = root.ownerDocument?.createTreeWalker(root, 5, {
      acceptNode: (node2) => {
        if (node2.nodeType !== 1)
          return 1;
        const element = node2;
        if (element.matches(PRESERVE))
          return 2;
        if (element.tagName === "TEXTAREA") {
          this.formatNode(element);
          return 2;
        }
        return 1;
      }
    });
    if (!walker)
      return;
    let node;
    while (node = walker.nextNode())
      this.formatNode(node);
  }
  formatNode(node) {
    if (node.nodeType === 3) {
      const original = node.nodeValue ?? "";
      const formatted = formatSiteCopy(original);
      if (formatted !== original)
        node.nodeValue = formatted;
    } else if (node.nodeType === 1) {
      const element = node;
      for (const attribute of COPY_ATTRIBUTES) {
        const original = element.getAttribute(attribute);
        if (original === null)
          continue;
        const formatted = formatSiteCopy(original);
        if (formatted !== original)
          element.setAttribute(attribute, formatted);
      }
      if (element.tagName === "IFRAME")
        this.watchFrame(element);
    }
  }
  static \u0275fac = function SiteCopyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SiteCopyService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SiteCopyService, factory: _SiteCopyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteCopyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/overlays/cart-drawer.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function CartDrawerComponent_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 16);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4, "Your cart is empty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Add services you're interested in \u2014 then request one combined quote.");
    \u0275\u0275elementEnd()();
  }
}
function CartDrawerComponent_Conditional_14_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div", 17)(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 19);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "button", 21);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_14_For_4_Template_button_click_7_listener() {
      const line_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.dec(line_r2));
    });
    \u0275\u0275text(8, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 22);
    \u0275\u0275listener("quantityChange", function CartDrawerComponent_Conditional_14_For_4_Template_input_quantityChange_9_listener($event) {
      const line_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cart.setQty(line_r2.name, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 23);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_14_For_4_Template_button_click_10_listener() {
      const line_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.inc(line_r2));
    });
    \u0275\u0275text(11, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 24);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_14_For_4_Template_button_click_12_listener() {
      const line_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.remove(line_r2));
    });
    \u0275\u0275text(13, "\u{1F5D1}");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const line_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(line_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.cart.displayPrice(line_r2));
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", line_r2.name + " quantity");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", line_r2.qty === 1);
    \u0275\u0275attribute("aria-label", "Decrease " + line_r2.name + " quantity");
    \u0275\u0275advance(2);
    \u0275\u0275property("quantityValue", line_r2.qty);
    \u0275\u0275attribute("aria-label", "Quantity for " + line_r2.name + " quantity");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Increase " + line_r2.name + " quantity");
  }
}
function CartDrawerComponent_Conditional_14_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275text(1, " Proceed to Checkout \u2192 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("href", ctx_r2.siteLockCheckoutUrl, \u0275\u0275sanitizeUrl);
  }
}
function CartDrawerComponent_Conditional_14_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_14_Conditional_5_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toCheckout());
    });
    \u0275\u0275text(1, " Proceed to Checkout \u2192 ");
    \u0275\u0275elementEnd();
  }
}
function CartDrawerComponent_Conditional_14_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275conditionalCreate(1, CartDrawerComponent_Conditional_14_Conditional_5_Conditional_1_Template, 2, 1, "a", 25)(2, CartDrawerComponent_Conditional_14_Conditional_5_Conditional_2_Template, 2, 0, "button", 26);
    \u0275\u0275elementStart(3, "a", 27);
    \u0275\u0275text(4, "or Quick Quote on WhatsApp");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isSiteLockPage() ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.whatsapp(), \u0275\u0275sanitizeUrl);
  }
}
function CartDrawerComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, CartDrawerComponent_Conditional_14_Conditional_1_Template, 7, 0, "div", 13);
    \u0275\u0275elementStart(2, "ul", 14);
    \u0275\u0275repeaterCreate(3, CartDrawerComponent_Conditional_14_For_4_Template, 14, 8, "li", null, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, CartDrawerComponent_Conditional_14_Conditional_5_Template, 5, 2, "div", 15);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.cart.isEmpty() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.cart.lines());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.cart.isEmpty() ? 5 : -1);
  }
}
function CartDrawerComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 29)(2, "div", 30);
    \u0275\u0275text(3, "Checkout \u2014 your details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 31);
    \u0275\u0275text(5, "Full name *");
    \u0275\u0275element(6, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 31);
    \u0275\u0275text(8, "Company");
    \u0275\u0275element(9, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 31);
    \u0275\u0275text(11, "Email *");
    \u0275\u0275element(12, "input", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 31);
    \u0275\u0275text(14, "Phone / WhatsApp *");
    \u0275\u0275element(15, "input", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 31);
    \u0275\u0275text(17, "GSTIN (optional)");
    \u0275\u0275element(18, "input", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 37);
    \u0275\u0275text(20, "Payment link will be sent to:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 38)(22, "span", 39);
    \u0275\u0275text(23, "\u{1F4E7} Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 40);
    \u0275\u0275text(25, "\u{1F4AC} WhatsApp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 41);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 42)(29, "button", 43);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_15_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submit());
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 44);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_15_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.back());
    });
    \u0275\u0275text(32, " \u2190 Back to cart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 45);
    \u0275\u0275text(34, " \u{1F512} On submit, a Zoho Books estimate is created with your items and a payment link (UPI \xB7 Cards \xB7 NetBanking) is sent to your email & WhatsApp. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(27);
    \u0275\u0275textInterpolate(ctx_r2.error());
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ck-busy", ctx_r2.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.submitLabel(), " ");
  }
}
function CartDrawerComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 46)(2, "div", 47);
    \u0275\u0275text(3, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b", 48);
    \u0275\u0275text(5, "Order received!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7, "Your ");
    \u0275\u0275elementStart(8, "b");
    \u0275\u0275text(9, "Zoho Books estimate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " is being created. The payment link will arrive on your ");
    \u0275\u0275elementStart(11, "b");
    \u0275\u0275text(12, "email & WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " within minutes.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 50);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 51);
    \u0275\u0275text(17, " \u{1F4DD} Draft mode: no real order was created. On the live site this fires the Zoho pipeline automatically (spec attached). ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 42)(19, "button", 52);
    \u0275\u0275listener("click", function CartDrawerComponent_Conditional_16_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.finish());
    });
    \u0275\u0275text(20, " Done ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate1("Ref: ", ctx_r2.reference());
  }
}
var SUBMIT_LABEL = "Place Order \u2014 Get Zoho Payment Link";
var CartDrawerComponent = class _CartDrawerComponent {
  cart = inject(CartService);
  overlay = inject(OverlayService);
  leads = inject(LeadService);
  fb = inject(FormBuilder);
  router = inject(Router);
  siteLockCheckoutUrl = "https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-WP-SL-BAS";
  form = this.fb.nonNullable.group({
    name: ["", Validators.required],
    company: [""],
    email: ["", EMAIL_VALIDATORS],
    phone: ["", PHONE_VALIDATORS],
    gstin: [""]
  });
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  done = signal(false, ...ngDevMode ? [{ debugName: "done" }] : []);
  reference = signal("", ...ngDevMode ? [{ debugName: "reference" }] : []);
  /** Drives the `.pop` keyframe on the FAB; cleared by its own `animationend`. */
  popping = signal(false, ...ngDevMode ? [{ debugName: "popping" }] : []);
  submitLabel = computed(() => this.busy() ? "Creating your Zoho estimate\u2026" : SUBMIT_LABEL, ...ngDevMode ? [{ debugName: "submitLabel" }] : []);
  /** The quick-quote handoff, rebuilt whenever a line changes. */
  whatsapp = computed(() => this.leads.whatsappLink(this.cart.summary()), ...ngDevMode ? [{ debugName: "whatsapp" }] : []);
  lastCount = this.cart.count();
  constructor() {
    effect(() => {
      const open = this.cart.isOpen();
      untracked(() => open ? this.overlay.open("cart") : this.overlay.close("cart"));
    });
    effect(() => {
      const layered = this.overlay.stack().includes("cart");
      if (!layered && untracked(() => this.cart.isOpen()))
        this.cart.close();
    });
    effect(() => {
      if (!this.cart.isOpen())
        untracked(() => this.reset());
    });
    effect(() => {
      const n = this.cart.count();
      const grew = n > this.lastCount;
      this.lastCount = n;
      if (grew)
        this.popping.set(true);
    });
  }
  open() {
    this.cart.open();
  }
  close() {
    this.cart.close();
  }
  toCheckout() {
    this.cart.toCheckout();
  }
  isSiteLockPage() {
    return this.router.url.split(/[?#]/, 1)[0].replace(/\/$/, "") === "/web-security-sitelock";
  }
  back() {
    this.cart.backToCart();
  }
  dec(line) {
    if (line.qty > 1)
      this.cart.setQty(line.name, line.qty - 1);
  }
  inc(line) {
    this.cart.setQty(line.name, line.qty + 1);
  }
  remove(line) {
    this.cart.remove(line.name);
  }
  /** "Done" on the confirmation panel closed the drawer in the original too. */
  finish() {
    this.done.set(false);
    this.cart.close();
  }
  async submit() {
    if (this.busy())
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set(firstError(Object.values(this.form.controls), "Please fill name, email and phone."));
      return;
    }
    this.error.set("");
    this.busy.set(true);
    const v = this.form.getRawValue();
    const result = await this.leads.submit("checkout", {
      customer: {
        name: v.name,
        company: v.company,
        email: v.email,
        phone: v.phone,
        gstin: v.gstin
      },
      items: this.cart.lines().map((l) => ({ name: l.name, qty: l.qty, price_note: this.cart.displayPrice(l) })),
      zoho: { org_id: ZOHO_ORG_ID, action: "create_estimate_and_send_payment_link" },
      delivery: ["email", "whatsapp"]
    });
    this.busy.set(false);
    if (!result.ok && !result.skipped) {
      this.error.set("Connection issue \u2014 please use WhatsApp quote instead.");
      return;
    }
    this.reference.set(result.ref);
    this.done.set(true);
    this.cart.clear();
  }
  reset() {
    this.done.set(false);
    this.busy.set(false);
    this.error.set("");
    this.form.reset();
  }
  static \u0275fac = function CartDrawerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartDrawerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartDrawerComponent, selectors: [["xh-cart-drawer"]], hostAttrs: [2, "display", "contents"], decls: 17, vars: 13, consts: [["id", "cartFab", "aria-label", "Cart", "aria-controls", "cart", 1, "cart-fab", 3, "animationend", "click"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["cx", "9", "cy", "21", "r", "1"], ["cx", "20", "cy", "21", "r", "1"], ["d", "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"], ["id", "cartCount", 1, "cart-count"], ["id", "cartBack", 1, "cart-back", 3, "click"], ["id", "cart", "aria-label", "Your quote cart", 1, "cart"], [1, "cart-head"], ["id", "cartX", "aria-label", "Close", 1, "cart-x", 3, "click"], ["id", "ckForm", 1, "cart-step", 3, "formGroup"], ["id", "ckDone", 1, "cart-step"], ["id", "cartBody", 1, "cart-body"], ["id", "cartEmpty", 1, "cart-empty"], ["id", "cartItems", 1, "cart-items"], ["id", "cartFoot", 1, "cart-foot"], [1, "ce-ic"], [1, "ci-info"], [1, "ci-name"], [1, "ci-price"], ["role", "group", 1, "ci-qty"], ["type", "button", 3, "click", "disabled"], ["xhQuantityInput", "", 3, "quantityChange", "quantityValue"], ["type", "button", 3, "click"], ["aria-label", "Remove", 1, "ci-rm", 3, "click"], ["id", "goCheckout", "target", "_blank", "rel", "noopener", 1, "btn", "atc", 2, "width", "100%", 3, "href"], ["id", "goCheckout", 1, "btn", "atc", 2, "width", "100%"], ["id", "cartWA", "target", "_blank", "rel", "noopener", 1, "btn", "cart-wa", 3, "href"], ["id", "goCheckout", 1, "btn", "atc", 2, "width", "100%", 3, "click"], [1, "cart-body"], [1, "ck-head"], [1, "ck-l"], ["id", "ckName", "formControlName", "name", "placeholder", "Rajesh Patel", 1, "ck-i"], ["id", "ckCo", "formControlName", "company", "placeholder", "Patel Industries Pvt Ltd", 1, "ck-i"], ["id", "ckEmail", "type", "email", "formControlName", "email", "placeholder", "rajesh@company.com", 1, "ck-i"], ["id", "ckPhone", "type", "tel", "formControlName", "phone", "placeholder", "+91 98XXXXXXXX", 1, "ck-i"], ["id", "ckGst", "formControlName", "gstin", "placeholder", "27XXXXXXXXXXXXX", 1, "ck-i"], [1, "ck-l", 2, "margin-bottom", "4px"], [1, "ck-channels"], [1, "ck-ch"], [1, "ck-ch", "wa"], ["id", "ckErr", 1, "ck-err"], [1, "cart-foot"], ["id", "ckSubmit", 1, "btn", "atc", 2, "width", "100%", 3, "click"], ["id", "ckBack", 1, "btn", "btn-ghost", 2, "width", "100%", 3, "click"], [1, "cart-draft"], [1, "cart-body", 2, "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "text-align", "center", "gap", "12px"], [1, "ck-tick"], [2, "font-family", "var(--disp)", "font-size", "19px", "color", "var(--navy)"], [2, "font-size", "14px", "color", "var(--slate)", "max-width", "30ch"], ["id", "ckRef", 1, "ck-ref"], [1, "cart-draft", 2, "margin-top", "14px"], ["id", "ckClose", 1, "btn", "btn-ghost", 2, "width", "100%", 3, "click"]], template: function CartDrawerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("animationend", function CartDrawerComponent_Template_button_animationend_0_listener() {
        return ctx.popping.set(false);
      })("click", function CartDrawerComponent_Template_button_click_0_listener() {
        return ctx.open();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "circle", 2)(3, "circle", 3)(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275listener("click", function CartDrawerComponent_Template_div_click_7_listener() {
        return ctx.close();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "aside", 7)(9, "div", 8)(10, "h3");
      \u0275\u0275text(11, "Your Quote Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 9);
      \u0275\u0275listener("click", function CartDrawerComponent_Template_button_click_12_listener() {
        return ctx.close();
      });
      \u0275\u0275text(13, "\u2715");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, CartDrawerComponent_Conditional_14_Template, 6, 2);
      \u0275\u0275conditionalCreate(15, CartDrawerComponent_Conditional_15_Template, 35, 5, "div", 10);
      \u0275\u0275conditionalCreate(16, CartDrawerComponent_Conditional_16_Template, 21, 1, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("pop", ctx.popping());
      \u0275\u0275attribute("aria-expanded", ctx.cart.isOpen());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("show", ctx.cart.count() > 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.cart.count());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.cart.isOpen());
      \u0275\u0275advance();
      \u0275\u0275classProp("open", ctx.cart.isOpen());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(!ctx.cart.showCheckout() && !ctx.done() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cart.showCheckout() && !ctx.done() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.done() ? 16 : -1);
    }
  }, dependencies: [QuantityInputDirective, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartDrawerComponent, [{
    type: Component,
    args: [{ selector: "xh-cart-drawer", standalone: true, host: { style: "display:contents" }, imports: [QuantityInputDirective, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<button\r
  class="cart-fab"\r
  id="cartFab"\r
  aria-label="Cart"\r
  aria-controls="cart"\r
  [attr.aria-expanded]="cart.isOpen()"\r
  [class.pop]="popping()"\r
  (animationend)="popping.set(false)"\r
  (click)="open()"\r
>\r
  <svg\r
    width="22"\r
    height="22"\r
    viewBox="0 0 24 24"\r
    fill="none"\r
    stroke="currentColor"\r
    stroke-width="2"\r
    stroke-linecap="round"\r
    stroke-linejoin="round"\r
  >\r
    <circle cx="9" cy="21" r="1" />\r
    <circle cx="20" cy="21" r="1" />\r
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />\r
  </svg>\r
  <span class="cart-count" id="cartCount" [class.show]="cart.count() > 0">{{ cart.count() }}</span>\r
</button>\r
\r
<div class="cart-back" id="cartBack" [class.open]="cart.isOpen()" (click)="close()"></div>\r
\r
<aside class="cart" id="cart" aria-label="Your quote cart" [class.open]="cart.isOpen()">\r
  <div class="cart-head">\r
    <h3>Your Quote Cart</h3>\r
    <button class="cart-x" id="cartX" aria-label="Close" (click)="close()">\u2715</button>\r
  </div>\r
\r
  @if (!cart.showCheckout() && !done()) {\r
    <div class="cart-body" id="cartBody">\r
      @if (cart.isEmpty()) {\r
        <div class="cart-empty" id="cartEmpty">\r
          <div class="ce-ic">\u{1F6D2}</div>\r
          <b>Your cart is empty</b>\r
          <span>Add services you're interested in \u2014 then request one combined quote.</span>\r
        </div>\r
      }\r
      <ul class="cart-items" id="cartItems">\r
        @for (line of cart.lines(); track line.name) {\r
          <li>\r
            <div class="ci-info">\r
              <div class="ci-name">{{ line.name }}</div>\r
              <div class="ci-price">{{ cart.displayPrice(line) }}</div>\r
            </div>\r
            <div class="ci-qty" role="group" [attr.aria-label]="line.name + ' quantity'">\r
              <button type="button" [attr.aria-label]="'Decrease ' + line.name + ' quantity'" [disabled]="line.qty === 1" (click)="dec(line)">&minus;</button>\r
              <input xhQuantityInput [attr.aria-label]="'Quantity for ' + line.name + ' quantity'" [quantityValue]="line.qty" (quantityChange)="cart.setQty(line.name, $event)" />\r
              <button type="button" [attr.aria-label]="'Increase ' + line.name + ' quantity'" (click)="inc(line)">+</button>\r
            </div>\r
            <button class="ci-rm" aria-label="Remove" (click)="remove(line)">\u{1F5D1}</button>\r
          </li>\r
        }\r
      </ul>\r
    </div>\r
\r
    @if (!cart.isEmpty()) {\r
      <div class="cart-foot" id="cartFoot">\r
        @if (isSiteLockPage()) {\r
          <a\r
            class="btn atc"\r
            id="goCheckout"\r
            style="width: 100%"\r
            [href]="siteLockCheckoutUrl"\r
            target="_blank"\r
            rel="noopener"\r
          >\r
            Proceed to Checkout \u2192\r
          </a>\r
        } @else {\r
          <button class="btn atc" id="goCheckout" style="width: 100%" (click)="toCheckout()">\r
            Proceed to Checkout \u2192\r
          </button>\r
        }\r
        <a class="btn cart-wa" id="cartWA" [href]="whatsapp()" target="_blank" rel="noopener"\r
          >or Quick Quote on WhatsApp</a\r
        >\r
      </div>\r
    }\r
  }\r
\r
  <!-- STEP 2: customer details -->\r
  @if (cart.showCheckout() && !done()) {\r
    <div class="cart-step" id="ckForm" [formGroup]="form">\r
      <div class="cart-body">\r
        <div class="ck-head">Checkout \u2014 your details</div>\r
        <label class="ck-l"\r
          >Full name *<input\r
            class="ck-i"\r
            id="ckName"\r
            formControlName="name"\r
            placeholder="Rajesh Patel"\r
        /></label>\r
        <label class="ck-l"\r
          >Company<input\r
            class="ck-i"\r
            id="ckCo"\r
            formControlName="company"\r
            placeholder="Patel Industries Pvt Ltd"\r
        /></label>\r
        <label class="ck-l"\r
          >Email *<input\r
            class="ck-i"\r
            id="ckEmail"\r
            type="email"\r
            formControlName="email"\r
            placeholder="rajesh@company.com"\r
        /></label>\r
        <label class="ck-l"\r
          >Phone / WhatsApp *<input\r
            class="ck-i"\r
            id="ckPhone"\r
            type="tel"\r
            formControlName="phone"\r
            placeholder="+91 98XXXXXXXX"\r
        /></label>\r
        <label class="ck-l"\r
          >GSTIN (optional)<input\r
            class="ck-i"\r
            id="ckGst"\r
            formControlName="gstin"\r
            placeholder="27XXXXXXXXXXXXX"\r
        /></label>\r
        <div class="ck-l" style="margin-bottom: 4px">Payment link will be sent to:</div>\r
        <div class="ck-channels">\r
          <span class="ck-ch">\u{1F4E7} Email</span><span class="ck-ch wa">\u{1F4AC} WhatsApp</span>\r
        </div>\r
        <div class="ck-err" id="ckErr">{{ error() }}</div>\r
      </div>\r
      <div class="cart-foot">\r
        <button\r
          class="btn atc"\r
          id="ckSubmit"\r
          style="width: 100%"\r
          [class.ck-busy]="busy()"\r
          (click)="submit()"\r
        >\r
          {{ submitLabel() }}\r
        </button>\r
        <button class="btn btn-ghost" id="ckBack" style="width: 100%" (click)="back()">\r
          \u2190 Back to cart\r
        </button>\r
        <p class="cart-draft">\r
          \u{1F512} On submit, a Zoho Books estimate is created with your items and a payment link (UPI \xB7\r
          Cards \xB7 NetBanking) is sent to your email &amp; WhatsApp.\r
        </p>\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- STEP 3: success -->\r
  @if (done()) {\r
    <div class="cart-step" id="ckDone">\r
      <div\r
        class="cart-body"\r
        style="\r
          display: flex;\r
          flex-direction: column;\r
          align-items: center;\r
          justify-content: center;\r
          text-align: center;\r
          gap: 12px;\r
        "\r
      >\r
        <div class="ck-tick">\u2713</div>\r
        <b style="font-family: var(--disp); font-size: 19px; color: var(--navy)">Order received!</b>\r
        <span style="font-size: 14px; color: var(--slate); max-width: 30ch"\r
          >Your <b>Zoho Books estimate</b> is being created. The payment link will arrive on your\r
          <b>email &amp; WhatsApp</b> within minutes.</span\r
        >\r
        <span class="ck-ref" id="ckRef">Ref: {{ reference() }}</span>\r
        <p class="cart-draft" style="margin-top: 14px">\r
          \u{1F4DD} Draft mode: no real order was created. On the live site this fires the Zoho pipeline\r
          automatically (spec attached).\r
        </p>\r
      </div>\r
      <div class="cart-foot">\r
        <button class="btn btn-ghost" id="ckClose" style="width: 100%" (click)="finish()">\r
          Done\r
        </button>\r
      </div>\r
    </div>\r
  }\r
</aside>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartDrawerComponent, { className: "CartDrawerComponent", filePath: "src/app/overlays/cart-drawer.component.ts", lineNumber: 40 });
})();

// src/app/overlays/trial-modal.component.ts
function TrialModalComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6);
    \u0275\u0275text(2, "\u{1F381} FREE TRIAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 7);
    \u0275\u0275text(4, "Start your free trial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, " No payment needed. Login details arrive on ");
    \u0275\u0275elementStart(7, "b");
    \u0275\u0275text(8, "Email + WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 9);
    \u0275\u0275text(11, "Product");
    \u0275\u0275element(12, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 9);
    \u0275\u0275text(14, "Full name *");
    \u0275\u0275element(15, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 9);
    \u0275\u0275text(17, "Work email *");
    \u0275\u0275element(18, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 9);
    \u0275\u0275text(20, "Phone / WhatsApp *");
    \u0275\u0275element(21, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 9);
    \u0275\u0275text(23, "Company");
    \u0275\u0275element(24, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 16);
    \u0275\u0275listener("click", function TrialModalComponent_Conditional_0_Conditional_5_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p", 17);
    \u0275\u0275text(30, " \u{1F512} Trial provisioning is handled by our team \u2014 you'll be contacted on WhatsApp to complete setup. No card required. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275classProp("ck-busy", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitLabel(), " ");
  }
}
function TrialModalComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 18);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 19);
    \u0275\u0275text(4, "Trial request received!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, " We're provisioning your trial of ");
    \u0275\u0275elementStart(7, "b", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ".");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, "Setup details will arrive on: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 21)(13, "span", 22);
    \u0275\u0275text(14, "\u{1F4E7} Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 23);
    \u0275\u0275text(16, "\u{1F4AC} WhatsApp");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "span", 24);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 25);
    \u0275\u0275listener("click", function TrialModalComponent_Conditional_0_Conditional_6_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(20, " Done ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.product());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("Ref: ", ctx_r1.reference());
  }
}
function TrialModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function TrialModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function TrialModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdrop($event));
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function TrialModalComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, TrialModalComponent_Conditional_0_Conditional_5_Template, 31, 5, "div", 4)(6, TrialModalComponent_Conditional_0_Conditional_6_Template, 21, 2, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.done() ? 5 : 6);
  }
}
var SUBMIT_LABEL2 = "Activate My Free Trial";
var DEFAULT_PRODUCT = "General trial request";
var TrialModalComponent = class _TrialModalComponent {
  overlay = inject(OverlayService);
  leads = inject(LeadService);
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    product: [""],
    name: ["", Validators.required],
    email: ["", EMAIL_VALIDATORS],
    phone: ["", PHONE_VALIDATORS],
    company: [""]
  });
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  done = signal(false, ...ngDevMode ? [{ debugName: "done" }] : []);
  reference = signal("", ...ngDevMode ? [{ debugName: "reference" }] : []);
  /** The product named on the confirmation panel (`#trDoneProd`). */
  product = signal(DEFAULT_PRODUCT, ...ngDevMode ? [{ debugName: "product" }] : []);
  submitLabel = computed(() => this.busy() ? "Setting up your trial\u2026" : SUBMIT_LABEL2, ...ngDevMode ? [{ debugName: "submitLabel" }] : []);
  constructor() {
    effect(() => {
      if (this.overlay.isOpen("trial"))
        this.reset();
    });
  }
  /**
   * The `.trial` layer sits above `.tr-back` in the stacking order, so the
   * backdrop never receives the click itself. Close only when the press
   * landed on the layer rather than inside the card.
   */
  onBackdrop(ev) {
    if (ev.target === ev.currentTarget)
      this.close();
  }
  close() {
    this.overlay.close("trial");
  }
  async submit() {
    if (this.busy())
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set(firstError(Object.values(this.form.controls), "Please fill name, email and phone."));
      return;
    }
    this.error.set("");
    this.busy.set(true);
    const v = this.form.getRawValue();
    const product = v.product.trim() || DEFAULT_PRODUCT;
    const result = await this.leads.submit("trial", {
      product,
      customer: { name: v.name, email: v.email, phone: v.phone, company: v.company },
      delivery: ["email", "whatsapp"],
      zoho: { org_id: ZOHO_ORG_ID, action: "create_trial_lead" }
    });
    this.busy.set(false);
    if (!result.ok && !result.skipped) {
      this.error.set("Connection issue \u2014 please WhatsApp us instead.");
      return;
    }
    this.product.set(product);
    this.reference.set(result.ref);
    this.done.set(true);
  }
  reset() {
    this.done.set(false);
    this.busy.set(false);
    this.error.set("");
    this.form.reset();
  }
  static \u0275fac = function TrialModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrialModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrialModalComponent, selectors: [["xh-trial-modal"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [["id", "trBack", 1, "tr-back", "open", 3, "click"], ["id", "trial", "role", "dialog", "aria-modal", "true", "aria-labelledby", "trTitle", 1, "trial", "open", 3, "click"], ["id", "trCard", 1, "tr-card"], ["id", "trX", "aria-label", "Close", 1, "cart-x", "tr-x", 3, "click"], ["id", "trForm", 1, "tr-step", 3, "formGroup"], ["id", "trDone", 1, "tr-step", 2, "text-align", "center"], [1, "tr-badge"], ["id", "trTitle", 1, "tr-title"], [1, "tr-sub"], [1, "ck-l"], ["id", "trProduct", "formControlName", "product", "placeholder", "e.g. Tally on Cloud", 1, "ck-i"], ["id", "trName", "formControlName", "name", "placeholder", "Rajesh Patel", 1, "ck-i"], ["id", "trEmail", "type", "email", "formControlName", "email", "placeholder", "rajesh@company.com", 1, "ck-i"], ["id", "trPhone", "type", "tel", "formControlName", "phone", "placeholder", "+91 98XXXXXXXX", 1, "ck-i"], ["id", "trCo", "formControlName", "company", "placeholder", "Patel Industries Pvt Ltd", 1, "ck-i"], ["id", "trErr", 1, "ck-err"], ["id", "trSubmit", 1, "btn", "atc", 2, "width", "100%", 3, "click"], [1, "cart-draft", 2, "margin-top", "10px"], [1, "ck-tick", 2, "margin", "0 auto"], ["id", "trTitle", 1, "tr-title", 2, "margin-top", "14px"], ["id", "trDoneProd"], [1, "tr-channels"], [1, "tr-ch"], [1, "tr-ch", "wa"], ["id", "trRef", 1, "ck-ref", 2, "display", "inline-block", "margin-top", "12px"], ["id", "trClose", 1, "btn", "btn-ghost", 2, "width", "100%", "margin-top", "16px", 3, "click"]], template: function TrialModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, TrialModalComponent_Conditional_0_Template, 7, 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.overlay.isOpen("trial") ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrialModalComponent, [{
    type: Component,
    args: [{ selector: "xh-trial-modal", standalone: true, host: { style: "display:contents" }, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (overlay.isOpen('trial')) {\r
  <div class="tr-back open" id="trBack" (click)="close()"></div>\r
  <div class="trial open" id="trial" (click)="onBackdrop($event)" role="dialog" aria-modal="true" aria-labelledby="trTitle">\r
    <div class="tr-card" id="trCard">\r
      <button class="cart-x tr-x" id="trX" aria-label="Close" (click)="close()">\u2715</button>\r
\r
      @if (!done()) {\r
        <div class="tr-step" id="trForm" [formGroup]="form">\r
          <div class="tr-badge">\u{1F381} FREE TRIAL</div>\r
          <h3 class="tr-title" id="trTitle">Start your free trial</h3>\r
          <p class="tr-sub">\r
            No payment needed. Login details arrive on <b>Email + WhatsApp</b>.\r
          </p>\r
          <label class="ck-l"\r
            >Product<input\r
              class="ck-i"\r
              id="trProduct"\r
              formControlName="product"\r
              placeholder="e.g. Tally on Cloud"\r
          /></label>\r
          <label class="ck-l"\r
            >Full name *<input\r
              class="ck-i"\r
              id="trName"\r
              formControlName="name"\r
              placeholder="Rajesh Patel"\r
          /></label>\r
          <label class="ck-l"\r
            >Work email *<input\r
              class="ck-i"\r
              id="trEmail"\r
              type="email"\r
              formControlName="email"\r
              placeholder="rajesh@company.com"\r
          /></label>\r
          <label class="ck-l"\r
            >Phone / WhatsApp *<input\r
              class="ck-i"\r
              id="trPhone"\r
              type="tel"\r
              formControlName="phone"\r
              placeholder="+91 98XXXXXXXX"\r
          /></label>\r
          <label class="ck-l"\r
            >Company<input\r
              class="ck-i"\r
              id="trCo"\r
              formControlName="company"\r
              placeholder="Patel Industries Pvt Ltd"\r
          /></label>\r
          <div class="ck-err" id="trErr">{{ error() }}</div>\r
          <button\r
            class="btn atc"\r
            id="trSubmit"\r
            style="width: 100%"\r
            [class.ck-busy]="busy()"\r
            (click)="submit()"\r
          >\r
            {{ submitLabel() }}\r
          </button>\r
          <p class="cart-draft" style="margin-top: 10px">\r
            \u{1F512} Trial provisioning is handled by our team \u2014 you'll be contacted on WhatsApp to\r
            complete setup. No card required.\r
          </p>\r
        </div>\r
      } @else {\r
        <div class="tr-step" id="trDone" style="text-align: center">\r
          <div class="ck-tick" style="margin: 0 auto">\u2713</div>\r
          <h3 class="tr-title" id="trTitle" style="margin-top: 14px">Trial request received!</h3>\r
          <p class="tr-sub">\r
            We're provisioning your trial of <b id="trDoneProd">{{ product() }}</b\r
            >.<br />Setup details will arrive on:\r
          </p>\r
          <div class="tr-channels">\r
            <span class="tr-ch">\u{1F4E7} Email</span>\r
            <span class="tr-ch wa">\u{1F4AC} WhatsApp</span>\r
          </div>\r
          <span class="ck-ref" id="trRef" style="display: inline-block; margin-top: 12px"\r
            >Ref: {{ reference() }}</span\r
          >\r
          <button\r
            class="btn btn-ghost"\r
            id="trClose"\r
            style="width: 100%; margin-top: 16px"\r
            (click)="close()"\r
          >\r
            Done\r
          </button>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
}\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrialModalComponent, { className: "TrialModalComponent", filePath: "src/app/overlays/trial-modal.component.ts", lineNumber: 25 });
})();

// src/app/overlays/auth-modal.component.ts
var _forTrack02 = ($index, $item) => $item.title;
function AuthModalComponent_Conditional_0_For_23_Conditional_0_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r3);
  }
}
function AuthModalComponent_Conditional_0_For_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275repeaterCreate(8, AuthModalComponent_Conditional_0_For_23_Conditional_0_For_9_Template, 3, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r4.eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r4.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(service_r4.tags);
  }
}
function AuthModalComponent_Conditional_0_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AuthModalComponent_Conditional_0_For_23_Conditional_0_Template, 10, 3, "div", 21);
  }
  if (rf & 2) {
    const \u0275$index_40_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.activeService() === \u0275$index_40_r5 ? 0 : -1);
  }
}
function AuthModalComponent_Conditional_0_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_For_26_Template_button_click_0_listener() {
      const \u0275$index_63_r7 = \u0275\u0275restoreView(_r6).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setService(\u0275$index_63_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r8 = ctx.$implicit;
    const \u0275$index_63_r7 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeService() === \u0275$index_63_r7);
    \u0275\u0275attribute("aria-label", "Show " + service_r8.title);
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter at least two characters.");
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Last name is required.");
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a valid work email.");
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a valid phone number.");
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Company name is required.");
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Use 8+ characters with an uppercase letter and number.");
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.form.hasError("passwordMismatch") ? "Passwords do not match." : "Please confirm your password.");
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 41);
    \u0275\u0275text(1, "You must accept the terms to continue.");
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 24)(1, "span");
    \u0275\u0275text(2, "Customer account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 25);
    \u0275\u0275text(4, "Create your account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Get started with XcellHost cloud services.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 26);
    \u0275\u0275listener("ngSubmit", function AuthModalComponent_Conditional_0_Conditional_41_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "div", 27)(9, "label")(10, "span");
    \u0275\u0275text(11, "First Name ");
    \u0275\u0275elementStart(12, "i");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "input", 28);
    \u0275\u0275conditionalCreate(15, AuthModalComponent_Conditional_0_Conditional_41_Conditional_15_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label")(17, "span");
    \u0275\u0275text(18, "Last Name ");
    \u0275\u0275elementStart(19, "i");
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(21, "input", 29);
    \u0275\u0275conditionalCreate(22, AuthModalComponent_Conditional_0_Conditional_41_Conditional_22_Template, 2, 0, "small");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "label")(24, "span");
    \u0275\u0275text(25, "Work Email ");
    \u0275\u0275elementStart(26, "i");
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(28, "input", 30);
    \u0275\u0275conditionalCreate(29, AuthModalComponent_Conditional_0_Conditional_41_Conditional_29_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 27)(31, "label")(32, "span");
    \u0275\u0275text(33, "Mobile / WhatsApp ");
    \u0275\u0275elementStart(34, "i");
    \u0275\u0275text(35, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(36, "input", 31);
    \u0275\u0275conditionalCreate(37, AuthModalComponent_Conditional_0_Conditional_41_Conditional_37_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "label")(39, "span");
    \u0275\u0275text(40, "Company Name ");
    \u0275\u0275elementStart(41, "i");
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "input", 32);
    \u0275\u0275conditionalCreate(44, AuthModalComponent_Conditional_0_Conditional_41_Conditional_44_Template, 2, 0, "small");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "label")(46, "span");
    \u0275\u0275text(47, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 27)(50, "label")(51, "span");
    \u0275\u0275text(52, "Password ");
    \u0275\u0275elementStart(53, "i");
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "span", 34);
    \u0275\u0275element(56, "input", 35);
    \u0275\u0275elementStart(57, "button", 23);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_Conditional_41_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(59, AuthModalComponent_Conditional_0_Conditional_41_Conditional_59_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "label")(61, "span");
    \u0275\u0275text(62, "Confirm Password ");
    \u0275\u0275elementStart(63, "i");
    \u0275\u0275text(64, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "span", 34);
    \u0275\u0275element(66, "input", 36);
    \u0275\u0275elementStart(67, "button", 23);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_Conditional_41_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleConfirmation());
    });
    \u0275\u0275text(68);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(69, AuthModalComponent_Conditional_0_Conditional_41_Conditional_69_Template, 2, 1, "small");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "label", 37);
    \u0275\u0275element(71, "input", 38);
    \u0275\u0275elementStart(72, "span");
    \u0275\u0275text(73, "I agree to the ");
    \u0275\u0275elementStart(74, "a", 39);
    \u0275\u0275text(75, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, " and ");
    \u0275\u0275elementStart(77, "a", 40);
    \u0275\u0275text(78, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(80, AuthModalComponent_Conditional_0_Conditional_41_Conditional_80_Template, 2, 0, "small", 41);
    \u0275\u0275elementStart(81, "p", 42);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "button", 43);
    \u0275\u0275text(84, "Create Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p", 44);
    \u0275\u0275text(86, "Your password stays private and is never included in a sales or support request.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.form.controls.firstName.touched && ctx_r1.form.controls.firstName.invalid ? 15 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.form.controls.lastName.touched && ctx_r1.form.controls.lastName.invalid ? 22 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.form.controls.email.touched && ctx_r1.form.controls.email.invalid ? 29 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.form.controls.phone.touched && ctx_r1.form.controls.phone.invalid ? 37 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.form.controls.company.touched && ctx_r1.form.controls.company.invalid ? 44 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275property("type", ctx_r1.showPassword() ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.showPassword() ? "Hide password" : "Show password");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.showPassword() ? "Hide" : "Show");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.password.touched && ctx_r1.form.controls.password.invalid ? 59 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showConfirmation() ? "text" : "password");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r1.showConfirmation() ? "Hide confirmation" : "Show confirmation");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.showConfirmation() ? "Hide" : "Show");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.confirmPassword.touched && (ctx_r1.form.controls.confirmPassword.invalid || ctx_r1.form.hasError("passwordMismatch")) ? 69 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.form.controls.terms.touched && ctx_r1.form.controls.terms.invalid ? 80 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function AuthModalComponent_Conditional_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 20)(1, "span", 16);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 25);
    \u0275\u0275text(4, "Account request received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 23);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_Conditional_42_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8, "Done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Thank you, ", ctx_r1.form.controls.firstName.value, ". Our team will contact you with the next steps.");
  }
}
function AuthModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdrop($event));
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "aside", 3);
    \u0275\u0275element(4, "div", 4)(5, "img", 5);
    \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
    \u0275\u0275text(8, "XcellHost Cloud Platform");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2");
    \u0275\u0275text(10, "Enterprise cloud infrastructure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Managed cloud, cybersecurity and digital trust for 10,000+ businesses across India. ISO 27001 certified since 1999.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "section", 8)(14, "div", 9)(15, "span", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "button", 11);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextService(-1));
    });
    \u0275\u0275text(19, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 12);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextService(1));
    });
    \u0275\u0275text(21, "\u203A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(22, AuthModalComponent_Conditional_0_For_23_Template, 1, 1, null, null, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 13);
    \u0275\u0275repeaterCreate(25, AuthModalComponent_Conditional_0_For_26_Template, 1, 3, "button", 14, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 15);
    \u0275\u0275text(28, "More Services ");
    \u0275\u0275elementStart(29, "span", 16);
    \u0275\u0275text(30, "\u2197");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 17)(32, "span");
    \u0275\u0275text(33, "\u2713 Expert Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35, "\u2713 Knowledge Base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "\u2713 Easy Onboarding");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 18)(39, "button", 19);
    \u0275\u0275listener("click", function AuthModalComponent_Conditional_0_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(40, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, AuthModalComponent_Conditional_0_Conditional_41_Template, 87, 16)(42, AuthModalComponent_Conditional_0_Conditional_42_Template, 9, 1, "section", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.serviceSlides[ctx_r1.activeService()].icon);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.serviceSlides);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.serviceSlides);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(!ctx_r1.submitted() ? 41 : 42);
  }
}
var PASSWORD_PATTERN = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
var matchingPasswords = (group) => {
  const password = group.get("password")?.value;
  const confirmation = group.get("confirmPassword")?.value;
  return password && confirmation && password !== confirmation ? { passwordMismatch: true } : null;
};
var AuthModalComponent = class _AuthModalComponent {
  overlay = inject(OverlayService);
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    firstName: ["", [Validators.required, Validators.minLength(2)]],
    lastName: ["", Validators.required],
    email: ["", EMAIL_VALIDATORS],
    phone: ["", PHONE_VALIDATORS],
    company: ["", Validators.required],
    city: [""],
    password: ["", [Validators.required, Validators.pattern(PASSWORD_PATTERN)]],
    confirmPassword: ["", Validators.required],
    terms: [false, Validators.requiredTrue]
  }, { validators: matchingPasswords });
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  showConfirmation = signal(false, ...ngDevMode ? [{ debugName: "showConfirmation" }] : []);
  submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  activeService = signal(0, ...ngDevMode ? [{ debugName: "activeService" }] : []);
  serviceSlides = [
    { icon: "\u2601", eyebrow: "Managed Cloud Services", title: "Cloud Infrastructure", description: "Multi-cloud management across AWS, Azure, GCP and Oracle, backed by migration, monitoring, DevOps and a 24\xD77 NOC.", tags: ["AWS", "Azure", "GCP", "Oracle"] },
    { icon: "\u233E", eyebrow: "Cybersecurity Platform", title: "Managed SOC & Threat Defence", description: "Autonomous threat management, attack-surface monitoring, dark-web intelligence, brand protection and 24\xD77 SOC operations.", tags: ["SOC 24\xD77", "ATM", "Dark Web Intel"] },
    { icon: "\u25C6", eyebrow: "Endpoint Security", title: "Scrutiny EDR & DLP", description: "Endpoint detection and response with data-loss prevention, device control, email protection and DPDPA compliance.", tags: ["EDR", "DLP", "Cyberstanc"] },
    { icon: "\u25A3", eyebrow: "Data Protection", title: "Backup & Disaster Recovery", description: "Acronis Cyber Protect Cloud with geo-redundant disaster recovery, Microsoft 365 backup and one-click restore.", tags: ["Acronis", "M365 Backup", "Geo-DR"] },
    { icon: "\u25C7", eyebrow: "Digital Trust", title: "SSL & Certificate Management", description: "Multi-CA certificate lifecycle management with DigiCert, Sectigo and GlobalSign, including private PKI.", tags: ["DigiCert", "Sectigo", "GlobalSign"] },
    { icon: "\u2709", eyebrow: "Email Security", title: "DMARC+ Email Protection", description: "Valimail-powered DMARC enforcement with SPF and DKIM management, BEC protection and phishing defence.", tags: ["DMARC", "SPF / DKIM", "Valimail"] },
    { icon: "\u2713", eyebrow: "Compliance Platform", title: "SecureSetu \u2014 DPDPA Compliance", description: "End-to-end compliance with data mapping, consent management, DPIA and breach-notification workflows.", tags: ["DPDPA", "Consent Mgmt", "DPIA"] },
    { icon: "\u20B9", eyebrow: "Cloud ERP", title: "Tally on Cloud", description: "Access Tally ERP from any device with multi-user, multi-branch support, automatic backup and zero downtime.", tags: ["Tally ERP", "From \u20B9499", "Multi-User"] },
    { icon: "M", eyebrow: "Productivity & Collaboration", title: "Managed Microsoft 365", description: "Provisioning, migration, email backup, compliance and ongoing management of Microsoft 365 tenants.", tags: ["Microsoft 365", "Exchange", "Gold Partner"] },
    { icon: "\u25A4", eyebrow: "Infrastructure", title: "Performance Cloud & FileCloud", description: "High-performance VPS, dedicated cloud servers and enterprise file sharing across hybrid environments.", tags: ["VPS", "FileCloud", "Dedicated"] },
    { icon: "\u2B21", eyebrow: "SMB Security", title: "Cybird Security Appliance", description: "Plug-and-play cybersecurity for SMBs with firewall, UTM, VPN and threat prevention in one appliance.", tags: ["Firewall", "UTM", "Plug & Play"] },
    { icon: "\u2699", eyebrow: "Managed IT Services", title: "RMM, VAPT & IT Operations", description: "Remote monitoring, vulnerability testing, WhatsApp marketing and video surveillance as a service.", tags: ["RMM", "VAPT", "VSaaS", "WhatsApp"] }
  ];
  constructor() {
    effect((onCleanup) => {
      if (!this.overlay.isOpen("auth"))
        return;
      this.reset();
      const timer = setInterval(() => this.nextService(1), 4500);
      onCleanup(() => clearInterval(timer));
    });
  }
  onBackdrop(event) {
    if (event.target === event.currentTarget)
      this.close();
  }
  close() {
    this.overlay.close("auth");
  }
  togglePassword() {
    this.showPassword.update((show) => !show);
  }
  toggleConfirmation() {
    this.showConfirmation.update((show) => !show);
  }
  nextService(direction) {
    const length = this.serviceSlides.length;
    this.activeService.update((current) => (current + direction + length) % length);
  }
  setService(index) {
    this.activeService.set(index);
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set("Please correct the highlighted fields and accept the terms.");
      return;
    }
    this.error.set("");
    this.submitted.set(true);
  }
  reset() {
    this.form.reset();
    this.showPassword.set(false);
    this.showConfirmation.set(false);
    this.submitted.set(false);
    this.error.set("");
    this.activeService.set(0);
  }
  static \u0275fac = function AuthModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthModalComponent, selectors: [["xh-auth-modal"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [[1, "tr-back", "open", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "customer-auth-title", 1, "trial", "open", "customer-auth-layer", 3, "click"], [1, "tr-card", "customer-auth-modal"], [1, "customer-auth-showcase"], ["aria-hidden", "true", 1, "customer-showcase-grid"], ["src", "/assets/images/xcellhost-login-logo.png", "alt", "XcellHost \u2014 Cloud, Security and AI", 1, "customer-showcase-logo"], [1, "customer-showcase-content"], [1, "customer-showcase-badge"], ["aria-label", "XcellHost services", 1, "customer-service-carousel"], [1, "customer-carousel-top"], ["aria-hidden", "true", 1, "customer-carousel-icon"], ["type", "button", "aria-label", "Previous service", 3, "click"], ["type", "button", "aria-label", "Next service", 3, "click"], ["aria-label", "Choose service slide", 1, "customer-carousel-dots"], ["type", "button", 3, "active"], ["href", "/category/cloud", 1, "customer-more-services"], ["aria-hidden", "true"], ["aria-label", "Customer benefits", 1, "customer-showcase-benefits"], [1, "customer-auth-form-panel"], ["type", "button", "aria-label", "Close customer account form", 1, "customer-auth-close", 3, "click"], ["aria-live", "polite", 1, "customer-auth-success"], [1, "customer-service-slide"], [1, "customer-service-tags"], ["type", "button", 3, "click"], [1, "customer-auth-header"], ["id", "customer-auth-title"], ["novalidate", "", 1, "customer-auth-form", 3, "ngSubmit", "formGroup"], [1, "customer-auth-grid"], ["type", "text", "formControlName", "firstName", "autocomplete", "given-name", "placeholder", "Rajesh"], ["type", "text", "formControlName", "lastName", "autocomplete", "family-name", "placeholder", "Kumar"], ["type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com"], ["type", "tel", "formControlName", "phone", "autocomplete", "tel", "placeholder", "+91 98765 43210"], ["type", "text", "formControlName", "company", "autocomplete", "organization", "placeholder", "Company Pvt. Ltd."], ["type", "text", "formControlName", "city", "autocomplete", "address-level2", "placeholder", "Mumbai"], [1, "customer-password"], ["formControlName", "password", "autocomplete", "new-password", "placeholder", "Min. 8 characters", 3, "type"], ["formControlName", "confirmPassword", "autocomplete", "new-password", "placeholder", "Re-enter password", 3, "type"], [1, "customer-auth-terms"], ["type", "checkbox", "formControlName", "terms"], ["href", "/company/terms-of-service", "target", "_blank"], ["href", "/company/privacy-policy", "target", "_blank"], [1, "customer-terms-error"], ["role", "alert", 1, "customer-auth-error"], ["type", "submit", 1, "customer-auth-submit"], [1, "customer-auth-note"]], template: function AuthModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AuthModalComponent_Conditional_0_Template, 43, 2);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.overlay.isOpen("auth") ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.customer-auth-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(520px, .95fr);\n  width: min(1120px, 100%);\n  height: min(740px, calc(100vh - 40px));\n  max-height: none;\n  padding: 0;\n  border: 1px solid rgba(15, 35, 70, .08);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 28px 80px rgba(4, 30, 66, .28);\n}\n.customer-auth-showcase[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 27px 34px 25px;\n  background:\n    radial-gradient(\n      circle at 78% 18%,\n      rgba(59, 130, 246, .24),\n      transparent 35%),\n    radial-gradient(\n      circle at 8% 88%,\n      rgba(255, 140, 26, .12),\n      transparent 30%),\n    linear-gradient(\n      145deg,\n      #041e42 0%,\n      #062a5c 58%,\n      #041e42 100%);\n  color: #fff;\n}\n.customer-showcase-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: .18;\n  background-image:\n    linear-gradient(rgba(138, 180, 255, .11) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(138, 180, 255, .11) 1px,\n      transparent 1px);\n  background-size: 42px 42px;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom right,\n      #000,\n      transparent 72%);\n  mask-image:\n    linear-gradient(\n      to bottom right,\n      #000,\n      transparent 72%);\n}\n.customer-showcase-logo[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 190px;\n  height: auto;\n  margin-bottom: auto;\n}\n.customer-showcase-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 510px;\n  margin: 28px 0;\n}\n.customer-showcase-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 13px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #1565d8,\n      #3b82f6);\n  font-size: 10px;\n  font-weight: 800;\n}\n.customer-showcase-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0 0 9px;\n  color: #fff;\n  font-size: clamp(27px, 2.7vw, 39px);\n  line-height: 1.08;\n  letter-spacing: -.035em;\n}\n.customer-showcase-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 440px;\n  margin: 0 0 20px;\n  color: rgba(255, 255, 255, .58);\n  font-size: 13px;\n  line-height: 1.65;\n}\n.customer-service-carousel[_ngcontent-%COMP%] {\n  min-height: 222px;\n  padding: 17px 19px;\n  border: 1px solid rgba(138, 180, 255, .2);\n  border-radius: 13px;\n  background: rgba(255, 255, 255, .055);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .05);\n}\n.customer-carousel-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.customer-carousel-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid rgba(138, 180, 255, .34);\n  border-radius: 8px;\n  background: rgba(21, 101, 216, .25);\n  color: #fff;\n  font-size: 16px;\n}\n.customer-carousel-top[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.customer-carousel-top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 29px;\n  height: 29px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .13);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .04);\n  color: rgba(255, 255, 255, .62);\n  font-size: 18px;\n  cursor: pointer;\n}\n.customer-carousel-top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n  color: #fff;\n}\n.customer-service-slide[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_customerSlideIn .35s ease both;\n}\n.customer-service-slide[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #8ab4ff;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: .11em;\n  text-transform: uppercase;\n}\n.customer-service-slide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 3px 0 6px;\n  color: #fff;\n  font-size: 17px;\n}\n.customer-service-slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-height: 57px;\n  margin: 0 0 9px;\n  color: rgba(255, 255, 255, .56);\n  font-size: 11px;\n  line-height: 1.55;\n}\n.customer-service-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.customer-service-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, .055);\n  color: rgba(255, 255, 255, .67);\n  font-size: 9px;\n}\n.customer-service-tags[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #ff8c1a;\n}\n@keyframes _ngcontent-%COMP%_customerSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n.customer-carousel-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  margin: 11px 0;\n}\n.customer-carousel-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  padding: 0;\n  border: 0;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, .22);\n  transition: width .2s, background .2s;\n  cursor: pointer;\n}\n.customer-carousel-dots[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 16px;\n  background: #ff8c1a;\n}\n.customer-more-services[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  border: 1px solid rgba(255, 255, 255, .14);\n  border-radius: 6px;\n  color: rgba(255, 255, 255, .7);\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.customer-more-services[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, .3);\n  color: #fff;\n}\n.customer-showcase-benefits[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 20px;\n  margin-top: auto;\n  padding: 0;\n  background: transparent;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.4;\n}\n.customer-showcase-benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.customer-auth-form-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: auto;\n  padding: 32px 36px 26px;\n  background: #fff;\n}\n.customer-auth-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 16px;\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #334155;\n  font: 400 25px/1 Arial, sans-serif;\n  cursor: pointer;\n}\n.customer-auth-close[_ngcontent-%COMP%]:hover {\n  background: #e5edfa;\n  color: #0066ff;\n}\n.customer-auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  padding-right: 40px;\n}\n.customer-auth-header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 8px;\n  padding: 5px 10px;\n  border-radius: 6px;\n  background: #eaf2ff;\n  color: #0066ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.customer-auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #0b132b;\n  font-size: 27px;\n  line-height: 1.2;\n}\n.customer-auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.customer-auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 13px;\n}\n.customer-auth-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.customer-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.customer-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: block;\n  margin-bottom: 5px;\n  color: #56657b;\n  font-size: 12px;\n  font-weight: 700;\n}\n.customer-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-style: normal;\n}\n.customer-auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]) {\n  width: 100%;\n  padding: 11px 12px;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 8px;\n  outline: 0;\n  color: #1e293b;\n  background: #fff;\n  font: 500 13px/1.3 var(--body, Arial, sans-serif);\n  transition: border-color .18s, box-shadow .18s;\n}\n.customer-auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #a7b1c0;\n}\n.customer-auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):focus {\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, .13);\n}\n.customer-auth-form[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.customer-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%], \n.customer-terms-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #dc2626;\n  font-size: 10.5px;\n  line-height: 1.25;\n}\n.customer-password[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.customer-password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 52px !important;\n}\n.customer-password[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 9px;\n  padding: 3px;\n  border: 0;\n  background: transparent;\n  color: #64748b;\n  font-size: 10px;\n  font-weight: 700;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.customer-auth-terms[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 1px;\n}\n.customer-auth-terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-top: 2px;\n  flex: 0 0 auto;\n  accent-color: #0066ff;\n}\n.customer-auth-terms[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  font-size: 11px !important;\n  font-weight: 500 !important;\n  line-height: 1.45;\n}\n.customer-auth-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066ff;\n  font-weight: 700;\n}\n.customer-auth-error[_ngcontent-%COMP%] {\n  min-height: 16px;\n  margin: -2px 0 0;\n  color: #dc2626;\n  font-size: 11px;\n}\n.customer-auth-submit[_ngcontent-%COMP%], \n.customer-auth-success[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 18px;\n  border: 0;\n  border-radius: 8px;\n  background: #0066ff;\n  color: #fff;\n  font: 700 14px/1.2 var(--body, Arial, sans-serif);\n  box-shadow: 0 8px 20px rgba(0, 102, 255, .22);\n  cursor: pointer;\n}\n.customer-auth-submit[_ngcontent-%COMP%]:hover, \n.customer-auth-success[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #0057da;\n}\n.customer-auth-note[_ngcontent-%COMP%] {\n  margin: -3px 0 0;\n  color: #94a3b8;\n  font-size: 10.5px;\n  text-align: center;\n}\n.customer-auth-success[_ngcontent-%COMP%] {\n  padding: 44px 20px 34px;\n  text-align: center;\n}\n.customer-auth-success[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto 15px;\n  place-items: center;\n  border: 2px solid #22c55e;\n  border-radius: 50%;\n  background: #effcf4;\n  color: #16a34a;\n  font-size: 25px;\n}\n.customer-auth-success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #0b132b;\n  font-size: 24px;\n}\n.customer-auth-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto 22px;\n  max-width: 440px;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.55;\n}\n.customer-auth-success[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n@media (max-width: 640px) {\n  .customer-auth-layer[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .customer-auth-modal[_ngcontent-%COMP%] {\n    display: block;\n    height: auto;\n    max-height: calc(100vh - 20px);\n    border-radius: 15px;\n    overflow-y: auto;\n  }\n  .customer-auth-showcase[_ngcontent-%COMP%] {\n    min-height: 390px;\n    padding: 22px 18px;\n  }\n  .customer-showcase-logo[_ngcontent-%COMP%] {\n    width: 155px;\n  }\n  .customer-showcase-content[_ngcontent-%COMP%] {\n    margin: 22px 0 16px;\n  }\n  .customer-showcase-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .customer-showcase-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .customer-service-carousel[_ngcontent-%COMP%] {\n    min-height: 215px;\n  }\n  .customer-auth-form-panel[_ngcontent-%COMP%] {\n    overflow: visible;\n    padding: 27px 18px 22px;\n  }\n  .customer-auth-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .customer-auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\n@media (min-width: 641px) and (max-width: 900px) {\n  .customer-auth-modal[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, .85fr) minmax(450px, 1.15fr);\n  }\n  .customer-auth-showcase[_ngcontent-%COMP%] {\n    padding: 25px 24px;\n  }\n  .customer-showcase-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=auth-modal.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModalComponent, [{
    type: Component,
    args: [{ selector: "xh-auth-modal", standalone: true, host: { style: "display:contents" }, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (overlay.isOpen('auth')) {\r
  <div class="tr-back open" (click)="close()"></div>\r
  <div class="trial open customer-auth-layer" (click)="onBackdrop($event)" role="dialog" aria-modal="true" aria-labelledby="customer-auth-title">\r
    <div class="tr-card customer-auth-modal">\r
      <aside class="customer-auth-showcase">\r
        <div class="customer-showcase-grid" aria-hidden="true"></div>\r
        <img class="customer-showcase-logo" src="/assets/images/xcellhost-login-logo.png" alt="XcellHost \u2014 Cloud, Security and AI" />\r
\r
        <div class="customer-showcase-content">\r
          <span class="customer-showcase-badge">XcellHost Cloud Platform</span>\r
          <h2>Enterprise cloud infrastructure</h2>\r
          <p>Managed cloud, cybersecurity and digital trust for 10,000+ businesses across India. ISO 27001 certified since 1999.</p>\r
\r
          <section class="customer-service-carousel" aria-label="XcellHost services">\r
            <div class="customer-carousel-top">\r
              <span class="customer-carousel-icon" aria-hidden="true">{{ serviceSlides[activeService()].icon }}</span>\r
              <div>\r
                <button type="button" aria-label="Previous service" (click)="nextService(-1)">&#8249;</button>\r
                <button type="button" aria-label="Next service" (click)="nextService(1)">&#8250;</button>\r
              </div>\r
            </div>\r
            @for (service of serviceSlides; track service.title; let index = $index) {\r
              @if (activeService() === index) {\r
                <div class="customer-service-slide">\r
                  <span>{{ service.eyebrow }}</span>\r
                  <h3>{{ service.title }}</h3>\r
                  <p>{{ service.description }}</p>\r
                  <div class="customer-service-tags">\r
                    @for (tag of service.tags; track tag) {\r
                      <span><i aria-hidden="true"></i>{{ tag }}</span>\r
                    }\r
                  </div>\r
                </div>\r
              }\r
            }\r
          </section>\r
\r
          <div class="customer-carousel-dots" aria-label="Choose service slide">\r
            @for (service of serviceSlides; track service.title; let index = $index) {\r
              <button type="button" [class.active]="activeService() === index" [attr.aria-label]="'Show ' + service.title" (click)="setService(index)"></button>\r
            }\r
          </div>\r
          <a class="customer-more-services" href="/category/cloud">More Services <span aria-hidden="true">&#8599;</span></a>\r
        </div>\r
\r
        <div class="customer-showcase-benefits" aria-label="Customer benefits"><span>&#10003; Expert Support</span><span>&#10003; Knowledge Base</span><span>&#10003; Easy Onboarding</span></div>\r
      </aside>\r
\r
      <div class="customer-auth-form-panel">\r
        <button class="customer-auth-close" type="button" aria-label="Close customer account form" (click)="close()">&times;</button>\r
\r
        @if (!submitted()) {\r
          <header class="customer-auth-header">\r
            <span>Customer account</span>\r
            <h2 id="customer-auth-title">Create your account</h2>\r
            <p>Get started with XcellHost cloud services.</p>\r
          </header>\r
\r
          <form class="customer-auth-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
            <div class="customer-auth-grid">\r
              <label><span>First Name <i>*</i></span><input type="text" formControlName="firstName" autocomplete="given-name" placeholder="Rajesh" />\r
                @if (form.controls.firstName.touched && form.controls.firstName.invalid) { <small>Enter at least two characters.</small> }\r
              </label>\r
              <label><span>Last Name <i>*</i></span><input type="text" formControlName="lastName" autocomplete="family-name" placeholder="Kumar" />\r
                @if (form.controls.lastName.touched && form.controls.lastName.invalid) { <small>Last name is required.</small> }\r
              </label>\r
            </div>\r
\r
            <label><span>Work Email <i>*</i></span><input type="email" formControlName="email" autocomplete="email" placeholder="you@company.com" />\r
              @if (form.controls.email.touched && form.controls.email.invalid) { <small>Enter a valid work email.</small> }\r
            </label>\r
\r
            <div class="customer-auth-grid">\r
              <label><span>Mobile / WhatsApp <i>*</i></span><input type="tel" formControlName="phone" autocomplete="tel" placeholder="+91 98765 43210" />\r
                @if (form.controls.phone.touched && form.controls.phone.invalid) { <small>Enter a valid phone number.</small> }\r
              </label>\r
              <label><span>Company Name <i>*</i></span><input type="text" formControlName="company" autocomplete="organization" placeholder="Company Pvt. Ltd." />\r
                @if (form.controls.company.touched && form.controls.company.invalid) { <small>Company name is required.</small> }\r
              </label>\r
            </div>\r
\r
            <label><span>City</span><input type="text" formControlName="city" autocomplete="address-level2" placeholder="Mumbai" /></label>\r
\r
            <div class="customer-auth-grid">\r
              <label>\r
                <span>Password <i>*</i></span>\r
                <span class="customer-password"><input [type]="showPassword() ? 'text' : 'password'" formControlName="password" autocomplete="new-password" placeholder="Min. 8 characters" /><button type="button" [attr.aria-label]="showPassword() ? 'Hide password' : 'Show password'" (click)="togglePassword()">{{ showPassword() ? 'Hide' : 'Show' }}</button></span>\r
                @if (form.controls.password.touched && form.controls.password.invalid) { <small>Use 8+ characters with an uppercase letter and number.</small> }\r
              </label>\r
              <label>\r
                <span>Confirm Password <i>*</i></span>\r
                <span class="customer-password"><input [type]="showConfirmation() ? 'text' : 'password'" formControlName="confirmPassword" autocomplete="new-password" placeholder="Re-enter password" /><button type="button" [attr.aria-label]="showConfirmation() ? 'Hide confirmation' : 'Show confirmation'" (click)="toggleConfirmation()">{{ showConfirmation() ? 'Hide' : 'Show' }}</button></span>\r
                @if (form.controls.confirmPassword.touched && (form.controls.confirmPassword.invalid || form.hasError('passwordMismatch'))) { <small>{{ form.hasError('passwordMismatch') ? 'Passwords do not match.' : 'Please confirm your password.' }}</small> }\r
              </label>\r
            </div>\r
\r
            <label class="customer-auth-terms"><input type="checkbox" formControlName="terms" /><span>I agree to the <a href="/company/terms-of-service" target="_blank">Terms of Service</a> and <a href="/company/privacy-policy" target="_blank">Privacy Policy</a>.</span></label>\r
            @if (form.controls.terms.touched && form.controls.terms.invalid) { <small class="customer-terms-error">You must accept the terms to continue.</small> }\r
\r
            <p class="customer-auth-error" role="alert">{{ error() }}</p>\r
            <button class="customer-auth-submit" type="submit">Create Account</button>\r
            <p class="customer-auth-note">Your password stays private and is never included in a sales or support request.</p>\r
          </form>\r
        } @else {\r
          <section class="customer-auth-success" aria-live="polite">\r
            <span aria-hidden="true">&#10003;</span>\r
            <h2 id="customer-auth-title">Account request received</h2>\r
            <p>Thank you, {{ form.controls.firstName.value }}. Our team will contact you with the next steps.</p>\r
            <button type="button" (click)="close()">Done</button>\r
          </section>\r
        }\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ["/* src/app/overlays/auth-modal.component.css */\n.customer-auth-modal {\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(520px, .95fr);\n  width: min(1120px, 100%);\n  height: min(740px, calc(100vh - 40px));\n  max-height: none;\n  padding: 0;\n  border: 1px solid rgba(15, 35, 70, .08);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 28px 80px rgba(4, 30, 66, .28);\n}\n.customer-auth-showcase {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 27px 34px 25px;\n  background:\n    radial-gradient(\n      circle at 78% 18%,\n      rgba(59, 130, 246, .24),\n      transparent 35%),\n    radial-gradient(\n      circle at 8% 88%,\n      rgba(255, 140, 26, .12),\n      transparent 30%),\n    linear-gradient(\n      145deg,\n      #041e42 0%,\n      #062a5c 58%,\n      #041e42 100%);\n  color: #fff;\n}\n.customer-showcase-grid {\n  position: absolute;\n  inset: 0;\n  opacity: .18;\n  background-image:\n    linear-gradient(rgba(138, 180, 255, .11) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(138, 180, 255, .11) 1px,\n      transparent 1px);\n  background-size: 42px 42px;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom right,\n      #000,\n      transparent 72%);\n  mask-image:\n    linear-gradient(\n      to bottom right,\n      #000,\n      transparent 72%);\n}\n.customer-showcase-logo {\n  position: relative;\n  z-index: 1;\n  width: 190px;\n  height: auto;\n  margin-bottom: auto;\n}\n.customer-showcase-content {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 510px;\n  margin: 28px 0;\n}\n.customer-showcase-badge {\n  display: inline-flex;\n  margin-bottom: 13px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #1565d8,\n      #3b82f6);\n  font-size: 10px;\n  font-weight: 800;\n}\n.customer-showcase-content > h2 {\n  margin: 0 0 9px;\n  color: #fff;\n  font-size: clamp(27px, 2.7vw, 39px);\n  line-height: 1.08;\n  letter-spacing: -.035em;\n}\n.customer-showcase-content > p {\n  max-width: 440px;\n  margin: 0 0 20px;\n  color: rgba(255, 255, 255, .58);\n  font-size: 13px;\n  line-height: 1.65;\n}\n.customer-service-carousel {\n  min-height: 222px;\n  padding: 17px 19px;\n  border: 1px solid rgba(138, 180, 255, .2);\n  border-radius: 13px;\n  background: rgba(255, 255, 255, .055);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .05);\n}\n.customer-carousel-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.customer-carousel-icon {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid rgba(138, 180, 255, .34);\n  border-radius: 8px;\n  background: rgba(21, 101, 216, .25);\n  color: #fff;\n  font-size: 16px;\n}\n.customer-carousel-top > div {\n  display: flex;\n  gap: 5px;\n}\n.customer-carousel-top button {\n  display: grid;\n  width: 29px;\n  height: 29px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .13);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .04);\n  color: rgba(255, 255, 255, .62);\n  font-size: 18px;\n  cursor: pointer;\n}\n.customer-carousel-top button:hover {\n  background: rgba(255, 255, 255, .1);\n  color: #fff;\n}\n.customer-service-slide {\n  animation: customerSlideIn .35s ease both;\n}\n.customer-service-slide > span {\n  color: #8ab4ff;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: .11em;\n  text-transform: uppercase;\n}\n.customer-service-slide h3 {\n  margin: 3px 0 6px;\n  color: #fff;\n  font-size: 17px;\n}\n.customer-service-slide p {\n  min-height: 57px;\n  margin: 0 0 9px;\n  color: rgba(255, 255, 255, .56);\n  font-size: 11px;\n  line-height: 1.55;\n}\n.customer-service-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.customer-service-tags span {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, .055);\n  color: rgba(255, 255, 255, .67);\n  font-size: 9px;\n}\n.customer-service-tags i {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #ff8c1a;\n}\n@keyframes customerSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n.customer-carousel-dots {\n  display: flex;\n  gap: 5px;\n  margin: 11px 0;\n}\n.customer-carousel-dots button {\n  width: 5px;\n  height: 5px;\n  padding: 0;\n  border: 0;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, .22);\n  transition: width .2s, background .2s;\n  cursor: pointer;\n}\n.customer-carousel-dots button.active {\n  width: 16px;\n  background: #ff8c1a;\n}\n.customer-more-services {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  border: 1px solid rgba(255, 255, 255, .14);\n  border-radius: 6px;\n  color: rgba(255, 255, 255, .7);\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.customer-more-services:hover {\n  border-color: rgba(255, 255, 255, .3);\n  color: #fff;\n}\n.customer-showcase-benefits {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 20px;\n  margin-top: auto;\n  padding: 0;\n  background: transparent;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.4;\n}\n.customer-showcase-benefits span {\n  white-space: nowrap;\n}\n.customer-auth-form-panel {\n  position: relative;\n  overflow-y: auto;\n  padding: 32px 36px 26px;\n  background: #fff;\n}\n.customer-auth-close {\n  position: absolute;\n  top: 14px;\n  right: 16px;\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #334155;\n  font: 400 25px/1 Arial, sans-serif;\n  cursor: pointer;\n}\n.customer-auth-close:hover {\n  background: #e5edfa;\n  color: #0066ff;\n}\n.customer-auth-header {\n  margin-bottom: 22px;\n  padding-right: 40px;\n}\n.customer-auth-header > span {\n  display: inline-flex;\n  margin-bottom: 8px;\n  padding: 5px 10px;\n  border-radius: 6px;\n  background: #eaf2ff;\n  color: #0066ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.customer-auth-header h2 {\n  margin: 0 0 5px;\n  color: #0b132b;\n  font-size: 27px;\n  line-height: 1.2;\n}\n.customer-auth-header p {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.customer-auth-form {\n  display: grid;\n  gap: 13px;\n}\n.customer-auth-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.customer-auth-form label {\n  display: block;\n  min-width: 0;\n}\n.customer-auth-form label > span:first-child {\n  display: block;\n  margin-bottom: 5px;\n  color: #56657b;\n  font-size: 12px;\n  font-weight: 700;\n}\n.customer-auth-form label i {\n  color: #ef4444;\n  font-style: normal;\n}\n.customer-auth-form input:not([type=checkbox]) {\n  width: 100%;\n  padding: 11px 12px;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 8px;\n  outline: 0;\n  color: #1e293b;\n  background: #fff;\n  font: 500 13px/1.3 var(--body, Arial, sans-serif);\n  transition: border-color .18s, box-shadow .18s;\n}\n.customer-auth-form input::placeholder {\n  color: #a7b1c0;\n}\n.customer-auth-form input:not([type=checkbox]):focus {\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, .13);\n}\n.customer-auth-form input.ng-touched.ng-invalid {\n  border-color: #ef4444;\n}\n.customer-auth-form label > small,\n.customer-terms-error {\n  display: block;\n  margin-top: 4px;\n  color: #dc2626;\n  font-size: 10.5px;\n  line-height: 1.25;\n}\n.customer-password {\n  position: relative;\n  display: block;\n}\n.customer-password input {\n  padding-right: 52px !important;\n}\n.customer-password button {\n  position: absolute;\n  top: 50%;\n  right: 9px;\n  padding: 3px;\n  border: 0;\n  background: transparent;\n  color: #64748b;\n  font-size: 10px;\n  font-weight: 700;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.customer-auth-terms {\n  display: flex !important;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 1px;\n}\n.customer-auth-terms input {\n  width: 15px;\n  height: 15px;\n  margin-top: 2px;\n  flex: 0 0 auto;\n  accent-color: #0066ff;\n}\n.customer-auth-terms span {\n  color: #64748b !important;\n  font-size: 11px !important;\n  font-weight: 500 !important;\n  line-height: 1.45;\n}\n.customer-auth-terms a {\n  color: #0066ff;\n  font-weight: 700;\n}\n.customer-auth-error {\n  min-height: 16px;\n  margin: -2px 0 0;\n  color: #dc2626;\n  font-size: 11px;\n}\n.customer-auth-submit,\n.customer-auth-success button {\n  width: 100%;\n  padding: 12px 18px;\n  border: 0;\n  border-radius: 8px;\n  background: #0066ff;\n  color: #fff;\n  font: 700 14px/1.2 var(--body, Arial, sans-serif);\n  box-shadow: 0 8px 20px rgba(0, 102, 255, .22);\n  cursor: pointer;\n}\n.customer-auth-submit:hover,\n.customer-auth-success button:hover {\n  background: #0057da;\n}\n.customer-auth-note {\n  margin: -3px 0 0;\n  color: #94a3b8;\n  font-size: 10.5px;\n  text-align: center;\n}\n.customer-auth-success {\n  padding: 44px 20px 34px;\n  text-align: center;\n}\n.customer-auth-success > span {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto 15px;\n  place-items: center;\n  border: 2px solid #22c55e;\n  border-radius: 50%;\n  background: #effcf4;\n  color: #16a34a;\n  font-size: 25px;\n}\n.customer-auth-success h2 {\n  margin: 0 0 8px;\n  color: #0b132b;\n  font-size: 24px;\n}\n.customer-auth-success p {\n  margin: 0 auto 22px;\n  max-width: 440px;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.55;\n}\n.customer-auth-success button {\n  max-width: 260px;\n}\n@media (max-width: 640px) {\n  .customer-auth-layer {\n    padding: 10px;\n  }\n  .customer-auth-modal {\n    display: block;\n    height: auto;\n    max-height: calc(100vh - 20px);\n    border-radius: 15px;\n    overflow-y: auto;\n  }\n  .customer-auth-showcase {\n    min-height: 390px;\n    padding: 22px 18px;\n  }\n  .customer-showcase-logo {\n    width: 155px;\n  }\n  .customer-showcase-content {\n    margin: 22px 0 16px;\n  }\n  .customer-showcase-content > h2 {\n    font-size: 27px;\n  }\n  .customer-showcase-content > p {\n    font-size: 12px;\n  }\n  .customer-service-carousel {\n    min-height: 215px;\n  }\n  .customer-auth-form-panel {\n    overflow: visible;\n    padding: 27px 18px 22px;\n  }\n  .customer-auth-grid {\n    grid-template-columns: 1fr;\n  }\n  .customer-auth-header h2 {\n    font-size: 23px;\n  }\n}\n@media (min-width: 641px) and (max-width: 900px) {\n  .customer-auth-modal {\n    grid-template-columns: minmax(0, .85fr) minmax(450px, 1.15fr);\n  }\n  .customer-auth-showcase {\n    padding: 25px 24px;\n  }\n  .customer-showcase-content > h2 {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=auth-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthModalComponent, { className: "AuthModalComponent", filePath: "src/app/overlays/auth-modal.component.ts", lineNumber: 26 });
})();

// src/app/overlays/signin-modal.component.ts
var _forTrack03 = ($index, $item) => $item.title;
function SigninModalComponent_Conditional_0_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r3);
  }
}
function SigninModalComponent_Conditional_0_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function SigninModalComponent_Conditional_0_For_34_Template_button_click_0_listener() {
      const \u0275$index_61_r5 = \u0275\u0275restoreView(_r4).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setService(\u0275$index_61_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r6 = ctx.$implicit;
    const \u0275$index_61_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.activeService() === \u0275$index_61_r5);
    \u0275\u0275attribute("aria-label", "Show " + service_r6.title);
  }
}
function SigninModalComponent_Conditional_0_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function SigninModalComponent_Conditional_0_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function SigninModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function SigninModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function SigninModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdrop($event));
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "aside", 3);
    \u0275\u0275element(4, "div", 4)(5, "img", 5);
    \u0275\u0275elementStart(6, "div", 6)(7, "span", 7);
    \u0275\u0275text(8, "XcellHost Cloud Platform");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h2");
    \u0275\u0275text(10, "Enterprise cloud infrastructure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Managed cloud, cybersecurity and digital trust for 10,000+ businesses across India. ISO 27001 certified since 1999.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "section", 8)(14, "div", 9)(15, "span", 10);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "button", 11);
    \u0275\u0275listener("click", function SigninModalComponent_Conditional_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextService(-1));
    });
    \u0275\u0275text(19, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 12);
    \u0275\u0275listener("click", function SigninModalComponent_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextService(1));
    });
    \u0275\u0275text(21, "\u203A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 13)(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "h3");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 14);
    \u0275\u0275repeaterCreate(30, SigninModalComponent_Conditional_0_For_31_Template, 3, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 15);
    \u0275\u0275repeaterCreate(33, SigninModalComponent_Conditional_0_For_34_Template, 1, 3, "button", 16, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "a", 17);
    \u0275\u0275text(36, "More Services ");
    \u0275\u0275elementStart(37, "span", 18);
    \u0275\u0275text(38, "\u2197");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 19)(40, "span");
    \u0275\u0275text(41, "\u2713 Expert Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "\u2713 Knowledge Base");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "\u2713 Easy Onboarding");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 20)(47, "button", 21);
    \u0275\u0275listener("click", function SigninModalComponent_Conditional_0_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(48, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "header", 22)(50, "span");
    \u0275\u0275text(51, "Customer portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "h2", 23);
    \u0275\u0275text(53, "Welcome back");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p");
    \u0275\u0275text(55, "Sign in to access your cloud dashboard.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 24)(57, "button", 25)(58, "b", 26);
    \u0275\u0275text(59, "G");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " Google");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "button", 25)(62, "b", 27);
    \u0275\u0275text(63, "\u25CF");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 25)(66, "b", 28);
    \u0275\u0275text(67, "f");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, " Facebook");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 29)(70, "span");
    \u0275\u0275text(71, "or sign in with email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "form", 30);
    \u0275\u0275listener("ngSubmit", function SigninModalComponent_Conditional_0_Template_form_ngSubmit_72_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(73, "label")(74, "span");
    \u0275\u0275text(75, "Email address ");
    \u0275\u0275elementStart(76, "i");
    \u0275\u0275text(77, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(78, "input", 31);
    \u0275\u0275conditionalCreate(79, SigninModalComponent_Conditional_0_Conditional_79_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "label")(81, "span");
    \u0275\u0275text(82, "Password ");
    \u0275\u0275elementStart(83, "i");
    \u0275\u0275text(84, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "span", 32);
    \u0275\u0275element(86, "input", 33);
    \u0275\u0275elementStart(87, "button", 34);
    \u0275\u0275listener("click", function SigninModalComponent_Conditional_0_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.togglePassword());
    });
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(89, SigninModalComponent_Conditional_0_Conditional_89_Template, 2, 0, "small");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 35)(91, "label");
    \u0275\u0275element(92, "input", 36);
    \u0275\u0275text(93, " Remember me");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "a", 37);
    \u0275\u0275text(95, "Forgot password?");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "p", 38);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 39);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "p", 40);
    \u0275\u0275text(101, "New to XcellHost? ");
    \u0275\u0275elementStart(102, "a", 41);
    \u0275\u0275listener("click", function SigninModalComponent_Conditional_0_Template_a_click_102_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createAccount($event));
    });
    \u0275\u0275text(103, "Create an account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 42)(105, "a", 43);
    \u0275\u0275text(106, "Terms & Conditions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "span");
    \u0275\u0275text(108, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "a", 44);
    \u0275\u0275text(110, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "span");
    \u0275\u0275text(112, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "a", 45);
    \u0275\u0275text(114, "Get Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "small");
    \u0275\u0275text(116, "\xA9 2026 XcellHost Cloud Services Pvt. Ltd.");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate(ctx_r1.serviceSlides[ctx_r1.activeService()].icon);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.serviceSlides[ctx_r1.activeService()].eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.serviceSlides[ctx_r1.activeService()].title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.serviceSlides[ctx_r1.activeService()].description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.serviceSlides[ctx_r1.activeService()].tags);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.serviceSlides);
    \u0275\u0275advance(39);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.form.controls.email.touched && ctx_r1.form.controls.email.invalid ? 79 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("type", ctx_r1.showPassword() ? "text" : "password");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showPassword() ? "Hide" : "Show");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.password.touched && ctx_r1.form.controls.password.invalid ? 89 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.busy() ? "Signing in\u2026" : "Sign In");
  }
}
var SigninModalComponent = class _SigninModalComponent {
  overlay = inject(OverlayService);
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    email: ["", EMAIL_VALIDATORS],
    password: ["", Validators.required],
    remember: [false]
  });
  showPassword = signal(false, ...ngDevMode ? [{ debugName: "showPassword" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  activeService = signal(0, ...ngDevMode ? [{ debugName: "activeService" }] : []);
  serviceSlides = [
    { icon: "\u2601", eyebrow: "Managed Cloud Services", title: "Cloud Infrastructure", description: "Multi-cloud management across AWS, Azure, GCP and Oracle, backed by migration, monitoring, DevOps and a 24\xD77 NOC.", tags: ["AWS", "Azure", "GCP", "Oracle"] },
    { icon: "\u233E", eyebrow: "Cybersecurity Platform", title: "Managed SOC & Threat Defence", description: "Autonomous threat management, attack-surface monitoring, dark-web intelligence, brand protection and 24\xD77 SOC operations.", tags: ["SOC 24\xD77", "ATM", "Dark Web Intel"] },
    { icon: "\u25C6", eyebrow: "Endpoint Security", title: "Scrutiny EDR & DLP", description: "Endpoint detection and response with data-loss prevention, device control, email protection and DPDPA compliance.", tags: ["EDR", "DLP", "Cyberstanc"] },
    { icon: "\u25A3", eyebrow: "Data Protection", title: "Backup & Disaster Recovery", description: "Acronis Cyber Protect Cloud with geo-redundant disaster recovery, Microsoft 365 backup and one-click restore.", tags: ["Acronis", "M365 Backup", "Geo-DR"] }
  ];
  constructor() {
    effect((onCleanup) => {
      if (!this.overlay.isOpen("signin"))
        return;
      this.reset();
      const timer = setInterval(() => this.nextService(1), 4500);
      onCleanup(() => clearInterval(timer));
    });
  }
  onBackdrop(event) {
    if (event.target === event.currentTarget)
      this.close();
  }
  close() {
    this.overlay.close("signin");
  }
  togglePassword() {
    this.showPassword.update((show) => !show);
  }
  nextService(direction) {
    this.activeService.update((current) => (current + direction + this.serviceSlides.length) % this.serviceSlides.length);
  }
  setService(index) {
    this.activeService.set(index);
  }
  createAccount(event) {
    event.preventDefault();
    this.close();
    this.overlay.open("auth");
  }
  async submit() {
    if (this.busy())
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set("Enter a valid email address and password.");
      return;
    }
    this.error.set("");
    this.busy.set(true);
    const value = this.form.getRawValue();
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: value.email.trim().toLowerCase(),
          password: value.password,
          remember: value.remember
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok)
        throw new Error(data.message || "Invalid email or password.");
      window.location.assign(data.redirectUrl || "/dashboard");
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : "Unable to sign in. Please try again.");
    } finally {
      this.busy.set(false);
    }
  }
  reset() {
    this.form.reset();
    this.showPassword.set(false);
    this.busy.set(false);
    this.error.set("");
    this.activeService.set(0);
  }
  static \u0275fac = function SigninModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SigninModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SigninModalComponent, selectors: [["xh-signin-modal"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [[1, "tr-back", "open", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "signin-title", 1, "trial", "open", "customer-auth-layer", 3, "click"], [1, "tr-card", "customer-auth-modal", "signin-modal"], [1, "customer-auth-showcase"], ["aria-hidden", "true", 1, "customer-showcase-grid"], ["src", "/assets/images/xcellhost-login-logo.png", "alt", "XcellHost \u2014 Cloud, Security and AI", 1, "customer-showcase-logo"], [1, "customer-showcase-content"], [1, "customer-showcase-badge"], ["aria-label", "XcellHost services", 1, "customer-service-carousel"], [1, "customer-carousel-top"], ["aria-hidden", "true", 1, "customer-carousel-icon"], ["type", "button", "aria-label", "Previous service", 3, "click"], ["type", "button", "aria-label", "Next service", 3, "click"], [1, "customer-service-slide"], [1, "customer-service-tags"], ["aria-label", "Choose service slide", 1, "customer-carousel-dots"], ["type", "button", 3, "active"], ["href", "/category/cloud", 1, "customer-more-services"], ["aria-hidden", "true"], [1, "customer-showcase-benefits"], [1, "customer-auth-form-panel", "signin-form-panel"], ["type", "button", "aria-label", "Close sign in form", 1, "customer-auth-close", 3, "click"], [1, "customer-auth-header"], ["id", "signin-title"], ["aria-label", "Social sign in options", 1, "signin-socials"], ["type", "button"], [1, "google-mark"], [1, "github-mark"], [1, "facebook-mark"], [1, "signin-divider"], ["novalidate", "", 1, "customer-auth-form", "signin-form", 3, "ngSubmit", "formGroup"], ["type", "email", "formControlName", "email", "autocomplete", "email", "placeholder", "you@company.com"], [1, "customer-password"], ["formControlName", "password", "autocomplete", "current-password", "placeholder", "Enter your password", 3, "type"], ["type", "button", 3, "click"], [1, "signin-options"], ["type", "checkbox", "formControlName", "remember"], ["href", "mailto:support@xcellhost.cloud?subject=Password%20reset"], ["role", "alert", 1, "customer-auth-error"], ["type", "submit", 1, "customer-auth-submit", 3, "disabled"], [1, "signin-create"], ["href", "#", 3, "click"], [1, "signin-footer"], ["href", "/company/terms-of-service"], ["href", "/company/privacy-policy"], ["href", "mailto:support@xcellhost.cloud"]], template: function SigninModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SigninModalComponent_Conditional_0_Template, 117, 12);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.overlay.isOpen("signin") ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.customer-auth-modal[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(520px, .95fr);\n  width: min(1120px, 100%);\n  height: min(740px, calc(100vh - 40px));\n  max-height: none;\n  padding: 0;\n  border: 1px solid rgba(15, 35, 70, .08);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 28px 80px rgba(4, 30, 66, .28);\n}\n.customer-auth-showcase[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 27px 34px 25px;\n  background:\n    radial-gradient(\n      circle at 78% 18%,\n      rgba(59, 130, 246, .24),\n      transparent 35%),\n    radial-gradient(\n      circle at 8% 88%,\n      rgba(255, 140, 26, .12),\n      transparent 30%),\n    linear-gradient(\n      145deg,\n      #041e42 0%,\n      #062a5c 58%,\n      #041e42 100%);\n  color: #fff;\n}\n.customer-showcase-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  opacity: .18;\n  background-image:\n    linear-gradient(rgba(138, 180, 255, .11) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(138, 180, 255, .11) 1px,\n      transparent 1px);\n  background-size: 42px 42px;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom right,\n      #000,\n      transparent 72%);\n  mask-image:\n    linear-gradient(\n      to bottom right,\n      #000,\n      transparent 72%);\n}\n.customer-showcase-logo[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 190px;\n  height: auto;\n  margin-bottom: auto;\n}\n.customer-showcase-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 510px;\n  margin: 28px 0;\n}\n.customer-showcase-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 13px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #1565d8,\n      #3b82f6);\n  font-size: 10px;\n  font-weight: 800;\n}\n.customer-showcase-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 0 0 9px;\n  color: #fff;\n  font-size: clamp(27px, 2.7vw, 39px);\n  line-height: 1.08;\n  letter-spacing: -.035em;\n}\n.customer-showcase-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 440px;\n  margin: 0 0 20px;\n  color: rgba(255, 255, 255, .58);\n  font-size: 13px;\n  line-height: 1.65;\n}\n.customer-service-carousel[_ngcontent-%COMP%] {\n  min-height: 222px;\n  padding: 17px 19px;\n  border: 1px solid rgba(138, 180, 255, .2);\n  border-radius: 13px;\n  background: rgba(255, 255, 255, .055);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .05);\n}\n.customer-carousel-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.customer-carousel-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid rgba(138, 180, 255, .34);\n  border-radius: 8px;\n  background: rgba(21, 101, 216, .25);\n  color: #fff;\n  font-size: 16px;\n}\n.customer-carousel-top[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.customer-carousel-top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 29px;\n  height: 29px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .13);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .04);\n  color: rgba(255, 255, 255, .62);\n  font-size: 18px;\n  cursor: pointer;\n}\n.customer-carousel-top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .1);\n  color: #fff;\n}\n.customer-service-slide[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_customerSlideIn .35s ease both;\n}\n.customer-service-slide[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #8ab4ff;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: .11em;\n  text-transform: uppercase;\n}\n.customer-service-slide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 3px 0 6px;\n  color: #fff;\n  font-size: 17px;\n}\n.customer-service-slide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-height: 57px;\n  margin: 0 0 9px;\n  color: rgba(255, 255, 255, .56);\n  font-size: 11px;\n  line-height: 1.55;\n}\n.customer-service-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.customer-service-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, .055);\n  color: rgba(255, 255, 255, .67);\n  font-size: 9px;\n}\n.customer-service-tags[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #ff8c1a;\n}\n@keyframes _ngcontent-%COMP%_customerSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n.customer-carousel-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n  margin: 11px 0;\n}\n.customer-carousel-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  padding: 0;\n  border: 0;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, .22);\n  transition: width .2s, background .2s;\n  cursor: pointer;\n}\n.customer-carousel-dots[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  width: 16px;\n  background: #ff8c1a;\n}\n.customer-more-services[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  border: 1px solid rgba(255, 255, 255, .14);\n  border-radius: 6px;\n  color: rgba(255, 255, 255, .7);\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.customer-more-services[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, .3);\n  color: #fff;\n}\n.customer-showcase-benefits[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 20px;\n  margin-top: auto;\n  padding: 0;\n  background: transparent;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.4;\n}\n.customer-showcase-benefits[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.customer-auth-form-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: auto;\n  padding: 32px 36px 26px;\n  background: #fff;\n}\n.customer-auth-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14px;\n  right: 16px;\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #334155;\n  font: 400 25px/1 Arial, sans-serif;\n  cursor: pointer;\n}\n.customer-auth-close[_ngcontent-%COMP%]:hover {\n  background: #e5edfa;\n  color: #0066ff;\n}\n.customer-auth-header[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  padding-right: 40px;\n}\n.customer-auth-header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 8px;\n  padding: 5px 10px;\n  border-radius: 6px;\n  background: #eaf2ff;\n  color: #0066ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.customer-auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #0b132b;\n  font-size: 27px;\n  line-height: 1.2;\n}\n.customer-auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.customer-auth-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 13px;\n}\n.customer-auth-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.customer-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.customer-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: block;\n  margin-bottom: 5px;\n  color: #56657b;\n  font-size: 12px;\n  font-weight: 700;\n}\n.customer-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-style: normal;\n}\n.customer-auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]) {\n  width: 100%;\n  padding: 11px 12px;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 8px;\n  outline: 0;\n  color: #1e293b;\n  background: #fff;\n  font: 500 13px/1.3 var(--body, Arial, sans-serif);\n  transition: border-color .18s, box-shadow .18s;\n}\n.customer-auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #a7b1c0;\n}\n.customer-auth-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]):focus {\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, .13);\n}\n.customer-auth-form[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.customer-auth-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%], \n.customer-terms-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #dc2626;\n  font-size: 10.5px;\n  line-height: 1.25;\n}\n.customer-password[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.customer-password[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 52px !important;\n}\n.customer-password[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 9px;\n  padding: 3px;\n  border: 0;\n  background: transparent;\n  color: #64748b;\n  font-size: 10px;\n  font-weight: 700;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.customer-auth-terms[_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 1px;\n}\n.customer-auth-terms[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-top: 2px;\n  flex: 0 0 auto;\n  accent-color: #0066ff;\n}\n.customer-auth-terms[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b !important;\n  font-size: 11px !important;\n  font-weight: 500 !important;\n  line-height: 1.45;\n}\n.customer-auth-terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066ff;\n  font-weight: 700;\n}\n.customer-auth-error[_ngcontent-%COMP%] {\n  min-height: 16px;\n  margin: -2px 0 0;\n  color: #dc2626;\n  font-size: 11px;\n}\n.customer-auth-submit[_ngcontent-%COMP%], \n.customer-auth-success[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 18px;\n  border: 0;\n  border-radius: 8px;\n  background: #0066ff;\n  color: #fff;\n  font: 700 14px/1.2 var(--body, Arial, sans-serif);\n  box-shadow: 0 8px 20px rgba(0, 102, 255, .22);\n  cursor: pointer;\n}\n.customer-auth-submit[_ngcontent-%COMP%]:hover, \n.customer-auth-success[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #0057da;\n}\n.customer-auth-note[_ngcontent-%COMP%] {\n  margin: -3px 0 0;\n  color: #94a3b8;\n  font-size: 10.5px;\n  text-align: center;\n}\n.customer-auth-success[_ngcontent-%COMP%] {\n  padding: 44px 20px 34px;\n  text-align: center;\n}\n.customer-auth-success[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto 15px;\n  place-items: center;\n  border: 2px solid #22c55e;\n  border-radius: 50%;\n  background: #effcf4;\n  color: #16a34a;\n  font-size: 25px;\n}\n.customer-auth-success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #0b132b;\n  font-size: 24px;\n}\n.customer-auth-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto 22px;\n  max-width: 440px;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.55;\n}\n.customer-auth-success[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  max-width: 260px;\n}\n@media (max-width: 640px) {\n  .customer-auth-layer[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .customer-auth-modal[_ngcontent-%COMP%] {\n    display: block;\n    height: auto;\n    max-height: calc(100vh - 20px);\n    border-radius: 15px;\n    overflow-y: auto;\n  }\n  .customer-auth-showcase[_ngcontent-%COMP%] {\n    min-height: 390px;\n    padding: 22px 18px;\n  }\n  .customer-showcase-logo[_ngcontent-%COMP%] {\n    width: 155px;\n  }\n  .customer-showcase-content[_ngcontent-%COMP%] {\n    margin: 22px 0 16px;\n  }\n  .customer-showcase-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .customer-showcase-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .customer-service-carousel[_ngcontent-%COMP%] {\n    min-height: 215px;\n  }\n  .customer-auth-form-panel[_ngcontent-%COMP%] {\n    overflow: visible;\n    padding: 27px 18px 22px;\n  }\n  .customer-auth-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .customer-auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\n@media (min-width: 641px) and (max-width: 900px) {\n  .customer-auth-modal[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, .85fr) minmax(450px, 1.15fr);\n  }\n  .customer-auth-showcase[_ngcontent-%COMP%] {\n    padding: 25px 24px;\n  }\n  .customer-showcase-content[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=auth-modal.component.css.map */", '\n\n.signin-modal[_ngcontent-%COMP%] {\n  height: min(690px, calc(100vh - 40px));\n}\n.signin-form-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.signin-socials[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.signin-socials[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-width: 0;\n  padding: 9px 5px;\n  border: 1.5px solid #dfe6ed;\n  border-radius: 8px;\n  background: #fff;\n  color: #1e293b;\n  font: 600 12px/1.2 var(--body, Arial, sans-serif);\n  cursor: pointer;\n}\n.signin-socials[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #0066ff;\n  background: #fafcff;\n}\n.signin-socials[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: grid;\n  width: 17px;\n  height: 17px;\n  place-items: center;\n  font: 800 14px/1 Arial, sans-serif;\n}\n.google-mark[_ngcontent-%COMP%] {\n  color: #4285f4;\n}\n.github-mark[_ngcontent-%COMP%] {\n  color: #24292f;\n}\n.facebook-mark[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: #1877f2;\n  color: #fff;\n}\n.signin-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 16px 0;\n  color: #94a3b8;\n  font-size: 11px;\n}\n.signin-divider[_ngcontent-%COMP%]::before, \n.signin-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  height: 1px;\n  flex: 1;\n  background: #dfe6ed;\n}\n.signin-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin: 1px 0 3px;\n  color: #64748b;\n  font-size: 12px;\n}\n.signin-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  cursor: pointer;\n}\n.signin-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  accent-color: #0066ff;\n}\n.signin-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.signin-create[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.signin-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0066ff;\n  font-weight: 700;\n  text-decoration: none;\n}\n.signin-create[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n  color: #94a3b8;\n  font-size: 13px;\n  text-align: center;\n}\n.signin-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 5px 8px;\n  margin-top: auto;\n  padding-top: 18px;\n  color: #94a3b8;\n  font-size: 10px;\n}\n.signin-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 600;\n}\n.signin-footer[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n.customer-auth-submit[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: wait;\n}\n@media (max-width: 640px) {\n  .signin-modal[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .signin-socials[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .signin-footer[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=signin-modal.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SigninModalComponent, [{
    type: Component,
    args: [{ selector: "xh-signin-modal", standalone: true, host: { style: "display:contents" }, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (overlay.isOpen('signin')) {\r
  <div class="tr-back open" (click)="close()"></div>\r
  <div class="trial open customer-auth-layer" (click)="onBackdrop($event)" role="dialog" aria-modal="true" aria-labelledby="signin-title">\r
    <div class="tr-card customer-auth-modal signin-modal">\r
      <aside class="customer-auth-showcase">\r
        <div class="customer-showcase-grid" aria-hidden="true"></div>\r
        <img class="customer-showcase-logo" src="/assets/images/xcellhost-login-logo.png" alt="XcellHost \u2014 Cloud, Security and AI" />\r
        <div class="customer-showcase-content">\r
          <span class="customer-showcase-badge">XcellHost Cloud Platform</span>\r
          <h2>Enterprise cloud infrastructure</h2>\r
          <p>Managed cloud, cybersecurity and digital trust for 10,000+ businesses across India. ISO 27001 certified since 1999.</p>\r
          <section class="customer-service-carousel" aria-label="XcellHost services">\r
            <div class="customer-carousel-top">\r
              <span class="customer-carousel-icon" aria-hidden="true">{{ serviceSlides[activeService()].icon }}</span>\r
              <div><button type="button" aria-label="Previous service" (click)="nextService(-1)">&#8249;</button><button type="button" aria-label="Next service" (click)="nextService(1)">&#8250;</button></div>\r
            </div>\r
            <div class="customer-service-slide">\r
              <span>{{ serviceSlides[activeService()].eyebrow }}</span>\r
              <h3>{{ serviceSlides[activeService()].title }}</h3>\r
              <p>{{ serviceSlides[activeService()].description }}</p>\r
              <div class="customer-service-tags">@for (tag of serviceSlides[activeService()].tags; track tag) { <span><i aria-hidden="true"></i>{{ tag }}</span> }</div>\r
            </div>\r
          </section>\r
          <div class="customer-carousel-dots" aria-label="Choose service slide">@for (service of serviceSlides; track service.title; let index = $index) { <button type="button" [class.active]="activeService() === index" [attr.aria-label]="'Show ' + service.title" (click)="setService(index)"></button> }</div>\r
          <a class="customer-more-services" href="/category/cloud">More Services <span aria-hidden="true">&#8599;</span></a>\r
        </div>\r
        <div class="customer-showcase-benefits"><span>&#10003; Expert Support</span><span>&#10003; Knowledge Base</span><span>&#10003; Easy Onboarding</span></div>\r
      </aside>\r
\r
      <div class="customer-auth-form-panel signin-form-panel">\r
        <button class="customer-auth-close" type="button" aria-label="Close sign in form" (click)="close()">&times;</button>\r
        <header class="customer-auth-header">\r
          <span>Customer portal</span>\r
          <h2 id="signin-title">Welcome back</h2>\r
          <p>Sign in to access your cloud dashboard.</p>\r
        </header>\r
\r
        <div class="signin-socials" aria-label="Social sign in options">\r
          <button type="button"><b class="google-mark">G</b> Google</button>\r
          <button type="button"><b class="github-mark">&#9679;</b> GitHub</button>\r
          <button type="button"><b class="facebook-mark">f</b> Facebook</button>\r
        </div>\r
        <div class="signin-divider"><span>or sign in with email</span></div>\r
\r
        <form class="customer-auth-form signin-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
          <label><span>Email address <i>*</i></span><input type="email" formControlName="email" autocomplete="email" placeholder="you@company.com" />\r
            @if (form.controls.email.touched && form.controls.email.invalid) { <small>Enter a valid email address.</small> }\r
          </label>\r
          <label><span>Password <i>*</i></span><span class="customer-password"><input [type]="showPassword() ? 'text' : 'password'" formControlName="password" autocomplete="current-password" placeholder="Enter your password" /><button type="button" (click)="togglePassword()">{{ showPassword() ? 'Hide' : 'Show' }}</button></span>\r
            @if (form.controls.password.touched && form.controls.password.invalid) { <small>Password is required.</small> }\r
          </label>\r
          <div class="signin-options"><label><input type="checkbox" formControlName="remember" /> Remember me</label><a href="mailto:support@xcellhost.cloud?subject=Password%20reset">Forgot password?</a></div>\r
          <p class="customer-auth-error" role="alert">{{ error() }}</p>\r
          <button class="customer-auth-submit" type="submit" [disabled]="busy()">{{ busy() ? 'Signing in\u2026' : 'Sign In' }}</button>\r
        </form>\r
        <p class="signin-create">New to XcellHost? <a href="#" (click)="createAccount($event)">Create an account</a></p>\r
        <div class="signin-footer"><a href="/company/terms-of-service">Terms &amp; Conditions</a><span>\xB7</span><a href="/company/privacy-policy">Privacy Policy</a><span>\xB7</span><a href="mailto:support@xcellhost.cloud">Get Support</a><small>&copy; 2026 XcellHost Cloud Services Pvt. Ltd.</small></div>\r
      </div>\r
    </div>\r
  </div>\r
}\r
`, styles: ["/* src/app/overlays/auth-modal.component.css */\n.customer-auth-modal {\n  display: grid;\n  grid-template-columns: minmax(0, 1.05fr) minmax(520px, .95fr);\n  width: min(1120px, 100%);\n  height: min(740px, calc(100vh - 40px));\n  max-height: none;\n  padding: 0;\n  border: 1px solid rgba(15, 35, 70, .08);\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: 0 28px 80px rgba(4, 30, 66, .28);\n}\n.customer-auth-showcase {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  overflow: hidden;\n  padding: 27px 34px 25px;\n  background:\n    radial-gradient(\n      circle at 78% 18%,\n      rgba(59, 130, 246, .24),\n      transparent 35%),\n    radial-gradient(\n      circle at 8% 88%,\n      rgba(255, 140, 26, .12),\n      transparent 30%),\n    linear-gradient(\n      145deg,\n      #041e42 0%,\n      #062a5c 58%,\n      #041e42 100%);\n  color: #fff;\n}\n.customer-showcase-grid {\n  position: absolute;\n  inset: 0;\n  opacity: .18;\n  background-image:\n    linear-gradient(rgba(138, 180, 255, .11) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(138, 180, 255, .11) 1px,\n      transparent 1px);\n  background-size: 42px 42px;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom right,\n      #000,\n      transparent 72%);\n  mask-image:\n    linear-gradient(\n      to bottom right,\n      #000,\n      transparent 72%);\n}\n.customer-showcase-logo {\n  position: relative;\n  z-index: 1;\n  width: 190px;\n  height: auto;\n  margin-bottom: auto;\n}\n.customer-showcase-content {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 510px;\n  margin: 28px 0;\n}\n.customer-showcase-badge {\n  display: inline-flex;\n  margin-bottom: 13px;\n  padding: 5px 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #1565d8,\n      #3b82f6);\n  font-size: 10px;\n  font-weight: 800;\n}\n.customer-showcase-content > h2 {\n  margin: 0 0 9px;\n  color: #fff;\n  font-size: clamp(27px, 2.7vw, 39px);\n  line-height: 1.08;\n  letter-spacing: -.035em;\n}\n.customer-showcase-content > p {\n  max-width: 440px;\n  margin: 0 0 20px;\n  color: rgba(255, 255, 255, .58);\n  font-size: 13px;\n  line-height: 1.65;\n}\n.customer-service-carousel {\n  min-height: 222px;\n  padding: 17px 19px;\n  border: 1px solid rgba(138, 180, 255, .2);\n  border-radius: 13px;\n  background: rgba(255, 255, 255, .055);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .05);\n}\n.customer-carousel-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.customer-carousel-icon {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid rgba(138, 180, 255, .34);\n  border-radius: 8px;\n  background: rgba(21, 101, 216, .25);\n  color: #fff;\n  font-size: 16px;\n}\n.customer-carousel-top > div {\n  display: flex;\n  gap: 5px;\n}\n.customer-carousel-top button {\n  display: grid;\n  width: 29px;\n  height: 29px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, .13);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .04);\n  color: rgba(255, 255, 255, .62);\n  font-size: 18px;\n  cursor: pointer;\n}\n.customer-carousel-top button:hover {\n  background: rgba(255, 255, 255, .1);\n  color: #fff;\n}\n.customer-service-slide {\n  animation: customerSlideIn .35s ease both;\n}\n.customer-service-slide > span {\n  color: #8ab4ff;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: .11em;\n  text-transform: uppercase;\n}\n.customer-service-slide h3 {\n  margin: 3px 0 6px;\n  color: #fff;\n  font-size: 17px;\n}\n.customer-service-slide p {\n  min-height: 57px;\n  margin: 0 0 9px;\n  color: rgba(255, 255, 255, .56);\n  font-size: 11px;\n  line-height: 1.55;\n}\n.customer-service-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n.customer-service-tags span {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, .08);\n  border-radius: 5px;\n  background: rgba(255, 255, 255, .055);\n  color: rgba(255, 255, 255, .67);\n  font-size: 9px;\n}\n.customer-service-tags i {\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #ff8c1a;\n}\n@keyframes customerSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(12px);\n  }\n}\n.customer-carousel-dots {\n  display: flex;\n  gap: 5px;\n  margin: 11px 0;\n}\n.customer-carousel-dots button {\n  width: 5px;\n  height: 5px;\n  padding: 0;\n  border: 0;\n  border-radius: 5px;\n  background: rgba(255, 255, 255, .22);\n  transition: width .2s, background .2s;\n  cursor: pointer;\n}\n.customer-carousel-dots button.active {\n  width: 16px;\n  background: #ff8c1a;\n}\n.customer-more-services {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 6px 11px;\n  border: 1px solid rgba(255, 255, 255, .14);\n  border-radius: 6px;\n  color: rgba(255, 255, 255, .7);\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n}\n.customer-more-services:hover {\n  border-color: rgba(255, 255, 255, .3);\n  color: #fff;\n}\n.customer-showcase-benefits {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 20px;\n  margin-top: auto;\n  padding: 0;\n  background: transparent;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.4;\n}\n.customer-showcase-benefits span {\n  white-space: nowrap;\n}\n.customer-auth-form-panel {\n  position: relative;\n  overflow-y: auto;\n  padding: 32px 36px 26px;\n  background: #fff;\n}\n.customer-auth-close {\n  position: absolute;\n  top: 14px;\n  right: 16px;\n  display: grid;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  background: #f1f5f9;\n  color: #334155;\n  font: 400 25px/1 Arial, sans-serif;\n  cursor: pointer;\n}\n.customer-auth-close:hover {\n  background: #e5edfa;\n  color: #0066ff;\n}\n.customer-auth-header {\n  margin-bottom: 22px;\n  padding-right: 40px;\n}\n.customer-auth-header > span {\n  display: inline-flex;\n  margin-bottom: 8px;\n  padding: 5px 10px;\n  border-radius: 6px;\n  background: #eaf2ff;\n  color: #0066ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.customer-auth-header h2 {\n  margin: 0 0 5px;\n  color: #0b132b;\n  font-size: 27px;\n  line-height: 1.2;\n}\n.customer-auth-header p {\n  margin: 0;\n  color: #64748b;\n  font-size: 14px;\n}\n.customer-auth-form {\n  display: grid;\n  gap: 13px;\n}\n.customer-auth-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.customer-auth-form label {\n  display: block;\n  min-width: 0;\n}\n.customer-auth-form label > span:first-child {\n  display: block;\n  margin-bottom: 5px;\n  color: #56657b;\n  font-size: 12px;\n  font-weight: 700;\n}\n.customer-auth-form label i {\n  color: #ef4444;\n  font-style: normal;\n}\n.customer-auth-form input:not([type=checkbox]) {\n  width: 100%;\n  padding: 11px 12px;\n  border: 1.5px solid #cbd5e1;\n  border-radius: 8px;\n  outline: 0;\n  color: #1e293b;\n  background: #fff;\n  font: 500 13px/1.3 var(--body, Arial, sans-serif);\n  transition: border-color .18s, box-shadow .18s;\n}\n.customer-auth-form input::placeholder {\n  color: #a7b1c0;\n}\n.customer-auth-form input:not([type=checkbox]):focus {\n  border-color: #0066ff;\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, .13);\n}\n.customer-auth-form input.ng-touched.ng-invalid {\n  border-color: #ef4444;\n}\n.customer-auth-form label > small,\n.customer-terms-error {\n  display: block;\n  margin-top: 4px;\n  color: #dc2626;\n  font-size: 10.5px;\n  line-height: 1.25;\n}\n.customer-password {\n  position: relative;\n  display: block;\n}\n.customer-password input {\n  padding-right: 52px !important;\n}\n.customer-password button {\n  position: absolute;\n  top: 50%;\n  right: 9px;\n  padding: 3px;\n  border: 0;\n  background: transparent;\n  color: #64748b;\n  font-size: 10px;\n  font-weight: 700;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n.customer-auth-terms {\n  display: flex !important;\n  align-items: flex-start;\n  gap: 8px;\n  margin-top: 1px;\n}\n.customer-auth-terms input {\n  width: 15px;\n  height: 15px;\n  margin-top: 2px;\n  flex: 0 0 auto;\n  accent-color: #0066ff;\n}\n.customer-auth-terms span {\n  color: #64748b !important;\n  font-size: 11px !important;\n  font-weight: 500 !important;\n  line-height: 1.45;\n}\n.customer-auth-terms a {\n  color: #0066ff;\n  font-weight: 700;\n}\n.customer-auth-error {\n  min-height: 16px;\n  margin: -2px 0 0;\n  color: #dc2626;\n  font-size: 11px;\n}\n.customer-auth-submit,\n.customer-auth-success button {\n  width: 100%;\n  padding: 12px 18px;\n  border: 0;\n  border-radius: 8px;\n  background: #0066ff;\n  color: #fff;\n  font: 700 14px/1.2 var(--body, Arial, sans-serif);\n  box-shadow: 0 8px 20px rgba(0, 102, 255, .22);\n  cursor: pointer;\n}\n.customer-auth-submit:hover,\n.customer-auth-success button:hover {\n  background: #0057da;\n}\n.customer-auth-note {\n  margin: -3px 0 0;\n  color: #94a3b8;\n  font-size: 10.5px;\n  text-align: center;\n}\n.customer-auth-success {\n  padding: 44px 20px 34px;\n  text-align: center;\n}\n.customer-auth-success > span {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto 15px;\n  place-items: center;\n  border: 2px solid #22c55e;\n  border-radius: 50%;\n  background: #effcf4;\n  color: #16a34a;\n  font-size: 25px;\n}\n.customer-auth-success h2 {\n  margin: 0 0 8px;\n  color: #0b132b;\n  font-size: 24px;\n}\n.customer-auth-success p {\n  margin: 0 auto 22px;\n  max-width: 440px;\n  color: #64748b;\n  font-size: 14px;\n  line-height: 1.55;\n}\n.customer-auth-success button {\n  max-width: 260px;\n}\n@media (max-width: 640px) {\n  .customer-auth-layer {\n    padding: 10px;\n  }\n  .customer-auth-modal {\n    display: block;\n    height: auto;\n    max-height: calc(100vh - 20px);\n    border-radius: 15px;\n    overflow-y: auto;\n  }\n  .customer-auth-showcase {\n    min-height: 390px;\n    padding: 22px 18px;\n  }\n  .customer-showcase-logo {\n    width: 155px;\n  }\n  .customer-showcase-content {\n    margin: 22px 0 16px;\n  }\n  .customer-showcase-content > h2 {\n    font-size: 27px;\n  }\n  .customer-showcase-content > p {\n    font-size: 12px;\n  }\n  .customer-service-carousel {\n    min-height: 215px;\n  }\n  .customer-auth-form-panel {\n    overflow: visible;\n    padding: 27px 18px 22px;\n  }\n  .customer-auth-grid {\n    grid-template-columns: 1fr;\n  }\n  .customer-auth-header h2 {\n    font-size: 23px;\n  }\n}\n@media (min-width: 641px) and (max-width: 900px) {\n  .customer-auth-modal {\n    grid-template-columns: minmax(0, .85fr) minmax(450px, 1.15fr);\n  }\n  .customer-auth-showcase {\n    padding: 25px 24px;\n  }\n  .customer-showcase-content > h2 {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=auth-modal.component.css.map */\n", '/* src/app/overlays/signin-modal.component.css */\n.signin-modal {\n  height: min(690px, calc(100vh - 40px));\n}\n.signin-form-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.signin-socials {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n}\n.signin-socials button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  min-width: 0;\n  padding: 9px 5px;\n  border: 1.5px solid #dfe6ed;\n  border-radius: 8px;\n  background: #fff;\n  color: #1e293b;\n  font: 600 12px/1.2 var(--body, Arial, sans-serif);\n  cursor: pointer;\n}\n.signin-socials button:hover {\n  border-color: #0066ff;\n  background: #fafcff;\n}\n.signin-socials b {\n  display: grid;\n  width: 17px;\n  height: 17px;\n  place-items: center;\n  font: 800 14px/1 Arial, sans-serif;\n}\n.google-mark {\n  color: #4285f4;\n}\n.github-mark {\n  color: #24292f;\n}\n.facebook-mark {\n  border-radius: 50%;\n  background: #1877f2;\n  color: #fff;\n}\n.signin-divider {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 16px 0;\n  color: #94a3b8;\n  font-size: 11px;\n}\n.signin-divider::before,\n.signin-divider::after {\n  content: "";\n  height: 1px;\n  flex: 1;\n  background: #dfe6ed;\n}\n.signin-options {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin: 1px 0 3px;\n  color: #64748b;\n  font-size: 12px;\n}\n.signin-options label {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  cursor: pointer;\n}\n.signin-options input {\n  width: 15px;\n  height: 15px;\n  accent-color: #0066ff;\n}\n.signin-options a,\n.signin-create a,\n.signin-footer a {\n  color: #0066ff;\n  font-weight: 700;\n  text-decoration: none;\n}\n.signin-create {\n  margin: 15px 0 0;\n  color: #94a3b8;\n  font-size: 13px;\n  text-align: center;\n}\n.signin-footer {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 5px 8px;\n  margin-top: auto;\n  padding-top: 18px;\n  color: #94a3b8;\n  font-size: 10px;\n}\n.signin-footer a {\n  color: #64748b;\n  font-weight: 600;\n}\n.signin-footer small {\n  width: 100%;\n  text-align: center;\n}\n.customer-auth-submit:disabled {\n  opacity: .65;\n  cursor: wait;\n}\n@media (max-width: 640px) {\n  .signin-modal {\n    height: auto;\n  }\n  .signin-socials {\n    grid-template-columns: 1fr;\n  }\n  .signin-footer {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=signin-modal.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SigninModalComponent, { className: "SigninModalComponent", filePath: "src/app/overlays/signin-modal.component.ts", lineNumber: 16 });
})();

// src/app/overlays/partner-modal.component.ts
function PartnerModalComponent_Conditional_0_Conditional_5_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275property("value", t_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4);
  }
}
function PartnerModalComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6);
    \u0275\u0275text(2, " \u{1F91D} PARTNER PROGRAM ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 7);
    \u0275\u0275text(4, "Join us as a Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, " Resell the full XcellHost portfolio with recurring margins, technical backing and deal support. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label", 9);
    \u0275\u0275text(8, "Company name *");
    \u0275\u0275element(9, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label", 9);
    \u0275\u0275text(11, "Contact person *");
    \u0275\u0275element(12, "input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "label", 9);
    \u0275\u0275text(14, "Email *");
    \u0275\u0275element(15, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label", 9);
    \u0275\u0275text(17, "Phone / WhatsApp *");
    \u0275\u0275element(18, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "label", 9);
    \u0275\u0275text(20, "City");
    \u0275\u0275element(21, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 9);
    \u0275\u0275text(23, "Partner type * ");
    \u0275\u0275elementStart(24, "select", 15);
    \u0275\u0275repeaterCreate(25, PartnerModalComponent_Conditional_0_Conditional_5_For_26_Template, 2, 2, "option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "label", 9);
    \u0275\u0275text(28, "Which products interest you?");
    \u0275\u0275element(29, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 18);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "button", 19);
    \u0275\u0275listener("click", function PartnerModalComponent_Conditional_0_Conditional_5_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p", 20);
    \u0275\u0275text(35, " Our partner team responds within 1 business day on email & WhatsApp. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(25);
    \u0275\u0275repeater(ctx_r1.types);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275classProp("ck-busy", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitLabel(), " ");
  }
}
function PartnerModalComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 21);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 22);
    \u0275\u0275text(4, "Application received!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, "Our partner team will contact you within 1 business day.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 24);
    \u0275\u0275listener("click", function PartnerModalComponent_Conditional_0_Conditional_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(10, " Done ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Ref: ", ctx_r1.reference());
  }
}
function PartnerModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function PartnerModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function PartnerModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdrop($event));
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "button", 3);
    \u0275\u0275listener("click", function PartnerModalComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(4, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, PartnerModalComponent_Conditional_0_Conditional_5_Template, 36, 5, "div", 4)(6, PartnerModalComponent_Conditional_0_Conditional_6_Template, 11, 1, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(!ctx_r1.done() ? 5 : 6);
  }
}
var SUBMIT_LABEL3 = "Submit Partner Application";
var PARTNER_TYPES = [
  "Reseller / MSP",
  "MSSP (Security Services)",
  "System Integrator",
  "Referral / Affiliate",
  "Distributor",
  "Other"
];
var PartnerModalComponent = class _PartnerModalComponent {
  overlay = inject(OverlayService);
  leads = inject(LeadService);
  fb = inject(FormBuilder);
  types = PARTNER_TYPES;
  form = this.fb.nonNullable.group({
    company: ["", Validators.required],
    contact: ["", Validators.required],
    email: ["", EMAIL_VALIDATORS],
    phone: ["", PHONE_VALIDATORS],
    city: [""],
    type: [PARTNER_TYPES[0]],
    products: [""]
  });
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  done = signal(false, ...ngDevMode ? [{ debugName: "done" }] : []);
  reference = signal("", ...ngDevMode ? [{ debugName: "reference" }] : []);
  submitLabel = computed(() => this.busy() ? "Submitting\u2026" : SUBMIT_LABEL3, ...ngDevMode ? [{ debugName: "submitLabel" }] : []);
  constructor() {
    effect(() => {
      if (this.overlay.isOpen("partner"))
        this.reset();
    });
  }
  /**
   * The `.trial` layer sits above `.tr-back` in the stacking order, so the
   * backdrop never receives the click itself. Close only when the press
   * landed on the layer rather than inside the card.
   */
  onBackdrop(ev) {
    if (ev.target === ev.currentTarget)
      this.close();
  }
  close() {
    this.overlay.close("partner");
  }
  async submit() {
    if (this.busy())
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set(firstError(Object.values(this.form.controls), "Please fill all required fields."));
      return;
    }
    this.error.set("");
    this.busy.set(true);
    const v = this.form.getRawValue();
    const result = await this.leads.submit("partner", {
      partner: {
        company: v.company,
        contact: v.contact,
        email: v.email,
        phone: v.phone,
        city: v.city,
        partner_type: v.type,
        products: v.products
      },
      zoho: { action: "create_partner_lead" }
    });
    this.busy.set(false);
    if (!result.ok && !result.skipped) {
      this.error.set("Connection issue \u2014 please WhatsApp us instead.");
      return;
    }
    this.reference.set(result.ref);
    this.done.set(true);
  }
  reset() {
    this.done.set(false);
    this.busy.set(false);
    this.error.set("");
    this.form.reset();
  }
  static \u0275fac = function PartnerModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnerModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnerModalComponent, selectors: [["xh-partner-modal"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [["id", "pnBack", 1, "tr-back", "open", 3, "click"], ["id", "partner", "role", "dialog", "aria-modal", "true", "aria-labelledby", "pnTitle", 1, "trial", "open", 3, "click"], [1, "tr-card"], ["id", "pnX", "aria-label", "Close", 1, "cart-x", "tr-x", 3, "click"], ["id", "pnForm", 1, "pn-step", 3, "formGroup"], ["id", "pnDone", 1, "pn-step", 2, "text-align", "center"], [1, "tr-badge", 2, "color", "#1565d8", "background", "rgba(21, 101, 216, 0.1)", "border-color", "rgba(21, 101, 216, 0.35)"], ["id", "pnTitle", 1, "tr-title"], [1, "tr-sub"], [1, "ck-l"], ["id", "pnCo", "formControlName", "company", "placeholder", "Your company", 1, "ck-i"], ["id", "pnName", "formControlName", "contact", "placeholder", "Full name", 1, "ck-i"], ["id", "pnEmail", "type", "email", "formControlName", "email", "placeholder", "you@company.com", 1, "ck-i"], ["id", "pnPhone", "type", "tel", "formControlName", "phone", "placeholder", "+91 98XXXXXXXX", 1, "ck-i"], ["id", "pnCity", "formControlName", "city", "placeholder", "Mumbai", 1, "ck-i"], ["id", "pnType", "formControlName", "type", 1, "ck-i"], [3, "value"], ["id", "pnProd", "formControlName", "products", "placeholder", "e.g. Cybird, Acronis, Tally on Cloud", 1, "ck-i"], ["id", "pnErr", 1, "ck-err"], ["id", "pnGo", 1, "btn", "atc", 2, "width", "100%", 3, "click"], [1, "cart-draft", 2, "margin-top", "10px"], [1, "ck-tick", 2, "margin", "0 auto"], ["id", "pnTitle", 1, "tr-title", 2, "margin-top", "14px"], ["id", "pnRef", 1, "ck-ref"], ["id", "pnClose", 1, "btn", "btn-ghost", 2, "width", "100%", "margin-top", "16px", 3, "click"]], template: function PartnerModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, PartnerModalComponent_Conditional_0_Template, 7, 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.overlay.isOpen("partner") ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnerModalComponent, [{
    type: Component,
    args: [{ selector: "xh-partner-modal", standalone: true, host: { style: "display:contents" }, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (overlay.isOpen('partner')) {\r
  <div class="tr-back open" id="pnBack" (click)="close()"></div>\r
  <div class="trial open" id="partner" (click)="onBackdrop($event)" role="dialog" aria-modal="true" aria-labelledby="pnTitle">\r
    <div class="tr-card">\r
      <button class="cart-x tr-x" id="pnX" aria-label="Close" (click)="close()">\u2715</button>\r
\r
      @if (!done()) {\r
        <div class="pn-step" id="pnForm" [formGroup]="form">\r
          <div\r
            class="tr-badge"\r
            style="\r
              color: #1565d8;\r
              background: rgba(21, 101, 216, 0.1);\r
              border-color: rgba(21, 101, 216, 0.35);\r
            "\r
          >\r
            \u{1F91D} PARTNER PROGRAM\r
          </div>\r
          <h3 class="tr-title" id="pnTitle">Join us as a Partner</h3>\r
          <p class="tr-sub">\r
            Resell the full XcellHost portfolio with recurring margins, technical backing and deal\r
            support.\r
          </p>\r
          <label class="ck-l"\r
            >Company name *<input\r
              class="ck-i"\r
              id="pnCo"\r
              formControlName="company"\r
              placeholder="Your company"\r
          /></label>\r
          <label class="ck-l"\r
            >Contact person *<input\r
              class="ck-i"\r
              id="pnName"\r
              formControlName="contact"\r
              placeholder="Full name"\r
          /></label>\r
          <label class="ck-l"\r
            >Email *<input\r
              class="ck-i"\r
              id="pnEmail"\r
              type="email"\r
              formControlName="email"\r
              placeholder="you@company.com"\r
          /></label>\r
          <label class="ck-l"\r
            >Phone / WhatsApp *<input\r
              class="ck-i"\r
              id="pnPhone"\r
              type="tel"\r
              formControlName="phone"\r
              placeholder="+91 98XXXXXXXX"\r
          /></label>\r
          <label class="ck-l"\r
            >City<input class="ck-i" id="pnCity" formControlName="city" placeholder="Mumbai"\r
          /></label>\r
          <label class="ck-l"\r
            >Partner type *\r
            <select class="ck-i" id="pnType" formControlName="type">\r
              @for (t of types; track t) {\r
                <option [value]="t">{{ t }}</option>\r
              }\r
            </select>\r
          </label>\r
          <label class="ck-l"\r
            >Which products interest you?<input\r
              class="ck-i"\r
              id="pnProd"\r
              formControlName="products"\r
              placeholder="e.g. Cybird, Acronis, Tally on Cloud"\r
          /></label>\r
          <div class="ck-err" id="pnErr">{{ error() }}</div>\r
          <button\r
            class="btn atc"\r
            id="pnGo"\r
            style="width: 100%"\r
            [class.ck-busy]="busy()"\r
            (click)="submit()"\r
          >\r
            {{ submitLabel() }}\r
          </button>\r
          <p class="cart-draft" style="margin-top: 10px">\r
            Our partner team responds within 1 business day on email &amp; WhatsApp.\r
          </p>\r
        </div>\r
      } @else {\r
        <div class="pn-step" id="pnDone" style="text-align: center">\r
          <div class="ck-tick" style="margin: 0 auto">\u2713</div>\r
          <h3 class="tr-title" id="pnTitle" style="margin-top: 14px">Application received!</h3>\r
          <p class="tr-sub">Our partner team will contact you within 1 business day.</p>\r
          <span class="ck-ref" id="pnRef">Ref: {{ reference() }}</span>\r
          <button\r
            class="btn btn-ghost"\r
            id="pnClose"\r
            style="width: 100%; margin-top: 16px"\r
            (click)="close()"\r
          >\r
            Done\r
          </button>\r
        </div>\r
      }\r
    </div>\r
  </div>\r
}\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnerModalComponent, { className: "PartnerModalComponent", filePath: "src/app/overlays/partner-modal.component.ts", lineNumber: 35 });
})();

// src/app/overlays/callback-modal.component.ts
function CallbackModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function CallbackModalComponent_Conditional_6_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275listener("click", function CallbackModalComponent_Conditional_6_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdrop($event));
    });
    \u0275\u0275elementStart(2, "div", 7)(3, "button", 8);
    \u0275\u0275listener("click", function CallbackModalComponent_Conditional_6_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9)(6, "span");
    \u0275\u0275text(7, "Free consultation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "form", 11);
    \u0275\u0275listener("submit", function CallbackModalComponent_Conditional_6_Template_form_submit_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit($event));
    });
    \u0275\u0275element(11, "input", 12)(12, "input", 13)(13, "input", 14)(14, "input", 15)(15, "input", 16)(16, "input", 17);
    \u0275\u0275elementStart(17, "div", 18)(18, "label");
    \u0275\u0275element(19, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275element(21, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 21);
    \u0275\u0275element(23, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label")(25, "span", 23)(26, "select", 24)(27, "option", 25);
    \u0275\u0275text(28, "India +91");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 26);
    \u0275\u0275text(30, "UAE +971");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 27);
    \u0275\u0275text(32, "USA +1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 28);
    \u0275\u0275text(34, "UK +44");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 29);
    \u0275\u0275text(36, "Singapore +65");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(37, "input", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "label");
    \u0275\u0275element(39, "input", 31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "fieldset")(41, "legend");
    \u0275\u0275text(42, "I am a ");
    \u0275\u0275elementStart(43, "b");
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 32)(46, "label");
    \u0275\u0275element(47, "input", 33);
    \u0275\u0275text(48, " Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "label");
    \u0275\u0275element(50, "input", 34);
    \u0275\u0275text(51, " Vendor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "label");
    \u0275\u0275element(53, "input", 35);
    \u0275\u0275text(54, " Partner");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(55, "fieldset")(56, "legend");
    \u0275\u0275text(57, "How can we help? ");
    \u0275\u0275elementStart(58, "b");
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 36)(61, "label");
    \u0275\u0275element(62, "input", 37);
    \u0275\u0275text(63, " Schedule 1:1 Demo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "label");
    \u0275\u0275element(65, "input", 38);
    \u0275\u0275text(66, " Ask for FREE Trial");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "label");
    \u0275\u0275element(68, "input", 39);
    \u0275\u0275text(69, " Request Callback");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(70, "div", 40)(71, "span");
    \u0275\u0275text(72, "Captcha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "strong");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "i");
    \u0275\u0275text(76, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "strong");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "i");
    \u0275\u0275text(80, "=");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "input", 41);
    \u0275\u0275listener("input", function CallbackModalComponent_Conditional_6_Template_input_input_81_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.validateCaptcha());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "em");
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "p", 42);
    \u0275\u0275text(85, "XcellHost will use your information to respond to your enquiry. See our ");
    \u0275\u0275elementStart(86, "a", 43);
    \u0275\u0275text(87, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " and ");
    \u0275\u0275elementStart(89, "a", 44);
    \u0275\u0275text(90, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(91, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 45);
    \u0275\u0275text(93, "Submit ");
    \u0275\u0275elementStart(94, "span");
    \u0275\u0275text(95, "\u2192");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("Let's talk about ", ctx_r1.productLabel());
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.productLabel());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.productLabel());
    \u0275\u0275advance(32);
    \u0275\u0275attribute("name", "Radio1");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("name", "Radio1");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("name", "Radio1");
    \u0275\u0275advance(9);
    \u0275\u0275attribute("name", "Radio");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("name", "Radio");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("name", "Radio");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.firstCaptchaNumber());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.secondCaptchaNumber());
    \u0275\u0275advance(4);
    \u0275\u0275classProp("ok", ctx_r1.captchaMessage() === "Correct")("bad", ctx_r1.captchaMessage() && ctx_r1.captchaMessage() !== "Correct");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.captchaMessage());
  }
}
var CallbackModalComponent = class _CallbackModalComponent {
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  fb = inject(FormBuilder);
  router = inject(Router);
  form = this.fb.nonNullable.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    company: ["", Validators.required],
    phone: ["", [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
    email: ["", [Validators.required, Validators.email]],
    role: ["", Validators.required],
    help: ["", Validators.required],
    captcha: ["", Validators.required]
  });
  firstCaptchaNumber = signal(0, ...ngDevMode ? [{ debugName: "firstCaptchaNumber" }] : []);
  secondCaptchaNumber = signal(0, ...ngDevMode ? [{ debugName: "secondCaptchaNumber" }] : []);
  captchaMessage = signal("", ...ngDevMode ? [{ debugName: "captchaMessage" }] : []);
  product = signal("Website Enquiry", ...ngDevMode ? [{ debugName: "product" }] : []);
  productLabel = computed(() => this.product() || "Website Enquiry", ...ngDevMode ? [{ debugName: "productLabel" }] : []);
  constructor() {
    effect(() => {
      const open = this.overlay.isOpen("callback");
      untracked(() => open ? this.resetForm() : this.topics.clear());
    });
  }
  open() {
    this.overlay.open("callback");
  }
  close() {
    this.overlay.close("callback");
  }
  onBackdrop(event) {
    if (event.target === event.currentTarget)
      this.close();
  }
  validateCaptcha() {
    const answer = Number(this.form.controls.captcha.value);
    this.captchaMessage.set(Number.isFinite(answer) && answer === this.captchaAnswer() ? "Correct" : "Try again");
  }
  submit(event) {
    event.preventDefault();
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (Number(this.form.controls.captcha.value) !== this.captchaAnswer()) {
      this.captchaMessage.set("Enter the correct answer");
      this.form.controls.captcha.markAsTouched();
      return;
    }
    event.currentTarget.submit();
  }
  captchaAnswer() {
    return this.firstCaptchaNumber() + this.secondCaptchaNumber();
  }
  resetForm() {
    this.form.reset();
    this.captchaMessage.set("");
    this.product.set(this.topics.topic().trim() || this.productFromRoute());
    this.firstCaptchaNumber.set(this.randomCaptchaNumber());
    this.secondCaptchaNumber.set(this.randomCaptchaNumber());
  }
  productFromRoute() {
    const title = document.title.split(/[\-|—]/)[0]?.trim();
    if (title && !/^(home|contact( us)?)$/i.test(title))
      return title;
    const segment = this.router.url.split("?")[0].split("#")[0].split("/").filter(Boolean).pop();
    return segment ? segment.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()) : "Website Enquiry";
  }
  randomCaptchaNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }
  static \u0275fac = function CallbackModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CallbackModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CallbackModalComponent, selectors: [["xh-callback-modal"]], hostAttrs: [2, "display", "contents"], decls: 7, vars: 2, consts: [["id", "cbTab", "aria-label", "Request a callback", "aria-controls", "callback", 1, "cb-tab", 3, "click"], [1, "cb-ring"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "cb-phone-icon"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z"], [1, "cb-tab-label"], ["id", "cbBack", 1, "tr-back", "open", 3, "click"], ["id", "callback", "role", "dialog", "aria-modal", "true", "aria-labelledby", "cbTitle", 1, "trial", "open", "enquiry-modal", 3, "click"], [1, "tr-card", "enquiry-card"], ["id", "cbX", "type", "button", "aria-label", "Close", 1, "cart-x", "tr-x", 3, "click"], [1, "enquiry-head"], ["id", "cbTitle"], ["action", "https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/xcellhostform/formperma/bZ5rEp9aOJGgQGNccOrarg3MksQYykD8HUut8dl-c5w/htmlRecords/submit", "method", "POST", "accept-charset", "UTF-8", "enctype", "multipart/form-data", 1, "enquiry-form", 3, "submit", "formGroup"], ["type", "hidden", "name", "zf_referrer_name", "value", ""], ["type", "hidden", "name", "zf_redirect_url", "value", ""], ["type", "hidden", "name", "zc_gad", "value", ""], ["type", "hidden", "name", "SingleLine1", 3, "value"], ["type", "hidden", "name", "SingleLine2", 3, "value"], ["type", "hidden", "name", "Number", "value", "1"], [1, "field-grid"], ["type", "text", "name", "Name_First", "formControlName", "firstName", "autocomplete", "given-name", "placeholder", "First name *", "aria-label", "First name", "required", ""], ["type", "text", "name", "Name_Last", "formControlName", "lastName", "autocomplete", "family-name", "placeholder", "Last name *", "aria-label", "Last name", "required", ""], [1, "full"], ["type", "text", "name", "SingleLine", "formControlName", "company", "autocomplete", "organization", "placeholder", "Company name *", "aria-label", "Company name", "required", ""], [1, "phone-fields"], ["name", "CountryCode", "aria-label", "Country code"], ["value", "91", "selected", ""], ["value", "971"], ["value", "1"], ["value", "44"], ["value", "65"], ["type", "tel", "name", "PhoneNumber_countrycode", "formControlName", "phone", "autocomplete", "tel", "inputmode", "numeric", "maxlength", "15", "placeholder", "Phone number *", "aria-label", "Phone number", "required", ""], ["type", "email", "name", "Email", "formControlName", "email", "autocomplete", "email", "placeholder", "Email address *", "aria-label", "Email address", "required", ""], [1, "choice-grid", "three"], ["type", "radio", "value", "Customer C", "formControlName", "role", "required", ""], ["type", "radio", "value", "Vendor V", "formControlName", "role"], ["type", "radio", "value", "Partner P", "formControlName", "role"], [1, "choice-grid"], ["type", "radio", "value", "Schedule 1:1 Demo", "formControlName", "help", "required", ""], ["type", "radio", "value", "Ask For FREE Trial", "formControlName", "help"], ["type", "radio", "value", "Request a CallBack", "formControlName", "help"], [1, "captcha"], ["type", "text", "name", "captcha_answer", "formControlName", "captcha", "placeholder", "Answer", "autocomplete", "off", "inputmode", "numeric", "aria-label", "Captcha answer", "required", "", 3, "input"], [1, "policy"], ["href", "https://www.xcellhost.cloud/privacy-cookie-policy/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.xcellhost.cloud/terms-of-service/", "target", "_blank", "rel", "noopener noreferrer"], ["type", "submit", 1, "submit"]], template: function CallbackModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function CallbackModalComponent_Template_button_click_0_listener() {
        return ctx.open();
      });
      \u0275\u0275element(1, "span", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(2, "svg", 2);
      \u0275\u0275element(3, "path", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5, "Request a Callback");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, CallbackModalComponent_Conditional_6_Template, 96, 17);
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-expanded", ctx.overlay.isOpen("callback"));
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.overlay.isOpen("callback") ? 6 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.enquiry-modal[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.enquiry-card[_ngcontent-%COMP%] {\n  width: min(680px, 100%);\n  max-height: none !important;\n  overflow: visible !important;\n  padding: 20px 24px;\n  box-shadow: 0 24px 64px rgba(4, 31, 76, .25);\n}\n.enquiry-head[_ngcontent-%COMP%] {\n  padding-right: 28px;\n  margin-bottom: 12px;\n}\n.enquiry-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #1467dc;\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.enquiry-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #071f45;\n  font: 800 clamp(19px, 2vw, 23px)/1.15 var(--disp);\n}\n.enquiry-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.field-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.field-grid[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.enquiry-form[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1467dc;\n}\n.enquiry-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.enquiry-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  padding: 7px 10px;\n  border: 1px solid #d8e3f2;\n  border-radius: 0;\n  outline: 0;\n  background: #f5f9ff;\n  color: #071f45;\n  font: 500 12px var(--body);\n}\n.enquiry-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #526481;\n  opacity: 1;\n}\n.enquiry-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.enquiry-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #1467dc;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(20, 103, 220, .12);\n}\n.enquiry-form[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: #d63448;\n}\n.phone-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 118px minmax(0, 1fr);\n  gap: 8px;\n}\n.enquiry-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.enquiry-form[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #32507c;\n  font: 700 9px/1.25 var(--body);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.choice-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.choice-grid.three[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.choice-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 34px;\n  padding: 6px 9px;\n  border: 1px solid #d7e3f3;\n  background: #fff;\n  color: #314762;\n  font: 700 10px/1.2 var(--body);\n  cursor: pointer;\n}\n.choice-grid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  margin: 0 6px 0 0;\n  accent-color: #1467dc;\n}\n.choice-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:has(input:checked) {\n  border-color: #1467dc;\n  background: #edf5ff;\n  box-shadow: inset 0 0 0 1px rgba(20, 103, 220, .08);\n}\n.captcha[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n  color: #32507c;\n  font-size: 11px;\n  font-weight: 800;\n}\n.captcha[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-width: 30px;\n  height: 30px;\n  padding: 0 6px;\n  border: 1px solid #d6e4f7;\n  background: #f5f9ff;\n  color: #071f45;\n}\n.captcha[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #5c7396;\n  font-style: normal;\n}\n.captcha[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 32px;\n  text-align: center;\n}\n.captcha[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  min-width: 100px;\n  font-size: 10px;\n  font-style: normal;\n}\n.captcha[_ngcontent-%COMP%]   em.ok[_ngcontent-%COMP%] {\n  color: #218739;\n}\n.captcha[_ngcontent-%COMP%]   em.bad[_ngcontent-%COMP%] {\n  color: #d63448;\n}\n.policy[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #667791;\n  font-size: 9.5px;\n  line-height: 1.45;\n}\n.policy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d57be;\n  font-weight: 700;\n}\n.submit[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-width: 150px;\n  min-height: 40px;\n  padding: 9px 18px;\n  border: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #0b52b5);\n  color: #fff;\n  font: 800 12px var(--body);\n  cursor: pointer;\n  box-shadow: 0 11px 24px rgba(20, 103, 220, .22);\n}\n.submit[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 15px 30px rgba(20, 103, 220, .28);\n}\n.submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.tr-x[_ngcontent-%COMP%] {\n  font-size: 27px;\n  line-height: 1;\n}\n@media (max-width: 580px) {\n  .enquiry-card[_ngcontent-%COMP%] {\n    padding: 18px 16px;\n  }\n  .field-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .field-grid[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .phone-fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .choice-grid[_ngcontent-%COMP%], \n   .choice-grid.three[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .choice-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .submit[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 1024px) {\n  .cb-tab[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=callback-modal.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CallbackModalComponent, [{
    type: Component,
    args: [{ selector: "xh-callback-modal", standalone: true, host: { style: "display:contents" }, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<button class="cb-tab" id="cbTab" aria-label="Request a callback" aria-controls="callback" [attr.aria-expanded]="overlay.isOpen('callback')" (click)="open()">\r
  <span class="cb-ring"></span><svg class="cb-phone-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" /></svg><span class="cb-tab-label">Request a Callback</span>\r
</button>\r
\r
@if (overlay.isOpen('callback')) {\r
  <div class="tr-back open" id="cbBack" (click)="close()"></div>\r
  <div class="trial open enquiry-modal" id="callback" (click)="onBackdrop($event)" role="dialog" aria-modal="true" aria-labelledby="cbTitle">\r
    <div class="tr-card enquiry-card">\r
      <button class="cart-x tr-x" id="cbX" type="button" aria-label="Close" (click)="close()">&times;</button>\r
      <div class="enquiry-head"><span>Free consultation</span><h3 id="cbTitle">Let's talk about {{ productLabel() }}</h3></div>\r
      <form class="enquiry-form" [formGroup]="form" (submit)="submit($event)" action="https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/xcellhostform/formperma/bZ5rEp9aOJGgQGNccOrarg3MksQYykD8HUut8dl-c5w/htmlRecords/submit" method="POST" accept-charset="UTF-8" enctype="multipart/form-data">\r
        <input type="hidden" name="zf_referrer_name" value=""><input type="hidden" name="zf_redirect_url" value=""><input type="hidden" name="zc_gad" value=""><input type="hidden" name="SingleLine1" [value]="productLabel()"><input type="hidden" name="SingleLine2" [value]="productLabel()"><input type="hidden" name="Number" value="1">\r
        <div class="field-grid">\r
          <label><input type="text" name="Name_First" formControlName="firstName" autocomplete="given-name" placeholder="First name *" aria-label="First name" required></label><label><input type="text" name="Name_Last" formControlName="lastName" autocomplete="family-name" placeholder="Last name *" aria-label="Last name" required></label><label class="full"><input type="text" name="SingleLine" formControlName="company" autocomplete="organization" placeholder="Company name *" aria-label="Company name" required></label>\r
          <label><span class="phone-fields"><select name="CountryCode" aria-label="Country code"><option value="91" selected>India +91</option><option value="971">UAE +971</option><option value="1">USA +1</option><option value="44">UK +44</option><option value="65">Singapore +65</option></select><input type="tel" name="PhoneNumber_countrycode" formControlName="phone" autocomplete="tel" inputmode="numeric" maxlength="15" placeholder="Phone number *" aria-label="Phone number" required></span></label><label><input type="email" name="Email" formControlName="email" autocomplete="email" placeholder="Email address *" aria-label="Email address" required></label>\r
        </div>\r
        <fieldset><legend>I am a <b>*</b></legend><div class="choice-grid three"><label><input type="radio" [attr.name]="'Radio1'" value="Customer C" formControlName="role" required> Customer</label><label><input type="radio" [attr.name]="'Radio1'" value="Vendor V" formControlName="role"> Vendor</label><label><input type="radio" [attr.name]="'Radio1'" value="Partner P" formControlName="role"> Partner</label></div></fieldset>\r
        <fieldset><legend>How can we help? <b>*</b></legend><div class="choice-grid"><label><input type="radio" [attr.name]="'Radio'" value="Schedule 1:1 Demo" formControlName="help" required> Schedule 1:1 Demo</label><label><input type="radio" [attr.name]="'Radio'" value="Ask For FREE Trial" formControlName="help"> Ask for FREE Trial</label><label><input type="radio" [attr.name]="'Radio'" value="Request a CallBack" formControlName="help"> Request Callback</label></div></fieldset>\r
        <div class="captcha"><span>Captcha</span><strong>{{ firstCaptchaNumber() }}</strong><i>+</i><strong>{{ secondCaptchaNumber() }}</strong><i>=</i><input type="text" name="captcha_answer" formControlName="captcha" (input)="validateCaptcha()" placeholder="Answer" autocomplete="off" inputmode="numeric" aria-label="Captcha answer" required><em [class.ok]="captchaMessage() === 'Correct'" [class.bad]="captchaMessage() && captchaMessage() !== 'Correct'">{{ captchaMessage() }}</em></div>\r
        <p class="policy">XcellHost will use your information to respond to your enquiry. See our <a href="https://www.xcellhost.cloud/privacy-cookie-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://www.xcellhost.cloud/terms-of-service/" target="_blank" rel="noopener noreferrer">Terms of Service</a>.</p><button class="submit" type="submit">Submit <span>&rarr;</span></button>\r
      </form>\r
    </div>\r
  </div>\r
}\r
`, styles: ["/* src/app/overlays/callback-modal.component.css */\n:host {\n  display: contents;\n}\n.enquiry-modal {\n  padding: 12px;\n}\n.enquiry-card {\n  width: min(680px, 100%);\n  max-height: none !important;\n  overflow: visible !important;\n  padding: 20px 24px;\n  box-shadow: 0 24px 64px rgba(4, 31, 76, .25);\n}\n.enquiry-head {\n  padding-right: 28px;\n  margin-bottom: 12px;\n}\n.enquiry-head > span {\n  display: block;\n  margin-bottom: 5px;\n  color: #1467dc;\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.enquiry-head h3 {\n  margin: 0;\n  color: #071f45;\n  font: 800 clamp(19px, 2vw, 23px)/1.15 var(--disp);\n}\n.enquiry-form {\n  display: grid;\n  gap: 10px;\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n}\n.field-grid label {\n  min-width: 0;\n}\n.field-grid .full {\n  grid-column: 1/-1;\n}\n.enquiry-form b {\n  color: #1467dc;\n}\n.enquiry-form input,\n.enquiry-form select {\n  width: 100%;\n  height: 38px;\n  padding: 7px 10px;\n  border: 1px solid #d8e3f2;\n  border-radius: 0;\n  outline: 0;\n  background: #f5f9ff;\n  color: #071f45;\n  font: 500 12px var(--body);\n}\n.enquiry-form input::placeholder {\n  color: #526481;\n  opacity: 1;\n}\n.enquiry-form input:focus,\n.enquiry-form select:focus {\n  border-color: #1467dc;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(20, 103, 220, .12);\n}\n.enquiry-form input.ng-invalid.ng-touched {\n  border-color: #d63448;\n}\n.phone-fields {\n  display: grid;\n  grid-template-columns: 118px minmax(0, 1fr);\n  gap: 8px;\n}\n.enquiry-form fieldset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n}\n.enquiry-form legend {\n  margin: 0 0 5px;\n  color: #32507c;\n  font: 700 9px/1.25 var(--body);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.choice-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.choice-grid.three {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.choice-grid label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 34px;\n  padding: 6px 9px;\n  border: 1px solid #d7e3f3;\n  background: #fff;\n  color: #314762;\n  font: 700 10px/1.2 var(--body);\n  cursor: pointer;\n}\n.choice-grid input {\n  width: 13px;\n  height: 13px;\n  margin: 0 6px 0 0;\n  accent-color: #1467dc;\n}\n.choice-grid label:has(input:checked) {\n  border-color: #1467dc;\n  background: #edf5ff;\n  box-shadow: inset 0 0 0 1px rgba(20, 103, 220, .08);\n}\n.captcha {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  flex-wrap: wrap;\n  color: #32507c;\n  font-size: 11px;\n  font-weight: 800;\n}\n.captcha strong {\n  display: grid;\n  place-items: center;\n  min-width: 30px;\n  height: 30px;\n  padding: 0 6px;\n  border: 1px solid #d6e4f7;\n  background: #f5f9ff;\n  color: #071f45;\n}\n.captcha i {\n  color: #5c7396;\n  font-style: normal;\n}\n.captcha input {\n  width: 84px;\n  height: 32px;\n  text-align: center;\n}\n.captcha em {\n  min-width: 100px;\n  font-size: 10px;\n  font-style: normal;\n}\n.captcha em.ok {\n  color: #218739;\n}\n.captcha em.bad {\n  color: #d63448;\n}\n.policy {\n  margin: 0;\n  color: #667791;\n  font-size: 9.5px;\n  line-height: 1.45;\n}\n.policy a {\n  color: #0d57be;\n  font-weight: 700;\n}\n.submit {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-width: 150px;\n  min-height: 40px;\n  padding: 9px 18px;\n  border: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #1467dc,\n      #0b52b5);\n  color: #fff;\n  font: 800 12px var(--body);\n  cursor: pointer;\n  box-shadow: 0 11px 24px rgba(20, 103, 220, .22);\n}\n.submit:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 15px 30px rgba(20, 103, 220, .28);\n}\n.submit span {\n  font-size: 16px;\n}\n.tr-x {\n  font-size: 27px;\n  line-height: 1;\n}\n@media (max-width: 580px) {\n  .enquiry-card {\n    padding: 18px 16px;\n  }\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n  .field-grid .full {\n    grid-column: auto;\n  }\n  .phone-fields {\n    grid-template-columns: 1fr;\n  }\n  .choice-grid,\n  .choice-grid.three {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n  .choice-grid label {\n    justify-content: flex-start;\n  }\n  .submit {\n    width: 100%;\n  }\n}\n@media (max-width: 1024px) {\n  .cb-tab {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=callback-modal.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CallbackModalComponent, { className: "CallbackModalComponent", filePath: "src/app/overlays/callback-modal.component.ts", lineNumber: 18 });
})();

// src/app/overlays/doc-modal.component.ts
function DocModalComponent_Conditional_0_Conditional_23_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function DocModalComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 21);
    \u0275\u0275listener("ngSubmit", function DocModalComponent_Conditional_0_Conditional_23_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(1, "div", 22)(2, "label", 23)(3, "span");
    \u0275\u0275text(4, "First Name ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "input", 24);
    \u0275\u0275elementStart(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "label", 23)(11, "span");
    \u0275\u0275text(12, "Last Name ");
    \u0275\u0275elementStart(13, "b");
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "input", 25);
    \u0275\u0275elementStart(16, "small");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "label", 23)(19, "span");
    \u0275\u0275text(20, "Work Email ");
    \u0275\u0275elementStart(21, "b");
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "input", 26);
    \u0275\u0275elementStart(24, "small");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "label", 23)(27, "span");
    \u0275\u0275text(28, "Mobile / WhatsApp ");
    \u0275\u0275elementStart(29, "b");
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(31, "input", 27);
    \u0275\u0275elementStart(32, "small");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "label", 23)(35, "span");
    \u0275\u0275text(36, "Company Name ");
    \u0275\u0275elementStart(37, "b");
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "input", 28);
    \u0275\u0275elementStart(40, "small");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "label", 29);
    \u0275\u0275element(43, "input", 30);
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "I agree to the ");
    \u0275\u0275elementStart(46, "a", 31);
    \u0275\u0275text(47, "Terms & Conditions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " and ");
    \u0275\u0275elementStart(49, "a", 32);
    \u0275\u0275text(50, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "small", 33);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(54, DocModalComponent_Conditional_0_Conditional_23_Conditional_54_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(55, "button", 35)(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 37);
    \u0275\u0275text(60, "Protected by XcellHost. We respect your privacy.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("err", ctx_r1.fieldError("firstName"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fieldError("firstName"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("err", ctx_r1.fieldError("lastName"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fieldError("lastName"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("err", ctx_r1.fieldError("email"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fieldError("email"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("err", ctx_r1.fieldError("phone"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fieldError("phone"));
    \u0275\u0275advance(6);
    \u0275\u0275classProp("err", ctx_r1.fieldError("company"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fieldError("company"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.fieldError("consent"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error() ? 54 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("loading", ctx_r1.busy());
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.submitLabel());
  }
}
function DocModalComponent_Conditional_0_Conditional_24_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Reference: ", ctx_r1.reference());
  }
}
function DocModalComponent_Conditional_0_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 38);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "You're all set!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DocModalComponent_Conditional_0_Conditional_24_Conditional_7_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.sub());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.reference() ? 7 : -1);
  }
}
function DocModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("click", function DocModalComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275listener("click", function DocModalComponent_Conditional_0_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdrop($event));
    });
    \u0275\u0275elementStart(2, "section", 2)(3, "button", 3);
    \u0275\u0275listener("click", function DocModalComponent_Conditional_0_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "header", 4)(6, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 6);
    \u0275\u0275element(8, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "svg", 8);
    \u0275\u0275element(10, "path", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(11, "i", 9)(12, "i", 10)(13, "i", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 12);
    \u0275\u0275element(15, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 14);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "h2", 15);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 16);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 17);
    \u0275\u0275conditionalCreate(23, DocModalComponent_Conditional_0_Conditional_23_Template, 61, 22, "form", 18)(24, DocModalComponent_Conditional_0_Conditional_24_Template, 8, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "iframe", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(ctx_r1.meta().badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.title());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sub());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.done() ? 23 : 24);
  }
}
var ZOHO_ENDPOINT = "https://crm.zoho.in/crm/WebToLeadForm";
var ZOHO_FIELDS = {
  xnQsjsdp: "072b4788f4d2c8520d476a8f2a2d6062f248f31d6ff204650dc893e0726b9bd8",
  zc_gad: "",
  xmIwtLD: "5911643b4955ace016ff910e449f97b18d9458cf9bb741c206856ca079ee2d3e64f9c9ef26eae413ba905b7b38a6a8b6",
  actionType: "TGVhZHM=",
  returnURL: "null"
};
var DocModalComponent = class _DocModalComponent {
  overlay = inject(OverlayService);
  docs = inject(DocRequestService);
  leads = inject(LeadService);
  fb = inject(FormBuilder);
  document = inject(DOCUMENT);
  form = this.fb.nonNullable.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", EMAIL_VALIDATORS],
    phone: ["", PHONE_VALIDATORS],
    company: ["", Validators.required],
    consent: [false, Validators.requiredTrue]
  });
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  done = signal(false, ...ngDevMode ? [{ debugName: "done" }] : []);
  reference = signal("", ...ngDevMode ? [{ debugName: "reference" }] : []);
  meta = computed(() => DOC_META[this.docs.kind()] ?? DOC_META["infosheet"], ...ngDevMode ? [{ debugName: "meta" }] : []);
  isInfosheet = computed(() => this.docs.kind() === "infosheet", ...ngDevMode ? [{ debugName: "isInfosheet" }] : []);
  product = computed(() => this.docs.product(), ...ngDevMode ? [{ debugName: "product" }] : []);
  title = computed(() => this.done() ? "You're all set!" : `${this.meta().title}${this.product() ? ` - ${this.product()}` : ""}`, ...ngDevMode ? [{ debugName: "title" }] : []);
  sub = computed(() => this.done() ? `Your XcellHost ${this.isInfosheet() ? "Infosheet" : "presentation"} is on its way to your inbox.` : this.meta().sub, ...ngDevMode ? [{ debugName: "sub" }] : []);
  submitLabel = computed(() => this.busy() ? "Sending..." : this.isInfosheet() ? "Get Infosheet" : this.meta().cta, ...ngDevMode ? [{ debugName: "submitLabel" }] : []);
  constructor() {
    effect(() => {
      if (this.overlay.isOpen("doc"))
        this.reset();
    });
  }
  onBackdrop(event) {
    if (event.target === event.currentTarget)
      this.close();
  }
  close() {
    this.overlay.close("doc");
  }
  fieldError(field) {
    const control = this.form.controls[field];
    if (!control.touched || control.valid)
      return "";
    if (field === "consent")
      return "Please accept the Terms and Privacy Policy to continue.";
    if (control.hasError("required")) {
      return `${field === "firstName" ? "First name" : field === "lastName" ? "Last name" : field === "company" ? "Company name" : field === "email" ? "Work email" : "Mobile number"} is required.`;
    }
    if (field === "email")
      return "Enter a valid work email.";
    if (field === "phone")
      return "Enter a valid mobile number.";
    return "";
  }
  async submit() {
    if (this.busy())
      return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.error.set("Please correct the highlighted fields.");
      return;
    }
    this.error.set("");
    this.busy.set(true);
    const values = this.form.getRawValue();
    try {
      if (this.isInfosheet()) {
        await this.submitInfosheetToZoho(values);
        this.reference.set(this.leads.reference());
      } else {
        const result = await this.leads.submit("doc", {
          doc: this.docs.kind(),
          product: this.product(),
          customer: {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            company: values.company
          },
          consent: values.consent,
          delivery: ["email", "whatsapp"],
          zoho: { action: "create_lead_and_send_document" }
        });
        if (!result.ok && !result.skipped)
          throw new Error("Submission failed");
        this.reference.set(result.ref);
      }
      this.done.set(true);
    } catch {
      this.error.set("Connection issue - please try again or contact us on WhatsApp.");
    } finally {
      this.busy.set(false);
    }
  }
  submitInfosheetToZoho(values) {
    return new Promise((resolve) => {
      const targetName = "xhZohoInfosheetFrame";
      const frame = this.document.querySelector(`iframe[name="${targetName}"]`);
      const zohoForm = this.document.createElement("form");
      zohoForm.method = "POST";
      zohoForm.action = ZOHO_ENDPOINT;
      zohoForm.target = targetName;
      zohoForm.acceptCharset = "UTF-8";
      zohoForm.hidden = true;
      const payload = __spreadProps(__spreadValues({}, ZOHO_FIELDS), {
        "First Name": values.firstName.trim(),
        "Last Name": values.lastName.trim(),
        Email: values.email.trim(),
        Mobile: values.phone.trim(),
        Company: values.company.trim(),
        LEADCF21: "Customer C"
      });
      for (const [name, value] of Object.entries(payload)) {
        const input2 = this.document.createElement("input");
        input2.type = "hidden";
        input2.name = name;
        input2.value = value;
        zohoForm.appendChild(input2);
      }
      let finished = false;
      const finish = () => {
        if (finished)
          return;
        finished = true;
        zohoForm.remove();
        resolve();
      };
      frame?.addEventListener("load", finish, { once: true });
      this.document.body.appendChild(zohoForm);
      zohoForm.submit();
      setTimeout(finish, 4e3);
    });
  }
  reset() {
    this.done.set(false);
    this.busy.set(false);
    this.error.set("");
    this.reference.set("");
    this.form.reset();
  }
  static \u0275fac = function DocModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DocModalComponent, selectors: [["xh-doc-modal"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [["aria-hidden", "true", 1, "xhf-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "xhf-title", 1, "xhf-layer", 3, "click"], [1, "xhf-card"], ["type", "button", "aria-label", "Close form", 1, "xhf-close", 3, "click"], [1, "xhf-head"], ["aria-hidden", "true", 1, "xhf-sky"], ["viewBox", "0 0 100 60", 1, "xhf-cloud", "c1"], ["d", "M25 45C13 45 5 38 5 30C5 22 13 16 22 17C25 8 34 3 43 5C53 7 60 15 58 24C68 24 75 30 75 37C75 42 70 45 63 45Z"], ["viewBox", "0 0 100 60", 1, "xhf-cloud", "c2"], [1, "xhf-particle", "p1"], [1, "xhf-particle", "p2"], [1, "xhf-particle", "p3"], [1, "xhf-logo-chip"], ["src", "/assets/images/xcellhost-logo.png", "alt", "XcellHost"], [1, "xhf-badge"], ["id", "xhf-title", 1, "xhf-title"], [1, "xhf-sub"], [1, "xhf-body"], ["novalidate", "", 3, "formGroup"], [1, "xhf-success"], ["name", "xhZohoInfosheetFrame", "title", "Infosheet request submission", 1, "xhf-zoho-frame"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "xhf-row"], [1, "xhf-field"], ["type", "text", "formControlName", "firstName", "placeholder", "Rajesh", "autocomplete", "given-name"], ["type", "text", "formControlName", "lastName", "placeholder", "Kumar", "autocomplete", "family-name"], ["type", "email", "formControlName", "email", "placeholder", "you@company.com", "autocomplete", "email"], ["type", "tel", "formControlName", "phone", "placeholder", "+91 98765 43210", "autocomplete", "tel"], ["type", "text", "formControlName", "company", "placeholder", "Company Pvt. Ltd.", "autocomplete", "organization"], [1, "xhf-consent"], ["type", "checkbox", "formControlName", "consent"], ["href", "https://www.xcellhost.cloud/terms-of-service/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.xcellhost.cloud/privacy-cookie-policy/", "target", "_blank", "rel", "noopener noreferrer"], [1, "xhf-consent-error"], ["role", "alert", 1, "xhf-form-error"], ["type", "submit", 1, "xhf-submit", 3, "disabled"], ["aria-hidden", "true"], [1, "xhf-privacy"], ["aria-hidden", "true", 1, "xhf-check"]], template: function DocModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, DocModalComponent_Conditional_0_Template, 26, 4);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.overlay.isOpen("doc") ? 0 : -1);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  --xhf-blue: #06f;\n  --xhf-navy: #0b132b;\n  --xhf-red: #ef4444;\n  --xhf-green: #22c55e;\n}\n.xhf-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 160;\n  inset: 0;\n  background: rgba(4, 18, 45, 0.7);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.xhf-layer[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 161;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  overflow-y: auto;\n  padding: 20px;\n}\n.xhf-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(440px, 100%);\n  max-height: calc(100vh - 40px);\n  overflow: auto;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);\n  animation: _ngcontent-%COMP%_xhf-in 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n@keyframes _ngcontent-%COMP%_xhf-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.xhf-close[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 8;\n  top: 13px;\n  right: 14px;\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 23px;\n  line-height: 1;\n  cursor: pointer;\n}\n.xhf-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.xhf-head[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 22px 28px 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #3178bc 0%,\n      #35ace0 100%);\n}\n.xhf-head[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  top: -60px;\n  right: -20px;\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2),\n      transparent 70%);\n}\n.xhf-sky[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.xhf-cloud[_ngcontent-%COMP%] {\n  position: absolute;\n  fill: #fff;\n  opacity: 0.07;\n  animation: _ngcontent-%COMP%_xhf-drift linear infinite;\n}\n.xhf-cloud.c1[_ngcontent-%COMP%] {\n  top: 12px;\n  width: 90px;\n  animation-duration: 22s;\n}\n.xhf-cloud.c2[_ngcontent-%COMP%] {\n  top: 72px;\n  width: 64px;\n  opacity: 0.05;\n  animation-duration: 30s;\n  animation-delay: -9s;\n}\n@keyframes _ngcontent-%COMP%_xhf-drift {\n  from {\n    transform: translateX(-120px);\n  }\n  to {\n    transform: translateX(500px);\n  }\n}\n.xhf-particle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #4d94ff;\n  box-shadow: 0 0 6px #4d94ff;\n  animation: _ngcontent-%COMP%_xhf-rise 6s linear infinite;\n}\n.xhf-particle.p1[_ngcontent-%COMP%] {\n  left: 28%;\n  bottom: 4px;\n}\n.xhf-particle.p2[_ngcontent-%COMP%] {\n  left: 58%;\n  bottom: 0;\n  animation-delay: -2s;\n}\n.xhf-particle.p3[_ngcontent-%COMP%] {\n  left: 82%;\n  bottom: 7px;\n  animation-delay: -4s;\n}\n@keyframes _ngcontent-%COMP%_xhf-rise {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  20% {\n    opacity: 0.8;\n  }\n  to {\n    transform: translateY(-130px);\n    opacity: 0;\n  }\n}\n.xhf-logo-chip[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: inline-flex;\n  margin-bottom: 12px;\n  padding: 5px 9px;\n  border-radius: 8px;\n  background: #fff;\n}\n.xhf-logo-chip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: auto;\n  height: 25px;\n}\n.xhf-badge[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: table;\n  margin-bottom: 10px;\n  padding: 4px 11px;\n  border: 1px solid rgba(255, 255, 255, 0.45);\n  border-radius: 6px;\n  background: rgba(4, 30, 66, 0.24);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 0.09em;\n}\n.xhf-title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin: 0;\n  color: #fff;\n  font-size: 19px;\n  font-weight: 800;\n  line-height: 1.25;\n}\n.xhf-sub[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  margin: 5px 0 0;\n  color: rgba(255, 255, 255, 0.86);\n  font-size: 12px;\n  line-height: 1.5;\n}\n.xhf-body[_ngcontent-%COMP%] {\n  padding: 22px 28px 26px;\n}\n.xhf-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.xhf-field[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 12px;\n}\n.xhf-field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #475569;\n  font-size: 11px;\n  font-weight: 650;\n}\n.xhf-field[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--xhf-red);\n}\n.xhf-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 2px solid #d5dde7;\n  border-radius: 9px;\n  outline: none;\n  background: #fff;\n  color: #0f172a;\n  font: 500 13px var(--body, sans-serif);\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.xhf-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aab4c0;\n}\n.xhf-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--xhf-blue);\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.14);\n}\n.xhf-field[_ngcontent-%COMP%]   input.err[_ngcontent-%COMP%] {\n  border-color: var(--xhf-red);\n}\n.xhf-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.xhf-consent-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  color: var(--xhf-red);\n  font-size: 10px;\n}\n.xhf-consent[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 0 0 2px;\n  cursor: pointer;\n}\n.xhf-consent[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  accent-color: var(--xhf-blue);\n}\n.xhf-consent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 10.5px;\n  line-height: 1.5;\n}\n.xhf-consent[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--xhf-blue);\n  font-weight: 700;\n  text-decoration: none;\n}\n.xhf-consent-error[_ngcontent-%COMP%] {\n  min-height: 14px;\n  margin: 0 0 5px;\n}\n.xhf-form-error[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: var(--xhf-red);\n  font-size: 11px;\n}\n.xhf-submit[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 44px;\n  padding: 12px;\n  border: 0;\n  border-radius: 10px;\n  background: var(--xhf-blue);\n  color: #fff;\n  font: 750 14px var(--body, sans-serif);\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.2s;\n}\n.xhf-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(0, 102, 255, 0.3);\n}\n.xhf-submit[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.75;\n}\n.xhf-submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 17px;\n  height: 17px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_xhf-spin 0.65s linear infinite;\n}\n.xhf-submit.loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.xhf-submit.loading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n}\n@keyframes _ngcontent-%COMP%_xhf-spin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n.xhf-submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.xhf-privacy[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #94a3b8;\n  font-size: 10px;\n  text-align: center;\n}\n.xhf-success[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 230px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.xhf-check[_ngcontent-%COMP%] {\n  display: grid;\n  width: 60px;\n  height: 60px;\n  margin-bottom: 14px;\n  place-items: center;\n  border: 2px solid var(--xhf-green);\n  border-radius: 50%;\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--xhf-green);\n  font-size: 25px;\n}\n.xhf-success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  color: #0f172a;\n  font-size: 18px;\n}\n.xhf-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 310px;\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.xhf-success[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  padding: 5px 10px;\n  border-radius: 99px;\n  background: #eef4ff;\n  color: #1565d8;\n  font-size: 10px;\n  font-weight: 700;\n}\n.xhf-zoho-frame[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 480px) {\n  .xhf-layer[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .xhf-card[_ngcontent-%COMP%] {\n    max-height: calc(100vh - 24px);\n  }\n  .xhf-head[_ngcontent-%COMP%] {\n    padding: 19px 21px 17px;\n  }\n  .xhf-body[_ngcontent-%COMP%] {\n    padding: 19px 21px 22px;\n  }\n  .xhf-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xhf-card[_ngcontent-%COMP%], \n   .xhf-cloud[_ngcontent-%COMP%], \n   .xhf-particle[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=doc-modal.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocModalComponent, [{
    type: Component,
    args: [{ selector: "xh-doc-modal", standalone: true, host: { style: "display:contents" }, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (overlay.isOpen('doc')) {\r
  <div class="xhf-backdrop" (click)="close()" aria-hidden="true"></div>\r
  <div\r
    class="xhf-layer"\r
    (click)="onBackdrop($event)"\r
    role="dialog"\r
    aria-modal="true"\r
    aria-labelledby="xhf-title"\r
  >\r
    <section class="xhf-card">\r
      <button class="xhf-close" type="button" aria-label="Close form" (click)="close()">&times;</button>\r
      <header class="xhf-head">\r
        <div class="xhf-sky" aria-hidden="true">\r
          <svg class="xhf-cloud c1" viewBox="0 0 100 60"><path d="M25 45C13 45 5 38 5 30C5 22 13 16 22 17C25 8 34 3 43 5C53 7 60 15 58 24C68 24 75 30 75 37C75 42 70 45 63 45Z" /></svg>\r
          <svg class="xhf-cloud c2" viewBox="0 0 100 60"><path d="M25 45C13 45 5 38 5 30C5 22 13 16 22 17C25 8 34 3 43 5C53 7 60 15 58 24C68 24 75 30 75 37C75 42 70 45 63 45Z" /></svg>\r
          <i class="xhf-particle p1"></i><i class="xhf-particle p2"></i><i class="xhf-particle p3"></i>\r
        </div>\r
        <span class="xhf-logo-chip"><img src="/assets/images/xcellhost-logo.png" alt="XcellHost" /></span>\r
        <span class="xhf-badge">{{ meta().badge }}</span>\r
        <h2 class="xhf-title" id="xhf-title">{{ title() }}</h2>\r
        <p class="xhf-sub">{{ sub() }}</p>\r
      </header>\r
\r
      <div class="xhf-body">\r
        @if (!done()) {\r
          <form [formGroup]="form" (ngSubmit)="submit()" novalidate>\r
            <div class="xhf-row">\r
              <label class="xhf-field">\r
                <span>First Name <b>*</b></span>\r
                <input type="text" formControlName="firstName" placeholder="Rajesh" autocomplete="given-name" [class.err]="fieldError('firstName')" />\r
                <small>{{ fieldError('firstName') }}</small>\r
              </label>\r
              <label class="xhf-field">\r
                <span>Last Name <b>*</b></span>\r
                <input type="text" formControlName="lastName" placeholder="Kumar" autocomplete="family-name" [class.err]="fieldError('lastName')" />\r
                <small>{{ fieldError('lastName') }}</small>\r
              </label>\r
            </div>\r
            <label class="xhf-field">\r
              <span>Work Email <b>*</b></span>\r
              <input type="email" formControlName="email" placeholder="you@company.com" autocomplete="email" [class.err]="fieldError('email')" />\r
              <small>{{ fieldError('email') }}</small>\r
            </label>\r
            <label class="xhf-field">\r
              <span>Mobile / WhatsApp <b>*</b></span>\r
              <input type="tel" formControlName="phone" placeholder="+91 98765 43210" autocomplete="tel" [class.err]="fieldError('phone')" />\r
              <small>{{ fieldError('phone') }}</small>\r
            </label>\r
            <label class="xhf-field">\r
              <span>Company Name <b>*</b></span>\r
              <input type="text" formControlName="company" placeholder="Company Pvt. Ltd." autocomplete="organization" [class.err]="fieldError('company')" />\r
              <small>{{ fieldError('company') }}</small>\r
            </label>\r
            <label class="xhf-consent">\r
              <input type="checkbox" formControlName="consent" />\r
              <span>I agree to the <a href="https://www.xcellhost.cloud/terms-of-service/" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and <a href="https://www.xcellhost.cloud/privacy-cookie-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</span>\r
            </label>\r
            <small class="xhf-consent-error">{{ fieldError('consent') }}</small>\r
            @if (error()) { <p class="xhf-form-error" role="alert">{{ error() }}</p> }\r
            <button class="xhf-submit" type="submit" [disabled]="busy()" [class.loading]="busy()">\r
              <span>{{ submitLabel() }}</span><i aria-hidden="true"></i>\r
            </button>\r
            <p class="xhf-privacy">Protected by XcellHost. We respect your privacy.</p>\r
          </form>\r
        } @else {\r
          <div class="xhf-success">\r
            <div class="xhf-check" aria-hidden="true">&#10003;</div>\r
            <h3>You're all set!</h3>\r
            <p>{{ sub() }}</p>\r
            @if (reference()) { <span>Reference: {{ reference() }}</span> }\r
          </div>\r
        }\r
      </div>\r
      <iframe name="xhZohoInfosheetFrame" class="xhf-zoho-frame" title="Infosheet request submission"></iframe>\r
    </section>\r
  </div>\r
}\r
`, styles: ['/* src/app/overlays/doc-modal.component.css */\n:host {\n  --xhf-blue: #06f;\n  --xhf-navy: #0b132b;\n  --xhf-red: #ef4444;\n  --xhf-green: #22c55e;\n}\n.xhf-backdrop {\n  position: fixed;\n  z-index: 160;\n  inset: 0;\n  background: rgba(4, 18, 45, 0.7);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.xhf-layer {\n  position: fixed;\n  z-index: 161;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  overflow-y: auto;\n  padding: 20px;\n}\n.xhf-card {\n  position: relative;\n  width: min(440px, 100%);\n  max-height: calc(100vh - 40px);\n  overflow: auto;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);\n  animation: xhf-in 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n@keyframes xhf-in {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.xhf-close {\n  position: absolute;\n  z-index: 8;\n  top: 13px;\n  right: 14px;\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  font-size: 23px;\n  line-height: 1;\n  cursor: pointer;\n}\n.xhf-close:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.xhf-head {\n  position: relative;\n  overflow: hidden;\n  padding: 22px 28px 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #3178bc 0%,\n      #35ace0 100%);\n}\n.xhf-head:before {\n  content: "";\n  position: absolute;\n  top: -60px;\n  right: -20px;\n  width: 220px;\n  height: 220px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.2),\n      transparent 70%);\n}\n.xhf-sky {\n  position: absolute;\n  z-index: 0;\n  inset: 0;\n  overflow: hidden;\n  pointer-events: none;\n}\n.xhf-cloud {\n  position: absolute;\n  fill: #fff;\n  opacity: 0.07;\n  animation: xhf-drift linear infinite;\n}\n.xhf-cloud.c1 {\n  top: 12px;\n  width: 90px;\n  animation-duration: 22s;\n}\n.xhf-cloud.c2 {\n  top: 72px;\n  width: 64px;\n  opacity: 0.05;\n  animation-duration: 30s;\n  animation-delay: -9s;\n}\n@keyframes xhf-drift {\n  from {\n    transform: translateX(-120px);\n  }\n  to {\n    transform: translateX(500px);\n  }\n}\n.xhf-particle {\n  position: absolute;\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #4d94ff;\n  box-shadow: 0 0 6px #4d94ff;\n  animation: xhf-rise 6s linear infinite;\n}\n.xhf-particle.p1 {\n  left: 28%;\n  bottom: 4px;\n}\n.xhf-particle.p2 {\n  left: 58%;\n  bottom: 0;\n  animation-delay: -2s;\n}\n.xhf-particle.p3 {\n  left: 82%;\n  bottom: 7px;\n  animation-delay: -4s;\n}\n@keyframes xhf-rise {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  20% {\n    opacity: 0.8;\n  }\n  to {\n    transform: translateY(-130px);\n    opacity: 0;\n  }\n}\n.xhf-logo-chip {\n  position: relative;\n  z-index: 2;\n  display: inline-flex;\n  margin-bottom: 12px;\n  padding: 5px 9px;\n  border-radius: 8px;\n  background: #fff;\n}\n.xhf-logo-chip img {\n  display: block;\n  width: auto;\n  height: 25px;\n}\n.xhf-badge {\n  position: relative;\n  z-index: 2;\n  display: table;\n  margin-bottom: 10px;\n  padding: 4px 11px;\n  border: 1px solid rgba(255, 255, 255, 0.45);\n  border-radius: 6px;\n  background: rgba(4, 30, 66, 0.24);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: 0.09em;\n}\n.xhf-title {\n  position: relative;\n  z-index: 2;\n  margin: 0;\n  color: #fff;\n  font-size: 19px;\n  font-weight: 800;\n  line-height: 1.25;\n}\n.xhf-sub {\n  position: relative;\n  z-index: 2;\n  margin: 5px 0 0;\n  color: rgba(255, 255, 255, 0.86);\n  font-size: 12px;\n  line-height: 1.5;\n}\n.xhf-body {\n  padding: 22px 28px 26px;\n}\n.xhf-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.xhf-field {\n  display: block;\n  margin-bottom: 12px;\n}\n.xhf-field > span {\n  display: block;\n  margin-bottom: 5px;\n  color: #475569;\n  font-size: 11px;\n  font-weight: 650;\n}\n.xhf-field b {\n  color: var(--xhf-red);\n}\n.xhf-field input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 2px solid #d5dde7;\n  border-radius: 9px;\n  outline: none;\n  background: #fff;\n  color: #0f172a;\n  font: 500 13px var(--body, sans-serif);\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.xhf-field input::placeholder {\n  color: #aab4c0;\n}\n.xhf-field input:focus {\n  border-color: var(--xhf-blue);\n  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.14);\n}\n.xhf-field input.err {\n  border-color: var(--xhf-red);\n}\n.xhf-field small,\n.xhf-consent-error {\n  display: block;\n  margin-top: 3px;\n  color: var(--xhf-red);\n  font-size: 10px;\n}\n.xhf-consent {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  margin: 0 0 2px;\n  cursor: pointer;\n}\n.xhf-consent input {\n  flex: 0 0 auto;\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  accent-color: var(--xhf-blue);\n}\n.xhf-consent span {\n  color: #64748b;\n  font-size: 10.5px;\n  line-height: 1.5;\n}\n.xhf-consent a {\n  color: var(--xhf-blue);\n  font-weight: 700;\n  text-decoration: none;\n}\n.xhf-consent-error {\n  min-height: 14px;\n  margin: 0 0 5px;\n}\n.xhf-form-error {\n  margin: 0 0 7px;\n  color: var(--xhf-red);\n  font-size: 11px;\n}\n.xhf-submit {\n  position: relative;\n  width: 100%;\n  min-height: 44px;\n  padding: 12px;\n  border: 0;\n  border-radius: 10px;\n  background: var(--xhf-blue);\n  color: #fff;\n  font: 750 14px var(--body, sans-serif);\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.2s;\n}\n.xhf-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 22px rgba(0, 102, 255, 0.3);\n}\n.xhf-submit:disabled {\n  cursor: wait;\n  opacity: 0.75;\n}\n.xhf-submit i {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 17px;\n  height: 17px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: xhf-spin 0.65s linear infinite;\n}\n.xhf-submit.loading span {\n  visibility: hidden;\n}\n.xhf-submit.loading i {\n  display: block;\n}\n@keyframes xhf-spin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n.xhf-submit i {\n  transform: translate(-50%, -50%);\n}\n.xhf-privacy {\n  margin: 10px 0 0;\n  color: #94a3b8;\n  font-size: 10px;\n  text-align: center;\n}\n.xhf-success {\n  display: flex;\n  min-height: 230px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.xhf-check {\n  display: grid;\n  width: 60px;\n  height: 60px;\n  margin-bottom: 14px;\n  place-items: center;\n  border: 2px solid var(--xhf-green);\n  border-radius: 50%;\n  background: rgba(34, 197, 94, 0.1);\n  color: var(--xhf-green);\n  font-size: 25px;\n}\n.xhf-success h3 {\n  margin: 0 0 6px;\n  color: #0f172a;\n  font-size: 18px;\n}\n.xhf-success p {\n  max-width: 310px;\n  margin: 0;\n  color: #64748b;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.xhf-success span {\n  margin-top: 14px;\n  padding: 5px 10px;\n  border-radius: 99px;\n  background: #eef4ff;\n  color: #1565d8;\n  font-size: 10px;\n  font-weight: 700;\n}\n.xhf-zoho-frame {\n  display: none;\n}\n@media (max-width: 480px) {\n  .xhf-layer {\n    padding: 12px;\n  }\n  .xhf-card {\n    max-height: calc(100vh - 24px);\n  }\n  .xhf-head {\n    padding: 19px 21px 17px;\n  }\n  .xhf-body {\n    padding: 19px 21px 22px;\n  }\n  .xhf-row {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xhf-card,\n  .xhf-cloud,\n  .xhf-particle {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=doc-modal.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DocModalComponent, { className: "DocModalComponent", filePath: "src/app/overlays/doc-modal.component.ts", lineNumber: 32 });
})();

// src/app/core/chat-api.service.ts
var GENIE_STARTERS = [
  "Tell me about Tally on Cloud",
  "Which backup service is right for my business?",
  "Compare Cloud Drive and Microsoft 365",
  "How can XcellHost help with DPDP compliance?"
];
function safeAiSourceUrl(value) {
  if (/^\/(?!\/)[a-zA-Z0-9/_.-]*$/.test(value))
    return true;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password && !url.port && ["xcellhost.cloud", "www.xcellhost.cloud"].includes(url.hostname);
  } catch {
    return false;
  }
}
function boundedHistory(messages) {
  let history = messages.slice(-11);
  while (history[0]?.role === "assistant" || history.reduce((total, item) => total + item.content.length, 0) > 28e3)
    history = history.slice(1);
  return history;
}
function formatAiText(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\*\*([^*\n]+)\*\*/g, "<strong>$1</strong>").replace(/^#{1,3} (.+)$/gm, "<strong>$1</strong>");
}
var ChatApiService = class _ChatApiService {
  async ask(messages, signal2) {
    try {
      const response = await fetch(environment.chatEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: signal2,
        body: JSON.stringify({ messages: boundedHistory(messages) })
      });
      let body;
      try {
        body = await response.json();
      } catch {
        throw new ChatApiError("XcellGenie is not available on this website yet. Please retry or contact our team.");
      }
      if (!body || typeof body !== "object")
        throw new ChatApiError("XcellGenie returned an invalid reply. Please retry.");
      if (!response.ok)
        throw new ChatApiError(typeof body.error === "string" ? body.error.slice(0, 300) : "XcellGenie is unavailable. Please retry or contact our team.");
      if (typeof body.answer !== "string" || !body.answer.trim())
        throw new ChatApiError("XcellGenie could not answer. Please retry.");
      const sources = Array.isArray(body.sources) ? body.sources.filter((source) => typeof source?.title === "string" && typeof source?.url === "string" && safeAiSourceUrl(source.url)).slice(0, 6) : [];
      return { answer: body.answer, sources };
    } catch (error) {
      if (error instanceof ChatApiError)
        throw error;
      throw new ChatApiError(signal2.aborted ? "That took longer than expected. Please retry." : "Could not connect to XcellGenie. Please retry or contact our team.");
    }
  }
  static \u0275fac = function ChatApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatApiService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatApiService, factory: _ChatApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatApiService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var ChatApiError = class extends Error {
};

// src/app/core/chat.service.ts
var ChatService = class _ChatService {
  api = inject(ChatApiService);
  messages = signal([], ...ngDevMode ? [{ debugName: "messages" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  controller;
  generation = 0;
  nextId = 1;
  reset() {
    this.generation++;
    this.controller?.abort();
    this.messages.set([]);
    this.busy.set(false);
    this.error.set("");
  }
  async send(text) {
    const question = text.trim();
    if (!question || this.busy())
      return;
    if (question.length > 2e3) {
      this.error.set("Please keep your question under 2,000 characters.");
      return;
    }
    if (this.messages().at(-1)?.role === "user")
      this.messages.update((items) => items.slice(0, -1));
    this.messages.update((items) => [...items.slice(-100), { id: this.nextId++, role: "user", text: question }]);
    await this.requestAnswer();
  }
  async retry() {
    if (!this.busy() && this.messages().at(-1)?.role === "user")
      await this.requestAnswer();
  }
  async requestAnswer() {
    const generation = ++this.generation;
    const controller = this.controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5e4);
    this.busy.set(true);
    this.error.set("");
    try {
      const reply = await this.api.ask(this.messages().map((message) => ({ role: message.role, content: message.text })), controller.signal);
      if (generation !== this.generation)
        return;
      this.messages.update((items) => [...items, { id: this.nextId++, role: "assistant", text: reply.answer, sources: reply.sources }]);
    } catch (error) {
      if (generation === this.generation)
        this.error.set(error instanceof Error ? error.message : "Could not connect. Please retry.");
    } finally {
      clearTimeout(timeout);
      if (generation === this.generation)
        this.busy.set(false);
    }
  }
  static \u0275fac = function ChatService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/overlays/chatbot.component.ts
var _c0 = ["botBody"];
var _c1 = ["botInput"];
var _c2 = ["launcher"];
var _forTrack04 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.url;
function ChatbotComponent_Conditional_15_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 18);
    \u0275\u0275domListener("click", function ChatbotComponent_Conditional_15_For_7_Template_button_click_0_listener() {
      const question_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.ask(question_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementStart(2, "span", 22);
    \u0275\u0275text(3, "\u2192");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const question_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", question_r3, " ");
  }
}
function ChatbotComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 19)(1, "h3");
    \u0275\u0275text(2, "How can I help your business?");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "p");
    \u0275\u0275text(4, "I\u2019m XcellGenie. Ask me about XcellHost cloud, backup, productivity, security and compliance services.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(5, "div", 20);
    \u0275\u0275repeaterCreate(6, ChatbotComponent_Conditional_15_For_7_Template, 4, 1, "button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r3.starters);
  }
}
function ChatbotComponent_For_17_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 26);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const source_r5 = ctx.$implicit;
    \u0275\u0275domProperty("href", source_r5.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", source_r5.title, " \u2197");
  }
}
function ChatbotComponent_For_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "nav", 25)(1, "span");
    \u0275\u0275text(2, "Sources");
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(3, ChatbotComponent_For_17_Conditional_2_For_4_Template, 2, 2, "a", 26, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const message_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275repeater(message_r6.sources);
  }
}
function ChatbotComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 23);
    \u0275\u0275domElement(1, "div", 24);
    \u0275\u0275conditionalCreate(2, ChatbotComponent_For_17_Conditional_2_Template, 5, 0, "nav", 25);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("genie-user", message_r6.role === "user");
    \u0275\u0275attribute("aria-label", message_r6.role === "user" ? "Your message" : "XcellGenie answer");
    \u0275\u0275advance();
    \u0275\u0275domProperty("innerHTML", ctx_r3.formatText(message_r6.text), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional((message_r6.sources == null ? null : message_r6.sources.length) ? 2 : -1);
  }
}
function ChatbotComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 22);
    \u0275\u0275text(2, "\u25CF \u25CF \u25CF");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " XcellGenie is checking the knowledge\u2026");
    \u0275\u0275domElementEnd();
  }
}
function ChatbotComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 27);
    \u0275\u0275domListener("click", function ChatbotComponent_Conditional_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.chat.retry());
    });
    \u0275\u0275text(4, "Retry answer");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "a", 28);
    \u0275\u0275text(6, "Contact our team \u2197");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.chat.error());
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r3.chat.busy());
  }
}
var ChatbotComponent = class _ChatbotComponent {
  chat = inject(ChatService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  injector = inject(Injector);
  draft = signal("", ...ngDevMode ? [{ debugName: "draft" }] : []);
  starters = GENIE_STARTERS;
  formatText = formatAiText;
  body = viewChild("botBody", ...ngDevMode ? [{ debugName: "body" }] : []);
  input = viewChild("botInput", ...ngDevMode ? [{ debugName: "input" }] : []);
  launcher = viewChild("launcher", ...ngDevMode ? [{ debugName: "launcher" }] : []);
  wasOpen = false;
  focusTimer;
  constructor() {
    effect(() => {
      const open = this.overlay.isOpen("chat");
      if (this.focusTimer)
        clearTimeout(this.focusTimer);
      if (open)
        this.focusTimer = setTimeout(() => this.input()?.nativeElement.focus(), 330);
      else if (this.wasOpen)
        this.launcher()?.nativeElement.focus();
      this.wasOpen = open;
    });
    effect(() => {
      this.chat.messages();
      this.chat.busy();
      this.chat.error();
      afterNextRender(() => {
        const body = this.body()?.nativeElement;
        if (body)
          body.scrollTop = body.scrollHeight;
      }, { injector: this.injector });
    });
    inject(DestroyRef).onDestroy(() => {
      clearTimeout(this.focusTimer);
      this.chat.reset();
    });
  }
  toggle() {
    if (this.overlay.isOpen("chat"))
      this.close();
    else
      this.overlay.open("chat");
  }
  close() {
    this.overlay.close("chat");
  }
  clear() {
    this.chat.reset();
    this.draft.set("");
    this.input()?.nativeElement.focus();
  }
  onInput(event) {
    this.draft.set(event.target.value);
  }
  onKey(event) {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      this.send();
    }
  }
  onEscape(event) {
    event.stopPropagation();
    this.close();
  }
  send() {
    if (!this.draft().trim() || this.chat.busy())
      return;
    const text = this.draft();
    this.draft.set("");
    void this.chat.send(text).then(() => {
      if (this.overlay.isOpen("chat"))
        this.input()?.nativeElement.focus();
    });
  }
  ask(text) {
    if (!this.chat.busy())
      void this.chat.send(text);
  }
  openCallback() {
    this.topics.ask("XcellGenie specialist consultation");
    this.overlay.open("callback");
  }
  static \u0275fac = function ChatbotComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChatbotComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatbotComponent, selectors: [["xh-chatbot"]], viewQuery: function ChatbotComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.body, _c0, 5);
      \u0275\u0275viewQuerySignal(ctx.input, _c1, 5);
      \u0275\u0275viewQuerySignal(ctx.launcher, _c2, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(3);
    }
  }, hostAttrs: [2, "display", "contents"], decls: 32, vars: 10, consts: [["botBody", ""], ["botInput", ""], ["id", "bot", "role", "dialog", "aria-modal", "false", "aria-labelledby", "genieTitle", 1, "bot", "xcell-genie", 3, "keydown.escape"], [1, "genie-head"], ["aria-hidden", "true", 1, "genie-avatar"], ["id", "genieTitle"], ["type", "button", "aria-label", "Clear chat", 3, "click"], ["type", "button", "aria-label", "Close XcellGenie", 3, "click"], ["role", "log", "aria-label", "Chat messages", "aria-live", "polite", "aria-relevant", "additions", 1, "genie-thread"], [1, "genie-message", 3, "genie-user"], ["role", "status", 1, "genie-loading"], ["role", "alert", 1, "genie-error"], [1, "genie-composer", 3, "submit"], ["for", "botInput", 1, "genie-sr-only"], ["id", "botInput", "rows", "2", "maxlength", "2000", "placeholder", "Ask XcellHost AI\u2026", "autocomplete", "off", "aria-describedby", "genieNotice", 3, "input", "keydown", "value"], ["type", "submit", "aria-label", "Send question", 3, "disabled"], [1, "genie-foot"], ["id", "genieNotice"], ["type", "button", 3, "click"], [1, "genie-welcome"], ["aria-label", "Suggested questions", 1, "genie-starters"], ["type", "button"], ["aria-hidden", "true"], [1, "genie-message"], [1, "genie-text", 3, "innerHTML"], ["aria-label", "Answer sources", 1, "genie-sources"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["type", "button", 3, "click", "disabled"], ["href", "https://xcellhost.cloud/contact", "target", "_blank", "rel", "noopener noreferrer"]], template: function ChatbotComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "section", 2);
      \u0275\u0275domListener("keydown.escape", function ChatbotComponent_Template_section_keydown_escape_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEscape($event));
      });
      \u0275\u0275domElementStart(1, "header", 3)(2, "span", 4);
      \u0275\u0275text(3, "AI");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div")(5, "h2", 5);
      \u0275\u0275text(6, "XcellGenie");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p");
      \u0275\u0275text(8, "XcellHost AI assistant");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(9, "button", 6);
      \u0275\u0275domListener("click", function ChatbotComponent_Template_button_click_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clear());
      });
      \u0275\u0275text(10, "\u21BB");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "button", 7);
      \u0275\u0275domListener("click", function ChatbotComponent_Template_button_click_11_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(12, "\xD7");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(13, "div", 8, 0);
      \u0275\u0275conditionalCreate(15, ChatbotComponent_Conditional_15_Template, 8, 0);
      \u0275\u0275repeaterCreate(16, ChatbotComponent_For_17_Template, 3, 5, "article", 9, _forTrack04);
      \u0275\u0275conditionalCreate(18, ChatbotComponent_Conditional_18_Template, 4, 0, "div", 10);
      \u0275\u0275conditionalCreate(19, ChatbotComponent_Conditional_19_Template, 7, 2, "div", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "form", 12);
      \u0275\u0275domListener("submit", function ChatbotComponent_Template_form_submit_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.send());
      });
      \u0275\u0275domElementStart(21, "label", 13);
      \u0275\u0275text(22, "Your question for XcellGenie");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "textarea", 14, 1);
      \u0275\u0275domListener("input", function ChatbotComponent_Template_textarea_input_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInput($event));
      })("keydown", function ChatbotComponent_Template_textarea_keydown_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKey($event));
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "button", 15);
      \u0275\u0275text(26, "\u2191");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "footer", 16)(28, "p", 17);
      \u0275\u0275text(29, "AI guidance from our knowledge snapshot. Confirm important details with a specialist. Please don\u2019t share passwords or confidential data.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "button", 18);
      \u0275\u0275domListener("click", function ChatbotComponent_Template_button_click_30_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCallback());
      });
      \u0275\u0275text(31, "Talk to an XcellHost specialist \u2192");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.overlay.isOpen("chat"));
      \u0275\u0275attribute("inert", ctx.overlay.isOpen("chat") ? null : "")("aria-hidden", ctx.overlay.isOpen("chat") ? null : "true");
      \u0275\u0275advance(13);
      \u0275\u0275attribute("aria-busy", ctx.chat.busy());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.chat.messages().length ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.chat.messages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.chat.busy() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.chat.error() ? 19 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("value", ctx.draft());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", ctx.chat.busy() || !ctx.draft().trim());
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n#botFab[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      140deg,\n      var(--blue,#1464e8),\n      var(--navy,#061e42));\n  box-shadow: 0 10px 28px #123c7b55;\n}\n#bot.xcell-genie[_ngcontent-%COMP%] {\n  left: auto;\n  right: 18px;\n  bottom: 72px;\n  width: min(450px, calc(100vw - 36px));\n  height: min(680px, calc(100dvh - 100px));\n  font-family: var(--body);\n  border: 1px solid var(--line);\n  background: #fff;\n  z-index: 135;\n  padding: 0;\n  margin: 0;\n}\n.genie-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n  padding: 16px;\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      #0e3a78);\n  color: white;\n}\n.genie-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font: 700 19px var(--disp);\n  color: #fff;\n}\n.genie-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  font-size: 12px;\n  color: #c8dbff;\n}\n.genie-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.genie-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: #ffffff20;\n  font-weight: 700;\n}\n.genie-head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  border: 1px solid #ffffff50;\n  background: #ffffff10;\n  color: #fff;\n  font-size: 22px;\n  cursor: pointer;\n}\n.genie-thread[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 18px;\n  background: #f5f8ff;\n}\n.genie-welcome[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 700 20px var(--disp);\n  color: var(--navy);\n  margin: 4px 0 8px;\n}\n.genie-welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.65;\n  margin: 0;\n  color: var(--ink);\n}\n.genie-starters[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n}\n.genie-starters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  text-align: left;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: #fff;\n  color: var(--navy);\n  padding: 12px;\n  font: 600 13px/1.5 var(--body);\n  cursor: pointer;\n}\n.genie-starters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n}\n.genie-message[_ngcontent-%COMP%] {\n  max-width: 95%;\n  align-self: flex-start;\n  border: 1px solid var(--line);\n  border-radius: 14px 14px 14px 3px;\n  background: #fff;\n  color: var(--ink);\n  padding: 12px 14px;\n  font-size: 14px;\n  line-height: 1.65;\n  overflow-wrap: anywhere;\n}\n.genie-message.genie-user[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #fff;\n  align-self: flex-end;\n  border-radius: 14px 14px 3px 14px;\n}\n.genie-text[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.genie-sources[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--line);\n  margin-top: 12px;\n  padding-top: 9px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 12px;\n}\n.genie-sources[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.genie-sources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--blue);\n  text-decoration: underline;\n}\n.genie-loading[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.7;\n  color: var(--navy);\n}\n.genie-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--blue);\n  animation: _ngcontent-%COMP%_genie-pulse 1.2s infinite;\n}\n.genie-error[_ngcontent-%COMP%] {\n  background: #fff2ed;\n  border: 1px solid #ffd0bd;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 13px;\n  color: #733016;\n}\n.genie-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n}\n.genie-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.genie-error[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font: 600 12px var(--body);\n  margin-right: 10px;\n  color: var(--blue);\n}\n.genie-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  padding: 7px 10px;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n}\n.genie-composer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  gap: 8px;\n  padding: 12px;\n  border-top: 1px solid var(--line);\n}\n.genie-composer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  resize: none;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 10px;\n  font: 400 14px/1.5 var(--body);\n  color: var(--ink);\n  background: white;\n}\n.genie-composer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: center;\n  border: 0;\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  background: var(--blue);\n  color: #fff;\n  font-size: 24px;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: wait;\n}\n.genie-foot[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0 14px 12px;\n  background: #fff;\n  margin: 0;\n}\n.genie-foot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #516481;\n  margin: 0 0 8px;\n}\n.genie-foot[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: 0;\n  padding: 0;\n  color: var(--blue);\n  font: 600 12px var(--body);\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \na[_ngcontent-%COMP%]:focus-visible, \ntextarea[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #7fb0ff;\n  outline-offset: 3px;\n}\n.genie-sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip-path: inset(50%);\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_genie-pulse {\n  50% {\n    opacity: .35;\n  }\n}\n@media (max-width: 600px) {\n  #bot.xcell-genie[_ngcontent-%COMP%] {\n    right: 8px;\n    bottom: calc(64px + env(safe-area-inset-bottom));\n    width: calc(100vw - 16px);\n    height: min(700px, calc(100dvh - 90px));\n    border-radius: 16px;\n  }\n  .genie-thread[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .genie-composer[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  #bot.xcell-genie[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .genie-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=chatbot.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChatbotComponent, [{
    type: Component,
    args: [{ selector: "xh-chatbot", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "display: contents" }, template: `<section class="bot xcell-genie" id="bot" role="dialog" aria-modal="false" aria-labelledby="genieTitle" [class.open]="overlay.isOpen('chat')" [attr.inert]="overlay.isOpen('chat') ? null : ''" [attr.aria-hidden]="overlay.isOpen('chat') ? null : 'true'" (keydown.escape)="onEscape($event)">\r
  <header class="genie-head"><span class="genie-avatar" aria-hidden="true">AI</span><div><h2 id="genieTitle">XcellGenie</h2><p>XcellHost AI assistant</p></div><button type="button" aria-label="Clear chat" (click)="clear()">\u21BB</button><button type="button" aria-label="Close XcellGenie" (click)="close()">\xD7</button></header>\r
  <div class="genie-thread" #botBody role="log" aria-label="Chat messages" aria-live="polite" aria-relevant="additions" [attr.aria-busy]="chat.busy()">\r
    @if (!chat.messages().length) {\r
      <div class="genie-welcome"><h3>How can I help your business?</h3><p>I\u2019m XcellGenie. Ask me about XcellHost cloud, backup, productivity, security and compliance services.</p></div>\r
      <div class="genie-starters" aria-label="Suggested questions">@for (question of starters; track question) { <button type="button" (click)="ask(question)">{{ question }} <span aria-hidden="true">\u2192</span></button> }</div>\r
    }\r
    @for (message of chat.messages(); track message.id) {\r
      <article class="genie-message" [class.genie-user]="message.role === 'user'" [attr.aria-label]="message.role === 'user' ? 'Your message' : 'XcellGenie answer'">\r
        <div class="genie-text" [innerHTML]="formatText(message.text)"></div>\r
        @if (message.sources?.length) { <nav class="genie-sources" aria-label="Answer sources"><span>Sources</span>@for (source of message.sources; track source.url) { <a [href]="source.url" target="_blank" rel="noopener noreferrer">{{ source.title }} \u2197</a> }</nav> }\r
      </article>\r
    }\r
    @if (chat.busy()) { <div class="genie-loading" role="status"><span aria-hidden="true">\u25CF \u25CF \u25CF</span> XcellGenie is checking the knowledge\u2026</div> }\r
    @if (chat.error()) { <div class="genie-error" role="alert"><p>{{ chat.error() }}</p><button type="button" [disabled]="chat.busy()" (click)="chat.retry()">Retry answer</button><a href="https://xcellhost.cloud/contact" target="_blank" rel="noopener noreferrer">Contact our team \u2197</a></div> }\r
  </div>\r
  <form class="genie-composer" (submit)="$event.preventDefault(); send()"><label class="genie-sr-only" for="botInput">Your question for XcellGenie</label><textarea id="botInput" #botInput rows="2" maxlength="2000" placeholder="Ask XcellHost AI\u2026" autocomplete="off" [value]="draft()" (input)="onInput($event)" (keydown)="onKey($event)" aria-describedby="genieNotice"></textarea><button type="submit" aria-label="Send question" [disabled]="chat.busy() || !draft().trim()">\u2191</button></form>\r
  <footer class="genie-foot"><p id="genieNotice">AI guidance from our knowledge snapshot. Confirm important details with a specialist. Please don\u2019t share passwords or confidential data.</p><button type="button" (click)="openCallback()">Talk to an XcellHost specialist \u2192</button></footer>\r
</section>\r
`, styles: ["/* src/app/overlays/chatbot.component.css */\n:host {\n  display: contents;\n}\n#botFab {\n  background:\n    linear-gradient(\n      140deg,\n      var(--blue,#1464e8),\n      var(--navy,#061e42));\n  box-shadow: 0 10px 28px #123c7b55;\n}\n#bot.xcell-genie {\n  left: auto;\n  right: 18px;\n  bottom: 72px;\n  width: min(450px, calc(100vw - 36px));\n  height: min(680px, calc(100dvh - 100px));\n  font-family: var(--body);\n  border: 1px solid var(--line);\n  background: #fff;\n  z-index: 135;\n  padding: 0;\n  margin: 0;\n}\n.genie-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n  padding: 16px;\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      #0e3a78);\n  color: white;\n}\n.genie-head h2 {\n  margin: 0;\n  font: 700 19px var(--disp);\n  color: #fff;\n}\n.genie-head p {\n  margin: 3px 0 0;\n  font-size: 12px;\n  color: #c8dbff;\n}\n.genie-head > div {\n  flex: 1;\n}\n.genie-avatar {\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: #ffffff20;\n  font-weight: 700;\n}\n.genie-head button {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  border: 1px solid #ffffff50;\n  background: #ffffff10;\n  color: #fff;\n  font-size: 22px;\n  cursor: pointer;\n}\n.genie-thread {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 18px;\n  background: #f5f8ff;\n}\n.genie-welcome h3 {\n  font: 700 20px var(--disp);\n  color: var(--navy);\n  margin: 4px 0 8px;\n}\n.genie-welcome p {\n  font-size: 14px;\n  line-height: 1.65;\n  margin: 0;\n  color: var(--ink);\n}\n.genie-starters {\n  display: grid;\n  gap: 8px;\n}\n.genie-starters button {\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  text-align: left;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background: #fff;\n  color: var(--navy);\n  padding: 12px;\n  font: 600 13px/1.5 var(--body);\n  cursor: pointer;\n}\n.genie-starters button:hover {\n  border-color: var(--blue);\n}\n.genie-message {\n  max-width: 95%;\n  align-self: flex-start;\n  border: 1px solid var(--line);\n  border-radius: 14px 14px 14px 3px;\n  background: #fff;\n  color: var(--ink);\n  padding: 12px 14px;\n  font-size: 14px;\n  line-height: 1.65;\n  overflow-wrap: anywhere;\n}\n.genie-message.genie-user {\n  background: var(--navy);\n  color: #fff;\n  align-self: flex-end;\n  border-radius: 14px 14px 3px 14px;\n}\n.genie-text {\n  white-space: pre-wrap;\n}\n.genie-sources {\n  border-top: 1px solid var(--line);\n  margin-top: 12px;\n  padding-top: 9px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-size: 12px;\n}\n.genie-sources > span {\n  font-weight: 700;\n}\n.genie-sources a {\n  color: var(--blue);\n  text-decoration: underline;\n}\n.genie-loading {\n  font-size: 12px;\n  line-height: 1.7;\n  color: var(--navy);\n}\n.genie-loading span {\n  color: var(--blue);\n  animation: genie-pulse 1.2s infinite;\n}\n.genie-error {\n  background: #fff2ed;\n  border: 1px solid #ffd0bd;\n  padding: 12px;\n  border-radius: 12px;\n  font-size: 13px;\n  color: #733016;\n}\n.genie-error p {\n  margin: 0 0 8px;\n}\n.genie-error button,\n.genie-error a {\n  font: 600 12px var(--body);\n  margin-right: 10px;\n  color: var(--blue);\n}\n.genie-error button {\n  border: 1px solid var(--line);\n  padding: 7px 10px;\n  border-radius: 8px;\n  background: white;\n  cursor: pointer;\n}\n.genie-composer {\n  flex-shrink: 0;\n  display: flex;\n  gap: 8px;\n  padding: 12px;\n  border-top: 1px solid var(--line);\n}\n.genie-composer textarea {\n  flex: 1;\n  min-width: 0;\n  resize: none;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 10px;\n  font: 400 14px/1.5 var(--body);\n  color: var(--ink);\n  background: white;\n}\n.genie-composer button {\n  align-self: center;\n  border: 0;\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  background: var(--blue);\n  color: #fff;\n  font-size: 24px;\n  cursor: pointer;\n}\nbutton:disabled {\n  opacity: .5;\n  cursor: wait;\n}\n.genie-foot {\n  flex-shrink: 0;\n  padding: 0 14px 12px;\n  background: #fff;\n  margin: 0;\n}\n.genie-foot p {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #516481;\n  margin: 0 0 8px;\n}\n.genie-foot button {\n  background: none;\n  border: 0;\n  padding: 0;\n  color: var(--blue);\n  font: 600 12px var(--body);\n  cursor: pointer;\n}\nbutton:focus-visible,\na:focus-visible,\ntextarea:focus-visible {\n  outline: 3px solid #7fb0ff;\n  outline-offset: 3px;\n}\n.genie-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  clip-path: inset(50%);\n  overflow: hidden;\n}\n@keyframes genie-pulse {\n  50% {\n    opacity: .35;\n  }\n}\n@media (max-width: 600px) {\n  #bot.xcell-genie {\n    right: 8px;\n    bottom: calc(64px + env(safe-area-inset-bottom));\n    width: calc(100vw - 16px);\n    height: min(700px, calc(100dvh - 90px));\n    border-radius: 16px;\n  }\n  .genie-thread {\n    padding: 14px;\n  }\n  .genie-composer textarea {\n    font-size: 16px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  #bot.xcell-genie {\n    transition: none;\n  }\n  .genie-loading span {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=chatbot.component.css.map */\n"] }]
  }], () => [], { body: [{ type: ViewChild, args: ["botBody", { isSignal: true }] }], input: [{ type: ViewChild, args: ["botInput", { isSignal: true }] }], launcher: [{ type: ViewChild, args: ["launcher", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatbotComponent, { className: "ChatbotComponent", filePath: "src/app/overlays/chatbot.component.ts", lineNumber: 11 });
})();

// node_modules/@algolia/requester-browser-xhr/dist/requester.xhr.js
function m() {
  function r(t) {
    return new Promise((s) => {
      let e = new XMLHttpRequest();
      e.open(t.method, t.url, true), Object.keys(t.headers).forEach((n) => e.setRequestHeader(n, t.headers[n]));
      let i = (n, a) => setTimeout(() => {
        e.abort(), s({ status: 0, content: a, isTimedOut: true });
      }, n), u = i(t.connectTimeout, "Connection timeout"), o;
      e.onreadystatechange = () => {
        e.readyState > e.OPENED && o === void 0 && (clearTimeout(u), o = i(t.responseTimeout, "Socket timeout"));
      }, e.onerror = () => {
        e.status === 0 && (clearTimeout(u), clearTimeout(o), s({ content: e.responseText || "Network request failed", status: e.status, isTimedOut: false }));
      }, e.onload = () => {
        clearTimeout(u), clearTimeout(o), s({ content: e.responseText, status: e.status, isTimedOut: false });
      }, e.send(t.data);
    });
  }
  return { send: r };
}

// node_modules/@algolia/client-common/dist/common.js
function createBrowserLocalStorageCache(options) {
  let storage;
  const namespaceKey = `algolia-client-js-${options.key}`;
  function getStorage() {
    if (storage === void 0) {
      storage = options.localStorage || window.localStorage;
    }
    return storage;
  }
  function getNamespace() {
    return JSON.parse(getStorage().getItem(namespaceKey) || "{}");
  }
  function setNamespace(namespace) {
    getStorage().setItem(namespaceKey, JSON.stringify(namespace));
  }
  function removeOutdatedCacheItems() {
    const timeToLive = options.timeToLive ? options.timeToLive * 1e3 : null;
    const namespace = getNamespace();
    const filteredNamespaceWithoutOldFormattedCacheItems = Object.fromEntries(
      Object.entries(namespace).filter(([, cacheItem]) => {
        return cacheItem.timestamp !== void 0;
      })
    );
    setNamespace(filteredNamespaceWithoutOldFormattedCacheItems);
    if (!timeToLive) {
      return;
    }
    const filteredNamespaceWithoutExpiredItems = Object.fromEntries(
      Object.entries(filteredNamespaceWithoutOldFormattedCacheItems).filter(([, cacheItem]) => {
        const currentTimestamp = (/* @__PURE__ */ new Date()).getTime();
        const isExpired = cacheItem.timestamp + timeToLive < currentTimestamp;
        return !isExpired;
      })
    );
    setNamespace(filteredNamespaceWithoutExpiredItems);
  }
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      return Promise.resolve().then(() => {
        removeOutdatedCacheItems();
        return getNamespace()[JSON.stringify(key)];
      }).then((value) => {
        return Promise.all([value ? value.value : defaultValue(), value !== void 0]);
      }).then(([value, exists]) => {
        return Promise.all([value, exists || events.miss(value)]);
      }).then(([value]) => value);
    },
    set(key, value) {
      return Promise.resolve().then(() => {
        const namespace = getNamespace();
        namespace[JSON.stringify(key)] = {
          timestamp: (/* @__PURE__ */ new Date()).getTime(),
          value
        };
        getStorage().setItem(namespaceKey, JSON.stringify(namespace));
        return value;
      });
    },
    delete(key) {
      return Promise.resolve().then(() => {
        const namespace = getNamespace();
        delete namespace[JSON.stringify(key)];
        getStorage().setItem(namespaceKey, JSON.stringify(namespace));
      });
    },
    clear() {
      return Promise.resolve().then(() => {
        getStorage().removeItem(namespaceKey);
      });
    }
  };
}
function createNullCache() {
  return {
    get(_key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const value = defaultValue();
      return value.then((result) => Promise.all([result, events.miss(result)])).then(([result]) => result);
    },
    set(_key, value) {
      return Promise.resolve(value);
    },
    delete(_key) {
      return Promise.resolve();
    },
    clear() {
      return Promise.resolve();
    }
  };
}
function createFallbackableCache(options) {
  const caches = [...options.caches];
  const current = caches.shift();
  if (current === void 0) {
    return createNullCache();
  }
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      return current.get(key, defaultValue, events).catch(() => {
        return createFallbackableCache({ caches }).get(key, defaultValue, events);
      });
    },
    set(key, value) {
      return current.set(key, value).catch(() => {
        return createFallbackableCache({ caches }).set(key, value);
      });
    },
    delete(key) {
      return current.delete(key).catch(() => {
        return createFallbackableCache({ caches }).delete(key);
      });
    },
    clear() {
      return current.clear().catch(() => {
        return createFallbackableCache({ caches }).clear();
      });
    }
  };
}
function createMemoryCache(options = { serializable: true }) {
  let cache = {};
  return {
    get(key, defaultValue, events = {
      miss: () => Promise.resolve()
    }) {
      const keyAsString = JSON.stringify(key);
      if (keyAsString in cache) {
        return Promise.resolve(options.serializable ? JSON.parse(cache[keyAsString]) : cache[keyAsString]);
      }
      const promise = defaultValue();
      return promise.then((value) => events.miss(value)).then(() => promise);
    },
    set(key, value) {
      cache[JSON.stringify(key)] = options.serializable ? JSON.stringify(value) : value;
      return Promise.resolve(value);
    },
    delete(key) {
      delete cache[JSON.stringify(key)];
      return Promise.resolve();
    },
    clear() {
      cache = {};
      return Promise.resolve();
    }
  };
}
function createAlgoliaAgent(version) {
  const algoliaAgent = {
    value: `Algolia for JavaScript (${version})`,
    add(options) {
      const addedAlgoliaAgent = `; ${options.segment}${options.version !== void 0 ? ` (${options.version})` : ""}`;
      if (algoliaAgent.value.indexOf(addedAlgoliaAgent) === -1) {
        algoliaAgent.value = `${algoliaAgent.value}${addedAlgoliaAgent}`;
      }
      return algoliaAgent;
    }
  };
  return algoliaAgent;
}
function createAuth(appId, apiKey, authMode = "WithinHeaders") {
  const credentials = {
    "x-algolia-api-key": apiKey,
    "x-algolia-application-id": appId
  };
  return {
    headers() {
      return authMode === "WithinHeaders" ? credentials : {};
    },
    queryParameters() {
      return authMode === "WithinQueryParameters" ? credentials : {};
    }
  };
}
function getAlgoliaAgent({ algoliaAgents, client, version }) {
  const defaultAlgoliaAgent = createAlgoliaAgent(version).add({
    segment: client,
    version
  });
  algoliaAgents.forEach((algoliaAgent) => defaultAlgoliaAgent.add(algoliaAgent));
  return defaultAlgoliaAgent;
}
function createNullLogger() {
  return {
    debug(_message, _args) {
      return Promise.resolve();
    },
    info(_message, _args) {
      return Promise.resolve();
    },
    error(_message, _args) {
      return Promise.resolve();
    }
  };
}
var EXPIRATION_DELAY = 2 * 60 * 1e3;
function createStatefulHost(host, status = "up") {
  const lastUpdate = Date.now();
  function isUp() {
    return status === "up" || Date.now() - lastUpdate > EXPIRATION_DELAY;
  }
  function isTimedOut() {
    return status === "timed out" && Date.now() - lastUpdate <= EXPIRATION_DELAY;
  }
  return __spreadProps(__spreadValues({}, host), { status, lastUpdate, isUp, isTimedOut });
}
var AlgoliaError = class extends Error {
  name = "AlgoliaError";
  constructor(message, name) {
    super(message);
    if (name) {
      this.name = name;
    }
  }
};
var ErrorWithStackTrace = class extends AlgoliaError {
  stackTrace;
  constructor(message, stackTrace, name) {
    super(message, name);
    this.stackTrace = stackTrace;
  }
};
var RetryError = class extends ErrorWithStackTrace {
  constructor(stackTrace) {
    super(
      "Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.",
      stackTrace,
      "RetryError"
    );
  }
};
var ApiError = class extends ErrorWithStackTrace {
  status;
  constructor(message, status, stackTrace, name = "ApiError") {
    super(message, stackTrace, name);
    this.status = status;
  }
};
var DeserializationError = class extends AlgoliaError {
  response;
  constructor(message, response) {
    super(message, "DeserializationError");
    this.response = response;
  }
};
var DetailedApiError = class extends ApiError {
  error;
  constructor(message, status, error, stackTrace) {
    super(message, status, stackTrace, "DetailedApiError");
    this.error = error;
  }
};
function shuffle(array) {
  const shuffledArray = array;
  for (let c = array.length - 1; c > 0; c--) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = array[c];
    shuffledArray[c] = array[b];
    shuffledArray[b] = a;
  }
  return shuffledArray;
}
function serializeUrl(host, path, queryParameters) {
  const queryParametersAsString = serializeQueryParameters(queryParameters);
  let url = `${host.protocol}://${host.url}${host.port ? `:${host.port}` : ""}/${path.charAt(0) === "/" ? path.substring(1) : path}`;
  if (queryParametersAsString.length) {
    url += `?${queryParametersAsString}`;
  }
  return url;
}
function serializeQueryParameters(parameters) {
  return Object.keys(parameters).filter((key) => parameters[key] !== void 0).sort().map(
    (key) => `${key}=${encodeURIComponent(
      Object.prototype.toString.call(parameters[key]) === "[object Array]" ? parameters[key].join(",") : parameters[key]
    ).replace(/\+/g, "%20")}`
  ).join("&");
}
function serializeData(request, requestOptions) {
  if (request.method === "GET" || request.data === void 0 && requestOptions.data === void 0) {
    return void 0;
  }
  const data = Array.isArray(request.data) ? request.data : __spreadValues(__spreadValues({}, request.data), requestOptions.data);
  return JSON.stringify(data);
}
function serializeHeaders(baseHeaders, requestHeaders, requestOptionsHeaders) {
  const headers = __spreadValues(__spreadValues(__spreadValues({
    Accept: "application/json"
  }, baseHeaders), requestHeaders), requestOptionsHeaders);
  const serializedHeaders = {};
  Object.keys(headers).forEach((header) => {
    const value = headers[header];
    serializedHeaders[header.toLowerCase()] = value;
  });
  return serializedHeaders;
}
function deserializeSuccess(response) {
  try {
    return JSON.parse(response.content);
  } catch (e) {
    throw new DeserializationError(e.message, response);
  }
}
function deserializeFailure({ content, status }, stackFrame) {
  try {
    const parsed = JSON.parse(content);
    if ("error" in parsed) {
      return new DetailedApiError(parsed.message, status, parsed.error, stackFrame);
    }
    return new ApiError(parsed.message, status, stackFrame);
  } catch {
  }
  return new ApiError(content, status, stackFrame);
}
function isNetworkError({ isTimedOut, status }) {
  return !isTimedOut && ~~status === 0;
}
function isRetryable({ isTimedOut, status }) {
  return isTimedOut || isNetworkError({ isTimedOut, status }) || ~~(status / 100) !== 2 && ~~(status / 100) !== 4;
}
function isSuccess({ status }) {
  return ~~(status / 100) === 2;
}
function stackTraceWithoutCredentials(stackTrace) {
  return stackTrace.map((stackFrame) => stackFrameWithoutCredentials(stackFrame));
}
function stackFrameWithoutCredentials(stackFrame) {
  const modifiedHeaders = stackFrame.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return __spreadProps(__spreadValues({}, stackFrame), {
    request: __spreadProps(__spreadValues({}, stackFrame.request), {
      headers: __spreadValues(__spreadValues({}, stackFrame.request.headers), modifiedHeaders)
    })
  });
}
function createTransporter({
  hosts,
  hostsCache,
  baseHeaders,
  logger,
  baseQueryParameters,
  algoliaAgent,
  timeouts,
  requester,
  requestsCache,
  responsesCache
}) {
  async function createRetryableOptions(compatibleHosts) {
    const statefulHosts = await Promise.all(
      compatibleHosts.map((compatibleHost) => {
        return hostsCache.get(compatibleHost, () => {
          return Promise.resolve(createStatefulHost(compatibleHost));
        });
      })
    );
    const hostsUp = statefulHosts.filter((host) => host.isUp());
    const hostsTimedOut = statefulHosts.filter((host) => host.isTimedOut());
    const hostsAvailable = [...hostsUp, ...hostsTimedOut];
    const compatibleHostsAvailable = hostsAvailable.length > 0 ? hostsAvailable : compatibleHosts;
    return {
      hosts: compatibleHostsAvailable,
      getTimeout(timeoutsCount, baseTimeout) {
        const timeoutMultiplier = hostsTimedOut.length === 0 && timeoutsCount === 0 ? 1 : hostsTimedOut.length + 3 + timeoutsCount;
        return timeoutMultiplier * baseTimeout;
      }
    };
  }
  async function retryableRequest(request, requestOptions, isRead = true) {
    const stackTrace = [];
    const data = serializeData(request, requestOptions);
    const headers = serializeHeaders(baseHeaders, request.headers, requestOptions.headers);
    const dataQueryParameters = request.method === "GET" ? __spreadValues(__spreadValues({}, request.data), requestOptions.data) : {};
    const queryParameters = __spreadValues(__spreadValues(__spreadValues({}, baseQueryParameters), request.queryParameters), dataQueryParameters);
    if (algoliaAgent.value) {
      queryParameters["x-algolia-agent"] = algoliaAgent.value;
    }
    if (requestOptions && requestOptions.queryParameters) {
      for (const key of Object.keys(requestOptions.queryParameters)) {
        if (!requestOptions.queryParameters[key] || Object.prototype.toString.call(requestOptions.queryParameters[key]) === "[object Object]") {
          queryParameters[key] = requestOptions.queryParameters[key];
        } else {
          queryParameters[key] = requestOptions.queryParameters[key].toString();
        }
      }
    }
    let timeoutsCount = 0;
    const retry = async (retryableHosts, getTimeout) => {
      const host = retryableHosts.pop();
      if (host === void 0) {
        throw new RetryError(stackTraceWithoutCredentials(stackTrace));
      }
      const timeout = __spreadValues(__spreadValues({}, timeouts), requestOptions.timeouts);
      const payload = {
        data,
        headers,
        method: request.method,
        url: serializeUrl(host, request.path, queryParameters),
        connectTimeout: getTimeout(timeoutsCount, timeout.connect),
        responseTimeout: getTimeout(timeoutsCount, isRead ? timeout.read : timeout.write)
      };
      const pushToStackTrace = (response2) => {
        const stackFrame = {
          request: payload,
          response: response2,
          host,
          triesLeft: retryableHosts.length
        };
        stackTrace.push(stackFrame);
        return stackFrame;
      };
      const response = await requester.send(payload);
      if (isRetryable(response)) {
        const stackFrame = pushToStackTrace(response);
        if (response.isTimedOut) {
          timeoutsCount++;
        }
        logger.info("Retryable failure", stackFrameWithoutCredentials(stackFrame));
        await hostsCache.set(host, createStatefulHost(host, response.isTimedOut ? "timed out" : "down"));
        return retry(retryableHosts, getTimeout);
      }
      if (isSuccess(response)) {
        return deserializeSuccess(response);
      }
      pushToStackTrace(response);
      throw deserializeFailure(response, stackTrace);
    };
    const compatibleHosts = hosts.filter(
      (host) => host.accept === "readWrite" || (isRead ? host.accept === "read" : host.accept === "write")
    );
    const options = await createRetryableOptions(compatibleHosts);
    return retry([...options.hosts].reverse(), options.getTimeout);
  }
  function createRequest(request, requestOptions = {}) {
    const isRead = request.useReadTransporter || request.method === "GET";
    if (!isRead) {
      return retryableRequest(request, requestOptions, isRead);
    }
    const createRetryableRequest = () => {
      return retryableRequest(request, requestOptions);
    };
    const cacheable = requestOptions.cacheable || request.cacheable;
    if (cacheable !== true) {
      return createRetryableRequest();
    }
    const key = {
      request,
      requestOptions,
      transporter: {
        queryParameters: baseQueryParameters,
        headers: baseHeaders
      }
    };
    return responsesCache.get(
      key,
      () => {
        return requestsCache.get(
          key,
          () => (
            /**
             * Finally, if there is no request in progress with the same key,
             * this `createRetryableRequest()` will actually trigger the
             * retryable request.
             */
            requestsCache.set(key, createRetryableRequest()).then(
              (response) => Promise.all([requestsCache.delete(key), response]),
              (err) => Promise.all([requestsCache.delete(key), Promise.reject(err)])
            ).then(([_, response]) => response)
          )
        );
      },
      {
        /**
         * Of course, once we get this response back from the server, we
         * tell response cache to actually store the received response
         * to be used later.
         */
        miss: (response) => responsesCache.set(key, response)
      }
    );
  }
  return {
    hostsCache,
    requester,
    timeouts,
    logger,
    algoliaAgent,
    baseHeaders,
    baseQueryParameters,
    hosts,
    request: createRequest,
    requestsCache,
    responsesCache
  };
}

// node_modules/algoliasearch/dist/lite/builds/browser.js
var apiClientVersion = "5.35.0";
function getDefaultHosts(appId) {
  return [
    {
      url: `${appId}-dsn.algolia.net`,
      accept: "read",
      protocol: "https"
    },
    {
      url: `${appId}.algolia.net`,
      accept: "write",
      protocol: "https"
    }
  ].concat(
    shuffle([
      {
        url: `${appId}-1.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-2.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      },
      {
        url: `${appId}-3.algolianet.com`,
        accept: "readWrite",
        protocol: "https"
      }
    ])
  );
}
function createLiteClient(_a) {
  var _b = _a, {
    appId: appIdOption,
    apiKey: apiKeyOption,
    authMode,
    algoliaAgents
  } = _b, options = __objRest(_b, [
    "appId",
    "apiKey",
    "authMode",
    "algoliaAgents"
  ]);
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter(__spreadProps(__spreadValues({
    hosts: getDefaultHosts(appIdOption)
  }, options), {
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: "Lite",
      version: apiClientVersion
    }),
    baseHeaders: __spreadValues(__spreadValues({
      "content-type": "text/plain"
    }, auth.headers()), options.baseHeaders),
    baseQueryParameters: __spreadValues(__spreadValues({}, auth.queryParameters()), options.baseQueryParameters)
  }));
  return {
    transporter,
    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,
    /**
     * The `apiKey` currently in use.
     */
    apiKey: apiKeyOption,
    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache() {
      return Promise.all([transporter.requestsCache.clear(), transporter.responsesCache.clear()]).then(() => void 0);
    },
    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua() {
      return transporter.algoliaAgent.value;
    },
    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment, version) {
      transporter.algoliaAgent.add({ segment, version });
    },
    /**
     * Helper method to switch the API key used to authenticate the requests.
     *
     * @param params - Method params.
     * @param params.apiKey - The new API Key to use.
     */
    setClientApiKey({ apiKey }) {
      if (!authMode || authMode === "WithinHeaders") {
        transporter.baseHeaders["x-algolia-api-key"] = apiKey;
      } else {
        transporter.baseQueryParameters["x-algolia-api-key"] = apiKey;
      }
    },
    /**
     * Helper: calls the `search` method but with certainty that we will only request Algolia records (hits) and not facets.
     * Disclaimer: We don't assert that the parameters you pass to this method only contains `hits` requests to prevent impacting search performances, this helper is purely for typing purposes.
     *
     * @summary Search multiple indices for `hits`.
     * @param searchMethodParams - Query requests and strategies. Results will be received in the same order as the queries.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForHits(searchMethodParams, requestOptions) {
      return this.search(searchMethodParams, requestOptions);
    },
    /**
     * Helper: calls the `search` method but with certainty that we will only request Algolia facets and not records (hits).
     * Disclaimer: We don't assert that the parameters you pass to this method only contains `facets` requests to prevent impacting search performances, this helper is purely for typing purposes.
     *
     * @summary Search multiple indices for `facets`.
     * @param searchMethodParams - Query requests and strategies. Results will be received in the same order as the queries.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    searchForFacets(searchMethodParams, requestOptions) {
      return this.search(searchMethodParams, requestOptions);
    },
    /**
     * This method lets you send requests to the Algolia REST API.
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, for example `1/newFeature`.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost({ path, parameters, body }, requestOptions) {
      if (!path) {
        throw new Error("Parameter `path` is required when calling `customPost`.");
      }
      const requestPath = "/{path}".replace("{path}", path);
      const headers = {};
      const queryParameters = parameters ? parameters : {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {}
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Retrieves recommendations from selected AI models.
     *
     * Required API Key ACLs:
     *  - search
     * @param getRecommendationsParams - The getRecommendationsParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRecommendations(getRecommendationsParams, requestOptions) {
      if (getRecommendationsParams && Array.isArray(getRecommendationsParams)) {
        const newSignatureRequest = {
          requests: getRecommendationsParams
        };
        getRecommendationsParams = newSignatureRequest;
      }
      if (!getRecommendationsParams) {
        throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");
      }
      if (!getRecommendationsParams.requests) {
        throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");
      }
      const requestPath = "/1/indexes/*/recommendations";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: getRecommendationsParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    },
    /**
     * Sends multiple search requests to one or more indices.  This can be useful in these cases:  - Different indices for different purposes, such as, one index for products, another one for marketing content. - Multiple searches to the same index—for example, with different filters.  Use the helper `searchForHits` or `searchForFacets` to get the results in a more convenient format, if you already know the return type you want.
     *
     * Required API Key ACLs:
     *  - search
     * @param searchMethodParams - Muli-search request body. Results are returned in the same order as the requests.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    search(searchMethodParams, requestOptions) {
      if (searchMethodParams && Array.isArray(searchMethodParams)) {
        const newSignatureRequest = {
          requests: searchMethodParams.map((_a2) => {
            var _b2 = _a2, { params } = _b2, legacyRequest = __objRest(_b2, ["params"]);
            if (legacyRequest.type === "facet") {
              return __spreadProps(__spreadValues(__spreadValues({}, legacyRequest), params), {
                type: "facet"
              });
            }
            return __spreadProps(__spreadValues(__spreadValues({}, legacyRequest), params), {
              facet: void 0,
              maxFacetHits: void 0,
              facetQuery: void 0
            });
          })
        };
        searchMethodParams = newSignatureRequest;
      }
      if (!searchMethodParams) {
        throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
      }
      if (!searchMethodParams.requests) {
        throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
      }
      const requestPath = "/1/indexes/*/queries";
      const headers = {};
      const queryParameters = {};
      const request = {
        method: "POST",
        path: requestPath,
        queryParameters,
        headers,
        data: searchMethodParams,
        useReadTransporter: true,
        cacheable: true
      };
      return transporter.request(request, requestOptions);
    }
  };
}
function liteClient(appId, apiKey, options) {
  if (!appId || typeof appId !== "string") {
    throw new Error("`appId` is missing.");
  }
  if (!apiKey || typeof apiKey !== "string") {
    throw new Error("`apiKey` is missing.");
  }
  return createLiteClient(__spreadValues({
    appId,
    apiKey,
    timeouts: {
      connect: 1e3,
      read: 2e3,
      write: 3e4
    },
    logger: createNullLogger(),
    requester: m(),
    algoliaAgents: [{ segment: "Browser" }],
    authMode: "WithinQueryParameters",
    responsesCache: createMemoryCache(),
    requestsCache: createMemoryCache({ serializable: false }),
    hostsCache: createFallbackableCache({
      caches: [createBrowserLocalStorageCache({ key: `${apiClientVersion}-${appId}` }), createMemoryCache()]
    })
  }, options));
}

// src/app/core/site-search.service.ts
var PRODUCT_COLOR = "#1565D8";
var BLOG_COLOR = "#FF7A1A";
var PAGE_COLOR = "#6B46C1";
var SiteSearchService = class _SiteSearchService {
  catalog = inject(CatalogService);
  router = inject(Router);
  blogApi = inject(BlogApiService);
  staticItems = this.buildStaticItems();
  blogItems = signal([], ...ngDevMode ? [{ debugName: "blogItems" }] : []);
  constructor() {
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => this.blogItems.set(posts.map((post) => this.blogResult(post))),
      // Products and pages remain searchable if the CMS is temporarily offline.
      error: () => this.blogItems.set([])
    });
  }
  featured(limit = 8) {
    const pattern = /Tally on Cloud|DPDPA|Cloud Backup \(Acronis\)|VAPT Services|Secure DMARC|Microsoft 365|Bare Metal Server|SMB Cyber/;
    return this.staticItems.filter((item) => item.kind === "Product" && pattern.test(item.name)).slice(0, limit);
  }
  /** Current site inventory, including blogs as they arrive from the CMS. */
  browse() {
    return [...this.staticItems, ...this.blogItems()];
  }
  search(query, limit = 16) {
    const normalised = this.normalise(query);
    if (!normalised)
      return [];
    const terms = normalised.split(" ").filter(Boolean);
    return [...this.staticItems, ...this.blogItems()].map((item) => ({ item, score: this.score(item, normalised, terms) })).filter((candidate) => candidate.score > 0).sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name)).slice(0, limit).map((candidate) => candidate.item);
  }
  /** Resolve an indexed path only when it belongs to a page in this Angular site. */
  resultForUrl(url) {
    const path = this.normalisePath(url);
    return [...this.staticItems, ...this.blogItems()].find((item) => this.normalisePath(item.url) === path);
  }
  normalisePath(url) {
    return url.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
  }
  buildStaticItems() {
    const items = [];
    const urls = /* @__PURE__ */ new Set();
    const add = (item) => {
      if (urls.has(item.url))
        return;
      urls.add(item.url);
      items.push(item);
    };
    for (const slug of this.catalog.slugs) {
      if (slug === "bare-metal-servers" || slug === "acronis-genai")
        continue;
      const entry = this.catalog.entryBySlug(slug);
      if (!entry)
        continue;
      add({
        name: entry.name,
        desc: entry.desc,
        label: entry.cat,
        url: `/${slug}`,
        color: CATEGORY_COLORS[entry.cat] ?? PRODUCT_COLOR,
        kind: "Product",
        compareName: entry.name,
        searchText: this.normalise(`${entry.name} ${entry.desc} ${entry.cat} ${entry.group}`)
      });
    }
    const extraProductNames = /* @__PURE__ */ new Set([...Object.keys(DEEP_CONTENT), ...Object.keys(RICH_PRODUCTS)]);
    for (const name of extraProductNames) {
      const slug = slugify(name);
      const rich = RICH_PRODUCTS[name];
      const overview = this.catalog.rich(name)?.ov;
      add({
        name,
        desc: rich?.tagline ?? overview ?? "Explore this XcellHost product and its capabilities.",
        label: "Product",
        url: `/${slug}`,
        color: PRODUCT_COLOR,
        kind: "Product",
        searchText: this.normalise(`${name} ${rich?.tagline ?? ""} ${overview ?? ""} ${rich?.heroPoints.join(" ") ?? ""}`)
      });
    }
    add(this.pageResult("Home", "Cloud, cybersecurity, digital trust and managed services.", "/"));
    for (const [slug, page] of Object.entries(COMPANY_PAGES)) {
      add(this.pageResult(page.title, `${page.tagline} ${page.intro}`, `/company/${slug}`));
    }
    for (const category of this.catalog.categories) {
      add(this.pageResult(category.name, category.sub, `/category/${encodeURIComponent(category.name)}`));
    }
    for (const route of this.router.config)
      this.addRoute(route, "", add);
    return items;
  }
  addRoute(route, parent, add) {
    const path = route.path ?? "";
    if (path.includes(":") || path.includes("*") || route.redirectTo)
      return;
    const fullPath = [parent, path].filter(Boolean).join("/");
    if (fullPath) {
      const simpleKey = typeof route.data?.["key"] === "string" ? route.data["key"] : "";
      const simple = simpleKey ? SIMPLE_PAGES[simpleKey] : void 0;
      const title = String(route.data?.["searchTitle"] ?? route.data?.["title"] ?? simple?.t ?? "") || this.humanise(path);
      const desc = String(route.data?.["searchDescription"] ?? simple?.g ?? `Explore XcellHost's ${title} page.`);
      add(this.pageResult(title, desc, `/${fullPath}`));
    }
    for (const child of route.children ?? [])
      this.addRoute(child, fullPath, add);
  }
  pageResult(name, desc, url) {
    return {
      name,
      desc: this.plainText(desc),
      label: "Page",
      url,
      color: PAGE_COLOR,
      kind: "Page",
      searchText: this.normalise(`${name} ${this.plainText(desc)} ${url.replace(/[/-]/g, " ")}`)
    };
  }
  blogResult(post) {
    const desc = this.plainText(post.description);
    return {
      name: post.title,
      desc,
      label: "Blog",
      url: `/insights/${post.slug}`,
      color: BLOG_COLOR,
      kind: "Blog",
      searchText: this.normalise(`${post.title} ${desc} ${this.plainText(post.content)} ${post.category} ${post.author}`)
    };
  }
  score(item, query, terms) {
    const title = this.normalise(item.name);
    if (!terms.every((term) => item.searchText.includes(term)))
      return 0;
    let score = terms.length * 10;
    if (title === query)
      score += 200;
    else if (title.startsWith(query))
      score += 120;
    else if (title.includes(query))
      score += 80;
    else if (item.searchText.includes(query))
      score += 35;
    if (item.kind === "Product")
      score += 3;
    return score;
  }
  humanise(path) {
    return path.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
  }
  plainText(value) {
    return value.replace(/<[^>]*>/g, " ").replace(/&[a-z0-9#]+;/gi, " ").replace(/\s+/g, " ").trim();
  }
  normalise(value) {
    return this.plainText(value).toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }
  static \u0275fac = function SiteSearchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SiteSearchService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SiteSearchService, factory: _SiteSearchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SiteSearchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/core/algolia-search.service.ts
var AlgoliaSearchService = class _AlgoliaSearchService {
  siteSearch = inject(SiteSearchService);
  configured = Boolean(environment.algoliaAppId && environment.algoliaIndexName && environment.algoliaSearchApiKey);
  client = this.configured ? liteClient(environment.algoliaAppId, environment.algoliaSearchApiKey) : null;
  async search(query, limit = 100) {
    if (!this.client)
      return [];
    const response = await this.client.search({
      requests: [{ indexName: environment.algoliaIndexName, query, hitsPerPage: limit }]
    });
    const result = response.results[0];
    if (!result || !("hits" in result))
      return [];
    const seen = /* @__PURE__ */ new Set();
    return result.hits.map((hit) => this.toResult(hit)).filter((hit) => {
      if (!hit || seen.has(hit.url))
        return false;
      seen.add(hit.url);
      return true;
    });
  }
  toResult(hit) {
    const rawUrl = this.firstString(hit["url"], hit["path"], hit["permalink"]);
    const path = this.resultPath(rawUrl);
    return path ? this.siteSearch.resultForUrl(path) ?? null : null;
  }
  firstString(...values) {
    return values.find((value) => typeof value === "string" && !!value.trim())?.trim() ?? "";
  }
  resultPath(value) {
    if (!value)
      return null;
    if (value.startsWith("/") && !value.startsWith("//"))
      return value.split(/[?#]/, 1)[0];
    try {
      const url = new URL(value);
      if (url.protocol !== "https:" && url.protocol !== "http:")
        return null;
      return url.pathname;
    } catch {
      return null;
    }
  }
  static \u0275fac = function AlgoliaSearchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AlgoliaSearchService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlgoliaSearchService, factory: _AlgoliaSearchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlgoliaSearchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/overlays/ai-assistant.component.ts
var _c02 = ["composer"];
var _c12 = ["thread"];
var _forTrack05 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.url;
function AiAssistantComponent_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 23);
    \u0275\u0275domListener("click", function AiAssistantComponent_Conditional_15_For_2_Template_button_click_0_listener() {
      const prompt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.ask(prompt_r3));
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 21);
    \u0275\u0275text(4, "\u2197");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const prompt_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275domProperty("disabled", ctx_r3.busy());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prompt_r3);
  }
}
function AiAssistantComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, AiAssistantComponent_Conditional_15_For_2_Template, 5, 2, "button", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.prompts);
  }
}
function AiAssistantComponent_For_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 25)(1, "span", 21);
    \u0275\u0275text(2, "\u2726");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " XcellGenie");
    \u0275\u0275domElementEnd();
  }
}
function AiAssistantComponent_For_17_Conditional_3_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "a", 30);
    \u0275\u0275text(1);
    \u0275\u0275domElementStart(2, "span", 21);
    \u0275\u0275text(3, "\u2197");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const source_r6 = ctx.$implicit;
    \u0275\u0275domProperty("href", source_r6.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", source_r6.title, " ");
  }
}
function AiAssistantComponent_For_17_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "nav", 27);
    \u0275\u0275repeaterCreate(1, AiAssistantComponent_For_17_Conditional_3_Conditional_0_For_2_Template, 4, 2, "a", 30, _forTrack12);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const message_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(message_r7.sources);
  }
}
function AiAssistantComponent_For_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, AiAssistantComponent_For_17_Conditional_3_Conditional_0_Template, 3, 0, "nav", 27);
    \u0275\u0275domElementStart(1, "div", 28)(2, "button", 4);
    \u0275\u0275domListener("click", function AiAssistantComponent_For_17_Conditional_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const message_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.copy(message_r7));
    });
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "button", 29);
    \u0275\u0275domListener("click", function AiAssistantComponent_For_17_Conditional_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const message_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.retry(message_r7.id));
    });
    \u0275\u0275text(5, "\u21BB Retry");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const message_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional((message_r7.sources == null ? null : message_r7.sources.length) ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", ctx_r3.copied() === message_r7.id ? "Answer copied" : "Copy answer");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.copied() === message_r7.id ? "\u2713 Copied" : "\u25A2 Copy");
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r3.busy());
  }
}
function AiAssistantComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 24);
    \u0275\u0275conditionalCreate(1, AiAssistantComponent_For_17_Conditional_1_Template, 4, 0, "span", 25);
    \u0275\u0275domElement(2, "div", 26);
    \u0275\u0275conditionalCreate(3, AiAssistantComponent_For_17_Conditional_3_Template, 6, 4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const message_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ai-user", message_r7.role === "user");
    \u0275\u0275attribute("aria-label", message_r7.role === "user" ? "Your question" : "AI answer");
    \u0275\u0275advance();
    \u0275\u0275conditional(message_r7.role === "assistant" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275domProperty("innerHTML", ctx_r3.formatText(message_r7.text), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(message_r7.role === "assistant" ? 3 : -1);
  }
}
function AiAssistantComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 10)(1, "span", 21);
    \u0275\u0275text(2, "\u2726");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(3, " Finding an answer");
    \u0275\u0275domElementStart(4, "span", 31);
    \u0275\u0275text(5, "\u2026");
    \u0275\u0275domElementEnd()();
  }
}
function AiAssistantComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 11)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 23);
    \u0275\u0275domListener("click", function AiAssistantComponent_Conditional_19_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.retry());
    });
    \u0275\u0275text(4, "Try again");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.error());
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r3.busy());
  }
}
function AiAssistantComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.composerNotice());
  }
}
var AiAssistantComponent = class _AiAssistantComponent {
  initialQuestion = input("", ...ngDevMode ? [{ debugName: "initialQuestion" }] : []);
  navigate = output();
  draft = signal("", ...ngDevMode ? [{ debugName: "draft" }] : []);
  messages = signal([], ...ngDevMode ? [{ debugName: "messages" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  copied = signal(null, ...ngDevMode ? [{ debugName: "copied" }] : []);
  composerNotice = signal("", ...ngDevMode ? [{ debugName: "composerNotice" }] : []);
  prompts = GENIE_STARTERS;
  api = inject(ChatApiService);
  composer = viewChild("composer", ...ngDevMode ? [{ debugName: "composer" }] : []);
  thread = viewChild("thread", ...ngDevMode ? [{ debugName: "thread" }] : []);
  controller;
  generation = 0;
  nextId = 1;
  copyTimer;
  constructor() {
    afterNextRender(() => this.composer()?.nativeElement.focus());
    effect(() => {
      const question = this.initialQuestion();
      if (question)
        untracked(() => {
          this.draft.set(question);
          void this.send();
        });
    });
    inject(DestroyRef).onDestroy(() => {
      this.generation++;
      this.controller?.abort();
      clearTimeout(this.copyTimer);
    });
  }
  onInput(event) {
    this.draft.set(event.target.value);
  }
  onKey(event) {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      void this.send();
    }
  }
  ask(prompt) {
    this.draft.set(prompt);
    void this.send();
  }
  async send() {
    const text = this.draft().trim();
    if (!text || this.busy())
      return;
    if (text.length > 2e3) {
      this.composerNotice.set("Please keep your question under 2,000 characters.");
      return;
    }
    this.composerNotice.set("");
    if (this.error())
      this.messages.update((items) => items.filter((item) => item.id !== items.at(-1)?.id));
    this.messages.update((items) => [...items, { id: this.nextId++, role: "user", text }]);
    this.draft.set("");
    await this.requestAnswer();
  }
  async retry(messageId) {
    if (this.busy())
      return;
    if (messageId !== void 0) {
      const index = this.messages().findIndex((message) => message.id === messageId && message.role === "assistant");
      if (index < 0)
        return;
      this.messages.update((items) => items.slice(0, index));
    }
    if (this.messages().at(-1)?.role !== "user")
      return;
    await this.requestAnswer();
  }
  async requestAnswer() {
    const generation = ++this.generation;
    this.controller = new AbortController();
    const controller = this.controller;
    this.busy.set(true);
    this.error.set("");
    this.scrollToLatest();
    const timeout = setTimeout(() => controller.abort(), 45e3);
    try {
      const body = await this.api.ask(this.messages().map(({ role, text }) => ({ role, content: text })), controller.signal);
      if (generation !== this.generation)
        return;
      const sources = body.sources;
      this.messages.update((items) => [...items, { id: this.nextId++, role: "assistant", text: body.answer, sources }]);
    } catch (error) {
      if (generation !== this.generation)
        return;
      this.error.set(controller.signal.aborted ? "That took longer than expected. Please try again." : error instanceof TypeError || error instanceof SyntaxError ? "Could not connect to the assistant. Please try again." : error instanceof Error ? error.message : "Could not connect. Please try again.");
    } finally {
      clearTimeout(timeout);
      if (generation === this.generation) {
        this.busy.set(false);
        this.scrollToLatest();
        this.composer()?.nativeElement.focus();
      }
    }
  }
  newChat() {
    this.generation++;
    this.controller?.abort();
    this.messages.set([]);
    this.draft.set("");
    this.busy.set(false);
    this.error.set("");
    this.copied.set(null);
    this.composerNotice.set("");
    this.composer()?.nativeElement.focus();
  }
  async copy(message) {
    try {
      await navigator.clipboard.writeText(message.text);
      this.composerNotice.set("");
      this.copied.set(message.id);
      clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => this.copied.set(null), 2e3);
    } catch {
      this.composerNotice.set("Select the answer text to copy it.");
    }
  }
  formatText(text) {
    return formatAiText(text);
  }
  scrollToLatest() {
    const element = this.thread()?.nativeElement;
    element?.ownerDocument.defaultView?.requestAnimationFrame(() => {
      element.scrollTop = element.scrollHeight;
    });
  }
  static \u0275fac = function AiAssistantComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiAssistantComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiAssistantComponent, selectors: [["xh-ai-assistant"]], viewQuery: function AiAssistantComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.composer, _c02, 5);
      \u0275\u0275viewQuerySignal(ctx.thread, _c12, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, inputs: { initialQuestion: [1, "initialQuestion"] }, outputs: { navigate: "navigate" }, decls: 35, vars: 7, consts: [["thread", ""], ["composer", ""], [1, "ai-toolbar"], ["aria-hidden", "true", 1, "ai-dot"], ["type", "button", 3, "click"], ["role", "log", "aria-label", "Conversation with XcellGenie", "aria-live", "polite", 1, "ai-thread"], [1, "ai-welcome"], ["aria-hidden", "true", 1, "ai-avatar"], ["aria-label", "Suggested questions", 1, "ai-prompts"], [1, "ai-message", 3, "ai-user"], ["role", "status", 1, "ai-thinking"], ["role", "alert", 1, "ai-error"], [1, "ai-compose", 3, "submit"], ["for", "ai-question", 1, "ai-sr-only"], [1, "ai-compose-field"], ["id", "ai-question", "rows", "1", "maxlength", "2000", "placeholder", "Ask anything about XcellHost\u2026", 3, "input", "keydown", "value"], ["type", "submit", "aria-label", "Send question", 3, "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true"], ["d", "M12 19V5M5 12l7-7 7 7"], ["role", "status", 1, "ai-caption"], [1, "ai-caption"], ["aria-hidden", "true"], ["type", "button", 3, "disabled"], ["type", "button", 3, "click", "disabled"], [1, "ai-message"], [1, "ai-message-label"], [1, "ai-message-text", 3, "innerHTML"], ["aria-label", "Related XcellHost pages", 1, "ai-sources"], [1, "ai-message-actions"], ["type", "button", "aria-label", "Regenerate answer", 3, "click", "disabled"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["aria-hidden", "true", 1, "ai-dots"]], template: function AiAssistantComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "div", 2)(1, "span");
      \u0275\u0275domElement(2, "span", 3);
      \u0275\u0275text(3, " Your XcellHost guide");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "button", 4);
      \u0275\u0275domListener("click", function AiAssistantComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.newChat());
      });
      \u0275\u0275text(5, "\u21BB New chat");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 5, 0)(8, "section", 6)(9, "div", 7);
      \u0275\u0275text(10, "\u2726");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(11, "h2");
      \u0275\u0275text(12, "Hi! How can I help you today?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "p");
      \u0275\u0275text(14, "I'm XcellGenie, XcellHost's AI assistant. Ask me about our cloud, cybersecurity, backup and managed IT services. Let's find the right solution for your business.");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(15, AiAssistantComponent_Conditional_15_Template, 3, 0, "div", 8);
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(16, AiAssistantComponent_For_17_Template, 4, 6, "article", 9, _forTrack05);
      \u0275\u0275conditionalCreate(18, AiAssistantComponent_Conditional_18_Template, 6, 0, "div", 10);
      \u0275\u0275conditionalCreate(19, AiAssistantComponent_Conditional_19_Template, 5, 2, "div", 11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "form", 12);
      \u0275\u0275domListener("submit", function AiAssistantComponent_Template_form_submit_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.send());
      });
      \u0275\u0275domElementStart(21, "label", 13);
      \u0275\u0275text(22, "Ask anything about XcellHost");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "div", 14)(24, "textarea", 15, 1);
      \u0275\u0275domListener("input", function AiAssistantComponent_Template_textarea_input_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInput($event));
      })("keydown", function AiAssistantComponent_Template_textarea_keydown_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKey($event));
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "button", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(27, "svg", 17);
      \u0275\u0275domElement(28, "path", 18);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275conditionalCreate(29, AiAssistantComponent_Conditional_29_Template, 2, 1, "p", 19);
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(30, "p", 20);
      \u0275\u0275text(31, "Powered by OpenAI ");
      \u0275\u0275domElementStart(32, "span", 21);
      \u0275\u0275text(33, "\xB7");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(34, " Check important details with our team.");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275attribute("aria-busy", ctx.busy());
      \u0275\u0275advance(9);
      \u0275\u0275conditional(!ctx.messages().length ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.messages());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.busy() ? 18 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 19 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("value", ctx.draft());
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", ctx.busy() || !ctx.draft().trim());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.composerNotice() ? 29 : -1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  color: #1a2940;\n  background: #fff;\n  font: 400 14px/1.7 var(--body);\n}\nbutton[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: .5;\n}\n.ai-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 28px;\n  color: #8792a4;\n  font-size: 11px;\n}\n.ai-toolbar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.ai-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #2563eb;\n}\n.ai-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  color: #65758b;\n  font-size: 11px;\n}\n.ai-thread[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 22px 28px;\n}\n.ai-welcome[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin-bottom: 28px;\n}\n.ai-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  color: #ff8c37;\n  font-size: 28px;\n  background: #fff5ea;\n  border: 1px solid #ffe5c5;\n  border-radius: 12px;\n  margin-bottom: 14px;\n}\n.ai-welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 600 22px/1.4 var(--disp);\n  color: #112b53;\n  margin: 0 0 10px;\n}\n.ai-welcome[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #65748c;\n}\n.ai-prompts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 24px;\n}\n.ai-prompts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  text-align: left;\n  padding: 13px 15px;\n  border: 1px solid #e4eaf5;\n  border-radius: 10px;\n  background: #fafbff;\n  color: #3d587d;\n  font-size: 12px;\n  line-height: 1.6;\n}\n.ai-prompts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #b2c7ff;\n  background: #f2f6ff;\n}\n.ai-prompts[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  color: #97aad0;\n}\n.ai-message[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.ai-message-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #4c6382;\n  margin-bottom: 8px;\n}\n.ai-message-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff8c37;\n  margin-right: 6px;\n}\n.ai-message-text[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.ai-user[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: fit-content;\n  max-width: 80%;\n  background: #f2f4f8;\n  border-radius: 16px 16px 4px 16px;\n  padding: 10px 16px;\n}\n.ai-sources[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 14px;\n}\n.ai-sources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #e3eaf6;\n  color: #2563eb;\n  background: #fafbff;\n  padding: 5px 10px;\n  border-radius: 7px;\n  text-decoration: none;\n  font-size: 11px;\n}\n.ai-sources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #edf3ff;\n}\n.ai-message-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  margin-top: 12px;\n}\n.ai-message-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  color: #8795ad;\n  font-size: 11px;\n  padding: 2px;\n}\n.ai-thinking[_ngcontent-%COMP%] {\n  color: #65748c;\n  font-size: 13px;\n  padding: 10px 0;\n}\n.ai-thinking[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  color: #ff8c37;\n  margin-right: 8px;\n}\n.ai-dots[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pulse 1.2s infinite;\n}\n.ai-error[_ngcontent-%COMP%] {\n  background: #fff5f5;\n  border: 1px solid #ffdcdc;\n  padding: 12px 16px;\n  border-radius: 10px;\n  color: #a83e3e;\n  font-size: 12px;\n}\n.ai-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n}\n.ai-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: 0;\n  color: #2563eb;\n  padding: 0;\n}\n.ai-compose[_ngcontent-%COMP%] {\n  padding: 16px 28px 12px;\n  background: #fff;\n}\n.ai-compose-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  border: 1px solid #b6c9ff;\n  border-radius: 16px;\n  padding: 10px 12px;\n  box-shadow: 0 0 0 3px #f0f4ff;\n}\n.ai-compose-field[_ngcontent-%COMP%]:focus-within {\n  border-color: #4f7aff;\n  box-shadow: 0 0 0 3px #eaf0ff;\n}\ntextarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: none;\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: #1a2940;\n  padding: 3px 0;\n  max-height: 120px;\n  min-height: 28px;\n  line-height: 1.7;\n}\ntextarea[_ngcontent-%COMP%]::placeholder {\n  color: #94a0b5;\n}\n.ai-compose-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  background: #1553ff;\n  color: #fff;\n}\n.ai-compose-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #003cda;\n}\n.ai-caption[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  text-align: center;\n  font-size: 10px;\n  color: #8a97ac;\n}\n.ai-caption[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.ai-sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \na[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 3px;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  50% {\n    opacity: .4;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .ai-dots[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .ai-thread[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .ai-toolbar[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n  }\n  .ai-compose[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .ai-welcome[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .ai-prompts[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ai-user[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  textarea[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .ai-caption[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n}\n/*# sourceMappingURL=ai-assistant.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiAssistantComponent, [{
    type: Component,
    args: [{ selector: "xh-ai-assistant", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="ai-toolbar"><span><span class="ai-dot" aria-hidden="true"></span> Your XcellHost guide</span><button type="button" (click)="newChat()">\u21BB New chat</button></div>\r
<div class="ai-thread" #thread role="log" aria-label="Conversation with XcellGenie" aria-live="polite" [attr.aria-busy]="busy()">\r
  <section class="ai-welcome">\r
    <div class="ai-avatar" aria-hidden="true">\u2726</div>\r
    <h2>Hi! How can I help you today?</h2>\r
    <p>I'm XcellGenie, XcellHost's AI assistant. Ask me about our cloud, cybersecurity, backup and managed IT services. Let's find the right solution for your business.</p>\r
    @if (!messages().length) {\r
      <div class="ai-prompts" aria-label="Suggested questions">@for (prompt of prompts; track prompt) { <button type="button" [disabled]="busy()" (click)="ask(prompt)"><span>{{ prompt }}</span><span aria-hidden="true">\u2197</span></button> }</div>\r
    }\r
  </section>\r
  @for (message of messages(); track message.id) {\r
    <article class="ai-message" [class.ai-user]="message.role === 'user'" [attr.aria-label]="message.role === 'user' ? 'Your question' : 'AI answer'">\r
      @if (message.role === 'assistant') { <span class="ai-message-label"><span aria-hidden="true">\u2726</span> XcellGenie</span> }\r
      <div class="ai-message-text" [innerHTML]="formatText(message.text)"></div>\r
      @if (message.role === 'assistant') {\r
        @if (message.sources?.length) { <nav class="ai-sources" aria-label="Related XcellHost pages">@for (source of message.sources; track source.url) { <a [href]="source.url" target="_blank" rel="noopener noreferrer">{{ source.title }} <span aria-hidden="true">\u2197</span></a> }</nav> }\r
        <div class="ai-message-actions"><button type="button" (click)="copy(message)" [attr.aria-label]="copied() === message.id ? 'Answer copied' : 'Copy answer'">{{ copied() === message.id ? '\u2713 Copied' : '\u25A2 Copy' }}</button><button type="button" [disabled]="busy()" (click)="retry(message.id)" aria-label="Regenerate answer">\u21BB Retry</button></div>\r
      }\r
    </article>\r
  }\r
  @if (busy()) { <div class="ai-thinking" role="status"><span aria-hidden="true">\u2726</span> Finding an answer<span class="ai-dots" aria-hidden="true">\u2026</span></div> }\r
  @if (error()) { <div class="ai-error" role="alert"><p>{{ error() }}</p><button type="button" [disabled]="busy()" (click)="retry()">Try again</button></div> }\r
</div>\r
<form class="ai-compose" (submit)="$event.preventDefault(); send()">\r
  <label class="ai-sr-only" for="ai-question">Ask anything about XcellHost</label>\r
  <div class="ai-compose-field"><textarea id="ai-question" #composer rows="1" maxlength="2000" placeholder="Ask anything about XcellHost\u2026" [value]="draft()" (input)="onInput($event)" (keydown)="onKey($event)"></textarea><button type="submit" [disabled]="busy() || !draft().trim()" aria-label="Send question"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg></button></div>\r
  @if (composerNotice()) { <p class="ai-caption" role="status">{{ composerNotice() }}</p> }\r
  <p class="ai-caption">Powered by OpenAI <span aria-hidden="true">\xB7</span> Check important details with our team.</p>\r
</form>\r
`, styles: ["/* src/app/overlays/ai-assistant.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: 0;\n  color: #1a2940;\n  background: #fff;\n  font: 400 14px/1.7 var(--body);\n}\nbutton,\ntextarea {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n}\nbutton:disabled {\n  cursor: default;\n  opacity: .5;\n}\n.ai-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 28px;\n  color: #8792a4;\n  font-size: 11px;\n}\n.ai-toolbar > span {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.ai-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #2563eb;\n}\n.ai-toolbar button {\n  border: 0;\n  background: none;\n  color: #65758b;\n  font-size: 11px;\n}\n.ai-thread {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: 22px 28px;\n}\n.ai-welcome {\n  max-width: 640px;\n  margin-bottom: 28px;\n}\n.ai-avatar {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  color: #ff8c37;\n  font-size: 28px;\n  background: #fff5ea;\n  border: 1px solid #ffe5c5;\n  border-radius: 12px;\n  margin-bottom: 14px;\n}\n.ai-welcome h2 {\n  font: 600 22px/1.4 var(--disp);\n  color: #112b53;\n  margin: 0 0 10px;\n}\n.ai-welcome p {\n  margin: 0;\n  color: #65748c;\n}\n.ai-prompts {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 24px;\n}\n.ai-prompts button {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 14px;\n  text-align: left;\n  padding: 13px 15px;\n  border: 1px solid #e4eaf5;\n  border-radius: 10px;\n  background: #fafbff;\n  color: #3d587d;\n  font-size: 12px;\n  line-height: 1.6;\n}\n.ai-prompts button:hover {\n  border-color: #b2c7ff;\n  background: #f2f6ff;\n}\n.ai-prompts button > span:last-child {\n  color: #97aad0;\n}\n.ai-message {\n  margin: 24px 0;\n}\n.ai-message-label {\n  display: block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #4c6382;\n  margin-bottom: 8px;\n}\n.ai-message-label span {\n  color: #ff8c37;\n  margin-right: 6px;\n}\n.ai-message-text {\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n.ai-user {\n  margin-left: auto;\n  width: fit-content;\n  max-width: 80%;\n  background: #f2f4f8;\n  border-radius: 16px 16px 4px 16px;\n  padding: 10px 16px;\n}\n.ai-sources {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 14px;\n}\n.ai-sources a {\n  border: 1px solid #e3eaf6;\n  color: #2563eb;\n  background: #fafbff;\n  padding: 5px 10px;\n  border-radius: 7px;\n  text-decoration: none;\n  font-size: 11px;\n}\n.ai-sources a:hover {\n  background: #edf3ff;\n}\n.ai-message-actions {\n  display: flex;\n  gap: 16px;\n  margin-top: 12px;\n}\n.ai-message-actions button {\n  border: 0;\n  background: none;\n  color: #8795ad;\n  font-size: 11px;\n  padding: 2px;\n}\n.ai-thinking {\n  color: #65748c;\n  font-size: 13px;\n  padding: 10px 0;\n}\n.ai-thinking > span:first-child {\n  color: #ff8c37;\n  margin-right: 8px;\n}\n.ai-dots {\n  animation: pulse 1.2s infinite;\n}\n.ai-error {\n  background: #fff5f5;\n  border: 1px solid #ffdcdc;\n  padding: 12px 16px;\n  border-radius: 10px;\n  color: #a83e3e;\n  font-size: 12px;\n}\n.ai-error p {\n  margin: 0 0 6px;\n}\n.ai-error button {\n  background: none;\n  border: 0;\n  color: #2563eb;\n  padding: 0;\n}\n.ai-compose {\n  padding: 16px 28px 12px;\n  background: #fff;\n}\n.ai-compose-field {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  border: 1px solid #b6c9ff;\n  border-radius: 16px;\n  padding: 10px 12px;\n  box-shadow: 0 0 0 3px #f0f4ff;\n}\n.ai-compose-field:focus-within {\n  border-color: #4f7aff;\n  box-shadow: 0 0 0 3px #eaf0ff;\n}\ntextarea {\n  width: 100%;\n  resize: none;\n  border: 0;\n  outline: none;\n  background: transparent;\n  color: #1a2940;\n  padding: 3px 0;\n  max-height: 120px;\n  min-height: 28px;\n  line-height: 1.7;\n}\ntextarea::placeholder {\n  color: #94a0b5;\n}\n.ai-compose-field button {\n  display: grid;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  background: #1553ff;\n  color: #fff;\n}\n.ai-compose-field button:hover:not(:disabled) {\n  background: #003cda;\n}\n.ai-caption {\n  margin: 9px 0 0;\n  text-align: center;\n  font-size: 10px;\n  color: #8a97ac;\n}\n.ai-caption span {\n  margin: 0 5px;\n}\n.ai-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\nbutton:focus-visible,\na:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 3px;\n}\n@keyframes pulse {\n  50% {\n    opacity: .4;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .ai-dots {\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .ai-thread {\n    padding: 16px;\n  }\n  .ai-toolbar {\n    padding: 8px 16px;\n  }\n  .ai-compose {\n    padding: 12px 16px;\n  }\n  .ai-welcome h2 {\n    font-size: 20px;\n  }\n  .ai-prompts {\n    grid-template-columns: 1fr;\n  }\n  .ai-user {\n    max-width: 90%;\n  }\n  textarea {\n    font-size: 16px;\n  }\n  .ai-caption {\n    font-size: 9px;\n  }\n}\n/*# sourceMappingURL=ai-assistant.component.css.map */\n"] }]
  }], () => [], { initialQuestion: [{ type: Input, args: [{ isSignal: true, alias: "initialQuestion", required: false }] }], navigate: [{ type: Output, args: ["navigate"] }], composer: [{ type: ViewChild, args: ["composer", { isSignal: true }] }], thread: [{ type: ViewChild, args: ["thread", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiAssistantComponent, { className: "AiAssistantComponent", filePath: "src/app/overlays/ai-assistant.component.ts", lineNumber: 12 });
})();

// src/app/overlays/search-dialog.component.ts
var _c03 = ["srchI"];
var _c13 = ["searchBox"];
var _forTrack06 = ($index, $item) => $item.value;
var _forTrack13 = ($index, $item) => $item.url;
var _forTrack2 = ($index, $item) => $item.text;
function SearchDialogComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_4_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.setQuery("");
      return \u0275\u0275resetView(ctx_r2.focusSearch());
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
  }
}
function SearchDialogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "circle", 14)(3, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 16, 1);
    \u0275\u0275listener("input", function SearchDialogComponent_Conditional_4_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, SearchDialogComponent_Conditional_4_Conditional_6_Template, 2, 0, "button", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", ctx_r2.aiMode() ? "Ask a question about XcellHost\u2026" : "Search products, pages and blogs\u2026")("value", ctx_r2.q());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.q() ? 6 : -1);
  }
}
function SearchDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 8);
    \u0275\u0275text(2, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "XcellHost Assist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6, "Ask. Explore. Find your solution.");
    \u0275\u0275elementEnd()();
  }
}
function SearchDialogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "xh-ai-assistant", 19);
    \u0275\u0275listener("navigate", function SearchDialogComponent_Conditional_12_Template_xh_ai_assistant_navigate_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("initialQuestion", ctx_r2.aiQuestion());
  }
}
function SearchDialogComponent_Conditional_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_13_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, "Reset");
    \u0275\u0275elementEnd();
  }
}
function SearchDialogComponent_Conditional_13_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 23)(1, "input", 34);
    \u0275\u0275listener("change", function SearchDialogComponent_Conditional_13_For_7_Template_input_change_1_listener() {
      const source_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFilter("source", source_r8.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const source_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.sources().includes(source_r8.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(source_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(source_r8.count);
  }
}
function SearchDialogComponent_Conditional_13_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 23)(1, "input", 34);
    \u0275\u0275listener("change", function SearchDialogComponent_Conditional_13_For_11_Template_input_change_1_listener() {
      const category_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleFilter("category", category_r10.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.categories().includes(category_r10.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r10.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r10.count);
  }
}
function SearchDialogComponent_Conditional_13_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_13_Conditional_20_For_2_Template_button_click_0_listener() {
      const question_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.askQuestion(question_r12));
    });
    \u0275\u0275elementStart(1, "span", 37);
    \u0275\u0275text(2, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 38);
    \u0275\u0275text(6, "\u2197");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r12 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(question_r12.text);
  }
}
function SearchDialogComponent_Conditional_13_Conditional_20_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_13_Conditional_20_For_7_Template_button_click_0_listener() {
      const suggestion_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.setQuery(suggestion_r14);
      return \u0275\u0275resetView(ctx_r2.focusSearch());
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, "\u2196");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const suggestion_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(suggestion_r14);
  }
}
function SearchDialogComponent_Conditional_13_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 35);
    \u0275\u0275repeaterCreate(1, SearchDialogComponent_Conditional_13_Conditional_20_For_2_Template, 7, 1, "button", 22, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "section", 36)(4, "h2");
    \u0275\u0275text(5, "Suggestions");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, SearchDialogComponent_Conditional_13_Conditional_20_For_7_Template, 5, 1, "button", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.questions);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.suggestions);
  }
}
function SearchDialogComponent_Conditional_13_For_28_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_13_For_28_Conditional_14_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const r_r19 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggle(r_r19.compareName, $event));
    });
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", ctx_r2.isPicked(r_r19.compareName));
    \u0275\u0275property("disabled", !ctx_r2.isPicked(r_r19.compareName) && ctx_r2.picked().length >= 4);
    \u0275\u0275attribute("aria-label", "Compare " + r_r19.name)("aria-pressed", ctx_r2.isPicked(r_r19.compareName));
  }
}
function SearchDialogComponent_Conditional_13_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("mouseenter", function SearchDialogComponent_Conditional_13_For_28_Template_div_mouseenter_0_listener() {
      const \u0275$index_137_r17 = \u0275\u0275restoreView(_r16).$index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cur.set(\u0275$index_137_r17));
    });
    \u0275\u0275elementStart(1, "a", 40);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_13_For_28_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275elementStart(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(14, SearchDialogComponent_Conditional_13_For_28_Conditional_14_Template, 2, 5, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r19 = ctx.$implicit;
    const \u0275$index_137_r17 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", \u0275$index_137_r17 === ctx_r2.cur());
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", r_r19.url);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", r_r19.color);
    \u0275\u0275attribute("aria-label", r_r19.kind);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r19.kind === "Product" ? "\u25C8" : r_r19.kind === "Blog" ? "\u25A4" : "\u25A7");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r19.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", r_r19.kind, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r19.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r19.desc);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r19.compareName ? 14 : -1);
  }
}
function SearchDialogComponent_Conditional_13_ForEmpty_29_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_13_ForEmpty_29_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearFilters());
    });
    \u0275\u0275text(1, "Clear filters");
    \u0275\u0275elementEnd();
  }
}
function SearchDialogComponent_Conditional_13_ForEmpty_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "strong");
    \u0275\u0275text(2, "No matching results");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try another search or clear your filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SearchDialogComponent_Conditional_13_ForEmpty_29_Conditional_5_Template, 2, 0, "button", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.hasFilters() ? 5 : -1);
  }
}
function SearchDialogComponent_Conditional_13_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_13_Conditional_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showMore());
    });
    \u0275\u0275text(2, "Show more results ");
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, "\u2193");
    \u0275\u0275elementEnd()()();
  }
}
function SearchDialogComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "aside", 20)(2, "div", 21)(3, "h2");
    \u0275\u0275text(4, "Filter by source");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, SearchDialogComponent_Conditional_13_Conditional_5_Template, 2, 0, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(6, SearchDialogComponent_Conditional_13_For_7_Template, 6, 3, "label", 23, _forTrack06);
    \u0275\u0275elementStart(8, "h2", 24);
    \u0275\u0275text(9, "Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, SearchDialogComponent_Conditional_13_For_11_Template, 6, 3, "label", 23, _forTrack06);
    \u0275\u0275elementStart(12, "div", 25);
    \u0275\u0275text(13, "Find your next");
    \u0275\u0275element(14, "br");
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16, "business advantage.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "Cloud. Security. Peace of mind.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 26);
    \u0275\u0275conditionalCreate(20, SearchDialogComponent_Conditional_13_Conditional_20_Template, 8, 0);
    \u0275\u0275elementStart(21, "div", 27)(22, "h2");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 28);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 29);
    \u0275\u0275repeaterCreate(27, SearchDialogComponent_Conditional_13_For_28_Template, 15, 12, "div", 30, _forTrack13, false, SearchDialogComponent_Conditional_13_ForEmpty_29_Template, 6, 1, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(30, SearchDialogComponent_Conditional_13_Conditional_30_Template, 5, 0, "div", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.hasFilters() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.sourceOptions());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.categoryOptions());
    \u0275\u0275advance(9);
    \u0275\u0275attribute("aria-busy", ctx_r2.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.q().trim() ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.q().trim() ? "Search results" : "Products & resources");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.resultStatus());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.results());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.filteredResults().length > ctx_r2.results().length ? 30 : -1);
  }
}
function SearchDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 48);
    \u0275\u0275listener("click", function SearchDialogComponent_Conditional_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goCompare());
    });
    \u0275\u0275text(4, "Compare \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.countLabel());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.canCompare());
  }
}
var DEBOUNCE_MS = 120;
var MAX_COMPARE = 4;
var SearchDialogComponent = class _SearchDialogComponent {
  search = inject(SiteSearchService);
  algolia = inject(AlgoliaSearchService);
  router = inject(Router);
  injector = inject(Injector);
  overlay = inject(OverlayService);
  inputRef = viewChild("srchI", ...ngDevMode ? [{ debugName: "inputRef" }] : []);
  boxRef = viewChild("searchBox", ...ngDevMode ? [{ debugName: "boxRef" }] : []);
  /** Raw field value, repainted every keystroke. */
  q = signal("", ...ngDevMode ? [{ debugName: "q" }] : []);
  /** Debounced copy of `q` — the only thing `results` depends on. */
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  /** Index of the highlighted row. */
  cur = signal(0, ...ngDevMode ? [{ debugName: "cur" }] : []);
  /** Service names ticked for comparison, capped at four. */
  picked = signal([], ...ngDevMode ? [{ debugName: "picked" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  remoteFailed = signal(false, ...ngDevMode ? [{ debugName: "remoteFailed" }] : []);
  remoteResults = signal(null, ...ngDevMode ? [{ debugName: "remoteResults" }] : []);
  requestId = 0;
  aiMode = signal(false, ...ngDevMode ? [{ debugName: "aiMode" }] : []);
  sources = signal([], ...ngDevMode ? [{ debugName: "sources" }] : []);
  categories = signal([], ...ngDevMode ? [{ debugName: "categories" }] : []);
  visibleLimit = signal(6, ...ngDevMode ? [{ debugName: "visibleLimit" }] : []);
  aiQuestion = signal("", ...ngDevMode ? [{ debugName: "aiQuestion" }] : []);
  previousFocus = null;
  questions = [
    { text: "How can I protect my business from cyber threats?", query: "security" },
    { text: "Which cloud solution is right for my business?", query: "cloud" },
    { text: "How do I back up Microsoft 365 data?", query: "Microsoft 365 Backup" },
    { text: "Can you help me manage and monitor my IT?", query: "managed" }
  ];
  suggestions = ["Cloud backup", "Microsoft 365", "Tally on Cloud", "VAPT Services"];
  timer = null;
  candidates = computed(() => {
    const s = this.query().trim();
    if (!s) {
      const featured = this.search.featured();
      const seen2 = new Set(featured.map((hit) => hit.url));
      return [...featured, ...this.search.browse().filter((hit) => !seen2.has(hit.url))];
    }
    const local = this.search.search(s, this.search.browse().length);
    const remote = this.remoteResults() ?? [];
    const seen = new Set(remote.map((hit) => hit.url));
    return [...remote, ...local.filter((hit) => !seen.has(hit.url))];
  }, ...ngDevMode ? [{ debugName: "candidates" }] : []);
  sourceOptions = computed(() => ["Product", "Page", "Blog"].map((value) => ({
    value,
    label: value === "Product" ? "Products & services" : value === "Page" ? "Website pages" : "Blog & insights",
    count: this.candidates().filter((hit) => hit.kind === value && (!this.categories().length || this.categories().includes(hit.label))).length
  })), ...ngDevMode ? [{ debugName: "sourceOptions" }] : []);
  categoryOptions = computed(() => {
    const items = this.candidates().filter((hit) => hit.kind === "Product");
    const labels = new Set(this.search.browse().filter((hit) => hit.kind === "Product").map((hit) => hit.label));
    return [...labels].sort().map((value) => ({ value, count: items.filter((hit) => hit.label === value && (!this.sources().length || this.sources().includes(hit.kind))).length }));
  }, ...ngDevMode ? [{ debugName: "categoryOptions" }] : []);
  filteredResults = computed(() => this.candidates().filter((hit) => (!this.sources().length || this.sources().includes(hit.kind)) && (!this.categories().length || this.categories().includes(hit.label))), ...ngDevMode ? [{ debugName: "filteredResults" }] : []);
  results = computed(() => this.filteredResults().slice(0, this.visibleLimit()), ...ngDevMode ? [{ debugName: "results" }] : []);
  hasFilters = computed(() => this.sources().length > 0 || this.categories().length > 0, ...ngDevMode ? [{ debugName: "hasFilters" }] : []);
  resultStatus = computed(() => {
    if (!this.query().trim())
      return this.hasFilters() ? `${this.filteredResults().length} results` : "Explore products & resources";
    if (this.loading())
      return "Searching\u2026";
    if (this.remoteFailed())
      return "Live search unavailable \xB7 showing site results";
    return `${this.filteredResults().length} site results`;
  }, ...ngDevMode ? [{ debugName: "resultStatus" }] : []);
  countLabel = computed(() => {
    const n = this.picked().length;
    return `${n} selected to compare${n >= MAX_COMPARE ? " (max)" : ""}`;
  }, ...ngDevMode ? [{ debugName: "countLabel" }] : []);
  canCompare = computed(() => this.picked().length >= 2, ...ngDevMode ? [{ debugName: "canCompare" }] : []);
  focusTimer;
  constructor() {
    effect(() => {
      if (!this.overlay.isOpen("search")) {
        untracked(() => {
          this.aiMode.set(false);
          this.resetAnswer();
          this.requestId++;
          if (this.timer)
            clearTimeout(this.timer);
          if (this.focusTimer)
            clearTimeout(this.focusTimer);
          this.previousFocus?.focus();
          this.previousFocus = null;
        });
        return;
      }
      untracked(() => {
        this.previousFocus = this.inputRef()?.nativeElement.ownerDocument.activeElement;
        this.resetAnswer();
        this.aiMode.set(false);
        this.clearFilters();
        this.q.set("");
        this.query.set("");
        this.cur.set(0);
        this.remoteResults.set(null);
        this.remoteFailed.set(false);
        this.loading.set(false);
        this.requestId++;
      });
      this.focusTimer = setTimeout(() => this.inputRef()?.nativeElement.focus(), 140);
    });
    inject(DestroyRef).onDestroy(() => {
      if (this.timer)
        clearTimeout(this.timer);
      if (this.focusTimer)
        clearTimeout(this.focusTimer);
    });
  }
  /* ------------------------------------------------------------ input */
  onInput(ev) {
    const v = ev.target.value;
    this.setQuery(v);
  }
  setQuery(v) {
    this.q.set(v);
    this.resetAnswer();
    this.visibleLimit.set(6);
    this.requestId++;
    this.remoteResults.set(null);
    this.remoteFailed.set(false);
    this.loading.set(false);
    if (this.timer)
      clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.query.set(v);
      this.cur.set(0);
      if (v.trim() && this.algolia.configured)
        void this.searchAlgolia(v.trim(), this.requestId);
    }, DEBOUNCE_MS);
  }
  toggleFilter(type, value) {
    const selected = type === "source" ? this.sources : this.categories;
    selected.update((values) => values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
    this.visibleLimit.set(6);
    this.cur.set(0);
    this.resetAnswer();
  }
  clearFilters() {
    this.sources.set([]);
    this.categories.set([]);
    this.cur.set(0);
    this.visibleLimit.set(6);
    this.resetAnswer();
  }
  showMore() {
    this.visibleLimit.update((limit) => limit + 10);
  }
  focusSearch() {
    this.inputRef()?.nativeElement.focus();
  }
  toggleAi() {
    const mode = !this.aiMode();
    this.aiQuestion.set(mode ? this.q().trim() : "");
    this.aiMode.set(mode);
    if (!mode)
      this.focusTimer = setTimeout(() => this.inputRef()?.nativeElement.focus());
  }
  askQuestion(question) {
    this.aiQuestion.set(question.text);
    this.aiMode.set(true);
  }
  resetAnswer() {
    this.aiQuestion.set("");
  }
  async searchAlgolia(query, requestId) {
    this.loading.set(true);
    try {
      const hits = await this.algolia.search(query);
      if (requestId !== this.requestId || !this.overlay.isOpen("search"))
        return;
      this.remoteResults.set(hits);
      this.cur.set(0);
    } catch {
      if (requestId !== this.requestId || !this.overlay.isOpen("search"))
        return;
      this.remoteFailed.set(true);
    } finally {
      if (requestId === this.requestId)
        this.loading.set(false);
    }
  }
  /**
   * `/` opens the dialog from anywhere; the arrows and Enter drive the result
   * list while it is open, wherever focus happens to be.
   */
  onDocumentKey(ev) {
    const open = this.overlay.isOpen("search");
    if (!open) {
      const tag = ev.target?.tagName ?? "";
      if (ev.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) {
        ev.preventDefault();
        this.overlay.open("search");
      }
      return;
    }
    const last = this.results().length - 1;
    if (ev.key === "Tab") {
      const box = this.boxRef()?.nativeElement;
      const focusable = Array.from(box?.querySelectorAll("input, textarea, button:not(:disabled), a[href]") ?? []);
      const first = focusable[0];
      const final = focusable[focusable.length - 1];
      if (ev.shiftKey && ev.target === first) {
        ev.preventDefault();
        final?.focus();
      } else if (!ev.shiftKey && ev.target === final) {
        ev.preventDefault();
        first?.focus();
      }
      return;
    }
    if (ev.target !== this.inputRef()?.nativeElement)
      return;
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      this.cur.update((i) => Math.min(i + 1, last));
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      this.cur.update((i) => Math.max(i - 1, 0));
    } else if (ev.key === "Enter") {
      const hit = this.results()[this.cur()];
      if (hit) {
        ev.preventDefault();
        this.go(hit);
      }
    }
    if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
      const input2 = this.inputRef()?.nativeElement;
      input2?.ownerDocument.defaultView?.requestAnimationFrame(() => input2.closest(".srch-box")?.querySelector(".sr.on")?.scrollIntoView({ block: "nearest" }));
    }
  }
  /* ----------------------------------------------------------- results */
  /** Backdrop click — only when the click landed on the layer itself. */
  onBackdrop(ev) {
    if (ev.target === ev.currentTarget)
      this.close();
  }
  close() {
    this.requestId++;
    if (this.timer)
      clearTimeout(this.timer);
    this.resetAnswer();
    this.aiMode.set(false);
    this.overlay.close("search");
    this.previousFocus?.focus();
  }
  go(hit) {
    this.close();
    void this.router.navigateByUrl(hit.url);
  }
  isPicked(name) {
    return this.picked().includes(name);
  }
  /** `.sr-cmp` sits inside the result link, so its click must not navigate. */
  toggle(name, ev) {
    ev.preventDefault();
    ev.stopPropagation();
    this.picked.update((p) => p.includes(name) ? p.filter((n) => n !== name) : p.length >= MAX_COMPARE ? p : [...p, name]);
  }
  goCompare() {
    const names = this.picked();
    if (names.length < 2)
      return;
    this.close();
    void this.router.navigate(["/compare"], {
      queryParams: { s: names.map(slugify).join(",") }
    });
  }
  static \u0275fac = function SearchDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SearchDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchDialogComponent, selectors: [["xh-search-dialog"]], viewQuery: function SearchDialogComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.inputRef, _c03, 5);
      \u0275\u0275viewQuerySignal(ctx.boxRef, _c13, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, hostAttrs: [2, "display", "contents"], hostBindings: function SearchDialogComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function SearchDialogComponent_keydown_HostBindingHandler($event) {
        return ctx.onDocumentKey($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 15, vars: 14, consts: [["searchBox", ""], ["srchI", ""], ["id", "srch", "role", "dialog", "aria-modal", "true", 1, "srch", 3, "click"], [1, "srch-box"], [1, "srch-in"], [1, "srch-field"], [1, "srch-chat-brand"], ["type", "button", 1, "srch-ai-toggle", 3, "click"], ["aria-hidden", "true"], ["type", "button", "aria-label", "Close search", 1, "srch-x", 3, "click"], [3, "initialQuestion"], [1, "srch-body"], [1, "srch-compare-foot"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "aria-hidden", "true"], ["cx", "10.5", "cy", "10.5", "r", "6.5"], ["d", "m16 16 4.5 4.5"], ["id", "srchI", "autocomplete", "off", "aria-label", "Search or ask a question", 3, "input", "placeholder", "value"], ["type", "button", "aria-label", "Clear query", 1, "srch-clear"], ["type", "button", "aria-label", "Clear query", 1, "srch-clear", 3, "click"], [3, "navigate", "initialQuestion"], ["aria-label", "Search filters", 1, "srch-filters"], [1, "srch-filter-heading"], ["type", "button"], [1, "srch-filter"], [1, "srch-category-heading"], [1, "srch-sidebar-note"], [1, "srch-content"], [1, "srch-results-heading"], ["role", "status", "aria-live", "polite", 1, "srch-status"], ["id", "srchR", "aria-label", "Search results", 1, "srch-res"], [1, "sr", 3, "on"], [1, "srch-empty"], [1, "srch-more"], ["type", "button", 3, "click"], ["type", "checkbox", 3, "change", "checked"], ["aria-label", "Suggested questions", 1, "srch-questions"], ["aria-label", "Search suggestions", 1, "srch-suggestions"], ["aria-hidden", "true", 1, "srch-spark"], ["aria-hidden", "true", 1, "srch-question-arrow"], [1, "sr", 3, "mouseenter"], [1, "sr-link", 3, "click", "routerLink"], [1, "sr-icon"], [1, "sr-t"], [1, "sr-breadcrumb"], [1, "sr-description"], ["type", "button", "title", "Add to compare", 1, "sr-cmp", 3, "on", "disabled"], ["type", "button", "title", "Add to compare", 1, "sr-cmp", 3, "click", "disabled"], ["id", "cmpCount"], ["id", "cmpGo", "type", "button", 1, "srch-cmp", "btn", "btn-primary", 3, "click", "disabled"]], template: function SearchDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275listener("click", function SearchDialogComponent_Template_div_click_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBackdrop($event));
      });
      \u0275\u0275elementStart(1, "div", 3, 0)(3, "div", 4);
      \u0275\u0275conditionalCreate(4, SearchDialogComponent_Conditional_4_Template, 7, 3, "div", 5)(5, SearchDialogComponent_Conditional_5_Template, 7, 0, "div", 6);
      \u0275\u0275elementStart(6, "button", 7);
      \u0275\u0275listener("click", function SearchDialogComponent_Template_button_click_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleAi());
      });
      \u0275\u0275elementStart(7, "span", 8);
      \u0275\u0275text(8, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function SearchDialogComponent_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(11, "esc");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, SearchDialogComponent_Conditional_12_Template, 1, 1, "xh-ai-assistant", 10)(13, SearchDialogComponent_Conditional_13_Template, 31, 7, "div", 11);
      \u0275\u0275conditionalCreate(14, SearchDialogComponent_Conditional_14_Template, 5, 2, "div", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("open", ctx.overlay.isOpen("search"));
      \u0275\u0275attribute("aria-label", ctx.aiMode() ? "Ask XcellHost AI" : "Search the website")("aria-hidden", ctx.overlay.isOpen("search") ? null : "true")("inert", ctx.overlay.isOpen("search") ? null : "");
      \u0275\u0275advance();
      \u0275\u0275classProp("srch-chat-box", ctx.aiMode());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.aiMode() ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.aiMode());
      \u0275\u0275attribute("aria-pressed", ctx.aiMode());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.aiMode() ? "Back to search" : "AI mode");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.aiMode() ? 12 : 13);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.aiMode() && ctx.picked().length ? 14 : -1);
    }
  }, dependencies: [RouterLink, AiAssistantComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.srch[_ngcontent-%COMP%] {\n  padding: 64px 20px 24px;\n  background: rgba(4, 15, 44, .64);\n  -webkit-backdrop-filter: blur(7px);\n  backdrop-filter: blur(7px);\n}\n.srch[_ngcontent-%COMP%]   .srch-box[_ngcontent-%COMP%] {\n  width: min(900px, 100%);\n  max-height: calc(100dvh - 88px);\n  border-radius: 14px;\n  box-shadow: 0 28px 90px #040f2c55;\n}\n.srch[_ngcontent-%COMP%]   .srch-in[_ngcontent-%COMP%] {\n  padding: 20px;\n  gap: 10px;\n  border: 0;\n}\n.srch-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n  padding: 10px 13px;\n  border: 1px solid #bbcbec;\n  border-radius: 30px;\n  color: #2563eb;\n  box-shadow: 0 0 0 3px #eef3ff;\n}\n.srch-field[_ngcontent-%COMP%]:focus-within {\n  border-color: #739aff;\n  box-shadow: 0 0 0 3px #e7efff;\n}\n.srch[_ngcontent-%COMP%]   .srch-in[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font: 400 14px var(--body);\n  background: transparent;\n  width: 100%;\n  outline: none;\n}\n.srch[_ngcontent-%COMP%]   .srch-in[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.srch-field[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.srch-clear[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 0 4px;\n}\n.srch-ai-toggle[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  font: 500 12px var(--body);\n  background: #fff;\n  border: 1px solid #dbe2ee;\n  border-radius: 20px;\n  color: #334155;\n  cursor: pointer;\n}\n.srch-ai-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.srch-spark[_ngcontent-%COMP%] {\n  color: #ff8c37;\n}\n.srch-ai-toggle.active[_ngcontent-%COMP%] {\n  background: #eef3ff;\n  border-color: #9bb6ff;\n  color: #245be8;\n}\n.srch[_ngcontent-%COMP%]   .srch-x[_ngcontent-%COMP%] {\n  padding: 7px;\n  border: 0;\n  background: #f4f6fa;\n}\n.srch-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 205px minmax(0, 1fr);\n  min-height: 0;\n  overflow: hidden;\n  padding: 0 12px 0 20px;\n}\n.srch-filters[_ngcontent-%COMP%] {\n  padding: 18px 18px 24px 0;\n  border-right: 1px solid #edf0f5;\n  overflow-y: auto;\n}\n.srch[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 600 10px var(--body);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  color: #7a8497;\n  margin: 0 0 14px;\n}\n.srch-filter-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.srch-filter-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 11px;\n  border: 0;\n  background: none;\n  color: #2563eb;\n  cursor: pointer;\n}\n.srch-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  cursor: pointer;\n  font: 400 12px var(--body);\n  color: #40516b;\n}\n.srch-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: #2563eb;\n  width: 13px;\n  height: 13px;\n  flex-shrink: 0;\n  margin: 0;\n}\n.srch-filter[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #9aa3b4;\n  font-size: 10px;\n  font-variant-numeric: tabular-nums;\n}\n.srch[_ngcontent-%COMP%]   .srch-category-heading[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n.srch-sidebar-note[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  font: 400 14px/1.6 var(--body);\n  color: #8090a9;\n}\n.srch-sidebar-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #20395d;\n  font-weight: 600;\n}\n.srch-sidebar-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  margin-top: 8px;\n}\n.srch-content[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow-y: auto;\n  padding: 8px 18px 18px;\n  overscroll-behavior: contain;\n}\n.srch-questions[_ngcontent-%COMP%] {\n  padding: 2px 0 14px;\n  border-bottom: 1px solid #edf0f5;\n}\n.srch-questions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  text-align: left;\n  border: 0;\n  border-radius: 6px;\n  background: none;\n  color: #2563eb;\n  padding: 10px 5px;\n  font: 400 12px/1.5 var(--body);\n  cursor: pointer;\n}\n.srch-questions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f4f7ff;\n}\n.srch-spark[_ngcontent-%COMP%] {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.srch-question-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #a3b5d7;\n}\n.srch-suggestions[_ngcontent-%COMP%] {\n  padding: 19px 4px 14px;\n  border-bottom: 1px solid #edf0f5;\n}\n.srch-suggestions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.srch-suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  background: none;\n  padding: 8px 0;\n  text-align: left;\n  font: 400 12px var(--body);\n  color: #35445e;\n  cursor: pointer;\n}\n.srch-suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.srch-suggestions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  color: #aab5c7;\n}\n.srch-results-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 4px 8px;\n}\n.srch-results-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.srch[_ngcontent-%COMP%]   .srch-status[_ngcontent-%COMP%] {\n  padding: 0;\n  font: 400 10px var(--body);\n  letter-spacing: 0;\n  text-align: right;\n}\n.srch[_ngcontent-%COMP%]   .srch-res[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: visible;\n}\n.srch[_ngcontent-%COMP%]   .sr[_ngcontent-%COMP%] {\n  padding: 9px 8px;\n  gap: 10px;\n  border-radius: 7px;\n  cursor: default;\n}\n.srch[_ngcontent-%COMP%]   .sr[_ngcontent-%COMP%]:hover, \n.srch[_ngcontent-%COMP%]   .sr.on[_ngcontent-%COMP%] {\n  background: #f5f7fc;\n}\n.sr-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  flex: 1;\n  text-decoration: none;\n}\n.sr-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 40px;\n  background: #eef3fa;\n  border: 1px solid #e4eaf5;\n  border-radius: 7px;\n  flex-shrink: 0;\n  font-size: 22px;\n}\n.srch[_ngcontent-%COMP%]   .sr-t[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.srch[_ngcontent-%COMP%]   .sr-t[_ngcontent-%COMP%]   .sr-breadcrumb[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #7f8aa0;\n  margin: 2px 0;\n}\n.srch[_ngcontent-%COMP%]   .sr-breadcrumb[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline;\n  margin: 0 4px;\n}\n.srch[_ngcontent-%COMP%]   .sr-t[_ngcontent-%COMP%]   .sr-description[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #6a7a94;\n}\n.srch[_ngcontent-%COMP%]   .sr-cmp[_ngcontent-%COMP%] {\n  background: #fff;\n  font-family: var(--body);\n  padding: 0;\n}\n.srch[_ngcontent-%COMP%]   .sr-cmp.on[_ngcontent-%COMP%] {\n  background: #2563eb;\n}\n.srch[_ngcontent-%COMP%]   .sr-cmp[_ngcontent-%COMP%]:disabled {\n  opacity: .35;\n  cursor: not-allowed;\n}\n.srch-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0 4px;\n}\n.srch-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #09214a;\n  color: #fff;\n  border: 0;\n  border-radius: 5px;\n  padding: 10px 16px;\n  font: 500 11px var(--body);\n  cursor: pointer;\n}\n.srch-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #194378;\n}\n.srch-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.srch-compare-foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-top: 1px solid var(--line);\n  font: 400 10px var(--body);\n  color: var(--slate);\n  background: #fafbfe;\n  gap: 12px;\n}\n.srch[_ngcontent-%COMP%]   .srch-empty[_ngcontent-%COMP%] {\n  padding: 30px 12px;\n  font-size: 12px;\n}\n.srch-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #40516b;\n}\n.srch-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: #edf3ff;\n  color: #2563eb;\n  padding: 8px 12px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.srch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, \n.srch[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible, \n.srch-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 3px;\n}\n@media (max-width: 700px) {\n  .srch[_ngcontent-%COMP%] {\n    padding: max(12px, env(safe-area-inset-top)) 10px max(12px, env(safe-area-inset-bottom));\n  }\n  .srch[_ngcontent-%COMP%]   .srch-box[_ngcontent-%COMP%] {\n    max-height: calc(100dvh - 24px);\n  }\n  .srch[_ngcontent-%COMP%]   .srch-in[_ngcontent-%COMP%] {\n    padding: 14px 12px;\n    gap: 7px;\n  }\n  .srch-field[_ngcontent-%COMP%] {\n    padding: 9px;\n    gap: 7px;\n  }\n  .srch[_ngcontent-%COMP%]   .srch-in[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .srch-ai-toggle[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 8px;\n    gap: 4px;\n  }\n  .srch[_ngcontent-%COMP%]   .srch-x[_ngcontent-%COMP%] {\n    font-size: 9px;\n    padding: 6px 4px;\n  }\n  .srch-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    overflow-y: auto;\n  }\n  .srch-filters[_ngcontent-%COMP%] {\n    border: 0;\n    border-top: 1px solid #edf0f5;\n    border-bottom: 1px solid #edf0f5;\n    padding: 12px;\n    overflow: visible;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .srch-filter-heading[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .srch-filter-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .srch-filter[_ngcontent-%COMP%] {\n    margin: 0;\n    gap: 5px;\n    border: 1px solid #e4eaf3;\n    border-radius: 6px;\n    padding: 7px;\n    font-size: 10px;\n  }\n  .srch-filter[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .srch[_ngcontent-%COMP%]   .srch-category-heading[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 6px 0 0;\n  }\n  .srch-sidebar-note[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .srch-content[_ngcontent-%COMP%] {\n    overflow: visible;\n    padding: 12px;\n  }\n  .srch-questions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 9px 4px;\n    font-size: 12px;\n  }\n  .srch[_ngcontent-%COMP%]   .sr[_ngcontent-%COMP%] {\n    min-height: 60px;\n    padding: 9px 4px;\n  }\n  .sr-icon[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 36px;\n  }\n  .sr-link[_ngcontent-%COMP%] {\n    gap: 9px;\n  }\n  .srch[_ngcontent-%COMP%]   .sr-t[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .srch-compare-foot[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n    gap: 8px;\n  }\n  .srch-answer-head[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .srch[_ngcontent-%COMP%], \n   .srch[_ngcontent-%COMP%]   .srch-box[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.srch-chat-box[_ngcontent-%COMP%] {\n  height: min(720px, calc(100dvh - 88px));\n}\n.srch-chat-box[_ngcontent-%COMP%]   .srch-in[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #edf0f5;\n}\n.srch-chat-brand[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  color: #102b53;\n  font: 600 15px var(--body);\n}\n.srch-chat-brand[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #ff8c37;\n  font-size: 24px;\n}\n.srch-chat-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 27px;\n  color: #8592a7;\n  font-size: 11px;\n  font-weight: 400;\n}\n@media (max-width: 700px) {\n  .srch-chat-box[_ngcontent-%COMP%] {\n    height: calc(100dvh - 24px);\n  }\n  .srch-chat-brand[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .srch-chat-brand[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=search.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchDialogComponent, [{
    type: Component,
    args: [{ selector: "xh-search-dialog", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, host: {
      style: "display: contents",
      "(document:keydown)": "onDocumentKey($event)"
    }, imports: [RouterLink, AiAssistantComponent], template: `<div class="srch" id="srch" role="dialog" aria-modal="true" [attr.aria-label]="aiMode() ? 'Ask XcellHost AI' : 'Search the website'"\r
  [class.open]="overlay.isOpen('search')" [attr.aria-hidden]="overlay.isOpen('search') ? null : 'true'"\r
  [attr.inert]="overlay.isOpen('search') ? null : ''" (click)="onBackdrop($event)">\r
  <div class="srch-box" #searchBox [class.srch-chat-box]="aiMode()">\r
    <div class="srch-in">\r
      @if (!aiMode()) {\r
      <div class="srch-field">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg>\r
        <input id="srchI" #srchI [placeholder]="aiMode() ? 'Ask a question about XcellHost\u2026' : 'Search products, pages and blogs\u2026'"\r
          autocomplete="off" aria-label="Search or ask a question" [value]="q()" (input)="onInput($event)" />\r
        @if (q()) { <button class="srch-clear" type="button" aria-label="Clear query" (click)="setQuery(''); focusSearch()">\xD7</button> }\r
      </div>\r
      } @else {\r
        <div class="srch-chat-brand"><span aria-hidden="true">\u2726</span><strong>XcellHost Assist</strong><small>Ask. Explore. Find your solution.</small></div>\r
      }\r
      <button class="srch-ai-toggle" type="button" [class.active]="aiMode()" [attr.aria-pressed]="aiMode()" (click)="toggleAi()"><span aria-hidden="true">\u2726</span> {{ aiMode() ? 'Back to search' : 'AI mode' }}</button>\r
      <button class="srch-x" type="button" aria-label="Close search" (click)="close()">esc</button>\r
    </div>\r
    @if (aiMode()) {\r
      <xh-ai-assistant [initialQuestion]="aiQuestion()" (navigate)="close()" />\r
    } @else {\r
    <div class="srch-body">\r
      <aside class="srch-filters" aria-label="Search filters">\r
        <div class="srch-filter-heading"><h2>Filter by source</h2>@if (hasFilters()) { <button type="button" (click)="clearFilters()">Reset</button> }</div>\r
        @for (source of sourceOptions(); track source.value) {\r
          <label class="srch-filter"><input type="checkbox" [checked]="sources().includes(source.value)" (change)="toggleFilter('source', source.value)"/><span>{{ source.label }}</span><small>{{ source.count }}</small></label>\r
        }\r
        <h2 class="srch-category-heading">Categories</h2>\r
        @for (category of categoryOptions(); track category.value) {\r
          <label class="srch-filter"><input type="checkbox" [checked]="categories().includes(category.value)" (change)="toggleFilter('category', category.value)"/><span>{{ category.value }}</span><small>{{ category.count }}</small></label>\r
        }\r
        <div class="srch-sidebar-note">Find your next<br/><strong>business advantage.</strong><span>Cloud. Security. Peace of mind.</span></div>\r
      </aside>\r
      <div class="srch-content" [attr.aria-busy]="loading()">\r
        @if (!q().trim()) {\r
          <section class="srch-questions" aria-label="Suggested questions">\r
            @for (question of questions; track question.text) {\r
              <button type="button" (click)="askQuestion(question)"><span class="srch-spark" aria-hidden="true">\u2726</span><span>{{ question.text }}</span><span class="srch-question-arrow" aria-hidden="true">\u2197</span></button>\r
            }\r
          </section>\r
          <section class="srch-suggestions" aria-label="Search suggestions"><h2>Suggestions</h2>\r
            @for (suggestion of suggestions; track suggestion) {\r
              <button type="button" (click)="setQuery(suggestion); focusSearch()"><span>{{ suggestion }}</span><span aria-hidden="true">\u2196</span></button>\r
            }\r
          </section>\r
        }\r
        <div class="srch-results-heading"><h2>{{ q().trim() ? 'Search results' : 'Products & resources' }}</h2><span class="srch-status" role="status" aria-live="polite">{{ resultStatus() }}</span></div>\r
        <div class="srch-res" id="srchR" aria-label="Search results">\r
          @for (r of results(); track r.url; let i = $index) {\r
            <div class="sr" [class.on]="i === cur()" (mouseenter)="cur.set(i)">\r
              <a class="sr-link" [routerLink]="r.url" (click)="close()">\r
                <span class="sr-icon" [style.color]="r.color" [attr.aria-label]="r.kind">{{ r.kind === 'Product' ? '\u25C8' : r.kind === 'Blog' ? '\u25A4' : '\u25A7' }}</span>\r
                <span class="sr-t"><b>{{ r.name }}</b><span class="sr-breadcrumb">{{ r.kind }} <span aria-hidden="true">\u203A</span> {{ r.label }}</span><span class="sr-description">{{ r.desc }}</span></span>\r
              </a>\r
              @if (r.compareName) {\r
                <button class="sr-cmp" type="button" [class.on]="isPicked(r.compareName)" title="Add to compare" [attr.aria-label]="'Compare ' + r.name" [attr.aria-pressed]="isPicked(r.compareName)" [disabled]="!isPicked(r.compareName) && picked().length >= 4" (click)="toggle(r.compareName, $event)">\u2713</button>\r
              }\r
            </div>\r
          } @empty {\r
            <div class="srch-empty"><strong>No matching results</strong><p>Try another search or clear your filters.</p>@if (hasFilters()) { <button type="button" (click)="clearFilters()">Clear filters</button> }</div>\r
          }\r
        </div>\r
        @if (filteredResults().length > results().length) {\r
          <div class="srch-more"><button type="button" (click)="showMore()">Show more results <span aria-hidden="true">\u2193</span></button></div>\r
        }\r
      </div>\r
    </div>\r
    }\r
    @if (!aiMode() && picked().length) {\r
      <div class="srch-compare-foot">\r
        <span id="cmpCount">{{ countLabel() }}</span>\r
        <button class="srch-cmp btn btn-primary" id="cmpGo" type="button" [disabled]="!canCompare()" (click)="goCompare()">Compare \u2192</button>\r
      </div>\r
    }\r
  </div>\r
</div>\r
`, styles: ["/* src/app/overlays/search.component.css */\n:host {\n  display: contents;\n}\n.srch {\n  padding: 64px 20px 24px;\n  background: rgba(4, 15, 44, .64);\n  -webkit-backdrop-filter: blur(7px);\n  backdrop-filter: blur(7px);\n}\n.srch .srch-box {\n  width: min(900px, 100%);\n  max-height: calc(100dvh - 88px);\n  border-radius: 14px;\n  box-shadow: 0 28px 90px #040f2c55;\n}\n.srch .srch-in {\n  padding: 20px;\n  gap: 10px;\n  border: 0;\n}\n.srch-field {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  min-width: 0;\n  padding: 10px 13px;\n  border: 1px solid #bbcbec;\n  border-radius: 30px;\n  color: #2563eb;\n  box-shadow: 0 0 0 3px #eef3ff;\n}\n.srch-field:focus-within {\n  border-color: #739aff;\n  box-shadow: 0 0 0 3px #e7efff;\n}\n.srch .srch-in input {\n  font: 400 14px var(--body);\n  background: transparent;\n  width: 100%;\n  outline: none;\n}\n.srch .srch-in input:focus-visible {\n  outline: none;\n}\n.srch-field svg {\n  flex-shrink: 0;\n}\n.srch-clear {\n  border: 0;\n  background: none;\n  color: #64748b;\n  cursor: pointer;\n  font-size: 20px;\n  padding: 0 4px;\n}\n.srch-ai-toggle {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 12px;\n  font: 500 12px var(--body);\n  background: #fff;\n  border: 1px solid #dbe2ee;\n  border-radius: 20px;\n  color: #334155;\n  cursor: pointer;\n}\n.srch-ai-toggle span,\n.srch-spark {\n  color: #ff8c37;\n}\n.srch-ai-toggle.active {\n  background: #eef3ff;\n  border-color: #9bb6ff;\n  color: #245be8;\n}\n.srch .srch-x {\n  padding: 7px;\n  border: 0;\n  background: #f4f6fa;\n}\n.srch-body {\n  display: grid;\n  grid-template-columns: 205px minmax(0, 1fr);\n  min-height: 0;\n  overflow: hidden;\n  padding: 0 12px 0 20px;\n}\n.srch-filters {\n  padding: 18px 18px 24px 0;\n  border-right: 1px solid #edf0f5;\n  overflow-y: auto;\n}\n.srch h2 {\n  font: 600 10px var(--body);\n  text-transform: uppercase;\n  letter-spacing: .06em;\n  color: #7a8497;\n  margin: 0 0 14px;\n}\n.srch-filter-heading {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n.srch-filter-heading button {\n  font-size: 11px;\n  border: 0;\n  background: none;\n  color: #2563eb;\n  cursor: pointer;\n}\n.srch-filter {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 14px;\n  cursor: pointer;\n  font: 400 12px var(--body);\n  color: #40516b;\n}\n.srch-filter input {\n  accent-color: #2563eb;\n  width: 13px;\n  height: 13px;\n  flex-shrink: 0;\n  margin: 0;\n}\n.srch-filter small {\n  margin-left: auto;\n  color: #9aa3b4;\n  font-size: 10px;\n  font-variant-numeric: tabular-nums;\n}\n.srch .srch-category-heading {\n  margin-top: 28px;\n}\n.srch-sidebar-note {\n  margin-top: 40px;\n  font: 400 14px/1.6 var(--body);\n  color: #8090a9;\n}\n.srch-sidebar-note strong {\n  color: #20395d;\n  font-weight: 600;\n}\n.srch-sidebar-note span {\n  display: block;\n  font-size: 10px;\n  margin-top: 8px;\n}\n.srch-content {\n  min-height: 0;\n  overflow-y: auto;\n  padding: 8px 18px 18px;\n  overscroll-behavior: contain;\n}\n.srch-questions {\n  padding: 2px 0 14px;\n  border-bottom: 1px solid #edf0f5;\n}\n.srch-questions button {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: 100%;\n  text-align: left;\n  border: 0;\n  border-radius: 6px;\n  background: none;\n  color: #2563eb;\n  padding: 10px 5px;\n  font: 400 12px/1.5 var(--body);\n  cursor: pointer;\n}\n.srch-questions button:hover {\n  background: #f4f7ff;\n}\n.srch-spark {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n.srch-question-arrow {\n  margin-left: auto;\n  color: #a3b5d7;\n}\n.srch-suggestions {\n  padding: 19px 4px 14px;\n  border-bottom: 1px solid #edf0f5;\n}\n.srch-suggestions h2 {\n  margin-bottom: 8px;\n}\n.srch-suggestions button {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  background: none;\n  padding: 8px 0;\n  text-align: left;\n  font: 400 12px var(--body);\n  color: #35445e;\n  cursor: pointer;\n}\n.srch-suggestions button:hover {\n  color: #2563eb;\n}\n.srch-suggestions button span:last-child {\n  color: #aab5c7;\n}\n.srch-results-heading {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 4px 8px;\n}\n.srch-results-heading h2 {\n  margin: 0;\n}\n.srch .srch-status {\n  padding: 0;\n  font: 400 10px var(--body);\n  letter-spacing: 0;\n  text-align: right;\n}\n.srch .srch-res {\n  padding: 0;\n  overflow: visible;\n}\n.srch .sr {\n  padding: 9px 8px;\n  gap: 10px;\n  border-radius: 7px;\n  cursor: default;\n}\n.srch .sr:hover,\n.srch .sr.on {\n  background: #f5f7fc;\n}\n.sr-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  flex: 1;\n  text-decoration: none;\n}\n.sr-icon {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 40px;\n  background: #eef3fa;\n  border: 1px solid #e4eaf5;\n  border-radius: 7px;\n  flex-shrink: 0;\n  font-size: 22px;\n}\n.srch .sr-t b {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.srch .sr-t .sr-breadcrumb {\n  font-size: 10px;\n  color: #7f8aa0;\n  margin: 2px 0;\n}\n.srch .sr-breadcrumb span {\n  display: inline;\n  margin: 0 4px;\n}\n.srch .sr-t .sr-description {\n  font-size: 11px;\n  line-height: 1.5;\n  color: #6a7a94;\n}\n.srch .sr-cmp {\n  background: #fff;\n  font-family: var(--body);\n  padding: 0;\n}\n.srch .sr-cmp.on {\n  background: #2563eb;\n}\n.srch .sr-cmp:disabled {\n  opacity: .35;\n  cursor: not-allowed;\n}\n.srch-more {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0 4px;\n}\n.srch-more button {\n  background: #09214a;\n  color: #fff;\n  border: 0;\n  border-radius: 5px;\n  padding: 10px 16px;\n  font: 500 11px var(--body);\n  cursor: pointer;\n}\n.srch-more button:hover {\n  background: #194378;\n}\n.srch-more button span {\n  margin-left: 8px;\n}\n.srch-compare-foot {\n  display: flex;\n  align-items: center;\n  padding: 12px 20px;\n  border-top: 1px solid var(--line);\n  font: 400 10px var(--body);\n  color: var(--slate);\n  background: #fafbfe;\n  gap: 12px;\n}\n.srch .srch-empty {\n  padding: 30px 12px;\n  font-size: 12px;\n}\n.srch-empty strong {\n  display: block;\n  color: #40516b;\n}\n.srch-empty button {\n  border: 0;\n  background: #edf3ff;\n  color: #2563eb;\n  padding: 8px 12px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.srch button:focus-visible,\n.srch a:focus-visible,\n.srch-filter input:focus-visible {\n  outline: 2px solid #2563eb;\n  outline-offset: 3px;\n}\n@media (max-width: 700px) {\n  .srch {\n    padding: max(12px, env(safe-area-inset-top)) 10px max(12px, env(safe-area-inset-bottom));\n  }\n  .srch .srch-box {\n    max-height: calc(100dvh - 24px);\n  }\n  .srch .srch-in {\n    padding: 14px 12px;\n    gap: 7px;\n  }\n  .srch-field {\n    padding: 9px;\n    gap: 7px;\n  }\n  .srch .srch-in input {\n    font-size: 16px;\n  }\n  .srch-ai-toggle {\n    font-size: 10px;\n    padding: 8px;\n    gap: 4px;\n  }\n  .srch .srch-x {\n    font-size: 9px;\n    padding: 6px 4px;\n  }\n  .srch-body {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    overflow-y: auto;\n  }\n  .srch-filters {\n    border: 0;\n    border-top: 1px solid #edf0f5;\n    border-bottom: 1px solid #edf0f5;\n    padding: 12px;\n    overflow: visible;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .srch-filter-heading {\n    width: 100%;\n  }\n  .srch-filter-heading h2 {\n    margin: 0;\n  }\n  .srch-filter {\n    margin: 0;\n    gap: 5px;\n    border: 1px solid #e4eaf3;\n    border-radius: 6px;\n    padding: 7px;\n    font-size: 10px;\n  }\n  .srch-filter small {\n    font-size: 9px;\n  }\n  .srch .srch-category-heading {\n    width: 100%;\n    margin: 6px 0 0;\n  }\n  .srch-sidebar-note {\n    display: none;\n  }\n  .srch-content {\n    overflow: visible;\n    padding: 12px;\n  }\n  .srch-questions button {\n    padding: 9px 4px;\n    font-size: 12px;\n  }\n  .srch .sr {\n    min-height: 60px;\n    padding: 9px 4px;\n  }\n  .sr-icon {\n    width: 32px;\n    height: 36px;\n  }\n  .sr-link {\n    gap: 9px;\n  }\n  .srch .sr-t b {\n    white-space: normal;\n  }\n  .srch-compare-foot {\n    padding: 10px 12px;\n    gap: 8px;\n  }\n  .srch-answer-head {\n    flex-wrap: wrap;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .srch,\n  .srch .srch-box {\n    transition: none;\n  }\n}\n.srch-chat-box {\n  height: min(720px, calc(100dvh - 88px));\n}\n.srch-chat-box .srch-in {\n  border-bottom: 1px solid #edf0f5;\n}\n.srch-chat-brand {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  color: #102b53;\n  font: 600 15px var(--body);\n}\n.srch-chat-brand > span {\n  color: #ff8c37;\n  font-size: 24px;\n}\n.srch-chat-brand small {\n  width: 100%;\n  margin-left: 27px;\n  color: #8592a7;\n  font-size: 11px;\n  font-weight: 400;\n}\n@media (max-width: 700px) {\n  .srch-chat-box {\n    height: calc(100dvh - 24px);\n  }\n  .srch-chat-brand {\n    font-size: 13px;\n  }\n  .srch-chat-brand small {\n    display: none;\n  }\n}\n/*# sourceMappingURL=search.component.css.map */\n"] }]
  }], () => [], { inputRef: [{ type: ViewChild, args: ["srchI", { isSignal: true }] }], boxRef: [{ type: ViewChild, args: ["searchBox", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchDialogComponent, { className: "SearchDialogComponent", filePath: "src/app/overlays/search-dialog.component.ts", lineNumber: 46 });
})();

// src/app/overlays/whatsapp-fab.component.ts
var WhatsappFabComponent = class _WhatsappFabComponent {
  leads = inject(LeadService);
  overlay = inject(OverlayService);
  /** The original markup's default message, verbatim. */
  href = this.leads.whatsappLink("Hi XcellHost, I'd like to talk to your team.");
  static \u0275fac = function WhatsappFabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhatsappFabComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhatsappFabComponent, selectors: [["xh-whatsapp-fab"]], hostAttrs: [2, "display", "contents"], decls: 17, vars: 1, consts: [["aria-label", "Contact XcellHost", 1, "contact-actions"], ["href", "tel:+912267111555", "aria-label", "Call +91 22 6711 1555", "title", "Call +91 22 6711 1555", 1, "contact-action", "call-action"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7l-1.3 1.3a16 16 0 0 0 4.8 4.8l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 2.7 3Z"], [1, "contact-tip"], ["type", "button", "aria-label", "Book a demo", "title", "Book a demo", 1, "contact-action", "demo-action", 3, "click"], ["x", "3", "y", "5", "width", "18", "height", "16", "rx", "3"], ["d", "M7 3v4m10-4v4M3 11h18m-13 5 3 3 5-5"], ["id", "waFab", "target", "_blank", "rel", "noopener", "aria-label", "Chat on WhatsApp", 1, "wa-fab", 3, "href"], ["viewBox", "0 0 24 24", "width", "27", "height", "27", "fill", "currentColor", "aria-hidden", "true"], ["d", "M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 00-8.6 15.05L2 22l5.07-1.33A10 10 0 1012 2zm0 18.2a8.17 8.17 0 01-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.2 8.2 0 1112 20.2z"], [1, "fab-tip"]], template: function WhatsappFabComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "nav", 0)(1, "a", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(2, "svg", 2);
      \u0275\u0275domElement(3, "path", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(4, "span", 4);
      \u0275\u0275text(5, "Call +91 2267111555");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "button", 5);
      \u0275\u0275domListener("click", function WhatsappFabComponent_Template_button_click_6_listener() {
        return ctx.overlay.open("callback");
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(7, "svg", 2);
      \u0275\u0275domElement(8, "rect", 6)(9, "path", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(10, "span", 4);
      \u0275\u0275text(11, "Book a Meetings");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "a", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(13, "svg", 9);
      \u0275\u0275domElement(14, "path", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(15, "span", 11);
      \u0275\u0275text(16, "Chat with our team on WhatsApp");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275domProperty("href", ctx.href, \u0275\u0275sanitizeUrl);
    }
  }, styles: ["\n\n.contact-actions[_ngcontent-%COMP%] {\n  position: fixed;\n  left: max(22px, env(safe-area-inset-left));\n  bottom: calc(22px + env(safe-area-inset-bottom));\n  z-index: 120;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.contact-action[_ngcontent-%COMP%], \n.contact-actions[_ngcontent-%COMP%]   .wa-fab[_ngcontent-%COMP%] {\n  position: relative;\n  inset: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  flex: none;\n  border: 0;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0 6px 20px #041e4226;\n  transition: transform .2s;\n}\n.call-action[_ngcontent-%COMP%] {\n  background: #1565d8;\n}\n.demo-action[_ngcontent-%COMP%] {\n  background: #ea7800;\n}\n.contact-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.contact-actions[_ngcontent-%COMP%]   .wa-fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n}\n.contact-action[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n.contact-action[_ngcontent-%COMP%]:focus-visible, \n.contact-actions[_ngcontent-%COMP%]   .wa-fab[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #041e42;\n  outline-offset: 4px;\n}\n.contact-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  left: calc(100% + 12px);\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #041e42;\n  color: #fff;\n  font: 600 12px/1.4 sans-serif;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n}\n.contact-action[_ngcontent-%COMP%]:hover   .contact-tip[_ngcontent-%COMP%], \n.contact-action[_ngcontent-%COMP%]:focus-visible   .contact-tip[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (max-width: 600px), (max-height: 500px) {\n  .contact-actions[_ngcontent-%COMP%] {\n    left: max(14px, env(safe-area-inset-left));\n    bottom: calc(14px + env(safe-area-inset-bottom));\n    gap: 8px;\n  }\n  .contact-action[_ngcontent-%COMP%], \n   .contact-actions[_ngcontent-%COMP%]   .wa-fab[_ngcontent-%COMP%] {\n    width: 46px;\n    height: 46px;\n  }\n  .contact-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 28px;\n    height: 28px;\n  }\n  .contact-actions[_ngcontent-%COMP%]   .wa-fab[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (hover: none) {\n  .contact-tip[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .contact-action[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=whatsapp-fab.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhatsappFabComponent, [{
    type: Component,
    args: [{ selector: "xh-whatsapp-fab", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "display: contents" }, template: `
    <nav class="contact-actions" aria-label="Contact XcellHost">
      <a class="contact-action call-action" href="tel:+912267111555" aria-label="Call +91 22 6711 1555" title="Call +91 22 6711 1555">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7l-1.3 1.3a16 16 0 0 0 4.8 4.8l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 2.7 3Z"/></svg>
        <span class="contact-tip">Call +91 2267111555</span>
      </a>
      <button class="contact-action demo-action" type="button" (click)="overlay.open('callback')" aria-label="Book a demo" title="Book a demo">
        <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4m10-4v4M3 11h18m-13 5 3 3 5-5"/></svg>
        <span class="contact-tip">Book a Meetings</span>
      </button>
    <a
      class="wa-fab"
      id="waFab"
      [href]="href"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="27" height="27" fill="currentColor" aria-hidden="true">
        <path
          d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 00-8.6 15.05L2 22l5.07-1.33A10 10 0 1012 2zm0 18.2a8.17 8.17 0 01-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.2 8.2 0 1112 20.2z"
        />
      </svg>
      <span class="fab-tip">Chat with our team on WhatsApp</span>
    </a>
    </nav>
  `, styles: ["/* angular:styles/component:css;c58da371b538306e7eceabaed664b771cd80c6954fc9a662f433b45242a91af2;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/overlays/whatsapp-fab.component.ts */\n.contact-actions {\n  position: fixed;\n  left: max(22px, env(safe-area-inset-left));\n  bottom: calc(22px + env(safe-area-inset-bottom));\n  z-index: 120;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.contact-action,\n.contact-actions .wa-fab {\n  position: relative;\n  inset: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  flex: none;\n  border: 0;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  box-shadow: 0 6px 20px #041e4226;\n  transition: transform .2s;\n}\n.call-action {\n  background: #1565d8;\n}\n.demo-action {\n  background: #ea7800;\n}\n.contact-action svg {\n  width: 32px;\n  height: 32px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.contact-actions .wa-fab svg {\n  width: 34px;\n  height: 34px;\n}\n.contact-action:hover {\n  transform: scale(1.06);\n}\n.contact-action:focus-visible,\n.contact-actions .wa-fab:focus-visible {\n  outline: 3px solid #041e42;\n  outline-offset: 4px;\n}\n.contact-tip {\n  position: absolute;\n  left: calc(100% + 12px);\n  padding: 8px 12px;\n  border-radius: 8px;\n  background: #041e42;\n  color: #fff;\n  font: 600 12px/1.4 sans-serif;\n  white-space: nowrap;\n  opacity: 0;\n  pointer-events: none;\n}\n.contact-action:hover .contact-tip,\n.contact-action:focus-visible .contact-tip {\n  opacity: 1;\n}\n@media (max-width: 600px), (max-height: 500px) {\n  .contact-actions {\n    left: max(14px, env(safe-area-inset-left));\n    bottom: calc(14px + env(safe-area-inset-bottom));\n    gap: 8px;\n  }\n  .contact-action,\n  .contact-actions .wa-fab {\n    width: 46px;\n    height: 46px;\n  }\n  .contact-action svg {\n    width: 28px;\n    height: 28px;\n  }\n  .contact-actions .wa-fab svg {\n    width: 30px;\n    height: 30px;\n  }\n}\n@media (hover: none) {\n  .contact-tip {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .contact-action {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=whatsapp-fab.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhatsappFabComponent, { className: "WhatsappFabComponent", filePath: "src/app/overlays/whatsapp-fab.component.ts", lineNumber: 65 });
})();

// src/app/overlays/back-to-top.component.ts
var BackToTopComponent = class _BackToTopComponent {
  visible = signal(false, ...ngDevMode ? [{ debugName: "visible" }] : []);
  constructor() {
    afterNextRender(() => this.updateVisibility());
  }
  updateVisibility() {
    this.visible.set(window.scrollY > 300);
  }
  scrollToTop() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }
  static \u0275fac = function BackToTopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BackToTopComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BackToTopComponent, selectors: [["xh-back-to-top"]], hostAttrs: [2, "display", "contents"], hostBindings: function BackToTopComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function BackToTopComponent_scroll_HostBindingHandler() {
        return ctx.updateVisibility();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 5, vars: 3, consts: [["type", "button", "aria-label", "Back to top", "title", "Back to top", 1, "back-to-top", 3, "click"], ["viewBox", "0 0 32 42", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", 1, "back-to-top-mouse"], ["x", "5", "y", "3", "width", "22", "height", "35", "rx", "11"], ["d", "M16 10v8", 1, "back-to-top-wheel"], ["d", "m12.5 13.5 3.5-3.5 3.5 3.5", 1, "back-to-top-cue"]], template: function BackToTopComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "button", 0);
      \u0275\u0275domListener("click", function BackToTopComponent_Template_button_click_0_listener() {
        return ctx.scrollToTop();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(1, "svg", 1);
      \u0275\u0275domElement(2, "rect", 2)(3, "path", 3)(4, "path", 4);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("show", ctx.visible());
      \u0275\u0275attribute("tabindex", ctx.visible() ? 0 : -1);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BackToTopComponent, [{
    type: Component,
    args: [{
      selector: "xh-back-to-top",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: { style: "display: contents" },
      template: `
    <button
      class="back-to-top"
      type="button"
      aria-label="Back to top"
      title="Back to top"
      [class.show]="visible()"
      [attr.tabindex]="visible() ? 0 : -1"
      (click)="scrollToTop()"
    >
      <svg
        class="back-to-top-mouse"
        viewBox="0 0 32 42"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="3" width="22" height="35" rx="11" />
        <path class="back-to-top-wheel" d="M16 10v8" />
        <path class="back-to-top-cue" d="m12.5 13.5 3.5-3.5 3.5 3.5" />
      </svg>
    </button>
  `
    }]
  }], () => [], { updateVisibility: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BackToTopComponent, { className: "BackToTopComponent", filePath: "src/app/overlays/back-to-top.component.ts", lineNumber: 42 });
})();

// src/app/layout/intro-splash.component.ts
function IntroSplashComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domListener("click", function IntroSplashComponent_Conditional_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismiss());
    });
    \u0275\u0275domElementStart(1, "div", 2);
    \u0275\u0275domElement(2, "img", 3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 4);
    \u0275\u0275text(4, "Global Reach \xB7 Personal Touch");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElement(5, "div", 5);
    \u0275\u0275domElementStart(6, "div", 6);
    \u0275\u0275text(7, "MANAGED CLOUD \xB7 CYBERSECURITY \xB7 DPDPA \xB7 SINCE 1999");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "span", 7);
    \u0275\u0275text(9, "tap anywhere to skip");
    \u0275\u0275domElementEnd()();
  }
}
var IntroSplashComponent = class _IntroSplashComponent {
  doc = inject(DOCUMENT);
  overlay = inject(OverlayService);
  destroyRef = inject(DestroyRef);
  visible = signal(false, ...ngDevMode ? [{ debugName: "visible" }] : []);
  constructor() {
    effect(() => {
      if (this.visible() && !this.overlay.isOpen("intro"))
        this.visible.set(false);
    });
    const win = this.doc.defaultView;
    if (!win || typeof win.matchMedia !== "function")
      return;
    const reduced = win.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced)
      return;
    this.visible.set(true);
    this.overlay.open("intro");
    const timer = win.setTimeout(() => this.dismiss(), 3e3);
    this.destroyRef.onDestroy(() => {
      win.clearTimeout(timer);
      this.overlay.close("intro");
    });
  }
  dismiss() {
    if (!this.visible())
      return;
    this.visible.set(false);
    this.overlay.close("intro");
  }
  static \u0275fac = function IntroSplashComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IntroSplashComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IntroSplashComponent, selectors: [["xh-intro-splash"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [["id", "introv", "role", "presentation"], ["id", "introv", "role", "presentation", 3, "click"], [1, "iv-chip"], ["src", "/assets/images/xcellhost-logo.png", "alt", "XcellHost", 1, "xh-logo"], [1, "iv-tag"], [1, "iv-line"], [1, "iv-sub"], [1, "iv-skip"]], template: function IntroSplashComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, IntroSplashComponent_Conditional_0_Template, 10, 0, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible() ? 0 : -1);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IntroSplashComponent, [{
    type: Component,
    args: [{
      selector: "xh-intro-splash",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: { style: "display: contents" },
      template: `
    @if (visible()) {
      <div id="introv" role="presentation" (click)="dismiss()">
        <div class="iv-chip">
          <img class="xh-logo" src="/assets/images/xcellhost-logo.png" alt="XcellHost" />
        </div>
        <div class="iv-tag">Global Reach \xB7 Personal Touch</div>
        <div class="iv-line"></div>
        <div class="iv-sub">MANAGED CLOUD \xB7 CYBERSECURITY \xB7 DPDPA \xB7 SINCE 1999</div>
        <span class="iv-skip">tap anywhere to skip</span>
      </div>
    }
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IntroSplashComponent, { className: "IntroSplashComponent", filePath: "src/app/layout/intro-splash.component.ts", lineNumber: 37 });
})();

// src/app/core/languages.data.ts
var LANGUAGE_REGION_OVERRIDES = {
  en: "UN",
  ar: "AE",
  eo: "EU",
  ber: "MA",
  tzm: "MA",
  jw: "ID",
  iw: "IL",
  zh: "CN",
  "zh-CN": "CN",
  "zh-TW": "TW"
};
function flagForLanguage(code) {
  const normalizedCode = code.replace("_", "-");
  let region = LANGUAGE_REGION_OVERRIDES[normalizedCode];
  if (!region) {
    try {
      region = new Intl.Locale(normalizedCode).maximize().region;
    } catch {
      return "\u{1F1FA}\u{1F1F3}";
    }
  }
  if (!region || !/^[A-Z]{2}$/.test(region))
    return "\u{1F1FA}\u{1F1F3}";
  return String.fromCodePoint(...[...region].map((letter) => 127462 + letter.charCodeAt(0) - 65));
}
var LANGUAGE_DETAILS = {
  en: { nativeName: "English", region: "International", flag: "\u{1F1FA}\u{1F1F3}" },
  hi: { nativeName: "\u0939\u093F\u0928\u094D\u0926\u0940", region: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  mr: { nativeName: "\u092E\u0930\u093E\u0920\u0940", region: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  ta: { nativeName: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", region: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  te: { nativeName: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", region: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  gu: { nativeName: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0", region: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  bn: { nativeName: "\u09AC\u09BE\u0982\u09B2\u09BE", region: "Bangladesh / India", flag: "\u{1F1E7}\u{1F1E9}" },
  kn: { nativeName: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", region: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  ml: { nativeName: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02", region: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  pa: { nativeName: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40", region: "India", flag: "\u{1F1EE}\u{1F1F3}" },
  fr: { nativeName: "Fran\xE7ais", region: "France", flag: "\u{1F1EB}\u{1F1F7}" },
  de: { nativeName: "Deutsch", region: "Germany", flag: "\u{1F1E9}\u{1F1EA}" },
  es: { nativeName: "Espa\xF1ol", region: "Spain", flag: "\u{1F1EA}\u{1F1F8}" },
  pt: { nativeName: "Portugu\xEAs", region: "Portugal / Brazil", flag: "\u{1F1F5}\u{1F1F9}" },
  it: { nativeName: "Italiano", region: "Italy", flag: "\u{1F1EE}\u{1F1F9}" },
  nl: { nativeName: "Nederlands", region: "Netherlands", flag: "\u{1F1F3}\u{1F1F1}" },
  ar: { nativeName: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", region: "Middle East", flag: "\u{1F1E6}\u{1F1EA}" },
  ur: { nativeName: "\u0627\u0631\u062F\u0648", region: "Pakistan", flag: "\u{1F1F5}\u{1F1F0}" },
  ru: { nativeName: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", region: "Russia", flag: "\u{1F1F7}\u{1F1FA}" },
  ja: { nativeName: "\u65E5\u672C\u8A9E", region: "Japan", flag: "\u{1F1EF}\u{1F1F5}" },
  ko: { nativeName: "\uD55C\uAD6D\uC5B4", region: "South Korea", flag: "\u{1F1F0}\u{1F1F7}" },
  "zh-CN": { nativeName: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09", region: "China", flag: "\u{1F1E8}\u{1F1F3}" },
  "zh-TW": { nativeName: "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09", region: "Taiwan", flag: "\u{1F1F9}\u{1F1FC}" },
  id: { nativeName: "Bahasa Indonesia", region: "Indonesia", flag: "\u{1F1EE}\u{1F1E9}" },
  tr: { nativeName: "T\xFCrk\xE7e", region: "T\xFCrkiye", flag: "\u{1F1F9}\u{1F1F7}" },
  vi: { nativeName: "Ti\u1EBFng Vi\u1EC7t", region: "Vietnam", flag: "\u{1F1FB}\u{1F1F3}" },
  th: { nativeName: "\u0E44\u0E17\u0E22", region: "Thailand", flag: "\u{1F1F9}\u{1F1ED}" }
};

// src/app/core/language.service.ts
var SCRIPT_ID = "google-translate-script";
var LanguageService = class _LanguageService {
  doc = inject(DOCUMENT);
  destroyRef = inject(DestroyRef);
  router = inject(Router);
  observer;
  timeout;
  loading = false;
  previousUrl = this.router.navigated ? this.router.url : void 0;
  status = signal("loading", ...ngDevMode ? [{ debugName: "status" }] : []);
  selected = signal(this.readLanguage(), ...ngDevMode ? [{ debugName: "selected" }] : []);
  options = signal([__spreadValues({ code: "en", name: "English" }, LANGUAGE_DETAILS["en"])], ...ngDevMode ? [{ debugName: "options" }] : []);
  connected = /* @__PURE__ */ new WeakSet();
  readLanguage() {
    try {
      const cookie = this.doc.cookie.split("; ").find((value) => value.startsWith("googtrans="));
      return cookie ? decodeURIComponent(cookie.slice(10)).split("/").pop() || "en" : "en";
    } catch {
      return "en";
    }
  }
  choose(code) {
    if (code === this.selected())
      return;
    if (code === "en") {
      const win = this.doc.defaultView;
      if (!win)
        return;
      const domains = win.location.hostname.split(".");
      this.doc.cookie = "googtrans=; Max-Age=0; path=/";
      for (let i = 0; i < domains.length; i++) {
        this.doc.cookie = `googtrans=; Max-Age=0; path=/; domain=${domains.slice(i).join(".")}`;
      }
      this.selected.set("en");
      win.location.reload();
      return;
    }
    const select = this.doc.querySelector("#google_translate_element .goog-te-combo");
    if (this.status() !== "ready" || !select || !this.options().some((item) => item.code === code))
      return;
    select.value = code;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    this.selected.set(code);
  }
  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (!(event instanceof NavigationEnd))
        return;
      const changedPage = this.previousUrl !== void 0 && event.urlAfterRedirects.split("#")[0] !== this.previousUrl.split("#")[0];
      this.previousUrl = event.urlAfterRedirects;
      const selected = this.doc.querySelector("#google_translate_element .goog-te-combo")?.value;
      if (changedPage && this.status() === "ready" && selected && selected !== "en") {
        this.doc.defaultView?.location.reload();
      }
    });
    this.destroyRef.onDestroy(() => this.stopWaiting());
  }
  initGoogleTranslate(hostId) {
    const win = this.doc.defaultView;
    const host = this.doc.getElementById(hostId);
    if (!win || !host || this.loading || typeof MutationObserver === "undefined")
      return;
    const markReady = () => {
      const select = host.querySelector(".goog-te-combo");
      if (!select || select.options.length < 2)
        return false;
      select.setAttribute("aria-label", "Translate website language");
      this.options.set([
        __spreadValues({ code: "en", name: "English" }, LANGUAGE_DETAILS["en"]),
        ...Array.from(select.options).filter((option) => option.value && option.value !== "en").map((option) => __spreadProps(__spreadValues({
          code: option.value,
          name: option.text
        }, LANGUAGE_DETAILS[option.value]), {
          nativeName: LANGUAGE_DETAILS[option.value]?.nativeName ?? option.text,
          flag: LANGUAGE_DETAILS[option.value]?.flag ?? flagForLanguage(option.value)
        }))
      ]);
      if (!this.connected.has(select)) {
        const onChange = () => this.selected.set(select.value || this.readLanguage());
        select.addEventListener("change", onChange);
        this.destroyRef.onDestroy(() => select.removeEventListener("change", onChange));
        this.connected.add(select);
      }
      this.selected.set(select.value || this.readLanguage());
      this.stopWaiting();
      this.loading = false;
      this.status.set("ready");
      return true;
    };
    if (markReady())
      return;
    this.loading = true;
    this.status.set("loading");
    const fail = () => {
      this.stopWaiting();
      this.loading = false;
      this.status.set("error");
    };
    this.observer = new MutationObserver(() => markReady());
    this.observer.observe(host, { childList: true, subtree: true });
    this.timeout = win.setTimeout(fail, 2e4);
    const initialize = () => {
      const TranslateElement = win.google?.translate?.TranslateElement;
      if (!TranslateElement) {
        fail();
        return;
      }
      try {
        host.replaceChildren();
        new TranslateElement({ pageLanguage: "en", autoDisplay: false }, hostId);
        markReady();
      } catch {
        fail();
      }
    };
    if (win.google?.translate?.TranslateElement) {
      initialize();
      return;
    }
    this.doc.getElementById(SCRIPT_ID)?.remove();
    win.googleTranslateElementInit = initialize;
    const script = this.doc.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = fail;
    this.doc.head.appendChild(script);
  }
  stopWaiting() {
    this.observer?.disconnect();
    this.observer = void 0;
    if (this.timeout !== void 0) {
      this.doc.defaultView?.clearTimeout(this.timeout);
      this.timeout = void 0;
    }
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/core/theme.service.ts
var THEME_STORAGE_KEY = "xcellhost-color-theme";
var ThemeService = class _ThemeService {
  doc = inject(DOCUMENT);
  _theme = signal(this.initialTheme(), ...ngDevMode ? [{ debugName: "_theme" }] : []);
  theme = this._theme.asReadonly();
  isDark = () => this._theme() === "dark";
  constructor() {
    this.apply(this._theme());
  }
  toggle() {
    const next = this.isDark() ? "light" : "dark";
    this._theme.set(next);
    this.apply(next);
    try {
      this.doc.defaultView?.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
    }
  }
  initialTheme() {
    try {
      const saved = this.doc.defaultView?.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "light" || saved === "dark")
        return saved;
    } catch {
    }
    return "light";
  }
  apply(theme) {
    const root = this.doc.documentElement;
    if (!root)
      return;
    root.classList.toggle("dark-mode", theme === "dark");
    root.style?.setProperty("color-scheme", theme);
    root.setAttribute("data-theme", theme);
    this.doc.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#07111f" : "#041E42");
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/layout/language-picker.component.ts
var _c04 = ["dialog"];
var _c14 = ["trigger"];
var _forTrack07 = ($index, $item) => $item.code;
function LanguagePickerComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 18);
    \u0275\u0275text(1, "Loading available languages\u2026");
    \u0275\u0275domElementEnd();
  }
}
function LanguagePickerComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 18);
    \u0275\u0275text(1, "Languages could not load. ");
    \u0275\u0275domElementStart(2, "button", 21);
    \u0275\u0275domListener("click", function LanguagePickerComponent_Conditional_29_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.retry.emit());
    });
    \u0275\u0275text(3, "Try again");
    \u0275\u0275domElementEnd()();
  }
}
function LanguagePickerComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 22);
    \u0275\u0275domListener("click", function LanguagePickerComponent_For_32_Template_button_click_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.choose(item_r5.code));
    });
    \u0275\u0275domElementStart(1, "span", 23);
    \u0275\u0275domElement(2, "img", 24);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 25)(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 26);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "span", 27);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("selected", ctx_r2.selected() === item_r5.code);
    \u0275\u0275domProperty("disabled", ctx_r2.status() !== "ready" && item_r5.code !== "en");
    \u0275\u0275attribute("aria-pressed", ctx_r2.selected() === item_r5.code);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", ctx_r2.flagImageUrl(item_r5.flag), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r5.region || item_r5.name);
    \u0275\u0275advance();
    \u0275\u0275domProperty("lang", item_r5.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.nativeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selected() === item_r5.code ? "\u2713" : "");
  }
}
function LanguagePickerComponent_ForEmpty_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 28);
    \u0275\u0275text(1, "No languages match your search.");
    \u0275\u0275domElementEnd();
  }
}
function LanguagePickerComponent_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LanguagePickerComponent_ForEmpty_33_Conditional_0_Template, 2, 0, "p", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.status() === "ready" ? 0 : -1);
  }
}
var LanguagePickerComponent = class _LanguagePickerComponent {
  options = input([], ...ngDevMode ? [{ debugName: "options" }] : []);
  selected = input("en", ...ngDevMode ? [{ debugName: "selected" }] : []);
  status = input("ready", ...ngDevMode ? [{ debugName: "status" }] : []);
  selectLanguage = output();
  retry = output();
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  opened = signal(false, ...ngDevMode ? [{ debugName: "opened" }] : []);
  dialog = viewChild.required("dialog");
  trigger = viewChild.required("trigger");
  current = computed(() => this.options().find((item) => item.code === this.selected()), ...ngDevMode ? [{ debugName: "current" }] : []);
  filtered = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    return this.options().filter((item) => `${item.name} ${item.nativeName} ${item.region ?? ""}`.toLocaleLowerCase().includes(query));
  }, ...ngDevMode ? [{ debugName: "filtered" }] : []);
  flagImageUrl(flag) {
    const indicators = [...flag ?? ""].map((character) => character.codePointAt(0) ?? 0);
    const isCountryFlag = indicators.length === 2 && indicators.every((codePoint) => codePoint >= 127462 && codePoint <= 127487);
    const countryCode = isCountryFlag ? indicators.map((codePoint) => String.fromCharCode(codePoint - 127462 + 97)).join("") : "un";
    return `https://flagcdn.com/w40/${countryCode}.png`;
  }
  open() {
    this.query.set("");
    this.dialog().nativeElement.showModal();
    this.opened.set(true);
  }
  close() {
    this.dialog().nativeElement.close();
  }
  onClose() {
    this.opened.set(false);
    this.trigger().nativeElement.focus();
  }
  backdrop(event) {
    if (event.target !== this.dialog().nativeElement)
      return;
    const rect = this.dialog().nativeElement.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)
      this.close();
  }
  choose(code) {
    this.selectLanguage.emit(code);
    this.close();
  }
  static \u0275fac = function LanguagePickerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguagePickerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguagePickerComponent, selectors: [["xh-language-picker"]], viewQuery: function LanguagePickerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.dialog, _c04, 5);
      \u0275\u0275viewQuerySignal(ctx.trigger, _c14, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, hostAttrs: ["translate", "no", 1, "notranslate"], inputs: { options: [1, "options"], selected: [1, "selected"], status: [1, "status"] }, outputs: { selectLanguage: "selectLanguage", retry: "retry" }, decls: 34, vars: 6, consts: [["trigger", ""], ["dialog", ""], ["type", "button", "aria-haspopup", "dialog", "aria-label", "Choose website language", 1, "language-trigger", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "9"], ["cx", "12", "cy", "12", "rx", "4", "ry", "9"], ["d", "M3 12h18M5 6h14M5 18h14"], ["aria-hidden", "true"], ["aria-labelledby", "language-title", 1, "language-dialog", 3, "close", "click"], [1, "language-panel"], [1, "language-eyebrow"], ["id", "language-title"], ["type", "button", "aria-label", "Close language selector", 1, "language-close", 3, "click"], [1, "language-search"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "aria-hidden", "true"], ["cx", "10", "cy", "10", "r", "6"], ["d", "m15 15 5 5"], ["autofocus", "", "type", "search", "placeholder", "Search languages or regions", "aria-label", "Search languages or regions", 3, "input", "value"], ["role", "status", 1, "language-status"], ["aria-label", "Available languages", 1, "language-grid"], ["type", "button", 1, "language-option", 3, "selected", "disabled"], ["type", "button", 3, "click"], ["type", "button", 1, "language-option", 3, "click", "disabled"], ["aria-hidden", "true", 1, "language-flag"], ["alt", "", "width", "30", "height", "20", "loading", "lazy", 3, "src"], [1, "language-copy"], [3, "lang"], ["aria-hidden", "true", 1, "language-check"], [1, "language-status"]], template: function LanguagePickerComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "button", 2, 0);
      \u0275\u0275domListener("click", function LanguagePickerComponent_Template_button_click_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.open());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(2, "svg", 3);
      \u0275\u0275domElement(3, "circle", 4)(4, "ellipse", 5)(5, "path", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(6, "span");
      \u0275\u0275text(7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "span", 7);
      \u0275\u0275text(9, "\u2304");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(10, "dialog", 8, 1);
      \u0275\u0275domListener("close", function LanguagePickerComponent_Template_dialog_close_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClose());
      })("click", function LanguagePickerComponent_Template_dialog_click_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.backdrop($event));
      });
      \u0275\u0275domElementStart(12, "div", 9)(13, "header")(14, "div")(15, "span", 10);
      \u0275\u0275text(16, "XCELLHOST WORLDWIDE");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "h2", 11);
      \u0275\u0275text(18, "Choose your language");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "p");
      \u0275\u0275text(20, "Explore XcellHost in the language you prefer.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "button", 12);
      \u0275\u0275domListener("click", function LanguagePickerComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.close());
      });
      \u0275\u0275text(22, "\xD7");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(23, "label", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(24, "svg", 14);
      \u0275\u0275domElement(25, "circle", 15)(26, "path", 16);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(27, "input", 17);
      \u0275\u0275domListener("input", function LanguagePickerComponent_Template_input_input_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.query.set($event.target.value));
      });
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(28, LanguagePickerComponent_Conditional_28_Template, 2, 0, "p", 18);
      \u0275\u0275conditionalCreate(29, LanguagePickerComponent_Conditional_29_Template, 4, 0, "div", 18);
      \u0275\u0275domElementStart(30, "div", 19);
      \u0275\u0275repeaterCreate(31, LanguagePickerComponent_For_32_Template, 10, 9, "button", 20, _forTrack07, false, LanguagePickerComponent_ForEmpty_33_Template, 1, 1);
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275attribute("aria-expanded", ctx.opened());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(((tmp_3_0 = ctx.current()) == null ? null : tmp_3_0.nativeName) || "English");
      \u0275\u0275advance(20);
      \u0275\u0275domProperty("value", ctx.query());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status() === "loading" ? 28 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status() === "error" ? 29 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filtered());
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n  flex: none;\n}\n.language-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 32px;\n  padding: 6px 11px;\n  border: 1px solid #ffffff40;\n  border-radius: 8px;\n  background: #ffffff0d;\n  color: #fff;\n  font: 600 12px var(--body);\n  cursor: pointer;\n  white-space: nowrap;\n}\n.language-trigger[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.language-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\n.language-trigger[_ngcontent-%COMP%]:hover {\n  background: #ffffff20;\n}\n.language-dialog[_ngcontent-%COMP%] {\n  width: min(900px, calc(100vw - 32px));\n  max-height: 85dvh;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #dce5f2;\n  border-radius: 20px;\n  background: #fff;\n  color: #102747;\n  box-shadow: 0 28px 90px #041e4240;\n  overflow: auto;\n  color-scheme: light;\n}\n.language-dialog[_ngcontent-%COMP%]::backdrop {\n  background: #041e4299;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.language-panel[_ngcontent-%COMP%] {\n  padding: 32px;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.language-eyebrow[_ngcontent-%COMP%] {\n  font: 700 10px var(--mono);\n  letter-spacing: .16em;\n  color: #1565d8;\n}\nh2[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font: 700 clamp(23px, 4vw, 30px)/1.2 var(--disp);\n  letter-spacing: -.03em;\n  color: #041e42;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #61718a;\n  font: 14px/1.6 var(--body);\n}\n.language-close[_ngcontent-%COMP%] {\n  flex: none;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #e1e7ef;\n  border-radius: 50%;\n  background: #f6f8fc;\n  color: #31445f;\n  font: 26px/1 var(--body);\n  cursor: pointer;\n}\n.language-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 14px;\n  margin-bottom: 20px;\n  border: 1px solid #dce5f2;\n  border-radius: 10px;\n  background: #f8faff;\n  color: #61718a;\n}\n.language-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  padding: 13px 0;\n  border: 0;\n  background: transparent;\n  color: #102747;\n  font: 14px var(--body);\n  outline: none;\n}\n.language-search[_ngcontent-%COMP%]:focus-within {\n  outline: 2px solid #1565d8;\n  outline-offset: 2px;\n}\n.language-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n.language-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 70px;\n  padding: 12px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: #fff;\n  color: #102747;\n  text-align: left;\n  cursor: pointer;\n}\n.language-option[_ngcontent-%COMP%]:hover {\n  background: #f2f6fc;\n  border-color: #dce5f2;\n}\n.language-option.selected[_ngcontent-%COMP%] {\n  background: #edf4ff;\n  border-color: #1565d8;\n}\n.language-option[_ngcontent-%COMP%]:disabled {\n  opacity: .5;\n  cursor: wait;\n}\n.language-flag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 22px;\n  flex: none;\n  overflow: hidden;\n  border: 1px solid #dce5f2;\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: 0 1px 3px #041e4226;\n}\n.language-flag[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 20px;\n  object-fit: cover;\n}\n.language-copy[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  min-width: 0;\n  font: 13px/1.4 var(--body);\n}\n.language-copy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.language-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #61718a;\n}\n.language-check[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #1565d8;\n  font-weight: 700;\n}\n.language-status[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: 12px 0;\n  font: 14px/1.6 var(--body);\n  color: #61718a;\n}\n.language-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #1565d8;\n  text-decoration: underline;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #73a9fa;\n  outline-offset: 2px;\n}\n@media (max-width: 700px) {\n  .language-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .language-panel[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n}\n@media (max-width: 430px) {\n  .language-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .language-dialog[_ngcontent-%COMP%] {\n    max-height: 90dvh;\n  }\n  .language-panel[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}\n/*# sourceMappingURL=language-picker.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguagePickerComponent, [{
    type: Component,
    args: [{ selector: "xh-language-picker", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, host: { class: "notranslate", translate: "no" }, template: `<button #trigger class="language-trigger" type="button" aria-haspopup="dialog" [attr.aria-expanded]="opened()" aria-label="Choose website language" (click)="open()">\r
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6h14M5 18h14"/></svg>\r
  <span>{{ current()?.nativeName || 'English' }}</span><span aria-hidden="true">\u2304</span>\r
</button>\r
<dialog #dialog class="language-dialog" aria-labelledby="language-title" (close)="onClose()" (click)="backdrop($event)">\r
  <div class="language-panel">\r
    <header><div><span class="language-eyebrow">XCELLHOST WORLDWIDE</span><h2 id="language-title">Choose your language</h2><p>Explore XcellHost in the language you prefer.</p></div><button class="language-close" type="button" aria-label="Close language selector" (click)="close()">\xD7</button></header>\r
    <label class="language-search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5"/></svg><input autofocus type="search" placeholder="Search languages or regions" aria-label="Search languages or regions" [value]="query()" (input)="query.set($any($event.target).value)"/></label>\r
    @if (status() === 'loading') { <p class="language-status" role="status">Loading available languages\u2026</p> }\r
    @if (status() === 'error') { <div class="language-status" role="status">Languages could not load. <button type="button" (click)="retry.emit()">Try again</button></div> }\r
    <div class="language-grid" aria-label="Available languages">\r
      @for (item of filtered(); track item.code) {\r
        <button class="language-option" type="button" [class.selected]="selected() === item.code" [attr.aria-pressed]="selected() === item.code" [disabled]="status() !== 'ready' && item.code !== 'en'" (click)="choose(item.code)">\r
          <span class="language-flag" aria-hidden="true"><img [src]="flagImageUrl(item.flag)" alt="" width="30" height="20" loading="lazy" /></span><span class="language-copy"><b>{{ item.region || item.name }}</b><span [lang]="item.code">{{ item.nativeName }}</span></span><span class="language-check" aria-hidden="true">{{ selected() === item.code ? '\u2713' : '' }}</span>\r
        </button>\r
      } @empty { @if (status() === 'ready') { <p class="language-status">No languages match your search.</p> } }\r
    </div>\r
  </div>\r
</dialog>\r
`, styles: ["/* src/app/layout/language-picker.component.css */\n:host {\n  display: inline-flex;\n  flex: none;\n}\n.language-trigger {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 32px;\n  padding: 6px 11px;\n  border: 1px solid #ffffff40;\n  border-radius: 8px;\n  background: #ffffff0d;\n  color: #fff;\n  font: 600 12px var(--body);\n  cursor: pointer;\n  white-space: nowrap;\n}\n.language-trigger svg,\n.language-search svg {\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\n.language-trigger:hover {\n  background: #ffffff20;\n}\n.language-dialog {\n  width: min(900px, calc(100vw - 32px));\n  max-height: 85dvh;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #dce5f2;\n  border-radius: 20px;\n  background: #fff;\n  color: #102747;\n  box-shadow: 0 28px 90px #041e4240;\n  overflow: auto;\n  color-scheme: light;\n}\n.language-dialog::backdrop {\n  background: #041e4299;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.language-panel {\n  padding: 32px;\n}\nheader {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n.language-eyebrow {\n  font: 700 10px var(--mono);\n  letter-spacing: .16em;\n  color: #1565d8;\n}\nh2 {\n  margin: 8px 0;\n  font: 700 clamp(23px, 4vw, 30px)/1.2 var(--disp);\n  letter-spacing: -.03em;\n  color: #041e42;\n}\np {\n  margin: 0;\n  color: #61718a;\n  font: 14px/1.6 var(--body);\n}\n.language-close {\n  flex: none;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #e1e7ef;\n  border-radius: 50%;\n  background: #f6f8fc;\n  color: #31445f;\n  font: 26px/1 var(--body);\n  cursor: pointer;\n}\n.language-search {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 14px;\n  margin-bottom: 20px;\n  border: 1px solid #dce5f2;\n  border-radius: 10px;\n  background: #f8faff;\n  color: #61718a;\n}\n.language-search input {\n  width: 100%;\n  min-width: 0;\n  padding: 13px 0;\n  border: 0;\n  background: transparent;\n  color: #102747;\n  font: 14px var(--body);\n  outline: none;\n}\n.language-search:focus-within {\n  outline: 2px solid #1565d8;\n  outline-offset: 2px;\n}\n.language-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 8px;\n}\n.language-option {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-height: 70px;\n  padding: 12px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: #fff;\n  color: #102747;\n  text-align: left;\n  cursor: pointer;\n}\n.language-option:hover {\n  background: #f2f6fc;\n  border-color: #dce5f2;\n}\n.language-option.selected {\n  background: #edf4ff;\n  border-color: #1565d8;\n}\n.language-option:disabled {\n  opacity: .5;\n  cursor: wait;\n}\n.language-flag {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 22px;\n  flex: none;\n  overflow: hidden;\n  border: 1px solid #dce5f2;\n  border-radius: 3px;\n  background: #fff;\n  box-shadow: 0 1px 3px #041e4226;\n}\n.language-flag img {\n  display: block;\n  width: 30px;\n  height: 20px;\n  object-fit: cover;\n}\n.language-copy {\n  display: grid;\n  gap: 3px;\n  min-width: 0;\n  font: 13px/1.4 var(--body);\n}\n.language-copy b {\n  font-weight: 600;\n}\n.language-copy > span {\n  color: #61718a;\n}\n.language-check {\n  margin-left: auto;\n  color: #1565d8;\n  font-weight: 700;\n}\n.language-status {\n  grid-column: 1/-1;\n  margin: 12px 0;\n  font: 14px/1.6 var(--body);\n  color: #61718a;\n}\n.language-status button {\n  border: 0;\n  background: transparent;\n  color: #1565d8;\n  text-decoration: underline;\n  cursor: pointer;\n}\nbutton:focus-visible {\n  outline: 3px solid #73a9fa;\n  outline-offset: 2px;\n}\n@media (max-width: 700px) {\n  .language-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .language-panel {\n    padding: 22px;\n  }\n}\n@media (max-width: 430px) {\n  .language-grid {\n    grid-template-columns: 1fr;\n  }\n  .language-dialog {\n    max-height: 90dvh;\n  }\n  .language-panel {\n    padding: 18px;\n  }\n}\n/*# sourceMappingURL=language-picker.component.css.map */\n"] }]
  }], null, { options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], selected: [{ type: Input, args: [{ isSignal: true, alias: "selected", required: false }] }], status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }], selectLanguage: [{ type: Output, args: ["selectLanguage"] }], retry: [{ type: Output, args: ["retry"] }], dialog: [{ type: ViewChild, args: ["dialog", { isSignal: true }] }], trigger: [{ type: ViewChild, args: ["trigger", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguagePickerComponent, { className: "LanguagePickerComponent", filePath: "src/app/layout/language-picker.component.ts", lineNumber: 19 });
})();

// src/app/layout/utility-bar.component.ts
function UtilityBarComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "circle", 31)(2, "path", 32);
    \u0275\u0275elementEnd();
  }
}
function UtilityBarComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 17);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function UtilityBarComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Loading languages...");
    \u0275\u0275elementEnd();
  }
}
function UtilityBarComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function UtilityBarComponent_Conditional_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryTranslation());
    });
    \u0275\u0275text(1, " Retry Google Translate ");
    \u0275\u0275elementEnd();
  }
}
var UtilityBarComponent = class _UtilityBarComponent {
  linksExpanded = signal(false, ...ngDevMode ? [{ debugName: "linksExpanded" }] : []);
  site = SITE;
  theme = inject(ThemeService);
  language = inject(LanguageService);
  whatsappHref = `https://wa.me/${SITE.whatsapp}`;
  ngAfterViewInit() {
    this.language.initGoogleTranslate("google_translate_element");
  }
  retryTranslation() {
    this.language.initGoogleTranslate("google_translate_element");
  }
  static \u0275fac = function UtilityBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UtilityBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UtilityBarComponent, selectors: [["xh-utility-bar"]], hostAttrs: [2, "display", "contents"], decls: 46, vars: 17, consts: [[1, "utility"], [1, "wrap", "ub2"], ["href", "https://billing.zohosecure.in/portal/xcellhostcloudservicespvtltd/signin", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://supportdesk.xcellhost.cloud/portal/en/home", "target", "_blank", "rel", "noopener noreferrer"], ["type", "button", "aria-controls", "utility-more-links", 1, "utility-mobile-toggle", 3, "click"], ["aria-hidden", "true"], ["id", "utility-more-links", 1, "ub2-extra"], ["href", "https://supportdesk.xcellhost.cloud/portal/en/signin", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.microsoft.com/en-in/microsoft-365", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://supportdesk.xcellhost.cloud/portal/en/kb", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://assist.zoho.in/install-customer-plugin?cxp_token=abb9fe4a68f6868fd49a081392f89115d7268dfc361a9370005a494a1fde5742&type=exe", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://vcloud.officeinfra.com:4085/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://cp.cloudbaba.ai/login"], ["href", "/cloud-login", "target", "_blank", "rel", "noopener noreferrer"], [1, "ub2-push"], ["role", "group", "aria-label", "Display settings", 1, "ub2-tools"], ["routerLink", "/company/platform-status", "aria-label", "View platform status", "title", "Platform Status", 1, "ub2-status"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M22 12h-4l-3 8-6-16-3 8H2"], ["aria-hidden", "true", 1, "ub2-status-dot"], ["type", "button", 1, "ub2-tool", "ub2-theme", 3, "click"], [3, "selectLanguage", "retry", "options", "selected", "status"], ["translate", "no", "role", "group", "aria-label", "Google Translate", 1, "ub2-translate", "notranslate"], ["id", "google_translate_element", 1, "google-translate-host"], ["role", "status", 1, "ub2-translate-status"], ["type", "button", "title", "Google Translate could not load. Check your connection and try again.", 1, "ub2-tool"], [1, "phone", 3, "href"], ["target", "_blank", "rel", "noopener", "aria-label", "WhatsApp XcellHost", 1, "uwa", 3, "href"], ["viewBox", "0 0 24 24", "width", "14", "height", "14", "fill", "currentColor", "aria-hidden", "true"], ["d", "M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 00-8.6 15.05L2 22l5.07-1.33A10 10 0 1012 2zm0 18.2a8.17 8.17 0 01-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.2 8.2 0 1112 20.2z"], ["id", "google_translate_element", "hidden", "", "aria-hidden", "true", "inert", "", 1, "google-translate-host"], ["cx", "12", "cy", "12", "r", "4"], ["d", "M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"], ["d", "M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z"], ["type", "button", "title", "Google Translate could not load. Check your connection and try again.", 1, "ub2-tool", 3, "click"]], template: function UtilityBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275text(3, "Billing Portal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, "Support Portal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 4);
      \u0275\u0275listener("click", function UtilityBarComponent_Template_button_click_6_listener() {
        return ctx.linksExpanded.set(!ctx.linksExpanded());
      });
      \u0275\u0275text(7);
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6)(11, "a", 7);
      \u0275\u0275text(12, "Submit a Ticket");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, "Microsoft 365 Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "Knowledgebase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 10);
      \u0275\u0275text(18, "Remote Assist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275text(20, "VPS Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 12);
      \u0275\u0275text(22, "Cloud Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 13);
      \u0275\u0275text(24, "Acronis Cyber Console");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "span", 14);
      \u0275\u0275elementStart(26, "div", 15)(27, "a", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(28, "svg", 17);
      \u0275\u0275element(29, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(30, "span", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 20);
      \u0275\u0275listener("click", function UtilityBarComponent_Template_button_click_31_listener() {
        return ctx.theme.toggle();
      });
      \u0275\u0275conditionalCreate(32, UtilityBarComponent_Conditional_32_Template, 3, 0, ":svg:svg", 17)(33, UtilityBarComponent_Conditional_33_Template, 2, 0, ":svg:svg", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "xh-language-picker", 21);
      \u0275\u0275listener("selectLanguage", function UtilityBarComponent_Template_xh_language_picker_selectLanguage_34_listener($event) {
        return ctx.language.choose($event);
      })("retry", function UtilityBarComponent_Template_xh_language_picker_retry_34_listener() {
        return ctx.retryTranslation();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 22);
      \u0275\u0275element(36, "div", 23);
      \u0275\u0275conditionalCreate(37, UtilityBarComponent_Conditional_37_Template, 2, 0, "span", 24)(38, UtilityBarComponent_Conditional_38_Template, 2, 0, "button", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "a", 26);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "a", 27);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(42, "svg", 28);
      \u0275\u0275element(43, "path", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275text(44);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(45, "div", 30);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275attribute("aria-expanded", ctx.linksExpanded());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.linksExpanded() ? "Less" : "More links", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.linksExpanded() ? "\u2212" : "+");
      \u0275\u0275advance();
      \u0275\u0275classProp("is-expanded", ctx.linksExpanded());
      \u0275\u0275advance(21);
      \u0275\u0275attribute("aria-label", ctx.theme.isDark() ? "Switch to light mode" : "Switch to dark mode")("title", ctx.theme.isDark() ? "Light mode" : "Dark mode")("aria-pressed", ctx.theme.isDark());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.theme.isDark() ? 32 : 33);
      \u0275\u0275advance(2);
      \u0275\u0275property("options", ctx.language.options())("selected", ctx.language.selected())("status", ctx.language.status());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.language.status() === "loading" ? 37 : ctx.language.status() === "error" ? 38 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.site.phoneHref, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Phone ", ctx.site.phone);
      \u0275\u0275advance();
      \u0275\u0275property("href", ctx.whatsappHref, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.site.whatsappLabel);
    }
  }, dependencies: [LanguagePickerComponent, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UtilityBarComponent, [{
    type: Component,
    args: [{ selector: "xh-utility-bar", changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "display: contents" }, imports: [LanguagePickerComponent, RouterLink], template: `<div class="utility">\r
  <div class="wrap ub2">\r
    <a href="https://billing.zohosecure.in/portal/xcellhostcloudservicespvtltd/signin" target="_blank"\r
      rel="noopener noreferrer">Billing Portal</a><a href="https://supportdesk.xcellhost.cloud/portal/en/home"\r
      target="_blank" rel="noopener noreferrer">Support Portal</a>\r
    <button class="utility-mobile-toggle" type="button" aria-controls="utility-more-links"\r
      [attr.aria-expanded]="linksExpanded()" (click)="linksExpanded.set(!linksExpanded())">\r
      {{ linksExpanded() ? 'Less' : 'More links' }} <span aria-hidden="true">{{ linksExpanded() ? '\u2212' : '+' }}</span>\r
    </button>\r
    <div id="utility-more-links" class="ub2-extra" [class.is-expanded]="linksExpanded()">\r
    <a\r
      href="https://supportdesk.xcellhost.cloud/portal/en/signin" target="_blank" rel="noopener noreferrer">Submit a\r
      Ticket</a><a href="https://www.microsoft.com/en-in/microsoft-365" target="_blank" rel="noopener noreferrer">Microsoft 365\r
      Login</a><a href="https://supportdesk.xcellhost.cloud/portal/en/kb" target="_blank"\r
      rel="noopener noreferrer">Knowledgebase</a><a\r
      href="https://assist.zoho.in/install-customer-plugin?cxp_token=abb9fe4a68f6868fd49a081392f89115d7268dfc361a9370005a494a1fde5742&amp;type=exe"\r
      target="_blank" rel="noopener noreferrer">Remote Assist</a><a href="https://vcloud.officeinfra.com:4085/"\r
      target="_blank" rel="noopener noreferrer">VPS Login</a><a href="https://cp.cloudbaba.ai/login">Cloud Login</a><a\r
      href="/cloud-login" target="_blank" rel="noopener noreferrer">Acronis Cyber Console</a>\r
    <span class="ub2-push"></span>\r
    <div class="ub2-tools" role="group" aria-label="Display settings">\r
      <a class="ub2-status" routerLink="/company/platform-status" aria-label="View platform status" title="Platform Status">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"\r
          stroke-linejoin="round" aria-hidden="true">\r
          <path d="M22 12h-4l-3 8-6-16-3 8H2" />\r
        </svg>\r
        <span class="ub2-status-dot" aria-hidden="true"></span>\r
      </a>\r
      <button class="ub2-tool ub2-theme" type="button"\r
        [attr.aria-label]="theme.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"\r
        [attr.title]="theme.isDark() ? 'Light mode' : 'Dark mode'" [attr.aria-pressed]="theme.isDark()"\r
        (click)="theme.toggle()">\r
        @if (theme.isDark()) {\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"\r
          stroke-linejoin="round" aria-hidden="true">\r
          <circle cx="12" cy="12" r="4" />\r
          <path\r
            d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />\r
        </svg>\r
        } @else {\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"\r
          stroke-linejoin="round" aria-hidden="true">\r
          <path d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5 8.5 8.5 0 1 0 20.5 14.4Z" />\r
        </svg>\r
        }\r
      </button>\r
      <xh-language-picker [options]="language.options()" [selected]="language.selected()" [status]="language.status()"\r
        (selectLanguage)="language.choose($event)" (retry)="retryTranslation()" />\r
      <div class="ub2-translate notranslate" translate="no" role="group" aria-label="Google Translate">\r
        <div id="google_translate_element" class="google-translate-host"></div>\r
        @if (language.status() === 'loading') {\r
        <span class="ub2-translate-status" role="status">Loading languages...</span>\r
        } @else if (language.status() === 'error') {\r
        <button class="ub2-tool" type="button" (click)="retryTranslation()"\r
          title="Google Translate could not load. Check your connection and try again.">\r
          Retry Google Translate\r
        </button>\r
        }\r
      </div>\r
    </div>\r
    <a class="phone" [href]="site.phoneHref">Phone {{ site.phone }}</a>\r
    <a class="uwa" [href]="whatsappHref" target="_blank" rel="noopener" aria-label="WhatsApp XcellHost"><svg\r
        viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">\r
        <path\r
          d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 00-8.6 15.05L2 22l5.07-1.33A10 10 0 1012 2zm0 18.2a8.17 8.17 0 01-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31A8.2 8.2 0 1112 20.2z" />\r
      </svg>{{ site.whatsappLabel }}</a>\r
    </div>\r
  </div>\r
\r
\r
  <div id="google_translate_element" class="google-translate-host" hidden aria-hidden="true" inert></div>\r
\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UtilityBarComponent, { className: "UtilityBarComponent", filePath: "src/app/layout/utility-bar.component.ts", lineNumber: 19 });
})();

// src/app/layout/promo-bar.component.ts
var _c05 = (a0) => ({ product: a0 });
var SPECIAL_PRODUCT_ROUTES = {
  "microsoft-365-smb": "Microsoft 365 for SMB",
  "google-workspace": "Google Workspace",
  "dpdpa-for-smb": "DPDPA for SMB",
  "geotrust-ssl-certificates": "GeoTrust SSL Certificates",
  "digicert-vmc": "DigiCert Verified Mark Certificates",
  "digicert-cmc": "DigiCert Common Mark Certificates",
  "mdm": "Cloud Mobile Device Management",
  "cloud-mdm": "Cloud Mobile Device Management",
  "cloud-mobile-device-mgmt": "Cloud Mobile Device Management"
};
var PRODUCT_ACRONYMS = {
  acronis: "Acronis",
  cloud: "Cloud",
  dr: "DR",
  edr: "EDR",
  email: "Email",
  file: "File",
  for: "for",
  management: "Management",
  mdr: "MDR",
  microsoft: "Microsoft",
  monitoring: "Monitoring",
  performance: "Performance",
  recovery: "Recovery",
  remote: "Remote",
  service: "Service",
  sla: "SLA",
  tally: "Tally",
  video: "Video",
  vsaas: "VSaaS",
  whatsapp: "WhatsApp",
  xdr: "XDR"
};
var PromoBarComponent = class _PromoBarComponent {
  router = inject(Router);
  catalog = inject(CatalogService);
  currentUrl = toSignal(this.router.events.pipe(filter((event) => event instanceof NavigationEnd), map((event) => event.urlAfterRedirects)), { initialValue: this.router.url });
  productSlug = computed(() => this.currentUrl().split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, ""), ...ngDevMode ? [{ debugName: "productSlug" }] : []);
  productName = computed(() => {
    const route = this.currentUrl().split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, "");
    const root = route.split("/")[0] ?? "";
    const specialName = SPECIAL_PRODUCT_ROUTES[root];
    if (specialName)
      return specialName;
    const catalogName = this.catalog.entryBySlug(root)?.name;
    if (catalogName)
      return catalogName;
    if (root.endsWith("-sla")) {
      return root.split("-").map((word) => PRODUCT_ACRONYMS[word] ?? `${word.charAt(0).toUpperCase()}${word.slice(1)}`).join(" ");
    }
    return "XcellHost Cloud & Security";
  }, ...ngDevMode ? [{ debugName: "productName" }] : []);
  static \u0275fac = function PromoBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PromoBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PromoBarComponent, selectors: [["xh-promo-bar"]], hostAttrs: [2, "display", "contents"], decls: 11, vars: 5, consts: [["role", "region", 1, "promo", "promo-product"], ["aria-hidden", "true", 1, "promo-check"], [1, "code"], ["aria-hidden", "true"], ["routerLink", "/promotion-and-offers", "fragment", "promo-catalogue", 3, "queryParams"]], template: function PromoBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "b");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 2);
      \u0275\u0275text(6, "FREE CONSULT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 3);
      \u0275\u0275text(8, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "a", 4);
      \u0275\u0275text(10, "Claim offer \u2192");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", "Offer for " + ctx.productName());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", ctx.productName(), " \u2014 free consultation + tailored solution review");
      \u0275\u0275advance(5);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(3, _c05, ctx.productSlug()));
    }
  }, dependencies: [RouterLink], styles: ["\n\n.promo-product[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 51;\n  display: flex;\n  min-height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-weight: 500;\n}\n.promo-product[_ngcontent-%COMP%]   .promo-check[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 16px;\n  height: 16px;\n  place-items: center;\n  border-radius: 4px;\n  background: #2ecc71;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 900;\n  line-height: 1;\n}\n.promo-product[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 11px;\n  letter-spacing: .04em;\n}\n.promo-product[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n@media (max-width: 640px) {\n  .promo-product[_ngcontent-%COMP%] {\n    min-height: 38px;\n    gap: 4px;\n    line-height: 1.35;\n  }\n  .promo-product[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=promo-bar.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PromoBarComponent, [{
    type: Component,
    args: [{ selector: "xh-promo-bar", imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "display: contents" }, template: `
    <div class="promo promo-product" role="region" [attr.aria-label]="'Offer for ' + productName()">
      <span class="promo-check" aria-hidden="true">\u2713</span>
      <b>{{ productName() }} \u2014 free consultation + tailored solution review</b>
      <span class="code">FREE CONSULT</span>
      <span aria-hidden="true">\xB7</span>
      <a routerLink="/promotion-and-offers" [queryParams]="{ product: productSlug() }" fragment="promo-catalogue">Claim offer \u2192</a>
    </div>
  `, styles: ["/* angular:styles/component:css;861ac91dd7852e2885bb4eb6b29e59f7cc80ce497387129f4665cf0d89c7eea3;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/layout/promo-bar.component.ts */\n.promo-product {\n  position: relative;\n  z-index: 51;\n  display: flex;\n  min-height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  font-weight: 500;\n}\n.promo-product .promo-check {\n  display: inline-grid;\n  width: 16px;\n  height: 16px;\n  place-items: center;\n  border-radius: 4px;\n  background: #2ecc71;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 900;\n  line-height: 1;\n}\n.promo-product .code {\n  color: #fff;\n  font-size: 11px;\n  letter-spacing: .04em;\n}\n.promo-product a {\n  color: #fff;\n  font-weight: 700;\n  text-decoration: underline;\n  text-underline-offset: 2px;\n}\n@media (max-width: 640px) {\n  .promo-product {\n    min-height: 38px;\n    gap: 4px;\n    line-height: 1.35;\n  }\n  .promo-product .code {\n    display: none;\n  }\n}\n/*# sourceMappingURL=promo-bar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PromoBarComponent, { className: "PromoBarComponent", filePath: "src/app/layout/promo-bar.component.ts", lineNumber: 93 });
})();

// src/app/layout/header.component.ts
var _c06 = (a0) => ({ $implicit: a0 });
var _forTrack08 = ($index, $item) => $item.label;
var _forTrack14 = ($index, $item) => $item.g;
var _forTrack22 = ($index, $item) => $item.title;
function HeaderComponent_For_10_ng_template_6_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r5.heading);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classMap(item_r7.pillClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.pill);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.desc);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 106);
    \u0275\u0275listener("click", function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275elementStart(1, "span", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 108);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 109)(5, "span", 110)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_0_Conditional_8_Template, 2, 3, "em", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_0_Conditional_9_Template, 2, 1, "small");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(item_r7.pillClass);
    \u0275\u0275property("href", item_r7.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", item_r7.iconPath);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r7.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.pill ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.desc ? 9 : -1);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275classMap(item_r7.pillClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.pill);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.desc);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 112);
    \u0275\u0275listener("click", function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275elementStart(1, "span", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 108);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 109)(5, "span", 110)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_1_Conditional_8_Template, 2, 3, "em", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_1_Conditional_9_Template, 2, 1, "small");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(item_r7.pillClass);
    \u0275\u0275property("routerLink", item_r7.link);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", item_r7.iconPath);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r7.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.pill ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.desc ? 9 : -1);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_0_Template, 10, 7, "a", 104)(1, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Conditional_1_Template, 10, 7, "a", 105);
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r7.external ? 0 : 1);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "em");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275classMap(item_r7.pillClass);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.pill);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r7.desc);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 113);
    \u0275\u0275listener("click", function HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(1, "span", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 108);
    \u0275\u0275element(3, "path");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 109)(5, "span", 110)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_2_Conditional_8_Template, 2, 3, "em", 111);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_2_Conditional_9_Template, 2, 1, "small");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(item_r7.pillClass);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("d", item_r7.iconPath);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r7.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.pill ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.desc ? 9 : -1);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275conditionalCreate(1, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_1_Template, 2, 1)(2, HeaderComponent_For_10_ng_template_6_For_1_For_4_Conditional_2_Template, 10, 6, "a", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r7.link ? 1 : 2);
  }
}
function HeaderComponent_For_10_ng_template_6_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275conditionalCreate(1, HeaderComponent_For_10_ng_template_6_For_1_Conditional_1_Template, 2, 1, "h3");
    \u0275\u0275elementStart(2, "ul", 102);
    \u0275\u0275repeaterCreate(3, HeaderComponent_For_10_ng_template_6_For_1_For_4_Template, 3, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const tab_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r5.heading ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("xh-link-grid-two", tab_r10.label === "Security Platforms");
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r5.items);
  }
}
function HeaderComponent_For_10_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, HeaderComponent_For_10_ng_template_6_For_1_Template, 5, 3, "div", 101, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const tab_r10 = ctx.$implicit;
    \u0275\u0275repeater(tab_r10.groups);
  }
}
function HeaderComponent_For_10_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function HeaderComponent_For_10_For_10_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const tab_r12 = \u0275\u0275nextContext().$implicit;
      const top_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleMobileCategory(top_r3.label, tab_r12.g));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r12 = \u0275\u0275nextContext().$implicit;
    const top_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("id", top_r3.megaId + "-mobile-tab-" + tab_r12.g);
    \u0275\u0275attribute("aria-expanded", ctx_r3.isMobileCategoryOpen(top_r3.label, tab_r12.g))("aria-controls", top_r3.megaId + "-mobile-panel-" + tab_r12.g);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r12.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.isMobileCategoryOpen(top_r3.label, tab_r12.g) ? "\u2212" : "+");
  }
}
function HeaderComponent_For_10_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 115);
    \u0275\u0275elementContainer(1, 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r12 = \u0275\u0275nextContext().$implicit;
    const top_r3 = \u0275\u0275nextContext().$implicit;
    const categoryLinks_r13 = \u0275\u0275reference(7);
    \u0275\u0275property("id", top_r3.megaId + "-mobile-panel-" + tab_r12.g);
    \u0275\u0275attribute("aria-labelledby", tab_r12.label.trim() ? top_r3.megaId + "-mobile-tab-" + tab_r12.g : null);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", categoryLinks_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c06, tab_r12));
  }
}
function HeaderComponent_For_10_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275conditionalCreate(1, HeaderComponent_For_10_For_10_Conditional_1_Template, 4, 5, "button", 114);
    \u0275\u0275conditionalCreate(2, HeaderComponent_For_10_For_10_Conditional_2_Template, 2, 6, "section", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r12 = ctx.$implicit;
    const top_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(tab_r12.label.trim() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!tab_r12.label.trim() || ctx_r3.isMobileCategoryOpen(top_r3.label, tab_r12.g) ? 2 : -1);
  }
}
function HeaderComponent_For_10_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 119);
    \u0275\u0275listener("mouseover", function HeaderComponent_For_10_For_13_Conditional_0_Template_button_mouseover_0_listener() {
      \u0275\u0275restoreView(_r14);
      const tab_r15 = \u0275\u0275nextContext().$implicit;
      const top_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setTab(top_r3.label, tab_r15.g));
    })("click", function HeaderComponent_For_10_For_13_Conditional_0_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const tab_r15 = \u0275\u0275nextContext().$implicit;
      const top_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTabClick($event, top_r3.label, tab_r15.g));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r15 = \u0275\u0275nextContext().$implicit;
    const top_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.isOn(top_r3.label, tab_r15.g));
    \u0275\u0275attribute("aria-selected", ctx_r3.isOn(top_r3.label, tab_r15.g));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r15.label);
  }
}
function HeaderComponent_For_10_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HeaderComponent_For_10_For_13_Conditional_0_Template, 2, 4, "button", 118);
  }
  if (rf & 2) {
    const tab_r15 = ctx.$implicit;
    \u0275\u0275conditional(tab_r15.label.trim() ? 0 : -1);
  }
}
function HeaderComponent_For_10_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 120);
    \u0275\u0275elementContainer(1, 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r16 = ctx.$implicit;
    const top_r3 = \u0275\u0275nextContext().$implicit;
    const categoryLinks_r13 = \u0275\u0275reference(7);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.isOn(top_r3.label, tab_r16.g));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", categoryLinks_r13)("ngTemplateOutletContext", \u0275\u0275pureFunction1(4, _c06, tab_r16));
  }
}
function HeaderComponent_For_10_Conditional_17_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123);
    \u0275\u0275text(1, "New");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_For_10_Conditional_17_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 125);
    \u0275\u0275element(1, "image", 128);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", feature_r18.title);
    \u0275\u0275advance();
    \u0275\u0275attribute("href", feature_r18.image);
  }
}
function HeaderComponent_For_10_Conditional_17_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 129);
  }
  if (rf & 2) {
    const feature_r18 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("object-position", feature_r18.imagePosition ?? "center");
    \u0275\u0275property("src", feature_r18.image, \u0275\u0275sanitizeUrl)("alt", feature_r18.title);
  }
}
function HeaderComponent_For_10_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 122);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Conditional_17_For_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275conditionalCreate(1, HeaderComponent_For_10_Conditional_17_For_2_Conditional_1_Template, 2, 0, "span", 123);
    \u0275\u0275elementStart(2, "span", 124);
    \u0275\u0275conditionalCreate(3, HeaderComponent_For_10_Conditional_17_For_2_Conditional_3_Template, 2, 2, ":svg:svg", 125)(4, HeaderComponent_For_10_Conditional_17_For_2_Conditional_4_Template, 1, 4, "img", 126);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 127)(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "b");
    \u0275\u0275text(13, "Explore ");
    \u0275\u0275elementStart(14, "i", 36);
    \u0275\u0275text(15, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const feature_r18 = ctx.$implicit;
    \u0275\u0275property("href", feature_r18.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("target", feature_r18.link.startsWith("http") ? "_blank" : null)("rel", feature_r18.link.startsWith("http") ? "noopener noreferrer" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r18.fresh ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("xh-feature-media-illustration", feature_r18.image === "/assets/images/menu-cloud-backup.png" || feature_r18.image === "/assets/images/menu-register-domain.png");
    \u0275\u0275advance();
    \u0275\u0275conditional(feature_r18.image === "/assets/images/menu-cloud-backup.png" || feature_r18.image === "/assets/images/menu-register-domain.png" ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feature_r18.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r18.body);
  }
}
function HeaderComponent_For_10_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 62);
    \u0275\u0275repeaterCreate(1, HeaderComponent_For_10_Conditional_17_For_2_Template, 16, 10, "a", 121, _forTrack22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const top_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.activeFeatureCards(top_r3));
  }
}
function HeaderComponent_For_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "aside", 63)(1, "b");
    \u0275\u0275text(2, "Featured");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 112);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Conditional_18_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275text(8, "Explore ");
    \u0275\u0275elementStart(9, "span", 36);
    \u0275\u0275text(10, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const top_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(top_r3.feature.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(top_r3.feature.body);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", top_r3.link);
  }
}
function HeaderComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275listener("mouseenter", function HeaderComponent_For_10_Template_div_mouseenter_0_listener($event) {
      const top_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onTopEnter(top_r3.label, $event));
    });
    \u0275\u0275elementStart(1, "button", 55);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_button_click_1_listener() {
      const top_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTop(top_r3.label));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, "\u2304");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 56);
    \u0275\u0275template(6, HeaderComponent_For_10_ng_template_6_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(8, "div", 57);
    \u0275\u0275repeaterCreate(9, HeaderComponent_For_10_For_10_Template, 3, 2, "div", 58, _forTrack14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nav", 59);
    \u0275\u0275repeaterCreate(12, HeaderComponent_For_10_For_13_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 60);
    \u0275\u0275repeaterCreate(15, HeaderComponent_For_10_For_16_Template, 2, 6, "section", 61, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, HeaderComponent_For_10_Conditional_17_Template, 3, 0, "aside", 62)(18, HeaderComponent_For_10_Conditional_18_Template, 11, 3, "aside", 63);
    \u0275\u0275elementStart(19, "nav", 64)(20, "a", 65);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_a_click_20_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 66);
    \u0275\u0275element(22, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "Contact Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "a", 68);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_a_click_25_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 66);
    \u0275\u0275element(27, "rect", 69)(28, "circle", 70)(29, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "About Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "a", 72);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_a_click_32_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(33, "svg", 66);
    \u0275\u0275element(34, "rect", 73)(35, "path", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Insights");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 75);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onNavigate();
      return \u0275\u0275resetView(ctx_r3.overlay.open("chat"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 66);
    \u0275\u0275element(40, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42, "Ask AI");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "button", 75);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.onNavigate();
      return \u0275\u0275resetView(ctx_r3.overlay.open("callback"));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(44, "svg", 66);
    \u0275\u0275element(45, "path", 77)(46, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "Let's Talk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "a", 79);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_a_click_49_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(50, "svg", 66);
    \u0275\u0275element(51, "path", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Compare Providers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "a", 81);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_a_click_54_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(55, "svg", 66);
    \u0275\u0275element(56, "rect", 82)(57, "rect", 83)(58, "path", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Compare Products");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "a", 85);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_a_click_61_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(62, "svg", 66);
    \u0275\u0275element(63, "path", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65, "Marketplace");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "a", 87);
    \u0275\u0275listener("click", function HeaderComponent_For_10_Template_a_click_66_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onNavigate());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(67, "svg", 66);
    \u0275\u0275element(68, "path", 88)(69, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71, "CyberSecurity Frameworks");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 90)(73, "a", 91);
    \u0275\u0275text(74, "in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "a", 92);
    \u0275\u0275text(76, "\u25B6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "a", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(78, "svg", 66);
    \u0275\u0275element(79, "rect", 94)(80, "circle", 95)(81, "circle", 96);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(82, "a", 97);
    \u0275\u0275text(83, "P");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "a", 98);
    \u0275\u0275text(85, "f");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "a", 99);
    \u0275\u0275text(87, "X");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "span", 100);
    \u0275\u0275text(89, "r");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const top_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r3.openTop() === top_r3.label);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r3.openTop() === top_r3.label)("aria-controls", top_r3.megaId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", top_r3.label, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("id", top_r3.megaId);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(top_r3.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", top_r3.label + " categories");
    \u0275\u0275advance();
    \u0275\u0275repeater(top_r3.tabs);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(top_r3.tabs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.activeFeatureCards(top_r3).length ? 17 : 18);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", top_r3.label + " useful links");
  }
}
function HeaderComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b", 47);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b", 47);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function HeaderComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b", 47);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
var BLUE_PILLS = /* @__PURE__ */ new Set([
  "1-yr free ext.",
  "Soon",
  "SOC PLATFORM",
  "ENDPOINT",
  "DATA LOSS",
  "EMAIL"
]);
function menuPillClass(pill) {
  if (!pill)
    return "";
  const normalized = pill.toLowerCase();
  if (normalized === "top seller" || normalized === "best seller") {
    return "has-menu-pill is-seller";
  }
  if (normalized === "new")
    return "has-menu-pill is-new";
  if (BLUE_PILLS.has(pill))
    return "has-menu-pill is-blue";
  return "has-menu-pill";
}
var MENU_ICON_PATHS = {
  globe: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3c2.2 2.5 3.4 5.5 3.4 9s-1.2 6.5-3.4 9c-2.2-2.5-3.4-5.5-3.4-9S9.8 5.5 12 3Z",
  domainAdd: "M16 19a8 8 0 1 1 2.9-3.8M4 11h14M11 3c2 2.2 3 4.9 3 8m-3 8c-2-2.2-3-4.9-3-8s1-5.8 3-8m8 12v6m-3-3h6",
  transfer: "M16 3h5v5m0-5-6 6M8 21H3v-5m0 5 6-6M18 12a6 6 0 0 0-10.2-4.3M6 12a6 6 0 0 0 10.2 4.3",
  bulkSearch: "M4 5h12v12H4V5Zm3-3h12v12m-3.5 3.5L21 23m-2.5-5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  parking: "M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-4V9m0 0h2.5a2.5 2.5 0 0 1 0 5H12M9 2h6",
  extensions: "M4 4h6v4a2 2 0 1 0 4 0V4h6v6h-4a2 2 0 1 0 0 4h4v6h-6v-4a2 2 0 1 0-4 0v4H4v-6h4a2 2 0 1 0 0-4H4V4Z",
  award: "m12 3 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 3Zm-3 13-1 6 4-2 4 2-1-6",
  lookup: "M4 3h12v18H4V3Zm3 4h6M7 11h4m7.5 6.5L22 21m-1.5-5.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  price: "M3 11V4h7l10 10-7 7L3 11Zm5-3h.01M11 12h5m-2.5-2.5v5",
  backorder: "M4 5h16v16H4V5Zm0 5h16M8 3v4m8-4v4m-4 7v3l2 1",
  server: "M4 4h16v6H4V4Zm0 10h16v6H4v-6Zm3-7h.01M7 17h.01M11 7h6M11 17h6",
  cloud: "M7 18h11a4 4 0 0 0 .7-7.9A7 7 0 0 0 5.4 8.2 5 5 0 0 0 7 18Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3.5-10 2.2 2.2 4.8-4.8",
  mail: "M3 5h18v14H3V5Zm0 1 9 7 9-7",
  database: "M20 5c0 1.7-3.6 3-8 3S4 6.7 4 5s3.6-3 8-3 8 1.3 8 3Zm0 0v7c0 1.7-3.6 3-8 3s-8-1.3-8-3V5m16 7v7c0 1.7-3.6 3-8 3s-8-1.3-8-3v-7",
  monitor: "M3 4h18v13H3V4Zm6 17h6m-3-4v4",
  code: "m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12",
  network: "M12 8V5m0 3-6 4m6-4 6 4M6 12v3m12-3v3M3 15h6v5H3v-5Zm12 0h6v5h-6v-5ZM9 2h6v5H9V2Z",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8",
  file: "M6 2h8l4 4v16H6V2Zm8 0v5h5M9 12h6m-6 4h6",
  support: "M4 13v-2a8 8 0 0 1 16 0v2M4 13H2v6h4v-6H4Zm16 0h2v6h-4v-6h2Zm0 6c0 2-2 3-5 3",
  settings: "M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7.4-3.5 2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1L15 4.5h-4L10.7 7A8 8 0 0 0 9 8L6.6 7l-2 3.5 2 1.5a8 8 0 0 0 0 2l-2 1.5 2 3.5L9 18a8 8 0 0 0 1.7 1l.3 2.5h4l.3-2.5a8 8 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5a8 8 0 0 0 0-2Z"
};
function menuIconAccent(identity) {
  let hash = 0;
  for (const character of identity)
    hash = hash * 31 + character.charCodeAt(0) >>> 0;
  const firstX = 18 + (hash & 3) * 0.65;
  const firstY = 2.5 + (hash >>> 2 & 3) * 0.65;
  const secondX = 18 + (hash >>> 4 & 3) * 0.65;
  const secondY = 5 + (hash >>> 6 & 3) * 0.65;
  return `M${firstX} ${firstY}h.01M${secondX} ${secondY}h.01`;
}
function menuIconPath(title, identity) {
  const value = title.toLowerCase();
  let path;
  if (/register a domain/.test(value))
    path = MENU_ICON_PATHS.domainAdd;
  else if (/transfer your domain/.test(value))
    path = MENU_ICON_PATHS.transfer;
  else if (/bulk domain/.test(value))
    path = MENU_ICON_PATHS.bulkSearch;
  else if (/domain parking/.test(value))
    path = MENU_ICON_PATHS.parking;
  else if (/latest domain extension/.test(value))
    path = MENU_ICON_PATHS.extensions;
  else if (/premium domain/.test(value))
    path = MENU_ICON_PATHS.award;
  else if (/domain whois/.test(value))
    path = MENU_ICON_PATHS.lookup;
  else if (/domain name price/.test(value))
    path = MENU_ICON_PATHS.price;
  else if (/backorder domain/.test(value))
    path = MENU_ICON_PATHS.backorder;
  else if (/support|assist|help|contact|ticket/.test(value))
    path = MENU_ICON_PATHS.support;
  else if (/mail|e-mail|email|dmarc|smtp|exchange|bimi|mime/.test(value))
    path = MENU_ICON_PATHS.mail;
  else if (/backup|storage|database|warehouse|archiv/.test(value))
    path = MENU_ICON_PATHS.database;
  else if (/security|threat|risk|protect|firewall|malware|phishing|ransom|penetration|vapt|soc|siem|edr|privacy|compliance|certificate|ssl/.test(value))
    path = MENU_ICON_PATHS.shield;
  else if (/server|vps|bare metal|colocation|infrastructure|compute|virtual machine|gpu/.test(value))
    path = MENU_ICON_PATHS.server;
  else if (/monitor|analytics|visualization|insight|report|score|assessment/.test(value))
    path = MENU_ICON_PATHS.chart;
  else if (/network|dns|connect|sd-wan|iot|telecom/.test(value))
    path = MENU_ICON_PATHS.network;
  else if (/code|api|developer|software|application|app |wordpress/.test(value))
    path = MENU_ICON_PATHS.code;
  else if (/desktop|workspace|device|remote access/.test(value))
    path = MENU_ICON_PATHS.monitor;
  else if (/partner|team|customer|identity|employee|career|job/.test(value))
    path = MENU_ICON_PATHS.users;
  else if (/blog|case stud|whitepaper|ebook|catalog|document|policy|terms|guide|knowledge|glossary/.test(value))
    path = MENU_ICON_PATHS.file;
  else if (/cloud|azure|aws|google|microsoft 365|tally/.test(value))
    path = MENU_ICON_PATHS.cloud;
  else if (/domain|hosting|website|web |seo|internet/.test(value))
    path = MENU_ICON_PATHS.globe;
  else
    path = MENU_ICON_PATHS.settings;
  return `${path}${menuIconAccent(identity)}`;
}
var DIRECT_LINKS = {
  Insights: "/insights",
  Company: "/about"
};
var MENU_FEATURES = {
  "Web Presence": { title: "AI Website Builder", body: "Describe your business and get a complete website in minutes." },
  Cloud: { title: "Tally on Cloud", body: "Access Tally securely from any device, wherever your team works." },
  "Digital Trust": { title: "Verified Mark Certificate", body: "Display your verified brand logo inside supported inboxes." },
  Security: { title: "DPDPA Platform", body: "Technology and expert support for privacy compliance." },
  Software: { title: "TSplus Suite", body: "Secure remote application access at a practical cost." },
  Solutions: { title: "CA Cloud", body: "A complete cloud workspace built for accounting firms." },
  Insights: { title: "DPDPA Readiness Checklist", body: "Score your privacy readiness using 26 practical checkpoints." },
  Company: { title: "Partner Program", body: "Resell the XcellHost portfolio with recurring margins." }
};
var MENU_FEATURE_CARDS = {
  "Web Presence": [
    {
      label: "Popular hosting",
      title: "WordPress Hosting",
      body: "Fast, managed WordPress hosting with security and expert support.",
      image: "/assets/images/product-intros/reference-b657997eaab0.jpg",
      link: "/wordpress-hosting",
      fresh: true
    },
    {
      label: "Website security",
      title: "Web Security (SiteLock)",
      body: "Protect your website from malware, attacks and online threats.",
      image: "/assets/images/hero-web-security-sitelock-wide.png",
      link: "/web-security-sitelock",
      imagePosition: "72% center"
    }
  ],
  Cloud: [
    {
      label: "Top seller",
      title: "Tally on Cloud",
      body: "Run Tally securely from any device with managed cloud support.",
      image: "/assets/images/hero-tally-on-cloud.png",
      link: "/tally-on-cloud",
      fresh: true
    },
    {
      label: "File collaboration",
      title: "Cloud Drive",
      body: "Secure file sharing, team folders and access from every device.",
      image: "/assets/images/product-intros/reference-54ea5391cf7f.png",
      link: "/cloud-drive"
    }
  ],
  "Digital Trust": [
    {
      label: "SSL certificates",
      title: "GeoTrust SSL",
      body: "Protect websites with trusted encryption and verified identity.",
      image: "/assets/images/product-intros/reference-9a75e56032c8.png",
      link: "/geotrust",
      fresh: true
    },
    {
      label: "Certificate automation",
      title: "ACME Certificates",
      body: "Issue, install and renew Sectigo DV and OV certificates automatically.",
      image: "/assets/images/vendor-partners/23-sectigo.png",
      link: "/acme-enabled-ssl-certificates",
      fresh: true
    },
    {
      label: "Email trust",
      title: "Enterprise DMARC",
      body: "Stop domain spoofing with managed SPF, DKIM and DMARC.",
      image: "/assets/images/product-intros/reference-5728a592b032.png",
      link: "/enterprise-dmarc"
    }
  ],
  Security: [
    {
      label: "Endpoint security",
      title: "Advanced EDR",
      body: "Detect, investigate and respond to advanced endpoint threats.",
      image: "/assets/images/hero-advanced-endpoint-security-edr.svg",
      link: "/advanced-endpoint-security-edr",
      fresh: true
    },
    {
      label: "SMB protection",
      title: "Cyber Security Appliance",
      body: "Cloud-managed firewall and threat protection for growing teams.",
      image: "/assets/images/hero-smb-cyber-security-appliance.png",
      link: "/smb-cyber-security-appliance",
      imagePosition: "center 28%"
    }
  ],
  Software: [
    {
      label: "Remote access",
      title: "TSplus Remote Access",
      body: "Deliver Windows applications and desktops securely from anywhere.",
      image: "/assets/images/menu-tsplus-remote-access.svg",
      link: "/tsplus-remote-access",
      fresh: true
    },
    {
      label: "Cloud analytics",
      title: "Data Analytics",
      body: "Turn operational data into clear, actionable business insight.",
      image: "/assets/images/menu-data-analytics.svg",
      link: "/data-analytics"
    }
  ],
  Solutions: [
    {
      label: "Accounting cloud",
      title: "CA Cloud",
      body: "A complete cloud workspace for accounting and audit practices.",
      image: "/assets/images/menu-ca-cloud.svg",
      link: "/ca-cloud",
      fresh: true
    },
    {
      label: "Industry solution",
      title: "Manufacturing",
      body: "Production-ready cloud, security and continuity for manufacturers.",
      image: "/assets/images/product-intros/reference-b660d1a63828.jpg",
      link: "/manufacturing"
    }
  ],
  Insights: [
    {
      label: "Ebook",
      title: "State of Infrastructure",
      body: "Insights into modern infrastructure priorities and change.",
      image: "/assets/images/menu-blogs.svg",
      link: "https://flipbooks.officeinfra.com/books/wout/#p=1",
      fresh: true
    },
    {
      label: "Ebook",
      title: "State of Security",
      body: "Insights into today's threats, controls and security priorities.",
      image: "/assets/images/menu-blogs.svg",
      link: "https://flipbooks.officeinfra.com/books/zrdc/#p=1"
    }
  ],
  Company: [
    {
      label: "Talk to our team",
      title: "Contact Us",
      body: "Connect with our cloud and security specialists for expert help.",
      image: "/assets/images/contact-call.webp",
      link: "/contact",
      fresh: true
    },
    {
      label: "Meet XcellHost",
      title: "About Us",
      body: "Discover the people and journey behind XcellHost since 1999.",
      image: "/assets/images/menu-our-team.svg",
      link: "/about-us"
    }
  ]
};
var MENU_DESCRIPTIONS = {
  "Cloud Drive \u2014 File Share & Sync": "Share and access files securely across multiple devices \u{1F310}",
  "Managed Azure": "Certified experts for tailored Microsoft Azure management \u{1F310}",
  "Managed Google Cloud (GCP)": "Certified experts for tailored Google Cloud management \u{1F31F}",
  "Managed Oracle Cloud": "Expert management for Oracle Cloud infrastructure \u{1F310}",
  "Managed Intune Services": "Streamline, secure and improve device management \u{1F512}",
  "IoT Certificates Management": "Secure, scalable X.509 certificates for connected devices \u{1F510}",
  "Device Attestation Certificates": "Trusted device identity and Matter ecosystem support \u{1F4A1}",
  "Comodo Code Signing": "Protect software integrity with trusted digital signatures \u{1F50F}",
  "Comodo EV Code Signing": "Higher identity assurance that reduces download warnings \u{1F4DD}",
  "Sectigo Code Signing": "Authenticate software and scripts with trusted signatures \u{1F510}",
  "Sectigo EV Code Signing": "Enhanced publisher verification for trusted downloads \u{1F512}",
  "DigiCert Code Signing": "Verify software authenticity with DigiCert signatures \u{1F510}",
  "DigiCert EV Code Signing": "High-assurance signing with verified publisher identity \u{1F31F}",
  "DigiCert S/MIME Class 1": "Validate the certificate holder\u2019s email address \u{1F4E7}",
  "DigiCert S/MIME (OV)": "Stronger authentication of the certificate holder\u2019s identity \u{1F4AA}",
  "Comodo Personal Authentication": "Personal authentication certificates for secure identity \u{1F464}",
  "Continuous Threat Exposure (CTEM)": "Find and fix vulnerabilities continuously and in real time \u{1F50D}",
  "Managed Detection & Response (MDR)": "Continuous threat monitoring with rapid expert response \u{1F50D}",
  "Third-Party Risk Mgmt (TPRM)": "Identify and manage risks across third-party relationships \u{1F91D}",
  "TSplus Remote Access": "Secure remote access and web application delivery \u{1F5A5}\uFE0F",
  "TSplus Advanced Security": "Protect remote servers against attacks and misuse \u{1F6E1}\uFE0F",
  "TSplus Remote Support": "Secure attended and unattended remote assistance \u{1F527}",
  "TSplus Server Monitoring": "Monitor server health, availability and performance \u{1F4CA}",
  "Acronis Cyber Protect for Enterprise": "Enterprise backup and cybersecurity in one solution \u{1F512}",
  "Data Analytics": "Insightful data analysis for informed decisions \u{1F4CA}",
  "Data Engineering": "Optimized data infrastructure for efficient insights \u{1F6E0}\uFE0F",
  "Data Visualization": "Turn complex data into clear visual insights \u{1F4CA}",
  "Data Warehouse": "Centralized data storage for comprehensive analytics \u{1F3E2}",
  "Data Governance": "Maintain data integrity, security and compliance \u{1F512}",
  "Data Modernization": "Modernize data platforms for cloud-ready operations \u{1F680}",
  "Speed Test \xB7 Looking Glass": "Test network speed, latency and routing visibility \u{1F310}",
  "DMARC Monitoring & Reporting": "Real-time email authentication visibility and analytics \u{1F4CA}",
  "SPF \xB7 DKIM \xB7 DMARC \xB7 BIMI Tools": "Configure and validate essential email trust records \u{1F6E0}\uFE0F",
  "MTA-STS \xB7 TLS-RPT Tools": "Strengthen email transport security and reporting \u{1F6E1}\uFE0F",
  "CSR Generator / Decoder": "Generate and decode certificate signing requests instantly \u{1F50D}",
  "SSL Checker / Converter": "Check SSL installation and convert certificate formats \u{1F310}",
  "Certificate Key Matcher": "Match a certificate with its CSR and private key \u{1F511}",
  "CAA Record Generator": "Control which authorities can issue certificates for your domain \u{1F3E2}",
  "Why No Padlock?": "Find why a browser shows a Not Secure warning \u{1F310}",
  "Higher Education \xB7 University Program": "Technology and support designed for higher education \u{1F393}",
  "Pharmaceutical": "Technology solutions tailored to pharmaceutical operations \u{1F48A}",
  "Construction": "Cloud and digital solutions for construction businesses \u{1F3D7}\uFE0F",
  "Hospitality Cloud": "Cloud solutions for hotels, restaurants and hospitality operations \u{1F4BB}",
  "Logistics": "Reliable digital solutions for modern logistics operations \u{1F69A}",
  "OT Security": "Protect operational technology systems from cyber threats \u{1F4BB}",
  "Blogs": "Technology trends, practical guidance and expert perspectives \u{1F4DD}",
  "Case Studies": "Explore customer challenges, solutions and measurable outcomes \u{1F31F}",
  "Whitepapers": "In-depth research and guidance from industry specialists \u{1F4C4}",
  "Infographics": "Understand complex technology through clear visual stories \u{1F4CA}",
  "Webinars": "Learn from cloud and security experts in practical sessions \u{1F3A5}",
  "Glossary": "Plain-language definitions for cloud and security terms \u{1F4DA}",
  "SMB Catalog \xB7 Enterprise Catalog": "Explore cloud services for growing and enterprise businesses \u{1F4DA}",
  "Acronis Cyber Protect Cloud": "Explore integrated backup and cybersecurity solutions \u{1F4DA}",
  "Microsoft 365 \xB7 Tally on Cloud": "Explore productivity and cloud accounting solutions \u{1F4DA}",
  "Bare Metal \xB7 GPU \xB7 Performance Cloud": "Explore high-performance infrastructure options \u{1F4DA}",
  "Company Profile \xB7 Career Handbook": "Learn about XcellHost, our culture and opportunities \u{1F4DA}",
  "State of Infrastructure": "Insights into modern infrastructure priorities and change \u{1F4D8}",
  "State of Security": "Insights into today\u2019s threats, controls and security priorities \u{1F4D8}",
  "Unified Cyber Defense Platform": "Learn how unified defense simplifies security operations \u{1F6E1}\uFE0F"
};
var CONTENT_LINKS = {
  "Microsoft Copilot ": "/microsoft-copilot",
  "Escalation Matrix": "/escalation-matrix",
  "Partner Matrix": "/partner-matrix",
  "WhatsApp For Business": "/whatsapp-smb",
  "Digicert VMC ": "/digicert-vmc",
  "Digicert CMC": "/digicert-cmc",
  "ACME Certificates": "/acme-enabled-ssl-certificates",
  "Acronis Advanced EDR SLA": "/acronis-advanced-edr-sla",
  "Acronis Advanced MDR SLA": "/acronis-advanced-mdr-sla",
  "Acronis Advanced XDR SLA": "/acronis-advanced-xdr-sla",
  "Acronis Backup Cloud SLA": "/acronis-backup-cloud-sla",
  "Acronis Disaster Recovery (DR) SLA": "/acronis-disaster-recovery-dr-sla",
  "Acronis Remote Monitoring and Management SLA": "/acronis-remote-monitoring-management-rmm-sla",
  "Email Backup for Microsoft 365 SLA": "/email-backup-for-microsoft-365-sla",
  "File Cloud SLA": "/file-cloud-sla",
  "SMB Catalog \xB7 Enterprise Catalog": "https://flipbooks.officeinfra.com/books/SMB-Cloud-Services/",
  "Acronis Cyber Protect Cloud": "https://flipbooks.officeinfra.com/books/Acronis-Cyber-Protect-Cloud-compressed/",
  "Microsoft 365 \xB7 Tally on Cloud": "https://flipbooks.officeinfra.com/books/Microsoft-365-Platfrom/",
  "Bare Metal \xB7 GPU \xB7 Performance Cloud": "https://flipbooks.officeinfra.com/books/guzk/",
  "Company Profile \xB7 Career Handbook": "https://flipbooks.officeinfra.com/books/Career-Handbook-MRmA/",
  "Blogs": "/insights",
  "Blog": "/insights",
  "Insights": "/insights",
  "Case Studies": "/case-studies",
  "Customer Stories": "/case-studies",
  "About XcellHost": "/about",
  "About Us": "/about-us",
  "Our Platform": "/company/our-platform",
  "Watch Tower": "/company/trust-watch",
  "Trust Watch": "/company/trust-watch",
  "Promotion & Offers": "/promotion-and-offers",
  "Certifications & Awards": "/company/certifications-awards",
  "Certifications": "/company/certifications-awards",
  "Awards": "/company/awards",
  "Associations": "/associations",
  "Associations ": "/associations",
  "Data Centers (Global)": "/company/data-centers-global",
  "Vendor Partners": "/company/vendor-partners",
  "Contact Us": "/contact",
  "Contact": "/contact",
  "Partner Signup ": "/company/partner-signup",
  "Partnership Models": "/under-construction/partner-overview",
  "Resources & Services": "/company/resources-services",
  "Partner Advancement": "/company/partner-advancement",
  "Partner Portal": "/company/partner-portal",
  "Partner Guide": "/company/partner-guide",
  "Affiliate Program": "/company/affiliate-program",
  "Careers Overview": "/company/careers-overview",
  "Career Handbook": "/company/career-handbook",
  "Apply For Job": "/company/apply-for-job",
  "Support Overview": "/support-overview",
  "Customer Support": "/support-overview",
  "Submit a Ticket": "/company/submit-a-ticket",
  "Knowledge Base": "/company/knowledge-base",
  "Remote Assist": "/company/remote-assist",
  "Privacy Policy": "/company/privacy-policy",
  "Terms of Services": "/company/terms-of-service",
  "Refund Policy": "/company/refund-policy",
  "Cookie Policy": "/company/privacy-policy",
  "Trust Center": "/company/trust-center",
  "Infrastructure": "/infrastructure",
  "Pricing": "/pricing"
};
function defaultFeatureCards(topLabel, groups, fallbackCards) {
  const fallbackImage = fallbackCards[0]?.image ?? "/assets/images/menu-blogs.svg";
  const fallbackSecondImage = fallbackCards[1]?.image ?? fallbackImage;
  const fallbackPosition = fallbackCards[0]?.imagePosition;
  const fallbackSecondPosition = fallbackCards[1]?.imagePosition ?? fallbackPosition;
  const seeds = groups.flatMap((group) => group.items).slice(0, 2);
  return seeds.map((item, index) => ({
    label: topLabel,
    title: item.title,
    body: item.desc ?? "Explore this service and its key business use cases.",
    image: item.title === "Cloud Backup" ? "/assets/images/menu-cloud-backup.png" : item.title === "Register a Domain Name" ? "/assets/images/menu-register-domain.png" : index === 0 ? fallbackImage : fallbackSecondImage,
    imagePosition: item.title === "Cloud Backup" ? "center 35%" : index === 0 ? fallbackPosition : fallbackSecondPosition,
    link: item.link ?? "#"
  }));
}
var SOLUTION_TAB_ORDER = [
  "By Industry",
  "By Use Case",
  "By Capability",
  "By Vendors",
  "By Technology"
];
function solutionTabRank(label) {
  const rank = SOLUTION_TAB_ORDER.indexOf(label);
  return rank === -1 ? SOLUTION_TAB_ORDER.length : rank;
}
var SMB_SLA_ORDER = [
  "Tally on Cloud SLA",
  "Performance Cloud SLA",
  "File Cloud SLA",
  "Email Backup for Microsoft 365 SLA",
  "Acronis Backup Cloud SLA",
  "Acronis Disaster Recovery (DR) SLA",
  "Acronis Remote Monitoring and Management SLA",
  "WhatsApp Marketing Service SLA",
  "Video Surveillance as a Service (VSaaS) SLA",
  "Acronis Advanced EDR SLA",
  "Acronis Advanced MDR SLA",
  "Acronis Advanced XDR SLA"
];
function smbSlaRank(title) {
  const rank = SMB_SLA_ORDER.indexOf(title);
  return rank === -1 ? SMB_SLA_ORDER.length : rank;
}
var HeaderComponent = class _HeaderComponent {
  doc = inject(DOCUMENT);
  catalog = inject(CatalogService);
  destroyRef = inject(DestroyRef);
  overlay = inject(OverlayService);
  cart = inject(CartService);
  /** The whole menu, pre-resolved once: no per-render slug lookups. */
  tops = MEGA_MENU.map((top) => ({
    label: top.label,
    link: DIRECT_LINKS[top.label] ?? `/category/${slugify(top.label)}`,
    megaId: `mega-${slugify(top.label)}`,
    feature: MENU_FEATURES[top.label],
    featureCards: MENU_FEATURE_CARDS[top.label] ?? [],
    tabs: (top.label === "Solutions" ? [...top.tabs].sort((a, b) => solutionTabRank(a.label) - solutionTabRank(b.label)) : top.tabs).map((tab) => {
      const groups = tab.groups.map((group) => ({
        heading: group.heading,
        items: (tab.label === "SLA'S" ? [...group.items].sort((a, b) => smbSlaRank(a.title) - smbSlaRank(b.title)) : group.items).map((item) => ({
          title: item.title,
          iconPath: menuIconPath(item.title, `${top.label}-${tab.g}-${group.heading ?? ""}-${item.title}`),
          pill: item.pill,
          pillClass: menuPillClass(item.pill),
          desc: this.menuDescription(item.title, item.desc),
          link: this.serviceLink(item.title, top.label, item.href),
          external: this.serviceLink(item.title, top.label, item.href)?.startsWith("http") ?? false
        }))
      }));
      const featureCards = (tab.featureCards ?? []).map((feature) => __spreadValues({}, feature));
      return {
        g: tab.g,
        label: tab.label,
        groups,
        featureCards: featureCards.length ? featureCards : defaultFeatureCards(top.label, groups, MENU_FEATURE_CARDS[top.label] ?? [])
      };
    })
  }));
  /** Which top-level panel is open, if any. */
  openTop = signal(null, ...ngDevMode ? [{ debugName: "openTop" }] : []);
  /** Whether the customer-login menu in the header is open. */
  loginMenuOpen = signal(false, ...ngDevMode ? [{ debugName: "loginMenuOpen" }] : []);
  /** Keeps hover/focus CSS from reopening a menu immediately after navigation. */
  menuSuppressed = signal(false, ...ngDevMode ? [{ debugName: "menuSuppressed" }] : []);
  /** Active tab per top-level menu, seeded from the `on` flag in the data. */
  tabs = signal(Object.fromEntries(MEGA_MENU.map((top) => {
    const visibleTabs = top.label === "Solutions" ? [...top.tabs].sort((a, b) => solutionTabRank(a.label) - solutionTabRank(b.label)) : top.tabs;
    const defaultTab = top.label === "Solutions" ? visibleTabs.find((tab) => tab.label === "By Vendors") : visibleTabs.find((tab) => tab.on);
    return [top.label, (defaultTab ?? visibleTabs[0]).g];
  })), ...ngDevMode ? [{ debugName: "tabs" }] : []);
  mobileOpen = computed(() => this.overlay.isOpen("mobileNav"), ...ngDevMode ? [{ debugName: "mobileOpen" }] : []);
  mobileCategories = signal({}, ...ngDevMode ? [{ debugName: "mobileCategories" }] : []);
  isMobileCategoryOpen(label, category) {
    return this.mobileCategories()[label] === category;
  }
  toggleMobileCategory(label, category) {
    this.mobileCategories.update((current) => __spreadProps(__spreadValues({}, current), {
      [label]: current[label] === category ? null : category
    }));
  }
  constructor() {
    const win = this.doc.defaultView;
    if (win) {
      const onScroll = () => {
        if (this.mobileOpen())
          return;
        if (this.openTop() !== null)
          this.openTop.set(null);
        if (this.loginMenuOpen())
          this.loginMenuOpen.set(false);
      };
      const onDocClick = (e) => {
        const t = e.target;
        if (!(t instanceof Element))
          return;
        if (!t.closest(".xh-main-nav"))
          this.openTop.set(null);
        if (!t.closest(".xh-login-menu"))
          this.loginMenuOpen.set(false);
      };
      const onKeydown = (e) => {
        if (e.key === "Escape")
          this.loginMenuOpen.set(false);
      };
      win.addEventListener("scroll", onScroll, { passive: true });
      const onResize = () => {
        if (win.innerWidth > 1024 && this.mobileOpen())
          this.overlay.close("mobileNav");
      };
      win.addEventListener("resize", onResize, { passive: true });
      this.doc.addEventListener("click", onDocClick);
      this.doc.addEventListener("keydown", onKeydown);
      this.destroyRef.onDestroy(() => {
        win.removeEventListener("scroll", onScroll);
        win.removeEventListener("resize", onResize);
        this.doc.removeEventListener("click", onDocClick);
        this.doc.removeEventListener("keydown", onKeydown);
      });
    }
    effect(() => {
      this.doc.body.classList.toggle("mnav-lock", this.mobileOpen());
    });
    this.destroyRef.onDestroy(() => this.doc.body.classList.remove("mnav-lock"));
  }
  isOn(label, g) {
    return this.tabs()[label] === g;
  }
  activeFeatureCards(top) {
    const activeTab = top.tabs.find((tab) => tab.g === this.tabs()[top.label]);
    return activeTab?.featureCards?.length ? activeTab.featureCards : top.featureCards;
  }
  setTab(label, g) {
    if (this.tabs()[label] === g)
      return;
    this.tabs.update((m2) => __spreadProps(__spreadValues({}, m2), { [label]: g }));
  }
  onTabClick(event, label, g) {
    event.preventDefault();
    this.setTab(label, g);
  }
  /** Clicking a label toggles its panel; the routerLink still navigates. */
  toggleTop(label) {
    this.loginMenuOpen.set(false);
    this.menuSuppressed.set(false);
    this.openTop.update((cur) => cur === label ? null : label);
    const win = this.doc.defaultView;
    if (win && this.mobileOpen() && this.openTop() === label) {
      win.requestAnimationFrame(() => {
        if (!this.mobileOpen() || this.openTop() !== label)
          return;
        const nav = this.doc.querySelector("#xh-main-nav");
        const item = nav?.querySelector(".xh-menu-item.open");
        if (nav && item) {
          nav.scrollTo({ top: nav.scrollTop + item.getBoundingClientRect().top - nav.getBoundingClientRect().top, behavior: "instant" });
        }
      });
    }
  }
  /** Hovering one menu closes any other that was clicked open. */
  onTopEnter(label, event) {
    if (this.doc.defaultView?.matchMedia("(max-width: 1024px), (hover: none)").matches)
      return;
    const hoveredMenu = event.currentTarget;
    const focused = this.doc.activeElement;
    if (hoveredMenu instanceof HTMLElement && focused instanceof HTMLElement && !hoveredMenu.contains(focused)) {
      focused.blur();
    }
    if (this.openTop() !== label)
      this.openTop.set(null);
  }
  releaseMenuSuppression() {
    this.menuSuppressed.set(false);
  }
  /** Following a menu link dismisses whatever was covering the page. */
  onNavigate() {
    this.openTop.set(null);
    this.loginMenuOpen.set(false);
    this.menuSuppressed.set(true);
    const active = this.doc.activeElement;
    if (active instanceof HTMLElement)
      active.blur();
    this.overlay.close("mobileNav");
  }
  toggleMobile() {
    if (this.mobileOpen())
      this.overlay.close("mobileNav");
    else {
      this.openTop.set(null);
      this.overlay.open("mobileNav");
    }
  }
  openSearch() {
    this.loginMenuOpen.set(false);
    this.overlay.open("search");
  }
  toggleLoginMenu(event) {
    event.preventDefault();
    this.openTop.set(null);
    this.loginMenuOpen.update((open) => !open);
  }
  /**
   * Where a menu link goes.
   *
   * Service menus resolve to a service page, preferring the directory's
   * spelling so the slug matches. The Insights and Company menus list editorial
   * and corporate pages that do not exist yet — the original site left those as
   * inert `href="#"`, so anything without a known destination stays inert
   * rather than routing to a page that would 404.
   */
  serviceLink(title, menu, explicitLink) {
    if (explicitLink)
      return explicitLink;
    if (CONTENT_LINKS[title])
      return CONTENT_LINKS[title];
    if (menu === "Insights" || menu === "Company")
      return `/under-construction/${slugify(title)}`;
    const entry = this.catalog.findInDirectory(title);
    const slug = slugify(entry ? entry.name : title);
    return this.catalog.entryBySlug(slug) ? `/${slug}` : `/under-construction/${slugify(title)}`;
  }
  /** Every visible menu card gets concise supporting copy. */
  menuDescription(title, description) {
    const resolved = description ?? (this.catalog.findInDirectory(title)?.desc ?? MENU_DESCRIPTIONS[title] ?? `Explore ${title} services, features and solutions.`);
    return resolved.replace(/\s*[\p{Extended_Pictographic}\uFE0F\u200D]+$/gu, "").trim();
  }
  static \u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["xh-header"]], hostAttrs: [2, "display", "contents"], decls: 105, vars: 13, consts: [["partnerLoginLink", "routerLinkActive"], ["vendorLoginLink", "routerLinkActive"], ["employeeLoginLink", "routerLinkActive"], ["categoryLinks", ""], [1, "xh-header"], [1, "xh-nav-wrap"], ["routerLink", "/", "aria-label", "XcellHost home", 1, "xh-brand", 3, "click"], ["src", "/assets/images/xcellhost-logo.png", "alt", "XcellHost \u2014 Global Reach \xB7 Personal Touch"], ["type", "button", "aria-label", "Toggle navigation", "aria-controls", "xh-main-nav", 1, "xh-mobile-toggle", 3, "click"], ["id", "xh-main-nav", "aria-label", "Primary navigation", 1, "xh-main-nav", 3, "mouseleave", "focusin"], [1, "xh-menu-item", 3, "open"], [1, "xh-actions"], [1, "xh-search-action"], ["type", "button", "aria-label", "Search services", 1, "xh-search", 3, "click"], ["width", "17", "height", "17", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2.2", "stroke-linecap", "round"], ["cx", "11", "cy", "11", "r", "7"], ["d", "M20 20l-3.5-3.5"], ["aria-hidden", "true", 1, "xh-support-tooltip"], [1, "xh-support-action"], ["routerLink", "/support-overview", "aria-label", "Support", 1, "xh-support-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["d", "M4 13v-1a8 8 0 0 1 16 0v1"], ["x", "3", "y", "12", "width", "4", "height", "7", "rx", "2"], ["x", "17", "y", "12", "width", "4", "height", "7", "rx", "2"], ["d", "M19 19a3 3 0 0 1-3 3h-3"], ["aria-label", "Contact XcellHost", 1, "xh-contact-dropdown"], [1, "xh-contact-row"], ["aria-hidden", "true", 1, "material-symbols-outlined", "xh-contact-sales"], [1, "xh-contact-details"], ["href", "tel:+912267111555"], ["href", "mailto:sales@xcellhost.cloud"], ["aria-hidden", "true", 1, "material-symbols-outlined", "xh-contact-support"], ["href", "mailto:support@xcellhost.cloud"], ["aria-hidden", "true", 1, "material-symbols-outlined", "xh-contact-billing"], ["href", "mailto:billing@xcellhost.cloud"], ["routerLink", "/support-overview", 1, "xh-contact-support-link", 3, "click"], ["aria-hidden", "true"], [1, "xh-login-menu"], ["aria-label", "Login", "type", "button", "aria-haspopup", "menu", "aria-controls", "xh-customer-login-menu", 1, "xh-login", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "aria-hidden", "true"], ["d", "M12 3v9M6.3 5.7a8 8 0 1 0 11.4 0"], ["aria-hidden", "true", 1, "xh-login-tooltip"], ["id", "xh-customer-login-menu", "role", "menu", "aria-label", "Login portals", 1, "xh-login-dropdown"], ["href", "https://billing.zohosecure.in/portal/xcellhostcloudservicespvtltd/signin", "target", "_blank", "rel", "noopener noreferrer", "role", "menuitem", 3, "click"], [1, "xh-login-option"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["routerLink", "/partner-login", "routerLinkActive", "selected", "role", "menuitem", 3, "click"], ["aria-hidden", "true", 1, "xh-login-check"], ["routerLink", "/vendor-login", "routerLinkActive", "selected", "role", "menuitem", 3, "click"], ["routerLink", "/employee-login", "routerLinkActive", "selected", "role", "menuitem", 3, "click"], ["routerLink", "/signup", "aria-label", "Sign Up", "title", "Sign Up", 1, "xh-signup-icon", 3, "click"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true"], ["cx", "9", "cy", "8", "r", "3"], ["d", "M3 21v-2a6 6 0 0 1 12 0v2M19 8v6M16 11h6"], [1, "xh-menu-item", 3, "mouseenter"], ["type", "button", 1, "xh-menu-link", 3, "click"], [1, "xh-mega", 3, "id"], [1, "xh-mobile-categories"], [1, "xh-mobile-category"], [1, "xh-tabs"], [1, "xh-panels"], [1, "xh-panel", 3, "active"], ["aria-label", "Explore Web Presence services", 1, "xh-feature-stack"], [1, "xh-feature"], [1, "xh-menu-footer"], ["routerLink", "/contact", 3, "click"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7L8.7 10.5a16 16 0 0 0 4.8 4.8l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 2.7 3Z"], ["routerLink", "/about-us", 3, "click"], ["x", "5", "y", "3", "width", "14", "height", "18", "rx", "2"], ["cx", "12", "cy", "9", "r", "2"], ["d", "M8 17v-1a4 4 0 0 1 8 0v1M9 3V1m6 2V1"], ["routerLink", "/insights", 3, "click"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "2"], ["d", "M3 7h18M7 11h4v6H7zM14 11h3m-3 3h3m-3 3h3"], ["type", "button", 3, "click"], ["d", "M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-3 3V11.5A8.5 8.5 0 0 1 9.5 3H13M18 2l1.2 3.8L23 7l-3.8 1.2L18 12l-1.2-3.8L13 7l3.8-1.2L18 2ZM6 12h8m-8 4h5"], ["d", "M21 11.5a8.5 8.5 0 0 1-8.5 8.5H7l-4 3V11.5a8.5 8.5 0 0 1 17 0Z"], ["d", "M8 10h8m-8 4h5"], ["routerLink", "/compare-providers", 3, "click"], ["d", "M12 3v18M8 6H3v12h5M16 6h5v12h-5M5 9l3 3-3 3m14-6-3 3 3 3"], ["routerLink", "/compare-products", 3, "click"], ["x", "3", "y", "4", "width", "7", "height", "16", "rx", "2"], ["x", "14", "y", "4", "width", "7", "height", "16", "rx", "2"], ["d", "M5 9h3m-3 4h3m8-4h3m-3 4h3"], ["routerLink", "/marketplace", 3, "click"], ["d", "M3 9l2-6h14l2 6M3 9h18v3a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V9ZM5 15v6h14v-6M9 21v-5h6v5"], ["routerLink", "/cybersecurity-frameworks", 1, "xh-framework-label", 3, "click"], ["d", "M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"], ["d", "m8 12 3 3 5-6"], ["role", "group", "aria-label", "Social media", 1, "xh-menu-social"], ["href", "https://www.linkedin.com/in/samirjhaveri/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "LinkedIn", "title", "LinkedIn", 2, "background", "#0A66C2"], ["href", "https://www.youtube.com/@XcellHostCloudServices", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "YouTube", "title", "YouTube", 2, "background", "#FF0000"], ["href", "https://www.instagram.com/xcellhost_cloud/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Instagram", "title", "Instagram", 2, "background", "linear-gradient(45deg,#F09433,#DC2743,#BC1888)"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1"], ["href", "https://in.pinterest.com/XcellHostCloud99/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Pinterest", "title", "Pinterest", 2, "background", "#E60023"], ["href", "https://www.facebook.com/XcellHost.Cloud.Pvt.Ltd", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Facebook", "title", "Facebook", 2, "background", "#1877F2"], ["href", "https://x.com/xcellcloud", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "X", "title", "X", 2, "background", "#000"], ["aria-label", "Reddit (link coming soon)", "title", "Reddit \u2014 coming soon", 2, "background", "#FF4500"], [1, "xh-link-group"], [1, "xh-link-grid"], ["href", "#", "aria-disabled", "true", 3, "class"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href", "class"], [3, "routerLink", "class"], ["target", "_blank", "rel", "noopener noreferrer", 3, "click", "href"], ["aria-hidden", "true", 1, "xh-item-icon"], ["viewBox", "0 0 24 24"], [1, "xh-item-copy"], [1, "xh-item-heading"], [3, "class"], [3, "click", "routerLink"], ["href", "#", "aria-disabled", "true", 3, "click"], ["type", "button", 1, "xh-mobile-category-toggle", 3, "id"], [1, "xh-mobile-category-panel", 3, "id"], ["type", "button", 1, "xh-mobile-category-toggle", 3, "click", "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "xh-tab", 3, "active"], ["type", "button", 1, "xh-tab", 3, "mouseover", "click"], [1, "xh-panel"], [1, "xh-feature-card", 3, "href"], [1, "xh-feature-card", 3, "click", "href"], [1, "xh-feature-ribbon"], [1, "xh-feature-media"], ["viewBox", "32 26 1310 830", "width", "1310", "height", "830", "role", "img", 1, "xh-menu-illustration"], [3, "src", "alt", "object-position"], [1, "xh-feature-copy"], ["x", "0", "y", "0", "width", "1374", "height", "1145"], [3, "src", "alt"]], template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "header", 4)(1, "div", 5)(2, "a", 6);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavigate());
      });
      \u0275\u0275element(3, "img", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 8);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleMobile());
      });
      \u0275\u0275element(5, "span")(6, "span")(7, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nav", 9);
      \u0275\u0275listener("mouseleave", function HeaderComponent_Template_nav_mouseleave_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.releaseMenuSuppression());
      })("focusin", function HeaderComponent_Template_nav_focusin_8_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.releaseMenuSuppression());
      });
      \u0275\u0275repeaterCreate(9, HeaderComponent_For_10_Template, 90, 9, "div", 10, _forTrack08);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "button", 13);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openSearch());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 14);
      \u0275\u0275element(15, "circle", 15)(16, "path", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "span", 17);
      \u0275\u0275text(18, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 18)(20, "a", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(21, "svg", 20);
      \u0275\u0275element(22, "path", 21)(23, "rect", 22)(24, "rect", 23)(25, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "div", 25)(27, "div", 26)(28, "span", 27);
      \u0275\u0275text(29, "monitoring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div")(31, "strong");
      \u0275\u0275text(32, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 28)(34, "a", 29);
      \u0275\u0275text(35, "+91 22 6711 1555");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 30);
      \u0275\u0275text(37, "sales@xcellhost.cloud");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "div", 26)(39, "span", 31);
      \u0275\u0275text(40, "support_agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div")(42, "strong");
      \u0275\u0275text(43, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 28)(45, "a", 29);
      \u0275\u0275text(46, "+91 22 6711 1555");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "a", 32);
      \u0275\u0275text(48, "support@xcellhost.cloud");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "div", 26)(50, "span", 33);
      \u0275\u0275text(51, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div")(53, "strong");
      \u0275\u0275text(54, "Billing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 28)(56, "a", 29);
      \u0275\u0275text(57, "+91 22 6711 1555");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "a", 34);
      \u0275\u0275text(59, "billing@xcellhost.cloud");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "a", 35);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_60_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavigate());
      });
      \u0275\u0275text(61, "Visit Support Overview ");
      \u0275\u0275elementStart(62, "span", 36);
      \u0275\u0275text(63, "\u2192");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(64, "div", 37)(65, "button", 38);
      \u0275\u0275listener("click", function HeaderComponent_Template_button_click_65_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleLoginMenu($event));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(66, "svg", 39);
      \u0275\u0275element(67, "path", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(68, "span", 41);
      \u0275\u0275text(69, "Login");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 42)(71, "a", 43);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_71_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavigate());
      });
      \u0275\u0275elementStart(72, "span", 44)(73, "span", 45);
      \u0275\u0275text(74, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Customer Login");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "a", 46, 0);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_77_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavigate());
      });
      \u0275\u0275elementStart(79, "span", 44)(80, "span", 45);
      \u0275\u0275text(81, "handshake");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "Partner Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(84, HeaderComponent_Conditional_84_Template, 2, 0, "b", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "a", 48, 1);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_85_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavigate());
      });
      \u0275\u0275elementStart(87, "span", 44)(88, "span", 45);
      \u0275\u0275text(89, "storefront");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "span");
      \u0275\u0275text(91, "Vendor Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(92, HeaderComponent_Conditional_92_Template, 2, 0, "b", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "a", 49, 2);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_93_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavigate());
      });
      \u0275\u0275elementStart(95, "span", 44)(96, "span", 45);
      \u0275\u0275text(97, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span");
      \u0275\u0275text(99, "Employee Login");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(100, HeaderComponent_Conditional_100_Template, 2, 0, "b", 47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "a", 50);
      \u0275\u0275listener("click", function HeaderComponent_Template_a_click_101_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onNavigate());
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(102, "svg", 51);
      \u0275\u0275element(103, "circle", 52)(104, "path", 53);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const partnerLoginLink_r20 = \u0275\u0275reference(78);
      const vendorLoginLink_r21 = \u0275\u0275reference(86);
      const employeeLoginLink_r22 = \u0275\u0275reference(94);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("open", ctx.mobileOpen());
      \u0275\u0275attribute("aria-expanded", ctx.mobileOpen());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("mobile-open", ctx.mobileOpen())("suppress-menu", ctx.menuSuppressed());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.tops);
      \u0275\u0275advance(55);
      \u0275\u0275classProp("open", ctx.loginMenuOpen());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-expanded", ctx.loginMenuOpen());
      \u0275\u0275advance(19);
      \u0275\u0275conditional(partnerLoginLink_r20.isActive ? 84 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(vendorLoginLink_r21.isActive ? 92 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(employeeLoginLink_r22.isActive ? 100 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, NgTemplateOutlet], styles: ['\n\n[_nghost-%COMP%] {\n  --xh-blue: #1769ff;\n  --xh-dark: #0b1736;\n  --xh-muted: #667085;\n  --xh-line: #e7ebf3;\n  position: relative;\n  z-index: 100;\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.xh-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #fff;\n  border-bottom: 1px solid var(--xh-line);\n  box-shadow: 0 8px 24px rgba(18, 42, 90, .06);\n}\n.xh-nav-wrap[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  min-height: 78px;\n  margin: auto;\n  padding: 0 24px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n}\n.xh-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 0 0 170px;\n}\n.xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 154px;\n  height: auto;\n}\n.xh-main-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  gap: 2px;\n  flex: 1;\n  align-self: stretch;\n}\n.xh-menu-item[_ngcontent-%COMP%] {\n  position: static;\n  display: flex;\n  align-items: center;\n}\n.xh-menu-link[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: #263552;\n  font: 600 13px/1 var(--body, Arial, sans-serif);\n  padding: 30px 10px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.xh-menu-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: 3px;\n  color: #8290a8;\n  transition: transform .2s;\n}\n.xh-menu-item[_ngcontent-%COMP%]:hover    > .xh-menu-link[_ngcontent-%COMP%], \n.xh-menu-item.open[_ngcontent-%COMP%]    > .xh-menu-link[_ngcontent-%COMP%] {\n  color: var(--xh-blue);\n}\n.xh-menu-item[_ngcontent-%COMP%]:hover    > .xh-menu-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.xh-menu-item.open[_ngcontent-%COMP%]    > .xh-menu-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: rotate(180deg);\n}\n.xh-mega[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 24px;\n  right: 24px;\n  top: 100%;\n  background: #fff;\n  border: 1px solid #e4e9f2;\n  border-radius: 0 0 18px 18px;\n  box-shadow: 0 22px 60px rgba(16, 34, 70, .18);\n  display: grid;\n  grid-template-columns: 190px minmax(0, 1fr) 230px;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transform: translateY(-6px);\n  transition:\n    opacity .2s ease,\n    transform .22s ease,\n    visibility .2s;\n  overflow: hidden;\n}\n.xh-main-nav[_ngcontent-%COMP%]:not(.suppress-menu)   .xh-menu-item[_ngcontent-%COMP%]:hover    > .xh-mega[_ngcontent-%COMP%], \n.xh-main-nav[_ngcontent-%COMP%]:not(.suppress-menu)   .xh-menu-item[_ngcontent-%COMP%]:focus-within    > .xh-mega[_ngcontent-%COMP%], \n.xh-menu-item.open[_ngcontent-%COMP%]    > .xh-mega[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: none;\n}\n.xh-menu-footer[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  overflow-x: auto;\n  border-top: 1px solid var(--xh-line);\n  background: #fff;\n  scrollbar-width: thin;\n}\n.xh-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.xh-menu-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.xh-menu-footer[_ngcontent-%COMP%]   .xh-framework-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 0;\n  color: var(--navy);\n  font-size: 12px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.xh-menu-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  font-family: inherit;\n  cursor: pointer;\n}\n.xh-menu-footer[_ngcontent-%COMP%]   .xh-framework-label[_ngcontent-%COMP%] {\n  flex-basis: auto;\n}\n.xh-menu-footer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  fill: none;\n  stroke: var(--blue);\n  stroke-width: 1.3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.xh-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.xh-menu-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n}\n.xh-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible, \n.xh-menu-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: 4px;\n  border-radius: 4px;\n}\n@media (max-width: 600px) {\n  .xh-menu-footer[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n    padding: 14px 18px;\n  }\n  .xh-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .xh-menu-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .xh-menu-footer[_ngcontent-%COMP%]   .xh-framework-label[_ngcontent-%COMP%] {\n    font-size: 12px;\n    gap: 7px;\n  }\n  .xh-menu-footer[_ngcontent-%COMP%]   .xh-framework-label[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n  .xh-menu-footer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 24px;\n    height: 24px;\n  }\n}\n.xh-menu-social[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 0 0 auto;\n  flex-wrap: nowrap;\n  gap: 5px;\n  margin-left: auto;\n}\n.xh-menu-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.xh-menu-social[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border-radius: 50%;\n  color: #fff;\n  font: 700 14px Arial, sans-serif;\n}\n.xh-menu-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  filter: brightness(.9);\n}\n.xh-menu-social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  stroke: currentColor;\n  stroke-width: 2;\n}\n@media (min-width: 601px) and (max-width: 1200px) {\n  .xh-menu-footer[_ngcontent-%COMP%] {\n    gap: 9px;\n    padding-inline: 12px;\n  }\n  .xh-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .xh-menu-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .xh-menu-footer[_ngcontent-%COMP%]   .xh-framework-label[_ngcontent-%COMP%] {\n    gap: 5px;\n    font-size: 10.5px;\n  }\n  .xh-menu-footer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 13px;\n    height: 13px;\n  }\n  .xh-menu-social[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .xh-menu-social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n   .xh-menu-social[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 600px) {\n  .xh-menu-social[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    width: 100%;\n    margin-top: 6px;\n  }\n}\n.xh-tabs[_ngcontent-%COMP%] {\n  background: #f6f8fc;\n  border-right: 1px solid var(--xh-line);\n  padding: 20px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.xh-tab[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  text-align: left;\n  padding: 9px 10px;\n  border-radius: 9px;\n  color: #42516d;\n  font: 600 13px/1.25 var(--body, Arial, sans-serif);\n  cursor: pointer;\n}\n.xh-tab[_ngcontent-%COMP%]:hover, \n.xh-tab.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: var(--xh-blue);\n  box-shadow: 0 5px 16px rgba(28, 62, 125, .08);\n}\n.xh-panels[_ngcontent-%COMP%] {\n  padding: 20px;\n  overflow: auto;\n  max-height: 560px;\n}\n.xh-panel[_ngcontent-%COMP%] {\n  display: none;\n  padding: 0;\n}\n.xh-panel.active[_ngcontent-%COMP%] {\n  display: block;\n}\n.xh-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: var(--xh-dark);\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 1.2;\n}\n.xh-link-grid[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.xh-link-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  min-width: 0;\n  display: flex;\n}\n.xh-link-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  width: 100%;\n  min-height: 92px;\n  color: #3a4863;\n  padding: 14px;\n  border: 1px solid #e3e9f2;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(17, 45, 89, .035);\n  font-size: 13px;\n  line-height: 1.3;\n  text-decoration: none;\n  transition:\n    border-color .18s,\n    box-shadow .18s,\n    color .18s,\n    transform .18s;\n}\n.xh-item-icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 36px;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid #d9e4ec;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f3f7ff);\n  color: var(--xh-blue);\n  transition:\n    border-color .18s,\n    background .18s,\n    transform .18s;\n}\n.xh-item-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.45;\n}\n.xh-item-copy[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.xh-item-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.xh-item-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  color: var(--xh-dark);\n  font-size: 12px;\n  font-weight: 800;\n  line-height: 1.25;\n}\n.xh-link-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: #b8d1ff;\n  color: var(--xh-blue);\n  box-shadow: 0 10px 22px rgba(23, 105, 255, .1);\n  transform: translateY(-2px);\n}\n.xh-link-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .xh-item-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--xh-blue);\n}\n.xh-link-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .xh-item-icon[_ngcontent-%COMP%] {\n  border-color: #9fbeff;\n  background: #edf4ff;\n  transform: translateY(-1px);\n}\n.xh-link-grid[_ngcontent-%COMP%]   a[aria-disabled=true][_ngcontent-%COMP%] {\n  cursor: default;\n}\n.xh-link-grid[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border: 1px solid #f2bd49;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff3b7,\n      #ffc94d);\n  color: #704000;\n  font-size: 9px;\n  font-style: normal;\n  font-weight: 800;\n  letter-spacing: .025em;\n  line-height: 1;\n  white-space: nowrap;\n  box-shadow: 0 3px 8px rgba(194, 118, 0, .2);\n}\n.xh-link-grid[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]::before {\n  content: none;\n}\n.xh-link-grid[_ngcontent-%COMP%]   em.is-blue[_ngcontent-%COMP%] {\n  color: #075dcc;\n  background: #dbeafe;\n  border: 1px solid #b8d5ff;\n  box-shadow: 0 3px 8px rgba(18, 102, 220, .12);\n  font-weight: 900;\n}\n.xh-link-grid.xh-link-grid-two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.xh-link-grid[_ngcontent-%COMP%]   em.is-blue[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.xh-link-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n  color: var(--xh-muted);\n  font-size: 11.5px;\n  line-height: 1.45;\n}\n.xh-feature[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      150deg,\n      #0d2b64,\n      #1568dc);\n  color: #fff;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.xh-feature[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  background: rgba(255, 255, 255, .15);\n  padding: 5px 8px;\n  border-radius: 99px;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: .8px;\n}\n.xh-feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 21px;\n  margin: 15px 0 9px;\n}\n.xh-feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.55;\n  color: #dfeaff;\n  margin: 0 0 18px;\n}\n.xh-feature[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 13px;\n  text-decoration: none;\n}\n.xh-feature-stack[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: center;\n  gap: 14px;\n  padding: 18px;\n  border-left: 1px solid #dfe7f2;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fbff,\n      #eef7f5);\n}\n.xh-feature-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border: 1px solid #b9d6ce;\n  border-radius: 14px;\n  background: #fff;\n  color: var(--xh-dark);\n  text-decoration: none;\n  box-shadow: 0 8px 22px rgba(15, 52, 97, .08);\n  transition:\n    transform .2s ease,\n    border-color .2s ease,\n    box-shadow .2s ease;\n}\n.xh-feature-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--xh-blue);\n  box-shadow: 0 13px 28px rgba(23, 105, 255, .14);\n  transform: translateY(-2px);\n}\n.xh-feature-media[_ngcontent-%COMP%] {\n  display: block;\n  height: 88px;\n  overflow: hidden;\n  border-bottom: 1px solid #e5ebf4;\n  background:\n    linear-gradient(\n      135deg,\n      #eaf2ff,\n      #effbf8);\n}\n.xh-feature-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.xh-feature-media.xh-feature-media-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  aspect-ratio: 1310 / 830;\n  background: #f4f9ff;\n}\n.xh-feature-media-illustration[_ngcontent-%COMP%]   .xh-menu-illustration[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  max-height: none;\n  aspect-ratio: 1310 / 830;\n  overflow: hidden;\n}\n.xh-feature-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 13px 14px 14px;\n}\n.xh-feature-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 4px 7px;\n  border-radius: 6px;\n  background: #eaf2ff;\n  color: var(--xh-blue);\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.xh-feature-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 9px;\n  color: var(--xh-dark);\n  font-size: 14px;\n  line-height: 1.3;\n}\n.xh-feature-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: var(--xh-muted);\n  font-size: 11px;\n  line-height: 1.45;\n}\n.xh-feature-copy[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: var(--xh-blue);\n  font-size: 12px;\n}\n.xh-feature-copy[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  transition: transform .2s ease;\n}\n.xh-feature-card[_ngcontent-%COMP%]:hover   .xh-feature-copy[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: translateX(3px);\n}\n.xh-feature-ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 12px;\n  left: -29px;\n  width: 106px;\n  padding: 5px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #ff493e,\n      #dc2626);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: .08em;\n  text-align: center;\n  text-transform: uppercase;\n  transform: rotate(-45deg);\n  box-shadow: 0 4px 10px rgba(220, 38, 38, .25);\n}\n.xh-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  align-items: center;\n}\n.xh-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 10px 15px;\n  border-radius: 9px;\n  font-weight: 700;\n  font-size: 12px;\n  text-decoration: none;\n}\n.xh-login-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.xh-login[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 15px;\n  border: 1px solid #cfd8e8;\n  border-radius: 9px;\n  background: #fff;\n  color: #263552;\n  font: 700 12px/1 var(--body, Arial, sans-serif);\n  cursor: pointer;\n}\n.xh-login[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #8290a8;\n  transition: transform .2s ease;\n}\n.xh-login[_ngcontent-%COMP%]:hover, \n.xh-login-menu.open[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%] {\n  border-color: var(--xh-blue);\n  color: var(--xh-blue);\n}\n.xh-login-menu.open[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.xh-login-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 120;\n  top: calc(100% + 12px);\n  right: 0;\n  width: 220px;\n  padding: 6px;\n  border: 1px solid #dfe6f1;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: 0 18px 45px rgba(16, 34, 70, .2);\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transform: translateY(-6px);\n  transition:\n    opacity .18s ease,\n    transform .18s ease,\n    visibility .18s;\n}\n.xh-login-menu.open[_ngcontent-%COMP%]   .xh-login-dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: none;\n}\n.xh-login-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.xh-login-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  padding: 11px 12px;\n  border: 0;\n  border-radius: 10px;\n  background: transparent;\n  color: #10264a;\n  font-family: var(--body, Arial, sans-serif);\n  font-size: 13px;\n  font-weight: 600;\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n}\n.xh-login-option[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.xh-login-option[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--xh-blue);\n  font-variation-settings: "FILL" 0, "wght" 300;\n}\n.xh-login-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.xh-login-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.xh-login-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible, \n.xh-login-dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 0;\n  background: #f1f6ff;\n  color: var(--xh-blue);\n}\n.xh-login-dropdown[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background: #edf3fc;\n  color: var(--xh-blue);\n  font-weight: 700;\n}\n.xh-login-check[_ngcontent-%COMP%] {\n  color: var(--xh-blue);\n  font-size: 17px;\n  font-weight: 500;\n}\n.xh-trial[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1769ff,\n      #0c4bd9);\n  color: #fff;\n  box-shadow: 0 8px 18px rgba(23, 105, 255, .25);\n}\n.xh-blog[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 1px solid #1769ff;\n  border-radius: 11px;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #2a7bff,\n      #0f5fe8);\n  box-shadow: 0 8px 18px rgba(23, 105, 255, .22);\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    filter .2s;\n}\n.xh-blog[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  flex: none;\n}\n.xh-blog[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 11px 24px rgba(23, 105, 255, .28);\n  filter: saturate(1.05);\n}\n.xh-theme-toggle[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  padding: 0;\n  border: 1px solid #1769ff;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #2a7bff,\n      #0f5fe8);\n  color: #fff;\n  box-shadow: 0 8px 18px rgba(23, 105, 255, .22);\n  cursor: pointer;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    filter .2s;\n}\n.xh-theme-toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.xh-theme-toggle[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 11px 24px rgba(23, 105, 255, .28);\n  filter: saturate(1.05);\n}\n.xh-theme-toggle[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(23, 105, 255, .3);\n  outline-offset: 3px;\n}\n.xh-search[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  border: 1px solid #dce3ef;\n  border-radius: 50%;\n  color: #263552;\n  background: #fff;\n  cursor: pointer;\n}\n.xh-search[_ngcontent-%COMP%]:hover {\n  color: var(--xh-blue);\n  border-color: var(--xh-blue);\n}\n.xh-cart[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  padding: 0;\n  border: 1px solid #dce3ef;\n  border-radius: 9px;\n  color: #263552;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    color .2s,\n    border-color .2s,\n    transform .2s;\n}\n.xh-cart[_ngcontent-%COMP%]:hover {\n  color: var(--xh-blue);\n  border-color: var(--xh-blue);\n  transform: translateY(-1px);\n}\n.xh-cart-count[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  right: -5px;\n  display: grid;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  place-items: center;\n  border: 2px solid #fff;\n  border-radius: 99px;\n  background: #ff7b12;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 800;\n  line-height: 1;\n  box-shadow: 0 3px 8px rgba(255, 123, 18, .3);\n}\n.xh-mobile-toggle[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: auto;\n  width: 42px;\n  height: 42px;\n  border: 1px solid #dce3ef;\n  background: #fff;\n  border-radius: 9px;\n  padding: 10px;\n  cursor: pointer;\n}\n.xh-mobile-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 2px;\n  background: #17233f;\n  margin: 5px 0;\n  transition: transform .2s, opacity .2s;\n}\n.xh-mobile-toggle.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.xh-mobile-toggle.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.xh-mobile-toggle.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n@media (max-width: 1400px) {\n  .xh-menu-link[_ngcontent-%COMP%] {\n    padding-left: 6px;\n    padding-right: 6px;\n    font-size: 12px;\n  }\n  .xh-brand[_ngcontent-%COMP%] {\n    flex-basis: 145px;\n  }\n  .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 140px;\n  }\n  .xh-login-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 1024px) {\n  .xh-nav-wrap[_ngcontent-%COMP%] {\n    min-height: 70px;\n    flex-wrap: wrap;\n    padding: 0 16px;\n  }\n  .xh-brand[_ngcontent-%COMP%] {\n    padding: 14px 0;\n  }\n  .xh-mobile-toggle[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .xh-actions[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .xh-actions[_ngcontent-%COMP%]   .xh-login-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .xh-actions[_ngcontent-%COMP%]   .xh-trial[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-main-nav[_ngcontent-%COMP%] {\n    display: none;\n    order: 3;\n    flex: 0 0 calc(100% + 32px);\n    margin: 0 -16px;\n    flex-direction: column;\n    align-items: stretch;\n    background: #fff;\n    border-top: 1px solid var(--xh-line);\n    max-height: 75vh;\n    overflow: auto;\n  }\n  .xh-main-nav.mobile-open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .xh-menu-item[_ngcontent-%COMP%] {\n    display: block;\n    border-bottom: 1px solid #edf0f6;\n  }\n  .xh-menu-link[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: left;\n    display: flex;\n    justify-content: space-between;\n    padding: 17px 20px;\n    font-size: 14px;\n  }\n  .xh-mega[_ngcontent-%COMP%] {\n    position: static;\n    display: none;\n    opacity: 1;\n    visibility: visible;\n    pointer-events: auto;\n    transform: none;\n    border: 0;\n    border-radius: 0;\n    box-shadow: none;\n    grid-template-columns: 1fr;\n    background: #fbfcff;\n  }\n  .xh-menu-item[_ngcontent-%COMP%]:hover    > .xh-mega[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-menu-item.open[_ngcontent-%COMP%]    > .xh-mega[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .xh-tabs[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--xh-line);\n    padding: 10px 14px;\n    flex-direction: row;\n    overflow-x: auto;\n  }\n  .xh-tab[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    padding: 10px;\n  }\n  .xh-panels[_ngcontent-%COMP%] {\n    padding: 18px;\n    max-height: none;\n  }\n  .xh-feature[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-link-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .xh-link-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 9px 7px;\n  }\n}\n@media (max-width: 480px) {\n  .xh-nav-wrap[_ngcontent-%COMP%] {\n    gap: 6px;\n  }\n  .xh-brand[_ngcontent-%COMP%] {\n    flex: 0 1 105px;\n  }\n  .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 105px;\n  }\n  .xh-actions[_ngcontent-%COMP%] {\n    gap: 5px;\n  }\n  .xh-blog[_ngcontent-%COMP%], \n   .xh-theme-toggle[_ngcontent-%COMP%], \n   .xh-search[_ngcontent-%COMP%], \n   .xh-cart[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-mega[_ngcontent-%COMP%], \n   .xh-menu-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n   .xh-link-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.xh-login-menu[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  min-width: 38px;\n  padding: 0;\n  border: 1px solid #cfd8e8;\n  border-radius: 50%;\n  background: #fff;\n  color: #062640;\n  box-shadow: none;\n  transition: box-shadow .2s ease, background .2s ease;\n}\n.xh-login-menu[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 18px;\n  height: 18px;\n}\n.xh-login-menu[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%]:hover, \n.xh-login-menu.open[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #aab7ca;\n  color: #062640;\n  box-shadow: 0 2px 8px rgba(16, 34, 70, .1);\n}\n.xh-login-menu[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #075a89;\n  outline-offset: 6px;\n}\n.xh-login-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: calc(100% + 8px);\n  transform: translateX(-50%);\n  padding: 5px 12px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid #cfd8e8;\n  box-shadow: 0 2px 8px rgba(16, 34, 70, .1);\n  color: #062640;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.3;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 2;\n}\n.xh-login-tooltip[_ngcontent-%COMP%] {\n  display: none;\n}\n.xh-login-menu[_ngcontent-%COMP%]:not(.open):hover   .xh-login-dropdown[_ngcontent-%COMP%], \n.xh-login-menu[_ngcontent-%COMP%]:not(.open):focus-within   .xh-login-dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: none;\n}\n.xh-login-menu[_ngcontent-%COMP%]:not(.open)::after {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 220px;\n  height: 12px;\n  content: "";\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-login-menu[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n.xh-support-action[_ngcontent-%COMP%] {\n  position: relative;\n  flex: none;\n}\n.xh-actions[_ngcontent-%COMP%]   .xh-support-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  padding: 0;\n  border: 1px solid #cfd8e8;\n  border-radius: 50%;\n  background: #fff;\n  color: #062640;\n  text-decoration: none;\n}\n.xh-support-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 18px;\n  height: 18px;\n}\n.xh-support-icon[_ngcontent-%COMP%]:hover {\n  border-color: #aab7ca;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(16, 34, 70, .1);\n}\n.xh-support-icon[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #075a89;\n  outline-offset: 4px;\n}\n.xh-support-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: calc(100% + 8px);\n  transform: translateX(-50%);\n  padding: 5px 12px;\n  border: 1px solid #cfd8e8;\n  border-radius: 20px;\n  background: #fff;\n  color: #062640;\n  box-shadow: 0 2px 8px rgba(16, 34, 70, .1);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.3;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 2;\n}\n.xh-support-icon[_ngcontent-%COMP%]:hover    + .xh-support-tooltip[_ngcontent-%COMP%], \n.xh-support-icon[_ngcontent-%COMP%]:focus-visible    + .xh-support-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.xh-search-action[_ngcontent-%COMP%] {\n  position: relative;\n  flex: none;\n}\n.xh-search[_ngcontent-%COMP%]:hover    + .xh-support-tooltip[_ngcontent-%COMP%], \n.xh-search[_ngcontent-%COMP%]:focus-visible    + .xh-support-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n@media (max-width: 360px) {\n  .xh-nav-wrap[_ngcontent-%COMP%] {\n    padding-inline: 10px;\n    gap: 4px;\n  }\n  .xh-brand[_ngcontent-%COMP%] {\n    flex-basis: 90px;\n  }\n  .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90px;\n  }\n  .xh-actions[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n}\n.xh-actions[_ngcontent-%COMP%]   .xh-signup-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  padding: 0;\n  border: 1px solid #cfd8e8;\n  border-radius: 50%;\n  background: #fff;\n  color: #062640;\n  text-decoration: none;\n}\n.xh-actions[_ngcontent-%COMP%]   .xh-signup-icon[_ngcontent-%COMP%]:hover {\n  color: var(--xh-blue);\n  border-color: var(--xh-blue);\n}\n.xh-signup-icon[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--xh-blue);\n  outline-offset: 3px;\n}\n.xh-contact-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 22px);\n  right: -48px;\n  width: 430px;\n  max-width: calc(100vw - 32px);\n  padding: 16px 22px;\n  background: #fff;\n  border: 0;\n  border-radius: 0;\n  box-shadow: 0 18px 32px rgba(6, 26, 57, .16);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(6px);\n  transition:\n    opacity .15s ease,\n    transform .15s ease,\n    visibility .15s;\n  z-index: 30;\n}\n.xh-contact-dropdown[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -24px;\n  height: 24px;\n}\n.xh-support-action[_ngcontent-%COMP%]:hover   .xh-contact-dropdown[_ngcontent-%COMP%], \n.xh-support-action[_ngcontent-%COMP%]:focus-within   .xh-contact-dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.xh-contact-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 8px 0;\n  min-height: 62px;\n}\n.xh-contact-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.xh-contact-row[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--xh-blue);\n  width: 38px;\n  text-align: center;\n  flex-shrink: 0;\n  font-variation-settings: "FILL" 0, "wght" 250;\n}\n.xh-contact-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #071c43;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\n.xh-contact-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  white-space: nowrap;\n}\n.xh-actions[_ngcontent-%COMP%]   .xh-contact-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0;\n  border-radius: 0;\n  color: #123e70;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.xh-contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n  border-left: 1px solid #8392a7;\n  padding-left: 10px !important;\n}\n.xh-actions[_ngcontent-%COMP%]   .xh-contact-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0066ff;\n  text-decoration: underline;\n}\n.xh-actions[_ngcontent-%COMP%]   .xh-contact-support-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 10px 0 0;\n  border-top: 1px solid #e3eaf3;\n  border-radius: 0;\n  color: #0066ff;\n  font-size: 13px;\n}\n.xh-contact-dropdown[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #0066ff;\n  outline-offset: 4px;\n}\n@media (max-width: 600px) {\n  .xh-contact-dropdown[_ngcontent-%COMP%] {\n    right: -86px;\n    width: 310px;\n    padding: 10px 16px;\n  }\n  .xh-contact-details[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 2px 10px;\n    white-space: normal;\n  }\n  .xh-contact-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    + a[_ngcontent-%COMP%] {\n    border: 0;\n    padding-left: 0 !important;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-contact-dropdown[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n@media (max-width: 1024px) {\n  .xh-main-nav[_ngcontent-%COMP%] {\n    max-height: calc(100dvh - 90px);\n    overscroll-behavior: contain;\n  }\n  .xh-tabs[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    overflow-x: visible;\n    gap: 6px;\n  }\n  .xh-tab[_ngcontent-%COMP%] {\n    white-space: normal;\n    text-align: left;\n    min-height: 44px;\n  }\n  .xh-link-grid[_ngcontent-%COMP%], \n   .xh-link-grid.xh-link-grid-two[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .xh-item-copy[_ngcontent-%COMP%], \n   .xh-panels[_ngcontent-%COMP%], \n   .xh-link-group[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .xh-item-heading[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .xh-item-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n   .xh-item-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    white-space: normal;\n    overflow-wrap: anywhere;\n  }\n  .xh-contact-dropdown[_ngcontent-%COMP%] {\n    right: -88px;\n    max-width: calc(100vw - 24px);\n  }\n}\n@media (max-width: 600px) {\n  .xh-nav-wrap[_ngcontent-%COMP%] {\n    padding-inline: 12px;\n    gap: 6px;\n  }\n  .xh-brand[_ngcontent-%COMP%] {\n    flex: 1 1 100px;\n    min-width: 90px;\n  }\n  .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 105px;\n    max-width: 100%;\n  }\n  .xh-mobile-toggle[_ngcontent-%COMP%] {\n    flex: 0 0 44px;\n    width: 44px;\n    height: 44px;\n    margin-left: 0;\n  }\n  .xh-actions[_ngcontent-%COMP%] {\n    gap: 4px;\n  }\n  .xh-main-nav[_ngcontent-%COMP%] {\n    flex-basis: calc(100% + 24px);\n    margin-inline: -12px;\n  }\n  .xh-contact-details[_ngcontent-%COMP%] {\n    white-space: normal;\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 350px) {\n  .xh-actions[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    justify-content: flex-end;\n    padding-bottom: 8px;\n  }\n  .xh-actions[_ngcontent-%COMP%]   .xh-search[_ngcontent-%COMP%], \n   .xh-actions[_ngcontent-%COMP%]   .xh-support-icon[_ngcontent-%COMP%], \n   .xh-actions[_ngcontent-%COMP%]   .xh-login[_ngcontent-%COMP%], \n   .xh-actions[_ngcontent-%COMP%]   .xh-signup-icon[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 44px;\n  }\n  .xh-brand[_ngcontent-%COMP%] {\n    padding-block: 8px;\n  }\n  .xh-main-nav[_ngcontent-%COMP%] {\n    max-height: calc(100dvh - 140px);\n  }\n}\n@media (max-width: 1024px) {\n  .xh-main-nav[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    overflow-anchor: none;\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-menu-item[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n    min-width: 0;\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-menu-item[_ngcontent-%COMP%]    > .xh-mega[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-menu-item.open[_ngcontent-%COMP%]    > .xh-mega[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-feature-stack[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-tabs[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-tab[_ngcontent-%COMP%] {\n    min-width: 0;\n    width: 100%;\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-panels[_ngcontent-%COMP%] {\n    overflow: visible;\n    padding: 16px;\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-menu-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-menu-item.open[_ngcontent-%COMP%]    > .xh-menu-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    transform: rotate(180deg);\n  }\n}\n.xh-mobile-categories[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .xh-main-nav[_ngcontent-%COMP%]   .xh-tabs[_ngcontent-%COMP%], \n   .xh-main-nav[_ngcontent-%COMP%]   .xh-panels[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-mobile-categories[_ngcontent-%COMP%] {\n    display: block;\n    padding: 8px 12px;\n  }\n  .xh-mobile-category[_ngcontent-%COMP%] {\n    border-bottom: 1px solid #e7ebf3;\n  }\n  .xh-mobile-category-toggle[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    width: 100%;\n    min-height: 48px;\n    padding: 14px 12px;\n    border: 0;\n    border-radius: 8px;\n    background: transparent;\n    color: #263552;\n    font: 600 14px/1.4 var(--body);\n    text-align: left;\n    cursor: pointer;\n  }\n  .xh-mobile-category-toggle[aria-expanded=true][_ngcontent-%COMP%] {\n    color: var(--xh-blue);\n    background: #eaf2ff;\n  }\n  .xh-mobile-category-toggle[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    flex: none;\n    font-size: 20px;\n  }\n  .xh-mobile-category-toggle[_ngcontent-%COMP%]:focus-visible {\n    outline: 2px solid var(--xh-blue);\n    outline-offset: -2px;\n  }\n  .xh-mobile-category-panel[_ngcontent-%COMP%] {\n    padding: 12px 4px 18px;\n    min-width: 0;\n    animation: mobile-category-in .18s ease-out;\n  }\n  .xh-mobile-category-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 8px 8px 12px;\n    font-size: 15px;\n    color: #263552;\n  }\n  .xh-mobile-category-panel[_ngcontent-%COMP%]   .xh-link-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  @keyframes mobile-category-in {\n    from {\n      opacity: 0;\n      transform: translateY(-4px);\n    }\n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-mobile-category-panel[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderComponent, [{
    type: Component,
    args: [{ selector: "xh-header", changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "display: contents" }, imports: [RouterLink, RouterLinkActive, NgTemplateOutlet], template: `<header class="xh-header">\r
  <div class="xh-nav-wrap">\r
    <a class="xh-brand" routerLink="/" aria-label="XcellHost home" (click)="onNavigate()">\r
      <img src="/assets/images/xcellhost-logo.png" alt="XcellHost \u2014 Global Reach \xB7 Personal Touch" />\r
    </a>\r
\r
    <button\r
      class="xh-mobile-toggle"\r
      type="button"\r
      aria-label="Toggle navigation"\r
      aria-controls="xh-main-nav"\r
      [class.open]="mobileOpen()"\r
      [attr.aria-expanded]="mobileOpen()"\r
      (click)="toggleMobile()"\r
    ><span></span><span></span><span></span></button>\r
\r
    <nav\r
      id="xh-main-nav"\r
      class="xh-main-nav"\r
      [class.mobile-open]="mobileOpen()"\r
      [class.suppress-menu]="menuSuppressed()"\r
      aria-label="Primary navigation"\r
      (mouseleave)="releaseMenuSuppression()"\r
      (focusin)="releaseMenuSuppression()"\r
    >\r
      @for (top of tops; track top.label) {\r
        <div class="xh-menu-item" [class.open]="openTop() === top.label" (mouseenter)="onTopEnter(top.label, $event)">\r
          <button\r
            class="xh-menu-link"\r
            type="button"\r
            [attr.aria-expanded]="openTop() === top.label"\r
            [attr.aria-controls]="top.megaId"\r
            (click)="toggleTop(top.label)"\r
          >{{ top.label }} <span aria-hidden="true">\u2304</span></button>\r
\r
          <div class="xh-mega" [id]="top.megaId">\r
            <ng-template #categoryLinks let-tab>\r
                  @for (group of tab.groups; track $index) {\r
                    <div class="xh-link-group">\r
                    @if (group.heading) { <h3>{{ group.heading }}</h3> }\r
                    <ul class="xh-link-grid" [class.xh-link-grid-two]="tab.label === 'Security Platforms'">\r
                      @for (item of group.items; track $index) {\r
                        <li>\r
                          @if (item.link) {\r
                            @if (item.external) {\r
                              <a [href]="item.link" target="_blank" rel="noopener noreferrer" [class]="item.pillClass" (click)="onNavigate()">\r
                                <span class="xh-item-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path [attr.d]="item.iconPath" /></svg></span>\r
                                <span class="xh-item-copy"><span class="xh-item-heading"><strong>{{ item.title }}</strong>@if (item.pill) {<em [class]="item.pillClass">{{ item.pill }}</em>}</span>@if (item.desc) {<small>{{ item.desc }}</small>}</span>\r
                              </a>\r
                            } @else {\r
                              <a [routerLink]="item.link" [class]="item.pillClass" (click)="onNavigate()">\r
                                <span class="xh-item-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path [attr.d]="item.iconPath" /></svg></span>\r
                                <span class="xh-item-copy"><span class="xh-item-heading"><strong>{{ item.title }}</strong>@if (item.pill) {<em [class]="item.pillClass">{{ item.pill }}</em>}</span>@if (item.desc) {<small>{{ item.desc }}</small>}</span>\r
                              </a>\r
                            }\r
                          } @else {\r
                            <a href="#" [class]="item.pillClass" (click)="$event.preventDefault()" aria-disabled="true">\r
                              <span class="xh-item-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path [attr.d]="item.iconPath" /></svg></span>\r
                              <span class="xh-item-copy"><span class="xh-item-heading"><strong>{{ item.title }}</strong>@if (item.pill) {<em [class]="item.pillClass">{{ item.pill }}</em>}</span>@if (item.desc) {<small>{{ item.desc }}</small>}</span>\r
                            </a>\r
                          }\r
                        </li>\r
                      }\r
                    </ul>\r
                    </div>\r
                  }\r
            </ng-template>\r
            <div class="xh-mobile-categories">\r
              @for (tab of top.tabs; track tab.g) {\r
                <div class="xh-mobile-category">\r
                  @if (tab.label.trim()) {\r
                    <button class="xh-mobile-category-toggle" type="button"\r
                      [id]="top.megaId + '-mobile-tab-' + tab.g"\r
                      [attr.aria-expanded]="isMobileCategoryOpen(top.label, tab.g)"\r
                      [attr.aria-controls]="top.megaId + '-mobile-panel-' + tab.g"\r
                      (click)="toggleMobileCategory(top.label, tab.g)">\r
                      {{ tab.label }} <span aria-hidden="true">{{ isMobileCategoryOpen(top.label, tab.g) ? '\u2212' : '+' }}</span>\r
                    </button>\r
                  }\r
                  @if (!tab.label.trim() || isMobileCategoryOpen(top.label, tab.g)) {\r
                    <section class="xh-mobile-category-panel"\r
                      [id]="top.megaId + '-mobile-panel-' + tab.g"\r
                      [attr.aria-labelledby]="tab.label.trim() ? top.megaId + '-mobile-tab-' + tab.g : null">\r
                      <ng-container [ngTemplateOutlet]="categoryLinks" [ngTemplateOutletContext]="{ $implicit: tab }" />\r
                    </section>\r
                  }\r
                </div>\r
              }\r
            </div>\r
            <nav class="xh-tabs" [attr.aria-label]="top.label + ' categories'">\r
              @for (tab of top.tabs; track $index) {\r
                @if (tab.label.trim()) {\r
                  <button\r
                    class="xh-tab"\r
                    type="button"\r
                    [class.active]="isOn(top.label, tab.g)"\r
                    [attr.aria-selected]="isOn(top.label, tab.g)"\r
                    (mouseover)="setTab(top.label, tab.g)"\r
                    (click)="onTabClick($event, top.label, tab.g)"\r
                  >{{ tab.label }}</button>\r
                }\r
              }\r
            </nav>\r
\r
            <div class="xh-panels">\r
              @for (tab of top.tabs; track $index) {\r
                <section\r
                  class="xh-panel"\r
                  [class.active]="isOn(top.label, tab.g)"\r
                >\r
                  <ng-container [ngTemplateOutlet]="categoryLinks" [ngTemplateOutletContext]="{ $implicit: tab }" />\r
                </section>\r
              }\r
            </div>\r
\r
            @if (activeFeatureCards(top).length) {\r
              <aside class="xh-feature-stack" aria-label="Explore Web Presence services">\r
                @for (feature of activeFeatureCards(top); track feature.title) {\r
                  <a class="xh-feature-card" [href]="feature.link" [attr.target]="feature.link.startsWith('http') ? '_blank' : null" [attr.rel]="feature.link.startsWith('http') ? 'noopener noreferrer' : null" (click)="onNavigate()">\r
                    @if (feature.fresh) { <span class="xh-feature-ribbon">New</span> }\r
                    <span class="xh-feature-media" [class.xh-feature-media-illustration]="feature.image === '/assets/images/menu-cloud-backup.png' || feature.image === '/assets/images/menu-register-domain.png'">\r
                      @if (feature.image === '/assets/images/menu-cloud-backup.png' || feature.image === '/assets/images/menu-register-domain.png') {\r
                        <svg class="xh-menu-illustration" viewBox="32 26 1310 830" width="1310" height="830" role="img" [attr.aria-label]="feature.title">\r
                          <image [attr.href]="feature.image" x="0" y="0" width="1374" height="1145" />\r
                        </svg>\r
                      } @else {\r
                      <img\r
                        [src]="feature.image"\r
                        [alt]="feature.title"\r
                        [style.object-position]="feature.imagePosition ?? 'center'"\r
                      />\r
                      }\r
                    </span>\r
                    <span class="xh-feature-copy">\r
                      <small>{{ feature.label }}</small>\r
                      <strong>{{ feature.title }}</strong>\r
                      <span>{{ feature.body }}</span>\r
                      <b>Explore <i aria-hidden="true">\u2192</i></b>\r
                    </span>\r
                  </a>\r
                }\r
              </aside>\r
            } @else {\r
              <aside class="xh-feature">\r
                <b>Featured</b>\r
                <h3>{{ top.feature.title }}</h3>\r
                <p>{{ top.feature.body }}</p>\r
                <a [routerLink]="top.link" (click)="onNavigate()">Explore <span aria-hidden="true">\u2192</span></a>\r
              </aside>\r
            }\r
            <nav class="xh-menu-footer" [attr.aria-label]="top.label + ' useful links'">\r
              <a routerLink="/contact" (click)="onNavigate()">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.7L8.7 10.5a16 16 0 0 0 4.8 4.8l1.3-1.3a2 2 0 0 1 1.7-.6l2.8.5a2 2 0 0 1 2.7 3Z"/></svg>\r
                <span>Contact Us</span>\r
              </a>\r
              <a routerLink="/about-us" (click)="onNavigate()">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="9" r="2"/><path d="M8 17v-1a4 4 0 0 1 8 0v1M9 3V1m6 2V1"/></svg>\r
                <span>About Us</span>\r
              </a>\r
              <a routerLink="/insights" (click)="onNavigate()">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 7h18M7 11h4v6H7zM14 11h3m-3 3h3m-3 3h3"/></svg>\r
                <span>Insights</span>\r
              </a>\r
              <button type="button" (click)="onNavigate(); overlay.open('chat')">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l-3 3V11.5A8.5 8.5 0 0 1 9.5 3H13M18 2l1.2 3.8L23 7l-3.8 1.2L18 12l-1.2-3.8L13 7l3.8-1.2L18 2ZM6 12h8m-8 4h5"/></svg>\r
                <span>Ask AI</span>\r
              </button>\r
              <button type="button" (click)="onNavigate(); overlay.open('callback')">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H7l-4 3V11.5a8.5 8.5 0 0 1 17 0Z"/><path d="M8 10h8m-8 4h5"/></svg>\r
                <span>Let's Talk</span>\r
              </button>\r
              <a routerLink="/compare-providers" (click)="onNavigate()">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M8 6H3v12h5M16 6h5v12h-5M5 9l3 3-3 3m14-6-3 3 3 3"/></svg>\r
                <span>Compare Providers</span>\r
              </a>\r
              <a routerLink="/compare-products" (click)="onNavigate()">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="7" height="16" rx="2"/><rect x="14" y="4" width="7" height="16" rx="2"/><path d="M5 9h3m-3 4h3m8-4h3m-3 4h3"/></svg>\r
                <span>Compare Products</span>\r
              </a>\r
              <a routerLink="/marketplace" (click)="onNavigate()">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l2-6h14l2 6M3 9h18v3a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0V9ZM5 15v6h14v-6M9 21v-5h6v5"/></svg>\r
                <span>Marketplace</span>\r
              </a>\r
              <a class="xh-framework-label" routerLink="/cybersecurity-frameworks" (click)="onNavigate()">\r
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m8 12 3 3 5-6"/></svg>\r
                <span>CyberSecurity Frameworks</span>\r
              </a>\r
              <div class="xh-menu-social" role="group" aria-label="Social media">\r
                <a href="https://www.linkedin.com/in/samirjhaveri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" style="background:#0A66C2">in</a>\r
                <a href="https://www.youtube.com/@XcellHostCloudServices" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube" style="background:#FF0000">\u25B6</a>\r
                <a href="https://www.instagram.com/xcellhost_cloud/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" style="background:linear-gradient(45deg,#F09433,#DC2743,#BC1888)"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>\r
                <a href="https://in.pinterest.com/XcellHostCloud99/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" title="Pinterest" style="background:#E60023">P</a>\r
                <a href="https://www.facebook.com/XcellHost.Cloud.Pvt.Ltd" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" style="background:#1877F2">f</a>\r
                <a href="https://x.com/xcellcloud" target="_blank" rel="noopener noreferrer" aria-label="X" title="X" style="background:#000">X</a>\r
                <span aria-label="Reddit (link coming soon)" title="Reddit \u2014 coming soon" style="background:#FF4500">r</span>\r
              </div>\r
            </nav>\r
          </div>\r
        </div>\r
      }\r
    </nav>\r
\r
    <div class="xh-actions">\r
      <div class="xh-search-action">\r
      <button class="xh-search" type="button" aria-label="Search services" (click)="openSearch()">\r
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>\r
      </button>\r
      <span class="xh-support-tooltip" aria-hidden="true">Search</span>\r
      </div>\r
      <div class="xh-support-action">\r
        <a class="xh-support-icon" routerLink="/support-overview" aria-label="Support">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="12" width="4" height="7" rx="2"/><rect x="17" y="12" width="4" height="7" rx="2"/><path d="M19 19a3 3 0 0 1-3 3h-3"/></svg>\r
        </a>\r
        <div class="xh-contact-dropdown" aria-label="Contact XcellHost">\r
          <div class="xh-contact-row">\r
            <span class="material-symbols-outlined xh-contact-sales" aria-hidden="true">monitoring</span>\r
            <div><strong>Sales</strong><div class="xh-contact-details"><a href="tel:+912267111555">+91 22 6711 1555</a><a href="mailto:sales@xcellhost.cloud">sales@xcellhost.cloud</a></div></div>\r
          </div>\r
          <div class="xh-contact-row">\r
            <span class="material-symbols-outlined xh-contact-support" aria-hidden="true">support_agent</span>\r
            <div><strong>Support</strong><div class="xh-contact-details"><a href="tel:+912267111555">+91 22 6711 1555</a><a href="mailto:support@xcellhost.cloud">support@xcellhost.cloud</a></div></div>\r
          </div>\r
          <div class="xh-contact-row">\r
            <span class="material-symbols-outlined xh-contact-billing" aria-hidden="true">receipt_long</span>\r
            <div><strong>Billing</strong><div class="xh-contact-details"><a href="tel:+912267111555">+91 22 6711 1555</a><a href="mailto:billing@xcellhost.cloud">billing@xcellhost.cloud</a></div></div>\r
          </div>\r
          <a class="xh-contact-support-link" routerLink="/support-overview" (click)="onNavigate()">Visit Support Overview <span aria-hidden="true">\u2192</span></a>\r
        </div>\r
      </div>\r
      <div class="xh-login-menu" [class.open]="loginMenuOpen()">\r
        <button\r
          class="xh-login"\r
          aria-label="Login"\r
          type="button"\r
          aria-haspopup="menu"\r
          aria-controls="xh-customer-login-menu"\r
          [attr.aria-expanded]="loginMenuOpen()"\r
          (click)="toggleLoginMenu($event)"\r
        >\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 3v9M6.3 5.7a8 8 0 1 0 11.4 0" /></svg>\r
        </button>\r
        <span class="xh-login-tooltip" aria-hidden="true">Login</span>\r
        <div id="xh-customer-login-menu" class="xh-login-dropdown" role="menu" aria-label="Login portals">\r
          <a href="https://billing.zohosecure.in/portal/xcellhostcloudservicespvtltd/signin" target="_blank" rel="noopener noreferrer" role="menuitem" (click)="onNavigate()">\r
            <span class="xh-login-option"><span class="material-symbols-outlined" aria-hidden="true">person</span><span>Customer Login</span></span>\r
          </a>\r
          <a routerLink="/partner-login" routerLinkActive="selected" #partnerLoginLink="routerLinkActive" role="menuitem" (click)="onNavigate()">\r
            <span class="xh-login-option"><span class="material-symbols-outlined" aria-hidden="true">handshake</span><span>Partner Login</span></span>@if (partnerLoginLink.isActive) {<b class="xh-login-check" aria-hidden="true">\u2713</b>}\r
          </a>\r
          <a routerLink="/vendor-login" routerLinkActive="selected" #vendorLoginLink="routerLinkActive" role="menuitem" (click)="onNavigate()">\r
            <span class="xh-login-option"><span class="material-symbols-outlined" aria-hidden="true">storefront</span><span>Vendor Login</span></span>@if (vendorLoginLink.isActive) {<b class="xh-login-check" aria-hidden="true">\u2713</b>}\r
          </a>\r
          <a routerLink="/employee-login" routerLinkActive="selected" #employeeLoginLink="routerLinkActive" role="menuitem" (click)="onNavigate()">\r
            <span class="xh-login-option"><span class="material-symbols-outlined" aria-hidden="true">badge</span><span>Employee Login</span></span>@if (employeeLoginLink.isActive) {<b class="xh-login-check" aria-hidden="true">\u2713</b>}\r
          </a>\r
        </div>\r
      </div>\r
      <a class="xh-signup-icon" routerLink="/signup" (click)="onNavigate()" aria-label="Sign Up" title="Sign Up">\r
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 21v-2a6 6 0 0 1 12 0v2M19 8v6M16 11h6"/></svg>\r
      </a>\r
    </div>\r
  </div>\r
</header>\r
`, styles: ['/* src/app/layout/header.component.css */\n:host {\n  --xh-blue: #1769ff;\n  --xh-dark: #0b1736;\n  --xh-muted: #667085;\n  --xh-line: #e7ebf3;\n  position: relative;\n  z-index: 100;\n}\n* {\n  box-sizing: border-box;\n}\n.xh-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #fff;\n  border-bottom: 1px solid var(--xh-line);\n  box-shadow: 0 8px 24px rgba(18, 42, 90, .06);\n}\n.xh-nav-wrap {\n  max-width: 1440px;\n  min-height: 78px;\n  margin: auto;\n  padding: 0 24px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n}\n.xh-brand {\n  display: flex;\n  align-items: center;\n  flex: 0 0 170px;\n}\n.xh-brand img {\n  display: block;\n  width: 154px;\n  height: auto;\n}\n.xh-main-nav {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  gap: 2px;\n  flex: 1;\n  align-self: stretch;\n}\n.xh-menu-item {\n  position: static;\n  display: flex;\n  align-items: center;\n}\n.xh-menu-link {\n  border: 0;\n  background: transparent;\n  color: #263552;\n  font: 600 13px/1 var(--body, Arial, sans-serif);\n  padding: 30px 10px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.xh-menu-link span {\n  font-size: 12px;\n  margin-left: 3px;\n  color: #8290a8;\n  transition: transform .2s;\n}\n.xh-menu-item:hover > .xh-menu-link,\n.xh-menu-item.open > .xh-menu-link {\n  color: var(--xh-blue);\n}\n.xh-menu-item:hover > .xh-menu-link span,\n.xh-menu-item.open > .xh-menu-link span {\n  display: inline-block;\n  transform: rotate(180deg);\n}\n.xh-mega {\n  position: absolute;\n  left: 24px;\n  right: 24px;\n  top: 100%;\n  background: #fff;\n  border: 1px solid #e4e9f2;\n  border-radius: 0 0 18px 18px;\n  box-shadow: 0 22px 60px rgba(16, 34, 70, .18);\n  display: grid;\n  grid-template-columns: 190px minmax(0, 1fr) 230px;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transform: translateY(-6px);\n  transition:\n    opacity .2s ease,\n    transform .22s ease,\n    visibility .2s;\n  overflow: hidden;\n}\n.xh-main-nav:not(.suppress-menu) .xh-menu-item:hover > .xh-mega,\n.xh-main-nav:not(.suppress-menu) .xh-menu-item:focus-within > .xh-mega,\n.xh-menu-item.open > .xh-mega {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: none;\n}\n.xh-menu-footer {\n  grid-column: 1 / -1;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 18px;\n  overflow-x: auto;\n  border-top: 1px solid var(--xh-line);\n  background: #fff;\n  scrollbar-width: thin;\n}\n.xh-menu-footer a,\n.xh-menu-footer button,\n.xh-menu-footer .xh-framework-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 6px 0;\n  color: var(--navy);\n  font-size: 12px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.xh-menu-footer button {\n  border: 0;\n  background: transparent;\n  font-family: inherit;\n  cursor: pointer;\n}\n.xh-menu-footer .xh-framework-label {\n  flex-basis: auto;\n}\n.xh-menu-footer svg {\n  width: 15px;\n  height: 15px;\n  flex-shrink: 0;\n  fill: none;\n  stroke: var(--blue);\n  stroke-width: 1.3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.xh-menu-footer a:hover,\n.xh-menu-footer button:hover {\n  color: var(--blue);\n}\n.xh-menu-footer a:focus-visible,\n.xh-menu-footer button:focus-visible {\n  outline: 2px solid var(--blue);\n  outline-offset: 4px;\n  border-radius: 4px;\n}\n@media (max-width: 600px) {\n  .xh-menu-footer {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n    padding: 14px 18px;\n  }\n  .xh-menu-footer a,\n  .xh-menu-footer button,\n  .xh-menu-footer .xh-framework-label {\n    font-size: 12px;\n    gap: 7px;\n  }\n  .xh-menu-footer .xh-framework-label {\n    grid-column: 1 / -1;\n  }\n  .xh-menu-footer svg {\n    width: 24px;\n    height: 24px;\n  }\n}\n.xh-menu-social {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex: 0 0 auto;\n  flex-wrap: nowrap;\n  gap: 5px;\n  margin-left: auto;\n}\n.xh-menu-social a,\n.xh-menu-social > span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  border-radius: 50%;\n  color: #fff;\n  font: 700 14px Arial, sans-serif;\n}\n.xh-menu-social a:hover {\n  color: #fff;\n  filter: brightness(.9);\n}\n.xh-menu-social svg {\n  width: 18px;\n  height: 18px;\n  stroke: currentColor;\n  stroke-width: 2;\n}\n@media (min-width: 601px) and (max-width: 1200px) {\n  .xh-menu-footer {\n    gap: 9px;\n    padding-inline: 12px;\n  }\n  .xh-menu-footer a,\n  .xh-menu-footer button,\n  .xh-menu-footer .xh-framework-label {\n    gap: 5px;\n    font-size: 10.5px;\n  }\n  .xh-menu-footer svg {\n    width: 13px;\n    height: 13px;\n  }\n  .xh-menu-social {\n    gap: 4px;\n  }\n  .xh-menu-social a,\n  .xh-menu-social > span {\n    width: 25px;\n    height: 25px;\n    font-size: 12px;\n  }\n}\n@media (max-width: 600px) {\n  .xh-menu-social {\n    grid-column: 1 / -1;\n    width: 100%;\n    margin-top: 6px;\n  }\n}\n.xh-tabs {\n  background: #f6f8fc;\n  border-right: 1px solid var(--xh-line);\n  padding: 20px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.xh-tab {\n  border: 0;\n  background: transparent;\n  text-align: left;\n  padding: 9px 10px;\n  border-radius: 9px;\n  color: #42516d;\n  font: 600 13px/1.25 var(--body, Arial, sans-serif);\n  cursor: pointer;\n}\n.xh-tab:hover,\n.xh-tab.active {\n  background: #fff;\n  color: var(--xh-blue);\n  box-shadow: 0 5px 16px rgba(28, 62, 125, .08);\n}\n.xh-panels {\n  padding: 20px;\n  overflow: auto;\n  max-height: 560px;\n}\n.xh-panel {\n  display: none;\n  padding: 0;\n}\n.xh-panel.active {\n  display: block;\n}\n.xh-panel h3 {\n  margin: 0 0 14px;\n  color: var(--xh-dark);\n  font-size: 15px;\n  font-weight: 800;\n  line-height: 1.2;\n}\n.xh-link-grid {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n}\n.xh-link-grid li {\n  min-width: 0;\n  display: flex;\n}\n.xh-link-grid a {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  width: 100%;\n  min-height: 92px;\n  color: #3a4863;\n  padding: 14px;\n  border: 1px solid #e3e9f2;\n  border-radius: 12px;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(17, 45, 89, .035);\n  font-size: 13px;\n  line-height: 1.3;\n  text-decoration: none;\n  transition:\n    border-color .18s,\n    box-shadow .18s,\n    color .18s,\n    transform .18s;\n}\n.xh-item-icon {\n  display: grid;\n  flex: 0 0 36px;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid #d9e4ec;\n  border-radius: 9px;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f3f7ff);\n  color: var(--xh-blue);\n  transition:\n    border-color .18s,\n    background .18s,\n    transform .18s;\n}\n.xh-item-icon svg {\n  width: 23px;\n  height: 23px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-width: 1.45;\n}\n.xh-item-copy {\n  flex: 1 1 auto;\n  min-width: 0;\n}\n.xh-item-heading {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n}\n.xh-item-heading strong {\n  flex: 1 1 auto;\n  color: var(--xh-dark);\n  font-size: 12px;\n  font-weight: 800;\n  line-height: 1.25;\n}\n.xh-link-grid a:hover {\n  border-color: #b8d1ff;\n  color: var(--xh-blue);\n  box-shadow: 0 10px 22px rgba(23, 105, 255, .1);\n  transform: translateY(-2px);\n}\n.xh-link-grid a:hover .xh-item-heading strong {\n  color: var(--xh-blue);\n}\n.xh-link-grid a:hover .xh-item-icon {\n  border-color: #9fbeff;\n  background: #edf4ff;\n  transform: translateY(-1px);\n}\n.xh-link-grid a[aria-disabled=true] {\n  cursor: default;\n}\n.xh-link-grid em {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  border: 1px solid #f2bd49;\n  border-radius: 99px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff3b7,\n      #ffc94d);\n  color: #704000;\n  font-size: 9px;\n  font-style: normal;\n  font-weight: 800;\n  letter-spacing: .025em;\n  line-height: 1;\n  white-space: nowrap;\n  box-shadow: 0 3px 8px rgba(194, 118, 0, .2);\n}\n.xh-link-grid em::before {\n  content: none;\n}\n.xh-link-grid em.is-blue {\n  color: #075dcc;\n  background: #dbeafe;\n  border: 1px solid #b8d5ff;\n  box-shadow: 0 3px 8px rgba(18, 102, 220, .12);\n  font-weight: 900;\n}\n.xh-link-grid.xh-link-grid-two {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.xh-link-grid em.is-blue::before {\n  display: none;\n}\n.xh-link-grid small {\n  display: block;\n  margin-top: 7px;\n  color: var(--xh-muted);\n  font-size: 11.5px;\n  line-height: 1.45;\n}\n.xh-feature {\n  background:\n    linear-gradient(\n      150deg,\n      #0d2b64,\n      #1568dc);\n  color: #fff;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.xh-feature b {\n  align-self: flex-start;\n  background: rgba(255, 255, 255, .15);\n  padding: 5px 8px;\n  border-radius: 99px;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: .8px;\n}\n.xh-feature h3 {\n  color: #fff;\n  font-size: 21px;\n  margin: 15px 0 9px;\n}\n.xh-feature p {\n  font-size: 13px;\n  line-height: 1.55;\n  color: #dfeaff;\n  margin: 0 0 18px;\n}\n.xh-feature a {\n  color: #fff;\n  font-weight: 700;\n  font-size: 13px;\n  text-decoration: none;\n}\n.xh-feature-stack {\n  display: grid;\n  align-content: center;\n  gap: 14px;\n  padding: 18px;\n  border-left: 1px solid #dfe7f2;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fbff,\n      #eef7f5);\n}\n.xh-feature-card {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border: 1px solid #b9d6ce;\n  border-radius: 14px;\n  background: #fff;\n  color: var(--xh-dark);\n  text-decoration: none;\n  box-shadow: 0 8px 22px rgba(15, 52, 97, .08);\n  transition:\n    transform .2s ease,\n    border-color .2s ease,\n    box-shadow .2s ease;\n}\n.xh-feature-card:hover {\n  border-color: var(--xh-blue);\n  box-shadow: 0 13px 28px rgba(23, 105, 255, .14);\n  transform: translateY(-2px);\n}\n.xh-feature-media {\n  display: block;\n  height: 88px;\n  overflow: hidden;\n  border-bottom: 1px solid #e5ebf4;\n  background:\n    linear-gradient(\n      135deg,\n      #eaf2ff,\n      #effbf8);\n}\n.xh-feature-media img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.xh-feature-media.xh-feature-media-illustration {\n  position: relative;\n  height: auto;\n  aspect-ratio: 1310 / 830;\n  background: #f4f9ff;\n}\n.xh-feature-media-illustration .xh-menu-illustration {\n  display: block;\n  width: 100%;\n  height: auto;\n  max-height: none;\n  aspect-ratio: 1310 / 830;\n  overflow: hidden;\n}\n.xh-feature-copy {\n  display: flex;\n  flex-direction: column;\n  padding: 13px 14px 14px;\n}\n.xh-feature-copy small {\n  align-self: flex-start;\n  padding: 4px 7px;\n  border-radius: 6px;\n  background: #eaf2ff;\n  color: var(--xh-blue);\n  font-size: 9px;\n  font-weight: 800;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.xh-feature-copy strong {\n  margin-top: 9px;\n  color: var(--xh-dark);\n  font-size: 14px;\n  line-height: 1.3;\n}\n.xh-feature-copy > span {\n  margin-top: 6px;\n  color: var(--xh-muted);\n  font-size: 11px;\n  line-height: 1.45;\n}\n.xh-feature-copy b {\n  margin-top: 10px;\n  color: var(--xh-blue);\n  font-size: 12px;\n}\n.xh-feature-copy i {\n  font-style: normal;\n  transition: transform .2s ease;\n}\n.xh-feature-card:hover .xh-feature-copy i {\n  display: inline-block;\n  transform: translateX(3px);\n}\n.xh-feature-ribbon {\n  position: absolute;\n  z-index: 2;\n  top: 12px;\n  left: -29px;\n  width: 106px;\n  padding: 5px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #ff493e,\n      #dc2626);\n  color: #fff;\n  font-size: 9px;\n  font-weight: 900;\n  letter-spacing: .08em;\n  text-align: center;\n  text-transform: uppercase;\n  transform: rotate(-45deg);\n  box-shadow: 0 4px 10px rgba(220, 38, 38, .25);\n}\n.xh-actions {\n  display: flex;\n  gap: 9px;\n  align-items: center;\n}\n.xh-actions a {\n  white-space: nowrap;\n  padding: 10px 15px;\n  border-radius: 9px;\n  font-weight: 700;\n  font-size: 12px;\n  text-decoration: none;\n}\n.xh-login-menu {\n  position: relative;\n}\n.xh-login {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 15px;\n  border: 1px solid #cfd8e8;\n  border-radius: 9px;\n  background: #fff;\n  color: #263552;\n  font: 700 12px/1 var(--body, Arial, sans-serif);\n  cursor: pointer;\n}\n.xh-login > span {\n  color: #8290a8;\n  transition: transform .2s ease;\n}\n.xh-login:hover,\n.xh-login-menu.open .xh-login {\n  border-color: var(--xh-blue);\n  color: var(--xh-blue);\n}\n.xh-login-menu.open .xh-login > span {\n  transform: rotate(180deg);\n}\n.xh-login-dropdown {\n  position: absolute;\n  z-index: 120;\n  top: calc(100% + 12px);\n  right: 0;\n  width: 220px;\n  padding: 6px;\n  border: 1px solid #dfe6f1;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: 0 18px 45px rgba(16, 34, 70, .2);\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transform: translateY(-6px);\n  transition:\n    opacity .18s ease,\n    transform .18s ease,\n    visibility .18s;\n}\n.xh-login-menu.open .xh-login-dropdown {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: none;\n}\n.xh-login-dropdown a,\n.xh-login-dropdown button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  padding: 11px 12px;\n  border: 0;\n  border-radius: 10px;\n  background: transparent;\n  color: #10264a;\n  font-family: var(--body, Arial, sans-serif);\n  font-size: 13px;\n  font-weight: 600;\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n}\n.xh-login-option {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.xh-login-option > .material-symbols-outlined {\n  font-size: 20px;\n  color: var(--xh-blue);\n  font-variation-settings: "FILL" 0, "wght" 300;\n}\n.xh-login-dropdown a:hover,\n.xh-login-dropdown button:hover,\n.xh-login-dropdown a:focus-visible,\n.xh-login-dropdown button:focus-visible {\n  outline: 0;\n  background: #f1f6ff;\n  color: var(--xh-blue);\n}\n.xh-login-dropdown .selected {\n  background: #edf3fc;\n  color: var(--xh-blue);\n  font-weight: 700;\n}\n.xh-login-check {\n  color: var(--xh-blue);\n  font-size: 17px;\n  font-weight: 500;\n}\n.xh-trial {\n  background:\n    linear-gradient(\n      135deg,\n      #1769ff,\n      #0c4bd9);\n  color: #fff;\n  box-shadow: 0 8px 18px rgba(23, 105, 255, .25);\n}\n.xh-blog {\n  width: 38px;\n  height: 38px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: 1px solid #1769ff;\n  border-radius: 11px;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #2a7bff,\n      #0f5fe8);\n  box-shadow: 0 8px 18px rgba(23, 105, 255, .22);\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    filter .2s;\n}\n.xh-blog svg {\n  display: block;\n  flex: none;\n}\n.xh-blog:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 11px 24px rgba(23, 105, 255, .28);\n  filter: saturate(1.05);\n}\n.xh-theme-toggle {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  padding: 0;\n  border: 1px solid #1769ff;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #2a7bff,\n      #0f5fe8);\n  color: #fff;\n  box-shadow: 0 8px 18px rgba(23, 105, 255, .22);\n  cursor: pointer;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    filter .2s;\n}\n.xh-theme-toggle svg {\n  width: 18px;\n  height: 18px;\n}\n.xh-theme-toggle:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 11px 24px rgba(23, 105, 255, .28);\n  filter: saturate(1.05);\n}\n.xh-theme-toggle:focus-visible {\n  outline: 3px solid rgba(23, 105, 255, .3);\n  outline-offset: 3px;\n}\n.xh-search {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  border: 1px solid #dce3ef;\n  border-radius: 50%;\n  color: #263552;\n  background: #fff;\n  cursor: pointer;\n}\n.xh-search:hover {\n  color: var(--xh-blue);\n  border-color: var(--xh-blue);\n}\n.xh-cart {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  padding: 0;\n  border: 1px solid #dce3ef;\n  border-radius: 9px;\n  color: #263552;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    color .2s,\n    border-color .2s,\n    transform .2s;\n}\n.xh-cart:hover {\n  color: var(--xh-blue);\n  border-color: var(--xh-blue);\n  transform: translateY(-1px);\n}\n.xh-cart-count {\n  position: absolute;\n  top: -6px;\n  right: -5px;\n  display: grid;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  place-items: center;\n  border: 2px solid #fff;\n  border-radius: 99px;\n  background: #ff7b12;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 800;\n  line-height: 1;\n  box-shadow: 0 3px 8px rgba(255, 123, 18, .3);\n}\n.xh-mobile-toggle {\n  display: none;\n  margin-left: auto;\n  width: 42px;\n  height: 42px;\n  border: 1px solid #dce3ef;\n  background: #fff;\n  border-radius: 9px;\n  padding: 10px;\n  cursor: pointer;\n}\n.xh-mobile-toggle span {\n  display: block;\n  height: 2px;\n  background: #17233f;\n  margin: 5px 0;\n  transition: transform .2s, opacity .2s;\n}\n.xh-mobile-toggle.open span:nth-child(1) {\n  transform: translateY(7px) rotate(45deg);\n}\n.xh-mobile-toggle.open span:nth-child(2) {\n  opacity: 0;\n}\n.xh-mobile-toggle.open span:nth-child(3) {\n  transform: translateY(-7px) rotate(-45deg);\n}\n@media (max-width: 1400px) {\n  .xh-menu-link {\n    padding-left: 6px;\n    padding-right: 6px;\n    font-size: 12px;\n  }\n  .xh-brand {\n    flex-basis: 145px;\n  }\n  .xh-brand img {\n    width: 140px;\n  }\n  .xh-login-menu {\n    display: block;\n  }\n}\n@media (max-width: 1024px) {\n  .xh-nav-wrap {\n    min-height: 70px;\n    flex-wrap: wrap;\n    padding: 0 16px;\n  }\n  .xh-brand {\n    padding: 14px 0;\n  }\n  .xh-mobile-toggle {\n    display: block;\n  }\n  .xh-actions {\n    margin-left: 0;\n  }\n  .xh-actions .xh-login-menu {\n    display: block;\n  }\n  .xh-actions .xh-trial {\n    display: none;\n  }\n  .xh-main-nav {\n    display: none;\n    order: 3;\n    flex: 0 0 calc(100% + 32px);\n    margin: 0 -16px;\n    flex-direction: column;\n    align-items: stretch;\n    background: #fff;\n    border-top: 1px solid var(--xh-line);\n    max-height: 75vh;\n    overflow: auto;\n  }\n  .xh-main-nav.mobile-open {\n    display: flex;\n  }\n  .xh-menu-item {\n    display: block;\n    border-bottom: 1px solid #edf0f6;\n  }\n  .xh-menu-link {\n    width: 100%;\n    text-align: left;\n    display: flex;\n    justify-content: space-between;\n    padding: 17px 20px;\n    font-size: 14px;\n  }\n  .xh-mega {\n    position: static;\n    display: none;\n    opacity: 1;\n    visibility: visible;\n    pointer-events: auto;\n    transform: none;\n    border: 0;\n    border-radius: 0;\n    box-shadow: none;\n    grid-template-columns: 1fr;\n    background: #fbfcff;\n  }\n  .xh-menu-item:hover > .xh-mega {\n    display: none;\n  }\n  .xh-menu-item.open > .xh-mega {\n    display: block;\n  }\n  .xh-tabs {\n    border-right: 0;\n    border-bottom: 1px solid var(--xh-line);\n    padding: 10px 14px;\n    flex-direction: row;\n    overflow-x: auto;\n  }\n  .xh-tab {\n    white-space: nowrap;\n    padding: 10px;\n  }\n  .xh-panels {\n    padding: 18px;\n    max-height: none;\n  }\n  .xh-feature {\n    display: none;\n  }\n  .xh-link-grid {\n    grid-template-columns: 1fr;\n  }\n  .xh-link-grid a {\n    padding: 9px 7px;\n  }\n}\n@media (max-width: 480px) {\n  .xh-nav-wrap {\n    gap: 6px;\n  }\n  .xh-brand {\n    flex: 0 1 105px;\n  }\n  .xh-brand img {\n    width: 105px;\n  }\n  .xh-actions {\n    gap: 5px;\n  }\n  .xh-blog,\n  .xh-theme-toggle,\n  .xh-search,\n  .xh-cart {\n    width: 42px;\n    height: 42px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-mega,\n  .xh-menu-link span,\n  .xh-link-grid a {\n    transition: none;\n  }\n}\n.xh-login-menu .xh-login {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  min-width: 38px;\n  padding: 0;\n  border: 1px solid #cfd8e8;\n  border-radius: 50%;\n  background: #fff;\n  color: #062640;\n  box-shadow: none;\n  transition: box-shadow .2s ease, background .2s ease;\n}\n.xh-login-menu .xh-login svg {\n  display: block;\n  width: 18px;\n  height: 18px;\n}\n.xh-login-menu .xh-login:hover,\n.xh-login-menu.open .xh-login {\n  background: #fff;\n  border-color: #aab7ca;\n  color: #062640;\n  box-shadow: 0 2px 8px rgba(16, 34, 70, .1);\n}\n.xh-login-menu .xh-login:focus-visible {\n  outline: 2px solid #075a89;\n  outline-offset: 6px;\n}\n.xh-login-tooltip {\n  position: absolute;\n  left: 50%;\n  top: calc(100% + 8px);\n  transform: translateX(-50%);\n  padding: 5px 12px;\n  border-radius: 20px;\n  background: #fff;\n  border: 1px solid #cfd8e8;\n  box-shadow: 0 2px 8px rgba(16, 34, 70, .1);\n  color: #062640;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.3;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 2;\n}\n.xh-login-tooltip {\n  display: none;\n}\n.xh-login-menu:not(.open):hover .xh-login-dropdown,\n.xh-login-menu:not(.open):focus-within .xh-login-dropdown {\n  opacity: 1;\n  visibility: visible;\n  pointer-events: auto;\n  transform: none;\n}\n.xh-login-menu:not(.open)::after {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 220px;\n  height: 12px;\n  content: "";\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-login-menu .xh-login {\n    transition: none;\n  }\n}\n.xh-support-action {\n  position: relative;\n  flex: none;\n}\n.xh-actions .xh-support-icon {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  padding: 0;\n  border: 1px solid #cfd8e8;\n  border-radius: 50%;\n  background: #fff;\n  color: #062640;\n  text-decoration: none;\n}\n.xh-support-icon svg {\n  display: block;\n  width: 18px;\n  height: 18px;\n}\n.xh-support-icon:hover {\n  border-color: #aab7ca;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(16, 34, 70, .1);\n}\n.xh-support-icon:focus-visible {\n  outline: 2px solid #075a89;\n  outline-offset: 4px;\n}\n.xh-support-tooltip {\n  position: absolute;\n  left: 50%;\n  top: calc(100% + 8px);\n  transform: translateX(-50%);\n  padding: 5px 12px;\n  border: 1px solid #cfd8e8;\n  border-radius: 20px;\n  background: #fff;\n  color: #062640;\n  box-shadow: 0 2px 8px rgba(16, 34, 70, .1);\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.3;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n  z-index: 2;\n}\n.xh-support-icon:hover + .xh-support-tooltip,\n.xh-support-icon:focus-visible + .xh-support-tooltip {\n  opacity: 1;\n  visibility: visible;\n}\n.xh-search-action {\n  position: relative;\n  flex: none;\n}\n.xh-search:hover + .xh-support-tooltip,\n.xh-search:focus-visible + .xh-support-tooltip {\n  opacity: 1;\n  visibility: visible;\n}\n@media (max-width: 360px) {\n  .xh-nav-wrap {\n    padding-inline: 10px;\n    gap: 4px;\n  }\n  .xh-brand {\n    flex-basis: 90px;\n  }\n  .xh-brand img {\n    width: 90px;\n  }\n  .xh-actions {\n    gap: 4px;\n  }\n}\n.xh-actions .xh-signup-icon {\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  width: 38px;\n  height: 38px;\n  padding: 0;\n  border: 1px solid #cfd8e8;\n  border-radius: 50%;\n  background: #fff;\n  color: #062640;\n  text-decoration: none;\n}\n.xh-actions .xh-signup-icon:hover {\n  color: var(--xh-blue);\n  border-color: var(--xh-blue);\n}\n.xh-signup-icon:focus-visible {\n  outline: 2px solid var(--xh-blue);\n  outline-offset: 3px;\n}\n.xh-contact-dropdown {\n  position: absolute;\n  top: calc(100% + 22px);\n  right: -48px;\n  width: 430px;\n  max-width: calc(100vw - 32px);\n  padding: 16px 22px;\n  background: #fff;\n  border: 0;\n  border-radius: 0;\n  box-shadow: 0 18px 32px rgba(6, 26, 57, .16);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(6px);\n  transition:\n    opacity .15s ease,\n    transform .15s ease,\n    visibility .15s;\n  z-index: 30;\n}\n.xh-contact-dropdown::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: -24px;\n  height: 24px;\n}\n.xh-support-action:hover .xh-contact-dropdown,\n.xh-support-action:focus-within .xh-contact-dropdown {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.xh-contact-row {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 8px 0;\n  min-height: 62px;\n}\n.xh-contact-row > div {\n  min-width: 0;\n}\n.xh-contact-row > .material-symbols-outlined {\n  font-size: 32px;\n  color: var(--xh-blue);\n  width: 38px;\n  text-align: center;\n  flex-shrink: 0;\n  font-variation-settings: "FILL" 0, "wght" 250;\n}\n.xh-contact-row strong {\n  display: block;\n  color: #071c43;\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\n.xh-contact-details {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  white-space: nowrap;\n}\n.xh-actions .xh-contact-row a {\n  display: inline-block;\n  padding: 0;\n  border-radius: 0;\n  color: #123e70;\n  font-size: 12px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n.xh-contact-details a + a {\n  border-left: 1px solid #8392a7;\n  padding-left: 10px !important;\n}\n.xh-actions .xh-contact-row a:hover {\n  color: #0066ff;\n  text-decoration: underline;\n}\n.xh-actions .xh-contact-support-link {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 8px;\n  padding: 10px 0 0;\n  border-top: 1px solid #e3eaf3;\n  border-radius: 0;\n  color: #0066ff;\n  font-size: 13px;\n}\n.xh-contact-dropdown a:focus-visible {\n  outline: 2px solid #0066ff;\n  outline-offset: 4px;\n}\n@media (max-width: 600px) {\n  .xh-contact-dropdown {\n    right: -86px;\n    width: 310px;\n    padding: 10px 16px;\n  }\n  .xh-contact-details {\n    flex-wrap: wrap;\n    gap: 2px 10px;\n    white-space: normal;\n  }\n  .xh-contact-details a + a {\n    border: 0;\n    padding-left: 0 !important;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-contact-dropdown {\n    transition: none;\n  }\n}\n@media (max-width: 1024px) {\n  .xh-main-nav {\n    max-height: calc(100dvh - 90px);\n    overscroll-behavior: contain;\n  }\n  .xh-tabs {\n    flex-wrap: wrap;\n    overflow-x: visible;\n    gap: 6px;\n  }\n  .xh-tab {\n    white-space: normal;\n    text-align: left;\n    min-height: 44px;\n  }\n  .xh-link-grid,\n  .xh-link-grid.xh-link-grid-two {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .xh-item-copy,\n  .xh-panels,\n  .xh-link-group {\n    min-width: 0;\n  }\n  .xh-item-heading {\n    flex-wrap: wrap;\n  }\n  .xh-item-copy strong,\n  .xh-item-copy small {\n    white-space: normal;\n    overflow-wrap: anywhere;\n  }\n  .xh-contact-dropdown {\n    right: -88px;\n    max-width: calc(100vw - 24px);\n  }\n}\n@media (max-width: 600px) {\n  .xh-nav-wrap {\n    padding-inline: 12px;\n    gap: 6px;\n  }\n  .xh-brand {\n    flex: 1 1 100px;\n    min-width: 90px;\n  }\n  .xh-brand img {\n    width: 105px;\n    max-width: 100%;\n  }\n  .xh-mobile-toggle {\n    flex: 0 0 44px;\n    width: 44px;\n    height: 44px;\n    margin-left: 0;\n  }\n  .xh-actions {\n    gap: 4px;\n  }\n  .xh-main-nav {\n    flex-basis: calc(100% + 24px);\n    margin-inline: -12px;\n  }\n  .xh-contact-details {\n    white-space: normal;\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 350px) {\n  .xh-actions {\n    flex: 0 0 100%;\n    justify-content: flex-end;\n    padding-bottom: 8px;\n  }\n  .xh-actions .xh-search,\n  .xh-actions .xh-support-icon,\n  .xh-actions .xh-login,\n  .xh-actions .xh-signup-icon {\n    width: 44px;\n    height: 44px;\n  }\n  .xh-brand {\n    padding-block: 8px;\n  }\n  .xh-main-nav {\n    max-height: calc(100dvh - 140px);\n  }\n}\n@media (max-width: 1024px) {\n  .xh-main-nav {\n    justify-content: flex-start;\n    overflow-anchor: none;\n  }\n  .xh-main-nav .xh-menu-item {\n    flex: 0 0 auto;\n    min-width: 0;\n  }\n  .xh-main-nav .xh-menu-item > .xh-mega {\n    display: none;\n  }\n  .xh-main-nav .xh-menu-item.open > .xh-mega {\n    display: block;\n    width: 100%;\n  }\n  .xh-main-nav .xh-feature-stack {\n    display: none;\n  }\n  .xh-main-nav .xh-tabs {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .xh-main-nav .xh-tab {\n    min-width: 0;\n    width: 100%;\n  }\n  .xh-main-nav .xh-panels {\n    overflow: visible;\n    padding: 16px;\n  }\n  .xh-main-nav .xh-menu-link span {\n    transform: none;\n  }\n  .xh-main-nav .xh-menu-item.open > .xh-menu-link span {\n    transform: rotate(180deg);\n  }\n}\n.xh-mobile-categories {\n  display: none;\n}\n@media (max-width: 1024px) {\n  .xh-main-nav .xh-tabs,\n  .xh-main-nav .xh-panels {\n    display: none;\n  }\n  .xh-mobile-categories {\n    display: block;\n    padding: 8px 12px;\n  }\n  .xh-mobile-category {\n    border-bottom: 1px solid #e7ebf3;\n  }\n  .xh-mobile-category-toggle {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 12px;\n    width: 100%;\n    min-height: 48px;\n    padding: 14px 12px;\n    border: 0;\n    border-radius: 8px;\n    background: transparent;\n    color: #263552;\n    font: 600 14px/1.4 var(--body);\n    text-align: left;\n    cursor: pointer;\n  }\n  .xh-mobile-category-toggle[aria-expanded=true] {\n    color: var(--xh-blue);\n    background: #eaf2ff;\n  }\n  .xh-mobile-category-toggle > span {\n    flex: none;\n    font-size: 20px;\n  }\n  .xh-mobile-category-toggle:focus-visible {\n    outline: 2px solid var(--xh-blue);\n    outline-offset: -2px;\n  }\n  .xh-mobile-category-panel {\n    padding: 12px 4px 18px;\n    min-width: 0;\n    animation: mobile-category-in .18s ease-out;\n  }\n  .xh-mobile-category-panel h3 {\n    margin: 8px 8px 12px;\n    font-size: 15px;\n    color: #263552;\n  }\n  .xh-mobile-category-panel .xh-link-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  @keyframes mobile-category-in {\n    from {\n      opacity: 0;\n      transform: translateY(-4px);\n    }\n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-mobile-category-panel {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=header.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src/app/layout/header.component.ts", lineNumber: 498 });
})();

// src/app/layout/contact-options.component.ts
var ContactOptionsComponent = class _ContactOptionsComponent {
  fb = inject(FormBuilder);
  document = inject(DOCUMENT);
  destroyRef = inject(DestroyRef);
  confirmationUrl = "";
  submittedEmail = "";
  subscriptionStorageKey = "xcellhost.newsletter.confirmed-emails.v1";
  confirmedEmails = /* @__PURE__ */ new Set();
  submissionTimer;
  form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email, Validators.maxLength(255)]]
  });
  done = signal(false, ...ngDevMode ? [{ debugName: "done" }] : []);
  message = signal("", ...ngDevMode ? [{ debugName: "message" }] : []);
  sending = signal(false, ...ngDevMode ? [{ debugName: "sending" }] : []);
  constructor() {
    this.destroyRef.onDestroy(() => clearTimeout(this.submissionTimer));
  }
  emailInvalid() {
    return this.form.controls.email.invalid && this.form.controls.email.touched;
  }
  submit(formElement) {
    if (this.sending())
      return;
    this.done.set(false);
    this.form.controls.email.setValue(this.form.controls.email.value.trim());
    if (this.form.invalid) {
      this.form.controls.email.markAsTouched();
      this.done.set(false);
      this.message.set("Please enter a valid email address.");
      return;
    }
    const email = this.form.controls.email.value.toLowerCase();
    if (this.hasSubscribed(email)) {
      this.message.set("This email address is already subscribed.");
      return;
    }
    this.submittedEmail = email;
    const referrer = formElement.elements.namedItem("zf_referrer_name");
    const adClick = formElement.elements.namedItem("zc_gad");
    const redirect = formElement.elements.namedItem("zf_redirect_url");
    referrer.value = this.document.location.href;
    adClick.value = new URL(this.document.location.href).searchParams.get("gclid") ?? "";
    const callback = new URL("newsletter-subscription-success.html", this.document.baseURI);
    callback.searchParams.set("submission", `${Date.now()}-${Math.random().toString(36).slice(2)}`);
    this.confirmationUrl = callback.href;
    redirect.value = this.confirmationUrl;
    this.sending.set(true);
    this.message.set("Submitting your subscription...");
    this.submissionTimer = setTimeout(() => {
      this.sending.set(false);
      this.confirmationUrl = "";
      this.message.set("We could not confirm your subscription. Please try again later.");
    }, 3e4);
    try {
      formElement.submit();
    } catch {
      clearTimeout(this.submissionTimer);
      this.sending.set(false);
      this.confirmationUrl = "";
      this.message.set("We could not send your subscription. Please try again.");
    }
  }
  checkSubmission(frame) {
    if (!this.sending() || !this.confirmationUrl)
      return;
    try {
      if (frame.contentWindow?.location.href !== this.confirmationUrl)
        return;
    } catch {
      return;
    }
    clearTimeout(this.submissionTimer);
    this.confirmationUrl = "";
    this.sending.set(false);
    this.rememberSubscription(this.submittedEmail);
    this.submittedEmail = "";
    this.done.set(true);
    this.message.set("Thank you for subscribing!");
    this.form.reset();
  }
  // Only Zoho-confirmed submissions belong in this browser's cache. Zoho's
  // Email field must also enforce No Duplicates for records across devices.
  readConfirmedEmails() {
    try {
      const stored = JSON.parse(this.document.defaultView?.localStorage.getItem(this.subscriptionStorageKey) ?? "[]");
      return Array.isArray(stored) ? stored.filter((email) => typeof email === "string") : [];
    } catch {
      return [];
    }
  }
  hasSubscribed(email) {
    return this.confirmedEmails.has(email) || this.readConfirmedEmails().includes(email);
  }
  rememberSubscription(email) {
    if (!email)
      return;
    this.confirmedEmails.add(email);
    try {
      const emails = /* @__PURE__ */ new Set([...this.readConfirmedEmails(), ...this.confirmedEmails]);
      this.document.defaultView?.localStorage.setItem(this.subscriptionStorageKey, JSON.stringify([...emails]));
    } catch {
    }
  }
  static \u0275fac = function ContactOptionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactOptionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactOptionsComponent, selectors: [["xh-contact-options"]], hostAttrs: [2, "display", "contents"], decls: 34, vars: 9, consts: [["newsletterForm", ""], ["newsletterResponse", ""], ["aria-labelledby", "newsletter-title", 1, "newsletter"], [1, "wrap", "newsletter-inner"], [1, "newsletter-copy"], [1, "newsletter-label"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", "focusable", "false", 1, "newsletter-icon"], ["d", "M4 3h14v16a2 2 0 0 0 4 0V7h-4M4 3v16a2 2 0 0 0 2 2h14"], ["d", "M8 7h6M8 11h6M8 15h2M13 15h1"], ["id", "newsletter-title"], ["action", "https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/NewsletterSubscriptionForm/formperma/ZFO74kn3xfRonRDRy3zFBSIcG82fsKdLTBd2toT0wPM/htmlRecords/submit", "method", "POST", "enctype", "multipart/form-data", "accept-charset", "UTF-8", "target", "newsletter-response", "novalidate", "", 1, "newsletter-form", 3, "ngSubmit", "formGroup"], ["type", "hidden", "name", "zf_referrer_name"], ["type", "hidden", "name", "zf_redirect_url", "value", ""], ["type", "hidden", "name", "zc_gad"], ["for", "newsletter-email", 1, "sr-only"], ["id", "newsletter-email", "type", "email", "name", "Email", "maxlength", "255", "required", "", "formControlName", "email", "autocomplete", "email", "placeholder", "Enter your email", "aria-describedby", "newsletter-message", 3, "readOnly"], ["type", "submit", 3, "disabled"], ["id", "newsletter-message", "role", "status", "aria-live", "polite", 1, "form-message"], ["aria-label", "Follow XcellHost updates", 1, "newsletter-socials"], ["href", "https://www.whatsapp.com/channel/0029Vais2U4ICVffW7i82V1z", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Join WhatsApp Channel (opens in a new tab)", 1, "newsletter-social", "newsletter-whatsapp"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.7", "stroke-linecap", "round", "stroke-linejoin", "round", "aria-hidden", "true", "focusable", "false"], ["d", "M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z"], ["d", "m8.5 7.5 1.4 2.7-1 1c.8 1.7 2.1 3 3.9 3.8l1-1 2.7 1.4c-.3 1.5-1.3 2-2.6 1.6-3.5-1-6.2-3.7-7.2-7.2-.4-1.3.2-2.1 1.8-2.3Z"], ["href", "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7210900253737185280", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Subscribe to LinkedIn Newsletter (opens in a new tab)", 1, "newsletter-social", "newsletter-linkedin"], ["viewBox", "0 0 24 24", "fill", "currentColor", "aria-hidden", "true", "focusable", "false"], ["d", "M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.57 1.97 3.57 4.53v5.24Z"], ["name", "newsletter-response", "title", "Newsletter submission response", "hidden", "", 3, "load"]], template: function ContactOptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 2)(1, "div", 3)(2, "div", 4)(3, "p", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(4, "svg", 6);
      \u0275\u0275element(5, "path", 7)(6, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " XcellHost Newsletter ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "h2", 9);
      \u0275\u0275text(9, " Get the latest updates on Blog Posts, Industry News, Products, and Guidance on Cloud, Cyber Security, AI & Digital Transformation. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "form", 10, 0);
      \u0275\u0275listener("ngSubmit", function ContactOptionsComponent_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        const newsletterForm_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(ctx.submit(newsletterForm_r2));
      });
      \u0275\u0275element(12, "input", 11)(13, "input", 12)(14, "input", 13);
      \u0275\u0275elementStart(15, "label", 14);
      \u0275\u0275text(16, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 15);
      \u0275\u0275elementStart(18, "button", 16);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 17);
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "nav", 18)(23, "a", 19);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 20);
      \u0275\u0275element(25, "path", 21)(26, "path", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Join WhatsApp Channel ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(28, "a", 23);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(29, "svg", 24);
      \u0275\u0275element(30, "path", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " Subscribe to LinkedIn Newsletter ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "iframe", 26, 1);
      \u0275\u0275listener("load", function ContactOptionsComponent_Template_iframe_load_32_listener() {
        \u0275\u0275restoreView(_r1);
        const newsletterResponse_r3 = \u0275\u0275reference(33);
        return \u0275\u0275resetView(ctx.checkSubmission(newsletterResponse_r3));
      });
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275attribute("aria-busy", ctx.sending());
      \u0275\u0275advance(7);
      \u0275\u0275property("readOnly", ctx.sending());
      \u0275\u0275attribute("aria-invalid", ctx.emailInvalid());
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.sending());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.sending() ? "Sending..." : "Subscribe");
      \u0275\u0275advance();
      \u0275\u0275classProp("success", ctx.done());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.message(), " ");
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ["\n\n.newsletter[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 24px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(255, 255, 255, 0) 0 50%,\n      #3b63e8 50% 100%);\n  color: #fff;\n}\n.newsletter-inner[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: stretch;\n  width: min(850px, 100%);\n  max-width: none;\n  margin-inline: auto;\n  padding: 25px;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue-soft) 0%,\n      #dcecff 62%,\n      #fff0de 100%);\n  box-shadow: 0 12px 28px rgba(4, 30, 66, 0.18);\n}\n.newsletter-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.newsletter-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin: 0 0 10px;\n  color: var(--navy);\n  text-align: center;\n  font: 800 17px / 1.35 var(--disp);\n}\n.newsletter-icon[_ngcontent-%COMP%] {\n  color: var(--orange);\n  width: 25px;\n  height: 25px;\n  flex-shrink: 0;\n}\n.newsletter-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 1120px;\n  margin: 0 auto;\n  color: var(--ink);\n  text-align: center;\n  font: 600 13px / 1.5 var(--body);\n  letter-spacing: 0;\n  padding: 10px;\n}\n.newsletter-form[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  min-height: 32px;\n  grid-template-columns: minmax(0, 1fr) 124px;\n  gap: 8px;\n  align-items: center;\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 42px;\n  padding: 0 18px;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  outline: 0;\n  background: var(--white);\n  color: var(--ink);\n  font: 500 15px var(--body);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #7fb2ff;\n  box-shadow: 0 0 0 3px rgba(127, 178, 255, 0.25);\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--slate);\n  opacity: 1;\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 0;\n  min-height: 30px;\n  padding: 10px;\n  border: 0;\n  border-radius: 8px;\n  background: var(--blue);\n  box-shadow: none;\n  color: #fff;\n  cursor: pointer;\n  font: 700 15px var(--body);\n  transition:\n    background-color 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    opacity 0.2s ease;\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled), \n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  background: #0e4cab;\n  box-shadow: 0 8px 20px rgba(21, 101, 216, 0.3);\n  transform: translateY(-2px);\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--navy);\n  outline-offset: 3px;\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.7;\n}\n.form-message[_ngcontent-%COMP%] {\n  margin: 0;\n  min-height: 20px;\n  color: #b91c1c;\n  font-size: 18px;\n  line-height: 20px;\n}\n.form-message.success[_ngcontent-%COMP%] {\n  color: #166534;\n  font-size: 18px;\n}\n.newsletter-socials[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.newsletter-social[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 48px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font: 700 14px / 1.4 var(--body);\n  transition: background-color 0.2s ease;\n}\n.newsletter-social[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.newsletter-whatsapp[_ngcontent-%COMP%] {\n  background: #128c4a;\n}\n.newsletter-whatsapp[_ngcontent-%COMP%]:hover {\n  background: #0d703b;\n}\n.newsletter-linkedin[_ngcontent-%COMP%] {\n  background: #0a66c2;\n}\n.newsletter-linkedin[_ngcontent-%COMP%]:hover {\n  background: #084f96;\n}\n.newsletter-social[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--navy);\n  outline-offset: 3px;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n@media (max-width: 960px) {\n  .newsletter-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .newsletter-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 600px) {\n  .newsletter[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .newsletter-inner[_ngcontent-%COMP%] {\n    padding: 24px 18px;\n  }\n  .newsletter-label[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .newsletter-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .newsletter-socials[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .newsletter-social[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=contact-options.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactOptionsComponent, [{
    type: Component,
    args: [{ selector: "xh-contact-options", standalone: true, imports: [ReactiveFormsModule], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <section class="newsletter" aria-labelledby="newsletter-title">
      <div class="wrap newsletter-inner">
        <div class="newsletter-copy">
          <p class="newsletter-label">
            <svg class="newsletter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <path d="M4 3h14v16a2 2 0 0 0 4 0V7h-4M4 3v16a2 2 0 0 0 2 2h14" />
              <path d="M8 7h6M8 11h6M8 15h2M13 15h1" />
            </svg>
            XcellHost Newsletter
          </p>
          <h2 id="newsletter-title">
            Get the latest updates on Blog Posts, Industry News, Products, and Guidance on Cloud,
            Cyber Security, AI &amp; Digital Transformation.
          </h2>
        </div>

        <form #newsletterForm class="newsletter-form" [formGroup]="form" (ngSubmit)="submit(newsletterForm)"
          action="https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/NewsletterSubscriptionForm/formperma/ZFO74kn3xfRonRDRy3zFBSIcG82fsKdLTBd2toT0wPM/htmlRecords/submit"
          method="POST" enctype="multipart/form-data" accept-charset="UTF-8" target="newsletter-response" [attr.aria-busy]="sending()" novalidate>
          <input type="hidden" name="zf_referrer_name" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" />
          <label class="sr-only" for="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            name="Email"
            maxlength="255"
            required
            formControlName="email"
            [readOnly]="sending()"
            autocomplete="email"
            placeholder="Enter your email"
            [attr.aria-invalid]="emailInvalid()"
            aria-describedby="newsletter-message"
          />
          <button type="submit" [disabled]="sending()">{{ sending() ? 'Sending...' : 'Subscribe' }}</button>
        </form>

        <p
          id="newsletter-message"
          class="form-message"
          [class.success]="done()"
          role="status"
          aria-live="polite"
        >
          {{ message() }}
        </p>
        <nav class="newsletter-socials" aria-label="Follow XcellHost updates">
          <a class="newsletter-social newsletter-whatsapp"
            href="https://www.whatsapp.com/channel/0029Vais2U4ICVffW7i82V1z"
            target="_blank" rel="noopener noreferrer"
            aria-label="Join WhatsApp Channel (opens in a new tab)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
              <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
              <path d="m8.5 7.5 1.4 2.7-1 1c.8 1.7 2.1 3 3.9 3.8l1-1 2.7 1.4c-.3 1.5-1.3 2-2.6 1.6-3.5-1-6.2-3.7-7.2-7.2-.4-1.3.2-2.1 1.8-2.3Z" />
            </svg>
            Join WhatsApp Channel
          </a>
          <a class="newsletter-social newsletter-linkedin"
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7210900253737185280"
            target="_blank" rel="noopener noreferrer"
            aria-label="Subscribe to LinkedIn Newsletter (opens in a new tab)">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52C22 2.68 21.31 2 20.45 2ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.52 2.8-1.52 2.99 0 3.57 1.97 3.57 4.53v5.24Z" />
            </svg>
            Subscribe to LinkedIn Newsletter
          </a>
        </nav>
      </div>
      <iframe #newsletterResponse name="newsletter-response" title="Newsletter submission response" hidden
        (load)="checkSubmission(newsletterResponse)"></iframe>
    </section>
  `, styles: ["/* angular:styles/component:css;2746415e7c1b52c5dbd19a0dfe93ffc693284ea6aef19e098d03cd90b6a170f2;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/layout/contact-options.component.ts */\n.newsletter {\n  position: relative;\n  padding: 0 24px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(255, 255, 255, 0) 0 50%,\n      #3b63e8 50% 100%);\n  color: #fff;\n}\n.newsletter-inner {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: stretch;\n  width: min(850px, 100%);\n  max-width: none;\n  margin-inline: auto;\n  padding: 25px;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue-soft) 0%,\n      #dcecff 62%,\n      #fff0de 100%);\n  box-shadow: 0 12px 28px rgba(4, 30, 66, 0.18);\n}\n.newsletter-copy {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.newsletter-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin: 0 0 10px;\n  color: var(--navy);\n  text-align: center;\n  font: 800 17px / 1.35 var(--disp);\n}\n.newsletter-icon {\n  color: var(--orange);\n  width: 25px;\n  height: 25px;\n  flex-shrink: 0;\n}\n.newsletter-copy h2 {\n  max-width: 1120px;\n  margin: 0 auto;\n  color: var(--ink);\n  text-align: center;\n  font: 600 13px / 1.5 var(--body);\n  letter-spacing: 0;\n  padding: 10px;\n}\n.newsletter-form {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  min-height: 32px;\n  grid-template-columns: minmax(0, 1fr) 124px;\n  gap: 8px;\n  align-items: center;\n}\n.newsletter-form input {\n  min-width: 0;\n  min-height: 42px;\n  padding: 0 18px;\n  border: 1px solid var(--line);\n  border-radius: 8px;\n  outline: 0;\n  background: var(--white);\n  color: var(--ink);\n  font: 500 15px var(--body);\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.newsletter-form input:focus {\n  border-color: #7fb2ff;\n  box-shadow: 0 0 0 3px rgba(127, 178, 255, 0.25);\n}\n.newsletter-form input::placeholder {\n  color: var(--slate);\n  opacity: 1;\n}\n.newsletter-form button {\n  min-width: 0;\n  min-height: 30px;\n  padding: 10px;\n  border: 0;\n  border-radius: 8px;\n  background: var(--blue);\n  box-shadow: none;\n  color: #fff;\n  cursor: pointer;\n  font: 700 15px var(--body);\n  transition:\n    background-color 0.2s ease,\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    opacity 0.2s ease;\n}\n.newsletter-form button:hover:not(:disabled),\n.newsletter-form button:focus-visible {\n  background: #0e4cab;\n  box-shadow: 0 8px 20px rgba(21, 101, 216, 0.3);\n  transform: translateY(-2px);\n}\n.newsletter-form button:focus-visible {\n  outline: 2px solid var(--navy);\n  outline-offset: 3px;\n}\n.newsletter-form button:disabled {\n  cursor: wait;\n  opacity: 0.7;\n}\n.form-message {\n  margin: 0;\n  min-height: 20px;\n  color: #b91c1c;\n  font-size: 18px;\n  line-height: 20px;\n}\n.form-message.success {\n  color: #166534;\n  font-size: 18px;\n}\n.newsletter-socials {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.newsletter-social {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  min-height: 48px;\n  padding: 12px 16px;\n  border-radius: 8px;\n  color: #fff;\n  text-align: center;\n  text-decoration: none;\n  font: 700 14px / 1.4 var(--body);\n  transition: background-color 0.2s ease;\n}\n.newsletter-social svg {\n  width: 22px;\n  height: 22px;\n  flex-shrink: 0;\n}\n.newsletter-whatsapp {\n  background: #128c4a;\n}\n.newsletter-whatsapp:hover {\n  background: #0d703b;\n}\n.newsletter-linkedin {\n  background: #0a66c2;\n}\n.newsletter-linkedin:hover {\n  background: #084f96;\n}\n.newsletter-social:focus-visible {\n  outline: 3px solid var(--navy);\n  outline-offset: 3px;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n@media (max-width: 960px) {\n  .newsletter-inner {\n    grid-template-columns: 1fr;\n    gap: 14px;\n  }\n  .newsletter-form {\n    width: 100%;\n  }\n}\n@media (max-width: 600px) {\n  .newsletter {\n    padding: 0 16px;\n  }\n  .newsletter-inner {\n    padding: 24px 18px;\n  }\n  .newsletter-label {\n    font-size: 16px;\n  }\n  .newsletter-form {\n    grid-template-columns: 1fr;\n  }\n  .newsletter-form input {\n    width: 100%;\n  }\n  .newsletter-form button {\n    width: 100%;\n  }\n  .newsletter-socials {\n    grid-template-columns: 1fr;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .newsletter-form button,\n  .newsletter-social {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=contact-options.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactOptionsComponent, { className: "ContactOptionsComponent", filePath: "src/app/layout/contact-options.component.ts", lineNumber: 309 });
})();

// src/app/layout/footer.component.ts
var _c07 = () => ({ certification: 2 });
var _c15 = () => ({ certification: 0 });
var _c22 = () => ({ certification: 3 });
var _c3 = () => ({ certification: 4 });
var _c4 = () => ({ certification: 5 });
var _c5 = () => ({ certification: 6 });
var _c6 = () => ({ certification: 1 });
var _c7 = () => ({ certification: 7 });
var _c8 = () => ({ certification: 8 });
var _c9 = () => ({ certification: 9 });
var _c10 = () => ({ certification: 10 });
var _c11 = () => ({ certification: 11 });
var _c122 = () => ({ certification: 12 });
var _c132 = () => ({ certification: 13 });
var _c142 = () => ({ certification: 14 });
var _c152 = () => ({ certification: 15 });
var _c16 = () => ({ certification: 16 });
var _c17 = () => ({ certification: 17 });
var _forTrack09 = ($index, $item) => $item.name;
function FooterComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 124);
  }
}
function FooterComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 125);
    \u0275\u0275listener("click", function FooterComponent_Conditional_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.videoStarted.set(true));
    });
    \u0275\u0275element(1, "img", 126);
    \u0275\u0275elementStart(2, "span", 127);
    \u0275\u0275text(3, "\u25B6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 128);
    \u0275\u0275text(5, "Play XcellHost video");
    \u0275\u0275elementEnd()();
  }
}
function FooterComponent_For_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    \u0275\u0275property("href", entry_r3.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r3.name);
  }
}
var CATALOG_LINKS = [
  { name: "SMB Catalog", href: "https://flipbooks.officeinfra.com/books/SMB-Cloud-Services/" },
  { name: "SMB Cyber Security", href: "https://flipbooks.officeinfra.com/books/Cyber-Security-Platform-DXew/" },
  { name: "Acronis Cyber Protect Cloud", href: "https://flipbooks.officeinfra.com/books/Acronis-Cyber-Protect-Cloud-kxeF/" },
  { name: "Managed Cloud Service", href: "https://flipbooks.officeinfra.com/books/tnuv/" },
  { name: "Managed Cloud Security", href: "https://flipbooks.officeinfra.com/books/ycah/" },
  { name: "Microsoft 365", href: "https://flipbooks.officeinfra.com/books/Microsoft-365-Platfrom/" },
  // { name: 'Bare Metal Server', href: 'https://flipbooks.officeinfra.com/books/Bare-Metal-Server-1lHl/' },
  // { name: 'GPU Server', href: 'https://flipbooks.officeinfra.com/books/GPU-as-a-Service-p4pW/' },
  // { name: 'Performance Cloud', href: 'https://flipbooks.officeinfra.com/books/guzk/' },
  { name: "CloudBaba Performance Cloud", href: "https://flipbooks.officeinfra.com/books/guzk/" },
  { name: "BFSI Cloud", href: "https://flipbooks.officeinfra.com/books/gith/" },
  { name: "DPDPA Platform", href: "https://flipbooks.officeinfra.com/books/svfi/" },
  { name: "Digital Authenticity Verification", href: "https://flipbooks.officeinfra.com/books/Digital-Authenticity-Verification-MlhG/" },
  { name: "Video Surveillance as a Service", href: "https://flipbooks.officeinfra.com/books/uygx/" }
];
var FooterComponent = class _FooterComponent {
  catalog = inject(CatalogService);
  overlay = inject(OverlayService);
  site = SITE;
  year = (/* @__PURE__ */ new Date()).getFullYear();
  videoStarted = signal(false, ...ngDevMode ? [{ debugName: "videoStarted" }] : []);
  /** Resolved once so the slugs match the directory the service pages use. */
  catalogLinks = CATALOG_LINKS;
  openPartner() {
    this.overlay.open("partner");
  }
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["xh-footer"]], hostAttrs: [2, "display", "contents"], decls: 375, vars: 43, consts: [[1, "wrap"], [1, "nf-top"], [1, "nf-about"], [1, "nf-logo"], ["src", "/assets/images/xcellhost-logo.png", "alt", "XcellHost \u2014 Cloud | Security | AI", 1, "xh-logo"], [1, "nf-tag"], [1, "nf-values"], ["routerLink", "/company/support-overview", "aria-label", "XcellHost support"], ["src", "/assets/images/laughing-buddha.png", "alt", "XcellHost Support \u2014 24\xD77 Delightful Support", 1, "nf-buddha"], [1, "nf-desc"], [1, "nf-social"], ["href", "https://www.linkedin.com/in/samirjhaveri/", "aria-label", "LinkedIn", 1, "nfs", 2, "background", "#0A66C2"], ["href", "https://www.youtube.com/@XcellHostCloudServices", "aria-label", "YouTube", 1, "nfs", 2, "background", "#FF0000"], ["href", "https://www.instagram.com/xcellhost_cloud/", "aria-label", "Instagram", 1, "nfs", 2, "background", "linear-gradient(45deg,#F09433,#E6683C,#DC2743,#CC2366,#BC1888)"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "aria-hidden", "true", "focusable", "false"], ["x", "3", "y", "3", "width", "18", "height", "18", "rx", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "1", "fill", "currentColor", "stroke", "none"], ["href", "https://in.pinterest.com/XcellHostCloud99/", "aria-label", "Pinterest", 1, "nfs", 2, "background", "#E60023"], ["href", "https://www.facebook.com/XcellHost.Cloud.Pvt.Ltd", "aria-label", "Facebook", 1, "nfs", 2, "background", "#1877F2"], ["href", "https://x.com/xcellcloud", "aria-label", "X", 1, "nfs", 2, "background", "#000"], ["href", "#", "aria-label", "Reddit", 1, "nfs", 2, "background", "#FF4500"], [1, "nf-video"], [1, "nf-video-head"], [1, "nf-video-frame"], ["src", "https://www.youtube.com/embed/s1Rxs7rWd2I?autoplay=1", "title", "XcellHost YouTube video", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], ["type", "button", "aria-label", "Play XcellHost video", 1, "nf-video-poster"], ["href", "https://www.youtube.com/watch?v=s1Rxs7rWd2I", "target", "_blank", "rel", "noopener noreferrer", 1, "nf-video-link"], [1, "nf-rows"], [1, "nf-row"], [1, "nf-rlbl"], [1, "nf-links"], ["routerLink", "/about-us"], ["href", "https://xcellhost.cloud/support-overview"], ["routerLink", "/contact"], ["routerLink", "/payment-methods"], ["routerLink", "/promotion-and-offers"], ["href", "https://flipbooks.officeinfra.com/books/Company-Profile/#p=1", "target", "_blank", "rel", "noopener noreferrer"], ["routerLink", "/career-handbook"], ["routerLink", "/partner-program"], ["routerLink", "/media-kit"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["href", "https://flipbooks.officeinfra.com/books/wout/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://flipbooks.officeinfra.com/books/zrdc/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://online.fliphtml5.com/dzuan/dtiq/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://online.fliphtml5.com/dzuan/qgnd/#p=1", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://online.fliphtml5.com/dzuan/zyzu/#p=1", "target", "_blank", "rel", "noopener noreferrer"], ["routerLink", "/company/terms-of-service"], ["routerLink", "/company/acceptable-use-policy"], ["routerLink", "/company/privacy-policy"], ["routerLink", "/company/refund-policy"], ["routerLink", "/company/ekyc-verification"], ["routerLink", "/company/abuse-policy"], ["routerLink", "/escalation-matrix"], ["routerLink", "/customer-testimonials"], ["routerLink", "/company/apply-for-job", 1, "nf-hot"], ["href", "https://supportdesk.xcellhost.cloud/portal/en/kb", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.xcellhost.cloud/glossary/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.xcellhost.cloud/qr-codes/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.xcellhost.cloud/sitemap/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://www.xcellhost.cloud/service-index/", "target", "_blank", "rel", "noopener noreferrer"], [1, "nf-cert-row"], [1, "nf-isos"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View ISO 9001 certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View ISO IEC 27001 2013 certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View ISO 27002 certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View ISO 27017 certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View ISO 27018 certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View ISO 29100 certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View ISO IEC 20000-1 2018 certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View SOC 2 Type I certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View SOC 2 Type II certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View MEITY certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View Tier IV certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View CMM1 Level 3 certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View DPDPA compliance", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View GEM registration", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View VAPT certification", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View DUNS registration", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View Justdial verified supplier credential", 1, "nf-iso", 3, "queryParams"], ["routerLink", "/company/certifications-awards", "fragment", "certifications-title", "aria-label", "View IndiaMart verified supplier credential", 1, "nf-iso", 3, "queryParams"], ["aria-label", "NIXI Accredited", 1, "nf-iso"], ["href", "https://www.google.com/search?q=XcellHost+Cloud+Services+Private+Limited", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Find XcellHost's verified business on Google (opens in a new tab)", 1, "nf-iso"], ["role", "list", "aria-label", "Accepted payment methods", 1, "nf-pays"], ["role", "listitem", "aria-label", "Visa", 1, "nf-pay", "pay-visa"], ["role", "listitem", "aria-label", "Mastercard", 1, "nf-pay", "pay-mastercard"], ["aria-hidden", "true", 1, "pay-circles"], ["role", "listitem", "aria-label", "American Express", 1, "nf-pay", "pay-amex"], ["role", "listitem", "aria-label", "Maestro", 1, "nf-pay", "pay-maestro"], ["role", "listitem", "aria-label", "PayPal", 1, "nf-pay", "pay-paypal"], ["aria-hidden", "true"], ["role", "listitem", "aria-label", "Amazon Pay", 1, "nf-pay", "pay-amazon"], ["role", "listitem", 1, "nf-pay", "pay-bank"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["role", "listitem", 1, "nf-pay", "pay-cheque"], ["role", "listitem", "aria-label", "PhonePe", 1, "nf-pay", "pay-phonepe"], ["role", "listitem", "aria-label", "Paytm", 1, "nf-pay", "pay-paytm"], ["role", "listitem", "aria-label", "UPI", 1, "nf-pay", "pay-upi"], ["role", "listitem", "aria-label", "RuPay", 1, "nf-pay", "pay-rupay"], ["role", "listitem", "aria-label", "Razorpay", 1, "nf-pay", "pay-razorpay"], ["width", "15", "height", "20", "viewBox", "0 0 15 20", "fill", "currentColor", "aria-hidden", "true", "focusable", "false"], ["d", "M8 0 0 11h5L2 20 15 6H9l4-6Z"], [1, "nf-prot"], ["src", "/assets/images/sitelock-protected.png", "alt", "SiteLock malware-free protection", 1, "nf-sitelock-image"], ["src", "/assets/images/geotrust-secured-powered-by-digicert.png", "alt", "GeoTrust Secured powered by DigiCert", 1, "nf-protection-image"], ["src", "/assets/images/footer-trust-badge.webp", "alt", "Security trust badge", 1, "nf-protection-image"], [1, "nf-acronis-badge"], ["src", "/assets/images/acronis-cyber-protect-cloud.png", "alt", "Powered by Acronis Cyber Protect Cloud", "width", "1117", "height", "479", "loading", "lazy"], [1, "nf-sitelock"], ["aria-label", "Trusted and reviewed", 1, "nf-review-band"], [1, "nf-review-grid"], ["href", "https://www.google.com/search?q=XcellHost+reviews", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Read Google reviews for XcellHost", 1, "nf-review-card", "is-google"], ["aria-hidden", "true", 1, "nf-review-icon"], [1, "nf-review-copy"], [1, "nf-review-meta"], ["href", "https://www.trustpilot.com/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "View Trustpilot profile", 1, "nf-review-card", "is-trustpilot"], ["href", "https://www.facebook.com/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "View Facebook reviews", 1, "nf-review-card", "is-facebook"], [1, "nf-partner"], [1, "nf-partner-intro"], ["src", "/assets/images/partner-handshake.svg", "width", "64", "height", "64", "alt", "", "aria-hidden", "true", 1, "nf-partner-image"], [1, "nf-partner-copy"], ["id", "pnOpen", 1, "btn", "btn-primary", 3, "click"], [1, "nf-bottom"], [2, "font-family", "var(--mono)"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.youtube.com/embed/s1Rxs7rWd2I?autoplay=1`, "title", "XcellHost YouTube video", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], ["type", "button", "aria-label", "Play XcellHost video", 1, "nf-video-poster", 3, "click"], ["src", "https://i.ytimg.com/vi/s1Rxs7rWd2I/hqdefault.jpg", "alt", ""], ["aria-hidden", "true", 1, "nf-video-play"], [1, "nf-video-caption"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
      \u0275\u0275element(5, "img", 4);
      \u0275\u0275elementStart(6, "div", 5)(7, "p");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "span");
      \u0275\u0275text(11, "Reliable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Secure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "Speed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "Scalable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Manageable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Compliant");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "a", 7);
      \u0275\u0275element(23, "img", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p", 9);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 10)(27, "a", 11);
      \u0275\u0275text(28, "in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 12);
      \u0275\u0275text(30, "\u25B6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "a", 13);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(32, "svg", 14);
      \u0275\u0275element(33, "rect", 15)(34, "circle", 16)(35, "circle", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(36, "a", 18);
      \u0275\u0275text(37, "P");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 19);
      \u0275\u0275text(39, "f");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 20);
      \u0275\u0275text(41, "X");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 21);
      \u0275\u0275text(43, "r");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 22)(45, "div", 23)(46, "h3");
      \u0275\u0275text(47, "Corporate Video");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 24);
      \u0275\u0275conditionalCreate(49, FooterComponent_Conditional_49_Template, 1, 0, "iframe", 25)(50, FooterComponent_Conditional_50_Template, 6, 0, "button", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 27);
      \u0275\u0275text(52, "Watch on YouTube \u2197");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "div", 28)(54, "div", 29)(55, "h4", 30);
      \u0275\u0275text(56, "About Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div", 31)(58, "a", 32);
      \u0275\u0275text(59, "About Xcellhost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "a", 32);
      \u0275\u0275text(61, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 32);
      \u0275\u0275text(63, "Our Story");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "a", 33);
      \u0275\u0275text(65, "Our Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 34);
      \u0275\u0275text(67, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "a", 35);
      \u0275\u0275text(69, "Payment Methods");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "a", 36);
      \u0275\u0275text(71, "Promos & Offers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "a", 37);
      \u0275\u0275text(73, "Company Profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "a", 38);
      \u0275\u0275text(75, "Career Handbook");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "a", 39);
      \u0275\u0275text(77, "Partner Program");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "a", 40);
      \u0275\u0275text(79, "Media Kit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(80, "div", 29)(81, "h4", 30);
      \u0275\u0275text(82, "Catalog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 31);
      \u0275\u0275repeaterCreate(84, FooterComponent_For_85_Template, 2, 2, "a", 41, _forTrack09);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 29)(87, "span", 30);
      \u0275\u0275text(88, "Ebooks");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 31)(90, "a", 42);
      \u0275\u0275text(91, "State of Infrastructure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "a", 43);
      \u0275\u0275text(93, "State of Security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "a", 44);
      \u0275\u0275text(95, "Unified Cyber Defense Platform");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "a", 45);
      \u0275\u0275text(97, "How It Works Infrastructure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "a", 46);
      \u0275\u0275text(99, "How It Works Security");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "div", 29)(101, "span", 30);
      \u0275\u0275text(102, "Legal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 31)(104, "a", 47);
      \u0275\u0275text(105, "Terms & Conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "a", 48);
      \u0275\u0275text(107, "Acceptable Use Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "a", 49);
      \u0275\u0275text(109, "Privacy & Cookie Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "a", 50);
      \u0275\u0275text(111, "Refund Policy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "a", 51);
      \u0275\u0275text(113, "eKYC Verification");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 52);
      \u0275\u0275text(115, "Abuse Policy");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "div", 29)(117, "span", 30);
      \u0275\u0275text(118, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 31)(120, "a", 53);
      \u0275\u0275text(121, "Escalation Matrix");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "a", 54);
      \u0275\u0275text(123, "Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "a", 55);
      \u0275\u0275text(125, "We are Hiring");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "a", 56);
      \u0275\u0275text(127, "Knowledgebase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 57);
      \u0275\u0275text(129, "Glossary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "a", 58);
      \u0275\u0275text(131, "QR Codes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "a", 59);
      \u0275\u0275text(133, "Sitemap");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "a", 60);
      \u0275\u0275text(135, "Service Index");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(136, "div", 61)(137, "span", 30);
      \u0275\u0275text(138, "Certified For");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 62)(140, "a", 63)(141, "b");
      \u0275\u0275text(142, "ISO");
      \u0275\u0275elementEnd();
      \u0275\u0275text(143, "9001");
      \u0275\u0275elementStart(144, "em");
      \u0275\u0275text(145, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(146, "a", 64)(147, "b");
      \u0275\u0275text(148, "ISO");
      \u0275\u0275elementEnd();
      \u0275\u0275text(149, "27001");
      \u0275\u0275elementStart(150, "em");
      \u0275\u0275text(151, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "a", 65)(153, "b");
      \u0275\u0275text(154, "ISO");
      \u0275\u0275elementEnd();
      \u0275\u0275text(155, "27002");
      \u0275\u0275elementStart(156, "em");
      \u0275\u0275text(157, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(158, "a", 66)(159, "b");
      \u0275\u0275text(160, "ISO");
      \u0275\u0275elementEnd();
      \u0275\u0275text(161, "27017");
      \u0275\u0275elementStart(162, "em");
      \u0275\u0275text(163, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(164, "a", 67)(165, "b");
      \u0275\u0275text(166, "ISO");
      \u0275\u0275elementEnd();
      \u0275\u0275text(167, "27018");
      \u0275\u0275elementStart(168, "em");
      \u0275\u0275text(169, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "a", 68)(171, "b");
      \u0275\u0275text(172, "ISO");
      \u0275\u0275elementEnd();
      \u0275\u0275text(173, "29100");
      \u0275\u0275elementStart(174, "em");
      \u0275\u0275text(175, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "a", 69)(177, "b");
      \u0275\u0275text(178, "ISO");
      \u0275\u0275elementEnd();
      \u0275\u0275text(179, "20000-1");
      \u0275\u0275elementStart(180, "em");
      \u0275\u0275text(181, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "a", 70)(183, "b");
      \u0275\u0275text(184, "SOC 2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(185, "Type I");
      \u0275\u0275elementStart(186, "em");
      \u0275\u0275text(187, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "a", 71)(189, "b");
      \u0275\u0275text(190, "SOC 2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(191, "Type II");
      \u0275\u0275elementStart(192, "em");
      \u0275\u0275text(193, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(194, "a", 72);
      \u0275\u0275element(195, "b");
      \u0275\u0275text(196, "MEITY ");
      \u0275\u0275elementStart(197, "em");
      \u0275\u0275text(198, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(199, "a", 73);
      \u0275\u0275element(200, "b");
      \u0275\u0275text(201, "TIER IV");
      \u0275\u0275elementStart(202, "em");
      \u0275\u0275text(203, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(204, "a", 74)(205, "b");
      \u0275\u0275text(206, "CMM1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(207, "LEVEL 3");
      \u0275\u0275elementStart(208, "em");
      \u0275\u0275text(209, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(210, "a", 75);
      \u0275\u0275element(211, "b");
      \u0275\u0275text(212, "DPDPA");
      \u0275\u0275elementStart(213, "em");
      \u0275\u0275text(214, "COMPLIANT");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(215, "a", 76);
      \u0275\u0275element(216, "b");
      \u0275\u0275text(217, "GEM");
      \u0275\u0275elementStart(218, "em");
      \u0275\u0275text(219, "REGISTERED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(220, "a", 77);
      \u0275\u0275element(221, "b");
      \u0275\u0275text(222, "VAPT");
      \u0275\u0275elementStart(223, "em");
      \u0275\u0275text(224, "CERTIFIED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(225, "a", 78);
      \u0275\u0275element(226, "b");
      \u0275\u0275text(227, "DUNS");
      \u0275\u0275elementStart(228, "em");
      \u0275\u0275text(229, "REGISTERED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(230, "a", 79);
      \u0275\u0275element(231, "b");
      \u0275\u0275text(232, "Justdial");
      \u0275\u0275elementStart(233, "em");
      \u0275\u0275text(234, "VERIFIED SUPPLIER");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(235, "a", 80);
      \u0275\u0275element(236, "b");
      \u0275\u0275text(237, "IndiaMart");
      \u0275\u0275elementStart(238, "em");
      \u0275\u0275text(239, "VERIFIED SUPPLIER");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "span", 81);
      \u0275\u0275text(241, "NIXI");
      \u0275\u0275elementStart(242, "em");
      \u0275\u0275text(243, "ACCREDITED");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(244, "a", 82);
      \u0275\u0275text(245, "Google");
      \u0275\u0275elementStart(246, "em");
      \u0275\u0275text(247, "VERIFIED BUSINESS");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(248, "div", 61)(249, "span", 30);
      \u0275\u0275text(250, "Payment Options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "div", 83)(252, "span", 84)(253, "i");
      \u0275\u0275text(254, "VISA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(255, "span", 85);
      \u0275\u0275element(256, "i", 86);
      \u0275\u0275elementStart(257, "span");
      \u0275\u0275text(258, "Mastercard");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(259, "span", 87)(260, "i");
      \u0275\u0275text(261, "AMEX");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "span", 88);
      \u0275\u0275element(263, "i", 86);
      \u0275\u0275elementStart(264, "span");
      \u0275\u0275text(265, "Maestro");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(266, "span", 89)(267, "i", 90);
      \u0275\u0275text(268, "P");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "span");
      \u0275\u0275text(270, "PayPal");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "span", 91)(272, "span");
      \u0275\u0275text(273, "amazon ");
      \u0275\u0275elementStart(274, "b");
      \u0275\u0275text(275, "pay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(276, "span", 92)(277, "i", 93);
      \u0275\u0275text(278, "account_balance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(279, "span");
      \u0275\u0275text(280, "Bank Transfer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(281, "span", 94)(282, "i", 93);
      \u0275\u0275text(283, "receipt_long");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "span");
      \u0275\u0275text(285, "Cheque");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(286, "span", 95)(287, "i", 90);
      \u0275\u0275text(288, "P");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(289, "span");
      \u0275\u0275text(290, "PhonePe");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(291, "span", 96)(292, "i")(293, "b");
      \u0275\u0275text(294, "pay");
      \u0275\u0275elementEnd();
      \u0275\u0275text(295, "tm");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(296, "span", 97);
      \u0275\u0275element(297, "i", 90);
      \u0275\u0275elementStart(298, "b");
      \u0275\u0275text(299, "UPI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "span", 98)(301, "i");
      \u0275\u0275text(302, "Ru");
      \u0275\u0275elementStart(303, "span");
      \u0275\u0275text(304, "Pay");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(305, "b", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "span", 99);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(307, "svg", 100);
      \u0275\u0275element(308, "path", 101);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(309, "i");
      \u0275\u0275text(310, "Razorpay");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(311, "div", 61)(312, "span", 30);
      \u0275\u0275text(313, "Protected By");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(314, "div", 102);
      \u0275\u0275element(315, "img", 103)(316, "img", 104)(317, "img", 105);
      \u0275\u0275elementStart(318, "span", 106);
      \u0275\u0275element(319, "img", 107);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(320, "span", 108);
      \u0275\u0275text(321, "\u{1F512} SiteLock \u2014 MALWARE-FREE \xB7 xcellhost.cloud");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(322, "div", 61)(323, "span", 30);
      \u0275\u0275text(324, "Trusted & Reviewed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(325, "div", 109)(326, "div", 110)(327, "a", 111)(328, "span", 112);
      \u0275\u0275text(329, "G");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(330, "span", 113)(331, "strong");
      \u0275\u0275text(332, "Google Reviews");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(333, "span", 114)(334, "b");
      \u0275\u0275text(335, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "small");
      \u0275\u0275text(337, "4.6 \xB7 120+ reviews");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(338, "a", 115)(339, "span", 112);
      \u0275\u0275text(340, "\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "span", 113)(342, "strong");
      \u0275\u0275text(343, "Trustpilot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "span", 114)(345, "b");
      \u0275\u0275text(346, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "small");
      \u0275\u0275text(348, "4.2 Excellent");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(349, "a", 116)(350, "span", 112);
      \u0275\u0275text(351, "f");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "span", 113)(353, "strong");
      \u0275\u0275text(354, "Facebook");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(355, "span", 114)(356, "b");
      \u0275\u0275text(357, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "small");
      \u0275\u0275text(359, "4.7 Recommended");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(360, "div", 117)(361, "div", 118);
      \u0275\u0275element(362, "img", 119);
      \u0275\u0275elementStart(363, "div", 120)(364, "b");
      \u0275\u0275text(365, "Grow & Make Money with XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "span");
      \u0275\u0275text(367, "Resell 300+ services with recurring margins, technical backing and deal support.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(368, "button", 121);
      \u0275\u0275listener("click", function FooterComponent_Template_button_click_368_listener() {
        return ctx.openPartner();
      });
      \u0275\u0275text(369, "\u{1F91D} Join Us as Partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(370, "div", 122)(371, "span");
      \u0275\u0275text(372);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "span", 123);
      \u0275\u0275text(374, "CIN:U72100MH2000PTC124789 GSTIN:27AAACO4131D1ZY MSME:UDYAM\u2011MH\u201118\u20110006227 PAN:AAACO4131D TAN : MUMO02130C");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("Secure Cloud Services for your online business since ", ctx.site.since, ".");
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate2("XcellHost Cloud Services \u2014 a leading Managed Cloud Service Provider since ", ctx.site.since, " based out of ", ctx.site.city, ", INDIA, providing Managed Cloud Services across the globe. We help customers manage Public Clouds (AWS, Azure, GCP, Oracle) + Private Clouds across the entire Cloud Management Lifecycle: Assessment, Migration, Deployment, Management, Monitoring, Security and DevOps \u2014 delivered through a Cloud-based ServiceDesk + Management Platform. Our SaaS-based Cloud Marketplace helps enterprises consume 300+ Cloud Services and simplifies Cloud Billing + Provisioning + Partner Management, combined with Managed 24\xD77 NOC + SOC Services.");
      \u0275\u0275advance(24);
      \u0275\u0275conditional(ctx.videoStarted() ? 49 : 50);
      \u0275\u0275advance(35);
      \u0275\u0275repeater(ctx.catalogLinks);
      \u0275\u0275advance(56);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(25, _c07));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(26, _c15));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(27, _c22));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(28, _c3));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(29, _c4));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(30, _c5));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(31, _c6));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(32, _c7));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(33, _c8));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(34, _c9));
      \u0275\u0275advance(5);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(35, _c10));
      \u0275\u0275advance(5);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(36, _c11));
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(37, _c122));
      \u0275\u0275advance(5);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(38, _c132));
      \u0275\u0275advance(5);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(39, _c142));
      \u0275\u0275advance(5);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(40, _c152));
      \u0275\u0275advance(5);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(41, _c16));
      \u0275\u0275advance(5);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(42, _c17));
      \u0275\u0275advance(137);
      \u0275\u0275textInterpolate3("\xA9 ", ctx.site.since, "\u2013", ctx.year, " ", ctx.site.company, " All rights reserved.");
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "xh-footer", changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "display: contents" }, imports: [RouterLink], template: `<footer>\r
<div class="wrap">\r
  <div class="nf-top">\r
    <!-- Left: about + socials -->\r
    <div class="nf-about">\r
      <div class="nf-logo">\r
        <img class="xh-logo" src="/assets/images/xcellhost-logo.png" alt="XcellHost \u2014 Cloud | Security | AI">\r
        <div class="nf-tag">\r
          <p>Secure Cloud Services for your online business since {{ site.since }}.</p>\r
          <div class="nf-values"><span>Reliable</span> <span>Secure</span> <span>Speed</span> <span>Scalable</span> <span>Manageable</span> <span>Compliant</span></div>\r
        </div>\r
        <a routerLink="/company/support-overview" aria-label="XcellHost support"><img class="nf-buddha" src="/assets/images/laughing-buddha.png" alt="XcellHost Support \u2014 24\xD77 Delightful Support"></a>\r
      </div>\r
      <p class="nf-desc">XcellHost Cloud Services \u2014 a leading Managed Cloud Service Provider since {{ site.since }} based out of {{ site.city }}, INDIA, providing Managed Cloud Services across the globe. We help customers manage Public Clouds (AWS, Azure, GCP, Oracle) + Private Clouds across the entire Cloud Management Lifecycle: Assessment, Migration, Deployment, Management, Monitoring, Security and DevOps \u2014 delivered through a Cloud-based ServiceDesk + Management Platform. Our SaaS-based Cloud Marketplace helps enterprises consume 300+ Cloud Services and simplifies Cloud Billing + Provisioning + Partner Management, combined with Managed 24\xD77 NOC + SOC Services.</p>\r
      <div class="nf-social">\r
        <a href="https://www.linkedin.com/in/samirjhaveri/" aria-label="LinkedIn" class="nfs" style="background:#0A66C2">in</a>\r
        <a href="https://www.youtube.com/@XcellHostCloudServices" aria-label="YouTube" class="nfs" style="background:#FF0000">\u25B6</a>\r
        <a href="https://www.instagram.com/xcellhost_cloud/" aria-label="Instagram" class="nfs" style="background:linear-gradient(45deg,#F09433,#E6683C,#DC2743,#CC2366,#BC1888)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a>\r
        <a href="https://in.pinterest.com/XcellHostCloud99/" aria-label="Pinterest" class="nfs" style="background:#E60023">P</a>\r
        <a href="https://www.facebook.com/XcellHost.Cloud.Pvt.Ltd" aria-label="Facebook" class="nfs" style="background:#1877F2">f</a>\r
        <a href="https://x.com/xcellcloud" aria-label="X" class="nfs" style="background:#000">X</a>\r
        <a href="#" aria-label="Reddit" class="nfs" style="background:#FF4500">r</a>\r
      </div>\r
    </div>\r
    <div class="nf-video">\r
      <div class="nf-video-head">\r
        <!-- <span class="nf-video-kicker">Media</span> -->\r
        <h3>Corporate Video</h3>\r
      </div>\r
      <div class="nf-video-frame">\r
        @if (videoStarted()) {\r
          <iframe\r
            src="https://www.youtube.com/embed/s1Rxs7rWd2I?autoplay=1"\r
            title="XcellHost YouTube video"\r
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\r
            referrerpolicy="strict-origin-when-cross-origin"\r
            allowfullscreen\r
          ></iframe>\r
        } @else {\r
          <button class="nf-video-poster" type="button" aria-label="Play XcellHost video" (click)="videoStarted.set(true)">\r
            <img src="https://i.ytimg.com/vi/s1Rxs7rWd2I/hqdefault.jpg" alt="">\r
            <span class="nf-video-play" aria-hidden="true">\u25B6</span>\r
            <span class="nf-video-caption">Play XcellHost video</span>\r
          </button>\r
        }\r
      </div>\r
      <a class="nf-video-link" href="https://www.youtube.com/watch?v=s1Rxs7rWd2I" target="_blank" rel="noopener noreferrer">Watch on YouTube \u2197</a>\r
    </div>\r
  </div>\r
\r
  <!-- horizontal rows: About Us / Catalog / Ebooks / Legal / Quick Links -->\r
  <div class="nf-rows">\r
    <div class="nf-row"><h4 class="nf-rlbl">About Us</h4>\r
      <div class="nf-links">\r
        <a routerLink="/about-us">About Xcellhost</a>\r
        <a routerLink="/about-us">Our Team</a><a routerLink="/about-us">Our Story</a><a href="https://xcellhost.cloud/support-overview">Our Support</a>\r
        <a routerLink="/contact">Contact Us</a><a routerLink="/payment-methods">Payment Methods</a>\r
        <a routerLink="/promotion-and-offers">Promos &amp; Offers</a>\r
        <a href="https://flipbooks.officeinfra.com/books/Company-Profile/#p=1" target="_blank" rel="noopener noreferrer">Company Profile</a>\r
        <a routerLink="/career-handbook">Career Handbook</a>\r
        <a routerLink="/partner-program">Partner Program</a>\r
        <a routerLink="/media-kit">Media Kit</a>\r
      </div>\r
    </div>\r
    <div class="nf-row"><h4 class="nf-rlbl">Catalog</h4>\r
      <div class="nf-links">\r
        @for (entry of catalogLinks; track entry.name) {\r
          <a [href]="entry.href" target="_blank" rel="noopener noreferrer">{{ entry.name }}</a>\r
        }\r
      </div>\r
    </div>\r
    <div class="nf-row"><span class="nf-rlbl">Ebooks</span>\r
      <div class="nf-links"><a href="https://flipbooks.officeinfra.com/books/wout/" target="_blank" rel="noopener noreferrer">State of Infrastructure</a>\r
        <a href="https://flipbooks.officeinfra.com/books/zrdc/" target="_blank" rel="noopener noreferrer">State of Security</a>\r
        <a href="https://online.fliphtml5.com/dzuan/dtiq/" target="_blank" rel="noopener noreferrer">Unified Cyber Defense Platform</a>\r
        <a href="https://online.fliphtml5.com/dzuan/qgnd/#p=1" target="_blank" rel="noopener noreferrer">How It Works Infrastructure</a>\r
        <a href="https://online.fliphtml5.com/dzuan/zyzu/#p=1" target="_blank" rel="noopener noreferrer">How It Works Security</a></div>\r
    </div>\r
    <div class="nf-row"><span class="nf-rlbl">Legal</span>\r
      <div class="nf-links">\r
        <a routerLink="/company/terms-of-service">Terms &amp; Conditions</a>\r
        <a routerLink="/company/acceptable-use-policy">Acceptable Use Policy</a>\r
        <a routerLink="/company/privacy-policy">Privacy &amp; Cookie Policy</a>\r
        <a routerLink="/company/refund-policy">Refund Policy</a>\r
        <a routerLink="/company/ekyc-verification">eKYC Verification</a>\r
        <a routerLink="/company/abuse-policy">Abuse Policy</a>\r
      </div>\r
    </div>\r
    <div class="nf-row"><span class="nf-rlbl">Quick Links</span>\r
      <div class="nf-links"><a routerLink="/escalation-matrix">Escalation Matrix</a><a routerLink="/customer-testimonials">Testimonials</a><a class="nf-hot" routerLink="/company/apply-for-job">We are Hiring</a><a href="https://supportdesk.xcellhost.cloud/portal/en/kb" target="_blank" rel="noopener noreferrer">Knowledgebase</a><a href="https://www.xcellhost.cloud/glossary/" target="_blank" rel="noopener noreferrer">Glossary</a><a href="https://www.xcellhost.cloud/qr-codes/" target="_blank" rel="noopener noreferrer">QR Codes</a><a href="https://www.xcellhost.cloud/sitemap/" target="_blank" rel="noopener noreferrer">Sitemap</a><a href="https://www.xcellhost.cloud/service-index/" target="_blank" rel="noopener noreferrer">Service Index</a></div>\r
    </div>\r
  </div>\r
\r
  <!-- certified + payment -->\r
  <div class="nf-cert-row">\r
    <span class="nf-rlbl">Certified For</span>\r
    <div class="nf-isos">\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 2 }" fragment="certifications-title" aria-label="View ISO 9001 certification"><b>ISO</b>9001<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 0 }" fragment="certifications-title" aria-label="View ISO IEC 27001 2013 certification"><b>ISO</b>27001<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 3 }" fragment="certifications-title" aria-label="View ISO 27002 certification"><b>ISO</b>27002<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 4 }" fragment="certifications-title" aria-label="View ISO 27017 certification"><b>ISO</b>27017<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 5 }" fragment="certifications-title" aria-label="View ISO 27018 certification"><b>ISO</b>27018<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 6 }" fragment="certifications-title" aria-label="View ISO 29100 certification"><b>ISO</b>29100<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 1 }" fragment="certifications-title" aria-label="View ISO IEC 20000-1 2018 certification"><b>ISO</b>20000-1<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 7 }" fragment="certifications-title" aria-label="View SOC 2 Type I certification"><b>SOC 2</b>Type I<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 8 }" fragment="certifications-title" aria-label="View SOC 2 Type II certification"><b>SOC 2</b>Type II<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 9 }" fragment="certifications-title" aria-label="View MEITY certification"><b></b>MEITY <em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 10 }" fragment="certifications-title" aria-label="View Tier IV certification"><b></b>TIER IV<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 11 }" fragment="certifications-title" aria-label="View CMM1 Level 3 certification"><b>CMM1</b>LEVEL 3<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 12 }" fragment="certifications-title" aria-label="View DPDPA compliance"><b></b>DPDPA<em>COMPLIANT</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 13 }" fragment="certifications-title" aria-label="View GEM registration"><b></b>GEM<em>REGISTERED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 14 }" fragment="certifications-title" aria-label="View VAPT certification"><b></b>VAPT<em>CERTIFIED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 15 }" fragment="certifications-title" aria-label="View DUNS registration"><b></b>DUNS<em>REGISTERED</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 16 }" fragment="certifications-title" aria-label="View Justdial verified supplier credential"><b></b>Justdial<em>VERIFIED SUPPLIER</em></a>\r
      <a class="nf-iso" routerLink="/company/certifications-awards" [queryParams]="{ certification: 17 }" fragment="certifications-title" aria-label="View IndiaMart verified supplier credential"><b></b>IndiaMart<em>VERIFIED SUPPLIER</em></a>\r
      <span class="nf-iso" aria-label="NIXI Accredited">NIXI<em>ACCREDITED</em></span>\r
      <a class="nf-iso" href="https://www.google.com/search?q=XcellHost+Cloud+Services+Private+Limited" target="_blank" rel="noopener noreferrer" aria-label="Find XcellHost's verified business on Google (opens in a new tab)">Google<em>VERIFIED BUSINESS</em></a>\r
    </div>\r
  </div>\r
  <div class="nf-cert-row">\r
    <span class="nf-rlbl">Payment Options</span>\r
    <div class="nf-pays" role="list" aria-label="Accepted payment methods">\r
      <span class="nf-pay pay-visa" role="listitem" aria-label="Visa"><i>VISA</i></span>\r
      <span class="nf-pay pay-mastercard" role="listitem" aria-label="Mastercard"><i class="pay-circles" aria-hidden="true"></i><span>Mastercard</span></span>\r
      <span class="nf-pay pay-amex" role="listitem" aria-label="American Express"><i>AMEX</i></span>\r
      <span class="nf-pay pay-maestro" role="listitem" aria-label="Maestro"><i class="pay-circles" aria-hidden="true"></i><span>Maestro</span></span>\r
      <span class="nf-pay pay-paypal" role="listitem" aria-label="PayPal"><i aria-hidden="true">P</i><span>PayPal</span></span>\r
      <span class="nf-pay pay-amazon" role="listitem" aria-label="Amazon Pay"><span>amazon <b>pay</b></span></span>\r
      <span class="nf-pay pay-bank" role="listitem"><i class="material-symbols-outlined" aria-hidden="true">account_balance</i><span>Bank Transfer</span></span>\r
      <span class="nf-pay pay-cheque" role="listitem"><i class="material-symbols-outlined" aria-hidden="true">receipt_long</i><span>Cheque</span></span>\r
      <span class="nf-pay pay-phonepe" role="listitem" aria-label="PhonePe"><i aria-hidden="true">P</i><span>PhonePe</span></span>\r
      <span class="nf-pay pay-paytm" role="listitem" aria-label="Paytm"><i><b>pay</b>tm</i></span>\r
      <span class="nf-pay pay-upi" role="listitem" aria-label="UPI"><i aria-hidden="true"></i><b>UPI</b></span>\r
      <span class="nf-pay pay-rupay" role="listitem" aria-label="RuPay"><i>Ru<span>Pay</span></i><b aria-hidden="true"></b></span>\r
      <span class="nf-pay pay-razorpay" role="listitem" aria-label="Razorpay"><svg width="15" height="20" viewBox="0 0 15 20" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 0 0 11h5L2 20 15 6H9l4-6Z" /></svg><i>Razorpay</i></span>\r
    </div>\r
  </div>\r
  <div class="nf-cert-row">\r
    <span class="nf-rlbl">Protected By</span>\r
    <div class="nf-prot">\r
      <img class="nf-sitelock-image" src="/assets/images/sitelock-protected.png" alt="SiteLock malware-free protection" />\r
      <img class="nf-protection-image" src="/assets/images/geotrust-secured-powered-by-digicert.png" alt="GeoTrust Secured powered by DigiCert" />\r
      <img class="nf-protection-image" src="/assets/images/footer-trust-badge.webp" alt="Security trust badge" />\r
      <span class="nf-acronis-badge"><img src="/assets/images/acronis-cyber-protect-cloud.png" alt="Powered by Acronis Cyber Protect Cloud" width="1117" height="479" loading="lazy" /></span>\r
      <span class="nf-sitelock">\u{1F512} SiteLock \u2014 MALWARE-FREE \xB7 xcellhost.cloud</span>\r
    </div>\r
  </div>\r
  <div class="nf-cert-row">\r
    <span class="nf-rlbl">Trusted &amp; Reviewed</span>\r
    <div class="nf-review-band" aria-label="Trusted and reviewed">\r
        <div class="nf-review-grid">\r
          <a class="nf-review-card is-google" href="https://www.google.com/search?q=XcellHost+reviews" target="_blank" rel="noopener noreferrer" aria-label="Read Google reviews for XcellHost">\r
            <span class="nf-review-icon" aria-hidden="true">G</span>\r
            <span class="nf-review-copy">\r
              <strong>Google Reviews</strong>\r
              <span class="nf-review-meta"><b>\u2605\u2605\u2605\u2605\u2605</b><small>4.6 \xB7 120+ reviews</small></span>\r
            </span>\r
          </a>\r
          <a class="nf-review-card is-trustpilot" href="https://www.trustpilot.com/" target="_blank" rel="noopener noreferrer" aria-label="View Trustpilot profile">\r
            <span class="nf-review-icon" aria-hidden="true">\u2605</span>\r
            <span class="nf-review-copy">\r
              <strong>Trustpilot</strong>\r
              <span class="nf-review-meta"><b>\u2605\u2605\u2605\u2605\u2605</b><small>4.2 Excellent</small></span>\r
            </span>\r
          </a>\r
          <a class="nf-review-card is-facebook" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="View Facebook reviews">\r
            <span class="nf-review-icon" aria-hidden="true">f</span>\r
            <span class="nf-review-copy">\r
              <strong>Facebook</strong>\r
              <span class="nf-review-meta"><b>\u2605\u2605\u2605\u2605\u2605</b><small>4.7 Recommended</small></span>\r
            </span>\r
          </a>\r
        </div>\r
    </div>\r
  </div>\r
\r
  <div class="nf-partner">\r
    <div class="nf-partner-intro">\r
      <img class="nf-partner-image" src="/assets/images/partner-handshake.svg" width="64" height="64" alt="" aria-hidden="true">\r
      <div class="nf-partner-copy"><b>Grow & Make Money with XcellHost</b><span>Resell 300+ services with recurring margins, technical backing and deal support.</span></div>\r
    </div>\r
    <button class="btn btn-primary" id="pnOpen" (click)="openPartner()">\u{1F91D} Join Us as Partner</button>\r
  </div>\r
\r
  <div class="nf-bottom">\r
    <span>\xA9 {{ site.since }}\u2013{{ year }} {{ site.company }} All rights reserved.</span>\r
    <span style="font-family:var(--mono)">CIN:U72100MH2000PTC124789 GSTIN:27AAACO4131D1ZY MSME:UDYAM\u2011MH\u201118\u20110006227 PAN:AAACO4131D TAN : MUMO02130C</span>\r
  </div>\r
</div>\r
</footer>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/layout/footer.component.ts", lineNumber: 36 });
})();

// src/app/app.ts
function App_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 0)(1, "xh-intro-splash")(2, "xh-utility-bar")(3, "xh-promo-bar")(4, "xh-header");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r0.scrollProgress(), "%");
  }
}
function App_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "xh-contact-options")(1, "xh-footer");
  }
}
function App_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "xh-whatsapp-fab")(1, "xh-back-to-top");
  }
}
var App = class _App {
  scrollProgress = signal(0, ...ngDevMode ? [{ debugName: "scrollProgress" }] : []);
  overlay = inject(OverlayService);
  docs = inject(DocRequestService);
  topics = inject(CallbackTopicService);
  router = inject(Router);
  document = inject(DOCUMENT);
  destroyRef = inject(DestroyRef);
  isPortalLogin = toSignal(this.router.events.pipe(filter((event) => event instanceof NavigationEnd), startWith(null), map(() => /^\/(?:signup|(?:customer|partner|vendor|employee)-login)(?:[/?#]|$)/.test(this.router.url))), { initialValue: false });
  constructor() {
    inject(SiteCopyService);
    const captureClick = (event) => this.onDocumentClick(event);
    this.document.addEventListener("click", captureClick, true);
    this.destroyRef.onDestroy(() => this.document.removeEventListener("click", captureClick, true));
  }
  updateScrollProgress() {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(documentHeight > 0 ? Math.min(100, Math.max(0, window.scrollY / documentHeight * 100)) : 0);
  }
  onEscape() {
    this.overlay.closeTop();
  }
  /** Same-origin standalone hero documents hand their gated CTAs back to Angular. */
  onHeroMessage(event) {
    const currentWindow = this.document.defaultView;
    if (!currentWindow || event.origin !== currentWindow.location.origin)
      return;
    const sourceFrame = Array.from(this.document.querySelectorAll("iframe.supplied-smb-hero-frame")).find((frame) => frame.contentWindow === event.source);
    if (!sourceFrame)
      return;
    const message = event.data;
    if (message?.type !== "xcellhost:hero-action" || message.action !== "infosheet")
      return;
    const product = sourceFrame.title.replace(/\s+interactive overview$/i, "").trim();
    this.docs.ask("infosheet", product || this.document.title);
    this.overlay.open("doc");
  }
  /** Future pages only need a CTA labelled "Let's Talk" or "Talk to Sales". */
  onDocumentClick(event) {
    if (event.defaultPrevented || event.button !== 0)
      return;
    const target = event.target;
    const cta = target?.closest("a, button");
    if (!cta || cta.hasAttribute("disabled") || cta.dataset["ctaHandled"] === "true")
      return;
    const label = (cta.textContent ?? "").replace(/\s+/g, " ").trim();
    if (/\binfosheet\b/i.test(label)) {
      if (this.overlay.isOpen("doc"))
        return;
      event.preventDefault();
      event.stopPropagation();
      this.docs.ask("infosheet", this.infosheetProductName(cta));
      this.overlay.open("doc");
      return;
    }
    if (/^(?:start(?: your)?(?: \d+-day)?|ask for|\d+ day's)?\s*free trial(?:\s*→)?$/i.test(label)) {
      event.preventDefault();
      event.stopPropagation();
      this.overlay.open("trial");
      return;
    }
    if (!/^(let'?s talk|talk to sales|talk to us)$/i.test(label))
      return;
    event.preventDefault();
    event.stopPropagation();
    this.topics.ask(cta.dataset["cbtopic"]?.trim() || "");
    this.overlay.open("callback");
  }
  infosheetProductName(cta) {
    const explicitName = cta.dataset["product"]?.trim();
    if (explicitName)
      return explicitName;
    const localHeading = cta.closest("section")?.querySelector("h1");
    const pageHeading = document.querySelector("main h1, #ppTitle, h1");
    return (localHeading?.textContent || pageHeading?.textContent || document.title).replace(/\s+/g, " ").trim();
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], hostAttrs: [2, "display", "contents"], hostBindings: function App_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown.escape", function App_keydown_escape_HostBindingHandler() {
        return ctx.onEscape();
      }, \u0275\u0275resolveDocument)("scroll", function App_scroll_HostBindingHandler() {
        return ctx.updateScrollProgress();
      }, \u0275\u0275resolveWindow)("resize", function App_resize_HostBindingHandler() {
        return ctx.updateScrollProgress();
      }, \u0275\u0275resolveWindow)("message", function App_message_HostBindingHandler($event) {
        return ctx.onHeroMessage($event);
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 11, vars: 3, consts: [["aria-hidden", "true", 1, "site-progress"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, App_Conditional_0_Template, 5, 2);
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275conditionalCreate(2, App_Conditional_2_Template, 2, 0);
      \u0275\u0275element(3, "xh-cart-drawer")(4, "xh-chatbot")(5, "xh-search-dialog")(6, "xh-callback-modal")(7, "xh-trial-modal")(8, "xh-partner-modal")(9, "xh-doc-modal");
      \u0275\u0275conditionalCreate(10, App_Conditional_10_Template, 2, 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(!ctx.isPortalLogin() ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.isPortalLogin() ? 2 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(!ctx.isPortalLogin() ? 10 : -1);
    }
  }, dependencies: [
    RouterOutlet,
    IntroSplashComponent,
    UtilityBarComponent,
    PromoBarComponent,
    HeaderComponent,
    ContactOptionsComponent,
    FooterComponent,
    CartDrawerComponent,
    ChatbotComponent,
    SearchDialogComponent,
    CallbackModalComponent,
    TrialModalComponent,
    PartnerModalComponent,
    DocModalComponent,
    WhatsappFabComponent,
    BackToTopComponent
  ], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [
      RouterOutlet,
      IntroSplashComponent,
      UtilityBarComponent,
      PromoBarComponent,
      HeaderComponent,
      ContactOptionsComponent,
      FooterComponent,
      CartDrawerComponent,
      ChatbotComponent,
      SearchDialogComponent,
      CallbackModalComponent,
      TrialModalComponent,
      PartnerModalComponent,
      DocModalComponent,
      WhatsappFabComponent,
      BackToTopComponent
    ], host: {
      style: "display:contents",
      "(document:keydown.escape)": "onEscape()",
      "(window:scroll)": "updateScrollProgress()",
      "(window:resize)": "updateScrollProgress()",
      "(window:message)": "onHeroMessage($event)"
    }, changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (!isPortalLogin()) {\r\n  <div class="site-progress" [style.width.%]="scrollProgress()" aria-hidden="true"></div>\r\n  <xh-intro-splash />\r\n  <xh-utility-bar />\r\n  <xh-promo-bar />\r\n  <xh-header />\r\n}\r\n\r\n<router-outlet />\r\n\r\n@if (!isPortalLogin()) {\r\n  <xh-contact-options />\r\n  <xh-footer />\r\n}\r\n\r\n<!-- =====================================================================\r\n     GLOBAL OVERLAY HOSTS\r\n\r\n     Everything that floats above the page lives outside the router outlet so\r\n     it survives navigation. Escape is bound once on the app host (app.ts) and\r\n     calls OverlayService.closeTop() \u2014 overlays must not re-bind it.\r\n     ===================================================================== -->\r\n<xh-cart-drawer />\r\n<xh-chatbot />\r\n<xh-search-dialog />\r\n<xh-callback-modal />\r\n<xh-trial-modal />\r\n<xh-partner-modal />\r\n<xh-doc-modal />\r\n@if (!isPortalLogin()) {\r\n  <xh-whatsapp-fab />\r\n  <xh-back-to-top />\r\n}\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 70 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
