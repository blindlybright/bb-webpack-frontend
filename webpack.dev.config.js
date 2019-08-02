// const path = require('path');
const webpackCommonConfig = require('./webpack.common.config.js');

const path = require('path');
const apiMocker = require('mocker-api');

function config(opts) {
	return Object.assign({}, webpackCommonConfig(opts), {
		mode: "development",
		devtool: "inline-source-map",
		devServer: {
			contentBase: './src',
			watchContentBase: true,   // for watch .html files
			index: "index.html",
			openPage: "",
			before: function(app) {
				apiMocker(app, path.resolve('./mocker-api/index.js'), {
					proxy: {
						'/repos/*': 'https://api.github.com/',
					},
					changeHost: true,
				});

				// NB: originally express response example
				// app.get('/some/path', function(req, res) {
				// 	res.json({ custom: 'response' });
				// });
			}
		}
	})
}

module.exports = config;
