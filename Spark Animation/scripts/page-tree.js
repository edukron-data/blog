/**
 * EDUKRON BLOB — page hierarchy with full learning plans
 * Single source of truth for generate-pages.js
 */
const { ALL_PATHS } = require('./learning-paths');
const { enrichTopic } = require('./content-builder');

const CATEGORY_DEFS = [
  {
    id: 'programming',
    label: 'Programming',
    mega: false,
    topicIds: ['python', 'sql', 'pyspark'],
  },
  {
    id: 'ai',
    label: 'AI',
    mega: true,
    topicIds: [
      'data-science',
      'machine-learning',
      'artificial-intelligence',
      'nlp',
      'rnn',
      'ann',
      'cnn',
      'generative-ai',
      'agentic-ai',
    ],
  },
  {
    id: 'azure-devops',
    label: 'Azure DevOps',
    mega: true,
    topicIds: [
      'azure-fundamentals',
      'azure-repos',
      'azure-pipelines',
      'ci-cd',
      'docker',
      'kubernetes',
      'aks',
      'terraform',
      'monitoring',
      'security',
    ],
  },
  {
    id: 'azure-data-engineering',
    label: 'Azure Data Engineering',
    mega: true,
    topicIds: [
      'azure-data-factory',
      'azure-databricks',
      'adls-gen2',
      'azure-sql-database',
      'synapse-analytics',
      'delta-lake',
      'pyspark-on-databricks',
      'medallion-architecture',
      'data-pipeline-projects',
    ],
  },
  {
    id: 'interview-questions',
    label: 'Interview Questions',
    mega: true,
    topicIds: [
      'python-interview-questions',
      'sql-interview-questions',
      'pyspark-interview-questions',
      'azure-devops-interview-questions',
      'azure-data-engineering-interview-questions',
      'ai-ml-interview-questions',
    ],
  },
];

const TOPIC_LABELS = {
  python: 'Python',
  sql: 'SQL',
  pyspark: 'PySpark',
  'data-science': 'Data Science',
  'machine-learning': 'Machine Learning',
  'artificial-intelligence': 'Artificial Intelligence',
  nlp: 'NLP',
  rnn: 'RNN',
  ann: 'ANN',
  cnn: 'CNN',
  'generative-ai': 'Generative AI',
  'agentic-ai': 'Agentic AI',
  'azure-fundamentals': 'Azure Fundamentals',
  'azure-repos': 'Azure Repos',
  'azure-pipelines': 'Azure Pipelines',
  'ci-cd': 'CI/CD',
  docker: 'Docker',
  kubernetes: 'Kubernetes',
  aks: 'AKS',
  terraform: 'Terraform',
  monitoring: 'Monitoring',
  security: 'Security',
  'azure-data-factory': 'Azure Data Factory',
  'azure-databricks': 'Azure Databricks',
  'adls-gen2': 'ADLS Gen2',
  'azure-sql-database': 'Azure SQL Database',
  'synapse-analytics': 'Synapse Analytics',
  'delta-lake': 'Delta Lake',
  'pyspark-on-databricks': 'PySpark on Databricks',
  'medallion-architecture': 'Medallion Architecture',
  'data-pipeline-projects': 'Data Pipeline Projects',
  'python-interview-questions': 'Python Interview Questions',
  'sql-interview-questions': 'SQL Interview Questions',
  'pyspark-interview-questions': 'PySpark Interview Questions',
  'azure-devops-interview-questions': 'Azure DevOps Interview Questions',
  'azure-data-engineering-interview-questions': 'Azure Data Engineering Interview Questions',
  'ai-ml-interview-questions': 'AI / ML Interview Questions',
};

function pageHref(categoryId, topicId, slug) {
  if (slug === 'index') return `${categoryId}/${topicId}/index.html`;
  return `${categoryId}/${topicId}/${slug}/index.html`;
}

function buildCategories() {
  return CATEGORY_DEFS.map((catDef) => {
    const topics = catDef.topicIds.map((topicId) => {
      const steps = ALL_PATHS[topicId];
      if (!steps) {
        throw new Error(`Missing learning path for topic: ${topicId}`);
      }
      const topic = {
        id: topicId,
        label: TOPIC_LABELS[topicId] || topicId,
        pages: steps.map((step) => ({
          slug: step.slug,
          label: step.label,
          description: step.description,
          ...(step.href ? { href: step.href } : {}),
          ...(step.codeLang ? { codeLang: step.codeLang } : {}),
          ...(step.noCode ? { noCode: step.noCode } : {}),
        })),
      };
      const enriched = enrichTopic(
        { id: catDef.id, label: catDef.label },
        topic,
        (slug) => pageHref(catDef.id, topicId, slug)
      );
      return enriched;
    });

    return {
      id: catDef.id,
      label: catDef.label,
      mega: catDef.mega,
      topics,
    };
  });
}

const categories = buildCategories();

function getStats() {
  const stats = { total: 0, byCategory: {}, byTopic: {} };
  categories.forEach((cat) => {
    let catCount = 0;
    cat.topics.forEach((topic) => {
      const topicPages = 1 + topic.pages.length;
      stats.byTopic[`${cat.id}/${topic.id}`] = topic.pages.length;
      catCount += topicPages;
    });
    stats.byCategory[cat.id] = catCount;
    stats.total += catCount;
  });
  return stats;
}

module.exports = { categories, getStats, pageHref, TOPIC_LABELS };
