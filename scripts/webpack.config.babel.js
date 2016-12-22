import webpack from 'webpack'
import path from 'path'

import cssnext from 'postcss-cssnext'
import cssMqpacker from 'css-mqpacker'

import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackTemplate from 'html-webpack-template'

export default {
    entry: './components/App/index.jsx',
    output: {
        path: path.join(process.cwd(), './public'),
        filename: 'main.[hash].js',
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [
                    cssnext({
                        browsers: ['last 2 versions', 'IE > 10'],
                    }),
                    cssMqpacker(),
                ],
            },
        }),

        new ExtractTextPlugin({
            filename: 'style.[hash].css',
            disable: false,
            allChanks: true,
        }),

        new HtmlWebpackPlugin({
            template: HtmlWebpackTemplate,
            title: 'Webpack && CSS Modules | Demo',
            cache: true,
            inject: false,
            appMountId: 'app',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                useShortDoctype: true,
            },
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
    ],

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: [
                '/node_modules/',
                '/public/',
            ],
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader?modules&localIdentName=[local]--[hash:base64:5]!postcss-loader',
            }),
        }],
    },
}
