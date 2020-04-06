module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    // "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)", // default
    "**/__tests__/**/*.[t]s?(x)", "**/?(*.)+(spec|test).[t]s?(x)" // ts only
  ]
};
