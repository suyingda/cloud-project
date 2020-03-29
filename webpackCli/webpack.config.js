'use strict';
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js|\.jsx/, use: 'babel-loader'},
            // {test: /\.ts/, use: 'ts-loader'}
        ]
    },
    // watch: true #package.json
};