import { defineConfig } from 'tsup'

// https://tsup.egoist.sh/#using-custom-configuration
// https://paka.dev/npm/tsup/v/5.12.4#module-index-export-Options
export default defineConfig(() => {
  return {
    // platform: 'node',
    // target: ['node12'],
    platform: 'browser',
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    entry: {
      index: 'src/index.ts',
    },
    outdir: 'dist',
    globalName: 'MyLibName',
    format: ['cjs', 'esm', 'iife'],
    bundle: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    minify: true,
    dts: {
      resolve: true,
    },
    esbuildOptions(options, context) {
      // https://esbuild.github.io/api/#simple-options
      console.log(options, context)
    },
  }
})
