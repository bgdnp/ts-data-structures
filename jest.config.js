module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ['**/*\\.(test|spec)\\.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  maxConcurrency: 2,
  maxWorkers: 2,
};
