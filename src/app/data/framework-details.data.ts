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
  }
};
