'use strict';
const webpack = require('webpack')
const baseData = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', "./src/index"],
    output: {
        filename: "dev-bundle.js",
        path: __dirname + "/dist",
        // publicPath:'/'
    },

    ...baseData,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin()
    ]
};
