'use strict';

// @if USE_BABEL
const babelPlugin = require('rollup-plugin-babel');
const babelrc = require('babelrc-rollup').default;
// @endif

// @if CODE_COVERAGE_ISTANBUL_FLAG
import istanbul from 'rollup-plugin-istanbul';
// @endif

// @if CODE_COVERAGE_NYC_FLAG
const istanbul = require('rollup-plugin-istanbul');

const NYC = require('nyc');

const nyc = new NYC();
const NycIstanbulInstrumenterCreator = new nyc._instrumenterLib.istanbul();
// @endif

let pkg = require('../package.json');
let external = Object.keys(pkg.dependencies);

module.exports = {
  entry: 'lib/index.js',
  plugins: [
    // @if USE_BABEL
    babelPlugin(babelrc()),
    // @endif

    // @if CODE_COVERAGE_NYC_FLAG
    istanbul({
      instrumenter: {
        Instrumenter: NycIstanbulInstrumenterCreator.createInstrumenter
      }
    }),
    // @endif

    // @if CODE_COVERAGE_ISTANBUL_FLAG
    istanbul({
      exclude: ['test/**/*', 'node_modules/**/*']
    }),
    // @endif
  ],
  external: external,
  targets: [{
    dest: pkg.main,
    format: 'umd',
    moduleName: 'rollupStarterProject',
    sourceMap: true
  }, {
    dest: pkg.module,
    format: 'es',
    sourceMap: true
  }]
};
