const path = require('path');
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
        new webpack.NormalModuleReplacementPlugin(/^engine.io-client$/, 'engine.io-client-weex'),
    ],
    mode: 'production',
};