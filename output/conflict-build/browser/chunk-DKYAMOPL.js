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

// src/app/data/ai-glossary.data.ts
var AI_TERMS = [
  {
    "category": "genai",
    "term": "Agent Orchestration",
    "label": "Generative AI",
    "definition": "Coordinating multiple AI agents and tools so they plan, delegate and act together to complete complex, multi-step tasks.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "genai",
    "term": "Agentic AI",
    "label": "Generative AI",
    "definition": "AI systems designed to act as autonomous or semi-autonomous agents \u2014 they set or interpret goals, plan and sequence actions, use tools (browsers, code, APIs), decide from feedback and adapt over time to complete tasks.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "core",
    "term": "AGI (Artificial General Intelligence)",
    "label": "Core concepts",
    "definition": "An AI system with general, human-level (or beyond) ability to learn, reason and apply knowledge across a wide range of tasks and domains.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "safety",
    "term": "AI Alignment",
    "label": "Safety & ethics",
    "definition": "Making sure an AI system\u2019s goals and behaviour match what people actually want \u2014 our values, rules and intentions.",
    "icon": "/assets/images/ai-glossary/icon-2.svg"
  },
  {
    "category": "ml",
    "term": "AI Benchmarks",
    "label": "Machine learning",
    "definition": "Standardised tests used to measure and compare how well AI systems perform on specific tasks, like answering questions, recognising images, writing code or following instructions.",
    "icon": "/assets/images/ai-glossary/icon-3.svg"
  },
  {
    "category": "core",
    "term": "AI Fluency",
    "label": "Core concepts",
    "definition": "The capacity to collaborate productively and responsibly with AI \u2014 understanding capabilities, limitations and implications, plus the skills to use tools well, evaluate outputs and adapt as the technology evolves.",
    "icon": "/assets/images/ai-glossary/icon-4.svg"
  },
  {
    "category": "safety",
    "term": "AI Safety",
    "label": "Safety & ethics",
    "definition": "The field focused on ensuring AI systems behave reliably and don\u2019t cause harm, even when powerful, widely deployed or operating in unexpected situations.",
    "icon": "/assets/images/ai-glossary/icon-2.svg"
  },
  {
    "category": "ops",
    "term": "AI Workflow",
    "label": "MLOps & lifecycle",
    "definition": "The end-to-end process of building, deploying and maintaining an AI system \u2014 data preparation, model training, testing and deployment, each step building on the last.",
    "icon": "/assets/images/ai-glossary/icon-5.svg"
  },
  {
    "category": "core",
    "term": "Algorithm",
    "label": "Core concepts",
    "definition": "A set of step-by-step instructions for solving a problem or completing a task, similar to a recipe.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "core",
    "term": "Artificial Intelligence (AI)",
    "label": "Core concepts",
    "definition": "Coined in 1955 by John McCarthy as \u201Cthe science and engineering of making intelligent machines.\u201D",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ml",
    "term": "Attention Mechanism",
    "label": "Machine learning",
    "definition": "A method in neural networks that helps a model focus on the most relevant parts of the input when producing an output.",
    "icon": "/assets/images/ai-glossary/icon-7.svg"
  },
  {
    "category": "core",
    "term": "Automation",
    "label": "Core concepts",
    "definition": "When technology such as AI performs specific tasks based on explicit human instructions \u2014 the human defines what to do, the AI executes it.",
    "icon": "/assets/images/ai-glossary/icon-5.svg"
  },
  {
    "category": "ml",
    "term": "Backpropagation",
    "label": "Machine learning",
    "definition": "How neural networks learn from mistakes, working backward through the network to figure out which parts caused the error.",
    "icon": "/assets/images/ai-glossary/icon-5.svg"
  },
  {
    "category": "ml",
    "term": "Bayesian Networks",
    "label": "Machine learning",
    "definition": "Graphical models that represent cause-and-effect relationships between variables using probabilities.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "safety",
    "term": "Bias in AI",
    "label": "Safety & ethics",
    "definition": "When a system produces results that favour or discriminate against certain groups of people.",
    "icon": "/assets/images/ai-glossary/icon-2.svg"
  },
  {
    "category": "infra",
    "term": "Big Data",
    "label": "Infrastructure & data",
    "definition": "Extremely large datasets, too large for traditional software, that AI can analyse to reveal patterns and trends.",
    "icon": "/assets/images/ai-glossary/icon-8.svg"
  },
  {
    "category": "genai",
    "term": "Chatbot",
    "label": "Generative AI",
    "definition": "A computer program designed to simulate conversation with humans, typically through text or voice.",
    "icon": "/assets/images/ai-glossary/icon-4.svg"
  },
  {
    "category": "core",
    "term": "Closed Source",
    "label": "Core concepts",
    "definition": "Also called proprietary software \u2014 code that is restricted and not available for the public to view, modify or use.",
    "icon": "/assets/images/ai-glossary/icon-9.svg"
  },
  {
    "category": "ml",
    "term": "Computer Vision",
    "label": "Machine learning",
    "definition": "A field of AI that enables computers to see, identify and understand visual information from images and videos.",
    "icon": "/assets/images/ai-glossary/icon-10.svg"
  },
  {
    "category": "genai",
    "term": "Context Window",
    "label": "Generative AI",
    "definition": "The amount of input (like text) that an AI system can process at one time during a task.",
    "icon": "/assets/images/ai-glossary/icon-11.svg"
  },
  {
    "category": "ml",
    "term": "Contrastive Learning",
    "label": "Machine learning",
    "definition": "A technique where the model learns by comparing similar and dissimilar examples to understand what makes things alike or different.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Data Augmentation",
    "label": "Machine learning",
    "definition": "Artificially expanding a training dataset by creating modified versions of existing data without collecting anything new.",
    "icon": "/assets/images/ai-glossary/icon-8.svg"
  },
  {
    "category": "ml",
    "term": "Data Mining",
    "label": "Machine learning",
    "definition": "Discovering patterns and trends in large datasets using statistical methods and machine learning.",
    "icon": "/assets/images/ai-glossary/icon-8.svg"
  },
  {
    "category": "infra",
    "term": "Data Residency",
    "label": "Infrastructure & data",
    "definition": "The requirement that data is stored and processed within a specific country or region \u2014 key for DPDP and RBI compliance in India.",
    "icon": "/assets/images/ai-glossary/icon-12.svg"
  },
  {
    "category": "ml",
    "term": "Decision Tree",
    "label": "Machine learning",
    "definition": "A machine-learning algorithm that makes predictions by asking yes/no questions, splitting data at each step until reaching a conclusion.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Deep Learning",
    "label": "Machine learning",
    "definition": "A subset of machine learning that uses large multi-layer neural networks to automatically learn complex patterns from data.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "genai",
    "term": "Diffusion Models",
    "label": "Generative AI",
    "definition": "A type of generative model that creates new content like images by adding and then subtracting \u201Cnoise.\u201D",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Dimensionality Reduction",
    "label": "Machine learning",
    "definition": "Simplifying complex data by reducing the number of variables while preserving the most important information.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Embeddings",
    "label": "Machine learning",
    "definition": "Numerical representations that convert complex data (words, images, objects) into vectors of numbers that capture their meaning.",
    "icon": "/assets/images/ai-glossary/icon-13.svg"
  },
  {
    "category": "ml",
    "term": "Ensemble Methods",
    "label": "Machine learning",
    "definition": "Combining multiple models (\u201Cweak learners\u201D) to produce a single, more accurate and robust prediction.",
    "icon": "/assets/images/ai-glossary/icon-14.svg"
  },
  {
    "category": "safety",
    "term": "Ethical AI",
    "label": "Safety & ethics",
    "definition": "Designing, developing and deploying AI that aligns with human values, fairness, transparency and societal well-being.",
    "icon": "/assets/images/ai-glossary/icon-2.svg"
  },
  {
    "category": "core",
    "term": "Expert Systems",
    "label": "Core concepts",
    "definition": "AI programs that mimic human experts in a domain using a knowledge base of facts and logical if-then rules.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "safety",
    "term": "Explainable AI (XAI)",
    "label": "Safety & ethics",
    "definition": "Methods that make AI decisions understandable to humans, rather than operating as opaque \u201Cblack boxes.\u201D",
    "icon": "/assets/images/ai-glossary/icon-15.svg"
  },
  {
    "category": "infra",
    "term": "Federated Learning",
    "label": "Infrastructure & data",
    "definition": "Training a model across multiple decentralised devices or servers holding local data, without the data ever leaving its location.",
    "icon": "/assets/images/ai-glossary/icon-16.svg"
  },
  {
    "category": "ml",
    "term": "Few-Shot Learning",
    "label": "Machine learning",
    "definition": "Learning to perform new tasks with only a small number of training examples.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "genai",
    "term": "Fine-Tuning",
    "label": "Generative AI",
    "definition": "Taking a pre-trained model and further training it on task- or domain-specific data.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "genai",
    "term": "Foundation Models",
    "label": "Generative AI",
    "definition": "Large-scale AI models, often transformers, trained on vast diverse data that can be adapted to many downstream tasks.",
    "icon": "/assets/images/ai-glossary/icon-14.svg"
  },
  {
    "category": "genai",
    "term": "GANs (Generative Adversarial Networks)",
    "label": "Generative AI",
    "definition": "Two neural networks \u2014 a generator and a discriminator \u2014 competing to create realistic synthetic data.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "genai",
    "term": "Generative AI (GenAI)",
    "label": "Generative AI",
    "definition": "AI systems that can create new content \u2014 text, images, music, code or video.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "genai",
    "term": "GPT (Generative Pre-Trained Transformer)",
    "label": "Generative AI",
    "definition": "A family of large language models that use the transformer architecture to generate human-like text from prompts.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "infra",
    "term": "GPU (Graphics Processing Unit)",
    "label": "Infrastructure & data",
    "definition": "A specialised chip that performs many calculations in parallel \u2014 originally for graphics, now essential for training and running AI.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "safety",
    "term": "Guardrails",
    "label": "Safety & ethics",
    "definition": "Rules and filters placed around an AI system to keep its inputs and outputs safe, on-policy and within defined limits.",
    "icon": "/assets/images/ai-glossary/icon-2.svg"
  },
  {
    "category": "safety",
    "term": "Hallucinations",
    "label": "Safety & ethics",
    "definition": "When an AI generates information that is incorrect, misleading or fabricated but presented as factual.",
    "icon": "/assets/images/ai-glossary/icon-17.svg"
  },
  {
    "category": "core",
    "term": "Human-Centered AI (HAI)",
    "label": "Core concepts",
    "definition": "An approach that prioritises human needs, values and well-being throughout AI development and deployment.",
    "icon": "/assets/images/ai-glossary/icon-4.svg"
  },
  {
    "category": "core",
    "term": "Human-Computer Interaction (HCI)",
    "label": "Core concepts",
    "definition": "The process through which people operate and engage with computer systems.",
    "icon": "/assets/images/ai-glossary/icon-4.svg"
  },
  {
    "category": "safety",
    "term": "Human-in-the-Loop",
    "label": "Safety & ethics",
    "definition": "AI systems that include human feedback or intervention as part of their operation.",
    "icon": "/assets/images/ai-glossary/icon-4.svg"
  },
  {
    "category": "ml",
    "term": "Hyperparameter",
    "label": "Machine learning",
    "definition": "A parameter whose value is set before the learning process of a model begins.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "infra",
    "term": "Inference",
    "label": "Infrastructure & data",
    "definition": "When a trained AI model makes predictions or decisions on new data it hasn\u2019t seen before.",
    "icon": "/assets/images/ai-glossary/icon-18.svg"
  },
  {
    "category": "safety",
    "term": "Interpretability",
    "label": "Safety & ethics",
    "definition": "The degree to which humans can understand how an AI system arrives at its decisions.",
    "icon": "/assets/images/ai-glossary/icon-15.svg"
  },
  {
    "category": "ml",
    "term": "k-NN (k-Nearest Neighbours)",
    "label": "Machine learning",
    "definition": "A simple, intuitive machine-learning algorithm used for classification and regression.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "infra",
    "term": "Knowledge Graph",
    "label": "Infrastructure & data",
    "definition": "A structured database that represents information as a network of interconnected entities and relationships.",
    "icon": "/assets/images/ai-glossary/icon-13.svg"
  },
  {
    "category": "genai",
    "term": "Large Language Model (LLM)",
    "label": "Generative AI",
    "definition": "An AI system trained on massive amounts of text to understand and generate human-like language.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ml",
    "term": "Latent Space",
    "label": "Machine learning",
    "definition": "A compressed, abstract representation where high-dimensional data is encoded into a lower-dimensional space capturing essential features.",
    "icon": "/assets/images/ai-glossary/icon-14.svg"
  },
  {
    "category": "ops",
    "term": "LLMOps",
    "label": "MLOps & lifecycle",
    "definition": "The practice of managing the entire lifecycle of LLM-based applications in production environments.",
    "icon": "/assets/images/ai-glossary/icon-5.svg"
  },
  {
    "category": "ops",
    "term": "LoRA (Low-Rank Adaptation)",
    "label": "MLOps & lifecycle",
    "definition": "An efficient fine-tuning method that adapts a large model by training a small number of extra parameters, saving compute and cost.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Loss Function",
    "label": "Machine learning",
    "definition": "A mathematical measure of how wrong a model\u2019s predictions are compared to the correct values.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Machine Learning",
    "label": "Machine learning",
    "definition": "A branch of AI that enables computers to learn patterns and make decisions from data without being explicitly programmed.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ml",
    "term": "Markov Chain",
    "label": "Machine learning",
    "definition": "A model describing a sequence of events where each future event depends only on the current state, not the history.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "infra",
    "term": "MCP (Model Context Protocol)",
    "label": "Infrastructure & data",
    "definition": "An open standard that lets AI models securely connect to external tools, data sources and APIs through a common interface.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ops",
    "term": "MLOps",
    "label": "MLOps & lifecycle",
    "definition": "Practices combining machine learning, software engineering and DevOps to deploy, monitor and maintain ML models reliably in production.",
    "icon": "/assets/images/ai-glossary/icon-5.svg"
  },
  {
    "category": "core",
    "term": "Model",
    "label": "Core concepts",
    "definition": "A simplified mathematical or computational representation of a real-world system, used to make predictions or understand patterns.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ops",
    "term": "Model Drift",
    "label": "MLOps & lifecycle",
    "definition": "When a model\u2019s performance degrades over time because real-world data has changed from the data it was trained on.",
    "icon": "/assets/images/ai-glossary/icon-19.svg"
  },
  {
    "category": "genai",
    "term": "Multimodal AI",
    "label": "Generative AI",
    "definition": "AI that can process, understand and generate multiple data types simultaneously \u2014 text, images, audio and video.",
    "icon": "/assets/images/ai-glossary/icon-14.svg"
  },
  {
    "category": "ml",
    "term": "Natural Language Processing (NLP)",
    "label": "Machine learning",
    "definition": "A branch of AI focused on enabling computers to understand, interpret and generate human language meaningfully.",
    "icon": "/assets/images/ai-glossary/icon-11.svg"
  },
  {
    "category": "ml",
    "term": "Neural Network",
    "label": "Machine learning",
    "definition": "A computational model inspired by the brain, with interconnected layers of artificial \u201Cneurons\u201D that process information.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "core",
    "term": "Open Source",
    "label": "Core concepts",
    "definition": "Software whose original design or \u201Cblueprint\u201D is freely available for anyone to see and use.",
    "icon": "/assets/images/ai-glossary/icon-20.svg"
  },
  {
    "category": "genai",
    "term": "Open-Weight Model",
    "label": "Generative AI",
    "definition": "An AI model whose core components are publicly released, allowing anyone to download it.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ml",
    "term": "Optimization Algorithm",
    "label": "Machine learning",
    "definition": "A method that helps a model improve by adjusting its settings to make fewer mistakes.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Overfitting",
    "label": "Machine learning",
    "definition": "When a model memorises the training data too closely, including mistakes and random patterns, hurting real-world performance.",
    "icon": "/assets/images/ai-glossary/icon-19.svg"
  },
  {
    "category": "ml",
    "term": "Parameter",
    "label": "Machine learning",
    "definition": "An internal variable within a model that is learned and adjusted during training.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Predictive Analytics",
    "label": "Machine learning",
    "definition": "Using data, statistics and ML models to forecast future outcomes or trends.",
    "icon": "/assets/images/ai-glossary/icon-3.svg"
  },
  {
    "category": "genai",
    "term": "Prompt Engineering",
    "label": "Generative AI",
    "definition": "Carefully crafting instructions (\u201Cprompts\u201D) to guide AI language models toward desired outputs.",
    "icon": "/assets/images/ai-glossary/icon-11.svg"
  },
  {
    "category": "safety",
    "term": "Prompt Injection",
    "label": "Safety & ethics",
    "definition": "A security attack that uses malicious input to trick an LLM into behaving in an unintended way.",
    "icon": "/assets/images/ai-glossary/icon-2.svg"
  },
  {
    "category": "infra",
    "term": "Quantization",
    "label": "Infrastructure & data",
    "definition": "Reducing the numerical precision of a model\u2019s weights (e.g. to 8-bit or 4-bit) to run it faster and cheaper with minimal quality loss.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "genai",
    "term": "RAG (Retrieval-Augmented Generation)",
    "label": "Generative AI",
    "definition": "A technique that lets language models look up external, up-to-date information first to generate higher-quality, grounded outputs.",
    "icon": "/assets/images/ai-glossary/icon-13.svg"
  },
  {
    "category": "genai",
    "term": "Reasoning Model",
    "label": "Generative AI",
    "definition": "An AI system designed to solve complex problems by generating a logical, step-by-step sequence of thought.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ml",
    "term": "Reinforcement Learning",
    "label": "Machine learning",
    "definition": "A type of ML where an AI agent improves through trial and error by taking actions and receiving feedback in an environment.",
    "icon": "/assets/images/ai-glossary/icon-5.svg"
  },
  {
    "category": "safety",
    "term": "Responsible AI",
    "label": "Safety & ethics",
    "definition": "Frameworks, principles and practices that guide the ethical and safe development and deployment of AI systems.",
    "icon": "/assets/images/ai-glossary/icon-2.svg"
  },
  {
    "category": "core",
    "term": "Robotics",
    "label": "Core concepts",
    "definition": "Combining engineering, computer science and AI to design and build machines that perform physical tasks.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ml",
    "term": "Scaling Laws",
    "label": "Machine learning",
    "definition": "Predictable relationships describing how model performance improves as size, data and compute increase.",
    "icon": "/assets/images/ai-glossary/icon-21.svg"
  },
  {
    "category": "ml",
    "term": "Self-Supervised Learning",
    "label": "Machine learning",
    "definition": "A training method where a model teaches itself by creating its own puzzles from raw data and solving them.",
    "icon": "/assets/images/ai-glossary/icon-5.svg"
  },
  {
    "category": "ml",
    "term": "Semantic Analysis",
    "label": "Machine learning",
    "definition": "Understanding the meaning of language by examining the relationship between words, phrases and symbols.",
    "icon": "/assets/images/ai-glossary/icon-11.svg"
  },
  {
    "category": "safety",
    "term": "Sovereign AI",
    "label": "Safety & ethics",
    "definition": "AI infrastructure, data and models kept within a country\u2019s jurisdiction, giving organisations control over data and compliance.",
    "icon": "/assets/images/ai-glossary/icon-2.svg"
  },
  {
    "category": "ml",
    "term": "Spatial Intelligence",
    "label": "Machine learning",
    "definition": "The ability to understand and reason about the three-dimensional physical world \u2014 how objects relate, move and interact in space.",
    "icon": "/assets/images/ai-glossary/icon-16.svg"
  },
  {
    "category": "ml",
    "term": "Supervised Learning",
    "label": "Machine learning",
    "definition": "Training models on labelled data \u2014 input examples paired with correct answers.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "infra",
    "term": "Synthetic Data",
    "label": "Infrastructure & data",
    "definition": "Artificially generated information created by algorithms or simulations rather than collected from the real world.",
    "icon": "/assets/images/ai-glossary/icon-8.svg"
  },
  {
    "category": "genai",
    "term": "Temperature",
    "label": "Generative AI",
    "definition": "A setting that controls how random or creative an AI\u2019s output is \u2014 low is focused and deterministic, high is more varied.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "infra",
    "term": "Tensor",
    "label": "Infrastructure & data",
    "definition": "A container for numbers organised in multiple dimensions \u2014 like a more advanced spreadsheet.",
    "icon": "/assets/images/ai-glossary/icon-22.svg"
  },
  {
    "category": "genai",
    "term": "Token",
    "label": "Generative AI",
    "definition": "The basic unit of text an AI model reads and generates \u2014 roughly a word or part of a word; usage is billed per token.",
    "icon": "/assets/images/ai-glossary/icon-11.svg"
  },
  {
    "category": "genai",
    "term": "Tokenization",
    "label": "Generative AI",
    "definition": "Breaking text into smaller units called tokens (words, parts of words or characters) that language models can process.",
    "icon": "/assets/images/ai-glossary/icon-11.svg"
  },
  {
    "category": "core",
    "term": "Traditional AI",
    "label": "Core concepts",
    "definition": "Earlier AI approaches that relied on explicitly programmed rules, logic and human-defined knowledge rather than learning from data.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ml",
    "term": "Training Data",
    "label": "Machine learning",
    "definition": "The collection of examples \u2014 text, images, audio \u2014 used to teach models how to perform tasks.",
    "icon": "/assets/images/ai-glossary/icon-8.svg"
  },
  {
    "category": "ml",
    "term": "Transfer Learning",
    "label": "Machine learning",
    "definition": "Reusing a model trained on one task as the starting point for a different but related task.",
    "icon": "/assets/images/ai-glossary/icon-5.svg"
  },
  {
    "category": "ml",
    "term": "Transformer",
    "label": "Machine learning",
    "definition": "A neural-network architecture that uses \u201Cattention\u201D to process relationships between all parts of the input simultaneously.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "core",
    "term": "Turing Test",
    "label": "Core concepts",
    "definition": "Proposed by Alan Turing in 1950 \u2014 a measure of a machine\u2019s ability to exhibit intelligent behaviour indistinguishable from a human.",
    "icon": "/assets/images/ai-glossary/icon-4.svg"
  },
  {
    "category": "ml",
    "term": "Unsupervised Learning",
    "label": "Machine learning",
    "definition": "Training models on unlabelled data, tasked with finding patterns and structure on their own.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "infra",
    "term": "Vector Database",
    "label": "Infrastructure & data",
    "definition": "A database designed to store and efficiently search high-dimensional numerical representations (vectors) of text, images or audio.",
    "icon": "/assets/images/ai-glossary/icon-8.svg"
  },
  {
    "category": "infra",
    "term": "Vector Embedding Search",
    "label": "Infrastructure & data",
    "definition": "Retrieving the most relevant items by comparing vector embeddings \u2014 the backbone of RAG and semantic search.",
    "icon": "/assets/images/ai-glossary/icon-13.svg"
  },
  {
    "category": "ml",
    "term": "Vision Transformer (ViT)",
    "label": "Machine learning",
    "definition": "An adaptation of the transformer architecture, originally for language, to process and analyse images.",
    "icon": "/assets/images/ai-glossary/icon-1.svg"
  },
  {
    "category": "ml",
    "term": "Weights",
    "label": "Machine learning",
    "definition": "The numerical parameters in a neural network that determine the strength of connections between neurons.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  },
  {
    "category": "ml",
    "term": "Zero-Shot Learning",
    "label": "Machine learning",
    "definition": "An AI model\u2019s ability to perform tasks or recognise categories it was never explicitly trained on, using general knowledge.",
    "icon": "/assets/images/ai-glossary/icon-6.svg"
  }
];

// src/app/pages/ai-glossary.page.ts
var _c0 = () => ["agentic-ai"];
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.id;
var _forTrack2 = ($index, $item) => $item.letter;
var _forTrack3 = ($index, $item) => $item.title;
var _forTrack4 = ($index, $item) => $item.term;
function AiGlossaryPage_For_35_Template(rf, ctx) {
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
function AiGlossaryPage_For_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function AiGlossaryPage_For_67_Template_button_click_0_listener() {
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
function AiGlossaryPage_For_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function AiGlossaryPage_For_72_Template_button_click_0_listener() {
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
function AiGlossaryPage_For_76_For_5_Template(rf, ctx) {
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
function AiGlossaryPage_For_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 42)(1, "h3", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 71);
    \u0275\u0275repeaterCreate(4, AiGlossaryPage_For_76_For_5_Template, 9, 5, "article", 72, _forTrack4);
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
function AiGlossaryPage_ForEmpty_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "h3");
    \u0275\u0275text(2, "No matching terms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try another word or reset your filters to browse the full glossary.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275listener("click", function AiGlossaryPage_ForEmpty_77_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.reset());
    });
    \u0275\u0275text(6, "Show all terms");
    \u0275\u0275elementEnd()();
  }
}
function AiGlossaryPage_For_89_Template(rf, ctx) {
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
    \u0275\u0275property("src", "/assets/images/ai-glossary/related-" + $index_r13 + ".svg", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(solution_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(solution_r12.description);
  }
}
var AiGlossaryPage = class _AiGlossaryPage {
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
  aiPrompt = encodeURIComponent("Explain artificial intelligence terms from the XcellHost AI Glossary in plain English.");
  requestDoc(kind) {
    this.docs.ask(kind, "AI Glossary");
    this.overlay.open("doc");
  }
  requestCallback() {
    this.topics.ask("AI Glossary");
    this.overlay.open("callback");
  }
  terms = AI_TERMS;
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  category = signal("all", ...ngDevMode ? [{ debugName: "category" }] : []);
  letter = signal("all", ...ngDevMode ? [{ debugName: "letter" }] : []);
  letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", "#"];
  categories = [
    {
      "id": "all",
      "label": "All terms"
    },
    {
      "id": "genai",
      "label": "Generative AI"
    },
    {
      "id": "core",
      "label": "Core concepts"
    },
    {
      "id": "safety",
      "label": "Safety & ethics"
    },
    {
      "id": "ml",
      "label": "Machine learning"
    },
    {
      "id": "ops",
      "label": "MLOps & lifecycle"
    },
    {
      "id": "infra",
      "label": "Infrastructure & data"
    }
  ];
  matchingTerms = computed(() => {
    const query = this.query().trim().toLowerCase();
    return this.terms.filter((t) => (this.category() === "all" || t.category === this.category()) && (!query || `${t.term} ${t.definition}`.toLowerCase().includes(query)));
  }, ...ngDevMode ? [{ debugName: "matchingTerms" }] : []);
  availableLetters = computed(() => new Set(this.matchingTerms().map((t) => this.initial(t.term))), ...ngDevMode ? [{ debugName: "availableLetters" }] : []);
  groups = computed(() => this.letters.filter((letter) => this.letter() === "all" || this.letter() === letter).map((letter) => ({ letter, terms: this.matchingTerms().filter((t) => this.initial(t.term) === letter) })).filter((group) => group.terms.length), ...ngDevMode ? [{ debugName: "groups" }] : []);
  count = computed(() => this.groups().reduce((sum, group) => sum + group.terms.length, 0), ...ngDevMode ? [{ debugName: "count" }] : []);
  solutions = [
    {
      "title": "Agentic AI",
      "description": "Build, secure and run autonomous AI agents for your business.",
      "path": "/agentic-ai"
    },
    {
      "title": "WAAP",
      "description": "AI-driven web & API protection, fully managed.",
      "path": "/waap-as-a-service"
    },
    {
      "title": "Watchtower",
      "description": "One intelligence layer across every tool in your stack.",
      "path": "/company/watchtower"
    }
  ];
  constructor() {
    inject(SeoService).set("AI Glossary | XcellHost", "Explore artificial intelligence terms in plain English. Search by term, category or letter to understand models, agents and AI concepts.", "/ai-glossary/");
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
  static \u0275fac = function AiGlossaryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AiGlossaryPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AiGlossaryPage, selectors: [["xh-ai-glossary-page"]], decls: 166, vars: 11, consts: [["tour", ""], [1, "pp-hero", "glossary-hero"], ["aria-hidden", "true", 1, "pph-map", 3, "innerHTML"], ["aria-hidden", "true", 1, "pph-grid"], [1, "wrap", "glossary-hero-grid"], [1, "glossary-hero-copy"], ["aria-label", "Breadcrumb", 1, "pp-crumb"], ["routerLink", "/"], [1, "hero-brand"], ["aria-hidden", "true"], [1, "pp-tagline"], [1, "pp-typewriter"], [1, "hero-ctas", "product-hero-ctas"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["type", "button", 1, "btn", "btn-ghost"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["aria-label", "Ask AI about AI Glossary", 1, "pp-ask-ai"], [1, "pp-ask-ai-kicker"], [1, "pp-ask-ai-actions"], ["target", "_blank", "rel", "noopener noreferrer", 1, "pp-ask-ai-chip", 3, "href"], ["src", "/assets/images/ai-glossary-hero.svg", "width", "600", "height", "520", "alt", "Neural network illustration showing connected layers of artificial intelligence", 1, "glossary-art"], ["aria-labelledby", "glossary-tour-title", 1, "glossary-tour"], ["type", "button", "aria-label", "Close screenshot tour", 1, "tour-close", 3, "click"], ["id", "glossary-tour-title"], ["src", "/assets/images/ai-glossary-hero.svg", "alt", "AI glossary concepts"], ["href", "#glossary", 1, "btn", "btn-primary", 3, "click"], ["id", "glossary", "aria-labelledby", "glossary-heading", 1, "glossary-section"], [1, "wrap"], [1, "sec-head"], [1, "eyebrow"], ["id", "glossary-heading"], [1, "search-row"], [1, "search-box"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["type", "search", "aria-label", "Search AI terms", "placeholder", "Search RAG, embeddings, hallucination?\u2026", 3, "input", "value"], ["type", "button", 1, "reset-button", 3, "click"], ["role", "group", "aria-label", "AI categories", 1, "category-tabs"], ["type", "button", 3, "active"], ["role", "group", "aria-label", "Browse by first letter", 1, "alphabet"], ["type", "button", 3, "click"], ["type", "button", 3, "disabled", "active"], ["role", "status", "aria-live", "polite", 1, "result-count"], [1, "term-group"], [1, "empty-state"], [1, "glossary-section", "related-section"], [1, "solution-grid"], [1, "solution-card", 3, "routerLink"], [1, "glossary-section", "guides-section"], [1, "term-grid", "guide-grid"], [1, "solution-card"], ["src", "/assets/images/ai-glossary/blog-0.svg", "alt", "", "aria-hidden", "true", 1, "section-icon"], [1, "term-category"], ["routerLink", "/insights"], ["src", "/assets/images/ai-glossary/blog-1.svg", "alt", "", "aria-hidden", "true", 1, "section-icon"], ["src", "/assets/images/ai-glossary/blog-2.svg", "alt", "", "aria-hidden", "true", 1, "section-icon"], ["routerLink", "/dpdpa-for-smb"], ["pageSlug", "ai-glossary", 3, "pageAliases"], [1, "glossary-section", "glossary-closing"], [1, "pp-cta"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], ["href", "#", 1, "btn", "btn-primary", 3, "click"], ["href", "#", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff", 3, "click"], ["href", "#", "target", "_blank", "rel", "noopener noreferrer", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff", 3, "click"], ["href", "https://wa.me/918657032540?text=Hello%2C%20I%20have%20a%20AI%20enquiry", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff"], ["href", "mailto:sales@xcellhost.com?subject=AI%20Glossary%20enquiry", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", 1, "pp-cta-buddha"], [1, "pp-proof"], ["alt", "", "aria-hidden", "true", 3, "src"], ["type", "button", 3, "click", "disabled"], [1, "letter-heading"], [1, "term-grid"], [1, "term-card"], [1, "term-card-top"], ["alt", "", "aria-hidden", "true", 1, "term-icon", 3, "src"], ["alt", "", "aria-hidden", "true", 1, "section-icon", 3, "src"]], template: function AiGlossaryPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "main")(1, "section", 1);
      \u0275\u0275element(2, "div", 2)(3, "span", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "nav", 6)(7, "a", 7);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " \u203A Resources \u203A AI Glossary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "h1")(11, "span", 8)(12, "span");
      \u0275\u0275text(13, "Xcell");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, "AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "span", 9);
      \u0275\u0275text(16, " | ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, "AI Glossary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p", 10);
      \u0275\u0275text(19, "AI Glossary from XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 11);
      \u0275\u0275text(21, "AI terms explained in plain English");
      \u0275\u0275element(22, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12)(24, "button", 13);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_button_click_24_listener() {
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
      \u0275\u0275listener("click", function AiGlossaryPage_Template_button_click_28_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestCallback());
      });
      \u0275\u0275text(29, "Let's Talk");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "section", 16)(31, "span", 17);
      \u0275\u0275text(32, "Ask AI About AI Glossary from XcellHost");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 18);
      \u0275\u0275repeaterCreate(34, AiGlossaryPage_For_35_Template, 2, 3, "a", 19, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(36, "img", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "dialog", 21, 0)(39, "button", 22);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_button_click_39_listener() {
        \u0275\u0275restoreView(_r1);
        const tour_r2 = \u0275\u0275reference(38);
        return \u0275\u0275resetView(tour_r2.close());
      });
      \u0275\u0275text(40, "\xD7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "h2", 23);
      \u0275\u0275text(42, "Explore the AI Glossary");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "img", 24);
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "a", 25);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_a_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        const tour_r2 = \u0275\u0275reference(38);
        return \u0275\u0275resetView(tour_r2.close());
      });
      \u0275\u0275text(47, "Browse glossary");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "xh-trust-bar");
      \u0275\u0275elementStart(49, "section", 26)(50, "div", 27)(51, "div", 28)(52, "div", 29);
      \u0275\u0275text(53, "Your AI reference");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h2", 30);
      \u0275\u0275text(55, "Every term. Clearly explained.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "Search a term or browse the categories to build your AI vocabulary.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 31)(59, "label", 32)(60, "span", 33);
      \u0275\u0275text(61, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "input", 34);
      \u0275\u0275listener("input", function AiGlossaryPage_Template_input_input_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.search($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "button", 35);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_button_click_63_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reset());
      });
      \u0275\u0275text(64, "Reset filters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 36);
      \u0275\u0275repeaterCreate(66, AiGlossaryPage_For_67_Template, 2, 4, "button", 37, _forTrack1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 38)(69, "button", 39);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_button_click_69_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.letter.set("all"));
      });
      \u0275\u0275text(70, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(71, AiGlossaryPage_For_72_Template, 2, 5, "button", 40, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 41);
      \u0275\u0275text(74);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(75, AiGlossaryPage_For_76_Template, 6, 2, "section", 42, _forTrack2, false, AiGlossaryPage_ForEmpty_77_Template, 7, 0, "div", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "section", 44)(79, "div", 27)(80, "div", 28)(81, "div", 29);
      \u0275\u0275text(82, "Put it to work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "h2");
      \u0275\u0275text(84, "From glossary to your business.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p");
      \u0275\u0275text(86, "Know the terms, then let XcellHost put the defences in place \u2014 protection, monitoring, zero trust and compliance.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 45);
      \u0275\u0275repeaterCreate(88, AiGlossaryPage_For_89_Template, 10, 4, "a", 46, _forTrack3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "section", 47)(91, "div", 27)(92, "div", 28)(93, "div", 29);
      \u0275\u0275text(94, "Keep learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "h2");
      \u0275\u0275text(96, "Guides and briefings from our AI team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98, "Explore practical guidance on AI agents, retrieval-augmented generation and data residency.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 48)(100, "article", 49);
      \u0275\u0275element(101, "img", 50);
      \u0275\u0275elementStart(102, "span", 51);
      \u0275\u0275text(103, "Guide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "h3");
      \u0275\u0275text(105, "From glossary to deployment: your first AI agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, "A plain-English path from understanding the terms to shipping a working agent that does real work.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "a", 52);
      \u0275\u0275text(109, "Browse AI insights \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "article", 49);
      \u0275\u0275element(111, "img", 53);
      \u0275\u0275elementStart(112, "span", 51);
      \u0275\u0275text(113, "Explainer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "h3");
      \u0275\u0275text(115, "RAG, embeddings and vector databases, explained together");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "p");
      \u0275\u0275text(117, "How these three glossary terms combine into the most common enterprise AI pattern.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "a", 52);
      \u0275\u0275text(119, "Browse AI insights \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "article", 49);
      \u0275\u0275element(121, "img", 54);
      \u0275\u0275elementStart(122, "span", 51);
      \u0275\u0275text(123, "Compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "h3");
      \u0275\u0275text(125, "What sovereign AI and data residency mean in India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p");
      \u0275\u0275text(127, "Why keeping AI data in-country matters for DPDP and RBI, in plain terms.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "a", 55);
      \u0275\u0275text(129, "Explore data protection resources \u2192");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275element(130, "xh-insights-section", 56)(131, "xh-testimonials");
      \u0275\u0275elementStart(132, "section", 57)(133, "div", 27)(134, "div", 58)(135, "div")(136, "h3");
      \u0275\u0275text(137, "Ready to start with AI Glossary?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "p");
      \u0275\u0275text(139, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 59)(141, "a", 60);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_a_click_141_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.requestCallback());
      });
      \u0275\u0275text(142, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "a", 61);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_a_click_143_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.requestCallback());
      });
      \u0275\u0275text(144, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "a", 62);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_a_click_145_listener($event) {
        \u0275\u0275restoreView(_r1);
        $event.preventDefault();
        return \u0275\u0275resetView(ctx.requestDoc("infosheet"));
      });
      \u0275\u0275text(146, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "a", 61);
      \u0275\u0275listener("click", function AiGlossaryPage_Template_a_click_147_listener($event) {
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
      \u0275\u0275textInterpolate1("Search all ", ctx.terms.length, " terms, choose a AI category, or use A\u2013Z to browse by first letter.");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AiGlossaryPage, [{
    type: Component,
    args: [{ selector: "xh-ai-glossary-page", standalone: true, imports: [RouterLink, TrustBarComponent, TestimonialsComponent, InsightsSectionComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main>\r
  <section class="pp-hero glossary-hero">\r
    <div class="pph-map" aria-hidden="true" [innerHTML]="worldMap"></div>\r
    <span class="pph-grid" aria-hidden="true"></span>\r
    <div class="wrap glossary-hero-grid">\r
      <div class="glossary-hero-copy">\r
        <nav class="pp-crumb" aria-label="Breadcrumb"><a routerLink="/">Home</a> &rsaquo; Resources &rsaquo; AI Glossary</nav>\r
        <h1><span class="hero-brand"><span>Xcell</span>AI</span><span aria-hidden="true"> | </span>AI Glossary</h1>\r
        <p class="pp-tagline">AI Glossary from XcellHost</p>\r
        <div class="pp-typewriter">AI terms explained in plain English<i aria-hidden="true"></i></div>\r
        <div class="hero-ctas product-hero-ctas">\r
          \r
          \r
          <button class="btn btn-ghost" type="button" (click)="tour.showModal()">Screenshot Tour</button>\r
          <button class="btn btn-ghost" type="button">7 Day's Free Trial</button>\r
          <button class="btn btn-primary" type="button" (click)="requestCallback()">Let's Talk</button>\r
        </div>\r
        <section class="pp-ask-ai" aria-label="Ask AI about AI Glossary">\r
          <span class="pp-ask-ai-kicker">Ask AI About AI Glossary from XcellHost</span>\r
          <div class="pp-ask-ai-actions">@for (platform of aiPlatforms; track platform.name) {\r
            <a class="pp-ask-ai-chip" [attr.aria-label]="platform.name" [href]="platform.url + (platform.name === 'Google Gemini' ? '' : aiPrompt)" target="_blank" rel="noopener noreferrer"><img [src]="'https://www.google.com/s2/favicons?domain=' + platform.domain + '&sz=64'" alt="" aria-hidden="true"></a>\r
          }</div>\r
        </section>\r
      </div>\r
      <img class="glossary-art" src="/assets/images/ai-glossary-hero.svg" width="600" height="520" alt="Neural network illustration showing connected layers of artificial intelligence">\r
    </div>\r
  </section>\r
  <dialog #tour class="glossary-tour" aria-labelledby="glossary-tour-title"><button class="tour-close" type="button" (click)="tour.close()" aria-label="Close screenshot tour">&times;</button><h2 id="glossary-tour-title">Explore the AI Glossary</h2><img src="/assets/images/ai-glossary-hero.svg" alt="AI glossary concepts"><p>Search all {{ terms.length }} terms, choose a AI category, or use A&ndash;Z to browse by first letter.</p><a class="btn btn-primary" href="#glossary" (click)="tour.close()">Browse glossary</a></dialog>\r
  <xh-trust-bar />\r
\r
  <section class="glossary-section" id="glossary" aria-labelledby="glossary-heading">\r
    <div class="wrap">\r
      <div class="sec-head"><div class="eyebrow">Your AI reference</div><h2 id="glossary-heading">Every term. Clearly explained.</h2><p>Search a term or browse the categories to build your AI vocabulary.</p></div>\r
      <div class="search-row"><label class="search-box"><span class="material-symbols-outlined" aria-hidden="true">search</span><input type="search" aria-label="Search AI terms" placeholder="Search RAG, embeddings, hallucination?\u2026" [value]="query()" (input)="search($event)"></label><button class="reset-button" type="button" (click)="reset()">Reset filters</button></div>\r
      <div class="category-tabs" role="group" aria-label="AI categories">\r
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
    <div class="sec-head"><div class="eyebrow">Put it to work</div><h2>From glossary to your business.</h2><p>Know the terms, then let XcellHost put the defences in place \u2014 protection, monitoring, zero trust and compliance.</p></div>\r
    <div class="solution-grid">@for (solution of solutions; track solution.title) { <a class="solution-card" [routerLink]="solution.path"><img class="section-icon" [src]="'/assets/images/ai-glossary/related-' + $index + '.svg'" alt="" aria-hidden="true"><h3>{{ solution.title }}</h3><p>{{ solution.description }}</p><strong>Explore <span aria-hidden="true">\u2192</span></strong></a> }</div>\r
  </div></section>\r
  <section class="glossary-section guides-section"><div class="wrap">\r
    <div class="sec-head"><div class="eyebrow">Keep learning</div><h2>Guides and briefings from our AI team</h2><p>Explore practical guidance on AI agents, retrieval-augmented generation and data residency.</p></div>\r
    <div class="term-grid guide-grid">\r
      <article class="solution-card"><img class="section-icon" src="/assets/images/ai-glossary/blog-0.svg" alt="" aria-hidden="true"><span class="term-category">Guide</span><h3>From glossary to deployment: your first AI agent</h3><p>A plain-English path from understanding the terms to shipping a working agent that does real work.</p><a routerLink="/insights">Browse AI insights &rarr;</a></article>\r
      <article class="solution-card"><img class="section-icon" src="/assets/images/ai-glossary/blog-1.svg" alt="" aria-hidden="true"><span class="term-category">Explainer</span><h3>RAG, embeddings and vector databases, explained together</h3><p>How these three glossary terms combine into the most common enterprise AI pattern.</p><a routerLink="/insights">Browse AI insights &rarr;</a></article>\r
      <article class="solution-card"><img class="section-icon" src="/assets/images/ai-glossary/blog-2.svg" alt="" aria-hidden="true"><span class="term-category">Compliance</span><h3>What sovereign AI and data residency mean in India</h3><p>Why keeping AI data in-country matters for DPDP and RBI, in plain terms.</p><a routerLink="/dpdpa-for-smb">Explore data protection resources &rarr;</a></article>\r
    </div>\r
  </div></section>\r
  <xh-insights-section pageSlug="ai-glossary" [pageAliases]="['agentic-ai']" />\r
  <xh-testimonials />\r
  <section class="glossary-section glossary-closing"><div class="wrap">\r
        <div class="pp-cta">\r
            <div>\r
              <h3>Ready to start with AI Glossary?</h3>\r
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
                href="https://wa.me/918657032540?text=Hello%2C%20I%20have%20a%20AI%20enquiry"\r
                target="_blank"\r
                rel="noopener"\r
                >Talk on WhatsApp</a\r
              >\r
              <a\r
                class="btn btn-ghost"\r
                style="border-color: rgba(255, 255, 255, 0.4); color: #fff"\r
                href="mailto:sales@xcellhost.com?subject=AI%20Glossary%20enquiry"\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AiGlossaryPage, { className: "AiGlossaryPage", filePath: "src/app/pages/ai-glossary.page.ts", lineNumber: 22 });
})();
export {
  AiGlossaryPage
};
//# sourceMappingURL=chunk-DKYAMOPL.js.map
