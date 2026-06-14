/**
 * Flow diagram definitions — Mermaid strings per topic/slug.
 * Used by engine, agentic-ai-rich-content, and index path overviews.
 */
const { generateFlowDiagram, buildMermaidFlowchart, sanitizeMermaidLabel } = require('./flow-diagram-generator');

const TEMPLATES = {
  agentLoop: {
    title: 'Agent Loop Architecture',
    description: 'Core observe → plan → act → reflect cycle that drives autonomous agents.',
    mermaid: `flowchart LR
    A[Observe] --> B[Plan]
    B --> C[Act]
    C --> D[Reflect]
    D --> A
    C --> E[Tools / APIs]
    E --> A`,
  },
  reactTrace: {
    title: 'ReAct Trace Flow',
    description: 'Interleaved reasoning and tool execution with explicit Thought → Action → Observation steps.',
    mermaid: `flowchart TD
    Q[User Question] --> T1[Thought: reason about next step]
    T1 --> A1[Action: select tool]
    A1 --> O1[Observation: tool result]
    O1 --> T2[Thought: update plan]
    T2 --> A2[Action: next tool or answer]
    A2 --> FA[Final Answer]`,
  },
  multiAgent: {
    title: 'Multi-Agent Orchestration',
    description: 'Orchestrator delegates to specialist agents and synthesizes results.',
    mermaid: `flowchart TB
    U[User Goal] --> O[Orchestrator]
    O --> R[Research Agent]
    O --> A[Analyst Agent]
    O --> W[Writer Agent]
    R --> S[Shared State / Memory]
    A --> S
    W --> S
    S --> O
    O --> OUT[Final Response]`,
  },
  rag: {
    title: 'RAG Pipeline',
    description: 'Retrieve relevant context, augment the prompt, then generate.',
    mermaid: `flowchart LR
    Q[User Query] --> E[Embed Query]
    E --> V[Vector Search]
    V --> C[Retrieve Chunks]
    C --> P[Augment Prompt]
    P --> L[LLM Generate]
    L --> R[Response]`,
  },
  mlTraining: {
    title: 'ML Training Pipeline',
    description: 'From raw data through training, validation, and model registration.',
    mermaid: `flowchart LR
    D[Raw Data] --> P[Preprocess]
    P --> F[Feature Engineering]
    F --> T[Train Model]
    T --> V[Validate / CV]
    V --> M[Register Model]
    M --> DEP[Deploy / Serve]`,
  },
  mlExperiment: {
    title: 'Experiment Tracking Flow',
    description: 'Log parameters, metrics, and artifacts for reproducible ML runs.',
    mermaid: `flowchart TD
    R[Training Run] --> L[Log Params]
    R --> M[Log Metrics]
    R --> A[Log Artifacts]
    L --> TR[Experiment Tracker]
    M --> TR
    A --> TR
    TR --> C[Compare Runs]
    C --> B[Best Model Selection]`,
  },
  ciCd: {
    title: 'CI/CD Pipeline',
    description: 'Source commit through build, test, and deployment stages.',
    mermaid: `flowchart LR
    C[Commit] --> B[Build]
    B --> T[Test]
    T --> S[Security Scan]
    S --> D[Deploy Staging]
    D --> P[Deploy Production]`,
  },
  etlMedallion: {
    title: 'Medallion ETL Flow',
    description: 'Bronze ingestion, Silver cleansing, Gold analytics-ready tables.',
    mermaid: `flowchart LR
    SRC[Sources] --> BR[Bronze Raw]
    BR --> SL[Silver Cleaned]
    SL --> GD[Gold Aggregated]
    GD --> BI[BI / ML / APIs]`,
  },
  deltaLake: {
    title: 'Delta Lake Transaction Flow',
    description: 'ACID writes via transaction log and snapshot isolation.',
    mermaid: `flowchart TD
    W[Write Request] --> TX[Transaction Log]
    TX --> PAR[Parquet Files]
    TX --> SN[Snapshot Metadata]
    SN --> R[Readers]
    PAR --> R
    TX --> ACID[ACID Guarantees]`,
  },
  learningPath: {
    title: 'Learning Path Flow',
    description: 'Sequential steps from foundations through advanced topics.',
    mermaid: `flowchart LR
    F[Foundations] --> I[Intermediate]
    I --> A[Advanced]
    A --> C[Capstone]`,
  },
};

