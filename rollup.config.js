import path from 'path';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

const rootPackagePath = process.cwd();
const input = path.join(rootPackagePath, 'src/index.ts');
const pkg = require(path.join(rootPackagePath, 'package.json'));

const outputDir = path.join(rootPackagePath, 'dist');
const pgkName = pkg.name.split('/').pop();

const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
];

const plugins = [json(), resolve(), typescript()];

export default [
    // UMD
    // {
    //   input,
    //   output: {
    //     name: pgkName,
    //     exports: "named",
    //     file: path.join(outputDir, `bundle.js`),
    //     format: "umd",
    //     sourcemap: true
    //   },
    //   external,
    //   plugins
    // },
    {
        input,
        output: {
            dir: 'dist',
            exports: 'named',
            format: 'cjs'
        },
        external,
        plugins
    }

    // Minified UMD
    // {
    //   input,
    //   output: {
    //     name: pgkName,
    //     exports: "named",
    //     file: path.join(outputDir, `bundle.min.js`),
    //     format: "umd",
    //     sourcemap: true
    //   },
    //   external,
    //   plugins: [...plugins, terser()]
    // }
];
