module.exports = {
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!./src/**/{index.ts,*.stories.tsx}',
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}
