const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');

function config(opts) {
	return {
		mode: "none",
		devtool: "",
		entry: {
			index: './src/js/index.js'
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: opts.isDevelopment ? "js/[name].bundle.js" : "js/[name].[hash].bundle.js",
			publicPath: ""
		},
		resolve: {
			extensions: [".ts", ".js"] // Priorities while resolving require with absent extensions
		},
		optimization: {
			runtimeChunk: false, // building 'runtime' chunk
			splitChunks: {
				chunks: 'all',
				minSize: 30000,
				maxSize: 0,
				minChunks: 1,
				maxAsyncRequests: 5,
				maxInitialRequests: 3,
				automaticNameDelimiter: '~',
				automaticNameMaxLength: 30,
				name: true,
				cacheGroups: {
					vendors: {
						test: /node_modules/,
						chunks: 'initial',
						name: 'vendors',
						enforce: true,
						priority: -10
					},
					index: {
						test: function(module, chunks) {
							const isVendorModule = module.resource && module.resource.indexOf('node_modules') >= 0;
							return !isVendorModule;
						}, // ??? return module.context && module.context.includes('node_modules');
						priority: -5
					},
					default: {
						minChunks: 1,
						priority: -20,
						reuseExistingChunk: false
					}
				}
			},
			minimizer: !opts.isDevelopment
				? [
					new UglifyJsPlugin({
						test: /\.js$/i,
						extractComments: false,
						sourceMap: true,
						cache: false,
						parallel: false,
						uglifyOptions: {
							ecma: 5,
							warnings: false,
							ie8: false,
							mangle: true, // be careful here with angularjs
							compress: {},
							output: {
								comments: false
							}
						}
					})
				]
				: [],
		},
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						// fallback to style-loader in development
						!opts.isProduction ? 'style-loader' : {
							loader: MiniCssExtractPlugin.loader,
							options: {
								publicPath: '../'
							}
						},
						{
							loader: "css-loader",
							options: {
								sourceMap: true,
								url: true,
							}
						},
						{
							loader: "postcss-loader",
							options: {
								ident: 'postcss',
								plugins: [autoprefixer],
								sourceMap: true
							}
						},
						{
							loader: "sass-loader",
							options: { sourceMap: true }
						}

					],
				},
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-object-rest-spread']
						}
					}
				},
				{
					test: /\.(png|jp(e*)g|gif|svg)$/,
					use: [{
						loader: 'url-loader',
						options: {
							limit: 4000, // Convert images < 8kb to base64 strings
							name: 'images/[name].[ext]'
						}
					}]
				},
				{
					test: /\.tsx?$/,
					exclude: /(node_modules|bower_components)/,
					loader: "ts-loader"
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				filename: 'index.html',
				inject: true,
				chunks: ['vendors', 'index']
			}),
			new MiniCssExtractPlugin({ // https://github.com/webpack-contrib/sass-loader :: In production
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: opts.isDevelopment ? 'css/[name].css' : 'css/styles.[hash].css', // 'css/[name].[hash].css',
				chunkFilename: opts.isDevelopment ? '[id].css' : '[id].[hash].css',
			})
		]
	};
}

module.exports = config;
