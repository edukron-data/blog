/**
 * Merge all learning path definitions
 */
const { PATHS: programmingAi } = require('./programming-ai');
const { AZURE_DEVOPS_PATHS, AZURE_DATA_PATHS } = require('./azure');
const { INTERVIEW_PATHS } = require('./interview');

const ALL_PATHS = {
  ...programmingAi,
  ...AZURE_DEVOPS_PATHS,
  ...AZURE_DATA_PATHS,
  ...INTERVIEW_PATHS,
};

module.exports = { ALL_PATHS };
