/**
 * Rich learning content for Azure Data Engineering topics.
 * Generates detailed notes, architecture sections, and animation configs.
 */

const SERVICE_META = {
  'azure-data-factory': {
    service: 'Azure Data Factory',
    animType: 'pipeline-flow',
    components: ['Linked Services', 'Datasets', 'Pipelines', 'Activities', 'Triggers', 'Integration Runtime'],
    azureResource: 'Microsoft.DataFactory/factories',
    codeLang: 'json',
  },
  'azure-databricks': {
    service: 'Azure Databricks',
    animType: 'cluster-flow',
    components: ['Workspace', 'Clusters', 'Notebooks', 'Jobs', 'Unity Catalog', 'Delta Tables'],
    azureResource: 'Microsoft.Databricks/workspaces',
    codeLang: 'python',
  },
  'adls-gen2': {
    service: 'Azure Data Lake Storage Gen2',
    animType: 'storage-zones',
    components: ['Storage Account', 'Containers', 'Directories', 'ACLs', 'RBAC', 'Lifecycle Policies'],
    azureResource: 'Microsoft.Storage/storageAccounts',
    codeLang: 'bash',
  },
  'azure-sql-database': {
    service: 'Azure SQL Database',
    animType: 'sql-flow',
    components: ['Logical Server', 'Database', 'Firewall', 'TDE', 'Query Store', 'Elastic Pools'],
    azureResource: 'Microsoft.Sql/servers/databases',
    codeLang: 'sql',
  },
  'synapse-analytics': {
    service: 'Azure Synapse Analytics',
    animType: 'synapse-unified',
    components: ['Synapse Studio', 'Dedicated SQL Pool', 'Serverless SQL', 'Spark Pools', 'Pipelines'],
    azureResource: 'Microsoft.Synapse/workspaces',
    codeLang: 'sql',
  },
  'delta-lake': {
    service: 'Delta Lake',
    animType: 'delta-log',
    components: ['Transaction Log', 'Parquet Files', 'Checkpoint', 'ACID', 'Time Travel', 'MERGE'],
    azureResource: 'Open table format on ADLS',
    codeLang: 'python',
  },
  'pyspark-on-databricks': {
    service: 'PySpark on Databricks',
    animType: 'spark-transform',
    components: ['SparkSession', 'DataFrames', 'Transformations', 'Delta I/O', 'Structured Streaming'],
    azureResource: 'Databricks Spark runtime',
    codeLang: 'python',
  },
  'medallion-architecture': {
    service: 'Medallion Architecture',
    animType: 'medallion-flow',
    components: ['Bronze Layer', 'Silver Layer', 'Gold Layer', 'Delta Lake', 'Unity Catalog'],
    azureResource: 'Lakehouse pattern on Azure',
    codeLang: 'python',
  },
  'data-pipeline-projects': {
    service: 'Data Pipeline Projects',
    animType: 'etl-end-to-end',
    components: ['Ingestion', 'Transformation', 'Quality', 'Orchestration', 'Monitoring', 'Serving'],
    azureResource: 'End-to-end Azure data platform',
    codeLang: 'python',
  },
};

