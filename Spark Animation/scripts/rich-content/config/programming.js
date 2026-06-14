/**
 * Topic metadata, slug hints, and index page content for programming topics.
 */
const { GLOBAL_SLUG_HINTS } = require('../global-hints');

const programmingTopics = {
  python: {
    id: 'python',
    meta: {
      domain: 'Python programming and software engineering',
      stack: 'Python 3.11+, pip, venv, pytest, typing, pandas, NumPy',
      ecosystem: 'data engineering scripts, automation, APIs, and ML pipelines',
      platform: 'local dev, CI runners, Azure Functions, and Databricks notebooks',
      bestPractices: [
        'Follow PEP 8 and use ruff or black for consistent formatting',
        'Prefer pathlib and context managers for resource handling',
        'Use type hints on public APIs and run mypy in CI',
      ],
    },
    slugHints: {
      variable: { focus: 'naming, assignment, and dynamic typing rules', depth: 'Python object model basics', tools: ['Python REPL', 'type()'] },
      list: { focus: 'mutable sequences and list algorithms', depth: 'sequence operations', concepts: ['Big-O of append vs insert', 'List comprehensions', 'Copy vs deepcopy'] },
      dict: { focus: 'hash maps and key-value modeling', depth: 'dictionary patterns', concepts: ['Hashability', 'defaultdict', 'JSON serialization'] },
      function: { focus: 'first-class functions and signatures', depth: 'function design', concepts: ['*args/**kwargs', 'Pure vs impure functions'] },
      class: { focus: 'object-oriented design in Python', depth: 'class and instance modeling', concepts: ['__init__', 'dunder methods', 'composition vs inheritance'] },
      decorator: { focus: 'higher-order functions and metadata preservation', depth: 'decorator patterns', tools: ['functools.wraps'] },
      async: { focus: 'concurrent I/O with asyncio', depth: 'async event-loop patterns', tools: ['asyncio', 'aiohttp'] },
      pytest: { focus: 'automated testing and fixtures', depth: 'test-driven development', tools: ['pytest', 'pytest-cov'] },
      pandas: { focus: 'tabular data manipulation', depth: 'DataFrame analytics', tools: ['pandas', 'NumPy'] },
      numpy: { focus: 'vectorized numerical computing', depth: 'ndarray operations', tools: ['NumPy'] },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>Python</strong> track takes you from first script to production-ready patterns used in data engineering, backend services, and ML workflows. Topics cover core syntax, data structures, OOP, async I/O, testing, and a capstone CLI project.</p>`,
      phases: [
        { title: 'Phase 1: Core Language (Steps 1–12)', description: 'Setup, types, collections, control flow, and functions.' },
        { title: 'Phase 2: Intermediate Python (Steps 13–24)', description: 'Scope, comprehensions, I/O, exceptions, modules, OOP, decorators, generators.' },
        { title: 'Phase 3: Production Skills (Steps 25–35)', description: 'venv, packaging, NumPy/pandas, asyncio, pytest, typing, logging, best practices, capstone.' },
      ],
      prerequisites: ['Basic computer literacy', 'Text editor or VS Code', 'Optional: prior exposure to any programming language'],
      outcomes: [
        'Write idiomatic Python 3 with proper structure and error handling',
        'Use pandas/NumPy for data tasks and pytest for automated tests',
        'Apply OOP, decorators, and async patterns in real scripts',
        'Ship a small capstone project demonstrating path mastery',
      ],
    },
  },

  sql: {
    id: 'sql',
    meta: {
      domain: 'SQL and relational analytics',
      stack: 'ANSI SQL, T-SQL, PostgreSQL, window functions, execution plans',
      ecosystem: 'warehouses, lakehouse SQL endpoints, and reporting layers',
      platform: 'Azure SQL Database, Synapse, PostgreSQL, SQL Server',
    },
    slugHints: {
      select: { focus: 'projection and row retrieval', depth: 'query fundamentals', tools: ['SELECT', 'FROM', 'WHERE'] },
      join: { focus: 'multi-table relational logic', depth: 'join algorithms and semantics', concepts: ['INNER vs OUTER', 'Join cardinality', 'Anti-joins'] },
      cte: { focus: 'modular query design with WITH clauses', depth: 'readable SQL architecture', concepts: ['Recursive CTEs', 'Materialization trade-offs'] },
      window: { focus: 'analytic functions over partitions', depth: 'window function mastery', tools: ['ROW_NUMBER', 'RANK', 'LAG/LEAD'] },
      pivot: { focus: 'row-to-column reshaping for reports', depth: 'dimensional reporting SQL' },
      merge: { focus: 'upsert and slowly changing dimension loads', depth: 'MERGE/ON CONFLICT patterns' },
      normal: { focus: 'schema normalization and integrity', depth: 'relational modeling', concepts: ['1NF–3NF', 'Denormalization trade-offs'] },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>SQL</strong> track builds analyst and data-engineer query fluency — from SELECT basics through window functions, optimization, JSON, MERGE, and analytical interview patterns.</p>`,
      phases: [
        { title: 'Phase 1: Query Foundations (Steps 1–10)', description: 'SELECT, filtering, sorting, aggregates, GROUP BY, joins.' },
        { title: 'Phase 2: Advanced SQL (Steps 11–22)', description: 'Subqueries, CTEs, windows, types, constraints, normalization, indexes, views, procedures, transactions.' },
        { title: 'Phase 3: Production SQL (Steps 23–30)', description: 'Plans, tuning, temp tables, pivot, JSON, MERGE, security, analytical patterns.' },
      ],
      prerequisites: ['Comfort with tables and rows conceptually', 'Access to any SQL database (Azure SQL, PostgreSQL, or SQLite)'],
      outcomes: [
        'Author complex analytical queries with joins and window functions',
        'Read execution plans and tune slow queries',
        'Design schemas with constraints and appropriate normalization',
        'Apply MERGE/upsert and security best practices',
      ],
    },
  },

  pyspark: {
    id: 'pyspark',
    meta: {
      domain: 'PySpark distributed data engineering',
      stack: 'Spark 3.x, DataFrames, Catalyst, Delta Lake, Structured Streaming',
      ecosystem: 'lakehouse ETL, large-scale analytics, and ML feature pipelines',
      platform: 'Databricks, Synapse Spark, EMR, or local Spark',
      bestPractices: [
        'Prefer DataFrame API over RDDs for optimizer benefits',
        'Avoid Python UDFs when built-in functions suffice',
        'Partition wisely on write; avoid unnecessary shuffles',
      ],
    },
    slugHints: {
      rdd: { focus: 'distributed resilient collections', depth: 'Spark foundational abstraction', concepts: ['Lineage', 'Narrow vs wide deps', 'Partitions'] },
      dataframe: { focus: 'structured distributed tables', depth: 'DataFrame API patterns', tools: ['SparkSession', 'Catalyst optimizer'] },
      shuffle: { focus: 'data redistribution across executors', depth: 'shuffle optimization', concepts: ['AQE', 'Salting', 'Broadcast joins'] },
      udf: { focus: 'custom row/column logic in Python', depth: 'UDF performance trade-offs', tools: ['pandas UDF', 'Spark SQL functions'] },
      stream: { focus: 'micro-batch and continuous processing', depth: 'Structured Streaming', tools: ['readStream', 'writeStream', 'watermarks'] },
      delta: { focus: 'ACID tables on object storage', depth: 'Delta Lake operations', tools: ['delta-spark', 'MERGE', 'time travel'] },
      skew: { focus: 'hot keys and straggler tasks', depth: 'skew mitigation techniques' },
      cache: { focus: 'in-memory persistence levels', depth: 'caching strategy', concepts: ['storage levels', 'cache vs persist'] },
    },
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>PySpark</strong> path teaches distributed data processing — RDDs, DataFrames, SQL, streaming, Delta Lake, and production ETL patterns including a capstone batch job.</p>`,
      phases: [
        { title: 'Phase 1: Spark Foundations (Steps 1–10)', description: 'SparkSession, RDDs, DataFrames, I/O, select/filter, aggregations.' },
        { title: 'Phase 2: Intermediate Spark (Steps 11–22)', description: 'Joins, lazy/eager ops, SQL, UDFs, partitioning, caching, broadcast, skew, windows, streaming.' },
        { title: 'Phase 3: Production PySpark (Steps 23–31)', description: 'Tuning, config, debugging, testing, Delta, patterns, architecture deep dive, capstone.' },
      ],
      prerequisites: ['Python fundamentals', 'Basic SQL', 'Optional: cluster computing concepts'],
      outcomes: [
        'Build and optimize Spark DataFrame pipelines',
        'Diagnose shuffle skew and OOM failures',
        'Implement Structured Streaming and Delta Lake basics',
        'Design an end-to-end batch ETL capstone',
      ],
    },
  },
};

module.exports = { programmingTopics };
