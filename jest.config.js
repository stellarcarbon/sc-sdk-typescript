/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      diagnostics: {
        // turn off “Type 'unknown' is not assignable to type 'T'”
        ignoreCodes: [2322]
      }
    }]
  },
  
}
