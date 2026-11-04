// FAQs from the supplied Blockchain as a Service document.
export const BLOCKCHAIN_SERVICE_FAQS: [string, string][] = [
  [
    "What is Blockchain as a Service?",
    "It is a managed service where a provider builds and operates the blockchain network — nodes, certificate authorities, ordering, monitoring, backups and upgrades — while you and your consortium own the members, the contracts and the data. XcellHost runs these networks in its Mumbai data centre and bills in INR."
  ],
  [
    "Do we actually need a blockchain?",
    "Only if several independent organisations must share and update one record without trusting a single operator. If one party controls the data, a well-secured database with audit logs is usually simpler and cheaper. Our discovery workshop and the ledger finder above test this first."
  ],
  [
    "Which ledgers do you support?",
    "Hyperledger Fabric, Hyperledger Besu and Corda for permissioned networks, plus public-chain RPC endpoints and dedicated nodes through our Blockchain Infrastructure service. Other platforms are assessed on request."
  ],
  [
    "We run GoQuorum today. What should we do?",
    "Consensys no longer maintains or supports GoQuorum and does not recommend it for new projects. Hyperledger Besu is the usual path for EVM networks. We can assess your network, plan the contract and data move, run both in parallel and cut over."
  ],
  [
    "How are identities and certificates managed?",
    "Each member gets its own certificate authority and membership service provider (MSP) on Fabric, or node and account permissioning on Besu. Root and signing keys can sit in a Cloud HSM partition, with recorded key ceremonies. Certificate expiry is monitored and renewals follow a runbook."
  ],
  [
    "How long does it take to add a new member?",
    "With our onboarding kit, typically days once the member's identity and approvals are ready — it covers the CA, node, channel or allow-list update and the signed configuration change. Timings depend on how quickly existing members approve."
  ],
  [
    "Can members run their own nodes?",
    "Yes. Many consortia mix hosted nodes in our Mumbai data centre with nodes on members' own premises or clouds. We supply the build, connectivity over Private Connect and the monitoring so the network stays consistent."
  ],
  [
    "How do you deploy and upgrade smart contracts?",
    "Through a pipeline: test network first, then the ledger's own approval process — on Fabric, each member approves the chaincode definition and it is committed once the policy is met. Upgrades follow the same path. Independent code review is available from our Applied Blockchain Security team."
  ],
  [
    "Can personal data go on the ledger under the DPDP Act?",
    "We advise against it. Ledgers are append-only, so data cannot be erased later. The usual design keeps personal data off-chain in India-hosted storage and writes only hashes or references on-chain. Your data protection officer makes the final call."
  ],
  [
    "Do you help with tokenisation or CBDC pilots?",
    "We provide sandbox networks, key custody and security reviews for internal proofs of concept and pilot readiness. Regulator-led pilots such as RBI's e₹ and deposit tokenisation, or SEBI sandbox projects, run on the regulator's terms. We do not issue tokens, hold assets or give investment advice."
  ],
  [
    "What does the 99.95% uptime SLA cover?",
    "XcellHost's 99.95% uptime SLA covers the infrastructure we run — power, network, hardware and our managed nodes. Ledger-level outcomes such as a member's own node or a failed endorsement policy are handled through runbooks. SLA terms are confirmed in your contract."
  ]
];
