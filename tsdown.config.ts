import { defineConfig } from 'tsdown'

export default defineConfig(options => {
  return {
    target: ['es2020'],
    entry: {
      index: 'src/index.ts',
      'sub/index': 'src/sub/index.ts',
    },
    outDir: 'dist',
    format: ['esm', 'cjs'],
    dts: true,
    splitting: true,
    sourcemap: false,
    treeshake: true,
    clean: true,
    minify: !options.watch,
  }
})
