'use strict';
const path = require('path');
const baseData = require('./webpack.base.config.js');

module.exports = {
    mode: 'production',
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-production-bundle.js'
    },
    // module: {
    //     rules: [
    //         {test: /\.js|\.jsx/, use: 'babel-loader'},
    //         // {test: /\.ts/, use: 'ts-loader'}
    //     ]
    // },
    ...baseData
    // watch: true #package.json
};
