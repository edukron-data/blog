/**
 * Rich content engine — generates full learning-page sections from topic config + page metadata.
 */
const { resolveFlowDiagram } = require('./flow-diagrams');

function phaseFromStep(step, total) {
  if (step / total <= 0.33) return 'beginner';
  if (step / total <= 0.66) return 'intermediate';
  return 'advanced';
}

function detectHints(slug, label, topicHints, globalHints) {
  const lower = `${slug} ${label}`.toLowerCase();
  const candidates = [];

  for (const [key, val] of Object.entries(topicHints || {})) {
    if (lower.includes(key)) candidates.push({ key, val, priority: 2 });
  }
  for (const [key, val] of Object.entries(globalHints || {})) {
    if (lower.includes(key)) candidates.push({ key, val, priority: 1 });
  }

  if (!candidates.length) {
    return {
      focus: 'practical implementation and production-ready design',
      depth: 'real-world engineering patterns',
      tools: [],
      matchedKey: null,
    };
  }

  candidates.sort((a, b) => b.priority - a.priority || b.key.length - a.key.length);
  const best = candidates[0];
  return { ...best.val, matchedKey: best.key };
}

function buildObjectives(label, topicLabel, step, total, meta, hints) {
  const phase = phaseFromStep(step, total);
  const toolRef = hints.tools?.length ? hints.tools[0] : meta.stack.split(',')[0].trim();
  return [
    `Define ${label} and explain its role in ${meta.domain}`,
    `Implement ${label.toLowerCase()} using ${toolRef} in ${phase}-level scenarios`,
    `Design ${hints.depth} that integrates with ${meta.ecosystem || meta.stack}`,
    `Evaluate trade-offs, failure modes, and monitoring signals for ${label.toLowerCase()}`,
    `Connect ${label.toLowerCase()} to adjacent topics in the ${topicLabel} path`,
    phase === 'advanced'
      ? `Apply ${label.toLowerCase()} patterns in production-scale ${meta.domain} workloads`
      : `Build foundational fluency with ${hints.focus} before advancing`,
  ].slice(0, phase === 'advanced' ? 6 : 5);
}

function buildOverview(label, description, topicLabel, step, total, meta, hints) {
  const phase = phaseFromStep(step, total);
  const toolList = meta.stack;
  const prev = step > 1 ? `Building on earlier ${topicLabel} lessons, ` : '';
  const next =
    step < total
      ? `The next steps extend ${label.toLowerCase()} into more complex ${meta.domain} scenarios — revisit this page if later topics feel unclear.`
      : `This capstone step consolidates the full ${topicLabel} path. Document your work, publish a portfolio artifact, and cross-link related DevSpark categories.`;

  return [
    `${prev}<strong>${label}</strong> is a core topic in the ${topicLabel} learning path. ${description}`,
    `${meta.domain} teams rely on ${label.toLowerCase()} when delivering ${hints.focus}. At this ${phase} stage, you will work with <strong>${hints.depth}</strong> using ${toolList}.`,
    `Industry practitioners treat ${label.toLowerCase()} as more than syntax — it shapes how you architect pipelines, debug incidents, and communicate in design reviews. Understanding the underlying mechanics helps you choose the right tool when multiple options exist (${meta.stack}).`,
    `Production systems add constraints tutorials often skip: authentication, idempotency, observability, cost controls, and rollback paths. This lesson covers those operational realities alongside theory so you can reason about ${label.toLowerCase()} in real deployments.`,
    hints.tools?.length
      ? `Common tooling for this step includes ${hints.tools.join(', ')}. Match versions to your organization's platform — Azure, Databricks, Hugging Face, or on-prem clusters — and pin dependencies in project manifests.`
      : `Align your local practice environment with ${meta.stack} so examples transfer directly to work projects.`,
    `Work through the architecture notes, detailed explanations, production guidance, and code example below. Modify the sample for your domain, explain it aloud, and note one trade-off you would discuss in an interview.`,
    next,
  ];
}

function buildConcepts(label, meta, hints, slug) {
  const base = [
    `${label} — definition, motivation, and when to apply it`,
    `${meta.domain} vocabulary and mental models for ${hints.depth}`,
    `${hints.focus.charAt(0).toUpperCase() + hints.focus.slice(1)}`,
    `Integration with ${meta.stack.split(',').slice(0, 2).join(' and ')}`,
    'Input/output contracts, validation, and error boundaries',
    'Testing strategy: unit, integration, and smoke checks',
    'Performance, scalability, and cost levers',
    'Security, secrets handling, and least privilege',
    'Observability: logs, metrics, traces, and runbooks',
    'Common anti-patterns and how teams avoid them',
  ];
  const extras = (hints.concepts || []).map((c) =>
    c.includes(label) ? c : `${c} in ${label.toLowerCase()} contexts`
  );
  if (slug.includes('capstone')) extras.push('Capstone deliverables: README, architecture diagram, tests, demo');
  if (slug.includes('security')) extras.push('Threat modeling and compliance checkpoints');
  if (slug.includes('performance')) extras.push('Profiling methodology and bottleneck isolation');
  return [...new Set([...base, ...extras])].slice(0, 15);
}

