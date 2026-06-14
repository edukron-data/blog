/**
 * Rich content router — topicId → content builder + index content.
 */
const { buildRichContent } = require('./engine');
const { getTopicConfig, TOPIC_REGISTRY } = require('./config');
const { buildCodeExample } = require('./code-examples');
const { buildInterviewContent } = require('./interview');
const { GLOBAL_SLUG_HINTS } = require('./global-hints');

const INTERVIEW_TOPICS = new Set([
  'python-interview-questions',
  'sql-interview-questions',
  'pyspark-interview-questions',
  'azure-devops-interview-questions',
  'azure-data-engineering-interview-questions',
  'ai-ml-interview-questions',
]);

function defaultTopicConfig(topicId, topicLabel) {
  return {
    id: topicId,
    meta: {
      domain: topicLabel,
      stack: 'industry-standard tools and frameworks',
      ecosystem: 'production engineering workflows',
    },
    slugHints: {},
    globalSlugHints: GLOBAL_SLUG_HINTS,
    index: {
      intro: `<p>The <strong>${topicLabel}</strong> learning path provides structured lessons from fundamentals through advanced production patterns.</p>`,
      phases: [
        { title: 'Phase 1: Foundations', description: 'Core concepts, terminology, and first hands-on exercises.' },
        { title: 'Phase 2: Intermediate', description: 'Applied patterns, integration, and real-world scenarios.' },
        { title: 'Phase 3: Advanced', description: 'Production tuning, architecture, capstone, and interview readiness.' },
      ],
      prerequisites: ['Willingness to learn sequentially', 'Dev environment setup for hands-on examples'],
      outcomes: [
        `Apply ${topicLabel} concepts in practical projects`,
        'Understand architecture and production trade-offs',
        'Build portfolio-ready artifacts from capstone steps',
      ],
    },
  };
}

function buildTopicRichContent(topicId, page, ctx) {
  const config = getTopicConfig(topicId) || defaultTopicConfig(topicId, ctx.topic.label);
  const meta = { ...config.meta, lang: config.meta.lang || inferLang(topicId) };

  return buildRichContent(config, page, ctx, () => buildCodeExample(topicId, page, meta));
}

function inferLang(topicId) {
  if (topicId.includes('sql') || topicId.includes('synapse')) return 'sql';
  if (topicId.includes('pipeline') || topicId.includes('ci-cd') || topicId.includes('kubernetes') || topicId.includes('aks')) return 'yaml';
  if (topicId.includes('terraform')) return 'hcl';
  if (topicId.startsWith('azure') || topicId === 'docker' || topicId === 'monitoring' || topicId === 'security') return 'bash';
  return 'python';
}

function buildTopicIndexContent(topicId, topicLabel) {
  const config = getTopicConfig(topicId) || defaultTopicConfig(topicId, topicLabel);
  const idx = config.index;

  return {
    intro: idx.intro,
    phases: idx.phases.map((p) => ({
      title: p.title.replace(/\s*\(Steps\s[\d–-]+\)/i, ''),
      description: p.description,
    })),
    prerequisites: idx.prerequisites,
    outcomes: idx.outcomes,
  };
}

function isInterviewTopic(topicId) {
  return INTERVIEW_TOPICS.has(topicId);
}

function hasRichContentModule(topicId) {
  return Boolean(TOPIC_REGISTRY[topicId]) || isInterviewTopic(topicId);
}

module.exports = {
  buildTopicRichContent,
  buildTopicIndexContent,
  buildInterviewContent,
  isInterviewTopic,
  hasRichContentModule,
  INTERVIEW_TOPICS,
  TOPIC_REGISTRY,
};
