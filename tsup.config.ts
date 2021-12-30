import { defineConfig } from 'tsup'
import pkg from './package.json'

// https://tsup.egoist.sh/#using-custom-configuration
export default defineConfig(() => {
  return {
    // platform: 'browser', // 'node',
    entry: {
      index: 'src/index.ts',
    },
    outdir: 'dist',
    bundle: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    minify: true,
    globalName: 'MyLibName',
    format: ['cjs', 'esm', 'iife'],
    dts: {
      input: 'src/index.ts',
      resolve: true,
    },
    banner: {
      js: `/** Copyright ${new Date().getFullYear()} ${pkg.name}_v${
        pkg.version
      } build at ${new Date().toLocaleString()} **/`,
    },
    // onSuccess: '',
  }
})
