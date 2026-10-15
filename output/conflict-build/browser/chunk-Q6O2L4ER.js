import {
  TestimonialsComponent,
  TrustBarComponent
} from "./chunk-UJO3GVNO.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  DocRequestService
} from "./chunk-FGJ7AN27.js";
import {
  WORLD_MAP_HTML
} from "./chunk-LN7P5EZP.js";
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/data/security-glossary.data.ts
var SECURITY_TERMS = [
  {
    "category": "core",
    "term": "Access Control",
    "label": "Core & access",
    "definition": "Ensuring resources are granted only to users who are entitled to them.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "core",
    "term": "Access Control List (ACL)",
    "label": "Core & access",
    "definition": "A mechanism that enforces access control by listing which entities may access a resource.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "network",
    "term": "Address Resolution Protocol (ARP)",
    "label": "Networking",
    "definition": "A protocol that maps an IP address to a physical (MAC) machine address on the local network.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "crypto",
    "term": "Advanced Encryption Standard (AES)",
    "label": "Cryptography",
    "definition": "A widely used, publicly disclosed symmetric encryption algorithm standardised by NIST.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "core",
    "term": "Algorithm",
    "label": "Core & access",
    "definition": "A finite set of step-by-step instructions for solving a problem or computation.",
    "icon": "/assets/images/security-glossary/icon-3.svg"
  },
  {
    "category": "crypto",
    "term": "Asymmetric Cryptography",
    "label": "Cryptography",
    "definition": "Public-key cryptography \u2014 algorithms that use a paired public and private key for different steps.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "threat",
    "term": "Attack Surface",
    "label": "Threats & attacks",
    "definition": "The total set of points where an attacker could try to enter or extract data from a system.",
    "icon": "/assets/images/security-glossary/icon-5.svg"
  },
  {
    "category": "compliance",
    "term": "Auditing",
    "label": "Risk & compliance",
    "definition": "Gathering and analysing information about assets to ensure policy compliance and security.",
    "icon": "/assets/images/security-glossary/icon-6.svg"
  },
  {
    "category": "core",
    "term": "Authentication",
    "label": "Core & access",
    "definition": "The process of confirming that a claimed identity is genuine.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "core",
    "term": "Authorization",
    "label": "Core & access",
    "definition": "The approval or permission for someone or something to perform an action.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "core",
    "term": "Availability",
    "label": "Core & access",
    "definition": "Ensuring a system\u2019s business purpose can be met and it is accessible to those who need it.",
    "icon": "/assets/images/security-glossary/icon-7.svg"
  },
  {
    "category": "threat",
    "term": "Backdoor",
    "label": "Threats & attacks",
    "definition": "A tool installed after a compromise to give an attacker easy access, bypassing security controls.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "Bastion Host",
    "label": "Defense & response",
    "definition": "A host hardened in anticipation of vulnerabilities, often exposed to a hostile network.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "core",
    "term": "Biometrics",
    "label": "Core & access",
    "definition": "Using physical characteristics of users (fingerprint, face, iris) to determine access.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "crypto",
    "term": "Block Cipher",
    "label": "Cryptography",
    "definition": "An encryption method that processes one fixed-size block of data at a time.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "defense",
    "term": "Blue Team",
    "label": "Defense & response",
    "definition": "The people who perform defensive security tasks \u2014 firewalls, patching, authentication, monitoring.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "threat",
    "term": "Botnet",
    "label": "Threats & attacks",
    "definition": "A large network of compromised computers used to send spam, spread malware or launch DDoS attacks.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Brute Force",
    "label": "Threats & attacks",
    "definition": "An attack that tries all possible keys or passwords, one by one, until one works.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Buffer Overflow",
    "label": "Threats & attacks",
    "definition": "When a program writes more data to a buffer than it can hold, corrupting adjacent memory \u2014 often exploitable.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "compliance",
    "term": "Business Continuity Plan (BCP)",
    "label": "Risk & compliance",
    "definition": "A plan for emergency response, backup operations and recovery to keep critical operations running.",
    "icon": "/assets/images/security-glossary/icon-10.svg"
  },
  {
    "category": "compliance",
    "term": "Business Impact Analysis (BIA)",
    "label": "Risk & compliance",
    "definition": "Determines what levels of impact to a system are tolerable, to prioritise protection.",
    "icon": "/assets/images/security-glossary/icon-11.svg"
  },
  {
    "category": "crypto",
    "term": "Certificate-Based Authentication",
    "label": "Cryptography",
    "definition": "Using SSL/TLS certificates to authenticate and encrypt traffic.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "compliance",
    "term": "Chain of Custody",
    "label": "Risk & compliance",
    "definition": "The documented handling of evidence to preserve its integrity for legal proceedings.",
    "icon": "/assets/images/security-glossary/icon-6.svg"
  },
  {
    "category": "crypto",
    "term": "Cipher",
    "label": "Cryptography",
    "definition": "A cryptographic algorithm for encryption and decryption.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "crypto",
    "term": "Ciphertext",
    "label": "Cryptography",
    "definition": "The encrypted, unreadable form of a message.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "core",
    "term": "Cloud Computing",
    "label": "Core & access",
    "definition": "Using remote servers in a provider\u2019s data centre to store, manage and process data instead of local systems.",
    "icon": "/assets/images/security-glossary/icon-12.svg"
  },
  {
    "category": "core",
    "term": "Confidentiality",
    "label": "Core & access",
    "definition": "Ensuring information is disclosed only to those authorised to see it.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "network",
    "term": "Cookie",
    "label": "Networking",
    "definition": "Data exchanged between a web server and browser to store state on the client side for later use.",
    "icon": "/assets/images/security-glossary/icon-6.svg"
  },
  {
    "category": "defense",
    "term": "Countermeasure",
    "label": "Defense & response",
    "definition": "A reactive method used to prevent an exploit once a threat is detected \u2014 patches, ACLs, IPS actions.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "threat",
    "term": "Credential Stuffing",
    "label": "Threats & attacks",
    "definition": "Using stolen username/password pairs from one breach to try logging in to other services at scale.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Crimeware",
    "label": "Threats & attacks",
    "definition": "Malware built specifically to help criminals profit from infected systems.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "Cryptanalysis",
    "label": "Cryptography",
    "definition": "The science of analysing a cryptographic system to break or circumvent its protection.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "threat",
    "term": "Cyber-Attack",
    "label": "Threats & attacks",
    "definition": "Any unauthorised attempt to access, disrupt, steal or damage systems, networks or data.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "compliance",
    "term": "Cybersecurity Risk Assessment",
    "label": "Risk & compliance",
    "definition": "The systematic process of identifying, analysing and evaluating threats, vulnerabilities and impacts to digital assets.",
    "icon": "/assets/images/security-glossary/icon-11.svg"
  },
  {
    "category": "threat",
    "term": "Data Breach",
    "label": "Threats & attacks",
    "definition": "A security incident where sensitive, protected or confidential data is accessed, stolen or disclosed without authorisation.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "Data Encryption Standard (DES)",
    "label": "Cryptography",
    "definition": "An older symmetric encryption method using a shared secret key (now superseded by AES).",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "compliance",
    "term": "Data Residency",
    "label": "Risk & compliance",
    "definition": "The requirement that data is stored and processed within a specific country or region.",
    "icon": "/assets/images/security-glossary/icon-13.svg"
  },
  {
    "category": "defense",
    "term": "Defense In-Depth",
    "label": "Defense & response",
    "definition": "Using multiple layers of security so no single failure exposes the whole system.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "network",
    "term": "Demilitarized Zone (DMZ)",
    "label": "Networking",
    "definition": "A network segment between the internal network and an external network, isolating public-facing services.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "threat",
    "term": "Denial of Service (DoS)",
    "label": "Threats & attacks",
    "definition": "Preventing authorised access to a system by overwhelming or disrupting it.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Dictionary Attack",
    "label": "Threats & attacks",
    "definition": "Trying words from a predefined list to crack a password, rather than every combination.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "Diffie-Hellman",
    "label": "Cryptography",
    "definition": "A key-agreement algorithm that lets two parties establish a shared secret over an insecure channel.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "crypto",
    "term": "Digital Certificate",
    "label": "Cryptography",
    "definition": "An electronic credential issued by a CA that binds an identity to a public key.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "crypto",
    "term": "Digital Signature",
    "label": "Cryptography",
    "definition": "A cryptographic hash of a message that verifies the sender and proves the message hasn\u2019t changed.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "compliance",
    "term": "Disaster Recovery Plan (DRP)",
    "label": "Risk & compliance",
    "definition": "The process for recovering IT systems after a disruption or disaster.",
    "icon": "/assets/images/security-glossary/icon-10.svg"
  },
  {
    "category": "network",
    "term": "DNS (Domain Name System)",
    "label": "Networking",
    "definition": "The system that translates human-readable domain names into IP addresses.",
    "icon": "/assets/images/security-glossary/icon-14.svg"
  },
  {
    "category": "threat",
    "term": "DNS Cache Poisoning",
    "label": "Threats & attacks",
    "definition": "Injecting malicious data into a DNS resolver\u2019s cache to redirect users to fake sites.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Domain Hijacking",
    "label": "Threats & attacks",
    "definition": "Taking over a domain by seizing control of its DNS records or registrar account.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "compliance",
    "term": "DPDP Act",
    "label": "Risk & compliance",
    "definition": "India\u2019s Digital Personal Data Protection Act, governing how personal data is collected and processed.",
    "icon": "/assets/images/security-glossary/icon-6.svg"
  },
  {
    "category": "compliance",
    "term": "Due Care",
    "label": "Risk & compliance",
    "definition": "Ensuring a minimum level of protection is in place in line with industry best practice.",
    "icon": "/assets/images/security-glossary/icon-6.svg"
  },
  {
    "category": "compliance",
    "term": "Due Diligence",
    "label": "Risk & compliance",
    "definition": "Developing and deploying a protection plan to prevent, and detect, fraud and abuse.",
    "icon": "/assets/images/security-glossary/icon-6.svg"
  },
  {
    "category": "threat",
    "term": "Dumpster Diving",
    "label": "Threats & attacks",
    "definition": "Recovering sensitive information (passwords, directories) from discarded media or paper.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Eavesdropping",
    "label": "Threats & attacks",
    "definition": "Secretly listening to private communications to gather information.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "EDR (Endpoint Detection & Response)",
    "label": "Defense & response",
    "definition": "Continuously monitors endpoints to detect, investigate and respond to threats in real time.",
    "icon": "/assets/images/security-glossary/icon-15.svg"
  },
  {
    "category": "defense",
    "term": "Egress Filtering",
    "label": "Defense & response",
    "definition": "Filtering outbound network traffic to control what can leave the network.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "crypto",
    "term": "Encryption",
    "label": "Cryptography",
    "definition": "Transforming readable data (plaintext) into an unreadable form (ciphertext) to protect it.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "network",
    "term": "Ethernet",
    "label": "Networking",
    "definition": "The most widely used local-area-network technology (IEEE 802.3).",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "core",
    "term": "Event",
    "label": "Core & access",
    "definition": "An observable occurrence in a system or network.",
    "icon": "/assets/images/security-glossary/icon-7.svg"
  },
  {
    "category": "threat",
    "term": "Exploit",
    "label": "Threats & attacks",
    "definition": "Code or a technique that takes advantage of a vulnerability to compromise a system.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Exposure",
    "label": "Threats & attacks",
    "definition": "A threat action where sensitive data is directly released to an unauthorised entity.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Fingerprinting",
    "label": "Threats & attacks",
    "definition": "Sending crafted packets to a system to determine its operating system or services.",
    "icon": "/assets/images/security-glossary/icon-16.svg"
  },
  {
    "category": "defense",
    "term": "Firewall",
    "label": "Defense & response",
    "definition": "A logical or physical barrier in a network that prevents unauthorised access to data or resources.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "threat",
    "term": "Flooding",
    "label": "Threats & attacks",
    "definition": "Overwhelming a system with more input than it can process to cause failure.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "Fuzzing",
    "label": "Defense & response",
    "definition": "Feeding out-of-spec input to an application to find security vulnerabilities.",
    "icon": "/assets/images/security-glossary/icon-16.svg"
  },
  {
    "category": "network",
    "term": "Gateway",
    "label": "Networking",
    "definition": "A network point that acts as an entrance to another network.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "defense",
    "term": "Hardening",
    "label": "Defense & response",
    "definition": "Identifying and fixing vulnerabilities to reduce a system\u2019s attack surface.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "crypto",
    "term": "Hash Function",
    "label": "Cryptography",
    "definition": "An algorithm that maps data to a fixed-size value, used to verify integrity (e.g. SHA-256).",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "defense",
    "term": "Honeypot",
    "label": "Defense & response",
    "definition": "A decoy system that simulates vulnerable services to detect, log and study attackers.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "defense",
    "term": "Host-Based IDS",
    "label": "Defense & response",
    "definition": "An intrusion-detection system that watches operations on a single host using OS audit records.",
    "icon": "/assets/images/security-glossary/icon-15.svg"
  },
  {
    "category": "network",
    "term": "HTTPS",
    "label": "Networking",
    "definition": "HTTP secured with TLS/SSL to encrypt traffic between browser and server.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "threat",
    "term": "Hybrid Attack",
    "label": "Threats & attacks",
    "definition": "A dictionary attack extended with numerals and symbols added to words.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "core",
    "term": "Identity",
    "label": "Core & access",
    "definition": "Who someone or what something is \u2014 the name by which it is known.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "core",
    "term": "Incident",
    "label": "Core & access",
    "definition": "An adverse event in a system or network, or the threat that one will occur.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "Incident Handling",
    "label": "Defense & response",
    "definition": "A six-step action plan for intrusions: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned.",
    "icon": "/assets/images/security-glossary/icon-17.svg"
  },
  {
    "category": "defense",
    "term": "Incident Response",
    "label": "Defense & response",
    "definition": "The structured process of identifying, managing and mitigating cybersecurity incidents to limit damage and recover.",
    "icon": "/assets/images/security-glossary/icon-17.svg"
  },
  {
    "category": "core",
    "term": "Information Security (InfoSec)",
    "label": "Core & access",
    "definition": "Protecting information from unauthorised access, disclosure, alteration, destruction or disruption.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "defense",
    "term": "Ingress Filtering",
    "label": "Defense & response",
    "definition": "Filtering inbound network traffic to control what can enter the network.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "core",
    "term": "Integrity",
    "label": "Core & access",
    "definition": "Ensuring information has not been changed accidentally or deliberately and is accurate and complete.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "defense",
    "term": "Intrusion Detection (IDS)",
    "label": "Defense & response",
    "definition": "A system that gathers and analyses information to identify possible security breaches.",
    "icon": "/assets/images/security-glossary/icon-15.svg"
  },
  {
    "category": "threat",
    "term": "IP Spoofing",
    "label": "Threats & attacks",
    "definition": "Supplying a false source IP address to impersonate another system or hide the origin of traffic.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "IPsec",
    "label": "Cryptography",
    "definition": "A standard for security at the network/packet layer, encrypting and authenticating IP traffic.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "crypto",
    "term": "Kerberos",
    "label": "Cryptography",
    "definition": "A ticket-based authentication system using symmetric cryptography in client-server networks.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "threat",
    "term": "Lateral Movement",
    "label": "Threats & attacks",
    "definition": "How an attacker moves through a network from an initial foothold toward higher-value systems.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "Least Privilege",
    "label": "Defense & response",
    "definition": "Giving users and applications only the minimum permissions needed to do their job.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "threat",
    "term": "Logic Bomb",
    "label": "Threats & attacks",
    "definition": "Malicious code that executes when a predefined condition or date is met.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "network",
    "term": "MAC Address",
    "label": "Networking",
    "definition": "A physical hardware address that uniquely identifies a network device.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "threat",
    "term": "Malicious Code",
    "label": "Threats & attacks",
    "definition": "Software (like a Trojan) that appears useful but gains unauthorised access or runs hidden malicious logic.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Malware",
    "label": "Threats & attacks",
    "definition": "A generic term for many types of malicious software \u2014 viruses, worms, Trojans, ransomware and more.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Man-in-the-Middle (MitM)",
    "label": "Threats & attacks",
    "definition": "An attacker secretly intercepts and relays messages between two parties who think they\u2019re talking directly.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "core",
    "term": "Mandatory Access Control (MAC)",
    "label": "Core & access",
    "definition": "Access controlled by the system based on classification levels, not changeable by users.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "crypto",
    "term": "MD5",
    "label": "Cryptography",
    "definition": "A one-way cryptographic hash function (now considered weak for security use).",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "core",
    "term": "MFA (Multi-Factor Authentication)",
    "label": "Core & access",
    "definition": "Requiring two or more independent factors (something you know, have or are) to authenticate.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "network",
    "term": "Network Address Translation (NAT)",
    "label": "Networking",
    "definition": "Translating IP addresses between an internal network and an external one.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "core",
    "term": "Non-Repudiation",
    "label": "Core & access",
    "definition": "The ability to prove a specific user sent a message and that it wasn\u2019t modified.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "crypto",
    "term": "One-Way Encryption",
    "label": "Cryptography",
    "definition": "Irreversible transformation of plaintext to ciphertext that can\u2019t be practically reversed.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "defense",
    "term": "Patch",
    "label": "Defense & response",
    "definition": "A small update released to fix bugs or vulnerabilities in existing software.",
    "icon": "/assets/images/security-glossary/icon-10.svg"
  },
  {
    "category": "defense",
    "term": "Patching",
    "label": "Defense & response",
    "definition": "The process of updating software to fix vulnerabilities and bugs.",
    "icon": "/assets/images/security-glossary/icon-10.svg"
  },
  {
    "category": "threat",
    "term": "Payload",
    "label": "Threats & attacks",
    "definition": "The actual data (or malicious action) a packet or exploit carries.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "Penetration Testing",
    "label": "Defense & response",
    "definition": "Authorised testing that simulates attacks to find and validate exploitable weaknesses in a system.",
    "icon": "/assets/images/security-glossary/icon-16.svg"
  },
  {
    "category": "threat",
    "term": "Pharming",
    "label": "Threats & attacks",
    "definition": "Redirecting a user\u2019s session to a fake site by corrupting DNS, to harvest credentials.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Phishing",
    "label": "Threats & attacks",
    "definition": "Emails that appear to come from a trusted source to trick users into revealing credentials at a fake site.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "core",
    "term": "Phishing-Resistant Auth",
    "label": "Core & access",
    "definition": "Authentication (like FIDO2/passkeys) that can\u2019t be captured by phishing or replayed.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Ping of Death",
    "label": "Threats & attacks",
    "definition": "Sending an oversized ICMP echo request to overflow a target\u2019s buffers and crash it.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "Plaintext",
    "label": "Cryptography",
    "definition": "Ordinary readable text before encryption or after decryption.",
    "icon": "/assets/images/security-glossary/icon-6.svg"
  },
  {
    "category": "threat",
    "term": "Port Scan",
    "label": "Threats & attacks",
    "definition": "Sending messages to a range of ports to discover which services a system runs, and probe for weakness.",
    "icon": "/assets/images/security-glossary/icon-16.svg"
  },
  {
    "category": "network",
    "term": "Promiscuous Mode",
    "label": "Networking",
    "definition": "A NIC mode that reads all packets on the network, regardless of destination \u2014 used for sniffing.",
    "icon": "/assets/images/security-glossary/icon-15.svg"
  },
  {
    "category": "network",
    "term": "Proxy Server",
    "label": "Networking",
    "definition": "An intermediary between users and the internet, providing security, control and caching.",
    "icon": "/assets/images/security-glossary/icon-18.svg"
  },
  {
    "category": "crypto",
    "term": "Public Key",
    "label": "Cryptography",
    "definition": "The publicly shared component of an asymmetric key pair.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "crypto",
    "term": "Public Key Infrastructure (PKI)",
    "label": "Cryptography",
    "definition": "The framework of keys, certificates and authorities that enables secure, private exchange over a public network.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "threat",
    "term": "Ransomware",
    "label": "Threats & attacks",
    "definition": "Malware that encrypts a victim\u2019s files and demands payment to restore access.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Ransomware-as-a-Service (RaaS)",
    "label": "Threats & attacks",
    "definition": "A criminal business model where operators lease ransomware kits to affiliates for a cut of the ransom.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Reconnaissance",
    "label": "Threats & attacks",
    "definition": "The attack phase where an attacker maps networks and probes for exploitable vulnerabilities.",
    "icon": "/assets/images/security-glossary/icon-16.svg"
  },
  {
    "category": "compliance",
    "term": "Risk",
    "label": "Risk & compliance",
    "definition": "The product of threat and vulnerability \u2014 the likelihood and impact of a successful attack.",
    "icon": "/assets/images/security-glossary/icon-11.svg"
  },
  {
    "category": "compliance",
    "term": "Risk Assessment",
    "label": "Risk & compliance",
    "definition": "The process of identifying risks and determining their potential impact.",
    "icon": "/assets/images/security-glossary/icon-11.svg"
  },
  {
    "category": "core",
    "term": "Role Based Access Control (RBAC)",
    "label": "Core & access",
    "definition": "Assigning permissions to roles based on organisational function, then users to roles.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "threat",
    "term": "Rootkit",
    "label": "Threats & attacks",
    "definition": "A collection of tools an attacker uses to hide their presence and keep administrator-level access.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "RSA",
    "label": "Cryptography",
    "definition": "A widely used asymmetric cryptographic algorithm for encryption and digital signatures.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "crypto",
    "term": "Secure Shell (SSH)",
    "label": "Cryptography",
    "definition": "A protocol to securely log in to, run commands on and move files between remote machines.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "crypto",
    "term": "Secure Sockets Layer (SSL)",
    "label": "Cryptography",
    "definition": "An older protocol for encrypting data in transit, now succeeded by TLS.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "compliance",
    "term": "Security Policy",
    "label": "Risk & compliance",
    "definition": "A set of rules that specify how a system or organisation protects its critical resources.",
    "icon": "/assets/images/security-glossary/icon-6.svg"
  },
  {
    "category": "defense",
    "term": "Separation of Duties",
    "label": "Defense & response",
    "definition": "Splitting privileges among multiple people or systems so no single party has full control.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "threat",
    "term": "Session Hijacking",
    "label": "Threats & attacks",
    "definition": "Taking over a session that another user has already established.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "SHA1 / SHA-256",
    "label": "Cryptography",
    "definition": "One-way cryptographic hash functions used to verify data integrity (SHA-256 is the modern standard).",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "defense",
    "term": "SIEM",
    "label": "Defense & response",
    "definition": "Security Information & Event Management \u2014 aggregates and correlates logs from across the stack to detect threats.",
    "icon": "/assets/images/security-glossary/icon-7.svg"
  },
  {
    "category": "defense",
    "term": "Signature",
    "label": "Defense & response",
    "definition": "A distinct pattern in traffic that identifies a specific tool, exploit or malware.",
    "icon": "/assets/images/security-glossary/icon-16.svg"
  },
  {
    "category": "threat",
    "term": "Smishing",
    "label": "Threats & attacks",
    "definition": "Phishing carried out over SMS text messages rather than email.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Sniffer",
    "label": "Threats & attacks",
    "definition": "A tool that monitors and captures network traffic as it passes an interface.",
    "icon": "/assets/images/security-glossary/icon-15.svg"
  },
  {
    "category": "defense",
    "term": "SOAR",
    "label": "Defense & response",
    "definition": "Security Orchestration, Automation & Response \u2014 automates and orchestrates incident-response workflows.",
    "icon": "/assets/images/security-glossary/icon-10.svg"
  },
  {
    "category": "defense",
    "term": "SOC (Security Operations Centre)",
    "label": "Defense & response",
    "definition": "A team and facility that monitors, detects and responds to security threats around the clock.",
    "icon": "/assets/images/security-glossary/icon-17.svg"
  },
  {
    "category": "threat",
    "term": "Social Engineering",
    "label": "Threats & attacks",
    "definition": "Non-technical attacks \u2014 lies, impersonation, bribes, threats \u2014 used to manipulate people into breaching security.",
    "icon": "/assets/images/security-glossary/icon-19.svg"
  },
  {
    "category": "threat",
    "term": "Spam",
    "label": "Threats & attacks",
    "definition": "Unsolicited bulk electronic messages, often carrying scams or malware.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Spoof",
    "label": "Threats & attacks",
    "definition": "An unauthorised entity gaining access by posing as an authorised user or system.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "SQL Injection",
    "label": "Threats & attacks",
    "definition": "Inserting malicious SQL into application queries to read, modify or destroy database data.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "Stateful Inspection",
    "label": "Defense & response",
    "definition": "A firewall architecture that tracks connection state and inspects packet contents, not just headers.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "crypto",
    "term": "Steganography",
    "label": "Cryptography",
    "definition": "Hiding the existence of a message inside other data, rather than hiding its meaning.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "threat",
    "term": "Supply-Chain Attack",
    "label": "Threats & attacks",
    "definition": "Compromising a trusted vendor, tool or dependency to reach that vendor\u2019s customers.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "Symmetric Cryptography",
    "label": "Cryptography",
    "definition": "Algorithms that use the same secret key for both encryption and decryption.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  },
  {
    "category": "threat",
    "term": "SYN Flood",
    "label": "Threats & attacks",
    "definition": "A DoS attack that sends more TCP SYN packets than a host can handle, exhausting its connection table.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "network",
    "term": "TCP/IP",
    "label": "Networking",
    "definition": "The core communication protocol suite of the internet \u2014 TCP for reliable delivery, IP for addressing.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "threat",
    "term": "Threat",
    "label": "Threats & attacks",
    "definition": "A circumstance or event that could breach security and cause harm.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "Threat Intelligence",
    "label": "Defense & response",
    "definition": "Evidence-based knowledge about threats used to inform detection and defensive decisions.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Threat Vector",
    "label": "Threats & attacks",
    "definition": "The method or path a threat uses to reach its target.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "crypto",
    "term": "Transport Layer Security (TLS)",
    "label": "Cryptography",
    "definition": "The modern protocol that encrypts and authenticates data in transit; successor to SSL.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "threat",
    "term": "Trojan Horse",
    "label": "Threats & attacks",
    "definition": "A program that looks useful but hides a malicious function that evades security controls.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "network",
    "term": "Tunnel",
    "label": "Networking",
    "definition": "A channel that encapsulates one protocol\u2019s traffic inside another, often to carry it securely across a network.",
    "icon": "/assets/images/security-glossary/icon-2.svg"
  },
  {
    "category": "defense",
    "term": "Virtual Patching",
    "label": "Defense & response",
    "definition": "Blocking exploitation of a vulnerability with a WAF or IPS rule before the software itself is patched.",
    "icon": "/assets/images/security-glossary/icon-10.svg"
  },
  {
    "category": "network",
    "term": "Virtual Private Network (VPN)",
    "label": "Networking",
    "definition": "An encrypted, logical network built over a public network to connect sites or users securely.",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "threat",
    "term": "Virus",
    "label": "Threats & attacks",
    "definition": "Self-replicating malicious code that spreads by inserting copies of itself into other programs.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Vishing",
    "label": "Threats & attacks",
    "definition": "Phishing carried out over voice calls or VoIP.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Vulnerability",
    "label": "Threats & attacks",
    "definition": "A weakness in a system that a threat can exploit to cause harm.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "WAAP",
    "label": "Defense & response",
    "definition": "Web Application & API Protection \u2014 a unified platform combining WAF, API security, bot mitigation and Layer-7 DDoS.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "threat",
    "term": "War Driving",
    "label": "Threats & attacks",
    "definition": "Travelling around to find wireless access points that can be used for unauthorised network access.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "network",
    "term": "WHOIS",
    "label": "Networking",
    "definition": "A protocol for looking up registration and ownership information about domains and network resources.",
    "icon": "/assets/images/security-glossary/icon-16.svg"
  },
  {
    "category": "crypto",
    "term": "Wired Equivalent Privacy (WEP)",
    "label": "Cryptography",
    "definition": "An early, now-insecure wireless security protocol (superseded by WPA2/WPA3).",
    "icon": "/assets/images/security-glossary/icon-1.svg"
  },
  {
    "category": "threat",
    "term": "Wiretapping",
    "label": "Threats & attacks",
    "definition": "Monitoring and recording data flowing between two points in a communication system.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Worm",
    "label": "Threats & attacks",
    "definition": "Malware that runs independently and self-propagates across a network without a host program.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "XDR (Extended Detection & Response)",
    "label": "Defense & response",
    "definition": "Correlates detection and response across endpoint, identity, email, network and cloud into one view.",
    "icon": "/assets/images/security-glossary/icon-15.svg"
  },
  {
    "category": "threat",
    "term": "Zero Day",
    "label": "Threats & attacks",
    "definition": "The day a new vulnerability becomes known \u2014 before a patch is available.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "defense",
    "term": "Zero Trust",
    "label": "Defense & response",
    "definition": "A model that trusts no user or device by default and verifies every access request explicitly.",
    "icon": "/assets/images/security-glossary/icon-9.svg"
  },
  {
    "category": "threat",
    "term": "Zero-Day Exploit",
    "label": "Threats & attacks",
    "definition": "An attack that exploits a vulnerability unknown to the vendor, before any fix exists.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "threat",
    "term": "Zombie",
    "label": "Threats & attacks",
    "definition": "A compromised computer, usually part of a botnet, controlled remotely to perform malicious tasks.",
    "icon": "/assets/images/security-glossary/icon-8.svg"
  },
  {
    "category": "network",
    "term": "3-Way Handshake",
    "label": "Networking",
    "definition": "The TCP connection setup: SYN, SYN/ACK, ACK between two machines.",
    "icon": "/assets/images/security-glossary/icon-4.svg"
  }
];

// src/app/pages/security-glossary.page.ts
var _c0 = () => ["autonomous-threat-management"];
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.letter;
var _forTrack3 = ($index, $item) => $item.title;
var _forTrack4 = ($index, $item) => $item.term;
function SecurityGlossaryPage_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275element(1, "img", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const platform_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("href", platform_r3.url + (platform_r3.name === "Google Gemini" ? "" : ctx_r3.aiPrompt), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", platform_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("src", "https://www.google.com/s2/favicons?domain=" + platform_r3.domain + "&sz=64", \u0275\u0275sanitizeUrl);
  }
}
function SecurityGlossaryPage_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function SecurityGlossaryPage_For_67_Template_button_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectCategory(item_r6.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.category() === item_r6.id);
    \u0275\u0275attribute("aria-pressed", ctx_r3.category() === item_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
function SecurityGlossaryPage_For_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function SecurityGlossaryPage_For_72_Template_button_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.letter.set(item_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.letter() === item_r8);
    \u0275\u0275property("disabled", !ctx_r3.availableLetters().has(item_r8));
    \u0275\u0275attribute("aria-pressed", ctx_r3.letter() === item_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8);
  }
}
function SecurityGlossaryPage_For_76_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 72)(1, "div", 73);
    \u0275\u0275element(2, "img", 74);
    \u0275\u0275elementStart(3, "span", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const term_r10 = ctx.$implicit;
    \u0275\u0275attribute("data-category", term_r10.category);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", term_r10.icon, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(term_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(term_r10.term);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(term_r10.definition);
  }
}
function SecurityGlossaryPage_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 42)(1, "h3", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71);
    \u0275\u0275repeaterCreate(4, SecurityGlossaryPage_For_76_For_5_Template, 9, 5, "article", 72, _forTrack4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r11 = ctx.$implicit;
    \u0275\u0275attribute("aria-label", "Terms beginning with " + group_r11.letter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(group_r11.letter);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r11.terms);
  }
}
function SecurityGlossaryPage_ForEmpty_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "h3");
    \u0275\u0275text(2, "No matching terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try another word or reset your filters to browse the full glossary.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function SecurityGlossaryPage_ForEmpty_77_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reset());
    });
    \u0275\u0275text(6, "Show all terms");
    \u0275\u0275elementEnd()();
  }
}
function SecurityGlossaryPage_For_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275element(1, "img", 75);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "Explore ");
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const solution_r12 = ctx.$implicit;
    const $index_r13 = ctx.$index;
    \u0275\u0275property("routerLink", solution_r12.path);
    \u0275\u0275advance();
    \u0275\u0275property("src", "/assets/images/security-glossary/related-" + $index_r13 + ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(solution_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(solution_r12.description);
  }
}
var SecurityGlossaryPage = class _SecurityGlossaryPage {
  worldMap = inject(DomSanitizer).bypassSecurityTrustHtml(WORLD_MAP_HTML);
  overlay = inject(OverlayService);
  docs = inject(DocRequestService);
  topics = inject(CallbackTopicService);
  aiPlatforms = [
    { name: "ChatGPT", domain: "chatgpt.com", url: "https://chatgpt.com/?q=" },
    { name: "Perplexity", domain: "perplexity.ai", url: "https://www.perplexity.ai/search?q=" },
    { name: "Claude", domain: "claude.ai", url: "https://claude.ai/new?q=" },
    { name: "Google Gemini", domain: "gemini.google.com", url: "https://gemini.google.com/app" },
    { name: "Grok", domain: "grok.com", url: "https://grok.com/?q=" }
  ];
  aiPrompt = encodeURIComponent("Explain cybersecurity terms from the XcellHost Security Glossary in plain English.");
  requestDoc(kind) {
    this.docs.ask(kind, "Security Glossary");
    this.overlay.open("doc");
  }
  requestCallback() {
    this.topics.ask("Security Glossary");
    this.overlay.open("callback");
  }
  terms = SECURITY_TERMS;
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  category = signal("all", ...ngDevMode ? [{ debugName: "category" }] : []);
  letter = signal("all", ...ngDevMode ? [{ debugName: "letter" }] : []);
  letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", "#"];
  categories = [
    { id: "all", label: "All terms" },
    { id: "core", label: "Core concepts" },
    { id: "threat", label: "Threats & attacks" },
    { id: "defense", label: "Defense & response" },
    { id: "network", label: "Networking" },
    { id: "crypto", label: "Cryptography" },
    { id: "compliance", label: "Compliance & privacy" }
  ];
  matchingTerms = computed(() => {
    const query = this.query().trim().toLowerCase();
    return this.terms.filter((t) => (this.category() === "all" || t.category === this.category()) && (!query || `${t.term} ${t.definition}`.toLowerCase().includes(query)));
  }, ...ngDevMode ? [{ debugName: "matchingTerms" }] : []);
  availableLetters = computed(() => new Set(this.matchingTerms().map((t) => this.initial(t.term))), ...ngDevMode ? [{ debugName: "availableLetters" }] : []);
  groups = computed(() => this.letters.filter((letter) => this.letter() === "all" || this.letter() === letter).map((letter) => ({ letter, terms: this.matchingTerms().filter((t) => this.initial(t.term) === letter) })).filter((group) => group.terms.length), ...ngDevMode ? [{ debugName: "groups" }] : []);
  count = computed(() => this.groups().reduce((sum, group) => sum + group.terms.length, 0), ...ngDevMode ? [{ debugName: "count" }] : []);
  solutions = [
    { title: "Security Solutions", icon: "shield", description: "Autonomous threat management across your infrastructure, brand and people.", path: "/autonomous-threat-management" },
    { title: "WAAP", icon: "verified_user", description: "Web and API protection, fully managed.", path: "/waap-as-a-service" },
    { title: "Watchtower", icon: "radar", description: "One intelligence layer across every tool in your stack.", path: "/company/watchtower" },
    { title: "Trust Center", icon: "lock", description: "Our security posture, controls and certifications, in the open.", path: "/company/trust-center" }
  ];
  constructor() {
    inject(SeoService).set("Cybersecurity Glossary | XcellHost", "Explore cybersecurity terms in plain English. Search by term, category or letter to understand threats, defences and security concepts.", "/security-glossary/");
  }
  initial(term) {
    return /^[A-Z]/i.test(term) ? term[0].toUpperCase() : "#";
  }
  search(event) {
    this.query.set(event.target.value);
    this.letter.set("all");
  }
  selectCategory(id) {
    this.category.set(id);
    this.letter.set("all");
  }
  reset() {
    this.query.set("");
    this.category.set("all");
    this.letter.set("all");
  }
  static \u0275fac = function SecurityGlossaryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecurityGlossaryPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurityGlossaryPage, selectors: [["xh-security-glossary-page"]], decls: 166, vars: 11, consts: [["tour", ""], [1, "pp-hero", "glossary-hero"], ["aria-hidden", "true", 1, "pph-map", 3, "innerHTML"], ["aria-hidden", "true", 1, "pph-grid"], [1, "wrap", "glossary-hero-grid"], [1, "glossary-hero-copy"], ["aria-label", "Breadcrumb", 1, "pp-crumb"], ["routerLink", "/"], [1, "hero-brand"], ["aria-hidden", "true"], [1, "pp-tagline"], [1, "pp-typewriter"], [1, "hero-ctas", "product-hero-ctas"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", 1, "btn", "btn-ghost"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-label", "Ask AI about Security Glossary", 1, "pp-ask-ai"], [1, "pp-ask-ai-kicker"], [1, "pp-ask-ai-actions"], ["target", "_blank", "rel", "noopener noreferrer", 1, "pp-ask-ai-chip", 3, "href"], ["src", "/assets/images/security-glossary-hero.svg", "width", "600", "height", "520", "alt", "Connected security concepts surrounding a central shield: firewall, encryption, identity, network and monitoring", 1, "glossary-art"], ["aria-labelledby", "glossary-tour-title", 1, "glossary-tour"], ["type", "button", "aria-label", "Close screenshot tour", 1, "tour-close", 3, "click"], ["id", "glossary-tour-title"], ["src", "/assets/images/security-glossary-hero.svg", "alt", "Security glossary concepts"], ["href", "#glossary", 1, "btn", "btn-primary", 3, "click"], ["id", "glossary", "aria-labelledby", "glossary-heading", 1, "glossary-section"], [1, "wrap"], [1, "sec-head"], [1, "eyebrow"], ["id", "glossary-heading"], [1, "search-row"], [1, "search-box"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["type", "search", "aria-label", "Search security terms", "placeholder", "Search phishing, zero trust, WAAP\u2026", 3, "input", "value"], ["type", "button", 1, "reset-button", 3, "click"], ["role", "group", "aria-label", "Security categories", 1, "category-tabs"], ["type", "button", 3, "active"], ["role", "group", "aria-label", "Browse by first letter", 1, "alphabet"], ["type", "button", 3, "click"], ["type", "button", 3, "disabled", "active"], ["role", "status", "aria-live", "polite", 1, "result-count"], [1, "term-group"], [1, "empty-state"], [1, "glossary-section", "related-section"], [1, "solution-grid"], [1, "solution-card", 3, "routerLink"], [1, "glossary-section", "guides-section"], [1, "term-grid", "guide-grid"], [1, "solution-card"], ["src", "/assets/images/security-glossary/blog-0.svg", "alt", "", "aria-hidden", "true", 1, "section-icon"], [1, "term-category"], ["routerLink", "/insights"], ["src", "/assets/images/security-glossary/blog-1.svg", "alt", "", "aria-hidden", "true", 1, "section-icon"], ["src", "/assets/images/security-glossary/blog-2.svg", "alt", "", "aria-hidden", "true", 1, "section-icon"], ["routerLink", "/dpdpa-for-smb"], ["pageSlug", "security-glossary", 3, "pageAliases"], [1, "glossary-section", "glossary-closing"], [1, "pp-cta"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], ["href", "#", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff", 3, "click"], ["href", "#", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff", 3, "click"], ["href", "https://wa.me/918657032540?text=Hello%2C%20I%20have%20a%20security%20enquiry", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff"], ["href", "mailto:sales@xcellhost.com?subject=Security%20Glossary%20enquiry", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", 1, "pp-cta-buddha"], [1, "pp-proof"], ["alt", "", "aria-hidden", "true", 3, "src"], ["type", "button", 3, "click", "disabled"], [1, "letter-heading"], [1, "term-grid"], [1, "term-card"], [1, "term-card-top"], ["alt", "", "aria-hidden", "true", 1, "term-icon", 3, "src"], ["alt", "", "aria-hidden", "true", 1, "section-icon", 3, "src"]], template: function SecurityGlossaryPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "main")(1, "section", 1);
      \u0275\u0275element(2, "div", 2)(3, "span", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "a", 7);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " \u203A Resources \u203A Security Glossary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1")(11, "span", 8)(12, "span");
      \u0275\u0275text(13, "Xcell");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, "Secure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 9);
      \u0275\u0275text(16, " | ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, "Security Glossary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 10);
      \u0275\u0275text(19, "Security Glossary from XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11);
      \u0275\u0275text(21, "Security terms explained in plain English");
      \u0275\u0275element(22, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12)(24, "button", 13);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_button_click_24_listener() {
        \u0275\u0275restoreView(_r1);
        const tour_r2 = \u0275\u0275reference(38);
        return \u0275\u0275resetView(tour_r2.showModal());
      });
      \u0275\u0275text(25, "Screenshot Tour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 14);
      \u0275\u0275text(27, "7 Day's Free Trial");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 15);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_button_click_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestCallback());
      });
      \u0275\u0275text(29, "Let's Talk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "section", 16)(31, "span", 17);
      \u0275\u0275text(32, "Ask AI About Security Glossary from XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 18);
      \u0275\u0275repeaterCreate(34, SecurityGlossaryPage_For_35_Template, 2, 3, "a", 19, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(36, "img", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "dialog", 21, 0)(39, "button", 22);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_button_click_39_listener() {
        \u0275\u0275restoreView(_r1);
        const tour_r2 = \u0275\u0275reference(38);
        return \u0275\u0275resetView(tour_r2.close());
      });
      \u0275\u0275text(40, "\xD7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h2", 23);
      \u0275\u0275text(42, "Explore the Security Glossary");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "img", 24);
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 25);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_a_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        const tour_r2 = \u0275\u0275reference(38);
        return \u0275\u0275resetView(tour_r2.close());
      });
      \u0275\u0275text(47, "Browse glossary");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "xh-trust-bar");
      \u0275\u0275elementStart(49, "section", 26)(50, "div", 27)(51, "div", 28)(52, "div", 29);
      \u0275\u0275text(53, "Your security reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h2", 30);
      \u0275\u0275text(55, "Every term. Clearly explained.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "Search a term or browse the categories to build your security vocabulary.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 31)(59, "label", 32)(60, "span", 33);
      \u0275\u0275text(61, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 34);
      \u0275\u0275listener("input", function SecurityGlossaryPage_Template_input_input_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.search($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "button", 35);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_button_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reset());
      });
      \u0275\u0275text(64, "Reset filters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 36);
      \u0275\u0275repeaterCreate(66, SecurityGlossaryPage_For_67_Template, 2, 4, "button", 37, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 38)(69, "button", 39);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_button_click_69_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.letter.set("all"));
      });
      \u0275\u0275text(70, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(71, SecurityGlossaryPage_For_72_Template, 2, 5, "button", 40, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 41);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(75, SecurityGlossaryPage_For_76_Template, 6, 2, "section", 42, _forTrack2, false, SecurityGlossaryPage_ForEmpty_77_Template, 7, 0, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "section", 44)(79, "div", 27)(80, "div", 28)(81, "div", 29);
      \u0275\u0275text(82, "Put it to work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "h2");
      \u0275\u0275text(84, "From glossary to a defended business.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p");
      \u0275\u0275text(86, "Know the terms, then let XcellHost put the defences in place \u2014 protection, monitoring, zero trust and compliance.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 45);
      \u0275\u0275repeaterCreate(88, SecurityGlossaryPage_For_89_Template, 10, 4, "a", 46, _forTrack3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "section", 47)(91, "div", 27)(92, "div", 28)(93, "div", 29);
      \u0275\u0275text(94, "Keep learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "h2");
      \u0275\u0275text(96, "Guides and briefings from our security team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98, "Explore practical guidance on layered defence, zero trust and data protection.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 48)(100, "article", 49);
      \u0275\u0275element(101, "img", 50);
      \u0275\u0275elementStart(102, "span", 51);
      \u0275\u0275text(103, "Guide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "h3");
      \u0275\u0275text(105, "Building defense-in-depth for an Indian SMB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, "How the glossary terms fit together into a practical, layered defence you can actually run.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "a", 52);
      \u0275\u0275text(109, "Browse security guides \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "article", 49);
      \u0275\u0275element(111, "img", 53);
      \u0275\u0275elementStart(112, "span", 51);
      \u0275\u0275text(113, "Explainer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "h3");
      \u0275\u0275text(115, "Zero trust, explained without the buzzwords");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p");
      \u0275\u0275text(117, "What \u201Cnever trust, always verify\u201D means in practice, and where to start.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "a", 52);
      \u0275\u0275text(119, "Browse security explainers \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "article", 49);
      \u0275\u0275element(121, "img", 54);
      \u0275\u0275elementStart(122, "span", 51);
      \u0275\u0275text(123, "Compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "h3");
      \u0275\u0275text(125, "What the DPDP Act means for your security program");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p");
      \u0275\u0275text(127, "Turning India\u2019s data-protection law into concrete controls, in plain terms.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 55);
      \u0275\u0275text(129, "Explore DPDP resources \u2192");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(130, "xh-insights-section", 56)(131, "xh-testimonials");
      \u0275\u0275elementStart(132, "section", 57)(133, "div", 27)(134, "div", 58)(135, "div")(136, "h3");
      \u0275\u0275text(137, "Ready to start with Security Glossary?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p");
      \u0275\u0275text(139, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 59)(141, "a", 60);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_a_click_141_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.requestCallback());
      });
      \u0275\u0275text(142, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "a", 61);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_a_click_143_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.requestCallback());
      });
      \u0275\u0275text(144, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "a", 62);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_a_click_145_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.requestDoc("infosheet"));
      });
      \u0275\u0275text(146, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "a", 61);
      \u0275\u0275listener("click", function SecurityGlossaryPage_Template_a_click_147_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.requestDoc("presentation"));
      });
      \u0275\u0275text(148, "\u{1F4D6} Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "a", 63);
      \u0275\u0275text(150, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "a", 64);
      \u0275\u0275text(152, "Email Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "a", 65);
      \u0275\u0275element(154, "img", 66);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(155, "div", 67)(156, "span");
      \u0275\u0275text(157, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "span");
      \u0275\u0275text(159, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "span");
      \u0275\u0275text(161, "\u{1F91D} Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "span");
      \u0275\u0275text(163, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "span");
      \u0275\u0275text(165, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", ctx.worldMap, \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(32);
      \u0275\u0275repeater(ctx.aiPlatforms);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("Search all ", ctx.terms.length, " terms, choose a security category, or use A\u2013Z to browse by first letter.");
      \u0275\u0275advance(17);
      \u0275\u0275property("value", ctx.query());
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.letter() === "all");
      \u0275\u0275attribute("aria-pressed", ctx.letter() === "all");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.letters);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("Showing ", ctx.count(), " of ", ctx.terms.length, " terms");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.groups());
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.solutions);
      \u0275\u0275advance(42);
      \u0275\u0275property("pageAliases", \u0275\u0275pureFunction0(10, _c0));
    }
  }, dependencies: [RouterLink, TrustBarComponent, TestimonialsComponent, InsightsSectionComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.glossary-section[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%] {\n  margin-inline: auto;\n}\n.glossary-section[_ngcontent-%COMP%]   .sec-head[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]::after {\n  margin-inline: auto;\n}\n.glossary-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 48px 0 54px;\n  background:\n    radial-gradient(\n      ellipse at 10% 35%,\n      #104880 0%,\n      #082449 52%,\n      #151d4b 100%);\n}\n.glossary-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(260px, 1fr);\n  align-items: center;\n  gap: 24px;\n}\n.glossary-hero[_ngcontent-%COMP%]   .pp-crumb[_ngcontent-%COMP%] {\n  color: #8fb8ff;\n  font: 700 11px var(--mono,monospace);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.pp-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.glossary-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: 800 clamp(27px, 3vw, 42px)/1.18 var(--disp);\n  color: white;\n  letter-spacing: -.025em;\n  margin: 0 0 14px;\n}\n.hero-brand[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.hero-brand[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #e60012;\n}\n.glossary-hero[_ngcontent-%COMP%]   .pp-tagline[_ngcontent-%COMP%] {\n  font: 400 17px/1.65 var(--body);\n  color: #c7d5ec;\n  margin: 0 0 24px;\n  padding: 0;\n  background: none;\n}\n.glossary-hero[_ngcontent-%COMP%]   .pp-tagline[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.pp-typewriter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #69b6ff;\n  font: 600 20px/1.4 var(--body);\n  margin-bottom: 10px;\n}\n.pp-typewriter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  flex: none;\n  width: 2px;\n  height: 1.1em;\n  margin-left: 4px;\n  background: currentColor;\n}\n.hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.glossary-hero[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  font-size: 13px;\n  border-radius: 7px;\n}\n.glossary-hero[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%], \n.glossary-hero[_ngcontent-%COMP%]   .ppd-pres[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #ffffff0a;\n  border: 1px solid #8195b5;\n}\n.glossary-hero[_ngcontent-%COMP%]   .ppd-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1565d8,\n      #0c3e8f);\n  color: white;\n}\n.glossary-hero[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .65;\n  cursor: default;\n}\n.glossary-art[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-width: 460px;\n  justify-self: center;\n}\n.pp-ask-ai[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  padding: 22px 0 8px;\n  border-top: 1px solid #90b4e933;\n}\n.pp-ask-ai-kicker[_ngcontent-%COMP%] {\n  border: 1px solid #224a7d;\n  border-radius: 20px;\n  padding: 7px 12px;\n  color: #fff;\n  font: 700 10px var(--mono,monospace);\n}\n.pp-ask-ai-kicker[_ngcontent-%COMP%]:before {\n  content: "?";\n  margin-right: 6px;\n}\n.pp-ask-ai-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.pp-ask-ai-chip[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #ffffff33;\n  border-radius: 10px;\n  background: #051b38;\n}\n.pp-ask-ai-chip[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.glossary-hero[_ngcontent-%COMP%]   .pph-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(#8fb8ff06 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #8fb8ff06 1px,\n      transparent 1px);\n  background-size: 64px 64px;\n}\n.term-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.term-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  padding: 6px;\n  background: #e8f0fd;\n  border-radius: 8px;\n}\n.term-card-top[_ngcontent-%COMP%]   .term-category[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.section-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n}\n.glossary-closing[_ngcontent-%COMP%]   .pp-cta[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.glossary-closing[_ngcontent-%COMP%]   .pp-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.glossary-closing[_ngcontent-%COMP%]   .pp-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #e2eeff;\n  margin-top: 10px;\n}\n.glossary-closing[_ngcontent-%COMP%]   .pp-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  width: 100%;\n}\n.glossary-closing[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 12px 16px;\n  border-radius: 7px;\n}\n.glossary-tour[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 16px;\n  padding: 30px;\n  max-width: min(600px, 90vw);\n  max-height: 90vh;\n  overflow: auto;\n  margin: auto;\n  background: #082449;\n  color: white;\n}\n.glossary-tour[_ngcontent-%COMP%]::backdrop {\n  background: #041e42bb;\n}\n.glossary-tour[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  padding-right: 25px;\n}\n.glossary-tour[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  max-height: 45vh;\n}\n.glossary-tour[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 18px 0;\n}\n.tour-close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 8px;\n  color: white;\n  background: transparent;\n  border: 0;\n  font-size: 30px;\n  cursor: pointer;\n}\n.glossary-section[_ngcontent-%COMP%] {\n  padding: 64px 0;\n  scroll-margin-top: 140px;\n}\n.sec-head[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.sec-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3vw, 36px);\n  line-height: 1.25;\n  margin: 10px 0;\n}\n.sec-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 740px;\n  margin: 12px auto;\n  color: #5b6b85;\n  line-height: 1.7;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.search-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid #c9d8ec;\n  border-radius: 10px;\n  padding: 0 18px;\n  flex: 1;\n  background: white;\n  color: #1565d8;\n}\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 17px 0;\n  border: 0;\n  background: transparent;\n  font: inherit;\n  color: #0b1730;\n  min-width: 0;\n}\n.reset-button[_ngcontent-%COMP%] {\n  border: 1px solid #c9d8ec;\n  border-radius: 9px;\n  padding: 14px;\n  background: white;\n  color: #1565d8;\n  cursor: pointer;\n  font: inherit;\n}\n.category-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 22px;\n}\n.category-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.alphabet[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font: inherit;\n  border: 1px solid #dce5f3;\n  background: #f2f6fc;\n  color: #263f65;\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 11px 15px;\n}\n.category-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%], \n.alphabet[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #1565d8;\n  color: white;\n  border-color: #1565d8;\n}\n.alphabet[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 18px 0;\n  border-top: 1px solid #dce5f3;\n  border-bottom: 1px solid #dce5f3;\n}\n.alphabet[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px;\n  min-width: 34px;\n  font-size: 13px;\n}\n.alphabet[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: .35;\n  cursor: default;\n}\n.result-count[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  color: #5b6b85;\n  font-size: 14px;\n}\n.letter-heading[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #1565d8;\n  border-bottom: 1px solid #dce5f3;\n  padding-bottom: 10px;\n  margin: 28px 0 16px;\n}\n.term-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.term-card[_ngcontent-%COMP%] {\n  border: 1px solid #dce5f3;\n  border-radius: 12px;\n  padding: 22px;\n  background: #fff;\n  box-shadow: 0 4px 18px #041e4206;\n}\n.term-category[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #1565d8;\n  background: #e8f0fd;\n  padding: 4px 8px;\n  border-radius: 5px;\n  margin-bottom: 12px;\n}\n.term-card[data-category=threat][_ngcontent-%COMP%]   .term-category[_ngcontent-%COMP%] {\n  color: #a62639;\n  background: #fff0f1;\n}\n.term-card[data-category=defense][_ngcontent-%COMP%]   .term-category[_ngcontent-%COMP%] {\n  color: #14723a;\n  background: #e9f8ee;\n}\n.term-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 17px;\n  line-height: 1.4;\n  margin: 0 0 10px;\n  color: #041e42;\n}\n.term-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.solution-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #5b6b85;\n  font-size: 14px;\n  line-height: 1.7;\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 45px 20px;\n  background: #f2f6fc;\n  border-radius: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.related-section[_ngcontent-%COMP%] {\n  background: #f2f6fc;\n}\n.solution-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 20px;\n}\n.solution-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: white;\n  border: 1px solid #dce5f3;\n  padding: 26px;\n  border-radius: 14px;\n  text-decoration: none;\n  transition: transform .2s;\n}\n.solution-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.solution-card[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 34px;\n  color: #1565d8;\n}\n.solution-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.solution-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1565d8;\n  font-size: 14px;\n  margin-top: auto;\n}\n.guide-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.guides-section[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \na[_ngcontent-%COMP%]:focus-visible, \ninput[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #ff8c1a;\n  outline-offset: 3px;\n}\n@media (max-width: 900px) {\n  .glossary-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .glossary-art[_ngcontent-%COMP%] {\n    max-width: 480px;\n    justify-self: center;\n  }\n  .term-grid[_ngcontent-%COMP%], \n   .solution-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .glossary-hero[_ngcontent-%COMP%] {\n    padding: 36px 0;\n  }\n  .glossary-section[_ngcontent-%COMP%] {\n    padding: 42px 0;\n  }\n  .term-grid[_ngcontent-%COMP%], \n   .solution-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .search-row[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .category-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 10px;\n  }\n  .term-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .hero-ctas[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    white-space: normal;\n    text-align: center;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .solution-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=security-glossary.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecurityGlossaryPage, [{
    type: Component,
    args: [{ selector: "xh-security-glossary-page", standalone: true, imports: [RouterLink, TrustBarComponent, TestimonialsComponent, InsightsSectionComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main>\r
  <section class="pp-hero glossary-hero">\r
    <div class="pph-map" aria-hidden="true" [innerHTML]="worldMap"></div>\r
    <span class="pph-grid" aria-hidden="true"></span>\r
    <div class="wrap glossary-hero-grid">\r
      <div class="glossary-hero-copy">\r
        <nav class="pp-crumb" aria-label="Breadcrumb"><a routerLink="/">Home</a> &rsaquo; Resources &rsaquo; Security Glossary</nav>\r
        <h1><span class="hero-brand"><span>Xcell</span>Secure</span><span aria-hidden="true"> | </span>Security Glossary</h1>\r
        <p class="pp-tagline">Security Glossary from XcellHost</p>\r
        <div class="pp-typewriter">Security terms explained in plain English<i aria-hidden="true"></i></div>\r
        <div class="hero-ctas product-hero-ctas">\r
          \r
          \r
          <button class="btn btn-ghost" type="button" (click)="tour.showModal()">Screenshot Tour</button>\r
          <button class="btn btn-ghost" type="button">7 Day's Free Trial</button>\r
          <button class="btn btn-primary" type="button" (click)="requestCallback()">Let's Talk</button>\r
        </div>\r
        <section class="pp-ask-ai" aria-label="Ask AI about Security Glossary">\r
          <span class="pp-ask-ai-kicker">Ask AI About Security Glossary from XcellHost</span>\r
          <div class="pp-ask-ai-actions">@for (platform of aiPlatforms; track platform.name) {\r
            <a class="pp-ask-ai-chip" [attr.aria-label]="platform.name" [href]="platform.url + (platform.name === 'Google Gemini' ? '' : aiPrompt)" target="_blank" rel="noopener noreferrer"><img [src]="'https://www.google.com/s2/favicons?domain=' + platform.domain + '&sz=64'" alt="" aria-hidden="true"></a>\r
          }</div>\r
        </section>\r
      </div>\r
      <img class="glossary-art" src="/assets/images/security-glossary-hero.svg" width="600" height="520" alt="Connected security concepts surrounding a central shield: firewall, encryption, identity, network and monitoring">\r
    </div>\r
  </section>\r
  <dialog #tour class="glossary-tour" aria-labelledby="glossary-tour-title"><button class="tour-close" type="button" (click)="tour.close()" aria-label="Close screenshot tour">&times;</button><h2 id="glossary-tour-title">Explore the Security Glossary</h2><img src="/assets/images/security-glossary-hero.svg" alt="Security glossary concepts"><p>Search all {{ terms.length }} terms, choose a security category, or use A&ndash;Z to browse by first letter.</p><a class="btn btn-primary" href="#glossary" (click)="tour.close()">Browse glossary</a></dialog>\r
  <xh-trust-bar />\r
\r
  <section class="glossary-section" id="glossary" aria-labelledby="glossary-heading">\r
    <div class="wrap">\r
      <div class="sec-head"><div class="eyebrow">Your security reference</div><h2 id="glossary-heading">Every term. Clearly explained.</h2><p>Search a term or browse the categories to build your security vocabulary.</p></div>\r
      <div class="search-row"><label class="search-box"><span class="material-symbols-outlined" aria-hidden="true">search</span><input type="search" aria-label="Search security terms" placeholder="Search phishing, zero trust, WAAP\u2026" [value]="query()" (input)="search($event)"></label><button class="reset-button" type="button" (click)="reset()">Reset filters</button></div>\r
      <div class="category-tabs" role="group" aria-label="Security categories">\r
        @for (item of categories; track item.id) { <button type="button" [class.active]="category() === item.id" [attr.aria-pressed]="category() === item.id" (click)="selectCategory(item.id)">{{ item.label }}</button> }\r
      </div>\r
      <div class="alphabet" role="group" aria-label="Browse by first letter">\r
        <button type="button" [class.active]="letter() === 'all'" [attr.aria-pressed]="letter() === 'all'" (click)="letter.set('all')">All</button>\r
        @for (item of letters; track item) { <button type="button" [disabled]="!availableLetters().has(item)" [class.active]="letter() === item" [attr.aria-pressed]="letter() === item" (click)="letter.set(item)">{{ item }}</button> }\r
      </div>\r
      <p class="result-count" role="status" aria-live="polite">Showing {{ count() }} of {{ terms.length }} terms</p>\r
      @for (group of groups(); track group.letter) {\r
        <section class="term-group" [attr.aria-label]="'Terms beginning with ' + group.letter"><h3 class="letter-heading">{{ group.letter }}</h3><div class="term-grid">\r
          @for (term of group.terms; track term.term) { <article class="term-card" [attr.data-category]="term.category"><div class="term-card-top"><img class="term-icon" [src]="term.icon" alt="" aria-hidden="true"><span class="term-category">{{ term.label }}</span></div><h4>{{ term.term }}</h4><p>{{ term.definition }}</p></article> }\r
        </div></section>\r
      } @empty { <div class="empty-state"><h3>No matching terms</h3><p>Try another word or reset your filters to browse the full glossary.</p><button class="btn btn-primary" type="button" (click)="reset()">Show all terms</button></div> }\r
    </div>\r
  </section>\r
\r
  <section class="glossary-section related-section"><div class="wrap">\r
    <div class="sec-head"><div class="eyebrow">Put it to work</div><h2>From glossary to a defended business.</h2><p>Know the terms, then let XcellHost put the defences in place \u2014 protection, monitoring, zero trust and compliance.</p></div>\r
    <div class="solution-grid">@for (solution of solutions; track solution.title) { <a class="solution-card" [routerLink]="solution.path"><img class="section-icon" [src]="'/assets/images/security-glossary/related-' + $index + '.svg'" alt="" aria-hidden="true"><h3>{{ solution.title }}</h3><p>{{ solution.description }}</p><strong>Explore <span aria-hidden="true">\u2192</span></strong></a> }</div>\r
  </div></section>\r
  <section class="glossary-section guides-section"><div class="wrap">\r
    <div class="sec-head"><div class="eyebrow">Keep learning</div><h2>Guides and briefings from our security team</h2><p>Explore practical guidance on layered defence, zero trust and data protection.</p></div>\r
    <div class="term-grid guide-grid">\r
      <article class="solution-card"><img class="section-icon" src="/assets/images/security-glossary/blog-0.svg" alt="" aria-hidden="true"><span class="term-category">Guide</span><h3>Building defense-in-depth for an Indian SMB</h3><p>How the glossary terms fit together into a practical, layered defence you can actually run.</p><a routerLink="/insights">Browse security guides \u2192</a></article>\r
      <article class="solution-card"><img class="section-icon" src="/assets/images/security-glossary/blog-1.svg" alt="" aria-hidden="true"><span class="term-category">Explainer</span><h3>Zero trust, explained without the buzzwords</h3><p>What \u201Cnever trust, always verify\u201D means in practice, and where to start.</p><a routerLink="/insights">Browse security explainers \u2192</a></article>\r
      <article class="solution-card"><img class="section-icon" src="/assets/images/security-glossary/blog-2.svg" alt="" aria-hidden="true"><span class="term-category">Compliance</span><h3>What the DPDP Act means for your security program</h3><p>Turning India\u2019s data-protection law into concrete controls, in plain terms.</p><a routerLink="/dpdpa-for-smb">Explore DPDP resources \u2192</a></article>\r
    </div>\r
  </div></section>\r
  <xh-insights-section pageSlug="security-glossary" [pageAliases]="['autonomous-threat-management']" />\r
  <xh-testimonials />\r
  <section class="glossary-section glossary-closing"><div class="wrap">\r
        <div class="pp-cta">\r
            <div>\r
              <h3>Ready to start with Security Glossary?</h3>\r
              <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
            </div>\r
            <div style="display: flex; gap: 12px; flex-wrap: wrap">\r
              <a class="btn btn-primary" href="#" (click)="$event.preventDefault(); requestCallback()"\r
                >Request a callback</a\r
              >\r
              <a\r
                class="btn btn-ghost"\r
                style="border-color: rgba(255, 255, 255, 0.4); color: #fff"\r
                href="#"\r
                (click)="$event.preventDefault(); requestCallback()"\r
                >\u26A1 Buy Now</a\r
              >\r
              <a\r
                class="btn btn-ghost"\r
                style="border-color: rgba(255, 255, 255, 0.4); color: #fff"\r
                href="#" (click)="$event.preventDefault(); requestDoc('infosheet')"\r
                target="_blank"\r
                rel="noopener noreferrer"\r
                >\u2B07 Infosheet</a\r
              >\r
              <a\r
                class="btn btn-ghost"\r
                style="border-color: rgba(255, 255, 255, 0.4); color: #fff"\r
                href="#"\r
                (click)="$event.preventDefault(); requestDoc('presentation')"\r
                >\u{1F4D6} Presentation</a\r
              >\r
              <a\r
                class="btn btn-ghost"\r
                style="border-color: rgba(255, 255, 255, 0.4); color: #fff"\r
                href="https://wa.me/918657032540?text=Hello%2C%20I%20have%20a%20security%20enquiry"\r
                target="_blank"\r
                rel="noopener"\r
                >Talk on WhatsApp</a\r
              >\r
              <a\r
                class="btn btn-ghost"\r
                style="border-color: rgba(255, 255, 255, 0.4); color: #fff"\r
                href="mailto:sales@xcellhost.com?subject=Security%20Glossary%20enquiry"\r
                >Email Us</a\r
              >\r
            </div>\r
            <a\r
              class="pp-cta-buddha-link"\r
              routerLink="/company/support-overview"\r
              aria-label="Visit XcellHost customer support"\r
            >\r
              <img\r
                class="pp-cta-buddha"\r
                src="/assets/images/laughing-buddha-white-text-transparent.png"\r
                alt="XcellHost Laughing Buddha"\r
              />\r
            </a>\r
\r
          </div>\r
\r
          <div class="pp-proof">\r
            <span>\u{1F3C5} ISO 27001</span><span>\u{1F3C5} ISO 20000-1</span\r
            ><span>\u{1F91D} Microsoft Gold Partner</span><span>\u{1F570} Since 1999</span\r
            ><span>\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking</span>\r
          </div>\r
  </div></section>\r
</main>\r
`, styles: ['/* src/app/pages/security-glossary.page.css */\n:host {\n  display: block;\n}\n.glossary-section .sec-head {\n  margin-inline: auto;\n}\n.glossary-section .sec-head .eyebrow::after {\n  margin-inline: auto;\n}\n.glossary-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 48px 0 54px;\n  background:\n    radial-gradient(\n      ellipse at 10% 35%,\n      #104880 0%,\n      #082449 52%,\n      #151d4b 100%);\n}\n.glossary-hero-grid {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(260px, 1fr);\n  align-items: center;\n  gap: 24px;\n}\n.glossary-hero .pp-crumb {\n  color: #8fb8ff;\n  font: 700 11px var(--mono,monospace);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  margin-bottom: 20px;\n}\n.pp-crumb a {\n  color: inherit;\n}\n.glossary-hero h1 {\n  font: 800 clamp(27px, 3vw, 42px)/1.18 var(--disp);\n  color: white;\n  letter-spacing: -.025em;\n  margin: 0 0 14px;\n}\n.hero-brand {\n  white-space: nowrap;\n}\n.hero-brand > span {\n  color: #e60012;\n}\n.glossary-hero .pp-tagline {\n  font: 400 17px/1.65 var(--body);\n  color: #c7d5ec;\n  margin: 0 0 24px;\n  padding: 0;\n  background: none;\n}\n.glossary-hero .pp-tagline:after {\n  display: none;\n}\n.pp-typewriter {\n  display: flex;\n  align-items: center;\n  color: #69b6ff;\n  font: 600 20px/1.4 var(--body);\n  margin-bottom: 10px;\n}\n.pp-typewriter i {\n  display: inline-block;\n  flex: none;\n  width: 2px;\n  height: 1.1em;\n  margin-left: 4px;\n  background: currentColor;\n}\n.hero-ctas {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.glossary-hero .btn {\n  padding: 12px 15px;\n  font-size: 13px;\n  border-radius: 7px;\n}\n.glossary-hero .btn-ghost,\n.glossary-hero .ppd-pres {\n  color: #fff;\n  background: #ffffff0a;\n  border: 1px solid #8195b5;\n}\n.glossary-hero .ppd-info {\n  background:\n    linear-gradient(\n      135deg,\n      #1565d8,\n      #0c3e8f);\n  color: white;\n}\n.glossary-hero button:disabled {\n  opacity: .65;\n  cursor: default;\n}\n.glossary-art {\n  width: 100%;\n  height: auto;\n  max-width: 460px;\n  justify-self: center;\n}\n.pp-ask-ai {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 24px;\n  padding: 22px 0 8px;\n  border-top: 1px solid #90b4e933;\n}\n.pp-ask-ai-kicker {\n  border: 1px solid #224a7d;\n  border-radius: 20px;\n  padding: 7px 12px;\n  color: #fff;\n  font: 700 10px var(--mono,monospace);\n}\n.pp-ask-ai-kicker:before {\n  content: "?";\n  margin-right: 6px;\n}\n.pp-ask-ai-actions {\n  display: flex;\n  gap: 8px;\n}\n.pp-ask-ai-chip {\n  display: grid;\n  place-items: center;\n  width: 36px;\n  height: 36px;\n  border: 1px solid #ffffff33;\n  border-radius: 10px;\n  background: #051b38;\n}\n.pp-ask-ai-chip img {\n  width: 18px;\n  height: 18px;\n}\n.glossary-hero .pph-grid {\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(#8fb8ff06 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #8fb8ff06 1px,\n      transparent 1px);\n  background-size: 64px 64px;\n}\n.term-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n.term-icon {\n  width: 34px;\n  height: 34px;\n  padding: 6px;\n  background: #e8f0fd;\n  border-radius: 8px;\n}\n.term-card-top .term-category {\n  margin-bottom: 0;\n}\n.section-icon {\n  width: 38px;\n  height: 38px;\n}\n.glossary-closing .pp-cta {\n  margin-top: 0;\n}\n.glossary-closing .pp-cta h3 {\n  font-size: 24px;\n  color: white;\n}\n.glossary-closing .pp-cta p {\n  color: #e2eeff;\n  margin-top: 10px;\n}\n.glossary-closing .pp-cta > div:first-child {\n  width: 100%;\n}\n.glossary-closing .btn {\n  font-size: 13px;\n  padding: 12px 16px;\n  border-radius: 7px;\n}\n.glossary-tour {\n  border: 0;\n  border-radius: 16px;\n  padding: 30px;\n  max-width: min(600px, 90vw);\n  max-height: 90vh;\n  overflow: auto;\n  margin: auto;\n  background: #082449;\n  color: white;\n}\n.glossary-tour::backdrop {\n  background: #041e42bb;\n}\n.glossary-tour h2 {\n  color: white;\n  padding-right: 25px;\n}\n.glossary-tour img {\n  display: block;\n  width: 100%;\n  max-height: 45vh;\n}\n.glossary-tour p {\n  margin: 18px 0;\n}\n.tour-close {\n  position: absolute;\n  right: 14px;\n  top: 8px;\n  color: white;\n  background: transparent;\n  border: 0;\n  font-size: 30px;\n  cursor: pointer;\n}\n.glossary-section {\n  padding: 64px 0;\n  scroll-margin-top: 140px;\n}\n.sec-head {\n  text-align: center;\n  margin-bottom: 30px;\n}\n.sec-head h2 {\n  font-size: clamp(26px, 3vw, 36px);\n  line-height: 1.25;\n  margin: 10px 0;\n}\n.sec-head p {\n  max-width: 740px;\n  margin: 12px auto;\n  color: #5b6b85;\n  line-height: 1.7;\n}\n.search-row {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.search-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid #c9d8ec;\n  border-radius: 10px;\n  padding: 0 18px;\n  flex: 1;\n  background: white;\n  color: #1565d8;\n}\n.search-box input {\n  width: 100%;\n  padding: 17px 0;\n  border: 0;\n  background: transparent;\n  font: inherit;\n  color: #0b1730;\n  min-width: 0;\n}\n.reset-button {\n  border: 1px solid #c9d8ec;\n  border-radius: 9px;\n  padding: 14px;\n  background: white;\n  color: #1565d8;\n  cursor: pointer;\n  font: inherit;\n}\n.category-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 22px;\n}\n.category-tabs button,\n.alphabet button {\n  font: inherit;\n  border: 1px solid #dce5f3;\n  background: #f2f6fc;\n  color: #263f65;\n  border-radius: 8px;\n  cursor: pointer;\n  padding: 11px 15px;\n}\n.category-tabs button.active,\n.alphabet button.active {\n  background: #1565d8;\n  color: white;\n  border-color: #1565d8;\n}\n.alphabet {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 18px 0;\n  border-top: 1px solid #dce5f3;\n  border-bottom: 1px solid #dce5f3;\n}\n.alphabet button {\n  padding: 7px;\n  min-width: 34px;\n  font-size: 13px;\n}\n.alphabet button:disabled {\n  opacity: .35;\n  cursor: default;\n}\n.result-count {\n  margin: 20px 0;\n  color: #5b6b85;\n  font-size: 14px;\n}\n.letter-heading {\n  font-size: 28px;\n  color: #1565d8;\n  border-bottom: 1px solid #dce5f3;\n  padding-bottom: 10px;\n  margin: 28px 0 16px;\n}\n.term-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.term-card {\n  border: 1px solid #dce5f3;\n  border-radius: 12px;\n  padding: 22px;\n  background: #fff;\n  box-shadow: 0 4px 18px #041e4206;\n}\n.term-category {\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 600;\n  color: #1565d8;\n  background: #e8f0fd;\n  padding: 4px 8px;\n  border-radius: 5px;\n  margin-bottom: 12px;\n}\n.term-card[data-category=threat] .term-category {\n  color: #a62639;\n  background: #fff0f1;\n}\n.term-card[data-category=defense] .term-category {\n  color: #14723a;\n  background: #e9f8ee;\n}\n.term-card h4 {\n  font-size: 17px;\n  line-height: 1.4;\n  margin: 0 0 10px;\n  color: #041e42;\n}\n.term-card p,\n.solution-card p {\n  color: #5b6b85;\n  font-size: 14px;\n  line-height: 1.7;\n  margin: 0;\n}\n.empty-state {\n  text-align: center;\n  padding: 45px 20px;\n  background: #f2f6fc;\n  border-radius: 12px;\n}\n.empty-state p {\n  margin: 15px 0;\n}\n.related-section {\n  background: #f2f6fc;\n}\n.solution-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 20px;\n}\n.solution-card {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  background: white;\n  border: 1px solid #dce5f3;\n  padding: 26px;\n  border-radius: 14px;\n  text-decoration: none;\n  transition: transform .2s;\n}\n.solution-card:hover {\n  transform: translateY(-4px);\n}\n.solution-card > .material-symbols-outlined {\n  font-size: 34px;\n  color: #1565d8;\n}\n.solution-card h3 {\n  font-size: 18px;\n}\n.solution-card strong {\n  color: #1565d8;\n  font-size: 14px;\n  margin-top: auto;\n}\n.guide-links {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  flex-wrap: wrap;\n}\n.guides-section {\n  padding-bottom: 16px;\n}\nbutton:focus-visible,\na:focus-visible,\ninput:focus-visible {\n  outline: 3px solid #ff8c1a;\n  outline-offset: 3px;\n}\n@media (max-width: 900px) {\n  .glossary-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .glossary-art {\n    max-width: 480px;\n    justify-self: center;\n  }\n  .term-grid,\n  .solution-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .glossary-hero {\n    padding: 36px 0;\n  }\n  .glossary-section {\n    padding: 42px 0;\n  }\n  .term-grid,\n  .solution-grid {\n    grid-template-columns: 1fr;\n  }\n  .search-row {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .category-tabs button {\n    font-size: 12px;\n    padding: 10px;\n  }\n  .term-card {\n    padding: 20px;\n  }\n  .hero-ctas .btn {\n    white-space: normal;\n    text-align: center;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .solution-card {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=security-glossary.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurityGlossaryPage, { className: "SecurityGlossaryPage", filePath: "src/app/pages/security-glossary.page.ts", lineNumber: 22 });
})();
export {
  SecurityGlossaryPage
};
//# sourceMappingURL=chunk-Q6O2L4ER.js.map
