/**
 * Rich interview Q&A content — 8-10 questions per page with domain-specific answers.
 */

const INTERVIEW_META = {
  'python-interview-questions': {
    area: 'Python',
    stack: 'Python 3, data structures, concurrency, pytest',
  },
  'sql-interview-questions': {
    area: 'SQL',
    stack: 'joins, window functions, query plans, indexing',
  },
  'pyspark-interview-questions': {
    area: 'PySpark',
    stack: 'Spark DataFrames, shuffle, Delta Lake, Databricks',
  },
  'azure-devops-interview-questions': {
    area: 'Azure DevOps',
    stack: 'Git, YAML pipelines, Docker, Kubernetes, Terraform',
  },
  'azure-data-engineering-interview-questions': {
    area: 'Azure Data Engineering',
    stack: 'ADF, Databricks, ADLS, Delta Lake, Synapse',
  },
  'ai-ml-interview-questions': {
    area: 'AI/ML',
    stack: 'scikit-learn, deep learning, NLP, LLMs, MLOps',
  },
};

const QUESTION_BANK = {
  python: [
    { q: 'Explain list vs tuple vs set — when would you choose each?', a: 'Lists are ordered mutable sequences for homogeneous collections you modify. Tuples are immutable ordered records — use for fixed-size data, dict keys, and function returns. Sets are unordered unique collections for membership tests and deduplication. Discuss time complexity: O(1) average set lookup vs O(n) list scan.' },
    { q: 'What is the GIL and how does it affect concurrency?', a: 'The Global Interpreter Lock allows only one thread to execute Python bytecode at a time in CPython. CPU-bound parallelism needs multiprocessing or native extensions; I/O-bound work benefits from threading or asyncio because threads release the GIL during I/O waits.' },
    { q: 'How do decorators work under the hood?', a: 'Decorators are higher-order functions applying wrapper(callable). @decorator desugars to func = decorator(func). Mention functools.wraps to preserve metadata, parameterized decorators (decorator factory), and common uses: timing, auth, caching, retry.' },
    { q: 'Describe Python memory management.', a: 'CPython uses reference counting plus cyclic garbage collector for containers. Discuss __slots__ for memory savings, weak references, and that large objects may use pymalloc arenas. For interviews, connect to profiling with tracemalloc.' },
    { q: 'How would you design a rate-limited API client in Python?', a: 'Use asyncio + semaphore or token bucket algorithm, exponential backoff on 429, structured logging, configurable limits per endpoint, and unit tests with mocked clock. Mention tenacity for retries and httpx/aiohttp for async I/O.' },
    { q: 'What are common pitfalls with mutable default arguments?', a: 'def append_item(x, bucket=[]) shares one list across calls. Fix with None sentinel: bucket = bucket or []. This is a frequent bug in interview coding — always explain the fix.' },
    { q: 'Explain *args and **kwargs with a practical example.', a: '*args collects positional extras as tuple; **kwargs collects keyword extras as dict. Use in wrapper functions forwarding to inner APIs. Example: logging decorator or Django view wrapper.' },
    { q: 'How do you test async code with pytest?', a: 'Use pytest-asyncio, mark tests @pytest.mark.asyncio, mock aiohttp responses with aioresponses, and test cancellation/timeouts. For integration tests, spin ephemeral services or use testcontainers.' },
    { q: 'When would you use multiprocessing vs threading vs asyncio?', a: 'Multiprocessing for CPU-bound parallel work bypassing GIL. Threading for blocking I/O with legacy sync libraries. Asyncio for high-concurrency I/O with async-native libraries. Justify choice with workload profile and operational complexity.' },
    { q: 'Walk through debugging a production Python memory leak.', a: 'Reproduce in staging, capture heap with tracemalloc or objgraph, identify growing object types, inspect reference chains, check caches/global singletons, add metrics, deploy fix with regression test.' },
  ],
  sql: [
    { q: 'Explain the difference between WHERE and HAVING.', a: 'WHERE filters rows before aggregation; HAVING filters groups after GROUP BY. You cannot reference aggregate aliases in WHERE without a subquery/CTE. Example: HAVING SUM(amount) > 1000 for high-spend customers.' },
    { q: 'When would you use a window function instead of GROUP BY?', a: 'When you need row-level detail plus aggregates — running totals, rankings, lag/lead comparisons. GROUP BY collapses rows; windows preserve grain. Example: revenue share per order within customer without losing order rows.' },
    { q: 'How do indexes affect INSERT/UPDATE performance?', a: 'Indexes speed reads but add write overhead maintaining B-tree structures. Too many indexes hurt write-heavy OLTP. Covering indexes reduce key lookups. Mention included columns and selective filters.' },
    { q: 'Describe isolation levels and a phantom read scenario.', a: 'READ UNCOMMITTED allows dirty reads; READ COMMITTED prevents them; REPEATABLE READ prevents non-repeatable reads; SERIALIZABLE prevents phantoms. Explain trade-off between consistency and concurrency; SQL Server/Snapshot isolation variants.' },
    { q: 'Write an approach for top-N per group without correlated subqueries.', a: 'Use ROW_NUMBER() OVER (PARTITION BY group ORDER BY metric DESC) in CTE, filter rn <= N. Discuss index on (group, metric) for performance vs RANK ties handling.' },
    { q: 'How do you diagnose a slow query in production?', a: 'Capture actual execution plan, check row estimates vs actuals, look for scans vs seeks, missing indexes, implicit conversions, parameter sniffing. Use Query Store on Azure SQL, EXPLAIN on Postgres.' },
    { q: 'Explain MERGE pitfalls.', a: 'Race conditions without proper keys, accidental cartesian matches, non-deterministic WHEN MATCHED if duplicates exist in source. Recommend staging dedup, transactions, and validation counts post-MERGE.' },
    { q: 'Star schema vs snowflake — interview trade-offs.', a: 'Star: denormalized dimensions, simpler joins, faster BI queries. Snowflake: normalized dimensions, less redundancy, more joins. Lakehouse often uses star/silver-gold with dimension tables in Delta.' },
    { q: 'How would you implement SCD Type 2 in SQL?', a: 'Track effective_start, effective_end, is_current flag or end_date sentinel. On change, close current row and insert new version. Delta MERGE is common on Azure; discuss surrogate keys and indexing current rows.' },
    { q: 'What is parameter sniffing and how do you mitigate it?', a: 'Optimizer caches plan for first parameter values which may be suboptimal for others. Mitigations: OPTIMIZE FOR UNKNOWN, recompile hints, Query Store plan forcing, local variable workaround (careful), updated statistics.' },
  ],
  pyspark: [
    { q: 'RDD vs DataFrame — when still use RDDs?', a: 'DataFrames leverage Catalyst optimizer, whole-stage codegen, and structured APIs — default choice. RDDs for unstructured processing, custom partitioners, or legacy code. Prefer Dataset/DataFrame for production ETL.' },
    { q: 'What causes shuffle in Spark and how to reduce it?', a: 'Wide transformations: groupBy, join, repartition, distinct. Reduce by filtering early, using broadcast joins for small tables, salting skewed keys, AQE, increasing shuffle partitions judiciously, and avoiding unnecessary repartition.' },
    { q: 'Explain lazy evaluation and lineage.', a: 'Transformations build DAG without execution; actions trigger jobs. Lineage enables fault tolerance via recomputation. Discuss stage boundaries at shuffle and pipelined narrow transformations within stages.' },
    { q: 'When to broadcast join?', a: 'When one table fits in driver/executor memory under spark.sql.autoBroadcastJoinThreshold (default 10MB). Force with broadcast() hint after verifying size. Avoid broadcasting large tables — OOM risk.' },
    { q: 'How do you handle data skew in joins?', a: 'Detect skew keys via Spark UI stage metrics, salt hot keys on both sides, use AQE skew join (Spark 3), isolate heavy keys to separate branch, or pre-aggregate skewed groups.' },
    { q: 'Structured Streaming semantics — at-least-once vs exactly-once.', a: 'Depends on sink idempotency and checkpointing. Kafka+Delta with transactional writes can achieve effectively exactly-once. Discuss watermark late data drops and output modes append/update/complete.' },
    { q: 'Python UDF performance issues?', a: 'Row UDFs serialize rows Python↔JVM — slow. Prefer Spark SQL functions, pandas UDFs (vectorized), or Scala UDFs. If UDF required, minimize columns passed and cache strategically.' },
    { q: 'Explain Delta Lake MERGE interview scenario.', a: 'Upsert staging to target on business key, WHEN MATCHED UPDATE, WHEN NOT MATCHED INSERT, optional WHEN NOT MATCHED BY SOURCE DELETE for hard deletes. Mention ZORDER on join keys and conflict detection tests.' },
    { q: 'How do you debug OOM on executors?', a: 'Check spill metrics, reduce collect(), increase memory overhead fraction, tune shuffle partitions, avoid wide transformations on huge partitions, analyze skew, increase executor memory/cores, use AQE coalesce.' },
    { q: 'Design batch ETL for 5TB daily on Azure Databricks.', a: 'Land raw on ADLS bronze as Parquet/Delta, partition by date, use Auto Loader/incremental, transform in silver with merge, aggregate gold, orchestrate with ADF, monitor with Azure Monitor, enforce Unity Catalog permissions, right-size job clusters vs SQL warehouse for serving.' },
  ],
  'azure-devops': [
    { q: 'Explain CI vs CD vs continuous deployment.', a: 'CI integrates code frequently with automated build/test. CD ensures artifact is always deployable. Continuous deployment auto-releases to prod after gates. Discuss approval environments and feature flags for risk control.' },
    { q: 'How do branch policies improve quality?', a: 'Require reviewers, build validation, comment resolution, merge restrictions. Prevents direct pushes to main, enforces tests and code review — critical for regulated industries.' },
    { q: 'Compare blue-green vs canary deployments.', a: 'Blue-green swaps traffic between two full environments — fast rollback, double infra cost. Canary routes small traffic percentage to new version, monitors metrics, gradually increases — lower blast radius, needs traffic routing (Ingress/service mesh).' },
    { q: 'Docker image optimization techniques?', a: 'Multi-stage builds, slim base images (distroless/alpine cautiously), .dockerignore, layer caching order (deps before code), non-root user, scan with Defender/Trivy, pin digests in prod.' },
    { q: 'Kubernetes readiness vs liveness probes.', a: 'Readiness: pod receives traffic when ready; failures remove from Service endpoints. Liveness: restart container if deadlocked. Startup probe for slow-init apps. Misconfigured liveness causes restart loops.' },
    { q: 'Terraform state locking — why important?', a: 'Prevents concurrent apply corrupting state. Remote backend (Azure Storage + blob lease) enables team collaboration. Never commit secrets in state — use sensitive outputs carefully.' },
    { q: 'How do you secure pipeline secrets?', a: 'Azure DevOps variable groups linked to Key Vault, secret variables never logged, OIDC federated credentials to Azure instead of long-lived SP secrets, least privilege service connections.' },
    { q: 'AKS networking: Azure CNI vs kubenet.', a: 'Azure CNI assigns VNet IPs to pods — better integration with NSGs/private endpoints, consumes IP space. Kubenet uses overlay — simpler IP management, different routing constraints. Choose based on IP capacity and security requirements.' },
    { q: 'Incident response steps for failed production deployment.', a: 'Detect via alerts, assess blast radius, rollback release or redeploy last good artifact, communicate status, root cause with timeline, add automated test/gate preventing recurrence, postmortem blameless.' },
    { q: 'Design CI/CD for microservices monorepo.', a: 'Path filters triggering service-specific pipelines, shared template library, independent versioning/tags, contract tests, deployment rings, artifact promotion across environments, observability per service.' },
  ],
  'azure-data-engineering': [
    { q: 'ETL vs ELT on Azure — when choose each?', a: 'ETL transforms before load — legacy warehouses. ELT loads raw to lake then transforms with Spark/SQL — modern lakehouse default on ADLS+Databricks. ELT scales with cheap storage and flexible compute separation.' },
    { q: 'Explain medallion architecture layers.', a: 'Bronze: raw immutable ingest. Silver: cleansed, conformed, deduped. Gold: business aggregates and KPIs. Benefits: replayability, governance boundaries, incremental refinement. Implement with Delta tables and Unity Catalog.' },
    { q: 'ADF copy activity performance tuning.', a: 'DIU allocation, parallel copy, staging on blob for database sources, partition slicing, compression format choice, IR placement near source/sink, avoid unnecessary schema mapping overhead.' },
    { q: 'Delta Lake time travel use cases.', a: 'Audit historical states, reproduce ML training snapshots, rollback bad writes, debug pipeline regressions by querying older table versions with VERSION AS OF timestamp.' },
    { q: 'Implement incremental load with watermark.', a: 'Store high-watermark column (modified_at) in control table, query source WHERE modified_at > watermark, merge into target, atomically advance watermark after success, handle late-arriving data with lookback window.' },
    { q: 'Synapse dedicated vs serverless pools.', a: 'Dedicated: provisioned MPP for predictable heavy workloads. Serverless: pay-per-TB scanned for ad hoc lake queries. Often combine: curated Delta in lake queried serverless, hot aggregates in dedicated SQL pool.' },
    { q: 'Data quality framework components.', a: 'Expectations on schema/nulls/ranges, quarantine zone for bad records, metrics dashboards, alerting, data contracts between producers/consumers, Great Expectations/Delta constraints integration.' },
    { q: 'Secure ADLS Gen2 access patterns.', a: 'RBAC at container/folder level, ACLs for fine-grained POSIX-style, private endpoints, disable public access, managed identity for pipelines, audit logs to Log Analytics, encryption with CMK optional.' },
    { q: 'Streaming IoT pipeline design on Azure.', a: 'IoT Hub/Event Hubs ingest, Stream analytics or Structured Streaming process, watermark late events, idempotent sink writes to Delta bronze, serve gold via SQL endpoint/Power BI, monitor lag and dead-letter queue.' },
    { q: 'Pipeline failure reconciliation process.', a: 'Identify failed slice, rerun from checkpoint, compare row counts/checksums source vs target, backfill partitions, document root cause (schema drift, auth expiry), add proactive alerts on SLA miss.' },
  ],
  'ai-ml': [
    { q: 'Bias-variance tradeoff — explain with example.', a: 'High bias: underfit, model too simple. High variance: overfit, memorizes noise. Use validation curves, regularization, more data, simpler models, or ensemble methods. Connect to cross-validation metrics trends.' },
    { q: 'When use Random Forest vs Gradient Boosting?', a: 'RF: robust default, parallel training, less tuning, handles noise. GBM/XGBoost/LightGBM: often higher accuracy with tuning, sequential boosting, risk overfit without regularization. Discuss training time and interpretability.' },
    { q: 'Explain precision vs recall for fraud detection.', a: 'Fraud is imbalanced — high recall catches fraud (low FN) but may increase false positives. Precision matters for analyst workload. Optimize PR-AUC, tune threshold on validation, use cost-sensitive learning.' },
    { q: 'Transformer attention in one minute.', a: 'Attention computes weighted sum of values where weights = softmax(QK^T/√d). Each token attends to all tokens capturing context. Self-attention in encoder; masked in decoder for autoregressive generation.' },
    { q: 'RAG vs fine-tuning decision matrix.', a: 'RAG for dynamic knowledge, citation needs, lower training cost. Fine-tune for style/format/domain terminology, task-specific behavior. Often combine: fine-tuned model + RAG for facts.' },
    { q: 'MLOps: what do you monitor post-deployment?', a: 'Data drift, prediction drift, latency, error rates, business KPIs, ground truth delay pipelines, alert on feature distribution shift, automated retrain triggers, model version rollback.' },
    { q: 'Explain vanishing gradients in RNNs.', a: 'Repeated multiplication of gradients <1 across time steps shrinks signal. LSTM/GRU gates mitigate. Transformers replace recurrence with attention for long-range deps.' },
    { q: 'Design churn prediction system end-to-end.', a: 'Feature store from billing/product usage, label definition (churn in 30d), time-based train/test split preventing leakage, class imbalance handling, SHAP for explainability, batch scoring pipeline, CRM integration, monitor performance monthly.' },
    { q: 'LLM evaluation beyond BLEU.', a: 'Human rubrics, LLM-as-judge with calibration, task-specific accuracy (tool call success), toxicity/faithfulness checks, RAG citation recall, regression suites on golden prompts, online A/B testing.' },
    { q: 'Responsible AI — fairness intervention example.', a: 'Audit metrics across demographic groups, reweight training data, threshold adjustment per group cautiously (legal review), document model cards, human review for high-stakes decisions, logging for appeals.' },
  ],
};

