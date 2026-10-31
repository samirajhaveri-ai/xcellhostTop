// FAQs from the supplied AI Vector Database document.
export const AI_VECTOR_DATABASE_FAQS: [string, string][] = [
  [
    "What is the XcellAI Vector Database?",
    "A managed vector database service from XcellHost. We deploy a leading open-source engine sized for your data, set up indexes, hybrid search, filters, security and backups, host it in India and run it 24×7. Your applications get one private endpoint."
  ],
  [
    "How does it help machine learning and AI projects?",
    "It gives models fast access to the most relevant items by meaning — the retrieval step behind RAG chatbots, semantic search, recommendations and similarity checks — without your team building and operating the index."
  ],
  [
    "Can it store text, images and audio?",
    "Yes. The database stores vectors, so anything an embedding model can encode works: text, images, audio or mixed-media embeddings. Each vector is stored with its metadata and a link to the source file."
  ],
  [
    "Is it suitable for large enterprise deployments?",
    "Yes. Professional runs as a three-node high-availability cluster; Enterprise adds sharding, DiskANN or quantisation for very large collections, a DR copy in a partner DC in India* and custom SLAs, sized after a review."
  ],
  [
    "How fast are searches?",
    "Typically milliseconds for top-k queries on a well-sized HNSW index*, but latency depends on collection size, dimensions, filters, recall target and hardware. We measure p95 latency and recall on your own test questions before go-live rather than quote a number in advance."
  ],
  [
    "Does it work with LLMs and RAG frameworks?",
    "Yes. The engines we run have integrations for common RAG frameworks such as LangChain and LlamaIndex*, and work with models served on our serverless or dedicated inference endpoints, or with hosted model APIs."
  ],
  [
    "Can we build chatbots on it?",
    "Yes — it is the knowledge layer of a RAG chatbot. If you want the chatbot built too, our AI Apps Builder connects to it with no code."
  ],
  [
    "How secure is it?",
    "Private network endpoints, TLS in transit, encryption at rest, role-based access with API keys, per-tenant namespaces, document-level access labels and audit logs, monitored by our 24×7 SOC. Data stays in India."
  ],
  [
    "Which search algorithms and index types are used?",
    "Approximate nearest-neighbour indexes: HNSW graphs for most workloads, IVF with optional product quantisation for compressed large collections, and DiskANN-style SSD indexes for very large ones, plus BM25 or sparse vectors for hybrid search. Similarity is cosine, dot product or Euclidean distance."
  ],
  [
    "pgvector or a dedicated vector engine — which should we use?",
    "If your data already lives in PostgreSQL and the collection is in the low millions, pgvector keeps things simple with SQL joins. For larger collections, heavy filtering, multi-tenancy or hybrid search at scale, a dedicated engine usually fits better. The engine picker above gives a first answer."
  ],
  [
    "Why are GPU prices not shown?",
    "GPU servers for embedding and re-ranking — NVIDIA L4, RTX PRO 6000 or H200 — are priced on quote because the price depends on GPU class, count, term and how much is managed. See AI Factory and Dedicated AI Servers."
  ],
  [
    "How do we get started?",
    "Book a sizing review. We agree data sources and test questions, recommend an engine and plan, and send an INR quotation. A typical Professional deployment is live in about three weeks*; setup is ₹24,999* one-time, excl. GST."
  ]
];
