// FAQs from the supplied Applied Blockchain Security document.
export const APPLIED_BLOCKCHAIN_FAQS: [string, string][] = [
  [
    "What does a smart contract audit include?",
    "A fixed code scope (a commit hash), manual review by at least two reviewers, industry-standard static analysis and fuzzing, a findings report rated Critical to Informational with recommended fixes, one or more fix-verification rounds and a re-audit letter that names the final commit reviewed."
  ],
  [
    "Does an audit guarantee our contracts are safe?",
    "No. An audit reduces risk within a fixed scope and time; it cannot prove the absence of every bug, and it does not cover code changed after the reviewed commit. That is why we pair audits with on-chain monitoring, a rehearsed pause plan and diff reviews for later releases."
  ],
  [
    "What is nSLOC and why do you price on it?",
    "Normalised source lines of code — the lines that actually execute, without comments, blank lines or imported libraries we are not asked to review. It is the most objective size measure for review effort. We count it from your repository during scoping and fix the tier before work starts."
  ],
  [
    "Which languages and chains do you cover?",
    "Solidity and Vyper on Ethereum, L2s and other EVM chains; Rust programs on Solana; Move modules on Aptos and Sui; and permissioned ledgers on Hyperledger Fabric, Hyperledger Besu and Corda. If your stack is not listed, ask during scoping."
  ],
  [
    "How do you review MPC, multisig or HSM custody?",
    "We review the architecture and the operations around it: who can approve what, the k-of-n quorum, time-locks and limits, where key shares or keys live, how ceremonies and backups are run and logged, and what happens when a signer leaves. For PKI-backed signing, see our Managed PKI and Private CA services."
  ],
  [
    "What does on-chain monitoring watch for?",
    "Rules on your own contracts and wallets: outflows far above baseline, admin or role changes, upgrades, oracle price deviations and unusual call patterns. Alerts go to our SOC and your on-call team, linked to a playbook that can include pausing the contract through your guardian multisig."
  ],
  [
    "Can XcellHost pause our contract for us?",
    "Only if you design it that way and authorise it. Most teams keep the pause power in their own guardian multisig; we alert, advise and run the war-room. Where you want us to hold one signer key in the quorum, that is agreed in writing with strict limits."
  ],
  [
    "Do you help with FIU-IND, CERT-In and Travel Rule obligations?",
    "We help you meet them on the security and evidence side: logging and retention, the CERT-In 6-hour reporting runbook, record-keeping controls and how Travel Rule data is protected. Registration, reporting and legal interpretation stay with your compliance officer and advisers."
  ],
  [
    "Can our nodes be hosted in India?",
    "Yes, optionally. We harden nodes wherever they run, and you can also host full, archive or validator nodes on our dedicated RPC node servers in Mumbai with DDoS protection through WAAP."
  ],
  [
    "What happens if we are hit by an incident?",
    "Call us. With an IR retainer we open a war-room, help contain the damage (pause, revoke, rotate keys), preserve evidence, support your CERT-In report and lead the post-incident review. Forensics are handled through our DFIR service."
  ],
  [
    "Will you publish our audit report?",
    "Only if you ask. The report and letter belong to you. Many teams publish the final report after fixes are verified; we can prepare a public version that leaves out sensitive operational detail."
  ],
  [
    "Do you give investment, legal or tax advice?",
    "No. We do not comment on any token's value or legality, and we do not advise on tax. Our work is security and evidence; please confirm regulatory and tax positions with your own advisers."
  ]
];
