// FAQs from the supplied NVIDIA Server GPU comparison document.
export const NVIDIA_GPU_FAQS: [string, string][] = [
  [
    "What is the difference between B300 and B200?",
    "B300 is Blackwell Ultra. Per NVIDIA it carries 288 GB of HBM3e per GPU against 180 GB on HGX B200, doubles attention-layer performance and raises dense FP4 on an eight-GPU HGX board from 72 to 108 PFLOPS. Both use fifth-generation NVLink at 1.8 TB/s per GPU. B300 trades FP64 throughput away: 10 TFLOPS per HGX B300 board against 296 TFLOPS for HGX B200."
  ],
  [
    "H200 or H100 — what changed?",
    "Same Hopper compute, more and faster memory. H200 SXM has 141 GB at 4.8 TB/s; H100 SXM has 80 GB at 3.35 TB/s. Tensor throughput on NVIDIA's pages is identical. For large-model inference the extra memory means fewer GPUs per model and room for longer contexts."
  ],
  [
    "Why do NVIDIA figures say \"with sparsity\"?",
    "NVIDIA's headline Tensor Core numbers usually assume 2:4 structured sparsity, which doubles throughput when half the weights are zero. Most models run dense, so the dense figure is the realistic ceiling. Use the Sparse / Dense switch above the table; where NVIDIA does not publish a dense figure or a halving rule for a GPU we show a dash."
  ],
  [
    "How much GPU memory does a 70B model need?",
    "Weights alone are about 140 GB at FP16, 70 GB at FP8 and 35 GB at FP4. Add the KV cache and runtime — often 20% or more — so roughly 168 GB at FP16: two H200s, or one B300. The model-fit calculator above does this sum for any size."
  ],
  [
    "Is the L4 enough for production inference?",
    "For 7–9B models, embeddings, speech-to-text and video analytics, often yes. L4 has 24 GB, 300 GB/s and a 72 W power envelope per NVIDIA, with two NVENC and four NVDEC engines for video. Larger models or high concurrency move to RTX PRO 6000 or H200."
  ],
  [
    "When should I choose RTX PRO 6000 instead of H200?",
    "RTX PRO 6000 Blackwell Server Edition has 96 GB of GDDR7, FP4 support, RT cores and video engines in a PCIe card — strong for 30–70B inference, fine-tuning, generative media and Omniverse. H200 has 141 GB of HBM3e at three times the bandwidth and NVLink, which wins for the largest models, multi-GPU training and long contexts."
  ],
  [
    "Is Rubin available?",
    "NVIDIA's Vera Rubin NVL72 page lists the system as available now and ramping into full production, with 288 GB of HBM4 and 19.2 TB/s per Rubin GPU. Rubin CPX, for long-context inference, is expected at the end of 2026 per NVIDIA. Ask us about allocation and lead times in India."
  ],
  [
    "Where do the specifications on this page come from?",
    "Each GPU was read from its nvidia.com product page or NVIDIA datasheet, with NVIDIA's Blackwell Ultra technical blog for per-GPU Blackwell memory and power and NVIDIA's newsroom for Rubin CPX. Data was retrieved on 30 October 2026. Where NVIDIA does not publish a value, the table shows a dash. Always check NVIDIA's page before you buy."
  ],
  [
    "Why are there no prices?",
    "NVIDIA does not publish list prices for data-center GPUs, and GPU supply changes week to week. XcellHost prices every GPU configuration on quote in INR with GST, including the server, networking, storage, power, data-centre space and 24×7 operations."
  ],
  [
    "Which NVIDIA GPUs does XcellHost run today?",
    "L4 (8, 16 and 24 vCPU configurations), RTX PRO 6000 Blackwell Server Edition and H200 run in our Mumbai fleet, through AI Factory, dedicated AI servers and dedicated inference. B300 is open for pre-booking. Other GPUs are sourced on request, with availability confirmed at quote."
  ],
  [
    "Do NVL72 racks need liquid cooling?",
    "Yes. NVIDIA describes GB200 NVL72 as a liquid-cooled rack and GB300 NVL72 as fully liquid-cooled. That needs a facility built for it — see our liquid-cooled AI data centre page. HGX boards and PCIe cards can run air-cooled, depending on the server."
  ],
  [
    "Which CPU should host my GPUs?",
    "The host CPU feeds data, runs pre- and post-processing and provides PCIe lanes. High-clock AMD EPYC or Intel Xeon parts with enough lanes for every GPU and NIC are typical; NVIDIA's DGX B300 uses Intel Xeon 6776P. Compare host CPUs on our AMD EPYC comparison page."
  ]
];
