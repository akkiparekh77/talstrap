const requireContext = require('require-context.macro')

module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-viewport', '@storybook/addon-docs', '@storybook/addon-knobs'],
}
