module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!.*lodash-es/.*)'],
}
