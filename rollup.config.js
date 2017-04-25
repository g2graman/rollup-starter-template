'use strict';

let exports = {};

if (/dev(elopment)?/i.test(process.env.NODE_ENV)) {
  exports = require('./config/dev.config');
} else if (/prod(uction)?/i.test(process.env.NODE_ENV)) {
  exports = require('./config/prod.config');
}

module.exports = exports;
