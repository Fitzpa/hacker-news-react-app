module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.scss$': require.resolve('./test/style-mock.js'),
  },
};
