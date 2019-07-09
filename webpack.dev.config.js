// const path = require('path');
const webpackCommonConfig = require('./webpack.common.config.js');

function config(opts) {
	return Object.assign({}, webpackCommonConfig(opts), {
		mode: "development",
		devtool: "inline-source-map",
		devServer: {
			contentBase: './src',
			index: "index.html",
			openPage: ""
		}
	})
}

module.exports = config;
