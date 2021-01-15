const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        main: [
            '@babel/polyfill',
            path.resolve(__dirname, 'src/scripts', 'main.js'),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'development-page-scroll-indicator.js',
        publicPath: '',
    },
    target: isDev ? 'web' : 'browserslist',
    devtool: 'source-map',
    devServer: {
        port: 9000,
        hot: true,
        open: 'firefox',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};
