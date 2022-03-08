const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const packageJSON = require('./package.json');
const { getBaseName } = require('./env');

function config(opts) {
    const BASE_NAME = getBaseName(opts.isProduction);

    return {
        mode: 'none',
        devtool: '',
        entry: {
            index: './src/js/index.ts',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: BASE_NAME + (opts.isDevelopment ? 'js/[name].bundle.js' : 'js/[name].[hash].bundle.js'),
            chunkFilename: BASE_NAME + (opts.isDevelopment
                ? 'js/[name].chunk.bundle.js'
                : 'js/[name].[hash].chunk.bundle.js'),
            publicPath: '/',
        },
        resolve: {
            extensions: ['.ts', '.js'], // Priorities while resolving require with absent extensions
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
                        priority: -10,
                    },
                    index: {
                        test: function(module, chunks) {
                            const isVendorModule = module.resource && module.resource.indexOf('node_modules') >= 0;
                            return !isVendorModule;
                        }, // ??? return module.context && module.context.includes('node_modules');
                        priority: -5,
                    },
                    default: {
                        minChunks: 1,
                        priority: -20,
                        reuseExistingChunk: false,
                    },
                },
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
                                comments: false,
                            },
                        },
                    }),
                ]
                : [],
        },
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    use: [
                        // fallback to style-loader in development
                        !opts.isProduction
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        // {
                        //     loader: MiniCssExtractPlugin.loader,
                        //     options: {
                        //         sourceMap: true,
                        //         // publicPath: './',
                        //     },
                        // },
                        {
                            loader: 'css-loader', // https://blog.jakoblind.no/css-modules-webpack/
                            options: {
                                sourceMap: true,
                                url: true,
                                // importLoaders: 1,
                                import: true,
                                // modules: true, // nb: changes classnames
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'autoprefixer',
                                            // {
                                            //     // Options
                                            // },
                                        ],
                                    ],
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },

                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['@babel/plugin-proposal-object-rest-spread'],
                        },
                    },
                },
                {
                    test: /\.(png|jp(e*)g|gif|svg)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 4096, // Convert images < 4kb to base64 strings
                            name: 'images/[name].[ext]',
                        },
                    }],
                },
                {
                    test: /webfont\.(ttf|eot|woff(2)?|svg)(\?[\da-z]+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: BASE_NAME + 'fonts/[name].[ext]',
                            context: 'scss/',
                            // nb: not much lucky config,
                            // but with package.json's declaration for fonts folder to be correctly placed while postbuild webpack' task,
                            // it becomes much more predictable
                            ...(opts.isProduction ? {
                                publicPath: '/', // path in css url to prepended
                                // publicPath: '/',
                                outputPath: '/', // additional path for prod bundle optimization ()
                            } : {}),
                        },
                    }],
                },
                {
                    test: /\.ts$/, // test: /\.tsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'ts-loader',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: BASE_NAME + 'index.html',
                inject: true,
                // chunks: ['vendors', 'index'], // nb: webpack better knows
            }),
            new MiniCssExtractPlugin({ // https://github.com/webpack-contrib/sass-loader :: In production
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: BASE_NAME + (opts.isDevelopment ? 'css/[name].css' : 'css/styles.[hash].css'), // 'css/[name].[hash].css',
                chunkFilename: BASE_NAME + (opts.isDevelopment ? '[id].css' : '[id].[hash].css'),
            }),
            new webpack.EnvironmentPlugin({
                VERSION: packageJSON.version,
            }),
        ],
    };
}

module.exports = config;
