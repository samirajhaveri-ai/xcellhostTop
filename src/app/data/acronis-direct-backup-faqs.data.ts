import { Faq } from './models';

export const DIRECT_BACKUP_FAQS: Faq[] = [
  [
    "How do we start a trial and install the backup agents?",
    "Ask for a trial and XcellHost creates your customer account in the Acronis console, connects a test bucket and sends you the agent installer. You install it on a few machines (or we do it remotely), and backups start under a sample plan the same day."
  ],
  [
    "How much CPU and memory does backup use?",
    "It depends on the hardware, disk speed and size, and bandwidth. Backup runs at low priority and lets the operating system throttle it. Per Acronis, a modern server or PC typically sees about 3–4% CPU and up to 500 MB of RAM, with short CPU spikes while the snapshot is taken."
  ],
  [
    "Will it work with our existing storage?",
    "Yes. Acronis is hardware-independent: it uses standard protocols such as SMB and NFS, and any block storage your operating system can see. For cloud copies it writes to any S3-compatible object store."
  ],
  [
    "Can we back up to a network drive as well as the cloud?",
    "Yes. In the backup console you add a location, choose a network folder and enter its path. Many customers keep a fast local copy on a NAS and a second, immutable copy in their S3 bucket."
  ],
  [
    "How often can we back up — what RPO is possible?",
    "The minimum schedule is every 10 minutes. What you can sustain depends on disk size and speed, how much data changes and your bandwidth, so XcellHost tests it on your machines before committing to an RPO."
  ],
  [
    "Hyper-V: agentless or agent inside the VM?",
    "Use agentless backup for guest VMs by default. Install the Windows agent inside a VM when it needs ransomware protection (Active Protection) or application-aware backup of SQL Server or Exchange."
  ],
  [
    "Does Acronis deduplicate data?",
    "Yes, within each machine's backup archive: duplicate data is not stored again. There is no central deduplication server across customers, because each customer's data is encrypted and kept separate."
  ],
  [
    "How much does compression save?",
    "Typically around 30–40%, per Acronis. Photos, video and other already-compressed media shrink much less, which our estimator lets you account for."
  ]
];
