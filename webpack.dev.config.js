const path = require('path');
const apiMocker = require('mocker-api');
const { getBaseName } = require('./env');

const webpackCommonConfig = require('./webpack.common.config.js');
const NO_WEBPACK_MOCKS = process.env.NO_MOCKS === 'true';

function config(opts) {
    const BASE_NAME = getBaseName(opts.isProduction);

    return Object.assign({}, webpackCommonConfig(opts), {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './src',
            watchContentBase: true,   // for watch .html files
            index: 'index.html',
            openPage: BASE_NAME,
            before: function(app) {
                if (NO_WEBPACK_MOCKS) return;

                apiMocker(app, path.resolve('./mocker-api/index.js'), {
                    // proxy: {
                    //     '/repos/*': 'https://api.github.com/',
                    // },
                    // changeHost: true,
                });

                // NB: originally express response example
                // app.get('/some/path', function(req, res) {
                //     res.json({ custom: 'response' });
                // });
            },
        },
    });
}

module.exports = config;
