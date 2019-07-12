// const path = require('path');
const webpackCommonConfig = require('./webpack.common.config.js');
const CopyPlugin = require('copy-webpack-plugin');

function config(opts) {
	const cfg = Object.assign({}, webpackCommonConfig(opts), {
		mode: "production"
	});
	cfg.plugins.push(
		new CopyPlugin([{
			from: 'json/',
			to: 'json/',
			context: 'src/'
		}]),
		new CopyPlugin([{     // for hard copy of all images including possibly useless (svg isn't exported by default)
			from: 'images/',
			to: 'images/',
			context: 'src/'
		}])
	);

	return cfg;
}

module.exports = config;
