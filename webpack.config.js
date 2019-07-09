const argv = require('yargs').argv;

const isDevelopment = argv.mode === 'development';
const isTest = argv.mode === 'test';
const isProduction = !isDevelopment && !isTest;
const opts = {
	isDevelopment,
	isTest,
	isProduction
};

const webpackDevConfig = require('./webpack.dev.config.js')(opts);
const webpackProdConfig = require('./webpack.prod.config.js')(opts);
const webpackTestConfig = require('./webpack.test.config.js')(opts);

const config = Object.assign(isDevelopment
	? webpackDevConfig
	: isProduction
		? webpackProdConfig
		: webpackTestConfig
);

module.exports = config;
