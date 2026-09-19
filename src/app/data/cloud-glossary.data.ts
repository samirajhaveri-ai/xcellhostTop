export type GlossaryCategory = 'core' | 'service' | 'infra' | 'devops' | 'data' | 'cost';

export interface CloudGlossaryTerm {
  category: GlossaryCategory;
  term: string;
  definition: string;
}

export const CLOUD_GLOSSARY_TERMS: CloudGlossaryTerm[] = [
  {
    "category": "service",
    "term": "Amazon Web Services (AWS)",
    "definition": "A major cloud platform offering a wide range of software services and infrastructure — one of the largest cloud vendors."
  },
  {
    "category": "core",
    "term": "API (Application Programming Interface)",
    "definition": "A defined interface that lets two pieces of software communicate — requesting data or features from one another."
  },
  {
    "category": "core",
    "term": "Application (Cloud App)",
    "definition": "A software program; when hosted and run on remote cloud servers it’s called a cloud app."
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
    "definition": "Whether an app is online and running as it should; when it goes offline that’s downtime."
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
    "definition": "A single-tenant physical server dedicated to one customer, with no virtualisation layer — maximum performance and control."
  },
  {
    "category": "infra",
    "term": "CDN (Content Delivery Network)",
    "definition": "A distributed network of edge servers that delivers content from the location nearest the user, cutting latency."
  },
  {
    "category": "devops",
    "term": "CI/CD",
    "definition": "Continuous Integration / Continuous Delivery — automatically building, testing and deploying code changes through a pipeline."
  },
  {
    "category": "core",
    "term": "Cloud Computing",
    "definition": "Delivering computing services — storage, networking, databases, compute — over the internet from remote servers rather than local hardware."
  },
  {
    "category": "infra",
    "term": "Cloud Firewall",
    "definition": "A firewall delivered as a cloud service that filters traffic to and from your cloud workloads."
  },
  {
    "category": "devops",
    "term": "Cloud Migration",
    "definition": "Moving digital operations — apps, data, infrastructure — from on-premises to the cloud (or between clouds)."
  },
  {
    "category": "devops",
    "term": "Cloud Native",
    "definition": "An application designed specifically to run on the cloud, using containers, microservices and managed services."
  },
  {
    "category": "core",
    "term": "Cloud Outage",
    "definition": "When cloud services become unavailable — due to power loss, connectivity issues or maintenance."
  },
  {
    "category": "devops",
    "term": "Cloud Repatriation",
    "definition": "Moving workloads back from public cloud to private cloud, colocation or on-prem, often for cost or control."
  },
  {
    "category": "service",
    "term": "Cloud Service Provider (CSP)",
    "definition": "A third-party company that provides cloud services — platforms, IaaS, storage, applications or management."
  },
  {
    "category": "infra",
    "term": "Cluster",
    "definition": "A group of physical or virtual computers working together on shared computing tasks."
  },
  {
    "category": "infra",
    "term": "Cold / Warm / Hot Site",
    "definition": "DR sites with increasing readiness — cold (bare), warm (partial), hot (fully redundant, near-instant failover)."
  },
  {
    "category": "infra",
    "term": "Colocation",
    "definition": "Housing your own hardware in a provider’s data centre, using their power, cooling, security and connectivity."
  },
  {
    "category": "cost",
    "term": "Compliance",
    "definition": "Meeting protocol and legal standards so cloud services are secure and satisfy regulatory requirements."
  },
  {
    "category": "core",
    "term": "Compute",
    "definition": "The resources used to run an application — CPU, memory and storage on a cloud machine."
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
    "definition": "The requirement that data is stored and processed within a specific country or region — key for DPDP and RBI compliance."
  },
  {
    "category": "data",
    "term": "Database",
    "definition": "Software designed to store, query and manage data; in the cloud, databases are often hosted as managed services."
  },
  {
    "category": "core",
    "term": "Deployment Models",
    "definition": "The ways cloud services are provisioned — public, private, hybrid and multi-cloud — each with different trade-offs."
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
    "definition": "Processing data close to where it’s generated (at the network edge) to cut latency and bandwidth."
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
    "definition": "Encoding data so only authorised parties can read it — protecting it in transit and at rest."
  },
  {
    "category": "infra",
    "term": "Fault Tolerance",
    "definition": "Designing systems to keep running despite failures, through redundancy, failover and data replication."
  },
  {
    "category": "cost",
    "term": "FinOps",
    "definition": "Cloud financial operations — the practice of managing, allocating and optimising cloud spend across teams."
  },
  {
    "category": "service",
    "term": "Google Cloud Platform (GCP)",
    "definition": "Google’s cloud platform, one of the largest vendors, offering compute, data, AI and networking services."
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
    "definition": "The foundational layer of cloud — compute, data centres, hardware, servers, networking and virtualisation software."
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
    "definition": "A model where the provider runs and maintains your cloud infrastructure — patching, monitoring and support included."
  },
  {
    "category": "devops",
    "term": "Microservices",
    "definition": "An architecture of small, independent services connected by APIs that together form an application."
  },
  {
    "category": "service",
    "term": "Microsoft Azure",
    "definition": "Microsoft’s cloud platform, one of the largest vendors, spanning compute, data, AI and enterprise services."
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
    "definition": "Storing data as objects (with metadata and a unique ID), ideal for unstructured data at scale — e.g. S3-compatible storage."
  },
  {
    "category": "core",
    "term": "On-Premises (On-Prem)",
    "definition": "Digital infrastructure — data centres, hardware, software — hosted in your own physical location."
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
    "definition": "An environment — hardware or software — that software is hosted and run on."
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
    "definition": "Any component used in computing — compute, memory, storage, network — physical or virtual, sometimes shared."
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
    "definition": "Software delivered over the cloud and accessed via a browser or API, usually for a subscription — no local install."
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
    "definition": "Running code without managing servers yourself — the provider handles provisioning, scaling and server management."
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
    "definition": "Cloud infrastructure kept within a country’s jurisdiction, giving control over data, access and compliance."
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
    "definition": "The guaranteed percentage of time a service will be available, e.g. 99.99% — with credits if missed."
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

