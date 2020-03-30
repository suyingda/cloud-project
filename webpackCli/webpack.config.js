'use strict';
const path = require('path');
const baseData = require('./webpack.base.config.js');

module.exports = {
    mode: 'development',
    entry: "./src/index",
    output: {
        filename: "dev-bundle.js",
        path: __dirname + "/dist"
    },
    ...baseData
};
