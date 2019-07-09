// const path = require('path');
const webpackCommonConfig = require('./webpack.common.config.js');

function config(opts) {
	return Object.assign({}, webpackCommonConfig(opts), {
		mode: "production"
	})
}

module.exports = config;
