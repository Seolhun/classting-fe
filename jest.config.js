const { defaults } = require('jest-config')

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.test.json',
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts?(x)$/,
        warnOnly: true
      },
      babelConfig: true
    }
  },
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  testMatch: ['<rootDir>/test/**/*.(test|spec).ts?(x)'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'identity-obj-proxy',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.worker.(js|ts)$': '<rootDir>/test/__mocks__/workerMock.ts',
    'worker-loader?(.*)': '<rootDir>/test/__mocks__/workerMock.ts',
    '^@controllers/(.*)': '<rootDir>/controllers/$1',
    '^@layouts/(.*)': '<rootDir>/layouts/$1',
    '^@pages/(.*)': '<rootDir>/pages/$1',
    '^@router/(.*)': '<rootDir>/router/$1',
    '^@src/(.*)': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setUpTest.ts']
}
