import { Faq, Pair } from "./models";
export interface FrameworkDetail { name: string; tagline: string; overview: string; highlight: string; faqs: Faq[]; rows: Pair[]; intro: string; useCases: string; }
export const FRAMEWORK_DETAILS: Record<string, FrameworkDetail> = {
  "nist-csf-2-0": {
    "name": "NIST CSF 2.0",
    "tagline": "Six functions that let your board, your auditors and your SOC describe security the same way. XcellHost assesses, operates and reports your programme against CSF 2.0 — with CERT-In, RBI, SEBI and DPDP obligations mapped in.",
    "overview": "NIST CSF 2.0 is a voluntary framework from the US National Institute of Standards and Technology for managing cybersecurity risk. It organises security outcomes into six functions — Govern, Identify, Protect, Detect, Respond and Recover — and lets an organisation describe where it is today (Current Profile), where it needs to be (Target Profile) and how mature its risk practices are (Tiers 1 to 4).",
    "highlight": "One Language For Cyber Risk",
    "faqs": [
      [
        "Is NIST CSF 2.0 Mandatory In India?",
        "No. It is a voluntary framework. However, SEBI's CSCRF follows the same function structure, and many Indian enterprises and global customers expect CSF alignment in vendor security assessments."
      ],
      [
        "What Changed From CSF 1.1 To 2.0?",
        "Version 2.0 added a sixth function, Govern, widened the scope from critical infrastructure to all organisations, strengthened supply-chain risk management and introduced implementation examples and quick-start guides."
      ],
      [
        "Can An Organisation Be Certified To NIST CSF?",
        "There is no official NIST certification. Organisations self-assess or commission an independent assessment and report their profile and tier. Many pair CSF with ISO/IEC 27001 when a certificate is needed."
      ],
      [
        "How Long Does A CSF 2.0 Assessment Take?",
        "For a mid-size organisation a first Current Profile and gap analysis typically takes three to five weeks, depending on scope and how much documentation already exists."
      ],
      [
        "What Are CSF Tiers?",
        "Tiers describe how rigorous your cyber-risk governance and management practices are: Tier 1 Partial, Tier 2 Risk Informed, Tier 3 Repeatable and Tier 4 Adaptive. They are context for decisions, not a maturity score to maximise."
      ],
      [
        "How Does XcellHost Use CSF 2.0?",
        "We use it as the reporting backbone for our security services: assessments produce CSF profiles, our SOC reports detection and response against CSF categories, and Indian regulatory requirements are mapped to the same structure."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "CSF 2.0 (NIST CSWP 29)"
      ],
      [
        "Released",
        "26 February 2024"
      ],
      [
        "Applies To",
        "Any organisation, any sector, worldwide"
      ],
      [
        "Obligation",
        "Voluntary — often expected by customers and regulators"
      ],
      [
        "Assurance",
        "No certificate; self-assessed or independently assessed"
      ]
    ],
    "intro": "Explore the six functions of the CSF Core. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "CSF 2.0 is not law in India, but it is the backbone many Indian regulators and customers recognise. Using it as your organising structure makes Indian obligations easier to evidence rather than adding another audit."
  },
  "iso-iec-27001": {
    "name": "ISO/IEC 27001",
    "tagline": "The international standard for building, running and improving an information security management system, with 93 reference controls in Annex A. XcellHost, itself certified to ISO/IEC 27001, takes you from gap assessment to audit-ready and keeps the ISMS operating afterwards.",
    "overview": "ISO/IEC 27001 is the international standard that sets out the requirements for an information security management system (ISMS). An organisation defines its scope, assesses its information security risks, selects controls, checks them against the 93 reference controls in Annex A, and proves through internal audits and management reviews that the system works. An accredited certification body can then audit it and issue a certificate on a three-year cycle.",
    "highlight": "The Certificate Customers Ask To See",
    "faqs": [
      [
        "Is ISO 27001 Mandatory In India?",
        "No law makes ISO 27001 certification compulsory for every Indian business. It becomes a practical requirement through regulators and contracts: SEBI's CSCRF calls for it, MeitY requires it of empanelled cloud service providers, and enterprise and government buyers routinely list it as a vendor condition."
      ],
      [
        "What Changed In ISO/IEC 27001:2022?",
        "The clauses were aligned with ISO's harmonised structure for management system standards, including a new clause on planning changes. Annex A was rebuilt: 114 controls in 14 groups became 93 controls in four themes, with 11 new ones such as threat intelligence, cloud services security and data leakage prevention."
      ],
      [
        "Are ISO 27001:2013 Certificates Still Valid?",
        "No. The transition period ended on 31 October 2025, after which certificates to the 2013 edition expired or were withdrawn. Any certificate presented today should reference ISO/IEC 27001:2022; check the edition, the scope and the accreditation mark when reviewing a vendor."
      ],
      [
        "How Long Does ISO 27001 Certification Take?",
        "A focused mid-size organisation typically needs around six to eight months from gap assessment to the Stage 2 audit. Scope, the number of sites and how much documented practice already exists are the main drivers, and the ISMS must have run long enough to produce records."
      ],
      [
        "What Is The Statement Of Applicability?",
        "It is the document that lists the Annex A controls, states whether each applies, gives the justification for including or excluding it, and records whether it is implemented. Auditors use it as the map of your ISMS, so it has to match what is really in place."
      ],
      [
        "Does XcellHost Issue ISO 27001 Certificates?",
        "No. Certificates are issued only by accredited certification bodies. XcellHost, which is itself certified to ISO/IEC 27001, prepares you: gap assessment, risk treatment, documentation, control implementation and internal audit support. We then work alongside the certification body you choose through the Stage 1 and Stage 2 audits."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO and IEC (joint committee JTC 1/SC 27)"
      ],
      [
        "Version",
        "ISO/IEC 27001:2022 (third edition) with Amd 1:2024"
      ],
      [
        "Released",
        "October 2022; Amendment 1 in February 2024"
      ],
      [
        "Applies To",
        "Any organisation, any size or sector, worldwide"
      ],
      [
        "Obligation",
        "Voluntary — often contractual or expected by regulators"
      ],
      [
        "Assurance",
        "Certificate from an accredited certification body"
      ]
    ],
    "intro": "Explore clauses 4 to 10 of the management system. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "ISO/IEC 27001 is not a law in India, yet it is the security standard Indian regulators, government buyers and customers recognise most readily. BIS publishes it as an identical Indian Standard, and certificates issued under NABCB or other IAF-member accreditation are accepted across sectors."
  },
  "iso-iec-27002": {
    "name": "ISO/IEC 27002",
    "tagline": "The guidance standard behind ISO 27001's Annex A: 93 controls, each with a purpose, implementation guidance and searchable attributes. XcellHost uses it to design, operate and evidence the controls your Statement of Applicability commits you to.",
    "overview": "ISO/IEC 27002:2022 is the international reference set of information security controls. It describes 93 controls in four themes — organisational, people, physical and technological — and gives each a purpose, implementation guidance and five attributes for sorting and filtering. It is guidance, not a requirements standard: organisations use it to implement the Annex A controls of ISO/IEC 27001 or to build a control set of their own.",
    "highlight": "How To Implement Each Control",
    "faqs": [
      [
        "What Is The Difference Between ISO 27001 And ISO 27002?",
        "ISO/IEC 27001 sets requirements for an information security management system and is the standard organisations are certified against. ISO/IEC 27002 is supporting guidance: it explains the purpose of each of the 93 Annex A controls and how to implement them. You certify to 27001 and implement with 27002."
      ],
      [
        "Can An Organisation Be Certified To ISO 27002?",
        "No. ISO/IEC 27002 contains guidance rather than requirements, so there is no certification against it. Organisations demonstrate that they apply its controls through ISO/IEC 27001 certification, where the auditor tests the controls declared in the Statement of Applicability."
      ],
      [
        "What Changed In ISO/IEC 27002:2022?",
        "The 114 controls of the 2013 edition were restructured into 93: 11 new controls were added, 24 were formed by merging older ones and 58 were updated. Fourteen control clauses gave way to four themes, and each control gained five attributes for filtering."
      ],
      [
        "What Are The 11 New Controls In ISO 27002:2022?",
        "Threat intelligence, information security for use of cloud services, ICT readiness for business continuity, physical security monitoring, configuration management, information deletion, data masking, data leakage prevention, monitoring activities, web filtering and secure coding."
      ],
      [
        "Is ISO 27002 Mandatory In India?",
        "No. It is voluntary guidance. It matters in India because ISO 27001 certification — expected by SEBI's CSCRF, by MeitY for empanelled cloud providers and by many enterprise buyers — is audited against the Annex A controls that ISO 27002 explains in detail."
      ],
      [
        "How Does XcellHost Use ISO 27002?",
        "We use it as the control reference for ISO 27001 projects and for our managed services. Gap assessments are run control by control, our SOC, endpoint, backup and awareness services are mapped to specific controls, and the evidence they produce feeds your Statement of Applicability and audits."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO and IEC (joint committee JTC 1/SC 27)"
      ],
      [
        "Version",
        "ISO/IEC 27002:2022 (third edition)"
      ],
      [
        "Released",
        "February 2022"
      ],
      [
        "Applies To",
        "Any organisation selecting or implementing security controls"
      ],
      [
        "Obligation",
        "Voluntary guidance; supports ISO/IEC 27001 Annex A"
      ],
      [
        "Assurance",
        "Not certifiable — shown through ISO/IEC 27001 certification"
      ]
    ],
    "intro": "Explore the four control themes of ISO/IEC 27002. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "ISO/IEC 27002 is voluntary guidance everywhere, including India, and no certificate is issued against it. Its value here is practical: it is the control vocabulary behind ISO 27001 certification, which Indian regulators and buyers recognise, and it lines up well with sector checklists."
  },
  "nist-sp-800-53": {
    "name": "NIST SP 800-53",
    "tagline": "A catalogue of security and privacy controls in 20 families, written for US federal systems and reused by frameworks worldwide. XcellHost maps your environment to the right baseline, implements the controls and keeps the evidence assessment-ready.",
    "overview": "NIST SP 800-53 Rev. 5 is a catalogue of security and privacy controls published by the US National Institute of Standards and Technology. Controls are organised into 20 families, from Access Control to Supply Chain Risk Management. Organisations choose a starting set from the low, moderate or high baselines in SP 800-53B, tailor it to their risk, and assess it using the procedures in SP 800-53A.",
    "highlight": "The Control Catalogue Others Borrow From",
    "faqs": [
      [
        "Is NIST SP 800-53 Mandatory In India?",
        "No. It binds US federal agencies and, through contracts, their suppliers. Indian organisations adopt it when a US customer, a FedRAMP authorisation or a parent company's policy requires it, or voluntarily as a detailed control reference alongside ISO/IEC 27001 and Indian regulatory requirements."
      ],
      [
        "What Is The Latest Version Of SP 800-53?",
        "Revision 5 remains current, and NIST updates it through numbered releases. Release 5.2.0, issued on 27 August 2025, added three controls and enhancements covering software resiliency, developer testing and update integrity, and revised one more. SP 800-53A was updated to match; the SP 800-53B baselines did not change."
      ],
      [
        "What Are The 20 Control Families?",
        "Access Control; Awareness and Training; Audit and Accountability; Assessment, Authorization and Monitoring; Configuration Management; Contingency Planning; Identification and Authentication; Incident Response; Maintenance; Media Protection; Physical and Environmental Protection; Planning; Program Management; Personnel Security; PII Processing and Transparency; Risk Assessment; System and Services Acquisition; System and Communications Protection; System and Information Integrity; Supply Chain Risk Management."
      ],
      [
        "How Do SP 800-53, 800-53A And 800-53B Differ?",
        "SP 800-53 is the catalogue of controls. SP 800-53B defines the low, moderate and high security baselines and a privacy baseline, telling you where to start. SP 800-53A provides the assessment procedures used to judge whether each control is implemented correctly and working as intended."
      ],
      [
        "Can An Organisation Be Certified To SP 800-53?",
        "There is no NIST certificate. Compliance is shown by assessment: a security plan, results from SP 800-53A procedures and a plan of action for weaknesses. Programmes such as FedRAMP use those assessments to grant an authorisation, which is an agency decision and not a certificate."
      ],
      [
        "How Does XcellHost Help With SP 800-53?",
        "We categorise your systems, select and tailor the baseline, and run a gap assessment by family. Our managed services then operate many of the technical controls — monitoring, endpoint protection, patching, backup and access management — and produce the evidence an assessor will ask for."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "Revision 5, Release 5.2.0"
      ],
      [
        "Released",
        "27 August 2025 (Rev. 5 first published September 2020)"
      ],
      [
        "Applies To",
        "US federal systems; widely adopted by other organisations"
      ],
      [
        "Obligation",
        "Mandatory for US federal agencies; voluntary elsewhere"
      ],
      [
        "Assurance",
        "Assessed with SP 800-53A; no certificate issued"
      ]
    ],
    "intro": "Explore sP 800-53B baselines by system impact level. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "SP 800-53 has no legal force in India. Indian organisations meet it through customers and group policies rather than regulators: US contracts, FedRAMP ambitions and multinational parents. It also serves as a detailed reference when Indian requirements state an outcome without prescribing the control."
  },
  "nist-sp-800-171": {
    "name": "NIST SP 800-171",
    "tagline": "The NIST requirements for safeguarding Controlled Unclassified Information on non-federal systems, flowed down to contractors and their suppliers. XcellHost scopes your CUI environment, implements the requirements and prepares the security plan, score and evidence your customer expects.",
    "overview": "NIST SP 800-171 sets out the security requirements for protecting the confidentiality of Controlled Unclassified Information (CUI) when it sits on systems outside the US federal government. Revision 3, published in May 2024, contains 97 requirements in 17 families, derived from the SP 800-53 moderate baseline. US agencies impose it through contracts, and prime contractors pass it down to suppliers, including those in India.",
    "highlight": "Protecting CUI Across The Supply Chain",
    "faqs": [
      [
        "Does NIST SP 800-171 Apply To Indian Companies?",
        "Yes, when an Indian company handles US federal Controlled Unclassified Information under a contract or subcontract. There is no Indian legal mandate; the obligation is contractual and flows down from the US agency through the prime contractor to each supplier that stores, processes or transmits CUI."
      ],
      [
        "What Changed In SP 800-171 Revision 3?",
        "Requirements were realigned with SP 800-53 Rev. 5 and reduced from 110 to 97 through consolidation. Three families were added — Planning, System and Services Acquisition, and Supply Chain Risk Management — taking the total to 17, and organisation-defined parameters were introduced so agencies can set specific values."
      ],
      [
        "Should We Follow Revision 2 Or Revision 3?",
        "Follow the revision your contract cites. US defence contracts and CMMC still assess against the 110 requirements of Revision 2, and the department has said Revision 3 will be adopted through future rulemaking. Building towards Revision 3 while keeping a Revision 2 mapping prepares you for both."
      ],
      [
        "How Is SP 800-171 Related To CMMC?",
        "CMMC is the US defence department's programme for verifying that contractors have implemented SP 800-171; Level 2 covers the 110 Revision 2 requirements. In July 2026 the department paused the move to mandatory third-party assessments while it reviews the programme. Self-assessment and the underlying obligations remain, so check the current position before bidding."
      ],
      [
        "What Is CUI?",
        "Controlled Unclassified Information is information the US government creates or possesses, or that is created for it, which a law, regulation or government-wide policy requires to be safeguarded, but which is not classified. Export-controlled technical data and defence engineering drawings are common examples in supplier contracts."
      ],
      [
        "How Does XcellHost Help With SP 800-171?",
        "We scope the CUI environment, assess it against the revision in your contract, and write the system security plan and POA&M. Our managed services then run the technical requirements — access control, MFA, logging, endpoint protection, patching and incident response. Formal CMMC certification assessments are carried out by authorised assessment organisations, not by XcellHost."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "Revision 3"
      ],
      [
        "Released",
        "14 May 2024"
      ],
      [
        "Applies To",
        "Non-federal organisations handling US federal CUI"
      ],
      [
        "Obligation",
        "Contractual — imposed by US agencies and flowed down"
      ],
      [
        "Assurance",
        "Self-assessment or third-party assessment (SP 800-171A)"
      ]
    ],
    "intro": "Explore how Rev. 3 is derived from SP 800-53. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "SP 800-171 is not an Indian requirement and no Indian regulator enforces it. It reaches Indian companies by contract, when they handle US federal CUI directly or as a supplier to a prime. The obligation follows the information, not the company's location."
  },
  "cis-critical-security-controls": {
    "name": "CIS Controls v8.1",
    "tagline": "Eighteen Controls and 153 Safeguards, ranked so that the most common attacks are dealt with first. XcellHost assesses you against the right Implementation Group, then delivers Safeguards as managed services, with evidence you can show auditors and customers.",
    "overview": "The CIS Critical Security Controls v8.1 are a prioritised set of 18 Controls and 153 Safeguards published by the Center for Internet Security. Safeguards are sorted into three Implementation Groups: IG1, with 56 Safeguards, is the essential cyber hygiene every organisation should have; IG2 adds 74 and IG3 a further 23. Version 8.1, released in June 2024, aligned the Controls with NIST CSF 2.0.",
    "highlight": "What To Fix First, In Order",
    "faqs": [
      [
        "Are The CIS Controls Mandatory In India?",
        "No. They are voluntary good practice and no Indian regulator requires them by name. Organisations use them because they turn broad obligations from CERT-In, RBI, SEBI and the DPDP Act into specific technical actions, and because customers recognise CIS-aligned hardening in security reviews."
      ],
      [
        "What Are CIS Implementation Groups?",
        "Implementation Groups prioritise the 153 Safeguards. IG1 holds 56 Safeguards described as essential cyber hygiene for every enterprise. IG2 adds 74 for organisations with dedicated IT staff and more complex risk. IG3 adds the final 23 for those with security specialists and sensitive, regulated data."
      ],
      [
        "What Changed In CIS Controls V8.1?",
        "Version 8.1, released in June 2024, was an iterative update to v8. It realigned mappings to NIST CSF 2.0 and added the Govern security function, revised asset classes and some Safeguard descriptions, and expanded the glossary. The structure of 18 Controls and 153 Safeguards was kept."
      ],
      [
        "How Do CIS Controls Differ From CIS Benchmarks?",
        "The Controls say what to do across the organisation, such as maintaining secure configurations. CIS Benchmarks give the detailed configuration settings for a specific product — an operating system, cloud platform or database — and are the usual way of meeting Control 4, Secure Configuration."
      ],
      [
        "Can An Organisation Be Certified To The CIS Controls?",
        "There is no formal certificate for the Controls. Organisations self-assess or commission an independent assessment and report which Implementation Group they meet. Where a certificate is needed, the same work is commonly reused for ISO/IEC 27001 through the mappings CIS publishes."
      ],
      [
        "How Does XcellHost Help With The CIS Controls?",
        "We assess you against the right Implementation Group and deliver many Safeguards as managed services: asset discovery, hardening, patching, MFA, log management, endpoint protection, backup and awareness training. Our 24×7 SOC covers monitoring and response, and reports show Safeguard coverage over time."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Center for Internet Security (CIS)"
      ],
      [
        "Version",
        "Version 8.1"
      ],
      [
        "Released",
        "June 2024"
      ],
      [
        "Applies To",
        "Any organisation, any size or sector"
      ],
      [
        "Obligation",
        "Voluntary — referenced by many policies and regulations"
      ],
      [
        "Assurance",
        "Self-assessment or independent assessment; no certificate"
      ]
    ],
    "intro": "Explore implementation Groups build on one another. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The CIS Controls are voluntary in India; no regulator mandates them by name. Organisations use them as a practical baseline because they translate broad obligations — from CERT-In, RBI, SEBI and the DPDP Act — into specific technical actions that can be checked."
  },
  "csa-cloud-controls-matrix": {
    "name": "CSA CCM",
    "tagline": "The Cloud Controls Matrix is the Cloud Security Alliance's catalogue of 207 cloud security controls in 17 domains, paired with a questionnaire that cloud buyers worldwide ask providers to answer. XcellHost maps your cloud estate to the CCM, closes the gaps and keeps the evidence current.",
    "overview": "The CSA Cloud Controls Matrix (CCM) is a free, cloud-specific catalogue of security controls published by the Cloud Security Alliance. Version 4.1 holds 207 control specifications across 17 domains, from identity and access management to supply chain and datacentre security, each tagged with who is responsible: the provider, the customer or both. Its companion questionnaire, the CAIQ, turns the controls into 283 yes/no questions that cloud buyers use to assess providers.",
    "highlight": "The Cloud Controls Your Customers Already Ask About",
    "faqs": [
      [
        "What Is The Difference Between The CCM And The CAIQ?",
        "The CCM is the list of controls; the CAIQ is the same content rephrased as yes/no questions. Providers answer the CAIQ to describe how they meet each CCM control, and customers use the answers to assess them. In v4.1 the CAIQ has 283 questions covering the 207 controls."
      ],
      [
        "Is The CSA CCM Mandatory In India?",
        "No. It is voluntary, and no Indian regulator names it. But SEBI's cloud framework, RBI's IT outsourcing directions and the DPDP Act all require regulated entities to oversee their cloud providers, and the CCM is a widely accepted way to show that oversight."
      ],
      [
        "What Changed In CCM V4.1?",
        "Released in January 2026, v4.1 added eleven control specifications in domains including datacentre security, logging and monitoring, incident management, supply chain and threat and vulnerability management, and retired one identity control, taking the total to 207. The CAIQ, guidelines and Lite versions were updated with it."
      ],
      [
        "How Long Can We Keep Using CCM V4.0?",
        "CSA's transition timeline accepts both v4.0 and v4.1 for STAR submissions from March 2026, accepts only v4.1 for new submissions from December 2027, and withdraws v4.0.x from active use in January 2028. New programmes should start on v4.1."
      ],
      [
        "Can We Get Certified To The CCM?",
        "Not directly. There is no CCM certificate. Assurance comes through the STAR programme: a Level 1 CAIQ self-assessment, or a Level 2 third-party audit (STAR Certification with ISO/IEC 27001 or STAR Attestation with SOC 2). XcellHost gets you audit-ready and works alongside the approved assessment firm."
      ],
      [
        "How Does XcellHost Help With The CCM?",
        "We scope your cloud services, build the shared responsibility matrix, assess all applicable controls, map evidence to ISO 27001 and PCI DSS, draft the CAIQ and then keep controls healthy with cloud posture management and 24×7 log monitoring from our Mumbai SOC."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Cloud Security Alliance (CSA)"
      ],
      [
        "Version",
        "CCM v4.1 with CAIQ v4.1"
      ],
      [
        "Released",
        "January 2026 — v4.0.x withdrawn from January 2028"
      ],
      [
        "Applies To",
        "Cloud service providers and cloud customers, all service models"
      ],
      [
        "Obligation",
        "Voluntary — expected in cloud procurement and STAR submissions"
      ],
      [
        "Assurance",
        "Self-assessment (CAIQ) or third-party STAR audit; no CCM certificate"
      ]
    ],
    "intro": "Explore standards mapped in, cloud assurance out. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates the CCM by name, but the oversight it demonstrates is exactly what Indian cloud rules ask for. Regulated entities stay accountable for security their cloud providers deliver, and the CCM is the most widely recognised way to document that split."
  },
  "epss": {
    "name": "EPSS",
    "tagline": "EPSS is FIRST's data-driven model that gives every published CVE a daily probability of being exploited in the next 30 days. XcellHost combines EPSS with CVSS severity, the CISA KEV catalogue and your asset context to shrink the patch queue to what matters.",
    "overview": "EPSS, the Exploit Prediction Scoring System, is a free, data-driven model from FIRST that estimates the probability that a published CVE will be exploited in the wild within the next 30 days. Each vulnerability gets a score between 0 and 1 and a percentile that ranks it against every other scored CVE. Scores are recalculated daily from vulnerability details and observed exploitation activity, so teams can patch what attackers are likely to use first.",
    "highlight": "Patch The Flaws Attackers Will Actually Use",
    "faqs": [
      [
        "What Does An EPSS Score Of 0.9 Mean?",
        "It means the model estimates a 90 percent chance that exploitation activity for that CVE will be observed in the wild within the next 30 days. Very few vulnerabilities score that high, so a 0.9 almost always belongs at the front of the patch queue, whatever its CVSS rating."
      ],
      [
        "How Is EPSS Different From CVSS?",
        "CVSS describes how severe a vulnerability could be, scored by people from its technical characteristics. EPSS predicts how likely it is to be exploited soon, learned from observed attacks. FIRST advises using both together, and not multiplying them, because they measure different things."
      ],
      [
        "Is EPSS Mandatory In India?",
        "No. No Indian law or regulator requires EPSS. CERT-In, RBI, SEBI and the DPDP Act set expectations for timely remediation and reasonable safeguards; EPSS is a voluntary, free input that helps you meet those expectations and show why the order of patching was justified."
      ],
      [
        "What EPSS Threshold Should We Use?",
        "FIRST does not prescribe one. Because only a small share of CVEs score above 0.5, many teams fast-track anything above a chosen probability or above a high percentile, and treat KEV-listed CVEs as mandatory regardless. The right cut-off depends on your patch capacity and exposure, and should be reviewed regularly."
      ],
      [
        "Where Do EPSS Scores Come From And Are They Free?",
        "Scores are produced by a machine-learning model maintained under the FIRST EPSS Special Interest Group, trained on vulnerability data and exploitation activity shared by data partners. They are published daily as CSV files and through a public API, free of charge and without registration, with attribution requested."
      ],
      [
        "How Does XcellHost Use EPSS?",
        "Our vulnerability management service pulls EPSS scores daily and attaches score and percentile to every finding alongside CVSS and KEV status. Agreed thresholds decide what is fast-tracked, our SOC adds evidence from your own environment, and every ticket keeps the data that justified its priority."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "FIRST, through the EPSS Special Interest Group (SIG)"
      ],
      [
        "Version",
        "EPSS v4 model"
      ],
      [
        "Released",
        "March 2025 (v4 model)"
      ],
      [
        "Applies To",
        "Every published CVE, worldwide"
      ],
      [
        "Obligation",
        "Voluntary; free to use, attribution requested"
      ],
      [
        "Assurance",
        "None; a prioritisation signal, not a certification"
      ]
    ],
    "intro": "Explore threat data in, exploitation probability out. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates EPSS, and none forbids it. Indian obligations set deadlines for closing vulnerabilities; EPSS is a tool for deciding the order of work within those deadlines, and for showing a regulator or auditor that any deferral was based on evidence rather than convenience."
  },
  "cvss": {
    "name": "CVSS",
    "tagline": "CVSS is the open standard from FIRST for rating how severe a vulnerability is, from 0.0 to 10.0, using base, threat and environmental metrics. XcellHost uses CVSS v4.0 scores, adjusted for your environment, to rank findings from VAPT and vulnerability management and to set remediation timelines.",
    "overview": "CVSS, the Common Vulnerability Scoring System, is an open standard maintained by FIRST for describing the characteristics of a vulnerability and turning them into a severity score from 0.0 to 10.0. Version 4.0, published in November 2023, uses four metric groups: Base, Threat, Environmental and Supplemental. The score maps to a rating of None, Low, Medium, High or Critical. CVSS measures how bad a flaw could be, not how likely it is to be exploited.",
    "highlight": "Severity Every Vendor, Scanner And Auditor Agrees On",
    "faqs": [
      [
        "What Is A CVSS Score?",
        "A number from 0.0 to 10.0 that summarises how severe a vulnerability is, calculated from standard metrics such as how it is reached, what privileges it needs and what it does to confidentiality, integrity and availability. The score comes with a rating from None to Critical and a vector string recording every metric."
      ],
      [
        "What Changed In CVSS V4.0?",
        "Version 4.0 added the Attack Requirements base metric, split impact into Vulnerable System and Subsequent System in place of Scope, renamed Temporal to Threat with a single Exploit Maturity metric, added Supplemental metrics including Safety, and introduced the CVSS-B, BT, BE and BTE nomenclature."
      ],
      [
        "Is CVSS Mandatory In India?",
        "No Indian law names CVSS. In practice it is unavoidable: PCI DSS scans fail at CVSS 4.0 and above, RBI and SEBI expect severity-based remediation of VAPT findings, and CERT-In advisories and vendor bulletins describe severity in comparable terms."
      ],
      [
        "Is A CVSS Score The Same As Risk?",
        "No. FIRST is explicit that a base score measures severity, not risk, and should not be used alone to prioritise patching. Risk also depends on how likely exploitation is, which EPSS and the CISA KEV catalogue address, and on what the affected asset means to your business."
      ],
      [
        "Should We Still Use CVSS V3.1 Scores?",
        "Yes, where that is what a vendor or database publishes. v4.0 is being adopted alongside v3.1 rather than replacing it overnight, and FIRST keeps both documented. Record the version with each score; the vector string begins with CVSS:3.1 or CVSS:4.0, so the two are never confused."
      ],
      [
        "How Does XcellHost Use CVSS?",
        "Our testers score every finding with a full v4.0 vector, our vulnerability management platform adds threat and environmental metrics for your estate, and remediation SLAs are set by severity band. EPSS and KEV data then decide the order within each band, and reports keep score, vector and rating together."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "FIRST (Forum of Incident Response and Security Teams), CVSS SIG"
      ],
      [
        "Version",
        "CVSS v4.0"
      ],
      [
        "Released",
        "1 November 2023"
      ],
      [
        "Applies To",
        "Any software, hardware or firmware vulnerability, in any sector"
      ],
      [
        "Obligation",
        "Voluntary; the de facto standard for vendors, NVD and scanners"
      ],
      [
        "Assurance",
        "None; scores are published by vendors, CNAs and databases such as NVD"
      ]
    ],
    "intro": "Explore qualitative severity bands on the 0 to 10 scale. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "CVSS is not written into Indian law, but it is the severity scale behind nearly every vulnerability report an Indian regulator, auditor or customer will read. Indian rules say vulnerabilities must be found and fixed on time; CVSS is how the order of fixing is justified."
  },
  "stix-taxii": {
    "name": "STIX / TAXII",
    "tagline": "STIX is the JSON language for describing threats, and TAXII is the protocol that carries it between organisations and tools. XcellHost consumes, produces and operationalises STIX feeds inside your SOC so indicators from advisories, partners and commercial feeds reach your defences without manual retyping.",
    "overview": "STIX (Structured Threat Information Expression) is an open, JSON-based language for describing cyber threat intelligence: actors, campaigns, malware, indicators, vulnerabilities and the relationships between them. TAXII (Trusted Automated Exchange of Intelligence Information) is the companion HTTPS protocol for sharing that intelligence through collections on a server. Both are OASIS Standards at version 2.1, maintained by the OASIS Cyber Threat Intelligence Technical Committee, and are the common format behind most threat-intelligence platforms and feeds.",
    "highlight": "Threat Intelligence That Moves Between Tools",
    "faqs": [
      [
        "What Is The Difference Between STIX And TAXII?",
        "STIX is the content: a standard set of JSON objects for describing threats, indicators and how they relate. TAXII is the delivery: an HTTPS API through which a client discovers a server, finds its collections and fetches or submits objects. You can use STIX without TAXII, but TAXII was built to carry STIX."
      ],
      [
        "Is STIX / TAXII Mandatory In India?",
        "No. No Indian law or regulator requires STIX or TAXII. CERT-In, RBI, SEBI and the DPDP Act set reporting and monitoring obligations, not data formats. STIX and TAXII are the common way organisations and tools meet those obligations by exchanging intelligence automatically rather than by hand."
      ],
      [
        "What Changed Between STIX 2.0 And STIX 2.1?",
        "STIX 2.1 added the Grouping, Infrastructure, Language Content, Location, Malware Analysis, Note and Opinion objects, introduced a confidence property, allowed cyber-observables to take part in relationships directly, and reworked the Malware object. STIX 2.1 and TAXII 2.1 were both approved as OASIS Standards in June 2021."
      ],
      [
        "Which Tools Support STIX 2.1 And TAXII?",
        "Most threat-intelligence platforms, SIEMs and XDR products, including open-source platforms such as MISP and OpenCTI. MITRE publishes ATT&CK in STIX 2.1, and Microsoft Sentinel, which XcellHost manages for customers, includes a TAXII connector for pulling collections directly into the SIEM."
      ],
      [
        "Do We Need Our Own TAXII Server?",
        "Usually not. Most organisations act only as TAXII clients, polling collections offered by vendors, sector bodies and partners. You need a server only if you intend to publish intelligence to others, and many threat-intelligence platforms can provide that role when the time comes."
      ],
      [
        "How Does XcellHost Help With STIX / TAXII?",
        "We connect your SIEM or XDR to TAXII collections, curate STIX feeds relevant to Indian organisations, convert advisories into usable indicators, push them to your controls with expiry, and return sightings and investigation findings as STIX bundles so your intelligence improves with every incident."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OASIS Open, Cyber Threat Intelligence (CTI) Technical Committee"
      ],
      [
        "Version",
        "STIX 2.1 and TAXII 2.1"
      ],
      [
        "Released",
        "10 June 2021 (both approved as OASIS Standards)"
      ],
      [
        "Applies To",
        "Anyone producing or consuming cyber threat intelligence"
      ],
      [
        "Obligation",
        "Voluntary open standards; no Indian mandate"
      ],
      [
        "Assurance",
        "None; interoperability shown by conforming implementations"
      ]
    ],
    "intro": "Explore sTIX domain objects linked by relationships. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian law or regulator mandates STIX or TAXII. Indian obligations are about reporting incidents and acting on advisories; STIX and TAXII are the practical way to move that information between organisations and into the tools that enforce it, without analysts retyping indicators."
  },
  "veris": {
    "name": "VERIS",
    "tagline": "VERIS is an open vocabulary for recording who did what to which asset, and with what effect, in a security incident. XcellHost codes investigations and SOC cases in VERIS terms so your incident history becomes data you can measure and compare.",
    "overview": "VERIS, the Vocabulary for Event Recording and Incident Sharing, is an open framework from Verizon for describing security incidents in a structured, repeatable way. Each incident is coded by its Actors, Actions, Assets and Attributes, known as the four A's, together with victim demographics, a timeline, discovery and response details and impact. It is the data model behind the Verizon Data Breach Investigations Report.",
    "highlight": "Every Incident Described The Same Way",
    "faqs": [
      [
        "What Does VERIS Stand For?",
        "VERIS stands for Vocabulary for Event Recording and Incident Sharing. It was created by Verizon's RISK team as a common language for describing security incidents, and it is the data model behind the annual Verizon Data Breach Investigations Report."
      ],
      [
        "What Are The Four A'S Of VERIS?",
        "Actor, Action, Asset and Attribute. Together they answer whose actions affected the asset, what those actions were, which assets were affected and how they were affected. A single incident can involve several of each."
      ],
      [
        "Is VERIS Mandatory In India?",
        "No. No Indian law or regulator requires VERIS. Mandatory incident reporting follows CERT-In's Directions, sector regulators and the DPDP Act. VERIS is a voluntary way to keep internal incident records consistent, which makes those mandatory reports easier to prepare."
      ],
      [
        "What Is The VCDB?",
        "The VERIS Community Database is a free, open repository of publicly reported security incidents coded in VERIS format. Researchers and security teams use it to study incident patterns and to see worked examples of how real incidents are classified."
      ],
      [
        "How Is VERIS Different From MITRE ATT&CK?",
        "VERIS records the whole incident at a summary level, including errors and impact. ATT&CK describes adversary techniques in detail. The two complement each other: VERIS shows what kinds of incident you suffer, and ATT&CK shows how the attacks behind them work."
      ],
      [
        "How Does XcellHost Use VERIS?",
        "Our incident response and SOC teams can classify cases using VERIS terms, so each investigation ends with a structured record of actor, action, asset, attribute, timeline and impact. That record feeds your regulator reports, board metrics and control priorities."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Verizon (RISK Team) with the VERIS community"
      ],
      [
        "Version",
        "Open JSON schema, maintained on GitHub (vz-risk/veris)"
      ],
      [
        "Released",
        "Developed by Verizon in 2010; schema updated periodically"
      ],
      [
        "Applies To",
        "Any organisation recording or sharing security incident data"
      ],
      [
        "Obligation",
        "Voluntary; openly published and free to adopt"
      ],
      [
        "Assurance",
        "None; value comes from consistent, complete incident records"
      ]
    ],
    "intro": "Explore the four A's that describe any incident. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "VERIS is not required by any Indian regulator. It is a recording discipline that sits beside mandatory reporting: Indian rules say what must be reported and when, while VERIS gives your team a consistent way to describe the incident itself."
  },
  "nist-incident-response": {
    "name": "NIST SP 800-61",
    "tagline": "NIST's incident response guidance, now in Revision 3, ties preparation, detection, response and recovery to the six CSF 2.0 functions. XcellHost reviews your plan against it, rehearses it with tabletop exercises and stands behind it with a 24×7 SOC and response retainer.",
    "overview": "NIST SP 800-61 is the US National Institute of Standards and Technology's guidance on cybersecurity incident response. Revision 3, finalised in April 2025, replaces the four-phase life cycle of Revision 2 with a CSF 2.0 Community Profile: Govern, Identify and Protect prepare the organisation, Detect, Respond and Recover handle the incident, and lessons learned feed continuous improvement across all six functions.",
    "highlight": "Incident Response That Starts Before The Breach",
    "faqs": [
      [
        "Is NIST SP 800-61 Mandatory In India?",
        "No. It is voluntary guidance from a US agency. Indian organisations use it as the structure for their incident response plans, while the binding duties come from CERT-In's Directions, sector regulators such as RBI and SEBI, and the DPDP Act and Rules."
      ],
      [
        "What Changed In SP 800-61 Revision 3?",
        "Revision 3, finalised in April 2025, replaces the four-phase life cycle with a CSF 2.0 Community Profile. It maps recommendations and considerations to all six CSF functions, treats lessons learned as continuous improvement, and points to NIST's online resources for technical detail that changes often."
      ],
      [
        "What Were The Four Phases In Revision 2?",
        "Revision 2, published in 2012, described Preparation; Detection and Analysis; Containment, Eradication and Recovery; and Post-Incident Activity. Many plans still use these headings and they remain a workable outline, but NIST has superseded Revision 2 with the CSF-based model in Revision 3."
      ],
      [
        "Is There A NIST Incident Response Certification?",
        "No. NIST does not certify organisations against SP 800-61. Alignment is shown through a documented plan, exercise records, incident reports and independent reviews. Where a certificate is needed, organisations usually cover incident management within an ISO/IEC 27001 certification."
      ],
      [
        "How Often Should An Incident Response Plan Be Tested?",
        "NIST does not set a fixed interval. A sensible baseline is at least one tabletop exercise a year for leadership and technical teams, with further tests after major changes to systems, suppliers or regulation, and a review after every significant incident."
      ],
      [
        "How Does XcellHost Help With NIST Incident Response?",
        "We review your plan and playbooks against Revision 3 and Indian reporting rules, run tabletop exercises, monitor through our 24×7 SOC and respond under an IR retainer. After an incident we support forensics, regulator reporting and the lessons-learned review."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "SP 800-61 Revision 3 (SP 800-61r3)"
      ],
      [
        "Released",
        "3 April 2025 (supersedes Rev. 2 of August 2012)"
      ],
      [
        "Applies To",
        "Any organisation that must handle cybersecurity incidents"
      ],
      [
        "Obligation",
        "Voluntary guidance; a common reference for response plans"
      ],
      [
        "Assurance",
        "No certificate; shown through plans, exercises and reviews"
      ]
    ],
    "intro": "Explore preparation at the base, response on top. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "SP 800-61 is not mandatory in India, but it is a reference that many Indian incident response plans are measured against. Its structure helps organisations meet the reporting duties that Indian law and regulators do impose, on time and with evidence."
  },
  "diamond-model": {
    "name": "The Diamond Model",
    "tagline": "A model that records each intrusion as four linked features — adversary, capability, infrastructure and victim — so analysts can pivot between them and group related activity. XcellHost uses it in threat intelligence and incident response to tell you who is attacking, how, and what to watch next.",
    "overview": "The Diamond Model of Intrusion Analysis is a method for describing and analysing cyber intrusions. Every malicious event is recorded as four connected core features — an adversary using a capability over infrastructure against a victim — drawn as the vertices of a diamond. Meta-features such as timestamp, phase and result add context; events chain into activity threads and cluster into activity groups, letting analysts pivot from one clue to the adversary behind it.",
    "highlight": "Connect Every Intrusion To Its Adversary",
    "faqs": [
      [
        "What Are The Four Core Features Of The Diamond Model?",
        "Adversary, Capability, Infrastructure and Victim. Every intrusion event is described as an adversary using a capability over some infrastructure against a victim. Drawn as the four corners of a diamond, the features are connected by edges that analysts use to pivot from what they know to what they do not."
      ],
      [
        "Who Created The Diamond Model?",
        "Sergio Caltagirone, Andrew Pendergast and Christopher Betz. Their technical report, The Diamond Model of Intrusion Analysis, was published in July 2013 and remains the definitive description. It sets out the model's seven axioms, its meta-features and the ideas of activity threads and activity groups."
      ],
      [
        "How Does The Diamond Model Work With The Cyber Kill Chain And ATT&CK?",
        "They complement each other. The Kill Chain supplies the phases used to order events into an activity thread; ATT&CK supplies a precise vocabulary for the capability feature. The Diamond Model then adds what neither provides on its own: the adversary, the infrastructure and the victim, all linked."
      ],
      [
        "Is The Diamond Model Mandatory In India?",
        "No. It is a voluntary analytic method, not a regulation or standard. Indian regulators such as CERT-In, RBI and SEBI require incident reporting and the use of threat intelligence, and the Diamond Model is one of the clearest ways to structure the analysis behind both."
      ],
      [
        "What Are Activity Threads And Activity Groups?",
        "An activity thread is a chain of events against one victim ordered by phase, showing how an intrusion unfolded. An activity group is a cluster of events and threads that share features such as infrastructure or tooling, which analysts track and defend against as a single adversary campaign."
      ],
      [
        "How Does XcellHost Use The Diamond Model?",
        "Our threat-intelligence and incident-response teams record events as diamonds, reconstruct intrusions as activity threads and track adversaries as activity groups. You receive reports that say who targeted you, with what tools and infrastructure, and detections and blocks that cover the group's wider activity."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Caltagirone, Pendergast and Betz; US DoD technical report ADA586960"
      ],
      [
        "Version",
        "Original 2013 model, no later official revision"
      ],
      [
        "Released",
        "5 July 2013"
      ],
      [
        "Applies To",
        "Threat-intelligence, SOC and incident-response teams in any sector"
      ],
      [
        "Obligation",
        "Voluntary analytic method, free to use"
      ],
      [
        "Assurance",
        "No certificate; quality shown in the analysis it produces"
      ]
    ],
    "intro": "Explore the four core features of an intrusion event. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates the Diamond Model, but it fits the questions they ask after an incident. It is also the natural way to use the advisories and indicator feeds that CERT-In and sector bodies publish, turning lists of indicators into an understanding of who is targeting you."
  },
  "cyber-kill-chain": {
    "name": "Cyber Kill Chain",
    "tagline": "Lockheed Martin's seven-phase model of a targeted intrusion, from reconnaissance to actions on objectives. XcellHost uses it to place your controls, detections and response playbooks at every phase, so an attack can be stopped early and reported clearly to CERT-In and your regulators.",
    "overview": "The Cyber Kill Chain is a model from Lockheed Martin that describes a targeted cyber attack as seven phases in sequence: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command and Control, and Actions on Objectives. Its central idea is that an attacker must complete every phase to succeed, so a defender who detects or blocks any one phase breaks the chain. It underpins intelligence-driven defence and incident analysis.",
    "highlight": "Break The Attack Before It Succeeds",
    "faqs": [
      [
        "What Are The Seven Steps Of The Cyber Kill Chain?",
        "Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command and Control, and Actions on Objectives. They describe a targeted intrusion in order, from researching the victim to achieving the attacker's goal, and the defender's aim is to detect or block the attack at the earliest possible phase."
      ],
      [
        "Who Created The Cyber Kill Chain?",
        "Lockheed Martin's computer incident response team. Eric Hutchins, Michael Cloppert and Rohan Amin described it in the 2011 paper Intelligence-Driven Computer Network Defense Informed by Analysis of Adversary Campaigns and Intrusion Kill Chains. Cyber Kill Chain is a registered trademark of Lockheed Martin."
      ],
      [
        "Is The Cyber Kill Chain Outdated?",
        "It is often criticised for assuming malware-based, perimeter-crossing attacks and for saying little about insiders, cloud misuse or lateral movement. Those are fair limits, which is why most teams pair it with MITRE ATT&CK for detail. As a way to explain and interrupt an attack's progression it remains widely used."
      ],
      [
        "Is The Cyber Kill Chain Mandatory In India?",
        "No. It is a voluntary analytical model, not a regulation or standard. Indian regulators such as CERT-In, RBI and SEBI set outcomes — timely reporting, tested response plans, effective monitoring — and the Kill Chain is a practical way to organise and explain how those outcomes are met."
      ],
      [
        "What Is The Course-Of-Action Matrix?",
        "A table from the original paper that pairs each kill-chain phase with six defensive actions: detect, deny, disrupt, degrade, deceive and destroy. Filling it in with your real controls shows at a glance which phases are well covered and which are not."
      ],
      [
        "How Does XcellHost Use The Cyber Kill Chain?",
        "We map your controls and our managed services to the seven phases, close the gaps with email security, EDR, network detection and incident response, and test the chain with breach-and-attack simulation. Incident reports describe how far an attacker got, phase by phase, in terms CERT-In and your regulators can follow."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Lockheed Martin Corporation (LM-CIRT)"
      ],
      [
        "Version",
        "Original seven-phase model, unchanged since publication"
      ],
      [
        "Released",
        "2011 (Hutchins, Cloppert and Amin whitepaper)"
      ],
      [
        "Applies To",
        "Any organisation facing targeted, multi-stage intrusions"
      ],
      [
        "Obligation",
        "Voluntary; Cyber Kill Chain® is a Lockheed Martin registered trademark"
      ],
      [
        "Assurance",
        "No certificate; used to structure detection and response"
      ]
    ],
    "intro": "Explore the seven phases of the Cyber Kill Chain. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The Cyber Kill Chain is not mandated by any Indian regulator, but it is one of the most common ways Indian SOCs, CERT-In advisories and incident reports describe how an attack progressed. Using it makes regulatory reporting and board briefings faster and more precise."
  },
  "mitre-engage": {
    "name": "MITRE Engage",
    "tagline": "A free framework for planning and running cyber denial, deception and adversary-engagement operations inside your own network. XcellHost designs decoy environments, monitors them from our 24×7 SOC and turns what attackers reveal into detections and threat intelligence you can act on.",
    "overview": "MITRE Engage is a free framework for planning, discussing and running adversary-engagement operations — the deliberate use of cyber denial and deception to make attacks costlier and less rewarding. Its matrix organises activities under five goals: Prepare, Expose, Affect, Elicit and Understand. Rather than simply blocking an intruder, Engage helps defenders observe, steer and learn from them inside controlled environments, feeding the results back into detection and threat intelligence.",
    "highlight": "Turn Intruders Into Intelligence",
    "faqs": [
      [
        "What Happened To MITRE Shield?",
        "MITRE Shield was MITRE's earlier active-defence knowledge base. Engage builds on it and replaced it as the maintained framework when version 1.0 was released in March 2022, adding the goal-approach-activity structure, the ten-step process and a starter kit for practitioners."
      ],
      [
        "Is Deception Technology Legal In India?",
        "Deploying decoys inside systems you own is lawful; it is simply monitoring your own network. What is not permitted is reaching into an attacker's systems, which could be unauthorised access under the IT Act, 2000. Engage is deliberately scoped to the defender's own environment for this reason."
      ],
      [
        "Is MITRE Engage Just Honeypots?",
        "No. Honeypots are one tool. Engage is the planning discipline around them: defining objectives, modelling the adversary, building a believable narrative, setting stop criteria and analysing results. It also covers denial activities such as isolation and manipulated software that are not honeypots at all."
      ],
      [
        "How Does Engage Relate To ATT&CK?",
        "Each Engage activity is mapped to the ATT&CK techniques it takes advantage of. The idea is that every attacker behaviour creates a dependency — on credentials, on believable files, on a working network — that a defender can shape. ATT&CK describes the behaviour; Engage describes how to exploit it."
      ],
      [
        "Do We Need A Mature SOC First?",
        "You need someone to watch the decoys and act on alerts, so a monitored environment is a prerequisite. Many Indian organisations start with a managed SOC and a small set of decoy credentials and files, then expand to full engagement environments as confidence grows."
      ],
      [
        "How Does XcellHost Help With MITRE Engage?",
        "We plan engagements with you, build decoy credentials, files, hosts and network paths that match your estate, monitor them from our 24×7 SOC and run after-action reviews. Findings return as ATT&CK-mapped detections and threat intelligence, with CERT-In reporting support when a real intrusion is confirmed."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "The MITRE Corporation"
      ],
      [
        "Version",
        "Engage Matrix v1.0"
      ],
      [
        "Released",
        "March 2022"
      ],
      [
        "Applies To",
        "Any organisation with a SOC and systems it fully controls"
      ],
      [
        "Obligation",
        "Voluntary — freely available from MITRE"
      ],
      [
        "Assurance",
        "No certificate; success measured by intelligence gained per operation"
      ]
    ],
    "intro": "Explore the five goals of the Engage Matrix. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates deception technology, but several expect the outcomes it produces: early detection, threat intelligence and a tested SOC. Engage also keeps you on the right side of the law, because every activity is confined to systems you own and control."
  },
  "mitre-d3fend": {
    "name": "MITRE D3FEND",
    "tagline": "A free knowledge graph of defensive techniques, organised under seven tactics and linked to the attacker behaviours in ATT&CK. XcellHost uses D3FEND to describe the controls we design and operate for you, so every security spend can be traced to the attacks it counters.",
    "overview": "MITRE D3FEND is a free, openly published knowledge base of cybersecurity countermeasures, built as a formal ontology rather than a checklist. It names defensive techniques, groups them under seven tactics — Model, Harden, Detect, Isolate, Deceive, Evict and Restore — and links each to the digital artefacts it protects and the ATT&CK techniques it counters. Security architects use it to describe, compare and justify defences with precision.",
    "highlight": "Name Every Defence, Map It To Every Attack",
    "faqs": [
      [
        "What Does D3FEND Stand For?",
        "D3FEND is short for Detection, Denial, and Disruption Framework Empowering Network Defense. MITRE released it as a public beta in June 2021 with funding from the US National Security Agency, and version 1.0 reached general availability in December 2024."
      ],
      [
        "How Is D3FEND Different From ATT&CK?",
        "ATT&CK catalogues attacker behaviour; D3FEND catalogues defender countermeasures. They are designed to be used together: D3FEND techniques are linked to the digital artefacts that ATT&CK techniques act on, so you can move from a threat to the specific defences that address it."
      ],
      [
        "Is MITRE D3FEND Mandatory In India?",
        "No. It is a voluntary reference, not a regulation or certifiable standard. Indian regulators such as RBI, SEBI and CERT-In set control and reporting outcomes; D3FEND is a practical way to describe and evidence the defences that meet them."
      ],
      [
        "What Is The D3FEND CAD Tool?",
        "D3FEND CAD is a free, browser-based diagramming tool launched with version 1.0. Architects drag D3FEND objects — attacks, defences, artefacts, sensors — onto a canvas, link them, and use the ontology's inference to check how an architecture holds up against named threats."
      ],
      [
        "Does D3FEND Cover Operational Technology?",
        "Yes, and increasingly so. From the 1.1 release in 2025 onwards MITRE has added OT commands, events, monitoring and hardening countermeasures, with mappings to ATT&CK for ICS, which makes D3FEND usable for manufacturing, energy and utility environments in India."
      ],
      [
        "How Does XcellHost Use MITRE D3FEND?",
        "We map the controls we design and operate — hardening, Zero Trust access, SOC detections, incident response and backup — to D3FEND techniques, and report coverage by tactic alongside ATT&CK coverage. That gives your leadership and auditors one view of both the threats and the defences."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "The MITRE Corporation, funded by the NSA Cybersecurity Directorate"
      ],
      [
        "Version",
        "D3FEND ontology 1.6.0"
      ],
      [
        "Released",
        "31 August 2026 (1.0 reached general availability in December 2024)"
      ],
      [
        "Applies To",
        "Enterprise IT, cloud, mobile, OT and AI systems"
      ],
      [
        "Obligation",
        "Voluntary — a reference vocabulary for defensive engineering"
      ],
      [
        "Assurance",
        "No certificate; coverage shown by mapping controls to techniques"
      ]
    ],
    "intro": "Explore the seven D3FEND tactics, Model to Restore. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "D3FEND is not a law, a standard or a certification in India, and no licence is needed to use it. Its value for Indian organisations is in evidencing controls: regulators ask for layered, tested defences, and D3FEND gives those defences names that map to recognised attacks."
  },
  "mitre-attack": {
    "name": "MITRE ATT&CK",
    "tagline": "A free, globally used knowledge base of the tactics and techniques real attackers rely on. XcellHost maps your detections, red-team tests and threat intelligence to ATT&CK, so you can see which attacker behaviours your SOC would catch — and which it would miss.",
    "overview": "MITRE ATT&CK is a free, openly published knowledge base of how real cyber attackers behave, built from observed intrusions. It groups attacker behaviour into tactics (the goal), techniques and sub-techniques (the method), and links each to mitigations, detection strategies, threat groups and software. Security teams use it as a shared reference to plan detections, test defences and describe incidents consistently.",
    "highlight": "Defend Against How Attackers Really Operate",
    "faqs": [
      [
        "What Does ATT&CK Stand For?",
        "Adversarial Tactics, Techniques, and Common Knowledge. MITRE began the project in 2013 to document the behaviour of advanced attackers and released it publicly in 2015. It is free for any person or organisation to use, and has become a common reference for describing attacker behaviour."
      ],
      [
        "Is MITRE ATT&CK Mandatory In India?",
        "No. ATT&CK is a voluntary knowledge base, not a regulation or certifiable standard. Indian regulators such as RBI, SEBI and CERT-In set outcomes — effective monitoring, red teaming, timely incident reporting — and ATT&CK is one of the most practical ways to plan and evidence those outcomes."
      ],
      [
        "What Changed In ATT&CK V19?",
        "Released on 28 April 2026, v19 split the Enterprise Defense Evasion tactic into Stealth and Defense Impairment, taking Enterprise to 15 tactics. It also added sub-techniques to the ICS matrix. The previous release, v18, replaced per-technique detection notes with detection strategies and analytics."
      ],
      [
        "How Many Techniques Are In ATT&CK?",
        "The numbers change with each release. As of v19, ATT&CK for Enterprise lists 15 tactics, 222 techniques and 475 sub-techniques, with separate Mobile and ICS matrices alongside. Check the current release notes rather than relying on a figure quoted in an older document or tool."
      ],
      [
        "Is There An ATT&CK Certification Or Compliance Level?",
        "No. There is no ATT&CK certification for organisations, and full coverage is not a meaningful target. A coverage map shows that a detection exists for a technique, not how well it works. Treat it as a planning tool and confirm it with emulation testing."
      ],
      [
        "How Does XcellHost Use MITRE ATT&CK?",
        "Our 24×7 SOC tags detections to ATT&CK techniques and reports coverage by tactic. Threat intelligence is delivered as techniques to hunt, red-team and breach-and-attack tests are planned from relevant groups, and incident reports describe attacker behaviour in ATT&CK terms that auditors and regulators can follow."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "The MITRE Corporation, a US not-for-profit"
      ],
      [
        "Version",
        "ATT&CK v19 (major releases about every six months)"
      ],
      [
        "Released",
        "28 April 2026"
      ],
      [
        "Applies To",
        "Enterprise IT, cloud, mobile and industrial control systems"
      ],
      [
        "Obligation",
        "Voluntary — a de facto reference for SOCs and security vendors"
      ],
      [
        "Assurance",
        "No certificate; coverage is shown by mapping and testing"
      ]
    ],
    "intro": "Explore the 15 tactics of ATT&CK for Enterprise (v19). Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "ATT&CK is not a law, a standard or a certification in India, and no licence is needed to use it. Its value is practical: it gives Indian SOCs, auditors and regulators a common, testable way to describe whether monitoring and response actually work."
  },
  "cyber-risk-institute-profile": {
    "name": "CRI Profile",
    "tagline": "A NIST CSF 2.0-based assessment framework built by financial institutions, with 318 diagnostic statements scaled to a firm's impact tier and mapped to dozens of regulations. XcellHost runs Profile assessments for Indian banks, fintechs, GCCs and the vendors that serve global financial customers.",
    "overview": "The CRI Profile is a cybersecurity assessment framework developed by the Cyber Risk Institute, a not-for-profit coalition of financial institutions. Built on NIST CSF 2.0, it adds a seventh function, Extend, for third-party risk and condenses thousands of regulatory expectations into 318 diagnostic statements. A nine-question impact tiering sets how many statements a firm must answer. It is free to download and became the usual successor to the retired FFIEC Cybersecurity Assessment Tool.",
    "highlight": "The Financial Sector'S Cyber Yardstick",
    "faqs": [
      [
        "Is The CRI Profile Mandatory For Indian Banks?",
        "No. RBI, SEBI and IRDAI do not require it. It matters in India because global financial institutions use it for their own assessments and for third-party oversight, so Indian GCCs, vendors and overseas branches are frequently asked to evidence it."
      ],
      [
        "How Does The CRI Profile Relate To NIST CSF 2.0?",
        "The Profile is a sector profile of NIST CSF 2.0. It keeps the Govern, Identify, Protect, Detect, Respond and Recover functions, adds Extend for third-party and supply-chain risk, and replaces the CSF's generic outcomes with 318 financial-sector diagnostic statements mapped to regulations."
      ],
      [
        "What Replaced The FFIEC Cybersecurity Assessment Tool?",
        "The FFIEC retired its Cybersecurity Assessment Tool on 31 August 2025 and pointed institutions to other resources. The CRI Profile, which the FFIEC had recognised since 2019 as an acceptable self-assessment tool, is the option most US institutions and their partners moved to."
      ],
      [
        "What Are The Impact Tiers?",
        "Nine questions about a firm's systemic footprint place it in Tier 1, national or super-national impact, down to Tier 4, local impact. Lower-impact tiers answer fewer diagnostic statements, so a community institution or a fintech is not assessed like a global bank."
      ],
      [
        "Is The CRI Profile Free?",
        "Yes. The Profile and its mappings are free to download under a Creative Commons non-commercial, no-derivatives licence. Commercial use, such as building it into a product, requires joining CRI's affiliate or innovator programmes. Member-only extras include the maturity model and benchmarking."
      ],
      [
        "How Does XcellHost Help With The CRI Profile?",
        "We run the impact tiering, assess every in-scope diagnostic statement with evidence, and then close the gaps with managed services: SOC monitoring for Detect, incident response for Respond, DR for Recover and third-party risk monitoring for Extend, reported in the format your parent or customer expects."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Cyber Risk Institute (CRI), a financial-sector not-for-profit"
      ],
      [
        "Version",
        "CRI Profile v2.2"
      ],
      [
        "Released",
        "April 2026 (v2.0 base: February 2024)"
      ],
      [
        "Applies To",
        "Banks, insurers, asset managers, FMIs and their third parties"
      ],
      [
        "Obligation",
        "Voluntary; recognised by US regulators as a self-assessment tool"
      ],
      [
        "Assurance",
        "Self-assessment; independent assessment often requested by partners"
      ]
    ],
    "intro": "Explore seven functions scored by diagnostic statement. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator requires the CRI Profile. Its relevance in India comes from the global financial institutions that use it and from the structure it shares with NIST CSF 2.0, which SEBI's CSCRF also follows. That makes it a useful bridge between Indian obligations and what overseas financial customers expect."
  },
  "secure-controls-framework": {
    "name": "Secure Controls Framework",
    "tagline": "A free metaframework of over 1,500 security and privacy controls in 34 domains, mapped to more than 200 laws and standards including India's DPDP Act. XcellHost uses the SCF to build one control library that answers ISO 27001, SOC 2, PCI DSS, RBI and DPDP evidence requests together.",
    "overview": "The Secure Controls Framework is a free, Creative Commons licensed catalogue of over 1,500 cybersecurity and data privacy controls organised into 34 domains. Its value is the mapping: every control is linked to the laws, regulations and standards it satisfies, more than 200 of them, so an organisation can implement a control once and evidence it for ISO 27001, SOC 2, PCI DSS, GDPR and India's DPDP Act together. A volunteer council updates it quarterly.",
    "highlight": "One Control Set, Every Obligation",
    "faqs": [
      [
        "Is The Secure Controls Framework Really Free?",
        "Yes. The SCF catalogue, its mappings and the SCR-CMM maturity model are published under a Creative Commons licence and can be downloaded without registration. Paid elements exist around it, such as training, individual certifications and third-party conformity assessments, but the framework itself has no licence fee."
      ],
      [
        "How Is The SCF Different From ISO 27001 Or NIST CSF?",
        "ISO 27001 and NIST CSF each describe one way of organising security. The SCF is a metaframework: a superset of controls mapped to those and over 200 other sources. You still certify to ISO 27001 or report against NIST CSF, but the SCF lets the same controls and evidence serve all of them."
      ],
      [
        "Does The SCF Cover Indian Regulations?",
        "It maps India's Digital Personal Data Protection Act, added in the 2025.1 release. RBI, SEBI, IRDAI and CERT-In requirements are not published mappings, but they can be loaded as custom obligations and linked to SCF controls, which is how XcellHost handles them for Indian clients."
      ],
      [
        "What Is The SCR-CMM?",
        "The Secure, Compliant and Resilient Capability Maturity Model is the SCF's six-level maturity scale: 0 Not Performed, 1 Performed Informally, 2 Planned and Tracked, 3 Well Defined, 4 Quantitatively Controlled and 5 Continuously Improving. It gives control-level criteria so maturity can be scored consistently across domains."
      ],
      [
        "Can An Organisation Be Certified To The SCF?",
        "Through the SCR Conformity Assessment Program, an organisation can undergo a third-party assessment by an accredited assessment organisation and receive a report on conformity. XcellHost prepares you for that assessment and supplies the evidence; the assessment itself is performed by the accredited body."
      ],
      [
        "How Does XcellHost Use The SCF?",
        "We use it as the backbone of our managed GRC service. Your obligations are loaded, a tailored control set is generated, each control is tied to an owner and a service such as SOC monitoring or patching, and evidence is collected once and reused across ISO 27001, SOC 2, PCI DSS and DPDP audits."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Secure Controls Framework Council, LLC (volunteer-driven)"
      ],
      [
        "Version",
        "SCF 2026.2"
      ],
      [
        "Released",
        "July 2026 (quarterly releases)"
      ],
      [
        "Applies To",
        "Any organisation managing several security or privacy obligations"
      ],
      [
        "Obligation",
        "Voluntary; a tool for meeting other mandatory requirements"
      ],
      [
        "Assurance",
        "Self-assessment, or third-party assessment under the SCR CAP"
      ]
    ],
    "intro": "Explore one control library mapped to many obligations. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The SCF is not required by any Indian regulator, but it is one of the few free control catalogues that already maps India's DPDP Act alongside the global standards Indian exporters must meet. That makes it a practical backbone for a single compliance programme rather than parallel ones."
  },
  "sans-security-controls": {
    "name": "SANS Security Controls",
    "tagline": "The control set that began life as the SANS Top 20 is maintained today by CIS as the CIS Critical Security Controls, while SANS supplies the implementation side: training, audit methods and free policy templates. XcellHost turns those controls into running services for Indian organisations.",
    "overview": "SANS Security Controls is the name many Indian practitioners still use for the prioritised control set that started in 2008 as the SANS Top 20 Critical Security Controls. Since 2015 the controls themselves are owned and updated by the Center for Internet Security as the CIS Critical Security Controls, now v8.1 with 18 Controls and 153 Safeguards. SANS remains the leading source of training, audit methods and free policy templates for implementing them.",
    "highlight": "The Top 20 Lineage, Made Operational",
    "faqs": [
      [
        "Are The SANS Top 20 And The CIS Controls The Same Thing?",
        "Yes, in lineage. The controls were published from 2008 as the SANS Critical Security Controls, commonly the SANS Top 20. The Center for Internet Security took ownership in 2015 with version 6, and version 8 in 2021 consolidated them to 18 Controls. The current release is v8.1 from June 2024."
      ],
      [
        "Does SANS Still Publish Its Own Security Controls?",
        "No separate control set. SANS now supports the CIS Controls with training such as SEC566, the GIAC GCCC certification, posters, whitepapers and a free library of security policy templates maintained with the Cybersecurity Risk Foundation. The control set itself is published by CIS."
      ],
      [
        "Are SANS Or CIS Controls Mandatory In India?",
        "No. They are voluntary. But CERT-In's guidance, RBI and SEBI cyber requirements and the DPDP Act's reasonable security safeguards describe outcomes that the controls deliver in practice, which is why Indian auditors and customers often use them as a checklist."
      ],
      [
        "What Is An Implementation Group?",
        "Implementation Groups prioritise the 153 Safeguards by organisation profile. IG1, with 56 Safeguards, is essential cyber hygiene for every organisation. IG2 adds Safeguards for teams with dedicated IT and security staff, and IG3 completes the set for organisations facing targeted attacks or handling highly sensitive data."
      ],
      [
        "Can We Get Certified Against The Controls?",
        "There is no organisational certificate for the CIS Controls. Organisations self-assess or commission an independent assessment, and SANS and GIAC certify individual practitioners. For a formal certificate, most Indian organisations pair the controls with ISO/IEC 27001 and reuse the same evidence."
      ],
      [
        "How Does XcellHost Help With SANS And CIS Controls?",
        "We assess your estate Safeguard by Safeguard, adapt SANS policy templates into an approved policy set, and then run the controls as services: patching, EDR, email security, backup, 24×7 SOC monitoring and awareness training, with coverage reported by Control and Implementation Group."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Originally SANS Institute; control set now stewarded by CIS"
      ],
      [
        "Version",
        "CIS Critical Security Controls v8.1"
      ],
      [
        "Released",
        "June 2024 (v8.1); lineage began 2008"
      ],
      [
        "Applies To",
        "Any organisation; IG1 aimed at small and resource-limited teams"
      ],
      [
        "Obligation",
        "Voluntary; referenced in customer questionnaires and audits"
      ],
      [
        "Assurance",
        "No organisational certificate; self or third-party assessment"
      ]
    ],
    "intro": "Explore implementation Groups: each tier builds on IG1. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "Neither SANS nor CIS material is mandated by an Indian regulator, but the controls are the practical layer under most Indian obligations. CERT-In's guidance, RBI and SEBI cyber requirements and DPDP Act safeguards all describe outcomes that the 18 Controls deliver in concrete terms."
  },
  "cobit-2019": {
    "name": "COBIT 2019",
    "tagline": "ISACA's framework for governing and managing enterprise information and technology, with 40 objectives that tie IT decisions to business goals. XcellHost designs your governance system, assesses process capability and runs the security, risk and assurance objectives as managed services with RBI, SEBI and CERT-In expectations built in.",
    "overview": "COBIT 2019 is ISACA's framework for the governance and management of enterprise information and technology. It defines 40 governance and management objectives across five domains, seven components that make a governance system work, eleven design factors for tailoring it to your enterprise, and a 0–5 capability scale for measuring processes. It is the reference most IT auditors in India use when they assess IT governance.",
    "highlight": "Govern IT The Way The Board Expects",
    "faqs": [
      [
        "Is COBIT 2019 Mandatory In India?",
        "No. COBIT is a voluntary framework. However, RBI, SEBI and IRDAI require board-level IT governance, IS audits and technology risk oversight, and Indian IS auditors commonly use COBIT objectives as the benchmark when they assess whether those requirements are met."
      ],
      [
        "What Changed From COBIT 5 To COBIT 2019?",
        "COBIT 2019 grew from 37 to 40 objectives, adding managed data, managed projects and managed assurance. It introduced eleven design factors, focus areas, a sixth governance principle and a CMMI-based 0–5 capability scheme. ISACA designed it as an open framework that grows through focus-area guidance rather than waiting for a new edition."
      ],
      [
        "Can A Company Be Certified To COBIT?",
        "There is no organisational COBIT certificate. ISACA certifies individuals through COBIT 2019 Foundation and Design and Implementation courses. Organisations demonstrate adoption through capability assessments and audits, often alongside an ISO/IEC 27001 certificate for information security."
      ],
      [
        "How Does COBIT Relate To ISO 27001 And NIST CSF?",
        "COBIT is the governance layer. ISO/IEC 27001 and NIST CSF describe how to run information security; COBIT describes how the board directs, funds and monitors it. ISACA publishes mappings, so an ISMS or CSF programme can serve as the evidence behind COBIT's security objectives."
      ],
      [
        "What Are COBIT Design Factors?",
        "Eleven inputs that tailor a governance system: enterprise strategy, enterprise goals, risk profile, I&T-related issues, threat landscape, compliance requirements, role of IT, sourcing model, implementation methods, technology adoption strategy and enterprise size. Together they decide which objectives matter most and how capable each process needs to be."
      ],
      [
        "How Does XcellHost Help With COBIT 2019?",
        "We run the design-factor workshop, assess process capability, and then operate the security, continuity and assurance objectives as managed services: 24×7 SOC, backup and DR, vulnerability management and GRC tooling, all reported in COBIT terms your IT strategy committee and auditors recognise."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISACA"
      ],
      [
        "Version",
        "COBIT 2019"
      ],
      [
        "Released",
        "November 2018"
      ],
      [
        "Applies To",
        "Any enterprise that governs information and technology"
      ],
      [
        "Obligation",
        "Voluntary; widely used by IT audit, GRC and board committees"
      ],
      [
        "Assurance",
        "No organisational certificate; individual ISACA certifications"
      ]
    ],
    "intro": "Explore five domains: EDM governs the APO-to-MEA cycle. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates COBIT by name. What RBI, SEBI and IRDAI do require is board-level IT governance, IT strategy and steering committees, IS audit and technology risk oversight, and COBIT is the most complete model for building and evidencing exactly those things."
  },
  "microsoft-zero-trust": {
    "name": "Microsoft Zero Trust",
    "tagline": "Three principles and seven technology pillars that turn Zero Trust from a slogan into a deployment plan across Entra ID, Intune, Defender and Sentinel. XcellHost designs, rolls out and operates the model for Indian organisations on Microsoft 365 and Azure, with regulatory evidence built in.",
    "overview": "Microsoft Zero Trust is Microsoft's framework for security without an implicit trusted network. It rests on three principles, verify explicitly, use least-privilege access and assume breach, applied across seven technology pillars: identities, endpoints, data, apps, infrastructure, network and security operations. Microsoft pairs the model with an adoption framework and product guidance for Entra ID, Intune, Defender, Purview and Sentinel so organisations can deploy it in stages.",
    "highlight": "Every Request Verified, Nothing Trusted By Default",
    "faqs": [
      [
        "What Are The Three Principles Of Microsoft Zero Trust?",
        "Verify explicitly: authenticate and authorise every request using all available signals. Use least-privilege access: give users and workloads only what they need, for as long as they need it. Assume breach: design controls as if an attacker is already inside, limit blast radius and detect quickly."
      ],
      [
        "What Are The Seven Pillars?",
        "Identities, endpoints, data, apps, infrastructure and network, plus security operations, which Microsoft describes as visibility, automation and orchestration. Each has deployment guidance tied to Microsoft products such as Entra ID, Intune, Purview, Defender and Sentinel."
      ],
      [
        "Is Microsoft Zero Trust The Same As NIST Zero Trust?",
        "They share the same ideas but differ in form. NIST SP 800-207 is a vendor-neutral architecture description. Microsoft's framework is a practical implementation guide for its own products, and Microsoft maps its guidance to the NIST and CISA models."
      ],
      [
        "Is Zero Trust Required In India?",
        "No regulator mandates Zero Trust by name. But RBI, SEBI and CERT-In requirements for MFA, least privilege, endpoint protection, logging and rapid incident reporting are the same controls, so adopting the model is a direct way to meet them."
      ],
      [
        "Do We Need Microsoft 365 E5 For Zero Trust?",
        "No. A great deal can be done with E3 and Entra ID P1: MFA, conditional access, Intune and basic labelling. E5 or add-ons bring risk-based access, PIM, Defender XDR and advanced data protection, which matter more as the programme matures."
      ],
      [
        "How Does XcellHost Help With Microsoft Zero Trust?",
        "We assess your Microsoft estate against the pillars, design and roll out identity, device, data and network controls in phases, and operate Sentinel and Defender XDR from our 24×7 SOC in Mumbai, reporting maturity and Indian regulatory coverage to your board."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Microsoft"
      ],
      [
        "Version",
        "Zero Trust Guidance Center and adoption framework, living guidance"
      ],
      [
        "Released",
        "Guidance last updated May 2026"
      ],
      [
        "Applies To",
        "Organisations using Microsoft 365, Azure and Entra ID, any size"
      ],
      [
        "Obligation",
        "Voluntary — vendor framework, not a regulation"
      ],
      [
        "Assurance",
        "No certificate; Secure Score and Zero Trust assessment tooling"
      ]
    ],
    "intro": "Explore seven technology pillars around the principles. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates Microsoft's framework by name, but the controls it prescribes are exactly the ones Indian regulators keep asking for. For organisations already on Microsoft 365, it is the fastest route to evidence those expectations without a parallel toolset."
  },
  "dod-zero-trust-strategy": {
    "name": "DoD Zero Trust Strategy",
    "tagline": "The US Department of Defense's plan to reach a defined Target Level of Zero Trust across seven pillars, 45 capabilities and 152 activities by the end of FY2027. XcellHost helps Indian defence suppliers, GCCs and enterprises map their controls to the same capabilities and evidence them.",
    "overview": "The DoD Zero Trust Strategy is the US Department of Defense's plan, signed in November 2022, to move every component to a Zero Trust security model. It defines seven pillars, 45 capabilities and 152 activities, split into a Target Level that must be reached by the end of fiscal year 2027 and an Advanced Level beyond it. An execution roadmap, reference architecture and overlays turn the strategy into measurable work.",
    "highlight": "Zero Trust With A Deadline",
    "faqs": [
      [
        "What Is The DoD Zero Trust Strategy?",
        "It is the US Department of Defense's November 2022 plan to adopt Zero Trust across all its components. It defines seven pillars, 45 capabilities and 152 activities, with a Target Level of 91 activities to be reached by the end of fiscal year 2027 and an Advanced Level of 61 more."
      ],
      [
        "Does The DoD Zero Trust Strategy Apply To Indian Companies?",
        "Not directly. It binds DoD components. Indian companies encounter it when they supply US defence primes or belong to aerospace and defence groups that have adopted it, and when contracts flow down Zero Trust expectations alongside CMMC."
      ],
      [
        "What Is The Difference Between Target Level And Advanced Level?",
        "Target Level is the minimum set of outcomes every DoD component must achieve by the end of FY2027 — 91 activities across 42 capabilities. Advanced Level adds 61 further activities and three more capabilities for the highest-risk environments and a fuller Zero Trust posture."
      ],
      [
        "What Other DoD Zero Trust Documents Matter?",
        "The Zero Trust Reference Architecture, the Capability Execution Roadmap (version 1.1, November 2024), the Zero Trust Overlays that map activities to NIST SP 800-53 controls, and separate activities for operational technology. Together they turn the strategy into assessable work."
      ],
      [
        "Is A New Version Of The Strategy Coming?",
        "The DoD Zero Trust Portfolio Management Office has said an updated strategy extending Zero Trust to operational technology, weapon systems and defence critical infrastructure is being prepared. Until it appears in the DoD CIO library — now also labelled Department of War — the 2022 strategy and its roadmap remain the reference."
      ],
      [
        "How Does XcellHost Help With DoD Zero Trust?",
        "We assess your environment against the 45 capabilities, build a sequenced roadmap to Target Level, and implement and operate the controls — identity, endpoint, network access, data protection and 24×7 monitoring — producing capability-level evidence for primes, parents and auditors."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "US DoD Chief Information Officer, Zero Trust PfMO"
      ],
      [
        "Version",
        "Strategy (2022) with Capability Execution Roadmap v1.1"
      ],
      [
        "Released",
        "November 2022 (Roadmap v1.1 November 2024)"
      ],
      [
        "Applies To",
        "DoD components and networks; suppliers by contract flow-down"
      ],
      [
        "Obligation",
        "Mandatory for DoD; Target Level by end of FY2027"
      ],
      [
        "Assurance",
        "Component plans assessed by the DoD ZT PfMO; no certificate"
      ]
    ],
    "intro": "Explore the seven DoD Zero Trust pillars. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "This is a US military strategy with no legal standing in India. Indian organisations meet it through the defence supply chain, through global parents that adopt it, or as a detailed benchmark that goes beyond what Indian regulators currently require."
  },
  "cisa-zero-trust-maturity-model": {
    "name": "CISA Zero Trust Maturity Model",
    "tagline": "A four-stage maturity scale across five pillars and three cross-cutting capabilities, written by the US cybersecurity agency to help organisations plan and track Zero Trust adoption. XcellHost assesses where you stand today, sets a target stage per pillar and runs the programme that gets you there.",
    "overview": "The CISA Zero Trust Maturity Model (ZTMM) is a roadmap from the US Cybersecurity and Infrastructure Security Agency for moving an organisation towards Zero Trust. It scores five pillars — Identity, Devices, Networks, Applications and Workloads, and Data — plus three cross-cutting capabilities on a four-stage scale: Traditional, Initial, Advanced and Optimal. Version 2.0 was published in April 2023 and builds on NIST SP 800-207.",
    "highlight": "Measure The Journey, Pillar By Pillar",
    "faqs": [
      [
        "What Is The CISA Zero Trust Maturity Model?",
        "It is a free roadmap from the US Cybersecurity and Infrastructure Security Agency that rates Zero Trust adoption across five pillars and three cross-cutting capabilities on four stages — Traditional, Initial, Advanced and Optimal — so organisations can plan, fund and track their progress."
      ],
      [
        "Does The CISA ZTMM Apply To Indian Companies?",
        "Not as an obligation. It was written for US federal civilian agencies. Indian organisations adopt it voluntarily as a planning scale, and Indian suppliers to US government customers may be asked to report maturity against it."
      ],
      [
        "What Changed In ZTMM Version 2.0?",
        "Version 2.0, released in April 2023, added the Initial stage between Traditional and Advanced, refined and added functions within the pillars, and gave clearer, more realistic descriptions of what each stage looks like, after public comment on the 2021 draft."
      ],
      [
        "Do All Five Pillars Need To Reach Optimal?",
        "No. CISA presents Optimal as the direction of travel, not a requirement. Most organisations set different targets per pillar based on risk and cost — for example Advanced for Identity and Data first, with Networks following."
      ],
      [
        "How Is The ZTMM Different From NIST SP 800-207?",
        "SP 800-207 defines what a Zero Trust architecture is: tenets, components and deployment approaches. The ZTMM measures how far an organisation has travelled towards it. CISA built the model on SP 800-207, so the two are used together."
      ],
      [
        "How Does XcellHost Help With The CISA ZTMM?",
        "We run an evidence-based assessment of every pillar and capability, agree target stages with your leadership, then deliver and operate the controls — identity, device, network access, data protection and 24×7 monitoring — and re-score your maturity on a regular cycle."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CISA, U.S. Department of Homeland Security"
      ],
      [
        "Version",
        "Version 2.0"
      ],
      [
        "Released",
        "April 2023 (draft version 1.0 September 2021)"
      ],
      [
        "Applies To",
        "US federal civilian agencies; usable by any organisation"
      ],
      [
        "Obligation",
        "Guidance for US agencies; voluntary for everyone else"
      ],
      [
        "Assurance",
        "Self-assessed stage per pillar; no certificate"
      ]
    ],
    "intro": "Explore the four ZTMM maturity stages, lowest to highest. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The model is US federal guidance with no standing in Indian law. Indian organisations use it as a planning tool because it is free, detailed and widely recognised, and because its pillars line up well with what Indian regulators already ask for."
  },
  "google-cloud-security-foundations": {
    "name": "Google Cloud Foundations",
    "tagline": "Google's enterprise foundations blueprint describes how to set up organisation structure, identity, networking, logging and guardrails on Google Cloud, and ships as deployable Terraform. XcellHost adapts it to your business, deploys it and runs the detective controls from our Mumbai SOC.",
    "overview": "Google Cloud Security Foundations, now published as the enterprise foundations blueprint, is Google's recommended design for a secure Google Cloud environment. It covers organisation and folder structure, identity through Cloud Identity and IAM, Shared VPC networking, centralised logging, organisation policy guardrails and detective controls in Security Command Center, and ships as the open-source terraform-example-foundation so the whole landing zone can be deployed as code.",
    "highlight": "A Secure Landing Zone, Deployed As Code",
    "faqs": [
      [
        "What Is The Google Cloud Security Foundations Blueprint?",
        "It is Google's recommended design for a secure Google Cloud estate, now titled the enterprise foundations blueprint. It covers identity, organisation structure, networking, logging, preventative and detective controls and a GitOps deployment method, and is implemented in the open-source terraform-example-foundation."
      ],
      [
        "Is The Blueprint The Same As The Google Cloud Architecture Framework?",
        "No. The Architecture Framework is a set of principles and recommendations across several pillars, including security. The blueprint is a concrete reference implementation of a landing zone that applies those principles, with Terraform you can deploy and adapt."
      ],
      [
        "Is It Mandatory For Indian Organisations?",
        "No. It is Google guidance. But Indian regulators expect cloud users to govern hosted workloads and keep certain data in India, and the blueprint's policy constraints, logging and separation of duties are a direct way to show that for workloads in the Mumbai and Delhi regions."
      ],
      [
        "Can We Use It On An Existing Google Cloud Organisation?",
        "Yes, with care. The Terraform expects to bootstrap an organisation, so existing projects are usually migrated into the new folder structure in phases while organisation policies are introduced in audit mode first and then enforced."
      ],
      [
        "Do We Have To Use Terraform?",
        "The published example is Terraform with Cloud Build, and that is the path Google maintains. The design decisions in the blueprint can be applied with other tooling, but you then lose the maintained modules and upgrade path."
      ],
      [
        "How Does XcellHost Help With The Google Cloud Blueprint?",
        "We run the design workshop, deploy the staged Terraform foundation adapted to your organisation and Indian residency needs, migrate workloads through the pipeline, and then monitor Security Command Center and audit logs from our 24×7 SOC in Mumbai."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Google Cloud"
      ],
      [
        "Version",
        "Enterprise foundations blueprint; terraform-example-foundation v6.0"
      ],
      [
        "Released",
        "Guide reviewed May 2025; Terraform v6.0 September 2026"
      ],
      [
        "Applies To",
        "Any organisation building an enterprise estate on Google Cloud"
      ],
      [
        "Obligation",
        "Voluntary — Google guidance, not a regulation"
      ],
      [
        "Assurance",
        "No certificate; Security Command Center findings and policy compliance"
      ]
    ],
    "intro": "Explore staged Terraform deployment of the foundation. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "Google's blueprint is voluntary guidance, but for Indian organisations it solves two practical problems at once: proving to regulators that cloud workloads are governed, and enforcing that data stays in Indian regions rather than relying on policy documents alone."
  },
  "microsoft-cloud-security-benchmark": {
    "name": "MCSB",
    "tagline": "Twelve control domains that tell you what a well-secured Azure, AWS or Google Cloud estate looks like, with Azure Policy checks built in. XcellHost turns MCSB into a working baseline: assessed, remediated and watched by our Mumbai SOC through Defender for Cloud and Sentinel.",
    "overview": "The Microsoft Cloud Security Benchmark (MCSB) is Microsoft's published set of security controls for cloud estates. It succeeded the Azure Security Benchmark and groups recommendations into twelve domains such as Network Security, Identity Management, Data Protection and Logging and Threat Detection, each mapped to Azure Policy definitions and to industry frameworks. It is the default standard Microsoft Defender for Cloud uses to score Azure, AWS and GCP resources.",
    "highlight": "The Yardstick Defender For Cloud Scores You Against",
    "faqs": [
      [
        "What Is The Microsoft Cloud Security Benchmark?",
        "MCSB is Microsoft's set of recommended security controls for cloud estates, organised into twelve domains from Network Security to Governance and Strategy. It replaced the Azure Security Benchmark and is the default standard Microsoft Defender for Cloud uses to assess Azure, AWS and GCP resources."
      ],
      [
        "What Is The Difference Between MCSB V1 And V2?",
        "v1 is the generally available benchmark and the default in Defender for Cloud. v2, in preview, adds a new Artificial Intelligence Security domain, more risk-based guidance and a larger set of Azure Policy mappings. Check Microsoft Learn for the current status before switching."
      ],
      [
        "Is MCSB Mandatory In India?",
        "No. It is Microsoft guidance, not law. But it is a practical way to evidence cloud controls that RBI, SEBI, IRDAI and CERT-In expect, and Azure's Indian regions are MeitY empanelled, so MCSB fits naturally into government and BFSI cloud programmes."
      ],
      [
        "Does MCSB Cover AWS And Google Cloud?",
        "Yes. Microsoft publishes AWS and GCP implementation guidance for MCSB controls, and once those accounts are connected to Defender for Cloud they are assessed against the same benchmark and appear in the same compliance dashboard."
      ],
      [
        "How Does MCSB Relate To CIS, NIST And PCI DSS?",
        "Microsoft maps each MCSB control to CIS Controls, NIST SP 800-53 and PCI DSS requirements. Fixing an MCSB recommendation therefore produces evidence you can reuse in ISO 27001, PCI and regulatory audits rather than starting again."
      ],
      [
        "How Does XcellHost Help With MCSB?",
        "We assess your estate against MCSB, remediate domain by domain starting with identity and logging, enforce controls through Azure Policy, and run Defender for Cloud and Sentinel from our 24×7 SOC in Mumbai so the score stays high after the project ends."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Microsoft"
      ],
      [
        "Version",
        "MCSB v1 (default); v2 in preview with an AI Security domain"
      ],
      [
        "Released",
        "v1 GA March 2023; v2 preview from 2025"
      ],
      [
        "Applies To",
        "Azure tenants, plus AWS and GCP connected to Defender for Cloud"
      ],
      [
        "Obligation",
        "Voluntary — Microsoft guidance, not a regulation"
      ],
      [
        "Assurance",
        "Secure score and compliance dashboard in Defender; no certificate"
      ]
    ],
    "intro": "Explore the twelve MCSB v1 control domains. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "MCSB is not mandated by any Indian regulator, but it is the quickest route to a demonstrable cloud control baseline for Indian organisations on Azure. Its domains line up with the questions RBI, SEBI, IRDAI and CERT-In actually ask about hosted systems."
  },
  "aws-well-architected-security-pillar": {
    "name": "AWS Security Pillar",
    "tagline": "AWS's own description of what a secure workload looks like: seven design principles and seven best-practice areas, reviewed through eleven questions. XcellHost runs Well-Architected security reviews on your AWS accounts, fixes what they find and keeps the posture monitored from Mumbai.",
    "overview": "The AWS Well-Architected Security Pillar is the security part of the AWS Well-Architected Framework, AWS's published guidance for designing and operating cloud workloads. It sets out seven design principles and seven best-practice areas, from security foundations and identity to incident response and application security, and turns them into eleven review questions you answer in the AWS Well-Architected Tool to find and prioritise risks.",
    "highlight": "Build On AWS Without Leaving Doors Open",
    "faqs": [
      [
        "What Is The AWS Well-Architected Security Pillar?",
        "It is the security section of the AWS Well-Architected Framework. It describes seven design principles and seven best-practice areas for AWS workloads, and provides the eleven security questions used in the AWS Well-Architected Tool to review a workload and surface high-risk issues."
      ],
      [
        "Is A Well-Architected Review Mandatory In India?",
        "No. It is AWS guidance, not a regulation. However, RBI, SEBI and IRDAI expect regulated entities to assess cloud risk, and a documented review is a sensible way to evidence that for workloads hosted in the AWS Mumbai or Hyderabad regions."
      ],
      [
        "Does A Review Give Me A Certificate?",
        "No. The Well-Architected Tool produces a report of risks and improvement plans, not a certificate. If you need formal assurance, pair the review with ISO/IEC 27001 and 27017 certification or a SOC 2 report from an accredited body."
      ],
      [
        "What Are The Seven Design Principles?",
        "Implement a strong identity foundation, maintain traceability, apply security at all layers, automate security best practices, protect data in transit and at rest, keep people away from data, and prepare for security events."
      ],
      [
        "How Long Does A Security Review Take?",
        "For a single workload a verified review usually takes one to two weeks, including evidence checks in the console. Remediation of high-risk findings typically follows over one to two months, depending on how much automation is already in place."
      ],
      [
        "How Does XcellHost Help With The AWS Security Pillar?",
        "We run the review with you, verify answers against your accounts, fix the high-risk findings, and then keep the environment monitored through cloud posture management and our 24×7 SOC in Mumbai, reporting progress against the eleven questions."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Amazon Web Services (AWS)"
      ],
      [
        "Version",
        "Security Pillar whitepaper, current online edition"
      ],
      [
        "Released",
        "Last major update November 2024"
      ],
      [
        "Applies To",
        "Any workload running on AWS, any sector"
      ],
      [
        "Obligation",
        "Voluntary — AWS guidance, not a regulation"
      ],
      [
        "Assurance",
        "Self-review in the AWS Well-Architected Tool; no certificate"
      ]
    ],
    "intro": "Explore the seven best-practice areas of the pillar. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "AWS guidance is voluntary everywhere, including India. But Indian regulators now expect cloud users to show how they govern hosted workloads, and the Security Pillar is the most practical way to produce that evidence on AWS without inventing a framework of your own."
  },
  "cis-cloud-benchmarks": {
    "name": "CIS Cloud Benchmarks",
    "tagline": "CIS Benchmarks are free, consensus-developed configuration guides for AWS, Azure, Google Cloud, Oracle Cloud, Alibaba Cloud, IBM Cloud and managed Kubernetes, each with Level 1 and Level 2 profiles. XcellHost applies them, scans for drift and reports your score to auditors and regulators.",
    "overview": "CIS Cloud Benchmarks are the Center for Internet Security's secure configuration guides for cloud platforms: AWS, Microsoft Azure, Google Cloud, Oracle Cloud, Alibaba Cloud, IBM Cloud and DigitalOcean, plus Kubernetes services such as EKS, AKS, GKE and OKE. Each recommendation states a setting, why it matters, how to check it and how to fix it, grouped into a Level 1 profile for essential hardening and Level 2 for defence in depth.",
    "highlight": "Secure Configuration, Setting By Setting",
    "faqs": [
      [
        "What Is The Difference Between Level 1 And Level 2?",
        "Level 1 recommendations are the essential settings that can be applied promptly with little effect on performance or usability. Level 2 adds defence-in-depth settings for high-security environments that may affect functionality if applied without care. A STIG profile exists for some benchmarks for US defence alignment."
      ],
      [
        "Are CIS Cloud Benchmarks Mandatory In India?",
        "No. They are voluntary, but secure configuration is expected by RBI, SEBI and CERT-In, and the benchmarks are the reference most Indian auditors use to test it. Applying them is the practical way to evidence hardening of cloud accounts and Kubernetes clusters."
      ],
      [
        "Are The Benchmarks Free?",
        "Yes. Every CIS Benchmark is free to download as a PDF for non-commercial use. Machine-readable formats, the CIS-CAT Pro assessment tool and CIS Hardened Images on cloud marketplaces are commercial offerings; many cloud posture tools also include the benchmark checks."
      ],
      [
        "Which Version Of A Benchmark Should We Use?",
        "Always the current release for your platform. Benchmarks are revised as cloud services change, so check the CIS site before an audit and record which version you assessed against, since auditors will ask."
      ],
      [
        "Does The Cloud Provider Apply The Benchmark For Us?",
        "No. Under shared responsibility the provider secures the platform; the benchmark settings concern your accounts, identities, logging, networks and workloads, which are yours to configure. Providers offer tooling that checks against the benchmarks, but the remediation is the customer's job."
      ],
      [
        "How Does XcellHost Help With CIS Cloud Benchmarks?",
        "We baseline your AWS, Azure, Google Cloud and Kubernetes estate against the relevant benchmarks, remediate failures, codify the settings into landing zones and pipelines, and monitor drift continuously from our 24×7 SOC with reports you can hand to RBI, SEBI or ISO 27001 auditors."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Center for Internet Security (CIS)"
      ],
      [
        "Version",
        "Each benchmark is versioned separately per platform"
      ],
      [
        "Released",
        "Rolling — benchmarks are revised as cloud platforms change"
      ],
      [
        "Applies To",
        "Any organisation on public cloud or managed Kubernetes"
      ],
      [
        "Obligation",
        "Voluntary — commonly cited as the hardening baseline by auditors"
      ],
      [
        "Assurance",
        "No certificate; conformance scored with CIS-CAT or cloud posture tools"
      ]
    ],
    "intro": "Explore cloud platforms with their own CIS Benchmark. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates CIS Benchmarks by name, but secure configuration is a stated expectation across Indian cyber rules, and the benchmarks are the reference most auditors reach for when they test it on cloud platforms."
  },
  "iso-iec-27701": {
    "name": "ISO/IEC 27701",
    "tagline": "The international standard for a Privacy Information Management System (PIMS), certifiable on its own since the October 2025 edition. XcellHost helps Indian controllers and processors build, operate and evidence a PIMS that answers the DPDP Act and global customer due diligence.",
    "overview": "ISO/IEC 27701 is the international standard for a Privacy Information Management System (PIMS): the policies, roles, risk assessment and controls an organisation uses to manage personally identifiable information responsibly. The second edition, ISO/IEC 27701:2025, is a standalone management-system standard built on the privacy principles of ISO/IEC 29100, with controls for PII controllers and PII processors and mappings to the GDPR. Unlike the 2019 edition, it can be certified without an ISO/IEC 27001 certificate.",
    "highlight": "A Certifiable Privacy Management System",
    "faqs": [
      [
        "Is ISO/IEC 27701 Mandatory In India?",
        "No. It is a voluntary standard. It is, however, a recognised way to show that the obligations of the DPDP Act and the DPDP Rules 2025 — notices, consent, security safeguards, breach reporting and processor contracts — are managed as a system, and global customers increasingly ask Indian suppliers for it."
      ],
      [
        "What Changed In ISO/IEC 27701:2025?",
        "The second edition, published on 14 October 2025, is a standalone management-system standard. It follows the harmonised clause structure, consolidates controller and processor controls into Annex A with guidance in Annex B, keeps mappings to ISO/IEC 29100, the GDPR and ISO/IEC 27018, and adds a correspondence table to the 2019 edition."
      ],
      [
        "Do I Still Need ISO/IEC 27001 To Get Certified To ISO/IEC 27701?",
        "Not any more. The 2019 edition was an extension of ISO/IEC 27001 and could only be certified alongside it. The 2025 edition can be certified on its own, although organisations that already run an ISMS will find the shared clause structure makes an integrated audit simpler and cheaper."
      ],
      [
        "How Do PII Controller And PII Processor Map To The DPDP Act?",
        "The standard's PII controller corresponds to the Act's Data Fiduciary, which decides the purpose and means of processing, and the PII processor to the Data Processor, which processes on the fiduciary's behalf. Many Indian IT and SaaS companies are both, for different activities, and the PIMS scope must say which."
      ],
      [
        "What Is The Deadline To Move From The 2019 To The 2025 Edition?",
        "Accreditation bodies have set a three-year transition. UKAS, for example, requires certification bodies to have transitioned all certified clients by 31 October 2028. Confirm the exact date and audit arrangements with your own certification body, since each publishes its own schedule."
      ],
      [
        "How Does XcellHost Help With ISO/IEC 27701?",
        "We scope the PIMS, run the privacy risk assessment, write the policies and procedures, deploy the technical controls, train your people and prepare the evidence for the certification audit. We also handle transitions from the 2019 edition. XcellHost works alongside the accredited certification body and does not issue certificates."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO and IEC (joint committee JTC 1/SC 27)"
      ],
      [
        "Version",
        "ISO/IEC 27701:2025 (second edition)"
      ],
      [
        "Released",
        "14 October 2025 — replaces the 2019 edition"
      ],
      [
        "Applies To",
        "PII controllers and PII processors of any type or size"
      ],
      [
        "Obligation",
        "Voluntary — increasingly asked for in privacy due diligence"
      ],
      [
        "Assurance",
        "Certificate from an accredited body; standalone since 2025"
      ]
    ],
    "intro": "Explore the management-system clauses 4 to 10 of the PIMS. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian law requires ISO/IEC 27701, but it is the most direct way to show that DPDP obligations are managed systematically. Its controller and processor roles line up with the Act's Data Fiduciary and Data Processor, and its records are the evidence a Data Protection Board enquiry or customer audit will ask for."
  },
  "csa-star": {
    "name": "CSA STAR",
    "tagline": "The Security, Trust, Assurance and Risk programme lets cloud providers publish their security posture in a public registry, from a self-assessment to an audited certification built on ISO/IEC 27001 or SOC 2. XcellHost prepares your controls, evidence and submission so the listing survives scrutiny.",
    "overview": "CSA STAR (Security, Trust, Assurance and Risk) is the Cloud Security Alliance's assurance programme and public registry for cloud providers. Level 1 is a published self-assessment against the Cloud Controls Matrix using the CAIQ questionnaire. Level 2 is a third-party audit: STAR Certification extends an ISO/IEC 27001 audit with CCM controls, and STAR Attestation extends a SOC 2 report. STAR for AI applies the same model to AI services through the AI Controls Matrix.",
    "highlight": "Public Proof That Your Cloud Is Secure",
    "faqs": [
      [
        "What Are The STAR Levels?",
        "Level 1 is a self-assessment: the provider publishes its CAIQ answers, optionally validated through the Valid-AI-ted check. Level 2 is a third-party audit: STAR Certification based on ISO/IEC 27001, STAR Attestation based on SOC 2, or C-STAR for Greater China. STAR for AI follows the same two-level pattern."
      ],
      [
        "Is CSA STAR Recognised In India?",
        "It is voluntary and no Indian regulator mandates it. MeitY empanelment of cloud providers uses a separate STQC audit. STAR is useful in India as evidence for RBI and SEBI provider due diligence and as a credential for Indian providers selling to global customers."
      ],
      [
        "How Long Does A STAR Listing Stay Valid?",
        "Level 1 self-assessments are refreshed annually. STAR Certification follows ISO/IEC 27001 practice and expires after three years unless renewed, with surveillance in between. STAR Attestation follows SOC 2 practice and expires after one year unless renewed."
      ],
      [
        "Do We Need ISO 27001 Before STAR Certification?",
        "Yes. STAR Certification is an ISO/IEC 27001 audit extended with CCM controls, so you either hold the certificate or obtain it in the same engagement. Providers with a SOC 2 report instead can take the STAR Attestation route."
      ],
      [
        "What Is STAR For AI?",
        "An extension of the programme for AI services, built on CSA's AI Controls Matrix, the AI-CAIQ questionnaire and ISO/IEC 42001. Level 1 is a self-assessment; Level 2, available since November 2025, combines a Valid-AI-ted AI-CAIQ with an ISO/IEC 42001 certification."
      ],
      [
        "How Does XcellHost Help With STAR?",
        "We assess your services against the CCM, draft the CAIQ, extend your ISO 27001 ISMS or SOC 2 controls with CCM requirements and get you audit-ready. The audit itself is performed by a CSA-approved certification body or CPA firm; XcellHost works alongside them, not in their place."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Cloud Security Alliance (CSA)"
      ],
      [
        "Version",
        "Built on CCM v4.1 and CAIQ v4.1; AICM for STAR for AI"
      ],
      [
        "Released",
        "Registry accepts CCM v4.1 from March 2026"
      ],
      [
        "Applies To",
        "Cloud providers of any size; AI providers via STAR for AI"
      ],
      [
        "Obligation",
        "Voluntary — often requested by enterprise and government cloud buyers"
      ],
      [
        "Assurance",
        "Self-assessment (L1) or ISO 27001 / SOC 2-based audit (L2)"
      ]
    ],
    "intro": "Explore assurance levels of the STAR Registry. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator requires a STAR listing, and MeitY cloud empanelment runs on its own STQC audit. STAR matters in India because regulated customers must evidence provider due diligence, and because Indian providers selling overseas are judged against the registry."
  },
  "iso-iec-27018": {
    "name": "ISO/IEC 27018",
    "tagline": "The code of practice for public cloud providers that process personally identifiable information on a customer's behalf. XcellHost helps you implement its controls, write them into processor contracts and evidence them alongside ISO/IEC 27001 and the DPDP Act.",
    "overview": "ISO/IEC 27018 is an international code of practice for protecting personally identifiable information (PII) in public cloud services where the provider acts as a PII processor. It adds PII-specific guidance to the controls of ISO/IEC 27002 and an extended set of processor controls based on the privacy principles of ISO/IEC 29100. The current third edition, ISO/IEC 27018:2025, is aligned with ISO/IEC 27002:2022.",
    "highlight": "Protecting Personal Data In Public Cloud",
    "faqs": [
      [
        "Is ISO/IEC 27018 Mandatory In India?",
        "No. It is a voluntary code of practice. It is, however, named in MeitY's cloud service provider empanelment alongside ISO/IEC 27001, 27017 and 20000-1, and enterprise and government buyers often ask for it. Its controls also support the processor arrangements that the DPDP Act expects Data Fiduciaries to put in place."
      ],
      [
        "What Changed In ISO/IEC 27018:2025?",
        "The third edition, published in August 2025, replaces the 2019 edition. The main change is alignment with the structure and terminology of ISO/IEC 27002:2022, so the guidance now follows the organizational, people, physical and technological control themes. Organisations aligned to the 2019 text should remap their controls to the new structure."
      ],
      [
        "Who Needs ISO/IEC 27018?",
        "Public cloud service providers that process personally identifiable information for their customers — infrastructure, platform and SaaS providers alike. It is also useful to organisations buying cloud services, as a benchmark when selecting a provider and as a checklist of what to require in a data-processing agreement."
      ],
      [
        "Can A Company Be Certified To ISO/IEC 27018?",
        "It is a code of practice, not a management-system standard, so it is not certified on its own. Certification bodies assess its controls as an extension of an ISO/IEC 27001 audit and reference the standard in what they issue. Where a certifiable privacy management system is wanted, ISO/IEC 27701 is the route."
      ],
      [
        "Does ISO/IEC 27018 Make A Provider DPDP Or GDPR Compliant?",
        "No. It is a set of good-practice controls, not a legal compliance scheme. It does help: controls on acting only on instructions, sub-processor transparency, breach notification and data return support the contractual and security duties that the DPDP Act and GDPR place on processors and on those who engage them."
      ],
      [
        "How Does XcellHost Help With ISO/IEC 27018?",
        "We assess your cloud services against the 2025 edition, update data-processing agreements and sub-processor disclosures, implement encryption, access and deletion controls, and monitor them from our 24×7 SOC. Evidence is organised for your ISO/IEC 27001 audit and we work alongside the accredited certification body. XcellHost does not issue certificates."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO and IEC (joint committee JTC 1/SC 27)"
      ],
      [
        "Version",
        "ISO/IEC 27018:2025 (third edition)"
      ],
      [
        "Released",
        "August 2025 — replaces the 2019 edition"
      ],
      [
        "Applies To",
        "Public cloud providers acting as PII processors"
      ],
      [
        "Obligation",
        "Voluntary — widely requested in cloud and processor contracts"
      ],
      [
        "Assurance",
        "No standalone certificate; assessed with an ISO/IEC 27001 audit"
      ]
    ],
    "intro": "Explore iSO 27002 themes with the PII control set on top. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian law mandates ISO/IEC 27018, but it lines up closely with how the DPDP Act treats Data Processors and with what government and regulated buyers expect of cloud providers. It is a practical way to show processor-side discipline to customers and auditors."
  },
  "nist-cloud-computing-security": {
    "name": "NIST cloud computing security",
    "tagline": "NIST's cloud publications define what cloud computing is, who the actors are and how to secure public cloud, access control and cloud-native systems. XcellHost uses them as the reference model for cloud risk assessments, shared responsibility design and secure cloud operations for Indian organisations.",
    "overview": "NIST cloud computing security is a family of publications from the US National Institute of Standards and Technology. SP 800-145 defines cloud computing through five essential characteristics, three service models (SaaS, PaaS, IaaS) and four deployment models. SP 500-292 gives the reference architecture with five actors. SP 800-144 sets out security and privacy guidance for public cloud, SP 800-210 covers access control, and later documents address microservices, service mesh and Zero Trust in cloud-native systems.",
    "highlight": "The Definitions Everyone Else Builds On",
    "faqs": [
      [
        "What Are The Five Essential Characteristics Of Cloud Computing?",
        "SP 800-145 lists on-demand self-service, broad network access, resource pooling, rapid elasticity and measured service. A service that lacks one of these is hosting or outsourcing rather than cloud, which affects how risk and responsibility should be assessed."
      ],
      [
        "Is NIST Cloud Guidance Mandatory In India?",
        "No. NIST publications bind US federal agencies only. In India they are widely used as the reference vocabulary: SEBI, RBI and MeitY documents describe cloud using the same service and deployment models, so NIST-based assessments map cleanly to Indian requirements."
      ],
      [
        "What Is The NIST Cloud Reference Architecture?",
        "SP 500-292 describes cloud computing through five actors, Cloud Consumer, Cloud Provider, Cloud Auditor, Cloud Broker and Cloud Carrier, and the activities each performs. It is used to clarify roles in contracts and to decide who is responsible for which security functions."
      ],
      [
        "Does NIST Publish A Cloud Control Catalogue?",
        "Not a cloud-specific one. The guidance documents point to NIST SP 800-53 for controls, which is the basis of the US FedRAMP programme. Organisations outside the US often pair NIST's cloud guidance with ISO/IEC 27017 or the CSA Cloud Controls Matrix instead."
      ],
      [
        "Which NIST Documents Cover Containers And Kubernetes?",
        "The SP 800-204 series covers microservices, service mesh, DevSecOps and supply chain security in CI/CD pipelines, and SP 800-207A applies Zero Trust to cloud-native, multi-cloud applications. Together they are the reference for securing Kubernetes-based platforms."
      ],
      [
        "How Does XcellHost Use NIST Cloud Guidance?",
        "We classify your cloud estate with NIST's models, assess it against SP 800-144's concern areas and SP 800-210's access control guidance, then implement and operate the controls through identity, managed Kubernetes, disaster recovery and 24×7 monitoring from our Mumbai SOC."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "SP 800-145, SP 500-292, SP 800-144, SP 800-146, SP 800-210 and later"
      ],
      [
        "Released",
        "SP 800-145 Sept 2011; SP 800-210 July 2020; SP 800-207A Sept 2023"
      ],
      [
        "Applies To",
        "Any cloud user or provider; binding on US federal agencies"
      ],
      [
        "Obligation",
        "Voluntary outside the US federal government"
      ],
      [
        "Assurance",
        "None directly; FedRAMP authorisations use NIST SP 800-53 controls"
      ]
    ],
    "intro": "Explore the core NIST cloud computing publications. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "NIST publications bind US federal agencies, not Indian organisations. Their influence in India is through vocabulary: regulators, MeitY and contracts describe cloud using NIST's models, so an assessment built on them translates directly into Indian compliance work."
  },
  "csa-security-guidance": {
    "name": "CSA Security Guidance v5",
    "tagline": "The Cloud Security Alliance's Security Guidance for Critical Areas of Focus in Cloud Computing is the free, vendor-neutral reference for designing and running secure cloud environments, organised into twelve domains. XcellHost uses it to architect, operate and review cloud estates for Indian organisations.",
    "overview": "CSA Security Guidance is the Cloud Security Alliance's foundational document on how to secure cloud computing. Version 5, published in July 2024, organises the subject into twelve domains covering cloud concepts, governance, risk and compliance, organisation management, identity and access, monitoring, infrastructure, workloads, data, applications, incident response and emerging technologies such as Zero Trust and AI. It is free, vendor-neutral and the body of knowledge for the CCSK certificate.",
    "highlight": "How To Think About Cloud Security",
    "faqs": [
      [
        "What Changed Between Security Guidance V4 And V5?",
        "Version 5 consolidated the fourteen domains of v4 into twelve, added Organization Management and Security Monitoring as domains, expanded workload, application security, CI/CD and DevSecOps coverage, replaced IoT and mobile content with Zero Trust and AI, and reduced the detailed legal and regulatory discussion."
      ],
      [
        "Is CSA Security Guidance Mandatory In India?",
        "No. It is a voluntary reference and no Indian regulator requires it. It is useful because SEBI, RBI and CERT-In expectations around cloud monitoring, data location, provider oversight and incident response map directly onto its domains."
      ],
      [
        "What Is The CCSK And How Does It Relate?",
        "The Certificate of Cloud Security Knowledge is CSA's vendor-neutral cloud security credential. Its exam is based on the Security Guidance together with the CCM and other CSA material, and was updated to version 5 to match the current guidance."
      ],
      [
        "Is The Guidance The Same As The Cloud Controls Matrix?",
        "No. The guidance explains how to secure cloud; the CCM lists the specific controls to implement and audit. They are designed to be used together: the guidance for architecture and understanding, the CCM for assessment and STAR submissions."
      ],
      [
        "Does It Apply To Indian Cloud Providers And Private Cloud?",
        "Yes. The guidance is vendor-neutral and covers public, private, hybrid and community deployment models, so it applies to MeitY-empanelled Indian providers and on-premises private cloud as much as to the global hyperscalers."
      ],
      [
        "How Does XcellHost Use The Security Guidance?",
        "We use the twelve domains as the structure for cloud security assessments and architecture work, then deliver the operational domains through managed services: posture management, cloud SIEM in our 24×7 SOC, DevSecOps and Zero Trust access, with Indian regulatory requirements mapped to each domain."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Cloud Security Alliance (CSA)"
      ],
      [
        "Version",
        "Security Guidance v5.0"
      ],
      [
        "Released",
        "July 2024 — replaces v4 (2017)"
      ],
      [
        "Applies To",
        "Any organisation building, buying or operating cloud services"
      ],
      [
        "Obligation",
        "Voluntary — a reference, not a requirement"
      ],
      [
        "Assurance",
        "None; knowledge is examined through the CCSK certificate"
      ]
    ],
    "intro": "Explore the twelve domains of Security Guidance v5. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The guidance has no legal standing in India and no regulator cites it. Its value is practical: the risks Indian regulators keep raising about cloud, from data location to exit strategy, are the same risks the guidance teaches organisations to design out."
  },
  "eu-ai-act": {
    "name": "EU AI Act",
    "tagline": "The world's first comprehensive AI law classifies AI systems by risk and sets obligations for providers and deployers, wherever they are based, when their AI reaches the EU. XcellHost maps your AI systems to the Act, builds the governance and evidence, and tracks the phased deadlines for you.",
    "overview": "The EU AI Act, Regulation (EU) 2024/1689, is the European Union's binding law on artificial intelligence. It bans unacceptable practices, imposes detailed obligations on high-risk AI systems, requires transparency for chatbots and synthetic content, and regulates general-purpose AI models. It applies to any organisation that places AI on the EU market or whose AI output is used in the EU, including Indian providers, and its obligations phase in between 2025 and 2028.",
    "highlight": "What Indian AI Providers Must Do",
    "faqs": [
      [
        "Does The EU AI Act Apply To Indian Companies?",
        "Yes, when their AI reaches the EU. The Act covers providers placing AI systems or general-purpose models on the EU market wherever they are established, and providers and deployers outside the EU when the system's output is used in the EU. Non-EU providers of high-risk systems must appoint an EU authorised representative."
      ],
      [
        "When Do The High-Risk Obligations Apply?",
        "After the AI Omnibus amendment that entered into force in July 2026, obligations for Annex III stand-alone high-risk systems apply from 2 December 2027 and for Annex I product-embedded AI from 2 August 2028. Prohibitions, general-purpose model duties and Article 50 transparency rules were not deferred."
      ],
      [
        "What Are The Penalties Under The EU AI Act?",
        "Up to €35 million or 7% of worldwide annual turnover, whichever is higher, for prohibited practices; up to €15 million or 3% for most other obligations; and up to €7.5 million or 1% for supplying incorrect information. SMEs pay the lower of the two amounts."
      ],
      [
        "What Changed With The Digital Omnibus On AI?",
        "Regulation (EU) 2026/1744 deferred high-risk deadlines to December 2027 and August 2028, gave pre-existing systems until December 2026 for machine-readable content marking, added two prohibitions on abusive synthetic content, extended SME relief to small mid-caps and strengthened the AI Office's role."
      ],
      [
        "Is ISO/IEC 42001 Certification Enough For The EU AI Act?",
        "No. Certification is voluntary and does not replace conformity assessment, CE marking or registration. But an ISO/IEC 42001 management system organises the risk management, data governance, documentation and monitoring the Act demands, so it is a practical foundation."
      ],
      [
        "How Does XcellHost Help With The EU AI Act?",
        "We determine your exposure and role, classify each system, build the risk management system, technical file and quality processes, test models for robustness and security, implement transparency controls and keep the evidence current in a managed GRC platform ahead of each deadline."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "European Parliament and Council of the EU"
      ],
      [
        "Version",
        "Regulation (EU) 2024/1689, amended by (EU) 2026/1744"
      ],
      [
        "Released",
        "In force 1 August 2024; AI Omnibus in force July 2026"
      ],
      [
        "Applies To",
        "Providers, deployers, importers and distributors of AI in the EU"
      ],
      [
        "Obligation",
        "Mandatory, phased from Feb 2025 to Aug 2028"
      ],
      [
        "Assurance",
        "Conformity assessment, CE marking, EU database, market surveillance"
      ]
    ],
    "intro": "Explore phased application after the 2026 AI Omnibus. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The Act is EU law, not Indian law, but it binds Indian organisations whose AI reaches Europe. India has chosen a different path — guidelines under existing law rather than a statute — so exporters must meet both, and preparation for the EU regime strengthens Indian governance too."
  },
  "microsoft-responsible-ai-standard": {
    "name": "Microsoft Responsible AI Standard",
    "tagline": "Microsoft's published internal standard turns six responsible AI principles into concrete goals, requirements and impact assessments for product teams. XcellHost uses it as a ready-made blueprint for organisations building on Azure and Microsoft 365 Copilot, and maps it to ISO/IEC 42001 and Indian expectations.",
    "overview": "The Microsoft Responsible AI Standard is the internal standard Microsoft uses to govern the AI it builds, published so others can learn from it. Version 2, released in June 2022, turns six principles — Accountability, Transparency, Fairness, Reliability and Safety, Privacy and Security, and Inclusiveness — into 17 goals, each with requirements, tools and practices, backed by a mandatory Impact Assessment. It is a vendor's playbook, not a certification.",
    "highlight": "Six Principles Made Practical",
    "faqs": [
      [
        "Is The Microsoft Responsible AI Standard A Certification?",
        "No. It is Microsoft's internal standard for its own products, published for others to learn from. There is no certificate or audit scheme behind it. Organisations that need external proof of AI governance use ISO/IEC 42001, which is certifiable."
      ],
      [
        "Does The Standard Apply To Indian Companies?",
        "Only voluntarily. It has no legal status in India. Indian organisations adopt it as a reference because its principles match MeitY's AI governance guidance and the RBI's FREE-AI themes, and because it fits the Microsoft platforms they already use."
      ],
      [
        "What Is The Current Version Of The Standard?",
        "Version 2, released in June 2022, is the publicly available edition. Microsoft's 2026 Responsible AI Transparency Report describes a re-engineered Standard that separates requirements for models, platform services and applications and for developer versus deployer roles."
      ],
      [
        "What Are The Six Microsoft Responsible AI Principles?",
        "Accountability, Transparency, Fairness, Reliability and Safety, Privacy and Security, and Inclusiveness. The Standard turns each into numbered goals — 17 in version 2 — with requirements, tools and practices that product teams must follow."
      ],
      [
        "How Does It Relate To ISO/IEC 42001 And The NIST AI RMF?",
        "It is a vendor's implementation of the same ideas. Its Impact Assessment and oversight goals cover much of ISO/IEC 42001's impact and governance requirements, and Microsoft states its programme is aligned with the NIST AI RMF, so the three can be mapped together."
      ],
      [
        "How Does XcellHost Help With The Microsoft Responsible AI Standard?",
        "We adapt the Standard into your own AI policy and Impact Assessment process, configure Microsoft 365 and Azure responsible AI controls, protect GenAI data flows, test fairness and security, and keep evidence mapped to ISO/IEC 42001 and Indian requirements."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Microsoft (Office of Responsible AI)"
      ],
      [
        "Version",
        "v2 public (June 2022); re-engineered edition reported 2026"
      ],
      [
        "Released",
        "June 2022 (v2); Transparency Report September 2026"
      ],
      [
        "Applies To",
        "Microsoft teams; freely usable as a reference by anyone"
      ],
      [
        "Obligation",
        "Voluntary outside Microsoft — no legal or regulatory status"
      ],
      [
        "Assurance",
        "No certificate; internal reviews and Impact Assessments"
      ]
    ],
    "intro": "Explore the six responsible AI principles. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The Standard has no legal standing in India and is not a certification. Its value for Indian organisations is as a proven, free template whose principles match the direction of Indian AI guidance, and which is already embedded in the Microsoft services many Indian businesses run on."
  },
  "google-saif": {
    "name": "Google SAIF",
    "tagline": "Google's Secure AI Framework sets six core elements for securing AI, a risk map of the AI development lifecycle with fifteen named risks and their controls, and a self-assessment that covers agents. XcellHost applies SAIF to assess, harden and monitor the AI your business builds or buys.",
    "overview": "Google's Secure AI Framework (SAIF) is a conceptual framework, introduced in June 2023, for securing AI systems across their lifecycle. It rests on six core elements — from expanding existing security foundations to AI, through detection, automation and harmonised controls, to adapting controls and contextualising AI risk in business processes. Google later added the SAIF Map, which charts fifteen AI risks and their controls across data, infrastructure, model, application and agent components, plus risk self-assessments.",
    "highlight": "Secure AI From Data To Agents",
    "faqs": [
      [
        "What Are The Six Core Elements Of Google SAIF?",
        "Expand strong security foundations to the AI ecosystem; extend detection and response to bring AI into the organisation's threat universe; automate defences to keep pace with new threats; harmonise platform-level controls; adapt controls to adjust mitigations with faster feedback loops; and contextualise AI system risks in surrounding business processes."
      ],
      [
        "Is Google SAIF Only For Google Cloud Customers?",
        "No. SAIF is vendor-neutral guidance; it was written from Google's own practice but applies to AI built on any platform or model. Google has shared the SAIF Risk Map, risk assessment and control descriptions with the Coalition for Secure AI (CoSAI), an industry body under OASIS Open."
      ],
      [
        "Is Google SAIF Mandatory In India?",
        "No. It is voluntary and no Indian regulator references it. Indian organisations use it because MeitY's AI governance guidelines, RBI's FREE-AI report and the DPDP Act all require AI risk to be managed without specifying controls, and SAIF provides a practical control model that engineering teams can execute."
      ],
      [
        "What Does SAIF Say About AI Agents?",
        "SAIF's agent guidance describes agent components — perception, reasoning core, orchestration and response rendering — names sensitive data disclosure and rogue actions as the headline risks, and sets three controls: user control over consequential actions, least-privilege agent permissions, and observability of every action and tool call. An Agent Risk Self-Assessment accompanies it."
      ],
      [
        "How Does SAIF Compare With MITRE ATLAS And The OWASP LLM Top 10?",
        "They work together. SAIF is the defender's framework: elements, a risk map and controls. ATLAS catalogues adversary techniques and real incidents, and the OWASP list ranks the top risks in LLM applications. A SAIF programme typically uses ATLAS for threat modelling and the OWASP list for application testing."
      ],
      [
        "How Does XcellHost Help With Google SAIF?",
        "We map your AI estate onto the SAIF Map, run the risk self-assessments, extend cloud posture, identity and detection controls to AI assets, red-team against the SAIF risks, put agent permissions and approvals in place, and report AI risk to the board in business terms mapped to Indian obligations."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Google"
      ],
      [
        "Version",
        "SAIF with Risk Map, Risk Self-Assessment and agent guidance"
      ],
      [
        "Released",
        "June 2023; SAIF Map, self-assessments and agent guidance since"
      ],
      [
        "Applies To",
        "Any organisation building, deploying or integrating AI"
      ],
      [
        "Obligation",
        "Voluntary — Google's own practice, shared with CoSAI"
      ],
      [
        "Assurance",
        "None; self-assessment via the SAIF Risk Self-Assessment"
      ]
    ],
    "intro": "Explore the six core elements of SAIF. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "SAIF is a voluntary framework with no standing in Indian law, and no regulator refers to it. It is useful in India because so much AI is built on hyperscaler platforms and foundation models, and because Indian AI guidance tells organisations to manage AI risk without prescribing how — SAIF supplies a practical how."
  },
  "csa-ai-controls-matrix": {
    "name": "CSA AICM",
    "tagline": "The Cloud Security Alliance's set of 247 control objectives across 18 domains for building, running and buying AI on the cloud, with mappings to ISO/IEC 42001, NIST AI RMF and the EU AI Act. XcellHost implements, operates and evidences AICM controls and prepares you for STAR for AI.",
    "overview": "The CSA AI Controls Matrix (AICM) is a control framework from the Cloud Security Alliance for securing AI systems, built on its Cloud Controls Matrix. Version 1.1 holds 247 control objectives across 18 security domains, 17 inherited from the CCM plus a new Model Security domain, each tagged by control type, ownership, architecture, lifecycle stage and threat category, with mappings to ISO/IEC 42001, the NIST AI RMF, BSI AIC4 and the EU AI Act.",
    "highlight": "The Control Set For Trustworthy Cloud AI",
    "faqs": [
      [
        "What Are The 18 Domains Of The CSA AICM?",
        "From the CCM: Audit & Assurance; Application & Interface Security; Business Continuity & Operational Resilience; Change Control & Configuration Management; Cryptography, Encryption & Key Management; Datacenter Security; Data Security & Privacy Lifecycle Management; Governance, Risk & Compliance; Human Resources; Identity & Access Management; Interoperability & Portability; Infrastructure & Virtualization Security; Logging & Monitoring; Security Incident Management; Supply Chain Management, Transparency & Accountability; Threat & Vulnerability Management; Universal Endpoint Management. Model Security is new."
      ],
      [
        "What Changed In AICM V1.1?",
        "Version 1.1, released in June 2026, raised the control count to 247 objectives across the same 18 domains and refreshed the mappings, which now cover ISO/IEC 42001, BSI AIC4, the EU AI Act, the NIST AI RMF and AI 600-1, and AIUC-1. The package includes the AI-CAIQ, implementation and auditing guidelines and STAR for AI Level 1 submission guidance."
      ],
      [
        "Is The CSA AICM Mandatory In India?",
        "No. It is voluntary and no Indian regulator requires it. It is relevant because RBI, SEBI and MeitY expect AI to be governed on a risk basis without prescribing controls, because the DPDP Act applies to AI data, and because overseas customers recognise CSA STAR as an assurance signal."
      ],
      [
        "What Is STAR For AI And How Do We Get Listed?",
        "STAR for AI is CSA's assurance programme built on the AICM, launched in October 2025. Level 1 means publishing a completed AI-CAIQ self-assessment on the STAR Registry. Level 2 combines an ISO/IEC 42001 certificate from an accredited body with a Valid-AI-ted scored assessment. XcellHost prepares the evidence; the certification body issues the certificate."
      ],
      [
        "How Does The AICM Relate To The CSA Cloud Controls Matrix?",
        "The AICM is built on CCM v4. Seventeen of its 18 domains are the CCM domains, re-written and extended for AI services, and Model Security is added. Organisations already using the CCM or holding CSA STAR for cloud can extend the same programme to AI rather than starting again."
      ],
      [
        "How Does XcellHost Help With The CSA AICM?",
        "We scope your role and systems, filter the matrix to the applicable controls, run the gap assessment, implement and operate the controls — cloud posture, identity, logging, model security and testing — complete the AI-CAIQ with evidence, and get you ready for STAR for AI alongside the accredited certification body for Level 2."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Cloud Security Alliance (CSA)"
      ],
      [
        "Version",
        "AICM v1.1"
      ],
      [
        "Released",
        "22 June 2026 (v1.0 released July 2025)"
      ],
      [
        "Applies To",
        "Providers and customers of AI services, especially on cloud"
      ],
      [
        "Obligation",
        "Voluntary — basis of CSA STAR for AI assurance"
      ],
      [
        "Assurance",
        "AI-CAIQ self-assessment (STAR for AI Level 1); Level 2 adds ISO 42001"
      ]
    ],
    "intro": "Explore what ships in the AICM package. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian law or regulator requires the AICM. It matters because Indian AI products overwhelmingly run on cloud platforms and third-party models, because overseas buyers recognise CSA STAR, and because Indian guidance on AI is risk-based and leaves the choice of controls to the organisation — a gap the AICM fills."
  },
  "mitre-atlas": {
    "name": "MITRE ATLAS",
    "tagline": "MITRE's public knowledge base of the tactics and techniques adversaries use against AI-enabled systems, with real case studies and mitigations, built in the style of ATT&CK. XcellHost uses ATLAS to threat-model, red-team and monitor the models and agents your business now depends on.",
    "overview": "MITRE ATLAS (Adversarial Threat Landscape for AI Systems) is a free, public knowledge base of the tactics, techniques and procedures attackers use against machine-learning models, LLM applications and AI agents. Modelled on MITRE ATT&CK, it organises 16 tactics from Reconnaissance to Impact, documents each technique with real case studies, and pairs them with mitigations, so defenders can threat-model, test and monitor AI systems in a shared vocabulary.",
    "highlight": "Know How Attackers Target Your AI",
    "faqs": [
      [
        "What Are The 16 MITRE ATLAS Tactics?",
        "Reconnaissance, Resource Development, Initial Access, AI Model Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, AI Attack Staging, Command and Control, Exfiltration and Impact. AI Model Access and AI Attack Staging are specific to AI; the rest mirror ATT&CK with AI-specific techniques beneath them."
      ],
      [
        "Is MITRE ATLAS Mandatory In India?",
        "No. It is a voluntary knowledge base. Its value in India is as the threat reference behind the risk-based AI governance that MeitY, RBI and sector regulators now expect, and as a common vocabulary with global customers who already use ATT&CK and ATLAS."
      ],
      [
        "How Often Is ATLAS Updated?",
        "ATLAS data is released on GitHub with dated versions; through 2026 new releases have landed roughly monthly, adding techniques for AI agents, new mitigations and fresh case studies. Treat counts of techniques and case studies as moving numbers and check the current release before quoting them."
      ],
      [
        "How Does ATLAS Relate To The OWASP LLM Top 10?",
        "They complement each other. The OWASP list ranks ten risk categories for LLM applications; ATLAS catalogues the specific adversary techniques and real incidents behind them. The 2026 OWASP edition maps its entries to ATLAS, so a Top 10 finding can be traced to techniques, mitigations and case studies."
      ],
      [
        "Can ATLAS Be Used For Detection Engineering?",
        "Yes. Because ATLAS shares ATT&CK's data model and ships as a STIX bundle with an ATLAS Navigator layer, SOC teams can tag detections, log sources and coverage maps with ATLAS techniques alongside conventional ones, and report AI threat coverage in the same view."
      ],
      [
        "How Does XcellHost Use MITRE ATLAS?",
        "We build ATLAS-based threat models for your AI systems, red-team the techniques that matter most, implement the mapped mitigations with your engineers, tag our 24×7 SOC detections with ATLAS and ATT&CK, and run tabletop exercises on the case studies closest to your sector."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "MITRE, with the Center for Threat-Informed Defense"
      ],
      [
        "Version",
        "ATLAS 2026.09 data release"
      ],
      [
        "Released",
        "September 2026 (data updated roughly monthly)"
      ],
      [
        "Applies To",
        "Any organisation building, buying or operating AI systems"
      ],
      [
        "Obligation",
        "Voluntary — reference model for AI threat modelling"
      ],
      [
        "Assurance",
        "None; used for threat modelling, red teaming and detection"
      ]
    ],
    "intro": "Explore how the ATLAS knowledge base fits together. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "ATLAS has no legal standing in India and no regulator names it, but Indian AI guidance is converging on risk-based governance, and ATLAS is the most complete public catalogue of what AI attacks actually look like, which makes it the natural threat reference for Indian builders and buyers."
  },
  "owasp-top-10-llm": {
    "name": "OWASP LLM Top 10",
    "tagline": "The OWASP GenAI Security Project's ranked list of the ten security risks that matter most in applications built on large language models, from prompt injection to excessive agency. XcellHost tests your LLM features against all ten, hardens the pipeline around them and keeps the evidence customers ask for.",
    "overview": "The OWASP Top 10 for LLM Applications is a free, community-written list of the ten security risks most likely to hurt applications built on large language models — chatbots, copilots, RAG systems and agents. Maintained by the OWASP GenAI Security Project, the 2026 edition ranks Prompt Injection, Sensitive Information Disclosure and Excessive Agency at the top, and gives each risk an explanation, attack scenarios and practical mitigations.",
    "highlight": "Ship GenAI Features Without Shipping New Breaches",
    "faqs": [
      [
        "What Changed In The 2026 Edition Of The OWASP LLM Top 10?",
        "The 2026 edition, published in August 2026, re-ranked the list using real-world incident data alongside community votes. Excessive Agency rose to third, Unbounded Consumption and Misinformation moved up, System Prompt Leakage was renamed Hidden Context Exposure, and Improper Output Handling fell to tenth. Mappings to NIST, MITRE ATLAS and CWE were expanded."
      ],
      [
        "Is The OWASP LLM Top 10 Mandatory In India?",
        "No. It is voluntary guidance. It matters because the DPDP Act, CERT-In directions and sector regulators such as RBI and SEBI apply to LLM applications like any other system, and because enterprise and overseas customers increasingly cite the list when assessing Indian vendors."
      ],
      [
        "How Is The LLM Top 10 Different From The Agentic Top 10?",
        "The LLM Top 10 covers risks in any application that uses a language model. The OWASP Top 10 for Agentic Applications, released in December 2025, focuses on autonomous agents that plan, use tools and act. The two are designed to be used together, and the 2026 LLM edition maps to the agentic list."
      ],
      [
        "What Is Prompt Injection And Why Is It Ranked First?",
        "Prompt injection is input that makes the model follow an attacker's instructions instead of the application's — typed directly or hidden in web pages, documents or tool results. It stays at number one because there is no complete fix: it must be managed with least privilege, output validation, guardrails and testing."
      ],
      [
        "Do We Need An LLM-Specific Penetration Test?",
        "Yes, if you have shipped or are about to ship an LLM feature. Conventional web and API tests do not cover injection through content, context extraction, retrieval permission flaws or excessive agency. A focused test exercises all ten risks against the live application and its tools."
      ],
      [
        "How Does XcellHost Help With The OWASP LLM Top 10?",
        "We inventory your LLM use, test applications against all ten risks, help engineering teams fix findings, build guardrail and output checks into the pipeline, and map results to DPDP, CERT-In and customer requirements so one body of evidence serves security reviews and regulators."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OWASP GenAI Security Project (OWASP Foundation)"
      ],
      [
        "Version",
        "2026 edition (LLM01:2026 to LLM10:2026)"
      ],
      [
        "Released",
        "3 August 2026; formally unveiled September 2026"
      ],
      [
        "Applies To",
        "Any application that calls, hosts or fine-tunes an LLM"
      ],
      [
        "Obligation",
        "Voluntary — widely used as the baseline for GenAI app security"
      ],
      [
        "Assurance",
        "No certificate; self-assessment, testing and red teaming"
      ]
    ],
    "intro": "Explore the ten risks of the 2026 edition, in rank order. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates the OWASP LLM Top 10, but India's GenAI build-out — from IndiaAI Mission start-ups to bank copilots — runs into exactly these risks, and existing obligations under the DPDP Act, CERT-In directions and sector rules apply to LLM applications just as they do to any other system."
  },
  "iso-iec-23894": {
    "name": "ISO/IEC 23894",
    "tagline": "Guidance that takes the familiar ISO 31000 principles, framework and process and shows how to apply them to AI systems, with annexes on AI-specific objectives and risk sources. XcellHost uses it to build the AI risk assessments that feed your ISO/IEC 42001 system and regulator reporting.",
    "overview": "ISO/IEC 23894:2023 is international guidance on managing the risks that come with developing, deploying or using AI. It is written to be used with ISO 31000:2018, the general risk management standard, and follows its three parts — principles, framework and process — adding AI-specific advice at each step. Three annexes list common AI objectives, typical AI risk sources and how the process maps to the AI system life cycle.",
    "highlight": "AI Risk, Managed The ISO 31000 Way",
    "faqs": [
      [
        "Is ISO/IEC 23894 Mandatory In India?",
        "No. It is voluntary guidance with no certificate attached. Indian regulators and MeitY's AI governance guidelines expect risk-based AI governance, and 23894 is a recognised way to perform and document that risk management."
      ],
      [
        "Can We Get Certified To ISO/IEC 23894?",
        "No. It is a guidance document, not a requirements standard. Organisations that want a certificate implement ISO/IEC 42001, which requires AI risk assessment and treatment and points to 23894 for how to do it."
      ],
      [
        "How Is ISO/IEC 23894 Related To ISO 31000?",
        "It is designed to be used with ISO 31000:2018 and mirrors its three parts: principles, framework and process. At each point it adds AI-specific guidance, and its annexes list AI objectives, risk sources and life-cycle mappings that ISO 31000 does not contain."
      ],
      [
        "What AI Risk Sources Does The Guidance Cover?",
        "Annex B covers sources such as the level of automation, lack of transparency and explainability, complexity of the operating environment, machine-learning behaviour and data quality, hardware issues, life-cycle issues and technology readiness."
      ],
      [
        "How Does ISO/IEC 23894 Compare With The NIST AI RMF?",
        "Both are voluntary and risk-based. The AI RMF organises work into Govern, Map, Measure and Manage; 23894 follows the ISO 31000 process. NIST publishes a crosswalk between them, so an organisation can use either and evidence the other."
      ],
      [
        "How Does XcellHost Help With ISO/IEC 23894?",
        "We extend your risk framework to AI, run 23894-based assessments on priority systems, test models and prompts to measure risk, implement treatment and monitoring, and keep the register and reports current in our managed GRC platform."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO and IEC (ISO/IEC JTC 1/SC 42)"
      ],
      [
        "Version",
        "ISO/IEC 23894:2023, first edition"
      ],
      [
        "Released",
        "February 2023"
      ],
      [
        "Applies To",
        "Organisations that develop, provide, deploy or use AI systems"
      ],
      [
        "Obligation",
        "Voluntary guidance"
      ],
      [
        "Assurance",
        "No certificate — evidence feeds ISO/IEC 42001 or internal audit"
      ]
    ],
    "intro": "Explore the ISO 31000 process applied to AI systems. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The guidance is not mandated in India, and it is not a certification. Its value here is as the method behind the AI risk assessments that Indian regulators, DPDP obligations and overseas customers increasingly expect, and as the risk engine inside an ISO/IEC 42001 system."
  },
  "iso-iec-42001": {
    "name": "ISO/IEC 42001",
    "tagline": "The first international standard for an AI management system, and the one you can be certified against. XcellHost scopes, builds and runs your AIMS — policies, impact assessments and the 38 Annex A controls — and gets you ready for the accredited certification audit.",
    "overview": "ISO/IEC 42001:2023 is the international standard for an Artificial Intelligence Management System (AIMS). It tells an organisation how to govern the AI it builds or uses: set policy and objectives, assess risks and impacts, apply controls across the AI life cycle and keep improving. Like ISO 27001 it follows the Plan-Do-Check-Act structure, and it is the first AI standard an organisation can be certified against.",
    "highlight": "Certified, Accountable AI",
    "faqs": [
      [
        "Is ISO/IEC 42001 Certification Mandatory In India?",
        "No. It is voluntary. BIS has adopted it as an Indian Standard and MeitY's AI governance guidelines favour standards-led, voluntary governance, so certification is becoming the expected evidence of responsible AI rather than a legal requirement."
      ],
      [
        "Who Can Certify An Organisation To ISO/IEC 42001?",
        "Accredited certification bodies. ISO/IEC 42006:2025, published in July 2025, sets the requirements those bodies must meet to audit and certify AI management systems. XcellHost prepares you and works alongside the certification body; we do not issue certificates."
      ],
      [
        "Do We Need ISO 27001 Before ISO/IEC 42001?",
        "Not formally, but it helps. Both standards share the harmonised clause structure, so an existing ISMS supplies the policy, audit, risk and improvement processes. Organisations with ISO 27001 usually reach ISO/IEC 42001 readiness faster."
      ],
      [
        "Does ISO/IEC 42001 Apply If We Only Use AI, Not Build It?",
        "Yes. The standard covers organisations that develop, provide or use AI systems. A company deploying vendor copilots or a chatbot still needs policy, impact assessment, data governance, supplier controls and human oversight, scaled to its role."
      ],
      [
        "How Does ISO/IEC 42001 Relate To The EU AI Act?",
        "Certification is not EU AI Act compliance, but an AIMS organises the risk management, data governance, documentation, human oversight and monitoring the Act expects from high-risk providers, which makes it a strong base for Indian exporters."
      ],
      [
        "How Does XcellHost Help With ISO/IEC 42001?",
        "We assess the gap, define scope, run risk and impact assessments, implement Annex A controls, integrate the AIMS with your ISMS, protect GenAI data flows, run the internal audit and support you through the accredited certification audit."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO and IEC (ISO/IEC JTC 1/SC 42)"
      ],
      [
        "Version",
        "ISO/IEC 42001:2023, first edition"
      ],
      [
        "Released",
        "December 2023"
      ],
      [
        "Applies To",
        "Any organisation that develops, provides or uses AI systems"
      ],
      [
        "Obligation",
        "Voluntary — increasingly asked for in tenders and vendor reviews"
      ],
      [
        "Assurance",
        "Certificate from an accredited body (ISO/IEC 42006 rules)"
      ]
    ],
    "intro": "Explore the nine Annex A control objectives. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "Certification is not mandatory in India, but the standard is now the practical reference point for AI governance here. It has been adopted as an Indian Standard, and it lines up with the direction MeitY, the RBI and the DPDP regime are taking."
  },
  "nist-ai-rmf": {
    "name": "NIST AI RMF",
    "tagline": "Four functions — Govern, Map, Measure, Manage — that turn AI risk from a slide-deck worry into a managed programme. XcellHost assesses your AI use cases against the AI RMF, builds the governance layer and keeps GenAI protected, with DPDP and sector expectations mapped in.",
    "overview": "The NIST AI Risk Management Framework is a voluntary framework from the US National Institute of Standards and Technology for identifying, measuring and managing the risks of AI systems. Its Core has four functions — Govern, Map, Measure and Manage — split into 19 categories of outcomes, and it defines seven characteristics of trustworthy AI, from validity and safety to fairness and accountability. A Generative AI Profile extends it to GenAI.",
    "highlight": "Trustworthy AI You Can Evidence",
    "faqs": [
      [
        "Is The NIST AI RMF Mandatory In India?",
        "No. It is voluntary everywhere, including India. However, MeitY's AI Governance Guidelines and the RBI's FREE-AI report favour the same risk-based approach, and overseas customers increasingly ask Indian vendors for AI RMF alignment."
      ],
      [
        "What Are The Four Functions Of The AI RMF?",
        "Govern sets the organisational culture, policies and accountability for AI risk. Map establishes the context and risks of each AI system. Measure tests and tracks those risks. Manage prioritises, treats and monitors them over the system's life."
      ],
      [
        "Is There An AI RMF For Generative AI?",
        "Yes. NIST AI 600-1, the Generative AI Profile released in July 2024, identifies twelve risks that are unique to or amplified by GenAI — such as confabulation, information security and data privacy — and suggests actions under each function."
      ],
      [
        "Can An Organisation Be Certified Against The AI RMF?",
        "No. NIST does not certify. Organisations self-assess or commission an independent assessment. When a certificate is needed, the AI RMF work maps across to ISO/IEC 42001, which is certifiable through accredited bodies."
      ],
      [
        "Is The AI RMF Being Updated?",
        "NIST states that AI RMF 1.0 is under revision as part of the US AI Action Plan, and it has published companion drafts such as the Cyber AI Profile and concept notes for sector profiles. Version 1.0 remains the current published framework."
      ],
      [
        "How Does XcellHost Help With The AI RMF?",
        "We inventory your AI systems, run gap assessments against the four functions, set up AI governance through our vCISO service, test GenAI use cases, protect GenAI data flows and keep the evidence current in a managed GRC platform."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "AI RMF 1.0 (NIST AI 100-1); revision under way"
      ],
      [
        "Released",
        "26 January 2023; GenAI Profile July 2024"
      ],
      [
        "Applies To",
        "Any organisation designing, buying, deploying or using AI"
      ],
      [
        "Obligation",
        "Voluntary — referenced by regulators and customers worldwide"
      ],
      [
        "Assurance",
        "No certificate; self-assessment or independent assessment"
      ]
    ],
    "intro": "Explore the four functions of the AI RMF Core. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The AI RMF is not mandated in India, but Indian guidance on AI is moving in the same risk-based direction, and the framework gives Indian organisations a ready structure for evidencing responsible AI to regulators, boards and overseas customers."
  },
  "cisa-ics-guidance": {
    "name": "CISA ICS Guidance",
    "tagline": "The US cybersecurity agency's body of industrial control system advisories, recommended practices, joint guidance and free tools, all public and usable by any operator. XcellHost turns it into action for Indian plants and utilities: vulnerability watch, asset inventories, segmentation and monitoring.",
    "overview": "CISA ICS guidance is the collection of free resources the US Cybersecurity and Infrastructure Security Agency publishes for operators of industrial control systems and other operational technology: vulnerability advisories issued with vendors, recommended practices such as defence in depth, joint guides written with allied agencies on asset inventory, secure connectivity and zero trust, the Cross-Sector Cybersecurity Performance Goals, free tools such as CSET and Malcolm, and training. It is voluntary and usable by any organisation.",
    "highlight": "Free, Practical OT Defence Advice",
    "faqs": [
      [
        "What Is A CISA ICS Advisory?",
        "An ICS advisory (ICSA) is a public notice about a vulnerability in an industrial control system product, published by CISA in coordination with the vendor. It gives the affected products and versions, a CVSS score, how the flaw can be exploited and the vendor's mitigations, and is updated when fixes change."
      ],
      [
        "Does CISA Guidance Apply To Indian Companies?",
        "Not legally. CISA is a US agency and its guidance is voluntary even in the US. Indian operators use it because it is free, current and widely recognised, and because practices such as asset inventory and IT-OT segregation are what CEA, CERT-In and NCIIPC expect anyway."
      ],
      [
        "What Is CSET?",
        "The Cyber Security Evaluation Tool is free desktop software from CISA that walks an organisation through a question-based assessment of its ICS and IT security against recognised standards and produces reports and gap lists. It is a sensible first self-assessment before engaging outside help."
      ],
      [
        "What Is In The Foundations For OT Cybersecurity Asset Inventory Guide?",
        "Published in August 2025 by CISA with the NSA, FBI, EPA and partner agencies in Australia, Canada, Germany, the Netherlands and New Zealand, it sets out how to define scope, discover assets, collect attributes, classify them with a taxonomy and keep the inventory current as the basis for every other OT control."
      ],
      [
        "What Are The Secure Connectivity Principles For OT?",
        "A January 2026 joint guide giving eight principles for connecting OT safely: balance risk and opportunity, limit exposure, centralise and standardise connections, use secure protocols, harden boundaries, limit the impact of compromise, log and monitor, and keep an isolation plan. A companion guide on adapting zero trust to OT followed in April 2026."
      ],
      [
        "How Does XcellHost Help With CISA ICS Guidance?",
        "We build the OT asset inventory to the joint guidance, run CSET and CPG assessments, triage ICS advisories against your products, design segmentation and remote access on the connectivity principles, and operate monitoring, industrial endpoint protection and recovery as managed services, so the guidance becomes a running programme."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CISA, US Department of Homeland Security"
      ],
      [
        "Version",
        "Living body of guidance; no single version"
      ],
      [
        "Released",
        "Ongoing; latest joint OT guides January and April 2026"
      ],
      [
        "Applies To",
        "Owners and operators of ICS/OT in any sector or country"
      ],
      [
        "Obligation",
        "Voluntary — free to use by any organisation"
      ],
      [
        "Assurance",
        "No certificate; self-assessment, for example with CSET"
      ]
    ],
    "intro": "Explore what CISA publishes and offers for ICS/OT. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "CISA has no authority in India and its guidance creates no Indian obligation. It is nevertheless the most complete free OT security library available, and the duties Indian regulators now impose — asset inventories, IT-OT segregation, incident reporting, audits — are easier to meet by following practices already proven in the US and allied countries."
  },
  "mitre-attack-for-ics": {
    "name": "ATT&CK for ICS",
    "tagline": "The MITRE knowledge base of the tactics and techniques attackers use against industrial control systems — from gaining a foothold to inhibiting safety functions and impairing process control. XcellHost maps your OT detections, assessments and threat intelligence to it so you can see which attacks you would catch.",
    "overview": "MITRE ATT&CK for ICS is the industrial control systems part of the free ATT&CK knowledge base. It describes the tactics and techniques attackers use against SCADA, DCS, PLC and safety systems, built from real incidents such as Stuxnet, Industroyer and TRITON, and links them to the assets they target, the groups and malware that use them, and the mitigations and detections that counter them. OT security teams use it to plan monitoring and test defences.",
    "highlight": "Know How Attackers Reach The Process",
    "faqs": [
      [
        "What Are The 12 Tactics In ATT&CK For ICS?",
        "Initial Access, Execution, Persistence, Privilege Escalation, Evasion, Discovery, Lateral Movement, Collection, Command and Control, Inhibit Response Function, Impair Process Control and Impact. The last three are where ICS differs most from IT: they cover silencing safety systems, manipulating the process and the physical consequences."
      ],
      [
        "How Is ATT&CK For ICS Different From Enterprise ATT&CK?",
        "Enterprise covers IT systems, cloud and identity, and has 15 tactics. ICS covers the control-system layer with 12 tactics, adds asset types such as PLCs and safety controllers, and includes techniques with no IT equivalent. Most real OT intrusions span both, starting in IT and ending at the controller."
      ],
      [
        "What Changed For ICS In ATT&CK V19?",
        "Version 19, released on 28 April 2026, added sub-techniques to the ICS matrix for the first time, 18 of them, under techniques such as Block Communications, Modify Firmware and Program Download. The tactic count stayed at twelve and the matrix now lists 79 techniques."
      ],
      [
        "Is ATT&CK For ICS Relevant To Indian Companies?",
        "Yes. It is free, vendor-neutral and used by OT security products worldwide. Indian utilities under CEA's regulations, NCIIPC protected-system operators and manufacturers answering global customers' questionnaires all need to show detection coverage, and the ICS matrix is the accepted way to express it."
      ],
      [
        "Can ATT&CK For ICS Be Used Without An OT Monitoring Tool?",
        "Partly. You can map existing logs, firewall rules and procedures to techniques and run tabletop exercises. However, many ICS techniques only show up in control-network traffic, so passive network monitoring is usually needed to detect them rather than merely document them."
      ],
      [
        "How Does XcellHost Use ATT&CK For ICS?",
        "Our OT monitoring tags detections with ICS technique IDs and reports coverage by tactic. OT assessments map your assets and network paths to the matrix, threat intelligence arrives as techniques to hunt, and incident reports describe attacker behaviour in ATT&CK terms that CERT-In, CSIRT-Power and auditors can follow."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "The MITRE Corporation, a US not-for-profit"
      ],
      [
        "Version",
        "ATT&CK v19 (ICS matrix, content v19.2)"
      ],
      [
        "Released",
        "28 April 2026"
      ],
      [
        "Applies To",
        "Industrial control systems: SCADA, DCS, PLCs, safety systems"
      ],
      [
        "Obligation",
        "Voluntary — the de facto reference for OT threat detection"
      ],
      [
        "Assurance",
        "No certificate; coverage is shown by mapping and testing"
      ]
    ],
    "intro": "Explore the 12 tactics of ATT&CK for ICS (v19). Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates ATT&CK, but the OT duties they do impose — detection, incident reporting, audits — are hard to evidence without a behaviour model. ATT&CK for ICS gives Indian plants and utilities a free, recognised way to show what their monitoring covers and to describe incidents precisely."
  },
  "iec-62443": {
    "name": "IEC 62443",
    "tagline": "The international standard series for securing industrial automation and control systems, shared by asset owners, integrators and product suppliers. XcellHost assesses your plants against it, designs zones and conduits, and runs OT monitoring and protection so your security levels are real, not just on paper.",
    "overview": "IEC 62443 is the international series of standards for cybersecurity in industrial automation and control systems — the PLCs, SCADA, DCS and safety systems that run plants, utilities and infrastructure. Developed by ISA's ISA99 committee and published by IEC, it sets requirements for asset owners, service providers and product suppliers, divides systems into zones and conduits, and defines Security Levels 1 to 4 that state how determined an attacker each zone must resist.",
    "highlight": "Security Built Into The Plant Floor",
    "faqs": [
      [
        "What Is The Difference Between ISA/IEC 62443 And IEC 62443?",
        "They are the same series. ISA's ISA99 committee writes the documents, ISA publishes them as ANSI/ISA-62443, and IEC adopts them internationally as IEC 62443. Edition dates can differ by a year or so between the two publishers, but the technical content is aligned."
      ],
      [
        "What Are The Seven Foundational Requirements?",
        "Identification and authentication control, use control, system integrity, data confidentiality, restricted data flow, timely response to events, and resource availability. Parts 3-3 and 4-2 organise their technical requirements under these seven headings, with additional requirement enhancements at each higher security level."
      ],
      [
        "What Do Security Levels 1 To 4 Mean?",
        "They describe the attacker a zone or component must resist: SL 1 casual or accidental misuse, SL 2 intentional attack with simple means and low resources, SL 3 sophisticated means with moderate resources and control-system skills, SL 4 sophisticated means with extended resources and high motivation. SL 0 means no specific requirement."
      ],
      [
        "Is IEC 62443 Mandatory In India?",
        "Not as a general law. The CEA's 2021 power-sector guidelines call for IEC 62443-4 conformant equipment, BIS has adopted parts of the series as Indian Standards, and many PSU and private tenders specify it. For other sectors it is the recognised good practice that NCIIPC and auditors expect to see."
      ],
      [
        "Can A Company Be Certified To IEC 62443?",
        "Yes, through schemes such as ISASecure and the IECEE CB scheme, which certify products (4-2), development processes (4-1), systems (3-3) and service provider capabilities (2-4). Certificates are issued by accredited bodies; XcellHost prepares you and your products for them but does not issue them."
      ],
      [
        "How Does XcellHost Help With IEC 62443?",
        "We assess plants against the standard, model zones and conduits, set target security levels, and then run the controls: industrial endpoint protection, passive network monitoring, patching, remote access and backup. For product makers we review secure development practices and test devices against 4-2 ahead of certification."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "IEC and ISA (ISA99 committee); BIS adopts parts in India"
      ],
      [
        "Version",
        "Multi-part series; latest part IEC 62443-2-1:2024 (Edition 2)"
      ],
      [
        "Released",
        "Parts dated 2009 to 2025; 2-1 Edition 2 in August 2024"
      ],
      [
        "Applies To",
        "Industrial automation and control systems in any sector"
      ],
      [
        "Obligation",
        "Voluntary; often required by tenders and CEA power-sector guidelines"
      ],
      [
        "Assurance",
        "Product or process certification (ISASecure, IECEE) or self-assessment"
      ]
    ],
    "intro": "Explore security Levels 1–4 and the attacker resisted. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "IEC 62443 is not mandated across Indian industry, but it is the OT standard Indian regulators and large buyers reach for. Power-sector guidance cites it for equipment, BIS publishes parts of it as Indian Standards, and PSU and private tenders in energy and process industries increasingly specify it."
  },
  "tsa-security-directives": {
    "name": "TSA Security Directives",
    "tagline": "Binding cybersecurity requirements that the US Transportation Security Administration imposes on designated pipeline, railroad, transit, airport and aircraft operators: a named coordinator, 24-hour incident reporting, TSA-approved implementation plans and annual testing. XcellHost helps operators and their Indian technology partners build and evidence those controls.",
    "overview": "TSA Security Directives are legally binding cybersecurity orders issued by the US Transportation Security Administration to critical surface-transport operators after the 2021 Colonial Pipeline attack, with parallel emergency amendments for airports and airlines. They require a cybersecurity coordinator, incident reporting to CISA within 24 hours, a vulnerability assessment, a TSA-approved implementation plan, an annual assessment plan and a tested incident response plan, and are renewed each year while a permanent rule is pending.",
    "highlight": "Cyber Rules For Pipelines, Rail And Air",
    "faqs": [
      [
        "What Are TSA Security Directives?",
        "They are binding cybersecurity orders from the US Transportation Security Administration for designated pipeline, railroad and transit operators, with parallel emergency amendments for airports and airlines. They require a coordinator, 24-hour incident reporting to CISA, approved implementation plans, annual assessments and a tested response plan."
      ],
      [
        "Do TSA Security Directives Apply In India?",
        "No. They bind US-designated operators only. Indian companies encounter them as technology or engineering partners to US transport operators, and Indian infrastructure is governed instead by NCIIPC designations, CERT-In directions and sector regulators."
      ],
      [
        "Which Directives Are Currently In Force?",
        "Two pipeline series — SD Pipeline-2021-01 and SD Pipeline-2021-02 — and the rail series SD 1580-21-01, SD 1582-21-01 and SD 1580/82-2022-01, each reissued with a new revision letter roughly every year. Airports and aircraft operators are covered by emergency amendments from March 2023."
      ],
      [
        "What Is The Status Of TSA'S Permanent Cyber Rule?",
        "TSA proposed a rule, Enhancing Surface Cyber Risk Management, in November 2024 to replace the renewable directives with standing cyber risk management requirements for pipeline and rail operators. As of mid-2026 it had not been finalised, so the directives remain the operative requirements."
      ],
      [
        "What Are The Four Core Security Measures?",
        "Network segmentation so OT can run safely if IT is compromised; access control for critical cyber systems; continuous monitoring and detection; and timely patching of operating systems, applications, drivers and firmware. The same four appear in the pipeline, rail and aviation requirements."
      ],
      [
        "How Does XcellHost Help With TSA Security Directives?",
        "We assess OT and IT against the directive requirements, help draft the implementation and assessment plans, deliver segmentation, access control, monitoring and patching as managed services, run annual exercises and provide 24×7 detection that keeps the 24-hour CISA reporting window achievable."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "TSA, U.S. Department of Homeland Security"
      ],
      [
        "Version",
        "SD Pipeline-2021-01/-02 series; SD 1580/82 series; aviation EAs"
      ],
      [
        "Released",
        "May 2021 first issued; renewed with revisions through 2025"
      ],
      [
        "Applies To",
        "TSA-designated pipeline, rail, transit, airport and aircraft operators"
      ],
      [
        "Obligation",
        "Mandatory for designated US operators; not Indian law"
      ],
      [
        "Assurance",
        "TSA plan approval, annual assessment reports and inspections"
      ]
    ],
    "intro": "Explore how TSA's cyber directives have grown since 2021. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "TSA Security Directives bind US operators only; they create no obligation under Indian law. Indian organisations meet them as technology partners to US transport companies, and can borrow their structure for the protected systems that NCIIPC designates in India."
  },
  "nis2": {
    "name": "NIS2",
    "tagline": "The EU's NIS2 Directive sets cybersecurity duties, strict incident deadlines and personal management liability for organisations in eighteen critical sectors, and reaches their suppliers. XcellHost helps EU-exposed Indian businesses and infrastructure operators meet the ten required measures and the 24-hour clock.",
    "overview": "NIS2 is Directive (EU) 2022/2555, the EU's cybersecurity law for organisations that keep society running. It replaced the 2016 NIS Directive, widened coverage to eighteen sectors, splits organisations into essential and important entities, and requires ten cybersecurity risk-management measures, incident reporting within 24 hours and 72 hours, and management accountability. Member states had to transpose it by 17 October 2024, and national laws now apply it.",
    "highlight": "Critical-Sector Cybersecurity With Teeth",
    "faqs": [
      [
        "What Is The NIS2 Directive?",
        "NIS2 is Directive (EU) 2022/2555, the EU's updated network and information security law. It replaced the 2016 NIS Directive, extended coverage to eighteen sectors, introduced essential and important entity classes, ten mandatory risk-management measures, staged incident reporting and significant fines with management liability."
      ],
      [
        "Does NIS2 Apply To Indian Companies?",
        "Only to their EU-established operations in a listed sector, or indirectly through contracts with EU essential and important entities that must manage supply chain security. Indian providers of digital infrastructure and ICT services to EU clients most often meet NIS2 this way."
      ],
      [
        "What Are The NIS2 Incident Reporting Deadlines?",
        "For a significant incident: an early warning within 24 hours of becoming aware, an incident notification within 72 hours with an initial assessment, intermediate updates on request, and a final report within one month of the notification."
      ],
      [
        "What Is The Difference Between Essential And Important Entities?",
        "Essential entities are generally large organisations in Annex I high-criticality sectors such as energy, transport, banking, health and digital infrastructure; they face proactive supervision and higher fines. Important entities include medium-sized firms and Annex II sectors and are supervised reactively."
      ],
      [
        "Has NIS2 Been Transposed Everywhere?",
        "No. The deadline was 17 October 2024, and while most member states now have national laws, some were late enough for the European Commission to refer them to the Court of Justice in 2026. Obligations depend on the law of the member state where an entity is established."
      ],
      [
        "How Does XcellHost Help With NIS2?",
        "We classify your exposure, assess the ten measures, build supplier risk management, operate 24×7 detection with reporting support for the 24-hour and 72-hour deadlines, and train staff and management. We work with your EU counsel and national authorities on the legal specifics."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "European Parliament and Council of the EU"
      ],
      [
        "Version",
        "Directive (EU) 2022/2555 (NIS 2), transposed by national laws"
      ],
      [
        "Released",
        "Adopted 14 December 2022; transposition due 17 October 2024"
      ],
      [
        "Applies To",
        "Essential and important entities in Annex I and II sectors"
      ],
      [
        "Obligation",
        "Mandatory once transposed; applied through national law"
      ],
      [
        "Assurance",
        "National authority supervision and audits; no certificate"
      ]
    ],
    "intro": "Explore nIS2 significant-incident reporting clock. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "NIS2 is not Indian law and no Indian regulator enforces it. It matters to Indian businesses through EU subsidiaries, EU customers and supply-chain clauses, and it is a useful reference for critical infrastructure operators comparing their posture with international expectations."
  },
  "iso-22301": {
    "name": "ISO 22301",
    "tagline": "The international standard for a business continuity management system: impact analysis, recovery objectives, tested plans and a certificate to prove it. XcellHost builds the BCMS, runs the backup and disaster recovery that meet your RTOs and RPOs, and exercises the plans until they hold.",
    "overview": "ISO 22301 is the international standard that specifies requirements for a business continuity management system, or BCMS. It requires an organisation to understand what could disrupt it, analyse the business impact of losing each activity, set recovery time and recovery point objectives, build continuity strategies and plans, exercise them and improve over time. The current edition is ISO 22301:2019, amended in 2024, and organisations can be certified against it by accredited bodies.",
    "highlight": "Keep Critical Services Running Through Disruption",
    "faqs": [
      [
        "Is ISO 22301 Mandatory In India?",
        "No, certification is voluntary. But RBI, SEBI and IRDAI all require business continuity and disaster recovery plans, impact analysis and periodic drills from the entities they regulate, and BIS has adopted the standard as IS/ISO 22301:2019. Certification is the clearest way to evidence those obligations."
      ],
      [
        "What Are RTO, RPO And MTPD?",
        "Recovery time objective is how quickly an activity must resume after disruption. Recovery point objective is how much data loss, measured in time, is acceptable. Maximum tolerable period of disruption is the point after which the impact becomes unacceptable. The RTO must always be shorter than the MTPD."
      ],
      [
        "What Changed In ISO 22301:2019 And The 2024 Amendment?",
        "The 2019 second edition simplified the 2012 original, removed duplicated and overly prescriptive wording and clarified key terms, while keeping the common ISO management-system structure. Amendment 1 of 2024 adds climate change as a consideration in context and interested-party requirements, as ISO did across all its management-system standards. A third edition is now in drafting."
      ],
      [
        "Does ISO 27001 Already Cover Business Continuity?",
        "Only partly. ISO/IEC 27001 includes controls for ICT readiness and information security continuity, but it does not require a business impact analysis, recovery objectives for business activities or a full exercise programme. ISO 22301 provides those, and the two standards share a structure so they are usually run together."
      ],
      [
        "How Long Does ISO 22301 Certification Take?",
        "For a mid-size Indian organisation with existing DR arrangements, six to nine months from scoping to the stage 2 audit is typical. The business impact analysis and the first round of exercises usually set the pace, and the certificate then runs on a three-year cycle with annual surveillance audits."
      ],
      [
        "How Does XcellHost Help With ISO 22301?",
        "We facilitate the BIA, design the BCMS documentation, and provide the recovery capability itself: cloud backup and disaster recovery built to your RTO and RPO, failover tests and tabletop exercises. We prepare you for the certification audit, which is carried out by an accredited certification body."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO, technical committee ISO/TC 292 Security and resilience"
      ],
      [
        "Version",
        "ISO 22301:2019 with Amendment 1:2024"
      ],
      [
        "Released",
        "October 2019; Amd 1 February 2024; 3rd edition in drafting"
      ],
      [
        "Applies To",
        "Any organisation, any size, public or private"
      ],
      [
        "Obligation",
        "Voluntary; BCP and DR are mandatory for RBI, SEBI and IRDAI entities"
      ],
      [
        "Assurance",
        "Certificate from an accredited certification body"
      ]
    ],
    "intro": "Explore the BCMS requirement clauses in sequence. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "ISO 22301 is voluntary in India, but business continuity and disaster recovery are not. BIS has adopted the standard word for word as IS/ISO 22301:2019, and the financial regulators all require continuity capabilities that a certified BCMS evidences without a separate programme."
  },
  "cisa-cross-sector-cpgs": {
    "name": "CISA CPGs",
    "tagline": "A short, prioritised list of high-impact security practices that every critical infrastructure operator should have in place, written by the US cybersecurity agency and organised under the six NIST CSF 2.0 functions. XcellHost checks your estate against each goal and closes the gaps across IT and OT.",
    "overview": "The CISA Cross-Sector Cybersecurity Performance Goals (CPGs) are a prioritised baseline of security practices for critical infrastructure organisations, published by the US Cybersecurity and Infrastructure Security Agency. Each goal states an outcome, the risk it addresses and the actions needed, with cost, impact and ease-of-implementation ratings. Version 2.0, released in December 2025, is organised under the six NIST CSF 2.0 functions, including Govern, and merges IT and OT goals into one list.",
    "highlight": "The Minimum That Stops Most Attacks",
    "faqs": [
      [
        "What Are The CISA Cybersecurity Performance Goals?",
        "They are a prioritised list of baseline security practices for critical infrastructure organisations, published by the US Cybersecurity and Infrastructure Security Agency. Each goal describes an outcome, the risk it addresses and recommended actions, with cost, impact and ease-of-implementation ratings to help operators decide what to do first."
      ],
      [
        "Are The CISA CPGs Mandatory In India?",
        "No. They are voluntary US guidance with no legal standing in India. Indian operators use them because they closely resemble CERT-In and NCIIPC expectations, and Indian suppliers meet them in due diligence from US utilities, pipelines and hospitals."
      ],
      [
        "What Changed In CPG 2.0?",
        "Version 2.0, released in December 2025, reorganised the goals under the six NIST CSF 2.0 functions, added a Govern group covering leadership, incident response plans and managed service provider risk, merged separate IT and OT goals into one list, added goals on least privilege and third-party risk, and removed goals that were unclear or little used."
      ],
      [
        "How Do The CPGs Relate To NIST CSF 2.0?",
        "The CSF is a broad framework of outcomes; the CPGs are a short, prioritised subset aimed at critical infrastructure. CPG 2.0 numbers its goals by CSF 2.0 function, so meeting the CPGs gives you a head start on a CSF profile."
      ],
      [
        "Do The CPGs Cover Operational Technology?",
        "Yes. Earlier versions kept separate OT goals; version 2.0 folds OT into universal goals on segmentation, device connections, default credentials, remote access and detection, so plants and utilities assess IT and OT against the same list."
      ],
      [
        "How Does XcellHost Help With The CISA CPGs?",
        "We score your IT and OT estate against every goal, fix the highest-impact gaps first — credentials, MFA, exposed services, backups and segmentation — and then operate detection, response and patching as managed services, with evidence mapped to CERT-In and your sector regulator."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CISA, U.S. Department of Homeland Security"
      ],
      [
        "Version",
        "CPG 2.0"
      ],
      [
        "Released",
        "December 2025 (first edition October 2022)"
      ],
      [
        "Applies To",
        "Critical infrastructure owners and operators of any size, IT and OT"
      ],
      [
        "Obligation",
        "Voluntary; referenced by US sector regulators and the FFIEC"
      ],
      [
        "Assurance",
        "Self-assessment checklist; no certificate"
      ]
    ],
    "intro": "Explore cPG 2.0 goals grouped by CSF 2.0 function. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The CPGs are US guidance with no legal force in India. They matter here because they distil the same baseline that CERT-In, NCIIPC and sector regulators expect, and because US infrastructure customers use them to assess Indian suppliers."
  },
  "nist-sp-800-82": {
    "name": "NIST SP 800-82",
    "tagline": "NIST's guide to securing operational technology — from SCADA and PLCs to building automation — covering programme design, risk, architecture and a tailored overlay of SP 800-53 controls. XcellHost uses it as the blueprint for assessing, segmenting and monitoring Indian plants and utilities.",
    "overview": "NIST SP 800-82 is the US National Institute of Standards and Technology's guide to securing operational technology — the control systems, sensors and devices that run physical processes in plants, utilities, buildings and transport. Revision 3, published in September 2023, explains OT architectures and threats, how to build an OT security programme and manage its risk, how to design a defensible architecture, and provides an OT overlay that tailors SP 800-53 controls to industrial constraints.",
    "highlight": "The OT Security Guide, Free And Complete",
    "faqs": [
      [
        "What Changed In SP 800-82 Revision 3?",
        "Revision 3, published in September 2023, widened the scope from industrial control systems to all operational technology, including building automation, physical access control and IIoT, rewrote the guidance around current threats and architectures, and replaced the old ICS overlay with an OT overlay for SP 800-53 Revision 5."
      ],
      [
        "Is There A Revision 4 Of SP 800-82?",
        "A Revision 4 initial public draft was released on 21 September 2026 with comments open until 30 November 2026. It restructures the guide around NIST CSF 2.0, expands coverage of water, food, rail, maritime and IIoT, and adds material on asset management, network monitoring and zero trust. Revision 3 remains the current version."
      ],
      [
        "Is NIST SP 800-82 Mandatory?",
        "No. It is voluntary guidance. US federal agencies use it alongside SP 800-53, and many regulators, insurers and customers treat it as the reference for reasonable OT security. In India it is not required by law but is widely used to structure OT programmes."
      ],
      [
        "What Is The OT Overlay?",
        "An overlay is a tailored version of the SP 800-53 control catalogue. The OT overlay selects controls for low, moderate and high impact OT systems and adds OT-specific guidance, so a control such as vulnerability scanning is adapted to devices that cannot tolerate active scans."
      ],
      [
        "How Does SP 800-82 Relate To IEC 62443 And The CEA Rules In India?",
        "They complement each other. SP 800-82 gives the programme, risk and architecture method; IEC 62443 gives certifiable requirements by role and security level. Both support the CEA's 2026 power-sector regulations and CERT-In expectations, and XcellHost maps evidence from one programme to all three."
      ],
      [
        "How Does XcellHost Help With SP 800-82?",
        "We assess your OT estate against the guide, design the segmented architecture and remote access, select overlay controls for each system, and run monitoring, industrial endpoint protection, patching and backup as managed services, reporting progress against CSF functions your board already understands."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "SP 800-82 Revision 3 (Rev 4 initial public draft, Sept 2026)"
      ],
      [
        "Released",
        "September 2023"
      ],
      [
        "Applies To",
        "OT: ICS, SCADA, DCS, PLCs, building automation, safety, IIoT"
      ],
      [
        "Obligation",
        "Voluntary guidance worldwide; underpins US federal OT programmes"
      ],
      [
        "Assurance",
        "No certificate; self-assessment, often via the SP 800-53 overlay"
      ]
    ],
    "intro": "Explore purdue reference levels used in SP 800-82. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "SP 800-82 carries no legal weight in India, but it is the fullest method available for the OT security duties Indian operators now face. The CEA's power-sector regulations, NCIIPC's protected-system obligations and CERT-In's reporting rules all assume an OT programme exists; 800-82 shows how to build one."
  },
  "nerc-cip": {
    "name": "NERC CIP",
    "tagline": "The mandatory, FERC-approved security standards that every operator of the North American bulk electric system must meet, with fines for each day of non-compliance. XcellHost helps Indian utilities, OEMs and service teams supporting those operators meet CIP-style controls — and apply the same discipline under CEA's power-sector regulations.",
    "overview": "NERC CIP (Critical Infrastructure Protection) is the set of mandatory cybersecurity and physical security standards for the North American bulk electric system. Written by the North American Electric Reliability Corporation and approved by FERC, the fourteen standards, CIP-002 to CIP-015, require utilities to categorise their cyber systems by impact, protect them with electronic and physical perimeters, manage access, change, incidents, recovery and suppliers, and now monitor traffic inside the network.",
    "highlight": "Grid Security With Enforceable Teeth",
    "faqs": [
      [
        "Does NERC CIP Apply To Indian Power Companies?",
        "No. NERC CIP binds registered entities of the North American bulk electric system. Indian utilities answer to the Central Electricity Authority, CERT-In and NCIIPC instead. It matters in India mainly to firms that supply or support North American utilities, and as a well-tested model for CEA readiness."
      ],
      [
        "How Many NERC CIP Standards Are There?",
        "Fourteen, numbered CIP-002 to CIP-015, covering categorisation, security management, personnel, electronic and physical perimeters, system security, incident response, recovery, change management, information protection, control-centre communications, supply chain, physical security of key sites and internal network monitoring. Each is versioned separately and revised through NERC's standards process."
      ],
      [
        "What Is CIP-015 And When Does It Apply?",
        "CIP-015-1 is the Internal Network Security Monitoring standard approved by FERC in June 2025. It requires high and medium impact entities to monitor traffic inside their electronic security perimeters and protect the resulting data. Compliance starts on 1 October 2028 for control centres, with other covered assets following two years later."
      ],
      [
        "What Are The Penalties For NERC CIP Violations?",
        "Penalties are set case by case through NERC and the Regional Entities and reviewed by FERC. The statutory cap, adjusted annually for inflation, exceeds US$1.5 million per violation per day, and settlements covering many violations at one utility have run to millions of dollars."
      ],
      [
        "What Is The Difference Between High, Medium And Low Impact?",
        "CIP-002 rates each BES cyber system by what its loss or misuse could do to the grid within 15 minutes. Large control centres and big generation or transmission facilities are high or medium impact and face the full standards; everything else is low impact with a lighter set of CIP-003 controls."
      ],
      [
        "How Does XcellHost Help With NERC CIP?",
        "We are not a NERC auditor. We assess your OT estate against CIP requirements, design perimeters and remote access, run patching, endpoint protection, network monitoring and backup as managed services, and build the evidence trail, so your compliance team and Regional Entity auditors find what they need."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NERC; approved and enforced under FERC in the United States"
      ],
      [
        "Version",
        "CIP-002 to CIP-015 (each standard versioned separately)"
      ],
      [
        "Released",
        "Rolling; CIP-015-1 approved June 2025, enforceable from Oct 2028"
      ],
      [
        "Applies To",
        "Registered Bulk Electric System entities in North America"
      ],
      [
        "Obligation",
        "Mandatory for registered BES entities; not applicable in India"
      ],
      [
        "Assurance",
        "Regional Entity audits, self-certification and FERC penalties"
      ]
    ],
    "intro": "Explore the 14 CIP standards in force or approved. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "NERC CIP has no legal force in India. Its relevance is twofold: Indian companies that supply or support North American utilities must meet it contractually, and the Central Electricity Authority's own cyber rules borrow its logic, so CIP practice is the fastest route to CEA readiness."
  },
  "stqc-security-standards": {
    "name": "STQC certification",
    "tagline": "The STQC Directorate under MeitY tests and certifies information security: ISO 27001 management systems, Common Criteria products, government websites, cloud providers and connected devices such as CCTV. XcellHost prepares your systems, evidence and processes so the STQC assessment goes smoothly.",
    "overview": "STQC security standards are the testing and certification schemes run by the Standardisation Testing and Quality Certification Directorate, an attached office of MeitY. STQC certifies information security management systems to ISO/IEC 27001, evaluates IT security products under the Indian Common Criteria Certification Scheme, certifies government websites against GIGW, audits cloud providers for MeitY empanelment, and tests connected devices such as CCTV against MeitY's essential security requirements.",
    "highlight": "India'S Government Stamp On Secure Products And Systems",
    "faqs": [
      [
        "What Is STQC?",
        "The Standardisation Testing and Quality Certification Directorate is an attached office of MeitY providing testing, calibration, certification and training. In security it certifies ISMSs to ISO/IEC 27001, evaluates products under Common Criteria, certifies government websites, audits cloud providers and tests IoT devices."
      ],
      [
        "Is STQC ISO 27001 Certification Different From Other Certification Bodies?",
        "The standard and audit process are the same. The difference is the certifier: STQC is a Government of India body, which some PSUs, departments and tenders prefer. Organisations may also certify with private accredited certification bodies; XcellHost prepares you for either."
      ],
      [
        "What Is IC3S?",
        "The Indian Common Criteria Certification Scheme, operated by STQC, evaluates IT security products and protection profiles against ISO/IEC 15408 at EAL 1 to EAL 4 through licensed laboratories. India has been a CCRA certificate authorising nation since 2005, so certificates are recognised internationally."
      ],
      [
        "Does STQC Certify Cloud Providers?",
        "STQC audits cloud service providers on behalf of MeitY for empanelment under the GI Cloud (MeghRaj) initiative, checking security, interoperability, portability and contractual terms. Empanelment is granted by MeitY on the basis of that audit, and departments procure from empanelled providers."
      ],
      [
        "Is XcellHost STQC-Certified Or An STQC Lab?",
        "No. XcellHost holds ISO/IEC 27001 and ISO/IEC 20000-1 certification and is not an STQC laboratory or an STQC-certified product. We prepare organisations, products and websites for STQC assessment and work alongside STQC and its laboratories during evaluation."
      ],
      [
        "How Does XcellHost Help With STQC Certification?",
        "We identify the right scheme, build the ISMS or technical documentation, run penetration testing of applications, cloud environments and IoT devices against the scheme's criteria, fix what we find and support you through STQC's evaluation and surveillance cycles."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "STQC Directorate, attached office of MeitY, Government of India"
      ],
      [
        "Version",
        "Schemes: ISMS, IC3S, CQW, IoTSCS and cloud empanelment audits"
      ],
      [
        "Released",
        "Schemes run continuously; IoTSCS CCTV procedure published 2024"
      ],
      [
        "Applies To",
        "Product makers, government sites, cloud providers, ISMS applicants"
      ],
      [
        "Obligation",
        "Voluntary, unless MeitY or procurement rules require STQC assessment"
      ],
      [
        "Assurance",
        "STQC certificate or test report, with surveillance for multi-year ones"
      ]
    ],
    "intro": "Explore sTQC's security certification and test schemes. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "STQC schemes are voluntary in principle but become conditions of doing business with government or selling regulated devices. Knowing which scheme a tender or notification points to saves months of effort."
  },
  "nic-security-guidelines": {
    "name": "NIC security guidelines",
    "tagline": "The National Informatics Centre builds and secures NICNET, the national data centres, the government cloud and thousands of government websites, and sets the security conditions anything hosted there must meet. XcellHost gets departments and their suppliers audit-ready and GIGW-compliant before go-live.",
    "overview": "NIC security guidelines are the security policies and conditions set by the National Informatics Centre, the Government of India's technology arm under MeitY. They govern NICNET, the national and state data centres and the NIC National Cloud (MeghRaj), require applications to pass a security audit before hosting, and include the Guidelines for Indian Government Websites and Apps (GIGW 3.0) covering quality, accessibility, cybersecurity and lifecycle management for government web properties.",
    "highlight": "The Conditions For Running On Government IT",
    "faqs": [
      [
        "What Is GIGW 3.0?",
        "The third edition of the Guidelines for Indian Government Websites and Apps, formulated by NIC with STQC and CERT-In. It covers quality, accessibility, cybersecurity and lifecycle management for government websites, portals, web applications and mobile apps, with a conformity matrix and STQC's Certified Quality Website mark."
      ],
      [
        "Do Applications Need A Security Audit Before NIC Hosts Them?",
        "Yes. NIC requires web applications and websites to clear a security audit, covering vulnerability assessment, penetration testing and SSL compliance, before hosting on its data centres or cloud, and again after significant changes. Audits are performed by NIC teams or CERT-In empanelled auditors."
      ],
      [
        "What Is NIC-CERT?",
        "NIC-CERT is the National Informatics Centre's own incident response team. It is the single point of contact for cyber incidents affecting NIC infrastructure, coordinates with CERT-In and NCIIPC, runs centralised log management and issues advisories to NICNET users."
      ],
      [
        "Is NIC National Cloud The Same As MeghRaj?",
        "NIC National Cloud is the government-run service under the MeghRaj (GI Cloud) initiative. MeghRaj also includes private cloud providers empanelled by MeitY after STQC audit, so departments can choose NIC cloud or an empanelled provider."
      ],
      [
        "Do NIC Rules Apply To Private Companies?",
        "Only when they build, host or operate systems for government. Vendors delivering applications to departments must meet GIGW and pass the pre-hosting audit; private businesses hosting elsewhere follow the CERT-In Directions and MeitY rules instead."
      ],
      [
        "How Does XcellHost Help With NIC Requirements?",
        "We test and fix applications before the NIC security audit, review them against GIGW 3.0, protect them with managed WAF and API security, provide disaster recovery within India and support departments in responding to NIC-CERT and CERT-In. The audit itself is done by NIC or an empanelled auditor."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "National Informatics Centre, Ministry of Electronics and IT"
      ],
      [
        "Version",
        "GIGW 3.0 plus NIC's hosting, network and application security policies"
      ],
      [
        "Released",
        "GIGW 3.0 is current; NIC policies are updated on an ongoing basis"
      ],
      [
        "Applies To",
        "Government departments, PSUs and suppliers that build or host for them"
      ],
      [
        "Obligation",
        "Mandatory for NIC-hosted systems and government websites"
      ],
      [
        "Assurance",
        "NIC security audit clearance; STQC Certified Quality Website for GIGW"
      ]
    ],
    "intro": "Explore the safeguards NIC applies to government systems. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "NIC is the operator, CERT-In the responder and STQC the certifier. For anyone building or hosting government systems the three combine into one path: build to GIGW, pass the security audit, host on NIC infrastructure and keep reporting under the CERT-In Directions."
  },
  "meity-security-guidance": {
    "name": "MeitY security guidance",
    "tagline": "The Ministry of Electronics and Information Technology administers the IT Act, the DPDP Act and Rules, the national cyber policy and the agencies and empanelments that flow from them. XcellHost translates that stack into controls, evidence and audit readiness for Indian businesses and government suppliers.",
    "overview": "MeitY security guidance is the body of law, rules, policy and assurance schemes administered by India's Ministry of Electronics and Information Technology. It rests on the Information Technology Act, 2000 and its rules, the Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025, and the National Cyber Security Policy, and is delivered through CERT-In, the STQC Directorate, the GI Cloud (MeghRaj) empanelment of cloud providers and e-governance standards.",
    "highlight": "The Rules Behind Indian Cyber Compliance",
    "faqs": [
      [
        "What Does MeitY Actually Regulate In Cybersecurity?",
        "MeitY administers the IT Act and its rules, the DPDP Act and Rules, and national cyber policy. Through CERT-In it issues binding Directions and guidance, through STQC it certifies products and systems, and through MeghRaj it empanels the cloud providers government may use."
      ],
      [
        "Is NCIIPC Part Of MeitY?",
        "No. NCIIPC is the national nodal agency for critical information infrastructure under section 70A of the IT Act, but it functions under the National Technical Research Organisation. MeitY houses CERT-In and STQC; critical-sector operators deal with both."
      ],
      [
        "When Do The DPDP Rules 2025 Apply?",
        "The Rules were notified on 13 November 2025. Provisions establishing the Data Protection Board took effect immediately, while most obligations on data fiduciaries, including breach notification and data principal rights, are phased in over 18 months to May 2027."
      ],
      [
        "What Is MeitY Cloud Empanelment?",
        "Under the GI Cloud (MeghRaj) initiative, MeitY empanels cloud service providers whose offerings have been audited by the STQC Directorate for security, interoperability, portability and contractual terms. Government departments are expected to procure cloud services only from empanelled providers."
      ],
      [
        "Is XcellHost MeitY-Empanelled Or STQC-Certified?",
        "XcellHost is certified to ISO/IEC 27001 and ISO/IEC 20000-1 and does not claim MeitY empanelment or STQC certification. We prepare organisations for these audits and certifications and work alongside STQC, CERT-In empanelled auditors and other accredited bodies."
      ],
      [
        "How Does XcellHost Help With MeitY Requirements?",
        "We map every MeitY instrument that applies, operate the CERT-In reporting and logging controls, run DPDP compliance through our DPDPA platform and vDPO service, build ISO 27001 management systems, and get cloud, product and website security ready for STQC and empanelled audits."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Ministry of Electronics and Information Technology (MeitY), India"
      ],
      [
        "Version",
        "IT Act 2000 (amended 2008); DPDP Act 2023; DPDP Rules 2025"
      ],
      [
        "Released",
        "DPDP Rules notified 13 November 2025, phased in over 18 months"
      ],
      [
        "Applies To",
        "Any organisation processing data or running digital services in India"
      ],
      [
        "Obligation",
        "Mandatory where a law or rule applies; empanelment for government work"
      ],
      [
        "Assurance",
        "Regulators, STQC and CERT-In empanelled audits, Data Protection Board"
      ]
    ],
    "intro": "Explore meitY's compliance stack, built on the IT Act. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "MeitY sets the law and policy; its agencies and schemes deliver assurance. Knowing which body owns which requirement avoids chasing the wrong certificate — and it matters that critical infrastructure protection sits with NCIIPC under NTRO, not with MeitY."
  },
  "cert-in-audit-policy-guidelines": {
    "name": "CERT-In audit policy",
    "tagline": "The Comprehensive Cyber Security Audit Policy Guidelines of July 2025 set the rules for auditee organisations and CERT-In empanelled auditors: annual audits, risk-based scope, CVSS and EPSS severity, signed reports and follow-up. XcellHost gets you audit-ready and works alongside the empanelled auditor.",
    "overview": "The CERT-In Comprehensive Cyber Security Audit Policy Guidelines, version 1.0 of 25 July 2025, are CERT-In's rulebook for cyber security audits in India. They define the responsibilities of the organisation being audited and of the CERT-In empanelled auditing organisation, the kinds of engagement covered, the standards to test against, how audits are planned, performed and reported — including CVSS and EPSS severity — and the consequences for auditors who fall short.",
    "highlight": "How Indian Cyber Audits Must Be Run",
    "faqs": [
      [
        "Who Must Follow The CERT-In Audit Policy Guidelines?",
        "Organisations whose systems are being audited and CERT-In empanelled auditing organisations. For auditors the guidelines are enforced through their empanelment terms; for auditees they describe what regulators and CERT-In expect a credible audit to include."
      ],
      [
        "How Often Is A CERT-In Audit Required?",
        "At least once a year, after any major change to infrastructure or applications, and more often where a sector regulator or asset criticality demands it. Many RBI and SEBI entities audit critical systems more frequently."
      ],
      [
        "Is XcellHost A CERT-In Empanelled Auditor?",
        "No. XcellHost prepares organisations for the audit, performs internal testing and remediation, and coordinates with the empanelled auditing organisation that issues the report and certificate. The formal audit must be done by an organisation on CERT-In's empanelled list."
      ],
      [
        "What Are CVSS And EPSS And Why Does The Audit Need Both?",
        "CVSS scores how severe a vulnerability is; EPSS estimates the probability it will be exploited in the wild. The guidelines require both in audit reports so organisations fix the flaws that are both serious and likely to be attacked first."
      ],
      [
        "What Happens To Audit Data And Reports?",
        "Auditors must keep auditee data on systems in India with adequate safeguards and not share it with foreign entities without written authorisation. Audit metadata and reports are shared with CERT-In within five days of completion, and working papers are retained for review."
      ],
      [
        "How Does XcellHost Help With CERT-In Audits?",
        "We run a readiness assessment against the baseline requirements, perform VAPT with CVSS and EPSS ratings, remediate findings through managed patching and hardening, track evidence in managed GRC, and support the empanelled auditor through fieldwork and the follow-up audit."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CERT-In, Ministry of Electronics and IT, Government of India"
      ],
      [
        "Version",
        "Version 1.0"
      ],
      [
        "Released",
        "25 July 2025"
      ],
      [
        "Applies To",
        "Auditee organisations and CERT-In empanelled auditing organisations"
      ],
      [
        "Obligation",
        "Guidance under s.70B(4); binding on auditors via empanelment terms"
      ],
      [
        "Assurance",
        "Signed report and certificate from a CERT-In empanelled auditor"
      ]
    ],
    "intro": "Explore the audit lifecycle the guidelines describe. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The CERT-In empanelment scheme underpins most Indian audit requirements. These guidelines standardise what every empanelled audit must include, so a report from one auditor now carries the same meaning for RBI, SEBI, IRDAI, NIC and a prospective customer."
  },
  "cert-in-15-elemental-controls-msme": {
    "name": "CERT-In's 15 Elemental Controls",
    "tagline": "Fifteen plain-language controls and 45 recommendations that CERT-In published in September 2025 as the minimum cyber defence every micro, small and medium enterprise should run and have audited each year. XcellHost delivers all fifteen as a managed package and gets you ready for the empanelled audit.",
    "overview": "The 15 Elemental Cyber Defence Controls are a baseline security standard that CERT-In published on 1 September 2025 for India's micro, small and medium enterprises. Fifteen controls — from asset management, network and email security and endpoint protection to patching, logging, backup, access control and vulnerability audits — are broken into 45 practical recommendations. MSMEs use them for self-assessment and as the scope of an annual baseline audit by a CERT-In empanelled auditing organisation.",
    "highlight": "A Security Baseline Sized For MSMEs",
    "faqs": [
      [
        "Which Businesses Count As MSMEs For These Controls?",
        "The guideline applies to enterprises that meet the Government of India's MSME classification under the MSMED Act, 2006, which is based on investment in plant, machinery or equipment and annual turnover. Larger organisations can still use the controls as a starting point."
      ],
      [
        "Is The Annual Audit Mandatory?",
        "The document states that MSMEs should have the elemental controls audited by a CERT-In empanelled auditing organisation at least once a year, and also supports self-assessment. Treat the annual baseline audit as the expected norm, and check sector regulators for additional requirements."
      ],
      [
        "What Are The 15 Controls?",
        "Effective Asset Management; Network and Email Security; Endpoint and Mobile Security; Secure Configurations; Patch Management; Incident Management; Logging and Monitoring; Awareness and Training; Third Party Risk Management; Data Protection, Backup and Recovery; Governance and Compliance; Robust Password Policy; Access Control and Identity Management; Physical Security; and Vulnerability Audits and Assessments."
      ],
      [
        "How Long Does It Take An MSME To Implement Them?",
        "A business with fewer than a hundred users and mostly cloud systems can usually put the essentials in place in two to three months, with logging, monitoring and training following. The audit then confirms the baseline and sets the yearly rhythm."
      ],
      [
        "Do The Controls Satisfy The DPDP Act?",
        "They cover much of the reasonable security safeguards the DPDP Act expects, including access control, encryption, backup, logging and incident handling. Consent, notices, data principal rights and breach notification to the Data Protection Board still need a privacy programme on top."
      ],
      [
        "How Does XcellHost Help MSMEs With The 15 Controls?",
        "We deliver the controls as one managed package — endpoint protection, email security, patching, backup, MFA, logging with SOC monitoring, awareness training and VAPT — and prepare the evidence for the CERT-In empanelled audit, which is carried out by the empanelled organisation."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CERT-In, Ministry of Electronics and IT, Government of India"
      ],
      [
        "Version",
        "Version 1.0"
      ],
      [
        "Released",
        "1 September 2025"
      ],
      [
        "Applies To",
        "MSMEs as classified under the MSMED Act, 2006"
      ],
      [
        "Obligation",
        "CERT-In guideline; expects a yearly audit by an empanelled auditor"
      ],
      [
        "Assurance",
        "Self-assessment plus baseline audit by a CERT-In empanelled auditor"
      ]
    ],
    "intro": "Explore the fifteen elemental controls for MSMEs. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "This is the first CERT-In document written specifically for the scale and budgets of Indian MSMEs. It does not replace the 2022 Directions or the DPDP Act; it gives small businesses a practical route to meeting them and a defined scope for the annual empanelled audit."
  },
  "cert-in-cybersecurity-guidelines": {
    "name": "CERT-In guidelines",
    "tagline": "Beyond its binding Directions, CERT-In publishes guidelines, advisories and vulnerability notes that define good security practice for Indian organisations — from government entities to application developers and software suppliers. XcellHost turns that guidance into controls you run and evidence every day.",
    "overview": "CERT-In cybersecurity guidelines are the best-practice documents the Indian Computer Emergency Response Team publishes under section 70B(4) of the IT Act, alongside its binding Directions. They include the 2023 Guidelines on Information Security Practices for Government Entities, guidelines for secure application design and operations, technical guidelines on software and other bills of materials, audit policy guidelines, baseline controls for MSMEs, and a continuous stream of advisories and vulnerability notes.",
    "highlight": "India'S Security Baseline, Written Down",
    "faqs": [
      [
        "Are CERT-In Guidelines Mandatory?",
        "Guidelines issued under section 70B(4) are advisory, unlike the 2022 Directions under section 70B(6). They become binding when a regulator, government contract or empanelled audit scope adopts them, which is now common for government entities, their suppliers and regulated sectors."
      ],
      [
        "What Do The Government Entity Guidelines Cover?",
        "Released in June 2023, they cover security policy, network and infrastructure, identity and access, application and data security, third-party access, cloud, hardening, awareness, social media, vulnerability and patch management, monitoring and incident management, and security auditing for central government organisations."
      ],
      [
        "What Is CERT-In'S SBOM Guidance?",
        "Technical Guidelines on SBOM, first published in October 2024 and expanded in July 2025 as version 2.0, describe how software consumers, developers and suppliers should generate, share and use software bills of materials, now extended to quantum, cryptographic, AI and hardware components."
      ],
      [
        "How Do CERT-In Guidelines Relate To ISO 27001?",
        "They overlap heavily. ISO 27001 gives you a certifiable management system; CERT-In guidelines give India-specific practices and expectations. Most organisations implement CERT-In practices as controls inside their ISO 27001 statement of applicability."
      ],
      [
        "Where Can I Get CERT-In Advisories?",
        "CERT-In publishes advisories, vulnerability notes and alerts on cert-in.org.in and by email subscription. A managed SOC such as XcellHost's ingests them automatically and checks them against your assets so action is not left to chance."
      ],
      [
        "How Does XcellHost Help With CERT-In Guidelines?",
        "We map the applicable guidelines to your environment, implement the hardening, logging, patching and secure development practices they call for, generate SBOMs, act on advisories through our SOC, and prepare you for CERT-In empanelled audits without claiming to be the auditor."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CERT-In, Ministry of Electronics and IT, Government of India"
      ],
      [
        "Version",
        "Living set; BOM guidelines v2.0 (July 2025), audit policy v1.0 (2025)"
      ],
      [
        "Released",
        "Government entity guidelines June 2023; updated documents through 2025"
      ],
      [
        "Applies To",
        "Government, public sector, essential services, developers, suppliers"
      ],
      [
        "Obligation",
        "Guidance under s.70B(4); binding once a regulator or contract adopts"
      ],
      [
        "Assurance",
        "No certificate; shown via CERT-In empanelled audits or self-assessment"
      ]
    ],
    "intro": "Explore the main guidance streams CERT-In publishes. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "CERT-In guidelines are advisory by default, but they become obligations when a regulator, a government contract or CERT-In's own Directions reference them. For most Indian organisations the practical answer is to treat them as the expected minimum."
  },
  "cert-in-directions": {
    "name": "CERT-In Directions",
    "tagline": "Binding directions issued by CERT-In under section 70B(6) of the IT Act that tell Indian organisations how fast to report cyber incidents, how long to keep logs and what records to hold. XcellHost builds the logging, monitoring and reporting machinery that makes compliance routine.",
    "overview": "The CERT-In Directions are binding instructions issued on 28 April 2022 by the Indian Computer Emergency Response Team under section 70B(6) of the IT Act, 2000. They require organisations in India to sync clocks to NIC or NPL time, report listed cyber incidents to CERT-In within six hours of noticing them, keep ICT logs for a rolling 180 days, designate a point of contact and, for certain providers, keep subscriber and KYC records five years.",
    "highlight": "Six Hours To Report, 180 Days Of Logs",
    "faqs": [
      [
        "Who Do The CERT-In Directions Apply To?",
        "Service providers, intermediaries, data centres, body corporates and government organisations in India. In practice that is every company and every provider of cloud, hosting, VPS, VPN or virtual-asset services. MSMEs have been in scope since 25 September 2022."
      ],
      [
        "When Does The Six-Hour Clock Start?",
        "From the moment the organisation notices the incident or is told about it, not from when the incident began. CERT-In's FAQs allow an initial report with partial information, followed by further details within a reasonable time."
      ],
      [
        "Which Incidents Must Be Reported?",
        "The twenty categories in Annexure I, including targeted scanning, compromise of critical systems, unauthorised access, defacement, malware and ransomware, DDoS, data breaches and leaks, and attacks on cloud, IoT, payment, social-media and AI systems."
      ],
      [
        "Do Logs Have To Be Stored In India?",
        "The Directions say logs must be kept within Indian jurisdiction. The FAQs clarify that logs may be held abroad if they can be produced to CERT-In in a reasonable time, while financial transaction logs must stay in India. Storing them in India removes the ambiguity."
      ],
      [
        "What Is The Penalty For Non-Compliance?",
        "Under section 70B(7) of the IT Act, failing to comply with a CERT-In direction is punishable with imprisonment of up to one year, a fine of up to one lakh rupees, or both. Regulators may also treat it as a breach of their own cyber requirements."
      ],
      [
        "How Does XcellHost Help With The CERT-In Directions?",
        "We run India-hosted log retention with NTP synchronisation, operate a 24×7 SOC that triages incidents against the annexure and drafts the CERT-In report, and provide retainers and consulting to register your point of contact and evidence compliance."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CERT-In, Ministry of Electronics and IT, Government of India"
      ],
      [
        "Version",
        "Directions of 28 April 2022, with FAQs and MSME extension"
      ],
      [
        "Released",
        "28 April 2022; in force from late June 2022 (MSMEs: 25 Sept 2022)"
      ],
      [
        "Applies To",
        "Service providers, intermediaries, data centres, companies, government"
      ],
      [
        "Obligation",
        "Mandatory — non-compliance is punishable under section 70B(7)"
      ],
      [
        "Assurance",
        "No certificate; evidenced by records, logs and reports to CERT-In"
      ]
    ],
    "intro": "Explore the six-hour clock starts when you notice. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The Directions are the base layer of India's incident regime. Sector regulators and the DPDP framework add their own timelines, but each assumes the organisation already has synchronised clocks, retained logs and a working six-hour reporting process in place."
  },
  "dora": {
    "name": "DORA",
    "tagline": "The EU Digital Operational Resilience Act makes ICT risk, incident reporting, resilience testing and third-party risk binding for financial entities across the Union, and reaches the Indian providers that serve them. XcellHost builds and evidences the controls on both sides of that contract.",
    "overview": "DORA, the Digital Operational Resilience Act, is Regulation (EU) 2022/2554. It applies from 17 January 2025 to banks, insurers, investment firms, payment institutions, crypto-asset service providers and other EU financial entities. It sets binding rules in five areas: ICT risk management, ICT incident reporting, digital operational resilience testing, management of ICT third-party risk including EU oversight of critical providers, and information sharing. Indian firms supplying ICT services to EU financial entities feel it through contracts.",
    "highlight": "Operational Resilience The EU Can Inspect",
    "faqs": [
      [
        "What Is DORA And When Did It Apply?",
        "DORA is Regulation (EU) 2022/2554 on digital operational resilience for the financial sector. It was adopted on 14 December 2022 and has applied to EU financial entities and their ICT providers since 17 January 2025, with detailed technical standards from the European Supervisory Authorities."
      ],
      [
        "Does DORA Apply To Indian Companies?",
        "Not directly, unless they are EU financial entities. Indian IT, BPO and cloud providers are affected through the contract clauses, audit rights and incident duties their EU financial clients must impose, and Indian groups with EU regulated subsidiaries must comply there."
      ],
      [
        "What Are The Five Pillars Of DORA?",
        "ICT risk management; ICT-related incident management, classification and reporting; digital operational resilience testing; management of ICT third-party risk, including EU oversight of critical ICT third-party providers; and information-sharing arrangements on cyber threats."
      ],
      [
        "What Is TLPT Under DORA?",
        "Threat-led penetration testing: an intelligence-led red-team exercise on live production systems supporting critical functions, carried out at least every three years by financial entities their supervisor designates, following the TIBER-EU style methodology set out in DORA's technical standards."
      ],
      [
        "How Does DORA Relate To RBI'S Rules For Indian Banks?",
        "They are separate regimes with similar intent. RBI's 2026 cyber Directions, outsourcing Directions and six-hour reporting cover much of the same ground as DORA's pillars, so an Indian bank or provider can run one control framework and map evidence to both."
      ],
      [
        "How Does XcellHost Help With DORA?",
        "We assess entities and providers against the five pillars, build the ICT risk framework and third-party register, prepare DORA-ready contract clauses, run testing up to red-team exercises and operate 24×7 detection with reporting support. We work alongside your EU legal advisers and supervisors."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "European Parliament and Council of the EU"
      ],
      [
        "Version",
        "Regulation (EU) 2022/2554 with RTS and ITS from the ESAs"
      ],
      [
        "Released",
        "Adopted 14 December 2022; applies from 17 January 2025"
      ],
      [
        "Applies To",
        "EU financial entities and their ICT third-party service providers"
      ],
      [
        "Obligation",
        "Directly binding in every EU member state"
      ],
      [
        "Assurance",
        "Supervision by national competent authorities; ESA oversight of CTPPs"
      ]
    ],
    "intro": "Explore the five pillars of DORA. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "DORA has no force in Indian law, but India is one of the largest suppliers of ICT services to European finance. Indian providers meet it through client contracts, and Indian financial groups meet it through their EU operations. The overlap with RBI and CERT-In rules is large and worth using."
  },
  "ffiec-cybersecurity-guidance": {
    "name": "FFIEC cybersecurity guidance",
    "tagline": "The IT Examination Handbook booklets, authentication guidance and supervisory statements that US federal and state examiners use to assess banks, credit unions and their technology service providers. XcellHost helps Indian banking GCCs, fintechs and service providers build controls and evidence that stand up to those examinations.",
    "overview": "FFIEC cybersecurity guidance is the examination material issued by the US Federal Financial Institutions Examination Council, the council of the Federal Reserve, FDIC, NCUA, OCC, CFPB and state regulators. Its IT Examination Handbook booklets, 2021 authentication guidance and supervisory statements define what examiners expect in security, resilience, outsourcing and access controls. FFIEC retired its Cybersecurity Assessment Tool on 31 August 2025 in favour of NIST CSF 2.0, CISA's CPGs, the CRI Profile and CIS Controls.",
    "highlight": "What US Bank Examiners Expect",
    "faqs": [
      [
        "What Is FFIEC Cybersecurity Guidance?",
        "It is the examination material issued by the US Federal Financial Institutions Examination Council: the IT Examination Handbook booklets, the 2021 authentication and access guidance and supervisory statements. Examiners from the Fed, FDIC, NCUA, OCC and state regulators use it to assess financial institutions and their technology providers."
      ],
      [
        "Does FFIEC Guidance Apply To Indian Banks?",
        "Not at home. Indian banks answer to RBI. FFIEC guidance applies to US-supervised institutions, so it reaches India through US branches of Indian banks, the Indian GCCs of US banks and Indian service providers whose work is examined as part of a US institution's outsourcing."
      ],
      [
        "What Happened To The FFIEC Cybersecurity Assessment Tool?",
        "FFIEC retired the Cybersecurity Assessment Tool on 31 August 2025. Institutions are pointed instead to NIST Cybersecurity Framework 2.0, CISA's Cybersecurity Performance Goals, the Cyber Risk Institute Profile and the CIS Critical Security Controls, while NCUA continues to support its own ACET tool for credit unions."
      ],
      [
        "Which Handbook Booklets Matter Most For Cybersecurity?",
        "Information Security; Architecture, Infrastructure and Operations; Business Continuity Management; Development, Acquisition and Maintenance; and Outsourcing Technology Services, together with the Management and Audit booklets that frame governance and independent testing."
      ],
      [
        "Can An Indian Service Provider Be Examined By US Regulators?",
        "Yes. Under the Bank Service Company Act the FFIEC agencies can examine technology service providers that serve US institutions, and the Supervision of Technology Service Providers booklet describes the programme. Indian delivery centres and vendors are usually reviewed through their client's outsourcing programme and may be examined directly."
      ],
      [
        "How Does XcellHost Help With FFIEC Expectations?",
        "We map your controls to the handbook booklets and to NIST CSF 2.0 or the CRI Profile, remediate authentication, resilience and third-party gaps, operate monitoring and identity services, and build the evidence pack that examiners and sponsor banks ask for — aligned with RBI directions at the same time."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "FFIEC — Fed, FDIC, NCUA, OCC, CFPB and State Liaison Committee"
      ],
      [
        "Version",
        "IT Examination Handbook booklets, updated individually"
      ],
      [
        "Released",
        "Latest booklet August 2024; authentication guidance August 2021"
      ],
      [
        "Applies To",
        "US-supervised banks, credit unions and their technology providers"
      ],
      [
        "Obligation",
        "Supervisory expectations enforced through examinations"
      ],
      [
        "Assurance",
        "Regulator IT examinations and ratings; no certificate"
      ]
    ],
    "intro": "Explore booklets of the FFIEC IT Examination Handbook. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "FFIEC guidance has no legal standing in India and does not bind Indian banks at home. It reaches India through the examination of US institutions whose technology is built, run or secured here, and through service-provider supervision."
  },
  "swift-cscf": {
    "name": "SWIFT CSCF",
    "tagline": "The Customer Security Controls Framework defines the security controls every Swift user must apply to its local Swift infrastructure and attest to each year. XcellHost assesses your Swift environment, closes the gaps and supports the independent assessment behind your KYC-SA attestation.",
    "overview": "SWIFT CSCF is the Customer Security Controls Framework at the heart of Swift's Customer Security Programme. It lists the security controls, split into mandatory and advisory, that every institution connected to the Swift network must apply to its local Swift infrastructure. The controls are grouped under three objectives and seven principles, and each user attests its compliance annually in the KYC-Security Attestation application, supported by an independent assessment.",
    "highlight": "Attest Your Swift Environment With Confidence",
    "faqs": [
      [
        "What Is The SWIFT Customer Security Controls Framework?",
        "It is the control set within Swift's Customer Security Programme that every Swift-connected institution must implement on its local Swift infrastructure. Controls are mandatory or advisory, grouped under three objectives and seven principles, and compliance is attested annually in KYC-SA."
      ],
      [
        "When Must We Attest?",
        "The attestation window runs from July to December each year. Swift publishes the new CSCF version each July, and users get up to 18 months to prepare for new or changed controls before they become part of the mandatory attestation."
      ],
      [
        "Who Can Perform The Independent Assessment?",
        "Swift requires the attestation to be supported by an independent assessment, which can be performed by an internal second or third line function or an external provider with the required expertise. XcellHost prepares your environment and evidence and works alongside the assessor."
      ],
      [
        "Does CSCF Apply To Indian Corporates On Swift?",
        "Yes. Any entity with its own Swift connection, including corporates using Swift for treasury payments, must attest. Where a service bureau runs the infrastructure, the controls are shared by contract but the attestation remains the user's responsibility."
      ],
      [
        "How Does CSCF Relate To RBI Requirements?",
        "RBI has required Indian banks to secure Swift and reconcile messages with core banking since 2018, and its cyber Directions cover straight-through processing and incident reporting. A sound CSCF programme produces much of the evidence RBI inspectors look for on Swift."
      ],
      [
        "How Does XcellHost Help With CSCF?",
        "We assess your Swift secure zone against the current CSCF, design segmentation and access controls, monitor Swift systems from our 24×7 SOC, rehearse incident response and assemble the evidence your independent assessor and KYC-SA attestation need."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Swift (S.W.I.F.T. SC), Customer Security Programme"
      ],
      [
        "Version",
        "Updated annually; a new CSCF version is published each July"
      ],
      [
        "Released",
        "Current version applies to the July–December attestation window"
      ],
      [
        "Applies To",
        "Every Swift user: banks, financial institutions and corporates"
      ],
      [
        "Obligation",
        "Mandatory controls for all users; advisory controls recommended"
      ],
      [
        "Assurance",
        "Annual self-attestation in KYC-SA backed by an independent assessment"
      ]
    ],
    "intro": "Explore the three CSCF objectives. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "Indian banks have been under explicit RBI instruction to secure Swift since the 2018 frauds that exploited gaps between Swift messaging and core banking systems. CSCF attestation now sits alongside RBI's cyber Directions and CERT-In's reporting obligations."
  },
  "sebi-cscrf": {
    "name": "SEBI CSCRF",
    "tagline": "SEBI's Cybersecurity and Cyber Resilience Framework sets graded, NIST-aligned obligations for exchanges, brokers, fund houses and every other SEBI-regulated entity. XcellHost assesses your category, closes the control gaps, operates the SOC and gets you ready for the cyber audits SEBI expects.",
    "overview": "SEBI CSCRF is the Cybersecurity and Cyber Resilience Framework issued by the Securities and Exchange Board of India on 20 August 2024 for every entity it regulates. It replaces SEBI's earlier cyber circulars with one framework built on five cyber resilience goals, Anticipate, Withstand, Contain, Recover and Evolve, organised under six functions borrowed from NIST CSF. Obligations are graded across five categories from market infrastructure institutions down to self-certification entities.",
    "highlight": "Cyber Resilience For Every Market Participant",
    "faqs": [
      [
        "Who Must Comply With SEBI CSCRF?",
        "Every SEBI-regulated entity, from stock exchanges and depositories to brokers, AMCs, portfolio managers, AIFs, RTAs, merchant bankers, investment advisers and research analysts. Obligations are graded across five categories, and SEBI has exempted some very small or inactive intermediaries."
      ],
      [
        "What Are The Five CSCRF Categories?",
        "Market Infrastructure Institutions, Qualified REs, Mid-size REs, Small-size REs and Self-certification REs. Category depends on measures such as active clients or trading volume for brokers, assets under management for AMCs and portfolio managers, and folios for RTAs."
      ],
      [
        "What Is The CSCRF Compliance Deadline?",
        "The framework took effect from 1 January 2025 for entities with earlier SEBI cyber circulars and 1 April 2025 for the rest. SEBI extended the deadline for most REs, finally to 31 August 2025, while MIIs, KRAs and QRTAs stayed on the original timeline. It is fully in force now."
      ],
      [
        "Is ISO 27001 Certification Mandatory Under CSCRF?",
        "It is required for Market Infrastructure Institutions. SEBI's August 2025 clarifications made it encouraged rather than mandatory for Qualified REs, recognising the cost for smaller firms, though its controls remain a sensible way to evidence CSCRF standards."
      ],
      [
        "What Is The Market-SOC?",
        "A security operations centre run by the stock exchanges that smaller regulated entities can onboard to instead of building their own. Small-size and self-certification REs with an existing SOC may keep it but must submit periodic SOC efficacy reports."
      ],
      [
        "How Does XcellHost Help With CSCRF?",
        "We determine your category, scope critical systems, close gaps across all six functions, provide a vCISO, run a 24×7 SOC or help with Market-SOC onboarding, and prepare you for the VAPT and cyber audit cycle performed by a CERT-In empanelled auditor."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Securities and Exchange Board of India (SEBI)"
      ],
      [
        "Version",
        "CSCRF circular of August 2024, with 2025 clarifications"
      ],
      [
        "Released",
        "20 August 2024; clarifications April and August 2025"
      ],
      [
        "Applies To",
        "All SEBI-regulated entities, graded in five categories"
      ],
      [
        "Obligation",
        "Mandatory; MIIs, KRAs and QRTAs on the original timeline"
      ],
      [
        "Assurance",
        "Periodic cyber audits by CERT-In empanelled auditors; CCI"
      ]
    ],
    "intro": "Explore the six functions that organise CSCRF standards. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "CSCRF is India's most structured sector cyber mandate and it was written to sit beside other Indian obligations. SEBI's 2025 clarifications set a principle of exclusivity and equivalence for entities also regulated by RBI or IRDAI, so controls accepted by the primary regulator count."
  },
  "rbi-cybersecurity-framework": {
    "name": "RBI cyber Directions",
    "tagline": "The Reserve Bank's 2026 Directions on cybersecurity, technology risk, resilience and assurance set what banks, NBFCs and financial institutions must govern, control, test and report. XcellHost helps regulated entities build the controls, run the SOC and keep the evidence RBI inspectors ask for.",
    "overview": "RBI's cyber framework is the set of binding Directions the Reserve Bank of India issues to its regulated entities on cybersecurity, IT governance, technology risk, resilience and assurance. On 31 July 2026 RBI consolidated its earlier circulars, including the 2016 Cyber Security Framework in Banks and the 2023 IT Governance Master Direction, into entity-wise Directions covering board oversight, a CISO, baseline controls, a 24×7 security operations centre, six-hour incident reporting on DAKSH and IS audit.",
    "highlight": "One Rulebook, Six Hours To Report",
    "faqs": [
      [
        "What Changed In RBI'S Cybersecurity Rules In 2026?",
        "On 31 July 2026 RBI issued consolidated Cybersecurity, Technology Risk, Resilience and Assurance Framework Directions for each type of regulated entity, effective immediately. They replace the earlier cyber security framework and IT governance circulars for those entities with one rulebook per entity type."
      ],
      [
        "How Quickly Must A Bank Report A Cyber Incident To RBI?",
        "Within six hours of detection, on RBI's DAKSH supervisory platform, with CERT-In also notified. The outsourcing Directions require IT vendors to inform the regulated entity promptly so that this six-hour window can still be met."
      ],
      [
        "Do The Directions Apply To NBFCs?",
        "Yes. NBFCs have their own 2026 Directions. Obligations are graded: base-layer NBFCs below ₹500 crore in assets carry the lightest set, those at or above ₹500 crore more, and middle, upper and top-layer NBFCs the fullest requirements."
      ],
      [
        "Is A Security Operations Centre Mandatory?",
        "For commercial banks the Directions require a Cyber Security Operations Centre sized to the bank's risk profile, with SIEM-based monitoring, forensic capability and tiered analysts. Smaller entities can meet monitoring expectations through a managed SOC service."
      ],
      [
        "How Do RBI'S Rules Relate To CERT-In And The DPDP Act?",
        "They stack. CERT-In's six-hour reporting and log retention, and the DPDP Act's duties to protect personal data and notify breaches, apply to regulated entities in addition to RBI's Directions. One incident process should satisfy all three."
      ],
      [
        "How Does XcellHost Help With RBI Compliance?",
        "We run the gap assessment, provide a vCISO to operate the governance, deliver baseline controls, VA/PT, red teaming and DR as managed services, and operate a 24×7 SOC that reports in RBI's terms. Formal IS audits are carried out with your audit function or an independent auditor."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Reserve Bank of India, Department of Supervision"
      ],
      [
        "Version",
        "Cyber, Tech Risk, Resilience & Assurance Directions, 2026"
      ],
      [
        "Released",
        "31 July 2026 (effective immediately)"
      ],
      [
        "Applies To",
        "Commercial banks, SFBs, payments banks, UCBs, NBFCs, AIFIs, CICs"
      ],
      [
        "Obligation",
        "Mandatory for every RBI-regulated entity in scope"
      ],
      [
        "Assurance",
        "RBI supervision, IS audit, DAKSH reporting; no certificate"
      ]
    ],
    "intro": "Explore chapters of the 2026 Directions, board down. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "RBI's Directions sit on top of, not instead of, India's wider cyber law. A regulated entity still owes CERT-In its incident reports and log retention, owes customers the DPDP Act's safeguards, and may be a protected system under NCIIPC if it runs critical financial infrastructure."
  },
  "rbi-digital-payment-security-controls": {
    "name": "RBI Digital Payment Security Controls",
    "tagline": "RBI's Digital Payment Security Controls Directions set the minimum security for internet banking, mobile payment apps and card payments offered by banks and NBFCs. XcellHost tests the applications, hardens the channels and runs the monitoring that keeps your payment products compliant.",
    "overview": "RBI DPSC is the Reserve Bank of India's set of Digital Payment Security Controls: binding Directions that tell banks and NBFCs how to secure the digital payment products they offer. Reissued entity-wise on 31 July 2026 in place of the February 2021 Master Direction, they cover board policy, general controls such as secure development, multi-factor authentication, fraud monitoring and reconciliation, and channel-specific rules for internet banking, mobile payment applications and card payments.",
    "highlight": "Secure Every Payment Channel",
    "faqs": [
      [
        "What Are RBI'S Digital Payment Security Controls?",
        "They are binding RBI Directions that specify minimum security for digital payment products: board policy, secure development, multi-factor authentication, fraud risk management, reconciliation, customer protection, and specific controls for internet banking, mobile payment apps and card payments."
      ],
      [
        "Did The 2021 Master Direction Change In 2026?",
        "Yes. On 31 July 2026 RBI reissued the controls as entity-wise Digital Payment Security Controls Directions for commercial banks, small finance banks, payments banks, UCBs and NBFCs, repealing the earlier directions for those entities. The substance is similar; the structure is now per entity type."
      ],
      [
        "How Often Must Payment Applications Be Tested?",
        "Vulnerability assessments at least every six months and penetration tests at least annually, with additional testing when infrastructure or applications change materially. Findings and their closure are reported to the IT Strategy Committee."
      ],
      [
        "What Authentication Is Required For Digital Payments In India?",
        "At least two distinct factors, one of which is dynamic or non-replicable, under the RBI Authentication Mechanisms Directions effective 1 April 2026. The DPSC Directions add adaptive, risk-based checks, device binding for mobile apps and alerts on new device registration."
      ],
      [
        "Do The Directions Apply To Fintechs And Payment Aggregators?",
        "Not directly. Non-bank payment system operators follow RBI's 2024 Master Directions on cyber resilience and digital payment security. Fintechs that build for banks inherit the DPSC requirements through their bank partner's contracts and audits."
      ],
      [
        "How Does XcellHost Help With DPSC Compliance?",
        "We test internet banking, mobile and API channels on the required cycle, protect them with managed WAAP and DDoS mitigation, prepare card environments for PCI DSS and monitor payment platforms 24×7. Formal IS audits are performed with your audit function or an independent auditor."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Reserve Bank of India, Department of Supervision"
      ],
      [
        "Version",
        "Digital Payment Security Controls Directions, 2026 (entity-wise)"
      ],
      [
        "Released",
        "31 July 2026 (effective immediately)"
      ],
      [
        "Applies To",
        "Banks, SFBs, payments banks, UCBs and NBFCs with digital payments"
      ],
      [
        "Obligation",
        "Mandatory for regulated entities offering digital payment products"
      ],
      [
        "Assurance",
        "RBI supervision; VA/PT and IS audit evidence; no certificate"
      ]
    ],
    "intro": "Explore control areas of the DPSC Directions. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "India's payment rails are shared across banks, PSOs, networks and fintechs, and RBI regulates each layer. The DPSC Directions are the bank-side layer; related RBI rules cover authentication, non-bank operators and outsourcing, and CERT-In and the DPDP Act apply on top."
  },
  "iso-iec-29100": {
    "name": "ISO/IEC 29100",
    "tagline": "The ISO privacy framework that defines who the actors are, what counts as personally identifiable information and the eleven principles that every other ISO privacy standard builds on. XcellHost uses it to design privacy programmes that read correctly to auditors, customers and the DPDP Act.",
    "overview": "ISO/IEC 29100 is the international privacy framework from ISO and IEC. It fixes a common privacy vocabulary, names the actors involved in processing personally identifiable information — PII principal, PII controller, PII processor and third party — explains how to recognise PII and derive privacy safeguarding requirements, and sets out eleven privacy principles. It is not certifiable; it is the reference that ISO/IEC 27701, 27018 and 29151 are built on, and it is available free of charge.",
    "highlight": "The Vocabulary Every Privacy Programme Shares",
    "faqs": [
      [
        "Is ISO/IEC 29100 Mandatory In India?",
        "No. It is a voluntary framework. BIS has adopted it as IS/ISO/IEC 29100:2024, and its principles closely match the duties the DPDP Act places on Data Fiduciaries, so Indian organisations use it as a design reference rather than a compliance target."
      ],
      [
        "What Are The Eleven Privacy Principles Of ISO/IEC 29100?",
        "Consent and choice; purpose legitimacy and specification; collection limitation; data minimisation; use, retention and disclosure limitation; accuracy and quality; openness, transparency and notice; individual participation and access; accountability; information security; and privacy compliance."
      ],
      [
        "What Changed In The 2024 Edition?",
        "ISO/IEC 29100:2024 is the second edition, published in February 2024. It replaces the 2011 edition and its 2018 amendment and keeps the same shape: basic elements in clause 4 and the eleven principles in clause 5. It is the edition that ISO/IEC 27701:2025 now cites as its normative reference, and BIS has adopted it as an Indian Standard."
      ],
      [
        "Can An Organisation Be Certified To ISO/IEC 29100?",
        "No. It is a framework of terms and principles, not a set of auditable requirements. Organisations that want a certificate implement ISO/IEC 27701, whose controls are mapped to the 29100 principles, or add ISO/IEC 27018 to an ISO/IEC 27001 certification for cloud processing."
      ],
      [
        "Is ISO/IEC 29100 Really Free?",
        "Yes. ISO lists the 2024 edition at zero cost in the ISO Store, so anyone can download it after registering. It is one of the few ISO security and privacy standards available this way, which is one reason it is used so widely as a reference."
      ],
      [
        "How Does XcellHost Use ISO/IEC 29100?",
        "We use its actor model and eleven principles as the design baseline for privacy programmes: mapping processing activities, deriving safeguarding requirements, drafting notices and processor contracts, and selecting controls from ISO/IEC 27701 and 27001. The result is a programme that satisfies DPDP obligations and reads correctly to global customers."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO and IEC (joint committee JTC 1/SC 27)"
      ],
      [
        "Version",
        "ISO/IEC 29100:2024 (second edition)"
      ],
      [
        "Released",
        "February 2024 — replaces the 2011 edition and its 2018 amendment"
      ],
      [
        "Applies To",
        "Anyone specifying, building or operating systems that process PII"
      ],
      [
        "Obligation",
        "Voluntary — the base reference for other ISO privacy standards"
      ],
      [
        "Assurance",
        "No certificate; used as a reference model and shared vocabulary"
      ]
    ],
    "intro": "Explore the eleven privacy principles of clause 5. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The Bureau of Indian Standards has adopted the 2024 edition as IS/ISO/IEC 29100:2024, an identical Indian Standard. It is not mandatory, but its actors and principles map almost one to one onto the DPDP Act, which makes it a practical bridge between legal obligations and system design."
  },
  "soc-2": {
    "name": "SOC 2",
    "tagline": "SOC 2 is the attestation report US and global customers ask of SaaS, cloud and IT service providers before they trust them with data. XcellHost designs and operates the controls, gathers the evidence and gets you audit-ready, working alongside the licensed CPA firm that issues the report.",
    "overview": "SOC 2 is an attestation report, defined by the American Institute of CPAs, in which an independent CPA firm examines a service organisation's controls against the Trust Services Criteria: Security (always required) plus optionally Availability, Processing Integrity, Confidentiality and Privacy. A Type 1 report covers control design at a point in time; a Type 2 report tests operating effectiveness over a period, usually six to twelve months.",
    "highlight": "Proof That Your Controls Work, Signed By A CPA",
    "faqs": [
      [
        "What Is The Difference Between SOC 2 Type 1 And Type 2?",
        "A Type 1 report gives the auditor's opinion on whether controls are suitably designed and in place at a single date. A Type 2 report adds testing of whether those controls operated effectively over a review period, commonly six to twelve months, and is what most customers ask for."
      ],
      [
        "Is SOC 2 A Certification?",
        "No. SOC 2 is an attestation examination performed under AICPA standards by an independent, licensed CPA firm, which issues a report with an opinion. There is no certificate or register, and the report is shared with customers under confidentiality, usually alongside a bridge letter between periods."
      ],
      [
        "Which Trust Services Criteria Should We Include?",
        "Security is compulsory. Add Availability if you commit to uptime, Confidentiality if you hold customers' business data, Processing Integrity if your outputs drive financial or operational decisions, and Privacy if you process personal information directly. Most Indian SaaS firms start with Security plus Availability and Confidentiality."
      ],
      [
        "Is SOC 2 Required In India?",
        "No Indian regulator mandates it. Demand comes from US and global customers, vendor-risk programmes and investors. Indian exporters usually combine SOC 2 with ISO/IEC 27001, and regulated Indian buyers accept SOC reports as third-party assurance under RBI and SEBI outsourcing expectations."
      ],
      [
        "How Long Does A First SOC 2 Take?",
        "Readiness and remediation typically take two to four months, followed by a Type 2 observation period of at least six months and then auditor fieldwork. Many organisations obtain a Type 1 first to show customers progress, then complete the Type 2 at the end of the period."
      ],
      [
        "How Does XcellHost Help With SOC 2?",
        "We run the readiness assessment, design and operate the controls, collect evidence continuously through Managed GRC, write the system description and support the auditor's fieldwork. XcellHost is not a CPA firm and does not issue SOC 2 reports; we get you ready and work alongside the licensed auditor you choose."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "AICPA (American Institute of Certified Public Accountants)"
      ],
      [
        "Version",
        "2017 Trust Services Criteria with revised points of focus (2022)"
      ],
      [
        "Released",
        "TSC 2017; points of focus revised 2022"
      ],
      [
        "Applies To",
        "Service organisations: SaaS, cloud, data centres, BPO, MSPs"
      ],
      [
        "Obligation",
        "Voluntary; demanded contractually by customers, mostly in the US"
      ],
      [
        "Assurance",
        "Attestation report (Type 1 or Type 2) from a licensed CPA firm"
      ]
    ],
    "intro": "Explore the five Trust Services Criteria. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "SOC 2 is not required by any Indian regulator, but it is the assurance report Indian exporters hand to American customers most often. Indian banks and regulated entities also ask cloud and IT vendors for independent control assurance under outsourcing norms, and SOC reports are widely accepted as that evidence."
  },
  "pci-dss": {
    "name": "PCI DSS v4.0.1",
    "tagline": "The Payment Card Industry Data Security Standard is the baseline every merchant, payment aggregator, bank and service provider must meet when it stores, processes or transmits card data. XcellHost gets you assessment-ready and runs the controls, working alongside your Qualified Security Assessor.",
    "overview": "PCI DSS, the Payment Card Industry Data Security Standard, is the global baseline of technical and operational requirements for every organisation that stores, processes or transmits payment-card data. Version 4.0.1 groups 12 requirements under six goals, from network security controls and strong cryptography to logging, testing and policy. Compliance is validated each year through a self-assessment questionnaire or an on-site assessment by a Qualified Security Assessor, with quarterly scans by an Approved Scanning Vendor.",
    "highlight": "Card-Data Security For Every Payment Channel",
    "faqs": [
      [
        "What Changed In PCI DSS V4.0.1?",
        "Version 4.0.1, published in June 2024, is a limited revision that corrects and clarifies v4.0 without adding or removing requirements. Version 4.0 was retired on 31 December 2024, and the future-dated requirements introduced in v4.0 became mandatory on 31 March 2025."
      ],
      [
        "Is PCI DSS Mandatory In India?",
        "It is not a statute, but RBI's payment aggregator and gateway guidelines require aggregators to be PCI DSS compliant, and acquiring banks pass card-brand requirements to every merchant. RBI's tokenisation rules also prohibit merchants and aggregators from storing actual card data."
      ],
      [
        "Do I Need A QSA Or Can I Self-Assess?",
        "It depends on your merchant or service-provider level, set by the card brands and your acquirer by transaction volume. Higher levels need an on-site assessment and Report on Compliance by a Qualified Security Assessor; lower levels complete a Self-Assessment Questionnaire with an Attestation of Compliance."
      ],
      [
        "What Is The Customised Approach?",
        "Introduced in v4.0, it lets mature organisations meet a requirement's stated objective with controls of their own design, documented and tested through a targeted risk analysis, instead of following the Defined Approach wording. Assessors validate the custom control rather than the prescribed one."
      ],
      [
        "Does XcellHost Issue PCI DSS Certification?",
        "No. Only a PCI SSC-qualified QSA can sign a Report on Compliance, and self-assessments are signed by the entity itself. XcellHost is not a QSA. We scope, gap-assess, remediate, run the security controls and prepare the evidence, then work alongside your chosen QSA during the assessment."
      ],
      [
        "How Often Are Scans And Tests Required?",
        "External vulnerability scans by an Approved Scanning Vendor and internal scans are due at least every three months and after significant changes. Penetration testing of the environment and of segmentation controls is annual for most entities, with service providers testing segmentation every six months."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "PCI Security Standards Council (founded by the card brands)"
      ],
      [
        "Version",
        "PCI DSS v4.0.1"
      ],
      [
        "Released",
        "June 2024; v4.0 retired 31 December 2024"
      ],
      [
        "Applies To",
        "Any entity storing, processing or transmitting cardholder data"
      ],
      [
        "Obligation",
        "Contractual via card brands and acquirers; RBI-mandated for PAs"
      ],
      [
        "Assurance",
        "ROC by a QSA or SAQ self-assessment, plus quarterly ASV scans"
      ]
    ],
    "intro": "Explore the 12 requirements of PCI DSS v4.0.1. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "PCI DSS is not Indian law, but RBI has made it a practical requirement for the regulated payments chain. Payment aggregators must be compliant under RBI's 2020 guidelines, card-on-file tokenisation rules bar merchants and aggregators from storing actual card data, and payment system data must be stored in India."
  },
  "hipaa-security-rule": {
    "name": "HIPAA Security Rule",
    "tagline": "The Security Rule tells US healthcare organisations, and every vendor that touches their electronic patient data, how that data must be protected. XcellHost helps Indian healthcare BPO, revenue-cycle, health-tech and IT firms meet business associate obligations with evidence their US clients can audit.",
    "overview": "The HIPAA Security Rule is the US federal regulation (45 CFR Part 164, Subpart C) that sets national standards for protecting electronic protected health information (ePHI). It requires covered entities such as hospitals, health plans and clearinghouses, and their business associates, to maintain administrative, physical and technical safeguards, perform a risk analysis, and document policies. Indian IT, BPO and health-tech firms that handle ePHI for US clients inherit these duties through business associate agreements.",
    "highlight": "EPHI Safeguards For US Healthcare And Its Vendors",
    "faqs": [
      [
        "What Is The Difference Between Required And Addressable?",
        "Required implementation specifications must be implemented as written. Addressable ones must be assessed: implement them if reasonable and appropriate, or document why not and adopt an equivalent alternative. Addressable never means optional, and the decision must be recorded in the risk analysis."
      ],
      [
        "Does HIPAA Apply To Companies In India?",
        "Not directly, but any Indian firm that creates, receives, maintains or transmits ePHI for a US covered entity or another business associate is a business associate itself. It must sign a business associate agreement and comply with the Security Rule, with direct liability for violations."
      ],
      [
        "Is There A HIPAA Certification?",
        "No. HHS does not certify organisations or products, and no third-party certificate makes an entity HIPAA compliant. Compliance is demonstrated through a documented risk analysis, implemented safeguards, policies and evidence. Many business associates use SOC 2 or ISO/IEC 27001 reports to show clients their controls."
      ],
      [
        "Is The Security Rule Being Updated?",
        "HHS published a proposed rule in January 2025 that would remove the addressable category, mandate encryption and multi-factor authentication, and require asset inventories, network maps and annual compliance audits. As of this writing it has not been finalised, so the current Subpart C text remains the legal standard."
      ],
      [
        "How Quickly Must A Breach Of EPHI Be Reported?",
        "Under the companion Breach Notification Rule, business associates must notify the covered entity without unreasonable delay and within 60 days of discovery, and covered entities must notify affected individuals within the same outer limit, with HHS informed on a schedule that depends on breach size. Contracts often set shorter deadlines."
      ],
      [
        "How Does XcellHost Help With HIPAA?",
        "We scope your ePHI, run the risk analysis, decide addressable specifications, deploy identity, encryption, EDR, SIEM and disaster-recovery controls, review business associate agreements and maintain the six-year evidence trail. We prepare you for client audits; we are not a certification body."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "US Dept of Health and Human Services (HHS), Office for Civil Rights"
      ],
      [
        "Version",
        "45 CFR Part 164, Subpart C, as amended by the 2013 Omnibus Rule"
      ],
      [
        "Released",
        "February 2003; last substantively amended January 2013"
      ],
      [
        "Applies To",
        "Covered entities and business associates handling ePHI, anywhere"
      ],
      [
        "Obligation",
        "Mandatory for US covered entities and their business associates"
      ],
      [
        "Assurance",
        "No certificate; OCR investigations and a documented risk analysis"
      ]
    ],
    "intro": "Explore safeguard families in Subpart C. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "HIPAA is US law and has no direct force in India, but it binds India's large healthcare outsourcing, revenue-cycle and health-tech sector through business associate agreements. Because Indian firms are usually subcontractors several steps from the patient, proving safeguards to the client matters as much as having them."
  },
  "ccpa-cpra": {
    "name": "CCPA / CPRA",
    "tagline": "The California Consumer Privacy Act, strengthened by the CPRA, gives Californians control over their personal information and binds any business that profits from it, wherever it sits. XcellHost helps Indian SaaS, adtech and outsourcing firms meet its notice, rights, security and audit obligations.",
    "overview": "The California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA), is California's privacy law for residents' personal information. It gives consumers rights to know, delete, correct, opt out of sale or sharing, and limit use of sensitive data, and obliges covered businesses to publish notices, honour requests, contract with service providers and keep data reasonably secure. Regulations effective from 2026 add risk assessments, cybersecurity audits and rules for automated decision-making.",
    "highlight": "California Privacy Rules For Global Businesses",
    "faqs": [
      [
        "Which Businesses Does The CCPA Apply To?",
        "For-profit businesses that collect Californians' personal information and meet any one threshold: annual gross revenue above $26,625,000 as adjusted in 2025; buying, selling or sharing the personal information of 100,000 or more consumers or households a year; or earning half or more of revenue from selling or sharing it."
      ],
      [
        "What Did The CPRA Change?",
        "Proposition 24, approved in November 2020 and effective from 1 January 2023, created the California Privacy Protection Agency, added rights to correct and to limit sensitive personal information, extended opt-outs to data sharing for behavioural advertising and set the basis for risk-assessment, audit and automated-decision-making regulations."
      ],
      [
        "What Are The New CPPA Regulations?",
        "Regulations approved in September 2025 and effective from 1 January 2026 require risk assessments for high-risk processing, annual independent cybersecurity audits with submissions phased by revenue from April 2028, and notice, opt-out and access rights around automated decision-making technology from January 2027."
      ],
      [
        "Does The CCPA Apply To Indian Companies?",
        "Yes, if they do business in California and meet a threshold, regardless of where they are based. More commonly, Indian firms are service providers to covered US businesses and must sign contracts that limit data use, support deletion requests and allow audits."
      ],
      [
        "What Are The Penalties For CCPA Violations?",
        "Administrative fines and civil penalties of up to $2,663 per violation, or $7,988 for intentional violations or those involving consumers under 16, as adjusted in 2025. Separately, consumers can sue after a data breach for statutory damages of $107 to $799 per consumer per incident."
      ],
      [
        "How Does XcellHost Help With The CCPA?",
        "We confirm applicability, inventory Californian data, rewrite notices, set up rights and opt-out workflows that honour Global Privacy Control, review service-provider contracts, and implement reasonable-security controls with 24×7 monitoring. Our audit team prepares you for the cybersecurity audits and risk assessments now required."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "State of California; enforced by the CPPA and Attorney General"
      ],
      [
        "Version",
        "CCPA as amended by CPRA; CPPA regulations effective 1 January 2026"
      ],
      [
        "Released",
        "CCPA January 2020; CPRA January 2023; latest regulations January 2026"
      ],
      [
        "Applies To",
        "For-profit businesses handling Californians' personal information"
      ],
      [
        "Obligation",
        "Mandatory above revenue, data-volume or data-sale thresholds"
      ],
      [
        "Assurance",
        "Regulator enforcement; risk assessments and cybersecurity audits"
      ]
    ],
    "intro": "Explore six consumer rights under CCPA/CPRA. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The CCPA has no force in India, but Indian companies meet it constantly: as covered businesses when they serve Californians directly, and far more often as service providers to US clients who must contractually bind and audit them. Treat it as a market-access requirement rather than a foreign curiosity."
  },
  "india-dpdp-act-2023": {
    "name": "DPDP Act 2023",
    "tagline": "The Digital Personal Data Protection Act is India's first comprehensive personal-data law, and the Rules notified in November 2025 started an 18-month countdown to full compliance. XcellHost helps Indian organisations build consent, security, breach-response and data-lifecycle controls before the deadlines land.",
    "overview": "The Digital Personal Data Protection Act, 2023 is India's law on how organisations (Data Fiduciaries) may process the digital personal data of individuals (Data Principals). It requires consent or a recognised legitimate use, security safeguards, breach notification to the Data Protection Board of India, verifiable parental consent for children, and extra duties for Significant Data Fiduciaries, with penalties up to ₹250 crore. The DPDP Rules, 2025 bring it into force in phases ending May 2027.",
    "highlight": "India'S Privacy Law, Now On The Clock",
    "faqs": [
      [
        "When Does The DPDP Act Come Into Force?",
        "In phases. On 13 November 2025 the definitions and Data Protection Board provisions commenced with the Rules. Consent Manager registration provisions follow twelve months later, in November 2026, and the remaining obligations on Data Fiduciaries, including consent, security, breach reporting and rights, apply from May 2027."
      ],
      [
        "What Is The DPDP Breach Notification Timeline?",
        "On becoming aware of a personal data breach, a Data Fiduciary must inform each affected Data Principal without delay and give the Board an initial intimation. A detailed report with causes, impact, mitigation and the notices sent must reach the Board within 72 hours, unless the Board allows longer in writing."
      ],
      [
        "What Are The Penalties Under The DPDP Act?",
        "The Schedule to the Act sets ceilings per breach: up to ₹250 crore for failing to take reasonable security safeguards, ₹200 crore for not notifying a breach or for breaching children's-data duties, ₹150 crore for Significant Data Fiduciary obligations and ₹50 crore for other provisions."
      ],
      [
        "Who Is A Significant Data Fiduciary?",
        "A Data Fiduciary, or class of fiduciaries, that the Central Government notifies after weighing the volume and sensitivity of data processed, risks to individuals, electoral democracy, security and public order. SDFs must appoint an India-based DPO and independent auditor and run annual DPIAs and audits."
      ],
      [
        "Does The DPDP Act Restrict Sending Data Outside India?",
        "Not by default. Transfers are permitted except to countries or territories the Central Government restricts by notification, and the government may impose conditions through orders. Significant Data Fiduciaries can be required to keep specified categories of personal data within India."
      ],
      [
        "How Does XcellHost Help With The DPDP Act?",
        "We run the gap assessment and data inventory, redesign notices and consent, implement Rule 6 safeguards such as encryption, access control, logging and backup, build the 72-hour breach process, and provide a vDPO and compliance platform that tracks every obligation to the May 2027 deadline."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Parliament of India; Rules notified by MeitY"
      ],
      [
        "Version",
        "Act No. 22 of 2023 with the DPDP Rules, 2025 (G.S.R. 846(E))"
      ],
      [
        "Released",
        "Act assented 11 August 2023; Rules notified 13 November 2025"
      ],
      [
        "Applies To",
        "Digital personal data processed in India, or abroad for Indian users"
      ],
      [
        "Obligation",
        "Mandatory for every Data Fiduciary; phased in until May 2027"
      ],
      [
        "Assurance",
        "No certificate; Board enforcement, annual audits and DPIAs for SDFs"
      ]
    ],
    "intro": "Explore from assent to full enforcement. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The DPDP Act is India's own law, so there is no question of applicability: every organisation processing digital personal data in India is covered, whatever its size or sector. Its real challenge is sequencing, because it lands alongside CERT-In, RBI, SEBI and IRDAI requirements that already govern security and incident reporting."
  },
  "gdpr": {
    "name": "GDPR",
    "tagline": "The General Data Protection Regulation sets the rules for handling personal data of people in the European Union, wherever the processing happens. XcellHost helps Indian exporters, SaaS firms and service providers put the controls, contracts and evidence in place that EU customers and regulators expect.",
    "overview": "GDPR is the European Union's data protection law, applicable since May 2018. It governs how organisations collect, use, store and share the personal data of people in the EU, sets out seven principles and six lawful bases for processing, gives individuals enforceable rights, and requires breach reporting within 72 hours. It applies to businesses outside the EU, including in India, when they offer goods or services to EU residents or monitor their behaviour.",
    "highlight": "EU Privacy Law That Reaches Indian Businesses",
    "faqs": [
      [
        "Does GDPR Apply To Indian Companies?",
        "Yes, in two ways. Under Article 3(2) it applies directly to Indian businesses that offer goods or services to people in the EU or monitor their behaviour. Indian processors serving EU clients are also bound through Article 28 contracts and the Standard Contractual Clauses that govern transfers into India."
      ],
      [
        "Is India An Adequate Country Under GDPR?",
        "No. The European Commission has not adopted an adequacy decision for India, so personal data can move to India only under safeguards such as Standard Contractual Clauses or Binding Corporate Rules, supported by a transfer impact assessment and appropriate security measures."
      ],
      [
        "What Is The GDPR Breach Notification Deadline?",
        "A controller must notify the competent supervisory authority within 72 hours of becoming aware of a personal data breach, unless it is unlikely to risk individuals' rights. Where the risk is high, affected individuals must also be told without undue delay. Processors must inform their controllers without undue delay."
      ],
      [
        "How Large Can GDPR Fines Be?",
        "There are two tiers. Less serious infringements carry fines up to €10 million or 2% of worldwide annual turnover, whichever is higher. Breaches of the principles, individual rights or transfer rules carry up to €20 million or 4%. Authorities can also order processing to stop."
      ],
      [
        "Is GDPR Changing Under The Digital Omnibus?",
        "The European Commission proposed targeted GDPR simplifications in its Digital Omnibus package in November 2025. The proposal is still being negotiated by the European Parliament and Council, so the current text of the Regulation applies unchanged until any amendment is adopted and enters into force."
      ],
      [
        "How Does XcellHost Help With GDPR?",
        "We map your EU data flows, assign lawful bases, implement the security and DLP controls Article 32 expects, put SCCs and Article 28 terms in place, run DPIAs and rights requests through Privacy as-a-Service, and provide a vDPO. Our 24×7 SOC supports the 72-hour breach timeline."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "European Parliament and Council of the European Union"
      ],
      [
        "Version",
        "Regulation (EU) 2016/679"
      ],
      [
        "Released",
        "Adopted April 2016; applicable from 25 May 2018"
      ],
      [
        "Applies To",
        "Controllers and processors handling EU residents' personal data"
      ],
      [
        "Obligation",
        "Mandatory, including for non-EU firms serving people in the EU"
      ],
      [
        "Assurance",
        "Regulator enforcement; optional Art. 42 certification schemes"
      ]
    ],
    "intro": "Explore the seven principles of Article 5. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "GDPR is not Indian law, but it binds a large share of India's IT, ITES and digital-services economy through customer contracts and Article 3. Because the EU has not granted India an adequacy decision, every inbound transfer needs Standard Contractual Clauses, which makes documented security the price of entry for EU work."
  },
  "iso-iec-27017": {
    "name": "ISO/IEC 27017",
    "tagline": "The international code of practice that extends ISO/IEC 27002 with cloud-specific controls and separate guidance for cloud customers and cloud providers. XcellHost maps your cloud estate to the 2026 edition, closes the gaps and keeps the evidence ready for your ISO/IEC 27001 audit.",
    "overview": "ISO/IEC 27017 is an international code of practice for information security controls in cloud services. It takes the controls of ISO/IEC 27002, adds cloud-specific implementation guidance for both cloud service customers and cloud service providers, and introduces a small set of extra controls that exist only for cloud. The second edition, ISO/IEC 27017:2026, replaced the 2015 text and follows the four control themes of ISO/IEC 27002:2022.",
    "highlight": "Who Secures What In The Cloud",
    "faqs": [
      [
        "Is ISO/IEC 27017 Mandatory In India?",
        "No Indian law mandates it. However, MeitY's cloud service provider empanelment names ISO/IEC 27017 alongside ISO/IEC 27001, 27018 and 20000-1, and many BFSI, government and enterprise tenders ask for it. In practice it is a commercial requirement for organisations selling or hosting cloud services for regulated Indian buyers."
      ],
      [
        "What Changed In ISO/IEC 27017:2026?",
        "The second edition, published in July 2026, reorganises the guidance around the four control themes of ISO/IEC 27002:2022. The seven extra cloud controls of the 2015 edition give way to four cloud-specific controls, with other cloud topics handled as guidance on existing controls. An annex maps the first edition to the second."
      ],
      [
        "Can An Organisation Be Certified To ISO/IEC 27017?",
        "ISO/IEC 27017 is a code of practice, not a management-system standard, so it is not certified on its own. Certification bodies assess it as an extension of an ISO/IEC 27001 audit and reference it in what they issue. XcellHost prepares you for that assessment; the accredited body carries it out."
      ],
      [
        "What Is The Difference Between ISO/IEC 27017 And ISO/IEC 27018?",
        "ISO/IEC 27017 covers information security controls for cloud services and speaks to both customers and providers. ISO/IEC 27018 covers protection of personally identifiable information and speaks to public cloud providers acting as PII processors. Providers that handle personal data for their customers commonly adopt both."
      ],
      [
        "Does ISO/IEC 27017 Apply To Cloud Customers Or Only To Providers?",
        "Both. The standard gives separate guidance for the cloud service customer and the cloud service provider. A company running workloads on AWS, Azure or Google Cloud uses the customer guidance. A SaaS company usually needs both, because it consumes cloud infrastructure and also provides a cloud service."
      ],
      [
        "How Does XcellHost Help With ISO/IEC 27017?",
        "We assess your cloud services against the 2026 edition, build shared-responsibility matrices, harden configurations, and run posture and log monitoring from our 24×7 SOC. Evidence is organised for your ISO/IEC 27001 audit and we work alongside the accredited certification body you choose. XcellHost does not issue certificates."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISO and IEC (joint committee JTC 1/SC 27)"
      ],
      [
        "Version",
        "ISO/IEC 27017:2026 (second edition)"
      ],
      [
        "Released",
        "July 2026 — replaces the 2015 edition"
      ],
      [
        "Applies To",
        "Cloud service customers and cloud service providers"
      ],
      [
        "Obligation",
        "Voluntary — often required in cloud tenders and contracts"
      ],
      [
        "Assurance",
        "No standalone certificate; assessed with an ISO/IEC 27001 audit"
      ]
    ],
    "intro": "Explore the four cloud-specific controls it adds. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian law mandates ISO/IEC 27017, but it has become part of the expected baseline wherever Indian regulators, government buyers and enterprises place workloads in the cloud. It is a recognised way to show that cloud responsibilities are defined, assigned and controlled."
  },
  "nist-privacy-framework": {
    "name": "NIST Privacy Framework",
    "tagline": "A voluntary framework that organises privacy outcomes into five functions and lets you describe your current and target privacy posture the same way the NIST CSF does for security. XcellHost assesses, builds and reports your privacy programme against it, with DPDP obligations mapped in.",
    "overview": "The NIST Privacy Framework is a voluntary tool from the US National Institute of Standards and Technology for managing privacy risk — the risk to individuals that arises from how an organisation processes their data. Its Core groups privacy outcomes into five functions: Identify-P, Govern-P, Control-P, Communicate-P and Protect-P. Organisations build a Current Profile and a Target Profile from the Core and use four Implementation Tiers to describe how mature their privacy risk practices are. A 1.1 draft, aligned to CSF 2.0, was issued in 2025.",
    "highlight": "Privacy Risk, Managed Like Cyber Risk",
    "faqs": [
      [
        "Is The NIST Privacy Framework Mandatory In India?",
        "No. It is a voluntary US framework with no legal standing in India. Indian organisations use it to structure their DPDP Act programme and to answer US customers who ask for NIST alignment, while the Act and the DPDP Rules 2025 remain the binding requirements."
      ],
      [
        "What Is The Difference Between The Privacy Framework And The Cybersecurity Framework?",
        "The CSF manages risk to the organisation from cyber threats; the Privacy Framework manages risk to individuals from how data are processed, which can arise even with no security failure. They share the Profile and Tier method and overlap in Protect-P, so they are designed to be used together."
      ],
      [
        "Is Version 1.1 Final?",
        "Not yet at the time of writing. NIST issued the Version 1.1 initial public draft on 14 April 2025, with comments closing in June 2025, and has said the final version is expected in 2026. Until it is published, Version 1.0 from January 2020 remains the version of record, and NIST has released a mapping between the two."
      ],
      [
        "What Does Version 1.1 Change?",
        "The draft realigns the Core with NIST CSF 2.0, moves data processing ecosystem risk management from Identify-P into Govern-P, restructures Protect-P to reference the CSF for cybersecurity-related privacy events, and adds a section on privacy risks that arise from AI systems. A mapping document tracks every change from 1.0."
      ],
      [
        "Can An Organisation Be Certified To The NIST Privacy Framework?",
        "No. There is no NIST certification. Organisations self-assess through Current and Target Profiles and Tiers, or commission an independent assessment. Where a certificate is required, ISO/IEC 27701 is the usual route, and the two can be mapped to each other."
      ],
      [
        "How Does XcellHost Help With The NIST Privacy Framework?",
        "We run the data inventory and privacy risk assessment, facilitate Current and Target Profiles, deliver the Control-P and Protect-P safeguards through our managed security and privacy services, and report progress by function to your board, with DPDP Act obligations mapped to the same structure."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "Version 1.0 — Version 1.1 initial public draft issued April 2025"
      ],
      [
        "Released",
        "16 January 2020 (1.0); 1.1 draft 14 April 2025"
      ],
      [
        "Applies To",
        "Any organisation that processes personal data, any sector"
      ],
      [
        "Obligation",
        "Voluntary — not required by any Indian or US law"
      ],
      [
        "Assurance",
        "No certificate; self-assessed through Profiles and Tiers"
      ]
    ],
    "intro": "Explore a privacy profile scored across the five functions. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The Privacy Framework has no legal standing in India, but it is a useful organising structure for the obligations the DPDP Act and the DPDP Rules 2025 create. Each Indian duty can be placed under one of the five functions, so the same programme answers the regulator and US customers."
  },
  "cisa-kev-catalog": {
    "name": "CISA KEV Catalog",
    "tagline": "The Known Exploited Vulnerabilities Catalog is CISA's authoritative list of CVEs with confirmed real-world exploitation, each with a remediation action. XcellHost watches the catalogue continuously, matches new entries to your assets within hours and drives emergency patching so exploited flaws are closed before attackers reach you.",
    "overview": "The CISA Known Exploited Vulnerabilities (KEV) Catalog is a continuously updated list, published by the US Cybersecurity and Infrastructure Security Agency, of CVEs confirmed to be exploited in the wild. A vulnerability is added only when it has a CVE ID, reliable evidence of active exploitation and a clear remediation action. US federal civilian agencies must fix KEV entries by set deadlines; everyone else uses it as the most reliable 'patch this first' signal.",
    "highlight": "The Shortlist You Patch First",
    "faqs": [
      [
        "What Are The Criteria For Adding A Vulnerability To KEV?",
        "Three things must be true: the vulnerability has an assigned CVE ID, CISA has reliable evidence that it is being actively exploited in the wild, and there is a clear remediation action such as a vendor update, a mitigation or removal of an end-of-life product."
      ],
      [
        "Is The KEV Catalog Mandatory In India?",
        "No. Its deadlines bind US federal civilian agencies only. Indian regulators such as RBI, SEBI and CERT-In require prompt patching of known vulnerabilities without naming KEV, so most Indian security teams adopt it voluntarily as their emergency patch list."
      ],
      [
        "How Quickly Should KEV Entries Be Fixed?",
        "US agencies now work to risk-based deadlines under BOD 26-04, as short as three days for exploited flaws on internet-exposed systems with automated exploitation and severe impact. XcellHost recommends Indian organisations adopt similar tiers: days for exposed assets, weeks at most for internal ones."
      ],
      [
        "What Changed With BOD 26-04?",
        "Issued in June 2026, BOD 26-04 revoked and replaced BOD 22-01, which had created the catalogue in 2021 with flat deadlines. It sets remediation timelines from four risk variables — public exposure, KEV status, exploit automation and technical impact — while the KEV Catalog itself continues unchanged."
      ],
      [
        "How Is KEV Different From EPSS?",
        "EPSS estimates the probability that a CVE will be exploited in the next thirty days using a statistical model. KEV records vulnerabilities already confirmed exploited. Use EPSS to prioritise the many CVEs not yet in KEV, and KEV as the non-negotiable list to fix first."
      ],
      [
        "How Does XcellHost Help With The KEV Catalog?",
        "We ingest the catalogue continuously, match new entries to your inventory and exposure, raise emergency change tickets with the required action, patch under agreed SLAs, hunt for signs of prior exploitation and give you monthly evidence of response times for RBI, SEBI and ISO 27001 reviews."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CISA, U.S. Department of Homeland Security"
      ],
      [
        "Version",
        "Living catalogue, updated as exploitation is confirmed"
      ],
      [
        "Released",
        "November 2021 (BOD 22-01); deadlines now under BOD 26-04 (June 2026)"
      ],
      [
        "Applies To",
        "Binding on US federal civilian agencies; recommended for everyone"
      ],
      [
        "Obligation",
        "Mandatory for US federal civilian agencies; voluntary in India"
      ],
      [
        "Assurance",
        "None; remediation is evidenced through your own patch records"
      ]
    ],
    "intro": "Explore from every CVE down to the ones to fix now. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "KEV deadlines bind only US federal civilian agencies; no Indian law or regulator mandates the catalogue. But Indian regulators do require timely patching of known vulnerabilities, and KEV is the most practical way to prove you prioritised the ones under real attack."
  },
  "cve": {
    "name": "CVE",
    "tagline": "Common Vulnerabilities and Exposures gives each publicly disclosed vulnerability a single ID that scanners, vendors, advisories and regulators all use. XcellHost tracks CVEs across your estate, enriches them with severity and exploitation data, and drives patching so you fix the ones that matter first.",
    "overview": "CVE (Common Vulnerabilities and Exposures) is the international catalogue of publicly disclosed cybersecurity vulnerabilities, operated by MITRE and sponsored by the US Cybersecurity and Infrastructure Security Agency. Each vulnerability receives a unique CVE ID assigned by a CVE Numbering Authority, so a vendor advisory, a scanner result, a threat report and a regulator's notice can all refer to the same flaw without ambiguity.",
    "highlight": "The Common Name For Every Known Flaw",
    "faqs": [
      [
        "What Does A CVE ID Look Like?",
        "CVE, then the year, then a sequence number of at least four digits — for example CVE-2021-44228. The year reflects when the ID was reserved or published, not necessarily when the flaw was introduced or discovered, and sequence numbers can run to five or more digits."
      ],
      [
        "Who Runs The CVE Program And Is It Stable?",
        "MITRE operates it as Secretariat with sponsorship from CISA. In April 2025 a funding lapse was averted at the last minute and the CVE Foundation was formed as a contingency; in March 2026 CISA stated the programme is fully funded, and in September 2025 it published a vision for a 'quality era' focused on record quality."
      ],
      [
        "Is CERT-In A CVE Numbering Authority?",
        "Yes. CERT-In is a CNA whose scope covers vulnerabilities it coordinates and vulnerabilities in products designed, developed or manufactured in India. Indian researchers and vendors can work with CERT-In under its responsible vulnerability disclosure policy to obtain CVE IDs."
      ],
      [
        "What Is The Difference Between CVE And NVD?",
        "The CVE List, published by the CVE Program, is the authoritative record of IDs and descriptions. The National Vulnerability Database, run by NIST, consumes CVE records and adds analysis such as CVSS scores and product identifiers. NVD enrichment has run behind since 2024, which is why CISA now adds data as an ADP."
      ],
      [
        "Does Every CVE Need To Be Patched Immediately?",
        "No. Volumes are far too high for that. Prioritise using CVSS severity, EPSS exploitation probability, CISA KEV status and whether the asset is internet-facing or business-critical. A small fraction of CVEs are ever exploited; those deserve the fastest response."
      ],
      [
        "How Does XcellHost Help With CVE Management?",
        "We maintain your asset inventory, scan continuously, map every finding to a CVE ID, enrich it with CVSS, EPSS, KEV and CERT-In advisory data, drive prioritised patching, and report open exposure monthly in a format RBI, SEBI and ISO 27001 auditors accept."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CVE Program — operated by MITRE, sponsored by CISA"
      ],
      [
        "Version",
        "CVE Record Format JSON 5.x"
      ],
      [
        "Released",
        "Programme launched 1999; CVE List published continuously"
      ],
      [
        "Applies To",
        "Any publicly disclosed vulnerability in released software or hardware"
      ],
      [
        "Obligation",
        "Voluntary — de facto required for vendors, scanners and advisories"
      ],
      [
        "Assurance",
        "None; a CVE Record is published and maintained by its CNA"
      ]
    ],
    "intro": "Explore everything that links to a CVE Record. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "CVE is not an Indian regulation, but it is the vocabulary Indian regulators and CERT-In use. CERT-In is itself a CVE Numbering Authority, and its advisories, vulnerability notes and incident directions all assume you can map a CVE ID to your own systems quickly."
  },
  "crest-penetration-testing": {
    "name": "CREST standards",
    "tagline": "CREST accredits security testing companies and certifies individual testers, and publishes the Defensible Penetration Test guidance on how tests should be scoped, delivered and signed off. XcellHost runs its testing to these standards so Indian buyers get the same rigour global regulators expect.",
    "overview": "CREST is an international, not-for-profit accreditation and certification body for the cybersecurity industry. It accredits companies that provide penetration testing, red teaming, incident response, SOC and threat intelligence services, certifies individual testers through examinations, and publishes guidance — notably the CREST Defensible Penetration Test — that defines how a penetration test should be scoped, delivered, reported and signed off.",
    "highlight": "Penetration Testing You Can Defend",
    "faqs": [
      [
        "What Is A CREST Penetration Test?",
        "A penetration test delivered by a CREST-accredited company, usually by CREST-certified testers, following the CREST Defensible Penetration Test guidance: agreed scope and objectives, a documented methodology, a report with evidence and recommendations, and formal sign-off by both parties."
      ],
      [
        "Is CREST Accreditation Required In India?",
        "No. Indian regulators rely on CERT-In empanelment for mandated audits. CREST is relevant when your customers or their regulators abroad require it, or when you want an internationally recognised quality bar for the testing you buy."
      ],
      [
        "Is XcellHost A CREST Member?",
        "XcellHost is not a CREST-accredited member company. We align our testing methodology, scoping, reporting and sign-off process to CREST's Defensible Penetration Test guidance, and where a client needs a CREST-accredited report we work alongside an accredited provider."
      ],
      [
        "What CREST Certifications Do Penetration Testers Hold?",
        "The career path runs from CREST Practitioner Security Analyst (CPSA) to CREST Registered Penetration Tester (CRT) and CREST Certified Tester in infrastructure or applications. Red-team specialists and managers have their own certified-level exams, all delivered through examination centres."
      ],
      [
        "What Is The CREST OVS Programme?",
        "The OWASP Verification Standard programme accredits companies for web and mobile application testing performed against OWASP ASVS and MASVS. It gives buyers a consistent way to know what level of application security coverage a test actually delivered."
      ],
      [
        "How Does XcellHost Help With CREST-Standard Testing?",
        "We scope every test with written objectives, run it to a documented methodology with experienced testers, report with evidence and risk ratings, and close with formal sign-off and retest. For intelligence-led exercises we follow CBEST-style phases suited to Indian BFSI clients."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "CREST International (not-for-profit)"
      ],
      [
        "Version",
        "CREST Defensible Penetration Test guidance (current edition)"
      ],
      [
        "Released",
        "August 2022 (Defensible Penetration Test)"
      ],
      [
        "Applies To",
        "Security testing providers and their clients worldwide"
      ],
      [
        "Obligation",
        "Voluntary — required by some regulators abroad; not mandated in India"
      ],
      [
        "Assurance",
        "Company accreditation, individual certification, signed-off test"
      ]
    ],
    "intro": "Explore cREST's penetration tester career ladder. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "CREST accreditation is not required by any Indian regulator; CERT-In empanelment is India's formal scheme for security auditors. CREST matters in India mainly because Indian exporters serve regulated clients abroad, and because its defensible-test approach is a practical quality bar for any VAPT bought in India."
  },
  "nist-sp-800-115": {
    "name": "NIST SP 800-115",
    "tagline": "The US government's technical guide to planning, running and reporting security tests, from document reviews to full penetration tests. XcellHost runs its VAPT and red-team engagements on this method, so every finding is repeatable, evidenced and ready for Indian auditors and regulators.",
    "overview": "NIST SP 800-115, the Technical Guide to Information Security Testing and Assessment, is a free guide from the US National Institute of Standards and Technology on how to plan, execute and report technical security tests. It groups techniques into review, target identification and analysis, and target vulnerability validation, describes a four-phase penetration testing method, and explains how to handle findings, data and legal considerations.",
    "highlight": "Security Testing Done By The Book",
    "faqs": [
      [
        "Is NIST SP 800-115 Still Current?",
        "Yes. The September 2008 edition remains the published version and NIST has not issued a revision. Its lifecycle and technique categories are still the reference most testing providers cite, usually paired with newer technical guides such as OWASP WSTG for application-specific test cases."
      ],
      [
        "What Are The Four Phases Of Penetration Testing In SP 800-115?",
        "Planning, discovery, attack and reporting. Planning sets scope and rules, discovery finds hosts and weaknesses, attack validates them by gaining access and escalating privileges, and reporting turns results into mitigations. New information found during the attack phase feeds back into discovery."
      ],
      [
        "Is SP 800-115 Mandatory In India?",
        "No. No Indian law or regulator mandates it by name. However, RBI, SEBI and CERT-In all expect VAPT to be performed to a recognised methodology, and SP 800-115 is the one most Indian auditors and testing firms reference when writing scope."
      ],
      [
        "How Is SP 800-115 Different From A Vulnerability Scan?",
        "A scan is one technique within the guide's target identification family. SP 800-115 adds reviews of configurations and logs, manual validation of findings through penetration testing, and the planning, legal and reporting steps that make the result usable as evidence."
      ],
      [
        "Does SP 800-115 Cover Cloud And Application Testing?",
        "It predates modern cloud platforms, but its lifecycle applies to any target, and Appendix C covers application security testing. In practice XcellHost combines it with OWASP WSTG, ASVS and cloud provider testing policies to cover web, API and cloud workloads."
      ],
      [
        "How Does XcellHost Use SP 800-115?",
        "Every XcellHost VAPT engagement follows the guide's planning, execution and post-testing structure, uses its rules of engagement template, and reports findings with evidence, root cause and mitigation. Reports are formatted so CERT-In empanelled auditors, RBI and SEBI examiners can accept them as evidence."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "SP 800-115 (original edition; no revision issued)"
      ],
      [
        "Released",
        "September 2008"
      ],
      [
        "Applies To",
        "Any organisation testing its own or a client's systems"
      ],
      [
        "Obligation",
        "Voluntary — referenced in contracts and audit scopes worldwide"
      ],
      [
        "Assurance",
        "No certificate; the test report and evidence are the deliverable"
      ]
    ],
    "intro": "Explore the four phases of a penetration test. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "SP 800-115 is not mandated by any Indian regulator, but it is the methodology most Indian testing providers and auditors reference when a regulation asks for VAPT without specifying how. Using it makes your test reports easier to defend in front of CERT-In empanelled auditors and sector regulators."
  },
  "owasp-wstg": {
    "name": "OWASP WSTG",
    "tagline": "The Web Security Testing Guide is the open, community-maintained methodology that defines what a thorough web application penetration test covers, test by test. XcellHost runs its web and API assessments to the WSTG so your report stands up to customers, CERT-In empanelled auditors and regulators.",
    "overview": "The OWASP Web Security Testing Guide (WSTG) is a free, open methodology for testing the security of web applications and web services. Its stable release, version 4.2, organises its individual tests, each with its own identifier, into twelve categories, from information gathering and configuration through authentication, session management, input validation and business logic to client-side and API testing. Identifiers such as WSTG-ATHN-01 let a report show exactly what was covered.",
    "highlight": "Web Application Testing Done The Complete Way",
    "faqs": [
      [
        "Is The OWASP WSTG Mandatory In India?",
        "It is not a legal requirement, but CERT-In's July 2025 audit policy guidelines name the WSTG as a reference standard for web application audits, and RBI and SEBI expect regular application VAPT. A WSTG-based test is the practical way to meet those expectations."
      ],
      [
        "What Is The Difference Between The WSTG And The OWASP Top 10?",
        "The Top 10 is an awareness list of the most common risk categories. The WSTG is a full testing methodology with dozens of individual, identified tests across twelve categories. CERT-In's guidelines specifically say limited lists such as the Top 10 should not be treated as audit standards."
      ],
      [
        "Which WSTG Version Should A Test Follow?",
        "Version 4.2 is the current stable release and the one most reports cite. Version 5.0 is in active development on GitHub with expanded API and other tests; good testers draw on the latest content while reporting against stable identifiers."
      ],
      [
        "How Long Does A WSTG-Based Web Application Test Take?",
        "A typical application with a few user roles takes two to three weeks of testing plus a week for reporting, depending on size, number of roles and complexity of business logic. Large platforms are usually split into modules."
      ],
      [
        "Does The WSTG Cover APIs And Mobile Apps?",
        "Version 4.2 introduced an API Testing category starting with GraphQL, and v5 is expanding it. Mobile applications are covered by OWASP's separate Mobile Application Security Testing Guide, which CERT-In's guidelines also cite for mobile audits."
      ],
      [
        "How Does XcellHost Test Against The WSTG?",
        "Our testers work through all twelve categories manually with every role, map every test and finding to its WSTG identifier, provide proof-of-concept evidence and fix guidance, retest, and package the report for your CERT-In empanelled auditor, regulator or customer. We do not claim CERT-In empanelment ourselves."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OWASP Foundation"
      ],
      [
        "Version",
        "WSTG v4.2 (stable); v5.0 in development"
      ],
      [
        "Released",
        "December 2020 (v4.2)"
      ],
      [
        "Applies To",
        "Any web application or web API, in any sector"
      ],
      [
        "Obligation",
        "Voluntary; referenced by CERT-In as an audit standard"
      ],
      [
        "Assurance",
        "Test report mapped to WSTG identifiers; no certificate"
      ]
    ],
    "intro": "Explore the twelve WSTG v4.2 test categories. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The WSTG is voluntary, but it is one of the few testing methodologies an Indian regulator names. CERT-In's 2025 audit policy guidelines cite it for web application testing, and Indian financial and securities regulators expect regular application VAPT that a WSTG-based test satisfies."
  },
  "osstmm": {
    "name": "OSSTMM",
    "tagline": "The Open Source Security Testing Methodology Manual from ISECOM tests operational security across five channels and turns the results into a numeric attack-surface score. XcellHost applies OSSTMM 3 to network, wireless, physical and human testing, producing STAR-style reports Indian auditors and regulators recognise.",
    "overview": "OSSTMM, the Open Source Security Testing Methodology Manual, is a peer-reviewed methodology from ISECOM for testing operational security in a repeatable, measurable way. Version 3 organises tests into five channels: Human, Physical, Wireless, Telecommunications and Data Networks. Instead of a list of vulnerabilities, it measures the attack surface as a RAV score built from porosity, controls and limitations, and records the result in a Security Test Audit Report (STAR).",
    "highlight": "Security Testing You Can Measure, Not Just Describe",
    "faqs": [
      [
        "Is OSSTMM Mandatory In India?",
        "No, but it is explicitly cited. CERT-In's July 2025 Comprehensive Cyber Security Audit Policy Guidelines name OSSTMM 3 as a comprehensive standard auditors should use, so an OSSTMM-based test aligns well with what empanelled auditors and regulated entities are expected to produce."
      ],
      [
        "What Is The Current Version Of OSSTMM?",
        "OSSTMM 3 (release 3.02), published by ISECOM in December 2010, is the current public version and the one CERT-In cites. ISECOM has discussed a successor for years; check ISECOM's site for its status rather than assuming a newer edition is final."
      ],
      [
        "What Is A RAV Score?",
        "The RAV is OSSTMM's measurement of attack surface: the amount of uncontrolled interaction with a target, calculated from porosity (visibility, access and trust), the operational controls in place and the limitations found. It lets you compare scopes and track change over time."
      ],
      [
        "What Is A STAR Report?",
        "STAR stands for Security Test Audit Report. It is OSSTMM's standard summary of a test: the scope, channels, vectors, tests performed, metrics and results, written so a later test or another organisation's results can be compared with it."
      ],
      [
        "How Does OSSTMM Differ From PTES And The OWASP WSTG?",
        "PTES describes how to run a penetration test from scoping to reporting. The WSTG is specific to web applications. OSSTMM is broader, covering people, premises, wireless, telecoms and networks, and adds a metric so results are measurable rather than only descriptive."
      ],
      [
        "How Does XcellHost Use OSSTMM?",
        "We scope the channels that matter to you, run the test modules, classify every limitation by effect, score controls and calculate the RAV, then deliver a STAR-format report with remediation. Where a formal CERT-In audit is required we prepare the evidence and work alongside your empanelled auditor."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "ISECOM (Institute for Security and Open Methodologies)"
      ],
      [
        "Version",
        "OSSTMM 3 (3.02)"
      ],
      [
        "Released",
        "December 2010"
      ],
      [
        "Applies To",
        "Operational security of networks, wireless, telecoms, premises and people"
      ],
      [
        "Obligation",
        "Voluntary; cited by CERT-In as a reference for audits"
      ],
      [
        "Assurance",
        "STAR (Security Test Audit Report) with RAV score; no certificate"
      ]
    ],
    "intro": "Explore the five OSSTMM channels around one method. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "OSSTMM is voluntary, but it is one of the methodologies an Indian regulator names outright. CERT-In's 2025 audit policy guidelines cite OSSTMM 3 as a comprehensive standard for audits, and Indian financial regulators expect periodic security testing that an OSSTMM-based engagement satisfies."
  },
  "ptes": {
    "name": "PTES",
    "tagline": "The Penetration Testing Execution Standard defines the seven phases every professional penetration test should pass through, from pre-engagement to reporting, so buyers and testers agree on what good looks like. XcellHost runs network, application and cloud penetration tests to the PTES structure with reports built for Indian regulators and customers.",
    "overview": "PTES, the Penetration Testing Execution Standard, is a community-written standard that sets out what a penetration test must include to be considered complete. It defines seven phases: Pre-engagement Interactions, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post Exploitation and Reporting. Companion Technical Guidelines describe tools and techniques for each phase. It was started in 2009 by practitioners who wanted buyers to be able to demand a baseline of quality from testers.",
    "highlight": "A Penetration Test You Can Hold To A Standard",
    "faqs": [
      [
        "Is PTES Mandatory In India?",
        "No. PTES is a voluntary community standard and no Indian regulator names it. It is widely used by Indian testers because it defines a complete test, which is what CERT-In's audit policy, RBI and SEBI expect when they ask for penetration testing rather than scanning."
      ],
      [
        "What Are The Seven PTES Phases?",
        "Pre-engagement Interactions, Intelligence Gathering, Threat Modeling, Vulnerability Analysis, Exploitation, Post Exploitation and Reporting. Each phase feeds the next, and the accompanying Technical Guidelines describe tools and techniques testers can use in each."
      ],
      [
        "Is PTES Still Current?",
        "The standard itself is version 1.0 and its website has not changed materially since 2014, yet the seven-phase structure remains the common baseline for penetration testing. Testers pair it with current references such as MITRE ATT&CK and the OWASP testing guides for technique detail."
      ],
      [
        "What Is The Difference Between A PTES Test And A Vulnerability Scan?",
        "A scan lists possible weaknesses from a tool. A PTES test validates them, models the threats that matter, exploits what is exploitable to prove impact, and reports to both executives and engineers. CERT-In's guidelines specifically discourage tools-only testing."
      ],
      [
        "How Does PTES Compare With OSSTMM And NIST SP 800-115?",
        "PTES describes the flow of a penetration test. OSSTMM is a broader security-testing methodology with its own metrics and is named in CERT-In's audit policy. NIST SP 800-115 is a US government technical guide to testing and assessment. Many testers combine all three."
      ],
      [
        "How Does XcellHost Run PTES-Aligned Tests?",
        "Every engagement starts with written scope and rules of engagement, moves through reconnaissance, threat modelling, validated analysis and controlled exploitation, and ends with executive and technical reports mapped to CERT-In, RBI and SEBI expectations, followed by retest. We work alongside your CERT-In empanelled auditor where a formal audit is required."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "PTES community (independent security practitioners)"
      ],
      [
        "Version",
        "1.0 with accompanying Technical Guidelines"
      ],
      [
        "Released",
        "Developed 2009 onward; site last updated 2014"
      ],
      [
        "Applies To",
        "Any penetration test: network, application, wireless, physical, social"
      ],
      [
        "Obligation",
        "Voluntary; widely expected as the baseline for a professional test"
      ],
      [
        "Assurance",
        "Test report with executive and technical sections; no certificate"
      ]
    ],
    "intro": "Explore the seven PTES phases in sequence. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator names PTES, and CERT-In's audit policy guidelines cite other methodologies for specific audit types. PTES remains the structure most Indian penetration testers and buyers use for network and infrastructure tests, and it fits the comprehensive, validated testing those guidelines call for."
  },
  "safecode": {
    "name": "SAFECode",
    "tagline": "SAFECode is the non-profit forum where major software companies publish the secure development practices they actually use, from the Fundamental Practices guide to the newer Secure by Design guidance. XcellHost turns that guidance into a working programme for Indian development teams, with the evidence customers and auditors ask for.",
    "overview": "SAFECode is a global non-profit forum, founded in 2007, in which large software vendors share the secure development practices they use in their own products. Its best-known publication, Fundamental Practices for Secure Software Development (third edition, 2018), sets out practices from security control definition and design through secure coding, third-party components, testing, findings management and vulnerability response. Its newer Secure by Design guide, written with CIS, builds on the NIST SSDF.",
    "highlight": "Secure Development As The Big Vendors Do It",
    "faqs": [
      [
        "Is SAFECode A Standard Or A Certification?",
        "Neither. SAFECode is a non-profit industry forum that publishes free guidance. There is no SAFECode certificate; organisations adopt the practices and show conformance through their own evidence, or through frameworks such as the NIST SSDF that reference SAFECode's work."
      ],
      [
        "Is SAFECode Still Active?",
        "Yes. SAFECode continues to publish and run training. Recent work includes the Secure by Design developer guide produced with CIS in 2025, updated to version 1.1 in 2026 with new AI guidance, and commentary on the EU Cyber Resilience Act and software attestation."
      ],
      [
        "Is SAFECode Guidance Mandatory In India?",
        "No. No Indian regulator requires SAFECode practices. It is relevant because the practices cover what CERT-In's audit policy and BOM guidelines, RBI and SEBI expect from secure development: code review, component management, SBOMs and vulnerability response."
      ],
      [
        "What Is In The Fundamental Practices Guide?",
        "The third edition, published in March 2018, covers application security control definition, design, secure coding, third-party component risk, testing and validation, managing security findings, vulnerability response and disclosure, and how to plan and roll out the practices."
      ],
      [
        "How Does SAFECode Relate To The NIST SSDF And ETSI?",
        "NIST's SSDF cites SAFECode as a reference, and SAFECode's Secure by Design guide with CIS is built on the SSDF. That guide's content also formed the basis of an ETSI software security development standard, giving the practices wider international recognition."
      ],
      [
        "How Does XcellHost Help With SAFECode Practices?",
        "We assess your lifecycle against the practice areas, set up threat modelling, coding standards and code review, automate component scanning and SBOMs in your pipeline, run release testing, and operate findings management and vulnerability response with evidence ready for customers and auditors."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "SAFECode (Software Assurance Forum for Excellence in Code)"
      ],
      [
        "Version",
        "Fundamental Practices 3rd ed.; Secure by Design guide v1.1"
      ],
      [
        "Released",
        "March 2018 (Fundamental Practices); July 2026 (guide v1.1)"
      ],
      [
        "Applies To",
        "Any organisation that develops or buys software"
      ],
      [
        "Obligation",
        "Voluntary; not required by any regulator"
      ],
      [
        "Assurance",
        "No certificate; self-assessment against the practices"
      ]
    ],
    "intro": "Explore core practice areas of SAFECode's Fundamental Practices. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "SAFECode guidance has no legal standing in India and no regulator cites it by name. It is useful here because it translates the secure development, SBOM and vulnerability response expectations of CERT-In, RBI and SEBI into practices engineers can actually follow."
  },
  "bsimm": {
    "name": "BSIMM",
    "tagline": "The Building Security In Maturity Model records what more than a hundred real software security initiatives actually do, so you can see where you stand. XcellHost runs BSIMM-style assessments, builds the missing activities and shows the board a scorecard that improves year on year.",
    "overview": "BSIMM, the Building Security In Maturity Model, is a data-driven benchmark of software security programmes. Instead of prescribing what you should do, it records the activities that participating firms actually perform, grouped into four domains and twelve practices. An assessment scores which of the 128 activities your organisation performs and plots the result against the participant pool, so you can see which practices lag and what peers in your sector do next.",
    "highlight": "Measure Software Security Against The Real World",
    "faqs": [
      [
        "Is BSIMM Mandatory In India?",
        "No. BSIMM is a voluntary benchmark with no regulatory standing in India. Indian firms use it because global customers and parent companies measure software security programmes with it, and because its practices organise the secure development evidence CERT-In, RBI and SEBI increasingly expect."
      ],
      [
        "What Is The Latest BSIMM Edition?",
        "BSIMM16, released by Black Duck in February 2026, draws on data from 111 participating organisations and describes 128 activities across twelve practices. Its headline themes were AI-assisted development, SBOM adoption driven by regulation, and continuous, role-specific developer training."
      ],
      [
        "What Is The Difference Between BSIMM And OWASP SAMM?",
        "BSIMM observes and records what real organisations do, then benchmarks you against them. SAMM prescribes maturity levels you should aim for and is free to self-assess. Many organisations use SAMM to plan and BSIMM to compare with peers."
      ],
      [
        "Can XcellHost Give Us An Official BSIMM Score?",
        "Official BSIMM assessments and inclusion in the data pool are run by Black Duck. XcellHost performs BSIMM-style assessments against the published activities, builds the programme, and prepares you so an official assessment, if you want one, reflects a mature initiative."
      ],
      [
        "How Long Does A BSIMM-Style Assessment Take?",
        "For a mid-size organisation, interviews, evidence collection and scoring typically take three to five weeks. The longer effort is building the missing activities, which usually runs across several quarters depending on how many practices need work."
      ],
      [
        "How Does XcellHost Help With BSIMM?",
        "We assess your initiative against the twelve practices, benchmark the scorecard, then deliver the gaps: training, secure design patterns, code review and testing in the pipeline, penetration testing, production monitoring and vulnerability management, with a vCISO reporting progress to the board."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Black Duck (formerly Synopsys Software Integrity Group)"
      ],
      [
        "Version",
        "BSIMM16"
      ],
      [
        "Released",
        "February 2026"
      ],
      [
        "Applies To",
        "Any organisation with a software security initiative"
      ],
      [
        "Obligation",
        "Voluntary benchmark; not required by any regulator"
      ],
      [
        "Assurance",
        "Assessment scorecard; no certificate"
      ]
    ],
    "intro": "Explore the four BSIMM domains, scored like a scorecard. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator requires BSIMM, and no Indian body certifies against it. Its value in India is as the yardstick global customers and parent companies use, and as a structure for the secure development and SBOM expectations CERT-In, RBI and SEBI now set."
  },
  "nist-ssdf": {
    "name": "NIST SSDF",
    "tagline": "A compact set of secure development practices that fits any development lifecycle, from waterfall to DevOps, and that US federal buyers now ask software suppliers to attest to. XcellHost maps your pipeline to the SSDF, closes the gaps and keeps the evidence flowing release after release.",
    "overview": "The NIST Secure Software Development Framework (SSDF), published as NIST SP 800-218, is a set of high-level secure development practices that any software producer can fold into its own lifecycle. It groups 19 practices and 42 tasks into four areas: Prepare the Organization, Protect the Software, Produce Well-Secured Software and Respond to Vulnerabilities. It is outcome-based, tool-neutral and is the reference behind the US government's secure software attestation form.",
    "highlight": "Security Built Into Every Release",
    "faqs": [
      [
        "Is The NIST SSDF Mandatory In India?",
        "No Indian regulator mandates the SSDF. It matters because US federal buyers require an SSDF-based attestation from software producers, and because CERT-In's SBOM guidelines and audit policy ask for practices the SSDF already organises, such as SBOMs and source code review."
      ],
      [
        "What Is The Current SSDF Version?",
        "Version 1.1, published as NIST SP 800-218 in February 2022, is the current final version. NIST released a draft version 1.2 (SP 800-218 Revision 1) in December 2025 adding practices on continuous improvement and reliable software updates; check NIST's site for its final status."
      ],
      [
        "What Is The CISA Secure Software Attestation Form?",
        "It is a common self-attestation form that producers of software used by US federal agencies sign, confirming they follow a defined subset of SSDF tasks. The CEO or a designated employee signs it, so the evidence behind it has to be real."
      ],
      [
        "Does The SSDF Cover AI Development?",
        "Yes. NIST SP 800-218A, published in July 2024, is an SSDF community profile for generative AI and dual-use foundation models. It adds AI-specific tasks on data, model and training-pipeline security on top of the v1.1 practices."
      ],
      [
        "How Does The SSDF Relate To BSIMM And OWASP SAMM?",
        "The SSDF says what practices to perform; BSIMM and SAMM measure how mature those practices are. NIST publishes mappings between them, so a team can run the SSDF as its checklist and use SAMM or BSIMM to benchmark progress."
      ],
      [
        "How Does XcellHost Help With The SSDF?",
        "We assess your pipeline against all 42 tasks, write the missing policies, build the tooling into your CI/CD through DevSecOps as a Service, run code review and penetration testing, and package the evidence so you can attest to customers with confidence."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "SSDF v1.1 (SP 800-218); v1.2 draft under revision"
      ],
      [
        "Released",
        "February 2022 (v1.1); v1.2 draft December 2025"
      ],
      [
        "Applies To",
        "Any organisation that builds, buys or integrates software"
      ],
      [
        "Obligation",
        "Voluntary; attestation required to sell software to US federal agencies"
      ],
      [
        "Assurance",
        "Self-attestation (CISA common form) or customer assessment"
      ]
    ],
    "intro": "Explore the four SSDF practice groups. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "The SSDF is not mandated by any Indian regulator, but it is the framework Indian software exporters are measured against by US buyers, and its practices line up with what CERT-In, RBI and SEBI now expect from application owners."
  },
  "owasp-mobile-top-10": {
    "name": "Mobile Top 10",
    "tagline": "OWASP's ranked list of the ten most serious security risks in iOS and Android apps, refreshed in 2024 for the first time since 2016 with credential misuse and supply chain at the top. XcellHost tests your apps and APIs against every category and helps developers close them.",
    "overview": "The OWASP Mobile Top 10 is a free awareness list from the OWASP Foundation that ranks the ten most critical security risks in mobile applications. The 2024 final release, the first update since 2016, starts with Improper Credential Usage and Inadequate Supply Chain Security and ends with Insufficient Cryptography. It is a prioritisation tool: it tells developers and testers where mobile apps usually fail, while the companion MASVS standard says what to verify.",
    "highlight": "The Mobile App Risks That Matter Most",
    "faqs": [
      [
        "What Changed In The OWASP Mobile Top 10 2024?",
        "The 2024 final release replaced the 2016 list. Improper Credential Usage and Inadequate Supply Chain Security are new at the top, Inadequate Privacy Controls and Security Misconfiguration were added, and older entries such as insecure data storage and insufficient cryptography moved down the list."
      ],
      [
        "Is The Mobile Top 10 Mandatory In India?",
        "No law requires it. RBI's digital payment directions refer regulated entities to OWASP-MASVS, CERT-In's 2025 audit guidelines bring mobile audits into scope, and BIS IS 17737 (Part 4) cites the list. In practice, Indian mobile app test reports are organised around it."
      ],
      [
        "Mobile Top 10 Or MASVS — Which Should We Use?",
        "Both. The Mobile Top 10 tells you where mobile apps usually fail and is ideal for prioritising and training. MASVS is the standard you verify against, with MASTG test cases and MAS profiles. CERT-In's guidelines make the same point: Top 10 lists alone are not audit standards."
      ],
      [
        "Does Testing The App Cover The Back End?",
        "Not on its own. Several categories — credential usage, authentication and authorisation, communication — depend on the APIs behind the app. A proper mobile assessment tests the app on device and the APIs it calls, which is how XcellHost scopes mobile engagements."
      ],
      [
        "What Are The Six Watch-List Risks?",
        "OWASP noted six risks that did not make the 2024 list but may be considered in future: Data Leakage, Hardcoded Secrets, Insecure Access Control, Path Overwrite and Path Traversal, Unprotected Endpoints such as deep links and services, and Unsafe Sharing."
      ],
      [
        "How Does XcellHost Help With The Mobile Top 10?",
        "We test iOS and Android apps on real devices against all ten risks, test the APIs behind them, review code for secrets and cryptography, add SDK and signing controls to your pipeline, and map privacy findings to the DPDP Act — with reports suited to RBI, SEBI and CERT-In empanelled audits."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OWASP Foundation (Mobile Top 10 project)"
      ],
      [
        "Version",
        "OWASP Mobile Top 10 — 2024 final release"
      ],
      [
        "Released",
        "2024 (final release; first update since the 2016 list)"
      ],
      [
        "Applies To",
        "Any organisation that publishes or commissions mobile apps"
      ],
      [
        "Obligation",
        "Voluntary; a reference in Indian mobile app testing scopes"
      ],
      [
        "Assurance",
        "No certificate; evidenced through mobile penetration test reports"
      ]
    ],
    "intro": "Explore oWASP Mobile Top 10 — 2024 final release. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian law names the Mobile Top 10, but with India's digital economy running through apps, regulators expect mobile app security testing and auditors use this list to explain findings. Indian regulators now point to fuller standards, with the Top 10 as the way in."
  },
  "owasp-masvs": {
    "name": "OWASP MASVS",
    "tagline": "The Mobile Application Security Verification Standard defines what a secure iOS or Android app must do, in eight control groups covering storage, cryptography, authentication, networking, platform use, code quality, resilience and privacy. XcellHost tests and evidences your apps against it, in the form RBI and CERT-In auditors expect.",
    "overview": "OWASP MASVS, the Mobile Application Security Verification Standard, is the OWASP standard that defines the security requirements a mobile app should meet. Version 2.1.0 groups 24 controls into eight categories — MASVS-STORAGE, CRYPTO, AUTH, NETWORK, PLATFORM, CODE, RESILIENCE and PRIVACY. Apps are tested against one of three MAS profiles (L1, L2 or R) using the companion Mobile Application Security Testing Guide (MASTG) and weakness catalogue (MASWE).",
    "highlight": "The Security Standard For Mobile Apps",
    "faqs": [
      [
        "What Are The MAS Testing Profiles?",
        "MASVS v2 replaced the old L1/L2/R levels with MAS Testing Profiles: MAS-L1 for standard security, MAS-L2 for apps handling sensitive data, and MAS-R for resilience against reverse engineering and tampering, which can be combined with either. Profiles decide which MASTG tests apply."
      ],
      [
        "What Changed In MASVS V2?",
        "Version 2.0 simplified the standard into eight abstract control groups and moved detailed test cases into the MASTG, so MASVS states what must be true and MASTG shows how to test it. Version 2.1.0 added MASVS-PRIVACY and a machine-readable CycloneDX format."
      ],
      [
        "Is MASVS Mandatory In India?",
        "Not by statute. RBI's Master Direction on Digital Payment Security Controls directs regulated entities to refer to OWASP-MASVS, and CERT-In audit guidelines reference OWASP's mobile testing guide, so for banks, payment companies and audited entities it is the expected standard."
      ],
      [
        "What Are MASTG And MASWE?",
        "MASTG, the Mobile Application Security Testing Guide, is the manual of test cases and techniques for verifying MASVS controls; its v2.0.0 was released in 2026. MASWE, the Mobile Application Security Weakness Enumeration, catalogues the specific weaknesses each test looks for."
      ],
      [
        "Do We Need MAS-R For Our App?",
        "Usually only for apps where tampering, cloning or reverse engineering causes direct harm: payments, authenticators, DRM, anti-cheat and apps holding high-value secrets. Most business apps are better served by MAS-L2 with strong back-end controls than by client-side hardening alone."
      ],
      [
        "How Does XcellHost Help With MASVS?",
        "We select the right MAS profile, test iOS and Android builds on real devices using MASTG, test the APIs behind them, review code for secrets and cryptography, map privacy findings to the DPDP Act, and provide per-control evidence for RBI, SEBI and CERT-In empanelled audits."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OWASP Foundation (Mobile Application Security project)"
      ],
      [
        "Version",
        "MASVS v2.1.0"
      ],
      [
        "Released",
        "18 January 2024"
      ],
      [
        "Applies To",
        "Native, hybrid and cross-platform apps on iOS and Android"
      ],
      [
        "Obligation",
        "Voluntary; RBI refers digital payment entities to OWASP-MASVS"
      ],
      [
        "Assurance",
        "No OWASP certificate; MASTG-based assessment against a MAS profile"
      ]
    ],
    "intro": "Explore the eight control groups of MASVS v2. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "India is a mobile-first market, and its regulators have noticed. MASVS is not law, but it is the standard RBI names for payment app security and the basis of the mobile testing CERT-In empanelled auditors perform. Meeting it is the practical route to regulatory comfort."
  },
  "owasp-samm": {
    "name": "OWASP SAMM",
    "tagline": "The Software Assurance Maturity Model scores how well an organisation builds secure software across five business functions and fifteen practices, on a three-level scale. XcellHost runs the assessment, sets a realistic target and delivers the DevSecOps, testing and governance work that moves the score.",
    "overview": "OWASP SAMM, the Software Assurance Maturity Model, is an open framework for assessing and improving how an organisation builds secure software. It defines five business functions — Governance, Design, Implementation, Verification and Operations — each with three security practices, giving fifteen practices in all. Every practice has two streams scored on three maturity levels, so the result is a measurable profile and a roadmap rather than a pass-or-fail audit.",
    "highlight": "Measure And Grow Secure Software Maturity",
    "faqs": [
      [
        "What Are The Five SAMM Business Functions?",
        "Governance, Design, Implementation, Verification and Operations. Each contains three security practices — fifteen in total — such as Threat Assessment, Secure Build, Security Testing and Incident Management. Together they cover the full life cycle from strategy to running software in production."
      ],
      [
        "How Is SAMM Scored?",
        "Every practice has two streams, and each stream is assessed against three maturity levels with quality criteria. Answers produce a score per practice that is typically shown as a radar or bar chart, giving a current profile that is compared with a target profile."
      ],
      [
        "Is SAMM Mandatory In India?",
        "No. It is voluntary and no Indian regulator names it. However, RBI expects a secure application life cycle for payment systems and SEBI expects secure development and testing, and SAMM is a recognised way to structure, measure and evidence those practices."
      ],
      [
        "How Long Does A SAMM Assessment Take?",
        "For a single product organisation with a handful of teams, a first assessment usually takes three to four weeks of interviews and evidence review. Larger enterprises with many business units are assessed in waves, often one unit at a time."
      ],
      [
        "SAMM Or NIST SSDF — Which Should We Use?",
        "They complement each other. NIST SSDF lists secure development practices and is often required by US customers; SAMM measures how mature your implementation of such practices is and gives a roadmap. Many organisations map SSDF practices onto SAMM activities and track both."
      ],
      [
        "How Does XcellHost Help With SAMM?",
        "We run the assessment, set a target profile tied to your regulatory and customer needs, then deliver the improvements — DevSecOps pipelines, threat modelling, testing, training and governance — and re-score each year so progress is visible to your board and auditors."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OWASP Foundation (SAMM project)"
      ],
      [
        "Version",
        "SAMM v2.0"
      ],
      [
        "Released",
        "January 2020 (public release of version 2)"
      ],
      [
        "Applies To",
        "Any organisation that builds, integrates or procures software"
      ],
      [
        "Obligation",
        "Voluntary; not mandated by any Indian regulator"
      ],
      [
        "Assurance",
        "Self-assessment or assessor-led scoring; no certificate"
      ]
    ],
    "intro": "Explore maturity scored across five business functions. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates SAMM, and CERT-In's audit guidelines reference the OWASP DevSecOps Maturity Model for pipeline assessments rather than SAMM. SAMM still earns its place: it is the broadest way to show that the secure development practices Indian regulators expect exist and are maturing."
  },
  "owasp-asvs": {
    "name": "OWASP ASVS",
    "tagline": "The Application Security Verification Standard is OWASP's full catalogue of security requirements for web applications and APIs, organised into 17 chapters and three assurance levels. XcellHost uses it to specify, test and evidence application security in a form Indian regulators and global customers accept.",
    "overview": "OWASP ASVS, the Application Security Verification Standard, is a free, open standard that lists the security requirements a web application or API should meet. Version 5.0.0, released in May 2025, organises those requirements into 17 chapters — from encoding and authentication to OAuth, cryptography and logging — and three cumulative levels, so an organisation can pick the assurance level that matches an application's risk and verify it requirement by requirement.",
    "highlight": "A Complete Security Spec For Your Applications",
    "faqs": [
      [
        "What Are The Three ASVS Levels?",
        "Level 1 is the entry point for every application, Level 2 is the recommended target for most applications and anything handling sensitive data, and Level 3 is for applications where a breach would be critical. Each level includes all requirements of the level below."
      ],
      [
        "What Changed In ASVS 5.0?",
        "Version 5.0.0 restructured the standard into 17 chapters, rewrote requirements to be clearer and more testable, added dedicated chapters for OAuth and OIDC and for WebRTC, and rebalanced the three levels. OWASP publishes mappings from 4.0.3 to help teams migrate."
      ],
      [
        "Is ASVS Mandatory In India?",
        "Not by law. RBI's Master Direction on Digital Payment Security Controls directs regulated entities to refer to OWASP-ASVS, and CERT-In's 2025 audit policy lists it as a reference, so for banks, payment companies and audited entities it is effectively the expected standard."
      ],
      [
        "Can An Application Be Certified To ASVS?",
        "OWASP does not issue certificates. Verification is done by a qualified assessor or by the organisation itself, producing a report that states which level is met and the evidence behind it. XcellHost prepares that evidence and works alongside any accredited or empanelled auditor you need."
      ],
      [
        "How Does ASVS Relate To Penetration Testing?",
        "A penetration test finds vulnerabilities; ASVS verification checks that required controls exist and work. Some requirements can be verified from outside, but higher levels also need code, configuration and design review. The two are complementary, and XcellHost reports both against the same requirement list."
      ],
      [
        "How Does XcellHost Help With ASVS?",
        "We classify your applications, select target levels, verify requirements through penetration testing, code review and configuration review, record evidence per requirement, and embed ASVS criteria into your development pipeline so the level is maintained between assessments."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OWASP Foundation (ASVS project)"
      ],
      [
        "Version",
        "ASVS 5.0.0"
      ],
      [
        "Released",
        "May 2025 (at OWASP Global AppSec EU, Barcelona)"
      ],
      [
        "Applies To",
        "Web applications, APIs and the back-end services behind them"
      ],
      [
        "Obligation",
        "Voluntary; RBI payment rules and CERT-In audit policy refer to it"
      ],
      [
        "Assurance",
        "No OWASP certificate; assessor verification or self-attestation"
      ]
    ],
    "intro": "Explore three cumulative verification levels. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "ASVS is not law in India, but it is the application security standard Indian regulators point to most directly. Building to it means the evidence a CERT-In empanelled auditor or an RBI inspector asks for already exists, requirement by requirement."
  },
  "owasp-api-security-top-10": {
    "name": "API Security Top 10",
    "tagline": "The OWASP list of the ten most serious risks in REST, GraphQL and other APIs, from object-level authorisation failures to unsafe third-party API consumption. XcellHost tests your APIs against all ten, protects them at the edge and keeps an inventory so nothing is exposed unknowingly.",
    "overview": "The OWASP API Security Top 10 is a free awareness list from the OWASP Foundation of the ten most critical security risks specific to application programming interfaces. The 2023 edition leads with Broken Object Level Authorization (BOLA) and adds risks such as Unrestricted Access to Sensitive Business Flows and Unsafe Consumption of APIs. It exists because APIs fail differently from web pages: they expose data objects and functions directly, so authorisation and rate-limiting mistakes dominate.",
    "highlight": "Secure The Interfaces Behind Your Business",
    "faqs": [
      [
        "What Is BOLA And Why Is It Number One?",
        "Broken Object Level Authorization happens when an API trusts the object ID a caller sends without checking ownership. It tops the list because it is simple to exploit, hard for scanners to detect and exposes whole datasets one ID at a time."
      ],
      [
        "Is The API Security Top 10 Mandatory In India?",
        "No Indian law names it. But CERT-In's 2025 audit guidelines bring API audits into scope, RBI points payment entities to OWASP standards and requires VAPT, and DPDP Act breach obligations apply to data leaked through APIs. Most Indian API test scopes are built on it."
      ],
      [
        "What Changed Between The 2019 And 2023 Editions?",
        "The 2023 edition merged excessive data exposure and mass assignment into Broken Object Property Level Authorization, and added Unrestricted Access to Sensitive Business Flows, Server Side Request Forgery and Unsafe Consumption of APIs. Injection and insufficient logging dropped off as standalone API entries."
      ],
      [
        "Does An API Gateway Or WAF Solve These Risks?",
        "Partly. Gateways and WAAP handle rate limiting, schema validation and many misconfiguration issues well. They cannot know whether user A should see object B, so authorisation and business-logic flaws still need secure code and manual testing."
      ],
      [
        "How Is API Testing Different From Web App Testing?",
        "API testing works from the specification and traffic rather than the browser, needs several test accounts per role to prove authorisation, and focuses on logic abuse, rate limits and integration trust. XcellHost scopes API tests separately for that reason."
      ],
      [
        "How Does XcellHost Help With The API Security Top 10?",
        "We discover your full API inventory, penetration test it against all ten risks with multi-role authorisation cases, protect production APIs through managed WAAP, review integration code, and monitor API traffic in our 24×7 SOC with reporting mapped to CERT-In and RBI expectations."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OWASP Foundation (API Security Project)"
      ],
      [
        "Version",
        "OWASP API Security Top 10 — 2023 edition"
      ],
      [
        "Released",
        "5 June 2023 (stable release)"
      ],
      [
        "Applies To",
        "Any organisation that exposes, integrates or consumes APIs"
      ],
      [
        "Obligation",
        "Voluntary; expected in API test scopes by Indian regulators, auditors"
      ],
      [
        "Assurance",
        "No certificate; evidenced through API penetration test reports"
      ]
    ],
    "intro": "Explore oWASP API Security Top 10 — 2023 edition. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "India runs some of the largest API ecosystems in the world — UPI, Aadhaar-based services, Account Aggregator, ONDC and GST — and almost every Indian business integrates with several of them. No law names the OWASP API list, but the expectations behind it are now part of regulated testing."
  },
  "owasp-top-10": {
    "name": "OWASP Top 10",
    "tagline": "A data-driven list of the ten most serious categories of web application security risk, refreshed for 2025 with supply chain and error handling added. XcellHost tests, fixes and continuously protects your applications against every category — and reports it in terms your auditors recognise.",
    "overview": "The OWASP Top 10 is a free awareness document from the OWASP Foundation that ranks the ten most critical categories of web application security risk. The 2025 edition is built from testing data covering more than 2.8 million applications and 589 weakness types, with two categories promoted by a community survey. Broken Access Control leads the list, followed by Security Misconfiguration and the new Software Supply Chain Failures.",
    "highlight": "The Web App Risks To Fix First",
    "faqs": [
      [
        "What Changed In The OWASP Top 10 2025 Edition?",
        "Two categories are new: Software Supply Chain Failures (A03) and Mishandling of Exceptional Conditions (A10). Server-Side Request Forgery was merged into Broken Access Control, Security Misconfiguration rose to second place, and the logging category was renamed to stress alerting."
      ],
      [
        "Is The OWASP Top 10 Mandatory In India?",
        "No law makes it mandatory. However, RBI directs payment entities to OWASP standards, SEBI requires regular VAPT, and CERT-In's 2025 audit guidelines treat it as a starting reference rather than a complete audit standard. In practice it appears in almost every Indian application security scope."
      ],
      [
        "Is Passing An OWASP Top 10 Test The Same As Being Secure?",
        "No. The list covers the most common risk categories, not every weakness. CERT-In's audit guidelines say as much. Treat it as the minimum, and use OWASP ASVS or the Web Security Testing Guide for a complete assessment."
      ],
      [
        "How Often Should We Test Against The OWASP Top 10?",
        "At least once a year and after every significant release or architecture change. Regulated entities in banking and securities often need more frequent testing, and internet-facing applications benefit from continuous scanning between manual tests."
      ],
      [
        "Does The OWASP Top 10 Cover APIs And Mobile Apps?",
        "Only partly. OWASP publishes a separate API Security Top 10 and a Mobile Top 10, because APIs and mobile apps fail in different ways — for example object-level authorisation in APIs and insecure storage on devices. Most modern applications need all three lists."
      ],
      [
        "How Does XcellHost Help With The OWASP Top 10?",
        "We run manual, OWASP-mapped penetration tests and code reviews, protect applications with managed WAAP while fixes are made, build scanning into your pipeline, and feed application logs into our 24×7 SOC — with reporting that satisfies Indian regulators and global customers."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "OWASP Foundation (Open Worldwide Application Security Project)"
      ],
      [
        "Version",
        "OWASP Top 10:2025 (eighth edition)"
      ],
      [
        "Released",
        "Release candidate November 2025; final 2025 edition published"
      ],
      [
        "Applies To",
        "Any organisation that builds, buys or runs web applications"
      ],
      [
        "Obligation",
        "Voluntary awareness list; cited in contracts, VAPT scopes and audits"
      ],
      [
        "Assurance",
        "No certificate; evidenced through VAPT reports and code review"
      ]
    ],
    "intro": "Explore the ten risk categories of OWASP Top 10:2025. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian law names the OWASP Top 10, yet it shapes almost every application security test performed in the country. Indian regulators now expect it as a starting point rather than a finishing line — which is exactly how XcellHost uses it."
  },
  "forrester-zero-trust-extended": {
    "name": "Forrester ZTX",
    "tagline": "Forrester coined Zero Trust and later extended it into seven pillars that put data at the centre of security strategy. XcellHost uses the ZTX pillars as a plain-language scorecard for Indian boards, then designs and operates the controls that move each pillar forward.",
    "overview": "Forrester Zero Trust eXtended (ZTX) is the analyst framework that grew out of Forrester's original Zero Trust model, first published by John Kindervag in 2010. ZTX, introduced by Chase Cunningham in 2018, organises Zero Trust into seven pillars: data, networks, people, workloads, devices, visibility and analytics, and automation and orchestration. It is used to shape security strategy and to evaluate vendors, not as a certifiable standard.",
    "highlight": "Where The Zero Trust Vocabulary Came From",
    "faqs": [
      [
        "Who Invented Zero Trust?",
        "The term and model were introduced by Forrester analyst John Kindervag in the 2010 report 'No More Chewy Centers', built on three ideas: access every resource securely regardless of location, enforce least privilege strictly, and inspect and log all traffic."
      ],
      [
        "What Does The X In ZTX Stand For?",
        "eXtended. In 2018 Forrester analyst Chase Cunningham extended the network-centric original into an ecosystem of seven pillars so that Zero Trust covered data, people, workloads and devices as well as networks, plus the visibility and automation needed to run it."
      ],
      [
        "Is Forrester ZTX A Standard We Can Be Certified Against?",
        "No. It is proprietary research from a commercial analyst firm. There is no certification, audit scheme or public specification. Organisations use it to structure strategy and to assess vendors, and turn to NIST SP 800-207 or CISA's model when they need a public reference."
      ],
      [
        "Is Forrester ZTX Recognised By Indian Regulators?",
        "No Indian regulator references ZTX or any specific Zero Trust framework. However, the controls behind each pillar, such as MFA, least privilege, data protection, endpoint security and logging, are what RBI, SEBI and CERT-In require, so the pillars make a practical planning structure."
      ],
      [
        "Does Forrester Still Use The ZTX Name?",
        "Forrester's Zero Trust research has kept evolving; its recent vendor evaluations are published as Zero Trust Platforms Waves and group capabilities under data, workloads, networks, users and devices with visibility and automation. The seven-pillar ZTX structure remains the version most practitioners know."
      ],
      [
        "How Does XcellHost Use ZTX?",
        "We use the seven pillars as the scorecard for Zero Trust assessments and board reporting, then deliver the controls behind each pillar through our identity, access, endpoint, data protection and 24×7 SOC services, mapped to Indian regulatory obligations."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Forrester Research"
      ],
      [
        "Version",
        "ZTX Ecosystem report (2018); Forrester's model keeps evolving"
      ],
      [
        "Released",
        "Zero Trust: September 2010; ZTX: January 2018"
      ],
      [
        "Applies To",
        "Any organisation; used to plan strategy and assess vendors"
      ],
      [
        "Obligation",
        "Voluntary — proprietary analyst research, not a standard or regulation"
      ],
      [
        "Assurance",
        "No certificate; self-assessment against the pillars"
      ]
    ],
    "intro": "Explore six pillars built around the data pillar. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "ZTX is proprietary analyst research with no legal standing in India, and no regulator references it. Its usefulness here is as an organising lens: Indian regulatory requirements are scattered across circulars, and the seven pillars give a single structure to plan and report against."
  },
  "google-beyondcorp": {
    "name": "Google BeyondCorp",
    "tagline": "Google's own Zero Trust implementation, built after 2011 and described in a series of public papers: every application is reached through an access proxy that checks who you are and how healthy your device is. XcellHost brings the same model to Indian organisations using Google and Microsoft tooling.",
    "overview": "BeyondCorp is Google's model for Zero Trust access, created to let its employees work from any network without a VPN. Instead of trusting the corporate network, every request to an internal application passes through an access proxy that authenticates the user, checks the device against an inventory and assigns a trust tier before granting access. Google described the design in a series of papers from 2014 and now sells the capability as Chrome Enterprise Premium.",
    "highlight": "Access By Identity And Device, Not By Network",
    "faqs": [
      [
        "What Is Google BeyondCorp?",
        "BeyondCorp is Google's approach to Zero Trust access, developed for its own employees so that work from any network is as secure as work from the office. Access to each application is decided per request on user identity and device state, enforced by an access proxy rather than by network location."
      ],
      [
        "Why Did Google Create BeyondCorp?",
        "After serious intrusions against Google around 2009 and 2010, Google concluded that a trusted internal network was itself a liability. From 2011 it rebuilt employee access so that no network is trusted, and published the design from 2014 so others could follow."
      ],
      [
        "Is BeyondCorp A Product I Can Buy?",
        "The model is freely described in Google's papers. Google's commercial version was sold as BeyondCorp Enterprise and is now offered as Chrome Enterprise Premium, combining context-aware access, Identity-Aware Proxy and browser-based data protection. Equivalent patterns can be built with other vendors' tools."
      ],
      [
        "Does BeyondCorp Replace A VPN?",
        "Yes, that is its purpose. Applications are published through an identity-aware proxy and reached directly over the internet, so remote users no longer need a VPN tunnel into a trusted network. Most organisations run both in parallel during migration."
      ],
      [
        "Is BeyondCorp Relevant To Indian Regulations?",
        "Indirectly. No Indian regulator names it, but RBI, SEBI and CERT-In expectations on MFA, least privilege, remote-access control and audit logging are met naturally by a BeyondCorp-style design, and it is a good fit for India's large distributed workforces."
      ],
      [
        "How Does XcellHost Help With BeyondCorp?",
        "We build the device inventory and identity foundation, publish your applications through an access proxy using Google, Microsoft or SASE tooling, define trust tiers, migrate users off VPN in phases, and monitor access logs from our 24×7 SOC in Mumbai."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "Google (research papers and Google Cloud)"
      ],
      [
        "Version",
        "Published papers 2014 onwards; product: Chrome Enterprise Premium"
      ],
      [
        "Released",
        "First paper December 2014 in USENIX ;login:"
      ],
      [
        "Applies To",
        "Any organisation; originally Google's own workforce access"
      ],
      [
        "Obligation",
        "Voluntary — a published model, not a standard or regulation"
      ],
      [
        "Assurance",
        "No certificate; internal architecture review and access-policy testing"
      ]
    ],
    "intro": "Explore signals feed the proxy that gates every app. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "BeyondCorp is a published model rather than a standard, and nothing in Indian law names it. Its value in India is practical: large distributed workforces, personal devices and strict regulator expectations on access control are exactly the problems it was designed to solve."
  },
  "nist-sp-800-207-zero-trust": {
    "name": "NIST SP 800-207",
    "tagline": "The US reference publication that defines what Zero Trust means: seven tenets, a policy engine that decides every access, and enforcement points that carry it out. XcellHost designs, builds and operates Zero Trust access for Indian enterprises against SP 800-207, with RBI, SEBI and CERT-In expectations mapped in.",
    "overview": "NIST SP 800-207 is the US National Institute of Standards and Technology's definition of Zero Trust Architecture. It replaces trust based on network location with a per-request access decision: a Policy Engine and Policy Administrator evaluate identity, device posture, threat intelligence and policy, and a Policy Enforcement Point opens or closes the connection. It sets out seven tenets, three deployment approaches and the threats a Zero Trust design must withstand.",
    "highlight": "The Blueprint For Zero Trust",
    "faqs": [
      [
        "What Is NIST SP 800-207 In Simple Terms?",
        "It is NIST's official description of Zero Trust: never trust a request because of where it comes from, decide every access using identity, device health and risk, and enforce that decision at the point of connection. It describes the components, deployment approaches and threats involved."
      ],
      [
        "Is Zero Trust Mandatory In India?",
        "No Indian law or regulator mandates SP 800-207. However, RBI, SEBI and CERT-In expectations on MFA, least privilege, segmentation and monitoring are the natural result of a Zero Trust programme, and Indian suppliers to US government customers often inherit Zero Trust requirements through contracts."
      ],
      [
        "What Are The Policy Engine, Policy Administrator And PEP?",
        "The Policy Engine decides whether a request is allowed, using policy and inputs such as identity, device posture and threat intelligence. The Policy Administrator sets up or tears down the session. The Policy Enforcement Point is the gateway that actually allows or blocks the connection."
      ],
      [
        "What Is The Difference Between SP 800-207 And SP 800-207A?",
        "SP 800-207 (2020) defines the overall architecture for any enterprise. SP 800-207A (2023) applies it to cloud-native applications across multiple clouds, using API gateways, sidecar proxies and workload identity to enforce policy at application level."
      ],
      [
        "Can I Buy A Zero Trust Product And Be Done?",
        "No. SP 800-207 is an architecture, not a product. Identity, device management, segmentation, access brokers and monitoring tools each play a part, and the document warns against relying on a single proprietary platform. The work is in policy, integration and migration."
      ],
      [
        "How Does XcellHost Help With SP 800-207?",
        "We run a Zero Trust readiness assessment against the seven tenets, design the target architecture, then implement and operate it: Entra ID conditional access, Zero Trust network access, SASE, PKI and 24×7 monitoring, with evidence mapped to RBI, SEBI and CERT-In requirements."
      ]
    ],
    "rows": [
      [
        "Publisher",
        "NIST, U.S. Department of Commerce"
      ],
      [
        "Version",
        "SP 800-207 (final); companion SP 800-207A and SP 1800-35"
      ],
      [
        "Released",
        "August 2020 (800-207A Sept 2023; 1800-35 June 2025)"
      ],
      [
        "Applies To",
        "Any enterprise network; US federal agencies by OMB mandate"
      ],
      [
        "Obligation",
        "Voluntary worldwide; required of US federal agencies"
      ],
      [
        "Assurance",
        "No certificate; architecture review and self-assessment"
      ]
    ],
    "intro": "Explore inputs feeding the Zero Trust policy decision. Select the sections in the interactive explorer above to see the requirements and how XcellHost helps.",
    "useCases": "No Indian regulator mandates SP 800-207 by name. It matters in India because Indian suppliers inherit it from US customers, and because the controls it produces are the ones RBI, SEBI, CERT-In and the DPDP Act already expect."
  }
};
