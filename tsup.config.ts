import { defineConfig } from 'tsup'

export default defineConfig(options => {
  return {
    // platform: 'node',
    // target: ['node16'],
    platform: 'browser',
    target: ['es2020', 'chrome60', 'firefox60', 'safari11', 'edge18'],
    entry: {
      index: 'src/index.ts',
      'sub/index': 'src/sub/index.ts',
    },
    outDir: 'dist',
    format: ['cjs', 'esm'],
    dts: true,
    bundle: true,
    splitting: true,
    sourcemap: false,
    treeshake: true,
    clean: true,
    minify: !options.watch,
  }
})
