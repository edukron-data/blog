/**
 * Generates rich learning-plan content for each page step.
 */
const { buildAzureDEContent } = require('./azure-de-rich-content');
const { buildAgenticAIContent } = require('./agentic-ai-rich-content');
const {
  buildTopicRichContent,
  buildInterviewContent: buildRichInterviewContent,
  INTERVIEW_TOPICS,
} = require('./rich-content');
const { resolveFlowDiagram } = require('./rich-content/flow-diagrams');

const AZURE_DE_CATEGORY = 'azure-data-engineering';
const AGENTIC_AI_TOPIC = 'agentic-ai';

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const DOMAIN_HINTS = {
  python: { lang: 'python', prefix: 'Python' },
  sql: { lang: 'sql', prefix: 'SQL' },
  pyspark: { lang: 'python', prefix: 'PySpark' },
  'data-science': { lang: 'python', prefix: 'Data Science' },
  'machine-learning': { lang: 'python', prefix: 'Machine Learning' },
  'artificial-intelligence': { lang: 'python', prefix: 'AI' },
  nlp: { lang: 'python', prefix: 'NLP' },
  rnn: { lang: 'python', prefix: 'RNN' },
  ann: { lang: 'python', prefix: 'Neural Networks' },
  cnn: { lang: 'python', prefix: 'CNN' },
  'generative-ai': { lang: 'python', prefix: 'Generative AI' },
  'agentic-ai': { lang: 'python', prefix: 'Agentic AI' },
  'azure-fundamentals': { lang: 'bash', prefix: 'Azure' },
  'azure-repos': { lang: 'bash', prefix: 'Azure Repos' },
  'azure-pipelines': { lang: 'yaml', prefix: 'Azure Pipelines' },
  'ci-cd': { lang: 'yaml', prefix: 'CI/CD' },
  docker: { lang: 'bash', prefix: 'Docker' },
  kubernetes: { lang: 'yaml', prefix: 'Kubernetes' },
  aks: { lang: 'bash', prefix: 'AKS' },
  terraform: { lang: 'hcl', prefix: 'Terraform' },
  monitoring: { lang: 'bash', prefix: 'Azure Monitor' },
  security: { lang: 'bash', prefix: 'Azure Security' },
  'azure-data-factory': { lang: 'json', prefix: 'Azure Data Factory' },
  'azure-databricks': { lang: 'python', prefix: 'Databricks' },
  'adls-gen2': { lang: 'bash', prefix: 'ADLS Gen2' },
  'azure-sql-database': { lang: 'sql', prefix: 'Azure SQL' },
  'synapse-analytics': { lang: 'sql', prefix: 'Synapse' },
  'delta-lake': { lang: 'python', prefix: 'Delta Lake' },
  'pyspark-on-databricks': { lang: 'python', prefix: 'PySpark on Databricks' },
  'medallion-architecture': { lang: 'python', prefix: 'Medallion Architecture' },
  'data-pipeline-projects': { lang: 'python', prefix: 'Data Pipelines' },
};

function phaseLabel(step, total) {
  const pct = step / total;
  if (pct <= 0.33) return 'Beginner';
  if (pct <= 0.66) return 'Intermediate';
  return 'Advanced';
}

function defaultConcepts(label, description) {
  const base = label.split(/[\s&]+/).filter((w) => w.length > 3).slice(0, 4);
  if (base.length < 3) {
    return [
      label,
      'Core terminology',
      'Practical application',
      'Common pitfalls',
    ];
  }
  return base.map((c) => c.charAt(0).toUpperCase() + c.slice(1));
}

function buildObjectives(label, topicLabel, step, total) {
  const phase = phaseLabel(step, total);
  return [
    `Understand ${label.toLowerCase()} within the ${topicLabel} learning path`,
    `Apply ${label.toLowerCase()} concepts in ${phase.toLowerCase()}-level scenarios`,
    `Connect this topic to prior and upcoming lessons in the ${topicLabel} track`,
  ];
}

function buildLearnItems(label, description) {
  return [
    `What ${label.toLowerCase()} means and when to use it`,
    `How ${label.toLowerCase()} fits into real-world ${description.split('.')[0].toLowerCase()}`,
    'Hands-on patterns you can practice immediately',
    'Common mistakes and how to avoid them',
  ];
}

function buildOverviewParagraphs(ctx) {
  const { page, topic, category, step, totalSteps } = ctx;
  const domain = DOMAIN_HINTS[topic.id] || { prefix: topic.label };
  const phase = phaseLabel(step, totalSteps);
  const label = page.label;
  const desc = page.description;

  return [
    `In the <strong>${topic.label}</strong> learning path under ${category.label}, this ${phase.toLowerCase()}-level lesson focuses on <strong>${label}</strong> — ${desc.charAt(0).toLowerCase()}${desc.slice(1)}`,
    `${domain.prefix} practitioners use ${label.toLowerCase()} regularly when building production-ready solutions. Understanding the theory behind this topic helps you make better design decisions, debug issues faster, and communicate clearly with teammates during code reviews and architecture discussions.`,
    `Work through the key concepts and optional code example below. Try modifying the example to match a scenario from your own projects. If anything feels unfamiliar, use the prerequisite links to revisit earlier topics before moving on in the sequence.`,
    step === totalSteps
      ? `Congratulations — this is the final topic in the ${topic.label} path. Consolidate your knowledge by revisiting earlier lessons, building a small capstone project, and exploring related categories on EDUKRON BLOB.`
      : `When you are comfortable with ${label.toLowerCase()}, continue to the next topic using the navigation at the bottom of this page. Each lesson builds on the previous ones, so resist the urge to skip ahead if fundamentals still feel shaky.`,
  ];
}