const SLUG_HINTS = {
  overview: { focus: 'foundational concepts and platform positioning', depth: 'architecture overview' },
  capstone: { focus: 'end-to-end implementation and production readiness', depth: 'capstone project design' },
  security: { focus: 'identity, encryption, network isolation, and least privilege', depth: 'security hardening' },
  monitoring: { focus: 'observability, alerting, SLA tracking, and run diagnostics', depth: 'operational monitoring' },
  performance: { focus: 'throughput, latency, parallelism, and cost-performance trade-offs', depth: 'performance tuning' },
  cost: { focus: 'right-sizing, scheduling, storage tiering, and FinOps', depth: 'cost optimization' },
  migration: { focus: 'assessment, cutover planning, rollback, and validation', depth: 'migration strategy' },
  streaming: { focus: 'real-time ingestion, watermarks, and exactly-once semantics', depth: 'streaming pipelines' },
  error: { focus: 'retry policies, dead-letter handling, and graceful degradation', depth: 'error handling' },
  trigger: { focus: 'scheduling, event-driven execution, and dependency chains', depth: 'orchestration triggers' },
  merge: { focus: 'upsert patterns, SCD Type 2, and change data capture', depth: 'MERGE operations' },
  partition: { focus: 'partition keys, file sizing, and query pruning', depth: 'partitioning strategy' },
  copy: { focus: 'source-to-sink movement, DIU tuning, and staging', depth: 'data movement' },
  linked: { focus: 'connection definitions, authentication, and credential management', depth: 'connectivity' },
  bronze: { focus: 'raw immutable landing and ingestion patterns', depth: 'bronze layer design' },
  silver: { focus: 'cleansing, conforming, deduplication, and typing', depth: 'silver layer design' },
  gold: { focus: 'business aggregates, KPIs, and semantic models', depth: 'gold layer design' },
  delta: { focus: 'ACID guarantees, transaction log, and open table format', depth: 'Delta Lake mechanics' },
  unity: { focus: 'governance, lineage, permissions, and catalog structure', depth: 'Unity Catalog' },
  sql: { focus: 'T-SQL patterns, indexing, and query optimization', depth: 'SQL workloads' },
  spark: { focus: 'distributed processing, lazy evaluation, and Catalyst optimizer', depth: 'Spark execution' },
  ci: { focus: 'automated deployment, ARM templates, and environment promotion', depth: 'CI/CD pipelines' },
  quality: { focus: 'validation rules, quarantine zones, and data contracts', depth: 'data quality' },
  incremental: { focus: 'watermarks, change tracking, and MERGE-based loads', depth: 'incremental loading' },
  batch: { focus: 'scheduled ETL, staging areas, and idempotent loads', depth: 'batch processing' },
  lambda: { focus: 'batch speed layer and serving layer reconciliation', depth: 'lambda architecture' },
  kappa: { focus: 'stream-only processing with replay capability', depth: 'kappa architecture' },
};

function detectSlugHints(slug) {
  const hints = [];
  for (const [key, val] of Object.entries(SLUG_HINTS)) {
    if (slug.includes(key)) hints.push(val);
  }
  return hints.length ? hints : [{ focus: 'practical implementation patterns', depth: 'production usage' }];
}

function buildObjectives(label, topicLabel, step, totalSteps, meta, hints) {
  const phase = step / totalSteps <= 0.33 ? 'foundational' : step / totalSteps <= 0.66 ? 'intermediate' : 'advanced';
  return [
    `Explain ${label} in the context of ${meta.service} and Azure data engineering`,
    `Design ${hints[0].depth} solutions using ${meta.service} components`,
    `Apply ${label.toLowerCase()} patterns in ${phase}-level production scenarios on Azure`,
    `Identify common pitfalls, security considerations, and monitoring signals for ${label.toLowerCase()}`,
  ];
}

function buildOverview(label, description, topicLabel, step, totalSteps, meta, hints) {
  const hint = hints[0];
  const phase = step <= totalSteps * 0.33 ? 'beginner' : step <= totalSteps * 0.66 ? 'intermediate' : 'advanced';
  const prevContext = step > 1 ? `Building on earlier steps in the ${topicLabel} path, ` : '';
  const nextContext = step < totalSteps
    ? `Later steps will extend these ideas with more advanced ${meta.service} scenarios.`
    : `This capstone step consolidates the full ${topicLabel} learning path into a production-ready design.`;

  return [
    `${prevContext}<strong>${label}</strong> is a core topic in the ${topicLabel} track. ${description}`,
    `${meta.service} is a core building block on Azure for modern data platforms. In this ${phase} topic, you will focus on <strong>${hint.focus}</strong> — the practical skills data engineers use when shipping reliable pipelines to production.`,
    `Azure data engineers working with ${meta.service} routinely deal with ${hint.depth}. Understanding how ${label.toLowerCase()} fits into the broader lakehouse architecture — from ingestion through transformation to serving — helps you make better design decisions during architecture reviews and incident response.`,
    `The ${meta.service} ecosystem integrates with other Azure services: Azure Data Factory for orchestration, ADLS Gen2 for storage, Databricks or Synapse Spark for processing, Delta Lake for ACID tables, and Azure Monitor for observability. ${label} sits at the intersection of these components.`,
    `Production teams measure success for ${label.toLowerCase()} through pipeline SLAs, data freshness, cost per TB processed, and mean time to recovery. This lesson covers the theory, a live animated walkthrough, architecture notes, and a hands-on code example you can adapt to your own projects.`,
    nextContext,
  ];
}

