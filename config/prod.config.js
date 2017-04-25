'use strict';

// @if USE_BABEL
const babelPlugin = require('rollup-plugin-babel');
const babelrc = require('babelrc-rollup').default;
// @endif

let pkg = require('../package.json');
let external = Object.keys(pkg.dependencies);

module.exports = {
  entry: 'lib/index.js',
  plugins: [
    // @if USE_BABEL
    babelPlugin(babelrc()),
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
