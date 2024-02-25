import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 50_000,
    setupFiles: 'dotenv/config',
  },
})