function bankKey(topicId) {
  if (topicId.includes('python')) return 'python';
  if (topicId.includes('sql') && !topicId.includes('pyspark')) return 'sql';
  if (topicId.includes('pyspark')) return 'pyspark';
  if (topicId.includes('azure-devops')) return 'azure-devops';
  if (topicId.includes('azure-data-engineering')) return 'azure-data-engineering';
  if (topicId.includes('ai-ml')) return 'ai-ml';
  return 'python';
}

function slugSpecificQuestions(page, meta) {
  const slug = page.slug;
  const label = page.label;
  const extras = [];

  if (slug.includes('scenario') || slug.includes('system-design')) {
    extras.push({
      q: `System design: ${label} — outline your architecture.`,
      a: `Structure answer: requirements clarifying questions, high-level diagram (ingress, compute, storage, observability), data flow, scaling strategy, failure modes, security, cost estimate, and phased MVP rollout.`,
    });
  }
  if (slug.includes('debug')) {
    extras.push({
      q: `How do you debug ${label.toLowerCase()} issues under time pressure?`,
      a: `Reproduce minimally, check recent changes, inspect logs/metrics/traces, bisect scope (infra vs app vs data), form hypothesis, validate with targeted test, fix forward with rollback plan, post-incident action items.`,
    });
  }
  if (slug.includes('performance') || slug.includes('optimization')) {
    extras.push({
      q: `Optimization scenario for ${label.toLowerCase()} — where do you start?`,
      a: `Measure first (profiler, query plan, Spark UI). Attack biggest bottleneck: algorithmic complexity, I/O, network shuffle, or config. Verify improvements with benchmarks; avoid premature micro-optimizations.`,
    });
  }

  return extras;
}

