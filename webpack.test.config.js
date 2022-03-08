// const path = require('path');
const webpack = require('webpack');
const webpackCommonConfig = require('./webpack.common.config.js');

function config(opts) {
    const cfg = Object.assign({}, webpackCommonConfig(opts), {
        mode: 'development',
        devtool: 'inline-source-map',
    });
    cfg.plugins.push(
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'test', // use 'test' unless process.env.NODE_ENV is defined
        }),
    );

    return cfg;
}

module.exports = config({
    isTest: true,
    isDevelopment: false,
    isProduction: false,
});
