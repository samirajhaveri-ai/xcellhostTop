// FAQs from the supplied Web3 & Blockchain Infrastructure document.
export const WEB3_INFRASTRUCTURE_FAQS: [string, string][] = [
  [
    "How do we get started?",
    "Tell us your chain and how you call it. We can issue a test elastic endpoint so you can point your app at it, then recommend an elastic plan or dedicated node builds with an INR quotation. Production endpoints come with an API key, an IP and origin allow-list and a dashboard."
  ],
  [
    "Which chains do you support?",
    "The networks we run most often are Ethereum, Base, Arbitrum, Optimism, Polygon PoS, BNB Chain, Avalanche, Solana, Aptos, Sui, NEAR, TRON, Cosmos Hub, Polkadot, Bitcoin, Litecoin and Dogecoin, on mainnet and common testnets. Others are checked on request; node builds and validator support vary by network."
  ],
  [
    "What is an RPC endpoint, and what is an RPC node?",
    "An RPC node is a server running a blockchain client that answers remote procedure calls — reading balances, calling contracts, sending transactions. The RPC endpoint (or RPC URL) is the address your app sends those calls to. With XcellCloud the endpoint sits in front of one or more nodes through our gateway."
  ],
  [
    "What is the difference between an elastic endpoint and a dedicated node?",
    "An elastic endpoint shares a load-balanced pool of nodes with other customers, with a per-plan rate limit and monthly request units. A dedicated node is single-tenant bare metal reserved for you: no metering, your choice of client and flags, and performance that depends only on your own traffic."
  ],
  [
    "When do we need an archive node?",
    "When you query state at old blocks — historical balances, storage or traces — for indexers, explorers, analytics, accounting or compliance tools. A full node keeps recent state and is right for most dApps, wallets and bots. The node-type finder above gives a first answer."
  ],
  [
    "Do you provide WebSockets, trace and debug APIs?",
    "Yes. Every endpoint has HTTPS and WSS. Trace and debug methods are included on dedicated archive builds and available as an add-on on elastic plans, where the chain's client supports them."
  ],
  [
    "How do load balancing and failover work?",
    "The gateway health-checks each node on block height, peers and response time. A node that lags or errors is taken out of rotation and our NOC is alerted; traffic continues on the remaining nodes. With two or more dedicated nodes you can also split reads from writes."
  ],
  [
    "How are API keys and signing keys protected?",
    "API keys are scoped per application with IP, origin and method restrictions, and can be rotated at any time. Signing keys for validators or hot wallets should never sit in plain files: we offer remote-signer set-ups and key custody in our Cloud HSM. Validator signing keys remain under your control."
  ],
  [
    "Can our nodes stay in India?",
    "Yes. Nodes run in XcellHost's own Mumbai Tier IV data centre by default, and gateway and node logs can be retained there. Amsterdam, New York and US West are available through partner facilities on request, priced on quotation."
  ],
  [
    "Do you run private or permissioned blockchains?",
    "Yes — Hyperledger Besu, Hyperledger Fabric and Corda networks for consortia and enterprises, hosted in India and monitored by our NOC. Network design, identity and code reviews are covered by our Applied Blockchain Security team. These are scoped and quoted per project."
  ],
  [
    "What does the 99.95% uptime SLA cover?",
    "XcellHost's 99.95% uptime SLA covers the infrastructure we run — power, network, hardware and our gateway. A blockchain network's own halts or forks are outside any provider's control; we follow them and keep your nodes in sync. SLA terms are confirmed in your contract."
  ],
  [
    "Do you help with FIU-IND, CERT-In or DPDP?",
    "We help you meet them on the infrastructure side — logs retained in India for your chosen period, access records and an incident contact for CERT-In's 6-hour reporting. Registration, KYC and reporting remain with your compliance officer; we do not give legal, tax or investment advice."
  ]
];