/** Agentic AI — one diagram per slug */
const AGENTIC_SLUG_DIAGRAMS = {
  'agents-overview': {
    title: 'Agent System Overview',
    description: 'How user goals flow through planner, tools, memory, and response synthesis.',
    mermaid: `flowchart TB
    U[User Goal] --> OR[Orchestrator]
    OR --> PL[LLM Planner]
    PL --> TE[Tool Executor]
    TE --> API[External APIs]
    API --> MEM[Memory Store]
    MEM --> PL
    PL --> RES[Response]`,
  },
  'agent-components': {
    title: 'Agent Component Map',
    description: 'Perception, planning, memory, tools, and action modules and their connections.',
    mermaid: `flowchart LR
    PER[Perception] --> PLAN[Planning]
    PLAN --> ACT[Action]
    ACT --> ENV[Environment]
    ENV --> PER
    MEM[Memory] <--> PLAN
  TOOLS[Tool Registry] <--> ACT`,
  },
  'react-pattern': TEMPLATES.reactTrace,
  'tool-use': {
    title: 'Tool-Augmented Agent Flow',
    description: 'LLM selects tools from a registry; executor validates and runs calls.',
    mermaid: `flowchart TD
    LLM[LLM] --> SEL[Select Tool]
    SEL --> VAL[Validate Schema]
    VAL --> EX[Execute Tool]
    EX --> OBS[Observation]
    OBS --> LLM`,
  },
  'function-calling': {
    title: 'Function Calling Contract',
    description: 'JSON schema definitions, model tool_calls, and result round-trip.',
    mermaid: `flowchart LR
    SCH[JSON Schema] --> LLM[Model]
    LLM --> TC[tool_calls]
    TC --> APP[Your Handler]
    APP --> MSG[tool message]
    MSG --> LLM`,
  },
  'memory-systems': {
    title: 'Agent Memory Tiers',
    description: 'Short-term buffer, vector long-term, and episodic trajectory storage.',
    mermaid: `flowchart TB
    IN[New Input] --> ST[Short-Term Buffer]
    ST --> LT[Vector Long-Term]
    IN --> EP[Episodic Store]
    LT --> RET[Retrieval]
    EP --> RET
    RET --> CTX[Augmented Context]`,
  },
  'planning-agents': {
    title: 'Plan-and-Execute Flow',
    description: 'Decompose goal into subtasks, execute sequentially or in parallel.',
    mermaid: `flowchart TD
    G[Goal] --> DEC[Decompose]
    DEC --> P1[Subtask 1]
    DEC --> P2[Subtask 2]
    DEC --> P3[Subtask 3]
    P1 --> SYN[Synthesize]
    P2 --> SYN
    P3 --> SYN
    SYN --> OUT[Final Plan Result]`,
  },
  'reflection': {
    title: 'Self-Reflection Loop',
    description: 'Generate output, critique, revise until quality threshold met.',
    mermaid: `flowchart LR
    GEN[Generate] --> CRIT[Critique]
    CRIT --> REV[Revise]
    REV --> GEN
    CRIT --> OK[Accept Output]`,
  },
  'multi-agent-intro': TEMPLATES.multiAgent,
  'agent-roles': {
    title: 'Role-Based Agent Team',
    description: 'Orchestrator assigns roles; specialists execute within boundaries.',
    mermaid: `flowchart TB
    OR[Orchestrator] --> RS[Researcher]
    OR --> CD[Coder]
    OR --> QA[Reviewer]
    RS --> OR
    CD --> OR
    QA --> OR`,
  },
  'communication': {
    title: 'Inter-Agent Communication',
    description: 'Message passing and shared state between collaborating agents.',
    mermaid: `flowchart LR
    A1[Agent A] -->|message| BUS[Message Bus]
    BUS --> A2[Agent B]
    A1 <--> SS[Shared State]
    A2 <--> SS`,
  },
  'orchestration': {
    title: 'Orchestration Framework Layer',
    description: 'LangGraph, AutoGen, and CrewAI sit above LLM and tool layers.',
    mermaid: `flowchart TB
    FW[Framework Layer] --> LG[LangGraph]
    FW --> AG[AutoGen]
    FW --> CR[CrewAI]
    LG --> LLM[LLM + Tools]
    AG --> LLM
    CR --> LLM`,
  },
  'langgraph': {
    title: 'LangGraph State Machine',
    description: 'Nodes, edges, conditional routing, and persistent state graph.',
    mermaid: `flowchart TD
    START([Start]) --> AG[Agent Node]
    AG -->|tool needed| TOOL[Tool Node]
    TOOL --> AG
    AG -->|done| END([End])
    AG -->|approval| HITL[Human Node]
    HITL --> AG`,
  },
  'human-in-loop': {
    title: 'Human-in-the-Loop Gate',
    description: 'High-risk actions pause for human approval before continuing.',
    mermaid: `flowchart TD
    ACT[Agent Action] --> RISK{Risky?}
    RISK -->|no| RUN[Execute]
    RISK -->|yes| PAUSE[Pause Graph]
    PAUSE --> HUM[Human Review]
    HUM -->|approve| RUN
    HUM -->|reject| REV[Revise Plan]`,
  },
  'evaluation-agents': {
    title: 'Agent Evaluation Pipeline',
    description: 'Run eval dataset, score trajectories, compare agent versions.',
    mermaid: `flowchart LR
    DS[Eval Dataset] --> RUN[Agent Runs]
    RUN --> TR[Trajectory Log]
    TR --> SC[Score Metrics]
    SC --> CMP[Compare Versions]`,
  },
  'error-recovery': {
    title: 'Error Recovery Flow',
    description: 'Retries, fallbacks, and graceful degradation on tool failures.',
    mermaid: `flowchart TD
    CALL[Tool Call] --> OK{Success?}
    OK -->|yes| NEXT[Continue]
    OK -->|no| RET[Retry]
    RET --> FB[Fallback Tool]
    FB --> NEXT
    RET -->|max retries| DEG[Degrade Response]`,
  },
  'security-agents': {
    title: 'Agent Security Boundaries',
    description: 'Input validation, sandboxing, and least-privilege tool access.',
    mermaid: `flowchart TB
    IN[User Input] --> VAL[Validate]
    VAL --> SB[Sandbox]
    SB --> AL[Allowlist Check]
    AL --> TOOL[Tool Execution]
    TOOL --> AUD[Audit Log]`,
  },
  'cost-latency': {
    title: 'Cost & Latency Optimization',
    description: 'Model routing, parallel tools, and token budgeting.',
    mermaid: `flowchart LR
    REQ[Request] --> ROUTE[Model Router]
    ROUTE --> SM[Small Model]
    ROUTE --> LG[Large Model]
    SM --> PAR[Parallel Tools]
    LG --> PAR
    PAR --> BUD[Token Budget Check]`,
  },
  'production-agents': {
    title: 'Production Deployment Pipeline',
    description: 'Version prompts, CI eval gates, staged rollout.',
    mermaid: `flowchart LR
    GIT[Git Prompts] --> CI[CI Eval Suite]
    CI --> STG[Staging Deploy]
    STG --> CAN[Canary]
    CAN --> PROD[Production]`,
  },
  'observability': {
    title: 'Agent Observability Stack',
    description: 'Traces, metrics, and debugging via LangSmith / OpenTelemetry.',
    mermaid: `flowchart TB
    AG[Agent Run] --> TR[Traces]
    AG --> MET[Metrics]
    AG --> LOG[Structured Logs]
    TR --> DASH[Dashboard]
    MET --> DASH
    LOG --> DASH`,
  },
  'case-study-research': {
    title: 'Research Agent Workflow',
    description: 'Search, read, synthesize, and cite sources for research tasks.',
    mermaid: `flowchart LR
    Q[Question] --> SR[Search]
    SR --> RD[Read Sources]
    RD --> SYN[Synthesize]
    SYN --> CIT[Cite & Validate]
    CIT --> REP[Report]`,
  },
  'case-study-coding': {
    title: 'Coding Agent Loop',
    description: 'Read context, generate code, run tests, iterate on failures.',
    mermaid: `flowchart TD
    BUG[Bug Report] --> CTX[Read Codebase]
    CTX --> GEN[Generate Patch]
    GEN --> TEST[Run Tests]
    TEST -->|fail| GEN
    TEST -->|pass| PR[PR Summary]`,
  },
  'case-study-data': {
    title: 'Data Agent Pipeline',
    description: 'Schema inspection, SQL generation, safe execution, visualization.',
    mermaid: `flowchart LR
    Q[Analytics Q] --> SCH[Schema Tool]
    SCH --> SQL[Generate SQL]
    SQL --> SAFE[Safe Executor]
    SAFE --> VIZ[Chart / Summary]`,
  },
  'agentic-capstone': {
    title: 'Capstone Agent Architecture',
    description: 'End-to-end multi-tool agent with orchestration, HITL, and eval.',
    mermaid: `flowchart TB
    U[User] --> LG[LangGraph App]
    LG --> T1[Search Tool]
    LG --> T2[Code Tool]
    LG --> T3[Data Tool]
    LG --> HITL[HITL Gate]
    LG --> EV[Eval Suite]
    EV --> DEP[Deployed API]`,
  },
};

