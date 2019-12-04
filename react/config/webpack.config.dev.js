const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = true;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const webpackConfig = smp.wrap({
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../index.html'),
            // chunksSortMode: 'none',   //无限递归子组件问题
            favicon: path.join(__dirname, '../src/static/img/favicon.png'),
        }), //创建html打包后

    ],
});
module.exports = {
    mode: 'development',
    // mode: 'production',
    devtool: "source-map", // any "source-map"-like devtool is possible
    entry: path.resolve(__dirname, './../src/main.js'),
    ...webpackConfig,
    output: {
        path: path.resolve(__dirname, './../dist'),
        filename: 'index.js',
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
    },

    devServer: {
        // historyApiFallback: {
        //     rewrites: [
        //         { from: /.*/, to: path.resolve(__dirname, './../dist')}
        //     ]
        // },
        historyApiFallback: true,
        // contentBase: false,
        //我这里没有设置contentBase，个人研究contentBase必须指向存在的bundle.js文件所在目录，
        //因为这里是开发模式，所以dist目录并不存在，所以用false.
        host: '0.0.0.0',
        port: '3000',
        contentBase: false, // since we use CopyWebpackPlugin.
        // proxy: {
        //     '/': {
        //         target: 'location:33001',
        //         secure: false,
        //         bypass: function (req, res, proxyOptions) {
        //             console.log(req.url, 666)
        //             return '/index.html';
        //             if (req.headers.accept.indexOf('html') !== -1) {
        //                 console.log('Skipping proxy for browser request.');
        //                 return req.url || '/';
        //             }
        //         }
        //     }
        // },
        proxy: {
            // "/api/v1.0": "http://172.18.5.47:9004",
            // "/api/v1.0": "http://172.17.6.128:9004",
            "/api/v1.0": "http://172.16.8.134:96",
            "/zfzh-service/webapi": "http://172.16.8.123:8763",
            "/thirdSystem/": "http://192.168.100.62",
            "/possecu_cs/": "http://120.76.189.28:18281",
            "/speaker/": "http://127.0.0.1:54321",
            "*": "http://120.76.189.28:1241/",
            // "*": {
            //     target: "http://120.76.189.28:1241",
            //     secure: false,
            //     bypass: function (req, res, proxyOptions) {
            //         console.log(req.url, 666)
            //         if (req.headers.accept.indexOf('html') !== -1) {
            //             console.log('Skipping proxy for browser request.');
            //             return 'http://120.76.189.28:1241';
            //         }
            //     }
            // }
        },
        inline: true,//webpack官方推荐
        // watchOptions: {
        //     aggregateTimeout: 2000,//浏览器延迟多少秒更新
        //     poll: 1000//每秒检查一次变动
        // },
        // compress: true,//一切服务都启用gzip 压缩

        hot: true,//启动热更新，必须搭配new webpack.HotModuleReplacementPlugin()插件
        // open: true,


        // // Paths
        // assetsSubDirectory: 'dist',
        // assetsPublicPath: '/',
        // //反代理配置
        // proxyTable: {
        //     // "/api/v1.0":"http://172.16.8.21:9003",
        //     "/api/v1.0": "http://172.18.5.47:9004",
        // },

        // // Various Dev Server settings
        // host: '0.0.0.0', // can be overwritten by process.env.HOST
        // port: 3000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        // // Use Eslint Loader?
        // // If true, your code will be linted during bundling and
        // // linting errors and warnings will be shown in the console.
        // useEslint: false,
        // cssSourceMap: true,
    },
}
