import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    exclude: [],
    globalSetup: ["vitest.attest.ts"]
  },
})
