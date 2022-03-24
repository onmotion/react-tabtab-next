import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';



const path = 'dist/react-tabtab';

const name = 'Tabtab';
const globals = {
  'prop-types': 'PropTypes',
  'react-dom': 'ReactDOM',
  react: 'React',
  'react-sortable-hoc': 'SortableHOC',
  'classnames': 'classNames',
  'styled-components': 'styled',
  'react-poppop': 'PopPop'
};

//const external = Object.keys(globals);

const prod = process.env.PRODUCTION
const esbundle = process.env.ESBUNDLE

let output;
if (prod) {
  console.log('Creating production UMD bundle...');
  output = {file: path + '.min.js', format: 'umd', name};
} else if (esbundle) {
  console.log('Creating ES modules bundle...');
  output = {file: path + '.es.js', format: 'es', sourcemap: true};
}

const extensions = ['.js', '.ts', '.tsx'];

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
  typescript({ tsconfig: './tsconfig.json' }),

];

if (prod) {
  plugins.push(
   
    replace({
      'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
    })
  );
}
export default 
{
    input: 'src/index.ts',
    external: Object.keys(globals),
    output: output,
    plugins: plugins,
    acornInjectPlugins: [jsx()]
  

  // input: 'src/index.ts',
  // name,
  // external,
  // exports: 'named',
  // output,
  // plugins,
  // globals: globals,
}