function buildConcepts(label, meta, hints, slug) {
  const base = [
    `${label} — definition and when to use it on Azure`,
    `${meta.service} core components: ${meta.components.slice(0, 3).join(', ')}`,
    `Integration with ${meta.components.slice(3, 5).join(' and ') || 'downstream consumers'}`,
    `Authentication: managed identity vs service principal vs Key Vault references`,
    `Monitoring: Azure Monitor metrics, diagnostic logs, and pipeline run history`,
    `Security: private endpoints, RBAC, encryption at rest and in transit`,
    `Cost levers: right-sizing compute, scheduling, and storage lifecycle policies`,
    `Failure modes: retries, idempotency, dead-letter queues, and alerting`,
  ];
  const extra = hints.map((h) => `${h.depth.charAt(0).toUpperCase() + h.depth.slice(1)} patterns`);
  if (slug.includes('capstone')) extra.push('End-to-end architecture diagram and documentation');
  if (slug.includes('streaming')) extra.push('Event Hubs, Kafka, watermarks, and checkpointing');
  if (slug.includes('delta') || slug.includes('merge')) extra.push('Transaction log, optimistic concurrency, and MERGE semantics');
  return [...new Set([...base, ...extra])].slice(0, 12);
}

function buildArchitectureNotes(label, meta, hints) {
  const hint = hints[0];
  return [
    `<strong>Architecture role:</strong> ${label} operates within the ${meta.service} layer of your Azure data platform. Typical flow: source systems → ingestion (ADF/Event Hubs) → bronze landing (ADLS) → silver/gold transformation (Databricks/Synapse) → serving (SQL Warehouse, Power BI).`,
    `<strong>Component interaction:</strong> Key resources include ${meta.components.join(', ')}. Each component has a specific responsibility — avoid mixing orchestration logic with transformation logic; keep notebooks idempotent and pipelines metadata-driven where possible.`,
    `<strong>Data flow:</strong> For ${hint.depth}, data moves through defined zones with clear ownership. Use managed identities for service-to-service auth, store secrets in Azure Key Vault, and enforce network isolation with private endpoints on production workloads.`,
    `<strong>Operational model:</strong> Deploy infrastructure with Terraform or Bicep, store pipeline code in Git (Azure DevOps/GitHub), promote through dev → test → prod environments, and monitor with Azure Monitor alerts on failure rates and data latency SLAs.`,
  ];
}

function buildBestPractices(label, meta) {
  return [
    `Use managed identities instead of embedded credentials for all ${meta.service} connections`,
    `Parameterize pipelines and notebooks — avoid hard-coded environment-specific paths`,
    `Implement idempotent writes (MERGE/upsert) so retries do not duplicate data`,
    `Partition data by date or high-cardinality filter columns to optimize query pruning`,
    `Set up diagnostic settings to Log Analytics on day one — not after the first incident`,
    `Document data contracts: schema, freshness SLA, owner, and downstream consumers for every table`,
    `Test with representative data volumes in a staging environment before production cutover`,
    `Apply the principle of least privilege — separate dev/test/prod service principals and RBAC scopes`,
  ];
}

function buildPitfalls(label) {
  return [
    `Running production workloads on public endpoints without private link or firewall rules`,
    `Ignoring small-file problems — millions of tiny Parquet files destroy Spark read performance`,
    `Skipping data quality checks at the silver layer and pushing dirty data to gold dashboards`,
    `Hard-coding connection strings or storage paths instead of using Key Vault and parameters`,
    `Not setting retry policies and alerts — silent failures propagate stale data to executives`,
    `Over-partitioning or under-partitioning — both cause shuffle-heavy slow queries`,
    `Deploying schema changes without backward-compatible evolution or consumer notification`,
  ];
}

function buildInterviewTips(label, meta, hints) {
  const hint = hints[0];
  return [
    `Be ready to whiteboard how ${label.toLowerCase()} fits into a ${meta.service} architecture with ADLS, ADF, and Databricks`,
    `Explain trade-offs: cost vs performance, batch vs streaming, schema-on-read vs schema-on-write`,
    `Describe a real incident: what failed, how you diagnosed it (Monitor/Spark UI/ADF runs), and how you fixed it`,
    `Discuss ${hint.depth} — interviewers want specifics, not generic definitions`,
    `Mention governance: Unity Catalog, column-level security, and PII masking for regulated industries`,
  ];
}

