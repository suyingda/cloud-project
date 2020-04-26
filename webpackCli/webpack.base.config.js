// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
module.exports = {
    // Enable sourcemaps for debugging webpack's output.
    // devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        /*  alias: {
             images: path.resolve(__dirname, 'src/images/')
         } */
    },
    plugins: [
        // new MiniCssExtractPlugin()
        // 实现刷新浏览器必写
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            // {test: /\.js|\.jsx/, use: 'babel-loader'},
            {
                test: /\.tsx$/,
                loader: "awesome-typescript-loader",
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'dist')
                ]
            },
            {
                test: /\.(css|less)$/i,
                use: [
                    'style-loader',
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            minimize: true,
                            // localIdentName: "[local]_[hash:base64:5]"
                            localIdentName: "[local]"
                        }
                    },
                    'less-loader'
                ],
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'dist')
                ],
            },
            {
                test: /.(png|jpg|gif|jpeg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            // outputPath:'/'
                        }
                    }
                ],
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, 'dist')
                ]
            }

            //file-loader
            // {enforce: "pre", test: /\.js$/, loader: "source-map-loader"}
        ]
    },

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // }

}
