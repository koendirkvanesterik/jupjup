module.exports = {
  collectCoverageFrom: ['./src/**/*.ts'],
  setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
}
