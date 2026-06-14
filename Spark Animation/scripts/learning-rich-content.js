/**
 * @deprecated Use scripts/rich-content/ — kept for backward compatibility.
 */
const { buildTopicRichContent, TOPIC_REGISTRY } = require('./rich-content');
const { GLOBAL_SLUG_HINTS } = require('./rich-content/global-hints');

function buildGenericRichContent(topicId, page, ctx) {
  return buildTopicRichContent(topicId, page, ctx);
}

module.exports = {
  TOPIC_META: Object.fromEntries(
    Object.entries(TOPIC_REGISTRY).map(([id, cfg]) => [id, cfg.meta])
  ),
  buildGenericRichContent,
  slugHints: GLOBAL_SLUG_HINTS,
};
