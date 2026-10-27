import { Faq } from './models';
export const STORAGE_FAQS: Faq[] = [
  [
    "What Is A Storage Server?",
    "A storage server is a dedicated machine built to hold and serve large volumes of data — many high-capacity drives, a RAID controller or ZFS for protection, and fast network ports — with full OS-level control and no resources shared with other customers."
  ],
  [
    "Why Would I Need A Dedicated Storage Server?",
    "When data grows quickly or datasets are large, a dedicated server gives you full isolation, consistent I/O performance and hardware-level control, with no other tenant affecting your throughput."
  ],
  [
    "How Is A Storage Server Different From A NAS Box?",
    "A NAS is built for light file sharing in an office. A dedicated storage server is enterprise hardware in a Tier IV data centre, with more processing power, more drive bays, redundant power and networking, and full OS control."
  ],
  [
    "Can I Use SSD Or HDD In My Storage Server?",
    "Both. HDDs give the most capacity per rupee for archives, backups and sequential workloads; SSDs and NVMe give high IOPS and low latency for databases and write-heavy work. Hybrid builds use SSD caching in front of HDD capacity."
  ],
  [
    "Which RAID Level Should I Choose?",
    "RAID 1 or 10 for performance with mirroring, RAID 5 for capacity with single-drive protection, and RAID 6 when you need to survive two drive failures — the usual choice for large HDD pools. The builder on this page shows usable capacity and fault tolerance for each."
  ],
  [
    "How Do I Scale Storage Over Time?",
    "Add drives to empty bays, replace drives with larger ones, or add more storage servers linked over private VLANs. ZFS and RAID expansion can usually be done without downtime."
  ],
  [
    "Can I Choose The Data Centre?",
    "Yes — Mumbai DC-1, Mumbai DC-2 or Pune DC-3. Many customers place a primary server in Mumbai and a replica in Pune for disaster recovery."
  ],
  [
    "Is Bandwidth Included?",
    "Yes. Every storage server includes a bandwidth allowance on a 1 Gbps port, with unmetered and 10 Gbps options for large transfers."
  ],
  [
    "Can I Fully Customise The Configuration?",
    "Yes — CPU, RAM, drive type and size, RAID level, bandwidth, operating system and control panel are all chosen to fit your workload."
  ],
  [
    "What Does The Private Network Give Me?",
    "Secure server-to-server links that never touch the public internet — ideal for replication, backup sync and internal services at full speed."
  ]
];
