// @ifdef USE_BABEL
import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
// @endif

// @ifdef CODE_COVERAGE
import istanbul from 'rollup-plugin-istanbul';
// @endif


let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

export default {
  entry: 'lib/index.js',
  plugins: [
    // @ifdef USE_BABEL
      babel(babelrc()),
    // @endif

    // @ifdef CODE_COVERAGE
      istanbul({
          exclude: ['test/**/*', 'node_modules/**/*']
      })
    // @endif
  ],
  external: external,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'rollupStarterProject',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
};
