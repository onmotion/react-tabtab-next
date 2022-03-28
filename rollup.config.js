import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import path from "path";
import { terser } from "rollup-plugin-terser";

const rootPackagePath = process.cwd();
const pkg = require(path.join(rootPackagePath, "package.json"));
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];
const name = "Tabtab";

//const external = Object.keys(globals);

const prod = process.env.PRODUCTION;
const esbundle = process.env.ESBUNDLE;

let output;
if (prod) {
  console.log("Creating production UMD bundle...");
  output = { file: "dist/react-tabtab.min.js", format: "umd", name };
} else if (esbundle) {
  console.log("Creating ES modules bundle...");
  output = {
    dir: "dist",
    format: "esm",
    sourcemap: false,
    preserveModules: true
  };
}

const extensions = [".js", ".ts", ".tsx"];

const plugins = [
  json(),

  // resolve({
  //   browser: true
  // }),
  nodeResolve({ extensions }),
  commonjs({
    // ignoreGlobal: true,
    // exclude: 'src/**'
  }),
  typescript({ tsconfig: "./tsconfig.json" })
];

if (prod) {
  plugins.push(
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        prod ? "production" : "development"
      ),
      preventAssignment: true
    }),
    terser()
  );
}
export default [
  {
    input: "src/index.ts",
    external,
    output: output,
    plugins: plugins
  }
  // {
  //   input: "src/",
  //   external,
  //   output: {
  //     dir: "dist",
  //     format: "esm",
  //     sourcemap: false,
  //     preserveModules: true
  //   },
  //   plugins: plugins
  // }
];
