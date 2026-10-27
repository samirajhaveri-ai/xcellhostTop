import { Faq } from './models';
export const VIRTUALIZATION_FAQS: Faq[] = [
  [
    "What Is A Bare Metal Server For Virtualization?",
    "It is a dedicated physical server that runs your hypervisor directly on the hardware — no shared neighbours — with full root access, stable latency and predictable IOPS for VMware, Proxmox or Hyper-V."
  ],
  [
    "Which Hypervisors Do You Support?",
    "VMware ESXi (bring your own licence), Proxmox VE with KVM and LXC, and Hyper-V on Windows Server — with ISO mounting over IPMI, CPU pinning, huge pages and VLAN setup."
  ],
  [
    "How Do I Size CPU And RAM For My VMs?",
    "For mixed workloads, plan around 4–8 vCPUs per physical core; for databases, 1–2. Populate all memory channels and keep large VMs within a single NUMA node. Share your VM list and we'll size the hosts."
  ],
  [
    "What Storage Works Best For Virtualization?",
    "NVMe for VM disks. RAID 10 suits write-heavy datastores; ZFS works well with Proxmox; Ceph spreads storage across hosts for hyper-converged clusters."
  ],
  [
    "Can You Help Me Migrate From VMware?",
    "Yes. We assess your inventory, map features, build a pilot cluster, migrate VMs and keep a rollback plan — tuning storage and networking along the way."
  ],
  [
    "Do I Need To Buy VMware Or Windows Licences?",
    "Proxmox VE has no licence fee. For VMware you bring your own licence; Windows Server and Hyper-V licences can be supplied by XcellHost as a Microsoft partner."
  ],
  [
    "Can I Add GPUs?",
    "Yes — NVIDIA GPU hosts are available for VDI graphics and AI inference, subject to stock. Ask us for current options."
  ],
  [
    "Can I Build A Multi-Host Cluster?",
    "Yes. Order several hosts on private VLANs in the same data centre for clustering and live migration, with a replica site in another XcellHost data centre for DR."
  ]
];