const SERVICE_DEEP_KNOWLEDGE = {
  'azure-data-factory': 'ADF is the orchestration layer — it does not store data itself. Pipelines are JSON-defined workflows; the Integration Runtime (IR) is the compute engine that executes copy activities, data flows, and external calls. Azure IR handles cloud-to-cloud movement; Self-Hosted IR reaches on-premises SQL Server and file shares behind firewalls.',
  'azure-databricks': 'Databricks runs on Apache Spark with a managed control plane. Workspaces contain notebooks, jobs, clusters, and Unity Catalog metastore. Job clusters spin up per run and terminate after completion — ideal for cost control. The DBR (Databricks Runtime) includes optimized Delta Lake libraries out of the box.',
  'adls-gen2': 'ADLS Gen2 combines blob storage economics with hierarchical namespace (HNS) for directory semantics and POSIX ACLs. Use abfss:// URIs in Spark and ADF. Hot/Cool/Archive tiers plus lifecycle management policies reduce long-term storage cost. Enable soft delete and versioning for ransomware protection.',
  'azure-sql-database': 'Azure SQL Database is a fully managed PaaS offering built on SQL Server engine. vCore model gives independent compute/storage scaling; serverless auto-pauses during idle periods. Query Store captures plan regressions. Synapse Link streams OLTP changes to analytics without ETL lag.',
  'synapse-analytics': 'Synapse unifies dedicated SQL pools (MPP warehouse), serverless SQL (pay-per-TB scanned), Spark pools, and pipelines in one workspace. Synapse Studio is the single pane of glass. Dedicated pools use distribution keys (HASH, REPLICATE, ROUND_ROBIN) — poor distribution causes data skew and slow queries.',
  'delta-lake': 'Delta Lake stores data as Parquet plus a _delta_log directory of JSON commit files. Writers use optimistic concurrency — conflicting writes fail fast and retry. Time travel queries use version numbers or timestamps. OPTIMIZE + ZORDER reduces file count and co-locates related data for faster scans.',
  'pyspark-on-databricks': 'PySpark DataFrames are lazily evaluated — transformations build a DAG until an action (count, collect, write) triggers execution. Databricks Runtime adds Photon vectorized engine, AQE (Adaptive Query Execution), and auto-optimized shuffle. Use display() for visual profiling in notebooks.',
  'medallion-architecture': 'Bronze stores raw source replicas (append-only, schema-on-read). Silver applies business rules: deduplication, type casting, PII tokenization, and conformed dimensions. Gold delivers star schemas, KPI aggregates, and feature tables for ML. Each layer has separate RBAC and retention policies in Unity Catalog.',
  'data-pipeline-projects': 'Production pipelines require non-functional requirements: RPO/RTO targets, data freshness SLAs, cost budgets, and compliance constraints (GDPR, HIPAA, SOX). Design for observability first — every pipeline run should emit structured logs with correlation IDs traceable in Log Analytics KQL queries.',
};

function buildDetailedNotes(label, description, meta, hints, slug, topicId) {
  const hint = hints[0];
  const deepKnowledge = SERVICE_DEEP_KNOWLEDGE[topicId] || '';

  const notes = [
    `<strong>What it is:</strong> ${description} In Azure implementations, ${label} typically involves configuring ${meta.components[0]} and ${meta.components[1]} with clear separation between control plane (orchestration) and data plane (storage/compute).`,
    `<strong>Platform context:</strong> ${deepKnowledge}`,
    `<strong>How it works:</strong> When a pipeline or job runs, the ${meta.service} control plane authenticates via managed identity, reads configuration from Git or a metadata store, executes activities against the data plane, and writes results to ADLS or a warehouse. Checkpointing and logging ensure recoverability.`,
    `<strong>When to use:</strong> Choose ${label.toLowerCase()} when your workload requires ${hint.focus}. Avoid it when a simpler pattern (e.g., direct copy without transformation) meets the SLA at lower cost.`,
    `<strong>Azure-specific configuration:</strong> Provision resources in the same region as your data lake to minimize egress charges. Use Azure Policy to enforce tags, encryption, and allowed SKUs. Register resources under ${meta.azureResource} in your subscription before deployment.`,
  ];
  if (slug.includes('capstone')) {
    notes.push(`<strong>Capstone deliverables:</strong> Architecture diagram, pipeline code in Git, runbook for on-call, data quality test suite, cost estimate, and rollback plan. Present to stakeholders with SLA metrics and sample dashboards.`);
  }
  if (slug.includes('streaming')) {
    notes.push(`<strong>Streaming specifics:</strong> Use Event Hubs or Kafka as the buffer, Structured Streaming with checkpoint locations on ADLS, and Delta Lake as the sink for exactly-once semantics. Set watermarks for late-arriving data and monitor consumer lag.`);
  }
  if (slug.includes('linked') || slug.includes('connection') || slug.includes('auth')) {
    notes.push(`<strong>Connectivity:</strong> Prefer system-assigned managed identity on ADF/Databricks/Synapse. Store connection strings in Key Vault and reference via Key Vault linked service. For on-premises sources, deploy Self-Hosted Integration Runtime in a DMZ with outbound-only firewall rules.`);
  }
  if (slug.includes('merge') || slug.includes('upsert') || slug.includes('incremental')) {
    notes.push(`<strong>Incremental patterns:</strong> Use high-watermark columns (modified_date, rowversion) for CDC. Delta MERGE handles upserts atomically. For SCD Type 2, add effective_date, end_date, and is_current columns in the MERGE WHEN MATCHED/NOT MATCHED clauses.`);
  }
  return notes;
}