function buildInterviewContent(page, ctx) {
  const { topic, step, totalSteps } = ctx;
  const meta = INTERVIEW_META[topic.id] || { area: topic.label, stack: 'industry tools' };
  const key = bankKey(topic.id);
  const bank = QUESTION_BANK[key] || QUESTION_BANK.python;

  const bankLen = bank.length;
  const offset = (step * 3) % bankLen;
  const core = [];
  for (let i = 0; i < 8; i += 1) {
    core.push(bank[(offset + i) % bankLen]);
  }

  const selected = [
    ...core,
    ...slugSpecificQuestions(page, meta),
    {
      q: `What follow-ups might interviewers ask after ${page.label.toLowerCase()} questions?`,
      a: `Expect depth on edge cases, trade-offs between ${meta.stack}, failure recovery, and how your answer changes at scale or under compliance constraints (HIPAA, SOC2).`,
    },
    {
      q: `How do you communicate ${page.label.toLowerCase()} answers clearly in a live interview?`,
      a: `Use structure: definition → example → trade-offs → production consideration. Write clean code or SQL incrementally, state assumptions, and narrate your thinking while validating with a small test case.`,
    },
  ];

  const qa = selected.slice(0, 10).map((item, i) => ({
    question: item.q,
    answer: item.a,
    num: i + 1,
  }));

  const phase = step / totalSteps <= 0.33 ? 'foundational' : step / totalSteps <= 0.66 ? 'intermediate' : 'advanced';

  return {
    objectives: [
      `Master ${page.label.toLowerCase()} ${meta.area} interview questions at ${phase} depth`,
      'Practice structured answers with examples, metrics, and trade-offs',
      `Review ${meta.stack} concepts commonly probed in follow-ups`,
      'Identify weak areas and map them to DevSpark learning path steps',
      'Build a personal anecdote bank connecting theory to project experience',
    ],
    concepts: [
      `${page.label} core topics`,
      `${meta.area} terminology and patterns`,
      'Answer structuring (STAR / definition-example-tradeoff)',
      'Whiteboard and live coding etiquette',
      'Follow-up depth areas',
      'Common mistakes that fail interviews',
      'Metrics and business impact framing',
      'Testing and production hardening talking points',
      'Security and compliance angles',
      'Resources for continued drill practice',
    ],
    overview: [
      `<strong>${page.label}</strong> — ${page.description}`,
      `This page contains <strong>${qa.length} curated Q&amp;A pairs</strong> focused on ${meta.area} interviews — not generic placeholders. Each answer models how senior engineers communicate: precise definitions, concrete examples, and trade-offs.`,
      `Interviewers at ${phase} difficulty expect you to connect ${page.label.toLowerCase()} to ${meta.stack}. Practice aloud, time yourself (2–3 minutes per answer), and prepare one personal project story that touches these themes.`,
      `After reviewing all questions, attempt mock interviews with a peer. Have them ask unpredictable follow-ups — "What if data volume 10x?" or "How would you test this?" — and refine your responses.`,
      step < totalSteps
        ? `Continue to the next interview page to broaden coverage across the ${meta.area} competency map.`
        : `You have completed this interview track. Cycle back to weak areas and pair with hands-on labs in the corresponding DevSpark learning paths.`,
    ],
    learnItems: [
      'High-frequency question patterns at this difficulty',
      'Model answers with examples and trade-offs',
      'Follow-up topics interviewers commonly probe',
      'Red flags that weaken technical interviews',
      'Whiteboard/live-coding strategies',
      'How to tie answers to measurable business outcomes',
    ],
    interviewQA: qa,
    codeExample: page.slug.includes('coding') || page.slug.includes('algorithm') ? {
      lang: 'python',
      code: `# ${page.label} — interview coding pattern (two pointers)
def max_profit(prices: list[int]) -> int:
    min_price, best = float("inf"), 0
    for p in prices:
        min_price = min(min_price, p)
        best = max(best, p - min_price)
    return best

assert max_profit([7, 1, 5, 3, 6, 4]) == 5`,
    } : null,
    readMinutes: 12 + Math.min(4, Math.floor(step / 5)),
  };
}

module.exports = { buildInterviewContent, INTERVIEW_META };
