import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!**/protocols/**', '!**/test/**'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  moduleNameMapper: {
    '^@data/(.*)': '<rootDir>/src/data/$1',
    '^@domain/(.*)': '<rootDir>/src/domain/$1',
    '^@presentation/(.*)': '<rootDir>/src/presentation/$1',
    '^@utils/(.*)': '<rootDir>/src/utils/$1',
    '^@infra/(.*)': '<rootDir>/src/infra/$1',
    '^@main/(.*)': '<rootDir>/src/main/$1'
  },
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

export default config
