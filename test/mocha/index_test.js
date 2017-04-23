'use strict';

const libMultiply = require('../../dist/rollup-starter-project').multiply;
const strictEqual = require('assert').strictEqual;

describe('multiply', () => {
  it('returns 0 when either argument is 0', () => {
    strictEqual(libMultiply(0, 2), 0);
    strictEqual(libMultiply(4, 0), 0);
  });

  it('returns the value of one number if the other is 1', () => {
    strictEqual(libMultiply(1, 8), 8);
    strictEqual(libMultiply(5, 1), 5);
  });

  it('is commutative', () => {
    strictEqual(libMultiply(2, 4), libMultiply(4, 2));
  });

  it('returns the product of the two numbers', () => {
    strictEqual(libMultiply(11, 9), 99);
  });

  it('handles negative numbers', () => {
    strictEqual(libMultiply(-2, 2), -4);
    strictEqual(libMultiply(2, -2), -4);
    strictEqual(libMultiply(-2, -2), 4);
  });
});
