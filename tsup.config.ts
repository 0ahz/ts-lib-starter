import camelCase from 'camelcase'
import { defineConfig } from 'tsup'

import pkg from './package.json'

// https://tsup.egoist.sh/#using-custom-configuration
// https://paka.dev/npm/tsup/v/5.12.4#module-index-export-Options
export default defineConfig(() => {
  return {
    // platform: 'node',
    // target: ['node16'],
    platform: 'browser',
    target: ['chrome60', 'firefox60', 'safari11', 'edge18'],
    entry: {
      index: 'src/index.ts',
    },
    outdir: 'dist',
    globalName: camelCase(pkg.name, { pascalCase: true }),
    format: ['cjs', 'esm', 'iife'],
    bundle: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    minify: true,
    dts: {
      resolve: true,
    },
    // esbuildOptions(options, context) {
    //   // https://esbuild.github.io/api/#simple-options
    //   console.log(options, context)
    // },
    onSuccess: `echo onSuccess`,
  }
})