function buildAnimationSteps(label, meta, slug) {
  const type = meta.animType;
  const stepsByType = {
    'pipeline-flow': [
      'Trigger fires (schedule or event)',
      'Integration Runtime starts',
      'Linked Service authenticates to source',
      'Copy/Transform activity executes',
      'Data lands in ADLS sink',
      'Pipeline run succeeds — Monitor logs result',
    ],
    'cluster-flow': [
      'User submits notebook or job',
      'Cluster Manager allocates workers',
      'Driver builds execution plan (DAG)',
      'Executors process partitions in parallel',
      'Results written to Delta table on ADLS',
      'Cluster auto-terminates (job cluster)',
    ],
    'storage-zones': [
      'Source system generates data',
      'Ingestion lands raw files in Bronze zone',
      'Spark job cleanses into Silver zone',
      'Aggregations materialize Gold zone',
      'Lifecycle policy tiers cold data to Archive',
      'Consumers query via serverless SQL or warehouse',
    ],
    'sql-flow': [
      'Application requests connection',
      'Firewall / Private Endpoint validates access',
      'TDS connection established with TLS',
      'Query parsed and optimized (Query Store)',
      'Data pages read from storage',
      'Results returned to client application',
    ],
    'synapse-unified': [
      'Data ingested via Synapse Pipeline',
      'Raw files stored on linked ADLS account',
      'Serverless SQL queries external tables',
      'Spark pool transforms to curated Delta tables',
      'Dedicated pool serves high-performance BI',
      'Synapse Studio monitors all workloads',
    ],
    'delta-log': [
      'Spark job begins write transaction',
      'New Parquet files written to table directory',
      'JSON commit entry appended to _delta_log',
      'Transaction committed — readers see new snapshot',
      'Checkpoint consolidates log periodically',
      'OPTIMIZE compacts small files',
    ],
    'spark-transform': [
      'SparkSession reads from ADLS path',
      'Catalyst optimizer builds logical plan',
      'Partitions distributed to executors',
      'Transformations execute (filter, join, agg)',
      'Adaptive Query Execution rebalances skew',
      'Results written to Delta with MERGE',
    ],
    'medallion-flow': [
      'Sources ingested to Bronze (raw, immutable)',
      'Silver: dedupe, type-cast, conform schemas',
      'Data quality rules quarantine bad records',
      'Gold: star schema / KPI aggregates built',
      'Unity Catalog governs permissions per layer',
      'Power BI / ML consumes Gold tables',
    ],
    'etl-end-to-end': [
      'Requirements & SLA defined',
      'Architecture reviewed and approved',
      'Ingestion + transformation pipelines built',
      'Data quality gates and monitoring configured',
      'CI/CD deploys to staging then production',
      'Documentation and lineage published',
    ],
  };
  return {
    type,
    title: `${label} — Animated Walkthrough`,
    description: `Watch how ${label.toLowerCase()} flows through ${meta.service} components on Azure.`,
    steps: stepsByType[type] || stepsByType['pipeline-flow'],
  };
}