function buildCodeExample(ctx) {
  const { page, topic } = ctx;
  if (page.href || page.noCode) return null;

  const hint = DOMAIN_HINTS[topic.id] || { lang: 'text', prefix: topic.label };
  const lang = page.codeLang || hint.lang;

  const examples = {
    python: `# ${page.label} — example\nname = "DevSpark"\nvalues = [1, 2, 3, 4, 5]\nresult = sum(values)\nprint(f"{name}: {result}")`,
    sql: `-- ${page.label} — example\nSELECT category, COUNT(*) AS total\nFROM orders\nWHERE order_date >= DATE '2024-01-01'\nGROUP BY category\nORDER BY total DESC;`,
    yaml: `# ${page.label} — pipeline snippet\ntrigger:\n  - main\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n  - script: echo "Running ${page.label}"\n    displayName: ${page.label}`,
    bash: `# ${page.label} — Azure CLI example\naz group create --name devspark-rg --location eastus\naz account show --output table`,
    hcl: `# ${page.label} — Terraform snippet\nresource "azurerm_resource_group" "rg" {\n  name     = "devspark-rg"\n  location = "East US"\n}`,
    json: `{\n  "name": "${page.label} Pipeline",\n  "properties": {\n    "description": "${page.description.slice(0, 60)}"\n  }\n}`,
  };

  const code = page.codeExample || examples[lang] || `# ${page.label}\n# Practice ${page.label.toLowerCase()} here`;
  return { lang, code };
}

function enrichPage(category, topic, page, index, pages, pageHrefFn) {
  const step = index + 1;
  const totalSteps = pages.length;
  const prevPage = index > 0 ? pages[index - 1] : null;
  const nextPage = index < pages.length - 1 ? pages[index + 1] : null;

  const ctx = { category, topic, page, step, totalSteps, prevPage, nextPage };

  if (page.href) {
    return {
      ...page,
      step,
      totalSteps,
      phase: phaseLabel(step, totalSteps),
      objectives: [`Read the interactive ${page.label} guide`],
      concepts: [page.label],
      overview: [
        `This step links to the full ${page.label} guide — an in-depth, interactive resource on EDUKRON BLOB.`,
        page.description,
      ],
      learnItems: ['Deep-dive architecture and mechanics', 'Interactive simulations', 'Production tuning guidance'],
      prevSlug: prevPage ? prevPage.slug : null,
      nextSlug: nextPage ? nextPage.slug : null,
      prevHref: prevPage ? (prevPage.href || pageHrefFn(prevPage.slug)) : null,
      nextHref: nextPage ? (nextPage.href || pageHrefFn(nextPage.slug)) : null,
      readMinutes: 5,
      external: true,
    };
  }

  const isInterview = INTERVIEW_TOPICS.has(topic.id);
  const isAzureDE = category.id === AZURE_DE_CATEGORY;
  const isAgenticAI = topic.id === AGENTIC_AI_TOPIC;

  let content;
  if (isInterview) {
    content = buildRichInterviewContent(page, ctx);
  } else if (isAzureDE) {
    content = buildAzureDEContent(topic.id, page, ctx);
  } else if (isAgenticAI) {
    content = buildAgenticAIContent(page, ctx);
  } else {
    content = buildTopicRichContent(topic.id, page, ctx);
  }

  const prereqSlugs = [];
  if (index >= 1) prereqSlugs.push(pages[index - 1].slug);
  if (index >= 2) prereqSlugs.push(pages[index - 2].slug);

  return {
    ...page,
    step,
    totalSteps,
    phase: phaseLabel(step, totalSteps),
    objectives: page.objectives || content.objectives,
    concepts: content.concepts,
    overview: content.overview,
    learnItems: content.learnItems,
    codeExample: content.codeExample,
    interviewQA: content.interviewQA,
    architectureNotes: content.architectureNotes || null,
    bestPractices: content.bestPractices || null,
    pitfalls: content.pitfalls || null,
    interviewTips: content.interviewTips || null,
    detailedNotes: content.detailedNotes || null,
    animation: content.animation || null,
    flowDiagram:
      content.flowDiagram ||
      resolveFlowDiagram(topic.id, page.slug, page.label, page.description),
    prevSlug: prevPage ? prevPage.slug : null,
    nextSlug: nextPage ? nextPage.slug : null,
    prevHref: prevPage ? (prevPage.href || pageHrefFn(prevPage.slug)) : null,
    nextHref: nextPage ? (nextPage.href || pageHrefFn(nextPage.slug)) : null,
    prevLabel: prevPage ? prevPage.label : null,
    nextLabel: nextPage ? nextPage.label : null,
    prerequisites: prereqSlugs.map((slug) => {
      const p = pages.find((x) => x.slug === slug);
      return { slug, label: p.label, href: p.href || pageHrefFn(slug) };
    }),
    readMinutes: content.readMinutes || (isInterview ? 8 : 5 + Math.min(3, Math.floor(step / 10))),
  };
}

function enrichTopic(category, topic, pageHrefFn) {
  const enriched = topic.pages.map((page, i, arr) =>
    enrichPage(category, topic, page, i, arr, pageHrefFn)
  );
  return { ...topic, pages: enriched };
}

module.exports = {
  escapeHtml,
  enrichTopic,
  enrichPage,
  phaseLabel,
  INTERVIEW_TOPICS,
};
