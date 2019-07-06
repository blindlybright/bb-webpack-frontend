// const path = require('path');
const webpackCommonConfig = require('./webpack.common.config.js');

const config = Object.assign({}, webpackCommonConfig, {
	mode: "development",
	devServer: {
		contentBase: './src',
		index: "src/index.html",
		openPage: ""
	}
});

module.exports = config;