function buildCodeExample(topicId, page, meta, slug) {
  if (page.codeExample) return page.codeExample;

  const label = page.label;
  const lang = page.codeLang || meta.codeLang;

  const examples = {
    json: `{
  "name": "PL_${slugToName(slug)}",
  "properties": {
    "description": "${page.description.slice(0, 80)}",
    "activities": [
      {
        "name": "Copy_${slugToName(slug)}",
        "type": "Copy",
        "policy": { "retry": 2, "retryIntervalInSeconds": 30 },
        "typeProperties": {
          "source": { "type": "AzureSqlSource" },
          "sink": { "type": "ParquetSink", "storeSettings": { "type": "AzureBlobFSWriteSettings" } }
        }
      }
    ]
  }
}`,
    python: `# ${label} — PySpark / Delta Lake example
from pyspark.sql import functions as F

# Read source (ADLS Gen2 / Delta)
df = spark.read.format("delta").load("abfss://bronze@storage.dfs.core.windows.net/${slug}/")

# Transform — ${page.description.split('.')[0]}
result = (
    df.filter(F.col("is_active") == True)
      .withColumn("processed_at", F.current_timestamp())
      .dropDuplicates(["id"])
)

# Write to silver/gold Delta table (idempotent MERGE pattern)
result.write.format("delta").mode("overwrite").save(
    "abfss://silver@storage.dfs.core.windows.net/${slug}/"
)`,
    sql: `-- ${label} — Azure SQL / Synapse example
-- ${page.description}

-- Create staging table
CREATE TABLE dbo.stg_${slugToName(slug)} (
    id          INT PRIMARY KEY,
    event_date  DATE NOT NULL,
    amount      DECIMAL(18,2),
    updated_at  DATETIME2 DEFAULT SYSUTCDATETIME()
);

-- Incremental load with MERGE
MERGE dbo.fact_${slugToName(slug)} AS target
USING dbo.stg_${slugToName(slug)} AS source
ON target.id = source.id
WHEN MATCHED AND source.updated_at > target.updated_at THEN
    UPDATE SET amount = source.amount, updated_at = source.updated_at
WHEN NOT MATCHED THEN
    INSERT (id, event_date, amount, updated_at)
    VALUES (source.id, source.event_date, source.amount, source.updated_at);`,
    bash: `# ${label} — Azure CLI / storage operations
# ${page.description}

# Create resource group and storage account (ADLS Gen2)
az group create --name rg-dataeng --location eastus

az storage account create \\
  --name stdataeng${slugToName(slug).toLowerCase().slice(0, 6)} \\
  --resource-group rg-dataeng \\
  --location eastus \\
  --sku Standard_LRS \\
  --enable-hierarchical-namespace true

# Upload sample data to bronze zone
az storage fs directory create \\
  --file-system bronze \\
  --name "${slug}" \\
  --account-name stdataeng${slugToName(slug).toLowerCase().slice(0, 6)}

az storage fs file upload \\
  --file-system bronze \\
  --path "${slug}/data.parquet" \\
  --source ./sample.parquet \\
  --account-name stdataeng${slugToName(slug).toLowerCase().slice(0, 6)}`,
  };

  return { lang, code: page.codeExample || examples[lang] || examples.python };
}

function slugToName(slug) {
  return slug.replace(/-/g, '_').replace(/[^a-zA-Z0-9_]/g, '').slice(0, 30);
}

function buildLearnItems(label, meta, hints) {
  return [
    `Core theory behind ${label.toLowerCase()} on ${meta.service}`,
    `Animated walkthrough of data flow through Azure components`,
    `Architecture patterns for ${hints[0].depth}`,
    `Production best practices, pitfalls, and interview preparation`,
    `Hands-on code example you can run in your Azure subscription`,
    `How ${label.toLowerCase()} connects to prior and upcoming steps in this path`,
  ];
}

function buildAzureDEContent(topicId, page, ctx) {
  const meta = SERVICE_META[topicId];
  if (!meta) return null;

  const { step, totalSteps, topic } = ctx;
  const hints = detectSlugHints(page.slug);
  const label = page.label;
  const description = page.description;

  return {
    objectives: buildObjectives(label, topic.label, step, totalSteps, meta, hints),
    concepts: buildConcepts(label, meta, hints, page.slug),
    overview: buildOverview(label, description, topic.label, step, totalSteps, meta, hints),
    learnItems: buildLearnItems(label, meta, hints),
    architectureNotes: buildArchitectureNotes(label, meta, hints),
    bestPractices: buildBestPractices(label, meta),
    pitfalls: buildPitfalls(label),
    interviewTips: buildInterviewTips(label, meta, hints),
    detailedNotes: buildDetailedNotes(label, description, meta, hints, page.slug, topicId),
    animation: buildAnimationSteps(label, meta, page.slug),
    flowDiagram: require('./rich-content/flow-diagrams').resolveFlowDiagram(
      topicId,
      page.slug,
      label,
      description
    ),
    codeExample: buildCodeExample(topicId, page, meta, page.slug),
    readMinutes: 12 + Math.min(8, Math.floor(step / 3)),
  };
}

module.exports = {
  SERVICE_META,
  buildAzureDEContent,
  detectSlugHints,
};
