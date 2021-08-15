import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!**/protocols/**', '!**/test/**'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@data/(.*)': '<rootDir>/src/data/$1',
    '^@domain/(.*)': '<rootDir>/src/domain/$1',
    '^@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1'
  },
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
