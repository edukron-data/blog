/**
 * Global slug hint patterns shared across topics.
 */
const GLOBAL_SLUG_HINTS = {
  intro: {
    focus: 'foundational vocabulary, scope, and problem framing',
    depth: 'conceptual architecture and learning roadmap',
    concepts: ['Historical context', 'Problem taxonomy', 'Toolchain overview', 'Career relevance'],
  },
  overview: {
    focus: 'platform positioning, ecosystem map, and architectural context',
    depth: 'high-level system design',
    concepts: ['Component map', 'Integration points', 'Deployment topology', 'Team workflows'],
  },
  fundamental: {
    focus: 'core building blocks and first principles',
    depth: 'fundamental mechanics',
  },
  capstone: {
    focus: 'end-to-end integration across prior lessons',
    depth: 'portfolio-ready capstone implementation',
    animationSteps: [
      'Gather requirements and define success metrics',
      'Sketch architecture linking prior path topics',
      'Implement core functionality incrementally',
      'Add tests, logging, and documentation',
      'Demo to a peer and capture feedback',
      'Publish artifact with README and lessons learned',
    ],
    bestPractices: [
      'Scope the capstone to ship in one week — depth beats breadth',
      'Include a diagram showing data/control flow across components',
      'Automate setup with README instructions and dependency pins',
    ],
  },
  security: {
    focus: 'identity, encryption, threat mitigation, and compliance',
    depth: 'security hardening patterns',
    tools: ['Key Vault', 'RBAC', 'managed identity'],
    concepts: ['Threat modeling', 'Secrets rotation', 'Audit logging', 'Zero Trust principles'],
    interviewAngle: 'Walk through a security incident scenario and your containment steps',
  },
  monitor: {
    focus: 'metrics, alerts, dashboards, and operational visibility',
    depth: 'observability engineering',
    tools: ['Azure Monitor', 'Application Insights', 'Log Analytics', 'KQL'],
  },
  performance: {
    focus: 'throughput, latency, profiling, and optimization',
    depth: 'performance tuning methodology',
    concepts: ['Bottleneck analysis', 'Caching strategy', 'Parallelism', 'Cost-performance trade-offs'],
  },
  cost: {
    focus: 'FinOps, right-sizing, and resource efficiency',
    depth: 'cost optimization patterns',
  },
  deploy: {
    focus: 'release strategy, environment promotion, and rollback',
    depth: 'deployment automation',
    tools: ['Azure Pipelines', 'GitHub Actions', 'Terraform'],
  },
  test: {
    focus: 'unit, integration, regression, and smoke testing',
    depth: 'test strategy design',
    tools: ['pytest', 'JUnit', 'Playwright'],
  },
  pipeline: {
    focus: 'workflow orchestration, dependencies, and scheduling',
    depth: 'pipeline architecture',
  },
  stream: {
    focus: 'real-time ingestion, event-time processing, and state',
    depth: 'streaming architecture',
    tools: ['Structured Streaming', 'Event Hubs', 'Kafka'],
  },
  join: {
    focus: 'relational combination logic, cardinality, and optimization',
    depth: 'join execution and tuning',
    concepts: ['Join types', 'Broadcast vs sort-merge', 'Null handling', 'Skew mitigation'],
  },
  window: {
    focus: 'analytic functions over ordered partitions',
    depth: 'window function patterns',
    concepts: ['PARTITION BY', 'ORDER BY frames', 'Ranking functions', 'Running aggregates'],
  },
  index: {
    focus: 'index selection, covering indexes, and plan impact',
    depth: 'index design and maintenance',
  },
  transaction: {
    focus: 'ACID semantics, isolation levels, and concurrency control',
    depth: 'transactional correctness',
  },
  embedding: {
    focus: 'dense vector representations and similarity search',
    depth: 'embedding pipelines',
    tools: ['OpenAI embeddings', 'sentence-transformers', 'FAISS'],
  },
  transform: {
    focus: 'attention mechanisms and encoder-decoder stacks',
    depth: 'transformer architecture',
    tools: ['Hugging Face Transformers', 'PyTorch'],
  },
  rag: {
    focus: 'retrieval-augmented generation and grounding',
    depth: 'RAG pipeline implementation',
    tools: ['LangChain', 'Azure AI Search', 'Chroma'],
    animationSteps: [
      'User query received',
      'Query embedding generated',
      'Vector store retrieval',
      'Context assembled with citations',
      'LLM generates grounded answer',
      'Response validated and logged',
    ],
  },
  'fine-tune': {
    focus: 'supervised adaptation and parameter-efficient training',
    depth: 'fine-tuning workflows',
    tools: ['LoRA', 'PEFT', 'Azure ML', 'Hugging Face Trainer'],
  },
  cluster: {
    focus: 'clustering algorithms, centroids, and evaluation',
    depth: 'unsupervised grouping',
    tools: ['scikit-learn KMeans', 'silhouette score'],
  },
  lstm: {
    focus: 'gated recurrent units for long sequences',
    depth: 'LSTM/GRU sequence modeling',
    tools: ['PyTorch nn.LSTM', 'Keras LSTM layers'],
  },
  conv: {
    focus: 'spatial feature extraction with filters and pooling',
    depth: 'convolutional network design',
    tools: ['PyTorch Conv2d', 'torchvision', 'Keras Conv2D'],
  },
  docker: {
    focus: 'container images, layers, and runtime isolation',
    depth: 'containerization workflow',
    tools: ['Dockerfile', 'Docker Compose', 'ACR'],
  },
  kubernetes: {
    focus: 'orchestration primitives and declarative deployment',
    depth: 'Kubernetes workload design',
    tools: ['kubectl', 'Deployments', 'Services', 'ConfigMaps'],
  },
  terraform: {
    focus: 'declarative infrastructure and state management',
    depth: 'IaC module design',
    tools: ['Terraform CLI', 'azurerm provider', 'remote state'],
  },
};

module.exports = { GLOBAL_SLUG_HINTS };
