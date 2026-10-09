import { Faq } from './models';
export const MANAGED_KUBERNETES_FAQS: Faq[] = [
  [
    "Do we need Kubernetes experts on our team?",
    "No. We handle provisioning, upgrades, patching and monitoring of the platform. Your developers deploy apps with the tools they already use, and our engineers are available 24×7 when you need help."
  ],
  [
    "Will our existing Docker images and Helm charts work?",
    "Yes. It's conformant upstream Kubernetes, so Docker images, Helm charts, Kustomize overlays and custom resource definitions (CRDs) deploy without changes."
  ],
  [
    "What do we control, and what does XcellHost manage?",
    "We run the control plane — API server, etcd, scheduler — plus upgrades, patching and backups. You control node pools, networking choices, autoscaling limits, quotas, namespaces and RBAC."
  ],
  [
    "How is high availability handled?",
    "Every cluster gets a redundant control plane at no charge. Persistent volumes, automated failover, self-healing pods and load balancing keep applications running if a node fails. The platform carries a 99.95% uptime SLA."
  ],
  [
    "How does autoscaling work and what does it cost?",
    "You set minimum and maximum nodes per node group. When pods can't be scheduled for lack of capacity, nodes are added; when demand drops, they're removed — up to 1,000 nodes. You pay the node rate for the extra nodes while they run. Use the calculator's peak estimate to budget."
  ],
  [
    "Are there charges for the control plane or bandwidth?",
    "No. The HA control plane is free on every cluster and bandwidth is included rather than metered. You pay for worker nodes and the block storage you provision."
  ],
  [
    "Can you help us migrate existing applications?",
    "Yes. Our team helps containerise legacy applications, move workloads from other clouds or VMs, and set up CI/CD pipelines with tools such as Jenkins, GitLab CI or Argo CD."
  ],
  [
    "Where is our data stored, and is it encrypted?",
    "Clusters are hosted in Indian data centres; other regions are available on request. Data is encrypted in transit and at rest, and Kubernetes secrets can be encrypted inside etcd."
  ],
  [
    "Can we run GPU workloads?",
    "Yes. Add GPU node groups to any cluster for training, inference or analytics. GPU capacity is quoted per configuration — request a quote and we'll size it to your model."
  ],
  [
    "How are we billed?",
    "In rupees, with a GST invoice. Choose monthly billing or a 6- or 12-month term for an indicative 5% or 10% discount. Pay by UPI, card, net banking or bank transfer."
  ]
];
