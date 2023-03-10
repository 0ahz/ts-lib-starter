import fs from 'fs'
import camelCase from 'camelcase'
import { defineConfig } from 'tsup'

import { name, version } from './package.json'

const pkgName = name.replace('@', '').replace('/', '-')

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
    },
    outdir: 'dist',
    globalName: camelCase(pkgName),
    format: ['cjs', 'esm', 'iife'],
    dts: {
      resolve: true,
    },
    bundle: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    minify: !options.watch,

    outExtension: ({ format }) => {
      return {
        js: `.${format}.js`,
      }
    },

    esbuildPlugins: [],

    // esbuildOptions(options, context) {
    //   // https://esbuild.github.io/api/#simple-options
    //   console.log(options, context)
    // },

    onSuccess: async () => {
      const oldFileName = 'index.iife.js'
      const fileName = `${pkgName}-${version}.js`
      const fileContent = fs.readFileSync(`dist/${oldFileName}`).toString()
      fs.writeFileSync(
        `dist/${fileName}`,
        fileContent.replace(oldFileName, fileName),
      )
      fs.copyFileSync(`dist/${oldFileName}.map`, `dist/${fileName}.map`)
    },
  }
})
