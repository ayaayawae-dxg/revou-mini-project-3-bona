/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: { "^.+\\.(ts|tsx|js|jsx)?$": "ts-jest" },
  setupFilesAfterEnv: ["./src/setupTests.ts"],
};
