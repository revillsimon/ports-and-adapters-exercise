import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
    css: true,
    coverage: {
      ...coverageConfigDefaults,
      exclude: [
        ...coverageConfigDefaults.exclude,
        "src/index.ts",
        "**/*.d.ts",
        "**/CounterRepository.ts",
      ],
    },
  },
});
