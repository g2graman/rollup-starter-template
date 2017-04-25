'use strict';

// @if USE_BABEL
const babelPlugin = require('rollup-plugin-babel');
const babelrc = require('babelrc-rollup').default;
// @endif

// @if ISTANBUL_CODE_COVERAGE
import istanbul from 'rollup-plugin-istanbul';
// @endif

// @if NYC_CODE_COVERAGE
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

    // @if NYC_CODE_COVERAGE
    istanbul({
      instrumenter: {
        Instrumenter: NycIstanbulInstrumenterCreator.createInstrumenter
      }
    }),
    // @endif

    // @if ISTANBUL_CODE_COVERAGE
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