function buildArchitectureNotes(label, meta, hints) {
  const blocks = [
    `<strong>System role:</strong> ${label} sits in the ${meta.domain} workflow as a component for ${hints.depth}. Map inputs (sources, APIs, user actions), transformations (business rules, model inference, aggregations), and outputs (tables, APIs, dashboards). Define failure boundaries and retry semantics at each hop.`,
    `<strong>Component interaction:</strong> Upstream producers and downstream consumers depend on stable contracts. Document schemas, SLAs, and versioning for interfaces touched by ${label.toLowerCase()}. Use feature flags or config-driven behavior when rolling out changes.`,
    `<strong>Data & control flow:</strong> Trace how information moves when applying ${label.toLowerCase()} — including ${hints.focus}. Identify synchronous vs asynchronous steps, batch vs streaming paths, and where state persists between invocations.`,
    `<strong>Operational model:</strong> Production usage requires structured logging, metrics (latency, error rate, throughput), alerting, runbooks, and rollback plans. Store infrastructure and application config in version control; automate deployments where possible.`,
  ];
  if (hints.architectureExtra) blocks.push(`<strong>Design note:</strong> ${hints.architectureExtra}`);
  if (meta.platform) {
    blocks.push(
      `<strong>Platform context:</strong> On ${meta.platform}, ${label.toLowerCase()} typically integrates with managed services, identity (managed identity / service principal), and regional redundancy. Follow well-architected pillars: reliability, security, cost, operations, performance.`
    );
  }
  return blocks;
}

function buildBestPractices(label, meta, hints) {
  const generic = [
    'Start with the simplest design that meets requirements — add complexity only with measured need',
    'Pin tool and library versions; reproduce environments with containers or IaC',
    'Write automated tests for critical paths before expanding scope',
    'Document assumptions, inputs, outputs, SLAs, and known limitations in team wikis',
    'Use structured logging with correlation IDs for cross-service debugging',
    'Monitor key metrics from day one — latency, errors, cost, data freshness',
    'Apply least-privilege access for credentials, API keys, and cloud roles',
    'Peer-review changes; treat learning-path code as a draft requiring hardening for prod',
  ];
  const specific = hints.bestPractices || meta.bestPractices || [];
  return [...new Set([...specific, ...generic.map((g) => g.replace('changes', `${label.toLowerCase()} changes`))])].slice(0, 12);
}

function buildPitfalls(label, meta, hints) {
  const generic = [
    `Skipping fundamentals and jumping to advanced ${label.toLowerCase()} patterns prematurely`,
    'Copy-pasting examples without understanding trade-offs or edge cases',
    'Ignoring error handling, timeouts, and partial-failure recovery',
    'Not validating outputs against representative production-scale data',
    'Hard-coding secrets, connection strings, or environment-specific paths',
    'Omitting observability — flying blind during incidents',
    'Treating notebook or tutorial code as production-ready without tests and review',
  ];
  const specific = hints.pitfalls || meta.pitfalls || [];
  return [...new Set([...specific, ...generic])].slice(0, 10);
}

function buildInterviewTips(label, meta, hints) {
  return [
    `Open with a crisp definition of ${label.toLowerCase()}, then walk through a concrete ${meta.domain} example`,
    `Discuss trade-offs for ${hints.depth} — interviewers reward reasoning over memorization`,
    `Mention tools: ${meta.stack.split(',').slice(0, 3).join(', ')} and when you would choose each`,
    'Cover failure modes, debugging steps, and how you would monitor in production',
    'Connect to a project story: problem, approach, metrics improved, lessons learned',
    hints.interviewAngle
      ? hints.interviewAngle
      : `Whiteboard the data/control flow for ${label.toLowerCase()} including one optimization you would make`,
  ].slice(0, 6);
}

