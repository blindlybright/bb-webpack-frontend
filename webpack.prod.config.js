// const path = require('path');
const webpackCommonConfig = require('./webpack.common.config.js');

const config = Object.assign({}, webpackCommonConfig, {
	mode: "production"
});

module.exports = config;
