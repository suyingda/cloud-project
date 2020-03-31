'use strict';
const path = require('path');
const baseData = require('./webpack.base.config.js');

module.exports = {
    mode: 'development',
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', "./src/index"],
    output: {
        filename: "dev-bundle.js",
        path: __dirname + "/dist",
        publicPath:'/'
    },
    ...baseData
};
