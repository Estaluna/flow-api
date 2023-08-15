module.exports = {
  roots: ["<rootDir>"],
  testMatch: ["**/__tests__/*.spec.+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
