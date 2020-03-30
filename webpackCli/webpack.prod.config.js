'use strict';
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'production-bundle.js'
    },
    module: {
        rules: [
            {test: /\.js|\.jsx/, use: 'babel-loader'},
            // {test: /\.ts/, use: 'ts-loader'}
        ]
    },
    // watch: true #package.json
};
