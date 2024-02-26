import { defineConfig } from 'tsup'

// https://tsup.egoist.sh/#using-custom-configuration
// https://paka.dev/npm/tsup/v/5.12.4#module-index-export-Options
export default defineConfig(options => {
  return {
    // platform: 'node',
    // target: ['node16'],
    platform: 'browser',
    target: ['chrome60', 'firefox60', 'safari11', 'edge18'],
    entry: {
      index: 'src/index.ts',
      'sub/index': 'src/sub/index.ts',
    },
    outDir: 'dist',
    format: ['esm', 'cjs'],
    dts: {
      resolve: true,
    },
    bundle: true,
    splitting: true,
    sourcemap: false,
    treeshake: true,
    clean: true,
    minify: !options.watch,

    esbuildPlugins: [],

    // esbuildOptions(options, context) {
    //   // https://esbuild.github.io/api/#simple-options
    //   console.log(options, context)
    // },
  }
})
