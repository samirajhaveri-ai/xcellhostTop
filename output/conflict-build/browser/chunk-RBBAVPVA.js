import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/druva-demo.data.ts
var DRUVA_DEMO_VIDEOS = [
  { id: 1, title: "AI Resilience Overview", url: "https://www.druva.com/learning-center/resources/media/videos/ai-resilience-overview", type: "Video", workloads: ["AI"], topics: ["AI Resilience", "Recovery"], description: "Protect AI data and workflows with trusted backup intelligence and confident recovery." },
  { id: 2, title: "Druva Identity Resilience Overview", url: "https://www.druva.com/learning-center/resources/media/videos/identity-resilience-overview", type: "Video", workloads: ["Identity"], topics: ["Identity Resilience", "Recovery"], description: "Recover compromised identity layers using high-fidelity insights and surgical rollback." },
  { id: 3, title: "Druva Platform Overview", url: "https://www.druva.com/learning-center/resources/media/videos/druva-platform-overview", type: "Video", workloads: ["Platform"], topics: ["Cyber Resilience", "Overview"], description: "See how Druva delivers cloud-era cyber resilience without infrastructure overhead." },
  { id: 4, title: "Threat Insights: Stop Threats Before They Strike", url: "https://www.druva.com/learning-center/resources/media/videos/threat-insights-animated", type: "Video", workloads: ["Platform"], topics: ["Threat Insights", "Cyber Resilience"], description: "Use backup intelligence to uncover threats, prevent reinfection and validate clean restore points." },
  { id: 5, title: "Enterprise Grade eDiscovery from Druva", url: "https://www.druva.com/learning-center/resources/media/videos/enterprise-grade-ediscovery", type: "Video", workloads: ["SaaS Apps"], topics: ["eDiscovery", "Compliance"], description: "Streamline legal discovery with cloud-native search, legal hold and governance." },
  { id: 6, title: "Cloud Native Cyber Resilience Done Right", url: "https://www.druva.com/learning-center/resources/media/videos/cloud-native-cyber-resilience-done-right", type: "Video", workloads: ["Platform"], topics: ["Cyber Resilience", "Cloud Native"], description: "Explore immutable cloud-native protection across workloads with efficient storage and no hidden infrastructure." },
  { id: 7, title: "ROBO \u2014 Remote & Branch Office Data Protection", url: "https://www.druva.com/learning-center/resources/media/videos/video-robo-data-protection", type: "Product Demo", workloads: ["Remote Offices"], topics: ["Data Protection", "Ransomware"], description: "Protect remote and branch offices with scalable recovery, zero trust and cloud resilience." },
  { id: 8, title: "DruAI Lifecycle Agent", url: "https://www.druva.com/learning-center/resources/media/videos/video-druai-lifecycle-agent", type: "Video", workloads: ["AI"], topics: ["Dru AI", "Data Governance"], description: "Map and manage backup data with AI-driven lifecycle intelligence for cost, compliance and governance." },
  { id: 9, title: "DruAI Insights Agent", url: "https://www.druva.com/learning-center/resources/media/videos/video-druai-insights-agent", type: "Video", workloads: ["AI"], topics: ["Dru AI", "Observability"], description: "Understand backup health, trends and opportunities to optimise protection and spend." },
  { id: 10, title: "DruAI \u2014 Agentic Data Security", url: "https://www.druva.com/learning-center/resources/media/videos/video-druai-agentic-data-security", type: "Video", workloads: ["AI"], topics: ["Dru AI", "Data Security"], description: "See autonomous agents detect, respond to and prevent threats across cloud and on-premises data." },
  { id: 11, title: "Cyber Resilience for VMware", url: "https://www.druva.com/learning-center/resources/media/videos/video-cyber-resilience-vmware", type: "Video", workloads: ["VMware"], topics: ["Cyber Resilience", "Backup"], description: "Protect VMware with automated, immutable backups and AI-powered threat detection and recovery." },
  { id: 12, title: "Protect, Govern, and Recover End User Devices", url: "https://www.druva.com/learning-center/resources/media/videos/video-protect-govern-endpoints", type: "Video", workloads: ["Endpoints"], topics: ["Data Protection", "Governance"], description: "Secure and govern endpoint and SaaS data with a fully managed cloud-native service." },
  { id: 13, title: "Druva and Microsoft Azure Integration", url: "https://www.druva.com/learning-center/resources/media/videos/video-druva-microsoft-partnership", type: "Video", workloads: ["Microsoft Azure"], topics: ["Cloud Data Security", "Integration"], description: "Learn how Druva and Microsoft provide scalable data security across Microsoft environments." },
  { id: 14, title: "Checkmate Cyber Threats: Generative AI for Data Security", url: "https://www.druva.com/learning-center/resources/media/videos/video-checkmate-cyber-threats", type: "Video", workloads: ["AWS", "AI"], topics: ["Data Security", "Generative AI"], description: "See how Druva and AWS combine intelligence and cloud scale to protect critical data." },
  { id: 15, title: "Rethink Data Center Management and Harness the Cloud", url: "https://www.druva.com/learning-center/resources/media/videos/video-data-center-consolidation", type: "Video", workloads: ["Data Center"], topics: ["Cloud Native", "Modernisation"], description: "Replace complex infrastructure with automated security and cloud-scale data resilience." },
  { id: 16, title: "Druva Curated Recovery", url: "https://www.druva.com/learning-center/resources/media/videos/video-curated-recovery", type: "Product Demo", workloads: ["Platform"], topics: ["Recovery", "Ransomware"], description: "Automatically identify and recover the latest clean copy of data across backup points." },
  { id: 17, title: "Managed DDR: Monitoring, Response, and Recovery 24/7/365", url: "https://www.druva.com/learning-center/resources/media/videos/video-managed-ddr-lightboard", type: "Video", workloads: ["Platform"], topics: ["Managed DDR", "Threat Response"], description: "Discover always-on monitoring and response delivered through Druva\u2019s SaaS platform." },
  { id: 18, title: "Accelerate Cyber Incident Response", url: "https://www.druva.com/learning-center/resources/media/videos/video-incident-response-workflow", type: "Video", workloads: ["Platform"], topics: ["Incident Response", "Recovery"], description: "Close gaps in monitoring, analysis, clean recovery and cyber forensics." },
  { id: 19, title: "Bompard Keeps Microsoft Data Secure with Druva", url: "https://www.druva.com/learning-center/resources/media/videos/video-bompard-testimonial", type: "Customer Story", workloads: ["Microsoft 365"], topics: ["Customer Story", "Data Protection"], description: "Hear how Bompard relies on Druva to protect its Microsoft ecosystem." },
  { id: 20, title: "Modern Data Protection vs. Legacy", url: "https://www.druva.com/learning-center/resources/media/videos/video-modern-data-protection-vs-legacy", type: "Video", workloads: ["Platform"], topics: ["Modernisation", "TCO"], description: "Compare fully managed SaaS protection with the operational burden of legacy backup." },
  { id: 21, title: "Druva over Veeam: The Simplicity of SaaS", url: "https://www.druva.com/learning-center/resources/media/videos/video-druva-vs-veeam-simplicity", type: "Video", workloads: ["Platform"], topics: ["SaaS", "TCO"], description: "Explore infrastructure-free data protection, on-demand recovery and lower operational cost." },
  { id: 22, title: "Protecting Microsoft 365 Data", url: "https://www.druva.com/learning-center/resources/media/videos/video-protecting-m365-data", type: "Video", workloads: ["Microsoft 365"], topics: ["Backup", "Compliance"], description: "Protect growing Microsoft 365 data while supporting compliance and reducing internal and external risk." },
  { id: 23, title: "Cyber Attack Readiness Animated Overview", url: "https://www.druva.com/learning-center/resources/media/videos/video-cyber-attack-readiness-animated", type: "Video", workloads: ["Platform"], topics: ["Cyber Resilience", "Readiness"], description: "Understand how visibility and actionable insights strengthen the backup last line of defence." }
];

