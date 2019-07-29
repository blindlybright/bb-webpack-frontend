// useful links: https://mike-ward.net/2015/09/07/tips-on-setting-up-karma-testing-with-webpack/

// var webpack = require('webpack');
var webpackConfig = require('./webpack.test.config');

// css modules: no need for tests, declare noop loader
webpackConfig.module.rules[0].use = {
  loader: 'null-loader'
};

// js modules: no need to fix loader
// webpackConfig.module.rules[1].use =

// images modules: currently just removing their loader
// webpackConfig.module.rules.pop();

// images modules: no need for tests, declare noop loader
webpackConfig.module.rules[2].use = {
  loader: 'null-loader'
};

module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: [ 'mocha' ], // use the mocha test framework, seems like it's included before each starting tests

    files: [
      'specs.js' //just load this file
    ],
    // plugins: ['karma-coverage-istanbul-reporter'],

    preprocessors: {
      'specs.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },

    // // optionally, configure the reporter
    // coverageReporter: {
    //   type : 'html',
    //   dir : 'coverage/',
    //   fixWebpackSourcePaths: true,
    //   // includeAllSources: true,
    //   instrumenterOptions: {
    //     istanbul: { noCompact: true }
    //   }
    // },

    // https://webpack.js.org/loaders/istanbul-instrumenter-loader/
    // https://github.com/karma-runner/karma-chrome-launcher // puppeteer && ChromeHeadless
    // reporters: [ 'dots', 'progress', 'coverage' ], //report results in this format
    reporters: [ 'progress' ], //report results in this format
    colors: true,
    loglevel: config.LOG_INFO,
    autoWatch: false,
    // browsers: [ 'Chrome', 'PhantomJS' ], //run in Chrome
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    autoWatchBatchDelay: 300,

    webpack: webpackConfig,
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
