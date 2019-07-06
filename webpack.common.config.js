const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const myPublicPath = './';

const config = {
	mode: "none",
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js",
		publicPath: ""
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html',
			inject: false
		})
	]
};

module.exports = config;
