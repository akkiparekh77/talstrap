const path = require('path') // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  rootDir: path.join(__dirname, '..'),
  testMatch: ['**/storyshots-image.runner.js'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(lodash-es|react-syntax-highlighter|@storybook/addon-docs)/).+\\.js$'],
}
