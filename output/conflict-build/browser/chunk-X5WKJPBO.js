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
import {
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
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
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/data/cloud-glossary.data.ts
var CLOUD_GLOSSARY_TERMS = [
  {
    "category": "service",
    "term": "Amazon Web Services (AWS)",
    "definition": "A major cloud platform offering a wide range of software services and infrastructure \u2014 one of the largest cloud vendors."
  },
  {
    "category": "core",
    "term": "API (Application Programming Interface)",
    "definition": "A defined interface that lets two pieces of software communicate \u2014 requesting data or features from one another."
  },
  {
    "category": "core",
    "term": "Application (Cloud App)",
    "definition": "A software program; when hosted and run on remote cloud servers it\u2019s called a cloud app."
  },
  {
    "category": "infra",
    "term": "Auto-Failover",
    "definition": "Automatically switching to a standby system when the primary fails, to keep services running."
  },
  {
    "category": "devops",
    "term": "Automation",
    "definition": "Using tools and processes to run cloud tasks automatically instead of manually, to streamline and manage workloads."
  },
  {
    "category": "infra",
    "term": "Autoscaling",
    "definition": "Automatically adding or removing compute resources in response to demand, so performance stays steady and cost stays efficient."
  },
  {
    "category": "core",
    "term": "Availability",
    "definition": "Whether an app is online and running as it should; when it goes offline that\u2019s downtime."
  },
  {
    "category": "infra",
    "term": "Availability Zone",
    "definition": "An isolated data-centre location within a region, engineered to fail independently of the others for resilience."
  },
  {
    "category": "data",
    "term": "Backup (Cloud Backup)",
    "definition": "A cloud service that stores copies of data and applications off-site so they can be restored after loss or corruption."
  },
  {
    "category": "infra",
    "term": "Bare Metal Server",
    "definition": "A single-tenant physical server dedicated to one customer, with no virtualisation layer \u2014 maximum performance and control."
  },
  {
    "category": "infra",
    "term": "CDN (Content Delivery Network)",
    "definition": "A distributed network of edge servers that delivers content from the location nearest the user, cutting latency."
  },
  {
    "category": "devops",
    "term": "CI/CD",
    "definition": "Continuous Integration / Continuous Delivery \u2014 automatically building, testing and deploying code changes through a pipeline."
  },
  {
    "category": "core",
    "term": "Cloud Computing",
    "definition": "Delivering computing services \u2014 storage, networking, databases, compute \u2014 over the internet from remote servers rather than local hardware."
  },
  {
    "category": "infra",
    "term": "Cloud Firewall",
    "definition": "A firewall delivered as a cloud service that filters traffic to and from your cloud workloads."
  },
  {
    "category": "devops",
    "term": "Cloud Migration",
    "definition": "Moving digital operations \u2014 apps, data, infrastructure \u2014 from on-premises to the cloud (or between clouds)."
  },
  {
    "category": "devops",
    "term": "Cloud Native",
    "definition": "An application designed specifically to run on the cloud, using containers, microservices and managed services."
  },
  {
    "category": "core",
    "term": "Cloud Outage",
    "definition": "When cloud services become unavailable \u2014 due to power loss, connectivity issues or maintenance."
  },
  {
    "category": "devops",
    "term": "Cloud Repatriation",
    "definition": "Moving workloads back from public cloud to private cloud, colocation or on-prem, often for cost or control."
  },
  {
    "category": "service",
    "term": "Cloud Service Provider (CSP)",
    "definition": "A third-party company that provides cloud services \u2014 platforms, IaaS, storage, applications or management."
  },
  {
    "category": "infra",
    "term": "Cluster",
    "definition": "A group of physical or virtual computers working together on shared computing tasks."
  },
  {
    "category": "infra",
    "term": "Cold / Warm / Hot Site",
    "definition": "DR sites with increasing readiness \u2014 cold (bare), warm (partial), hot (fully redundant, near-instant failover)."
  },
  {
    "category": "infra",
    "term": "Colocation",
    "definition": "Housing your own hardware in a provider\u2019s data centre, using their power, cooling, security and connectivity."
  },
  {
    "category": "cost",
    "term": "Compliance",
    "definition": "Meeting protocol and legal standards so cloud services are secure and satisfy regulatory requirements."
  },
  {
    "category": "core",
    "term": "Compute",
    "definition": "The resources used to run an application \u2014 CPU, memory and storage on a cloud machine."
  },
  {
    "category": "devops",
    "term": "Container Orchestration",
    "definition": "Software (like Kubernetes) that automates deploying, scaling and managing containers at scale."
  },
  {
    "category": "devops",
    "term": "Containers / Containerization",
    "definition": "Packaging an app with its code, dependencies and libraries into a lightweight, portable virtualised unit."
  },
  {
    "category": "infra",
    "term": "Cross-Connect",
    "definition": "A physical or logical direct link between your equipment and a provider or network inside a data centre."
  },
  {
    "category": "cost",
    "term": "Data Residency",
    "definition": "The requirement that data is stored and processed within a specific country or region \u2014 key for DPDP and RBI compliance."
  },
  {
    "category": "data",
    "term": "Database",
    "definition": "Software designed to store, query and manage data; in the cloud, databases are often hosted as managed services."
  },
  {
    "category": "core",
    "term": "Deployment Models",
    "definition": "The ways cloud services are provisioned \u2014 public, private, hybrid and multi-cloud \u2014 each with different trade-offs."
  },
  {
    "category": "devops",
    "term": "DevOps",
    "definition": "A methodology uniting development and operations to build and deploy high-performing software quickly."
  },
  {
    "category": "infra",
    "term": "Disaster Recovery (DR)",
    "definition": "The plans and systems that restore IT operations quickly after a disruption or disaster."
  },
  {
    "category": "devops",
    "term": "Docker",
    "definition": "An open-source platform for building and running containers, with a suite of tools for containerised apps."
  },
  {
    "category": "core",
    "term": "Documentation",
    "definition": "User and support guides that explain how to use software correctly and fully."
  },
  {
    "category": "infra",
    "term": "Edge Computing",
    "definition": "Processing data close to where it\u2019s generated (at the network edge) to cut latency and bandwidth."
  },
  {
    "category": "cost",
    "term": "Egress",
    "definition": "Data leaving a cloud network; providers often charge egress fees for outbound data transfer."
  },
  {
    "category": "infra",
    "term": "Elasticity",
    "definition": "The ability to automatically scale resources up or down with changing demand, for performance and cost efficiency."
  },
  {
    "category": "core",
    "term": "Encryption",
    "definition": "Encoding data so only authorised parties can read it \u2014 protecting it in transit and at rest."
  },
  {
    "category": "infra",
    "term": "Fault Tolerance",
    "definition": "Designing systems to keep running despite failures, through redundancy, failover and data replication."
  },
  {
    "category": "cost",
    "term": "FinOps",
    "definition": "Cloud financial operations \u2014 the practice of managing, allocating and optimising cloud spend across teams."
  },
  {
    "category": "service",
    "term": "Google Cloud Platform (GCP)",
    "definition": "Google\u2019s cloud platform, one of the largest vendors, offering compute, data, AI and networking services."
  },
  {
    "category": "infra",
    "term": "High Availability (HA)",
    "definition": "Designing systems to minimise downtime through redundancy so services stay accessible near-continuously."
  },
  {
    "category": "infra",
    "term": "Host Machine",
    "definition": "The physical machine whose resources a hypervisor uses to run one or more guest virtual machines."
  },
  {
    "category": "core",
    "term": "Hybrid Cloud",
    "definition": "A mix of private and public cloud (and sometimes on-prem), keeping sensitive workloads private while using public scale."
  },
  {
    "category": "infra",
    "term": "Hypervisor",
    "definition": "Software that creates, runs and manages virtual machines, letting one physical host run several VMs."
  },
  {
    "category": "service",
    "term": "IaaS (Infrastructure as a Service)",
    "definition": "A cloud model that rents virtualised compute, storage and networking, without managing physical hardware."
  },
  {
    "category": "devops",
    "term": "IaC (Infrastructure as Code)",
    "definition": "Defining and provisioning infrastructure through code (e.g. Terraform) rather than manual setup."
  },
  {
    "category": "core",
    "term": "IAM (Identity & Access Management)",
    "definition": "The framework of policies and tools that controls who can access which cloud resources and what they can do."
  },
  {
    "category": "core",
    "term": "Infrastructure",
    "definition": "The foundational layer of cloud \u2014 compute, data centres, hardware, servers, networking and virtualisation software."
  },
  {
    "category": "infra",
    "term": "Ingress",
    "definition": "Traffic entering a cloud network or, in Kubernetes, the rules routing external traffic to services."
  },
  {
    "category": "data",
    "term": "IoT (Internet of Things)",
    "definition": "A network of connected devices and sensors that collect and exchange data, often processed and analysed in the cloud."
  },
  {
    "category": "data",
    "term": "JSON",
    "definition": "A lightweight, human-readable data format used widely for exchanging structured data between cloud services."
  },
  {
    "category": "devops",
    "term": "Kubernetes (K8s)",
    "definition": "An open-source platform that automates deploying, scaling and managing containerised applications across a cluster."
  },
  {
    "category": "infra",
    "term": "Latency",
    "definition": "The delay between a request and its response; lower latency means faster, more responsive applications."
  },
  {
    "category": "infra",
    "term": "Load Balancing",
    "definition": "Distributing traffic or workloads evenly across servers so no single resource is overwhelmed."
  },
  {
    "category": "service",
    "term": "Managed Cloud",
    "definition": "A model where the provider runs and maintains your cloud infrastructure \u2014 patching, monitoring and support included."
  },
  {
    "category": "devops",
    "term": "Microservices",
    "definition": "An architecture of small, independent services connected by APIs that together form an application."
  },
  {
    "category": "service",
    "term": "Microsoft Azure",
    "definition": "Microsoft\u2019s cloud platform, one of the largest vendors, spanning compute, data, AI and enterprise services."
  },
  {
    "category": "core",
    "term": "Multi-Cloud",
    "definition": "Using cloud services from more than one provider, to avoid lock-in and pick the best fit per workload."
  },
  {
    "category": "infra",
    "term": "Multi-Tenancy",
    "definition": "An architecture where one instance of software serves multiple customers (tenants), with their data isolated."
  },
  {
    "category": "data",
    "term": "NoSQL",
    "definition": "Non-relational databases with flexible schemas, built to scale horizontally for large, varied or unstructured data."
  },
  {
    "category": "data",
    "term": "Object Storage",
    "definition": "Storing data as objects (with metadata and a unique ID), ideal for unstructured data at scale \u2014 e.g. S3-compatible storage."
  },
  {
    "category": "core",
    "term": "On-Premises (On-Prem)",
    "definition": "Digital infrastructure \u2014 data centres, hardware, software \u2014 hosted in your own physical location."
  },
  {
    "category": "core",
    "term": "Open Source",
    "definition": "Software whose source code is freely available to inspect, modify and distribute without a paid licence."
  },
  {
    "category": "devops",
    "term": "Orchestration",
    "definition": "Automated coordination of tasks, resources and workflows to provision and manage cloud systems consistently."
  },
  {
    "category": "service",
    "term": "PaaS (Platform as a Service)",
    "definition": "A cloud model providing a ready platform to build, deploy and run apps without managing the underlying infrastructure."
  },
  {
    "category": "core",
    "term": "Platform",
    "definition": "An environment \u2014 hardware or software \u2014 that software is hosted and run on."
  },
  {
    "category": "core",
    "term": "Private Cloud",
    "definition": "Cloud resources dedicated to a single organisation, delivered over the internet or a private network."
  },
  {
    "category": "core",
    "term": "Public Cloud",
    "definition": "Cloud services shared across many customers over the public internet, often on-demand and pay-as-you-go."
  },
  {
    "category": "infra",
    "term": "Quantum Computing",
    "definition": "An emerging field using quantum mechanics and qubits to solve certain problems far faster than classical computers."
  },
  {
    "category": "infra",
    "term": "Region",
    "definition": "A geographic area containing multiple isolated availability zones where a provider runs data centres."
  },
  {
    "category": "data",
    "term": "Replication",
    "definition": "Keeping copies of data across multiple locations for availability, reliability and disaster recovery."
  },
  {
    "category": "cost",
    "term": "Reserved Instance",
    "definition": "A discounted commitment to use a certain amount of cloud compute over a term, in exchange for lower rates."
  },
  {
    "category": "core",
    "term": "Resource",
    "definition": "Any component used in computing \u2014 compute, memory, storage, network \u2014 physical or virtual, sometimes shared."
  },
  {
    "category": "data",
    "term": "Restore",
    "definition": "Reverting a system, files or settings back to an earlier copy, typically after a crash or data loss."
  },
  {
    "category": "infra",
    "term": "RTO / RPO",
    "definition": "Recovery Time Objective (how fast you must recover) and Recovery Point Objective (how much data loss is acceptable)."
  },
  {
    "category": "service",
    "term": "SaaS (Software as a Service)",
    "definition": "Software delivered over the cloud and accessed via a browser or API, usually for a subscription \u2014 no local install."
  },
  {
    "category": "infra",
    "term": "Scalability",
    "definition": "The ability to handle growing workloads by adding resources (horizontal) or increasing capacity (vertical)."
  },
  {
    "category": "core",
    "term": "Server",
    "definition": "A remote computer, physical or virtual, that provides a service or resource to client programs over a network."
  },
  {
    "category": "devops",
    "term": "Serverless",
    "definition": "Running code without managing servers yourself \u2014 the provider handles provisioning, scaling and server management."
  },
  {
    "category": "cost",
    "term": "Service Level Agreement (SLA)",
    "definition": "A contract between a provider and customer defining the service and uptime level guaranteed."
  },
  {
    "category": "data",
    "term": "Snapshot",
    "definition": "A point-in-time copy of a disk or volume, used for backup, cloning or quick rollback."
  },
  {
    "category": "core",
    "term": "Sovereign Cloud",
    "definition": "Cloud infrastructure kept within a country\u2019s jurisdiction, giving control over data, access and compliance."
  },
  {
    "category": "devops",
    "term": "Tech Stack",
    "definition": "The set of tools, frameworks, languages and services layered together to build and run an application."
  },
  {
    "category": "devops",
    "term": "Terraform",
    "definition": "A popular open-source Infrastructure-as-Code tool for provisioning cloud resources declaratively."
  },
  {
    "category": "cost",
    "term": "Uptime SLA",
    "definition": "The guaranteed percentage of time a service will be available, e.g. 99.99% \u2014 with credits if missed."
  },
  {
    "category": "cost",
    "term": "Vendor Lock-in",
    "definition": "A situation where switching away from a provider is difficult or costly, keeping a customer dependent on it."
  },
  {
    "category": "infra",
    "term": "Virtual Machine (VM)",
    "definition": "A software-emulated computer that behaves like a physical one, running its own OS in a virtual environment."
  },
  {
    "category": "infra",
    "term": "Virtual Private Cloud (VPC)",
    "definition": "An isolated, private section of a public cloud where you run resources within your own virtual network."
  },
  {
    "category": "infra",
    "term": "Virtualization",
    "definition": "Creating a virtual version of hardware, an OS, storage or a server via an abstraction layer."
  },
  {
    "category": "core",
    "term": "Web Services",
    "definition": "Software systems that communicate over the internet using standard protocols (HTTP, JSON/XML) for interoperability."
  },
  {
    "category": "core",
    "term": "Workload",
    "definition": "The application, program or function running in a cloud environment and consuming its resources."
  }
];

// src/app/pages/cloud-glossary.page.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.letter;
var _forTrack2 = ($index, $item) => $item.term;
function CloudGlossaryPage_For_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function CloudGlossaryPage_For_79_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(category_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCategory() === category_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r2.label);
  }
}
function CloudGlossaryPage_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const letter_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", !ctx_r2.hasGlossaryLetter(letter_r4));
    \u0275\u0275property("href", "#glossary-" + letter_r4, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(letter_r4);
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b", 80);
    \u0275\u0275text(1, "aws");
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 82);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "rect", 83)(2, "rect", 84)(3, "rect", 85)(4, "rect", 86);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 87)(2, "path", 88);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "rect", 89)(2, "rect", 90)(3, "path", 91);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "ellipse", 92)(2, "path", 93);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 94)(2, "path", 95);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "circle", 96)(2, "circle", 97)(3, "circle", 98)(4, "path", 99);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 100);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 101)(2, "path", 102);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 103);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 104);
    \u0275\u0275elementEnd();
  }
}
function CloudGlossaryPage_Conditional_83_For_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 77)(1, "div", 78)(2, "span", 79);
    \u0275\u0275conditionalCreate(3, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_3_Template, 2, 0, "b", 80)(4, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_4_Template, 2, 0, ":svg:svg", 81)(5, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_5_Template, 5, 0, ":svg:svg", 81)(6, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_6_Template, 3, 0, ":svg:svg", 81)(7, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_7_Template, 4, 0, ":svg:svg", 81)(8, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_8_Template, 3, 0, ":svg:svg", 81)(9, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_9_Template, 3, 0, ":svg:svg", 81)(10, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_10_Template, 5, 0, ":svg:svg", 81)(11, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_11_Template, 2, 0, ":svg:svg", 81)(12, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_12_Template, 3, 0, ":svg:svg", 81)(13, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_13_Template, 2, 0, ":svg:svg", 81)(14, CloudGlossaryPage_Conditional_83_For_2_For_5_Case_14_Template, 2, 0, ":svg:svg", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "h4");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "small");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_22_0;
    const term_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275interpolate1("term-icon tag-", term_r5.category));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r2.termIcon(term_r5.term, term_r5.category)) === "aws" ? 3 : tmp_22_0 === "link" ? 4 : tmp_22_0 === "grid" ? 5 : tmp_22_0 === "refresh" ? 6 : tmp_22_0 === "server" ? 7 : tmp_22_0 === "database" ? 8 : tmp_22_0 === "shield" ? 9 : tmp_22_0 === "network" ? 10 : tmp_22_0 === "code" ? 11 : tmp_22_0 === "cost" ? 12 : tmp_22_0 === "pulse" ? 13 : 14);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(term_r5.term);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("glossary-tag tag-", term_r5.category));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.categoryLabels[term_r5.category]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(term_r5.definition);
  }
}
function CloudGlossaryPage_Conditional_83_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 75)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 76);
    \u0275\u0275repeaterCreate(4, CloudGlossaryPage_Conditional_83_For_2_For_5_Template, 21, 10, "article", 77, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r6 = ctx.$implicit;
    \u0275\u0275property("id", "glossary-" + group_r6.letter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r6.letter);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r6.terms);
  }
}
function CloudGlossaryPage_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275repeaterCreate(1, CloudGlossaryPage_Conditional_83_For_2_Template, 6, 2, "section", 75, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.glossaryGroups());
  }
}
function CloudGlossaryPage_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "b");
    \u0275\u0275text(2, "No matching cloud term found.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Try another search or choose \u201CAll\u201D.");
    \u0275\u0275elementEnd()();
  }
}
var CloudGlossaryPage = class _CloudGlossaryPage {
  seo = inject(SeoService);
  faqs = [
    ["What is cloud computing?", "Cloud computing delivers servers, storage, databases, networking and software over the internet, usually with flexible consumption-based pricing."],
    ["What is the difference between public, private and hybrid cloud?", "Public cloud uses shared provider infrastructure, private cloud is dedicated to one organisation, and hybrid cloud combines both models."],
    ["How does cloud security work?", "Cloud security combines identity controls, encryption, network protection, monitoring, backup and shared responsibility between provider and customer."],
    ["Can XcellHost help us choose a cloud service?", "Yes. XcellHost can assess your workload, security, compliance, performance and budget requirements before recommending an approach."],
    ["Is the glossary suitable for non-technical readers?", "Yes. Every topic is written in clear business language with enough context to support informed conversations."],
    ["How often is the Cloud Glossary updated?", "We continually expand and refine the glossary as cloud, cybersecurity, compliance and AI technologies evolve."]
  ];
  search = signal("", ...ngDevMode ? [{ debugName: "search" }] : []);
  activeCategory = signal("all", ...ngDevMode ? [{ debugName: "activeCategory" }] : []);
  categories = [
    { key: "all", label: "All" },
    { key: "core", label: "Core concepts" },
    { key: "service", label: "Service models & vendors" },
    { key: "infra", label: "Infrastructure" },
    { key: "devops", label: "DevOps & delivery" },
    { key: "data", label: "Data & storage" },
    { key: "cost", label: "Cost & compliance" }
  ];
  categoryLabels = {
    core: "Core concepts",
    service: "Service models & vendors",
    infra: "Infrastructure",
    devops: "DevOps & delivery",
    data: "Data & storage",
    cost: "Cost & compliance"
  };
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  glossaryGroups = computed(() => {
    const query = this.search().trim().toLowerCase();
    const category = this.activeCategory();
    const filtered = CLOUD_GLOSSARY_TERMS.filter((item) => (category === "all" || item.category === category) && (!query || `${item.term} ${item.definition}`.toLowerCase().includes(query)));
    return this.alphabet.map((letter) => ({
      letter,
      terms: filtered.filter((item) => item.term.toUpperCase().startsWith(letter))
    })).filter((group) => group.terms.length);
  }, ...ngDevMode ? [{ debugName: "glossaryGroups" }] : []);
  resultCount = computed(() => this.glossaryGroups().reduce((sum, group) => sum + group.terms.length, 0), ...ngDevMode ? [{ debugName: "resultCount" }] : []);
  constructor() {
    this.seo.set("Cloud Glossary | Cloud Terms Explained by XcellHost", "A practical cloud glossary explaining infrastructure, security, governance, storage, networking and AI terminology.", "/under-construction/cloud-glossary/");
  }
  selectCategory(category) {
    this.activeCategory.set(category);
  }
  hasGlossaryLetter(letter) {
    return this.glossaryGroups().some((group) => group.letter === letter);
  }
  termIcon(term, category) {
    const value = term.toLowerCase();
    if (value.includes("amazon web services"))
      return "aws";
    if (value.includes("api") || value.includes("cross-connect") || value.includes("web service"))
      return "link";
    if (value.includes("application") || value.includes("cluster") || value.includes("container") || value.includes("microservice"))
      return "grid";
    if (value.includes("auto") || value.includes("migration") || value.includes("replication") || value.includes("restore"))
      return "refresh";
    if (value.includes("server") || value.includes("compute") || value.includes("machine") || value.includes("infrastructure"))
      return "server";
    if (value.includes("database") || value.includes("storage") || value.includes("backup") || value.includes("snapshot") || value.includes("data "))
      return "database";
    if (value.includes("security") || value.includes("firewall") || value.includes("iam") || value.includes("encryption") || value.includes("compliance"))
      return "shield";
    if (value.includes("network") || value.includes("cdn") || value.includes("region") || value.includes("zone") || value.includes("ingress"))
      return "network";
    if (category === "devops" || value.includes("json") || value.includes("open source"))
      return "code";
    if (category === "cost")
      return "cost";
    if (value.includes("availability") || value.includes("latency") || value.includes("uptime") || value.includes("workload"))
      return "pulse";
    return "cloud";
  }
  static \u0275fac = function CloudGlossaryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CloudGlossaryPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CloudGlossaryPage, selectors: [["xh-cloud-glossary-page"]], decls: 160, vars: 4, consts: [[1, "glossary-page"], ["aria-labelledby", "glossary-title", 1, "glossary-hero"], ["aria-hidden", "true", 1, "hero-grid"], [1, "wrap", "hero-layout"], [1, "hero-copy"], ["aria-label", "Breadcrumb", 1, "crumb"], ["routerLink", "/"], [1, "eyebrow"], ["id", "glossary-title"], [1, "hero-tagline"], [1, "hero-emphasis"], ["aria-hidden", "true", 1, "typing-caret"], [1, "hero-actions", "product-actions"], ["href", "#glossary", 1, "secondary"], ["routerLink", "/contact", 1, "talk-action"], [1, "hero-ai"], ["href", "https://chatgpt.com/?q=Explain%20the%20XcellHost%20Cloud%20Glossary", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask ChatGPT"], ["src", "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64", "alt", ""], ["href", "https://grok.com/?q=XcellHost%20Cloud%20Glossary", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask Grok"], ["src", "https://www.google.com/s2/favicons?domain=grok.com&sz=64", "alt", ""], ["href", "https://claude.ai/new?q=XcellHost%20Cloud%20Glossary", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask Claude"], ["src", "https://www.google.com/s2/favicons?domain=claude.ai&sz=64", "alt", ""], ["href", "https://gemini.google.com/app", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask Gemini"], ["src", "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64", "alt", ""], ["href", "https://www.perplexity.ai/search?q=XcellHost%20Cloud%20Glossary", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask Perplexity"], ["src", "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64", "alt", ""], ["aria-hidden", "true", 1, "hero-art"], [1, "orbit", "one"], [1, "orbit", "two"], ["src", "/assets/images/cloud-glossary-hero-diagram.svg", "alt", "Cloud glossary concepts connected in one knowledge map", 1, "hero-image"], [1, "floating-term", "term-a"], [1, "floating-term", "term-b"], [1, "floating-term", "term-c"], [1, "content-shell"], ["id", "overview", 1, "section", "intro-section"], [1, "section-label"], [1, "overview-copy"], ["id", "glossary", "aria-labelledby", "directory-title", 1, "glossary-directory"], [1, "directory-wrap"], [1, "directory-heading"], ["id", "directory-title", 1, "section-label"], ["aria-label", "Search cloud glossary", 1, "directory-search"], ["type", "search", "placeholder", "Search a term\u2026 e.g. IaaS, Kubernetes, VPC", 3, "input", "value"], ["role", "group", "aria-label", "Filter glossary by category", 1, "category-filters"], ["type", "button", 3, "active"], ["aria-label", "Jump to glossary letter", 1, "alphabet-nav"], [3, "href", "disabled"], [1, "glossary-groups"], [1, "no-results"], ["aria-labelledby", "glossaryFaqTitle", 1, "section", "default-faq-section"], ["id", "glossaryFaqTitle", 1, "pp-sec", "pp-faq-heading"], [1, "pp-faq"], [3, "faqs"], [1, "section", "services-band"], [1, "services-heading"], [1, "four-grid"], ["routerLink", "/colocation", 1, "service-link"], ["routerLink", "/iot-cloud", 1, "service-link"], ["routerLink", "/agentic-ai", 1, "service-link"], ["routerLink", "/register-a-domain-name", 1, "service-link"], ["pageSlug", "cloud-glossary"], ["id", "contact", "aria-labelledby", "glossaryCtaTitle", 1, "section", "final-cta"], [1, "cta-kicker"], ["id", "glossaryCtaTitle"], [1, "cta-actions"], ["routerLink", "/contact", 1, "cta-primary"], ["routerLink", "/contact"], ["href", "#glossary"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener noreferrer"], ["href", "mailto:sales@xcellhost.cloud"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost 24 by 7 delightful support", 1, "buddha-link"], ["aria-hidden", "true", 1, "buddha-glow"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost 24 by 7 Delightful Support", "width", "140", "height", "140", "loading", "lazy"], ["type", "button", 3, "click"], [3, "href"], [1, "glossary-group", 3, "id"], [1, "glossary-grid"], [1, "glossary-card"], [1, "glossary-card-head"], ["aria-hidden", "true"], [1, "aws-mark"], ["viewBox", "0 0 24 24"], ["d", "M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"], ["x", "4", "y", "4", "width", "6", "height", "6", "rx", "1"], ["x", "14", "y", "4", "width", "6", "height", "6", "rx", "1"], ["x", "4", "y", "14", "width", "6", "height", "6", "rx", "1"], ["x", "14", "y", "14", "width", "6", "height", "6", "rx", "1"], ["d", "M20 7v5h-5M4 17v-5h5"], ["d", "M6.1 9A7 7 0 0 1 18 6l2 1M18 15a7 7 0 0 1-12 3l-2-1"], ["x", "3", "y", "3", "width", "18", "height", "7", "rx", "2"], ["x", "3", "y", "14", "width", "18", "height", "7", "rx", "2"], ["d", "M7 6.5h.01M7 17.5h.01"], ["cx", "12", "cy", "5", "rx", "8", "ry", "3"], ["d", "M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"], ["d", "M12 3 20 6v6c0 5-3.2 8.3-8 10-4.8-1.7-8-5-8-10V6l8-3Z"], ["d", "m9 12 2 2 4-5"], ["cx", "6", "cy", "6", "r", "2"], ["cx", "18", "cy", "6", "r", "2"], ["cx", "12", "cy", "18", "r", "2"], ["d", "m8 7 3 9m5-9-3 9M8 6h8"], ["d", "m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12"], ["d", "M16 4H8l-2 4h12l-2-4ZM7 8c-2 3-3 5-3 8 0 3 3 5 8 5s8-2 8-5c0-3-1-5-3-8"], ["d", "M9 13h6m-3-2v7"], ["d", "M3 12h4l2-7 4 14 2-7h6"], ["d", "M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A3.8 3.8 0 0 0 6.5 19h11Z"]], template: function CloudGlossaryPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "nav", 5)(6, "a", 6);
      \u0275\u0275text(7, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "Cloud Glossary");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13, "XCELLHOST CLOUD KNOWLEDGE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h1", 8)(15, "span");
      \u0275\u0275text(16, "XcellCloud");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " | Cloud Glossary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 9);
      \u0275\u0275text(19, "Cloud Glossary from XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "strong", 10);
      \u0275\u0275text(21, "Cloud terms explained in plain English");
      \u0275\u0275element(22, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12)(24, "a", 13);
      \u0275\u0275text(25, "Screenshot Tour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 13);
      \u0275\u0275text(27, "7 Day's Free Trial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 14);
      \u0275\u0275text(29, "Let's Talk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15)(31, "span");
      \u0275\u0275text(32, "\u2726 Ask AI About Cloud Glossary from XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div")(34, "a", 16);
      \u0275\u0275element(35, "img", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "a", 18);
      \u0275\u0275element(37, "img", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "a", 20);
      \u0275\u0275element(39, "img", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 22);
      \u0275\u0275element(41, "img", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 24);
      \u0275\u0275element(43, "img", 25);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 26);
      \u0275\u0275element(45, "span", 27)(46, "span", 28)(47, "img", 29);
      \u0275\u0275elementStart(48, "span", 30);
      \u0275\u0275text(49, "CLOUD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 31);
      \u0275\u0275text(51, "SECURITY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 32);
      \u0275\u0275text(53, "AI");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 33)(55, "section", 34)(56, "div")(57, "span", 35);
      \u0275\u0275text(58, "OVERVIEW");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p", 36);
      \u0275\u0275text(60, "A cloud glossary is a plain-language reference for the technologies, services and operating models used in modern IT. It helps business and technical teams share a common vocabulary, compare solutions and make confident decisions. Use this guide to understand essential terms\u2014from compute, storage and networking to cybersecurity, compliance, automation and artificial intelligence. Each explanation connects technical language with practical business context, helping everyone from decision-makers to IT teams communicate more clearly.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "section", 37)(62, "div", 38)(63, "div", 39)(64, "div")(65, "span", 40);
      \u0275\u0275text(66, "CLOUD A\u2013Z");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p");
      \u0275\u0275text(68, "Search instantly, filter by topic or jump directly to a letter.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "strong");
      \u0275\u0275text(70);
      \u0275\u0275elementStart(71, "small");
      \u0275\u0275text(72, "terms shown");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "label", 41)(74, "span");
      \u0275\u0275text(75, "\u2315");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "input", 42);
      \u0275\u0275listener("input", function CloudGlossaryPage_Template_input_input_76_listener($event) {
        return ctx.search.set($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 43);
      \u0275\u0275repeaterCreate(78, CloudGlossaryPage_For_79_Template, 2, 3, "button", 44, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "nav", 45);
      \u0275\u0275repeaterCreate(81, CloudGlossaryPage_For_82_Template, 2, 4, "a", 46, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(83, CloudGlossaryPage_Conditional_83_Template, 3, 0, "div", 47)(84, CloudGlossaryPage_Conditional_84_Template, 5, 0, "div", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "section", 49)(86, "div", 50);
      \u0275\u0275text(87, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "div", 51);
      \u0275\u0275element(89, "xh-product-faq", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "section", 53)(91, "div", 54)(92, "span", 35);
      \u0275\u0275text(93, "PUT IT TO WORK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "h2");
      \u0275\u0275text(95, "From glossary to the cloud.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p");
      \u0275\u0275text(97, "Know the terms, then let XcellHost run the cloud for you.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 55)(99, "a", 56)(100, "i");
      \u0275\u0275text(101, "\u25A6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "b");
      \u0275\u0275text(103, "Colocation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "span");
      \u0275\u0275text(105, "House your hardware in our Mumbai data centre.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "em");
      \u0275\u0275text(107, "Explore \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "a", 57)(109, "i");
      \u0275\u0275text(110, "\u2301");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "b");
      \u0275\u0275text(112, "IoT Cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "span");
      \u0275\u0275text(114, "Connect every device and process at the edge.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "em");
      \u0275\u0275text(116, "Explore \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "a", 58)(118, "i");
      \u0275\u0275text(119, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "b");
      \u0275\u0275text(121, "Agentic AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "span");
      \u0275\u0275text(123, "Autonomous AI agents for your business.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "em");
      \u0275\u0275text(125, "Explore \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "a", 59)(127, "i");
      \u0275\u0275text(128, "\u25CE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "b");
      \u0275\u0275text(130, "Register a Domain Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "span");
      \u0275\u0275text(132, "Register your brand across 500+ extensions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "em");
      \u0275\u0275text(134, "Explore \u2192");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(135, "xh-insights-section", 60);
      \u0275\u0275elementStart(136, "section", 61)(137, "div")(138, "span", 62);
      \u0275\u0275text(139, "XCELLHOST DELIGHTFUL SUPPORT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "h2", 63);
      \u0275\u0275text(141, "Ready to start with Cloud Glossary?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p");
      \u0275\u0275text(143, "Free consultation \xB7 cloud guidance \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "div", 64)(145, "a", 65);
      \u0275\u0275text(146, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "a", 66);
      \u0275\u0275text(148, "\u26A1 Get Advice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "a", 67);
      \u0275\u0275text(150, "\u2193 Browse Terms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "a", 66);
      \u0275\u0275text(152, "\u25A3 Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "a", 68);
      \u0275\u0275text(154, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "a", 69);
      \u0275\u0275text(156, "Email Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(157, "a", 70);
      \u0275\u0275element(158, "span", 71)(159, "img", 72);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(70);
      \u0275\u0275textInterpolate(ctx.resultCount());
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.search());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.alphabet);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.glossaryGroups().length ? 83 : 84);
      \u0275\u0275advance(6);
      \u0275\u0275property("faqs", ctx.faqs);
    }
  }, dependencies: [RouterLink, InsightsSectionComponent, ProductFaqComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.glossary-page[_ngcontent-%COMP%] {\n  --navy:#041e42;\n  --blue:#1565d8;\n  --cyan:#27b6ff;\n  --orange:#ff8218;\n  --ink:#0b1d3a;\n  --muted:#60708a;\n  --line:#dbe6f4;\n  --ice:#f3f7fd;\n  color: var(--ink);\n  background: #fff;\n}\n.wrap[_ngcontent-%COMP%], \n.content-shell[_ngcontent-%COMP%] {\n  width: min(1200px, calc(100% - 40px));\n  margin: auto;\n}\n.glossary-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 520px;\n  padding: 62px 0;\n  background:\n    radial-gradient(\n      circle at 80% 25%,\n      rgba(45, 150, 255, .35),\n      transparent 24%),\n    linear-gradient(\n      120deg,\n      #031a3a,\n      #073675 68%,\n      #07539d);\n  color: #fff;\n}\n.hero-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(125, 190, 255, .28) 1.2px, transparent 1.2px);\n  background-size: 21px 21px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 38%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 38%,\n      #000);\n}\n.hero-layout[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  align-items: center;\n  gap: 54px;\n}\n.crumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 32px;\n  color: #9bc8ff;\n  font: 700 11px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.eyebrow[_ngcontent-%COMP%], \n.section-label[_ngcontent-%COMP%] {\n  display: block;\n  color: #45baff;\n  font: 800 10px var(--mono);\n  letter-spacing: .2em;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 14px 0 4px;\n  font: 850 clamp(48px, 6vw, 72px)/1 var(--disp);\n  letter-spacing: -.05em;\n}\n.hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #6dccff;\n  font: 750 clamp(24px, 3vw, 34px)/1.2 var(--disp);\n}\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 650px;\n  color: #d0dff4;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 28px;\n}\n.hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.final-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  border-radius: 9px;\n  font-weight: 750;\n  text-decoration: none;\n}\n.primary[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n  box-shadow: 0 12px 24px rgba(255, 130, 24, .25);\n}\n.secondary[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, .35);\n  color: #fff;\n}\n.hero-art[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 380px;\n  display: grid;\n  place-items: center;\n}\n.hero-image[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: min(100%, 440px);\n  filter: drop-shadow(0 30px 30px rgba(0, 0, 0, .35));\n  animation: _ngcontent-%COMP%_float 4s ease-in-out infinite;\n}\n.orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px dashed rgba(134, 198, 255, .35);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 28s linear infinite;\n}\n.orbit.one[_ngcontent-%COMP%] {\n  width: 360px;\n  height: 360px;\n}\n.orbit.two[_ngcontent-%COMP%] {\n  width: 470px;\n  height: 470px;\n  animation-direction: reverse;\n}\n.brand-card[_ngcontent-%COMP%], \n.floating-term[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  border: 1px solid rgba(152, 207, 255, .6);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, .25);\n  animation: _ngcontent-%COMP%_float 3.5s ease-in-out infinite;\n}\n.brand-card[_ngcontent-%COMP%] {\n  right: 2%;\n  bottom: 5%;\n  display: grid;\n  padding: 12px 16px;\n  border-radius: 14px;\n  background: #fff;\n}\n.brand-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 125px;\n}\n.brand-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #1761bf;\n  font: 700 9px var(--mono);\n  text-align: center;\n}\n.floating-term[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(4, 30, 66, .88);\n  font: 800 9px var(--mono);\n  letter-spacing: .1em;\n}\n.term-a[_ngcontent-%COMP%] {\n  left: 0;\n  top: 15%;\n}\n.term-b[_ngcontent-%COMP%] {\n  right: 3%;\n  top: 15%;\n  animation-delay: -1s;\n}\n.term-c[_ngcontent-%COMP%] {\n  left: 8%;\n  bottom: 10%;\n  animation-delay: -2s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.content-shell[_ngcontent-%COMP%] {\n  padding: 34px 0 80px;\n}\n.section[_ngcontent-%COMP%] {\n  margin: 28px 0;\n  padding: 54px;\n  border: 1px solid var(--line);\n  border-radius: 24px;\n  background: #fff;\n  box-shadow: 0 16px 42px rgba(15, 53, 104, .07);\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 20px;\n  color: var(--navy);\n  font: 800 clamp(28px, 3vw, 40px)/1.14 var(--disp);\n  letter-spacing: -.035em;\n}\n.section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n  line-height: 1.72;\n}\n.intro-section[_ngcontent-%COMP%], \n.split-feature[_ngcontent-%COMP%], \n.security-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr .8fr;\n  gap: 42px;\n  align-items: center;\n}\n.quick-card[_ngcontent-%COMP%], \n.visual-panel[_ngcontent-%COMP%], \n.shield[_ngcontent-%COMP%] {\n  padding: 30px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0b5ed7,\n      #08336d);\n  color: #fff;\n  text-align: center;\n}\n.quick-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto 14px;\n  place-items: center;\n  border-radius: 16px;\n  background: #fff;\n  color: #1767d7;\n  font-size: 28px;\n}\n.quick-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.visual-panel[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%], \n.shield[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 750 20px var(--disp);\n}\n.quick-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.shield[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #cfe4ff;\n}\n.tint-blue[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f4f8ff,\n      #eaf4ff);\n}\n.tint-warm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fffaf4,\n      #fff1e4);\n}\n.three-grid[_ngcontent-%COMP%], \n.four-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.four-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n}\n.feature[_ngcontent-%COMP%], \n.mini-card[_ngcontent-%COMP%], \n.benefit[_ngcontent-%COMP%], \n.why-section[_ngcontent-%COMP%]   .three-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 25px;\n  border: 1px solid var(--line);\n  border-radius: 17px;\n  background: #fff;\n}\n.feature[_ngcontent-%COMP%] {\n  border-top: 4px solid #2581ee;\n}\n.feature.secure[_ngcontent-%COMP%] {\n  border-top-color: #ff8218;\n}\n.feature.govern[_ngcontent-%COMP%] {\n  border-top-color: #21a86b;\n}\n.feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.mini-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.benefit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.why-section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 43px;\n  height: 43px;\n  margin-bottom: 16px;\n  place-items: center;\n  border-radius: 12px;\n  background: #e7f1ff;\n  color: #1264d8;\n  font-style: normal;\n  font-weight: 800;\n}\n.feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font: 750 20px var(--disp);\n}\n.feature[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.copilot[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 15px 0 0;\n  padding-left: 18px;\n  color: #405675;\n  line-height: 1.8;\n}\n.mini-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], \n.benefit[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], \n.why-section[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--navy);\n  font: 750 16px var(--disp);\n  margin-bottom: 8px;\n}\n.check-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 22px;\n  color: #0a5ec8;\n  font-weight: 700;\n}\n.visual-panel[_ngcontent-%COMP%] {\n  min-height: 260px;\n  display: grid;\n  align-content: center;\n}\n.term-cloud[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 9px;\n  margin-top: 22px;\n}\n.term-cloud[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .14);\n  font-size: 12px;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin: 24px 0;\n}\n.tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 11px 17px;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: #fff;\n  color: #315071;\n  font-weight: 750;\n  cursor: pointer;\n}\n.tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: #176bdd;\n  background: #176bdd;\n  color: #fff;\n}\n.tab-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n  padding: 30px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #061f47,\n      #0a4b94);\n  color: #fff;\n}\n.tab-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 750 26px var(--disp);\n}\n.tab-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cae0fb;\n}\n.tab-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.term-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n}\n.term-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border: 1px solid rgba(255, 255, 255, .15);\n  border-radius: 10px;\n  background: rgba(255, 255, 255, .07);\n}\n.term-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #5ce0a0;\n}\n.term-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.copilot[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n  background:\n    radial-gradient(\n      circle at 85% 20%,\n      rgba(112, 64, 255, .35),\n      transparent 30%),\n    linear-gradient(\n      135deg,\n      #071b48,\n      #172d70);\n  color: #fff;\n}\n.copilot[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.copilot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.copilot[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #d4def5;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 7px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .12);\n  font: 800 10px var(--mono);\n  letter-spacing: .1em;\n}\n.prompt-stack[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  align-content: center;\n}\n.prompt-stack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 17px;\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, .08);\n}\n.before-after[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  gap: 22px;\n}\n.before-after[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  padding: 28px;\n  border: 1px solid #ffd8bd;\n  border-radius: 18px;\n  background: #fff8f2;\n}\n.before-after[_ngcontent-%COMP%]   article.after[_ngcontent-%COMP%] {\n  border-color: #b9dbff;\n  background: #f2f8ff;\n}\n.before-after[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #e66f12;\n  font: 800 10px var(--mono);\n  letter-spacing: .15em;\n}\n.before-after[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 750 20px var(--disp);\n}\n.before-after[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 8px;\n  background: #fff;\n}\n.before-after[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #1a6cd8;\n}\n.audience-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.audience-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 17px;\n  border: 1px solid var(--line);\n  border-radius: 13px;\n  background: #fff;\n  font-size: 22px;\n}\n.audience-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.included-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.included-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  padding: 20px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n}\n.included-grid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 28px;\n  height: 28px;\n  place-items: center;\n  border-radius: 50%;\n  background: #dff8eb;\n  color: #168653;\n  font-style: normal;\n}\n.included-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n}\n.lead[_ngcontent-%COMP%] {\n  max-width: 850px;\n  margin-bottom: 24px;\n}\n.security[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #061d43,\n      #063e77);\n  color: #fff;\n}\n.security[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.security[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c8dcf3;\n}\n.certs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 20px;\n}\n.certs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .1);\n  font-size: 12px;\n}\n.shield[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .17);\n  font-size: 48px;\n}\n.shield[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n}\n.video-section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.video-frame[_ngcontent-%COMP%] {\n  max-width: 840px;\n  aspect-ratio: 16/9;\n  margin: auto;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 0 20px 50px rgba(5, 34, 75, .2);\n}\n.video-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.testimonials[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 25px;\n  border: 1px solid #ffd8bc;\n  border-radius: 17px;\n  background: #fff;\n}\n.testimonials[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #ff8a16;\n  letter-spacing: .12em;\n}\n.testimonials[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%] {\n  color: #164f95;\n  font: 700 12px var(--mono);\n}\n.faq-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.faq-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 13px;\n  overflow: hidden;\n}\n.faq-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border: 0;\n  background: #fff;\n  color: var(--navy);\n  text-align: left;\n  cursor: pointer;\n}\n.faq-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n  transition: transform .2s;\n}\n.faq-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: none;\n  padding: 0 20px 18px;\n}\n.faq-list[_ngcontent-%COMP%]   article.open[_ngcontent-%COMP%] {\n  border-color: #90b9ee;\n}\n.faq-list[_ngcontent-%COMP%]   article.open[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n}\n.faq-list[_ngcontent-%COMP%]   article.open[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.final-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 25px;\n  background:\n    linear-gradient(\n      105deg,\n      #1469dc,\n      #073e8c);\n  color: #fff;\n}\n.final-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.final-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d7e7ff;\n}\n.final-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  gap: 10px;\n}\n.final-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: var(--orange);\n  color: #fff;\n  white-space: nowrap;\n}\n.final-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  background: #fff;\n  color: #0751ab;\n}\n@media (max-width: 900px) {\n  .hero-layout[_ngcontent-%COMP%], \n   .intro-section[_ngcontent-%COMP%], \n   .split-feature[_ngcontent-%COMP%], \n   .security-grid[_ngcontent-%COMP%], \n   .copilot[_ngcontent-%COMP%], \n   .tab-panel[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-art[_ngcontent-%COMP%] {\n    min-height: 330px;\n  }\n  .three-grid[_ngcontent-%COMP%], \n   .four-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 36px;\n  }\n  .final-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (max-width: 600px) {\n  .wrap[_ngcontent-%COMP%], \n   .content-shell[_ngcontent-%COMP%] {\n    width: min(100% - 28px, 1200px);\n  }\n  .glossary-hero[_ngcontent-%COMP%] {\n    padding: 46px 0;\n  }\n  .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n  .hero-actions[_ngcontent-%COMP%], \n   .final-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .hero-art[_ngcontent-%COMP%] {\n    min-height: 290px;\n  }\n  .brand-card[_ngcontent-%COMP%] {\n    right: 0;\n  }\n  .three-grid[_ngcontent-%COMP%], \n   .four-grid[_ngcontent-%COMP%], \n   .included-grid[_ngcontent-%COMP%], \n   .audience-grid[_ngcontent-%COMP%], \n   .check-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section[_ngcontent-%COMP%] {\n    margin: 18px 0;\n    padding: 27px 20px;\n    border-radius: 18px;\n  }\n  .before-after[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .before-after[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    justify-self: center;\n  }\n}\n.glossary-hero[_ngcontent-%COMP%] {\n  min-height: 590px;\n  padding: 54px 0 62px;\n  background:\n    radial-gradient(\n      circle at 77% 44%,\n      rgba(24, 119, 231, .32),\n      transparent 29%),\n    linear-gradient(\n      118deg,\n      #031832 0%,\n      #052b5d 62%,\n      #073d7e 100%);\n}\n.hero-layout[_ngcontent-%COMP%] {\n  grid-template-columns: 1.02fr .98fr;\n  gap: 36px;\n}\n.crumb[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(46px, 4.3vw, 64px);\n}\n.hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(23px, 2.4vw, 31px);\n}\n.hero-emphasis[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 18px;\n  color: #68c2ff;\n  font: 750 20px/1.35 var(--disp);\n}\n.hero-points[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 11px 22px;\n  margin-top: 20px;\n  color: #d5e5f7;\n  font-size: 13px;\n}\n.hero-points[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.hero-points[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  place-items: center;\n  border-radius: 50%;\n  background: #1776e8;\n  color: #fff;\n  font-style: normal;\n  font-size: 11px;\n}\n.hero-art[_ngcontent-%COMP%] {\n  min-height: 420px;\n}\n.hero-image[_ngcontent-%COMP%] {\n  width: min(112%, 580px);\n  max-width: none;\n}\n.brand-card[_ngcontent-%COMP%] {\n  right: 1%;\n  bottom: 4%;\n}\n.floating-term[_ngcontent-%COMP%] {\n  background: rgba(3, 25, 55, .94);\n}\n.content-shell[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  padding: 0;\n  margin: 0;\n}\n.section[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 76px max(28px, calc((100vw - 1200px)/2));\n  border: 0;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: none;\n}\n.section[_ngcontent-%COMP%]:nth-of-type(even):not(.security):not(.copilot):not(.final-cta) {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f9ff,\n      #edf5ff);\n}\n.section.tint-warm[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fffaf4,\n      #fff1e4) !important;\n}\n.section[_ngcontent-%COMP%]    + .section[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(214, 226, 242, .75);\n}\n.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 920px;\n}\n.intro-section[_ngcontent-%COMP%], \n.split-feature[_ngcontent-%COMP%], \n.security-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.2fr) minmax(300px, .8fr);\n}\n.feature[_ngcontent-%COMP%], \n.mini-card[_ngcontent-%COMP%], \n.benefit[_ngcontent-%COMP%], \n.why-section[_ngcontent-%COMP%]   .three-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], \n.testimonials[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%], \n.included-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  box-shadow: 0 12px 30px rgba(18, 62, 116, .07);\n  transition: transform .2s, box-shadow .2s;\n}\n.feature[_ngcontent-%COMP%]:hover, \n.mini-card[_ngcontent-%COMP%]:hover, \n.benefit[_ngcontent-%COMP%]:hover, \n.why-section[_ngcontent-%COMP%]   .three-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 18px 36px rgba(18, 62, 116, .13);\n}\n.faq-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f6faff,\n      #eef5ff) !important;\n}\n.faq-intro[_ngcontent-%COMP%] {\n  margin: -10px 0 27px;\n}\n.faq-list[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 18px;\n  align-items: start;\n}\n.faq-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  background: #fff;\n  box-shadow: 0 8px 22px rgba(16, 55, 105, .055);\n}\n.faq-list[_ngcontent-%COMP%]   article.open[_ngcontent-%COMP%] {\n  box-shadow: 0 14px 28px rgba(20, 88, 174, .11);\n}\n.final-cta[_ngcontent-%COMP%] {\n  margin: 64px auto;\n  width: min(1200px, calc(100% - 40px));\n  padding: 46px;\n  border-radius: 22px;\n  border: 0;\n}\n@media (max-width: 900px) {\n  .glossary-hero[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .hero-layout[_ngcontent-%COMP%], \n   .intro-section[_ngcontent-%COMP%], \n   .split-feature[_ngcontent-%COMP%], \n   .security-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-art[_ngcontent-%COMP%] {\n    min-height: 350px;\n  }\n  .faq-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding-block: 58px;\n  }\n  .final-cta[_ngcontent-%COMP%] {\n    width: calc(100% - 36px);\n    margin: 36px auto;\n  }\n}\n@media (max-width: 600px) {\n  .content-shell[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .section[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 44px 20px;\n    border-radius: 0;\n  }\n  .hero-points[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-art[_ngcontent-%COMP%] {\n    min-height: 300px;\n  }\n  .hero-image[_ngcontent-%COMP%] {\n    width: 112%;\n  }\n  .floating-term[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .final-cta[_ngcontent-%COMP%] {\n    width: calc(100% - 28px);\n    padding: 30px 22px;\n    border-radius: 18px;\n  }\n}\n.section.intro-section[_ngcontent-%COMP%] {\n  display: block;\n  background: #fff;\n}\n.intro-section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.intro-section[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.overview-copy[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: none;\n  margin: 0;\n  color: #263f60 !important;\n  font-size: 16px !important;\n  line-height: 1.85 !important;\n}\n.section.copilot[_ngcontent-%COMP%] {\n  display: grid;\n  background:\n    radial-gradient(\n      circle at 85% 20%,\n      rgba(112, 64, 255, .36),\n      transparent 31%),\n    linear-gradient(\n      135deg,\n      #061a44,\n      #172e72);\n  color: #fff;\n}\n.section.copilot[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.section.copilot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.section.copilot[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #d8e4ff;\n}\n.section.copilot[_ngcontent-%COMP%]   .prompt-stack[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  background: rgba(255, 255, 255, .1);\n}\n.section.security[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at 82% 30%,\n      rgba(36, 132, 236, .28),\n      transparent 30%),\n    linear-gradient(\n      135deg,\n      #041936,\n      #063f78);\n  color: #fff;\n}\n.section.security[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.section.security[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d1e3f7;\n}\n.section.security[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.section.security[_ngcontent-%COMP%]   .shield[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #cce2fa;\n}\n@media (max-width: 900px) {\n  .section.copilot[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.hero-search[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 620px;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n  padding: 0 16px;\n  border: 1px solid rgba(132, 205, 255, .46);\n  border-radius: 11px;\n  background: rgba(2, 18, 42, .58);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, .18);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.hero-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #65d8ef;\n  font-size: 25px;\n}\n.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #fff;\n  font: 500 14px var(--body);\n}\n.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #a9c4e3;\n}\n.glossary-directory[_ngcontent-%COMP%] {\n  padding: 72px max(28px, calc((100vw - 1200px)/2)) 88px;\n  background: #fff;\n  border-top: 1px solid var(--line);\n  scroll-margin-top: 90px;\n}\n.directory-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.directory-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.directory-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 9px 0 8px;\n  color: var(--navy);\n  font: 800 clamp(31px, 3vw, 42px)/1.15 var(--disp);\n  letter-spacing: -.035em;\n}\n.directory-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n}\n.directory-heading[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 108px;\n  color: #1263d4;\n  font: 850 34px var(--disp);\n  text-align: right;\n}\n.directory-heading[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6f8098;\n  font: 700 9px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.category-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  margin-bottom: 17px;\n}\n.category-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 9px 15px;\n  border: 1px solid #d6e3f4;\n  border-radius: 999px;\n  background: #fff;\n  color: #18365f;\n  font: 700 12px var(--mono);\n  cursor: pointer;\n  transition: .2s;\n}\n.category-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #176cdb;\n  color: #176cdb;\n}\n.category-filters[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: #052853;\n  background: #052853;\n  color: #fff;\n  box-shadow: 0 8px 18px rgba(5, 40, 83, .18);\n}\n.alphabet-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 38px;\n  padding: 15px 0;\n  border-top: 1px solid #edf2f8;\n  border-bottom: 1px solid #edf2f8;\n}\n.alphabet-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border: 1px solid #cfe0f7;\n  border-radius: 8px;\n  background: #eaf2ff;\n  color: #0d61d6;\n  font: 800 12px var(--mono);\n  text-decoration: none;\n  transition: .18s;\n}\n.alphabet-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: #176bdd;\n  color: #fff;\n}\n.alphabet-nav[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: .3;\n  filter: grayscale(1);\n}\n.glossary-group[_ngcontent-%COMP%] {\n  scroll-margin-top: 100px;\n  margin: 0 0 38px;\n  padding: 0;\n}\n.glossary-group[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  padding-bottom: 9px;\n  border-bottom: 2px solid #dbe7f6;\n  color: #052957;\n  font: 850 34px/1 var(--disp);\n}\n.glossary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 17px;\n}\n.glossary-card[_ngcontent-%COMP%] {\n  min-height: 156px;\n  padding: 22px;\n  border: 1px solid #d7e3f2;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 12px 28px rgba(11, 51, 103, .065);\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.glossary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: #aacbf4;\n  box-shadow: 0 18px 38px rgba(11, 51, 103, .12);\n}\n.glossary-card-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 10px;\n  margin-bottom: 13px;\n}\n.glossary-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: #051f45;\n  font: 750 16px/1.32 var(--disp);\n}\n.glossary-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5b6f8c;\n  font-size: 13px;\n  line-height: 1.62;\n}\n.term-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid color-mix(in srgb, currentColor 35%, transparent);\n  border-radius: 10px;\n  background: color-mix(in srgb, currentColor 10%, white);\n  font: 800 13px var(--mono);\n}\n.glossary-tag[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  padding: 5px 8px;\n  border: 1px solid currentColor;\n  border-radius: 999px;\n  background: color-mix(in srgb, currentColor 8%, white);\n  font: 700 8px var(--mono);\n  white-space: nowrap;\n}\n.tag-core[_ngcontent-%COMP%] {\n  color: #6498f5;\n}\n.tag-service[_ngcontent-%COMP%] {\n  color: #9270ef;\n}\n.tag-infra[_ngcontent-%COMP%] {\n  color: #08bdd9;\n}\n.tag-devops[_ngcontent-%COMP%] {\n  color: #20bd67;\n}\n.tag-data[_ngcontent-%COMP%] {\n  color: #ed58a0;\n}\n.tag-cost[_ngcontent-%COMP%] {\n  color: #f28a2f;\n}\n.no-results[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  border: 1px dashed #bfd2ea;\n  border-radius: 18px;\n  background: #f7faff;\n  color: #526984;\n}\n.no-results[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font: 750 20px var(--disp);\n}\n.services-band[_ngcontent-%COMP%] {\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f7fd,\n      #eaf2fd) !important;\n}\n.services-heading[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 30px;\n}\n.services-heading[_ngcontent-%COMP%]   .section-label[_ngcontent-%COMP%] {\n  color: #1263d7;\n}\n.service-link[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 218px;\n  padding: 25px;\n  border: 1px solid #d7e3f2;\n  border-radius: 17px;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  text-decoration: none;\n  box-shadow: 0 12px 30px rgba(13, 54, 105, .07);\n  transition: .2s;\n}\n.service-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 18px 38px rgba(13, 54, 105, .13);\n}\n.service-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border: 1px solid #cce0fa;\n  border-radius: 13px;\n  background: #f2f7ff;\n  color: #1263d7;\n  font-style: normal;\n  font-size: 20px;\n}\n.service-link[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin: 16px 0 7px;\n  color: var(--navy);\n  font: 750 17px var(--disp);\n}\n.service-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-size: 13px;\n  line-height: 1.6;\n}\n.service-link[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  align-self: end;\n  margin-top: 13px;\n  color: #1164d8;\n  font-style: normal;\n  font-weight: 750;\n  font-size: 13px;\n}\n.section.final-cta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 150px;\n  align-items: center;\n  padding: 42px 42px 42px 48px;\n}\n.final-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  min-width: 0;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 22px;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px 17px;\n}\n.buddha-link[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 140px;\n  height: 140px;\n  padding: 0 !important;\n  background: transparent !important;\n}\n.buddha-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: drop-shadow(0 12px 18px rgba(0, 0, 0, .24));\n  transition: transform .2s;\n}\n.buddha-link[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n@media (max-width: 1050px) {\n  .glossary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .glossary-card-head[_ngcontent-%COMP%] {\n    grid-template-columns: 38px minmax(0, 1fr);\n  }\n  .glossary-tag[_ngcontent-%COMP%] {\n    grid-column: 2;\n    justify-self: start;\n  }\n}\n@media (max-width: 700px) {\n  .glossary-directory[_ngcontent-%COMP%] {\n    padding: 50px 18px;\n  }\n  .directory-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .directory-heading[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .glossary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .category-filters[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    padding-bottom: 8px;\n  }\n  .category-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n  .section.final-cta[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 30px 24px;\n  }\n  .buddha-link[_ngcontent-%COMP%] {\n    width: 110px;\n    height: 110px;\n  }\n  .final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 720px;\n  font-size: clamp(37px, 3.7vw, 52px);\n  line-height: 1.08;\n  letter-spacing: -.035em;\n}\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ef1727;\n}\n.hero-tagline[_ngcontent-%COMP%] {\n  margin: 17px 0 0 !important;\n  color: #d7e5f7 !important;\n  font-size: 18px !important;\n}\n.hero-emphasis[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font-size: 21px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.hero-art[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 430px;\n  height: 430px;\n  border: 1px solid rgba(106, 180, 255, .22);\n  border-radius: 50%;\n}\n.hero-image[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.directory-search[_ngcontent-%COMP%] {\n  display: flex;\n  width: min(100%, 720px);\n  align-items: center;\n  gap: 10px;\n  margin: 0 0 22px;\n  padding: 0 15px;\n  border: 1px solid #c8daf0;\n  border-radius: 11px;\n  background: #fff;\n  box-shadow: 0 8px 20px rgba(13, 55, 108, .06);\n}\n.directory-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1267d7;\n  font-size: 24px;\n}\n.directory-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #153250;\n  font: 500 14px var(--body);\n}\n.directory-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8292a8;\n}\n.section.final-cta[_ngcontent-%COMP%] {\n  min-height: 194px;\n}\n.final-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 24px;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 11px 17px;\n  border: 1px solid rgba(255, 255, 255, .42);\n  border-radius: 9px;\n  background: transparent;\n  color: #fff;\n  font-size: 13px;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%] {\n  border-color: var(--orange);\n  background: var(--orange);\n  color: #fff;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n  background: transparent;\n  color: #fff;\n}\n.buddha-link[_ngcontent-%COMP%] {\n  flex: none;\n}\n.section.final-cta[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: min(1200px, calc(100% - 40px));\n  min-height: 194px;\n  margin: 54px auto;\n  padding: 30px 28px 30px 36px;\n  grid-template-columns: minmax(0, 1fr) 112px;\n  align-items: center;\n  gap: 28px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 17px;\n  background:\n    linear-gradient(\n      105deg,\n      #2168d8,\n      #0c469f) !important;\n  color: #fff;\n  box-shadow: 0 18px 45px -28px rgba(4, 30, 66, .55);\n}\n.section.final-cta[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -90px;\n  width: 280px;\n  height: 280px;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-radius: 50%;\n  box-shadow: 0 0 0 42px rgba(255, 255, 255, .035), 0 0 0 84px rgba(255, 255, 255, .025);\n  content: "";\n}\n.final-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  position: relative;\n  z-index: 2;\n}\n.final-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 5px !important;\n  color: #fff !important;\n  font-size: 22px !important;\n}\n.final-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dceaff !important;\n  font-size: 14px;\n}\n.cta-kicker[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 7px;\n  color: #9bd2ff;\n  font: 800 9px var(--mono);\n  letter-spacing: .16em;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  justify-content: center;\n  color: #fff !important;\n}\n.final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   .cta-primary[_ngcontent-%COMP%] {\n  background: #ff8218 !important;\n}\n.buddha-link[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 104px;\n  height: 104px;\n}\n.buddha-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 92px;\n  height: 92px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .12);\n  box-shadow: 0 0 34px rgba(115, 190, 255, .4);\n  animation: _ngcontent-%COMP%_buddha-pulse 3.8s ease-in-out infinite;\n}\n.buddha-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n@keyframes _ngcontent-%COMP%_buddha-pulse {\n  50% {\n    transform: scale(1.1);\n    opacity: .62;\n  }\n}\n@media (max-width: 700px) {\n  .section.final-cta[_ngcontent-%COMP%] {\n    width: calc(100% - 28px);\n    grid-template-columns: 1fr;\n    padding: 28px 22px;\n  }\n  .buddha-link[_ngcontent-%COMP%] {\n    width: 82px;\n    height: 82px;\n    justify-self: end;\n  }\n  .final-cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 145px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .buddha-glow[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.glossary-page[_ngcontent-%COMP%]   .glossary-hero[_ngcontent-%COMP%] {\n  min-height: 560px;\n  height: 560px;\n  padding: 48px 0;\n}\n.glossary-page[_ngcontent-%COMP%]   .hero-layout[_ngcontent-%COMP%] {\n  height: 464px;\n  grid-template-columns: 1.05fr .95fr;\n  gap: 56px;\n}\n.glossary-page[_ngcontent-%COMP%]   .hero-art[_ngcontent-%COMP%] {\n  min-height: 390px;\n  height: 390px;\n}\n.glossary-page[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%] {\n  width: min(100%, 520px);\n  max-width: 520px;\n  max-height: 390px;\n  object-fit: contain;\n  animation: none;\n}\n.glossary-page[_ngcontent-%COMP%]   .hero-art[_ngcontent-%COMP%]::before {\n  width: 390px;\n  height: 390px;\n}\n.glossary-page[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {\n  padding-block: 72px;\n}\n.glossary-page[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n.glossary-page[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]    > .faq-intro[_ngcontent-%COMP%], \n.glossary-page[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%]    > .section-label[_ngcontent-%COMP%], \n.glossary-page[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%] {\n  width: min(100%, 920px);\n  margin-right: auto;\n  margin-left: auto;\n}\n.glossary-page[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  gap: 10px;\n}\n.glossary-page[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.glossary-page[_ngcontent-%COMP%]   .faq-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 19px 22px;\n}\n.term-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.term-icon[_ngcontent-%COMP%]   .aws-mark[_ngcontent-%COMP%] {\n  position: relative;\n  color: #17233b;\n  font: 800 9px Arial, sans-serif;\n  letter-spacing: -.04em;\n}\n.term-icon[_ngcontent-%COMP%]   .aws-mark[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -2px;\n  bottom: -4px;\n  left: 1px;\n  height: 4px;\n  border-bottom: 2px solid #ff9900;\n  border-radius: 50%;\n  content: "";\n}\n@media (max-width: 900px) {\n  .glossary-page[_ngcontent-%COMP%]   .glossary-hero[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 0;\n  }\n  .glossary-page[_ngcontent-%COMP%]   .hero-layout[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .glossary-page[_ngcontent-%COMP%]   .hero-art[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .glossary-page[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%] {\n    max-height: 350px;\n  }\n}\n.glossary-page[_ngcontent-%COMP%]   .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 12px 0 10px;\n  font-size: clamp(38px, 3.35vw, 52px);\n  line-height: 1.08;\n  white-space: nowrap;\n}\n.glossary-page[_ngcontent-%COMP%]   .hero-tagline[_ngcontent-%COMP%] {\n  margin: 0 0 23px !important;\n  color: #c9d9ee !important;\n  font-size: 17px !important;\n}\n.glossary-page[_ngcontent-%COMP%]   .hero-emphasis[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 31px;\n  margin: 0;\n  color: #68bdff;\n  font-size: 21px;\n}\n.typing-caret[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2px;\n  height: 25px;\n  margin-left: 5px;\n  background: #68bdff;\n  animation: _ngcontent-%COMP%_glossary-caret .85s steps(1) infinite;\n}\n@keyframes _ngcontent-%COMP%_glossary-caret {\n  50% {\n    opacity: 0;\n  }\n}\n.glossary-page[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 8px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(144, 188, 239, .24);\n}\n.glossary-page[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 46px;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 18px;\n  border-radius: 9px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.glossary-page[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background: #156bd9;\n}\n.glossary-page[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .secondary[_ngcontent-%COMP%] {\n  border: 1px solid rgba(166, 201, 244, .55);\n  background: rgba(4, 28, 64, .45);\n}\n.glossary-page[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .talk-action[_ngcontent-%COMP%] {\n  border: 1px solid #ff8218;\n  background: #ff8218;\n  box-shadow: 0 10px 24px rgba(255, 130, 24, .22);\n}\n.hero-ai[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n}\n.hero-ai[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 31px;\n  align-items: center;\n  padding: 6px 14px;\n  border: 1px solid rgba(145, 190, 243, .4);\n  border-radius: 999px;\n  background: rgba(3, 26, 59, .62);\n  color: #fff;\n  font: 700 10px var(--mono);\n  white-space: nowrap;\n}\n.hero-ai[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.hero-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid rgba(145, 190, 243, .4);\n  border-radius: 11px;\n  background: rgba(3, 26, 59, .76);\n  color: #fff;\n  text-decoration: none;\n  transition: transform .2s, background .2s;\n}\n.hero-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #124d96;\n  transform: translateY(-2px);\n}\n.hero-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  object-fit: contain;\n}\n@media (max-width: 1100px) {\n  .glossary-page[_ngcontent-%COMP%]   .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .glossary-page[_ngcontent-%COMP%]   .hero-layout[_ngcontent-%COMP%] {\n    gap: 28px;\n  }\n  .glossary-page[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n}\n@media (max-width: 700px) {\n  .glossary-page[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 145px;\n  }\n  .hero-ai[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .hero-ai[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .typing-caret[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.glossary-page[_ngcontent-%COMP%]   .default-faq-section[_ngcontent-%COMP%] {\n  padding-block: 76px;\n  background:\n    linear-gradient(\n      135deg,\n      #f6faff,\n      #eef5ff);\n}\n.glossary-page[_ngcontent-%COMP%]   .default-faq-section[_ngcontent-%COMP%]    > .pp-sec[_ngcontent-%COMP%], \n.glossary-page[_ngcontent-%COMP%]   .default-faq-section[_ngcontent-%COMP%]    > .pp-faq[_ngcontent-%COMP%] {\n  width: min(100%, 1200px);\n  margin-right: auto;\n  margin-left: auto;\n}\n.glossary-page[_ngcontent-%COMP%]   .default-faq-section[_ngcontent-%COMP%]    > .pp-sec[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n  color: #051f45;\n  font: 800 clamp(30px, 3vw, 42px)/1.15 var(--disp);\n  letter-spacing: -.035em;\n}\n.glossary-page[_ngcontent-%COMP%]   .default-faq-section[_ngcontent-%COMP%]    > .pp-faq[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 18px;\n}\n@media (max-width: 760px) {\n  .glossary-page[_ngcontent-%COMP%]   .default-faq-section[_ngcontent-%COMP%]    > .pp-faq[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cloud-glossary.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudGlossaryPage, [{
    type: Component,
    args: [{ selector: "xh-cloud-glossary-page", standalone: true, imports: [RouterLink, InsightsSectionComponent, ProductFaqComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="glossary-page">\r
  <section class="glossary-hero" aria-labelledby="glossary-title">\r
    <span class="hero-grid" aria-hidden="true"></span>\r
    <div class="wrap hero-layout">\r
      <div class="hero-copy">\r
        <nav class="crumb" aria-label="Breadcrumb"><a routerLink="/">Home</a><span>\u203A</span><span>Cloud Glossary</span></nav>\r
        <span class="eyebrow">XCELLHOST CLOUD KNOWLEDGE</span>\r
        <h1 id="glossary-title"><span>XcellCloud</span> | Cloud Glossary</h1>\r
        <p class="hero-tagline">Cloud Glossary from XcellHost</p>\r
        <strong class="hero-emphasis">Cloud terms explained in plain English<span class="typing-caret" aria-hidden="true"></span></strong>\r
        <div class="hero-actions product-actions"><a class="secondary" href="#glossary">Screenshot Tour</a><a class="secondary" href="#glossary">7 Day's Free Trial</a><a class="talk-action" routerLink="/contact">Let's Talk</a></div>\r
        <div class="hero-ai"><span>\u2726 Ask AI About Cloud Glossary from XcellHost</span><div><a href="https://chatgpt.com/?q=Explain%20the%20XcellHost%20Cloud%20Glossary" target="_blank" rel="noopener noreferrer" aria-label="Ask ChatGPT"><img src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=64" alt=""></a><a href="https://grok.com/?q=XcellHost%20Cloud%20Glossary" target="_blank" rel="noopener noreferrer" aria-label="Ask Grok"><img src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=64" alt=""></a><a href="https://claude.ai/new?q=XcellHost%20Cloud%20Glossary" target="_blank" rel="noopener noreferrer" aria-label="Ask Claude"><img src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=64" alt=""></a><a href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer" aria-label="Ask Gemini"><img src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=64" alt=""></a><a href="https://www.perplexity.ai/search?q=XcellHost%20Cloud%20Glossary" target="_blank" rel="noopener noreferrer" aria-label="Ask Perplexity"><img src="https://www.google.com/s2/favicons?domain=perplexity.ai&amp;sz=64" alt=""></a></div></div>\r
      </div>\r
      <div class="hero-art" aria-hidden="true">\r
        <span class="orbit one"></span><span class="orbit two"></span>\r
        <img class="hero-image" src="/assets/images/cloud-glossary-hero-diagram.svg" alt="Cloud glossary concepts connected in one knowledge map">\r
        <span class="floating-term term-a">CLOUD</span><span class="floating-term term-b">SECURITY</span><span class="floating-term term-c">AI</span>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div class="content-shell">\r
    <section id="overview" class="section intro-section">\r
      <div><span class="section-label">OVERVIEW</span><p class="overview-copy">A cloud glossary is a plain-language reference for the technologies, services and operating models used in modern IT. It helps business and technical teams share a common vocabulary, compare solutions and make confident decisions. Use this guide to understand essential terms\u2014from compute, storage and networking to cybersecurity, compliance, automation and artificial intelligence. Each explanation connects technical language with practical business context, helping everyone from decision-makers to IT teams communicate more clearly.</p></div>\r
    </section>\r
\r
    <section class="glossary-directory" id="glossary" aria-labelledby="directory-title">\r
      <div class="directory-wrap">\r
        <div class="directory-heading"><div><span class="section-label" id="directory-title">CLOUD A\u2013Z</span><p>Search instantly, filter by topic or jump directly to a letter.</p></div><strong>{{ resultCount() }}<small>terms shown</small></strong></div>\r
        <label class="directory-search" aria-label="Search cloud glossary"><span>\u2315</span><input type="search" placeholder="Search a term\u2026 e.g. IaaS, Kubernetes, VPC" [value]="search()" (input)="search.set($any($event.target).value)"></label>\r
        <div class="category-filters" role="group" aria-label="Filter glossary by category">@for (category of categories; track category.key) {<button type="button" [class.active]="activeCategory() === category.key" (click)="selectCategory(category.key)">{{ category.label }}</button>}</div>\r
        <nav class="alphabet-nav" aria-label="Jump to glossary letter">@for (letter of alphabet; track letter) {<a [href]="'#glossary-' + letter" [class.disabled]="!hasGlossaryLetter(letter)">{{ letter }}</a>}</nav>\r
        @if (glossaryGroups().length) {\r
          <div class="glossary-groups">@for (group of glossaryGroups(); track group.letter) {<section class="glossary-group" [id]="'glossary-' + group.letter"><h3>{{ group.letter }}</h3><div class="glossary-grid">@for (term of group.terms; track term.term) {<article class="glossary-card"><div class="glossary-card-head"><span class="term-icon tag-{{ term.category }}" aria-hidden="true">@switch (termIcon(term.term, term.category)) {@case ('aws') {<b class="aws-mark">aws</b>} @case ('link') {<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>} @case ('grid') {<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>} @case ('refresh') {<svg viewBox="0 0 24 24"><path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 9A7 7 0 0 1 18 6l2 1M18 15a7 7 0 0 1-12 3l-2-1"/></svg>} @case ('server') {<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/></svg>} @case ('database') {<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></svg>} @case ('shield') {<svg viewBox="0 0 24 24"><path d="M12 3 20 6v6c0 5-3.2 8.3-8 10-4.8-1.7-8-5-8-10V6l8-3Z"/><path d="m9 12 2 2 4-5"/></svg>} @case ('network') {<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="m8 7 3 9m5-9-3 9M8 6h8"/></svg>} @case ('code') {<svg viewBox="0 0 24 24"><path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12"/></svg>} @case ('cost') {<svg viewBox="0 0 24 24"><path d="M16 4H8l-2 4h12l-2-4ZM7 8c-2 3-3 5-3 8 0 3 3 5 8 5s8-2 8-5c0-3-1-5-3-8"/><path d="M9 13h6m-3-2v7"/></svg>} @case ('pulse') {<svg viewBox="0 0 24 24"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>} @default {<svg viewBox="0 0 24 24"><path d="M17.5 19a4.5 4.5 0 0 0 0-9 6 6 0 0 0-11.6 1.5A3.8 3.8 0 0 0 6.5 19h11Z"/></svg>}}</span><h4>{{ term.term }}</h4><small class="glossary-tag tag-{{ term.category }}">{{ categoryLabels[term.category] }}</small></div><p>{{ term.definition }}</p></article>}</div></section>}</div>\r
        } @else {<div class="no-results"><b>No matching cloud term found.</b><span>Try another search or choose \u201CAll\u201D.</span></div>}\r
      </div>\r
    </section>\r
\r
    <section class="section default-faq-section" aria-labelledby="glossaryFaqTitle"><div class="pp-sec pp-faq-heading" id="glossaryFaqTitle">Frequently asked questions</div><div class="pp-faq"><xh-product-faq [faqs]="faqs" /></div></section>\r
\r
    <section class="section services-band"><div class="services-heading"><span class="section-label">PUT IT TO WORK</span><h2>From glossary to the cloud.</h2><p>Know the terms, then let XcellHost run the cloud for you.</p></div><div class="four-grid"><a class="service-link" routerLink="/colocation"><i>\u25A6</i><b>Colocation</b><span>House your hardware in our Mumbai data centre.</span><em>Explore \u2192</em></a><a class="service-link" routerLink="/iot-cloud"><i>\u2301</i><b>IoT Cloud</b><span>Connect every device and process at the edge.</span><em>Explore \u2192</em></a><a class="service-link" routerLink="/agentic-ai"><i>\u2726</i><b>Agentic AI</b><span>Autonomous AI agents for your business.</span><em>Explore \u2192</em></a><a class="service-link" routerLink="/register-a-domain-name"><i>\u25CE</i><b>Register a Domain Name</b><span>Register your brand across 500+ extensions.</span><em>Explore \u2192</em></a></div></section>\r
\r
    <xh-insights-section pageSlug="cloud-glossary" />\r
\r
    <section class="section final-cta" id="contact" aria-labelledby="glossaryCtaTitle"><div><span class="cta-kicker">XCELLHOST DELIGHTFUL SUPPORT</span><h2 id="glossaryCtaTitle">Ready to start with Cloud Glossary?</h2><p>Free consultation \xB7 cloud guidance \xB7 24\xD77 support in English &amp; Hindi</p><div class="cta-actions"><a class="cta-primary" routerLink="/contact">Request a callback</a><a routerLink="/contact">\u26A1 Get Advice</a><a href="#glossary">\u2193 Browse Terms</a><a routerLink="/contact">\u25A3 Presentation</a><a href="https://wa.me/918657032540" target="_blank" rel="noopener noreferrer">Talk on WhatsApp</a><a href="mailto:sales@xcellhost.cloud">Email Us</a></div></div><a class="buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost 24 by 7 delightful support"><span class="buddha-glow" aria-hidden="true"></span><img src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost 24 by 7 Delightful Support" width="140" height="140" loading="lazy"></a></section>\r
  </div>\r
</main>\r
`, styles: ['/* src/app/pages/cloud-glossary.page.css */\n:host {\n  display: contents;\n}\n.glossary-page {\n  --navy:#041e42;\n  --blue:#1565d8;\n  --cyan:#27b6ff;\n  --orange:#ff8218;\n  --ink:#0b1d3a;\n  --muted:#60708a;\n  --line:#dbe6f4;\n  --ice:#f3f7fd;\n  color: var(--ink);\n  background: #fff;\n}\n.wrap,\n.content-shell {\n  width: min(1200px, calc(100% - 40px));\n  margin: auto;\n}\n.glossary-hero {\n  position: relative;\n  overflow: hidden;\n  min-height: 520px;\n  padding: 62px 0;\n  background:\n    radial-gradient(\n      circle at 80% 25%,\n      rgba(45, 150, 255, .35),\n      transparent 24%),\n    linear-gradient(\n      120deg,\n      #031a3a,\n      #073675 68%,\n      #07539d);\n  color: #fff;\n}\n.hero-grid {\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(rgba(125, 190, 255, .28) 1.2px, transparent 1.2px);\n  background-size: 21px 21px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 38%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 38%,\n      #000);\n}\n.hero-layout {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  align-items: center;\n  gap: 54px;\n}\n.crumb {\n  display: flex;\n  gap: 12px;\n  margin-bottom: 32px;\n  color: #9bc8ff;\n  font: 700 11px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.crumb a {\n  color: inherit;\n}\n.eyebrow,\n.section-label {\n  display: block;\n  color: #45baff;\n  font: 800 10px var(--mono);\n  letter-spacing: .2em;\n}\n.hero-copy h1 {\n  margin: 14px 0 4px;\n  font: 850 clamp(48px, 6vw, 72px)/1 var(--disp);\n  letter-spacing: -.05em;\n}\n.hero-copy h2 {\n  margin: 0 0 18px;\n  color: #6dccff;\n  font: 750 clamp(24px, 3vw, 34px)/1.2 var(--disp);\n}\n.hero-copy p {\n  max-width: 650px;\n  color: #d0dff4;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.hero-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 28px;\n}\n.hero-actions a,\n.final-cta a {\n  padding: 13px 20px;\n  border-radius: 9px;\n  font-weight: 750;\n  text-decoration: none;\n}\n.primary {\n  background: var(--orange);\n  color: #fff;\n  box-shadow: 0 12px 24px rgba(255, 130, 24, .25);\n}\n.secondary {\n  border: 1px solid rgba(255, 255, 255, .35);\n  color: #fff;\n}\n.hero-art {\n  position: relative;\n  min-height: 380px;\n  display: grid;\n  place-items: center;\n}\n.hero-image {\n  position: relative;\n  z-index: 2;\n  width: min(100%, 440px);\n  filter: drop-shadow(0 30px 30px rgba(0, 0, 0, .35));\n  animation: float 4s ease-in-out infinite;\n}\n.orbit {\n  position: absolute;\n  border: 1px dashed rgba(134, 198, 255, .35);\n  border-radius: 50%;\n  animation: spin 28s linear infinite;\n}\n.orbit.one {\n  width: 360px;\n  height: 360px;\n}\n.orbit.two {\n  width: 470px;\n  height: 470px;\n  animation-direction: reverse;\n}\n.brand-card,\n.floating-term {\n  position: absolute;\n  z-index: 3;\n  border: 1px solid rgba(152, 207, 255, .6);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, .25);\n  animation: float 3.5s ease-in-out infinite;\n}\n.brand-card {\n  right: 2%;\n  bottom: 5%;\n  display: grid;\n  padding: 12px 16px;\n  border-radius: 14px;\n  background: #fff;\n}\n.brand-card img {\n  width: 125px;\n}\n.brand-card small {\n  color: #1761bf;\n  font: 700 9px var(--mono);\n  text-align: center;\n}\n.floating-term {\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(4, 30, 66, .88);\n  font: 800 9px var(--mono);\n  letter-spacing: .1em;\n}\n.term-a {\n  left: 0;\n  top: 15%;\n}\n.term-b {\n  right: 3%;\n  top: 15%;\n  animation-delay: -1s;\n}\n.term-c {\n  left: 8%;\n  bottom: 10%;\n  animation-delay: -2s;\n}\n@keyframes float {\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.content-shell {\n  padding: 34px 0 80px;\n}\n.section {\n  margin: 28px 0;\n  padding: 54px;\n  border: 1px solid var(--line);\n  border-radius: 24px;\n  background: #fff;\n  box-shadow: 0 16px 42px rgba(15, 53, 104, .07);\n}\n.section h2 {\n  margin: 10px 0 20px;\n  color: var(--navy);\n  font: 800 clamp(28px, 3vw, 40px)/1.14 var(--disp);\n  letter-spacing: -.035em;\n}\n.section p {\n  color: var(--muted);\n  line-height: 1.72;\n}\n.intro-section,\n.split-feature,\n.security-grid {\n  display: grid;\n  grid-template-columns: 1.2fr .8fr;\n  gap: 42px;\n  align-items: center;\n}\n.quick-card,\n.visual-panel,\n.shield {\n  padding: 30px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #0b5ed7,\n      #08336d);\n  color: #fff;\n  text-align: center;\n}\n.quick-card > span {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto 14px;\n  place-items: center;\n  border-radius: 16px;\n  background: #fff;\n  color: #1767d7;\n  font-size: 28px;\n}\n.quick-card strong,\n.visual-panel > b,\n.shield b {\n  display: block;\n  font: 750 20px var(--disp);\n}\n.quick-card p,\n.shield small {\n  color: #cfe4ff;\n}\n.tint-blue {\n  background:\n    linear-gradient(\n      135deg,\n      #f4f8ff,\n      #eaf4ff);\n}\n.tint-warm {\n  background:\n    linear-gradient(\n      135deg,\n      #fffaf4,\n      #fff1e4);\n}\n.three-grid,\n.four-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.four-grid {\n  grid-template-columns: repeat(4, 1fr);\n}\n.feature,\n.mini-card,\n.benefit,\n.why-section .three-grid article {\n  padding: 25px;\n  border: 1px solid var(--line);\n  border-radius: 17px;\n  background: #fff;\n}\n.feature {\n  border-top: 4px solid #2581ee;\n}\n.feature.secure {\n  border-top-color: #ff8218;\n}\n.feature.govern {\n  border-top-color: #21a86b;\n}\n.feature i,\n.mini-card i,\n.benefit i,\n.why-section article i {\n  display: grid;\n  width: 43px;\n  height: 43px;\n  margin-bottom: 16px;\n  place-items: center;\n  border-radius: 12px;\n  background: #e7f1ff;\n  color: #1264d8;\n  font-style: normal;\n  font-weight: 800;\n}\n.feature h3 {\n  color: var(--navy);\n  font: 750 20px var(--disp);\n}\n.feature ul,\n.copilot ul {\n  margin: 15px 0 0;\n  padding-left: 18px;\n  color: #405675;\n  line-height: 1.8;\n}\n.mini-card b,\n.benefit b,\n.why-section article b {\n  display: block;\n  color: var(--navy);\n  font: 750 16px var(--disp);\n  margin-bottom: 8px;\n}\n.check-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-top: 22px;\n  color: #0a5ec8;\n  font-weight: 700;\n}\n.visual-panel {\n  min-height: 260px;\n  display: grid;\n  align-content: center;\n}\n.term-cloud {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 9px;\n  margin-top: 22px;\n}\n.term-cloud span {\n  padding: 8px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .14);\n  font-size: 12px;\n}\n.tabs {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin: 24px 0;\n}\n.tabs button {\n  padding: 11px 17px;\n  border: 1px solid var(--line);\n  border-radius: 10px;\n  background: #fff;\n  color: #315071;\n  font-weight: 750;\n  cursor: pointer;\n}\n.tabs button.active {\n  border-color: #176bdd;\n  background: #176bdd;\n  color: #fff;\n}\n.tab-panel {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 30px;\n  padding: 30px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #061f47,\n      #0a4b94);\n  color: #fff;\n}\n.tab-panel h3 {\n  font: 750 26px var(--disp);\n}\n.tab-panel p {\n  color: #cae0fb;\n}\n.tab-icon {\n  font-size: 32px;\n}\n.term-list {\n  display: grid;\n  gap: 9px;\n}\n.term-list span {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border: 1px solid rgba(255, 255, 255, .15);\n  border-radius: 10px;\n  background: rgba(255, 255, 255, .07);\n}\n.term-list i {\n  color: #5ce0a0;\n}\n.term-list b {\n  margin-left: auto;\n}\n.copilot {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n  background:\n    radial-gradient(\n      circle at 85% 20%,\n      rgba(112, 64, 255, .35),\n      transparent 30%),\n    linear-gradient(\n      135deg,\n      #071b48,\n      #172d70);\n  color: #fff;\n}\n.copilot h2 {\n  color: #fff;\n}\n.copilot p,\n.copilot li {\n  color: #d4def5;\n}\n.pill {\n  display: inline-flex;\n  padding: 7px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .12);\n  font: 800 10px var(--mono);\n  letter-spacing: .1em;\n}\n.prompt-stack {\n  display: grid;\n  gap: 12px;\n  align-content: center;\n}\n.prompt-stack span {\n  padding: 17px;\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 14px;\n  background: rgba(255, 255, 255, .08);\n}\n.before-after {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  gap: 22px;\n}\n.before-after article {\n  display: grid;\n  gap: 10px;\n  padding: 28px;\n  border: 1px solid #ffd8bd;\n  border-radius: 18px;\n  background: #fff8f2;\n}\n.before-after article.after {\n  border-color: #b9dbff;\n  background: #f2f8ff;\n}\n.before-after em {\n  color: #e66f12;\n  font: 800 10px var(--mono);\n  letter-spacing: .15em;\n}\n.before-after b {\n  font: 750 20px var(--disp);\n}\n.before-after span {\n  padding: 10px;\n  border-radius: 8px;\n  background: #fff;\n}\n.before-after > strong {\n  font-size: 30px;\n  color: #1a6cd8;\n}\n.audience-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.audience-grid span {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 17px;\n  border: 1px solid var(--line);\n  border-radius: 13px;\n  background: #fff;\n  font-size: 22px;\n}\n.audience-grid b {\n  font-size: 14px;\n}\n.included-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.included-grid article {\n  display: flex;\n  gap: 14px;\n  padding: 20px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n}\n.included-grid i {\n  display: grid;\n  flex: 0 0 28px;\n  height: 28px;\n  place-items: center;\n  border-radius: 50%;\n  background: #dff8eb;\n  color: #168653;\n  font-style: normal;\n}\n.included-grid b {\n  color: var(--navy);\n}\n.lead {\n  max-width: 850px;\n  margin-bottom: 24px;\n}\n.security {\n  background:\n    linear-gradient(\n      135deg,\n      #061d43,\n      #063e77);\n  color: #fff;\n}\n.security h2 {\n  color: #fff;\n}\n.security p {\n  color: #c8dcf3;\n}\n.certs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 20px;\n}\n.certs span {\n  padding: 8px 11px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .1);\n  font-size: 12px;\n}\n.shield {\n  background: rgba(255, 255, 255, .08);\n  border: 1px solid rgba(255, 255, 255, .17);\n  font-size: 48px;\n}\n.shield small {\n  display: block;\n  font-size: 12px;\n}\n.video-section {\n  text-align: center;\n}\n.video-frame {\n  max-width: 840px;\n  aspect-ratio: 16/9;\n  margin: auto;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 0 20px 50px rgba(5, 34, 75, .2);\n}\n.video-frame iframe {\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.testimonials blockquote {\n  margin: 0;\n  padding: 25px;\n  border: 1px solid #ffd8bc;\n  border-radius: 17px;\n  background: #fff;\n}\n.testimonials blockquote > span {\n  color: #ff8a16;\n  letter-spacing: .12em;\n}\n.testimonials cite {\n  color: #164f95;\n  font: 700 12px var(--mono);\n}\n.faq-list {\n  display: grid;\n  gap: 10px;\n}\n.faq-list article {\n  border: 1px solid var(--line);\n  border-radius: 13px;\n  overflow: hidden;\n}\n.faq-list button {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 20px;\n  border: 0;\n  background: #fff;\n  color: var(--navy);\n  text-align: left;\n  cursor: pointer;\n}\n.faq-list button span {\n  font-size: 22px;\n  transition: transform .2s;\n}\n.faq-list article p {\n  display: none;\n  padding: 0 20px 18px;\n}\n.faq-list article.open {\n  border-color: #90b9ee;\n}\n.faq-list article.open p {\n  display: block;\n}\n.faq-list article.open button span {\n  transform: rotate(45deg);\n}\n.final-cta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 25px;\n  background:\n    linear-gradient(\n      105deg,\n      #1469dc,\n      #073e8c);\n  color: #fff;\n}\n.final-cta h2 {\n  color: #fff;\n}\n.final-cta p {\n  color: #d7e7ff;\n}\n.final-cta > div:last-child {\n  display: flex;\n  gap: 10px;\n}\n.final-cta a {\n  display: inline-block;\n  background: var(--orange);\n  color: #fff;\n  white-space: nowrap;\n}\n.final-cta a:last-child {\n  background: #fff;\n  color: #0751ab;\n}\n@media (max-width: 900px) {\n  .hero-layout,\n  .intro-section,\n  .split-feature,\n  .security-grid,\n  .copilot,\n  .tab-panel {\n    grid-template-columns: 1fr;\n  }\n  .hero-art {\n    min-height: 330px;\n  }\n  .three-grid,\n  .four-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .section {\n    padding: 36px;\n  }\n  .final-cta {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (max-width: 600px) {\n  .wrap,\n  .content-shell {\n    width: min(100% - 28px, 1200px);\n  }\n  .glossary-hero {\n    padding: 46px 0;\n  }\n  .hero-copy h1 {\n    font-size: 45px;\n  }\n  .hero-actions,\n  .final-cta > div:last-child {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .hero-art {\n    min-height: 290px;\n  }\n  .brand-card {\n    right: 0;\n  }\n  .three-grid,\n  .four-grid,\n  .included-grid,\n  .audience-grid,\n  .check-grid {\n    grid-template-columns: 1fr;\n  }\n  .section {\n    margin: 18px 0;\n    padding: 27px 20px;\n    border-radius: 18px;\n  }\n  .before-after {\n    grid-template-columns: 1fr;\n  }\n  .before-after > strong {\n    transform: rotate(90deg);\n    justify-self: center;\n  }\n}\n.glossary-hero {\n  min-height: 590px;\n  padding: 54px 0 62px;\n  background:\n    radial-gradient(\n      circle at 77% 44%,\n      rgba(24, 119, 231, .32),\n      transparent 29%),\n    linear-gradient(\n      118deg,\n      #031832 0%,\n      #052b5d 62%,\n      #073d7e 100%);\n}\n.hero-layout {\n  grid-template-columns: 1.02fr .98fr;\n  gap: 36px;\n}\n.crumb {\n  margin-bottom: 24px;\n}\n.hero-copy h1 {\n  font-size: clamp(46px, 4.3vw, 64px);\n}\n.hero-copy h2 {\n  font-size: clamp(23px, 2.4vw, 31px);\n}\n.hero-emphasis {\n  display: block;\n  margin-top: 18px;\n  color: #68c2ff;\n  font: 750 20px/1.35 var(--disp);\n}\n.hero-points {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 11px 22px;\n  margin-top: 20px;\n  color: #d5e5f7;\n  font-size: 13px;\n}\n.hero-points span {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.hero-points i {\n  display: grid;\n  width: 20px;\n  height: 20px;\n  place-items: center;\n  border-radius: 50%;\n  background: #1776e8;\n  color: #fff;\n  font-style: normal;\n  font-size: 11px;\n}\n.hero-art {\n  min-height: 420px;\n}\n.hero-image {\n  width: min(112%, 580px);\n  max-width: none;\n}\n.brand-card {\n  right: 1%;\n  bottom: 4%;\n}\n.floating-term {\n  background: rgba(3, 25, 55, .94);\n}\n.content-shell {\n  width: 100%;\n  max-width: none;\n  padding: 0;\n  margin: 0;\n}\n.section {\n  width: 100%;\n  margin: 0;\n  padding: 76px max(28px, calc((100vw - 1200px)/2));\n  border: 0;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: none;\n}\n.section:nth-of-type(even):not(.security):not(.copilot):not(.final-cta) {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f9ff,\n      #edf5ff);\n}\n.section.tint-warm {\n  background:\n    linear-gradient(\n      135deg,\n      #fffaf4,\n      #fff1e4) !important;\n}\n.section + .section {\n  border-top: 1px solid rgba(214, 226, 242, .75);\n}\n.section h2 {\n  max-width: 920px;\n}\n.intro-section,\n.split-feature,\n.security-grid {\n  grid-template-columns: minmax(0, 1.2fr) minmax(300px, .8fr);\n}\n.feature,\n.mini-card,\n.benefit,\n.why-section .three-grid article,\n.testimonials blockquote,\n.included-grid article {\n  box-shadow: 0 12px 30px rgba(18, 62, 116, .07);\n  transition: transform .2s, box-shadow .2s;\n}\n.feature:hover,\n.mini-card:hover,\n.benefit:hover,\n.why-section .three-grid article:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 18px 36px rgba(18, 62, 116, .13);\n}\n.faq-section {\n  background:\n    linear-gradient(\n      135deg,\n      #f6faff,\n      #eef5ff) !important;\n}\n.faq-intro {\n  margin: -10px 0 27px;\n}\n.faq-list {\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 18px;\n  align-items: start;\n}\n.faq-list article {\n  background: #fff;\n  box-shadow: 0 8px 22px rgba(16, 55, 105, .055);\n}\n.faq-list article.open {\n  box-shadow: 0 14px 28px rgba(20, 88, 174, .11);\n}\n.final-cta {\n  margin: 64px auto;\n  width: min(1200px, calc(100% - 40px));\n  padding: 46px;\n  border-radius: 22px;\n  border: 0;\n}\n@media (max-width: 900px) {\n  .glossary-hero {\n    min-height: 0;\n  }\n  .hero-layout,\n  .intro-section,\n  .split-feature,\n  .security-grid {\n    grid-template-columns: 1fr;\n  }\n  .hero-art {\n    min-height: 350px;\n  }\n  .faq-list {\n    grid-template-columns: 1fr;\n  }\n  .section {\n    padding-block: 58px;\n  }\n  .final-cta {\n    width: calc(100% - 36px);\n    margin: 36px auto;\n  }\n}\n@media (max-width: 600px) {\n  .content-shell {\n    width: 100%;\n  }\n  .section {\n    margin: 0;\n    padding: 44px 20px;\n    border-radius: 0;\n  }\n  .hero-points {\n    grid-template-columns: 1fr;\n  }\n  .hero-art {\n    min-height: 300px;\n  }\n  .hero-image {\n    width: 112%;\n  }\n  .floating-term {\n    display: none;\n  }\n  .final-cta {\n    width: calc(100% - 28px);\n    padding: 30px 22px;\n    border-radius: 18px;\n  }\n}\n.section.intro-section {\n  display: block;\n  background: #fff;\n}\n.intro-section > div {\n  width: 100%;\n}\n.intro-section .section-label {\n  margin-bottom: 16px;\n}\n.overview-copy {\n  display: block;\n  width: 100%;\n  max-width: none;\n  margin: 0;\n  color: #263f60 !important;\n  font-size: 16px !important;\n  line-height: 1.85 !important;\n}\n.section.copilot {\n  display: grid;\n  background:\n    radial-gradient(\n      circle at 85% 20%,\n      rgba(112, 64, 255, .36),\n      transparent 31%),\n    linear-gradient(\n      135deg,\n      #061a44,\n      #172e72);\n  color: #fff;\n}\n.section.copilot h2 {\n  color: #fff;\n}\n.section.copilot p,\n.section.copilot li {\n  color: #d8e4ff;\n}\n.section.copilot .prompt-stack span {\n  color: #fff;\n  background: rgba(255, 255, 255, .1);\n}\n.section.security {\n  background:\n    radial-gradient(\n      circle at 82% 30%,\n      rgba(36, 132, 236, .28),\n      transparent 30%),\n    linear-gradient(\n      135deg,\n      #041936,\n      #063f78);\n  color: #fff;\n}\n.section.security h2 {\n  color: #fff;\n}\n.section.security p {\n  color: #d1e3f7;\n}\n.section.security .shield {\n  color: #fff;\n}\n.section.security .shield small {\n  color: #cce2fa;\n}\n@media (max-width: 900px) {\n  .section.copilot {\n    grid-template-columns: 1fr;\n  }\n}\n.hero-search {\n  display: flex;\n  max-width: 620px;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n  padding: 0 16px;\n  border: 1px solid rgba(132, 205, 255, .46);\n  border-radius: 11px;\n  background: rgba(2, 18, 42, .58);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, .18);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.hero-search span {\n  color: #65d8ef;\n  font-size: 25px;\n}\n.hero-search input {\n  width: 100%;\n  height: 50px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #fff;\n  font: 500 14px var(--body);\n}\n.hero-search input::placeholder {\n  color: #a9c4e3;\n}\n.glossary-directory {\n  padding: 72px max(28px, calc((100vw - 1200px)/2)) 88px;\n  background: #fff;\n  border-top: 1px solid var(--line);\n  scroll-margin-top: 90px;\n}\n.directory-wrap {\n  width: 100%;\n}\n.directory-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.directory-heading h2 {\n  margin: 9px 0 8px;\n  color: var(--navy);\n  font: 800 clamp(31px, 3vw, 42px)/1.15 var(--disp);\n  letter-spacing: -.035em;\n}\n.directory-heading p {\n  color: var(--muted);\n}\n.directory-heading > strong {\n  display: grid;\n  min-width: 108px;\n  color: #1263d4;\n  font: 850 34px var(--disp);\n  text-align: right;\n}\n.directory-heading > strong small {\n  color: #6f8098;\n  font: 700 9px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.category-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n  margin-bottom: 17px;\n}\n.category-filters button {\n  padding: 9px 15px;\n  border: 1px solid #d6e3f4;\n  border-radius: 999px;\n  background: #fff;\n  color: #18365f;\n  font: 700 12px var(--mono);\n  cursor: pointer;\n  transition: .2s;\n}\n.category-filters button:hover {\n  border-color: #176cdb;\n  color: #176cdb;\n}\n.category-filters button.active {\n  border-color: #052853;\n  background: #052853;\n  color: #fff;\n  box-shadow: 0 8px 18px rgba(5, 40, 83, .18);\n}\n.alphabet-nav {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 38px;\n  padding: 15px 0;\n  border-top: 1px solid #edf2f8;\n  border-bottom: 1px solid #edf2f8;\n}\n.alphabet-nav a {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border: 1px solid #cfe0f7;\n  border-radius: 8px;\n  background: #eaf2ff;\n  color: #0d61d6;\n  font: 800 12px var(--mono);\n  text-decoration: none;\n  transition: .18s;\n}\n.alphabet-nav a:hover {\n  transform: translateY(-2px);\n  background: #176bdd;\n  color: #fff;\n}\n.alphabet-nav a.disabled {\n  pointer-events: none;\n  opacity: .3;\n  filter: grayscale(1);\n}\n.glossary-group {\n  scroll-margin-top: 100px;\n  margin: 0 0 38px;\n  padding: 0;\n}\n.glossary-group > h3 {\n  margin: 0 0 16px;\n  padding-bottom: 9px;\n  border-bottom: 2px solid #dbe7f6;\n  color: #052957;\n  font: 850 34px/1 var(--disp);\n}\n.glossary-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 17px;\n}\n.glossary-card {\n  min-height: 156px;\n  padding: 22px;\n  border: 1px solid #d7e3f2;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 12px 28px rgba(11, 51, 103, .065);\n  transition:\n    transform .2s,\n    border-color .2s,\n    box-shadow .2s;\n}\n.glossary-card:hover {\n  transform: translateY(-4px);\n  border-color: #aacbf4;\n  box-shadow: 0 18px 38px rgba(11, 51, 103, .12);\n}\n.glossary-card-head {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr) auto;\n  align-items: start;\n  gap: 10px;\n  margin-bottom: 13px;\n}\n.glossary-card h4 {\n  margin: 3px 0 0;\n  color: #051f45;\n  font: 750 16px/1.32 var(--disp);\n}\n.glossary-card p {\n  margin: 0;\n  color: #5b6f8c;\n  font-size: 13px;\n  line-height: 1.62;\n}\n.term-icon {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid color-mix(in srgb, currentColor 35%, transparent);\n  border-radius: 10px;\n  background: color-mix(in srgb, currentColor 10%, white);\n  font: 800 13px var(--mono);\n}\n.glossary-tag {\n  margin-top: 2px;\n  padding: 5px 8px;\n  border: 1px solid currentColor;\n  border-radius: 999px;\n  background: color-mix(in srgb, currentColor 8%, white);\n  font: 700 8px var(--mono);\n  white-space: nowrap;\n}\n.tag-core {\n  color: #6498f5;\n}\n.tag-service {\n  color: #9270ef;\n}\n.tag-infra {\n  color: #08bdd9;\n}\n.tag-devops {\n  color: #20bd67;\n}\n.tag-data {\n  color: #ed58a0;\n}\n.tag-cost {\n  color: #f28a2f;\n}\n.no-results {\n  display: grid;\n  place-items: center;\n  min-height: 220px;\n  border: 1px dashed #bfd2ea;\n  border-radius: 18px;\n  background: #f7faff;\n  color: #526984;\n}\n.no-results b {\n  color: var(--navy);\n  font: 750 20px var(--disp);\n}\n.services-band {\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f3f7fd,\n      #eaf2fd) !important;\n}\n.services-heading {\n  max-width: 760px;\n  margin: 0 auto 30px;\n}\n.services-heading .section-label {\n  color: #1263d7;\n}\n.service-link {\n  display: grid;\n  min-height: 218px;\n  padding: 25px;\n  border: 1px solid #d7e3f2;\n  border-radius: 17px;\n  background: #fff;\n  color: inherit;\n  text-align: left;\n  text-decoration: none;\n  box-shadow: 0 12px 30px rgba(13, 54, 105, .07);\n  transition: .2s;\n}\n.service-link:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 18px 38px rgba(13, 54, 105, .13);\n}\n.service-link i {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border: 1px solid #cce0fa;\n  border-radius: 13px;\n  background: #f2f7ff;\n  color: #1263d7;\n  font-style: normal;\n  font-size: 20px;\n}\n.service-link b {\n  margin: 16px 0 7px;\n  color: var(--navy);\n  font: 750 17px var(--disp);\n}\n.service-link span {\n  color: var(--muted);\n  font-size: 13px;\n  line-height: 1.6;\n}\n.service-link em {\n  align-self: end;\n  margin-top: 13px;\n  color: #1164d8;\n  font-style: normal;\n  font-weight: 750;\n  font-size: 13px;\n}\n.section.final-cta {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 150px;\n  align-items: center;\n  padding: 42px 42px 42px 48px;\n}\n.final-cta > div:first-child {\n  min-width: 0;\n}\n.final-cta .cta-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 22px;\n}\n.final-cta .cta-actions a {\n  padding: 12px 17px;\n}\n.buddha-link {\n  display: grid;\n  place-items: center;\n  width: 140px;\n  height: 140px;\n  padding: 0 !important;\n  background: transparent !important;\n}\n.buddha-link img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: drop-shadow(0 12px 18px rgba(0, 0, 0, .24));\n  transition: transform .2s;\n}\n.buddha-link:hover img {\n  transform: scale(1.06);\n}\n@media (max-width: 1050px) {\n  .glossary-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .glossary-card-head {\n    grid-template-columns: 38px minmax(0, 1fr);\n  }\n  .glossary-tag {\n    grid-column: 2;\n    justify-self: start;\n  }\n}\n@media (max-width: 700px) {\n  .glossary-directory {\n    padding: 50px 18px;\n  }\n  .directory-heading {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .directory-heading > strong {\n    text-align: left;\n  }\n  .glossary-grid {\n    grid-template-columns: 1fr;\n  }\n  .category-filters {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    padding-bottom: 8px;\n  }\n  .category-filters button {\n    flex: 0 0 auto;\n  }\n  .section.final-cta {\n    grid-template-columns: 1fr;\n    padding: 30px 24px;\n  }\n  .buddha-link {\n    width: 110px;\n    height: 110px;\n  }\n  .final-cta .cta-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n.hero-copy h1 {\n  max-width: 720px;\n  font-size: clamp(37px, 3.7vw, 52px);\n  line-height: 1.08;\n  letter-spacing: -.035em;\n}\n.hero-copy h1 span {\n  color: #ef1727;\n}\n.hero-tagline {\n  margin: 17px 0 0 !important;\n  color: #d7e5f7 !important;\n  font-size: 18px !important;\n}\n.hero-emphasis {\n  margin-top: 18px;\n  font-size: 21px;\n}\n.hero-actions {\n  margin-top: 24px;\n}\n.hero-art::before {\n  content: "";\n  position: absolute;\n  width: 430px;\n  height: 430px;\n  border: 1px solid rgba(106, 180, 255, .22);\n  border-radius: 50%;\n}\n.hero-image {\n  z-index: 2;\n}\n.directory-search {\n  display: flex;\n  width: min(100%, 720px);\n  align-items: center;\n  gap: 10px;\n  margin: 0 0 22px;\n  padding: 0 15px;\n  border: 1px solid #c8daf0;\n  border-radius: 11px;\n  background: #fff;\n  box-shadow: 0 8px 20px rgba(13, 55, 108, .06);\n}\n.directory-search span {\n  color: #1267d7;\n  font-size: 24px;\n}\n.directory-search input {\n  width: 100%;\n  height: 48px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #153250;\n  font: 500 14px var(--body);\n}\n.directory-search input::placeholder {\n  color: #8292a8;\n}\n.section.final-cta {\n  min-height: 194px;\n}\n.final-cta h2 {\n  margin: 0;\n  color: #fff;\n  font-size: 24px;\n}\n.final-cta .cta-actions {\n  flex-wrap: wrap;\n}\n.final-cta .cta-actions a {\n  padding: 11px 17px;\n  border: 1px solid rgba(255, 255, 255, .42);\n  border-radius: 9px;\n  background: transparent;\n  color: #fff;\n  font-size: 13px;\n}\n.final-cta .cta-actions .cta-primary {\n  border-color: var(--orange);\n  background: var(--orange);\n  color: #fff;\n}\n.final-cta .cta-actions a:last-child {\n  background: transparent;\n  color: #fff;\n}\n.buddha-link {\n  flex: none;\n}\n.section.final-cta {\n  position: relative;\n  display: grid;\n  width: min(1200px, calc(100% - 40px));\n  min-height: 194px;\n  margin: 54px auto;\n  padding: 30px 28px 30px 36px;\n  grid-template-columns: minmax(0, 1fr) 112px;\n  align-items: center;\n  gap: 28px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 17px;\n  background:\n    linear-gradient(\n      105deg,\n      #2168d8,\n      #0c469f) !important;\n  color: #fff;\n  box-shadow: 0 18px 45px -28px rgba(4, 30, 66, .55);\n}\n.section.final-cta::after {\n  position: absolute;\n  right: -90px;\n  width: 280px;\n  height: 280px;\n  border: 1px solid rgba(255, 255, 255, .12);\n  border-radius: 50%;\n  box-shadow: 0 0 0 42px rgba(255, 255, 255, .035), 0 0 0 84px rgba(255, 255, 255, .025);\n  content: "";\n}\n.final-cta > div:first-child {\n  position: relative;\n  z-index: 2;\n}\n.final-cta h2 {\n  margin: 0 0 5px !important;\n  color: #fff !important;\n  font-size: 22px !important;\n}\n.final-cta p {\n  margin: 0;\n  color: #dceaff !important;\n  font-size: 14px;\n}\n.cta-kicker {\n  display: block;\n  margin-bottom: 7px;\n  color: #9bd2ff;\n  font: 800 9px var(--mono);\n  letter-spacing: .16em;\n}\n.final-cta .cta-actions {\n  margin-top: 25px;\n}\n.final-cta .cta-actions a {\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  justify-content: center;\n  color: #fff !important;\n}\n.final-cta .cta-actions .cta-primary {\n  background: #ff8218 !important;\n}\n.buddha-link {\n  position: relative;\n  z-index: 2;\n  width: 104px;\n  height: 104px;\n}\n.buddha-glow {\n  position: absolute;\n  width: 92px;\n  height: 92px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .12);\n  box-shadow: 0 0 34px rgba(115, 190, 255, .4);\n  animation: buddha-pulse 3.8s ease-in-out infinite;\n}\n.buddha-link img {\n  position: relative;\n  z-index: 1;\n}\n@keyframes buddha-pulse {\n  50% {\n    transform: scale(1.1);\n    opacity: .62;\n  }\n}\n@media (max-width: 700px) {\n  .section.final-cta {\n    width: calc(100% - 28px);\n    grid-template-columns: 1fr;\n    padding: 28px 22px;\n  }\n  .buddha-link {\n    width: 82px;\n    height: 82px;\n    justify-self: end;\n  }\n  .final-cta .cta-actions a {\n    flex: 1 1 145px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .buddha-glow {\n    animation: none;\n  }\n}\n.glossary-page .glossary-hero {\n  min-height: 560px;\n  height: 560px;\n  padding: 48px 0;\n}\n.glossary-page .hero-layout {\n  height: 464px;\n  grid-template-columns: 1.05fr .95fr;\n  gap: 56px;\n}\n.glossary-page .hero-art {\n  min-height: 390px;\n  height: 390px;\n}\n.glossary-page .hero-image {\n  width: min(100%, 520px);\n  max-width: 520px;\n  max-height: 390px;\n  object-fit: contain;\n  animation: none;\n}\n.glossary-page .hero-art::before {\n  width: 390px;\n  height: 390px;\n}\n.glossary-page .faq-section {\n  padding-block: 72px;\n}\n.glossary-page .faq-section > h2,\n.glossary-page .faq-section > .faq-intro,\n.glossary-page .faq-section > .section-label,\n.glossary-page .faq-list {\n  width: min(100%, 920px);\n  margin-right: auto;\n  margin-left: auto;\n}\n.glossary-page .faq-list {\n  grid-template-columns: 1fr;\n  gap: 10px;\n}\n.glossary-page .faq-list article {\n  box-shadow: none;\n}\n.glossary-page .faq-list button {\n  padding: 19px 22px;\n}\n.term-icon svg {\n  width: 21px;\n  height: 21px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.term-icon .aws-mark {\n  position: relative;\n  color: #17233b;\n  font: 800 9px Arial, sans-serif;\n  letter-spacing: -.04em;\n}\n.term-icon .aws-mark::after {\n  position: absolute;\n  right: -2px;\n  bottom: -4px;\n  left: 1px;\n  height: 4px;\n  border-bottom: 2px solid #ff9900;\n  border-radius: 50%;\n  content: "";\n}\n@media (max-width: 900px) {\n  .glossary-page .glossary-hero {\n    height: auto;\n    min-height: 0;\n  }\n  .glossary-page .hero-layout {\n    height: auto;\n  }\n  .glossary-page .hero-art {\n    height: 350px;\n  }\n  .glossary-page .hero-image {\n    max-height: 350px;\n  }\n}\n.glossary-page .hero-copy h1 {\n  max-width: none;\n  margin: 12px 0 10px;\n  font-size: clamp(38px, 3.35vw, 52px);\n  line-height: 1.08;\n  white-space: nowrap;\n}\n.glossary-page .hero-tagline {\n  margin: 0 0 23px !important;\n  color: #c9d9ee !important;\n  font-size: 17px !important;\n}\n.glossary-page .hero-emphasis {\n  display: flex;\n  align-items: center;\n  min-height: 31px;\n  margin: 0;\n  color: #68bdff;\n  font-size: 21px;\n}\n.typing-caret {\n  display: inline-block;\n  width: 2px;\n  height: 25px;\n  margin-left: 5px;\n  background: #68bdff;\n  animation: glossary-caret .85s steps(1) infinite;\n}\n@keyframes glossary-caret {\n  50% {\n    opacity: 0;\n  }\n}\n.glossary-page .product-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 8px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(144, 188, 239, .24);\n}\n.glossary-page .product-actions a {\n  display: inline-flex;\n  min-height: 46px;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 18px;\n  border-radius: 9px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.glossary-page .product-actions .primary {\n  background: #156bd9;\n}\n.glossary-page .product-actions .secondary {\n  border: 1px solid rgba(166, 201, 244, .55);\n  background: rgba(4, 28, 64, .45);\n}\n.glossary-page .product-actions .talk-action {\n  border: 1px solid #ff8218;\n  background: #ff8218;\n  box-shadow: 0 10px 24px rgba(255, 130, 24, .22);\n}\n.hero-ai {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n}\n.hero-ai > span {\n  display: inline-flex;\n  min-height: 31px;\n  align-items: center;\n  padding: 6px 14px;\n  border: 1px solid rgba(145, 190, 243, .4);\n  border-radius: 999px;\n  background: rgba(3, 26, 59, .62);\n  color: #fff;\n  font: 700 10px var(--mono);\n  white-space: nowrap;\n}\n.hero-ai > div {\n  display: flex;\n  gap: 8px;\n}\n.hero-ai a {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid rgba(145, 190, 243, .4);\n  border-radius: 11px;\n  background: rgba(3, 26, 59, .76);\n  color: #fff;\n  text-decoration: none;\n  transition: transform .2s, background .2s;\n}\n.hero-ai a:hover {\n  background: #124d96;\n  transform: translateY(-2px);\n}\n.hero-ai a img {\n  display: block;\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  object-fit: contain;\n}\n@media (max-width: 1100px) {\n  .glossary-page .hero-copy h1 {\n    white-space: normal;\n  }\n  .glossary-page .hero-layout {\n    gap: 28px;\n  }\n  .glossary-page .product-actions a {\n    padding-inline: 14px;\n  }\n}\n@media (max-width: 700px) {\n  .glossary-page .product-actions a {\n    flex: 1 1 145px;\n  }\n  .hero-ai {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .hero-ai > span {\n    white-space: normal;\n  }\n  .typing-caret {\n    display: none;\n  }\n}\n.glossary-page .default-faq-section {\n  padding-block: 76px;\n  background:\n    linear-gradient(\n      135deg,\n      #f6faff,\n      #eef5ff);\n}\n.glossary-page .default-faq-section > .pp-sec,\n.glossary-page .default-faq-section > .pp-faq {\n  width: min(100%, 1200px);\n  margin-right: auto;\n  margin-left: auto;\n}\n.glossary-page .default-faq-section > .pp-sec {\n  margin-bottom: 28px;\n  color: #051f45;\n  font: 800 clamp(30px, 3vw, 42px)/1.15 var(--disp);\n  letter-spacing: -.035em;\n}\n.glossary-page .default-faq-section > .pp-faq {\n  display: grid !important;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 18px;\n}\n@media (max-width: 760px) {\n  .glossary-page .default-faq-section > .pp-faq {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=cloud-glossary.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CloudGlossaryPage, { className: "CloudGlossaryPage", filePath: "src/app/pages/cloud-glossary.page.ts", lineNumber: 17 });
})();
export {
  CloudGlossaryPage
};
//# sourceMappingURL=chunk-X5WKJPBO.js.map
