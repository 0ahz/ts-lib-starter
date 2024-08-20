import fs from 'node:fs'
import typescript from '@rollup/plugin-typescript'
// import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { format } from 'date-fns'
import camelCase from 'camelcase'

const pkgStr = fs.readFileSync('./package.json')
const pkg = JSON.parse(pkgStr)

const parsedName = pkg.name
  .replace('@', '')
  .split('/')
  .map(r => camelCase(r, { pascalCase: true }))
  .join('-')
const globalName = camelCase(parsedName, { pascalCase: true })
const fileName = [
  parsedName.toLowerCase(),
  // pkg.version,
  //
].join('-')
const outputFile = `${fileName}.js`
const outputMinFile = `${fileName}.min.js`
const buildTime = format(new Date(), 'yyyy-MM-dd_HH:mm:ss_SSS')

const bannerFactory = (options = {}) => {
  const { name, version, author, build } = Object.assign(
    {
      version: pkg.version,
      author: pkg.author,
      build: buildTime,
    },
    options,
  )
  return `/*!!\n * Copyright (c) 2022-PRESENT 0ahz (https://github.com/0ahz)\n * Name: ${name}\n * Version: ${version}\n * Author: ${author}\n * Build: ${build}\n*/`
}

console.log({ globalName, outputFile, outputMinFile, buildTime })

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        name: globalName,
        file: `dist/${outputFile}`,
        strict: true,
        format: 'umd',
        dynamicImportInCjs: true,
        sourcemap: false,
        banner: bannerFactory({ name: outputFile }),
      },
      {
        name: globalName,
        file: `dist/${outputMinFile}`,
        strict: true,
        format: 'umd',
        dynamicImportInCjs: true,
        sourcemap: false,
        banner: bannerFactory({ name: outputMinFile }),
        plugins: [terser({ format: { comments: /^!!/ } })],
      },
    ],
    plugins: [
      json(),
      commonjs(),
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
]
