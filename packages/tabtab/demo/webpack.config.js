const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var EXAMPLES_DIR = path.resolve(__dirname, './src');

function isDirectory(dir) {
    return fs.lstatSync(dir).isDirectory();
}

function buildEntries() {
    return fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
        console.log(entries);
        if (dir === 'build') return entries;

        var isDraft = dir.charAt(0) === '_';

        if (!isDraft && isDirectory(path.join(EXAMPLES_DIR, dir)))
            entries[dir] = path.join(EXAMPLES_DIR, dir, 'index.jsx');

        return entries;
    }, {});
}

module.exports = {
    entry: path.resolve(__dirname, './src/index.jsx'),
    devServer: {
        //  static: './demo/__build__',
        //  compress: true,
        port: 9000,
        // historyApiFallback: {
        //     index: 'index.html',
        // },
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
                // include: [path.resolve(__dirname, './src')],
                use: { loader: 'ts-loader' },
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
        // alias: {
        //     'react-modal': path.resolve(__dirname, '../src'),
        // },
    },
};
