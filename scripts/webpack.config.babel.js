import webpack from 'webpack'
import path from 'path'
import cssnext from 'postcss-cssnext'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import HtmlWebpackTemplate from 'html-webpack-template'

export default {
    entry: './components/App/index.jsx',
    output: {
        path: path.join(process.cwd(), './public'),
        filename: 'main.js',
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
                ],
            },
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
            loader: 'babel',
        }, {
            test: /\.css$/,
            exclude: [
                '/node_modules/',
                '/public/',
            ],
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: { importLoaders: 1, modules: true },
                },
                "postcss-loader",
            ],
        }],
    },
}