/** Slug pattern → diagram for non-agentic topics */
const SLUG_PATTERN_DIAGRAMS = [
  { pattern: /react|reason/i, diagram: TEMPLATES.reactTrace },
  { pattern: /rag|retrieval|embedding/i, diagram: TEMPLATES.rag },
  { pattern: /experiment|mlflow|tracking/i, diagram: TEMPLATES.mlExperiment },
  { pattern: /train|pipeline|sklearn|model/i, diagram: TEMPLATES.mlTraining },
  { pattern: /ci-cd|pipeline|deploy|release/i, diagram: TEMPLATES.ciCd },
  { pattern: /medallion|bronze|silver|gold/i, diagram: TEMPLATES.etlMedallion },
  { pattern: /delta|acid|transaction/i, diagram: TEMPLATES.deltaLake },
  { pattern: /etl|ingest|extract|transform/i, diagram: TEMPLATES.etlMedallion },
  { pattern: /agent|orchestrat|langgraph|autogen/i, diagram: TEMPLATES.agentLoop },
  { pattern: /multi-agent|multi_agent/i, diagram: TEMPLATES.multiAgent },
];

/** Topic-level default diagrams */
const TOPIC_DEFAULTS = {
  'agentic-ai': TEMPLATES.agentLoop,
  'generative-ai': TEMPLATES.rag,
  'machine-learning': TEMPLATES.mlTraining,
  'ci-cd': TEMPLATES.ciCd,
  'azure-pipelines': TEMPLATES.ciCd,
  'medallion-architecture': TEMPLATES.etlMedallion,
  'delta-lake': TEMPLATES.deltaLake,
  'azure-data-factory': TEMPLATES.etlMedallion,
  'data-pipeline-projects': TEMPLATES.etlMedallion,
};

