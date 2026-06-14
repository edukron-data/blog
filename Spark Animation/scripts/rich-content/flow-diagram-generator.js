/**
 * Generates unique, topic-specific Mermaid flowcharts for every learning step.
 * Composes nodes from slug tokens, description phrases, and topic context.
 */

function sanitizeMermaidLabel(text) {
  return String(text)
    .replace(/"/g, "'")
    .replace(/[\[\]{}#;]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 48);
}

function capitalizePhrase(text) {
  const t = text.trim();
  if (!t) return t;
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function buildMermaidFlowchart(nodes, direction = 'TD') {
  const safe = nodes.map((n) => sanitizeMermaidLabel(n)).filter(Boolean);
  const count = Math.min(Math.max(safe.length, 5), 10);
  const trimmed = safe.slice(0, count);
  const ids = trimmed.map((_, i) => `N${i}`);
  const nodeLines = trimmed.map((label, i) => `${ids[i]}["${label}"]`);
  const edgeLines = ids.slice(0, -1).map((id, i) => `${id} --> ${ids[i + 1]}`);
  return `flowchart ${direction}\n    ${[...nodeLines, ...edgeLines].join('\n    ')}`;
}

function extractDescriptionNodes(description) {
  if (!description) return [];
  return description
    .replace(/\.$/, '')
    .split(/\s*[,;]\s*|\s+—\s+|\s+–\s+|\s+and\s+(?=[a-z])/i)
    .map((part) => capitalizePhrase(part.replace(/\.$/, '')))
    .filter((part) => part.length > 3 && part.length < 50);
}

/** Full-slug phrase patterns (highest priority after explicit maps) */
const PHRASE_SLUG_PATTERNS = [
  {
    pattern: /experiment-tracking|mlflow/i,
    nodes: [
      'Start training run',
      'Log hyperparameters',
      'Log metrics each epoch',
      'Save model artifacts',
      'Register model version',
      'Compare runs in UI',
      'Promote best run to staging',
    ],
  },
  {
    pattern: /react-pattern|react-trace/i,
    nodes: [
      'User question',
      'Thought: reason next step',
      'Action: select tool',
      'Tool execution',
      'Observation: tool result',
      'Thought: update plan',
      'Final answer',
    ],
  },
  {
    pattern: /clustering-kmeans|kmeans|k-means/i,
    nodes: [
      'Load feature matrix',
      'Scale / normalize features',
      'Choose k (elbow method)',
      'Initialize centroids',
      'Fit KMeans clusters',
      'Evaluate silhouette score',
      'Assign cluster labels',
    ],
  },
  {
    pattern: /^lists$/,
    nodes: [
      'Create list literal []',
      'Append / extend elements',
      'Index & slice access',
      'Mutate in place',
      'List methods: sort, reverse',
      'Iterate with for loop',
      'List comprehension transform',
    ],
  },
  {
    pattern: /train-test-split|holdout/i,
    nodes: [
      'Load labeled dataset',
      'Shuffle with random_state',
      'Split features / labels',
      'Train on train set',
      'Evaluate on holdout test',
      'Check for data leakage',
    ],
  },
  {
    pattern: /rag|retrieval-augmented/i,
    nodes: [
      'User query',
      'Embed query vector',
      'Vector similarity search',
      'Retrieve top-k chunks',
      'Augment LLM prompt',
      'Generate grounded answer',
      'Validate citations',
    ],
  },
  {
    pattern: /medallion|bronze.*silver|silver.*gold/i,
    nodes: [
      'Ingest raw sources',
      'Bronze: land raw files',
      'Silver: cleanse & conform',
      'Gold: business aggregates',
      'Serve BI / ML consumers',
    ],
  },
  {
    pattern: /ci-cd|azure-pipelines|pipeline.*deploy/i,
    nodes: [
      'Git push / PR merge',
      'CI: build artifact',
      'Run unit & integration tests',
      'Security / SAST scan',
      'Deploy to staging',
      'Smoke test staging',
      'Promote to production',
    ],
  },
  {
    pattern: /delta.*acid|acid.*transaction/i,
    nodes: [
      'Write request',
      'Append transaction log',
      'Write Parquet data files',
      'Update snapshot metadata',
      'Readers see consistent snapshot',
      'ACID commit complete',
    ],
  },
];

/** Per-token technical node sequences */
const TOKEN_NODES = {
  getting: ['Review learning objectives', 'Set up dev environment', 'Install dependencies', 'Verify toolchain versions'],
  started: ['Run first hello-world', 'Configure editor / IDE', 'Explore REPL or shell', 'Save first script'],
  installation: ['Download runtime / SDK', 'Configure PATH', 'Verify install with --version', 'Create project folder'],
  setup: ['Initialize project structure', 'Configure environment variables', 'Pin dependency versions', 'Run smoke test'],
  variables: ['Declare identifiers', 'Assign values', 'Inspect types with type()', 'Reuse in expressions'],
  strings: ['Create string literals', 'Slice & index characters', 'Apply str methods', 'Format with f-strings'],
  lists: ['Create list []', 'Append / extend items', 'Index & slice', 'Mutate & sort in place'],
  tuples: ['Pack values into tuple', 'Unpack assignment', 'Index immutable sequence', 'Return multiple values'],
  sets: ['Create set {}', 'Add unique elements', 'Set union / intersection', 'Membership testing'],
  dictionaries: ['Define key-value pairs', 'Access with dict[key]', 'Iterate keys / values', 'Handle missing keys'],
  operators: ['Evaluate arithmetic ops', 'Compare with ==, <, >', 'Combine with and / or', 'Assign with += patterns'],
  loops: ['Define loop variable', 'Iterate sequence or range', 'Use break / continue', 'Avoid infinite loops'],
  functions: ['Define with def', 'Pass positional args', 'Return result', 'Document with docstring'],
  parameters: ['Positional parameters', 'Keyword arguments', 'Default values', '*args / **kwargs unpacking'],
  scope: ['Resolve LEGB lookup', 'Use local vs global', 'Create closure', 'Avoid shadowing builtins'],
  comprehensions: ['Source iterable', 'Filter with if clause', 'Transform expression', 'Materialize collection'],
  exceptions: ['try block execution', 'Catch specific exceptions', 'else / finally cleanup', 'Raise custom errors'],
  modules: ['import package', 'Use module alias', 'Guard with if __name__', 'Organize package layout'],
  classes: ['Define class body', '__init__ constructor', 'Instance methods', 'Class vs instance attrs'],
  inheritance: ['Subclass parent', 'Override methods', 'Call super()', 'Polymorphic dispatch'],
  decorators: ['Define wrapper function', 'Apply @decorator', 'Preserve metadata with wraps', 'Stack decorators'],
  generators: ['Define with yield', 'Lazy iteration', 'Generator expression', 'Memory-efficient pipelines'],
  context: ['Enter with block', 'Acquire resource', 'Auto cleanup on exit', 'Custom __enter__ / __exit__'],
  virtual: ['Create venv', 'Activate environment', 'Install packages isolated', 'Deactivate when done'],
  pip: ['pip install package', 'Freeze requirements.txt', 'Resolve version conflicts', 'Upgrade carefully'],
  numpy: ['Create ndarray', 'Vectorized operations', 'Broadcasting rules', 'Aggregate axis stats'],
  pandas: ['Load DataFrame', 'Select columns / rows', 'GroupBy aggregations', 'Export results'],
  asyncio: ['Define async def', 'await coroutines', 'Run event loop', 'Gather concurrent tasks'],
  testing: ['Write test functions', 'Use fixtures', 'Parametrize cases', 'Assert expected outcomes'],
  logging: ['Configure logger', 'Set log levels', 'Add handlers', 'Structured log fields'],
  capstone: ['Gather requirements', 'Design architecture', 'Implement incrementally', 'Test & document', 'Demo deliverable'],
  select: ['FROM table source', 'SELECT columns', 'Filter with WHERE', 'ORDER BY results'],
  where: ['Parse filter predicates', 'Apply comparison ops', 'Combine AND / OR', 'Handle NULL semantics'],
  sorting: ['ORDER BY columns', 'ASC / DESC control', 'LIMIT row count', 'Stable sort behavior'],
  aggregates: ['GROUP BY keys', 'COUNT / SUM / AVG', 'Filter groups with HAVING', 'Handle NULL in agg'],
  joins: ['Identify join keys', 'Choose INNER / OUTER', 'Resolve cardinality', 'Optimize join plan'],
  subqueries: ['Nest SELECT', 'Correlate outer columns', 'Use in WHERE / FROM', 'Materialize if needed'],
  ctes: ['WITH named query', 'Chain multiple CTEs', 'Recursive CTE base case', 'Final SELECT from CTE'],
  window: ['Define OVER clause', 'PARTITION BY groups', 'ORDER BY frame', 'Apply ROW_NUMBER / LAG'],
  indexes: ['Analyze query predicates', 'Create B-tree index', 'Composite key order', 'Monitor index usage'],
  views: ['CREATE VIEW definition', 'Encapsulate complex SQL', 'Grant SELECT on view', 'Refresh if materialized'],
  transactions: ['BEGIN transaction', 'Execute DML statements', 'COMMIT or ROLLBACK', 'Set isolation level'],
  pivot: ['Identify pivot columns', 'Aggregate values', 'UNPIVOT back to rows', 'Validate row counts'],
  merge: ['Match source & target', 'WHEN MATCHED update', 'WHEN NOT MATCHED insert', 'Audit changed rows'],
  spark: ['Create SparkSession', 'Load distributed dataset', 'Transform with lazy ops', 'Trigger action / job'],
  rdd: ['Parallelize collection', 'map / filter transforms', 'Persist lineage', 'collect / reduce action'],
  dataframe: ['Define schema', 'Select & filter columns', 'Join DataFrames', 'Write partitioned output'],
  udfs: ['Define Python UDF', 'Register function', 'Apply to column', 'Prefer built-in expressions'],
  partitioning: ['Choose partition keys', 'repartition / coalesce', 'Prune partitions on read', 'Balance skew'],
  streaming: ['Read stream source', 'Apply window / watermark', 'Stateful aggregation', 'Write sink output'],
  delta: ['Create Delta table', 'MERGE upsert rows', 'Time travel query', 'VACUUM old files'],
  etl: ['Extract from sources', 'Transform business rules', 'Load to target', 'Validate row counts'],
  ingest: ['Land raw files', 'Schema inference', 'Incremental watermark', 'Error quarantine path'],
  bronze: ['Copy raw to Bronze', 'Add ingestion metadata', 'Preserve source format', 'Partition by date'],
  silver: ['Cleanse & dedupe', 'Conform schemas', 'Apply data quality rules', 'Type-safe columns'],
  gold: ['Business aggregations', 'Star schema tables', 'KPI metrics layer', 'Serve analytics consumers'],
  regression: ['Prepare feature matrix X', 'Fit regression model', 'Predict ŷ values', 'Evaluate RMSE / R²'],
  classification: ['Encode labels', 'Train classifier', 'Predict class probabilities', 'Compute precision / recall'],
  clustering: ['Select features', 'Choose algorithm', 'Fit cluster model', 'Evaluate cluster quality'],
  cross: ['K-fold split indices', 'Train on k-1 folds', 'Validate on holdout fold', 'Average CV scores'],
  hyperparameter: ['Define search space', 'Grid / random search', 'Track trial metrics', 'Select best params'],
  deployment: ['Serialize model artifact', 'Build REST endpoint', 'Load test inference', 'Monitor drift'],
  mlflow: ['Start MLflow run', 'Log params & metrics', 'Register model', 'Promote to Production stage'],
  experiment: ['Define experiment name', 'Log parameters', 'Track metrics', 'Compare run history'],
  tracking: ['Record run metadata', 'Store artifacts', 'Tag runs', 'Query experiment UI'],
  pipeline: ['Define transform steps', 'ColumnTransformer fit', 'Pipeline.fit on train', 'Predict on new data'],
  embedding: ['Tokenize text', 'Encode to vectors', 'Store in vector index', 'Similarity search'],
  tokenization: ['Split text to tokens', 'Subword segmentation', 'Build vocabulary', 'Encode / decode ids'],
  transformer: ['Token embeddings', 'Multi-head self-attention', 'Feed-forward block', 'Layer normalization'],
  attention: ['Compute Q, K, V', 'Scaled dot-product scores', 'Softmax weights', 'Weighted value sum'],
  bert: ['Tokenize input', 'Masked LM pretrain', 'Fine-tune classifier head', 'Evaluate downstream task'],
  lstm: ['Initialize hidden state', 'Process timestep input', 'Update cell & gates', 'Emit sequence output'],
  gru: ['Reset gate computation', 'Update gate blend', 'Hidden state recurrence', 'Sequence prediction'],
  bptt: ['Unroll through time', 'Forward pass outputs', 'Backprop through steps', 'Clip exploding gradients'],
  conv: ['Conv2d filter pass', 'ReLU activation', 'Pooling downsample', 'Flatten for dense layers'],
  cnn: ['Input image tensor', 'Stack conv blocks', 'Global average pool', 'Softmax classification'],
  docker: ['Write Dockerfile', 'docker build image', 'Push to registry', 'docker run container'],
  kubernetes: ['Apply Deployment YAML', 'Schedule Pods', 'Expose Service', 'Scale replicas'],
  terraform: ['Write HCL modules', 'terraform plan', 'Review diff', 'terraform apply state'],
  azure: ['Select subscription', 'Create resource group', 'Deploy ARM / Bicep', 'Assign RBAC roles'],
  repos: ['Clone remote repo', 'Branch / commit changes', 'Push to origin', 'Open pull request'],
  monitor: ['Collect metrics', 'Define alert rules', 'Build dashboard', 'Triage incidents'],
  security: ['Threat model surface', 'Apply least privilege', 'Rotate secrets', 'Audit access logs'],
  agent: ['Receive user goal', 'Plan next action', 'Execute tool call', 'Observe result', 'Iterate loop'],
  tool: ['Register tool schema', 'Validate arguments', 'Execute handler', 'Return observation'],
  memory: ['Write short-term buffer', 'Embed to vector store', 'Retrieve relevant context', 'Inject into prompt'],
  orchestration: ['Parse user intent', 'Route to specialist', 'Merge agent outputs', 'Return final response'],
  langgraph: ['Define state graph', 'Add agent nodes', 'Conditional edges', 'Compile & run graph'],
  planning: ['Decompose goal', 'Order subtasks', 'Execute steps', 'Synthesize results'],
  reflection: ['Generate draft output', 'Self-critique quality', 'Revise content', 'Accept when threshold met'],
  evaluation: ['Load eval dataset', 'Run agent trajectories', 'Score with rubric', 'Compare versions'],
  rag: ['Embed user query', 'Retrieve chunks', 'Build augmented prompt', 'LLM generate answer'],
  prompt: ['Craft system prompt', 'Add few-shot examples', 'Set temperature / tokens', 'Evaluate outputs'],
  fine: ['Prepare instruction dataset', 'Configure LoRA adapters', 'Train with Trainer', 'Evaluate held-out set'],
  diffusion: ['Sample noise timestep', 'Predict noise residual', 'Denoise iteratively', 'Decode to image'],
  gpt: ['Tokenize prompt', 'Autoregressive decode', 'Sample next token', 'Stop at EOS'],
  reinforcement: ['Observe environment state', 'Select action policy', 'Receive reward signal', 'Update Q-values'],
  search: ['Initialize frontier', 'Expand nodes', 'Apply heuristic h(n)', 'Reconstruct goal path'],
  logic: ['Define propositions', 'Apply inference rules', 'Prove theorem', 'Check satisfiability'],
  robotics: ['Read sensor data', 'Plan motion path', 'Send actuator commands', 'Close feedback loop'],
  probability: ['Define sample space', 'Compute P(A|B)', 'Apply Bayes rule', 'Interpret distributions'],
  visualization: ['Choose chart type', 'Map aesthetics', 'Add labels & legend', 'Tell data story'],
  cleaning: ['Profile missing values', 'Impute or drop', 'Detect outliers', 'Validate dtypes'],
  hypothesis: ['State H0 / H1', 'Choose test statistic', 'Compute p-value', 'Reject or fail to reject'],
  ab: ['Define success metric', 'Randomize cohorts', 'Collect experiment data', 'Analyze significance'],
  recommender: ['Build user-item matrix', 'Compute similarities', 'Generate top-N recs', 'Evaluate hit rate'],
  anomaly: ['Fit baseline model', 'Score anomaly metric', 'Set threshold', 'Alert on outliers'],
  interpretability: ['Select instance', 'Compute SHAP values', 'Visualize feature impact', 'Explain to stakeholder'],
  synapse: ['Create Synapse workspace', 'Link ADLS storage', 'Run Spark pool job', 'Query serverless SQL'],
  databricks: ['Create cluster / SQL WH', 'Mount cloud storage', 'Run notebook / job', 'Schedule workflow'],
  adf: ['Author linked services', 'Build copy activity', 'Parameterize pipeline', 'Trigger schedule / event'],
  adls: ['Create storage account', 'Configure ACLs / RBAC', 'Upload data files', 'Access via ABFS path'],
  factory: ['Design pipeline DAG', 'Debug activity run', 'Monitor integration runtime', 'Publish changes'],
  vacuum: ['Identify stale files', 'Run VACUUM command', 'Retain log history', 'Verify storage reclaimed'],
  optimize: ['Review file sizes', 'Z-ORDER columns', 'OPTIMIZE command', 'Measure query speedup'],
  watermark: ['Assign event-time column', 'Set watermark delay', 'Drop late events', 'Stateful aggregate'],
  broadcast: ['Estimate small table size', 'Set broadcast hint', 'Avoid shuffle join', 'Verify plan in UI'],
  skew: ['Detect key skew', 'Salt hot keys', 'Enable AQE skew join', 'Rebalance partitions'],
  helm: ['Chart templates', 'helm install release', 'Override values.yaml', 'Rollout upgrade'],
  aks: ['Provision AKS cluster', 'Configure node pools', 'Deploy workloads', 'Enable autoscaling'],
  ingress: ['Define Ingress rules', 'TLS certificate', 'Route to Service', 'Test external access'],
  gitops: ['Sync Git manifest', 'Reconcile cluster state', 'Detect drift', 'Auto-remediate'],
  backup: ['Snapshot data store', 'Copy to geo-redundant', 'Test restore procedure', 'Document RPO / RTO'],
  identity: ['Configure Entra ID app', 'Assign managed identity', 'Grant RBAC scope', 'Audit sign-ins'],
  key: ['Store secret in Key Vault', 'Reference from app', 'Rotate on schedule', 'Audit access logs'],
  firewall: ['Define allow rules', 'Deny by default', 'Log blocked traffic', 'Review rule hygiene'],
  sentinel: ['Ingest log sources', 'Write detection rules', 'Investigate incidents', 'Automate response'],
  canary: ['Deploy canary slice', 'Compare error rates', 'Gradual traffic shift', 'Rollback if degraded'],
  rollback: ['Detect failed deploy', 'Revert to prior revision', 'Validate health checks', 'Post-incident review'],
  interview: ['Read question carefully', 'Structure STAR answer', 'Cite concrete example', 'Summarize trade-offs'],
};

/** Topic-specific workflow openers */
const TOPIC_OPENERS = {
  python: 'Open Python REPL / script',
  sql: 'Connect to database',
  pyspark: 'Initialize SparkSession',
  'data-science': 'Load dataset into notebook',
  'machine-learning': 'Load training dataset',
  'artificial-intelligence': 'Define problem & PEAS',
  nlp: 'Acquire text corpus',
  rnn: 'Prepare sequence batch',
  ann: 'Define network architecture',
  cnn: 'Load image tensor batch',
  'generative-ai': 'Select base model',
  'agentic-ai': 'Receive user goal',
  'azure-fundamentals': 'Sign in to Azure Portal',
  'azure-repos': 'Open Azure DevOps project',
  'azure-pipelines': 'Trigger pipeline run',
  'ci-cd': 'Commit to main branch',
  docker: 'Build container context',
  kubernetes: 'Target cluster context',
  aks: 'Connect kubectl to AKS',
  terraform: 'Initialize Terraform backend',
  monitoring: 'Open observability dashboard',
  security: 'Review security baseline',
  'azure-data-factory': 'Open ADF Studio',
  'azure-databricks': 'Attach to Databricks workspace',
  'adls-gen2': 'Authenticate to ADLS Gen2',
  'azure-sql-database': 'Connect to Azure SQL',
  'synapse-analytics': 'Open Synapse workspace',
  'delta-lake': 'Reference Delta table path',
  'pyspark-on-databricks': 'Create Databricks notebook',
  'medallion-architecture': 'Map source systems',
  'data-pipeline-projects': 'Define pipeline requirements',
};

/** Topic-specific closers */
const TOPIC_CLOSERS = {
  python: 'Apply pattern in next Python step',
  sql: 'Validate query in explain plan',
  pyspark: 'Review Spark UI stages',
  'machine-learning': 'Log metrics & compare runs',
  'agentic-ai': 'Evaluate agent trajectory',
  'ci-cd': 'Verify deployment health',
  'azure-data-factory': 'Monitor pipeline run',
  'delta-lake': 'Verify table history',
  default: 'Review & practice with code example',
};

function matchPhraseNodes(slug, label) {
  const text = `${slug} ${label}`;
  for (const { pattern, nodes } of PHRASE_SLUG_PATTERNS) {
    if (pattern.test(slug) || pattern.test(text)) return [...nodes];
  }
  return null;
}

function nodesFromTokens(tokens) {
  const merged = [];
  const seen = new Set();

  for (const token of tokens) {
    const seq = TOKEN_NODES[token];
    if (!seq) continue;
    for (const node of seq) {
      if (!seen.has(node)) {
        merged.push(node);
        seen.add(node);
      }
    }
  }

  return merged;
}

function composeDetailedNodes(topicId, slug, label, description) {
  const phraseNodes = matchPhraseNodes(slug, label);
  if (phraseNodes) {
    const nodes = phraseNodes.slice(0, 9);
    nodes.push(`${label} — ${topicId.replace(/-/g, ' ')}`);
    return nodes.slice(0, 10);
  }

  const tokens = slug.split('-').filter(Boolean);
  const tokenNodes = nodesFromTokens(tokens);
  const descNodes = extractDescriptionNodes(description);
  const opener = TOPIC_OPENERS[topicId] || `Start: ${label}`;
  const closer = TOPIC_CLOSERS[topicId] || TOPIC_CLOSERS.default;

  const composed = [];
  const seen = new Set();
  const add = (node) => {
    const key = node.toLowerCase();
    if (!seen.has(key) && node.length > 2) {
      composed.push(sanitizeMermaidLabel(node));
      seen.add(key);
    }
  };

  add(opener);
  add(`Step focus: ${label}`);
  descNodes.forEach(add);
  tokenNodes.forEach(add);

  if (composed.length < 6) {
    tokens.forEach((token, i) => {
      add(`${capitalizePhrase(token)} — ${label} step ${i + 1}`);
    });
  }

  add(`Validate ${label.toLowerCase()} output`);
  add(`${label} workflow — ${slug}`);
  add(closer);

  while (composed.length < 5) {
    add(`Practice ${label.toLowerCase()} exercise ${composed.length}`);
  }

  return composed.slice(0, 10);
}

function pickLayout(topicId, slug, nodeCount) {
  if (slug.includes('pipeline') || slug.includes('ci') || slug.includes('etl') || slug.includes('flow')) {
    return 'LR';
  }
  if (['azure-pipelines', 'ci-cd', 'data-pipeline-projects'].includes(topicId)) {
    return 'LR';
  }
  return nodeCount <= 6 ? 'TD' : 'LR';
}

function generateFlowDiagram(topicId, slug, label, description) {
  const nodes = composeDetailedNodes(topicId, slug, label, description);
  const layout = pickLayout(topicId, slug, nodes.length);

  return {
    title: `${label} — Process Flow`,
    description: description || `Technical workflow for ${label.toLowerCase()}.`,
    mermaid: buildMermaidFlowchart(nodes, layout),
  };
}

module.exports = {
  sanitizeMermaidLabel,
  buildMermaidFlowchart,
  composeDetailedNodes,
  generateFlowDiagram,
  extractDescriptionNodes,
  TOKEN_NODES,
};
