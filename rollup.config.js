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
const prod = process.env.PRODUCTION;

const extensions = [".js", ".ts", ".tsx"];

const plugins = [
  json(),
  nodeResolve({ extensions }),
  commonjs({
    // ignoreGlobal: true,
    //  exclude: "src/packeges/*"
  }),
  typescript({ tsconfig: "./tsconfig.json" })
];

export default [
  {
    input: "src/index.ts",
    external,
    output: { file: "dist/react-tabtab.min.js", format: "umd", name },
    plugins: [
      ...plugins,
      [
        replace({
          "process.env.NODE_ENV": JSON.stringify(
            prod ? "production" : "development"
          ),
          preventAssignment: true
        }),
        terser()
      ]
    ]
  }
  // {
  //   input: "src/index.ts",
  //   external,
  //   output: {
  //     dir: "dist",
  //     format: "esm",
  //     sourcemap: false,
  //    // preserveModules: true
  //   },
  //   plugins: plugins
  // }
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