// src/app/pages/druva-demo-center.page.ts
var _forTrack0 = ($index, $item) => $item.id;
function DruvaDemoCenterPage_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r1);
  }
}
function DruvaDemoCenterPage_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const workload_r2 = ctx.$implicit;
    \u0275\u0275property("value", workload_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(workload_r2);
  }
}
function DruvaDemoCenterPage_For_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const topic_r3 = ctx.$implicit;
    \u0275\u0275property("value", topic_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(topic_r3);
  }
}
function DruvaDemoCenterPage_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function DruvaDemoCenterPage_Conditional_59_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clearFilters());
    });
    \u0275\u0275text(1, "Clear all filters");
    \u0275\u0275elementEnd();
  }
}
function DruvaDemoCenterPage_Conditional_60_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 27);
  }
  if (rf & 2) {
    const video_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", video_r7.embedUrl, \u0275\u0275sanitizeResourceUrl)("title", video_r7.title);
  }
}
function DruvaDemoCenterPage_Conditional_60_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function DruvaDemoCenterPage_Conditional_60_For_2_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const video_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.playVideo(video_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2, "DRUVA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const video_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", "Play " + video_r7.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(video_r7.workloads[0]);
  }
}
function DruvaDemoCenterPage_Conditional_60_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const workload_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(workload_r9);
  }
}
function DruvaDemoCenterPage_Conditional_60_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 24)(1, "div", 26);
    \u0275\u0275conditionalCreate(2, DruvaDemoCenterPage_Conditional_60_For_2_Conditional_2_Template, 1, 2, "iframe", 27)(3, DruvaDemoCenterPage_Conditional_60_For_2_Conditional_3_Template, 6, 2, "button", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(8, DruvaDemoCenterPage_Conditional_60_For_2_For_9_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 31);
    \u0275\u0275listener("click", function DruvaDemoCenterPage_Conditional_60_For_2_Template_button_click_14_listener() {
      const video_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.playVideo(video_r7.id));
    });
    \u0275\u0275text(15, "Play video ");
    \u0275\u0275elementStart(16, "span", 4);
    \u0275\u0275text(17, "\u25B6");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const video_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.activeVideoId() === video_r7.id ? 2 : 3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(video_r7.type);
    \u0275\u0275advance();
    \u0275\u0275repeater(video_r7.workloads.slice(0, 1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r7.description);
  }
}
function DruvaDemoCenterPage_Conditional_60_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "button", 32);
    \u0275\u0275listener("click", function DruvaDemoCenterPage_Conditional_60_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.showMore());
    });
    \u0275\u0275text(2, "Show more videos ");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r4.visibleVideos().length, " of ", ctx_r4.filteredVideos().length);
  }
}
function DruvaDemoCenterPage_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, DruvaDemoCenterPage_Conditional_60_For_2_Template, 18, 4, "article", 24, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DruvaDemoCenterPage_Conditional_60_Conditional_3_Template, 5, 2, "div", 25);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r4.visibleVideos());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r4.hasMoreVideos() ? 3 : -1);
  }
}
function DruvaDemoCenterPage_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h3");
    \u0275\u0275text(2, "No videos match these filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try a broader search or reset the selected filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 32);
    \u0275\u0275listener("click", function DruvaDemoCenterPage_Conditional_61_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.clearFilters());
    });
    \u0275\u0275text(6, "Reset filters");
    \u0275\u0275elementEnd()();
  }
}
var WISTIA_MEDIA_IDS = {
  1: "9z4ncl2pyz",
  2: "wjo83ovvv3",
  3: "ph1mbl6nig",
  4: "s69w3k6vhw",
  5: "gskajw130m",
  6: "lsf97gj4mk",
  7: "bect6om3ys",
  8: "pomhvc8kjv",
  9: "4d0av6htn3",
  10: "jsd1jed3t5",
  11: "ewzql05w3f",
  12: "ck8lj6b3ub",
  13: "pwvjj32jqb",
  14: "jslkvbwz9w",
  15: "7moctxhr4m",
  16: "fbdpyy7bfj",
  17: "dvx5gy00ej",
  18: "jwrsl5sjr8",
  19: "41s4anp50x",
  20: "n4nomi19gh",
  21: "41bgejnkd9",
  22: "83uhw512hx",
  23: "3yudz16g62"
};
var DruvaDemoCenterPage = class _DruvaDemoCenterPage {
  pageSize = 12;
  sanitizer = inject(DomSanitizer);
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  selectedType = signal("", ...ngDevMode ? [{ debugName: "selectedType" }] : []);
  selectedWorkload = signal("", ...ngDevMode ? [{ debugName: "selectedWorkload" }] : []);
  selectedTopic = signal("", ...ngDevMode ? [{ debugName: "selectedTopic" }] : []);
  sortMode = signal("featured", ...ngDevMode ? [{ debugName: "sortMode" }] : []);
  visibleCount = signal(this.pageSize, ...ngDevMode ? [{ debugName: "visibleCount" }] : []);
  activeVideoId = signal(null, ...ngDevMode ? [{ debugName: "activeVideoId" }] : []);
  videos = DRUVA_DEMO_VIDEOS.map((video) => __spreadProps(__spreadValues({}, video), {
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(`https://fast.wistia.net/embed/iframe/${WISTIA_MEDIA_IDS[video.id]}?seo=true&videoFoam=true&autoPlay=true`)
  }));
  types = [...new Set(this.videos.map((video) => video.type))].sort();
  workloads = [...new Set(this.videos.flatMap((video) => video.workloads))].sort();
  topics = [...new Set(this.videos.flatMap((video) => video.topics))].sort();
  filteredVideos = computed(() => {
    const search = this.searchTerm().trim().toLocaleLowerCase();
    const type = this.selectedType();
    const workload = this.selectedWorkload();
    const topic = this.selectedTopic();
    const results = this.videos.filter((video) => {
      const text = [video.title, video.description, ...video.workloads, ...video.topics].join(" ").toLocaleLowerCase();
      return (!search || text.includes(search)) && (!type || video.type === type) && (!workload || video.workloads.includes(workload)) && (!topic || video.topics.includes(topic));
    });
    return this.sortMode() === "title" ? [...results].sort((left, right) => left.title.localeCompare(right.title)) : results;
  }, ...ngDevMode ? [{ debugName: "filteredVideos" }] : []);
  visibleVideos = computed(() => this.filteredVideos().slice(0, this.visibleCount()), ...ngDevMode ? [{ debugName: "visibleVideos" }] : []);
  hasMoreVideos = computed(() => this.visibleCount() < this.filteredVideos().length, ...ngDevMode ? [{ debugName: "hasMoreVideos" }] : []);
  filtersAreActive = computed(() => Boolean(this.searchTerm() || this.selectedType() || this.selectedWorkload() || this.selectedTopic()), ...ngDevMode ? [{ debugName: "filtersAreActive" }] : []);
  constructor() {
    inject(SeoService).set("Druva Demo Center | Product Videos | XcellHost", "Explore Druva cyber resilience, cloud backup, recovery, AI, Microsoft 365, VMware and data protection videos.", "/druva-demo-center/");
  }
  setSearch(value) {
    this.searchTerm.set(value);
    this.resetResults();
  }
  setType(value) {
    this.selectedType.set(value);
    this.resetResults();
  }
  setWorkload(value) {
    this.selectedWorkload.set(value);
    this.resetResults();
  }
  setTopic(value) {
    this.selectedTopic.set(value);
    this.resetResults();
  }
  setSort(value) {
    this.sortMode.set(value === "title" ? "title" : "featured");
    this.resetResults();
  }
  showMore() {
    this.visibleCount.update((count) => count + this.pageSize);
  }
  playVideo(id) {
    this.activeVideoId.set(id);
  }
  clearFilters() {
    this.searchTerm.set("");
    this.selectedType.set("");
    this.selectedWorkload.set("");
    this.selectedTopic.set("");
    this.resetResults();
  }
  resetResults() {
    this.visibleCount.set(this.pageSize);
    this.activeVideoId.set(null);
  }
  static \u0275fac = function DruvaDemoCenterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DruvaDemoCenterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DruvaDemoCenterPage, selectors: [["xh-druva-demo-center-page"]], decls: 74, vars: 7, consts: [[1, "druva-demo-page"], [1, "druva-demo-wrap"], ["aria-label", "Breadcrumb", 1, "druva-demo-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], ["aria-labelledby", "druva-results-title", 1, "druva-catalog"], [1, "druva-catalog-toolbar"], [1, "druva-demo-eyebrow"], ["id", "druva-results-title"], [1, "druva-sort"], [3, "change", "value"], ["value", "featured"], ["value", "title"], [1, "druva-filters"], [1, "druva-search"], ["type", "search", "placeholder", "Search by workload, capability or topic", 3, "input", "value"], ["value", ""], [3, "value"], ["type", "button", 1, "druva-clear-filters"], [1, "druva-empty-state"], [1, "druva-source-note"], ["href", "https://www.druva.com/learning-center/resources/videos", "target", "_blank", "rel", "noopener noreferrer"], ["type", "button", 1, "druva-clear-filters", 3, "click"], [1, "druva-video-grid"], [1, "druva-video-card"], [1, "druva-show-more"], [1, "druva-video-media"], ["allow", "autoplay; fullscreen", "allowfullscreen", "", 3, "src", "title"], ["type", "button"], [1, "druva-video-copy"], [1, "druva-video-tags"], ["type", "button", 1, "druva-watch", 3, "click"], ["type", "button", 3, "click"], [1, "druva-media-brand"], [1, "druva-media-topic"], ["aria-hidden", "true", 1, "druva-play"]], template: function DruvaDemoCenterPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Experience Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Druva Demo Center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "section", 5)(14, "div", 6)(15, "div")(16, "span", 7);
      \u0275\u0275text(17, "Cyber resilience videos and product demos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h1", 8);
      \u0275\u0275text(19, "Druva Demo Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "p");
      \u0275\u0275text(21, "Explore official Druva videos covering cloud backup, cyber recovery, AI, SaaS applications, endpoints and data-center workloads.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "label", 9)(23, "span");
      \u0275\u0275text(24, "Sort by");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 10);
      \u0275\u0275listener("change", function DruvaDemoCenterPage_Template_select_change_25_listener($event) {
        return ctx.setSort($event.target.value);
      });
      \u0275\u0275elementStart(26, "option", 11);
      \u0275\u0275text(27, "Featured");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option", 12);
      \u0275\u0275text(29, "Title A\u2013Z");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(30, "div", 13)(31, "label", 14)(32, "span");
      \u0275\u0275text(33, "Search videos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 15);
      \u0275\u0275listener("input", function DruvaDemoCenterPage_Template_input_input_34_listener($event) {
        return ctx.setSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "label")(36, "span");
      \u0275\u0275text(37, "Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "select", 10);
      \u0275\u0275listener("change", function DruvaDemoCenterPage_Template_select_change_38_listener($event) {
        return ctx.setType($event.target.value);
      });
      \u0275\u0275elementStart(39, "option", 16);
      \u0275\u0275text(40, "All types");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(41, DruvaDemoCenterPage_For_42_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "label")(44, "span");
      \u0275\u0275text(45, "Workload");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 10);
      \u0275\u0275listener("change", function DruvaDemoCenterPage_Template_select_change_46_listener($event) {
        return ctx.setWorkload($event.target.value);
      });
      \u0275\u0275elementStart(47, "option", 16);
      \u0275\u0275text(48, "All workloads");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(49, DruvaDemoCenterPage_For_50_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "label")(52, "span");
      \u0275\u0275text(53, "Topic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "select", 10);
      \u0275\u0275listener("change", function DruvaDemoCenterPage_Template_select_change_54_listener($event) {
        return ctx.setTopic($event.target.value);
      });
      \u0275\u0275elementStart(55, "option", 16);
      \u0275\u0275text(56, "All topics");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(57, DruvaDemoCenterPage_For_58_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(59, DruvaDemoCenterPage_Conditional_59_Template, 2, 0, "button", 18);
      \u0275\u0275conditionalCreate(60, DruvaDemoCenterPage_Conditional_60_Template, 4, 1)(61, DruvaDemoCenterPage_Conditional_61_Template, 7, 0, "div", 19);
      \u0275\u0275elementStart(62, "aside", 20)(63, "div")(64, "span");
      \u0275\u0275text(65, "Official resource library");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "h2");
      \u0275\u0275text(67, "Browse the complete Druva video catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p");
      \u0275\u0275text(69, "Druva currently lists 96 video resources. Visit the source library for the full collection and the newest additions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "a", 21);
      \u0275\u0275text(71, "View all Druva videos ");
      \u0275\u0275elementStart(72, "span", 4);
      \u0275\u0275text(73, "\u2197");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275property("value", ctx.sortMode());
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.selectedType());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.types);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.selectedWorkload());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.workloads);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.selectedTopic());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.topics);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtersAreActive() ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visibleVideos().length ? 60 : 61);
    }
  }, dependencies: [RouterLink], styles: ['\n\n.druva-demo-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  padding: 38px 24px 88px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f8f5 0,\n      #fff 440px);\n  color: #082b5d;\n}\n.druva-demo-wrap[_ngcontent-%COMP%] {\n  max-width: 1310px;\n  margin: 0 auto;\n}\n.druva-demo-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 27px;\n  color: #607393;\n  font-size: 12px;\n}\n.druva-demo-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #08785c;\n  text-decoration: none;\n}\n.druva-demo-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.druva-demo-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  color: #08785c;\n  font: 700 11px/1.4 var(--mono,monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.druva-catalog-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 30px;\n  margin-bottom: 22px;\n}\n.druva-catalog-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #082b5d;\n  font: 750 clamp(29px, 3vw, 39px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n}\n.druva-catalog-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 10px 0 0;\n  color: #607393;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.druva-sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex: none;\n}\n.druva-sort[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #607393;\n  font-size: 12px;\n  font-weight: 700;\n}\n.druva-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.druva-filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr repeat(3, 1fr);\n  gap: 10px;\n  padding: 16px;\n  border: 1px solid #d7e3df;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 9px 25px rgba(8, 74, 57, .06);\n}\n.druva-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.druva-sort[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.druva-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 6px;\n  color: #3b5679;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n.druva-filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.druva-filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.druva-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  padding: 0 11px;\n  border: 1px solid #cbd9d4;\n  border-radius: 8px;\n  background: #fff;\n  color: #173b68;\n  font: 600 12px/1 var(--body,sans-serif);\n  outline: none;\n}\n.druva-filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.druva-filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.druva-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #0a9470;\n  box-shadow: 0 0 0 3px rgba(10, 148, 112, .12);\n}\n.druva-clear-filters[_ngcontent-%COMP%] {\n  margin: 13px 0 2px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #08785c;\n  font-size: 12px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.druva-video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 26px 18px;\n  margin-top: 25px;\n}\n.druva-video-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #d7e3df;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 8px 23px rgba(8, 43, 94, .07);\n  transition: transform .2s, box-shadow .2s;\n}\n.druva-video-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 33px rgba(8, 74, 57, .13);\n}\n.druva-video-media[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 82% 16%,\n      rgba(98, 246, 195, .38),\n      transparent 28%),\n    linear-gradient(\n      135deg,\n      #041f3b,\n      #08785c);\n  color: #fff;\n  text-decoration: none;\n}\n.druva-video-media[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .06) 1px,\n      transparent 1px);\n  background-size: 30px 30px;\n}\n.druva-media-brand[_ngcontent-%COMP%], \n.druva-media-topic[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  left: 19px;\n}\n.druva-media-brand[_ngcontent-%COMP%] {\n  top: 17px;\n  font: 800 15px/1 var(--disp,sans-serif);\n  letter-spacing: .12em;\n}\n.druva-media-topic[_ngcontent-%COMP%] {\n  bottom: 18px;\n  max-width: 65%;\n  font: 700 12px/1.3 var(--body,sans-serif);\n  text-transform: uppercase;\n}\n.druva-play[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  width: 64px;\n  height: 64px;\n  border: 2px solid rgba(255, 255, 255, .55);\n  border-radius: 50%;\n  background: #12a77e;\n  box-shadow: 0 8px 25px rgba(0, 35, 27, .3);\n  transform: translate(-50%, -50%);\n  transition: transform .2s;\n}\n.druva-play[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  top: 19px;\n  left: 26px;\n  border-top: 12px solid transparent;\n  border-bottom: 12px solid transparent;\n  border-left: 18px solid #fff;\n}\n.druva-video-media[_ngcontent-%COMP%]:hover   .druva-play[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.druva-video-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 230px;\n  padding: 16px 17px 19px;\n}\n.druva-video-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  min-height: 21px;\n  margin-bottom: 9px;\n}\n.druva-video-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: #e8f8f2;\n  color: #08785c;\n  font: 700 9px/1.35 var(--mono,monospace);\n  letter-spacing: .06em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.druva-video-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #082b5d;\n  font: 750 17px/1.38 var(--disp,sans-serif);\n}\n.druva-video-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.druva-video-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #08785c;\n}\n.druva-video-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 9px 0 15px;\n  color: #607393;\n  font-size: 12px;\n  line-height: 1.55;\n}\n.druva-watch[_ngcontent-%COMP%] {\n  margin-top: auto;\n  color: #08785c;\n  font-size: 12px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.druva-show-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 34px;\n}\n.druva-show-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.druva-empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 19px;\n  border: 0;\n  border-radius: 9px;\n  background: #08785c;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.druva-show-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #c9f2e7;\n  font-size: 11px;\n}\n.druva-empty-state[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 54px 24px;\n  border: 1px dashed #b7d5cc;\n  border-radius: 17px;\n  background: #f7fbfa;\n  text-align: center;\n}\n.druva-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  font: 750 21px/1.3 var(--disp,sans-serif);\n}\n.druva-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #607393;\n  font-size: 13px;\n}\n.druva-source-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  margin-top: 70px;\n  padding: 33px 36px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #062b49,\n      #075f50);\n  color: #fff;\n}\n.druva-source-note[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #7ee2c5;\n  font: 700 10px/1.4 var(--mono,monospace);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.druva-source-note[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #fff;\n  font: 750 clamp(22px, 3vw, 29px)/1.25 var(--disp,sans-serif);\n}\n.druva-source-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0;\n  color: #d0ebe4;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.druva-source-note[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 12px 17px;\n  border-radius: 9px;\n  background: #12a77e;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n@media (max-width: 1000px) {\n  .druva-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .druva-catalog-toolbar[_ngcontent-%COMP%], \n   .druva-source-note[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .druva-sort[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .druva-filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .druva-search[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 600px) {\n  .druva-demo-page[_ngcontent-%COMP%] {\n    padding: 25px 16px 60px;\n  }\n  .druva-filters[_ngcontent-%COMP%], \n   .druva-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .druva-search[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .druva-source-note[_ngcontent-%COMP%] {\n    padding: 27px 23px;\n  }\n}\n/*# sourceMappingURL=druva-demo-center.page.css.map */', '\n\n.druva-video-media[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.druva-video-media[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], \n.druva-video-media[_ngcontent-%COMP%]    > iframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.druva-video-media[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  background:\n    radial-gradient(\n      circle at 82% 16%,\n      rgba(98, 246, 195, 0.38),\n      transparent 28%),\n    linear-gradient(\n      135deg,\n      #041f3b,\n      #08785c);\n  color: #fff;\n  cursor: pointer;\n}\n.druva-video-media[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]::after {\n  position: absolute;\n  inset: 0;\n  content: "";\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.06) 1px,\n      transparent 1px);\n  background-size: 30px 30px;\n}\n.druva-video-media[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover   .druva-play[_ngcontent-%COMP%], \n.druva-video-media[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:focus-visible   .druva-play[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.druva-video-media[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #12a77e;\n  outline-offset: -3px;\n}\n.druva-watch[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  font-family: inherit;\n  cursor: pointer;\n}\n.druva-watch[_ngcontent-%COMP%]:hover, \n.druva-watch[_ngcontent-%COMP%]:focus-visible {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=druva-demo-center.player.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DruvaDemoCenterPage, [{
    type: Component,
    args: [{ selector: "xh-druva-demo-center-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="druva-demo-page">\r
  <div class="druva-demo-wrap">\r
    <nav class="druva-demo-breadcrumb" aria-label="Breadcrumb">\r
      <a routerLink="/">Home</a><span aria-hidden="true">/</span><span>Experience Center</span><span aria-hidden="true">/</span><span>Druva Demo Center</span>\r
    </nav>\r
\r
    <section class="druva-catalog" aria-labelledby="druva-results-title">\r
      <div class="druva-catalog-toolbar">\r
        <div>\r
          <span class="druva-demo-eyebrow">Cyber resilience videos and product demos</span>\r
          <h1 id="druva-results-title">Druva Demo Center</h1>\r
          <p>Explore official Druva videos covering cloud backup, cyber recovery, AI, SaaS applications, endpoints and data-center workloads.</p>\r
        </div>\r
        <label class="druva-sort"><span>Sort by</span><select [value]="sortMode()" (change)="setSort($any($event.target).value)"><option value="featured">Featured</option><option value="title">Title A\u2013Z</option></select></label>\r
      </div>\r
\r
      <div class="druva-filters">\r
        <label class="druva-search"><span>Search videos</span><input type="search" placeholder="Search by workload, capability or topic" [value]="searchTerm()" (input)="setSearch($any($event.target).value)" /></label>\r
        <label><span>Type</span><select [value]="selectedType()" (change)="setType($any($event.target).value)"><option value="">All types</option>@for (type of types; track type) { <option [value]="type">{{ type }}</option> }</select></label>\r
        <label><span>Workload</span><select [value]="selectedWorkload()" (change)="setWorkload($any($event.target).value)"><option value="">All workloads</option>@for (workload of workloads; track workload) { <option [value]="workload">{{ workload }}</option> }</select></label>\r
        <label><span>Topic</span><select [value]="selectedTopic()" (change)="setTopic($any($event.target).value)"><option value="">All topics</option>@for (topic of topics; track topic) { <option [value]="topic">{{ topic }}</option> }</select></label>\r
      </div>\r
\r
      @if (filtersAreActive()) { <button class="druva-clear-filters" type="button" (click)="clearFilters()">Clear all filters</button> }\r
\r
      @if (visibleVideos().length) {\r
        <div class="druva-video-grid">\r
          @for (video of visibleVideos(); track video.id) {\r
            <article class="druva-video-card">\r
              <div class="druva-video-media">\r
                @if (activeVideoId() === video.id) {\r
                  <iframe [src]="video.embedUrl" [title]="video.title" allow="autoplay; fullscreen" allowfullscreen></iframe>\r
                } @else {\r
                  <button type="button" (click)="playVideo(video.id)" [attr.aria-label]="'Play ' + video.title">\r
                    <span class="druva-media-brand">DRUVA</span><span class="druva-media-topic">{{ video.workloads[0] }}</span><span class="druva-play" aria-hidden="true"></span>\r
                  </button>\r
                }\r
              </div>\r
              <div class="druva-video-copy">\r
                <div class="druva-video-tags"><span>{{ video.type }}</span>@for (workload of video.workloads.slice(0, 1); track workload) { <span>{{ workload }}</span> }</div>\r
                <h3>{{ video.title }}</h3>\r
                <p>{{ video.description }}</p>\r
                <button class="druva-watch" type="button" (click)="playVideo(video.id)">Play video <span aria-hidden="true">&#9654;</span></button>\r
              </div>\r
            </article>\r
          }\r
        </div>\r
        @if (hasMoreVideos()) { <div class="druva-show-more"><button type="button" (click)="showMore()">Show more videos <span>{{ visibleVideos().length }} of {{ filteredVideos().length }}</span></button></div> }\r
      } @else {\r
        <div class="druva-empty-state"><h3>No videos match these filters</h3><p>Try a broader search or reset the selected filters.</p><button type="button" (click)="clearFilters()">Reset filters</button></div>\r
      }\r
\r
      <aside class="druva-source-note">\r
        <div><span>Official resource library</span><h2>Browse the complete Druva video catalogue</h2><p>Druva currently lists 96 video resources. Visit the source library for the full collection and the newest additions.</p></div>\r
        <a href="https://www.druva.com/learning-center/resources/videos" target="_blank" rel="noopener noreferrer">View all Druva videos <span aria-hidden="true">\u2197</span></a>\r
      </aside>\r
    </section>\r
  </div>\r
</main>\r
`, styles: ['/* src/app/pages/druva-demo-center.page.css */\n.druva-demo-page {\n  min-height: 70vh;\n  padding: 38px 24px 88px;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f8f5 0,\n      #fff 440px);\n  color: #082b5d;\n}\n.druva-demo-wrap {\n  max-width: 1310px;\n  margin: 0 auto;\n}\n.druva-demo-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 27px;\n  color: #607393;\n  font-size: 12px;\n}\n.druva-demo-breadcrumb a {\n  color: #08785c;\n  text-decoration: none;\n}\n.druva-demo-breadcrumb a:hover {\n  text-decoration: underline;\n}\n.druva-demo-eyebrow {\n  display: block;\n  margin-bottom: 10px;\n  color: #08785c;\n  font: 700 11px/1.4 var(--mono,monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.druva-catalog-toolbar {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 30px;\n  margin-bottom: 22px;\n}\n.druva-catalog-toolbar h1 {\n  margin: 0;\n  color: #082b5d;\n  font: 750 clamp(29px, 3vw, 39px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n}\n.druva-catalog-toolbar p {\n  max-width: 820px;\n  margin: 10px 0 0;\n  color: #607393;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.druva-sort {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex: none;\n}\n.druva-sort span {\n  color: #607393;\n  font-size: 12px;\n  font-weight: 700;\n}\n.druva-sort select {\n  width: 130px;\n}\n.druva-filters {\n  display: grid;\n  grid-template-columns: 2fr repeat(3, 1fr);\n  gap: 10px;\n  padding: 16px;\n  border: 1px solid #d7e3df;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 9px 25px rgba(8, 74, 57, .06);\n}\n.druva-filters label,\n.druva-sort {\n  min-width: 0;\n}\n.druva-filters label > span {\n  display: block;\n  margin: 0 0 6px;\n  color: #3b5679;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n.druva-filters input,\n.druva-filters select,\n.druva-sort select {\n  width: 100%;\n  height: 42px;\n  padding: 0 11px;\n  border: 1px solid #cbd9d4;\n  border-radius: 8px;\n  background: #fff;\n  color: #173b68;\n  font: 600 12px/1 var(--body,sans-serif);\n  outline: none;\n}\n.druva-filters input:focus,\n.druva-filters select:focus,\n.druva-sort select:focus {\n  border-color: #0a9470;\n  box-shadow: 0 0 0 3px rgba(10, 148, 112, .12);\n}\n.druva-clear-filters {\n  margin: 13px 0 2px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #08785c;\n  font-size: 12px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.druva-video-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 26px 18px;\n  margin-top: 25px;\n}\n.druva-video-card {\n  overflow: hidden;\n  border: 1px solid #d7e3df;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 8px 23px rgba(8, 43, 94, .07);\n  transition: transform .2s, box-shadow .2s;\n}\n.druva-video-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 33px rgba(8, 74, 57, .13);\n}\n.druva-video-media {\n  position: relative;\n  display: block;\n  aspect-ratio: 16/9;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 82% 16%,\n      rgba(98, 246, 195, .38),\n      transparent 28%),\n    linear-gradient(\n      135deg,\n      #041f3b,\n      #08785c);\n  color: #fff;\n  text-decoration: none;\n}\n.druva-video-media:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .06) 1px,\n      transparent 1px);\n  background-size: 30px 30px;\n}\n.druva-media-brand,\n.druva-media-topic {\n  position: absolute;\n  z-index: 1;\n  left: 19px;\n}\n.druva-media-brand {\n  top: 17px;\n  font: 800 15px/1 var(--disp,sans-serif);\n  letter-spacing: .12em;\n}\n.druva-media-topic {\n  bottom: 18px;\n  max-width: 65%;\n  font: 700 12px/1.3 var(--body,sans-serif);\n  text-transform: uppercase;\n}\n.druva-play {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  width: 64px;\n  height: 64px;\n  border: 2px solid rgba(255, 255, 255, .55);\n  border-radius: 50%;\n  background: #12a77e;\n  box-shadow: 0 8px 25px rgba(0, 35, 27, .3);\n  transform: translate(-50%, -50%);\n  transition: transform .2s;\n}\n.druva-play:after {\n  content: "";\n  position: absolute;\n  top: 19px;\n  left: 26px;\n  border-top: 12px solid transparent;\n  border-bottom: 12px solid transparent;\n  border-left: 18px solid #fff;\n}\n.druva-video-media:hover .druva-play {\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.druva-video-copy {\n  display: flex;\n  flex-direction: column;\n  min-height: 230px;\n  padding: 16px 17px 19px;\n}\n.druva-video-tags {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  min-height: 21px;\n  margin-bottom: 9px;\n}\n.druva-video-tags span {\n  max-width: 100%;\n  overflow: hidden;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: #e8f8f2;\n  color: #08785c;\n  font: 700 9px/1.35 var(--mono,monospace);\n  letter-spacing: .06em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.druva-video-copy h3 {\n  margin: 0;\n  color: #082b5d;\n  font: 750 17px/1.38 var(--disp,sans-serif);\n}\n.druva-video-copy h3 a {\n  color: inherit;\n  text-decoration: none;\n}\n.druva-video-copy h3 a:hover {\n  color: #08785c;\n}\n.druva-video-copy p {\n  margin: 9px 0 15px;\n  color: #607393;\n  font-size: 12px;\n  line-height: 1.55;\n}\n.druva-watch {\n  margin-top: auto;\n  color: #08785c;\n  font-size: 12px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.druva-show-more {\n  display: flex;\n  justify-content: center;\n  margin-top: 34px;\n}\n.druva-show-more button,\n.druva-empty-state button {\n  padding: 12px 19px;\n  border: 0;\n  border-radius: 9px;\n  background: #08785c;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.druva-show-more button span {\n  margin-left: 8px;\n  color: #c9f2e7;\n  font-size: 11px;\n}\n.druva-empty-state {\n  margin-top: 25px;\n  padding: 54px 24px;\n  border: 1px dashed #b7d5cc;\n  border-radius: 17px;\n  background: #f7fbfa;\n  text-align: center;\n}\n.druva-empty-state h3 {\n  margin: 0 0 7px;\n  font: 750 21px/1.3 var(--disp,sans-serif);\n}\n.druva-empty-state p {\n  margin: 0 0 18px;\n  color: #607393;\n  font-size: 13px;\n}\n.druva-source-note {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  margin-top: 70px;\n  padding: 33px 36px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #062b49,\n      #075f50);\n  color: #fff;\n}\n.druva-source-note > div > span {\n  display: block;\n  margin-bottom: 8px;\n  color: #7ee2c5;\n  font: 700 10px/1.4 var(--mono,monospace);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.druva-source-note h2 {\n  margin: 0 0 7px;\n  color: #fff;\n  font: 750 clamp(22px, 3vw, 29px)/1.25 var(--disp,sans-serif);\n}\n.druva-source-note p {\n  max-width: 720px;\n  margin: 0;\n  color: #d0ebe4;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.druva-source-note > a {\n  flex: none;\n  padding: 12px 17px;\n  border-radius: 9px;\n  background: #12a77e;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n@media (max-width: 1000px) {\n  .druva-video-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .druva-catalog-toolbar,\n  .druva-source-note {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .druva-sort {\n    width: 100%;\n  }\n  .druva-filters {\n    grid-template-columns: 1fr 1fr;\n  }\n  .druva-search {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 600px) {\n  .druva-demo-page {\n    padding: 25px 16px 60px;\n  }\n  .druva-filters,\n  .druva-video-grid {\n    grid-template-columns: 1fr;\n  }\n  .druva-search {\n    grid-column: auto;\n  }\n  .druva-source-note {\n    padding: 27px 23px;\n  }\n}\n/*# sourceMappingURL=druva-demo-center.page.css.map */\n', '/* src/app/pages/druva-demo-center.player.css */\n.druva-video-media::after {\n  display: none;\n}\n.druva-video-media > button,\n.druva-video-media > iframe {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.druva-video-media > button {\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  background:\n    radial-gradient(\n      circle at 82% 16%,\n      rgba(98, 246, 195, 0.38),\n      transparent 28%),\n    linear-gradient(\n      135deg,\n      #041f3b,\n      #08785c);\n  color: #fff;\n  cursor: pointer;\n}\n.druva-video-media > button::after {\n  position: absolute;\n  inset: 0;\n  content: "";\n  background-image:\n    linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.06) 1px,\n      transparent 1px);\n  background-size: 30px 30px;\n}\n.druva-video-media > button:hover .druva-play,\n.druva-video-media > button:focus-visible .druva-play {\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.druva-video-media > button:focus-visible {\n  outline: 3px solid #12a77e;\n  outline-offset: -3px;\n}\n.druva-watch {\n  align-self: flex-start;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  font-family: inherit;\n  cursor: pointer;\n}\n.druva-watch:hover,\n.druva-watch:focus-visible {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=druva-demo-center.player.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DruvaDemoCenterPage, { className: "DruvaDemoCenterPage", filePath: "src/app/pages/druva-demo-center.page.ts", lineNumber: 28 });
})();
export {
  DruvaDemoCenterPage
};
//# sourceMappingURL=chunk-RBBAVPVA.js.map
