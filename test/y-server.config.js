'use strict';

const path = require('path');

const nuxtPlugin = require('../index.js');

module.exports = {
  watch: path.join(__dirname, '../index.js'),
  plugins: [
    nuxtPlugin({
      nuxtConfig: {
        rootDir: path.join(__dirname, '../'),
        srcDir: __dirname,
        modulesDir: path.join(__dirname, '../node_modules'),
        buildDir: path.join(__dirname, '.nuxt'),
      },
    }),
  ],
};