function buildDetailedNotes(label, description, meta, hints, slug) {
  const notes = [
    `<strong>What it is:</strong> ${description} In ${meta.domain}, this typically involves ${hints.focus}.`,
    `<strong>Why it matters:</strong> Teams encounter ${label.toLowerCase()} when shipping ${hints.depth}. Gaps here surface as production bugs, slow queries, model drift, pipeline failures, or failed interviews.`,
    `<strong>How it works:</strong> Break the problem into inputs, processing steps, and outputs. For each step, specify validation rules, expected latency, and idempotency. Use ${meta.stack.split(',')[0]} as your primary implementation surface.`,
    `<strong>When to use:</strong> Apply ${label.toLowerCase()} when requirements align with ${hints.focus}. Avoid forcing this pattern when a simpler batch job, SQL view, or single API call suffices.`,
    `<strong>How to practice:</strong> Run the code example locally or in a sandbox subscription. Change one parameter at a time, predict the outcome, then verify. Write a one-paragraph explanation suitable for a stand-up or PR description.`,
  ];
  if (hints.detailedExtra) notes.push(`<strong>Deep dive:</strong> ${hints.detailedExtra}`);
  if (slug.includes('capstone')) {
    notes.push(
      `<strong>Capstone guidance:</strong> Combine multiple topics from this path into one cohesive deliverable — architecture diagram, README, automated tests, and a short demo. Reference prior step slugs explicitly in your documentation.`
    );
  }
  if (slug.includes('security')) {
    notes.push(
      `<strong>Security note:</strong> Threat-model ${label.toLowerCase()} for credential exposure, injection, excessive permissions, and data exfiltration. Use managed identity, Key Vault, private endpoints, and audit logging where applicable.`
    );
  }
  return notes;
}

function buildAnimation(label, hints, slug) {
  const custom = hints.animationSteps;
  if (custom?.length) {
    return {
      type: hints.animationType || 'learning-flow',
      title: `${label} — Interactive Walkthrough`,
      description: `Step-by-step visualization of ${label.toLowerCase()} in ${hints.depth}.`,
      steps: custom,
    };
  }
  return {
    type: 'learning-flow',
    title: `${label} — Concept Flow`,
    description: `Visual walkthrough of ${label.toLowerCase()} covering ${hints.focus}.`,
    steps: [
      `Define requirements and success criteria for ${label.toLowerCase()}`,
      `Prepare inputs and validate schemas/contracts`,
      `Apply core ${label} logic with ${hints.depth}`,
      'Verify outputs, edge cases, and error paths',
      'Instrument metrics, logs, and alerts',
      'Review best practices and document runbook notes',
      'Connect learnings to the next path step',
    ],
  };
}

function buildLearnItems(label, meta, hints) {
  return [
    `Theory and motivation behind ${label.toLowerCase()} in ${meta.domain}`,
    `Key terminology for ${hints.depth}`,
    'Architecture and component interaction patterns',
    'Production best practices, pitfalls, and interview preparation',
    `Hands-on example using ${meta.stack.split(',')[0]}`,
    'Clear linkage to prior and upcoming learning steps',
  ];
}

function readMinutesForStep(step, total) {
  const phase = phaseFromStep(step, total);
  const base = phase === 'beginner' ? 10 : phase === 'intermediate' ? 12 : 14;
  return Math.min(18, base + Math.floor(step / 8));
}

function buildRichContent(topicConfig, page, ctx, codeFn) {
  const { step, totalSteps, topic } = ctx;
  const meta = topicConfig.meta;
  const hints = detectHints(page.slug, page.label, topicConfig.slugHints, topicConfig.globalSlugHints);
  const label = page.label;
  const description = page.description;

  const codeExample = codeFn
    ? codeFn(topicConfig.id, page, meta, hints)
    : null;

  return {
    objectives: buildObjectives(label, topic.label, step, totalSteps, meta, hints),
    concepts: buildConcepts(label, meta, hints, page.slug),
    overview: buildOverview(label, description, topic.label, step, totalSteps, meta, hints),
    learnItems: buildLearnItems(label, meta, hints),
    architectureNotes: buildArchitectureNotes(label, meta, hints),
    bestPractices: buildBestPractices(label, meta, hints),
    pitfalls: buildPitfalls(label, meta, hints),
    interviewTips: buildInterviewTips(label, meta, hints),
    detailedNotes: buildDetailedNotes(label, description, meta, hints, page.slug),
    animation: buildAnimation(label, hints, page.slug),
    flowDiagram: resolveFlowDiagram(topicConfig.id, page.slug, label, description),
    codeExample,
    readMinutes: readMinutesForStep(step, totalSteps),
  };
}

module.exports = {
  phaseFromStep,
  detectHints,
  buildRichContent,
  buildObjectives,
  buildOverview,
  buildConcepts,
  buildArchitectureNotes,
  buildBestPractices,
  buildPitfalls,
  buildInterviewTips,
  buildDetailedNotes,
  buildAnimation,
  buildLearnItems,
  readMinutesForStep,
};