function matchSlugPattern(slug, label) {
  const text = `${slug} ${label}`;
  for (const { pattern, diagram } of SLUG_PATTERN_DIAGRAMS) {
    if (pattern.test(text)) return { ...diagram };
  }
  return null;
}

function resolveFlowDiagram(topicId, slug, label, description) {
  if (topicId === 'agentic-ai' && AGENTIC_SLUG_DIAGRAMS[slug]) {
    return { ...AGENTIC_SLUG_DIAGRAMS[slug] };
  }

  return generateFlowDiagram(topicId, slug, label, description);
}

function buildIndexPathDiagram(topicLabel, steps) {
  const maxNodes = 12;
  const chunk = steps.length <= maxNodes ? steps : [
    ...steps.slice(0, 4),
    { label: '…', slug: 'mid' },
    ...steps.slice(-4),
  ];

  const nodes = chunk.map((s, i) => {
    const id = `S${i}`;
    const label = s.label.length > 22 ? s.label.slice(0, 20) + '…' : s.label;
    return `${id}["${sanitizeMermaidLabel(label)}"]`;
  });

  const edges = chunk.slice(0, -1).map((_, i) => `S${i} --> S${i + 1}`).join('\n    ');

  return {
    title: `${topicLabel} — Learning Path Overview`,
    description: 'Topics progress from foundations through advanced production patterns. Follow the path in order for the best learning experience.',
    mermaid: `flowchart LR\n    ${nodes.join('\n    ')}\n    ${edges}`,
  };
}

module.exports = {
  TEMPLATES,
  AGENTIC_SLUG_DIAGRAMS,
  resolveFlowDiagram,
  buildIndexPathDiagram,
  matchSlugPattern,
  generateFlowDiagram,
};
