import { defineConfig } from 'tsup'

export default defineConfig(options => {
  return {
    target: ['es2020'],
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
