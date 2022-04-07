const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    devServer: {
        //  static: './demo/__build__',
        compress: false,
        port: 9000,
        open: true,
    },
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './__build__'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './demo/public/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                //   include: [path.resolve(__dirname, './src')],
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: { loader: 'ts-loader' },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
        // alias: {
        //     'react-tabtab-next-themes': path.resolve(__dirname, '../../themes/dist/index'),
        // },
    },
};
