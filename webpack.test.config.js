// const path = require('path');
const webpackCommonConfig = require('./webpack.common.config.js');

function config(opts) {
	return Object.assign({}, webpackCommonConfig(opts), {
		mode: "development",
		devtool: "inline-source-map"
	});
}

module.exports = config({
	isTest: true,
	isDevelopment: false,
	isProduction: false
});
