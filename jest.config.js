const config = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: { ".+\\.(ts|tsx)$": "ts-jest" },
};

module.exports = config;
