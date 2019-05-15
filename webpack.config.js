const path = require('path');
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: './lib/index.js',
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        globalObject: "this",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new cleanWebpackPlugin(),
        new webpack.NormalModuleReplacementPlugin(/^engine.io-client$/, 'engine.io-client-weex'),
    ],
    mode: 'production',
};