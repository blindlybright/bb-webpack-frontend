// const path = require('path');
const webpackCommonConfig = require('./webpack.common.config.js');
const CopyPlugin = require('copy-webpack-plugin');

const {
    getBaseName,
} = require('./env');



function config(opts) {
    const BASE_NAME = getBaseName(opts.isProduction);

    const cfg = Object.assign({}, webpackCommonConfig(opts), {
        mode: 'production',
    });
    cfg.plugins.push(
        new CopyPlugin([{
            from: 'json/',
            to: BASE_NAME + 'json/',
            context: 'src/',
        }]),
        new CopyPlugin([{     // for hard copy of all images including possibly useless (svg isn't exported by default)
            from: 'images/',
            to: BASE_NAME + 'images/',
            context: 'src/',
        }]),
    );

    return cfg;
}

module.exports = config;
