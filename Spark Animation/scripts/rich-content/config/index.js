/**
 * Merge all topic configs into a single registry.
 */
const { programmingTopics } = require('./programming');
const { aiTopics } = require('./ai');
const { azureDevOpsTopics } = require('./azure-devops');

const TOPIC_REGISTRY = {
  ...programmingTopics,
  ...aiTopics,
  ...azureDevOpsTopics,
};

function getTopicConfig(topicId) {
  return TOPIC_REGISTRY[topicId] || null;
}

function getAllTopicIds() {
  return Object.keys(TOPIC_REGISTRY);
}

module.exports = {
  TOPIC_REGISTRY,
  getTopicConfig,
  getAllTopicIds,
};
