const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = true;


module.exports = {
    mode: 'production',
    entry:  path.resolve(__dirname, './../src/main.js'),
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            // chunksSortMode: 'none',   //无限递归子组件问题
            favicon: path.join(__dirname, '../src/static/img/favicon.png'),
        }), //创建html打包后
    ],
    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: 'name.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                // exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react", '@babel/preset-env']
                    },

                }
            },

            {
                test: /(\.sc|\.le|\.c)ss$/,
                use: [
                    {
                        loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    {loader: 'sass-loader'},

                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },

            // {//
            //     test: /\.(css)/,
            //     // exclude: /src/,
            //     use: [
            //         { loader: "style-loader", },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 importLoaders: 1
            //             }
            //         }
            //     ]
            // },
        ]
    }
}
