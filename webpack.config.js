const argv = require('yargs').argv;

const isDevelopment = argv.mode === 'development';
const isTest = argv.mode === 'test';
const isProduction = !isDevelopment && !isTest;

const webpackDevConfig = require('./webpack.dev.config.js');
const webpackProdConfig = require('./webpack.prod.config.js');
const webpackTestConfig = require('./webpack.test.config.js');

const config = Object.assign(isDevelopment
	? webpackDevConfig
	: isProduction
		? webpackProdConfig
		: webpackTestConfig
);

module.exports = config;
